// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 758024.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e) {
    return e.split("/").map(e => encodeURIComponent(e)).join("/");
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "encodeURIPath", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
