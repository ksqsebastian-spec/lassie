const routing = /* ROUTING_DATA */ {};

function resolveImage(url) {
  const source = url.searchParams.get('url');
  if (!source) return null;
  if (source.startsWith('/') && !source.startsWith('//')) return source;
  return routing.assetMap[source] ?? null;
}

async function streamLarge(request, env, url, asset) {
  const range = request.headers.get('Range');
  let start = 0, end = asset.size - 1;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${asset.size}` } });
    if (!match[1]) start = Math.max(0, asset.size - Number(match[2]));
    else { start = Number(match[1]); if (match[2]) end = Math.min(end, Number(match[2])); }
    if (start > end || start >= asset.size) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${asset.size}` } });
  }
  const headers = new Headers({ 'Content-Type': asset.type, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes', 'Cache-Control': 'public,max-age=31536000,immutable' });
  if (range) headers.set('Content-Range', `bytes ${start}-${end}/${asset.size}`);
  if (request.method === 'HEAD') return new Response(null, { status: range ? 206 : 200, headers });
  let index = Math.floor(start / asset.chunkSize);
  let offset = start;
  let reader;
  const body = new ReadableStream({
    async pull(controller) {
      try {
        while (!reader && offset <= end) {
          const part = asset.parts[index];
          const partStart = index * asset.chunkSize;
          const localStart = offset - partStart;
          const localEnd = Math.min(part.size - 1, end - partStart);
          const partUrl = new URL(part.path, url);
          const response = await env.ASSETS.fetch(new Request(partUrl, { headers: { Range: `bytes=${localStart}-${localEnd}` } }));
          if (!response.ok) throw new Error(`Asset chunk ${index} unavailable`);
          reader = response.body.getReader();
          offset = partStart + localEnd + 1;
          index++;
        }
        if (!reader) return controller.close();
        const result = await reader.read();
        if (result.done) { reader = undefined; if (offset > end) controller.close(); else return this.pull(controller); }
        else controller.enqueue(result.value);
      } catch (error) { controller.error(error); }
    },
    cancel(reason) { return reader?.cancel(reason); }
  });
  return new Response(body, { status: range ? 206 : 200, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/monitoring') return new Response(null, { status: 204 });
    if (url.pathname.startsWith('/__telemetry/')) return new Response('',{headers:{'Content-Type':'application/javascript'}});
    if(request.method==='POST') {
      const action=routing.actions[request.headers.get('Next-Action')];
      if(action && action.route===url.pathname && await request.text()===action.body) return new Response(action.response,{headers:{'Content-Type':'text/x-component','X-Action-Revalidated':'[[],0,0]','Cache-Control':'no-store'}});
    }
    if (!['GET', 'HEAD'].includes(request.method)) return new Response('The original private backend was not exported.', { status: 501 });
    if (url.pathname === '/_next/image') {
      const imagePath = resolveImage(url);
      if (!imagePath) return new Response('Image not captured', { status: 404 });
      url.pathname = imagePath;
      url.search = '';
    } else if (routing.routes[url.pathname]) {
      if (request.headers.get('RSC') === '1' || url.searchParams.has('_rsc')) {
        const name = url.pathname === '/' ? 'home' : url.pathname.slice(1).replaceAll('/', '-');
        const response = await env.ASSETS.fetch(new Request(new URL(`/__flight/${name}.txt`, url)));
        return new Response(response.body, { headers: { 'Content-Type': 'text/x-component', 'Vary': 'RSC,Next-Router-State-Tree,Next-Router-Prefetch' } });
      }
      url.pathname = routing.routes[url.pathname];
      url.search = '';
    }
    if (routing.largeAssets[url.pathname]) return streamLarge(request, env, url, routing.largeAssets[url.pathname]);
    const response = await env.ASSETS.fetch(new Request(url, request));
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex,nofollow');
    headers.set('X-Content-Type-Options', 'nosniff');
    if (url.pathname.endsWith('.html')) headers.set('Cache-Control', 'public,max-age=0,must-revalidate');
    return new Response(response.body, { status: response.status, headers });
  }
};
