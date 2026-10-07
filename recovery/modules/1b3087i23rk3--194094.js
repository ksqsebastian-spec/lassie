// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 194094.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function () {
      return o;
    }
  });
  let n = e.r(513679),
    a = "u" < typeof window,
    i = a ? () => {} : n.useLayoutEffect,
    s = a ? () => {} : n.useEffect;
  function o(e) {
    let {
      headManager: t,
      reduceComponentsToState: r
    } = e;
    function o() {
      if (t && t.mountedInstances) {
        let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(r(e));
      }
    }
    return a && (t?.mountedInstances?.add(e.children), o()), i(() => (t?.mountedInstances?.add(e.children), () => {
      t?.mountedInstances?.delete(e.children);
    })), i(() => (t && (t._pendingUpdate = o), () => {
      t && (t._pendingUpdate = o);
    })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
      t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null);
    })), null;
  }
};
