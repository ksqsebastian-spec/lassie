// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 949930.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "ClientSegmentRoot", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(281889),
    l = e.r(516968),
    u = e.r(513679),
    a = e.r(807);
  function o({
    Component: e,
    slots: t,
    serverProvidedParams: r
  }) {
    let d;
    if (null !== r) d = r.params;else {
      let e = (0, u.use)(l.LayoutRouterContext);
      d = null !== e ? e.parentParams : {};
    }
    let s = (0, a.createClientParams)(d);
    return (0, n.jsx)(e, {
      ...t,
      params: s
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
