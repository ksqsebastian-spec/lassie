// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 18306.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "getImgProps", {
    enumerable: !0,
    get: function () {
      return d;
    }
  });
  let n = e.r(823971),
    a = e.r(521222),
    i = e.r(433198),
    s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function o(e) {
    return void 0 !== e.default;
  }
  function l(e) {
    return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
  }
  function d({
    src: e,
    sizes: t,
    unoptimized: r = !1,
    priority: u = !1,
    preload: c = !1,
    loading: f,
    className: p,
    quality: m,
    width: h,
    height: g,
    fill: b = !1,
    style: w,
    overrideSrc: v,
    onLoad: x,
    onLoadingComplete: y,
    placeholder: S = "empty",
    blurDataURL: E,
    fetchPriority: P,
    decoding: R = "async",
    layout: j,
    objectFit: k,
    objectPosition: T,
    lazyBoundary: A,
    lazyRoot: C,
    ...N
  }, O) {
    var L;
    let _,
      I,
      M,
      {
        imgConf: D,
        showAltText: $,
        blurComplete: F,
        defaultLoader: U
      } = O,
      B = D || i.imageConfigDefault;
    if ("allSizes" in B) _ = B;else {
      let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
        t = B.deviceSizes.sort((e, t) => e - t),
        r = B.qualities?.sort((e, t) => e - t);
      _ = {
        ...B,
        allSizes: e,
        deviceSizes: t,
        qualities: r
      };
    }
    if (void 0 === U) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
      value: "E163",
      enumerable: !1,
      configurable: !0
    });
    let q = N.loader || U;
    delete N.loader, delete N.srcSet;
    let H = "__next_img_default" in q;
    if (H) {
      if ("custom" === _.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
        value: "E252",
        enumerable: !1,
        configurable: !0
      });
    } else {
      let e = q;
      q = t => {
        let {
          config: r,
          ...n
        } = t;
        return e(n);
      };
    }
    if (j) {
      "fill" === j && (b = !0);
      let e = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }[j];
      e && (w = {
        ...w,
        ...e
      });
      let r = {
        responsive: "100vw",
        fill: "100vw"
      }[j];
      r && !t && (t = r);
    }
    let W = "",
      z = l(h),
      K = l(g);
    if ((L = e) && "object" == typeof L && (o(L) || void 0 !== L.src)) {
      let t = o(e) ? e.default : e;
      if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
        value: "E460",
        enumerable: !1,
        configurable: !0
      });
      if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
        value: "E48",
        enumerable: !1,
        configurable: !0
      });
      if (I = t.blurWidth, M = t.blurHeight, E = E || t.blurDataURL, W = t.src, !b) if (z || K) {
        if (z && !K) {
          let e = z / t.width;
          K = Math.round(t.height * e);
        } else if (!z && K) {
          let e = K / t.height;
          z = Math.round(t.width * e);
        }
      } else z = t.width, K = t.height;
    }
    let X = !u && !c && ("lazy" === f || void 0 === f);
    (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, X = !1), _.unoptimized && (r = !0), H && !_.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
    let G = l(m),
      Y = Object.assign(b ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: k,
        objectPosition: T
      } : {}, $ ? {} : {
        color: "transparent"
      }, w),
      V = F || "empty" === S ? null : "blur" === S ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({
        widthInt: z,
        heightInt: K,
        blurWidth: I,
        blurHeight: M,
        blurDataURL: E || "",
        objectFit: Y.objectFit
      })}")` : `url("${S}")`,
      J = s.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
      Q = V ? {
        backgroundSize: J,
        backgroundPosition: Y.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: V
      } : {},
      Z = function ({
        config: e,
        src: t,
        unoptimized: r,
        width: a,
        quality: i,
        sizes: s,
        loader: o
      }) {
        if (r) {
          if (t.startsWith("/") && !t.startsWith("//")) {
            let e = (0, n.getDeploymentId)();
            if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) e = void 0;else if (e) {
              let r = t.indexOf("?");
              if (-1 !== r) {
                let n = new URLSearchParams(t.slice(r + 1));
                n.get("dpl") || (n.append("dpl", e), t = t.slice(0, r) + "?" + n.toString());
              } else t += `?dpl=${e}`;
            }
          }
          return {
            src: t,
            srcSet: void 0,
            sizes: void 0
          };
        }
        let {
            widths: l,
            kind: d
          } = function ({
            deviceSizes: e,
            allSizes: t
          }, r, n) {
            if (n) {
              let r = /(^|\s)(1?\d?\d)vw/g,
                a = [];
              for (let e; e = r.exec(n);) a.push(parseInt(e[2]));
              if (a.length) {
                let r = .01 * Math.min(...a);
                return {
                  widths: t.filter(t => t >= e[0] * r),
                  kind: "w"
                };
              }
              return {
                widths: t,
                kind: "w"
              };
            }
            return "number" != typeof r ? {
              widths: e,
              kind: "w"
            } : {
              widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
              kind: "x"
            };
          }(e, a, s),
          u = l.length - 1;
        return {
          sizes: s || "w" !== d ? s : "100vw",
          srcSet: l.map((r, n) => `${o({
            config: e,
            src: t,
            quality: i,
            width: r
          })} ${"w" === d ? r : n + 1}${d}`).join(", "),
          src: o({
            config: e,
            src: t,
            quality: i,
            width: l[u]
          })
        };
      }({
        config: _,
        src: e,
        unoptimized: r,
        width: z,
        quality: G,
        sizes: t,
        loader: q
      }),
      ee = X ? "lazy" : f;
    return {
      props: {
        ...N,
        loading: ee,
        fetchPriority: P,
        width: z,
        height: K,
        decoding: R,
        className: p,
        style: {
          ...Y,
          ...Q
        },
        sizes: Z.sizes,
        srcSet: Z.srcSet,
        src: v || Z.src
      },
      meta: {
        unoptimized: r,
        preload: c || u,
        placeholder: S,
        fill: b
      }
    };
  }
};
