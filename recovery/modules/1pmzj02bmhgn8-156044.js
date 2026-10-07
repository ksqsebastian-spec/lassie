// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 156044.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  var r = {
    bindSnapshot: function () {
      return u;
    },
    createAsyncLocalStorage: function () {
      return a;
    },
    createSnapshot: function () {
      return c;
    }
  };
  for (var o in r) Object.defineProperty(i, o, {
    enumerable: !0,
    get: r[o]
  });
  let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: !1,
    configurable: !0
  });
  class s {
    disable() {
      throw n;
    }
    getStore() {}
    run() {
      throw n;
    }
    exit() {
      throw n;
    }
    enterWith() {
      throw n;
    }
    static bind(e) {
      return e;
    }
  }
  let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function a() {
    return l ? new l() : new s();
  }
  function u(e) {
    return l ? l.bind(e) : s.bind(e);
  }
  function c() {
    return l ? l.snapshot() : function (e, ...t) {
      return e(...t);
    };
  }
};
