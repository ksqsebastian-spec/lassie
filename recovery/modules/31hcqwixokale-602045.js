// Recovered from 31hcqwixokale.js. Runtime module IDs: 602045.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    i = e.i(607198),
    n = e.i(726215),
    a = e.i(513679),
    o = e.i(424268);
  let l = (0, o.createServerReference)("0021215496296512e5335ddc9ac56cca0319cde48a", o.callServer, void 0, o.findSourceMapURL, "getJobs");
  e.i(428044);
  var s = e.i(276522),
    u = e.i(41049);
  let d = [{
    title: "Engineering",
    url: "/careers/engineering1"
  }, {
    title: "Engineering",
    url: "/careers/engineering2"
  }, {
    title: "Engineering",
    url: "/careers/engineering3"
  }, {
    title: "Engineering",
    url: "/careers/engineering4"
  }];
  function c({
    title: e,
    url: i
  }) {
    return (0, t.jsx)("li", {
      className: "h-[6.6rem]",
      children: (0, t.jsxs)("a", {
        href: i,
        target: "_blank",
        rel: "noopener",
        className: (0, r.default)("relative z-0 group w-full h-full flex justify-between items-center gap-[3.2rem] rounded-[12px]", "p-[1.6rem] desktop:p-[2.4rem]", "bg-white transition-colors duration-300 ease hover:bg-surface-secondary active:bg-surface-tertiary active:text-white", "text-left desktop:max-h-[82px] border-2 border-transparent", "outline-hidden focus-visible:z-10 focus-visible:border-2 focus-visible:border-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
        children: [(0, t.jsx)("span", {
          className: "text-body-md",
          children: e
        }), (0, t.jsx)("span", {
          "aria-hidden": !0,
          className: (0, r.default)("shrink-0 px-[1.5rem] py-[8px] rounded-[1.8rem]", "text-body-sm font-mono", "bg-background-primary text-text-primary transition-colors duration-300", "group-hover:bg-surface-tertiary group-hover:text-text-tertiary", "group-active:bg-background-primary group-active:text-text-primary"),
          children: "See job"
        })]
      })
    });
  }
  e.s(["Careers", 0, function () {
    let e = (0, a.useRef)(null),
      [o, f] = (0, a.useState)([]);
    (0, a.useEffect)(() => {
      l().then(f);
    }, []);
    let {
      setBgTheme: m
    } = (0, s.useNav)();
    (0, a.useEffect)(() => {
      let t = i.ScrollTrigger.create({
        trigger: e.current,
        start: "top top",
        end: "bottom",
        invalidateOnRefresh: !0,
        onToggle: e => {
          e.isActive && m("light");
        },
        onLeave: () => {
          m("light");
        },
        onLeaveBack: () => {
          m("light");
        }
      });
      return () => {
        t.kill();
      };
    }, [m]);
    let g = o.length ? o.map(e => ({
      title: e.title,
      url: e.url
    })) : d;
    return (0, t.jsx)("section", {
      id: "careers",
      ref: e,
      className: (0, r.default)("p-[1.6rem]  tablet:p-[2.4rem] desktop:p-[3.2rem]", "bg-background-primary", "w-full h-auto", "text-center flex justify-center items-center flex-col"),
      children: (0, t.jsxs)("div", {
        className: (0, r.default)("relative overflow-hidden", "rounded-[3.2rem] tablet:rounded-[5.6rem] desktop:rounded-[6.4rem] h-full w-full max-w-[2056px]"),
        children: [(0, t.jsx)(n.default, {
          src: `${u.ASSETS_URL}/careers/6133c7a1-6683-4912-9518-96e2dbb0bc12.png`,
          fill: !0,
          alt: "A vast field of blooming wildflowers with vibrant orange and yellow hues stretches under a clear blue sky, conveying a sense of calm and openness.",
          className: (0, r.default)("w-full h-full absolute z-0", "object-cover rounded-16")
        }), (0, t.jsxs)("div", {
          className: (0, r.default)("z-1 relative w-full h-full px-[16px]", "py-[10rem]", "tablet:py-[8%]", "flex flex-col justify-center items-center"),
          children: [(0, t.jsx)("h2", {
            "aria-label": "Careers",
            className: (0, r.default)("z-1 text-heading-lg text-text-white text-balance", "max-w-[100%] tablet:max-w-[55%] tablet:text-wrap", "mb-[4.8rem] desktop:max-w-[40%] tablet:mb-[8rem] desktop:mb-[4.8rem]"),
            children: "The future is bright. Will you help build it?"
          }), (0, t.jsx)("ul", {
            className: (0, r.default)("w-full tablet:w-[546px] desktop:w-[538px] isolate"),
            children: g.map(e => (0, t.jsx)(c, {
              title: e.title,
              url: e.url
            }, e.url))
          })]
        })]
      })
    });
  }], 602045);
};
