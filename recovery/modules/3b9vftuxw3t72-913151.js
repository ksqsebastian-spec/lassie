// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 913151.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    createMutableActionQueue: function () {
      return P;
    },
    dispatchNavigateAction: function () {
      return m;
    },
    dispatchTraverseAction: function () {
      return b;
    },
    getCurrentAppRouterState: function () {
      return S;
    },
    publicAppRouterInstance: function () {
      return T;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(909740),
    u = e.r(652313),
    i = e.r(513679),
    o = e.r(428199),
    c = e.r(888474),
    s = e.r(560908);
  e.r(383788);
  let f = e.r(446615);
  e.r(284809), e.r(389242);
  let d = e.r(155044),
    h = e.r(232560),
    p = e.r(480106),
    y = e.r(293384),
    g = e.r(842698);
  function _(e, t, r) {
    e.pending === t && (e.pending = t.next, null !== e.pending) ? v({
      actionQueue: e,
      action: e.pending,
      setState: r
    }) : null === e.pending && e.needsRefresh && (e.needsRefresh = !1, e.dispatch({
      type: l.ACTION_REFRESH
    }, r));
  }
  async function v({
    actionQueue: e,
    action: t,
    setState: r
  }) {
    let n = e.state;
    e.pending = t;
    let a = t.payload,
      u = e.action(n, a);
    function i(n) {
      if (t.discarded) {
        t.payload.type === l.ACTION_SERVER_ACTION && t.payload.didRevalidate && (e.needsRefresh = !0), _(e, t, r);
        return;
      }
      e.state = n, _(e, t, r), t.resolve(n);
    }
    (0, o.isThenable)(u) ? u.then(i, n => {
      _(e, t, r), t.reject(n);
    }) : i(u);
  }
  let E = null;
  function P(e) {
    let t = {
      state: e,
      dispatch: (e, r) => function (e, t, r) {
        let n = {
          resolve: r,
          reject: () => {}
        };
        if (t.type !== l.ACTION_RESTORE) {
          let e = new Promise((e, t) => {
            n = {
              resolve: e,
              reject: t
            };
          });
          (0, i.startTransition)(() => {
            r(e);
          });
        }
        let a = {
          payload: t,
          next: null,
          resolve: n.resolve,
          reject: n.reject
        };
        null === e.pending ? (e.last = a, v({
          actionQueue: e,
          action: a,
          setState: r
        })) : t.type === l.ACTION_NAVIGATE || t.type === l.ACTION_RESTORE ? (e.pending.discarded = !0, a.next = e.pending.next, e.last === e.pending && (e.last = a), v({
          actionQueue: e,
          action: a,
          setState: r
        })) : (null !== e.last && (e.last.next = a), e.last = a);
      }(t, e, r),
      action: async (e, t) => (0, u.reducer)(e, t),
      pending: null,
      last: null
    };
    if ("u" > typeof window) {
      if (null !== E) throw Object.defineProperty(Error("Internal Next.js Error: createMutableActionQueue was called more than once"), "__NEXT_ERROR_CODE", {
        value: "E624",
        enumerable: !1,
        configurable: !0
      });
      E = t;
    }
    return t;
  }
  function S() {
    return null !== E ? E.state : null;
  }
  function R() {
    if (null === E) throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."), "__NEXT_ERROR_CODE", {
      value: "E668",
      enumerable: !1,
      configurable: !0
    });
    return E;
  }
  function m(e, t, r, n, a, u) {
    if (a) for (let e of a) (0, i.addTransitionType)(e);
    let o = new URL((0, d.addBasePath)(e), location.href);
    (0, p.setLinkForCurrentNavigation)(n), (0, g.startRouterTransition)(e, t, R().state.tree, u), (0, f.dispatchAppRouterAction)({
      type: l.ACTION_NAVIGATE,
      url: o,
      isExternalUrl: (0, h.isExternalURL)(o),
      locationSearch: location.search,
      scrollBehavior: r,
      navigateType: t
    });
  }
  function b(e, t) {
    (0, g.startRouterTransition)(e, "traverse", R().state.tree, null), (0, f.dispatchAppRouterAction)({
      type: l.ACTION_RESTORE,
      url: new URL(e),
      historyState: t
    });
  }
  let T = {
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    prefetch: (e, t) => {
      let r;
      if ((0, y.isJavaScriptURLString)(e)) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      let n = R();
      switch (t?.kind ?? l.PrefetchKind.AUTO) {
        case l.PrefetchKind.AUTO:
          r = c.FetchStrategy.PPR;
          break;
        case l.PrefetchKind.FULL:
          r = c.FetchStrategy.Full;
          break;
        default:
          r = c.FetchStrategy.PPR;
      }
      (0, s.prefetch)(e, n.state.nextUrl, n.state.tree, r, t?.onInvalidate ?? null);
    },
    replace: (e, t) => {
      if ((0, y.isJavaScriptURLString)(e)) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      (0, i.startTransition)(() => {
        m(e, "replace", t?.scroll === !1 ? l.ScrollBehavior.NoScroll : l.ScrollBehavior.Default, null, t?.transitionTypes, null);
      });
    },
    push: (e, t) => {
      if ((0, y.isJavaScriptURLString)(e)) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      (0, i.startTransition)(() => {
        m(e, "push", t?.scroll === !1 ? l.ScrollBehavior.NoScroll : l.ScrollBehavior.Default, null, t?.transitionTypes, null);
      });
    },
    refresh: () => {
      (0, i.startTransition)(() => {
        (0, f.dispatchAppRouterAction)({
          type: l.ACTION_REFRESH
        });
      });
    },
    hmrRefresh: () => {
      throw Object.defineProperty(Error("hmrRefresh can only be used in development mode. Please use refresh instead."), "__NEXT_ERROR_CODE", {
        value: "E485",
        enumerable: !1,
        configurable: !0
      });
    },
    bfcacheId: "0"
  };
  "u" > typeof window && window.next && (window.next.router = T), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
