// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 968564.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n() {
    throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
      value: "E488",
      enumerable: !1,
      configurable: !0
    });
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "forbidden", {
    enumerable: !0,
    get: function () {
      return n;
    }
  }), e.r(555408).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
