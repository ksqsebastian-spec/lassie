;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "ea2e40e2-6325-6144-6c61-f42ae3a71fd2";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    3165,
    848790,
    (e)=>{
        "use strict";
        var t = e.i(562140);
        let s = (e, t, s = false)=>{
            if (!Array.isArray(e)) {
                e = [
                    e
                ];
            }
            if (t) {
                return e.map((e)=>{
                    if (typeof e === "string" || s) {
                        return t(e);
                    }
                    return e;
                });
            }
            return e;
        };
        e.s([
            "convertToList",
            0,
            s
        ], 848790);
        let r = new class {
            constructor(){
                this._parsers = [];
                this._cache = new Map;
                this._cacheMap = new Map;
            }
            reset() {
                this._cacheMap.clear();
                this._cache.clear();
            }
            has(e) {
                return this._cache.has(e);
            }
            get(e) {
                let s = this._cache.get(e);
                if (!s) {
                    t.warn(`[Assets] Asset id ${e} was not found in the Cache`);
                }
                return s;
            }
            set(e, r) {
                let i;
                let keys = s(e);
                for(let e = 0; e < this.parsers.length; e++){
                    let parser = this.parsers[e];
                    if (parser.test(r)) {
                        i = parser.getCacheableAssets(keys, r);
                        break;
                    }
                }
                let o = new Map(Object.entries(i || {}));
                if (!i) {
                    keys.forEach((e)=>{
                        o.set(e, r);
                    });
                }
                let cacheKeys = [
                    ...o.keys()
                ];
                let l = {
                    cacheKeys,
                    keys
                };
                keys.forEach((e)=>{
                    this._cacheMap.set(e, l);
                });
                cacheKeys.forEach((e)=>{
                    let s = i ? i[e] : r;
                    if (this._cache.has(e) && this._cache.get(e) !== s) {
                        t.warn("[Cache] already has key:", e);
                    }
                    this._cache.set(e, o.get(e));
                });
            }
            remove(e) {
                if (!this._cacheMap.has(e)) {
                    return void t.warn(`[Assets] Asset id ${e} was not found in the Cache`);
                }
                let s = this._cacheMap.get(e);
                s.cacheKeys.forEach((e)=>{
                    this._cache.delete(e);
                });
                s.keys.forEach((e)=>{
                    this._cacheMap.delete(e);
                });
            }
            get parsers() {
                return this._parsers;
            }
        };
        e.s([
            "Cache",
            0,
            r
        ], 3165);
    },
    123821,
    304767,
    872502,
    674636,
    475105,
    489496,
    298948,
    613514,
    379412,
    (e)=>{
        "use strict";
        let t;
        var s = e.i(78278);
        var r = e.i(465816);
        var i = e.i(453549);
        var a = e.i(512583);
        let o = new i.Bounds;
        function n(e, t, s) {
            e.measurable = true;
            a.getGlobalBounds(e, s, o);
            t.addBoundsMask(o);
            e.measurable = false;
        }
        e.s([
            "addMaskBounds",
            0,
            n
        ], 304767);
        var l = e.i(654713);
        var h = e.i(256924);
        var d = e.i(562140);
        function u(e, t, s) {
            let r = h.boundsPool.get();
            e.measurable = true;
            let i = h.matrixPool.get().identity();
            let a = function e(t, s, r) {
                if (t) {
                    if (t !== s) {
                        e(t.parent, s, r);
                        t.updateLocalTransform();
                        r.append(t.localTransform);
                    }
                } else {
                    d.warn("Mask bounds, renderable is not inside the root container");
                }
                return r;
            }(e, s, i);
            l.getLocalBounds(e, r, a);
            e.measurable = false;
            t.addBoundsMask(r);
            h.matrixPool.return(i);
            h.boundsPool.return(r);
        }
        e.s([
            "addMaskLocalBounds",
            0,
            u
        ], 872502);
        class c {
            constructor(e){
                this.priority = 0;
                this.inverse = false;
                this.channel = "red";
                this.pipe = "alphaMask";
                if (e?.mask) {
                    this.init(e.mask);
                }
            }
            init(e) {
                this.mask = e;
                this.renderMaskToTexture = !(e instanceof r.Sprite);
                this.mask.renderable = this.renderMaskToTexture;
                this.mask.includeInBuild = !this.renderMaskToTexture;
                this.mask.measurable = false;
            }
            reset() {
                if (this.mask !== null) {
                    this.mask.measurable = true;
                    this.mask = null;
                }
            }
            addBounds(e, t) {
                if (!this.inverse) {
                    n(this.mask, e, t);
                }
            }
            addLocalBounds(e, t) {
                u(this.mask, e, t);
            }
            containsPoint(e, t) {
                return t(this.mask, e);
            }
            destroy() {
                this.reset();
            }
            static test(e) {
                return e instanceof r.Sprite;
            }
        }
        c.extension = s.ExtensionType.MaskEffect;
        e.s([
            "AlphaMask",
            0,
            c
        ], 674636);
        class A {
            constructor(e){
                this.priority = 0;
                this.pipe = "colorMask";
                if (e?.mask) {
                    this.init(e.mask);
                }
            }
            init(e) {
                this.mask = e;
            }
            destroy() {}
            static test(e) {
                return typeof e === "number";
            }
        }
        A.extension = s.ExtensionType.MaskEffect;
        e.s([
            "ColorMask",
            0,
            A
        ], 475105);
        var p = e.i(275576);
        class _ {
            constructor(e){
                this.priority = 0;
                this.pipe = "stencilMask";
                if (e?.mask) {
                    this.init(e.mask);
                }
            }
            init(e) {
                this.mask = e;
                this.mask.includeInBuild = false;
                this.mask.measurable = false;
            }
            reset() {
                if (this.mask !== null) {
                    this.mask.measurable = true;
                    this.mask.includeInBuild = true;
                    this.mask = null;
                }
            }
            addBounds(e, t) {
                n(this.mask, e, t);
            }
            addLocalBounds(e, t) {
                u(this.mask, e, t);
            }
            containsPoint(e, t) {
                return t(this.mask, e);
            }
            destroy() {
                this.reset();
            }
            static test(e) {
                return e instanceof p.Container;
            }
        }
        _.extension = s.ExtensionType.MaskEffect;
        e.s([
            "StencilMask",
            0,
            _
        ], 489496);
        var m = e.i(338228);
        var f = e.i(173156);
        var g = e.i(24880);
        var y = e.i(989031);
        var b = e.i(787653);
        async function x() {
            t ??= (async ()=>{
                let e = b.DOMAdapter.get().createCanvas(1, 1).getContext("webgl");
                if (!e) {
                    return "premultiply-alpha-on-upload";
                }
                let t = await new Promise((resolve)=>{
                    let t = document.createElement("video");
                    t.onloadeddata = ()=>resolve(t);
                    t.onerror = ()=>resolve(null);
                    t.autoplay = false;
                    t.crossOrigin = "anonymous";
                    t.preload = "auto";
                    t.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=";
                    t.load();
                });
                if (!t) {
                    return "premultiply-alpha-on-upload";
                }
                let s = e.createTexture();
                e.bindTexture(e.TEXTURE_2D, s);
                let r = e.createFramebuffer();
                e.bindFramebuffer(e.FRAMEBUFFER, r);
                e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, s, 0);
                e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE);
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
                let i = new Uint8Array(4);
                e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, i);
                e.deleteFramebuffer(r);
                e.deleteTexture(s);
                e.getExtension("WEBGL_lose_context")?.loseContext();
                if (i[0] <= i[3]) {
                    return "premultiplied-alpha";
                }
                return "premultiply-alpha-on-upload";
            })();
            return t;
        }
        e.s([
            "detectVideoAlphaMode",
            0,
            x
        ], 298948);
        var E = e.i(317765);
        let T = class e extends E.TextureSource {
            constructor(t){
                super(t);
                this.isReady = false;
                this.uploadMethodId = "video";
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this._autoUpdate = true;
                this._isConnectedToTicker = false;
                this._updateFPS = t.updateFPS || 0;
                this._msToNextUpdate = 0;
                this.autoPlay = t.autoPlay !== false;
                this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload";
                this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this);
                this._videoFrameRequestCallbackHandle = null;
                this._load = null;
                this._resolve = null;
                this._reject = null;
                this._onCanPlay = this._onCanPlay.bind(this);
                this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
                this._onError = this._onError.bind(this);
                this._onPlayStart = this._onPlayStart.bind(this);
                this._onPlayStop = this._onPlayStop.bind(this);
                this._onSeeked = this._onSeeked.bind(this);
                this._onLoadedMetadata = this._onLoadedMetadata.bind(this);
                if (t.autoLoad !== false) {
                    this.load();
                }
            }
            updateFrame() {
                if (!this.destroyed) {
                    if (this._updateFPS) {
                        let e = y.Ticker.shared.elapsedMS * this.resource.playbackRate;
                        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
                    }
                    if (!this._updateFPS || this._msToNextUpdate <= 0) {
                        this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0;
                    }
                    if (this.isValid) {
                        this.update();
                    }
                }
            }
            _videoFrameRequestCallback() {
                this.updateFrame();
                if (this.destroyed) {
                    this._videoFrameRequestCallbackHandle = null;
                } else {
                    this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback);
                }
            }
            get isValid() {
                return !!this.resource.videoWidth && !!this.resource.videoHeight;
            }
            async load() {
                if (this._load) {
                    return this._load;
                }
                let resource = this.resource;
                let options = this.options;
                if ((resource.readyState === resource.HAVE_ENOUGH_DATA || resource.readyState === resource.HAVE_FUTURE_DATA) && resource.width && resource.height) {
                    resource.complete = true;
                }
                resource.addEventListener("play", this._onPlayStart);
                resource.addEventListener("pause", this._onPlayStop);
                resource.addEventListener("seeked", this._onSeeked);
                if (this._isSourceReady()) {
                    this._mediaReady();
                } else {
                    if (!options.preload) {
                        resource.addEventListener("canplay", this._onCanPlay);
                    }
                    resource.addEventListener("canplaythrough", this._onCanPlayThrough);
                    resource.addEventListener("error", this._onError, true);
                }
                if (!this.isValid) {
                    resource.addEventListener("loadedmetadata", this._onLoadedMetadata);
                }
                this.alphaMode = await x();
                this._load = new Promise((resolve, reject)=>{
                    if (this.isValid) {
                        resolve(this);
                    } else {
                        this._resolve = resolve;
                        this._reject = reject;
                        if (options.preloadTimeoutMs !== undefined) {
                            this._preloadTimeout = setTimeout(()=>{
                                this._onError(new ErrorEvent(`Preload exceeded timeout of ${options.preloadTimeoutMs}ms`));
                            });
                        }
                        resource.load();
                    }
                });
                return this._load;
            }
            _onError(e) {
                this.resource.removeEventListener("error", this._onError, true);
                this.emit("error", e);
                if (this._reject) {
                    this._reject(e);
                    this._reject = null;
                    this._resolve = null;
                }
            }
            _isSourcePlaying() {
                let resource = this.resource;
                return !resource.paused && !resource.ended;
            }
            _isSourceReady() {
                return this.resource.readyState > 2;
            }
            _onPlayStart() {
                this._configureAutoUpdate();
            }
            _onPlayStop() {
                this._configureAutoUpdate();
            }
            _onSeeked() {
                if (this._autoUpdate && !this._isSourcePlaying()) {
                    this._msToNextUpdate = 0;
                    this.updateFrame();
                    this._msToNextUpdate = 0;
                }
            }
            _onLoadedMetadata() {
                if (this.isValid) {
                    this._mediaReady();
                }
            }
            _onCanPlay() {
                this.resource.removeEventListener("canplay", this._onCanPlay);
                this._mediaReady();
            }
            _onCanPlayThrough() {
                this.resource.removeEventListener("canplaythrough", this._onCanPlayThrough);
                if (this._preloadTimeout) {
                    clearTimeout(this._preloadTimeout);
                    this._preloadTimeout = undefined;
                }
                this._mediaReady();
            }
            _mediaReady() {
                let resource = this.resource;
                if (this.isValid) {
                    this.isReady = true;
                    this.resize(resource.videoWidth, resource.videoHeight);
                }
                this._msToNextUpdate = 0;
                this.updateFrame();
                this._msToNextUpdate = 0;
                if (this._resolve && this.isValid) {
                    this._resolve(this);
                    this._resolve = null;
                    this._reject = null;
                }
                if (this._isSourcePlaying()) {
                    this._onPlayStart();
                } else if (this.autoPlay) {
                    this.resource.play();
                }
            }
            destroy() {
                this._configureAutoUpdate();
                let resource = this.resource;
                if (resource) {
                    resource.removeEventListener("play", this._onPlayStart);
                    resource.removeEventListener("pause", this._onPlayStop);
                    resource.removeEventListener("seeked", this._onSeeked);
                    resource.removeEventListener("canplay", this._onCanPlay);
                    resource.removeEventListener("canplaythrough", this._onCanPlayThrough);
                    resource.removeEventListener("loadedmetadata", this._onLoadedMetadata);
                    resource.removeEventListener("error", this._onError, true);
                    resource.pause();
                    resource.src = "";
                    resource.load();
                }
                super.destroy();
            }
            get autoUpdate() {
                return this._autoUpdate;
            }
            set autoUpdate(e) {
                if (e !== this._autoUpdate) {
                    this._autoUpdate = e;
                    this._configureAutoUpdate();
                }
            }
            get updateFPS() {
                return this._updateFPS;
            }
            set updateFPS(e) {
                if (e !== this._updateFPS) {
                    this._updateFPS = e;
                    this._configureAutoUpdate();
                }
            }
            _configureAutoUpdate() {
                this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (y.Ticker.shared.remove(this.updateFrame, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (y.Ticker.shared.add(this.updateFrame, this), this._isConnectedToTicker = true, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (y.Ticker.shared.remove(this.updateFrame, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0));
            }
            static test(e) {
                return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement;
            }
        };
        T.extension = s.ExtensionType.TextureSource;
        T.defaultOptions = {
            ...E.TextureSource.defaultOptions,
            autoLoad: true,
            autoPlay: true,
            updateFPS: 0,
            crossorigin: true,
            loop: false,
            muted: true,
            playsinline: true,
            preload: false
        };
        T.MIME_TYPES = {
            ogv: "video/ogg",
            mov: "video/quicktime",
            m4v: "video/mp4"
        };
        e.s([
            "VideoSource",
            0,
            T
        ], 613514);
        var P = e.i(3165);
        var v = e.i(337654);
        let k = [];
        function S(e = {}) {
            let t = e && e.resource;
            let s = t ? e.resource : e;
            let r = t ? e : {
                resource: e
            };
            for(let e = 0; e < k.length; e++){
                let t = k[e];
                if (t.test(s)) {
                    return new t(r);
                }
            }
            throw Error(`Could not find a source type for resource: ${r.resource}`);
        }
        function C(e = {}, t = false) {
            let s = e && e.resource;
            let r = s ? e.resource : e;
            let i = s ? e : {
                resource: e
            };
            if (!t && P.Cache.has(r)) {
                return P.Cache.get(r);
            }
            let a = new v.Texture({
                source: S(i)
            });
            a.on("destroy", ()=>{
                if (P.Cache.has(r)) {
                    P.Cache.remove(r);
                }
            });
            if (!t) {
                P.Cache.set(r, a);
            }
            return a;
        }
        function B(source, t = false) {
            if (typeof source === "string") {
                return P.Cache.get(source);
            }
            if (source instanceof E.TextureSource) {
                return new v.Texture({
                    source
                });
            }
            return C(source, t);
        }
        s.extensions.handleByList(s.ExtensionType.TextureSource, k);
        v.Texture.from = B;
        E.TextureSource.from = S;
        e.s([
            "autoDetectSource",
            0,
            (e = {})=>S(e),
            "resourceToTexture",
            0,
            C,
            "textureFrom",
            0,
            B
        ], 379412);
        s.extensions.add(c, A, _, T, g.ImageSource, f.CanvasSource, m.BufferImageSource);
        e.s([], 123821);
    },
    24880,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var s = e.i(317765);
        class r extends s.TextureSource {
            constructor(e){
                super(e);
                this.uploadMethodId = "image";
                this.autoGarbageCollect = true;
            }
            static test(e) {
                return globalThis.HTMLImageElement && e instanceof HTMLImageElement || typeof ImageBitmap !== "undefined" && e instanceof ImageBitmap || globalThis.VideoFrame && e instanceof VideoFrame;
            }
        }
        r.extension = t.ExtensionType.TextureSource;
        e.s([
            "ImageSource",
            0,
            r
        ]);
    },
    958348,
    35585,
    5321,
    997322,
    297801,
    438323,
    402247,
    707676,
    392695,
    (e)=>{
        "use strict";
        var t;
        var s = e.i(78278);
        t = r || {};
        t[t.Low = 0] = "Low";
        t[t.Normal = 1] = "Normal";
        t[t.High = 2] = "High";
        var r = t;
        e.s([
            "LoaderParserPriority",
            0,
            r
        ], 35585);
        var i = e.i(562140);
        var a = e.i(787653);
        function o(e) {
            if (typeof e !== "string") {
                throw TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
            }
        }
        function n(e) {
            return e.split("?")[0].split("#")[0];
        }
        let l = {
            toPosix: (e)=>e.replace(RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "/"),
            isUrl (e) {
                return /^https?:/.test(this.toPosix(e));
            },
            isDataUrl: (e)=>/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e),
            isBlobUrl: (e)=>e.startsWith("blob:"),
            hasProtocol (e) {
                return /^[^/:]+:/.test(this.toPosix(e));
            },
            getProtocol (e) {
                o(e);
                e = this.toPosix(e);
                let t = /^file:\/\/\//.exec(e);
                if (t) {
                    return t[0];
                }
                let s = /^[^/:]+:\/{0,2}/.exec(e);
                if (s) {
                    return s[0];
                }
                return "";
            },
            toAbsolute (e, t, s) {
                o(e);
                if (this.isDataUrl(e) || this.isBlobUrl(e)) {
                    return e;
                }
                let r = n(this.toPosix(t ?? a.DOMAdapter.get().getBaseUrl()));
                let i = n(this.toPosix(s ?? this.rootname(r)));
                if ((e = this.toPosix(e)).startsWith("/")) {
                    return l.join(i, e.slice(1));
                }
                if (this.isAbsolute(e)) {
                    return e;
                }
                return this.join(r, e);
            },
            normalize (e) {
                o(e);
                if (e.length === 0) {
                    return ".";
                }
                if (this.isDataUrl(e) || this.isBlobUrl(e)) {
                    return e;
                }
                e = this.toPosix(e);
                let t = "";
                let s = e.startsWith("/");
                if (this.hasProtocol(e)) {
                    t = this.rootname(e);
                    e = e.slice(t.length);
                }
                let r = e.endsWith("/");
                if ((e = ((e, t)=>{
                    let s = "";
                    let r = 0;
                    let i = -1;
                    let a = 0;
                    let o = -1;
                    for(let n = 0; n <= e.length; ++n){
                        if (n < e.length) {
                            o = e.charCodeAt(n);
                        } else if (o === 47) {
                            break;
                        } else {
                            o = 47;
                        }
                        if (o === 47) {
                            if (i === n - 1 || a === 1) ;
                            else if (i !== n - 1 && a === 2) {
                                if (s.length < 2 || r !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
                                    if (s.length > 2) {
                                        let e = s.lastIndexOf("/");
                                        if (e !== s.length - 1) {
                                            if (-1 === e) {
                                                s = "";
                                                r = 0;
                                            } else {
                                                r = (s = s.slice(0, e)).length - 1 - s.lastIndexOf("/");
                                            }
                                            i = n;
                                            a = 0;
                                            continue;
                                        }
                                    } else if (s.length === 2 || s.length === 1) {
                                        s = "";
                                        r = 0;
                                        i = n;
                                        a = 0;
                                        continue;
                                    }
                                }
                                if (t) {
                                    if (s.length > 0) {
                                        s += "/..";
                                    } else {
                                        s = "..";
                                    }
                                    r = 2;
                                }
                            } else {
                                if (s.length > 0) {
                                    s += `/${e.slice(i + 1, n)}`;
                                } else {
                                    s = e.slice(i + 1, n);
                                }
                                r = n - i - 1;
                            }
                            i = n;
                            a = 0;
                        } else {
                            if (o === 46 && -1 !== a) {
                                ++a;
                            } else {
                                a = -1;
                            }
                        }
                    }
                    return s;
                })(e, false)).length > 0 && r) {
                    e += "/";
                }
                if (s) {
                    return `/${e}`;
                }
                return t + e;
            },
            isAbsolute (e) {
                o(e);
                e = this.toPosix(e);
                return !!this.hasProtocol(e) || e.startsWith("/");
            },
            join (...e) {
                let t;
                if (e.length === 0) {
                    return ".";
                }
                for(let s = 0; s < e.length; ++s){
                    let r = e[s];
                    o(r);
                    if (r.length > 0) {
                        if (t === undefined) {
                            t = r;
                        } else {
                            let i = e[s - 1] ?? "";
                            if (this.joinExtensions.includes(this.extname(i).toLowerCase())) {
                                t += `/../${r}`;
                            } else {
                                t += `/${r}`;
                            }
                        }
                    }
                }
                if (t === undefined) {
                    return ".";
                }
                return this.normalize(t);
            },
            dirname (e) {
                o(e);
                if (e.length === 0) {
                    return ".";
                }
                let t = (e = this.toPosix(e)).charCodeAt(0);
                let s = t === 47;
                let r = -1;
                let i = true;
                let a = this.getProtocol(e);
                let n = e;
                e = e.slice(a.length);
                for(let s = e.length - 1; s >= 1; --s){
                    if ((t = e.charCodeAt(s)) === 47) {
                        if (!i) {
                            r = s;
                            break;
                        }
                    } else {
                        i = false;
                    }
                }
                if (-1 === r) {
                    if (s) {
                        return "/";
                    }
                    if (this.isUrl(n)) {
                        return a + e;
                    }
                    return a;
                }
                if (s && r === 1) {
                    return "//";
                }
                return a + e.slice(0, r);
            },
            rootname (e) {
                o(e);
                let t = "";
                t = (e = this.toPosix(e)).startsWith("/") ? "/" : this.getProtocol(e);
                if (this.isUrl(e)) {
                    let s = e.indexOf("/", t.length);
                    if (!(t = -1 !== s ? e.slice(0, s) : e).endsWith("/")) {
                        t += "/";
                    }
                }
                return t;
            },
            basename (e, t) {
                let s;
                o(e);
                if (t) {
                    o(t);
                }
                e = n(this.toPosix(e));
                let r = 0;
                let i = -1;
                let a = true;
                if (t !== undefined && t.length > 0 && t.length <= e.length) {
                    if (t.length === e.length && t === e) {
                        return "";
                    }
                    let o = t.length - 1;
                    let n = -1;
                    for(s = e.length - 1; s >= 0; --s){
                        let l = e.charCodeAt(s);
                        if (l === 47) {
                            if (!a) {
                                r = s + 1;
                                break;
                            }
                        } else {
                            if (-1 === n) {
                                a = false;
                                n = s + 1;
                            }
                            o >= 0 && (l === t.charCodeAt(o) ? -1 == --o && (i = s) : (o = -1, i = n));
                        }
                    }
                    if (r === i) {
                        i = n;
                    } else if (-1 === i) {
                        i = e.length;
                    }
                    return e.slice(r, i);
                }
                for(s = e.length - 1; s >= 0; --s){
                    if (e.charCodeAt(s) === 47) {
                        if (!a) {
                            r = s + 1;
                            break;
                        }
                    } else {
                        if (-1 === i) {
                            a = false;
                            i = s + 1;
                        }
                    }
                }
                if (-1 === i) {
                    return "";
                }
                return e.slice(r, i);
            },
            extname (e) {
                o(e);
                e = n(this.toPosix(e));
                let t = -1;
                let s = 0;
                let r = -1;
                let i = true;
                let a = 0;
                for(let o = e.length - 1; o >= 0; --o){
                    let n = e.charCodeAt(o);
                    if (n === 47) {
                        if (!i) {
                            s = o + 1;
                            break;
                        }
                        continue;
                    }
                    if (-1 === r) {
                        i = false;
                        r = o + 1;
                    }
                    n === 46 ? -1 === t ? t = o : a !== 1 && (a = 1) : -1 !== t && (a = -1);
                }
                if (-1 === t || -1 === r || a === 0 || a === 1 && t === r - 1 && t === s + 1) {
                    return "";
                }
                return e.slice(t, r);
            },
            parse (e) {
                let t;
                o(e);
                let s = {
                    root: "",
                    dir: "",
                    base: "",
                    ext: "",
                    name: ""
                };
                if (e.length === 0) {
                    return s;
                }
                let r = (e = n(this.toPosix(e))).charCodeAt(0);
                let i = this.isAbsolute(e);
                s.root = this.rootname(e);
                t = i || this.hasProtocol(e) ? 1 : 0;
                let a = -1;
                let l = 0;
                let h = -1;
                let d = true;
                let u = e.length - 1;
                let c = 0;
                for(; u >= t; --u){
                    if ((r = e.charCodeAt(u)) === 47) {
                        if (!d) {
                            l = u + 1;
                            break;
                        }
                        continue;
                    }
                    if (-1 === h) {
                        d = false;
                        h = u + 1;
                    }
                    r === 46 ? -1 === a ? a = u : c !== 1 && (c = 1) : -1 !== a && (c = -1);
                }
                if (-1 === a || -1 === h || c === 0 || c === 1 && a === h - 1 && a === l + 1) {
                    -1 !== h && (l === 0 && i ? s.base = s.name = e.slice(1, h) : s.base = s.name = e.slice(l, h));
                } else {
                    if (l === 0 && i) {
                        s.name = e.slice(1, a);
                        s.base = e.slice(1, h);
                    } else {
                        s.name = e.slice(l, a);
                        s.base = e.slice(l, h);
                    }
                    s.ext = e.slice(a, h);
                }
                s.dir = this.dirname(e);
                return s;
            },
            sep: "/",
            delimiter: ":",
            joinExtensions: [
                ".html"
            ]
        };
        e.s([
            "path",
            0,
            l
        ], 5321);
        var h = e.i(848790);
        function d(e) {
            let t = e.match(/\{(.*?)\}/g);
            let s = [];
            if (t) {
                let r = [];
                t.forEach((e)=>{
                    let t = e.substring(1, e.length - 1).split(",");
                    r.push(t);
                });
                (function e(t, s, r, i, a) {
                    let o = s[r];
                    for(let n = 0; n < o.length; n++){
                        let l = o[n];
                        if (r < s.length - 1) {
                            e(t.replace(i[r], l), s, r + 1, i, a);
                        } else {
                            a.push(t.replace(i[r], l));
                        }
                    }
                })(e, r, 0, t, s);
            } else {
                s.push(e);
            }
            return s;
        }
        e.s([
            "createStringVariations",
            0,
            d
        ], 997322);
        let u = (e)=>!Array.isArray(e);
        e.s([
            "isSingleItem",
            0,
            u
        ], 297801);
        class c {
            constructor(){
                this._defaultBundleIdentifierOptions = {
                    connector: "-",
                    createBundleAssetId: (e, t)=>`${e}${this._bundleIdConnector}${t}`,
                    extractAssetIdFromBundle: (e, t)=>t.replace(`${e}${this._bundleIdConnector}`, "")
                };
                this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector;
                this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId;
                this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle;
                this._assetMap = {};
                this._preferredOrder = [];
                this._parsers = [];
                this._resolverHash = {};
                this._bundles = {};
            }
            setBundleIdentifier(e) {
                this._bundleIdConnector = e.connector ?? this._bundleIdConnector;
                this._createBundleAssetId = e.createBundleAssetId ?? this._createBundleAssetId;
                this._extractAssetIdFromBundle = e.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle;
                if (this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") {
                    throw Error("[Resolver] GenerateBundleAssetId are not working correctly");
                }
            }
            prefer(...e) {
                e.forEach((e)=>{
                    this._preferredOrder.push(e);
                    if (!e.priority) {
                        e.priority = Object.keys(e.params);
                    }
                });
                this._resolverHash = {};
            }
            set basePath(e) {
                this._basePath = e;
            }
            get basePath() {
                return this._basePath;
            }
            set rootPath(e) {
                this._rootPath = e;
            }
            get rootPath() {
                return this._rootPath;
            }
            get parsers() {
                return this._parsers;
            }
            reset() {
                this.setBundleIdentifier(this._defaultBundleIdentifierOptions);
                this._assetMap = {};
                this._preferredOrder = [];
                this._resolverHash = {};
                this._rootPath = null;
                this._basePath = null;
                this._manifest = null;
                this._bundles = {};
                this._defaultSearchParams = null;
            }
            setDefaultSearchParams(e) {
                if (typeof e === "string") {
                    this._defaultSearchParams = e;
                } else {
                    this._defaultSearchParams = Object.keys(e).map((t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");
                }
            }
            getAlias(e) {
                let { alias, src } = e;
                return h.convertToList(alias || src, (e)=>{
                    if (typeof e === "string") {
                        return e;
                    }
                    if (Array.isArray(e)) {
                        return e.map((e)=>e?.src ?? e);
                    }
                    if (e?.src) {
                        return e.src;
                    }
                    return e;
                }, true);
            }
            removeAlias(e, t) {
                !this._assetMap[e] || t && t !== this._resolverHash[e] || (delete this._resolverHash[e], delete this._assetMap[e]);
            }
            addManifest(e) {
                if (this._manifest) {
                    i.warn("[Resolver] Manifest already exists, this will be overwritten");
                }
                this._manifest = e;
                e.bundles.forEach((e)=>{
                    this.addBundle(e.name, e.assets);
                });
            }
            addBundle(e, t) {
                let s = [];
                let r = t;
                if (!Array.isArray(t)) {
                    r = Object.entries(t).map(([alias, t])=>{
                        if (typeof t === "string" || Array.isArray(t)) {
                            return {
                                alias,
                                src: t
                            };
                        }
                        return {
                            alias,
                            ...t
                        };
                    });
                }
                r.forEach((t)=>{
                    let r;
                    let t_src = t.src;
                    let t_alias = t.alias;
                    if (typeof t_alias === "string") {
                        let t = this._createBundleAssetId(e, t_alias);
                        s.push(t);
                        r = [
                            t_alias,
                            t
                        ];
                    } else {
                        let t = t_alias.map((t)=>this._createBundleAssetId(e, t));
                        s.push(...t);
                        r = [
                            ...t_alias,
                            ...t
                        ];
                    }
                    this.add({
                        ...t,
                        alias: r,
                        src: t_src
                    });
                });
                this._bundles[e] = s;
            }
            add(e) {
                let t;
                let s = [];
                if (Array.isArray(e)) {
                    s.push(...e);
                } else {
                    s.push(e);
                }
                t = (e)=>{
                    if (this.hasKey(e)) {
                        i.warn(`[Resolver] already has key: ${e} overwriting`);
                    }
                };
                h.convertToList(s).forEach((e)=>{
                    let { src } = e;
                    let { data, format, loadParser, parser } = e;
                    let n = h.convertToList(src).map((e)=>{
                        if (typeof e === "string") {
                            return d(e);
                        }
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return [
                            e
                        ];
                    });
                    let aliases = this.getAlias(e);
                    if (Array.isArray(aliases)) {
                        aliases.forEach(t);
                    } else {
                        t(aliases);
                    }
                    let u = [];
                    let c = (e)=>{
                        let t = this._parsers.find((t)=>t.test(e));
                        return {
                            src: e,
                            ...t?.parse(e)
                        };
                    };
                    n.forEach((t)=>{
                        t.forEach((t)=>{
                            let s = {};
                            if (typeof t !== "object") {
                                s = c(t);
                            } else {
                                data = t.data ?? data;
                                format = t.format ?? format;
                                if (t.loadParser || t.parser) {
                                    loadParser = t.loadParser ?? loadParser;
                                    parser = t.parser ?? parser;
                                }
                                s = {
                                    ...c(t.src),
                                    ...t
                                };
                            }
                            if (!aliases) {
                                throw Error(`[Resolver] alias is undefined for this asset: ${s.src}`);
                            }
                            s = this._buildResolvedAsset(s, {
                                aliases,
                                data,
                                format,
                                loadParser,
                                parser,
                                progressSize: e.progressSize
                            });
                            u.push(s);
                        });
                    });
                    aliases.forEach((e)=>{
                        this._assetMap[e] = u;
                    });
                });
            }
            resolveBundle(e) {
                let t = u(e);
                e = h.convertToList(e);
                let s = {};
                e.forEach((e)=>{
                    let t = this._bundles[e];
                    if (t) {
                        let r = this.resolve(t);
                        let i = {};
                        for(let t in r){
                            let s = r[t];
                            i[this._extractAssetIdFromBundle(e, t)] = s;
                        }
                        s[e] = i;
                    }
                });
                if (t) {
                    return s[e[0]];
                }
                return s;
            }
            resolveUrl(e) {
                let t = this.resolve(e);
                if (typeof e !== "string") {
                    let e = {};
                    for(let s in t){
                        e[s] = t[s].src;
                    }
                    return e;
                }
                return t.src;
            }
            resolve(e) {
                let t = u(e);
                e = h.convertToList(e);
                let s = {};
                e.forEach((e)=>{
                    if (!this._resolverHash[e]) {
                        if (this._assetMap[e]) {
                            let t = this._assetMap[e];
                            let s = this._getPreferredOrder(t);
                            s?.priority.forEach((e)=>{
                                s.params[e].forEach((s)=>{
                                    let r = t.filter((t)=>!!t[e] && t[e] === s);
                                    if (r.length) {
                                        t = r;
                                    }
                                });
                            });
                            this._resolverHash[e] = t[0];
                        } else {
                            this._resolverHash[e] = this._buildResolvedAsset({
                                alias: [
                                    e
                                ],
                                src: e
                            }, {});
                        }
                    }
                    s[e] = this._resolverHash[e];
                });
                if (t) {
                    return s[e[0]];
                }
                return s;
            }
            hasKey(e) {
                return !!this._assetMap[e];
            }
            hasBundle(e) {
                return !!this._bundles[e];
            }
            _getPreferredOrder(e) {
                for(let t = 0; t < e.length; t++){
                    let s = e[t];
                    let r = this._preferredOrder.find((e)=>e.params.format.includes(s.format));
                    if (r) {
                        return r;
                    }
                }
                return this._preferredOrder[0];
            }
            _appendDefaultSearchParams(e) {
                if (!this._defaultSearchParams) {
                    return e;
                }
                let t = /\?/.test(e) ? "&" : "?";
                return `${e}${t}${this._defaultSearchParams}`;
            }
            _buildResolvedAsset(e, t) {
                let { aliases, data, loadParser, parser, format, progressSize } = t;
                if (this._basePath || this._rootPath) {
                    e.src = l.toAbsolute(e.src, this._basePath, this._rootPath);
                }
                e.alias = aliases ?? e.alias ?? [
                    e.src
                ];
                e.src = this._appendDefaultSearchParams(e.src);
                e.data = {
                    ...data || {},
                    ...e.data
                };
                e.loadParser = loadParser ?? e.loadParser;
                e.parser = parser ?? e.parser;
                e.format = format ?? e.format ?? A(e.src);
                if (progressSize !== undefined) {
                    e.progressSize = progressSize;
                }
                return e;
            }
        }
        function A(e) {
            return e.split(".").pop().split("?").shift().split("#").shift();
        }
        c.RETINA_PREFIX = /@([0-9\.]+)x/;
        e.s([
            "Resolver",
            0,
            c,
            "getUrlExtension",
            0,
            A
        ], 438323);
        let p = (e, t)=>{
            let s = t.split("?")[1];
            if (s) {
                e += `?${s}`;
            }
            return e;
        };
        e.s([
            "copySearchParams",
            0,
            p
        ], 402247);
        var _ = e.i(337654);
        var m = e.i(539088);
        var f = e.i(317765);
        let g = class e {
            constructor(texture_1, data_1){
                this.linkedSheets = [];
                let s = texture_1;
                if (texture_1?.source instanceof f.TextureSource) {
                    s = {
                        texture: texture_1,
                        data: data_1
                    };
                }
                const { texture, data, cachePrefix = "" } = s;
                this.cachePrefix = cachePrefix;
                this._texture = texture instanceof _.Texture ? texture : null;
                this.textureSource = texture.source;
                this.textures = {};
                this.animations = {};
                this.data = data;
                const o = parseFloat(data.meta.scale);
                if (o) {
                    this.resolution = o;
                    texture.source.resolution = this.resolution;
                } else {
                    this.resolution = texture.source._resolution;
                }
                this._frames = this.data.frames;
                this._frameKeys = Object.keys(this._frames);
                this._batchIndex = 0;
                this._callback = null;
            }
            parse() {
                return new Promise((resolve)=>{
                    this._callback = resolve;
                    this._batchIndex = 0;
                    if (this._frameKeys.length <= e.BATCH_SIZE) {
                        this._processFrames(0);
                        this._processAnimations();
                        this._parseComplete();
                    } else {
                        this._nextBatch();
                    }
                });
            }
            parseSync() {
                this._processFrames(0, true);
                this._processAnimations();
                return this.textures;
            }
            _processFrames(t, s = false) {
                let r = t;
                let i = s ? Infinity : e.BATCH_SIZE;
                while(r - t < i && r < this._frameKeys.length){
                    let e = this._frameKeys[r];
                    let t = this._frames[e];
                    let s = t.frame;
                    if (s) {
                        let frame = null;
                        let trim = null;
                        let a = t.trimmed !== false && t.sourceSize ? t.sourceSize : t.frame;
                        let orig = new m.Rectangle(0, 0, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution);
                        frame = t.rotated ? new m.Rectangle(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.h) / this.resolution, Math.floor(s.w) / this.resolution) : new m.Rectangle(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution);
                        if (t.trimmed !== false && t.spriteSourceSize) {
                            trim = new m.Rectangle(Math.floor(t.spriteSourceSize.x) / this.resolution, Math.floor(t.spriteSourceSize.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution);
                        }
                        this.textures[e] = new _.Texture({
                            source: this.textureSource,
                            frame,
                            orig,
                            trim,
                            rotate: 2 * !!t.rotated,
                            defaultAnchor: t.anchor,
                            defaultBorders: t.borders,
                            label: e.toString()
                        });
                    }
                    r++;
                }
            }
            _processAnimations() {
                let e = this.data.animations || {};
                for(let t in e){
                    this.animations[t] = [];
                    for(let s = 0; s < e[t].length; s++){
                        let r = e[t][s];
                        this.animations[t].push(this.textures[r]);
                    }
                }
            }
            _parseComplete() {
                let _callback = this._callback;
                this._callback = null;
                this._batchIndex = 0;
                _callback.call(this, this.textures);
            }
            _nextBatch() {
                this._processFrames(this._batchIndex * e.BATCH_SIZE);
                this._batchIndex++;
                setTimeout(()=>{
                    if (this._batchIndex * e.BATCH_SIZE < this._frameKeys.length) {
                        this._nextBatch();
                    } else {
                        this._processAnimations();
                        this._parseComplete();
                    }
                }, 0);
            }
            destroy(e = false) {
                for(let e in this.textures){
                    this.textures[e].destroy();
                }
                this._frames = null;
                this._frameKeys = null;
                this.data = null;
                this.textures = null;
                if (e) {
                    this._texture?.destroy();
                    this.textureSource.destroy();
                }
                this._texture = null;
                this.textureSource = null;
                this.linkedSheets = [];
            }
        };
        g.BATCH_SIZE = 1000;
        e.s([
            "Spritesheet",
            0,
            g
        ], 707676);
        let y = [
            "jpg",
            "png",
            "jpeg",
            "avif",
            "webp",
            "basis",
            "etc2",
            "bc7",
            "bc6h",
            "bc5",
            "bc4",
            "bc3",
            "bc2",
            "bc1",
            "eac",
            "astc"
        ];
        let b = {
            extension: s.ExtensionType.Asset,
            cache: {
                test: (e)=>e instanceof g,
                getCacheableAssets: (e, t)=>(function e(t, s, r) {
                        let i = {};
                        t.forEach((e)=>{
                            i[e] = s;
                        });
                        Object.keys(s.textures).forEach((e)=>{
                            i[`${s.cachePrefix}${e}`] = s.textures[e];
                        });
                        if (!r) {
                            let r = l.dirname(t[0]);
                            s.linkedSheets.forEach((t, a)=>{
                                Object.assign(i, e([
                                    `${r}/${s.data.meta.related_multi_packs[a]}`
                                ], t, true));
                            });
                        }
                        return i;
                    })(e, t, false)
            },
            resolver: {
                extension: {
                    type: s.ExtensionType.ResolveParser,
                    name: "resolveSpritesheet"
                },
                test: (e)=>{
                    let t = e.split("?")[0].split(".");
                    let s = t.pop();
                    let r = t.pop();
                    return s === "json" && y.includes(r);
                },
                parse: (e)=>{
                    let t = e.split(".");
                    return {
                        resolution: parseFloat(c.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
                        format: t[t.length - 2],
                        src: e
                    };
                }
            },
            loader: {
                name: "spritesheetLoader",
                id: "spritesheet",
                extension: {
                    type: s.ExtensionType.LoadParser,
                    priority: r.Normal,
                    name: "spritesheetLoader"
                },
                testParse: async (e, t)=>l.extname(t.src).toLowerCase() === ".json" && !!e.frames,
                async parse (e, t, s) {
                    let r;
                    let { texture, imageFilename, textureOptions, cachePrefix } = t?.data ?? {};
                    let h = l.dirname(t.src);
                    if (h && h.lastIndexOf("/") !== h.length - 1) {
                        h += "/";
                    }
                    if (texture instanceof _.Texture) {
                        r = texture;
                    } else {
                        let i = p(h + (imageFilename ?? e.meta.image), t.src);
                        r = (await s.load([
                            {
                                src: i,
                                data: textureOptions
                            }
                        ]))[i];
                    }
                    let d = new g({
                        texture: r.source,
                        data: e,
                        cachePrefix
                    });
                    await d.parse();
                    let u = e?.meta?.related_multi_packs;
                    if (Array.isArray(u)) {
                        let e = [];
                        for (let r of u){
                            if (typeof r !== "string") {
                                continue;
                            }
                            let i = h + r;
                            if (!t.data?.ignoreMultiPack) {
                                i = p(i, t.src);
                                e.push(s.load({
                                    src: i,
                                    data: {
                                        textureOptions,
                                        ignoreMultiPack: true
                                    }
                                }));
                            }
                        }
                        let r = await Promise.all(e);
                        d.linkedSheets = r;
                        r.forEach((e)=>{
                            e.linkedSheets = [
                                d
                            ].concat(d.linkedSheets.filter((t)=>t !== e));
                        });
                    }
                    return d;
                },
                async unload (e, t, s) {
                    await s.unload(e.textureSource._sourceOrigin);
                    e.destroy(false);
                }
            }
        };
        e.s([
            "spritesheetAsset",
            0,
            b
        ], 392695);
        s.extensions.add(b);
        e.s([], 958348);
    }
]);
