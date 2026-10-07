// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 125054.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    getLastCommittedTree: function () {
      return u;
    },
    setLastCommittedTree: function () {
      return i;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = null;
  function u() {
    return l;
  }
  function i(e) {
    l = e;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
