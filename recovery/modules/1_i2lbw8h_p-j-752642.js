// Recovered from 1_i2lbw8h_p-j.js. Runtime module IDs: 752642.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = function ({
    html: e,
    height: t = null,
    width: n = null,
    children: a,
    dataNtpc: i = ""
  }) {
    return (0, s.useEffect)(() => {
      i && performance.mark("mark_feature_usage", {
        detail: {
          feature: `next-third-parties-${i}`
        }
      });
    }, [i]), (0, r.jsxs)(r.Fragment, {
      children: [a, e ? (0, r.jsx)("div", {
        style: {
          height: null != t ? `${t}px` : "auto",
          width: null != n ? `${n}px` : "auto"
        },
        "data-ntpc": i,
        dangerouslySetInnerHTML: {
          __html: e
        }
      }) : null]
    });
  };
  let r = e.r(281889),
    s = e.r(513679);
};
