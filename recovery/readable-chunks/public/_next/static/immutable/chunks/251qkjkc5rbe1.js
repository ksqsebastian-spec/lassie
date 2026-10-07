;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "d019c078-3816-a5e6-dea4-091cac9f0fcc";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    701503,
    (e)=>{
        "use strict";
        var t;
        var r = e.i(281889);
        var n = e.i(513679);
        function a(e) {
            return typeof e === "function";
        }
        function i(e) {
            return e === null;
        }
        function l(e) {
            return e !== null && typeof e === "object";
        }
        function s(e, t) {
            if (a(e)) {
                return e(t);
            }
            if (e != null) {
                e.current = t;
            }
        }
        function o(...e) {
            let t = e.flat();
            return (e)=>{
                let r = t.map((t)=>s(t, e));
                if (r.some(a)) {
                    return ()=>{
                        for(let e = 0; e < r.length; e++){
                            let n = r[e];
                            if (a(n)) {
                                n();
                            } else {
                                s(t[e], null);
                            }
                        }
                    };
                }
            };
        }
        function useU(...e) {
            return n.useCallback(o(...e), [
                ...e
            ]);
        }
        let hasOwnProperty = Object.prototype.hasOwnProperty;
        function d(e, t) {
            if (Object.is(e, t)) {
                return true;
            }
            if (typeof e !== "object" || e === null || typeof t !== "object" || t === null) {
                return false;
            }
            let r = Object.keys(e);
            let n = Object.keys(t);
            if (r.length !== n.length) {
                return false;
            }
            for (let n of r){
                if (!hasOwnProperty.call(t, n) || !Object.is(e[n], t[n])) {
                    return false;
                }
            }
            return true;
        }
        function useP(e, t, r, a = d) {
            let iRef = n.useRef(undefined);
            let l = ()=>{
                let e = r(t());
                if (iRef.current !== undefined && a(iRef.current, e)) {
                    return iRef.current;
                }
                iRef.current = e;
                return e;
            };
            return n.useSyncExternalStore(e, l, l);
        }
        function f(e) {
            return e;
        }
        function m() {}
        let h = ()=>m;
        function g(store, t, r) {
            return useP(t ? (t)=>store.subscribe(t) : h, t ? ()=>store.state : ()=>store, t ?? f, r);
        }
        let BContext = n.createContext(null);
        function v({ value, children }) {
            return r.jsx(BContext.Provider, {
                value,
                children
            });
        }
        function useY() {
            let e = n.useContext(BContext);
            if (!e) {
                throw Error("usePlayerContext must be used within a Player Provider");
            }
            return e;
        }
        function w(e) {
            let { store } = useY();
            return g(store, e);
        }
        let Container = n.forwardRef(({ children, tabIndex = 0, ...rest }, i)=>{
            let l = n.useContext(BContext)?.setContainer;
            let sRef = n.useRef(null);
            let o = useU(i, sRef);
            n.useEffect(()=>{
                l?.(sRef.current);
                return ()=>l?.(null);
            }, [
                l
            ]);
            return r.jsx("div", {
                ref: o,
                tabIndex,
                ...rest,
                onPointerUp: (e)=>{
                    rest.onPointerUp?.(e);
                    let sRef_current = sRef.current;
                    sRef_current && (sRef_current.contains(document.activeElement) && document.activeElement !== document.body || sRef_current.focus({
                        preventScroll: true
                    }));
                },
                children
            });
        });
        function P(e) {
            let tRef = n.useRef(e);
            tRef.current = e;
            return tRef;
        }
        function useK(e, t, r) {
            let aRef = n.useRef(null);
            let i = P(t);
            let l = P(r);
            n.useEffect(()=>{
                if (aRef.current !== null) {
                    clearTimeout(aRef.current);
                    aRef.current = null;
                } else {
                    i.current?.();
                }
                return ()=>{
                    aRef.current = setTimeout(()=>{
                        l.current?.();
                        e.destroy();
                    }, 0);
                };
            }, [
                e
            ]);
        }
        var S = class {
            #e = new AbortController;
            #t = new Map;
            get base() {
                return this.#e.signal;
            }
            clear() {
                for (let e of this.#t.values()){
                    e.abort();
                }
                this.#t.clear();
            }
            reset() {
                this.clear();
                this.#e.abort();
                this.#e = new AbortController;
            }
            supersede(e) {
                this.#t.get(e)?.abort();
                let t = new AbortController;
                this.#t.set(e, t);
                const r = [
                    this.#e.signal,
                    t.signal
                ];
                if ("any" in AbortSignal) {
                    return AbortSignal.any(r);
                }
                let n = new AbortController;
                for (let e of r){
                    if (e.aborted) {
                        n.abort(e.reason);
                        break;
                    }
                    e.addEventListener("abort", ()=>n.abort(e.reason), {
                        signal: n.signal
                    });
                }
                return n.signal;
            }
        };
        var C = class extends Error {
            code;
            cause;
            constructor(e, t){
                super(t?.message ?? e);
                this.name = "StoreError";
                this.code = e;
                this.cause = t?.cause;
            }
        };
        function A() {
            throw new C("NO_TARGET");
        }
        function M() {
            throw new C("DESTROYED");
        }
        let j = false;
        let E = new Set;
        function T() {
            for (let e of (j = false, E)){
                e.flush();
            }
            E.clear();
        }
        let hasOwnProperty_1 = Object.prototype.hasOwnProperty;
        var R = class {
            #r;
            #n = new Set;
            #a = false;
            constructor(e){
                this.#r = Object.freeze({
                    ...e
                });
            }
            get current() {
                return this.#r;
            }
            patch(e) {
                let t = {
                    ...this.#r
                };
                let r = false;
                for(let n in e){
                    if (!hasOwnProperty_1.call(e, n)) {
                        continue;
                    }
                    let a = e[n];
                    if (!Object.is(this.#r[n], a)) {
                        t[n] = a;
                        r = true;
                    }
                }
                if (r) {
                    this.#r = Object.freeze(t);
                    this.#i();
                }
            }
            subscribe(e, t) {
                let r = t?.signal;
                if (r?.aborted) {
                    return m;
                }
                this.#n.add(e);
                if (!r) {
                    return ()=>this.#n.delete(e);
                }
                let n = ()=>this.#n.delete(e);
                r.addEventListener("abort", n, {
                    once: true
                });
                return ()=>{
                    r.removeEventListener("abort", n);
                    this.#n.delete(e);
                };
            }
            flush() {
                if (this.#a) {
                    for (let e of (this.#a = false, this.#n)){
                        e();
                    }
                }
            }
            #i() {
                this.#a = true;
                E.add(this);
                if (!j) {
                    j = true;
                    queueMicrotask(T);
                }
            }
        };
        function N(e) {
            return new R(e);
        }
        let SYMBOL_VIDEOJSSTORE = Symbol.for("@videojs/store");
        function F(media) {
            return l(media) && "paused" in media && "ended" in media && a(media.pause);
        }
        function D(media) {
            return l(media) && "currentTime" in media && "duration" in media && "seeking" in media;
        }
        function $(media) {
            return l(media) && "src" in media && "currentSrc" in media && "readyState" in media && a(media.load);
        }
        function O(media) {
            return l(media) && "volume" in media && "muted" in media;
        }
        function z(media) {
            return l(media) && "playbackRate" in media;
        }
        function B(media) {
            return l(media) && "buffered" in media && "seekable" in media;
        }
        function H(media) {
            return l(media) && "textTracks" in media;
        }
        function I(media) {
            return l(media) && "remote" in media && l(media.remote);
        }
        function q(e, t, r, n) {
            e.addEventListener(t, r, n);
            return ()=>e.removeEventListener(t, r, n);
        }
        function _(e) {
            let t = [];
            for(let r = 0; r < e.length; r++){
                t.push([
                    e.start(r),
                    e.end(r)
                ]);
            }
            return t;
        }
        let U = {
            name: "buffer",
            state: ()=>({
                    buffered: [],
                    seekable: []
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!B(media)) {
                    return;
                }
                let a = ()=>set({
                        buffered: _(media.buffered),
                        seekable: _(media.seekable)
                    });
                a();
                q(media, "progress", a, {
                    signal
                });
                q(media, "emptied", a, {
                    signal
                });
            }
        };
        function W(media, t, r) {
            return new Promise((resolve, reject)=>{
                let i = ()=>{
                    reject(r?.signal?.reason ?? "Aborted");
                };
                if (r?.signal?.aborted) {
                    i();
                } else {
                    r?.signal?.addEventListener("abort", i, {
                        once: true
                    });
                    media.addEventListener(t, (e)=>{
                        r?.signal?.removeEventListener("abort", i);
                        resolve(e);
                    }, {
                        ...r,
                        once: true
                    });
                }
            });
        }
        [
            "textarea",
            "select",
            "input:not([type])",
            ...[
                "text",
                "search",
                "url",
                "tel",
                "email",
                "password",
                "number"
            ].map((e)=>`input[type="${e}"]`),
            '[contenteditable]:not([contenteditable="false"])'
        ].join(",");
        let K = new WeakMap;
        function Z(e) {
            if (l(e.remote) && "state" in e.remote && "prompt" in e.remote) {
                return e.remote;
            }
        }
        function G(media) {
            return Z(media)?.state === "connected";
        }
        async function X(media) {
            let t = Z(media);
            if (!t) {
                throw new DOMException("Remote playback not supported", "NotSupportedError");
            }
            return t.prompt();
        }
        let Y = {
            name: "controls",
            state: ({ get, set })=>({
                    userActive: true,
                    controlsVisible: true,
                    toggleControls () {
                        let r = !get().userActive;
                        set({
                            userActive: r,
                            controlsVisible: r
                        });
                        return r;
                    }
                }),
            attach ({ target, signal, get, set }) {
                let a;
                let { media, container } = target;
                if (!F(media) || i(container)) {
                    return;
                }
                let o = (e)=>e || media.paused || G(media) || Z(media)?.state === "connecting";
                function u() {
                    clearTimeout(a);
                    a = undefined;
                }
                function c() {
                    u();
                    a = setTimeout(p, 2000);
                }
                function d() {
                    if (!get().userActive) {
                        set({
                            userActive: true,
                            controlsVisible: true
                        });
                    }
                    c();
                }
                function p() {
                    u();
                    set({
                        userActive: false,
                        controlsVisible: o(false)
                    });
                }
                set({
                    toggleControls: ()=>{
                        if (get().controlsVisible) {
                            p();
                        } else {
                            d();
                        }
                        return get().controlsVisible;
                    }
                });
                let f = 0;
                let m = ()=>{
                    let { userActive } = get();
                    set({
                        controlsVisible: o(userActive)
                    });
                    if (!media.paused && userActive) {
                        c();
                    }
                };
                q(container, "pointermove", d, {
                    signal
                });
                q(container, "pointerdown", ()=>{
                    f = Date.now();
                }, {
                    signal
                });
                q(container, "pointerup", (e)=>{
                    if (e.pointerType === "touch" && Date.now() - f < 250) {
                        if (K.get(container)?.bindings.some((e)=>e.type === "tap" && e.action === "toggleControls" && (!e.pointer || e.pointer === "touch"))) {
                            return;
                        }
                        let t = [
                            media,
                            container
                        ].includes(e.target);
                        if (get().controlsVisible && t) {
                            p();
                        } else {
                            d();
                        }
                    } else {
                        d();
                    }
                }, {
                    signal
                });
                q(container, "keyup", d, {
                    signal
                });
                q(container, "focusin", d, {
                    signal
                });
                q(container, "mouseleave", p, {
                    signal
                });
                q(media, "play", m, {
                    signal
                });
                q(media, "pause", m, {
                    signal
                });
                q(media, "ended", m, {
                    signal
                });
                if (I(media)) {
                    let e = ()=>{
                        let { userActive } = get();
                        set({
                            controlsVisible: o(userActive)
                        });
                    };
                    q(media.remote, "connect", e, {
                        signal
                    });
                    q(media.remote, "connecting", e, {
                        signal
                    });
                    q(media.remote, "disconnect", e, {
                        signal
                    });
                }
                signal.addEventListener("abort", u, {
                    once: true
                });
                c();
            }
        };
        let J = {
            name: "error",
            state: ({ set })=>({
                    error: null,
                    dismissError () {
                        set({
                            error: null
                        });
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (l(media) && "error" in media) {
                    q(media, "error", ()=>set({
                            error: media.error
                        }), {
                        signal
                    });
                    q(media, "emptied", ()=>set({
                            error: null
                        }), {
                        signal
                    });
                }
            }
        };
        function Q(e) {
            if (!(e instanceof Element)) {
                return false;
            }
            try {
                return e.matches(":fullscreen");
            } catch  {
                return false;
            }
        }
        function ee(container, media) {
            let r;
            if (media.webkitPresentationMode === "fullscreen") {
                return true;
            }
            let n = (r = document).fullscreenElement ?? r.webkitFullscreenElement ?? null;
            return !!(n && (n === container || n === media) || Q(container) || Q(media)) || (media.isFullscreen ?? false);
        }
        async function et(container, media) {
            let r = document;
            if (container && (r.fullscreenEnabled || r.webkitFullscreenEnabled)) {
                if (a(container.requestFullscreen)) {
                    return container.requestFullscreen();
                }
                if (a(container.webkitRequestFullscreen)) {
                    return container.webkitRequestFullscreen();
                }
            }
            if (a(media.webkitSetPresentationMode)) {
                return void media.webkitSetPresentationMode("fullscreen");
            }
            if (a(media.requestFullscreen)) {
                return media.requestFullscreen();
            }
        }
        async function er(media) {
            let t = document;
            if (media.webkitPresentationMode === "fullscreen" && a(media.webkitSetPresentationMode)) {
                return void media.webkitSetPresentationMode("inline");
            }
            if (a(t.exitFullscreen)) {
                return t.exitFullscreen();
            }
            if (a(t.webkitExitFullscreen)) {
                return t.webkitExitFullscreen();
            }
            if (a(media.exitFullscreen)) {
                return media.exitFullscreen();
            }
        }
        function en(media) {
            return media.webkitPresentationMode === "picture-in-picture" || document.pictureInPictureElement === media || (media.isPictureInPicture ?? false);
        }
        async function ea(media) {
            if (a(media.webkitSetPresentationMode)) {
                return void media.webkitSetPresentationMode("picture-in-picture");
            }
            if (a(media.requestPictureInPicture)) {
                return media.requestPictureInPicture();
            }
        }
        async function ei(media) {
            if (media.webkitPresentationMode === "picture-in-picture" && a(media.webkitSetPresentationMode)) {
                return void media.webkitSetPresentationMode("inline");
            }
            if (a(document.exitPictureInPicture)) {
                return document.exitPictureInPicture();
            }
            if (a(media.exitPictureInPicture)) {
                return media.exitPictureInPicture();
            }
        }
        let el = {
            name: "fullscreen",
            state: ({ target })=>({
                    fullscreen: false,
                    fullscreenAvailability: "unavailable",
                    async requestFullscreen () {
                        let { media, container } = target();
                        if (en(media)) {
                            await ei(media);
                        }
                        return et(container, media);
                    },
                    async exitFullscreen () {
                        let { media } = target();
                        return er(media);
                    },
                    async toggleFullscreen () {
                        let { media, container } = target();
                        if (ee(container, media)) {
                            return er(media);
                        }
                        if (en(media)) {
                            await ei(media);
                        }
                        return et(container, media);
                    }
                }),
            attach ({ target, signal, set }) {
                let n;
                let { media, container } = target;
                set({
                    fullscreenAvailability: (n = document).fullscreenEnabled || n.webkitFullscreenEnabled || a(document.createElement("video").webkitSetPresentationMode) ? "available" : "unsupported"
                });
                let s = ()=>set({
                        fullscreen: ee(container, media)
                    });
                s();
                q(document, "fullscreenchange", s, {
                    signal
                });
                q(document, "webkitfullscreenchange", s, {
                    signal
                });
                if ("webkitPresentationMode" in media) {
                    q(media, "webkitpresentationmodechanged", s, {
                        signal
                    });
                }
            }
        };
        let es = {
            name: "pip",
            state: ({ target })=>({
                    pip: false,
                    pipAvailability: "unavailable",
                    async requestPictureInPicture () {
                        let { media, container } = target();
                        if (ee(container, media)) {
                            await er(media);
                        }
                        return ea(media);
                    },
                    async exitPictureInPicture () {
                        let { media } = target();
                        return ei(media);
                    },
                    async togglePictureInPicture () {
                        let { media, container } = target();
                        if (en(media)) {
                            return ei(media);
                        }
                        if (ee(container, media)) {
                            await er(media);
                        }
                        return ea(media);
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                set({
                    pipAvailability: !(()=>{
                        if (document.pictureInPictureEnabled) {
                            let e = /.*Version\/.*Safari\/.*/.test(navigator.userAgent);
                            let t = typeof matchMedia === "function" && matchMedia("(display-mode: standalone)").matches;
                            return !e || !t;
                        }
                        return a(document.createElement("video").webkitSetPresentationMode);
                    })() ? "unsupported" : "available"
                });
                let i = ()=>set({
                        pip: en(media)
                    });
                i();
                q(media, "enterpictureinpicture", i, {
                    signal
                });
                q(media, "leavepictureinpicture", i, {
                    signal
                });
                if ("webkitPresentationMode" in media) {
                    q(media, "webkitpresentationmodechanged", i, {
                        signal
                    });
                }
            }
        };
        let eo = {
            name: "playback",
            state: ({ target })=>({
                    paused: true,
                    ended: false,
                    started: false,
                    waiting: false,
                    play: ()=>target().media.play(),
                    pause () {
                        let { media } = target();
                        if (F(media)) {
                            media.pause();
                        }
                    },
                    togglePaused () {
                        let media = target().media;
                        return !!F(media) && (media.paused ? (media.play(), true) : (media.pause(), false));
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!F(media) || !D(media) || !$(media)) {
                    return;
                }
                let a = ()=>set({
                        paused: media.paused,
                        ended: media.ended,
                        started: !media.paused || media.currentTime > 0,
                        waiting: media.readyState < HTMLMediaElement.HAVE_FUTURE_DATA && !media.paused
                    });
                a();
                q(media, "emptied", a, {
                    signal
                });
                q(media, "play", a, {
                    signal
                });
                q(media, "pause", a, {
                    signal
                });
                q(media, "ended", a, {
                    signal
                });
                q(media, "playing", a, {
                    signal
                });
                q(media, "waiting", a, {
                    signal
                });
                q(media, "seeked", a, {
                    signal
                });
            }
        };
        let playbackRates = [
            0.2,
            0.5,
            0.7,
            1,
            1.2,
            1.5,
            1.7,
            2
        ];
        let ec = {
            name: "playbackRate",
            state: ({ target })=>({
                    playbackRates,
                    playbackRate: 1,
                    setPlaybackRate (t) {
                        let { media } = target();
                        if (z(media)) {
                            media.playbackRate = t;
                        }
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!z(media)) {
                    return;
                }
                let a = ()=>set({
                        playbackRate: media.playbackRate
                    });
                a();
                q(media, "ratechange", a, {
                    signal
                });
            }
        };
        let ed = {
            name: "remotePlayback",
            state: ({ target })=>({
                    remotePlaybackState: "disconnected",
                    remotePlaybackAvailability: "unsupported",
                    async toggleRemotePlayback () {
                        let { media, container } = target();
                        G(media) || ee(container, media) && await er(media);
                        return X(media);
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!I(media)) {
                    return;
                }
                let a = ()=>set({
                        remotePlaybackState: media.remote.state
                    });
                a();
                q(media.remote, "connect", a, {
                    signal
                });
                q(media.remote, "connecting", a, {
                    signal
                });
                q(media.remote, "disconnect", a, {
                    signal
                });
                media.remote.watchAvailability((e)=>{
                    set({
                        remotePlaybackAvailability: e ? "available" : "unavailable"
                    });
                }).catch(()=>{
                    set({
                        remotePlaybackAvailability: "unsupported"
                    });
                });
                signal.addEventListener("abort", ()=>{
                    media.remote?.cancelWatchAvailability().catch(()=>{});
                });
            }
        };
        let ep = {
            name: "source",
            state: ({ target, signals })=>({
                    source: null,
                    canPlay: false,
                    loadSource (r) {
                        signals.clear();
                        let { media } = target();
                        if ($(media)) {
                            media.src = r;
                            media.load();
                        }
                        return r;
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!$(media)) {
                    return;
                }
                let a = ()=>set({
                        source: media.currentSrc || media.src || null,
                        canPlay: media.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA
                    });
                a();
                q(media, "canplay", a, {
                    signal
                });
                q(media, "canplaythrough", a, {
                    signal
                });
                q(media, "loadstart", a, {
                    signal
                });
                q(media, "emptied", a, {
                    signal
                });
            }
        };
        function ef(e, t) {
            if (e.kind > t.kind) {
                return 1;
            }
            if (e.kind < t.kind) {
                return -1;
            }
            return 0;
        }
        let em = {
            name: "textTrack",
            state: ({ target })=>({
                    chaptersCues: [],
                    thumbnailCues: [],
                    thumbnailTrackSrc: null,
                    textTrackList: [],
                    subtitlesShowing: false,
                    toggleSubtitles (t) {
                        let r;
                        let { media } = target();
                        if (!H(media)) {
                            return false;
                        }
                        r = (e)=>e.kind === "subtitles" || e.kind === "captions";
                        let a = media.textTracks ? Array.from(media.textTracks).filter(r).sort(ef) : [];
                        if (!a.length) {
                            return false;
                        }
                        let i = a.some((e)=>e.mode === "showing");
                        let l = t ?? !i;
                        for (let e of a){
                            e.mode = l ? "showing" : "disabled";
                        }
                        return l;
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!H(media)) {
                    return;
                }
                let i = null;
                let s = ()=>{
                    i?.abort();
                    i = new AbortController;
                    let e = null;
                    let t = null;
                    let textTrackList = [];
                    let subtitlesShowing = false;
                    for(let r = 0; r < media.textTracks.length; r++){
                        let textTrack = media.textTracks[r];
                        if (!(e || textTrack.kind !== "chapters")) {
                            e = textTrack;
                        }
                        if (!(t || textTrack.kind !== "metadata" || textTrack.label !== "thumbnails")) {
                            t = textTrack;
                        }
                        textTrackList.push({
                            kind: textTrack.kind,
                            label: textTrack.label,
                            language: textTrack.language,
                            mode: textTrack.mode
                        });
                        if ((textTrack.kind === "captions" || textTrack.kind === "subtitles") && textTrack.mode === "showing") {
                            subtitlesShowing = true;
                        }
                    }
                    let chaptersCues = e?.cues ? Array.from(e.cues) : [];
                    let thumbnailCues = t?.cues ? Array.from(t.cues) : [];
                    let thumbnailTrackSrc = null;
                    for (let e of (t && (thumbnailTrackSrc = ((e, t)=>{
                        if (!(e instanceof HTMLElement)) {
                            return null;
                        }
                        for (let r of e.querySelectorAll("track")){
                            if (r.track === t) {
                                return r;
                            }
                        }
                        return null;
                    })(media, t)?.src ?? null), [
                        ...l(media) && "querySelectorAll" in media && a(media.querySelectorAll) && media.querySelectorAll("track") || [],
                        ...media instanceof HTMLElement && media.shadowRoot?.querySelectorAll("track") || []
                    ])){
                        if (!e.track?.cues?.length) {
                            q(e, "load", s, {
                                signal: i.signal
                            });
                        }
                    }
                    set({
                        chaptersCues,
                        thumbnailCues,
                        thumbnailTrackSrc,
                        textTrackList,
                        subtitlesShowing
                    });
                };
                s();
                let media_textTracks = media.textTracks;
                if (media_textTracks instanceof EventTarget) {
                    q(media_textTracks, "addtrack", s, {
                        signal
                    });
                    q(media_textTracks, "removetrack", s, {
                        signal
                    });
                    q(media_textTracks, "change", s, {
                        signal
                    });
                }
                q(media, "loadstart", s, {
                    signal
                });
                signal.addEventListener("abort", ()=>i?.abort(), {
                    once: true
                });
            }
        };
        let eh = {
            seek: Symbol.for("@videojs/seek")
        };
        let eg = {
            name: "time",
            state: ({ target, signals, set })=>({
                    currentTime: 0,
                    duration: 0,
                    seeking: false,
                    async seek (n) {
                        let { media } = target();
                        let signal = signals.supersede(eh.seek);
                        if (!D(media) || !$(media)) {
                            return 0;
                        }
                        if (!(media.readyState >= 1) && !await W(media, "loadedmetadata", {
                            signal
                        }).catch(()=>false)) {
                            return media.currentTime;
                        }
                        let currentTime = Math.max(0, Math.min(n, media.duration || Infinity));
                        set({
                            currentTime,
                            seeking: true
                        });
                        media.currentTime = currentTime;
                        await W(media, "seeked", {
                            signal
                        }).catch(m);
                        return media.currentTime;
                    }
                }),
            attach ({ target, signal, set, get }) {
                let { media } = target;
                if (!D(media)) {
                    return;
                }
                let i = ()=>set({
                        currentTime: media.currentTime,
                        duration: (()=>{
                            let { duration } = media;
                            if (duration === Infinity && B(media)) {
                                let { seekable } = media;
                                if (seekable.length > 0) {
                                    return seekable.end(seekable.length - 1);
                                }
                                return 0;
                            }
                            if (Number.isFinite(duration)) {
                                return duration;
                            }
                            return 0;
                        })(),
                        seeking: media.seeking
                    });
                let l = ()=>{
                    if (!get().seeking) {
                        i();
                    }
                };
                i();
                q(media, "timeupdate", l, {
                    signal
                });
                q(media, "durationchange", i, {
                    signal
                });
                q(media, "seeking", i, {
                    signal
                });
                q(media, "seeked", i, {
                    signal
                });
                q(media, "loadedmetadata", i, {
                    signal
                });
                q(media, "emptied", i, {
                    signal
                });
                q(media, "progress", l, {
                    signal
                });
            }
        };
        let eb = {
            name: "volume",
            state: ({ target })=>({
                    volume: 1,
                    muted: false,
                    volumeAvailability: "unavailable",
                    setVolume (t) {
                        let { media } = target();
                        if (!O(media)) {
                            return 0;
                        }
                        let n = Math.max(0, Math.min(1, t));
                        if (n > 0 && media.muted) {
                            media.muted = false;
                        }
                        media.volume = n;
                        return media.volume;
                    },
                    toggleMuted () {
                        let { media } = target();
                        return !!O(media) && (media.muted || media.volume === 0 ? (media.muted = false, media.volume === 0 && (media.volume = 0.25)) : media.muted = true, media.muted);
                    }
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!O(media)) {
                    return;
                }
                set({
                    volumeAvailability: (()=>{
                        let e = document.createElement("video");
                        try {
                            e.volume = 0.5;
                            if (e.volume === 0.5) {
                                return "available";
                            }
                            return "unsupported";
                        } catch  {
                            return "unsupported";
                        }
                    })()
                });
                let a = ()=>set({
                        volume: media.volume,
                        muted: media.muted
                    });
                a();
                q(media, "volumechange", a, {
                    signal
                });
            }
        };
        let features = [
            eo,
            ec,
            eb,
            eg,
            ep,
            U,
            el,
            es,
            ed,
            Y,
            em,
            J
        ];
        let ey = n.forwardRef(({ children, ...rest }, a)=>r.jsx("video", {
                ref: useU(a, n.useContext(BContext)?.setMedia),
                ...rest,
                children
            }));
        function ew(...e) {
            let t = {};
            for (let r of e){
                t = ((e, t)=>{
                    if (!t) {
                        return e;
                    }
                    for(let a in t){
                        let r;
                        let n;
                        let i = t[a];
                        if (a === "className") {
                            r = e.className;
                            e.className = i && r ? `${i} ${r}` : i || r;
                        } else if (a === "style") {
                            n = e.style;
                            e.style = i ? n ? {
                                ...n,
                                ...i
                            } : i : n;
                        } else if (!((e, t)=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 && (typeof t === "function" || t === undefined))(a, i)) {
                            e[a] = i;
                        } else {
                            e[a] = ((e, t)=>{
                                if (t) {
                                    if (e) {
                                        return (r)=>{
                                            t(r);
                                            e(r);
                                        };
                                    }
                                    return t;
                                }
                                return e;
                            })(e[a], i);
                        }
                    }
                    return e;
                })(t, r);
            }
            return t;
        }
        function ex(e, t, r) {
            let { className, style, render } = t;
            let { state, ref, props, stateAttrMap } = r;
            let f = a(className) ? className(state) : className;
            let m = a(style) ? style(state) : style;
            let h = ew(((e, t)=>{
                let r = {};
                for(let a in e){
                    let n;
                    if (t && !(a in t)) {
                        continue;
                    }
                    let i = t?.[a] ?? (n = a, `data-${n.toLowerCase()}`);
                    let l = e[a];
                    if (l === true) {
                        r[i] = "";
                    } else if (l) {
                        r[i] = String(l);
                    }
                }
                return r;
            })(state, stateAttrMap), ...Array.isArray(props) ? props : props ? [
                props
            ] : []);
            if (f !== undefined) {
                h.className = h.className ? `${h.className} ${f}` : f;
            }
            if (m !== undefined) {
                h.style = h.style ? {
                    ...h.style,
                    ...m
                } : m;
            }
            if (a(render)) {
                let e = o(ref, h.ref);
                return render({
                    ...h,
                    ref: e
                }, state);
            }
            if (n.isValidElement(render)) {
                let e = render.ref ?? render.props?.ref;
                let t = o(ref, h.ref, e);
                let r = ew(h, render.props);
                r.ref = t;
                return n.cloneElement(render, r);
            }
            h.ref = o(ref, h.ref);
            return n.createElement(e, h);
        }
        let eP = new WeakMap;
        let EkContext = n.createContext(null);
        function eS(e) {
            let { displayName, core, stateAttrMap, selector, action, hotkeyAction } = e;
            let o = new Set(Object.keys(core.defaultProps));
            let u = n.forwardRef((e, u)=>{
                let c;
                let { render, className, style, ...rest } = e;
                let h = {};
                let g = {};
                for (let e of Object.keys(rest)){
                    if (o.has(e)) {
                        h[e] = rest[e];
                    } else {
                        g[e] = rest[e];
                    }
                }
                let b = n.useContext(EkContext);
                let v = w(selector);
                c = (()=>{
                    let { container } = useY();
                    return container;
                })();
                let x = n.useMemo(()=>{
                    if (c && hotkeyAction) {
                        return eP.get(c)?.getAriaKeys(hotkeyAction);
                    }
                }, [
                    c,
                    hotkeyAction
                ]);
                let [P] = n.useState(()=>new core);
                P.setProps(h);
                let { getButtonProps, buttonRef } = ((e)=>{
                    let { displayName, onActivate, isDisabled } = e;
                    let buttonRef_1 = n.useCallback((e)=>{}, [
                        displayName
                    ]);
                    return {
                        getButtonProps: n.useCallback((e)=>ew(((e)=>{
                                let { onActivate, isDisabled } = e;
                                return {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick (e) {
                                        if (isDisabled()) {
                                            e.preventDefault();
                                        } else {
                                            onActivate();
                                        }
                                    },
                                    onPointerDown (e) {
                                        if (isDisabled()) {
                                            e.preventDefault();
                                        }
                                    },
                                    onMouseDown (e) {
                                        if (isDisabled()) {
                                            e.preventDefault();
                                        }
                                    },
                                    onKeyDown (e) {
                                        if (e.target === e.currentTarget) {
                                            if (isDisabled()) {
                                                if (e.key !== "Tab") {
                                                    e.preventDefault();
                                                }
                                                return;
                                            }
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                onActivate();
                                            } else if (e.key === " ") {
                                                e.preventDefault();
                                            }
                                        }
                                    },
                                    onKeyUp (e) {
                                        e.target !== e.currentTarget || isDisabled() || e.key === " " && onActivate();
                                    }
                                };
                            })({
                                onActivate,
                                isDisabled
                            }), e), [
                            onActivate,
                            isDisabled
                        ]),
                        buttonRef: buttonRef_1
                    };
                })({
                    displayName,
                    onActivate: ()=>action(P, v),
                    isDisabled: ()=>!!h.disabled || !v
                });
                if (v) {
                    P.setMedia(v);
                }
                let C = v ? P.getState() : null;
                let A = C ? P.getLabel(C) : undefined;
                n.useLayoutEffect(()=>{
                    if (b) {
                        b.setContent(A);
                        return ()=>b.setContent(undefined);
                    }
                }, [
                    b,
                    A
                ]);
                if (!v || !C) {
                    return null;
                }
                let M = {
                    ...P.getAttrs(C),
                    "aria-keyshortcuts": x
                };
                return ex("button", {
                    render,
                    className,
                    style
                }, {
                    state: C,
                    stateAttrMap,
                    ref: [
                        u,
                        buttonRef
                    ],
                    props: [
                        M,
                        g,
                        getButtonProps()
                    ]
                });
            });
            u.displayName = displayName;
            return u;
        }
        EkContext.Provider;
        let streamType = "unknown";
        let eA = {
            target: A,
            signals: new S,
            get: A,
            set: A
        };
        function eM(e) {
            let t = Object.keys(e.state(eA));
            let r = t[0];
            if (r) {
                return Object.assign((e)=>{
                    if (r in e) {
                        let r = {};
                        for (let n of t){
                            if (Object.hasOwn(e, n)) {
                                r[n] = e[n];
                            }
                        }
                        return r;
                    }
                }, {
                    displayName: e.name
                });
            }
            return Object.assign(()=>undefined, {
                displayName: e.name
            });
        }
        let ej = eM(U);
        let eE = eM(Y);
        eM(J);
        let eT = eM(el);
        eM({
            name: "live",
            state: ()=>({
                    liveEdgeStart: NaN,
                    targetLiveWindow: NaN
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (!(l(media) && "liveEdgeStart" in media && "targetLiveWindow" in media)) {
                    return;
                }
                let a = ()=>set({
                        liveEdgeStart: media.liveEdgeStart,
                        targetLiveWindow: media.targetLiveWindow
                    });
                a();
                q(media, "targetlivewindowchange", a, {
                    signal
                });
                q(media, "streamtypechange", a, {
                    signal
                });
                q(media, "loadedmetadata", a, {
                    signal
                });
                q(media, "canplay", a, {
                    signal
                });
                q(media, "progress", a, {
                    signal
                });
                q(media, "durationchange", a, {
                    signal
                });
                q(media, "timeupdate", a, {
                    signal
                });
                q(media, "emptied", a, {
                    signal
                });
            }
        });
        eM(es);
        let eL = eM(eo);
        eM(ec);
        eM(ed);
        eM(ep);
        eM({
            name: "streamType",
            state: ()=>({
                    streamType
                }),
            attach ({ target, signal, set }) {
                let { media } = target;
                if (l(media) && "streamType" in media) {
                    let e = ()=>set({
                            streamType: media.streamType
                        });
                    e();
                    q(media, "streamtypechange", e, {
                        signal
                    });
                    return;
                }
                if (!D(media)) {
                    return;
                }
                let a = ()=>set({
                        streamType: (()=>{
                            let { duration } = media;
                            if (duration === Infinity) {
                                return "live";
                            }
                            if (Number.isFinite(duration) && duration > 0) {
                                return "on-demand";
                            }
                            return streamType;
                        })()
                    });
                a();
                q(media, "durationchange", a, {
                    signal
                });
                q(media, "loadedmetadata", a, {
                    signal
                });
                q(media, "emptied", a, {
                    signal
                });
                if (B(media)) {
                    q(media, "progress", a, {
                        signal
                    });
                }
            }
        });
        let eR = eM(em);
        let eN = eM(eg);
        let eV = eM(eb);
        function eF(e, defaultProps) {
            let r = {
                ...defaultProps
            };
            for(let t in e){
                if (e[t] !== undefined) {
                    r[t] = e[t];
                }
            }
            return r;
        }
        let eD = eS({
            displayName: "CaptionsButton",
            core: class e {
                static defaultProps = {
                    label: "",
                    disabled: false
                };
                state = N({
                    subtitlesShowing: false,
                    availability: "unavailable",
                    label: ""
                });
                #l = {
                    ...e.defaultProps
                };
                #s = null;
                constructor(e){
                    if (e) {
                        this.setProps(e);
                    }
                }
                setProps(t) {
                    this.#l = eF(t, e.defaultProps);
                }
                getLabel(e) {
                    let { label } = this.#l;
                    if (a(label)) {
                        let r = label(e);
                        if (r) {
                            return r;
                        }
                    } else if (label) {
                        return label;
                    }
                    if (e.subtitlesShowing) {
                        return "Disable captions";
                    }
                    return "Enable captions";
                }
                getAttrs(e) {
                    return {
                        "aria-label": this.getLabel(e),
                        "aria-disabled": this.#l.disabled ? "true" : undefined
                    };
                }
                setMedia(e) {
                    this.#s = e;
                }
                getState() {
                    let e = this.#s;
                    let availability = e.textTrackList.some((e)=>e.kind === "captions" || e.kind === "subtitles") ? "available" : "unavailable";
                    this.state.patch({
                        subtitlesShowing: e.subtitlesShowing,
                        availability
                    });
                    this.state.patch({
                        label: this.getLabel(this.state.current)
                    });
                    return this.state.current;
                }
                toggle(e) {
                    if (!this.#l.disabled) {
                        e.toggleSubtitles();
                    }
                }
            },
            stateAttrMap: {
                subtitlesShowing: "data-active",
                availability: "data-availability"
            },
            selector: eR,
            action: (e, t)=>e.toggle(t),
            hotkeyAction: "toggleSubtitles"
        });
        var Object_defineProperty = Object.defineProperty;
        var eO = (e, t)=>{
            let r = {};
            for(var n in e){
                Object_defineProperty(r, n, {
                    get: e[n],
                    enumerable: true
                });
            }
            if (!t) {
                Object_defineProperty(r, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            return r;
        };
        let EzContext = n.createContext(null);
        let EzContext_Provider = EzContext.Provider;
        let eH = n.forwardRef((e, t)=>{
            let { render, className, style, children, ...rest } = e;
            let { state, stateAttrMap } = (()=>{
                let e = n.useContext(EzContext);
                if (!e) {
                    throw Error("Controls compound components must be used within a Controls.Root");
                }
                return e;
            })();
            return ex("div", {
                render,
                className,
                style
            }, {
                state,
                stateAttrMap,
                ref: [
                    t
                ],
                props: [
                    {
                        role: rest["aria-label"] || rest["aria-labelledby"] ? "group" : undefined,
                        children
                    },
                    rest
                ]
            });
        });
        var eI = class {
            #s = null;
            setMedia(e) {
                this.#s = e;
            }
            getState() {
                let e = this.#s;
                return {
                    visible: e.controlsVisible,
                    userActive: e.userActive
                };
            }
        };
        let eq = {
            visible: "data-visible",
            userActive: "data-user-active"
        };
        let e_ = n.forwardRef((e, t)=>{
            let { render, className, style, children, ...rest } = e;
            let u = w(eE);
            let [c] = n.useState(()=>new eI);
            if (!u) {
                return null;
            }
            c.setMedia(u);
            let state = c.getState();
            return r.jsx(EzContext_Provider, {
                value: {
                    state,
                    stateAttrMap: eq
                },
                children: ex("div", {
                    render,
                    className,
                    style
                }, {
                    state,
                    stateAttrMap: eq,
                    ref: [
                        t
                    ],
                    props: [
                        {
                            children
                        },
                        rest
                    ]
                })
            });
        });
        var eU = eO({
            Group: ()=>eH,
            Root: ()=>e_
        });
        let eW = eS({
            displayName: "FullscreenButton",
            core: class e {
                static defaultProps = {
                    label: "",
                    disabled: false
                };
                state = N({
                    fullscreen: false,
                    availability: "available",
                    label: ""
                });
                #l = {
                    ...e.defaultProps
                };
                #s = null;
                constructor(e){
                    if (e) {
                        this.setProps(e);
                    }
                }
                setProps(t) {
                    this.#l = eF(t, e.defaultProps);
                }
                getLabel(e) {
                    let { label } = this.#l;
                    if (a(label)) {
                        let r = label(e);
                        if (r) {
                            return r;
                        }
                    } else if (label) {
                        return label;
                    }
                    if (e.fullscreen) {
                        return "Exit fullscreen";
                    }
                    return "Enter fullscreen";
                }
                getAttrs(e) {
                    return {
                        "aria-label": this.getLabel(e),
                        "aria-disabled": this.#l.disabled ? "true" : undefined
                    };
                }
                setMedia(e) {
                    this.#s = e;
                }
                getState() {
                    let e = this.#s;
                    this.state.patch({
                        fullscreen: e.fullscreen,
                        availability: e.fullscreenAvailability
                    });
                    this.state.patch({
                        label: this.getLabel(this.state.current)
                    });
                    return this.state.current;
                }
                async toggle(e) {
                    if (!this.#l.disabled && e.fullscreenAvailability === "available") {
                        try {
                            if (e.fullscreen) {
                                await e.exitFullscreen();
                            } else {
                                await e.requestFullscreen();
                            }
                        } catch  {}
                    }
                }
            },
            stateAttrMap: {
                fullscreen: "data-fullscreen",
                availability: "data-availability"
            },
            selector: eT,
            action: (e, t)=>e.toggle(t),
            hotkeyAction: "toggleFullscreen"
        });
        let eK = eS({
            displayName: "MuteButton",
            core: class e {
                static defaultProps = {
                    label: "",
                    disabled: false
                };
                state = N({
                    muted: false,
                    volumeLevel: "off",
                    label: ""
                });
                #l = {
                    ...e.defaultProps
                };
                #s = null;
                constructor(e){
                    if (e) {
                        this.setProps(e);
                    }
                }
                setProps(t) {
                    this.#l = eF(t, e.defaultProps);
                }
                getLabel(e) {
                    let { label } = this.#l;
                    if (a(label)) {
                        let r = label(e);
                        if (r) {
                            return r;
                        }
                    } else if (label) {
                        return label;
                    }
                    if (e.muted) {
                        return "Unmute";
                    }
                    return "Mute";
                }
                getAttrs(e) {
                    return {
                        "aria-label": this.getLabel(e),
                        "aria-disabled": this.#l.disabled ? "true" : undefined
                    };
                }
                setMedia(e) {
                    this.#s = e;
                }
                getState() {
                    let e;
                    let t = this.#s;
                    this.state.patch({
                        muted: t.muted || t.volume === 0,
                        volumeLevel: (e = t).muted || e.volume === 0 ? "off" : e.volume < 0.5 ? "low" : e.volume < 0.75 ? "medium" : "high"
                    });
                    this.state.patch({
                        label: this.getLabel(this.state.current)
                    });
                    return this.state.current;
                }
                toggle(e) {
                    if (!this.#l.disabled) {
                        e.toggleMuted();
                    }
                }
            },
            stateAttrMap: {
                muted: "data-muted",
                volumeLevel: "data-volume-level"
            },
            selector: eV,
            action: (e, t)=>e.toggle(t),
            hotkeyAction: "toggleMuted"
        });
        let eZ = eS({
            displayName: "PlayButton",
            core: class e {
                static defaultProps = {
                    label: "",
                    disabled: false
                };
                state = N({
                    paused: true,
                    ended: false,
                    started: false,
                    label: ""
                });
                #l = {
                    ...e.defaultProps
                };
                #s = null;
                constructor(e){
                    if (e) {
                        this.setProps(e);
                    }
                }
                setProps(t) {
                    this.#l = eF(t, e.defaultProps);
                }
                getLabel(e) {
                    let { label } = this.#l;
                    if (a(label)) {
                        let r = label(e);
                        if (r) {
                            return r;
                        }
                    } else if (label) {
                        return label;
                    }
                    if (e.ended) {
                        return "Replay";
                    }
                    if (e.paused) {
                        return "Play";
                    }
                    return "Pause";
                }
                getAttrs(e) {
                    return {
                        "aria-label": this.getLabel(e),
                        "aria-disabled": this.#l.disabled ? "true" : undefined
                    };
                }
                setMedia(e) {
                    this.#s = e;
                }
                getState() {
                    let e = this.#s;
                    this.state.patch({
                        paused: e.paused,
                        ended: e.ended,
                        started: e.started
                    });
                    this.state.patch({
                        label: this.getLabel(this.state.current)
                    });
                    return this.state.current;
                }
                async toggle(e) {
                    if (!this.#l.disabled) {
                        if (e.paused || e.ended) {
                            return e.play();
                        }
                        e.pause();
                    }
                }
            },
            stateAttrMap: {
                paused: "data-paused",
                ended: "data-ended",
                started: "data-started"
            },
            selector: eL,
            action: (e, t)=>e.toggle(t),
            hotkeyAction: "togglePaused"
        });
        let eG = n.forwardRef((e, t)=>{
            let { render, className, style, children, ...rest } = e;
            return ex("span", {
                render,
                className,
                style
            }, {
                state: {},
                ref: [
                    t
                ],
                props: [
                    {
                        children
                    },
                    rest
                ]
            });
        });
        let eX = n.forwardRef((e, t)=>{
            let { render, className, style, children = "/", ...rest } = e;
            return ex("span", {
                render,
                className,
                style
            }, {
                state: {},
                ref: [
                    t
                ],
                props: [
                    {
                        "aria-hidden": "true",
                        children
                    },
                    rest
                ]
            });
        });
        let eY = [
            {
                singular: "hour",
                plural: "hours"
            },
            {
                singular: "minute",
                plural: "minutes"
            },
            {
                singular: "second",
                plural: "seconds"
            }
        ];
        function eJ(e) {
            return typeof e === "number" && Number.isFinite(e);
        }
        function eQ(e, t) {
            return `${e} ${e === 1 ? eY[t]?.singular : eY[t]?.plural}`;
        }
        function e0(e, t) {
            if (!eJ(e)) {
                return "0:00";
            }
            let r = e < 0;
            let n = Math.abs(e);
            let a = Math.floor(n / 3600);
            let i = Math.floor(n / 60 % 60);
            let l = Math.floor(n % 60);
            let s = t ? Math.abs(t) : 0;
            let o = Math.floor(s / 3600);
            let u = Math.floor(s / 60 % 60);
            let c = a > 0 || o > 0;
            let d = c ? `${a}:` : "";
            let p = `${(c || u >= 10) && i < 10 ? "0" : ""}${i}:`;
            let f = l < 10 ? `0${l}` : `${l}`;
            return `${r ? "-" : ""}${d}${p}${f}`;
        }
        function e1(e) {
            if (!eJ(e)) {
                return "";
            }
            let t = e < 0;
            let r = Math.abs(e);
            let n = Math.floor(r / 3600);
            let a = Math.floor(r / 60 % 60);
            let i = Math.floor(r % 60);
            if (r === 0) {
                return `${eQ(0, 2)}${t ? " remaining" : ""}`;
            }
            return `${[
                n,
                a,
                i
            ].map((e, t)=>{
                if (e > 0) {
                    return eQ(e, t);
                }
                return null;
            }).filter(Boolean).join(", ")}${t ? " remaining" : ""}`;
        }
        let e2 = {
            current: "Current time",
            duration: "Duration",
            remaining: "Remaining"
        };
        var e3 = class e {
            static defaultProps = {
                type: "current",
                negativeSign: "-",
                label: ""
            };
            #l = {
                ...e.defaultProps
            };
            #s = null;
            constructor(e){
                if (e) {
                    this.setProps(e);
                }
            }
            setProps(t) {
                this.#l = eF(t, e.defaultProps);
            }
            setMedia(e) {
                this.#s = e;
            }
            #o() {
                let e = this.#s;
                let { type } = this.#l;
                switch(type){
                    case "current":
                        return e.currentTime;
                    case "duration":
                        return e.duration;
                    case "remaining":
                        return e.currentTime - e.duration;
                    default:
                        return 0;
                }
            }
            #u() {
                let e = this.#s;
                return e0(Math.abs(this.#o()), e.duration);
            }
            #c() {
                let { type } = this.#l;
                let t = this.#o();
                if (type === "remaining") {
                    return e1(t < 0 ? t : -Math.abs(t));
                }
                return e1(t);
            }
            #d() {
                return ((e)=>{
                    if (!eJ(e)) {
                        return "PT0S";
                    }
                    let t = Math.abs(e);
                    let r = Math.floor(t / 3600);
                    let n = Math.floor(t / 60 % 60);
                    let a = Math.floor(t % 60);
                    let i = "PT";
                    if (r > 0) {
                        i += `${r}H`;
                    }
                    if (n > 0) {
                        i += `${n}M`;
                    }
                    if (a > 0 || i === "PT") {
                        i += `${a}S`;
                    }
                    return i;
                })(Math.abs(this.#o()));
            }
            getLabel(e) {
                let { label } = this.#l;
                if (a(label)) {
                    let r = label(e);
                    if (r) {
                        return r;
                    }
                } else if (label) {
                    return label;
                }
                return e2[this.#l.type];
            }
            getAttrs(e) {
                return {
                    "aria-label": this.getLabel(e),
                    "aria-valuetext": e.phrase
                };
            }
            getState() {
                let seconds = this.#o();
                return {
                    type: this.#l.type,
                    seconds,
                    negative: this.#l.type === "remaining" && seconds < 0,
                    text: this.#u(),
                    phrase: this.#c(),
                    datetime: this.#d()
                };
            }
        };
        let e8 = {
            type: "data-type"
        };
        let e5 = n.forwardRef((e, t)=>{
            let { render, className, style, type, negativeSign, label, ...rest } = e;
            let d = w(eN);
            let [p] = n.useState(()=>new e3);
            p.setProps({
                type,
                negativeSign,
                label
            });
            if (!d) {
                return null;
            }
            p.setMedia(d);
            let f = p.getState();
            let m = f.negative ? r.jsxs(r.Fragment, {
                children: [
                    r.jsx("span", {
                        "aria-hidden": "true",
                        children: negativeSign ?? e3.defaultProps.negativeSign
                    }),
                    f.text
                ]
            }) : f.text;
            return ex("time", {
                render,
                className,
                style
            }, {
                state: f,
                stateAttrMap: e8,
                ref: [
                    t
                ],
                props: [
                    {
                        dateTime: f.datetime,
                        children: m,
                        ...p.getAttrs(f)
                    },
                    rest
                ]
            });
        });
        var e6 = eO({
            Group: ()=>eG,
            Separator: ()=>eX,
            Value: ()=>e5
        });
        function e7(e) {
            let { displayName, tag, useContext, staticProps, getProps } = e;
            let s = n.forwardRef((e, t)=>{
                let { render, className, style, ...rest } = e;
                let c = useContext();
                let d = getProps?.(c.state);
                return ex(tag, {
                    render,
                    className,
                    style
                }, {
                    state: c.state,
                    stateAttrMap: c.stateAttrMap,
                    ref: t,
                    props: [
                        staticProps,
                        d,
                        rest
                    ].filter(Boolean)
                });
            });
            s.displayName = displayName;
            return s;
        }
        let E4Context = n.createContext(null);
        function e9({ value, children }) {
            return r.jsx(E4Context.Provider, {
                value,
                children
            });
        }
        function useTe() {
            let e = n.useContext(E4Context);
            if (!e) {
                throw Error("Slider compound components must be used within a Slider.Root");
            }
            return e;
        }
        let tt = e7({
            displayName: "SliderBuffer",
            tag: "div",
            useContext: useTe
        });
        let tr = e7({
            displayName: "SliderFill",
            tag: "div",
            useContext: useTe
        });
        let tn = "--media-slider-pointer";
        function getCSSVars(e) {
            return {
                ...{
                    "--media-slider-fill": `${e.fillPercent.toFixed(3)}%`,
                    [tn]: `${e.pointerPercent.toFixed(3)}%`
                },
                "--media-slider-buffer": `${e.bufferPercent.toFixed(3)}%`
            };
        }
        let ti = n.forwardRef((e, t)=>{
            let r;
            let { render, className, style, overflow = "clamp", ...rest } = e;
            let u = useTe();
            let { state } = u;
            let dRef = n.useRef(null);
            let [p, setP] = n.useState(0);
            n.useEffect(()=>{
                let dRef_current = dRef.current;
                if (!dRef_current) {
                    return;
                }
                let t = new ResizeObserver(([e])=>{
                    setP(e.contentRect.width);
                });
                t.observe(dRef_current);
                return ()=>t.disconnect();
            }, []);
            r = p / 2;
            let style_1 = {
                position: "absolute",
                left: overflow === "visible" ? `calc(var(${tn}) - ${r}px)` : `min(max(0px, calc(var(${tn}) - ${r}px)), calc(100% - ${p}px))`,
                width: "max-content",
                pointerEvents: "none"
            };
            return ex("div", {
                render,
                className,
                style
            }, {
                state,
                stateAttrMap: u.stateAttrMap,
                ref: [
                    t,
                    dRef
                ],
                props: [
                    {
                        style: style_1
                    },
                    rest
                ]
            });
        });
        let tl = n.forwardRef((e, t)=>{
            let { render, className, style, ...rest } = e;
            let l = useTe();
            let { state, thumbRef, thumbProps, getAttrs } = l;
            let d = getAttrs(state);
            return ex("div", {
                render,
                className,
                style
            }, {
                state,
                stateAttrMap: l.stateAttrMap,
                ref: [
                    t,
                    thumbRef
                ],
                props: [
                    d,
                    thumbProps,
                    rest
                ]
            });
        });
        let ts = e7({
            displayName: "SliderTrack",
            tag: "div",
            useContext: useTe
        });
        let to = n.forwardRef((e, t)=>{
            let { render, className, style, type = "current", format, ...rest } = e;
            let o = useTe();
            let { state, pointerValue, formatValue } = o;
            let p = type === "pointer" ? pointerValue : state.value;
            let f = format ? format(p) : formatValue ? formatValue(p, type) : String(Math.round(p));
            return ex("output", {
                render,
                className,
                style
            }, {
                state,
                stateAttrMap: o.stateAttrMap,
                ref: t,
                props: [
                    {
                        "aria-live": "off",
                        children: f
                    },
                    rest
                ]
            });
        });
        function tu(e, t, r) {
            return Math.max(t, Math.min(r, e));
        }
        function tc(e, t, r) {
            let n = Math.round((e - r) / t) * t + r;
            let a = `${t}`.indexOf(".");
            if (-1 === a) {
                return n;
            }
            return Number(n.toFixed(`${t}`.length - a - 1));
        }
        function td(e, t, r, n) {
            let a;
            if (Number.isFinite(a = r === "vertical" ? 1 - (e.clientY - t.top) / t.height : n ? (t.right - e.clientX) / t.width : (e.clientX - t.left) / t.width)) {
                return tu(100 * a, 0, 100);
            }
            return 0;
        }
        var tp = class e {
            static defaultProps = {
                label: "",
                step: 1,
                largeStep: 10,
                orientation: "horizontal",
                disabled: false,
                thumbAlignment: "center",
                value: 0,
                min: 0,
                max: 100
            };
            static defaultInput = {
                pointerPercent: 0,
                dragPercent: 0,
                dragging: false,
                pointing: false,
                focused: false
            };
            #l = {
                ...e.defaultProps
            };
            #p = {
                ...e.defaultInput
            };
            get props() {
                return this.#l;
            }
            get input() {
                return this.#p;
            }
            constructor(e){
                if (e) {
                    this.setProps(e);
                }
            }
            setProps(t) {
                this.#l = eF(t, e.defaultProps);
            }
            setInput(e) {
                this.#p = e;
            }
            getSliderState(e) {
                let { orientation, disabled, thumbAlignment } = this.#l;
                let { pointerPercent, dragging, pointing, focused } = this.#p;
                return {
                    value: e,
                    fillPercent: this.percentFromValue(e),
                    pointerPercent,
                    dragging,
                    pointing,
                    interactive: dragging || pointing || focused,
                    orientation,
                    disabled,
                    thumbAlignment
                };
            }
            getLabel(e) {
                let { label } = this.#l;
                if (a(label)) {
                    let r = label(e);
                    if (r) {
                        return r;
                    }
                } else if (label) {
                    return label;
                }
                return "";
            }
            getAttrs(e) {
                return {
                    role: "slider",
                    tabIndex: e.disabled ? -1 : 0,
                    autoComplete: "off",
                    "aria-label": this.getLabel(e),
                    "aria-valuemin": this.#l.min,
                    "aria-valuemax": this.#l.max,
                    "aria-valuenow": e.value,
                    "aria-orientation": e.orientation,
                    "aria-disabled": e.disabled ? "true" : undefined
                };
            }
            valueFromPercent(e) {
                let { min, max, step } = this.#l;
                return tc(tu(min + e / 100 * (max - min), min, max), step, min);
            }
            rawValueFromPercent(e) {
                let { min, max } = this.#l;
                return tu(min + e / 100 * (max - min), min, max);
            }
            percentFromValue(e) {
                let { min, max } = this.#l;
                if (max === min) {
                    return 0;
                }
                return (e - min) / (max - min) * 100;
            }
            getStepPercent() {
                let { step, min, max } = this.#l;
                let n = max - min;
                if (n > 0) {
                    return step / n * 100;
                }
                return 0;
            }
            getLargeStepPercent() {
                let { largeStep, min, max } = this.#l;
                let n = max - min;
                if (n > 0) {
                    return largeStep / n * 100;
                }
                return 0;
            }
            adjustPercentForAlignment(e, t, r) {
                if (this.#l.thumbAlignment === "center" || r === 0) {
                    return e;
                }
                let n = t / r * 100 / 2;
                return n + e / 100 * (100 - n - n);
            }
        };
        var tf = class e extends tp {
            static defaultProps = {
                ...tp.defaultProps,
                label: "Seek",
                changeThrottle: 100
            };
            #l = {
                ...e.defaultProps
            };
            #s = null;
            constructor(e){
                super();
                if (e) {
                    this.setProps(e);
                }
            }
            setProps(t) {
                this.#l = eF(t, e.defaultProps);
                super.setProps({
                    ...t,
                    min: 0
                });
            }
            setMedia(e) {
                this.#s = e;
            }
            getState() {
                let { duration, currentTime, seeking, buffered } = this.#s;
                super.setProps({
                    ...this.#l,
                    min: 0,
                    max: duration
                });
                let a = super.getSliderState(currentTime);
                let i = buffered.length > 0 ? buffered[buffered.length - 1][1] : 0;
                let bufferPercent = duration > 0 ? i / duration * 100 : 0;
                return {
                    ...a,
                    currentTime,
                    duration,
                    seeking,
                    bufferPercent
                };
            }
            getLabel(e) {
                return super.getLabel(e) || "Seek";
            }
            getAttrs(e) {
                let t = super.getAttrs(e);
                let r = e.dragging ? this.rawValueFromPercent(e.pointerPercent) : e.value;
                let n = e1(r);
                let a = e1(e.duration);
                let i = a ? `${n} of ${a}` : n;
                return {
                    ...t,
                    "aria-valuenow": r,
                    "aria-valuetext": i
                };
            }
        };
        let tm = {
            dragging: "data-dragging",
            pointing: "data-pointing",
            interactive: "data-interactive",
            orientation: "data-orientation",
            disabled: "data-disabled",
            seeking: "data-seeking"
        };
        let seek = ()=>Promise.resolve(0);
        let tg = n.forwardRef((e, t)=>{
            let { render, className, style, label, changeThrottle = tf.defaultProps.changeThrottle, step = tf.defaultProps.step, largeStep = tf.defaultProps.largeStep, orientation, disabled, thumbAlignment, onDragStart, onDragEnd, ...rest } = e;
            let x = w(eN);
            let S = w(ej);
            let [C] = n.useState(()=>new tf);
            C.setProps({
                label,
                step,
                largeStep,
                orientation,
                disabled,
                thumbAlignment
            });
            let A = P(x && S ? {
                ...x,
                ...S
            } : null);
            let M = x?.duration ?? 0;
            let { state, cssVars, rootRef, thumbRef, rootProps, rootStyle, thumbProps } = ((e)=>{
                let t;
                let r = P(e);
                let aRef = n.useRef(null);
                let lRef = n.useRef(null);
                let s = (()=>{
                    let [, eDispatch] = n.useReducer((e)=>e + 1, 0);
                    return eDispatch;
                })();
                let [o] = n.useState(()=>((e)=>{
                        let t;
                        let r;
                        let n;
                        let a;
                        let l;
                        let s;
                        let o;
                        let input = N({
                            pointerPercent: 0,
                            dragPercent: 0,
                            dragging: false,
                            pointing: false,
                            focused: false
                        });
                        let c = new AbortController;
                        let d = e.changeThrottle ?? 0;
                        let p = false;
                        let f = false;
                        let m = null;
                        let h = null;
                        let g = 0;
                        let b = false;
                        let v = d > 0 ? (t = (t)=>e.onValueChange?.(t), r = {
                            leading: true
                        }, a = r?.leading ?? false, l = null, s = false, (o = (...e)=>{
                            n = e;
                            if (a) {
                                if (l === null) {
                                    t(...n);
                                    (function e() {
                                        l = setTimeout(()=>{
                                            l = null;
                                            if (s) {
                                                s = false;
                                                t(...n);
                                                e();
                                            }
                                        }, d);
                                    })();
                                } else {
                                    s = true;
                                }
                            } else {
                                if (l !== null) {
                                    return;
                                }
                                l = setTimeout(()=>{
                                    l = null;
                                    t(...n);
                                }, d);
                            }
                        }).cancel = ()=>{
                            if (l !== null) {
                                clearTimeout(l);
                                l = null;
                            }
                            s = false;
                        }, o) : null;
                        function y() {
                            if (i(h)) {
                                return;
                            }
                            let t = h;
                            h = null;
                            try {
                                e.getElement().releasePointerCapture(t);
                            } catch  {}
                        }
                        function w() {
                            if (p) {
                                b || e.onValueCommit?.(g);
                                p = false;
                                input.patch({
                                    dragging: false,
                                    pointing: false
                                });
                                e.onDragEnd?.();
                            } else {
                                input.patch({
                                    pointing: false
                                });
                            }
                            b = false;
                            x();
                        }
                        function x() {
                            v?.cancel();
                            h = null;
                            m = null;
                        }
                        let P = null;
                        if (e.onResize) {
                            (P = new ResizeObserver(()=>e.onResize())).observe(e.getElement());
                        }
                        return {
                            input,
                            rootProps: {
                                onPointerDown (t) {
                                    if (e.isDisabled()) {
                                        return;
                                    }
                                    t.stopPropagation();
                                    t.preventDefault();
                                    let r = e.getElement();
                                    m = r.getBoundingClientRect();
                                    f = e.isRTL();
                                    b = false;
                                    y();
                                    h = t.pointerId;
                                    r.setPointerCapture(t.pointerId);
                                    let n = td(t, m, e.getOrientation(), f);
                                    p = true;
                                    g = n;
                                    input.patch({
                                        pointing: true,
                                        dragging: true,
                                        pointerPercent: n,
                                        dragPercent: n
                                    });
                                    e.onDragStart?.();
                                    e.onValueChange?.(n);
                                    e.getThumbElement?.()?.focus({
                                        preventScroll: true,
                                        focusVisible: false
                                    });
                                },
                                onPointerMove (t) {
                                    if (e.isDisabled()) {
                                        return;
                                    }
                                    if (!i(h)) {
                                        if (t.pointerType !== "touch" && t.buttons === 0) {
                                            return void w();
                                        }
                                        let r = td(t, m, e.getOrientation(), f);
                                        g = r;
                                        input.patch({
                                            dragPercent: r,
                                            pointerPercent: r
                                        });
                                        return void (v ? v(r) : e.onValueChange?.(r));
                                    }
                                    let pointerPercent = td(t, e.getElement().getBoundingClientRect(), e.getOrientation(), e.isRTL());
                                    input.patch({
                                        pointing: true,
                                        pointerPercent
                                    });
                                },
                                onPointerUp (t) {
                                    if (e.isDisabled() || (t.stopPropagation(), i(h))) {
                                        return;
                                    }
                                    let r = td(t, m, e.getOrientation(), f);
                                    v?.cancel();
                                    e.onValueChange?.(r);
                                    e.onValueCommit?.(r);
                                    b = true;
                                },
                                onPointerLeave () {
                                    if (i(h)) {
                                        input.patch({
                                            pointing: false
                                        });
                                    }
                                },
                                onLostPointerCapture () {
                                    w();
                                }
                            },
                            rootStyle: {
                                touchAction: "none",
                                userSelect: "none"
                            },
                            thumbProps: {
                                onKeyDown (t) {
                                    if (e.isDisabled()) {
                                        if (t.key !== "Tab") {
                                            t.preventDefault();
                                        }
                                        return;
                                    }
                                    let r = e.getStepPercent();
                                    let n = e.getLargeStepPercent();
                                    let a = tc(e.getPercent(), r, 0);
                                    let i = e.isRTL() ? -1 : 1;
                                    let l = t.shiftKey ? n : r;
                                    let s = null;
                                    switch(t.key){
                                        case "ArrowRight":
                                            s = a + l * i;
                                            break;
                                        case "ArrowLeft":
                                            s = a - l * i;
                                            break;
                                        case "ArrowUp":
                                            s = a + l;
                                            break;
                                        case "ArrowDown":
                                            s = a - l;
                                            break;
                                        case "PageUp":
                                            s = a + n;
                                            break;
                                        case "PageDown":
                                            s = a - n;
                                            break;
                                        case "Home":
                                            s = 0;
                                            break;
                                        case "End":
                                            s = 100;
                                            break;
                                        default:
                                            if (!(t.metaKey || t.ctrlKey || t.altKey || !(t.key >= "0") || !(t.key <= "9"))) {
                                                s = 10 * Number(t.key);
                                            }
                                    }
                                    if (s !== null) {
                                        t.preventDefault();
                                        s = tu(s, 0, 100);
                                        input.patch({
                                            pointerPercent: s,
                                            dragPercent: s
                                        });
                                        e.onValueChange?.(s);
                                        e.onValueCommit?.(s);
                                    }
                                },
                                onFocus () {
                                    input.patch({
                                        focused: true
                                    });
                                },
                                onBlur () {
                                    input.patch({
                                        focused: false
                                    });
                                }
                            },
                            adjustForAlignment (t) {
                                if (!e.adjustPercent || t.thumbAlignment !== "edge") {
                                    return t;
                                }
                                let r = e.getElement();
                                let n = e.getThumbElement?.();
                                if (!n) {
                                    return t;
                                }
                                let a = t.orientation === "horizontal";
                                let i = a ? n.offsetWidth : n.offsetHeight;
                                let l = a ? r.offsetWidth : r.offsetHeight;
                                return {
                                    ...t,
                                    fillPercent: e.adjustPercent(t.fillPercent, i, l),
                                    pointerPercent: e.adjustPercent(t.pointerPercent, i, l)
                                };
                            },
                            destroy () {
                                if (!c.signal.aborted) {
                                    c.abort();
                                    P?.disconnect();
                                    y();
                                    x();
                                }
                            }
                        };
                    })({
                        getElement: ()=>aRef.current,
                        getThumbElement: ()=>lRef.current,
                        getOrientation: ()=>r.current.orientation ?? "horizontal",
                        isRTL: ()=>{
                            var e;
                            let t;
                            return !!aRef.current && (e = aRef.current, (t = e.closest("[dir]")?.getAttribute("dir")) ? t.toLowerCase() === "rtl" : getComputedStyle(e).direction === "rtl");
                        },
                        isDisabled: ()=>r.current.disabled ?? false,
                        getPercent: ()=>r.current.getPercent(),
                        getStepPercent: ()=>r.current.getStepPercent(),
                        getLargeStepPercent: ()=>r.current.getLargeStepPercent(),
                        changeThrottle: r.current.changeThrottle,
                        adjustPercent: r.current.adjustPercent,
                        onValueChange: (e)=>r.current.onValueChange?.(e),
                        onValueCommit: (e)=>r.current.onValueCommit?.(e),
                        onDragStart: ()=>r.current.onDragStart?.(),
                        onDragEnd: ()=>r.current.onDragEnd?.()
                    }));
                useK(o);
                t = o.input;
                let u = useP((e)=>t.subscribe(e), ()=>t.current, undefined ?? f, undefined);
                let c = e.computeState(u);
                n.useLayoutEffect(()=>{
                    if (c.thumbAlignment === "edge" && aRef.current && lRef.current) {
                        s();
                    }
                }, [
                    c.thumbAlignment
                ]);
                return {
                    state: c,
                    cssVars: e.getCSSVars(o.adjustForAlignment(c)),
                    rootRef: n.useCallback((e)=>{
                        aRef.current = e;
                    }, []),
                    thumbRef: n.useCallback((e)=>{
                        lRef.current = e;
                    }, []),
                    rootProps: o.rootProps,
                    rootStyle: o.rootStyle,
                    thumbProps: o.thumbProps
                };
            })({
                computeState: (e)=>{
                    C.setInput(e);
                    if (x && S) {
                        C.setMedia({
                            ...x,
                            ...S
                        });
                    } else {
                        C.setMedia({
                            currentTime: 0,
                            duration: 0,
                            seeking: false,
                            seek,
                            buffered: [],
                            seekable: []
                        });
                    }
                    return C.getState();
                },
                getPercent: ()=>{
                    if (M > 0) {
                        return (x?.currentTime ?? 0) / M * 100;
                    }
                    return 0;
                },
                getStepPercent: ()=>C.getStepPercent(),
                getLargeStepPercent: ()=>C.getLargeStepPercent(),
                orientation,
                disabled,
                changeThrottle,
                adjustPercent: (e, t, r)=>C.adjustPercentForAlignment(e, t, r),
                getCSSVars,
                onValueCommit: (e)=>{
                    let A_current = A.current;
                    if (A_current) {
                        A_current.seek(C.rawValueFromPercent(e));
                    }
                },
                onDragStart,
                onDragEnd
            });
            if (x) {
                return r.jsx(e9, {
                    value: {
                        state,
                        pointerValue: C.valueFromPercent(state.pointerPercent),
                        thumbRef,
                        thumbProps,
                        stateAttrMap: tm,
                        getAttrs: (e)=>C.getAttrs(e),
                        formatValue: (e)=>e0(e, M)
                    },
                    children: ex("div", {
                        render,
                        className,
                        style
                    }, {
                        state,
                        stateAttrMap: tm,
                        ref: [
                            t,
                            rootRef
                        ],
                        props: [
                            {
                                style: {
                                    ...cssVars,
                                    ...rootStyle
                                }
                            },
                            rootProps,
                            rest
                        ]
                    })
                });
            }
            return null;
        });
        var tb = eO({
            Buffer: ()=>tt,
            Fill: ()=>tr,
            Preview: ()=>ti,
            Root: ()=>tg,
            Thumb: ()=>tl,
            Track: ()=>ts,
            Value: ()=>to
        });
        function tv(e) {
            return r.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                focusable: "false",
                "aria-hidden": "true",
                ...e,
                children: r.jsx("path", {
                    d: "M6 17.5V12.3571H7.71429V15.7857H11.1429V17.5H6ZM16.2857 10.6429V7.21429H12.8571V5.5H18V10.6429H16.2857Z",
                    fill: "currentColor"
                })
            });
        }
        function ty(e) {
            return r.jsxs("svg", {
                focusable: "false",
                "aria-hidden": "true",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [
                    r.jsx("path", {
                        d: "M6 4.03638L6 16.9634",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    r.jsx("path", {
                        d: "M15 4.03638L15 16.9634",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    })
                ]
            });
        }
        function tw(e) {
            return r.jsx("svg", {
                viewBox: "1.2331 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                focusable: "false",
                "aria-hidden": "true",
                ...e,
                children: r.jsx("path", {
                    d: "M8.08845 2.07163C6.48742 1.03567 4.375 2.18488 4.375 4.09185V16.9083C4.375 18.8153 6.48742 19.9645 8.08845 18.9286L17.9921 12.5203C19.4575 11.5721 19.4575 9.42808 17.9921 8.47988L8.08845 2.07163Z",
                    fill: "currentColor"
                })
            });
        }
        function tx(e) {
            return r.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                focusable: "false",
                "aria-hidden": "true",
                ...e,
                children: r.jsx("path", {
                    d: "M12 5V2.5L8.5 6 12 9.5V7a5.5 5.5 0 1 1-5.5 5.5H4.5A7.5 7.5 0 1 0 12 5Z",
                    fill: "currentColor"
                })
            });
        }
        function tP(e) {
            return r.jsxs("svg", {
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                focusable: "false",
                "aria-hidden": "true",
                ...e,
                children: [
                    r.jsx("path", {
                        d: "M11.375 4.22675C11.375 2.94279 9.88979 2.22896 8.88719 3.03105L5.31939 5.88528C5.12546 6.04043 4.88449 6.12495 4.63613 6.12495H3.28125C1.95231 6.12495 0.875 7.20227 0.875 8.5312V12.4687C0.875 13.7976 1.95231 14.875 3.28125 14.875H4.63613C4.88449 14.875 5.12546 14.9595 5.31939 15.1146L8.88719 17.9689C9.88979 18.7709 11.375 18.0571 11.375 16.7732V4.22675Z",
                        fill: "currentColor"
                    }),
                    r.jsx("path", {
                        d: "M16.3778 3.69383C16.6341 3.43755 17.0496 3.43755 17.3059 3.69383C19.0469 5.43489 20.125 7.84204 20.125 10.4997C20.125 13.1574 19.0469 15.5646 17.3059 17.3056C17.0496 17.5619 16.6341 17.5619 16.3778 17.3056C16.1215 17.0494 16.1215 16.6338 16.3778 16.3776C17.8828 14.8726 18.8125 12.7953 18.8125 10.4997C18.8125 8.20412 17.8828 6.12689 16.3778 4.62191C16.1215 4.36562 16.1215 3.95011 16.3778 3.69383Z",
                        fill: "currentColor"
                    }),
                    r.jsx("path", {
                        d: "M14.3671 6.63328C14.1108 6.377 13.6953 6.377 13.439 6.63328C13.1827 6.88956 13.1827 7.30508 13.439 7.56136C14.1918 8.31421 14.6563 9.35237 14.6563 10.5003C14.6563 11.6482 14.1918 12.6863 13.439 13.4392C13.1827 13.6955 13.1827 14.111 13.439 14.3673C13.6953 14.6235 14.1108 14.6235 14.3671 14.3673C15.356 13.3783 15.9688 12.0102 15.9688 10.5003C15.9688 8.9903 15.356 7.62221 14.3671 6.63328Z",
                        fill: "currentColor"
                    })
                ]
            });
        }
        function tk(e) {
            return r.jsxs("svg", {
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                focusable: "false",
                "aria-hidden": "true",
                ...e,
                children: [
                    r.jsx("path", {
                        d: "M18.1828 3.74529C18.4391 3.48901 18.4391 3.07349 18.1828 2.81721C17.9265 2.56093 17.511 2.56093 17.2547 2.81721L14.875 5.19692V4.22663C14.875 2.94267 13.3898 2.22884 12.3872 3.03092L8.81939 5.88516C8.62546 6.04031 8.38449 6.12483 8.13613 6.12483H6.78125C5.45231 6.12483 4.375 7.20215 4.375 8.53108V12.4686C4.375 13.3438 4.84227 14.1099 5.54095 14.531L2.81721 17.2547C2.56093 17.511 2.56093 17.9265 2.81721 18.1828C3.07349 18.4391 3.48901 18.4391 3.74529 18.1828L18.1828 3.74529Z",
                        fill: "currentColor"
                    }),
                    r.jsx("path", {
                        d: "M8.81939 15.1145C8.79107 15.0918 8.76175 15.0707 8.73154 15.0511L14.875 8.90764V16.773C14.875 18.057 13.3898 18.7708 12.3872 17.9687L8.81939 15.1145Z",
                        fill: "currentColor"
                    })
                ]
            });
        }
        var tS = e.i(628974);
        let tC = tS.cn("frosted-interactive rounded-(--control-r)", "flex cursor-pointer items-center justify-center", "text-text-white outline-hidden", "focus-visible:ring-2 focus-visible:ring-blue-500");
        let tA = tS.cn(tC, "aspect-square h-full shrink-0");
        let className = "shrink-0 font-body text-button text-text-white tabular-nums max-tablet:@max-[480px]:text-[0.8rem]";
        function tj({ ended, paused }) {
            if (ended) {
                return r.jsx(tx, {
                    className: "size-(--icon-md)"
                });
            }
            if (paused) {
                return r.jsx(tw, {
                    className: "size-(--icon-md)"
                });
            }
            return r.jsx(ty, {
                className: "size-(--icon-md)"
            });
        }
        function tE({ onExpand }) {
            return r.jsxs(eU.Root, {
                "data-controls": "",
                className: tS.cn("pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end p-(--control-pad)", "opacity-0 transition-opacity duration-200 ease-out data-visible:opacity-100", "[--control-pad:var(--pad-sm)] tablet:[--control-pad:clamp(var(--pad-xs),2.22cqw,var(--pad-xl))]", "[--control-h:3.2rem] tablet:[--control-h:5rem]", "in-data-compact:[--control-h:calc(3.2rem/var(--pip-scale,1))]", "[--icon-lg:calc(var(--control-h)*0.42)] [--icon-md:calc(var(--control-h)*0.36)] [--icon-sm:calc(var(--control-h)*0.26)]", "[--icon-xl:calc(var(--control-h)*0.6)]", "[--control-r:calc(var(--control-h)*0.32)]", "[--pill-gap:calc(var(--control-h)*0.3)] [--pill-px:calc(var(--control-h)*0.44)]"),
                children: [
                    r.jsx(eW, {
                        className: tS.cn(tC, "pointer-events-auto absolute top-(--control-pad) right-(--control-pad) tablet:hidden size-(--control-h)", "data-[availability=unavailable]:hidden data-[availability=unsupported]:hidden"),
                        render: (e)=>r.jsx("button", {
                                ...e,
                                children: r.jsx(tv, {
                                    className: "size-(--icon-xl)"
                                })
                            })
                    }),
                    onExpand && r.jsx("button", {
                        type: "button",
                        "aria-label": "Back to fullscreen",
                        onClick: onExpand,
                        className: tS.cn(tC, "pointer-events-auto absolute top-(--control-pad) right-(--control-pad)", "tablet:@max-[480px]:flex hidden size-(--control-h)"),
                        children: r.jsx(tv, {
                            className: "size-(--icon-xl)"
                        })
                    }),
                    r.jsx(eZ, {
                        className: tS.cn(tC, "pointer-events-auto absolute top-1/2 left-1/2 hidden size-(--control-h)", "in-data-compact:flex -translate-x-1/2 -translate-y-1/2"),
                        render: (e, t)=>r.jsx("button", {
                                ...e,
                                children: r.jsx(tj, {
                                    ended: t.ended,
                                    paused: t.paused
                                })
                            })
                    }),
                    r.jsxs(eU.Group, {
                        "aria-label": "Playback controls",
                        className: "pointer-events-auto flex in-data-compact:hidden h-(--control-h) w-full tablet:max-w-184.75 items-center gap-0 tablet:gap-gap-md",
                        children: [
                            r.jsxs("div", {
                                className: "flex h-full min-w-0 flex-1 items-center",
                                children: [
                                    r.jsx(eZ, {
                                        className: tA,
                                        render: (e, t)=>r.jsx("button", {
                                                ...e,
                                                children: r.jsx(tj, {
                                                    ended: t.ended,
                                                    paused: t.paused
                                                })
                                            })
                                    }),
                                    r.jsxs("div", {
                                        className: tS.cn("frosted rounded-(--control-r)", "flex h-full min-w-0 flex-1 items-center gap-(--pill-gap) px-(--pill-px)"),
                                        children: [
                                            r.jsx(e6.Value, {
                                                type: "current",
                                                className,
                                                render: (e, t)=>r.jsx("time", {
                                                        ...e,
                                                        children: tS.formatTime(t.seconds)
                                                    })
                                            }),
                                            r.jsxs(tb.Root, {
                                                className: "group/seek relative flex h-5 min-w-0 flex-1 cursor-pointer items-center",
                                                children: [
                                                    r.jsx(tb.Track, {
                                                        className: "relative h-[0.371rem] w-full rounded-full bg-white-alpha-200",
                                                        children: r.jsx(tb.Fill, {
                                                            className: "absolute inset-y-0 left-0 w-(--media-slider-fill) rounded-full bg-text-white"
                                                        })
                                                    }),
                                                    r.jsx(tb.Thumb, {
                                                        className: tS.cn("absolute left-(--media-slider-fill) size-3 -translate-x-1/2 rounded-full bg-text-white outline-hidden", "scale-0 transition-transform duration-150 group-data-interactive/seek:scale-100", "group-data-dragging/seek:left-(--media-slider-pointer) group-data-dragging/seek:scale-110", "focus-visible:scale-100 focus-visible:ring-2 focus-visible:ring-blue-500")
                                                    })
                                                ]
                                            }),
                                            r.jsx(e6.Value, {
                                                type: "duration",
                                                className,
                                                render: (e, t)=>r.jsx("time", {
                                                        ...e,
                                                        children: tS.formatTime(t.seconds)
                                                    })
                                            })
                                        ]
                                    }),
                                    r.jsx(eK, {
                                        className: tA,
                                        render: (e, t)=>r.jsx("button", {
                                                ...e,
                                                children: t.volumeLevel === "off" ? r.jsx(tk, {
                                                    className: "size-(--icon-lg)"
                                                }) : r.jsx(tP, {
                                                    className: "size-(--icon-lg)"
                                                })
                                            })
                                    })
                                ]
                            }),
                            r.jsx(eD, {
                                className: tS.cn(tA, "data-active:bg-surface-button-secondary data-active:text-text-primary", "data-active:supports-hover:hover:bg-surface-tertiary", "data-active:supports-hover:hover:text-text-tertiary", "tablet:@max-[480px]:hidden data-[availability=unavailable]:hidden"),
                                render: (e, t)=>r.jsx("button", {
                                        ...e,
                                        children: r.jsx("span", {
                                            className: tS.cn("font-body text-button leading-none transition-opacity", "max-tablet:@max-[480px]:text-[0.8rem]", !t.subtitlesShowing && "opacity-45"),
                                            children: "CC"
                                        })
                                    })
                            })
                        ]
                    })
                ]
            });
        }
        t = {
            features
        };
        let tT = {
            Provider ({ children }) {
                let [a] = n.useState(()=>((e, t = {})=>{
                        let r;
                        let n = null;
                        let destroyed = false;
                        let l = new AbortController;
                        let signals = new S;
                        let o = e.state({
                            target: ()=>{
                                if (destroyed) {
                                    M();
                                }
                                if (!n) {
                                    A();
                                }
                                return n;
                            },
                            signals,
                            get: ()=>r.current,
                            set: (e)=>r.patch(e)
                        });
                        r = N(o);
                        let store = {
                            [SYMBOL_VIDEOJSSTORE]: true,
                            get $state () {
                                return r;
                            },
                            get target () {
                                return n;
                            },
                            get destroyed () {
                                return destroyed;
                            },
                            get state () {
                                return r.current;
                            },
                            attach (i) {
                                if (destroyed) {
                                    M();
                                }
                                signals.reset();
                                n = i;
                                let l = {
                                    target: i,
                                    signal: signals.base,
                                    get: ()=>r.current,
                                    set: (e)=>r.patch(e),
                                    reportError,
                                    store: {
                                        get state () {
                                            return r.current;
                                        },
                                        subscribe
                                    }
                                };
                                try {
                                    e.attach?.(l);
                                } catch (error) {
                                    reportError(error);
                                }
                                try {
                                    t.onAttach?.({
                                        store,
                                        target: i,
                                        signal: signals.base
                                    });
                                } catch (error) {
                                    reportError(error);
                                }
                                return c;
                            },
                            destroy () {
                                if (!destroyed) {
                                    destroyed = true;
                                    c();
                                    l.abort();
                                }
                            },
                            subscribe
                        };
                        for (let e of Object.keys(o)){
                            Object.defineProperty(store, e, {
                                get: ()=>r.current[e],
                                enumerable: true
                            });
                        }
                        try {
                            t.onSetup?.({
                                store,
                                signal: l.signal
                            });
                        } catch (error) {
                            reportError(error);
                        }
                        return store;
                        function c() {
                            if (!i(n)) {
                                signals.reset();
                                n = null;
                                r.patch(o);
                            }
                        }
                        function subscribe(e, t) {
                            return r.subscribe(e, t);
                        }
                        function reportError(error) {
                            if (t.onError) {
                                t.onError({
                                    store,
                                    error
                                });
                            } else {
                                console.error("[vjs-store]", error);
                            }
                        }
                    })(((...e)=>({
                            state: (t)=>Object.assign({}, ...e.map((e)=>e.state(t))),
                            attach: (t)=>{
                                for (let r of e){
                                    try {
                                        r.attach?.(t);
                                    } catch (error) {
                                        t.reportError(error);
                                    }
                                }
                            }
                        }))(...t.features)));
                let [popupGroup] = n.useState(()=>{
                    let e;
                    e = null;
                    return {
                        open (t) {
                            if (e !== t) {
                                e?.close("group-open");
                                e = t;
                            }
                        },
                        close (t) {
                            if (e === t) {
                                e = null;
                            }
                        }
                    };
                });
                let [s, setS] = n.useState(null);
                let [u, setU] = n.useState(null);
                useK(a);
                n.useEffect(()=>{
                    if (s) {
                        return a.attach({
                            media: s,
                            container: u
                        });
                    }
                }, [
                    s,
                    u,
                    a
                ]);
                return r.jsx(v, {
                    value: {
                        store: a,
                        media: s,
                        setMedia: setS,
                        container: u,
                        setContainer: setU,
                        popupGroup
                    },
                    children
                });
            },
            Container,
            usePlayer (e) {
                let { store } = useY();
                return g(store, e);
            },
            useMedia () {
                let { media } = useY();
                return media;
            }
        };
        e.s([
            "default",
            0,
            ({ src, vtt, autoPlay, ref, posterSrc, onExpand, onEnded })=>{
                let cRef = n.useRef(null);
                let d = useU(ref, cRef);
                n.useEffect(()=>{
                    if (!autoPlay) {
                        return;
                    }
                    let cRef_current = cRef.current;
                    if (!cRef_current) {
                        return;
                    }
                    let t = false;
                    let r = ()=>{
                        cRef_current.muted = false;
                    };
                    (async ()=>{
                        cRef_current.muted = false;
                        try {
                            await cRef_current.play();
                            return;
                        } catch  {}
                        if (!t) {
                            cRef_current.muted = true;
                            try {
                                await cRef_current.play();
                            } catch  {
                                return;
                            }
                            window.addEventListener("pointerdown", r, {
                                once: true
                            });
                            window.addEventListener("keydown", r, {
                                once: true
                            });
                        }
                    })();
                    return ()=>{
                        t = true;
                        window.removeEventListener("pointerdown", r);
                        window.removeEventListener("keydown", r);
                    };
                }, [
                    autoPlay,
                    src
                ]);
                return r.jsx(tT.Provider, {
                    children: r.jsxs(tT.Container, {
                        className: tS.cn("@container relative size-full overflow-hidden", "[--caption-y:-0.8rem] tablet:[--caption-y:-1.2rem]", "has-[[data-controls][data-visible]]:[--caption-y:-5.6rem]", "tablet:has-[[data-controls][data-visible]]:[--caption-y:-8.4rem]", "[--caption-leading:1.15]", "[--caption-size:1.12rem] tablet:[--caption-size:1.6rem]", "[&_video::-webkit-media-text-track-container]:[translate:0_var(--caption-y)]", "[&_video::-webkit-media-text-track-container]:[opacity:var(--caption-opacity,1)]", "[&_video::-webkit-media-text-track-container]:[transition:translate_200ms_ease-out,opacity_200ms_ease-out]", "[&_video::-webkit-media-text-track-container]:[line-height:var(--caption-leading)]", "[&_video::-webkit-media-text-track-display]:[line-height:var(--caption-leading)]"),
                        children: [
                            r.jsx(ey, {
                                ref: d,
                                src,
                                preload: "metadata",
                                playsInline: true,
                                className: "size-full object-cover",
                                poster: posterSrc,
                                onEnded,
                                children: vtt && r.jsx("track", {
                                    src: vtt,
                                    kind: "captions",
                                    srcLang: "en",
                                    label: "English",
                                    default: true
                                })
                            }),
                            r.jsx(tE, {
                                onExpand
                            })
                        ]
                    })
                });
            }
        ], 701503);
    },
    898391,
    (e)=>{
        e.n(e.i(701503));
    }
]);
