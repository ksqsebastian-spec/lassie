// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 665279.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "Image", {
    enumerable: !0,
    get: function () {
      return S;
    }
  });
  let r = e.r(330053),
    o = e.r(171266),
    n = e.r(281889),
    s = o._(e.r(513679)),
    l = r._(e.r(345078)),
    a = r._(e.r(111586)),
    u = e.r(18306),
    c = e.r(433198),
    h = e.r(453426),
    d = e.r(239351),
    p = r._(e.r(396674)),
    f = e.r(81378),
    m = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
    };
  function g(e, t, i, r, o, n, s) {
    let l = e?.src;
    e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
      if (e.parentElement && e.isConnected) {
        if ("empty" !== t && o(!0), i?.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {
            writable: !1,
            value: e
          });
          let r = !1,
            o = !1;
          i.current({
            ...t,
            nativeEvent: t,
            currentTarget: e,
            target: e,
            isDefaultPrevented: () => r,
            isPropagationStopped: () => o,
            persist: () => {},
            preventDefault: () => {
              r = !0, t.preventDefault();
            },
            stopPropagation: () => {
              o = !0, t.stopPropagation();
            }
          });
        }
        r?.current && r.current(e);
      }
    }));
  }
  function v(e) {
    return s.use ? {
      fetchPriority: e
    } : {
      fetchpriority: e
    };
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  let w = "u" < typeof window ? s.useEffect : s.useLayoutEffect,
    b = (0, s.forwardRef)(({
      src: e,
      srcSet: t,
      sizes: i,
      height: r,
      width: o,
      decoding: l,
      className: a,
      style: u,
      fetchPriority: c,
      placeholder: h,
      loading: d,
      unoptimized: p,
      fill: m,
      onLoadRef: b,
      onLoadingCompleteRef: y,
      setBlurComplete: S,
      setShowAltText: C,
      sizesInput: x,
      onLoad: E,
      onError: _,
      ...L
    }, j) => {
      let T = (0, s.useRef)(!1),
        O = (0, s.useRef)(null);
      w(() => {
        let {
            current: e
          } = T,
          {
            current: t
          } = O;
        e || null === t || (_ && (t.src = t.src), t.complete && g(t, h, b, y, S, p, x), T.current = !0);
      }, [e, h, b, y, _, p, x]);
      let R = (0, f.useMergedRef)(j, O);
      return (0, n.jsx)("img", {
        ...L,
        ...v(c),
        loading: d,
        width: o,
        height: r,
        decoding: l,
        "data-nimg": m ? "fill" : "1",
        className: a,
        style: u,
        sizes: i,
        srcSet: t,
        src: e,
        ref: R,
        onLoad: e => {
          g(e.currentTarget, h, b, y, S, p, x);
        },
        onError: e => {
          C(!0), "empty" !== h && S(!0), _ && _(e);
        }
      });
    });
  function y({
    isAppRouter: e,
    imgAttributes: t
  }) {
    let i = {
      as: "image",
      imageSrcSet: t.srcSet,
      imageSizes: t.sizes,
      crossOrigin: t.crossOrigin,
      referrerPolicy: t.referrerPolicy,
      ...v(t.fetchPriority)
    };
    return e && l.default.preload ? (l.default.preload(t.src, i), null) : (0, n.jsx)(a.default, {
      children: (0, n.jsx)("link", {
        rel: "preload",
        href: t.srcSet ? void 0 : t.src,
        ...i
      }, "__nimg-" + t.src + t.srcSet + t.sizes)
    });
  }
  let S = (0, s.forwardRef)((e, t) => {
    let i = (0, s.useContext)(d.RouterContext),
      r = (0, s.useContext)(h.ImageConfigContext),
      o = (0, s.useMemo)(() => {
        let e = m || r || c.imageConfigDefault,
          t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
          i = e.deviceSizes.sort((e, t) => e - t),
          o = e.qualities?.sort((e, t) => e - t);
        return {
          ...e,
          allSizes: t,
          deviceSizes: i,
          qualities: o,
          localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns
        };
      }, [r]),
      {
        onLoad: l,
        onLoadingComplete: a
      } = e,
      f = (0, s.useRef)(l);
    (0, s.useEffect)(() => {
      f.current = l;
    }, [l]);
    let g = (0, s.useRef)(a);
    (0, s.useEffect)(() => {
      g.current = a;
    }, [a]);
    let [v, w] = (0, s.useState)(!1),
      [S, C] = (0, s.useState)(!1),
      {
        props: x,
        meta: E
      } = (0, u.getImgProps)(e, {
        defaultLoader: p.default,
        imgConf: o,
        blurComplete: v,
        showAltText: S
      });
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(b, {
        ...x,
        unoptimized: E.unoptimized,
        placeholder: E.placeholder,
        fill: E.fill,
        onLoadRef: f,
        onLoadingCompleteRef: g,
        setBlurComplete: w,
        setShowAltText: C,
        sizesInput: e.sizes,
        ref: t
      }), E.preload ? (0, n.jsx)(y, {
        isAppRouter: !i,
        imgAttributes: x
      }) : null]
    });
  });
  ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
    value: !0
  }), Object.assign(i.default, i), t.exports = i.default);
};
