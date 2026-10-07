// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 383788.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    completeHardNavigation: function () {
      return R;
    },
    completeSoftNavigation: function () {
      return m;
    },
    completeTraverseNavigation: function () {
      return b;
    },
    convertServerPatchToFullTree: function () {
      return T;
    },
    navigate: function () {
      return v;
    },
    navigateToKnownRoute: function () {
      return E;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(542910),
    u = e.r(811102),
    i = e.r(389242),
    o = e.r(988817),
    c = e.r(359862),
    s = e.r(830664),
    f = e.r(284809),
    d = e.r(109336);
  e.r(155480);
  let h = e.r(888474);
  e.r(480106);
  let p = e.r(909740),
    y = e.r(318806),
    g = e.r(293384),
    _ = e.r(223746);
  function v(e, t, r, n, a, l, u, i, o, c) {
    var f, h, p, y, g, v, P, R, m, b, T, O, A, w, N, C, I, F, j, M, D, U, k;
    let L, H, x, V, B, X, $;
    return f = e, h = t, p = r, y = n, g = a, v = l, P = u, R = i, m = o, b = c, L = Date.now(), H = h.href, x = (0, d.createCacheKey)(H, P), null !== (V = (0, s.readRouteCacheEntry)(L, x)) && V.status === s.EntryStatus.Fulfilled ? (T = L, O = f, A = h, w = p, N = y, C = P, I = g, F = v, j = R, M = m, D = b, U = V, k = null, B = U.tree, X = U.canonicalUrl + A.hash, $ = {
      renderedSearch: U.renderedSearch,
      routeTree: B,
      metadataVaryPath: U.metadata.varyPath,
      data: null,
      head: null,
      dynamicStaleAt: (0, _.computeDynamicStaleAt)(T, _.UnknownDynamicStaleTime)
    }, E(T, O, A, X, $, w, N, I, F, j, C, M, D, k, null, U, void 0)) : S(L, f, h, p, y, P, g, v, R, m, b, null).catch(() => f);
  }
  function E(e, t, r, n, a, l, u, o, c, s, f, d, h, p, y, g, _) {
    let v = {
        separateRefreshUrls: null,
        scrollRef: null
      },
      E = r.href === l.href,
      P = (0, i.startPPRNavigation)(e, l, u, o, c, a.routeTree, a.metadataVaryPath, s, a.data, a.head, a.dynamicStaleAt, E, v, !1);
    return null !== P ? (s !== i.FreshnessPolicy.Gesture && (0, i.spawnDynamicRequests)(P, r, f, s, v, g, h, p, _), m(t, r, f, P.route, P.node, a.renderedSearch, n, h, d, v.scrollRef, y)) : R(t, r, h);
  }
  e.r(756928);
  let P = ["", {}, null, "refetch"];
  async function S(e, t, r, n, a, l, d, p, y, g, _, v) {
    let S;
    switch (y) {
      case i.FreshnessPolicy.Default:
      case i.FreshnessPolicy.HistoryTraversal:
      case i.FreshnessPolicy.Gesture:
        S = p;
        break;
      case i.FreshnessPolicy.Hydration:
      case i.FreshnessPolicy.RefreshAll:
      case i.FreshnessPolicy.HMRRefresh:
        S = P;
        break;
      default:
        S = p;
    }
    let m = (0, u.fetchServerResponse)(r, {
        flightRouterState: S,
        nextUrl: l
      }),
      b = await m;
    if ("string" == typeof b) return R(t, new URL(b, location.origin), _);
    let {
        flightData: O,
        canonicalUrl: A,
        renderedSearch: w,
        couldBeIntercepted: N,
        supportsPerSegmentPrefetching: C,
        dynamicStaleTime: I,
        staticStageData: F,
        runtimePrefetchStream: j,
        responseHeaders: M,
        debugInfo: D
      } = b,
      U = T(e, p, O, w, I),
      k = U.metadataVaryPath;
    if (null !== k) {
      if ((0, f.discoverKnownRoute)(e, r.pathname, r.search, l, null, U.routeTree, k, N, (0, o.createHrefFromUrl)(A, !1), C, !1), null !== F) {
        let {
          response: t,
          isResponsePartial: r
        } = F;
        (0, s.resolveStaleAt)(e, t.s).then(n => {
          let a = M.get(c.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? t.b;
          (0, s.writePrerenderResponseIntoCache)(e, h.FetchStrategy.PPR, t.f, a, t.h, t.r ?? null, n, p, w, r);
        }).catch(() => {});
      }
      null !== j && (0, s.processRuntimePrefetchStream)(e, j, p, w).then(t => {
        null !== t && (0, s.writeDynamicRenderResponseIntoCache)(e, h.FetchStrategy.PPRRuntime, t.flightDatas, t.buildId, t.isResponsePartial, t.headVaryParams, t.rootVaryParamsIterable, t.staleAt, t.navigationSeed, null);
      }).catch(() => {});
    }
    return null !== b.revealAfter && (await b.revealAfter), E(e, t, r, (0, o.createHrefFromUrl)(A), U, n, a, d, p, y, l, g, _, v, D, null, void 0);
  }
  function R(e, t, r) {
    return (0, g.isJavaScriptURLString)(t.href) ? (console.error("Next.js has blocked a javascript: URL as a security precaution."), e) : {
      canonicalUrl: t.origin === location.origin ? (0, o.createHrefFromUrl)(t) : t.href,
      pushRef: {
        pendingPush: "push" === r,
        mpaNavigation: !0,
        preserveCustomHistoryState: !1
      },
      renderedSearch: e.renderedSearch,
      focusAndScrollRef: e.focusAndScrollRef,
      cache: e.cache,
      tree: e.tree,
      nextUrl: e.nextUrl,
      previousNextUrl: e.previousNextUrl,
      debugInfo: null
    };
  }
  function m(e, t, r, n, a, l, u, i, o, c, s) {
    let f,
      d,
      h = (0, y.computeChangedPath)(e.tree, n) || e.nextUrl,
      g = new URL(e.canonicalUrl, t),
      _ = t.pathname === g.pathname && t.search === g.search && t.hash !== g.hash;
    if (o === p.ScrollBehavior.NoScroll) null !== c && (c.current = !1), f = e.focusAndScrollRef.scrollRef, d = !1;else if (_) {
      let t = e.focusAndScrollRef.scrollRef;
      null !== t && (t.current = !1), null !== c && (c.current = !1), f = {
        current: !0
      }, d = !0;
    } else {
      if (f = c, null !== c) {
        let t = e.focusAndScrollRef.scrollRef;
        null !== t && (t.current = !1);
      }
      d = !1;
    }
    return {
      canonicalUrl: u,
      renderedSearch: l,
      pushRef: {
        pendingPush: "push" === i,
        mpaNavigation: !1,
        preserveCustomHistoryState: !1
      },
      focusAndScrollRef: {
        scrollRef: f,
        forceScroll: d,
        onlyHashChange: _,
        hashFragment: o !== p.ScrollBehavior.NoScroll && "" !== t.hash ? decodeURIComponent(t.hash.slice(1)) : e.focusAndScrollRef.hashFragment
      },
      cache: a,
      tree: n,
      nextUrl: h,
      previousNextUrl: r,
      debugInfo: s
    };
  }
  function b(e, t, r, n, a, l) {
    return {
      canonicalUrl: (0, o.createHrefFromUrl)(t),
      renderedSearch: r,
      pushRef: {
        pendingPush: !1,
        mpaNavigation: !1,
        preserveCustomHistoryState: !0
      },
      focusAndScrollRef: e.focusAndScrollRef,
      cache: n,
      tree: a,
      nextUrl: l,
      previousNextUrl: null,
      debugInfo: null
    };
  }
  function T(e, t, r, n, a) {
    let u = t,
      i = null,
      o = null;
    if (null !== r) for (let {
      segmentPath: e,
      tree: t,
      seedData: a,
      head: c
    } of r) {
      let r = function e(t, r, n, a, u, i, o) {
        let c;
        if (o === u.length) return {
          tree: n,
          data: a
        };
        let s = u[o],
          f = t[1],
          d = null !== r ? r[1] : null,
          h = {},
          p = {};
        for (let t in f) {
          let r = f[t],
            l = null !== d ? d[t] ?? null : null;
          if (t === s) {
            let c = e(r, l, n, a, u, i, o + 2);
            h[t] = c.tree, p[t] = c.data;
          } else h[t] = r, p[t] = l;
        }
        if (c = [t[0], h], 2 in t) {
          let e = t[2];
          null != e && (c[2] = [e[0], i]);
        }
        3 in t && (c[3] = t[3]);
        let y = (t[4] ?? 0) & ~l.SubtreePrefetchHints;
        for (let e in h) {
          let t = h[e][4];
          void 0 !== t && (y = (0, l.propagateSubtreeBits)(y, t));
        }
        return 0 !== y && (c[4] = y), {
          tree: c,
          data: [null, p, null, !0, null]
        };
      }(u, i, t, a, e, n, 0);
      u = r.tree, i = r.data, o = c;
    }
    let c = u,
      f = {
        metadataVaryPath: null
      };
    return {
      routeTree: (0, s.convertRootFlightRouterStateToRouteTree)(c, n, f),
      metadataVaryPath: f.metadataVaryPath,
      data: i,
      renderedSearch: n,
      head: o,
      dynamicStaleAt: (0, _.computeDynamicStaleAt)(e, a)
    };
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
