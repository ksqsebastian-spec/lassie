// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 239128.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(176418),
    n = e.i(638327),
    a = e.i(809393),
    i = e.i(607198),
    s = e.i(513679);
  e.s(["HowItWorksIntro", 0, function ({
    className: e
  }) {
    let [o, l] = (0, s.useState)(null),
      d = (0, s.useRef)(null);
    return (0, r.useGSAP)(() => {
      if (!o || !d.current) return;
      let e = null,
        t = i.ScrollTrigger.create({
          trigger: d.current,
          start: "top 80%",
          once: !0,
          onEnter: () => {
            let t;
            t = () => {
              o.setFrame(0), o.play();
            }, o.isLoaded ? t() : (e = () => {
              t(), e && (o.removeEventListener("load", e), e = null);
            }, o.addEventListener("load", e));
          }
        });
      return () => {
        e && o.removeEventListener("load", e), t.kill();
      };
    }, [o]), (0, t.jsxs)("section", {
      ref: d,
      className: (0, a.default)("w-full flex flex-col justify-center items-center mb-[8rem] tablet:mb-[6rem]", e),
      children: [(0, t.jsx)("span", {
        className: (0, a.default)("w-[32rem] inline-block"),
        children: (0, t.jsx)(n.DotLottieReact, {
          src: "/lottie/flower.lottie",
          className: "w-[32rem] h-auto",
          animationId: "intro",
          loop: !1,
          autoplay: !1,
          renderConfig: {
            autoResize: !0
          },
          dotLottieRefCallback: l
        })
      }), (0, t.jsxs)("h2", {
        className: (0, a.default)("text-heading-lg text-text-primary text-center"),
        children: ["AI that runs the", (0, t.jsx)("br", {}), "doctor’s office"]
      })]
    });
  }]);
};
