// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 284809.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    discoverKnownRoute: function () {
      return p;
    },
    matchKnownRoute: function () {
      return _;
    },
    resetKnownRoutes: function () {
      return v;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(542910),
    u = e.r(830664),
    i = e.r(453983),
    o = e.r(744838),
    c = e.r(109336),
    s = e.r(582853);
  function f(e, t) {
    let r = t.pattern;
    return null === r ? null : (0, i.isValueExpired)(e, (0, u.getCurrentRouteCacheVersion)(), r) ? (t.pattern = null, null) : r;
  }
  function d() {
    return {
      staticChildren: null,
      dynamicChild: null,
      dynamicChildParamName: null,
      dynamicChildParamType: null,
      pattern: null
    };
  }
  let h = d();
  function p(e, t, r, n, a, l, i, o, s, f, d) {
    let p = (0, c.splitPathnameIntoParts)(t);
    if (null !== a) {
      let c = (0, u.fulfillRouteCacheEntry)(e, a, l, i, o, s, f);
      return d && (c.hasDynamicRewrite = !0), g(h, l, p, 0, c, e, t, r, n, l, i, o, s, f, d), c;
    }
    return g(h, l, p, 0, null, e, t, r, n, l, i, o, s, f, d);
  }
  function y(e, t, r, n, a, l, i, o, c, s) {
    return null !== e ? e : (0, u.writeRouteIntoCache)(t, r, n, a, l, i, o, c, s);
  }
  function g(e, t, r, n, a, l, i, c, s, h, p, _, v, E, P) {
    let S,
      R = t.segment,
      m = n < r.length ? r[n] : null,
      b = e,
      T = n;
    if ("string" == typeof R) {
      if ((0, o.doesStaticSegmentAppearInURL)(R)) {
        if (null === m || m !== R) return y(a, l, i, c, s, h, p, _, v, E);
        null === e.staticChildren && (e.staticChildren = new Map());
        let t = e.staticChildren.get(m);
        void 0 === t && (t = d(), e.staticChildren.set(m, t)), b = t, T = n + 1;
      }
    } else {
      let t = R[0],
        u = R[2],
        o = R[3];
      if ("oc" !== u && null === m || null !== o && null !== m && o.includes(m)) return y(a, l, i, c, s, h, p, _, v, E);
      if (b = function (e, t, r) {
        if (null !== e.dynamicChild) return e.dynamicChild;
        let n = d();
        return e.dynamicChild = n, e.dynamicChildParamName = t, e.dynamicChildParamType = r, n;
      }(e, t, u), null !== o) for (let t of (null === e.staticChildren && (e.staticChildren = new Map()), o)) e.staticChildren.has(t) || e.staticChildren.set(t, d());
      T = "c" === u || "oc" === u ? r.length : n + 1;
    }
    let O = t.slots,
      A = null;
    if (null !== O) {
      for (let e of O.values()) null === e.refreshState && (A = g(b, e, r, T, a, l, i, c, s, h, p, _, v, E, P));
      return null !== A ? A : y(a, l, i, c, s, h, p, _, v, E);
    }
    if (T < r.length) return y(a, l, i, c, s, h, p, _, v, E);
    let w = f(l, b);
    return null !== w ? (P && (w.hasDynamicRewrite = !0), w) : (S = null !== a ? a : (0, u.writeRouteIntoCache)(l, i, c, s, h, p, _, v, E), P && (S.hasDynamicRewrite = !0), b.pattern = S, S);
  }
  function _(e, t, r) {
    let n = (0, c.splitPathnameIntoParts)(t),
      a = new Map(),
      i = function e(t, r, n, a, l) {
        let u = a < n.length ? n[a] : null;
        if (null === r.staticChildren) {
          if (null === u) {
            let e = f(t, r);
            if (null !== e && !e.hasDynamicRewrite) return {
              part: r,
              pattern: e
            };
          }
          return null;
        }
        if (null !== u) {
          let i = r.staticChildren.get(u);
          if (void 0 !== i) {
            if (null === i.pattern && null === i.dynamicChild && null === i.staticChildren) return null;
            let r = e(t, i, n, a + 1, l);
            return null !== r ? r : null;
          }
        }
        if (null !== r.dynamicChild) {
          let i = r.dynamicChild,
            o = r.dynamicChildParamName,
            c = r.dynamicChildParamType,
            s = f(t, i);
          switch (c) {
            case "c":
              if (null !== s && !s.hasDynamicRewrite && null !== u) return l.set(o, n.slice(a).join("/")), {
                part: i,
                pattern: s
              };
              break;
            case "oc":
              if (null !== s && !s.hasDynamicRewrite) {
                if (null !== u) return l.set(o, n.slice(a).join("/")), {
                  part: i,
                  pattern: s
                };
                let e = f(t, r);
                if (null === e || e.hasDynamicRewrite) return l.set(o, ""), {
                  part: i,
                  pattern: s
                };
              }
              break;
            case "d":
              if (null !== u) return l.set(o, u), e(t, i, n, a + 1, l);
              break;
            case "ci(..)(..)":
            case "ci(.)":
            case "ci(..)":
            case "ci(...)":
            case "di(..)(..)":
            case "di(.)":
            case "di(..)":
            case "di(...)":
              return null;
          }
        }
        if (null === u) {
          let e = f(t, r);
          if (null !== e && !e.hasDynamicRewrite) return {
            part: r,
            pattern: e
          };
        }
        return null;
      }(e, h, n, 0, a);
    if (null === i) return null;
    let o = i.part,
      d = i.pattern;
    if (d.couldBeIntercepted) return null;
    let p = {
        metadataVaryPath: null
      },
      y = function e(t, r, n, a, u) {
        let i,
          o = t.segment,
          c = (t.prefetchHints & l.PrefetchHint.IsRootLayoutOrAbove) != 0,
          f = o;
        if ("string" != typeof o) {
          let e = o[0],
            t = o[2],
            n = o[3],
            l = r.get(e);
          void 0 !== l ? (f = [e, l, t, n], i = (0, s.appendLayoutVaryPath)(a, l, e, c)) : i = a;
        } else i = a;
        let d = null,
          h = t.slots;
        if (null !== h) for (let [t, a] of (d = new Map(), h)) d.set(t, e(a, r, n, i, u));
        if (t.isPage) {
          let e = (0, s.finalizePageVaryPath)(t.requestKey, n, i);
          return null === u.metadataVaryPath && (u.metadataVaryPath = (0, s.finalizeMetadataVaryPath)(t.requestKey, n, i)), {
            requestKey: t.requestKey,
            segment: f,
            shellVaryPath: (0, s.getShellSegmentVaryPath)(e),
            refreshState: t.refreshState,
            varyPath: e,
            isPage: !0,
            slots: d,
            prefetchHints: t.prefetchHints
          };
        }
        {
          let e = (0, s.finalizeLayoutVaryPath)(t.requestKey, i);
          return {
            requestKey: t.requestKey,
            segment: f,
            shellVaryPath: (0, s.getShellSegmentVaryPath)(e),
            refreshState: t.refreshState,
            varyPath: e,
            isPage: !1,
            slots: d,
            prefetchHints: t.prefetchHints
          };
        }
      }(d.tree, a, r, null, p),
      g = p.metadataVaryPath;
    if (null === g) return null;
    let _ = (0, u.createMetadataRouteTree)(g),
      v = {
        canonicalUrl: t + r,
        status: u.EntryStatus.Fulfilled,
        blockedTasks: null,
        tree: y,
        metadata: _,
        couldBeIntercepted: d.couldBeIntercepted,
        supportsPerSegmentPrefetching: d.supportsPerSegmentPrefetching,
        hasDynamicRewrite: !1,
        renderedSearch: r,
        ref: null,
        size: d.size,
        staleAt: d.staleAt,
        version: d.version
      };
    return o.pattern = v, v;
  }
  function v() {
    h = d();
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
