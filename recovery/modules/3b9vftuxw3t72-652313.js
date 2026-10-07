// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 652313.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "reducer", {
    enumerable: !0,
    get: function () {
      return c;
    }
  });
  let n = e.r(909740),
    a = e.r(830058),
    l = e.r(469226),
    u = e.r(390458),
    i = e.r(78116),
    o = e.r(673578),
    c = "u" < typeof window ? function (e, t) {
      return e;
    } : function (e, t) {
      switch (t.type) {
        case n.ACTION_NAVIGATE:
          return (0, a.navigateReducer)(e, t);
        case n.ACTION_SERVER_PATCH:
          return (0, l.serverPatchReducer)(e, t);
        case n.ACTION_RESTORE:
          return (0, u.restoreReducer)(e, t);
        case n.ACTION_REFRESH:
          return (0, i.refreshReducer)(e, t);
        case n.ACTION_HMR_REFRESH:
          throw Object.defineProperty(Error("hmrRefresh can only be used in development mode. Please use refresh instead."), "__NEXT_ERROR_CODE", {
            value: "E485",
            enumerable: !1,
            configurable: !0
          });
        case n.ACTION_SERVER_ACTION:
          return (0, o.serverActionReducer)(e, t);
        default:
          throw Object.defineProperty(Error("Unknown action"), "__NEXT_ERROR_CODE", {
            value: "E295",
            enumerable: !1,
            configurable: !0
          });
      }
    };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
