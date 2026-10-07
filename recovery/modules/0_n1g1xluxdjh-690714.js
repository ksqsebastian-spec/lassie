// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 690714.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    PARAM_SEPARATOR: function () {
      return i;
    },
    hasAdjacentParameterIssues: function () {
      return o;
    },
    normalizeAdjacentParameters: function () {
      return l;
    },
    normalizeTokensForRegexp: function () {
      return s;
    },
    stripNormalizedSeparators: function () {
      return u;
    },
    stripParameterSeparators: function () {
      return c;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = "_NEXTSEP_";
  function o(e) {
    return "string" == typeof e && !!(/\/\(\.{1,3}\):[^/\s]+/.test(e) || /:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(e));
  }
  function l(e) {
    let t = e;
    return (t = t.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${i}:$2`)).replace(/:([^:/\s)]+)(?=:)/g, `:$1${i}`);
  }
  function s(e) {
    return e.map(e => "object" == typeof e && null !== e && "modifier" in e && ("*" === e.modifier || "+" === e.modifier) && "prefix" in e && "suffix" in e && "" === e.prefix && "" === e.suffix ? {
      ...e,
      prefix: "/"
    } : e);
  }
  function u(e) {
    return e.replace(RegExp(`\\)${i}`, "g"), ")");
  }
  function c(e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) "string" == typeof r ? t[n] = r.replace(RegExp(`^${i}`), "") : Array.isArray(r) ? t[n] = r.map(e => "string" == typeof e ? e.replace(RegExp(`^${i}`), "") : e) : t[n] = r;
    return t;
  }
};
