// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 149034.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["color32BitToUniform", 0, function (e, t, r) {
    let i = (e >> 24 & 255) / 255;
    t[r++] = (255 & e) / 255 * i, t[r++] = (e >> 8 & 255) / 255 * i, t[r++] = (e >> 16 & 255) / 255 * i, t[r++] = i;
  }, "colorToUniform", 0, function (e, t, r, i) {
    r[i++] = (e >> 16 & 255) / 255, r[i++] = (e >> 8 & 255) / 255, r[i++] = (255 & e) / 255, r[i++] = t;
  }]);
};
