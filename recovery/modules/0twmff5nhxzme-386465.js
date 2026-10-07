// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 386465, 463549, 120306.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(526296),
    n = e.i(691480),
    r = e.i(513679),
    i = e.i(454881);
  function o(e) {
    let t = (0, r.useRef)(null),
      n = (0, r.useRef)(void 0),
      i = (0, r.useCallback)(t => {
        if ("function" == typeof e) {
          let n = e(t);
          return () => {
            "function" == typeof n ? n() : e(null);
          };
        }
        if (e) return e.current = t, () => {
          e.current = null;
        };
      }, [e]);
    return (0, r.useMemo)(() => ({
      get current() {
        return t.current;
      },
      set current(value) {
        t.current = value, n.current && (n.current(), n.current = void 0), null != value && (n.current = i(value));
      }
    }), [i]);
  }
  e.s(["useObjectRef", 0, o], 463549);
  let s = Symbol("default");
  function u(e, t) {
    let n = (0, r.useContext)(e);
    if (null === t) return null;
    if (n && "object" == typeof n && "slots" in n && n.slots) {
      let e = t || s;
      if (!n.slots[e]) {
        let e = new Intl.ListFormat().format(Object.keys(n.slots).map(e => `"${e}"`)),
          r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
        throw Error(`${r} Valid slot names are ${e}.`);
      }
      return n.slots[e];
    }
    return n;
  }
  function a(e, t, o) {
    let {
        render: s,
        ...u
      } = t,
      a = (0, r.useRef)(null),
      l = (0, r.useMemo)(() => (0, n.mergeRefs)(o, a), [o, a]);
    (0, i.useLayoutEffect)(() => {}, [e, s]);
    let c = {
      ...u,
      ref: l
    };
    return s ? s(c, void 0) : r.default.createElement(e, c);
  }
  let l = {},
    c = new Proxy({}, {
      get(e, t) {
        if ("string" != typeof t) return;
        let n = l[t];
        return n || (n = (0, r.forwardRef)(a.bind(null, t)), l[t] = n), n;
      }
    });
  e.s(["DEFAULT_SLOT", 0, s, "Provider", 0, function ({
    values: e,
    children: t
  }) {
    for (let [n, i] of e) t = r.default.createElement(n.Provider, {
      value: i
    }, t);
    return t;
  }, "dom", 0, c, "removeDataAttributes", 0, function (e) {
    let t = /^(data-.*)$/,
      n = {};
    for (let r in e) t.test(r) || (n[r] = e[r]);
    return n;
  }, "useContextProps", 0, function (e, i, s) {
    let {
        ref: a,
        ...l
      } = u(s, e.slot) || {},
      c = o((0, r.useMemo)(() => (0, n.mergeRefs)(i, a), [i, a])),
      d = (0, t.mergeProps)(l, e);
    return "style" in l && l.style && "style" in e && e.style && ("function" == typeof l.style || "function" == typeof e.style ? d.style = t => {
      let n = "function" == typeof l.style ? l.style(t) : l.style,
        r = {
          ...t.defaultStyle,
          ...n
        },
        i = "function" == typeof e.style ? e.style({
          ...t,
          defaultStyle: r
        }) : e.style;
      return {
        ...r,
        ...i
      };
    } : d.style = {
      ...l.style,
      ...e.style
    }), [d, c];
  }, "useRenderProps", 0, function (e) {
    let {
      className: t,
      style: n,
      children: i,
      defaultClassName: o,
      defaultChildren: s,
      defaultStyle: u,
      values: a,
      render: l
    } = e;
    return (0, r.useMemo)(() => {
      let e, r, c;
      return e = "function" == typeof t ? t({
        ...a,
        defaultClassName: o
      }) : t, r = "function" == typeof n ? n({
        ...a,
        defaultStyle: u || {}
      }) : n, c = "function" == typeof i ? i({
        ...a,
        defaultChildren: s
      }) : null == i ? s : i, {
        className: e ?? o,
        style: r || u ? {
          ...u,
          ...r
        } : void 0,
        children: c ?? s,
        "data-rac": "",
        render: l ? e => l(e, a) : void 0
      };
    }, [t, n, i, o, s, u, a, l]);
  }, "useSlot", 0, function (e = !0) {
    let [t, n] = (0, r.useState)(e),
      o = (0, r.useRef)(!1),
      s = (0, r.useCallback)(e => {
        o.current = !0, n(!!e);
      }, []);
    return (0, i.useLayoutEffect)(() => {
      o.current || n(!1);
    }, []), [s, t];
  }, "useSlottedContext", 0, u], 386465);
  let d = new Set(["id"]),
    f = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    p = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    g = new Set(["dir", "lang", "hidden", "inert", "translate"]),
    v = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
    y = /^(data-.*)$/;
  e.s(["filterDOMProps", 0, function (e, t = {}) {
    let {
        labelable: n,
        isLink: r,
        global: i,
        events: o = i,
        propNames: s
      } = t,
      u = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (d.has(t) || n && f.has(t) || r && p.has(t) || i && g.has(t) || o && (v.has(t) || t.endsWith("Capture") && v.has(t.slice(0, -7))) || s?.has(t) || y.test(t)) && (u[t] = e[t]);
    return u;
  }], 120306);
};
