// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 562328.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = /\d{10}/;
  r.is = function (t) {
    return n.test(t);
  }, r.parse = function (t) {
    return new Date(1e3 * parseInt(t, 10));
  };
};
