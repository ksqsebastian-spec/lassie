;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "99516259-4268-3db3-9f15-3cdb956d5b38";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    705038,
    (e)=>{
        "use strict";
        var t = e.i(550645);
        var a = e.i(818011);
        var r = e.i(761149);
        var o = e.i(688761);
        let i = class e extends r.Shader {
            constructor(t){
                super(t = {
                    ...e.defaultOptions,
                    ...t
                });
                this.enabled = true;
                this._state = o.State.for2d();
                this.blendMode = t.blendMode;
                this.padding = t.padding;
                if (typeof t.antialias === "boolean") {
                    this.antialias = t.antialias ? "on" : "off";
                } else {
                    this.antialias = t.antialias;
                }
                this.resolution = t.resolution;
                this.blendRequired = t.blendRequired;
                this.clipToViewport = t.clipToViewport;
                this.addResource("uTexture", 0, 1);
                if (t.blendRequired) {
                    this.addResource("uBackTexture", 0, 3);
                }
            }
            apply(e, t, a, r) {
                e.applyFilter(this, t, a, r);
            }
            get blendMode() {
                return this._state.blendMode;
            }
            set blendMode(e) {
                this._state.blendMode = e;
            }
            static from(r) {
                let gpuProgram;
                let glProgram;
                let { gpu, gl, ...rest } = r;
                if (gpu) {
                    gpuProgram = a.GpuProgram.from(gpu);
                }
                if (gl) {
                    glProgram = t.GlProgram.from(gl);
                }
                return new e({
                    gpuProgram,
                    glProgram,
                    ...rest
                });
            }
        };
        i.defaultOptions = {
            blendMode: "normal",
            resolution: 1,
            padding: 0,
            antialias: "off",
            blendRequired: false,
            clipToViewport: true
        };
        e.s([
            "Filter",
            0,
            i
        ]);
    },
    418668,
    949998,
    (e)=>{
        "use strict";
        let t = {
            name: "local-uniform-bit",
            vertex: {
                header: `

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
                main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
                end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
            }
        };
        let a = {
            ...t,
            vertex: {
                ...t.vertex,
                header: t.vertex.header.replace("group(1)", "group(2)")
            }
        };
        let r = {
            name: "local-uniform-bit",
            vertex: {
                header: `

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
                main: `
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,
                end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
            }
        };
        e.s([
            "localUniformBit",
            0,
            t,
            "localUniformBitGl",
            0,
            r,
            "localUniformBitGroup2",
            0,
            a
        ], 418668);
        let o = {
            name: "texture-bit",
            vertex: {
                header: `

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,
                main: `
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `
            },
            fragment: {
                header: `
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `,
                main: `
            outColor = textureSample(uTexture, uSampler, vUV);
        `
            }
        };
        let i = {
            name: "texture-bit",
            vertex: {
                header: `
            uniform mat3 uTextureMatrix;
        `,
                main: `
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `
            },
            fragment: {
                header: `
        uniform sampler2D uTexture;


        `,
                main: `
            outColor = texture(uTexture, vUV);
        `
            }
        };
        e.s([
            "textureBit",
            0,
            o,
            "textureBitGl",
            0,
            i
        ], 949998);
    },
    261095,
    324086,
    (e)=>{
        "use strict";
        var t = e.i(562140);
        var a = e.i(434367);
        e.s([
            "ensureAttributes",
            0,
            (e, r)=>{
                for(let a in e.attributes){
                    let o = e.attributes[a];
                    let i = r[a];
                    if (i) {
                        o.format ?? (o.format = i.format);
                        o.offset ?? (o.offset = i.offset);
                        o.instance ?? (o.instance = i.instance);
                    } else {
                        t.warn(`Attribute ${a} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
                    }
                }
                !((e)=>{
                    let { buffers, attributes } = e;
                    let o = {};
                    let i = {};
                    for(let e in buffers){
                        let a = buffers[e];
                        o[a.uid] = 0;
                        i[a.uid] = 0;
                    }
                    for(let e in attributes){
                        let t = attributes[e];
                        o[t.buffer.uid] += a.getAttributeInfoFromFormat(t.format).stride;
                    }
                    for(let e in attributes){
                        let t = attributes[e];
                        t.stride ?? (t.stride = o[t.buffer.uid]);
                        t.start ?? (t.start = i[t.buffer.uid]);
                        i[t.buffer.uid] += a.getAttributeInfoFromFormat(t.format).stride;
                    }
                })(e);
            }
        ], 261095);
        var r = e.i(589627);
        let o = [];
        o[r.STENCIL_MODES.NONE] = undefined;
        o[r.STENCIL_MODES.DISABLED] = {
            stencilWriteMask: 0,
            stencilReadMask: 0
        };
        o[r.STENCIL_MODES.RENDERING_MASK_ADD] = {
            stencilFront: {
                compare: "equal",
                passOp: "increment-clamp"
            },
            stencilBack: {
                compare: "equal",
                passOp: "increment-clamp"
            }
        };
        o[r.STENCIL_MODES.RENDERING_MASK_REMOVE] = {
            stencilFront: {
                compare: "equal",
                passOp: "decrement-clamp"
            },
            stencilBack: {
                compare: "equal",
                passOp: "decrement-clamp"
            }
        };
        o[r.STENCIL_MODES.MASK_ACTIVE] = {
            stencilWriteMask: 0,
            stencilFront: {
                compare: "equal",
                passOp: "keep"
            },
            stencilBack: {
                compare: "equal",
                passOp: "keep"
            }
        };
        o[r.STENCIL_MODES.INVERSE_MASK_ACTIVE] = {
            stencilWriteMask: 0,
            stencilFront: {
                compare: "not-equal",
                passOp: "keep"
            },
            stencilBack: {
                compare: "not-equal",
                passOp: "keep"
            }
        };
        e.s([
            "GpuStencilModesToPixi",
            0,
            o
        ], 324086);
    },
    627760,
    643781,
    902504,
    422537,
    693398,
    (e)=>{
        "use strict";
        var t = e.i(737880);
        var a = e.i(55585);
        var r = e.i(294212);
        e.s([
            "UboSystem",
            0,
            class {
                constructor(e){
                    this._syncFunctionHash = Object.create(null);
                    this._adaptor = e;
                    this._systemCheck();
                }
                _systemCheck() {
                    if (!t.unsafeEvalSupported()) {
                        throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
                    }
                }
                ensureUniformGroup(e) {
                    let t = this.getUniformGroupData(e);
                    if (!e.buffer) {
                        e.buffer = new a.Buffer({
                            data: new Float32Array(t.layout.size / 4),
                            usage: r.BufferUsage.UNIFORM | r.BufferUsage.COPY_DST
                        });
                    }
                }
                getUniformGroupData(e) {
                    return this._syncFunctionHash[e._signature] || this._initUniformGroup(e);
                }
                _initUniformGroup(e) {
                    let e__signature = e._signature;
                    let a = this._syncFunctionHash[e__signature];
                    if (!a) {
                        let r = Object.keys(e.uniformStructures).map((t)=>e.uniformStructures[t]);
                        let layout = this._adaptor.createUboElements(r);
                        let syncFunction = this._generateUboSync(layout.uboElements);
                        a = this._syncFunctionHash[e__signature] = {
                            layout,
                            syncFunction
                        };
                    }
                    return this._syncFunctionHash[e__signature];
                }
                _generateUboSync(e) {
                    return this._adaptor.generateUboSync(e);
                }
                syncUniformGroup(e, t, o) {
                    let i = this.getUniformGroupData(e);
                    if (!e.buffer) {
                        e.buffer = new a.Buffer({
                            data: new Float32Array(i.layout.size / 4),
                            usage: r.BufferUsage.UNIFORM | r.BufferUsage.COPY_DST
                        });
                    }
                    let s = null;
                    if (!t) {
                        t = e.buffer.data;
                        s = e.buffer.dataInt32;
                    }
                    if (!o) {
                        o = 0;
                    }
                    i.syncFunction(e.uniforms, t, s, o);
                    return true;
                }
                updateUniformGroup(e) {
                    if (e.isStatic && !e._dirtyId) {
                        return false;
                    }
                    e._dirtyId = 0;
                    let t = this.syncUniformGroup(e);
                    e.buffer.update();
                    return t;
                }
                destroy() {
                    this._syncFunctionHash = null;
                }
            }
        ], 627760);
        let o = [
            {
                type: "mat3x3<f32>",
                test: (e)=>e.value.a !== undefined,
                ubo: `
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,
                uniform: `
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `
            },
            {
                type: "vec4<f32>",
                test: (e)=>e.type === "vec4<f32>" && e.size === 1 && e.value.width !== undefined,
                ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,
                uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `
            },
            {
                type: "vec2<f32>",
                test: (e)=>e.type === "vec2<f32>" && e.size === 1 && e.value.x !== undefined,
                ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,
                uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `
            },
            {
                type: "vec4<f32>",
                test: (e)=>e.type === "vec4<f32>" && e.size === 1 && e.value.red !== undefined,
                ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,
                uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `
            },
            {
                type: "vec3<f32>",
                test: (e)=>e.type === "vec3<f32>" && e.size === 1 && e.value.red !== undefined,
                ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,
                uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `
            }
        ];
        function i(e, t) {
            return `
        for (let i = 0; i < ${e * t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `;
        }
        e.s([
            "uniformParsers",
            0,
            o
        ], 643781);
        e.s([
            "createUboSyncFunction",
            0,
            (e, t, a, r)=>{
                let i = [
                    `
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `
                ];
                let s = 0;
                for(let f = 0; f < e.length; f++){
                    let n = e[f];
                    let u = n.data.name;
                    let v = false;
                    let l = 0;
                    for(let e = 0; e < o.length; e++){
                        if (o[e].test(n.data)) {
                            l = n.offset / 4;
                            i.push(`name = "${u}";`, `offset += ${l - s};`, o[e][t] || o[e].ubo);
                            v = true;
                            break;
                        }
                    }
                    if (!v) {
                        if (n.data.size > 1) {
                            l = n.offset / 4;
                            i.push(a(n, l - s));
                        } else {
                            let e = r[n.data.type];
                            l = n.offset / 4;
                            i.push(`
                    v = uv.${u};
                    offset += ${l - s};
                    ${e};
                `);
                        }
                    }
                    s = l;
                }
                return Function("uv", "data", "dataInt32", "offset", i.join("\n"));
            }
        ], 902504);
        let s = {
            f32: `
        data[offset] = v;`,
            i32: `
        dataInt32[offset] = v;`,
            "vec2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];`,
            "vec3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,
            "vec4<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,
            "vec2<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,
            "vec3<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,
            "vec4<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,
            "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,
            "mat3x3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,
            "mat4x4<f32>": `
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,
            "mat3x2<f32>": i(3, 2),
            "mat4x2<f32>": i(4, 2),
            "mat2x3<f32>": i(2, 3),
            "mat4x3<f32>": i(4, 3),
            "mat2x4<f32>": i(2, 4),
            "mat3x4<f32>": i(3, 4)
        };
        let f = {
            ...s,
            "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `
        };
        e.s([
            "uboSyncFunctionsSTD40",
            0,
            s,
            "uboSyncFunctionsWGSL",
            0,
            f
        ], 422537);
        var n = e.i(263524);
        var u = e.i(733705);
        class v extends n.default {
            constructor({ buffer, offset, size }){
                super();
                this.uid = u.uid("buffer");
                this._resourceType = "bufferResource";
                this._touched = 0;
                this._resourceId = u.uid("resource");
                this._bufferResource = true;
                this.destroyed = false;
                this.buffer = buffer;
                this.offset = 0 | offset;
                this.size = size;
                this.buffer.on("change", this.onBufferChange, this);
            }
            onBufferChange() {
                this._resourceId = u.uid("resource");
                this.emit("change", this);
            }
            destroy(e = false) {
                this.destroyed = true;
                if (e) {
                    this.buffer.destroy();
                }
                this.emit("change", this);
                this.buffer = null;
                this.removeAllListeners();
            }
        }
        e.s([
            "BufferResource",
            0,
            v
        ], 693398);
    }
]);
