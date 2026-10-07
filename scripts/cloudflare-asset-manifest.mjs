import fs from 'node:fs/promises';
import path from 'node:path';
import { blake3 } from '@noble/hashes/blake3.js';

const directory='dist/client';
const manifest={};
for(const filename of await fs.readdir(directory,{recursive:true})) {
  const location=path.join(directory,filename);
  if(!(await fs.stat(location)).isFile())continue;
  const data=await fs.readFile(location);
  const extension=path.extname(filename).slice(1);
  const digest=blake3(new TextEncoder().encode(data.toString('base64')+extension));
  manifest['/'+filename.replaceAll(path.sep,'/')]={hash:Buffer.from(digest).toString('hex').slice(0,32),size:data.length};
}
await fs.mkdir('output/cloudflare',{recursive:true});
await fs.writeFile('output/cloudflare/manifest.json',JSON.stringify(manifest));
console.log(`Prepared ${Object.keys(manifest).length} Cloudflare assets (${Object.values(manifest).reduce((sum,item)=>sum+item.size,0)} bytes).`);
