;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "8f8ab7f3-3b9b-ec61-6ea7-2f65482404d4";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    881236,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(983871);
        var s = e.i(662576);
        var r = e.i(726215);
        var n = e.i(513679);
        var o = e.i(990055);
        var a = e.i(628974);
        var l = e.i(998304);
        var h = e.i(808761);
        var d = e.i(279206);
        function useC({ onScrollDown }) {
            let [i, setI] = n.useState(true);
            let [r, setR] = n.useState(false);
            n.useEffect(()=>{
                if (r) {
                    return void setI(true);
                }
                let e = window.setTimeout(()=>setI(false), 2000);
                let t = ()=>{
                    setI(true);
                    window.clearTimeout(e);
                    e = window.setTimeout(()=>setI(false), 2000);
                };
                window.addEventListener("mousemove", t);
                return ()=>{
                    window.clearTimeout(e);
                    window.removeEventListener("mousemove", t);
                };
            }, [
                r
            ]);
            return t.jsx("div", {
                className: a.cn("pointer-events-none fixed right-[3rem] bottom-[3rem] z-10 tablet:block hidden pr-(--chrome-pad) pb-(--chrome-pad)", "transition-opacity duration-200 ease-out", i ? "opacity-100" : "opacity-0"),
                children: t.jsx(d.ButtonPrimary, {
                    theme: "primary",
                    onClick: onScrollDown,
                    iconAlwaysVisible: true,
                    onPointerEnter: ()=>setR(true),
                    onPointerLeave: ()=>setR(false),
                    className: a.cn("h-12.5! [&>span:last-child]:w-12.5 [&>span]:h-12.5 [&_svg]:rotate-90", i ? "pointer-events-auto" : "pointer-events-none"),
                    children: "Scroll to read more"
                })
            });
        }
        var u = e.i(365280);
        var p = e.i(393763);
        var v = e.i(631923);
        var f = e.i(6590);
        var m = e.i(625400);
        let w = ()=>window.innerWidth < o.BREAKPOINTS.tablet;
        function y() {
            let e = 195;
            if (window.innerWidth >= 744) {
                e = 280;
            }
            if (window.innerWidth >= o.BREAKPOINTS.desktop) {
                e = 361;
            }
            let t = 0.562 * e;
            let i = window.innerWidth >= o.BREAKPOINTS.desktop ? 48 : 16;
            return {
                width: e,
                height: t,
                x: i,
                y: window.innerHeight - t - i
            };
        }
        function g() {
            return m.StoriesFullscreenView.rect;
        }
        let x = (e, t, i)=>e + (t - e) * i;
        let E = s.default(()=>e.A(141790), {
            loadableGenerated: {
                modules: [
                    898391
                ]
            },
            ssr: false
        });
        function S(locked) {
            window.dispatchEvent(new CustomEvent("modal-lock", {
                detail: {
                    locked
                }
            }));
        }
        e.s([
            "StoriesFullscreen",
            0,
            ()=>{
                let { stories, activeStoryId, closeStory, getStories } = l.useStories();
                let [b, setB] = n.useState(activeStoryId !== null);
                let ARef = n.useRef(null);
                let IRef = n.useRef(null);
                let kRef = n.useRef(null);
                let ref = n.useRef(null);
                let ORef = n.useRef(null);
                let N = true;
                let [R, setR] = n.useState(null);
                n.useEffect(()=>{
                    let t = stories.find((e)=>e.id === activeStoryId);
                    if (t) {
                        setR(t);
                    }
                    setB(activeStoryId !== null);
                }, [
                    activeStoryId,
                    stories
                ]);
                n.useEffect(()=>{
                    let e;
                    let ARef_current = ARef.current;
                    let kRef_current = kRef.current;
                    let IRef_current = IRef.current;
                    if (ARef_current && kRef_current && IRef_current) {
                        if (b) {
                            a();
                            window.removeEventListener("resize", n);
                            window.addEventListener("resize", n);
                            if (N) {
                                S(true);
                            }
                            ORef.current = e = (({ frame, close, backdrop, onDock, onUndock, onMove, onScrub })=>{
                                let l = new p.default({
                                    mouseMultiplier: 0.25
                                });
                                let h = {
                                    value: 0
                                };
                                let d = 0;
                                let c = false;
                                let window_innerWidth = window.innerWidth;
                                let m = CSS.supports("animation-timeline: scroll()");
                                function E() {
                                    let t = g();
                                    let s = y();
                                    frame.style.setProperty("--pip-scale", String(s.width / t.width));
                                    i.default.set(frame, {
                                        width: t.width,
                                        height: t.height,
                                        left: t.x,
                                        bottom: window.innerHeight - (t.y + t.height),
                                        x: 0,
                                        y: 0,
                                        borderRadius: t.radius,
                                        transformOrigin: "left bottom"
                                    });
                                }
                                function S() {
                                    frame.toggleAttribute("data-compact", c && w());
                                }
                                function b() {
                                    let r = g();
                                    let n = y();
                                    let h_value = h.value;
                                    let d = {
                                        width: x(r.width, n.width, h_value),
                                        height: x(r.height, n.height, h_value),
                                        x: x(r.x, n.x, h_value),
                                        y: x(r.y, n.y, h_value)
                                    };
                                    if (w()) {
                                        let scale = d.width / r.width;
                                        onMove?.({
                                            ...d,
                                            radius: r.radius * scale
                                        });
                                        if (!m) {
                                            i.default.set(frame, {
                                                scale
                                            });
                                        }
                                    } else {
                                        let t = x(r.radius, f.StoryItem.MASK_RADIUS, h_value);
                                        onMove?.({
                                            ...d,
                                            radius: t
                                        });
                                        i.default.set(frame, {
                                            ...d,
                                            left: 0,
                                            bottom: "auto",
                                            borderRadius: t,
                                            scale: 1,
                                            overwrite: true
                                        });
                                    }
                                    onScrub?.(h_value);
                                    i.default.set(close, {
                                        autoAlpha: 1 - h_value
                                    });
                                    frame.style.setProperty("--caption-opacity", h_value > 0 ? "0" : "1");
                                    if (backdrop) {
                                        let e = i.default.utils.clamp(0, 1, (h_value - 0.005) / 0.095);
                                        i.default.set(backdrop, {
                                            opacity: 1 - e
                                        });
                                    }
                                }
                                function onUpdate() {
                                    let e = h.value >= 1;
                                    let t = e !== c;
                                    c = e;
                                    if (t) {
                                        S();
                                    }
                                    b();
                                    t && (c ? onDock?.() : onUndock?.());
                                }
                                function A(e, duration, ease) {
                                    if ((d = i.default.utils.clamp(0, 1, e)) === h.value) {
                                        i.default.killTweensOf(h);
                                    } else {
                                        i.default.to(h, {
                                            value: d,
                                            duration,
                                            ease,
                                            overwrite: true,
                                            onUpdate
                                        });
                                    }
                                }
                                function I() {
                                    if (!(!w() || window.innerHeight >= document.documentElement.scrollHeight)) {
                                        i.default.killTweensOf(h);
                                        h.value = d = i.default.utils.clamp(0, 1, window.scrollY / 300);
                                        onUpdate();
                                    }
                                }
                                l.on((e)=>{
                                    if (w()) {
                                        return;
                                    }
                                    let t = -e.deltaY;
                                    if (!(t < 0) || window.scrollY <= 0) {
                                        A(d + t / 500, 0.4, v.EASE_OUT);
                                    }
                                });
                                window.addEventListener("scroll", I, {
                                    passive: true
                                });
                                if (w()) {
                                    E();
                                }
                                b();
                                return {
                                    dock: ()=>{
                                        if (!(h.value >= 1)) {
                                            A(1, v.DURATION.slow, v.EASE_IN_OUT);
                                        }
                                    },
                                    undock: ()=>{
                                        if (!(h.value <= 0)) {
                                            A(0, v.DURATION.slow, v.EASE_IN_OUT);
                                        }
                                    },
                                    isDocked: ()=>c,
                                    destroy: ()=>{
                                        frame.removeAttribute("data-compact");
                                        i.default.killTweensOf(h);
                                        window.removeEventListener("scroll", I);
                                        l.destroy();
                                    },
                                    resize: ()=>{
                                        let e = window.innerWidth !== window_innerWidth;
                                        window_innerWidth = window.innerWidth;
                                        if (e && w()) {
                                            window.scrollTo(0, 0);
                                            A(0, 0, "linear");
                                        }
                                        if (w()) {
                                            E();
                                        }
                                        S();
                                        b();
                                    }
                                };
                            })({
                                frame: ARef_current,
                                close: kRef_current,
                                backdrop: IRef_current,
                                onDock: ()=>{
                                    S(false);
                                },
                                onUndock: ()=>{
                                    if (N) {
                                        S(true);
                                    }
                                },
                                onMove: (e)=>{
                                    u.storiesStore.anchor = e;
                                },
                                onScrub: u.storiesStore.setScrub
                            });
                            i.default.set(ARef_current, {
                                opacity: 1,
                                overwrite: true
                            });
                            i.default.set(kRef_current, {
                                autoAlpha: 1,
                                overwrite: true
                            });
                            i.default.set(IRef_current, {
                                opacity: 1,
                                overwrite: true
                            });
                            u.storiesStore.playerVisible = true;
                            let o = getStories()?.activeItem;
                            if (o) {
                                o.opacity = 0;
                            }
                        } else {
                            u.storiesStore.playerVisible = false;
                            i.default.set(kRef_current, {
                                autoAlpha: 0,
                                overwrite: true
                            });
                            i.default.set(IRef_current, {
                                opacity: 0,
                                overwrite: true
                            });
                            return;
                        }
                        return ()=>{
                            e?.destroy();
                            ORef.current = null;
                            u.storiesStore.setScrub(0);
                            S(false);
                            window.removeEventListener("resize", n);
                        };
                    }
                    function n() {
                        a();
                        e?.resize();
                    }
                    function a() {
                        if (window.innerWidth >= o.BREAKPOINTS.tablet) {
                            N = true;
                        } else {
                            N = false;
                            S(false);
                        }
                    }
                }, [
                    b,
                    getStories
                ]);
                n.useEffect(()=>{
                    if (b) {
                        return;
                    }
                    let ARef_current = ARef.current;
                    if (ARef_current) {
                        i.default.set(ARef_current, {
                            opacity: 0
                        });
                    }
                }, [
                    b
                ]);
                n.useEffect(()=>{
                    if (b) {
                        return;
                    }
                    let _Ref_current = ref.current;
                    if (_Ref_current) {
                        _Ref_current.pause();
                        _Ref_current.currentTime = 0;
                    }
                }, [
                    b
                ]);
                let src = R?.fullVideoSrc;
                let vtt = R?.captionsSrc;
                let U = R?.poster;
                return t.jsxs("div", {
                    className: a.cn("pointer-events-none fixed inset-0 z-9999"),
                    children: [
                        t.jsx("div", {
                            ref: IRef,
                            className: "fixed inset-0 tablet:block hidden bg-black opacity-0",
                            "aria-hidden": true
                        }),
                        t.jsx("div", {
                            ref: ARef,
                            className: a.cn("story-frame fixed h-dvh w-screen overflow-hidden bg-black opacity-0", b && "pointer-events-auto"),
                            children: src && t.jsxs(t.Fragment, {
                                children: [
                                    U && t.jsx(r.default, {
                                        src: U,
                                        alt: "",
                                        fill: true,
                                        unoptimized: true,
                                        className: "object-cover"
                                    }),
                                    t.jsx(E, {
                                        posterSrc: U,
                                        ref,
                                        src,
                                        vtt,
                                        autoPlay: b,
                                        onExpand: ()=>ORef.current?.undock(),
                                        onEnded () {
                                            if (window.innerWidth < o.BREAKPOINTS.tablet) {
                                                let e = ref.current;
                                                if (!e) {
                                                    return;
                                                }
                                                e.pause();
                                                e.currentTime = 0;
                                                return;
                                            }
                                            closeStory();
                                        }
                                    })
                                ]
                            })
                        }),
                        t.jsxs("span", {
                            ref: kRef,
                            className: a.cn("pointer-events-auto fixed top-0 right-0 z-10 tablet:block hidden opacity-0", !b && "pointer-events-none"),
                            children: [
                                t.jsx(h.StoryCloseButton, {
                                    variant: "frosted"
                                }),
                                t.jsx(useC, {
                                    onScrollDown: ()=>ORef.current?.dock()
                                })
                            ]
                        })
                    ]
                });
            }
        ], 881236);
    },
    858965,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(513679);
        var s = e.i(990055);
        var r = e.i(628974);
        e.i(428044);
        var n = e.i(276522);
        var o = e.i(983871);
        var a = e.i(6590);
        var l = e.i(365280);
        var h = e.i(625400);
        var d = e.i(631923);
        var c = e.i(393763);
        var u = e.i(120979);
        class p extends u.StoriesView {
            card = {
                width: 0,
                height: 0,
                gap: 0
            };
            container = {
                x: 0,
                width: 0
            };
            viewport = {
                x: 0,
                width: 0
            };
            handlers = new Map;
            removeScrolling;
            scroll = 0;
            drag = null;
            dragMoved = false;
            transitionIn(e) {
                this.measure();
                if (e) {
                    return this.enterStrip();
                }
                return this.intro();
            }
            transitionOut(e) {
                this.removeEvents();
            }
            measure() {
                let e = 195;
                if (window.innerWidth >= 744) {
                    e = 280;
                }
                if (window.innerWidth >= s.BREAKPOINTS.desktop) {
                    e = 361;
                }
                this.card.width = e;
                this.card.height = 0.562 * e;
                this.card.gap = window.innerWidth < 768 ? 8 : 12;
                this.viewport = {
                    x: window.innerWidth / 2 - e / 2,
                    width: e
                };
                this.container.width = e * this.items.length;
            }
            get focusMargin() {
                return this.growth.x + this.card.gap;
            }
            get growth() {
                return {
                    x: (1.4 * this.card.width - this.card.width) / 2,
                    y: (1.4 * this.card.height - this.card.height) / 2
                };
            }
            intro = ()=>{
                this.scroll = this.stories.activeIndex;
                this.resize();
                let activeIndex = this.stories.activeIndex;
                let t = o.default.timeline({});
                t.add(this.introActive(this.stories.activeItem), 0);
                this.items.forEach((i, s)=>{
                    if (s === activeIndex) {
                        return;
                    }
                    let r = Math.abs(s - activeIndex);
                    t.add(this.introInactive(i), 1 + 0.1 * r);
                });
                t.add(this.stories.background.intro(this.stories.activeStory), 1);
                t.call(this.stories.headline.intro, [
                    this.stories.activeStory
                ], 1.4);
                t.call(()=>{
                    this.goto(activeIndex);
                    this.addEvents();
                }, [], 3);
                return t;
            };
            introActive(e) {
                e.opacity = 1;
                e.maskRadius = a.StoryItem.MASK_RADIUS;
                let { width, height } = this.card;
                let s = o.default.timeline({});
                s.fromTo(e.mask, {
                    clipPath: a.MASK_CLIP(a.StoryItem.MASK_RADIUS, "30% 50% 30% 50%")
                }, {
                    clipPath: a.MASK_CLIP(a.StoryItem.MASK_RADIUS),
                    duration: 2 * d.DURATION.slow,
                    ease: d.EASE_IN_OUT
                });
                s.fromTo([
                    e.duration,
                    e.location
                ], {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: d.DURATION.fast,
                    clearProps: "opacity"
                }, 0.7);
                s.fromTo(e.duration, {
                    x: width / 2,
                    y: 0.3 * height - 15
                }, {
                    x: 0,
                    y: 0,
                    duration: 2 * d.DURATION.slow,
                    ease: d.EASE_IN_OUT
                }, 0);
                s.fromTo(e.location, {
                    x: width / 2,
                    y: -(0.3 * height) + 15
                }, {
                    x: 0,
                    y: 0,
                    duration: 2 * d.DURATION.slow,
                    ease: d.EASE_IN_OUT
                }, 0);
                return s;
            }
            introInactive(e) {
                let t = o.default.timeline({});
                let x_1 = e.index < this.stories.activeIndex ? "50%" : "-50%";
                t.fromTo(e.el, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 2 * d.DURATION.slow,
                    ease: d.EASE_OUT
                });
                t.fromTo(e.wrapper, {
                    x: x_1
                }, {
                    x: "0%",
                    duration: 2 * d.DURATION.slow,
                    ease: d.EASE_OUT
                }, 0);
                o.default.set(e.mask, {
                    clipPath: a.MASK_CLIP(a.StoryItem.MASK_RADIUS)
                });
                e.maskRadius = a.StoryItem.MASK_RADIUS;
                return t;
            }
            enterStrip = ()=>{
                let activeItem = this.stories.activeItem;
                let anchor = l.storiesStore.anchor;
                let i = o.default.timeline({});
                this.scroll = this.parkIndex(activeItem.index);
                let s = this.layout(false);
                activeItem.opacity = 1;
                i.to(this.parked.map((e)=>e.el), {
                    opacity: 1,
                    duration: d.DURATION.medium,
                    ease: d.EASE_OUT
                }, 0);
                if (anchor) {
                    activeItem.setSize(anchor.width, anchor.height, false);
                    this.moveItem(activeItem, anchor.x, anchor.y, false);
                    i.to(activeItem.el, {
                        width: s.width,
                        height: s.height,
                        duration: d.DURATION.slow,
                        ease: d.EASE_IN_OUT,
                        overwrite: "auto"
                    }, 0);
                    i.to(activeItem, {
                        x: s.x,
                        y: s.y,
                        duration: d.DURATION.slow,
                        ease: d.EASE_IN_OUT,
                        overwrite: true
                    }, 0);
                    activeItem.size = {
                        width: s.width,
                        height: s.height
                    };
                }
                i.fromTo(activeItem.mask, {
                    clipPath: a.MASK_CLIP(anchor?.radius ?? activeItem.maskRadius)
                }, {
                    clipPath: a.MASK_CLIP(a.StoryItem.MASK_RADIUS),
                    duration: d.DURATION.fast,
                    ease: d.EASE_IN_OUT,
                    overwrite: true
                }, 0);
                activeItem.maskRadius = a.StoryItem.MASK_RADIUS;
                i.to([
                    activeItem.duration,
                    activeItem.location
                ], {
                    opacity: 1,
                    duration: d.DURATION.fast,
                    clearProps: "opacity"
                }, 0);
                this.stories.headline.setStory(activeItem.data);
                this.stories.background.setStory(activeItem.data);
                i.call(this.resume, [], d.DURATION.slow);
                return i;
            };
            resume = ()=>{
                this.addEvents();
                this.focusActive();
            };
            goto = (e, t = true)=>{
                let i = this.stories.setActiveIndex(e);
                this.scroll = this.parkIndex(i);
                this.highlight(this.items[i], t);
            };
            highlight = (e, t = true)=>{
                this.stories.setActiveIndex(e.index);
                this.layout(t);
                this.stories.headline.setStory(e.data);
                this.stories.background.setStory(e.data);
            };
            next = ()=>{
                this.goto(this.scroll + 1);
            };
            prev = ()=>{
                this.goto(this.scroll - 1);
            };
            layout = (e = true)=>{
                let activeItem = this.stories.activeItem;
                this.items.forEach((e)=>{
                    if (e !== activeItem) {
                        e.setActive(false);
                        e.pauseVideo();
                        e.zIndex = "";
                    }
                });
                activeItem.setActive(true);
                activeItem.playVideo();
                activeItem.zIndex = "1";
                return this.place(e);
            };
            place = (e)=>{
                let activeItem = this.stories.activeItem;
                let { width, height } = this.card;
                let growth = this.growth;
                let focusMargin = this.focusMargin;
                this.container.x = this.isScrollable() ? this.viewport.x - this.viewport.width * this.scroll : (window.innerWidth - this.container.width) / 2;
                this.items.forEach((r, o)=>{
                    if (r === activeItem) {
                        return;
                    }
                    r.setSize(width, height, e);
                    let a = 0;
                    if (o < activeItem.index) {
                        a = -focusMargin;
                    }
                    if (o > activeItem.index) {
                        a = focusMargin;
                    }
                    this.moveItem(r, this.container.x + width * o + a, window.innerHeight / 2 - height / 2, e);
                });
                let o = {
                    x: this.container.x + width * activeItem.index - growth.x,
                    y: window.innerHeight / 2 - height / 2 - growth.y,
                    width: 1.4 * width,
                    height: 1.4 * height
                };
                activeItem.setSize(o.width, o.height, e);
                this.moveItem(activeItem, o.x, o.y, e);
                l.storiesStore.anchor = o;
                return o;
            };
            moveItem = (e, t, y_1, s)=>{
                if (s) {
                    o.default.to(e, {
                        x: t,
                        y: y_1,
                        duration: d.DURATION.slow,
                        ease: d.EASE_OUT,
                        overwrite: true
                    });
                } else {
                    o.default.killTweensOf(e);
                    e.x = t;
                    e.y = y_1;
                }
            };
            parkIndex(e) {
                if (this.isScrollable()) {
                    return e;
                }
                return Math.floor(this.items.length / 2);
            }
            resize = ()=>{
                this.measure();
                this.scroll = this.parkIndex(this.scroll);
                this.layout(this.stories.isTransitioning);
            };
            isScrollable() {
                return window.innerWidth < this.container.width;
            }
            addEvents = ()=>{
                this.removeEvents();
                this.items.forEach((e)=>{
                    let t = {
                        enter: (t)=>this.onItemEnter(e, t),
                        focus: ()=>this.onItemFocus(e),
                        click: (t)=>this.onItemClick(e, t)
                    };
                    this.handlers.set(e, t);
                    e.el.addEventListener("pointerenter", t.enter);
                    e.el.addEventListener("focus", t.focus);
                    e.el.addEventListener("click", t.click);
                });
                this.stories.track.addEventListener("pointerdown", this.onPointerDown);
                this.removeScrolling = (({ onNext, onPrev })=>{
                    let i = 0;
                    let s = new c.default({
                        mouseMultiplier: 0.25,
                        useTouch: false
                    });
                    s.on((s)=>{
                        let r = Math.trunc((i += Math.abs(s.deltaX) > Math.abs(s.deltaY) ? s.deltaX : s.deltaY) / 100);
                        if (r !== 0) {
                            i -= 100 * r;
                            for(let i = 0; i < Math.abs(r); i++){
                                if (r > 0) {
                                    onPrev();
                                } else {
                                    onNext();
                                }
                            }
                        }
                    });
                    return ()=>{
                        s.destroy();
                    };
                })({
                    onNext: this.onScrollNext,
                    onPrev: this.onScrollPrev
                });
            };
            removeEvents = ()=>{
                this.handlers.forEach((e, t)=>{
                    t.el.removeEventListener("pointerenter", e.enter);
                    t.el.removeEventListener("focus", e.focus);
                    t.el.removeEventListener("click", e.click);
                });
                this.handlers.clear();
                this.stories.track.removeEventListener("pointerdown", this.onPointerDown);
                this.removeDragEvents();
                this.removeScrolling?.();
                this.removeScrolling = undefined;
            };
            onItemEnter = (e, t)=>{
                if (!(t.pointerType !== "mouse" || this.drag)) {
                    this.highlight(e);
                }
            };
            onItemFocus = (e)=>{
                e === this.stories.activeItem || e.el.matches(":focus-visible") && this.goto(e.index);
            };
            focusActive = ()=>{
                let document_activeElement = document.activeElement;
                if (!document_activeElement || document_activeElement === document.body || this.stories.track.contains(document_activeElement)) {
                    this.stories.activeItem.el.focus({
                        preventScroll: true
                    });
                }
            };
            onItemClick = (e, t)=>{
                this.dragMoved && t.detail > 0 || e.data.enabled === true && (this.stories.setActiveIndex(e.index), this.stories.goto("fullscreen"));
            };
            onScrollNext = ()=>{
                if (!this.drag && this.isScrollable()) {
                    this.next();
                }
            };
            onScrollPrev = ()=>{
                if (!this.drag && this.isScrollable()) {
                    this.prev();
                }
            };
            onPointerDown = (e)=>{
                if (!this.drag && e.button === 0 && this.isScrollable()) {
                    this.dragMoved = false;
                    this.drag = {
                        pointerId: e.pointerId,
                        startX: e.clientX,
                        startScroll: this.scroll,
                        lastX: e.clientX,
                        lastTime: e.timeStamp,
                        velocity: 0
                    };
                    this.items.forEach((e)=>{
                        o.default.killTweensOf(e);
                    });
                    window.addEventListener("pointermove", this.onPointerMove);
                    window.addEventListener("pointerup", this.onPointerEnd);
                    window.addEventListener("pointercancel", this.onPointerEnd);
                }
            };
            onPointerMove = (e)=>{
                let drag = this.drag;
                if (!drag || e.pointerId !== drag.pointerId) {
                    return;
                }
                let i = e.timeStamp - drag.lastTime;
                if (i > 0) {
                    drag.velocity = (e.clientX - drag.lastX) / i;
                }
                drag.lastX = e.clientX;
                drag.lastTime = e.timeStamp;
                if (Math.abs(e.clientX - drag.startX) > 6) {
                    this.dragMoved = true;
                }
                this.scroll = o.default.utils.clamp(0, this.items.length - 1, drag.startScroll - (e.clientX - drag.startX) / this.card.width);
                this.place(false);
            };
            onPointerEnd = (e)=>{
                let drag = this.drag;
                if (!drag || e.pointerId !== drag.pointerId) {
                    return;
                }
                this.removeDragEvents();
                this.drag = null;
                let i = e.timeStamp - drag.lastTime > 150 ? 0 : drag.velocity;
                this.goto(Math.round(this.scroll - 150 * i / this.card.width));
            };
            removeDragEvents = ()=>{
                window.removeEventListener("pointermove", this.onPointerMove);
                window.removeEventListener("pointerup", this.onPointerEnd);
                window.removeEventListener("pointercancel", this.onPointerEnd);
            };
            destroy() {
                this.removeEvents();
            }
        }
        class v {
            wrapper;
            track;
            overlay;
            headline;
            background;
            onOpen;
            onClose;
            items;
            views;
            currentView = null;
            activeIndex;
            queue = Promise.resolve();
            pendingView = null;
            running = null;
            constructor({ wrapper, track, overlay, headline, background, stories, startIndex = 1, onOpen, onClose }){
                this.wrapper = wrapper;
                this.track = track;
                this.overlay = overlay;
                this.headline = headline;
                this.background = background;
                this.onOpen = onOpen;
                this.onClose = onClose;
                this.items = Array.from(track.querySelectorAll("[data-story-item]")).map((e, t)=>new a.StoryItem(e, stories[t], t));
                this.activeIndex = 0;
                this.setActiveIndex(startIndex);
                this.views = {
                    index: new p(this),
                    fullscreen: new h.StoriesFullscreenView(this)
                };
                window.addEventListener("resize", this.resize);
            }
            get activeItem() {
                return this.items[this.activeIndex];
            }
            get activeStory() {
                return this.activeItem.data;
            }
            get isTransitioning() {
                return this.running !== null;
            }
            setActiveIndex(e) {
                this.activeIndex = Math.min(Math.max(e, 0), this.items.length - 1);
                return this.activeIndex;
            }
            init(e = "index") {
                return this.goto(e);
            }
            showStory = (e)=>{
                let t = this.items.find((t)=>t.data.id === e);
                if (t) {
                    this.setActiveIndex(t.index);
                    return this.goto("fullscreen");
                }
            };
            goto = (e)=>{
                this.pendingView = e;
                e !== this.currentView && this.running?.progress(1);
                this.queue = this.queue.then(async ()=>{
                    if (e === this.currentView) {
                        return;
                    }
                    let currentView = this.currentView;
                    if (currentView) {
                        await this.views[currentView].transitionOut(e);
                    }
                    this.currentView = e;
                    let i = this.views[e].transitionIn(currentView);
                    this.running = i instanceof o.default.core.Timeline ? i : null;
                    e !== this.pendingView && this.running?.progress(1);
                    await i;
                    this.running = null;
                }).catch((t)=>{
                    console.error(`[Stories] transition to "${e}" failed`, t);
                });
                return this.queue;
            };
            resize = ()=>{
                if (this.currentView) {
                    this.views[this.currentView].resize();
                }
            };
            destroy = ()=>{
                window.removeEventListener("resize", this.resize);
                l.storiesStore.reset();
                Object.values(this.views).forEach((e)=>{
                    e.destroy();
                });
                this.items.forEach((e)=>{
                    e.destroy();
                });
                this.currentView = null;
            };
        }
        var f = e.i(998304);
        let className = "absolute inset-0 h-full w-full object-cover opacity-0";
        function useW({ ref }) {
            let sRef = i.useRef(null);
            let rRef = i.useRef(null);
            let nRef = i.useRef(null);
            let aRef = i.useRef(null);
            i.useLayoutEffect(()=>{
                var e;
                var t;
                let i;
                let s;
                let l;
                let h;
                let c;
                if (!rRef.current || !nRef.current) {
                    return;
                }
                e = rRef.current;
                t = nRef.current;
                i = e;
                s = null;
                l = 0;
                h = 0;
                let u = {
                    show: c = (r)=>{
                        window.clearTimeout(h);
                        s = r;
                        let n = i;
                        let a = i === e ? t : e;
                        let c = ++l;
                        let u = ()=>{
                            if (c === l) {
                                i = a;
                                o.default.to(a, {
                                    opacity: 1,
                                    duration: d.DURATION.medium,
                                    ease: d.EASE_OUT,
                                    overwrite: true
                                });
                                o.default.to(n, {
                                    opacity: 0,
                                    duration: d.DURATION.medium,
                                    ease: d.EASE_OUT,
                                    overwrite: true,
                                    onComplete: ()=>n.pause()
                                });
                            }
                        };
                        if (a.src !== r) {
                            a.src = r;
                        }
                        a.play().catch(()=>{});
                        if (a.readyState >= a.HAVE_CURRENT_DATA) {
                            u();
                        } else {
                            a.addEventListener("loadeddata", u, {
                                once: true
                            });
                        }
                    },
                    settle: (e)=>{
                        if (e !== s) {
                            s = e;
                            window.clearTimeout(h);
                            h = window.setTimeout(()=>c(e), 150);
                        }
                    },
                    destroy: ()=>{
                        window.clearTimeout(h);
                        o.default.killTweensOf([
                            e,
                            t
                        ]);
                    }
                };
                aRef.current = u;
                return ()=>{
                    aRef.current = null;
                    u.destroy();
                };
            }, []);
            i.useImperativeHandle(ref, ()=>({
                    setStory: (e)=>aRef.current?.settle(e.backgroundVideoSrc),
                    intro: (e)=>{
                        aRef.current?.show(e.backgroundVideoSrc);
                        return o.default.fromTo(sRef.current, {
                            opacity: 0,
                            filter: "blur(10px)"
                        }, {
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 3
                        });
                    }
                }));
            return t.jsx("div", {
                className: "h-dvh w-screen bg-black",
                children: t.jsxs("div", {
                    ref: sRef,
                    className: "relative h-dvh w-screen opacity-0",
                    children: [
                        t.jsx("video", {
                            ref: rRef,
                            className,
                            muted: true,
                            loop: true,
                            playsInline: true
                        }),
                        t.jsx("video", {
                            ref: nRef,
                            className,
                            muted: true,
                            loop: true,
                            playsInline: true
                        }),
                        t.jsx("span", {
                            className: "absolute top-0 left-0 h-dvh w-screen bg-black/20"
                        })
                    ]
                })
            });
        }
        var y = e.i(726215);
        function g({ story, index }) {
            let s = story.enabled === true;
            return t.jsx("button", {
                "data-story-item": true,
                "data-index": index,
                "data-active": "false",
                "data-playing": "false",
                type: "button",
                "aria-disabled": !s || undefined,
                "aria-label": s ? `Play story: ${story.title}` : story.title,
                className: r.cn("group pointer-events-auto absolute cursor-pointer touch-pan-y select-none opacity-0 outline-hidden will-change-transform", "w-xs md:w-xs xl:w-xl", !s && "cursor-default"),
                children: t.jsxs("div", {
                    "data-story-wrapper": true,
                    className: "relative flex h-full w-full flex-col items-start",
                    children: [
                        t.jsx("span", {
                            "data-story-duration": true,
                            className: r.cn("absolute top-0 flex items-center gap-3 text-label-sm text-text-invert-primary", "opacity-70 group-data-[active=true]:opacity-100"),
                            children: t.jsxs("span", {
                                className: "flex -translate-y-[calc(100%+8px)] items-center justify-center",
                                children: [
                                    t.jsxs("svg", {
                                        className: "invisible w-0 opacity-0",
                                        width: "7",
                                        height: "7",
                                        viewBox: "0 0 7 7",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            t.jsx("title", {
                                                children: "Recording"
                                            }),
                                            t.jsx("circle", {
                                                cx: "3.1875",
                                                cy: "3.1875",
                                                r: "3.1875",
                                                fill: "white"
                                            })
                                        ]
                                    }),
                                    t.jsx("span", {
                                        "data-story-duration-label": true,
                                        className: "tabular-nums",
                                        children: story.duration
                                    })
                                ]
                            })
                        }),
                        t.jsxs("span", {
                            "data-story-frame": true,
                            className: "relative h-full w-full will-change-transform",
                            children: [
                                t.jsxs("span", {
                                    "data-story-mask": true,
                                    className: "round-xs absolute inset-0 overflow-hidden",
                                    children: [
                                        t.jsx("video", {
                                            className: "absolute inset-0 h-full w-full object-cover",
                                            src: story.videoSrc,
                                            poster: story.poster,
                                            "aria-label": story.title,
                                            muted: true,
                                            loop: true,
                                            playsInline: true,
                                            children: t.jsx("track", {
                                                kind: "captions"
                                            })
                                        }),
                                        t.jsx(y.default, {
                                            "data-story-poster": true,
                                            src: story.poster,
                                            alt: "",
                                            "aria-hidden": true,
                                            draggable: false,
                                            width: 361,
                                            height: 203,
                                            unoptimized: true,
                                            className: r.cn("pointer-events-none absolute -top-px -left-px object-cover", "h-[calc(100%+2px)] w-[calc(100%+2px)] max-w-none", "group-data-[playing=true]:opacity-0")
                                        })
                                    ]
                                }),
                                t.jsx("span", {
                                    "aria-hidden": true,
                                    className: r.cn("pointer-events-none absolute inset-0 rounded-[16px] border-2 border-transparent", "group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
                                })
                            ]
                        }),
                        t.jsx("span", {
                            "data-story-location": true,
                            className: r.cn("absolute bottom-0 text-body-sm text-text-invert-primary", "opacity-70 group-data-[active=true]:opacity-100"),
                            children: t.jsx("span", {
                                className: "inline-block translate-y-[calc(100%+8px)]",
                                children: story.subtitle
                            })
                        })
                    ]
                })
            });
        }
        let x;
        let E;
        let S = typeof Symbol === "function" ? Symbol() : "_split";
        let b;
        let T = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter : 0;
        let A = (e)=>{
            if (e) {
                if (typeof e === "string") {
                    return A(document.querySelectorAll(e));
                }
                if ("length" in e) {
                    return Array.from(e).reduce((acc, item)=>{
                        if (typeof item === "string") {
                            acc.push(...A(item));
                        } else {
                            acc.push(item);
                        }
                        return acc;
                    }, []);
                }
                return [
                    e
                ];
            }
            return [];
        };
        let I = (e)=>A(e).filter((e)=>e && e.nodeType === 1);
        let k = [];
        let _ = ()=>{};
        let O = {
            add: (e)=>e()
        };
        let N = /\s+/g;
        let R = RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu");
        let P = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        let M = (e, t)=>{
            while(++t < e.length && e[t] === P);
            return e[t] || P;
        };
        let L = ({ element, html, ariaL, ariaH })=>{
            element.innerHTML = html;
            if (ariaL) {
                element.setAttribute("aria-label", ariaL);
            } else {
                element.removeAttribute("aria-label");
            }
            if (ariaH) {
                element.setAttribute("aria-hidden", ariaH);
            } else {
                element.removeAttribute("aria-hidden");
            }
        };
        let U = (e, t)=>{
            if (t) {
                let i = new Set(e.join("").match(t) || k);
                let s = e.length;
                let r;
                let n;
                let o;
                let a;
                if (i.size) {
                    while(--s > -1){
                        n = e[s];
                        for (o of i){
                            if (o.startsWith(n) && o.length > n.length) {
                                r = 0;
                                for(a = n; o.startsWith(a += e[s + ++r]) && a.length < o.length;);
                                if (r && a.length === o.length) {
                                    e[s] = o;
                                    e.splice(s + 1, r);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return e;
        };
        let D = (e)=>window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block");
        let j = (e, t, i)=>t.insertBefore(typeof e === "string" ? document.createTextNode(e) : e, i);
        let C = (e, t, i)=>{
            let s = t[e + "sClass"] || "";
            let { tag = "div", aria = "auto", propIndex = false } = t;
            let a = e === "line" ? "block" : "inline-block";
            let l = s.indexOf("++") > -1;
            let h = (t)=>{
                let h = document.createElement(tag);
                let d = i.length + 1;
                if (s) {
                    h.className = s + (l ? " " + s + d : "");
                }
                if (propIndex) {
                    h.style.setProperty("--" + e, d + "");
                }
                if (aria !== "none") {
                    h.setAttribute("aria-hidden", "true");
                }
                if (tag !== "span") {
                    h.style.position = "relative";
                    h.style.display = a;
                }
                h.textContent = t;
                i.push(h);
                return h;
            };
            if (l) {
                s = s.replace("++", "");
            }
            h.collection = i;
            return h;
        };
        let W = (e, t, i, s, r, n, o, a, l, h)=>{
            var d;
            let c = Array.from(e.childNodes);
            let u = 0;
            let { wordDelimiter, reduceWhiteSpace = true, prepareText } = t;
            let m = e.getBoundingClientRect();
            let w = m;
            let y = !reduceWhiteSpace && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre";
            let g = 0;
            let i_collection = i.collection;
            let E;
            let S;
            let b;
            let A;
            let I;
            let _;
            let O;
            let R;
            let P;
            let M;
            let L;
            let C;
            let z;
            let K;
            let X;
            let B;
            let F;
            let V;
            if (typeof wordDelimiter === "object") {
                b = wordDelimiter.delimiter || wordDelimiter;
                S = wordDelimiter.replaceWith || "";
            } else {
                S = wordDelimiter === "" ? "" : wordDelimiter || " ";
            }
            for(E = S !== " "; u < c.length; u++){
                if ((A = c[u]).nodeType === 3) {
                    X = A.textContent || "";
                    if (reduceWhiteSpace) {
                        X = X.replace(N, " ");
                    } else if (y) {
                        X = X.replace(/\n/g, S + "\n");
                    }
                    if (prepareText) {
                        X = prepareText(X, e);
                    }
                    A.textContent = X;
                    F = (I = S || b ? X.split(b || S) : X.match(a) || k)[I.length - 1];
                    R = E ? F.slice(-1) === " " : !F;
                    if (!F) {
                        I.pop();
                    }
                    w = m;
                    if (O = E ? I[0].charAt(0) === " " : !I[0]) {
                        j(" ", e, A);
                    }
                    if (!I[0]) {
                        I.shift();
                    }
                    U(I, l);
                    if (!(n && h)) {
                        A.textContent = "";
                    }
                    for(P = 1; P <= I.length; P++){
                        B = I[P - 1];
                        if (!reduceWhiteSpace && y && B.charAt(0) === "\n") {
                            if (!((d = A.previousSibling) == null)) {
                                d.remove();
                            }
                            j(document.createElement("br"), e, A);
                            B = B.slice(1);
                        }
                        if (reduceWhiteSpace || B !== "") {
                            if (B === " ") {
                                e.insertBefore(document.createTextNode(" "), A);
                            } else {
                                if (E && B.charAt(0) === " ") {
                                    j(" ", e, A);
                                }
                                if (g && P === 1 && !O && i_collection.indexOf(g.parentNode) > -1) {
                                    (_ = i_collection[i_collection.length - 1]).appendChild(document.createTextNode(s ? "" : B));
                                } else {
                                    j(_ = i(s ? "" : B), e, A);
                                    if (g && P === 1 && !O) {
                                        _.insertBefore(g, _.firstChild);
                                    }
                                }
                                if (s) {
                                    L = T ? U([
                                        ...T.segment(B)
                                    ].map((e)=>e.segment), l) : B.match(a) || k;
                                    for(V = 0; V < L.length; V++){
                                        _.appendChild(L[V] === " " ? document.createTextNode(" ") : s(L[V]));
                                    }
                                }
                                if (n && h) {
                                    X = A.textContent = X.substring(B.length + 1, X.length);
                                    if ((M = _.getBoundingClientRect()).top > w.top && M.left <= w.left) {
                                        C = e.cloneNode();
                                        for(z = e.childNodes[0]; z && z !== _;){
                                            K = z;
                                            z = z.nextSibling;
                                            C.appendChild(K);
                                        }
                                        e.parentNode.insertBefore(C, e);
                                        if (r) {
                                            D(C);
                                        }
                                    }
                                    w = M;
                                }
                                if (P < I.length || R) {
                                    j(P >= I.length ? " " : E && B.slice(-1) === " " ? " " + S : S, e, A);
                                }
                            }
                        } else {
                            j(S, e, A);
                        }
                    }
                    e.removeChild(A);
                    g = 0;
                } else {
                    A.nodeType === 1 && (o && o.indexOf(A) > -1 ? (i_collection.indexOf(A.previousSibling) > -1 && i_collection[i_collection.length - 1].appendChild(A), g = A) : (W(A, t, i, s, r, n, o, a, l, true), g = 0), r && D(A));
                }
            }
        };
        let z = class e {
            constructor(e, t){
                this.isSplit = false;
                if (!b) {
                    K.register(window.gsap);
                }
                this.elements = I(e);
                this.chars = [];
                this.words = [];
                this.lines = [];
                this.masks = [];
                this.vars = t;
                this.elements.forEach((e)=>{
                    var i;
                    t.overwrite !== false && ((i = e[S]) == null || i._data.orig.filter(({ element })=>element === e).forEach(L));
                    e[S] = this;
                });
                this._split = ()=>this.isSplit && this.split(this.vars);
                let orig = [];
                let s;
                let r = ()=>{
                    let i_length = orig.length;
                    let t;
                    while(i_length--){
                        let s = (t = orig[i_length]).element.offsetWidth;
                        if (s !== t.width) {
                            t.width = s;
                            this._split();
                            return;
                        }
                    }
                };
                this._data = {
                    orig,
                    obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(()=>{
                        clearTimeout(s);
                        s = setTimeout(r, 200);
                    })
                };
                _(this);
                this.split(t);
            }
            split(e) {
                (this._ctx || O).add(()=>{
                    if (this.isSplit) {
                        this.revert();
                    }
                    this.vars = e = e || this.vars || {};
                    let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars;
                    let h = type.indexOf("lines") > -1;
                    let d = type.indexOf("chars") > -1;
                    let c = type.indexOf("words") > -1;
                    let u = d && !c && !h;
                    let p = specialChars && ("push" in specialChars ? RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars);
                    let v = p ? RegExp(p.source + "|" + R.source, "gu") : R;
                    let f = !!e.ignore && I(e.ignore);
                    let { orig, animTime, obs } = this._data;
                    let g;
                    if (d || c || h) {
                        this.elements.forEach((element, n)=>{
                            orig[n] = {
                                element,
                                html: element.innerHTML,
                                ariaL: element.getAttribute("aria-label"),
                                ariaH: element.getAttribute("aria-hidden")
                            };
                            if (aria === "auto") {
                                element.setAttribute("aria-label", (element.textContent || "").trim());
                            } else if (aria === "hidden") {
                                element.setAttribute("aria-hidden", "true");
                            }
                            let o = [];
                            let a = [];
                            let l = [];
                            let w = d ? C("char", e, o) : null;
                            let y = C("word", e, a);
                            let g;
                            let x;
                            let E;
                            let S;
                            W(element, e, y, w, u, deepSlice && (h || u), f, v, p, false);
                            if (h) {
                                let i;
                                let s;
                                let r = A(element.childNodes);
                                i = C("line", e, l);
                                s = window.getComputedStyle(element).textAlign || "left";
                                let n = (e, n)=>{
                                    let o = i("");
                                    o.style.textAlign = s;
                                    element.insertBefore(o, r[e]);
                                    for(; e < n; e++){
                                        o.appendChild(r[e]);
                                    }
                                    o.normalize();
                                };
                                let o;
                                let a = [];
                                let h = 0;
                                let d = r.map((e)=>{
                                    if (e.nodeType === 1) {
                                        return e.getBoundingClientRect();
                                    }
                                    return P;
                                });
                                let c = P;
                                let u;
                                for(g = 0; g < r.length; g++){
                                    (o = r[g]).nodeType === 1 && (o.nodeName === "BR" ? (g && r[g - 1].nodeName === "BR" || (a.push(o), n(h, g + 1)), h = g + 1, c = M(d, g)) : (u = d[g], g && u.top > c.top && u.left < c.left + c.width - 1 && (n(h, g), h = g), c = u));
                                }
                                if (h < g) {
                                    n(h, g);
                                }
                                a.forEach((e)=>{
                                    var t;
                                    if ((t = e.parentNode) == null) {
                                        return undefined;
                                    }
                                    return t.removeChild(e);
                                });
                            }
                            if (!c) {
                                for(g = 0; g < a.length; g++){
                                    x = a[g];
                                    if (d || !x.nextSibling || x.nextSibling.nodeType !== 3) {
                                        if (smartWrap && !h) {
                                            for((E = document.createElement("span")).style.whiteSpace = "nowrap"; x.firstChild;){
                                                E.appendChild(x.firstChild);
                                            }
                                            x.replaceWith(E);
                                        } else {
                                            x.replaceWith(...x.childNodes);
                                        }
                                    } else {
                                        if ((S = x.nextSibling) && S.nodeType === 3) {
                                            S.textContent = (x.textContent || "") + (S.textContent || "");
                                            x.remove();
                                        }
                                    }
                                }
                                a.length = 0;
                                element.normalize();
                            }
                            this.lines.push(...l);
                            this.words.push(...a);
                            this.chars.push(...o);
                        });
                        if (mask && this[mask]) {
                            this.masks.push(...this[mask].map((e)=>{
                                let t = e.cloneNode();
                                e.replaceWith(t);
                                t.appendChild(e);
                                if (e.className) {
                                    t.className = e.className.trim().split(" ").map((e)=>e + "-mask").join(" ");
                                }
                                t.style.overflow = "clip";
                                return t;
                            }));
                        }
                    }
                    this.isSplit = true;
                    if (E && h && autoSplit) {
                        E.addEventListener("loadingdone", this._split);
                    }
                    if ((g = onSplit && onSplit(this)) && g.totalTime) {
                        this._data.anim = animTime ? g.totalTime(animTime) : g;
                    }
                    if (h && autoSplit) {
                        this.elements.forEach((e, t)=>{
                            orig[t].width = e.offsetWidth;
                            if (obs) {
                                obs.observe(e);
                            }
                        });
                    }
                });
                return this;
            }
            kill() {
                let { obs } = this._data;
                if (obs) {
                    obs.disconnect();
                }
                if (!(E == null)) {
                    E.removeEventListener("loadingdone", this._split);
                }
            }
            revert() {
                let e;
                let t;
                if (this.isSplit) {
                    let { orig, anim } = this._data;
                    this.kill();
                    orig.forEach(L);
                    this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
                    this.isSplit = false;
                    if (anim) {
                        this._data.animTime = anim.totalTime();
                        anim.revert();
                    }
                    if (!((t = (e = this.vars).onRevert) == null)) {
                        t.call(e, this);
                    }
                }
                return this;
            }
            static create(t, i) {
                return new e(t, i);
            }
            static register(e) {
                if (x = x || e || window.gsap) {
                    A = x.utils.toArray;
                    _ = x.core.context || _;
                }
                if (!b && window.innerWidth > 0) {
                    E = document.fonts;
                    b = true;
                }
            }
        };
        z.version = "3.15.0";
        let K = z;
        function useX({ ref }) {
            let sRef = i.useRef(null);
            let rRef = i.useRef(null);
            let nRef = i.useRef(null);
            let aRef = i.useRef(null);
            let lRef = i.useRef(null);
            let hRef = i.useRef(false);
            let setStory = i.useCallback((e)=>{
                if (!e || e.id === lRef.current || !rRef.current || !nRef.current) {
                    return;
                }
                lRef.current = e.id;
                let t = e.location?.trim() ?? "";
                hRef.current = t.length > 0;
                rRef.current.innerHTML = e.title;
                nRef.current.innerHTML = t;
                nRef.current.hidden = !hRef.current;
            }, []);
            i.useImperativeHandle(ref, ()=>({
                    setStory,
                    intro: (e)=>{
                        setStory(e);
                        if (aRef.current) {
                            aRef.current.revert();
                        }
                        if (rRef.current) {
                            rRef.current.style.opacity = "0";
                        }
                        if (nRef.current) {
                            nRef.current.style.opacity = "0";
                        }
                        o.default.killTweensOf(nRef.current);
                        if (rRef.current) {
                            rRef.current.style.opacity = "1";
                        }
                        aRef.current = K.create(rRef.current, {
                            type: "words"
                        });
                        o.default.fromTo(aRef.current.words, {
                            y: "100%",
                            alpha: 0
                        }, {
                            alpha: 1,
                            duration: d.DURATION.slow,
                            ease: d.EASE_OUT,
                            stagger: 0.05,
                            y: "0%"
                        });
                        if (hRef.current) {
                            o.default.fromTo(nRef.current, {
                                y: "100%",
                                autoAlpha: 0
                            }, {
                                duration: d.DURATION.slow,
                                autoAlpha: 0.8,
                                ease: d.EASE_OUT,
                                delay: 0.2,
                                y: "0%"
                            });
                        }
                    }
                }), [
                setStory
            ]);
            return t.jsxs("div", {
                ref: sRef,
                className: "absolute bottom-0 left-1/2 flex w-184.75 -translate-x-1/2 flex-col items-center gap-1 tablet:gap-2 pb-12 text-center text-text-invert-primary",
                children: [
                    t.jsx("p", {
                        ref: rRef,
                        className: "font-heading text-heading-lg opacity-0"
                    }),
                    t.jsx("p", {
                        ref: nRef,
                        hidden: true,
                        className: "font-heading text-heading-sm opacity-0"
                    })
                ]
            });
        }
        o.default.registerPlugin(K);
        e.s([
            "StoriesScene",
            0,
            ()=>{
                let { stories, featuredStoryId, openStory, closeStory, registerStories, activeStoryId } = f.useStories();
                let cRef = i.useRef(null);
                let uRef = i.useRef(null);
                let pRef = i.useRef(null);
                let mRef = i.useRef(null);
                let yRef = i.useRef(null);
                let xRef = i.useRef(null);
                let { setBgTheme } = i.useContext(n.NavContext);
                i.useLayoutEffect(()=>{
                    setBgTheme("dark");
                    let cRef_current = cRef.current;
                    let uRef_current = uRef.current;
                    let pRef_current = pRef.current;
                    let mRef_current = mRef.current;
                    let yRef_current = yRef.current;
                    if (!cRef_current || !uRef_current || !pRef_current || !mRef_current || !yRef_current) {
                        return;
                    }
                    let f = new v({
                        wrapper: cRef_current,
                        track: uRef_current,
                        overlay: pRef_current,
                        headline: mRef_current,
                        background: yRef_current,
                        stories,
                        startIndex: ((e, t)=>{
                            if (window.innerWidth < s.BREAKPOINTS.tablet) {
                                return 0;
                            }
                            let i = e.findIndex((e)=>e.id === t);
                            if (-1 === i) {
                                return 1;
                            }
                            return i;
                        })(stories, featuredStoryId),
                        onOpen: openStory,
                        onClose: closeStory
                    });
                    xRef.current = f;
                    registerStories(f);
                    f.init();
                    return ()=>{
                        xRef.current = null;
                        registerStories(null);
                        f.destroy();
                    };
                }, []);
                i.useEffect(()=>{
                    let xRef_current = xRef.current;
                    xRef_current && (activeStoryId ? xRef_current.showStory(activeStoryId) : xRef_current.goto("index"));
                }, [
                    activeStoryId
                ]);
                return t.jsxs(t.Fragment, {
                    children: [
                        t.jsx("section", {
                            className: "fixed top-0 left-0 w-full overflow-hidden bg-black",
                            children: t.jsxs("div", {
                                ref: cRef,
                                className: "relative block",
                                children: [
                                    t.jsx(useW, {
                                        ref: yRef
                                    }),
                                    t.jsx(useX, {
                                        ref: mRef
                                    })
                                ]
                            })
                        }),
                        t.jsxs("div", {
                            className: "pointer-events-none fixed top-0 left-0 z-20 h-dvh w-screen overflow-hidden",
                            children: [
                                t.jsx("div", {
                                    ref: uRef,
                                    className: r.cn("absolute top-0 left-0 h-dvh w-screen"),
                                    children: stories.map((story, index)=>t.jsx(g, {
                                            index,
                                            story
                                        }, story.id))
                                }),
                                t.jsx("span", {
                                    ref: pRef,
                                    className: "pointer-events-none absolute top-0 left-0 h-dvh w-screen bg-background-primary tablet:bg-black opacity-0"
                                })
                            ]
                        })
                    ]
                });
            }
        ], 858965);
    },
    6590,
    120979,
    625400,
    (e)=>{
        "use strict";
        var t = e.i(983871);
        var i = e.i(631923);
        var s = e.i(628974);
        let r = (e, t = "0% 0% 0% 0%")=>`inset(${t} round ${e}px)`;
        class n {
            el;
            data;
            index;
            wrapper;
            frame;
            mask;
            video;
            poster;
            duration;
            durationLabel;
            recordingIcon;
            location;
            position = {
                x: 0,
                y: 0
            };
            size = {
                width: 0,
                height: 0
            };
            playheadFrame = 0;
            recordingBlink = null;
            maskRadius = n.MASK_RADIUS;
            constructor(e, t, i){
                this.el = e;
                this.data = t;
                this.index = i;
                this.frame = s.query(e, "[data-story-frame]");
                this.mask = s.query(this.frame, "[data-story-mask]");
                this.video = s.query(this.frame, "video");
                this.poster = s.query(this.frame, "[data-story-poster]");
                this.duration = s.query(e, "[data-story-duration]");
                this.durationLabel = s.query(this.duration, "[data-story-duration-label]");
                this.recordingIcon = s.query(this.duration, "svg");
                this.location = s.query(e, "[data-story-location]");
                this.wrapper = s.query(e, "[data-story-wrapper]");
                this.video.addEventListener("play", this.startPlayhead);
                this.video.addEventListener("pause", this.stopPlayhead);
                this.video.addEventListener("ended", this.stopPlayhead);
                this.video.addEventListener("playing", this.hidePoster);
                this.video.addEventListener("pause", this.showPoster);
                this.video.addEventListener("ended", this.showPoster);
            }
            startPlayhead = ()=>{
                if (this.data.enabled === true) {
                    cancelAnimationFrame(this.playheadFrame);
                    this.playheadFrame = requestAnimationFrame(this.tickPlayhead);
                    this.recordingBlink?.kill();
                    this.recordingBlink = t.default.timeline().to(this.recordingIcon, {
                        autoAlpha: 1,
                        width: 7,
                        marginRight: 8,
                        duration: i.DURATION.fast,
                        ease: i.EASE_OUT,
                        overwrite: true
                    }).to(this.recordingIcon, {
                        opacity: 0.5,
                        duration: i.DURATION.medium,
                        ease: i.EASE_IN_OUT,
                        repeat: -1,
                        yoyo: true
                    });
                }
            };
            tickPlayhead = ()=>{
                if (!this.video.paused) {
                    this.durationLabel.textContent = s.formatPlayhead(this.video.currentTime);
                    this.playheadFrame = requestAnimationFrame(this.tickPlayhead);
                }
            };
            stopPlayhead = ()=>{
                cancelAnimationFrame(this.playheadFrame);
                this.playheadFrame = 0;
                this.durationLabel.textContent = this.data.duration;
                this.recordingBlink?.kill();
                this.recordingBlink = null;
                t.default.to(this.recordingIcon, {
                    autoAlpha: 0,
                    width: 0,
                    marginRight: 0,
                    duration: i.DURATION.fast,
                    ease: i.EASE_OUT,
                    overwrite: true
                });
            };
            hidePoster = ()=>{
                this.el.dataset.playing = "true";
            };
            showPoster = ()=>{
                this.el.dataset.playing = "false";
            };
            static get MASK_RADIUS() {
                return 16;
            }
            setActive(e) {
                this.el.dataset.active = String(e);
            }
            set zIndex(e) {
                this.el.style.zIndex = e;
            }
            set opacity(e) {
                this.el.style.opacity = String(e);
            }
            playVideo() {
                if (this.video.paused) {
                    this.video.currentTime = 0;
                    this.video.play().catch(()=>{});
                }
            }
            pauseVideo(e = true) {
                if (e) {
                    this.video.currentTime = 0;
                }
                this.video.pause();
            }
            setSize(e, s, r = true) {
                this.size.width = e;
                this.size.height = s;
                if (!r) {
                    t.default.killTweensOf(this.el, "width,height");
                    this.el.style.width = `${e}px`;
                    this.el.style.height = `${s}px`;
                    return;
                }
                t.default.to(this.el, {
                    width: e,
                    height: s,
                    duration: i.DURATION.slow,
                    ease: i.EASE_OUT,
                    overwrite: "auto"
                });
            }
            applyTransform() {
                t.default.set(this.el, {
                    x: this.position.x,
                    y: this.position.y
                });
            }
            set x(e) {
                this.position.x = e;
                this.applyTransform();
            }
            get x() {
                return this.position.x;
            }
            set y(e) {
                this.position.y = e;
                this.applyTransform();
            }
            get y() {
                return this.position.y;
            }
            destroy() {
                cancelAnimationFrame(this.playheadFrame);
                this.video.removeEventListener("play", this.startPlayhead);
                this.video.removeEventListener("pause", this.stopPlayhead);
                this.video.removeEventListener("ended", this.stopPlayhead);
                this.video.removeEventListener("playing", this.hidePoster);
                this.video.removeEventListener("pause", this.showPoster);
                this.video.removeEventListener("ended", this.showPoster);
                this.recordingBlink?.kill();
                this.recordingBlink = null;
                t.default.killTweensOf([
                    this.el,
                    this,
                    this.mask,
                    this.duration,
                    this.recordingIcon,
                    this.location
                ]);
            }
        }
        e.s([
            "MASK_CLIP",
            0,
            r,
            "StoryItem",
            0,
            n
        ], 6590);
        var o = e.i(990055);
        var a = e.i(365280);
        class l {
            stories;
            constructor(e){
                this.stories = e;
            }
            get items() {
                return this.stories.items;
            }
            get parked() {
                return this.items.filter((e)=>e !== this.stories.activeItem);
            }
            resize() {}
            destroy() {}
        }
        e.s([
            "StoriesView",
            0,
            l
        ], 120979);
        class h extends l {
            transitionIn(e) {
                window.addEventListener("keydown", this.onKeyDown);
                this.stories.track.setAttribute("inert", "");
                let t = this.expand();
                t.call(()=>{
                    this.stories.onOpen(this.stories.activeStory.id);
                    this.stories.activeItem.pauseVideo(false);
                    if (a.storiesStore.playerVisible) {
                        this.stories.activeItem.opacity = 0;
                    }
                });
                return t;
            }
            transitionOut(e) {
                window.removeEventListener("keydown", this.onKeyDown);
                this.stories.track.removeAttribute("inert");
                this.stories.onClose();
                t.default.to(this.stories.overlay, {
                    opacity: 0,
                    duration: 0.65 * i.DURATION.slow,
                    ease: i.EASE_IN_OUT,
                    overwrite: true
                });
            }
            static get rect() {
                if (window.innerWidth >= o.BREAKPOINTS.tablet) {
                    return {
                        width: window.innerWidth - 60,
                        height: window.innerHeight - 60,
                        x: 30,
                        y: 30,
                        radius: 32
                    };
                }
                return {
                    width: window.innerWidth - 32,
                    height: (window.innerWidth - 32) * 0.562,
                    x: 16,
                    y: window.innerHeight - (window.innerWidth - 32) * 0.562 - 16,
                    radius: n.MASK_RADIUS
                };
            }
            expand() {
                let activeItem = this.stories.activeItem;
                let h_rect = h.rect;
                activeItem.zIndex = "10";
                let n = t.default.timeline({});
                n.to(this.stories.overlay, {
                    opacity: 1,
                    duration: 1.3 * i.DURATION.slow,
                    ease: i.EASE_OUT,
                    overwrite: true
                }, 0);
                n.fromTo(activeItem.mask, {
                    clipPath: r(activeItem.maskRadius)
                }, {
                    clipPath: r(h_rect.radius),
                    duration: 1.3 * i.DURATION.slow,
                    ease: i.EASE_IN_OUT,
                    overwrite: true
                }, 0);
                n.to([
                    activeItem.duration,
                    activeItem.location
                ], {
                    opacity: 0,
                    duration: i.DURATION.fast
                }, 0);
                n.to(activeItem.el, {
                    width: h_rect.width,
                    height: h_rect.height,
                    duration: 1.3 * i.DURATION.slow,
                    ease: i.EASE_IN_OUT,
                    overwrite: "auto"
                }, 0);
                n.to(activeItem, {
                    x: h_rect.x,
                    y: h_rect.y,
                    duration: 1.3 * i.DURATION.slow,
                    ease: i.EASE_IN_OUT,
                    overwrite: true
                }, 0);
                n.to(this.parked.map((e)=>e.el), {
                    opacity: 0,
                    duration: i.DURATION.slow,
                    ease: i.EASE_OUT
                }, 0);
                activeItem.size = {
                    width: h_rect.width,
                    height: h_rect.height
                };
                activeItem.maskRadius = h_rect.radius;
                a.storiesStore.anchor = h_rect;
                return n;
            }
            close = ()=>{
                this.stories.onClose();
            };
            onKeyDown = (e)=>{
                if (e.key === "Escape") {
                    this.close();
                }
            };
            resize() {
                let activeItem = this.stories.activeItem;
                let h_rect = h.rect;
                activeItem.setSize(h_rect.width, h_rect.height, false);
                activeItem.x = h_rect.x;
                activeItem.y = h_rect.y;
                a.storiesStore.anchor = h_rect;
            }
            destroy() {
                window.removeEventListener("keydown", this.onKeyDown);
                this.stories.track.removeAttribute("inert");
            }
        }
        e.s([
            "StoriesFullscreenView",
            0,
            h
        ], 625400);
    },
    393763,
    (e, t, i)=>{
        e.e;
        t.exports = (()=>{
            let e = 0;
            function t(t) {
                return `__private_${e++}_` + t;
            }
            function i(e, t) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) {
                    throw TypeError("attempted to use private field on non-instance");
                }
                return e;
            }
            function s() {}
            s.prototype = {
                on (e, fn, ctx) {
                    const s = this.e || (this.e = {});
                    (s[e] || (s[e] = [])).push({
                        fn,
                        ctx
                    });
                    return this;
                },
                once (e, t, i) {
                    const s = this;
                    function r() {
                        s.off(e, r);
                        t.apply(i, arguments);
                    }
                    r._ = t;
                    return this.on(e, r, i);
                },
                emit (e) {
                    const t = [].slice.call(arguments, 1);
                    const i = ((this.e || (this.e = {}))[e] || []).slice();
                    for(let s = 0, r = i.length; s < r; s++){
                        i[s].fn.apply(i[s].ctx, t);
                    }
                    return this;
                },
                off (e, t) {
                    const i = this.e || (this.e = {});
                    const s = i[e];
                    const r = [];
                    if (s && t) {
                        for(let n = 0, o = s.length; n < o; n++){
                            if (s[n].fn !== t && s[n].fn._ !== t) {
                                r.push(s[n]);
                            }
                        }
                    }
                    if (r.length) {
                        i[e] = r;
                    } else {
                        delete i[e];
                    }
                    return this;
                }
            };
            s.TinyEmitter = s;
            let r;
            const n = "virtualscroll";
            const o = t("options");
            const a = t("el");
            const l = t("emitter");
            const h = t("event");
            const d = t("touchStart");
            const c = t("bodyTouchAction");
            function u(e) {
                const t = this;
                Object.defineProperty(this, o, {
                    writable: true,
                    value: undefined
                });
                Object.defineProperty(this, a, {
                    writable: true,
                    value: undefined
                });
                Object.defineProperty(this, l, {
                    writable: true,
                    value: undefined
                });
                Object.defineProperty(this, h, {
                    writable: true,
                    value: undefined
                });
                Object.defineProperty(this, d, {
                    writable: true,
                    value: undefined
                });
                Object.defineProperty(this, c, {
                    writable: true,
                    value: undefined
                });
                this._onWheel = (e)=>{
                    const s = i(t, o)[o];
                    const n = i(t, h)[h];
                    n.deltaX = e.wheelDeltaX || -1 * e.deltaX;
                    n.deltaY = e.wheelDeltaY || -1 * e.deltaY;
                    if (r.isFirefox && e.deltaMode === 1) {
                        n.deltaX *= s.firefoxMultiplier;
                        n.deltaY *= s.firefoxMultiplier;
                    }
                    n.deltaX *= s.mouseMultiplier;
                    n.deltaY *= s.mouseMultiplier;
                    t._notify(e);
                };
                this._onMouseWheel = (e)=>{
                    const s = i(t, h)[h];
                    s.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
                    s.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
                    t._notify(e);
                };
                this._onTouchStart = (e)=>{
                    const s = e.targetTouches ? e.targetTouches[0] : e;
                    i(t, d)[d].x = s.pageX;
                    i(t, d)[d].y = s.pageY;
                };
                this._onTouchMove = (e)=>{
                    const s = i(t, o)[o];
                    if (s.preventTouch && !e.target.classList.contains(s.unpreventTouchClass)) {
                        e.preventDefault();
                    }
                    const r = i(t, h)[h];
                    const n = e.targetTouches ? e.targetTouches[0] : e;
                    r.deltaX = (n.pageX - i(t, d)[d].x) * s.touchMultiplier;
                    r.deltaY = (n.pageY - i(t, d)[d].y) * s.touchMultiplier;
                    i(t, d)[d].x = n.pageX;
                    i(t, d)[d].y = n.pageY;
                    t._notify(e);
                };
                this._onKeyDown = (e)=>{
                    const s = i(t, h)[h];
                    s.deltaX = s.deltaY = 0;
                    const r = window.innerHeight - 40;
                    switch(e.keyCode){
                        case 37:
                        case 38:
                            s.deltaY = i(t, o)[o].keyStep;
                            break;
                        case 39:
                        case 40:
                            s.deltaY = -i(t, o)[o].keyStep;
                            break;
                        case 32:
                            s.deltaY = r * (e.shiftKey ? 1 : -1);
                            break;
                        default:
                            return;
                    }
                    t._notify(e);
                };
                i(this, a)[a] = window;
                if (e && e.el) {
                    i(this, a)[a] = e.el;
                    delete e.el;
                }
                if (!r) {
                    r = {
                        hasWheelEvent: "onwheel" in document,
                        hasMouseWheelEvent: "onmousewheel" in document,
                        hasTouch: "ontouchstart" in document,
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown" in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                    };
                }
                i(this, o)[o] = {
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: false,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    useKeyboard: true,
                    useTouch: true,
                    ...e
                };
                i(this, l)[l] = new s;
                i(this, h)[h] = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                };
                i(this, d)[d] = {
                    x: null,
                    y: null
                };
                i(this, c)[c] = null;
                if (i(this, o)[o].passive !== undefined) {
                    this.listenerOptions = {
                        passive: i(this, o)[o].passive
                    };
                }
            }
            const u_prototype = u.prototype;
            u_prototype._notify = function(originalEvent) {
                const t = i(this, h)[h];
                t.x += t.deltaX;
                t.y += t.deltaY;
                i(this, l)[l].emit(n, {
                    x: t.x,
                    y: t.y,
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                    originalEvent
                });
            };
            u_prototype._bind = function() {
                if (r.hasWheelEvent) {
                    i(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions);
                }
                if (r.hasMouseWheelEvent) {
                    i(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions);
                }
                if (r.hasTouch && i(this, o)[o].useTouch) {
                    i(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions);
                    i(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions);
                }
                if (r.hasPointer && r.hasTouchWin) {
                    i(this, c)[c] = document.body.style.msTouchAction;
                    document.body.style.msTouchAction = "none";
                    i(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, true);
                    i(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, true);
                }
                if (r.hasKeyDown && i(this, o)[o].useKeyboard) {
                    document.addEventListener("keydown", this._onKeyDown);
                }
            };
            u_prototype._unbind = function() {
                if (r.hasWheelEvent) {
                    i(this, a)[a].removeEventListener("wheel", this._onWheel);
                }
                if (r.hasMouseWheelEvent) {
                    i(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel);
                }
                if (r.hasTouch) {
                    i(this, a)[a].removeEventListener("touchstart", this._onTouchStart);
                    i(this, a)[a].removeEventListener("touchmove", this._onTouchMove);
                }
                if (r.hasPointer && r.hasTouchWin) {
                    document.body.style.msTouchAction = i(this, c)[c];
                    i(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, true);
                    i(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, true);
                }
                if (r.hasKeyDown && i(this, o)[o].useKeyboard) {
                    document.removeEventListener("keydown", this._onKeyDown);
                }
            };
            u_prototype.on = function(e, t) {
                i(this, l)[l].on(n, e, t);
                const s = i(this, l)[l].e;
                if (s && s[n] && s[n].length === 1) {
                    this._bind();
                }
            };
            u_prototype.off = function(e, t) {
                i(this, l)[l].off(n, e, t);
                const s = i(this, l)[l].e;
                if (!s[n] || s[n].length <= 0) {
                    this._unbind();
                }
            };
            u_prototype.destroy = function() {
                i(this, l)[l].off();
                this._unbind();
            };
            return u;
        })();
    }
]);
