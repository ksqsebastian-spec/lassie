// Recovered from 3g2v9_2yb35qx.js. Runtime module IDs: 881236.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(983871),
    s = e.i(662576),
    r = e.i(726215),
    n = e.i(513679),
    o = e.i(990055),
    a = e.i(628974),
    l = e.i(998304),
    h = e.i(808761),
    d = e.i(279206);
  function c({
    onScrollDown: e
  }) {
    let [i, s] = (0, n.useState)(!0),
      [r, o] = (0, n.useState)(!1);
    return (0, n.useEffect)(() => {
      if (r) return void s(!0);
      let e = window.setTimeout(() => s(!1), 2e3),
        t = () => {
          s(!0), window.clearTimeout(e), e = window.setTimeout(() => s(!1), 2e3);
        };
      return window.addEventListener("mousemove", t), () => {
        window.clearTimeout(e), window.removeEventListener("mousemove", t);
      };
    }, [r]), (0, t.jsx)("div", {
      className: (0, a.cn)("pointer-events-none fixed right-[3rem] bottom-[3rem] z-10 tablet:block hidden pr-(--chrome-pad) pb-(--chrome-pad)", "transition-opacity duration-200 ease-out", i ? "opacity-100" : "opacity-0"),
      children: (0, t.jsx)(d.ButtonPrimary, {
        theme: "primary",
        onClick: e,
        iconAlwaysVisible: !0,
        onPointerEnter: () => o(!0),
        onPointerLeave: () => o(!1),
        className: (0, a.cn)("h-12.5! [&>span:last-child]:w-12.5 [&>span]:h-12.5 [&_svg]:rotate-90", i ? "pointer-events-auto" : "pointer-events-none"),
        children: "Scroll to read more"
      })
    });
  }
  var u = e.i(365280),
    p = e.i(393763),
    v = e.i(631923),
    f = e.i(6590),
    m = e.i(625400);
  let w = () => window.innerWidth < o.BREAKPOINTS.tablet;
  function y() {
    let e = 195;
    window.innerWidth >= 744 && (e = 280), window.innerWidth >= o.BREAKPOINTS.desktop && (e = 361);
    let t = .562 * e,
      i = window.innerWidth >= o.BREAKPOINTS.desktop ? 48 : 16;
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
  let x = (e, t, i) => e + (t - e) * i,
    E = (0, s.default)(() => e.A(141790), {
      loadableGenerated: {
        modules: [898391]
      },
      ssr: !1
    });
  function S(e) {
    window.dispatchEvent(new CustomEvent("modal-lock", {
      detail: {
        locked: e
      }
    }));
  }
  e.s(["StoriesFullscreen", 0, function () {
    let {
        stories: e,
        activeStoryId: s,
        closeStory: d,
        getStories: m
      } = (0, l.useStories)(),
      [b, T] = (0, n.useState)(null !== s),
      A = (0, n.useRef)(null),
      I = (0, n.useRef)(null),
      k = (0, n.useRef)(null),
      _ = (0, n.useRef)(null),
      O = (0, n.useRef)(null),
      N = !0,
      [R, P] = (0, n.useState)(null);
    (0, n.useEffect)(() => {
      let t = e.find(e => e.id === s);
      t && P(t), T(null !== s);
    }, [s, e]), (0, n.useEffect)(() => {
      let e,
        t = A.current,
        s = k.current,
        r = I.current;
      if (t && s && r) {
        if (b) {
          a(), window.removeEventListener("resize", n), window.addEventListener("resize", n), N && S(!0), O.current = e = function ({
            frame: e,
            close: t,
            backdrop: s,
            onDock: r,
            onUndock: n,
            onMove: o,
            onScrub: a
          }) {
            let l = new p.default({
                mouseMultiplier: .25
              }),
              h = {
                value: 0
              },
              d = 0,
              c = !1,
              u = window.innerWidth,
              m = CSS.supports("animation-timeline: scroll()");
            function E() {
              let t = g(),
                s = y();
              e.style.setProperty("--pip-scale", String(s.width / t.width)), i.default.set(e, {
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
              e.toggleAttribute("data-compact", c && w());
            }
            function b() {
              let r = g(),
                n = y(),
                l = h.value,
                d = {
                  width: x(r.width, n.width, l),
                  height: x(r.height, n.height, l),
                  x: x(r.x, n.x, l),
                  y: x(r.y, n.y, l)
                };
              if (w()) {
                let t = d.width / r.width;
                o?.({
                  ...d,
                  radius: r.radius * t
                }), m || i.default.set(e, {
                  scale: t
                });
              } else {
                let t = x(r.radius, f.StoryItem.MASK_RADIUS, l);
                o?.({
                  ...d,
                  radius: t
                }), i.default.set(e, {
                  ...d,
                  left: 0,
                  bottom: "auto",
                  borderRadius: t,
                  scale: 1,
                  overwrite: !0
                });
              }
              if (a?.(l), i.default.set(t, {
                autoAlpha: 1 - l
              }), e.style.setProperty("--caption-opacity", l > 0 ? "0" : "1"), s) {
                let e = i.default.utils.clamp(0, 1, (l - .005) / .095);
                i.default.set(s, {
                  opacity: 1 - e
                });
              }
            }
            function T() {
              let e = h.value >= 1,
                t = e !== c;
              c = e, t && S(), b(), t && (c ? r?.() : n?.());
            }
            function A(e, t, s) {
              (d = i.default.utils.clamp(0, 1, e)) === h.value ? i.default.killTweensOf(h) : i.default.to(h, {
                value: d,
                duration: t,
                ease: s,
                overwrite: !0,
                onUpdate: T
              });
            }
            function I() {
              !w() || window.innerHeight >= document.documentElement.scrollHeight || (i.default.killTweensOf(h), h.value = d = i.default.utils.clamp(0, 1, window.scrollY / 300), T());
            }
            return l.on(function (e) {
              if (w()) return;
              let t = -e.deltaY;
              (!(t < 0) || window.scrollY <= 0) && A(d + t / 500, .4, v.EASE_OUT);
            }), window.addEventListener("scroll", I, {
              passive: !0
            }), w() && E(), b(), {
              dock: () => {
                h.value >= 1 || A(1, v.DURATION.slow, v.EASE_IN_OUT);
              },
              undock: () => {
                h.value <= 0 || A(0, v.DURATION.slow, v.EASE_IN_OUT);
              },
              isDocked: () => c,
              destroy: () => {
                e.removeAttribute("data-compact"), i.default.killTweensOf(h), window.removeEventListener("scroll", I), l.destroy();
              },
              resize: () => {
                let e = window.innerWidth !== u;
                u = window.innerWidth, e && w() && (window.scrollTo(0, 0), A(0, 0, "linear")), w() && E(), S(), b();
              }
            };
          }({
            frame: t,
            close: s,
            backdrop: r,
            onDock: () => {
              S(!1);
            },
            onUndock: () => {
              N && S(!0);
            },
            onMove: e => {
              u.storiesStore.anchor = e;
            },
            onScrub: u.storiesStore.setScrub
          }), i.default.set(t, {
            opacity: 1,
            overwrite: !0
          }), i.default.set(s, {
            autoAlpha: 1,
            overwrite: !0
          }), i.default.set(r, {
            opacity: 1,
            overwrite: !0
          }), u.storiesStore.playerVisible = !0;
          let o = m()?.activeItem;
          o && (o.opacity = 0);
        } else {
          u.storiesStore.playerVisible = !1, i.default.set(s, {
            autoAlpha: 0,
            overwrite: !0
          }), i.default.set(r, {
            opacity: 0,
            overwrite: !0
          });
          return;
        }
        return () => {
          e?.destroy(), O.current = null, u.storiesStore.setScrub(0), S(!1), window.removeEventListener("resize", n);
        };
      }
      function n() {
        a(), e?.resize();
      }
      function a() {
        window.innerWidth >= o.BREAKPOINTS.tablet ? N = !0 : (N = !1, S(!1));
      }
    }, [b, m]), (0, n.useEffect)(() => {
      if (b) return;
      let e = A.current;
      e && i.default.set(e, {
        opacity: 0
      });
    }, [b]), (0, n.useEffect)(() => {
      if (b) return;
      let e = _.current;
      e && (e.pause(), e.currentTime = 0);
    }, [b]);
    let M = R?.fullVideoSrc,
      L = R?.captionsSrc,
      U = R?.poster;
    return (0, t.jsxs)("div", {
      className: (0, a.cn)("pointer-events-none fixed inset-0 z-9999"),
      children: [(0, t.jsx)("div", {
        ref: I,
        className: "fixed inset-0 tablet:block hidden bg-black opacity-0",
        "aria-hidden": !0
      }), (0, t.jsx)("div", {
        ref: A,
        className: (0, a.cn)("story-frame fixed h-dvh w-screen overflow-hidden bg-black opacity-0", b && "pointer-events-auto"),
        children: M && (0, t.jsxs)(t.Fragment, {
          children: [U && (0, t.jsx)(r.default, {
            src: U,
            alt: "",
            fill: !0,
            unoptimized: !0,
            className: "object-cover"
          }), (0, t.jsx)(E, {
            posterSrc: U,
            ref: _,
            src: M,
            vtt: L,
            autoPlay: b,
            onExpand: () => O.current?.undock(),
            onEnded: function () {
              if (window.innerWidth < o.BREAKPOINTS.tablet) {
                let e = _.current;
                if (!e) return;
                e.pause(), e.currentTime = 0;
                return;
              }
              d();
            }
          })]
        })
      }), (0, t.jsxs)("span", {
        ref: k,
        className: (0, a.cn)("pointer-events-auto fixed top-0 right-0 z-10 tablet:block hidden opacity-0", !b && "pointer-events-none"),
        children: [(0, t.jsx)(h.StoryCloseButton, {
          variant: "frosted"
        }), (0, t.jsx)(c, {
          onScrollDown: () => O.current?.dock()
        })]
      })]
    });
  }], 881236);
};
