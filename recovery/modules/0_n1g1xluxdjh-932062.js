// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 932062.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "getPathMatch", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(507906);
  function a(e, t) {
    let n = [],
      a = (0, r.pathToRegexp)(e, n, {
        delimiter: "/",
        sensitive: "boolean" == typeof t?.sensitive && t.sensitive,
        strict: t?.strict
      }),
      i = (0, r.regexpToFunction)(t?.regexModifier ? new RegExp(t.regexModifier(a.source), a.flags) : a, n);
    return (e, r) => {
      if ("string" != typeof e) return !1;
      let a = i(e);
      if (!a) return !1;
      if (t?.removeUnnamedParams) for (let e of n) "number" == typeof e.name && delete a.params[e.name];
      return {
        ...r,
        ...a.params
      };
    };
  }
};
