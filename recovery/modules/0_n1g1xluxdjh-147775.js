// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 147775.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "resolvePromiseWithTimeout", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(19998);
  function a(e, t, n) {
    return new Promise((n, a) => {
      let i = !1;
      e.then(e => {
        i = !0, n(e);
      }).catch(a), (0, r.requestIdleCallback)(() => setTimeout(() => {
        i || a(t);
      }, 3800));
    });
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
