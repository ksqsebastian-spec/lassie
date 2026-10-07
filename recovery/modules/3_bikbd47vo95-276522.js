// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 276522.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(281889),
    r = t.i(300778),
    n = t.i(513679),
    i = t.i(931804);
  let o = "/stories",
    s = (0, n.createContext)({
      collapsed: !1,
      isCustomer: !1,
      bgTheme: "light",
      isStories: !1,
      setCollapsed: () => {},
      setBgTheme: () => {}
    });
  t.s(["NavContext", 0, s, "NavProvider", 0, function ({
    children: t
  }) {
    let [u, a] = (0, n.useState)(!1),
      [c, l] = (0, n.useState)("light"),
      f = (0, r.usePathname)(),
      h = f === o || f.startsWith(`${o}/`),
      [d, p] = (0, n.useState)(!1);
    return (0, n.useEffect)(() => {
      p((0, i.getIsLassieUser)());
    }, []), (0, e.jsx)(s, {
      value: {
        collapsed: u,
        isCustomer: d,
        isStories: h,
        bgTheme: c,
        setCollapsed: a,
        setBgTheme: l
      },
      children: t
    });
  }, "useNav", 0, () => (0, n.useContext)(s)]);
};
