// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 233628.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(454881);
  e.s(["useSyncRef", 0, function (e, n) {
    (0, t.useLayoutEffect)(() => {
      if (e && e.ref && n) return e.ref.current = n.current, () => {
        e.ref && (e.ref.current = null);
      };
    });
  }]);
};
