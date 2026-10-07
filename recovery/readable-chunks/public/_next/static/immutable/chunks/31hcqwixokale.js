;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "3f817864-1c3f-a2e9-5290-7a41d1a2750c";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    974981,
    699472,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var i = e.i(983871);
        var n = e.i(300778);
        var a = e.i(513679);
        var o = e.i(631923);
        var l = e.i(246880);
        var s = e.i(276522);
        var u = e.i(464068);
        function useD({ children, className, href, active, submenu, isHovered = false, mode = "default", onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }) {
            let { bgTheme } = s.useNav();
            let x = n.usePathname();
            let [y, setY] = a.useState(false);
            let j = href === "/" && x === href || href !== "/" && x.startsWith(href.toString()) || active;
            let _ = mode === "index" ? j && !isHovered : !isHovered;
            let E = href.toString().startsWith("https");
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
                        className: r.default("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", _ && mode !== "index" && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
                    }),
                    t.jsx("div", {
                        className: r.default("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", isHovered && mode !== "index" && bgTheme === "light" && "text-text-primary", isHovered && mode !== "index" && bgTheme === "dark" && "text-white", mode === "index" && bgTheme === "dark" && !_ && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
                        children
                    }),
                    y && submenu
                ]
            });
            if (submenu) {
                return t.jsx("button", {
                    type: "button",
                    "aria-current": j ? "page" : undefined,
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
            return t.jsx(u.default, {
                "aria-current": j ? "page" : undefined,
                onMouseEnter: onMouseEnter_1,
                onMouseLeave: onMouseLeave_1,
                onFocus: onFocus_1,
                onBlur: onBlur_1,
                className: className_1,
                href,
                target: E ? "_blank" : undefined,
                ...rest,
                children: children_1
            });
        }
        e.s([
            "NavItem",
            0,
            useD
        ], 699472);
        let c = {
            showHover ({ isHovered, item, moveHoverTo }) {
                let i = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, i.width);
                } else {
                    moveHoverTo(item.offsetLeft, i.width, false);
                }
            },
            idleState ({ hoverRef }) {
                i.default.killTweensOf(hoverRef.current);
                setTimeout(()=>{
                    i.default.set(hoverRef.current, {
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
                let i = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, i.width);
                } else {
                    let e = item.closest("nav")?.querySelector('[aria-current="page"]');
                    if (e) {
                        let t = e.getBoundingClientRect();
                        moveHoverTo(e.offsetLeft, t.width, false);
                    }
                    moveHoverTo(item.offsetLeft, i.width);
                }
            }
        };
        let m = [
            "/book-a-demo",
            "/company"
        ];
        e.s([
            "Nav",
            0,
            ({ className, mode = "auto", indexModePaths = m, items, logoHref = "/", logoAriaLabel, logoIcon, logo, ...rest })=>{
                let yRef = a.useRef(null);
                let SRef = a.useRef(null);
                let jRef = a.useRef(null);
                let _Ref = a.useRef(null);
                let [E, setE] = a.useState(false);
                let { collapsed, setCollapsed } = s.useNav();
                let ORef = a.useRef(null);
                let T = n.usePathname();
                function A() {
                    if (mode !== "auto") {
                        return mode;
                    }
                    indexModePaths.includes(T);
                    return "default";
                }
                function C() {
                    if (A() === "default") {
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
                    if (jRef.current) {
                        I(jRef.current);
                    } else {
                        C();
                    }
                }
                a.useEffect(()=>{
                    if (!E) {
                        C();
                    }
                }, [
                    T
                ]);
                a.useEffect(()=>{
                    ORef.current && (collapsed && !E ? i.default.to(ORef.current, {
                        width: 0,
                        duration: o.DURATION.medium,
                        ease: o.EASE,
                        onUpdate
                    }) : i.default.to(ORef.current, {
                        width: 53,
                        duration: o.DURATION.medium,
                        ease: o.EASE,
                        clearProps: "width",
                        onUpdate
                    }));
                }, [
                    collapsed,
                    E
                ]);
                let N = (e)=>{
                    if (l.hasTouchSupport()) {
                        return;
                    }
                    jRef.current = e.currentTarget;
                    if (_Ref.current) {
                        _Ref.current.style.transitionDuration = "";
                    }
                    let t = e.currentTarget.querySelector(".nav-item-hover");
                    t.style.transitionDuration = "0s";
                    _Ref.current = t;
                    I(e.currentTarget);
                };
                let L = ()=>{
                    if (!l.hasTouchSupport() && jRef.current) {
                        jRef.current = null;
                    }
                };
                let z = ()=>{
                    if (!l.hasTouchSupport()) {
                        setE(true);
                    }
                };
                let $ = ()=>{
                    if (!l.hasTouchSupport()) {
                        C();
                        setE(false);
                    }
                };
                let I = (item)=>{
                    if (A() === "default") {
                        c.showHover({
                            isHovered: E,
                            item,
                            moveHoverTo
                        });
                    } else {
                        f.showHover({
                            isHovered: E,
                            item,
                            moveHoverTo
                        });
                    }
                };
                function moveHoverTo(x, width, r = true) {
                    if (r) {
                        i.default.to(SRef.current, {
                            width,
                            x,
                            duration: o.DURATION.fast,
                            ease: o.EASE_OUT
                        });
                    } else {
                        i.default.set(SRef.current, {
                            x,
                            width
                        });
                    }
                }
                let mode_1 = A();
                return t.jsxs("nav", {
                    "aria-label": "Main navigation",
                    ref: yRef,
                    className: r.default("flex w-max", "p-0", className),
                    onMouseOver: z,
                    onMouseEnter: z,
                    onFocus: ()=>{},
                    onBlur: ()=>{
                        if (!E) {
                            $();
                        }
                    },
                    onMouseLeave: $,
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
                        logo && t.jsxs(useD, {
                            href: logoHref,
                            "aria-label": logoAriaLabel,
                            isHovered: E,
                            mode: mode_1,
                            onMouseEnter: N,
                            onMouseLeave: L,
                            onFocus: N,
                            onBlur: L,
                            children: [
                                t.jsx("span", {
                                    className: "ml-0",
                                    children: logoIcon
                                }),
                                t.jsx("span", {
                                    ref: ORef,
                                    className: r.default("inline-block w-[53px] overflow-hidden border-box"),
                                    children: logo
                                })
                            ]
                        }),
                        items.map((e)=>t.jsx(useD, {
                                active: e.active,
                                href: e.href,
                                "aria-label": e["aria-label"],
                                isHovered: E,
                                mode: mode_1,
                                onMouseEnter: N,
                                onMouseLeave: L,
                                onFocus: N,
                                onBlur: L,
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
    602045,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var i = e.i(607198);
        var n = e.i(726215);
        var a = e.i(513679);
        var o = e.i(424268);
        let l = o.createServerReference("0021215496296512e5335ddc9ac56cca0319cde48a", o.callServer, undefined, o.findSourceMapURL, "getJobs");
        e.i(428044);
        var s = e.i(276522);
        var u = e.i(41049);
        let d = [
            {
                title: "Engineering",
                url: "/careers/engineering1"
            },
            {
                title: "Engineering",
                url: "/careers/engineering2"
            },
            {
                title: "Engineering",
                url: "/careers/engineering3"
            },
            {
                title: "Engineering",
                url: "/careers/engineering4"
            }
        ];
        function c({ title, url }) {
            return t.jsx("li", {
                className: "h-[6.6rem]",
                children: t.jsxs("a", {
                    href: url,
                    target: "_blank",
                    rel: "noopener",
                    className: r.default("relative z-0 group w-full h-full flex justify-between items-center gap-[3.2rem] rounded-[12px]", "p-[1.6rem] desktop:p-[2.4rem]", "bg-white transition-colors duration-300 ease hover:bg-surface-secondary active:bg-surface-tertiary active:text-white", "text-left desktop:max-h-[82px] border-2 border-transparent", "outline-hidden focus-visible:z-10 focus-visible:border-2 focus-visible:border-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
                    children: [
                        t.jsx("span", {
                            className: "text-body-md",
                            children: title
                        }),
                        t.jsx("span", {
                            "aria-hidden": true,
                            className: r.default("shrink-0 px-[1.5rem] py-[8px] rounded-[1.8rem]", "text-body-sm font-mono", "bg-background-primary text-text-primary transition-colors duration-300", "group-hover:bg-surface-tertiary group-hover:text-text-tertiary", "group-active:bg-background-primary group-active:text-text-primary"),
                            children: "See job"
                        })
                    ]
                })
            });
        }
        e.s([
            "Careers",
            0,
            ()=>{
                let eRef = a.useRef(null);
                let [o, setO] = a.useState([]);
                a.useEffect(()=>{
                    l().then(setO);
                }, []);
                let { setBgTheme } = s.useNav();
                a.useEffect(()=>{
                    let t = i.ScrollTrigger.create({
                        trigger: eRef.current,
                        start: "top top",
                        end: "bottom",
                        invalidateOnRefresh: true,
                        onToggle: (e)=>{
                            if (e.isActive) {
                                setBgTheme("light");
                            }
                        },
                        onLeave: ()=>{
                            setBgTheme("light");
                        },
                        onLeaveBack: ()=>{
                            setBgTheme("light");
                        }
                    });
                    return ()=>{
                        t.kill();
                    };
                }, [
                    setBgTheme
                ]);
                let g = o.length ? o.map((e)=>({
                        title: e.title,
                        url: e.url
                    })) : d;
                return t.jsx("section", {
                    id: "careers",
                    ref: eRef,
                    className: r.default("p-[1.6rem]  tablet:p-[2.4rem] desktop:p-[3.2rem]", "bg-background-primary", "w-full h-auto", "text-center flex justify-center items-center flex-col"),
                    children: t.jsxs("div", {
                        className: r.default("relative overflow-hidden", "rounded-[3.2rem] tablet:rounded-[5.6rem] desktop:rounded-[6.4rem] h-full w-full max-w-[2056px]"),
                        children: [
                            t.jsx(n.default, {
                                src: `${u.ASSETS_URL}/careers/6133c7a1-6683-4912-9518-96e2dbb0bc12.png`,
                                fill: true,
                                alt: "A vast field of blooming wildflowers with vibrant orange and yellow hues stretches under a clear blue sky, conveying a sense of calm and openness.",
                                className: r.default("w-full h-full absolute z-0", "object-cover rounded-16")
                            }),
                            t.jsxs("div", {
                                className: r.default("z-1 relative w-full h-full px-[16px]", "py-[10rem]", "tablet:py-[8%]", "flex flex-col justify-center items-center"),
                                children: [
                                    t.jsx("h2", {
                                        "aria-label": "Careers",
                                        className: r.default("z-1 text-heading-lg text-text-white text-balance", "max-w-[100%] tablet:max-w-[55%] tablet:text-wrap", "mb-[4.8rem] desktop:max-w-[40%] tablet:mb-[8rem] desktop:mb-[4.8rem]"),
                                        children: "The future is bright. Will you help build it?"
                                    }),
                                    t.jsx("ul", {
                                        className: r.default("w-full tablet:w-[546px] desktop:w-[538px] isolate"),
                                        children: g.map((e)=>t.jsx(c, {
                                                title: e.title,
                                                url: e.url
                                            }, e.url))
                                    })
                                ]
                            })
                        ]
                    })
                });
            }
        ], 602045);
    },
    592949,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(638327);
        var i = e.i(809393);
        var n = e.i(607198);
        var a = e.i(513679);
        var o = e.i(176418);
        var l = e.i(983871);
        var s = e.i(726215);
        var u = e.i(41049);
        var d = e.i(990055);
        function useC() {
            let eRef = a.useRef([]);
            let rRef = a.useRef(null);
            let sRef = a.useRef(null);
            let cRef = a.useRef(null);
            let gRef = a.useRef(false);
            let p = [
                {
                    fromAngle: -10,
                    width: 81,
                    height: 102,
                    angle: 50,
                    offsetX: 0,
                    offsetY: 0,
                    color: "red",
                    alt: "A framed artwork of a toothbrush in a blue cup against a yellow background, hanging on a wall with a fire alarm and a portion of a colorful room visible.",
                    src: `${u.ASSETS_URL}/community/1-df8b5d96-1e0c-4c25-a3ed-9c9468cd9ece.jpg`
                },
                {
                    fromAngle: 40,
                    width: 127,
                    height: 98,
                    angle: 140,
                    offsetX: -20,
                    offsetY: -40,
                    color: "orange",
                    alt: "Office supplies neatly organized on a desk include a tape dispenser, pens in a holder, and labeled blue folders in wire racks, creating an orderly workspace.",
                    src: `${u.ASSETS_URL}/community/2-65b3edad-8268-41f5-a281-deba4f06e12f.jpg`
                },
                {
                    fromAngle: 100,
                    width: 97,
                    height: 99,
                    angle: 150,
                    offsetX: 15,
                    offsetY: 20,
                    color: "yellow",
                    alt: 'A blue sticky note with handwritten text saying "How can I brighten your day? :)" is attached to a Dell monitor, conveying a positive and friendly tone.',
                    src: `${u.ASSETS_URL}/community/3-47c96f44-efef-4113-ada5-e38e192010b0.jpg`
                },
                {
                    fromAngle: 130,
                    width: 123,
                    height: 119,
                    angle: 230,
                    offsetX: 40,
                    offsetY: 0,
                    color: "green",
                    alt: "A person in navy scrubs stands smiling against a large tree, bathed in warm sunlight. The background features lush greenery, conveying a serene mood.",
                    src: `${u.ASSETS_URL}/community/4-cf1c47ea-d2a4-4a33-b93b-ae41639d2a57.jpg`
                },
                {
                    fromAngle: 200,
                    width: 122,
                    height: 86,
                    angle: 240,
                    offsetX: 30,
                    offsetY: 40,
                    color: "blue",
                    alt: "Framed medical diplomas and certificates displayed on a wall, reflecting professional achievements and qualifications in a clinical setting.",
                    src: `${u.ASSETS_URL}/community/5-812034c4-2b9e-4024-ac72-a3525f516ef1.jpg`
                },
                {
                    fromAngle: 200,
                    width: 133,
                    height: 85,
                    angle: 300,
                    offsetX: -45,
                    offsetY: 40,
                    color: "purple",
                    alt: 'An open orange notebook with sticky notes, one reads "doghouse 123" and another "Medical supplies." Nearby are a white case and a red pen, suggesting organization.',
                    src: `${u.ASSETS_URL}/community/6-5b195c2c-8b53-4359-b383-b73a7d401374.jpg`
                },
                {
                    fromAngle: 260,
                    width: 110,
                    height: 122,
                    angle: 310,
                    offsetX: -50,
                    offsetY: 0,
                    color: "grey",
                    alt: "A smiling dental professional in black scrubs talks reassuringly to a relaxed child in a dental chair, creating a warm, friendly atmosphere.",
                    src: `${u.ASSETS_URL}/community/7-61b76151-5912-4e42-8eb4-5a779dff7f1d.jpg`
                },
                {
                    fromAngle: -60,
                    width: 126,
                    height: 100,
                    angle: 40,
                    offsetX: -30,
                    offsetY: 0,
                    color: "black",
                    alt: "A person in scrubs with red glasses joyfully twists a green balloon animal in an office. A colorful art piece and a keyboard are in the background.",
                    src: `${u.ASSETS_URL}/community/8-efc7b051-fd81-4dd0-84a6-9b98f3f67e8c.jpg`
                }
            ];
            let h = {
                radiusX: 0,
                radiusY: 0,
                animateScale: true
            };
            function b() {
                if (sRef.current) {
                    gRef.current = true;
                    sRef.current.scrollTrigger?.kill();
                    sRef.current.revert();
                    sRef.current = null;
                    gRef.current = false;
                }
            }
            function v() {
                if (gRef.current) {
                    return;
                }
                let t = sRef.current?.progress() ?? 0;
                eRef.current.forEach((e, r)=>{
                    if (!e) {
                        return;
                    }
                    let i = e.querySelector("img");
                    let n = Math.min(1, 2 * t);
                    let a = p[r].offsetX - p[r].width / 2 + Math.cos(m(p[r].angle - 180)) * h.radiusX;
                    let o = p[r].offsetY - p[r].height / 2 + Math.sin(m(p[r].angle - 180)) * h.radiusY;
                    e.style.transform = `translate(${a}px, ${o}px) scale(${n})`;
                    e.style.scale = "1";
                    e.style.opacity = "1";
                    if (i && h.animateScale) {
                        i.style.transform = `scale(${Math.max(1, 2 - t)})`;
                    }
                });
            }
            function w({ mobile }) {
                h.animateScale = !mobile;
                b();
                h.radiusX = 0.3 * window.innerWidth;
                h.radiusY = 0.3 * window.innerHeight;
                let t = l.default.timeline({
                    paused: true,
                    scrollTrigger: {
                        trigger: "#community",
                        start: "top bottom",
                        end: ()=>{
                            if (window.innerWidth >= d.BREAKPOINTS.desktop) {
                                return `+=${3 * window.innerHeight}`;
                            }
                            return `+=${1.2 * window.innerHeight}`;
                        },
                        scrub: true,
                        invalidateOnRefresh: true,
                        onUpdate: ()=>v()
                    }
                });
                sRef.current = t;
                p.forEach((e)=>{
                    t.fromTo(e, {
                        angle: e.fromAngle
                    }, {
                        angle: e.angle
                    }, 0);
                });
                t.fromTo(h, {
                    radiusX: ()=>0.3 * window.innerWidth,
                    radiusY: ()=>0.3 * window.innerHeight
                }, {
                    radiusX: ()=>0.4 * window.innerWidth,
                    radiusY: ()=>0.4 * window.innerHeight
                }, 0);
                requestAnimationFrame(()=>n.ScrollTrigger.refresh());
            }
            o.useGSAP(()=>{
                let t = l.default.matchMedia();
                t.add(`(max-width: ${d.BREAKPOINTS.desktop - 1}px)`, ()=>{
                    w({
                        mobile: true
                    });
                    cRef.current?.kill();
                    cRef.current = null;
                    return ()=>{
                        b();
                    };
                });
                t.add(`(min-width: ${d.BREAKPOINTS.desktop}px)`, ()=>{
                    w({
                        mobile: false
                    });
                    cRef.current = n.ScrollTrigger.create({
                        trigger: "#community",
                        start: "top top",
                        end: ()=>`+=${2.5 * window.innerHeight}`,
                        pin: true,
                        invalidateOnRefresh: true
                    });
                    return ()=>{
                        cRef.current?.kill();
                        cRef.current = null;
                        b();
                    };
                });
                let r = ()=>{
                    requestAnimationFrame(()=>{
                        requestAnimationFrame(()=>{
                            v();
                        });
                        v();
                    });
                };
                window.addEventListener("resize", r);
                return ()=>{
                    window.removeEventListener("resize", r);
                    if (cRef) {
                        cRef.current?.kill();
                        cRef.current = null;
                    }
                    eRef.current.forEach((e)=>{
                        let t = e?.querySelector("img");
                        if (t) {
                            t.style.transform = "";
                        }
                        if (e) {
                            e.style.transform = "";
                            e.style.scale = "";
                        }
                    });
                };
            }, []);
            return t.jsx("section", {
                ref: rRef,
                className: i.default("absolute top-[4rem] tablet:top-[4rem] desktop:top-0 h-svh w-full pointer-events-none"),
                children: p.map((r, i)=>t.jsx(f, {
                        width: r.width,
                        color: r.color,
                        src: r.src,
                        ref: (t)=>{
                            eRef.current[i] = t;
                        },
                        className: "opacity-0",
                        height: r.height
                    }, `${r.width}-${r.height}-${i}`))
            });
        }
        function f({ width, height, color, ref, src, className }) {
            return t.jsx("div", {
                ref,
                className: i.default("absolute scale-0 top-1/2 left-1/2", className),
                style: {
                    width,
                    height
                },
                children: t.jsx("div", {
                    className: i.default("tablet:scale-150", "desktop:scale-[1.9] relative overflow-hidden w-full h-full rounded-[1.2rem] tablet:rounded-[1.6rem] "),
                    children: t.jsx(s.default, {
                        className: i.default("w-full h-full object-cover"),
                        src,
                        fill: true,
                        sizes: "(min-width: 1280px) 253px, (min-width: 768px) 200px, 133px",
                        quality: 90,
                        alt: "Doctor shot"
                    })
                })
            });
        }
        function m(e) {
            return e * Math.PI / 180;
        }
        e.s([
            "Community",
            0,
            ()=>{
                let [e, setE] = a.useState(null);
                let lRef = a.useRef(null);
                a.useLayoutEffect(()=>{
                    if (!e || !lRef.current) {
                        return;
                    }
                    (()=>{
                        if (!e) {
                            return;
                        }
                        let t = ()=>{
                            if (e.currentFrame >= 24) {
                                e.pause();
                                e.removeEventListener("frame", t);
                            }
                        };
                        e.addEventListener("frame", t);
                    })();
                    let t = null;
                    let r = n.ScrollTrigger.create({
                        trigger: lRef.current,
                        start: "top 80%",
                        once: true,
                        invalidateOnRefresh: true,
                        onEnter: ()=>{
                            let r;
                            r = ()=>{
                                e.setFrame(0);
                                e.play();
                            };
                            if (e.isLoaded) {
                                r();
                            } else {
                                t = ()=>{
                                    r();
                                    if (t) {
                                        e.removeEventListener("load", t);
                                        t = null;
                                    }
                                };
                                e.addEventListener("load", t);
                            }
                        }
                    });
                    return ()=>{
                        if (t) {
                            e.removeEventListener("load", t);
                        }
                        r.kill();
                    };
                }, [
                    e
                ]);
                return t.jsxs("section", {
                    ref: lRef,
                    id: "community",
                    className: i.default("desktop:mb-[12rem] w-full h-svh flex flex-col justify-center items-center relative"),
                    children: [
                        t.jsx("span", {
                            className: i.default("w-[24rem] tablet:w-[32rem] inline-block mb-[2.5rem] desktop:mb-[0rem] tablet:mt-[-2rem]"),
                            children: t.jsx(r.DotLottieReact, {
                                src: "/lottie/flower.lottie",
                                className: "w-full h-auto",
                                animationId: "intro",
                                loop: false,
                                autoplay: false,
                                renderConfig: {
                                    autoResize: true
                                },
                                dotLottieRefCallback: setE
                            })
                        }),
                        t.jsxs("h2", {
                            className: i.default("text-heading-lg text-text-primary text-center w-[90%] tablet:w-[84%] [font-variant-ligatures:common-ligatures] tracking-[initial]"),
                            children: [
                                "Lassie is already trusted by",
                                t.jsx("br", {}),
                                "700+ doctors’ offices",
                                t.jsx("br", {}),
                                "across the country"
                            ]
                        }),
                        t.jsx(useC, {})
                    ]
                });
            }
        ], 592949);
    },
    98469,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(809393);
        var i = e.i(513679);
        e.i(428044);
        var n = e.i(276522);
        e.s([
            "CompanyHeader",
            0,
            ()=>{
                let { setBgTheme } = n.useNav();
                i.useEffect(()=>{
                    setBgTheme("light");
                }, [
                    setBgTheme
                ]);
                return t.jsxs("section", {
                    id: "company-title",
                    className: "w-screen h-svh flex justify-center items-center flex-col",
                    children: [
                        t.jsxs("h1", {
                            className: r.default("flex items-center justify-center flex-col", "desktop:flex-row text-heading-xl text-center mb-[2.4rem] tablet:mb-[3.2rem] desktop:mb-[4rem] [font-variant-ligatures:common-ligatures] tracking-[initial]"),
                            children: [
                                "Reimagining the",
                                t.jsx("br", {}),
                                "doctor’s office."
                            ]
                        }),
                        t.jsx("h3", {
                            className: "text-heading-md",
                            children: "And beyond."
                        })
                    ]
                });
            }
        ]);
    },
    424268,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var i = {
            callServer () {
                return a.callServer;
            },
            createServerReference () {
                return l.createServerReference;
            },
            findSourceMapURL () {
                return o.findSourceMapURL;
            }
        };
        for(var n in i){
            Object.defineProperty(r, n, {
                enumerable: true,
                get: i[n]
            });
        }
        let a = e.r(846211);
        let o = e.r(478329);
        let l = e.r(825044);
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
        let i = e.r(330053);
        let n = e.r(171266);
        let a = e.r(281889);
        let o = n._(e.r(513679));
        let l = i._(e.r(345078));
        let s = i._(e.r(111586));
        let u = e.r(18306);
        let d = e.r(433198);
        let c = e.r(453426);
        let f = e.r(239351);
        let m = i._(e.r(396674));
        let g = e.r(81378);
        let p = {
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
        function h(e, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, a, o) {
            let l = e?.src;
            if (e && e["data-loaded-src"] !== l) {
                e["data-loaded-src"] = l;
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
            if (o.use) {
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
        let v = typeof window === "undefined" ? o.useEffect : o.useLayoutEffect;
        let w = o.forwardRef(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, P)=>{
            let kRef = o.useRef(false);
            let ORef = o.useRef(null);
            v(()=>{
                let { current } = kRef;
                let { current: current_1 } = ORef;
                if (!(current || current_1 === null)) {
                    if (onError) {
                        current_1.src = current_1.src;
                    }
                    if (current_1.complete) {
                        h(current_1, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
                    }
                    kRef.current = true;
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
            let T = g.useMergedRef(P, ORef);
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
                ref: T,
                onLoad: (e)=>{
                    h(e.currentTarget, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
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
            if (isAppRouter && l.default.preload) {
                l.default.preload(imgAttributes.src, r);
                return null;
            }
            return a.jsx(s.default, {
                children: a.jsx("link", {
                    rel: "preload",
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    ...r
                }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
            });
        }
        let y = o.forwardRef((e, t)=>{
            let r = o.useContext(f.RouterContext);
            let i = o.useContext(c.ImageConfigContext);
            let imgConf = o.useMemo(()=>{
                let e = p || i || d.imageConfigDefault;
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
            let gRef = o.useRef(onLoad);
            o.useEffect(()=>{
                gRef.current = onLoad;
            }, [
                onLoad
            ]);
            let hRef = o.useRef(onLoadingComplete);
            o.useEffect(()=>{
                hRef.current = onLoadingComplete;
            }, [
                onLoadingComplete
            ]);
            let [blurComplete, setBlurComplete] = o.useState(false);
            let [showAltText, setShowAltText] = o.useState(false);
            let { props, meta } = u.getImgProps(e, {
                defaultLoader: m.default,
                imgConf,
                blurComplete,
                showAltText
            });
            return a.jsxs(a.Fragment, {
                children: [
                    a.jsx(w, {
                        ...props,
                        unoptimized: meta.unoptimized,
                        placeholder: meta.placeholder,
                        fill: meta.fill,
                        onLoadRef: gRef,
                        onLoadingCompleteRef: hRef,
                        setBlurComplete,
                        setShowAltText,
                        sizesInput: e.sizes,
                        ref: t
                    }),
                    meta.preload ? a.jsx(x, {
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
        let o = [
            "-moz-initial",
            "fill",
            "none",
            "scale-down",
            undefined
        ];
        function l(e) {
            return e.default !== undefined;
        }
        function s(e) {
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
        function u({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, C) {
            let M;
            let config;
            let blurWidth;
            let blurHeight;
            let { imgConf, showAltText, blurComplete, defaultLoader } = C;
            let B = imgConf || a.imageConfigDefault;
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
            let X = "";
            let H = s(width);
            let W = s(height);
            if ((M = src) && typeof M === "object" && (l(M) || M.src !== undefined)) {
                let t = l(src) ? src.default : src;
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
                X = t.src;
                if (!fill) {
                    if (H || W) {
                        if (H && !W) {
                            let e = H / t.width;
                            W = Math.round(t.height * e);
                        } else if (!H && W) {
                            let e = W / t.height;
                            H = Math.round(t.width * e);
                        }
                    } else {
                        H = t.width;
                        W = t.height;
                    }
                }
            }
            let Y = !priority && !preload && (loading === "lazy" || loading === undefined);
            if (!(src = typeof src === "string" ? src : X) || src.startsWith("data:") || src.startsWith("blob:")) {
                unoptimized = true;
                Y = false;
            }
            if (config.unoptimized) {
                unoptimized = true;
            }
            if (q && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
                unoptimized = true;
            }
            let quality_1 = s(quality);
            let K = Object.assign(fill ? {
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
                widthInt: H,
                heightInt: W,
                blurWidth,
                blurHeight,
                blurDataURL: blurDataURL || "",
                objectFit: K.objectFit
            })}")` : `url("${placeholder}")`;
            let backgroundSize = o.includes(K.objectFit) ? K.objectFit === "fill" ? "100% 100%" : "cover" : K.objectFit;
            let Q = backgroundImage ? {
                backgroundSize,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage
            } : {};
            let Z = (({ config, src, unoptimized, width, quality, sizes, loader })=>{
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
                    srcSet: widths.map((r, i)=>`${loader({
                            config,
                            src,
                            quality,
                            width: r
                        })} ${kind === "w" ? r : i + 1}${kind}`).join(", "),
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
                width: H,
                quality: quality_1,
                sizes,
                loader
            });
            let loading_1 = Y ? "lazy" : loading;
            return {
                props: {
                    ...rest,
                    loading: loading_1,
                    fetchPriority,
                    width: H,
                    height: W,
                    decoding,
                    className,
                    style: {
                        ...K,
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
        var i = {
            default () {
                return useP;
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
        let o = e.r(171266);
        let l = e.r(281889);
        let s = o._(e.r(513679));
        let u = a._(e.r(194094));
        let d = e.r(543091);
        function c() {
            return [
                l.jsx("meta", {
                    charSet: "utf-8"
                }, "charset"),
                l.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")
            ];
        }
        function f(e, t) {
            if (typeof t === "string" || typeof t === "number") {
                return e;
            }
            if (t.type === s.default.Fragment) {
                return e.concat(s.default.Children.toArray(t.props.children).reduce((acc, item)=>{
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
                let o = false;
                if (e.key && typeof e.key !== "number" && e.key.indexOf("$") > 0) {
                    o = true;
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
                                    if ((r !== "name" || !o) && i.has(t)) {
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
                return s.default.cloneElement(e, {
                    key
                });
            });
        }
        let useP = ({ children })=>{
            let headManager = s.useContext(d.HeadManagerContext);
            return l.jsx(u.default, {
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
            let l = blurWidth ? 40 * blurWidth : widthInt;
            let s = blurHeight ? 40 * blurHeight : heightInt;
            let u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
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
                return o;
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
        let o = {
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
        var i = {
            default () {
                return l_Image;
            },
            getImageProps () {
                return u;
            }
        };
        for(var n in i){
            Object.defineProperty(r, n, {
                enumerable: true,
                get: i[n]
            });
        }
        let a = e.r(330053);
        let o = e.r(18306);
        let l = e.r(665279);
        let s = a._(e.r(396674));
        function u(e) {
            let { props } = o.getImgProps(e, {
                defaultLoader: s.default,
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
        let l_Image = l.Image;
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
                return o;
            }
        });
        let i = e.r(156974);
        let n = e.r(823971);
        function a({ config, src, width, quality }) {
            let l = n.getDeploymentId();
            if (src.startsWith("/") && !src.startsWith("//")) {
                if (src.includes("/_next/static/immutable") && !n.getAssetToken()) {
                    l = undefined;
                } else {
                    let e = src.indexOf("?");
                    if (-1 !== e) {
                        let r = new URLSearchParams(src.slice(e + 1));
                        let i = r.get("dpl");
                        if (i) {
                            l = i;
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
            let s = i.findClosestQuality(quality, config);
            return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${s}${src.startsWith("/") && l ? `&dpl=${l}` : ""}`;
        }
        a.__next_img_default = true;
        let o = a;
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
                return l;
            }
        });
        let i = e.r(513679);
        let n = typeof window === "undefined";
        let a = n ? ()=>{} : i.useLayoutEffect;
        let o = n ? ()=>{} : i.useEffect;
        function l(e) {
            let { headManager, reduceComponentsToState } = e;
            function l() {
                if (headManager && headManager.mountedInstances) {
                    let e = i.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
                    headManager.updateHead(reduceComponentsToState(e));
                }
            }
            if (n) {
                headManager?.mountedInstances?.add(e.children);
                l();
            }
            a(()=>{
                headManager?.mountedInstances?.add(e.children);
                return ()=>{
                    headManager?.mountedInstances?.delete(e.children);
                };
            });
            a(()=>{
                if (headManager) {
                    headManager._pendingUpdate = l;
                }
                return ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = l;
                    }
                };
            });
            o(()=>{
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
