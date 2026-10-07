// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 396674.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "default", {
    enumerable: !0,
    get: function () {
      return s;
    }
  });
  let r = e.r(156974),
    o = e.r(823971);
  function n({
    config: e,
    src: t,
    width: i,
    quality: s
  }) {
    let l = (0, o.getDeploymentId)();
    if (t.startsWith("/") && !t.startsWith("//")) if (t.includes("/_next/static/immutable") && !(0, o.getAssetToken)()) l = void 0;else {
      let e = t.indexOf("?");
      if (-1 !== e) {
        let i = new URLSearchParams(t.slice(e + 1)),
          r = i.get("dpl");
        if (r) {
          l = r, i.delete("dpl");
          let o = i.toString();
          t = t.slice(0, e) + (o ? "?" + o : "");
        }
      }
    }
    if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
      value: "E871",
      enumerable: !1,
      configurable: !0
    });
    let a = (0, r.findClosestQuality)(s, e);
    return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${a}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`;
  }
  n.__next_img_default = !0;
  let s = n;
};
