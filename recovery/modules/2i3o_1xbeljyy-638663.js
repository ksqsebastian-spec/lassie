// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 638663.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let n = new WeakMap();
  function l(e) {
    let t = n.get(e);
    if (t) return t;
    let r = Promise.resolve(e);
    return n.set(e, r), r;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
