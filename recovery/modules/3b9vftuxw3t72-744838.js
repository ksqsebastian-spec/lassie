// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 744838.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    doesStaticSegmentAppearInURL: function () {
      return p;
    },
    getCacheKeyForDynamicParam: function () {
      return y;
    },
    getParamValueFromCacheKey: function () {
      return _;
    },
    getRenderedPathname: function () {
      return f;
    },
    getRenderedSearch: function () {
      return s;
    },
    parseDynamicParamFromURLPart: function () {
      return h;
    },
    urlSearchParamsToParsedUrlQuery: function () {
      return v;
    },
    urlToUrlWithoutFlightMarker: function () {
      return g;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(36741),
    u = e.r(264575),
    i = e.r(515188),
    o = e.r(147640),
    c = e.r(286193);
  function s(e) {
    let t = e.headers.get(i.NEXT_REWRITTEN_QUERY_HEADER);
    return null !== t ? "" === t ? "" : "?" + t : g(new URL(e.url)).search;
  }
  function f(e) {
    let t = e.headers.get(i.NEXT_REWRITTEN_PATH_HEADER);
    if (null !== t) return t;
    let r = g(new URL(e.url)).pathname;
    return (0, o.hasBasePath)(r) ? (0, c.removeBasePath)(r) : r;
  }
  function d(e) {
    try {
      return encodeURIComponent(decodeURIComponent(e));
    } catch {
      return e;
    }
  }
  function h(e, t, r) {
    switch (e) {
      case "c":
        return r < t.length ? t.slice(r).map(e => d(e)) : [];
      case "ci(..)(..)":
      case "ci(.)":
      case "ci(..)":
      case "ci(...)":
        {
          let n = e.length - 2;
          return r < t.length ? t.slice(r).map((e, t) => 0 === t ? d(e.slice(n)) : d(e)) : [];
        }
      case "oc":
        return r < t.length ? t.slice(r).map(e => d(e)) : null;
      case "d":
        if (r >= t.length) return "";
        return d(t[r]);
      case "di(..)(..)":
      case "di(.)":
      case "di(..)":
      case "di(...)":
        {
          let n = e.length - 2;
          if (r >= t.length) return "";
          return d(t[r].slice(n));
        }
      default:
        return "";
    }
  }
  function p(e) {
    return !(e === u.ROOT_SEGMENT_REQUEST_KEY || e.startsWith(l.PAGE_SEGMENT_KEY) || "(" === e[0] && e.endsWith(")")) && e !== l.DEFAULT_SEGMENT_KEY && "/_not-found" !== e;
  }
  function y(e, t) {
    return "string" == typeof e ? (0, l.addSearchParamsIfPageSegment)(e, v(new URLSearchParams(t))) : null === e ? "" : e.join("/");
  }
  function g(e) {
    let t = new URL(e);
    return t.searchParams.delete(i.NEXT_RSC_UNION_QUERY), t;
  }
  function _(e, t) {
    return "c" === t || "oc" === t ? e.split("/") : e;
  }
  function v(e) {
    let t = {};
    for (let [r, n] of e.entries()) void 0 === t[r] ? t[r] = n : Array.isArray(t[r]) ? t[r].push(n) : t[r] = [t[r], n];
    return t;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
