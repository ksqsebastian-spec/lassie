// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 313757.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(662576);
  let i = (0, r.default)(() => e.A(804630).then(e => e.PaidAdsFloatingDesktopNav), {
      loadableGenerated: {
        modules: [840612]
      },
      ssr: !1
    }),
    a = (0, r.default)(() => e.A(804630).then(e => e.PaidAdsStickyEmailForm), {
      loadableGenerated: {
        modules: [840612]
      },
      ssr: !1
    });
  e.s(["PaidAdsDeferredOverlays", 0, function () {
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(i, {}), (0, t.jsx)(a, {})]
    });
  }]);
};
