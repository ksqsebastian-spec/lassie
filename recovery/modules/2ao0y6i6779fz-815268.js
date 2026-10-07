// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 815268.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let n = e.r(281889),
    a = e.r(513679),
    l = e.r(701459),
    o = e.r(798785);
  function s(e) {
    return {
      default: e && "default" in e ? e.default : e
    };
  }
  let i = {
      loader: () => Promise.resolve(s(() => null)),
      loading: null,
      ssr: !0
    },
    u = function (e) {
      let t = {
          ...i,
          ...e
        },
        r = (0, a.lazy)(() => t.loader().then(s)),
        u = t.loading;
      function c(e) {
        let s = u ? (0, n.jsx)(u, {
            isLoading: !0,
            pastDelay: !0,
            error: null
          }) : null,
          i = !t.ssr || !!t.loading,
          c = i ? a.Suspense : a.Fragment,
          d = t.ssr ? (0, n.jsxs)(n.Fragment, {
            children: ["u" < typeof window ? (0, n.jsx)(o.PreloadChunks, {
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
            fallback: s
          } : {}),
          children: d
        });
      }
      return c.displayName = "LoadableComponent", c;
    };
};
