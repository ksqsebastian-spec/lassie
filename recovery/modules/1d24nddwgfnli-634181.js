// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 634181.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var r,
    i,
    a = e.i(281889),
    n = e.i(513679),
    l = {
      outline: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      filled: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "none"
      }
    },
    s = (r = "outline", i = [["path", {
      d: "M6 9l6 6l6 -6",
      key: "svg-0"
    }]], (t = (0, n.forwardRef)(({
      color: e = "currentColor",
      size: t = 24,
      stroke: a = 2,
      title: s,
      className: o,
      children: d,
      ...u
    }, c) => (0, n.createElement)("svg", {
      ref: c,
      ...l[r],
      width: t,
      height: t,
      className: ["tabler-icon tabler-icon-chevron-down", o].join(" "),
      ...{
        strokeWidth: a,
        stroke: e
      },
      ...u
    }, [s && (0, n.createElement)("title", {
      key: "svg-title"
    }, s), ...i.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(d) ? d : [d])]))).displayName = "IconChevronDown", t),
    o = e.i(628974);
  e.s(["PaidAdsTestimonialsReveal", 0, function ({
    className: e,
    gridClassName: t,
    children: r
  }) {
    let [i, l] = (0, n.useState)(!1),
      d = "paid-ads-testimonial-grid";
    return (0, a.jsxs)("div", {
      className: (0, o.cn)("relative", e),
      children: [(0, a.jsx)("div", {
        id: d,
        className: "relative overflow-hidden tablet:overflow-visible",
        children: (0, a.jsx)("div", {
          className: (0, o.cn)("grid grid-cols-1 gap-[1.8rem] tablet:gap-[2.4rem] md:grid-cols-2 lg:grid-cols-3", t, !i && "max-tablet:[&>*:nth-child(3)]:pointer-events-none max-tablet:[&>*:nth-child(3)]:select-none max-tablet:[&>*:nth-child(3)]:blur-[6px] max-tablet:[&>*:nth-child(n+4)]:hidden md:max-tablet:[&>*:nth-child(4)]:!flex md:max-tablet:[&>*:nth-child(4)]:pointer-events-none md:max-tablet:[&>*:nth-child(4)]:select-none md:max-tablet:[&>*:nth-child(4)]:blur-[6px] md:max-tablet:[&>*:nth-child(n+3)]:max-h-[15rem] md:max-tablet:[&>*:nth-child(n+3)]:overflow-hidden md:max-tablet:[&>*:nth-child(n+3)]:[mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]", i && "motion-safe:[&>*:nth-child(n+4)]:animate-[paid-ads-testimonials-reveal_420ms_ease-out_both] md:[&>*:nth-child(4)]:!animate-none"),
          children: r
        })
      }), !i && (0, a.jsxs)("button", {
        type: "button",
        className: "absolute bottom-[3.3rem] left-1/2 z-[4] flex w-[18rem] -translate-x-1/2 items-center justify-center gap-[1rem] overflow-hidden rounded-[1.2rem] border-[0.12rem] border-black/30 bg-white px-[1.2rem] py-[1.6rem] text-center text-[1.4rem] leading-[1.3] text-black tablet:hidden",
        "aria-controls": d,
        "aria-expanded": i,
        onClick: () => l(!0),
        children: [(0, a.jsx)(s, {
          className: "size-[1.6rem] shrink-0",
          stroke: 2
        }), (0, a.jsx)("span", {
          children: "See all reviews"
        })]
      }), (0, a.jsx)("style", {
        children: `
        @keyframes paid-ads-testimonials-reveal {
          from {
            opacity: 0;
            transform: translateY(-1.2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
      })]
    });
  }], 634181);
};
