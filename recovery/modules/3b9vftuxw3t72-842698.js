// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 842698.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    initializeRouterTransitionModules: function () {
      return u;
    },
    startRouterTransition: function () {
      return i;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  e.r(36741), e.r(318806);
  let l = [];
  function u(e) {
    l = e.filter(e => null != e);
  }
  function i(e, t, r, n) {
    for (let r of l) try {
      let n;
      n = r, n.onRouterTransitionStart?.(e, t, null);
    } catch (e) {
      console.error("An instrumentation-client router transition hook failed", e);
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
