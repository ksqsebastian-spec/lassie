// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 279206.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(281889),
    r = t.i(809393),
    n = t.i(318563);
  let i = (0, t.i(513679).forwardRef)(function (t, r) {
    if ("a" === t.as) {
      let {
        as: n,
        ...i
      } = t;
      return (0, e.jsx)("a", {
        ref: r,
        ...i
      });
    }
    let {
      as: n,
      ...i
    } = t;
    return (0, e.jsx)("button", {
      ref: r,
      ...i
    });
  });
  i.displayName = "Button";
  let o = {
    primary: {
      base: "bg-surface-primary text-text-primary group-active:bg-black-500 group-active:text-text-tertiary",
      hoverInvert: "group-hover/button:bg-surface-tertiary group-hover/button:text-text-tertiary",
      disabled: "group-disabled/button:bg-system-disabled-white group-disabled/button:text-text-secondary",
      icon: "bg-surface-primary text-text-primary"
    },
    secondary: {
      base: "bg-surface-tertiary text-text-tertiary group-active:bg-black-500",
      hoverInvert: "group-hover/button:bg-surface-quaternary group-hover/button:text-text-primary",
      disabled: "group-disabled/button:bg-system-disabled-black group-disabled/button:text-text-secondary",
      icon: "bg-surface-tertiary text-text-tertiary"
    },
    tertiary: {
      base: "bg-orange-500 text-text-invert-primary group-active:bg-black-500 group-active:text-text-tertiary",
      hoverInvert: "group-hover/button:bg-surface-tertiary group-hover/button:text-text-tertiary",
      disabled: "group-disabled/button:bg-system-disabled-white group-disabled/button:text-text-secondary",
      icon: "bg-orange-500 text-text-invert-primary"
    }
  };
  t.s(["ButtonPrimary", 0, function ({
    children: t,
    className: s,
    withIcon: u = !0,
    iconAlwaysVisible: a = !1,
    theme: c = "primary",
    fullWidth: l,
    ...f
  }) {
    let h = o[c];
    return (0, e.jsxs)(i, {
      className: (0, r.default)("group/button relative isolate inline-flex h-10 tablet:h-10.5 cursor-pointer text-body-sm outline-hidden", s),
      ...f,
      children: [(0, e.jsx)("span", {
        className: (0, r.default)("z-10 flex w-full items-center rounded-ctas-button px-[1.4rem] transition-colors", h.base, (!u || a) && h.hoverInvert, "border-2 border-transparent group-focus-visible/button:border-blue-500 group-focus-visible/button:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", h.disabled, l && "w-full justify-center"),
        children: t
      }), u && (0, e.jsx)("span", {
        "aria-hidden": !0,
        className: (0, r.default)("z-0 flex h-[4rem] tablet:h-[4.2rem] w-[3.6rem] shrink-0 items-center justify-center rounded-[1.2rem]", a ? (0, r.default)("transition-colors", h.hoverInvert) : "transition-[margin] group-hover/button:ml-0 group-focus-visible/button:ml-0 supports-hover:-ml-[3.6rem]", h.icon, "group-focus-visible/button:border-2 group-focus-visible/button:border-blue-500 group-focus-visible/button:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
        children: (0, e.jsx)(n.default, {
          className: "block size-[2rem]"
        })
      })]
    });
  }], 279206);
};
