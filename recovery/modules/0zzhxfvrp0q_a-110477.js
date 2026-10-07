// Recovered from 0zzhxfvrp0q_a.js. Runtime module IDs: 110477.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(222735),
    i = t.i(389474),
    s = t.i(449752),
    r = t.i(337654),
    n = t.i(562140),
    l = t.i(419905),
    a = t.i(336966);
  t.s(["getCanvasFillStyle", 0, function (t, o, h, d = 0, u = 0, c = 0) {
    if (t.texture === r.Texture.WHITE && !t.fill) return e.Color.shared.setValue(t.color).setAlpha(t.alpha ?? 1).toHexa();
    if (t.fill) {
      if (t.fill instanceof a.FillPattern) {
        let e = t.fill,
          i = o.createPattern(e.texture.source.resource, "repeat");
        return s.canvasUtils.applyPatternTransform(i, e.transform, !1), i;
      } else if (t.fill instanceof l.FillGradient) {
        let i,
          s = t.fill,
          r = "linear" === s.type,
          n = "local" === s.textureSpace,
          l = 1,
          a = 1;
        n && h && (l = h.width + d, a = h.height + d);
        let p = !1;
        if (r) {
          let {
            start: t,
            end: e
          } = s;
          i = o.createLinearGradient(t.x * l + u, t.y * a + c, e.x * l + u, e.y * a + c), p = Math.abs(e.x - t.x) < Math.abs((e.y - t.y) * .1);
        } else {
          let {
            center: t,
            innerRadius: e,
            outerCenter: r,
            outerRadius: n
          } = s;
          i = o.createRadialGradient(t.x * l + u, t.y * a + c, e * l, r.x * l + u, r.y * a + c, n * l);
        }
        if (p && n && h) {
          let t = h.lineHeight / a;
          for (let r = 0; r < h.lines.length; r++) {
            let n = (r * h.lineHeight + d / 2) / a;
            s.colorStops.forEach(s => {
              let r = n + s.offset * t;
              r = Math.max(0, Math.min(1, r)), i.addColorStop(Math.floor(1e5 * r) / 1e5, e.Color.shared.setValue(s.color).toHex());
            });
          }
        } else s.colorStops.forEach(t => {
          i.addColorStop(t.offset, e.Color.shared.setValue(t.color).toHex());
        });
        return i;
      }
    } else {
      let e = o.createPattern(t.texture.source.resource, "repeat"),
        s = t.matrix.copyTo(i.Matrix.shared);
      return s.scale(t.texture.source.pixelWidth, t.texture.source.pixelHeight), e.setTransform(s), e;
    }
    return (0, n.warn)("FillStyle not recognised", t), "red";
  }]);
};
