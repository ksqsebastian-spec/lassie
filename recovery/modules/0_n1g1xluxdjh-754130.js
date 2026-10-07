// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 754130.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "normalizeLocalePath", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = new WeakMap();
  function a(e, t) {
    let n;
    if (!t) return {
      pathname: e
    };
    let a = r.get(t);
    a || (a = t.map(e => e.toLowerCase()), r.set(t, a));
    let i = e.split("/", 2);
    if (!i[1]) return {
      pathname: e
    };
    let o = i[1].toLowerCase(),
      l = a.indexOf(o);
    return l < 0 ? {
      pathname: e
    } : (n = t[l], {
      pathname: e = e.slice(n.length + 1) || "/",
      detectedLocale: n
    });
  }
};
