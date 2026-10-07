// Recovered from 31hcqwixokale.js. Runtime module IDs: 665279.
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
  let i = e.r(330053),
    n = e.r(171266),
    a = e.r(281889),
    o = n._(e.r(513679)),
    l = i._(e.r(345078)),
    s = i._(e.r(111586)),
    u = e.r(18306),
    d = e.r(433198),
    c = e.r(453426),
    f = e.r(239351),
    m = i._(e.r(396674)),
    g = e.r(81378),
    p = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
    };
  function h(e, t, r, i, n, a, o) {
    let l = e?.src;
    e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
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
    return o.use ? {
      fetchPriority: e
    } : {
      fetchpriority: e
    };
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  let v = "u" < typeof window ? o.useEffect : o.useLayoutEffect,
    w = (0, o.forwardRef)(({
      src: e,
      srcSet: t,
      sizes: r,
      height: i,
      width: n,
      decoding: l,
      className: s,
      style: u,
      fetchPriority: d,
      placeholder: c,
      loading: f,
      unoptimized: m,
      fill: p,
      onLoadRef: w,
      onLoadingCompleteRef: x,
      setBlurComplete: y,
      setShowAltText: S,
      sizesInput: j,
      onLoad: _,
      onError: E,
      ...R
    }, P) => {
      let k = (0, o.useRef)(!1),
        O = (0, o.useRef)(null);
      v(() => {
        let {
            current: e
          } = k,
          {
            current: t
          } = O;
        e || null === t || (E && (t.src = t.src), t.complete && h(t, c, w, x, y, m, j), k.current = !0);
      }, [e, c, w, x, E, m, j]);
      let T = (0, g.useMergedRef)(P, O);
      return (0, a.jsx)("img", {
        ...R,
        ...b(d),
        loading: f,
        width: n,
        height: i,
        decoding: l,
        "data-nimg": p ? "fill" : "1",
        className: s,
        style: u,
        sizes: r,
        srcSet: t,
        src: e,
        ref: T,
        onLoad: e => {
          h(e.currentTarget, c, w, x, y, m, j);
        },
        onError: e => {
          S(!0), "empty" !== c && y(!0), E && E(e);
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
    return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, a.jsx)(s.default, {
      children: (0, a.jsx)("link", {
        rel: "preload",
        href: t.srcSet ? void 0 : t.src,
        ...r
      }, "__nimg-" + t.src + t.srcSet + t.sizes)
    });
  }
  let y = (0, o.forwardRef)((e, t) => {
    let r = (0, o.useContext)(f.RouterContext),
      i = (0, o.useContext)(c.ImageConfigContext),
      n = (0, o.useMemo)(() => {
        let e = p || i || d.imageConfigDefault,
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
        onLoad: l,
        onLoadingComplete: s
      } = e,
      g = (0, o.useRef)(l);
    (0, o.useEffect)(() => {
      g.current = l;
    }, [l]);
    let h = (0, o.useRef)(s);
    (0, o.useEffect)(() => {
      h.current = s;
    }, [s]);
    let [b, v] = (0, o.useState)(!1),
      [y, S] = (0, o.useState)(!1),
      {
        props: j,
        meta: _
      } = (0, u.getImgProps)(e, {
        defaultLoader: m.default,
        imgConf: n,
        blurComplete: b,
        showAltText: y
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(w, {
        ...j,
        unoptimized: _.unoptimized,
        placeholder: _.placeholder,
        fill: _.fill,
        onLoadRef: g,
        onLoadingCompleteRef: h,
        setBlurComplete: v,
        setShowAltText: S,
        sizesInput: e.sizes,
        ref: t
      }), _.preload ? (0, a.jsx)(x, {
        isAppRouter: !r,
        imgAttributes: j
      }) : null]
    });
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
