// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 665279.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "Image", {
    enumerable: !0,
    get: function () {
      return w;
    }
  });
  let i = e.r(330053),
    a = e.r(171266),
    n = e.r(281889),
    l = a._(e.r(513679)),
    s = i._(e.r(345078)),
    o = i._(e.r(111586)),
    d = e.r(18306),
    u = e.r(433198),
    c = e.r(453426),
    m = e.r(239351),
    f = i._(e.r(396674)),
    p = e.r(81378),
    h = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
    };
  function g(e, t, r, i, a, n, l) {
    let s = e?.src;
    e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
      if (e.parentElement && e.isConnected) {
        if ("empty" !== t && a(!0), r?.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {
            writable: !1,
            value: e
          });
          let i = !1,
            a = !1;
          r.current({
            ...t,
            nativeEvent: t,
            currentTarget: e,
            target: e,
            isDefaultPrevented: () => i,
            isPropagationStopped: () => a,
            persist: () => {},
            preventDefault: () => {
              i = !0, t.preventDefault();
            },
            stopPropagation: () => {
              a = !0, t.stopPropagation();
            }
          });
        }
        i?.current && i.current(e);
      }
    }));
  }
  function b(e) {
    return l.use ? {
      fetchPriority: e
    } : {
      fetchpriority: e
    };
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  let y = "u" < typeof window ? l.useEffect : l.useLayoutEffect,
    v = (0, l.forwardRef)(({
      src: e,
      srcSet: t,
      sizes: r,
      height: i,
      width: a,
      decoding: s,
      className: o,
      style: d,
      fetchPriority: u,
      placeholder: c,
      loading: m,
      unoptimized: f,
      fill: h,
      onLoadRef: v,
      onLoadingCompleteRef: x,
      setBlurComplete: w,
      setShowAltText: _,
      sizesInput: j,
      onLoad: P,
      onError: E,
      ...S
    }, C) => {
      let O = (0, l.useRef)(!1),
        R = (0, l.useRef)(null);
      y(() => {
        let {
            current: e
          } = O,
          {
            current: t
          } = R;
        e || null === t || (E && (t.src = t.src), t.complete && g(t, c, v, x, w, f, j), O.current = !0);
      }, [e, c, v, x, E, f, j]);
      let k = (0, p.useMergedRef)(C, R);
      return (0, n.jsx)("img", {
        ...S,
        ...b(u),
        loading: m,
        width: a,
        height: i,
        decoding: s,
        "data-nimg": h ? "fill" : "1",
        className: o,
        style: d,
        sizes: r,
        srcSet: t,
        src: e,
        ref: k,
        onLoad: e => {
          g(e.currentTarget, c, v, x, w, f, j);
        },
        onError: e => {
          _(!0), "empty" !== c && w(!0), E && E(e);
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
    return e && s.default.preload ? (s.default.preload(t.src, r), null) : (0, n.jsx)(o.default, {
      children: (0, n.jsx)("link", {
        rel: "preload",
        href: t.srcSet ? void 0 : t.src,
        ...r
      }, "__nimg-" + t.src + t.srcSet + t.sizes)
    });
  }
  let w = (0, l.forwardRef)((e, t) => {
    let r = (0, l.useContext)(m.RouterContext),
      i = (0, l.useContext)(c.ImageConfigContext),
      a = (0, l.useMemo)(() => {
        let e = h || i || u.imageConfigDefault,
          t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
          r = e.deviceSizes.sort((e, t) => e - t),
          a = e.qualities?.sort((e, t) => e - t);
        return {
          ...e,
          allSizes: t,
          deviceSizes: r,
          qualities: a,
          localPatterns: "u" < typeof window ? i?.localPatterns : e.localPatterns
        };
      }, [i]),
      {
        onLoad: s,
        onLoadingComplete: o
      } = e,
      p = (0, l.useRef)(s);
    (0, l.useEffect)(() => {
      p.current = s;
    }, [s]);
    let g = (0, l.useRef)(o);
    (0, l.useEffect)(() => {
      g.current = o;
    }, [o]);
    let [b, y] = (0, l.useState)(!1),
      [w, _] = (0, l.useState)(!1),
      {
        props: j,
        meta: P
      } = (0, d.getImgProps)(e, {
        defaultLoader: f.default,
        imgConf: a,
        blurComplete: b,
        showAltText: w
      });
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(v, {
        ...j,
        unoptimized: P.unoptimized,
        placeholder: P.placeholder,
        fill: P.fill,
        onLoadRef: p,
        onLoadingCompleteRef: g,
        setBlurComplete: y,
        setShowAltText: _,
        sizesInput: e.sizes,
        ref: t
      }), P.preload ? (0, n.jsx)(x, {
        isAppRouter: !r,
        imgAttributes: j
      }) : null]
    });
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
