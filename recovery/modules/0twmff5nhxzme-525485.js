// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 525485, 745584.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(92559),
    n = e.i(679978),
    r = e.i(975274);
  let i = "default",
    o = "",
    s = new WeakMap();
  function u(e) {
    let t = e?.defaultView;
    return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0;
  }
  e.s(["disableTextSelection", 0, function (e) {
    if ((0, n.isIOS)()) {
      if ("default" === i) {
        let n = (0, t.getOwnerDocument)(e);
        o = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
      }
      i = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
      let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
      s.set(e, e.style[t]), e.style[t] = "none";
    }
  }, "restoreTextSelection", 0, function (e) {
    if ((0, n.isIOS)()) "disabled" === i && (i = "restoring", setTimeout(() => {
      (0, r.runAfterTransition)(() => {
        if ("restoring" === i) {
          let n = (0, t.getOwnerDocument)(e);
          "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = o || ""), o = "", i = "default";
        }
      });
    }, 300));else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && s.has(e)) {
      let t = s.get(e),
        n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
      "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), s.delete(e);
    }
  }], 525485);
  let a = new WeakMap();
  e.s(["getNonce", 0, function (e) {
    let n = e ?? ("u" > typeof document ? document : void 0);
    if (!n) return u(n);
    if (a.has(n)) return a.get(n);
    let r = n.querySelector('meta[property="csp-nonce"]'),
      i = r && r instanceof (0, t.getOwnerWindow)(r).HTMLMetaElement && (r.nonce || r.content) || u(n) || void 0;
    return void 0 !== i && a.set(n, i), i;
  }], 745584);
};
