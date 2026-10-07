;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "9310d62d-fb26-c0b4-7e78-f1d5a6e1e5cd";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    758139,
    265902,
    226825,
    655565,
    (e)=>{
        "use strict";
        var t = e.i(389474);
        var r = e.i(550645);
        var n = e.i(818011);
        var i = e.i(153594);
        var s = e.i(818642);
        var a = e.i(705038);
        var fragment = "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\nuniform float uChannel;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n\n    float a;\n    if (uChannel == 1.0) {\n        a = masky.a * npmAlpha * clip;\n    } else {\n        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n        a = alphaMul * masky.r * npmAlpha * clip;\n    }\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n";
        e.s([
            "default",
            0,
            fragment
        ], 265902);
        var vertex = "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n";
        e.s([
            "default",
            0,
            vertex
        ], 226825);
        var source = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n  uChannel:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n\n    var a: f32;\n    if (filterUniforms.uChannel == 1.0) {\n        a = mask.a * uAlpha * clip;\n    } else {\n        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n        a = alphaMul * mask.r * uAlpha * clip;\n    }\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
        e.s([
            "default",
            0,
            source
        ], 655565);
        class u extends a.Filter {
            constructor(e){
                const { sprite, ...rest } = e;
                const h = new s.TextureMatrix(sprite.texture);
                const filterUniforms = new i.UniformGroup({
                    uFilterMatrix: {
                        value: new t.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uMaskClamp: {
                        value: h.uClampFrame,
                        type: "vec4<f32>"
                    },
                    uAlpha: {
                        value: 1,
                        type: "f32"
                    },
                    uInverse: {
                        value: +!!e.inverse,
                        type: "f32"
                    },
                    uChannel: {
                        value: +(e.channel === "alpha"),
                        type: "f32"
                    }
                });
                const gpuProgram = n.GpuProgram.from({
                    vertex: {
                        source,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source,
                        entryPoint: "mainFragment"
                    }
                });
                const glProgram = r.GlProgram.from({
                    vertex,
                    fragment,
                    name: "mask-filter"
                });
                super({
                    ...rest,
                    gpuProgram,
                    glProgram,
                    clipToViewport: false,
                    resources: {
                        filterUniforms,
                        uMaskTexture: sprite.texture.source
                    }
                });
                this.sprite = sprite;
                this._textureMatrix = h;
            }
            set inverse(e) {
                this.resources.filterUniforms.uniforms.uInverse = +!!e;
            }
            get inverse() {
                return this.resources.filterUniforms.uniforms.uInverse === 1;
            }
            set channel(e) {
                this.resources.filterUniforms.uniforms.uChannel = +(e === "alpha");
            }
            get channel() {
                if (this.resources.filterUniforms.uniforms.uChannel === 1) {
                    return "alpha";
                }
                return "red";
            }
            apply(e, t, r, n) {
                this._textureMatrix.texture = this.sprite.texture;
                e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord);
                this.resources.uMaskTexture = this.sprite.texture.source;
                e.applyFilter(this, t, r, n);
            }
        }
        e.s([
            "MaskFilter",
            0,
            u
        ], 758139);
    },
    497256,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(688761);
        var n = e.i(933261);
        let i = class e {
            constructor(e, t){
                this.state = r.State.for2d();
                this._batchersByInstructionSet = Object.create(null);
                this._activeBatches = Object.create(null);
                this.renderer = e;
                this._adaptor = t;
                this._adaptor.init?.(this);
            }
            static getBatcher(e, maxTextures) {
                return new this._availableBatchers[e]({
                    maxTextures
                });
            }
            buildStart(e) {
                let t = this._batchersByInstructionSet[e.uid];
                for(let r in !t && ((t = this._batchersByInstructionSet[e.uid] = Object.create(null)).default || (t.default = new n.DefaultBatcher({
                    maxTextures: this.renderer.limits.maxBatchableTextures
                }))), this._activeBatches = t, this._activeBatch = this._activeBatches.default, this._activeBatches){
                    this._activeBatches[r].begin();
                }
            }
            addToBatch(t, r) {
                if (this._activeBatch.name !== t.batcherName) {
                    this._activeBatch.break(r);
                    let n = this._activeBatches[t.batcherName];
                    if (!n) {
                        (n = this._activeBatches[t.batcherName] = e.getBatcher(t.batcherName, this.renderer.limits.maxBatchableTextures)).begin();
                    }
                    this._activeBatch = n;
                }
                this._activeBatch.add(t);
            }
            break(e) {
                this._activeBatch.break(e);
            }
            buildEnd(e) {
                this._activeBatch.break(e);
                let _activeBatches = this._activeBatches;
                for(let e in _activeBatches){
                    let r = _activeBatches[e];
                    let n = r.geometry;
                    n.indexBuffer.setDataWithSize(r.indexBuffer, r.indexSize, true);
                    n.buffers[0].setDataWithSize(r.attributeBuffer.float32View, r.attributeSize, false);
                }
            }
            upload(e) {
                let t = this._batchersByInstructionSet[e.uid];
                for(let e in t){
                    let r = t[e];
                    let n = r.geometry;
                    if (r.dirty) {
                        r.dirty = false;
                        n.buffers[0].update(4 * r.attributeSize);
                    }
                }
            }
            execute(e) {
                if (e.action === "startBatch") {
                    let t = e.batcher;
                    let r = t.geometry;
                    let n = t.shader;
                    this._adaptor.start(this, r, n);
                }
                this._adaptor.execute(this, e);
            }
            destroy() {
                for(let e in this.state = null, this.renderer = null, this._adaptor = null, this._activeBatches){
                    this._activeBatches[e].destroy();
                }
                this._activeBatches = null;
            }
        };
        i.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "batch"
        };
        i._availableBatchers = Object.create(null);
        t.extensions.handleByMap(t.ExtensionType.Batcher, i._availableBatchers);
        t.extensions.add(n.DefaultBatcher);
        e.s([
            "BatcherPipe",
            0,
            i
        ]);
    },
    375564,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(893661);
        var n = e.i(758139);
        var i = e.i(453549);
        var s = e.i(512583);
        var a = e.i(465816);
        var o = e.i(765480);
        var l = e.i(337654);
        var d = e.i(901548);
        var u = e.i(162450);
        let h = new i.Bounds;
        class c extends r.FilterEffect {
            constructor(){
                super();
                this.filters = [
                    new n.MaskFilter({
                        sprite: new a.Sprite(l.Texture.EMPTY),
                        inverse: false,
                        resolution: "inherit",
                        antialias: "inherit"
                    })
                ];
            }
            get sprite() {
                return this.filters[0].sprite;
            }
            set sprite(e) {
                this.filters[0].sprite = e;
            }
            get inverse() {
                return this.filters[0].inverse;
            }
            set inverse(e) {
                this.filters[0].inverse = e;
            }
            get channel() {
                return this.filters[0].channel;
            }
            set channel(e) {
                this.filters[0].channel = e;
            }
        }
        class p {
            constructor(e){
                this._activeMaskStage = [];
                this._renderer = e;
            }
            push(e, maskedContainer, r) {
                let _renderer = this._renderer;
                _renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "alphaMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: maskedContainer._maskOptions.inverse,
                    canBundle: false,
                    maskedContainer
                });
                e.inverse = maskedContainer._maskOptions.inverse;
                e.channel = maskedContainer._maskOptions.channel ?? "red";
                if (e.renderMaskToTexture) {
                    let t = e.mask;
                    t.includeInBuild = true;
                    t.collectRenderables(r, _renderer, null);
                    t.includeInBuild = false;
                }
                _renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "alphaMask",
                    action: "pushMaskEnd",
                    mask: e,
                    maskedContainer,
                    inverse: maskedContainer._maskOptions.inverse,
                    canBundle: false
                });
            }
            pop(mask, t, r) {
                this._renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "alphaMask",
                    action: "popMaskEnd",
                    mask,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
            }
            execute(e) {
                let _renderer = this._renderer;
                let renderMaskToTexture = e.mask.renderMaskToTexture;
                if (e.action === "pushMaskBegin") {
                    let n = o.BigPool.get(c);
                    n.inverse = e.inverse;
                    n.channel = e.mask.channel;
                    if (renderMaskToTexture) {
                        e.mask.mask.measurable = true;
                        let r = s.getGlobalBounds(e.mask.mask, true, h);
                        e.mask.mask.measurable = false;
                        r.ceil();
                        let i = _renderer.renderTarget.renderTarget.colorTexture.source;
                        let filterTexture = d.TexturePool.getOptimalTexture(r.width, r.height, i._resolution, i.antialias);
                        _renderer.renderTarget.push(filterTexture, true);
                        _renderer.globalUniforms.push({
                            offset: r,
                            worldColor: 4294967295
                        });
                        let o = n.sprite;
                        o.texture = filterTexture;
                        o.worldTransform.tx = r.minX;
                        o.worldTransform.ty = r.minY;
                        this._activeMaskStage.push({
                            filterEffect: n,
                            maskedContainer: e.maskedContainer,
                            filterTexture
                        });
                    } else {
                        n.sprite = e.mask.mask;
                        this._activeMaskStage.push({
                            filterEffect: n,
                            maskedContainer: e.maskedContainer
                        });
                    }
                } else if (e.action === "pushMaskEnd") {
                    let e = this._activeMaskStage[this._activeMaskStage.length - 1];
                    if (renderMaskToTexture) {
                        if (_renderer.type === u.RendererType.WEBGL) {
                            _renderer.renderTarget.finishRenderPass();
                        }
                        _renderer.renderTarget.pop();
                        _renderer.globalUniforms.pop();
                    }
                    _renderer.filter.push({
                        renderPipeId: "filter",
                        action: "pushFilter",
                        container: e.maskedContainer,
                        filterEffect: e.filterEffect,
                        canBundle: false
                    });
                } else if (e.action === "popMaskEnd") {
                    _renderer.filter.pop();
                    let e = this._activeMaskStage.pop();
                    if (renderMaskToTexture) {
                        d.TexturePool.returnTexture(e.filterTexture);
                    }
                    o.BigPool.return(e.filterEffect);
                }
            }
            destroy() {
                this._renderer = null;
                this._activeMaskStage = null;
            }
        }
        p.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "alphaMask"
        };
        e.s([
            "AlphaMaskPipe",
            0,
            p
        ]);
    },
    638209,
    232376,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        class r {
            constructor(e){
                this._colorStack = [];
                this._colorStackIndex = 0;
                this._currentColor = 0;
                this._renderer = e;
            }
            buildStart() {
                this._colorStack[0] = 15;
                this._colorStackIndex = 1;
                this._currentColor = 15;
            }
            push(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                let _colorStack = this._colorStack;
                _colorStack[this._colorStackIndex] = _colorStack[this._colorStackIndex - 1] & e.mask;
                let i = this._colorStack[this._colorStackIndex];
                if (i !== this._currentColor) {
                    this._currentColor = i;
                    r.add({
                        renderPipeId: "colorMask",
                        colorMask: i,
                        canBundle: false
                    });
                }
                this._colorStackIndex++;
            }
            pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                let _colorStack = this._colorStack;
                this._colorStackIndex--;
                let i = _colorStack[this._colorStackIndex - 1];
                if (i !== this._currentColor) {
                    this._currentColor = i;
                    r.add({
                        renderPipeId: "colorMask",
                        colorMask: i,
                        canBundle: false
                    });
                }
            }
            execute(e) {
                this._renderer.colorMask.setMask(e.colorMask);
            }
            destroy() {
                this._renderer = null;
                this._colorStack = null;
            }
        }
        r.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes
            ],
            name: "colorMask"
        };
        e.s([
            "ColorMaskPipe",
            0,
            r
        ], 638209);
        var n = e.i(220892);
        var i = e.i(589627);
        class s {
            constructor(e){
                this._maskStackHash = {};
                this._maskHash = new WeakMap;
                this._renderer = e;
            }
            push(e, t, r) {
                let n;
                let _renderer = this._renderer;
                _renderer.renderPipes.batch.break(r);
                _renderer.renderPipes.blendMode.setBlendMode(e.mask, "none", r);
                r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
                let e_mask = e.mask;
                e_mask.includeInBuild = true;
                if (!this._maskHash.has(e)) {
                    this._maskHash.set(e, {
                        instructionsStart: 0,
                        instructionsLength: 0
                    });
                }
                let a = this._maskHash.get(e);
                a.instructionsStart = r.instructionSize;
                e_mask.collectRenderables(r, _renderer, null);
                e_mask.includeInBuild = false;
                _renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskEnd",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
                let o = r.instructionSize - a.instructionsStart - 1;
                a.instructionsLength = o;
                let uid = _renderer.renderTarget.renderTarget.uid;
                (n = this._maskStackHash)[uid] ?? (n[uid] = 0);
            }
            pop(e, t, r) {
                let _renderer = this._renderer;
                _renderer.renderPipes.batch.break(r);
                _renderer.renderPipes.blendMode.setBlendMode(e.mask, "none", r);
                r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskBegin",
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
                let i = this._maskHash.get(e);
                for(let e = 0; e < i.instructionsLength; e++){
                    r.instructions[r.instructionSize++] = r.instructions[i.instructionsStart++];
                }
                r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskEnd",
                    canBundle: false
                });
            }
            execute(e) {
                let t;
                let _renderer = this._renderer;
                let uid = _renderer.renderTarget.renderTarget.uid;
                let a = (t = this._maskStackHash)[uid] ?? (t[uid] = 0);
                if (e.action === "pushMaskBegin") {
                    _renderer.renderTarget.ensureDepthStencil();
                    _renderer.stencil.setStencilMode(i.STENCIL_MODES.RENDERING_MASK_ADD, a);
                    a++;
                    _renderer.colorMask.setMask(0);
                } else if (e.action === "pushMaskEnd") {
                    if (e.inverse) {
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.INVERSE_MASK_ACTIVE, a);
                    } else {
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.MASK_ACTIVE, a);
                    }
                    _renderer.colorMask.setMask(15);
                } else if (e.action === "popMaskBegin") {
                    _renderer.colorMask.setMask(0);
                    if (a !== 0) {
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.RENDERING_MASK_REMOVE, a);
                    } else {
                        _renderer.renderTarget.clear(null, n.CLEAR.STENCIL);
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.DISABLED, a);
                    }
                    a--;
                } else if (e.action === "popMaskEnd") {
                    if (e.inverse) {
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.INVERSE_MASK_ACTIVE, a);
                    } else {
                        _renderer.stencil.setStencilMode(i.STENCIL_MODES.MASK_ACTIVE, a);
                    }
                    _renderer.colorMask.setMask(15);
                }
                this._maskStackHash[uid] = a;
            }
            destroy() {
                this._renderer = null;
                this._maskStackHash = null;
                this._maskHash = null;
            }
        }
        s.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes
            ],
            name: "stencilMask"
        };
        e.s([
            "StencilMaskPipe",
            0,
            s
        ], 232376);
    },
    192897,
    (e)=>{
        "use strict";
        var t = e.i(222735);
        var r = e.i(78278);
        var n = e.i(562140);
        let i = class e {
            constructor(){
                this.clearBeforeRender = true;
                this._backgroundColor = new t.Color(0);
                this.color = this._backgroundColor;
                this.alpha = 1;
            }
            init(t) {
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this.clearBeforeRender = t.clearBeforeRender;
                this.color = t.background || t.backgroundColor || this._backgroundColor;
                this.alpha = t.backgroundAlpha;
                this._backgroundColor.setAlpha(t.backgroundAlpha);
            }
            get color() {
                return this._backgroundColor;
            }
            set color(e) {
                if (t.Color.shared.setValue(e).alpha < 1 && this._backgroundColor.alpha === 1) {
                    n.warn("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application.");
                }
                this._backgroundColor.setValue(e);
            }
            get alpha() {
                return this._backgroundColor.alpha;
            }
            set alpha(e) {
                this._backgroundColor.setAlpha(e);
            }
            get colorRgba() {
                return this._backgroundColor.toArray();
            }
            destroy() {}
        };
        i.extension = {
            type: [
                r.ExtensionType.WebGLSystem,
                r.ExtensionType.WebGPUSystem,
                r.ExtensionType.CanvasSystem
            ],
            name: "background",
            priority: 0
        };
        i.defaultOptions = {
            backgroundAlpha: 1,
            backgroundColor: 0,
            clearBeforeRender: true
        };
        e.s([
            "BackgroundSystem",
            0,
            i
        ]);
    },
    507938,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(893661);
        var n = e.i(629041);
        var i = e.i(562140);
        let s = {};
        t.extensions.handle(t.ExtensionType.BlendMode, (e)=>{
            if (!e.name) {
                throw Error("BlendMode extension must have a name property");
            }
            s[e.name] = e.ref;
        }, (e)=>{
            delete s[e.name];
        });
        class a {
            constructor(e){
                this._blendModeStack = [];
                this._isAdvanced = false;
                this._filterHash = Object.create(null);
                this._renderer = e;
                this._renderer.runners.prerender.add(this);
            }
            prerender() {
                this._activeBlendMode = "normal";
                this._isAdvanced = false;
            }
            pushBlendMode(e, t, r) {
                this._blendModeStack.push(t);
                this.setBlendMode(e, t, r);
            }
            popBlendMode(e) {
                this._blendModeStack.pop();
                let t = this._blendModeStack[this._activeBlendMode.length - 1] ?? "normal";
                this.setBlendMode(null, t, e);
            }
            setBlendMode(e, t, r) {
                let i = e instanceof n.RenderGroup;
                if (this._activeBlendMode === t) {
                    this._isAdvanced && e && !i && this._renderableList?.push(e);
                    return;
                }
                if (this._isAdvanced) {
                    this._endAdvancedBlendMode(r);
                }
                this._activeBlendMode = t;
                if (e) {
                    this._isAdvanced = !!s[t];
                    if (this._isAdvanced) {
                        this._beginAdvancedBlendMode(e, r);
                    }
                }
            }
            _beginAdvancedBlendMode(e, t) {
                this._renderer.renderPipes.batch.break(t);
                let _activeBlendMode = this._activeBlendMode;
                if (!s[_activeBlendMode]) {
                    return void i.warn(`Unable to assign BlendMode: '${_activeBlendMode}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);
                }
                let filterEffect = this._ensureFilterEffect(_activeBlendMode);
                let o = e instanceof n.RenderGroup;
                let l = {
                    renderPipeId: "filter",
                    action: "pushFilter",
                    filterEffect,
                    renderables: o ? null : [
                        e
                    ],
                    container: o ? e.root : null,
                    canBundle: false
                };
                this._renderableList = l.renderables;
                t.add(l);
            }
            _ensureFilterEffect(e) {
                let t = this._filterHash[e];
                if (!t) {
                    t = this._filterHash[e] = new r.FilterEffect;
                    t.filters = [
                        new s[e]
                    ];
                }
                return t;
            }
            _endAdvancedBlendMode(e) {
                this._isAdvanced = false;
                this._renderableList = null;
                this._renderer.renderPipes.batch.break(e);
                e.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: false
                });
            }
            buildStart() {
                this._isAdvanced = false;
            }
            buildEnd(e) {
                if (this._isAdvanced) {
                    this._endAdvancedBlendMode(e);
                }
            }
            destroy() {
                for(let e in this._renderer = null, this._renderableList = null, this._filterHash){
                    this._filterHash[e].destroy();
                }
                this._filterHash = null;
            }
        }
        a.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "blendMode"
        };
        e.s([
            "BlendModePipe",
            0,
            a
        ]);
    },
    497544,
    661226,
    292203,
    282313,
    287358,
    548306,
    60064,
    257445,
    800476,
    165255,
    662188,
    947084,
    638095,
    251783,
    777207,
    301177,
    593642,
    798299,
    (e)=>{
        "use strict";
        var t = e.i(86245);
        var r = e.i(492884);
        var n = e.i(292844);
        var i = e.i(751559);
        var s = e.i(463337);
        var a = e.i(497256);
        var o = e.i(375564);
        var l = e.i(638209);
        var d = e.i(232376);
        var u = e.i(192897);
        var h = e.i(507938);
        var c = e.i(787653);
        var p = e.i(78278);
        var f = e.i(275576);
        var x = e.i(337654);
        let m = {
            png: "image/png",
            jpg: "image/jpeg",
            webp: "image/webp"
        };
        let g = class e {
            constructor(e){
                this._renderer = e;
            }
            _normalizeOptions(e, t = {}) {
                if (e instanceof f.Container || e instanceof x.Texture) {
                    return {
                        target: e,
                        ...t
                    };
                }
                return {
                    ...t,
                    ...e
                };
            }
            async image(e) {
                let t = c.DOMAdapter.get().createImage();
                t.src = await this.base64(e);
                return t;
            }
            async base64(t) {
                let { format, quality } = t = this._normalizeOptions(t, e.defaultImageOptions);
                let i = this.canvas(t);
                if (i.toBlob !== undefined) {
                    return new Promise((resolve, reject)=>{
                        i.toBlob((r)=>{
                            if (!r) {
                                return void reject(Error("ICanvas.toBlob failed!"));
                            }
                            let n = new FileReader;
                            n.onload = ()=>resolve(n.result);
                            n.onerror = reject;
                            n.readAsDataURL(r);
                        }, m[format], quality);
                    });
                }
                if (i.toDataURL !== undefined) {
                    return i.toDataURL(m[format], quality);
                }
                if (i.convertToBlob !== undefined) {
                    let e = await i.convertToBlob({
                        type: m[format],
                        quality
                    });
                    return new Promise((resolve, reject)=>{
                        let n = new FileReader;
                        n.onload = ()=>resolve(n.result);
                        n.onerror = reject;
                        n.readAsDataURL(e);
                    });
                }
                throw Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
            }
            canvas(e) {
                let target = (e = this._normalizeOptions(e)).target;
                let _renderer = this._renderer;
                if (target instanceof x.Texture) {
                    return _renderer.texture.generateCanvas(target);
                }
                let n = _renderer.textureGenerator.generateTexture(e);
                let i = _renderer.texture.generateCanvas(n);
                n.destroy(true);
                return i;
            }
            pixels(e) {
                let target = (e = this._normalizeOptions(e)).target;
                let _renderer = this._renderer;
                let n = target instanceof x.Texture ? target : _renderer.textureGenerator.generateTexture(e);
                let i = _renderer.texture.getPixels(n);
                if (target instanceof f.Container) {
                    n.destroy(true);
                }
                return i;
            }
            texture(e) {
                if ((e = this._normalizeOptions(e)).target instanceof x.Texture) {
                    return e.target;
                }
                return this._renderer.textureGenerator.generateTexture(e);
            }
            download(e) {
                e = this._normalizeOptions(e);
                let t = this.canvas(e);
                let r = document.createElement("a");
                r.download = e.filename ?? "image.png";
                r.href = t.toDataURL("image/png");
                document.body.appendChild(r);
                r.click();
                document.body.removeChild(r);
            }
            log(e) {
                let t = e.width ?? 200;
                e = this._normalizeOptions(e);
                let r = this.canvas(e);
                let n = r.toDataURL();
                console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);
                console.log("%c ", `font-size: 1px; padding: ${t}px 300px; background: url(${n}) no-repeat; background-size: contain;`);
            }
            destroy() {
                this._renderer = null;
            }
        };
        g.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "extract"
        };
        g.defaultImageOptions = {
            format: "png",
            quality: 1
        };
        e.s([
            "ExtractSystem",
            0,
            g
        ], 661226);
        var _ = e.i(222735);
        var T = e.i(389474);
        var b = e.i(539088);
        var y = e.i(453549);
        var v = e.i(654713);
        var C = e.i(317765);
        var k = x;
        class S extends k.Texture {
            static create(e) {
                let { dynamic, textureOptions, ...rest } = e;
                return new S({
                    ...textureOptions,
                    source: new C.TextureSource(rest),
                    dynamic: dynamic ?? false
                });
            }
            resize(e, t, r) {
                this.source.resize(e, t, r);
                return this;
            }
        }
        e.s([
            "RenderTexture",
            0,
            S
        ], 292203);
        let M = new b.Rectangle;
        let G = new y.Bounds;
        let R = [
            0,
            0,
            0,
            0
        ];
        class P {
            constructor(e){
                this._renderer = e;
            }
            generateTexture(e) {
                if (e instanceof f.Container) {
                    e = {
                        target: e,
                        frame: undefined,
                        textureSourceOptions: {},
                        resolution: undefined
                    };
                }
                let resolution = e.resolution || this._renderer.resolution;
                let antialias = e.antialias || this._renderer.view.antialias;
                let e_target = e.target;
                let e_clearColor = e.clearColor;
                e_clearColor = e_clearColor ? Array.isArray(e_clearColor) && e_clearColor.length === 4 ? e_clearColor : _.Color.shared.setValue(e_clearColor).toArray() : R;
                let s = e.frame?.copyTo(M) || v.getLocalBounds(e_target, G).rectangle;
                let textureOptions = e.defaultAnchor && {
                    defaultAnchor: e.defaultAnchor
                };
                s.width = 0 | Math.max(s.width, 1 / resolution);
                s.height = 0 | Math.max(s.height, 1 / resolution);
                let o = S.create({
                    ...e.textureSourceOptions,
                    width: s.width,
                    height: s.height,
                    resolution,
                    antialias,
                    textureOptions
                });
                let transform = T.Matrix.shared.translate(-s.x, -s.y);
                this._renderer.render({
                    container: e_target,
                    transform,
                    target: o,
                    clearColor: e_clearColor
                });
                o.source.updateMipmaps();
                return o;
            }
            destroy() {
                this._renderer = null;
            }
        }
        function w(e) {
            let t = false;
            for(let r in e){
                if (e[r] == undefined) {
                    t = true;
                    break;
                }
            }
            if (!t) {
                return e;
            }
            let r = Object.create(null);
            for(let t in e){
                let n = e[t];
                if (n) {
                    r[t] = n;
                }
            }
            return r;
        }
        function B(e) {
            let t = 0;
            for(let r = 0; r < e.length; r++){
                if (e[r] == undefined) {
                    t++;
                } else {
                    e[r - t] = e[r];
                }
            }
            e.length -= t;
            return e;
        }
        P.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "textureGenerator"
        };
        e.s([
            "GenerateTextureSystem",
            0,
            P
        ], 282313);
        e.s([
            "cleanArray",
            0,
            B,
            "cleanHash",
            0,
            w
        ], 287358);
        let E = class e {
            constructor(e){
                this._managedResources = [];
                this._managedResourceHashes = [];
                this._managedCollections = [];
                this._ready = false;
                this._renderer = e;
            }
            init(t) {
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this.maxUnusedTime = t.gcMaxUnusedTime;
                this._frequency = t.gcFrequency;
                this.enabled = t.gcActive;
                this.now = performance.now();
            }
            get enabled() {
                return !!this._handler;
            }
            set enabled(e) {
                this.enabled !== e && (e ? (this._handler = this._renderer.scheduler.repeat(()=>{
                    this._ready = true;
                }, this._frequency, false), this._collectionsHandler = this._renderer.scheduler.repeat(()=>{
                    for (let e of this._managedCollections){
                        let { context, collection, type } = e;
                        if (type === "hash") {
                            context[collection] = w(context[collection]);
                        } else {
                            context[collection] = B(context[collection]);
                        }
                    }
                }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._collectionsHandler), this._handler = 0, this._collectionsHandler = 0));
            }
            prerender({ container }) {
                this.now = performance.now();
                container.renderGroup.gcTick = this._renderer.tick++;
                this._updateInstructionGCTick(container.renderGroup, container.renderGroup.gcTick);
            }
            postrender() {
                if (this._ready && this.enabled) {
                    this.run();
                    this._ready = false;
                }
            }
            _updateInstructionGCTick(e, t) {
                for (let r of (e.instructionSet.gcTick = t, e.gcTick = t, e.renderGroupChildren)){
                    this._updateInstructionGCTick(r, t);
                }
            }
            addCollection(e, collection, r) {
                this._managedCollections.push({
                    context: e,
                    collection,
                    type: r
                });
            }
            addResource(e, t) {
                if (-1 !== e._gcLastUsed) {
                    e._gcLastUsed = this.now;
                    e._onTouch?.(this.now);
                    return;
                }
                e._gcData = {
                    index: this._managedResources.length,
                    type: t
                };
                e._gcLastUsed = this.now;
                e._onTouch?.(this.now);
                e.once("unload", this.removeResource, this);
                this._managedResources.push(e);
            }
            removeResource(e) {
                let e__gcData = e._gcData;
                if (!e__gcData) {
                    return;
                }
                let t_index = e__gcData.index;
                let n = this._managedResources.length - 1;
                if (t_index !== n) {
                    let e = this._managedResources[n];
                    this._managedResources[t_index] = e;
                    e._gcData.index = t_index;
                }
                this._managedResources.length--;
                e._gcData = null;
                e._gcLastUsed = -1;
            }
            addResourceHash(e, hash, r, priority = 0) {
                this._managedResourceHashes.push({
                    context: e,
                    hash,
                    type: r,
                    priority
                });
                this._managedResourceHashes.sort((e, t)=>e.priority - t.priority);
            }
            run() {
                let e = performance.now();
                for (let t of this._managedResourceHashes){
                    this.runOnHash(t, e);
                }
                let t = 0;
                for(let r = 0; r < this._managedResources.length; r++){
                    let _managedResource = this._managedResources[r];
                    t = this.runOnResource(_managedResource, e, t);
                }
                this._managedResources.length = t;
            }
            updateRenderableGCTick(e, t) {
                let r = e.renderGroup ?? e.parentRenderGroup;
                let n = r?.instructionSet?.gcTick ?? -1;
                if ((r?.gcTick ?? 0) === n) {
                    e._gcLastUsed = t;
                    e._onTouch?.(t);
                }
            }
            runOnResource(e, t, r) {
                let e__gcData = e._gcData;
                if (e__gcData.type === "renderable") {
                    this.updateRenderableGCTick(e, t);
                }
                if (t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect) {
                    this._managedResources[r] = e;
                    e__gcData.index = r;
                    r++;
                } else {
                    e.unload();
                    e._gcData = null;
                    e._gcLastUsed = -1;
                    e.off("unload", this.removeResource, this);
                }
                return r;
            }
            _createHashClone(e, t) {
                let r = Object.create(null);
                for(let n in e){
                    if (n === t) {
                        break;
                    }
                    if (e[n] !== null) {
                        r[n] = e[n];
                    }
                }
                return r;
            }
            runOnHash(e, t) {
                let { context, hash, type } = e;
                let s = context[hash];
                let a = null;
                let o = 0;
                for(let e in s){
                    let r = s[e];
                    if (r === null) {
                        if (!(++o != 10000 || a)) {
                            a = this._createHashClone(s, e);
                        }
                        continue;
                    }
                    if (-1 === r._gcLastUsed) {
                        r._gcLastUsed = t;
                        r._onTouch?.(t);
                        if (a) {
                            a[e] = r;
                        }
                        continue;
                    }
                    if (type === "renderable") {
                        this.updateRenderableGCTick(r, t);
                    }
                    if (!(t - r._gcLastUsed < this.maxUnusedTime) && r.autoGarbageCollect) {
                        if (type === "renderable") {
                            let e = r.renderGroup ?? r.parentRenderGroup;
                            if (e) {
                                e.structureDidChange = true;
                            }
                        }
                        r.unload();
                        r._gcData = null;
                        r._gcLastUsed = -1;
                        !a && (o + 1 !== 10000 ? (s[e] = null, o++) : a = this._createHashClone(s, e));
                    } else {
                        if (a) {
                            a[e] = r;
                        }
                    }
                }
                if (a) {
                    context[hash] = a;
                }
            }
            destroy() {
                this.enabled = false;
                this._managedResources.forEach((e)=>{
                    e.off("unload", this.removeResource, this);
                });
                this._managedResources.length = 0;
                this._managedResourceHashes.length = 0;
                this._managedCollections.length = 0;
                this._renderer = null;
            }
        };
        E.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "gc",
            priority: 0
        };
        E.defaultOptions = {
            gcActive: true,
            gcMaxUnusedTime: 60000,
            gcFrequency: 30000
        };
        e.s([
            "GCSystem",
            0,
            E
        ], 548306);
        var U = e.i(37554);
        var A = e.i(149034);
        var I = e.i(175444);
        var O = e.i(162450);
        var D = e.i(153594);
        class L {
            constructor(e){
                this._stackIndex = 0;
                this._globalUniformDataStack = [];
                this._uniformsPool = [];
                this._activeUniforms = [];
                this._bindGroupPool = [];
                this._activeBindGroups = [];
                this._renderer = e;
            }
            reset() {
                this._stackIndex = 0;
                for(let e = 0; e < this._activeUniforms.length; e++){
                    this._uniformsPool.push(this._activeUniforms[e]);
                }
                for(let e = 0; e < this._activeBindGroups.length; e++){
                    this._bindGroupPool.push(this._activeBindGroups[e]);
                }
                this._activeUniforms.length = 0;
                this._activeBindGroups.length = 0;
            }
            start(e) {
                this.reset();
                this.push(e);
            }
            bind({ size, projectionMatrix, worldTransformMatrix, worldColor, offset }) {
                let s;
                let renderTarget = this._renderer.renderTarget.renderTarget;
                let o = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
                    projectionData: renderTarget,
                    worldTransformMatrix: new T.Matrix,
                    worldColor: 4294967295,
                    offset: new U.Point
                };
                let l = {
                    projectionMatrix: projectionMatrix || this._renderer.renderTarget.projectionMatrix,
                    resolution: size || renderTarget.size,
                    worldTransformMatrix: worldTransformMatrix || o.worldTransformMatrix,
                    worldColor: worldColor || o.worldColor,
                    offset: offset || o.offset,
                    bindGroup: null
                };
                let d = this._uniformsPool.pop() || this._createUniforms();
                this._activeUniforms.push(d);
                let d_uniforms = d.uniforms;
                d_uniforms.uProjectionMatrix = l.projectionMatrix;
                d_uniforms.uResolution = l.resolution;
                d_uniforms.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix);
                d_uniforms.uWorldTransformMatrix.tx -= l.offset.x;
                d_uniforms.uWorldTransformMatrix.ty -= l.offset.y;
                A.color32BitToUniform(l.worldColor, d_uniforms.uWorldColorAlpha, 0);
                d.update();
                if (this._renderer.renderPipes.uniformBatch) {
                    s = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d, false);
                } else {
                    s = this._bindGroupPool.pop() || new I.BindGroup;
                    this._activeBindGroups.push(s);
                    s.setResource(d, 0);
                }
                l.bindGroup = s;
                this._currentGlobalUniformData = l;
            }
            push(e) {
                this.bind(e);
                this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData;
            }
            pop() {
                this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1];
                if (this._renderer.type === O.RendererType.WEBGL) {
                    this._currentGlobalUniformData.bindGroup.resources[0].update();
                }
            }
            get bindGroup() {
                return this._currentGlobalUniformData.bindGroup;
            }
            get globalUniformData() {
                return this._currentGlobalUniformData;
            }
            get uniformGroup() {
                return this._currentGlobalUniformData.bindGroup.resources[0];
            }
            _createUniforms() {
                return new D.UniformGroup({
                    uProjectionMatrix: {
                        value: new T.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uWorldTransformMatrix: {
                        value: new T.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uWorldColorAlpha: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uResolution: {
                        value: [
                            0,
                            0
                        ],
                        type: "vec2<f32>"
                    }
                }, {
                    isStatic: true
                });
            }
            destroy() {
                this._renderer = null;
                this._globalUniformDataStack.length = 0;
                this._uniformsPool.length = 0;
                this._activeUniforms.length = 0;
                this._bindGroupPool.length = 0;
                this._activeBindGroups.length = 0;
                this._currentGlobalUniformData = null;
            }
        }
        L.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "globalUniforms"
        };
        e.s([
            "GlobalUniformSystem",
            0,
            L
        ], 60064);
        var F = e.i(989031);
        let z = 1;
        class H {
            constructor(){
                this._tasks = [];
                this._offset = 0;
            }
            init() {
                F.Ticker.system.add(this._update, this);
            }
            repeat(func, duration, r = true) {
                let id = z++;
                let i = 0;
                if (r) {
                    this._offset += 1000;
                    i = this._offset;
                }
                this._tasks.push({
                    func,
                    duration,
                    start: performance.now(),
                    offset: i,
                    last: performance.now(),
                    repeat: true,
                    id
                });
                return id;
            }
            cancel(e) {
                for(let t = 0; t < this._tasks.length; t++){
                    if (this._tasks[t].id === e) {
                        return void this._tasks.splice(t, 1);
                    }
                }
            }
            _update() {
                let e = performance.now();
                for(let t = 0; t < this._tasks.length; t++){
                    let _task = this._tasks[t];
                    if (e - _task.offset - _task.last >= _task.duration) {
                        let t = e - _task.start;
                        _task.func(t);
                        _task.last = e;
                    }
                }
            }
            destroy() {
                F.Ticker.system.remove(this._update, this);
                this._tasks.length = 0;
            }
        }
        H.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "scheduler",
            priority: 0
        };
        e.s([
            "SchedulerSystem",
            0,
            H
        ], 257445);
        var W = e.i(176684);
        let V = false;
        function N(e) {
            if (!V) {
                if (c.DOMAdapter.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
                    let t = [
                        `%c  %c  %c  %c  %c PixiJS %c v${W.VERSION} (${e}) http://www.pixijs.com/

`,
                        "background: #E72264; padding:5px 0;",
                        "background: #6CA2EA; padding:5px 0;",
                        "background: #B5D33D; padding:5px 0;",
                        "background: #FED23F; padding:5px 0;",
                        "color: #FFFFFF; background: #E72264; padding:5px 0;",
                        "color: #E72264; background: #FFFFFF; padding:5px 0;"
                    ];
                    globalThis.console.log(...t);
                } else {
                    if (globalThis.console) {
                        globalThis.console.log(`PixiJS ${W.VERSION} - ${e} - http://www.pixijs.com/`);
                    }
                }
                V = true;
            }
        }
        e.s([
            "sayHello",
            0,
            N
        ], 800476);
        class j {
            constructor(e){
                this._renderer = e;
            }
            init(e) {
                if (e.hello) {
                    let e = this._renderer.name;
                    if (this._renderer.type === O.RendererType.WEBGL) {
                        e += ` ${this._renderer.context.webGLVersion}`;
                    }
                    N(e);
                }
            }
        }
        j.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "hello",
            priority: -2
        };
        j.defaultOptions = {
            hello: false
        };
        e.s([
            "HelloSystem",
            0,
            j
        ], 165255);
        var $ = e.i(727905);
        let q = class e {
            constructor(e){
                this._renderer = e;
            }
            init(t) {
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this.maxUnusedTime = t.renderableGCMaxUnusedTime;
            }
            get enabled() {
                $.deprecation("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.");
                return this._renderer.gc.enabled;
            }
            set enabled(e) {
                $.deprecation("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.");
                this._renderer.gc.enabled = e;
            }
            addManagedHash(e, t) {
                $.deprecation("8.15.0", "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead.");
                this._renderer.gc.addCollection(e, t, "hash");
            }
            addManagedArray(e, t) {
                $.deprecation("8.15.0", "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead.");
                this._renderer.gc.addCollection(e, t, "array");
            }
            addRenderable(e) {
                $.deprecation("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead.");
                this._renderer.gc.addResource(e, "renderable");
            }
            run() {
                $.deprecation("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead.");
                this._renderer.gc.run();
            }
            destroy() {
                this._renderer = null;
            }
        };
        q.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "renderableGC",
            priority: 0
        };
        q.defaultOptions = {
            renderableGCActive: true,
            renderableGCMaxUnusedTime: 60000,
            renderableGCFrequency: 30000
        };
        e.s([
            "RenderableGCSystem",
            0,
            q
        ], 662188);
        let K = class e {
            get count() {
                return this._renderer.tick;
            }
            get checkCount() {
                return this._checkCount;
            }
            set checkCount(e) {
                $.deprecation("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
                this._checkCount = e;
            }
            get maxIdle() {
                return this._renderer.gc.maxUnusedTime / 1000 * 60;
            }
            set maxIdle(e) {
                $.deprecation("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
                this._renderer.gc.maxUnusedTime = e / 60 * 1000;
            }
            get checkCountMax() {
                return Math.floor(this._renderer.gc._frequency / 1000);
            }
            set checkCountMax(e) {
                $.deprecation("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
            }
            get active() {
                return this._renderer.gc.enabled;
            }
            set active(e) {
                $.deprecation("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
                this._renderer.gc.enabled = e;
            }
            constructor(e){
                this._renderer = e;
                this._checkCount = 0;
            }
            init(t) {
                if (t.textureGCActive !== e.defaultOptions.textureGCActive) {
                    this.active = t.textureGCActive;
                }
                if (t.textureGCMaxIdle !== e.defaultOptions.textureGCMaxIdle) {
                    this.maxIdle = t.textureGCMaxIdle;
                }
                if (t.textureGCCheckCountMax !== e.defaultOptions.textureGCCheckCountMax) {
                    this.checkCountMax = t.textureGCCheckCountMax;
                }
            }
            run() {
                $.deprecation("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
                this._renderer.gc.run();
            }
            destroy() {
                this._renderer = null;
            }
        };
        K.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem
            ],
            name: "textureGC"
        };
        K.defaultOptions = {
            textureGCActive: true,
            textureGCAMaxIdle: null,
            textureGCMaxIdle: 3600,
            textureGCCheckCountMax: 600
        };
        e.s([
            "TextureGCSystem",
            0,
            K
        ], 947084);
        var Y = e.i(733705);
        let J = class e {
            constructor(t = {}){
                this.uid = Y.uid("renderTarget");
                this.colorTextures = [];
                this.dirtyId = 0;
                this.isRoot = false;
                this._size = new Float32Array(2);
                this._managedColorTextures = false;
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this.stencil = t.stencil;
                this.depth = t.depth;
                this.isRoot = t.isRoot;
                if (typeof t.colorTextures === "number") {
                    this._managedColorTextures = true;
                    for(let e = 0; e < t.colorTextures; e++){
                        this.colorTextures.push(new C.TextureSource({
                            width: t.width,
                            height: t.height,
                            resolution: t.resolution,
                            antialias: t.antialias
                        }));
                    }
                } else {
                    this.colorTextures = [
                        ...t.colorTextures.map((e)=>e.source)
                    ];
                    const e = this.colorTexture.source;
                    this.resize(e.width, e.height, e._resolution);
                }
                this.colorTexture.source.on("resize", this.onSourceResize, this);
                (t.depthStencilTexture || this.stencil) && (t.depthStencilTexture instanceof x.Texture || t.depthStencilTexture instanceof C.TextureSource ? this.depthStencilTexture = t.depthStencilTexture.source : this.ensureDepthStencilTexture());
            }
            get size() {
                let _size = this._size;
                _size[0] = this.pixelWidth;
                _size[1] = this.pixelHeight;
                return _size;
            }
            get width() {
                return this.colorTexture.source.width;
            }
            get height() {
                return this.colorTexture.source.height;
            }
            get pixelWidth() {
                return this.colorTexture.source.pixelWidth;
            }
            get pixelHeight() {
                return this.colorTexture.source.pixelHeight;
            }
            get resolution() {
                return this.colorTexture.source._resolution;
            }
            get colorTexture() {
                return this.colorTextures[0];
            }
            onSourceResize(e) {
                this.resize(e.width, e.height, e._resolution, true);
            }
            ensureDepthStencilTexture() {
                if (!this.depthStencilTexture) {
                    this.depthStencilTexture = new C.TextureSource({
                        width: this.width,
                        height: this.height,
                        resolution: this.resolution,
                        format: "depth24plus-stencil8",
                        autoGenerateMipmaps: false,
                        antialias: false,
                        mipLevelCount: 1
                    });
                }
            }
            resize(e, t, r = this.resolution, n = false) {
                this.dirtyId++;
                this.colorTextures.forEach((i, s)=>{
                    if (!(n && s === 0)) {
                        i.source.resize(e, t, r);
                    }
                });
                if (this.depthStencilTexture) {
                    this.depthStencilTexture.source.resize(e, t, r);
                }
            }
            destroy() {
                this.colorTexture.source.off("resize", this.onSourceResize, this);
                if (this._managedColorTextures) {
                    this.colorTextures.forEach((e)=>{
                        e.destroy();
                    });
                }
                if (this.depthStencilTexture) {
                    this.depthStencilTexture.destroy();
                    delete this.depthStencilTexture;
                }
            }
        };
        J.defaultOptions = {
            width: 0,
            height: 0,
            resolution: 1,
            colorTextures: 1,
            stencil: false,
            depth: false,
            antialias: false,
            isRoot: false
        };
        e.s([
            "RenderTarget",
            0,
            J
        ], 638095);
        var Q = e.i(609932);
        var X = e.i(173156);
        let Z = new Map;
        function ee(resource, t) {
            if (!Z.has(resource)) {
                let r = new x.Texture({
                    source: new X.CanvasSource({
                        resource,
                        ...t
                    })
                });
                let n = ()=>{
                    if (Z.get(resource) === r) {
                        Z.delete(resource);
                    }
                };
                r.once("destroy", n);
                r.source.once("destroy", n);
                Z.set(resource, r);
            }
            return Z.get(resource);
        }
        Q.GlobalResourceRegistry.register(Z);
        e.s([
            "getCanvasTexture",
            0,
            ee,
            "hasCachedCanvasTexture",
            0,
            (e)=>Z.has(e)
        ], 251783);
        let et = class e {
            get autoDensity() {
                return this.texture.source.autoDensity;
            }
            set autoDensity(e) {
                this.texture.source.autoDensity = e;
            }
            get resolution() {
                return this.texture.source._resolution;
            }
            set resolution(e) {
                this.texture.source.resize(this.texture.source.width, this.texture.source.height, e);
            }
            init(t) {
                if ((t = {
                    ...e.defaultOptions,
                    ...t
                }).view) {
                    $.deprecation($.v8_0_0, "ViewSystem.view has been renamed to ViewSystem.canvas");
                    t.canvas = t.view;
                }
                this.screen = new b.Rectangle(0, 0, t.width, t.height);
                this.canvas = t.canvas || c.DOMAdapter.get().createCanvas();
                this.antialias = !!t.antialias;
                this.texture = ee(this.canvas, t);
                this.renderTarget = new J({
                    colorTextures: [
                        this.texture
                    ],
                    depth: !!t.depth,
                    isRoot: true
                });
                this.texture.source.transparent = t.backgroundAlpha < 1;
                this.resolution = t.resolution;
            }
            resize(e, t, r) {
                this.texture.source.resize(e, t, r);
                this.screen.width = this.texture.frame.width;
                this.screen.height = this.texture.frame.height;
            }
            destroy(e = false) {
                if ((typeof e === "boolean" ? e : !!e?.removeView) && this.canvas.parentNode) {
                    this.canvas.parentNode.removeChild(this.canvas);
                }
                this.texture.destroy();
            }
        };
        et.extension = {
            type: [
                p.ExtensionType.WebGLSystem,
                p.ExtensionType.WebGPUSystem,
                p.ExtensionType.CanvasSystem
            ],
            name: "view",
            priority: 0
        };
        et.defaultOptions = {
            width: 800,
            height: 600,
            autoDensity: false,
            antialias: false
        };
        e.s([
            "ViewSystem",
            0,
            et
        ], 777207);
        let er = [
            u.BackgroundSystem,
            L,
            j,
            et,
            n.RenderGroupSystem,
            E,
            K,
            P,
            g,
            s.RendererInitHook,
            q,
            H
        ];
        let en = [
            h.BlendModePipe,
            a.BatcherPipe,
            i.SpritePipe,
            r.RenderGroupPipe,
            o.AlphaMaskPipe,
            d.StencilMaskPipe,
            l.ColorMaskPipe,
            t.CustomRenderPipe
        ];
        e.s([
            "SharedRenderPipes",
            0,
            en,
            "SharedSystems",
            0,
            er
        ], 497544);
        var ei = e.i(220892);
        function es(e, t, r, n, i, s) {
            let a = s ? 1 : -1;
            e.identity();
            e.a = 1 / n * 2;
            e.d = 1 / i * 2 * a;
            e.tx = -1 - t * e.a;
            e.ty = -a - r * e.d;
            return e;
        }
        e.s([
            "calculateProjection",
            0,
            es
        ], 301177);
        var ea = e.i(896704);
        function eo(e) {
            let resource = e.colorTexture.source.resource;
            return globalThis.HTMLCanvasElement && resource instanceof HTMLCanvasElement && document.body.contains(resource);
        }
        e.s([
            "isRenderingToScreen",
            0,
            eo
        ], 593642);
        e.s([
            "RenderTargetSystem",
            0,
            class {
                constructor(e){
                    this.rootViewPort = new b.Rectangle;
                    this.viewport = new b.Rectangle;
                    this.mipLevel = 0;
                    this.layer = 0;
                    this.onRenderTargetChange = new ea.SystemRunner("onRenderTargetChange");
                    this.projectionMatrix = new T.Matrix;
                    this.defaultClearColor = [
                        0,
                        0,
                        0,
                        0
                    ];
                    this._renderSurfaceToRenderTargetHash = new Map;
                    this._gpuRenderTargetHash = Object.create(null);
                    this._renderTargetStack = [];
                    this._renderer = e;
                    e.gc.addCollection(this, "_gpuRenderTargetHash", "hash");
                }
                finishRenderPass() {
                    this.adaptor.finishRenderPass(this.renderTarget);
                }
                renderStart({ target, clear, clearColor, frame, mipLevel, layer }) {
                    this._renderTargetStack.length = 0;
                    this.push(target, clear, clearColor, frame, mipLevel ?? 0, layer ?? 0);
                    this.rootViewPort.copyFrom(this.viewport);
                    this.rootRenderTarget = this.renderTarget;
                    this.renderingToScreen = eo(this.rootRenderTarget);
                    this.adaptor.prerender?.(this.rootRenderTarget);
                }
                postrender() {
                    this.adaptor.postrender?.(this.rootRenderTarget);
                }
                bind(e, t = true, r, n, i = 0, s = 0) {
                    let a = this.getRenderTarget(e);
                    let o = this.renderTarget !== a;
                    this.renderTarget = a;
                    this.renderSurface = e;
                    let l = this.getGpuRenderTarget(a);
                    if (a.pixelWidth !== l.width || a.pixelHeight !== l.height) {
                        this.adaptor.resizeGpuRenderTarget(a);
                        l.width = a.pixelWidth;
                        l.height = a.pixelHeight;
                    }
                    let a_colorTexture = a.colorTexture;
                    let viewport = this.viewport;
                    let h = a_colorTexture.arrayLayerCount || 1;
                    if ((0 | s) !== s) {
                        s |= 0;
                    }
                    if (s < 0 || s >= h) {
                        throw Error(`[RenderTargetSystem] layer ${s} is out of bounds (arrayLayerCount=${h}).`);
                    }
                    this.mipLevel = 0 | i;
                    this.layer = 0 | s;
                    let c = Math.max(a_colorTexture.pixelWidth >> i, 1);
                    let p = Math.max(a_colorTexture.pixelHeight >> i, 1);
                    if (!n && e instanceof x.Texture) {
                        n = e.frame;
                    }
                    if (n) {
                        let e = a_colorTexture._resolution;
                        let t = 1 << Math.max(0 | i, 0);
                        let r = n.x * e + 0.5 | 0;
                        let s = n.y * e + 0.5 | 0;
                        let a = n.width * e + 0.5 | 0;
                        let o = n.height * e + 0.5 | 0;
                        let l = Math.floor(r / t);
                        let h = Math.floor(s / t);
                        let f = Math.ceil(a / t);
                        let x = Math.ceil(o / t);
                        l = Math.min(Math.max(l, 0), c - 1);
                        h = Math.min(Math.max(h, 0), p - 1);
                        f = Math.min(Math.max(f, 1), c - l);
                        x = Math.min(Math.max(x, 1), p - h);
                        viewport.x = l;
                        viewport.y = h;
                        viewport.width = f;
                        viewport.height = x;
                    } else {
                        viewport.x = 0;
                        viewport.y = 0;
                        viewport.width = c;
                        viewport.height = p;
                    }
                    es(this.projectionMatrix, 0, 0, viewport.width / a_colorTexture.resolution, viewport.height / a_colorTexture.resolution, !a.isRoot);
                    this.adaptor.startRenderPass(a, t, r, viewport, i, s);
                    if (o) {
                        this.onRenderTargetChange.emit(a);
                    }
                    return a;
                }
                clear(e, t = ei.CLEAR.ALL, r, n = this.mipLevel, i = this.layer) {
                    if (t) {
                        if (e) {
                            e = this.getRenderTarget(e);
                        }
                        this.adaptor.clear(e || this.renderTarget, t, r, this.viewport, n, i);
                    }
                }
                contextChange() {
                    this._gpuRenderTargetHash = Object.create(null);
                }
                push(e, t = ei.CLEAR.ALL, r, frame, mipLevel = 0, layer = 0) {
                    let renderTarget = this.bind(e, t, r, frame, mipLevel, layer);
                    this._renderTargetStack.push({
                        renderTarget,
                        frame,
                        mipLevel,
                        layer
                    });
                    return renderTarget;
                }
                pop() {
                    this._renderTargetStack.pop();
                    let e = this._renderTargetStack[this._renderTargetStack.length - 1];
                    this.bind(e.renderTarget, false, null, e.frame, e.mipLevel, e.layer);
                }
                getRenderTarget(e) {
                    if (e.isTexture) {
                        e = e.source;
                    }
                    return this._renderSurfaceToRenderTargetHash.get(e) ?? this._initRenderTarget(e);
                }
                copyToTexture(e, t, r, n, i) {
                    if (r.x < 0) {
                        n.width += r.x;
                        i.x -= r.x;
                        r.x = 0;
                    }
                    if (r.y < 0) {
                        n.height += r.y;
                        i.y -= r.y;
                        r.y = 0;
                    }
                    let { pixelWidth, pixelHeight } = e;
                    n.width = Math.min(n.width, pixelWidth - r.x);
                    n.height = Math.min(n.height, pixelHeight - r.y);
                    return this.adaptor.copyToTexture(e, t, r, n, i);
                }
                ensureDepthStencil() {
                    if (!this.renderTarget.stencil) {
                        this.renderTarget.stencil = true;
                        this.adaptor.startRenderPass(this.renderTarget, false, null, this.viewport, 0, this.layer);
                    }
                }
                destroy() {
                    this._renderer = null;
                    this._renderSurfaceToRenderTargetHash.forEach((e, t)=>{
                        if (e !== t) {
                            e.destroy();
                        }
                    });
                    this._renderSurfaceToRenderTargetHash.clear();
                    this._gpuRenderTargetHash = Object.create(null);
                }
                _initRenderTarget(e) {
                    let t = null;
                    if (X.CanvasSource.test(e)) {
                        e = ee(e).source;
                    }
                    if (e instanceof J) {
                        t = e;
                    } else if (e instanceof C.TextureSource) {
                        t = new J({
                            colorTextures: [
                                e
                            ]
                        });
                        if (e.source instanceof X.CanvasSource) {
                            t.isRoot = true;
                        }
                        e.once("destroy", ()=>{
                            t.destroy();
                            this._renderSurfaceToRenderTargetHash.delete(e);
                            let r = this._gpuRenderTargetHash[t.uid];
                            if (r) {
                                this._gpuRenderTargetHash[t.uid] = null;
                                this.adaptor.destroyGpuRenderTarget(r);
                            }
                        });
                    }
                    this._renderSurfaceToRenderTargetHash.set(e, t);
                    return t;
                }
                getGpuRenderTarget(e) {
                    return this._gpuRenderTargetHash[e.uid] || (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e));
                }
                resetState() {
                    this.renderTarget = null;
                    this.renderSurface = null;
                }
            }
        ], 798299);
    },
    86245,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        class r {
            constructor(e){
                this._renderer = e;
            }
            updateRenderable() {}
            destroyRenderable() {}
            validateRenderable() {
                return false;
            }
            addRenderable(e, t) {
                this._renderer.renderPipes.batch.break(t);
                t.add(e);
            }
            execute(e) {
                if (e.isRenderable) {
                    e.render(this._renderer);
                }
            }
            destroy() {
                this._renderer = null;
            }
        }
        r.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "customRender"
        };
        e.s([
            "CustomRenderPipe",
            0,
            r
        ]);
    },
    492884,
    729317,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(389474);
        var n = e.i(765480);
        var i = e.i(267827);
        function s(e, t) {
            let e_instructionSet = e.instructionSet;
            let r_instructions = e_instructionSet.instructions;
            for(let e = 0; e < e_instructionSet.instructionSize; e++){
                let r = r_instructions[e];
                t[r.renderPipeId].execute(r);
            }
        }
        e.s([
            "executeInstructions",
            0,
            s
        ], 729317);
        class a {
            constructor(e){
                this._renderer = e;
            }
            addRenderGroup(e, t) {
                if (e.isCachedAsTexture) {
                    this._addRenderableCacheAsTexture(e, t);
                } else {
                    this._addRenderableDirect(e, t);
                }
            }
            execute(e) {
                e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e));
            }
            destroy() {
                this._renderer = null;
            }
            _addRenderableDirect(e, t) {
                this._renderer.renderPipes.batch.break(t);
                if (e._batchableRenderGroup) {
                    n.BigPool.return(e._batchableRenderGroup);
                    e._batchableRenderGroup = null;
                }
                t.add(e);
            }
            _addRenderableCacheAsTexture(e, t) {
                let r = e._batchableRenderGroup ?? (e._batchableRenderGroup = n.BigPool.get(i.BatchableSprite));
                r.renderable = e.root;
                r.transform = e.root.relativeGroupTransform;
                r.texture = e.texture;
                r.bounds = e._textureBounds;
                t.add(e);
                this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t);
                this._renderer.renderPipes.batch.addToBatch(r, t);
                this._renderer.renderPipes.blendMode.popBlendMode(t);
            }
            _executeCacheAsTexture(e) {
                if (e.textureNeedsUpdate) {
                    e.textureNeedsUpdate = false;
                    let worldTransformMatrix = new r.Matrix().translate(-e._textureBounds.x, -e._textureBounds.y);
                    this._renderer.renderTarget.push(e.texture, true, null, e.texture.frame);
                    this._renderer.globalUniforms.push({
                        worldTransformMatrix,
                        worldColor: 4294967295,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    });
                    s(e, this._renderer.renderPipes);
                    this._renderer.renderTarget.finishRenderPass();
                    this._renderer.renderTarget.pop();
                    this._renderer.globalUniforms.pop();
                }
                e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup);
                e._batchableRenderGroup._batcher.geometry.buffers[0].update();
            }
            _executeDirect(e) {
                this._renderer.globalUniforms.push({
                    worldTransformMatrix: e.inverseParentTextureTransform,
                    worldColor: e.worldColorAlpha
                });
                s(e, this._renderer.renderPipes);
                this._renderer.globalUniforms.pop();
            }
        }
        a.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "renderGroup"
        };
        e.s([
            "RenderGroupPipe",
            0,
            a
        ], 492884);
    },
    292844,
    50946,
    636892,
    988559,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(389474);
        var n = e.i(901548);
        var i = e.i(602699);
        var s = e.i(453549);
        function a(e, t) {
            if (!t) {
                t = 0;
            }
            for(let r = t; r < e.length; r++){
                if (e[r]) {
                    e[r] = null;
                } else {
                    break;
                }
            }
        }
        e.s([
            "clearList",
            0,
            a
        ], 50946);
        var o = e.i(729317);
        var l = e.i(275576);
        var d = e.i(350585);
        let u = new l.Container;
        let h = l.UPDATE_VISIBLE | l.UPDATE_COLOR | l.UPDATE_BLEND;
        function c(e, t = false) {
            p(e);
            let e_childrenToUpdate = e.childrenToUpdate;
            let n = e.updateTick++;
            for(let t in e_childrenToUpdate){
                let i = Number(t);
                let s = e_childrenToUpdate[t];
                let o = s.list;
                let l = s.index;
                for(let t = 0; t < l; t++){
                    let r = o[t];
                    if (r.parentRenderGroup === e && r.relativeRenderGroupDepth === i) {
                        f(r, n, 0);
                    }
                }
                a(o, l);
                s.index = 0;
            }
            if (t) {
                for(let r = 0; r < e.renderGroupChildren.length; r++){
                    c(e.renderGroupChildren[r], t);
                }
            }
        }
        function p(e) {
            let t;
            let e_root = e.root;
            if (e.renderGroupParent) {
                let n = e.renderGroupParent;
                e.worldTransform.appendFrom(e_root.relativeGroupTransform, n.worldTransform);
                e.worldColor = d.multiplyColors(e_root.groupColor, n.worldColor);
                t = e_root.groupAlpha * n.worldAlpha;
            } else {
                e.worldTransform.copyFrom(e_root.localTransform);
                e.worldColor = e_root.localColor;
                t = e_root.localAlpha;
            }
            e.worldAlpha = t = t < 0 ? 0 : t > 1 ? 1 : t;
            e.worldColorAlpha = e.worldColor + (255 * t << 24);
        }
        function f(e, t, r) {
            if (t === e.updateTick) {
                return;
            }
            e.updateTick = t;
            e.didChange = false;
            let e_localTransform = e.localTransform;
            e.updateLocalTransform();
            let e_parent = e.parent;
            if (e_parent && !e_parent.renderGroup) {
                r |= e._updateFlags;
                e.relativeGroupTransform.appendFrom(e_localTransform, e_parent.relativeGroupTransform);
                if (r & h) {
                    x(e, e_parent, r);
                }
            } else {
                r = e._updateFlags;
                e.relativeGroupTransform.copyFrom(e_localTransform);
                if (r & h) {
                    x(e, u, r);
                }
            }
            if (!e.renderGroup) {
                let n = e.children;
                let i = n.length;
                for(let e = 0; e < i; e++){
                    f(n[e], t, r);
                }
                let s = e.parentRenderGroup;
                if (e.renderPipeId && !s.structureDidChange) {
                    s.updateRenderable(e);
                }
            }
        }
        function x(e, t, r) {
            if (r & l.UPDATE_COLOR) {
                e.groupColor = d.multiplyColors(e.localColor, t.groupColor);
                let r = e.localAlpha * t.groupAlpha;
                e.groupAlpha = r = r < 0 ? 0 : r > 1 ? 1 : r;
                e.groupColorAlpha = e.groupColor + (255 * r << 24);
            }
            if (r & l.UPDATE_BLEND) {
                e.groupBlendMode = e.localBlendMode === "inherit" ? t.groupBlendMode : e.localBlendMode;
            }
            if (r & l.UPDATE_VISIBLE) {
                e.globalDisplayStatus = e.localDisplayStatus & t.globalDisplayStatus;
            }
            e._updateFlags = 0;
        }
        function m(e, t) {
            let { list } = e.childrenRenderablesToUpdate;
            let n = false;
            for(let i = 0; i < e.childrenRenderablesToUpdate.index; i++){
                let e = list[i];
                if (n = t[e.renderPipeId].validateRenderable(e)) {
                    break;
                }
            }
            e.structureDidChange = n;
            return n;
        }
        e.s([
            "updateRenderGroupTransform",
            0,
            p,
            "updateRenderGroupTransforms",
            0,
            c,
            "updateTransformAndChildren",
            0,
            f
        ], 636892);
        e.s([
            "validateRenderables",
            0,
            m
        ], 988559);
        let g = new r.Matrix;
        class _ {
            constructor(e){
                this._renderer = e;
            }
            render({ container, transform }) {
                let container_parent = container.parent;
                let renderGroupParent = container.renderGroup.renderGroupParent;
                container.parent = null;
                container.renderGroup.renderGroupParent = null;
                let _renderer = this._renderer;
                if (transform) {
                    g.copyFrom(container.renderGroup.localTransform);
                    container.renderGroup.localTransform.copyFrom(transform);
                }
                let i_renderPipes = _renderer.renderPipes;
                this._updateCachedRenderGroups(container.renderGroup, null);
                this._updateRenderGroups(container.renderGroup);
                _renderer.globalUniforms.start({
                    worldTransformMatrix: transform ? container.renderGroup.localTransform : container.renderGroup.worldTransform,
                    worldColor: container.renderGroup.worldColorAlpha
                });
                o.executeInstructions(container.renderGroup, i_renderPipes);
                if (i_renderPipes.uniformBatch) {
                    i_renderPipes.uniformBatch.renderEnd();
                }
                if (transform) {
                    container.renderGroup.localTransform.copyFrom(g);
                }
                container.parent = container_parent;
                container.renderGroup.renderGroupParent = renderGroupParent;
            }
            destroy() {
                this._renderer = null;
            }
            _updateCachedRenderGroups(e, t) {
                e._parentCacheAsTextureRenderGroup = t;
                if (e.isCachedAsTexture) {
                    if (!e.textureNeedsUpdate) {
                        return;
                    }
                    t = e;
                }
                for(let r = e.renderGroupChildren.length - 1; r >= 0; r--){
                    this._updateCachedRenderGroups(e.renderGroupChildren[r], t);
                }
                e.invalidateMatrices();
                if (e.isCachedAsTexture) {
                    if (e.textureNeedsUpdate) {
                        let t = e.root.getLocalBounds();
                        let r = this._renderer;
                        let a = e.textureOptions.resolution || r.view.resolution;
                        let o = e.textureOptions.antialias ?? r.view.antialias;
                        let scaleMode = e.textureOptions.scaleMode ?? "linear";
                        let d = e.texture;
                        t.ceil();
                        if (e.texture) {
                            n.TexturePool.returnTexture(e.texture, true);
                        }
                        let u = n.TexturePool.getOptimalTexture(t.width, t.height, a, o);
                        u._source.style = new i.TextureStyle({
                            scaleMode
                        });
                        e.texture = u;
                        if (!e._textureBounds) {
                            e._textureBounds = new s.Bounds;
                        }
                        e._textureBounds.copyFrom(t);
                        if (d !== e.texture && e.renderGroupParent) {
                            e.renderGroupParent.structureDidChange = true;
                        }
                    }
                } else {
                    if (e.texture) {
                        n.TexturePool.returnTexture(e.texture, true);
                        e.texture = null;
                    }
                }
            }
            _updateRenderGroups(e) {
                let _renderer = this._renderer;
                let t_renderPipes = _renderer.renderPipes;
                e.runOnRender(_renderer);
                e.instructionSet.renderPipes = t_renderPipes;
                if (e.structureDidChange) {
                    a(e.childrenRenderablesToUpdate.list, 0);
                } else {
                    m(e, t_renderPipes);
                }
                c(e);
                if (e.structureDidChange) {
                    e.structureDidChange = false;
                    this._buildInstructions(e, _renderer);
                } else {
                    this._updateRenderables(e);
                }
                e.childrenRenderablesToUpdate.index = 0;
                _renderer.renderPipes.batch.upload(e.instructionSet);
                if (!e.isCachedAsTexture || e.textureNeedsUpdate) {
                    for(let t = 0; t < e.renderGroupChildren.length; t++){
                        this._updateRenderGroups(e.renderGroupChildren[t]);
                    }
                }
            }
            _updateRenderables(e) {
                let { list, index } = e.childrenRenderablesToUpdate;
                for(let n = 0; n < index; n++){
                    let r = list[n];
                    if (r.didViewUpdate) {
                        e.updateRenderable(r);
                    }
                }
                a(list, index);
            }
            _buildInstructions(e, t) {
                let e_root = e.root;
                let e_instructionSet = e.instructionSet;
                e_instructionSet.reset();
                let i = t.renderPipes ? t : t.batch.renderer;
                let i_renderPipes = i.renderPipes;
                i_renderPipes.batch.buildStart(e_instructionSet);
                i_renderPipes.blendMode.buildStart();
                i_renderPipes.colorMask.buildStart();
                if (e_root.sortableChildren) {
                    e_root.sortChildren();
                }
                e_root.collectRenderablesWithEffects(e_instructionSet, i, null);
                i_renderPipes.batch.buildEnd(e_instructionSet);
                i_renderPipes.blendMode.buildEnd(e_instructionSet);
            }
        }
        _.extension = {
            type: [
                t.ExtensionType.WebGLSystem,
                t.ExtensionType.WebGPUSystem,
                t.ExtensionType.CanvasSystem
            ],
            name: "renderGroup"
        };
        e.s([
            "RenderGroupSystem",
            0,
            _
        ], 292844);
    },
    267827,
    (e)=>{
        "use strict";
        e.s([
            "BatchableSprite",
            0,
            class {
                constructor(){
                    this.batcherName = "default";
                    this.topology = "triangle-list";
                    this.attributeSize = 4;
                    this.indexSize = 6;
                    this.packAsQuad = true;
                    this.roundPixels = 0;
                    this._attributeStart = 0;
                    this._batcher = null;
                    this._batch = null;
                }
                get blendMode() {
                    return this.renderable.groupBlendMode;
                }
                get color() {
                    return this.renderable.groupColorAlpha;
                }
                reset() {
                    this.renderable = null;
                    this.texture = null;
                    this._batcher = null;
                    this._batch = null;
                    this.bounds = null;
                }
                destroy() {
                    this.reset();
                }
            }
        ]);
    },
    751559,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(267827);
        class n {
            constructor(e){
                this._renderer = e;
            }
            addRenderable(e, t) {
                let r = this._getGpuSprite(e);
                if (e.didViewUpdate) {
                    this._updateBatchableSprite(e, r);
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
            }
            updateRenderable(e) {
                let t = this._getGpuSprite(e);
                if (e.didViewUpdate) {
                    this._updateBatchableSprite(e, t);
                }
                t._batcher.updateElement(t);
            }
            validateRenderable(e) {
                let t = this._getGpuSprite(e);
                return !t._batcher.checkAndUpdateTexture(t, e._texture);
            }
            _updateBatchableSprite(e, t) {
                t.bounds = e.visualBounds;
                t.texture = e._texture;
            }
            _getGpuSprite(e) {
                return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
            }
            _initGPUSprite(e) {
                let t = new r.BatchableSprite;
                t.renderable = e;
                t.transform = e.groupTransform;
                t.texture = e._texture;
                t.bounds = e.visualBounds;
                t.roundPixels = this._renderer._roundPixels | e._roundPixels;
                e._gpuData[this._renderer.uid] = t;
                return t;
            }
            destroy() {
                this._renderer = null;
            }
        }
        n.extension = {
            type: [
                t.ExtensionType.WebGLPipes,
                t.ExtensionType.WebGPUPipes,
                t.ExtensionType.CanvasPipes
            ],
            name: "sprite"
        };
        e.s([
            "SpritePipe",
            0,
            n
        ]);
    }
]);
