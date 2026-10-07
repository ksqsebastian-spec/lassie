// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 390458.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "restoreReducer", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = e.r(318806),
    a = e.r(389242),
    l = e.r(383788),
    u = e.r(223746);
  function i(e, t) {
    let r,
      i,
      o = t.historyState;
    o ? (r = o.tree, i = o.renderedSearch) : (r = e.tree, i = e.renderedSearch);
    let c = new URL(e.canonicalUrl, location.origin),
      s = t.url,
      f = (0, n.extractPathFromFlightRouterState)(r) ?? s.pathname,
      d = Date.now(),
      h = {
        separateRefreshUrls: null,
        scrollRef: null
      },
      p = (0, l.convertServerPatchToFullTree)(d, r, null, i, u.UnknownDynamicStaleTime),
      y = (0, a.startPPRNavigation)(d, c, e.renderedSearch, e.cache, e.tree, p.routeTree, p.metadataVaryPath, a.FreshnessPolicy.HistoryTraversal, null, null, p.dynamicStaleAt, !1, h, !1);
    return null === y ? (0, l.completeHardNavigation)(e, s, "replace") : ((0, a.spawnDynamicRequests)(y, s, f, a.FreshnessPolicy.HistoryTraversal, h, null, "replace", null, void 0), (0, a.resetNavigationLockToPending)(), (0, l.completeTraverseNavigation)(e, s, i, y.node, y.route, f));
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
