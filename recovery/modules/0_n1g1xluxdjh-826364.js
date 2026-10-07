// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 826364.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "escapeStringRegexp", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = /[|\\{}()[\]^$+*?.-]/,
    a = /[|\\{}()[\]^$+*?.-]/g;
  function i(e) {
    return r.test(e) ? e.replace(a, "\\$&") : e;
  }
};
