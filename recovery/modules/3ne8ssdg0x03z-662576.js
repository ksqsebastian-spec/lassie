// Recovered from 3ne8ssdg0x03z.js. Runtime module IDs: 662576.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(330053)._(e.r(815268));
  function o(e, t) {
    let r = {};
    "function" == typeof e && (r.loader = e);
    let o = {
      ...r,
      ...t
    };
    return (0, n.default)({
      ...o,
      modules: o.loadableGenerated?.modules
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
