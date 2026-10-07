"""Recover referenced public Turbopack chunks omitted by initial page-load capture."""
import concurrent.futures
import json
import re
import urllib.request
from pathlib import Path

folder = Path('public/_next/static/immutable/chunks')
manifest_path = Path('recovery/asset-manifest.json')
manifest = json.loads(manifest_path.read_text())
recovered, rejected, attempted = [], [], set()

def download(name):
    relative = '/_next/static/immutable/chunks/' + name
    url = 'https://www.lassie.ai' + relative
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            data = response.read()
            content_type = response.headers.get('Content-Type', '')
        if 'javascript' not in content_type:
            raise ValueError('Response is not JavaScript')
        (folder / name).write_bytes(data)
        return url, {'path': relative, 'bytes': len(data), 'contentType': content_type}
    except Exception as error:
        return url, {'error': str(error)}

for iteration in range(8):
    missing = set()
    for file in folder.glob('*.js'):
        for candidate in re.findall(r'["\x27`]((?:[./\w-]+/)?[\w-]{8,}\.js)["\x27`]', file.read_text()):
            name = candidate.split('/')[-1]
            if re.fullmatch(r'[a-z0-9_-]+\.js', name) and not (folder / name).exists() and name not in attempted:
                missing.add(name)
    if not missing:
        break
    attempted.update(missing)
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for url, result in pool.map(download, sorted(missing)):
            if 'error' in result:
                rejected.append({'url': url, **result})
            else:
                manifest[url] = result
                recovered.append(url)
    print(f'Graph pass {iteration + 1}: recovered {len(recovered)} chunks total.', flush=True)
manifest_path.write_text(json.dumps(manifest, indent=2))
Path('recovery/lazy-chunk-report.json').write_text(json.dumps({'recovered': recovered, 'non_chunk_references': rejected}, indent=2))
print(f'Recovered {len(recovered)} lazy chunks; {len(rejected)} non-chunk references.')
