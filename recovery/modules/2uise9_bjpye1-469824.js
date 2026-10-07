// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 469824.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = /\d{13}/;
  r.is = function (t) {
    return n.test(t);
  }, r.parse = function (t) {
    return new Date(t = parseInt(t, 10));
  };
};
