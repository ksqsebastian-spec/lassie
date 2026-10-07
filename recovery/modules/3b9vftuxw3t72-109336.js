// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 109336.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    createCacheKey: function () {
      return l;
    },
    splitPathnameIntoParts: function () {
      return u;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  function l(e, t) {
    let r = new URL(e);
    return {
      pathname: r.pathname,
      search: r.search,
      nextUrl: t
    };
  }
  function u(e) {
    let t = [],
      r = 0;
    for (let n = 0; n < e.length; n++) 47 === e.charCodeAt(n) && (n > r && t.push(e.slice(r, n)), r = n + 1);
    return r < e.length && t.push(e.slice(r)), t;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
