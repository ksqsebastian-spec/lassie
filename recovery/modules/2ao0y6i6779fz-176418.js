// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 176418.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(513679),
    r = e.i(983871);
  let n = "u" > typeof document ? t.useLayoutEffect : t.useEffect,
    a = e => e && !Array.isArray(e) && "object" == typeof e,
    l = [],
    o = {},
    s = r.default,
    i = (e, r = l) => {
      let i = o;
      a(e) ? (i = e, e = null, r = "dependencies" in i ? i.dependencies : l) : a(r) && (r = "dependencies" in (i = r) ? i.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
      let {
          scope: u,
          revertOnUpdate: c
        } = i,
        d = (0, t.useRef)(!1),
        f = (0, t.useRef)(s.context(() => {}, u)),
        m = (0, t.useRef)(e => f.current.add(null, e)),
        p = r && r.length && !c;
      return p && n(() => (d.current = !0, () => f.current.revert()), l), n(() => {
        if (e && f.current.add(e, u), !p || !d.current) return () => f.current.revert();
      }, r), {
        context: f.current,
        contextSafe: m.current
      };
    };
  i.register = e => {
    s = e;
  }, i.headless = !0, e.s(["useGSAP", 0, i]);
};
