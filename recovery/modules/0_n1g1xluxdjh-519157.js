// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 519157.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    onCaughtError: function () {
      return f;
    },
    onUncaughtError: function () {
      return p;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(330053),
    o = e.r(213475),
    l = e.r(170307),
    s = e.r(218177),
    u = e.r(515253),
    c = i._(e.r(408541)),
    d = {
      decorateDevError: e => e,
      handleClientError: () => {},
      originConsoleError: console.error.bind(console)
    };
  function f(e, t) {
    let n,
      r = t.errorBoundary?.constructor;
    if (n = n || r === u.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default) return p(e);
    (0, l.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || d.originConsoleError(e);
  }
  function p(e) {
    (0, l.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || (0, s.reportGlobalError)(e);
  }
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
