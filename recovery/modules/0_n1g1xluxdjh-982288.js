// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 982288.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e) {
    return "/api" === e || !!(null == e ? void 0 : e.startsWith("/api/"));
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "isAPIRoute", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
