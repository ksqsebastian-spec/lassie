// Recovered from 25drgquolhhel.js. Runtime module IDs: 562140.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = 0;
  t.s(["warn", 0, function (...t) {
    500 !== e && (500 == ++e ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...t));
  }]);
};
