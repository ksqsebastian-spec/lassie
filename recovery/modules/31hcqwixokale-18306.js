// Recovered from 31hcqwixokale.js. Runtime module IDs: 18306.
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
    o = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function l(e) {
    return void 0 !== e.default;
  }
  function s(e) {
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
    quality: g,
    width: p,
    height: h,
    fill: b = !1,
    style: v,
    overrideSrc: w,
    onLoad: x,
    onLoadingComplete: y,
    placeholder: S = "empty",
    blurDataURL: j,
    fetchPriority: _,
    decoding: E = "async",
    layout: R,
    objectFit: P,
    objectPosition: k,
    lazyBoundary: O,
    lazyRoot: T,
    ...A
  }, C) {
    var M;
    let N,
      L,
      z,
      {
        imgConf: $,
        showAltText: I,
        blurComplete: U,
        defaultLoader: D
      } = C,
      B = $ || a.imageConfigDefault;
    if ("allSizes" in B) N = B;else {
      let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
        t = B.deviceSizes.sort((e, t) => e - t),
        r = B.qualities?.sort((e, t) => e - t);
      N = {
        ...B,
        allSizes: e,
        deviceSizes: t,
        qualities: r
      };
    }
    if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
      value: "E163",
      enumerable: !1,
      configurable: !0
    });
    let F = A.loader || D;
    delete A.loader, delete A.srcSet;
    let q = "__next_img_default" in F;
    if (q) {
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
          config: r,
          ...i
        } = t;
        return e(i);
      };
    }
    if (R) {
      "fill" === R && (b = !0);
      let e = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }[R];
      e && (v = {
        ...v,
        ...e
      });
      let r = {
        responsive: "100vw",
        fill: "100vw"
      }[R];
      r && !t && (t = r);
    }
    let X = "",
      H = s(p),
      W = s(h);
    if ((M = e) && "object" == typeof M && (l(M) || void 0 !== M.src)) {
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
      if (L = t.blurWidth, z = t.blurHeight, j = j || t.blurDataURL, X = t.src, !b) if (H || W) {
        if (H && !W) {
          let e = H / t.width;
          W = Math.round(t.height * e);
        } else if (!H && W) {
          let e = W / t.height;
          H = Math.round(t.width * e);
        }
      } else H = t.width, W = t.height;
    }
    let Y = !d && !c && ("lazy" === f || void 0 === f);
    (!(e = "string" == typeof e ? e : X) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, Y = !1), N.unoptimized && (r = !0), q && !N.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
    let G = s(g),
      K = Object.assign(b ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: P,
        objectPosition: k
      } : {}, I ? {} : {
        color: "transparent"
      }, v),
      V = U || "empty" === S ? null : "blur" === S ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
        widthInt: H,
        heightInt: W,
        blurWidth: L,
        blurHeight: z,
        blurDataURL: j || "",
        objectFit: K.objectFit
      })}")` : `url("${S}")`,
      J = o.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
      Q = V ? {
        backgroundSize: J,
        backgroundPosition: K.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: V
      } : {},
      Z = function ({
        config: e,
        src: t,
        unoptimized: r,
        width: n,
        quality: a,
        sizes: o,
        loader: l
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
            widths: s,
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
          }(e, n, o),
          d = s.length - 1;
        return {
          sizes: o || "w" !== u ? o : "100vw",
          srcSet: s.map((r, i) => `${l({
            config: e,
            src: t,
            quality: a,
            width: r
          })} ${"w" === u ? r : i + 1}${u}`).join(", "),
          src: l({
            config: e,
            src: t,
            quality: a,
            width: s[d]
          })
        };
      }({
        config: N,
        src: e,
        unoptimized: r,
        width: H,
        quality: G,
        sizes: t,
        loader: F
      }),
      ee = Y ? "lazy" : f;
    return {
      props: {
        ...A,
        loading: ee,
        fetchPriority: _,
        width: H,
        height: W,
        decoding: E,
        className: m,
        style: {
          ...K,
          ...Q
        },
        sizes: Z.sizes,
        srcSet: Z.srcSet,
        src: w || Z.src
      },
      meta: {
        unoptimized: r,
        preload: c || d,
        placeholder: S,
        fill: b
      }
    };
  }
};
