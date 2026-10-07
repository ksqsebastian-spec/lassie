// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 532482.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "formatNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let r = e.r(842592),
    a = e.r(458173),
    i = e.r(548590),
    o = e.r(32481);
  function l(e) {
    let t = (0, o.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
    return (e.buildId || !e.trailingSlash) && (t = (0, r.removeTrailingSlash)(t)), e.buildId && (t = (0, i.addPathSuffix)((0, a.addPathPrefix)(t, `/_next/data/${e.buildId}`), "/" === e.pathname ? "index.json" : ".json")), t = (0, a.addPathPrefix)(t, e.basePath), !e.buildId && e.trailingSlash ? t.endsWith("/") ? t : (0, i.addPathSuffix)(t, "/") : (0, r.removeTrailingSlash)(t);
  }
};
