// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 101415.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = t.r(661471);
  e.exports = function t(e, r) {
    var o, i, a, s;
    if (void 0 === r && (r = !0), e && "object" == typeof e) {
      return o = e, i = r, Object.keys(o).forEach(function (e) {
        o[e] = t(o[e], i);
      }), o;
    }
    if (Array.isArray(e)) {
      return a = e, s = r, a.forEach(function (e, r) {
        a[r] = t(e, s);
      }), a;
    }
    return n.is(e, r) ? n.parse(e) : e;
  };
};
