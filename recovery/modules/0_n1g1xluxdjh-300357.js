// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 300357.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  let r;
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var a = {
    createKey: function () {
      return Y;
    },
    default: function () {
      return Z;
    },
    matchesMiddleware: function () {
      return B;
    }
  };
  for (var i in a) Object.defineProperty(n, i, {
    enumerable: !0,
    get: a[i]
  });
  let o = e.r(330053),
    l = e.r(171266),
    s = e.r(842592),
    u = e.r(309547),
    c = e.r(278736),
    d = l._(e.r(676452)),
    f = e.r(486360),
    p = e.r(754130),
    h = o._(e.r(151552)),
    m = e.r(478573),
    g = e.r(371939),
    y = e.r(248597),
    v = e.r(258961),
    b = e.r(102431),
    _ = e.r(409243),
    S = e.r(737409);
  e.r(50510);
  let w = e.r(677553),
    E = e.r(114927),
    x = e.r(838747),
    k = e.r(286193),
    P = e.r(155044),
    T = e.r(147640),
    R = e.r(369591),
    O = e.r(982288),
    C = e.r(699421),
    N = e.r(532482),
    A = e.r(896633),
    I = e.r(743817),
    L = e.r(361130),
    j = e.r(162358),
    M = e.r(94001),
    D = e.r(818073),
    $ = e.r(359862),
    z = e.r(823971),
    F = e.r(293384);
  function U() {
    return Object.assign(Object.defineProperty(Error("Route Cancelled"), "__NEXT_ERROR_CODE", {
      value: "E315",
      enumerable: !1,
      configurable: !0
    }), {
      cancelled: !0
    });
  }
  async function B(e) {
    let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
    if (!t) return !1;
    let {
        pathname: n
      } = (0, w.parsePath)(e.asPath),
      r = (0, T.hasBasePath)(n) ? (0, k.removeBasePath)(n) : n,
      a = (0, P.addBasePath)((0, E.addLocale)(r, e.locale));
    return t.some(e => new RegExp(e.regexp).test(a));
  }
  function H(e) {
    let t = (0, m.getLocationOrigin)();
    return e.startsWith(t) ? e.substring(t.length) : e;
  }
  function W(e, t, n) {
    let [r, a] = (0, R.resolveHref)(e, t, !0),
      i = (0, m.getLocationOrigin)(),
      o = r.startsWith(i),
      l = a && a.startsWith(i);
    r = H(r), a = a ? H(a) : a;
    let s = o ? r : (0, P.addBasePath)(r),
      u = n ? H((0, R.resolveHref)(e, n)) : a || r;
    return {
      url: s,
      as: l ? u : (0, P.addBasePath)(u)
    };
  }
  function q(e, t) {
    let n = (0, s.removeTrailingSlash)((0, f.denormalizePagePath)(e));
    return "/404" === n || "/_error" === n ? e : (t.includes(n) || t.some(t => {
      if ((0, g.isDynamicRoute)(t) && (0, b.getRouteRegex)(t).re.test(n)) return e = t, !0;
    }), (0, s.removeTrailingSlash)(e));
  }
  async function V(e) {
    if (!(await B(e)) || !e.fetchData) return null;
    let t = await e.fetchData(),
      n = await function (e, t, n) {
        let a = {
            basePath: n.router.basePath,
            i18n: {
              locales: n.router.locales
            },
            trailingSlash: !1
          },
          i = t.headers.get("x-nextjs-rewrite"),
          o = i || t.headers.get("x-nextjs-matched-path"),
          l = t.headers.get($.MATCHED_PATH_HEADER);
        if (!l || o || l.includes("__next_data_catchall") || l.includes("/_error") || l.includes("/404") || (o = l), o) {
          if (o.startsWith("/")) {
            let t = (0, y.parseRelativeUrl)(o),
              l = (0, C.getNextPathnameInfo)(t.pathname, {
                nextConfig: a,
                parseData: !0
              }),
              c = (0, s.removeTrailingSlash)(l.pathname);
            return Promise.all([n.router.pageLoader.getPageList(), (0, u.getClientBuildManifest)()]).then(([o, {
              __rewrites: s
            }]) => {
              let u = (0, E.addLocale)(l.pathname, l.locale);
              if ((0, g.isDynamicRoute)(u) || !i && o.includes((0, p.normalizeLocalePath)((0, k.removeBasePath)(u), n.router.locales).pathname)) {
                let n = (0, C.getNextPathnameInfo)((0, y.parseRelativeUrl)(e).pathname, {
                  nextConfig: {
                    basePath: a.basePath,
                    trailingSlash: a.trailingSlash
                  },
                  parseData: !0
                });
                t.pathname = u = (0, P.addBasePath)(n.pathname);
              }
              {
                let e = r(u, o, s, t.query, e => q(e, o), n.router.locales);
                e.matchedPage && (t.pathname = e.parsedAs.pathname, u = t.pathname, Object.assign(t.query, e.parsedAs.query));
              }
              let d = o.includes(c) ? c : q((0, p.normalizeLocalePath)((0, k.removeBasePath)(t.pathname), n.router.locales).pathname, o);
              if ((0, g.isDynamicRoute)(d)) {
                let e = (0, v.getRouteMatcher)((0, b.getRouteRegex)(d))(u);
                Object.assign(t.query, e || {});
              }
              return {
                type: "rewrite",
                parsedAs: t,
                resolvedHref: d
              };
            });
          }
          let t = (0, w.parsePath)(e),
            l = (0, N.formatNextPathnameInfo)({
              ...(0, C.getNextPathnameInfo)(t.pathname, {
                nextConfig: a,
                parseData: !0
              }),
              defaultLocale: n.router.defaultLocale,
              buildId: ""
            });
          return Promise.resolve({
            type: "redirect-external",
            destination: `${l}${t.query}${t.hash}`
          });
        }
        let c = t.headers.get("x-nextjs-redirect");
        if (c) {
          if (c.startsWith("/")) {
            let e = (0, w.parsePath)(c),
              t = (0, N.formatNextPathnameInfo)({
                ...(0, C.getNextPathnameInfo)(e.pathname, {
                  nextConfig: a,
                  parseData: !0
                }),
                defaultLocale: n.router.defaultLocale,
                buildId: ""
              });
            return Promise.resolve({
              type: "redirect-internal",
              newAs: `${t}${e.query}${e.hash}`,
              newUrl: `${t}${e.query}${e.hash}`
            });
          }
          return Promise.resolve({
            type: "redirect-external",
            destination: c
          });
        }
        return Promise.resolve({
          type: "next"
        });
      }(t.dataHref, t.response, e);
    return {
      dataHref: t.dataHref,
      json: t.json,
      response: t.response,
      text: t.text,
      cacheKey: t.cacheKey,
      effect: n
    };
  }
  r = e.r(44168).default;
  let X = Symbol("SSG_DATA_NOT_FOUND");
  function Q(e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  }
  function G({
    dataHref: e,
    inflightCache: t,
    isPrefetch: n,
    hasMiddleware: r,
    isServerRender: a,
    parseJSON: i,
    persistCache: o,
    isBackground: l,
    unstable_skipClientCache: s
  }) {
    let {
        href: c
      } = new URL(e, window.location.href),
      d = (0, z.getDeploymentId)(),
      f = l => function e(t, n, r) {
        return fetch(t, {
          credentials: "same-origin",
          method: r.method || "GET",
          headers: Object.assign({}, r.headers, {
            "x-nextjs-data": "1"
          })
        }).then(a => !a.ok && n > 1 && a.status >= 500 ? e(t, n - 1, r) : a);
      }(e, a ? 3 : 1, {
        headers: Object.assign({}, n ? {
          purpose: "prefetch"
        } : {}, n && r ? {
          "x-middleware-prefetch": "1"
        } : {}, d ? {
          "x-deployment-id": d
        } : {}),
        method: l?.method ?? "GET"
      }).then(t => t.ok && l?.method === "HEAD" ? {
        dataHref: e,
        response: t,
        text: "",
        json: {},
        cacheKey: c
      } : t.text().then(n => {
        if (!t.ok) {
          if (r && [301, 302, 307, 308].includes(t.status)) return {
            dataHref: e,
            response: t,
            text: n,
            json: {},
            cacheKey: c
          };
          if (404 === t.status && Q(n)?.notFound) return {
            dataHref: e,
            json: {
              notFound: X
            },
            response: t,
            text: n,
            cacheKey: c
          };
          let i = Object.defineProperty(Error("Failed to load static props"), "__NEXT_ERROR_CODE", {
            value: "E124",
            enumerable: !1,
            configurable: !0
          });
          throw a || (0, u.markAssetError)(i), i;
        }
        let o = t.headers.get($.NEXT_NAV_DEPLOYMENT_ID_HEADER);
        if (null != o && o !== d) {
          let e = Object.defineProperty(Error("Loaded static props were from an outdated deployment, forcing a hard reload"), "__NEXT_ERROR_CODE", {
            value: "E989",
            enumerable: !1,
            configurable: !0
          });
          throw a || (0, u.markAssetError)(e), e;
        }
        return {
          dataHref: e,
          json: i ? Q(n) : null,
          response: t,
          text: n,
          cacheKey: c
        };
      })).then(e => (o && "no-cache" !== e.response.headers.get("x-middleware-cache") || delete t[c], e)).catch(e => {
        throw s || delete t[c], ("Failed to fetch" === e.message || "NetworkError when attempting to fetch resource." === e.message || "Load failed" === e.message) && (0, u.markAssetError)(e), e;
      });
    return s && o ? f({}).then(e => ("no-cache" !== e.response.headers.get("x-middleware-cache") && (t[c] = Promise.resolve(e)), e)) : void 0 !== t[c] ? t[c] : t[c] = f(l ? {
      method: "HEAD"
    } : {});
  }
  function Y() {
    return Math.random().toString(36).slice(2, 10);
  }
  function K({
    url: e,
    router: t
  }) {
    if (e === (0, P.addBasePath)((0, E.addLocale)(t.asPath, t.locale))) throw Object.defineProperty(Error(`Invariant: attempted to hard navigate to the same URL ${e} ${location.href}`), "__NEXT_ERROR_CODE", {
      value: "E282",
      enumerable: !1,
      configurable: !0
    });
    window.location.href = e;
  }
  let J = ({
    route: e,
    router: t
  }) => {
    let n = !1,
      r = t.clc = () => {
        n = !0;
      };
    return () => {
      if (n) {
        let t = Object.defineProperty(Error(`Abort fetching component for route: "${e}"`), "__NEXT_ERROR_CODE", {
          value: "E483",
          enumerable: !1,
          configurable: !0
        });
        throw t.cancelled = !0, t;
      }
      r === t.clc && (t.clc = null);
    };
  };
  class Z {
    static {
      this.events = (0, h.default)();
    }
    constructor(e, t, n, {
      initialProps: r,
      pageLoader: a,
      App: i,
      wrapApp: o,
      Component: l,
      err: u,
      subscription: c,
      isFallback: d,
      locale: f,
      locales: p,
      defaultLocale: h,
      domainLocales: v,
      isPreview: b
    }) {
      this.sdc = {}, this.sbc = {}, this.isFirstPopStateEvent = !0, this._key = Y(), this.onPopState = e => {
        let t,
          {
            isFirstPopStateEvent: n
          } = this;
        this.isFirstPopStateEvent = !1;
        let r = e.state;
        if (!r) {
          let {
            pathname: e,
            query: t
          } = this;
          this.changeState("replaceState", (0, S.formatWithValidation)({
            pathname: (0, P.addBasePath)(e),
            query: t
          }), (0, m.getURL)());
          return;
        }
        if (r.__NA) return void window.location.reload();
        if (!r.__N || n && this.locale === r.options.locale && r.as === this.asPath) return;
        let {
          url: a,
          as: i,
          options: o,
          key: l
        } = r;
        this._key = l;
        let {
          pathname: s
        } = (0, y.parseRelativeUrl)(a);
        this.isSsr && i === (0, P.addBasePath)(this.asPath) && s === (0, P.addBasePath)(this.pathname) || (!this._bps || this._bps(r)) && this.change("replaceState", a, i, Object.assign({}, o, {
          shallow: o.shallow && this._shallow,
          locale: o.locale || this.defaultLocale,
          _h: 0
        }), t);
      };
      const _ = (0, s.removeTrailingSlash)(e);
      this.components = {}, "/_error" !== e && (this.components[_] = {
        Component: l,
        initial: !0,
        props: r,
        err: u,
        __N_SSG: r && r.__N_SSG,
        __N_SSP: r && r.__N_SSP
      }), this.components["/_app"] = {
        Component: i,
        styleSheets: []
      }, this.events = Z.events, this.pageLoader = a;
      const w = (0, g.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
      if (this.basePath = "", this.sub = c, this.clc = null, this._wrapApp = o, this.isSsr = !0, this.isLocaleDomain = !1, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !w && !self.location.search && 0), this.state = {
        route: _,
        pathname: e,
        query: t,
        asPath: w ? e : n,
        isPreview: !!b,
        locale: void 0,
        isFallback: d
      }, this._initialMatchesMiddlewarePromise = Promise.resolve(!1), "u" > typeof window) {
        if (!n.startsWith("//")) {
          const r = {
              locale: f
            },
            a = (0, m.getURL)();
          this._initialMatchesMiddlewarePromise = B({
            router: this,
            locale: f,
            asPath: a
          }).then(i => (r._shouldResolveHref = n !== e, this.changeState("replaceState", i ? a : (0, S.formatWithValidation)({
            pathname: (0, P.addBasePath)(e),
            query: t
          }), a, r), i));
        }
        window.addEventListener("popstate", this.onPopState);
      }
    }
    reload() {
      window.location.reload();
    }
    back() {
      window.history.back();
    }
    forward() {
      window.history.forward();
    }
    push(e, t, n = {}) {
      if ((0, F.isJavaScriptURLString)(e.toString()) || t && (0, F.isJavaScriptURLString)(t.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      return {
        url: e,
        as: t
      } = W(this, e, t), this.change("pushState", e, t, n);
    }
    replace(e, t, n = {}) {
      if ((0, F.isJavaScriptURLString)(e.toString()) || t && (0, F.isJavaScriptURLString)(t.toString())) throw Object.defineProperty(Error("Next.js has blocked a javascript: URL as a security precaution."), "__NEXT_ERROR_CODE", {
        value: "E978",
        enumerable: !1,
        configurable: !0
      });
      return {
        url: e,
        as: t
      } = W(this, e, t), this.change("replaceState", e, t, n);
    }
    async _bfl(t, n, r, a) {
      {
        if (!this._bfl_s && !this._bfl_d) {
          let n,
            i,
            {
              BloomFilter: o
            } = e.r(220884);
          try {
            ({
              __routerFilterStatic: n,
              __routerFilterDynamic: i
            } = await (0, u.getClientBuildManifest)());
          } catch (e) {
            if (console.error(e), a) return !0;
            return K({
              url: (0, P.addBasePath)((0, E.addLocale)(t, r || this.locale, this.defaultLocale)),
              router: this
            }), new Promise(() => {});
          }
          let l = {
            numItems: 48,
            errorRate: 1e-4,
            numBits: 921,
            numHashes: 14,
            bitArray: [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1]
          };
          !n && l && (n = l || void 0);
          let s = {
            numItems: 5,
            errorRate: 1e-4,
            numBits: 96,
            numHashes: 14,
            bitArray: [0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1]
          };
          !i && s && (i = s || void 0), n?.numHashes && (this._bfl_s = new o(n.numItems, n.errorRate), this._bfl_s.import(n)), i?.numHashes && (this._bfl_d = new o(i.numItems, i.errorRate), this._bfl_d.import(i));
        }
        let i = !1,
          o = !1;
        for (let {
          as: e,
          allowMatchCurrent: l
        } of [{
          as: t
        }, {
          as: n
        }]) if (e) {
          let n = (0, s.removeTrailingSlash)(new URL(e, "http://n").pathname),
            u = (0, P.addBasePath)((0, E.addLocale)(n, r || this.locale));
          if (l || n !== (0, s.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
            for (let e of (i = i || !!this._bfl_s?.contains(n) || !!this._bfl_s?.contains(u), [n, u])) {
              let t = e.split("/");
              for (let e = 0; !o && e < t.length + 1; e++) {
                let n = t.slice(0, e).join("/");
                if (n && this._bfl_d?.contains(n)) {
                  o = !0;
                  break;
                }
              }
            }
            if (i || o) {
              if (a) return !0;
              return K({
                url: (0, P.addBasePath)((0, E.addLocale)(t, r || this.locale, this.defaultLocale)),
                router: this
              }), new Promise(() => {});
            }
          }
        }
      }
      return !1;
    }
    async change(e, t, n, a, i) {
      let o, l;
      if (!(0, I.isLocalURL)(t)) return K({
        url: t,
        router: this
      }), !1;
      let f = 1 === a._h;
      f || a.shallow || (await this._bfl(n, void 0, a.locale));
      let p = f || a._shouldResolveHref || (0, w.parsePath)(t).pathname === (0, w.parsePath)(n).pathname,
        h = {
          ...this.state
        },
        R = !0 !== this.isReady;
      this.isReady = !0;
      let O = this.isSsr;
      if (f || (this.isSsr = !1), f && this.clc) return !1;
      let C = h.locale;
      m.ST && performance.mark("routeChange");
      let {
          shallow: N = !1,
          scroll: L = !0
        } = a,
        D = {
          shallow: N
        };
      this._inFlightRoute && this.clc && (O || Z.events.emit("routeChangeError", U(), this._inFlightRoute, D), this.clc(), this.clc = null), n = (0, P.addBasePath)((0, E.addLocale)((0, T.hasBasePath)(n) ? (0, k.removeBasePath)(n) : n, a.locale, this.defaultLocale));
      let $ = (0, x.removeLocale)((0, T.hasBasePath)(n) ? (0, k.removeBasePath)(n) : n, h.locale);
      this._inFlightRoute = n;
      let z = C !== h.locale;
      if (!f && this.onlyAHashChange($) && !z) {
        h.asPath = $, Z.events.emit("hashChangeStart", n, D), this.changeState(e, t, n, {
          ...a,
          scroll: !1
        }), L && this.scrollToHash($);
        try {
          await this.set(h, this.components[h.route], null);
        } catch (e) {
          throw (0, d.default)(e) && e.cancelled && Z.events.emit("routeChangeError", e, $, D), e;
        }
        return Z.events.emit("hashChangeComplete", n, D), !0;
      }
      let F = (0, y.parseRelativeUrl)(t),
        {
          pathname: H,
          query: V
        } = F;
      try {
        [o, {
          __rewrites: l
        }] = await Promise.all([this.pageLoader.getPageList(), (0, u.getClientBuildManifest)(), this.pageLoader.getMiddleware()]);
      } catch (e) {
        return K({
          url: n,
          router: this
        }), !1;
      }
      this.urlIsNew($) || z || (e = "replaceState");
      let Q = n;
      H = H ? (0, s.removeTrailingSlash)((0, k.removeBasePath)(H)) : H;
      let G = (0, s.removeTrailingSlash)(H),
        Y = n.startsWith("/") && (0, y.parseRelativeUrl)(n).pathname;
      if (this.components[H]?.__appRouter) return K({
        url: n,
        router: this
      }), new Promise(() => {});
      let J = !!(Y && G !== Y && (!(0, g.isDynamicRoute)(G) || !(0, v.getRouteMatcher)((0, b.getRouteRegex)(G))(Y))),
        ee = !a.shallow && (await B({
          asPath: n,
          locale: h.locale,
          router: this
        }));
      if (f && ee && (p = !1), p && "/_error" !== H) if (a._shouldResolveHref = !0, n.startsWith("/")) {
        let e = r((0, P.addBasePath)((0, E.addLocale)($, h.locale), !0), o, l, V, e => q(e, o), this.locales);
        if (e.externalDest) return K({
          url: n,
          router: this
        }), !0;
        ee || (Q = e.asPath), e.matchedPage && e.resolvedHref && (H = e.resolvedHref, F.pathname = (0, P.addBasePath)(H), ee || (t = (0, S.formatWithValidation)(F)));
      } else F.pathname = q(H, o), F.pathname !== H && (H = F.pathname, F.pathname = (0, P.addBasePath)(H), ee || (t = (0, S.formatWithValidation)(F)));
      if (!f && !a.shallow && this._bfl_d && (0, g.isDynamicRoute)(H)) {
        let e = (0, s.removeTrailingSlash)((0, y.parseRelativeUrl)($).pathname);
        if ((0, _.hasDynamicFilterCandidate)(H, e, e => !!this._bfl_d?.contains(e))) return K({
          url: n,
          router: this
        }), new Promise(() => {});
      }
      if (!(0, I.isLocalURL)(n)) return K({
        url: n,
        router: this
      }), !1;
      Q = (0, x.removeLocale)((0, k.removeBasePath)(Q), h.locale), G = (0, s.removeTrailingSlash)(H);
      let et = !1;
      if ((0, g.isDynamicRoute)(G)) {
        let e = (0, y.parseRelativeUrl)(Q),
          r = e.pathname,
          a = (0, b.getRouteRegex)(G);
        et = (0, v.getRouteMatcher)(a)(r);
        let i = G === r,
          o = i ? (0, M.interpolateAs)(G, r, V) : {};
        if (et && (!i || o.result)) i ? n = (0, S.formatWithValidation)(Object.assign({}, e, {
          pathname: o.result,
          query: (0, j.omit)(V, o.params)
        })) : Object.assign(V, et);else {
          let e = Object.keys(a.groups).filter(e => !V[e] && !a.groups[e].optional);
          if (e.length > 0 && !ee) throw Object.defineProperty(Error((i ? `The provided \`href\` (${t}) value is missing query values (${e.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${r}) is incompatible with the \`href\` value (${G}). `) + `Read more: https://nextjs.org/docs/messages/${i ? "href-interpolation-failed" : "incompatible-href-as"}`), "__NEXT_ERROR_CODE", {
            value: "E344",
            enumerable: !1,
            configurable: !0
          });
        }
      }
      f || Z.events.emit("routeChangeStart", n, D);
      let en = "/404" === this.pathname || "/_error" === this.pathname;
      try {
        let r = await this.getRouteInfo({
          route: G,
          pathname: H,
          query: V,
          as: n,
          resolvedAs: Q,
          routeProps: D,
          locale: h.locale,
          isPreview: h.isPreview,
          hasMiddleware: ee,
          unstable_skipClientCache: a.unstable_skipClientCache,
          isQueryUpdating: f && !this.isFallback,
          isMiddlewareRewrite: J
        });
        if (f || a.shallow || (await this._bfl(n, "resolvedAs" in r ? r.resolvedAs : void 0, h.locale)), "route" in r && ee) {
          G = H = r.route || G, D.shallow || (V = Object.assign({}, r.query || {}, V));
          let e = (0, T.hasBasePath)(F.pathname) ? (0, k.removeBasePath)(F.pathname) : F.pathname;
          if (et && H !== e && Object.keys(et).forEach(e => {
            et && V[e] === et[e] && delete V[e];
          }), (0, g.isDynamicRoute)(H)) {
            let e = !D.shallow && r.resolvedAs ? r.resolvedAs : (0, P.addBasePath)((0, E.addLocale)(new URL(n, location.href).pathname, h.locale), !0);
            (0, T.hasBasePath)(e) && (e = (0, k.removeBasePath)(e));
            let t = (0, b.getRouteRegex)(H),
              a = (0, v.getRouteMatcher)(t)(new URL(e, location.href).pathname);
            a && Object.assign(V, a);
          }
        }
        if ("type" in r) if ("redirect-internal" === r.type) return this.change(e, r.newUrl, r.newAs, a);else return K({
          url: r.destination,
          router: this
        }), new Promise(() => {});
        let l = r.Component;
        if (l && l.unstable_scriptLoader && [].concat(l.unstable_scriptLoader()).forEach(e => {
          (0, c.handleClientScriptLoad)(e.props);
        }), (r.__N_SSG || r.__N_SSP) && r.props) {
          if (r.props.pageProps && r.props.pageProps.__N_REDIRECT) {
            a.locale = !1;
            let t = r.props.pageProps.__N_REDIRECT;
            if (t.startsWith("/") && !1 !== r.props.pageProps.__N_REDIRECT_BASE_PATH) {
              let n = (0, y.parseRelativeUrl)(t);
              n.pathname = q(n.pathname, o);
              let {
                url: r,
                as: i
              } = W(this, t, t);
              return this.change(e, r, i, a);
            }
            return K({
              url: t,
              router: this
            }), new Promise(() => {});
          }
          if (h.isPreview = !!r.props.__N_PREVIEW, r.props.notFound === X) {
            let e;
            try {
              await this.fetchComponent("/404"), e = "/404";
            } catch (t) {
              e = "/_error";
            }
            if (r = await this.getRouteInfo({
              route: e,
              pathname: e,
              query: V,
              as: n,
              resolvedAs: Q,
              routeProps: {
                shallow: !1
              },
              locale: h.locale,
              isPreview: h.isPreview,
              isNotFound: !0
            }), "type" in r) throw Object.defineProperty(Error("Unexpected middleware effect on /404"), "__NEXT_ERROR_CODE", {
              value: "E158",
              enumerable: !1,
              configurable: !0
            });
          }
        }
        f && "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && r.props?.pageProps && (r.props.pageProps.statusCode = 500);
        let s = a.shallow && h.route === (r.route ?? G),
          u = a.scroll ?? (!f && !s),
          p = i ?? (u ? {
            x: 0,
            y: 0
          } : null),
          m = {
            ...h,
            route: G,
            pathname: H,
            query: V,
            asPath: $,
            isFallback: !1
          };
        if (f && en) {
          if (r = await this.getRouteInfo({
            route: this.pathname,
            pathname: this.pathname,
            query: V,
            as: n,
            resolvedAs: Q,
            routeProps: {
              shallow: !1
            },
            locale: h.locale,
            isPreview: h.isPreview,
            isQueryUpdating: f && !this.isFallback
          }), "type" in r) throw Object.defineProperty(Error(`Unexpected middleware effect on ${this.pathname}`), "__NEXT_ERROR_CODE", {
            value: "E225",
            enumerable: !1,
            configurable: !0
          });
          "/_error" === this.pathname && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && r.props?.pageProps && (r.props.pageProps.statusCode = 500);
          try {
            await this.set(m, r, p);
          } catch (e) {
            throw (0, d.default)(e) && e.cancelled && Z.events.emit("routeChangeError", e, $, D), e;
          }
          return !0;
        }
        if (Z.events.emit("beforeHistoryChange", n, D), this.changeState(e, t, n, a), !(f && !p && !R && !z && (0, A.compareRouterStates)(m, this.state))) {
          try {
            await this.set(m, r, p);
          } catch (e) {
            if (e.cancelled) r.error = r.error || e;else throw e;
          }
          if (r.error) throw f || Z.events.emit("routeChangeError", r.error, $, D), r.error;
          f || Z.events.emit("routeChangeComplete", n, D), u && /#.+$/.test(n) && this.scrollToHash(n);
        }
        return !0;
      } catch (e) {
        if ((0, d.default)(e) && e.cancelled) return !1;
        throw e;
      }
    }
    changeState(e, t, n, r = {}) {
      ("pushState" !== e || (0, m.getURL)() !== n) && (this._shallow = r.shallow, window.history[e]({
        url: t,
        as: n,
        options: r,
        __N: !0,
        key: this._key = "pushState" !== e ? this._key : Y()
      }, "", n));
    }
    async handleRouteInfoError(e, t, n, r, a, i) {
      if (e.cancelled) throw e;
      if ((0, u.isAssetError)(e) || i) throw Z.events.emit("routeChangeError", e, r, a), K({
        url: r,
        router: this
      }), U();
      console.error(e);
      try {
        let r,
          {
            page: a,
            styleSheets: i
          } = await this.fetchComponent("/_error"),
          o = {
            props: r,
            Component: a,
            styleSheets: i,
            err: e,
            error: e
          };
        if (!o.props) try {
          o.props = await this.getInitialProps(a, {
            err: e,
            pathname: t,
            query: n
          });
        } catch (e) {
          console.error("Error in error page `getInitialProps`: ", e), o.props = {};
        }
        return o;
      } catch (e) {
        return this.handleRouteInfoError((0, d.default)(e) ? e : Object.defineProperty(Error(e + ""), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        }), t, n, r, a, !0);
      }
    }
    async getRouteInfo({
      route: e,
      pathname: t,
      query: n,
      as: r,
      resolvedAs: a,
      routeProps: i,
      locale: o,
      hasMiddleware: l,
      isPreview: u,
      unstable_skipClientCache: c,
      isQueryUpdating: f,
      isMiddlewareRewrite: h,
      isNotFound: m
    }) {
      let g = e;
      try {
        let e = this.components[g];
        if (i.shallow && e && this.route === g) return e;
        let d = J({
          route: g,
          router: this
        });
        l && (e = void 0);
        let y = !e || "initial" in e ? void 0 : e,
          v = {
            dataHref: this.pageLoader.getDataHref({
              href: (0, S.formatWithValidation)({
                pathname: t,
                query: n
              }),
              skipInterpolation: !0,
              asPath: m ? "/404" : a,
              locale: o
            }),
            hasMiddleware: !0,
            isServerRender: this.isSsr,
            parseJSON: !0,
            inflightCache: f ? this.sbc : this.sdc,
            persistCache: !u,
            isPrefetch: !1,
            unstable_skipClientCache: c,
            isBackground: f
          },
          b = f && !h ? null : await V({
            fetchData: () => G(v),
            asPath: m ? "/404" : a,
            locale: o,
            router: this
          }).catch(e => {
            if (f) return null;
            throw e;
          });
        if (b && ("/_error" === t || "/404" === t) && (b.effect = void 0), f && (b ? b.json = self.__NEXT_DATA__.props : b = {
          json: self.__NEXT_DATA__.props
        }), d(), b?.effect?.type === "redirect-internal" || b?.effect?.type === "redirect-external") return b.effect;
        if (b?.effect?.type === "rewrite") {
          let r = (0, s.removeTrailingSlash)(b.effect.resolvedHref),
            o = await this.pageLoader.getPageList();
          if ((!f || o.includes(r)) && (g = r, t = b.effect.resolvedHref, n = {
            ...n,
            ...b.effect.parsedAs.query
          }, a = (0, k.removeBasePath)((0, p.normalizeLocalePath)(b.effect.parsedAs.pathname, this.locales).pathname), e = this.components[g], i.shallow && e && this.route === g && !l)) return {
            ...e,
            route: g
          };
        }
        if ((0, O.isAPIRoute)(g)) return K({
          url: r,
          router: this
        }), new Promise(() => {});
        let _ = y || (await this.fetchComponent(g).then(e => ({
            Component: e.page,
            styleSheets: e.styleSheets,
            __N_SSG: e.mod.__N_SSG,
            __N_SSP: e.mod.__N_SSP
          }))),
          w = b?.response?.headers.get("x-middleware-skip"),
          E = _.__N_SSG || _.__N_SSP;
        w && b?.dataHref && delete this.sdc[b.dataHref];
        let {
          props: x,
          cacheKey: P
        } = await this._getData(async () => {
          if (E) {
            if (b?.json && !w) return {
              cacheKey: b.cacheKey,
              props: b.json
            };
            let e = b?.dataHref ? b.dataHref : this.pageLoader.getDataHref({
                href: (0, S.formatWithValidation)({
                  pathname: t,
                  query: n
                }),
                asPath: a,
                locale: o
              }),
              r = await G({
                dataHref: e,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: w ? {} : this.sdc,
                persistCache: !u,
                isPrefetch: !1,
                unstable_skipClientCache: c
              });
            return {
              cacheKey: r.cacheKey,
              props: r.json || {}
            };
          }
          return {
            headers: {},
            props: await this.getInitialProps(_.Component, {
              pathname: t,
              query: n,
              asPath: r,
              locale: o,
              locales: this.locales,
              defaultLocale: this.defaultLocale
            })
          };
        });
        return _.__N_SSP && v.dataHref && P && delete this.sdc[P], this.isPreview || !_.__N_SSG || f || G(Object.assign({}, v, {
          isBackground: !0,
          persistCache: !1,
          inflightCache: this.sbc
        })).catch(() => {}), x.pageProps = Object.assign({}, x.pageProps), _.props = x, _.route = g, _.query = n, _.resolvedAs = a, this.components[g] = _, _;
      } catch (e) {
        return this.handleRouteInfoError((0, d.getProperError)(e), t, n, r, i);
      }
    }
    set(e, t, n) {
      return this.state = e, this.sub(t, this.components["/_app"].Component, n);
    }
    beforePopState(e) {
      this._bps = e;
    }
    onlyAHashChange(e) {
      if (!this.asPath) return !1;
      let [t, n] = this.asPath.split("#", 2),
        [r, a] = e.split("#", 2);
      return !!a && t === r && n === a || t === r && n !== a;
    }
    scrollToHash(e) {
      let [, t = ""] = e.split("#", 2);
      (0, D.disableSmoothScrollDuringRouteTransition)(() => {
        if ("" === t || "top" === t) return void window.scrollTo(0, 0);
        let e = decodeURIComponent(t),
          n = document.getElementById(e);
        if (n) return void n.scrollIntoView();
        let r = document.getElementsByName(e)[0];
        r && r.scrollIntoView();
      }, {
        onlyHashChange: this.onlyAHashChange(e)
      });
    }
    urlIsNew(e) {
      return this.asPath !== e;
    }
    async prefetch(e, t = e, n = {}) {
      if ("u" > typeof window && (0, L.isBot)(window.navigator.userAgent)) return;
      let a = (0, y.parseRelativeUrl)(e),
        i = a.pathname,
        {
          pathname: o,
          query: l
        } = a,
        c = o,
        d = await this.pageLoader.getPageList(),
        f = t,
        p = void 0 !== n.locale ? n.locale || void 0 : this.locale,
        h = await B({
          asPath: t,
          locale: p,
          router: this
        });
      if (t.startsWith("/")) {
        let n;
        ({
          __rewrites: n
        } = await (0, u.getClientBuildManifest)());
        let i = r((0, P.addBasePath)((0, E.addLocale)(t, this.locale), !0), d, n, a.query, e => q(e, d), this.locales);
        if (i.externalDest) return;
        h || (f = (0, x.removeLocale)((0, k.removeBasePath)(i.asPath), this.locale)), i.matchedPage && i.resolvedHref && (a.pathname = o = i.resolvedHref, h || (e = (0, S.formatWithValidation)(a)));
      }
      a.pathname = q(a.pathname, d), (0, g.isDynamicRoute)(a.pathname) && (o = a.pathname, a.pathname = o, Object.assign(l, (0, v.getRouteMatcher)((0, b.getRouteRegex)(a.pathname))((0, w.parsePath)(t).pathname) || {}), h || (e = (0, S.formatWithValidation)(a)));
      let m = await V({
        fetchData: () => G({
          dataHref: this.pageLoader.getDataHref({
            href: (0, S.formatWithValidation)({
              pathname: c,
              query: l
            }),
            skipInterpolation: !0,
            asPath: f,
            locale: p
          }),
          hasMiddleware: !0,
          isServerRender: !1,
          parseJSON: !0,
          inflightCache: this.sdc,
          persistCache: !this.isPreview,
          isPrefetch: !0
        }),
        asPath: t,
        locale: p,
        router: this
      });
      if (m?.effect.type === "rewrite" && (a.pathname = m.effect.resolvedHref, o = m.effect.resolvedHref, l = {
        ...l,
        ...m.effect.parsedAs.query
      }, f = m.effect.parsedAs.pathname, e = (0, S.formatWithValidation)(a)), m?.effect.type === "redirect-external") return;
      let _ = (0, s.removeTrailingSlash)(o);
      (await this._bfl(t, f, n.locale, !0)) && (this.components[i] = {
        __appRouter: !0
      }), await Promise.all([this.pageLoader._isSsg(_).then(t => !!t && G({
        dataHref: m?.json ? m?.dataHref : this.pageLoader.getDataHref({
          href: e,
          asPath: f,
          locale: p
        }),
        isServerRender: !1,
        parseJSON: !0,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: !0,
        unstable_skipClientCache: n.unstable_skipClientCache || n.priority && !0
      }).then(() => !1).catch(() => !1)), this.pageLoader[n.priority ? "loadPage" : "prefetch"](_)]);
    }
    async fetchComponent(e) {
      let t = J({
        route: e,
        router: this
      });
      try {
        let n = await this.pageLoader.loadPage(e);
        return t(), n;
      } catch (e) {
        throw t(), e;
      }
    }
    _getData(e) {
      let t = !1,
        n = () => {
          t = !0;
        };
      return this.clc = n, e().then(e => {
        if (n === this.clc && (this.clc = null), t) {
          let e = Object.defineProperty(Error("Loading initial props cancelled"), "__NEXT_ERROR_CODE", {
            value: "E405",
            enumerable: !1,
            configurable: !0
          });
          throw e.cancelled = !0, e;
        }
        return e;
      });
    }
    getInitialProps(e, t) {
      let {
          Component: n
        } = this.components["/_app"],
        r = this._wrapApp(n);
      return t.AppTree = r, (0, m.loadGetInitialProps)(n, {
        AppTree: r,
        Component: e,
        router: this,
        ctx: t
      });
    }
    get route() {
      return this.state.route;
    }
    get pathname() {
      return this.state.pathname;
    }
    get query() {
      return this.state.query;
    }
    get asPath() {
      return this.state.asPath;
    }
    get locale() {
      return this.state.locale;
    }
    get isFallback() {
      return this.state.isFallback;
    }
    get isPreview() {
      return this.state.isPreview;
    }
  }
};
