// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 517460.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    REDIRECT_ERROR_CODE: function () {
      return i;
    },
    isRedirectError: function () {
      return a;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(539658),
    i = "NEXT_REDIRECT";
  function a(e) {
    if ("object" != typeof e || null === e || !("digest" in e) || "string" != typeof e.digest) return !1;
    let t = e.digest.split(";"),
      [r, n] = t,
      o = t.slice(2, -2).join(";"),
      a = Number(t.at(-2));
    return r === i && ("replace" === n || "push" === n) && "string" == typeof o && !isNaN(a) && a in u.RedirectStatusCode;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
