// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 608990.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    computeCacheBustingSearchParam: function () {
      return s;
    },
    computeLegacyCacheBustingSearchParam: function () {
      return f;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(263155),
    u = new TextEncoder();
  function i(e) {
    return void 0 === e ? "0" : Array.isArray(e) ? e.join(",") : e;
  }
  function o(e, t, r, n) {
    return (void 0 === e || "0" === e) && void 0 === t && void 0 === r && void 0 === n ? null : [e ?? "0", i(t), i(r), i(n)].join(",");
  }
  async function c(e) {
    var t = new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", u.encode(e))).subarray(0, 12);
    let r = "";
    for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function s(e, t, r, n) {
    let a = o(e, t, r, n);
    return null === a ? "" : c(a);
  }
  function f(e, t, r, n) {
    let a = o(e, t, r, n);
    return null === a ? "" : (0, l.hexHash)(a);
  }
};
