// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 44168.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let r = e.r(932062),
    a = e.r(763739),
    i = e.r(842592),
    o = e.r(754130),
    l = e.r(286193),
    s = e.r(248597);
  function u(e, t, n, u, c, d) {
    let f,
      p = !1,
      h = !1,
      m = (0, s.parseRelativeUrl)(e),
      g = (0, i.removeTrailingSlash)((0, o.normalizeLocalePath)((0, l.removeBasePath)(m.pathname), d).pathname),
      y = n => {
        let s = (0, r.getPathMatch)(n.source + "", {
          removeUnnamedParams: !0,
          strict: !0
        })(m.pathname);
        if ((n.has || n.missing) && s) {
          let e = (0, a.matchHas)({
            headers: {
              host: document.location.hostname,
              "user-agent": navigator.userAgent
            },
            cookies: document.cookie.split("; ").reduce((e, t) => {
              let [n, ...r] = t.split("=");
              return e[n] = r.join("="), e;
            }, {})
          }, m.query, n.has, n.missing);
          e ? Object.assign(s, e) : s = !1;
        }
        if (s) {
          if (!n.destination) return h = !0, !0;
          let r = (0, a.prepareDestination)({
            appendParamsToQuery: !0,
            destination: n.destination,
            params: s,
            query: u
          });
          if (m = r.parsedDestination, e = r.newUrl, Object.assign(u, r.parsedDestination.query), g = (0, i.removeTrailingSlash)((0, o.normalizeLocalePath)((0, l.removeBasePath)(e), d).pathname), t.includes(g)) return p = !0, f = g, !0;
          if ((f = c(g)) !== e && t.includes(f)) return p = !0, !0;
        }
      },
      v = !1;
    for (let e = 0; e < n.beforeFiles.length; e++) y(n.beforeFiles[e]);
    if (!(p = t.includes(g))) {
      if (!v) {
        for (let e = 0; e < n.afterFiles.length; e++) if (y(n.afterFiles[e])) {
          v = !0;
          break;
        }
      }
      if (v || (f = c(g), v = p = t.includes(f)), !v) {
        for (let e = 0; e < n.fallback.length; e++) if (y(n.fallback[e])) {
          v = !0;
          break;
        }
      }
    }
    return {
      asPath: e,
      parsedAs: m,
      matchedPage: p,
      resolvedHref: f,
      externalDest: h
    };
  }
};
