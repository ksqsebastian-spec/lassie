// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 662576.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let n = e.r(330053)._(e.r(815268));
  function a(e, t) {
    let r = {};
    "function" == typeof e && (r.loader = e);
    let a = {
      ...r,
      ...t
    };
    return (0, n.default)({
      ...a,
      modules: a.loadableGenerated?.modules
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
