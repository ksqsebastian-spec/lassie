// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 665279.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "Image", {
    enumerable: !0,
    get: function () {
      return _;
    }
  });
  let i = e.r(330053),
    n = e.r(171266),
    a = e.r(281889),
    s = n._(e.r(513679)),
    o = i._(e.r(345078)),
    l = i._(e.r(111586)),
    u = e.r(18306),
    d = e.r(433198),
    c = e.r(453426),
    f = e.r(239351),
    m = i._(e.r(396674)),
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
  function g(e, t, r, i, n, a, s) {
    let o = e?.src;
    e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
      if (e.parentElement && e.isConnected) {
        if ("empty" !== t && n(!0), r?.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {
            writable: !1,
            value: e
          });
          let i = !1,
            n = !1;
          r.current({
            ...t,
            nativeEvent: t,
            currentTarget: e,
            target: e,
            isDefaultPrevented: () => i,
            isPropagationStopped: () => n,
            persist: () => {},
            preventDefault: () => {
              i = !0, t.preventDefault();
            },
            stopPropagation: () => {
              n = !0, t.stopPropagation();
            }
          });
        }
        i?.current && i.current(e);
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
  let y = "u" < typeof window ? s.useEffect : s.useLayoutEffect,
    v = (0, s.forwardRef)(({
      src: e,
      srcSet: t,
      sizes: r,
      height: i,
      width: n,
      decoding: o,
      className: l,
      style: u,
      fetchPriority: d,
      placeholder: c,
      loading: f,
      unoptimized: m,
      fill: h,
      onLoadRef: v,
      onLoadingCompleteRef: w,
      setBlurComplete: _,
      setShowAltText: x,
      sizesInput: P,
      onLoad: E,
      onError: j,
      ...S
    }, C) => {
      let O = (0, s.useRef)(!1),
        R = (0, s.useRef)(null);
      y(() => {
        let {
            current: e
          } = O,
          {
            current: t
          } = R;
        e || null === t || (j && (t.src = t.src), t.complete && g(t, c, v, w, _, m, P), O.current = !0);
      }, [e, c, v, w, j, m, P]);
      let I = (0, p.useMergedRef)(C, R);
      return (0, a.jsx)("img", {
        ...S,
        ...b(d),
        loading: f,
        width: n,
        height: i,
        decoding: o,
        "data-nimg": h ? "fill" : "1",
        className: l,
        style: u,
        sizes: r,
        srcSet: t,
        src: e,
        ref: I,
        onLoad: e => {
          g(e.currentTarget, c, v, w, _, m, P);
        },
        onError: e => {
          x(!0), "empty" !== c && _(!0), j && j(e);
        }
      });
    });
  function w({
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
    return e && o.default.preload ? (o.default.preload(t.src, r), null) : (0, a.jsx)(l.default, {
      children: (0, a.jsx)("link", {
        rel: "preload",
        href: t.srcSet ? void 0 : t.src,
        ...r
      }, "__nimg-" + t.src + t.srcSet + t.sizes)
    });
  }
  let _ = (0, s.forwardRef)((e, t) => {
    let r = (0, s.useContext)(f.RouterContext),
      i = (0, s.useContext)(c.ImageConfigContext),
      n = (0, s.useMemo)(() => {
        let e = h || i || d.imageConfigDefault,
          t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
          r = e.deviceSizes.sort((e, t) => e - t),
          n = e.qualities?.sort((e, t) => e - t);
        return {
          ...e,
          allSizes: t,
          deviceSizes: r,
          qualities: n,
          localPatterns: "u" < typeof window ? i?.localPatterns : e.localPatterns
        };
      }, [i]),
      {
        onLoad: o,
        onLoadingComplete: l
      } = e,
      p = (0, s.useRef)(o);
    (0, s.useEffect)(() => {
      p.current = o;
    }, [o]);
    let g = (0, s.useRef)(l);
    (0, s.useEffect)(() => {
      g.current = l;
    }, [l]);
    let [b, y] = (0, s.useState)(!1),
      [_, x] = (0, s.useState)(!1),
      {
        props: P,
        meta: E
      } = (0, u.getImgProps)(e, {
        defaultLoader: m.default,
        imgConf: n,
        blurComplete: b,
        showAltText: _
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(v, {
        ...P,
        unoptimized: E.unoptimized,
        placeholder: E.placeholder,
        fill: E.fill,
        onLoadRef: p,
        onLoadingCompleteRef: g,
        setBlurComplete: y,
        setShowAltText: x,
        sizesInput: e.sizes,
        ref: t
      }), E.preload ? (0, a.jsx)(w, {
        isAppRouter: !r,
        imgAttributes: P
      }) : null]
    });
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
