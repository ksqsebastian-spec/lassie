// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 453792.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  var r = {
    default: function () {
      return c;
    },
    getImageProps: function () {
      return u;
    }
  };
  for (var o in r) Object.defineProperty(i, o, {
    enumerable: !0,
    get: r[o]
  });
  let n = e.r(330053),
    s = e.r(18306),
    l = e.r(665279),
    a = n._(e.r(396674));
  function u(e) {
    let {
      props: t
    } = (0, s.getImgProps)(e, {
      defaultLoader: a.default,
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
    for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
    return {
      props: t
    };
  }
  let c = l.Image;
};
