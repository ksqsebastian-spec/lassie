// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 716295.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    compareAppPaths: function () {
      return o;
    },
    normalizeAppPath: function () {
      return i;
    },
    normalizeRscURL: function () {
      return c;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(265669),
    u = e.r(36741);
  function i(e) {
    return (0, l.ensureLeadingSlash)(e.split("/").reduce((e, t, r, n) => !t || (0, u.isGroupSegment)(t) || "@" === t[0] || ("page" === t || "route" === t) && r === n.length - 1 ? e : `${e}/${t}`, ""));
  }
  function o(e, t) {
    let r = e.includes("/@"),
      n = t.includes("/@");
    return r && !n ? -1 : !r && n ? 1 : e.localeCompare(t);
  }
  function c(e) {
    return e.replace(/\.rsc($|\?)/, "$1");
  }
};
