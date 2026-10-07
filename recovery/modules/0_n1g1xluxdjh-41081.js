// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 41081.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    isRecoverableError: function () {
      return c;
    },
    onRecoverableError: function () {
      return d;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(330053),
    o = e.r(170307),
    l = i._(e.r(676452)),
    s = e.r(218177),
    u = new WeakSet();
  function c(e) {
    return u.has(e);
  }
  let d = e => {
    let t = (0, l.default)(e) && "cause" in e ? e.cause : e;
    (0, o.isBailoutToCSRError)(t) || (0, s.reportGlobalError)(t);
  };
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
