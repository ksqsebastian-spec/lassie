// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 888164.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(176418),
    n = e.i(809393),
    a = e.i(983871),
    i = e.i(607198),
    s = e.i(726215),
    o = e.i(513679),
    l = e.i(41049),
    d = e.i(990055),
    u = e.i(631923);
  function c(e) {
    return e * Math.PI / 180;
  }
  e.s(["Infographic", 0, function () {
    let e = (0, o.useRef)(null),
      f = (0, o.useRef)(null),
      p = (0, o.useRef)(null),
      m = (0, o.useRef)(null),
      h = (0, o.useRef)(null),
      g = (0, o.useRef)(null),
      b = (0, o.useRef)(null),
      w = (0, o.useRef)(null),
      v = (0, o.useRef)(null),
      x = (0, o.useRef)(null),
      y = (0, o.useRef)(null),
      S = (0, o.useRef)(null),
      E = (0, o.useRef)(null),
      P = (0, o.useRef)(null),
      R = (0, o.useRef)(null),
      j = (0, o.useRef)(null),
      [k, T] = (0, o.useState)(98),
      A = (0, o.useRef)(null);
    return (0, r.useGSAP)(t => {
      let r = (({
        sectionRef: e,
        percentageCopyRef: t,
        copy1Ref: r,
        copy2Ref: n,
        topLeftContainer: s,
        topRightContainerRef: o,
        bottomRightRefContainer: l,
        bottomLeftRef: f,
        topLeft2Ref: p,
        bottomRight2Ref: m,
        context: h
      }) => {
        let g,
          b,
          w = !1,
          v = {
            value: 0,
            angle: -100,
            radiusX: .3 * window.innerWidth,
            radiusY: .3 * window.innerHeight,
            animateScale: !0
          },
          x = [s, p, o, l, f, m],
          y = [{
            fromAngle: {
              desktop: -174,
              mobile: -154
            },
            angle: -74,
            toAngle: {
              desktop: -74,
              mobile: -84
            },
            offsetX: {
              desktop: 0,
              mobile: 0
            },
            offsetY: {
              desktop: 0,
              mobile: 0
            }
          }, {
            fromAngle: {
              desktop: -120,
              mobile: -120
            },
            angle: -74,
            toAngle: {
              desktop: -74,
              mobile: -74
            },
            offsetX: {
              desktop: -80,
              mobile: -80
            },
            offsetY: {
              desktop: 10,
              mobile: 10
            }
          }, {
            angle: 35,
            fromAngle: {
              desktop: -125,
              mobile: -25
            },
            toAngle: {
              desktop: 35,
              mobile: 35
            },
            offsetX: {
              desktop: -25,
              mobile: -25
            },
            offsetY: {
              desktop: -60,
              mobile: -20
            }
          }, {
            angle: 105,
            fromAngle: {
              desktop: 5,
              mobile: 110
            },
            toAngle: {
              desktop: 105,
              mobile: 130
            },
            offsetX: {
              desktop: -50,
              mobile: -50
            },
            offsetY: {
              desktop: 40,
              mobile: -20
            }
          }, {
            angle: 195,
            fromAngle: {
              desktop: 95,
              mobile: 180
            },
            toAngle: {
              desktop: 195,
              mobile: 205
            },
            offsetX: {
              desktop: 0,
              mobile: 25
            },
            offsetY: {
              desktop: 0,
              mobile: -60
            }
          }, {
            angle: 105,
            fromAngle: {
              desktop: 30,
              mobile: 100
            },
            toAngle: {
              desktop: 105,
              mobile: 120
            },
            offsetX: {
              desktop: 50,
              mobile: 0
            },
            offsetY: {
              desktop: -100,
              mobile: -40
            }
          }],
          S = a.default.timeline({
            paused: !0
          }),
          E = a.default.timeline({
            paused: !0
          });
        function P(e, t) {
          return window.innerWidth >= d.BREAKPOINTS.tablet ? e[t].desktop : e[t].mobile;
        }
        function R() {
          x.forEach((e, t) => {
            let r = e.current?.querySelector("img"),
              n = e.current?.dataset.graphic,
              a = Math.min(1, 2 * E.progress());
            if (r && !n && v.animateScale) {
              let e = Math.max(1, 2 - 1.5 * E.progress());
              r.style.transform = `scale(${e})`;
            }
            if (e.current) {
              let r = Math.cos(c(y[t].angle - 60)) * v.radiusX - e.current.offsetWidth / 2 + P(y[t], "offsetX"),
                n = Math.sin(c(y[t].angle - 60)) * v.radiusY - e.current.offsetHeight / 2 + P(y[t], "offsetY");
              e.current.style.opacity = "1", e.current.style.transform = `translate(${r}px, ${n}px) scale(${a})`;
            }
          });
        }
        return {
          resize: () => {
            window.innerWidth >= d.BREAKPOINTS.tablet ? (v.animateScale = !0, v.radiusX = .43 * window.innerWidth, v.radiusY = .43 * window.innerHeight, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                R();
              });
            })) : v.animateScale = !1;
          },
          animateText: ({
            isMobile: i
          }) => ((S = a.default.timeline({
            paused: !0,
            scrollTrigger: {
              trigger: e.current,
              start: "top center",
              end: () => i ? `+=${1.5 * window.innerHeight}` : `+=${3 * window.innerHeight}`,
              scrub: !0,
              invalidateOnRefresh: !0
            }
          })).fromTo(t.current, {
            autoAlpha: 0,
            y: "+=30px"
          }, {
            autoAlpha: 1,
            y: "0px",
            duration: 3 * u.DURATION.slow,
            ease: u.EASE_OUT
          }, 1).fromTo(r.current, {
            autoAlpha: 0,
            y: "+=30px"
          }, {
            autoAlpha: 1,
            y: "0px",
            duration: 3 * u.DURATION.slow,
            ease: u.EASE_OUT
          }, 1.1).to({}, {
            duration: 4
          }).to(t.current, {
            autoAlpha: 0,
            y: "-60%",
            duration: u.DURATION.slow
          }).to(r.current, {
            autoAlpha: 0,
            y: "-40%",
            duration: u.DURATION.slow
          }, "<").fromTo(n.current, {
            autoAlpha: 0,
            y: "20%"
          }, {
            autoAlpha: 1,
            y: "-40%",
            duration: 1.5
          }).to({}, {
            duration: 1
          }), () => {
            S.revert();
          }),
          animateCards: ({
            isMobile: t
          }) => ((E = a.default.timeline({
            paused: !0,
            scrollTrigger: {
              trigger: e.current,
              start: "top bottom",
              end: () => t ? `+=${2 * window.innerHeight}` : `+=${3.5 * window.innerHeight}`,
              onStart: () => {
                R();
              },
              onUpdate: () => {
                R();
              },
              scrub: !0,
              invalidateOnRefresh: !0
            }
          })).set(v, {
            radiusX: () => (window.innerWidth >= d.BREAKPOINTS.tablet, .43 * window.innerWidth),
            radiusY: () => (window.innerWidth >= d.BREAKPOINTS.tablet, .39 * window.innerHeight)
          }), y.forEach(e => {
            E.fromTo(e, {
              angle: P(e, "fromAngle")
            }, {
              angle: P(e, "toAngle")
            }, 0);
          }), () => {
            E.revert();
          }),
          animatePercentage: t => g = i.ScrollTrigger.create({
            trigger: e.current,
            start: "top bottom",
            end: () => `+=${3 * window.innerHeight}`,
            scrub: !0,
            invalidateOnRefresh: !0,
            onEnter: () => {
              w || h.add(() => {
                (b = a.default.timeline()).fromTo(v, {
                  value: 0
                }, {
                  value: 98,
                  duration: 3 * u.DURATION.slow,
                  ease: u.EASE_IN_OUT,
                  delay: .5,
                  onComplete: () => {
                    w = !0;
                  },
                  onUpdate: () => t(Math.round(v.value))
                });
              });
            }
          }),
          dispose: () => {
            g && g.kill(), b && b.revert(), S.revert(), E.revert();
          }
        };
      })({
        sectionRef: e,
        copy1Ref: p,
        percentageCopyRef: f,
        copy2Ref: m,
        topLeftContainer: R,
        topRightContainerRef: j,
        bottomRightRefContainer: P,
        bottomLeftRef: x,
        topLeftRef: h,
        topLeft2Ref: b,
        bottomRight2Ref: E,
        context: t
      });
      A.current && (A.current.style.opacity = "1"), r.animatePercentage(e => T(e));
      let n = a.default.matchMedia();
      n.add(`(max-width: ${d.BREAKPOINTS.desktop - 1}px)`, () => (r.animateCards({
        isMobile: !0
      }), r.animateText({
        isMobile: !0
      }), () => {
        r.dispose();
      })), n.add(`(min-width: ${d.BREAKPOINTS.desktop}px)`, () => (r.animateCards({
        isMobile: !1
      }), r.animateText({
        isMobile: !1
      }), () => {
        r.dispose();
      })), i.ScrollTrigger.create({
        trigger: e.current,
        start: "center center",
        end: () => window.innerWidth >= d.BREAKPOINTS.desktop ? `+=${2.2 * window.innerHeight}` : `+=${1.2 * window.innerHeight}`,
        pin: !0,
        invalidateOnRefresh: !0
      });
      let s = () => {
        r.resize();
      };
      return window.addEventListener("resize", s), () => {
        window.removeEventListener("resize", s);
      };
    }, []), (0, t.jsxs)("section", {
      id: "infographic",
      ref: e,
      className: (0, n.default)("w-full min-h-[100svh] min-w-[394px] flex justify-center items-center relative"),
      children: [(0, t.jsx)("div", {
        className: (0, n.default)("relative h-[15rem] w-full"),
        children: (0, t.jsxs)("div", {
          className: (0, n.default)("flex flex-col justify-center items-center text-center absolute", "left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full"),
          children: [(0, t.jsxs)("span", {
            ref: f,
            className: (0, n.default)("text-heading-xl"),
            children: [k, "%"]
          }), (0, t.jsxs)("div", {
            className: (0, n.default)("grid w-full place-items-center"),
            children: [(0, t.jsxs)("h2", {
              ref: p,
              className: (0, n.default)("text-heading-lg col-start-1 row-start-1 text-center", "w-full"),
              children: ["of posting is handled", (0, t.jsx)("br", {}), "autonomously"]
            }), (0, t.jsxs)("h2", {
              ref: m,
              className: (0, n.default)("text-heading-lg col-start-1 row-start-1 text-center", "opacity-0 w-full"),
              children: ["The more Lassie learns,", (0, t.jsx)("br", {}), "the less input it needs"]
            })]
          })]
        })
      }), (0, t.jsxs)("div", {
        ref: A,
        className: (0, n.default)("absolute w-full h-svh top-0 left-0 pointer-events-none opacity-0"),
        children: [(0, t.jsx)("div", {
          ref: R,
          className: (0, n.default)("top-1/2 left-1/2 absolute"),
          children: (0, t.jsx)("span", {
            className: (0, n.default)("inline-block w-[11.3rem] h-[12.5rem] overflow-hidden rounded-[1.2rem]", "tablet:w-[17rem] relative tablet:h-[20.8rem]", "desktop:rounded-[1.6rem] desktop:w-[23.6rem] desktop:h-[26.1rem]"),
            ref: h,
            children: (0, t.jsx)(s.default, {
              ref: g,
              src: `${l.ASSETS_URL}/infographic/top-left-9a8c2dff-8249-4cbe-99d9-3c11d1e56105.jpg`,
              fill: !0,
              alt: "Tall yellow wildflowers with thin green stems stand against a softly blurred, sunlit background, conveying a serene and natural atmosphere."
            })
          })
        }), (0, t.jsx)("div", {
          className: (0, n.default)("top-1/2 left-1/2 absolute"),
          "data-graphic": !0,
          ref: b,
          children: (0, t.jsx)("div", {
            className: (0, n.default)("w-[17.6rem] h-[7.86rem] max-w-none rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[22.5rem] tablet:h-[12.6rem] top-0 left-0", "desktop:w-[34rem] tablet:h-[15.2rem]", "absolute top-[-7rem] left-[7rem] object-contain"),
            children: (0, t.jsx)(s.default, {
              className: (0, n.default)("max-w-none", "object-contain"),
              fill: !0,
              src: `${l.ASSETS_URL}/infographic/top-left-1-983872b1-f53d-40b6-93ef-4ef36423303a.svg`,
              alt: "Metlife transaction status card showing a completed payment of $1,943.88, received on Jan 14 and posted on Jan 16."
            })
          })
        }), (0, t.jsx)("div", {
          ref: j,
          className: (0, n.default)("absolute left-1/2 top-1/2"),
          children: (0, t.jsx)("picture", {
            ref: w,
            "data-graphic": !0,
            className: (0, n.default)("w-[12.1rem] h-[12.3rem] overflow-hidden block rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[19.1rem] tablet:h-[19.1rem] relative", "desktop:w-[27.3rem] desktop:h-[27.7rem]"),
            children: (0, t.jsx)(s.default, {
              ref: v,
              src: `${l.ASSETS_URL}/infographic/top-right-9c96bfd2-d943-4721-af2b-970d6f1e8056.jpg`,
              fill: !0,
              className: (0, n.default)("w-full h-full object-cover"),
              alt: "A person in a navy outfit is seen from behind through a glass window. The setting appears calm, with soft light and minimalistic decor in blue tones."
            })
          })
        }), (0, t.jsx)("div", {
          ref: x,
          "data-graphic": !0,
          className: (0, n.default)("absolute w-[17.6rem] h-[10rem] max-w-none top-1/2 left-1/2 rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[26.1rem] tablet:h-[14rem] object-contain", "desktop:w-[34rem] desktop:h-[17rem] object-contain"),
          children: (0, t.jsx)(s.default, {
            className: (0, n.default)("max-w-none"),
            fill: !0,
            src: `${l.ASSETS_URL}/infographic/bottom-left-bb2d87e3-276f-4e1d-8077-cdfc77ce079b.svg`,
            alt: "Weekly activity analysis card showing $67,119.50 in partially posted payments, $3,535.50 in unposted payments, and 27 claims flagged for review."
          })
        }), (0, t.jsx)("div", {
          ref: P,
          className: (0, n.default)("top-1/2 left-1/2 absolute"),
          children: (0, t.jsx)("picture", {
            ref: y,
            className: (0, n.default)("w-[12.1rem] h-[11.6rem] relative overflow-hidden block rounded-[1.2rem] desktop:rounded-[1.6rem]", "tablet:w-[18.2rem] tablet:h-[18.2rem] aspect-square", "desktop:w-[23.8rem] desktop:h-[22.8rem] object-contain"),
            children: (0, t.jsx)(s.default, {
              ref: S,
              src: `${l.ASSETS_URL}/infographic/bottom-right-dffd49f7-779e-491d-bbec-97ed5a920117.jpg`,
              fill: !0,
              className: (0, n.default)("w-full h-full object-cover"),
              alt: "Hands typing on a sleek, white keyboard in a modern office setting. A smartwatch adorns one wrist, conveying a sense of productivity and focus."
            })
          })
        }), (0, t.jsx)("div", {
          "data-graphic": !0,
          className: (0, n.default)("top-1/2 left-1/2 absolute"),
          ref: E,
          children: (0, t.jsx)("div", {
            className: (0, n.default)("w-[17.6rem] h-[8.74rem] max-w-none", "relative object-contain", "tablet:w-[22.5rem] tablet:h-[12.6rem]", "desktop:w-[34rem] desktop:h-[19.6rem]"),
            children: (0, t.jsx)(s.default, {
              className: (0, n.default)("max-w-none", "object-contain"),
              fill: !0,
              src: `${l.ASSETS_URL}/infographic/bottom-right-6f11c3d8-d8de-4a85-81cd-ac22c29c59c8.svg`,
              alt: "Processing claim card for Aetna totaling $8,471.30, marked as Received on Jan 4, 2026, with EFT reference number 826077000559069."
            })
          })
        })]
      })]
    });
  }], 888164);
};
