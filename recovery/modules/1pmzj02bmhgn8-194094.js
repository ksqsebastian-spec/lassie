// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 194094.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "default", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let r = e.r(513679),
    o = "u" < typeof window,
    n = o ? () => {} : r.useLayoutEffect,
    s = o ? () => {} : r.useEffect;
  function l(e) {
    let {
      headManager: t,
      reduceComponentsToState: i
    } = e;
    function l() {
      if (t && t.mountedInstances) {
        let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(i(e));
      }
    }
    return o && (t?.mountedInstances?.add(e.children), l()), n(() => (t?.mountedInstances?.add(e.children), () => {
      t?.mountedInstances?.delete(e.children);
    })), n(() => (t && (t._pendingUpdate = l), () => {
      t && (t._pendingUpdate = l);
    })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
      t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null);
    })), null;
  }
};
