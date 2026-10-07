// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 842592.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e) {
    return 47 === e.charCodeAt(e.length - 1) && e.length > 1 ? e.slice(0, -1) : e;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "removeTrailingSlash", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
