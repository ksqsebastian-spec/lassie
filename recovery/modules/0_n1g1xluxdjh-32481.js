// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 32481.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "addLocale", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(458173),
    a = e.r(673381);
  function i(e, t, n, i) {
    if (!t || t === n) return e;
    let o = e.toLowerCase();
    return !i && ((0, a.pathHasPrefix)(o, "/api") || (0, a.pathHasPrefix)(o, `/${t.toLowerCase()}`)) ? e : (0, r.addPathPrefix)(e, `/${t}`);
  }
};
