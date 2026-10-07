// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 753438.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var n = e.i(49888),
    r = e.i(92559),
    i = e.i(896661),
    o = e.i(679978),
    s = e.i(768858),
    u = e.i(703224),
    a = e.i(514415),
    l = e.i(513679);
  let c = null,
    d = "keyboard",
    f = new Set(),
    p = new Map(),
    g = !1,
    v = !1,
    y = {
      Tab: !0,
      Escape: !0
    };
  function E(e, t) {
    for (let n of f) n(e, t);
  }
  function m(e) {
    g = !0, u.openLink.isOpening || e.metaKey || !(0, o.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (c = "keyboard", d = "keyboard", E("keyboard", e));
  }
  function b(e) {
    c = "pointer", d = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (g = !0, E("pointer", e));
  }
  function T(e) {
    !u.openLink.isOpening && (0, s.isVirtualClick)(e) && (g = !0, c = "virtual", d = "virtual");
  }
  function h(e) {
    let t = (0, r.getOwnerWindow)((0, n.getEventTarget)(e)),
      o = (0, r.getOwnerDocument)((0, n.getEventTarget)(e));
    (0, n.getEventTarget)(e) !== t && (0, n.getEventTarget)(e) !== o && !i.ignoreFocusEvent && e.isTrusted && (g || v || (c = "virtual", d = "virtual", E("virtual", e)), g = !1, v = !1);
  }
  function w() {
    i.ignoreFocusEvent || (g = !1, v = !0);
  }
  function P(e) {
    if ("u" < typeof window || "u" < typeof document) return;
    let t = (0, r.getOwnerWindow)(e),
      n = (0, r.getOwnerDocument)(e);
    if (p.get(t)) return;
    let i = t.HTMLElement.prototype.focus;
    t.HTMLElement.prototype.focus = function () {
      g = !0, i.apply(this, arguments);
    }, n.addEventListener("keydown", m, !0), n.addEventListener("keyup", m, !0), n.addEventListener("click", T, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", w, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", b, !0), n.addEventListener("pointermove", b, !0), n.addEventListener("pointerup", b, !0)), t.addEventListener("beforeunload", () => {
      S(e);
    }, {
      once: !0
    }), p.set(t, {
      focus: i
    });
  }
  let S = (e, t) => {
    let n = (0, r.getOwnerWindow)(e),
      i = (0, r.getOwnerDocument)(e);
    t && i.removeEventListener("DOMContentLoaded", t), p.has(n) && (n.HTMLElement.prototype.focus = p.get(n).focus, i.removeEventListener("keydown", m, !0), i.removeEventListener("keyup", m, !0), i.removeEventListener("click", T, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", w, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", b, !0), i.removeEventListener("pointermove", b, !0), i.removeEventListener("pointerup", b, !0)), p.delete(n));
  };
  function L() {
    return "pointer" !== c;
  }
  "u" > typeof document && ("loading" !== (t = (0, r.getOwnerDocument)(void 0)).readyState ? P(void 0) : t.addEventListener("DOMContentLoaded", () => {
    P(void 0);
  }));
  let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
  e.s(["getInteractionModality", 0, function () {
    return c;
  }, "getPointerType", 0, function () {
    return d;
  }, "isFocusVisible", 0, L, "setInteractionModality", 0, function (e) {
    c = e, d = "pointer" === e ? "mouse" : e, E(e, null);
  }, "useFocusVisibleListener", 0, function (e, t, i) {
    P(), (0, l.useEffect)(() => {
      if (i?.enabled === !1) return;
      let t = (t, o) => {
        var s;
        let u, a, l, c, d, f, p, g;
        s = !!i?.isTextInput, u = o ? (0, n.getEventTarget)(o) : void 0, a = (0, r.getOwnerDocument)(u), c = void 0 !== (l = (0, r.getOwnerWindow)(u)) ? l.HTMLInputElement : HTMLInputElement, d = void 0 !== l ? l.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== l ? l.HTMLElement : HTMLElement, p = void 0 !== l ? l.KeyboardEvent : KeyboardEvent, g = (0, n.getActiveElement)(a), (s = s || g instanceof c && !C.has(g.type) || g instanceof d || g instanceof f && g.isContentEditable) && "keyboard" === t && o instanceof p && !y[o.key] || e(L());
      };
      return f.add(t), () => {
        f.delete(t);
      };
    }, t);
  }, "useInteractionModality", 0, function () {
    P();
    let [e, t] = (0, l.useState)(c);
    return (0, l.useEffect)(() => {
      let e = () => {
        t(c);
      };
      return f.add(e), () => {
        f.delete(e);
      };
    }, []), (0, a.useIsSSR)() ? null : e;
  }]);
};
