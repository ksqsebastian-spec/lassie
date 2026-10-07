// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 409243.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    DYNAMIC_FILTER_PLACEHOLDER: function () {
      return i;
    },
    hasDynamicFilterCandidate: function () {
      return o;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = "[]";
  function o(e, t, n) {
    let r = e.split("/"),
      a = t.split("/"),
      o = r[r.length - 1] ?? "";
    if (!(o.startsWith("[...") || o.startsWith("[[...")) && r.length !== a.length) return !1;
    let l = [];
    for (let e = 1; e < a.length; e++) {
      if ("" === a[e]) continue;
      let t = r[e];
      (void 0 === t || t.startsWith("[")) && l.push(e);
    }
    if (0 === l.length || l.length > 8) return !1;
    let s = (1 << l.length) - 1;
    for (let e = 0; e < s; e++) {
      let t = a.slice();
      for (let n = 0; n < l.length; n++) (e & 1 << n) == 0 && (t[l[n]] = i);
      if (n(t.join("/"))) return !0;
    }
    return !1;
  }
};
