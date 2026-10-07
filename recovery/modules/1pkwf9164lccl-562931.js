// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 562931.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "notFound", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let n = e.r(555408),
    o = `${n.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
  function u() {
    let e = Object.defineProperty(Error(o), "__NEXT_ERROR_CODE", {
      value: "E1041",
      enumerable: !1,
      configurable: !0
    });
    throw e.digest = o, e;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
