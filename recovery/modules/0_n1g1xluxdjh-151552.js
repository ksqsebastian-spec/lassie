// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 151552.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r() {
    let e = Object.create(null);
    return {
      on(t, n) {
        (e[t] || (e[t] = [])).push(n);
      },
      off(t, n) {
        e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
      },
      emit(t, ...n) {
        (e[t] || []).slice().map(e => {
          e(...n);
        });
      }
    };
  }
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
};
