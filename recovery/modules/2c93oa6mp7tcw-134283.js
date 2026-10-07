// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 134283.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    handleHardNavError: function () {
      return i;
    },
    useNavFailureHandler: function () {
      return a;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  e.r(513679);
  let u = e.r(988817);
  function i(e) {
    return "u" > typeof window && !!window.next.__pendingUrl && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== (0, u.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), !0);
  }
  function a() {}
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
