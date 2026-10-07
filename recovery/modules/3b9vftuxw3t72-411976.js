// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 411976.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "InvariantError", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
  class n extends Error {
    constructor(e, t) {
      super(`Invariant: ${e.endsWith(".") ? e : e + "."} This is a bug in Next.js.`, t), Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1179",
        enumerable: !1,
        configurable: !0
      }), this.name = "InvariantError";
    }
  }
};
