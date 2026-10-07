// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 866030.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "parseUrl", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(398686),
    a = e.r(248597);
  function i(e) {
    if (e.startsWith("/")) return (0, a.parseRelativeUrl)(e);
    let t = new URL(e),
      n = t.username,
      i = t.password,
      o = n ? i ? `${n}:${i}` : n : null,
      l = t.pathname,
      s = t.search;
    return {
      auth: o,
      hash: t.hash,
      hostname: t.hostname,
      href: t.href,
      pathname: l,
      port: t.port,
      protocol: t.protocol,
      query: (0, r.searchParamsToUrlQuery)(t.searchParams),
      search: s,
      origin: t.origin,
      slashes: "//" === t.href.slice(t.protocol.length, t.protocol.length + 2)
    };
  }
};
