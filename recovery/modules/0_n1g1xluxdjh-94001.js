// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 94001.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "interpolateAs", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(258961),
    a = e.r(102431);
  function i(e, t, n) {
    let i = "",
      o = (0, a.getRouteRegex)(e),
      l = o.groups,
      s = (t !== e ? (0, r.getRouteMatcher)(o)(t) : "") || n;
    i = e;
    let u = Object.keys(l);
    return u.every(e => {
      let t = s[e] || "",
        {
          repeat: n,
          optional: r
        } = l[e],
        a = `[${n ? "..." : ""}${e}]`;
      return r && (a = `${!t ? "/" : ""}[${a}]`), n && !Array.isArray(t) && (t = [t]), (r || e in s) && (i = i.replace(a, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/");
    }) || (i = ""), {
      params: u,
      result: i
    };
  }
};
