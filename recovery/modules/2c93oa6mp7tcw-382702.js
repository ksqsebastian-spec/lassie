// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 382702.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "handleISRError", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(629265);
  function o({
    error: e
  }) {
    if (n.workAsyncStorage) {
      let t = n.workAsyncStorage.getStore();
      if (t?.isStaticGeneration) throw e && console.error(e), e;
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
