// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 131610.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let r = e.r(330053),
    a = e.r(281889);
  e.r(513679);
  let i = r._(e.r(804421)),
    o = e.r(515253),
    l = e.r(361130),
    s = "u" > typeof window && (0, l.isBot)(window.navigator.userAgent);
  function u({
    children: e,
    errorComponent: t,
    errorStyles: n,
    errorScripts: r
  }) {
    return s ? (0, a.jsx)(i.default, {
      children: e
    }) : (0, a.jsx)(o.ErrorBoundary, {
      errorComponent: t,
      errorStyles: n,
      errorScripts: r,
      children: e
    });
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
