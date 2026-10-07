// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 509156.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    NavigationPromisesContext: function () {
      return s;
    },
    PathParamsContext: function () {
      return l;
    },
    PathnameContext: function () {
      return c;
    },
    ReadonlyURLSearchParams: function () {
      return i.ReadonlyURLSearchParams;
    },
    SearchParamsContext: function () {
      return a;
    },
    createDevToolsInstrumentedPromise: function () {
      return f;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(513679),
    i = e.r(165441),
    a = (0, u.createContext)(null),
    c = (0, u.createContext)(null),
    l = (0, u.createContext)(null),
    s = (0, u.createContext)(null);
  function f(e, t) {
    let r = Promise.resolve(t);
    return r.status = "fulfilled", r.value = t, r.displayName = `${e} (SSR)`, r;
  }
};
