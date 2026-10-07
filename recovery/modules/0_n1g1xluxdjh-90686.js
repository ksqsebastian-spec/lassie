// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 90686.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(t) {
    return function () {
      let {
        cookie: n
      } = t;
      if (!n) return {};
      let {
        parse: r
      } = e.r(226508);
      return r(Array.isArray(n) ? n.join("; ") : n);
    };
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "getCookieParser", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
