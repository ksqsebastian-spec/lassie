// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 469226.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "serverPatchReducer", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(988817),
    a = e.r(909740),
    l = e.r(383788),
    u = e.r(78116),
    i = e.r(389242);
  function o(e, t) {
    let r = t.mpa,
      o = new URL(t.url, location.origin),
      c = t.seed,
      s = t.navigateType;
    if (r || null === c) return (0, l.completeHardNavigation)(e, o, s);
    let f = new URL(e.canonicalUrl, location.origin),
      d = e.renderedSearch;
    if (t.previousTree !== e.tree) return (0, u.refreshReducer)(e, {
      type: a.ACTION_REFRESH
    });
    let h = (0, n.createHrefFromUrl)(o),
      p = t.nextUrl,
      y = a.ScrollBehavior.Default,
      g = (0, i.getCurrentNavigationLock)(),
      _ = Date.now();
    return (0, l.navigateToKnownRoute)(_, e, o, h, c, f, d, e.cache, e.tree, t.freshnessPolicy, p, y, s, g, null, null, void 0);
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
