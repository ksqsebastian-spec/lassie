// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 408541.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "default", {
    enumerable: !0,
    get: function () {
      return o;
    }
  }), e.r(330053);
  let r = e.r(281889);
  e.r(513679);
  let a = e.r(382702),
    i = e.r(367144),
    o = function ({
      error: e
    }) {
      let t = e?.digest,
        n = !!t;
      return (0, a.handleISRError)({
        error: e
      }), (0, r.jsxs)("html", {
        id: "__next_error__",
        children: [(0, r.jsx)("head", {
          children: (0, r.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: i.errorThemeCss
            }
          })
        }), (0, r.jsxs)("body", {
          children: [(0, r.jsx)("div", {
            style: i.errorStyles.container,
            children: (0, r.jsxs)("div", {
              style: i.errorStyles.card,
              children: [(0, r.jsx)(i.WarningIcon, {}), (0, r.jsx)("h1", {
                style: i.errorStyles.title,
                children: "This page couldn’t load"
              }), (0, r.jsx)("p", {
                style: i.errorStyles.message,
                children: n ? "A server error occurred. Reload to try again." : "Reload to try again, or go back."
              }), (0, r.jsxs)("div", {
                style: i.errorStyles.buttonGroup,
                children: [(0, r.jsx)("form", {
                  style: i.errorStyles.form,
                  children: (0, r.jsx)("button", {
                    type: "submit",
                    style: i.errorStyles.button,
                    children: "Reload"
                  })
                }), !n && (0, r.jsx)("button", {
                  type: "button",
                  style: i.errorStyles.buttonSecondary,
                  onClick: () => {
                    window.history.length > 1 ? window.history.back() : window.location.href = "/";
                  },
                  children: "Back"
                })]
              })]
            })
          }), t && (0, r.jsxs)("p", {
            style: i.errorStyles.digestFooter,
            children: ["ERROR ", t]
          })]
        })]
      });
    };
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
