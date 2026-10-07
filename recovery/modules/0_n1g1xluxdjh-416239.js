// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 416239.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "resolveParamValue", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(411976),
    a = e.r(128171);
  function i(e, t, n, i, o) {
    switch (t) {
      case "catchall":
      case "optional-catchall":
      case "catchall-intercepted-(..)(..)":
      case "catchall-intercepted-(.)":
      case "catchall-intercepted-(..)":
      case "catchall-intercepted-(...)":
        let l = [];
        for (let e = n; e < i.segments.length; e++) {
          let r = i.segments[e];
          if ("static" === r.type) {
            let i = r.name,
              o = (0, a.interceptionPrefixFromParamType)(t);
            o && e === n && o === r.interceptionMarker && (i = i.replace(r.interceptionMarker, "")), l.push(i);
          } else {
            if (!o.hasOwnProperty(r.param.paramName)) {
              if ("optional-catchall" === r.param.paramType) break;
              return;
            }
            let e = o[r.param.paramName];
            Array.isArray(e) ? l.push(...e) : l.push(e);
          }
        }
        if (l.length > 0) return l;
        if ("optional-catchall" === t) return;
        throw Object.defineProperty(new r.InvariantError(`Unexpected empty path segments match for a route "${i.pathname}" with param "${e}" of type "${t}"`), "__NEXT_ERROR_CODE", {
          value: "E931",
          enumerable: !1,
          configurable: !0
        });
      case "dynamic":
      case "dynamic-intercepted-(..)(..)":
      case "dynamic-intercepted-(.)":
      case "dynamic-intercepted-(..)":
      case "dynamic-intercepted-(...)":
        if (n < i.segments.length) {
          let e = i.segments[n];
          if ("dynamic" === e.type && !o.hasOwnProperty(e.param.paramName)) return;
          return "dynamic" === e.type ? o[e.param.paramName] : (0, a.interceptionPrefixFromParamType)(t) === e.interceptionMarker ? e.name.replace(e.interceptionMarker, "") : e.name;
        }
        return;
    }
  }
};
