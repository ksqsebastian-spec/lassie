;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b3500307-dde4-300b-95e8-dea3213077ec";
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
        var o = e.i(983871);
        var n = e.i(300778);
        var a = e.i(513679);
        var u = e.i(631923);
        var i = e.i(246880);
        var s = e.i(276522);
        var l = e.i(464068);
        function useD({ children, className, href, active, submenu, isHovered = false, mode = "default", onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }) {
            let { bgTheme } = s.useNav();
            let b = n.usePathname();
            let [T, setT] = a.useState(false);
            let M = href === "/" && b === href || href !== "/" && b.startsWith(href.toString()) || active;
            let N = mode === "index" ? M && !isHovered : !isHovered;
            let E = href.toString().startsWith("https");
            let className_1 = r.default("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", className);
            let onMouseEnter_1 = (e)=>{
                setT(true);
                onMouseEnter?.(e);
            };
            let onMouseLeave_1 = (e)=>{
                setT(false);
                onMouseLeave?.(e);
            };
            let onFocus_1 = (e)=>{
                setT(true);
                onFocus?.(e);
            };
            let onBlur_1 = (e)=>{
                setT(false);
                onBlur?.(e);
            };
            let children_1 = t.jsxs(t.Fragment, {
                children: [
                    t.jsx("span", {
                        className: r.default("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", N && mode !== "index" && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
                    }),
                    t.jsx("div", {
                        className: r.default("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", isHovered && mode !== "index" && bgTheme === "light" && "text-text-primary", isHovered && mode !== "index" && bgTheme === "dark" && "text-white", mode === "index" && bgTheme === "dark" && !N && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
                        children
                    }),
                    T && submenu
                ]
            });
            if (submenu) {
                return t.jsx("button", {
                    type: "button",
                    "aria-current": M ? "page" : undefined,
                    "aria-haspopup": "true",
                    "aria-expanded": T,
                    onMouseEnter: onMouseEnter_1,
                    onMouseLeave: onMouseLeave_1,
                    onFocus: onFocus_1,
                    onBlur: onBlur_1,
                    className: className_1,
                    children: children_1
                });
            }
            return t.jsx(l.default, {
                "aria-current": M ? "page" : undefined,
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
                let o = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, o.width);
                } else {
                    moveHoverTo(item.offsetLeft, o.width, false);
                }
            },
            idleState ({ hoverRef }) {
                o.default.killTweensOf(hoverRef.current);
                setTimeout(()=>{
                    o.default.set(hoverRef.current, {
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
                let o = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, o.width);
                } else {
                    let e = item.closest("nav")?.querySelector('[aria-current="page"]');
                    if (e) {
                        let t = e.getBoundingClientRect();
                        moveHoverTo(e.offsetLeft, t.width, false);
                    }
                    moveHoverTo(item.offsetLeft, o.width);
                }
            }
        };
        let h = [
            "/book-a-demo",
            "/company"
        ];
        e.s([
            "Nav",
            0,
            ({ className, mode = "auto", indexModePaths = h, items, logoHref = "/", logoAriaLabel, logoIcon, logo, ...rest })=>{
                let TRef = a.useRef(null);
                let SRef = a.useRef(null);
                let MRef = a.useRef(null);
                let NRef = a.useRef(null);
                let [E, setE] = a.useState(false);
                let { collapsed, setCollapsed } = s.useNav();
                let BRef = a.useRef(null);
                let L = n.usePathname();
                function P() {
                    if (mode !== "auto") {
                        return mode;
                    }
                    indexModePaths.includes(L);
                    return "default";
                }
                function k() {
                    if (P() === "default") {
                        c.idleState({
                            hoverRef: SRef
                        });
                    } else {
                        f.idleState({
                            moveHoverTo,
                            navRef: TRef
                        });
                    }
                }
                function onUpdate() {
                    if (MRef.current) {
                        H(MRef.current);
                    } else {
                        k();
                    }
                }
                a.useEffect(()=>{
                    if (!E) {
                        k();
                    }
                }, [
                    L
                ]);
                a.useEffect(()=>{
                    BRef.current && (collapsed && !E ? o.default.to(BRef.current, {
                        width: 0,
                        duration: u.DURATION.medium,
                        ease: u.EASE,
                        onUpdate
                    }) : o.default.to(BRef.current, {
                        width: 53,
                        duration: u.DURATION.medium,
                        ease: u.EASE,
                        clearProps: "width",
                        onUpdate
                    }));
                }, [
                    collapsed,
                    E
                ]);
                let O = (e)=>{
                    if (i.hasTouchSupport()) {
                        return;
                    }
                    MRef.current = e.currentTarget;
                    if (NRef.current) {
                        NRef.current.style.transitionDuration = "";
                    }
                    let t = e.currentTarget.querySelector(".nav-item-hover");
                    t.style.transitionDuration = "0s";
                    NRef.current = t;
                    H(e.currentTarget);
                };
                let U = ()=>{
                    if (!i.hasTouchSupport() && MRef.current) {
                        MRef.current = null;
                    }
                };
                let F = ()=>{
                    if (!i.hasTouchSupport()) {
                        setE(true);
                    }
                };
                let C = ()=>{
                    if (!i.hasTouchSupport()) {
                        k();
                        setE(false);
                    }
                };
                let H = (item)=>{
                    if (P() === "default") {
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
                        o.default.to(SRef.current, {
                            width,
                            x,
                            duration: u.DURATION.fast,
                            ease: u.EASE_OUT
                        });
                    } else {
                        o.default.set(SRef.current, {
                            x,
                            width
                        });
                    }
                }
                let mode_1 = P();
                return t.jsxs("nav", {
                    "aria-label": "Main navigation",
                    ref: TRef,
                    className: r.default("flex w-max", "p-0", className),
                    onMouseOver: F,
                    onMouseEnter: F,
                    onFocus: ()=>{},
                    onBlur: ()=>{
                        if (!E) {
                            C();
                        }
                    },
                    onMouseLeave: C,
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
                            onMouseEnter: O,
                            onMouseLeave: U,
                            onFocus: O,
                            onBlur: U,
                            children: [
                                t.jsx("span", {
                                    className: "ml-0",
                                    children: logoIcon
                                }),
                                t.jsx("span", {
                                    ref: BRef,
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
                                onMouseEnter: O,
                                onMouseLeave: U,
                                onFocus: O,
                                onBlur: U,
                                submenu: e.submenu,
                                children: e.content
                            }, e.href))
                    ]
                });
            }
        ], 974981);
    },
    932828,
    (e)=>{
        e.n(e.i(974981));
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
    }
]);
