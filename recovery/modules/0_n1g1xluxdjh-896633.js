// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 896633.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e, t) {
    let n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = n.length; r--;) {
      let a = n[r];
      if ("query" === a) {
        let n = Object.keys(e.query);
        if (n.length !== Object.keys(t.query).length) return !1;
        for (let r = n.length; r--;) {
          let a = n[r];
          if (!t.query.hasOwnProperty(a) || e.query[a] !== t.query[a]) return !1;
        }
      } else if (!t.hasOwnProperty(a) || e[a] !== t[a]) return !1;
    }
    return !0;
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "compareRouterStates", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
