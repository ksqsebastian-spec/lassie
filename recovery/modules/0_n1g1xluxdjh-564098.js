// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 564098.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    safeCompile: function () {
      return s;
    },
    safePathToRegexp: function () {
      return l;
    },
    safeRegexpToFunction: function () {
      return u;
    },
    safeRouteMatcher: function () {
      return c;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(507906),
    o = e.r(690714);
  function l(e, t, n) {
    if ("string" != typeof e) return (0, i.pathToRegexp)(e, t, n);
    let r = (0, o.hasAdjacentParameterIssues)(e),
      a = r ? (0, o.normalizeAdjacentParameters)(e) : e;
    try {
      return (0, i.pathToRegexp)(a, t, n);
    } catch (a) {
      if (!r) try {
        let r = (0, o.normalizeAdjacentParameters)(e);
        return (0, i.pathToRegexp)(r, t, n);
      } catch (e) {}
      throw a;
    }
  }
  function s(e, t) {
    let n = (0, o.hasAdjacentParameterIssues)(e),
      r = n ? (0, o.normalizeAdjacentParameters)(e) : e;
    try {
      let e = (0, i.compile)(r, t);
      if (n) return t => (0, o.stripNormalizedSeparators)(e(t));
      return e;
    } catch (r) {
      if (!n) try {
        let n = (0, o.normalizeAdjacentParameters)(e),
          r = (0, i.compile)(n, t);
        return e => (0, o.stripNormalizedSeparators)(r(e));
      } catch (e) {}
      throw r;
    }
  }
  function u(e, t) {
    let n = (0, i.regexpToFunction)(e, t || []);
    return e => {
      let t = n(e);
      return !!t && {
        ...t,
        params: (0, o.stripParameterSeparators)(t.params)
      };
    };
  }
  function c(e) {
    return t => {
      let n = e(t);
      return !!n && (0, o.stripParameterSeparators)(n);
    };
  }
};
