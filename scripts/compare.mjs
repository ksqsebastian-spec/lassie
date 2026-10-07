import sharp from 'sharp';
import pixelmatch from 'pixelmatch';
import fs from 'node:fs/promises';
const root=process.cwd()+'/output/playwright/';
const results=[];
for(const [label,width,height]of [['home',1440,900],['home',390,844],['company',1440,900],['company',390,844],['get-started',1440,900],['book-a-demo',390,844]]){
 const left=root+`${label}-${width}-source-paired.jpg`,right=root+`${label}-${width}-restored-paired.jpg`;
 await sharp({create:{width:width*2,height,channels:3,background:'#fff'}}).composite([{input:left,left:0,top:0},{input:right,left:width,top:0}]).png().toFile(root+`${label}-${width}-comparison.png`);
 let region=label==='company'?{left:0,top:80,width,height:Math.min(height-80,600)}:label==='get-started'?{left:180,top:100,width:730,height:470}:null;
 if(region){
  const a=await sharp(left).extract(region).ensureAlpha().raw().toBuffer(),b=await sharp(right).extract(region).ensureAlpha().raw().toBuffer();
  const diff=Buffer.alloc(a.length);const pixels=pixelmatch(a,b,diff,region.width,region.height,{threshold:0.1});results.push({label,width,region,pixels,total:region.width*region.height,differencePercent:pixels/(region.width*region.height)*100});
  await sharp(diff,{raw:{width:region.width,height:region.height,channels:4}}).png().toFile(root+`${label}-${width}-diff.png`);
 }
}
await fs.writeFile(root+'pixel-comparison.json',JSON.stringify(results,null,2));console.log(results);
