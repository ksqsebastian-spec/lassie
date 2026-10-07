// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 701459.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "BailoutToCSR", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let n = e.r(170307);
  function a({
    reason: e,
    children: t
  }) {
    if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return t;
  }
};
