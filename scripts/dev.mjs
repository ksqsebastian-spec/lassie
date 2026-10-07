import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';
import worker from '../dist/server/worker.mjs';

const args = process.argv.slice(2);
const port = Number(args[args.indexOf('--port') + 1]) || 4173;
const root = path.resolve('dist/client');
const mime = { '.html':'text/html; charset=utf-8', '.js':'application/javascript', '.css':'text/css', '.woff2':'font/woff2', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.mp4':'video/mp4', '.webm':'video/webm', '.json':'application/json', '.txt':'text/plain', '.bin':'application/octet-stream', '.lottie':'application/zip', '.wasm':'application/wasm' };
const env = { ASSETS: { async fetch(request) {
  const filename = path.resolve(root, '.' + decodeURIComponent(new URL(request.url).pathname));
  if (!filename.startsWith(root + path.sep)) return new Response('Not found', { status: 404 });
  try {
    const data = await fs.readFile(filename);
    const headers = { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream', 'Accept-Ranges':'bytes', 'Content-Length':String(data.length) };
    const range = request.headers.get('Range');
    if (range) {
      const match = /^bytes=(\d+)-(\d*)$/.exec(range);
      if (!match) return new Response(null, { status: 416 });
      const start=Number(match[1]),end=match[2]?Math.min(Number(match[2]),data.length-1):data.length-1;
      headers['Content-Range']=`bytes ${start}-${end}/${data.length}`;
      headers['Content-Length']=String(end-start+1);
      return new Response(request.method==='HEAD'?null:data.subarray(start,end+1),{status:206,headers});
    }
    return new Response(request.method==='HEAD'?null:data,{headers});
  } catch { return new Response('Not found', { status: 404 }); }
} } };

http.createServer(async (req,res) => {
  try {
    const chunks=[];
    if(!['GET','HEAD'].includes(req.method))for await(const chunk of req)chunks.push(chunk);
    const request = new Request(`http://localhost:${port}${req.url}`, { method:req.method,headers:req.headers,...(chunks.length?{body:Buffer.concat(chunks)}:{}) });
    const response = await worker.fetch(request,env);
    res.writeHead(response.status,Object.fromEntries(response.headers));
    if (response.body && req.method!=='HEAD') Readable.fromWeb(response.body).pipe(res); else res.end();
  } catch (error) { console.error(error); res.writeHead(500); res.end('Internal error'); }
}).listen(port,'0.0.0.0',()=>console.log(`Lassie recovery: http://localhost:${port}`));
