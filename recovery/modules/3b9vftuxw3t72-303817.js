// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 303817.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e, t) {
    let r = e[Symbol.asyncIterator]();
    for (;;) {
      let e = r.next();
      if (e.then(l, l), "fulfilled" !== e.status || void 0 === e.value) return;
      let n = e.value;
      if (n.done) return;
      t.add(n.value);
    }
  }
  function a(e, t) {
    if (null == e || null == t) return null;
    let r = new Set();
    return n(e, r), n(t, r), r;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "readVaryParams", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let l = () => {};
};
