// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 258961.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "getRouteMatcher", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(478573),
    a = e.r(564098);
  function i({
    re: e,
    groups: t
  }) {
    return (0, a.safeRouteMatcher)(n => {
      let a = e.exec(n);
      if (!a) return !1;
      let i = e => {
          try {
            return decodeURIComponent(e);
          } catch {
            throw Object.defineProperty(new r.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: !1,
              configurable: !0
            });
          }
        },
        o = {};
      for (let [e, n] of Object.entries(t)) {
        let t = a[n.pos];
        void 0 !== t && (n.repeat ? o[e] = t.split("/").map(e => i(e)) : o[e] = i(t));
      }
      return o;
    });
  }
};
