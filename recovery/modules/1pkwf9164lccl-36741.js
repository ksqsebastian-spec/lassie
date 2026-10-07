// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 36741.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    DEFAULT_SEGMENT_KEY: function () {
      return f;
    },
    NOT_FOUND_SEGMENT_KEY: function () {
      return d;
    },
    PAGE_SEGMENT_KEY: function () {
      return s;
    },
    addSearchParamsIfPageSegment: function () {
      return c;
    },
    computeSelectedLayoutSegment: function () {
      return l;
    },
    getSegmentValue: function () {
      return u;
    },
    getSelectedLayoutSegmentPath: function () {
      return function e(t, r, n = !0, o = []) {
        let i;
        if (n) i = t[1][r];else {
          let e = t[1];
          i = e.children ?? Object.values(e)[0];
        }
        if (!i) return o;
        let a = u(i[0]);
        return !a || a.startsWith(s) ? o : (o.push(a), e(i, r, !1, o));
      };
    },
    isGroupSegment: function () {
      return i;
    },
    isParallelRouteSegment: function () {
      return a;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  function u(e) {
    return Array.isArray(e) ? e[1] : e;
  }
  function i(e) {
    return "(" === e[0] && e.endsWith(")");
  }
  function a(e) {
    return e.startsWith("@") && "@children" !== e;
  }
  function c(e, t) {
    if (e.includes(s)) {
      let e = JSON.stringify(t);
      return "{}" !== e ? s + "?" + e : s;
    }
    return e;
  }
  function l(e, t) {
    if (!e || 0 === e.length) return null;
    let r = "children" === t ? e[0] : e[e.length - 1];
    return r === f ? null : r;
  }
  let s = "__PAGE__",
    f = "__DEFAULT__",
    d = "/_not-found";
};
