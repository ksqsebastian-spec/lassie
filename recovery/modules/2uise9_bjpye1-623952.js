// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 623952.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.clone = void 0, r.clone = function t(e) {
    if ("object" != typeof e) return e;
    if ("[object Object]" === Object.prototype.toString.call(e)) {
      var r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = t(e[n]));
      return r;
    }
    return Array.isArray(e) ? e.map(t) : e;
  };
};
