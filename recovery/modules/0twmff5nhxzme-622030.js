// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 622030, 822527, 517491.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(753438),
    n = e.i(195041),
    r = e.i(896661),
    i = e.i(49888),
    o = e.i(92559),
    s = e.i(239228),
    u = e.i(513679);
  function a(e) {
    let {
        isDisabled: t,
        onBlurWithin: n,
        onFocusWithin: a,
        onFocusWithinChange: l
      } = e,
      c = (0, u.useRef)({
        isFocusWithin: !1
      }),
      {
        addGlobalListener: d,
        removeAllGlobalListeners: f
      } = (0, s.useGlobalListeners)(),
      p = (0, u.useCallback)(e => {
        (0, i.nodeContains)(e.currentTarget, (0, i.getEventTarget)(e)) && c.current.isFocusWithin && !(0, i.nodeContains)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), n && n(e), l && l(!1));
      }, [n, l, c, f]),
      g = (0, r.useSyntheticBlurEvent)(p),
      v = (0, u.useCallback)(e => {
        if (!(0, i.nodeContains)(e.currentTarget, (0, i.getEventTarget)(e))) return;
        let t = (0, i.getEventTarget)(e),
          n = (0, o.getOwnerDocument)(t),
          s = (0, i.getActiveElement)(n);
        if (!c.current.isFocusWithin && s === t) {
          a && a(e), l && l(!0), c.current.isFocusWithin = !0, g(e);
          let t = e.currentTarget;
          d(n, "focus", e => {
            let o = (0, i.getEventTarget)(e);
            if (c.current.isFocusWithin && !(0, i.nodeContains)(t, o)) {
              let e = new n.defaultView.FocusEvent("blur", {
                relatedTarget: o
              });
              (0, r.setEventTarget)(e, t), p((0, r.createSyntheticEvent)(e));
            }
          }, {
            capture: !0
          });
        }
      }, [a, l, g, d, p]);
    return t ? {
      focusWithinProps: {
        onFocus: void 0,
        onBlur: void 0
      }
    } : {
      focusWithinProps: {
        onFocus: v,
        onBlur: p
      }
    };
  }
  e.s(["useFocusWithin", 0, a], 822527), e.s(["useFocusRing", 0, function (e = {}) {
    let {
        autoFocus: r = !1,
        isTextInput: i,
        within: o
      } = e,
      s = (0, u.useRef)({
        isFocused: !1,
        isFocusVisible: r || (0, t.isFocusVisible)()
      }),
      [l, c] = (0, u.useState)(!1),
      [d, f] = (0, u.useState)(() => s.current.isFocused && s.current.isFocusVisible),
      p = (0, u.useCallback)(() => f(s.current.isFocused && s.current.isFocusVisible), []),
      g = (0, u.useCallback)(e => {
        s.current.isFocused = e, s.current.isFocusVisible = (0, t.isFocusVisible)(), c(e), p();
      }, [p]);
    (0, t.useFocusVisibleListener)(e => {
      s.current.isFocusVisible = e, p();
    }, [i, l], {
      enabled: l,
      isTextInput: i
    });
    let {
        focusProps: v
      } = (0, n.useFocus)({
        isDisabled: o,
        onFocusChange: g
      }),
      {
        focusWithinProps: y
      } = a({
        isDisabled: !o,
        onFocusWithinChange: g
      });
    return {
      isFocused: l,
      isFocusVisible: d,
      focusProps: o ? y : v
    };
  }], 622030);
  let l = !1,
    c = 0;
  function d(e) {
    "touch" === e.pointerType && (l = !0, setTimeout(() => {
      l = !1;
    }, 500));
  }
  function f() {
    let e = (0, o.getOwnerDocument)(null);
    if (void 0 !== e) return 0 === c && "u" > typeof PointerEvent && e.addEventListener("pointerup", d), c++, () => {
      !(--c > 0) && "u" > typeof PointerEvent && e.removeEventListener("pointerup", d);
    };
  }
  e.s(["useHover", 0, function (e) {
    let {
        onHoverStart: t,
        onHoverChange: n,
        onHoverEnd: r,
        isDisabled: a
      } = e,
      [c, d] = (0, u.useState)(!1),
      p = (0, u.useRef)({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
      }).current;
    (0, u.useEffect)(f, []);
    let {
        addGlobalListener: g,
        removeAllGlobalListeners: v
      } = (0, s.useGlobalListeners)(),
      {
        hoverProps: y,
        triggerHoverEnd: E
      } = (0, u.useMemo)(() => {
        let e = (e, t) => {
            let i = p.target;
            p.pointerType = "", p.target = null, "touch" !== t && p.isHovered && i && (p.isHovered = !1, v(), r && r({
              type: "hoverend",
              target: i,
              pointerType: t
            }), n && n(!1), d(!1));
          },
          s = {};
        return "u" > typeof PointerEvent && (s.onPointerEnter = r => {
          l && "mouse" === r.pointerType || ((r, s) => {
            if (p.pointerType = s, a || "touch" === s || p.isHovered || !(0, i.nodeContains)(r.currentTarget, (0, i.getEventTarget)(r))) return;
            p.isHovered = !0;
            let u = r.currentTarget;
            p.target = u, g((0, o.getOwnerDocument)((0, i.getEventTarget)(r)), "pointerover", t => {
              p.isHovered && p.target && !(0, i.nodeContains)(p.target, (0, i.getEventTarget)(t)) && e(t, t.pointerType);
            }, {
              capture: !0
            }), t && t({
              type: "hoverstart",
              target: u,
              pointerType: s
            }), n && n(!0), d(!0);
          })(r, r.pointerType);
        }, s.onPointerLeave = t => {
          !a && (0, i.nodeContains)(t.currentTarget, (0, i.getEventTarget)(t)) && e(t, t.pointerType);
        }), {
          hoverProps: s,
          triggerHoverEnd: e
        };
      }, [t, n, r, a, p, g, v]);
    return (0, u.useEffect)(() => {
      a && E({
        currentTarget: p.target
      }, p.pointerType);
    }, [a]), {
      hoverProps: y,
      isHovered: c
    };
  }], 517491);
};
