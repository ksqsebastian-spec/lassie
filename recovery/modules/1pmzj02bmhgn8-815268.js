// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 815268.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "default", {
    enumerable: !0,
    get: function () {
      return u;
    }
  });
  let r = e.r(281889),
    o = e.r(513679),
    n = e.r(701459),
    s = e.r(798785);
  function l(e) {
    return {
      default: e && "default" in e ? e.default : e
    };
  }
  let a = {
      loader: () => Promise.resolve(l(() => null)),
      loading: null,
      ssr: !0
    },
    u = function (e) {
      let t = {
          ...a,
          ...e
        },
        i = (0, o.lazy)(() => t.loader().then(l)),
        u = t.loading;
      function c(e) {
        let l = u ? (0, r.jsx)(u, {
            isLoading: !0,
            pastDelay: !0,
            error: null
          }) : null,
          a = !t.ssr || !!t.loading,
          c = a ? o.Suspense : o.Fragment,
          h = t.ssr ? (0, r.jsxs)(r.Fragment, {
            children: ["u" < typeof window ? (0, r.jsx)(s.PreloadChunks, {
              moduleIds: t.modules
            }) : null, (0, r.jsx)(i, {
              ...e
            })]
          }) : (0, r.jsx)(n.BailoutToCSR, {
            reason: "next/dynamic",
            children: (0, r.jsx)(i, {
              ...e
            })
          });
        return (0, r.jsx)(c, {
          ...(a ? {
            fallback: l
          } : {}),
          children: h
        });
      }
      return c.displayName = "LoadableComponent", c;
    };
};
