;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "2efabd7e-aeed-1369-79e3-94e5202bc3d1";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    18545,
    657810,
    695668,
    591777,
    39739,
    564816,
    643211,
    203722,
    449386,
    847357,
    506758,
    725794,
    121658,
    544920,
    553527,
    784710,
    597023,
    501522,
    993,
    954198,
    743829,
    549140,
    288111,
    63416,
    427315,
    840383,
    126853,
    152519,
    10264,
    86716,
    151032,
    918655,
    508160,
    368818,
    212218,
    167993,
    317365,
    557305,
    96207,
    (e)=>{
        "use strict";
        let t;
        let s;
        let r;
        let a;
        let i;
        var n = e.i(78278);
        let o = {
            extension: {
                type: n.ExtensionType.Environment,
                name: "browser",
                priority: -1
            },
            test: ()=>true,
            load: async ()=>{
                await e.A(451779);
            }
        };
        e.s([
            "browserExt",
            0,
            o
        ], 657810);
        let l = {
            extension: {
                type: n.ExtensionType.Environment,
                name: "webworker",
                priority: 0
            },
            test: ()=>typeof self !== "undefined" && self.WorkerGlobalScope !== undefined,
            load: async ()=>{
                await e.A(492505);
            }
        };
        e.s([
            "webworkerExt",
            0,
            l
        ], 695668);
        e.i(123821);
        e.i(958348);
        e.i(379412);
        e.i(263524);
        n.extensions.add(o, l);
        e.s([], 18545);
        var d = e.i(787653);
        var h = e.i(164868);
        function c(e) {
            if (t !== undefined) {
                return t;
            }
            return t = (()=>{
                let t = {
                    stencil: true,
                    failIfMajorPerformanceCaveat: e ?? h.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat
                };
                try {
                    if (!d.DOMAdapter.get().getWebGLRenderingContext()) {
                        return false;
                    }
                    let e = d.DOMAdapter.get().createCanvas().getContext("webgl", t);
                    let s = !!e?.getContextAttributes()?.stencil;
                    if (e) {
                        let t = e.getExtension("WEBGL_lose_context");
                        if (t) {
                            t.loseContext();
                        }
                    }
                    e = null;
                    return s;
                } catch (e) {
                    return false;
                }
            })();
        }
        async function p(e = {}) {
            if (s !== undefined) {
                return s;
            }
            return s = await (async ()=>{
                let gpu = d.DOMAdapter.get().getNavigator().gpu;
                if (!gpu) {
                    return false;
                }
                try {
                    let s = await gpu.requestAdapter(e);
                    await s.requestDevice();
                    return true;
                } catch (e) {
                    return false;
                }
            })();
        }
        e.s([
            "isWebGLSupported",
            0,
            c
        ], 591777);
        e.s([
            "isWebGPUSupported",
            0,
            p
        ], 39739);
        let u = [
            "webgl",
            "webgpu",
            "canvas"
        ];
        async function g(t) {
            let s;
            let r = [];
            if (t.preference) {
                if (Array.isArray(t.preference)) {
                    r = t.preference.slice();
                } else {
                    r.push(t.preference);
                    u.forEach((e)=>{
                        if (e !== t.preference) {
                            r.push(e);
                        }
                    });
                }
            } else {
                r = u.slice();
            }
            let a = {};
            for(let i = 0; i < r.length; i++){
                let n = r[i];
                if (n === "webgpu" && await p()) {
                    let { WebGPURenderer } = await e.A(178609);
                    s = WebGPURenderer;
                    a = {
                        ...t,
                        ...t.webgpu
                    };
                    break;
                }
                if (n === "webgl" && c(t.failIfMajorPerformanceCaveat ?? h.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat)) {
                    let { WebGLRenderer } = await e.A(604686);
                    s = WebGLRenderer;
                    a = {
                        ...t,
                        ...t.webgl
                    };
                    break;
                }
                if (n === "canvas") {
                    let { CanvasRenderer } = await e.A(707906);
                    s = CanvasRenderer;
                    a = {
                        ...t,
                        ...t.canvasOptions
                    };
                    break;
                }
            }
            delete a.webgpu;
            delete a.webgl;
            delete a.canvasOptions;
            if (!s) {
                throw Error("No available renderer for the current environment");
            }
            let i = new s;
            await i.init(a);
            return i;
        }
        e.s([
            "autoDetectRenderer",
            0,
            g
        ], 564816);
        var m = e.i(275576);
        var A = e.i(463337);
        var f = e.i(727905);
        class y {
            static init(e) {
                Object.defineProperty(this, "resizeTo", {
                    configurable: true,
                    set (e) {
                        globalThis.removeEventListener("resize", this.queueResize);
                        this._resizeTo = e;
                        if (e) {
                            globalThis.addEventListener("resize", this.queueResize);
                            this.resize();
                        }
                    },
                    get () {
                        return this._resizeTo;
                    }
                });
                this.queueResize = ()=>{
                    if (this._resizeTo) {
                        this._cancelResize();
                        this._resizeId = requestAnimationFrame(()=>this.resize());
                    }
                };
                this._cancelResize = ()=>{
                    if (this._resizeId) {
                        cancelAnimationFrame(this._resizeId);
                        this._resizeId = null;
                    }
                };
                this.resize = ()=>{
                    let e;
                    let t;
                    if (this._resizeTo) {
                        this._cancelResize();
                        if (this._resizeTo === globalThis.window) {
                            e = globalThis.innerWidth;
                            t = globalThis.innerHeight;
                        } else {
                            let { clientWidth, clientHeight } = this._resizeTo;
                            e = clientWidth;
                            t = clientHeight;
                        }
                        this.renderer.resize(e, t);
                        this.render();
                    }
                };
                this._resizeId = null;
                this._resizeTo = null;
                this.resizeTo = e.resizeTo || null;
            }
            static destroy() {
                globalThis.removeEventListener("resize", this.queueResize);
                this._cancelResize();
                this._cancelResize = null;
                this.queueResize = null;
                this.resizeTo = null;
                this.resize = null;
            }
        }
        y.extension = n.ExtensionType.Application;
        e.s([
            "ResizePlugin",
            0,
            y
        ], 643211);
        var v = e.i(143072);
        var _ = e.i(989031);
        class w {
            static init(e) {
                e = {
                    autoStart: true,
                    sharedTicker: false,
                    ...e
                };
                Object.defineProperty(this, "ticker", {
                    configurable: true,
                    set (e) {
                        if (this._ticker) {
                            this._ticker.remove(this.render, this);
                        }
                        this._ticker = e;
                        if (e) {
                            e.add(this.render, this, v.UPDATE_PRIORITY.LOW);
                        }
                    },
                    get () {
                        return this._ticker;
                    }
                });
                this.stop = ()=>{
                    this._ticker.stop();
                };
                this.start = ()=>{
                    this._ticker.start();
                };
                this._ticker = null;
                this.ticker = e.sharedTicker ? _.Ticker.shared : new _.Ticker;
                if (e.autoStart) {
                    this.start();
                }
            }
            static destroy() {
                if (this._ticker) {
                    let e = this._ticker;
                    this.ticker = null;
                    e.destroy();
                }
            }
        }
        w.extension = n.ExtensionType.Application;
        e.s([
            "TickerPlugin",
            0,
            w
        ], 203722);
        n.extensions.add(y);
        n.extensions.add(w);
        let x = class e {
            constructor(...e){
                this.stage = new m.Container;
                if (e[0] !== undefined) {
                    f.deprecation(f.v8_0_0, "Application constructor options are deprecated, please use Application.init() instead.");
                }
            }
            async init(t) {
                t = {
                    ...t
                };
                if (!this.stage) {
                    this.stage = new m.Container;
                }
                this.renderer = await g(t);
                e._plugins.forEach((e)=>{
                    e.init.call(this, t);
                });
            }
            render() {
                this.renderer.render({
                    container: this.stage
                });
            }
            get canvas() {
                return this.renderer.canvas;
            }
            get view() {
                f.deprecation(f.v8_0_0, "Application.view is deprecated, please use Application.canvas instead.");
                return this.renderer.canvas;
            }
            get screen() {
                return this.renderer.screen;
            }
            get domContainerRoot() {
                return this.renderer.renderPipes.dom?._domElement;
            }
            destroy(t = false, s = false) {
                let r = e._plugins.slice(0);
                r.reverse();
                r.forEach((e)=>{
                    e.destroy.call(this);
                });
                this.stage.destroy(s);
                this.stage = null;
                this.renderer.destroy(t);
                this.renderer = null;
            }
        };
        x._plugins = [];
        n.extensions.handleByList(n.ExtensionType.Application, x._plugins);
        n.extensions.add(A.ApplicationInitHook);
        e.s([
            "Application",
            0,
            x
        ], 449386);
        var b = e.i(35585);
        var T = e.i(402247);
        var E = e.i(5321);
        let P = {
            test: (e)=>typeof e === "string" && e.startsWith("info face="),
            parse (e) {
                let t = e.match(/^[a-z]+\s+.+$/gm);
                let s = {
                    info: [],
                    common: [],
                    page: [],
                    char: [],
                    chars: [],
                    kerning: [],
                    kernings: [],
                    distanceField: []
                };
                for(let e in t){
                    let r = t[e].match(/^[a-z]+/gm)[0];
                    let a = t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
                    let i = {};
                    for(let e in a){
                        let t = a[e].split("=");
                        let s = t[0];
                        let r = t[1].replace(/"/gm, "");
                        let n = parseFloat(r);
                        let o = isNaN(n) ? r : n;
                        i[s] = o;
                    }
                    s[r].push(i);
                }
                let r = {
                    chars: {},
                    pages: [],
                    lineHeight: 0,
                    fontSize: 0,
                    fontFamily: "",
                    distanceField: null,
                    baseLineOffset: 0
                };
                let [a] = s.info;
                let [i] = s.common;
                let [n] = s.distanceField ?? [];
                if (n) {
                    r.distanceField = {
                        range: parseInt(n.distanceRange, 10),
                        type: n.fieldType
                    };
                }
                r.fontSize = parseInt(a.size, 10);
                r.fontFamily = a.face;
                r.lineHeight = parseInt(i.lineHeight, 10);
                let s_page = s.page;
                for(let e = 0; e < s_page.length; e++){
                    r.pages.push({
                        id: parseInt(s_page[e].id, 10) || 0,
                        file: s_page[e].file
                    });
                }
                let l = {};
                r.baseLineOffset = r.lineHeight - parseInt(i.base, 10);
                let s_char = s.char;
                for(let e = 0; e < s_char.length; e++){
                    let t = s_char[e];
                    let s = parseInt(t.id, 10);
                    let a = t.letter ?? t.char ?? String.fromCharCode(s);
                    if (a === "space") {
                        a = " ";
                    }
                    l[s] = a;
                    r.chars[a] = {
                        id: s,
                        page: parseInt(t.page, 10) || 0,
                        x: parseInt(t.x, 10),
                        y: parseInt(t.y, 10),
                        width: parseInt(t.width, 10),
                        height: parseInt(t.height, 10),
                        xOffset: parseInt(t.xoffset, 10),
                        yOffset: parseInt(t.yoffset, 10),
                        xAdvance: parseInt(t.xadvance, 10),
                        kerning: {}
                    };
                }
                let h = s.kerning || [];
                for(let e = 0; e < h.length; e++){
                    let t = parseInt(h[e].first, 10);
                    let s = parseInt(h[e].second, 10);
                    let a = parseInt(h[e].amount, 10);
                    if (r.chars[l[s]]) {
                        r.chars[l[s]].kerning[l[t]] = a;
                    }
                }
                return r;
            }
        };
        e.s([
            "bitmapFontTextParser",
            0,
            P
        ], 847357);
        let k = {
            test: (e)=>typeof e !== "string" && "getElementsByTagName" in e && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null,
            parse (e) {
                let t = {
                    chars: {},
                    pages: [],
                    lineHeight: 0,
                    fontSize: 0,
                    fontFamily: "",
                    distanceField: null,
                    baseLineOffset: 0
                };
                let s = e.getElementsByTagName("info")[0];
                let r = e.getElementsByTagName("common")[0];
                let a = e.getElementsByTagName("distanceField")[0];
                if (a) {
                    t.distanceField = {
                        type: a.getAttribute("fieldType"),
                        range: parseInt(a.getAttribute("distanceRange"), 10)
                    };
                }
                let i = e.getElementsByTagName("page");
                let n = e.getElementsByTagName("char");
                let o = e.getElementsByTagName("kerning");
                t.fontSize = parseInt(s.getAttribute("size"), 10);
                t.fontFamily = s.getAttribute("face");
                t.lineHeight = parseInt(r.getAttribute("lineHeight"), 10);
                for(let e = 0; e < i.length; e++){
                    t.pages.push({
                        id: parseInt(i[e].getAttribute("id"), 10) || 0,
                        file: i[e].getAttribute("file")
                    });
                }
                let l = {};
                t.baseLineOffset = t.lineHeight - parseInt(r.getAttribute("base"), 10);
                for(let e = 0; e < n.length; e++){
                    let s = n[e];
                    let r = parseInt(s.getAttribute("id"), 10);
                    let a = s.getAttribute("letter") ?? s.getAttribute("char") ?? String.fromCharCode(r);
                    if (a === "space") {
                        a = " ";
                    }
                    l[r] = a;
                    t.chars[a] = {
                        id: r,
                        page: parseInt(s.getAttribute("page"), 10) || 0,
                        x: parseInt(s.getAttribute("x"), 10),
                        y: parseInt(s.getAttribute("y"), 10),
                        width: parseInt(s.getAttribute("width"), 10),
                        height: parseInt(s.getAttribute("height"), 10),
                        xOffset: parseInt(s.getAttribute("xoffset"), 10),
                        yOffset: parseInt(s.getAttribute("yoffset"), 10),
                        xAdvance: parseInt(s.getAttribute("xadvance"), 10),
                        kerning: {}
                    };
                }
                for(let e = 0; e < o.length; e++){
                    let s = parseInt(o[e].getAttribute("first"), 10);
                    let r = parseInt(o[e].getAttribute("second"), 10);
                    let a = parseInt(o[e].getAttribute("amount"), 10);
                    if (t.chars[l[r]]) {
                        t.chars[l[r]].kerning[l[s]] = a;
                    }
                }
                return t;
            }
        };
        e.s([
            "bitmapFontXMLParser",
            0,
            k
        ], 506758);
        let I = {
            test: (e)=>!!(typeof e === "string" && e.match(/<font(\s|>)/)) && k.test(d.DOMAdapter.get().parseXML(e)),
            parse: (e)=>k.parse(d.DOMAdapter.get().parseXML(e))
        };
        e.s([
            "bitmapFontXMLStringParser",
            0,
            I
        ], 725794);
        let L = [
            ".xml",
            ".fnt"
        ];
        let C = {
            extension: {
                type: n.ExtensionType.CacheParser,
                name: "cacheBitmapFont"
            },
            test: (e)=>!!e?.pages && !!e?.chars && typeof e?.fontFamily === "string" && e.fontFamily !== "",
            getCacheableAssets (e, t) {
                let s = {};
                e.forEach((e)=>{
                    s[e] = t;
                    s[`${e}-bitmap`] = t;
                });
                s[`${t.fontFamily}-bitmap`] = t;
                return s;
            }
        };
        let B = {
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.Normal
            },
            name: "loadBitmapFont",
            id: "bitmap-font",
            test: (e)=>L.includes(E.path.extname(e).toLowerCase()),
            testParse: async (e)=>P.test(e) || I.test(e),
            async parse (t, s, r) {
                let a = P.test(t) ? P.parse(t) : I.parse(t);
                let { src } = s;
                let { pages } = a;
                let o = [];
                let data = a.distanceField ? {
                    scaleMode: "linear",
                    alphaMode: "premultiply-alpha-on-upload",
                    autoGenerateMipmaps: false,
                    resolution: 1
                } : {};
                for(let e = 0; e < pages.length; ++e){
                    let t = pages[e].file;
                    let s = E.path.join(E.path.dirname(src), t);
                    s = T.copySearchParams(s, src);
                    o.push({
                        src: s,
                        data
                    });
                }
                let [d, { BitmapFont }] = await Promise.all([
                    r.load(o),
                    e.A(236559)
                ]);
                return new BitmapFont({
                    data: a,
                    textures: o.map((e)=>d[e.src])
                }, src);
            },
            async load (e, t) {
                let s = await d.DOMAdapter.get().fetch(e);
                return await s.text();
            },
            async unload (e, t, s) {
                await Promise.all(e.pages.map((e)=>s.unload(e.texture.source._sourceOrigin)));
                e.destroy();
            }
        };
        e.s([
            "bitmapFontCachePlugin",
            0,
            C,
            "loadBitmapFont",
            0,
            B
        ], 121658);
        var F = e.i(562140);
        class O {
            constructor(e, t = false){
                this._loader = e;
                this._assetList = [];
                this._isLoading = false;
                this._maxConcurrent = 1;
                this.verbose = t;
            }
            add(e) {
                e.forEach((e)=>{
                    this._assetList.push(e);
                });
                if (this.verbose) {
                    console.log("[BackgroundLoader] assets: ", this._assetList);
                }
                if (this._isActive && !this._isLoading) {
                    this._next();
                }
            }
            async _next() {
                if (this._assetList.length && this._isActive) {
                    this._isLoading = true;
                    let e = [];
                    let t = Math.min(this._assetList.length, this._maxConcurrent);
                    for(let s = 0; s < t; s++){
                        e.push(this._assetList.pop());
                    }
                    await this._loader.load(e);
                    this._isLoading = false;
                    this._next();
                }
            }
            get active() {
                return this._isActive;
            }
            set active(e) {
                if (this._isActive !== e) {
                    this._isActive = e;
                    if (e && !this._isLoading) {
                        this._next();
                    }
                }
            }
        }
        e.s([
            "BackgroundLoader",
            0,
            O
        ], 544920);
        var R = e.i(3165);
        var S = e.i(337654);
        let z = {
            extension: {
                type: n.ExtensionType.CacheParser,
                name: "cacheTextureArray"
            },
            test: (e)=>Array.isArray(e) && e.every((e)=>e instanceof S.Texture),
            getCacheableAssets: (e, t)=>{
                let s = {};
                e.forEach((e)=>{
                    t.forEach((t, r)=>{
                        s[e + (r === 0 ? "" : r + 1)] = t;
                    });
                });
                return s;
            }
        };
        async function M(e) {
            if ("Image" in globalThis) {
                return new Promise((resolve)=>{
                    let s = new Image;
                    s.onload = ()=>{
                        resolve(true);
                    };
                    s.onerror = ()=>{
                        resolve(false);
                    };
                    s.src = e;
                });
            }
            if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
                try {
                    let t = await (await fetch(e)).blob();
                    await createImageBitmap(t);
                } catch (e) {
                    return false;
                }
                return true;
            }
            return false;
        }
        e.s([
            "cacheTextureArray",
            0,
            z
        ], 553527);
        e.s([
            "testImageFormat",
            0,
            M
        ], 784710);
        let j = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: 1
            },
            test: async ()=>M("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
            add: async (e)=>[
                    ...e,
                    "avif"
                ],
            remove: async (e)=>e.filter((e)=>e !== "avif")
        };
        e.s([
            "detectAvif",
            0,
            j
        ], 597023);
        let W = [
            "png",
            "jpg",
            "jpeg"
        ];
        let U = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: -1
            },
            test: ()=>Promise.resolve(true),
            add: async (e)=>[
                    ...e,
                    ...W
                ],
            remove: async (e)=>e.filter((e)=>!W.includes(e))
        };
        e.s([
            "detectDefaults",
            0,
            U
        ], 501522);
        let D = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
        function $(e) {
            return !D && document.createElement("video").canPlayType(e) !== "";
        }
        e.s([
            "testVideoFormat",
            0,
            $
        ], 993);
        let G = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: 0
            },
            test: async ()=>$("video/mp4"),
            add: async (e)=>[
                    ...e,
                    "mp4",
                    "m4v"
                ],
            remove: async (e)=>e.filter((e)=>e !== "mp4" && e !== "m4v")
        };
        e.s([
            "detectMp4",
            0,
            G
        ], 954198);
        let H = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: 0
            },
            test: async ()=>$("video/ogg"),
            add: async (e)=>[
                    ...e,
                    "ogv"
                ],
            remove: async (e)=>e.filter((e)=>e !== "ogv")
        };
        e.s([
            "detectOgv",
            0,
            H
        ], 743829);
        let V = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: 0
            },
            test: async ()=>$("video/webm"),
            add: async (e)=>[
                    ...e,
                    "webm"
                ],
            remove: async (e)=>e.filter((e)=>e !== "webm")
        };
        e.s([
            "detectWebm",
            0,
            V
        ], 549140);
        let N = {
            extension: {
                type: n.ExtensionType.DetectionParser,
                priority: 0
            },
            test: async ()=>M("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
            add: async (e)=>[
                    ...e,
                    "webp"
                ],
            remove: async (e)=>e.filter((e)=>e !== "webp")
        };
        e.s([
            "detectWebp",
            0,
            N
        ], 288111);
        var q = e.i(848790);
        var Q = e.i(297801);
        let X = class e {
            constructor(){
                this.loadOptions = {
                    ...e.defaultOptions
                };
                this._parsers = [];
                this._parsersValidated = false;
                this.parsers = new Proxy(this._parsers, {
                    set: (e, t, s)=>{
                        this._parsersValidated = false;
                        e[t] = s;
                        return true;
                    }
                });
                this.promiseCache = {};
            }
            reset() {
                this._parsersValidated = false;
                this.promiseCache = {};
            }
            _getLoadPromiseAndParser(e, t) {
                let s = {
                    promise: null,
                    parser: null
                };
                s.promise = (async ()=>{
                    let r = null;
                    let a = null;
                    if (t.parser || t.loadParser) {
                        a = this._parserHash[t.parser || t.loadParser];
                        if (t.loadParser) {
                            F.warn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`);
                        }
                        if (!a) {
                            F.warn(`[Assets] specified load parser "${t.parser || t.loadParser}" not found while loading ${e}`);
                        }
                    }
                    if (!a) {
                        for(let s = 0; s < this.parsers.length; s++){
                            let parser = this.parsers[s];
                            if (parser.load && parser.test?.(e, t, this)) {
                                a = parser;
                                break;
                            }
                        }
                        if (!a) {
                            F.warn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`);
                            return null;
                        }
                    }
                    r = await a.load(e, t, this);
                    s.parser = a;
                    for(let e = 0; e < this.parsers.length; e++){
                        let parser = this.parsers[e];
                        if (parser.parse && parser.parse && await parser.testParse?.(r, t, this)) {
                            r = await parser.parse(r, t, this) || r;
                            s.parser = parser;
                        }
                    }
                    return r;
                })();
                return s;
            }
            async load(t, onProgress_1) {
                if (!this._parsersValidated) {
                    this._validateParsers();
                }
                let { onProgress, onError, strategy, retryCount, retryDelay } = typeof onProgress_1 === "function" ? {
                    ...e.defaultOptions,
                    ...this.loadOptions,
                    onProgress: onProgress_1
                } : {
                    ...e.defaultOptions,
                    ...this.loadOptions,
                    ...onProgress_1 || {}
                };
                let l = 0;
                let d = {};
                let h = Q.isSingleItem(t);
                let c = q.convertToList(t, (e)=>({
                        alias: [
                            e
                        ],
                        src: e,
                        data: {}
                    }));
                let p = c.reduce((acc, item)=>acc + (item.progressSize || 1), 0);
                let u = c.map(async (e)=>{
                    let t = E.path.toAbsolute(e.src);
                    if (!d[e.src]) {
                        await this._loadAssetWithRetry(t, e, {
                            onProgress,
                            onError,
                            strategy,
                            retryCount,
                            retryDelay
                        }, d);
                        l += e.progressSize || 1;
                        if (onProgress) {
                            onProgress(l / p);
                        }
                    }
                });
                await Promise.all(u);
                if (h) {
                    return d[c[0].src];
                }
                return d;
            }
            async unload(e) {
                let t = q.convertToList(e, (e)=>({
                        alias: [
                            e
                        ],
                        src: e
                    })).map(async (e)=>{
                    let t = E.path.toAbsolute(e.src);
                    let s = this.promiseCache[t];
                    if (s) {
                        let r = await s.promise;
                        delete this.promiseCache[t];
                        await s.parser?.unload?.(r, e, this);
                    }
                });
                await Promise.all(t);
            }
            _validateParsers() {
                this._parsersValidated = true;
                this._parserHash = this._parsers.filter((e)=>e.name || e.id).reduce((acc, item)=>{
                    if (item.name || item.id) {
                        if (acc[item.name] || acc[item.id]) {
                            F.warn(`[Assets] parser id conflict "${item.id}"`);
                        }
                    } else {
                        F.warn("[Assets] parser should have an id");
                    }
                    acc[item.name] = item;
                    if (item.id) {
                        acc[item.id] = item;
                    }
                    return acc;
                }, {});
            }
            async _loadAssetWithRetry(e, t, s, r) {
                let a = 0;
                let { onError, strategy, retryCount, retryDelay } = s;
                let d = (retryDelay)=>new Promise((resolve)=>setTimeout(resolve, retryDelay));
                while(true){
                    try {
                        if (!this.promiseCache[e]) {
                            this.promiseCache[e] = this._getLoadPromiseAndParser(e, t);
                        }
                        r[t.src] = await this.promiseCache[e].promise;
                        return;
                    } catch (error) {
                        delete this.promiseCache[e];
                        delete r[t.src];
                        a++;
                        let s = strategy !== "retry" || a > retryCount;
                        if (strategy === "retry" && !s) {
                            if (onError) {
                                onError(error, t);
                            }
                            await d(retryDelay);
                            continue;
                        }
                        if (strategy === "skip") {
                            if (onError) {
                                onError(error, t);
                            }
                            return;
                        }
                        if (onError) {
                            onError(error, t);
                        }
                        let h = Error(`[Loader.load] Failed to load ${e}.
${error}`);
                        if (error instanceof Error && error.stack) {
                            h.stack = error.stack;
                        }
                        throw h;
                    }
                }
            }
        };
        function Y(e, t) {
            if (Array.isArray(t)) {
                for (let s of t){
                    if (e.startsWith(`data:${s}`)) {
                        return true;
                    }
                }
                return false;
            }
            return e.startsWith(`data:${t}`);
        }
        function Z(e, t) {
            let s = e.split("?")[0];
            let r = E.path.extname(s).toLowerCase();
            if (Array.isArray(t)) {
                return t.includes(r);
            }
            return r === t;
        }
        X.defaultOptions = {
            onProgress: undefined,
            onError: undefined,
            strategy: "throw",
            retryCount: 3,
            retryDelay: 250
        };
        e.s([
            "Loader",
            0,
            X
        ], 63416);
        e.s([
            "checkDataUrl",
            0,
            Y
        ], 427315);
        e.s([
            "checkExtension",
            0,
            Z
        ], 840383);
        let K = {
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.Low
            },
            name: "loadJson",
            id: "json",
            test: (e)=>Y(e, "application/json") || Z(e, ".json"),
            async load (e) {
                let t = await d.DOMAdapter.get().fetch(e);
                return await t.json();
            }
        };
        e.s([
            "loadJson",
            0,
            K
        ], 126853);
        let J = {
            name: "loadTxt",
            id: "text",
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.Low,
                name: "loadTxt"
            },
            test: (e)=>Y(e, "text/plain") || Z(e, ".txt"),
            async load (e) {
                let t = await d.DOMAdapter.get().fetch(e);
                return await t.text();
            }
        };
        e.s([
            "loadTxt",
            0,
            J
        ], 152519);
        let ee = [
            "normal",
            "bold",
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900"
        ];
        let et = [
            ".ttf",
            ".otf",
            ".woff",
            ".woff2"
        ];
        let es = [
            "font/ttf",
            "font/otf",
            "font/woff",
            "font/woff2"
        ];
        let er = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
        function ea(e) {
            let t = E.path.extname(e);
            let s = E.path.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((e)=>e.charAt(0).toUpperCase() + e.slice(1));
            let r = s.length > 0;
            for (let e of s){
                if (!e.match(er)) {
                    r = false;
                    break;
                }
            }
            let a = s.join(" ");
            if (!r) {
                a = `"${a.replace(/[\\"]/g, "\\$&")}"`;
            }
            return a;
        }
        let ei = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
        let en = {
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.Low
            },
            name: "loadWebFont",
            id: "web-font",
            test: (e)=>Y(e, es) || Z(e, et),
            async load (url, t) {
                let s = d.DOMAdapter.get().getFontFaceSet();
                if (s) {
                    let faces = [];
                    let a = t.data?.family ?? ea(url);
                    let i = t.data?.weights?.filter((e)=>ee.includes(e)) ?? [
                        "normal"
                    ];
                    let n = t.data ?? {};
                    for(let t = 0; t < i.length; t++){
                        let weight = i[t];
                        let l = new FontFace(a, `url('${ei.test(url) ? url : encodeURI(url)}')`, {
                            ...n,
                            weight
                        });
                        await l.load();
                        s.add(l);
                        faces.push(l);
                    }
                    if (R.Cache.has(`${a}-and-url`)) {
                        R.Cache.get(`${a}-and-url`).entries.push({
                            url,
                            faces
                        });
                    } else {
                        R.Cache.set(`${a}-and-url`, {
                            entries: [
                                {
                                    url,
                                    faces
                                }
                            ]
                        });
                    }
                    if (faces.length === 1) {
                        return faces[0];
                    }
                    return faces;
                }
                F.warn("[loadWebFont] FontFace API is not supported. Skipping loading font");
                return null;
            },
            unload (e) {
                let t = Array.isArray(e) ? e : [
                    e
                ];
                let family = t[0].family;
                let r = R.Cache.get(`${family}-and-url`);
                let a = r.entries.find((e)=>e.faces.some((e)=>-1 !== t.indexOf(e)));
                a.faces = a.faces.filter((e)=>-1 === t.indexOf(e));
                if (a.faces.length === 0) {
                    r.entries = r.entries.filter((e)=>e !== a);
                }
                t.forEach((e)=>{
                    d.DOMAdapter.get().getFontFaceSet().delete(e);
                });
                if (r.entries.length === 0) {
                    R.Cache.remove(`${family}-and-url`);
                }
            }
        };
        e.s([
            "getFontFamilyName",
            0,
            ea,
            "loadWebFont",
            0,
            en
        ], 10264);
        var eo = e.i(24880);
        var el = e.i(558001);
        var ed = e.i(438323);
        function eh(e, t = 1) {
            let s = ed.Resolver.RETINA_PREFIX?.exec(e);
            if (s) {
                return parseFloat(s[1]);
            }
            return t;
        }
        function ec(source, t, label) {
            source.label = label;
            source._sourceOrigin = label;
            let r = new S.Texture({
                source,
                label
            });
            let a = ()=>{
                delete t.promiseCache[label];
                if (R.Cache.has(label)) {
                    R.Cache.remove(label);
                }
            };
            r.source.once("destroy", ()=>{
                if (t.promiseCache[label]) {
                    F.warn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.");
                    a();
                }
            });
            r.once("destroy", ()=>{
                if (!source.destroyed) {
                    F.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.");
                    a();
                }
            });
            return r;
        }
        e.s([
            "getResolutionOfUrl",
            0,
            eh
        ], 86716);
        e.s([
            "createTexture",
            0,
            ec
        ], 151032);
        let ep = {
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.Low,
                name: "loadSVG"
            },
            name: "loadSVG",
            id: "svg",
            config: {
                crossOrigin: "anonymous",
                parseAsGraphicsContext: false
            },
            test: (e)=>Y(e, "image/svg+xml") || Z(e, ".svg"),
            async load (e, t, s) {
                if (t.data?.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext) {
                    return eg(e);
                }
                return eu(e, t, s, this.config.crossOrigin);
            },
            unload (e) {
                e.destroy(true);
            }
        };
        async function eu(e, t, s, crossOrigin) {
            let a = await d.DOMAdapter.get().fetch(e);
            let i = d.DOMAdapter.get().createImage();
            i.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await a.text())}`;
            i.crossOrigin = crossOrigin;
            await i.decode();
            let n = t.data?.width ?? i.width;
            let o = t.data?.height ?? i.height;
            let resolution = t.data?.resolution || eh(e);
            let h = Math.ceil(n * resolution);
            let c = Math.ceil(o * resolution);
            let p = d.DOMAdapter.get().createCanvas(h, c);
            let u = p.getContext("2d");
            u.imageSmoothingEnabled = true;
            u.imageSmoothingQuality = "high";
            u.drawImage(i, 0, 0, n * resolution, o * resolution);
            let { parseAsGraphicsContext, ...rest } = t.data ?? {};
            return ec(new eo.ImageSource({
                resource: p,
                alphaMode: "premultiply-alpha-on-upload",
                resolution,
                ...rest
            }), s, e);
        }
        async function eg(e) {
            let t = await d.DOMAdapter.get().fetch(e);
            let s = await t.text();
            let r = new el.GraphicsContext;
            r.svg(s);
            return r;
        }
        e.s([
            "loadSvg",
            0,
            ep
        ], 918655);
        let em = null;
        class eA {
            constructor(){
                if (!em) {
                    em = URL.createObjectURL(new Blob([
                        '(function () {\n    \'use strict\';\n\n    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";\n    async function checkImageBitmap() {\n      try {\n        if (typeof createImageBitmap !== "function") return false;\n        const response = await fetch(WHITE_PNG);\n        const imageBlob = await response.blob();\n        const imageBitmap = await createImageBitmap(imageBlob);\n        return imageBitmap.width === 1 && imageBitmap.height === 1;\n      } catch (_e) {\n        return false;\n      }\n    }\n    void checkImageBitmap().then((result) => {\n      self.postMessage(result);\n    });\n\n})();\n'
                    ], {
                        type: "application/javascript"
                    }));
                }
                this.worker = new Worker(em);
            }
        }
        eA.revokeObjectURL = ()=>{
            if (em) {
                URL.revokeObjectURL(em);
                em = null;
            }
        };
        let ef = null;
        class ey {
            constructor(){
                if (!ef) {
                    ef = URL.createObjectURL(new Blob([
                        '(function () {\n    \'use strict\';\n\n    async function loadImageBitmap(url, alphaMode) {\n      const response = await fetch(url);\n      if (!response.ok) {\n        throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);\n      }\n      const imageBlob = await response.blob();\n      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);\n    }\n    self.onmessage = async (event) => {\n      try {\n        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);\n        self.postMessage({\n          data: imageBitmap,\n          uuid: event.data.uuid,\n          id: event.data.id\n        }, [imageBitmap]);\n      } catch (e) {\n        self.postMessage({\n          error: e,\n          uuid: event.data.uuid,\n          id: event.data.id\n        });\n      }\n    };\n\n})();\n'
                    ], {
                        type: "application/javascript"
                    }));
                }
                this.worker = new Worker(ef);
            }
        }
        ey.revokeObjectURL = ()=>{
            if (ef) {
                URL.revokeObjectURL(ef);
                ef = null;
            }
        };
        let ev = 0;
        let e_ = new class {
            constructor(){
                this._initialized = false;
                this._createdWorkers = 0;
                this._workerPool = [];
                this._queue = [];
                this._resolveHash = {};
            }
            isImageBitmapSupported() {
                if (!(this._isImageBitmapSupported !== undefined)) {
                    this._isImageBitmapSupported = new Promise((resolve)=>{
                        let { worker } = new eA;
                        worker.addEventListener("message", (s)=>{
                            worker.terminate();
                            eA.revokeObjectURL();
                            resolve(s.data);
                        });
                    });
                }
                return this._isImageBitmapSupported;
            }
            loadImageBitmap(e, t) {
                return this._run("loadImageBitmap", [
                    e,
                    t?.data?.alphaMode
                ]);
            }
            async _initWorkers() {
                if (!this._initialized) {
                    this._initialized = true;
                }
            }
            _getWorker() {
                if (r === undefined) {
                    r = navigator.hardwareConcurrency || 4;
                }
                let e = this._workerPool.pop();
                if (!e && this._createdWorkers < r) {
                    this._createdWorkers++;
                    (e = new ey().worker).addEventListener("message", (e)=>{
                        this._complete(e.data);
                        this._returnWorker(e.target);
                        this._next();
                    });
                }
                return e;
            }
            _returnWorker(e) {
                this._workerPool.push(e);
            }
            _complete(e) {
                this._resolveHash[e.uuid] && (e.error !== undefined ? this._resolveHash[e.uuid].reject(e.error) : this._resolveHash[e.uuid].resolve(e.data), delete this._resolveHash[e.uuid]);
            }
            async _run(e, t) {
                await this._initWorkers();
                let s = new Promise((resolve, reject)=>{
                    this._queue.push({
                        id: e,
                        arguments: t,
                        resolve,
                        reject
                    });
                });
                this._next();
                return s;
            }
            _next() {
                if (!this._queue.length) {
                    return;
                }
                let e = this._getWorker();
                if (!e) {
                    return;
                }
                let t = this._queue.pop();
                let s = t.id;
                this._resolveHash[ev] = {
                    resolve: t.resolve,
                    reject: t.reject
                };
                e.postMessage({
                    data: t.arguments,
                    uuid: ev++,
                    id: s
                });
            }
            reset() {
                this._workerPool.forEach((e)=>e.terminate());
                this._workerPool.length = 0;
                Object.values(this._resolveHash).forEach(({ reject })=>{
                    reject?.(Error("WorkerManager has been reset before completion"));
                });
                this._resolveHash = {};
                this._queue.length = 0;
                this._initialized = false;
                this._createdWorkers = 0;
            }
        };
        e.s([
            "WorkerManager",
            0,
            e_
        ], 508160);
        let ew = [
            ".jpeg",
            ".jpg",
            ".png",
            ".webp",
            ".avif"
        ];
        let ex = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/avif"
        ];
        async function eb(e, t) {
            let s = await d.DOMAdapter.get().fetch(e);
            if (!s.ok) {
                throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${s.status} ${s.statusText}`);
            }
            let r = await s.blob();
            if (t?.data?.alphaMode === "premultiplied-alpha") {
                return createImageBitmap(r, {
                    premultiplyAlpha: "none"
                });
            }
            return createImageBitmap(r);
        }
        let eT = {
            name: "loadTextures",
            id: "texture",
            extension: {
                type: n.ExtensionType.LoadParser,
                priority: b.LoaderParserPriority.High,
                name: "loadTextures"
            },
            config: {
                preferWorkers: true,
                preferCreateImageBitmap: true,
                crossOrigin: "anonymous"
            },
            test: (e)=>Y(e, ex) || Z(e, ew),
            async load (e, t, s) {
                let r = null;
                r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await e_.isImageBitmapSupported() ? await e_.loadImageBitmap(e, t) : await eb(e, t) : await new Promise((resolve, reject)=>{
                    r = d.DOMAdapter.get().createImage();
                    r.crossOrigin = this.config.crossOrigin;
                    r.src = e;
                    if (r.complete) {
                        resolve(r);
                    } else {
                        r.onload = ()=>{
                            resolve(r);
                        };
                        r.onerror = reject;
                    }
                });
                return ec(new eo.ImageSource({
                    resource: r,
                    alphaMode: "premultiply-alpha-on-upload",
                    resolution: t.data?.resolution || eh(e),
                    ...t.data
                }), s, e);
            },
            unload (e) {
                e.destroy(true);
            }
        };
        e.s([
            "loadImageBitmap",
            0,
            eb,
            "loadTextures",
            0,
            eT
        ], 368818);
        var eE = e.i(613514);
        var eP = e.i(298948);
        let ek = [
            ".mp4",
            ".m4v",
            ".webm",
            ".ogg",
            ".ogv",
            ".h264",
            ".avi",
            ".mov"
        ];
        function eI(e, t, s) {
            if (s !== undefined || t.startsWith("data:")) {
                if (s !== false) {
                    e.crossOrigin = typeof s === "string" ? s : "anonymous";
                }
            } else {
                e.crossOrigin = eC(t);
            }
        }
        function eL(e) {
            return new Promise((resolve, reject)=>{
                function r() {
                    i();
                    resolve();
                }
                function a(e) {
                    i();
                    reject(e);
                }
                function i() {
                    e.removeEventListener("canplaythrough", r);
                    e.removeEventListener("error", a);
                }
                e.addEventListener("canplaythrough", r);
                e.addEventListener("error", a);
                e.load();
            });
        }
        function eC(e, t = globalThis.location) {
            if (e.startsWith("data:")) {
                return "";
            }
            if (!t) {
                t = globalThis.location;
            }
            let s = new URL(e, document.baseURI);
            if (s.hostname !== t.hostname || s.port !== t.port || s.protocol !== t.protocol) {
                return "anonymous";
            }
            return "";
        }
        let eB = {
            name: "loadVideo",
            id: "video",
            extension: {
                type: n.ExtensionType.LoadParser,
                name: "loadVideo"
            },
            test (e) {
                if (!a || !i) {
                    let { validVideoExtensions, validVideoMime } = (()=>{
                        let validVideoExtensions_1 = [];
                        let validVideoMime_1 = [];
                        for (let s of ek){
                            let r = eE.VideoSource.MIME_TYPES[s.substring(1)] || `video/${s.substring(1)}`;
                            if ($(r)) {
                                validVideoExtensions_1.push(s);
                                if (!validVideoMime_1.includes(r)) {
                                    validVideoMime_1.push(r);
                                }
                            }
                        }
                        return {
                            validVideoExtensions: validVideoExtensions_1,
                            validVideoMime: validVideoMime_1
                        };
                    })();
                    a = validVideoExtensions;
                    i = validVideoMime;
                }
                let t = Y(e, i);
                let s = Z(e, a);
                return t || s;
            },
            async load (e, t, s) {
                let r;
                let a = {
                    ...eE.VideoSource.defaultOptions,
                    resolution: t.data?.resolution || eh(e),
                    alphaMode: t.data?.alphaMode || await eP.detectVideoAlphaMode(),
                    ...t.data
                };
                let i = document.createElement("video");
                let n = {
                    preload: a.autoLoad !== false ? "auto" : undefined,
                    "webkit-playsinline": a.playsinline !== false ? "" : undefined,
                    playsinline: a.playsinline !== false ? "" : undefined,
                    muted: a.muted === true ? "" : undefined,
                    loop: a.loop === true ? "" : undefined,
                    autoplay: a.autoPlay !== false ? "" : undefined
                };
                Object.keys(n).forEach((e)=>{
                    let t = n[e];
                    if (t !== undefined) {
                        i.setAttribute(e, t);
                    }
                });
                if (a.muted === true) {
                    i.muted = true;
                }
                eI(i, e, a.crossorigin);
                let o = document.createElement("source");
                if (a.mime) {
                    r = a.mime;
                } else if (e.startsWith("data:")) {
                    r = e.slice(5, e.indexOf(";"));
                } else if (!e.startsWith("blob:")) {
                    let t = e.split("?")[0].slice(e.lastIndexOf(".") + 1).toLowerCase();
                    r = eE.VideoSource.MIME_TYPES[t] || `video/${t}`;
                }
                o.src = e;
                if (r) {
                    o.type = r;
                }
                return new Promise((resolve, reject)=>{
                    async function l() {
                        let n = new eE.VideoSource({
                            ...a,
                            resource: i
                        });
                        h();
                        if (t.data.preload) {
                            await eL(i);
                        }
                        resolve(ec(n, s, e));
                    }
                    function d(e) {
                        h();
                        reject(e);
                    }
                    function h() {
                        i.removeEventListener("canplay", l);
                        i.removeEventListener("error", d);
                        o.removeEventListener("error", d);
                    }
                    if (a.preload && !a.autoPlay) {
                        i.load();
                    }
                    i.addEventListener("canplay", l);
                    i.addEventListener("error", d);
                    o.addEventListener("error", d);
                    i.appendChild(o);
                });
            },
            unload (e) {
                e.destroy(true);
            }
        };
        e.s([
            "crossOrigin",
            0,
            eI,
            "determineCrossOrigin",
            0,
            eC,
            "loadVideoTextures",
            0,
            eB,
            "preloadVideo",
            0,
            eL
        ], 212218);
        let eF = {
            extension: {
                type: n.ExtensionType.ResolveParser,
                name: "resolveTexture"
            },
            test: eT.test,
            parse: (e)=>({
                    resolution: parseFloat(ed.Resolver.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
                    format: e.split(".").pop(),
                    src: e
                })
        };
        e.s([
            "resolveTextureUrl",
            0,
            eF
        ], 167993);
        let eO = {
            extension: {
                type: n.ExtensionType.ResolveParser,
                priority: -2,
                name: "resolveJson"
            },
            test: (e)=>ed.Resolver.RETINA_PREFIX.test(e) && e.endsWith(".json"),
            parse: eF.parse
        };
        e.s([
            "resolveJsonUrl",
            0,
            eO
        ], 317365);
        class eR {
            constructor(){
                this._detections = [];
                this._initialized = false;
                this.resolver = new ed.Resolver;
                this.loader = new X;
                this.cache = R.Cache;
                this._backgroundLoader = new O(this.loader);
                this._backgroundLoader.active = true;
                this.reset();
            }
            async init(e = {}) {
                if (this._initialized) {
                    return void F.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
                }
                this._initialized = true;
                if (e.defaultSearchParams) {
                    this.resolver.setDefaultSearchParams(e.defaultSearchParams);
                }
                if (e.basePath) {
                    this.resolver.basePath = e.basePath;
                }
                if (e.bundleIdentifier) {
                    this.resolver.setBundleIdentifier(e.bundleIdentifier);
                }
                if (e.manifest) {
                    let t = e.manifest;
                    if (typeof t === "string") {
                        t = await this.load(t);
                    }
                    this.resolver.addManifest(t);
                }
                let t = e.texturePreference?.resolution ?? 1;
                let format = await this._detectFormats({
                    preferredFormats: e.texturePreference?.format,
                    skipDetections: e.skipDetections,
                    detections: this._detections
                });
                this.resolver.prefer({
                    params: {
                        format,
                        resolution: typeof t === "number" ? [
                            t
                        ] : t
                    }
                });
                if (e.preferences) {
                    this.setPreferences(e.preferences);
                }
                if (e.loadOptions) {
                    this.loader.loadOptions = {
                        ...this.loader.loadOptions,
                        ...e.loadOptions
                    };
                }
            }
            add(e) {
                this.resolver.add(e);
            }
            async load(e, t) {
                if (!this._initialized) {
                    await this.init();
                }
                let s = Q.isSingleItem(e);
                let r = q.convertToList(e).map((e)=>{
                    if (typeof e !== "string") {
                        let t = this.resolver.getAlias(e);
                        if (t.some((e)=>!this.resolver.hasKey(e))) {
                            this.add(e);
                        }
                        if (Array.isArray(t)) {
                            return t[0];
                        }
                        return t;
                    }
                    if (!this.resolver.hasKey(e)) {
                        this.add({
                            alias: e,
                            src: e
                        });
                    }
                    return e;
                });
                let a = this.resolver.resolve(r);
                let i = await this._mapLoadToResolve(a, t);
                if (s) {
                    return i[r[0]];
                }
                return i;
            }
            addBundle(e, t) {
                this.resolver.addBundle(e, t);
            }
            async loadBundle(e, t) {
                if (!this._initialized) {
                    await this.init();
                }
                let s = false;
                if (typeof e === "string") {
                    s = true;
                    e = [
                        e
                    ];
                }
                let r = this.resolver.resolveBundle(e);
                let a = {};
                let i = Object.keys(r);
                let n = 0;
                let o = [];
                let l = i.map((e, s)=>{
                    let i = r[e];
                    let l = [
                        ...new Set(Object.values(i).flat())
                    ].reduce((acc, item)=>acc + (item.progressSize || 1), 0);
                    o.push(0);
                    n += l;
                    return this._mapLoadToResolve(i, (e)=>{
                        o[s] = e * l;
                        t?.(o.reduce((acc, item)=>acc + item, 0) / n);
                    }).then((t)=>{
                        a[e] = t;
                    });
                });
                await Promise.all(l);
                if (s) {
                    return a[e[0]];
                }
                return a;
            }
            async backgroundLoad(e) {
                if (!this._initialized) {
                    await this.init();
                }
                if (typeof e === "string") {
                    e = [
                        e
                    ];
                }
                let t = this.resolver.resolve(e);
                this._backgroundLoader.add(Object.values(t));
            }
            async backgroundLoadBundle(e) {
                if (!this._initialized) {
                    await this.init();
                }
                if (typeof e === "string") {
                    e = [
                        e
                    ];
                }
                Object.values(this.resolver.resolveBundle(e)).forEach((e)=>{
                    this._backgroundLoader.add(Object.values(e));
                });
            }
            reset() {
                this.resolver.reset();
                this.loader.reset();
                this.cache.reset();
                this._initialized = false;
            }
            get(e) {
                if (typeof e === "string") {
                    return R.Cache.get(e);
                }
                let t = {};
                for(let s = 0; s < e.length; s++){
                    t[s] = R.Cache.get(e[s]);
                }
                return t;
            }
            async _mapLoadToResolve(e, t) {
                let s = [
                    ...new Set(Object.values(e))
                ];
                this._backgroundLoader.active = false;
                let r = await this.loader.load(s, t);
                this._backgroundLoader.active = true;
                let a = {};
                s.forEach((e)=>{
                    let t = r[e.src];
                    let s = [
                        e.src
                    ];
                    if (e.alias) {
                        s.push(...e.alias);
                    }
                    s.forEach((e)=>{
                        a[e] = t;
                    });
                    R.Cache.set(s, t);
                });
                return a;
            }
            async unload(e) {
                if (!this._initialized) {
                    await this.init();
                }
                let t = q.convertToList(e).map((e)=>{
                    if (typeof e !== "string") {
                        return e.src;
                    }
                    return e;
                });
                let s = this.resolver.resolve(t);
                await this._unloadFromResolved(s);
            }
            async unloadBundle(e) {
                if (!this._initialized) {
                    await this.init();
                }
                e = q.convertToList(e);
                let t = this.resolver.resolveBundle(e);
                let s = Object.keys(t).map((e)=>this._unloadFromResolved(t[e]));
                await Promise.all(s);
            }
            async _unloadFromResolved(e) {
                let t = Object.values(e);
                t.forEach((e)=>{
                    R.Cache.remove(e.src);
                });
                await this.loader.unload(t);
            }
            async _detectFormats(e) {
                let t = [];
                for (let s of (e.preferredFormats && (t = Array.isArray(e.preferredFormats) ? e.preferredFormats : [
                    e.preferredFormats
                ]), e.detections)){
                    if (e.skipDetections || await s.test()) {
                        t = await s.add(t);
                    } else if (!e.skipDetections) {
                        t = await s.remove(t);
                    }
                }
                return t = t.filter((e, s)=>t.indexOf(e) === s);
            }
            get detections() {
                return this._detections;
            }
            setPreferences(e) {
                this.loader.parsers.forEach((t)=>{
                    if (t.config) {
                        Object.keys(t.config).filter((t)=>t in e).forEach((s)=>{
                            t.config[s] = e[s];
                        });
                    }
                });
            }
        }
        let eS = new eR;
        n.extensions.handleByList(n.ExtensionType.LoadParser, eS.loader.parsers).handleByList(n.ExtensionType.ResolveParser, eS.resolver.parsers).handleByList(n.ExtensionType.CacheParser, eS.cache.parsers).handleByList(n.ExtensionType.DetectionParser, eS.detections);
        n.extensions.add(z, U, j, N, G, H, V, K, J, en, ep, eT, eB, B, C, eF, eO);
        let ez = {
            loader: n.ExtensionType.LoadParser,
            resolver: n.ExtensionType.ResolveParser,
            cache: n.ExtensionType.CacheParser,
            detection: n.ExtensionType.DetectionParser
        };
        n.extensions.handle(n.ExtensionType.Asset, (e)=>{
            let e_ref = e.ref;
            Object.entries(ez).filter(([e])=>!!e_ref[e]).forEach(([e, s])=>n.extensions.add(Object.assign(e_ref[e], {
                    extension: e_ref[e].extension ?? s
                })));
        }, (e)=>{
            let e_ref = e.ref;
            Object.keys(ez).filter((e)=>!!e_ref[e]).forEach((e)=>n.extensions.remove(e_ref[e]));
        });
        e.s([
            "Assets",
            0,
            eS,
            "AssetsClass",
            0,
            eR
        ], 557305);
        var eM = e.i(465816);
        class ej extends eM.Sprite {
            constructor(...e){
                let t = e[0];
                if (Array.isArray(e[0])) {
                    t = {
                        textures: e[0],
                        autoUpdate: e[1]
                    };
                }
                const { animationSpeed = 1, autoPlay = false, autoUpdate = true, loop = true, onComplete = null, onFrameChange = null, onLoop = null, textures, updateAnchor = false, ...rest } = t;
                const [p] = textures;
                super({
                    ...rest,
                    texture: p instanceof S.Texture ? p : p.texture
                });
                this._textures = null;
                this._durations = null;
                this._autoUpdate = autoUpdate;
                this._isConnectedToTicker = false;
                this.animationSpeed = animationSpeed;
                this.loop = loop;
                this.updateAnchor = updateAnchor;
                this.onComplete = onComplete;
                this.onFrameChange = onFrameChange;
                this.onLoop = onLoop;
                this._currentTime = 0;
                this._playing = false;
                this._previousFrame = null;
                this.textures = textures;
                if (autoPlay) {
                    this.play();
                }
            }
            stop() {
                if (this._playing) {
                    this._playing = false;
                    if (this._autoUpdate && this._isConnectedToTicker) {
                        _.Ticker.shared.remove(this.update, this);
                        this._isConnectedToTicker = false;
                    }
                }
            }
            play() {
                if (!this._playing) {
                    this._playing = true;
                    if (this._autoUpdate && !this._isConnectedToTicker) {
                        _.Ticker.shared.add(this.update, this, v.UPDATE_PRIORITY.HIGH);
                        this._isConnectedToTicker = true;
                    }
                }
            }
            gotoAndStop(e) {
                this.stop();
                this.currentFrame = e;
            }
            gotoAndPlay(e) {
                this.currentFrame = e;
                this.play();
            }
            update(e) {
                if (!this._playing) {
                    return;
                }
                let e_deltaTime = e.deltaTime;
                let s = this.animationSpeed * e_deltaTime;
                let currentFrame = this.currentFrame;
                if (this._durations !== null) {
                    let e = this._currentTime % 1 * this._durations[this.currentFrame];
                    for(e += s / 60 * 1000; e < 0;){
                        this._currentTime--;
                        e += this._durations[this.currentFrame];
                    }
                    let r = Math.sign(this.animationSpeed * e_deltaTime);
                    for(this._currentTime = Math.floor(this._currentTime); e >= this._durations[this.currentFrame];){
                        e -= this._durations[this.currentFrame] * r;
                        this._currentTime += r;
                    }
                    this._currentTime += e / this._durations[this.currentFrame];
                } else {
                    this._currentTime += s;
                }
                if (this._currentTime < 0 && !this.loop) {
                    this.gotoAndStop(0);
                    if (this.onComplete) {
                        this.onComplete();
                    }
                } else if (this._currentTime >= this._textures.length && !this.loop) {
                    this.gotoAndStop(this._textures.length - 1);
                    if (this.onComplete) {
                        this.onComplete();
                    }
                } else if (currentFrame !== this.currentFrame) {
                    if (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < currentFrame || this.animationSpeed < 0 && this.currentFrame > currentFrame)) {
                        this.onLoop();
                    }
                    this._updateTexture();
                }
            }
            _updateTexture() {
                let currentFrame = this.currentFrame;
                if (this._previousFrame !== currentFrame) {
                    this._previousFrame = currentFrame;
                    this.texture = this._textures[currentFrame];
                    if (this.updateAnchor && this.texture.defaultAnchor) {
                        this.anchor.copyFrom(this.texture.defaultAnchor);
                    }
                    if (this.onFrameChange) {
                        this.onFrameChange(this.currentFrame);
                    }
                }
            }
            destroy(e = false) {
                if (typeof e === "boolean" ? e : e?.texture) {
                    let t = typeof e === "boolean" ? e : e?.textureSource;
                    this._textures.forEach((e)=>{
                        if (this.texture !== e) {
                            e.destroy(t);
                        }
                    });
                }
                this._textures = [];
                this._durations = null;
                this.stop();
                super.destroy(e);
                this.onComplete = null;
                this.onFrameChange = null;
                this.onLoop = null;
            }
            static fromFrames(e) {
                let t = [];
                for(let s = 0; s < e.length; ++s){
                    t.push(S.Texture.from(e[s]));
                }
                return new ej(t);
            }
            static fromImages(e) {
                let t = [];
                for(let s = 0; s < e.length; ++s){
                    t.push(S.Texture.from(e[s]));
                }
                return new ej(t);
            }
            get totalFrames() {
                return this._textures.length;
            }
            get textures() {
                return this._textures;
            }
            set textures(e) {
                if (e[0] instanceof S.Texture) {
                    this._textures = e;
                    this._durations = null;
                } else {
                    this._textures = [];
                    this._durations = [];
                    for(let t = 0; t < e.length; t++){
                        this._textures.push(e[t].texture);
                        this._durations.push(e[t].time);
                    }
                }
                this._previousFrame = null;
                this.gotoAndStop(0);
                this._updateTexture();
            }
            get currentFrame() {
                let e = Math.floor(this._currentTime) % this._textures.length;
                if (e < 0) {
                    e += this._textures.length;
                }
                return e;
            }
            set currentFrame(e) {
                if (e < 0 || e > this.totalFrames - 1) {
                    throw Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
                }
                let currentFrame = this.currentFrame;
                this._currentTime = e;
                if (currentFrame !== this.currentFrame) {
                    this._updateTexture();
                }
            }
            get playing() {
                return this._playing;
            }
            get autoUpdate() {
                return this._autoUpdate;
            }
            set autoUpdate(e) {
                if (e !== this._autoUpdate) {
                    this._autoUpdate = e;
                    if (!this._autoUpdate && this._isConnectedToTicker) {
                        _.Ticker.shared.remove(this.update, this);
                        this._isConnectedToTicker = false;
                    } else if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
                        _.Ticker.shared.add(this.update, this);
                        this._isConnectedToTicker = true;
                    }
                }
            }
        }
        e.s([
            "AnimatedSprite",
            0,
            ej
        ], 96207);
    }
]);
