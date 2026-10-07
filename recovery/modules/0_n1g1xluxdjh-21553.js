// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 21553.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    Router: function () {
      return l.default;
    },
    createRouter: function () {
      return y;
    },
    default: function () {
      return m;
    },
    makePublicRouterInstance: function () {
      return v;
    },
    useRouter: function () {
      return g;
    },
    withRouter: function () {
      return c.default;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(330053),
    o = i._(e.r(513679)),
    l = i._(e.r(300357)),
    s = e.r(239351),
    u = i._(e.r(676452)),
    c = i._(e.r(53429)),
    d = {
      router: null,
      readyCallbacks: [],
      ready(e) {
        if (this.router) return e();
        "u" > typeof window && this.readyCallbacks.push(e);
      }
    },
    f = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"],
    p = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
  function h() {
    if (!d.router) throw Object.defineProperty(Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n'), "__NEXT_ERROR_CODE", {
      value: "E1044",
      enumerable: !1,
      configurable: !0
    });
    return d.router;
  }
  Object.defineProperty(d, "events", {
    get: () => l.default.events
  }), f.forEach(e => {
    Object.defineProperty(d, e, {
      get: () => h()[e]
    });
  }), p.forEach(e => {
    d[e] = (...t) => h()[e](...t);
  }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(e => {
    d.ready(() => {
      l.default.events.on(e, (...t) => {
        let n = `on${e.charAt(0).toUpperCase()}${e.substring(1)}`;
        if (d[n]) try {
          d[n](...t);
        } catch (e) {
          console.error(`Error when running the Router event: ${n}`), console.error((0, u.default)(e) ? `${e.message}
${e.stack}` : e + "");
        }
      });
    });
  });
  let m = d;
  function g() {
    let e = o.default.useContext(s.RouterContext);
    if (!e) throw Object.defineProperty(Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted"), "__NEXT_ERROR_CODE", {
      value: "E509",
      enumerable: !1,
      configurable: !0
    });
    return e;
  }
  function y(...e) {
    return d.router = new l.default(...e), d.readyCallbacks.forEach(e => e()), d.readyCallbacks = [], d.router;
  }
  function v(e) {
    let t = {};
    for (let n of f) {
      if ("object" == typeof e[n]) {
        t[n] = Object.assign(Array.isArray(e[n]) ? [] : {}, e[n]);
        continue;
      }
      t[n] = e[n];
    }
    return t.events = l.default.events, p.forEach(n => {
      t[n] = (...t) => e[n](...t);
    }), t;
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
