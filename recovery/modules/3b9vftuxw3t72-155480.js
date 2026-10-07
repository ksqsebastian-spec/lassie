// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 155480.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    cancelPrefetchTask: function () {
      return R;
    },
    isPrefetchTaskDirty: function () {
      return b;
    },
    pingPrefetchScheduler: function () {
      return O;
    },
    pingPrefetchTask: function () {
      return C;
    },
    reschedulePrefetchTask: function () {
      return m;
    },
    schedulePrefetchTask: function () {
      return S;
    },
    startRevalidationCooldown: function () {
      return P;
    },
    subtreeHasSpeculativePrefetch: function () {
      return B;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(542910),
    u = e.r(84215),
    i = e.r(830664),
    o = e.r(109336),
    c = e.r(744838),
    s = e.r(888474),
    f = e.r(36741),
    d = e.r(928624),
    h = "function" == typeof queueMicrotask ? queueMicrotask : e => Promise.resolve().then(e).catch(e => setTimeout(() => {
      throw e;
    })),
    p = [],
    y = 0,
    g = 0,
    _ = !1,
    v = null,
    E = null;
  function P() {
    null !== E && clearTimeout(E), E = setTimeout(() => {
      E = null, O();
    }, 300);
  }
  function S(e, t, r, n, a, l) {
    let u = {
      key: e,
      treeAtTimeOfPrefetch: t,
      routeCacheVersion: (0, i.getCurrentRouteCacheVersion)(),
      segmentCacheVersion: (0, i.getCurrentSegmentCacheVersion)(),
      priority: n,
      phase: 2,
      hasBackgroundWork: !1,
      hasPendingResponses: !1,
      spawnedRuntimePrefetches: null,
      fetchStrategy: r,
      sortId: g++,
      isCanceled: !1,
      fallbackRetryStatus: i.EntryStatus.Empty,
      onInvalidate: a,
      _heapIndex: -1
    };
    return T(u), $(p, u), O(), u;
  }
  function R(e) {
    e.isCanceled = !0, function (e, t) {
      let r = t._heapIndex;
      if (-1 !== r && (t._heapIndex = -1, 0 !== e.length)) {
        let n = e.pop();
        n !== t && (e[r] = n, n._heapIndex = r, W(e, n, r));
      }
    }(p, e);
  }
  function m(e, t, r, n) {
    e.isCanceled = !1, e.phase = 2, e.sortId = g++, e.priority = e === v ? s.PrefetchPriority.Intent : n, e.treeAtTimeOfPrefetch = t, e.fetchStrategy = r, T(e), -1 !== e._heapIndex ? q(p, e) : $(p, e), O();
  }
  function b(e, t, r) {
    return e.routeCacheVersion !== (0, i.getCurrentRouteCacheVersion)() || e.segmentCacheVersion !== (0, i.getCurrentSegmentCacheVersion)() || e.treeAtTimeOfPrefetch !== r || e.key.nextUrl !== t;
  }
  function T(e) {
    e.priority === s.PrefetchPriority.Intent && e !== v && (null !== v && v.priority !== s.PrefetchPriority.Background && (v.priority = s.PrefetchPriority.Default, q(p, v)), v = e);
  }
  function O() {
    _ || (_ = !0, h(I));
  }
  function A(e) {
    return null === E && (e.priority === s.PrefetchPriority.Intent ? y < 12 : y < 4);
  }
  function w(e) {
    return y++, e.then(e => null === e ? (N(), null) : (e.closed.then(N), e.value));
  }
  function N() {
    y--, O();
  }
  function C(e) {
    e.isCanceled || -1 !== e._heapIndex || ($(p, e), O());
  }
  function I() {
    _ = !1;
    let e = Date.now(),
      t = K(p);
    for (; null !== t && A(t);) {
      t.routeCacheVersion = (0, i.getCurrentRouteCacheVersion)(), t.segmentCacheVersion = (0, i.getCurrentSegmentCacheVersion)();
      let r = function (e, t) {
          let r = t.key,
            n = (0, i.readOrCreateRouteCacheEntry)(e, t, r),
            a = function (e, t, r) {
              switch (r.status) {
                case i.EntryStatus.Empty:
                  w((0, i.fetchRouteOnCacheMiss)(r, t.key)), r.staleAt = e + 6e4, r.status = i.EntryStatus.Pending;
                case i.EntryStatus.Pending:
                  {
                    let e = r.blockedTasks;
                    return null === e ? r.blockedTasks = new Set([t]) : e.add(t), 1;
                  }
                case i.EntryStatus.Rejected:
                  break;
                case i.EntryStatus.Fulfilled:
                  {
                    let n;
                    if (2 === t.phase) return 2;
                    if (!A(t)) return 0;
                    let a = r.tree;
                    switch (n = a.prefetchHints & l.PrefetchHint.SubtreeHasPartialPrefetching ? s.FetchStrategy.PPR : t.fetchStrategy === s.FetchStrategy.PPR ? r.supportsPerSegmentPrefetching ? s.FetchStrategy.PPR : s.FetchStrategy.LoadingBoundary : t.fetchStrategy) {
                      case s.FetchStrategy.PPR:
                        {
                          let n = 1 === t.phase ? s.FetchStrategy.StaticShell : s.FetchStrategy.PPR;
                          if (n === s.FetchStrategy.PPR && !B(t.fetchStrategy, a.prefetchHints)) return 2;
                          if (function (e, t, r, n) {
                            let a = F(n, r);
                            if (a && (r.tree.prefetchHints & l.PrefetchHint.ShouldAttemptStaticPrefetch) == 0) return M(t, r.metadata.requestKey);
                            if (!(r.tree.prefetchHints & l.PrefetchHint.HeadOutlined)) return;
                            let u = {
                                tree: r.metadata,
                                entry: (0, i.readOrCreateSegmentCacheEntry)(e, n, r.metadata, t._navigationLockPrefetch ?? null),
                                parent: null
                              },
                              o = L(e, t, r, t.key, r.metadata, u, n, !0);
                            a && o && M(t, r.metadata.requestKey);
                          }(e, t, r, n), 0 === function e(t, r, n, a, u, i, o) {
                            let c = H(t, r, n, u, i, s.FetchStrategy.PPR, !0).bundle,
                              f = a[1],
                              d = u.slots;
                            if (null !== d) for (let [a, u] of d) {
                              if (!A(r)) return 0;
                              let i = u.segment,
                                d = f[a],
                                h = d?.[0],
                                p = null !== c && u.prefetchHints & l.PrefetchHint.ParentInlinedIntoSelf ? c : null;
                              if (0 === (void 0 !== h && V(n, i, h) ? e(t, r, n, d, u, p, o) : function e(t, r, n, a, u, i) {
                                if (i === s.FetchStrategy.PPR && !B(r.fetchStrategy, a.prefetchHints)) return 2;
                                let o = F(i, n),
                                  c = (a.prefetchHints & l.PrefetchHint.ShouldAttemptStaticPrefetch) != 0;
                                if (o && !c) return M(r, a.requestKey), null !== u && function e(t, r, n, a, u, i) {
                                  let o = H(t, r, n, a, u, i, !1).bundle;
                                  if (null !== o && null !== a.slots) {
                                    for (let u of a.slots.values()) if (u.prefetchHints & l.PrefetchHint.ParentInlinedIntoSelf) return void e(t, r, n, u, o, i);
                                  }
                                }(t, r, n, a, u, i), 2;
                                let f = H(t, r, n, a, u, i, !0),
                                  d = f.bundle;
                                if (o && f.needsRuntimeRequest) return M(r, a.requestKey), 2;
                                if (null !== a.slots) {
                                  if (!A(r)) return 0;
                                  for (let u of a.slots.values()) {
                                    let a = null !== d && u.prefetchHints & l.PrefetchHint.ParentInlinedIntoSelf ? d : null;
                                    if (0 === e(t, r, n, u, a, i)) return 0;
                                  }
                                }
                                return 2;
                              }(t, r, n, u, o === s.FetchStrategy.StaticShell ? null : p, o))) return 0;
                            }
                            return 2;
                          }(e, t, r, t.treeAtTimeOfPrefetch, a, null, n)) return 0;
                          if (F(n, r)) {
                            let l = n === s.FetchStrategy.StaticShell ? s.FetchStrategy.RuntimeShell : s.FetchStrategy.PPRRuntime,
                              u = t.spawnedRuntimePrefetches;
                            if (null !== u) {
                              let n = new Map();
                              D(e, t, r, n, l);
                              let o = function e(t, r, n, a, l, u, i) {
                                if (l.has(a.requestKey)) return k(t, r, n, a, !1, u, i);
                                let o = {},
                                  c = a.slots;
                                if (null !== c) for (let [a, s] of c) o[a] = e(t, r, n, s, l, u, i);
                                let s = [a.segment, o, null, null];
                                return 0 !== a.prefetchHints && (s[4] = a.prefetchHints), s;
                              }(e, t, r, a, u, n, l);
                              n.size > 0 && w((0, i.fetchSegmentPrefetchesUsingDynamicRequest)(t, r, l, o, n));
                            }
                          }
                          return 2;
                        }
                      case s.FetchStrategy.Full:
                      case s.FetchStrategy.PPRRuntime:
                      case s.FetchStrategy.LoadingBoundary:
                        {
                          if (1 === t.phase) return 2;
                          let u = new Map();
                          D(e, t, r, u, n);
                          let o = function e(t, r, n, a, u, o, c) {
                            let f = a[1],
                              d = u.slots,
                              h = {};
                            if (null !== d) for (let [a, u] of d) {
                              let d = u.segment,
                                p = f[a],
                                y = p?.[0];
                              if (void 0 !== y && V(n, d, y)) {
                                let l = e(t, r, n, p, u, o, c);
                                h[a] = l;
                              } else switch (c) {
                                case s.FetchStrategy.LoadingBoundary:
                                  {
                                    let e = (u.prefetchHints & (l.PrefetchHint.SegmentHasLoadingBoundary | l.PrefetchHint.SubtreeHasLoadingBoundary)) != 0 ? function e(t, r, n, a, u, o) {
                                      let c = null === u ? "inside-shared-layout" : null,
                                        f = (0, i.readOrCreateSegmentCacheEntry)(t, r.fetchStrategy, a, r._navigationLockPrefetch ?? null);
                                      switch (f.status) {
                                        case i.EntryStatus.Empty:
                                          {
                                            let e = (0, i.upgradeToPendingSegment)(f, s.FetchStrategy.LoadingBoundary, r._navigationLockPrefetch ?? null);
                                            o.set(a.requestKey, e), U(r, e), "refetch" !== u && (c = u = "refetch");
                                            break;
                                          }
                                        case i.EntryStatus.Fulfilled:
                                          if ((a.prefetchHints & l.PrefetchHint.SegmentHasLoadingBoundary) != 0) return (0, i.convertRouteTreeToFlightRouterState)(a);
                                          break;
                                        case i.EntryStatus.Pending:
                                          U(r, f);
                                        case i.EntryStatus.Rejected:
                                      }
                                      let d = {};
                                      if (null !== a.slots) for (let [l, i] of a.slots) d[l] = e(t, r, n, i, u, o);
                                      let h = [a.segment, d, null, c];
                                      return 0 !== a.prefetchHints && (h[4] = a.prefetchHints), h;
                                    }(t, r, n, u, null, o) : (0, i.convertRouteTreeToFlightRouterState)(u);
                                    h[a] = e;
                                    break;
                                  }
                                case s.FetchStrategy.PPRRuntime:
                                  {
                                    let e = k(t, r, n, u, !1, o, c);
                                    h[a] = e;
                                    break;
                                  }
                                case s.FetchStrategy.Full:
                                  {
                                    let e = k(t, r, n, u, !1, o, c);
                                    h[a] = e;
                                  }
                              }
                            }
                            let p = [u.segment, h, null, null];
                            return 0 !== u.prefetchHints && (p[4] = u.prefetchHints), p;
                          }(e, t, r, t.treeAtTimeOfPrefetch, a, u, n);
                          return u.size > 0 && w((0, i.fetchSegmentPrefetchesUsingDynamicRequest)(t, r, n, o, u)), 2;
                        }
                    }
                  }
              }
              return 2;
            }(e, t, n);
          if (0 !== a && "" !== r.search) {
            let n = new URL(r.pathname, location.origin),
              a = (0, o.createCacheKey)(n.href, r.nextUrl),
              l = (0, i.readOrCreateRouteCacheEntry)(e, t, a);
            switch (l.status) {
              case i.EntryStatus.Empty:
                (t.priority === s.PrefetchPriority.Background || (t.hasBackgroundWork = !0, 0)) && (l.status = i.EntryStatus.Pending, w((0, i.fetchRouteOnCacheMiss)(l, a)));
              case i.EntryStatus.Pending:
              case i.EntryStatus.Fulfilled:
              case i.EntryStatus.Rejected:
            }
          }
          return 2 === a && t.hasPendingResponses ? 1 : a;
        }(e, t),
        n = t.hasBackgroundWork;
      switch (t.hasBackgroundWork = !1, t.hasPendingResponses = !1, t.spawnedRuntimePrefetches = null, r) {
        case 0:
          return;
        case 1:
          G(p), t = K(p);
          continue;
        case 2:
          if (2 === t.phase) {
            let r = (0, i.readRouteCacheEntry)(e, t.key),
              n = null !== r && r.status === i.EntryStatus.Fulfilled && (r.tree.prefetchHints & l.PrefetchHint.SubtreeHasPartialPrefetching) != 0;
            t.phase = +!!n, q(p, t);
          } else 1 === t.phase ? (t.phase = 0, q(p, t)) : n ? (t.priority = s.PrefetchPriority.Background, q(p, t)) : G(p);
          t = K(p);
          continue;
      }
    }
    null === t && 0 === y && (0, d.cleanup)();
  }
  function F(e, t) {
    return e === s.FetchStrategy.StaticShell || (t.tree.prefetchHints & l.PrefetchHint.SubtreeHasPartialPrefetching) != 0;
  }
  function j(e, t) {
    return (0, i.canNewFetchStrategyProvideMoreContent)(e.fetchStrategy, t === s.FetchStrategy.StaticShell ? s.FetchStrategy.RuntimeShell : s.FetchStrategy.PPRRuntime);
  }
  function M(e, t) {
    null === e.spawnedRuntimePrefetches ? e.spawnedRuntimePrefetches = new Set([t]) : e.spawnedRuntimePrefetches.add(t);
  }
  function D(e, t, r, n, a) {
    k(e, t, r, r.metadata, !1, n, a === s.FetchStrategy.LoadingBoundary ? s.FetchStrategy.Full : a);
  }
  function U(e, t) {
    e.hasPendingResponses = !0, null === t.blockedTasks ? t.blockedTasks = new Set([e]) : t.blockedTasks.add(e);
  }
  function k(e, t, r, n, a, l, u) {
    let o = (0, i.readOrCreateSegmentCacheEntry)(e, u, n, t._navigationLockPrefetch ?? null),
      c = null;
    switch (o.status) {
      case i.EntryStatus.Empty:
        if (u === s.FetchStrategy.Full && null !== (0, i.attemptToFulfillDynamicSegmentFromBFCache)(e, o, n)) break;
        c = (0, i.upgradeToPendingSegment)(o, u, t._navigationLockPrefetch ?? null);
        break;
      case i.EntryStatus.Fulfilled:
        if (o.isPartial && (0, i.canNewFetchStrategyProvideMoreContent)(o.fetchStrategy, u)) {
          if (u === s.FetchStrategy.Full && null !== (0, i.attemptToUpgradeSegmentFromBFCache)(e, n)) break;
          c = x(e, t, n, u);
        }
        break;
      case i.EntryStatus.Pending:
      case i.EntryStatus.Rejected:
        (0, i.canNewFetchStrategyProvideMoreContent)(o.fetchStrategy, u) && (c = x(e, t, n, u)), o.status === i.EntryStatus.Pending && U(t, o);
    }
    null !== c && U(t, c);
    let f = {};
    if (null !== n.slots) for (let [i, o] of n.slots) f[i] = k(e, t, r, o, a || null !== c, l, u);
    null !== c && l.set(n.requestKey, c);
    let d = a || null === c ? null : "refetch",
      h = [n.segment, f, null, d];
    return 0 !== n.prefetchHints && (h[4] = n.prefetchHints), h;
  }
  function L(e, t, r, n, a, l, u, o) {
    let c = 0,
      f = !1,
      d = !1,
      h = l;
    for (; null !== h;) {
      c++;
      let n = h.entry,
        a = h.tree;
      if (null === n || null === a) {
        h = h.parent;
        continue;
      }
      switch (n.status) {
        case i.EntryStatus.Empty:
          (0, i.upgradeToPendingSegment)(n, u, t._navigationLockPrefetch ?? null), f = !0, U(t, n);
          break;
        case i.EntryStatus.Pending:
          if (o && u === s.FetchStrategy.PPR && (0, i.canNewFetchStrategyProvideMoreContent)(n.fetchStrategy, u)) {
            let r = (0, i.readOrCreateRevalidatingSegmentEntry)(e, u, a);
            r.status === i.EntryStatus.Empty ? ((0, i.upgradeToPendingSegment)(r, u, t._navigationLockPrefetch ?? null), h.entry = r, f = !0, U(t, r)) : h.entry = null;
          } else h.entry = null;
          U(t, n);
          break;
        case i.EntryStatus.Rejected:
          if (o && u === s.FetchStrategy.PPR && (0, i.canNewFetchStrategyProvideMoreContent)(n.fetchStrategy, u)) {
            let r = (0, i.readOrCreateRevalidatingSegmentEntry)(e, u, a);
            r.status === i.EntryStatus.Empty ? ((0, i.upgradeToPendingSegment)(r, u, t._navigationLockPrefetch ?? null), h.entry = r, f = !0, U(t, r)) : h.entry = null;
          } else h.entry = null;
          break;
        case i.EntryStatus.Fulfilled:
          {
            let l = j(n, u);
            l && (d = !0);
            let c = l && F(u, r),
              s = n.isUpgradeableISRFallback && (t.fallbackRetryStatus === i.EntryStatus.Empty || t.fallbackRetryStatus === i.EntryStatus.Fulfilled);
            if (o && !c && (n.isPartial && (0, i.canNewFetchStrategyProvideMoreContent)(n.fetchStrategy, u) || s)) {
              let r = (0, i.readOrCreateRevalidatingSegmentEntry)(e, u, a);
              r.status === i.EntryStatus.Empty ? ((0, i.upgradeToPendingSegment)(r, u, t._navigationLockPrefetch ?? null), h.entry = r, f = !0, U(t, r)) : (h.entry = null, r.status === i.EntryStatus.Pending && U(t, r));
            } else h.entry = null;
          }
      }
      h = h.parent;
    }
    return f && w((0, i.fetchSegmentsOnCacheMiss)(t, r, n, a, l, c, u)), d;
  }
  function H(e, t, r, n, a, u, o) {
    if (n.prefetchHints & l.StaticPrefetchDisabled) return {
      bundle: {
        tree: null,
        entry: null,
        parent: a
      },
      needsRuntimeRequest: !1
    };
    let c = (0, i.readOrCreateSegmentCacheEntry)(e, u, n, t._navigationLockPrefetch ?? null);
    if (n.prefetchHints & l.PrefetchHint.InlinedIntoChild) return {
      bundle: {
        tree: n,
        entry: c,
        parent: a
      },
      needsRuntimeRequest: c.status === i.EntryStatus.Fulfilled && j(c, u)
    };
    let s = a;
    n.prefetchHints & l.PrefetchHint.HeadInlinedIntoSelf && (s = {
      tree: r.metadata,
      entry: (0, i.readOrCreateSegmentCacheEntry)(e, u, r.metadata, t._navigationLockPrefetch ?? null),
      parent: a
    });
    let f = {
      tree: n,
      entry: c,
      parent: s
    };
    return {
      bundle: null,
      needsRuntimeRequest: L(e, t, r, t.key, n, f, u, o)
    };
  }
  function x(e, t, r, n) {
    let a = (0, i.readOrCreateRevalidatingSegmentEntry)(e, n, r);
    if (a.status === i.EntryStatus.Empty) return (0, i.upgradeToPendingSegment)(a, n, t._navigationLockPrefetch ?? null);
    if ((0, i.canNewFetchStrategyProvideMoreContent)(a.fetchStrategy, n)) {
      let a = (0, i.overwriteRevalidatingSegmentCacheEntry)(e, n, r);
      return (0, i.upgradeToPendingSegment)(a, n, t._navigationLockPrefetch ?? null);
    }
    switch (a.status) {
      case i.EntryStatus.Pending:
        return U(t, a), null;
      case i.EntryStatus.Fulfilled:
      case i.EntryStatus.Rejected:
      default:
        return null;
    }
  }
  function V(e, t, r) {
    return r === f.PAGE_SEGMENT_KEY ? t === (0, f.addSearchParamsIfPageSegment)(f.PAGE_SEGMENT_KEY, (0, c.urlSearchParamsToParsedUrlQuery)(new URLSearchParams(e.renderedSearch))) : (0, u.matchSegment)(r, t);
  }
  function B(e, t) {
    return e === s.FetchStrategy.Full || (t & l.PrefetchHint.SubtreeHasEagerPrefetch) != 0;
  }
  function X(e, t) {
    let r = t.priority - e.priority;
    if (0 !== r) return r;
    let n = t.phase - e.phase;
    return 0 !== n ? n : t.sortId - e.sortId;
  }
  function $(e, t) {
    let r = e.length;
    e.push(t), t._heapIndex = r, Y(e, t, r);
  }
  function K(e) {
    return 0 === e.length ? null : e[0];
  }
  function G(e) {
    if (0 === e.length) return null;
    let t = e[0];
    t._heapIndex = -1;
    let r = e.pop();
    return r !== t && (e[0] = r, r._heapIndex = 0, W(e, r, 0)), t;
  }
  function q(e, t) {
    let r = t._heapIndex;
    -1 !== r && (0 === r ? W(e, t, 0) : X(e[r - 1 >>> 1], t) > 0 ? Y(e, t, r) : W(e, t, r));
  }
  function Y(e, t, r) {
    let n = r;
    for (; n > 0;) {
      let r = n - 1 >>> 1,
        a = e[r];
      if (!(X(a, t) > 0)) return;
      e[r] = t, t._heapIndex = r, e[n] = a, a._heapIndex = n, n = r;
    }
  }
  function W(e, t, r) {
    let n = r,
      a = e.length,
      l = a >>> 1;
    for (; n < l;) {
      let r = (n + 1) * 2 - 1,
        l = e[r],
        u = r + 1,
        i = e[u];
      if (0 > X(l, t)) u < a && 0 > X(i, l) ? (e[n] = i, i._heapIndex = n, e[u] = t, t._heapIndex = u, n = u) : (e[n] = l, l._heapIndex = n, e[r] = t, t._heapIndex = r, n = r);else {
        if (!(u < a && 0 > X(i, t))) return;
        e[n] = i, i._heapIndex = n, e[u] = t, t._heapIndex = u, n = u;
      }
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
