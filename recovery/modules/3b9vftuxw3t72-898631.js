// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 898631.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    SERVER_REFERENCE_ID_LENGTH: function () {
      return l;
    },
    extractInfoFromServerReferenceId: function () {
      return i;
    },
    mightBeServerReferenceId: function () {
      return u;
    },
    omitUnusedArgs: function () {
      return o;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = 42;
  function u(e) {
    return e.length === l;
  }
  function i(e) {
    let t = parseInt(e.slice(0, 2), 16),
      r = t >> 1 & 63,
      n = Array(6);
    for (let e = 0; e < 6; e++) {
      let t = r >> 5 - e & 1;
      n[e] = 1 === t;
    }
    return {
      type: 1 == (t >> 7 & 1) ? "use-cache" : "server-action",
      usedArgs: n,
      hasRestArgs: 1 == (1 & t)
    };
  }
  function o(e, t) {
    let r = Array(e.length),
      n = 0;
    for (let a = 0; a < e.length; a++) (a < 6 && t.usedArgs[a] || a >= 6 && t.hasRestArgs) && (r[a] = e[a], n = a + 1);
    return r.length = n, r;
  }
};
