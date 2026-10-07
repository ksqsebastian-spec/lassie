// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 29402.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889);
  e.i(265121);
  var r = e.i(279206),
    n = e.i(196019),
    a = e.i(250705),
    l = e.i(276522);
  function o({
    children: e
  }) {
    return (0, t.jsxs)(l.NavProvider, {
      children: [(0, t.jsx)(a.Header, {}), e]
    });
  }
  var s = e.i(91640),
    i = e.i(513679),
    u = e.i(861976),
    c = e.i(159236),
    d = e.i(546619);
  function f() {
    return (0, t.jsx)(d.default, {
      id: "gtm-head",
      strategy: "afterInteractive",
      children: `
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TWQQNQVK');
      `
    });
  }
  function m() {
    return (0, t.jsx)("noscript", {
      children: (0, t.jsx)("iframe", {
        title: "GTM",
        src: "https://www.googletagmanager.com/ns.html?id=GTM-TWQQNQVK",
        height: "0",
        width: "0",
        style: {
          display: "none",
          visibility: "hidden"
        }
      })
    });
  }
  var p = e.i(628974),
    b = e.i(373920);
  let g = {
    className: b.default.className,
    style: {
      fontFamily: "'dmSans', 'dmSans Fallback', system-ui, sans-serif"
    }
  };
  null != b.default.variable && (g.variable = b.default.variable);
  var h = e.i(988083);
  let y = {
    className: h.default.className,
    style: {
      fontFamily: "'dmMono', 'dmMono Fallback'"
    }
  };
  null != h.default.variable && (y.variable = h.default.variable);
  var v = e.i(452050);
  let j = {
    className: v.default.className,
    style: {
      fontFamily: "'abcMarist', 'abcMarist Fallback', Georgia, serif"
    }
  };
  null != v.default.variable && (j.variable = v.default.variable);
  let _ = (0, p.cn)(g.variable, y.variable, j.variable);
  function x({
    children: e,
    bodyClassName: r
  }) {
    return (0, t.jsxs)("html", {
      lang: "en",
      className: _,
      children: [(0, t.jsxs)("head", {
        children: [(0, t.jsx)(f, {}), (0, t.jsx)(s.GoogleAnalytics, {
          gaId: "G-9777D2K4WR"
        })]
      }), (0, t.jsxs)("body", {
        className: (0, p.cn)("bg-background-primary font-body antialiased", "[--lassie-hero-height:max(75vh,550px)] xl:[--lassie-hero-height:max(70vh,840px)]", r),
        children: [(0, t.jsx)(m, {}), e, (0, t.jsxs)(i.Suspense, {
          fallback: null,
          children: [(0, t.jsx)(u.ClientTracking, {}), (0, t.jsx)(c.HiringLogLazy, {})]
        })]
      })]
    });
  }
  e.s(["default", 0, function () {
    return (0, t.jsx)(x, {
      children: (0, t.jsx)(o, {
        children: (0, t.jsx)(n.PageLayout, {
          className: "flex min-h-screen items-center justify-center pt-0",
          children: (0, t.jsxs)("main", {
            className: "flex max-w-[65rem] flex-col items-center",
            children: [(0, t.jsx)("img", {
              src: "/images/lassie_symbol.png",
              alt: "Lassie Symbol",
              className: "w-[31.5rem] select-none mix-blend-multiply",
              draggable: !1
            }), (0, t.jsxs)("div", {
              className: "desktop:mb-[4rem] mb-[2.4rem] flex flex-col items-center gap-[2.4rem]",
              children: [(0, t.jsx)("h1", {
                className: "text-balance text-center text-heading-lg",
                children: "Lassie got lost"
              }), (0, t.jsx)("p", {
                className: "text-pretty text-center text-body-md",
                children: "Try refreshing the page"
              })]
            }), (0, t.jsx)(r.ButtonPrimary, {
              theme: "secondary",
              as: "a",
              href: "/",
              children: "Return home"
            })]
          })
        })
      })
    });
  }], 29402);
};
