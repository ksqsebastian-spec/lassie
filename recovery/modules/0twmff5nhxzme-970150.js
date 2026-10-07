// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 970150, 847712, 239228.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(513679);
  let n = t.default.createContext({
    register: () => {}
  });
  n.displayName = "PressResponderContext", e.s(["PressResponderContext", 0, n], 970150);
  var r = e.i(454881);
  let i = t.default.useInsertionEffect ?? r.useLayoutEffect;
  e.s(["useEffectEvent", 0, function (e) {
    let n = (0, t.useRef)(null);
    return i(() => {
      n.current = e;
    }, [e]), (0, t.useCallback)((...e) => {
      let t = n.current;
      return t?.(...e);
    }, []);
  }], 847712), e.s(["useGlobalListeners", 0, function () {
    let e = (0, t.useRef)(new Map()),
      n = (0, t.useCallback)((t, n, r, i) => {
        let o = i?.once ? (...t) => {
          e.current.delete(r), r(...t);
        } : r;
        e.current.set(r, {
          type: n,
          eventTarget: t,
          fn: o,
          options: i
        }), t.addEventListener(n, o, i);
      }, []),
      r = (0, t.useCallback)((t, n, r, i) => {
        let o = e.current.get(r)?.fn || r;
        t.removeEventListener(n, o, i), e.current.delete(r);
      }, []),
      i = (0, t.useCallback)(() => {
        e.current.forEach((e, t) => {
          r(e.eventTarget, e.type, t, e.options);
        });
      }, [r]);
    return (0, t.useEffect)(() => i, [i]), {
      addGlobalListener: n,
      removeGlobalListener: r,
      removeAllGlobalListeners: i
    };
  }], 239228);
};
