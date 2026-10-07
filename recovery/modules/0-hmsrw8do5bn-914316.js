// Recovered from 0-hmsrw8do5bn.js. Runtime module IDs: 914316.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    a = e.i(164811),
    r = e.i(389474),
    i = e.i(449752),
    n = e.i(337654),
    s = e.i(997125),
    o = e.i(414205),
    l = e.i(625533),
    h = e.i(419905),
    d = e.i(336966),
    c = e.i(967030),
    u = e.i(12746);
  let p = new r.Matrix(),
    g = new r.Matrix(),
    f = new r.Matrix(),
    x = new r.Matrix();
  function m(e, t) {
    switch (t.type) {
      case "rectangle":
        e.rect(t.x, t.y, t.width, t.height);
        break;
      case "roundedRectangle":
        var a, r, i, n, s;
        a = t.x, r = t.y, i = t.width, n = t.height, s = Math.max(0, Math.min(s = t.radius, Math.min(i, n) / 2)), e.moveTo(a + s, r), e.lineTo(a + i - s, r), e.quadraticCurveTo(a + i, r, a + i, r + s), e.lineTo(a + i, r + n - s), e.quadraticCurveTo(a + i, r + n, a + i - s, r + n), e.lineTo(a + s, r + n), e.quadraticCurveTo(a, r + n, a, r + n - s), e.lineTo(a, r + s), e.quadraticCurveTo(a, r, a + s, r);
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
          let a = t.points;
          if (!a?.length) break;
          e.moveTo(a[0], a[1]);
          for (let t = 2; t < a.length; t += 2) e.lineTo(a[t], a[t + 1]);
          t.closePath && e.closePath();
        }
    }
  }
  class v {
    constructor() {
      this.shader = null;
    }
    contextChange(e) {}
    execute(e, t) {
      let r = e.renderer,
        v = r.canvasContext,
        y = v.activeContext,
        C = t.groupTransform,
        T = r.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
        M = t.groupColorAlpha,
        b = (T >>> 24 & 255) / 255 * ((M >>> 24 & 255) / 255) * (r.filter?.alphaMultiplier ?? 1);
      if (b <= 0) return;
      let _ = (0, s.bgr2rgb)((0, o.multiplyHexColors)(0xffffff & M, 0xffffff & T)),
        w = r._roundPixels | t._roundPixels;
      y.save(), v.setContextTransform(C, 1 === w), v.setBlendMode(t.groupBlendMode);
      let P = t.context.instructions;
      for (let e = 0; e < P.length; e++) {
        let t = P[e];
        if ("texture" === t.action) {
          let e = t.data,
            r = e.image,
            n = r ? i.canvasUtils.getCanvasSource(r) : null;
          if (!n) continue;
          let s = e.alpha * b;
          if (s <= 0) continue;
          let l = (0, o.multiplyHexColors)(e.style, _);
          y.globalAlpha = s;
          let h = n;
          0xffffff !== l && (h = i.canvasUtils.getTintedCanvas({
            texture: r
          }, l));
          let d = r.frame,
            c = r.source._resolution ?? r.source.resolution ?? 1,
            u = d.x * c,
            g = d.y * c,
            f = d.width * c,
            x = d.height * c;
          h !== n && (u = 0, g = 0);
          let m = e.transform,
            T = m && !m.isIdentity(),
            M = r.rotate;
          T || M ? (p.copyFrom(C), T && p.append(m), M && a.groupD8.matrixAppendRotationInv(p, M, e.dx, e.dy, e.dw, e.dh), v.setContextTransform(p, 1 === w)) : v.setContextTransform(C, 1 === w), y.drawImage(h, u, g, h === n ? f : h.width, h === n ? x : h.height, M ? 0 : e.dx, M ? 0 : e.dy, e.dw, e.dh), (T || M) && v.setContextTransform(C, 1 === w);
          continue;
        }
        let r = t.data,
          s = r?.path?.shapePath;
        if (!s?.shapePrimitives?.length) continue;
        let T = r.style,
          M = (0, o.multiplyHexColors)(T.color, _),
          k = T.alpha * b;
        if (k <= 0) continue;
        let I = "stroke" === t.action;
        y.globalAlpha = k, I && (y.lineWidth = T.width, y.lineCap = T.cap, y.lineJoin = T.join, y.miterLimit = T.miterLimit);
        let S = s.shapePrimitives;
        !I && r.hole?.shapePath?.shapePrimitives?.length && (S[S.length - 1].holes = r.hole.shapePath.shapePrimitives);
        for (let e = 0; e < S.length; e++) {
          let t = S[e];
          if (!t?.shape) continue;
          let a = t.transform,
            r = a && !a.isIdentity(),
            s = T.texture && T.texture !== n.Texture.WHITE,
            o = "global" === T.textureSpace ? a : null,
            p = s ? (0, u.generateTextureMatrix)(g, T, t.shape, o) : null,
            v = function (e, t, a, r) {
              let s = e.fill;
              if (s instanceof h.FillGradient) {
                s.buildGradient();
                let n = s.texture;
                if (n) {
                  let o = i.canvasUtils.getTintedPattern(n, t),
                    l = a ? x.copyFrom(a).scale(n.source.pixelWidth, n.source.pixelHeight) : x.copyFrom(s.transform);
                  return r && !e.textureSpace && l.append(r), i.canvasUtils.applyPatternTransform(o, l), o;
                }
              }
              if (s instanceof d.FillPattern) {
                let e = i.canvasUtils.getTintedPattern(s.texture, t);
                return i.canvasUtils.applyPatternTransform(e, s.transform, !1), e;
              }
              let o = e.texture;
              if (o && o !== n.Texture.WHITE) {
                if (!o.source.resource) return "#808080";
                let r = i.canvasUtils.getTintedPattern(o, t),
                  n = a ? x.copyFrom(a).scale(o.source.pixelWidth, o.source.pixelHeight) : e.matrix;
                return i.canvasUtils.applyPatternTransform(r, n), r;
              }
              return `#${(0xffffff & t).toString(16).padStart(6, "0")}`;
            }(T, M, p, r ? f.copyFrom(C).append(a) : C);
          if (r && (y.save(), y.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)), I) {
            if (.5 === T.alignment || T.pixelLine) y.strokeStyle = v, y.beginPath(), m(y, t.shape), y.stroke();else {
              let e = [],
                a = [],
                r = [],
                i = c.shapeBuilders[t.shape.type];
              if (i?.build(t.shape, e)) {
                let i = t.shape.closePath ?? !0;
                (0, l.buildLine)(e, T, !1, i, a, r), y.fillStyle = v;
                y.beginPath();
                for (let e = 0; e < r.length; e += 3) {
                  let t = 2 * r[e],
                    i = 2 * r[e + 1],
                    n = 2 * r[e + 2];
                  y.moveTo(a[t], a[t + 1]), y.lineTo(a[i], a[i + 1]), y.lineTo(a[n], a[n + 1]), y.closePath();
                }
                y.fill();
              } else y.strokeStyle = v, y.beginPath(), m(y, t.shape), y.stroke();
            }
          } else y.fillStyle = v, y.beginPath(), m(y, t.shape), function (e, t) {
            if (!t?.length) return !1;
            for (let a = 0; a < t.length; a++) {
              let r = t[a];
              if (!r?.shape) continue;
              let i = r.transform,
                n = i && !i.isIdentity();
              n && (e.save(), e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty)), m(e, r.shape), n && e.restore();
            }
            return !0;
          }(y, t.holes) ? y.fill("evenodd") : y.fill();
          r && y.restore();
        }
      }
      y.restore();
    }
    destroy() {
      this.shader = null;
    }
  }
  v.extension = {
    type: [t.ExtensionType.CanvasPipesAdaptor],
    name: "graphics"
  }, e.s(["CanvasGraphicsAdaptor", 0, v]);
};
