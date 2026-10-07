// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 316488.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isNavigatingToNewRootLayout", {
    enumerable: !0,
    get: function () {
      return function e(t, r) {
        let a = ((t[4] ?? 0) & n.PrefetchHint.IsRootLayoutOrAbove) != 0,
          l = (r.prefetchHints & n.PrefetchHint.IsRootLayoutOrAbove) != 0;
        if (!a && !l) return !1;
        if (a !== l) return !0;
        let u = t[0],
          i = r.segment;
        if (Array.isArray(u) && Array.isArray(i)) {
          if (u[0] !== i[0] || u[2] !== i[2]) return !0;
        } else if (u !== i) return !0;
        let o = r.slots,
          c = t[1];
        if (null !== o) for (let [t, r] of o) {
          let n = c[t];
          if (void 0 === n || e(n, r)) return !0;
        }
        return !1;
      };
    }
  });
  let n = e.r(542910);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
