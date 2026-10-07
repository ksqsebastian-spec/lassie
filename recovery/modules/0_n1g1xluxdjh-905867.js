// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 905867.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "removePathPrefix", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(673381);
  function a(e, t) {
    if (!(0, r.pathHasPrefix)(e, t)) return e;
    let n = e.slice(t.length);
    return n.startsWith("/") ? n : `/${n}`;
  }
};
