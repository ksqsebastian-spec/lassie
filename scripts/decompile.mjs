import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from '@babel/parser';
import generate from '@babel/generator';

const directory = 'public/_next/static/immutable/chunks';
const files = (await fs.readdir(directory)).filter(name => name.endsWith('.js')).sort();
const output = 'recovery/readable-chunks';
await fs.rm(output,{recursive:true,force:true});
await fs.mkdir(output, { recursive:true });
const decompiler = spawnSync('node_modules/.bin/wakaru', [...files.map(file=>path.join(directory,file)), '--unpack', '--level','minimal','--json','--diagnostics','-o',output], { encoding:'utf8', maxBuffer:50*1024*1024 });
await fs.writeFile('recovery/full-wakaru-report.json',decompiler.stdout);
await fs.writeFile('recovery/wakaru-diagnostics.txt',decompiler.stderr);

const modules=[];
await fs.rm('recovery/modules',{recursive:true,force:true});
await fs.mkdir('recovery/modules',{recursive:true});
for (const filename of files) {
  const code=await fs.readFile(path.join(directory,filename),'utf8');
  const ast=parse(code,{sourceType:'unambiguous'});
  const stack=[ast];
  while (stack.length) {
    const node=stack.pop();
    if (!node || typeof node!=='object') continue;
    if(node.type==='CallExpression' && node.callee.type==='MemberExpression' && node.callee.property.name==='push' && code.slice(node.callee.start,node.callee.end).includes('TURBOPACK') && node.arguments[0]?.type==='ArrayExpression') {
      let ids=[];
      for (const part of node.arguments[0].elements.slice(1)) {
        if(part?.type==='NumericLiteral')ids.push(part.value);
        else if (['ArrowFunctionExpression','FunctionExpression'].includes(part?.type)) {
          if(ids.length) {
            const moduleName=`${filename.replace('.js','')}-${ids[0]}.js`;
            const recovered=generate(part,{comments:true,compact:false}).code;
            await fs.writeFile(`recovery/modules/${moduleName}`,`// Recovered from ${filename}. Runtime module IDs: ${ids.join(', ')}.\n// This factory requires the original Turbopack runtime context.\nexport default ${recovered};\n`);
            modules.push({ids,file:moduleName,chunk:filename,start:part.start,end:part.end});
          }
          ids=[];
        }
      }
    }
    for(const value of Object.values(node)) {
      if(Array.isArray(value))stack.push(...value.filter(x=>x && typeof x==='object' && x.type));
      else if(value && typeof value==='object' && value.type)stack.push(value);
    }
  }
}
await fs.writeFile('recovery/module-index.json',JSON.stringify({chunks:files.length,modules},null,2));
console.log(`Recovered ${files.length} readable chunks and ${modules.length} Turbopack module factories; Wakaru exit ${decompiler.status}.`);
