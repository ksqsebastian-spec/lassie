// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 554307.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  let r;
  function a(e) {
    return (void 0 === r && "u" > typeof window && (r = window.trustedTypes?.createPolicy("nextjs", {
      createHTML: e => e,
      createScript: e => e,
      createScriptURL: e => e
    }) || null), r)?.createScriptURL(e) || e;
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__unsafeCreateTrustedScriptURL", {
    enumerable: !0,
    get: function () {
      return a;
    }
  }), ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
