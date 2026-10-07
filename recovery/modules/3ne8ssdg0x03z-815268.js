// Recovered from 3ne8ssdg0x03z.js. Runtime module IDs: 815268.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return s;
    }
  });
  let n = e.r(281889),
    o = e.r(513679),
    l = e.r(701459),
    a = e.r(798785);
  function u(e) {
    return {
      default: e && "default" in e ? e.default : e
    };
  }
  let i = {
      loader: () => Promise.resolve(u(() => null)),
      loading: null,
      ssr: !0
    },
    s = function (e) {
      let t = {
          ...i,
          ...e
        },
        r = (0, o.lazy)(() => t.loader().then(u)),
        s = t.loading;
      function c(e) {
        let u = s ? (0, n.jsx)(s, {
            isLoading: !0,
            pastDelay: !0,
            error: null
          }) : null,
          i = !t.ssr || !!t.loading,
          c = i ? o.Suspense : o.Fragment,
          f = t.ssr ? (0, n.jsxs)(n.Fragment, {
            children: ["u" < typeof window ? (0, n.jsx)(a.PreloadChunks, {
              moduleIds: t.modules
            }) : null, (0, n.jsx)(r, {
              ...e
            })]
          }) : (0, n.jsx)(l.BailoutToCSR, {
            reason: "next/dynamic",
            children: (0, n.jsx)(r, {
              ...e
            })
          });
        return (0, n.jsx)(c, {
          ...(i ? {
            fallback: u
          } : {}),
          children: f
        });
      }
      return c.displayName = "LoadableComponent", c;
    };
};
