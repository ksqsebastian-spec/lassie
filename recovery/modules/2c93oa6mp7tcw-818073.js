// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 818073.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e, t = {}) {
    if (t.onlyHashChange) return void e();
    let r = document.documentElement;
    if ("smooth" !== r.dataset.scrollBehavior) return void e();
    let o = r.style.scrollBehavior;
    r.style.scrollBehavior = "auto", t.dontForceLayout || r.getClientRects(), e(), r.style.scrollBehavior = o;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
    enumerable: !0,
    get: function () {
      return n;
    }
  });
};
