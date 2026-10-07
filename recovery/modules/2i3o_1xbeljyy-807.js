// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 807.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    createClientParams: function () {
      return u.createRenderParamsFromClient;
    },
    createClientSearchParams: function () {
      return a.createRenderSearchParamsFromClient;
    }
  };
  for (var l in n) Object.defineProperty(r, l, {
    enumerable: !0,
    get: n[l]
  });
  let u = e.r(981652),
    a = e.r(196575);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
