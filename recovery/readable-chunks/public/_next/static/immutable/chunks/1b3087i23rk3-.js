;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b6d17e7b-297c-cc97-a695-e027f05a8d0b";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    828633,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(176418);
        var n = e.i(809393);
        var a = e.i(983871);
        var i = e.i(607198);
        var s = e.i(513679);
        var o = e.i(41049);
        var l = e.i(990055);
        var d = e.i(726215);
        let useU = ({ className, textAlign = "right", descriptionTitle, descriptionBody, videoURL, index, posterURL, ref })=>{
            let fRef = s.useRef(null);
            s.useEffect(()=>{
                let fRef_current = fRef.current;
                if (!fRef_current) {
                    return;
                }
                let t = new IntersectionObserver(([t])=>{
                    if (t.isIntersecting && fRef_current.src !== videoURL) {
                        fRef_current.src = videoURL;
                        fRef_current.load();
                    }
                }, {
                    threshold: 0.1
                });
                t.observe(fRef_current);
                return ()=>{
                    t.disconnect();
                    fRef_current.pause();
                };
            }, [
                videoURL
            ]);
            return t.jsx("div", {
                ref,
                className: n.default("absolute inset-x-0 top-[25vw] tablet:right-auto tablet:left-0 mx-auto flex tablet:h-full w-full max-w-[50rem] tablet:max-w-none flex-col items-center justify-center px-[1.6rem]", "desktop:top-0 tablet:top-[3rem] tablet:py-0", className),
                children: t.jsxs("div", {
                    className: n.default("relative aspect-[362/346] h-full tablet:w-auto w-full", "desktop:top-[2rem] tablet:top-[4rem] tablet:aspect-[975/614] tablet:h-[90%]", "desktop:aspect-[1100/693]"),
                    children: [
                        t.jsx("article", {
                            className: n.default(textAlign === "left" ? "description absolute top-[-2.5rem] translate-y-[-100%] max-w-[90%] desktop:max-w-[25.7rem] tablet:max-w-[50rem] tablet:top-[-2rem] desktop:top-[calc(50%+4.5rem)] desktop:translate-x-[calc(-100%-2.8rem)]" : "description absolute top-[-2.4rem] translate-y-[-100%] max-w-[90%] tablet:max-w-[50rem] w-auto tablet:top-[-2rem] desktop:top-[calc(50%+4.5rem)] desktop:translate-x-[calc(100%+3rem)] desktopLarge:translate-x-[calc(100%+3.1rem)] desktop:right-0", "desktop:max-w-[25.7rem]"),
                            children: t.jsxs("div", {
                                className: n.default("description-animation relative", index !== 1 ? "opacity-0" : "opacity-100"),
                                children: [
                                    t.jsx("h3", {
                                        className: n.default("mb-[1.2rem] desktop:max-w-[100%] text-balance text-heading-sm text-text-primary"),
                                        children: descriptionTitle
                                    }),
                                    t.jsx("p", {
                                        className: n.default("text-body-sm text-text-secondary"),
                                        children: descriptionBody
                                    })
                                ]
                            })
                        }),
                        t.jsxs("div", {
                            className: n.default("video relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#F9F8F5]", "pointer-events-none desktop:rounded-[6.4rem] tablet:rounded-[5.6rem]"),
                            children: [
                                t.jsx("video", {
                                    ref: fRef,
                                    loop: true,
                                    playsInline: true,
                                    muted: true,
                                    preload: "metadata",
                                    className: n.default("relative z-[1] h-full w-full object-cover")
                                }),
                                t.jsx(d.default, {
                                    alt: `Cover image for the video of ${descriptionTitle}`,
                                    src: posterURL,
                                    fill: true,
                                    className: n.default("h-full w-full object-cover")
                                })
                            ]
                        })
                    ]
                })
            });
        };
        let c = (e)=>{
            if (e.paused) {
                e.currentTime = 0;
                e.play().catch(()=>{});
            }
        };
        let f = (e)=>{
            if (!e.paused) {
                e.currentTime = 0;
                e.pause();
            }
        };
        e.s([
            "FeaturesCarousel",
            0,
            ({ className })=>{
                let dRef = s.useRef(null);
                let pRef = s.useRef(null);
                let mRef = s.useRef(null);
                let hRef = s.useRef(null);
                let g = (({ elements })=>{
                    let t = (e)=>{
                        let t = e.querySelector(".video");
                        let r = t?.querySelector("video");
                        let n = a.default.timeline({
                            defaults: {
                                ease: "none"
                            },
                            onUpdate: ()=>{
                                if (n.progress() > 0.5 && n.progress() < 0.8) {
                                    e.style.pointerEvents = "auto";
                                    if (r) {
                                        c(r);
                                    }
                                }
                                if (n.progress() < 0.5) {
                                    e.style.pointerEvents = "none";
                                    if (r) {
                                        f(r);
                                    }
                                }
                            }
                        });
                        if (!t || !r) {
                            return n;
                        }
                        let i = e.querySelector(".description-animation");
                        n.to(e, {
                            scale: 1,
                            y: 0
                        }, 0);
                        n.to(i, {
                            opacity: 1,
                            duration: ()=>{
                                if (window.innerWidth < l.BREAKPOINTS.desktop) {
                                    return 0.5;
                                }
                                return 1;
                            }
                        }, window.innerWidth < l.BREAKPOINTS.desktop ? 0 : 0.1);
                        n.to(i, {
                            duration: ()=>{
                                if (window.innerWidth < l.BREAKPOINTS.desktop) {
                                    return 2;
                                }
                                return 1;
                            },
                            scale: 1,
                            y: "0%"
                        }, window.innerWidth < l.BREAKPOINTS.desktop ? 0 : 0.1);
                        n.to(t, {
                            scale: ()=>1,
                            y: ()=>0,
                            opacity: ()=>1,
                            duration: 2
                        }, 0);
                        n.to(t, {
                            background: "#F9F8F5",
                            duration: 0.1
                        }, 0);
                        n.to(r, {
                            opacity: ()=>1
                        }, 0);
                        n.fromTo(r, {
                            scale: 1.05
                        }, {
                            scale: 1,
                            duration: 2
                        }, 0);
                        return n;
                    };
                    let r = (e, t, r)=>{
                        let n = e.querySelector(".video");
                        let i = n?.querySelector("video");
                        let s = a.default.timeline({
                            defaults: {
                                ease: "none"
                            },
                            onUpdate: ()=>{
                                e.style.pointerEvents = "none";
                                if (i) {
                                    f(i);
                                }
                            }
                        });
                        if (!n || !i) {
                            return s;
                        }
                        let o = e.querySelector(".description-animation");
                        let l = t - r;
                        s.to(e, {
                            scale: 1,
                            y: 0
                        }, 0);
                        s.to(o, {
                            opacity: 0,
                            y: ()=>`${(90 - r) * l}%`
                        }, 0);
                        s.to(n, {
                            background: "#F9F8F5",
                            duration: 0.1
                        }, 0);
                        s.to(n, {
                            scale: ()=>1 - 0.15 * l,
                            duration: 2,
                            y: ()=>`${(12 - r) * l}%`,
                            opacity: ()=>1
                        }, 0);
                        s.to(i, {
                            opacity: ()=>{
                                if (l <= 0) {
                                    return 1;
                                }
                                return 0.5 - l / 5;
                            }
                        }, 0);
                        return s;
                    };
                    let n = (e)=>{
                        let t = a.default.timeline({
                            ease: "linear",
                            onUpdate: ()=>{
                                if (t.progress() > 0.3) {
                                    if (n) {
                                        f(n);
                                    }
                                    e.style.pointerEvents = "none";
                                } else {
                                    e.style.pointerEvents = "auto";
                                    if (n) {
                                        c(n);
                                    }
                                }
                            }
                        });
                        let r = e.querySelector(".video");
                        if (!r) {
                            return t;
                        }
                        let n = r.querySelector("video");
                        if (!n) {
                            return t;
                        }
                        let i = e.querySelector(".description-animation");
                        if (i) {
                            t.to(e, {
                                scale: 1,
                                y: 0
                            }, 0);
                            t.to(i, {
                                opacity: 0,
                                y: ()=>{
                                    if (window.innerWidth >= l.BREAKPOINTS.desktop) {
                                        return "-60%";
                                    }
                                    return `-${window.innerHeight}px`;
                                },
                                duration: ()=>{
                                    if (window.innerWidth < l.BREAKPOINTS.desktop && window.innerWidth >= l.BREAKPOINTS.tablet) {
                                        return 2;
                                    }
                                    if (window.innerWidth >= l.BREAKPOINTS.desktop) {
                                        return 0.5;
                                    }
                                    return 3;
                                }
                            }, 0);
                            t.to(r, {
                                background: "transparent",
                                duration: 0.1
                            }, 0);
                            t.to(r, {
                                scale: ()=>1,
                                duration: ()=>{
                                    if (window.innerWidth >= l.BREAKPOINTS.desktop) {
                                        return 3;
                                    }
                                    if (window.innerWidth >= l.BREAKPOINTS.tablet) {
                                        return 2;
                                    }
                                    return 3;
                                },
                                y: ()=>`${-window.innerHeight}px`
                            }, 0);
                        }
                        return t;
                    };
                    return {
                        next: (i)=>{
                            let s = a.default.timeline({
                                defaults: {
                                    ease: "none"
                                }
                            });
                            if (!elements[i].current) {
                                return s;
                            }
                            let current = elements[i].current;
                            if (i === 0) {
                                s.add(t(current), 0);
                                s.add(n(current));
                            }
                            if (i === 1) {
                                s.add(r(current, 1, 0), 0);
                                s.add(t(current));
                                s.add(n(current));
                            }
                            if (i === 2) {
                                s.add(r(current, 2, 0), 0);
                                s.add(r(current, 2, 1));
                                s.add(t(current));
                            }
                            return s;
                        },
                        start: ()=>{
                            let t = a.default.timeline({});
                            elements.forEach((e, r)=>{
                                if (!e.current) {
                                    return;
                                }
                                let n = e.current.querySelector(".description-animation");
                                t.set(e.current.querySelector(".video"), {
                                    scale: 0.95,
                                    y: "10%",
                                    immediateRender: true
                                });
                                t.set(e.current.querySelector("video"), {
                                    scale: 1.2,
                                    immediateRender: true
                                });
                                t.set(n, {
                                    opacity: 0,
                                    y: ()=>"50%",
                                    scale: ()=>{
                                        if (window.innerWidth < l.BREAKPOINTS.desktop && r > 0) {
                                            return 0.8;
                                        }
                                        return 1;
                                    },
                                    immediateRender: true
                                }, 0);
                            });
                            return t;
                        },
                        playActive: (t)=>{
                            elements.forEach((e, r)=>{
                                let n = e.current?.querySelector(".video video");
                                n && (r === t ? c(n) : f(n));
                            });
                        }
                    };
                })({
                    elements: [
                        pRef,
                        mRef,
                        hRef
                    ]
                });
                r.useGSAP((e)=>{
                    let t = g.start();
                    i.ScrollTrigger.create({
                        trigger: dRef.current,
                        start: "center center",
                        end: ()=>{
                            if (window.innerWidth >= l.BREAKPOINTS.desktop) {
                                return `+=${2.2 * window.innerHeight}`;
                            }
                            if (window.innerWidth >= l.BREAKPOINTS.tablet) {
                                return `+=${3 * window.innerHeight}`;
                            }
                            return `+=${2.5 * window.innerHeight}`;
                        },
                        pin: true,
                        invalidateOnRefresh: true
                    });
                    let r = a.default.timeline({
                        defaults: {
                            ease: "none"
                        },
                        scrollTrigger: {
                            trigger: dRef.current,
                            start: ()=>{
                                if (window.innerWidth < l.BREAKPOINTS.tablet) {
                                    return "top center-=100";
                                }
                                return "top center+=100";
                            },
                            end: ()=>`+=${3 * window.innerHeight}`,
                            scrub: 0.25,
                            invalidateOnRefresh: true
                        }
                    });
                    r.add(t, 0);
                    r.add(g.next(0), 0);
                    r.add(g.next(1), 0);
                    r.add(g.next(2), 0);
                    return ()=>{
                        t.revert();
                    };
                }, []);
                return t.jsxs("section", {
                    ref: dRef,
                    className: n.default("relative desktop:mx-auto desktop:mb-[10rem] tablet:mb-[20rem] desktop:h-[36vw] desktopLarge:h-[40vw] h-[100vw] tablet:h-[75svh] desktop:max-h-[50rem] desktopLarge:max-h-[75rem] tablet:max-h-[70rem] w-screen desktop:max-w-[2050px]", className),
                    children: [
                        t.jsx(useU, {
                            ref: hRef,
                            index: 3,
                            descriptionTitle: "And answers your questions",
                            descriptionBody: "Got a question about a claim? Want to see how your week is tracking? Lassie is always ready to help.",
                            videoURL: `${o.ASSETS_URL}/lassie-pg-3-01a69d26-1a50-4804-9dec-c1b1670faf17.mp4`,
                            posterURL: `${o.ASSETS_URL}/lassie-pg-3.jpg`,
                            textAlign: "left"
                        }),
                        t.jsx(useU, {
                            ref: mRef,
                            index: 2,
                            descriptionTitle: "Keeps you in the loop",
                            descriptionBody: "Watch Lassie complete your paperwork, asking for your input when needed on the most complex issues.",
                            videoURL: `${o.ASSETS_URL}/lassie-pg-2-4fba523a-2180-4814-bf6a-2c9000826b7c.mp4`,
                            posterURL: `${o.ASSETS_URL}/lassie-pg-2.jpg`,
                            textAlign: "right"
                        }),
                        t.jsx(useU, {
                            ref: pRef,
                            index: 1,
                            descriptionTitle: "Lassie does your paperwork",
                            descriptionBody: "Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.",
                            videoURL: `${o.ASSETS_URL}/lassie-pg-1-e1832fd4-4bf4-4fbd-acbb-ec8ee35882a2.mp4`,
                            posterURL: `${o.ASSETS_URL}/lassie-pg-1.jpg`,
                            textAlign: "left"
                        })
                    ]
                });
            }
        ], 828633);
    },
    816027,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var n = e.i(300778);
        var a = e.i(513679);
        var i = e.i(817255);
        var s = e.i(279206);
        var o = e.i(177791);
        e.s([
            "SignUp",
            0,
            ({ className })=>{
                let l = n.useRouter();
                let [d, setD] = a.useState(false);
                return t.jsxs("form", {
                    onSubmit (e) {
                        e.preventDefault();
                        let email = new FormData(e.currentTarget).get("email");
                        i.tracker.identify({
                            email
                        });
                        let r = new URL(window.location.href).searchParams.get("rep");
                        let n = o.getSplashAttributionPath(window.location.pathname);
                        let a = new URL("https://lassie.ai/qualify/intake");
                        a.searchParams.set("email", email);
                        a.searchParams.set("splash", n);
                        a.searchParams.set("source", "www");
                        if (r) {
                            a.searchParams.set("rep", r);
                        }
                        l.push(a.toString());
                    },
                    className: r.default("flex items-center justify-between", "px-[0.6rem] py-[0.6rem]", "border-[1px] border-[rgba(255,255,255,0.1)] border-solid bg-blur", "w-[27.5rem]", "transition-[width] duration-300 ease-out", "tablet:focus-within:w-[36rem]", d && "tablet:w-[36rem] w-[33rem]", className),
                    children: [
                        t.jsx("input", {
                            type: "email",
                            "data-1p-ignore": true,
                            autoComplete: "email",
                            name: "email",
                            required: true,
                            placeholder: "Your email",
                            onChange: (e)=>setD(e.currentTarget.value.length > 0),
                            className: r.default("w-full min-w-0 flex-1", "px-[8px]", "text-[1.6rem] placeholder:text-[1.6rem]", "box-border border-none bg-transparent outline-hidden", "text-text-white placeholder:text-[rgba(255,255,255,0.8)]", "tablet:px-[16px]", "autofill-transparent")
                        }),
                        t.jsx(s.ButtonPrimary, {
                            type: "submit",
                            className: r.default("h-full shrink-0 py-[0]"),
                            withIcon: false,
                            children: "Get started"
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
    974981,
    699472,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var n = e.i(983871);
        var a = e.i(300778);
        var i = e.i(513679);
        var s = e.i(631923);
        var o = e.i(246880);
        var l = e.i(276522);
        var d = e.i(464068);
        function u({ children, className, href, active, submenu, isHovered = false, mode = "default", onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }) {
            let { bgTheme } = l.useNav();
            let x = a.usePathname();
            let [y, setY] = i.useState(false);
            let E = href === "/" && x === href || href !== "/" && x.startsWith(href.toString()) || active;
            let P = mode === "index" ? E && !isHovered : !isHovered;
            let R = href.toString().startsWith("https");
            let className_1 = r.default("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", className);
            let onMouseEnter_1 = (e)=>{
                setY(true);
                onMouseEnter?.(e);
            };
            let onMouseLeave_1 = (e)=>{
                setY(false);
                onMouseLeave?.(e);
            };
            let onFocus_1 = (e)=>{
                setY(true);
                onFocus?.(e);
            };
            let onBlur_1 = (e)=>{
                setY(false);
                onBlur?.(e);
            };
            let children_1 = t.jsxs(t.Fragment, {
                children: [
                    t.jsx("span", {
                        className: r.default("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", P && mode !== "index" && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
                    }),
                    t.jsx("div", {
                        className: r.default("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", isHovered && mode !== "index" && bgTheme === "light" && "text-text-primary", isHovered && mode !== "index" && bgTheme === "dark" && "text-white", mode === "index" && bgTheme === "dark" && !P && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
                        children
                    }),
                    y && submenu
                ]
            });
            if (submenu) {
                return t.jsx("button", {
                    type: "button",
                    "aria-current": E ? "page" : undefined,
                    "aria-haspopup": "true",
                    "aria-expanded": y,
                    onMouseEnter: onMouseEnter_1,
                    onMouseLeave: onMouseLeave_1,
                    onFocus: onFocus_1,
                    onBlur: onBlur_1,
                    className: className_1,
                    children: children_1
                });
            }
            return t.jsx(d.default, {
                "aria-current": E ? "page" : undefined,
                onMouseEnter: onMouseEnter_1,
                onMouseLeave: onMouseLeave_1,
                onFocus: onFocus_1,
                onBlur: onBlur_1,
                className: className_1,
                href,
                target: R ? "_blank" : undefined,
                ...rest,
                children: children_1
            });
        }
        e.s([
            "NavItem",
            0,
            u
        ], 699472);
        let c = {
            showHover ({ isHovered, item, moveHoverTo }) {
                let n = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, n.width);
                } else {
                    moveHoverTo(item.offsetLeft, n.width, false);
                }
            },
            idleState ({ hoverRef }) {
                n.default.killTweensOf(hoverRef.current);
                setTimeout(()=>{
                    n.default.set(hoverRef.current, {
                        width: 0
                    });
                });
            }
        };
        let f = {
            idleState ({ moveHoverTo, navRef }) {
                let r = navRef.current?.querySelector('[aria-current="page"]');
                if (r) {
                    let t = r.getBoundingClientRect();
                    moveHoverTo(r.offsetLeft, t.width);
                }
            },
            showHover ({ isHovered, item, moveHoverTo }) {
                let n = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, n.width);
                } else {
                    let e = item.closest("nav")?.querySelector('[aria-current="page"]');
                    if (e) {
                        let t = e.getBoundingClientRect();
                        moveHoverTo(e.offsetLeft, t.width, false);
                    }
                    moveHoverTo(item.offsetLeft, n.width);
                }
            }
        };
        let p = [
            "/book-a-demo",
            "/company"
        ];
        e.s([
            "Nav",
            0,
            ({ className, mode = "auto", indexModePaths = p, items, logoHref = "/", logoAriaLabel, logoIcon, logo, ...rest })=>{
                let yRef = i.useRef(null);
                let SRef = i.useRef(null);
                let ERef = i.useRef(null);
                let PRef = i.useRef(null);
                let [R, setR] = i.useState(false);
                let { collapsed, setCollapsed } = l.useNav();
                let ARef = i.useRef(null);
                let C = a.usePathname();
                function N() {
                    if (mode !== "auto") {
                        return mode;
                    }
                    indexModePaths.includes(C);
                    return "default";
                }
                function O() {
                    if (N() === "default") {
                        c.idleState({
                            hoverRef: SRef
                        });
                    } else {
                        f.idleState({
                            moveHoverTo,
                            navRef: yRef
                        });
                    }
                }
                function onUpdate() {
                    if (ERef.current) {
                        $(ERef.current);
                    } else {
                        O();
                    }
                }
                i.useEffect(()=>{
                    if (!R) {
                        O();
                    }
                }, [
                    C
                ]);
                i.useEffect(()=>{
                    ARef.current && (collapsed && !R ? n.default.to(ARef.current, {
                        width: 0,
                        duration: s.DURATION.medium,
                        ease: s.EASE,
                        onUpdate
                    }) : n.default.to(ARef.current, {
                        width: 53,
                        duration: s.DURATION.medium,
                        ease: s.EASE,
                        clearProps: "width",
                        onUpdate
                    }));
                }, [
                    collapsed,
                    R
                ]);
                let _ = (e)=>{
                    if (o.hasTouchSupport()) {
                        return;
                    }
                    ERef.current = e.currentTarget;
                    if (PRef.current) {
                        PRef.current.style.transitionDuration = "";
                    }
                    let t = e.currentTarget.querySelector(".nav-item-hover");
                    t.style.transitionDuration = "0s";
                    PRef.current = t;
                    $(e.currentTarget);
                };
                let I = ()=>{
                    if (!o.hasTouchSupport() && ERef.current) {
                        ERef.current = null;
                    }
                };
                let M = ()=>{
                    if (!o.hasTouchSupport()) {
                        setR(true);
                    }
                };
                let D = ()=>{
                    if (!o.hasTouchSupport()) {
                        O();
                        setR(false);
                    }
                };
                let $ = (item)=>{
                    if (N() === "default") {
                        c.showHover({
                            isHovered: R,
                            item,
                            moveHoverTo
                        });
                    } else {
                        f.showHover({
                            isHovered: R,
                            item,
                            moveHoverTo
                        });
                    }
                };
                function moveHoverTo(x, width, r = true) {
                    if (r) {
                        n.default.to(SRef.current, {
                            width,
                            x,
                            duration: s.DURATION.fast,
                            ease: s.EASE_OUT
                        });
                    } else {
                        n.default.set(SRef.current, {
                            x,
                            width
                        });
                    }
                }
                let mode_1 = N();
                return t.jsxs("nav", {
                    "aria-label": "Main navigation",
                    ref: yRef,
                    className: r.default("flex w-max", "p-0", className),
                    onMouseOver: M,
                    onMouseEnter: M,
                    onFocus: ()=>{},
                    onBlur: ()=>{
                        if (!R) {
                            D();
                        }
                    },
                    onMouseLeave: D,
                    ...rest,
                    children: [
                        t.jsx("div", {
                            className: r.default("nav-frame pointer-events-none absolute", "top-[-4px] left-[-4px] h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]")
                        }),
                        t.jsx("div", {
                            ref: SRef,
                            "aria-hidden": "true",
                            className: r.default("pointer-events-none absolute", "h-11 rounded-[12px] bg-white")
                        }),
                        logo && t.jsxs(u, {
                            href: logoHref,
                            "aria-label": logoAriaLabel,
                            isHovered: R,
                            mode: mode_1,
                            onMouseEnter: _,
                            onMouseLeave: I,
                            onFocus: _,
                            onBlur: I,
                            children: [
                                t.jsx("span", {
                                    className: "ml-0",
                                    children: logoIcon
                                }),
                                t.jsx("span", {
                                    ref: ARef,
                                    className: r.default("inline-block w-[53px] overflow-hidden border-box"),
                                    children: logo
                                })
                            ]
                        }),
                        items.map((e)=>t.jsx(u, {
                                active: e.active,
                                href: e.href,
                                "aria-label": e["aria-label"],
                                isHovered: R,
                                mode: mode_1,
                                onMouseEnter: _,
                                onMouseLeave: I,
                                onFocus: _,
                                onBlur: I,
                                submenu: e.submenu,
                                children: e.content
                            }, e.href))
                    ]
                });
            }
        ], 974981);
    },
    428044,
    (e)=>{
        "use strict";
        e.i(974981);
        e.i(699472);
        e.i(276522);
        e.s([]);
    },
    990055,
    (e)=>{
        "use strict";
        e.s([
            "BREAKPOINTS",
            0,
            {
                mobile: 394,
                tablet: 1024,
                desktop: 1280,
                desktopLarge: 1440
            }
        ]);
    },
    41049,
    (e)=>{
        "use strict";
        e.s([
            "ASSETS_URL",
            0,
            "https://cdn.lassie.ai/assets/media/website"
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
    246880,
    (e)=>{
        "use strict";
        e.s([
            "hasTouchSupport",
            0,
            ()=>{
                if (window.PointerEvent && "maxTouchPoints" in navigator) {
                    return navigator.maxTouchPoints > 0;
                }
                return !!window.matchMedia && !!window.matchMedia("(any-pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0;
            }
        ]);
    },
    582267,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var n = e.i(607198);
        var a = e.i(513679);
        var i = e.i(113329);
        var s = e.i(509848);
        var o = e.i(386465);
        var l = e.i(999380);
        var d = e.i(900907);
        var u = e.i(514415);
        var c = e.i(454881);
        var f = e.i(345078);
        var p = e.i(755118);
        var m = e.i(120306);
        var h = e.i(526296);
        var g = e.i(691480);
        var b = e.i(622030);
        let WContext = a.createContext(null);
        let v = a.forwardRef((e, t)=>{
            let r = ((e)=>{
                let { allowsMultipleExpanded = false, isDisabled = false } = e;
                let [n, i] = p.useControlledState(a.useMemo(()=>{
                    if (e.expandedKeys) {
                        return new Set(e.expandedKeys);
                    }
                }, [
                    e.expandedKeys
                ]), a.useMemo(()=>{
                    if (e.defaultExpandedKeys) {
                        return new Set(e.defaultExpandedKeys);
                    }
                    return new Set;
                }, [
                    e.defaultExpandedKeys
                ]), e.onExpandedChange);
                a.useEffect(()=>{
                    if (!allowsMultipleExpanded && n.size > 1) {
                        let e = n.values().next().value;
                        if (e != null) {
                            i(new Set([
                                e
                            ]));
                        }
                    }
                });
                return {
                    allowsMultipleExpanded,
                    isDisabled,
                    expandedKeys: n,
                    setExpandedKeys: i,
                    toggleKey (e) {
                        let r;
                        if (allowsMultipleExpanded) {
                            if ((r = new Set(n)).has(e)) {
                                r.delete(e);
                            } else {
                                r.add(e);
                            }
                        } else {
                            r = new Set(n.has(e) ? [] : [
                                e
                            ]);
                        }
                        i(r);
                    }
                };
            })(e);
            let n = o.useRenderProps({
                ...e,
                defaultClassName: "react-aria-DisclosureGroup",
                values: {
                    isDisabled: r.isDisabled,
                    state: r
                }
            });
            let i = m.filterDOMProps(e, {
                global: true
            });
            return a.default.createElement(o.dom.div, {
                ...i,
                ...n,
                ref: t,
                "data-disabled": e.isDisabled || undefined
            }, a.default.createElement(WContext.Provider, {
                value: r
            }, n.children));
        });
        let XContext = a.createContext(null);
        let YContext = a.createContext(null);
        let SContext = a.createContext(null);
        let E = a.forwardRef((e, t)=>{
            [e, t] = o.useContextProps(e, t, XContext);
            let r = a.useContext(WContext);
            let { id, ...rest } = e;
            let g = d.useId();
            id ||= g;
            let isExpanded = r ? r.expandedKeys.has(id) : e.isExpanded;
            let state = ((e)=>{
                let [t, r] = p.useControlledState(e.isExpanded, e.defaultExpanded || false, e.onExpandedChange);
                let expand = a.useCallback(()=>{
                    r(true);
                }, [
                    r
                ]);
                let collapse = a.useCallback(()=>{
                    r(false);
                }, [
                    r
                ]);
                let toggle = a.useCallback(()=>{
                    r(!t);
                }, [
                    r,
                    t
                ]);
                return {
                    isExpanded: t,
                    setExpanded: r,
                    expand,
                    collapse,
                    toggle
                };
            })({
                ...e,
                isExpanded,
                onExpandedChange (t) {
                    if (r) {
                        r.toggleKey(id);
                    }
                    e.onExpandedChange?.(t);
                }
            });
            let PRef = a.default.useRef(null);
            let isDisabled = e.isDisabled || r?.isDisabled || false;
            let { buttonProps, panelProps } = ((e, t, r)=>{
                let { isDisabled } = e;
                let i = d.useId();
                let s = d.useId();
                let o = u.useIsSSR();
                let pRef = a.useRef(null);
                let m = a.useCallback(()=>{
                    pRef.current = requestAnimationFrame(()=>{
                        if (r.current) {
                            r.current.setAttribute("hidden", "until-found");
                        }
                    });
                    f.flushSync(()=>{
                        t.toggle();
                    });
                }, [
                    r,
                    t
                ]);
                l.useEvent(r, "beforematch", m);
                let hRef = a.useRef(null);
                c.useLayoutEffect(()=>{
                    if (pRef.current) {
                        cancelAnimationFrame(pRef.current);
                    }
                    if (r.current && !o) {
                        let e = r.current;
                        hRef.current == null || typeof e.getAnimations !== "function" ? t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")) : (e.setAttribute("hidden", "until-found"), e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px")) : t.isExpanded !== hRef.current && (t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), Promise.all(e.getAnimations().map((e)=>e.finished)).then(()=>{
                            e.style.setProperty("--disclosure-panel-width", "auto");
                            e.style.setProperty("--disclosure-panel-height", "auto");
                        }).catch(()=>{})) : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), window.getComputedStyle(e).height, e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px"), Promise.all(e.getAnimations().map((e)=>e.finished)).then(()=>e.setAttribute("hidden", "until-found")).catch(()=>{})));
                        hRef.current = t.isExpanded;
                    }
                }, [
                    isDisabled,
                    r,
                    t.isExpanded,
                    o
                ]);
                a.useEffect(()=>()=>{
                        if (pRef.current) {
                            cancelAnimationFrame(pRef.current);
                        }
                    }, []);
                return {
                    buttonProps: {
                        id: i,
                        "aria-expanded": t.isExpanded,
                        "aria-controls": s,
                        onPress: (e)=>{
                            if (!(isDisabled || e.pointerType === "keyboard")) {
                                t.toggle();
                            }
                        },
                        isDisabled,
                        onPressStart (e) {
                            if (!(e.pointerType !== "keyboard" || isDisabled)) {
                                t.toggle();
                            }
                        }
                    },
                    panelProps: {
                        id: s,
                        role: "group",
                        "aria-labelledby": i,
                        "aria-hidden": !t.isExpanded,
                        hidden: o ? !t.isExpanded : undefined
                    }
                };
            })({
                ...e,
                isExpanded,
                isDisabled
            }, state, PRef);
            let { isFocusVisible, focusProps } = b.useFocusRing({
                within: true
            });
            let C = o.useRenderProps({
                ...e,
                id: undefined,
                defaultClassName: "react-aria-Disclosure",
                values: {
                    isExpanded: state.isExpanded,
                    isDisabled,
                    isFocusVisibleWithin: isFocusVisible,
                    state
                }
            });
            let N = m.filterDOMProps(rest, {
                global: true
            });
            return a.default.createElement(o.Provider, {
                values: [
                    [
                        s.ButtonContext,
                        {
                            slots: {
                                [o.DEFAULT_SLOT]: {},
                                trigger: buttonProps
                            }
                        }
                    ],
                    [
                        SContext,
                        {
                            panelProps,
                            panelRef: PRef
                        }
                    ],
                    [
                        YContext,
                        state
                    ]
                ]
            }, a.default.createElement(o.dom.div, {
                ...h.mergeProps(N, C, focusProps),
                ref: t,
                "data-expanded": state.isExpanded || undefined,
                "data-disabled": isDisabled || undefined,
                "data-focus-visible-within": isFocusVisible || undefined
            }, C.children));
        });
        let P = a.forwardRef((e, t)=>{
            let { role = "group" } = e;
            let { panelProps, panelRef } = a.useContext(SContext);
            let { isFocusVisible, focusProps } = b.useFocusRing({
                within: true
            });
            let u = o.useRenderProps({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: {
                    isFocusVisibleWithin: isFocusVisible
                }
            });
            let c = m.filterDOMProps(e, {
                global: true,
                labelable: true
            });
            return a.default.createElement(o.dom.div, {
                ...h.mergeProps(c, u, panelProps, focusProps),
                ref: g.mergeRefs(t, panelRef),
                role,
                "data-focus-visible-within": isFocusVisible || undefined
            }, a.default.createElement(o.Provider, {
                values: [
                    [
                        s.ButtonContext,
                        null
                    ]
                ]
            }, e.children));
        });
        function useR({ items, className }) {
            let iRef = a.useRef(null);
            let [expandedKeys, setExpandedKeys] = a.useState(new Set([]));
            let [l, setL] = a.useState(0);
            a.useLayoutEffect(()=>{
                if (iRef.current) {
                    setL(iRef.current.scrollHeight);
                }
            }, []);
            return t.jsx(v, {
                ref: iRef,
                expandedKeys,
                onExpandedChange: setExpandedKeys,
                className: r.default("isolate", className),
                style: {
                    minHeight: l + 80
                },
                children: items.map((e)=>t.jsx(j, {
                        id: e.question,
                        question: e.question,
                        answer: e.answer,
                        onToggle: ()=>{
                            var t;
                            t = e.question;
                            setExpandedKeys((e)=>{
                                let r = new Set(e);
                                if (r.has(t)) {
                                    r.delete(t);
                                    return r;
                                }
                                return new Set([
                                    t
                                ]);
                            });
                        }
                    }, e.question))
            });
        }
        let j = ({ question, answer, id, onToggle })=>{
            let { pressProps } = i.usePress({
                onPress: (e)=>{
                    e.target.closest("button") || onToggle?.();
                }
            });
            return t.jsxs(E, {
                className: r.default("group relative flex w-full cursor-pointer items-start justify-between gap-[3.2rem]", "z-0 rounded-[16px] bg-surface-primary p-[1.6rem] tablet:p-[2.4rem]", "border-2 border-transparent data-[focus-visible-within=true]:z-10 data-[focus-visible-within=true]:border-blue-500 data-[focus-visible-within=true]:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
                ...pressProps,
                id,
                children: [
                    t.jsxs("div", {
                        children: [
                            t.jsx(s.Button, {
                                slot: "trigger",
                                className: r.default("relative z-[10] flex min-h-[3rem] w-full items-center justify-between desktop:gap-[3.2rem] gap-[1.6rem] outline-hidden", "border-[none] bg-none", "text-left text-body-md"),
                                children: question
                            }),
                            t.jsx(P, {
                                className: r.default("h-[var(--disclosure-panel-height)] overflow-clip", "transition-[height] duration-200 motion-reduce:transition-none"),
                                children: t.jsx("div", {
                                    className: "desktop:pt-[0.8rem] pt-[0.4rem]",
                                    children: t.jsx("span", {
                                        className: "text-body-sm text-text-secondary",
                                        children: answer
                                    })
                                })
                            })
                        ]
                    }),
                    t.jsx("div", {
                        className: r.default("rounded-[1.8rem] transition-colors duration-200 ease-out", "group-hover:bg-surface-secondary", "group-data-[expanded=true]:bg-surface-secondary", "group-data-[focus-visible-within=true]:bg-background-tertiary", "shrink-0"),
                        "aria-hidden": "true",
                        children: t.jsx("svg", {
                            viewBox: "0 0 42 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-[3.2rem] w-[4.2rem] rotate-180 transition-transform duration-200 ease-out group-data-[expanded]:rotate-0",
                            role: "img",
                            "aria-label": "Chevron Icon",
                            children: t.jsx("path", {
                                d: "M13.9424 19.759C16.5148 18.269 18.6686 16.1521 20.2028 13.6058L20.3714 13.3255C20.5042 13.1051 20.7433 12.9706 21.0007 12.9706C21.258 12.9706 21.4964 13.1052 21.6293 13.3255L21.7979 13.6058C23.332 16.1521 25.486 18.269 28.0583 19.759L27.3225 21.0294C24.7831 19.5585 22.6221 17.5224 21.0007 15.0855C19.3792 17.5224 17.2184 19.5585 14.6789 21.0294L13.9424 19.759Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            });
        };
        e.i(428044);
        var k = e.i(276522);
        e.s([
            "FAQ",
            0,
            ({ background })=>{
                let { setBgTheme } = k.useNav();
                a.useEffect(()=>{
                    n.ScrollTrigger.create({
                        trigger: "#faq",
                        start: "top top",
                        end: "bottom",
                        invalidateOnRefresh: true,
                        onToggle: (e)=>{
                            if (e.isActive) {
                                setBgTheme("light");
                            }
                        }
                    });
                    return ()=>{};
                }, []);
                return t.jsxs("section", {
                    id: "faq",
                    className: r.default("flex flex-col justify-center items-center", "w-screen px-[1.6rem] pt-[16rem] pb-[10rem] desktop:pb-[16rem]", "bg-background-primary", "tablet:px-0 desktop:pb-[16rem]"),
                    children: [
                        t.jsx("h2", {
                            className: r.default("text-heading-lg !leading-none", "mb-[3.2rem]"),
                            children: "FAQ"
                        }),
                        t.jsx(useR, {
                            className: r.default("w-full max-w-[68rem] tablet:max-w-none tablet:w-1/2 desktop:w-[30%] desktop:min-w-[54rem]"),
                            items: [
                                {
                                    question: "What can Lassie help me with?",
                                    answer: "Lassie automates the administrative work that keeps your practice moving, from enrollments and posting to reconciliation, appeals, reporting, and follow-up work."
                                },
                                {
                                    question: "How do I get started?",
                                    answer: "Book a demo, and we’ll take a quick look at how your office runs today, then show you where Lassie can help."
                                },
                                {
                                    question: "Do I need to change my existing systems?",
                                    answer: "No. Lassie is designed to work with the way your practice already runs. On the first call, we’ll confirm your current setup and what Lassie can automate."
                                },
                                {
                                    question: "What does my team still handle?",
                                    answer: "Your team stays in control. Lassie takes on repetitive admin work and flags exceptions when something needs review."
                                },
                                {
                                    question: "How long does onboarding take?",
                                    answer: "If you’re already on EFTs, we can usually get you up and running within one to two weeks. If your office still receives paper checks, full auto-posting setup can take up to about eight weeks."
                                },
                                {
                                    question: "What does Lassie cost?",
                                    answer: "Lassie gets paid when it does work for your office. Once we understand your practice’s volume and workflows, we’ll show you what pricing would look like."
                                },
                                {
                                    question: "Is Lassie secure?",
                                    answer: "Yes. Lassie is built for healthcare practices, enters into HIPAA business associate agreements, and follows standard healthcare data-handling expectations. We can share security details during the demo."
                                }
                            ]
                        })
                    ]
                });
            }
        ], 582267);
    },
    239128,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(176418);
        var n = e.i(638327);
        var a = e.i(809393);
        var i = e.i(607198);
        var s = e.i(513679);
        e.s([
            "HowItWorksIntro",
            0,
            ({ className })=>{
                let [o, setO] = s.useState(null);
                let dRef = s.useRef(null);
                r.useGSAP(()=>{
                    if (!o || !dRef.current) {
                        return;
                    }
                    let e = null;
                    let t = i.ScrollTrigger.create({
                        trigger: dRef.current,
                        start: "top 80%",
                        once: true,
                        onEnter: ()=>{
                            let t;
                            t = ()=>{
                                o.setFrame(0);
                                o.play();
                            };
                            if (o.isLoaded) {
                                t();
                            } else {
                                e = ()=>{
                                    t();
                                    if (e) {
                                        o.removeEventListener("load", e);
                                        e = null;
                                    }
                                };
                                o.addEventListener("load", e);
                            }
                        }
                    });
                    return ()=>{
                        if (e) {
                            o.removeEventListener("load", e);
                        }
                        t.kill();
                    };
                }, [
                    o
                ]);
                return t.jsxs("section", {
                    ref: dRef,
                    className: a.default("w-full flex flex-col justify-center items-center mb-[8rem] tablet:mb-[6rem]", className),
                    children: [
                        t.jsx("span", {
                            className: a.default("w-[32rem] inline-block"),
                            children: t.jsx(n.DotLottieReact, {
                                src: "/lottie/flower.lottie",
                                className: "w-[32rem] h-auto",
                                animationId: "intro",
                                loop: false,
                                autoplay: false,
                                renderConfig: {
                                    autoResize: true
                                },
                                dotLottieRefCallback: setO
                            })
                        }),
                        t.jsxs("h2", {
                            className: a.default("text-heading-lg text-text-primary text-center"),
                            children: [
                                "AI that runs the",
                                t.jsx("br", {}),
                                "doctor’s office"
                            ]
                        })
                    ]
                });
            }
        ]);
    },
    888164,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(176418);
        var n = e.i(809393);
        var a = e.i(983871);
        var i = e.i(607198);
        var s = e.i(726215);
        var o = e.i(513679);
        var l = e.i(41049);
        var d = e.i(990055);
        var u = e.i(631923);
        function c(e) {
            return e * Math.PI / 180;
        }
        e.s([
            "Infographic",
            0,
            ()=>{
                let eRef = o.useRef(null);
                let fRef = o.useRef(null);
                let pRef = o.useRef(null);
                let mRef = o.useRef(null);
                let hRef = o.useRef(null);
                let gRef = o.useRef(null);
                let bRef = o.useRef(null);
                let wRef = o.useRef(null);
                let vRef = o.useRef(null);
                let xRef = o.useRef(null);
                let yRef = o.useRef(null);
                let SRef = o.useRef(null);
                let ERef = o.useRef(null);
                let PRef = o.useRef(null);
                let RRef = o.useRef(null);
                let jRef = o.useRef(null);
                let [k, setK] = o.useState(98);
                let ARef = o.useRef(null);
                r.useGSAP((context)=>{
                    let r = (({ sectionRef, percentageCopyRef, copy1Ref, copy2Ref, topLeftContainer, topRightContainerRef, bottomRightRefContainer, bottomLeftRef, topLeft2Ref, bottomRight2Ref, context })=>{
                        let g;
                        let b;
                        let w = false;
                        let v = {
                            value: 0,
                            angle: -100,
                            radiusX: 0.3 * window.innerWidth,
                            radiusY: 0.3 * window.innerHeight,
                            animateScale: true
                        };
                        let x = [
                            topLeftContainer,
                            topLeft2Ref,
                            topRightContainerRef,
                            bottomRightRefContainer,
                            bottomLeftRef,
                            bottomRight2Ref
                        ];
                        let y = [
                            {
                                fromAngle: {
                                    desktop: -174,
                                    mobile: -154
                                },
                                angle: -74,
                                toAngle: {
                                    desktop: -74,
                                    mobile: -84
                                },
                                offsetX: {
                                    desktop: 0,
                                    mobile: 0
                                },
                                offsetY: {
                                    desktop: 0,
                                    mobile: 0
                                }
                            },
                            {
                                fromAngle: {
                                    desktop: -120,
                                    mobile: -120
                                },
                                angle: -74,
                                toAngle: {
                                    desktop: -74,
                                    mobile: -74
                                },
                                offsetX: {
                                    desktop: -80,
                                    mobile: -80
                                },
                                offsetY: {
                                    desktop: 10,
                                    mobile: 10
                                }
                            },
                            {
                                angle: 35,
                                fromAngle: {
                                    desktop: -125,
                                    mobile: -25
                                },
                                toAngle: {
                                    desktop: 35,
                                    mobile: 35
                                },
                                offsetX: {
                                    desktop: -25,
                                    mobile: -25
                                },
                                offsetY: {
                                    desktop: -60,
                                    mobile: -20
                                }
                            },
                            {
                                angle: 105,
                                fromAngle: {
                                    desktop: 5,
                                    mobile: 110
                                },
                                toAngle: {
                                    desktop: 105,
                                    mobile: 130
                                },
                                offsetX: {
                                    desktop: -50,
                                    mobile: -50
                                },
                                offsetY: {
                                    desktop: 40,
                                    mobile: -20
                                }
                            },
                            {
                                angle: 195,
                                fromAngle: {
                                    desktop: 95,
                                    mobile: 180
                                },
                                toAngle: {
                                    desktop: 195,
                                    mobile: 205
                                },
                                offsetX: {
                                    desktop: 0,
                                    mobile: 25
                                },
                                offsetY: {
                                    desktop: 0,
                                    mobile: -60
                                }
                            },
                            {
                                angle: 105,
                                fromAngle: {
                                    desktop: 30,
                                    mobile: 100
                                },
                                toAngle: {
                                    desktop: 105,
                                    mobile: 120
                                },
                                offsetX: {
                                    desktop: 50,
                                    mobile: 0
                                },
                                offsetY: {
                                    desktop: -100,
                                    mobile: -40
                                }
                            }
                        ];
                        let S = a.default.timeline({
                            paused: true
                        });
                        let E = a.default.timeline({
                            paused: true
                        });
                        function P(e, t) {
                            if (window.innerWidth >= d.BREAKPOINTS.tablet) {
                                return e[t].desktop;
                            }
                            return e[t].mobile;
                        }
                        function R() {
                            x.forEach((e, t)=>{
                                let r = e.current?.querySelector("img");
                                let n = e.current?.dataset.graphic;
                                let a = Math.min(1, 2 * E.progress());
                                if (r && !n && v.animateScale) {
                                    let e = Math.max(1, 2 - 1.5 * E.progress());
                                    r.style.transform = `scale(${e})`;
                                }
                                if (e.current) {
                                    let r = Math.cos(c(y[t].angle - 60)) * v.radiusX - e.current.offsetWidth / 2 + P(y[t], "offsetX");
                                    let n = Math.sin(c(y[t].angle - 60)) * v.radiusY - e.current.offsetHeight / 2 + P(y[t], "offsetY");
                                    e.current.style.opacity = "1";
                                    e.current.style.transform = `translate(${r}px, ${n}px) scale(${a})`;
                                }
                            });
                        }
                        return {
                            resize: ()=>{
                                if (window.innerWidth >= d.BREAKPOINTS.tablet) {
                                    v.animateScale = true;
                                    v.radiusX = 0.43 * window.innerWidth;
                                    v.radiusY = 0.43 * window.innerHeight;
                                    requestAnimationFrame(()=>{
                                        requestAnimationFrame(()=>{
                                            R();
                                        });
                                    });
                                } else {
                                    v.animateScale = false;
                                }
                            },
                            animateText: ({ isMobile })=>{
                                (S = a.default.timeline({
                                    paused: true,
                                    scrollTrigger: {
                                        trigger: sectionRef.current,
                                        start: "top center",
                                        end: ()=>{
                                            if (isMobile) {
                                                return `+=${1.5 * window.innerHeight}`;
                                            }
                                            return `+=${3 * window.innerHeight}`;
                                        },
                                        scrub: true,
                                        invalidateOnRefresh: true
                                    }
                                })).fromTo(percentageCopyRef.current, {
                                    autoAlpha: 0,
                                    y: "+=30px"
                                }, {
                                    autoAlpha: 1,
                                    y: "0px",
                                    duration: 3 * u.DURATION.slow,
                                    ease: u.EASE_OUT
                                }, 1).fromTo(copy1Ref.current, {
                                    autoAlpha: 0,
                                    y: "+=30px"
                                }, {
                                    autoAlpha: 1,
                                    y: "0px",
                                    duration: 3 * u.DURATION.slow,
                                    ease: u.EASE_OUT
                                }, 1.1).to({}, {
                                    duration: 4
                                }).to(percentageCopyRef.current, {
                                    autoAlpha: 0,
                                    y: "-60%",
                                    duration: u.DURATION.slow
                                }).to(copy1Ref.current, {
                                    autoAlpha: 0,
                                    y: "-40%",
                                    duration: u.DURATION.slow
                                }, "<").fromTo(copy2Ref.current, {
                                    autoAlpha: 0,
                                    y: "20%"
                                }, {
                                    autoAlpha: 1,
                                    y: "-40%",
                                    duration: 1.5
                                }).to({}, {
                                    duration: 1
                                });
                                return ()=>{
                                    S.revert();
                                };
                            },
                            animateCards: ({ isMobile })=>{
                                (E = a.default.timeline({
                                    paused: true,
                                    scrollTrigger: {
                                        trigger: sectionRef.current,
                                        start: "top bottom",
                                        end: ()=>{
                                            if (isMobile) {
                                                return `+=${2 * window.innerHeight}`;
                                            }
                                            return `+=${3.5 * window.innerHeight}`;
                                        },
                                        onStart: ()=>{
                                            R();
                                        },
                                        onUpdate: ()=>{
                                            R();
                                        },
                                        scrub: true,
                                        invalidateOnRefresh: true
                                    }
                                })).set(v, {
                                    radiusX: ()=>{
                                        window.innerWidth >= d.BREAKPOINTS.tablet;
                                        return 0.43 * window.innerWidth;
                                    },
                                    radiusY: ()=>{
                                        window.innerWidth >= d.BREAKPOINTS.tablet;
                                        return 0.39 * window.innerHeight;
                                    }
                                });
                                y.forEach((e)=>{
                                    E.fromTo(e, {
                                        angle: P(e, "fromAngle")
                                    }, {
                                        angle: P(e, "toAngle")
                                    }, 0);
                                });
                                return ()=>{
                                    E.revert();
                                };
                            },
                            animatePercentage: (t)=>g = i.ScrollTrigger.create({
                                    trigger: sectionRef.current,
                                    start: "top bottom",
                                    end: ()=>`+=${3 * window.innerHeight}`,
                                    scrub: true,
                                    invalidateOnRefresh: true,
                                    onEnter: ()=>{
                                        if (!w) {
                                            context.add(()=>{
                                                (b = a.default.timeline()).fromTo(v, {
                                                    value: 0
                                                }, {
                                                    value: 98,
                                                    duration: 3 * u.DURATION.slow,
                                                    ease: u.EASE_IN_OUT,
                                                    delay: 0.5,
                                                    onComplete: ()=>{
                                                        w = true;
                                                    },
                                                    onUpdate: ()=>t(Math.round(v.value))
                                                });
                                            });
                                        }
                                    }
                                }),
                            dispose: ()=>{
                                if (g) {
                                    g.kill();
                                }
                                if (b) {
                                    b.revert();
                                }
                                S.revert();
                                E.revert();
                            }
                        };
                    })({
                        sectionRef: eRef,
                        copy1Ref: pRef,
                        percentageCopyRef: fRef,
                        copy2Ref: mRef,
                        topLeftContainer: RRef,
                        topRightContainerRef: jRef,
                        bottomRightRefContainer: PRef,
                        bottomLeftRef: xRef,
                        topLeftRef: hRef,
                        topLeft2Ref: bRef,
                        bottomRight2Ref: ERef,
                        context
                    });
                    if (ARef.current) {
                        ARef.current.style.opacity = "1";
                    }
                    r.animatePercentage((e)=>setK(e));
                    let n = a.default.matchMedia();
                    n.add(`(max-width: ${d.BREAKPOINTS.desktop - 1}px)`, ()=>{
                        r.animateCards({
                            isMobile: true
                        });
                        r.animateText({
                            isMobile: true
                        });
                        return ()=>{
                            r.dispose();
                        };
                    });
                    n.add(`(min-width: ${d.BREAKPOINTS.desktop}px)`, ()=>{
                        r.animateCards({
                            isMobile: false
                        });
                        r.animateText({
                            isMobile: false
                        });
                        return ()=>{
                            r.dispose();
                        };
                    });
                    i.ScrollTrigger.create({
                        trigger: eRef.current,
                        start: "center center",
                        end: ()=>{
                            if (window.innerWidth >= d.BREAKPOINTS.desktop) {
                                return `+=${2.2 * window.innerHeight}`;
                            }
                            return `+=${1.2 * window.innerHeight}`;
                        },
                        pin: true,
                        invalidateOnRefresh: true
                    });
                    let s = ()=>{
                        r.resize();
                    };
                    window.addEventListener("resize", s);
                    return ()=>{
                        window.removeEventListener("resize", s);
                    };
                }, []);
                return t.jsxs("section", {
                    id: "infographic",
                    ref: eRef,
                    className: n.default("w-full min-h-[100svh] min-w-[394px] flex justify-center items-center relative"),
                    children: [
                        t.jsx("div", {
                            className: n.default("relative h-[15rem] w-full"),
                            children: t.jsxs("div", {
                                className: n.default("flex flex-col justify-center items-center text-center absolute", "left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full"),
                                children: [
                                    t.jsxs("span", {
                                        ref: fRef,
                                        className: n.default("text-heading-xl"),
                                        children: [
                                            k,
                                            "%"
                                        ]
                                    }),
                                    t.jsxs("div", {
                                        className: n.default("grid w-full place-items-center"),
                                        children: [
                                            t.jsxs("h2", {
                                                ref: pRef,
                                                className: n.default("text-heading-lg col-start-1 row-start-1 text-center", "w-full"),
                                                children: [
                                                    "of posting is handled",
                                                    t.jsx("br", {}),
                                                    "autonomously"
                                                ]
                                            }),
                                            t.jsxs("h2", {
                                                ref: mRef,
                                                className: n.default("text-heading-lg col-start-1 row-start-1 text-center", "opacity-0 w-full"),
                                                children: [
                                                    "The more Lassie learns,",
                                                    t.jsx("br", {}),
                                                    "the less input it needs"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        t.jsxs("div", {
                            ref: ARef,
                            className: n.default("absolute w-full h-svh top-0 left-0 pointer-events-none opacity-0"),
                            children: [
                                t.jsx("div", {
                                    ref: RRef,
                                    className: n.default("top-1/2 left-1/2 absolute"),
                                    children: t.jsx("span", {
                                        className: n.default("inline-block w-[11.3rem] h-[12.5rem] overflow-hidden rounded-[1.2rem]", "tablet:w-[17rem] relative tablet:h-[20.8rem]", "desktop:rounded-[1.6rem] desktop:w-[23.6rem] desktop:h-[26.1rem]"),
                                        ref: hRef,
                                        children: t.jsx(s.default, {
                                            ref: gRef,
                                            src: `${l.ASSETS_URL}/infographic/top-left-9a8c2dff-8249-4cbe-99d9-3c11d1e56105.jpg`,
                                            fill: true,
                                            alt: "Tall yellow wildflowers with thin green stems stand against a softly blurred, sunlit background, conveying a serene and natural atmosphere."
                                        })
                                    })
                                }),
                                t.jsx("div", {
                                    className: n.default("top-1/2 left-1/2 absolute"),
                                    "data-graphic": true,
                                    ref: bRef,
                                    children: t.jsx("div", {
                                        className: n.default("w-[17.6rem] h-[7.86rem] max-w-none rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[22.5rem] tablet:h-[12.6rem] top-0 left-0", "desktop:w-[34rem] tablet:h-[15.2rem]", "absolute top-[-7rem] left-[7rem] object-contain"),
                                        children: t.jsx(s.default, {
                                            className: n.default("max-w-none", "object-contain"),
                                            fill: true,
                                            src: `${l.ASSETS_URL}/infographic/top-left-1-983872b1-f53d-40b6-93ef-4ef36423303a.svg`,
                                            alt: "Metlife transaction status card showing a completed payment of $1,943.88, received on Jan 14 and posted on Jan 16."
                                        })
                                    })
                                }),
                                t.jsx("div", {
                                    ref: jRef,
                                    className: n.default("absolute left-1/2 top-1/2"),
                                    children: t.jsx("picture", {
                                        ref: wRef,
                                        "data-graphic": true,
                                        className: n.default("w-[12.1rem] h-[12.3rem] overflow-hidden block rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[19.1rem] tablet:h-[19.1rem] relative", "desktop:w-[27.3rem] desktop:h-[27.7rem]"),
                                        children: t.jsx(s.default, {
                                            ref: vRef,
                                            src: `${l.ASSETS_URL}/infographic/top-right-9c96bfd2-d943-4721-af2b-970d6f1e8056.jpg`,
                                            fill: true,
                                            className: n.default("w-full h-full object-cover"),
                                            alt: "A person in a navy outfit is seen from behind through a glass window. The setting appears calm, with soft light and minimalistic decor in blue tones."
                                        })
                                    })
                                }),
                                t.jsx("div", {
                                    ref: xRef,
                                    "data-graphic": true,
                                    className: n.default("absolute w-[17.6rem] h-[10rem] max-w-none top-1/2 left-1/2 rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[26.1rem] tablet:h-[14rem] object-contain", "desktop:w-[34rem] desktop:h-[17rem] object-contain"),
                                    children: t.jsx(s.default, {
                                        className: n.default("max-w-none"),
                                        fill: true,
                                        src: `${l.ASSETS_URL}/infographic/bottom-left-bb2d87e3-276f-4e1d-8077-cdfc77ce079b.svg`,
                                        alt: "Weekly activity analysis card showing $67,119.50 in partially posted payments, $3,535.50 in unposted payments, and 27 claims flagged for review."
                                    })
                                }),
                                t.jsx("div", {
                                    ref: PRef,
                                    className: n.default("top-1/2 left-1/2 absolute"),
                                    children: t.jsx("picture", {
                                        ref: yRef,
                                        className: n.default("w-[12.1rem] h-[11.6rem] relative overflow-hidden block rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[18.2rem] tablet:h-[18.2rem] aspect-square", "desktop:w-[23.8rem] desktop:h-[22.8rem] object-contain"),
                                        children: t.jsx(s.default, {
                                            ref: SRef,
                                            src: `${l.ASSETS_URL}/infographic/bottom-right-dffd49f7-779e-491d-bbec-97ed5a920117.jpg`,
                                            fill: true,
                                            className: n.default("w-full h-full object-cover"),
                                            alt: "Hands typing on a sleek, white keyboard in a modern office setting. A smartwatch adorns one wrist, conveying a sense of productivity and focus."
                                        })
                                    })
                                }),
                                t.jsx("div", {
                                    "data-graphic": true,
                                    className: n.default("top-1/2 left-1/2 absolute"),
                                    ref: ERef,
                                    children: t.jsx("div", {
                                        className: n.default("w-[17.6rem] h-[8.74rem] max-w-none", "relative object-contain", "tablet:w-[22.5rem] tablet:h-[12.6rem]", "desktop:w-[34rem] desktop:h-[19.6rem]"),
                                        children: t.jsx(s.default, {
                                            className: n.default("max-w-none", "object-contain"),
                                            fill: true,
                                            src: `${l.ASSETS_URL}/infographic/bottom-right-6f11c3d8-d8de-4a85-81cd-ac22c29c59c8.svg`,
                                            alt: "Processing claim card for Aetna totaling $8,471.30, marked as Received on Jan 4, 2026, with EFT reference number 826077000559069."
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                });
            }
        ], 888164);
    },
    240028,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        let r = e.i(662576).default(()=>e.A(189940), {
            loadableGenerated: {
                modules: [
                    811721
                ]
            },
            ssr: false
        });
        e.s([
            "Locations",
            0,
            ()=>t.jsx(t.Fragment, {
                    children: t.jsx(r, {})
                })
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
                return y;
            }
        });
        let n = e.r(330053);
        let a = e.r(171266);
        let i = e.r(281889);
        let s = a._(e.r(513679));
        let o = n._(e.r(345078));
        let l = n._(e.r(111586));
        let d = e.r(18306);
        let u = e.r(433198);
        let c = e.r(453426);
        let f = e.r(239351);
        let p = n._(e.r(396674));
        let m = e.r(81378);
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
        function g(e, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, i, s) {
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
                            let n = false;
                            let a = false;
                            onLoadRef.current({
                                ...nativeEvent,
                                nativeEvent,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: ()=>n,
                                isPropagationStopped: ()=>a,
                                persist: ()=>{},
                                preventDefault: ()=>{
                                    n = true;
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
        let w = typeof window === "undefined" ? s.useEffect : s.useLayoutEffect;
        let v = s.forwardRef(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, k)=>{
            let TRef = s.useRef(false);
            let ARef = s.useRef(null);
            w(()=>{
                let { current } = TRef;
                let { current: current_1 } = ARef;
                if (!(current || current_1 === null)) {
                    if (onError) {
                        current_1.src = current_1.src;
                    }
                    if (current_1.complete) {
                        g(current_1, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
                    }
                    TRef.current = true;
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
            let C = m.useMergedRef(k, ARef);
            return i.jsx("img", {
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
                ref: C,
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
            if (isAppRouter && o.default.preload) {
                o.default.preload(imgAttributes.src, r);
                return null;
            }
            return i.jsx(l.default, {
                children: i.jsx("link", {
                    rel: "preload",
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    ...r
                }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
            });
        }
        let y = s.forwardRef((e, t)=>{
            let r = s.useContext(f.RouterContext);
            let n = s.useContext(c.ImageConfigContext);
            let imgConf = s.useMemo(()=>{
                let e = h || n || u.imageConfigDefault;
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
                    localPatterns: typeof window === "undefined" ? n?.localPatterns : e.localPatterns
                };
            }, [
                n
            ]);
            let { onLoad, onLoadingComplete } = e;
            let mRef = s.useRef(onLoad);
            s.useEffect(()=>{
                mRef.current = onLoad;
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
            let { props, meta } = d.getImgProps(e, {
                defaultLoader: p.default,
                imgConf,
                blurComplete,
                showAltText
            });
            return i.jsxs(i.Fragment, {
                children: [
                    i.jsx(v, {
                        ...props,
                        unoptimized: meta.unoptimized,
                        placeholder: meta.placeholder,
                        fill: meta.fill,
                        onLoadRef: mRef,
                        onLoadingCompleteRef: gRef,
                        setBlurComplete,
                        setShowAltText,
                        sizesInput: e.sizes,
                        ref: t
                    }),
                    meta.preload ? i.jsx(x, {
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
        function n(e, t) {
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
                return n;
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
        let n = e.r(823971);
        let a = e.r(521222);
        let i = e.r(433198);
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
        function d({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, O) {
            let L;
            let config;
            let blurWidth;
            let blurHeight;
            let { imgConf, showAltText, blurComplete, defaultLoader } = O;
            let B = imgConf || i.imageConfigDefault;
            if ("allSizes" in B) {
                config = B;
            } else {
                let e = [
                    ...B.deviceSizes,
                    ...B.imageSizes
                ].sort((e, t)=>e - t);
                let t = B.deviceSizes.sort((e, t)=>e - t);
                let r = B.qualities?.sort((e, t)=>e - t);
                config = {
                    ...B,
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
            let H = "__next_img_default" in loader;
            if (H) {
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
            let z = l(width);
            let K = l(height);
            if ((L = src) && typeof L === "object" && (o(L) || L.src !== undefined)) {
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
                    if (z || K) {
                        if (z && !K) {
                            let e = z / t.width;
                            K = Math.round(t.height * e);
                        } else if (!z && K) {
                            let e = K / t.height;
                            z = Math.round(t.width * e);
                        }
                    } else {
                        z = t.width;
                        K = t.height;
                    }
                }
            }
            let X = !priority && !preload && (loading === "lazy" || loading === undefined);
            if (!(src = typeof src === "string" ? src : W) || src.startsWith("data:") || src.startsWith("blob:")) {
                unoptimized = true;
                X = false;
            }
            if (config.unoptimized) {
                unoptimized = true;
            }
            if (H && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
                unoptimized = true;
            }
            let quality_1 = l(quality);
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
                widthInt: z,
                heightInt: K,
                blurWidth,
                blurHeight,
                blurDataURL: blurDataURL || "",
                objectFit: Y.objectFit
            })}")` : `url("${placeholder}")`;
            let backgroundSize = s.includes(Y.objectFit) ? Y.objectFit === "fill" ? "100% 100%" : "cover" : Y.objectFit;
            let Q = backgroundImage ? {
                backgroundSize,
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage
            } : {};
            let Z = (({ config, src, unoptimized, width, quality, sizes, loader })=>{
                if (unoptimized) {
                    if (src.startsWith("/") && !src.startsWith("//")) {
                        let e = n.getDeploymentId();
                        if (src.includes("/_next/static/immutable") && !n.getAssetToken()) {
                            e = undefined;
                        } else if (e) {
                            let r = src.indexOf("?");
                            if (-1 !== r) {
                                let n = new URLSearchParams(src.slice(r + 1));
                                if (!n.get("dpl")) {
                                    n.append("dpl", e);
                                    src = src.slice(0, r) + "?" + n.toString();
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
                let { widths, kind } = (({ deviceSizes, allSizes }, r, n)=>{
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g;
                        let a = [];
                        for(let e; e = r.exec(n);){
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
                    srcSet: widths.map((r, n)=>`${loader({
                            config,
                            src,
                            quality,
                            width: r
                        })} ${kind === "w" ? r : n + 1}${kind}`).join(", "),
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
                width: z,
                quality: quality_1,
                sizes,
                loader
            });
            let loading_1 = X ? "lazy" : loading;
            return {
                props: {
                    ...rest,
                    loading: loading_1,
                    fetchPriority,
                    width: z,
                    height: K,
                    decoding,
                    className,
                    style: {
                        ...Y,
                        ...Q
                    },
                    sizes: Z.sizes,
                    srcSet: Z.srcSet,
                    src: overrideSrc || Z.src
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
        var n = {
            default () {
                return useH;
            },
            defaultHead () {
                return c;
            }
        };
        for(var a in n){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: n[a]
            });
        }
        let i = e.r(330053);
        let s = e.r(171266);
        let o = e.r(281889);
        let l = s._(e.r(513679));
        let d = i._(e.r(194094));
        let u = e.r(543091);
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
        let p = [
            "name",
            "httpEquiv",
            "charSet",
            "itemProp"
        ];
        function reduceComponentsToState(e) {
            let t;
            let r;
            let n;
            let a;
            return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, n = new Set, a = {}, (e)=>{
                let i = true;
                let s = false;
                if (e.key && typeof e.key !== "number" && e.key.indexOf("$") > 0) {
                    s = true;
                    let r = e.key.slice(e.key.indexOf("$") + 1);
                    if (t.has(r)) {
                        i = false;
                    } else {
                        t.add(r);
                    }
                }
                switch(e.type){
                    case "title":
                    case "base":
                        if (r.has(e.type)) {
                            i = false;
                        } else {
                            r.add(e.type);
                        }
                        break;
                    case "meta":
                        for(let t = 0, r = p.length; t < r; t++){
                            let r = p[t];
                            if (e.props.hasOwnProperty(r)) {
                                if (r === "charSet") {
                                    if (n.has(r)) {
                                        i = false;
                                    } else {
                                        n.add(r);
                                    }
                                } else {
                                    let t = e.props[r];
                                    let n = a[r] || new Set;
                                    if ((r !== "name" || !s) && n.has(t)) {
                                        i = false;
                                    } else {
                                        n.add(t);
                                        a[r] = n;
                                    }
                                }
                            }
                        }
                }
                return i;
            })).reverse().map((e, t)=>{
                let key = e.key || t;
                return l.default.cloneElement(e, {
                    key
                });
            });
        }
        let useH = ({ children })=>{
            let headManager = l.useContext(u.HeadManagerContext);
            return o.jsx(d.default, {
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
        function n({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
            let o = blurWidth ? 40 * blurWidth : widthInt;
            let l = blurHeight ? 40 * blurHeight : heightInt;
            let d = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "getImageBlurSvg", {
            enumerable: true,
            get () {
                return n;
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
                return IContext;
            }
        });
        let n = e.r(330053)._(e.r(513679));
        let a = e.r(433198);
        let IContext = n.default.createContext(a.imageConfigDefault);
    },
    433198,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            VALID_LOADERS () {
                return i;
            },
            imageConfigDefault () {
                return s;
            }
        };
        for(var a in n){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: n[a]
            });
        }
        let i = [
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
    453792,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            default () {
                return o_Image;
            },
            getImageProps () {
                return d;
            }
        };
        for(var a in n){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: n[a]
            });
        }
        let i = e.r(330053);
        let s = e.r(18306);
        let o = e.r(665279);
        let l = i._(e.r(396674));
        function d(e) {
            let { props } = s.getImgProps(e, {
                defaultLoader: l.default,
                imgConf: {
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
                }
            });
            for (let [e, r] of Object.entries(props)){
                r === undefined && delete props[e];
            }
            return {
                props
            };
        }
        let o_Image = o.Image;
    },
    726215,
    (e, t, r)=>{
        t.exports = e.r(453792);
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
        let n = e.r(156974);
        let a = e.r(823971);
        function i({ config, src, width, quality }) {
            let o = a.getDeploymentId();
            if (src.startsWith("/") && !src.startsWith("//")) {
                if (src.includes("/_next/static/immutable") && !a.getAssetToken()) {
                    o = undefined;
                } else {
                    let e = src.indexOf("?");
                    if (-1 !== e) {
                        let r = new URLSearchParams(src.slice(e + 1));
                        let n = r.get("dpl");
                        if (n) {
                            o = n;
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
            let l = n.findClosestQuality(quality, config);
            return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${l}${src.startsWith("/") && o ? `&dpl=${o}` : ""}`;
        }
        i.__next_img_default = true;
        let s = i;
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
        let n = e.r(513679);
        let a = typeof window === "undefined";
        let i = a ? ()=>{} : n.useLayoutEffect;
        let s = a ? ()=>{} : n.useEffect;
        function o(e) {
            let { headManager, reduceComponentsToState } = e;
            function o() {
                if (headManager && headManager.mountedInstances) {
                    let e = n.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
                    headManager.updateHead(reduceComponentsToState(e));
                }
            }
            if (a) {
                headManager?.mountedInstances?.add(e.children);
                o();
            }
            i(()=>{
                headManager?.mountedInstances?.add(e.children);
                return ()=>{
                    headManager?.mountedInstances?.delete(e.children);
                };
            });
            i(()=>{
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
    },
    509848,
    660971,
    380603,
    270222,
    155860,
    619832,
    27626,
    103009,
    999380,
    755118,
    (e)=>{
        "use strict";
        var t = e.i(386465);
        var r = e.i(513679);
        if (typeof HTMLTemplateElement !== "undefined") {
            Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
                configurable: true,
                enumerable: true,
                get () {
                    return this.content.firstChild;
                }
            });
            Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
                configurable: true,
                enumerable: true,
                value (e) {
                    return this.content.appendChild(e);
                }
            });
            Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
                configurable: true,
                enumerable: true,
                value (e) {
                    return this.content.removeChild(e);
                }
            });
            Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
                configurable: true,
                enumerable: true,
                value (e, t) {
                    return this.content.insertBefore(e, t);
                }
            });
        }
        let NContext = r.createContext(false);
        function a(e) {
            let useT = (t, a)=>{
                if (r.useContext(NContext)) {
                    return null;
                }
                return e(t, a);
            };
            useT.displayName = e.displayName || e.name;
            return r.forwardRef(useT);
        }
        e.s([
            "Hidden",
            0,
            (e)=>{
                if (r.useContext(NContext)) {
                    return r.default.createElement(r.default.Fragment, null, e.children);
                }
                let t = r.default.createElement(NContext.Provider, {
                    value: true
                }, e.children);
                return r.default.createElement("template", null, t);
            },
            "createHideableComponent",
            0,
            a,
            "useIsHidden",
            0,
            ()=>r.useContext(NContext)
        ], 660971);
        let IContext = r.createContext({});
        e.s([
            "LabelContext",
            0,
            IContext
        ], 380603);
        var s = e.i(120306);
        var o = e.i(526296);
        var l = e.i(900907);
        function useD(e, t) {
            let { id, "aria-label": aria_label, "aria-labelledby": aria_labelledby } = e;
            id = l.useId(id);
            if (aria_labelledby && aria_label) {
                aria_labelledby = [
                    ...new Set([
                        id,
                        ...aria_labelledby.trim().split(/\s+/)
                    ])
                ].join(" ");
            } else if (aria_labelledby) {
                aria_labelledby = aria_labelledby.trim().split(/\s+/).join(" ");
            }
            if (!(aria_label || aria_labelledby || !t)) {
                aria_label = t;
            }
            return {
                id,
                "aria-label": aria_label,
                "aria-labelledby": aria_labelledby
            };
        }
        e.s([
            "useLabels",
            0,
            useD
        ], 270222);
        e.s([
            "useLabel",
            0,
            (e)=>{
                let { id, label, "aria-labelledby": aria_labelledby, "aria-label": aria_label, labelElementType = "label" } = e;
                id = l.useId(id);
                let s = l.useId();
                let labelProps = {};
                if (label) {
                    aria_labelledby = aria_labelledby ? `${s} ${aria_labelledby}` : s;
                    labelProps = {
                        id: s,
                        htmlFor: labelElementType === "label" ? id : undefined
                    };
                }
                return {
                    labelProps,
                    fieldProps: useD({
                        id,
                        "aria-label": aria_label,
                        "aria-labelledby": aria_labelledby
                    })
                };
            }
        ], 155860);
        let u = new Set([
            "Arab",
            "Syrc",
            "Samr",
            "Mand",
            "Thaa",
            "Mend",
            "Nkoo",
            "Adlm",
            "Rohg",
            "Hebr"
        ]);
        let c = new Set([
            "ae",
            "ar",
            "arc",
            "bcc",
            "bqi",
            "ckb",
            "dv",
            "fa",
            "glk",
            "he",
            "ku",
            "mzn",
            "nqo",
            "pnb",
            "ps",
            "sd",
            "ug",
            "ur",
            "yi"
        ]);
        var f = e.i(514415);
        let SYMBOL_REACT_ARIA_I18N_LOCALE = Symbol.for("react-aria.i18n.locale");
        function m() {
            let locale = typeof window !== "undefined" && window[SYMBOL_REACT_ARIA_I18N_LOCALE] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
            try {
                Intl.DateTimeFormat.supportedLocalesOf([
                    locale
                ]);
            } catch  {
                locale = "en-US";
            }
            return {
                locale,
                direction: !((e)=>{
                    if (Intl.Locale) {
                        let t = new Intl.Locale(e).maximize();
                        let r = typeof t.getTextInfo === "function" ? t.getTextInfo() : t.textInfo;
                        if (r) {
                            return r.direction === "rtl";
                        }
                        if (t.script) {
                            return u.has(t.script);
                        }
                    }
                    let t = e.split("-")[0];
                    return c.has(t);
                })(locale) ? "ltr" : "rtl"
            };
        }
        let h = m();
        let g = new Set;
        function b() {
            for (let e of (h = m(), g)){
                e(h);
            }
        }
        let WContext = r.default.createContext(null);
        e.s([
            "useLocale",
            0,
            ()=>{
                let e = (()=>{
                    let e = f.useIsSSR();
                    let [t, setT] = r.useState(h);
                    r.useEffect(()=>{
                        if (g.size === 0) {
                            window.addEventListener("languagechange", b);
                        }
                        g.add(setT);
                        return ()=>{
                            g.delete(setT);
                            if (g.size === 0) {
                                window.removeEventListener("languagechange", b);
                            }
                        };
                    }, []);
                    if (e) {
                        return {
                            locale: typeof window !== "undefined" && window[SYMBOL_REACT_ARIA_I18N_LOCALE] || "en-US",
                            direction: "ltr"
                        };
                    }
                    return t;
                })();
                return r.useContext(WContext) || e;
            }
        ], 619832);
        let v = new Map;
        let x = false;
        try {
            x = new Intl.NumberFormat("de-DE", {
                signDisplay: "exceptZero"
            }).resolvedOptions().signDisplay === "exceptZero";
        } catch  {}
        let y = false;
        try {
            y = new Intl.NumberFormat("de-DE", {
                style: "unit",
                unit: "degree"
            }).resolvedOptions().style === "unit";
        } catch  {}
        e.s([
            "clamp",
            0,
            (e, t = -Infinity, r = Infinity)=>Math.min(Math.max(e, t), r)
        ], 27626);
        let SContext = r.createContext(null);
        let E = null;
        function P(e, t = "assertive", r = 7000) {
            if (E) {
                E.announce(e, t, r);
            } else {
                E = new R;
                if (typeof IS_REACT_ACT_ENVIRONMENT === "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== "undefined") {
                    E.announce(e, t, r);
                } else {
                    setTimeout(()=>{
                        E?.isAttached() && E?.announce(e, t, r);
                    }, 100);
                }
            }
        }
        class R {
            constructor(){
                this.node = null;
                this.assertiveLog = null;
                this.politeLog = null;
                if (typeof document !== "undefined") {
                    this.node = document.createElement("div");
                    this.node.dataset.liveAnnouncer = "true";
                    Object.assign(this.node.style, {
                        border: 0,
                        clip: "rect(0 0 0 0)",
                        clipPath: "inset(50%)",
                        height: "1px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        width: "1px",
                        whiteSpace: "nowrap"
                    });
                    this.assertiveLog = this.createLog("assertive");
                    this.node.appendChild(this.assertiveLog);
                    this.politeLog = this.createLog("polite");
                    this.node.appendChild(this.politeLog);
                    document.body.prepend(this.node);
                }
            }
            isAttached() {
                return this.node?.isConnected;
            }
            createLog(e) {
                let t = document.createElement("div");
                t.setAttribute("role", "log");
                t.setAttribute("aria-live", e);
                t.setAttribute("aria-relevant", "additions");
                return t;
            }
            destroy() {
                if (this.node) {
                    document.body.removeChild(this.node);
                    this.node = null;
                }
            }
            announce(e, t = "assertive", r = 7000) {
                if (!this.node) {
                    return;
                }
                let n = document.createElement("div");
                if (typeof e === "object") {
                    n.setAttribute("role", "img");
                    n.setAttribute("aria-labelledby", e["aria-labelledby"]);
                } else {
                    n.textContent = e;
                }
                t === "assertive" ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n);
                if (e !== "") {
                    setTimeout(()=>{
                        n.remove();
                    }, r);
                }
            }
            clear(e) {
                this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
            }
        }
        var j = e.i(138980);
        var k = e.i(113329);
        function T(e, t) {
            let r;
            let { elementType = "button", isDisabled, onPress, onPressStart, onPressEnd, onPressUp, onPressChange, preventFocusOnPress, allowFocusWhenDisabled, onClick, href, target, rel, type = "button" } = e;
            r = elementType === "button" ? {
                type,
                disabled: isDisabled,
                form: e.form,
                formAction: e.formAction,
                formEncType: e.formEncType,
                formMethod: e.formMethod,
                formNoValidate: e.formNoValidate,
                formTarget: e.formTarget,
                name: e.name,
                value: e.value
            } : {
                role: "button",
                href: elementType !== "a" || isDisabled ? undefined : href,
                target: elementType === "a" ? target : undefined,
                type: elementType === "input" ? type : undefined,
                disabled: elementType === "input" ? isDisabled : undefined,
                "aria-disabled": isDisabled && elementType !== "input" ? isDisabled : undefined,
                rel: elementType === "a" ? rel : undefined
            };
            let { pressProps, isPressed } = k.usePress({
                onPressStart,
                onPressEnd,
                onPressChange,
                onPress,
                onPressUp,
                onClick,
                isDisabled,
                preventFocusOnPress,
                ref: t
            });
            let { focusableProps } = j.useFocusable(e, t);
            if (allowFocusWhenDisabled) {
                focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
            }
            let S = o.mergeProps(focusableProps, pressProps, s.filterDOMProps(e, {
                labelable: true
            }));
            return {
                isPressed,
                buttonProps: o.mergeProps(r, S, {
                    "aria-haspopup": e["aria-haspopup"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-controls": e["aria-controls"],
                    "aria-pressed": e["aria-pressed"],
                    "aria-current": e["aria-current"],
                    "aria-disabled": e["aria-disabled"]
                })
            };
        }
        e.s([
            "useButton",
            0,
            T
        ], 103009);
        var A = e.i(622030);
        var C = e.i(517491);
        let N = r.createContext({});
        let O = a((e, n)=>{
            [e, n] = t.useContextProps(e, n, N);
            let a = e;
            let { isPending } = a;
            let { buttonProps, isPressed } = T(e, n);
            buttonProps = ((e, t)=>{
                if (t) {
                    for(let t in e){
                        if (t.startsWith("on") && !L.test(t)) {
                            e[t] = undefined;
                        }
                    }
                    e.href = undefined;
                    e.target = undefined;
                }
                return e;
            })(buttonProps, isPending);
            let { focusProps, isFocused, isFocusVisible } = A.useFocusRing(e);
            let { hoverProps, isHovered } = C.useHover({
                ...e,
                isDisabled: e.isDisabled || isPending
            });
            let values = {
                isHovered,
                isPressed: (a.isPressed || isPressed) && !isPending,
                isFocused,
                isFocusVisible,
                isDisabled: e.isDisabled || false,
                isPending: isPending ?? false
            };
            let b = t.useRenderProps({
                ...e,
                values,
                defaultClassName: "react-aria-Button"
            });
            let w = l.useId(buttonProps.id);
            let v = l.useId();
            let x = buttonProps["aria-labelledby"];
            isPending && (x ? x = `${x} ${v}` : buttonProps["aria-label"] && (x = `${w} ${v}`));
            let yRef = r.useRef(isPending);
            r.useEffect(()=>{
                let e = {
                    "aria-labelledby": x || w
                };
                if (!yRef.current && isFocused && isPending) {
                    P(e, "assertive");
                } else if (yRef.current && isFocused && !isPending) {
                    P(e, "assertive");
                }
                yRef.current = isPending;
            }, [
                isPending,
                isFocused,
                x,
                w
            ]);
            let E = s.filterDOMProps(e, {
                global: true
            });
            delete E.onClick;
            return r.default.createElement(t.dom.button, {
                ...o.mergeProps(E, b, buttonProps, focusProps, hoverProps),
                type: buttonProps.type === "submit" && isPending ? "button" : buttonProps.type,
                id: w,
                ref: n,
                "aria-labelledby": x,
                slot: e.slot || undefined,
                "aria-disabled": isPending ? "true" : buttonProps["aria-disabled"],
                "data-disabled": e.isDisabled || undefined,
                "data-pressed": values.isPressed || undefined,
                "data-hovered": isHovered || undefined,
                "data-focused": isFocused || undefined,
                "data-pending": isPending || undefined,
                "data-focus-visible": isFocusVisible || undefined
            }, r.default.createElement(SContext.Provider, {
                value: {
                    id: v
                }
            }, b.children));
        });
        let L = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
        e.s([
            "Button",
            0,
            O,
            "ButtonContext",
            0,
            N
        ], 509848);
        var _ = e.i(847712);
        e.s([
            "useEvent",
            0,
            (e, t, n, a)=>{
                let i = _.useEffectEvent(n);
                let s = n == null;
                r.useEffect(()=>{
                    if (s || !e.current) {
                        return;
                    }
                    let e_current = e.current;
                    e_current.addEventListener(t, i, a);
                    return ()=>{
                        e_current.removeEventListener(t, i, a);
                    };
                }, [
                    e,
                    t,
                    a,
                    s
                ]);
            }
        ], 999380);
        let I = typeof document !== "undefined" ? r.default.useInsertionEffect ?? r.default.useLayoutEffect : ()=>{};
        e.s([
            "useControlledState",
            0,
            (e, t, n)=>{
                let [a, setA] = r.useState(e || t);
                let sRef = r.useRef(a);
                let oRef = r.useRef(e !== undefined);
                let l = e !== undefined;
                r.useEffect(()=>{
                    oRef.current;
                    oRef.current = l;
                }, [
                    l
                ]);
                let d = l ? e : a;
                I(()=>{
                    sRef.current = d;
                });
                let [, uDispatch] = r.useReducer(()=>({}), {});
                return [
                    d,
                    r.useCallback((e, ...t)=>{
                        let r = typeof e === "function" ? e(sRef.current) : e;
                        if (!Object.is(sRef.current, r)) {
                            sRef.current = r;
                            setA(r);
                            uDispatch();
                            n?.(r, ...t);
                        }
                    }, [
                        n
                    ])
                ];
            }
        ], 755118);
    }
]);
