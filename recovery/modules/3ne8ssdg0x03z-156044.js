// Recovered from 3ne8ssdg0x03z.js. Runtime module IDs: 156044.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    bindSnapshot: function () {
      return s;
    },
    createAsyncLocalStorage: function () {
      return i;
    },
    createSnapshot: function () {
      return c;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let l = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: !1,
    configurable: !0
  });
  class a {
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
  let u = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
  function i() {
    return u ? new u() : new a();
  }
  function s(e) {
    return u ? u.bind(e) : a.bind(e);
  }
  function c() {
    return u ? u.snapshot() : function (e, ...t) {
      return e(...t);
    };
  }
};
