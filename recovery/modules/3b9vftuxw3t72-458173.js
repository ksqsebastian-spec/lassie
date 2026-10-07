// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 458173.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "addPathPrefix", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let n = e.r(677553);
  function a(e, t) {
    if (!e.startsWith("/") || !t) return e;
    let {
      pathname: r,
      query: a,
      hash: l
    } = (0, n.parsePath)(e);
    return `${t}${r}${a}${l}`;
  }
};
