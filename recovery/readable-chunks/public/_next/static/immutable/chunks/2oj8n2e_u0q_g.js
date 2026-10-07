;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "02fcaaf2-7bcf-b658-c104-791001bb6319";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    666258,
    (e)=>{
        "use strict";
        var t = e.i(175444);
        var r = e.i(337654);
        let i = {};
        e.s([
            "getTextureBatchBindGroup",
            0,
            (e, n, s)=>{
                let a = 2166136261;
                for(let t = 0; t < n; t++){
                    a ^= e[t].uid;
                    a = Math.imul(a, 16777619) >>> 0;
                }
                return i[a] || ((e, n, s, a)=>{
                    let o = {};
                    let u = 0;
                    for(let t = 0; t < a; t++){
                        let i = t < n ? e[t] : r.Texture.EMPTY.source;
                        o[u++] = i.source;
                        o[u++] = i.style;
                    }
                    let l = new t.BindGroup(o);
                    i[s] = l;
                    return l;
                })(e, n, a, s);
            }
        ]);
    },
    550027,
    565557,
    563541,
    589627,
    443122,
    272589,
    387862,
    50644,
    430160,
    (e)=>{
        "use strict";
        var t;
        var r = e.i(733705);
        class i {
            constructor(e){
                if (typeof e === "number") {
                    this.rawBinaryData = new ArrayBuffer(e);
                } else if (e instanceof Uint8Array) {
                    this.rawBinaryData = e.buffer;
                } else {
                    this.rawBinaryData = e;
                }
                this.uint32View = new Uint32Array(this.rawBinaryData);
                this.float32View = new Float32Array(this.rawBinaryData);
                this.size = this.rawBinaryData.byteLength;
            }
            get int8View() {
                if (!this._int8View) {
                    this._int8View = new Int8Array(this.rawBinaryData);
                }
                return this._int8View;
            }
            get uint8View() {
                if (!this._uint8View) {
                    this._uint8View = new Uint8Array(this.rawBinaryData);
                }
                return this._uint8View;
            }
            get int16View() {
                if (!this._int16View) {
                    this._int16View = new Int16Array(this.rawBinaryData);
                }
                return this._int16View;
            }
            get int32View() {
                if (!this._int32View) {
                    this._int32View = new Int32Array(this.rawBinaryData);
                }
                return this._int32View;
            }
            get float64View() {
                if (!this._float64Array) {
                    this._float64Array = new Float64Array(this.rawBinaryData);
                }
                return this._float64Array;
            }
            get bigUint64View() {
                if (!this._bigUint64Array) {
                    this._bigUint64Array = new BigUint64Array(this.rawBinaryData);
                }
                return this._bigUint64Array;
            }
            view(e) {
                return this[`${e}View`];
            }
            destroy() {
                this.rawBinaryData = null;
                this.uint32View = null;
                this.float32View = null;
                this.uint16View = null;
                this._int8View = null;
                this._uint8View = null;
                this._int16View = null;
                this._int32View = null;
                this._float64Array = null;
                this._bigUint64Array = null;
            }
            static sizeOf(e) {
                switch(e){
                    case "int8":
                    case "uint8":
                        return 1;
                    case "int16":
                    case "uint16":
                        return 2;
                    case "int32":
                    case "uint32":
                    case "float32":
                        return 4;
                    default:
                        throw Error(`${e} isn't a valid view type`);
                }
            }
        }
        e.s([
            "ViewableBuffer",
            0,
            i
        ], 565557);
        var n = e.i(727905);
        var s = e.i(609932);
        function a(e, t, r, i) {
            r ??= 0;
            i ??= Math.min(e.byteLength - r, t.byteLength);
            if (7 & r || 7 & i) {
                if (3 & r || 3 & i) {
                    new Uint8Array(t).set(new Uint8Array(e, r, i));
                } else {
                    let n = i / 4;
                    new Float32Array(t, 0, n).set(new Float32Array(e, r, n));
                }
            } else {
                let n = i / 8;
                new Float64Array(t, 0, n).set(new Float64Array(e, r, n));
            }
        }
        e.s([
            "fastCopy",
            0,
            a
        ], 563541);
        let o = {
            normal: "normal-npm",
            add: "add-npm",
            screen: "screen-npm"
        };
        t = u || {};
        t[t.DISABLED = 0] = "DISABLED";
        t[t.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD";
        t[t.MASK_ACTIVE = 2] = "MASK_ACTIVE";
        t[t.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE";
        t[t.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE";
        t[t.NONE = 5] = "NONE";
        var u = t;
        function l(e, t) {
            return t.alphaMode === "no-premultiply-alpha" && o[e] || e;
        }
        e.s([
            "BLEND_TO_NPM",
            0,
            o,
            "STENCIL_MODES",
            0,
            u
        ], 589627);
        e.s([
            "getAdjustedBlendModeBlend",
            0,
            l
        ], 443122);
        var h = e.i(426832);
        function c(e, t) {
            if (e === 0) {
                throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
            }
            let r = t.createShader(t.FRAGMENT_SHADER);
            try {
                while(true){
                    let i = "precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi, ((e)=>{
                        let t = "";
                        for(let r = 0; r < e; ++r){
                            if (r > 0) {
                                t += "\nelse ";
                            }
                            if (r < e - 1) {
                                t += `if(test == ${r}.0){}`;
                            }
                        }
                        return t;
                    })(e));
                    t.shaderSource(r, i);
                    t.compileShader(r);
                    if (t.getShaderParameter(r, t.COMPILE_STATUS)) {
                        break;
                    }
                    e = e / 2 | 0;
                }
            } finally{
                t.deleteShader(r);
            }
            return e;
        }
        e.s([
            "checkMaxIfStatementsInShader",
            0,
            c
        ], 272589);
        let d = null;
        function f() {
            if (d) {
                return d;
            }
            let e = h.getTestContext();
            d = c(d = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), e);
            e.getExtension("WEBGL_lose_context")?.loseContext();
            return d;
        }
        e.s([
            "getMaxTexturesPerBatch",
            0,
            f
        ], 387862);
        class m {
            constructor(){
                this.ids = Object.create(null);
                this.textures = [];
                this.count = 0;
            }
            clear() {
                for(let e = 0; e < this.count; e++){
                    let t = this.textures[e];
                    this.textures[e] = null;
                    this.ids[t.uid] = null;
                }
                this.count = 0;
            }
        }
        e.s([
            "BatchTextureArray",
            0,
            m
        ], 50644);
        class x {
            constructor(){
                this.renderPipeId = "batch";
                this.action = "startBatch";
                this.start = 0;
                this.size = 0;
                this.textures = new m;
                this.blendMode = "normal";
                this.topology = "triangle-strip";
                this.canBundle = true;
            }
            destroy() {
                this.textures = null;
                this.gpuBindGroup = null;
                this.bindGroup = null;
                this.batcher = null;
                this.elements = null;
            }
        }
        let p = [];
        let v = 0;
        function g() {
            if (v > 0) {
                return p[--v];
            }
            return new x;
        }
        function b(e) {
            e.elements = null;
            p[v++] = e;
        }
        s.GlobalResourceRegistry.register({
            clear: ()=>{
                if (p.length > 0) {
                    for (let e of p){
                        if (e) {
                            e.destroy();
                        }
                    }
                }
                p.length = 0;
                v = 0;
            }
        });
        let _ = 0;
        let y = class e {
            constructor(t){
                this.uid = r.uid("batcher");
                this.dirty = true;
                this.batchIndex = 0;
                this.batches = [];
                this._elements = [];
                if (!(t = {
                    ...e.defaultOptions,
                    ...t
                }).maxTextures) {
                    n.deprecation("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options");
                    t.maxTextures = f();
                }
                const { maxTextures, attributesInitialSize, indicesInitialSize } = t;
                this.attributeBuffer = new i(4 * attributesInitialSize);
                this.indexBuffer = new Uint16Array(indicesInitialSize);
                this.maxTextures = maxTextures;
            }
            begin() {
                this.elementSize = 0;
                this.elementStart = 0;
                this.indexSize = 0;
                this.attributeSize = 0;
                for(let e = 0; e < this.batchIndex; e++){
                    b(this.batches[e]);
                }
                this.batchIndex = 0;
                this._batchIndexStart = 0;
                this._batchIndexSize = 0;
                this.dirty = true;
            }
            add(e) {
                this._elements[this.elementSize++] = e;
                e._indexStart = this.indexSize;
                e._attributeStart = this.attributeSize;
                e._batcher = this;
                this.indexSize += e.indexSize;
                this.attributeSize += e.attributeSize * this.vertexSize;
            }
            checkAndUpdateTexture(e, t) {
                let r = e._batch.textures.ids[t._source.uid];
                return (!!r || r === 0) && (e._textureId = r, e.texture = t, true);
            }
            updateElement(e) {
                this.dirty = true;
                let attributeBuffer = this.attributeBuffer;
                if (e.packAsQuad) {
                    this.packQuadAttributes(e, attributeBuffer.float32View, attributeBuffer.uint32View, e._attributeStart, e._textureId);
                } else {
                    this.packAttributes(e, attributeBuffer.float32View, attributeBuffer.uint32View, e._attributeStart, e._textureId);
                }
            }
            break(e) {
                let _elements = this._elements;
                if (!_elements[this.elementStart]) {
                    return;
                }
                let r = g();
                let r_textures = r.textures;
                r_textures.clear();
                let n = _elements[this.elementStart];
                let s = l(n.blendMode, n.texture._source);
                let n_topology = n.topology;
                if (4 * this.attributeSize > this.attributeBuffer.size) {
                    this._resizeAttributeBuffer(4 * this.attributeSize);
                }
                if (this.indexSize > this.indexBuffer.length) {
                    this._resizeIndexBuffer(this.indexSize);
                }
                let float32View = this.attributeBuffer.float32View;
                let uint32View = this.attributeBuffer.uint32View;
                let indexBuffer = this.indexBuffer;
                let _batchIndexSize = this._batchIndexSize;
                let _batchIndexStart = this._batchIndexStart;
                let f = "startBatch";
                let m = [];
                let maxTextures = this.maxTextures;
                for(let n = this.elementStart; n < this.elementSize; ++n){
                    let p = _elements[n];
                    _elements[n] = null;
                    let v = p.texture._source;
                    let b = l(p.blendMode, v);
                    let y = s !== b || n_topology !== p.topology;
                    if (v._batchTick === _ && !y) {
                        p._textureId = v._textureBindLocation;
                        _batchIndexSize += p.indexSize;
                        if (p.packAsQuad) {
                            this.packQuadAttributes(p, float32View, uint32View, p._attributeStart, p._textureId);
                            this.packQuadIndex(indexBuffer, p._indexStart, p._attributeStart / this.vertexSize);
                        } else {
                            this.packAttributes(p, float32View, uint32View, p._attributeStart, p._textureId);
                            this.packIndex(p, indexBuffer, p._indexStart, p._attributeStart / this.vertexSize);
                        }
                        p._batch = r;
                        m.push(p);
                        continue;
                    }
                    v._batchTick = _;
                    if (r_textures.count >= maxTextures || y) {
                        this._finishBatch(r, _batchIndexStart, _batchIndexSize - _batchIndexStart, r_textures, s, n_topology, e, f, m);
                        f = "renderBatch";
                        _batchIndexStart = _batchIndexSize;
                        s = b;
                        n_topology = p.topology;
                        (r_textures = (r = g()).textures).clear();
                        m = [];
                        ++_;
                    }
                    p._textureId = v._textureBindLocation = r_textures.count;
                    r_textures.ids[v.uid] = r_textures.count;
                    r_textures.textures[r_textures.count++] = v;
                    p._batch = r;
                    m.push(p);
                    _batchIndexSize += p.indexSize;
                    if (p.packAsQuad) {
                        this.packQuadAttributes(p, float32View, uint32View, p._attributeStart, p._textureId);
                        this.packQuadIndex(indexBuffer, p._indexStart, p._attributeStart / this.vertexSize);
                    } else {
                        this.packAttributes(p, float32View, uint32View, p._attributeStart, p._textureId);
                        this.packIndex(p, indexBuffer, p._indexStart, p._attributeStart / this.vertexSize);
                    }
                }
                if (r_textures.count > 0) {
                    this._finishBatch(r, _batchIndexStart, _batchIndexSize - _batchIndexStart, r_textures, s, n_topology, e, f, m);
                    _batchIndexStart = _batchIndexSize;
                    ++_;
                }
                this.elementStart = this.elementSize;
                this._batchIndexStart = _batchIndexStart;
                this._batchIndexSize = _batchIndexSize;
            }
            _finishBatch(e, t, r, i, n, s, a, o, u) {
                e.gpuBindGroup = null;
                e.bindGroup = null;
                e.action = o;
                e.batcher = this;
                e.textures = i;
                e.blendMode = n;
                e.topology = s;
                e.start = t;
                e.size = r;
                e.elements = u;
                ++_;
                this.batches[this.batchIndex++] = e;
                a.add(e);
            }
            finish(e) {
                this.break(e);
            }
            ensureAttributeBuffer(e) {
                if (!(4 * e <= this.attributeBuffer.size)) {
                    this._resizeAttributeBuffer(4 * e);
                }
            }
            ensureIndexBuffer(e) {
                if (!(e <= this.indexBuffer.length)) {
                    this._resizeIndexBuffer(e);
                }
            }
            _resizeAttributeBuffer(e) {
                let t = new i(Math.max(e, 2 * this.attributeBuffer.size));
                a(this.attributeBuffer.rawBinaryData, t.rawBinaryData);
                this.attributeBuffer = t;
            }
            _resizeIndexBuffer(e) {
                let indexBuffer = this.indexBuffer;
                let r = Math.max(e, 1.5 * indexBuffer.length);
                r += r % 2;
                let i = r > 65535 ? new Uint32Array(r) : new Uint16Array(r);
                if (i.BYTES_PER_ELEMENT !== indexBuffer.BYTES_PER_ELEMENT) {
                    for(let e = 0; e < indexBuffer.length; e++){
                        i[e] = indexBuffer[e];
                    }
                } else {
                    a(indexBuffer.buffer, i.buffer);
                }
                this.indexBuffer = i;
            }
            packQuadIndex(e, t, r) {
                e[t] = r + 0;
                e[t + 1] = r + 1;
                e[t + 2] = r + 2;
                e[t + 3] = r + 0;
                e[t + 4] = r + 2;
                e[t + 5] = r + 3;
            }
            packIndex(e, t, r, i) {
                let e_indices = e.indices;
                let e_indexSize = e.indexSize;
                let e_indexOffset = e.indexOffset;
                let e_attributeOffset = e.attributeOffset;
                for(let e = 0; e < e_indexSize; e++){
                    t[r++] = i + e_indices[e + e_indexOffset] - e_attributeOffset;
                }
            }
            destroy(e = {}) {
                if (this.batches !== null) {
                    for(let e = 0; e < this.batchIndex; e++){
                        b(this.batches[e]);
                    }
                    this.batches = null;
                    this.geometry.destroy(true);
                    this.geometry = null;
                    if (e.shader) {
                        this.shader?.destroy();
                        this.shader = null;
                    }
                    for(let e = 0; e < this._elements.length; e++){
                        if (this._elements[e]) {
                            this._elements[e]._batch = null;
                        }
                    }
                    this._elements = null;
                    this.indexBuffer = null;
                    this.attributeBuffer.destroy();
                    this.attributeBuffer = null;
                }
            }
        };
        y.defaultOptions = {
            maxTextures: null,
            attributesInitialSize: 4,
            indicesInitialSize: 6
        };
        e.s([
            "Batch",
            0,
            x,
            "Batcher",
            0,
            y
        ], 550027);
        var S = e.i(55585);
        var w = e.i(294212);
        var T = e.i(719885);
        let B = new Float32Array(1);
        let A = new Uint32Array(1);
        class I extends T.Geometry {
            constructor(){
                const buffer = new S.Buffer({
                    data: B,
                    label: "attribute-batch-buffer",
                    usage: w.BufferUsage.VERTEX | w.BufferUsage.COPY_DST,
                    shrinkToFit: false
                });
                super({
                    attributes: {
                        aPosition: {
                            buffer,
                            format: "float32x2",
                            stride: 24,
                            offset: 0
                        },
                        aUV: {
                            buffer,
                            format: "float32x2",
                            stride: 24,
                            offset: 8
                        },
                        aColor: {
                            buffer,
                            format: "unorm8x4",
                            stride: 24,
                            offset: 16
                        },
                        aTextureIdAndRound: {
                            buffer,
                            format: "uint16x2",
                            stride: 24,
                            offset: 20
                        }
                    },
                    indexBuffer: new S.Buffer({
                        data: A,
                        label: "index-batch-buffer",
                        usage: w.BufferUsage.INDEX | w.BufferUsage.COPY_DST,
                        shrinkToFit: false
                    })
                });
            }
        }
        e.s([
            "BatchGeometry",
            0,
            I
        ], 430160);
    },
    933261,
    310828,
    217055,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(550027);
        var i = e.i(430160);
        var n = e.i(959684);
        var s = e.i(815343);
        var a = e.i(229972);
        var o = e.i(188578);
        var u = e.i(403976);
        var l = e.i(761149);
        class h extends l.Shader {
            constructor(e){
                super({
                    glProgram: n.compileHighShaderGlProgram({
                        name: "batch",
                        bits: [
                            s.colorBitGl,
                            a.generateTextureBatchBitGl(e),
                            o.roundPixelsBitGl
                        ]
                    }),
                    gpuProgram: n.compileHighShaderGpuProgram({
                        name: "batch",
                        bits: [
                            s.colorBit,
                            a.generateTextureBatchBit(e),
                            o.roundPixelsBit
                        ]
                    }),
                    resources: {
                        batchSamplers: u.getBatchSamplersUniformGroup(e)
                    }
                });
                this.maxTextures = e;
            }
        }
        e.s([
            "DefaultShader",
            0,
            h
        ], 310828);
        let c = null;
        let d = class e extends r.Batcher {
            constructor(t){
                super(t);
                this.geometry = new i.BatchGeometry;
                this.name = e.extension.name;
                this.vertexSize = 6;
                c ??= new h(t.maxTextures);
                this.shader = c;
            }
            packAttributes(e, t, r, i, n) {
                let s = n << 16 | 65535 & e.roundPixels;
                let e_transform = e.transform;
                let o = e_transform.a;
                let u = e_transform.b;
                let l = e_transform.c;
                let h = e_transform.d;
                let c = e_transform.tx;
                let d = e_transform.ty;
                let { positions, uvs } = e;
                let e_color = e.color;
                let e_attributeOffset = e.attributeOffset;
                let v = e_attributeOffset + e.attributeSize;
                for(let e = e_attributeOffset; e < v; e++){
                    let n = 2 * e;
                    let a = positions[n];
                    let p = positions[n + 1];
                    t[i++] = o * a + l * p + c;
                    t[i++] = h * p + u * a + d;
                    t[i++] = uvs[n];
                    t[i++] = uvs[n + 1];
                    r[i++] = e_color;
                    r[i++] = s;
                }
            }
            packQuadAttributes(e, t, r, i, n) {
                let e_texture = e.texture;
                let e_transform = e.transform;
                let o = e_transform.a;
                let u = e_transform.b;
                let l = e_transform.c;
                let h = e_transform.d;
                let c = e_transform.tx;
                let d = e_transform.ty;
                let e_bounds = e.bounds;
                let f_maxX = e_bounds.maxX;
                let f_minX = e_bounds.minX;
                let f_maxY = e_bounds.maxY;
                let f_minY = e_bounds.minY;
                let s_uvs = e_texture.uvs;
                let e_color = e.color;
                let _ = n << 16 | 65535 & e.roundPixels;
                t[i + 0] = o * f_minX + l * f_minY + c;
                t[i + 1] = h * f_minY + u * f_minX + d;
                t[i + 2] = s_uvs.x0;
                t[i + 3] = s_uvs.y0;
                r[i + 4] = e_color;
                r[i + 5] = _;
                t[i + 6] = o * f_maxX + l * f_minY + c;
                t[i + 7] = h * f_minY + u * f_maxX + d;
                t[i + 8] = s_uvs.x1;
                t[i + 9] = s_uvs.y1;
                r[i + 10] = e_color;
                r[i + 11] = _;
                t[i + 12] = o * f_maxX + l * f_maxY + c;
                t[i + 13] = h * f_maxY + u * f_maxX + d;
                t[i + 14] = s_uvs.x2;
                t[i + 15] = s_uvs.y2;
                r[i + 16] = e_color;
                r[i + 17] = _;
                t[i + 18] = o * f_minX + l * f_maxY + c;
                t[i + 19] = h * f_maxY + u * f_minX + d;
                t[i + 20] = s_uvs.x3;
                t[i + 21] = s_uvs.y3;
                r[i + 22] = e_color;
                r[i + 23] = _;
            }
            _updateMaxTextures(e) {
                if (this.shader.maxTextures !== e) {
                    c = new h(e);
                    this.shader = c;
                }
            }
            destroy() {
                this.shader = null;
                super.destroy();
            }
        };
        d.extension = {
            type: [
                t.ExtensionType.Batcher
            ],
            name: "default"
        };
        e.s([
            "DefaultBatcher",
            0,
            d
        ], 933261);
        e.s([
            "GCManagedHash",
            0,
            class {
                constructor(e){
                    this.items = Object.create(null);
                    const { renderer, type, onUnload, priority, name } = e;
                    this._renderer = renderer;
                    renderer.gc.addResourceHash(this, "items", type, priority ?? 0);
                    this._onUnload = onUnload;
                    this.name = name;
                }
                add(e) {
                    return !this.items[e.uid] && (this.items[e.uid] = e, e.once("unload", this.remove, this), e._gcLastUsed = this._renderer.gc.now, true);
                }
                remove(e, ...t) {
                    if (!this.items[e.uid]) {
                        return;
                    }
                    let r = e._gpuData[this._renderer.uid];
                    if (r) {
                        this._onUnload?.(e, ...t);
                        r.destroy();
                        e._gpuData[this._renderer.uid] = null;
                        this.items[e.uid] = null;
                    }
                }
                removeAll(...e) {
                    Object.values(this.items).forEach((t)=>t && this.remove(t, ...e));
                }
                destroy(...e) {
                    this.removeAll(...e);
                    this.items = Object.create(null);
                    this._renderer = null;
                    this._onUnload = null;
                }
            }
        ], 217055);
    },
    959684,
    204528,
    223349,
    948180,
    232391,
    560370,
    751360,
    843822,
    210677,
    815343,
    229972,
    188578,
    (e)=>{
        "use strict";
        var t = e.i(550645);
        var r = e.i(818011);
        var i = e.i(562140);
        function n(e, t, r) {
            if (e) {
                for(let n in e){
                    let s = t[n.toLocaleLowerCase()];
                    if (s) {
                        let t = e[n];
                        if (n === "header") {
                            t = t.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "");
                        }
                        if (r) {
                            s.push(`//----${r}----//`);
                        }
                        s.push(t);
                    } else {
                        i.warn(`${n} placement hook does not exist in shader`);
                    }
                }
            }
        }
        e.s([
            "addBits",
            0,
            n
        ], 204528);
        let s = /\{\{(.*?)\}\}/g;
        function a(e) {
            let t = {};
            (e.match(s)?.map((e)=>e.replace(/[{()}]/g, "")) ?? []).forEach((e)=>{
                t[e] = [];
            });
            return t;
        }
        function o(e, t) {
            let r;
            let i = /@in\s+([^;]+);/g;
            while((r = i.exec(e)) !== null){
                t.push(r[1]);
            }
        }
        function u(e, t, r = false) {
            let i = [];
            o(t, i);
            e.forEach((e)=>{
                if (e.header) {
                    o(e.header, i);
                }
            });
            if (r) {
                i.sort();
            }
            let n = i.map((e, t)=>`       @location(${t}) ${e},`).join("\n");
            let s = t.replace(/@in\s+[^;]+;\s*/g, "");
            return s.replace("{{in}}", `
${n}
`);
        }
        function l(e, t) {
            let r;
            let i = /@out\s+([^;]+);/g;
            while((r = i.exec(e)) !== null){
                t.push(r[1]);
            }
        }
        function h(e, t) {
            let r = [];
            l(t, r);
            e.forEach((e)=>{
                if (e.header) {
                    l(e.header, r);
                }
            });
            let i = 0;
            let n = r.sort().map((e)=>{
                if (e.indexOf("builtin") > -1) {
                    return e;
                }
                return `@location(${i++}) ${e}`;
            }).join(",\n");
            let s = r.sort().map((e)=>`       var ${e.replace(/@.*?\s+/g, "")};`).join("\n");
            let a = `return VSOutput(
            ${r.sort().map((e)=>{
                let t;
                return ` ${(t = /\b(\w+)\s*:/g.exec(e)) ? t[1] : ""}`;
            }).join(",\n")});`;
            let o = t.replace(/@out\s+[^;]+;\s*/g, "");
            return (o = (o = o.replace("{{struct}}", `
${n}
`)).replace("{{start}}", `
${s}
`)).replace("{{return}}", `
${a}
`);
        }
        function c(e, t) {
            let r = e;
            for(let e in t){
                let i = t[e];
                r = i.join("\n").length ? r.replace(`{{${e}}}`, `//-----${e} START-----//
${i.join("\n")}
//----${e} FINISH----//`) : r.replace(`{{${e}}}`, "");
            }
            return r;
        }
        e.s([
            "compileHooks",
            0,
            a
        ], 223349);
        e.s([
            "compileInputs",
            0,
            u
        ], 948180);
        e.s([
            "compileOutputs",
            0,
            h
        ], 232391);
        e.s([
            "injectBits",
            0,
            c
        ], 560370);
        let d = Object.create(null);
        let f = new Map;
        let m = 0;
        function x({ template, bits }) {
            let r;
            let i;
            let n;
            let s;
            let a;
            let o = v(template, bits);
            if (d[o]) {
                return d[o];
            }
            r = template;
            n = (i = bits).map((e)=>e.vertex).filter((e)=>!!e);
            s = i.map((e)=>e.fragment).filter((e)=>!!e);
            a = u(n, r.vertex, true);
            let { vertex, fragment } = {
                vertex: a = h(n, a),
                fragment: u(s, r.fragment, true)
            };
            d[o] = g(vertex, fragment, bits);
            return d[o];
        }
        function p({ template, bits }) {
            let r = v(template, bits);
            if (!d[r]) {
                d[r] = g(template.vertex, template.fragment, bits);
            }
            return d[r];
        }
        function v(template, bits) {
            return bits.map((e)=>{
                if (!f.has(e)) {
                    f.set(e, m++);
                }
                return f.get(e);
            }).sort((e, t)=>e - t).join("-") + template.vertex + template.fragment;
        }
        function g(vertex, fragment, bits) {
            let i = a(vertex);
            let s = a(fragment);
            bits.forEach((e)=>{
                n(e.vertex, i, e.name);
                n(e.fragment, s, e.name);
            });
            return {
                vertex: c(vertex, i),
                fragment: c(fragment, s)
            };
        }
        e.s([
            "compileHighShader",
            0,
            x,
            "compileHighShaderGl",
            0,
            p
        ], 751360);
        let b = `
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
`;
        let _ = `
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
`;
        let y = `
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
`;
        let S = `

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
`;
        e.s([
            "fragmentGPUTemplate",
            0,
            _,
            "fragmentGlTemplate",
            0,
            S,
            "vertexGPUTemplate",
            0,
            b,
            "vertexGlTemplate",
            0,
            y
        ], 843822);
        let w = {
            name: "global-uniforms-bit",
            vertex: {
                header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
            }
        };
        let T = {
            name: "global-uniforms-ubo-bit",
            vertex: {
                header: `
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `
            }
        };
        let B = {
            name: "global-uniforms-bit",
            vertex: {
                header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
            }
        };
        e.s([
            "globalUniformsBit",
            0,
            w,
            "globalUniformsBitGl",
            0,
            B,
            "globalUniformsUBOBitGl",
            0,
            T
        ], 210677);
        e.s([
            "compileHighShaderGlProgram",
            0,
            ({ bits, name })=>new t.GlProgram({
                    name,
                    ...p({
                        template: {
                            vertex: y,
                            fragment: S
                        },
                        bits: [
                            B,
                            ...bits
                        ]
                    })
                }),
            "compileHighShaderGpuProgram",
            0,
            ({ bits, name })=>{
                let i = x({
                    template: {
                        fragment: _,
                        vertex: b
                    },
                    bits: [
                        w,
                        ...bits
                    ]
                });
                return r.GpuProgram.from({
                    name,
                    vertex: {
                        source: i.vertex,
                        entryPoint: "main"
                    },
                    fragment: {
                        source: i.fragment,
                        entryPoint: "main"
                    }
                });
            }
        ], 959684);
        let A = {
            name: "color-bit",
            vertex: {
                header: `
            @in aColor: vec4<f32>;
        `,
                main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
            }
        };
        let I = {
            name: "color-bit",
            vertex: {
                header: `
            in vec4 aColor;
        `,
                main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
            }
        };
        e.s([
            "colorBit",
            0,
            A,
            "colorBitGl",
            0,
            I
        ], 815343);
        let E = {};
        let C = {};
        e.s([
            "generateTextureBatchBit",
            0,
            (e)=>{
                if (!E[e]) {
                    E[e] = {
                        name: "texture-batch-bit",
                        vertex: {
                            header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
                            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                            end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
                        },
                        fragment: {
                            header: `
                @in @interpolate(flat) vTextureId: u32;

                ${((e)=>{
                                let t = [];
                                if (e === 1) {
                                    t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;");
                                    t.push("@group(1) @binding(1) var textureSampler1: sampler;");
                                } else {
                                    let r = 0;
                                    for(let i = 0; i < e; i++){
                                        t.push(`@group(1) @binding(${r++}) var textureSource${i + 1}: texture_2d<f32>;`);
                                        t.push(`@group(1) @binding(${r++}) var textureSampler${i + 1}: sampler;`);
                                    }
                                }
                                return t.join("\n");
                            })(e)}
            `,
                            main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${((e)=>{
                                let t = [];
                                if (e === 1) {
                                    t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
                                } else {
                                    t.push("switch vTextureId {");
                                    for(let r = 0; r < e; r++){
                                        if (r === e - 1) {
                                            t.push("  default:{");
                                        } else {
                                            t.push(`  case ${r}:{`);
                                        }
                                        t.push(`      outColor = textureSampleGrad(textureSource${r + 1}, textureSampler${r + 1}, vUV, uvDx, uvDy);`);
                                        t.push("      break;}");
                                    }
                                    t.push("}");
                                }
                                return t.join("\n");
                            })(e)}
            `
                        }
                    };
                }
                return E[e];
            },
            "generateTextureBatchBitGl",
            0,
            (e)=>{
                if (!C[e]) {
                    C[e] = {
                        name: "texture-batch-bit",
                        vertex: {
                            header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
                            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                            end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
                        },
                        fragment: {
                            header: `
                in float vTextureId;

                uniform sampler2D uTextures[${e}];

            `,
                            main: `

                ${((e)=>{
                                let t = [];
                                for(let r = 0; r < e; r++){
                                    if (r > 0) {
                                        t.push("else");
                                    }
                                    if (r < e - 1) {
                                        t.push(`if(vTextureId < ${r}.5)`);
                                    }
                                    t.push("{");
                                    t.push(`	outColor = texture(uTextures[${r}], vUV);`);
                                    t.push("}");
                                }
                                return t.join("\n");
                            })(e)}
            `
                        }
                    };
                }
                return C[e];
            }
        ], 229972);
        let P = {
            name: "round-pixels-bit",
            vertex: {
                header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
            }
        };
        let V = {
            name: "round-pixels-bit",
            vertex: {
                header: `
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
            }
        };
        e.s([
            "roundPixelsBit",
            0,
            P,
            "roundPixelsBitGl",
            0,
            V
        ], 188578);
    },
    403976,
    (e)=>{
        "use strict";
        var t = e.i(153594);
        let r = {};
        e.s([
            "getBatchSamplersUniformGroup",
            0,
            (size)=>{
                let i = r[size];
                if (i) {
                    return i;
                }
                let n = new Int32Array(size);
                for(let t = 0; t < size; t++){
                    n[t] = t;
                }
                return r[size] = new t.UniformGroup({
                    uTextures: {
                        value: n,
                        type: "i32",
                        size
                    }
                }, {
                    isStatic: true
                });
            }
        ]);
    },
    164868,
    694427,
    737880,
    220892,
    896704,
    176684,
    463337,
    (e)=>{
        "use strict";
        let t;
        var r;
        var i = e.i(222735);
        var n = e.i(78278);
        let s = [];
        async function a(e) {
            if (!e) {
                for(let e = 0; e < s.length; e++){
                    let t = s[e];
                    if (t.value.test()) {
                        return void await t.value.load();
                    }
                }
            }
        }
        async function o(e) {
            return a(!e);
        }
        n.extensions.handleByNamedList(n.ExtensionType.Environment, s);
        e.s([
            "autoDetectEnvironment",
            0,
            o,
            "loadEnvironmentExtensions",
            0,
            a
        ], 694427);
        var u = e.i(275576);
        function l() {
            if (typeof t === "boolean") {
                return t;
            }
            try {
                let e = Function("param1", "param2", "param3", "return param1[param2] === param3;");
                t = e({
                    a: "b"
                }, "a", "b") === true;
            } catch (e) {
                t = false;
            }
            return t;
        }
        e.s([
            "unsafeEvalSupported",
            0,
            l
        ], 737880);
        var h = e.i(733705);
        var c = e.i(727905);
        var d = e.i(609932);
        r = f || {};
        r[r.NONE = 0] = "NONE";
        r[r.COLOR = 16384] = "COLOR";
        r[r.STENCIL = 1024] = "STENCIL";
        r[r.DEPTH = 256] = "DEPTH";
        r[r.COLOR_DEPTH = 16640] = "COLOR_DEPTH";
        r[r.COLOR_STENCIL = 17408] = "COLOR_STENCIL";
        r[r.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL";
        r[r.ALL = 17664] = "ALL";
        var f = r;
        e.s([
            "CLEAR",
            0,
            f
        ], 220892);
        class m {
            constructor(e){
                this.items = [];
                this._name = e;
            }
            emit(e, t, r, i, n, s, a, o) {
                let { name, items } = this;
                for(let h = 0, c = items.length; h < c; h++){
                    items[h][name](e, t, r, i, n, s, a, o);
                }
                return this;
            }
            add(e) {
                if (e[this._name]) {
                    this.remove(e);
                    this.items.push(e);
                }
                return this;
            }
            remove(e) {
                let t = this.items.indexOf(e);
                if (-1 !== t) {
                    this.items.splice(t, 1);
                }
                return this;
            }
            contains(e) {
                return -1 !== this.items.indexOf(e);
            }
            removeAll() {
                this.items.length = 0;
                return this;
            }
            destroy() {
                this.removeAll();
                this.items = null;
                this._name = null;
            }
            get empty() {
                return this.items.length === 0;
            }
            get name() {
                return this._name;
            }
        }
        e.s([
            "SystemRunner",
            0,
            m
        ], 896704);
        var x = e.i(263524);
        let p = [
            "init",
            "destroy",
            "contextChange",
            "resolutionChange",
            "resetState",
            "renderEnd",
            "renderStart",
            "render",
            "update",
            "postrender",
            "prerender"
        ];
        let v = class e extends x.default {
            constructor(e){
                super();
                this.tick = 0;
                this.uid = h.uid("renderer");
                this.runners = Object.create(null);
                this.renderPipes = Object.create(null);
                this._initOptions = {};
                this._systemsHash = Object.create(null);
                this.type = e.type;
                this.name = e.name;
                this.config = e;
                const t = [
                    ...p,
                    ...this.config.runners ?? []
                ];
                this._addRunners(...t);
                this._unsafeEvalCheck();
            }
            async init(t = {}) {
                let r = t.skipExtensionImports === true || t.manageImports === false;
                for(let e in await a(r), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors), this._systemsHash){
                    t = {
                        ...this._systemsHash[e].constructor.defaultOptions,
                        ...t
                    };
                }
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this._roundPixels = +!!t.roundPixels;
                for(let e = 0; e < this.runners.init.items.length; e++){
                    await this.runners.init.items[e].init(t);
                }
                this._initOptions = t;
            }
            render(e, t) {
                this.tick++;
                let container = e;
                if (container instanceof u.Container) {
                    container = {
                        container
                    };
                    if (t) {
                        c.deprecation(c.v8_0_0, "passing a second argument is deprecated, please use render options instead");
                        container.target = t.renderTexture;
                    }
                }
                if (!container.target) {
                    container.target = this.view.renderTarget;
                }
                if (container.target === this.view.renderTarget) {
                    this._lastObjectRendered = container.container;
                    container.clearColor ?? (container.clearColor = this.background.colorRgba);
                    container.clear ?? (container.clear = this.background.clearBeforeRender);
                }
                if (container.clearColor) {
                    let e = Array.isArray(container.clearColor) && container.clearColor.length === 4;
                    container.clearColor = e ? container.clearColor : i.Color.shared.setValue(container.clearColor).toArray();
                }
                if (!container.transform) {
                    container.container.updateLocalTransform();
                    container.transform = container.container.localTransform;
                }
                if (container.container.visible) {
                    container.container.enableRenderGroup();
                    this.runners.prerender.emit(container);
                    this.runners.renderStart.emit(container);
                    this.runners.render.emit(container);
                    this.runners.renderEnd.emit(container);
                    this.runners.postrender.emit(container);
                }
            }
            resize(e, t, r) {
                let resolution = this.view.resolution;
                this.view.resize(e, t, r);
                this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution);
                if (r !== undefined && r !== resolution) {
                    this.runners.resolutionChange.emit(r);
                }
            }
            clear(e = {}) {
                if (!e.target) {
                    e.target = this.renderTarget.renderTarget;
                }
                if (!e.clearColor) {
                    e.clearColor = this.background.colorRgba;
                }
                e.clear ?? (e.clear = f.ALL);
                let { clear, clearColor, target, mipLevel, layer } = e;
                i.Color.shared.setValue(clearColor ?? this.background.colorRgba);
                this.renderTarget.clear(target, clear, i.Color.shared.toArray(), mipLevel ?? 0, layer ?? 0);
            }
            get resolution() {
                return this.view.resolution;
            }
            set resolution(e) {
                this.view.resolution = e;
                this.runners.resolutionChange.emit(e);
            }
            get width() {
                return this.view.texture.frame.width;
            }
            get height() {
                return this.view.texture.frame.height;
            }
            get canvas() {
                return this.view.canvas;
            }
            get lastObjectRendered() {
                return this._lastObjectRendered;
            }
            get renderingToScreen() {
                return this.renderTarget.renderingToScreen;
            }
            get screen() {
                return this.view.screen;
            }
            _addRunners(...e) {
                e.forEach((e)=>{
                    this.runners[e] = new m(e);
                });
            }
            _addSystems(e) {
                let t;
                for(t in e){
                    let r = e[t];
                    this._addSystem(r.value, r.name);
                }
            }
            _addSystem(e, t) {
                let r = new e(this);
                if (this[t]) {
                    throw Error(`Whoops! The name "${t}" is already in use`);
                }
                for(let e in this[t] = r, this._systemsHash[t] = r, this.runners){
                    this.runners[e].add(r);
                }
                return this;
            }
            _addPipes(e, t) {
                let r = t.reduce((acc, item)=>{
                    acc[item.name] = item.value;
                    return acc;
                }, {});
                e.forEach((e)=>{
                    let e_value = e.value;
                    let e_name = e.name;
                    let n = r[e_name];
                    this.renderPipes[e_name] = new e_value(this, n ? new n : null);
                    this.runners.destroy.add(this.renderPipes[e_name]);
                });
            }
            destroy(e = false) {
                this.runners.destroy.items.reverse();
                this.runners.destroy.emit(e);
                if (e === true || typeof e === "object" && e.releaseGlobalResources) {
                    d.GlobalResourceRegistry.release();
                }
                Object.values(this.runners).forEach((e)=>{
                    e.destroy();
                });
                this._systemsHash = null;
                this.renderPipes = null;
                this.removeAllListeners();
            }
            generateTexture(e) {
                return this.textureGenerator.generateTexture(e);
            }
            get roundPixels() {
                return !!this._roundPixels;
            }
            _unsafeEvalCheck() {
                if (!l()) {
                    throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
                }
            }
            resetState() {
                this.runners.resetState.emit();
            }
        };
        v.defaultOptions = {
            resolution: 1,
            failIfMajorPerformanceCaveat: false,
            roundPixels: false
        };
        e.s([
            "AbstractRenderer",
            0,
            v
        ], 164868);
        let g = "8.19.0";
        e.s([
            "DATA_URI",
            0,
            /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,
            "VERSION",
            0,
            g
        ], 176684);
        class b {
            static init() {
                globalThis.__PIXI_APP_INIT__?.(this, g);
            }
            static destroy() {}
        }
        b.extension = n.ExtensionType.Application;
        class _ {
            constructor(e){
                this._renderer = e;
            }
            init() {
                globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, g);
            }
            destroy() {
                this._renderer = null;
            }
        }
        _.extension = {
            type: [
                n.ExtensionType.WebGLSystem,
                n.ExtensionType.WebGPUSystem
            ],
            name: "initHook",
            priority: -10
        };
        e.s([
            "ApplicationInitHook",
            0,
            b,
            "RendererInitHook",
            0,
            _
        ], 463337);
    },
    149034,
    (e)=>{
        "use strict";
        e.s([
            "color32BitToUniform",
            0,
            (e, t, r)=>{
                let i = (e >> 24 & 255) / 255;
                t[r++] = (255 & e) / 255 * i;
                t[r++] = (e >> 8 & 255) / 255 * i;
                t[r++] = (e >> 16 & 255) / 255 * i;
                t[r++] = i;
            },
            "colorToUniform",
            0,
            (e, t, r, i)=>{
                r[i++] = (e >> 16 & 255) / 255;
                r[i++] = (e >> 8 & 255) / 255;
                r[i++] = (255 & e) / 255;
                r[i++] = t;
            }
        ]);
    }
]);
