// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 857280.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  let r, a, i, o;
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "hydrate", {
    enumerable: !0,
    get: function () {
      return F;
    }
  });
  let l = e.r(330053),
    s = e.r(281889);
  e.r(953234);
  let u = l._(e.r(501527)),
    c = l._(e.r(513679)),
    d = e.r(825044),
    f = e.r(543091),
    p = e.r(41081),
    h = e.r(519157),
    m = e.r(846211),
    g = e.r(478329),
    y = e.r(913151),
    v = l._(e.r(156711)),
    b = e.r(596852);
  e.r(516968);
  let _ = e.r(351941),
    S = e.r(823971),
    w = e.r(539723),
    E = e.r(842698),
    x = d.createFromReadableStream,
    k = d.createFromFetch,
    P = document,
    T = self.__next_instant_test ? self.__next_instant_test : void 0,
    R = new TextEncoder(),
    O = !1,
    C = !1,
    N = null;
  function A(e) {
    if (0 === e[0]) i = [];else if (1 === e[0]) {
      if (!i) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
        value: "E18",
        enumerable: !1,
        configurable: !0
      });
      o ? o.enqueue(R.encode(e[1])) : i.push(e[1]);
    } else if (2 === e[0]) N = e[1];else if (3 === e[0]) {
      if (!i) throw Object.defineProperty(Error("Unexpected server data: missing bootstrap script."), "__NEXT_ERROR_CODE", {
        value: "E18",
        enumerable: !1,
        configurable: !0
      });
      let n = atob(e[1]),
        r = new Uint8Array(n.length);
      for (var t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
      o ? o.enqueue(r) : i.push(r);
    }
  }
  let I = function () {
    o && !C && (o.close(), C = !0, i = void 0), O = !0;
  };
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", I, !1) : setTimeout(I);
  let L = self.__next_f = self.__next_f || [];
  L.forEach(A), L.length = 0, L.push = A;
  let j = new ReadableStream({
    start(e) {
      i && (i.forEach(t => {
        e.enqueue("string" == typeof t ? R.encode(t) : t);
      }), O && !C) && (null === e.desiredSize || e.desiredSize < 0 ? T || e.error(Object.defineProperty(Error("The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection."), "__NEXT_ERROR_CODE", {
        value: "E117",
        enumerable: !1,
        configurable: !0
      })) : e.close(), C = !0, i = void 0), o = e;
    }
  });
  if (T) a = Promise.resolve(k(T, {
    callServer: m.callServer,
    findSourceMapURL: g.findSourceMapURL,
    debugChannel: r,
    unstable_allowPartialStream: !0
  })).then(async e => (0, _.createInitialRSCPayloadFromFallbackPrerender)(await T, e));else if (window.__NEXT_CLIENT_RESUME) {
    let e = window.__NEXT_CLIENT_RESUME;
    a = Promise.resolve(k(e, {
      callServer: m.callServer,
      findSourceMapURL: g.findSourceMapURL,
      debugChannel: r
    })).then(async t => (0, _.createInitialRSCPayloadFromFallbackPrerender)(await e, t));
  } else a = x(j, {
    callServer: m.callServer,
    findSourceMapURL: g.findSourceMapURL,
    debugChannel: r,
    startTime: 0
  });
  function M({
    initialRSCPayload: e,
    actionQueue: t,
    webSocket: n,
    staticIndicatorState: r
  }) {
    return (0, s.jsx)(v.default, {
      actionQueue: t,
      globalErrorState: e.G,
      webSocket: n,
      staticIndicatorState: r
    });
  }
  let D = c.default.StrictMode;
  function $({
    children: e
  }) {
    return e;
  }
  let z = {
    onDefaultTransitionIndicator: function () {
      return () => {};
    },
    onRecoverableError: p.onRecoverableError,
    onCaughtError: h.onCaughtError,
    onUncaughtError: h.onUncaughtError
  };
  async function F(e, t) {
    let n,
      r,
      i = await a;
    i.b ? (0, w.setNavigationBuildId)(i.b) : (0, w.setNavigationBuildId)((0, S.getDeploymentId)()), (0, E.initializeRouterTransitionModules)(e);
    let o = Date.now(),
      l = (0, y.createMutableActionQueue)((0, b.createInitialRouterState)({
        navigatedAt: o,
        initialRSCPayload: i,
        initialFlightStreamForCache: null,
        location: window.location
      })),
      d = (0, s.jsx)(D, {
        children: (0, s.jsx)(f.HeadManagerContext.Provider, {
          value: {
            appDir: !0
          },
          children: (0, s.jsx)($, {
            children: (0, s.jsx)(M, {
              initialRSCPayload: i,
              actionQueue: l,
              webSocket: r,
              staticIndicatorState: n
            })
          })
        })
      });
    "__next_error__" === document.documentElement.id ? u.default.createRoot(P, z).render(d) : c.default.startTransition(() => {
      u.default.hydrateRoot(P, d, {
        ...z,
        formState: N
      });
    });
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
