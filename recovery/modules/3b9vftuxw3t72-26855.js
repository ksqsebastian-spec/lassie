// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 26855.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n() {
    let e,
      t,
      r = new Promise((r, n) => {
        e = r, t = n;
      });
    return {
      resolve: e,
      reject: t,
      promise: r
    };
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "createPromiseWithResolvers", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
