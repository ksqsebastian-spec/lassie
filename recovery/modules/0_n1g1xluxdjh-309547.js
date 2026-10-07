// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 309547.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  let r;
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var a = {
    createRouteLoader: function () {
      return v;
    },
    getClientBuildManifest: function () {
      return g;
    },
    isAssetError: function () {
      return h;
    },
    markAssetError: function () {
      return p;
    }
  };
  for (var i in a) Object.defineProperty(n, i, {
    enumerable: !0,
    get: a[i]
  });
  e.r(330053), e.r(514896);
  let o = e.r(554307),
    l = e.r(19998),
    s = e.r(823971),
    u = e.r(758024),
    c = e.r(147775);
  function d(e, t, n) {
    let r,
      a = t.get(e);
    if (a) return "future" in a ? a.future : Promise.resolve(a);
    let i = new Promise(e => {
      r = e;
    });
    return t.set(e, {
      resolve: r,
      future: i
    }), n ? n().then(e => (r(e), e)).catch(n => {
      throw t.delete(e), n;
    }) : i;
  }
  let f = Symbol("ASSET_LOAD_ERROR");
  function p(e) {
    return Object.defineProperty(e, f, {});
  }
  function h(e) {
    return e && f in e;
  }
  let m = function (e) {
    try {
      return e = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch");
    } catch {
      return !1;
    }
  }();
  function g() {
    if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
    let e = new Promise(e => {
      let t = self.__BUILD_MANIFEST_CB;
      self.__BUILD_MANIFEST_CB = () => {
        e(self.__BUILD_MANIFEST), t && t();
      };
    });
    return (0, c.resolvePromiseWithTimeout)(e, p(Object.defineProperty(Error("Failed to load client build manifest"), "__NEXT_ERROR_CODE", {
      value: "E273",
      enumerable: !1,
      configurable: !0
    })), r);
  }
  function y(e, t) {
    return g().then(n => {
      if (!(t in n)) throw p(Object.defineProperty(Error(`Failed to lookup route: ${t}`), "__NEXT_ERROR_CODE", {
        value: "E446",
        enumerable: !1,
        configurable: !0
      }));
      let r = n[t].map(t => e + "/_next/" + (0, u.encodeURIPath)(t));
      return {
        scripts: r.filter(e => e.endsWith(".js")).map(e => (0, o.__unsafeCreateTrustedScriptURL)(e) + (0, s.getAssetTokenQuery)()),
        css: r.filter(e => e.endsWith(".css")).map(e => e + (0, s.getAssetTokenQuery)())
      };
    });
  }
  function v(e) {
    let t = new Map(),
      n = new Map(),
      a = new Map(),
      i = new Map();
    function o(e) {
      {
        var t;
        let r = n.get(e.toString());
        return r ? r : document.querySelector(`script[src^="${e}"]`) ? Promise.resolve() : (n.set(e.toString(), r = new Promise((n, r) => {
          (t = document.createElement("script")).onload = n, t.onerror = () => r(p(Object.defineProperty(Error(`Failed to load script: ${e}`), "__NEXT_ERROR_CODE", {
            value: "E74",
            enumerable: !1,
            configurable: !0
          }))), t.crossOrigin = void 0, t.src = e, document.body.appendChild(t);
        })), r);
      }
    }
    function s(e) {
      let t = a.get(e);
      return t || a.set(e, t = fetch(e, {
        credentials: "same-origin"
      }).then(t => {
        if (!t.ok) throw Object.defineProperty(Error(`Failed to load stylesheet: ${e}`), "__NEXT_ERROR_CODE", {
          value: "E189",
          enumerable: !1,
          configurable: !0
        });
        return t.text().then(t => ({
          href: e,
          content: t
        }));
      }).catch(e => {
        throw p(e);
      })), t;
    }
    return {
      whenEntrypoint: e => d(e, t),
      onEntrypoint(e, n) {
        (n ? Promise.resolve().then(() => n()).then(e => ({
          component: e && e.default || e,
          exports: e
        }), e => ({
          error: e
        })) : Promise.resolve(void 0)).then(n => {
          let r = t.get(e);
          r && "resolve" in r ? n && (t.set(e, n), r.resolve(n)) : (n ? t.set(e, n) : t.delete(e), i.delete(e));
        });
      },
      loadRoute(n, a) {
        return d(n, i, () => {
          let i;
          return (0, c.resolvePromiseWithTimeout)(y(e, n).then(({
            scripts: e,
            css: r
          }) => Promise.all([t.has(n) ? [] : Promise.all(e.map(o)).then(e => e), Promise.all(r.map(s))])).then(e => this.whenEntrypoint(n).then(t => ({
            entrypoint: t,
            styles: e[1]
          }))), p(Object.defineProperty(Error(`Route did not complete loading: ${n}`), "__NEXT_ERROR_CODE", {
            value: "E12",
            enumerable: !1,
            configurable: !0
          })), r).then(({
            entrypoint: e,
            styles: t
          }) => {
            let n = Object.assign({
              styles: t
            }, e);
            return "error" in e ? e : n;
          }).catch(e => {
            if (a) throw e;
            return {
              error: e
            };
          }).finally(() => i?.());
        });
      },
      prefetch(t) {
        let n;
        return (n = navigator.connection) && (n.saveData || /2g/.test(n.effectiveType)) ? Promise.resolve() : y(e, t).then(e => Promise.all(m ? e.scripts.map(e => {
          var t, n, r;
          return t = e.toString(), n = "script", new Promise((e, a) => {
            let i = `
      link[rel="prefetch"][href^="${t}"],
      link[rel="preload"][href^="${t}"],
      script[src^="${t}"]`;
            if (document.querySelector(i)) return e();
            r = document.createElement("link"), n && (r.as = n), r.rel = "prefetch", r.crossOrigin = void 0, r.onload = e, r.onerror = () => a(p(Object.defineProperty(Error(`Failed to prefetch: ${t}`), "__NEXT_ERROR_CODE", {
              value: "E268",
              enumerable: !1,
              configurable: !0
            }))), r.href = t, document.head.appendChild(r);
          });
        }) : [])).then(() => {
          (0, l.requestIdleCallback)(() => this.loadRoute(t, !0).catch(() => {}));
        }).catch(() => {});
      }
    };
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
