// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 159724.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    getParamProperties: function () {
      return s;
    },
    getSegmentParam: function () {
      return o;
    },
    isCatchAll: function () {
      return l;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(570214);
  function o(e) {
    let t = i.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t));
    return (t && (e = e.slice(t.length)), e.startsWith("[[...") && e.endsWith("]]")) ? {
      paramType: "optional-catchall",
      paramName: e.slice(5, -2)
    } : e.startsWith("[...") && e.endsWith("]") ? {
      paramType: t ? `catchall-intercepted-${t}` : "catchall",
      paramName: e.slice(4, -1)
    } : e.startsWith("[") && e.endsWith("]") ? {
      paramType: t ? `dynamic-intercepted-${t}` : "dynamic",
      paramName: e.slice(1, -1)
    } : null;
  }
  function l(e) {
    return "catchall" === e || "catchall-intercepted-(..)(..)" === e || "catchall-intercepted-(.)" === e || "catchall-intercepted-(..)" === e || "catchall-intercepted-(...)" === e || "optional-catchall" === e;
  }
  function s(e) {
    let t = !1,
      n = !1;
    switch (e) {
      case "catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        t = !0;
        break;
      case "optional-catchall":
        t = !0, n = !0;
    }
    return {
      repeat: t,
      optional: n
    };
  }
};
