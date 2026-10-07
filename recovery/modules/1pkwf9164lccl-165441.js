// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 165441.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "ReadonlyURLSearchParams", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  class n extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"), Object.defineProperty(this, "__NEXT_ERROR_CODE", {
        value: "E1174",
        enumerable: !1,
        configurable: !0
      });
    }
  }
  class o extends URLSearchParams {
    append() {
      throw new n();
    }
    delete() {
      throw new n();
    }
    set() {
      throw new n();
    }
    sort() {
      throw new n();
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
