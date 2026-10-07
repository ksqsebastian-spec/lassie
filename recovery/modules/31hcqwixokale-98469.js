// Recovered from 31hcqwixokale.js. Runtime module IDs: 98469.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    i = e.i(513679);
  e.i(428044);
  var n = e.i(276522);
  e.s(["CompanyHeader", 0, function () {
    let {
      setBgTheme: e
    } = (0, n.useNav)();
    return (0, i.useEffect)(() => {
      e("light");
    }, [e]), (0, t.jsxs)("section", {
      id: "company-title",
      className: "w-screen h-svh flex justify-center items-center flex-col",
      children: [(0, t.jsxs)("h1", {
        className: (0, r.default)("flex items-center justify-center flex-col", "desktop:flex-row text-heading-xl text-center mb-[2.4rem] tablet:mb-[3.2rem] desktop:mb-[4rem] [font-variant-ligatures:common-ligatures] tracking-[initial]"),
        children: ["Reimagining the", (0, t.jsx)("br", {}), "doctor’s office."]
      }), (0, t.jsx)("h3", {
        className: "text-heading-md",
        children: "And beyond."
      })]
    });
  }]);
};
