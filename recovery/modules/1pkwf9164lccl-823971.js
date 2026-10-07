// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 823971.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  let n;
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var o = {
    getAssetToken: function () {
      return c;
    },
    getAssetTokenQuery: function () {
      return l;
    },
    getDeploymentId: function () {
      return i;
    },
    getDeploymentIdQuery: function () {
      return a;
    }
  };
  for (var u in o) Object.defineProperty(r, u, {
    enumerable: !0,
    get: o[u]
  });
  function i() {
    return n;
  }
  function a(e = !1) {
    let t = n;
    return t ? `${e ? "&" : "?"}dpl=${t}` : "";
  }
  function c() {}
  function l(e = !1) {
    return c(), "";
  }
  "u" > typeof window ? (n = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : n = globalThis.NEXT_DEPLOYMENT_ID || void 0;
};
