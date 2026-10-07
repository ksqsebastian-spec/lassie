// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 331442.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "getAssetPrefix", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(411976);
  function a() {
    let e = document.currentScript;
    if (!(e instanceof HTMLScriptElement)) throw Object.defineProperty(new r.InvariantError(`Expected document.currentScript to be a <script> element. Received ${e} instead.`), "__NEXT_ERROR_CODE", {
      value: "E783",
      enumerable: !1,
      configurable: !0
    });
    let {
        pathname: t
      } = new URL(e.src),
      n = t.indexOf("/_next/");
    if (-1 === n) throw Object.defineProperty(new r.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${e.src} instead.`), "__NEXT_ERROR_CODE", {
      value: "E784",
      enumerable: !1,
      configurable: !0
    });
    return t.slice(0, n);
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
