// Recovered from 31hcqwixokale.js. Runtime module IDs: 396674.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let i = e.r(156974),
    n = e.r(823971);
  function a({
    config: e,
    src: t,
    width: r,
    quality: o
  }) {
    let l = (0, n.getDeploymentId)();
    if (t.startsWith("/") && !t.startsWith("//")) if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) l = void 0;else {
      let e = t.indexOf("?");
      if (-1 !== e) {
        let r = new URLSearchParams(t.slice(e + 1)),
          i = r.get("dpl");
        if (i) {
          l = i, r.delete("dpl");
          let n = r.toString();
          t = t.slice(0, e) + (n ? "?" + n : "");
        }
      }
    }
    if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
      value: "E871",
      enumerable: !1,
      configurable: !0
    });
    let s = (0, i.findClosestQuality)(o, e);
    return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`;
  }
  a.__next_img_default = !0;
  let o = a;
};
