// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 676452.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    default: function () {
      return o;
    },
    getProperError: function () {
      return l;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(247849);
  function o(e) {
    return "object" == typeof e && null !== e && "name" in e && "message" in e;
  }
  function l(e) {
    let t;
    return o(e) ? e : Object.defineProperty(Error((0, i.isPlainObject)(e) ? (t = new WeakSet(), JSON.stringify(e, (e, n) => {
      if ("object" == typeof n && null !== n) {
        if (t.has(n)) return "[Circular]";
        t.add(n);
      }
      return n;
    })) : e + ""), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
  }
};
