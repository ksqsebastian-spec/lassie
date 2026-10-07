// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 673578.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  let n;
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "serverActionReducer", {
    enumerable: !0,
    get: function () {
      return j;
    }
  });
  let a = e.r(846211),
    l = e.r(478329),
    u = e.r(515188),
    i = e.r(389357),
    o = e.r(977439),
    c = e.r(825044),
    s = e.r(909740),
    f = e.r(962700),
    d = e.r(988817),
    h = e.r(271572),
    p = e.r(351941),
    y = e.r(611069),
    g = e.r(286193),
    _ = e.r(147640),
    v = e.r(898631),
    E = e.r(830664),
    P = e.r(155480),
    S = e.r(823971),
    R = e.r(539723),
    m = e.r(359862),
    b = e.r(383788),
    T = e.r(284809),
    O = e.r(748499),
    A = e.r(232560),
    w = e.r(389242),
    N = e.r(811102),
    C = e.r(223746),
    I = c.createFromFetch;
  async function F(e, t, r) {
    let s,
      d,
      h,
      y,
      g,
      {
        actionId: _,
        actionArgs: E
      } = r,
      P = (0, c.createTemporaryReferenceSet)(),
      b = (0, v.extractInfoFromServerReferenceId)(_),
      T = (0, v.omitUnusedArgs)(E, b),
      A = await (0, c.encodeReply)(T, {
        temporaryReferences: P
      }),
      w = {
        Accept: u.RSC_CONTENT_TYPE_HEADER,
        [u.ACTION_HEADER]: _,
        [u.NEXT_ROUTER_STATE_TREE_HEADER]: (0, p.prepareFlightRouterStateForRequest)(e.tree)
      },
      C = (0, S.getDeploymentId)();
    C && (w["x-deployment-id"] = C), t && (w[u.NEXT_URL] = t);
    try {
      s = await (0, o.fetch)(e.canonicalUrl, {
        method: "POST",
        headers: w,
        body: A
      });
    } catch (e) {
      throw e;
    }
    if ("1" === s.headers.get(u.NEXT_ACTION_NOT_FOUND_HEADER)) throw Object.defineProperty(new i.UnrecognizedActionError(`Server Action "${_}" was not found on the server. 
Read more: https://nextjs.org/docs/messages/failed-to-find-server-action`), "__NEXT_ERROR_CODE", {
      value: "E715",
      enumerable: !1,
      configurable: !0
    });
    let F = s.headers.get("x-action-redirect"),
      [j, M] = F?.split(";") || [];
    switch (M) {
      case "push":
        d = "push";
        break;
      case "replace":
        d = "replace";
        break;
      default:
        d = void 0;
    }
    let D = !!s.headers.get(u.NEXT_IS_PRERENDER_HEADER),
      U = O.ActionDidNotRevalidate;
    try {
      let e = s.headers.get("x-action-revalidated");
      if (e) {
        let t = JSON.parse(e);
        (t === O.ActionDidRevalidateStaticAndDynamic || t === O.ActionDidRevalidateDynamicOnly) && (U = t);
      }
    } catch {}
    let k = j ? (0, f.assignLocation)(j, new URL(e.canonicalUrl, window.location.href)) : void 0,
      L = s.headers.get("content-type"),
      H = !!(L && L.startsWith(u.RSC_CONTENT_TYPE_HEADER));
    if (!H && !k) throw Object.defineProperty(Error(s.status >= 400 && "text/plain" === L ? await s.text() : "An unexpected response was received from the server."), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    let x = !1;
    if (H) {
      let e = k ? (0, N.processFetch)(s).then(({
          response: e
        }) => e) : Promise.resolve(s),
        t = await I(e, {
          callServer: a.callServer,
          findSourceMapURL: l.findSourceMapURL,
          temporaryReferences: P,
          debugChannel: n && n(w)
        });
      h = k ? void 0 : t.a, x = t.i;
      let r = s.headers.get(m.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? t.b;
      if (void 0 !== r && r !== (0, R.getNavigationBuildId)()) ;else {
        let e = (0, p.normalizeFlightData)(t.f);
        "" !== e && (y = e, g = t.q);
      }
    } else h = void 0, y = void 0, g = void 0;
    return {
      actionResult: h,
      actionFlightData: y,
      actionFlightDataRenderedSearch: g,
      redirectLocation: k,
      redirectType: d,
      revalidationKind: U,
      isPrerender: D,
      couldBeIntercepted: x
    };
  }
  function j(e, t) {
    let {
        resolve: r,
        reject: n
      } = t,
      a = (e.previousNextUrl || e.nextUrl) && (0, h.hasInterceptionRouteInCurrentTree)(e.tree) ? e.previousNextUrl || e.nextUrl : null;
    return F(e, a, t).then(async ({
      revalidationKind: l,
      actionResult: u,
      actionFlightData: i,
      actionFlightDataRenderedSearch: o,
      redirectLocation: c,
      redirectType: f,
      isPrerender: h,
      couldBeIntercepted: p
    }) => {
      l !== O.ActionDidNotRevalidate && ((0, C.invalidateBfCache)(), t.didRevalidate = !0, l === O.ActionDidRevalidateStaticAndDynamic && (0, E.invalidateEntirePrefetchCache)(a, e.tree), (0, P.startRevalidationCooldown)());
      let y = f || "push";
      if (void 0 !== c) {
        if ((0, A.isExternalURL)(c)) return n(M(c.href, y)), (0, b.completeHardNavigation)(e, c, y);else {
          let e = (0, d.createHrefFromUrl)(c, !1);
          n(M((0, _.hasBasePath)(e) ? (0, g.removeBasePath)(e) : e, y));
        }
      } else r(u);
      if (void 0 === c && l === O.ActionDidNotRevalidate && void 0 === i) return e;
      if (void 0 === i && void 0 !== c) return (0, b.completeHardNavigation)(e, c, y);
      if ("string" == typeof i) return (0, b.completeHardNavigation)(e, new URL(i, location.origin), y);
      let v = new URL(e.canonicalUrl, location.origin),
        S = e.renderedSearch,
        R = void 0 !== c ? c : v,
        m = e.tree,
        N = s.ScrollBehavior.Default,
        I = l === O.ActionDidNotRevalidate ? w.FreshnessPolicy.Default : w.FreshnessPolicy.RefreshAll;
      if (void 0 !== i && void 0 !== o) {
        let t = (0, d.createHrefFromUrl)(R),
          r = Date.now(),
          n = (0, b.convertServerPatchToFullTree)(r, m, i, o, C.UnknownDynamicStaleTime),
          l = n.metadataVaryPath;
        null !== l && (0, T.discoverKnownRoute)(r, R.pathname, R.search, a, null, n.routeTree, l, p, t, h, !1);
        let u = (0, w.getCurrentNavigationLock)();
        return (0, b.navigateToKnownRoute)(r, e, R, t, n, v, S, e.cache, m, I, a, N, y, u, null, null, void 0);
      }
      return (0, b.navigate)(e, R, v, S, e.cache, m, a, I, N, y);
    }, t => (n(t), e));
  }
  function M(e, t) {
    let r = (0, y.getRedirectError)(e, t);
    return r.handled = !0, r;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
