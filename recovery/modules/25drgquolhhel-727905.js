// Recovered from 25drgquolhhel.js. Runtime module IDs: 727905.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = new Set(),
    i = {
      quiet: !1,
      noColor: !1
    },
    s = (t, s, r = 3) => {
      if (i.quiet || e.has(s)) return;
      let n = Error().stack,
        a = `${s}
Deprecated since v${t}`,
        h = "function" == typeof console.groupCollapsed && !i.noColor;
      void 0 === n ? console.warn("PixiJS Deprecation Warning: ", a) : (n = n.split("\n").splice(r).join("\n"), h ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", a), console.warn(n), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", a), console.warn(n))), e.add(s);
    };
  Object.defineProperties(s, {
    quiet: {
      get: () => i.quiet,
      set: t => {
        i.quiet = t;
      },
      enumerable: !0,
      configurable: !1
    },
    noColor: {
      get: () => i.noColor,
      set: t => {
        i.noColor = t;
      },
      enumerable: !0,
      configurable: !1
    }
  }), t.s(["deprecation", 0, s, "v8_0_0", 0, "8.0.0", "v8_3_4", 0, "8.3.4"]);
};
