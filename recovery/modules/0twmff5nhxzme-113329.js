// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 113329.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(3385),
    n = e.i(896661),
    r = e.i(525485),
    i = e.i(570215),
    o = e.i(49888),
    s = e.i(745584),
    u = e.i(92559),
    a = e.i(679978),
    l = e.i(768858),
    c = e.i(526296),
    d = e.i(703224),
    f = e.i(970150),
    p = e.i(847712),
    g = e.i(239228),
    v = e.i(233628);
  e.i(345078);
  var y = e.i(513679);
  class E {
    #e;
    constructor(e, t, n, r) {
      this.#e = !0;
      let i = r?.target ?? n.currentTarget;
      const o = i?.getBoundingClientRect();
      let s,
        u = 0,
        a,
        l = null;
      null != n.clientX && null != n.clientY && (a = n.clientX, l = n.clientY), o && (null != a && null != l ? (s = a - o.left, u = l - o.top) : (s = o.width / 2, u = o.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u, this.key = n.key;
    }
    continuePropagation() {
      this.#e = !1;
    }
    get shouldStopPropagation() {
      return this.#e;
    }
  }
  let m = Symbol("linkClicked"),
    b = "react-aria-pressable-style",
    T = "data-react-aria-pressable";
  function h(e) {
    return "A" === e.tagName && e.hasAttribute("href");
  }
  function w(e, t) {
    let {
        key: n,
        code: r
      } = e,
      i = t.getAttribute("role");
    return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(t instanceof (0, u.getOwnerWindow)(t).HTMLInputElement && !C(t, n) || t instanceof (0, u.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === i || !i && h(t)) && "Enter" !== n);
  }
  function P(e, t) {
    let n = t.clientX,
      r = t.clientY;
    return {
      currentTarget: e,
      shiftKey: t.shiftKey,
      ctrlKey: t.ctrlKey,
      metaKey: t.metaKey,
      altKey: t.altKey,
      clientX: n,
      clientY: r,
      key: t.key
    };
  }
  function S(e, t) {
    return e instanceof HTMLInputElement ? !C(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !h(e));
  }
  let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
  function C(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type);
  }
  e.s(["usePress", 0, function (e) {
    let {
        onPress: L,
        onPressChange: C,
        onPressStart: k,
        onPressEnd: M,
        onPressUp: F,
        onClick: O,
        isDisabled: A,
        isPressed: D,
        preventFocusOnPress: K,
        shouldCancelOnPointerExit: x,
        allowTextSelectionOnPress: R,
        ref: I,
        ...H
      } = function (e) {
        let t = (0, y.useContext)(f.PressResponderContext);
        if (t) {
          let {
            register: n,
            ref: r,
            ...i
          } = t;
          e = (0, c.mergeProps)(i, e), n();
        }
        return (0, v.useSyncRef)(t, e.ref), e;
      }(e),
      [W, N] = (0, y.useState)(!1),
      V = (0, y.useRef)({
        isPressed: !1,
        ignoreEmulatedMouseEvents: !1,
        didFirePressStart: !1,
        isTriggeringEvent: !1,
        activePointerId: null,
        target: null,
        isOverTarget: !1,
        pointerType: null,
        disposables: []
      }),
      {
        addGlobalListener: _,
        removeAllGlobalListeners: U
      } = (0, g.useGlobalListeners)(),
      G = (0, y.useCallback)((e, t) => {
        let n = V.current;
        if (A || n.didFirePressStart) return !1;
        let r = !0;
        if (n.isTriggeringEvent = !0, k) {
          let n = new E("pressstart", t, e);
          k(n), r = n.shouldStopPropagation;
        }
        return C && C(!0), n.isTriggeringEvent = !1, n.didFirePressStart = !0, N(!0), r;
      }, [A, k, C]),
      B = (0, y.useCallback)((e, t, n = !0) => {
        let r = V.current;
        if (!r.didFirePressStart) return !1;
        r.didFirePressStart = !1, r.isTriggeringEvent = !0;
        let i = !0;
        if (M) {
          let n = new E("pressend", t, e);
          M(n), i = n.shouldStopPropagation;
        }
        if (C && C(!1), N(!1), L && n && !A) {
          let n = new E("press", t, e);
          L(n), i &&= n.shouldStopPropagation;
        }
        return r.isTriggeringEvent = !1, i;
      }, [A, M, C, L]),
      $ = (0, p.useEffectEvent)(B),
      j = (0, y.useCallback)((e, t) => {
        let n = V.current;
        if (A) return !1;
        if (F) {
          n.isTriggeringEvent = !0;
          let r = new E("pressup", t, e);
          return F(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
        }
        return !0;
      }, [A, F]),
      z = (0, p.useEffectEvent)(j),
      Y = (0, y.useCallback)(e => {
        let t = V.current;
        if (t.isPressed && t.target) {
          for (let n of (t.didFirePressStart && null != t.pointerType && B(P(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, U(), R || (0, r.restoreTextSelection)(t.target), t.disposables)) n();
          t.disposables = [];
        }
      }, [R, U, B]),
      q = (0, p.useEffectEvent)(Y);
    (0, y.useEffect)(() => {
      A && V.current.isPressed && q({
        currentTarget: V.current.target,
        shiftKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        altKey: !1
      });
    }, [A]);
    let X = (0, y.useCallback)(e => {
        x && Y(e);
      }, [x, Y]),
      J = (0, y.useCallback)(e => {
        A || O?.(e);
      }, [A, O]),
      Q = (0, y.useCallback)((e, t) => {
        if (!A && O) {
          let r = new MouseEvent("click", e);
          (0, n.setEventTarget)(r, t), O((0, n.createSyntheticEvent)(r));
        }
      }, [A, O]),
      Z = (0, y.useMemo)(() => {
        let e = V.current,
          s = {
            onKeyDown(n) {
              if (w(n.nativeEvent, n.currentTarget) && (0, o.nodeContains)(n.currentTarget, (0, o.getEventTarget)(n))) {
                S((0, o.getEventTarget)(n), n.key) && n.preventDefault();
                let r = !0;
                e.isPressed || n.repeat || (e.target = n.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = G(n, "keyboard"));
                let i = n.currentTarget;
                _((0, u.getOwnerDocument)(n.currentTarget), "keyup", (0, t.chain)(t => {
                  w(t, i) && !t.repeat && (0, o.nodeContains)(i, (0, o.getEventTarget)(t)) && e.target && z(P(e.target, t), "keyboard");
                }, c), !0), r && n.stopPropagation(), n.metaKey && (0, a.isMac)() && e.metaKeyEvents?.set(n.key, n.nativeEvent);
              } else "Meta" === n.key && (e.metaKeyEvents = new Map());
            },
            onClick(t) {
              if ((!t || (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !d.openLink.isOpening) {
                let n = !0;
                if (A && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, l.isVirtualClick)(t.nativeEvent))) {
                  let e = G(t, "virtual"),
                    r = z(t, "virtual"),
                    i = $(t, "virtual");
                  J(t), n = e && r && i;
                } else if (e.isPressed && "keyboard" !== e.pointerType) {
                  let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                    i = z(P(t.currentTarget, t), r),
                    o = $(P(t.currentTarget, t), r, !0);
                  n = i && o, e.isOverTarget = !1, J(t), q(t);
                }
                e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
              }
            }
          },
          c = t => {
            if (e.isPressed && e.target && w(t, e.target)) {
              S((0, o.getEventTarget)(t), t.key) && t.preventDefault();
              let n = (0, o.getEventTarget)(t),
                r = (0, o.nodeContains)(e.target, n);
              $(P(e.target, t), "keyboard", r), r && Q(t, e.target), U(), "Enter" !== t.key && h(e.target) && (0, o.nodeContains)(e.target, n) && !t[m] && (t[m] = !0, (0, d.openLink)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
            } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
              let t = e.metaKeyEvents;
              for (let n of (e.metaKeyEvents = void 0, t.values())) e.target?.dispatchEvent(new KeyboardEvent("keyup", n));
            }
          };
        if ("u" > typeof PointerEvent) {
          s.onPointerDown = n => {
            if (0 !== n.button || !(0, o.nodeContains)(n.currentTarget, (0, o.getEventTarget)(n))) return;
            if ((0, l.isVirtualPointerEvent)(n.nativeEvent)) {
              e.pointerType = "virtual";
              return;
            }
            e.pointerType = n.pointerType;
            let i = !0;
            if (!e.isPressed) {
              e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, R || (0, r.disableTextSelection)(e.target), i = G(n, e.pointerType);
              let s = (0, o.getEventTarget)(n);
              "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId) : s.releasePointerCapture(n.pointerId)), _((0, u.getOwnerDocument)(n.currentTarget), "pointerup", t, !1), _((0, u.getOwnerDocument)(n.currentTarget), "pointercancel", a, !1);
            }
            i && n.stopPropagation();
          }, s.onMouseDown = t => {
            if ((0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && 0 === t.button) {
              if (K) {
                let r = (0, n.preventFocus)(t.target);
                r && e.disposables.push(r);
              }
              t.stopPropagation();
            }
          }, s.onPointerUp = t => {
            (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || z(t, e.pointerType || t.pointerType));
          }, s.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, G(P(e.target, t), e.pointerType));
          }, s.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, $(P(e.target, t), e.pointerType, !1), X(t));
          };
          let t = t => {
              if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                if ((0, o.nodeContains)(e.target, (0, o.getEventTarget)(t)) && null != e.pointerType) {
                  let n = !1,
                    r = setTimeout(() => {
                      e.isPressed && e.target instanceof HTMLElement && (n ? q(t) : ((0, i.focusWithoutScrolling)(e.target), e.target.click()));
                    }, 80);
                  _(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
                } else q(t);
                e.isOverTarget = !1;
              }
            },
            a = e => {
              q(e);
            };
          s.onDragStart = e => {
            (0, o.nodeContains)(e.currentTarget, (0, o.getEventTarget)(e)) && q(e);
          };
        }
        return s;
      }, [_, A, K, U, R, X, G, J, Q]);
    return (0, y.useEffect)(() => {
      if (!I) return;
      let e = (0, u.getOwnerDocument)(I.current);
      if (!e || !e.head || e.getElementById(b)) return;
      let t = e.createElement("style");
      t.id = b;
      let n = (0, s.getNonce)(e);
      n && (t.nonce = n), t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
    }, [I]), (0, y.useEffect)(() => {
      let e = V.current;
      return () => {
        for (let t of (R || (0, r.restoreTextSelection)(e.target ?? void 0), e.disposables)) t();
        e.disposables = [];
      };
    }, [R]), {
      isPressed: D || W,
      pressProps: (0, c.mergeProps)(H, Z, {
        [T]: !0
      })
    };
  }]);
};
