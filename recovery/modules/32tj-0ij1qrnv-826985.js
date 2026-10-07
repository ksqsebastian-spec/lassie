// Recovered from 32tj-0ij1qrnv.js. Runtime module IDs: 826985.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(809393),
    l = e.i(983871),
    s = e.i(607198),
    n = e.i(513679),
    r = e.i(176418),
    a = e.i(631923);
  class o {
    callback;
    delayMs;
    frameId = null;
    previousTimestamp = null;
    constructor(e, t, i = {}) {
      if (t <= 0) throw Error("RafInterval delay must be greater than 0 ms");
      this.callback = e, this.delayMs = t, i.autoStart && this.start();
    }
    get isRunning() {
      return null !== this.frameId;
    }
    start = () => {
      this.isRunning || (this.previousTimestamp = null, this.frameId = requestAnimationFrame(this.loop));
    };
    stop = () => {
      null !== this.frameId && (cancelAnimationFrame(this.frameId), this.frameId = null, this.previousTimestamp = null);
    };
    setDelay = e => {
      if (e <= 0) throw Error("RafInterval delay must be greater than 0 ms");
      this.delayMs = e;
    };
    loop = e => {
      if (null === this.previousTimestamp) {
        this.previousTimestamp = e, this.frameId = requestAnimationFrame(this.loop);
        return;
      }
      let t = e - this.previousTimestamp;
      if (t >= this.delayMs) {
        let i = Math.floor(t / this.delayMs);
        this.previousTimestamp += i * this.delayMs, this.callback(e, i);
      }
      this.frameId = requestAnimationFrame(this.loop);
    };
  }
  function c() {
    return (0, t.jsxs)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, t.jsx)("title", {
        children: "Calendar icon"
      }), (0, t.jsx)("g", {
        opacity: "0.7",
        children: (0, t.jsx)("path", {
          d: "M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25Z",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })]
    });
  }
  let d = [{
    id: "confirmed-appointments-1",
    label: "Confirmed 42 appointments",
    icon: c
  }, {
    id: "posted-payments",
    label: "Posted $12,430 in payments",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Send icon"
        }), (0, t.jsx)("path", {
          d: "M7.5006 9.79167L1.63879 4.58117C1.06608 4.0721 1.42617 3.125 2.19243 3.125H17.7327C18.3723 3.125 18.7734 3.81561 18.4566 4.37115L10.8347 17.7365C10.4593 18.3949 9.47119 18.2509 9.29925 17.5128L7.5006 9.79167ZM7.5006 9.79167L18.8222 3.33333",
          stroke: "white",
          strokeWidth: "1.25",
          strokeLinejoin: "round"
        })]
      });
    }
  }, {
    id: "booked-recalls",
    label: "Booked 8 hygiene recalls",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Terminal icon"
        }), (0, t.jsx)("path", {
          d: "M4.25 4.75L6 6.5L4.25 8.25M7.75 8.25H9.75M3.75 17.25H14.25C15.9069 17.25 17.25 15.9069 17.25 14.25V3.75C17.25 2.09315 15.9069 0.75 14.25 0.75H3.75C2.09315 0.75 0.75 2.09315 0.75 3.75V14.25C0.75 15.9069 2.09315 17.25 3.75 17.25Z",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      });
    }
  }, {
    id: "confirmed-appointments-2",
    label: "Confirmed 42 appointments",
    icon: c
  }, {
    id: "rescheduled-appointments",
    label: "Rescheduled 3 appointments",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "20",
        height: "21",
        viewBox: "0 0 20 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Reeschedule icon"
        }), (0, t.jsx)("path", {
          d: "M4.79688 2.79688H3.79688C2.14002 2.79688 0.796875 4.14002 0.796875 5.79688V7.29688M4.79688 2.79688H13.2969M4.79688 2.79688V0.796875M13.2969 2.79688H14.2969C15.9537 2.79688 17.2969 4.14002 17.2969 5.79688C17.2969 6.29688 17.2969 6.79688 17.2969 7.29688H0.796875M13.2969 2.79688V0.796875M7.29688 18.2969H3.79687C2.14002 18.2969 0.796875 16.9537 0.796875 15.2969V7.29688M17.3866 18.2344C16.6264 18.8956 15.6247 19.2969 14.5469 19.2969C12.5665 19.2969 10.9026 17.9424 10.4308 16.1094M11.4663 12.0857C12.249 11.2908 13.351 10.7969 14.5469 10.7969C16.5272 10.7969 18.1912 12.1513 18.663 13.9844",
          stroke: "white",
          strokeWidth: "1.59375",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      });
    }
  }, {
    id: "called-cigna",
    label: "Called Cigna for claim status",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Called icon"
        }), (0, t.jsx)("path", {
          d: "M12.5612 0.75H17.0612V5.25M11.5612 6.25L16.563 1.24825M6.37488 2.66647L6.72821 3.86777C6.93281 4.56343 6.73294 5.31514 6.20985 5.81732C5.596 6.40661 5.42495 7.33547 5.88703 8.05C6.88905 9.59947 8.21175 10.9222 9.76122 11.9242C10.4757 12.3863 11.4046 12.2152 11.9939 11.6014C12.4961 11.0783 13.2478 10.8784 13.9434 11.083L14.9077 11.3666C16.1845 11.7421 17.0612 12.9162 17.0612 14.247C17.0612 15.9038 15.7085 17.2793 14.0749 17.0024C12.1816 16.6816 10.3553 16.0444 8.66822 15.0656C6.21523 13.6424 4.16878 11.596 2.7456 9.14299C1.76846 7.45878 1.10767 5.60578 0.786544 3.69262C0.515201 2.07602 1.87898 0.75 3.51819 0.75H3.81357C4.99792 0.75 6.0407 1.53025 6.37488 2.66647Z",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      });
    }
  }, {
    id: "completed-humana-enrollment",
    label: "Completed Humana enrollment",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "18",
        height: "15",
        viewBox: "0 0 18 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Completed icon"
        }), (0, t.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.1965 0.14738C6.52934 0.393931 6.5993 0.863624 6.35274 1.19647L3.01941 5.69647C2.78046 6.01905 2.32987 6.09628 1.99714 5.87168L0.330471 4.74668C-0.0128492 4.51494 -0.103302 4.04876 0.128439 3.70544C0.36018 3.36212 0.82636 3.27167 1.16968 3.50341L2.24136 4.22679L5.14741 0.303627C5.39396 -0.0292173 5.86365 -0.0991716 6.1965 0.14738ZM8.00008 3.25005C8.00008 2.83583 8.33586 2.50005 8.75008 2.50005H17.2501C17.6643 2.50005 18.0001 2.83583 18.0001 3.25005C18.0001 3.66426 17.6643 4.00005 17.2501 4.00005H8.75008C8.33586 4.00005 8.00008 3.66426 8.00008 3.25005ZM6.1965 9.14738C6.52934 9.39393 6.5993 9.86362 6.35274 10.1965L3.01941 14.6965C2.78046 15.0191 2.32987 15.0963 1.99714 14.8717L0.330471 13.7467C-0.0128492 13.5149 -0.103302 13.0488 0.128439 12.7054C0.36018 12.3621 0.82636 12.2717 1.16968 12.5034L2.24136 13.2268L5.14741 9.30363C5.39396 8.97078 5.86365 8.90083 6.1965 9.14738ZM8.00008 11.75C8.00008 11.3358 8.33586 11 8.75008 11H17.2501C17.6643 11 18.0001 11.3358 18.0001 11.75C18.0001 12.1643 17.6643 12.5 17.2501 12.5H8.75008C8.33586 12.5 8.00008 12.1643 8.00008 11.75Z",
          fill: "white"
        })]
      });
    }
  }, {
    id: "closed-the-books-for-march",
    label: "Closed the books for March",
    icon: function () {
      return (0, t.jsxs)("svg", {
        width: "17",
        height: "19",
        viewBox: "0 0 17 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("title", {
          children: "Closed book icon"
        }), (0, t.jsx)("path", {
          d: "M5.25 0.75H3.75C2.09315 0.75 0.75 2.09315 0.75 3.75V15.25C0.75 16.9069 2.09315 18.25 3.75 18.25H5.25M5.25 0.75H13.25C14.9069 0.75 16.25 2.09315 16.25 3.75V15.25C16.25 16.9069 14.9069 18.25 13.25 18.25H5.25M5.25 0.75V18.25M9.25 5.25H12.25M9.25 9.25H12.25",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })]
      });
    }
  }];
  function u({
    className: e
  }) {
    let s = (0, n.useRef)(null),
      c = new o(x, 2500),
      h = null,
      m = 0,
      f = null,
      p = [];
    function x() {
      f && 0 !== p.length && (l.default.fromTo(f, {
        yPercent: 100
      }, {
        yPercent: 0,
        autoAlpha: 1,
        duration: a.DURATION.slow,
        ease: a.EASE_OUT
      }), h && l.default.fromTo(h, {
        yPercent: 0
      }, {
        yPercent: -100,
        duration: a.DURATION.slow,
        ease: a.EASE_OUT
      }), ++m >= p.length && (m = 0), h = f, f = p[m] ?? null);
    }
    return (0, r.useGSAP)(() => {
      if (!((p = l.default.utils.toArray("[data-task-item]", s.current)).length <= 1)) return f = p[0], l.default.set(p, {
        yPercent: 100,
        autoAlpha: 0
      }), c.start(), x(), () => {
        c.stop();
      };
    }, []), (0, t.jsx)("div", {
      ref: s,
      className: (0, i.default)("relative h-[3rem] w-full overflow-hidden", e),
      "aria-live": "polite",
      children: d.map(e => (0, t.jsx)("div", {
        "data-task-item": !0,
        className: (0, i.default)("absolute inset-0 flex h-[3rem] items-center justify-center whitespace-nowrap opacity-0"),
        children: (0, t.jsxs)("p", {
          className: (0, i.default)("flex items-center justify-center gap-2 text-body-md text-text-white opacity-[0.7]"),
          children: [(0, t.jsx)("span", {
            className: (0, i.default)("display-inline mr-[0.3rem]"),
            children: e.icon ? (0, t.jsx)(e.icon, {}) : null
          }), e.label]
        })
      }, e.id))
    });
  }
  e.i(428044);
  var h = e.i(276522),
    m = e.i(816027),
    f = e.i(41049),
    p = e.i(22493),
    x = e.i(726215);
  function v({
    videoSrc: e,
    className: l,
    isZoomed: s,
    posterSrc: n
  }) {
    return (0, t.jsxs)("div", {
      className: (0, i.default)("flex justify-center items-center", "w-full h-full", "bg-surface-primary", "transition-[clip-path] duration-1000 ease-out-quint", s ? "clip-inset-collapsed" : "clip-inset-full", l),
      children: [(0, t.jsx)(x.default, {
        alt: "Hero video cover image",
        src: n,
        fill: !0,
        priority: !0,
        fetchPriority: "high",
        "aria-hidden": !0,
        className: (0, i.default)("[contain:layout_paint] [will-change:clip-path]", "inline-block overflow-hidden transform-gpu", "w-full h-full object-cover -z-10")
      }), (0, t.jsx)("video", {
        src: e,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        className: (0, i.default)("[contain:layout_paint] [will-change:clip-path]", "inline-block overflow-hidden transform-gpu", "w-full h-full object-cover relative z-[1]")
      })]
    });
  }
  e.s(["Hero", 0, function ({
    className: e
  }) {
    let r = (0, n.useRef)(null),
      [a, o] = (0, n.useState)(!1),
      c = (0, p.useIsCustomer)(),
      {
        setBgTheme: d
      } = (0, h.useNav)();
    return (0, n.useEffect)(() => {
      let e = l.default.context(() => {
        let e = () => {
            if (r.current) {
              let e = r.current.querySelector("video");
              e && e.play().catch(() => {});
            }
            d("dark");
          },
          t = () => {
            if (r.current) {
              let e = r.current.querySelector("video");
              e && e.pause();
            }
            d("light");
          },
          i = s.ScrollTrigger.create({
            trigger: r.current,
            start: "top top",
            end: "bottom top",
            invalidateOnRefresh: !0,
            onEnter: e,
            onEnterBack: e,
            onLeave: t
          }),
          n = i.scroll();
        n >= i.start && n < i.end ? e() : t(), l.default.to(r.current, {
          scrollTrigger: {
            start: 100,
            invalidateOnRefresh: !0,
            onEnter: () => {
              o(!0);
            },
            onEnterBack: () => {
              o(!0);
            },
            onLeaveBack: () => {
              o(!1);
            },
            onLeave: () => {
              o(!1);
            }
          }
        });
      });
      return () => e.revert();
    }, [d]), (0, t.jsxs)("section", {
      ref: r,
      "aria-label": "Hero section",
      className: (0, i.default)("relative flex justify-center items-center", "w-screen h-svh", e),
      children: [(0, t.jsx)(v, {
        videoSrc: `${f.ASSETS_URL}/hero/hero.mp4`,
        posterSrc: `${f.ASSETS_URL}/hero/hero-cover-a27631dc-5a4b-4521-aaf0-eed19c9c2be6.jpg`,
        isZoomed: a,
        className: (0, i.default)("absolute h-full w-full", "object-cover", "desktop:w-full desktop:h-full")
      }), (0, t.jsxs)("div", {
        className: (0, i.default)("relative flex flex-col justify-center items-center"),
        children: [(0, t.jsxs)("h1", {
          className: (0, i.default)("text-heading-xl text-center", "text-text-white", "mb-[4rem]"),
          children: ["You’re a doctor.", (0, t.jsx)("br", {}), (0, t.jsx)("span", {
            className: "italic",
            children: "Not a machine."
          })]
        }), (0, t.jsx)("p", {
          className: (0, i.default)("text-body-md text-center", "text-text-white mb-[0.8rem]"),
          children: "Let Lassie do your admin"
        }), (0, t.jsx)(u, {})]
      }), !c && (0, t.jsx)("div", {
        className: (0, i.default)("absolute bottom-[1.6rem]", "transition-transform duration-500 ease-out", a ? "-translate-y-[50px]" : "translate-y-0"),
        children: (0, t.jsx)(m.SignUp, {
          className: (0, i.default)()
        })
      })]
    });
  }], 826985);
};
