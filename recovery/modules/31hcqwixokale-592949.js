// Recovered from 31hcqwixokale.js. Runtime module IDs: 592949.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(638327),
    i = e.i(809393),
    n = e.i(607198),
    a = e.i(513679),
    o = e.i(176418),
    l = e.i(983871),
    s = e.i(726215),
    u = e.i(41049),
    d = e.i(990055);
  function c() {
    let e = (0, a.useRef)([]),
      r = (0, a.useRef)(null),
      s = (0, a.useRef)(null),
      c = (0, a.useRef)(null),
      g = (0, a.useRef)(!1),
      p = [{
        fromAngle: -10,
        width: 81,
        height: 102,
        angle: 50,
        offsetX: 0,
        offsetY: 0,
        color: "red",
        alt: "A framed artwork of a toothbrush in a blue cup against a yellow background, hanging on a wall with a fire alarm and a portion of a colorful room visible.",
        src: `${u.ASSETS_URL}/community/1-df8b5d96-1e0c-4c25-a3ed-9c9468cd9ece.jpg`
      }, {
        fromAngle: 40,
        width: 127,
        height: 98,
        angle: 140,
        offsetX: -20,
        offsetY: -40,
        color: "orange",
        alt: "Office supplies neatly organized on a desk include a tape dispenser, pens in a holder, and labeled blue folders in wire racks, creating an orderly workspace.",
        src: `${u.ASSETS_URL}/community/2-65b3edad-8268-41f5-a281-deba4f06e12f.jpg`
      }, {
        fromAngle: 100,
        width: 97,
        height: 99,
        angle: 150,
        offsetX: 15,
        offsetY: 20,
        color: "yellow",
        alt: 'A blue sticky note with handwritten text saying "How can I brighten your day? :)" is attached to a Dell monitor, conveying a positive and friendly tone.',
        src: `${u.ASSETS_URL}/community/3-47c96f44-efef-4113-ada5-e38e192010b0.jpg`
      }, {
        fromAngle: 130,
        width: 123,
        height: 119,
        angle: 230,
        offsetX: 40,
        offsetY: 0,
        color: "green",
        alt: "A person in navy scrubs stands smiling against a large tree, bathed in warm sunlight. The background features lush greenery, conveying a serene mood.",
        src: `${u.ASSETS_URL}/community/4-cf1c47ea-d2a4-4a33-b93b-ae41639d2a57.jpg`
      }, {
        fromAngle: 200,
        width: 122,
        height: 86,
        angle: 240,
        offsetX: 30,
        offsetY: 40,
        color: "blue",
        alt: "Framed medical diplomas and certificates displayed on a wall, reflecting professional achievements and qualifications in a clinical setting.",
        src: `${u.ASSETS_URL}/community/5-812034c4-2b9e-4024-ac72-a3525f516ef1.jpg`
      }, {
        fromAngle: 200,
        width: 133,
        height: 85,
        angle: 300,
        offsetX: -45,
        offsetY: 40,
        color: "purple",
        alt: 'An open orange notebook with sticky notes, one reads "doghouse 123" and another "Medical supplies." Nearby are a white case and a red pen, suggesting organization.',
        src: `${u.ASSETS_URL}/community/6-5b195c2c-8b53-4359-b383-b73a7d401374.jpg`
      }, {
        fromAngle: 260,
        width: 110,
        height: 122,
        angle: 310,
        offsetX: -50,
        offsetY: 0,
        color: "grey",
        alt: "A smiling dental professional in black scrubs talks reassuringly to a relaxed child in a dental chair, creating a warm, friendly atmosphere.",
        src: `${u.ASSETS_URL}/community/7-61b76151-5912-4e42-8eb4-5a779dff7f1d.jpg`
      }, {
        fromAngle: -60,
        width: 126,
        height: 100,
        angle: 40,
        offsetX: -30,
        offsetY: 0,
        color: "black",
        alt: "A person in scrubs with red glasses joyfully twists a green balloon animal in an office. A colorful art piece and a keyboard are in the background.",
        src: `${u.ASSETS_URL}/community/8-efc7b051-fd81-4dd0-84a6-9b98f3f67e8c.jpg`
      }],
      h = {
        radiusX: 0,
        radiusY: 0,
        animateScale: !0
      };
    function b() {
      s.current && (g.current = !0, s.current.scrollTrigger?.kill(), s.current.revert(), s.current = null, g.current = !1);
    }
    function v() {
      if (g.current) return;
      let t = s.current?.progress() ?? 0;
      e.current.forEach((e, r) => {
        if (!e) return;
        let i = e.querySelector("img"),
          n = Math.min(1, 2 * t),
          a = p[r].offsetX - p[r].width / 2 + Math.cos(m(p[r].angle - 180)) * h.radiusX,
          o = p[r].offsetY - p[r].height / 2 + Math.sin(m(p[r].angle - 180)) * h.radiusY;
        e.style.transform = `translate(${a}px, ${o}px) scale(${n})`, e.style.scale = "1", e.style.opacity = "1", i && h.animateScale && (i.style.transform = `scale(${Math.max(1, 2 - t)})`);
      });
    }
    function w({
      mobile: e
    }) {
      h.animateScale = !e, b(), h.radiusX = .3 * window.innerWidth, h.radiusY = .3 * window.innerHeight;
      let t = l.default.timeline({
        paused: !0,
        scrollTrigger: {
          trigger: "#community",
          start: "top bottom",
          end: () => window.innerWidth >= d.BREAKPOINTS.desktop ? `+=${3 * window.innerHeight}` : `+=${1.2 * window.innerHeight}`,
          scrub: !0,
          invalidateOnRefresh: !0,
          onUpdate: () => v()
        }
      });
      s.current = t, p.forEach(e => {
        t.fromTo(e, {
          angle: e.fromAngle
        }, {
          angle: e.angle
        }, 0);
      }), t.fromTo(h, {
        radiusX: () => .3 * window.innerWidth,
        radiusY: () => .3 * window.innerHeight
      }, {
        radiusX: () => .4 * window.innerWidth,
        radiusY: () => .4 * window.innerHeight
      }, 0), requestAnimationFrame(() => n.ScrollTrigger.refresh());
    }
    return (0, o.useGSAP)(() => {
      let t = l.default.matchMedia();
      t.add(`(max-width: ${d.BREAKPOINTS.desktop - 1}px)`, () => (w({
        mobile: !0
      }), c.current?.kill(), c.current = null, () => {
        b();
      })), t.add(`(min-width: ${d.BREAKPOINTS.desktop}px)`, () => (w({
        mobile: !1
      }), c.current = n.ScrollTrigger.create({
        trigger: "#community",
        start: "top top",
        end: () => `+=${2.5 * window.innerHeight}`,
        pin: !0,
        invalidateOnRefresh: !0
      }), () => {
        c.current?.kill(), c.current = null, b();
      }));
      let r = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            v();
          }), v();
        });
      };
      return window.addEventListener("resize", r), () => {
        window.removeEventListener("resize", r), c && (c.current?.kill(), c.current = null), e.current.forEach(e => {
          let t = e?.querySelector("img");
          t && (t.style.transform = ""), e && (e.style.transform = "", e.style.scale = "");
        });
      };
    }, []), (0, t.jsx)("section", {
      ref: r,
      className: (0, i.default)("absolute top-[4rem] tablet:top-[4rem] desktop:top-0 h-svh w-full pointer-events-none"),
      children: p.map((r, i) => (0, t.jsx)(f, {
        width: r.width,
        color: r.color,
        src: r.src,
        ref: t => {
          e.current[i] = t;
        },
        className: "opacity-0",
        height: r.height
      }, `${r.width}-${r.height}-${i}`))
    });
  }
  function f({
    width: e,
    height: r,
    color: n,
    ref: a,
    src: o,
    className: l
  }) {
    return (0, t.jsx)("div", {
      ref: a,
      className: (0, i.default)("absolute scale-0 top-1/2 left-1/2", l),
      style: {
        width: e,
        height: r
      },
      children: (0, t.jsx)("div", {
        className: (0, i.default)("tablet:scale-150", "desktop:scale-[1.9] relative overflow-hidden w-full h-full rounded-[1.2rem] tablet:rounded-[1.6rem] "),
        children: (0, t.jsx)(s.default, {
          className: (0, i.default)("w-full h-full object-cover"),
          src: o,
          fill: !0,
          sizes: "(min-width: 1280px) 253px, (min-width: 768px) 200px, 133px",
          quality: 90,
          alt: "Doctor shot"
        })
      })
    });
  }
  function m(e) {
    return e * Math.PI / 180;
  }
  e.s(["Community", 0, function () {
    let [e, o] = (0, a.useState)(null),
      l = (0, a.useRef)(null);
    return (0, a.useLayoutEffect)(() => {
      if (!e || !l.current) return;
      (() => {
        if (!e) return;
        let t = () => {
          e.currentFrame >= 24 && (e.pause(), e.removeEventListener("frame", t));
        };
        e.addEventListener("frame", t);
      })();
      let t = null,
        r = n.ScrollTrigger.create({
          trigger: l.current,
          start: "top 80%",
          once: !0,
          invalidateOnRefresh: !0,
          onEnter: () => {
            let r;
            r = () => {
              e.setFrame(0), e.play();
            }, e.isLoaded ? r() : (t = () => {
              r(), t && (e.removeEventListener("load", t), t = null);
            }, e.addEventListener("load", t));
          }
        });
      return () => {
        t && e.removeEventListener("load", t), r.kill();
      };
    }, [e]), (0, t.jsxs)("section", {
      ref: l,
      id: "community",
      className: (0, i.default)("desktop:mb-[12rem] w-full h-svh flex flex-col justify-center items-center relative"),
      children: [(0, t.jsx)("span", {
        className: (0, i.default)("w-[24rem] tablet:w-[32rem] inline-block mb-[2.5rem] desktop:mb-[0rem] tablet:mt-[-2rem]"),
        children: (0, t.jsx)(r.DotLottieReact, {
          src: "/lottie/flower.lottie",
          className: "w-full h-auto",
          animationId: "intro",
          loop: !1,
          autoplay: !1,
          renderConfig: {
            autoResize: !0
          },
          dotLottieRefCallback: o
        })
      }), (0, t.jsxs)("h2", {
        className: (0, i.default)("text-heading-lg text-text-primary text-center w-[90%] tablet:w-[84%] [font-variant-ligatures:common-ligatures] tracking-[initial]"),
        children: ["Lassie is already trusted by", (0, t.jsx)("br", {}), "700+ doctors’ offices", (0, t.jsx)("br", {}), "across the country"]
      }), (0, t.jsx)(c, {})]
    });
  }], 592949);
};
