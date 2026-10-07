// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 699421.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "getNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let r = e.r(754130),
    a = e.r(905867),
    i = e.r(673381);
  function o(e, t) {
    let {
        basePath: n,
        i18n: o,
        trailingSlash: l
      } = t.nextConfig ?? {},
      s = {
        pathname: e,
        trailingSlash: "/" !== e ? e.endsWith("/") : l
      };
    n && (0, i.pathHasPrefix)(s.pathname, n) && (s.pathname = (0, a.removePathPrefix)(s.pathname, n), s.basePath = n);
    let u = s.pathname;
    if (s.pathname.startsWith("/_next/data/") && s.pathname.endsWith(".json")) {
      let e = s.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
      s.buildId = e[0], u = "index" !== e[1] ? `/${e.slice(1).join("/")}` : "/", !0 === t.parseData && (s.pathname = u);
    }
    if (o) {
      let e = t.i18nProvider ? t.i18nProvider.analyze(s.pathname) : (0, r.normalizeLocalePath)(s.pathname, o.locales);
      s.locale = e.detectedLocale, s.pathname = e.pathname ?? s.pathname, !e.detectedLocale && s.buildId && (e = t.i18nProvider ? t.i18nProvider.analyze(u) : (0, r.normalizeLocalePath)(u, o.locales)).detectedLocale && (s.locale = e.detectedLocale);
    }
    return s;
  }
};
