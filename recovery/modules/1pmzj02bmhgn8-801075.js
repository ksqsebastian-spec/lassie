// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 801075.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(983871),
    r = e.i(607198),
    o = "1.3.23";
  function n(e, t, i) {
    return Math.max(e, Math.min(t, i));
  }
  var s = class {
      isRunning = !1;
      value = 0;
      from = 0;
      to = 0;
      currentTime = 0;
      lerp;
      duration;
      easing;
      onUpdate;
      advance(e) {
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
          this.currentTime += e;
          let i = n(0, this.currentTime / this.duration, 1),
            r = (t = i >= 1) ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * r;
        } else if (this.lerp) {
          var i, r, o, s;
          this.value = (i = this.value, r = this.to, o = 60 * this.lerp, (1 - (s = 1 - Math.exp(-o * e))) * i + s * r), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0);
        } else this.value = this.to, t = !0;
        t && this.stop(), this.onUpdate?.(this.value, t);
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(e, t, {
        lerp: i,
        duration: r,
        easing: o,
        onStart: n,
        onUpdate: s
      }) {
        this.from = this.value = e, this.to = t, this.lerp = i, this.duration = r, this.easing = o, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = s;
      }
    },
    l = class {
      width = 0;
      height = 0;
      scrollHeight = 0;
      scrollWidth = 0;
      debouncedResize;
      wrapperResizeObserver;
      contentResizeObserver;
      constructor(e, t, {
        autoResize: i = !0,
        debounce: r = 250
      } = {}) {
        this.wrapper = e, this.content = t, i && (this.debouncedResize = function (e, t) {
          let i;
          return function (...r) {
            clearTimeout(i), i = setTimeout(() => {
              i = void 0, e.apply(this, r);
            }, t);
          };
        }(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
      }
      destroy() {
        this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
      }
      resize = () => {
        this.onWrapperResize(), this.onContentResize();
      };
      onWrapperResize = () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      };
      onContentResize = () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      };
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height
        };
      }
    },
    a = class {
      events = {};
      emit(e, ...t) {
        let i = this.events[e] || [];
        for (let e = 0, r = i.length; e < r; e++) i[e]?.(...t);
      }
      on(e, t) {
        return this.events[e] ? this.events[e].push(t) : this.events[e] = [t], () => {
          this.events[e] = this.events[e]?.filter(e => t !== e);
        };
      }
      off(e, t) {
        this.events[e] = this.events[e]?.filter(e => t !== e);
      }
      destroy() {
        this.events = {};
      }
    };
  let u = 100 / 6,
    c = {
      passive: !1
    };
  function h(e, t) {
    return 1 === e ? u : 2 === e ? t : 1;
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
    emitter = new a();
    constructor(e, t = {
      wheelMultiplier: 1,
      touchMultiplier: 1
    }) {
      this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, c), this.element.addEventListener("touchstart", this.onTouchStart, c), this.element.addEventListener("touchmove", this.onTouchMove, c), this.element.addEventListener("touchend", this.onTouchEnd, c);
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, c), this.element.removeEventListener("touchstart", this.onTouchStart, c), this.element.removeEventListener("touchmove", this.onTouchMove, c), this.element.removeEventListener("touchend", this.onTouchEnd, c);
    }
    onTouchStart = e => {
      let {
        clientX: t,
        clientY: i
      } = e.targetTouches ? e.targetTouches[0] : e;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: e
      });
    };
    onTouchMove = e => {
      let {
          clientX: t,
          clientY: i
        } = e.targetTouches ? e.targetTouches[0] : e,
        r = -(t - this.touchStart.x) * this.options.touchMultiplier,
        o = -(i - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: r,
        y: o
      }, this.emitter.emit("scroll", {
        deltaX: r,
        deltaY: o,
        event: e
      });
    };
    onTouchEnd = e => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e
      });
    };
    onWheel = e => {
      let {
          deltaX: t,
          deltaY: i,
          deltaMode: r
        } = e,
        o = h(r, this.window.width),
        n = h(r, this.window.height);
      t *= o, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: i,
        event: e
      });
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  };
  let p = e => Math.min(1, 1.001 - 2 ** (-10 * e));
  var f = class {
      _isScrolling = !1;
      _isStopped = !1;
      _isLocked = !1;
      _preventNextNativeScrollEvent = !1;
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
      animate = new s();
      emitter = new a();
      dimensions;
      virtualScroll;
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: i = e,
        smoothWheel: r = !0,
        syncTouch: n = !1,
        syncTouchLerp: s = .075,
        touchInertiaExponent: a = 1.7,
        duration: u,
        easing: c,
        lerp: h = .1,
        infinite: f = !1,
        orientation: m = "vertical",
        gestureOrientation: g = "horizontal" === m ? "both" : "vertical",
        touchMultiplier: v = 1,
        wheelMultiplier: w = 1,
        autoResize: b = !0,
        prevent: y,
        virtualScroll: S,
        overscroll: C = !0,
        autoRaf: x = !1,
        anchors: E = !1,
        autoToggle: _ = !1,
        allowNestedScroll: L = !1,
        __experimental__naiveDimensions: j = !1,
        naiveDimensions: T = j,
        stopInertiaOnNavigate: O = !1
      } = {}) {
        window.lenisVersion = o, window.lenis || (window.lenis = {}), window.lenis.version = o, "horizontal" === m && (window.lenis.horizontal = !0), !0 === n && (window.lenis.touch = !0), e && e !== document.documentElement || (e = window), "number" == typeof u && "function" != typeof c ? c = p : "function" == typeof c && "number" != typeof u && (u = 1), this.options = {
          wrapper: e,
          content: t,
          eventsTarget: i,
          smoothWheel: r,
          syncTouch: n,
          syncTouchLerp: s,
          touchInertiaExponent: a,
          duration: u,
          easing: c,
          lerp: h,
          infinite: f,
          gestureOrientation: g,
          orientation: m,
          touchMultiplier: v,
          wheelMultiplier: w,
          autoResize: b,
          prevent: y,
          virtualScroll: S,
          overscroll: C,
          autoRaf: x,
          anchors: E,
          autoToggle: _,
          allowNestedScroll: L,
          naiveDimensions: T,
          stopInertiaOnNavigate: O
        }, this.dimensions = new l(e, t, {
          autoResize: b
        }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
          capture: !0
        }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new d(i, {
          touchMultiplier: v,
          wheelMultiplier: w
        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
          capture: !0
        }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      off(e, t) {
        return this.emitter.off(e, t);
      }
      onScrollEnd = e => {
        e instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || e.stopPropagation();
      };
      dispatchScrollendEvent = () => {
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
          bubbles: this.options.wrapper === window,
          detail: {
            lenisScrollEnd: !0
          }
        }));
      };
      get overflow() {
        let e = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[e];
      }
      checkOverflow() {
        ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
      }
      onTransitionEnd = e => {
        e.propertyName?.includes("overflow") && e.target === this.rootElement && this.checkOverflow();
      };
      setScroll(e) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
          left: e,
          behavior: "instant"
        }) : this.options.wrapper.scrollTo({
          top: e,
          behavior: "instant"
        });
      }
      onClick = e => {
        let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.href).map(e => new URL(e.href)),
          i = new URL(window.location.href);
        if (this.options.anchors) {
          let e = t.find(e => i.host === e.host && i.pathname === e.pathname && e.hash);
          if (e) {
            let t = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
              i = `#${e.hash.split("#")[1]}`;
            this.scrollTo(i, t);
            return;
          }
        }
        if (this.options.stopInertiaOnNavigate && t.some(e => i.host === e.host && i.pathname !== e.pathname)) return void this.reset();
      };
      onPointerDown = e => {
        1 === e.button && this.reset();
      };
      onVirtualScroll = e => {
        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e)) return;
        let {
          deltaX: t,
          deltaY: i,
          event: r
        } = e;
        if (this.emitter.emit("virtual-scroll", {
          deltaX: t,
          deltaY: i,
          event: r
        }), r.ctrlKey || r.lenisStopPropagation) return;
        let o = r.type.includes("touch"),
          n = r.type.includes("wheel");
        this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
        let s = 0 === t && 0 === i;
        if (this.options.syncTouch && o && "touchstart" === r.type && s && !this.isStopped && !this.isLocked) return void this.reset();
        let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === t;
        if (s || l) return;
        let a = r.composedPath();
        a = a.slice(0, a.indexOf(this.rootElement));
        let u = this.options.prevent,
          c = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
        if (a.find(e => e instanceof HTMLElement && ("function" == typeof u && u?.(e) || e.hasAttribute?.("data-lenis-prevent") || "vertical" === c && e.hasAttribute?.("data-lenis-prevent-vertical") || "horizontal" === c && e.hasAttribute?.("data-lenis-prevent-horizontal") || o && e.hasAttribute?.("data-lenis-prevent-touch") || n && e.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(e, {
          deltaX: t,
          deltaY: i
        })))) return;
        if (this.isStopped || this.isLocked) {
          r.cancelable && r.preventDefault();
          return;
        }
        if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) {
          this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
          return;
        }
        let h = i;
        "both" === this.options.gestureOrientation ? h = Math.abs(i) > Math.abs(t) ? i : t : "horizontal" === this.options.gestureOrientation && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
        let d = o && this.options.syncTouch,
          p = o && "touchend" === r.type;
        p && (h = Math.sign(h) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
          programmatic: !1,
          ...(d ? {
            lerp: p ? this.options.syncTouchLerp : 1
          } : {
            lerp: this.options.lerp,
            duration: this.options.duration,
            easing: this.options.easing
          })
        });
      };
      resize() {
        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      onNativeScroll = () => {
        if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
          this._preventNextNativeScrollEvent = !1;
          return;
        }
        if (!1 === this.isScrolling || "native" === this.isScrolling) {
          let e = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
          }, 400));
        }
      };
      reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
      }
      start() {
        if (this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
          this.internalStart();
        }
      }
      internalStart() {
        this.isStopped && (this.reset(), this.isStopped = !1, this.emit());
      }
      stop() {
        if (!this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
          this.internalStop();
        }
      }
      internalStop() {
        this.isStopped || (this.reset(), this.isStopped = !0, this.emit());
      }
      raf = e => {
        let t = e - (this.time || e);
        this.time = e, this.animate.advance(.001 * t), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
      };
      scrollTo(e, {
        offset: t = 0,
        immediate: i = !1,
        lock: r = !1,
        programmatic: o = !0,
        lerp: s = o ? this.options.lerp : void 0,
        duration: l = o ? this.options.duration : void 0,
        easing: a = o ? this.options.easing : void 0,
        onStart: u,
        onComplete: c,
        force: h = !1,
        userData: d
      } = {}) {
        if ((this.isStopped || this.isLocked) && !h) return;
        let f = e,
          m = t;
        if ("string" == typeof f && ["top", "left", "start", "#"].includes(f)) f = 0;else if ("string" == typeof f && ["bottom", "right", "end"].includes(f)) f = this.limit;else {
          let e = null;
          if ("string" == typeof f ? (e = document.querySelector(f)) || ("#top" === f ? f = 0 : console.warn("Lenis: Target not found", f)) : f instanceof HTMLElement && f?.nodeType && (e = f), e) {
            if (this.options.wrapper !== window) {
              let e = this.rootElement.getBoundingClientRect();
              m -= this.isHorizontal ? e.left : e.top;
            }
            let t = e.getBoundingClientRect(),
              i = getComputedStyle(e),
              r = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
              o = getComputedStyle(this.rootElement),
              n = this.isHorizontal ? Number.parseFloat(o.scrollPaddingLeft) : Number.parseFloat(o.scrollPaddingTop);
            f = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(n) ? 0 : n);
          }
        }
        if ("number" == typeof f) {
          if (f += m, this.options.infinite) {
            if (o) {
              this.targetScroll = this.animatedScroll = this.scroll;
              let e = f - this.animatedScroll;
              e > this.limit / 2 ? f -= this.limit : e < -this.limit / 2 && (f += this.limit);
            }
          } else f = n(0, f, this.limit);
          if (f === this.targetScroll) {
            u?.(this), c?.(this);
            return;
          }
          if (this.userData = d ?? {}, i) {
            this.animatedScroll = this.targetScroll = f, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            });
            return;
          }
          o || (this.targetScroll = f), "number" == typeof l && "function" != typeof a ? a = p : "function" == typeof a && "number" != typeof l && (l = 1), this.animate.fromTo(this.animatedScroll, f, {
            duration: l,
            easing: a,
            lerp: s,
            onStart: () => {
              r && (this.isLocked = !0), this.isScrolling = "smooth", u?.(this);
            },
            onUpdate: (e, t) => {
              this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), o && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
                this.dispatchScrollendEvent();
              }), this.preventNextNativeScrollEvent());
            }
          });
        }
      }
      preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1;
        });
      }
      hasNestedScroll(e, {
        deltaX: t,
        deltaY: i
      }) {
        let r,
          o,
          n,
          s,
          l,
          a,
          u,
          c,
          h,
          d,
          p,
          f,
          m,
          g,
          v,
          w,
          b = Date.now();
        e._lenis || (e._lenis = {});
        let y = e._lenis;
        if (b - (y.time ?? 0) > 2e3) {
          y.time = Date.now();
          let t = window.getComputedStyle(e);
          if (y.computedStyle = t, r = ["auto", "overlay", "scroll"].includes(t.overflowX), o = ["auto", "overlay", "scroll"].includes(t.overflowY), l = ["auto"].includes(t.overscrollBehaviorX), a = ["auto"].includes(t.overscrollBehaviorY), y.hasOverflowX = r, y.hasOverflowY = o, !(r || o)) return !1;
          u = e.scrollWidth, c = e.scrollHeight, h = e.clientWidth, d = e.clientHeight, n = u > h, s = c > d, y.isScrollableX = n, y.isScrollableY = s, y.scrollWidth = u, y.scrollHeight = c, y.clientWidth = h, y.clientHeight = d, y.hasOverscrollBehaviorX = l, y.hasOverscrollBehaviorY = a;
        } else n = y.isScrollableX, s = y.isScrollableY, r = y.hasOverflowX, o = y.hasOverflowY, u = y.scrollWidth, c = y.scrollHeight, h = y.clientWidth, d = y.clientHeight, l = y.hasOverscrollBehaviorX, a = y.hasOverscrollBehaviorY;
        if (!(r && n || o && s)) return !1;
        let S = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
        if ("horizontal" === S) p = Math.round(e.scrollLeft), f = u - h, m = t, g = r, v = n, w = l;else {
          if ("vertical" !== S) return !1;
          p = Math.round(e.scrollTop), f = c - d, m = i, g = o, v = s, w = a;
        }
        return !w && (p >= f || p <= 0) || (m > 0 ? p < f : p > 0) && g && v;
      }
      get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
      }
      get limit() {
        return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        let e = this.options.wrapper;
        return this.isHorizontal ? e.scrollX ?? e.scrollLeft : e.scrollY ?? e.scrollTop;
      }
      get scroll() {
        var e;
        return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(e) {
        this._isScrolling !== e && (this._isScrolling = e, this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(e) {
        this._isStopped !== e && (this._isStopped = e, this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(e) {
        this._isLocked !== e && (this._isLocked = e, this.updateClassName());
      }
      get isSmooth() {
        return "smooth" === this.isScrolling;
      }
      get className() {
        let e = "lenis";
        return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), "smooth" === this.isScrolling && (e += " lenis-smooth"), e;
      }
      updateClassName() {
        this.cleanUpClassName(), this.className.split(" ").forEach(e => {
          this.rootElement.classList.add(e);
        });
      }
      cleanUpClassName() {
        for (let e of Array.from(this.rootElement.classList)) ("lenis" === e || e.startsWith("lenis-")) && this.rootElement.classList.remove(e);
      }
    },
    m = e.i(513679);
  i.default.registerPlugin(r.ScrollTrigger);
  let g = (0, m.createContext)(null);
  e.s(["SmoothScroll", 0, function ({
    children: e
  }) {
    let o = (0, m.useRef)(null),
      [n, s] = (0, m.useState)(null);
    return (0, m.useEffect)(() => {
      if (!o.current) return;
      let e = new f({
        lerp: .2
      });
      s(e);
      let t = 0,
        n = () => {
          cancelAnimationFrame(t), t = requestAnimationFrame(() => {
            e.resize(), r.ScrollTrigger.refresh();
          });
        };
      n(), e.on("scroll", r.ScrollTrigger.update), r.ScrollTrigger.config({
        ignoreMobileResize: !0
      });
      let l = t => {
        e.raf(1e3 * t);
      };
      i.default.ticker.add(l), i.default.ticker.lagSmoothing(0);
      let a = t => {
        t.detail?.locked ? e.stop() : e.start();
      };
      window.addEventListener("modal-lock", a), window.addEventListener("load", n);
      let u = o.current.querySelector("main"),
        c = "u" > typeof ResizeObserver && u ? new ResizeObserver(n) : null;
      return u && c && c.observe(u), () => {
        cancelAnimationFrame(t), window.removeEventListener("modal-lock", a), i.default.ticker.remove(l), window.removeEventListener("load", n), c?.disconnect(), e.destroy(), s(null);
      };
    }, []), (0, t.jsx)(g, {
      value: n,
      children: (0, t.jsx)("div", {
        ref: o,
        children: e
      })
    });
  }, "useSmoothScroll", 0, () => (0, m.useContext)(g)], 801075);
};
