// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 58681.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = t.r(661471),
    o = t.r(469824),
    i = t.r(562328),
    a = Object.prototype.toString;
  e.exports = function (t) {
    var e;
    if ("[object Date]" === a.call(t)) return t;
    return "[object Number]" === a.call(t) ? new Date((e = t) < 315576e5 ? 1e3 * e : e) : n.is(t) ? n.parse(t) : o.is(t) ? o.parse(t) : i.is(t) ? i.parse(t) : new Date(t);
  };
};
