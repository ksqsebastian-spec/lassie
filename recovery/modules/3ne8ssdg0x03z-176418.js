// Recovered from 3ne8ssdg0x03z.js. Runtime module IDs: 176418.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(513679),
    r = e.i(983871);
  let n = "u" > typeof document ? t.useLayoutEffect : t.useEffect,
    o = e => e && !Array.isArray(e) && "object" == typeof e,
    l = [],
    a = {},
    u = r.default,
    i = (e, r = l) => {
      let i = a;
      o(e) ? (i = e, e = null, r = "dependencies" in i ? i.dependencies : l) : o(r) && (r = "dependencies" in (i = r) ? i.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
      let {
          scope: s,
          revertOnUpdate: c
        } = i,
        f = (0, t.useRef)(!1),
        d = (0, t.useRef)(u.context(() => {}, s)),
        p = (0, t.useRef)(e => d.current.add(null, e)),
        h = r && r.length && !c;
      return h && n(() => (f.current = !0, () => d.current.revert()), l), n(() => {
        if (e && d.current.add(e, s), !h || !f.current) return () => d.current.revert();
      }, r), {
        context: d.current,
        contextSafe: p.current
      };
    };
  i.register = e => {
    u = e;
  }, i.headless = !0, e.s(["useGSAP", 0, i]);
};
