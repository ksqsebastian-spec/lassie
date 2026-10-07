// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 666258.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(175444),
    r = e.i(337654);
  let i = {};
  e.s(["getTextureBatchBindGroup", 0, function (e, n, s) {
    let a = 0x811c9dc5;
    for (let t = 0; t < n; t++) a ^= e[t].uid, a = Math.imul(a, 0x1000193) >>> 0;
    return i[a] || function (e, n, s, a) {
      let o = {},
        u = 0;
      for (let t = 0; t < a; t++) {
        let i = t < n ? e[t] : r.Texture.EMPTY.source;
        o[u++] = i.source, o[u++] = i.style;
      }
      let l = new t.BindGroup(o);
      return i[s] = l, l;
    }(e, n, a, s);
  }]);
};
