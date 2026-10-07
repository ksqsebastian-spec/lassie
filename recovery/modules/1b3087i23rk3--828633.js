// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 828633.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(176418),
    n = e.i(809393),
    a = e.i(983871),
    i = e.i(607198),
    s = e.i(513679),
    o = e.i(41049),
    l = e.i(990055),
    d = e.i(726215);
  let u = function ({
      className: e,
      textAlign: r = "right",
      descriptionTitle: a,
      descriptionBody: i,
      videoURL: o,
      index: l,
      posterURL: u,
      ref: c
    }) {
      let f = (0, s.useRef)(null);
      return (0, s.useEffect)(() => {
        let e = f.current;
        if (!e) return;
        let t = new IntersectionObserver(([t]) => {
          t.isIntersecting && e.src !== o && (e.src = o, e.load());
        }, {
          threshold: .1
        });
        return t.observe(e), () => {
          t.disconnect(), e.pause();
        };
      }, [o]), (0, t.jsx)("div", {
        ref: c,
        className: (0, n.default)("absolute inset-x-0 top-[25vw] tablet:right-auto tablet:left-0 mx-auto flex tablet:h-full w-full max-w-[50rem] tablet:max-w-none flex-col items-center justify-center px-[1.6rem]", "desktop:top-0 tablet:top-[3rem] tablet:py-0", e),
        children: (0, t.jsxs)("div", {
          className: (0, n.default)("relative aspect-[362/346] h-full tablet:w-auto w-full", "desktop:top-[2rem] tablet:top-[4rem] tablet:aspect-[975/614] tablet:h-[90%]", "desktop:aspect-[1100/693]"),
          children: [(0, t.jsx)("article", {
            className: (0, n.default)("left" === r ? "description absolute top-[-2.5rem] translate-y-[-100%] max-w-[90%] desktop:max-w-[25.7rem] tablet:max-w-[50rem] tablet:top-[-2rem] desktop:top-[calc(50%+4.5rem)] desktop:translate-x-[calc(-100%-2.8rem)]" : "description absolute top-[-2.4rem] translate-y-[-100%] max-w-[90%] tablet:max-w-[50rem] w-auto tablet:top-[-2rem] desktop:top-[calc(50%+4.5rem)] desktop:translate-x-[calc(100%+3rem)] desktopLarge:translate-x-[calc(100%+3.1rem)] desktop:right-0", "desktop:max-w-[25.7rem]"),
            children: (0, t.jsxs)("div", {
              className: (0, n.default)("description-animation relative", 1 !== l ? "opacity-0" : "opacity-100"),
              children: [(0, t.jsx)("h3", {
                className: (0, n.default)("mb-[1.2rem] desktop:max-w-[100%] text-balance text-heading-sm text-text-primary"),
                children: a
              }), (0, t.jsx)("p", {
                className: (0, n.default)("text-body-sm text-text-secondary"),
                children: i
              })]
            })
          }), (0, t.jsxs)("div", {
            className: (0, n.default)("video relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#F9F8F5]", "pointer-events-none desktop:rounded-[6.4rem] tablet:rounded-[5.6rem]"),
            children: [(0, t.jsx)("video", {
              ref: f,
              loop: !0,
              playsInline: !0,
              muted: !0,
              preload: "metadata",
              className: (0, n.default)("relative z-[1] h-full w-full object-cover")
            }), (0, t.jsx)(d.default, {
              alt: `Cover image for the video of ${a}`,
              src: u,
              fill: !0,
              className: (0, n.default)("h-full w-full object-cover")
            })]
          })]
        })
      });
    },
    c = e => {
      e.paused && (e.currentTime = 0, e.play().catch(() => {}));
    },
    f = e => {
      e.paused || (e.currentTime = 0, e.pause());
    };
  e.s(["FeaturesCarousel", 0, function ({
    className: e
  }) {
    let d = (0, s.useRef)(null),
      p = (0, s.useRef)(null),
      m = (0, s.useRef)(null),
      h = (0, s.useRef)(null),
      g = function ({
        elements: e
      }) {
        let t = e => {
            let t = e.querySelector(".video"),
              r = t?.querySelector("video"),
              n = a.default.timeline({
                defaults: {
                  ease: "none"
                },
                onUpdate: () => {
                  n.progress() > .5 && .8 > n.progress() && (e.style.pointerEvents = "auto", r && c(r)), .5 > n.progress() && (e.style.pointerEvents = "none", r && f(r));
                }
              });
            if (!t || !r) return n;
            let i = e.querySelector(".description-animation");
            return n.to(e, {
              scale: 1,
              y: 0
            }, 0), n.to(i, {
              opacity: 1,
              duration: () => window.innerWidth < l.BREAKPOINTS.desktop ? .5 : 1
            }, window.innerWidth < l.BREAKPOINTS.desktop ? 0 : .1), n.to(i, {
              duration: () => window.innerWidth < l.BREAKPOINTS.desktop ? 2 : 1,
              scale: 1,
              y: "0%"
            }, window.innerWidth < l.BREAKPOINTS.desktop ? 0 : .1), n.to(t, {
              scale: () => 1,
              y: () => 0,
              opacity: () => 1,
              duration: 2
            }, 0), n.to(t, {
              background: "#F9F8F5",
              duration: .1
            }, 0), n.to(r, {
              opacity: () => 1
            }, 0), n.fromTo(r, {
              scale: 1.05
            }, {
              scale: 1,
              duration: 2
            }, 0), n;
          },
          r = (e, t, r) => {
            let n = e.querySelector(".video"),
              i = n?.querySelector("video"),
              s = a.default.timeline({
                defaults: {
                  ease: "none"
                },
                onUpdate: () => {
                  e.style.pointerEvents = "none", i && f(i);
                }
              });
            if (!n || !i) return s;
            let o = e.querySelector(".description-animation"),
              l = t - r;
            return s.to(e, {
              scale: 1,
              y: 0
            }, 0), s.to(o, {
              opacity: 0,
              y: () => `${(90 - r) * l}%`
            }, 0), s.to(n, {
              background: "#F9F8F5",
              duration: .1
            }, 0), s.to(n, {
              scale: () => 1 - .15 * l,
              duration: 2,
              y: () => `${(12 - r) * l}%`,
              opacity: () => 1
            }, 0), s.to(i, {
              opacity: () => l <= 0 ? 1 : .5 - l / 5
            }, 0), s;
          },
          n = e => {
            let t = a.default.timeline({
                ease: "linear",
                onUpdate: () => {
                  t.progress() > .3 ? (n && f(n), e.style.pointerEvents = "none") : (e.style.pointerEvents = "auto", n && c(n));
                }
              }),
              r = e.querySelector(".video");
            if (!r) return t;
            let n = r.querySelector("video");
            if (!n) return t;
            let i = e.querySelector(".description-animation");
            return i && (t.to(e, {
              scale: 1,
              y: 0
            }, 0), t.to(i, {
              opacity: 0,
              y: () => window.innerWidth >= l.BREAKPOINTS.desktop ? "-60%" : `-${window.innerHeight}px`,
              duration: () => window.innerWidth < l.BREAKPOINTS.desktop && window.innerWidth >= l.BREAKPOINTS.tablet ? 2 : window.innerWidth >= l.BREAKPOINTS.desktop ? .5 : 3
            }, 0), t.to(r, {
              background: "transparent",
              duration: .1
            }, 0), t.to(r, {
              scale: () => 1,
              duration: () => window.innerWidth >= l.BREAKPOINTS.desktop ? 3 : window.innerWidth >= l.BREAKPOINTS.tablet ? 2 : 3,
              y: () => `${-window.innerHeight}px`
            }, 0)), t;
          };
        return {
          next: i => {
            let s = a.default.timeline({
              defaults: {
                ease: "none"
              }
            });
            if (!e[i].current) return s;
            let o = e[i].current;
            return 0 === i && (s.add(t(o), 0), s.add(n(o))), 1 === i && (s.add(r(o, 1, 0), 0), s.add(t(o)), s.add(n(o))), 2 === i && (s.add(r(o, 2, 0), 0), s.add(r(o, 2, 1)), s.add(t(o))), s;
          },
          start: () => {
            let t = a.default.timeline({});
            return e.forEach((e, r) => {
              if (!e.current) return;
              let n = e.current.querySelector(".description-animation");
              t.set(e.current.querySelector(".video"), {
                scale: .95,
                y: "10%",
                immediateRender: !0
              }), t.set(e.current.querySelector("video"), {
                scale: 1.2,
                immediateRender: !0
              }), t.set(n, {
                opacity: 0,
                y: () => "50%",
                scale: () => window.innerWidth < l.BREAKPOINTS.desktop && r > 0 ? .8 : 1,
                immediateRender: !0
              }, 0);
            }), t;
          },
          playActive: t => {
            e.forEach((e, r) => {
              let n = e.current?.querySelector(".video video");
              n && (r === t ? c(n) : f(n));
            });
          }
        };
      }({
        elements: [p, m, h]
      });
    return (0, r.useGSAP)(e => {
      let t = g.start();
      i.ScrollTrigger.create({
        trigger: d.current,
        start: "center center",
        end: () => window.innerWidth >= l.BREAKPOINTS.desktop ? `+=${2.2 * window.innerHeight}` : window.innerWidth >= l.BREAKPOINTS.tablet ? `+=${3 * window.innerHeight}` : `+=${2.5 * window.innerHeight}`,
        pin: !0,
        invalidateOnRefresh: !0
      });
      let r = a.default.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: d.current,
          start: () => window.innerWidth < l.BREAKPOINTS.tablet ? "top center-=100" : "top center+=100",
          end: () => `+=${3 * window.innerHeight}`,
          scrub: .25,
          invalidateOnRefresh: !0
        }
      });
      return r.add(t, 0), r.add(g.next(0), 0), r.add(g.next(1), 0), r.add(g.next(2), 0), () => {
        t.revert();
      };
    }, []), (0, t.jsxs)("section", {
      ref: d,
      className: (0, n.default)("relative desktop:mx-auto desktop:mb-[10rem] tablet:mb-[20rem] desktop:h-[36vw] desktopLarge:h-[40vw] h-[100vw] tablet:h-[75svh] desktop:max-h-[50rem] desktopLarge:max-h-[75rem] tablet:max-h-[70rem] w-screen desktop:max-w-[2050px]", e),
      children: [(0, t.jsx)(u, {
        ref: h,
        index: 3,
        descriptionTitle: "And answers your questions",
        descriptionBody: "Got a question about a claim? Want to see how your week is tracking? Lassie is always ready to help.",
        videoURL: `${o.ASSETS_URL}/lassie-pg-3-01a69d26-1a50-4804-9dec-c1b1670faf17.mp4`,
        posterURL: `${o.ASSETS_URL}/lassie-pg-3.jpg`,
        textAlign: "left"
      }), (0, t.jsx)(u, {
        ref: m,
        index: 2,
        descriptionTitle: "Keeps you in the loop",
        descriptionBody: "Watch Lassie complete your paperwork, asking for your input when needed on the most complex issues.",
        videoURL: `${o.ASSETS_URL}/lassie-pg-2-4fba523a-2180-4814-bf6a-2c9000826b7c.mp4`,
        posterURL: `${o.ASSETS_URL}/lassie-pg-2.jpg`,
        textAlign: "right"
      }), (0, t.jsx)(u, {
        ref: p,
        index: 1,
        descriptionTitle: "Lassie does your paperwork",
        descriptionBody: "Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.",
        videoURL: `${o.ASSETS_URL}/lassie-pg-1-e1832fd4-4bf4-4fbd-acbb-ec8ee35882a2.mp4`,
        posterURL: `${o.ASSETS_URL}/lassie-pg-1.jpg`,
        textAlign: "left"
      })]
    });
  }], 828633);
};
