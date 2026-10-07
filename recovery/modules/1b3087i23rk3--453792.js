// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 453792.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    default: function () {
      return u;
    },
    getImageProps: function () {
      return d;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let i = e.r(330053),
    s = e.r(18306),
    o = e.r(665279),
    l = i._(e.r(396674));
  function d(e) {
    let {
      props: t
    } = (0, s.getImgProps)(e, {
      defaultLoader: l.default,
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
  let u = o.Image;
};
