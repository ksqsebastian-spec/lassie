// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 673381.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "pathHasPrefix", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let n = e.r(677553);
  function a(e, t) {
    if ("string" != typeof e) return !1;
    let {
      pathname: r
    } = (0, n.parsePath)(e);
    return r === t || r.startsWith(t + "/");
  }
};
