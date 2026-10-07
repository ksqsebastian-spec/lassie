;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "054d041e-b480-7887-76ee-75b2b055ad8d";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    816414,
    (e)=>{
        "use strict";
        e.i(958348);
        e.i(123821);
        e.i(330570);
        e.s([]);
    },
    50190,
    55742,
    294780,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(449752);
        var i = e.i(963345);
        var n = e.i(453549);
        let a = new (e.i(389474)).Matrix;
        function l(e, t) {
            t.clear();
            let t_matrix = t.matrix;
            for(let r = 0; r < e.length; r++){
                let i = e[r];
                if (i.globalDisplayStatus < 7) {
                    continue;
                }
                let n = i.renderGroup ?? i.parentRenderGroup;
                if (n?.isCachedAsTexture) {
                    t.matrix = a.copyFrom(n.textureOffsetInverseTransform).append(i.worldTransform);
                } else if (n?._parentCacheAsTextureRenderGroup) {
                    t.matrix = a.copyFrom(n._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform);
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
            l
        ], 55742);
        var s = e.i(901548);
        let o = new n.Bounds;
        function u(e, t, r, i, n = false) {
            o.minX = 0;
            o.minY = 0;
            o.maxX = e.width / i | 0;
            o.maxY = e.height / i | 0;
            let a = s.TexturePool.getOptimalTexture(o.width, o.height, i, false, n);
            a.source.uploadMethodId = "image";
            a.source.resource = e;
            a.source.alphaMode = "premultiply-alpha-on-upload";
            a.frame.width = t / i;
            a.frame.height = r / i;
            a.source.emit("update", a.source);
            a.updateUvs();
            return a;
        }
        function h(e) {
            return typeof e.getCanvasFilterString === "function";
        }
        e.s([
            "getPo2TextureFromSource",
            0,
            u
        ], 294780);
        class d {
            constructor(){
                this.skip = false;
                this.useClip = false;
                this.filters = null;
                this.container = null;
                this.bounds = new n.Bounds;
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
                    if (!h(e)) {
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
                let n = [];
                for (let e of filters){
                    if (!e.enabled) {
                        continue;
                    }
                    if (!h(e)) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    let t = e.getCanvasFilterString();
                    if (t === null) {
                        this._warnUnsupportedFilter(e);
                        continue;
                    }
                    if (t) {
                        n.push(t);
                    }
                }
                if (n.length === 0) {
                    return texture;
                }
                let a = r.canvasUtils.getCanvasSource(texture);
                if (!a) {
                    return texture;
                }
                let texture_frame = texture.frame;
                let s = texture.source._resolution ?? texture.source.resolution ?? 1;
                let l_width = texture_frame.width;
                let l_height = texture_frame.height;
                let { canvas, context } = i.CanvasPool.getOptimalCanvasAndContext(l_width, l_height, s);
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(0, 0, canvas.width, canvas.height);
                if (n.length) {
                    context.filter = n.join(" ");
                }
                let f = texture_frame.x * s;
                let g = texture_frame.y * s;
                let x = l_width * s;
                let m = l_height * s;
                context.drawImage(a, f, g, x, m, 0, 0, x, m);
                context.filter = "none";
                context.globalAlpha = 1;
                return u(canvas, l_width, l_height, s);
            }
            _calculateFilterArea(e, t) {
                if (e.renderables) {
                    l(e.renderables, t);
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
                    e = this._filterStack[this._filterStackIndex] = new d;
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
            h
        ], 50190);
    },
    705038,
    (e)=>{
        "use strict";
        var t = e.i(550645);
        var r = e.i(818011);
        var i = e.i(761149);
        var n = e.i(688761);
        let a = class e extends i.Shader {
            constructor(t){
                super(t = {
                    ...e.defaultOptions,
                    ...t
                });
                this.enabled = true;
                this._state = n.State.for2d();
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
        a.defaultOptions = {
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
            a
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
        var n = e.i(175444);
        var a = e.i(719885);
        var l = e.i(153594);
        var s = e.i(337654);
        var o = e.i(901548);
        var u = e.i(162450);
        var h = e.i(453549);
        var d = e.i(55742);
        var c = e.i(562140);
        let geometry = new a.Geometry({
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
        class f {
            constructor(){
                this.skip = false;
                this.inputTexture = null;
                this.backTexture = null;
                this.filters = null;
                this.bounds = new h.Bounds;
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
        class g {
            constructor(e){
                this._filterStackIndex = 0;
                this._filterStack = [];
                this._filterGlobalUniforms = new l.UniformGroup({
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
                this._globalFilterBindGroup = new n.BindGroup({});
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
                let n_resolution = source.resolution;
                let n_antialias = source.antialias;
                if (filters.every((e)=>!e.enabled)) {
                    i.skip = true;
                    return;
                }
                let i_bounds = i.bounds;
                this._calculateFilterArea(e, i_bounds);
                this._calculateFilterBounds(i, renderer.renderTarget.rootViewPort, n_antialias, n_resolution, 1);
                if (i.skip) {
                    return;
                }
                let o = this._getPreviousFilterData();
                let u = this._findFilterResolution(n_resolution);
                let h = 0;
                let d = 0;
                if (o) {
                    h = o.bounds.minX;
                    d = o.bounds.minY;
                }
                this._calculateGlobalFrame(i, h, d, u, source.width, source.height);
                this._setupFilterTextures(i, i_bounds, renderer, o);
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
                r.outputRenderSurface = o.TexturePool.getOptimalTexture(r_bounds.width, r_bounds.height, r.resolution, r.antialias);
                r.backTexture = s.Texture.EMPTY;
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
                        o.TexturePool.returnTexture(t.backTexture);
                    }
                    o.TexturePool.returnTexture(t.inputTexture);
                }
            }
            getBackTexture(e, t, r) {
                let _resolution = e.colorTexture.source._resolution;
                let n = o.TexturePool.getOptimalTexture(t.width, t.height, _resolution, false);
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
                this.renderer.renderTarget.copyToTexture(e, n, {
                    x: t_minX,
                    y: t_minY
                }, {
                    width,
                    height
                }, {
                    x: 0,
                    y: 0
                });
                return n;
            }
            applyFilter(e, t, r, i) {
                let renderer = this.renderer;
                let _activeFilterData = this._activeFilterData;
                let l = _activeFilterData.outputRenderSurface === r;
                let _resolution = renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;
                let o = this._findFilterResolution(_resolution);
                let u = 0;
                let h = 0;
                if (l) {
                    let e = this._findPreviousFilterOffset();
                    u = e.x;
                    h = e.y;
                }
                this._updateFilterUniforms(t, r, _activeFilterData, u, h, o, l, i);
                let d = e.enabled ? e : this._getPassthroughFilter();
                this._setupBindGroupsAndRender(d, t, renderer);
            }
            calculateSpriteMatrix(e, t) {
                let _activeFilterData = this._activeFilterData;
                let n = e.set(_activeFilterData.inputTexture._source.width, 0, 0, _activeFilterData.inputTexture._source.height, _activeFilterData.bounds.minX, _activeFilterData.bounds.minY);
                let a = t.worldTransform.copyTo(i.Matrix.shared);
                let l = t.renderGroup || t.parentRenderGroup;
                if (l && l.cacheToLocalTransform) {
                    a.prepend(l.cacheToLocalTransform);
                }
                a.invert();
                n.prepend(a);
                n.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height);
                n.translate(t.anchor.x, t.anchor.y);
                return n;
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
                e.backTexture = s.Texture.EMPTY;
                e.inputTexture = o.TexturePool.getOptimalTexture(offset.width, offset.height, e.resolution, e.antialias);
                if (e.blendRequired) {
                    r.renderTarget.finishRenderPass();
                    let n = r.renderTarget.getRenderTarget(e.outputRenderSurface);
                    e.backTexture = this.getBackTexture(n, offset, i?.bounds);
                }
                r.renderTarget.bind(e.inputTexture, true);
                r.globalUniforms.push({
                    offset
                });
            }
            _calculateGlobalFrame(e, t, r, i, n, a) {
                let e_globalFrame = e.globalFrame;
                e_globalFrame.x = t * i;
                e_globalFrame.y = r * i;
                e_globalFrame.width = n * i;
                e_globalFrame.height = a * i;
            }
            _updateFilterUniforms(e, t, r, i, n, a, l, o) {
                let uniforms = this._filterGlobalUniforms.uniforms;
                let u_uOutputFrame = uniforms.uOutputFrame;
                let u_uInputSize = uniforms.uInputSize;
                let u_uInputPixel = uniforms.uInputPixel;
                let u_uInputClamp = uniforms.uInputClamp;
                let u_uGlobalFrame = uniforms.uGlobalFrame;
                let u_uOutputTexture = uniforms.uOutputTexture;
                if (l) {
                    u_uOutputFrame[0] = r.bounds.minX - i;
                    u_uOutputFrame[1] = r.bounds.minY - n;
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
                u_uGlobalFrame[0] = i * a;
                u_uGlobalFrame[1] = n * a;
                u_uGlobalFrame[2] = colorTexture.source.width * a;
                u_uGlobalFrame[3] = colorTexture.source.height * a;
                if (t instanceof s.Texture) {
                    t.source.resource = null;
                }
                let m = this.renderer.renderTarget.getRenderTarget(t);
                this.renderer.renderTarget.bind(t, !!o);
                if (t instanceof s.Texture) {
                    u_uOutputTexture[0] = t.frame.width;
                    u_uOutputTexture[1] = t.frame.height;
                } else {
                    u_uOutputTexture[0] = m.width;
                    u_uOutputTexture[1] = m.height;
                }
                u_uOutputTexture[2] = m.isRoot ? -1 : 1;
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
                    d.getGlobalRenderableBounds(e.renderables, t);
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
                    let s = o.TexturePool.getOptimalTexture(e_bounds.width, e_bounds.height, r.source._resolution, false);
                    let u = s;
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
                    o.TexturePool.returnTexture(s);
                }
            }
            _calculateFilterBounds(e, t, r, i, n) {
                let renderer = this.renderer;
                let e_bounds = e.bounds;
                let e_filters = e.filters;
                let o = Infinity;
                let u = 0;
                let h = true;
                let d = false;
                let p = false;
                let f = true;
                let g = -1;
                let x = -1;
                for(let e = 0; e < e_filters.length; e++){
                    let filter = e_filters[e];
                    if (filter.enabled) {
                        if (-1 === g) {
                            g = e;
                        }
                        x = e;
                        o = Math.min(o, filter.resolution === "inherit" ? i : filter.resolution);
                        u += filter.padding;
                        if (filter.antialias === "off") {
                            h = false;
                        } else if (filter.antialias === "inherit" && h) {
                            h = r;
                        }
                        if (!filter.clipToViewport) {
                            f = false;
                        }
                        if (!(filter.compatibleRenderers & renderer.type)) {
                            p = false;
                            break;
                        }
                        if (filter.blendRequired && !(renderer.backBuffer?.useBackBuffer ?? true)) {
                            c.warn("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.");
                            p = false;
                            break;
                        }
                        p = true;
                        if (!d) {
                            d = filter.blendRequired;
                        }
                    }
                }
                if (!p || (f && e_bounds.fitBounds(0, t.width / i, 0, t.height / i), e_bounds.scale(o).ceil().scale(1 / o).pad((0 | u) * n), !e_bounds.isPositive)) {
                    e.skip = true;
                    return;
                }
                e.antialias = h;
                e.resolution = o;
                e.blendRequired = d;
                e.firstEnabledIndex = g;
                e.lastEnabledIndex = x;
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
                    e = this._filterStack[this._filterStackIndex] = new f;
                }
                this._filterStackIndex++;
                return e;
            }
        }
        g.extension = {
            type: [
                t.ExtensionType.WebGLSystem,
                t.ExtensionType.WebGPUSystem
            ],
            name: "filter"
        };
        e.s([
            "FilterSystem",
            0,
            g
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
        var n = e.i(738599);
        var a = e.i(664683);
        var l = e.i(906994);
        class s extends i.Filter {
            constructor(){
                super({
                    gpuProgram: r.GpuProgram.from({
                        vertex: {
                            source: l.default,
                            entryPoint: "mainVertex"
                        },
                        fragment: {
                            source: l.default,
                            entryPoint: "mainFragment"
                        },
                        name: "passthrough-filter"
                    }),
                    glProgram: t.GlProgram.from({
                        vertex: n.default,
                        fragment: a.default,
                        name: "passthrough-filter"
                    })
                });
            }
        }
        e.s([
            "PassthroughFilter",
            0,
            s
        ]);
    },
    330570,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(50190);
        var i = e.i(873604);
        var n = e.i(197380);
        t.extensions.add(n.FilterSystem, r.CanvasFilterSystem);
        t.extensions.add(i.FilterPipe);
        e.s([]);
    },
    449752,
    207841,
    (e)=>{
        "use strict";
        let t;
        var r = e.i(222735);
        var i = e.i(787653);
        var n = e.i(164811);
        function a(e) {
            let t = i.DOMAdapter.get().createCanvas(6, 1);
            let r = t.getContext("2d");
            r.fillStyle = e;
            r.fillRect(0, 0, 6, 1);
            return t;
        }
        function l() {
            if (t !== undefined) {
                return t;
            }
            try {
                let e = a("#ff00ff");
                let r = a("#ffff00");
                let n = i.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
                n.globalCompositeOperation = "multiply";
                n.drawImage(e, 0, 0);
                n.drawImage(r, 2, 0);
                let l = n.getImageData(2, 0, 1, 1);
                if (l) {
                    let e = l.data;
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
            l
        ], 207841);
        let s = {
            canvas: null,
            convertTintToImage: false,
            cacheStepsPerColorChannel: 8,
            canUseMultiply: l(),
            tintMethod: null,
            _canvasSourceCache: new WeakMap,
            _unpremultipliedCache: new WeakMap,
            getCanvasSource: (e)=>{
                let e_source = e.source;
                let r = e_source?.resource;
                if (!r) {
                    return null;
                }
                let n = e_source.alphaMode === "premultiplied-alpha";
                let a = e_source.resourceWidth ?? e_source.pixelWidth;
                let l = e_source.resourceHeight ?? e_source.pixelHeight;
                let o = a !== e_source.pixelWidth || l !== e_source.pixelHeight;
                if (n) {
                    if ((r instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && r instanceof OffscreenCanvas) && !o) {
                        return r;
                    }
                    let e = s._unpremultipliedCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                }
                if (r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Uint32Array || r instanceof Int32Array || r instanceof Float32Array || r instanceof ArrayBuffer) {
                    let e = s._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let n = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let a = n.getContext("2d");
                    let l = a.createImageData(e_source.pixelWidth, e_source.pixelHeight);
                    let o = l.data;
                    let u = r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
                    if (e_source.format === "bgra8unorm") {
                        for(let e = 0; e < o.length && e + 3 < u.length; e += 4){
                            o[e] = u[e + 2];
                            o[e + 1] = u[e + 1];
                            o[e + 2] = u[e];
                            o[e + 3] = u[e + 3];
                        }
                    } else {
                        o.set(u.subarray(0, o.length));
                    }
                    a.putImageData(l, 0, 0);
                    s._canvasSourceCache.set(e_source, {
                        canvas: n,
                        resourceId: e_source._resourceId
                    });
                    return n;
                }
                if (n) {
                    let e = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = e.getContext("2d", {
                        willReadFrequently: true
                    });
                    e.width = e_source.pixelWidth;
                    e.height = e_source.pixelHeight;
                    n.drawImage(r, 0, 0);
                    let a = n.getImageData(0, 0, e.width, e.height);
                    let l = a.data;
                    for(let e = 0; e < l.length; e += 4){
                        let t = l[e + 3];
                        if (t > 0) {
                            let r = 255 / t;
                            l[e] = Math.min(255, l[e] * r + 0.5);
                            l[e + 1] = Math.min(255, l[e + 1] * r + 0.5);
                            l[e + 2] = Math.min(255, l[e + 2] * r + 0.5);
                        }
                    }
                    n.putImageData(a, 0, 0);
                    s._unpremultipliedCache.set(e_source, {
                        canvas: e,
                        resourceId: e_source._resourceId
                    });
                    return e;
                }
                if (o) {
                    let e = s._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let n = i.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let a = n.getContext("2d");
                    n.width = e_source.pixelWidth;
                    n.height = e_source.pixelHeight;
                    a.drawImage(r, 0, 0);
                    s._canvasSourceCache.set(e_source, {
                        canvas: n,
                        resourceId: e_source._resourceId
                    });
                    return n;
                }
                return r;
            },
            getTintedCanvas: (e, t)=>{
                let e_texture = e.texture;
                let a = r.Color.shared.setValue(t).toHex();
                let l = e_texture.tintCache || (e_texture.tintCache = {});
                let o = l[a];
                let _resourceId = e_texture.source._resourceId;
                if (o?.tintId === _resourceId) {
                    return o;
                }
                let h = o && "getContext" in o ? o : i.DOMAdapter.get().createCanvas();
                s.tintMethod(e_texture, t, h);
                h.tintId = _resourceId;
                if (s.convertTintToImage && h.toDataURL !== undefined) {
                    let e = i.DOMAdapter.get().createImage();
                    e.src = h.toDataURL();
                    e.tintId = _resourceId;
                    l[a] = e;
                } else {
                    l[a] = h;
                }
                return l[a];
            },
            getTintedPattern: (e, t)=>{
                let n = r.Color.shared.setValue(t).toHex();
                let a = e.patternCache || (e.patternCache = {});
                let _resourceId = e.source._resourceId;
                let o = a[n];
                if (!(o?.tintId === _resourceId)) {
                    if (!s.canvas) {
                        s.canvas = i.DOMAdapter.get().createCanvas();
                    }
                    s.tintMethod(e, t, s.canvas);
                    o = s.canvas.getContext("2d").createPattern(s.canvas, "repeat");
                    o.tintId = _resourceId;
                    a[n] = o;
                }
                return o;
            },
            applyPatternTransform: (e, t, r = true)=>{
                if (!t || !e.setTransform) {
                    return;
                }
                let globalThis_DOMMatrix = globalThis.DOMMatrix;
                if (!globalThis_DOMMatrix) {
                    return;
                }
                let n = new globalThis_DOMMatrix([
                    t.a,
                    t.b,
                    t.c,
                    t.d,
                    t.tx,
                    t.ty
                ]);
                e.setTransform(r ? n.inverse() : n);
            },
            tintWithMultiply: (e, t, i)=>{
                let a = i.getContext("2d");
                let l = e.frame.clone();
                let o = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                l.x *= o;
                l.y *= o;
                l.width *= o;
                l.height *= o;
                let h = n.groupD8.isVertical(e_rotate);
                let d = h ? l.height : l.width;
                let c = h ? l.width : l.height;
                i.width = Math.ceil(d);
                i.height = Math.ceil(c);
                a.save();
                a.fillStyle = r.Color.shared.setValue(t).toHex();
                a.fillRect(0, 0, d, c);
                a.globalCompositeOperation = "multiply";
                let p = s.getCanvasSource(e);
                if (p) {
                    if (e_rotate) {
                        s._applyInverseRotation(a, e_rotate, l.width, l.height);
                    }
                    a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height);
                    a.globalCompositeOperation = "destination-atop";
                    a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height);
                }
                a.restore();
            },
            tintWithOverlay: (e, t, i)=>{
                let a = i.getContext("2d");
                let l = e.frame.clone();
                let o = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                l.x *= o;
                l.y *= o;
                l.width *= o;
                l.height *= o;
                let h = n.groupD8.isVertical(e_rotate);
                let d = h ? l.height : l.width;
                let c = h ? l.width : l.height;
                i.width = Math.ceil(d);
                i.height = Math.ceil(c);
                a.save();
                a.globalCompositeOperation = "copy";
                a.fillStyle = r.Color.shared.setValue(t).toHex();
                a.fillRect(0, 0, d, c);
                a.globalCompositeOperation = "destination-atop";
                let p = s.getCanvasSource(e);
                if (p) {
                    if (e_rotate) {
                        s._applyInverseRotation(a, e_rotate, l.width, l.height);
                    }
                    a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height);
                }
                a.restore();
            },
            tintWithPerPixel: (e, t, r)=>{
                let i = r.getContext("2d");
                let a = e.frame.clone();
                let l = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                a.x *= l;
                a.y *= l;
                a.width *= l;
                a.height *= l;
                let u = n.groupD8.isVertical(e_rotate);
                let h = u ? a.height : a.width;
                let d = u ? a.width : a.height;
                r.width = Math.ceil(h);
                r.height = Math.ceil(d);
                i.save();
                i.globalCompositeOperation = "copy";
                let c = s.getCanvasSource(e);
                if (!c) {
                    return void i.restore();
                }
                if (e_rotate) {
                    s._applyInverseRotation(i, e_rotate, a.width, a.height);
                }
                i.drawImage(c, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height);
                i.restore();
                let p = t >> 16 & 255;
                let f = t >> 8 & 255;
                let g = 255 & t;
                let x = i.getImageData(0, 0, h, d);
                let x_data = x.data;
                for(let e = 0; e < x_data.length; e += 4){
                    x_data[e] = x_data[e] * p / 255;
                    x_data[e + 1] = x_data[e + 1] * f / 255;
                    x_data[e + 2] = x_data[e + 2] * g / 255;
                }
                i.putImageData(x, 0, 0);
            },
            _applyInverseRotation: (e, t, r, i)=>{
                let a = n.groupD8.inv(t);
                let l = n.groupD8.uX(a);
                let s = n.groupD8.uY(a);
                let o = n.groupD8.vX(a);
                let u = n.groupD8.vY(a);
                let h = -Math.min(0, l * r, o * i, l * r + o * i);
                let d = -Math.min(0, s * r, u * i, s * r + u * i);
                e.transform(l, s, o, u, h, d);
            }
        };
        s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel;
        e.s([
            "canvasUtils",
            0,
            s
        ], 449752);
    },
    963345,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        var r = e.i(356566);
        var i = e.i(609932);
        class n {
            constructor(e){
                this._canvasPool = Object.create(null);
                this.canvasOptions = e || {};
                this.enableFullScreen = false;
            }
            _createCanvasAndContext(e, r) {
                let i = t.DOMAdapter.get().createCanvas();
                i.width = e;
                i.height = r;
                let context = i.getContext("2d");
                return {
                    canvas: i,
                    context
                };
            }
            getOptimalCanvasAndContext(e, t, i = 1) {
                e = Math.ceil(e * i - 0.000001);
                t = Math.ceil(t * i - 0.000001);
                e = r.nextPow2(e);
                t = r.nextPow2(t);
                let n = (e << 17) + (t << 1);
                if (!this._canvasPool[n]) {
                    this._canvasPool[n] = [];
                }
                let a = this._canvasPool[n].pop();
                if (!a) {
                    a = this._createCanvasAndContext(e, t);
                }
                return a;
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
        let a = new n;
        i.GlobalResourceRegistry.register(a);
        e.s([
            "CanvasPool",
            0,
            a,
            "CanvasPoolClass",
            0,
            n
        ]);
    }
]);
