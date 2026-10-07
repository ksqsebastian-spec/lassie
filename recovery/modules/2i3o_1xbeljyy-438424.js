// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 438424.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useRouterBFCache", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let n = e.r(513679);
  function l(e, t, r) {
    let [l, u] = (0, n.useState)(() => ({
      tree: e,
      cacheNode: t,
      stateKey: r,
      next: null
    }));
    if (l.tree === e) return l;
    let a = {
        tree: e,
        cacheNode: t,
        stateKey: r,
        next: null
      },
      o = 1,
      d = l,
      s = a;
    for (; null !== d && o < 1;) {
      if (d.stateKey === r) {
        s.next = d.next;
        break;
      }
      {
        o++;
        let e = {
          tree: d.tree,
          cacheNode: d.cacheNode,
          stateKey: d.stateKey,
          next: null
        };
        s.next = e, s = e;
      }
      d = d.next;
    }
    return u(a), a;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
