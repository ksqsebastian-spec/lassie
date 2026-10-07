;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "cb1fab95-2c62-2ed6-ee0b-404ed34183fa";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    865670,
    (e)=>{
        "use strict";
        var t = e.i(817255);
        var r = e.i(177791);
        e.s([
            "EMAIL_PATTERN",
            0,
            "[a-zA-Z0-9](\\.?[a-zA-Z0-9_%+\\-]+)*@[a-zA-Z0-9\\-]+(\\.[a-zA-Z]{2,})+",
            "submitMarketingEmailForm",
            0,
            ({ email, forwardUrl, navigate })=>{
                t.tracker.identify({
                    email
                });
                let n = r.getSplashAttributionPath(window.location.pathname);
                let l = new URL(window.location.href).searchParams.get("rep");
                let s = new URL(`https://lassie.ai${forwardUrl}`);
                s.searchParams.set("email", email);
                s.searchParams.set("splash", n);
                s.searchParams.set("source", "www");
                if (l) {
                    s.searchParams.set("rep", l);
                }
                navigate(s.toString());
            }
        ]);
    },
    177791,
    (e)=>{
        "use strict";
        e.s([
            "getSplashAttributionPath",
            0,
            (e)=>e.replace(/^\/+/, "") || "/"
        ]);
    },
    313757,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(662576);
        let i = r.default(()=>e.A(804630).then((e)=>e.PaidAdsFloatingDesktopNav), {
            loadableGenerated: {
                modules: [
                    840612
                ]
            },
            ssr: false
        });
        let a = r.default(()=>e.A(804630).then((e)=>e.PaidAdsStickyEmailForm), {
            loadableGenerated: {
                modules: [
                    840612
                ]
            },
            ssr: false
        });
        e.s([
            "PaidAdsDeferredOverlays",
            0,
            ()=>t.jsxs(t.Fragment, {
                    children: [
                        t.jsx(i, {}),
                        t.jsx(a, {})
                    ]
                })
        ]);
    },
    355455,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(300778);
        var i = e.i(513679);
        var a = e.i(865670);
        var n = e.i(628974);
        e.s([
            "PaidAdsEmailForm",
            0,
            ({ className, forwardUrl = "/qualify/intake", placeholder, submitLabel, variant = "default" })=>{
                let u = r.useRouter();
                let c = i.useId();
                let [m, setM] = i.useState("");
                let p = variant === "compact";
                let h = !!submitLabel;
                return t.jsx("form", {
                    className: n.cn("w-full", p ? "max-w-[18rem]" : "max-w-[44.1rem]", className),
                    onSubmit: (e)=>{
                        e.preventDefault();
                        if (!m) {
                            let e = document.getElementById(c);
                            e?.reportValidity();
                            return;
                        }
                        a.submitMarketingEmailForm({
                            email: m,
                            forwardUrl,
                            navigate: (e)=>u.push(e)
                        });
                    },
                    children: t.jsxs("div", {
                        className: n.cn("flex border border-[rgba(112,131,111,0.2)]", "bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px]", p ? "h-[4.8rem] flex-row items-center gap-[0.4rem] rounded-[1.2rem] p-[0.4rem]" : "h-auto flex-col items-stretch gap-[1rem] rounded-[1.6rem] p-[0.8rem] tablet:h-[6.6rem] tablet:flex-row tablet:items-center"),
                        children: [
                            t.jsx("input", {
                                id: c,
                                type: "email",
                                title: "Please enter a valid email address",
                                pattern: a.EMAIL_PATTERN,
                                placeholder: placeholder ?? (p ? "Email" : "What's your email?"),
                                "data-1p-ignore": "true",
                                "data-form-type": "other",
                                "data-lpignore": "true",
                                autoComplete: "email",
                                autoCapitalize: "none",
                                inputMode: "email",
                                value: m,
                                onChange: (e)=>setM(e.target.value),
                                className: n.cn("min-w-0 bg-transparent text-text-primary outline-none placeholder:text-text-secondary", p ? "h-full flex-1 px-[1rem] text-[16px] leading-[1.2] tablet:text-[1.3rem]" : "flex-none px-[1.6rem] py-[1.4rem] text-[16px] leading-[1.3] tablet:h-auto tablet:flex-1 tablet:py-0 tablet:text-[1.4rem]")
                            }),
                            t.jsx("button", {
                                type: "submit",
                                "aria-label": p && !h ? "Get started" : undefined,
                                className: n.cn("flex shrink-0 items-center justify-center", "bg-[radial-gradient(247.11%_182.23%_at_50.13%_152.31%,#FF740A_30%,#FF8C00_85%)]", "text-[1.4rem] leading-[1.3] text-white transition hover:brightness-105", p ? n.cn("h-[4rem] rounded-[0.9rem] px-[0.8rem] text-[1.3rem]", h ? "w-auto min-w-[10.4rem]" : "w-[5.2rem]") : "w-full rounded-[1.2rem] px-[1.4rem] py-[1.6rem] tablet:h-[5rem] tablet:w-[18rem] tablet:py-0"),
                                children: submitLabel ?? (p ? "Go" : "Get started")
                            })
                        ]
                    })
                });
            }
        ]);
    },
    804630,
    (e)=>{
        e.v((t)=>Promise.all([
                "static/immutable/chunks/0v3mdyb27ol5u.js"
            ].map((t)=>e.l(t))).then(()=>t(840612)));
    },
    634181,
    (e)=>{
        "use strict";
        let t;
        var r;
        var i;
        var a = e.i(281889);
        var n = e.i(513679);
        var l = {
            outline: {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            },
            filled: {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                stroke: "none"
            }
        };
        r = "outline";
        i = [
            [
                "path",
                {
                    d: "M6 9l6 6l6 -6",
                    key: "svg-0"
                }
            ]
        ];
        t = n.forwardRef(({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, c)=>n.createElement("svg", {
                ref: c,
                ...l[r],
                width: size,
                height: size,
                className: [
                    "tabler-icon tabler-icon-chevron-down",
                    className
                ].join(" "),
                ...{
                    strokeWidth: stroke,
                    stroke: color
                },
                ...rest
            }, [
                title && n.createElement("title", {
                    key: "svg-title"
                }, title),
                ...i.map(([e, t])=>n.createElement(e, t)),
                ...Array.isArray(children) ? children : [
                    children
                ]
            ]));
        t.displayName = "IconChevronDown";
        var s = t;
        var o = e.i(628974);
        e.s([
            "PaidAdsTestimonialsReveal",
            0,
            ({ className, gridClassName, children })=>{
                let [i, setI] = n.useState(false);
                let d = "paid-ads-testimonial-grid";
                return a.jsxs("div", {
                    className: o.cn("relative", className),
                    children: [
                        a.jsx("div", {
                            id: d,
                            className: "relative overflow-hidden tablet:overflow-visible",
                            children: a.jsx("div", {
                                className: o.cn("grid grid-cols-1 gap-[1.8rem] tablet:gap-[2.4rem] md:grid-cols-2 lg:grid-cols-3", gridClassName, !i && "max-tablet:[&>*:nth-child(3)]:pointer-events-none max-tablet:[&>*:nth-child(3)]:select-none max-tablet:[&>*:nth-child(3)]:blur-[6px] max-tablet:[&>*:nth-child(n+4)]:hidden md:max-tablet:[&>*:nth-child(4)]:!flex md:max-tablet:[&>*:nth-child(4)]:pointer-events-none md:max-tablet:[&>*:nth-child(4)]:select-none md:max-tablet:[&>*:nth-child(4)]:blur-[6px] md:max-tablet:[&>*:nth-child(n+3)]:max-h-[15rem] md:max-tablet:[&>*:nth-child(n+3)]:overflow-hidden md:max-tablet:[&>*:nth-child(n+3)]:[mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]", i && "motion-safe:[&>*:nth-child(n+4)]:animate-[paid-ads-testimonials-reveal_420ms_ease-out_both] md:[&>*:nth-child(4)]:!animate-none"),
                                children
                            })
                        }),
                        !i && a.jsxs("button", {
                            type: "button",
                            className: "absolute bottom-[3.3rem] left-1/2 z-[4] flex w-[18rem] -translate-x-1/2 items-center justify-center gap-[1rem] overflow-hidden rounded-[1.2rem] border-[0.12rem] border-black/30 bg-white px-[1.2rem] py-[1.6rem] text-center text-[1.4rem] leading-[1.3] text-black tablet:hidden",
                            "aria-controls": d,
                            "aria-expanded": i,
                            onClick: ()=>setI(true),
                            children: [
                                a.jsx(s, {
                                    className: "size-[1.6rem] shrink-0",
                                    stroke: 2
                                }),
                                a.jsx("span", {
                                    children: "See all reviews"
                                })
                            ]
                        }),
                        a.jsx("style", {
                            children: `
        @keyframes paid-ads-testimonials-reveal {
          from {
            opacity: 0;
            transform: translateY(-1.2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
                        })
                    ]
                });
            }
        ], 634181);
    },
    665279,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "Image", {
            enumerable: true,
            get () {
                return w;
            }
        });
        let i = e.r(330053);
        let a = e.r(171266);
        let n = e.r(281889);
        let l = a._(e.r(513679));
        let s = i._(e.r(345078));
        let o = i._(e.r(111586));
        let d = e.r(18306);
        let u = e.r(433198);
        let c = e.r(453426);
        let m = e.r(239351);
        let f = i._(e.r(396674));
        let p = e.r(81378);
        let h = {
            deviceSizes: [
                640,
                750,
                828,
                1080,
                1200,
                1920,
                2048,
                3840
            ],
            imageSizes: [
                32,
                48,
                64,
                96,
                128,
                256,
                384
            ],
            qualities: [
                75
            ],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: false,
            unoptimized: false
        };
        function g(e, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, n, l) {
            let s = e?.src;
            if (e && e["data-loaded-src"] !== s) {
                e["data-loaded-src"] = s;
                ("decode" in e ? e.decode() : Promise.resolve()).catch(()=>{}).then(()=>{
                    if (e.parentElement && e.isConnected) {
                        if (placeholder !== "empty") {
                            setBlurComplete(true);
                        }
                        if (onLoadRef?.current) {
                            let nativeEvent = new Event("load");
                            Object.defineProperty(nativeEvent, "target", {
                                writable: false,
                                value: e
                            });
                            let i = false;
                            let a = false;
                            onLoadRef.current({
                                ...nativeEvent,
                                nativeEvent,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: ()=>i,
                                isPropagationStopped: ()=>a,
                                persist: ()=>{},
                                preventDefault: ()=>{
                                    i = true;
                                    nativeEvent.preventDefault();
                                },
                                stopPropagation: ()=>{
                                    a = true;
                                    nativeEvent.stopPropagation();
                                }
                            });
                        }
                        if (onLoadingCompleteRef?.current) {
                            onLoadingCompleteRef.current(e);
                        }
                    }
                });
            }
        }
        function b(fetchPriority) {
            if (l.use) {
                return {
                    fetchPriority
                };
            }
            return {
                fetchpriority: fetchPriority
            };
        }
        if (typeof window === "undefined") {
            globalThis.__NEXT_IMAGE_IMPORTED = true;
        }
        let y = typeof window === "undefined" ? l.useEffect : l.useLayoutEffect;
        let v = l.forwardRef(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, C)=>{
            let ORef = l.useRef(false);
            let RRef = l.useRef(null);
            y(()=>{
                let { current } = ORef;
                let { current: current_1 } = RRef;
                if (!(current || current_1 === null)) {
                    if (onError) {
                        current_1.src = current_1.src;
                    }
                    if (current_1.complete) {
                        g(current_1, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
                    }
                    ORef.current = true;
                }
            }, [
                src,
                placeholder,
                onLoadRef,
                onLoadingCompleteRef,
                onError,
                unoptimized,
                sizesInput
            ]);
            let k = p.useMergedRef(C, RRef);
            return n.jsx("img", {
                ...rest,
                ...b(fetchPriority),
                loading,
                width,
                height,
                decoding,
                "data-nimg": fill ? "fill" : "1",
                className,
                style,
                sizes,
                srcSet,
                src,
                ref: k,
                onLoad: (e)=>{
                    g(e.currentTarget, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
                },
                onError: (e)=>{
                    setShowAltText(true);
                    if (placeholder !== "empty") {
                        setBlurComplete(true);
                    }
                    if (onError) {
                        onError(e);
                    }
                }
            });
        });
        function x({ isAppRouter, imgAttributes }) {
            let r = {
                as: "image",
                imageSrcSet: imgAttributes.srcSet,
                imageSizes: imgAttributes.sizes,
                crossOrigin: imgAttributes.crossOrigin,
                referrerPolicy: imgAttributes.referrerPolicy,
                ...b(imgAttributes.fetchPriority)
            };
            if (isAppRouter && s.default.preload) {
                s.default.preload(imgAttributes.src, r);
                return null;
            }
            return n.jsx(o.default, {
                children: n.jsx("link", {
                    rel: "preload",
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    ...r
                }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
            });
        }
        let w = l.forwardRef((e, t)=>{
            let r = l.useContext(m.RouterContext);
            let i = l.useContext(c.ImageConfigContext);
            let imgConf = l.useMemo(()=>{
                let e = h || i || u.imageConfigDefault;
                let t = [
                    ...e.deviceSizes,
                    ...e.imageSizes
                ].sort((e, t)=>e - t);
                let r = e.deviceSizes.sort((e, t)=>e - t);
                let a = e.qualities?.sort((e, t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: a,
                    localPatterns: typeof window === "undefined" ? i?.localPatterns : e.localPatterns
                };
            }, [
                i
            ]);
            let { onLoad, onLoadingComplete } = e;
            let pRef = l.useRef(onLoad);
            l.useEffect(()=>{
                pRef.current = onLoad;
            }, [
                onLoad
            ]);
            let gRef = l.useRef(onLoadingComplete);
            l.useEffect(()=>{
                gRef.current = onLoadingComplete;
            }, [
                onLoadingComplete
            ]);
            let [blurComplete, setBlurComplete] = l.useState(false);
            let [showAltText, setShowAltText] = l.useState(false);
            let { props, meta } = d.getImgProps(e, {
                defaultLoader: f.default,
                imgConf,
                blurComplete,
                showAltText
            });
            return n.jsxs(n.Fragment, {
                children: [
                    n.jsx(v, {
                        ...props,
                        unoptimized: meta.unoptimized,
                        placeholder: meta.placeholder,
                        fill: meta.fill,
                        onLoadRef: pRef,
                        onLoadingCompleteRef: gRef,
                        setBlurComplete,
                        setShowAltText,
                        sizesInput: e.sizes,
                        ref: t
                    }),
                    meta.preload ? n.jsx(x, {
                        isAppRouter: !r,
                        imgAttributes: props
                    }) : null
                ]
            });
        });
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    156974,
    (e, t, r)=>{
        "use strict";
        function i(e, t) {
            let r = e || 75;
            if (t?.qualities?.length) {
                return t.qualities.reduce((acc, quality)=>{
                    if (Math.abs(quality - r) < Math.abs(acc - r)) {
                        return quality;
                    }
                    return acc;
                }, t.qualities[0]);
            }
            return r;
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "findClosestQuality", {
            enumerable: true,
            get () {
                return i;
            }
        });
    },
    18306,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "getImgProps", {
            enumerable: true,
            get () {
                return d;
            }
        });
        let i = e.r(823971);
        let a = e.r(521222);
        let n = e.r(433198);
        let l = [
            "-moz-initial",
            "fill",
            "none",
            "scale-down",
            undefined
        ];
        function s(e) {
            return e.default !== undefined;
        }
        function o(e) {
            if (e === undefined) {
                return e;
            }
            if (typeof e === "number") {
                if (Number.isFinite(e)) {
                    return e;
                }
                return NaN;
            }
            if (typeof e === "string" && /^[0-9]+$/.test(e)) {
                return parseInt(e, 10);
            }
            return NaN;
        }
        function d({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, z) {
            let M;
            let config;
            let blurWidth;
            let blurHeight;
            let { imgConf, showAltText, blurComplete, defaultLoader } = z;
            let U = imgConf || n.imageConfigDefault;
            if ("allSizes" in U) {
                config = U;
            } else {
                let e = [
                    ...U.deviceSizes,
                    ...U.imageSizes
                ].sort((e, t)=>e - t);
                let t = U.deviceSizes.sort((e, t)=>e - t);
                let r = U.qualities?.sort((e, t)=>e - t);
                config = {
                    ...U,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: r
                };
            }
            if (defaultLoader === undefined) {
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: false,
                    configurable: true
                });
            }
            let loader = rest.loader || defaultLoader;
            delete rest.loader;
            delete rest.srcSet;
            let W = "__next_img_default" in loader;
            if (W) {
                if (config.loader === "custom") {
                    throw Object.defineProperty(Error(`Image with src "${src}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                let e = loader;
                loader = (t)=>{
                    let { config, ...rest } = t;
                    return e(rest);
                };
            }
            if (layout) {
                if (layout === "fill") {
                    fill = true;
                }
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[layout];
                if (e) {
                    style = {
                        ...style,
                        ...e
                    };
                }
                let r = {
                    responsive: "100vw",
                    fill: "100vw"
                }[layout];
                if (r && !sizes) {
                    sizes = r;
                }
            }
            let G = "";
            let q = o(width);
            let X = o(height);
            if ((M = src) && typeof M === "object" && (s(M) || M.src !== undefined)) {
                let t = s(src) ? src.default : src;
                if (!t.src) {
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (!t.height || !t.width) {
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: false,
                        configurable: true
                    });
                }
                blurWidth = t.blurWidth;
                blurHeight = t.blurHeight;
                blurDataURL = blurDataURL || t.blurDataURL;
                G = t.src;
                if (!fill) {
                    if (q || X) {
                        if (q && !X) {
                            let e = q / t.width;
                            X = Math.round(t.height * e);
                        } else if (!q && X) {
                            let e = X / t.height;
                            q = Math.round(t.width * e);
                        }
                    } else {
                        q = t.width;
                        X = t.height;
                    }
                }
            }
            let H = !priority && !preload && (loading === "lazy" || loading === undefined);
            if (!(src = typeof src === "string" ? src : G) || src.startsWith("data:") || src.startsWith("blob:")) {
                unoptimized = true;
                H = false;
            }
            if (config.unoptimized) {
                unoptimized = true;
            }
            if (W && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
                unoptimized = true;
            }
            let quality_1 = o(quality);
            let Y = Object.assign(fill ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit,
                objectPosition
            } : {}, showAltText ? {} : {
                color: "transparent"
            }, style);
            let backgroundImage = blurComplete || placeholder === "empty" ? null : placeholder === "blur" ? `url("data:image/svg+xml;charset=utf-8,${a.getImageBlurSvg({
                widthInt: q,
                heightInt: X,
                blurWidth,
                blurHeight,
                blurDataURL: blurDataURL || "",
                objectFit: Y.objectFit
            })}")` : `url("${placeholder}")`;
            let backgroundSize = l.includes(Y.objectFit) ? Y.objectFit === "fill" ? "100% 100%" : "cover" : Y.objectFit;
            let K = backgroundImage ? {
                backgroundSize,
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage
            } : {};
            let Q = (({ config, src, unoptimized, width, quality, sizes, loader })=>{
                if (unoptimized) {
                    if (src.startsWith("/") && !src.startsWith("//")) {
                        let e = i.getDeploymentId();
                        if (src.includes("/_next/static/immutable") && !i.getAssetToken()) {
                            e = undefined;
                        } else if (e) {
                            let r = src.indexOf("?");
                            if (-1 !== r) {
                                let i = new URLSearchParams(src.slice(r + 1));
                                if (!i.get("dpl")) {
                                    i.append("dpl", e);
                                    src = src.slice(0, r) + "?" + i.toString();
                                }
                            } else {
                                src += `?dpl=${e}`;
                            }
                        }
                    }
                    return {
                        src,
                        srcSet: undefined,
                        sizes: undefined
                    };
                }
                let { widths, kind } = (({ deviceSizes, allSizes }, r, i)=>{
                    if (i) {
                        let r = /(^|\s)(1?\d?\d)vw/g;
                        let a = [];
                        for(let e; e = r.exec(i);){
                            a.push(parseInt(e[2]));
                        }
                        if (a.length) {
                            let r = 0.01 * Math.min(...a);
                            return {
                                widths: allSizes.filter((t)=>t >= deviceSizes[0] * r),
                                kind: "w"
                            };
                        }
                        return {
                            widths: allSizes,
                            kind: "w"
                        };
                    }
                    if (typeof r !== "number") {
                        return {
                            widths: deviceSizes,
                            kind: "w"
                        };
                    }
                    return {
                        widths: [
                            ...new Set([
                                r,
                                2 * r
                            ].map((e)=>allSizes.find((t)=>t >= e) || allSizes[allSizes.length - 1]))
                        ],
                        kind: "x"
                    };
                })(config, width, sizes);
                let u = widths.length - 1;
                return {
                    sizes: sizes || kind !== "w" ? sizes : "100vw",
                    srcSet: widths.map((width_1, i)=>`${loader({
                            config,
                            src,
                            quality,
                            width: width_1
                        })} ${kind === "w" ? width_1 : i + 1}${kind}`).join(", "),
                    src: loader({
                        config,
                        src,
                        quality,
                        width: widths[u]
                    })
                };
            })({
                config,
                src,
                unoptimized,
                width: q,
                quality: quality_1,
                sizes,
                loader
            });
            let loading_1 = H ? "lazy" : loading;
            return {
                props: {
                    ...rest,
                    loading: loading_1,
                    fetchPriority,
                    width: q,
                    height: X,
                    decoding,
                    className,
                    style: {
                        ...Y,
                        ...K
                    },
                    sizes: Q.sizes,
                    srcSet: Q.srcSet,
                    src: overrideSrc || Q.src
                },
                meta: {
                    unoptimized,
                    preload: preload || priority,
                    placeholder,
                    fill
                }
            };
        }
    },
    111586,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var i = {
            default () {
                return useH;
            },
            defaultHead () {
                return c;
            }
        };
        for(var a in i){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: i[a]
            });
        }
        let n = e.r(330053);
        let l = e.r(171266);
        let s = e.r(281889);
        let o = l._(e.r(513679));
        let d = n._(e.r(194094));
        let u = e.r(543091);
        function c() {
            return [
                s.jsx("meta", {
                    charSet: "utf-8"
                }, "charset"),
                s.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")
            ];
        }
        function m(e, t) {
            if (typeof t === "string" || typeof t === "number") {
                return e;
            }
            if (t.type === o.default.Fragment) {
                return e.concat(o.default.Children.toArray(t.props.children).reduce((acc, item)=>{
                    if (typeof item === "string" || typeof item === "number") {
                        return acc;
                    }
                    return acc.concat(item);
                }, []));
            }
            return e.concat(t);
        }
        let f = [
            "name",
            "httpEquiv",
            "charSet",
            "itemProp"
        ];
        function reduceComponentsToState(e) {
            let t;
            let r;
            let i;
            let a;
            return e.reduce(m, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, i = new Set, a = {}, (e)=>{
                let n = true;
                let l = false;
                if (e.key && typeof e.key !== "number" && e.key.indexOf("$") > 0) {
                    l = true;
                    let r = e.key.slice(e.key.indexOf("$") + 1);
                    if (t.has(r)) {
                        n = false;
                    } else {
                        t.add(r);
                    }
                }
                switch(e.type){
                    case "title":
                    case "base":
                        if (r.has(e.type)) {
                            n = false;
                        } else {
                            r.add(e.type);
                        }
                        break;
                    case "meta":
                        for(let t = 0, r = f.length; t < r; t++){
                            let r = f[t];
                            if (e.props.hasOwnProperty(r)) {
                                if (r === "charSet") {
                                    if (i.has(r)) {
                                        n = false;
                                    } else {
                                        i.add(r);
                                    }
                                } else {
                                    let t = e.props[r];
                                    let i = a[r] || new Set;
                                    if ((r !== "name" || !l) && i.has(t)) {
                                        n = false;
                                    } else {
                                        i.add(t);
                                        a[r] = i;
                                    }
                                }
                            }
                        }
                }
                return n;
            })).reverse().map((e, t)=>{
                let key = e.key || t;
                return o.default.cloneElement(e, {
                    key
                });
            });
        }
        let useH = ({ children })=>{
            let headManager = o.useContext(u.HeadManagerContext);
            return s.jsx(d.default, {
                reduceComponentsToState,
                headManager,
                children
            });
        };
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    521222,
    (e, t, r)=>{
        "use strict";
        function i({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
            let s = blurWidth ? 40 * blurWidth : widthInt;
            let o = blurHeight ? 40 * blurHeight : heightInt;
            let d = s && o ? `viewBox='0 0 ${s} ${o}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "getImageBlurSvg", {
            enumerable: true,
            get () {
                return i;
            }
        });
    },
    453426,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "ImageConfigContext", {
            enumerable: true,
            get () {
                return NContext;
            }
        });
        let i = e.r(330053)._(e.r(513679));
        let a = e.r(433198);
        let NContext = i.default.createContext(a.imageConfigDefault);
    },
    433198,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var i = {
            VALID_LOADERS () {
                return n;
            },
            imageConfigDefault () {
                return l;
            }
        };
        for(var a in i){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: i[a]
            });
        }
        let n = [
            "default",
            "imgix",
            "cloudinary",
            "akamai",
            "custom"
        ];
        let l = {
            deviceSizes: [
                640,
                750,
                828,
                1080,
                1200,
                1920,
                2048,
                3840
            ],
            imageSizes: [
                32,
                48,
                64,
                96,
                128,
                256,
                384
            ],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: false,
            minimumCacheTTL: 14400,
            formats: [
                "image/webp"
            ],
            maximumDiskCacheSize: undefined,
            maximumRedirects: 3,
            maximumResponseBody: 50000000,
            dangerouslyAllowLocalIP: false,
            dangerouslyAllowSVG: false,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: undefined,
            remotePatterns: [],
            qualities: [
                75
            ],
            unoptimized: false,
            customCacheHandler: false
        };
    },
    396674,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "default", {
            enumerable: true,
            get () {
                return l;
            }
        });
        let i = e.r(156974);
        let a = e.r(823971);
        function n({ config, src, width, quality }) {
            let s = a.getDeploymentId();
            if (src.startsWith("/") && !src.startsWith("//")) {
                if (src.includes("/_next/static/immutable") && !a.getAssetToken()) {
                    s = undefined;
                } else {
                    let e = src.indexOf("?");
                    if (-1 !== e) {
                        let r = new URLSearchParams(src.slice(e + 1));
                        let i = r.get("dpl");
                        if (i) {
                            s = i;
                            r.delete("dpl");
                            let a = r.toString();
                            src = src.slice(0, e) + (a ? "?" + a : "");
                        }
                    }
                }
            }
            if (src.startsWith("/") && src.includes("?") && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === "**" && config.localPatterns[0].search === "") {
                throw Object.defineProperty(Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                    value: "E871",
                    enumerable: false,
                    configurable: true
                });
            }
            let o = i.findClosestQuality(quality, config);
            return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${o}${src.startsWith("/") && s ? `&dpl=${s}` : ""}`;
        }
        n.__next_img_default = true;
        let l = n;
    },
    194094,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "default", {
            enumerable: true,
            get () {
                return s;
            }
        });
        let i = e.r(513679);
        let a = typeof window === "undefined";
        let n = a ? ()=>{} : i.useLayoutEffect;
        let l = a ? ()=>{} : i.useEffect;
        function s(e) {
            let { headManager, reduceComponentsToState } = e;
            function s() {
                if (headManager && headManager.mountedInstances) {
                    let e = i.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
                    headManager.updateHead(reduceComponentsToState(e));
                }
            }
            if (a) {
                headManager?.mountedInstances?.add(e.children);
                s();
            }
            n(()=>{
                headManager?.mountedInstances?.add(e.children);
                return ()=>{
                    headManager?.mountedInstances?.delete(e.children);
                };
            });
            n(()=>{
                if (headManager) {
                    headManager._pendingUpdate = s;
                }
                return ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = s;
                    }
                };
            });
            l(()=>{
                if (headManager && headManager._pendingUpdate) {
                    headManager._pendingUpdate();
                    headManager._pendingUpdate = null;
                }
                return ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                };
            });
            return null;
        }
    }
]);
