// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 403976.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(153594);
  let r = {};
  e.s(["getBatchSamplersUniformGroup", 0, function (e) {
    let i = r[e];
    if (i) return i;
    let n = new Int32Array(e);
    for (let t = 0; t < e; t++) n[t] = t;
    return r[e] = new t.UniformGroup({
      uTextures: {
        value: n,
        type: "i32",
        size: e
      }
    }, {
      isStatic: !0
    });
  }]);
};
