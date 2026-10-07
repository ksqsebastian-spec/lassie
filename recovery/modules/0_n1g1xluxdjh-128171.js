// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 128171.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e) {
    switch (e) {
      case "catchall-intercepted-(..)(..)":
      case "dynamic-intercepted-(..)(..)":
        return "(..)(..)";
      case "catchall-intercepted-(.)":
      case "dynamic-intercepted-(.)":
        return "(.)";
      case "catchall-intercepted-(..)":
      case "dynamic-intercepted-(..)":
        return "(..)";
      case "catchall-intercepted-(...)":
      case "dynamic-intercepted-(...)":
        return "(...)";
      default:
        return null;
    }
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "interceptionPrefixFromParamType", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
