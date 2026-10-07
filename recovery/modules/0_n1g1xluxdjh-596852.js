// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 596852.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "createInitialRouterState", {
    enumerable: !0,
    get: function () {
      return f;
    }
  });
  let r = e.r(988817),
    a = e.r(318806),
    i = e.r(351941),
    o = e.r(389242),
    l = e.r(830664),
    s = e.r(888474),
    u = e.r(223746),
    c = e.r(811102),
    d = e.r(284809);
  function f({
    navigatedAt: e,
    initialRSCPayload: t,
    initialFlightStreamForCache: n,
    location: p
  }) {
    let {
        c: h,
        f: m,
        q: g,
        i: y,
        S: v,
        s: b,
        l: _,
        h: S,
        r: w,
        p: E,
        d: x
      } = t,
      k = h.join("/"),
      {
        tree: P,
        seedData: T,
        head: R
      } = (0, i.getFlightDataPartsFromPath)(m[0]),
      O = p ? (0, r.createHrefFromUrl)(p) : k,
      C = {
        metadataVaryPath: null
      },
      N = (0, l.convertRootFlightRouterStateToRouteTree)(P, g, C),
      A = C.metadataVaryPath,
      I = (0, o.createInitialCacheNodeForHydration)(e, N, T, R, (0, u.computeDynamicStaleAt)(e, x ?? u.UnknownDynamicStaleTime));
    if (null !== p && null !== A) {
      if ((0, d.discoverKnownRoute)(Date.now(), p.pathname, p.search, null, null, N, A, y, O, v, !1), null !== T && void 0 !== b) {
        if (void 0 !== _ && null != n) Promise.resolve(_).then(async e => {
          let t = await (0, c.decodeStageUntilBoundary)(n, e, void 0),
            r = Date.now(),
            a = await (0, l.resolveStaleAt)(r, t.s);
          (0, l.writePrerenderResponseIntoCache)(r, s.FetchStrategy.PPR, t.f, void 0, t.h, t.r ?? null, a, P, g, !0);
        }).catch(() => {});else {
          let e = Date.now();
          (0, l.resolveStaleAt)(e, b).then(t => {
            (0, l.writePrerenderResponseIntoCache)(e, s.FetchStrategy.PPR, m, void 0, S, w ?? null, t, P, g, !1);
          }).catch(() => {}), n?.cancel();
        }
      } else n?.cancel();
      null != E && (0, l.processRuntimePrefetchStream)(Date.now(), E, P, g).then(e => {
        null !== e && (0, l.writeDynamicRenderResponseIntoCache)(Date.now(), s.FetchStrategy.PPRRuntime, e.flightDatas, e.buildId, e.isResponsePartial, e.headVaryParams, e.rootVaryParamsIterable, e.staleAt, e.navigationSeed, null);
      }).catch(() => {});
    }
    return {
      tree: I.route,
      cache: I.node,
      pushRef: {
        pendingPush: !1,
        mpaNavigation: !1,
        preserveCustomHistoryState: !0
      },
      focusAndScrollRef: {
        scrollRef: null,
        forceScroll: !1,
        onlyHashChange: !1,
        hashFragment: null
      },
      canonicalUrl: O,
      renderedSearch: g,
      nextUrl: ((0, a.extractPathFromFlightRouterState)(P) || p?.pathname) ?? null,
      previousNextUrl: null,
      debugInfo: null
    };
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
