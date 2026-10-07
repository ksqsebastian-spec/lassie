// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 248597.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "parseRelativeUrl", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(478573),
    a = e.r(398686);
  function i(e, t, n = !0) {
    let o = new URL("u" < typeof window ? "http://n" : (0, r.getLocationOrigin)()),
      l = t ? new URL(t, o) : e.startsWith(".") ? new URL("u" < typeof window ? "http://n" : window.location.href) : o,
      {
        pathname: s,
        searchParams: u,
        search: c,
        hash: d,
        href: f,
        origin: p
      } = e.startsWith("/") ? new URL(`${l.protocol}//${l.host}${e}`) : new URL(e, l);
    if (p !== o.origin) throw Object.defineProperty(Error(`invariant: invalid relative URL, router received ${e}`), "__NEXT_ERROR_CODE", {
      value: "E159",
      enumerable: !1,
      configurable: !0
    });
    return {
      auth: null,
      host: null,
      hostname: null,
      pathname: s,
      port: null,
      protocol: null,
      query: n ? (0, a.searchParamsToUrlQuery)(u) : void 0,
      search: c,
      hash: d,
      href: f.slice(p.length),
      slashes: null
    };
  }
};
