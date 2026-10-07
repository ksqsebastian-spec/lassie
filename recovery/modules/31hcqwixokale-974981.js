// Recovered from 31hcqwixokale.js. Runtime module IDs: 974981, 699472.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    i = e.i(983871),
    n = e.i(300778),
    a = e.i(513679),
    o = e.i(631923),
    l = e.i(246880),
    s = e.i(276522),
    u = e.i(464068);
  function d({
    children: e,
    className: i,
    href: o,
    active: l,
    submenu: c,
    isHovered: f = !1,
    mode: m = "default",
    onMouseEnter: g,
    onMouseLeave: p,
    onFocus: h,
    onBlur: b,
    ...v
  }) {
    let {
        bgTheme: w
      } = (0, s.useNav)(),
      x = (0, n.usePathname)(),
      [y, S] = (0, a.useState)(!1),
      j = "/" === o && x === o || "/" !== o && x.startsWith(o.toString()) || l,
      _ = "index" === m ? j && !f : !f,
      E = o.toString().startsWith("https"),
      R = (0, r.default)("relative group hover:no-underline outline-hidden cursor-pointer", "h-[4.4rem]", i),
      P = e => {
        S(!0), g?.(e);
      },
      k = e => {
        S(!1), p?.(e);
      },
      O = e => {
        S(!0), h?.(e);
      },
      T = e => {
        S(!1), b?.(e);
      },
      A = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("span", {
          className: (0, r.default)("nav-item-hover absolute z-0 top-0 left-0 w-full h-full rounded-[12px]", "transition-[background-color] duration-300 ease-out group-active:bg-surface-pressed", _ && "index" !== m && "duration-300 bg-white", "group-focus-visible:border-2 group-focus-visible:border-blue-500 group-focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]")
        }), (0, t.jsx)("div", {
          className: (0, r.default)("nav-item w-full h-full z-1 px-[1.4rem] flex items-center relative", "text-nav leading-none", f && "index" !== m && "light" === w && "text-text-primary", f && "index" !== m && "dark" === w && "text-white", "index" === m && "dark" === w && !_ && "text-white", "transition-colors duration-150 ease", "group-hover:text-text-primary group-focus-visible:text-text-primary group-active:text-white"),
          children: e
        }), y && c]
      });
    return c ? (0, t.jsx)("button", {
      type: "button",
      "aria-current": j ? "page" : void 0,
      "aria-haspopup": "true",
      "aria-expanded": y,
      onMouseEnter: P,
      onMouseLeave: k,
      onFocus: O,
      onBlur: T,
      className: R,
      children: A
    }) : (0, t.jsx)(u.default, {
      "aria-current": j ? "page" : void 0,
      onMouseEnter: P,
      onMouseLeave: k,
      onFocus: O,
      onBlur: T,
      className: R,
      href: o,
      target: E ? "_blank" : void 0,
      ...v,
      children: A
    });
  }
  e.s(["NavItem", 0, d], 699472);
  let c = {
      showHover({
        isHovered: e,
        item: t,
        moveHoverTo: r
      }) {
        let i = t.getBoundingClientRect();
        e ? r(t.offsetLeft, i.width) : r(t.offsetLeft, i.width, !1);
      },
      idleState({
        hoverRef: e
      }) {
        i.default.killTweensOf(e.current), setTimeout(() => {
          i.default.set(e.current, {
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
        let i = t.getBoundingClientRect();
        if (e) r(t.offsetLeft, i.width);else {
          let e = t.closest("nav")?.querySelector('[aria-current="page"]');
          if (e) {
            let t = e.getBoundingClientRect();
            r(e.offsetLeft, t.width, !1);
          }
          r(t.offsetLeft, i.width);
        }
      }
    },
    m = ["/book-a-demo", "/company"];
  e.s(["Nav", 0, function ({
    className: e,
    mode: u = "auto",
    indexModePaths: g = m,
    items: p,
    logoHref: h = "/",
    logoAriaLabel: b,
    logoIcon: v,
    logo: w,
    ...x
  }) {
    let y = (0, a.useRef)(null),
      S = (0, a.useRef)(null),
      j = (0, a.useRef)(null),
      _ = (0, a.useRef)(null),
      [E, R] = (0, a.useState)(!1),
      {
        collapsed: P,
        setCollapsed: k
      } = (0, s.useNav)(),
      O = (0, a.useRef)(null),
      T = (0, n.usePathname)();
    function A() {
      return "auto" !== u ? u : (g.includes(T), "default");
    }
    function C() {
      "default" === A() ? c.idleState({
        hoverRef: S
      }) : f.idleState({
        moveHoverTo: U,
        navRef: y
      });
    }
    function M() {
      j.current ? I(j.current) : C();
    }
    (0, a.useEffect)(() => {
      E || C();
    }, [T]), (0, a.useEffect)(() => {
      O.current && (P && !E ? i.default.to(O.current, {
        width: 0,
        duration: o.DURATION.medium,
        ease: o.EASE,
        onUpdate: M
      }) : i.default.to(O.current, {
        width: 53,
        duration: o.DURATION.medium,
        ease: o.EASE,
        clearProps: "width",
        onUpdate: M
      }));
    }, [P, E]);
    let N = e => {
        if ((0, l.hasTouchSupport)()) return;
        j.current = e.currentTarget, _.current && (_.current.style.transitionDuration = "");
        let t = e.currentTarget.querySelector(".nav-item-hover");
        t.style.transitionDuration = "0s", _.current = t, I(e.currentTarget);
      },
      L = () => {
        !(0, l.hasTouchSupport)() && j.current && (j.current = null);
      },
      z = () => {
        (0, l.hasTouchSupport)() || R(!0);
      },
      $ = () => {
        (0, l.hasTouchSupport)() || (C(), R(!1));
      },
      I = e => {
        "default" === A() ? c.showHover({
          isHovered: E,
          item: e,
          moveHoverTo: U
        }) : f.showHover({
          isHovered: E,
          item: e,
          moveHoverTo: U
        });
      };
    function U(e, t, r = !0) {
      r ? i.default.to(S.current, {
        width: t,
        x: e,
        duration: o.DURATION.fast,
        ease: o.EASE_OUT
      }) : i.default.set(S.current, {
        x: e,
        width: t
      });
    }
    let D = A();
    return (0, t.jsxs)("nav", {
      "aria-label": "Main navigation",
      ref: y,
      className: (0, r.default)("flex w-max", "p-0", e),
      onMouseOver: z,
      onMouseEnter: z,
      onFocus: () => {},
      onBlur: () => {
        E || $();
      },
      onMouseLeave: $,
      ...x,
      children: [(0, t.jsx)("div", {
        className: (0, r.default)("nav-frame pointer-events-none absolute", "top-[-4px] left-[-4px] h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]")
      }), (0, t.jsx)("div", {
        ref: S,
        "aria-hidden": "true",
        className: (0, r.default)("pointer-events-none absolute", "h-11 rounded-[12px] bg-white")
      }), w && (0, t.jsxs)(d, {
        href: h,
        "aria-label": b,
        isHovered: E,
        mode: D,
        onMouseEnter: N,
        onMouseLeave: L,
        onFocus: N,
        onBlur: L,
        children: [(0, t.jsx)("span", {
          className: "ml-0",
          children: v
        }), (0, t.jsx)("span", {
          ref: O,
          className: (0, r.default)("inline-block w-[53px] overflow-hidden border-box"),
          children: w
        })]
      }), p.map(e => (0, t.jsx)(d, {
        active: e.active,
        href: e.href,
        "aria-label": e["aria-label"],
        isHovered: E,
        mode: D,
        onMouseEnter: N,
        onMouseLeave: L,
        onFocus: N,
        onBlur: L,
        submenu: e.submenu,
        children: e.content
      }, e.href))]
    });
  }], 974981);
};
