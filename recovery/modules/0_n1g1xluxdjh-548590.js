// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 548590.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "addPathSuffix", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(677553);
  function a(e, t) {
    if (!e.startsWith("/") || !t) return e;
    let {
      pathname: n,
      query: a,
      hash: i
    } = (0, r.parsePath)(e);
    return `${n}${t}${a}${i}`;
  }
};
