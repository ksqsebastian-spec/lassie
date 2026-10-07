// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 811102.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  let n;
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    createFetch: function () {
      return N;
    },
    createFromNextReadableStream: function () {
      return C;
    },
    decodeBufferedStage: function () {
      return w;
    },
    decodeStageUntilBoundary: function () {
      return A;
    },
    fetchServerResponse: function () {
      return m;
    },
    processFetch: function () {
      return b;
    },
    resolveShellStageData: function () {
      return O;
    },
    resolveStaticStageData: function () {
      return T;
    }
  };
  for (var l in a) Object.defineProperty(r, l, {
    enumerable: !0,
    get: a[l]
  });
  let u = e.r(825044);
  e.r(411976);
  let i = e.r(977439),
    o = e.r(515188),
    c = e.r(846211),
    s = e.r(478329),
    f = e.r(351941),
    d = e.r(577696),
    h = e.r(744838),
    p = e.r(823971),
    y = e.r(539723),
    g = e.r(359862),
    _ = e.r(830664),
    v = e.r(223746),
    E = u.createFromReadableStream,
    P = u.createFromFetch;
  function S(e) {
    return (0, h.urlToUrlWithoutFlightMarker)(new URL(e, location.origin)).toString();
  }
  let R = !1;
  async function m(e, t) {
    let {
        flightRouterState: r,
        nextUrl: n
      } = t,
      a = {
        [o.RSC_HEADER]: "1",
        [o.NEXT_ROUTER_STATE_TREE_HEADER]: (0, f.prepareFlightRouterStateForRequest)(r, t.isHmrRefresh)
      };
    n && (a[o.NEXT_URL] = n);
    try {
      let r = await N(e, a, "auto", !0, t.signal),
        n = (0, h.urlToUrlWithoutFlightMarker)(new URL(r.url)),
        l = r.redirected ? n : e,
        u = r.headers.get("content-type") || "",
        i = !!r.headers.get("vary")?.includes(o.NEXT_URL),
        c = !!r.headers.get(o.NEXT_DID_POSTPONE_HEADER);
      if (!u.startsWith(o.RSC_CONTENT_TYPE_HEADER) || !r.ok || !r.body) return e.hash && (n.hash = e.hash), S(n.toString());
      let s = r.flightResponsePromise;
      null === s && (s = C(r.body, a, {
        allowPartialStream: c
      }));
      let [d, p] = await Promise.all([s, r.cacheData]);
      if ((r.headers.get(g.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? d.b) !== (0, y.getNavigationBuildId)()) return S(r.url);
      let _ = (0, f.normalizeFlightData)(d.f);
      if ("string" == typeof _) return S(_);
      let E = null !== p ? await T(p, d, a) : null;
      return {
        flightData: _,
        canonicalUrl: l,
        renderedSearch: d.q,
        couldBeIntercepted: i,
        supportsPerSegmentPrefetching: d.S,
        postponed: c,
        dynamicStaleTime: d.d ?? v.UnknownDynamicStaleTime,
        staticStageData: E,
        runtimePrefetchStream: d.p ?? null,
        responseHeaders: r.headers,
        debugInfo: s._debugInfo ?? null,
        revealAfter: d._revealAfter ?? null
      };
    } catch (r) {
      if (t.signal?.aborted) throw r;
      return R || console.error(`Failed to fetch RSC payload for ${e}. Falling back to browser navigation.`, r), e.toString();
    }
  }
  async function b(e) {
    return {
      response: e,
      cacheData: null
    };
  }
  async function T(e, t, r) {
    let {
      isResponsePartial: n,
      staticBodyClone: a
    } = e;
    if (a) {
      if (!n) return a.cancel(), {
        response: t,
        isResponsePartial: !1
      };
      if (void 0 !== t.l) {
        let e = await t.l;
        return {
          response: await A(a, e, r),
          isResponsePartial: !0
        };
      }
      a.cancel();
    }
    return null;
  }
  async function O(e, t, r) {
    let {
      shellBodyClone: n
    } = e;
    if (!n) return null;
    if (void 0 === t.a) return n.cancel(), null;
    let a = await t.a;
    return null === a ? (n.cancel(), null) : A(n, a, r);
  }
  async function A(e, t, r) {
    let {
      buffer: n
    } = await (0, _.createNonTaskyPrefetchResponseStream)(e, t);
    return w(n, r);
  }
  function w(e, t) {
    return C(new ReadableStream({
      start(t) {
        t.enqueue(e), t.close();
      }
    }), t, {
      allowPartialStream: !0
    });
  }
  async function N(e, t, r, n, a) {
    let l = (0, p.getDeploymentId)();
    l && (t["x-deployment-id"] = l);
    let u = {
        credentials: "same-origin",
        headers: t,
        priority: r || void 0,
        signal: a
      },
      c = new URL(e);
    await (0, d.setCacheBustingSearchParam)(c, t);
    let s = (0, i.fetch)(c, u).then(b),
      f = s.then(({
        response: e
      }) => e),
      h = n ? I(f, t) : null,
      y = await f,
      g = y.redirected;
    for (let e = 0; e < 20 && y.redirected; e++) {
      let e = new URL(y.url, c);
      if (e.origin !== c.origin || e.searchParams.get(o.NEXT_RSC_UNION_QUERY) === c.searchParams.get(o.NEXT_RSC_UNION_QUERY)) break;
      c = new URL(e), await (0, d.setCacheBustingSearchParam)(c, t), f = (s = (0, i.fetch)(c, u).then(b)).then(({
        response: e
      }) => e), h = n ? I(f, t) : null, y = await f, g = !0;
    }
    let _ = new URL(y.url, c);
    return _.searchParams.delete(o.NEXT_RSC_UNION_QUERY), {
      url: _.href,
      redirected: g,
      ok: y.ok,
      headers: y.headers,
      body: y.body,
      status: y.status,
      flightResponsePromise: h,
      cacheData: s.then(({
        cacheData: e
      }) => e)
    };
  }
  function C(e, t, r) {
    return E(e, {
      callServer: c.callServer,
      findSourceMapURL: s.findSourceMapURL,
      debugChannel: n && n(t),
      unstable_allowPartialStream: r?.allowPartialStream
    });
  }
  function I(e, t) {
    return P(e, {
      callServer: c.callServer,
      findSourceMapURL: s.findSourceMapURL,
      debugChannel: n && n(t)
    });
  }
  "u" > typeof window && (window.addEventListener("pagehide", () => {
    R = !0;
  }), window.addEventListener("pageshow", () => {
    R = !1;
  })), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
