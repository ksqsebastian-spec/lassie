import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import worker from '../dist/server/worker.mjs';

const routing=JSON.parse(await fs.readFile('dist/server/routing.json','utf8'));
const manifest=JSON.parse(await fs.readFile('recovery/asset-manifest.json','utf8'));
const base=process.argv[2];
const results=[];
for(const [pathname,asset]of Object.entries(routing.largeAssets)) {
  const remote=Object.keys(routing.assetMap).find(url=>routing.assetMap[url]===pathname);
  const original=await fs.readFile(path.join('public',manifest[remote].path));
  const start=asset.chunkSize-32,end=asset.chunkSize+31;
  const modes=base?['live']:['native-ranges','full-file-binding'];
  for(const mode of modes) {
    const request=new Request((base??'https://local.test')+pathname,{headers:{Range:`bytes=${start}-${end}`}});
    const response=base?await fetch(request):await worker.fetch(request,{ASSETS:{async fetch(partRequest){
      const data=await fs.readFile(path.join('dist/client',new URL(partRequest.url).pathname));
      if(mode==='full-file-binding')return new Response(data);
      const match=/bytes=(\d+)-(\d+)/.exec(partRequest.headers.get('Range'));
      const a=Number(match[1]),b=Number(match[2]);
      return new Response(data.subarray(a,b+1),{status:206,headers:{'Content-Range':`bytes ${a}-${b}/${data.length}`}});
    }}});
    const data=Buffer.from(await response.arrayBuffer());
    assert.equal(response.status,206);
    assert.equal(data.length,64);
    assert.deepEqual(data,original.subarray(start,end+1));
    results.push({pathname,mode,status:response.status,bytes:data.length,matches:true,contentRange:response.headers.get('Content-Range')});
  }
}
console.log(JSON.stringify(results,null,2));
