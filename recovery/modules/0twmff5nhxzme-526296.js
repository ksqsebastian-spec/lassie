// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 526296, 514415, 900907, 691480.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var n = e.i(3385),
    r = e.i(454881),
    i = e.i(513679);
  let o = {
      prefix: String(Math.round(1e10 * Math.random())),
      current: 0
    },
    s = i.default.createContext(o),
    u = i.default.createContext(!1);
  "u" > typeof window && window.document && window.document.createElement;
  let a = new WeakMap(),
    l = "function" == typeof i.default.useId ? function (e) {
      let t = i.default.useId(),
        [n] = (0, i.useState)(p()),
        r = n ? "react-aria" : `react-aria${o.prefix}`;
      return e || `${r}-${t}`;
    } : function (e) {
      let t = (0, i.useContext)(s),
        n = function (e = !1) {
          let t = (0, i.useContext)(s),
            n = (0, i.useRef)(null);
          if (null === n.current && !e) {
            let e = i.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
            if (e) {
              let n = a.get(e);
              null == n ? a.set(e, {
                id: t.current,
                state: e.memoizedState
              }) : e.memoizedState !== n.state && (t.current = n.id, a.delete(e));
            }
            n.current = ++t.current;
          }
          return n.current;
        }(!!e),
        r = `react-aria${t.prefix}`;
      return e || `${r}-${n}`;
    };
  function c() {
    return !1;
  }
  function d() {
    return !0;
  }
  function f(e) {
    return () => {};
  }
  function p() {
    return "function" == typeof i.default.useSyncExternalStore ? i.default.useSyncExternalStore(f, c, d) : (0, i.useContext)(u);
  }
  e.s(["useIsSSR", 0, p, "useSSRSafeId", 0, l], 514415);
  let g = !!("u" > typeof window && window.document && window.document.createElement),
    v = new Map();
  function y(e) {
    let [n, o] = (0, i.useState)(e),
      s = (0, i.useRef)(null),
      u = l(n),
      a = (0, i.useRef)(null);
    if (t && t.register(a, u), g) {
      let e = v.get(u);
      e && !e.includes(s) ? e.push(s) : v.set(u, [s]);
    }
    return (0, r.useLayoutEffect)(() => () => {
      t && t.unregister(a), v.delete(u);
    }, [u]), (0, i.useEffect)(() => {
      let e = s.current;
      return e && o(e), () => {
        e && (s.current = null);
      };
    }), u;
  }
  function E(e, t) {
    if (e === t) return e;
    let n = v.get(e);
    if (n) return n.forEach(e => e.current = t), t;
    let r = v.get(t);
    return r ? (r.forEach(t => t.current = e), e) : t;
  }
  function m(...e) {
    return 1 === e.length && e[0] ? e[0] : t => {
      let n = !1,
        r = e.map(e => {
          let r = b(e, t);
          return n ||= "function" == typeof r, r;
        });
      if (n) return () => {
        r.forEach((t, n) => {
          "function" == typeof t ? t() : b(e[n], null);
        });
      };
    };
  }
  function b(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
  }
  "u" > typeof FinalizationRegistry && (t = new FinalizationRegistry(e => {
    v.delete(e);
  })), e.s(["mergeIds", 0, E, "useId", 0, y, "useSlotId", 0, function (e = []) {
    let t = y(),
      [n, o] = function (e) {
        let [t, n] = (0, i.useState)(e),
          o = (0, i.useRef)(t),
          s = (0, i.useRef)(null),
          u = (0, i.useRef)(() => {
            if (!s.current) return;
            let e = s.current.next();
            if (e.done) {
              s.current = null;
              return;
            }
            o.current === e.value ? u.current() : n(e.value);
          });
        return (0, r.useLayoutEffect)(() => {
          o.current = t, s.current && u.current();
        }), [t, (0, i.useCallback)(e => {
          s.current = e(o.current), u.current();
        }, [u])];
      }(t),
      s = (0, i.useCallback)(() => {
        o(function* () {
          yield t, yield document.getElementById(t) ? t : void 0;
        });
      }, [t, o]);
    return (0, r.useLayoutEffect)(s, [t, s, ...e]), n;
  }], 900907), e.s(["mergeRefs", 0, m], 691480);
  var T = e.i(809393);
  e.s(["mergeProps", 0, function (...e) {
    let t = {
      ...e[0]
    };
    for (let r = 1; r < e.length; r++) {
      let i = e[r];
      for (let e in i) {
        let r = t[e],
          o = i[e];
        "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, n.chain)(r, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o ? t[e] = (0, T.default)(r, o) : "id" === e && r && o ? t.id = E(r, o) : "ref" === e && r && o ? t.ref = m(r, o) : t[e] = void 0 !== o ? o : r;
      }
    }
    return t;
  }], 526296);
};
