// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 213475.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isNextRouterError", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let n = e.r(555408),
    o = e.r(517460);
  function u(e) {
    return (0, o.isRedirectError)(e) || (0, n.isHTTPAccessFallbackError)(e);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
