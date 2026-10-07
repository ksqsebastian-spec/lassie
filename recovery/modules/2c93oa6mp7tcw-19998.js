// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 19998.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    cancelIdleCallback: function () {
      return i;
    },
    requestIdleCallback: function () {
      return u;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
      let t = Date.now();
      return self.setTimeout(function () {
        e({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - t));
          }
        });
      }, 1);
    },
    i = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (e) {
      return clearTimeout(e);
    };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
