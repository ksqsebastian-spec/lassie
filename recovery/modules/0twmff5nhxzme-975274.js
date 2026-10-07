// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 975274.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(49888);
  let n = new Map(),
    r = new Set();
  function i() {
    if ("u" < typeof window) return;
    function e(e) {
      return "propertyName" in e;
    }
    let i = o => {
      let s = (0, t.getEventTarget)(o);
      if (!e(o) || !s) return;
      let u = n.get(s);
      if (u && (u.delete(o.propertyName), 0 === u.size && (s.removeEventListener("transitioncancel", i), n.delete(s)), 0 === n.size)) {
        for (let e of r) e();
        r.clear();
      }
    };
    document.body.addEventListener("transitionrun", r => {
      let o = (0, t.getEventTarget)(r);
      if (!e(r) || !o) return;
      let s = n.get(o);
      s || (s = new Set(), n.set(o, s), o.addEventListener("transitioncancel", i, {
        once: !0
      })), s.add(r.propertyName);
    }), document.body.addEventListener("transitionend", i);
  }
  "u" > typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i)), e.s(["runAfterTransition", 0, function (e) {
    requestAnimationFrame(() => {
      for (let [e] of n) "isConnected" in e && !e.isConnected && n.delete(e);
      0 === n.size ? e() : r.add(e);
    });
  }]);
};
