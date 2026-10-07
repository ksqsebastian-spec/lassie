// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 371939.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "isDynamicRoute", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let r = e.r(570214),
    a = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/,
    i = /\/\[[^/]+\](?=\/|$)/;
  function o(e, t = !0) {
    return ((0, r.isInterceptionRouteAppPath)(e) && (e = (0, r.extractInterceptionRouteInformation)(e).interceptedRoute), t) ? i.test(e) : a.test(e);
  }
};
