// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 743817.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isLocalURL", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let n = e.r(478573),
    o = e.r(147640);
  function u(e) {
    if (!(0, n.isAbsoluteUrl)(e)) return !0;
    try {
      let t = (0, n.getLocationOrigin)(),
        r = new URL(e, t);
      return r.origin === t && (0, o.hasBasePath)(r.pathname);
    } catch (e) {
      return !1;
    }
  }
};
