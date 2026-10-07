// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 265669.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e) {
    return e.startsWith("/") ? e : `/${e}`;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "ensureLeadingSlash", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
