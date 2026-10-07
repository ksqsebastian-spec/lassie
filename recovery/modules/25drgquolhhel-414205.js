// Recovered from 25drgquolhhel.js. Runtime module IDs: 414205.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["multiplyHexColors", 0, function (t, e) {
    return 0xffffff !== t && e ? 0xffffff !== e && t ? ((t >> 16 & 255) * (e >> 16 & 255) / 255 << 16) + ((t >> 8 & 255) * (e >> 8 & 255) / 255 << 8) + ((255 & t) * (255 & e) / 255 | 0) : t : e;
  }]);
};
