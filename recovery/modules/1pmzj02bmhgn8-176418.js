// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 176418.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(513679),
    i = e.i(983871);
  let r = "u" > typeof document ? t.useLayoutEffect : t.useEffect,
    o = e => e && !Array.isArray(e) && "object" == typeof e,
    n = [],
    s = {},
    l = i.default,
    a = (e, i = n) => {
      let a = s;
      o(e) ? (a = e, e = null, i = "dependencies" in a ? a.dependencies : n) : o(i) && (i = "dependencies" in (a = i) ? a.dependencies : n), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
      let {
          scope: u,
          revertOnUpdate: c
        } = a,
        h = (0, t.useRef)(!1),
        d = (0, t.useRef)(l.context(() => {}, u)),
        p = (0, t.useRef)(e => d.current.add(null, e)),
        f = i && i.length && !c;
      return f && r(() => (h.current = !0, () => d.current.revert()), n), r(() => {
        if (e && d.current.add(e, u), !f || !h.current) return () => d.current.revert();
      }, i), {
        context: d.current,
        contextSafe: p.current
      };
    };
  a.register = e => {
    l = e;
  }, a.headless = !0, e.s(["useGSAP", 0, a]);
};
