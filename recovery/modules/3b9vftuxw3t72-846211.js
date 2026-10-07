// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 846211.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "callServer", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let n = e.r(513679),
    a = e.r(909740),
    l = e.r(446615);
  async function u(e, t) {
    return new Promise((r, u) => {
      (0, n.startTransition)(() => {
        (0, l.dispatchAppRouterAction)({
          type: a.ACTION_SERVER_ACTION,
          actionId: e,
          actionArgs: t,
          resolve: r,
          reject: u
        });
      });
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
