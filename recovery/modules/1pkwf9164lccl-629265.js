// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 629265.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  let n, o, u;
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var i = {
    actionAsyncStorage: function () {
      return n;
    },
    workAsyncStorage: function () {
      return o;
    },
    workUnitAsyncStorage: function () {
      return u;
    }
  };
  for (var a in i) Object.defineProperty(r, a, {
    enumerable: !0,
    get: i[a]
  });
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
