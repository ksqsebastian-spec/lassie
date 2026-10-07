// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 582853.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    appendLayoutVaryPath: function () {
      return s;
    },
    clonePageVaryPathWithNewSearchParams: function () {
      return _;
    },
    finalizeLayoutVaryPath: function () {
      return f;
    },
    finalizeMetadataVaryPath: function () {
      return y;
    },
    finalizePageVaryPath: function () {
      return h;
    },
    getFulfilledRouteVaryPath: function () {
      return c;
    },
    getFulfilledSegmentVaryPath: function () {
      return function e(t, r) {
        return {
          id: t.id,
          value: null === t.id || r.has(t.id) ? t.value : u.Fallback,
          isRootParam: t.isRootParam,
          parent: null === t.parent ? null : e(t.parent, r)
        };
      };
    },
    getPartialLayoutVaryPath: function () {
      return d;
    },
    getPartialPageVaryPath: function () {
      return p;
    },
    getRenderedSearchFromVaryPath: function () {
      return v;
    },
    getRouteVaryPath: function () {
      return o;
    },
    getSegmentVaryPathForRequest: function () {
      return g;
    },
    getShellSegmentVaryPath: function () {
      return function e(t) {
        return {
          id: t.id,
          value: null === t.id || !0 === t.isRootParam ? t.value : u.Fallback,
          isRootParam: t.isRootParam,
          parent: null === t.parent ? null : e(t.parent)
        };
      };
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(888474),
    u = e.r(453983),
    i = e.r(264575);
  function o(e, t, r) {
    return {
      id: null,
      value: e,
      isRootParam: !1,
      parent: {
        id: "?",
        value: t,
        isRootParam: !1,
        parent: {
          id: null,
          value: r,
          isRootParam: !1,
          parent: null
        }
      }
    };
  }
  function c(e, t, r, n) {
    return {
      id: null,
      value: e,
      isRootParam: !1,
      parent: {
        id: "?",
        value: t,
        isRootParam: !1,
        parent: {
          id: null,
          value: n ? r : u.Fallback,
          isRootParam: !1,
          parent: null
        }
      }
    };
  }
  function s(e, t, r, n) {
    return {
      id: r,
      value: t,
      isRootParam: n,
      parent: e
    };
  }
  function f(e, t) {
    return {
      id: null,
      value: e,
      isRootParam: !1,
      parent: t
    };
  }
  function d(e) {
    return e.parent;
  }
  function h(e, t, r) {
    return {
      id: null,
      value: e,
      isRootParam: !1,
      parent: {
        id: "?",
        value: t,
        isRootParam: !1,
        parent: r
      }
    };
  }
  function p(e) {
    return e.parent.parent;
  }
  function y(e, t, r) {
    return {
      id: null,
      value: e + i.HEAD_REQUEST_KEY,
      isRootParam: !1,
      parent: {
        id: "?",
        value: t,
        isRootParam: !1,
        parent: r
      }
    };
  }
  function g(e, t) {
    let r = t.varyPath;
    if (e === l.FetchStrategy.RuntimeShell || e === l.FetchStrategy.StaticShell) return t.shellVaryPath;
    if (t.isPage && e !== l.FetchStrategy.Full && e !== l.FetchStrategy.PPRRuntime) {
      let e = r.parent.parent;
      return {
        id: null,
        value: r.value,
        isRootParam: !1,
        parent: {
          id: "?",
          value: u.Fallback,
          isRootParam: !1,
          parent: e
        }
      };
    }
    return r;
  }
  function _(e, t) {
    let r = e.parent;
    return {
      id: null,
      value: e.value,
      isRootParam: !1,
      parent: {
        id: "?",
        value: t,
        isRootParam: !1,
        parent: r.parent
      }
    };
  }
  function v(e) {
    let t = e.parent.value;
    return "string" == typeof t ? t : null;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
