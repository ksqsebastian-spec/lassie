// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 515188.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    ACTION_HEADER: function () {
      return u;
    },
    FLIGHT_HEADERS: function () {
      return p;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function () {
      return S;
    },
    NEXT_ACTION_REVALIDATED_HEADER: function () {
      return b;
    },
    NEXT_DID_POSTPONE_HEADER: function () {
      return _;
    },
    NEXT_HMR_REFRESH_HEADER: function () {
      return s;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function () {
      return m;
    },
    NEXT_INSTANT_TEST_COOKIE: function () {
      return h;
    },
    NEXT_IS_PRERENDER_HEADER: function () {
      return P;
    },
    NEXT_REQUEST_ID_HEADER: function () {
      return R;
    },
    NEXT_REWRITTEN_PATH_HEADER: function () {
      return v;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function () {
      return E;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function () {
      return o;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function () {
      return c;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function () {
      return g;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function () {
      return i;
    },
    NEXT_RSC_UNION_QUERY: function () {
      return y;
    },
    NEXT_URL: function () {
      return f;
    },
    RSC_CONTENT_TYPE_HEADER: function () {
      return d;
    },
    RSC_HEADER: function () {
      return l;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = "rsc",
    u = "next-action",
    i = "next-router-state-tree",
    o = "next-router-prefetch",
    c = "next-router-segment-prefetch",
    s = "next-hmr-refresh",
    f = "next-url",
    d = "text/x-component",
    h = "next-instant-navigation-testing",
    p = [l, i, o, s, c],
    y = "_rsc",
    g = "x-nextjs-stale-time",
    _ = "x-nextjs-postponed",
    v = "x-nextjs-rewritten-path",
    E = "x-nextjs-rewritten-query",
    P = "x-nextjs-prerender",
    S = "x-nextjs-action-not-found",
    R = "x-nextjs-request-id",
    m = "x-nextjs-html-request-id",
    b = "x-action-revalidated";
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
