;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b84482c2-398d-3f29-5542-c65132cbadf1";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    50190,
    55742,
    294780,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(449752);
        var i = e.i(963345);
        var a = e.i(453549);
        let n = new (e.i(389474)).Matrix;
        function s(e, t) {
            t.clear();
            let t_matrix = t.matrix;
            for(let r = 0; r < e.length; r++){
                let i = e[r];
                if (i.globalDisplayStatus < 7) {
                    continue;
                }
                let a = i.renderGroup ?? i.parentRenderGroup;
                if (a?.isCachedAsTexture) {
                    t.matrix = n.copyFrom(a.textureOffsetInverseTransform).append(i.worldTransform);
                } else if (a?._parentCacheAsTextureRenderGroup) {
                    t.matrix = n.copyFrom(a._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform);
                } else {
                    t.matrix = i.worldTransform;
                }
                t.addBounds(i.bounds);
            }
            t.matrix = t_matrix;
            return t;
        }
        e.s([
            "getGlobalRenderableBounds",
            0,
            s
        ], 55742);
        var o = e.i(901548);
        let l = new a.Bounds;
        function u(e, t, r, i, a = false) {
            l.minX = 0;
            l.minY = 0;
            l.maxX = e.width / i | 0;
            l.maxY = e.height / i | 0;
            let n = o.TexturePool.getOptimalTexture(l.width, l.height, i, false, a);
            n.source.uploadMethodId = "image";
            n.source.resource = e;
            n.source.alphaMode = "premultiply-alpha-on-upload";
            n.frame.width = t / i;
            n.frame.height = r / i;
            n.source.emit("update", n.source);
            n.updateUvs();
            return n;
        }
        function d(e) {
            return typeof e.getCanvasFilterString === "function";
        }
        e.s([
            "getPo2TextureFromSource",
            0,
            u
        ], 294780);
        class h {
            constructor(){
                this.skip = false;
                this.useClip = false;
                this.filters = null;
                this.container = null;
                this.bounds = new a.Bounds;
                this.cssFilterString = "";
            }
        }
        class c {
            constructor(e){
                this._filterStack = [];
                this._filterStackIndex = 0;
                this._savedStates = [];
                this._alphaMultiplier = 1;
                this._warnedFilterTypes = new Set;
                this.renderer = e;
            }
            push(e) {
                let t = this._pushFilterFrame();
                let filters = e.filterEffect.filters;
                t.skip = false;
                t.useClip = false;
                t.filters = filters;
                t.container = e.container;
                t.cssFilterString = "";
                if (filters.every((e)=>!e.enabled)) {
                    t.skip = true;
                    return;
                }
                let i = [];
                for (let e of filters){
                    if (!e.enabled) {
                        continue;
                    }
                    if (!d(e)) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    let t = e.getCanvasFilterString();
                    if (t === null) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    if (t) {
                        i.push(t);
                    }
                }
                if (i.length === 0) {
                    t.skip = true;
                    return;
                }
                t.cssFilterString = i.join(" ");
                this._calculateFilterArea(e, t.bounds);
                t.useClip = !!e.filterEffect.filterArea;
                let activeContext = this.renderer.canvasContext.activeContext;
                let filter = activeContext.filter || "none";
                this._savedStates.push({
                    filter,
                    alphaMultiplier: this._alphaMultiplier
                });
                if (t.useClip && Number.isFinite(t.bounds.width) && Number.isFinite(t.bounds.height) && t.bounds.width > 0 && t.bounds.height > 0) {
                    let e = this.renderer.canvasContext.activeResolution || 1;
                    activeContext.save();
                    activeContext.setTransform(1, 0, 0, 1, 0, 0);
                    activeContext.beginPath();
                    activeContext.rect(t.bounds.x * e, t.bounds.y * e, t.bounds.width * e, t.bounds.height * e);
                    activeContext.clip();
                } else {
                    t.useClip = false;
                }
                if (t.cssFilterString) {
                    activeContext.filter = filter !== "none" ? `${filter} ${t.cssFilterString}` : t.cssFilterString;
                }
            }
            pop() {
                let e = this._popFilterFrame();
                if (e.skip) {
                    return;
                }
                let t = this._savedStates.pop();
                if (!t) {
                    return;
                }
                let activeContext = this.renderer.canvasContext.activeContext;
                if (e.useClip) {
                    activeContext.restore();
                } else {
                    activeContext.filter = t.filter;
                }
                this._alphaMultiplier = t.alphaMultiplier;
            }
            generateFilteredTexture({ texture, filters }) {
                if (!filters?.length || filters.every((e)=>!e.enabled)) {
                    return texture;
                }
                let a = [];
                for (let e of filters){
                    if (!e.enabled) {
                        continue;
                    }
                    if (!d(e)) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    let t = e.getCanvasFilterString();
                    if (t === null) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    if (t) {
                        a.push(t);
                    }
                }
                if (a.length === 0) {
                    return texture;
                }
                let n = r.canvasUtils.getCanvasSource(texture);
                if (!n) {
                    return texture;
                }
                let texture_frame = texture.frame;
                let o = texture.source._resolution ?? texture.source.resolution ?? 1;
                let s_width = texture_frame.width;
                let s_height = texture_frame.height;
                let { canvas, context } = i.CanvasPool.getOptimalCanvasAndContext(s_width, s_height, o);
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(0, 0, canvas.width, canvas.height);
                if (a.length) {
                    context.filter = a.join(" ");
                }
                let p = texture_frame.x * o;
                let m = texture_frame.y * o;
                let v = s_width * o;
                let x = s_height * o;
                context.drawImage(n, p, m, v, x, 0, 0, v, x);
                context.filter = "none";
                context.globalAlpha = 1;
                return u(canvas, s_width, s_height, o);
            }
            _calculateFilterArea(e, t) {
                if (e.renderables) {
                    s(e.renderables, t);
                } else if (e.filterEffect.filterArea) {
                    t.clear();
                    t.addRect(e.filterEffect.filterArea);
                    t.applyMatrix(e.container.worldTransform);
                } else {
                    e.container.getFastGlobalBounds(true, t);
                }
                if (e.container) {
                    let r = e.container.renderGroup || e.container.parentRenderGroup;
                    let i = r?.cacheToLocalTransform;
                    if (i) {
                        t.applyMatrix(i);
                    }
                }
            }
            _warnUnsupportedFilter(e) {
                let t = e?.constructor?.name || "Filter";
                if (!this._warnedFilterTypes.has(t)) {
                    this._warnedFilterTypes.add(t);
                    console.warn(`CanvasRenderer: filter "${t}" is not supported in Canvas2D and will be skipped.`);
                }
            }
            get alphaMultiplier() {
                return this._alphaMultiplier;
            }
            _pushFilterFrame() {
                let e = this._filterStack[this._filterStackIndex];
                if (!e) {
                    e = this._filterStack[this._filterStackIndex] = new h;
                }
                this._filterStackIndex++;
                return e;
            }
            _popFilterFrame() {
                if (this._filterStackIndex <= 0) {
                    return this._filterStack[0];
                }
                this._filterStackIndex--;
                return this._filterStack[this._filterStackIndex];
            }
            destroy() {
                this._filterStack = null;
                this._savedStates = null;
                this._warnedFilterTypes = null;
                this._alphaMultiplier = 1;
            }
        }
        c.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "filter"
        };
        e.s([
            "CanvasFilterSystem",
            0,
            c,
            "isCanvasFilterCapable",
            0,
            d
        ], 50190);
    },
    705038,
    (e)=>{
        "use strict";
        var t = e.i(550645);
        var r = e.i(818011);
        var i = e.i(761149);
        var a = e.i(688761);
        let n = class e extends i.Shader {
            constructor(t){
                super(t = {
                    ...e.defaultOptions,
                    ...t
                });
                this.enabled = true;
                this._state = a.State.for2d();
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
            apply(e, t, r, i) {
                e.applyFilter(this, t, r, i);
            }
            get blendMode() {
                return this._state.blendMode;
            }
            set blendMode(e) {
                this._state.blendMode = e;
            }
            static from(i) {
                let gpuProgram;
                let glProgram;
                let { gpu, gl, ...rest } = i;
                if (gpu) {
                    gpuProgram = r.GpuProgram.from(gpu);
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
        n.defaultOptions = {
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
            n
        ]);
    },
    873604,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        class r {
            constructor(e){
                this._renderer = e;
            }
            push(filterEffect, container, r) {
                this._renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "filter",
                    canBundle: false,
                    action: "pushFilter",
                    container,
                    filterEffect
                });
            }
            pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "filter",
                    action: "popFilter",
                    canBundle: false
                });
            }
            execute(e) {
                if (e.action === "pushFilter") {
                    this._renderer.filter.push(e);
                } else if (e.action === "popFilter") {
                    this._renderer.filter.pop();
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
            name: "filter"
        };
        e.s([
            "FilterPipe",
            0,
            r
        ]);
    },
    197380,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(785667);
        var i = e.i(389474);
        var a = e.i(175444);
        var n = e.i(719885);
        var s = e.i(153594);
        var o = e.i(337654);
        var l = e.i(901548);
        var u = e.i(162450);
        var d = e.i(453549);
        var h = e.i(55742);
        var c = e.i(562140);
        let geometry = new n.Geometry({
            attributes: {
                aPosition: {
                    buffer: new Float32Array([
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1
                    ]),
                    format: "float32x2",
                    stride: 8,
                    offset: 0
                }
            },
            indexBuffer: new Uint32Array([
                0,
                1,
                2,
                0,
                2,
                3
            ])
        });
        class p {
            constructor(){
                this.skip = false;
                this.inputTexture = null;
                this.backTexture = null;
                this.filters = null;
                this.bounds = new d.Bounds;
                this.container = null;
                this.blendRequired = false;
                this.outputRenderSurface = null;
                this.globalFrame = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                this.firstEnabledIndex = -1;
                this.lastEnabledIndex = -1;
            }
        }
        class m {
            constructor(e){
                this._filterStackIndex = 0;
                this._filterStack = [];
                this._filterGlobalUniforms = new s.UniformGroup({
                    uInputSize: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uInputPixel: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uInputClamp: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uOutputFrame: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uGlobalFrame: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uOutputTexture: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    }
                });
                this._globalFilterBindGroup = new a.BindGroup({});
                this.renderer = e;
            }
            get activeBackTexture() {
                return this._activeFilterData?.backTexture;
            }
            push(e) {
                let renderer = this.renderer;
                let filters = e.filterEffect.filters;
                let i = this._pushFilterData();
                i.skip = false;
                i.filters = filters;
                i.container = e.container;
                i.outputRenderSurface = renderer.renderTarget.renderSurface;
                let source = renderer.renderTarget.renderTarget.colorTexture.source;
                let a_resolution = source.resolution;
                let a_antialias = source.antialias;
                if (filters.every((e)=>!e.enabled)) {
                    i.skip = true;
                    return;
                }
                let i_bounds = i.bounds;
                this._calculateFilterArea(e, i_bounds);
                this._calculateFilterBounds(i, renderer.renderTarget.rootViewPort, a_antialias, a_resolution, 1);
                if (i.skip) {
                    return;
                }
                let l = this._getPreviousFilterData();
                let u = this._findFilterResolution(a_resolution);
                let d = 0;
                let h = 0;
                if (l) {
                    d = l.bounds.minX;
                    h = l.bounds.minY;
                }
                this._calculateGlobalFrame(i, d, h, u, source.width, source.height);
                this._setupFilterTextures(i, i_bounds, renderer, l);
            }
            generateFilteredTexture({ texture, filters }) {
                let r = this._pushFilterData();
                this._activeFilterData = r;
                r.skip = false;
                r.filters = filters;
                let texture_source = texture.source;
                let i_resolution = texture_source.resolution;
                let i_antialias = texture_source.antialias;
                if (filters.every((e)=>!e.enabled)) {
                    r.skip = true;
                    return texture;
                }
                let r_bounds = r.bounds;
                r_bounds.addRect(texture.frame);
                this._calculateFilterBounds(r, r_bounds.rectangle, i_antialias, i_resolution, 0);
                if (r.skip) {
                    return texture;
                }
                this._calculateGlobalFrame(r, 0, 0, i_resolution, texture_source.width, texture_source.height);
                r.outputRenderSurface = l.TexturePool.getOptimalTexture(r_bounds.width, r_bounds.height, r.resolution, r.antialias);
                r.backTexture = o.Texture.EMPTY;
                r.inputTexture = texture;
                this.renderer.renderTarget.finishRenderPass();
                this._applyFiltersToTexture(r, true);
                let r_outputRenderSurface = r.outputRenderSurface;
                r_outputRenderSurface.source.alphaMode = "premultiplied-alpha";
                return r_outputRenderSurface;
            }
            pop() {
                let renderer = this.renderer;
                let t = this._popFilterData();
                if (!t.skip) {
                    renderer.globalUniforms.pop();
                    renderer.renderTarget.finishRenderPass();
                    this._activeFilterData = t;
                    this._applyFiltersToTexture(t, false);
                    if (t.blendRequired) {
                        l.TexturePool.returnTexture(t.backTexture);
                    }
                    l.TexturePool.returnTexture(t.inputTexture);
                }
            }
            getBackTexture(e, t, r) {
                let _resolution = e.colorTexture.source._resolution;
                let a = l.TexturePool.getOptimalTexture(t.width, t.height, _resolution, false);
                let t_minX = t.minX;
                let t_minY = t.minY;
                if (r) {
                    t_minX -= r.minX;
                    t_minY -= r.minY;
                }
                t_minX = Math.floor(t_minX * _resolution);
                t_minY = Math.floor(t_minY * _resolution);
                let width = Math.ceil(t.width * _resolution);
                let height = Math.ceil(t.height * _resolution);
                this.renderer.renderTarget.copyToTexture(e, a, {
                    x: t_minX,
                    y: t_minY
                }, {
                    width,
                    height
                }, {
                    x: 0,
                    y: 0
                });
                return a;
            }
            applyFilter(e, t, r, i) {
                let renderer = this.renderer;
                let _activeFilterData = this._activeFilterData;
                let s = _activeFilterData.outputRenderSurface === r;
                let _resolution = renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;
                let l = this._findFilterResolution(_resolution);
                let u = 0;
                let d = 0;
                if (s) {
                    let e = this._findPreviousFilterOffset();
                    u = e.x;
                    d = e.y;
                }
                this._updateFilterUniforms(t, r, _activeFilterData, u, d, l, s, i);
                let h = e.enabled ? e : this._getPassthroughFilter();
                this._setupBindGroupsAndRender(h, t, renderer);
            }
            calculateSpriteMatrix(e, t) {
                let _activeFilterData = this._activeFilterData;
                let a = e.set(_activeFilterData.inputTexture._source.width, 0, 0, _activeFilterData.inputTexture._source.height, _activeFilterData.bounds.minX, _activeFilterData.bounds.minY);
                let n = t.worldTransform.copyTo(i.Matrix.shared);
                let s = t.renderGroup || t.parentRenderGroup;
                if (s && s.cacheToLocalTransform) {
                    n.prepend(s.cacheToLocalTransform);
                }
                n.invert();
                a.prepend(n);
                a.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height);
                a.translate(t.anchor.x, t.anchor.y);
                return a;
            }
            destroy() {
                this._passthroughFilter?.destroy(true);
                this._passthroughFilter = null;
            }
            _getPassthroughFilter() {
                this._passthroughFilter ?? (this._passthroughFilter = new r.PassthroughFilter);
                return this._passthroughFilter;
            }
            _setupBindGroupsAndRender(shader, t, r) {
                if (r.renderPipes.uniformBatch) {
                    let e = r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
                    this._globalFilterBindGroup.setResource(e, 0);
                } else {
                    this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0);
                }
                this._globalFilterBindGroup.setResource(t.source, 1);
                this._globalFilterBindGroup.setResource(t.source.style, 2);
                shader.groups[0] = this._globalFilterBindGroup;
                r.encoder.draw({
                    geometry,
                    shader,
                    state: shader._state,
                    topology: "triangle-list"
                });
                if (r.type === u.RendererType.WEBGL) {
                    r.renderTarget.finishRenderPass();
                }
            }
            _setupFilterTextures(e, offset, r, i) {
                e.backTexture = o.Texture.EMPTY;
                e.inputTexture = l.TexturePool.getOptimalTexture(offset.width, offset.height, e.resolution, e.antialias);
                if (e.blendRequired) {
                    r.renderTarget.finishRenderPass();
                    let a = r.renderTarget.getRenderTarget(e.outputRenderSurface);
                    e.backTexture = this.getBackTexture(a, offset, i?.bounds);
                }
                r.renderTarget.bind(e.inputTexture, true);
                r.globalUniforms.push({
                    offset
                });
            }
            _calculateGlobalFrame(e, t, r, i, a, n) {
                let e_globalFrame = e.globalFrame;
                e_globalFrame.x = t * i;
                e_globalFrame.y = r * i;
                e_globalFrame.width = a * i;
                e_globalFrame.height = n * i;
            }
            _updateFilterUniforms(e, t, r, i, a, n, s, l) {
                let uniforms = this._filterGlobalUniforms.uniforms;
                let u_uOutputFrame = uniforms.uOutputFrame;
                let u_uInputSize = uniforms.uInputSize;
                let u_uInputPixel = uniforms.uInputPixel;
                let u_uInputClamp = uniforms.uInputClamp;
                let u_uGlobalFrame = uniforms.uGlobalFrame;
                let u_uOutputTexture = uniforms.uOutputTexture;
                if (s) {
                    u_uOutputFrame[0] = r.bounds.minX - i;
                    u_uOutputFrame[1] = r.bounds.minY - a;
                } else {
                    u_uOutputFrame[0] = 0;
                    u_uOutputFrame[1] = 0;
                }
                u_uOutputFrame[2] = e.frame.width;
                u_uOutputFrame[3] = e.frame.height;
                u_uInputSize[0] = e.source.width;
                u_uInputSize[1] = e.source.height;
                u_uInputSize[2] = 1 / u_uInputSize[0];
                u_uInputSize[3] = 1 / u_uInputSize[1];
                u_uInputPixel[0] = e.source.pixelWidth;
                u_uInputPixel[1] = e.source.pixelHeight;
                u_uInputPixel[2] = 1 / u_uInputPixel[0];
                u_uInputPixel[3] = 1 / u_uInputPixel[1];
                u_uInputClamp[0] = 0.5 * u_uInputPixel[2];
                u_uInputClamp[1] = 0.5 * u_uInputPixel[3];
                u_uInputClamp[2] = e.frame.width * u_uInputSize[2] - 0.5 * u_uInputPixel[2];
                u_uInputClamp[3] = e.frame.height * u_uInputSize[3] - 0.5 * u_uInputPixel[3];
                let colorTexture = this.renderer.renderTarget.rootRenderTarget.colorTexture;
                u_uGlobalFrame[0] = i * n;
                u_uGlobalFrame[1] = a * n;
                u_uGlobalFrame[2] = colorTexture.source.width * n;
                u_uGlobalFrame[3] = colorTexture.source.height * n;
                if (t instanceof o.Texture) {
                    t.source.resource = null;
                }
                let x = this.renderer.renderTarget.getRenderTarget(t);
                this.renderer.renderTarget.bind(t, !!l);
                if (t instanceof o.Texture) {
                    u_uOutputTexture[0] = t.frame.width;
                    u_uOutputTexture[1] = t.frame.height;
                } else {
                    u_uOutputTexture[0] = x.width;
                    u_uOutputTexture[1] = x.height;
                }
                u_uOutputTexture[2] = x.isRoot ? -1 : 1;
                this._filterGlobalUniforms.update();
            }
            _findFilterResolution(e) {
                let t = this._filterStackIndex - 1;
                while(t > 0 && this._filterStack[t].skip){
                    --t;
                }
                if (t > 0 && this._filterStack[t].inputTexture) {
                    return this._filterStack[t].inputTexture.source._resolution;
                }
                return e;
            }
            _findPreviousFilterOffset() {
                let x = 0;
                let y = 0;
                let _filterStackIndex = this._filterStackIndex;
                while(_filterStackIndex > 0){
                    _filterStackIndex--;
                    let i = this._filterStack[_filterStackIndex];
                    if (!i.skip) {
                        x = i.bounds.minX;
                        y = i.bounds.minY;
                        break;
                    }
                }
                return {
                    x,
                    y
                };
            }
            _calculateFilterArea(e, t) {
                if (e.renderables) {
                    h.getGlobalRenderableBounds(e.renderables, t);
                } else if (e.filterEffect.filterArea) {
                    t.clear();
                    t.addRect(e.filterEffect.filterArea);
                    t.applyMatrix(e.container.worldTransform);
                } else {
                    e.container.getFastGlobalBounds(true, t);
                }
                if (e.container) {
                    let r = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
                    if (r) {
                        t.applyMatrix(r);
                    }
                }
            }
            _applyFiltersToTexture(e, t) {
                let e_inputTexture = e.inputTexture;
                let e_bounds = e.bounds;
                let e_filters = e.filters;
                let e_firstEnabledIndex = e.firstEnabledIndex;
                let e_lastEnabledIndex = e.lastEnabledIndex;
                this._globalFilterBindGroup.setResource(e_inputTexture.source.style, 2);
                this._globalFilterBindGroup.setResource(e.backTexture.source, 3);
                if (e_firstEnabledIndex === e_lastEnabledIndex) {
                    e_filters[e_firstEnabledIndex].apply(this, e_inputTexture, e.outputRenderSurface, t);
                } else {
                    let r = e.inputTexture;
                    let o = l.TexturePool.getOptimalTexture(e_bounds.width, e_bounds.height, r.source._resolution, false);
                    let u = o;
                    for(let e = e_firstEnabledIndex; e < e_lastEnabledIndex; e++){
                        let t = e_filters[e];
                        if (!t.enabled) {
                            continue;
                        }
                        t.apply(this, r, u, true);
                        let i = r;
                        r = u;
                        u = i;
                    }
                    e_filters[e_lastEnabledIndex].apply(this, r, e.outputRenderSurface, t);
                    l.TexturePool.returnTexture(o);
                }
            }
            _calculateFilterBounds(e, t, r, i, a) {
                let renderer = this.renderer;
                let e_bounds = e.bounds;
                let e_filters = e.filters;
                let l = Infinity;
                let u = 0;
                let d = true;
                let h = false;
                let f = false;
                let p = true;
                let m = -1;
                let v = -1;
                for(let e = 0; e < e_filters.length; e++){
                    let filter = e_filters[e];
                    if (filter.enabled) {
                        if (-1 === m) {
                            m = e;
                        }
                        v = e;
                        l = Math.min(l, filter.resolution === "inherit" ? i : filter.resolution);
                        u += filter.padding;
                        if (filter.antialias === "off") {
                            d = false;
                        } else if (filter.antialias === "inherit" && d) {
                            d = r;
                        }
                        if (!filter.clipToViewport) {
                            p = false;
                        }
                        if (!(filter.compatibleRenderers & renderer.type)) {
                            f = false;
                            break;
                        }
                        if (filter.blendRequired && !(renderer.backBuffer?.useBackBuffer ?? true)) {
                            c.warn("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.");
                            f = false;
                            break;
                        }
                        f = true;
                        if (!h) {
                            h = filter.blendRequired;
                        }
                    }
                }
                if (!f || (p && e_bounds.fitBounds(0, t.width / i, 0, t.height / i), e_bounds.scale(l).ceil().scale(1 / l).pad((0 | u) * a), !e_bounds.isPositive)) {
                    e.skip = true;
                    return;
                }
                e.antialias = d;
                e.resolution = l;
                e.blendRequired = h;
                e.firstEnabledIndex = m;
                e.lastEnabledIndex = v;
            }
            _popFilterData() {
                this._filterStackIndex--;
                return this._filterStack[this._filterStackIndex];
            }
            _getPreviousFilterData() {
                let e;
                let t = this._filterStackIndex - 1;
                while(t > 0 && (t--, (e = this._filterStack[t]).skip));
                return e;
            }
            _pushFilterData() {
                let e = this._filterStack[this._filterStackIndex];
                if (!e) {
                    e = this._filterStack[this._filterStackIndex] = new p;
                }
                this._filterStackIndex++;
                return e;
            }
        }
        m.extension = {
            type: [
                t.ExtensionType.WebGLSystem,
                t.ExtensionType.WebGPUSystem
            ],
            name: "filter"
        };
        e.s([
            "FilterSystem",
            0,
            m
        ]);
    },
    738599,
    664683,
    906994,
    (e)=>{
        "use strict";
        e.s([
            "default",
            0,
            "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
        ], 738599);
        e.s([
            "default",
            0,
            "in vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nvoid main() {\n    finalColor = texture(uTexture, vTextureCoord);\n}\n"
        ], 664683);
        e.s([
            "default",
            0,
            "struct GlobalFilterUniforms {\n  uInputSize: vec4<f32>,\n  uInputPixel: vec4<f32>,\n  uInputClamp: vec4<f32>,\n  uOutputFrame: vec4<f32>,\n  uGlobalFrame: vec4<f32>,\n  uOutputTexture: vec4<f32>,\n};\n\n@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler: sampler;\n\nstruct VSOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv: vec2<f32>\n};\n\nfn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition: vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n    return textureSample(uTexture, uSampler, uv);\n}\n"
        ], 906994);
    },
    785667,
    (e)=>{
        "use strict";
        var t = e.i(550645);
        var r = e.i(818011);
        var i = e.i(705038);
        var a = e.i(738599);
        var n = e.i(664683);
        var s = e.i(906994);
        class o extends i.Filter {
            constructor(){
                super({
                    gpuProgram: r.GpuProgram.from({
                        vertex: {
                            source: s.default,
                            entryPoint: "mainVertex"
                        },
                        fragment: {
                            source: s.default,
                            entryPoint: "mainFragment"
                        },
                        name: "passthrough-filter"
                    }),
                    glProgram: t.GlProgram.from({
                        vertex: a.default,
                        fragment: n.default,
                        name: "passthrough-filter"
                    })
                });
            }
        }
        e.s([
            "PassthroughFilter",
            0,
            o
        ]);
    },
    275957,
    542553,
    198418,
    110323,
    149566,
    735741,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(164811);
        var i = e.i(389474);
        var a = e.i(997125);
        var n = e.i(414205);
        var s = e.i(449752);
        let o = class e {
            static _getPatternRepeat(e, t) {
                let r = e && e !== "clamp-to-edge";
                let i = t && t !== "clamp-to-edge";
                if (r && i) {
                    return "repeat";
                }
                if (r) {
                    return "repeat-x";
                }
                if (i) {
                    return "repeat-y";
                }
                return "no-repeat";
            }
            start(e, t, r) {}
            execute(t, i) {
                let i_elements = i.elements;
                if (!i_elements || !i_elements.length) {
                    return;
                }
                let t_renderer = t.renderer;
                let l_canvasContext = t_renderer.canvasContext;
                let u_activeContext = l_canvasContext.activeContext;
                for(let t = 0; t < i_elements.length; t++){
                    let element = i_elements[t];
                    if (!element.packAsQuad) {
                        continue;
                    }
                    let c = element.texture;
                    let f = c ? s.canvasUtils.getCanvasSource(c) : null;
                    if (!f) {
                        continue;
                    }
                    let p = c.source.style;
                    let m = l_canvasContext.smoothProperty;
                    let v = p.scaleMode !== "nearest";
                    if (u_activeContext[m] !== v) {
                        u_activeContext[m] = v;
                    }
                    l_canvasContext.setBlendMode(i.blendMode);
                    let x = t_renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                    let g = element.color;
                    let y = (x >>> 24 & 255) / 255 * ((g >>> 24 & 255) / 255) * (t_renderer.filter?.alphaMultiplier ?? 1);
                    if (y <= 0) {
                        continue;
                    }
                    u_activeContext.globalAlpha = y;
                    let b = 16777215 & x;
                    let T = 16777215 & g;
                    let _ = a.bgr2rgb(n.multiplyHexColors(T, b));
                    let C = c.frame;
                    let S = p.addressModeU ?? p.addressMode;
                    let w = p.addressModeV ?? p.addressMode;
                    let M = e._getPatternRepeat(S, w);
                    let P = c.source._resolution ?? c.source.resolution ?? 1;
                    let k = element.renderable?.renderGroup?.isCachedAsTexture;
                    let F = C.x * P;
                    let I = C.y * P;
                    let R = C.width * P;
                    let U = C.height * P;
                    let B = element.bounds;
                    let A = t_renderer.renderTarget.renderTarget.isRoot;
                    let O = B.minX;
                    let G = B.minY;
                    let E = B.maxX - B.minX;
                    let D = B.maxY - B.minY;
                    let W = c.rotate;
                    let H = c.uvs;
                    let L = Math.min(H.x0, H.x1, H.x2, H.x3, H.y0, H.y1, H.y2, H.y3);
                    let V = Math.max(H.x0, H.x1, H.x2, H.x3, H.y0, H.y1, H.y2, H.y3);
                    let q = M !== "no-repeat" && (L < 0 || V > 1);
                    let z = !q && (_ !== 16777215 || W);
                    let N = W && !z;
                    if (N) {
                        e._tempPatternMatrix.copyFrom(element.transform);
                        r.groupD8.matrixAppendRotationInv(e._tempPatternMatrix, W, O, G, E, D);
                        l_canvasContext.setContextTransform(e._tempPatternMatrix, element.roundPixels === 1, undefined, k && A);
                    } else {
                        l_canvasContext.setContextTransform(element.transform, element.roundPixels === 1, undefined, k && A);
                    }
                    let Y = N ? 0 : O;
                    let $ = N ? 0 : G;
                    if (!(N || element.roundPixels !== 1)) {
                        Y |= 0;
                        $ |= 0;
                    }
                    if (q) {
                        let t = f;
                        let r = _ !== 16777215 && !W;
                        let i = C.width <= c.source.width && C.height <= c.source.height;
                        if (r && i) {
                            t = s.canvasUtils.getTintedCanvas({
                                texture: c
                            }, _);
                        }
                        let a = u_activeContext.createPattern(t, M);
                        if (!a || E === 0 || D === 0) {
                            continue;
                        }
                        let n = 1 / E;
                        let o = 1 / D;
                        let l = (H.x1 - H.x0) * n;
                        let u = (H.y1 - H.y0) * n;
                        let h = (H.x3 - H.x0) * o;
                        let p = (H.y3 - H.y0) * o;
                        let m = H.x0 - l * Y - h * $;
                        let v = H.y0 - u * Y - p * $;
                        let x = c.source.pixelWidth;
                        let g = c.source.pixelHeight;
                        e._tempPatternMatrix.set(l * x, u * g, h * x, p * g, m * x, v * g);
                        s.canvasUtils.applyPatternTransform(a, e._tempPatternMatrix);
                        u_activeContext.fillStyle = a;
                        u_activeContext.fillRect(Y, $, E, D);
                    } else {
                        let e = _ !== 16777215 || W ? s.canvasUtils.getTintedCanvas({
                            texture: c
                        }, _) : f;
                        let t = e !== f;
                        u_activeContext.drawImage(e, t ? 0 : F, t ? 0 : I, t ? e.width : R, t ? e.height : U, Y, $, E, D);
                    }
                }
            }
        };
        o._tempPatternMatrix = new i.Matrix;
        o.extension = {
            type: [
                t.ExtensionType.CanvasPipesAdaptor
            ],
            name: "batch"
        };
        e.s([
            "CanvasBatchAdaptor",
            0,
            o
        ], 275957);
        class l {
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
                let a = this._colorStack[this._colorStackIndex];
                if (a !== this._currentColor) {
                    this._currentColor = a;
                    r.add({
                        renderPipeId: "colorMask",
                        colorMask: a,
                        canBundle: false
                    });
                }
                this._colorStackIndex++;
            }
            pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                let _colorStack = this._colorStack;
                this._colorStackIndex--;
                let a = _colorStack[this._colorStackIndex - 1];
                if (a !== this._currentColor) {
                    this._currentColor = a;
                    r.add({
                        renderPipeId: "colorMask",
                        colorMask: a,
                        canBundle: false
                    });
                }
            }
            execute(e) {}
            destroy() {
                this._renderer = null;
                this._colorStack = null;
            }
        }
        l.extension = {
            type: [
                t.ExtensionType.CanvasPipes
            ],
            name: "colorMask"
        };
        e.s([
            "CanvasColorMaskPipe",
            0,
            l
        ], 542553);
        var u = e.i(625533);
        var d = e.i(86958);
        var h = e.i(967030);
        var c = e.i(562140);
        function f(e, shape) {
            switch(shape.type){
                case "rectangle":
                    e.rect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "roundedRectangle":
                    let r;
                    let i;
                    let a;
                    let n;
                    let s;
                    r = shape.x;
                    i = shape.y;
                    a = shape.width;
                    n = shape.height;
                    s = Math.max(0, Math.min(s = shape.radius, Math.min(a, n) / 2));
                    e.moveTo(r + s, i);
                    e.lineTo(r + a - s, i);
                    e.quadraticCurveTo(r + a, i, r + a, i + s);
                    e.lineTo(r + a, i + n - s);
                    e.quadraticCurveTo(r + a, i + n, r + a - s, i + n);
                    e.lineTo(r + s, i + n);
                    e.quadraticCurveTo(r, i + n, r, i + n - s);
                    e.lineTo(r, i + s);
                    e.quadraticCurveTo(r, i, r + s, i);
                    break;
                case "circle":
                    e.moveTo(shape.x + shape.radius, shape.y);
                    e.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                    break;
                case "ellipse":
                    if (e.ellipse) {
                        e.moveTo(shape.x + shape.halfWidth, shape.y);
                        e.ellipse(shape.x, shape.y, shape.halfWidth, shape.halfHeight, 0, 0, 2 * Math.PI);
                    } else {
                        e.save();
                        e.translate(shape.x, shape.y);
                        e.scale(shape.halfWidth, shape.halfHeight);
                        e.moveTo(1, 0);
                        e.arc(0, 0, 1, 0, 2 * Math.PI);
                        e.restore();
                    }
                    break;
                case "triangle":
                    e.moveTo(shape.x, shape.y);
                    e.lineTo(shape.x2, shape.y2);
                    e.lineTo(shape.x3, shape.y3);
                    e.closePath();
                    break;
                default:
                    {
                        let r = shape.points;
                        if (!r?.length) {
                            break;
                        }
                        e.moveTo(r[0], r[1]);
                        for(let t = 2; t < r.length; t += 2){
                            e.lineTo(r[t], r[t + 1]);
                        }
                        if (shape.closePath) {
                            e.closePath();
                        }
                    }
            }
        }
        class p {
            constructor(e){
                this._warnedMaskTypes = new Set;
                this._canvasMaskStack = [];
                this._renderer = e;
            }
            push(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
            }
            pop(e, t, r) {
                this._renderer.renderPipes.batch.break(r);
                r.add({
                    renderPipeId: "stencilMask",
                    action: "popMaskEnd",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
            }
            execute(e) {
                if (e.action !== "pushMaskBegin" && e.action !== "popMaskEnd") {
                    return;
                }
                let _renderer = this._renderer;
                let t_canvasContext = _renderer.canvasContext;
                let i = t_canvasContext?.activeContext;
                if (!i) {
                    return;
                }
                if (e.action === "popMaskEnd") {
                    if (this._canvasMaskStack.pop()) {
                        i.restore();
                    }
                    return;
                }
                if (e.inverse) {
                    this._warnOnce("inverse", "CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.");
                }
                let mask = e.mask.mask;
                if (!(mask instanceof d.Graphics)) {
                    this._warnOnce("nonGraphics", "CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask.");
                    this._canvasMaskStack.push(false);
                    return;
                }
                let n = mask.context?.instructions;
                if (!n?.length) {
                    return void this._canvasMaskStack.push(false);
                }
                i.save();
                t_canvasContext.setContextTransform(mask.groupTransform, (_renderer._roundPixels | mask._roundPixels) == 1);
                i.beginPath();
                let s = false;
                let o = false;
                for(let e = 0; e < n.length; e++){
                    let t = n[e];
                    let r = t.action;
                    if (r !== "fill" && r !== "stroke") {
                        continue;
                    }
                    let a = t.data;
                    let l = a?.path?.shapePath;
                    if (!l?.shapePrimitives?.length) {
                        continue;
                    }
                    let d = r === "stroke";
                    let c = l.shapePrimitives;
                    for(let e = 0; e < c.length; e++){
                        let t = c[e];
                        if (!t?.shape) {
                            continue;
                        }
                        let r = t.transform;
                        let n = r && !r.isIdentity();
                        if (n) {
                            i.save();
                            i.transform(r.a, r.b, r.c, r.d, r.tx, r.ty);
                        }
                        if (d && a.style) {
                            s = ((e, t, r)=>{
                                let i = [];
                                let a = [];
                                let n = [];
                                let s = h.shapeBuilders[t.type];
                                if (!s?.build(t, i)) {
                                    return false;
                                }
                                let o = t.closePath ?? true;
                                u.buildLine(i, r, false, o, a, n);
                                for(let t = 0; t < n.length; t += 3){
                                    let r = 2 * n[t];
                                    let i = 2 * n[t + 1];
                                    let s = 2 * n[t + 2];
                                    e.moveTo(a[r], a[r + 1]);
                                    e.lineTo(a[i], a[i + 1]);
                                    e.lineTo(a[s], a[s + 1]);
                                    e.closePath();
                                }
                                return true;
                            })(i, t.shape, a.style) || s;
                        } else {
                            f(i, t.shape);
                            o = ((e, t)=>{
                                if (!t?.length) {
                                    return false;
                                }
                                for(let r = 0; r < t.length; r++){
                                    let i = t[r];
                                    if (!i?.shape) {
                                        continue;
                                    }
                                    let a = i.transform;
                                    let n = a && !a.isIdentity();
                                    if (n) {
                                        e.save();
                                        e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty);
                                    }
                                    f(e, i.shape);
                                    if (n) {
                                        e.restore();
                                    }
                                }
                                return true;
                            })(i, t.holes) || o;
                            s = true;
                        }
                        if (n) {
                            i.restore();
                        }
                    }
                }
                if (!s) {
                    i.restore();
                    this._canvasMaskStack.push(false);
                    return;
                }
                if (o) {
                    i.clip("evenodd");
                } else {
                    i.clip();
                }
                this._canvasMaskStack.push(true);
            }
            destroy() {
                this._renderer = null;
                this._warnedMaskTypes = null;
                this._canvasMaskStack = null;
            }
            _warnOnce(e, t) {
                if (!this._warnedMaskTypes.has(e)) {
                    this._warnedMaskTypes.add(e);
                    c.warn(t);
                }
            }
        }
        p.extension = {
            type: [
                t.ExtensionType.CanvasPipes
            ],
            name: "stencilMask"
        };
        e.s([
            "CanvasStencilMaskPipe",
            0,
            p
        ], 198418);
        var m = e.i(222735);
        var v = e.i(207841);
        let x = "source-over";
        function g() {
            let e = v.canUseNewCanvasBlendModes();
            let t = Object.create(null);
            t.inherit = x;
            t.none = x;
            t.normal = "source-over";
            t.add = "lighter";
            t.multiply = e ? "multiply" : x;
            t.screen = e ? "screen" : x;
            t.overlay = e ? "overlay" : x;
            t.darken = e ? "darken" : x;
            t.lighten = e ? "lighten" : x;
            t["color-dodge"] = e ? "color-dodge" : x;
            t["color-burn"] = e ? "color-burn" : x;
            t["hard-light"] = e ? "hard-light" : x;
            t["soft-light"] = e ? "soft-light" : x;
            t.difference = e ? "difference" : x;
            t.exclusion = e ? "exclusion" : x;
            t.saturation = e ? "saturation" : x;
            t.color = e ? "color" : x;
            t.luminosity = e ? "luminosity" : x;
            t["linear-burn"] = e ? "color-burn" : x;
            t["linear-dodge"] = e ? "color-dodge" : x;
            t["linear-light"] = e ? "hard-light" : x;
            t["pin-light"] = e ? "hard-light" : x;
            t["vivid-light"] = e ? "hard-light" : x;
            t["hard-mix"] = x;
            t.negation = e ? "difference" : x;
            t["normal-npm"] = t.normal;
            t["add-npm"] = t.add;
            t["screen-npm"] = t.screen;
            t.erase = "destination-out";
            t.subtract = x;
            t.divide = x;
            t.min = x;
            t.max = x;
            return t;
        }
        e.s([
            "mapCanvasBlendModesToPixi",
            0,
            g
        ], 110323);
        let y = new i.Matrix;
        class b {
            constructor(e){
                this.activeResolution = 1;
                this.smoothProperty = "imageSmoothingEnabled";
                this.blendModes = g();
                this._activeBlendMode = "normal";
                this._projTransform = null;
                this._outerBlend = false;
                this._warnedBlendModes = new Set;
                this._renderer = e;
            }
            resolutionChange(e) {
                this.activeResolution = e;
            }
            init() {
                let alpha = this._renderer.background.alpha < 1;
                this.rootContext = this._renderer.canvas.getContext("2d", {
                    alpha
                });
                this.activeContext = this.rootContext;
                this.activeResolution = this._renderer.resolution;
                if (!this.rootContext.imageSmoothingEnabled) {
                    let e = this.rootContext;
                    if (e.webkitImageSmoothingEnabled) {
                        this.smoothProperty = "webkitImageSmoothingEnabled";
                    } else if (e.mozImageSmoothingEnabled) {
                        this.smoothProperty = "mozImageSmoothingEnabled";
                    } else if (e.oImageSmoothingEnabled) {
                        this.smoothProperty = "oImageSmoothingEnabled";
                    } else if (e.msImageSmoothingEnabled) {
                        this.smoothProperty = "msImageSmoothingEnabled";
                    }
                }
            }
            setContextTransform(e, t, r, a) {
                let n = a ? i.Matrix.IDENTITY : this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix || i.Matrix.IDENTITY;
                let s = y;
                s.copyFrom(n);
                s.append(e);
                let _projTransform = this._projTransform;
                let activeResolution = this.activeResolution;
                r = r || activeResolution;
                if (_projTransform) {
                    let e = i.Matrix.shared;
                    e.copyFrom(s);
                    e.prepend(_projTransform);
                    s = e;
                }
                if (t) {
                    this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * activeResolution | 0, s.ty * activeResolution | 0);
                } else {
                    this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * activeResolution, s.ty * activeResolution);
                }
            }
            clear(e, t) {
                let activeContext = this.activeContext;
                let _renderer = this._renderer;
                activeContext.clearRect(0, 0, _renderer.width, _renderer.height);
                if (e) {
                    let a = m.Color.shared.setValue(e);
                    activeContext.globalAlpha = t ?? a.alpha;
                    activeContext.fillStyle = a.toHex();
                    activeContext.fillRect(0, 0, _renderer.width, _renderer.height);
                    activeContext.globalAlpha = 1;
                }
            }
            setBlendMode(e) {
                if (this._activeBlendMode === e) {
                    return;
                }
                this._activeBlendMode = e;
                this._outerBlend = false;
                let t = this.blendModes[e];
                if (!t) {
                    if (!this._warnedBlendModes.has(e)) {
                        console.warn(`CanvasRenderer: blend mode "${e}" is not supported in Canvas2D; falling back to "source-over".`);
                        this._warnedBlendModes.add(e);
                    }
                    this.activeContext.globalCompositeOperation = "source-over";
                    return;
                }
                this.activeContext.globalCompositeOperation = t;
            }
            destroy() {
                this.rootContext = null;
                this.activeContext = null;
                this._warnedBlendModes.clear();
            }
        }
        b.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "canvasContext"
        };
        e.s([
            "CanvasContextSystem",
            0,
            b
        ], 149566);
        class T {
            constructor(){
                this.maxTextures = 16;
                this.maxBatchableTextures = 16;
                this.maxUniformBindings = 0;
            }
            init() {}
        }
        T.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "limits"
        };
        e.s([
            "CanvasLimitsSystem",
            0,
            T
        ], 735741);
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
        let r = {
            ...t,
            vertex: {
                ...t.vertex,
                header: t.vertex.header.replace("group(1)", "group(2)")
            }
        };
        let i = {
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
            i,
            "localUniformBitGroup2",
            0,
            r
        ], 418668);
        let a = {
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
        let n = {
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
            a,
            "textureBitGl",
            0,
            n
        ], 949998);
    },
    638082,
    16354,
    215393,
    84327,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(86245);
        var i = e.i(492884);
        var a = e.i(914316);
        var n = e.i(751559);
        var s = e.i(275957);
        var o = e.i(497256);
        var l = e.i(375564);
        var u = e.i(542553);
        var d = e.i(198418);
        var h = e.i(507938);
        var c = e.i(164868);
        var f = e.i(497544);
        var p = e.i(162450);
        var m = e.i(149566);
        var v = e.i(735741);
        var x = e.i(798299);
        var g = e.i(222735);
        var y = e.i(787653);
        var b = e.i(173156);
        class T {
            init(e, t) {
                this._renderer = e;
                this._renderTargetSystem = t;
            }
            initGpuRenderTarget(e) {
                let e_colorTexture = e.colorTexture;
                let { canvas, context } = this._ensureCanvas(e_colorTexture);
                return {
                    canvas,
                    context,
                    width: canvas.width,
                    height: canvas.height
                };
            }
            resizeGpuRenderTarget(e) {
                let e_colorTexture = e.colorTexture;
                let { canvas } = this._ensureCanvas(e_colorTexture);
                canvas.width = e.pixelWidth;
                canvas.height = e.pixelHeight;
            }
            startRenderPass(e, t, r, i) {
                let a = this._renderTargetSystem.getGpuRenderTarget(e);
                this._renderer.canvasContext.activeContext = a.context;
                this._renderer.canvasContext.activeResolution = e.resolution;
                if (t) {
                    this.clear(e, t, r, i);
                }
            }
            clear(e, t, r, i) {
                let context = this._renderTargetSystem.getGpuRenderTarget(e).context;
                let n = i || {
                    x: 0,
                    y: 0,
                    width: e.pixelWidth,
                    height: e.pixelHeight
                };
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(n.x, n.y, n.width, n.height);
                if (r) {
                    let e = g.Color.shared.setValue(r);
                    if (e.alpha > 0) {
                        context.globalAlpha = e.alpha;
                        context.fillStyle = e.toHex();
                        context.fillRect(n.x, n.y, n.width, n.height);
                        context.globalAlpha = 1;
                    }
                }
            }
            finishRenderPass() {}
            copyToTexture(e, t, r, i, a) {
                let canvas = this._renderTargetSystem.getGpuRenderTarget(e).canvas;
                let t_source = t.source;
                let { context } = this._ensureCanvas(t_source);
                let l = a?.x ?? 0;
                let u = a?.y ?? 0;
                context.drawImage(canvas, r.x, r.y, i.width, i.height, l, u, i.width, i.height);
                t_source.update();
                return t;
            }
            destroyGpuRenderTarget(e) {}
            _ensureCanvas(e) {
                let e_resource = e.resource;
                if (!(e_resource && b.CanvasSource.test(e_resource))) {
                    e_resource = y.DOMAdapter.get().createCanvas(e.pixelWidth, e.pixelHeight);
                    e.resource = e_resource;
                }
                if (e_resource.width !== e.pixelWidth || e_resource.height !== e.pixelHeight) {
                    e_resource.width = e.pixelWidth;
                    e_resource.height = e.pixelHeight;
                }
                let r = e_resource.getContext("2d");
                return {
                    canvas: e_resource,
                    context: r
                };
            }
        }
        e.s([
            "CanvasRenderTargetAdaptor",
            0,
            T
        ], 16354);
        class _ extends x.RenderTargetSystem {
            constructor(e){
                super(e);
                this.adaptor = new T;
                this.adaptor.init(e, this);
            }
        }
        _.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "renderTarget"
        };
        e.s([
            "CanvasRenderTargetSystem",
            0,
            _
        ], 215393);
        var C = e.i(449752);
        class S {
            constructor(e){}
            init() {}
            initSource(e) {}
            generateCanvas(e) {
                let t = y.DOMAdapter.get().createCanvas();
                let r = t.getContext("2d");
                let i = C.canvasUtils.getCanvasSource(e);
                if (!i) {
                    return t;
                }
                let e_frame = e.frame;
                let n = e.source._resolution ?? e.source.resolution ?? 1;
                let s = e_frame.x * n;
                let o = e_frame.y * n;
                let l = e_frame.width * n;
                let u = e_frame.height * n;
                t.width = Math.ceil(l);
                t.height = Math.ceil(u);
                r.drawImage(i, s, o, l, u, 0, 0, l, u);
                return t;
            }
            getPixels(e) {
                let t = this.generateCanvas(e);
                return {
                    pixels: t.getContext("2d", {
                        willReadFrequently: true
                    }).getImageData(0, 0, t.width, t.height).data,
                    width: t.width,
                    height: t.height
                };
            }
            destroy() {}
        }
        S.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "texture"
        };
        e.s([
            "CanvasTextureSystem",
            0,
            S
        ], 84327);
        let w = [
            ...f.SharedSystems,
            m.CanvasContextSystem,
            v.CanvasLimitsSystem,
            S,
            _
        ];
        let M = [
            h.BlendModePipe,
            o.BatcherPipe,
            n.SpritePipe,
            i.RenderGroupPipe,
            l.AlphaMaskPipe,
            d.CanvasStencilMaskPipe,
            u.CanvasColorMaskPipe,
            r.CustomRenderPipe
        ];
        let P = [
            s.CanvasBatchAdaptor,
            a.CanvasGraphicsAdaptor
        ];
        let systems = [];
        let renderPipes = [];
        let renderPipeAdaptors = [];
        t.extensions.handleByNamedList(t.ExtensionType.CanvasSystem, systems);
        t.extensions.handleByNamedList(t.ExtensionType.CanvasPipes, renderPipes);
        t.extensions.handleByNamedList(t.ExtensionType.CanvasPipesAdaptor, renderPipeAdaptors);
        t.extensions.add(...w, ...M, ...P);
        class R extends c.AbstractRenderer {
            constructor(){
                super({
                    name: "canvas",
                    type: p.RendererType.CANVAS,
                    systems,
                    renderPipes,
                    renderPipeAdaptors
                });
            }
        }
        e.s([
            "CanvasRenderer",
            0,
            R
        ], 638082);
    },
    449752,
    207841,
    (e)=>{
        "use strict";
        let t;
        var r = e.i(222735);
        var i = e.i(787653);
        var a = e.i(164811);
        function n(e) {
            let t = i.DOMAdapter.get().createCanvas(6, 1);
            let r = t.getContext("2d");
            r.fillStyle = e;
            r.fillRect(0, 0, 6, 1);
            return t;
        }
        function s() {
            if (t !== undefined) {
                return t;
            }
            try {
                let e = n("#ff00ff");
                let r = n("#ffff00");
                let a = i.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.drawImage(e, 0, 0);
                a.drawImage(r, 2, 0);
                let s = a.getImageData(2, 0, 1, 1);
                if (s) {
                    let e = s.data;
                    t = e[0] === 255 && e[1] === 0 && e[2] === 0;
                } else {
                    t = false;
                }
            } catch (e) {
                t = false;
            }
            return t;
        }
        e.s([
            "canUseNewCanvasBlendModes",
            0,
            s
        ], 207841);
        let o = {
            canvas: null,
            convertTintToImage: false,
            cacheStepsPerColorChannel: 8,
            canUseMultiply: s(),
            tintMethod: null,
            _canvasSourceCache: new WeakMap,
            _unpremultipliedCache: new WeakMap,
            getCanvasSource: (e)=>{
                let e_source = e.source;
                let r = e_source?.resource;
                if (!r) {
                    return null;
                }
                let a = e_source.alphaMode === "premultiplied-alpha";
                let n = e_source.resourceWidth ?? e_source.pixelWidth;
                let s = e_source.resourceHeight ?? e_source.pixelHeight;
                let l = n !== e_source.pixelWidth || s !== e_source.pixelHeight;
                if (a) {
                    if ((r instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && r instanceof OffscreenCanvas) && !l) {
                        return r;
                    }
                    let e = o._unpremultipliedCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                }
                if (r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Uint32Array || r instanceof Int32Array || r instanceof Float32Array || r instanceof ArrayBuffer) {
                    let e = o._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let a = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = a.getContext("2d");
                    let s = n.createImageData(e_source.pixelWidth, e_source.pixelHeight);
                    let l = s.data;
                    let u = r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
                    if (e_source.format === "bgra8unorm") {
                        for(let e = 0; e < l.length && e + 3 < u.length; e += 4){
                            l[e] = u[e + 2];
                            l[e + 1] = u[e + 1];
                            l[e + 2] = u[e];
                            l[e + 3] = u[e + 3];
                        }
                    } else {
                        l.set(u.subarray(0, l.length));
                    }
                    n.putImageData(s, 0, 0);
                    o._canvasSourceCache.set(e_source, {
                        canvas: a,
                        resourceId: e_source._resourceId
                    });
                    return a;
                }
                if (a) {
                    let e = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let a = e.getContext("2d", {
                        willReadFrequently: true
                    });
                    e.width = e_source.pixelWidth;
                    e.height = e_source.pixelHeight;
                    a.drawImage(r, 0, 0);
                    let n = a.getImageData(0, 0, e.width, e.height);
                    let s = n.data;
                    for(let e = 0; e < s.length; e += 4){
                        let t = s[e + 3];
                        if (t > 0) {
                            let r = 255 / t;
                            s[e] = Math.min(255, s[e] * r + 0.5);
                            s[e + 1] = Math.min(255, s[e + 1] * r + 0.5);
                            s[e + 2] = Math.min(255, s[e + 2] * r + 0.5);
                        }
                    }
                    a.putImageData(n, 0, 0);
                    o._unpremultipliedCache.set(e_source, {
                        canvas: e,
                        resourceId: e_source._resourceId
                    });
                    return e;
                }
                if (l) {
                    let e = o._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let a = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = a.getContext("2d");
                    a.width = e_source.pixelWidth;
                    a.height = e_source.pixelHeight;
                    n.drawImage(r, 0, 0);
                    o._canvasSourceCache.set(e_source, {
                        canvas: a,
                        resourceId: e_source._resourceId
                    });
                    return a;
                }
                return r;
            },
            getTintedCanvas: (e, t)=>{
                let e_texture = e.texture;
                let n = r.Color.shared.setValue(t).toHex();
                let s = e_texture.tintCache || (e_texture.tintCache = {});
                let l = s[n];
                let _resourceId = e_texture.source._resourceId;
                if (l?.tintId === _resourceId) {
                    return l;
                }
                let d = l && "getContext" in l ? l : i.DOMAdapter.get().createCanvas();
                o.tintMethod(e_texture, t, d);
                d.tintId = _resourceId;
                if (o.convertTintToImage && d.toDataURL !== undefined) {
                    let e = i.DOMAdapter.get().createImage();
                    e.src = d.toDataURL();
                    e.tintId = _resourceId;
                    s[n] = e;
                } else {
                    s[n] = d;
                }
                return s[n];
            },
            getTintedPattern: (e, t)=>{
                let a = r.Color.shared.setValue(t).toHex();
                let n = e.patternCache || (e.patternCache = {});
                let _resourceId = e.source._resourceId;
                let l = n[a];
                if (!(l?.tintId === _resourceId)) {
                    if (!o.canvas) {
                        o.canvas = i.DOMAdapter.get().createCanvas();
                    }
                    o.tintMethod(e, t, o.canvas);
                    l = o.canvas.getContext("2d").createPattern(o.canvas, "repeat");
                    l.tintId = _resourceId;
                    n[a] = l;
                }
                return l;
            },
            applyPatternTransform: (e, t, r = true)=>{
                if (!t || !e.setTransform) {
                    return;
                }
                let globalThis_DOMMatrix = globalThis.DOMMatrix;
                if (!globalThis_DOMMatrix) {
                    return;
                }
                let a = new globalThis_DOMMatrix([
                    t.a,
                    t.b,
                    t.c,
                    t.d,
                    t.tx,
                    t.ty
                ]);
                e.setTransform(r ? a.inverse() : a);
            },
            tintWithMultiply: (e, t, i)=>{
                let n = i.getContext("2d");
                let s = e.frame.clone();
                let l = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                s.x *= l;
                s.y *= l;
                s.width *= l;
                s.height *= l;
                let d = a.groupD8.isVertical(e_rotate);
                let h = d ? s.height : s.width;
                let c = d ? s.width : s.height;
                i.width = Math.ceil(h);
                i.height = Math.ceil(c);
                n.save();
                n.fillStyle = r.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, h, c);
                n.globalCompositeOperation = "multiply";
                let f = o.getCanvasSource(e);
                if (f) {
                    if (e_rotate) {
                        o._applyInverseRotation(n, e_rotate, s.width, s.height);
                    }
                    n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                    n.globalCompositeOperation = "destination-atop";
                    n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                }
                n.restore();
            },
            tintWithOverlay: (e, t, i)=>{
                let n = i.getContext("2d");
                let s = e.frame.clone();
                let l = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                s.x *= l;
                s.y *= l;
                s.width *= l;
                s.height *= l;
                let d = a.groupD8.isVertical(e_rotate);
                let h = d ? s.height : s.width;
                let c = d ? s.width : s.height;
                i.width = Math.ceil(h);
                i.height = Math.ceil(c);
                n.save();
                n.globalCompositeOperation = "copy";
                n.fillStyle = r.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, h, c);
                n.globalCompositeOperation = "destination-atop";
                let f = o.getCanvasSource(e);
                if (f) {
                    if (e_rotate) {
                        o._applyInverseRotation(n, e_rotate, s.width, s.height);
                    }
                    n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                }
                n.restore();
            },
            tintWithPerPixel: (e, t, r)=>{
                let i = r.getContext("2d");
                let n = e.frame.clone();
                let s = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                n.x *= s;
                n.y *= s;
                n.width *= s;
                n.height *= s;
                let u = a.groupD8.isVertical(e_rotate);
                let d = u ? n.height : n.width;
                let h = u ? n.width : n.height;
                r.width = Math.ceil(d);
                r.height = Math.ceil(h);
                i.save();
                i.globalCompositeOperation = "copy";
                let c = o.getCanvasSource(e);
                if (!c) {
                    return void i.restore();
                }
                if (e_rotate) {
                    o._applyInverseRotation(i, e_rotate, n.width, n.height);
                }
                i.drawImage(c, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
                i.restore();
                let f = t >> 16 & 255;
                let p = t >> 8 & 255;
                let m = 255 & t;
                let v = i.getImageData(0, 0, d, h);
                let v_data = v.data;
                for(let e = 0; e < v_data.length; e += 4){
                    v_data[e] = v_data[e] * f / 255;
                    v_data[e + 1] = v_data[e + 1] * p / 255;
                    v_data[e + 2] = v_data[e + 2] * m / 255;
                }
                i.putImageData(v, 0, 0);
            },
            _applyInverseRotation: (e, t, r, i)=>{
                let n = a.groupD8.inv(t);
                let s = a.groupD8.uX(n);
                let o = a.groupD8.uY(n);
                let l = a.groupD8.vX(n);
                let u = a.groupD8.vY(n);
                let d = -Math.min(0, s * r, l * i, s * r + l * i);
                let h = -Math.min(0, o * r, u * i, o * r + u * i);
                e.transform(s, o, l, u, d, h);
            }
        };
        o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel;
        e.s([
            "canvasUtils",
            0,
            o
        ], 449752);
    },
    261095,
    324086,
    (e)=>{
        "use strict";
        var t = e.i(562140);
        var r = e.i(434367);
        e.s([
            "ensureAttributes",
            0,
            (e, i)=>{
                for(let r in e.attributes){
                    let a = e.attributes[r];
                    let n = i[r];
                    if (n) {
                        a.format ?? (a.format = n.format);
                        a.offset ?? (a.offset = n.offset);
                        a.instance ?? (a.instance = n.instance);
                    } else {
                        t.warn(`Attribute ${r} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
                    }
                }
                !((e)=>{
                    let { buffers, attributes } = e;
                    let a = {};
                    let n = {};
                    for(let e in buffers){
                        let r = buffers[e];
                        a[r.uid] = 0;
                        n[r.uid] = 0;
                    }
                    for(let e in attributes){
                        let t = attributes[e];
                        a[t.buffer.uid] += r.getAttributeInfoFromFormat(t.format).stride;
                    }
                    for(let e in attributes){
                        let t = attributes[e];
                        t.stride ?? (t.stride = a[t.buffer.uid]);
                        t.start ?? (t.start = n[t.buffer.uid]);
                        n[t.buffer.uid] += r.getAttributeInfoFromFormat(t.format).stride;
                    }
                })(e);
            }
        ], 261095);
        var i = e.i(589627);
        let a = [];
        a[i.STENCIL_MODES.NONE] = undefined;
        a[i.STENCIL_MODES.DISABLED] = {
            stencilWriteMask: 0,
            stencilReadMask: 0
        };
        a[i.STENCIL_MODES.RENDERING_MASK_ADD] = {
            stencilFront: {
                compare: "equal",
                passOp: "increment-clamp"
            },
            stencilBack: {
                compare: "equal",
                passOp: "increment-clamp"
            }
        };
        a[i.STENCIL_MODES.RENDERING_MASK_REMOVE] = {
            stencilFront: {
                compare: "equal",
                passOp: "decrement-clamp"
            },
            stencilBack: {
                compare: "equal",
                passOp: "decrement-clamp"
            }
        };
        a[i.STENCIL_MODES.MASK_ACTIVE] = {
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
        a[i.STENCIL_MODES.INVERSE_MASK_ACTIVE] = {
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
            a
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
        var r = e.i(55585);
        var i = e.i(294212);
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
                        e.buffer = new r.Buffer({
                            data: new Float32Array(t.layout.size / 4),
                            usage: i.BufferUsage.UNIFORM | i.BufferUsage.COPY_DST
                        });
                    }
                }
                getUniformGroupData(e) {
                    return this._syncFunctionHash[e._signature] || this._initUniformGroup(e);
                }
                _initUniformGroup(e) {
                    let e__signature = e._signature;
                    let r = this._syncFunctionHash[e__signature];
                    if (!r) {
                        let i = Object.keys(e.uniformStructures).map((t)=>e.uniformStructures[t]);
                        let layout = this._adaptor.createUboElements(i);
                        let syncFunction = this._generateUboSync(layout.uboElements);
                        r = this._syncFunctionHash[e__signature] = {
                            layout,
                            syncFunction
                        };
                    }
                    return this._syncFunctionHash[e__signature];
                }
                _generateUboSync(e) {
                    return this._adaptor.generateUboSync(e);
                }
                syncUniformGroup(e, t, a) {
                    let n = this.getUniformGroupData(e);
                    if (!e.buffer) {
                        e.buffer = new r.Buffer({
                            data: new Float32Array(n.layout.size / 4),
                            usage: i.BufferUsage.UNIFORM | i.BufferUsage.COPY_DST
                        });
                    }
                    let s = null;
                    if (!t) {
                        t = e.buffer.data;
                        s = e.buffer.dataInt32;
                    }
                    if (!a) {
                        a = 0;
                    }
                    n.syncFunction(e.uniforms, t, s, a);
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
        let a = [
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
        function n(e, t) {
            return `
        for (let i = 0; i < ${e * t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `;
        }
        e.s([
            "uniformParsers",
            0,
            a
        ], 643781);
        e.s([
            "createUboSyncFunction",
            0,
            (e, t, r, i)=>{
                let n = [
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
                for(let o = 0; o < e.length; o++){
                    let l = e[o];
                    let u = l.data.name;
                    let d = false;
                    let h = 0;
                    for(let e = 0; e < a.length; e++){
                        if (a[e].test(l.data)) {
                            h = l.offset / 4;
                            n.push(`name = "${u}";`, `offset += ${h - s};`, a[e][t] || a[e].ubo);
                            d = true;
                            break;
                        }
                    }
                    if (!d) {
                        if (l.data.size > 1) {
                            h = l.offset / 4;
                            n.push(r(l, h - s));
                        } else {
                            let e = i[l.data.type];
                            h = l.offset / 4;
                            n.push(`
                    v = uv.${u};
                    offset += ${h - s};
                    ${e};
                `);
                        }
                    }
                    s = h;
                }
                return Function("uv", "data", "dataInt32", "offset", n.join("\n"));
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
            "mat3x2<f32>": n(3, 2),
            "mat4x2<f32>": n(4, 2),
            "mat2x3<f32>": n(2, 3),
            "mat4x3<f32>": n(4, 3),
            "mat2x4<f32>": n(2, 4),
            "mat3x4<f32>": n(3, 4)
        };
        let o = {
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
            o
        ], 422537);
        var l = e.i(263524);
        var u = e.i(733705);
        class d extends l.default {
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
            d
        ], 693398);
    },
    963345,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        var r = e.i(356566);
        var i = e.i(609932);
        class a {
            constructor(e){
                this._canvasPool = Object.create(null);
                this.canvasOptions = e || {};
                this.enableFullScreen = false;
            }
            _createCanvasAndContext(e, r) {
                let i = t.DOMAdapter.get().createCanvas();
                i.width = e;
                i.height = r;
                let a = i.getContext("2d");
                return {
                    canvas: i,
                    context: a
                };
            }
            getOptimalCanvasAndContext(e, t, i = 1) {
                e = Math.ceil(e * i - 0.000001);
                t = Math.ceil(t * i - 0.000001);
                e = r.nextPow2(e);
                t = r.nextPow2(t);
                let a = (e << 17) + (t << 1);
                if (!this._canvasPool[a]) {
                    this._canvasPool[a] = [];
                }
                let n = this._canvasPool[a].pop();
                if (!n) {
                    n = this._createCanvasAndContext(e, t);
                }
                return n;
            }
            returnCanvasAndContext(e) {
                let { width, height } = e.canvas;
                let i = (width << 17) + (height << 1);
                e.context.resetTransform();
                e.context.clearRect(0, 0, width, height);
                this._canvasPool[i].push(e);
            }
            clear() {
                this._canvasPool = {};
            }
        }
        let n = new a;
        i.GlobalResourceRegistry.register(n);
        e.s([
            "CanvasPool",
            0,
            n,
            "CanvasPoolClass",
            0,
            a
        ]);
    },
    914316,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(164811);
        var i = e.i(389474);
        var a = e.i(449752);
        var n = e.i(337654);
        var s = e.i(997125);
        var o = e.i(414205);
        var l = e.i(625533);
        var u = e.i(419905);
        var d = e.i(336966);
        var h = e.i(967030);
        var c = e.i(12746);
        let f = new i.Matrix;
        let p = new i.Matrix;
        let m = new i.Matrix;
        let v = new i.Matrix;
        function x(e, shape) {
            switch(shape.type){
                case "rectangle":
                    e.rect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "roundedRectangle":
                    let r;
                    let i;
                    let a;
                    let n;
                    let s;
                    r = shape.x;
                    i = shape.y;
                    a = shape.width;
                    n = shape.height;
                    s = Math.max(0, Math.min(s = shape.radius, Math.min(a, n) / 2));
                    e.moveTo(r + s, i);
                    e.lineTo(r + a - s, i);
                    e.quadraticCurveTo(r + a, i, r + a, i + s);
                    e.lineTo(r + a, i + n - s);
                    e.quadraticCurveTo(r + a, i + n, r + a - s, i + n);
                    e.lineTo(r + s, i + n);
                    e.quadraticCurveTo(r, i + n, r, i + n - s);
                    e.lineTo(r, i + s);
                    e.quadraticCurveTo(r, i, r + s, i);
                    break;
                case "circle":
                    e.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                    break;
                case "ellipse":
                    if (e.ellipse) {
                        e.ellipse(shape.x, shape.y, shape.halfWidth, shape.halfHeight, 0, 0, 2 * Math.PI);
                    } else {
                        e.save();
                        e.translate(shape.x, shape.y);
                        e.scale(shape.halfWidth, shape.halfHeight);
                        e.arc(0, 0, 1, 0, 2 * Math.PI);
                        e.restore();
                    }
                    break;
                case "triangle":
                    e.moveTo(shape.x, shape.y);
                    e.lineTo(shape.x2, shape.y2);
                    e.lineTo(shape.x3, shape.y3);
                    e.closePath();
                    break;
                default:
                    {
                        let r = shape.points;
                        if (!r?.length) {
                            break;
                        }
                        e.moveTo(r[0], r[1]);
                        for(let t = 2; t < r.length; t += 2){
                            e.lineTo(r[t], r[t + 1]);
                        }
                        if (shape.closePath) {
                            e.closePath();
                        }
                    }
            }
        }
        class g {
            constructor(){
                this.shader = null;
            }
            contextChange(e) {}
            execute(e, t) {
                let e_renderer = e.renderer;
                let i_canvasContext = e_renderer.canvasContext;
                let g_activeContext = i_canvasContext.activeContext;
                let t_groupTransform = t.groupTransform;
                let T = e_renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                let t_groupColorAlpha = t.groupColorAlpha;
                let C = (T >>> 24 & 255) / 255 * ((t_groupColorAlpha >>> 24 & 255) / 255) * (e_renderer.filter?.alphaMultiplier ?? 1);
                if (C <= 0) {
                    return;
                }
                let S = s.bgr2rgb(o.multiplyHexColors(16777215 & t_groupColorAlpha, 16777215 & T));
                let w = e_renderer._roundPixels | t._roundPixels;
                g_activeContext.save();
                i_canvasContext.setContextTransform(t_groupTransform, w === 1);
                i_canvasContext.setBlendMode(t.groupBlendMode);
                let instructions = t.context.instructions;
                for(let e = 0; e < instructions.length; e++){
                    let instruction = instructions[e];
                    if (instruction.action === "texture") {
                        let e = instruction.data;
                        let i = e.image;
                        let n = i ? a.canvasUtils.getCanvasSource(i) : null;
                        if (!n) {
                            continue;
                        }
                        let s = e.alpha * C;
                        if (s <= 0) {
                            continue;
                        }
                        let l = o.multiplyHexColors(e.style, S);
                        g_activeContext.globalAlpha = s;
                        let u = n;
                        if (l !== 16777215) {
                            u = a.canvasUtils.getTintedCanvas({
                                texture: i
                            }, l);
                        }
                        let d = i.frame;
                        let h = i.source._resolution ?? i.source.resolution ?? 1;
                        let c = d.x * h;
                        let p = d.y * h;
                        let m = d.width * h;
                        let v = d.height * h;
                        if (u !== n) {
                            c = 0;
                            p = 0;
                        }
                        let x = e.transform;
                        let T = x && !x.isIdentity();
                        let _ = i.rotate;
                        if (T || _) {
                            f.copyFrom(t_groupTransform);
                            if (T) {
                                f.append(x);
                            }
                            if (_) {
                                r.groupD8.matrixAppendRotationInv(f, _, e.dx, e.dy, e.dw, e.dh);
                            }
                            i_canvasContext.setContextTransform(f, w === 1);
                        } else {
                            i_canvasContext.setContextTransform(t_groupTransform, w === 1);
                        }
                        g_activeContext.drawImage(u, c, p, u === n ? m : u.width, u === n ? v : u.height, _ ? 0 : e.dx, _ ? 0 : e.dy, e.dw, e.dh);
                        if (T || _) {
                            i_canvasContext.setContextTransform(t_groupTransform, w === 1);
                        }
                        continue;
                    }
                    let i = instruction.data;
                    let s = i?.path?.shapePath;
                    if (!s?.shapePrimitives?.length) {
                        continue;
                    }
                    let T = i.style;
                    let _ = o.multiplyHexColors(T.color, S);
                    let P = T.alpha * C;
                    if (P <= 0) {
                        continue;
                    }
                    let k = instruction.action === "stroke";
                    g_activeContext.globalAlpha = P;
                    if (k) {
                        g_activeContext.lineWidth = T.width;
                        g_activeContext.lineCap = T.cap;
                        g_activeContext.lineJoin = T.join;
                        g_activeContext.miterLimit = T.miterLimit;
                    }
                    let F = s.shapePrimitives;
                    if (!k && i.hole?.shapePath?.shapePrimitives?.length) {
                        F[F.length - 1].holes = i.hole.shapePath.shapePrimitives;
                    }
                    for(let e = 0; e < F.length; e++){
                        let t = F[e];
                        if (!t?.shape) {
                            continue;
                        }
                        let r = t.transform;
                        let i = r && !r.isIdentity();
                        let s = T.texture && T.texture !== n.Texture.WHITE;
                        let o = T.textureSpace === "global" ? r : null;
                        let f = s ? c.generateTextureMatrix(p, T, t.shape, o) : null;
                        let g = ((e, t, r, i)=>{
                            let e_fill = e.fill;
                            if (e_fill instanceof u.FillGradient) {
                                e_fill.buildGradient();
                                let n = e_fill.texture;
                                if (n) {
                                    let o = a.canvasUtils.getTintedPattern(n, t);
                                    let l = r ? v.copyFrom(r).scale(n.source.pixelWidth, n.source.pixelHeight) : v.copyFrom(e_fill.transform);
                                    if (i && !e.textureSpace) {
                                        l.append(i);
                                    }
                                    a.canvasUtils.applyPatternTransform(o, l);
                                    return o;
                                }
                            }
                            if (e_fill instanceof d.FillPattern) {
                                let e = a.canvasUtils.getTintedPattern(e_fill.texture, t);
                                a.canvasUtils.applyPatternTransform(e, e_fill.transform, false);
                                return e;
                            }
                            let e_texture = e.texture;
                            if (e_texture && e_texture !== n.Texture.WHITE) {
                                if (!e_texture.source.resource) {
                                    return "#808080";
                                }
                                let i = a.canvasUtils.getTintedPattern(e_texture, t);
                                let n = r ? v.copyFrom(r).scale(e_texture.source.pixelWidth, e_texture.source.pixelHeight) : e.matrix;
                                a.canvasUtils.applyPatternTransform(i, n);
                                return i;
                            }
                            return `#${(16777215 & t).toString(16).padStart(6, "0")}`;
                        })(T, _, f, i ? m.copyFrom(t_groupTransform).append(r) : t_groupTransform);
                        if (i) {
                            g_activeContext.save();
                            g_activeContext.transform(r.a, r.b, r.c, r.d, r.tx, r.ty);
                        }
                        if (k) {
                            if (T.alignment === 0.5 || T.pixelLine) {
                                g_activeContext.strokeStyle = g;
                                g_activeContext.beginPath();
                                x(g_activeContext, t.shape);
                                g_activeContext.stroke();
                            } else {
                                let e = [];
                                let r = [];
                                let i = [];
                                let a = h.shapeBuilders[t.shape.type];
                                if (a?.build(t.shape, e)) {
                                    let a = t.shape.closePath ?? true;
                                    l.buildLine(e, T, false, a, r, i);
                                    g_activeContext.fillStyle = g;
                                    g_activeContext.beginPath();
                                    for(let e = 0; e < i.length; e += 3){
                                        let t = 2 * i[e];
                                        let a = 2 * i[e + 1];
                                        let n = 2 * i[e + 2];
                                        g_activeContext.moveTo(r[t], r[t + 1]);
                                        g_activeContext.lineTo(r[a], r[a + 1]);
                                        g_activeContext.lineTo(r[n], r[n + 1]);
                                        g_activeContext.closePath();
                                    }
                                    g_activeContext.fill();
                                } else {
                                    g_activeContext.strokeStyle = g;
                                    g_activeContext.beginPath();
                                    x(g_activeContext, t.shape);
                                    g_activeContext.stroke();
                                }
                            }
                        } else {
                            g_activeContext.fillStyle = g;
                            g_activeContext.beginPath();
                            x(g_activeContext, t.shape);
                            if (((e, t)=>{
                                if (!t?.length) {
                                    return false;
                                }
                                for(let r = 0; r < t.length; r++){
                                    let i = t[r];
                                    if (!i?.shape) {
                                        continue;
                                    }
                                    let a = i.transform;
                                    let n = a && !a.isIdentity();
                                    if (n) {
                                        e.save();
                                        e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty);
                                    }
                                    x(e, i.shape);
                                    if (n) {
                                        e.restore();
                                    }
                                }
                                return true;
                            })(g_activeContext, t.holes)) {
                                g_activeContext.fill("evenodd");
                            } else {
                                g_activeContext.fill();
                            }
                        }
                        if (i) {
                            g_activeContext.restore();
                        }
                    }
                }
                g_activeContext.restore();
            }
            destroy() {
                this.shader = null;
            }
        }
        g.extension = {
            type: [
                t.ExtensionType.CanvasPipesAdaptor
            ],
            name: "graphics"
        };
        e.s([
            "CanvasGraphicsAdaptor",
            0,
            g
        ]);
    }
]);
