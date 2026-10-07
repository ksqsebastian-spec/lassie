// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 958544.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "findHeadInCache", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(36741),
    a = e.r(216843);
  function i(e, t) {
    return function e(t, n, i, o) {
      if (0 === Object.keys(n).length) return [t, i, o];
      let l = Object.keys(n).filter(e => "children" !== e);
      "children" in n && l.unshift("children");
      let s = t.slots;
      if (null !== s) for (let t of l) {
        let [o, l] = n[t];
        if (o === r.DEFAULT_SEGMENT_KEY) continue;
        let u = s[t];
        if (!u) continue;
        let c = e(u, l, i + "/" + (0, a.createRouterCacheKey)(o), i + "/" + (0, a.createRouterCacheKey)(o, !0));
        if (c) return c;
      }
      return null;
    }(e, t, "", "");
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
