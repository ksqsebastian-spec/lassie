// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 78116.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    refreshDynamicData: function () {
      return d;
    },
    refreshReducer: function () {
      return f;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(909740),
    u = e.r(383788),
    i = e.r(830664),
    o = e.r(271572),
    c = e.r(389242),
    s = e.r(223746);
  function f(e, t) {
    {
      let t = e.nextUrl,
        r = e.tree;
      (0, i.invalidateSegmentCacheEntries)(t, r);
    }
    return d(e, c.FreshnessPolicy.RefreshAll, void 0);
  }
  function d(e, t, r) {
    (0, s.invalidateBfCache)();
    let n = e.nextUrl,
      a = (0, o.hasInterceptionRouteInCurrentTree)(e.tree) ? e.previousNextUrl || n : null,
      i = e.canonicalUrl,
      f = new URL(i, location.origin),
      d = e.renderedSearch,
      h = e.tree,
      p = l.ScrollBehavior.NoScroll,
      y = (0, c.getCurrentNavigationLock)(),
      g = Date.now(),
      _ = (0, u.convertServerPatchToFullTree)(g, h, null, d, s.UnknownDynamicStaleTime),
      v = e.pushRef.pendingPush ? "push" : "replace";
    return (0, u.navigateToKnownRoute)(g, e, f, i, _, f, d, e.cache, h, t, a, p, v, y, null, null, r);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
