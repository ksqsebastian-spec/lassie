// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 208664.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "parseLoaderTree", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(36741);
  function a(e) {
    let [t, n, a, i] = e,
      {
        layout: o,
        template: l
      } = a,
      {
        page: s
      } = a;
    s = t === r.DEFAULT_SEGMENT_KEY ? a.defaultPage : s;
    let u = o?.[1] || l?.[1] || s?.[1];
    return {
      page: s,
      segment: t,
      modules: a,
      conventionPath: u,
      parallelRoutes: n,
      staticSiblings: i
    };
  }
};
