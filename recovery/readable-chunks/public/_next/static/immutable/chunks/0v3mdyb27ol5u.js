;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "81e9573e-726e-8cd4-9bfd-8b33e78daf16";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    547478,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var n = e.i(513679);
        var i = e.i(581867);
        var r = e.i(324832);
        var s = e.i(628974);
        function a({ className, size = "default", theme = "light" }) {
            let m = size === "sm";
            let c = size === "homepage-nav-mobile";
            let l = size === "figma-nav";
            let d = theme === "light" ? "text-white" : "text-[#120C08]";
            if (size === "homepage-nav" || c) {
                return t.jsxs("div", {
                    className: s.cn("flex items-center", d, className),
                    children: [
                        t.jsx(i.FlowerLogo, {
                            className: s.cn("shrink-0", c ? "h-[3.8rem] w-[4.12rem]" : "w-[21px]")
                        }),
                        t.jsx("span", {
                            className: s.cn("inline-block overflow-hidden border-box", c ? "w-[10.7rem]" : "w-[53px]"),
                            children: t.jsx(r.LassieLogo, {
                                className: s.cn(c ? "ml-[0.8rem] h-[2.35rem] w-[9.9rem]" : "ml-[0.6rem] w-[47px]")
                            })
                        })
                    ]
                });
            }
            if (l || size === "figma-footer") {
                return t.jsxs("div", {
                    className: s.cn("flex items-center", d, className),
                    children: [
                        t.jsx(i.FlowerLogo, {
                            className: s.cn("shrink-0", l ? "h-[31.996px] w-[34.662px]" : "h-[49.994px] w-[54.16px]")
                        }),
                        t.jsx(r.LassieLogo, {
                            className: s.cn(l ? "ml-[4.933px] h-[19.776px] w-[82.948px]" : "ml-[7.707px] h-[30.9px] w-[129.606px]")
                        })
                    ]
                });
            }
            return t.jsxs("div", {
                className: s.cn("flex items-center", m ? "gap-[1.1rem]" : "gap-[1.35rem]", className),
                children: [
                    t.jsx(i.FlowerLogo, {
                        className: s.cn("shrink-0", d, m ? "h-[3.2rem] w-[3.47rem]" : "h-[5rem] w-[5.4rem]")
                    }),
                    t.jsx(r.LassieLogo, {
                        className: s.cn(d, m ? "h-[2rem] w-[8.3rem]" : "h-[3.1rem] w-[13rem]")
                    })
                ]
            });
        }
        var o = e.i(355455);
        function m({ className, ratingClassName, separatorClassName }) {
            return t.jsxs("p", {
                className: s.cn("text-[1.4rem] leading-[1.3] text-text-primary", className),
                children: [
                    t.jsx("span", {
                        className: s.cn("text-[1.6rem] font-bold text-text-primary", ratingClassName),
                        children: "★ 4.8"
                    }),
                    t.jsx("span", {
                        className: s.cn("mx-[0.6rem] font-bold", separatorClassName),
                        children: "·"
                    }),
                    "Trusted by 1,000+ dentists"
                ]
            });
        }
        let c = "(min-width: 1024px)";
        function l(e, t) {
            if (typeof e.addEventListener === "function") {
                e.addEventListener("change", t);
                return ()=>{
                    e.removeEventListener("change", t);
                };
            }
            if (typeof e.addListener === "function") {
                e.addListener(t);
            }
            return ()=>{
                e.removeListener?.(t);
            };
        }
        function d(e) {
            let t = 0;
            let n = ()=>{
                window.cancelAnimationFrame(t);
                t = window.requestAnimationFrame(e);
            };
            n();
            window.addEventListener("scroll", n, {
                passive: true
            });
            window.addEventListener("resize", n);
            return ()=>{
                window.cancelAnimationFrame(t);
                window.removeEventListener("scroll", n);
                window.removeEventListener("resize", n);
            };
        }
        e.s([
            "PaidAdsFloatingDesktopNav",
            0,
            ()=>{
                let [e, setE] = n.useState(false);
                n.useEffect(()=>{
                    let e = document.getElementById("hero");
                    if (!e) {
                        return;
                    }
                    let t = window.matchMedia(c);
                    let t_matches = t.matches;
                    let r = false;
                    let s = ()=>{
                        setE(t_matches && r);
                    };
                    let a = ()=>{
                        r = e.getBoundingClientRect().bottom <= 0;
                        s();
                    };
                    a();
                    let o = l(t, (e)=>{
                        t_matches = e.matches;
                        a();
                    });
                    if (!("IntersectionObserver" in window)) {
                        let e = d(a);
                        return ()=>{
                            e();
                            o();
                        };
                    }
                    let m = new IntersectionObserver(([e])=>{
                        r = !e.isIntersecting && e.boundingClientRect.bottom <= 0;
                        s();
                    }, {
                        threshold: 0
                    });
                    m.observe(e);
                    return ()=>{
                        m.disconnect();
                        o();
                    };
                }, []);
                return t.jsxs("nav", {
                    className: s.cn("fixed left-1/2 top-[1rem] z-50 hidden w-[calc(100%-2rem)] max-w-[132rem] -translate-x-1/2 items-center justify-between gap-[2rem] rounded-[1.6rem] bg-[rgba(120,96,25,0.1)] px-[2rem] py-[0.8rem] backdrop-blur-[5px] transition-all duration-200 tablet:flex", e ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[calc(100%+2rem)] opacity-0"),
                    "aria-hidden": !e,
                    children: [
                        t.jsx(a, {
                            size: "homepage-nav",
                            theme: "dark"
                        }),
                        t.jsxs("div", {
                            className: "flex min-w-0 flex-1 items-center justify-end gap-[2rem]",
                            children: [
                                t.jsx(m, {}),
                                t.jsx(o.PaidAdsEmailForm, {
                                    variant: "compact",
                                    placeholder: "What's your email?",
                                    submitLabel: "Book a demo",
                                    className: "shrink-0 max-w-[34rem]"
                                })
                            ]
                        })
                    ]
                });
            },
            "PaidAdsStickyEmailForm",
            0,
            ()=>{
                let [e, setE] = n.useState(false);
                n.useEffect(()=>{
                    let e = document.getElementById("paid-ads-hero-email-form");
                    let t = document.getElementById("paid-ads-footer");
                    if (!e || !t) {
                        return;
                    }
                    let n = window.matchMedia(c);
                    let r = !n.matches;
                    let s = false;
                    let a = false;
                    let o = ()=>{
                        setE(r && s && !a);
                    };
                    let m = ()=>{
                        let n;
                        s = e.getBoundingClientRect().bottom <= 0;
                        a = (n = t.getBoundingClientRect()).bottom > 0 && n.top < window.innerHeight;
                        o();
                    };
                    m();
                    let x = l(n, (e)=>{
                        r = !e.matches;
                        m();
                    });
                    if (!("IntersectionObserver" in window)) {
                        let e = d(m);
                        return ()=>{
                            e();
                            x();
                        };
                    }
                    let h = new IntersectionObserver(([e])=>{
                        s = !e.isIntersecting && e.boundingClientRect.bottom <= 0;
                        o();
                    }, {
                        threshold: 0
                    });
                    let w = new IntersectionObserver(([e])=>{
                        a = e.isIntersecting;
                        o();
                    }, {
                        threshold: 0
                    });
                    h.observe(e);
                    w.observe(t);
                    return ()=>{
                        h.disconnect();
                        w.disconnect();
                        x();
                    };
                }, []);
                return t.jsx("div", {
                    "data-paid-ads-sticky-email-form": true,
                    className: s.cn("fixed inset-x-0 bottom-[1rem] z-50 px-[1rem] transition-all duration-200 tablet:hidden", e ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[calc(100%+2rem)] opacity-0"),
                    style: {
                        bottom: "calc(1rem + env(safe-area-inset-bottom))"
                    },
                    "aria-hidden": !e,
                    children: t.jsx(o.PaidAdsEmailForm, {
                        className: "max-w-none"
                    })
                });
            }
        ], 547478);
    },
    840612,
    (e)=>{
        e.n(e.i(547478));
    }
]);
