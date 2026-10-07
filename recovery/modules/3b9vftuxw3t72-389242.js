// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 389242.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n,
    a = {
      FreshnessPolicy: function () {
        return m;
      },
      beginLockedNavigation: function () {
        return K;
      },
      createInitialCacheNodeForHydration: function () {
        return T;
      },
      getCurrentNavigationLock: function () {
        return $;
      },
      isDeferredRsc: function () {
        return B;
      },
      resetNavigationLockToPending: function () {
        return G;
      },
      spawnDynamicRequests: function () {
        return k;
      },
      startPPRNavigation: function () {
        return O;
      }
    };
  for (var l in a) Object.defineProperty(r, l, {
    enumerable: !0,
    get: a[l]
  });
  let u = e.r(542910),
    i = e.r(36741),
    o = e.r(84215),
    c = e.r(988817),
    s = e.r(811102),
    f = e.r(446615),
    d = e.r(909740),
    h = e.r(316488),
    p = e.r(125054),
    y = e.r(383788),
    g = e.r(830664),
    _ = e.r(888474),
    v = e.r(284809),
    E = e.r(359862),
    P = e.r(744838),
    S = e.r(582853),
    R = e.r(223746);
  var m = ((n = {})[n.Default = 0] = "Default", n[n.Hydration = 1] = "Hydration", n[n.HistoryTraversal = 2] = "HistoryTraversal", n[n.RefreshAll = 3] = "RefreshAll", n[n.HMRRefresh = 4] = "HMRRefresh", n[n.Gesture = 5] = "Gesture", n);
  let b = () => {};
  function T(e, t, r, n, a) {
    return w(e, t, null, 1, r, n, a, !1, {
      separateRefreshUrls: null,
      scrollRef: null
    }, !1);
  }
  function O(e, t, r, n, a, l, s, f, d, p, y, _, v, E) {
    let P = {
      canonicalUrl: (0, c.createHrefFromUrl)(t),
      renderedSearch: r
    };
    return function e(t, r, n, a, l, c, s, f, d, p, y, _, v, E, P, S) {
      var R, m, b, T, O;
      let C,
        M,
        U,
        k,
        L = a[0],
        H = N(l),
        x = (R = H, m = L, (0, o.matchSegment)(R, m) ? 0 : "string" == typeof R && "string" == typeof m && R.startsWith(i.PAGE_SEGMENT_KEY) && m.startsWith(i.PAGE_SEGMENT_KEY) ? 2 : 1);
      if (1 === x) return (l.prefetchHints & u.PrefetchHint.IsRootLayoutOrAbove) != 0 && (0, h.isNavigatingToNewRootLayout)(a, l) || H === i.NOT_FOUND_SEGMENT_KEY ? null : w(t, l, c, s, f, d, p, _, P, S);
      let V = l.slots,
        B = a[1],
        X = null !== f ? f[1] : null,
        $ = !1;
      switch (s) {
        case 0:
        case 2:
        case 1:
        case 5:
          $ = !1;
          break;
        case 3:
        case 4:
          $ = !0;
      }
      let K = null === V;
      if (void 0 === n || $ || K && y || 2 === x) {
        let e = F(t, l, null !== f ? f[0] : null, c, d, s, p, void 0 !== n ? n.bfcacheId : D(s), S);
        U = e.cacheNode, k = e.needsDynamicRequest, K && 2 === x ? A(s, U, P) : void 0 !== n && (U.scrollRef = n.scrollRef);
      } else {
        b = !1, U = j((T = n).rsc, b ? null : T.prefetchRsc, T.head, b ? null : T.prefetchHead, T.bfcacheId, T.scrollRef), k = !1;
      }
      let G = l.refreshState,
        q = null != G ? G : E;
      k && null !== q && (O = P, C = q.canonicalUrl, null === (M = O.separateRefreshUrls) ? O.separateRefreshUrls = new Set([C]) : M.add(C));
      let Y = {},
        W = null,
        z = !1,
        Q = {},
        J = null;
      if (null !== V) {
        let a = void 0 !== n ? n.slots : null;
        for (let [n, u] of (U.slots = J = {}, W = new Map(), V)) {
          let o = B[n];
          if (void 0 === o) return null;
          let f = null !== X ? X[n] : null,
            h = o[0],
            E = N(u),
            R = d;
          2 !== s && E === i.DEFAULT_SEGMENT_KEY && h !== i.DEFAULT_SEGMENT_KEY && (E = N(u = function (e, t, r, n) {
            let a,
              l,
              u = n[2];
            null != u ? (a = u[0], l = u[1]) : (a = r.canonicalUrl, l = r.renderedSearch);
            let i = (0, g.convertReusedFlightRouterStateToRouteTree)(e, t, n, l, {
              metadataVaryPath: null
            });
            return i.refreshState = {
              canonicalUrl: a,
              renderedSearch: l
            }, i;
          }(l, n, v, o)), f = null, R = null);
          let m = e(t, r, null !== a ? a[n] : void 0, o, u, c, s, f ?? null, R, p, y, _ || k, v, q, P, S);
          if (null === m) return null;
          W.set(n, m), J[n] = m.node;
          let b = m.route;
          Y[n] = b;
          let T = m.dynamicRequestTree;
          null !== T ? (z = !0, Q[n] = T) : Q[n] = b;
        }
      }
      let Z = [N(l), Y, null !== q ? [q.canonicalUrl, q.renderedSearch] : null, null, l.prefetchHints];
      return {
        status: +!k,
        route: Z,
        node: U,
        dynamicRequestTree: I(Z, Q, k, z, _),
        refreshState: q,
        children: W
      };
    }(e, t, null !== n ? n : void 0, a, l, s, f, d, p, y, _, !1, P, null, v, E);
  }
  function A(e, t, r) {
    switch (e) {
      case 0:
      case 5:
      case 3:
      case 4:
        null === r.scrollRef && (r.scrollRef = {
          current: !0
        }), t.scrollRef = r.scrollRef;
    }
  }
  function w(e, t, r, n, a, l, u, i, o, c) {
    let s = N(t),
      f = t.slots,
      d = null !== a ? a[1] : null,
      h = F(e, t, null !== a ? a[0] : null, r, l, n, u, D(n), c),
      p = h.cacheNode,
      y = h.needsDynamicRequest;
    null === f && A(n, p, o);
    let g = {},
      _ = null,
      v = !1,
      E = {},
      P = null;
    if (null !== f) for (let [t, a] of (p.slots = P = {}, _ = new Map(), f)) {
      let s = w(e, a, r, n, (null !== d ? d[t] : null) ?? null, l, u, i || y, o, c);
      _.set(t, s), P[t] = s.node;
      let f = s.route;
      g[t] = f;
      let h = s.dynamicRequestTree;
      null !== h ? (v = !0, E[t] = h) : E[t] = f;
    }
    let S = [s, g, null, null, t.prefetchHints];
    return {
      status: +!y,
      route: S,
      node: p,
      dynamicRequestTree: I(S, E, y, v, i),
      refreshState: null,
      children: _
    };
  }
  function N(e) {
    if (e.isPage) {
      let t = (0, S.getRenderedSearchFromVaryPath)(e.varyPath);
      if (null === t) return i.PAGE_SEGMENT_KEY;
      let r = JSON.stringify((0, P.urlSearchParamsToParsedUrlQuery)(new URLSearchParams(t)));
      return "{}" !== r ? i.PAGE_SEGMENT_KEY + "?" + r : i.PAGE_SEGMENT_KEY;
    }
    return e.segment;
  }
  function C(e, t) {
    let r = [e[0], t];
    return 2 in e && (r[2] = e[2]), 3 in e && (r[3] = e[3]), 4 in e && (r[4] = e[4]), r;
  }
  function I(e, t, r, n, a) {
    let l = null;
    return r ? (l = C(e, t), a || (l[3] = "refetch")) : l = n ? C(e, t) : null, l;
  }
  function F(e, t, r, n, a, l, u, i, o) {
    let c,
      s,
      f,
      d = t.isPage;
    switch (l) {
      case 0:
        {
          let r = (0, R.readFromBFCacheDuringRegularNavigation)(e, t.varyPath);
          if (null !== r) return {
            cacheNode: j(r.rsc, r.prefetchRsc, r.head, r.prefetchHead, i),
            needsDynamicRequest: !1
          };
          break;
        }
      case 1:
        {
          let l = d ? a : null;
          return (0, R.writeToBFCache)(e, t.varyPath, r, null, l, null, u, i), d && null !== n && (0, R.writeHeadToBFCache)(e, n, l, null, u, i), {
            cacheNode: j(r, null, l, null, i),
            needsDynamicRequest: !1
          };
        }
      case 2:
        let h = (0, R.readFromBFCache)(t.varyPath);
        if (null !== h) {
          let e = h.rsc,
            t = !B(e) || "pending" !== e.status;
          return {
            cacheNode: j(h.rsc, t ? null : h.prefetchRsc, h.head, t ? null : h.prefetchHead, h.bfcacheId),
            needsDynamicRequest: !1
          };
        }
    }
    let p = null,
      y = !0,
      _ = (0, g.readSegmentCacheEntryForNavigation)(e, t.varyPath, o);
    if (null !== _) switch (_.status) {
      case g.EntryStatus.Fulfilled:
        p = _.rsc, y = _.isPartial;
        break;
      case g.EntryStatus.Pending:
        p = (0, g.waitForSegmentCacheEntry)(_).then(e => null !== e ? e.rsc : null), y = _.isPartial;
      case g.EntryStatus.Empty:
      case g.EntryStatus.Rejected:
    }
    null !== r ? (y ? (c = p, s = r) : (c = null, s = p), f = !1) : (y ? (c = p, s = X()) : (c = null, s = p), f = y);
    let v = null,
      E = null,
      P = d;
    if (d) {
      let t = null,
        r = !0;
      if (null !== n) {
        let a = (0, g.readSegmentCacheEntryForNavigation)(e, n, o);
        if (null !== a) switch (a.status) {
          case g.EntryStatus.Fulfilled:
            t = a.rsc, r = a.isPartial;
            break;
          case g.EntryStatus.Pending:
            t = (0, g.waitForSegmentCacheEntry)(a).then(e => null !== e ? e.rsc : null), r = a.isPartial;
          case g.EntryStatus.Empty:
          case g.EntryStatus.Rejected:
        }
      }
      r && (t = ""), null !== a ? (r ? (v = t, E = a) : (v = null, E = t), P = !1) : (r ? (v = t, E = X()) : (v = null, E = t), P = r);
    }
    return 5 !== l && ((0, R.writeToBFCache)(e, t.varyPath, s, c, E, v, u, i), d && null !== n && (0, R.writeHeadToBFCache)(e, n, E, v, u, i)), {
      cacheNode: j(s, c, E, v, i),
      needsDynamicRequest: f || P
    };
  }
  function j(e, t, r, n, a, l = null) {
    return {
      rsc: e,
      prefetchRsc: t,
      head: r,
      prefetchHead: n,
      slots: null,
      scrollRef: l,
      bfcacheId: a
    };
  }
  let M = 0;
  function D(e) {
    return "u" < typeof window || 1 === e ? 0 : ++M;
  }
  let U = !1;
  function k(e, t, r, n, a, l, u, i, o) {
    let s = e.dynamicRequestTree;
    if (null === s) {
      U = !1;
      return;
    }
    let f = x(e, s, t, r, n, l, i, o),
      d = a.separateRefreshUrls,
      h = null;
    if (null !== d) {
      h = [];
      let a = (0, c.createHrefFromUrl)(t);
      for (let t of d) t !== a && null !== s && h.push(x(e, s, new URL(t, location.origin), r, n, l, i, o));
    }
    L(e, r, f, h, l, u).then(b, b);
  }
  async function L(e, t, r, n, a, l) {
    var u, i;
    let o = await (u = r, i = n, new Promise(e => {
      let t = t => {
          0 === t.exitStatus ? 0 == --n && e(0) : e(t.exitStatus);
        },
        r = () => e(2),
        n = 1;
      u.then(t, r), null !== i && (n += i.length, i.forEach(e => e.then(t, r)));
    }));
    switch (0 === o && (o = function e(t, r, n) {
      var a, l, u;
      let i, o, c;
      0 === t.status ? (t.status = 2, a = t.node, l = r, u = n, B(o = a.rsc) && (null === l ? o.resolve(null, u) : o.reject(l, u)), B(c = a.head) && c.resolve(null, u), i = null === t.refreshState ? 1 : 2) : i = 0;
      let s = t.children;
      if (null !== s) for (let [, t] of s) {
        let a = e(t, r, n);
        a > i && (i = a);
      }
      return i;
    }(e, null, null)), o) {
      case -1:
        return;
      case 0:
        U = !1;
        return;
      case 1:
        {
          let n = await r;
          H(!1, n.url, t, n.seed, e.route, a, l, 3);
          return;
        }
      case 3:
        {
          let n = await r;
          H(!1, n.url, t, n.seed, e.route, a, l, 2);
          return;
        }
      case 2:
        {
          let n = await r;
          H(!0, n.url, t, n.seed, e.route, a, l, 3);
          return;
        }
      default:
        return o;
    }
  }
  function H(e, t, r, n, a, l, u, i) {
    if (null !== l) (0, g.markRouteEntryAsDynamicRewrite)(l);else if (null !== n) {
      let e = n.metadataVaryPath;
      if (null !== e) {
        let a = Date.now();
        (0, v.discoverKnownRoute)(a, t.pathname, t.search, r, null, n.routeTree, e, !1, (0, c.createHrefFromUrl)(t), !1, !0);
      }
    }
    (0, g.invalidateRouteCacheEntries)(r, a), e = e || U, U = !0;
    let o = (0, p.getLastCommittedTree)(),
      s = null !== o && a !== o ? u : "replace",
      h = {
        type: d.ACTION_SERVER_PATCH,
        previousTree: a,
        url: t,
        nextUrl: r,
        seed: n,
        mpa: e,
        navigateType: s,
        freshnessPolicy: i
      };
    (0, f.dispatchAppRouterAction)(h);
  }
  async function x(e, t, r, n, a, l, u, i) {
    try {
      let u = await (0, s.fetchServerResponse)(r, {
        flightRouterState: t,
        nextUrl: n,
        isHmrRefresh: 4 === a,
        signal: i
      });
      if ("string" == typeof u) return {
        exitStatus: 2,
        url: new URL(u, location.origin),
        seed: null
      };
      let c = Date.now(),
        f = (0, y.convertServerPatchToFullTree)(c, e.route, u.flightData, u.renderedSearch, u.dynamicStaleTime);
      if (null !== l && null !== u.staticStageData) {
        let {
          response: e,
          isResponsePartial: r
        } = u.staticStageData;
        (0, g.resolveStaleAt)(c, e.s).then(n => {
          let a = u.responseHeaders.get(E.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? e.b;
          (0, g.writePrerenderResponseIntoCache)(c, _.FetchStrategy.PPR, e.f, a, e.h, e.r ?? null, n, t, u.renderedSearch, r);
        }).catch(() => {});
      }
      null !== l && null !== u.runtimePrefetchStream && (0, g.processRuntimePrefetchStream)(c, u.runtimePrefetchStream, t, u.renderedSearch).then(e => {
        null !== e && (0, g.writeDynamicRenderResponseIntoCache)(c, _.FetchStrategy.PPRRuntime, e.flightDatas, e.buildId, e.isResponsePartial, e.headVaryParams, e.rootVaryParamsIterable, e.staleAt, e.navigationSeed, null);
      }).catch(() => {});
      let d = (0, R.computeDynamicStaleAt)(c, u.dynamicStaleTime),
        h = function e(t, r, n, a, l, u, i) {
          0 === t.status && null !== n && (t.status = 1, function (e, t, r, n, a) {
            let l = e.rsc,
              u = t[0];
            if (null === u) return;
            if (null === l) e.rsc = u;else if (B(l)) if (null !== a) {
              let e = () => l.resolve(u, n);
              a.then(e, e);
            } else l.resolve(u, n);
            let i = e.head;
            B(i) && i.resolve(r, n);
          }(t.node, n, a, u, i), (0, R.updateBFCacheEntryStaleAt)(r.varyPath, l));
          let c = t.children,
            s = r.slots,
            f = null !== n ? n[1] : null,
            d = !1;
          if (null !== c) if (null !== s) for (let [t, r] of s) {
            let n = null !== f ? f[t] : null,
              s = c.get(t);
            if (void 0 === s) d = !0;else {
              let t = s.route[0],
                c = N(r);
              (0, o.matchSegment)(c, t) && null != n && e(s, r, n, a, l, u, i) && (d = !0);
            }
          } else null !== s && (d = !0);
          return d;
        }(e, f.routeTree, f.data, f.head, d, u.debugInfo, u.revealAfter),
        p = new URL(u.canonicalUrl, location.origin),
        v = !1;
      if (null !== l) {
        let e = new URL(l.canonicalUrl, location.origin);
        v = e.pathname !== p.pathname || e.search !== p.search;
      }
      return {
        exitStatus: h ? 1 : 3 * !!v,
        url: p,
        seed: f
      };
    } catch {
      if (i?.aborted) return {
        exitStatus: -1,
        url: r,
        seed: null
      };
      return {
        exitStatus: 2,
        url: r,
        seed: null
      };
    }
  }
  let V = Symbol();
  function B(e) {
    return e && "object" == typeof e && e.tag === V;
  }
  function X() {
    let e,
      t,
      r = [],
      n = new Promise((r, n) => {
        e = r, t = n;
      });
    return n.status = "pending", n.resolve = (t, a) => {
      "pending" === n.status && (n.status = "fulfilled", n.value = t, null !== a && r.push.apply(r, a), e(t));
    }, n.reject = (e, a) => {
      "pending" === n.status && (n.status = "rejected", n.reason = e, null !== a && r.push.apply(r, a), t(e));
    }, n.tag = V, n._debugInfo = r, n;
  }
  function $() {
    return null;
  }
  function K() {
    return null;
  }
  function G() {}
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
