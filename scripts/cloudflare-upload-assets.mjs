import fs from 'node:fs/promises';
import path from 'node:path';

const sessionPath=process.argv[2];
if(!sessionPath)throw new Error('Provide the private upload-session JSON path.');
const session=JSON.parse(await fs.readFile(sessionPath,'utf8'));
const manifest=JSON.parse(await fs.readFile('output/cloudflare/manifest.json','utf8'));
const lookup=new Map(Object.entries(manifest).map(([name,item])=>[item.hash,{name,...item}]));
const claims=JSON.parse(Buffer.from(session.jwt.split('.')[1],'base64url'));
const single=claims.upload_mode==='single';
const buckets=single?session.buckets.flat().map(hash=>[hash]):session.buckets;
const contentTypes={html:'text/html',js:'application/javascript',css:'text/css',woff2:'font/woff2',svg:'image/svg+xml',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',mp4:'video/mp4',webm:'video/webm',json:'application/json',txt:'text/plain',vtt:'text/vtt',lottie:'application/zip',wasm:'application/wasm',bin:'application/octet-stream'};
let completed=0,completion=session.jwt;
for(const hashes of buckets) {
  let result;
  for(let attempt=0;attempt<5;attempt++) {
    try {
      const form=new FormData();
      let body,endpoint;
      for(const hash of hashes) {
        const file=lookup.get(hash);
        if(!file)throw new Error('Requested hash missing from local manifest.');
        const data=await fs.readFile(path.join('dist/client',file.name));
        const type=contentTypes[path.extname(file.name).slice(1)]??'application/octet-stream';
        if(single){body=data;endpoint=`/workers/assets/upload/${hash}`;result={type};}
        else form.append(hash,new File([data.toString('base64')],hash,{type}),hash);
      }
      if(!single){body=form;endpoint='/workers/assets/upload?base64=true';}
      const response=await fetch(`https://api.cloudflare.com/client/v4/accounts/${session.accountId}${endpoint}`,{method:'POST',headers:{Authorization:`Bearer ${session.jwt}`,...(single?{'Content-Type':result.type}:{})},body});
      result=await response.json();
      if(!response.ok||!result.success)throw new Error(JSON.stringify(result.errors??{status:response.status}));
      break;
    }catch(error){if(attempt===4)throw error;console.log(`Retrying asset batch (${attempt+1}/5).`);await new Promise(resolve=>setTimeout(resolve,1000*2**attempt));}
  }
  if(result.result?.jwt)completion=result.result.jwt;
  completed+=hashes.length;
  console.log(`Uploaded ${completed}/${session.buckets.flat().length} assets.`);
}
await fs.writeFile(sessionPath.replace('.json','-complete.json'),JSON.stringify({jwt:completion,accountId:session.accountId}),{mode:0o600});
console.log('Asset upload complete; completion token saved privately.');
