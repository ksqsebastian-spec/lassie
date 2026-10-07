// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 18306.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "getImgProps", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let r = e.r(823971),
    o = e.r(521222),
    n = e.r(433198),
    s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function l(e) {
    return void 0 !== e.default;
  }
  function a(e) {
    return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
  }
  function u({
    src: e,
    sizes: t,
    unoptimized: i = !1,
    priority: c = !1,
    preload: h = !1,
    loading: d,
    className: p,
    quality: f,
    width: m,
    height: g,
    fill: v = !1,
    style: w,
    overrideSrc: b,
    onLoad: y,
    onLoadingComplete: S,
    placeholder: C = "empty",
    blurDataURL: x,
    fetchPriority: E,
    decoding: _ = "async",
    layout: L,
    objectFit: j,
    objectPosition: T,
    lazyBoundary: O,
    lazyRoot: R,
    ...P
  }, M) {
    var z;
    let N,
      k,
      A,
      {
        imgConf: I,
        showAltText: H,
        blurComplete: D,
        defaultLoader: W
      } = M,
      B = I || n.imageConfigDefault;
    if ("allSizes" in B) N = B;else {
      let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
        t = B.deviceSizes.sort((e, t) => e - t),
        i = B.qualities?.sort((e, t) => e - t);
      N = {
        ...B,
        allSizes: e,
        deviceSizes: t,
        qualities: i
      };
    }
    if (void 0 === W) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
      value: "E163",
      enumerable: !1,
      configurable: !0
    });
    let F = P.loader || W;
    delete P.loader, delete P.srcSet;
    let U = "__next_img_default" in F;
    if (U) {
      if ("custom" === N.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
        value: "E252",
        enumerable: !1,
        configurable: !0
      });
    } else {
      let e = F;
      F = t => {
        let {
          config: i,
          ...r
        } = t;
        return e(r);
      };
    }
    if (L) {
      "fill" === L && (v = !0);
      let e = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }[L];
      e && (w = {
        ...w,
        ...e
      });
      let i = {
        responsive: "100vw",
        fill: "100vw"
      }[L];
      i && !t && (t = i);
    }
    let V = "",
      $ = a(m),
      q = a(g);
    if ((z = e) && "object" == typeof z && (l(z) || void 0 !== z.src)) {
      let t = l(e) ? e.default : e;
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
      if (k = t.blurWidth, A = t.blurHeight, x = x || t.blurDataURL, V = t.src, !v) if ($ || q) {
        if ($ && !q) {
          let e = $ / t.width;
          q = Math.round(t.height * e);
        } else if (!$ && q) {
          let e = q / t.height;
          $ = Math.round(t.width * e);
        }
      } else $ = t.width, q = t.height;
    }
    let X = !c && !h && ("lazy" === d || void 0 === d);
    (!(e = "string" == typeof e ? e : V) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0, X = !1), N.unoptimized && (i = !0), U && !N.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
    let Y = a(f),
      Z = Object.assign(v ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: j,
        objectPosition: T
      } : {}, H ? {} : {
        color: "transparent"
      }, w),
      G = D || "empty" === C ? null : "blur" === C ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)({
        widthInt: $,
        heightInt: q,
        blurWidth: k,
        blurHeight: A,
        blurDataURL: x || "",
        objectFit: Z.objectFit
      })}")` : `url("${C}")`,
      K = s.includes(Z.objectFit) ? "fill" === Z.objectFit ? "100% 100%" : "cover" : Z.objectFit,
      J = G ? {
        backgroundSize: K,
        backgroundPosition: Z.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: G
      } : {},
      Q = function ({
        config: e,
        src: t,
        unoptimized: i,
        width: o,
        quality: n,
        sizes: s,
        loader: l
      }) {
        if (i) {
          if (t.startsWith("/") && !t.startsWith("//")) {
            let e = (0, r.getDeploymentId)();
            if (t.includes("/_next/static/immutable") && !(0, r.getAssetToken)()) e = void 0;else if (e) {
              let i = t.indexOf("?");
              if (-1 !== i) {
                let r = new URLSearchParams(t.slice(i + 1));
                r.get("dpl") || (r.append("dpl", e), t = t.slice(0, i) + "?" + r.toString());
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
            widths: a,
            kind: u
          } = function ({
            deviceSizes: e,
            allSizes: t
          }, i, r) {
            if (r) {
              let i = /(^|\s)(1?\d?\d)vw/g,
                o = [];
              for (let e; e = i.exec(r);) o.push(parseInt(e[2]));
              if (o.length) {
                let i = .01 * Math.min(...o);
                return {
                  widths: t.filter(t => t >= e[0] * i),
                  kind: "w"
                };
              }
              return {
                widths: t,
                kind: "w"
              };
            }
            return "number" != typeof i ? {
              widths: e,
              kind: "w"
            } : {
              widths: [...new Set([i, 2 * i].map(e => t.find(t => t >= e) || t[t.length - 1]))],
              kind: "x"
            };
          }(e, o, s),
          c = a.length - 1;
        return {
          sizes: s || "w" !== u ? s : "100vw",
          srcSet: a.map((i, r) => `${l({
            config: e,
            src: t,
            quality: n,
            width: i
          })} ${"w" === u ? i : r + 1}${u}`).join(", "),
          src: l({
            config: e,
            src: t,
            quality: n,
            width: a[c]
          })
        };
      }({
        config: N,
        src: e,
        unoptimized: i,
        width: $,
        quality: Y,
        sizes: t,
        loader: F
      }),
      ee = X ? "lazy" : d;
    return {
      props: {
        ...P,
        loading: ee,
        fetchPriority: E,
        width: $,
        height: q,
        decoding: _,
        className: p,
        style: {
          ...Z,
          ...J
        },
        sizes: Q.sizes,
        srcSet: Q.srcSet,
        src: b || Q.src
      },
      meta: {
        unoptimized: i,
        preload: h || c,
        placeholder: C,
        fill: v
      }
    };
  }
};
