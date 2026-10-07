// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 960635.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["dset", 0, function (t, e, r) {
    e.split && (e = e.split("."));
    for (var n, o, i = 0, a = e.length, s = t; i < a && "__proto__" != (o = "" + e[i++]) && "constructor" !== o && "prototype" !== o;) s = s[o] = i === a ? r : typeof (n = s[o]) == typeof e ? n : 0 * e[i] != 0 || ~("" + e[i]).indexOf(".") ? {} : [];
  }]);
};
