;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "005587d1-85a4-fd54-87c8-430ca873be75";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    801075,
    (t)=>{
        "use strict";
        var e = t.i(281889);
        var i = t.i(983871);
        var s = t.i(607198);
        var o = "1.3.23";
        function r(t, e, i) {
            return Math.max(t, Math.min(e, i));
        }
        var n = class {
            isRunning = false;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(t) {
                if (!this.isRunning) {
                    return;
                }
                let e = false;
                if (this.duration && this.easing) {
                    this.currentTime += t;
                    let i = r(0, this.currentTime / this.duration, 1);
                    let s = (e = i >= 1) ? 1 : this.easing(i);
                    this.value = this.from + (this.to - this.from) * s;
                } else if (this.lerp) {
                    let i;
                    let s;
                    let o;
                    let n;
                    this.value = (i = this.value, s = this.to, o = 60 * this.lerp, (1 - (n = 1 - Math.exp(-o * t))) * i + n * s);
                    if (Math.round(this.value) === Math.round(this.to)) {
                        this.value = this.to;
                        e = true;
                    }
                } else {
                    this.value = this.to;
                    e = true;
                }
                if (e) {
                    this.stop();
                }
                this.onUpdate?.(this.value, e);
            }
            stop() {
                this.isRunning = false;
            }
            fromTo(t, e, { lerp, duration, easing, onStart, onUpdate }) {
                this.from = this.value = t;
                this.to = e;
                this.lerp = lerp;
                this.duration = duration;
                this.easing = easing;
                this.currentTime = 0;
                this.isRunning = true;
                onStart?.();
                this.onUpdate = onUpdate;
            }
        };
        var l = class {
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            constructor(t, e, { autoResize = true, debounce = 250 } = {}){
                this.wrapper = t;
                this.content = e;
                if (autoResize) {
                    this.debouncedResize = ((t, e)=>{
                        let i;
                        return function(...s) {
                            clearTimeout(i);
                            i = setTimeout(()=>{
                                i = undefined;
                                t.apply(this, s);
                            }, e);
                        };
                    })(this.resize, debounce);
                    if (this.wrapper instanceof Window) {
                        window.addEventListener("resize", this.debouncedResize);
                    } else {
                        this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                        this.wrapperResizeObserver.observe(this.wrapper);
                    }
                    this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
                    this.contentResizeObserver.observe(this.content);
                }
                this.resize();
            }
            destroy() {
                this.wrapperResizeObserver?.disconnect();
                this.contentResizeObserver?.disconnect();
                if (this.wrapper === window && this.debouncedResize) {
                    window.removeEventListener("resize", this.debouncedResize);
                }
            }
            resize = ()=>{
                this.onWrapperResize();
                this.onContentResize();
            };
            onWrapperResize = ()=>{
                if (this.wrapper instanceof Window) {
                    this.width = window.innerWidth;
                    this.height = window.innerHeight;
                } else {
                    this.width = this.wrapper.clientWidth;
                    this.height = this.wrapper.clientHeight;
                }
            };
            onContentResize = ()=>{
                if (this.wrapper instanceof Window) {
                    this.scrollHeight = this.content.scrollHeight;
                    this.scrollWidth = this.content.scrollWidth;
                } else {
                    this.scrollHeight = this.wrapper.scrollHeight;
                    this.scrollWidth = this.wrapper.scrollWidth;
                }
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                };
            }
        };
        var h = class {
            events = {};
            emit(t, ...e) {
                let i = this.events[t] || [];
                for(let t = 0, s = i.length; t < s; t++){
                    i[t]?.(...e);
                }
            }
            on(t, e) {
                if (this.events[t]) {
                    this.events[t].push(e);
                } else {
                    this.events[t] = [
                        e
                    ];
                }
                return ()=>{
                    this.events[t] = this.events[t]?.filter((t)=>e !== t);
                };
            }
            off(t, e) {
                this.events[t] = this.events[t]?.filter((t)=>e !== t);
            }
            destroy() {
                this.events = {};
            }
        };
        let a = 100 / 6;
        let c = {
            passive: false
        };
        function d(deltaMode, e) {
            switch(deltaMode){
                case 1:
                    return a;
                case 2:
                    return e;
                default:
                    return 1;
            }
        }
        var p = class {
            touchStart = {
                x: 0,
                y: 0
            };
            lastDelta = {
                x: 0,
                y: 0
            };
            window = {
                width: 0,
                height: 0
            };
            emitter = new h;
            constructor(t, e = {
                wheelMultiplier: 1,
                touchMultiplier: 1
            }){
                this.element = t;
                this.options = e;
                window.addEventListener("resize", this.onWindowResize);
                this.onWindowResize();
                this.element.addEventListener("wheel", this.onWheel, c);
                this.element.addEventListener("touchstart", this.onTouchStart, c);
                this.element.addEventListener("touchmove", this.onTouchMove, c);
                this.element.addEventListener("touchend", this.onTouchEnd, c);
            }
            on(t, e) {
                return this.emitter.on(t, e);
            }
            destroy() {
                this.emitter.destroy();
                window.removeEventListener("resize", this.onWindowResize);
                this.element.removeEventListener("wheel", this.onWheel, c);
                this.element.removeEventListener("touchstart", this.onTouchStart, c);
                this.element.removeEventListener("touchmove", this.onTouchMove, c);
                this.element.removeEventListener("touchend", this.onTouchEnd, c);
            }
            onTouchStart = (t)=>{
                let { clientX, clientY } = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStart.x = clientX;
                this.touchStart.y = clientY;
                this.lastDelta = {
                    x: 0,
                    y: 0
                };
                this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: t
                });
            };
            onTouchMove = (t)=>{
                let { clientX, clientY } = t.targetTouches ? t.targetTouches[0] : t;
                let s = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
                let o = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = clientX;
                this.touchStart.y = clientY;
                this.lastDelta = {
                    x: s,
                    y: o
                };
                this.emitter.emit("scroll", {
                    deltaX: s,
                    deltaY: o,
                    event: t
                });
            };
            onTouchEnd = (event)=>{
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event
                });
            };
            onWheel = (t)=>{
                let { deltaX, deltaY, deltaMode } = t;
                let o = d(deltaMode, this.window.width);
                let r = d(deltaMode, this.window.height);
                deltaX *= o;
                deltaY *= r;
                deltaX *= this.options.wheelMultiplier;
                deltaY *= this.options.wheelMultiplier;
                this.emitter.emit("scroll", {
                    deltaX,
                    deltaY,
                    event: t
                });
            };
            onWindowResize = ()=>{
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            };
        };
        let u = (t)=>Math.min(1, 1.001 - 2 ** (-10 * t));
        var m = class {
            _isScrolling = false;
            _isStopped = false;
            _isLocked = false;
            _preventNextNativeScrollEvent = false;
            _resetVelocityTimeout = null;
            _rafId = null;
            isTouching;
            time = 0;
            userData = {};
            lastVelocity = 0;
            velocity = 0;
            direction = 0;
            options;
            targetScroll;
            animatedScroll;
            animate = new n;
            emitter = new h;
            dimensions;
            virtualScroll;
            constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = 0.075, touchInertiaExponent = 1.7, duration, easing, lerp = 0.1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false } = {}){
                window.lenisVersion = o;
                if (!window.lenis) {
                    window.lenis = {};
                }
                window.lenis.version = o;
                if (orientation === "horizontal") {
                    window.lenis.horizontal = true;
                }
                if (syncTouch === true) {
                    window.lenis.touch = true;
                }
                if (!(wrapper && wrapper !== document.documentElement)) {
                    wrapper = window;
                }
                if (typeof duration === "number" && typeof easing !== "function") {
                    easing = u;
                } else if (typeof easing === "function" && typeof duration !== "number") {
                    duration = 1;
                }
                this.options = {
                    wrapper,
                    content,
                    eventsTarget,
                    smoothWheel,
                    syncTouch,
                    syncTouchLerp,
                    touchInertiaExponent,
                    duration,
                    easing,
                    lerp,
                    infinite,
                    gestureOrientation,
                    orientation,
                    touchMultiplier,
                    wheelMultiplier,
                    autoResize,
                    prevent,
                    virtualScroll,
                    overscroll,
                    autoRaf,
                    anchors,
                    autoToggle,
                    allowNestedScroll,
                    naiveDimensions,
                    stopInertiaOnNavigate
                };
                this.dimensions = new l(wrapper, content, {
                    autoResize
                });
                this.updateClassName();
                this.targetScroll = this.animatedScroll = this.actualScroll;
                this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
                this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                    capture: true
                });
                if (this.options.anchors || this.options.stopInertiaOnNavigate) {
                    this.options.wrapper.addEventListener("click", this.onClick);
                }
                this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
                this.virtualScroll = new p(eventsTarget, {
                    touchMultiplier,
                    wheelMultiplier
                });
                this.virtualScroll.on("scroll", this.onVirtualScroll);
                if (this.options.autoToggle) {
                    this.checkOverflow();
                    this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
                }
                if (this.options.autoRaf) {
                    this._rafId = requestAnimationFrame(this.raf);
                }
            }
            destroy() {
                this.emitter.destroy();
                this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
                this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: true
                });
                this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
                if (this.options.anchors || this.options.stopInertiaOnNavigate) {
                    this.options.wrapper.removeEventListener("click", this.onClick);
                }
                this.virtualScroll.destroy();
                this.dimensions.destroy();
                this.cleanUpClassName();
                if (this._rafId) {
                    cancelAnimationFrame(this._rafId);
                }
            }
            on(t, e) {
                return this.emitter.on(t, e);
            }
            off(t, e) {
                return this.emitter.off(t, e);
            }
            onScrollEnd = (t)=>{
                if (!(t instanceof CustomEvent || this.isScrolling !== "smooth" && this.isScrolling !== false)) {
                    t.stopPropagation();
                }
            };
            dispatchScrollendEvent = ()=>{
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: true
                    }
                }));
            };
            get overflow() {
                let t = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[t];
            }
            checkOverflow() {
                if ([
                    "hidden",
                    "clip"
                ].includes(this.overflow)) {
                    this.internalStop();
                } else {
                    this.internalStart();
                }
            }
            onTransitionEnd = (t)=>{
                if (t.propertyName?.includes("overflow") && t.target === this.rootElement) {
                    this.checkOverflow();
                }
            };
            setScroll(t) {
                if (this.isHorizontal) {
                    this.options.wrapper.scrollTo({
                        left: t,
                        behavior: "instant"
                    });
                } else {
                    this.options.wrapper.scrollTo({
                        top: t,
                        behavior: "instant"
                    });
                }
            }
            onClick = (t)=>{
                let e = t.composedPath().filter((t)=>t instanceof HTMLAnchorElement && t.href).map((t)=>new URL(t.href));
                let i = new URL(window.location.href);
                if (this.options.anchors) {
                    let t = e.find((t)=>i.host === t.host && i.pathname === t.pathname && t.hash);
                    if (t) {
                        let e = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : undefined;
                        let i = `#${t.hash.split("#")[1]}`;
                        this.scrollTo(i, e);
                        return;
                    }
                }
                if (this.options.stopInertiaOnNavigate && e.some((t)=>i.host === t.host && i.pathname !== t.pathname)) {
                    return void this.reset();
                }
            };
            onPointerDown = (t)=>{
                if (t.button === 1) {
                    this.reset();
                }
            };
            onVirtualScroll = (t)=>{
                if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(t) === false) {
                    return;
                }
                let { deltaX, deltaY, event } = t;
                this.emitter.emit("virtual-scroll", {
                    deltaX,
                    deltaY,
                    event
                });
                if (event.ctrlKey || event.lenisStopPropagation) {
                    return;
                }
                let o = event.type.includes("touch");
                let r = event.type.includes("wheel");
                this.isTouching = event.type === "touchstart" || event.type === "touchmove";
                let n = deltaX === 0 && deltaY === 0;
                if (this.options.syncTouch && o && event.type === "touchstart" && n && !this.isStopped && !this.isLocked) {
                    return void this.reset();
                }
                let l = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
                if (n || l) {
                    return;
                }
                let h = event.composedPath();
                h = h.slice(0, h.indexOf(this.rootElement));
                let prevent = this.options.prevent;
                let c = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
                if (h.find((t)=>t instanceof HTMLElement && (typeof prevent === "function" && prevent?.(t) || t.hasAttribute?.("data-lenis-prevent") || c === "vertical" && t.hasAttribute?.("data-lenis-prevent-vertical") || c === "horizontal" && t.hasAttribute?.("data-lenis-prevent-horizontal") || o && t.hasAttribute?.("data-lenis-prevent-touch") || r && t.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(t, {
                        deltaX,
                        deltaY
                    })))) {
                    return;
                }
                if (this.isStopped || this.isLocked) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                    return;
                }
                if (!(this.options.syncTouch && o || this.options.smoothWheel && r)) {
                    this.isScrolling = "native";
                    this.animate.stop();
                    event.lenisStopPropagation = true;
                    return;
                }
                let d = deltaY;
                if (this.options.gestureOrientation === "both") {
                    d = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
                } else if (this.options.gestureOrientation === "horizontal") {
                    d = deltaX;
                }
                if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
                    event.lenisStopPropagation = true;
                }
                if (event.cancelable) {
                    event.preventDefault();
                }
                let p = o && this.options.syncTouch;
                let u = o && event.type === "touchend";
                if (u) {
                    d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
                }
                this.scrollTo(this.targetScroll + d, {
                    programmatic: false,
                    ...p ? {
                        lerp: u ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                });
            };
            resize() {
                this.dimensions.resize();
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.emit();
            }
            emit() {
                this.emitter.emit("scroll", this);
            }
            onNativeScroll = ()=>{
                if (this._resetVelocityTimeout !== null) {
                    clearTimeout(this._resetVelocityTimeout);
                    this._resetVelocityTimeout = null;
                }
                if (this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = false;
                    return;
                }
                if (this.isScrolling === false || this.isScrolling === "native") {
                    let t = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll;
                    this.lastVelocity = this.velocity;
                    this.velocity = this.animatedScroll - t;
                    this.direction = Math.sign(this.animatedScroll - t);
                    if (!this.isStopped) {
                        this.isScrolling = "native";
                    }
                    this.emit();
                    if (this.velocity !== 0) {
                        this._resetVelocityTimeout = setTimeout(()=>{
                            this.lastVelocity = this.velocity;
                            this.velocity = 0;
                            this.isScrolling = false;
                            this.emit();
                        }, 400);
                    }
                }
            };
            reset() {
                this.isLocked = false;
                this.isScrolling = false;
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.lastVelocity = this.velocity = 0;
                this.animate.stop();
            }
            start() {
                if (this.isStopped) {
                    if (this.options.autoToggle) {
                        return void this.rootElement.style.removeProperty("overflow");
                    }
                    this.internalStart();
                }
            }
            internalStart() {
                if (this.isStopped) {
                    this.reset();
                    this.isStopped = false;
                    this.emit();
                }
            }
            stop() {
                if (!this.isStopped) {
                    if (this.options.autoToggle) {
                        return void this.rootElement.style.setProperty("overflow", "clip");
                    }
                    this.internalStop();
                }
            }
            internalStop() {
                if (!this.isStopped) {
                    this.reset();
                    this.isStopped = true;
                    this.emit();
                }
            }
            raf = (t)=>{
                let e = t - (this.time || t);
                this.time = t;
                this.animate.advance(0.001 * e);
                if (this.options.autoRaf) {
                    this._rafId = requestAnimationFrame(this.raf);
                }
            };
            scrollTo(t, { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : undefined, duration = programmatic ? this.options.duration : undefined, easing = programmatic ? this.options.easing : undefined, onStart, onComplete, force = false, userData } = {}) {
                if ((this.isStopped || this.isLocked) && !force) {
                    return;
                }
                let m = t;
                let v = offset;
                if (typeof m === "string" && [
                    "top",
                    "left",
                    "start",
                    "#"
                ].includes(m)) {
                    m = 0;
                } else if (typeof m === "string" && [
                    "bottom",
                    "right",
                    "end"
                ].includes(m)) {
                    m = this.limit;
                } else {
                    let t = null;
                    typeof m === "string" ? (t = document.querySelector(m)) || (m === "#top" ? m = 0 : console.warn("Lenis: Target not found", m)) : m instanceof HTMLElement && m?.nodeType && (t = m);
                    if (t) {
                        if (this.options.wrapper !== window) {
                            let t = this.rootElement.getBoundingClientRect();
                            v -= this.isHorizontal ? t.left : t.top;
                        }
                        let e = t.getBoundingClientRect();
                        let i = getComputedStyle(t);
                        let s = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop);
                        let o = getComputedStyle(this.rootElement);
                        let r = this.isHorizontal ? Number.parseFloat(o.scrollPaddingLeft) : Number.parseFloat(o.scrollPaddingTop);
                        m = (this.isHorizontal ? e.left : e.top) + this.animatedScroll - (Number.isNaN(s) ? 0 : s) - (Number.isNaN(r) ? 0 : r);
                    }
                }
                if (typeof m === "number") {
                    m += v;
                    if (this.options.infinite) {
                        if (programmatic) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            let t = m - this.animatedScroll;
                            if (t > this.limit / 2) {
                                m -= this.limit;
                            } else if (t < -this.limit / 2) {
                                m += this.limit;
                            }
                        }
                    } else {
                        m = r(0, m, this.limit);
                    }
                    if (m === this.targetScroll) {
                        onStart?.(this);
                        onComplete?.(this);
                        return;
                    }
                    this.userData = userData ?? {};
                    if (immediate) {
                        this.animatedScroll = this.targetScroll = m;
                        this.setScroll(this.scroll);
                        this.reset();
                        this.preventNextNativeScrollEvent();
                        this.emit();
                        onComplete?.(this);
                        this.userData = {};
                        requestAnimationFrame(()=>{
                            this.dispatchScrollendEvent();
                        });
                        return;
                    }
                    if (!programmatic) {
                        this.targetScroll = m;
                    }
                    if (typeof duration === "number" && typeof easing !== "function") {
                        easing = u;
                    } else if (typeof easing === "function" && typeof duration !== "number") {
                        duration = 1;
                    }
                    this.animate.fromTo(this.animatedScroll, m, {
                        duration,
                        easing,
                        lerp,
                        onStart: ()=>{
                            if (lock) {
                                this.isLocked = true;
                            }
                            this.isScrolling = "smooth";
                            onStart?.(this);
                        },
                        onUpdate: (t, e)=>{
                            this.isScrolling = "smooth";
                            this.lastVelocity = this.velocity;
                            this.velocity = t - this.animatedScroll;
                            this.direction = Math.sign(this.velocity);
                            this.animatedScroll = t;
                            this.setScroll(this.scroll);
                            if (programmatic) {
                                this.targetScroll = t;
                            }
                            if (!e) {
                                this.emit();
                            }
                            if (e) {
                                this.reset();
                                this.emit();
                                onComplete?.(this);
                                this.userData = {};
                                requestAnimationFrame(()=>{
                                    this.dispatchScrollendEvent();
                                });
                                this.preventNextNativeScrollEvent();
                            }
                        }
                    });
                }
            }
            preventNextNativeScrollEvent() {
                this._preventNextNativeScrollEvent = true;
                requestAnimationFrame(()=>{
                    this._preventNextNativeScrollEvent = false;
                });
            }
            hasNestedScroll(t, { deltaX, deltaY }) {
                let s;
                let o;
                let r;
                let n;
                let l;
                let h;
                let a;
                let c;
                let d;
                let p;
                let u;
                let m;
                let v;
                let w;
                let S;
                let f;
                let g = Date.now();
                if (!t._lenis) {
                    t._lenis = {};
                }
                let t__lenis = t._lenis;
                if (g - (t__lenis.time ?? 0) > 2000) {
                    t__lenis.time = Date.now();
                    let e = window.getComputedStyle(t);
                    t__lenis.computedStyle = e;
                    s = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(e.overflowX);
                    o = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(e.overflowY);
                    l = [
                        "auto"
                    ].includes(e.overscrollBehaviorX);
                    h = [
                        "auto"
                    ].includes(e.overscrollBehaviorY);
                    t__lenis.hasOverflowX = s;
                    t__lenis.hasOverflowY = o;
                    if (!(s || o)) {
                        return false;
                    }
                    a = t.scrollWidth;
                    c = t.scrollHeight;
                    d = t.clientWidth;
                    p = t.clientHeight;
                    r = a > d;
                    n = c > p;
                    t__lenis.isScrollableX = r;
                    t__lenis.isScrollableY = n;
                    t__lenis.scrollWidth = a;
                    t__lenis.scrollHeight = c;
                    t__lenis.clientWidth = d;
                    t__lenis.clientHeight = p;
                    t__lenis.hasOverscrollBehaviorX = l;
                    t__lenis.hasOverscrollBehaviorY = h;
                } else {
                    r = t__lenis.isScrollableX;
                    n = t__lenis.isScrollableY;
                    s = t__lenis.hasOverflowX;
                    o = t__lenis.hasOverflowY;
                    a = t__lenis.scrollWidth;
                    c = t__lenis.scrollHeight;
                    d = t__lenis.clientWidth;
                    p = t__lenis.clientHeight;
                    l = t__lenis.hasOverscrollBehaviorX;
                    h = t__lenis.hasOverscrollBehaviorY;
                }
                if (!(s && r || o && n)) {
                    return false;
                }
                let E = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
                if (E === "horizontal") {
                    u = Math.round(t.scrollLeft);
                    m = a - d;
                    v = deltaX;
                    w = s;
                    S = r;
                    f = l;
                } else {
                    if (E !== "vertical") {
                        return false;
                    }
                    u = Math.round(t.scrollTop);
                    m = c - p;
                    v = deltaY;
                    w = o;
                    S = n;
                    f = h;
                }
                return !f && (u >= m || u <= 0) || (v > 0 ? u < m : u > 0) && w && S;
            }
            get rootElement() {
                if (this.options.wrapper === window) {
                    return document.documentElement;
                }
                return this.options.wrapper;
            }
            get limit() {
                if (this.options.naiveDimensions) {
                    if (this.isHorizontal) {
                        return this.rootElement.scrollWidth - this.rootElement.clientWidth;
                    }
                    return this.rootElement.scrollHeight - this.rootElement.clientHeight;
                }
                return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
            }
            get isHorizontal() {
                return this.options.orientation === "horizontal";
            }
            get actualScroll() {
                let wrapper = this.options.wrapper;
                if (this.isHorizontal) {
                    return wrapper.scrollX ?? wrapper.scrollLeft;
                }
                return wrapper.scrollY ?? wrapper.scrollTop;
            }
            get scroll() {
                let t;
                if (this.options.infinite) {
                    return (this.animatedScroll % (t = this.limit) + t) % t;
                }
                return this.animatedScroll;
            }
            get progress() {
                if (this.limit === 0) {
                    return 1;
                }
                return this.scroll / this.limit;
            }
            get isScrolling() {
                return this._isScrolling;
            }
            set isScrolling(t) {
                if (this._isScrolling !== t) {
                    this._isScrolling = t;
                    this.updateClassName();
                }
            }
            get isStopped() {
                return this._isStopped;
            }
            set isStopped(t) {
                if (this._isStopped !== t) {
                    this._isStopped = t;
                    this.updateClassName();
                }
            }
            get isLocked() {
                return this._isLocked;
            }
            set isLocked(t) {
                if (this._isLocked !== t) {
                    this._isLocked = t;
                    this.updateClassName();
                }
            }
            get isSmooth() {
                return this.isScrolling === "smooth";
            }
            get className() {
                let t = "lenis";
                if (this.options.autoToggle) {
                    t += " lenis-autoToggle";
                }
                if (this.isStopped) {
                    t += " lenis-stopped";
                }
                if (this.isLocked) {
                    t += " lenis-locked";
                }
                if (this.isScrolling) {
                    t += " lenis-scrolling";
                }
                if (this.isScrolling === "smooth") {
                    t += " lenis-smooth";
                }
                return t;
            }
            updateClassName() {
                this.cleanUpClassName();
                this.className.split(" ").forEach((t)=>{
                    this.rootElement.classList.add(t);
                });
            }
            cleanUpClassName() {
                for (let t of Array.from(this.rootElement.classList)){
                    if (t === "lenis" || t.startsWith("lenis-")) {
                        this.rootElement.classList.remove(t);
                    }
                }
            }
        };
        var v = t.i(513679);
        i.default.registerPlugin(s.ScrollTrigger);
        let WContext = v.createContext(null);
        t.s([
            "SmoothScroll",
            0,
            ({ children })=>{
                let oRef = v.useRef(null);
                let [value, setValue] = v.useState(null);
                v.useEffect(()=>{
                    if (!oRef.current) {
                        return;
                    }
                    let t = new m({
                        lerp: 0.2
                    });
                    setValue(t);
                    let e = 0;
                    let r = ()=>{
                        cancelAnimationFrame(e);
                        e = requestAnimationFrame(()=>{
                            t.resize();
                            s.ScrollTrigger.refresh();
                        });
                    };
                    r();
                    t.on("scroll", s.ScrollTrigger.update);
                    s.ScrollTrigger.config({
                        ignoreMobileResize: true
                    });
                    let l = (e)=>{
                        t.raf(1000 * e);
                    };
                    i.default.ticker.add(l);
                    i.default.ticker.lagSmoothing(0);
                    let h = (e)=>{
                        if (e.detail?.locked) {
                            t.stop();
                        } else {
                            t.start();
                        }
                    };
                    window.addEventListener("modal-lock", h);
                    window.addEventListener("load", r);
                    let a = oRef.current.querySelector("main");
                    let c = typeof ResizeObserver !== "undefined" && a ? new ResizeObserver(r) : null;
                    if (a && c) {
                        c.observe(a);
                    }
                    return ()=>{
                        cancelAnimationFrame(e);
                        window.removeEventListener("modal-lock", h);
                        i.default.ticker.remove(l);
                        window.removeEventListener("load", r);
                        c?.disconnect();
                        t.destroy();
                        setValue(null);
                    };
                }, []);
                return e.jsx(WContext, {
                    value,
                    children: e.jsx("div", {
                        ref: oRef,
                        children
                    })
                });
            },
            "useSmoothScroll",
            0,
            ()=>v.useContext(WContext)
        ], 801075);
    }
]);
