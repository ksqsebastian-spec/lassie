// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 440968.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    isInterceptionAppRoute: function () {
      return c;
    },
    isNormalizedAppRoute: function () {
      return u;
    },
    parseAppRouteSegment: function () {
      return s;
    },
    parseAppRouteWithSlots: function () {
      return p;
    },
    parseNormalizedAppRoute: function () {
      return f;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(411976),
    o = e.r(159724),
    l = e.r(570214);
  function s(e) {
    if ("" === e) return null;
    let t = l.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t)),
      n = (0, o.getSegmentParam)(e);
    return n ? {
      type: "dynamic",
      name: e,
      param: n,
      interceptionMarker: t
    } : e.startsWith("(") && e.endsWith(")") ? {
      type: "route-group",
      name: e,
      interceptionMarker: t
    } : e.startsWith("@") ? {
      type: "parallel-route",
      name: e,
      interceptionMarker: t
    } : {
      type: "static",
      name: e,
      interceptionMarker: t
    };
  }
  function u(e) {
    return e.normalized;
  }
  function c(e) {
    return void 0 !== e.interceptionMarker && void 0 !== e.interceptingRoute && void 0 !== e.interceptedRoute;
  }
  function d(e, t) {
    let n,
      r,
      a,
      l = e.split("/").filter(Boolean),
      u = [];
    for (let c of l) {
      let l = s(function (e) {
        if (!/%5b|%5d/i.test(e)) return e;
        try {
          let t = decodeURIComponent(e);
          return (0, o.getSegmentParam)(t) ? t : e;
        } catch {
          return e;
        }
      }(c));
      if (l) {
        if ("route-group" === l.type && !(2 & t)) throw Object.defineProperty(new i.InvariantError(`${e} is being parsed as a normalized route, but it has a route group segment.`), "__NEXT_ERROR_CODE", {
          value: "E1151",
          enumerable: !1,
          configurable: !0
        });
        if ("parallel-route" === l.type && !(1 & t)) throw Object.defineProperty(new i.InvariantError(`${e} is being parsed as a normalized route, but it has a parallel route segment.`), "__NEXT_ERROR_CODE", {
          value: "E1152",
          enumerable: !1,
          configurable: !0
        });
        if (u.push(l), l.interceptionMarker) {
          let i = e.split(l.interceptionMarker);
          if (2 !== i.length) throw Object.defineProperty(Error(`Invalid interception route: ${e}`), "__NEXT_ERROR_CODE", {
            value: "E924",
            enumerable: !1,
            configurable: !0
          });
          r = d(i[0], t), a = d(i[1], t), n = l.interceptionMarker;
        }
      }
    }
    let c = u.filter(e => "dynamic" === e.type);
    return {
      normalized: 0 === t,
      pathname: e,
      segments: u,
      dynamicSegments: c,
      interceptionMarker: n,
      interceptingRoute: r,
      interceptedRoute: a
    };
  }
  function f(e) {
    return d(e, 0);
  }
  function p(e) {
    return d(e, 1);
  }
};
