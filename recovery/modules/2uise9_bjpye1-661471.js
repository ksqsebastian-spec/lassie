// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 661471.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
  r.parse = function (t) {
    var e = [1, 5, 6, 7, 11, 12],
      r = n.exec(t),
      o = 0;
    if (!r) return new Date(t);
    for (var i, a = 0; i = e[a]; a++) r[i] = parseInt(r[i], 10) || 0;
    return r[2] = parseInt(r[2], 10) || 1, r[3] = parseInt(r[3], 10) || 1, r[2]--, r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0, " " === r[4] ? o = new Date().getTimezoneOffset() : "Z" !== r[9] && r[10] && (o = 60 * r[11] + r[12], "+" === r[10] && (o = 0 - o)), new Date(Date.UTC(r[1], r[2], r[3], r[5], r[6] + o, r[7], r[8]));
  }, r.is = function (t, e) {
    return "string" == typeof t && (!e || !1 !== /^\d{4}-\d{2}-\d{2}/.test(t)) && n.test(t);
  };
};
