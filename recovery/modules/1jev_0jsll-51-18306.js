// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 18306.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "getImgProps", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let i = e.r(823971),
    n = e.r(521222),
    a = e.r(433198),
    s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function o(e) {
    return void 0 !== e.default;
  }
  function l(e) {
    return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
  }
  function u({
    src: e,
    sizes: t,
    unoptimized: r = !1,
    priority: d = !1,
    preload: c = !1,
    loading: f,
    className: m,
    quality: p,
    width: h,
    height: g,
    fill: b = !1,
    style: y,
    overrideSrc: v,
    onLoad: w,
    onLoadingComplete: _,
    placeholder: x = "empty",
    blurDataURL: P,
    fetchPriority: E,
    decoding: j = "async",
    layout: S,
    objectFit: C,
    objectPosition: O,
    lazyBoundary: R,
    lazyRoot: I,
    ...M
  }, z) {
    var A;
    let T,
      L,
      N,
      {
        imgConf: $,
        showAltText: D,
        blurComplete: k,
        defaultLoader: U
      } = z,
      F = $ || a.imageConfigDefault;
    if ("allSizes" in F) T = F;else {
      let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
        t = F.deviceSizes.sort((e, t) => e - t),
        r = F.qualities?.sort((e, t) => e - t);
      T = {
        ...F,
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
    let B = M.loader || U;
    delete M.loader, delete M.srcSet;
    let q = "__next_img_default" in B;
    if (q) {
      if ("custom" === T.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
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
    let W = "",
      G = l(h),
      X = l(g);
    if ((A = e) && "object" == typeof A && (o(A) || void 0 !== A.src)) {
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
      if (L = t.blurWidth, N = t.blurHeight, P = P || t.blurDataURL, W = t.src, !b) if (G || X) {
        if (G && !X) {
          let e = G / t.width;
          X = Math.round(t.height * e);
        } else if (!G && X) {
          let e = X / t.height;
          G = Math.round(t.width * e);
        }
      } else G = t.width, X = t.height;
    }
    let H = !d && !c && ("lazy" === f || void 0 === f);
    (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, H = !1), T.unoptimized && (r = !0), q && !T.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
    let V = l(p),
      Z = Object.assign(b ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: C,
        objectPosition: O
      } : {}, D ? {} : {
        color: "transparent"
      }, y),
      Y = k || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
        widthInt: G,
        heightInt: X,
        blurWidth: L,
        blurHeight: N,
        blurDataURL: P || "",
        objectFit: Z.objectFit
      })}")` : `url("${x}")`,
      J = s.includes(Z.objectFit) ? "fill" === Z.objectFit ? "100% 100%" : "cover" : Z.objectFit,
      K = Y ? {
        backgroundSize: J,
        backgroundPosition: Z.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: Y
      } : {},
      Q = function ({
        config: e,
        src: t,
        unoptimized: r,
        width: n,
        quality: a,
        sizes: s,
        loader: o
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
            widths: l,
            kind: u
          } = function ({
            deviceSizes: e,
            allSizes: t
          }, r, i) {
            if (i) {
              let r = /(^|\s)(1?\d?\d)vw/g,
                n = [];
              for (let e; e = r.exec(i);) n.push(parseInt(e[2]));
              if (n.length) {
                let r = .01 * Math.min(...n);
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
          }(e, n, s),
          d = l.length - 1;
        return {
          sizes: s || "w" !== u ? s : "100vw",
          srcSet: l.map((r, i) => `${o({
            config: e,
            src: t,
            quality: a,
            width: r
          })} ${"w" === u ? r : i + 1}${u}`).join(", "),
          src: o({
            config: e,
            src: t,
            quality: a,
            width: l[d]
          })
        };
      }({
        config: T,
        src: e,
        unoptimized: r,
        width: G,
        quality: V,
        sizes: t,
        loader: B
      }),
      ee = H ? "lazy" : f;
    return {
      props: {
        ...M,
        loading: ee,
        fetchPriority: E,
        width: G,
        height: X,
        decoding: j,
        className: m,
        style: {
          ...Z,
          ...K
        },
        sizes: Q.sizes,
        srcSet: Q.srcSet,
        src: v || Q.src
      },
      meta: {
        unoptimized: r,
        preload: c || d,
        placeholder: x,
        fill: b
      }
    };
  }
};
