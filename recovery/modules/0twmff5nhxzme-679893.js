// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 679893, 195041, 911938.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(570215),
    n = e.i(49888),
    r = e.i(753438),
    i = e.i(92559),
    o = e.i(975274);
  e.s(["focusSafely", 0, function (e) {
    if (!e.isConnected) return;
    let s = (0, i.getOwnerDocument)(e);
    if ("virtual" === (0, r.getInteractionModality)()) {
      let r = (0, n.getActiveElement)(s);
      (0, o.runAfterTransition)(() => {
        let i = (0, n.getActiveElement)(s);
        (i === r || i === s.body) && e.isConnected && (0, t.focusWithoutScrolling)(e);
      });
    } else (0, t.focusWithoutScrolling)(e);
  }], 679893);
  var s = e.i(896661),
    u = e.i(513679);
  function a(e) {
    if (!e) return;
    let t = !0;
    return n => {
      e({
        ...n,
        preventDefault() {
          n.preventDefault();
        },
        isDefaultPrevented: () => n.isDefaultPrevented(),
        stopPropagation() {
          t = !0;
        },
        continuePropagation() {
          t = !1;
        },
        isPropagationStopped: () => t
      }), t && n.stopPropagation();
    };
  }
  e.s(["useFocus", 0, function (e) {
    let {
        isDisabled: t,
        onFocus: r,
        onBlur: o,
        onFocusChange: a
      } = e,
      l = (0, u.useCallback)(e => {
        if ((0, n.getEventTarget)(e) === e.currentTarget) return o && o(e), a && a(!1), !0;
      }, [o, a]),
      c = (0, s.useSyntheticBlurEvent)(l),
      d = (0, u.useCallback)(e => {
        let t = (0, n.getEventTarget)(e),
          o = (0, i.getOwnerDocument)(t),
          s = o ? (0, n.getActiveElement)(o) : (0, n.getActiveElement)();
        t === e.currentTarget && t === s && (r && r(e), a && a(!0), c(e));
      }, [a, r, c]);
    return {
      focusProps: {
        onFocus: !t && (r || a || o) ? d : void 0,
        onBlur: !t && (o || a) ? l : void 0
      }
    };
  }], 195041), e.s(["useKeyboard", 0, function (e) {
    return {
      keyboardProps: e.isDisabled ? {} : {
        onKeyDown: a(e.onKeyDown),
        onKeyUp: a(e.onKeyUp)
      }
    };
  }], 911938);
};
