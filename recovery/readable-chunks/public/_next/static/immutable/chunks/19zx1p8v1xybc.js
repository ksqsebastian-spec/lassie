;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "86769c29-032c-b597-f251-c06709e0068d";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    39118,
    (t)=>{
        "use strict";
        var e = t.i(281889);
        var i = t.i(176418);
        var s = t.i(983871);
        var a = t.i(513679);
        var r = t.i(631923);
        var n = t.i(998304);
        var o = t.i(628974);
        var h = t.i(726215);
        let src = {
            src: t.i(770750).default,
            width: 219,
            height: 123,
            blurWidth: 0,
            blurHeight: 0
        };
        var p = t.i(426310);
        var f = t.i(288565);
        let m = {
            idle: t.i(279591).default,
            appear: f.default
        };
        function useC({ size = 50, aspect = "629.18 / 578.61", clip = "idle", tone = "light", centered = false, playKey = 0, loop = clip === "idle", className, style } = {}) {
            let dRef = a.useRef(null);
            let uRef = a.useRef(null);
            a.useEffect(()=>{
                if (!dRef.current) {
                    return;
                }
                let t = p.default.loadAnimation({
                    container: dRef.current,
                    renderer: "svg",
                    loop,
                    autoplay: true,
                    animationData: m[clip],
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid meet"
                    }
                });
                uRef.current = t;
                return ()=>t.destroy();
            }, [
                clip,
                loop
            ]);
            a.useEffect(()=>{
                playKey > 0 && uRef.current?.goToAndPlay(0, true);
            }, [
                playKey
            ]);
            return e.jsx("span", {
                className,
                "aria-hidden": true,
                style: {
                    display: "block",
                    width: typeof size === "number" ? `${size}px` : size,
                    aspectRatio: aspect,
                    ...centered ? {
                        translate: "-50% -50%"
                    } : null,
                    ...style
                },
                children: e.jsx("span", {
                    ref: dRef,
                    style: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        transform: ((t)=>{
                            let [e, i] = t.split("/").map(Number.parseFloat);
                            return `scale(${700 / 629.18 * (e && i ? e / i : 1)})`;
                        })(aspect),
                        transformOrigin: "center",
                        ...tone === "dark" ? {
                            filter: "invert(1)"
                        } : null
                    }
                })
            });
        }
        function d({ location, map }) {
            return e.jsxs("div", {
                className: "article-map flex flex-col items-center gap-gap-sm",
                children: [
                    e.jsxs("div", {
                        className: "relative w-54.75",
                        children: [
                            e.jsx(h.default, {
                                src,
                                alt: map?.alt ?? "",
                                unoptimized: true,
                                className: "h-auto w-full"
                            }),
                            map ? e.jsx(useC, {
                                clip: "idle",
                                tone: "dark",
                                centered: true,
                                size: "15%",
                                aspect: "63.2 / 58.78",
                                className: "absolute",
                                style: {
                                    left: `${map.x}%`,
                                    top: `${map.y}%`
                                }
                            }) : null
                        ]
                    }),
                    e.jsx("p", {
                        className: "text-black-1000 text-label-lg opacity-70",
                        children: location
                    })
                ]
            });
        }
        var u = t.i(365280);
        let g = {
            body: "text-black-300 text-body-md",
            highlight: "text-black-1000 text-heading-sm"
        };
        function useY({ story }) {
            let r;
            let n;
            let { article, location } = story;
            let p = ((t)=>{
                let e = [];
                for (let i of t){
                    let t = e.at(-1);
                    if (t?.style === i.style) {
                        t.items.push(i);
                        continue;
                    }
                    e.push({
                        style: i.style,
                        items: [
                            i
                        ]
                    });
                }
                return e;
            })(article.paragraphs);
            let fRef = a.useRef(null);
            let mRef = a.useRef(null);
            let cRef = a.useRef({
                value: 0
            });
            i.useGSAP(()=>{
                s.default.matchMedia().add("(min-width: 1024px)", ()=>{
                    let t = s.default.timeline({
                        paused: true
                    });
                    t.fromTo("h1", {
                        y: 100
                    }, {
                        y: 0
                    });
                    t.fromTo(".article-byline", {
                        y: 200
                    }, {
                        y: 0
                    }, 0);
                    t.fromTo(".article-map", {
                        y: 400
                    }, {
                        y: 0
                    }, 0);
                    t.fromTo(".article-content", {
                        y: 600
                    }, {
                        y: 0
                    }, 0);
                    mRef.current = s.default.quickTo(cRef.current, "value", {
                        duration: 0.25,
                        onUpdate: ()=>t.progress(cRef.current.value)
                    });
                    return ()=>{
                        cRef.current.value = 0;
                        mRef.current = null;
                    };
                });
            }, {
                scope: fRef
            });
            r = (t)=>{
                mRef.current?.(t);
            };
            n = a.useRef(r);
            n.current = r;
            a.useEffect(()=>u.storiesStore.onScrub((t)=>n.current(t)), []);
            return e.jsx("article", {
                ref: fRef,
                className: "flex min-h-[120svh] w-full flex-col items-center bg-background-primary px-grid pt-gap-3xl tablet:pt-gap-3xl",
                children: e.jsxs("div", {
                    className: "flex w-full max-w-131.5 flex-col items-center gap-gap-xl pt-pad-xl tablet:pt-0",
                    children: [
                        e.jsxs("header", {
                            className: "flex w-full flex-col justify-center gap-gap-sm pt-gap-md tablet:pt-0 text-center",
                            children: [
                                e.jsx("h1", {
                                    className: "text-black-1000 text-heading-xl",
                                    children: article.headline.map((t, i)=>e.jsxs(a.Fragment, {
                                            children: [
                                                i > 0 && e.jsx("br", {}),
                                                t.spans.map((t)=>{
                                                    if (t.accent) {
                                                        return e.jsx("em", {
                                                            className: "italic",
                                                            children: t.text
                                                        }, t.id);
                                                    }
                                                    return e.jsx(a.Fragment, {
                                                        children: t.text
                                                    }, t.id);
                                                })
                                            ]
                                        }, t.id))
                                }),
                                e.jsx("p", {
                                    className: "article-byline text-black-400 text-heading-sm opacity-80",
                                    children: article.byline
                                })
                            ]
                        }),
                        e.jsx(d, {
                            location,
                            map: article.map
                        }),
                        e.jsx("div", {
                            className: "article-content flex w-full flex-col gap-[3.7rem] pb-40 tablet:pb-32.5",
                            children: p.map((t)=>e.jsx("div", {
                                    className: o.cn("flex flex-col gap-[1.1rem]", g[t.style]),
                                    children: t.items.map((t)=>e.jsx("p", {
                                            children: t.text
                                        }, t.id))
                                }, t.items[0].id))
                        })
                    ]
                })
            });
        }
        var v = t.i(808761);
        t.s([
            "StoryPage",
            0,
            ({ story })=>{
                let oRef = a.useRef(null);
                let hRef = a.useRef(null);
                let { registerArticle } = n.useStories();
                i.useGSAP(()=>{
                    s.default.fromTo(oRef.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: r.DURATION.medium,
                        ease: r.EASE_OUT
                    });
                });
                let leave = a.useCallback(()=>{
                    hRef.current ??= new Promise((resolve)=>{
                        if (u.storiesStore.pageVisible) {
                            s.default.to(oRef.current, {
                                opacity: 0,
                                duration: r.DURATION.fast,
                                ease: r.EASE_IN_OUT,
                                overwrite: true,
                                onComplete: resolve,
                                onInterrupt: resolve
                            });
                        } else {
                            resolve();
                        }
                    });
                    return hRef.current;
                }, []);
                a.useEffect(()=>{
                    registerArticle({
                        leave
                    });
                    return ()=>{
                        registerArticle(null);
                    };
                }, [
                    registerArticle,
                    leave
                ]);
                return e.jsxs("section", {
                    ref: oRef,
                    className: "relative z-30 flex h-auto w-screen flex-col bg-background-primary",
                    children: [
                        e.jsx("div", {
                            "aria-hidden": true,
                            className: "pointer-events-none fixed inset-0 -z-10 bg-background-primary"
                        }),
                        e.jsx(useY, {
                            story
                        }),
                        e.jsx(v.StoryCloseButton, {})
                    ]
                });
            }
        ], 39118);
    },
    426310,
    (t, e, i)=>{
        if (typeof document !== "undefined" && typeof navigator !== "undefined") {
            t.e;
            e.exports = function() {
                "use strict";
                let t;
                let e;
                let s;
                let a;
                let n;
                let o;
                let l;
                let p = "";
                let f = false;
                const m = (t)=>{
                    p = t;
                };
                const c = ()=>p;
                function d(t) {
                    return document.createElement(t);
                }
                function u(t, e) {
                    let i;
                    let s;
                    const t_length = t.length;
                    for(i = 0; i < t_length; i += 1){
                        for(const r in s = t[i].prototype){
                            if (Object.prototype.hasOwnProperty.call(s, r)) {
                                e.prototype[r] = s[r];
                            }
                        }
                    }
                }
                const g = (()=>{
                    function t(t) {
                        this.audios = [];
                        this.audioFactory = t;
                        this._volume = 1;
                        this._isMuted = false;
                    }
                    t.prototype = {
                        addAudio (t) {
                            this.audios.push(t);
                        },
                        pause () {
                            let t;
                            const length = this.audios.length;
                            for(t = 0; t < length; t += 1){
                                this.audios[t].pause();
                            }
                        },
                        resume () {
                            let t;
                            const length = this.audios.length;
                            for(t = 0; t < length; t += 1){
                                this.audios[t].resume();
                            }
                        },
                        setRate (t) {
                            let e;
                            const length = this.audios.length;
                            for(e = 0; e < length; e += 1){
                                this.audios[e].setRate(t);
                            }
                        },
                        createAudio (t) {
                            if (this.audioFactory) {
                                return this.audioFactory(t);
                            }
                            if (window.Howl) {
                                return new window.Howl({
                                    src: [
                                        t
                                    ]
                                });
                            }
                            return {
                                isPlaying: false,
                                play () {
                                    this.isPlaying = true;
                                },
                                seek () {
                                    this.isPlaying = false;
                                },
                                playing () {},
                                rate () {},
                                setVolume () {}
                            };
                        },
                        setAudioFactory (t) {
                            this.audioFactory = t;
                        },
                        setVolume (t) {
                            this._volume = t;
                            this._updateVolume();
                        },
                        mute () {
                            this._isMuted = true;
                            this._updateVolume();
                        },
                        unmute () {
                            this._isMuted = false;
                            this._updateVolume();
                        },
                        getVolume () {
                            return this._volume;
                        },
                        _updateVolume () {
                            let t;
                            const length = this.audios.length;
                            for(t = 0; t < length; t += 1){
                                this.audios[t].volume(!this._isMuted * this._volume);
                            }
                        }
                    };
                    return ()=>new t;
                })();
                const y = (()=>{
                    function t(t, e) {
                        let i;
                        let s = 0;
                        const a = [];
                        switch(t){
                            case "int16":
                            case "uint8c":
                                i = 1;
                                break;
                            default:
                                i = 1.1;
                        }
                        for(s = 0; s < e; s += 1){
                            a.push(i);
                        }
                        return a;
                    }
                    if (typeof Uint8ClampedArray === "function" && typeof Float32Array === "function") {
                        return (e, i)=>{
                            switch(e){
                                case "float32":
                                    return new Float32Array(i);
                                case "int16":
                                    return new Int16Array(i);
                                case "uint8c":
                                    return new Uint8ClampedArray(i);
                                default:
                                    return t(e, i);
                            }
                        };
                    }
                    return t;
                })();
                function v(length) {
                    return Array.apply(null, {
                        length
                    });
                }
                function x(t) {
                    return (x = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
                        if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
                            return "symbol";
                        }
                        return typeof t;
                    })(t);
                }
                let k;
                let b = true;
                let _ = null;
                let A = "";
                const P = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const Math_pow = Math.pow;
                const Math_sqrt = Math.sqrt;
                const Math_floor = Math.floor;
                const Math_min = Math.min;
                const C = {};
                const T = [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atanh",
                    "atan2",
                    "ceil",
                    "cbrt",
                    "expm1",
                    "clz32",
                    "cos",
                    "cosh",
                    "exp",
                    "floor",
                    "fround",
                    "hypot",
                    "imul",
                    "log",
                    "log1p",
                    "log2",
                    "log10",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                    "E",
                    "LN10",
                    "LN2",
                    "LOG10E",
                    "LOG2E",
                    "PI",
                    "SQRT1_2",
                    "SQRT2"
                ];
                const T_length = T.length;
                for(k = 0; k < T_length; k += 1){
                    C[T[k]] = Math[T[k]];
                }
                C.random = Math.random;
                C.abs = (t)=>{
                    if (x(t) === "object" && t.length) {
                        let e;
                        const i = v(t.length);
                        const s = t.length;
                        for(e = 0; e < s; e += 1){
                            i[e] = Math.abs(t[e]);
                        }
                        return i;
                    }
                    return Math.abs(t);
                };
                let F = 150;
                const I = Math.PI / 180;
                function L(t) {}
                function V(t, e, i, s) {
                    this.type = t;
                    this.currentTime = e;
                    this.totalTime = i;
                    this.direction = s < 0 ? -1 : 1;
                }
                function R(t, e) {
                    this.type = t;
                    this.direction = e < 0 ? -1 : 1;
                }
                function B(t, e, i, s) {
                    this.type = t;
                    this.currentLoop = i;
                    this.totalLoops = e;
                    this.direction = s < 0 ? -1 : 1;
                }
                function z(t, e, i) {
                    this.type = t;
                    this.firstFrame = e;
                    this.totalFrames = i;
                }
                function N(t, e) {
                    this.type = t;
                    this.target = e;
                }
                function O(t, e) {
                    this.type = "renderFrameError";
                    this.nativeError = t;
                    this.currentTime = e;
                }
                function j(t) {
                    this.type = "configError";
                    this.nativeError = t;
                }
                U = 0;
                const G = ()=>{
                    U += 1;
                    return A + "__lottie_element_" + U;
                };
                function q(t, e, i) {
                    let s;
                    let a;
                    let r;
                    let n;
                    let o;
                    let h;
                    let l;
                    let p;
                    n = Math.floor(6 * t);
                    o = 6 * t - n;
                    h = i * (1 - e);
                    l = i * (1 - o * e);
                    p = i * (1 - (1 - o) * e);
                    switch(n % 6){
                        case 0:
                            s = i;
                            a = p;
                            r = h;
                            break;
                        case 1:
                            s = l;
                            a = i;
                            r = h;
                            break;
                        case 2:
                            s = h;
                            a = i;
                            r = p;
                            break;
                        case 3:
                            s = h;
                            a = l;
                            r = i;
                            break;
                        case 4:
                            s = p;
                            a = h;
                            r = i;
                            break;
                        case 5:
                            s = i;
                            a = h;
                            r = l;
                    }
                    return [
                        s,
                        a,
                        r
                    ];
                }
                function W(t, e, i) {
                    let s;
                    const a = Math.max(t, e, i);
                    const r = Math.min(t, e, i);
                    const n = a - r;
                    switch(a){
                        case r:
                            s = 0;
                            break;
                        case t:
                            s = (e - i + 6 * (e < i) * n) / (6 * n);
                            break;
                        case e:
                            s = (i - t + 2 * n) / (6 * n);
                            break;
                        case i:
                            s = (t - e + 4 * n) / (6 * n);
                    }
                    return [
                        s,
                        a === 0 ? 0 : n / a,
                        a / 255
                    ];
                }
                function H(t, e) {
                    const i = W(255 * t[0], 255 * t[1], 255 * t[2]);
                    i[1] += e;
                    if (i[1] > 1) {
                        i[1] = 1;
                    } else if (i[1] <= 0) {
                        i[1] = 0;
                    }
                    return q(i[0], i[1], i[2]);
                }
                function X(t, e) {
                    const i = W(255 * t[0], 255 * t[1], 255 * t[2]);
                    i[2] += e;
                    if (i[2] > 1) {
                        i[2] = 1;
                    } else if (i[2] < 0) {
                        i[2] = 0;
                    }
                    return q(i[0], i[1], i[2]);
                }
                function Y(t, e) {
                    const i = W(255 * t[0], 255 * t[1], 255 * t[2]);
                    i[0] += e / 360;
                    if (i[0] > 1) {
                        i[0] -= 1;
                    } else if (i[0] < 0) {
                        i[0] += 1;
                    }
                    return q(i[0], i[1], i[2]);
                }
                var U;
                let K;
                let J;
                const Z = [];
                for(K = 0; K < 256; K += 1){
                    J = K.toString(16);
                    Z[K] = J.length === 1 ? "0" + J : J;
                }
                const Q = (t)=>{
                    b = !!t;
                };
                const $ = (t)=>{
                    _ = t;
                };
                const tt = ()=>_;
                const te = ()=>null;
                const ti = (t)=>{
                    F = t;
                };
                const ts = ()=>F;
                const ta = (t)=>{
                    A = t;
                };
                function tr(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t);
                }
                function tn(t) {
                    return (tn = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
                        if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
                            return "symbol";
                        }
                        return typeof t;
                    })(t);
                }
                const to = (()=>{
                    let t;
                    let e;
                    let i = 1;
                    const s = [];
                    const a = {
                        onmessage () {},
                        postMessage (e) {
                            t({
                                data: e
                            });
                        }
                    };
                    const r = {
                        postMessage (t) {
                            a.onmessage({
                                data: t
                            });
                        }
                    };
                    function n() {
                        if (!e) {
                            e = ((e)=>{
                                if (window.Worker && window.Blob && f) {
                                    const i = new Blob([
                                        "var _workerSelf = self; self.onmessage = ",
                                        e.toString()
                                    ], {
                                        type: "text/javascript"
                                    });
                                    return new Worker(URL.createObjectURL(i));
                                }
                                t = e;
                                return a;
                            })((t)=>{
                                if (!r.dataManager) {
                                    r.dataManager = (()=>{
                                        function t(a, r) {
                                            let n;
                                            let o;
                                            let h;
                                            let l;
                                            let p;
                                            let f;
                                            const a_length = a.length;
                                            for(o = 0; o < a_length; o += 1){
                                                if ("ks" in (n = a[o]) && !n.completed) {
                                                    n.completed = true;
                                                    if (n.hasMask) {
                                                        var c;
                                                        const d = n.masksProperties;
                                                        l = d.length;
                                                        for(h = 0; h < l; h += 1){
                                                            if (d[h].pt.k.i) {
                                                                s(d[h].pt.k);
                                                            } else {
                                                                f = d[h].pt.k.length;
                                                                for(p = 0; p < f; p += 1){
                                                                    if (d[h].pt.k[p].s) {
                                                                        s(d[h].pt.k[p].s[0]);
                                                                    }
                                                                    if (d[h].pt.k[p].e) {
                                                                        s(d[h].pt.k[p].e[0]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (n.ty === 0) {
                                                        n.layers = e(n.refId, r);
                                                        t(n.layers, r);
                                                    } else if (n.ty === 4) {
                                                        i(n.shapes);
                                                    } else {
                                                        n.ty === 5 && (c = n).t.a.length === 0 && c.t.p;
                                                    }
                                                }
                                            }
                                        }
                                        function e(refId, e) {
                                            const i = ((t, e)=>{
                                                for(let i = 0, s = e.length; i < s;){
                                                    if (e[i].id === t) {
                                                        return e[i];
                                                    }
                                                    i += 1;
                                                }
                                                return null;
                                            })(refId, e);
                                            if (i) {
                                                if (i.layers.__used) {
                                                    return JSON.parse(JSON.stringify(i.layers));
                                                }
                                                i.layers.__used = true;
                                                return i.layers;
                                            }
                                            return null;
                                        }
                                        function i(t) {
                                            let e;
                                            let a;
                                            let r;
                                            for(e = t.length - 1; e >= 0; e -= 1){
                                                if (t[e].ty === "sh") {
                                                    if (t[e].ks.k.i) {
                                                        s(t[e].ks.k);
                                                    } else {
                                                        r = t[e].ks.k.length;
                                                        for(a = 0; a < r; a += 1){
                                                            if (t[e].ks.k[a].s) {
                                                                s(t[e].ks.k[a].s[0]);
                                                            }
                                                            if (t[e].ks.k[a].e) {
                                                                s(t[e].ks.k[a].e[0]);
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    if (t[e].ty === "gr") {
                                                        i(t[e].it);
                                                    }
                                                }
                                            }
                                        }
                                        function s(t) {
                                            let e;
                                            const length = t.i.length;
                                            for(e = 0; e < length; e += 1){
                                                t.i[e][0] += t.v[e][0];
                                                t.i[e][1] += t.v[e][1];
                                                t.o[e][0] += t.v[e][0];
                                                t.o[e][1] += t.v[e][1];
                                            }
                                        }
                                        function a(t, e) {
                                            const i = e ? e.split(".") : [
                                                100,
                                                100,
                                                100
                                            ];
                                            return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null));
                                        }
                                        let r;
                                        const n = (()=>{
                                            const t = [
                                                4,
                                                4,
                                                14
                                            ];
                                            function e(layers) {
                                                let e;
                                                const t_length = layers.length;
                                                for(e = 0; e < t_length; e += 1){
                                                    if (layers[e].ty === 5) {
                                                        ((t)=>{
                                                            const s_1 = t.t.d;
                                                            t.t.d = {
                                                                k: [
                                                                    {
                                                                        s: s_1,
                                                                        t: 0
                                                                    }
                                                                ]
                                                            };
                                                        })(layers[e]);
                                                    }
                                                }
                                            }
                                            return (i)=>{
                                                if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                    let s;
                                                    const r = i.assets.length;
                                                    for(s = 0; s < r; s += 1){
                                                        if (i.assets[s].layers) {
                                                            e(i.assets[s].layers);
                                                        }
                                                    }
                                                }
                                            };
                                        })();
                                        r = [
                                            4,
                                            7,
                                            99
                                        ];
                                        const o = (t)=>{
                                            if (t.chars && !a(r, t.v)) {
                                                let e;
                                                const s = t.chars.length;
                                                for(e = 0; e < s; e += 1){
                                                    const n = t.chars[e];
                                                    if (n.data && n.data.shapes) {
                                                        i(n.data.shapes);
                                                        n.data.ip = 0;
                                                        n.data.op = 99999;
                                                        n.data.st = 0;
                                                        n.data.sr = 1;
                                                        n.data.ks = {
                                                            p: {
                                                                k: [
                                                                    0,
                                                                    0
                                                                ],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [
                                                                    100,
                                                                    100
                                                                ],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [
                                                                    0,
                                                                    0
                                                                ],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        };
                                                        if (!t.chars[e].t) {
                                                            n.data.shapes.push({
                                                                ty: "no"
                                                            });
                                                            n.data.shapes[0].it.push({
                                                                p: {
                                                                    k: [
                                                                        0,
                                                                        0
                                                                    ],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [
                                                                        100,
                                                                        100
                                                                    ],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [
                                                                        0,
                                                                        0
                                                                    ],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                },
                                                                sk: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                sa: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                ty: "tr"
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        };
                                        const h = (()=>{
                                            const t = [
                                                5,
                                                7,
                                                15
                                            ];
                                            function e(layers) {
                                                let e;
                                                const t_length = layers.length;
                                                for(e = 0; e < t_length; e += 1){
                                                    if (layers[e].ty === 5) {
                                                        ((t)=>{
                                                            const e = t.t.p;
                                                            if (typeof e.a === "number") {
                                                                e.a = {
                                                                    a: 0,
                                                                    k: e.a
                                                                };
                                                            }
                                                            if (typeof e.p === "number") {
                                                                e.p = {
                                                                    a: 0,
                                                                    k: e.p
                                                                };
                                                            }
                                                            if (typeof e.r === "number") {
                                                                e.r = {
                                                                    a: 0,
                                                                    k: e.r
                                                                };
                                                            }
                                                        })(layers[e]);
                                                    }
                                                }
                                            }
                                            return (i)=>{
                                                if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                    let s;
                                                    const r = i.assets.length;
                                                    for(s = 0; s < r; s += 1){
                                                        if (i.assets[s].layers) {
                                                            e(i.assets[s].layers);
                                                        }
                                                    }
                                                }
                                            };
                                        })();
                                        const l = (()=>{
                                            const t = [
                                                4,
                                                1,
                                                9
                                            ];
                                            function e(layers) {
                                                let e;
                                                const t_length = layers.length;
                                                for(e = 0; e < t_length; e += 1){
                                                    if (layers[e].ty === 4) {
                                                        (function t(e) {
                                                            let i;
                                                            let s;
                                                            let a;
                                                            const e_length = e.length;
                                                            for(i = 0; i < e_length; i += 1){
                                                                if (e[i].ty === "gr") {
                                                                    t(e[i].it);
                                                                } else if (e[i].ty === "fl" || e[i].ty === "st") {
                                                                    if (e[i].c.k && e[i].c.k[0].i) {
                                                                        a = e[i].c.k.length;
                                                                        for(s = 0; s < a; s += 1){
                                                                            if (e[i].c.k[s].s) {
                                                                                e[i].c.k[s].s[0] /= 255;
                                                                                e[i].c.k[s].s[1] /= 255;
                                                                                e[i].c.k[s].s[2] /= 255;
                                                                                e[i].c.k[s].s[3] /= 255;
                                                                            }
                                                                            if (e[i].c.k[s].e) {
                                                                                e[i].c.k[s].e[0] /= 255;
                                                                                e[i].c.k[s].e[1] /= 255;
                                                                                e[i].c.k[s].e[2] /= 255;
                                                                                e[i].c.k[s].e[3] /= 255;
                                                                            }
                                                                        }
                                                                    } else {
                                                                        e[i].c.k[0] /= 255;
                                                                        e[i].c.k[1] /= 255;
                                                                        e[i].c.k[2] /= 255;
                                                                        e[i].c.k[3] /= 255;
                                                                    }
                                                                }
                                                            }
                                                        })(layers[e].shapes);
                                                    }
                                                }
                                            }
                                            return (i)=>{
                                                if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                    let s;
                                                    const r = i.assets.length;
                                                    for(s = 0; s < r; s += 1){
                                                        if (i.assets[s].layers) {
                                                            e(i.assets[s].layers);
                                                        }
                                                    }
                                                }
                                            };
                                        })();
                                        const p = (()=>{
                                            const t = [
                                                4,
                                                4,
                                                18
                                            ];
                                            function e(layers) {
                                                let e;
                                                let i;
                                                let s;
                                                let a;
                                                let r;
                                                let n;
                                                const t_length = layers.length;
                                                for(i = 0; i < t_length; i += 1){
                                                    if ((e = layers[i]).hasMask) {
                                                        const h = e.masksProperties;
                                                        a = h.length;
                                                        for(s = 0; s < a; s += 1){
                                                            if (h[s].pt.k.i) {
                                                                h[s].pt.k.c = h[s].cl;
                                                            } else {
                                                                n = h[s].pt.k.length;
                                                                for(r = 0; r < n; r += 1){
                                                                    if (h[s].pt.k[r].s) {
                                                                        h[s].pt.k[r].s[0].c = h[s].cl;
                                                                    }
                                                                    if (h[s].pt.k[r].e) {
                                                                        h[s].pt.k[r].e[0].c = h[s].cl;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (e.ty === 4) {
                                                        (function t(e) {
                                                            let i;
                                                            let s;
                                                            let a;
                                                            for(i = e.length - 1; i >= 0; i -= 1){
                                                                if (e[i].ty === "sh") {
                                                                    if (e[i].ks.k.i) {
                                                                        e[i].ks.k.c = e[i].closed;
                                                                    } else {
                                                                        a = e[i].ks.k.length;
                                                                        for(s = 0; s < a; s += 1){
                                                                            if (e[i].ks.k[s].s) {
                                                                                e[i].ks.k[s].s[0].c = e[i].closed;
                                                                            }
                                                                            if (e[i].ks.k[s].e) {
                                                                                e[i].ks.k[s].e[0].c = e[i].closed;
                                                                            }
                                                                        }
                                                                    }
                                                                } else {
                                                                    if (e[i].ty === "gr") {
                                                                        t(e[i].it);
                                                                    }
                                                                }
                                                            }
                                                        })(e.shapes);
                                                    }
                                                }
                                            }
                                            return (i)=>{
                                                if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                    let s;
                                                    const r = i.assets.length;
                                                    for(s = 0; s < r; s += 1){
                                                        if (i.assets[s].layers) {
                                                            e(i.assets[s].layers);
                                                        }
                                                    }
                                                }
                                            };
                                        })();
                                        const f = {};
                                        f.completeData = (i)=>{
                                            if (!i.__complete) {
                                                l(i);
                                                n(i);
                                                o(i);
                                                h(i);
                                                p(i);
                                                t(i.layers, i.assets);
                                                ((i, s)=>{
                                                    if (i) {
                                                        let a = 0;
                                                        const r = i.length;
                                                        for(a = 0; a < r; a += 1){
                                                            if (i[a].t === 1) {
                                                                i[a].data.layers = e(i[a].data.refId, s);
                                                                t(i[a].data.layers, s);
                                                            }
                                                        }
                                                    }
                                                })(i.chars, i.assets);
                                                i.__complete = true;
                                            }
                                        };
                                        f.checkColors = l;
                                        f.checkChars = o;
                                        f.checkPathProperties = h;
                                        f.checkShapes = p;
                                        f.completeLayers = t;
                                        return f;
                                    })();
                                }
                                if (!r.assetLoader) {
                                    r.assetLoader = (()=>{
                                        function t(t) {
                                            const e = t.getResponseHeader("content-type");
                                            if (e && t.responseType === "json" && -1 !== e.indexOf("json") || t.response && tn(t.response) === "object") {
                                                return t.response;
                                            }
                                            if (t.response && typeof t.response === "string") {
                                                return JSON.parse(t.response);
                                            }
                                            if (t.responseText) {
                                                return JSON.parse(t.responseText);
                                            }
                                            return null;
                                        }
                                        return {
                                            load (e, i, s, a) {
                                                let r;
                                                const n = new XMLHttpRequest;
                                                try {
                                                    n.responseType = "json";
                                                } catch (t) {}
                                                n.onreadystatechange = ()=>{
                                                    if (n.readyState === 4) {
                                                        if (n.status === 200) {
                                                            s(r = t(n));
                                                        } else {
                                                            try {
                                                                r = t(n);
                                                                s(r);
                                                            } catch (error) {
                                                                if (a) {
                                                                    a(error);
                                                                }
                                                            }
                                                        }
                                                    }
                                                };
                                                try {
                                                    n.open("GET", e, true);
                                                } catch (t) {
                                                    n.open("GET", i + "/" + e, true);
                                                }
                                                n.send();
                                            }
                                        };
                                    })();
                                }
                                if (t.data.type === "loadAnimation") {
                                    r.assetLoader.load(t.data.path, t.data.fullPath, (e)=>{
                                        r.dataManager.completeData(e);
                                        r.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        });
                                    }, ()=>{
                                        r.postMessage({
                                            id: t.data.id,
                                            status: "error"
                                        });
                                    });
                                } else if (t.data.type === "complete") {
                                    const e = t.data.animation;
                                    r.dataManager.completeData(e);
                                    r.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    });
                                } else {
                                    if (t.data.type === "loadData") {
                                        r.assetLoader.load(t.data.path, t.data.fullPath, (payload)=>{
                                            r.postMessage({
                                                id: t.data.id,
                                                payload,
                                                status: "success"
                                            });
                                        }, ()=>{
                                            r.postMessage({
                                                id: t.data.id,
                                                status: "error"
                                            });
                                        });
                                    }
                                }
                            });
                            e.onmessage = (t)=>{
                                const t_data = t.data;
                                const i = t_data.id;
                                const a = s[i];
                                s[i] = null;
                                if (t_data.status === "success") {
                                    a.onComplete(t_data.payload);
                                } else if (a.onError) {
                                    a.onError();
                                }
                            };
                        }
                    }
                    function o(onComplete, onError) {
                        const a = "processId_" + (i += 1);
                        s[a] = {
                            onComplete,
                            onError
                        };
                        return a;
                    }
                    return {
                        loadAnimation (t, i, s) {
                            n();
                            const a = o(i, s);
                            e.postMessage({
                                type: "loadAnimation",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: a
                            });
                        },
                        loadData (t, i, s) {
                            n();
                            const a = o(i, s);
                            e.postMessage({
                                type: "loadData",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: a
                            });
                        },
                        completeAnimation (animation, i, s) {
                            n();
                            const a = o(i, s);
                            e.postMessage({
                                type: "complete",
                                animation,
                                id: a
                            });
                        }
                    };
                })();
                const th = (()=>{
                    let t;
                    let e;
                    t = d("canvas");
                    t.width = 1;
                    t.height = 1;
                    e = t.getContext("2d");
                    e.fillStyle = "rgba(0,0,0,0)";
                    e.fillRect(0, 0, 1, 1);
                    const i = t;
                    function imageLoaded() {
                        this.loadedAssets += 1;
                        if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
                            this.imagesLoadedCb(null);
                        }
                    }
                    function footageLoaded() {
                        this.loadedFootagesCount += 1;
                        if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
                            this.imagesLoadedCb(null);
                        }
                    }
                    function r(t, assetsPath, path) {
                        let s = "";
                        if (t.e) {
                            s = t.p;
                        } else if (assetsPath) {
                            let a = t.p;
                            if (-1 !== a.indexOf("images/")) {
                                a = a.split("/")[1];
                            }
                            s = assetsPath + a;
                        } else {
                            s = path + (t.u ? t.u : "") + t.p;
                        }
                        return s;
                    }
                    function n(t) {
                        let e = 0;
                        var i = setInterval((function() {
                            if (t.getBBox().width || e > 500) {
                                this._imageLoaded();
                                clearInterval(i);
                            }
                            e += 1;
                        }).bind(this), 50);
                    }
                    function o(t) {
                        const e = {
                            assetData: t
                        };
                        const i = r(t, this.assetsPath, this.path);
                        to.loadData(i, (function(t) {
                            e.img = t;
                            this._footageLoaded();
                        }).bind(this), (function() {
                            e.img = {};
                            this._footageLoaded();
                        }).bind(this));
                        return e;
                    }
                    function h() {
                        this._imageLoaded = imageLoaded.bind(this);
                        this._footageLoaded = footageLoaded.bind(this);
                        this.testImageLoaded = n.bind(this);
                        this.createFootageData = o.bind(this);
                        this.assetsPath = "";
                        this.path = "";
                        this.totalImages = 0;
                        this.totalFootages = 0;
                        this.loadedAssets = 0;
                        this.loadedFootagesCount = 0;
                        this.imagesLoadedCb = null;
                        this.images = [];
                    }
                    h.prototype = {
                        loadAssets (t, e) {
                            this.imagesLoadedCb = e;
                            let i;
                            const t_length = t.length;
                            for(i = 0; i < t_length; i += 1){
                                t[i].layers || (t[i].t && t[i].t !== "seq" ? t[i].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))));
                            }
                        },
                        setAssetsPath (t) {
                            this.assetsPath = t || "";
                        },
                        setPath (t) {
                            this.path = t || "";
                        },
                        loadedImages () {
                            return this.totalImages === this.loadedAssets;
                        },
                        loadedFootages () {
                            return this.totalFootages === this.loadedFootagesCount;
                        },
                        destroy () {
                            this.imagesLoadedCb = null;
                            this.images.length = 0;
                        },
                        getAsset (t) {
                            for(let e = 0, i = this.images.length; e < i;){
                                if (this.images[e].assetData === t) {
                                    return this.images[e].img;
                                }
                                e += 1;
                            }
                            return null;
                        },
                        createImgData (t) {
                            const e = r(t, this.assetsPath, this.path);
                            const s = d("img");
                            s.crossOrigin = "anonymous";
                            s.addEventListener("load", this._imageLoaded, false);
                            s.addEventListener("error", (function() {
                                a.img = i;
                                this._imageLoaded();
                            }).bind(this), false);
                            s.src = e;
                            var a = {
                                img: s,
                                assetData: t
                            };
                            return a;
                        },
                        createImageData (t) {
                            const e = r(t, this.assetsPath, this.path);
                            const s = tr("image");
                            if (P) {
                                this.testImageLoaded(s);
                            } else {
                                s.addEventListener("load", this._imageLoaded, false);
                            }
                            s.addEventListener("error", (function() {
                                a.img = i;
                                this._imageLoaded();
                            }).bind(this), false);
                            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
                            if (this._elementHelper.append) {
                                this._elementHelper.append(s);
                            } else {
                                this._elementHelper.appendChild(s);
                            }
                            var a = {
                                img: s,
                                assetData: t
                            };
                            return a;
                        },
                        imageLoaded,
                        footageLoaded,
                        setCacheType (t, e) {
                            if (t === "svg") {
                                this._elementHelper = e;
                                this._createImageData = this.createImageData.bind(this);
                            } else {
                                this._createImageData = this.createImgData.bind(this);
                            }
                        }
                    };
                    return h;
                })();
                function tl() {}
                tl.prototype = {
                    triggerEvent (t, e) {
                        if (this._cbs[t]) {
                            for(let i = this._cbs[t], s = 0; s < i.length; s += 1){
                                i[s](e);
                            }
                        }
                    },
                    addEventListener (t, e) {
                        if (!this._cbs[t]) {
                            this._cbs[t] = [];
                        }
                        this._cbs[t].push(e);
                        return (function() {
                            this.removeEventListener(t, e);
                        }).bind(this);
                    },
                    removeEventListener (t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for(let i = 0, s = this._cbs[t].length; i < s;){
                                    if (this._cbs[t][i] === e) {
                                        this._cbs[t].splice(i, 1);
                                        i -= 1;
                                        s -= 1;
                                    }
                                    i += 1;
                                }
                                if (!this._cbs[t].length) {
                                    this._cbs[t] = null;
                                }
                            }
                        } else {
                            this._cbs[t] = null;
                        }
                    }
                };
                const tp = (t)=>{
                    const e = [];
                    for(let i = 0; i < t.length; i += 1){
                        const s = t[i];
                        const a = {
                            time: s.tm,
                            duration: s.dr
                        };
                        try {
                            a.payload = JSON.parse(t[i].cm);
                        } catch (e) {
                            try {
                                a.payload = ((t)=>{
                                    let e;
                                    for(var i = t.split("\r\n"), s = {}, a = 0, r = 0; r < i.length; r += 1){
                                        if ((e = i[r].split(":")).length === 2) {
                                            s[e[0]] = e[1].trim();
                                            a += 1;
                                        }
                                    }
                                    if (a === 0) {
                                        throw Error();
                                    }
                                    return s;
                                })(t[i].cm);
                            } catch (e) {
                                a.payload = {
                                    name: t[i].cm
                                };
                            }
                        }
                        e.push(a);
                    }
                    return e;
                };
                const tf = (()=>{
                    function t(t) {
                        this.compositions.push(t);
                    }
                    return ()=>{
                        function e(t) {
                            for(let e = 0, i = this.compositions.length; e < i;){
                                if (this.compositions[e].data && this.compositions[e].data.nm === t) {
                                    if (this.compositions[e].prepareFrame && this.compositions[e].data.xt) {
                                        this.compositions[e].prepareFrame(this.currentFrame);
                                    }
                                    return this.compositions[e].compInterface;
                                }
                                e += 1;
                            }
                            return null;
                        }
                        e.compositions = [];
                        e.currentFrame = 0;
                        e.registerComposition = t;
                        return e;
                    };
                })();
                const tm = {};
                function tc(t) {
                    return (tc = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
                        if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
                            return "symbol";
                        }
                        return typeof t;
                    })(t);
                }
                const td = function() {
                    this._cbs = [];
                    this.name = "";
                    this.path = "";
                    this.isLoaded = false;
                    this.currentFrame = 0;
                    this.currentRawFrame = 0;
                    this.firstFrame = 0;
                    this.totalFrames = 0;
                    this.frameRate = 0;
                    this.frameMult = 0;
                    this.playSpeed = 1;
                    this.playDirection = 1;
                    this.playCount = 0;
                    this.animationData = {};
                    this.assets = [];
                    this.isPaused = true;
                    this.autoplay = false;
                    this.loop = true;
                    this.renderer = null;
                    this.animationID = G();
                    this.assetsPath = "";
                    this.timeCompleted = 0;
                    this.segmentPos = 0;
                    this.isSubframeEnabled = b;
                    this.segments = [];
                    this._idle = true;
                    this._completedLoop = false;
                    this.projectInterface = tf();
                    this.imagePreloader = new th;
                    this.audioController = g();
                    this.markers = [];
                    this.configAnimation = this.configAnimation.bind(this);
                    this.onSetupError = this.onSetupError.bind(this);
                    this.onSegmentComplete = this.onSegmentComplete.bind(this);
                    this.drawnFrameEvent = new V("drawnFrame", 0, 0, 0);
                    this.expressionsPlugin = tt();
                };
                u([
                    tl
                ], td);
                td.prototype.setParams = function(t) {
                    if (t.wrapper || t.container) {
                        this.wrapper = t.wrapper || t.container;
                    }
                    let e = "svg";
                    if (t.animType) {
                        e = t.animType;
                    } else if (t.renderer) {
                        e = t.renderer;
                    }
                    const i = tm[e];
                    this.renderer = new i(this, t.rendererSettings);
                    this.imagePreloader.setCacheType(e, this.renderer.globalData.defs);
                    this.renderer.setProjectInterface(this.projectInterface);
                    this.animType = e;
                    if (t.loop === "" || t.loop === null || t.loop === undefined || t.loop === true) {
                        this.loop = true;
                    } else if (t.loop === false) {
                        this.loop = false;
                    } else {
                        this.loop = parseInt(t.loop, 10);
                    }
                    this.autoplay = !("autoplay" in t) || t.autoplay;
                    this.name = t.name ? t.name : "";
                    this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments;
                    this.assetsPath = t.assetsPath;
                    this.initialSegment = t.initialSegment;
                    if (t.audioFactory) {
                        this.audioController.setAudioFactory(t.audioFactory);
                    }
                    if (t.animationData) {
                        this.setupAnimation(t.animationData);
                    } else if (t.path) {
                        if (-1 !== t.path.lastIndexOf("\\")) {
                            this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1);
                        } else {
                            this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1);
                        }
                        this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1);
                        this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
                        to.loadAnimation(t.path, this.configAnimation, this.onSetupError);
                    }
                };
                td.prototype.onSetupError = function() {
                    this.trigger("data_failed");
                };
                td.prototype.setupAnimation = function(t) {
                    to.completeAnimation(t, this.configAnimation);
                };
                td.prototype.setData = function(wrapper, animationData) {
                    if (animationData && tc(animationData) !== "object") {
                        animationData = JSON.parse(animationData);
                    }
                    const i = {
                        wrapper,
                        animationData
                    };
                    const t_attributes = wrapper.attributes;
                    i.path = t_attributes.getNamedItem("data-animation-path") ? t_attributes.getNamedItem("data-animation-path").value : t_attributes.getNamedItem("data-bm-path") ? t_attributes.getNamedItem("data-bm-path").value : t_attributes.getNamedItem("bm-path") ? t_attributes.getNamedItem("bm-path").value : "";
                    i.animType = t_attributes.getNamedItem("data-anim-type") ? t_attributes.getNamedItem("data-anim-type").value : t_attributes.getNamedItem("data-bm-type") ? t_attributes.getNamedItem("data-bm-type").value : t_attributes.getNamedItem("bm-type") ? t_attributes.getNamedItem("bm-type").value : t_attributes.getNamedItem("data-bm-renderer") ? t_attributes.getNamedItem("data-bm-renderer").value : t_attributes.getNamedItem("bm-renderer") ? t_attributes.getNamedItem("bm-renderer").value : (()=>{
                        if (tm.canvas) {
                            return "canvas";
                        }
                        for(const t in tm){
                            if (tm[t]) {
                                return t;
                            }
                        }
                        return "";
                    })() || "canvas";
                    const a = t_attributes.getNamedItem("data-anim-loop") ? t_attributes.getNamedItem("data-anim-loop").value : t_attributes.getNamedItem("data-bm-loop") ? t_attributes.getNamedItem("data-bm-loop").value : t_attributes.getNamedItem("bm-loop") ? t_attributes.getNamedItem("bm-loop").value : "";
                    switch(a){
                        case "false":
                            i.loop = false;
                            break;
                        case "true":
                            i.loop = true;
                            break;
                        default:
                            if (a !== "") {
                                i.loop = parseInt(a, 10);
                            }
                    }
                    i.autoplay = (t_attributes.getNamedItem("data-anim-autoplay") ? t_attributes.getNamedItem("data-anim-autoplay").value : t_attributes.getNamedItem("data-bm-autoplay") ? t_attributes.getNamedItem("data-bm-autoplay").value : !t_attributes.getNamedItem("bm-autoplay") || t_attributes.getNamedItem("bm-autoplay").value) !== "false";
                    i.name = t_attributes.getNamedItem("data-name") ? t_attributes.getNamedItem("data-name").value : t_attributes.getNamedItem("data-bm-name") ? t_attributes.getNamedItem("data-bm-name").value : t_attributes.getNamedItem("bm-name") ? t_attributes.getNamedItem("bm-name").value : "";
                    if ((t_attributes.getNamedItem("data-anim-prerender") ? t_attributes.getNamedItem("data-anim-prerender").value : t_attributes.getNamedItem("data-bm-prerender") ? t_attributes.getNamedItem("data-bm-prerender").value : t_attributes.getNamedItem("bm-prerender") ? t_attributes.getNamedItem("bm-prerender").value : "") === "false") {
                        i.prerender = false;
                    }
                    if (i.path) {
                        this.setParams(i);
                    } else {
                        this.trigger("destroy");
                    }
                };
                td.prototype.includeLayers = function(t) {
                    if (t.op > this.animationData.op) {
                        this.animationData.op = t.op;
                        this.totalFrames = Math.floor(t.op - this.animationData.ip);
                    }
                    let e;
                    let i;
                    const layers = this.animationData.layers;
                    let s_length = layers.length;
                    const t_layers = t.layers;
                    const r_length = t_layers.length;
                    for(i = 0; i < r_length; i += 1){
                        for(e = 0; e < s_length;){
                            if (layers[e].id === t_layers[i].id) {
                                layers[e] = t_layers[i];
                                break;
                            }
                            e += 1;
                        }
                    }
                    if (t.chars || t.fonts) {
                        this.renderer.globalData.fontManager.addChars(t.chars);
                        this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs);
                    }
                    if (t.assets) {
                        s_length = t.assets.length;
                        for(e = 0; e < s_length; e += 1){
                            this.animationData.assets.push(t.assets[e]);
                        }
                    }
                    this.animationData.__complete = false;
                    to.completeAnimation(this.animationData, this.onSegmentComplete);
                };
                td.prototype.onSegmentComplete = function(t) {
                    this.animationData = t;
                    const e = tt();
                    if (e) {
                        e.initExpressions(this);
                    }
                    this.loadNextSegment();
                };
                td.prototype.loadNextSegment = function() {
                    const segments = this.animationData.segments;
                    if (!segments || segments.length === 0 || !this.autoloadSegments) {
                        this.trigger("data_ready");
                        this.timeCompleted = this.totalFrames;
                        return;
                    }
                    const e = segments.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    const i = `${this.path + this.fileName}_` + this.segmentPos + ".json";
                    this.segmentPos += 1;
                    to.loadData(i, this.includeLayers.bind(this), (function() {
                        this.trigger("data_failed");
                    }).bind(this));
                };
                td.prototype.loadSegments = function() {
                    if (!this.animationData.segments) {
                        this.timeCompleted = this.totalFrames;
                    }
                    this.loadNextSegment();
                };
                td.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images");
                    this.checkLoaded();
                };
                td.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath);
                    this.imagePreloader.setPath(this.path);
                    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
                };
                td.prototype.configAnimation = function(t) {
                    if (this.renderer) {
                        try {
                            this.animationData = t;
                            if (this.initialSegment) {
                                this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
                                this.firstFrame = Math.round(this.initialSegment[0]);
                            } else {
                                this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
                                this.firstFrame = Math.round(this.animationData.ip);
                            }
                            this.renderer.configAnimation(t);
                            if (!t.assets) {
                                t.assets = [];
                            }
                            this.assets = this.animationData.assets;
                            this.frameRate = this.animationData.fr;
                            this.frameMult = this.animationData.fr / 1000;
                            this.renderer.searchExtraCompositions(t.assets);
                            this.markers = tp(t.markers || []);
                            this.trigger("config_ready");
                            this.preloadImages();
                            this.loadSegments();
                            this.updaFrameModifier();
                            this.waitForFontsLoaded();
                            if (this.isPaused) {
                                this.audioController.pause();
                            }
                        } catch (error) {
                            this.triggerConfigError(error);
                        }
                    }
                };
                td.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                };
                td.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = true;
                        const t = tt();
                        if (t) {
                            t.initExpressions(this);
                        }
                        this.renderer.initItems();
                        setTimeout((function() {
                            this.trigger("DOMLoaded");
                        }).bind(this), 0);
                        this.gotoFrame();
                        if (this.autoplay) {
                            this.play();
                        }
                    }
                };
                td.prototype.resize = function(t, e) {
                    this.renderer.updateContainerSize(typeof t === "number" ? t : undefined, typeof e === "number" ? e : undefined);
                };
                td.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t;
                };
                td.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
                    if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
                        this.currentFrame = this.timeCompleted;
                    }
                    this.trigger("enterFrame");
                    this.renderFrame();
                    this.trigger("drawnFrame");
                };
                td.prototype.renderFrame = function() {
                    if (this.isLoaded !== false && this.renderer) {
                        try {
                            if (this.expressionsPlugin) {
                                this.expressionsPlugin.resetFrame();
                            }
                            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                        } catch (error) {
                            this.triggerRenderFrameError(error);
                        }
                    }
                };
                td.prototype.play = function(t) {
                    if ((!t || this.name === t) && this.isPaused === true) {
                        this.isPaused = false;
                        this.trigger("_play");
                        this.audioController.resume();
                        if (this._idle) {
                            this._idle = false;
                            this.trigger("_active");
                        }
                    }
                };
                td.prototype.pause = function(t) {
                    t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
                };
                td.prototype.togglePause = function(t) {
                    t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
                };
                td.prototype.stop = function(t) {
                    if (!(t && this.name !== t)) {
                        this.pause();
                        this.playCount = 0;
                        this._completedLoop = false;
                        this.setCurrentRawFrameValue(0);
                    }
                };
                td.prototype.getMarkerData = function(t) {
                    let e;
                    for(let i = 0; i < this.markers.length; i += 1){
                        if ((e = this.markers[i]).payload && e.payload.name === t) {
                            return e;
                        }
                    }
                    return null;
                };
                td.prototype.goToAndStop = function(t, e, i) {
                    if (!i || this.name === i) {
                        if (isNaN(Number(t))) {
                            const s = this.getMarkerData(t);
                            if (s) {
                                this.goToAndStop(s.time, true);
                            }
                        } else {
                            if (e) {
                                this.setCurrentRawFrameValue(t);
                            } else {
                                this.setCurrentRawFrameValue(t * this.frameModifier);
                            }
                        }
                        this.pause();
                    }
                };
                td.prototype.goToAndPlay = function(t, e, i) {
                    if (!i || this.name === i) {
                        const s = Number(t);
                        if (isNaN(s)) {
                            const a = this.getMarkerData(t);
                            a && (a.duration ? this.playSegments([
                                a.time,
                                a.time + a.duration
                            ], true) : this.goToAndStop(a.time, true));
                        } else {
                            this.goToAndStop(s, e, i);
                        }
                        this.play();
                    }
                };
                td.prototype.advanceTime = function(t) {
                    if (this.isPaused !== true && this.isLoaded !== false) {
                        let e = this.currentRawFrame + t * this.frameModifier;
                        let i = false;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (i = true, e = 0)) : this.setCurrentRawFrameValue(e);
                        if (i) {
                            this.setCurrentRawFrameValue(e);
                            this.pause();
                            this.trigger("complete");
                        }
                    }
                };
                td.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0;
                    if (t[1] < t[0]) {
                        this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1));
                        this.totalFrames = t[0] - t[1];
                        this.timeCompleted = this.totalFrames;
                        this.firstFrame = t[1];
                        this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e);
                    } else if (t[1] > t[0]) {
                        this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1));
                        this.totalFrames = t[1] - t[0];
                        this.timeCompleted = this.totalFrames;
                        this.firstFrame = t[0];
                        this.setCurrentRawFrameValue(0.001 + e);
                    }
                    this.trigger("segmentStart");
                };
                td.prototype.setSegment = function(t, e) {
                    let i = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t));
                    this.firstFrame = t;
                    this.totalFrames = e - t;
                    this.timeCompleted = this.totalFrames;
                    if (-1 !== i) {
                        this.goToAndStop(i, true);
                    }
                };
                td.prototype.playSegments = function(t, e) {
                    if (e) {
                        this.segments.length = 0;
                    }
                    if (tc(t[0]) === "object") {
                        let i;
                        const s = t.length;
                        for(i = 0; i < s; i += 1){
                            this.segments.push(t[i]);
                        }
                    } else {
                        this.segments.push(t);
                    }
                    if (this.segments.length && e) {
                        this.adjustSegment(this.segments.shift(), 0);
                    }
                    if (this.isPaused) {
                        this.play();
                    }
                };
                td.prototype.resetSegments = function(t) {
                    this.segments.length = 0;
                    this.segments.push([
                        this.animationData.ip,
                        this.animationData.op
                    ]);
                    if (t) {
                        this.checkSegments(0);
                    }
                };
                td.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
                };
                td.prototype.destroy = function(t) {
                    if ((!t || this.name === t) && this.renderer) {
                        this.renderer.destroy();
                        this.imagePreloader.destroy();
                        this.trigger("destroy");
                        this._cbs = null;
                        this.onEnterFrame = null;
                        this.onLoopComplete = null;
                        this.onComplete = null;
                        this.onSegmentStart = null;
                        this.onDestroy = null;
                        this.renderer = null;
                        this.expressionsPlugin = null;
                        this.imagePreloader = null;
                        this.projectInterface = null;
                    }
                };
                td.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t;
                    this.gotoFrame();
                };
                td.prototype.setSpeed = function(t) {
                    this.playSpeed = t;
                    this.updaFrameModifier();
                };
                td.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1;
                    this.updaFrameModifier();
                };
                td.prototype.setLoop = function(t) {
                    this.loop = t;
                };
                td.prototype.setVolume = function(t, e) {
                    if (!(e && this.name !== e)) {
                        this.audioController.setVolume(t);
                    }
                };
                td.prototype.getVolume = function() {
                    return this.audioController.getVolume();
                };
                td.prototype.mute = function(t) {
                    if (!(t && this.name !== t)) {
                        this.audioController.mute();
                    }
                };
                td.prototype.unmute = function(t) {
                    if (!(t && this.name !== t)) {
                        this.audioController.unmute();
                    }
                };
                td.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
                    this.audioController.setRate(this.playSpeed * this.playDirection);
                };
                td.prototype.getPath = function() {
                    return this.path;
                };
                td.prototype.getAssetsPath = function(t) {
                    let e = "";
                    if (t.e) {
                        e = t.p;
                    } else if (this.assetsPath) {
                        let i = t.p;
                        if (-1 !== i.indexOf("images/")) {
                            i = i.split("/")[1];
                        }
                        e = this.assetsPath + i;
                    } else {
                        e = this.path + (t.u ? t.u : "") + t.p;
                    }
                    return e;
                };
                td.prototype.getAssetData = function(t) {
                    for(let e = 0, i = this.assets.length; e < i;){
                        if (t === this.assets[e].id) {
                            return this.assets[e];
                        }
                        e += 1;
                    }
                    return null;
                };
                td.prototype.hide = function() {
                    this.renderer.hide();
                };
                td.prototype.show = function() {
                    this.renderer.show();
                };
                td.prototype.getDuration = function(t) {
                    if (t) {
                        return this.totalFrames;
                    }
                    return this.totalFrames / this.frameRate;
                };
                td.prototype.updateDocumentData = function(t, e, i) {
                    try {
                        this.renderer.getElementByPath(t).updateDocumentData(e, i);
                    } catch (t) {}
                };
                td.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) {
                        switch(t){
                            case "enterFrame":
                                this.triggerEvent(t, new V(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "drawnFrame":
                                this.drawnFrameEvent.currentTime = this.currentFrame;
                                this.drawnFrameEvent.totalTime = this.totalFrames;
                                this.drawnFrameEvent.direction = this.frameModifier;
                                this.triggerEvent(t, this.drawnFrameEvent);
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new B(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new R(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new z(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new N(t, this));
                                break;
                            default:
                                this.triggerEvent(t);
                        }
                    }
                    if (t === "enterFrame" && this.onEnterFrame) {
                        this.onEnterFrame.call(this, new V(t, this.currentFrame, this.totalFrames, this.frameMult));
                    }
                    if (t === "loopComplete" && this.onLoopComplete) {
                        this.onLoopComplete.call(this, new B(t, this.loop, this.playCount, this.frameMult));
                    }
                    if (t === "complete" && this.onComplete) {
                        this.onComplete.call(this, new R(t, this.frameMult));
                    }
                    if (t === "segmentStart" && this.onSegmentStart) {
                        this.onSegmentStart.call(this, new z(t, this.firstFrame, this.totalFrames));
                    }
                    if (t === "destroy" && this.onDestroy) {
                        this.onDestroy.call(this, new N(t, this));
                    }
                };
                td.prototype.triggerRenderFrameError = function(t) {
                    const e = new O(t, this.currentFrame);
                    this.triggerEvent("error", e);
                    if (this.onError) {
                        this.onError.call(this, e);
                    }
                };
                td.prototype.triggerConfigError = function(t) {
                    const e = new j(t, this.currentFrame);
                    this.triggerEvent("error", e);
                    if (this.onError) {
                        this.onError.call(this, e);
                    }
                };
                const tu = (()=>{
                    const t = {};
                    const e = [];
                    let i = 0;
                    let s = 0;
                    let a = 0;
                    let r = true;
                    let n = false;
                    function o(t) {
                        for(let i = 0, a = t.target; i < s;){
                            if (e[i].animation === a) {
                                e.splice(i, 1);
                                i -= 1;
                                s -= 1;
                                if (!a.isPaused) {
                                    p();
                                }
                            }
                            i += 1;
                        }
                    }
                    function h(t, i) {
                        if (!t) {
                            return null;
                        }
                        for(let a = 0; a < s;){
                            if (e[a].elem === t && e[a].elem !== null) {
                                return e[a].animation;
                            }
                            a += 1;
                        }
                        const r = new td;
                        f(r, t);
                        r.setData(t, i);
                        return r;
                    }
                    function l() {
                        a += 1;
                        u();
                    }
                    function p() {
                        a -= 1;
                    }
                    function f(t, elem) {
                        t.addEventListener("destroy", o);
                        t.addEventListener("_active", l);
                        t.addEventListener("_idle", p);
                        e.push({
                            elem,
                            animation: t
                        });
                        s += 1;
                    }
                    function m(t) {
                        let o;
                        const h = t - i;
                        for(o = 0; o < s; o += 1){
                            e[o].animation.advanceTime(h);
                        }
                        i = t;
                        if (a && !n) {
                            window.requestAnimationFrame(m);
                        } else {
                            r = true;
                        }
                    }
                    function c(t) {
                        i = t;
                        window.requestAnimationFrame(m);
                    }
                    function u() {
                        if (!n && a && r) {
                            window.requestAnimationFrame(c);
                            r = false;
                        }
                    }
                    t.registerAnimation = h;
                    t.loadAnimation = (t)=>{
                        const e = new td;
                        f(e, null);
                        e.setParams(t);
                        return e;
                    };
                    t.setSpeed = (t, i)=>{
                        let a;
                        for(a = 0; a < s; a += 1){
                            e[a].animation.setSpeed(t, i);
                        }
                    };
                    t.setDirection = (t, i)=>{
                        let a;
                        for(a = 0; a < s; a += 1){
                            e[a].animation.setDirection(t, i);
                        }
                    };
                    t.play = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.play(t);
                        }
                    };
                    t.pause = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.pause(t);
                        }
                    };
                    t.stop = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.stop(t);
                        }
                    };
                    t.togglePause = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.togglePause(t);
                        }
                    };
                    t.searchAnimations = (t, e, i)=>{
                        let s;
                        const a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
                        const a_length = a.length;
                        for(s = 0; s < a_length; s += 1){
                            if (i) {
                                a[s].setAttribute("data-bm-type", i);
                            }
                            h(a[s], t);
                        }
                        if (e && a_length === 0) {
                            if (!i) {
                                i = "svg";
                            }
                            const n = document.getElementsByTagName("body")[0];
                            n.innerText = "";
                            const o = d("div");
                            o.style.width = "100%";
                            o.style.height = "100%";
                            o.setAttribute("data-bm-type", i);
                            n.appendChild(o);
                            h(o, t);
                        }
                    };
                    t.resize = ()=>{
                        let t;
                        for(t = 0; t < s; t += 1){
                            e[t].animation.resize();
                        }
                    };
                    t.goToAndStop = (t, i, a)=>{
                        let r;
                        for(r = 0; r < s; r += 1){
                            e[r].animation.goToAndStop(t, i, a);
                        }
                    };
                    t.destroy = (t)=>{
                        let i;
                        for(i = s - 1; i >= 0; i -= 1){
                            e[i].animation.destroy(t);
                        }
                    };
                    t.freeze = ()=>{
                        n = true;
                    };
                    t.unfreeze = ()=>{
                        n = false;
                        u();
                    };
                    t.setVolume = (t, i)=>{
                        let a;
                        for(a = 0; a < s; a += 1){
                            e[a].animation.setVolume(t, i);
                        }
                    };
                    t.mute = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.mute(t);
                        }
                    };
                    t.unmute = (t)=>{
                        let i;
                        for(i = 0; i < s; i += 1){
                            e[i].animation.unmute(t);
                        }
                    };
                    t.getRegisteredAnimations = ()=>{
                        let t;
                        const e_length = e.length;
                        const s = [];
                        for(t = 0; t < e_length; t += 1){
                            s.push(e[t].animation);
                        }
                        return s;
                    };
                    return t;
                })();
                const tg = (()=>{
                    const t = {};
                    t.getBezierEasing = (t, i, s, a, n)=>{
                        const o = n || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                        if (e[o]) {
                            return e[o];
                        }
                        const h = new r([
                            t,
                            i,
                            s,
                            a
                        ]);
                        e[o] = h;
                        return h;
                    };
                    var e = {};
                    var i = typeof Float32Array === "function";
                    function s(t, e, i) {
                        return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
                    }
                    function a(t, e, i) {
                        return 3 * (1 - 3 * i + 3 * e) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e;
                    }
                    function r(t) {
                        this._p = t;
                        this._mSampleValues = i ? new Float32Array(11) : Array(11);
                        this._precomputed = false;
                        this.get = this.get.bind(this);
                    }
                    r.prototype = {
                        get (t) {
                            const e = this._p[0];
                            const i = this._p[1];
                            const a = this._p[2];
                            const r = this._p[3];
                            if (!this._precomputed) {
                                this._precompute();
                            }
                            if (e === i && a === r) {
                                return t;
                            }
                            if (t === 0) {
                                return 0;
                            }
                            if (t === 1) {
                                return 1;
                            }
                            return s(this._getTForX(t), i, r);
                        },
                        _precompute () {
                            const t = this._p[0];
                            const e = this._p[1];
                            const i = this._p[2];
                            const s = this._p[3];
                            this._precomputed = true;
                            if (t !== e || i !== s) {
                                this._calcSampleValues();
                            }
                        },
                        _calcSampleValues () {
                            const t = this._p[0];
                            const e = this._p[2];
                            for(let i = 0; i < 11; ++i){
                                this._mSampleValues[i] = s(0.1 * i, t, e);
                            }
                        },
                        _getTForX (t) {
                            const e = this._p[0];
                            const i = this._p[2];
                            for(var r = this._mSampleValues, n = 0, o = 1; o !== 10 && r[o] <= t; ++o){
                                n += 0.1;
                            }
                            const h = n + (t - r[--o]) / (r[o + 1] - r[o]) * 0.1;
                            const l = a(h, e, i);
                            if (l >= 0.001) {
                                let p = h;
                                for(let f = 0; f < 4; ++f){
                                    const m = a(p, e, i);
                                    if (m === 0) {
                                        break;
                                    }
                                    const c = s(p, e, i) - t;
                                    p -= c / m;
                                }
                                return p;
                            }
                            if (l === 0) {
                                return h;
                            }
                            return ((t, e, i, a, r)=>{
                                let n;
                                let o;
                                let h = 0;
                                do {
                                    if ((n = s(o = e + (i - e) / 2, a, r) - t) > 0) {
                                        i = o;
                                    } else {
                                        e = o;
                                    }
                                }while (Math.abs(n) > 1e-7 && ++h < 10)
                                return o;
                            })(t, n, n + 0.1, e, i);
                        }
                    };
                    return t;
                })();
                const ty = (t)=>t.concat(v(t.length));
                const tv = (t, e, i)=>{
                    let s = 0;
                    let a = t;
                    let r = v(a);
                    return {
                        newElement () {
                            let t;
                            if (s) {
                                s -= 1;
                                t = r[s];
                            } else {
                                t = e();
                            }
                            return t;
                        },
                        release (t) {
                            if (s === a) {
                                r = ty(r);
                                a *= 2;
                            }
                            if (i) {
                                i(t);
                            }
                            r[s] = t;
                            s += 1;
                        }
                    };
                };
                const tx = tv(8, ()=>({
                        addedLength: 0,
                        percents: y("float32", ts()),
                        lengths: y("float32", ts())
                    }));
                const tk = tv(8, ()=>({
                        lengths: [],
                        totalLength: 0
                    }), (t)=>{
                    let e;
                    const length = t.lengths.length;
                    for(e = 0; e < length; e += 1){
                        tx.release(t.lengths[e]);
                    }
                    t.lengths.length = 0;
                });
                const tb = (()=>{
                    let t;
                    const e = Math;
                    function pointOnLine2D(t, e, i, s, a, r) {
                        const n = t * s + e * a + i * r - a * s - r * t - i * e;
                        return n > -0.001 && n < 0.001;
                    }
                    const s = (t, e, i, s)=>{
                        let a;
                        let r;
                        let n;
                        let o;
                        let h;
                        let l;
                        const p = ts();
                        let f = 0;
                        const m = [];
                        const c = [];
                        const d = tx.newElement();
                        n = i.length;
                        for(a = 0; a < p; a += 1){
                            h = a / (p - 1);
                            l = 0;
                            for(r = 0; r < n; r += 1){
                                o = Math_pow(1 - h, 3) * t[r] + 3 * Math_pow(1 - h, 2) * h * i[r] + 3 * (1 - h) * Math_pow(h, 2) * s[r] + Math_pow(h, 3) * e[r];
                                m[r] = o;
                                if (c[r] !== null) {
                                    l += Math_pow(m[r] - c[r], 2);
                                }
                                c[r] = m[r];
                            }
                            if (l) {
                                f += l = Math_sqrt(l);
                            }
                            d.percents[a] = h;
                            d.lengths[a] = f;
                        }
                        d.addedLength = f;
                        return d;
                    };
                    function a(t) {
                        this.segmentLength = 0;
                        this.points = Array(t);
                    }
                    function r(t, e) {
                        this.partialLength = t;
                        this.point = e;
                    }
                    t = {};
                    const buildBezierData = (e, s, n, o)=>{
                        const h = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!t[h]) {
                            let l;
                            let p;
                            let f;
                            let m;
                            let c;
                            let d;
                            let u;
                            let g = ts();
                            let y = 0;
                            let x = null;
                            if (e.length === 2 && (e[0] !== s[0] || e[1] !== s[1]) && pointOnLine2D(e[0], e[1], s[0], s[1], e[0] + n[0], e[1] + n[1]) && pointOnLine2D(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1])) {
                                g = 2;
                            }
                            const k = new a(g);
                            f = n.length;
                            for(l = 0; l < g; l += 1){
                                u = v(f);
                                c = l / (g - 1);
                                d = 0;
                                for(p = 0; p < f; p += 1){
                                    m = Math_pow(1 - c, 3) * e[p] + 3 * Math_pow(1 - c, 2) * c * (e[p] + n[p]) + 3 * (1 - c) * Math_pow(c, 2) * (s[p] + o[p]) + Math_pow(c, 3) * s[p];
                                    u[p] = m;
                                    if (x !== null) {
                                        d += Math_pow(u[p] - x[p], 2);
                                    }
                                }
                                y += d = Math_sqrt(d);
                                k.points[l] = new r(d, u);
                                x = u;
                            }
                            k.segmentLength = y;
                            t[h] = k;
                        }
                        return t[h];
                    };
                    function o(t, e) {
                        const e_percents = e.percents;
                        const e_lengths = e.lengths;
                        const i_length = e_percents.length;
                        let r = Math_floor((i_length - 1) * t);
                        const n = t * e.addedLength;
                        let o = 0;
                        if (r === i_length - 1 || r === 0 || n === e_lengths[r]) {
                            return e_percents[r];
                        }
                        const h = e_lengths[r] > n ? -1 : 1;
                        for(let l = true; l;){
                            if (e_lengths[r] <= n && e_lengths[r + 1] > n) {
                                o = (n - e_lengths[r]) / (e_lengths[r + 1] - e_lengths[r]);
                                l = false;
                            } else {
                                r += h;
                            }
                            if (r < 0 || r >= i_length - 1) {
                                if (r === i_length - 1) {
                                    return e_percents[r];
                                }
                                l = false;
                            }
                        }
                        return e_percents[r] + (e_percents[r + 1] - e_percents[r]) * o;
                    }
                    const h = y("float32", 8);
                    return {
                        getSegmentsLength (t) {
                            let e;
                            const i = tk.newElement();
                            const a = t.c;
                            const r = t.v;
                            const n = t.o;
                            const o = t.i;
                            const t__length = t._length;
                            const i_lengths = i.lengths;
                            let p = 0;
                            for(e = 0; e < t__length - 1; e += 1){
                                i_lengths[e] = s(r[e], r[e + 1], n[e], o[e + 1]);
                                p += i_lengths[e].addedLength;
                            }
                            if (a && t__length) {
                                i_lengths[e] = s(r[e], r[0], n[e], o[0]);
                                p += i_lengths[e].addedLength;
                            }
                            i.totalLength = p;
                            return i;
                        },
                        getNewSegment (t, i, s, a, r, n, l) {
                            if (r < 0) {
                                r = 0;
                            } else if (r > 1) {
                                r = 1;
                            }
                            let p;
                            const f = o(r, l);
                            const m = o(n = n > 1 ? 1 : n, l);
                            const t_length = t.length;
                            const d = 1 - f;
                            const u = 1 - m;
                            const g = d * d * d;
                            const y = f * d * d * 3;
                            const v = f * f * d * 3;
                            const x = f * f * f;
                            const k = d * d * u;
                            const b = f * d * u + d * f * u + d * d * m;
                            const _ = f * f * u + d * f * m + f * d * m;
                            const A = f * f * m;
                            const P = d * u * u;
                            const S = f * u * u + d * m * u + d * u * m;
                            const D = f * m * u + d * m * m + f * u * m;
                            const w = f * m * m;
                            const M = u * u * u;
                            const C = m * u * u + u * m * u + u * u * m;
                            const T = m * m * u + u * m * m + m * u * m;
                            const E = m * m * m;
                            for(p = 0; p < t_length; p += 1){
                                h[4 * p] = e.round((g * t[p] + y * s[p] + v * a[p] + x * i[p]) * 1000) / 1000;
                                h[4 * p + 1] = e.round((k * t[p] + b * s[p] + _ * a[p] + A * i[p]) * 1000) / 1000;
                                h[4 * p + 2] = e.round((P * t[p] + S * s[p] + D * a[p] + w * i[p]) * 1000) / 1000;
                                h[4 * p + 3] = e.round((M * t[p] + C * s[p] + T * a[p] + E * i[p]) * 1000) / 1000;
                            }
                            return h;
                        },
                        getPointInSegment (t, i, s, a, r, n) {
                            const h = o(r, n);
                            const l = 1 - h;
                            return [
                                e.round((l * l * l * t[0] + (h * l * l + l * h * l + l * l * h) * s[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * i[0]) * 1000) / 1000,
                                e.round((l * l * l * t[1] + (h * l * l + l * h * l + l * l * h) * s[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * i[1]) * 1000) / 1000
                            ];
                        },
                        buildBezierData,
                        pointOnLine2D,
                        pointOnLine3D (t, s, a, r, n, o, h, l, p) {
                            if (a === 0 && o === 0 && p === 0) {
                                return pointOnLine2D(t, s, r, n, h, l);
                            }
                            let f;
                            const m = e.sqrt(e.pow(r - t, 2) + e.pow(n - s, 2) + e.pow(o - a, 2));
                            const c = e.sqrt(e.pow(h - t, 2) + e.pow(l - s, 2) + e.pow(p - a, 2));
                            const d = e.sqrt(e.pow(h - r, 2) + e.pow(l - n, 2) + e.pow(p - o, 2));
                            return (f = m > c ? m > d ? m - c - d : d - c - m : d > c ? d - c - m : c - m - d) > -0.0001 && f < 0.0001;
                        }
                    };
                })();
                const Math_abs = Math.abs;
                function tA(t, e) {
                    const offsetTime = this.offsetTime;
                    if (this.propType === "multidimensional") {
                        f = y("float32", this.pv.length);
                    }
                    let e_lastIndex = e.lastIndex;
                    let a = e_lastIndex;
                    let r = this.keyframes.length - 1;
                    for(var n = true; n;){
                        m = this.keyframes[a];
                        c = this.keyframes[a + 1];
                        if (a === r - 1 && t >= c.t - offsetTime) {
                            if (m.h) {
                                m = c;
                            }
                            e_lastIndex = 0;
                            break;
                        }
                        if (c.t - offsetTime > t) {
                            e_lastIndex = a;
                            break;
                        }
                        if (a < r - 1) {
                            a += 1;
                        } else {
                            e_lastIndex = 0;
                            n = false;
                        }
                    }
                    d = this.keyframesMetadata[a] || {};
                    const o = c.t - offsetTime;
                    const h = m.t - offsetTime;
                    if (m.to) {
                        if (!d.bezierData) {
                            d.bezierData = tb.buildBezierData(m.s, c.s || m.e, m.to, m.ti);
                        }
                        const l = d.bezierData;
                        if (t >= o || t < h) {
                            const p = t >= o ? l.points.length - 1 : 0;
                            g = l.points[p].point.length;
                            for(u = 0; u < g; u += 1){
                                f[u] = l.points[p].point[u];
                            }
                        } else {
                            if (d.__fnct) {
                                k = d.__fnct;
                            } else {
                                d.__fnct = k = tg.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y, m.n).get;
                            }
                            var f;
                            var m;
                            var c;
                            var d;
                            var u;
                            var g;
                            let v;
                            let x;
                            var k;
                            var b;
                            let _;
                            var A = k((t - h) / (o - h));
                            const P = l.segmentLength * A;
                            let S = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                            x = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0;
                            n = true;
                            for(v = l.points.length; n;){
                                S += l.points[x].partialLength;
                                if (P === 0 || A === 0 || x === l.points.length - 1) {
                                    g = l.points[x].point.length;
                                    for(u = 0; u < g; u += 1){
                                        f[u] = l.points[x].point[u];
                                    }
                                    break;
                                }
                                if (P >= S && P < S + l.points[x + 1].partialLength) {
                                    _ = (P - S) / l.points[x + 1].partialLength;
                                    g = l.points[x].point.length;
                                    for(u = 0; u < g; u += 1){
                                        f[u] = l.points[x].point[u] + (l.points[x + 1].point[u] - l.points[x].point[u]) * _;
                                    }
                                    break;
                                }
                                if (x < v - 1) {
                                    x += 1;
                                } else {
                                    n = false;
                                }
                            }
                            e._lastPoint = x;
                            e._lastAddedLength = S - l.points[x].partialLength;
                            e._lastKeyframeIndex = a;
                        }
                    } else {
                        r = m.s.length;
                        b = c.s || m.e;
                        if (this.sh && m.h !== 1) {
                            if (t >= o) {
                                f[0] = b[0];
                                f[1] = b[1];
                                f[2] = b[2];
                            } else if (t <= h) {
                                f[0] = m.s[0];
                                f[1] = m.s[1];
                                f[2] = m.s[2];
                            } else {
                                let D;
                                let w;
                                let M;
                                let C;
                                let T;
                                let E;
                                let F;
                                let L;
                                let V;
                                let R;
                                let B;
                                let z;
                                let N;
                                let O;
                                let j;
                                let G;
                                let q;
                                let W;
                                let H;
                                let X;
                                let Y;
                                let U;
                                let K;
                                let J;
                                let Z;
                                let Q;
                                var $;
                                var tt;
                                var te;
                                var ti;
                                var ts;
                                const ta = tP(m.s);
                                const tr = tP(b);
                                W = f;
                                X = (H = (D = ta, w = tr, M = (t - h) / (o - h), V = [], R = D[0], B = D[1], z = D[2], N = D[3], O = w[0], j = w[1], G = w[2], (T = R * O + B * j + z * G + N * (q = w[3])) < 0 && (T = -T, O = -O, j = -j, G = -G, q = -q), 1 - T > 0.000001 ? (E = Math.sin(C = Math.acos(T)), F = Math.sin((1 - M) * C) / E, L = Math.sin(M * C) / E) : (F = 1 - M, L = M), V[0] = F * R + L * O, V[1] = F * B + L * j, V[2] = F * z + L * G, V[3] = F * N + L * q, V))[0];
                                Y = H[1];
                                U = H[2];
                                J = Math.atan2(2 * Y * (K = H[3]) - 2 * X * U, 1 - 2 * Y * Y - 2 * U * U);
                                Z = Math.asin(2 * X * Y + 2 * U * K);
                                Q = Math.atan2(2 * X * K - 2 * Y * U, 1 - 2 * X * X - 2 * U * U);
                                W[0] = J / I;
                                W[1] = Z / I;
                                W[2] = Q / I;
                            }
                        } else {
                            for(a = 0; a < r; a += 1){
                                m.h !== 1 && (t >= o ? A = 1 : t < h ? A = 0 : (m.o.x.constructor === Array ? (d.__fnct || (d.__fnct = []), d.__fnct[a] ? k = d.__fnct[a] : ($ = m.o.x[a] === undefined ? m.o.x[0] : m.o.x[a], tt = m.o.y[a] === undefined ? m.o.y[0] : m.o.y[a], te = m.i.x[a] === undefined ? m.i.x[0] : m.i.x[a], ti = m.i.y[a] === undefined ? m.i.y[0] : m.i.y[a], k = tg.getBezierEasing($, tt, te, ti).get, d.__fnct[a] = k)) : d.__fnct ? k = d.__fnct : ($ = m.o.x, tt = m.o.y, te = m.i.x, ti = m.i.y, k = tg.getBezierEasing($, tt, te, ti).get, m.keyframeMetadata = k), A = k((t - h) / (o - h))));
                                b = c.s || m.e;
                                ts = m.h === 1 ? m.s[a] : m.s[a] + (b[a] - m.s[a]) * A;
                                if (this.propType === "multidimensional") {
                                    f[a] = ts;
                                } else {
                                    f = ts;
                                }
                            }
                        }
                    }
                    e.lastIndex = e_lastIndex;
                    return f;
                }
                function tP(t) {
                    const e = t[0] * I;
                    const i = t[1] * I;
                    const s = t[2] * I;
                    const a = Math.cos(e / 2);
                    const r = Math.cos(i / 2);
                    const n = Math.cos(s / 2);
                    const o = Math.sin(e / 2);
                    const h = Math.sin(i / 2);
                    const l = Math.sin(s / 2);
                    return [
                        o * h * n + a * r * l,
                        o * r * n + a * h * l,
                        a * h * n - o * r * l,
                        a * r * n - o * h * l
                    ];
                }
                function tS() {
                    const t = this.comp.renderedFrame - this.offsetTime;
                    const e = this.keyframes[0].t - this.offsetTime;
                    const i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || -999999 !== this._caching.lastFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                        if (this._caching.lastFrame >= t) {
                            this._caching._lastKeyframeIndex = -1;
                            this._caching.lastIndex = 0;
                        }
                        const s = this.interpolateValue(t, this._caching);
                        this.pv = s;
                    }
                    this._caching.lastFrame = t;
                    return this.pv;
                }
                function tD(t) {
                    let e;
                    if (this.propType === "unidimensional") {
                        e = t * this.mult;
                        if (Math_abs(this.v - e) > 0.00001) {
                            this.v = e;
                            this._mdf = true;
                        }
                    } else {
                        for(let i = 0, s = this.v.length; i < s;){
                            e = t[i] * this.mult;
                            if (Math_abs(this.v[i] - e) > 0.00001) {
                                this.v[i] = e;
                                this._mdf = true;
                            }
                            i += 1;
                        }
                    }
                }
                function tw() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                        if (this.lock) {
                            return void this.setVValue(this.pv);
                        }
                        this.lock = true;
                        this._mdf = this._isFirstFrame;
                        let t;
                        const e = this.effectsSequence.length;
                        let i = this.kf ? this.pv : this.data.k;
                        for(t = 0; t < e; t += 1){
                            i = this.effectsSequence[t](i);
                        }
                        this.setVValue(i);
                        this._isFirstFrame = false;
                        this.lock = false;
                        this.frameId = this.elem.globalData.frameId;
                    }
                }
                function tM(t) {
                    this.effectsSequence.push(t);
                    this.container.addDynamicProperty(this);
                }
                function tC(t, e, i, s) {
                    this.propType = "unidimensional";
                    this.mult = i || 1;
                    this.data = e;
                    this.v = i ? e.k * i : e.k;
                    this.pv = e.k;
                    this._mdf = false;
                    this.elem = t;
                    this.container = s;
                    this.comp = t.comp;
                    this.k = false;
                    this.kf = false;
                    this.vel = 0;
                    this.effectsSequence = [];
                    this._isFirstFrame = true;
                    this.getValue = tw;
                    this.setVValue = tD;
                    this.addEffect = tM;
                }
                function tT(t, e, i, s) {
                    this.propType = "multidimensional";
                    this.mult = i || 1;
                    this.data = e;
                    this._mdf = false;
                    this.elem = t;
                    this.container = s;
                    this.comp = t.comp;
                    this.k = false;
                    this.kf = false;
                    this.frameId = -1;
                    let a;
                    const length = e.k.length;
                    this.v = y("float32", length);
                    this.pv = y("float32", length);
                    this.vel = y("float32", length);
                    for(a = 0; a < length; a += 1){
                        this.v[a] = e.k[a] * this.mult;
                        this.pv[a] = e.k[a];
                    }
                    this._isFirstFrame = true;
                    this.effectsSequence = [];
                    this.getValue = tw;
                    this.setVValue = tD;
                    this.addEffect = tM;
                }
                function tE(t, e, i, s) {
                    this.propType = "unidimensional";
                    this.keyframes = e.k;
                    this.keyframesMetadata = [];
                    this.offsetTime = t.data.st;
                    this.frameId = -1;
                    this._caching = {
                        lastFrame: -999999,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    };
                    this.k = true;
                    this.kf = true;
                    this.data = e;
                    this.mult = i || 1;
                    this.elem = t;
                    this.container = s;
                    this.comp = t.comp;
                    this.v = -999999;
                    this.pv = -999999;
                    this._isFirstFrame = true;
                    this.getValue = tw;
                    this.setVValue = tD;
                    this.interpolateValue = tA;
                    this.effectsSequence = [
                        tS.bind(this)
                    ];
                    this.addEffect = tM;
                }
                function tF(t, e, i, s) {
                    this.propType = "multidimensional";
                    let a;
                    let r;
                    let n;
                    let o;
                    let h;
                    const length = e.k.length;
                    for(a = 0; a < length - 1; a += 1){
                        if (e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s) {
                            r = e.k[a].s;
                            n = e.k[a + 1].s;
                            o = e.k[a].to;
                            h = e.k[a].ti;
                            if (r.length === 2 && (r[0] !== n[0] || r[1] !== n[1]) && tb.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + o[0], r[1] + o[1]) && tb.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || r.length === 3 && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && tb.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + o[0], r[1] + o[1], r[2] + o[2]) && tb.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) {
                                e.k[a].to = null;
                                e.k[a].ti = null;
                            }
                            if (r[0] === n[0] && r[1] === n[1] && o[0] === 0 && o[1] === 0 && h[0] === 0 && h[1] === 0 && (r.length === 2 || r[2] === n[2] && o[2] === 0 && h[2] === 0)) {
                                e.k[a].to = null;
                                e.k[a].ti = null;
                            }
                        }
                    }
                    this.effectsSequence = [
                        tS.bind(this)
                    ];
                    this.data = e;
                    this.keyframes = e.k;
                    this.keyframesMetadata = [];
                    this.offsetTime = t.data.st;
                    this.k = true;
                    this.kf = true;
                    this._isFirstFrame = true;
                    this.mult = i || 1;
                    this.elem = t;
                    this.container = s;
                    this.comp = t.comp;
                    this.getValue = tw;
                    this.setVValue = tD;
                    this.interpolateValue = tA;
                    this.frameId = -1;
                    const length_1 = e.k[0].s.length;
                    this.v = y("float32", length_1);
                    this.pv = y("float32", length_1);
                    for(a = 0; a < length_1; a += 1){
                        this.v[a] = -999999;
                        this.pv[a] = -999999;
                    }
                    this._caching = {
                        lastFrame: -999999,
                        lastIndex: 0,
                        value: y("float32", length_1)
                    };
                    this.addEffect = tM;
                }
                const tI = {
                    getProp (t, e, i, s, a) {
                        let r;
                        if (e.sid) {
                            e = t.globalData.slotManager.getProp(e);
                        }
                        if (e.k.length) {
                            if (typeof e.k[0] === "number") {
                                r = new tT(t, e, s, a);
                            } else {
                                switch(i){
                                    case 0:
                                        r = new tE(t, e, s, a);
                                        break;
                                    case 1:
                                        r = new tF(t, e, s, a);
                                }
                            }
                        } else {
                            r = new tC(t, e, s, a);
                        }
                        if (r.effectsSequence.length) {
                            a.addDynamicProperty(r);
                        }
                        return r;
                    }
                };
                function tL() {}
                tL.prototype = {
                    addDynamicProperty (t) {
                        if (-1 === this.dynamicProperties.indexOf(t)) {
                            this.dynamicProperties.push(t);
                            this.container.addDynamicProperty(this);
                            this._isAnimated = true;
                        }
                    },
                    iterateDynamicProperties () {
                        this._mdf = false;
                        let t;
                        const length = this.dynamicProperties.length;
                        for(t = 0; t < length; t += 1){
                            this.dynamicProperties[t].getValue();
                            if (this.dynamicProperties[t]._mdf) {
                                this._mdf = true;
                            }
                        }
                    },
                    initDynamicPropertyContainer (t) {
                        this.container = t;
                        this.dynamicProperties = [];
                        this._mdf = false;
                        this._isAnimated = false;
                    }
                };
                const tV = tv(8, ()=>y("float32", 2));
                class tR {
                    constructor(){
                        this.c = false;
                        this._length = 0;
                        this._maxLength = 8;
                        this.v = v(this._maxLength);
                        this.o = v(this._maxLength);
                        this.i = v(this._maxLength);
                    }
                    setPathData(t, e) {
                        this.c = t;
                        this.setLength(e);
                        for(let i = 0; i < e;){
                            this.v[i] = tV.newElement();
                            this.o[i] = tV.newElement();
                            this.i[i] = tV.newElement();
                            i += 1;
                        }
                    }
                    setLength(t) {
                        while(this._maxLength < t){
                            this.doubleArrayLength();
                        }
                        this._length = t;
                    }
                    doubleArrayLength() {
                        this.v = this.v.concat(v(this._maxLength));
                        this.i = this.i.concat(v(this._maxLength));
                        this.o = this.o.concat(v(this._maxLength));
                        this._maxLength *= 2;
                    }
                    setXYAt(t, e, i, s, a) {
                        let r;
                        this._length = Math.max(this._length, s + 1);
                        if (this._length >= this._maxLength) {
                            this.doubleArrayLength();
                        }
                        switch(i){
                            case "v":
                                r = this.v;
                                break;
                            case "i":
                                r = this.i;
                                break;
                            case "o":
                                r = this.o;
                                break;
                            default:
                                r = [];
                        }
                        if (!(r[s] && (!r[s] || a))) {
                            r[s] = tV.newElement();
                        }
                        r[s][0] = t;
                        r[s][1] = e;
                    }
                    setTripleAt(t, e, i, s, a, r, n, o) {
                        this.setXYAt(t, e, "v", n, o);
                        this.setXYAt(i, s, "o", n, o);
                        this.setXYAt(a, r, "i", n, o);
                    }
                    reverse() {
                        let t;
                        const e = new tR;
                        e.setPathData(this.c, this._length);
                        const i = this.v;
                        const s = this.o;
                        const a = this.i;
                        let r = 0;
                        if (this.c) {
                            e.setTripleAt(i[0][0], i[0][1], a[0][0], a[0][1], s[0][0], s[0][1], 0, false);
                            r = 1;
                        }
                        let n = this._length - 1;
                        const _length = this._length;
                        for(t = r; t < _length; t += 1){
                            e.setTripleAt(i[n][0], i[n][1], a[n][0], a[n][1], s[n][0], s[n][1], t, false);
                            n -= 1;
                        }
                        return e;
                    }
                    length() {
                        return this._length;
                    }
                }
                t = tv(4, ()=>new tR, (t)=>{
                    let e;
                    const t__length = t._length;
                    for(e = 0; e < t__length; e += 1){
                        tV.release(t.v[e]);
                        tV.release(t.i[e]);
                        tV.release(t.o[e]);
                        t.v[e] = null;
                        t.i[e] = null;
                        t.o[e] = null;
                    }
                    t._length = 0;
                    t.c = false;
                });
                t.clone = (e)=>{
                    let i;
                    const s = t.newElement();
                    const a = e._length === undefined ? e.v.length : e._length;
                    s.setLength(a);
                    s.c = e.c;
                    for(i = 0; i < a; i += 1){
                        s.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], i);
                    }
                    return s;
                };
                const tB = t;
                class tz {
                    constructor(){
                        this._length = 0;
                        this._maxLength = 4;
                        this.shapes = v(this._maxLength);
                    }
                    addShape(t) {
                        if (this._length === this._maxLength) {
                            this.shapes = this.shapes.concat(v(this._maxLength));
                            this._maxLength *= 2;
                        }
                        this.shapes[this._length] = t;
                        this._length += 1;
                    }
                    releaseShapes() {
                        let t;
                        for(t = 0; t < this._length; t += 1){
                            tB.release(this.shapes[t]);
                        }
                        this._length = 0;
                    }
                }
                e = 0;
                s = 4;
                a = v(4);
                const tN = {
                    newShapeCollection () {
                        let t;
                        if (e) {
                            e -= 1;
                            t = a[e];
                        } else {
                            t = new tz;
                        }
                        return t;
                    },
                    release (t) {
                        let i;
                        const t__length = t._length;
                        for(i = 0; i < t__length; i += 1){
                            tB.release(t.shapes[i]);
                        }
                        t._length = 0;
                        if (e === s) {
                            a = ty(a);
                            s *= 2;
                        }
                        a[e] = t;
                        e += 1;
                    }
                };
                const tO = (()=>{
                    function t(t, e, i) {
                        let i_lastIndex = i.lastIndex;
                        const keyframes = this.keyframes;
                        if (t < keyframes[0].t - this.offsetTime) {
                            r = keyframes[0].s[0];
                            o = true;
                            i_lastIndex = 0;
                        } else if (t >= keyframes[keyframes.length - 1].t - this.offsetTime) {
                            r = keyframes[keyframes.length - 1].s ? keyframes[keyframes.length - 1].s[0] : keyframes[keyframes.length - 2].e[0];
                            o = true;
                        } else {
                            var r;
                            var n;
                            var o;
                            var h;
                            var l;
                            var p;
                            var f;
                            var m;
                            var c;
                            let d;
                            let u;
                            let g;
                            let y;
                            for(var v = i_lastIndex, x = keyframes.length - 1, k = true; k && (d = keyframes[v], !((u = keyframes[v + 1]).t - this.offsetTime > t));){
                                if (v < x - 1) {
                                    v += 1;
                                } else {
                                    k = false;
                                }
                            }
                            g = this.keyframesMetadata[v] || {};
                            o = d.h === 1;
                            i_lastIndex = v;
                            if (!o) {
                                if (t >= u.t - this.offsetTime) {
                                    m = 1;
                                } else if (t < d.t - this.offsetTime) {
                                    m = 0;
                                } else {
                                    if (g.__fnct) {
                                        y = g.__fnct;
                                    } else {
                                        g.__fnct = y = tg.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get;
                                    }
                                    m = y((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
                                }
                                n = u.s ? u.s[0] : d.e[0];
                            }
                            r = d.s[0];
                        }
                        p = e._length;
                        f = r.i[0].length;
                        i.lastIndex = i_lastIndex;
                        for(h = 0; h < p; h += 1){
                            for(l = 0; l < f; l += 1){
                                c = o ? r.i[h][l] : r.i[h][l] + (n.i[h][l] - r.i[h][l]) * m;
                                e.i[h][l] = c;
                                c = o ? r.o[h][l] : r.o[h][l] + (n.o[h][l] - r.o[h][l]) * m;
                                e.o[h][l] = c;
                                c = o ? r.v[h][l] : r.v[h][l] + (n.v[h][l] - r.v[h][l]) * m;
                                e.v[h][l] = c;
                            }
                        }
                    }
                    function e() {
                        const t = this.comp.renderedFrame - this.offsetTime;
                        const e = this.keyframes[0].t - this.offsetTime;
                        const i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        const lastFrame = this._caching.lastFrame;
                        if (!(-999999 !== lastFrame && (lastFrame < e && t < e || lastFrame > i && t > i))) {
                            this._caching.lastIndex = lastFrame < t ? this._caching.lastIndex : 0;
                            this.interpolateShape(t, this.pv, this._caching);
                        }
                        this._caching.lastFrame = t;
                        return this.pv;
                    }
                    function reset() {
                        this.paths = this.localShapeCollection;
                    }
                    function s(t) {
                        if (!((t, e)=>{
                            if (t._length !== e._length || t.c !== e.c) {
                                return false;
                            }
                            let i;
                            const t__length = t._length;
                            for(i = 0; i < t__length; i += 1){
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) {
                                    return false;
                                }
                            }
                            return true;
                        })(this.v, t)) {
                            this.v = tB.clone(t);
                            this.localShapeCollection.releaseShapes();
                            this.localShapeCollection.addShape(this.v);
                            this._mdf = true;
                            this.paths = this.localShapeCollection;
                        }
                    }
                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (!this.effectsSequence.length) {
                                this._mdf = false;
                                return;
                            }
                            if (this.lock) {
                                return void this.setVValue(this.pv);
                            }
                            this.lock = true;
                            this._mdf = false;
                            let t;
                            let e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                            const i = this.effectsSequence.length;
                            for(t = 0; t < i; t += 1){
                                e = this.effectsSequence[t](e);
                            }
                            this.setVValue(e);
                            this.lock = false;
                            this.frameId = this.elem.globalData.frameId;
                        }
                    }
                    function r(t, e, s) {
                        this.propType = "shape";
                        this.comp = t.comp;
                        this.container = t;
                        this.elem = t;
                        this.data = e;
                        this.k = false;
                        this.kf = false;
                        this._mdf = false;
                        const a = s === 3 ? e.pt.k : e.ks.k;
                        this.v = tB.clone(a);
                        this.pv = tB.clone(this.v);
                        this.localShapeCollection = tN.newShapeCollection();
                        this.paths = this.localShapeCollection;
                        this.paths.addShape(this.v);
                        this.reset = reset;
                        this.effectsSequence = [];
                    }
                    function n(t) {
                        this.effectsSequence.push(t);
                        this.container.addDynamicProperty(this);
                    }
                    function o(t, s, a) {
                        this.propType = "shape";
                        this.comp = t.comp;
                        this.elem = t;
                        this.container = t;
                        this.offsetTime = t.data.st;
                        this.keyframes = a === 3 ? s.pt.k : s.ks.k;
                        this.keyframesMetadata = [];
                        this.k = true;
                        this.kf = true;
                        const length = this.keyframes[0].s[0].i.length;
                        this.v = tB.newElement();
                        this.v.setPathData(this.keyframes[0].s[0].c, length);
                        this.pv = tB.clone(this.v);
                        this.localShapeCollection = tN.newShapeCollection();
                        this.paths = this.localShapeCollection;
                        this.paths.addShape(this.v);
                        this.lastFrame = -999999;
                        this.reset = reset;
                        this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0
                        };
                        this.effectsSequence = [
                            e.bind(this)
                        ];
                    }
                    r.prototype.interpolateShape = t;
                    r.prototype.getValue = a;
                    r.prototype.setVValue = s;
                    r.prototype.addEffect = n;
                    o.prototype.getValue = a;
                    o.prototype.interpolateShape = t;
                    o.prototype.setVValue = s;
                    o.prototype.addEffect = n;
                    const h = (()=>{
                        function t(t, e) {
                            this.v = tB.newElement();
                            this.v.setPathData(true, 4);
                            this.localShapeCollection = tN.newShapeCollection();
                            this.paths = this.localShapeCollection;
                            this.localShapeCollection.addShape(this.v);
                            this.d = e.d;
                            this.elem = t;
                            this.comp = t.comp;
                            this.frameId = -1;
                            this.initDynamicPropertyContainer(t);
                            this.p = tI.getProp(t, e.p, 1, 0, this);
                            this.s = tI.getProp(t, e.s, 1, 0, this);
                            if (this.dynamicProperties.length) {
                                this.k = true;
                            } else {
                                this.k = false;
                                this.convertEllToPath();
                            }
                        }
                        t.prototype = {
                            reset,
                            getValue () {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    this.frameId = this.elem.globalData.frameId;
                                    this.iterateDynamicProperties();
                                    if (this._mdf) {
                                        this.convertEllToPath();
                                    }
                                }
                            },
                            convertEllToPath () {
                                const t = this.p.v[0];
                                const e = this.p.v[1];
                                const i = this.s.v[0] / 2;
                                const s = this.s.v[1] / 2;
                                const a = this.d !== 3;
                                const r = this.v;
                                r.v[0][0] = t;
                                r.v[0][1] = e - s;
                                r.v[1][0] = a ? t + i : t - i;
                                r.v[1][1] = e;
                                r.v[2][0] = t;
                                r.v[2][1] = e + s;
                                r.v[3][0] = a ? t - i : t + i;
                                r.v[3][1] = e;
                                r.i[0][0] = a ? t - 0.5519 * i : t + 0.5519 * i;
                                r.i[0][1] = e - s;
                                r.i[1][0] = a ? t + i : t - i;
                                r.i[1][1] = e - 0.5519 * s;
                                r.i[2][0] = a ? t + 0.5519 * i : t - 0.5519 * i;
                                r.i[2][1] = e + s;
                                r.i[3][0] = a ? t - i : t + i;
                                r.i[3][1] = e + 0.5519 * s;
                                r.o[0][0] = a ? t + 0.5519 * i : t - 0.5519 * i;
                                r.o[0][1] = e - s;
                                r.o[1][0] = a ? t + i : t - i;
                                r.o[1][1] = e + 0.5519 * s;
                                r.o[2][0] = a ? t - 0.5519 * i : t + 0.5519 * i;
                                r.o[2][1] = e + s;
                                r.o[3][0] = a ? t - i : t + i;
                                r.o[3][1] = e - 0.5519 * s;
                            }
                        };
                        u([
                            tL
                        ], t);
                        return t;
                    })();
                    const l = (()=>{
                        function t(t, e) {
                            this.v = tB.newElement();
                            this.v.setPathData(true, 0);
                            this.elem = t;
                            this.comp = t.comp;
                            this.data = e;
                            this.frameId = -1;
                            this.d = e.d;
                            this.initDynamicPropertyContainer(t);
                            if (e.sy === 1) {
                                this.ir = tI.getProp(t, e.ir, 0, 0, this);
                                this.is = tI.getProp(t, e.is, 0, 0.01, this);
                                this.convertToPath = this.convertStarToPath;
                            } else {
                                this.convertToPath = this.convertPolygonToPath;
                            }
                            this.pt = tI.getProp(t, e.pt, 0, 0, this);
                            this.p = tI.getProp(t, e.p, 1, 0, this);
                            this.r = tI.getProp(t, e.r, 0, I, this);
                            this.or = tI.getProp(t, e.or, 0, 0, this);
                            this.os = tI.getProp(t, e.os, 0, 0.01, this);
                            this.localShapeCollection = tN.newShapeCollection();
                            this.localShapeCollection.addShape(this.v);
                            this.paths = this.localShapeCollection;
                            if (this.dynamicProperties.length) {
                                this.k = true;
                            } else {
                                this.k = false;
                                this.convertToPath();
                            }
                        }
                        t.prototype = {
                            reset,
                            getValue () {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    this.frameId = this.elem.globalData.frameId;
                                    this.iterateDynamicProperties();
                                    if (this._mdf) {
                                        this.convertToPath();
                                    }
                                }
                            },
                            convertStarToPath () {
                                let t;
                                let e;
                                let i;
                                let s;
                                const a = 2 * Math.floor(this.pt.v);
                                const r = 2 * Math.PI / a;
                                let n = true;
                                const o = this.or.v;
                                const h = this.ir.v;
                                const l = this.os.v;
                                const p = this.is.v;
                                const f = 2 * Math.PI * o / (2 * a);
                                const m = 2 * Math.PI * h / (2 * a);
                                let c = -Math.PI / 2;
                                c += this.r.v;
                                const d = this.data.d === 3 ? -1 : 1;
                                this.v._length = 0;
                                for(t = 0; t < a; t += 1){
                                    e = n ? o : h;
                                    i = n ? l : p;
                                    s = n ? f : m;
                                    let u = e * Math.cos(c);
                                    let g = e * Math.sin(c);
                                    const y = u === 0 && g === 0 ? 0 : g / Math.sqrt(u * u + g * g);
                                    const v = u === 0 && g === 0 ? 0 : -u / Math.sqrt(u * u + g * g);
                                    u += +this.p.v[0];
                                    g += +this.p.v[1];
                                    this.v.setTripleAt(u, g, u - y * s * i * d, g - v * s * i * d, u + y * s * i * d, g + v * s * i * d, t, true);
                                    n = !n;
                                    c += r * d;
                                }
                            },
                            convertPolygonToPath () {
                                let t;
                                const e = Math.floor(this.pt.v);
                                const i = 2 * Math.PI / e;
                                const s = this.or.v;
                                const a = this.os.v;
                                const r = 2 * Math.PI * s / (4 * e);
                                let n = -(0.5 * Math.PI);
                                const o = this.data.d === 3 ? -1 : 1;
                                n += this.r.v;
                                this.v._length = 0;
                                for(t = 0; t < e; t += 1){
                                    let h = s * Math.cos(n);
                                    let l = s * Math.sin(n);
                                    const p = h === 0 && l === 0 ? 0 : l / Math.sqrt(h * h + l * l);
                                    const f = h === 0 && l === 0 ? 0 : -h / Math.sqrt(h * h + l * l);
                                    h += +this.p.v[0];
                                    l += +this.p.v[1];
                                    this.v.setTripleAt(h, l, h - p * r * a * o, l - f * r * a * o, h + p * r * a * o, l + f * r * a * o, t, true);
                                    n += i * o;
                                }
                                this.paths.length = 0;
                                this.paths[0] = this.v;
                            }
                        };
                        u([
                            tL
                        ], t);
                        return t;
                    })();
                    const p = (()=>{
                        function t(t, e) {
                            this.v = tB.newElement();
                            this.v.c = true;
                            this.localShapeCollection = tN.newShapeCollection();
                            this.localShapeCollection.addShape(this.v);
                            this.paths = this.localShapeCollection;
                            this.elem = t;
                            this.comp = t.comp;
                            this.frameId = -1;
                            this.d = e.d;
                            this.initDynamicPropertyContainer(t);
                            this.p = tI.getProp(t, e.p, 1, 0, this);
                            this.s = tI.getProp(t, e.s, 1, 0, this);
                            this.r = tI.getProp(t, e.r, 0, 0, this);
                            if (this.dynamicProperties.length) {
                                this.k = true;
                            } else {
                                this.k = false;
                                this.convertRectToPath();
                            }
                        }
                        t.prototype = {
                            convertRectToPath () {
                                const t = this.p.v[0];
                                const e = this.p.v[1];
                                const i = this.s.v[0] / 2;
                                const s = this.s.v[1] / 2;
                                const a = Math_min(i, s, this.r.v);
                                const r = 0.44810000000000005 * a;
                                this.v._length = 0;
                                if (this.d === 2 || this.d === 1) {
                                    this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, true);
                                    this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, true);
                                    if (a !== 0) {
                                        this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, true);
                                        this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, true);
                                        this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, true);
                                        this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, true);
                                        this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, true);
                                        this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, true);
                                    } else {
                                        this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2);
                                        this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3);
                                    }
                                } else {
                                    this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, true);
                                    if (a !== 0) {
                                        this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, true);
                                        this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, true);
                                        this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, true);
                                        this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, true);
                                        this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, true);
                                        this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, true);
                                        this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, true);
                                    } else {
                                        this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, true);
                                        this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, true);
                                        this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, true);
                                    }
                                }
                            },
                            getValue () {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    this.frameId = this.elem.globalData.frameId;
                                    this.iterateDynamicProperties();
                                    if (this._mdf) {
                                        this.convertRectToPath();
                                    }
                                }
                            },
                            reset
                        };
                        u([
                            tL
                        ], t);
                        return t;
                    })();
                    const f = {};
                    f.getShapeProp = (t, e, i)=>{
                        let s;
                        if (i === 3 || i === 4) {
                            s = (i === 3 ? e.pt : e.ks).k.length ? new o(t, e, i) : new r(t, e, i);
                        } else if (i === 5) {
                            s = new p(t, e);
                        } else if (i === 6) {
                            s = new h(t, e);
                        } else if (i === 7) {
                            s = new l(t, e);
                        }
                        if (s.k) {
                            t.addDynamicProperty(s);
                        }
                        return s;
                    };
                    f.getConstructorFunction = ()=>r;
                    f.getKeyframedConstructorFunction = ()=>o;
                    return f;
                })();
                var tj = (()=>{
                    const Math_cos = Math.cos;
                    const Math_sin = Math.sin;
                    const Math_tan = Math.tan;
                    const Math_round = Math.round;
                    function a() {
                        this.props[0] = 1;
                        this.props[1] = 0;
                        this.props[2] = 0;
                        this.props[3] = 0;
                        this.props[4] = 0;
                        this.props[5] = 1;
                        this.props[6] = 0;
                        this.props[7] = 0;
                        this.props[8] = 0;
                        this.props[9] = 0;
                        this.props[10] = 1;
                        this.props[11] = 0;
                        this.props[12] = 0;
                        this.props[13] = 0;
                        this.props[14] = 0;
                        this.props[15] = 1;
                        return this;
                    }
                    function r(i) {
                        if (i === 0) {
                            return this;
                        }
                        const s = Math_cos(i);
                        const a = Math_sin(i);
                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function n(i) {
                        if (i === 0) {
                            return this;
                        }
                        const s = Math_cos(i);
                        const a = Math_sin(i);
                        return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1);
                    }
                    function o(i) {
                        if (i === 0) {
                            return this;
                        }
                        const s = Math_cos(i);
                        const a = Math_sin(i);
                        return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1);
                    }
                    function h(i) {
                        if (i === 0) {
                            return this;
                        }
                        const s = Math_cos(i);
                        const a = Math_sin(i);
                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0);
                    }
                    function p(t, e) {
                        return this.shear(Math_tan(t), Math_tan(e));
                    }
                    function f(s, a) {
                        const r = Math_cos(a);
                        const n = Math_sin(a);
                        return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math_tan(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function m(t, e, i) {
                        if (!(i || i === 0)) {
                            i = 1;
                        }
                        if (t === 1 && e === 1 && i === 1) {
                            return this;
                        }
                        return this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
                    }
                    function c(t, e, i, s, a, r, n, o, h, l, p, f, m, c, d, u) {
                        this.props[0] = t;
                        this.props[1] = e;
                        this.props[2] = i;
                        this.props[3] = s;
                        this.props[4] = a;
                        this.props[5] = r;
                        this.props[6] = n;
                        this.props[7] = o;
                        this.props[8] = h;
                        this.props[9] = l;
                        this.props[10] = p;
                        this.props[11] = f;
                        this.props[12] = m;
                        this.props[13] = c;
                        this.props[14] = d;
                        this.props[15] = u;
                        return this;
                    }
                    function d(t, e, i) {
                        i = i || 0;
                        if (t !== 0 || e !== 0 || i !== 0) {
                            return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1);
                        }
                        return this;
                    }
                    function u(t, e, i, s, a, r, n, o, h, l, p, f, m, c, d, u) {
                        const props = this.props;
                        if (t === 1 && e === 0 && i === 0 && s === 0 && a === 0 && r === 1 && n === 0 && o === 0 && h === 0 && l === 0 && p === 1 && f === 0) {
                            props[12] = props[12] * t + props[15] * m;
                            props[13] = props[13] * r + props[15] * c;
                            props[14] = props[14] * p + props[15] * d;
                            props[15] *= u;
                            this._identityCalculated = false;
                            return this;
                        }
                        const y = props[0];
                        const v = props[1];
                        const x = props[2];
                        const k = props[3];
                        const b = props[4];
                        const _ = props[5];
                        const A = props[6];
                        const P = props[7];
                        const S = props[8];
                        const D = props[9];
                        const w = props[10];
                        const M = props[11];
                        const C = props[12];
                        const T = props[13];
                        const E = props[14];
                        const F = props[15];
                        props[0] = y * t + v * a + x * h + k * m;
                        props[1] = y * e + v * r + x * l + k * c;
                        props[2] = y * i + v * n + x * p + k * d;
                        props[3] = y * s + v * o + x * f + k * u;
                        props[4] = b * t + _ * a + A * h + P * m;
                        props[5] = b * e + _ * r + A * l + P * c;
                        props[6] = b * i + _ * n + A * p + P * d;
                        props[7] = b * s + _ * o + A * f + P * u;
                        props[8] = S * t + D * a + w * h + M * m;
                        props[9] = S * e + D * r + w * l + M * c;
                        props[10] = S * i + D * n + w * p + M * d;
                        props[11] = S * s + D * o + w * f + M * u;
                        props[12] = C * t + T * a + E * h + F * m;
                        props[13] = C * e + T * r + E * l + F * c;
                        props[14] = C * i + T * n + E * p + F * d;
                        props[15] = C * s + T * o + E * f + F * u;
                        this._identityCalculated = false;
                        return this;
                    }
                    function g(t) {
                        const t_props = t.props;
                        return this.transform(t_props[0], t_props[1], t_props[2], t_props[3], t_props[4], t_props[5], t_props[6], t_props[7], t_props[8], t_props[9], t_props[10], t_props[11], t_props[12], t_props[13], t_props[14], t_props[15]);
                    }
                    function v() {
                        if (!this._identityCalculated) {
                            this._identity = this.props[0] === 1 && this.props[1] === 0 && this.props[2] === 0 && this.props[3] === 0 && this.props[4] === 0 && this.props[5] === 1 && this.props[6] === 0 && this.props[7] === 0 && this.props[8] === 0 && this.props[9] === 0 && this.props[10] === 1 && this.props[11] === 0 && this.props[12] === 0 && this.props[13] === 0 && this.props[14] === 0 && this.props[15] === 1;
                            this._identityCalculated = true;
                        }
                        return this._identity;
                    }
                    function x(t) {
                        for(let e = 0; e < 16;){
                            if (t.props[e] !== this.props[e]) {
                                return false;
                            }
                            e += 1;
                        }
                        return true;
                    }
                    function k(t) {
                        let e;
                        for(e = 0; e < 16; e += 1){
                            t.props[e] = this.props[e];
                        }
                        return t;
                    }
                    function b(t) {
                        let e;
                        for(e = 0; e < 16; e += 1){
                            this.props[e] = t[e];
                        }
                    }
                    function _(t, e, i) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        };
                    }
                    function A(t, e, i) {
                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12];
                    }
                    function P(t, e, i) {
                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13];
                    }
                    function S(t, e, i) {
                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14];
                    }
                    function D() {
                        const t = this.props[0] * this.props[5] - this.props[1] * this.props[4];
                        const e = this.props[5] / t;
                        const i = -this.props[1] / t;
                        const s = -this.props[4] / t;
                        const a = this.props[0] / t;
                        const r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t;
                        const n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t;
                        const o = new tj;
                        o.props[0] = e;
                        o.props[1] = i;
                        o.props[4] = s;
                        o.props[5] = a;
                        o.props[12] = r;
                        o.props[13] = n;
                        return o;
                    }
                    function w(t) {
                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
                    }
                    function M(t) {
                        let e;
                        const t_length = t.length;
                        const s = [];
                        for(e = 0; e < t_length; e += 1){
                            s[e] = w(t[e]);
                        }
                        return s;
                    }
                    function C(t, e, i) {
                        const s = y("float32", 6);
                        if (this.isIdentity()) {
                            s[0] = t[0];
                            s[1] = t[1];
                            s[2] = e[0];
                            s[3] = e[1];
                            s[4] = i[0];
                            s[5] = i[1];
                        } else {
                            const a = this.props[0];
                            const r = this.props[1];
                            const n = this.props[4];
                            const o = this.props[5];
                            const h = this.props[12];
                            const l = this.props[13];
                            s[0] = t[0] * a + t[1] * n + h;
                            s[1] = t[0] * r + t[1] * o + l;
                            s[2] = e[0] * a + e[1] * n + h;
                            s[3] = e[0] * r + e[1] * o + l;
                            s[4] = i[0] * a + i[1] * n + h;
                            s[5] = i[0] * r + i[1] * o + l;
                        }
                        return s;
                    }
                    function T(t, e, i) {
                        if (this.isIdentity()) {
                            return [
                                t,
                                e,
                                i
                            ];
                        }
                        return [
                            t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        ];
                    }
                    function E(t, e) {
                        if (this.isIdentity()) {
                            return t + "," + e;
                        }
                        const props = this.props;
                        return `${Math.round((t * props[0] + e * props[4] + props[12]) * 100) / 100},${Math.round((t * props[1] + e * props[5] + props[13]) * 100) / 100}`;
                    }
                    function F() {
                        for(var t = 0, e = this.props, i = "matrix3d("; t < 16;){
                            i += Math_round(10000 * e[t]) / 10000;
                            i += t === 15 ? ")" : ",";
                            t += 1;
                        }
                        return i;
                    }
                    function I(t) {
                        if (t < 0.000001 && t > 0 || t > -0.000001 && t < 0) {
                            return Math_round(10000 * t) / 10000;
                        }
                        return t;
                    }
                    function L() {
                        const props = this.props;
                        return "matrix(" + I(props[0]) + "," + I(props[1]) + "," + I(props[4]) + "," + I(props[5]) + "," + I(props[12]) + "," + I(props[13]) + ")";
                    }
                    return function() {
                        this.reset = a;
                        this.rotate = r;
                        this.rotateX = n;
                        this.rotateY = o;
                        this.rotateZ = h;
                        this.skew = p;
                        this.skewFromAxis = f;
                        this.shear = l;
                        this.scale = m;
                        this.setTransform = c;
                        this.translate = d;
                        this.transform = u;
                        this.multiply = g;
                        this.applyToPoint = _;
                        this.applyToX = A;
                        this.applyToY = P;
                        this.applyToZ = S;
                        this.applyToPointArray = T;
                        this.applyToTriplePoints = C;
                        this.applyToPointStringified = E;
                        this.toCSS = F;
                        this.to2dCSS = L;
                        this.clone = k;
                        this.cloneFromProps = b;
                        this.equals = x;
                        this.inversePoints = M;
                        this.inversePoint = w;
                        this.getInverseMatrix = D;
                        this._t = this.transform;
                        this.isIdentity = v;
                        this._identity = true;
                        this._identityCalculated = false;
                        this.props = y("float32", 16);
                        this.reset();
                    };
                })();
                function tG(t) {
                    return (tG = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t)=>typeof t : (t)=>{
                        if (t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype) {
                            return "symbol";
                        }
                        return typeof t;
                    })(t);
                }
                const tq = {};
                function tW() {
                    tu.searchAnimations();
                }
                tq.play = tu.play;
                tq.pause = tu.pause;
                tq.setLocationHref = (t)=>{
                    m(t);
                };
                tq.togglePause = tu.togglePause;
                tq.setSpeed = tu.setSpeed;
                tq.setDirection = tu.setDirection;
                tq.stop = tu.stop;
                tq.searchAnimations = tW;
                tq.registerAnimation = tu.registerAnimation;
                tq.loadAnimation = (t)=>tu.loadAnimation(t);
                tq.setSubframeRendering = (t)=>{
                    Q(t);
                };
                tq.resize = tu.resize;
                tq.goToAndStop = tu.goToAndStop;
                tq.destroy = tu.destroy;
                tq.setQuality = (t)=>{
                    if (typeof t === "string") {
                        switch(t){
                            case "high":
                                ti(200);
                                break;
                            default:
                            case "medium":
                                ti(50);
                                break;
                            case "low":
                                ti(10);
                        }
                    } else {
                        if (!isNaN(t) && t > 1) {
                            ti(t);
                        }
                    }
                    if (ts() >= 50) {
                        L(false);
                    } else {
                        L(true);
                    }
                };
                tq.inBrowser = ()=>typeof navigator !== "undefined";
                tq.installPlugin = (t, e)=>{
                    if (t === "expressions") {
                        $(e);
                    }
                };
                tq.freeze = tu.freeze;
                tq.unfreeze = tu.unfreeze;
                tq.setVolume = tu.setVolume;
                tq.mute = tu.mute;
                tq.unmute = tu.unmute;
                tq.getRegisteredAnimations = tu.getRegisteredAnimations;
                tq.useWebWorker = (t)=>{
                    f = !!t;
                };
                tq.setIDPrefix = (t)=>{
                    ta(t);
                };
                tq.__getFactory = (t)=>{
                    switch(t){
                        case "propertyFactory":
                            return tI;
                        case "shapePropertyFactory":
                            return tO;
                        case "matrix":
                            return tj;
                        default:
                            return null;
                    }
                };
                tq.version = "5.13.0";
                let tH = "";
                const tX = document.getElementsByTagName("script");
                const tY = tX.length - 1;
                const tU = tX[tY] || {
                    src: ""
                };
                tH = tU.src ? tU.src.replace(/^[^\?]+\??/, "") : "";
                ((t)=>{
                    for(let e = tH.split("&"), i = 0; i < e.length; i += 1){
                        const s = e[i].split("=");
                        if (decodeURIComponent(s[0]) == t) {
                            return decodeURIComponent(s[1]);
                        }
                    }
                })("renderer");
                var tK = setInterval(()=>{
                    if (document.readyState === "complete") {
                        clearInterval(tK);
                        tW();
                    }
                }, 100);
                try {
                    if (!(tG(i) === "object" || typeof define === "function" && define.amd)) {
                        window.bodymovin = tq;
                    }
                } catch (t) {}
                n = {};
                const tJ = {
                    registerModifier (t, e) {
                        if (!n[t]) {
                            n[t] = e;
                        }
                    },
                    getModifier (t, e, i) {
                        return new n[t](e, i);
                    }
                };
                class tZ {
                    initModifierProperties() {}
                    addShapeToModifier() {}
                    addShape(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            const e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: tN.newShapeCollection()
                            };
                            this.shapes.push(e);
                            this.addShapeToModifier(e);
                            if (this._isAnimated) {
                                t.setAsAnimated();
                            }
                        }
                    }
                    init(t, e) {
                        this.shapes = [];
                        this.elem = t;
                        this.initDynamicPropertyContainer(t);
                        this.initModifierProperties(t, e);
                        this.frameId = -999999;
                        this.closed = false;
                        this.k = false;
                        if (this.dynamicProperties.length) {
                            this.k = true;
                        } else {
                            this.getValue(true);
                        }
                    }
                    processKeys() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.frameId = this.elem.globalData.frameId;
                            this.iterateDynamicProperties();
                        }
                    }
                }
                function tQ() {}
                function t$() {}
                u([
                    tL
                ], tZ);
                u([
                    tZ
                ], tQ);
                tQ.prototype.initModifierProperties = function(t, e) {
                    this.s = tI.getProp(t, e.s, 0, 0.01, this);
                    this.e = tI.getProp(t, e.e, 0, 0.01, this);
                    this.o = tI.getProp(t, e.o, 0, 0, this);
                    this.sValue = 0;
                    this.eValue = 0;
                    this.getValue = this.processKeys;
                    this.m = e.m;
                    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
                };
                tQ.prototype.addShapeToModifier = (t)=>{
                    t.pathsData = [];
                };
                tQ.prototype.calculateShapeEdges = (t, e, i, s, a)=>{
                    let r;
                    let n;
                    let o;
                    const h = [];
                    if (e <= 1) {
                        h.push({
                            s: t,
                            e
                        });
                    } else if (t >= 1) {
                        h.push({
                            s: t - 1,
                            e: e - 1
                        });
                    } else {
                        h.push({
                            s: t,
                            e: 1
                        });
                        h.push({
                            s: 0,
                            e: e - 1
                        });
                    }
                    const l = [];
                    const h_length = h.length;
                    for(r = 0; r < h_length; r += 1){
                        if (!((n = h[r]).e * a < s || n.s * a > s + i)) {
                            o = n.s * a <= s ? 0 : (n.s * a - s) / i;
                            l.push([
                                o,
                                n.e * a >= s + i ? 1 : (n.e * a - s) / i
                            ]);
                        }
                    }
                    if (!l.length) {
                        l.push([
                            0,
                            0
                        ]);
                    }
                    return l;
                };
                tQ.prototype.releasePathsData = (t)=>{
                    let e;
                    const t_length = t.length;
                    for(e = 0; e < t_length; e += 1){
                        tk.release(t[e]);
                    }
                    t.length = 0;
                    return t;
                };
                tQ.prototype.processShapes = function(t) {
                    if (this._mdf || t) {
                        let e = this.o.v % 360 / 360;
                        if (e < 0) {
                            e += 1;
                        }
                        if ((r = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (n = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
                            const i = r;
                            r = n;
                            n = i;
                        }
                        r = 0.0001 * Math.round(10000 * r);
                        n = 0.0001 * Math.round(10000 * n);
                        this.sValue = r;
                        this.eValue = n;
                    } else {
                        r = this.sValue;
                        n = this.eValue;
                    }
                    const length = this.shapes.length;
                    let a = 0;
                    if (n === r) {
                        for(h = 0; h < length; h += 1){
                            this.shapes[h].localShapeCollection.releaseShapes();
                            this.shapes[h].shape._mdf = true;
                            this.shapes[h].shape.paths = this.shapes[h].localShapeCollection;
                            if (this._mdf) {
                                this.shapes[h].pathsData.length = 0;
                            }
                        }
                    } else if ((n !== 1 || r !== 0) && (n !== 0 || r !== 1)) {
                        var r;
                        var n;
                        let o;
                        var h;
                        let l;
                        let p;
                        let f;
                        let m;
                        let c;
                        let d;
                        let u;
                        let g;
                        const y = [];
                        for(h = 0; h < length; h += 1){
                            if ((d = this.shapes[h]).shape._mdf || this._mdf || t || this.m === 2) {
                                p = (o = d.shape.paths)._length;
                                c = 0;
                                if (!d.shape._mdf && d.pathsData.length) {
                                    c = d.totalShapeLength;
                                } else {
                                    f = this.releasePathsData(d.pathsData);
                                    for(l = 0; l < p; l += 1){
                                        m = tb.getSegmentsLength(o.shapes[l]);
                                        f.push(m);
                                        c += m.totalLength;
                                    }
                                    d.totalShapeLength = c;
                                    d.pathsData = f;
                                }
                                a += c;
                                d.shape._mdf = true;
                            } else {
                                d.shape.paths = d.localShapeCollection;
                            }
                        }
                        let v = r;
                        let x = n;
                        let k = 0;
                        for(h = length - 1; h >= 0; h -= 1){
                            if ((d = this.shapes[h]).shape._mdf) {
                                (u = d.localShapeCollection).releaseShapes();
                                if (this.m === 2 && length > 1) {
                                    g = this.calculateShapeEdges(r, n, d.totalShapeLength, k, a);
                                    k += d.totalShapeLength;
                                } else {
                                    g = [
                                        [
                                            v,
                                            x
                                        ]
                                    ];
                                }
                                p = g.length;
                                for(l = 0; l < p; l += 1){
                                    v = g[l][0];
                                    x = g[l][1];
                                    y.length = 0;
                                    if (x <= 1) {
                                        y.push({
                                            s: d.totalShapeLength * v,
                                            e: d.totalShapeLength * x
                                        });
                                    } else if (v >= 1) {
                                        y.push({
                                            s: d.totalShapeLength * (v - 1),
                                            e: d.totalShapeLength * (x - 1)
                                        });
                                    } else {
                                        y.push({
                                            s: d.totalShapeLength * v,
                                            e: d.totalShapeLength
                                        });
                                        y.push({
                                            s: 0,
                                            e: d.totalShapeLength * (x - 1)
                                        });
                                    }
                                    let b = this.addShapes(d, y[0]);
                                    if (y[0].s !== y[0].e) {
                                        if (y.length > 1) {
                                            if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                const _ = b.pop();
                                                this.addPaths(b, u);
                                                b = this.addShapes(d, y[1], _);
                                            } else {
                                                this.addPaths(b, u);
                                                b = this.addShapes(d, y[1]);
                                            }
                                        }
                                        this.addPaths(b, u);
                                    }
                                }
                                d.shape.paths = u;
                            }
                        }
                    } else if (this._mdf) {
                        for(h = 0; h < length; h += 1){
                            this.shapes[h].pathsData.length = 0;
                            this.shapes[h].shape._mdf = true;
                        }
                    }
                };
                tQ.prototype.addPaths = (t, e)=>{
                    let i;
                    const t_length = t.length;
                    for(i = 0; i < t_length; i += 1){
                        e.addShape(t[i]);
                    }
                };
                tQ.prototype.addSegment = (t, e, i, s, a, r, n)=>{
                    a.setXYAt(e[0], e[1], "o", r);
                    a.setXYAt(i[0], i[1], "i", r + 1);
                    if (n) {
                        a.setXYAt(t[0], t[1], "v", r);
                    }
                    a.setXYAt(s[0], s[1], "v", r + 1);
                };
                tQ.prototype.addSegmentFromArray = (t, e, i, s)=>{
                    e.setXYAt(t[1], t[5], "o", i);
                    e.setXYAt(t[2], t[6], "i", i + 1);
                    if (s) {
                        e.setXYAt(t[0], t[4], "v", i);
                    }
                    e.setXYAt(t[3], t[7], "v", i + 1);
                };
                tQ.prototype.addShapes = function(t, e, i) {
                    let s;
                    let a;
                    let r;
                    let n;
                    let o;
                    let h;
                    let l;
                    let p;
                    const t_pathsData = t.pathsData;
                    const shapes = t.shape.paths.shapes;
                    const _length = t.shape.paths._length;
                    let d = 0;
                    const u = [];
                    let g = true;
                    if (i) {
                        o = i._length;
                        p = i._length;
                    } else {
                        i = tB.newElement();
                        o = 0;
                        p = 0;
                    }
                    u.push(i);
                    for(s = 0; s < _length; s += 1){
                        h = t_pathsData[s].lengths;
                        i.c = shapes[s].c;
                        r = shapes[s].c ? h.length : h.length + 1;
                        for(a = 1; a < r; a += 1){
                            if (d + (n = h[a - 1]).addedLength < e.s) {
                                d += n.addedLength;
                                i.c = false;
                            } else if (d > e.e) {
                                i.c = false;
                                break;
                            } else {
                                if (e.s <= d && e.e >= d + n.addedLength) {
                                    this.addSegment(shapes[s].v[a - 1], shapes[s].o[a - 1], shapes[s].i[a], shapes[s].v[a], i, o, g);
                                    g = false;
                                } else {
                                    l = tb.getNewSegment(shapes[s].v[a - 1], shapes[s].v[a], shapes[s].o[a - 1], shapes[s].i[a], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[a - 1]);
                                    this.addSegmentFromArray(l, i, o, g);
                                    g = false;
                                    i.c = false;
                                }
                                d += n.addedLength;
                                o += 1;
                            }
                        }
                        if (shapes[s].c && h.length) {
                            n = h[a - 1];
                            if (d <= e.e) {
                                const y = h[a - 1].addedLength;
                                if (e.s <= d && e.e >= d + y) {
                                    this.addSegment(shapes[s].v[a - 1], shapes[s].o[a - 1], shapes[s].i[0], shapes[s].v[0], i, o, g);
                                    g = false;
                                } else {
                                    l = tb.getNewSegment(shapes[s].v[a - 1], shapes[s].v[0], shapes[s].o[a - 1], shapes[s].i[0], (e.s - d) / y, (e.e - d) / y, h[a - 1]);
                                    this.addSegmentFromArray(l, i, o, g);
                                    g = false;
                                    i.c = false;
                                }
                            } else {
                                i.c = false;
                            }
                            d += n.addedLength;
                            o += 1;
                        }
                        if (i._length) {
                            i.setXYAt(i.v[p][0], i.v[p][1], "i", p);
                            i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1);
                        }
                        if (d > e.e) {
                            break;
                        }
                        if (s < _length - 1) {
                            i = tB.newElement();
                            g = true;
                            u.push(i);
                            o = 0;
                        }
                    }
                    return u;
                };
                u([
                    tZ
                ], t$);
                t$.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys;
                    this.amount = tI.getProp(t, e.a, 0, null, this);
                    this._isAnimated = !!this.amount.effectsSequence.length;
                };
                t$.prototype.processPath = (t, e)=>{
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    let o;
                    const h = e / 100;
                    const l = [
                        0,
                        0
                    ];
                    const t__length = t._length;
                    let f = 0;
                    for(f = 0; f < t__length; f += 1){
                        l[0] += t.v[f][0];
                        l[1] += t.v[f][1];
                    }
                    l[0] /= t__length;
                    l[1] /= t__length;
                    const m = tB.newElement();
                    m.c = t.c;
                    for(f = 0; f < t__length; f += 1){
                        i = t.v[f][0] + (l[0] - t.v[f][0]) * h;
                        s = t.v[f][1] + (l[1] - t.v[f][1]) * h;
                        a = t.o[f][0] + -((l[0] - t.o[f][0]) * h);
                        r = t.o[f][1] + -((l[1] - t.o[f][1]) * h);
                        n = t.i[f][0] + -((l[0] - t.i[f][0]) * h);
                        o = t.i[f][1] + -((l[1] - t.i[f][1]) * h);
                        m.setTripleAt(i, s, a, r, n, o, f);
                    }
                    return m;
                };
                t$.prototype.processShapes = function(t) {
                    let e;
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    const length = this.shapes.length;
                    const h = this.amount.v;
                    if (h !== 0) {
                        for(i = 0; i < length; i += 1){
                            n = (r = this.shapes[i]).localShapeCollection;
                            if (!(!r.shape._mdf && !this._mdf && !t)) {
                                n.releaseShapes();
                                r.shape._mdf = true;
                                e = r.shape.paths.shapes;
                                a = r.shape.paths._length;
                                for(s = 0; s < a; s += 1){
                                    n.addShape(this.processPath(e[s], h));
                                }
                            }
                            r.shape.paths = r.localShapeCollection;
                        }
                    }
                    if (!this.dynamicProperties.length) {
                        this._mdf = false;
                    }
                };
                const t0 = (()=>{
                    const t = [
                        0,
                        0
                    ];
                    function e(t, e, i) {
                        this.elem = t;
                        this.frameId = -1;
                        this.propType = "transform";
                        this.data = e;
                        this.v = new tj;
                        this.pre = new tj;
                        this.appliedTransformations = 0;
                        this.initDynamicPropertyContainer(i || t);
                        if (e.p && e.p.s) {
                            this.px = tI.getProp(t, e.p.x, 0, 0, this);
                            this.py = tI.getProp(t, e.p.y, 0, 0, this);
                            if (e.p.z) {
                                this.pz = tI.getProp(t, e.p.z, 0, 0, this);
                            }
                        } else {
                            this.p = tI.getProp(t, e.p || {
                                k: [
                                    0,
                                    0,
                                    0
                                ]
                            }, 1, 0, this);
                        }
                        if (e.rx) {
                            this.rx = tI.getProp(t, e.rx, 0, I, this);
                            this.ry = tI.getProp(t, e.ry, 0, I, this);
                            this.rz = tI.getProp(t, e.rz, 0, I, this);
                            if (e.or.k[0].ti) {
                                let s;
                                const a = e.or.k.length;
                                for(s = 0; s < a; s += 1){
                                    e.or.k[s].to = null;
                                    e.or.k[s].ti = null;
                                }
                            }
                            this.or = tI.getProp(t, e.or, 1, I, this);
                            this.or.sh = true;
                        } else {
                            this.r = tI.getProp(t, e.r || {
                                k: 0
                            }, 0, I, this);
                        }
                        if (e.sk) {
                            this.sk = tI.getProp(t, e.sk, 0, I, this);
                            this.sa = tI.getProp(t, e.sa, 0, I, this);
                        }
                        this.a = tI.getProp(t, e.a || {
                            k: [
                                0,
                                0,
                                0
                            ]
                        }, 1, 0, this);
                        this.s = tI.getProp(t, e.s || {
                            k: [
                                100,
                                100,
                                100
                            ]
                        }, 1, 0.01, this);
                        if (e.o) {
                            this.o = tI.getProp(t, e.o, 0, 0.01, t);
                        } else {
                            this.o = {
                                _mdf: false,
                                v: 1
                            };
                        }
                        this._isDirty = true;
                        if (!this.dynamicProperties.length) {
                            this.getValue(true);
                        }
                    }
                    e.prototype = {
                        applyToMatrix (t) {
                            const _mdf = this._mdf;
                            this.iterateDynamicProperties();
                            this._mdf = this._mdf || _mdf;
                            if (this.a) {
                                t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                            }
                            if (this.s) {
                                t.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                            }
                            if (this.sk) {
                                t.skewFromAxis(-this.sk.v, this.sa.v);
                            }
                            if (this.r) {
                                t.rotate(-this.r.v);
                            } else {
                                t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                            }
                            if (this.data.p.s) {
                                if (this.data.p.z) {
                                    t.translate(this.px.v, this.py.v, -this.pz.v);
                                } else {
                                    t.translate(this.px.v, this.py.v, 0);
                                }
                            } else {
                                t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                            }
                        },
                        getValue (e) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty) {
                                    this.precalculateMatrix();
                                    this._isDirty = false;
                                }
                                this.iterateDynamicProperties();
                                if (this._mdf || e) {
                                    let i;
                                    this.v.cloneFromProps(this.pre.props);
                                    if (this.appliedTransformations < 1) {
                                        this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                                    }
                                    if (this.appliedTransformations < 2) {
                                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                                    }
                                    if (this.sk && this.appliedTransformations < 3) {
                                        this.v.skewFromAxis(-this.sk.v, this.sa.v);
                                    }
                                    if (this.r && this.appliedTransformations < 4) {
                                        this.v.rotate(-this.r.v);
                                    } else if (!this.r && this.appliedTransformations < 4) {
                                        this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                                    }
                                    if (this.autoOriented) {
                                        i = this.elem.globalData.frameRate;
                                        if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                                            if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                                                s = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / i, 0);
                                                a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0);
                                            } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                                                s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0);
                                                a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / i, 0);
                                            } else {
                                                s = this.p.pv;
                                                a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / i, this.p.offsetTime);
                                            }
                                        } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            var s = [];
                                            var a = [];
                                            const r = this.px;
                                            const n = this.py;
                                            if (r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t) {
                                                s[0] = r.getValueAtTime((r.keyframes[0].t + 0.01) / i, 0);
                                                s[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / i, 0);
                                                a[0] = r.getValueAtTime(r.keyframes[0].t / i, 0);
                                                a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0);
                                            } else if (r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t) {
                                                s[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0);
                                                s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0);
                                                a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - 0.01) / i, 0);
                                                a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / i, 0);
                                            } else {
                                                s = [
                                                    r.pv,
                                                    n.pv
                                                ];
                                                a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - 0.01) / i, r.offsetTime);
                                                a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / i, n.offsetTime);
                                            }
                                        } else {
                                            a = t;
                                            s = t;
                                        }
                                        this.v.rotate(-Math.atan2(s[1] - a[1], s[0] - a[0]));
                                    }
                                    if (this.data.p && this.data.p.s) {
                                        if (this.data.p.z) {
                                            this.v.translate(this.px.v, this.py.v, -this.pz.v);
                                        } else {
                                            this.v.translate(this.px.v, this.py.v, 0);
                                        }
                                    } else {
                                        this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                                    }
                                }
                                this.frameId = this.elem.globalData.frameId;
                            }
                        },
                        precalculateMatrix () {
                            this.appliedTransformations = 0;
                            this.pre.reset();
                            if (!this.a.effectsSequence.length) {
                                this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                                this.appliedTransformations = 1;
                                if (!this.s.effectsSequence.length) {
                                    this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                                    this.appliedTransformations = 2;
                                    if (this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) {
                                            return;
                                        } else {
                                            this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                                            this.appliedTransformations = 3;
                                        }
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                                }
                            }
                        },
                        autoOrient () {}
                    };
                    u([
                        tL
                    ], e);
                    e.prototype.addDynamicProperty = function(t) {
                        this._addDynamicProperty(t);
                        this.elem.addDynamicProperty(t);
                        this._isDirty = true;
                    };
                    e.prototype._addDynamicProperty = tL.prototype.addDynamicProperty;
                    return {
                        getTransformProperty (t, i, s) {
                            return new e(t, i, s);
                        }
                    };
                })();
                function t1() {}
                function t2() {}
                function t3(t, e) {
                    return 100000 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
                }
                function t6(t) {
                    return Math.abs(t) <= 0.00001;
                }
                function t5(t, e, i) {
                    let s;
                    let a;
                    return [
                        (s = t[0], s * (1 - i) + e[0] * i),
                        (a = t[1], a * (1 - i) + e[1] * i)
                    ];
                }
                function t4(t, e, i, s) {
                    return [
                        -t + 3 * e - 3 * i + s,
                        3 * t - 6 * e + 3 * i,
                        -3 * t + 3 * e,
                        t
                    ];
                }
                function t7(t) {
                    return new t9(t, t, t, t, false);
                }
                class t9 {
                    constructor(t, e, i, s, a){
                        if (a && en(t, e)) {
                            e = t5(t, s, 1 / 3);
                        }
                        if (a && en(i, s)) {
                            i = t5(t, s, 2 / 3);
                        }
                        const r = t4(t[0], e[0], i[0], s[0]);
                        const n = t4(t[1], e[1], i[1], s[1]);
                        this.a = [
                            r[0],
                            n[0]
                        ];
                        this.b = [
                            r[1],
                            n[1]
                        ];
                        this.c = [
                            r[2],
                            n[2]
                        ];
                        this.d = [
                            r[3],
                            n[3]
                        ];
                        this.points = [
                            t,
                            e,
                            i,
                            s
                        ];
                    }
                    point(t) {
                        return [
                            ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                            ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
                        ];
                    }
                    derivative(t) {
                        return [
                            (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                            (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
                        ];
                    }
                    tangentAngle(t) {
                        const e = this.derivative(t);
                        return Math.atan2(e[1], e[0]);
                    }
                    normalAngle(t) {
                        const e = this.derivative(t);
                        return Math.atan2(e[0], e[1]);
                    }
                    inflectionPoints() {
                        const t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                        if (t6(t)) {
                            return [];
                        }
                        const e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t;
                        const i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                        if (i < 0) {
                            return [];
                        }
                        const s = Math.sqrt(i);
                        if (t6(s)) {
                            if (s > 0 && s < 1) {
                                return [
                                    e
                                ];
                            }
                            return [];
                        }
                        return [
                            e - s,
                            e + s
                        ].filter((t)=>t > 0 && t < 1);
                    }
                    split(t) {
                        if (t <= 0) {
                            return [
                                t7(this.points[0]),
                                this
                            ];
                        }
                        if (t >= 1) {
                            return [
                                this,
                                t7(this.points[this.points.length - 1])
                            ];
                        }
                        const e = t5(this.points[0], this.points[1], t);
                        const i = t5(this.points[1], this.points[2], t);
                        const s = t5(this.points[2], this.points[3], t);
                        const a = t5(e, i, t);
                        const r = t5(i, s, t);
                        const n = t5(a, r, t);
                        return [
                            new t9(this.points[0], e, a, n, true),
                            new t9(n, r, s, this.points[3], true)
                        ];
                    }
                    bounds() {
                        return {
                            x: t8(this, 0),
                            y: t8(this, 1)
                        };
                    }
                    boundingBox() {
                        const t = this.bounds();
                        return {
                            left: t.x.min,
                            right: t.x.max,
                            top: t.y.min,
                            bottom: t.y.max,
                            width: t.x.max - t.x.min,
                            height: t.y.max - t.y.min,
                            cx: (t.x.max + t.x.min) / 2,
                            cy: (t.y.max + t.y.min) / 2
                        };
                    }
                    intersections(t, e = 2, i = 7) {
                        const s = [];
                        !function t(e, i, s, a, r, n) {
                            if (2 * Math.abs(e.cx - i.cx) < e.width + i.width && 2 * Math.abs(e.cy - i.cy) < e.height + i.height) {
                                if (s >= n || e.width <= a && e.height <= a && i.width <= a && i.height <= a) {
                                    return void r.push([
                                        e.t,
                                        i.t
                                    ]);
                                }
                                const o = ee(e);
                                const h = ee(i);
                                t(o[0], h[0], s + 1, a, r, n);
                                t(o[0], h[1], s + 1, a, r, n);
                                t(o[1], h[0], s + 1, a, r, n);
                                t(o[1], h[1], s + 1, a, r, n);
                            }
                        }(et(this, 0, 1), et(t, 0, 1), 0, e, s, i);
                        return s;
                    }
                    static shapeSegment(t, e) {
                        const i = (e + 1) % t.length();
                        return new t9(t.v[e], t.o[e], t.i[i], t.v[i], true);
                    }
                    static shapeSegmentInverted(t, e) {
                        const i = (e + 1) % t.length();
                        return new t9(t.v[i], t.i[i], t.o[e], t.v[e], true);
                    }
                }
                function t8(t, e) {
                    let min = t.points[0][e];
                    let max = t.points[t.points.length - 1][e];
                    if (min > max) {
                        const a = max;
                        max = min;
                        min = a;
                    }
                    for(let r = ((t, e, i)=>{
                        if (t === 0) {
                            return [];
                        }
                        const s = e * e - 4 * t * i;
                        if (s < 0) {
                            return [];
                        }
                        const a = -e / (2 * t);
                        if (s === 0) {
                            return [
                                a
                            ];
                        }
                        const r = Math.sqrt(s) / (2 * t);
                        return [
                            a - r,
                            a + r
                        ];
                    })(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < r.length; n += 1){
                        if (r[n] > 0 && r[n] < 1) {
                            const o = t.point(r[n])[e];
                            if (o < min) {
                                min = o;
                            } else if (o > max) {
                                max = o;
                            }
                        }
                    }
                    return {
                        min,
                        max
                    };
                }
                function et(bez, t1_1, t2_1) {
                    const s = bez.boundingBox();
                    return {
                        cx: s.cx,
                        cy: s.cy,
                        width: s.width,
                        height: s.height,
                        bez,
                        t: (t1_1 + t2_1) / 2,
                        t1: t1_1,
                        t2: t2_1
                    };
                }
                function ee(t) {
                    const e = t.bez.split(0.5);
                    return [
                        et(e[0], t.t1, t.t),
                        et(e[1], t.t, t.t2)
                    ];
                }
                function ei(t, e) {
                    return [
                        t[1] * e[2] - t[2] * e[1],
                        t[2] * e[0] - t[0] * e[2],
                        t[0] * e[1] - t[1] * e[0]
                    ];
                }
                function es(t, e, i, s) {
                    const a = [
                        t[0],
                        t[1],
                        1
                    ];
                    const r = [
                        e[0],
                        e[1],
                        1
                    ];
                    const n = [
                        i[0],
                        i[1],
                        1
                    ];
                    const o = [
                        s[0],
                        s[1],
                        1
                    ];
                    const h = ei(ei(a, r), ei(n, o));
                    if (t6(h[2])) {
                        return null;
                    }
                    return [
                        h[0] / h[2],
                        h[1] / h[2]
                    ];
                }
                function ea(t, e, i) {
                    return [
                        t[0] + Math.cos(e) * i,
                        t[1] - Math.sin(e) * i
                    ];
                }
                function er(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1]);
                }
                function en(t, e) {
                    return t3(t[0], e[0]) && t3(t[1], e[1]);
                }
                function eo() {}
                function eh(t, e, i, s, a, r, n) {
                    const o = i - Math.PI / 2;
                    const h = i + Math.PI / 2;
                    const l = e[0] + Math.cos(i) * s * a;
                    const p = e[1] - Math.sin(i) * s * a;
                    t.setTripleAt(l, p, l + Math.cos(o) * r, p - Math.sin(o) * r, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length());
                }
                function el(t, e, i, s, a, r, n) {
                    let o;
                    let h;
                    let l;
                    let p;
                    let f;
                    let m;
                    let c;
                    o = i === 0 ? e.length() - 1 : i - 1;
                    h = (i + 1) % e.length();
                    l = e.v[o];
                    const d = Math.atan2(0, 1) - Math.atan2((f = [
                        (p = e.v[h])[0] - l[0],
                        p[1] - l[1]
                    ], c = [
                        Math.cos(m = -(0.5 * Math.PI)) * f[0] - Math.sin(m) * f[1],
                        Math.sin(m) * f[0] + Math.cos(m) * f[1]
                    ])[1], c[0]);
                    const u = e.v[i % e._length];
                    const g = e.v[i === 0 ? e._length - 1 : i - 1];
                    const y = e.v[(i + 1) % e._length];
                    const v = r === 2 ? Math.sqrt((u[0] - g[0]) ** 2 + (u[1] - g[1]) ** 2) : 0;
                    const x = r === 2 ? Math.sqrt((u[0] - y[0]) ** 2 + (u[1] - y[1]) ** 2) : 0;
                    eh(t, e.v[i % e._length], d, n, s, x / ((a + 1) * 2), v / ((a + 1) * 2));
                }
                function ep(t, e, i) {
                    const s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [
                        ea(t, s, i),
                        ea(e, s, i)
                    ];
                }
                function ef(t, e) {
                    i = (o = ep(t.points[0], t.points[1], e))[0];
                    s = o[1];
                    a = (o = ep(t.points[1], t.points[2], e))[0];
                    r = o[1];
                    n = (o = ep(t.points[2], t.points[3], e))[0];
                    var i;
                    var s;
                    var a;
                    var r;
                    var n;
                    var o;
                    const h = o[1];
                    let l = es(i, s, a, r);
                    if (l === null) {
                        l = s;
                    }
                    let p = es(n, h, a, r);
                    if (p === null) {
                        p = n;
                    }
                    return new t9(i, l, p, h);
                }
                function em(t, e, i, s, a) {
                    const r = e.points[3];
                    const n = i.points[0];
                    if (s === 3 || en(r, n)) {
                        return r;
                    }
                    if (s === 2) {
                        const o = -e.tangentAngle(1);
                        const h = -i.tangentAngle(0) + Math.PI;
                        const l = es(r, ea(r, o + Math.PI / 2, 100), n, ea(n, o + Math.PI / 2, 100));
                        const p = l ? er(l, r) : er(r, n) / 2;
                        let f = ea(r, o, 2 * p * 0.5519);
                        t.setXYAt(f[0], f[1], "o", t.length() - 1);
                        f = ea(n, h, 2 * p * 0.5519);
                        t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length());
                        return n;
                    }
                    const m = en(r, e.points[2]) ? e.points[0] : e.points[2];
                    const c = en(n, i.points[1]) ? i.points[3] : i.points[1];
                    const d = es(m, r, n, c);
                    if (d && er(d, r) < a) {
                        t.setTripleAt(d[0], d[1], d[0], d[1], d[0], d[1], t.length());
                        return d;
                    }
                    return r;
                }
                function ec(t, e) {
                    const i = t.intersections(e);
                    if (i.length && t3(i[0][0], 1)) {
                        i.shift();
                    }
                    if (i.length) {
                        return i[0];
                    }
                    return null;
                }
                function ed(t, e) {
                    const i = t.slice();
                    const s = e.slice();
                    let a = ec(t[t.length - 1], e[0]);
                    if (a) {
                        i[t.length - 1] = t[t.length - 1].split(a[0])[0];
                        s[0] = e[0].split(a[1])[1];
                    }
                    if (t.length > 1 && e.length > 1 && (a = ec(t[0], e[e.length - 1]))) {
                        return [
                            [
                                t[0].split(a[0])[0]
                            ],
                            [
                                e[e.length - 1].split(a[1])[1]
                            ]
                        ];
                    }
                    return [
                        i,
                        s
                    ];
                }
                function eu(t, e) {
                    let i;
                    let s;
                    let a;
                    let r;
                    const n = t.inflectionPoints();
                    if (n.length === 0) {
                        return [
                            ef(t, e)
                        ];
                    }
                    if (n.length === 1 || t3(n[1], 1)) {
                        i = (a = t.split(n[0]))[0];
                        s = a[1];
                        return [
                            ef(i, e),
                            ef(s, e)
                        ];
                    }
                    i = (a = t.split(n[0]))[0];
                    const o = (n[1] - n[0]) / (1 - n[0]);
                    r = (a = a[1].split(o))[0];
                    s = a[1];
                    return [
                        ef(i, e),
                        ef(r, e),
                        ef(s, e)
                    ];
                }
                function eg() {}
                function ey(t) {
                    const e = t.fStyle ? t.fStyle.split(" ") : [];
                    let i = "normal";
                    let style = "normal";
                    for(let a = e.length, r = 0; r < a; r += 1){
                        switch(e[r].toLowerCase()){
                            case "italic":
                                style = "italic";
                                break;
                            case "bold":
                                i = "700";
                                break;
                            case "black":
                                i = "900";
                                break;
                            case "medium":
                                i = "500";
                                break;
                            case "regular":
                            case "normal":
                                i = "400";
                                break;
                            case "light":
                            case "thin":
                                i = "200";
                        }
                    }
                    return {
                        style,
                        weight: t.fWeight || i
                    };
                }
                u([
                    tZ
                ], t1);
                t1.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys;
                    this.c = tI.getProp(t, e.c, 0, null, this);
                    this.o = tI.getProp(t, e.o, 0, null, this);
                    this.tr = t0.getTransformProperty(t, e.tr, this);
                    this.so = tI.getProp(t, e.tr.so, 0, 0.01, this);
                    this.eo = tI.getProp(t, e.tr.eo, 0, 0.01, this);
                    this.data = e;
                    if (!this.dynamicProperties.length) {
                        this.getValue(true);
                    }
                    this._isAnimated = !!this.dynamicProperties.length;
                    this.pMatrix = new tj;
                    this.rMatrix = new tj;
                    this.sMatrix = new tj;
                    this.tMatrix = new tj;
                    this.matrix = new tj;
                };
                t1.prototype.applyTransforms = (t, e, i, s, a, r)=>{
                    const n = r ? -1 : 1;
                    const o = s.s.v[0] + (1 - s.s.v[0]) * (1 - a);
                    const h = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                    t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]);
                    e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]);
                    e.rotate(-s.r.v * n * a);
                    e.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
                    i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]);
                    i.scale(r ? 1 / o : o, r ? 1 / h : h);
                    i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
                };
                t1.prototype.init = function(t, e, i, s) {
                    this.elem = t;
                    this.arr = e;
                    this.pos = i;
                    this.elemsData = s;
                    this._currentCopies = 0;
                    this._elements = [];
                    this._groups = [];
                    this.frameId = -1;
                    this.initDynamicPropertyContainer(t);
                    this.initModifierProperties(t, e[i]);
                    while(i > 0){
                        i -= 1;
                        this._elements.unshift(e[i]);
                    }
                    if (this.dynamicProperties.length) {
                        this.k = true;
                    } else {
                        this.getValue(true);
                    }
                };
                t1.prototype.resetElements = function(t) {
                    let e;
                    const t_length = t.length;
                    for(e = 0; e < t_length; e += 1){
                        t[e]._processed = false;
                        if (t[e].ty === "gr") {
                            this.resetElements(t[e].it);
                        }
                    }
                };
                t1.prototype.cloneElements = function(t) {
                    const e = JSON.parse(JSON.stringify(t));
                    this.resetElements(e);
                    return e;
                };
                t1.prototype.changeGroupRender = function(t, e) {
                    let i;
                    const t_length = t.length;
                    for(i = 0; i < t_length; i += 1){
                        t[i]._render = e;
                        if (t[i].ty === "gr") {
                            this.changeGroupRender(t[i].it, e);
                        }
                    }
                };
                t1.prototype.processShapes = function(t) {
                    let e = false;
                    if (this._mdf || t) {
                        var i;
                        var s;
                        var a;
                        var r;
                        var n;
                        let o;
                        let h;
                        let l;
                        const p = Math.ceil(this.c.v);
                        if (this._groups.length < p) {
                            while(this._groups.length < p){
                                const f = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                f.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [
                                            0,
                                            0
                                        ]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [
                                            0,
                                            0
                                        ]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [
                                            {
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            },
                                            {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            }
                                        ]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [
                                            100,
                                            100
                                        ]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                });
                                this.arr.splice(0, 0, f);
                                this._groups.splice(0, 0, f);
                                this._currentCopies += 1;
                            }
                            this.elem.reloadShapes();
                            e = true;
                        }
                        a = 0;
                        for(n = 0; a <= this._groups.length - 1; a += 1){
                            o = n < p;
                            this._groups[a]._render = o;
                            this.changeGroupRender(this._groups[a].it, o);
                            if (!o) {
                                const m = this.elemsData[a].it;
                                const c = m[m.length - 1];
                                if (c.transform.op.v !== 0) {
                                    c.transform.op._mdf = true;
                                    c.transform.op.v = 0;
                                } else {
                                    c.transform.op._mdf = false;
                                }
                            }
                            n += 1;
                        }
                        this._currentCopies = p;
                        const d = this.o.v;
                        const u = d % 1;
                        const g = d > 0 ? Math.floor(d) : Math.ceil(d);
                        const y = this.pMatrix.props;
                        const v = this.rMatrix.props;
                        const x = this.sMatrix.props;
                        this.pMatrix.reset();
                        this.rMatrix.reset();
                        this.sMatrix.reset();
                        this.tMatrix.reset();
                        this.matrix.reset();
                        let k = 0;
                        if (d > 0) {
                            while(k < g){
                                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                                k += 1;
                            }
                            if (u) {
                                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, false);
                                k += u;
                            }
                        } else if (d < 0) {
                            while(k > g){
                                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                                k -= 1;
                            }
                            if (u) {
                                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, true);
                                k -= u;
                            }
                        }
                        a = this.data.m === 1 ? 0 : this._currentCopies - 1;
                        r = this.data.m === 1 ? 1 : -1;
                        for(n = this._currentCopies; n;){
                            l = (s = (i = this.elemsData[a].it)[i.length - 1].transform.mProps.v.props).length;
                            i[i.length - 1].transform.mProps._mdf = true;
                            i[i.length - 1].transform.op._mdf = true;
                            i[i.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (a / (this._currentCopies - 1));
                            if (k !== 0) {
                                if (a !== 0 && r === 1 || a !== this._currentCopies - 1 && -1 === r) {
                                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                                }
                                this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]);
                                this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]);
                                this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]);
                                for(h = 0; h < l; h += 1){
                                    s[h] = this.matrix.props[h];
                                }
                                this.matrix.reset();
                            } else {
                                this.matrix.reset();
                                for(h = 0; h < l; h += 1){
                                    s[h] = this.matrix.props[h];
                                }
                            }
                            k += 1;
                            n -= 1;
                            a += r;
                        }
                    } else {
                        n = this._currentCopies;
                        a = 0;
                        for(r = 1; n;){
                            s = (i = this.elemsData[a].it)[i.length - 1].transform.mProps.v.props;
                            i[i.length - 1].transform.mProps._mdf = false;
                            i[i.length - 1].transform.op._mdf = false;
                            n -= 1;
                            a += r;
                        }
                    }
                    return e;
                };
                t1.prototype.addShape = ()=>{};
                u([
                    tZ
                ], t2);
                t2.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys;
                    this.rd = tI.getProp(t, e.r, 0, null, this);
                    this._isAnimated = !!this.rd.effectsSequence.length;
                };
                t2.prototype.processPath = (t, e)=>{
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    let o;
                    let h;
                    let l;
                    let p;
                    let f;
                    let m;
                    let c;
                    let d;
                    const u = tB.newElement();
                    u.c = t.c;
                    const t__length = t._length;
                    let y = 0;
                    for(i = 0; i < t__length; i += 1){
                        s = t.v[i];
                        r = t.o[i];
                        a = t.i[i];
                        if (s[0] === r[0] && s[1] === r[1] && s[0] === a[0] && s[1] === a[1]) {
                            if (i !== 0 && i !== t__length - 1 || t.c) {
                                n = i === 0 ? t.v[t__length - 1] : t.v[i - 1];
                                h = (o = Math.sqrt((s[0] - n[0]) ** 2 + (s[1] - n[1]) ** 2)) ? Math.min(o / 2, e) / o : 0;
                                l = c = s[0] + (n[0] - s[0]) * h;
                                p = d = s[1] - (s[1] - n[1]) * h;
                                f = l - (l - s[0]) * 0.5519;
                                m = p - (p - s[1]) * 0.5519;
                                u.setTripleAt(l, p, f, m, c, d, y);
                                y += 1;
                                n = i === t__length - 1 ? t.v[0] : t.v[i + 1];
                                h = (o = Math.sqrt((s[0] - n[0]) ** 2 + (s[1] - n[1]) ** 2)) ? Math.min(o / 2, e) / o : 0;
                                l = f = s[0] + (n[0] - s[0]) * h;
                                p = m = s[1] + (n[1] - s[1]) * h;
                                c = l - (l - s[0]) * 0.5519;
                                d = p - (p - s[1]) * 0.5519;
                                u.setTripleAt(l, p, f, m, c, d, y);
                            } else {
                                u.setTripleAt(s[0], s[1], r[0], r[1], a[0], a[1], y);
                            }
                        } else {
                            u.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y);
                        }
                        y += 1;
                    }
                    return u;
                };
                t2.prototype.processShapes = function(t) {
                    let e;
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    const length = this.shapes.length;
                    const h = this.rd.v;
                    if (h !== 0) {
                        for(i = 0; i < length; i += 1){
                            n = (r = this.shapes[i]).localShapeCollection;
                            if (!(!r.shape._mdf && !this._mdf && !t)) {
                                n.releaseShapes();
                                r.shape._mdf = true;
                                e = r.shape.paths.shapes;
                                a = r.shape.paths._length;
                                for(s = 0; s < a; s += 1){
                                    n.addShape(this.processPath(e[s], h));
                                }
                            }
                            r.shape.paths = r.localShapeCollection;
                        }
                    }
                    if (!this.dynamicProperties.length) {
                        this._mdf = false;
                    }
                };
                u([
                    tZ
                ], eo);
                eo.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys;
                    this.amplitude = tI.getProp(t, e.s, 0, null, this);
                    this.frequency = tI.getProp(t, e.r, 0, null, this);
                    this.pointsType = tI.getProp(t, e.pt, 0, null, this);
                    this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
                };
                eo.prototype.processPath = (t, e, i, s)=>{
                    let t__length = t._length;
                    const r = tB.newElement();
                    r.c = t.c;
                    if (!t.c) {
                        t__length -= 1;
                    }
                    if (t__length === 0) {
                        return r;
                    }
                    let n = -1;
                    let o = t9.shapeSegment(t, 0);
                    el(r, t, 0, e, i, s, n);
                    for(let h = 0; h < t__length; h += 1){
                        n = ((t, e, i, s, a, r)=>{
                            for(let n = 0; n < s; n += 1){
                                const o = (n + 1) / (s + 1);
                                const h = a === 2 ? Math.sqrt((e.points[3][0] - e.points[0][0]) ** 2 + (e.points[3][1] - e.points[0][1]) ** 2) : 0;
                                const l = e.normalAngle(o);
                                eh(t, e.point(o), l, r, i, h / ((s + 1) * 2), h / ((s + 1) * 2));
                                r = -r;
                            }
                            return r;
                        })(r, o, e, i, s, -n);
                        o = h !== t__length - 1 || t.c ? t9.shapeSegment(t, (h + 1) % t__length) : null;
                        el(r, t, h + 1, e, i, s, n);
                    }
                    return r;
                };
                eo.prototype.processShapes = function(t) {
                    let e;
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    const length = this.shapes.length;
                    const h = this.amplitude.v;
                    const l = Math.max(0, Math.round(this.frequency.v));
                    const p = this.pointsType.v;
                    if (h !== 0) {
                        for(i = 0; i < length; i += 1){
                            n = (r = this.shapes[i]).localShapeCollection;
                            if (!(!r.shape._mdf && !this._mdf && !t)) {
                                n.releaseShapes();
                                r.shape._mdf = true;
                                e = r.shape.paths.shapes;
                                a = r.shape.paths._length;
                                for(s = 0; s < a; s += 1){
                                    n.addShape(this.processPath(e[s], h, l, p));
                                }
                            }
                            r.shape.paths = r.localShapeCollection;
                        }
                    }
                    if (!this.dynamicProperties.length) {
                        this._mdf = false;
                    }
                };
                u([
                    tZ
                ], eg);
                eg.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys;
                    this.amount = tI.getProp(t, e.a, 0, null, this);
                    this.miterLimit = tI.getProp(t, e.ml, 0, null, this);
                    this.lineJoin = e.lj;
                    this._isAnimated = this.amount.effectsSequence.length !== 0;
                };
                eg.prototype.processPath = (t, e, i, s)=>{
                    let a;
                    let r;
                    let n;
                    const o = tB.newElement();
                    o.c = t.c;
                    let h = t.length();
                    if (!t.c) {
                        h -= 1;
                    }
                    let l = [];
                    for(a = 0; a < h; a += 1){
                        n = t9.shapeSegment(t, a);
                        l.push(eu(n, e));
                    }
                    if (!t.c) {
                        for(a = h - 1; a >= 0; a -= 1){
                            n = t9.shapeSegmentInverted(t, a);
                            l.push(eu(n, e));
                        }
                    }
                    l = ((t)=>{
                        let e;
                        for(let i = 1; i < t.length; i += 1){
                            e = ed(t[i - 1], t[i]);
                            t[i - 1] = e[0];
                            t[i] = e[1];
                        }
                        if (t.length > 1) {
                            e = ed(t[t.length - 1], t[0]);
                            t[t.length - 1] = e[0];
                            t[0] = e[1];
                        }
                        return t;
                    })(l);
                    let p = null;
                    let f = null;
                    for(a = 0; a < l.length; a += 1){
                        const m = l[a];
                        if (f) {
                            p = em(o, f, m[0], i, s);
                        }
                        f = m[m.length - 1];
                        for(r = 0; r < m.length; r += 1){
                            n = m[r];
                            if (p && en(n.points[0], p)) {
                                o.setXYAt(n.points[1][0], n.points[1][1], "o", o.length() - 1);
                            } else {
                                o.setTripleAt(n.points[0][0], n.points[0][1], n.points[1][0], n.points[1][1], n.points[0][0], n.points[0][1], o.length());
                            }
                            o.setTripleAt(n.points[3][0], n.points[3][1], n.points[3][0], n.points[3][1], n.points[2][0], n.points[2][1], o.length());
                            p = n.points[3];
                        }
                    }
                    if (l.length) {
                        em(o, f, l[0][0], i, s);
                    }
                    return o;
                };
                eg.prototype.processShapes = function(t) {
                    let e;
                    let i;
                    let s;
                    let a;
                    let r;
                    let n;
                    const length = this.shapes.length;
                    const h = this.amount.v;
                    const l = this.miterLimit.v;
                    const lineJoin = this.lineJoin;
                    if (h !== 0) {
                        for(i = 0; i < length; i += 1){
                            n = (r = this.shapes[i]).localShapeCollection;
                            if (!(!r.shape._mdf && !this._mdf && !t)) {
                                n.releaseShapes();
                                r.shape._mdf = true;
                                e = r.shape.paths.shapes;
                                a = r.shape.paths._length;
                                for(s = 0; s < a; s += 1){
                                    n.addShape(this.processPath(e[s], h, lineJoin, l));
                                }
                            }
                            r.shape.paths = r.localShapeCollection;
                        }
                    }
                    if (!this.dynamicProperties.length) {
                        this._mdf = false;
                    }
                };
                const ev = (()=>{
                    const t = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    };
                    let e = [];
                    e = e.concat([
                        2304,
                        2305,
                        2306,
                        2307,
                        2362,
                        2363,
                        2364,
                        2364,
                        2366,
                        2367,
                        2368,
                        2369,
                        2370,
                        2371,
                        2372,
                        2373,
                        2374,
                        2375,
                        2376,
                        2377,
                        2378,
                        2379,
                        2380,
                        2381,
                        2382,
                        2383,
                        2387,
                        2388,
                        2389,
                        2390,
                        2391,
                        2402,
                        2403
                    ]);
                    const i = [
                        "d83cdffb",
                        "d83cdffc",
                        "d83cdffd",
                        "d83cdffe",
                        "d83cdfff"
                    ];
                    function s(fFamily, e) {
                        const parent = d("span");
                        parent.setAttribute("aria-hidden", true);
                        parent.style.fontFamily = e;
                        const node = d("span");
                        node.innerText = "giItT1WQy@!-/#";
                        parent.style.position = "absolute";
                        parent.style.left = "-10000px";
                        parent.style.top = "-10000px";
                        parent.style.fontSize = "300px";
                        parent.style.fontVariant = "normal";
                        parent.style.fontStyle = "normal";
                        parent.style.fontWeight = "normal";
                        parent.style.letterSpacing = "0";
                        parent.appendChild(node);
                        document.body.appendChild(parent);
                        const s_offsetWidth = node.offsetWidth;
                        node.style.fontFamily = ((t)=>{
                            let e;
                            const i = t.split(",");
                            const i_length = i.length;
                            const a = [];
                            for(e = 0; e < i_length; e += 1){
                                if (i[e] !== "sans-serif" && i[e] !== "monospace") {
                                    a.push(i[e]);
                                }
                            }
                            return a.join(",");
                        })(fFamily) + ", " + e;
                        return {
                            node,
                            w: s_offsetWidth,
                            parent
                        };
                    }
                    function a(t, e) {
                        let i;
                        const s = document.body && e ? "svg" : "canvas";
                        const a = ey(t);
                        if (s === "svg") {
                            const r = tr("text");
                            r.style.fontSize = "100px";
                            r.setAttribute("font-family", t.fFamily);
                            r.setAttribute("font-style", a.style);
                            r.setAttribute("font-weight", a.weight);
                            r.textContent = "1";
                            if (t.fClass) {
                                r.style.fontFamily = "inherit";
                                r.setAttribute("class", t.fClass);
                            } else {
                                r.style.fontFamily = t.fFamily;
                            }
                            e.appendChild(r);
                            i = r;
                        } else {
                            const n = new OffscreenCanvas(500, 500).getContext("2d");
                            n.font = a.style + " " + a.weight + " 100px " + t.fFamily;
                            i = n;
                        }
                        return {
                            measureText (t) {
                                if (s === "svg") {
                                    i.textContent = t;
                                    return i.getComputedTextLength();
                                }
                                return i.measureText(t).width;
                            }
                        };
                    }
                    function r(t) {
                        let e = 0;
                        const i = t.charCodeAt(0);
                        if (i >= 55296 && i <= 56319) {
                            const s = t.charCodeAt(1);
                            if (s >= 56320 && s <= 57343) {
                                e = (i - 55296) * 1024 + s - 56320 + 65536;
                            }
                        }
                        return e;
                    }
                    function n(t) {
                        const e = r(t);
                        return !!(e >= 127462) && !!(e <= 127487);
                    }
                    const o = function() {
                        this.fonts = [];
                        this.chars = null;
                        this.typekitLoaded = 0;
                        this.isLoaded = false;
                        this._warned = false;
                        this.initTime = Date.now();
                        this.setIsLoadedBinded = this.setIsLoaded.bind(this);
                        this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
                    };
                    o.isModifier = (t, e)=>{
                        const s = t.toString(16) + e.toString(16);
                        return -1 !== i.indexOf(s);
                    };
                    o.isZeroWidthJoiner = (t)=>t === 8205;
                    o.isFlagEmoji = (t)=>n(t.substr(0, 2)) && n(t.substr(2, 2));
                    o.isRegionalCode = n;
                    o.isCombinedCharacter = (t)=>-1 !== e.indexOf(t);
                    o.isRegionalFlag = (t, e)=>{
                        let i = r(t.substr(e, 2));
                        if (i !== 127988) {
                            return false;
                        }
                        let s = 0;
                        for(e += 2; s < 5;){
                            if ((i = r(t.substr(e, 2))) < 917601 || i > 917626) {
                                return false;
                            }
                            s += 1;
                            e += 2;
                        }
                        return r(t.substr(e, 2)) === 917631;
                    };
                    o.isVariationSelector = (t)=>t === 65039;
                    o.BLACK_FLAG_CODE_POINT = 127988;
                    o.prototype = {
                        addChars (t) {
                            if (t) {
                                if (!this.chars) {
                                    this.chars = [];
                                }
                                let e;
                                let i;
                                let s;
                                const a = t.length;
                                let r = this.chars.length;
                                for(e = 0; e < a; e += 1){
                                    i = 0;
                                    for(s = false; i < r;){
                                        if (this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch) {
                                            s = true;
                                        }
                                        i += 1;
                                    }
                                    if (!s) {
                                        this.chars.push(t[e]);
                                        r += 1;
                                    }
                                }
                            }
                        },
                        addFonts (t, e) {
                            if (!t) {
                                this.isLoaded = true;
                                return;
                            }
                            if (this.chars) {
                                this.isLoaded = true;
                                this.fonts = t.list;
                                return;
                            }
                            if (!document.body) {
                                this.isLoaded = true;
                                t.list.forEach((t)=>{
                                    t.helper = a(t);
                                    t.cache = {};
                                });
                                this.fonts = t.list;
                                return;
                            }
                            const t_list = t.list;
                            const i_length = t_list.length;
                            let n = i_length;
                            for(o = 0; o < i_length; o += 1){
                                var o;
                                let h;
                                let l;
                                let p = true;
                                t_list[o].loaded = false;
                                t_list[o].monoCase = s(t_list[o].fFamily, "monospace");
                                t_list[o].sansCase = s(t_list[o].fFamily, "sans-serif");
                                if (t_list[o].fPath) {
                                    if (t_list[o].fOrigin === "p" || t_list[o].origin === 3) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + t_list[o].fFamily + '"], style[f-origin="3"][f-family="' + t_list[o].fFamily + '"]')).length > 0) {
                                            p = false;
                                        }
                                        if (p) {
                                            const f = d("style");
                                            f.setAttribute("f-forigin", t_list[o].fOrigin);
                                            f.setAttribute("f-origin", t_list[o].origin);
                                            f.setAttribute("f-family", t_list[o].fFamily);
                                            f.type = "text/css";
                                            f.innerText = "@font-face {font-family: " + t_list[o].fFamily + "; font-style: normal; src: url('" + t_list[o].fPath + "');}";
                                            e.appendChild(f);
                                        }
                                    } else if (t_list[o].fOrigin === "g" || t_list[o].origin === 1) {
                                        h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
                                        for(l = 0; l < h.length; l += 1){
                                            if (-1 !== h[l].href.indexOf(t_list[o].fPath)) {
                                                p = false;
                                            }
                                        }
                                        if (p) {
                                            const m = d("link");
                                            m.setAttribute("f-forigin", t_list[o].fOrigin);
                                            m.setAttribute("f-origin", t_list[o].origin);
                                            m.type = "text/css";
                                            m.rel = "stylesheet";
                                            m.href = t_list[o].fPath;
                                            document.body.appendChild(m);
                                        }
                                    } else if (t_list[o].fOrigin === "t" || t_list[o].origin === 2) {
                                        h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
                                        for(l = 0; l < h.length; l += 1){
                                            if (t_list[o].fPath === h[l].src) {
                                                p = false;
                                            }
                                        }
                                        if (p) {
                                            const c = d("link");
                                            c.setAttribute("f-forigin", t_list[o].fOrigin);
                                            c.setAttribute("f-origin", t_list[o].origin);
                                            c.setAttribute("rel", "stylesheet");
                                            c.setAttribute("href", t_list[o].fPath);
                                            e.appendChild(c);
                                        }
                                    }
                                } else {
                                    t_list[o].loaded = true;
                                    n -= 1;
                                }
                                t_list[o].helper = a(t_list[o], e);
                                t_list[o].cache = {};
                                this.fonts.push(t_list[o]);
                            }
                            if (n === 0) {
                                this.isLoaded = true;
                            } else {
                                setTimeout(this.checkLoadedFonts.bind(this), 100);
                            }
                        },
                        getCharData (e, i, s) {
                            for(let a = 0, r = this.chars.length; a < r;){
                                if (this.chars[a].ch === e && this.chars[a].style === i && this.chars[a].fFamily === s) {
                                    return this.chars[a];
                                }
                                a += 1;
                            }
                            if ((typeof e === "string" && e.charCodeAt(0) !== 13 || !e) && console && console.warn && !this._warned) {
                                this._warned = true;
                                console.warn("Missing character from exported characters list: ", e, i, s);
                            }
                            return t;
                        },
                        getFontByName (t) {
                            for(let e = 0, i = this.fonts.length; e < i;){
                                if (this.fonts[e].fName === t) {
                                    return this.fonts[e];
                                }
                                e += 1;
                            }
                            return this.fonts[0];
                        },
                        measureText (t, e, i) {
                            const s = this.getFontByName(e);
                            if (!s.cache[t]) {
                                const a = s.helper;
                                if (t === " ") {
                                    const r = a.measureText("|" + t + "|");
                                    const n = a.measureText("||");
                                    s.cache[t] = (r - n) / 100;
                                } else {
                                    s.cache[t] = a.measureText(t) / 100;
                                }
                            }
                            return s.cache[t] * i;
                        },
                        checkLoadedFonts () {
                            let t;
                            let e;
                            let i;
                            const length = this.fonts.length;
                            let a = length;
                            for(t = 0; t < length; t += 1){
                                if (this.fonts[t].loaded) {
                                    a -= 1;
                                } else if (this.fonts[t].fOrigin === "n" || this.fonts[t].origin === 0) {
                                    this.fonts[t].loaded = true;
                                } else {
                                    e = this.fonts[t].monoCase.node;
                                    i = this.fonts[t].monoCase.w;
                                    if (e.offsetWidth !== i) {
                                        a -= 1;
                                        this.fonts[t].loaded = true;
                                    } else {
                                        e = this.fonts[t].sansCase.node;
                                        i = this.fonts[t].sansCase.w;
                                        if (e.offsetWidth !== i) {
                                            a -= 1;
                                            this.fonts[t].loaded = true;
                                        }
                                    }
                                    if (this.fonts[t].loaded) {
                                        this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent);
                                        this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent);
                                    }
                                }
                            }
                            if (a !== 0 && Date.now() - this.initTime < 5000) {
                                setTimeout(this.checkLoadedFontsBinded, 20);
                            } else {
                                setTimeout(this.setIsLoadedBinded, 10);
                            }
                        },
                        setIsLoaded () {
                            this.isLoaded = true;
                        }
                    };
                    return o;
                })();
                class ex {
                    constructor(t){
                        this.animationData = t;
                    }
                    getProp(t) {
                        if (this.animationData.slots && this.animationData.slots[t.sid]) {
                            return Object.assign(t, this.animationData.slots[t.sid].p);
                        }
                        return t;
                    }
                }
                function ek() {}
                ek.prototype = {
                    initRenderable () {
                        this.isInRange = false;
                        this.hidden = false;
                        this.isTransparent = false;
                        this.renderableComponents = [];
                    },
                    addRenderableComponent (t) {
                        if (-1 === this.renderableComponents.indexOf(t)) {
                            this.renderableComponents.push(t);
                        }
                    },
                    removeRenderableComponent (t) {
                        if (-1 !== this.renderableComponents.indexOf(t)) {
                            this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
                        }
                    },
                    prepareRenderableFrame (t) {
                        this.checkLayerLimits(t);
                    },
                    checkTransparency () {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
                    },
                    checkLayerLimits (t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== true && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : this.isInRange !== false && (this.globalData._mdf = true, this.isInRange = false, this.hide());
                    },
                    renderRenderable () {
                        let t;
                        const length = this.renderableComponents.length;
                        for(t = 0; t < length; t += 1){
                            this.renderableComponents[t].renderFrame(this._isFirstFrame);
                        }
                    },
                    sourceRectAtTime () {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        };
                    },
                    getLayerSize () {
                        if (this.data.ty === 5) {
                            return {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            };
                        }
                        return {
                            w: this.data.width,
                            h: this.data.height
                        };
                    }
                };
                o = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                };
                const eb = (t)=>o[t] || "";
                function e_(t, e, i) {
                    this.p = tI.getProp(e, t.v, 0, 0, i);
                }
                function eA(t, e, i) {
                    this.p = tI.getProp(e, t.v, 0, 0, i);
                }
                function eP(t, e, i) {
                    this.p = tI.getProp(e, t.v, 1, 0, i);
                }
                function eS(t, e, i) {
                    this.p = tI.getProp(e, t.v, 1, 0, i);
                }
                function eD(t, e, i) {
                    this.p = tI.getProp(e, t.v, 0, 0, i);
                }
                function ew(t, e, i) {
                    this.p = tI.getProp(e, t.v, 0, 0, i);
                }
                function eM(t, e, i) {
                    this.p = tI.getProp(e, t.v, 0, 0, i);
                }
                function eC() {
                    this.p = {};
                }
                function eT(t, e) {
                    let i;
                    let s;
                    const a = t.ef || [];
                    this.effectElements = [];
                    const a_length = a.length;
                    for(i = 0; i < a_length; i += 1){
                        s = new eE(a[i], e);
                        this.effectElements.push(s);
                    }
                }
                function eE(t, e) {
                    this.init(t, e);
                }
                function eF() {}
                function eI() {}
                function eL(t, e, i) {
                    this.initFrame();
                    this.initRenderable();
                    this.assetData = e.getAssetData(t.refId);
                    this.footageData = e.imageLoader.getAsset(this.assetData);
                    this.initBaseData(t, e, i);
                }
                function eV(t, e, i) {
                    this.initFrame();
                    this.initRenderable();
                    this.assetData = e.getAssetData(t.refId);
                    this.initBaseData(t, e, i);
                    this._isPlaying = false;
                    this._canPlay = false;
                    const s = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(s);
                    this._currentTime = 0;
                    this.globalData.audioController.addAudio(this);
                    this._volumeMultiplier = 1;
                    this._volume = 1;
                    this._previousVolume = null;
                    this.tm = t.tm ? tI.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: true
                    };
                    this.lv = tI.getProp(this, t.au && t.au.lv ? t.au.lv : {
                        k: [
                            100
                        ]
                    }, 1, 0.01, this);
                }
                class eR {
                    checkLayers(t) {
                        let e;
                        let i;
                        const length = this.layers.length;
                        this.completeLayers = true;
                        for(e = length - 1; e >= 0; e -= 1){
                            if (!this.elements[e] && (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st) {
                                this.buildItem(e);
                            }
                            this.completeLayers = !!this.elements[e] && this.completeLayers;
                        }
                        this.checkPendingElements();
                    }
                    createItem(t) {
                        switch(t.ty){
                            case 2:
                                return this.createImage(t);
                            case 0:
                                return this.createComp(t);
                            case 1:
                                return this.createSolid(t);
                            case 3:
                            default:
                                return this.createNull(t);
                            case 4:
                                return this.createShape(t);
                            case 5:
                                return this.createText(t);
                            case 6:
                                return this.createAudio(t);
                            case 13:
                                return this.createCamera(t);
                            case 15:
                                return this.createFootage(t);
                        }
                    }
                    createCamera() {
                        throw Error("You're using a 3d camera. Try the html renderer.");
                    }
                    createAudio(t) {
                        return new eV(t, this.globalData, this);
                    }
                    createFootage(t) {
                        return new eL(t, this.globalData, this);
                    }
                    buildAllItems() {
                        let t;
                        const length = this.layers.length;
                        for(t = 0; t < length; t += 1){
                            this.buildItem(t);
                        }
                        this.checkPendingElements();
                    }
                    includeLayers(t) {
                        this.completeLayers = false;
                        let e;
                        let i;
                        const t_length = t.length;
                        const length = this.layers.length;
                        for(e = 0; e < t_length; e += 1){
                            for(i = 0; i < length;){
                                if (this.layers[i].id === t[e].id) {
                                    this.layers[i] = t[e];
                                    break;
                                }
                                i += 1;
                            }
                        }
                    }
                    setProjectInterface(t) {
                        this.globalData.projectInterface = t;
                    }
                    initItems() {
                        if (!this.globalData.progressiveLoad) {
                            this.buildAllItems();
                        }
                    }
                    buildElementParenting(t, e, i) {
                        const elements = this.elements;
                        const layers = this.layers;
                        for(let r = 0, n = layers.length; r < n;){
                            layers[r].ind == e && (elements[r] && elements[r] !== true ? (i.push(elements[r]), elements[r].setAsParent(), layers[r].parent !== undefined ? this.buildElementParenting(t, layers[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t)));
                            r += 1;
                        }
                    }
                    addPendingElement(t) {
                        this.pendingElements.push(t);
                    }
                    searchExtraCompositions(t) {
                        let e;
                        const t_length = t.length;
                        for(e = 0; e < t_length; e += 1){
                            if (t[e].xt) {
                                const s = this.createComp(t[e]);
                                s.initExpressions();
                                this.globalData.projectInterface.registerComposition(s);
                            }
                        }
                    }
                    getElementById(t) {
                        let e;
                        const length = this.elements.length;
                        for(e = 0; e < length; e += 1){
                            if (this.elements[e].data.ind === t) {
                                return this.elements[e];
                            }
                        }
                        return null;
                    }
                    getElementByPath(t) {
                        const e = t.shift();
                        if (typeof e === "number") {
                            i = this.elements[e];
                        } else {
                            var i;
                            let s;
                            const a = this.elements.length;
                            for(s = 0; s < a; s += 1){
                                if (this.elements[s].data.nm === e) {
                                    i = this.elements[s];
                                    break;
                                }
                            }
                        }
                        if (t.length === 0) {
                            return i;
                        }
                        return i.getElementByPath(t);
                    }
                    setupGlobalData(t, e) {
                        this.globalData.fontManager = new ev;
                        this.globalData.slotManager = new ex(t);
                        this.globalData.fontManager.addChars(t.chars);
                        this.globalData.fontManager.addFonts(t.fonts, e);
                        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
                        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
                        this.globalData.imageLoader = this.animationItem.imagePreloader;
                        this.globalData.audioController = this.animationItem.audioController;
                        this.globalData.frameId = 0;
                        this.globalData.frameRate = t.fr;
                        this.globalData.nm = t.nm;
                        this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        };
                    }
                }
                u([
                    tL
                ], eE);
                eE.prototype.getValue = eE.prototype.iterateDynamicProperties;
                eE.prototype.init = function(t, e) {
                    this.data = t;
                    this.effectElements = [];
                    this.initDynamicPropertyContainer(e);
                    let i;
                    let s;
                    const length = this.data.ef.length;
                    const r = this.data.ef;
                    for(i = 0; i < length; i += 1){
                        s = null;
                        switch(r[i].ty){
                            case 0:
                                s = new e_(r[i], e, this);
                                break;
                            case 1:
                                s = new eA(r[i], e, this);
                                break;
                            case 2:
                                s = new eP(r[i], e, this);
                                break;
                            case 3:
                                s = new eS(r[i], e, this);
                                break;
                            case 4:
                            case 7:
                                s = new eM(r[i], e, this);
                                break;
                            case 10:
                                s = new eD(r[i], e, this);
                                break;
                            case 11:
                                s = new ew(r[i], e, this);
                                break;
                            case 5:
                                s = new eT(r[i], e, this);
                                break;
                            default:
                                s = new eC(r[i], e, this);
                        }
                        if (s) {
                            this.effectElements.push(s);
                        }
                    }
                };
                eF.prototype = {
                    checkMasks () {
                        if (!this.data.hasMask) {
                            return false;
                        }
                        for(let t = 0, e = this.data.masksProperties.length; t < e;){
                            if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== false) {
                                return true;
                            }
                            t += 1;
                        }
                        return false;
                    },
                    initExpressions () {
                        const t = te();
                        if (t) {
                            const e = t("layer");
                            const i = t("effects");
                            const s = t("shape");
                            const a = t("text");
                            const r = t("comp");
                            this.layerInterface = e(this);
                            if (this.data.hasMask && this.maskManager) {
                                this.layerInterface.registerMaskInterface(this.maskManager);
                            }
                            const n = i.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(n);
                            if (this.data.ty === 0 || this.data.xt) {
                                this.compInterface = r(this);
                            } else if (this.data.ty === 4) {
                                this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface);
                                this.layerInterface.content = this.layerInterface.shapeInterface;
                            } else if (this.data.ty === 5) {
                                this.layerInterface.textInterface = a(this);
                                this.layerInterface.text = this.layerInterface.textInterface;
                            }
                        }
                    },
                    setBlendMode () {
                        const t = eb(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
                    },
                    initBaseData (t, e, i) {
                        this.globalData = e;
                        this.comp = i;
                        this.data = t;
                        this.layerId = G();
                        if (!this.data.sr) {
                            this.data.sr = 1;
                        }
                        this.effectsManager = new eT(this.data, this, this.dynamicProperties);
                    },
                    getType () {
                        return this.type;
                    },
                    sourceRectAtTime () {}
                };
                eI.prototype = {
                    initFrame () {
                        this._isFirstFrame = false;
                        this.dynamicProperties = [];
                        this._mdf = false;
                    },
                    prepareProperties (t, e) {
                        let i;
                        const length = this.dynamicProperties.length;
                        for(i = 0; i < length; i += 1){
                            if (e || this._isParent && this.dynamicProperties[i].propType === "transform") {
                                this.dynamicProperties[i].getValue();
                                if (this.dynamicProperties[i]._mdf) {
                                    this.globalData._mdf = true;
                                    this._mdf = true;
                                }
                            }
                        }
                    },
                    addDynamicProperty (t) {
                        if (-1 === this.dynamicProperties.indexOf(t)) {
                            this.dynamicProperties.push(t);
                        }
                    }
                };
                eL.prototype.prepareFrame = ()=>{};
                u([
                    ek,
                    eF,
                    eI
                ], eL);
                eL.prototype.getBaseElement = ()=>null;
                eL.prototype.renderFrame = ()=>{};
                eL.prototype.destroy = ()=>{};
                eL.prototype.initExpressions = function() {
                    const t = te();
                    if (t) {
                        const e = t("footage");
                        this.layerInterface = e(this);
                    }
                };
                eL.prototype.getFootageData = function() {
                    return this.footageData;
                };
                eV.prototype.prepareFrame = function(t) {
                    this.prepareRenderableFrame(t, true);
                    this.prepareProperties(t, true);
                    if (this.tm._placeholder) {
                        this._currentTime = t / this.data.sr;
                    } else {
                        const e = this.tm.v;
                        this._currentTime = e;
                    }
                    this._volume = this.lv.v[0];
                    const i = this._volume * this._volumeMultiplier;
                    if (this._previousVolume !== i) {
                        this._previousVolume = i;
                        this.audio.volume(i);
                    }
                };
                u([
                    ek,
                    eF,
                    eI
                ], eV);
                eV.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
                };
                eV.prototype.show = ()=>{};
                eV.prototype.hide = function() {
                    this.audio.pause();
                    this._isPlaying = false;
                };
                eV.prototype.pause = function() {
                    this.audio.pause();
                    this._isPlaying = false;
                    this._canPlay = false;
                };
                eV.prototype.resume = function() {
                    this._canPlay = true;
                };
                eV.prototype.setRate = function(t) {
                    this.audio.rate(t);
                };
                eV.prototype.volume = function(t) {
                    this._volumeMultiplier = t;
                    this._previousVolume = t * this._volume;
                    this.audio.volume(this._previousVolume);
                };
                eV.prototype.getBaseElement = ()=>null;
                eV.prototype.destroy = ()=>{};
                eV.prototype.sourceRectAtTime = ()=>{};
                eV.prototype.initExpressions = ()=>{};
                function eB() {}
                class ez {
                    constructor(t, e, i){
                        this.data = t;
                        this.element = e;
                        this.globalData = i;
                        this.storedData = [];
                        this.masksProperties = this.data.masksProperties || [];
                        this.maskElement = null;
                        const s = this.globalData.defs;
                        let a = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = v(a);
                        this.solidPath = "";
                        const r = this.masksProperties;
                        let n = 0;
                        const o = [];
                        const h = G();
                        let l = "clipPath";
                        let p = "clip-path";
                        for(f = 0; f < a; f += 1){
                            if (r[f].mode !== "a" && r[f].mode !== "n" || r[f].inv || r[f].o.k !== 100 || r[f].o.x) {
                                l = "mask";
                                p = "mask";
                            }
                            if ((r[f].mode === "s" || r[f].mode === "i") && n === 0) {
                                (invRect = tr("rect")).setAttribute("fill", "#ffffff");
                                invRect.setAttribute("width", this.element.comp.data.w || 0);
                                invRect.setAttribute("height", this.element.comp.data.h || 0);
                                o.push(invRect);
                            } else {
                                invRect = null;
                            }
                            m = tr("path");
                            if (r[f].mode === "n") {
                                this.viewData[f] = {
                                    op: tI.getProp(this.element, r[f].o, 0, 0.01, this.element),
                                    prop: tO.getShapeProp(this.element, r[f], 3),
                                    elem: m,
                                    lastPath: ""
                                };
                                s.appendChild(m);
                            } else {
                                n += 1;
                                m.setAttribute("fill", r[f].mode === "s" ? "#000000" : "#ffffff");
                                m.setAttribute("clip-rule", "nonzero");
                                if (r[f].x.k !== 0) {
                                    l = "mask";
                                    p = "mask";
                                    x = tI.getProp(this.element, r[f].x, 0, null, this.element);
                                    filterId = G();
                                    (g = tr("filter")).setAttribute("id", filterId);
                                    (expan = tr("feMorphology")).setAttribute("operator", "erode");
                                    expan.setAttribute("in", "SourceGraphic");
                                    expan.setAttribute("radius", "0");
                                    g.appendChild(expan);
                                    s.appendChild(g);
                                    m.setAttribute("stroke", r[f].mode === "s" ? "#000000" : "#ffffff");
                                } else {
                                    expan = null;
                                    x = null;
                                }
                                this.storedData[f] = {
                                    elem: m,
                                    x,
                                    expan,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId,
                                    lastRadius: 0
                                };
                                if (r[f].mode === "i") {
                                    var f;
                                    var m;
                                    let d;
                                    var invRect;
                                    var g;
                                    var expan;
                                    var x;
                                    var filterId;
                                    const b = o.length;
                                    const _ = tr("g");
                                    for(d = 0; d < b; d += 1){
                                        _.appendChild(o[d]);
                                    }
                                    const A = tr("mask");
                                    A.setAttribute("mask-type", "alpha");
                                    A.setAttribute("id", h + "_" + n);
                                    A.appendChild(m);
                                    s.appendChild(A);
                                    _.setAttribute("mask", "url(" + c() + "#" + h + "_" + n + ")");
                                    o.length = 0;
                                    o.push(_);
                                } else {
                                    o.push(m);
                                }
                                if (r[f].inv && !this.solidPath) {
                                    this.solidPath = this.createLayerSolidPath();
                                }
                                this.viewData[f] = {
                                    elem: m,
                                    lastPath: "",
                                    op: tI.getProp(this.element, r[f].o, 0, 0.01, this.element),
                                    prop: tO.getShapeProp(this.element, r[f], 3),
                                    invRect
                                };
                                if (!this.viewData[f].prop.k) {
                                    this.drawPath(r[f], this.viewData[f].prop.v, this.viewData[f]);
                                }
                            }
                        }
                        this.maskElement = tr(l);
                        a = o.length;
                        for(f = 0; f < a; f += 1){
                            this.maskElement.appendChild(o[f]);
                        }
                        if (n > 0) {
                            this.maskElement.setAttribute("id", h);
                            this.element.maskedElement.setAttribute(p, "url(" + c() + "#" + h + ")");
                            s.appendChild(this.maskElement);
                        }
                        if (this.viewData.length) {
                            this.element.addRenderableComponent(this);
                        }
                    }
                    getMaskProperty(t) {
                        return this.viewData[t].prop;
                    }
                    renderFrame(t) {
                        let e;
                        const mat = this.element.finalTransform.mat;
                        const length = this.masksProperties.length;
                        for(e = 0; e < length; e += 1){
                            if (this.viewData[e].prop._mdf || t) {
                                this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]);
                            }
                            if (this.viewData[e].op._mdf || t) {
                                this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v);
                            }
                            if (this.masksProperties[e].mode !== "n" && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", mat.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                const a = this.storedData[e].expan;
                                if (this.storedData[e].x.v < 0) {
                                    if (this.storedData[e].lastOperator !== "erode") {
                                        this.storedData[e].lastOperator = "erode";
                                        this.storedData[e].elem.setAttribute("filter", "url(" + c() + "#" + this.storedData[e].filterId + ")");
                                    }
                                    a.setAttribute("radius", -this.storedData[e].x.v);
                                } else {
                                    if (this.storedData[e].lastOperator !== "dilate") {
                                        this.storedData[e].lastOperator = "dilate";
                                        this.storedData[e].elem.setAttribute("filter", null);
                                    }
                                    this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v);
                                }
                            }
                        }
                    }
                    getMaskelement() {
                        return this.maskElement;
                    }
                    createLayerSolidPath() {
                        const t = "M0,0 ";
                        return t + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h) + " ");
                    }
                    drawPath(t, e, i) {
                        let s;
                        let a;
                        let r = " M" + e.v[0][0] + "," + e.v[0][1];
                        a = e._length;
                        for(s = 1; s < a; s += 1){
                            r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                        }
                        if (e.c && a > 1) {
                            r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1];
                        }
                        if (i.lastPath !== r) {
                            let n = "";
                            if (i.elem) {
                                if (e.c) {
                                    n = t.inv ? this.solidPath + r : r;
                                }
                                i.elem.setAttribute("d", n);
                            }
                            i.lastPath = r;
                        }
                    }
                    destroy() {
                        this.element = null;
                        this.globalData = null;
                        this.maskElement = null;
                        this.data = null;
                        this.masksProperties = null;
                    }
                }
                eB.prototype = {
                    initTransform () {
                        const t = new tj;
                        this.finalTransform = {
                            mProp: this.data.ks ? t0.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: false,
                            _localMatMdf: false,
                            _opMdf: false,
                            mat: t,
                            localMat: t,
                            localOpacity: 1
                        };
                        if (this.data.ao) {
                            this.finalTransform.mProp.autoOriented = true;
                        }
                        this.data.ty;
                    },
                    renderTransform () {
                        this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
                        this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
                        if (this.hierarchy) {
                            let t;
                            const e = this.finalTransform.mat;
                            let i = 0;
                            const s = this.hierarchy.length;
                            if (!this.finalTransform._matMdf) {
                                while(i < s){
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = true;
                                        break;
                                    }
                                    i += 1;
                                }
                            }
                            if (this.finalTransform._matMdf) {
                                t = this.finalTransform.mProp.v.props;
                                e.cloneFromProps(t);
                                for(i = 0; i < s; i += 1){
                                    e.multiply(this.hierarchy[i].finalTransform.mProp.v);
                                }
                            }
                        }
                        if (!this.localTransforms || this.finalTransform._matMdf) {
                            this.finalTransform._localMatMdf = this.finalTransform._matMdf;
                        }
                        if (this.finalTransform._opMdf) {
                            this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                        }
                    },
                    renderLocalTransform () {
                        if (this.localTransforms) {
                            let t = 0;
                            const e = this.localTransforms.length;
                            this.finalTransform._localMatMdf = this.finalTransform._matMdf;
                            if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
                                while(t < e){
                                    if (this.localTransforms[t]._mdf) {
                                        this.finalTransform._localMatMdf = true;
                                    }
                                    if (this.localTransforms[t]._opMdf && !this.finalTransform._opMdf) {
                                        this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                                        this.finalTransform._opMdf = true;
                                    }
                                    t += 1;
                                }
                            }
                            if (this.finalTransform._localMatMdf) {
                                const i = this.finalTransform.localMat;
                                this.localTransforms[0].matrix.clone(i);
                                for(t = 1; t < e; t += 1){
                                    const s = this.localTransforms[t].matrix;
                                    i.multiply(s);
                                }
                                i.multiply(this.finalTransform.mat);
                            }
                            if (this.finalTransform._opMdf) {
                                let a = this.finalTransform.localOpacity;
                                for(t = 0; t < e; t += 1){
                                    a *= 0.01 * this.localTransforms[t].opacity;
                                }
                                this.finalTransform.localOpacity = a;
                            }
                        }
                    },
                    searchEffectTransforms () {
                        if (this.renderableEffectsManager) {
                            const t = this.renderableEffectsManager.getEffects("transformEFfect");
                            if (t.length) {
                                this.localTransforms = [];
                                this.finalTransform.localMat = new tj;
                                let e = 0;
                                const i = t.length;
                                for(e = 0; e < i; e += 1){
                                    this.localTransforms.push(t[e]);
                                }
                            }
                        }
                    },
                    globalToLocal (t) {
                        let e;
                        let i;
                        const s = [];
                        s.push(this.finalTransform);
                        for(let a = true, r = this.comp; a;){
                            if (r.finalTransform) {
                                if (r.data.hasMask) {
                                    s.splice(0, 0, r.finalTransform);
                                }
                                r = r.comp;
                            } else {
                                a = false;
                            }
                        }
                        const s_length = s.length;
                        for(e = 0; e < s_length; e += 1){
                            i = s[e].mat.applyToPointArray(0, 0, 0);
                            t = [
                                t[0] - i[0],
                                t[1] - i[1],
                                0
                            ];
                        }
                        return t;
                    },
                    mHelper: new tj
                };
                const eN = {
                    createFilter (t, e) {
                        const i = tr("filter");
                        i.setAttribute("id", t);
                        if (e !== true) {
                            i.setAttribute("filterUnits", "objectBoundingBox");
                            i.setAttribute("x", "0%");
                            i.setAttribute("y", "0%");
                            i.setAttribute("width", "100%");
                            i.setAttribute("height", "100%");
                        }
                        return i;
                    },
                    createAlphaToLuminanceFilter () {
                        const t = tr("feColorMatrix");
                        t.setAttribute("type", "matrix");
                        t.setAttribute("color-interpolation-filters", "sRGB");
                        t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
                        return t;
                    }
                };
                l = {
                    maskType: true,
                    svgLumaHidden: true,
                    offscreenCanvas: typeof OffscreenCanvas !== "undefined"
                };
                if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
                    l.maskType = false;
                }
                if (/firefox/i.test(navigator.userAgent)) {
                    l.svgLumaHidden = false;
                }
                const eO = l;
                const ej = {};
                const eG = "filter_result_";
                class eq {
                    constructor(t){
                        let e;
                        let i;
                        let s = "SourceGraphic";
                        const a = t.data.ef ? t.data.ef.length : 0;
                        const r = G();
                        const n = eN.createFilter(r, true);
                        let o = 0;
                        this.filters = [];
                        for(e = 0; e < a; e += 1){
                            i = null;
                            const h = t.data.ef[e].ty;
                            if (ej[h]) {
                                i = new ej[h].effect(n, t.effectsManager.effectElements[e], t, eG + o, s);
                                s = eG + o;
                                if (ej[h].countsAsEffect) {
                                    o += 1;
                                }
                            }
                            if (i) {
                                this.filters.push(i);
                            }
                        }
                        if (o) {
                            t.globalData.defs.appendChild(n);
                            t.layerElement.setAttribute("filter", "url(" + c() + "#" + r + ")");
                        }
                        if (this.filters.length) {
                            t.addRenderableComponent(this);
                        }
                    }
                    renderFrame(t) {
                        let e;
                        const length = this.filters.length;
                        for(e = 0; e < length; e += 1){
                            this.filters[e].renderFrame(t);
                        }
                    }
                    getEffects(t) {
                        let e;
                        const length = this.filters.length;
                        const s = [];
                        for(e = 0; e < length; e += 1){
                            if (this.filters[e].type === t) {
                                s.push(this.filters[e]);
                            }
                        }
                        return s;
                    }
                }
                function eW() {}
                function eH() {}
                function eX() {}
                function eY(t, e, i) {
                    this.assetData = e.getAssetData(t.refId);
                    if (this.assetData && this.assetData.sid) {
                        this.assetData = e.slotManager.getProp(this.assetData);
                    }
                    this.initElement(t, e, i);
                    this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    };
                }
                function eU(t, e) {
                    this.elem = t;
                    this.pos = e;
                }
                function eK() {}
                eW.prototype = {
                    initRendererElement () {
                        this.layerElement = tr("g");
                    },
                    createContainerElements () {
                        this.matteElement = tr("g");
                        this.transformedElement = this.layerElement;
                        this.maskedElement = this.layerElement;
                        this._sizeChanged = false;
                        let t = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            const e = tr("g");
                            e.setAttribute("id", this.layerId);
                            e.appendChild(this.layerElement);
                            t = e;
                            this.globalData.defs.appendChild(e);
                        } else {
                            if (this.data.tt) {
                                this.matteElement.appendChild(this.layerElement);
                                t = this.matteElement;
                                this.baseElement = this.matteElement;
                            } else {
                                this.baseElement = this.layerElement;
                            }
                        }
                        if (this.data.ln) {
                            this.layerElement.setAttribute("id", this.data.ln);
                        }
                        if (this.data.cl) {
                            this.layerElement.setAttribute("class", this.data.cl);
                        }
                        if (this.data.ty === 0 && !this.data.hd) {
                            const i = tr("clipPath");
                            const s = tr("path");
                            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            const a = G();
                            i.setAttribute("id", a);
                            i.appendChild(s);
                            this.globalData.defs.appendChild(i);
                            if (this.checkMasks()) {
                                const r = tr("g");
                                r.setAttribute("clip-path", "url(" + c() + "#" + a + ")");
                                r.appendChild(this.layerElement);
                                this.transformedElement = r;
                                if (t) {
                                    t.appendChild(this.transformedElement);
                                } else {
                                    this.baseElement = this.transformedElement;
                                }
                            } else {
                                this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + a + ")");
                            }
                        }
                        if (this.data.bm !== 0) {
                            this.setBlendMode();
                        }
                    },
                    renderElement () {
                        if (this.finalTransform._localMatMdf) {
                            this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS());
                        }
                        if (this.finalTransform._opMdf) {
                            this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
                        }
                    },
                    destroyBaseElement () {
                        this.layerElement = null;
                        this.matteElement = null;
                        this.maskManager.destroy();
                    },
                    getBaseElement () {
                        if (this.data.hd) {
                            return null;
                        }
                        return this.baseElement;
                    },
                    createRenderableComponents () {
                        this.maskManager = new ez(this.data, this, this.globalData);
                        this.renderableEffectsManager = new eq(this);
                        this.searchEffectTransforms();
                    },
                    getMatte (t) {
                        if (!this.matteMasks) {
                            this.matteMasks = {};
                        }
                        if (!this.matteMasks[t]) {
                            let e;
                            let i;
                            let s;
                            let a;
                            const r = this.layerId + "_" + t;
                            if (t === 1 || t === 3) {
                                const n = tr("mask");
                                n.setAttribute("id", r);
                                n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha");
                                (s = tr("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                                n.appendChild(s);
                                this.globalData.defs.appendChild(n);
                                if (!(eO.maskType || t !== 1)) {
                                    n.setAttribute("mask-type", "luminance");
                                    e = G();
                                    i = eN.createFilter(e);
                                    this.globalData.defs.appendChild(i);
                                    i.appendChild(eN.createAlphaToLuminanceFilter());
                                    (a = tr("g")).appendChild(s);
                                    n.appendChild(a);
                                    a.setAttribute("filter", "url(" + c() + "#" + e + ")");
                                }
                            } else if (t === 2) {
                                const o = tr("mask");
                                o.setAttribute("id", r);
                                o.setAttribute("mask-type", "alpha");
                                const h = tr("g");
                                o.appendChild(h);
                                e = G();
                                i = eN.createFilter(e);
                                const l = tr("feComponentTransfer");
                                l.setAttribute("in", "SourceGraphic");
                                i.appendChild(l);
                                const p = tr("feFuncA");
                                p.setAttribute("type", "table");
                                p.setAttribute("tableValues", "1.0 0.0");
                                l.appendChild(p);
                                this.globalData.defs.appendChild(i);
                                const f = tr("rect");
                                f.setAttribute("width", this.comp.data.w);
                                f.setAttribute("height", this.comp.data.h);
                                f.setAttribute("x", "0");
                                f.setAttribute("y", "0");
                                f.setAttribute("fill", "#ffffff");
                                f.setAttribute("opacity", "0");
                                h.setAttribute("filter", "url(" + c() + "#" + e + ")");
                                h.appendChild(f);
                                (s = tr("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                                h.appendChild(s);
                                if (!eO.maskType) {
                                    o.setAttribute("mask-type", "luminance");
                                    i.appendChild(eN.createAlphaToLuminanceFilter());
                                    a = tr("g");
                                    h.appendChild(f);
                                    a.appendChild(this.layerElement);
                                    h.appendChild(a);
                                }
                                this.globalData.defs.appendChild(o);
                            }
                            this.matteMasks[t] = r;
                        }
                        return this.matteMasks[t];
                    },
                    setMatte (t) {
                        if (this.matteElement) {
                            this.matteElement.setAttribute("mask", "url(" + c() + "#" + t + ")");
                        }
                    }
                };
                eH.prototype = {
                    initHierarchy () {
                        this.hierarchy = [];
                        this._isParent = false;
                        this.checkParenting();
                    },
                    setHierarchy (t) {
                        this.hierarchy = t;
                    },
                    setAsParent () {
                        this._isParent = true;
                    },
                    checkParenting () {
                        if (this.data.parent !== undefined) {
                            this.comp.buildElementParenting(this, this.data.parent, []);
                        }
                    }
                };
                u([
                    ek,
                    ((t)=>{
                        function e() {}
                        e.prototype = t;
                        return e;
                    })({
                        initElement (t, e, i) {
                            this.initFrame();
                            this.initBaseData(t, e, i);
                            this.initTransform(t, e, i);
                            this.initHierarchy();
                            this.initRenderable();
                            this.initRendererElement();
                            this.createContainerElements();
                            this.createRenderableComponents();
                            this.createContent();
                            this.hide();
                        },
                        hide () {
                            if (!(this.hidden || this.isInRange && !this.isTransparent)) {
                                (this.baseElement || this.layerElement).style.display = "none";
                                this.hidden = true;
                            }
                        },
                        show () {
                            if (this.isInRange && !this.isTransparent) {
                                if (!this.data.hd) {
                                    (this.baseElement || this.layerElement).style.display = "block";
                                }
                                this.hidden = false;
                                this._isFirstFrame = true;
                            }
                        },
                        renderFrame () {
                            if (!(this.data.hd || this.hidden)) {
                                this.renderTransform();
                                this.renderRenderable();
                                this.renderLocalTransform();
                                this.renderElement();
                                this.renderInnerContent();
                                if (this._isFirstFrame) {
                                    this._isFirstFrame = false;
                                }
                            }
                        },
                        renderInnerContent () {},
                        prepareFrame (t) {
                            this._mdf = false;
                            this.prepareRenderableFrame(t);
                            this.prepareProperties(t, this.isInRange);
                            this.checkTransparency();
                        },
                        destroy () {
                            this.innerElem = null;
                            this.destroyBaseElement();
                        }
                    })
                ], eX);
                u([
                    eF,
                    eB,
                    eW,
                    eH,
                    eI,
                    eX
                ], eY);
                eY.prototype.createContent = function() {
                    const t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = tr("image");
                    this.innerElem.setAttribute("width", this.assetData.w + "px");
                    this.innerElem.setAttribute("height", this.assetData.h + "px");
                    this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
                    this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t);
                    this.layerElement.appendChild(this.innerElem);
                };
                eY.prototype.sourceRectAtTime = function() {
                    return this.sourceRect;
                };
                eK.prototype = {
                    addShapeToModifiers (t) {
                        let e;
                        const length = this.shapeModifiers.length;
                        for(e = 0; e < length; e += 1){
                            this.shapeModifiers[e].addShape(t);
                        }
                    },
                    isShapeInAnimatedModifiers (t) {
                        for(const e = this.shapeModifiers.length; e > 0;){
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) {
                                return true;
                            }
                        }
                        return false;
                    },
                    renderModifiers () {
                        if (this.shapeModifiers.length) {
                            let t;
                            let e = this.shapes.length;
                            for(t = 0; t < e; t += 1){
                                this.shapes[t].sh.reset();
                            }
                            for(t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    searchProcessedElement (t) {
                        const processedElements = this.processedElements;
                        for(let i = 0, s = processedElements.length; i < s;){
                            if (processedElements[i].elem === t) {
                                return processedElements[i].pos;
                            }
                            i += 1;
                        }
                        return 0;
                    },
                    addProcessedElement (t, e) {
                        const processedElements = this.processedElements;
                        for(let s = processedElements.length; s;){
                            if (processedElements[s -= 1].elem === t) {
                                processedElements[s].pos = e;
                                return;
                            }
                        }
                        processedElements.push(new eU(t, e));
                    },
                    prepareFrame (t) {
                        this.prepareRenderableFrame(t);
                        this.prepareProperties(t, this.isInRange);
                    }
                };
                const eJ = {
                    1: "butt",
                    2: "round",
                    3: "square"
                };
                const eZ = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };
                class eQ {
                    constructor(t, e, i){
                        this.caches = [];
                        this.styles = [];
                        this.transformers = t;
                        this.lStr = "";
                        this.sh = i;
                        this.lvl = e;
                        this._isAnimated = !!i.k;
                        for(let s = 0, a = t.length; s < a;){
                            if (t[s].mProps.dynamicProperties.length) {
                                this._isAnimated = true;
                                break;
                            }
                            s += 1;
                        }
                    }
                    setAsAnimated() {
                        this._isAnimated = true;
                    }
                }
                class e$ {
                    constructor(t, e){
                        this.data = t;
                        this.type = t.ty;
                        this.d = "";
                        this.lvl = e;
                        this._mdf = false;
                        this.closed = t.hd === true;
                        this.pElem = tr("path");
                        this.msElem = null;
                    }
                    reset() {
                        this.d = "";
                        this._mdf = false;
                    }
                }
                class e0 {
                    constructor(t, e, i, s){
                        this.elem = t;
                        this.frameId = -1;
                        this.dataProps = v(e.length);
                        this.renderer = i;
                        this.k = false;
                        this.dashStr = "";
                        this.dashArray = y("float32", e.length ? e.length - 1 : 0);
                        this.dashoffset = y("float32", 1);
                        this.initDynamicPropertyContainer(s);
                        let a;
                        let p_1;
                        const n = e.length || 0;
                        for(a = 0; a < n; a += 1){
                            p_1 = tI.getProp(t, e[a].v, 0, 0, this);
                            this.k = p_1.k || this.k;
                            this.dataProps[a] = {
                                n: e[a].n,
                                p: p_1
                            };
                        }
                        if (!this.k) {
                            this.getValue(true);
                        }
                        this._isAnimated = this.k;
                    }
                    getValue(t) {
                        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            let e = 0;
                            const i = this.dataProps.length;
                            if (this.renderer === "svg") {
                                this.dashStr = "";
                            }
                            for(e = 0; e < i; e += 1){
                                if (this.dataProps[e].n !== "o") {
                                    if (this.renderer === "svg") {
                                        this.dashStr += " " + this.dataProps[e].p.v;
                                    } else {
                                        this.dashArray[e] = this.dataProps[e].p.v;
                                    }
                                } else {
                                    this.dashoffset[0] = this.dataProps[e].p.v;
                                }
                            }
                        }
                    }
                }
                function e1(t, e, i) {
                    this.initDynamicPropertyContainer(t);
                    this.getValue = this.iterateDynamicProperties;
                    this.o = tI.getProp(t, e.o, 0, 0.01, this);
                    this.w = tI.getProp(t, e.w, 0, null, this);
                    this.d = new e0(t, e.d || {}, "svg", this);
                    this.c = tI.getProp(t, e.c, 1, 255, this);
                    this.style = i;
                    this._isAnimated = !!this._isAnimated;
                }
                function e2(t, e, i) {
                    this.initDynamicPropertyContainer(t);
                    this.getValue = this.iterateDynamicProperties;
                    this.o = tI.getProp(t, e.o, 0, 0.01, this);
                    this.c = tI.getProp(t, e.c, 1, 255, this);
                    this.style = i;
                }
                function e3(t, e, i) {
                    this.initDynamicPropertyContainer(t);
                    this.getValue = this.iterateDynamicProperties;
                    this.style = i;
                }
                class e6 {
                    constructor(t, e, i){
                        this.data = e;
                        this.c = y("uint8c", 4 * e.p);
                        const s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = y("float32", s);
                        this._cmdf = false;
                        this._omdf = false;
                        this._collapsable = this.checkCollapsable();
                        this._hasOpacity = s;
                        this.initDynamicPropertyContainer(i);
                        this.prop = tI.getProp(t, e.k, 1, null, this);
                        this.k = this.prop.k;
                        this.getValue(true);
                    }
                    comparePoints(t, e) {
                        for(let i = 0, s = this.o.length / 2; i < s;){
                            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) {
                                return false;
                            }
                            i += 1;
                        }
                        return true;
                    }
                    checkCollapsable() {
                        if (this.o.length / 2 != this.c.length / 4) {
                            return false;
                        }
                        if (this.data.k.k[0].s) {
                            for(let t = 0, e = this.data.k.k.length; t < e;){
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) {
                                    return false;
                                }
                                t += 1;
                            }
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
                            return false;
                        }
                        return true;
                    }
                    getValue(t) {
                        this.prop.getValue();
                        this._mdf = false;
                        this._cmdf = false;
                        this._omdf = false;
                        if (this.prop._mdf || t) {
                            let e;
                            let i;
                            let s;
                            let a = 4 * this.data.p;
                            for(e = 0; e < a; e += 1){
                                i = e % 4 == 0 ? 100 : 255;
                                s = Math.round(this.prop.v[e] * i);
                                if (this.c[e] !== s) {
                                    this.c[e] = s;
                                    this._cmdf = !t;
                                }
                            }
                            if (this.o.length) {
                                a = this.prop.v.length;
                                for(e = 4 * this.data.p; e < a; e += 1){
                                    i = e % 2 == 0 ? 100 : 1;
                                    s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e];
                                    if (this.o[e - 4 * this.data.p] !== s) {
                                        this.o[e - 4 * this.data.p] = s;
                                        this._omdf = !t;
                                    }
                                }
                            }
                            this._mdf = !t;
                        }
                    }
                }
                class e5 {
                    constructor(t, e, i){
                        this.initDynamicPropertyContainer(t);
                        this.getValue = this.iterateDynamicProperties;
                        this.initGradientData(t, e, i);
                    }
                    initGradientData(t, e, i) {
                        this.o = tI.getProp(t, e.o, 0, 0.01, this);
                        this.s = tI.getProp(t, e.s, 1, null, this);
                        this.e = tI.getProp(t, e.e, 1, null, this);
                        this.h = tI.getProp(t, e.h || {
                            k: 0
                        }, 0, 0.01, this);
                        this.a = tI.getProp(t, e.a || {
                            k: 0
                        }, 0, I, this);
                        this.g = new e6(t, e.g, this);
                        this.style = i;
                        this.stops = [];
                        this.setGradientData(i.pElem, e);
                        this.setGradientOpacity(e, i);
                        this._isAnimated = !!this._isAnimated;
                    }
                    setGradientData(t, e) {
                        let i;
                        let s;
                        let a;
                        const r = G();
                        const n = tr(e.t === 1 ? "linearGradient" : "radialGradient");
                        n.setAttribute("id", r);
                        n.setAttribute("spreadMethod", "pad");
                        n.setAttribute("gradientUnits", "userSpaceOnUse");
                        const o = [];
                        a = 4 * e.g.p;
                        for(s = 0; s < a; s += 4){
                            i = tr("stop");
                            n.appendChild(i);
                            o.push(i);
                        }
                        t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + c() + "#" + r + ")");
                        this.gf = n;
                        this.cst = o;
                    }
                    setGradientOpacity(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            let i;
                            let s;
                            let a;
                            const r = tr("mask");
                            const n = tr("path");
                            r.appendChild(n);
                            const o = G();
                            const h = G();
                            r.setAttribute("id", h);
                            const l = tr(t.t === 1 ? "linearGradient" : "radialGradient");
                            l.setAttribute("id", o);
                            l.setAttribute("spreadMethod", "pad");
                            l.setAttribute("gradientUnits", "userSpaceOnUse");
                            a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            const p = this.stops;
                            for(s = 4 * t.g.p; s < a; s += 2){
                                (i = tr("stop")).setAttribute("stop-color", "rgb(255,255,255)");
                                l.appendChild(i);
                                p.push(i);
                            }
                            n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + c() + "#" + o + ")");
                            if (t.ty === "gs") {
                                n.setAttribute("stroke-linecap", eJ[t.lc || 2]);
                                n.setAttribute("stroke-linejoin", eZ[t.lj || 2]);
                                if (t.lj === 1) {
                                    n.setAttribute("stroke-miterlimit", t.ml);
                                }
                            }
                            this.of = l;
                            this.ms = r;
                            this.ost = p;
                            this.maskId = h;
                            e.msElem = n;
                        }
                    }
                }
                function e4(t, e, i) {
                    this.initDynamicPropertyContainer(t);
                    this.getValue = this.iterateDynamicProperties;
                    this.w = tI.getProp(t, e.w, 0, null, this);
                    this.d = new e0(t, e.d || {}, "svg", this);
                    this.initGradientData(t, e, i);
                    this._isAnimated = !!this._isAnimated;
                }
                function e7() {
                    this.it = [];
                    this.prevViewData = [];
                    this.gr = tr("g");
                }
                function e9(mProps, op, container) {
                    this.transform = {
                        mProps,
                        op,
                        container
                    };
                    this.elements = [];
                    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
                }
                u([
                    tL
                ], e0);
                u([
                    tL
                ], e1);
                u([
                    tL
                ], e2);
                u([
                    tL
                ], e3);
                u([
                    tL
                ], e6);
                u([
                    tL
                ], e5);
                u([
                    e5,
                    tL
                ], e4);
                const e8 = (t, e, i, s)=>{
                    if (e === 0) {
                        return "";
                    }
                    let a;
                    const r = t.o;
                    const n = t.i;
                    const o = t.v;
                    let h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                    for(a = 1; a < e; a += 1){
                        h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(o[a][0], o[a][1]);
                    }
                    if (i && e) {
                        h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]) + "z";
                    }
                    return h;
                };
                const it = (()=>{
                    const t = new tj;
                    const e = new tj;
                    function i(t, e, i) {
                        if (i || e.transform.op._mdf) {
                            e.transform.container.setAttribute("opacity", e.transform.op.v);
                        }
                        if (i || e.transform.mProps._mdf) {
                            e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
                        }
                    }
                    function s() {}
                    function a(i, s, a) {
                        let r;
                        let n;
                        let o;
                        let h;
                        let l;
                        let p;
                        let f;
                        let m;
                        let c;
                        let d;
                        const length = s.styles.length;
                        const s_lvl = s.lvl;
                        for(p = 0; p < length; p += 1){
                            h = s.sh._mdf || a;
                            if (s.styles[p].lvl < s_lvl) {
                                m = e.reset();
                                c = s_lvl - s.styles[p].lvl;
                                for(d = s.transformers.length - 1; !h && c > 0;){
                                    h = s.transformers[d].mProps._mdf || h;
                                    c -= 1;
                                    d -= 1;
                                }
                                if (h) {
                                    c = s_lvl - s.styles[p].lvl;
                                    for(d = s.transformers.length - 1; c > 0;){
                                        m.multiply(s.transformers[d].mProps.v);
                                        c -= 1;
                                        d -= 1;
                                    }
                                }
                            } else {
                                m = t;
                            }
                            n = (f = s.sh.paths)._length;
                            if (h) {
                                r = 0;
                                for(o = ""; r < n; r += 1){
                                    if ((l = f.shapes[r]) && l._length) {
                                        o += e8(l, l._length, l.c, m);
                                    }
                                }
                                s.caches[p] = o;
                            } else {
                                o = s.caches[p];
                            }
                            s.styles[p].d += i.hd === true ? "" : o;
                            s.styles[p]._mdf = h || s.styles[p]._mdf;
                        }
                    }
                    function r(t, e, i) {
                        const e_style = e.style;
                        if (e.c._mdf || i) {
                            e_style.pElem.setAttribute("fill", "rgb(" + Math_floor(e.c.v[0]) + "," + Math_floor(e.c.v[1]) + "," + Math_floor(e.c.v[2]) + ")");
                        }
                        if (e.o._mdf || i) {
                            e_style.pElem.setAttribute("fill-opacity", e.o.v);
                        }
                    }
                    function n(t, e, i) {
                        o(t, e, i);
                        h(t, e, i);
                    }
                    function o(t, e, i) {
                        let s;
                        let a;
                        let r;
                        let n;
                        let o;
                        const h = e.gf;
                        const _hasOpacity = e.g._hasOpacity;
                        const p = e.s.v;
                        const f = e.e.v;
                        if (e.o._mdf || i) {
                            const m = t.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(m, e.o.v);
                        }
                        if (e.s._mdf || i) {
                            const c = t.t === 1 ? "x1" : "cx";
                            const d = c === "x1" ? "y1" : "cy";
                            h.setAttribute(c, p[0]);
                            h.setAttribute(d, p[1]);
                            if (_hasOpacity && !e.g._collapsable) {
                                e.of.setAttribute(c, p[0]);
                                e.of.setAttribute(d, p[1]);
                            }
                        }
                        if (e.g._cmdf || i) {
                            s = e.cst;
                            const u = e.g.c;
                            r = s.length;
                            for(a = 0; a < r; a += 1){
                                (n = s[a]).setAttribute("offset", u[4 * a] + "%");
                                n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")");
                            }
                        }
                        if (_hasOpacity && (e.g._omdf || i)) {
                            const g = e.g.o;
                            r = (s = e.g._collapsable ? e.cst : e.ost).length;
                            for(a = 0; a < r; a += 1){
                                n = s[a];
                                if (!e.g._collapsable) {
                                    n.setAttribute("offset", g[2 * a] + "%");
                                }
                                n.setAttribute("stop-opacity", g[2 * a + 1]);
                            }
                        }
                        if (t.t === 1) {
                            if (e.e._mdf || i) {
                                h.setAttribute("x2", f[0]);
                                h.setAttribute("y2", f[1]);
                                if (_hasOpacity && !e.g._collapsable) {
                                    e.of.setAttribute("x2", f[0]);
                                    e.of.setAttribute("y2", f[1]);
                                }
                            }
                        } else {
                            if (e.s._mdf || e.e._mdf || i) {
                                o = Math.sqrt((p[0] - f[0]) ** 2 + (p[1] - f[1]) ** 2);
                                h.setAttribute("r", o);
                                if (_hasOpacity && !e.g._collapsable) {
                                    e.of.setAttribute("r", o);
                                }
                            }
                            if (e.s._mdf || e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                if (!o) {
                                    o = Math.sqrt((p[0] - f[0]) ** 2 + (p[1] - f[1]) ** 2);
                                }
                                const y = Math.atan2(f[1] - p[1], f[0] - p[0]);
                                let v = e.h.v;
                                if (v >= 1) {
                                    v = 0.99;
                                } else if (v <= -1) {
                                    v = -0.99;
                                }
                                const x = o * v;
                                const k = Math.cos(y + e.a.v) * x + p[0];
                                const b = Math.sin(y + e.a.v) * x + p[1];
                                h.setAttribute("fx", k);
                                h.setAttribute("fy", b);
                                if (_hasOpacity && !e.g._collapsable) {
                                    e.of.setAttribute("fx", k);
                                    e.of.setAttribute("fy", b);
                                }
                            }
                        }
                    }
                    function h(t, e, i) {
                        const e_style = e.style;
                        const a = e.d;
                        if (a && (a._mdf || i) && a.dashStr) {
                            e_style.pElem.setAttribute("stroke-dasharray", a.dashStr);
                            e_style.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0]);
                        }
                        if (e.c && (e.c._mdf || i)) {
                            e_style.pElem.setAttribute("stroke", "rgb(" + Math_floor(e.c.v[0]) + "," + Math_floor(e.c.v[1]) + "," + Math_floor(e.c.v[2]) + ")");
                        }
                        if (e.o._mdf || i) {
                            e_style.pElem.setAttribute("stroke-opacity", e.o.v);
                        }
                        if (e.w._mdf || i) {
                            e_style.pElem.setAttribute("stroke-width", e.w.v);
                            if (e_style.msElem) {
                                e_style.msElem.setAttribute("stroke-width", e.w.v);
                            }
                        }
                    }
                    return {
                        createRenderFunction (t) {
                            switch(t.ty){
                                case "fl":
                                    return r;
                                case "gf":
                                    return o;
                                case "gs":
                                    return n;
                                case "st":
                                    return h;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return a;
                                case "tr":
                                    return i;
                                case "no":
                                    return s;
                                default:
                                    return null;
                            }
                        }
                    };
                })();
                function ie(t, e, i) {
                    this.shapes = [];
                    this.shapesData = t.shapes;
                    this.stylesList = [];
                    this.shapeModifiers = [];
                    this.itemsData = [];
                    this.processedElements = [];
                    this.animatedContents = [];
                    this.initElement(t, e, i);
                    this.prevViewData = [];
                }
                class ii {
                    constructor(t, e, i, s, a, r){
                        this.o = t;
                        this.sw = e;
                        this.sc = i;
                        this.fc = s;
                        this.m = a;
                        this.p = r;
                        this._mdf = {
                            o: true,
                            sw: !!e,
                            sc: !!i,
                            fc: !!s,
                            m: true,
                            p: true
                        };
                    }
                    update(t, e, i, s, a, r) {
                        this._mdf.o = false;
                        this._mdf.sw = false;
                        this._mdf.sc = false;
                        this._mdf.fc = false;
                        this._mdf.m = false;
                        this._mdf.p = false;
                        let n = false;
                        if (this.o !== t) {
                            this.o = t;
                            this._mdf.o = true;
                            n = true;
                        }
                        if (this.sw !== e) {
                            this.sw = e;
                            this._mdf.sw = true;
                            n = true;
                        }
                        if (this.sc !== i) {
                            this.sc = i;
                            this._mdf.sc = true;
                            n = true;
                        }
                        if (this.fc !== s) {
                            this.fc = s;
                            this._mdf.fc = true;
                            n = true;
                        }
                        if (this.m !== a) {
                            this.m = a;
                            this._mdf.m = true;
                            n = true;
                        }
                        if (r.length && (this.p[0] !== r[0] || this.p[1] !== r[1] || this.p[4] !== r[4] || this.p[5] !== r[5] || this.p[12] !== r[12] || this.p[13] !== r[13])) {
                            this.p = r;
                            this._mdf.p = true;
                            n = true;
                        }
                        return n;
                    }
                }
                class is {
                    constructor(t, e){
                        this._frameId = -999999;
                        this.pv = "";
                        this.v = "";
                        this.kf = false;
                        this._isFirstFrame = true;
                        this._mdf = false;
                        if (e.d && e.d.sid) {
                            e.d = t.globalData.slotManager.getProp(e.d);
                        }
                        this.data = e;
                        this.elem = t;
                        this.comp = this.elem.comp;
                        this.keysIndex = 0;
                        this.canResize = false;
                        this.minimumFontSize = 1;
                        this.effectsSequence = [];
                        this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: false,
                            strokeColorAnim: false,
                            strokeWidthAnim: false,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: false
                        };
                        this.copyData(this.currentData, this.data.d.k[0].s);
                        if (!this.searchProperty()) {
                            this.completeTextData(this.currentData);
                        }
                    }
                    copyData(t, e) {
                        for(const i in e){
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                t[i] = e[i];
                            }
                        }
                        return t;
                    }
                    setCurrentData(t) {
                        if (!t.__complete) {
                            this.completeTextData(t);
                        }
                        this.currentData = t;
                        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
                        this._mdf = true;
                    }
                    searchProperty() {
                        return this.searchKeyframes();
                    }
                    searchKeyframes() {
                        this.kf = this.data.d.k.length > 1;
                        if (this.kf) {
                            this.addEffect(this.getKeyframeValue.bind(this));
                        }
                        return this.kf;
                    }
                    addEffect(t) {
                        this.effectsSequence.push(t);
                        this.elem.addDynamicProperty(this);
                    }
                    getValue(t) {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            let e;
                            const i = this.currentData;
                            const s = this.keysIndex;
                            if (this.lock) {
                                return void this.setCurrentData(this.currentData);
                            }
                            this.lock = true;
                            this._mdf = false;
                            const a = this.effectsSequence.length;
                            let r = t || this.data.d.k[this.keysIndex].s;
                            for(e = 0; e < a; e += 1){
                                r = s !== this.keysIndex ? this.effectsSequence[e](r, r.t) : this.effectsSequence[e](this.currentData, r.t);
                            }
                            if (i !== r) {
                                this.setCurrentData(r);
                            }
                            this.v = this.currentData;
                            this.pv = this.v;
                            this.lock = false;
                            this.frameId = this.elem.globalData.frameId;
                        }
                    }
                    getKeyframeValue() {
                        for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && i !== s - 1 && !(t[i + 1].t > e);){
                            i += 1;
                        }
                        if (this.keysIndex !== i) {
                            this.keysIndex = i;
                        }
                        return this.data.d.k[this.keysIndex].s;
                    }
                    buildFinalText(t) {
                        let e;
                        let i;
                        const s = [];
                        for(let a = 0, r = t.length, n = false, o = false, h = ""; a < r;){
                            n = o;
                            o = false;
                            e = t.charCodeAt(a);
                            h = t.charAt(a);
                            if (ev.isCombinedCharacter(e)) {
                                n = true;
                            } else if (e >= 55296 && e <= 56319) {
                                if (ev.isRegionalFlag(t, a)) {
                                    h = t.substr(a, 14);
                                } else {
                                    (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (ev.isModifier(e, i) ? (h = t.substr(a, 2), n = true) : h = ev.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2));
                                }
                            } else if (e > 56319) {
                                i = t.charCodeAt(a + 1);
                                if (ev.isVariationSelector(e)) {
                                    n = true;
                                }
                            } else if (ev.isZeroWidthJoiner(e)) {
                                n = true;
                                o = true;
                            }
                            if (n) {
                                s[s.length - 1] += h;
                                n = false;
                            } else {
                                s.push(h);
                            }
                            a += h.length;
                        }
                        return s;
                    }
                    completeTextData(t) {
                        t.__complete = true;
                        const fontManager = this.elem.globalData.fontManager;
                        const data = this.data;
                        const s = [];
                        let a = 0;
                        const r = data.m.g;
                        let add = 0;
                        let o = 0;
                        let line = 0;
                        const l = [];
                        let p = 0;
                        let f = 0;
                        const m = fontManager.getFontByName(t.f);
                        let c = 0;
                        const d = ey(m);
                        t.fWeight = d.weight;
                        t.fStyle = d.style;
                        t.finalSize = t.s;
                        t.finalText = this.buildFinalText(t.t);
                        y = t.finalText.length;
                        t.finalLineHeight = t.lh;
                        let u = t.tr / 1000 * t.finalSize;
                        if (t.sz) {
                            var g;
                            var y;
                            var n_1;
                            var val;
                            var k;
                            var b;
                            var _;
                            var A;
                            let P;
                            let S;
                            for(let D = true, w = t.sz[0], M = t.sz[1]; D;){
                                S = this.buildFinalText(t.t);
                                P = 0;
                                p = 0;
                                y = S.length;
                                u = t.tr / 1000 * t.finalSize;
                                let C = -1;
                                for(g = 0; g < y; g += 1){
                                    A = S[g].charCodeAt(0);
                                    n_1 = false;
                                    if (S[g] === " ") {
                                        C = g;
                                    } else if (A === 13 || A === 3) {
                                        p = 0;
                                        n_1 = true;
                                        P += t.finalLineHeight || 1.2 * t.finalSize;
                                    }
                                    if (fontManager.chars) {
                                        _ = fontManager.getCharData(S[g], m.fStyle, m.fFamily);
                                        c = n_1 ? 0 : _.w * t.finalSize / 100;
                                    } else {
                                        c = fontManager.measureText(S[g], t.f, t.finalSize);
                                    }
                                    if (p + c > w && S[g] !== " ") {
                                        if (-1 === C) {
                                            y += 1;
                                        } else {
                                            g = C;
                                        }
                                        P += t.finalLineHeight || 1.2 * t.finalSize;
                                        S.splice(g, +(C === g), "\r");
                                        C = -1;
                                        p = 0;
                                    } else {
                                        p += c;
                                        p += u;
                                    }
                                }
                                P += m.ascent * t.finalSize / 100;
                                if (this.canResize && t.finalSize > this.minimumFontSize && M < P) {
                                    t.finalSize -= 1;
                                    t.finalLineHeight = t.finalSize * t.lh / t.s;
                                } else {
                                    t.finalText = S;
                                    y = t.finalText.length;
                                    D = false;
                                }
                            }
                        }
                        p = -u;
                        c = 0;
                        let T = 0;
                        for(g = 0; g < y; g += 1){
                            n_1 = false;
                            if ((A = (I = t.finalText[g]).charCodeAt(0)) === 13 || A === 3) {
                                T = 0;
                                l.push(p);
                                f = p > f ? p : f;
                                p = -2 * u;
                                val = "";
                                n_1 = true;
                                line += 1;
                            } else {
                                val = I;
                            }
                            if (fontManager.chars) {
                                _ = fontManager.getCharData(I, m.fStyle, fontManager.getFontByName(t.f).fFamily);
                                c = n_1 ? 0 : _.w * t.finalSize / 100;
                            } else {
                                c = fontManager.measureText(val, t.f, t.finalSize);
                            }
                            if (I === " ") {
                                T += c + u;
                            } else {
                                p += c + u + T;
                                T = 0;
                            }
                            s.push({
                                l: c,
                                an: c,
                                add,
                                n: n_1,
                                anIndexes: [],
                                val,
                                line,
                                animatorJustifyOffset: 0
                            });
                            if (r == 2) {
                                add += c;
                                if (val === "" || val === " " || g === y - 1) {
                                    for((val === "" || val === " ") && (add -= c); o <= g;){
                                        s[o].an = add;
                                        s[o].ind = a;
                                        s[o].extra = c;
                                        o += 1;
                                    }
                                    a += 1;
                                    add = 0;
                                }
                            } else if (r == 3) {
                                add += c;
                                if (val === "" || g === y - 1) {
                                    for(val === "" && (add -= c); o <= g;){
                                        s[o].an = add;
                                        s[o].ind = a;
                                        s[o].extra = c;
                                        o += 1;
                                    }
                                    add = 0;
                                    a += 1;
                                }
                            } else {
                                s[a].ind = a;
                                s[a].extra = 0;
                                a += 1;
                            }
                        }
                        t.l = s;
                        f = p > f ? p : f;
                        l.push(p);
                        if (t.sz) {
                            t.boxWidth = t.sz[0];
                            t.justifyOffset = 0;
                        } else {
                            t.boxWidth = f;
                            switch(t.j){
                                case 1:
                                    t.justifyOffset = -t.boxWidth;
                                    break;
                                case 2:
                                    t.justifyOffset = -t.boxWidth / 2;
                                    break;
                                default:
                                    t.justifyOffset = 0;
                            }
                        }
                        t.lineWidths = l;
                        const E = data.a;
                        b = E.length;
                        const F = [];
                        for(k = 0; k < b; k += 1){
                            if ((L = E[k]).a.sc) {
                                t.strokeColorAnim = true;
                            }
                            if (L.a.sw) {
                                t.strokeWidthAnim = true;
                            }
                            if (L.a.fc || L.a.fh || L.a.fs || L.a.fb) {
                                t.fillColorAnim = true;
                            }
                            B = 0;
                            R = L.s.b;
                            for(g = 0; g < y; g += 1){
                                (V = s[g]).anIndexes[k] = B;
                                if (R == 1 && V.val !== "" || R == 2 && V.val !== "" && V.val !== " " || R == 3 && (V.n || V.val == " " || g == y - 1) || R == 4 && (V.n || g == y - 1)) {
                                    if (L.s.rn === 1) {
                                        F.push(B);
                                    }
                                    B += 1;
                                }
                            }
                            data.a[k].s.totalChars = B;
                            var I;
                            var L;
                            var V;
                            var R;
                            var B;
                            let z;
                            let N = -1;
                            if (L.s.rn === 1) {
                                for(g = 0; g < y; g += 1){
                                    if (N != (V = s[g]).anIndexes[k]) {
                                        N = V.anIndexes[k];
                                        z = F.splice(Math.floor(Math.random() * F.length), 1)[0];
                                    }
                                    V.anIndexes[k] = z;
                                }
                            }
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize;
                        t.ls = t.ls || 0;
                        t.ascent = m.ascent * t.finalSize / 100;
                    }
                    updateDocumentData(t, e) {
                        e = e === undefined ? this.keysIndex : e;
                        let i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t);
                        this.data.d.k[e].s = i;
                        this.recalculate(e);
                        this.setCurrentData(i);
                        this.elem.addDynamicProperty(this);
                    }
                    recalculate(t) {
                        const e = this.data.d.k[t].s;
                        e.__complete = false;
                        this.keysIndex = 0;
                        this._isFirstFrame = true;
                        this.getValue(e);
                    }
                    canResizeFont(t) {
                        this.canResize = t;
                        this.recalculate(this.keysIndex);
                        this.elem.addDynamicProperty(this);
                    }
                    setMinimumFontSize(t) {
                        this.minimumFontSize = Math.floor(t) || 1;
                        this.recalculate(this.keysIndex);
                        this.elem.addDynamicProperty(this);
                    }
                }
                u([
                    eF,
                    eB,
                    eW,
                    eK,
                    eH,
                    eI,
                    eX
                ], ie);
                ie.prototype.initSecondaryElement = ()=>{};
                ie.prototype.identityMatrix = new tj;
                ie.prototype.buildExpressionInterface = ()=>{};
                ie.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
                    this.filterUniqueShapes();
                };
                ie.prototype.filterUniqueShapes = function() {
                    let t;
                    let e;
                    let i;
                    let s;
                    const length = this.shapes.length;
                    const length_1 = this.stylesList.length;
                    const n = [];
                    let o = false;
                    for(i = 0; i < length_1; i += 1){
                        s = this.stylesList[i];
                        o = false;
                        n.length = 0;
                        for(t = 0; t < length; t += 1){
                            if (-1 !== (e = this.shapes[t]).styles.indexOf(s)) {
                                n.push(e);
                                o = e._isAnimated || o;
                            }
                        }
                        if (n.length > 1 && o) {
                            this.setShapesAsAnimated(n);
                        }
                    }
                };
                ie.prototype.setShapesAsAnimated = (t)=>{
                    let e;
                    const t_length = t.length;
                    for(e = 0; e < t_length; e += 1){
                        t[e].setAsAnimated();
                    }
                };
                ie.prototype.createStyleElement = function(t, e) {
                    let i;
                    const s = new e$(t, e);
                    const s_pElem = s.pElem;
                    if (t.ty === "st") {
                        i = new e1(this, t, s);
                    } else if (t.ty === "fl") {
                        i = new e2(this, t, s);
                    } else if (t.ty === "gf" || t.ty === "gs") {
                        i = new (t.ty === "gf" ? e5 : e4)(this, t, s);
                        this.globalData.defs.appendChild(i.gf);
                        if (i.maskId) {
                            this.globalData.defs.appendChild(i.ms);
                            this.globalData.defs.appendChild(i.of);
                            s_pElem.setAttribute("mask", "url(" + c() + "#" + i.maskId + ")");
                        }
                    } else if (t.ty === "no") {
                        i = new e3(this, t, s);
                    }
                    if (t.ty === "st" || t.ty === "gs") {
                        s_pElem.setAttribute("stroke-linecap", eJ[t.lc || 2]);
                        s_pElem.setAttribute("stroke-linejoin", eZ[t.lj || 2]);
                        s_pElem.setAttribute("fill-opacity", "0");
                        if (t.lj === 1) {
                            s_pElem.setAttribute("stroke-miterlimit", t.ml);
                        }
                    }
                    if (t.r === 2) {
                        s_pElem.setAttribute("fill-rule", "evenodd");
                    }
                    if (t.ln) {
                        s_pElem.setAttribute("id", t.ln);
                    }
                    if (t.cl) {
                        s_pElem.setAttribute("class", t.cl);
                    }
                    if (t.bm) {
                        s_pElem.style["mix-blend-mode"] = eb(t.bm);
                    }
                    this.stylesList.push(s);
                    this.addToAnimatedContents(t, i);
                    return i;
                };
                ie.prototype.createGroupElement = (t)=>{
                    const e = new e7;
                    if (t.ln) {
                        e.gr.setAttribute("id", t.ln);
                    }
                    if (t.cl) {
                        e.gr.setAttribute("class", t.cl);
                    }
                    if (t.bm) {
                        e.gr.style["mix-blend-mode"] = eb(t.bm);
                    }
                    return e;
                };
                ie.prototype.createTransformElement = function(t, e) {
                    const i = t0.getTransformProperty(this, t, this);
                    const s = new e9(i, i.o, e);
                    this.addToAnimatedContents(t, s);
                    return s;
                };
                ie.prototype.createShapeElement = function(t, e, i) {
                    let s = 4;
                    if (t.ty === "rc") {
                        s = 5;
                    } else if (t.ty === "el") {
                        s = 6;
                    } else if (t.ty === "sr") {
                        s = 7;
                    }
                    const a = new eQ(e, i, tO.getShapeProp(this, t, s, this));
                    this.shapes.push(a);
                    this.addShapeToModifiers(a);
                    this.addToAnimatedContents(t, a);
                    return a;
                };
                ie.prototype.addToAnimatedContents = function(t, element) {
                    for(let i = 0, s = this.animatedContents.length; i < s;){
                        if (this.animatedContents[i].element === element) {
                            return;
                        }
                        i += 1;
                    }
                    this.animatedContents.push({
                        fn: it.createRenderFunction(t),
                        element,
                        data: t
                    });
                };
                ie.prototype.setElementStyles = function(t) {
                    let e;
                    const t_styles = t.styles;
                    const length = this.stylesList.length;
                    for(e = 0; e < length; e += 1){
                        if (!(-1 !== t_styles.indexOf(this.stylesList[e]) || this.stylesList[e].closed)) {
                            t_styles.push(this.stylesList[e]);
                        }
                    }
                };
                ie.prototype.reloadShapes = function() {
                    this._isFirstFrame = true;
                    let t;
                    let length = this.itemsData.length;
                    for(t = 0; t < length; t += 1){
                        this.prevViewData[t] = this.itemsData[t];
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
                    this.filterUniqueShapes();
                    length = this.dynamicProperties.length;
                    for(t = 0; t < length; t += 1){
                        this.dynamicProperties[t].getValue();
                    }
                    this.renderModifiers();
                };
                ie.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                    let o;
                    let h;
                    let l;
                    let p;
                    let f;
                    let m;
                    const c = [].concat(r);
                    let d = t.length - 1;
                    const u = [];
                    const g = [];
                    for(o = d; o >= 0; o -= 1){
                        if (m = this.searchProcessedElement(t[o])) {
                            e[o] = i[m - 1];
                        } else {
                            t[o]._render = n;
                        }
                        if (t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") {
                            if (m) {
                                e[o].style.closed = t[o].hd;
                            } else {
                                e[o] = this.createStyleElement(t[o], a);
                            }
                            if (t[o]._render && e[o].style.pElem.parentNode !== s) {
                                s.appendChild(e[o].style.pElem);
                            }
                            u.push(e[o].style);
                        } else if (t[o].ty === "gr") {
                            if (m) {
                                l = e[o].it.length;
                                for(h = 0; h < l; h += 1){
                                    e[o].prevViewData[h] = e[o].it[h];
                                }
                            } else {
                                e[o] = this.createGroupElement(t[o]);
                            }
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, c, n);
                            if (t[o]._render && e[o].gr.parentNode !== s) {
                                s.appendChild(e[o].gr);
                            }
                        } else {
                            if (t[o].ty === "tr") {
                                if (!m) {
                                    e[o] = this.createTransformElement(t[o], s);
                                }
                                p = e[o].transform;
                                c.push(p);
                            } else if (t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr") {
                                if (!m) {
                                    e[o] = this.createShapeElement(t[o], c, a);
                                }
                                this.setElementStyles(e[o]);
                            } else if (t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op") {
                                if (m) {
                                    f = e[o];
                                    f.closed = false;
                                } else {
                                    (f = tJ.getModifier(t[o].ty)).init(this, t[o]);
                                    e[o] = f;
                                    this.shapeModifiers.push(f);
                                }
                                g.push(f);
                            } else if (t[o].ty === "rp") {
                                if (m) {
                                    f = e[o];
                                    f.closed = true;
                                } else {
                                    f = tJ.getModifier(t[o].ty);
                                    e[o] = f;
                                    f.init(this, t, o, e);
                                    this.shapeModifiers.push(f);
                                    n = false;
                                }
                                g.push(f);
                            }
                        }
                        this.addProcessedElement(t[o], o + 1);
                    }
                    d = u.length;
                    for(o = 0; o < d; o += 1){
                        u[o].closed = true;
                    }
                    d = g.length;
                    for(o = 0; o < d; o += 1){
                        g[o].closed = true;
                    }
                };
                ie.prototype.renderInnerContent = function() {
                    this.renderModifiers();
                    let t;
                    const length = this.stylesList.length;
                    for(t = 0; t < length; t += 1){
                        this.stylesList[t].reset();
                    }
                    this.renderShape();
                    for(t = 0; t < length; t += 1){
                        if (this.stylesList[t]._mdf || this._isFirstFrame) {
                            if (this.stylesList[t].msElem) {
                                this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d);
                                this.stylesList[t].d = "M0 0" + this.stylesList[t].d;
                            }
                            this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0");
                        }
                    }
                };
                ie.prototype.renderShape = function() {
                    let t;
                    let e;
                    const length = this.animatedContents.length;
                    for(t = 0; t < length; t += 1){
                        e = this.animatedContents[t];
                        if ((this._isFirstFrame || e.element._isAnimated) && e.data !== true) {
                            e.fn(e.data, e.element, this._isFirstFrame);
                        }
                    }
                };
                ie.prototype.destroy = function() {
                    this.destroyBaseElement();
                    this.shapesData = null;
                    this.itemsData = null;
                };
                is.prototype.defaultBoxWidth = [
                    0,
                    0
                ];
                const ia = (()=>{
                    const Math_max = Math.max;
                    const Math_min = Math.min;
                    const Math_floor = Math.floor;
                    function s(t, e) {
                        this._currentTextLength = -1;
                        this.k = false;
                        this.data = e;
                        this.elem = t;
                        this.comp = t.comp;
                        this.finalS = 0;
                        this.finalE = 0;
                        this.initDynamicPropertyContainer(t);
                        this.s = tI.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this);
                        if ("e" in e) {
                            this.e = tI.getProp(t, e.e, 0, 0, this);
                        } else {
                            this.e = {
                                v: 100
                            };
                        }
                        this.o = tI.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this);
                        this.xe = tI.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this);
                        this.ne = tI.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this);
                        this.sm = tI.getProp(t, e.sm || {
                            k: 100
                        }, 0, 0, this);
                        this.a = tI.getProp(t, e.a, 0, 0.01, this);
                        if (!this.dynamicProperties.length) {
                            this.getValue();
                        }
                    }
                    s.prototype = {
                        getMult (s) {
                            if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
                                this.getValue();
                            }
                            let a = 0;
                            let r = 0;
                            let n = 1;
                            let o = 1;
                            if (this.ne.v > 0) {
                                a = this.ne.v / 100;
                            } else {
                                r = -this.ne.v / 100;
                            }
                            if (this.xe.v > 0) {
                                n = 1 - this.xe.v / 100;
                            } else {
                                o = 1 + this.xe.v / 100;
                            }
                            const get = tg.getBezierEasing(a, r, n, o).get;
                            let l = 0;
                            const finalS = this.finalS;
                            const finalE = this.finalE;
                            const m = this.data.sh;
                            if (m === 2) {
                                l = get(l = finalE === finalS ? +(s >= finalE) : Math_max(0, Math_min(0.5 / (finalE - finalS) + (s - finalS) / (finalE - finalS), 1)));
                            } else if (m === 3) {
                                l = get(l = finalE === finalS ? s >= finalE ? 0 : 1 : 1 - Math_max(0, Math_min(0.5 / (finalE - finalS) + (s - finalS) / (finalE - finalS), 1)));
                            } else if (m === 4) {
                                if (finalE === finalS) {
                                    l = 0;
                                } else if ((l = Math_max(0, Math_min(0.5 / (finalE - finalS) + (s - finalS) / (finalE - finalS), 1))) < 0.5) {
                                    l *= 2;
                                } else {
                                    l = 1 - 2 * (l - 0.5);
                                }
                                l = get(l);
                            } else if (m === 5) {
                                if (finalE === finalS) {
                                    l = 0;
                                } else {
                                    const c = finalE - finalS;
                                    const d = -c / 2 + (s = Math_min(Math_max(0, s + 0.5 - finalS), finalE - finalS));
                                    const u = c / 2;
                                    l = Math.sqrt(1 - d * d / (u * u));
                                }
                                l = get(l);
                            } else {
                                if (m === 6) {
                                    l = get(l = finalE === finalS ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (s = Math_min(Math_max(0, s + 0.5 - finalS), finalE - finalS)) / (finalE - finalS))) / 2);
                                } else {
                                    if (s >= Math_floor(finalS)) {
                                        l = s - finalS < 0 ? Math_max(0, Math_min(Math_min(finalE, 1) - (finalS - s), 1)) : Math_max(0, Math_min(finalE - s, 1));
                                    }
                                    l = get(l);
                                }
                            }
                            if (this.sm.v !== 100) {
                                let g = 0.01 * this.sm.v;
                                if (g === 0) {
                                    g = 1e-8;
                                }
                                const y = 0.5 - 0.5 * g;
                                if (l < y) {
                                    l = 0;
                                } else if ((l = (l - y) / g) > 1) {
                                    l = 1;
                                }
                            }
                            return l * this.a.v;
                        },
                        getValue (t) {
                            this.iterateDynamicProperties();
                            this._mdf = t || this._mdf;
                            this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
                            if (t && this.data.r === 2) {
                                this.e.v = this._currentTextLength;
                            }
                            const e = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
                            const i = this.o.v / e;
                            let s = this.s.v / e + i;
                            let a = this.e.v / e + i;
                            if (s > a) {
                                const r = s;
                                s = a;
                                a = r;
                            }
                            this.finalS = s;
                            this.finalE = a;
                        }
                    };
                    u([
                        tL
                    ], s);
                    return {
                        getTextSelectorProp (t, e, i) {
                            return new s(t, e, i);
                        }
                    };
                })();
                function ir(t, e, i) {
                    const s = {
                        propType: false
                    };
                    const tI_getProp = tI.getProp;
                    const r = e.a;
                    this.a = {
                        r: r.r ? tI_getProp(t, r.r, 0, I, i) : s,
                        rx: r.rx ? tI_getProp(t, r.rx, 0, I, i) : s,
                        ry: r.ry ? tI_getProp(t, r.ry, 0, I, i) : s,
                        sk: r.sk ? tI_getProp(t, r.sk, 0, I, i) : s,
                        sa: r.sa ? tI_getProp(t, r.sa, 0, I, i) : s,
                        s: r.s ? tI_getProp(t, r.s, 1, 0.01, i) : s,
                        a: r.a ? tI_getProp(t, r.a, 1, 0, i) : s,
                        o: r.o ? tI_getProp(t, r.o, 0, 0.01, i) : s,
                        p: r.p ? tI_getProp(t, r.p, 1, 0, i) : s,
                        sw: r.sw ? tI_getProp(t, r.sw, 0, 0, i) : s,
                        sc: r.sc ? tI_getProp(t, r.sc, 1, 0, i) : s,
                        fc: r.fc ? tI_getProp(t, r.fc, 1, 0, i) : s,
                        fh: r.fh ? tI_getProp(t, r.fh, 0, 0, i) : s,
                        fs: r.fs ? tI_getProp(t, r.fs, 0, 0.01, i) : s,
                        fb: r.fb ? tI_getProp(t, r.fb, 0, 0.01, i) : s,
                        t: r.t ? tI_getProp(t, r.t, 0, 0, i) : s
                    };
                    this.s = ia.getTextSelectorProp(t, e.s, i);
                    this.s.t = e.s.t;
                }
                class io {
                    constructor(t, e, i){
                        this._isFirstFrame = true;
                        this._hasMaskedPath = false;
                        this._frameId = -1;
                        this._textData = t;
                        this._renderType = e;
                        this._elem = i;
                        this._animatorsData = v(this._textData.a.length);
                        this._pathData = {};
                        this._moreOptions = {
                            alignment: {}
                        };
                        this.renderedLetters = [];
                        this.lettersChangedFlag = false;
                        this.initDynamicPropertyContainer(i);
                    }
                    searchProperties() {
                        let t;
                        let e;
                        const length = this._textData.a.length;
                        const tI_getProp = tI.getProp;
                        for(t = 0; t < length; t += 1){
                            e = this._textData.a[t];
                            this._animatorsData[t] = new ir(this._elem, e, this);
                        }
                        if (this._textData.p && "m" in this._textData.p) {
                            this._pathData = {
                                a: tI_getProp(this._elem, this._textData.p.a, 0, 0, this),
                                f: tI_getProp(this._elem, this._textData.p.f, 0, 0, this),
                                l: tI_getProp(this._elem, this._textData.p.l, 0, 0, this),
                                r: tI_getProp(this._elem, this._textData.p.r, 0, 0, this),
                                p: tI_getProp(this._elem, this._textData.p.p, 0, 0, this),
                                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                            };
                            this._hasMaskedPath = true;
                        } else {
                            this._hasMaskedPath = false;
                        }
                        this._moreOptions.alignment = tI_getProp(this._elem, this._textData.m.a, 1, 0, this);
                    }
                    getMeasures(t, e) {
                        this.lettersChangedFlag = e;
                        if (this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                            this._isFirstFrame = false;
                            let i;
                            let s;
                            let a;
                            let r;
                            let n;
                            let o;
                            let h;
                            let l;
                            let p;
                            let f;
                            let m;
                            let c;
                            let d;
                            let u;
                            let g;
                            let y;
                            let v;
                            const x = this._moreOptions.alignment.v;
                            const k = this._animatorsData;
                            const b = this._textData;
                            const _ = this.mHelper;
                            const A = this._renderType;
                            let P = this.renderedLetters.length;
                            const S = t.l;
                            if (this._hasMaskedPath) {
                                W = this._pathData.m;
                                if (!this._pathData.n || this._pathData._mdf) {
                                    var D;
                                    var w;
                                    var M;
                                    var C;
                                    var T;
                                    var E;
                                    var F;
                                    var I;
                                    var L;
                                    var V;
                                    var R;
                                    var B;
                                    var z;
                                    var N;
                                    var O;
                                    var j;
                                    var G;
                                    var q;
                                    var W;
                                    let U;
                                    let K = W.v;
                                    if (this._pathData.r.v) {
                                        K = K.reverse();
                                    }
                                    T = {
                                        tLength: 0,
                                        segments: []
                                    };
                                    C = K._length - 1;
                                    j = 0;
                                    for(M = 0; M < C; M += 1){
                                        U = tb.buildBezierData(K.v[M], K.v[M + 1], [
                                            K.o[M][0] - K.v[M][0],
                                            K.o[M][1] - K.v[M][1]
                                        ], [
                                            K.i[M + 1][0] - K.v[M + 1][0],
                                            K.i[M + 1][1] - K.v[M + 1][1]
                                        ]);
                                        T.tLength += U.segmentLength;
                                        T.segments.push(U);
                                        j += U.segmentLength;
                                    }
                                    M = C;
                                    if (W.v.c) {
                                        U = tb.buildBezierData(K.v[M], K.v[0], [
                                            K.o[M][0] - K.v[M][0],
                                            K.o[M][1] - K.v[M][1]
                                        ], [
                                            K.i[0][0] - K.v[0][0],
                                            K.i[0][1] - K.v[0][1]
                                        ]);
                                        T.tLength += U.segmentLength;
                                        T.segments.push(U);
                                        j += U.segmentLength;
                                    }
                                    this._pathData.pi = T;
                                }
                                T = this._pathData.pi;
                                E = this._pathData.f.v;
                                R = 0;
                                V = 1;
                                I = 0;
                                L = true;
                                N = T.segments;
                                if (E < 0 && W.v.c) {
                                    if (T.tLength < Math.abs(E)) {
                                        E = -Math.abs(E) % T.tLength;
                                    }
                                    R = N.length - 1;
                                    for(V = (z = N[R].points).length - 1; E < 0;){
                                        E += z[V].partialLength;
                                        if ((V -= 1) < 0) {
                                            R -= 1;
                                            V = (z = N[R].points).length - 1;
                                        }
                                    }
                                }
                                B = (z = N[R].points)[V - 1];
                                O = (F = z[V]).partialLength;
                            }
                            C = S.length;
                            D = 0;
                            w = 0;
                            const J = 1.2 * t.finalSize * 0.714;
                            let Z = true;
                            a = k.length;
                            let Q = -1;
                            const $ = E;
                            const tt = R;
                            const te = V;
                            let ti = -1;
                            let ts = "";
                            let ta = this.defaultPropsArray;
                            if (t.j === 2 || t.j === 1) {
                                let tr = 0;
                                let tn = 0;
                                const to = t.j === 2 ? -0.5 : -1;
                                let th = 0;
                                let tl = true;
                                for(M = 0; M < C; M += 1){
                                    if (S[M].n) {
                                        for(tr && (tr += tn); th < M;){
                                            S[th].animatorJustifyOffset = tr;
                                            th += 1;
                                        }
                                        tr = 0;
                                        tl = true;
                                    } else {
                                        for(s = 0; s < a; s += 1){
                                            (i = k[s].a).t.propType && (tl && t.j === 2 && (tn += i.t.v * to), (n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars)).length ? tr += i.t.v * n[0] * to : tr += i.t.v * n * to);
                                        }
                                        tl = false;
                                    }
                                }
                                for(tr && (tr += tn); th < M;){
                                    S[th].animatorJustifyOffset = tr;
                                    th += 1;
                                }
                            }
                            for(M = 0; M < C; M += 1){
                                _.reset();
                                p = 1;
                                if (S[M].n) {
                                    D = 0;
                                    w += t.yOffset;
                                    w += +!!Z;
                                    E = $;
                                    Z = false;
                                    if (this._hasMaskedPath) {
                                        R = tt;
                                        V = te;
                                        B = (z = N[R].points)[V - 1];
                                        O = (F = z[V]).partialLength;
                                        I = 0;
                                    }
                                    ts = "";
                                    y = "";
                                    u = "";
                                    v = "";
                                    ta = this.defaultPropsArray;
                                } else {
                                    if (this._hasMaskedPath) {
                                        if (ti !== S[M].line) {
                                            switch(t.j){
                                                case 1:
                                                    E += j - t.lineWidths[S[M].line];
                                                    break;
                                                case 2:
                                                    E += (j - t.lineWidths[S[M].line]) / 2;
                                            }
                                            ti = S[M].line;
                                        }
                                        if (Q !== S[M].ind) {
                                            if (S[Q]) {
                                                E += S[Q].extra;
                                            }
                                            E += S[M].an / 2;
                                            Q = S[M].ind;
                                        }
                                        E += x[0] * S[M].an * 0.005;
                                        let tp = 0;
                                        for(s = 0; s < a; s += 1){
                                            (i = k[s].a).p.propType && ((n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars)).length ? tp += i.p.v[0] * n[0] : tp += i.p.v[0] * n);
                                            i.a.propType && ((n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars)).length ? tp += i.a.v[0] * n[0] : tp += i.a.v[0] * n);
                                        }
                                        L = true;
                                        if (this._pathData.a.v) {
                                            E = 0.5 * S[0].an + (j - this._pathData.f.v - 0.5 * S[0].an - 0.5 * S[S.length - 1].an) * Q / (C - 1) + this._pathData.f.v;
                                        }
                                        while(L){
                                            if (I + O >= E + tp || !z) {
                                                G = (E + tp - I) / F.partialLength;
                                                h = B.point[0] + (F.point[0] - B.point[0]) * G;
                                                l = B.point[1] + (F.point[1] - B.point[1]) * G;
                                                _.translate(-x[0] * S[M].an * 0.005, -(0.01 * (x[1] * J)));
                                                L = false;
                                            } else if (z) {
                                                I += F.partialLength;
                                                if ((V += 1) >= z.length) {
                                                    V = 0;
                                                    if (N[R += 1]) {
                                                        z = N[R].points;
                                                    } else if (W.v.c) {
                                                        V = 0;
                                                        z = N[R = 0].points;
                                                    } else {
                                                        I -= F.partialLength;
                                                        z = null;
                                                    }
                                                }
                                                if (z) {
                                                    B = F;
                                                    O = (F = z[V]).partialLength;
                                                }
                                            }
                                        }
                                        o = S[M].an / 2 - S[M].add;
                                        _.translate(-o, 0, 0);
                                    } else {
                                        o = S[M].an / 2 - S[M].add;
                                        _.translate(-o, 0, 0);
                                        _.translate(-x[0] * S[M].an * 0.005, -x[1] * J * 0.01, 0);
                                    }
                                    for(s = 0; s < a; s += 1){
                                        if ((i = k[s].a).t.propType) {
                                            n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars);
                                            (D !== 0 || t.j !== 0) && (this._hasMaskedPath ? n.length ? E += i.t.v * n[0] : E += i.t.v * n : n.length ? D += i.t.v * n[0] : D += i.t.v * n);
                                        }
                                    }
                                    if (t.strokeWidthAnim) {
                                        m = t.sw || 0;
                                    }
                                    if (t.strokeColorAnim) {
                                        f = t.sc ? [
                                            t.sc[0],
                                            t.sc[1],
                                            t.sc[2]
                                        ] : [
                                            0,
                                            0,
                                            0
                                        ];
                                    }
                                    if (t.fillColorAnim && t.fc) {
                                        c = [
                                            t.fc[0],
                                            t.fc[1],
                                            t.fc[2]
                                        ];
                                    }
                                    for(s = 0; s < a; s += 1){
                                        (i = k[s].a).a.propType && ((n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars)).length ? _.translate(-i.a.v[0] * n[0], -i.a.v[1] * n[1], i.a.v[2] * n[2]) : _.translate(-i.a.v[0] * n, -i.a.v[1] * n, i.a.v[2] * n));
                                    }
                                    for(s = 0; s < a; s += 1){
                                        (i = k[s].a).s.propType && ((n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars)).length ? _.scale(1 + (i.s.v[0] - 1) * n[0], 1 + (i.s.v[1] - 1) * n[1], 1) : _.scale(1 + (i.s.v[0] - 1) * n, 1 + (i.s.v[1] - 1) * n, 1));
                                    }
                                    for(s = 0; s < a; s += 1){
                                        i = k[s].a;
                                        n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars);
                                        i.sk.propType && (n.length ? _.skewFromAxis(-i.sk.v * n[0], i.sa.v * n[1]) : _.skewFromAxis(-i.sk.v * n, i.sa.v * n));
                                        i.r.propType && (n.length ? _.rotateZ(-i.r.v * n[2]) : _.rotateZ(-i.r.v * n));
                                        i.ry.propType && (n.length ? _.rotateY(i.ry.v * n[1]) : _.rotateY(i.ry.v * n));
                                        i.rx.propType && (n.length ? _.rotateX(i.rx.v * n[0]) : _.rotateX(i.rx.v * n));
                                        i.o.propType && (n.length ? p += (i.o.v * n[0] - p) * n[0] : p += (i.o.v * n - p) * n);
                                        t.strokeWidthAnim && i.sw.propType && (n.length ? m += i.sw.v * n[0] : m += i.sw.v * n);
                                        if (t.strokeColorAnim && i.sc.propType) {
                                            for(d = 0; d < 3; d += 1){
                                                if (n.length) {
                                                    f[d] += (i.sc.v[d] - f[d]) * n[0];
                                                } else {
                                                    f[d] += (i.sc.v[d] - f[d]) * n;
                                                }
                                            }
                                        }
                                        if (t.fillColorAnim && t.fc) {
                                            if (i.fc.propType) {
                                                for(d = 0; d < 3; d += 1){
                                                    if (n.length) {
                                                        c[d] += (i.fc.v[d] - c[d]) * n[0];
                                                    } else {
                                                        c[d] += (i.fc.v[d] - c[d]) * n;
                                                    }
                                                }
                                            }
                                            if (i.fh.propType) {
                                                c = n.length ? Y(c, i.fh.v * n[0]) : Y(c, i.fh.v * n);
                                            }
                                            if (i.fs.propType) {
                                                c = n.length ? H(c, i.fs.v * n[0]) : H(c, i.fs.v * n);
                                            }
                                            if (i.fb.propType) {
                                                c = n.length ? X(c, i.fb.v * n[0]) : X(c, i.fb.v * n);
                                            }
                                        }
                                    }
                                    for(s = 0; s < a; s += 1){
                                        if ((i = k[s].a).p.propType) {
                                            n = k[s].s.getMult(S[M].anIndexes[s], b.a[s].s.totalChars);
                                            this._hasMaskedPath ? n.length ? _.translate(0, i.p.v[1] * n[0], -i.p.v[2] * n[1]) : _.translate(0, i.p.v[1] * n, -i.p.v[2] * n) : n.length ? _.translate(i.p.v[0] * n[0], i.p.v[1] * n[1], -i.p.v[2] * n[2]) : _.translate(i.p.v[0] * n, i.p.v[1] * n, -i.p.v[2] * n);
                                        }
                                    }
                                    if (t.strokeWidthAnim) {
                                        u = m < 0 ? 0 : m;
                                    }
                                    if (t.strokeColorAnim) {
                                        g = "rgb(" + Math.round(255 * f[0]) + "," + Math.round(255 * f[1]) + "," + Math.round(255 * f[2]) + ")";
                                    }
                                    if (t.fillColorAnim && t.fc) {
                                        y = "rgb(" + Math.round(255 * c[0]) + "," + Math.round(255 * c[1]) + "," + Math.round(255 * c[2]) + ")";
                                    }
                                    if (this._hasMaskedPath) {
                                        _.translate(0, -t.ls);
                                        _.translate(0, x[1] * J * 0.01 + w, 0);
                                        if (this._pathData.p.v) {
                                            let tf = 180 * Math.atan(q = (F.point[1] - B.point[1]) / (F.point[0] - B.point[0])) / Math.PI;
                                            if (F.point[0] < B.point[0]) {
                                                tf += 180;
                                            }
                                            _.rotate(-tf * Math.PI / 180);
                                        }
                                        _.translate(h, l, 0);
                                        E -= x[0] * S[M].an * 0.005;
                                        if (S[M + 1] && Q !== S[M + 1].ind) {
                                            E += S[M].an / 2;
                                            E += 0.001 * t.tr * t.finalSize;
                                        }
                                    } else {
                                        _.translate(D, w, 0);
                                        if (t.ps) {
                                            _.translate(t.ps[0], t.ps[1] + t.ascent, 0);
                                        }
                                        switch(t.j){
                                            case 1:
                                                _.translate(S[M].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[M].line]), 0, 0);
                                                break;
                                            case 2:
                                                _.translate(S[M].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[M].line]) / 2, 0, 0);
                                        }
                                        _.translate(0, -t.ls);
                                        _.translate(o, 0, 0);
                                        _.translate(x[0] * S[M].an * 0.005, x[1] * J * 0.01, 0);
                                        D += S[M].l + 0.001 * t.tr * t.finalSize;
                                    }
                                    switch(A){
                                        case "html":
                                            ts = _.toCSS();
                                            break;
                                        case "svg":
                                            ts = _.to2dCSS();
                                            break;
                                        default:
                                            ta = [
                                                _.props[0],
                                                _.props[1],
                                                _.props[2],
                                                _.props[3],
                                                _.props[4],
                                                _.props[5],
                                                _.props[6],
                                                _.props[7],
                                                _.props[8],
                                                _.props[9],
                                                _.props[10],
                                                _.props[11],
                                                _.props[12],
                                                _.props[13],
                                                _.props[14],
                                                _.props[15]
                                            ];
                                    }
                                    v = p;
                                }
                                if (P <= M) {
                                    r = new ii(v, u, g, y, ts, ta);
                                    this.renderedLetters.push(r);
                                    P += 1;
                                    this.lettersChangedFlag = true;
                                } else {
                                    r = this.renderedLetters[M];
                                    this.lettersChangedFlag = r.update(v, u, g, y, ts, ta) || this.lettersChangedFlag;
                                }
                            }
                        }
                    }
                    getValue() {
                        if (this._elem.globalData.frameId !== this._frameId) {
                            this._frameId = this._elem.globalData.frameId;
                            this.iterateDynamicProperties();
                        }
                    }
                }
                class ih {
                    initElement(t, e, i) {
                        this.lettersChangedFlag = true;
                        this.initFrame();
                        this.initBaseData(t, e, i);
                        this.textProperty = new is(this, t.t, this.dynamicProperties);
                        this.textAnimator = new io(t.t, this.renderType, this);
                        this.initTransform(t, e, i);
                        this.initHierarchy();
                        this.initRenderable();
                        this.initRendererElement();
                        this.createContainerElements();
                        this.createRenderableComponents();
                        this.createContent();
                        this.hide();
                        this.textAnimator.searchProperties(this.dynamicProperties);
                    }
                    prepareFrame(t) {
                        this._mdf = false;
                        this.prepareRenderableFrame(t);
                        this.prepareProperties(t, this.isInRange);
                    }
                    createPathShape(t, e) {
                        let i;
                        let s;
                        const e_length = e.length;
                        let r = "";
                        for(i = 0; i < e_length; i += 1){
                            if (e[i].ty === "sh") {
                                r += e8(s = e[i].ks.k, s.i.length, true, t);
                            }
                        }
                        return r;
                    }
                    updateDocumentData(t, e) {
                        this.textProperty.updateDocumentData(t, e);
                    }
                    canResizeFont(t) {
                        this.textProperty.canResizeFont(t);
                    }
                    setMinimumFontSize(t) {
                        this.textProperty.setMinimumFontSize(t);
                    }
                    applyTextPropertiesToMatrix(t, e, i, s, a) {
                        if (t.ps) {
                            e.translate(t.ps[0], t.ps[1] + t.ascent, 0);
                        }
                        e.translate(0, -t.ls, 0);
                        switch(t.j){
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                        }
                        e.translate(s, a, 0);
                    }
                    buildColor(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
                    }
                    destroy() {}
                    validateText() {
                        if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
                            this.buildNewText();
                            this.textProperty._isFirstFrame = false;
                            this.textProperty._mdf = false;
                        }
                    }
                }
                io.prototype.mHelper = new tj;
                io.prototype.defaultPropsArray = [];
                u([
                    tL
                ], io);
                ih.prototype.emptyProp = new ii;
                const il = {
                    shapes: []
                };
                function ip(t, e, i) {
                    this.textSpans = [];
                    this.renderType = "svg";
                    this.initElement(t, e, i);
                }
                function im(t, e, i) {
                    this.initElement(t, e, i);
                }
                class ic {
                    constructor(t, e, i){
                        this.initFrame();
                        this.initBaseData(t, e, i);
                        this.initFrame();
                        this.initTransform(t, e, i);
                        this.initHierarchy();
                    }
                    prepareFrame(t) {
                        this.prepareProperties(t, true);
                    }
                    renderFrame() {}
                    getBaseElement() {
                        return null;
                    }
                    destroy() {}
                    sourceRectAtTime() {}
                    hide() {}
                }
                function id() {}
                function iu() {}
                function ig(t, e, i) {
                    this.layers = t.layers;
                    this.supports3d = true;
                    this.completeLayers = false;
                    this.pendingElements = [];
                    this.elements = this.layers ? v(this.layers.length) : [];
                    this.initElement(t, e, i);
                    this.tm = t.tm ? tI.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: true
                    };
                }
                function iy(t, e) {
                    this.animationItem = t;
                    this.layers = null;
                    this.renderedFrame = -1;
                    this.svgElement = tr("svg");
                    let i = "";
                    if (e && e.title) {
                        const s = tr("title");
                        const a = G();
                        s.setAttribute("id", a);
                        s.textContent = e.title;
                        this.svgElement.appendChild(s);
                        i += a;
                    }
                    if (e && e.description) {
                        const r = tr("desc");
                        const n = G();
                        r.setAttribute("id", n);
                        r.textContent = e.description;
                        this.svgElement.appendChild(r);
                        i += " " + n;
                    }
                    if (i) {
                        this.svgElement.setAttribute("aria-labelledby", i);
                    }
                    const defs = tr("defs");
                    this.svgElement.appendChild(defs);
                    const h = tr("g");
                    this.svgElement.appendChild(h);
                    this.layerElement = h;
                    this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || false,
                        hideOnTransparent: !(e && e.hideOnTransparent === false),
                        viewBoxOnly: e && e.viewBoxOnly || false,
                        viewBoxSize: e && e.viewBoxSize || false,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || e.runExpressions === undefined || e.runExpressions
                    };
                    this.globalData = {
                        _mdf: false,
                        frameNum: -1,
                        defs,
                        renderConfig: this.renderConfig
                    };
                    this.elements = [];
                    this.pendingElements = [];
                    this.destroyed = false;
                    this.rendererType = "svg";
                }
                u([
                    eF,
                    eB,
                    eW,
                    eH,
                    eI,
                    eX,
                    ih
                ], ip);
                ip.prototype.createContent = function() {
                    if (this.data.singleShape && !this.globalData.fontManager.chars) {
                        this.textContainer = tr("text");
                    }
                };
                ip.prototype.buildTextContents = (t)=>{
                    for(var e = 0, i = t.length, s = [], a = ""; e < i;){
                        if (t[e] === "\r" || t[e] === "\x03") {
                            s.push(a);
                            a = "";
                        } else {
                            a += t[e];
                        }
                        e += 1;
                    }
                    s.push(a);
                    return s;
                };
                ip.prototype.buildShapeData = (t, e)=>{
                    if (t.shapes && t.shapes.length) {
                        const i = t.shapes[0];
                        if (i.it) {
                            const s = i.it[i.it.length - 1];
                            if (s.s) {
                                s.s.k[0] = e;
                                s.s.k[1] = e;
                            }
                        }
                    }
                    return t;
                };
                ip.prototype.buildNewText = function() {
                    this.addDynamicProperty(this);
                    const currentData = this.textProperty.currentData;
                    this.renderedLetters = v(currentData ? currentData.l.length : 0);
                    if (currentData.fc) {
                        this.layerElement.setAttribute("fill", this.buildColor(currentData.fc));
                    } else {
                        this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
                    }
                    if (currentData.sc) {
                        this.layerElement.setAttribute("stroke", this.buildColor(currentData.sc));
                        this.layerElement.setAttribute("stroke-width", currentData.sw);
                    }
                    this.layerElement.setAttribute("font-size", currentData.finalSize);
                    const e = this.globalData.fontManager.getFontByName(currentData.f);
                    if (e.fClass) {
                        this.layerElement.setAttribute("class", e.fClass);
                    } else {
                        this.layerElement.setAttribute("font-family", e.fFamily);
                        const i = currentData.fWeight;
                        const s = currentData.fStyle;
                        this.layerElement.setAttribute("font-style", s);
                        this.layerElement.setAttribute("font-weight", i);
                    }
                    this.layerElement.setAttribute("aria-label", currentData.t);
                    const a = currentData.l || [];
                    const r = !!this.globalData.fontManager.chars;
                    u = a.length;
                    const mHelper = this.mHelper;
                    const singleShape = this.data.singleShape;
                    let h = 0;
                    let l = 0;
                    let p = true;
                    const f = 0.001 * currentData.tr * currentData.finalSize;
                    if (!singleShape || r || currentData.sz) {
                        const m = this.textSpans.length;
                        for(d = 0; d < u; d += 1){
                            if (!this.textSpans[d]) {
                                this.textSpans[d] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                };
                            }
                            if (!r || !singleShape || d === 0) {
                                g = m > d ? this.textSpans[d].span : tr(r ? "g" : "text");
                                if (m <= d) {
                                    g.setAttribute("stroke-linecap", "butt");
                                    g.setAttribute("stroke-linejoin", "round");
                                    g.setAttribute("stroke-miterlimit", "4");
                                    this.textSpans[d].span = g;
                                    if (r) {
                                        const c = tr("g");
                                        g.appendChild(c);
                                        this.textSpans[d].childSpan = c;
                                    }
                                    this.textSpans[d].span = g;
                                    this.layerElement.appendChild(g);
                                }
                                g.style.display = "inherit";
                            }
                            mHelper.reset();
                            if (singleShape) {
                                if (a[d].n) {
                                    h = -f;
                                    l += currentData.yOffset;
                                    l += +!!p;
                                    p = false;
                                }
                                this.applyTextPropertiesToMatrix(currentData, mHelper, a[d].line, h, l);
                                h += a[d].l || 0;
                                h += f;
                            }
                            if (r) {
                                if ((y = this.globalData.fontManager.getCharData(currentData.finalText[d], e.fStyle, this.globalData.fontManager.getFontByName(currentData.f).fFamily)).t === 1) {
                                    x = new ig(y.data, this.globalData, this);
                                } else {
                                    var d;
                                    var u;
                                    var g;
                                    var y;
                                    var x;
                                    let k = il;
                                    if (y.data && y.data.shapes) {
                                        k = this.buildShapeData(y.data, currentData.finalSize);
                                    }
                                    x = new ie(k, this.globalData, this);
                                }
                                if (this.textSpans[d].glyph) {
                                    const b = this.textSpans[d].glyph;
                                    this.textSpans[d].childSpan.removeChild(b.layerElement);
                                    b.destroy();
                                }
                                this.textSpans[d].glyph = x;
                                x._debug = true;
                                x.prepareFrame(0);
                                x.renderFrame();
                                this.textSpans[d].childSpan.appendChild(x.layerElement);
                                if (y.t === 1) {
                                    this.textSpans[d].childSpan.setAttribute("transform", `scale(${currentData.finalSize / 100},${currentData.finalSize / 100})`);
                                }
                            } else {
                                if (singleShape) {
                                    g.setAttribute("transform", "translate(" + mHelper.props[12] + "," + mHelper.props[13] + ")");
                                }
                                g.textContent = a[d].val;
                                g.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                            }
                        }
                        if (singleShape && g) {
                            g.setAttribute("d", "");
                        }
                    } else {
                        const _ = this.textContainer;
                        let A = "start";
                        switch(currentData.j){
                            case 1:
                                A = "end";
                                break;
                            case 2:
                                A = "middle";
                                break;
                            default:
                                A = "start";
                        }
                        _.setAttribute("text-anchor", A);
                        _.setAttribute("letter-spacing", f);
                        const P = this.buildTextContents(currentData.finalText);
                        u = P.length;
                        l = currentData.ps ? currentData.ps[1] + currentData.ascent : 0;
                        for(d = 0; d < u; d += 1){
                            g = this.textSpans[d].span || tr("tspan");
                            g.textContent = P[d];
                            g.setAttribute("x", 0);
                            g.setAttribute("y", l);
                            g.style.display = "inherit";
                            _.appendChild(g);
                            if (!this.textSpans[d]) {
                                this.textSpans[d] = {
                                    span: null,
                                    glyph: null
                                };
                            }
                            this.textSpans[d].span = g;
                            l += currentData.finalLineHeight;
                        }
                        this.layerElement.appendChild(_);
                    }
                    while(d < this.textSpans.length){
                        this.textSpans[d].span.style.display = "none";
                        d += 1;
                    }
                    this._sizeChanged = true;
                };
                ip.prototype.sourceRectAtTime = function() {
                    this.prepareFrame(this.comp.renderedFrame - this.data.st);
                    this.renderInnerContent();
                    if (this._sizeChanged) {
                        this._sizeChanged = false;
                        const t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        };
                    }
                    return this.bbox;
                };
                ip.prototype.getValue = function() {
                    let t;
                    let e;
                    const length = this.textSpans.length;
                    this.renderedFrame = this.comp.renderedFrame;
                    for(t = 0; t < length; t += 1){
                        if (e = this.textSpans[t].glyph) {
                            e.prepareFrame(this.comp.renderedFrame - this.data.st);
                            if (e._mdf) {
                                this._mdf = true;
                            }
                        }
                    }
                };
                ip.prototype.renderInnerContent = function() {
                    this.validateText();
                    if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        this._sizeChanged = true;
                        let t;
                        let e;
                        let i;
                        let s;
                        let a;
                        const r = this.textAnimator.renderedLetters;
                        const n = this.textProperty.currentData.l;
                        e = n.length;
                        for(t = 0; t < e; t += 1){
                            if (!n[t].n) {
                                i = r[t];
                                s = this.textSpans[t].span;
                                if (a = this.textSpans[t].glyph) {
                                    a.renderFrame();
                                }
                                if (i._mdf.m) {
                                    s.setAttribute("transform", i.m);
                                }
                                if (i._mdf.o) {
                                    s.setAttribute("opacity", i.o);
                                }
                                if (i._mdf.sw) {
                                    s.setAttribute("stroke-width", i.sw);
                                }
                                if (i._mdf.sc) {
                                    s.setAttribute("stroke", i.sc);
                                }
                                if (i._mdf.fc) {
                                    s.setAttribute("fill", i.fc);
                                }
                            }
                        }
                    }
                };
                u([
                    eY
                ], im);
                im.prototype.createContent = function() {
                    const t = tr("rect");
                    t.setAttribute("width", this.data.sw);
                    t.setAttribute("height", this.data.sh);
                    t.setAttribute("fill", this.data.sc);
                    this.layerElement.appendChild(t);
                };
                u([
                    eF,
                    eB,
                    eH,
                    eI
                ], ic);
                u([
                    eR
                ], id);
                id.prototype.createNull = function(t) {
                    return new ic(t, this.globalData, this);
                };
                id.prototype.createShape = function(t) {
                    return new ie(t, this.globalData, this);
                };
                id.prototype.createText = function(t) {
                    return new ip(t, this.globalData, this);
                };
                id.prototype.createImage = function(t) {
                    return new eY(t, this.globalData, this);
                };
                id.prototype.createSolid = function(t) {
                    return new im(t, this.globalData, this);
                };
                id.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                    if (this.renderConfig.viewBoxSize) {
                        this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
                    } else {
                        this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h);
                    }
                    if (!this.renderConfig.viewBoxOnly) {
                        this.svgElement.setAttribute("width", t.w);
                        this.svgElement.setAttribute("height", t.h);
                        this.svgElement.style.width = "100%";
                        this.svgElement.style.height = "100%";
                        this.svgElement.style.transform = "translate3d(0,0,0)";
                        this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
                    }
                    if (this.renderConfig.width) {
                        this.svgElement.setAttribute("width", this.renderConfig.width);
                    }
                    if (this.renderConfig.height) {
                        this.svgElement.setAttribute("height", this.renderConfig.height);
                    }
                    if (this.renderConfig.className) {
                        this.svgElement.setAttribute("class", this.renderConfig.className);
                    }
                    if (this.renderConfig.id) {
                        this.svgElement.setAttribute("id", this.renderConfig.id);
                    }
                    if (this.renderConfig.focusable !== undefined) {
                        this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
                    }
                    this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio);
                    this.animationItem.wrapper.appendChild(this.svgElement);
                    const defs = this.globalData.defs;
                    this.setupGlobalData(t, defs);
                    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
                    this.data = t;
                    const i = tr("clipPath");
                    const s = tr("rect");
                    s.setAttribute("width", t.w);
                    s.setAttribute("height", t.h);
                    s.setAttribute("x", 0);
                    s.setAttribute("y", 0);
                    const a = G();
                    i.setAttribute("id", a);
                    i.appendChild(s);
                    this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + a + ")");
                    defs.appendChild(i);
                    this.layers = t.layers;
                    this.elements = v(t.layers.length);
                };
                id.prototype.destroy = function() {
                    if (this.animationItem.wrapper) {
                        this.animationItem.wrapper.innerText = "";
                    }
                    this.layerElement = null;
                    this.globalData.defs = null;
                    let t;
                    const e = this.layers ? this.layers.length : 0;
                    for(t = 0; t < e; t += 1){
                        if (this.elements[t] && this.elements[t].destroy) {
                            this.elements[t].destroy();
                        }
                    }
                    this.elements.length = 0;
                    this.destroyed = true;
                    this.animationItem = null;
                };
                id.prototype.updateContainerSize = ()=>{};
                id.prototype.findIndexByInd = function(t) {
                    let e = 0;
                    const length = this.layers.length;
                    for(e = 0; e < length; e += 1){
                        if (this.layers[e].ind === t) {
                            return e;
                        }
                    }
                    return -1;
                };
                id.prototype.buildItem = function(t) {
                    const elements = this.elements;
                    if (!elements[t] && this.layers[t].ty !== 99) {
                        elements[t] = true;
                        const i = this.createItem(this.layers[t]);
                        elements[t] = i;
                        if (tt()) {
                            if (this.layers[t].ty === 0) {
                                this.globalData.projectInterface.registerComposition(i);
                            }
                            i.initExpressions();
                        }
                        this.appendElementInPos(i, t);
                        if (this.layers[t].tt) {
                            const s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === s) {
                                return;
                            }
                            if (this.elements[s] && this.elements[s] !== true) {
                                const a = elements[s].getMatte(this.layers[t].tt);
                                i.setMatte(a);
                            } else {
                                this.buildItem(s);
                                this.addPendingElement(i);
                            }
                        }
                    }
                };
                id.prototype.checkPendingElements = function() {
                    while(this.pendingElements.length){
                        const t = this.pendingElements.pop();
                        t.checkParenting();
                        if (t.data.tt) {
                            for(let e = 0, i = this.elements.length; e < i;){
                                if (this.elements[e] === t) {
                                    const s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1;
                                    const a = this.elements[s].getMatte(this.layers[e].tt);
                                    t.setMatte(a);
                                    break;
                                }
                                e += 1;
                            }
                        }
                    }
                };
                id.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        if (t === null) {
                            t = this.renderedFrame;
                        } else {
                            this.renderedFrame = t;
                        }
                        this.globalData.frameNum = t;
                        this.globalData.frameId += 1;
                        this.globalData.projectInterface.currentFrame = t;
                        this.globalData._mdf = false;
                        let e;
                        const i = this.layers.length;
                        if (!this.completeLayers) {
                            this.checkLayers(t);
                        }
                        for(e = i - 1; e >= 0; e -= 1){
                            if (this.completeLayers || this.elements[e]) {
                                this.elements[e].prepareFrame(t - this.layers[e].st);
                            }
                        }
                        if (this.globalData._mdf) {
                            for(e = 0; e < i; e += 1){
                                if (this.completeLayers || this.elements[e]) {
                                    this.elements[e].renderFrame();
                                }
                            }
                        }
                    }
                };
                id.prototype.appendElementInPos = function(t, e) {
                    let i;
                    const s = t.getBaseElement();
                    if (s) {
                        for(let a = 0; a < e;){
                            if (this.elements[a] && this.elements[a] !== true && this.elements[a].getBaseElement()) {
                                i = this.elements[a].getBaseElement();
                            }
                            a += 1;
                        }
                        if (i) {
                            this.layerElement.insertBefore(s, i);
                        } else {
                            this.layerElement.appendChild(s);
                        }
                    }
                };
                id.prototype.hide = function() {
                    this.layerElement.style.display = "none";
                };
                id.prototype.show = function() {
                    this.layerElement.style.display = "block";
                };
                u([
                    eF,
                    eB,
                    eH,
                    eI,
                    eX
                ], iu);
                iu.prototype.initElement = function(t, e, i) {
                    this.initFrame();
                    this.initBaseData(t, e, i);
                    this.initTransform(t, e, i);
                    this.initRenderable();
                    this.initHierarchy();
                    this.initRendererElement();
                    this.createContainerElements();
                    this.createRenderableComponents();
                    if (this.data.xt || !e.progressiveLoad) {
                        this.buildAllItems();
                    }
                    this.hide();
                };
                iu.prototype.prepareFrame = function(t) {
                    this._mdf = false;
                    this.prepareRenderableFrame(t);
                    this.prepareProperties(t, this.isInRange);
                    if (this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) {
                            this.renderedFrame = t / this.data.sr;
                        } else {
                            var e;
                            let i = this.tm.v;
                            if (i === this.data.op) {
                                i = this.data.op - 1;
                            }
                            this.renderedFrame = i;
                        }
                        const s = this.elements.length;
                        if (!this.completeLayers) {
                            this.checkLayers(this.renderedFrame);
                        }
                        for(e = s - 1; e >= 0; e -= 1){
                            if (this.completeLayers || this.elements[e]) {
                                this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st);
                                if (this.elements[e]._mdf) {
                                    this._mdf = true;
                                }
                            }
                        }
                    }
                };
                iu.prototype.renderInnerContent = function() {
                    let t;
                    const length = this.layers.length;
                    for(t = 0; t < length; t += 1){
                        if (this.completeLayers || this.elements[t]) {
                            this.elements[t].renderFrame();
                        }
                    }
                };
                iu.prototype.setElements = function(t) {
                    this.elements = t;
                };
                iu.prototype.getElements = function() {
                    return this.elements;
                };
                iu.prototype.destroyElements = function() {
                    let t;
                    const length = this.layers.length;
                    for(t = 0; t < length; t += 1){
                        if (this.elements[t]) {
                            this.elements[t].destroy();
                        }
                    }
                };
                iu.prototype.destroy = function() {
                    this.destroyElements();
                    this.destroyBaseElement();
                };
                u([
                    id,
                    iu,
                    eW
                ], ig);
                ig.prototype.createComp = function(t) {
                    return new ig(t, this.globalData, this);
                };
                u([
                    id
                ], iy);
                iy.prototype.createComp = function(t) {
                    return new ig(t, this.globalData, this);
                };
                tm.svg = iy;
                tJ.registerModifier("tm", tQ);
                tJ.registerModifier("pb", t$);
                tJ.registerModifier("rp", t1);
                tJ.registerModifier("rd", t2);
                tJ.registerModifier("zz", eo);
                tJ.registerModifier("op", eg);
                return tq;
            }();
        }
    },
    288565,
    (t, e, i)=>{
        e.exports = JSON.parse('{"v":"5.12.1","fr":60,"ip":0,"op":101,"w":700,"h":700,"nm":"LL_Succes","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 28","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.38],"y":[1]},"o":{"x":[0.459],"y":[-0.109]},"t":8,"s":[0]},{"i":{"x":[0.203],"y":[1.379]},"o":{"x":[0.461],"y":[0]},"t":36,"s":[-31.473]},{"t":89,"s":[0]}],"ix":10},"p":{"a":0,"k":[310,400,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":950,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Centre","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.15],"y":[0.19]},"t":11,"s":[0]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":34,"s":[6]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":63,"s":[-4]},{"t":87,"s":[0]}],"ix":10},"p":{"a":0,"k":[-1.396,1.636,0],"ix":2,"l":2},"a":{"a":0,"k":[-22.663,27.682,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.34,0.34,0.34],"y":[1,1,1]},"o":{"x":[0.15,0.15,0.66],"y":[0.077,0.077,0]},"t":11,"s":[190,190,100]},{"i":{"x":[0.67,0.67,0.67],"y":[1,1,1]},"o":{"x":[0.66,0.66,0.66],"y":[0,0,0]},"t":34,"s":[90,90,100]},{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":63,"s":[200,200,100]},{"t":87,"s":[190,190,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"mm","mm":5,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-12.029,11.714],[0,0],[0,0],[7.429,15.054],[0,0],[0,0],[16.63,-2.408],[0,0],[0,0],[2.844,-16.545],[0,0],[0,0],[-14.873,-7.814]],"o":[[0,0],[0,0],[-11.485,-12.258],[0,0],[0,0],[-15.215,7.131],[0,0],[0,0],[2.083,16.67],[0,0],[0,0],[16.49,3.169],[0,0],[0,0],[8.113,-14.712],[0,0]],"v":[[11.948,51.692],[10.581,50.232],[10.596,50.232],[11.591,7.074],[13.036,5.676],[11.218,6.53],[-29.548,-7.747],[-30.434,-9.549],[-30.185,-7.561],[-56.373,26.773],[-58.362,27.068],[-56.388,27.441],[-31.817,62.94],[-32.159,64.913],[-31.195,63.157],[10.177,50.76]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":5,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":0,"ct":1,"bm":0,"td":1},{"ddd":0,"ind":3,"ty":4,"nm":"Mask","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[-19.131,37.356,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[187.527,214.353],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-18.452,24.396],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":0,"ct":1,"bm":0,"tt":2},{"ddd":0,"ind":4,"ty":4,"nm":"petal_01","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.018,"ix":10},"p":{"a":0,"k":[23.648,-58.229,0],"ix":2,"l":2},"a":{"a":0,"k":[-78.581,131.377,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.15,"y":0.735},"t":5,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-6.863,44.599],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[113.476,-36.648],[92.198,-137.631]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.167},"t":13,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-6.863,44.599],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[122.841,-35.09],[101.563,-136.073]],"c":true}]},{"i":{"x":0.674,"y":0.668},"o":{"x":0.66,"y":0},"t":32,"s":[{"i":[[1.279,-15.637],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.129],[30.264,33.471],[21.535,5.19]],"o":[[-6.739,21.704],[0,0],[14.266,28.908],[5.36,-2.403],[50.14,-29.991],[-43.962,-48.619],[-81.652,-19.68]],"v":[[-119.546,23.255],[-136.175,177.771],[-134.474,181.231],[-52.701,207.007],[0.621,129.557],[45.919,32.155],[-48.284,-27.179]],"c":true}]},{"i":{"x":0.474,"y":1},"o":{"x":0.166,"y":0.169},"t":62,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-17.488,41.598],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[25.172,-59.877],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[133.769,-27.289],[111.709,-132.955]],"c":true}]},{"t":87,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-6.863,44.599],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[113.476,-36.648],[92.198,-137.631]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"petal_02","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.018,"ix":10},"p":{"a":0,"k":[68.688,6.992,0],"ix":2,"l":2},"a":{"a":0,"k":[-136.289,34.379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.15,"y":0.735},"t":5,"s":[{"i":[[0,0],[-15.012,-2.737],[305.689,-241.479],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[332.656,71.78],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[0,0],[-15.012,-2.737],[307.833,-233.048],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[334.828,86.226],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.456],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"i":{"x":0.674,"y":0.668},"o":{"x":0.66,"y":0},"t":32,"s":[{"i":[[0,0],[-20.292,-14.348],[9.992,-88.465],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.698],[184.445,-71.904],[-4.21,2.657],[0,0],[-23.099,22.494],[0,0],[0,0]],"v":[[-170.938,70.463],[-75.622,99.791],[-105.169,-39.648],[-168.849,-17.9],[-171.624,-15.216],[-173.535,67.659],[-173.563,67.659]],"c":true}]},{"i":{"x":0.474,"y":1},"o":{"x":0.166,"y":0.169},"t":62,"s":[{"i":[[0,0],[-15.012,-2.737],[336.72,-188.575],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[355.916,143.967],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"t":87,"s":[{"i":[[0,0],[-15.012,-2.737],[305.689,-241.479],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[332.656,71.78],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"petal_03","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.018,"ix":10},"p":{"a":0,"k":[26.922,61.057,0],"ix":2,"l":2},"a":{"a":0,"k":[-33.151,-78.581,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.15,"y":0.735},"t":5,"s":[{"i":[[-16.689,-13.483],[-43.14,208.956],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[154.687,148.545],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[-16.689,-13.483],[-55.057,214.527],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[161.848,147.137],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"i":{"x":0.674,"y":0.668},"o":{"x":0.66,"y":0},"t":32,"s":[{"i":[[-16.689,-13.483],[-14.497,48.059],[-8.553,11.681],[0,0],[-28.562,-15.005],[0,0]],"o":[[116.213,111.152],[1.639,-10.452],[0,0],[15.577,-28.251],[0,0],[5.96,2.013]],"v":[[69.281,-67.234],[-105.01,-16.667],[-79.732,-107.174],[-77.881,-110.544],[1.564,-134.352],[4.965,-132.562]],"c":true}]},{"i":{"x":0.474,"y":1},"o":{"x":0.166,"y":0.169},"t":62,"s":[{"i":[[-16.689,-13.483],[-88.6,257.458],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[243.012,161.159],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"t":87,"s":[{"i":[[-16.689,-13.483],[-43.14,208.956],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[154.687,148.545],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"petal_04","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.018,"ix":10},"p":{"a":0,"k":[-29.311,46.958,0],"ix":2,"l":2},"a":{"a":0,"k":[115.416,-13.506,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.786},"o":{"x":0.15,"y":0.945},"t":5,"s":[{"i":[[-248.901,185.768],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-249.229,-118.077]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.15},"t":12,"s":[{"i":[[-243.132,188.815],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-254.293,-112.642]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"i":{"x":0.674,"y":0.668},"o":{"x":0.66,"y":0},"t":32,"s":[{"i":[[-79.526,47.559],[-3.68,16.806],[0,0],[31.663,6.087],[1.186,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-73.27,-7.564]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[26.973,-81.351]],"c":true}]},{"i":{"x":0.474,"y":1},"o":{"x":0.166,"y":0.169},"t":62,"s":[{"i":[[-307.984,184.129],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-272.315,-156.503]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"t":87,"s":[{"i":[[-248.901,185.768],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-249.229,-118.077]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"petal_05","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.018,"ix":10},"p":{"a":0,"k":[-45.833,-34.44,0],"ix":2,"l":2},"a":{"a":0,"k":[71.214,126.466,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.15,"y":0.735},"t":5,"s":[{"i":[[0,10.63],[-137.679,-263.142],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[15.185,-237.589],[21.93,41.914],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.167},"t":14,"s":[{"i":[[0,10.63],[-145.492,-258.263],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[7.124,-237.186],[23.218,41.215],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.915,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"i":{"x":0.674,"y":0.668},"o":{"x":0.66,"y":0},"t":32,"s":[{"i":[[4.221,10.502],[12.219,-107.191],[-9.55,-5.816],[-13.543,0.698],[0,0],[3.998,32.009],[0,0]],"o":[[-5.369,-110.809],[-1.105,53.697],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[114.358,25.438],[-25.122,131.231],[24.058,169.201],[72.53,178.441],[76.35,177.875],[126.638,111.947],[126.159,108.127]],"c":true}]},{"i":{"x":0.474,"y":1},"o":{"x":0.166,"y":0.169},"t":62,"s":[{"i":[[0,10.63],[-214.178,-301.943],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[46.126,-294.946],[27.369,38.583],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"t":87,"s":[{"i":[[0,10.63],[-137.679,-263.142],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[15.185,-237.589],[21.93,41.914],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":950.4,"st":-72,"ct":1,"bm":0}],"markers":[],"props":{}}');
    },
    279591,
    (t, e, i)=>{
        e.exports = JSON.parse('{"v":"5.12.1","fr":60,"ip":0,"op":400,"w":700,"h":700,"nm":"LL_Idle","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 28","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.268],"y":[0.363]},"t":0,"s":[0.013]},{"i":{"x":[1],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":97,"s":[-16.987]},{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.267],"y":[0.361]},"t":200,"s":[0.013]},{"i":{"x":[0.683],"y":[0.552]},"o":{"x":[0.33],"y":[0]},"t":297,"s":[17.013]},{"t":400,"s":[0.013]}],"ix":10},"p":{"a":0,"k":[310,400,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Mask","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.013,"ix":10},"p":{"a":0,"k":[-1.396,1.636,0],"ix":2,"l":2},"a":{"a":0,"k":[-22.663,27.682,0],"ix":1,"l":2},"s":{"a":0,"k":[190,190,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"mm","mm":5,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-12.029,11.714],[0,0],[0,0],[7.429,15.054],[0,0],[0,0],[16.63,-2.408],[0,0],[0,0],[2.844,-16.545],[0,0],[0,0],[-14.873,-7.814]],"o":[[0,0],[0,0],[-11.485,-12.258],[0,0],[0,0],[-15.215,7.131],[0,0],[0,0],[2.083,16.67],[0,0],[0,0],[16.49,3.169],[0,0],[0,0],[8.113,-14.712],[0,0]],"v":[[11.948,51.692],[10.581,50.232],[10.596,50.232],[11.591,7.074],[13.036,5.676],[11.218,6.53],[-29.548,-7.747],[-30.434,-9.549],[-30.185,-7.561],[-56.373,26.773],[-58.362,27.068],[-56.388,27.441],[-31.817,62.94],[-32.159,64.913],[-31.195,63.157],[10.177,50.76]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":5,"nm":"Merge Paths 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":0,"ct":1,"bm":0,"td":1},{"ddd":0,"ind":3,"ty":4,"nm":"Mask","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.013,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[-16.132,24.396,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[187.527,214.353],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-18.452,24.396],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":0,"ct":1,"bm":0,"tt":2},{"ddd":0,"ind":4,"ty":4,"nm":"petal_01","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.025,"ix":10},"p":{"a":0,"k":[23.662,-58.223,0],"ix":2,"l":2},"a":{"a":0,"k":[-78.581,131.377,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-6.863,44.599],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[113.476,-36.648],[92.198,-137.631]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":65,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.129],[-6.863,44.6],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.201,153.831],[-5.491,139.275],[91.529,-43.597],[70.25,-144.581]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":253,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.129],[-20.356,51.686],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.402],[79.117,-70.198],[21.784,-55.311],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.201,153.83],[-5.491,139.276],[152.79,-11.028],[126.686,-120.179]],"c":true}]},{"t":400,"s":[{"i":[[17.459,-72.881],[-8.222,-15.141],[0,0],[0,0],[-5.732,5.13],[-6.863,44.599],[16.855,14.374]],"o":[[-6.739,21.704],[0,0],[31.99,70.559],[5.36,-2.403],[79.117,-70.197],[9.939,-64.498],[-68.203,-58.163]],"v":[[-121.578,26.317],[-123.486,109.48],[-121.785,112.94],[-30.311,146.551],[-5.601,131.996],[113.476,-36.648],[92.198,-137.631]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"petal_02","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.025,"ix":10},"p":{"a":0,"k":[68.687,7.008,0],"ix":2,"l":2},"a":{"a":0,"k":[-136.289,34.379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[-15.012,-2.737],[305.689,-241.479],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[332.656,71.78],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":129,"s":[{"i":[[0,0],[-15.012,-2.737],[314.546,-195.926],[5.844,-6.289],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.698],[344.617,91.818],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.816],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":282,"s":[{"i":[[0,0],[-15.012,-2.737],[349.856,-155.361],[5.844,-6.289],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.698],[328.558,131.645],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.816],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]},{"t":400,"s":[{"i":[[0,0],[-15.012,-2.737],[305.689,-241.479],[5.844,-6.29],[0,0],[-22.054,-23.537],[0,0]],"o":[[9.838,14.697],[332.656,71.78],[-4.21,2.657],[0,0],[-24.621,20.283],[0,0],[0,0]],"v":[[-139.969,75.817],[-75.622,99.791],[-103.392,-34.318],[-135.969,-14.5],[-139.344,-11.455],[-143.242,71.152],[-142.763,71.49]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"petal_03","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.025,"ix":10},"p":{"a":0,"k":[26.909,61.063,0],"ix":2,"l":2},"a":{"a":0,"k":[-33.151,-78.581,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-16.689,-13.483],[-43.14,208.956],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[154.687,148.545],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":110,"s":[{"i":[[-16.689,-13.483],[-10.235,223.348],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[177.975,161.223],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":200,"s":[{"i":[[-16.689,-13.483],[-34.23,243.435],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[197.029,171.596],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]},{"t":400,"s":[{"i":[[-16.689,-13.483],[-43.14,208.956],[-8.553,11.681],[0,0],[-31.418,-16.743],[0,0]],"o":[[154.687,148.545],[1.639,-10.452],[0,0],[15.173,-28.3],[0,0],[5.96,2.013]],"v":[[65.897,-67.234],[-105.01,-16.667],[-78.846,-67.452],[-76.995,-70.822],[3.843,-92.403],[7.243,-90.613]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"petal_04","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.025,"ix":10},"p":{"a":0,"k":[-29.321,46.952,0],"ix":2,"l":2},"a":{"a":0,"k":[115.416,-13.506,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[-248.901,185.768],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-249.229,-118.077]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":160,"s":[{"i":[[-294.83,220.801],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-226.326,-107.367]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":306,"s":[{"i":[[-216.627,235.848],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-179.384,-112.189]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]},{"t":400,"s":[{"i":[[-248.901,185.768],[-3.68,16.806],[0,0],[31.663,6.087],[1.187,0.178],[19.826,7.987]],"o":[[16.008,-14.896],[0,0],[5.461,-31.771],[0,0],[-12.466,-1.867],[-249.229,-118.077]],"v":[[99.79,62.506],[127.068,11.999],[127.724,8.211],[80.542,-59.957],[76.751,-60.673],[24.971,-87.85]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":-72,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"petal_05","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0.025,"ix":10},"p":{"a":0,"k":[-45.825,-34.45,0],"ix":2,"l":2},"a":{"a":0,"k":[71.214,126.466,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,10.63],[-137.679,-263.142],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[15.185,-237.589],[21.93,41.914],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":86,"s":[{"i":[[0,10.63],[-184.512,-246.371],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[-6.281,-269.51],[28.356,37.863],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.611]],"v":[[97.915,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":232,"s":[{"i":[[0,10.63],[-159.884,-197.06],[-9.55,-5.816],[-13.543,0.699],[0,0],[5.12,34.112],[0,0]],"o":[[-48.105,-248.282],[29.804,36.734],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.611]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]},{"t":400,"s":[{"i":[[0,10.63],[-137.679,-263.142],[-9.55,-5.816],[-13.543,0.698],[0,0],[5.121,34.112],[0,0]],"o":[[15.185,-237.589],[21.93,41.914],[0,0],[0,0],[31.934,-4.624],[0,0],[-2.627,-20.612]],"v":[[97.914,-5.04],[-64.725,74.662],[3.641,138.961],[49.072,160.697],[52.891,160.131],[100.514,91.36],[100.036,87.54]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":400,"st":-72,"ct":1,"bm":0}],"markers":[],"props":{}}');
    }
]);
