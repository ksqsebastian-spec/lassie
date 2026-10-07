// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 156974.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function i(e, t) {
    let r = e || 75;
    return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "findClosestQuality", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
};
