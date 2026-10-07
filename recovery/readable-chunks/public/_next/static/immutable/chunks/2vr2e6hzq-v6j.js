;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b3b65499-d8f8-65fd-7150-ff69b5b8871b";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    451779,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/299sj06-x_laa.js",
                "static/immutable/chunks/425qfz-du-7nr.js"
            ].map((e)=>t.l(e))).then(()=>e(265821)));
    },
    492505,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/2w-s9jrm49vzr.js"
            ].map((e)=>t.l(e))).then(()=>e(816414)));
    },
    446707,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/1wr1jfu0wr9nb.js",
                "static/immutable/chunks/0zzhxfvrp0q_a.js",
                "static/immutable/chunks/1ni0iorr83hha.js",
                "static/immutable/chunks/3s909bdp1kzbo.js",
                "static/immutable/chunks/03kbp77gqqpi1.js",
                "static/immutable/chunks/04_6igdjz6qkc.js",
                "static/immutable/chunks/425qfz-du-7nr.js"
            ].map((e)=>t.l(e))).then(()=>e(129782)));
    },
    707906,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/0-hmsrw8do5bn.js",
                "static/immutable/chunks/04_6igdjz6qkc.js"
            ].map((e)=>t.l(e))).then(()=>e(638082)));
    },
    604686,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/0h-f0qe6lp2a3.js",
                "static/immutable/chunks/03kbp77gqqpi1.js",
                "static/immutable/chunks/04_6igdjz6qkc.js"
            ].map((e)=>t.l(e))).then(()=>e(29542)));
    },
    178609,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/0irg_50lcvv3i.js",
                "static/immutable/chunks/04_6igdjz6qkc.js",
                "static/immutable/chunks/1wr1jfu0wr9nb.js"
            ].map((e)=>t.l(e))).then(()=>e(594908)));
    },
    86958,
    329936,
    402936,
    815770,
    (t)=>{
        "use strict";
        var e = t.i(727905);
        var r = t.i(441327);
        var s = t.i(558001);
        var n = t.i(78278);
        var a = t.i(706848);
        var i = t.i(217055);
        class o {
            constructor(){
                this.isBatchable = false;
            }
            reset() {
                this.isBatchable = false;
                this.context = null;
                if (this.graphicsData) {
                    this.graphicsData.destroy();
                    this.graphicsData = null;
                }
            }
            destroy() {
                this.reset();
            }
        }
        class h {
            constructor(){
                this.instructions = new a.InstructionSet;
            }
            init() {
                this.instructions.reset();
            }
            destroy() {
                this.instructions.destroy();
                this.instructions = null;
            }
        }
        let l = class t {
            constructor(t){
                this._renderer = t;
                this._managedContexts = new i.GCManagedHash({
                    renderer: t,
                    type: "resource",
                    name: "graphicsContext"
                });
            }
            init(e) {
                t.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? t.defaultOptions.bezierSmoothness;
            }
            getContextRenderData(t) {
                return this.getGpuContext(t).graphicsData || this._initContextRenderData(t);
            }
            updateGpuContext(t) {
                let t__gpuData = t._gpuData;
                let r = !!t__gpuData[this._renderer.uid];
                let s = t__gpuData[this._renderer.uid] || this._initContext(t);
                if (t.dirty || !r) {
                    if (r) {
                        s.reset();
                    }
                    s.isBatchable = false;
                    t.dirty = false;
                }
                return s;
            }
            getGpuContext(t) {
                return t._gpuData[this._renderer.uid] || this._initContext(t);
            }
            _initContextRenderData(t) {
                let e = new h;
                this.getGpuContext(t).graphicsData = e;
                e.init();
                return e;
            }
            _initContext(t) {
                let e = new o;
                e.context = t;
                t._gpuData[this._renderer.uid] = e;
                this._managedContexts.add(t);
                return e;
            }
            destroy() {
                this._managedContexts.destroy();
                this._renderer = null;
            }
        };
        l.extension = {
            type: [
                n.ExtensionType.CanvasSystem
            ],
            name: "graphicsContext"
        };
        l.defaultOptions = {
            bezierSmoothness: 0.5
        };
        t.s([
            "CanvasGraphicsContextSystem",
            0,
            l
        ], 329936);
        var c = t.i(688761);
        class d {
            constructor(t, e){
                this.state = c.State.for2d();
                this.renderer = t;
                this._adaptor = e;
                this.renderer.runners.contextChange.add(this);
                this._managedGraphics = new i.GCManagedHash({
                    renderer: t,
                    type: "renderable",
                    priority: -1,
                    name: "graphics"
                });
            }
            contextChange() {
                this._adaptor.contextChange(this.renderer);
            }
            validateRenderable(t) {
                return false;
            }
            addRenderable(t, e) {
                this._managedGraphics.add(t);
                this.renderer.renderPipes.batch.break(e);
                e.add(t);
            }
            updateRenderable(t) {}
            execute(t) {
                if (t.isRenderable) {
                    this._adaptor.execute(this, t);
                }
            }
            destroy() {
                this._managedGraphics.destroy();
                this.renderer = null;
                this._adaptor.destroy();
                this._adaptor = null;
            }
        }
        d.extension = {
            type: [
                n.ExtensionType.CanvasPipes
            ],
            name: "graphics"
        };
        t.s([
            "CanvasGraphicsPipe",
            0,
            d
        ], 402936);
        var u = t.i(234118);
        var p = t.i(765480);
        var x = t.i(149034);
        var _ = t.i(882825);
        class m {
            constructor(){
                this.batches = [];
                this.batched = false;
            }
            destroy() {
                this.batches.forEach((t)=>{
                    p.BigPool.return(t);
                });
                this.batches.length = 0;
            }
        }
        class C {
            constructor(t, e){
                this.state = c.State.for2d();
                this.renderer = t;
                this._adaptor = e;
                this.renderer.runners.contextChange.add(this);
                this._managedGraphics = new i.GCManagedHash({
                    renderer: t,
                    type: "renderable",
                    priority: -1,
                    name: "graphics"
                });
            }
            contextChange() {
                this._adaptor.contextChange(this.renderer);
            }
            validateRenderable(t) {
                let t_context = t.context;
                let r = !!t._gpuData;
                let s = this.renderer.graphicsContext.updateGpuContext(t_context);
                return !!s.isBatchable || r !== s.isBatchable;
            }
            addRenderable(t, e) {
                let r = this.renderer.graphicsContext.updateGpuContext(t.context);
                if (t.didViewUpdate) {
                    this._rebuild(t);
                }
                if (r.isBatchable) {
                    this._addToBatcher(t, e);
                } else {
                    this.renderer.renderPipes.batch.break(e);
                    e.add(t);
                }
            }
            updateRenderable(t) {
                let batches = this._getGpuDataForRenderable(t).batches;
                for(let t = 0; t < batches.length; t++){
                    let batch = batches[t];
                    batch._batcher.updateElement(batch);
                }
            }
            execute(t) {
                if (!t.isRenderable) {
                    return;
                }
                let renderer = this.renderer;
                let t_context = t.context;
                if (!renderer.graphicsContext.getGpuContext(t_context).batches.length) {
                    return;
                }
                let s = t_context.customShader || this._adaptor.shader;
                this.state.blendMode = t.groupBlendMode;
                let uniforms = s.resources.localUniforms.uniforms;
                uniforms.uTransformMatrix = t.groupTransform;
                uniforms.uRound = renderer._roundPixels | t._roundPixels;
                x.color32BitToUniform(t.groupColorAlpha, uniforms.uColor, 0);
                this._adaptor.execute(this, t);
            }
            _rebuild(t) {
                let e = this._getGpuDataForRenderable(t);
                let r = this.renderer.graphicsContext.updateGpuContext(t.context);
                e.destroy();
                if (r.isBatchable) {
                    this._updateBatchesForRenderable(t, e);
                }
            }
            _addToBatcher(t, e) {
                let batch = this.renderer.renderPipes.batch;
                let batches = this._getGpuDataForRenderable(t).batches;
                for(let t = 0; t < batches.length; t++){
                    let n = batches[t];
                    batch.addToBatch(n, e);
                }
            }
            _getGpuDataForRenderable(t) {
                return t._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(t);
            }
            _initGpuDataForRenderable(t) {
                let e = new m;
                t._gpuData[this.renderer.uid] = e;
                this._managedGraphics.add(t);
                return e;
            }
            _updateBatchesForRenderable(t, e) {
                let t_context = t.context;
                let s = this.renderer.graphicsContext.getGpuContext(t_context);
                let n = this.renderer._roundPixels | t._roundPixels;
                e.batches = s.batches.map((e)=>{
                    let r = p.BigPool.get(_.BatchableGraphics);
                    e.copyTo(r);
                    r.renderable = t;
                    r.roundPixels = n;
                    return r;
                });
            }
            destroy() {
                this._managedGraphics.destroy();
                this.renderer = null;
                this._adaptor.destroy();
                this._adaptor = null;
                this.state = null;
            }
        }
        C.extension = {
            type: [
                n.ExtensionType.WebGLPipes,
                n.ExtensionType.WebGPUPipes
            ],
            name: "graphics"
        };
        t.s([
            "GraphicsGpuData",
            0,
            m,
            "GraphicsPipe",
            0,
            C
        ], 815770);
        n.extensions.add(d);
        n.extensions.add(C);
        n.extensions.add(l);
        n.extensions.add(u.GraphicsContextSystem);
        class b extends r.ViewContainer {
            constructor(context_1){
                if (context_1 instanceof s.GraphicsContext) {
                    context_1 = {
                        context: context_1
                    };
                }
                const { context, roundPixels, ...rest } = context_1 || {};
                super({
                    label: "Graphics",
                    ...rest
                });
                this.renderPipeId = "graphics";
                if (context) {
                    this.context = context;
                } else {
                    this.context = this._ownedContext = new s.GraphicsContext;
                    this.context.autoGarbageCollect = this.autoGarbageCollect;
                }
                this.didViewUpdate = true;
                this.allowChildren = false;
                this.roundPixels = roundPixels ?? false;
            }
            set context(t) {
                if (t !== this._context) {
                    if (this._context) {
                        this._context.off("update", this.onViewUpdate, this);
                        this._context.off("unload", this.unload, this);
                    }
                    this._context = t;
                    this._context.on("update", this.onViewUpdate, this);
                    this._context.on("unload", this.unload, this);
                    this.onViewUpdate();
                }
            }
            get context() {
                return this._context;
            }
            get bounds() {
                return this._context.bounds;
            }
            updateBounds() {}
            containsPoint(t) {
                return this._context.containsPoint(t);
            }
            destroy(t) {
                if (this._ownedContext && !t) {
                    this._ownedContext.destroy(t);
                } else if (t === true || t?.context === true) {
                    this._context.destroy(t);
                }
                this._ownedContext = null;
                this._context = null;
                super.destroy(t);
            }
            _onTouch(t) {
                this._gcLastUsed = t;
                this._context._gcLastUsed = t;
            }
            _callContextMethod(t, e) {
                this.context[t](...e);
                return this;
            }
            setFillStyle(...t) {
                return this._callContextMethod("setFillStyle", t);
            }
            setStrokeStyle(...t) {
                return this._callContextMethod("setStrokeStyle", t);
            }
            fill(...t) {
                return this._callContextMethod("fill", t);
            }
            stroke(...t) {
                return this._callContextMethod("stroke", t);
            }
            texture(...t) {
                return this._callContextMethod("texture", t);
            }
            beginPath() {
                return this._callContextMethod("beginPath", []);
            }
            cut() {
                return this._callContextMethod("cut", []);
            }
            arc(...t) {
                return this._callContextMethod("arc", t);
            }
            arcTo(...t) {
                return this._callContextMethod("arcTo", t);
            }
            arcToSvg(...t) {
                return this._callContextMethod("arcToSvg", t);
            }
            bezierCurveTo(...t) {
                return this._callContextMethod("bezierCurveTo", t);
            }
            closePath() {
                return this._callContextMethod("closePath", []);
            }
            ellipse(...t) {
                return this._callContextMethod("ellipse", t);
            }
            circle(...t) {
                return this._callContextMethod("circle", t);
            }
            path(...t) {
                return this._callContextMethod("path", t);
            }
            lineTo(...t) {
                return this._callContextMethod("lineTo", t);
            }
            moveTo(...t) {
                return this._callContextMethod("moveTo", t);
            }
            quadraticCurveTo(...t) {
                return this._callContextMethod("quadraticCurveTo", t);
            }
            rect(...t) {
                return this._callContextMethod("rect", t);
            }
            roundRect(...t) {
                return this._callContextMethod("roundRect", t);
            }
            poly(...t) {
                return this._callContextMethod("poly", t);
            }
            regularPoly(...t) {
                return this._callContextMethod("regularPoly", t);
            }
            roundPoly(...t) {
                return this._callContextMethod("roundPoly", t);
            }
            roundShape(...t) {
                return this._callContextMethod("roundShape", t);
            }
            filletRect(...t) {
                return this._callContextMethod("filletRect", t);
            }
            chamferRect(...t) {
                return this._callContextMethod("chamferRect", t);
            }
            star(...t) {
                return this._callContextMethod("star", t);
            }
            svg(...t) {
                return this._callContextMethod("svg", t);
            }
            restore(...t) {
                return this._callContextMethod("restore", t);
            }
            save() {
                return this._callContextMethod("save", []);
            }
            getTransform() {
                return this.context.getTransform();
            }
            resetTransform() {
                return this._callContextMethod("resetTransform", []);
            }
            rotateTransform(...t) {
                return this._callContextMethod("rotate", t);
            }
            scaleTransform(...t) {
                return this._callContextMethod("scale", t);
            }
            setTransform(...t) {
                return this._callContextMethod("setTransform", t);
            }
            transform(...t) {
                return this._callContextMethod("transform", t);
            }
            translateTransform(...t) {
                return this._callContextMethod("translate", t);
            }
            clear() {
                return this._callContextMethod("clear", []);
            }
            get fillStyle() {
                return this._context.fillStyle;
            }
            set fillStyle(t) {
                this._context.fillStyle = t;
            }
            get strokeStyle() {
                return this._context.strokeStyle;
            }
            set strokeStyle(t) {
                this._context.strokeStyle = t;
            }
            clone(t = false) {
                if (t) {
                    return new b(this._context.clone());
                }
                this._ownedContext = null;
                return new b(this._context);
            }
            lineStyle(t, r, s) {
                e.deprecation(e.v8_0_0, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
                let n = {};
                if (t) {
                    n.width = t;
                }
                if (r) {
                    n.color = r;
                }
                if (s) {
                    n.alpha = s;
                }
                this.context.strokeStyle = n;
                return this;
            }
            beginFill(t, r) {
                e.deprecation(e.v8_0_0, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
                let s = {};
                if (t !== undefined) {
                    s.color = t;
                }
                if (r !== undefined) {
                    s.alpha = r;
                }
                this.context.fillStyle = s;
                return this;
            }
            endFill() {
                e.deprecation(e.v8_0_0, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
                this.context.fill();
                let strokeStyle = this.context.strokeStyle;
                if (strokeStyle.width !== s.GraphicsContext.defaultStrokeStyle.width || strokeStyle.color !== s.GraphicsContext.defaultStrokeStyle.color || strokeStyle.alpha !== s.GraphicsContext.defaultStrokeStyle.alpha) {
                    this.context.stroke();
                }
                return this;
            }
            drawCircle(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawCircle has been renamed to Graphics#circle");
                return this._callContextMethod("circle", t);
            }
            drawEllipse(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawEllipse has been renamed to Graphics#ellipse");
                return this._callContextMethod("ellipse", t);
            }
            drawPolygon(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawPolygon has been renamed to Graphics#poly");
                return this._callContextMethod("poly", t);
            }
            drawRect(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawRect has been renamed to Graphics#rect");
                return this._callContextMethod("rect", t);
            }
            drawRoundedRect(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect");
                return this._callContextMethod("roundRect", t);
            }
            drawStar(...t) {
                e.deprecation(e.v8_0_0, "Graphics#drawStar has been renamed to Graphics#star");
                return this._callContextMethod("star", t);
            }
        }
        t.s([
            "Graphics",
            0,
            b
        ], 86958);
    },
    236559,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/144p5exbgh2-z.js",
                "static/immutable/chunks/0zzhxfvrp0q_a.js"
            ].map((e)=>t.l(e))).then(()=>e(610606)));
    }
]);
