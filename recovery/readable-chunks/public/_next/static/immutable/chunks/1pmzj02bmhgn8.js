;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "906b322a-6ee7-b20f-b899-5973384ddb8a";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    801075,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(983871);
        var r = e.i(607198);
        var o = "1.3.23";
        function n(e, t, i) {
            return Math.max(e, Math.min(t, i));
        }
        var s = class {
            isRunning = false;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(e) {
                if (!this.isRunning) {
                    return;
                }
                let t = false;
                if (this.duration && this.easing) {
                    this.currentTime += e;
                    let i = n(0, this.currentTime / this.duration, 1);
                    let r = (t = i >= 1) ? 1 : this.easing(i);
                    this.value = this.from + (this.to - this.from) * r;
                } else if (this.lerp) {
                    let i;
                    let r;
                    let o;
                    let s;
                    this.value = (i = this.value, r = this.to, o = 60 * this.lerp, (1 - (s = 1 - Math.exp(-o * e))) * i + s * r);
                    if (Math.round(this.value) === Math.round(this.to)) {
                        this.value = this.to;
                        t = true;
                    }
                } else {
                    this.value = this.to;
                    t = true;
                }
                if (t) {
                    this.stop();
                }
                this.onUpdate?.(this.value, t);
            }
            stop() {
                this.isRunning = false;
            }
            fromTo(e, t, { lerp, duration, easing, onStart, onUpdate }) {
                this.from = this.value = e;
                this.to = t;
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
            constructor(e, t, { autoResize = true, debounce = 250 } = {}){
                this.wrapper = e;
                this.content = t;
                if (autoResize) {
                    this.debouncedResize = ((e, t)=>{
                        let i;
                        return function(...r) {
                            clearTimeout(i);
                            i = setTimeout(()=>{
                                i = undefined;
                                e.apply(this, r);
                            }, t);
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
        var a = class {
            events = {};
            emit(e, ...t) {
                let i = this.events[e] || [];
                for(let e = 0, r = i.length; e < r; e++){
                    i[e]?.(...t);
                }
            }
            on(e, t) {
                if (this.events[e]) {
                    this.events[e].push(t);
                } else {
                    this.events[e] = [
                        t
                    ];
                }
                return ()=>{
                    this.events[e] = this.events[e]?.filter((e)=>t !== e);
                };
            }
            off(e, t) {
                this.events[e] = this.events[e]?.filter((e)=>t !== e);
            }
            destroy() {
                this.events = {};
            }
        };
        let u = 100 / 6;
        let c = {
            passive: false
        };
        function h(deltaMode, t) {
            switch(deltaMode){
                case 1:
                    return u;
                case 2:
                    return t;
                default:
                    return 1;
            }
        }
        var d = class {
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
            emitter = new a;
            constructor(e, t = {
                wheelMultiplier: 1,
                touchMultiplier: 1
            }){
                this.element = e;
                this.options = t;
                window.addEventListener("resize", this.onWindowResize);
                this.onWindowResize();
                this.element.addEventListener("wheel", this.onWheel, c);
                this.element.addEventListener("touchstart", this.onTouchStart, c);
                this.element.addEventListener("touchmove", this.onTouchMove, c);
                this.element.addEventListener("touchend", this.onTouchEnd, c);
            }
            on(e, t) {
                return this.emitter.on(e, t);
            }
            destroy() {
                this.emitter.destroy();
                window.removeEventListener("resize", this.onWindowResize);
                this.element.removeEventListener("wheel", this.onWheel, c);
                this.element.removeEventListener("touchstart", this.onTouchStart, c);
                this.element.removeEventListener("touchmove", this.onTouchMove, c);
                this.element.removeEventListener("touchend", this.onTouchEnd, c);
            }
            onTouchStart = (e)=>{
                let { clientX, clientY } = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStart.x = clientX;
                this.touchStart.y = clientY;
                this.lastDelta = {
                    x: 0,
                    y: 0
                };
                this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: e
                });
            };
            onTouchMove = (e)=>{
                let { clientX, clientY } = e.targetTouches ? e.targetTouches[0] : e;
                let r = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
                let o = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = clientX;
                this.touchStart.y = clientY;
                this.lastDelta = {
                    x: r,
                    y: o
                };
                this.emitter.emit("scroll", {
                    deltaX: r,
                    deltaY: o,
                    event: e
                });
            };
            onTouchEnd = (event)=>{
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event
                });
            };
            onWheel = (e)=>{
                let { deltaX, deltaY, deltaMode } = e;
                let o = h(deltaMode, this.window.width);
                let n = h(deltaMode, this.window.height);
                deltaX *= o;
                deltaY *= n;
                deltaX *= this.options.wheelMultiplier;
                deltaY *= this.options.wheelMultiplier;
                this.emitter.emit("scroll", {
                    deltaX,
                    deltaY,
                    event: e
                });
            };
            onWindowResize = ()=>{
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            };
        };
        let p = (e)=>Math.min(1, 1.001 - 2 ** (-10 * e));
        var f = class {
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
            animate = new s;
            emitter = new a;
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
                    easing = p;
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
                this.virtualScroll = new d(eventsTarget, {
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
            on(e, t) {
                return this.emitter.on(e, t);
            }
            off(e, t) {
                return this.emitter.off(e, t);
            }
            onScrollEnd = (e)=>{
                if (!(e instanceof CustomEvent || this.isScrolling !== "smooth" && this.isScrolling !== false)) {
                    e.stopPropagation();
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
                let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[e];
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
            onTransitionEnd = (e)=>{
                if (e.propertyName?.includes("overflow") && e.target === this.rootElement) {
                    this.checkOverflow();
                }
            };
            setScroll(e) {
                if (this.isHorizontal) {
                    this.options.wrapper.scrollTo({
                        left: e,
                        behavior: "instant"
                    });
                } else {
                    this.options.wrapper.scrollTo({
                        top: e,
                        behavior: "instant"
                    });
                }
            }
            onClick = (e)=>{
                let t = e.composedPath().filter((e)=>e instanceof HTMLAnchorElement && e.href).map((e)=>new URL(e.href));
                let i = new URL(window.location.href);
                if (this.options.anchors) {
                    let e = t.find((e)=>i.host === e.host && i.pathname === e.pathname && e.hash);
                    if (e) {
                        let t = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : undefined;
                        let i = `#${e.hash.split("#")[1]}`;
                        this.scrollTo(i, t);
                        return;
                    }
                }
                if (this.options.stopInertiaOnNavigate && t.some((e)=>i.host === e.host && i.pathname !== e.pathname)) {
                    return void this.reset();
                }
            };
            onPointerDown = (e)=>{
                if (e.button === 1) {
                    this.reset();
                }
            };
            onVirtualScroll = (e)=>{
                if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(e) === false) {
                    return;
                }
                let { deltaX, deltaY, event } = e;
                this.emitter.emit("virtual-scroll", {
                    deltaX,
                    deltaY,
                    event
                });
                if (event.ctrlKey || event.lenisStopPropagation) {
                    return;
                }
                let o = event.type.includes("touch");
                let n = event.type.includes("wheel");
                this.isTouching = event.type === "touchstart" || event.type === "touchmove";
                let s = deltaX === 0 && deltaY === 0;
                if (this.options.syncTouch && o && event.type === "touchstart" && s && !this.isStopped && !this.isLocked) {
                    return void this.reset();
                }
                let l = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
                if (s || l) {
                    return;
                }
                let a = event.composedPath();
                a = a.slice(0, a.indexOf(this.rootElement));
                let prevent = this.options.prevent;
                let c = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
                if (a.find((e)=>e instanceof HTMLElement && (typeof prevent === "function" && prevent?.(e) || e.hasAttribute?.("data-lenis-prevent") || c === "vertical" && e.hasAttribute?.("data-lenis-prevent-vertical") || c === "horizontal" && e.hasAttribute?.("data-lenis-prevent-horizontal") || o && e.hasAttribute?.("data-lenis-prevent-touch") || n && e.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(e, {
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
                if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) {
                    this.isScrolling = "native";
                    this.animate.stop();
                    event.lenisStopPropagation = true;
                    return;
                }
                let h = deltaY;
                if (this.options.gestureOrientation === "both") {
                    h = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
                } else if (this.options.gestureOrientation === "horizontal") {
                    h = deltaX;
                }
                if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
                    event.lenisStopPropagation = true;
                }
                if (event.cancelable) {
                    event.preventDefault();
                }
                let d = o && this.options.syncTouch;
                let p = o && event.type === "touchend";
                if (p) {
                    h = Math.sign(h) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
                }
                this.scrollTo(this.targetScroll + h, {
                    programmatic: false,
                    ...d ? {
                        lerp: p ? this.options.syncTouchLerp : 1
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
                    let e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll;
                    this.lastVelocity = this.velocity;
                    this.velocity = this.animatedScroll - e;
                    this.direction = Math.sign(this.animatedScroll - e);
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
            raf = (e)=>{
                let t = e - (this.time || e);
                this.time = e;
                this.animate.advance(0.001 * t);
                if (this.options.autoRaf) {
                    this._rafId = requestAnimationFrame(this.raf);
                }
            };
            scrollTo(e, { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : undefined, duration = programmatic ? this.options.duration : undefined, easing = programmatic ? this.options.easing : undefined, onStart, onComplete, force = false, userData } = {}) {
                if ((this.isStopped || this.isLocked) && !force) {
                    return;
                }
                let f = e;
                let m = offset;
                if (typeof f === "string" && [
                    "top",
                    "left",
                    "start",
                    "#"
                ].includes(f)) {
                    f = 0;
                } else if (typeof f === "string" && [
                    "bottom",
                    "right",
                    "end"
                ].includes(f)) {
                    f = this.limit;
                } else {
                    let e = null;
                    typeof f === "string" ? (e = document.querySelector(f)) || (f === "#top" ? f = 0 : console.warn("Lenis: Target not found", f)) : f instanceof HTMLElement && f?.nodeType && (e = f);
                    if (e) {
                        if (this.options.wrapper !== window) {
                            let e = this.rootElement.getBoundingClientRect();
                            m -= this.isHorizontal ? e.left : e.top;
                        }
                        let t = e.getBoundingClientRect();
                        let i = getComputedStyle(e);
                        let r = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop);
                        let o = getComputedStyle(this.rootElement);
                        let n = this.isHorizontal ? Number.parseFloat(o.scrollPaddingLeft) : Number.parseFloat(o.scrollPaddingTop);
                        f = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(n) ? 0 : n);
                    }
                }
                if (typeof f === "number") {
                    f += m;
                    if (this.options.infinite) {
                        if (programmatic) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            let e = f - this.animatedScroll;
                            if (e > this.limit / 2) {
                                f -= this.limit;
                            } else if (e < -this.limit / 2) {
                                f += this.limit;
                            }
                        }
                    } else {
                        f = n(0, f, this.limit);
                    }
                    if (f === this.targetScroll) {
                        onStart?.(this);
                        onComplete?.(this);
                        return;
                    }
                    this.userData = userData ?? {};
                    if (immediate) {
                        this.animatedScroll = this.targetScroll = f;
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
                        this.targetScroll = f;
                    }
                    if (typeof duration === "number" && typeof easing !== "function") {
                        easing = p;
                    } else if (typeof easing === "function" && typeof duration !== "number") {
                        duration = 1;
                    }
                    this.animate.fromTo(this.animatedScroll, f, {
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
                        onUpdate: (e, t)=>{
                            this.isScrolling = "smooth";
                            this.lastVelocity = this.velocity;
                            this.velocity = e - this.animatedScroll;
                            this.direction = Math.sign(this.velocity);
                            this.animatedScroll = e;
                            this.setScroll(this.scroll);
                            if (programmatic) {
                                this.targetScroll = e;
                            }
                            if (!t) {
                                this.emit();
                            }
                            if (t) {
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
            hasNestedScroll(e, { deltaX, deltaY }) {
                let r;
                let o;
                let n;
                let s;
                let l;
                let a;
                let u;
                let c;
                let h;
                let d;
                let p;
                let f;
                let m;
                let g;
                let v;
                let w;
                let b = Date.now();
                if (!e._lenis) {
                    e._lenis = {};
                }
                let e__lenis = e._lenis;
                if (b - (e__lenis.time ?? 0) > 2000) {
                    e__lenis.time = Date.now();
                    let t = window.getComputedStyle(e);
                    e__lenis.computedStyle = t;
                    r = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(t.overflowX);
                    o = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(t.overflowY);
                    l = [
                        "auto"
                    ].includes(t.overscrollBehaviorX);
                    a = [
                        "auto"
                    ].includes(t.overscrollBehaviorY);
                    e__lenis.hasOverflowX = r;
                    e__lenis.hasOverflowY = o;
                    if (!(r || o)) {
                        return false;
                    }
                    u = e.scrollWidth;
                    c = e.scrollHeight;
                    h = e.clientWidth;
                    d = e.clientHeight;
                    n = u > h;
                    s = c > d;
                    e__lenis.isScrollableX = n;
                    e__lenis.isScrollableY = s;
                    e__lenis.scrollWidth = u;
                    e__lenis.scrollHeight = c;
                    e__lenis.clientWidth = h;
                    e__lenis.clientHeight = d;
                    e__lenis.hasOverscrollBehaviorX = l;
                    e__lenis.hasOverscrollBehaviorY = a;
                } else {
                    n = e__lenis.isScrollableX;
                    s = e__lenis.isScrollableY;
                    r = e__lenis.hasOverflowX;
                    o = e__lenis.hasOverflowY;
                    u = e__lenis.scrollWidth;
                    c = e__lenis.scrollHeight;
                    h = e__lenis.clientWidth;
                    d = e__lenis.clientHeight;
                    l = e__lenis.hasOverscrollBehaviorX;
                    a = e__lenis.hasOverscrollBehaviorY;
                }
                if (!(r && n || o && s)) {
                    return false;
                }
                let S = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
                if (S === "horizontal") {
                    p = Math.round(e.scrollLeft);
                    f = u - h;
                    m = deltaX;
                    g = r;
                    v = n;
                    w = l;
                } else {
                    if (S !== "vertical") {
                        return false;
                    }
                    p = Math.round(e.scrollTop);
                    f = c - d;
                    m = deltaY;
                    g = o;
                    v = s;
                    w = a;
                }
                return !w && (p >= f || p <= 0) || (m > 0 ? p < f : p > 0) && g && v;
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
                let e;
                if (this.options.infinite) {
                    return (this.animatedScroll % (e = this.limit) + e) % e;
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
            set isScrolling(e) {
                if (this._isScrolling !== e) {
                    this._isScrolling = e;
                    this.updateClassName();
                }
            }
            get isStopped() {
                return this._isStopped;
            }
            set isStopped(e) {
                if (this._isStopped !== e) {
                    this._isStopped = e;
                    this.updateClassName();
                }
            }
            get isLocked() {
                return this._isLocked;
            }
            set isLocked(e) {
                if (this._isLocked !== e) {
                    this._isLocked = e;
                    this.updateClassName();
                }
            }
            get isSmooth() {
                return this.isScrolling === "smooth";
            }
            get className() {
                let e = "lenis";
                if (this.options.autoToggle) {
                    e += " lenis-autoToggle";
                }
                if (this.isStopped) {
                    e += " lenis-stopped";
                }
                if (this.isLocked) {
                    e += " lenis-locked";
                }
                if (this.isScrolling) {
                    e += " lenis-scrolling";
                }
                if (this.isScrolling === "smooth") {
                    e += " lenis-smooth";
                }
                return e;
            }
            updateClassName() {
                this.cleanUpClassName();
                this.className.split(" ").forEach((e)=>{
                    this.rootElement.classList.add(e);
                });
            }
            cleanUpClassName() {
                for (let e of Array.from(this.rootElement.classList)){
                    if (e === "lenis" || e.startsWith("lenis-")) {
                        this.rootElement.classList.remove(e);
                    }
                }
            }
        };
        var m = e.i(513679);
        i.default.registerPlugin(r.ScrollTrigger);
        let GContext = m.createContext(null);
        e.s([
            "SmoothScroll",
            0,
            ({ children })=>{
                let oRef = m.useRef(null);
                let [value, setN] = m.useState(null);
                m.useEffect(()=>{
                    if (!oRef.current) {
                        return;
                    }
                    let e = new f({
                        lerp: 0.2
                    });
                    setN(e);
                    let t = 0;
                    let n = ()=>{
                        cancelAnimationFrame(t);
                        t = requestAnimationFrame(()=>{
                            e.resize();
                            r.ScrollTrigger.refresh();
                        });
                    };
                    n();
                    e.on("scroll", r.ScrollTrigger.update);
                    r.ScrollTrigger.config({
                        ignoreMobileResize: true
                    });
                    let l = (t)=>{
                        e.raf(1000 * t);
                    };
                    i.default.ticker.add(l);
                    i.default.ticker.lagSmoothing(0);
                    let a = (t)=>{
                        if (t.detail?.locked) {
                            e.stop();
                        } else {
                            e.start();
                        }
                    };
                    window.addEventListener("modal-lock", a);
                    window.addEventListener("load", n);
                    let u = oRef.current.querySelector("main");
                    let c = typeof ResizeObserver !== "undefined" && u ? new ResizeObserver(n) : null;
                    if (u && c) {
                        c.observe(u);
                    }
                    return ()=>{
                        cancelAnimationFrame(t);
                        window.removeEventListener("modal-lock", a);
                        i.default.ticker.remove(l);
                        window.removeEventListener("load", n);
                        c?.disconnect();
                        e.destroy();
                        setN(null);
                    };
                }, []);
                return t.jsx(GContext, {
                    value,
                    children: t.jsx("div", {
                        ref: oRef,
                        children
                    })
                });
            },
            "useSmoothScroll",
            0,
            ()=>m.useContext(GContext)
        ], 801075);
    },
    775859,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        e.s([
            "CloseIcon",
            0,
            (e)=>t.jsxs("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    focusable: "false",
                    "aria-hidden": "true",
                    ...e,
                    children: [
                        t.jsx("path", {
                            d: "M15.9006 5.06977C13.75 6.31542 11.9494 8.08518 10.6667 10.214L10.5258 10.4483C10.4147 10.6326 10.2149 10.745 9.99969 10.745C9.78462 10.745 9.58525 10.6324 9.47421 10.4483L9.33325 10.214C8.05073 8.08521 6.24995 6.31541 4.09943 5.06977L4.71455 4.00767C6.83759 5.2374 8.64415 6.93957 9.99969 8.9769C11.3553 6.93957 13.1618 5.2374 15.2848 4.00767L15.9006 5.06977Z",
                            fill: "currentColor"
                        }),
                        t.jsx("path", {
                            d: "M4.09943 14.9302C6.25004 13.6846 8.05064 11.9148 9.33325 9.78605L9.47421 9.55174C9.58526 9.36743 9.78513 9.255 10.0003 9.255C10.2154 9.25504 10.4147 9.36757 10.5258 9.55174L10.6667 9.78605C11.9493 11.9148 13.75 13.6846 15.9006 14.9302L15.2854 15.9923C13.1624 14.7626 11.3559 13.0604 10.0003 11.0231C8.64472 13.0604 6.83823 14.7626 4.71517 15.9923L4.09943 14.9302Z",
                            fill: "currentColor"
                        })
                    ]
                })
        ]);
    },
    581867,
    324832,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(809393);
        e.s([
            "FlowerLogo",
            0,
            ({ className })=>t.jsxs("svg", {
                    viewBox: "0 0 21 19",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i.default(className, "fill-current"),
                    children: [
                        t.jsx("title", {
                            children: "Logo Lassie"
                        }),
                        t.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.09799 5.59379C8.64975 3.29132 12.8728 -1.49502 14.995 0.457653C15.5096 0.931674 15.9811 1.61058 15.6672 3.64769C15.4504 5.05664 14.4039 6.75749 11.9045 8.97505C21.6239 1.1462 23.554 15.5546 12.7202 13.1919C17.7293 18.0144 5.84566 21.493 7.21458 14.7894C-0.648439 20.658 -3.02221 6.30954 4.85119 10.0397C4.54951 9.85596 3.65955 9.5126 2.89214 8.18028C-1.80677 0.0254168 8.50698 -2.26497 8.09799 5.59379ZM8.10995 8.40536C8.25927 9.60208 7.42345 10.6975 6.22958 10.8703L6.08716 10.8913L6.22859 10.9182C7.41249 11.1457 8.19757 12.2789 7.99342 13.4668L7.96852 13.6082L8.03724 13.4827C8.61972 12.4264 9.94029 12.0313 11.0082 12.5924L11.1357 12.6591L11.0371 12.5545C10.2125 11.6745 10.2462 10.2971 11.1098 9.45609L11.2133 9.3555L11.0829 9.41625C9.99044 9.92824 8.68914 9.47227 8.15576 8.39142L8.09202 8.26194L8.10995 8.40536Z"
                        })
                    ]
                })
        ], 581867);
        e.s([
            "LassieLogo",
            0,
            ({ className })=>t.jsxs("svg", {
                    viewBox: "0 0 47 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i.default("fill-current", className),
                    children: [
                        t.jsx("title", {
                            children: "Logo Lassie Text"
                        }),
                        t.jsx("path", {
                            d: "M0 11.4437C1.15885 11.4437 1.57532 11.0997 1.57532 10.2124V2.60742C1.57532 1.72017 1.14075 1.37614 0 1.37614V0.525106H5.41402V1.37614C3.96545 1.37614 3.45846 1.72017 3.45846 2.66174V11.2083H6.04777C8.18441 11.2083 8.96301 10.4659 9.56055 8.4198H10.4659L9.63298 12.2947H0V11.4437Z"
                        }),
                        t.jsx("path", {
                            d: "M18.3421 10.828L18.4869 11.3169C17.8351 12.1861 17.3643 12.4939 16.7668 12.4939C15.9157 12.4939 15.4449 11.9145 15.3182 11.0997C14.5396 12.1136 13.8334 12.4939 13.0367 12.4939C11.8959 12.4939 11.1717 11.6791 11.1717 10.647C11.1717 9.59676 11.8416 8.96301 13.1815 8.4198L15.282 7.58687V6.8988C15.282 5.83049 14.7569 5.17863 13.7429 5.17863C13.0005 5.17863 12.3486 5.55888 11.6968 6.50045L11.063 6.04777C12.0951 4.38192 13.2178 3.78438 14.4128 3.78438C15.9881 3.78438 17.0021 4.87081 17.0021 6.64531V10.5202C17.0021 10.9548 17.147 11.2264 17.5816 11.2264C17.8532 11.2264 18.0524 11.0997 18.3421 10.828ZM13.8877 11.1721C14.3042 11.1721 14.775 10.991 15.282 10.5564V8.58277L14.0688 8.83626C13.1997 9.03544 12.8194 9.50623 12.8194 10.1581C12.8194 10.8462 13.3264 11.1721 13.8877 11.1721Z"
                        }),
                        t.jsx("path", {
                            d: "M22.0938 6.93502L23.7234 7.55066C24.9909 8.02144 25.7152 8.78194 25.7152 9.9408C25.7152 11.3894 24.5744 12.4939 22.8905 12.4939C21.967 12.4939 21.1522 12.1499 20.5728 11.6067L19.6493 12.4034H19.2691L19.0699 9.37948H19.8485C20.4641 10.828 21.4419 11.5342 22.6189 11.5342C23.4699 11.5342 24.0674 11.1178 24.0674 10.3754C24.0674 9.90458 23.8139 9.45191 22.9629 9.10787L21.4781 8.52844C20.0658 7.96712 19.4139 7.22473 19.4139 6.15641C19.4139 4.70785 20.6452 3.78438 22.1481 3.78438C22.981 3.78438 23.5967 4.0922 24.0674 4.61731L24.9909 3.83871H25.3531V6.55477H24.5744C24.0131 5.1062 23.2707 4.70785 22.4378 4.70785C21.5506 4.70785 21.0255 5.16052 21.0255 5.81238C21.0255 6.30127 21.3152 6.64531 22.0938 6.93502Z"
                        }),
                        t.jsx("path", {
                            d: "M29.8522 6.93502L31.4819 7.55066C32.7494 8.02144 33.4737 8.78194 33.4737 9.9408C33.4737 11.3894 32.3329 12.4939 30.649 12.4939C29.7255 12.4939 28.9107 12.1499 28.3312 11.6067L27.4078 12.4034H27.0275L26.8284 9.37948H27.607C28.2226 10.828 29.2004 11.5342 30.3773 11.5342C31.2284 11.5342 31.8259 11.1178 31.8259 10.3754C31.8259 9.90458 31.5724 9.45191 30.7214 9.10787L29.2366 8.52844C27.8242 7.96712 27.1724 7.22473 27.1724 6.15641C27.1724 4.70785 28.4037 3.78438 29.9066 3.78438C30.7395 3.78438 31.3551 4.0922 31.8259 4.61731L32.7494 3.83871H33.1115V6.55477H32.3329C31.7716 5.1062 31.0292 4.70785 30.1963 4.70785C29.309 4.70785 28.7839 5.16052 28.7839 5.81238C28.7839 6.30127 29.0736 6.64531 29.8522 6.93502Z"
                        }),
                        t.jsx("path", {
                            d: "M36.651 2.10042C36.0354 2.10042 35.5827 1.66585 35.5827 1.05021C35.5827 0.452677 36.0354 0 36.651 0C37.2667 0 37.7375 0.452677 37.7375 1.05021C37.7375 1.66585 37.2667 2.10042 36.651 2.10042ZM34.4601 11.5342C35.4741 11.5342 35.7457 11.335 35.7457 10.2667V5.81238L34.5506 5.48645V4.92513L36.9045 3.94735H37.4659V10.7194C37.4659 11.3532 37.7375 11.5342 38.6971 11.5342V12.2947H34.4601V11.5342Z"
                        }),
                        t.jsx("path", {
                            d: "M46.4688 9.56055L46.9576 9.9408C46.1428 11.6067 44.9659 12.4939 43.3724 12.4939C40.928 12.4939 39.5337 10.6108 39.5337 8.22062C39.5337 5.72184 41.2358 3.80249 43.4811 3.80249C45.4366 3.80249 46.7404 5.14242 46.7404 7.33337V7.42391H41.2358V7.58687C41.2358 9.48812 42.2317 10.9005 44.1148 10.9005C45.1288 10.9005 45.8893 10.4116 46.4688 9.56055ZM43.1914 4.67163C42.2317 4.65352 41.5074 5.39592 41.3082 6.59098H44.8572C44.7667 5.32349 44.1329 4.67163 43.1914 4.67163Z"
                        })
                    ]
                })
        ], 324832);
    },
    974981,
    699472,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(809393);
        var r = e.i(983871);
        var o = e.i(300778);
        var n = e.i(513679);
        var s = e.i(631923);
        var l = e.i(246880);
        var a = e.i(276522);
        var u = e.i(464068);
        function useC({ children, className, href, active, submenu, isHovered = false, mode = "default", onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }) {
            let { bgTheme } = a.useNav();
            let y = o.usePathname();
            let [S, setS] = n.useState(false);
            let x = href === "/" && y === href || href !== "/" && y.startsWith(href.toString()) || active;
            let E = mode === "index" ? x && !isHovered : !isHovered;
            let _ = href.toString().startsWith("https");
            let className_1 = i.default("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", className);
            let onMouseEnter_1 = (e)=>{
                setS(true);
                onMouseEnter?.(e);
            };
            let onMouseLeave_1 = (e)=>{
                setS(false);
                onMouseLeave?.(e);
            };
            let onFocus_1 = (e)=>{
                setS(true);
                onFocus?.(e);
            };
            let onBlur_1 = (e)=>{
                setS(false);
                onBlur?.(e);
            };
            let P = t.jsxs(t.Fragment, {
                children: [
                    t.jsx("span", {
                        className: i.default("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", E && mode !== "index" && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
                    }),
                    t.jsx("div", {
                        className: i.default("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", isHovered && mode !== "index" && bgTheme === "light" && "text-text-primary", isHovered && mode !== "index" && bgTheme === "dark" && "text-white", mode === "index" && bgTheme === "dark" && !E && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
                        children
                    }),
                    S && submenu
                ]
            });
            if (submenu) {
                return t.jsx("button", {
                    type: "button",
                    "aria-current": x ? "page" : undefined,
                    "aria-haspopup": "true",
                    "aria-expanded": S,
                    onMouseEnter: onMouseEnter_1,
                    onMouseLeave: onMouseLeave_1,
                    onFocus: onFocus_1,
                    onBlur: onBlur_1,
                    className: className_1,
                    children: P
                });
            }
            return t.jsx(u.default, {
                "aria-current": x ? "page" : undefined,
                onMouseEnter: onMouseEnter_1,
                onMouseLeave: onMouseLeave_1,
                onFocus: onFocus_1,
                onBlur: onBlur_1,
                className: className_1,
                href,
                target: _ ? "_blank" : undefined,
                ...rest,
                children: P
            });
        }
        e.s([
            "NavItem",
            0,
            useC
        ], 699472);
        let h = {
            showHover ({ isHovered, item, moveHoverTo }) {
                let r = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, r.width);
                } else {
                    moveHoverTo(item.offsetLeft, r.width, false);
                }
            },
            idleState ({ hoverRef }) {
                r.default.killTweensOf(hoverRef.current);
                setTimeout(()=>{
                    r.default.set(hoverRef.current, {
                        width: 0
                    });
                });
            }
        };
        let d = {
            idleState ({ moveHoverTo, navRef }) {
                let i = navRef.current?.querySelector('[aria-current="page"]');
                if (i) {
                    let t = i.getBoundingClientRect();
                    moveHoverTo(i.offsetLeft, t.width);
                }
            },
            showHover ({ isHovered, item, moveHoverTo }) {
                let r = item.getBoundingClientRect();
                if (isHovered) {
                    moveHoverTo(item.offsetLeft, r.width);
                } else {
                    let e = item.closest("nav")?.querySelector('[aria-current="page"]');
                    if (e) {
                        let t = e.getBoundingClientRect();
                        moveHoverTo(e.offsetLeft, t.width, false);
                    }
                    moveHoverTo(item.offsetLeft, r.width);
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
                let SRef = n.useRef(null);
                let CRef = n.useRef(null);
                let xRef = n.useRef(null);
                let ERef = n.useRef(null);
                let [_, set_] = n.useState(false);
                let { collapsed, setCollapsed } = a.useNav();
                let ORef = n.useRef(null);
                let R = o.usePathname();
                function P() {
                    if (mode !== "auto") {
                        return mode;
                    }
                    indexModePaths.includes(R);
                    return "default";
                }
                function M() {
                    if (P() === "default") {
                        h.idleState({
                            hoverRef: CRef
                        });
                    } else {
                        d.idleState({
                            moveHoverTo,
                            navRef: SRef
                        });
                    }
                }
                function onUpdate() {
                    if (xRef.current) {
                        H(xRef.current);
                    } else {
                        M();
                    }
                }
                n.useEffect(()=>{
                    if (!_) {
                        M();
                    }
                }, [
                    R
                ]);
                n.useEffect(()=>{
                    ORef.current && (collapsed && !_ ? r.default.to(ORef.current, {
                        width: 0,
                        duration: s.DURATION.medium,
                        ease: s.EASE,
                        onUpdate
                    }) : r.default.to(ORef.current, {
                        width: 53,
                        duration: s.DURATION.medium,
                        ease: s.EASE,
                        clearProps: "width",
                        onUpdate
                    }));
                }, [
                    collapsed,
                    _
                ]);
                let N = (e)=>{
                    if (l.hasTouchSupport()) {
                        return;
                    }
                    xRef.current = e.currentTarget;
                    if (ERef.current) {
                        ERef.current.style.transitionDuration = "";
                    }
                    let t = e.currentTarget.querySelector(".nav-item-hover");
                    t.style.transitionDuration = "0s";
                    ERef.current = t;
                    H(e.currentTarget);
                };
                let k = ()=>{
                    if (!l.hasTouchSupport() && xRef.current) {
                        xRef.current = null;
                    }
                };
                let A = ()=>{
                    if (!l.hasTouchSupport()) {
                        set_(true);
                    }
                };
                let I = ()=>{
                    if (!l.hasTouchSupport()) {
                        M();
                        set_(false);
                    }
                };
                let H = (item)=>{
                    if (P() === "default") {
                        h.showHover({
                            isHovered: _,
                            item,
                            moveHoverTo
                        });
                    } else {
                        d.showHover({
                            isHovered: _,
                            item,
                            moveHoverTo
                        });
                    }
                };
                function moveHoverTo(x, width, i = true) {
                    if (i) {
                        r.default.to(CRef.current, {
                            width,
                            x,
                            duration: s.DURATION.fast,
                            ease: s.EASE_OUT
                        });
                    } else {
                        r.default.set(CRef.current, {
                            x,
                            width
                        });
                    }
                }
                let mode_1 = P();
                return t.jsxs("nav", {
                    "aria-label": "Main navigation",
                    ref: SRef,
                    className: i.default("flex w-max", "p-0", className),
                    onMouseOver: A,
                    onMouseEnter: A,
                    onFocus: ()=>{},
                    onBlur: ()=>{
                        if (!_) {
                            I();
                        }
                    },
                    onMouseLeave: I,
                    ...rest,
                    children: [
                        t.jsx("div", {
                            className: i.default("nav-frame pointer-events-none absolute", "top-[-4px] left-[-4px] h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]")
                        }),
                        t.jsx("div", {
                            ref: CRef,
                            "aria-hidden": "true",
                            className: i.default("pointer-events-none absolute", "h-11 rounded-[12px] bg-white")
                        }),
                        logo && t.jsxs(useC, {
                            href: logoHref,
                            "aria-label": logoAriaLabel,
                            isHovered: _,
                            mode: mode_1,
                            onMouseEnter: N,
                            onMouseLeave: k,
                            onFocus: N,
                            onBlur: k,
                            children: [
                                t.jsx("span", {
                                    className: "ml-0",
                                    children: logoIcon
                                }),
                                t.jsx("span", {
                                    ref: ORef,
                                    className: i.default("inline-block w-[53px] overflow-hidden border-box"),
                                    children: logo
                                })
                            ]
                        }),
                        items.map((e)=>t.jsx(useC, {
                                active: e.active,
                                href: e.href,
                                "aria-label": e["aria-label"],
                                isHovered: _,
                                mode: mode_1,
                                onMouseEnter: N,
                                onMouseLeave: k,
                                onFocus: N,
                                onBlur: k,
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
    998304,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(300778);
        var r = e.i(513679);
        let OContext = r.createContext({
            stories: [],
            featuredStoryId: null,
            activeStoryId: null,
            openStory: ()=>{},
            closeStory: ()=>{},
            registerStories: ()=>{},
            getStories: ()=>null,
            registerArticle: ()=>{}
        });
        e.s([
            "StoriesProvider",
            0,
            ({ stories, featuredStoryId = null, children })=>{
                let l = i.usePathname();
                let a = i.useRouter();
                let uRef = r.useRef(null);
                let cRef = r.useRef(null);
                let h = l.startsWith("/stories/") && l.split("/")[2] || null;
                let [activeStoryId, setActiveStoryId] = r.useState(h);
                r.useEffect(()=>{
                    setActiveStoryId(h);
                    if (h) {
                        a.prefetch("/stories");
                    }
                }, [
                    h,
                    a
                ]);
                let registerStories = r.useCallback((e)=>{
                    uRef.current = e;
                }, []);
                let getStories = r.useCallback(()=>uRef.current, []);
                let registerArticle = r.useCallback((e)=>{
                    cRef.current = e;
                }, []);
                let openStory = r.useCallback((e)=>{
                    setActiveStoryId(e);
                    let t = `/stories/${e}`;
                    if (window.location.pathname !== t) {
                        a.push(t);
                    }
                }, [
                    a
                ]);
                let closeStory = r.useCallback(async ()=>{
                    await cRef.current?.leave();
                    if (window.location.pathname === "/stories") {
                        setActiveStoryId(null);
                    } else {
                        a.push("/stories");
                    }
                }, [
                    a
                ]);
                return t.jsx(OContext, {
                    value: {
                        stories,
                        featuredStoryId,
                        activeStoryId,
                        openStory,
                        closeStory,
                        registerStories,
                        getStories,
                        registerArticle
                    },
                    children
                });
            },
            "useStories",
            0,
            ()=>r.useContext(OContext)
        ]);
    },
    808761,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var i = e.i(775859);
        var r = e.i(628974);
        var o = e.i(998304);
        let n = {
            solid: r.cn("bg-surface-quaternary text-surface-tertiary transition-colors", "supports-hover:hover:bg-surface-button-secondary supports-hover:hover:text-black-900"),
            frosted: "frosted-interactive text-text-white"
        };
        e.s([
            "StoryCloseButton",
            0,
            ({ variant = "solid", className } = {})=>{
                let { closeStory } = o.useStories();
                return t.jsx("div", {
                    className: r.cn("fixed tablet:top-[3rem] top-0 right-0 tablet:right-[3rem] z-10 flex items-center", "pt-(--chrome-pad) pr-(--chrome-pad)", className),
                    children: t.jsx("button", {
                        type: "button",
                        "aria-label": "Close story",
                        onClick: closeStory,
                        className: r.cn("flex size-12.5 cursor-pointer items-center justify-center rounded-ctas-button px-2 outline-hidden", "border-2 border-transparent focus-visible:border-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", n[variant]),
                        children: t.jsx(i.CloseIcon, {
                            className: "size-5 -rotate-90"
                        })
                    })
                });
            }
        ]);
    },
    365280,
    (e)=>{
        "use strict";
        let t = new Set;
        let i = {
            anchor: null,
            scrub: 0,
            playerVisible: false,
            get pageVisible () {
                let i_anchor = i.anchor;
                if (!i_anchor) {
                    return true;
                }
                return i_anchor.width < window.innerWidth || i_anchor.height < window.innerHeight;
            },
            setScrub (e) {
                if (e !== i.scrub) {
                    i.scrub = e;
                    t.forEach((t)=>{
                        t(e);
                    });
                }
            },
            onScrub: (e)=>{
                t.add(e);
                e(i.scrub);
                return ()=>{
                    t.delete(e);
                };
            },
            reset () {
                i.anchor = null;
                i.playerVisible = false;
                i.setScrub(0);
            }
        };
        e.s([
            "storiesStore",
            0,
            i
        ]);
    },
    631923,
    (e)=>{
        "use strict";
        e.s([
            "DURATION",
            0,
            {
                fast: 0.3,
                medium: 0.6,
                slow: 1
            },
            "EASE",
            0,
            "power4.out",
            "EASE_IN_OUT",
            0,
            "expo.inOut",
            "EASE_OUT",
            0,
            "expo.out"
        ]);
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
    176418,
    (e)=>{
        "use strict";
        var t = e.i(513679);
        var i = e.i(983871);
        let r = typeof document !== "undefined" ? t.useLayoutEffect : t.useEffect;
        let o = (e)=>e && !Array.isArray(e) && typeof e === "object";
        let n = [];
        let s = {};
        let i_default = i.default;
        let useA = (e, i = n)=>{
            let a = s;
            if (o(e)) {
                a = e;
                e = null;
                i = "dependencies" in a ? a.dependencies : n;
            } else if (o(i)) {
                i = "dependencies" in (a = i) ? a.dependencies : n;
            }
            if (e && typeof e !== "function") {
                console.warn("First parameter must be a function or config object");
            }
            let { scope, revertOnUpdate } = a;
            let hRef = t.useRef(false);
            let dRef = t.useRef(i_default.context(()=>{}, scope));
            let pRef = t.useRef((e)=>dRef.current.add(null, e));
            let f = i && i.length && !revertOnUpdate;
            if (f) {
                r(()=>{
                    hRef.current = true;
                    return ()=>dRef.current.revert();
                }, n);
            }
            r(()=>{
                if (e) {
                    dRef.current.add(e, scope);
                }
                if (!f || !hRef.current) {
                    return ()=>dRef.current.revert();
                }
            }, i);
            return {
                context: dRef.current,
                contextSafe: pRef.current
            };
        };
        useA.register = (e)=>{
            i_default = e;
        };
        useA.headless = true;
        e.s([
            "useGSAP",
            0,
            useA
        ]);
    },
    464068,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        var r = {
            default () {
                return useV;
            },
            useLinkStatus () {
                return useB;
            }
        };
        for(var o in r){
            Object.defineProperty(i, o, {
                enumerable: true,
                get: r[o]
            });
        }
        let n = e.r(171266);
        let s = e.r(281889);
        let l = n._(e.r(513679));
        let a = e.r(737409);
        let u = e.r(516968);
        let c = e.r(81378);
        let h = e.r(478573);
        let d = e.r(155044);
        let p = e.r(909740);
        let f = e.r(480106);
        let m = e.r(743817);
        let g = e.r(888474);
        function useV(t) {
            let i;
            let r;
            let o;
            let n;
            let [optimisticIDLE_LINK_STATUS, setOptimisticIDLE_LINK_STATUS] = l.useOptimistic(f.IDLE_LINK_STATUS);
            let yRef = l.useRef(null);
            let { href, as, children, prefetch = null, passHref, replace, shallow, scroll, onClick, onMouseEnter, onTouchStart, legacyBehavior = false, onNavigate, transitionTypes, ref, unstable_dynamicOnHover, ...rest } = t;
            r = children;
            if (legacyBehavior && (typeof r === "string" || typeof r === "number")) {
                r = s.jsx("a", {
                    children: r
                });
            }
            let H = l.default.useContext(u.AppRouterContext);
            let D = prefetch !== false;
            let W = prefetch === false ? "none" : prefetch === true ? "full" : "auto";
            let B = W !== "none" ? W === "auto" ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR;
            let F = typeof (i = as || href) === "string" ? i : a.formatUrl(i);
            if (legacyBehavior) {
                if (r?.$$typeof === Symbol.for("react.lazy")) {
                    throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                        value: "E863",
                        enumerable: false,
                        configurable: true
                    });
                }
                o = l.default.Children.only(r);
            }
            let U = legacyBehavior ? o && typeof o === "object" && o.ref : ref;
            let V;
            let $ = l.default.useCallback((e)=>{
                if (H !== null) {
                    yRef.current = f.mountLinkInstance(e, F, H, B, D, setOptimisticIDLE_LINK_STATUS, V);
                }
                return ()=>{
                    if (yRef.current) {
                        f.unmountLinkForCurrentNavigation(yRef.current);
                        yRef.current = null;
                    }
                    f.unmountPrefetchableInstance(e);
                };
            }, [
                D,
                F,
                H,
                B,
                setOptimisticIDLE_LINK_STATUS,
                V
            ]);
            let q = {
                ref: c.useMergedRef($, U),
                onClick (t) {
                    if (!(legacyBehavior || typeof onClick !== "function")) {
                        onClick(t);
                    }
                    if (legacyBehavior && o.props && typeof o.props.onClick === "function") {
                        o.props.onClick(t);
                    }
                    if (!(!H || t.defaultPrevented)) {
                        ((t, i, r, o, n, s, a, u = "none")=>{
                            if (typeof window !== "undefined") {
                                let c;
                                let { nodeName } = t.currentTarget;
                                if (nodeName.toUpperCase() === "A" && ((c = t.currentTarget.getAttribute("target")) && c !== "_self" || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && t.nativeEvent.which === 2) || t.currentTarget.hasAttribute("download")) {
                                    return;
                                }
                                if (!m.isLocalURL(i)) {
                                    if (o) {
                                        t.preventDefault();
                                        location.replace(i);
                                    }
                                    return;
                                }
                                t.preventDefault();
                                if (s) {
                                    let e = false;
                                    s({
                                        preventDefault: ()=>{
                                            e = true;
                                        }
                                    });
                                    if (e) {
                                        return;
                                    }
                                }
                                let { dispatchNavigateAction } = e.r(913151);
                                l.default.startTransition(()=>{
                                    dispatchNavigateAction(i, o ? "replace" : "push", n === false ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, r.current, a, u);
                                });
                            }
                        })(t, F, yRef, replace, scroll, onNavigate, transitionTypes, W);
                    }
                },
                onMouseEnter (e) {
                    if (!(legacyBehavior || typeof onMouseEnter !== "function")) {
                        onMouseEnter(e);
                    }
                    if (legacyBehavior && o.props && typeof o.props.onMouseEnter === "function") {
                        o.props.onMouseEnter(e);
                    }
                    if (H && D) {
                        f.onNavigationIntent(e.currentTarget, unstable_dynamicOnHover === true);
                    }
                },
                onTouchStart (e) {
                    if (!(legacyBehavior || typeof onTouchStart !== "function")) {
                        onTouchStart(e);
                    }
                    if (legacyBehavior && o.props && typeof o.props.onTouchStart === "function") {
                        o.props.onTouchStart(e);
                    }
                    if (H && D) {
                        f.onNavigationIntent(e.currentTarget, unstable_dynamicOnHover === true);
                    }
                }
            };
            if (h.isAbsoluteUrl(F)) {
                q.href = F;
            } else if (!(legacyBehavior && !passHref && (o.type !== "a" || "href" in o.props))) {
                q.href = d.addBasePath(F);
            }
            n = legacyBehavior ? l.default.cloneElement(o, q) : s.jsx("a", {
                ...rest,
                ...q,
                children: r
            });
            return s.jsx(WContext.Provider, {
                value: optimisticIDLE_LINK_STATUS,
                children: n
            });
        }
        let WContext = l.createContext(f.IDLE_LINK_STATUS);
        let useB = ()=>l.useContext(WContext);
        if ((typeof i.default === "function" || typeof i.default === "object" && i.default !== null) && i.default.__esModule === undefined) {
            Object.defineProperty(i.default, "__esModule", {
                value: true
            });
            Object.assign(i.default, i);
            t.exports = i.default;
        }
    },
    665279,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "Image", {
            enumerable: true,
            get () {
                return S;
            }
        });
        let r = e.r(330053);
        let o = e.r(171266);
        let n = e.r(281889);
        let s = o._(e.r(513679));
        let l = r._(e.r(345078));
        let a = r._(e.r(111586));
        let u = e.r(18306);
        let c = e.r(433198);
        let h = e.r(453426);
        let d = e.r(239351);
        let p = r._(e.r(396674));
        let f = e.r(81378);
        let m = {
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
        function g(e, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, n, s) {
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
                            let r = false;
                            let o = false;
                            onLoadRef.current({
                                ...nativeEvent,
                                nativeEvent,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: ()=>r,
                                isPropagationStopped: ()=>o,
                                persist: ()=>{},
                                preventDefault: ()=>{
                                    r = true;
                                    nativeEvent.preventDefault();
                                },
                                stopPropagation: ()=>{
                                    o = true;
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
        function v(fetchPriority) {
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
        let b = s.forwardRef(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, j)=>{
            let TRef = s.useRef(false);
            let ORef = s.useRef(null);
            w(()=>{
                let { current } = TRef;
                let { current: current_1 } = ORef;
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
            let R = f.useMergedRef(j, ORef);
            return n.jsx("img", {
                ...rest,
                ...v(fetchPriority),
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
                ref: R,
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
        function y({ isAppRouter, imgAttributes }) {
            let i = {
                as: "image",
                imageSrcSet: imgAttributes.srcSet,
                imageSizes: imgAttributes.sizes,
                crossOrigin: imgAttributes.crossOrigin,
                referrerPolicy: imgAttributes.referrerPolicy,
                ...v(imgAttributes.fetchPriority)
            };
            if (isAppRouter && l.default.preload) {
                l.default.preload(imgAttributes.src, i);
                return null;
            }
            return n.jsx(a.default, {
                children: n.jsx("link", {
                    rel: "preload",
                    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
                    ...i
                }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
            });
        }
        let S = s.forwardRef((e, t)=>{
            let i = s.useContext(d.RouterContext);
            let r = s.useContext(h.ImageConfigContext);
            let imgConf = s.useMemo(()=>{
                let e = m || r || c.imageConfigDefault;
                let t = [
                    ...e.deviceSizes,
                    ...e.imageSizes
                ].sort((e, t)=>e - t);
                let i = e.deviceSizes.sort((e, t)=>e - t);
                let o = e.qualities?.sort((e, t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: i,
                    qualities: o,
                    localPatterns: typeof window === "undefined" ? r?.localPatterns : e.localPatterns
                };
            }, [
                r
            ]);
            let { onLoad, onLoadingComplete } = e;
            let fRef = s.useRef(onLoad);
            s.useEffect(()=>{
                fRef.current = onLoad;
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
                defaultLoader: p.default,
                imgConf,
                blurComplete,
                showAltText
            });
            return n.jsxs(n.Fragment, {
                children: [
                    n.jsx(b, {
                        ...props,
                        unoptimized: meta.unoptimized,
                        placeholder: meta.placeholder,
                        fill: meta.fill,
                        onLoadRef: fRef,
                        onLoadingCompleteRef: gRef,
                        setBlurComplete,
                        setShowAltText,
                        sizesInput: e.sizes,
                        ref: t
                    }),
                    meta.preload ? n.jsx(y, {
                        isAppRouter: !i,
                        imgAttributes: props
                    }) : null
                ]
            });
        });
        if ((typeof i.default === "function" || typeof i.default === "object" && i.default !== null) && i.default.__esModule === undefined) {
            Object.defineProperty(i.default, "__esModule", {
                value: true
            });
            Object.assign(i.default, i);
            t.exports = i.default;
        }
    },
    156044,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        var r = {
            bindSnapshot () {
                return u;
            },
            createAsyncLocalStorage () {
                return a;
            },
            createSnapshot () {
                return c;
            }
        };
        for(var o in r){
            Object.defineProperty(i, o, {
                enumerable: true,
                get: r[o]
            });
        }
        let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
            value: "E504",
            enumerable: false,
            configurable: true
        });
        class s {
            disable() {
                throw n;
            }
            getStore() {}
            run() {
                throw n;
            }
            exit() {
                throw n;
            }
            enterWith() {
                throw n;
            }
            static bind(e) {
                return e;
            }
        }
        let l = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
        function a() {
            if (l) {
                return new l;
            }
            return new s;
        }
        function u(e) {
            if (l) {
                return l.bind(e);
            }
            return s.bind(e);
        }
        function c() {
            if (l) {
                return l.snapshot();
            }
            return (e, ...t)=>e(...t);
        }
    },
    352091,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "workAsyncStorageInstance", {
            enumerable: true,
            get () {
                return r;
            }
        });
        let r = e.r(156044).createAsyncLocalStorage();
    },
    678816,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "workAsyncStorage", {
            enumerable: true,
            get () {
                return r.workAsyncStorageInstance;
            }
        });
        let r = e.r(352091);
    },
    156974,
    (e, t, i)=>{
        "use strict";
        function r(e, t) {
            let i = e || 75;
            if (t?.qualities?.length) {
                return t.qualities.reduce((acc, quality)=>{
                    if (Math.abs(quality - i) < Math.abs(acc - i)) {
                        return quality;
                    }
                    return acc;
                }, t.qualities[0]);
            }
            return i;
        }
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "findClosestQuality", {
            enumerable: true,
            get () {
                return r;
            }
        });
    },
    18306,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "getImgProps", {
            enumerable: true,
            get () {
                return u;
            }
        });
        let r = e.r(823971);
        let o = e.r(521222);
        let n = e.r(433198);
        let s = [
            "-moz-initial",
            "fill",
            "none",
            "scale-down",
            undefined
        ];
        function l(e) {
            return e.default !== undefined;
        }
        function a(e) {
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
        function u({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, M) {
            let z;
            let config;
            let blurWidth;
            let blurHeight;
            let { imgConf, showAltText, blurComplete, defaultLoader } = M;
            let B = imgConf || n.imageConfigDefault;
            if ("allSizes" in B) {
                config = B;
            } else {
                let e = [
                    ...B.deviceSizes,
                    ...B.imageSizes
                ].sort((e, t)=>e - t);
                let t = B.deviceSizes.sort((e, t)=>e - t);
                let i = B.qualities?.sort((e, t)=>e - t);
                config = {
                    ...B,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: i
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
            let U = "__next_img_default" in loader;
            if (U) {
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
                let i = {
                    responsive: "100vw",
                    fill: "100vw"
                }[layout];
                if (i && !sizes) {
                    sizes = i;
                }
            }
            let V = "";
            let $ = a(width);
            let q = a(height);
            if ((z = src) && typeof z === "object" && (l(z) || z.src !== undefined)) {
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
                V = t.src;
                if (!fill) {
                    if ($ || q) {
                        if ($ && !q) {
                            let e = $ / t.width;
                            q = Math.round(t.height * e);
                        } else if (!$ && q) {
                            let e = q / t.height;
                            $ = Math.round(t.width * e);
                        }
                    } else {
                        $ = t.width;
                        q = t.height;
                    }
                }
            }
            let X = !priority && !preload && (loading === "lazy" || loading === undefined);
            if (!(src = typeof src === "string" ? src : V) || src.startsWith("data:") || src.startsWith("blob:")) {
                unoptimized = true;
                X = false;
            }
            if (config.unoptimized) {
                unoptimized = true;
            }
            if (U && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
                unoptimized = true;
            }
            let quality_1 = a(quality);
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
            let backgroundImage = blurComplete || placeholder === "empty" ? null : placeholder === "blur" ? `url("data:image/svg+xml;charset=utf-8,${o.getImageBlurSvg({
                widthInt: $,
                heightInt: q,
                blurWidth,
                blurHeight,
                blurDataURL: blurDataURL || "",
                objectFit: Z.objectFit
            })}")` : `url("${placeholder}")`;
            let backgroundSize = s.includes(Z.objectFit) ? Z.objectFit === "fill" ? "100% 100%" : "cover" : Z.objectFit;
            let J = backgroundImage ? {
                backgroundSize,
                backgroundPosition: Z.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage
            } : {};
            let Q = (({ config, src, unoptimized, width, quality, sizes, loader })=>{
                if (unoptimized) {
                    if (src.startsWith("/") && !src.startsWith("//")) {
                        let e = r.getDeploymentId();
                        if (src.includes("/_next/static/immutable") && !r.getAssetToken()) {
                            e = undefined;
                        } else if (e) {
                            let i = src.indexOf("?");
                            if (-1 !== i) {
                                let r = new URLSearchParams(src.slice(i + 1));
                                if (!r.get("dpl")) {
                                    r.append("dpl", e);
                                    src = src.slice(0, i) + "?" + r.toString();
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
                let { widths, kind } = (({ deviceSizes, allSizes }, i, r)=>{
                    if (r) {
                        let i = /(^|\s)(1?\d?\d)vw/g;
                        let o = [];
                        for(let e; e = i.exec(r);){
                            o.push(parseInt(e[2]));
                        }
                        if (o.length) {
                            let i = 0.01 * Math.min(...o);
                            return {
                                widths: allSizes.filter((t)=>t >= deviceSizes[0] * i),
                                kind: "w"
                            };
                        }
                        return {
                            widths: allSizes,
                            kind: "w"
                        };
                    }
                    if (typeof i !== "number") {
                        return {
                            widths: deviceSizes,
                            kind: "w"
                        };
                    }
                    return {
                        widths: [
                            ...new Set([
                                i,
                                2 * i
                            ].map((e)=>allSizes.find((t)=>t >= e) || allSizes[allSizes.length - 1]))
                        ],
                        kind: "x"
                    };
                })(config, width, sizes);
                let c = widths.length - 1;
                return {
                    sizes: sizes || kind !== "w" ? sizes : "100vw",
                    srcSet: widths.map((i, r)=>`${loader({
                            config,
                            src,
                            quality,
                            width: i
                        })} ${kind === "w" ? i : r + 1}${kind}`).join(", "),
                    src: loader({
                        config,
                        src,
                        quality,
                        width: widths[c]
                    })
                };
            })({
                config,
                src,
                unoptimized,
                width: $,
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
                    width: $,
                    height: q,
                    decoding,
                    className,
                    style: {
                        ...Z,
                        ...J
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
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        var r = {
            default () {
                return useM;
            },
            defaultHead () {
                return h;
            }
        };
        for(var o in r){
            Object.defineProperty(i, o, {
                enumerable: true,
                get: r[o]
            });
        }
        let n = e.r(330053);
        let s = e.r(171266);
        let l = e.r(281889);
        let a = s._(e.r(513679));
        let u = n._(e.r(194094));
        let c = e.r(543091);
        function h() {
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
        function d(e, t) {
            if (typeof t === "string" || typeof t === "number") {
                return e;
            }
            if (t.type === a.default.Fragment) {
                return e.concat(a.default.Children.toArray(t.props.children).reduce((acc, item)=>{
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
            let i;
            let r;
            let o;
            return e.reduce(d, []).reverse().concat(h().reverse()).filter((t = new Set, i = new Set, r = new Set, o = {}, (e)=>{
                let n = true;
                let s = false;
                if (e.key && typeof e.key !== "number" && e.key.indexOf("$") > 0) {
                    s = true;
                    let i = e.key.slice(e.key.indexOf("$") + 1);
                    if (t.has(i)) {
                        n = false;
                    } else {
                        t.add(i);
                    }
                }
                switch(e.type){
                    case "title":
                    case "base":
                        if (i.has(e.type)) {
                            n = false;
                        } else {
                            i.add(e.type);
                        }
                        break;
                    case "meta":
                        for(let t = 0, i = p.length; t < i; t++){
                            let i = p[t];
                            if (e.props.hasOwnProperty(i)) {
                                if (i === "charSet") {
                                    if (r.has(i)) {
                                        n = false;
                                    } else {
                                        r.add(i);
                                    }
                                } else {
                                    let t = e.props[i];
                                    let r = o[i] || new Set;
                                    if ((i !== "name" || !s) && r.has(t)) {
                                        n = false;
                                    } else {
                                        r.add(t);
                                        o[i] = r;
                                    }
                                }
                            }
                        }
                }
                return n;
            })).reverse().map((e, t)=>{
                let key = e.key || t;
                return a.default.cloneElement(e, {
                    key
                });
            });
        }
        let useM = ({ children })=>{
            let headManager = a.useContext(c.HeadManagerContext);
            return l.jsx(u.default, {
                reduceComponentsToState,
                headManager,
                children
            });
        };
        if ((typeof i.default === "function" || typeof i.default === "object" && i.default !== null) && i.default.__esModule === undefined) {
            Object.defineProperty(i.default, "__esModule", {
                value: true
            });
            Object.assign(i.default, i);
            t.exports = i.default;
        }
    },
    521222,
    (e, t, i)=>{
        "use strict";
        function r({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
            let l = blurWidth ? 40 * blurWidth : widthInt;
            let a = blurHeight ? 40 * blurHeight : heightInt;
            let u = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
        }
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "getImageBlurSvg", {
            enumerable: true,
            get () {
                return r;
            }
        });
    },
    453426,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "ImageConfigContext", {
            enumerable: true,
            get () {
                return NContext;
            }
        });
        let r = e.r(330053)._(e.r(513679));
        let o = e.r(433198);
        let NContext = r.default.createContext(o.imageConfigDefault);
    },
    433198,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        var r = {
            VALID_LOADERS () {
                return n;
            },
            imageConfigDefault () {
                return s;
            }
        };
        for(var o in r){
            Object.defineProperty(i, o, {
                enumerable: true,
                get: r[o]
            });
        }
        let n = [
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
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        var r = {
            default () {
                return l_Image;
            },
            getImageProps () {
                return u;
            }
        };
        for(var o in r){
            Object.defineProperty(i, o, {
                enumerable: true,
                get: r[o]
            });
        }
        let n = e.r(330053);
        let s = e.r(18306);
        let l = e.r(665279);
        let a = n._(e.r(396674));
        function u(e) {
            let { props } = s.getImgProps(e, {
                defaultLoader: a.default,
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
            for (let [e, i] of Object.entries(props)){
                i === undefined && delete props[e];
            }
            return {
                props
            };
        }
        let l_Image = l.Image;
    },
    726215,
    (e, t, i)=>{
        t.exports = e.r(453792);
    },
    396674,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "default", {
            enumerable: true,
            get () {
                return s;
            }
        });
        let r = e.r(156974);
        let o = e.r(823971);
        function n({ config, src, width, quality }) {
            let l = o.getDeploymentId();
            if (src.startsWith("/") && !src.startsWith("//")) {
                if (src.includes("/_next/static/immutable") && !o.getAssetToken()) {
                    l = undefined;
                } else {
                    let e = src.indexOf("?");
                    if (-1 !== e) {
                        let i = new URLSearchParams(src.slice(e + 1));
                        let r = i.get("dpl");
                        if (r) {
                            l = r;
                            i.delete("dpl");
                            let o = i.toString();
                            src = src.slice(0, e) + (o ? "?" + o : "");
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
            let a = r.findClosestQuality(quality, config);
            return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${a}${src.startsWith("/") && l ? `&dpl=${l}` : ""}`;
        }
        n.__next_img_default = true;
        let s = n;
    },
    701459,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "BailoutToCSR", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let r = e.r(170307);
        function o({ reason, children }) {
            if (typeof window === "undefined") {
                throw Object.defineProperty(new r.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
            return children;
        }
    },
    798785,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "PreloadChunks", {
            enumerable: true,
            get () {
                return a;
            }
        });
        let r = e.r(281889);
        let o = e.r(345078);
        let n = e.r(678816);
        let s = e.r(758024);
        let l = e.r(823971);
        function a({ moduleIds }) {
            if (typeof window !== "undefined") {
                return null;
            }
            let t = n.workAsyncStorage.getStore();
            if (t === undefined) {
                return null;
            }
            let i = [];
            if (t.reactLoadableManifest && moduleIds) {
                let r = t.reactLoadableManifest;
                for (let t of moduleIds){
                    if (!r[t]) {
                        continue;
                    }
                    let e = r[t].files;
                    i.push(...e);
                }
            }
            if (i.length === 0) {
                return null;
            }
            let u = l.getAssetTokenQuery();
            return r.jsx(r.Fragment, {
                children: i.map((e)=>{
                    let href = `${t.assetPrefix}/_next/${s.encodeURIPath(e)}${u}`;
                    if (e.endsWith(".css")) {
                        return r.jsx("link", {
                            precedence: "dynamic",
                            href,
                            rel: "stylesheet",
                            as: "style",
                            nonce: t.nonce
                        }, e);
                    }
                    o.preload(href, {
                        as: "script",
                        fetchPriority: "low",
                        nonce: t.nonce
                    });
                    return null;
                })
            });
        }
    },
    815268,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "default", {
            enumerable: true,
            get () {
                return u;
            }
        });
        let r = e.r(281889);
        let o = e.r(513679);
        let n = e.r(701459);
        let s = e.r(798785);
        function l(e) {
            return {
                default: e && "default" in e ? e.default : e
            };
        }
        let a = {
            loader: ()=>Promise.resolve(l(()=>null)),
            loading: null,
            ssr: true
        };
        let u = (e)=>{
            let t = {
                ...a,
                ...e
            };
            let i = o.lazy(()=>t.loader().then(l));
            let t_loading = t.loading;
            function c(e) {
                let fallback = t_loading ? r.jsx(t_loading, {
                    isLoading: true,
                    pastDelay: true,
                    error: null
                }) : null;
                let a = !t.ssr || !!t.loading;
                let c = a ? o.Suspense : o.Fragment;
                let h = t.ssr ? r.jsxs(r.Fragment, {
                    children: [
                        typeof window === "undefined" ? r.jsx(s.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null,
                        r.jsx(i, {
                            ...e
                        })
                    ]
                }) : r.jsx(n.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: r.jsx(i, {
                        ...e
                    })
                });
                return r.jsx(c, {
                    ...a ? {
                        fallback
                    } : {},
                    children: h
                });
            }
            c.displayName = "LoadableComponent";
            return c;
        };
    },
    662576,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "default", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let r = e.r(330053)._(e.r(815268));
        function o(e, t) {
            let i = {};
            if (typeof e === "function") {
                i.loader = e;
            }
            let o = {
                ...i,
                ...t
            };
            return r.default({
                ...o,
                modules: o.loadableGenerated?.modules
            });
        }
        if ((typeof i.default === "function" || typeof i.default === "object" && i.default !== null) && i.default.__esModule === undefined) {
            Object.defineProperty(i.default, "__esModule", {
                value: true
            });
            Object.assign(i.default, i);
            t.exports = i.default;
        }
    },
    194094,
    (e, t, i)=>{
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        Object.defineProperty(i, "default", {
            enumerable: true,
            get () {
                return l;
            }
        });
        let r = e.r(513679);
        let o = typeof window === "undefined";
        let n = o ? ()=>{} : r.useLayoutEffect;
        let s = o ? ()=>{} : r.useEffect;
        function l(e) {
            let { headManager, reduceComponentsToState } = e;
            function l() {
                if (headManager && headManager.mountedInstances) {
                    let e = r.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
                    headManager.updateHead(reduceComponentsToState(e));
                }
            }
            if (o) {
                headManager?.mountedInstances?.add(e.children);
                l();
            }
            n(()=>{
                headManager?.mountedInstances?.add(e.children);
                return ()=>{
                    headManager?.mountedInstances?.delete(e.children);
                };
            });
            n(()=>{
                if (headManager) {
                    headManager._pendingUpdate = l;
                }
                return ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = l;
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
