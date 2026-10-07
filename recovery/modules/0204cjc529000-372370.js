// Recovered from 0204cjc529000.js. Runtime module IDs: 372370.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["updateQuadBounds", 0, function (e, t, i) {
    let {
        width: s,
        height: r
      } = i.orig,
      n = i.trim;
    if (n) {
      let i = n.width,
        h = n.height;
      e.minX = n.x - t._x * s, e.maxX = e.minX + i, e.minY = n.y - t._y * r, e.maxY = e.minY + h;
    } else e.minX = -t._x * s, e.maxX = e.minX + s, e.minY = -t._y * r, e.maxY = e.minY + r;
  }]);
};
