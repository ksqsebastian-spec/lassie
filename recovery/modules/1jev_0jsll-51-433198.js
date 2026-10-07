// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 433198.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var i = {
    VALID_LOADERS: function () {
      return a;
    },
    imageConfigDefault: function () {
      return s;
    }
  };
  for (var n in i) Object.defineProperty(r, n, {
    enumerable: !0,
    get: i[n]
  });
  let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
    s = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 14400,
      formats: ["image/webp"],
      maximumDiskCacheSize: void 0,
      maximumRedirects: 3,
      maximumResponseBody: 5e7,
      dangerouslyAllowLocalIP: !1,
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: [75],
      unoptimized: !1,
      customCacheHandler: !1
    };
};
