// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 830664.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    EntryStatus: function () {
      return p.EntryStatus;
    },
    MetadataOnlyRequestTree: function () {
      return w;
    },
    attemptToFulfillDynamicSegmentFromBFCache: function () {
      return er;
    },
    attemptToUpgradeSegmentFromBFCache: function () {
      return en;
    },
    canNewFetchStrategyProvideMoreContent: function () {
      return eF;
    },
    convertReusedFlightRouterStateToRouteTree: function () {
      return eh;
    },
    convertRootFlightRouterStateToRouteTree: function () {
      return ed;
    },
    convertRouteTreeToFlightRouterState: function () {
      return function e(t) {
        let r = {},
          n = t.slots;
        if (null !== n) for (let [t, a] of n) r[t] = e(a);
        let a = [t.segment, r, null, null];
        return 0 !== t.prefetchHints && (a[4] = t.prefetchHints), a;
      };
    },
    createDetachedSegmentCacheEntry: function () {
      return ee;
    },
    createMetadataRouteTree: function () {
      return el;
    },
    createNonTaskyPrefetchResponseStream: function () {
      return eI;
    },
    deprecated_requestOptimisticRouteCacheEntry: function () {
      return G;
    },
    fetchRouteOnCacheMiss: function () {
      return ey;
    },
    fetchSegmentPrefetchesUsingDynamicRequest: function () {
      return eO;
    },
    fetchSegmentsOnCacheMiss: function () {
      return e_;
    },
    fulfillRouteCacheEntry: function () {
      return eu;
    },
    getCurrentRouteCacheVersion: function () {
      return M;
    },
    getCurrentSegmentCacheVersion: function () {
      return D;
    },
    getStaleTimeMs: function () {
      return A;
    },
    invalidateEntirePrefetchCache: function () {
      return U;
    },
    invalidateRouteCacheEntries: function () {
      return k;
    },
    invalidateSegmentCacheEntries: function () {
      return L;
    },
    markRouteEntryAsDynamicRewrite: function () {
      return eo;
    },
    overwriteRevalidatingSegmentCacheEntry: function () {
      return z;
    },
    pingInvalidationListeners: function () {
      return H;
    },
    processRuntimePrefetchStream: function () {
      return eU;
    },
    readOrCreateRevalidatingSegmentEntry: function () {
      return W;
    },
    readOrCreateRouteCacheEntry: function () {
      return K;
    },
    readOrCreateSegmentCacheEntry: function () {
      return Y;
    },
    readRouteCacheEntry: function () {
      return x;
    },
    readSegmentCacheEntry: function () {
      return V;
    },
    readSegmentCacheEntryForNavigation: function () {
      return B;
    },
    resolveStaleAt: function () {
      return eM;
    },
    stripIsPartialByte: function () {
      return ek;
    },
    upgradeToPendingSegment: function () {
      return et;
    },
    upsertSegmentEntry: function () {
      return J;
    },
    waitForSegmentCacheEntry: function () {
      return X;
    },
    writeDynamicRenderResponseIntoCache: function () {
      return ew;
    },
    writePrerenderResponseIntoCache: function () {
      return eD;
    },
    writeRouteIntoCache: function () {
      return ei;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(542910),
    u = e.r(303817),
    i = e.r(515188),
    o = e.r(811102);
  e.r(977439);
  let c = e.r(155480),
    s = e.r(582853),
    f = e.r(988817),
    d = e.r(109336),
    h = e.r(744838),
    p = e.r(453983),
    y = e.r(264575),
    g = e.r(351941),
    _ = e.r(830058),
    v = e.r(480106),
    E = e.r(36741),
    P = e.r(888474),
    S = e.r(26855),
    R = e.r(223746),
    m = e.r(284809),
    b = e.r(383788),
    T = e.r(539723),
    O = e.r(359862);
  function A(e) {
    return 1e3 * Math.max(e, 30);
  }
  let w = ["", {}, null, "metadata-only"],
    N = (0, p.createCacheMap)(),
    C = (0, p.createCacheMap)(),
    I = null,
    F = 0,
    j = 0;
  function M() {
    return F;
  }
  function D() {
    return j;
  }
  function U(e, t) {
    F++, j++, (0, v.pingVisibleLinks)(e, t), H(e, t);
  }
  function k(e, t) {
    F++, (0, v.pingVisibleLinks)(e, t), H(e, t);
  }
  function L(e, t) {
    j++, (0, v.pingVisibleLinks)(e, t), H(e, t);
  }
  function H(e, t) {
    if (null !== I) {
      let r = I;
      for (let n of (I = null, r)) (0, c.isPrefetchTaskDirty)(n, e, t) && function (e) {
        let t = e.onInvalidate;
        if (null !== t) {
          e.onInvalidate = null;
          try {
            t();
          } catch (e) {
            "function" == typeof reportError ? reportError(e) : console.error(e);
          }
        }
      }(n);
    }
  }
  function x(e, t) {
    let r = (0, s.getRouteVaryPath)(t.pathname, t.search, t.nextUrl),
      n = (0, p.getFromCacheMap)(e, F, N, r, !1, !1);
    return null !== n ? n : (0, m.matchKnownRoute)(e, t.pathname, t.search);
  }
  function V(e, t) {
    return (0, p.getFromCacheMap)(e, j, C, t, !1, !1);
  }
  function B(e, t, r = !1) {
    let n = (0, p.getFromCacheMap)(e, j, C, t, !1, !0);
    return null !== n ? n : (0, p.getFromCacheMap)(e, j, C, t, !1, !1);
  }
  function X(e) {
    let t = e.promise;
    return null === t && (t = e.promise = (0, S.createPromiseWithResolvers)()), t.promise;
  }
  function $() {
    return {
      canonicalUrl: null,
      status: p.EntryStatus.Empty,
      blockedTasks: null,
      tree: null,
      metadata: null,
      couldBeIntercepted: !0,
      supportsPerSegmentPrefetching: !1,
      hasDynamicRewrite: !1,
      renderedSearch: null,
      ref: null,
      size: 0,
      staleAt: 1 / 0,
      version: F
    };
  }
  function K(e, t, r) {
    null !== t.onInvalidate && (null === I ? I = new Set([t]) : I.add(t));
    let n = x(e, r);
    if (null !== n) return n;
    let a = $(),
      l = (0, s.getRouteVaryPath)(r.pathname, r.search, r.nextUrl);
    return (0, p.setInCacheMap)(N, l, a, !1), a;
  }
  function G(e, t, r) {
    let n = t.search;
    if ("" === n) return null;
    let a = new URL(t);
    a.search = "";
    let l = x(e, (0, d.createCacheKey)(a.href, r));
    if (null === l || l.status !== p.EntryStatus.Fulfilled) return null;
    let u = new URL(l.canonicalUrl, t.origin),
      i = "" !== u.search ? u.search : n,
      o = "" !== l.renderedSearch ? l.renderedSearch : n,
      c = new URL(l.canonicalUrl, location.origin);
    c.search = i;
    let s = (0, f.createHrefFromUrl)(c),
      h = q(l.tree, o),
      y = q(l.metadata, o);
    return {
      canonicalUrl: s,
      status: p.EntryStatus.Fulfilled,
      blockedTasks: null,
      tree: h,
      metadata: y,
      couldBeIntercepted: l.couldBeIntercepted,
      supportsPerSegmentPrefetching: l.supportsPerSegmentPrefetching,
      hasDynamicRewrite: l.hasDynamicRewrite,
      renderedSearch: o,
      ref: null,
      size: 0,
      staleAt: l.staleAt,
      version: l.version
    };
  }
  function q(e, t) {
    let r = null,
      n = e.slots;
    if (null !== n) for (let [e, a] of (r = new Map(), n)) r.set(e, q(a, t));
    return e.isPage ? {
      requestKey: e.requestKey,
      segment: e.segment,
      shellVaryPath: e.shellVaryPath,
      refreshState: e.refreshState,
      varyPath: (0, s.clonePageVaryPathWithNewSearchParams)(e.varyPath, t),
      isPage: !0,
      slots: r,
      prefetchHints: e.prefetchHints
    } : {
      requestKey: e.requestKey,
      segment: e.segment,
      shellVaryPath: e.shellVaryPath,
      refreshState: e.refreshState,
      varyPath: e.varyPath,
      isPage: !1,
      slots: r,
      prefetchHints: e.prefetchHints
    };
  }
  function Y(e, t, r, n) {
    let a = V(e, r.varyPath);
    if (null !== a) return a;
    let l = (0, s.getSegmentVaryPathForRequest)(t, r),
      u = ee(e);
    return (0, p.setInCacheMap)(C, l, u, !1), u;
  }
  function W(e, t, r) {
    var n;
    let a = (n = r.varyPath, (0, p.getFromCacheMap)(e, j, C, n, !0, !1));
    if (null !== a) return a;
    let l = (0, s.getSegmentVaryPathForRequest)(t, r),
      u = ee(e);
    return (0, p.setInCacheMap)(C, l, u, !0), u;
  }
  function z(e, t, r) {
    let n = (0, s.getSegmentVaryPathForRequest)(t, r),
      a = ee(e);
    return (0, p.setInCacheMap)(C, n, a, !0), a;
  }
  function Q(e, t) {
    var r;
    return t.fetchStrategy !== e.fetchStrategy && (r = e.fetchStrategy, !(r < t.fetchStrategy)) || !e.isPartial && t.isPartial;
  }
  function J(e, t, r, n) {
    if ((0, p.isValueExpired)(e, j, r)) return null;
    let a = V(e, t);
    if (null !== a) {
      if (Q(a, r)) return null;
      (a.status === p.EntryStatus.Empty || a.status === p.EntryStatus.Pending) && ea(a);
    }
    return (0, p.setInCacheMap)(C, t, r, !1), null !== n && Z(e, n, r), r;
  }
  function Z(e, t, r) {
    for (let n = 0; n < 32; n++) {
      let n = V(e, t);
      if (null === n || n === r || n.status !== p.EntryStatus.Fulfilled && n.status !== p.EntryStatus.Rejected || Q(n, r)) return;
      ea(n), (0, p.deleteFromCacheMap)(n);
    }
  }
  function ee(e) {
    return {
      status: p.EntryStatus.Empty,
      blockedTasks: null,
      fetchStrategy: P.FetchStrategy.PPR,
      rsc: null,
      isPartial: !0,
      isUpgradeableISRFallback: !1,
      promise: null,
      ref: null,
      size: 0,
      staleAt: e + 3e4,
      version: 0
    };
  }
  function et(e, t, r) {
    return e.status = p.EntryStatus.Pending, e.fetchStrategy = t, t === P.FetchStrategy.Full && (e.isPartial = !1), e.version = j, e;
  }
  function er(e, t, r) {
    let n = r.varyPath,
      a = (0, R.readFromBFCache)(n);
    if (null !== a) {
      let r = a.navigatedAt + _.STATIC_STALETIME_MS;
      return e > r ? null : ec(et(t, P.FetchStrategy.Full, null), a.rsc, r, !1, !1, P.FetchStrategy.Full);
    }
    return null;
  }
  function en(e, t) {
    let r = t.varyPath,
      n = (0, R.readFromBFCache)(r);
    if (null !== n) {
      let r = n.navigatedAt + _.STATIC_STALETIME_MS;
      if (e > r) return null;
      let a = ec(et(ee(e), P.FetchStrategy.Full, null), n.rsc, r, !1, !1, P.FetchStrategy.Full),
        l = J(e, (0, s.getSegmentVaryPathForRequest)(P.FetchStrategy.Full, t), a, t.varyPath);
      if (null !== l && l.status === p.EntryStatus.Fulfilled) return l;
    }
    return null;
  }
  function ea(e) {
    let t = e.blockedTasks;
    if (null !== t) {
      for (let e of t) (0, c.pingPrefetchTask)(e);
      e.blockedTasks = null;
    }
  }
  function el(e) {
    return {
      requestKey: y.HEAD_REQUEST_KEY,
      segment: y.HEAD_REQUEST_KEY,
      shellVaryPath: (0, s.getShellSegmentVaryPath)(e),
      refreshState: null,
      varyPath: e,
      isPage: !0,
      slots: null,
      prefetchHints: 0
    };
  }
  function eu(e, t, r, n, a, u, i) {
    let o = (0, s.getRenderedSearchFromVaryPath)(n) ?? "";
    return t.status = p.EntryStatus.Fulfilled, t.tree = r, t.metadata = el(n), r.prefetchHints & l.PrefetchHint.InliningHintsStale ? t.staleAt = -1 : t.staleAt = e + _.STATIC_STALETIME_MS, t.couldBeIntercepted = a, t.canonicalUrl = u, t.renderedSearch = o, t.supportsPerSegmentPrefetching = i, t.hasDynamicRewrite = !1, ea(t), t;
  }
  function ei(e, t, r, n, a, l, u, i, o) {
    let c = eu(e, $(), a, l, u, i, o),
      f = (0, s.getFulfilledRouteVaryPath)(t, r, n, u);
    return (0, p.setInCacheMap)(N, f, c, !1), c;
  }
  function eo(e) {
    e.hasDynamicRewrite = !0;
  }
  function ec(e, t, r, n, a, l) {
    return e.status = p.EntryStatus.Fulfilled, e.rsc = t, e.staleAt = r, e.isPartial = n, e.isUpgradeableISRFallback = a, e.fetchStrategy = l, null !== e.promise && (e.promise.resolve(e), e.promise = null), ea(e), e;
  }
  function es(e, t) {
    e.status = p.EntryStatus.Rejected, e.staleAt = t, ea(e);
  }
  function ef(e, t) {
    e.status = p.EntryStatus.Rejected, e.staleAt = t, null !== e.promise && (e.promise.resolve(null), e.promise = null), ea(e);
  }
  function ed(e, t, r) {
    return ep(e, y.ROOT_SEGMENT_REQUEST_KEY, null, t, r);
  }
  function eh(e, t, r, n, a) {
    let l = e.isPage ? (0, s.getPartialPageVaryPath)(e.varyPath) : (0, s.getPartialLayoutVaryPath)(e.varyPath),
      u = r[0],
      i = e.requestKey,
      o = (0, y.createSegmentRequestKeyPart)(u);
    return ep(r, (0, y.appendSegmentRequestKeyPart)(i, t, o), l, n, a);
  }
  function ep(e, t, r, n, a) {
    let u,
      i,
      o,
      c,
      f = e[0],
      d = ((e[4] ?? 0) & l.PrefetchHint.IsRootLayoutOrAbove) != 0,
      h = e[2] ?? null,
      p = null !== h ? {
        canonicalUrl: h[0],
        renderedSearch: h[1]
      } : null,
      g = null !== p ? p.renderedSearch : n;
    if (Array.isArray(f)) {
      o = !1;
      let e = f[1],
        n = f[0];
      i = (0, s.appendLayoutVaryPath)(r, e, n, d), c = (0, s.finalizeLayoutVaryPath)(t, i), u = f;
    } else i = r, t.endsWith(E.PAGE_SEGMENT_KEY) ? (o = !0, u = E.PAGE_SEGMENT_KEY, c = (0, s.finalizePageVaryPath)(t, g, i), null === a.metadataVaryPath && (a.metadataVaryPath = (0, s.finalizeMetadataVaryPath)(t, g, i))) : (o = !1, u = f, c = (0, s.finalizeLayoutVaryPath)(t, i));
    let _ = null,
      v = e[1];
    for (let e in v) {
      let r = v[e],
        n = r[0],
        l = (0, y.createSegmentRequestKeyPart)(n),
        u = ep(r, (0, y.appendSegmentRequestKeyPart)(t, e, l), i, g, a);
      null === _ && (_ = new Map()), _.set(e, u);
    }
    return {
      requestKey: t,
      segment: u,
      shellVaryPath: (0, s.getShellSegmentVaryPath)(c),
      refreshState: p,
      varyPath: c,
      isPage: o,
      slots: _,
      prefetchHints: e[4] ?? 0
    };
  }
  async function ey(e, t) {
    let r = t.pathname,
      n = t.search,
      a = t.nextUrl,
      c = {
        [i.RSC_HEADER]: "1",
        [i.NEXT_ROUTER_PREFETCH_HEADER]: "1",
        [i.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: "/_tree"
      };
    null !== a && (c[i.NEXT_URL] = a);
    try {
      let t,
        _,
        v = new URL(r + n, location.origin);
      if (t = await eC(v, c), _ = null !== t && t.redirected ? new URL(t.url) : v, !t || !t.ok || !t.body) return es(e, Date.now() + 1e4), null;
      let A = (0, f.createHrefFromUrl)(_),
        w = t.headers.get("vary"),
        C = null !== w && w.includes(i.NEXT_URL),
        I = (0, S.createPromiseWithResolvers)(),
        F = "2" === t.headers.get(i.NEXT_DID_POSTPONE_HEADER);
      if (F) {
        let u,
          i,
          {
            stream: f,
            size: g
          } = await eI(t.body);
        I.resolve(), (0, p.setSizeInCacheMap)(e, g);
        let _ = await (0, o.createFromNextReadableStream)(f, c, {
          allowPartialStream: !0
        });
        if ((t.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? _.buildId) !== (0, T.getNavigationBuildId)()) return es(e, Date.now() + 1e4), null;
        let v = (0, h.getRenderedPathname)(t),
          P = (0, h.getRenderedSearch)(t),
          S = {
            metadataVaryPath: null
          },
          R = (u = (0, d.splitPathnameIntoParts)(v), i = y.ROOT_SEGMENT_REQUEST_KEY, function e(t, r, n, a, u, i, o, c) {
            let f,
              d,
              p = null,
              g = t.slots;
            if (null !== g) for (let t in f = !1, d = (0, s.finalizeLayoutVaryPath)(a, n), p = new Map(), g) {
              let r,
                f,
                d,
                _ = g[t],
                v = _.name,
                E = _.param;
              if (null !== E) {
                let e = (0, h.parseDynamicParamFromURLPart)(E.type, u, i),
                  t = null !== E.key ? E.key : (0, h.getCacheKeyForDynamicParam)(e, "");
                d = (0, s.appendLayoutVaryPath)(n, t, v, (_.prefetchHints & l.PrefetchHint.IsRootLayoutOrAbove) != 0), f = [v, t, E.type, E.siblings], r = !0;
              } else d = n, f = v, r = (0, h.doesStaticSegmentAppearInURL)(v);
              let P = r ? i + 1 : i,
                S = (0, y.createSegmentRequestKeyPart)(f),
                R = (0, y.appendSegmentRequestKeyPart)(a, t, S);
              p.set(t, e(_, f, d, R, u, P, o, c));
            } else a.endsWith(E.PAGE_SEGMENT_KEY) ? (f = !0, d = (0, s.finalizePageVaryPath)(a, o, n), null === c.metadataVaryPath && (c.metadataVaryPath = (0, s.finalizeMetadataVaryPath)(a, o, n))) : (f = !1, d = (0, s.finalizeLayoutVaryPath)(a, n));
            return {
              requestKey: a,
              segment: r,
              shellVaryPath: (0, s.getShellSegmentVaryPath)(d),
              refreshState: null,
              varyPath: d,
              isPage: f,
              slots: p,
              prefetchHints: t.prefetchHints
            };
          }(_.tree, i, null, y.ROOT_SEGMENT_REQUEST_KEY, u, 0, P, S)),
          b = S.metadataVaryPath;
        if (null === b) return es(e, Date.now() + 1e4), null;
        (0, m.discoverKnownRoute)(Date.now(), r, n, a, e, R, b, C, A, F, !1);
      } else {
        let {
          stream: l,
          size: s
        } = await eI(t.body);
        I.resolve(), (0, p.setSizeInCacheMap)(e, s);
        let f = await (0, o.createFromNextReadableStream)(l, c, {
          allowPartialStream: !0
        });
        if ((t.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? f.b) !== (0, T.getNavigationBuildId)()) return es(e, Date.now() + 1e4), null;
        let d = (0, u.readVaryParams)(f.h, f.r);
        !function (e, t, r, n, a, l, u, o, c, s, f, d, p) {
          let y = (0, h.getRenderedSearch)(r),
            _ = (0, g.normalizeFlightData)(n.f);
          if ("string" == typeof _ || 1 !== _.length) return es(a, e + 1e4);
          let v = _[0];
          if (!v.isRootRender) return es(a, e + 1e4);
          let E = v.tree,
            P = "1" === r.headers.get(i.NEXT_DID_POSTPONE_HEADER),
            S = {
              metadataVaryPath: null
            },
            T = ed(E, y, S),
            A = S.metadataVaryPath;
          if (null === A) return es(a, e + 1e4);
          (0, m.discoverKnownRoute)(e, f, d, p, a, T, A, l, u, o, !1);
          let w = (0, b.convertServerPatchToFullTree)(e, E, _, y, R.UnknownDynamicStaleTime);
          ew(e, t, _, r.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? n.b, P, c, s, ej(e, r), w, null);
        }(Date.now(), P.FetchStrategy.LoadingBoundary, t, f, e, C, A, F, d, f.r ?? null, r, n, a);
      }
      if (!C) {
        let t = (0, s.getFulfilledRouteVaryPath)(r, n, a, C);
        (0, p.setInCacheMap)(N, t, e, !1);
      }
      return {
        value: null,
        closed: I.promise
      };
    } catch (t) {
      return es(e, Date.now() + 1e4), null;
    }
  }
  function eg(e, t) {
    let r = e;
    for (; null !== r;) null !== r.entry && r.entry.status === p.EntryStatus.Pending && ef(r.entry, t), r = r.parent;
  }
  async function e_(e, t, r, n, a, l, u) {
    let i;
    try {
      i = await ev(t, r, n);
    } catch (e) {
      return eg(a, Date.now() + 1e4), null;
    }
    if (null === i) return eg(a, Date.now() + 1e4), null;
    let {
      serverResponse: o,
      shellResponse: c,
      responseSize: s,
      closed: f
    } = i;
    return eE(o, c, s, a, l, Date.now(), u), o.isUpgradeableISRFallback && e.fallbackRetryStatus === p.EntryStatus.Empty && !e.isCanceled && (e.fallbackRetryStatus = p.EntryStatus.Pending, eT(e, t, r, n, a, l, u)), {
      value: null,
      closed: f
    };
  }
  async function ev(e, t, r) {
    let n,
      a = new URL(e.canonicalUrl, location.origin),
      l = t.nextUrl,
      u = r.requestKey,
      c = u === y.ROOT_SEGMENT_REQUEST_KEY ? "/_index" : u,
      s = {
        [i.RSC_HEADER]: "1",
        [i.NEXT_ROUTER_PREFETCH_HEADER]: "1",
        [i.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: c
      };
    null !== l && (s[i.NEXT_URL] = l);
    let f = await eC(a, s);
    if (!f || !f.ok || "2" !== f.headers.get(i.NEXT_DID_POSTPONE_HEADER) || !f.body) return null;
    let d = (0, S.createPromiseWithResolvers)(),
      {
        stream: h,
        size: p,
        buffer: g
      } = await eI(f.body);
    d.resolve();
    let _ = await (0, o.createFromNextReadableStream)(h, s, {
      allowPartialStream: !0
    });
    if (0 === _.data.length || (f.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? _.buildId) !== (0, T.getNavigationBuildId)()) return null;
    let v = eR(_.a, 0);
    if (null === v) n = _;else if (0 === v) n = null;else try {
      n = await (0, o.decodeBufferedStage)(g.subarray(0, v), s);
    } catch {
      n = null;
    }
    return {
      serverResponse: _,
      responseSize: p,
      shellResponse: n,
      closed: d.promise
    };
  }
  function eE(e, t, r, n, a, l, u) {
    u === P.FetchStrategy.StaticShell ? (t !== e && eP(e, r, eS(n), a, l, P.FetchStrategy.PPR, P.FetchStrategy.PPR), null === t ? eg(n, l + 1e4) : eP(t, r, n, a, l, P.FetchStrategy.StaticShell, t === e ? P.FetchStrategy.PPR : P.FetchStrategy.StaticShell)) : (eP(e, r, n, a, l, P.FetchStrategy.PPR, P.FetchStrategy.PPR), null !== t && t !== e && eP(t, r, eS(n), a, l, P.FetchStrategy.StaticShell, P.FetchStrategy.StaticShell));
  }
  function eP(e, t, r, n, a, l, i) {
    let o = t / n,
      c = r;
    for (; null !== c;) null !== c.entry && (0, p.setSizeInCacheMap)(c.entry, o), c = c.parent;
    let f = e.data,
      d = e.isUpgradeableISRFallback,
      h = eR(e.needsRuntimeRequest, !1),
      y = r,
      g = 0;
    for (; null !== y && g < f.length;) {
      var _;
      let t = f[g];
      if (null === t || null === y.tree) {
        null !== y.entry && y.entry.status === p.EntryStatus.Pending && ef(y.entry, a + 1e4), y = y.parent, g++;
        continue;
      }
      let r = em(a, t.staleTime),
        n = (0, u.readVaryParams)(t.varyParams, e.rootVaryParams),
        o = ((_ = t.isPartial).then(eb, eb), "fulfilled" !== _.status),
        c = h && o ? l : i === P.FetchStrategy.StaticShell ? P.FetchStrategy.RuntimeShell : P.FetchStrategy.PPRRuntime,
        v = l === P.FetchStrategy.StaticShell ? y.tree.shellVaryPath : null !== n ? (0, s.getFulfilledSegmentVaryPath)(y.tree.varyPath, n) : (0, s.getSegmentVaryPathForRequest)(P.FetchStrategy.PPR, y.tree),
        E = y.entry;
      if (null !== E && E.status === p.EntryStatus.Pending) {
        let e = ec(E, t.rsc, r, o, d, c);
        l === P.FetchStrategy.StaticShell ? J(a, y.tree.shellVaryPath, e, y.tree.varyPath) : J(a, v, e, y.tree.varyPath);
      } else {
        let e = ec(et(ee(a), l, null), t.rsc, r, o, d, c);
        J(a, v, e, y.tree.varyPath);
      }
      y = y.parent, g++;
    }
    null !== y && eg(y, a + 1e4);
  }
  function eS(e) {
    let t = {
        tree: e.tree,
        entry: null,
        parent: null
      },
      r = t,
      n = e.parent;
    for (; null !== n;) {
      let e = {
        tree: n.tree,
        entry: null,
        parent: null
      };
      r.parent = e, r = e, n = n.parent;
    }
    return t;
  }
  function eR(e, t) {
    return (e.then(eb, eb), "fulfilled" === e.status && void 0 !== e.value) ? e.value : t;
  }
  function em(e, t) {
    let r;
    if (void 0 === t) return e + _.STATIC_STALETIME_MS;
    let n = t[Symbol.asyncIterator]();
    for (;;) {
      let e = n.next();
      if (e.then(eb, eb), "fulfilled" !== e.status || void 0 === e.value || e.value.done) break;
      r = e.value.value;
    }
    return void 0 === r || isNaN(r) ? e + _.STATIC_STALETIME_MS : e + A(r);
  }
  let eb = () => {};
  async function eT(e, t, r, n, a, l, u) {
    for (let i = 0; i < 3; i++) {
      let i;
      if (await new Promise(e => setTimeout(e, 2e3)), e.isCanceled) break;
      try {
        i = await ev(t, r, n);
      } catch {
        break;
      }
      if (e.isCanceled) break;
      if (null === i || i.serverResponse.isUpgradeableISRFallback) continue;
      let {
        serverResponse: o,
        shellResponse: s,
        responseSize: f
      } = i;
      eE(o, s, f, a, l, Date.now(), u), e.fallbackRetryStatus = p.EntryStatus.Fulfilled, (0, c.pingPrefetchTask)(e);
      return;
    }
    e.fallbackRetryStatus = p.EntryStatus.Rejected;
  }
  async function eO(e, t, r, n, a) {
    let l = e.key,
      c = new URL(t.canonicalUrl, location.origin),
      s = l.nextUrl;
    1 === a.size && a.has(t.metadata.requestKey) && (n = w);
    let f = {
      [i.RSC_HEADER]: "1",
      [i.NEXT_ROUTER_STATE_TREE_HEADER]: (0, g.prepareFlightRouterStateForRequest)(n)
    };
    switch (null !== s && (f[i.NEXT_URL] = s), r) {
      case P.FetchStrategy.Full:
        break;
      case P.FetchStrategy.PPRRuntime:
        f[i.NEXT_ROUTER_PREFETCH_HEADER] = "2";
        break;
      case P.FetchStrategy.RuntimeShell:
        f[i.NEXT_ROUTER_PREFETCH_HEADER] = "3";
        break;
      case P.FetchStrategy.LoadingBoundary:
        f[i.NEXT_ROUTER_PREFETCH_HEADER] = "1";
    }
    try {
      let e,
        l,
        i = await eC(c, f);
      if (!i || !i.ok || !i.body) return eA(a, Date.now() + 1e4), null;
      let s = (0, h.getRenderedSearch)(i);
      if (s !== t.renderedSearch) return eA(a, Date.now() + 1e4), null;
      let v = (0, S.createPromiseWithResolvers)(),
        E = null,
        m = null;
      if (r === P.FetchStrategy.Full) {
        var d, y, _;
        let t, r;
        d = i.body, y = v.resolve, _ = function (e) {
          if (null === E) return;
          let t = e / E.length;
          for (let e of E) (0, p.setSizeInCacheMap)(e, t);
        }, t = 0, r = d.getReader(), e = new ReadableStream({
          async pull(e) {
            for (;;) {
              let {
                done: n,
                value: a
              } = await r.read();
              if (!n) {
                e.enqueue(a), _(t += a.byteLength);
                continue;
              }
              e.close(), y();
              return;
            }
          }
        });
      } else {
        let {
          stream: t,
          size: r
        } = await eI(i.body);
        v.resolve(), e = t, m = r;
      }
      let [T, A] = await Promise.all([(0, o.createFromNextReadableStream)(e, f, {
          allowPartialStream: !0
        }), i.cacheData]),
        w = Date.now(),
        N = await eM(w, T.s, i),
        C = i.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? T.b,
        I = N;
      if (null === A) l = T;else {
        let e = await (0, o.resolveShellStageData)(A, T, f);
        if (null === e) l = T;else {
          let t = em(w, e.s);
          r === P.FetchStrategy.RuntimeShell ? (l = e, I = t, eD(w, P.FetchStrategy.PPR, T.f, C, T.h, T.r ?? null, N, n, s, A.isResponsePartial)) : (l = T, eD(w, P.FetchStrategy.RuntimeShell, e.f, C, e.h, e.r ?? null, t, n, s, !0));
        }
      }
      let F = l.r ?? null,
        j = (0, u.readVaryParams)(l.h, F),
        M = r === P.FetchStrategy.RuntimeShell || r === P.FetchStrategy.PPRRuntime && (A?.isResponsePartial ?? !1),
        D = (0, g.normalizeFlightData)(l.f);
      if ("string" == typeof D) return eA(a, Date.now() + 1e4), null;
      let U = (0, b.convertServerPatchToFullTree)(w, n, D, s, R.UnknownDynamicStaleTime);
      if (E = ew(w, r, D, C, M, j, F, I, U, a), null !== m && null !== E && E.length > 0) {
        let e = m / E.length;
        for (let t of E) (0, p.setSizeInCacheMap)(t, e);
      }
      return {
        value: null,
        closed: v.promise
      };
    } catch (e) {
      return eA(a, Date.now() + 1e4), null;
    }
  }
  function eA(e, t) {
    let r = [];
    for (let n of e.values()) n.status === p.EntryStatus.Pending ? ef(n, t) : n.status === p.EntryStatus.Fulfilled && r.push(n);
    return r;
  }
  function ew(e, t, r, n, a, l, i, o, c, s) {
    if (n && n !== (0, T.getNavigationBuildId)()) return null !== s && eA(s, e + 1e4), null;
    let f = c.routeTree,
      d = null !== c.metadataVaryPath ? el(c.metadataVaryPath) : null;
    for (let n of r) {
      let r = n.seedData;
      if (null !== r) {
        let l = n.segmentPath,
          c = f;
        for (let t = 0; t < l.length; t += 2) {
          let r = l[t],
            n = c?.slots?.get(r);
          if (void 0 === n) return null !== s && eA(s, e + 1e4), null;
          c = n;
        }
        !function e(t, r, n, a, l, i, o, c) {
          let s = l[0];
          eN(t, r, s, null === s || i, a, (0, u.readVaryParams)(l[4], o), n, c);
          let f = n.slots;
          if (null !== f) {
            let n = l[1];
            for (let [l, u] of f) {
              let s = n[l];
              null != s && e(t, r, u, a, s, i, o, c);
            }
          }
        }(e, t, c, o, r, a, i, s);
      }
      let c = n.head;
      null !== c && null !== d && eN(e, t, c, n.isHeadPartial, o, l, d, s);
    }
    return null !== s ? eA(s, e + 1e4) : null;
  }
  function eN(e, t, r, n, a, l, u, i) {
    let o = null;
    t === P.FetchStrategy.RuntimeShell ? o = u.shellVaryPath : t !== P.FetchStrategy.Full && null !== l && (o = (0, s.getFulfilledSegmentVaryPath)(u.varyPath, l));
    let c = null !== i ? i.get(u.requestKey) : void 0;
    if (void 0 !== c) {
      let l = ec(c, r, a, n, !1, t),
        i = null !== o ? o : t !== P.FetchStrategy.Full ? (0, s.getSegmentVaryPathForRequest)(t, u) : null;
      null !== i && ((0, p.setInCacheMap)(C, i, l, !1), Z(e, u.varyPath, l));
    } else {
      let l = Y(e, t, u, null);
      if (l.status === p.EntryStatus.Empty) {
        let i = ec(et(l, t, null), r, a, n, !1, t);
        null !== o && ((0, p.setInCacheMap)(C, o, i, !1), Z(e, u.varyPath, i));
      } else {
        let l = ec(et(ee(e), t, null), r, a, n, !1, t);
        J(e, null !== o ? o : (0, s.getSegmentVaryPathForRequest)(t, u), l, u.varyPath);
      }
    }
  }
  async function eC(e, t) {
    let r = await (0, o.createFetch)(e, t, "low", !1);
    if (!r.ok) return null;
    {
      let e = r.headers.get("content-type");
      if (!(e && e.startsWith(i.RSC_CONTENT_TYPE_HEADER))) return null;
    }
    return r;
  }
  async function eI(e, t) {
    let r,
      n = e.getReader(),
      a = [],
      l = 0;
    for (;;) {
      let {
        done: e,
        value: r
      } = await n.read();
      if (e) break;
      if (void 0 !== t && l + r.byteLength >= t) {
        let e = t - l;
        e > 0 && (a.push(r.byteLength > e ? r.subarray(0, e) : r), l += e), n.cancel();
        break;
      }
      a.push(r), l += r.byteLength;
    }
    if (1 === a.length) r = a[0];else if (a.length > 1) {
      r = new Uint8Array(l);
      let e = 0;
      for (let t of a) r.set(t, e), e += t.byteLength;
    } else r = new Uint8Array(0);
    return {
      stream: new ReadableStream({
        start(e) {
          e.enqueue(r), e.close();
        }
      }),
      size: l,
      buffer: r
    };
  }
  function eF(e, t) {
    return e < t;
  }
  function ej(e, t) {
    let r = parseInt(t.headers.get(i.NEXT_ROUTER_STALE_TIME_HEADER) ?? "", 10);
    return e + (isNaN(r) ? _.STATIC_STALETIME_MS : A(r));
  }
  async function eM(e, t, r) {
    if (void 0 !== t) {
      let r;
      for await (let e of t) r = e;
      if (void 0 !== r) return e + (isNaN(r) ? _.STATIC_STALETIME_MS : A(r));
    }
    return void 0 !== r ? ej(e, r) : e + _.STATIC_STALETIME_MS;
  }
  function eD(e, t, r, n, a, l, i, o, c, s) {
    let f = (0, u.readVaryParams)(a, l),
      d = (0, g.normalizeFlightData)(r);
    if ("string" == typeof d) return;
    let h = (0, b.convertServerPatchToFullTree)(e, o, d, c, R.UnknownDynamicStaleTime);
    ew(e, t, d, n, s, f, l, i, h, null);
  }
  async function eU(e, t, r, n) {
    let {
        stream: a,
        isPartial: l
      } = await ek(t),
      i = await (0, o.createFromNextReadableStream)(a, void 0, {
        allowPartialStream: !0
      }),
      c = i.r ?? null,
      s = (0, u.readVaryParams)(i.h, c),
      f = await eM(e, i.s),
      d = (0, g.normalizeFlightData)(i.f);
    if ("string" == typeof d) return null;
    let h = (0, b.convertServerPatchToFullTree)(e, r, d, n, R.UnknownDynamicStaleTime);
    return {
      flightDatas: d,
      navigationSeed: h,
      buildId: i.b,
      isResponsePartial: l,
      headVaryParams: s,
      rootVaryParamsIterable: c,
      staleAt: f
    };
  }
  async function ek(e) {
    let t = e.getReader(),
      {
        done: r,
        value: n
      } = await t.read();
    if (r || !n || 0 === n.byteLength) return {
      stream: new ReadableStream({
        start: e => e.close()
      }),
      isPartial: !1
    };
    let a = n[0],
      l = 35 === a || 126 === a,
      u = l ? n.byteLength > 1 ? n.subarray(1) : null : n;
    return {
      isPartial: !!l && 126 === a,
      stream: new ReadableStream({
        start(e) {
          u && e.enqueue(u);
        },
        async pull(e) {
          let r = await t.read();
          r.done ? e.close() : e.enqueue(r.value);
        }
      })
    };
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
