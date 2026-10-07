// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 156044.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    bindSnapshot: function () {
      return u;
    },
    createAsyncLocalStorage: function () {
      return i;
    },
    createSnapshot: function () {
      return c;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: !1,
    configurable: !0
  });
  class o {
    disable() {
      throw l;
    }
    getStore() {}
    run() {
      throw l;
    }
    exit() {
      throw l;
    }
    enterWith() {
      throw l;
    }
    static bind(e) {
      return e;
    }
  }
  let s = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function i() {
    return s ? new s() : new o();
  }
  function u(e) {
    return s ? s.bind(e) : o.bind(e);
  }
  function c() {
    return s ? s.snapshot() : function (e, ...t) {
      return e(...t);
    };
  }
};
