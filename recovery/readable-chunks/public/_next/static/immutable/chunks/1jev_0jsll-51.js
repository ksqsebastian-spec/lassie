;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "bfcc5dc2-ca87-8a36-fb75-bedfc4fb8ed0";
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
                let a = r.getSplashAttributionPath(window.location.pathname);
                let s = new URL(window.location.href).searchParams.get("rep");
                let o = new URL(`https://lassie.ai${forwardUrl}`);
                o.searchParams.set("email", email);
                o.searchParams.set("splash", a);
                o.searchParams.set("source", "www");
                if (s) {
                    o.searchParams.set("rep", s);
                }
                navigate(o.toString());
            }
        ]);
    },
    916747,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(865670);
        var i = e.i(22493);
        var n = e.i(628974);
        var a = e.i(300778);
        var s = e.i(513679);
        e.i(265121);
        var o = e.i(279206);
        e.s([
            "EmailForm",
            0,
            ({ forwardUrl, className, placeholder = "Your email", autoFocus = false, id, buttonText = "Get started", hideCustomerButton = false })=>{
                let p = a.useRouter();
                let h = i.useIsCustomer();
                let [g, setG] = s.useState(()=>new URL(window.location.href).searchParams.get("email") ?? "");
                let y = s.useMemo(()=>g && g.match(r.EMAIL_PATTERN) !== null, [
                    g
                ]);
                let v = s.useId();
                let w = id ?? v;
                if (h && !hideCustomerButton) {
                    return t.jsx(o.ButtonPrimary, {
                        theme: "secondary",
                        as: "a",
                        href: "https://app.lassie.ai",
                        children: "Go to dashboard"
                    });
                }
                return t.jsxs("form", {
                    className: n.cn("group/form flex flex-col gap-[0.8rem]", className),
                    onSubmit: (t)=>{
                        t.preventDefault();
                        if (!g) {
                            let e = document.getElementById(w);
                            if (e) {
                                e.required = true;
                                e.reportValidity();
                                let t = ()=>{
                                    e.required = false;
                                    e.removeEventListener("focus", t);
                                    e.removeEventListener("blur", t);
                                    e.removeEventListener("input", t);
                                };
                                e.addEventListener("focus", t);
                                e.addEventListener("blur", t);
                                e.addEventListener("input", t);
                            }
                            return;
                        }
                        r.submitMarketingEmailForm({
                            email: g,
                            forwardUrl,
                            navigate: (e)=>p.push(e)
                        });
                    },
                    children: [
                        t.jsxs("div", {
                            className: n.cn("relative flex flex-row items-center justify-center overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-surface-primary lg:justify-start h-[5.6rem] py-[0.6rem] pr-[0.6rem] gap-[1.6rem] has-[:focus-visible]:border-blue-500 has-[:focus-visible]:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", "has-[button:focus-visible]:border-transparent has-[button:focus-visible]:shadow-none"),
                            children: [
                                t.jsx("input", {
                                    id: w,
                                    type: "email",
                                    "data-1p-ignore": true,
                                    title: "Please enter a valid email address",
                                    pattern: r.EMAIL_PATTERN,
                                    placeholder,
                                    autoComplete: "email",
                                    className: "h-full w-full flex-1 border-none bg-transparent pl-[1.6rem] font-body text-[16px] leading-[130%] text-text-primary outline-hidden placeholder:text-text-secondary group-hover/form:placeholder:text-text-primary tablet:text-[1.6rem] desktop:text-[1.7rem]",
                                    value: g,
                                    onChange: (e)=>setG(e.target.value),
                                    autoFocus
                                }),
                                t.jsx("label", {
                                    htmlFor: w,
                                    className: "sr-only",
                                    children: "Email"
                                }),
                                t.jsx("div", {
                                    className: "flex flex-shrink-0 items-center justify-center",
                                    children: t.jsx(o.ButtonPrimary, {
                                        theme: "secondary",
                                        type: "submit",
                                        className: "hidden sm:flex",
                                        disabled: !y,
                                        withIcon: false,
                                        children: buttonText
                                    })
                                })
                            ]
                        }),
                        t.jsx(o.ButtonPrimary, {
                            theme: "secondary",
                            type: "submit",
                            className: "flex sm:hidden justify-center",
                            disabled: !y,
                            withIcon: false,
                            children: buttonText
                        })
                    ]
                });
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
    239003,
    (e)=>{
        "use strict";
        var t = e.i(513679);
        var r = e.i(276522);
        e.s([
            "default",
            0,
            ()=>{
                let { setBgTheme } = r.useNav();
                t.useEffect(()=>{
                    setBgTheme("light");
                }, []);
                return null;
            }
        ]);
    },
    22493,
    (e)=>{
        "use strict";
        var t = e.i(276522);
        e.s([
            "useIsCustomer",
            0,
            ()=>{
                let { isCustomer } = t.useNav();
                return isCustomer;
            }
        ]);
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
                return _;
            }
        });
        let i = e.r(330053);
        let n = e.r(171266);
        let a = e.r(281889);
        let s = n._(e.r(513679));
        let o = i._(e.r(345078));
        let l = i._(e.r(111586));
        let u = e.r(18306);
        let d = e.r(433198);
        let c = e.r(453426);
        let f = e.r(239351);
        let m = i._(e.r(396674));
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
        function g(e, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, a, s) {
            let o = e?.src;
            if (e && e["data-loaded-src"] !== o) {
                e["data-loaded-src"] = o;
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
                            let n = false;
                            onLoadRef.current({
                                ...nativeEvent,
                                nativeEvent,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: ()=>i,
                                isPropagationStopped: ()=>n,
                                persist: ()=>{},
                                preventDefault: ()=>{
                                    i = true;
                                    nativeEvent.preventDefault();
                                },
                                stopPropagation: ()=>{
                                    n = true;
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
            if (s.use) {
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
        let y = typeof window === "undefined" ? s.useEffect : s.useLayoutEffect;
        let v = s.forwardRef(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, C)=>{
            let ORef = s.useRef(false);
            let RRef = s.useRef(null);
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
            let I = p.useMergedRef(C, RRef);
            return a.jsx("img", {
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
                ref: I,
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
        function w({ isAppRouter, imgAttributes }) {
            let r = {
                as: "image",
                imageSrcSet: imgAttributes.srcSet,
                imageSizes: imgAttributes.sizes,
                crossOrigin: imgAttributes.crossOrigin,
                referrerPolicy: imgAttributes.referrerPolicy,
                ...b(imgAttributes.fetchPriority)
            };
            if (isAppRouter && o.default.preload) {
                o.default.preload(imgAttributes.src, r);
                return null;
            }
            return a.jsx(l.default, {
                children: a.jsx("link", {
                    rel: "preload",
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    ...r
                }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
            });
        }
        let _ = s.forwardRef((e, t)=>{
            let r = s.useContext(f.RouterContext);
            let i = s.useContext(c.ImageConfigContext);
            let imgConf = s.useMemo(()=>{
                let e = h || i || d.imageConfigDefault;
                let t = [
                    ...e.deviceSizes,
                    ...e.imageSizes
                ].sort((e, t)=>e - t);
                let r = e.deviceSizes.sort((e, t)=>e - t);
                let n = e.qualities?.sort((e, t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: typeof window === "undefined" ? i?.localPatterns : e.localPatterns
                };
            }, [
                i
            ]);
            let { onLoad, onLoadingComplete } = e;
            let pRef = s.useRef(onLoad);
            s.useEffect(()=>{
                pRef.current = onLoad;
            }, [
                onLoad
            ]);
            let gRef = s.useRef(onLoadingComplete);
            s.useEffect(()=>{
                gRef.current = onLoadingComplete;
            }, [
                onLoadingComplete
            ]);
            let [blurComplete, setBlurComplete] = s.useState(false);
            let [showAltText, setShowAltText] = s.useState(false);
            let { props, meta } = u.getImgProps(e, {
                defaultLoader: m.default,
                imgConf,
                blurComplete,
                showAltText
            });
            return a.jsxs(a.Fragment, {
                children: [
                    a.jsx(v, {
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
                    meta.preload ? a.jsx(w, {
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
                return u;
            }
        });
        let i = e.r(823971);
        let n = e.r(521222);
        let a = e.r(433198);
        let s = [
            "-moz-initial",
            "fill",
            "none",
            "scale-down",
            undefined
        ];
        function o(e) {
            return e.default !== undefined;
        }
        function l(e) {
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
        function u({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, z) {
            let A;
            let config;
            let blurWidth;
            let blurHeight;
            let { imgConf, showAltText, blurComplete, defaultLoader } = z;
            let F = imgConf || a.imageConfigDefault;
            if ("allSizes" in F) {
                config = F;
            } else {
                let e = [
                    ...F.deviceSizes,
                    ...F.imageSizes
                ].sort((e, t)=>e - t);
                let t = F.deviceSizes.sort((e, t)=>e - t);
                let r = F.qualities?.sort((e, t)=>e - t);
                config = {
                    ...F,
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
            let q = "__next_img_default" in loader;
            if (q) {
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
            let W = "";
            let G = l(width);
            let X = l(height);
            if ((A = src) && typeof A === "object" && (o(A) || A.src !== undefined)) {
                let t = o(src) ? src.default : src;
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
                W = t.src;
                if (!fill) {
                    if (G || X) {
                        if (G && !X) {
                            let e = G / t.width;
                            X = Math.round(t.height * e);
                        } else if (!G && X) {
                            let e = X / t.height;
                            G = Math.round(t.width * e);
                        }
                    } else {
                        G = t.width;
                        X = t.height;
                    }
                }
            }
            let H = !priority && !preload && (loading === "lazy" || loading === undefined);
            if (!(src = typeof src === "string" ? src : W) || src.startsWith("data:") || src.startsWith("blob:")) {
                unoptimized = true;
                H = false;
            }
            if (config.unoptimized) {
                unoptimized = true;
            }
            if (q && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
                unoptimized = true;
            }
            let quality_1 = l(quality);
            let Z = Object.assign(fill ? {
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
            let backgroundImage = blurComplete || placeholder === "empty" ? null : placeholder === "blur" ? `url("data:image/svg+xml;charset=utf-8,${n.getImageBlurSvg({
                widthInt: G,
                heightInt: X,
                blurWidth,
                blurHeight,
                blurDataURL: blurDataURL || "",
                objectFit: Z.objectFit
            })}")` : `url("${placeholder}")`;
            let backgroundSize = s.includes(Z.objectFit) ? Z.objectFit === "fill" ? "100% 100%" : "cover" : Z.objectFit;
            let K = backgroundImage ? {
                backgroundSize,
                backgroundPosition: Z.objectPosition || "50% 50%",
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
                        let n = [];
                        for(let e; e = r.exec(i);){
                            n.push(parseInt(e[2]));
                        }
                        if (n.length) {
                            let r = 0.01 * Math.min(...n);
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
                let d = widths.length - 1;
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
                        width: widths[d]
                    })
                };
            })({
                config,
                src,
                unoptimized,
                width: G,
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
                    width: G,
                    height: X,
                    decoding,
                    className,
                    style: {
                        ...Z,
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
        for(var n in i){
            Object.defineProperty(r, n, {
                enumerable: true,
                get: i[n]
            });
        }
        let a = e.r(330053);
        let s = e.r(171266);
        let o = e.r(281889);
        let l = s._(e.r(513679));
        let u = a._(e.r(194094));
        let d = e.r(543091);
        function c() {
            return [
                o.jsx("meta", {
                    charSet: "utf-8"
                }, "charset"),
                o.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")
            ];
        }
        function f(e, t) {
            if (typeof t === "string" || typeof t === "number") {
                return e;
            }
            if (t.type === l.default.Fragment) {
                return e.concat(l.default.Children.toArray(t.props.children).reduce((acc, item)=>{
                    if (typeof item === "string" || typeof item === "number") {
                        return acc;
                    }
                    return acc.concat(item);
                }, []));
            }
            return e.concat(t);
        }
        let m = [
            "name",
            "httpEquiv",
            "charSet",
            "itemProp"
        ];
        function reduceComponentsToState(e) {
            let t;
            let r;
            let i;
            let n;
            return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, i = new Set, n = {}, (e)=>{
                let a = true;
                let s = false;
                if (e.key && typeof e.key !== "number" && e.key.indexOf("$") > 0) {
                    s = true;
                    let r = e.key.slice(e.key.indexOf("$") + 1);
                    if (t.has(r)) {
                        a = false;
                    } else {
                        t.add(r);
                    }
                }
                switch(e.type){
                    case "title":
                    case "base":
                        if (r.has(e.type)) {
                            a = false;
                        } else {
                            r.add(e.type);
                        }
                        break;
                    case "meta":
                        for(let t = 0, r = m.length; t < r; t++){
                            let r = m[t];
                            if (e.props.hasOwnProperty(r)) {
                                if (r === "charSet") {
                                    if (i.has(r)) {
                                        a = false;
                                    } else {
                                        i.add(r);
                                    }
                                } else {
                                    let t = e.props[r];
                                    let i = n[r] || new Set;
                                    if ((r !== "name" || !s) && i.has(t)) {
                                        a = false;
                                    } else {
                                        i.add(t);
                                        n[r] = i;
                                    }
                                }
                            }
                        }
                }
                return a;
            })).reverse().map((e, t)=>{
                let key = e.key || t;
                return l.default.cloneElement(e, {
                    key
                });
            });
        }
        let useH = ({ children })=>{
            let headManager = l.useContext(d.HeadManagerContext);
            return o.jsx(u.default, {
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
            let o = blurWidth ? 40 * blurWidth : widthInt;
            let l = blurHeight ? 40 * blurHeight : heightInt;
            let u = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
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
                return AContext;
            }
        });
        let i = e.r(330053)._(e.r(513679));
        let n = e.r(433198);
        let AContext = i.default.createContext(n.imageConfigDefault);
    },
    433198,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var i = {
            VALID_LOADERS () {
                return a;
            },
            imageConfigDefault () {
                return s;
            }
        };
        for(var n in i){
            Object.defineProperty(r, n, {
                enumerable: true,
                get: i[n]
            });
        }
        let a = [
            "default",
            "imgix",
            "cloudinary",
            "akamai",
            "custom"
        ];
        let s = {
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
                return s;
            }
        });
        let i = e.r(156974);
        let n = e.r(823971);
        function a({ config, src, width, quality }) {
            let o = n.getDeploymentId();
            if (src.startsWith("/") && !src.startsWith("//")) {
                if (src.includes("/_next/static/immutable") && !n.getAssetToken()) {
                    o = undefined;
                } else {
                    let e = src.indexOf("?");
                    if (-1 !== e) {
                        let r = new URLSearchParams(src.slice(e + 1));
                        let i = r.get("dpl");
                        if (i) {
                            o = i;
                            r.delete("dpl");
                            let n = r.toString();
                            src = src.slice(0, e) + (n ? "?" + n : "");
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
            let l = i.findClosestQuality(quality, config);
            return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${l}${src.startsWith("/") && o ? `&dpl=${o}` : ""}`;
        }
        a.__next_img_default = true;
        let s = a;
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
                return o;
            }
        });
        let i = e.r(513679);
        let n = typeof window === "undefined";
        let a = n ? ()=>{} : i.useLayoutEffect;
        let s = n ? ()=>{} : i.useEffect;
        function o(e) {
            let { headManager, reduceComponentsToState } = e;
            function o() {
                if (headManager && headManager.mountedInstances) {
                    let e = i.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
                    headManager.updateHead(reduceComponentsToState(e));
                }
            }
            if (n) {
                headManager?.mountedInstances?.add(e.children);
                o();
            }
            a(()=>{
                headManager?.mountedInstances?.add(e.children);
                return ()=>{
                    headManager?.mountedInstances?.delete(e.children);
                };
            });
            a(()=>{
                if (headManager) {
                    headManager._pendingUpdate = o;
                }
                return ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = o;
                    }
                };
            });
            s(()=>{
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
