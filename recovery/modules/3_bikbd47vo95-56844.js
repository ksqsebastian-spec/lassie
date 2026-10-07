// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 56844.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["exists", 0, function (t) {
    return null != t;
  }, "isFunction", 0, function (t) {
    return "function" == typeof t;
  }, "isNumber", 0, function (t) {
    return "number" == typeof t;
  }, "isPlainObject", 0, function (t) {
    return "object" === Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
  }, "isString", 0, function (t) {
    return "string" == typeof t;
  }]);
};
