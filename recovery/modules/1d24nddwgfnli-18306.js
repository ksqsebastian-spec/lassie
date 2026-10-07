// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 18306.
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
  let i = e.r(823971),
    a = e.r(521222),
    n = e.r(433198),
    l = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function s(e) {
    return void 0 !== e.default;
  }
  function o(e) {
    return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
  }
  function d({
    src: e,
    sizes: t,
    unoptimized: r = !1,
    priority: u = !1,
    preload: c = !1,
    loading: m,
    className: f,
    quality: p,
    width: h,
    height: g,
    fill: b = !1,
    style: y,
    overrideSrc: v,
    onLoad: x,
    onLoadingComplete: w,
    placeholder: _ = "empty",
    blurDataURL: j,
    fetchPriority: P,
    decoding: E = "async",
    layout: S,
    objectFit: C,
    objectPosition: O,
    lazyBoundary: R,
    lazyRoot: k,
    ...A
  }, z) {
    var M;
    let I,
      N,
      D,
      {
        imgConf: T,
        showAltText: $,
        blurComplete: F,
        defaultLoader: L
      } = z,
      U = T || n.imageConfigDefault;
    if ("allSizes" in U) I = U;else {
      let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
        t = U.deviceSizes.sort((e, t) => e - t),
        r = U.qualities?.sort((e, t) => e - t);
      I = {
        ...U,
        allSizes: e,
        deviceSizes: t,
        qualities: r
      };
    }
    if (void 0 === L) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
      value: "E163",
      enumerable: !1,
      configurable: !0
    });
    let B = A.loader || L;
    delete A.loader, delete A.srcSet;
    let W = "__next_img_default" in B;
    if (W) {
      if ("custom" === I.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
        value: "E252",
        enumerable: !1,
        configurable: !0
      });
    } else {
      let e = B;
      B = t => {
        let {
          config: r,
          ...i
        } = t;
        return e(i);
      };
    }
    if (S) {
      "fill" === S && (b = !0);
      let e = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }[S];
      e && (y = {
        ...y,
        ...e
      });
      let r = {
        responsive: "100vw",
        fill: "100vw"
      }[S];
      r && !t && (t = r);
    }
    let G = "",
      q = o(h),
      X = o(g);
    if ((M = e) && "object" == typeof M && (s(M) || void 0 !== M.src)) {
      let t = s(e) ? e.default : e;
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
      if (N = t.blurWidth, D = t.blurHeight, j = j || t.blurDataURL, G = t.src, !b) if (q || X) {
        if (q && !X) {
          let e = q / t.width;
          X = Math.round(t.height * e);
        } else if (!q && X) {
          let e = X / t.height;
          q = Math.round(t.width * e);
        }
      } else q = t.width, X = t.height;
    }
    let H = !u && !c && ("lazy" === m || void 0 === m);
    (!(e = "string" == typeof e ? e : G) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, H = !1), I.unoptimized && (r = !0), W && !I.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
    let V = o(p),
      Y = Object.assign(b ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: C,
        objectPosition: O
      } : {}, $ ? {} : {
        color: "transparent"
      }, y),
      Z = F || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({
        widthInt: q,
        heightInt: X,
        blurWidth: N,
        blurHeight: D,
        blurDataURL: j || "",
        objectFit: Y.objectFit
      })}")` : `url("${_}")`,
      J = l.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
      K = Z ? {
        backgroundSize: J,
        backgroundPosition: Y.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: Z
      } : {},
      Q = function ({
        config: e,
        src: t,
        unoptimized: r,
        width: a,
        quality: n,
        sizes: l,
        loader: s
      }) {
        if (r) {
          if (t.startsWith("/") && !t.startsWith("//")) {
            let e = (0, i.getDeploymentId)();
            if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) e = void 0;else if (e) {
              let r = t.indexOf("?");
              if (-1 !== r) {
                let i = new URLSearchParams(t.slice(r + 1));
                i.get("dpl") || (i.append("dpl", e), t = t.slice(0, r) + "?" + i.toString());
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
            widths: o,
            kind: d
          } = function ({
            deviceSizes: e,
            allSizes: t
          }, r, i) {
            if (i) {
              let r = /(^|\s)(1?\d?\d)vw/g,
                a = [];
              for (let e; e = r.exec(i);) a.push(parseInt(e[2]));
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
          }(e, a, l),
          u = o.length - 1;
        return {
          sizes: l || "w" !== d ? l : "100vw",
          srcSet: o.map((r, i) => `${s({
            config: e,
            src: t,
            quality: n,
            width: r
          })} ${"w" === d ? r : i + 1}${d}`).join(", "),
          src: s({
            config: e,
            src: t,
            quality: n,
            width: o[u]
          })
        };
      }({
        config: I,
        src: e,
        unoptimized: r,
        width: q,
        quality: V,
        sizes: t,
        loader: B
      }),
      ee = H ? "lazy" : m;
    return {
      props: {
        ...A,
        loading: ee,
        fetchPriority: P,
        width: q,
        height: X,
        decoding: E,
        className: f,
        style: {
          ...Y,
          ...K
        },
        sizes: Q.sizes,
        srcSet: Q.srcSet,
        src: v || Q.src
      },
      meta: {
        unoptimized: r,
        preload: c || u,
        placeholder: _,
        fill: b
      }
    };
  }
};
