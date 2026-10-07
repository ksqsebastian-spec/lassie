// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 156974.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  function r(e, t) {
    let i = e || 75;
    return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e, t.qualities[0]) : i;
  }
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "findClosestQuality", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
