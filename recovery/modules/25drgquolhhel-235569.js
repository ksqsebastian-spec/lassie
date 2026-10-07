// Recovered from 25drgquolhhel.js. Runtime module IDs: 235569.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = Object.create(null),
    i = Object.create(null);
  t.s(["createIdFromString", 0, function (t, s) {
    let r = i[t];
    return void 0 === r && (void 0 === e[s] && (e[s] = 1), i[t] = r = e[s]++), r;
  }]);
};
