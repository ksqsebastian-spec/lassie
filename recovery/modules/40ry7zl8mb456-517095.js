// Recovered from 40ry7zl8mb456.js. Runtime module IDs: 517095.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var s = e.i(281889),
    t = e.i(513679);
  e.i(265121);
  var r = e.i(279206);
  e.s(["default", 0, function ({
    error: e
  }) {
    return (0, t.useEffect)(() => {
      console.error(e);
    }, [e]), (0, s.jsx)("div", {
      className: "min-h-screen flex items-center justify-center pt-0",
      children: (0, s.jsxs)("main", {
        className: "flex flex-col items-center max-w-[65rem]",
        children: [(0, s.jsx)("img", {
          src: "/images/lassie_symbol.png",
          alt: "Lassie Symbol",
          className: "w-[31.5rem] mix-blend-multiply select-none",
          draggable: !1
        }), (0, s.jsxs)("div", {
          className: "flex flex-col items-center gap-[2.4rem] mb-[2.4rem] desktop:mb-[4rem]",
          children: [(0, s.jsx)("h1", {
            className: "text-heading-lg text-center text-balance",
            children: "Lassie got lost"
          }), (0, s.jsx)("p", {
            className: "text-body-md text-center text-pretty",
            children: "Try refreshing the page"
          })]
        }), (0, s.jsx)(r.ButtonPrimary, {
          theme: "secondary",
          as: "a",
          href: "/",
          children: "Return home"
        })]
      })
    });
  }]);
};
