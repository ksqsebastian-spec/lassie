import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { load } from 'cheerio';

const root = process.cwd();
const output = path.join(root, 'dist/client');
const server = path.join(root, 'dist/server');
const manifest = JSON.parse(await fs.readFile('recovery/asset-manifest.json', 'utf8'));
const capture = JSON.parse(await fs.readFile('recovery/capture.json', 'utf8'));
await fs.rm(path.join(root, 'dist'), { recursive: true, force: true });
await fs.mkdir(output, { recursive: true });
await fs.mkdir(server, { recursive: true });
const assetMap = {};
const largeAssets = {};
const routes = {};
const actions = Object.fromEntries(JSON.parse(await fs.readFile('recovery/company-actions.json','utf8')).map(action=>[action.action,{route:'/company',body:action.body,response:action.response}]));
const chunkSize = 20 * 1024 * 1024;
const assetLimit = 25 * 1024 * 1024;
const origins = ['https://cdn.lassie.ai', 'https://storage.googleapis.com', 'https://cdn.jsdelivr.net', 'https://cdn.sanity.io'];
const moduleIndex = JSON.parse(await fs.readFile('recovery/module-index.json', 'utf8'));
const trackingOverrides = {
  817255: '(context)=>{const noop=()=>{};context.s(["tracker",0,{track:async()=>"",identify:noop,page:noop,reset:noop,updateUtmData:noop,hightouch:{track:noop,identify:noop,page:noop,ready:async()=>{}}}],817255)}',
  322060: '(context,module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.GoogleTagManager=()=>null;exports.sendGTMEvent=()=>{}}',
  751079: '(context,module,exports)=>{Object.defineProperty(exports,"__esModule",{value:true});exports.GoogleAnalytics=()=>null;exports.sendGAEvent=()=>{}}',
  861976: '(context)=>{context.s(["ClientTracking",0,()=>null],861976)}'
};

function localize(text) {
  for (const origin of origins) text = text.replaceAll(origin, `/__origin/${new URL(origin).hostname}`);
  text=text.replaceAll('https://www.googletagmanager.com','/__telemetry');
  return text;
}

for (const [url, item] of Object.entries(manifest)) {
  const remote = new URL(url);
  const destination = remote.hostname === 'www.lassie.ai' ? item.path : `/__origin/${remote.hostname}${remote.pathname}`;
  assetMap[url] = destination;
  let data = await fs.readFile(path.join(root, 'public', item.path));
  if (/\.(?:js|css)$/.test(destination)) {
    let text=data.toString('utf8');
    const patches=moduleIndex.modules.filter(module=>module.chunk===path.basename(destination) && trackingOverrides[module.ids[0]]).sort((a,b)=>b.start-a.start);
    for(const module of patches) text=text.slice(0,module.start)+trackingOverrides[module.ids[0]]+text.slice(module.end);
    data=Buffer.from(localize(text));
  }
  if (data.length > assetLimit) {
    const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0, 16);
    const parts = [];
    for (let offset = 0, i = 0; offset < data.length; offset += chunkSize, i++) {
      const partPath = `/__large-assets/${hash}/${i}.bin`;
      const part = data.subarray(offset, offset + chunkSize);
      await fs.mkdir(path.dirname(path.join(output, partPath)), { recursive: true });
      await fs.writeFile(path.join(output, partPath), part);
      parts.push({ path: partPath, size: part.length });
    }
    largeAssets[destination] = { size: data.length, type: item.contentType, parts, chunkSize };
  } else {
    await fs.mkdir(path.dirname(path.join(output, destination)), { recursive: true });
    await fs.writeFile(path.join(output, destination), data);
  }
}

for (const page of capture.records) {
  let html = localize(await fs.readFile(`recovery/pages/${page.name}.html`, 'utf8'));
  const $ = load(html);
  // The exported UI should not send visits to the source site's advertising accounts.
  $('script[src]').each((_, element) => {
    const src = $(element).attr('src') ?? '';
    if (src.startsWith('https:')) $(element).remove();
  });
  $('script:not([src])').each((_, element) => {
    const text=$(element).html() ?? '';
    if(text.includes('self.__next_s') && /googletagmanager|unifyintent/.test(text)) $(element).remove();
  });
  $('link[as="script"]').each((_, element) => {
    if (($(element).attr('href') ?? '').startsWith('https:')) $(element).remove();
  });
  $('meta[name="robots"]').remove();
  $('head').append('<meta name="robots" content="noindex,nofollow"><script src="/recovery-runtime.js" defer></script>');
  $('a[href]').each((_, element) => { $(element).attr('href', $(element).attr('href').trim()); });
  html = $.html();
  const documentPath = page.route === '/' ? '/index.html' : `${page.route}.html`;
  routes[page.route] = documentPath;
  await fs.mkdir(path.dirname(path.join(output, documentPath)), { recursive: true });
  await fs.writeFile(path.join(output, documentPath), html);

  // Preserve the deployed React Flight payload for prefetch requests.
  let flight = '';
  $('script:not([src])').each((_, element) => {
    const text = $(element).html() ?? '';
    const match = text.match(/^self\.__next_f\.push\((\[.*\])\)$/s);
    if (match) {
      try { const part = JSON.parse(match[1]); if (part[0] === 1) flight += part[1]; } catch {}
    }
  });
  await fs.mkdir(path.join(output, '__flight'), { recursive: true });
  await fs.writeFile(path.join(output, '__flight', `${page.name}.txt`), flight);
}

await fs.copyFile('scripts/runtime.js', path.join(output, 'recovery-runtime.js'));
await fs.writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
const routing = { assetMap, largeAssets, routes, actions };
await fs.writeFile(path.join(server, 'routing.json'), JSON.stringify(routing, null, 2));
const worker = await fs.readFile('worker/index.mjs', 'utf8');
await fs.writeFile(path.join(server, 'worker.mjs'), worker.replace('/* ROUTING_DATA */ {}', JSON.stringify(routing)));
console.log(`Built ${capture.records.length} recovered pages, ${Object.keys(manifest).length} assets, ${Object.keys(largeAssets).length} streamed large assets.`);
