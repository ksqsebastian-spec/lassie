// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 216843.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "createRouterCacheKey", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(36741);
  function o(e, t = !1) {
    return Array.isArray(e) ? `${e[0]}|${e[1]}|${e[2]}` : t && e.startsWith(n.PAGE_SEGMENT_KEY) ? n.PAGE_SEGMENT_KEY : e;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
