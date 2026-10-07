// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 162358.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e, t) {
    let n = {};
    return Object.keys(e).forEach(r => {
      t.includes(r) || (n[r] = e[r]);
    }), n;
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "omit", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
