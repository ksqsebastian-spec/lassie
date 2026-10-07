// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 946464.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "setAttributesFromProps", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    },
    o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];
  function u(e) {
    return ["async", "defer", "noModule"].includes(e);
  }
  function i(e, t) {
    for (let [r, i] of Object.entries(t)) {
      if (!t.hasOwnProperty(r) || o.includes(r) || void 0 === i) continue;
      let a = n[r] || r.toLowerCase();
      "SCRIPT" === e.tagName && u(a) ? e[a] = !!i : e.setAttribute(a, String(i)), (!1 === i || "SCRIPT" === e.tagName && u(a) && (!i || "false" === i)) && (e.setAttribute(a, ""), e.removeAttribute(a));
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
