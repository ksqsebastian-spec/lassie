// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 662576.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "default", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let r = e.r(330053)._(e.r(815268));
  function o(e, t) {
    let i = {};
    "function" == typeof e && (i.loader = e);
    let o = {
      ...i,
      ...t
    };
    return (0, r.default)({
      ...o,
      modules: o.loadableGenerated?.modules
    });
  }
  ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
    value: !0
  }), Object.assign(i.default, i), t.exports = i.default);
};
