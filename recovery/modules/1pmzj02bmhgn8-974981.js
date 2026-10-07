// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 974981, 699472.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(809393),
    r = e.i(983871),
    o = e.i(300778),
    n = e.i(513679),
    s = e.i(631923),
    l = e.i(246880),
    a = e.i(276522),
    u = e.i(464068);
  function c({
    children: e,
    className: r,
    href: s,
    active: l,
    submenu: h,
    isHovered: d = !1,
    mode: p = "default",
    onMouseEnter: f,
    onMouseLeave: m,
    onFocus: g,
    onBlur: v,
    ...w
  }) {
    let {
        bgTheme: b
      } = (0, a.useNav)(),
      y = (0, o.usePathname)(),
      [S, C] = (0, n.useState)(!1),
      x = "/" === s && y === s || "/" !== s && y.startsWith(s.toString()) || l,
      E = "index" === p ? x && !d : !d,
      _ = s.toString().startsWith("https"),
      L = (0, i.default)("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", r),
      j = e => {
        C(!0), f?.(e);
      },
      T = e => {
        C(!1), m?.(e);
      },
      O = e => {
        C(!0), g?.(e);
      },
      R = e => {
        C(!1), v?.(e);
      },
      P = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("span", {
          className: (0, i.default)("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", E && "index" !== p && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
        }), (0, t.jsx)("div", {
          className: (0, i.default)("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", d && "index" !== p && "light" === b && "text-text-primary", d && "index" !== p && "dark" === b && "text-white", "index" === p && "dark" === b && !E && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
          children: e
        }), S && h]
      });
    return h ? (0, t.jsx)("button", {
      type: "button",
      "aria-current": x ? "page" : void 0,
      "aria-haspopup": "true",
      "aria-expanded": S,
      onMouseEnter: j,
      onMouseLeave: T,
      onFocus: O,
      onBlur: R,
      className: L,
      children: P
    }) : (0, t.jsx)(u.default, {
      "aria-current": x ? "page" : void 0,
      onMouseEnter: j,
      onMouseLeave: T,
      onFocus: O,
      onBlur: R,
      className: L,
      href: s,
      target: _ ? "_blank" : void 0,
      ...w,
      children: P
    });
  }
  e.s(["NavItem", 0, c], 699472);
  let h = {
      showHover({
        isHovered: e,
        item: t,
        moveHoverTo: i
      }) {
        let r = t.getBoundingClientRect();
        e ? i(t.offsetLeft, r.width) : i(t.offsetLeft, r.width, !1);
      },
      idleState({
        hoverRef: e
      }) {
        r.default.killTweensOf(e.current), setTimeout(() => {
          r.default.set(e.current, {
            width: 0
          });
        });
      }
    },
    d = {
      idleState({
        moveHoverTo: e,
        navRef: t
      }) {
        let i = t.current?.querySelector('[aria-current="page"]');
        if (i) {
          let t = i.getBoundingClientRect();
          e(i.offsetLeft, t.width);
        }
      },
      showHover({
        isHovered: e,
        item: t,
        moveHoverTo: i
      }) {
        let r = t.getBoundingClientRect();
        if (e) i(t.offsetLeft, r.width);else {
          let e = t.closest("nav")?.querySelector('[aria-current="page"]');
          if (e) {
            let t = e.getBoundingClientRect();
            i(e.offsetLeft, t.width, !1);
          }
          i(t.offsetLeft, r.width);
        }
      }
    },
    p = ["/book-a-demo", "/company"];
  e.s(["Nav", 0, function ({
    className: e,
    mode: u = "auto",
    indexModePaths: f = p,
    items: m,
    logoHref: g = "/",
    logoAriaLabel: v,
    logoIcon: w,
    logo: b,
    ...y
  }) {
    let S = (0, n.useRef)(null),
      C = (0, n.useRef)(null),
      x = (0, n.useRef)(null),
      E = (0, n.useRef)(null),
      [_, L] = (0, n.useState)(!1),
      {
        collapsed: j,
        setCollapsed: T
      } = (0, a.useNav)(),
      O = (0, n.useRef)(null),
      R = (0, o.usePathname)();
    function P() {
      return "auto" !== u ? u : (f.includes(R), "default");
    }
    function M() {
      "default" === P() ? h.idleState({
        hoverRef: C
      }) : d.idleState({
        moveHoverTo: D,
        navRef: S
      });
    }
    function z() {
      x.current ? H(x.current) : M();
    }
    (0, n.useEffect)(() => {
      _ || M();
    }, [R]), (0, n.useEffect)(() => {
      O.current && (j && !_ ? r.default.to(O.current, {
        width: 0,
        duration: s.DURATION.medium,
        ease: s.EASE,
        onUpdate: z
      }) : r.default.to(O.current, {
        width: 53,
        duration: s.DURATION.medium,
        ease: s.EASE,
        clearProps: "width",
        onUpdate: z
      }));
    }, [j, _]);
    let N = e => {
        if ((0, l.hasTouchSupport)()) return;
        x.current = e.currentTarget, E.current && (E.current.style.transitionDuration = "");
        let t = e.currentTarget.querySelector(".nav-item-hover");
        t.style.transitionDuration = "0s", E.current = t, H(e.currentTarget);
      },
      k = () => {
        !(0, l.hasTouchSupport)() && x.current && (x.current = null);
      },
      A = () => {
        (0, l.hasTouchSupport)() || L(!0);
      },
      I = () => {
        (0, l.hasTouchSupport)() || (M(), L(!1));
      },
      H = e => {
        "default" === P() ? h.showHover({
          isHovered: _,
          item: e,
          moveHoverTo: D
        }) : d.showHover({
          isHovered: _,
          item: e,
          moveHoverTo: D
        });
      };
    function D(e, t, i = !0) {
      i ? r.default.to(C.current, {
        width: t,
        x: e,
        duration: s.DURATION.fast,
        ease: s.EASE_OUT
      }) : r.default.set(C.current, {
        x: e,
        width: t
      });
    }
    let W = P();
    return (0, t.jsxs)("nav", {
      "aria-label": "Main navigation",
      ref: S,
      className: (0, i.default)("flex w-max", "p-0", e),
      onMouseOver: A,
      onMouseEnter: A,
      onFocus: () => {},
      onBlur: () => {
        _ || I();
      },
      onMouseLeave: I,
      ...y,
      children: [(0, t.jsx)("div", {
        className: (0, i.default)("nav-frame pointer-events-none absolute", "top-[-4px] left-[-4px] h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]")
      }), (0, t.jsx)("div", {
        ref: C,
        "aria-hidden": "true",
        className: (0, i.default)("pointer-events-none absolute", "h-11 rounded-[12px] bg-white")
      }), b && (0, t.jsxs)(c, {
        href: g,
        "aria-label": v,
        isHovered: _,
        mode: W,
        onMouseEnter: N,
        onMouseLeave: k,
        onFocus: N,
        onBlur: k,
        children: [(0, t.jsx)("span", {
          className: "ml-0",
          children: w
        }), (0, t.jsx)("span", {
          ref: O,
          className: (0, i.default)("inline-block w-[53px] overflow-hidden border-box"),
          children: b
        })]
      }), m.map(e => (0, t.jsx)(c, {
        active: e.active,
        href: e.href,
        "aria-label": e["aria-label"],
        isHovered: _,
        mode: W,
        onMouseEnter: N,
        onMouseLeave: k,
        onFocus: N,
        onBlur: k,
        submenu: e.submenu,
        children: e.content
      }, e.href))]
    });
  }], 974981);
};
