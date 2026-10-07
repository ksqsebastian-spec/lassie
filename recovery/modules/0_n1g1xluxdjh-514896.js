// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 514896.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e, t = "") {
    return ("/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? `/index${e}` : e) + t;
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
