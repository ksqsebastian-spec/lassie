// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 442957.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    LoadingBoundaryProvider: function () {
      return C;
    },
    default: function () {
      return T;
    }
  };
  for (var l in n) Object.defineProperty(r, l, {
    enumerable: !0,
    get: n[l]
  });
  let u = e.r(330053),
    a = e.r(171266),
    o = e.r(281889),
    d = a._(e.r(513679)),
    s = u._(e.r(345078)),
    i = e.r(516968),
    c = e.r(992955),
    f = e.r(515253),
    p = e.r(818073),
    y = e.r(697299),
    b = e.r(829524);
  e.r(660972);
  let m = e.r(216843),
    _ = e.r(438424);
  e.r(716295);
  let h = e.r(509156),
    P = e.r(744838),
    j = e.r(389242);
  s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(e, t, r) {
    let n = e.getClientRects();
    if (0 === n.length) return 0;
    let l = 1 / 0;
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      t.top < l && (l = t.top);
    }
    return l >= r() && l <= t ? 1 : 2;
  }
  d.default.Component;
  let g = function (e) {
    let t = d.default.useRef(null);
    return (0, d.useLayoutEffect)(() => {
      let {
          focusAndScrollRef: r,
          cacheNode: n
        } = e,
        l = r.forceScroll ? r.scrollRef : n.scrollRef;
      if (null === l || !l.current) return;
      let u = null,
        a = r.hashFragment;
      if (a) {
        var o;
        if (null === (u = "top" === (o = a) ? document.body : document.getElementById(o) ?? document.getElementsByName(o)[0] ?? null)) {
          l.current = !1, r.onlyHashChange = !1, r.hashFragment = null;
          return;
        }
      } else u = t.current;
      if (null === u) return;
      let d = !1;
      (0, p.disableSmoothScrollDuringRouteTransition)(() => {
        let e = document.documentElement,
          t = null,
          r = null,
          n = null,
          o = () => {
            var r, l;
            let u, a;
            return null === n && (r = e, l = t, n = !Number.isFinite(a = Number.parseFloat(u = getComputedStyle(r).scrollPaddingTop)) || a < 0 ? 0 : u.endsWith("px") ? a : u.endsWith("%") ? a / 100 * l : 0), n;
          };
        (a || (t = e.clientHeight, 0 !== (r = v(u, t, o)))) && ((d = !0, l.current = !1, a) ? u.scrollIntoView() : 1 !== r && (e.scrollTop = 0, 2 === v(u, t, o) && u.scrollIntoView()));
      }, {
        dontForceLayout: !0,
        onlyHashChange: r.onlyHashChange
      }), d && (r.onlyHashChange = !1, r.hashFragment = null);
    }, void 0), (0, o.jsx)(d.Fragment, {
      ref: t,
      children: e.children
    });
  };
  function O({
    children: e,
    cacheNode: t
  }) {
    let r = (0, d.useContext)(i.GlobalLayoutRouterContext);
    if (!r) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
      value: "E473",
      enumerable: !1,
      configurable: !0
    });
    return (0, o.jsx)(g, {
      focusAndScrollRef: r.focusAndScrollRef,
      cacheNode: t,
      children: e
    });
  }
  function x({
    tree: e,
    segmentPath: t,
    debugNameContext: r,
    cacheNode: n,
    params: l,
    url: u,
    isActive: a
  }) {
    let s,
      f = (0, d.useContext)(i.GlobalLayoutRouterContext);
    if ((0, d.useContext)(h.NavigationPromisesContext), !f) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
      value: "E473",
      enumerable: !1,
      configurable: !0
    });
    let p = null !== n ? n : (0, d.use)(c.unresolvedThenable),
      y = null !== p.prefetchRsc ? p.prefetchRsc : p.rsc,
      b = (0, d.useDeferredValue)(p.rsc, y);
    if ((0, j.isDeferredRsc)(b)) {
      let e = (0, d.use)(b);
      null === e && (0, d.use)(c.unresolvedThenable), s = e;
    } else null === b && (0, d.use)(c.unresolvedThenable), s = b;
    let m = s;
    return (0, o.jsx)(i.LayoutRouterContext.Provider, {
      value: {
        parentTree: e,
        parentCacheNode: p,
        parentSegmentPath: t,
        parentParams: l,
        parentLoadingData: null,
        debugNameContext: r,
        url: u,
        isActive: a
      },
      children: m
    });
  }
  function C({
    loading: e,
    children: t
  }) {
    let r = (0, d.use)(i.LayoutRouterContext);
    return null === r ? t : (0, o.jsx)(i.LayoutRouterContext.Provider, {
      value: {
        parentTree: r.parentTree,
        parentCacheNode: r.parentCacheNode,
        parentSegmentPath: r.parentSegmentPath,
        parentParams: r.parentParams,
        parentLoadingData: e,
        debugNameContext: r.debugNameContext,
        url: r.url,
        isActive: r.isActive
      },
      children: t
    });
  }
  function R({
    name: e,
    loading: t,
    children: r
  }) {
    if (null !== t) {
      let n = t[0],
        l = t[1],
        u = t[2];
      return (0, o.jsx)(d.Suspense, {
        name: e,
        fallback: (0, o.jsxs)(o.Fragment, {
          children: [l, u, n]
        }),
        children: r
      });
    }
    return (0, o.jsx)(o.Fragment, {
      children: r
    });
  }
  function T({
    parallelRouterKey: e,
    error: t,
    errorStyles: r,
    errorScripts: n,
    templateStyles: l,
    templateScripts: u,
    template: a,
    notFound: s,
    forbidden: p,
    unauthorized: h,
    segmentViewBoundaries: j
  }) {
    let v = (0, d.useContext)(i.LayoutRouterContext);
    if (!v) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
      value: "E56",
      enumerable: !1,
      configurable: !0
    });
    let {
        parentTree: g,
        parentCacheNode: C,
        parentSegmentPath: M,
        parentParams: S,
        parentLoadingData: E,
        url: N,
        isActive: F,
        debugNameContext: A
      } = v,
      B = g[0],
      D = null === M ? [e] : M.concat([B, e]),
      L = g[1][e],
      H = C.slots;
    (void 0 === L || null === H) && (0, d.use)(c.unresolvedThenable);
    let w = L[0],
      k = H[e] ?? null,
      U = (0, m.createRouterCacheKey)(w, !0),
      V = (0, _.useRouterBFCache)(L, k, U),
      I = [];
    do {
      let e = V.tree,
        d = V.cacheNode,
        c = V.stateKey,
        m = e[0],
        _ = S;
      if (Array.isArray(m)) {
        let e = m[0],
          t = m[1],
          r = m[2],
          n = (0, P.getParamValueFromCacheKey)(t, r);
        null !== n && (_ = {
          ...S,
          [e]: n
        });
      }
      let j = function (e) {
          if ("/" === e) return "/";
          if ("string" == typeof e) if ("(__SLOT__)" === e) return;else return e + "/";
          return e[1] + "/";
        }(m),
        v = j ?? A,
        g = void 0 === j ? void 0 : A,
        C = (0, o.jsxs)(O, {
          cacheNode: d,
          children: [(0, o.jsx)(f.ErrorBoundary, {
            errorComponent: t,
            errorStyles: r,
            errorScripts: n,
            children: (0, o.jsx)(R, {
              name: g,
              loading: E,
              children: (0, o.jsx)(b.HTTPAccessFallbackBoundary, {
                notFound: s,
                forbidden: p,
                unauthorized: h,
                children: (0, o.jsxs)(y.RedirectBoundary, {
                  children: [(0, o.jsx)(x, {
                    url: N,
                    tree: e,
                    params: _,
                    cacheNode: d,
                    segmentPath: D,
                    debugNameContext: v,
                    isActive: F && c === U
                  }), null]
                })
              })
            })
          }), null]
        }),
        T = (0, o.jsxs)(i.TemplateContext.Provider, {
          value: C,
          children: [l, u, a]
        }, c);
      I.push(T), V = V.next;
    } while (null !== V);
    return I;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
