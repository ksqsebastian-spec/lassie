// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 977439.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e, t) {
    return fetch(e, t);
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "fetch", {
    enumerable: !0,
    get: function () {
      return n;
    }
  }), e.r(507263), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
