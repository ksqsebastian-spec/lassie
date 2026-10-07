// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 247849.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    getObjectClassLabel: function () {
      return i;
    },
    isPlainObject: function () {
      return o;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  function i(e) {
    return Object.prototype.toString.call(e);
  }
  function o(e) {
    if ("[object Object]" !== i(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t.hasOwnProperty("isPrototypeOf");
  }
};
