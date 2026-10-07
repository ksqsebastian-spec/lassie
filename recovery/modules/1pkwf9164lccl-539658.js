// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 539658.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "RedirectStatusCode", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  var n,
    o = ((n = {})[n.SeeOther = 303] = "SeeOther", n[n.TemporaryRedirect = 307] = "TemporaryRedirect", n[n.PermanentRedirect = 308] = "PermanentRedirect", n);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
