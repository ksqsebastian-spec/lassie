// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 974981, 699472.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    n = e.i(983871),
    a = e.i(300778),
    i = e.i(513679),
    s = e.i(631923),
    o = e.i(246880),
    l = e.i(276522),
    d = e.i(464068);
  function u({
    children: e,
    className: n,
    href: s,
    active: o,
    submenu: c,
    isHovered: f = !1,
    mode: p = "default",
    onMouseEnter: m,
    onMouseLeave: h,
    onFocus: g,
    onBlur: b,
    ...w
  }) {
    let {
        bgTheme: v
      } = (0, l.useNav)(),
      x = (0, a.usePathname)(),
      [y, S] = (0, i.useState)(!1),
      E = "/" === s && x === s || "/" !== s && x.startsWith(s.toString()) || o,
      P = "index" === p ? E && !f : !f,
      R = s.toString().startsWith("https"),
      j = (0, r.default)("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", n),
      k = e => {
        S(!0), m?.(e);
      },
      T = e => {
        S(!1), h?.(e);
      },
      A = e => {
        S(!0), g?.(e);
      },
      C = e => {
        S(!1), b?.(e);
      },
      N = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("span", {
          className: (0, r.default)("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", P && "index" !== p && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
        }), (0, t.jsx)("div", {
          className: (0, r.default)("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", f && "index" !== p && "light" === v && "text-text-primary", f && "index" !== p && "dark" === v && "text-white", "index" === p && "dark" === v && !P && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
          children: e
        }), y && c]
      });
    return c ? (0, t.jsx)("button", {
      type: "button",
      "aria-current": E ? "page" : void 0,
      "aria-haspopup": "true",
      "aria-expanded": y,
      onMouseEnter: k,
      onMouseLeave: T,
      onFocus: A,
      onBlur: C,
      className: j,
      children: N
    }) : (0, t.jsx)(d.default, {
      "aria-current": E ? "page" : void 0,
      onMouseEnter: k,
      onMouseLeave: T,
      onFocus: A,
      onBlur: C,
      className: j,
      href: s,
      target: R ? "_blank" : void 0,
      ...w,
      children: N
    });
  }
  e.s(["NavItem", 0, u], 699472);
  let c = {
      showHover({
        isHovered: e,
        item: t,
        moveHoverTo: r
      }) {
        let n = t.getBoundingClientRect();
        e ? r(t.offsetLeft, n.width) : r(t.offsetLeft, n.width, !1);
      },
      idleState({
        hoverRef: e
      }) {
        n.default.killTweensOf(e.current), setTimeout(() => {
          n.default.set(e.current, {
            width: 0
          });
        });
      }
    },
    f = {
      idleState({
        moveHoverTo: e,
        navRef: t
      }) {
        let r = t.current?.querySelector('[aria-current="page"]');
        if (r) {
          let t = r.getBoundingClientRect();
          e(r.offsetLeft, t.width);
        }
      },
      showHover({
        isHovered: e,
        item: t,
        moveHoverTo: r
      }) {
        let n = t.getBoundingClientRect();
        if (e) r(t.offsetLeft, n.width);else {
          let e = t.closest("nav")?.querySelector('[aria-current="page"]');
          if (e) {
            let t = e.getBoundingClientRect();
            r(e.offsetLeft, t.width, !1);
          }
          r(t.offsetLeft, n.width);
        }
      }
    },
    p = ["/book-a-demo", "/company"];
  e.s(["Nav", 0, function ({
    className: e,
    mode: d = "auto",
    indexModePaths: m = p,
    items: h,
    logoHref: g = "/",
    logoAriaLabel: b,
    logoIcon: w,
    logo: v,
    ...x
  }) {
    let y = (0, i.useRef)(null),
      S = (0, i.useRef)(null),
      E = (0, i.useRef)(null),
      P = (0, i.useRef)(null),
      [R, j] = (0, i.useState)(!1),
      {
        collapsed: k,
        setCollapsed: T
      } = (0, l.useNav)(),
      A = (0, i.useRef)(null),
      C = (0, a.usePathname)();
    function N() {
      return "auto" !== d ? d : (m.includes(C), "default");
    }
    function O() {
      "default" === N() ? c.idleState({
        hoverRef: S
      }) : f.idleState({
        moveHoverTo: F,
        navRef: y
      });
    }
    function L() {
      E.current ? $(E.current) : O();
    }
    (0, i.useEffect)(() => {
      R || O();
    }, [C]), (0, i.useEffect)(() => {
      A.current && (k && !R ? n.default.to(A.current, {
        width: 0,
        duration: s.DURATION.medium,
        ease: s.EASE,
        onUpdate: L
      }) : n.default.to(A.current, {
        width: 53,
        duration: s.DURATION.medium,
        ease: s.EASE,
        clearProps: "width",
        onUpdate: L
      }));
    }, [k, R]);
    let _ = e => {
        if ((0, o.hasTouchSupport)()) return;
        E.current = e.currentTarget, P.current && (P.current.style.transitionDuration = "");
        let t = e.currentTarget.querySelector(".nav-item-hover");
        t.style.transitionDuration = "0s", P.current = t, $(e.currentTarget);
      },
      I = () => {
        !(0, o.hasTouchSupport)() && E.current && (E.current = null);
      },
      M = () => {
        (0, o.hasTouchSupport)() || j(!0);
      },
      D = () => {
        (0, o.hasTouchSupport)() || (O(), j(!1));
      },
      $ = e => {
        "default" === N() ? c.showHover({
          isHovered: R,
          item: e,
          moveHoverTo: F
        }) : f.showHover({
          isHovered: R,
          item: e,
          moveHoverTo: F
        });
      };
    function F(e, t, r = !0) {
      r ? n.default.to(S.current, {
        width: t,
        x: e,
        duration: s.DURATION.fast,
        ease: s.EASE_OUT
      }) : n.default.set(S.current, {
        x: e,
        width: t
      });
    }
    let U = N();
    return (0, t.jsxs)("nav", {
      "aria-label": "Main navigation",
      ref: y,
      className: (0, r.default)("flex w-max", "p-0", e),
      onMouseOver: M,
      onMouseEnter: M,
      onFocus: () => {},
      onBlur: () => {
        R || D();
      },
      onMouseLeave: D,
      ...x,
      children: [(0, t.jsx)("div", {
        className: (0, r.default)("nav-frame pointer-events-none absolute", "top-[-4px] left-[-4px] h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]")
      }), (0, t.jsx)("div", {
        ref: S,
        "aria-hidden": "true",
        className: (0, r.default)("pointer-events-none absolute", "h-11 rounded-[12px] bg-white")
      }), v && (0, t.jsxs)(u, {
        href: g,
        "aria-label": b,
        isHovered: R,
        mode: U,
        onMouseEnter: _,
        onMouseLeave: I,
        onFocus: _,
        onBlur: I,
        children: [(0, t.jsx)("span", {
          className: "ml-0",
          children: w
        }), (0, t.jsx)("span", {
          ref: A,
          className: (0, r.default)("inline-block w-[53px] overflow-hidden border-box"),
          children: v
        })]
      }), h.map(e => (0, t.jsx)(u, {
        active: e.active,
        href: e.href,
        "aria-label": e["aria-label"],
        isHovered: R,
        mode: U,
        onMouseEnter: _,
        onMouseLeave: I,
        onFocus: _,
        onBlur: I,
        submenu: e.submenu,
        children: e.content
      }, e.href))]
    });
  }], 974981);
};
