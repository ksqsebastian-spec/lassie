// Recovered from 25drgquolhhel.js. Runtime module IDs: 733705.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = {
    default: -1
  };
  t.s(["resetUids", 0, function () {
    for (let t in e) delete e[t];
  }, "uid", 0, function (t = "default") {
    return void 0 === e[t] && (e[t] = -1), ++e[t];
  }]);
};
