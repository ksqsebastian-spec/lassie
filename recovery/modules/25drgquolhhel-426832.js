// Recovered from 25drgquolhhel.js. Runtime module IDs: 426832.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e;
  var i = t.i(787653);
  t.s(["getTestContext", 0, function () {
    return (!e || e?.isContextLost()) && (e = i.DOMAdapter.get().createCanvas().getContext("webgl", {})), e;
  }]);
};
