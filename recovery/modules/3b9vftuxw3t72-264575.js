// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 264575.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    HEAD_REQUEST_KEY: function () {
      return i;
    },
    ROOT_SEGMENT_REQUEST_KEY: function () {
      return u;
    },
    appendSegmentRequestKeyPart: function () {
      return c;
    },
    convertSegmentPathToStaticExportFilename: function () {
      return d;
    },
    createSegmentRequestKeyPart: function () {
      return o;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(36741),
    u = "",
    i = "/_head";
  function o(e) {
    if ("string" == typeof e) return e.startsWith(l.PAGE_SEGMENT_KEY) ? l.PAGE_SEGMENT_KEY : "/_not-found" === e ? "_not-found" : f(e);
    let t = e[0];
    return "$" + e[2] + "$" + f(t);
  }
  function c(e, t, r) {
    return e + "/" + ("children" === t ? r : `@${f(t)}/${r}`);
  }
  let s = /^[a-zA-Z0-9\-_@]+$/;
  function f(e) {
    return s.test(e) ? e : "!" + btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function d(e) {
    return `__next${e.replace(/\//g, ".")}.txt`;
  }
};
