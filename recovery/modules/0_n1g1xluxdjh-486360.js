// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 486360.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "denormalizePagePath", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(371408),
    a = e.r(375813);
  function i(e) {
    let t = (0, a.normalizePathSep)(e);
    return t.startsWith("/index/") && !(0, r.isDynamicRoute)(t) ? t.slice(6) : "/index" !== t ? t : "/";
  }
};
