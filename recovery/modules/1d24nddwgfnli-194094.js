// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 194094.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return s;
    }
  });
  let i = e.r(513679),
    a = "u" < typeof window,
    n = a ? () => {} : i.useLayoutEffect,
    l = a ? () => {} : i.useEffect;
  function s(e) {
    let {
      headManager: t,
      reduceComponentsToState: r
    } = e;
    function s() {
      if (t && t.mountedInstances) {
        let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(r(e));
      }
    }
    return a && (t?.mountedInstances?.add(e.children), s()), n(() => (t?.mountedInstances?.add(e.children), () => {
      t?.mountedInstances?.delete(e.children);
    })), n(() => (t && (t._pendingUpdate = s), () => {
      t && (t._pendingUpdate = s);
    })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
      t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null);
    })), null;
  }
};
