// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 860735.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    ESCAPE_REGEX: function () {
      return i;
    },
    htmlEscapeAttributeString: function () {
      return c;
    },
    htmlEscapeJsonString: function () {
      return s;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    },
    i = /[&><\u2028\u2029]/g,
    a = {
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;"
    },
    l = /[&"'<>]/g;
  function s(e) {
    return e.replace(i, e => u[e]);
  }
  function c(e) {
    return e.replace(l, e => a[e]);
  }
};
