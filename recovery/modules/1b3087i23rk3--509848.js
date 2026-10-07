// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 509848, 660971, 380603, 270222, 155860, 619832, 27626, 103009, 999380, 755118.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(386465),
    r = e.i(513679);
  "u" > typeof HTMLTemplateElement && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.content.firstChild;
    }
  }), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
    configurable: !0,
    enumerable: !0,
    value: function (e) {
      return this.content.appendChild(e);
    }
  }), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
    configurable: !0,
    enumerable: !0,
    value: function (e) {
      return this.content.removeChild(e);
    }
  }), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
    configurable: !0,
    enumerable: !0,
    value: function (e, t) {
      return this.content.insertBefore(e, t);
    }
  }));
  let n = (0, r.createContext)(!1);
  function a(e) {
    let t = (t, a) => (0, r.useContext)(n) ? null : e(t, a);
    return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t);
  }
  e.s(["Hidden", 0, function (e) {
    if ((0, r.useContext)(n)) return r.default.createElement(r.default.Fragment, null, e.children);
    let t = r.default.createElement(n.Provider, {
      value: !0
    }, e.children);
    return r.default.createElement("template", null, t);
  }, "createHideableComponent", 0, a, "useIsHidden", 0, function () {
    return (0, r.useContext)(n);
  }], 660971);
  let i = (0, r.createContext)({});
  e.s(["LabelContext", 0, i], 380603);
  var s = e.i(120306),
    o = e.i(526296),
    l = e.i(900907);
  function d(e, t) {
    let {
      id: r,
      "aria-label": n,
      "aria-labelledby": a
    } = e;
    return r = (0, l.useId)(r), a && n ? a = [...new Set([r, ...a.trim().split(/\s+/)])].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), n || a || !t || (n = t), {
      id: r,
      "aria-label": n,
      "aria-labelledby": a
    };
  }
  e.s(["useLabels", 0, d], 270222), e.s(["useLabel", 0, function (e) {
    let {
      id: t,
      label: r,
      "aria-labelledby": n,
      "aria-label": a,
      labelElementType: i = "label"
    } = e;
    t = (0, l.useId)(t);
    let s = (0, l.useId)(),
      o = {};
    return r && (n = n ? `${s} ${n}` : s, o = {
      id: s,
      htmlFor: "label" === i ? t : void 0
    }), {
      labelProps: o,
      fieldProps: d({
        id: t,
        "aria-label": a,
        "aria-labelledby": n
      })
    };
  }], 155860);
  let u = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    c = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
  var f = e.i(514415);
  let p = Symbol.for("react-aria.i18n.locale");
  function m() {
    let e = "u" > typeof window && window[p] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
    try {
      Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
      e = "en-US";
    }
    return {
      locale: e,
      direction: !function (e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return u.has(t.script);
        }
        let t = e.split("-")[0];
        return c.has(t);
      }(e) ? "ltr" : "rtl"
    };
  }
  let h = m(),
    g = new Set();
  function b() {
    for (let e of (h = m(), g)) e(h);
  }
  let w = r.default.createContext(null);
  e.s(["useLocale", 0, function () {
    let e = function () {
      let e = (0, f.useIsSSR)(),
        [t, n] = (0, r.useState)(h);
      return ((0, r.useEffect)(() => (0 === g.size && window.addEventListener("languagechange", b), g.add(n), () => {
        g.delete(n), 0 === g.size && window.removeEventListener("languagechange", b);
      }), []), e) ? {
        locale: "u" > typeof window && window[p] || "en-US",
        direction: "ltr"
      } : t;
    }();
    return (0, r.useContext)(w) || e;
  }], 619832);
  let v = new Map(),
    x = !1;
  try {
    x = "exceptZero" === new Intl.NumberFormat("de-DE", {
      signDisplay: "exceptZero"
    }).resolvedOptions().signDisplay;
  } catch {}
  let y = !1;
  try {
    y = "unit" === new Intl.NumberFormat("de-DE", {
      style: "unit",
      unit: "degree"
    }).resolvedOptions().style;
  } catch {}
  e.s(["clamp", 0, function (e, t = -1 / 0, r = 1 / 0) {
    return Math.min(Math.max(e, t), r);
  }], 27626);
  let S = (0, r.createContext)(null),
    E = null;
  function P(e, t = "assertive", r = 7e3) {
    E ? E.announce(e, t, r) : (E = new R(), ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? E.announce(e, t, r) : setTimeout(() => {
      E?.isAttached() && E?.announce(e, t, r);
    }, 100));
  }
  class R {
    constructor() {
      this.node = null, this.assertiveLog = null, this.politeLog = null, "u" > typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap"
      }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
    }
    isAttached() {
      return this.node?.isConnected;
    }
    createLog(e) {
      let t = document.createElement("div");
      return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
    }
    destroy() {
      this.node && (document.body.removeChild(this.node), this.node = null);
    }
    announce(e, t = "assertive", r = 7e3) {
      if (!this.node) return;
      let n = document.createElement("div");
      "object" == typeof e ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"])) : n.textContent = e, "assertive" === t ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n), "" !== e && setTimeout(() => {
        n.remove();
      }, r);
    }
    clear(e) {
      this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
  }
  var j = e.i(138980),
    k = e.i(113329);
  function T(e, t) {
    let r,
      {
        elementType: n = "button",
        isDisabled: a,
        onPress: i,
        onPressStart: l,
        onPressEnd: d,
        onPressUp: u,
        onPressChange: c,
        preventFocusOnPress: f,
        allowFocusWhenDisabled: p,
        onClick: m,
        href: h,
        target: g,
        rel: b,
        type: w = "button"
      } = e;
    r = "button" === n ? {
      type: w,
      disabled: a,
      form: e.form,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formMethod: e.formMethod,
      formNoValidate: e.formNoValidate,
      formTarget: e.formTarget,
      name: e.name,
      value: e.value
    } : {
      role: "button",
      href: "a" !== n || a ? void 0 : h,
      target: "a" === n ? g : void 0,
      type: "input" === n ? w : void 0,
      disabled: "input" === n ? a : void 0,
      "aria-disabled": a && "input" !== n ? a : void 0,
      rel: "a" === n ? b : void 0
    };
    let {
        pressProps: v,
        isPressed: x
      } = (0, k.usePress)({
        onPressStart: l,
        onPressEnd: d,
        onPressChange: c,
        onPress: i,
        onPressUp: u,
        onClick: m,
        isDisabled: a,
        preventFocusOnPress: f,
        ref: t
      }),
      {
        focusableProps: y
      } = (0, j.useFocusable)(e, t);
    p && (y.tabIndex = a ? -1 : y.tabIndex);
    let S = (0, o.mergeProps)(y, v, (0, s.filterDOMProps)(e, {
      labelable: !0
    }));
    return {
      isPressed: x,
      buttonProps: (0, o.mergeProps)(r, S, {
        "aria-haspopup": e["aria-haspopup"],
        "aria-expanded": e["aria-expanded"],
        "aria-controls": e["aria-controls"],
        "aria-pressed": e["aria-pressed"],
        "aria-current": e["aria-current"],
        "aria-disabled": e["aria-disabled"]
      })
    };
  }
  e.s(["useButton", 0, T], 103009);
  var A = e.i(622030),
    C = e.i(517491);
  let N = (0, r.createContext)({}),
    O = a(function (e, n) {
      [e, n] = (0, t.useContextProps)(e, n, N);
      let a = e,
        {
          isPending: i
        } = a,
        {
          buttonProps: d,
          isPressed: u
        } = T(e, n);
      d = function (e, t) {
        if (t) {
          for (let t in e) t.startsWith("on") && !L.test(t) && (e[t] = void 0);
          e.href = void 0, e.target = void 0;
        }
        return e;
      }(d, i);
      let {
          focusProps: c,
          isFocused: f,
          isFocusVisible: p
        } = (0, A.useFocusRing)(e),
        {
          hoverProps: m,
          isHovered: h
        } = (0, C.useHover)({
          ...e,
          isDisabled: e.isDisabled || i
        }),
        g = {
          isHovered: h,
          isPressed: (a.isPressed || u) && !i,
          isFocused: f,
          isFocusVisible: p,
          isDisabled: e.isDisabled || !1,
          isPending: i ?? !1
        },
        b = (0, t.useRenderProps)({
          ...e,
          values: g,
          defaultClassName: "react-aria-Button"
        }),
        w = (0, l.useId)(d.id),
        v = (0, l.useId)(),
        x = d["aria-labelledby"];
      i && (x ? x = `${x} ${v}` : d["aria-label"] && (x = `${w} ${v}`));
      let y = (0, r.useRef)(i);
      (0, r.useEffect)(() => {
        let e = {
          "aria-labelledby": x || w
        };
        !y.current && f && i ? P(e, "assertive") : y.current && f && !i && P(e, "assertive"), y.current = i;
      }, [i, f, x, w]);
      let E = (0, s.filterDOMProps)(e, {
        global: !0
      });
      return delete E.onClick, r.default.createElement(t.dom.button, {
        ...(0, o.mergeProps)(E, b, d, c, m),
        type: "submit" === d.type && i ? "button" : d.type,
        id: w,
        ref: n,
        "aria-labelledby": x,
        slot: e.slot || void 0,
        "aria-disabled": i ? "true" : d["aria-disabled"],
        "data-disabled": e.isDisabled || void 0,
        "data-pressed": g.isPressed || void 0,
        "data-hovered": h || void 0,
        "data-focused": f || void 0,
        "data-pending": i || void 0,
        "data-focus-visible": p || void 0
      }, r.default.createElement(S.Provider, {
        value: {
          id: v
        }
      }, b.children));
    }),
    L = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
  e.s(["Button", 0, O, "ButtonContext", 0, N], 509848);
  var _ = e.i(847712);
  e.s(["useEvent", 0, function (e, t, n, a) {
    let i = (0, _.useEffectEvent)(n),
      s = null == n;
    (0, r.useEffect)(() => {
      if (s || !e.current) return;
      let r = e.current;
      return r.addEventListener(t, i, a), () => {
        r.removeEventListener(t, i, a);
      };
    }, [e, t, a, s]);
  }], 999380);
  let I = "u" > typeof document ? r.default.useInsertionEffect ?? r.default.useLayoutEffect : () => {};
  e.s(["useControlledState", 0, function (e, t, n) {
    let [a, i] = (0, r.useState)(e || t),
      s = (0, r.useRef)(a),
      o = (0, r.useRef)(void 0 !== e),
      l = void 0 !== e;
    (0, r.useEffect)(() => {
      o.current, o.current = l;
    }, [l]);
    let d = l ? e : a;
    I(() => {
      s.current = d;
    });
    let [, u] = (0, r.useReducer)(() => ({}), {});
    return [d, (0, r.useCallback)((e, ...t) => {
      let r = "function" == typeof e ? e(s.current) : e;
      Object.is(s.current, r) || (s.current = r, i(r), u(), n?.(r, ...t));
    }, [n])];
  }], 755118);
};
