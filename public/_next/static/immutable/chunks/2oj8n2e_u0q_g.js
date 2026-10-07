;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="02fcaaf2-7bcf-b658-c104-791001bb6319")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,666258,e=>{"use strict";var t=e.i(175444),r=e.i(337654);let i={};e.s(["getTextureBatchBindGroup",0,function(e,n,s){let a=0x811c9dc5;for(let t=0;t<n;t++)a^=e[t].uid,a=Math.imul(a,0x1000193)>>>0;return i[a]||function(e,n,s,a){let o={},u=0;for(let t=0;t<a;t++){let i=t<n?e[t]:r.Texture.EMPTY.source;o[u++]=i.source,o[u++]=i.style}let l=new t.BindGroup(o);return i[s]=l,l}(e,n,a,s)}])},550027,565557,563541,589627,443122,272589,387862,50644,430160,e=>{"use strict";var t,r=e.i(733705);class i{constructor(e){"number"==typeof e?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw Error(`${e} isn't a valid view type`)}}}e.s(["ViewableBuffer",0,i],565557);var n=e.i(727905),s=e.i(609932);function a(e,t,r,i){if(r??(r=0),i??(i=Math.min(e.byteLength-r,t.byteLength)),7&r||7&i)if(3&r||3&i)new Uint8Array(t).set(new Uint8Array(e,r,i));else{let n=i/4;new Float32Array(t,0,n).set(new Float32Array(e,r,n))}else{let n=i/8;new Float64Array(t,0,n).set(new Float64Array(e,r,n))}}e.s(["fastCopy",0,a],563541);let o={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var u=((t=u||{})[t.DISABLED=0]="DISABLED",t[t.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",t[t.MASK_ACTIVE=2]="MASK_ACTIVE",t[t.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",t[t.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",t[t.NONE=5]="NONE",t);function l(e,t){return"no-premultiply-alpha"===t.alphaMode&&o[e]||e}e.s(["BLEND_TO_NPM",0,o,"STENCIL_MODES",0,u],589627),e.s(["getAdjustedBlendModeBlend",0,l],443122);var h=e.i(426832);function c(e,t){if(0===e)throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");let r=t.createShader(t.FRAGMENT_SHADER);try{for(;;){let i="precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi,function(e){let t="";for(let r=0;r<e;++r)r>0&&(t+="\nelse "),r<e-1&&(t+=`if(test == ${r}.0){}`);return t}(e));if(t.shaderSource(r,i),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))break;e=e/2|0}}finally{t.deleteShader(r)}return e}e.s(["checkMaxIfStatementsInShader",0,c],272589);let d=null;function f(){if(d)return d;let e=(0,h.getTestContext)();return d=c(d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),e),e.getExtension("WEBGL_lose_context")?.loseContext(),d}e.s(["getMaxTexturesPerBatch",0,f],387862);class m{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}e.s(["BatchTextureArray",0,m],50644);class x{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new m,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}let p=[],v=0;function g(){return v>0?p[--v]:new x}function b(e){e.elements=null,p[v++]=e}s.GlobalResourceRegistry.register({clear:()=>{if(p.length>0)for(let e of p)e&&e.destroy();p.length=0,v=0}});let _=0,y=class e{constructor(t){this.uid=(0,r.uid)("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],(t={...e.defaultOptions,...t}).maxTextures||((0,n.deprecation)("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),t.maxTextures=f());const{maxTextures:s,attributesInitialSize:a,indicesInitialSize:o}=t;this.attributeBuffer=new i(4*a),this.indexBuffer=new Uint16Array(o),this.maxTextures=s}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)b(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){let r=e._batch.textures.ids[t._source.uid];return(!!r||0===r)&&(e._textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0;let t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){let t=this._elements;if(!t[this.elementStart])return;let r=g(),i=r.textures;i.clear();let n=t[this.elementStart],s=l(n.blendMode,n.texture._source),a=n.topology;4*this.attributeSize>this.attributeBuffer.size&&this._resizeAttributeBuffer(4*this.attributeSize),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let o=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,h=this.indexBuffer,c=this._batchIndexSize,d=this._batchIndexStart,f="startBatch",m=[],x=this.maxTextures;for(let n=this.elementStart;n<this.elementSize;++n){let p=t[n];t[n]=null;let v=p.texture._source,b=l(p.blendMode,v),y=s!==b||a!==p.topology;if(v._batchTick===_&&!y){p._textureId=v._textureBindLocation,c+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,o,u,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,o,u,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize)),p._batch=r,m.push(p);continue}v._batchTick=_,(i.count>=x||y)&&(this._finishBatch(r,d,c-d,i,s,a,e,f,m),f="renderBatch",d=c,s=b,a=p.topology,(i=(r=g()).textures).clear(),m=[],++_),p._textureId=v._textureBindLocation=i.count,i.ids[v.uid]=i.count,i.textures[i.count++]=v,p._batch=r,m.push(p),c+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,o,u,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,o,u,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize))}i.count>0&&(this._finishBatch(r,d,c-d,i,s,a,e,f,m),d=c,++_),this.elementStart=this.elementSize,this._batchIndexStart=d,this._batchIndexSize=c}_finishBatch(e,t,r,i,n,s,a,o,u){e.gpuBindGroup=null,e.bindGroup=null,e.action=o,e.batcher=this,e.textures=i,e.blendMode=n,e.topology=s,e.start=t,e.size=r,e.elements=u,++_,this.batches[this.batchIndex++]=e,a.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){4*e<=this.attributeBuffer.size||this._resizeAttributeBuffer(4*e)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=new i(Math.max(e,2*this.attributeBuffer.size));a(this.attributeBuffer.rawBinaryData,t.rawBinaryData),this.attributeBuffer=t}_resizeIndexBuffer(e){let t=this.indexBuffer,r=Math.max(e,1.5*t.length);r+=r%2;let i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let e=0;e<t.length;e++)i[e]=t[e];else a(t.buffer,i.buffer);this.indexBuffer=i}packQuadIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}packIndex(e,t,r,i){let n=e.indices,s=e.indexSize,a=e.indexOffset,o=e.attributeOffset;for(let e=0;e<s;e++)t[r++]=i+n[e+a]-o}destroy(e={}){if(null!==this.batches){for(let e=0;e<this.batchIndex;e++)b(this.batches[e]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&(this.shader?.destroy(),this.shader=null);for(let e=0;e<this._elements.length;e++)this._elements[e]&&(this._elements[e]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};y.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6},e.s(["Batch",0,x,"Batcher",0,y],550027);var S=e.i(55585),w=e.i(294212),T=e.i(719885);let B=new Float32Array(1),A=new Uint32Array(1);class I extends T.Geometry{constructor(){const e=new S.Buffer({data:B,label:"attribute-batch-buffer",usage:w.BufferUsage.VERTEX|w.BufferUsage.COPY_DST,shrinkToFit:!1});super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:24,offset:0},aUV:{buffer:e,format:"float32x2",stride:24,offset:8},aColor:{buffer:e,format:"unorm8x4",stride:24,offset:16},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:24,offset:20}},indexBuffer:new S.Buffer({data:A,label:"index-batch-buffer",usage:w.BufferUsage.INDEX|w.BufferUsage.COPY_DST,shrinkToFit:!1})})}}e.s(["BatchGeometry",0,I],430160)},933261,310828,217055,e=>{"use strict";var t=e.i(78278),r=e.i(550027),i=e.i(430160),n=e.i(959684),s=e.i(815343),a=e.i(229972),o=e.i(188578),u=e.i(403976),l=e.i(761149);class h extends l.Shader{constructor(e){super({glProgram:(0,n.compileHighShaderGlProgram)({name:"batch",bits:[s.colorBitGl,(0,a.generateTextureBatchBitGl)(e),o.roundPixelsBitGl]}),gpuProgram:(0,n.compileHighShaderGpuProgram)({name:"batch",bits:[s.colorBit,(0,a.generateTextureBatchBit)(e),o.roundPixelsBit]}),resources:{batchSamplers:(0,u.getBatchSamplersUniformGroup)(e)}}),this.maxTextures=e}}e.s(["DefaultShader",0,h],310828);let c=null,d=class e extends r.Batcher{constructor(t){super(t),this.geometry=new i.BatchGeometry,this.name=e.extension.name,this.vertexSize=6,c??(c=new h(t.maxTextures)),this.shader=c}packAttributes(e,t,r,i,n){let s=n<<16|65535&e.roundPixels,a=e.transform,o=a.a,u=a.b,l=a.c,h=a.d,c=a.tx,d=a.ty,{positions:f,uvs:m}=e,x=e.color,p=e.attributeOffset,v=p+e.attributeSize;for(let e=p;e<v;e++){let n=2*e,a=f[n],p=f[n+1];t[i++]=o*a+l*p+c,t[i++]=h*p+u*a+d,t[i++]=m[n],t[i++]=m[n+1],r[i++]=x,r[i++]=s}}packQuadAttributes(e,t,r,i,n){let s=e.texture,a=e.transform,o=a.a,u=a.b,l=a.c,h=a.d,c=a.tx,d=a.ty,f=e.bounds,m=f.maxX,x=f.minX,p=f.maxY,v=f.minY,g=s.uvs,b=e.color,_=n<<16|65535&e.roundPixels;t[i+0]=o*x+l*v+c,t[i+1]=h*v+u*x+d,t[i+2]=g.x0,t[i+3]=g.y0,r[i+4]=b,r[i+5]=_,t[i+6]=o*m+l*v+c,t[i+7]=h*v+u*m+d,t[i+8]=g.x1,t[i+9]=g.y1,r[i+10]=b,r[i+11]=_,t[i+12]=o*m+l*p+c,t[i+13]=h*p+u*m+d,t[i+14]=g.x2,t[i+15]=g.y2,r[i+16]=b,r[i+17]=_,t[i+18]=o*x+l*p+c,t[i+19]=h*p+u*x+d,t[i+20]=g.x3,t[i+21]=g.y3,r[i+22]=b,r[i+23]=_}_updateMaxTextures(e){this.shader.maxTextures!==e&&(c=new h(e),this.shader=c)}destroy(){this.shader=null,super.destroy()}};d.extension={type:[t.ExtensionType.Batcher],name:"default"},e.s(["DefaultBatcher",0,d],933261),e.s(["GCManagedHash",0,class{constructor(e){this.items=Object.create(null);const{renderer:t,type:r,onUnload:i,priority:n,name:s}=e;this._renderer=t,t.gc.addResourceHash(this,"items",r,n??0),this._onUnload=i,this.name=s}add(e){return!this.items[e.uid]&&(this.items[e.uid]=e,e.once("unload",this.remove,this),e._gcLastUsed=this._renderer.gc.now,!0)}remove(e,...t){if(!this.items[e.uid])return;let r=e._gpuData[this._renderer.uid];r&&(this._onUnload?.(e,...t),r.destroy(),e._gpuData[this._renderer.uid]=null,this.items[e.uid]=null)}removeAll(...e){Object.values(this.items).forEach(t=>t&&this.remove(t,...e))}destroy(...e){this.removeAll(...e),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}],217055)},959684,204528,223349,948180,232391,560370,751360,843822,210677,815343,229972,188578,e=>{"use strict";var t=e.i(550645),r=e.i(818011),i=e.i(562140);function n(e,t,r){if(e)for(let n in e){let s=t[n.toLocaleLowerCase()];if(s){let t=e[n];"header"===n&&(t=t.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),r&&s.push(`//----${r}----//`),s.push(t)}else(0,i.warn)(`${n} placement hook does not exist in shader`)}}e.s(["addBits",0,n],204528);let s=/\{\{(.*?)\}\}/g;function a(e){let t={};return(e.match(s)?.map(e=>e.replace(/[{()}]/g,""))??[]).forEach(e=>{t[e]=[]}),t}function o(e,t){let r,i=/@in\s+([^;]+);/g;for(;null!==(r=i.exec(e));)t.push(r[1])}function u(e,t,r=!1){let i=[];o(t,i),e.forEach(e=>{e.header&&o(e.header,i)}),r&&i.sort();let n=i.map((e,t)=>`       @location(${t}) ${e},`).join("\n"),s=t.replace(/@in\s+[^;]+;\s*/g,"");return s.replace("{{in}}",`
${n}
`)}function l(e,t){let r,i=/@out\s+([^;]+);/g;for(;null!==(r=i.exec(e));)t.push(r[1])}function h(e,t){let r=[];l(t,r),e.forEach(e=>{e.header&&l(e.header,r)});let i=0,n=r.sort().map(e=>e.indexOf("builtin")>-1?e:`@location(${i++}) ${e}`).join(",\n"),s=r.sort().map(e=>`       var ${e.replace(/@.*?\s+/g,"")};`).join("\n"),a=`return VSOutput(
            ${r.sort().map(e=>{let t;return` ${(t=/\b(\w+)\s*:/g.exec(e))?t[1]:""}`}).join(",\n")});`,o=t.replace(/@out\s+[^;]+;\s*/g,"");return(o=(o=o.replace("{{struct}}",`
${n}
`)).replace("{{start}}",`
${s}
`)).replace("{{return}}",`
${a}
`)}function c(e,t){let r=e;for(let e in t){let i=t[e];r=i.join("\n").length?r.replace(`{{${e}}}`,`//-----${e} START-----//
${i.join("\n")}
//----${e} FINISH----//`):r.replace(`{{${e}}}`,"")}return r}e.s(["compileHooks",0,a],223349),e.s(["compileInputs",0,u],948180),e.s(["compileOutputs",0,h],232391),e.s(["injectBits",0,c],560370);let d=Object.create(null),f=new Map,m=0;function x({template:e,bits:t}){var r,i;let n,s,a,o=v(e,t);if(d[o])return d[o];let{vertex:l,fragment:c}=(r=e,n=(i=t).map(e=>e.vertex).filter(e=>!!e),s=i.map(e=>e.fragment).filter(e=>!!e),a=u(n,r.vertex,!0),{vertex:a=h(n,a),fragment:u(s,r.fragment,!0)});return d[o]=g(l,c,t),d[o]}function p({template:e,bits:t}){let r=v(e,t);return d[r]||(d[r]=g(e.vertex,e.fragment,t)),d[r]}function v(e,t){return t.map(e=>(f.has(e)||f.set(e,m++),f.get(e))).sort((e,t)=>e-t).join("-")+e.vertex+e.fragment}function g(e,t,r){let i=a(e),s=a(t);return r.forEach(e=>{n(e.vertex,i,e.name),n(e.fragment,s,e.name)}),{vertex:c(e,i),fragment:c(t,s)}}e.s(["compileHighShader",0,x,"compileHighShaderGl",0,p],751360);let b=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,_=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,y=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,S=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`;e.s(["fragmentGPUTemplate",0,_,"fragmentGlTemplate",0,S,"vertexGPUTemplate",0,b,"vertexGlTemplate",0,y],843822);let w={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},T={name:"global-uniforms-ubo-bit",vertex:{header:`
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `}},B={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};e.s(["globalUniformsBit",0,w,"globalUniformsBitGl",0,B,"globalUniformsUBOBitGl",0,T],210677),e.s(["compileHighShaderGlProgram",0,function({bits:e,name:r}){return new t.GlProgram({name:r,...p({template:{vertex:y,fragment:S},bits:[B,...e]})})},"compileHighShaderGpuProgram",0,function({bits:e,name:t}){let i=x({template:{fragment:_,vertex:b},bits:[w,...e]});return r.GpuProgram.from({name:t,vertex:{source:i.vertex,entryPoint:"main"},fragment:{source:i.fragment,entryPoint:"main"}})}],959684);let A={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},I={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}};e.s(["colorBit",0,A,"colorBitGl",0,I],815343);let E={},C={};e.s(["generateTextureBatchBit",0,function(e){return E[e]||(E[e]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${function(e){let t=[];if(1===e)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let r=0;for(let i=0;i<e;i++)t.push(`@group(1) @binding(${r++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${r++}) var textureSampler${i+1}: sampler;`)}return t.join("\n")}(e)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${function(e){let t=[];if(1===e)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let r=0;r<e;r++)r===e-1?t.push("  default:{"):t.push(`  case ${r}:{`),t.push(`      outColor = textureSampleGrad(textureSource${r+1}, textureSampler${r+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join("\n")}(e)}
            `}}),E[e]},"generateTextureBatchBitGl",0,function(e){return C[e]||(C[e]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${e}];

            `,main:`

                ${function(e){let t=[];for(let r=0;r<e;r++)r>0&&t.push("else"),r<e-1&&t.push(`if(vTextureId < ${r}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${r}], vUV);`),t.push("}");return t.join("\n")}(e)}
            `}}),C[e]}],229972);let P={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},V={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}};e.s(["roundPixelsBit",0,P,"roundPixelsBitGl",0,V],188578)},403976,e=>{"use strict";var t=e.i(153594);let r={};e.s(["getBatchSamplersUniformGroup",0,function(e){let i=r[e];if(i)return i;let n=new Int32Array(e);for(let t=0;t<e;t++)n[t]=t;return r[e]=new t.UniformGroup({uTextures:{value:n,type:"i32",size:e}},{isStatic:!0})}])},164868,694427,737880,220892,896704,176684,463337,e=>{"use strict";let t;var r,i=e.i(222735),n=e.i(78278);let s=[];async function a(e){if(!e)for(let e=0;e<s.length;e++){let t=s[e];if(t.value.test())return void await t.value.load()}}async function o(e){return a(!e)}n.extensions.handleByNamedList(n.ExtensionType.Environment,s),e.s(["autoDetectEnvironment",0,o,"loadEnvironmentExtensions",0,a],694427);var u=e.i(275576);function l(){if("boolean"==typeof t)return t;try{let e=Function("param1","param2","param3","return param1[param2] === param3;");t=!0===e({a:"b"},"a","b")}catch(e){t=!1}return t}e.s(["unsafeEvalSupported",0,l],737880);var h=e.i(733705),c=e.i(727905),d=e.i(609932),f=((r=f||{})[r.NONE=0]="NONE",r[r.COLOR=16384]="COLOR",r[r.STENCIL=1024]="STENCIL",r[r.DEPTH=256]="DEPTH",r[r.COLOR_DEPTH=16640]="COLOR_DEPTH",r[r.COLOR_STENCIL=17408]="COLOR_STENCIL",r[r.DEPTH_STENCIL=1280]="DEPTH_STENCIL",r[r.ALL=17664]="ALL",r);e.s(["CLEAR",0,f],220892);class m{constructor(e){this.items=[],this._name=e}emit(e,t,r,i,n,s,a,o){let{name:u,items:l}=this;for(let h=0,c=l.length;h<c;h++)l[h][u](e,t,r,i,n,s,a,o);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return -1!==t&&this.items.splice(t,1),this}contains(e){return -1!==this.items.indexOf(e)}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return 0===this.items.length}get name(){return this._name}}e.s(["SystemRunner",0,m],896704);var x=e.i(263524);let p=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],v=class e extends x.default{constructor(e){super(),this.tick=0,this.uid=(0,h.uid)("renderer"),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...p,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(t={}){let r=!0===t.skipExtensionImports||!1===t.manageImports;for(let e in await a(r),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors),this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...e.defaultOptions,...t},this._roundPixels=+!!t.roundPixels;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(e,t){this.tick++;let r=e;if(r instanceof u.Container&&(r={container:r},t&&((0,c.deprecation)(c.v8_0_0,"passing a second argument is deprecated, please use render options instead"),r.target=t.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor??(r.clearColor=this.background.colorRgba),r.clear??(r.clear=this.background.clearBeforeRender)),r.clearColor){let e=Array.isArray(r.clearColor)&&4===r.clearColor.length;r.clearColor=e?r.clearColor:i.Color.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.visible&&(r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r))}resize(e,t,r){let i=this.view.resolution;this.view.resize(e,t,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),void 0!==r&&r!==i&&this.runners.resolutionChange.emit(r)}clear(e={}){e.target||(e.target=this.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=f.ALL);let{clear:t,clearColor:r,target:n,mipLevel:s,layer:a}=e;i.Color.shared.setValue(r??this.background.colorRgba),this.renderTarget.clear(n,t,i.Color.shared.toArray(),s??0,a??0)}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(e=>{this.runners[e]=new m(e)})}_addSystems(e){let t;for(t in e){let r=e[t];this._addSystem(r.value,r.name)}}_addSystem(e,t){let r=new e(this);if(this[t])throw Error(`Whoops! The name "${t}" is already in use`);for(let e in this[t]=r,this._systemsHash[t]=r,this.runners)this.runners[e].add(r);return this}_addPipes(e,t){let r=t.reduce((e,t)=>(e[t.name]=t.value,e),{});e.forEach(e=>{let t=e.value,i=e.name,n=r[i];this.renderPipes[i]=new t(this,n?new n:null),this.runners.destroy.add(this.renderPipes[i])})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),(!0===e||"object"==typeof e&&e.releaseGlobalResources)&&d.GlobalResourceRegistry.release(),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null,this.removeAllListeners()}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!l())throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};v.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1},e.s(["AbstractRenderer",0,v],164868);let g="8.19.0";e.s(["DATA_URI",0,/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,"VERSION",0,g],176684);class b{static init(){globalThis.__PIXI_APP_INIT__?.(this,g)}static destroy(){}}b.extension=n.ExtensionType.Application;class _{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,g)}destroy(){this._renderer=null}}_.extension={type:[n.ExtensionType.WebGLSystem,n.ExtensionType.WebGPUSystem],name:"initHook",priority:-10},e.s(["ApplicationInitHook",0,b,"RendererInitHook",0,_],463337)},149034,e=>{"use strict";e.s(["color32BitToUniform",0,function(e,t,r){let i=(e>>24&255)/255;t[r++]=(255&e)/255*i,t[r++]=(e>>8&255)/255*i,t[r++]=(e>>16&255)/255*i,t[r++]=i},"colorToUniform",0,function(e,t,r,i){r[i++]=(e>>16&255)/255,r[i++]=(e>>8&255)/255,r[i++]=(255&e)/255,r[i++]=t}])}]);

//# debugId=02fcaaf2-7bcf-b658-c104-791001bb6319