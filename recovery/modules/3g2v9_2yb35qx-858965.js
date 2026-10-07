// Recovered from 3g2v9_2yb35qx.js. Runtime module IDs: 858965.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(513679),
    s = e.i(990055),
    r = e.i(628974);
  e.i(428044);
  var n = e.i(276522),
    o = e.i(983871),
    a = e.i(6590),
    l = e.i(365280),
    h = e.i(625400),
    d = e.i(631923),
    c = e.i(393763),
    u = e.i(120979);
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
    handlers = new Map();
    removeScrolling;
    scroll = 0;
    drag = null;
    dragMoved = !1;
    transitionIn(e) {
      return (this.measure(), e) ? this.enterStrip() : this.intro();
    }
    transitionOut(e) {
      this.removeEvents();
    }
    measure() {
      let e = 195;
      window.innerWidth >= 744 && (e = 280), window.innerWidth >= s.BREAKPOINTS.desktop && (e = 361), this.card.width = e, this.card.height = .562 * e, this.card.gap = window.innerWidth < 768 ? 8 : 12, this.viewport = {
        x: window.innerWidth / 2 - e / 2,
        width: e
      }, this.container.width = e * this.items.length;
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
    intro = () => {
      this.scroll = this.stories.activeIndex, this.resize();
      let e = this.stories.activeIndex,
        t = o.default.timeline({});
      return t.add(this.introActive(this.stories.activeItem), 0), this.items.forEach((i, s) => {
        if (s === e) return;
        let r = Math.abs(s - e);
        t.add(this.introInactive(i), 1 + .1 * r);
      }), t.add(this.stories.background.intro(this.stories.activeStory), 1), t.call(this.stories.headline.intro, [this.stories.activeStory], 1.4), t.call(() => {
        this.goto(e), this.addEvents();
      }, [], 3), t;
    };
    introActive(e) {
      e.opacity = 1, e.maskRadius = a.StoryItem.MASK_RADIUS;
      let {
          width: t,
          height: i
        } = this.card,
        s = o.default.timeline({});
      return s.fromTo(e.mask, {
        clipPath: (0, a.MASK_CLIP)(a.StoryItem.MASK_RADIUS, "30% 50% 30% 50%")
      }, {
        clipPath: (0, a.MASK_CLIP)(a.StoryItem.MASK_RADIUS),
        duration: 2 * d.DURATION.slow,
        ease: d.EASE_IN_OUT
      }), s.fromTo([e.duration, e.location], {
        opacity: 0
      }, {
        opacity: 1,
        duration: d.DURATION.fast,
        clearProps: "opacity"
      }, .7), s.fromTo(e.duration, {
        x: t / 2,
        y: .3 * i - 15
      }, {
        x: 0,
        y: 0,
        duration: 2 * d.DURATION.slow,
        ease: d.EASE_IN_OUT
      }, 0), s.fromTo(e.location, {
        x: t / 2,
        y: -(.3 * i) + 15
      }, {
        x: 0,
        y: 0,
        duration: 2 * d.DURATION.slow,
        ease: d.EASE_IN_OUT
      }, 0), s;
    }
    introInactive(e) {
      let t = o.default.timeline({}),
        i = e.index < this.stories.activeIndex ? "50%" : "-50%";
      return t.fromTo(e.el, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 2 * d.DURATION.slow,
        ease: d.EASE_OUT
      }), t.fromTo(e.wrapper, {
        x: i
      }, {
        x: "0%",
        duration: 2 * d.DURATION.slow,
        ease: d.EASE_OUT
      }, 0), o.default.set(e.mask, {
        clipPath: (0, a.MASK_CLIP)(a.StoryItem.MASK_RADIUS)
      }), e.maskRadius = a.StoryItem.MASK_RADIUS, t;
    }
    enterStrip = () => {
      let e = this.stories.activeItem,
        t = l.storiesStore.anchor,
        i = o.default.timeline({});
      this.scroll = this.parkIndex(e.index);
      let s = this.layout(!1);
      return e.opacity = 1, i.to(this.parked.map(e => e.el), {
        opacity: 1,
        duration: d.DURATION.medium,
        ease: d.EASE_OUT
      }, 0), t && (e.setSize(t.width, t.height, !1), this.moveItem(e, t.x, t.y, !1), i.to(e.el, {
        width: s.width,
        height: s.height,
        duration: d.DURATION.slow,
        ease: d.EASE_IN_OUT,
        overwrite: "auto"
      }, 0), i.to(e, {
        x: s.x,
        y: s.y,
        duration: d.DURATION.slow,
        ease: d.EASE_IN_OUT,
        overwrite: !0
      }, 0), e.size = {
        width: s.width,
        height: s.height
      }), i.fromTo(e.mask, {
        clipPath: (0, a.MASK_CLIP)(t?.radius ?? e.maskRadius)
      }, {
        clipPath: (0, a.MASK_CLIP)(a.StoryItem.MASK_RADIUS),
        duration: d.DURATION.fast,
        ease: d.EASE_IN_OUT,
        overwrite: !0
      }, 0), e.maskRadius = a.StoryItem.MASK_RADIUS, i.to([e.duration, e.location], {
        opacity: 1,
        duration: d.DURATION.fast,
        clearProps: "opacity"
      }, 0), this.stories.headline.setStory(e.data), this.stories.background.setStory(e.data), i.call(this.resume, [], d.DURATION.slow), i;
    };
    resume = () => {
      this.addEvents(), this.focusActive();
    };
    goto = (e, t = !0) => {
      let i = this.stories.setActiveIndex(e);
      this.scroll = this.parkIndex(i), this.highlight(this.items[i], t);
    };
    highlight = (e, t = !0) => {
      this.stories.setActiveIndex(e.index), this.layout(t), this.stories.headline.setStory(e.data), this.stories.background.setStory(e.data);
    };
    next = () => {
      this.goto(this.scroll + 1);
    };
    prev = () => {
      this.goto(this.scroll - 1);
    };
    layout = (e = !0) => {
      let t = this.stories.activeItem;
      return this.items.forEach(e => {
        e !== t && (e.setActive(!1), e.pauseVideo(), e.zIndex = "");
      }), t.setActive(!0), t.playVideo(), t.zIndex = "1", this.place(e);
    };
    place = e => {
      let t = this.stories.activeItem,
        {
          width: i,
          height: s
        } = this.card,
        r = this.growth,
        n = this.focusMargin;
      this.container.x = this.isScrollable() ? this.viewport.x - this.viewport.width * this.scroll : (window.innerWidth - this.container.width) / 2, this.items.forEach((r, o) => {
        if (r === t) return;
        r.setSize(i, s, e);
        let a = 0;
        o < t.index && (a = -n), o > t.index && (a = n), this.moveItem(r, this.container.x + i * o + a, window.innerHeight / 2 - s / 2, e);
      });
      let o = {
        x: this.container.x + i * t.index - r.x,
        y: window.innerHeight / 2 - s / 2 - r.y,
        width: 1.4 * i,
        height: 1.4 * s
      };
      return t.setSize(o.width, o.height, e), this.moveItem(t, o.x, o.y, e), l.storiesStore.anchor = o, o;
    };
    moveItem = (e, t, i, s) => {
      s ? o.default.to(e, {
        x: t,
        y: i,
        duration: d.DURATION.slow,
        ease: d.EASE_OUT,
        overwrite: !0
      }) : (o.default.killTweensOf(e), e.x = t, e.y = i);
    };
    parkIndex(e) {
      return this.isScrollable() ? e : Math.floor(this.items.length / 2);
    }
    resize = () => {
      this.measure(), this.scroll = this.parkIndex(this.scroll), this.layout(this.stories.isTransitioning);
    };
    isScrollable() {
      return window.innerWidth < this.container.width;
    }
    addEvents = () => {
      this.removeEvents(), this.items.forEach(e => {
        let t = {
          enter: t => this.onItemEnter(e, t),
          focus: () => this.onItemFocus(e),
          click: t => this.onItemClick(e, t)
        };
        this.handlers.set(e, t), e.el.addEventListener("pointerenter", t.enter), e.el.addEventListener("focus", t.focus), e.el.addEventListener("click", t.click);
      }), this.stories.track.addEventListener("pointerdown", this.onPointerDown), this.removeScrolling = function ({
        onNext: e,
        onPrev: t
      }) {
        let i = 0,
          s = new c.default({
            mouseMultiplier: .25,
            useTouch: !1
          });
        return s.on(function (s) {
          let r = Math.trunc((i += Math.abs(s.deltaX) > Math.abs(s.deltaY) ? s.deltaX : s.deltaY) / 100);
          if (0 !== r) {
            i -= 100 * r;
            for (let i = 0; i < Math.abs(r); i++) r > 0 ? t() : e();
          }
        }), () => {
          s.destroy();
        };
      }({
        onNext: this.onScrollNext,
        onPrev: this.onScrollPrev
      });
    };
    removeEvents = () => {
      this.handlers.forEach((e, t) => {
        t.el.removeEventListener("pointerenter", e.enter), t.el.removeEventListener("focus", e.focus), t.el.removeEventListener("click", e.click);
      }), this.handlers.clear(), this.stories.track.removeEventListener("pointerdown", this.onPointerDown), this.removeDragEvents(), this.removeScrolling?.(), this.removeScrolling = void 0;
    };
    onItemEnter = (e, t) => {
      "mouse" !== t.pointerType || this.drag || this.highlight(e);
    };
    onItemFocus = e => {
      e === this.stories.activeItem || e.el.matches(":focus-visible") && this.goto(e.index);
    };
    focusActive = () => {
      let e = document.activeElement;
      (!e || e === document.body || this.stories.track.contains(e)) && this.stories.activeItem.el.focus({
        preventScroll: !0
      });
    };
    onItemClick = (e, t) => {
      this.dragMoved && t.detail > 0 || !0 === e.data.enabled && (this.stories.setActiveIndex(e.index), this.stories.goto("fullscreen"));
    };
    onScrollNext = () => {
      !this.drag && this.isScrollable() && this.next();
    };
    onScrollPrev = () => {
      !this.drag && this.isScrollable() && this.prev();
    };
    onPointerDown = e => {
      !this.drag && 0 === e.button && this.isScrollable() && (this.dragMoved = !1, this.drag = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startScroll: this.scroll,
        lastX: e.clientX,
        lastTime: e.timeStamp,
        velocity: 0
      }, this.items.forEach(e => {
        o.default.killTweensOf(e);
      }), window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerup", this.onPointerEnd), window.addEventListener("pointercancel", this.onPointerEnd));
    };
    onPointerMove = e => {
      let t = this.drag;
      if (!t || e.pointerId !== t.pointerId) return;
      let i = e.timeStamp - t.lastTime;
      i > 0 && (t.velocity = (e.clientX - t.lastX) / i), t.lastX = e.clientX, t.lastTime = e.timeStamp, Math.abs(e.clientX - t.startX) > 6 && (this.dragMoved = !0), this.scroll = o.default.utils.clamp(0, this.items.length - 1, t.startScroll - (e.clientX - t.startX) / this.card.width), this.place(!1);
    };
    onPointerEnd = e => {
      let t = this.drag;
      if (!t || e.pointerId !== t.pointerId) return;
      this.removeDragEvents(), this.drag = null;
      let i = e.timeStamp - t.lastTime > 150 ? 0 : t.velocity;
      this.goto(Math.round(this.scroll - 150 * i / this.card.width));
    };
    removeDragEvents = () => {
      window.removeEventListener("pointermove", this.onPointerMove), window.removeEventListener("pointerup", this.onPointerEnd), window.removeEventListener("pointercancel", this.onPointerEnd);
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
    constructor({
      wrapper: e,
      track: t,
      overlay: i,
      headline: s,
      background: r,
      stories: n,
      startIndex: o = 1,
      onOpen: l,
      onClose: d
    }) {
      this.wrapper = e, this.track = t, this.overlay = i, this.headline = s, this.background = r, this.onOpen = l, this.onClose = d, this.items = Array.from(t.querySelectorAll("[data-story-item]")).map((e, t) => new a.StoryItem(e, n[t], t)), this.activeIndex = 0, this.setActiveIndex(o), this.views = {
        index: new p(this),
        fullscreen: new h.StoriesFullscreenView(this)
      }, window.addEventListener("resize", this.resize);
    }
    get activeItem() {
      return this.items[this.activeIndex];
    }
    get activeStory() {
      return this.activeItem.data;
    }
    get isTransitioning() {
      return null !== this.running;
    }
    setActiveIndex(e) {
      return this.activeIndex = Math.min(Math.max(e, 0), this.items.length - 1), this.activeIndex;
    }
    init(e = "index") {
      return this.goto(e);
    }
    showStory = e => {
      let t = this.items.find(t => t.data.id === e);
      if (t) return this.setActiveIndex(t.index), this.goto("fullscreen");
    };
    goto = e => (this.pendingView = e, e !== this.currentView && this.running?.progress(1), this.queue = this.queue.then(async () => {
      if (e === this.currentView) return;
      let t = this.currentView;
      t && (await this.views[t].transitionOut(e)), this.currentView = e;
      let i = this.views[e].transitionIn(t);
      this.running = i instanceof o.default.core.Timeline ? i : null, e !== this.pendingView && this.running?.progress(1), await i, this.running = null;
    }).catch(t => {
      console.error(`[Stories] transition to "${e}" failed`, t);
    }), this.queue);
    resize = () => {
      this.currentView && this.views[this.currentView].resize();
    };
    destroy = () => {
      window.removeEventListener("resize", this.resize), l.storiesStore.reset(), Object.values(this.views).forEach(e => {
        e.destroy();
      }), this.items.forEach(e => {
        e.destroy();
      }), this.currentView = null;
    };
  }
  var f = e.i(998304);
  let m = "absolute inset-0 h-full w-full object-cover opacity-0";
  function w({
    ref: e
  }) {
    let s = (0, i.useRef)(null),
      r = (0, i.useRef)(null),
      n = (0, i.useRef)(null),
      a = (0, i.useRef)(null);
    return (0, i.useLayoutEffect)(() => {
      var e, t;
      let i, s, l, h, c;
      if (!r.current || !n.current) return;
      let u = (e = r.current, t = n.current, i = e, s = null, l = 0, h = 0, {
        show: c = r => {
          window.clearTimeout(h), s = r;
          let n = i,
            a = i === e ? t : e,
            c = ++l,
            u = () => {
              c === l && (i = a, o.default.to(a, {
                opacity: 1,
                duration: d.DURATION.medium,
                ease: d.EASE_OUT,
                overwrite: !0
              }), o.default.to(n, {
                opacity: 0,
                duration: d.DURATION.medium,
                ease: d.EASE_OUT,
                overwrite: !0,
                onComplete: () => n.pause()
              }));
            };
          a.src !== r && (a.src = r), a.play().catch(() => {}), a.readyState >= a.HAVE_CURRENT_DATA ? u() : a.addEventListener("loadeddata", u, {
            once: !0
          });
        },
        settle: e => {
          e !== s && (s = e, window.clearTimeout(h), h = window.setTimeout(() => c(e), 150));
        },
        destroy: () => {
          window.clearTimeout(h), o.default.killTweensOf([e, t]);
        }
      });
      return a.current = u, () => {
        a.current = null, u.destroy();
      };
    }, []), (0, i.useImperativeHandle)(e, () => ({
      setStory: e => a.current?.settle(e.backgroundVideoSrc),
      intro: e => (a.current?.show(e.backgroundVideoSrc), o.default.fromTo(s.current, {
        opacity: 0,
        filter: "blur(10px)"
      }, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 3
      }))
    })), (0, t.jsx)("div", {
      className: "h-dvh w-screen bg-black",
      children: (0, t.jsxs)("div", {
        ref: s,
        className: "relative h-dvh w-screen opacity-0",
        children: [(0, t.jsx)("video", {
          ref: r,
          className: m,
          muted: !0,
          loop: !0,
          playsInline: !0
        }), (0, t.jsx)("video", {
          ref: n,
          className: m,
          muted: !0,
          loop: !0,
          playsInline: !0
        }), (0, t.jsx)("span", {
          className: "absolute top-0 left-0 h-dvh w-screen bg-black/20"
        })]
      })
    });
  }
  var y = e.i(726215);
  function g({
    story: e,
    index: i
  }) {
    let s = !0 === e.enabled;
    return (0, t.jsx)("button", {
      "data-story-item": !0,
      "data-index": i,
      "data-active": "false",
      "data-playing": "false",
      type: "button",
      "aria-disabled": !s || void 0,
      "aria-label": s ? `Play story: ${e.title}` : e.title,
      className: (0, r.cn)("group pointer-events-auto absolute cursor-pointer touch-pan-y select-none opacity-0 outline-hidden will-change-transform", "w-xs md:w-xs xl:w-xl", !s && "cursor-default"),
      children: (0, t.jsxs)("div", {
        "data-story-wrapper": !0,
        className: "relative flex h-full w-full flex-col items-start",
        children: [(0, t.jsx)("span", {
          "data-story-duration": !0,
          className: (0, r.cn)("absolute top-0 flex items-center gap-3 text-label-sm text-text-invert-primary", "opacity-70 group-data-[active=true]:opacity-100"),
          children: (0, t.jsxs)("span", {
            className: "flex -translate-y-[calc(100%+8px)] items-center justify-center",
            children: [(0, t.jsxs)("svg", {
              className: "invisible w-0 opacity-0",
              width: "7",
              height: "7",
              viewBox: "0 0 7 7",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, t.jsx)("title", {
                children: "Recording"
              }), (0, t.jsx)("circle", {
                cx: "3.1875",
                cy: "3.1875",
                r: "3.1875",
                fill: "white"
              })]
            }), (0, t.jsx)("span", {
              "data-story-duration-label": !0,
              className: "tabular-nums",
              children: e.duration
            })]
          })
        }), (0, t.jsxs)("span", {
          "data-story-frame": !0,
          className: "relative h-full w-full will-change-transform",
          children: [(0, t.jsxs)("span", {
            "data-story-mask": !0,
            className: "round-xs absolute inset-0 overflow-hidden",
            children: [(0, t.jsx)("video", {
              className: "absolute inset-0 h-full w-full object-cover",
              src: e.videoSrc,
              poster: e.poster,
              "aria-label": e.title,
              muted: !0,
              loop: !0,
              playsInline: !0,
              children: (0, t.jsx)("track", {
                kind: "captions"
              })
            }), (0, t.jsx)(y.default, {
              "data-story-poster": !0,
              src: e.poster,
              alt: "",
              "aria-hidden": !0,
              draggable: !1,
              width: 361,
              height: 203,
              unoptimized: !0,
              className: (0, r.cn)("pointer-events-none absolute -top-px -left-px object-cover", "h-[calc(100%+2px)] w-[calc(100%+2px)] max-w-none", "group-data-[playing=true]:opacity-0")
            })]
          }), (0, t.jsx)("span", {
            "aria-hidden": !0,
            className: (0, r.cn)("pointer-events-none absolute inset-0 rounded-[16px] border-2 border-transparent", "group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
          })]
        }), (0, t.jsx)("span", {
          "data-story-location": !0,
          className: (0, r.cn)("absolute bottom-0 text-body-sm text-text-invert-primary", "opacity-70 group-data-[active=true]:opacity-100"),
          children: (0, t.jsx)("span", {
            className: "inline-block translate-y-[calc(100%+8px)]",
            children: e.subtitle
          })
        })]
      })
    });
  }
  let x,
    E,
    S = "function" == typeof Symbol ? Symbol() : "_split",
    b,
    T = "u" > typeof Intl && "Segmenter" in Intl ? new Intl.Segmenter() : 0,
    A = e => e ? "string" == typeof e ? A(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => ("string" == typeof t ? e.push(...A(t)) : e.push(t), e), []) : [e] : [],
    I = e => A(e).filter(e => e && 1 === e.nodeType),
    k = [],
    _ = function () {},
    O = {
      add: e => e()
    },
    N = /\s+/g,
    R = RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
    P = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    M = (e, t) => {
      for (; ++t < e.length && e[t] === P;);
      return e[t] || P;
    },
    L = ({
      element: e,
      html: t,
      ariaL: i,
      ariaH: s
    }) => {
      e.innerHTML = t, i ? e.setAttribute("aria-label", i) : e.removeAttribute("aria-label"), s ? e.setAttribute("aria-hidden", s) : e.removeAttribute("aria-hidden");
    },
    U = (e, t) => {
      if (t) {
        let i = new Set(e.join("").match(t) || k),
          s = e.length,
          r,
          n,
          o,
          a;
        if (i.size) {
          for (; --s > -1;) for (o of (n = e[s], i)) if (o.startsWith(n) && o.length > n.length) {
            for (r = 0, a = n; o.startsWith(a += e[s + ++r]) && a.length < o.length;);
            if (r && a.length === o.length) {
              e[s] = o, e.splice(s + 1, r);
              break;
            }
          }
        }
      }
      return e;
    },
    D = e => "inline" === window.getComputedStyle(e).display && (e.style.display = "inline-block"),
    j = (e, t, i) => t.insertBefore("string" == typeof e ? document.createTextNode(e) : e, i),
    C = (e, t, i) => {
      let s = t[e + "sClass"] || "",
        {
          tag: r = "div",
          aria: n = "auto",
          propIndex: o = !1
        } = t,
        a = "line" === e ? "block" : "inline-block",
        l = s.indexOf("++") > -1,
        h = t => {
          let h = document.createElement(r),
            d = i.length + 1;
          return s && (h.className = s + (l ? " " + s + d : "")), o && h.style.setProperty("--" + e, d + ""), "none" !== n && h.setAttribute("aria-hidden", "true"), "span" !== r && (h.style.position = "relative", h.style.display = a), h.textContent = t, i.push(h), h;
        };
      return l && (s = s.replace("++", "")), h.collection = i, h;
    },
    W = (e, t, i, s, r, n, o, a, l, h) => {
      var d;
      let c = Array.from(e.childNodes),
        u = 0,
        {
          wordDelimiter: p,
          reduceWhiteSpace: v = !0,
          prepareText: f
        } = t,
        m = e.getBoundingClientRect(),
        w = m,
        y = !v && "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
        g = 0,
        x = i.collection,
        E,
        S,
        b,
        A,
        I,
        _,
        O,
        R,
        P,
        M,
        L,
        C,
        z,
        K,
        X,
        B,
        F,
        V;
      for ("object" == typeof p ? (b = p.delimiter || p, S = p.replaceWith || "") : S = "" === p ? "" : p || " ", E = " " !== S; u < c.length; u++) if (3 === (A = c[u]).nodeType) {
        for (X = A.textContent || "", v ? X = X.replace(N, " ") : y && (X = X.replace(/\n/g, S + "\n")), f && (X = f(X, e)), A.textContent = X, F = (I = S || b ? X.split(b || S) : X.match(a) || k)[I.length - 1], R = E ? " " === F.slice(-1) : !F, F || I.pop(), w = m, (O = E ? " " === I[0].charAt(0) : !I[0]) && j(" ", e, A), I[0] || I.shift(), U(I, l), n && h || (A.textContent = ""), P = 1; P <= I.length; P++) if (B = I[P - 1], !v && y && "\n" === B.charAt(0) && (null == (d = A.previousSibling) || d.remove(), j(document.createElement("br"), e, A), B = B.slice(1)), v || "" !== B) {
          if (" " === B) e.insertBefore(document.createTextNode(" "), A);else {
            if (E && " " === B.charAt(0) && j(" ", e, A), g && 1 === P && !O && x.indexOf(g.parentNode) > -1 ? (_ = x[x.length - 1]).appendChild(document.createTextNode(s ? "" : B)) : (j(_ = i(s ? "" : B), e, A), g && 1 === P && !O && _.insertBefore(g, _.firstChild)), s) for (L = T ? U([...T.segment(B)].map(e => e.segment), l) : B.match(a) || k, V = 0; V < L.length; V++) _.appendChild(" " === L[V] ? document.createTextNode(" ") : s(L[V]));
            if (n && h) {
              if (X = A.textContent = X.substring(B.length + 1, X.length), (M = _.getBoundingClientRect()).top > w.top && M.left <= w.left) {
                for (C = e.cloneNode(), z = e.childNodes[0]; z && z !== _;) K = z, z = z.nextSibling, C.appendChild(K);
                e.parentNode.insertBefore(C, e), r && D(C);
              }
              w = M;
            }
            (P < I.length || R) && j(P >= I.length ? " " : E && " " === B.slice(-1) ? " " + S : S, e, A);
          }
        } else j(S, e, A);
        e.removeChild(A), g = 0;
      } else 1 === A.nodeType && (o && o.indexOf(A) > -1 ? (x.indexOf(A.previousSibling) > -1 && x[x.length - 1].appendChild(A), g = A) : (W(A, t, i, s, r, n, o, a, l, !0), g = 0), r && D(A));
    },
    z = class e {
      constructor(e, t) {
        this.isSplit = !1, b || K.register(window.gsap), this.elements = I(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach(e => {
          var i;
          !1 !== t.overwrite && (null == (i = e[S]) || i._data.orig.filter(({
            element: t
          }) => t === e).forEach(L)), e[S] = this;
        }), this._split = () => this.isSplit && this.split(this.vars);
        let i = [],
          s,
          r = () => {
            let e = i.length,
              t;
            for (; e--;) {
              let s = (t = i[e]).element.offsetWidth;
              if (s !== t.width) {
                t.width = s, this._split();
                return;
              }
            }
          };
        this._data = {
          orig: i,
          obs: "u" > typeof ResizeObserver && new ResizeObserver(() => {
            clearTimeout(s), s = setTimeout(r, 200);
          })
        }, _(this), this.split(t);
      }
      split(e) {
        return (this._ctx || O).add(() => {
          this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
          let {
              type: t = "chars,words,lines",
              aria: i = "auto",
              deepSlice: s = !0,
              smartWrap: r,
              onSplit: n,
              autoSplit: o = !1,
              specialChars: a,
              mask: l
            } = this.vars,
            h = t.indexOf("lines") > -1,
            d = t.indexOf("chars") > -1,
            c = t.indexOf("words") > -1,
            u = d && !c && !h,
            p = a && ("push" in a ? RegExp("(?:" + a.join("|") + ")", "gu") : a),
            v = p ? RegExp(p.source + "|" + R.source, "gu") : R,
            f = !!e.ignore && I(e.ignore),
            {
              orig: m,
              animTime: w,
              obs: y
            } = this._data,
            g;
          (d || c || h) && (this.elements.forEach((t, n) => {
            m[n] = {
              element: t,
              html: t.innerHTML,
              ariaL: t.getAttribute("aria-label"),
              ariaH: t.getAttribute("aria-hidden")
            }, "auto" === i ? t.setAttribute("aria-label", (t.textContent || "").trim()) : "hidden" === i && t.setAttribute("aria-hidden", "true");
            let o = [],
              a = [],
              l = [],
              w = d ? C("char", e, o) : null,
              y = C("word", e, a),
              g,
              x,
              E,
              S;
            if (W(t, e, y, w, u, s && (h || u), f, v, p, !1), h) {
              let i,
                s,
                r = A(t.childNodes),
                n = (i = C("line", e, l), s = window.getComputedStyle(t).textAlign || "left", (e, n) => {
                  let o = i("");
                  for (o.style.textAlign = s, t.insertBefore(o, r[e]); e < n; e++) o.appendChild(r[e]);
                  o.normalize();
                }),
                o,
                a = [],
                h = 0,
                d = r.map(e => 1 === e.nodeType ? e.getBoundingClientRect() : P),
                c = P,
                u;
              for (g = 0; g < r.length; g++) 1 === (o = r[g]).nodeType && ("BR" === o.nodeName ? (g && "BR" === r[g - 1].nodeName || (a.push(o), n(h, g + 1)), h = g + 1, c = M(d, g)) : (u = d[g], g && u.top > c.top && u.left < c.left + c.width - 1 && (n(h, g), h = g), c = u));
              h < g && n(h, g), a.forEach(e => {
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
              });
            }
            if (!c) {
              for (g = 0; g < a.length; g++) if (x = a[g], d || !x.nextSibling || 3 !== x.nextSibling.nodeType) {
                if (r && !h) {
                  for ((E = document.createElement("span")).style.whiteSpace = "nowrap"; x.firstChild;) E.appendChild(x.firstChild);
                  x.replaceWith(E);
                } else x.replaceWith(...x.childNodes);
              } else (S = x.nextSibling) && 3 === S.nodeType && (S.textContent = (x.textContent || "") + (S.textContent || ""), x.remove());
              a.length = 0, t.normalize();
            }
            this.lines.push(...l), this.words.push(...a), this.chars.push(...o);
          }), l && this[l] && this.masks.push(...this[l].map(e => {
            let t = e.cloneNode();
            return e.replaceWith(t), t.appendChild(e), e.className && (t.className = e.className.trim().split(" ").map(e => e + "-mask").join(" ")), t.style.overflow = "clip", t;
          }))), this.isSplit = !0, E && h && o && E.addEventListener("loadingdone", this._split), (g = n && n(this)) && g.totalTime && (this._data.anim = w ? g.totalTime(w) : g), h && o && this.elements.forEach((e, t) => {
            m[t].width = e.offsetWidth, y && y.observe(e);
          });
        }), this;
      }
      kill() {
        let {
          obs: e
        } = this._data;
        e && e.disconnect(), null == E || E.removeEventListener("loadingdone", this._split);
      }
      revert() {
        var e, t;
        if (this.isSplit) {
          let {
            orig: i,
            anim: s
          } = this._data;
          this.kill(), i.forEach(L), this.chars.length = this.words.length = this.lines.length = i.length = this.masks.length = 0, this.isSplit = !1, s && (this._data.animTime = s.totalTime(), s.revert()), null == (t = (e = this.vars).onRevert) || t.call(e, this);
        }
        return this;
      }
      static create(t, i) {
        return new e(t, i);
      }
      static register(e) {
        (x = x || e || window.gsap) && (A = x.utils.toArray, _ = x.core.context || _), !b && window.innerWidth > 0 && (E = document.fonts, b = !0);
      }
    };
  z.version = "3.15.0";
  let K = z;
  function X({
    ref: e
  }) {
    let s = (0, i.useRef)(null),
      r = (0, i.useRef)(null),
      n = (0, i.useRef)(null),
      a = (0, i.useRef)(null),
      l = (0, i.useRef)(null),
      h = (0, i.useRef)(!1),
      c = (0, i.useCallback)(e => {
        if (!e || e.id === l.current || !r.current || !n.current) return;
        l.current = e.id;
        let t = e.location?.trim() ?? "";
        h.current = t.length > 0, r.current.innerHTML = e.title, n.current.innerHTML = t, n.current.hidden = !h.current;
      }, []);
    return (0, i.useImperativeHandle)(e, () => ({
      setStory: c,
      intro: e => {
        c(e), a.current && a.current.revert(), r.current && (r.current.style.opacity = "0"), n.current && (n.current.style.opacity = "0"), o.default.killTweensOf(n.current), r.current && (r.current.style.opacity = "1"), a.current = K.create(r.current, {
          type: "words"
        }), o.default.fromTo(a.current.words, {
          y: "100%",
          alpha: 0
        }, {
          alpha: 1,
          duration: d.DURATION.slow,
          ease: d.EASE_OUT,
          stagger: .05,
          y: "0%"
        }), h.current && o.default.fromTo(n.current, {
          y: "100%",
          autoAlpha: 0
        }, {
          duration: d.DURATION.slow,
          autoAlpha: .8,
          ease: d.EASE_OUT,
          delay: .2,
          y: "0%"
        });
      }
    }), [c]), (0, t.jsxs)("div", {
      ref: s,
      className: "absolute bottom-0 left-1/2 flex w-184.75 -translate-x-1/2 flex-col items-center gap-1 tablet:gap-2 pb-12 text-center text-text-invert-primary",
      children: [(0, t.jsx)("p", {
        ref: r,
        className: "font-heading text-heading-lg opacity-0"
      }), (0, t.jsx)("p", {
        ref: n,
        hidden: !0,
        className: "font-heading text-heading-sm opacity-0"
      })]
    });
  }
  o.default.registerPlugin(K), e.s(["StoriesScene", 0, function () {
    let {
        stories: e,
        featuredStoryId: o,
        openStory: a,
        closeStory: l,
        registerStories: h,
        activeStoryId: d
      } = (0, f.useStories)(),
      c = (0, i.useRef)(null),
      u = (0, i.useRef)(null),
      p = (0, i.useRef)(null),
      m = (0, i.useRef)(null),
      y = (0, i.useRef)(null),
      x = (0, i.useRef)(null),
      {
        setBgTheme: E
      } = (0, i.useContext)(n.NavContext);
    return (0, i.useLayoutEffect)(() => {
      E("dark");
      let t = c.current,
        i = u.current,
        r = p.current,
        n = m.current,
        d = y.current;
      if (!t || !i || !r || !n || !d) return;
      let f = new v({
        wrapper: t,
        track: i,
        overlay: r,
        headline: n,
        background: d,
        stories: e,
        startIndex: function (e, t) {
          if (window.innerWidth < s.BREAKPOINTS.tablet) return 0;
          let i = e.findIndex(e => e.id === t);
          return -1 === i ? 1 : i;
        }(e, o),
        onOpen: a,
        onClose: l
      });
      return x.current = f, h(f), f.init(), () => {
        x.current = null, h(null), f.destroy();
      };
    }, []), (0, i.useEffect)(() => {
      let e = x.current;
      e && (d ? e.showStory(d) : e.goto("index"));
    }, [d]), (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("section", {
        className: "fixed top-0 left-0 w-full overflow-hidden bg-black",
        children: (0, t.jsxs)("div", {
          ref: c,
          className: "relative block",
          children: [(0, t.jsx)(w, {
            ref: y
          }), (0, t.jsx)(X, {
            ref: m
          })]
        })
      }), (0, t.jsxs)("div", {
        className: "pointer-events-none fixed top-0 left-0 z-20 h-dvh w-screen overflow-hidden",
        children: [(0, t.jsx)("div", {
          ref: u,
          className: (0, r.cn)("absolute top-0 left-0 h-dvh w-screen"),
          children: e.map((e, i) => (0, t.jsx)(g, {
            index: i,
            story: e
          }, e.id))
        }), (0, t.jsx)("span", {
          ref: p,
          className: "pointer-events-none absolute top-0 left-0 h-dvh w-screen bg-background-primary tablet:bg-black opacity-0"
        })]
      })]
    });
  }], 858965);
};
