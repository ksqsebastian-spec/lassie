// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 81378.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useMergedRef", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = t.r(513679);
  function i(t, e) {
    let r = (0, n.useRef)(null),
      i = (0, n.useRef)(null);
    return (0, n.useCallback)(n => {
      if (null === n) {
        let t = r.current;
        t && (r.current = null, t());
        let e = i.current;
        e && (i.current = null, e());
      } else t && (r.current = o(t, n)), e && (i.current = o(e, n));
    }, [t, e]);
  }
  function o(t, e) {
    if ("function" != typeof t) return t.current = e, () => {
      t.current = null;
    };
    {
      let r = t(e);
      return "function" == typeof r ? r : () => t(null);
    }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), e.exports = r.default);
};
