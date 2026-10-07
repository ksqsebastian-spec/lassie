// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 516968.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    AppRouterContext: function () {
      return i;
    },
    GlobalLayoutRouterContext: function () {
      return c;
    },
    LayoutRouterContext: function () {
      return a;
    },
    MissingSlotContext: function () {
      return s;
    },
    TemplateContext: function () {
      return l;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(330053)._(e.r(513679)),
    i = u.default.createContext(null),
    a = u.default.createContext(null),
    c = u.default.createContext(null),
    l = u.default.createContext(null),
    s = u.default.createContext(new Set());
};
