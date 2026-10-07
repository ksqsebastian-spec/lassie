// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 369591.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "resolveHref", {
    enumerable: !0,
    get: function () {
      return p;
    }
  });
  let r = e.r(398686),
    a = e.r(737409),
    i = e.r(162358),
    o = e.r(478573),
    l = e.r(55179),
    s = e.r(743817),
    u = e.r(371408),
    c = e.r(94001),
    d = e.r(102431),
    f = e.r(258961);
  function p(e, t, n) {
    let p,
      h = "string" == typeof t ? t : (0, a.formatWithValidation)(t),
      m = h.match(/^[a-z][a-z0-9+.-]*:\/\//i),
      g = m ? h.slice(m[0].length) : h;
    if ((g.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
      console.error(`Invalid href '${h}' passed to next/router in page: '${e.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
      let t = (0, o.normalizeRepeatedSlashes)(g);
      h = (m ? m[0] : "") + t;
    }
    if (!(0, s.isLocalURL)(h)) return n ? [h] : h;
    try {
      let t = h.startsWith("#") ? e.asPath : e.pathname;
      if (h.startsWith("?") && (t = e.asPath, (0, u.isDynamicRoute)(e.pathname))) {
        t = e.pathname;
        let n = (0, d.getRouteRegex)(e.pathname);
        (0, f.getRouteMatcher)(n)(e.asPath) || (t = e.asPath);
      }
      p = new URL(t, "http://n");
    } catch (e) {
      p = new URL("/", "http://n");
    }
    try {
      let e = new URL(h, p);
      e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
      let t = "";
      if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
        let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
          {
            result: o,
            params: l
          } = (0, c.interpolateAs)(e.pathname, e.pathname, n);
        o && (t = (0, a.formatWithValidation)({
          pathname: o,
          hash: e.hash,
          query: (0, i.omit)(n, l)
        }));
      }
      let o = e.origin === p.origin ? e.href.slice(e.origin.length) : e.href;
      return n ? [o, t || o] : o;
    } catch (e) {
      return n ? [h] : h;
    }
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
