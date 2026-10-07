// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 665279.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "Image", {
    enumerable: !0,
    get: function () {
      return y;
    }
  });
  let n = e.r(330053),
    a = e.r(171266),
    i = e.r(281889),
    s = a._(e.r(513679)),
    o = n._(e.r(345078)),
    l = n._(e.r(111586)),
    d = e.r(18306),
    u = e.r(433198),
    c = e.r(453426),
    f = e.r(239351),
    p = n._(e.r(396674)),
    m = e.r(81378),
    h = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
    };
  function g(e, t, r, n, a, i, s) {
    let o = e?.src;
    e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
      if (e.parentElement && e.isConnected) {
        if ("empty" !== t && a(!0), r?.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {
            writable: !1,
            value: e
          });
          let n = !1,
            a = !1;
          r.current({
            ...t,
            nativeEvent: t,
            currentTarget: e,
            target: e,
            isDefaultPrevented: () => n,
            isPropagationStopped: () => a,
            persist: () => {},
            preventDefault: () => {
              n = !0, t.preventDefault();
            },
            stopPropagation: () => {
              a = !0, t.stopPropagation();
            }
          });
        }
        n?.current && n.current(e);
      }
    }));
  }
  function b(e) {
    return s.use ? {
      fetchPriority: e
    } : {
      fetchpriority: e
    };
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  let w = "u" < typeof window ? s.useEffect : s.useLayoutEffect,
    v = (0, s.forwardRef)(({
      src: e,
      srcSet: t,
      sizes: r,
      height: n,
      width: a,
      decoding: o,
      className: l,
      style: d,
      fetchPriority: u,
      placeholder: c,
      loading: f,
      unoptimized: p,
      fill: h,
      onLoadRef: v,
      onLoadingCompleteRef: x,
      setBlurComplete: y,
      setShowAltText: S,
      sizesInput: E,
      onLoad: P,
      onError: R,
      ...j
    }, k) => {
      let T = (0, s.useRef)(!1),
        A = (0, s.useRef)(null);
      w(() => {
        let {
            current: e
          } = T,
          {
            current: t
          } = A;
        e || null === t || (R && (t.src = t.src), t.complete && g(t, c, v, x, y, p, E), T.current = !0);
      }, [e, c, v, x, R, p, E]);
      let C = (0, m.useMergedRef)(k, A);
      return (0, i.jsx)("img", {
        ...j,
        ...b(u),
        loading: f,
        width: a,
        height: n,
        decoding: o,
        "data-nimg": h ? "fill" : "1",
        className: l,
        style: d,
        sizes: r,
        srcSet: t,
        src: e,
        ref: C,
        onLoad: e => {
          g(e.currentTarget, c, v, x, y, p, E);
        },
        onError: e => {
          S(!0), "empty" !== c && y(!0), R && R(e);
        }
      });
    });
  function x({
    isAppRouter: e,
    imgAttributes: t
  }) {
    let r = {
      as: "image",
      imageSrcSet: t.srcSet,
      imageSizes: t.sizes,
      crossOrigin: t.crossOrigin,
      referrerPolicy: t.referrerPolicy,
      ...b(t.fetchPriority)
    };
    return e && o.default.preload ? (o.default.preload(t.src, r), null) : (0, i.jsx)(l.default, {
      children: (0, i.jsx)("link", {
        rel: "preload",
        href: t.srcSet ? void 0 : t.src,
        ...r
      }, "__nimg-" + t.src + t.srcSet + t.sizes)
    });
  }
  let y = (0, s.forwardRef)((e, t) => {
    let r = (0, s.useContext)(f.RouterContext),
      n = (0, s.useContext)(c.ImageConfigContext),
      a = (0, s.useMemo)(() => {
        let e = h || n || u.imageConfigDefault,
          t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
          r = e.deviceSizes.sort((e, t) => e - t),
          a = e.qualities?.sort((e, t) => e - t);
        return {
          ...e,
          allSizes: t,
          deviceSizes: r,
          qualities: a,
          localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
        };
      }, [n]),
      {
        onLoad: o,
        onLoadingComplete: l
      } = e,
      m = (0, s.useRef)(o);
    (0, s.useEffect)(() => {
      m.current = o;
    }, [o]);
    let g = (0, s.useRef)(l);
    (0, s.useEffect)(() => {
      g.current = l;
    }, [l]);
    let [b, w] = (0, s.useState)(!1),
      [y, S] = (0, s.useState)(!1),
      {
        props: E,
        meta: P
      } = (0, d.getImgProps)(e, {
        defaultLoader: p.default,
        imgConf: a,
        blurComplete: b,
        showAltText: y
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(v, {
        ...E,
        unoptimized: P.unoptimized,
        placeholder: P.placeholder,
        fill: P.fill,
        onLoadRef: m,
        onLoadingCompleteRef: g,
        setBlurComplete: w,
        setShowAltText: S,
        sizesInput: e.sizes,
        ref: t
      }), P.preload ? (0, i.jsx)(x, {
        isAppRouter: !r,
        imgAttributes: E
      }) : null]
    });
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
