// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 896661.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(570215),
    n = e.i(49888),
    r = e.i(92559),
    i = e.i(396387),
    o = e.i(454881),
    s = e.i(513679);
  function u(e) {
    return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e;
  }
  let a = !1;
  e.s(["createSyntheticEvent", 0, u, "ignoreFocusEvent", () => a, "preventFocus", 0, function (e) {
    for (; e && !(0, i.isFocusable)(e, {
      skipVisibilityCheck: !0
    });) e = e.parentElement;
    let o = (0, r.getOwnerWindow)(e),
      s = o.document.activeElement;
    if (!s || s === e) return;
    a = !0;
    let u = !1,
      l = e => {
        ((0, n.getEventTarget)(e) === s || u) && e.stopImmediatePropagation();
      },
      c = r => {
        ((0, n.getEventTarget)(r) === s || u) && (r.stopImmediatePropagation(), e || u || (u = !0, (0, t.focusWithoutScrolling)(s), p()));
      },
      d = t => {
        ((0, n.getEventTarget)(t) === e || u) && t.stopImmediatePropagation();
      },
      f = r => {
        ((0, n.getEventTarget)(r) === e || u) && (r.stopImmediatePropagation(), u || (u = !0, (0, t.focusWithoutScrolling)(s), p()));
      };
    o.addEventListener("blur", l, !0), o.addEventListener("focusout", c, !0), o.addEventListener("focusin", f, !0), o.addEventListener("focus", d, !0);
    let p = () => {
        cancelAnimationFrame(g), o.removeEventListener("blur", l, !0), o.removeEventListener("focusout", c, !0), o.removeEventListener("focusin", f, !0), o.removeEventListener("focus", d, !0), a = !1, u = !1;
      },
      g = requestAnimationFrame(p);
    return p;
  }, "setEventTarget", 0, function (e, t) {
    Object.defineProperty(e, "target", {
      value: t
    }), Object.defineProperty(e, "currentTarget", {
      value: t
    });
  }, "useSyntheticBlurEvent", 0, function (e) {
    let t = (0, s.useRef)({
      isFocused: !1,
      observer: null
    });
    return (0, o.useLayoutEffect)(() => {
      let e = t.current;
      return () => {
        e.observer && (e.observer.disconnect(), e.observer = null);
      };
    }, []), (0, s.useCallback)(r => {
      let i = (0, n.getEventTarget)(r);
      (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) && (t.current.isFocused = !0, i.addEventListener("focusout", n => {
        if (t.current.isFocused = !1, i.disabled) {
          let t = u(n);
          e?.(t);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      }, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          t.current.observer?.disconnect();
          let e = i === (0, n.getActiveElement)() ? null : (0, n.getActiveElement)();
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: e
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: e
          }));
        }
      }), t.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: ["disabled"]
      }));
    }, [e]);
  }]);
};
