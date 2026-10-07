// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 49888, 92559, 886160, 396387.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t = e => e?.ownerDocument ?? document,
    n = e => e && "window" in e && e.window === e ? e : t(e).defaultView || window;
  function r(e) {
    return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
  }
  function i() {
    return !1;
  }
  e.s(["getOwnerDocument", 0, t, "getOwnerWindow", 0, n, "isShadowRoot", 0, r], 92559), e.s(["shadowDOM", 0, i], 886160), e.s(["getActiveElement", 0, (e = document) => {
    if (!i()) return e.activeElement;
    let t = e.activeElement;
    for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
    return t;
  }, "getEventTarget", 0, function (e) {
    if (i() && e.target instanceof Element && e.target.shadowRoot) {
      if ("composedPath" in e) return e.composedPath()[0] ?? null;else if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
    }
    return e.target;
  }, "isFocusWithin", 0, function (e) {
    if (!e) return !1;
    let t = e.getRootNode(),
      r = n(e);
    if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) return !1;
    let i = t.activeElement;
    return null != i && e.contains(i);
  }, "nodeContains", 0, function (e, t) {
    if (!i()) return !!t && !!e && e.contains(t);
    if (!e || !t) return !1;
    let n = t;
    for (; null !== n;) {
      if (n === e) return !0;
      n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : r(n) ? n.host : n.parentNode;
    }
    return !1;
  }], 49888);
  let o = "u" > typeof Element && "checkVisibility" in Element.prototype;
  function s(e, t) {
    return o ? e.checkVisibility({
      visibilityProperty: !0
    }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function (e) {
      let t = n(e);
      if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
      let {
          display: r,
          visibility: i
        } = e.style,
        o = "none" !== r && "hidden" !== i && "collapse" !== i;
      if (o) {
        let {
            getComputedStyle: t
          } = e.ownerDocument.defaultView,
          {
            display: n,
            visibility: r
          } = t(e);
        o = "none" !== n && "hidden" !== r && "collapse" !== r;
      }
      return o;
    }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) && (!e.parentElement || s(e.parentElement, e));
  }
  let u = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
    a = u.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
  u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
  let l = u.join(':not([hidden]):not([tabindex="-1"]),');
  function c(e) {
    let t = e;
    for (; null != t;) {
      if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
      t = t.parentElement;
    }
    return !1;
  }
  e.s(["isFocusable", 0, function (e, t) {
    return e.matches(a) && !c(e) && (t?.skipVisibilityCheck || s(e));
  }, "isTabbable", 0, function (e) {
    return e.matches(l) && s(e) && !c(e);
  }], 396387);
};
