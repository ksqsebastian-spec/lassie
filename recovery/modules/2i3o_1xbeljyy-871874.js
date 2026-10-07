// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 871874.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "ClientPageRoot", {
    enumerable: !0,
    get: function () {
      return s;
    }
  });
  let n = e.r(281889),
    l = e.r(516968),
    u = e.r(513679),
    a = e.r(744838),
    o = e.r(509156),
    d = e.r(807);
  function s({
    Component: e,
    serverProvidedParams: t
  }) {
    let r, i;
    if (null !== t) r = t.searchParams, i = t.params;else {
      let e = (0, u.use)(l.LayoutRouterContext);
      i = null !== e ? e.parentParams : {}, r = (0, a.urlSearchParamsToParsedUrlQuery)((0, u.use)(o.SearchParamsContext));
    }
    let c = (0, d.createClientSearchParams)(r),
      f = (0, d.createClientParams)(i);
    return (0, n.jsx)(e, {
      params: f,
      searchParams: c
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
