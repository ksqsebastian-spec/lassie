// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 570215.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t = null;
  e.s(["focusWithoutScrolling", 0, function (e) {
    if (function () {
      if (null == t) {
        t = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return t = !0, !0;
            }
          });
        } catch {}
      }
      return t;
    }()) e.focus({
      preventScroll: !0
    });else {
      let t = function (e) {
        let t = e.parentNode,
          n = [],
          r = document.scrollingElement || document.documentElement;
        for (; t instanceof HTMLElement && t !== r;) (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
          element: t,
          scrollTop: t.scrollTop,
          scrollLeft: t.scrollLeft
        }), t = t.parentNode;
        return r instanceof HTMLElement && n.push({
          element: r,
          scrollTop: r.scrollTop,
          scrollLeft: r.scrollLeft
        }), n;
      }(e);
      e.focus(), function (e) {
        for (let {
          element: t,
          scrollTop: n,
          scrollLeft: r
        } of e) t.scrollTop = n, t.scrollLeft = r;
      }(t);
    }
  }]);
};
