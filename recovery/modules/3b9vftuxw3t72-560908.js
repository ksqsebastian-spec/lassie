// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 560908.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "prefetch", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = e.r(232560),
    a = e.r(109336),
    l = e.r(155480),
    u = e.r(888474);
  function i(e, t, r, i, o) {
    let c = (0, n.createPrefetchURL)(e);
    if (null === c) return;
    let s = (0, a.createCacheKey)(c.href, t);
    (0, l.schedulePrefetchTask)(s, r, i, u.PrefetchPriority.Default, o, null);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
