;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "4a559758-fa91-ba0a-89b3-24b8c9e6c030";
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
        var i = e.i(688761);
        let n = class e extends r.Shader {
            constructor(t){
                super(t = {
                    ...e.defaultOptions,
                    ...t
                });
                this.enabled = true;
                this._state = i.State.for2d();
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
    275957,
    542553,
    198418,
    110323,
    149566,
    735741,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var a = e.i(164811);
        var r = e.i(389474);
        var i = e.i(997125);
        var n = e.i(414205);
        var s = e.i(449752);
        let o = class e {
            static _getPatternRepeat(e, t) {
                let a = e && e !== "clamp-to-edge";
                let r = t && t !== "clamp-to-edge";
                if (a && r) {
                    return "repeat";
                }
                if (a) {
                    return "repeat-x";
                }
                if (r) {
                    return "repeat-y";
                }
                return "no-repeat";
            }
            start(e, t, a) {}
            execute(t, r) {
                let r_elements = r.elements;
                if (!r_elements || !r_elements.length) {
                    return;
                }
                let t_renderer = t.renderer;
                let l_canvasContext = t_renderer.canvasContext;
                let h_activeContext = l_canvasContext.activeContext;
                for(let t = 0; t < r_elements.length; t++){
                    let element = r_elements[t];
                    if (!element.packAsQuad) {
                        continue;
                    }
                    let u = element.texture;
                    let p = u ? s.canvasUtils.getCanvasSource(u) : null;
                    if (!p) {
                        continue;
                    }
                    let g = u.source.style;
                    let f = l_canvasContext.smoothProperty;
                    let x = g.scaleMode !== "nearest";
                    if (h_activeContext[f] !== x) {
                        h_activeContext[f] = x;
                    }
                    l_canvasContext.setBlendMode(r.blendMode);
                    let m = t_renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                    let v = element.color;
                    let y = (m >>> 24 & 255) / 255 * ((v >>> 24 & 255) / 255) * (t_renderer.filter?.alphaMultiplier ?? 1);
                    if (y <= 0) {
                        continue;
                    }
                    h_activeContext.globalAlpha = y;
                    let C = 16777215 & m;
                    let T = 16777215 & v;
                    let M = i.bgr2rgb(n.multiplyHexColors(T, C));
                    let b = u.frame;
                    let _ = g.addressModeU ?? g.addressMode;
                    let w = g.addressModeV ?? g.addressMode;
                    let P = e._getPatternRepeat(_, w);
                    let k = u.source._resolution ?? u.source.resolution ?? 1;
                    let I = element.renderable?.renderGroup?.isCachedAsTexture;
                    let S = b.x * k;
                    let R = b.y * k;
                    let A = b.width * k;
                    let D = b.height * k;
                    let B = element.bounds;
                    let U = t_renderer.renderTarget.renderTarget.isRoot;
                    let H = B.minX;
                    let O = B.minY;
                    let W = B.maxX - B.minX;
                    let E = B.maxY - B.minY;
                    let G = u.rotate;
                    let F = u.uvs;
                    let q = Math.min(F.x0, F.x1, F.x2, F.x3, F.y0, F.y1, F.y2, F.y3);
                    let L = Math.max(F.x0, F.x1, F.x2, F.x3, F.y0, F.y1, F.y2, F.y3);
                    let V = P !== "no-repeat" && (q < 0 || L > 1);
                    let N = !V && (M !== 16777215 || G);
                    let Y = G && !N;
                    if (Y) {
                        e._tempPatternMatrix.copyFrom(element.transform);
                        a.groupD8.matrixAppendRotationInv(e._tempPatternMatrix, G, H, O, W, E);
                        l_canvasContext.setContextTransform(e._tempPatternMatrix, element.roundPixels === 1, undefined, I && U);
                    } else {
                        l_canvasContext.setContextTransform(element.transform, element.roundPixels === 1, undefined, I && U);
                    }
                    let j = Y ? 0 : H;
                    let X = Y ? 0 : O;
                    if (!(Y || element.roundPixels !== 1)) {
                        j |= 0;
                        X |= 0;
                    }
                    if (V) {
                        let t = p;
                        let a = M !== 16777215 && !G;
                        let r = b.width <= u.source.width && b.height <= u.source.height;
                        if (a && r) {
                            t = s.canvasUtils.getTintedCanvas({
                                texture: u
                            }, M);
                        }
                        let i = h_activeContext.createPattern(t, P);
                        if (!i || W === 0 || E === 0) {
                            continue;
                        }
                        let n = 1 / W;
                        let o = 1 / E;
                        let l = (F.x1 - F.x0) * n;
                        let h = (F.y1 - F.y0) * n;
                        let c = (F.x3 - F.x0) * o;
                        let g = (F.y3 - F.y0) * o;
                        let f = F.x0 - l * j - c * X;
                        let x = F.y0 - h * j - g * X;
                        let m = u.source.pixelWidth;
                        let v = u.source.pixelHeight;
                        e._tempPatternMatrix.set(l * m, h * v, c * m, g * v, f * m, x * v);
                        s.canvasUtils.applyPatternTransform(i, e._tempPatternMatrix);
                        h_activeContext.fillStyle = i;
                        h_activeContext.fillRect(j, X, W, E);
                    } else {
                        let e = M !== 16777215 || G ? s.canvasUtils.getTintedCanvas({
                            texture: u
                        }, M) : p;
                        let t = e !== p;
                        h_activeContext.drawImage(e, t ? 0 : S, t ? 0 : R, t ? e.width : A, t ? e.height : D, j, X, W, E);
                    }
                }
            }
        };
        o._tempPatternMatrix = new r.Matrix;
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
            push(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                let _colorStack = this._colorStack;
                _colorStack[this._colorStackIndex] = _colorStack[this._colorStackIndex - 1] & e.mask;
                let i = this._colorStack[this._colorStackIndex];
                if (i !== this._currentColor) {
                    this._currentColor = i;
                    a.add({
                        renderPipeId: "colorMask",
                        colorMask: i,
                        canBundle: false
                    });
                }
                this._colorStackIndex++;
            }
            pop(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                let _colorStack = this._colorStack;
                this._colorStackIndex--;
                let i = _colorStack[this._colorStackIndex - 1];
                if (i !== this._currentColor) {
                    this._currentColor = i;
                    a.add({
                        renderPipeId: "colorMask",
                        colorMask: i,
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
        var h = e.i(625533);
        var d = e.i(86958);
        var c = e.i(967030);
        var u = e.i(562140);
        function p(e, shape) {
            switch(shape.type){
                case "rectangle":
                    e.rect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "roundedRectangle":
                    let a;
                    let r;
                    let i;
                    let n;
                    let s;
                    a = shape.x;
                    r = shape.y;
                    i = shape.width;
                    n = shape.height;
                    s = Math.max(0, Math.min(s = shape.radius, Math.min(i, n) / 2));
                    e.moveTo(a + s, r);
                    e.lineTo(a + i - s, r);
                    e.quadraticCurveTo(a + i, r, a + i, r + s);
                    e.lineTo(a + i, r + n - s);
                    e.quadraticCurveTo(a + i, r + n, a + i - s, r + n);
                    e.lineTo(a + s, r + n);
                    e.quadraticCurveTo(a, r + n, a, r + n - s);
                    e.lineTo(a, r + s);
                    e.quadraticCurveTo(a, r, a + s, r);
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
                        let a = shape.points;
                        if (!a?.length) {
                            break;
                        }
                        e.moveTo(a[0], a[1]);
                        for(let t = 2; t < a.length; t += 2){
                            e.lineTo(a[t], a[t + 1]);
                        }
                        if (shape.closePath) {
                            e.closePath();
                        }
                    }
            }
        }
        class g {
            constructor(e){
                this._warnedMaskTypes = new Set;
                this._canvasMaskStack = [];
                this._renderer = e;
            }
            push(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                a.add({
                    renderPipeId: "stencilMask",
                    action: "pushMaskBegin",
                    mask: e,
                    inverse: t._maskOptions.inverse,
                    canBundle: false
                });
            }
            pop(e, t, a) {
                this._renderer.renderPipes.batch.break(a);
                a.add({
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
                let r = t_canvasContext?.activeContext;
                if (!r) {
                    return;
                }
                if (e.action === "popMaskEnd") {
                    if (this._canvasMaskStack.pop()) {
                        r.restore();
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
                r.save();
                t_canvasContext.setContextTransform(mask.groupTransform, (_renderer._roundPixels | mask._roundPixels) == 1);
                r.beginPath();
                let s = false;
                let o = false;
                for(let e = 0; e < n.length; e++){
                    let t = n[e];
                    let a = t.action;
                    if (a !== "fill" && a !== "stroke") {
                        continue;
                    }
                    let i = t.data;
                    let l = i?.path?.shapePath;
                    if (!l?.shapePrimitives?.length) {
                        continue;
                    }
                    let d = a === "stroke";
                    let u = l.shapePrimitives;
                    for(let e = 0; e < u.length; e++){
                        let t = u[e];
                        if (!t?.shape) {
                            continue;
                        }
                        let a = t.transform;
                        let n = a && !a.isIdentity();
                        if (n) {
                            r.save();
                            r.transform(a.a, a.b, a.c, a.d, a.tx, a.ty);
                        }
                        if (d && i.style) {
                            s = ((e, t, a)=>{
                                let r = [];
                                let i = [];
                                let n = [];
                                let s = c.shapeBuilders[t.type];
                                if (!s?.build(t, r)) {
                                    return false;
                                }
                                let o = t.closePath ?? true;
                                h.buildLine(r, a, false, o, i, n);
                                for(let t = 0; t < n.length; t += 3){
                                    let a = 2 * n[t];
                                    let r = 2 * n[t + 1];
                                    let s = 2 * n[t + 2];
                                    e.moveTo(i[a], i[a + 1]);
                                    e.lineTo(i[r], i[r + 1]);
                                    e.lineTo(i[s], i[s + 1]);
                                    e.closePath();
                                }
                                return true;
                            })(r, t.shape, i.style) || s;
                        } else {
                            p(r, t.shape);
                            o = ((e, t)=>{
                                if (!t?.length) {
                                    return false;
                                }
                                for(let a = 0; a < t.length; a++){
                                    let r = t[a];
                                    if (!r?.shape) {
                                        continue;
                                    }
                                    let i = r.transform;
                                    let n = i && !i.isIdentity();
                                    if (n) {
                                        e.save();
                                        e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty);
                                    }
                                    p(e, r.shape);
                                    if (n) {
                                        e.restore();
                                    }
                                }
                                return true;
                            })(r, t.holes) || o;
                            s = true;
                        }
                        if (n) {
                            r.restore();
                        }
                    }
                }
                if (!s) {
                    r.restore();
                    this._canvasMaskStack.push(false);
                    return;
                }
                if (o) {
                    r.clip("evenodd");
                } else {
                    r.clip();
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
                    u.warn(t);
                }
            }
        }
        g.extension = {
            type: [
                t.ExtensionType.CanvasPipes
            ],
            name: "stencilMask"
        };
        e.s([
            "CanvasStencilMaskPipe",
            0,
            g
        ], 198418);
        var f = e.i(222735);
        var x = e.i(207841);
        let m = "source-over";
        function v() {
            let e = x.canUseNewCanvasBlendModes();
            let t = Object.create(null);
            t.inherit = m;
            t.none = m;
            t.normal = "source-over";
            t.add = "lighter";
            t.multiply = e ? "multiply" : m;
            t.screen = e ? "screen" : m;
            t.overlay = e ? "overlay" : m;
            t.darken = e ? "darken" : m;
            t.lighten = e ? "lighten" : m;
            t["color-dodge"] = e ? "color-dodge" : m;
            t["color-burn"] = e ? "color-burn" : m;
            t["hard-light"] = e ? "hard-light" : m;
            t["soft-light"] = e ? "soft-light" : m;
            t.difference = e ? "difference" : m;
            t.exclusion = e ? "exclusion" : m;
            t.saturation = e ? "saturation" : m;
            t.color = e ? "color" : m;
            t.luminosity = e ? "luminosity" : m;
            t["linear-burn"] = e ? "color-burn" : m;
            t["linear-dodge"] = e ? "color-dodge" : m;
            t["linear-light"] = e ? "hard-light" : m;
            t["pin-light"] = e ? "hard-light" : m;
            t["vivid-light"] = e ? "hard-light" : m;
            t["hard-mix"] = m;
            t.negation = e ? "difference" : m;
            t["normal-npm"] = t.normal;
            t["add-npm"] = t.add;
            t["screen-npm"] = t.screen;
            t.erase = "destination-out";
            t.subtract = m;
            t.divide = m;
            t.min = m;
            t.max = m;
            return t;
        }
        e.s([
            "mapCanvasBlendModesToPixi",
            0,
            v
        ], 110323);
        let y = new r.Matrix;
        class C {
            constructor(e){
                this.activeResolution = 1;
                this.smoothProperty = "imageSmoothingEnabled";
                this.blendModes = v();
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
            setContextTransform(e, t, a, i) {
                let n = i ? r.Matrix.IDENTITY : this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix || r.Matrix.IDENTITY;
                let s = y;
                s.copyFrom(n);
                s.append(e);
                let _projTransform = this._projTransform;
                let activeResolution = this.activeResolution;
                a = a || activeResolution;
                if (_projTransform) {
                    let e = r.Matrix.shared;
                    e.copyFrom(s);
                    e.prepend(_projTransform);
                    s = e;
                }
                if (t) {
                    this.activeContext.setTransform(s.a * a, s.b * a, s.c * a, s.d * a, s.tx * activeResolution | 0, s.ty * activeResolution | 0);
                } else {
                    this.activeContext.setTransform(s.a * a, s.b * a, s.c * a, s.d * a, s.tx * activeResolution, s.ty * activeResolution);
                }
            }
            clear(e, t) {
                let activeContext = this.activeContext;
                let _renderer = this._renderer;
                activeContext.clearRect(0, 0, _renderer.width, _renderer.height);
                if (e) {
                    let i = f.Color.shared.setValue(e);
                    activeContext.globalAlpha = t ?? i.alpha;
                    activeContext.fillStyle = i.toHex();
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
        C.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "canvasContext"
        };
        e.s([
            "CanvasContextSystem",
            0,
            C
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
    638082,
    16354,
    215393,
    84327,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var a = e.i(86245);
        var r = e.i(492884);
        var i = e.i(914316);
        var n = e.i(751559);
        var s = e.i(275957);
        var o = e.i(497256);
        var l = e.i(375564);
        var h = e.i(542553);
        var d = e.i(198418);
        var c = e.i(507938);
        var u = e.i(164868);
        var p = e.i(497544);
        var g = e.i(162450);
        var f = e.i(149566);
        var x = e.i(735741);
        var m = e.i(798299);
        var v = e.i(222735);
        var y = e.i(787653);
        var C = e.i(173156);
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
            startRenderPass(e, t, a, r) {
                let i = this._renderTargetSystem.getGpuRenderTarget(e);
                this._renderer.canvasContext.activeContext = i.context;
                this._renderer.canvasContext.activeResolution = e.resolution;
                if (t) {
                    this.clear(e, t, a, r);
                }
            }
            clear(e, t, a, r) {
                let context = this._renderTargetSystem.getGpuRenderTarget(e).context;
                let n = r || {
                    x: 0,
                    y: 0,
                    width: e.pixelWidth,
                    height: e.pixelHeight
                };
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(n.x, n.y, n.width, n.height);
                if (a) {
                    let e = v.Color.shared.setValue(a);
                    if (e.alpha > 0) {
                        context.globalAlpha = e.alpha;
                        context.fillStyle = e.toHex();
                        context.fillRect(n.x, n.y, n.width, n.height);
                        context.globalAlpha = 1;
                    }
                }
            }
            finishRenderPass() {}
            copyToTexture(e, t, a, r, i) {
                let canvas = this._renderTargetSystem.getGpuRenderTarget(e).canvas;
                let t_source = t.source;
                let { context } = this._ensureCanvas(t_source);
                let l = i?.x ?? 0;
                let h = i?.y ?? 0;
                context.drawImage(canvas, a.x, a.y, r.width, r.height, l, h, r.width, r.height);
                t_source.update();
                return t;
            }
            destroyGpuRenderTarget(e) {}
            _ensureCanvas(e) {
                let e_resource = e.resource;
                if (!(e_resource && C.CanvasSource.test(e_resource))) {
                    e_resource = y.DOMAdapter.get().createCanvas(e.pixelWidth, e.pixelHeight);
                    e.resource = e_resource;
                }
                if (e_resource.width !== e.pixelWidth || e_resource.height !== e.pixelHeight) {
                    e_resource.width = e.pixelWidth;
                    e_resource.height = e.pixelHeight;
                }
                let context = e_resource.getContext("2d");
                return {
                    canvas: e_resource,
                    context
                };
            }
        }
        e.s([
            "CanvasRenderTargetAdaptor",
            0,
            T
        ], 16354);
        class M extends m.RenderTargetSystem {
            constructor(e){
                super(e);
                this.adaptor = new T;
                this.adaptor.init(e, this);
            }
        }
        M.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "renderTarget"
        };
        e.s([
            "CanvasRenderTargetSystem",
            0,
            M
        ], 215393);
        var b = e.i(449752);
        class _ {
            constructor(e){}
            init() {}
            initSource(e) {}
            generateCanvas(e) {
                let t = y.DOMAdapter.get().createCanvas();
                let a = t.getContext("2d");
                let r = b.canvasUtils.getCanvasSource(e);
                if (!r) {
                    return t;
                }
                let e_frame = e.frame;
                let n = e.source._resolution ?? e.source.resolution ?? 1;
                let s = e_frame.x * n;
                let o = e_frame.y * n;
                let l = e_frame.width * n;
                let h = e_frame.height * n;
                t.width = Math.ceil(l);
                t.height = Math.ceil(h);
                a.drawImage(r, s, o, l, h, 0, 0, l, h);
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
        _.extension = {
            type: [
                t.ExtensionType.CanvasSystem
            ],
            name: "texture"
        };
        e.s([
            "CanvasTextureSystem",
            0,
            _
        ], 84327);
        let w = [
            ...p.SharedSystems,
            f.CanvasContextSystem,
            x.CanvasLimitsSystem,
            _,
            M
        ];
        let P = [
            c.BlendModePipe,
            o.BatcherPipe,
            n.SpritePipe,
            r.RenderGroupPipe,
            l.AlphaMaskPipe,
            d.CanvasStencilMaskPipe,
            h.CanvasColorMaskPipe,
            a.CustomRenderPipe
        ];
        let k = [
            s.CanvasBatchAdaptor,
            i.CanvasGraphicsAdaptor
        ];
        let systems = [];
        let renderPipes = [];
        let renderPipeAdaptors = [];
        t.extensions.handleByNamedList(t.ExtensionType.CanvasSystem, systems);
        t.extensions.handleByNamedList(t.ExtensionType.CanvasPipes, renderPipes);
        t.extensions.handleByNamedList(t.ExtensionType.CanvasPipesAdaptor, renderPipeAdaptors);
        t.extensions.add(...w, ...P, ...k);
        class A extends u.AbstractRenderer {
            constructor(){
                super({
                    name: "canvas",
                    type: g.RendererType.CANVAS,
                    systems,
                    renderPipes,
                    renderPipeAdaptors
                });
            }
        }
        e.s([
            "CanvasRenderer",
            0,
            A
        ], 638082);
    },
    449752,
    207841,
    (e)=>{
        "use strict";
        let t;
        var a = e.i(222735);
        var r = e.i(787653);
        var i = e.i(164811);
        function n(e) {
            let t = r.DOMAdapter.get().createCanvas(6, 1);
            let a = t.getContext("2d");
            a.fillStyle = e;
            a.fillRect(0, 0, 6, 1);
            return t;
        }
        function s() {
            if (t !== undefined) {
                return t;
            }
            try {
                let e = n("#ff00ff");
                let a = n("#ffff00");
                let i = r.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
                i.globalCompositeOperation = "multiply";
                i.drawImage(e, 0, 0);
                i.drawImage(a, 2, 0);
                let s = i.getImageData(2, 0, 1, 1);
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
                let a = e_source?.resource;
                if (!a) {
                    return null;
                }
                let i = e_source.alphaMode === "premultiplied-alpha";
                let n = e_source.resourceWidth ?? e_source.pixelWidth;
                let s = e_source.resourceHeight ?? e_source.pixelHeight;
                let l = n !== e_source.pixelWidth || s !== e_source.pixelHeight;
                if (i) {
                    if ((a instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && a instanceof OffscreenCanvas) && !l) {
                        return a;
                    }
                    let e = o._unpremultipliedCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                }
                if (a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || a instanceof Uint16Array || a instanceof Int16Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof ArrayBuffer) {
                    let e = o._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let i = r.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = i.getContext("2d");
                    let s = n.createImageData(e_source.pixelWidth, e_source.pixelHeight);
                    let l = s.data;
                    let h = a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
                    if (e_source.format === "bgra8unorm") {
                        for(let e = 0; e < l.length && e + 3 < h.length; e += 4){
                            l[e] = h[e + 2];
                            l[e + 1] = h[e + 1];
                            l[e + 2] = h[e];
                            l[e + 3] = h[e + 3];
                        }
                    } else {
                        l.set(h.subarray(0, l.length));
                    }
                    n.putImageData(s, 0, 0);
                    o._canvasSourceCache.set(e_source, {
                        canvas: i,
                        resourceId: e_source._resourceId
                    });
                    return i;
                }
                if (i) {
                    let e = r.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let i = e.getContext("2d", {
                        willReadFrequently: true
                    });
                    e.width = e_source.pixelWidth;
                    e.height = e_source.pixelHeight;
                    i.drawImage(a, 0, 0);
                    let n = i.getImageData(0, 0, e.width, e.height);
                    let s = n.data;
                    for(let e = 0; e < s.length; e += 4){
                        let t = s[e + 3];
                        if (t > 0) {
                            let a = 255 / t;
                            s[e] = Math.min(255, s[e] * a + 0.5);
                            s[e + 1] = Math.min(255, s[e + 1] * a + 0.5);
                            s[e + 2] = Math.min(255, s[e + 2] * a + 0.5);
                        }
                    }
                    i.putImageData(n, 0, 0);
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
                    let i = r.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = i.getContext("2d");
                    i.width = e_source.pixelWidth;
                    i.height = e_source.pixelHeight;
                    n.drawImage(a, 0, 0);
                    o._canvasSourceCache.set(e_source, {
                        canvas: i,
                        resourceId: e_source._resourceId
                    });
                    return i;
                }
                return a;
            },
            getTintedCanvas: (e, t)=>{
                let e_texture = e.texture;
                let n = a.Color.shared.setValue(t).toHex();
                let s = e_texture.tintCache || (e_texture.tintCache = {});
                let l = s[n];
                let _resourceId = e_texture.source._resourceId;
                if (l?.tintId === _resourceId) {
                    return l;
                }
                let d = l && "getContext" in l ? l : r.DOMAdapter.get().createCanvas();
                o.tintMethod(e_texture, t, d);
                d.tintId = _resourceId;
                if (o.convertTintToImage && d.toDataURL !== undefined) {
                    let e = r.DOMAdapter.get().createImage();
                    e.src = d.toDataURL();
                    e.tintId = _resourceId;
                    s[n] = e;
                } else {
                    s[n] = d;
                }
                return s[n];
            },
            getTintedPattern: (e, t)=>{
                let i = a.Color.shared.setValue(t).toHex();
                let n = e.patternCache || (e.patternCache = {});
                let _resourceId = e.source._resourceId;
                let l = n[i];
                if (!(l?.tintId === _resourceId)) {
                    if (!o.canvas) {
                        o.canvas = r.DOMAdapter.get().createCanvas();
                    }
                    o.tintMethod(e, t, o.canvas);
                    l = o.canvas.getContext("2d").createPattern(o.canvas, "repeat");
                    l.tintId = _resourceId;
                    n[i] = l;
                }
                return l;
            },
            applyPatternTransform: (e, t, a = true)=>{
                if (!t || !e.setTransform) {
                    return;
                }
                let globalThis_DOMMatrix = globalThis.DOMMatrix;
                if (!globalThis_DOMMatrix) {
                    return;
                }
                let i = new globalThis_DOMMatrix([
                    t.a,
                    t.b,
                    t.c,
                    t.d,
                    t.tx,
                    t.ty
                ]);
                e.setTransform(a ? i.inverse() : i);
            },
            tintWithMultiply: (e, t, r)=>{
                let n = r.getContext("2d");
                let s = e.frame.clone();
                let l = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                s.x *= l;
                s.y *= l;
                s.width *= l;
                s.height *= l;
                let d = i.groupD8.isVertical(e_rotate);
                let c = d ? s.height : s.width;
                let u = d ? s.width : s.height;
                r.width = Math.ceil(c);
                r.height = Math.ceil(u);
                n.save();
                n.fillStyle = a.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, c, u);
                n.globalCompositeOperation = "multiply";
                let p = o.getCanvasSource(e);
                if (p) {
                    if (e_rotate) {
                        o._applyInverseRotation(n, e_rotate, s.width, s.height);
                    }
                    n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                    n.globalCompositeOperation = "destination-atop";
                    n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                }
                n.restore();
            },
            tintWithOverlay: (e, t, r)=>{
                let n = r.getContext("2d");
                let s = e.frame.clone();
                let l = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                s.x *= l;
                s.y *= l;
                s.width *= l;
                s.height *= l;
                let d = i.groupD8.isVertical(e_rotate);
                let c = d ? s.height : s.width;
                let u = d ? s.width : s.height;
                r.width = Math.ceil(c);
                r.height = Math.ceil(u);
                n.save();
                n.globalCompositeOperation = "copy";
                n.fillStyle = a.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, c, u);
                n.globalCompositeOperation = "destination-atop";
                let p = o.getCanvasSource(e);
                if (p) {
                    if (e_rotate) {
                        o._applyInverseRotation(n, e_rotate, s.width, s.height);
                    }
                    n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                }
                n.restore();
            },
            tintWithPerPixel: (e, t, a)=>{
                let r = a.getContext("2d");
                let n = e.frame.clone();
                let s = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                n.x *= s;
                n.y *= s;
                n.width *= s;
                n.height *= s;
                let h = i.groupD8.isVertical(e_rotate);
                let d = h ? n.height : n.width;
                let c = h ? n.width : n.height;
                a.width = Math.ceil(d);
                a.height = Math.ceil(c);
                r.save();
                r.globalCompositeOperation = "copy";
                let u = o.getCanvasSource(e);
                if (!u) {
                    return void r.restore();
                }
                if (e_rotate) {
                    o._applyInverseRotation(r, e_rotate, n.width, n.height);
                }
                r.drawImage(u, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
                r.restore();
                let p = t >> 16 & 255;
                let g = t >> 8 & 255;
                let f = 255 & t;
                let x = r.getImageData(0, 0, d, c);
                let x_data = x.data;
                for(let e = 0; e < x_data.length; e += 4){
                    x_data[e] = x_data[e] * p / 255;
                    x_data[e + 1] = x_data[e + 1] * g / 255;
                    x_data[e + 2] = x_data[e + 2] * f / 255;
                }
                r.putImageData(x, 0, 0);
            },
            _applyInverseRotation: (e, t, a, r)=>{
                let n = i.groupD8.inv(t);
                let s = i.groupD8.uX(n);
                let o = i.groupD8.uY(n);
                let l = i.groupD8.vX(n);
                let h = i.groupD8.vY(n);
                let d = -Math.min(0, s * a, l * r, s * a + l * r);
                let c = -Math.min(0, o * a, h * r, o * a + h * r);
                e.transform(s, o, l, h, d, c);
            }
        };
        o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel;
        e.s([
            "canvasUtils",
            0,
            o
        ], 449752);
    },
    914316,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var a = e.i(164811);
        var r = e.i(389474);
        var i = e.i(449752);
        var n = e.i(337654);
        var s = e.i(997125);
        var o = e.i(414205);
        var l = e.i(625533);
        var h = e.i(419905);
        var d = e.i(336966);
        var c = e.i(967030);
        var u = e.i(12746);
        let p = new r.Matrix;
        let g = new r.Matrix;
        let f = new r.Matrix;
        let x = new r.Matrix;
        function m(e, shape) {
            switch(shape.type){
                case "rectangle":
                    e.rect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "roundedRectangle":
                    let a;
                    let r;
                    let i;
                    let n;
                    let s;
                    a = shape.x;
                    r = shape.y;
                    i = shape.width;
                    n = shape.height;
                    s = Math.max(0, Math.min(s = shape.radius, Math.min(i, n) / 2));
                    e.moveTo(a + s, r);
                    e.lineTo(a + i - s, r);
                    e.quadraticCurveTo(a + i, r, a + i, r + s);
                    e.lineTo(a + i, r + n - s);
                    e.quadraticCurveTo(a + i, r + n, a + i - s, r + n);
                    e.lineTo(a + s, r + n);
                    e.quadraticCurveTo(a, r + n, a, r + n - s);
                    e.lineTo(a, r + s);
                    e.quadraticCurveTo(a, r, a + s, r);
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
                        let a = shape.points;
                        if (!a?.length) {
                            break;
                        }
                        e.moveTo(a[0], a[1]);
                        for(let t = 2; t < a.length; t += 2){
                            e.lineTo(a[t], a[t + 1]);
                        }
                        if (shape.closePath) {
                            e.closePath();
                        }
                    }
            }
        }
        class v {
            constructor(){
                this.shader = null;
            }
            contextChange(e) {}
            execute(e, t) {
                let e_renderer = e.renderer;
                let r_canvasContext = e_renderer.canvasContext;
                let v_activeContext = r_canvasContext.activeContext;
                let t_groupTransform = t.groupTransform;
                let T = e_renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                let t_groupColorAlpha = t.groupColorAlpha;
                let b = (T >>> 24 & 255) / 255 * ((t_groupColorAlpha >>> 24 & 255) / 255) * (e_renderer.filter?.alphaMultiplier ?? 1);
                if (b <= 0) {
                    return;
                }
                let _ = s.bgr2rgb(o.multiplyHexColors(16777215 & t_groupColorAlpha, 16777215 & T));
                let w = e_renderer._roundPixels | t._roundPixels;
                v_activeContext.save();
                r_canvasContext.setContextTransform(t_groupTransform, w === 1);
                r_canvasContext.setBlendMode(t.groupBlendMode);
                let instructions = t.context.instructions;
                for(let e = 0; e < instructions.length; e++){
                    let instruction = instructions[e];
                    if (instruction.action === "texture") {
                        let e = instruction.data;
                        let r = e.image;
                        let n = r ? i.canvasUtils.getCanvasSource(r) : null;
                        if (!n) {
                            continue;
                        }
                        let s = e.alpha * b;
                        if (s <= 0) {
                            continue;
                        }
                        let l = o.multiplyHexColors(e.style, _);
                        v_activeContext.globalAlpha = s;
                        let h = n;
                        if (l !== 16777215) {
                            h = i.canvasUtils.getTintedCanvas({
                                texture: r
                            }, l);
                        }
                        let d = r.frame;
                        let c = r.source._resolution ?? r.source.resolution ?? 1;
                        let u = d.x * c;
                        let g = d.y * c;
                        let f = d.width * c;
                        let x = d.height * c;
                        if (h !== n) {
                            u = 0;
                            g = 0;
                        }
                        let m = e.transform;
                        let T = m && !m.isIdentity();
                        let M = r.rotate;
                        if (T || M) {
                            p.copyFrom(t_groupTransform);
                            if (T) {
                                p.append(m);
                            }
                            if (M) {
                                a.groupD8.matrixAppendRotationInv(p, M, e.dx, e.dy, e.dw, e.dh);
                            }
                            r_canvasContext.setContextTransform(p, w === 1);
                        } else {
                            r_canvasContext.setContextTransform(t_groupTransform, w === 1);
                        }
                        v_activeContext.drawImage(h, u, g, h === n ? f : h.width, h === n ? x : h.height, M ? 0 : e.dx, M ? 0 : e.dy, e.dw, e.dh);
                        if (T || M) {
                            r_canvasContext.setContextTransform(t_groupTransform, w === 1);
                        }
                        continue;
                    }
                    let r = instruction.data;
                    let s = r?.path?.shapePath;
                    if (!s?.shapePrimitives?.length) {
                        continue;
                    }
                    let T = r.style;
                    let M = o.multiplyHexColors(T.color, _);
                    let k = T.alpha * b;
                    if (k <= 0) {
                        continue;
                    }
                    let I = instruction.action === "stroke";
                    v_activeContext.globalAlpha = k;
                    if (I) {
                        v_activeContext.lineWidth = T.width;
                        v_activeContext.lineCap = T.cap;
                        v_activeContext.lineJoin = T.join;
                        v_activeContext.miterLimit = T.miterLimit;
                    }
                    let S = s.shapePrimitives;
                    if (!I && r.hole?.shapePath?.shapePrimitives?.length) {
                        S[S.length - 1].holes = r.hole.shapePath.shapePrimitives;
                    }
                    for(let e = 0; e < S.length; e++){
                        let t = S[e];
                        if (!t?.shape) {
                            continue;
                        }
                        let a = t.transform;
                        let r = a && !a.isIdentity();
                        let s = T.texture && T.texture !== n.Texture.WHITE;
                        let o = T.textureSpace === "global" ? a : null;
                        let p = s ? u.generateTextureMatrix(g, T, t.shape, o) : null;
                        let v = ((e, t, a, r)=>{
                            let e_fill = e.fill;
                            if (e_fill instanceof h.FillGradient) {
                                e_fill.buildGradient();
                                let n = e_fill.texture;
                                if (n) {
                                    let o = i.canvasUtils.getTintedPattern(n, t);
                                    let l = a ? x.copyFrom(a).scale(n.source.pixelWidth, n.source.pixelHeight) : x.copyFrom(e_fill.transform);
                                    if (r && !e.textureSpace) {
                                        l.append(r);
                                    }
                                    i.canvasUtils.applyPatternTransform(o, l);
                                    return o;
                                }
                            }
                            if (e_fill instanceof d.FillPattern) {
                                let e = i.canvasUtils.getTintedPattern(e_fill.texture, t);
                                i.canvasUtils.applyPatternTransform(e, e_fill.transform, false);
                                return e;
                            }
                            let e_texture = e.texture;
                            if (e_texture && e_texture !== n.Texture.WHITE) {
                                if (!e_texture.source.resource) {
                                    return "#808080";
                                }
                                let r = i.canvasUtils.getTintedPattern(e_texture, t);
                                let n = a ? x.copyFrom(a).scale(e_texture.source.pixelWidth, e_texture.source.pixelHeight) : e.matrix;
                                i.canvasUtils.applyPatternTransform(r, n);
                                return r;
                            }
                            return `#${(16777215 & t).toString(16).padStart(6, "0")}`;
                        })(T, M, p, r ? f.copyFrom(t_groupTransform).append(a) : t_groupTransform);
                        if (r) {
                            v_activeContext.save();
                            v_activeContext.transform(a.a, a.b, a.c, a.d, a.tx, a.ty);
                        }
                        if (I) {
                            if (T.alignment === 0.5 || T.pixelLine) {
                                v_activeContext.strokeStyle = v;
                                v_activeContext.beginPath();
                                m(v_activeContext, t.shape);
                                v_activeContext.stroke();
                            } else {
                                let e = [];
                                let a = [];
                                let r = [];
                                let i = c.shapeBuilders[t.shape.type];
                                if (i?.build(t.shape, e)) {
                                    let i = t.shape.closePath ?? true;
                                    l.buildLine(e, T, false, i, a, r);
                                    v_activeContext.fillStyle = v;
                                    v_activeContext.beginPath();
                                    for(let e = 0; e < r.length; e += 3){
                                        let t = 2 * r[e];
                                        let i = 2 * r[e + 1];
                                        let n = 2 * r[e + 2];
                                        v_activeContext.moveTo(a[t], a[t + 1]);
                                        v_activeContext.lineTo(a[i], a[i + 1]);
                                        v_activeContext.lineTo(a[n], a[n + 1]);
                                        v_activeContext.closePath();
                                    }
                                    v_activeContext.fill();
                                } else {
                                    v_activeContext.strokeStyle = v;
                                    v_activeContext.beginPath();
                                    m(v_activeContext, t.shape);
                                    v_activeContext.stroke();
                                }
                            }
                        } else {
                            v_activeContext.fillStyle = v;
                            v_activeContext.beginPath();
                            m(v_activeContext, t.shape);
                            if (((e, t)=>{
                                if (!t?.length) {
                                    return false;
                                }
                                for(let a = 0; a < t.length; a++){
                                    let r = t[a];
                                    if (!r?.shape) {
                                        continue;
                                    }
                                    let i = r.transform;
                                    let n = i && !i.isIdentity();
                                    if (n) {
                                        e.save();
                                        e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty);
                                    }
                                    m(e, r.shape);
                                    if (n) {
                                        e.restore();
                                    }
                                }
                                return true;
                            })(v_activeContext, t.holes)) {
                                v_activeContext.fill("evenodd");
                            } else {
                                v_activeContext.fill();
                            }
                        }
                        if (r) {
                            v_activeContext.restore();
                        }
                    }
                }
                v_activeContext.restore();
            }
            destroy() {
                this.shader = null;
            }
        }
        v.extension = {
            type: [
                t.ExtensionType.CanvasPipesAdaptor
            ],
            name: "graphics"
        };
        e.s([
            "CanvasGraphicsAdaptor",
            0,
            v
        ]);
    }
]);
