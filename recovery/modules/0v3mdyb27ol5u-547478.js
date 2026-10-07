// Recovered from 0v3mdyb27ol5u.js. Runtime module IDs: 547478.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    n = e.i(513679),
    i = e.i(581867),
    r = e.i(324832),
    s = e.i(628974);
  function a({
    className: e,
    size: n = "default",
    theme: o = "light"
  }) {
    let m = "sm" === n,
      c = "homepage-nav-mobile" === n,
      l = "figma-nav" === n,
      d = "light" === o ? "text-white" : "text-[#120C08]";
    return "homepage-nav" === n || c ? (0, t.jsxs)("div", {
      className: (0, s.cn)("flex items-center", d, e),
      children: [(0, t.jsx)(i.FlowerLogo, {
        className: (0, s.cn)("shrink-0", c ? "h-[3.8rem] w-[4.12rem]" : "w-[21px]")
      }), (0, t.jsx)("span", {
        className: (0, s.cn)("inline-block overflow-hidden border-box", c ? "w-[10.7rem]" : "w-[53px]"),
        children: (0, t.jsx)(r.LassieLogo, {
          className: (0, s.cn)(c ? "ml-[0.8rem] h-[2.35rem] w-[9.9rem]" : "ml-[0.6rem] w-[47px]")
        })
      })]
    }) : l || "figma-footer" === n ? (0, t.jsxs)("div", {
      className: (0, s.cn)("flex items-center", d, e),
      children: [(0, t.jsx)(i.FlowerLogo, {
        className: (0, s.cn)("shrink-0", l ? "h-[31.996px] w-[34.662px]" : "h-[49.994px] w-[54.16px]")
      }), (0, t.jsx)(r.LassieLogo, {
        className: (0, s.cn)(l ? "ml-[4.933px] h-[19.776px] w-[82.948px]" : "ml-[7.707px] h-[30.9px] w-[129.606px]")
      })]
    }) : (0, t.jsxs)("div", {
      className: (0, s.cn)("flex items-center", m ? "gap-[1.1rem]" : "gap-[1.35rem]", e),
      children: [(0, t.jsx)(i.FlowerLogo, {
        className: (0, s.cn)("shrink-0", d, m ? "h-[3.2rem] w-[3.47rem]" : "h-[5rem] w-[5.4rem]")
      }), (0, t.jsx)(r.LassieLogo, {
        className: (0, s.cn)(d, m ? "h-[2rem] w-[8.3rem]" : "h-[3.1rem] w-[13rem]")
      })]
    });
  }
  var o = e.i(355455);
  function m({
    className: e,
    ratingClassName: n,
    separatorClassName: i
  }) {
    return (0, t.jsxs)("p", {
      className: (0, s.cn)("text-[1.4rem] leading-[1.3] text-text-primary", e),
      children: [(0, t.jsx)("span", {
        className: (0, s.cn)("text-[1.6rem] font-bold text-text-primary", n),
        children: "★ 4.8"
      }), (0, t.jsx)("span", {
        className: (0, s.cn)("mx-[0.6rem] font-bold", i),
        children: "·"
      }), "Trusted by 1,000+ dentists"]
    });
  }
  let c = "(min-width: 1024px)";
  function l(e, t) {
    return "function" == typeof e.addEventListener ? (e.addEventListener("change", t), () => {
      e.removeEventListener("change", t);
    }) : ("function" == typeof e.addListener && e.addListener(t), () => {
      e.removeListener?.(t);
    });
  }
  function d(e) {
    let t = 0,
      n = () => {
        window.cancelAnimationFrame(t), t = window.requestAnimationFrame(e);
      };
    return n(), window.addEventListener("scroll", n, {
      passive: !0
    }), window.addEventListener("resize", n), () => {
      window.cancelAnimationFrame(t), window.removeEventListener("scroll", n), window.removeEventListener("resize", n);
    };
  }
  e.s(["PaidAdsFloatingDesktopNav", 0, function () {
    let [e, i] = (0, n.useState)(!1);
    return (0, n.useEffect)(() => {
      let e = document.getElementById("hero");
      if (!e) return;
      let t = window.matchMedia(c),
        n = t.matches,
        r = !1,
        s = () => {
          i(n && r);
        },
        a = () => {
          r = e.getBoundingClientRect().bottom <= 0, s();
        };
      a();
      let o = l(t, e => {
        n = e.matches, a();
      });
      if (!("IntersectionObserver" in window)) {
        let e = d(a);
        return () => {
          e(), o();
        };
      }
      let m = new IntersectionObserver(([e]) => {
        r = !e.isIntersecting && e.boundingClientRect.bottom <= 0, s();
      }, {
        threshold: 0
      });
      return m.observe(e), () => {
        m.disconnect(), o();
      };
    }, []), (0, t.jsxs)("nav", {
      className: (0, s.cn)("fixed left-1/2 top-[1rem] z-50 hidden w-[calc(100%-2rem)] max-w-[132rem] -translate-x-1/2 items-center justify-between gap-[2rem] rounded-[1.6rem] bg-[rgba(120,96,25,0.1)] px-[2rem] py-[0.8rem] backdrop-blur-[5px] transition-all duration-200 tablet:flex", e ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[calc(100%+2rem)] opacity-0"),
      "aria-hidden": !e,
      children: [(0, t.jsx)(a, {
        size: "homepage-nav",
        theme: "dark"
      }), (0, t.jsxs)("div", {
        className: "flex min-w-0 flex-1 items-center justify-end gap-[2rem]",
        children: [(0, t.jsx)(m, {}), (0, t.jsx)(o.PaidAdsEmailForm, {
          variant: "compact",
          placeholder: "What's your email?",
          submitLabel: "Book a demo",
          className: "shrink-0 max-w-[34rem]"
        })]
      })]
    });
  }, "PaidAdsStickyEmailForm", 0, function () {
    let [e, i] = (0, n.useState)(!1);
    return (0, n.useEffect)(() => {
      let e = document.getElementById("paid-ads-hero-email-form"),
        t = document.getElementById("paid-ads-footer");
      if (!e || !t) return;
      let n = window.matchMedia(c),
        r = !n.matches,
        s = !1,
        a = !1,
        o = () => {
          i(r && s && !a);
        },
        m = () => {
          let n;
          s = e.getBoundingClientRect().bottom <= 0, a = (n = t.getBoundingClientRect()).bottom > 0 && n.top < window.innerHeight, o();
        };
      m();
      let x = l(n, e => {
        r = !e.matches, m();
      });
      if (!("IntersectionObserver" in window)) {
        let e = d(m);
        return () => {
          e(), x();
        };
      }
      let h = new IntersectionObserver(([e]) => {
          s = !e.isIntersecting && e.boundingClientRect.bottom <= 0, o();
        }, {
          threshold: 0
        }),
        w = new IntersectionObserver(([e]) => {
          a = e.isIntersecting, o();
        }, {
          threshold: 0
        });
      return h.observe(e), w.observe(t), () => {
        h.disconnect(), w.disconnect(), x();
      };
    }, []), (0, t.jsx)("div", {
      "data-paid-ads-sticky-email-form": !0,
      className: (0, s.cn)("fixed inset-x-0 bottom-[1rem] z-50 px-[1rem] transition-all duration-200 tablet:hidden", e ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[calc(100%+2rem)] opacity-0"),
      style: {
        bottom: "calc(1rem + env(safe-area-inset-bottom))"
      },
      "aria-hidden": !e,
      children: (0, t.jsx)(o.PaidAdsEmailForm, {
        className: "max-w-none"
      })
    });
  }], 547478);
};
