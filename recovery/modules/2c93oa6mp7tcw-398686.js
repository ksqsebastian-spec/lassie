// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 398686.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    assign: function () {
      return l;
    },
    searchParamsToUrlQuery: function () {
      return u;
    },
    urlQueryToSearchParams: function () {
      return a;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  function u(e) {
    let t = {};
    for (let [r, n] of e.entries()) {
      let e = t[r];
      void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n];
    }
    return t;
  }
  function i(e) {
    return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e);
  }
  function a(e) {
    let t = new URLSearchParams();
    for (let [r, n] of Object.entries(e)) if (Array.isArray(n)) for (let e of n) t.append(r, i(e));else t.set(r, i(n));
    return t;
  }
  function l(e, ...t) {
    for (let r of t) {
      for (let t of r.keys()) e.delete(t);
      for (let [t, n] of r.entries()) e.append(t, n);
    }
    return e;
  }
};
