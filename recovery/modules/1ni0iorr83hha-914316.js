// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 914316.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(164811),
    i = e.i(389474),
    a = e.i(449752),
    n = e.i(337654),
    s = e.i(997125),
    o = e.i(414205),
    l = e.i(625533),
    u = e.i(419905),
    d = e.i(336966),
    h = e.i(967030),
    c = e.i(12746);
  let f = new i.Matrix(),
    p = new i.Matrix(),
    m = new i.Matrix(),
    v = new i.Matrix();
  function x(e, t) {
    switch (t.type) {
      case "rectangle":
        e.rect(t.x, t.y, t.width, t.height);
        break;
      case "roundedRectangle":
        var r, i, a, n, s;
        r = t.x, i = t.y, a = t.width, n = t.height, s = Math.max(0, Math.min(s = t.radius, Math.min(a, n) / 2)), e.moveTo(r + s, i), e.lineTo(r + a - s, i), e.quadraticCurveTo(r + a, i, r + a, i + s), e.lineTo(r + a, i + n - s), e.quadraticCurveTo(r + a, i + n, r + a - s, i + n), e.lineTo(r + s, i + n), e.quadraticCurveTo(r, i + n, r, i + n - s), e.lineTo(r, i + s), e.quadraticCurveTo(r, i, r + s, i);
        break;
      case "circle":
        e.arc(t.x, t.y, t.radius, 0, 2 * Math.PI);
        break;
      case "ellipse":
        e.ellipse ? e.ellipse(t.x, t.y, t.halfWidth, t.halfHeight, 0, 0, 2 * Math.PI) : (e.save(), e.translate(t.x, t.y), e.scale(t.halfWidth, t.halfHeight), e.arc(0, 0, 1, 0, 2 * Math.PI), e.restore());
        break;
      case "triangle":
        e.moveTo(t.x, t.y), e.lineTo(t.x2, t.y2), e.lineTo(t.x3, t.y3), e.closePath();
        break;
      default:
        {
          let r = t.points;
          if (!r?.length) break;
          e.moveTo(r[0], r[1]);
          for (let t = 2; t < r.length; t += 2) e.lineTo(r[t], r[t + 1]);
          t.closePath && e.closePath();
        }
    }
  }
  class g {
    constructor() {
      this.shader = null;
    }
    contextChange(e) {}
    execute(e, t) {
      let i = e.renderer,
        g = i.canvasContext,
        y = g.activeContext,
        b = t.groupTransform,
        T = i.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
        _ = t.groupColorAlpha,
        C = (T >>> 24 & 255) / 255 * ((_ >>> 24 & 255) / 255) * (i.filter?.alphaMultiplier ?? 1);
      if (C <= 0) return;
      let S = (0, s.bgr2rgb)((0, o.multiplyHexColors)(0xffffff & _, 0xffffff & T)),
        w = i._roundPixels | t._roundPixels;
      y.save(), g.setContextTransform(b, 1 === w), g.setBlendMode(t.groupBlendMode);
      let M = t.context.instructions;
      for (let e = 0; e < M.length; e++) {
        let t = M[e];
        if ("texture" === t.action) {
          let e = t.data,
            i = e.image,
            n = i ? a.canvasUtils.getCanvasSource(i) : null;
          if (!n) continue;
          let s = e.alpha * C;
          if (s <= 0) continue;
          let l = (0, o.multiplyHexColors)(e.style, S);
          y.globalAlpha = s;
          let u = n;
          0xffffff !== l && (u = a.canvasUtils.getTintedCanvas({
            texture: i
          }, l));
          let d = i.frame,
            h = i.source._resolution ?? i.source.resolution ?? 1,
            c = d.x * h,
            p = d.y * h,
            m = d.width * h,
            v = d.height * h;
          u !== n && (c = 0, p = 0);
          let x = e.transform,
            T = x && !x.isIdentity(),
            _ = i.rotate;
          T || _ ? (f.copyFrom(b), T && f.append(x), _ && r.groupD8.matrixAppendRotationInv(f, _, e.dx, e.dy, e.dw, e.dh), g.setContextTransform(f, 1 === w)) : g.setContextTransform(b, 1 === w), y.drawImage(u, c, p, u === n ? m : u.width, u === n ? v : u.height, _ ? 0 : e.dx, _ ? 0 : e.dy, e.dw, e.dh), (T || _) && g.setContextTransform(b, 1 === w);
          continue;
        }
        let i = t.data,
          s = i?.path?.shapePath;
        if (!s?.shapePrimitives?.length) continue;
        let T = i.style,
          _ = (0, o.multiplyHexColors)(T.color, S),
          P = T.alpha * C;
        if (P <= 0) continue;
        let k = "stroke" === t.action;
        y.globalAlpha = P, k && (y.lineWidth = T.width, y.lineCap = T.cap, y.lineJoin = T.join, y.miterLimit = T.miterLimit);
        let F = s.shapePrimitives;
        !k && i.hole?.shapePath?.shapePrimitives?.length && (F[F.length - 1].holes = i.hole.shapePath.shapePrimitives);
        for (let e = 0; e < F.length; e++) {
          let t = F[e];
          if (!t?.shape) continue;
          let r = t.transform,
            i = r && !r.isIdentity(),
            s = T.texture && T.texture !== n.Texture.WHITE,
            o = "global" === T.textureSpace ? r : null,
            f = s ? (0, c.generateTextureMatrix)(p, T, t.shape, o) : null,
            g = function (e, t, r, i) {
              let s = e.fill;
              if (s instanceof u.FillGradient) {
                s.buildGradient();
                let n = s.texture;
                if (n) {
                  let o = a.canvasUtils.getTintedPattern(n, t),
                    l = r ? v.copyFrom(r).scale(n.source.pixelWidth, n.source.pixelHeight) : v.copyFrom(s.transform);
                  return i && !e.textureSpace && l.append(i), a.canvasUtils.applyPatternTransform(o, l), o;
                }
              }
              if (s instanceof d.FillPattern) {
                let e = a.canvasUtils.getTintedPattern(s.texture, t);
                return a.canvasUtils.applyPatternTransform(e, s.transform, !1), e;
              }
              let o = e.texture;
              if (o && o !== n.Texture.WHITE) {
                if (!o.source.resource) return "#808080";
                let i = a.canvasUtils.getTintedPattern(o, t),
                  n = r ? v.copyFrom(r).scale(o.source.pixelWidth, o.source.pixelHeight) : e.matrix;
                return a.canvasUtils.applyPatternTransform(i, n), i;
              }
              return `#${(0xffffff & t).toString(16).padStart(6, "0")}`;
            }(T, _, f, i ? m.copyFrom(b).append(r) : b);
          if (i && (y.save(), y.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), k) {
            if (.5 === T.alignment || T.pixelLine) y.strokeStyle = g, y.beginPath(), x(y, t.shape), y.stroke();else {
              let e = [],
                r = [],
                i = [],
                a = h.shapeBuilders[t.shape.type];
              if (a?.build(t.shape, e)) {
                let a = t.shape.closePath ?? !0;
                (0, l.buildLine)(e, T, !1, a, r, i), y.fillStyle = g;
                y.beginPath();
                for (let e = 0; e < i.length; e += 3) {
                  let t = 2 * i[e],
                    a = 2 * i[e + 1],
                    n = 2 * i[e + 2];
                  y.moveTo(r[t], r[t + 1]), y.lineTo(r[a], r[a + 1]), y.lineTo(r[n], r[n + 1]), y.closePath();
                }
                y.fill();
              } else y.strokeStyle = g, y.beginPath(), x(y, t.shape), y.stroke();
            }
          } else y.fillStyle = g, y.beginPath(), x(y, t.shape), function (e, t) {
            if (!t?.length) return !1;
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              if (!i?.shape) continue;
              let a = i.transform,
                n = a && !a.isIdentity();
              n && (e.save(), e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)), x(e, i.shape), n && e.restore();
            }
            return !0;
          }(y, t.holes) ? y.fill("evenodd") : y.fill();
          i && y.restore();
        }
      }
      y.restore();
    }
    destroy() {
      this.shader = null;
    }
  }
  g.extension = {
    type: [t.ExtensionType.CanvasPipesAdaptor],
    name: "graphics"
  }, e.s(["CanvasGraphicsAdaptor", 0, g]);
};
