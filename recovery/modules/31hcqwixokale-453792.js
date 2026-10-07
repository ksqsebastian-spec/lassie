// Recovered from 31hcqwixokale.js. Runtime module IDs: 453792.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var i = {
    default: function () {
      return d;
    },
    getImageProps: function () {
      return u;
    }
  };
  for (var n in i) Object.defineProperty(r, n, {
    enumerable: !0,
    get: i[n]
  });
  let a = e.r(330053),
    o = e.r(18306),
    l = e.r(665279),
    s = a._(e.r(396674));
  function u(e) {
    let {
      props: t
    } = (0, o.getImgProps)(e, {
      defaultLoader: s.default,
      imgConf: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
      }
    });
    for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
    return {
      props: t
    };
  }
  let d = l.Image;
};
