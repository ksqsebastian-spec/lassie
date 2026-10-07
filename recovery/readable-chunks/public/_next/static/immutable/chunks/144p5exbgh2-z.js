;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b5adea5e-5901-0f40-d156-86c710306f38";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
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
        function o() {
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
                let o = i.getImageData(2, 0, 1, 1);
                if (o) {
                    let e = o.data;
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
            o
        ], 207841);
        let l = {
            canvas: null,
            convertTintToImage: false,
            cacheStepsPerColorChannel: 8,
            canUseMultiply: o(),
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
                let o = e_source.resourceHeight ?? e_source.pixelHeight;
                let s = n !== e_source.pixelWidth || o !== e_source.pixelHeight;
                if (i) {
                    if ((a instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && a instanceof OffscreenCanvas) && !s) {
                        return a;
                    }
                    let e = l._unpremultipliedCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                }
                if (a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || a instanceof Uint16Array || a instanceof Int16Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof ArrayBuffer) {
                    let e = l._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let i = r.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = i.getContext("2d");
                    let o = n.createImageData(e_source.pixelWidth, e_source.pixelHeight);
                    let s = o.data;
                    let h = a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
                    if (e_source.format === "bgra8unorm") {
                        for(let e = 0; e < s.length && e + 3 < h.length; e += 4){
                            s[e] = h[e + 2];
                            s[e + 1] = h[e + 1];
                            s[e + 2] = h[e];
                            s[e + 3] = h[e + 3];
                        }
                    } else {
                        s.set(h.subarray(0, s.length));
                    }
                    n.putImageData(o, 0, 0);
                    l._canvasSourceCache.set(e_source, {
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
                    let o = n.data;
                    for(let e = 0; e < o.length; e += 4){
                        let t = o[e + 3];
                        if (t > 0) {
                            let a = 255 / t;
                            o[e] = Math.min(255, o[e] * a + 0.5);
                            o[e + 1] = Math.min(255, o[e + 1] * a + 0.5);
                            o[e + 2] = Math.min(255, o[e + 2] * a + 0.5);
                        }
                    }
                    i.putImageData(n, 0, 0);
                    l._unpremultipliedCache.set(e_source, {
                        canvas: e,
                        resourceId: e_source._resourceId
                    });
                    return e;
                }
                if (s) {
                    let e = l._canvasSourceCache.get(e_source);
                    if (e?.resourceId === e_source._resourceId) {
                        return e.canvas;
                    }
                    let i = r.DOMAdapter.get().createCanvas(e_source.pixelWidth, e_source.pixelHeight);
                    let n = i.getContext("2d");
                    i.width = e_source.pixelWidth;
                    i.height = e_source.pixelHeight;
                    n.drawImage(a, 0, 0);
                    l._canvasSourceCache.set(e_source, {
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
                let o = e_texture.tintCache || (e_texture.tintCache = {});
                let s = o[n];
                let _resourceId = e_texture.source._resourceId;
                if (s?.tintId === _resourceId) {
                    return s;
                }
                let c = s && "getContext" in s ? s : r.DOMAdapter.get().createCanvas();
                l.tintMethod(e_texture, t, c);
                c.tintId = _resourceId;
                if (l.convertTintToImage && c.toDataURL !== undefined) {
                    let e = r.DOMAdapter.get().createImage();
                    e.src = c.toDataURL();
                    e.tintId = _resourceId;
                    o[n] = e;
                } else {
                    o[n] = c;
                }
                return o[n];
            },
            getTintedPattern: (e, t)=>{
                let i = a.Color.shared.setValue(t).toHex();
                let n = e.patternCache || (e.patternCache = {});
                let _resourceId = e.source._resourceId;
                let s = n[i];
                if (!(s?.tintId === _resourceId)) {
                    if (!l.canvas) {
                        l.canvas = r.DOMAdapter.get().createCanvas();
                    }
                    l.tintMethod(e, t, l.canvas);
                    s = l.canvas.getContext("2d").createPattern(l.canvas, "repeat");
                    s.tintId = _resourceId;
                    n[i] = s;
                }
                return s;
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
                let o = e.frame.clone();
                let s = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                o.x *= s;
                o.y *= s;
                o.width *= s;
                o.height *= s;
                let c = i.groupD8.isVertical(e_rotate);
                let d = c ? o.height : o.width;
                let u = c ? o.width : o.height;
                r.width = Math.ceil(d);
                r.height = Math.ceil(u);
                n.save();
                n.fillStyle = a.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, d, u);
                n.globalCompositeOperation = "multiply";
                let g = l.getCanvasSource(e);
                if (g) {
                    if (e_rotate) {
                        l._applyInverseRotation(n, e_rotate, o.width, o.height);
                    }
                    n.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
                    n.globalCompositeOperation = "destination-atop";
                    n.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
                }
                n.restore();
            },
            tintWithOverlay: (e, t, r)=>{
                let n = r.getContext("2d");
                let o = e.frame.clone();
                let s = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                o.x *= s;
                o.y *= s;
                o.width *= s;
                o.height *= s;
                let c = i.groupD8.isVertical(e_rotate);
                let d = c ? o.height : o.width;
                let u = c ? o.width : o.height;
                r.width = Math.ceil(d);
                r.height = Math.ceil(u);
                n.save();
                n.globalCompositeOperation = "copy";
                n.fillStyle = a.Color.shared.setValue(t).toHex();
                n.fillRect(0, 0, d, u);
                n.globalCompositeOperation = "destination-atop";
                let g = l.getCanvasSource(e);
                if (g) {
                    if (e_rotate) {
                        l._applyInverseRotation(n, e_rotate, o.width, o.height);
                    }
                    n.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
                }
                n.restore();
            },
            tintWithPerPixel: (e, t, a)=>{
                let r = a.getContext("2d");
                let n = e.frame.clone();
                let o = e.source._resolution ?? e.source.resolution ?? 1;
                let e_rotate = e.rotate;
                n.x *= o;
                n.y *= o;
                n.width *= o;
                n.height *= o;
                let h = i.groupD8.isVertical(e_rotate);
                let c = h ? n.height : n.width;
                let d = h ? n.width : n.height;
                a.width = Math.ceil(c);
                a.height = Math.ceil(d);
                r.save();
                r.globalCompositeOperation = "copy";
                let u = l.getCanvasSource(e);
                if (!u) {
                    return void r.restore();
                }
                if (e_rotate) {
                    l._applyInverseRotation(r, e_rotate, n.width, n.height);
                }
                r.drawImage(u, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
                r.restore();
                let g = t >> 16 & 255;
                let p = t >> 8 & 255;
                let f = 255 & t;
                let v = r.getImageData(0, 0, c, d);
                let v_data = v.data;
                for(let e = 0; e < v_data.length; e += 4){
                    v_data[e] = v_data[e] * g / 255;
                    v_data[e + 1] = v_data[e + 1] * p / 255;
                    v_data[e + 2] = v_data[e + 2] * f / 255;
                }
                r.putImageData(v, 0, 0);
            },
            _applyInverseRotation: (e, t, a, r)=>{
                let n = i.groupD8.inv(t);
                let o = i.groupD8.uX(n);
                let l = i.groupD8.uY(n);
                let s = i.groupD8.vX(n);
                let h = i.groupD8.vY(n);
                let c = -Math.min(0, o * a, s * r, o * a + s * r);
                let d = -Math.min(0, l * a, h * r, l * a + h * r);
                e.transform(o, l, s, h, c, d);
            }
        };
        l.tintMethod = l.canUseMultiply ? l.tintWithMultiply : l.tintWithPerPixel;
        e.s([
            "canvasUtils",
            0,
            l
        ], 449752);
    },
    963345,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        var a = e.i(356566);
        var r = e.i(609932);
        class i {
            constructor(e){
                this._canvasPool = Object.create(null);
                this.canvasOptions = e || {};
                this.enableFullScreen = false;
            }
            _createCanvasAndContext(e, a) {
                let r = t.DOMAdapter.get().createCanvas();
                r.width = e;
                r.height = a;
                let context = r.getContext("2d");
                return {
                    canvas: r,
                    context
                };
            }
            getOptimalCanvasAndContext(e, t, r = 1) {
                e = Math.ceil(e * r - 0.000001);
                t = Math.ceil(t * r - 0.000001);
                e = a.nextPow2(e);
                t = a.nextPow2(t);
                let i = (e << 17) + (t << 1);
                if (!this._canvasPool[i]) {
                    this._canvasPool[i] = [];
                }
                let n = this._canvasPool[i].pop();
                if (!n) {
                    n = this._createCanvasAndContext(e, t);
                }
                return n;
            }
            returnCanvasAndContext(e) {
                let { width, height } = e.canvas;
                let r = (width << 17) + (height << 1);
                e.context.resetTransform();
                e.context.clearRect(0, 0, width, height);
                this._canvasPool[r].push(e);
            }
            clear() {
                this._canvasPool = {};
            }
        }
        let n = new i;
        r.GlobalResourceRegistry.register(n);
        e.s([
            "CanvasPool",
            0,
            n,
            "CanvasPoolClass",
            0,
            i
        ]);
    }
]);
