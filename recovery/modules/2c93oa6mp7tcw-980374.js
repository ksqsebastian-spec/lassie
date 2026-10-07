// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 980374.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useUntrackedPathname", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = e.r(513679),
    o = e.r(509156),
    u = e.r(629265);
  function i() {
    return !function () {
      if ("u" < typeof window) {
        let e = u.workUnitAsyncStorage.getStore();
        if (!e) return !1;
        switch (e.type) {
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "validation-client":
            let t = e.fallbackRouteParams;
            return !!t && t.size > 0;
        }
      }
      return !1;
    }() ? (0, n.useContext)(o.PathnameContext) : null;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
