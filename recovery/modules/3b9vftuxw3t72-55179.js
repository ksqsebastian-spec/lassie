// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 55179.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "normalizePathTrailingSlash", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let n = e.r(842592),
    a = e.r(677553),
    l = e => {
      if (47 !== e.charCodeAt(0)) return e;
      let {
        pathname: t,
        query: r,
        hash: l
      } = (0, a.parsePath)(e);
      return `${(0, n.removeTrailingSlash)(t)}${r}${l}`;
    };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
