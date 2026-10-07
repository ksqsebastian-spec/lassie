// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 156711.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return I;
    }
  });
  let r = e.r(330053),
    a = e.r(171266),
    i = e.r(281889),
    o = a._(e.r(513679)),
    l = e.r(516968),
    s = e.r(909740),
    u = e.r(988817),
    c = e.r(509156),
    d = e.r(446615),
    f = e.r(125054),
    p = e.r(649695),
    h = e.r(697299),
    m = e.r(958544),
    g = e.r(992955),
    y = e.r(286193),
    v = e.r(147640),
    b = e.r(318806),
    _ = e.r(134283),
    S = e.r(913151),
    w = e.r(611069),
    E = e.r(517460),
    x = e.r(480106),
    k = r._(e.r(131610)),
    P = r._(e.r(408541)),
    T = e.r(224774);
  e.r(823971);
  let R = {};
  function O({
    appRouterState: e
  }) {
    return (0, o.useInsertionEffect)(() => {
      let {
          tree: t,
          pushRef: n,
          canonicalUrl: r,
          renderedSearch: a
        } = e,
        i = {
          ...(n.preserveCustomHistoryState ? window.history.state : {}),
          __NA: !0,
          __PRIVATE_NEXTJS_INTERNALS_TREE: {
            tree: t,
            renderedSearch: a
          }
        };
      n.pendingPush && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== r ? (n.pendingPush = !1, window.history.pushState(i, "", r)) : window.history.replaceState(i, "", r), (0, f.setLastCommittedTree)(t);
    }, [e]), (0, o.useEffect)(() => {
      (0, x.pingVisibleLinks)(e.nextUrl, e.tree);
    }, [e.nextUrl, e.tree]), null;
  }
  function C(e) {
    null == e && (e = {});
    let t = window.history.state,
      n = t?.__NA;
    n && (e.__NA = n);
    let r = t?.__PRIVATE_NEXTJS_INTERNALS_TREE;
    return r && (e.__PRIVATE_NEXTJS_INTERNALS_TREE = r), e;
  }
  function N({
    headCacheNode: e
  }) {
    let t = null !== e ? e.head : null,
      n = null !== e ? e.prefetchHead : null,
      r = null !== n ? n : t;
    return (0, o.useDeferredValue)(t, r);
  }
  function A({
    actionQueue: e,
    globalError: t,
    webSocket: n,
    staticIndicatorState: r
  }) {
    let a,
      u = (0, d.useActionQueue)(e),
      {
        canonicalUrl: f
      } = u,
      {
        searchParams: _,
        pathname: x
      } = (0, o.useMemo)(() => {
        let e = new URL(f, "u" < typeof window ? "http://n" : window.location.href);
        return {
          searchParams: e.searchParams,
          pathname: (0, v.hasBasePath)(e.pathname) ? (0, y.removeBasePath)(e.pathname) : e.pathname
        };
      }, [f]);
    (0, o.useEffect)(() => {
      let e = (0, b.extractSourcePageFromFlightRouterState)(u.tree);
      void 0 !== e ? window.next.__internal_src_page = e : delete window.next.__internal_src_page;
    }, [u.tree]), (0, o.useEffect)(() => {
      function e(e) {
        e.persisted && window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE && (R.pendingMpaPath = void 0, (0, d.dispatchAppRouterAction)({
          type: s.ACTION_RESTORE,
          url: new URL(window.location.href),
          historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
        }));
      }
      return window.addEventListener("pageshow", e), () => {
        window.removeEventListener("pageshow", e);
      };
    }, []), (0, o.useEffect)(() => {
      function e(e) {
        let t = "reason" in e ? e.reason : e.error;
        if ((0, E.isRedirectError)(t)) {
          e.preventDefault();
          let n = (0, w.getURLFromRedirectError)(t);
          "push" === (0, w.getRedirectTypeFromError)(t) ? S.publicAppRouterInstance.push(n, {}) : S.publicAppRouterInstance.replace(n, {});
        }
      }
      return window.addEventListener("error", e), window.addEventListener("unhandledrejection", e), () => {
        window.removeEventListener("error", e), window.removeEventListener("unhandledrejection", e);
      };
    }, []);
    let {
      pushRef: P
    } = u;
    if (P.mpaNavigation) {
      if (R.pendingMpaPath !== f) {
        let e = window.location;
        P.pendingPush ? e.assign(f) : e.replace(f), R.pendingMpaPath = f;
      }
      throw g.unresolvedThenable;
    }
    (0, o.useEffect)(() => {
      let e = window.history.pushState.bind(window.history),
        t = window.history.replaceState.bind(window.history),
        n = e => {
          let t = window.location.href,
            n = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
          (0, o.startTransition)(() => {
            (0, d.dispatchAppRouterAction)({
              type: s.ACTION_RESTORE,
              url: new URL(e ?? t, t),
              historyState: n
            });
          });
        };
      window.history.pushState = function (t, r, a) {
        return t?.__NA || t?._N || (t = C(t), a && n(a)), e(t, r, a);
      }, window.history.replaceState = function (e, r, a) {
        return e?.__NA || e?._N || (e = C(e), a && n(a)), t(e, r, a);
      };
      let r = e => {
        if (e.state) {
          if (!e.state.__NA) return void window.location.reload();
          (0, o.startTransition)(() => {
            (0, S.dispatchTraverseAction)(window.location.href, e.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
          });
        }
      };
      return window.addEventListener("popstate", r), () => {
        window.history.pushState = e, window.history.replaceState = t, window.removeEventListener("popstate", r);
      };
    }, []);
    let {
        cache: I,
        tree: L,
        nextUrl: j,
        focusAndScrollRef: M,
        previousNextUrl: D
      } = u,
      $ = (0, o.useMemo)(() => (0, m.findHeadInCache)(I, L[1]), [I, L]),
      z = (0, o.useMemo)(() => (0, b.getSelectedParams)(L), [L]),
      F = (0, o.useMemo)(() => ({
        parentTree: L,
        parentCacheNode: I,
        parentSegmentPath: null,
        parentParams: {},
        parentLoadingData: null,
        debugNameContext: "/",
        url: f,
        isActive: !0
      }), [L, I, f]),
      U = (0, o.useMemo)(() => ({
        tree: L,
        focusAndScrollRef: M,
        nextUrl: j,
        previousNextUrl: D
      }), [L, M, j, D]);
    if (null !== $) {
      let [e, t, n] = $;
      a = (0, i.jsx)(N, {
        headCacheNode: e
      }, "u" < typeof window ? n : t);
    } else a = null;
    let B = (0, i.jsxs)(h.RedirectBoundary, {
      children: [a, (0, i.jsx)(T.RootLayoutBoundary, {
        children: I.rsc
      }), (0, i.jsx)(p.AppRouterAnnouncer, {
        tree: L
      })]
    });
    return B = (0, i.jsx)(k.default, {
      errorComponent: t[0],
      errorStyles: t[1],
      children: B
    }), (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(O, {
        appRouterState: u
      }), null, (0, i.jsx)(c.NavigationPromisesContext.Provider, {
        value: null,
        children: (0, i.jsx)(c.PathParamsContext.Provider, {
          value: z,
          children: (0, i.jsx)(c.PathnameContext.Provider, {
            value: x,
            children: (0, i.jsx)(c.SearchParamsContext.Provider, {
              value: _,
              children: (0, i.jsx)(l.GlobalLayoutRouterContext.Provider, {
                value: U,
                children: (0, i.jsx)(l.AppRouterContext.Provider, {
                  value: S.publicAppRouterInstance,
                  children: (0, i.jsx)(l.LayoutRouterContext.Provider, {
                    value: F,
                    children: B
                  })
                })
              })
            })
          })
        })
      })]
    });
  }
  function I({
    actionQueue: e,
    globalErrorState: t,
    webSocket: n,
    staticIndicatorState: r
  }) {
    (0, _.useNavFailureHandler)();
    let a = (0, i.jsx)(A, {
      actionQueue: e,
      globalError: t,
      webSocket: n,
      staticIndicatorState: r
    });
    return (0, i.jsx)(k.default, {
      errorComponent: P.default,
      children: a
    });
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
