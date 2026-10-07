// Recovered from 19zx1p8v1xybc.js. Runtime module IDs: 39118.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(281889),
    i = t.i(176418),
    s = t.i(983871),
    a = t.i(513679),
    r = t.i(631923),
    n = t.i(998304),
    o = t.i(628974),
    h = t.i(726215);
  let l = {
    src: t.i(770750).default,
    width: 219,
    height: 123,
    blurWidth: 0,
    blurHeight: 0
  };
  var p = t.i(426310),
    f = t.i(288565);
  let m = {
    idle: t.i(279591).default,
    appear: f.default
  };
  function c({
    size: t = 50,
    aspect: i = "629.18 / 578.61",
    clip: s = "idle",
    tone: r = "light",
    centered: n = !1,
    playKey: o = 0,
    loop: h = "idle" === s,
    className: l,
    style: f
  } = {}) {
    let d = (0, a.useRef)(null),
      u = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      if (!d.current) return;
      let t = p.default.loadAnimation({
        container: d.current,
        renderer: "svg",
        loop: h,
        autoplay: !0,
        animationData: m[s],
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet"
        }
      });
      return u.current = t, () => t.destroy();
    }, [s, h]), (0, a.useEffect)(() => {
      o > 0 && u.current?.goToAndPlay(0, !0);
    }, [o]), (0, e.jsx)("span", {
      className: l,
      "aria-hidden": !0,
      style: {
        display: "block",
        width: "number" == typeof t ? `${t}px` : t,
        aspectRatio: i,
        ...(n ? {
          translate: "-50% -50%"
        } : null),
        ...f
      },
      children: (0, e.jsx)("span", {
        ref: d,
        style: {
          display: "block",
          width: "100%",
          height: "100%",
          transform: function (t) {
            let [e, i] = t.split("/").map(Number.parseFloat);
            return `scale(${700 / 629.18 * (e && i ? e / i : 1)})`;
          }(i),
          transformOrigin: "center",
          ...("dark" === r ? {
            filter: "invert(1)"
          } : null)
        }
      })
    });
  }
  function d({
    location: t,
    map: i
  }) {
    return (0, e.jsxs)("div", {
      className: "article-map flex flex-col items-center gap-gap-sm",
      children: [(0, e.jsxs)("div", {
        className: "relative w-54.75",
        children: [(0, e.jsx)(h.default, {
          src: l,
          alt: i?.alt ?? "",
          unoptimized: !0,
          className: "h-auto w-full"
        }), i ? (0, e.jsx)(c, {
          clip: "idle",
          tone: "dark",
          centered: !0,
          size: "15%",
          aspect: "63.2 / 58.78",
          className: "absolute",
          style: {
            left: `${i.x}%`,
            top: `${i.y}%`
          }
        }) : null]
      }), (0, e.jsx)("p", {
        className: "text-black-1000 text-label-lg opacity-70",
        children: t
      })]
    });
  }
  var u = t.i(365280);
  let g = {
    body: "text-black-300 text-body-md",
    highlight: "text-black-1000 text-heading-sm"
  };
  function y({
    story: t
  }) {
    var r;
    let n,
      {
        article: h,
        location: l
      } = t,
      p = function (t) {
        let e = [];
        for (let i of t) {
          let t = e.at(-1);
          if (t?.style === i.style) {
            t.items.push(i);
            continue;
          }
          e.push({
            style: i.style,
            items: [i]
          });
        }
        return e;
      }(h.paragraphs),
      f = (0, a.useRef)(null),
      m = (0, a.useRef)(null),
      c = (0, a.useRef)({
        value: 0
      });
    return (0, i.useGSAP)(() => {
      s.default.matchMedia().add("(min-width: 1024px)", () => {
        let t = s.default.timeline({
          paused: !0
        });
        return t.fromTo("h1", {
          y: 100
        }, {
          y: 0
        }), t.fromTo(".article-byline", {
          y: 200
        }, {
          y: 0
        }, 0), t.fromTo(".article-map", {
          y: 400
        }, {
          y: 0
        }, 0), t.fromTo(".article-content", {
          y: 600
        }, {
          y: 0
        }, 0), m.current = s.default.quickTo(c.current, "value", {
          duration: .25,
          onUpdate: () => t.progress(c.current.value)
        }), () => {
          c.current.value = 0, m.current = null;
        };
      });
    }, {
      scope: f
    }), r = t => {
      m.current?.(t);
    }, (n = (0, a.useRef)(r)).current = r, (0, a.useEffect)(() => u.storiesStore.onScrub(t => n.current(t)), []), (0, e.jsx)("article", {
      ref: f,
      className: "flex min-h-[120svh] w-full flex-col items-center bg-background-primary px-grid pt-gap-3xl tablet:pt-gap-3xl",
      children: (0, e.jsxs)("div", {
        className: "flex w-full max-w-131.5 flex-col items-center gap-gap-xl pt-pad-xl tablet:pt-0",
        children: [(0, e.jsxs)("header", {
          className: "flex w-full flex-col justify-center gap-gap-sm pt-gap-md tablet:pt-0 text-center",
          children: [(0, e.jsx)("h1", {
            className: "text-black-1000 text-heading-xl",
            children: h.headline.map((t, i) => (0, e.jsxs)(a.Fragment, {
              children: [i > 0 && (0, e.jsx)("br", {}), t.spans.map(t => t.accent ? (0, e.jsx)("em", {
                className: "italic",
                children: t.text
              }, t.id) : (0, e.jsx)(a.Fragment, {
                children: t.text
              }, t.id))]
            }, t.id))
          }), (0, e.jsx)("p", {
            className: "article-byline text-black-400 text-heading-sm opacity-80",
            children: h.byline
          })]
        }), (0, e.jsx)(d, {
          location: l,
          map: h.map
        }), (0, e.jsx)("div", {
          className: "article-content flex w-full flex-col gap-[3.7rem] pb-40 tablet:pb-32.5",
          children: p.map(t => (0, e.jsx)("div", {
            className: (0, o.cn)("flex flex-col gap-[1.1rem]", g[t.style]),
            children: t.items.map(t => (0, e.jsx)("p", {
              children: t.text
            }, t.id))
          }, t.items[0].id))
        })]
      })
    });
  }
  var v = t.i(808761);
  t.s(["StoryPage", 0, function ({
    story: t
  }) {
    let o = (0, a.useRef)(null),
      h = (0, a.useRef)(null),
      {
        registerArticle: l
      } = (0, n.useStories)();
    (0, i.useGSAP)(() => {
      s.default.fromTo(o.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: r.DURATION.medium,
        ease: r.EASE_OUT
      });
    });
    let p = (0, a.useCallback)(() => (h.current ??= new Promise(t => {
      u.storiesStore.pageVisible ? s.default.to(o.current, {
        opacity: 0,
        duration: r.DURATION.fast,
        ease: r.EASE_IN_OUT,
        overwrite: !0,
        onComplete: t,
        onInterrupt: t
      }) : t();
    }), h.current), []);
    return (0, a.useEffect)(() => (l({
      leave: p
    }), () => {
      l(null);
    }), [l, p]), (0, e.jsxs)("section", {
      ref: o,
      className: "relative z-30 flex h-auto w-screen flex-col bg-background-primary",
      children: [(0, e.jsx)("div", {
        "aria-hidden": !0,
        className: "pointer-events-none fixed inset-0 -z-10 bg-background-primary"
      }), (0, e.jsx)(y, {
        story: t
      }), (0, e.jsx)(v.StoryCloseButton, {})]
    });
  }], 39118);
};
