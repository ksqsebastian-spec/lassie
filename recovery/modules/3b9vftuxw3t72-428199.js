// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 428199.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e) {
    return null !== e && "object" == typeof e && "then" in e && "function" == typeof e.then;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isThenable", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
