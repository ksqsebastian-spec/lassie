// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 446615.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    dispatchAppRouterAction: function () {
      return c;
    },
    dispatchGestureState: function () {
      return f;
    },
    refreshOnInstantNavigationUnlock: function () {
      return o;
    },
    useActionQueue: function () {
      return d;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(171266)._(e.r(513679)),
    u = e.r(428199);
  e.r(909740);
  let i = null;
  function o() {}
  function c(e) {
    if (null === i) throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."), "__NEXT_ERROR_CODE", {
      value: "E668",
      enumerable: !1,
      configurable: !0
    });
    i(e);
  }
  let s = null;
  function f(e) {
    if (null === s) throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."), "__NEXT_ERROR_CODE", {
      value: "E668",
      enumerable: !1,
      configurable: !0
    });
    s(e);
  }
  function d(e) {
    let [t, r] = l.default.useState(e.state),
      [n, a] = (0, l.useOptimistic)(t);
    "u" > typeof window && (s = a), "u" > typeof window && (i = t => e.dispatch(t, r));
    let o = (0, l.useMemo)(() => n, [n]);
    return (0, u.isThenable)(o) ? (0, l.use)(o) : o;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
