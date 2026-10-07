// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 967030, 12746.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(78278),
    i = t.i(389474),
    r = t.i(539088),
    s = t.i(81846),
    n = t.i(955424),
    a = t.i(337654),
    l = t.i(765480),
    h = t.i(882825),
    o = t.i(930005),
    u = t.i(625533),
    c = t.i(53116),
    d = t.i(912667),
    f = t.i(816359),
    p = t.i(769047),
    x = t.i(419905);
  let y = new i.Matrix(),
    g = new r.Rectangle();
  function m(t, e, i, r) {
    let s = e.matrix ? t.copyFrom(e.matrix).invert() : t.identity();
    if ("local" === e.textureSpace) {
      let t = i.getBounds(g);
      e.width && t.pad(e.width);
      let {
          x: r,
          y: n
        } = t,
        a = 1 / t.width,
        l = 1 / t.height,
        h = -r * a,
        o = -n * l,
        u = s.a,
        c = s.b,
        d = s.c,
        f = s.d;
      s.a *= a, s.b *= a, s.c *= l, s.d *= l, s.tx = h * u + o * d + s.tx, s.ty = h * c + o * f + s.ty;
    } else s.translate(e.texture.frame.x, e.texture.frame.y), s.scale(1 / e.texture.source.width, 1 / e.texture.source.height);
    let n = e.texture.source.style;
    return e.fill instanceof x.FillGradient || "clamp-to-edge" !== n.addressMode || (n.addressMode = "repeat", n.update()), r && s.append(y.copyFrom(r).invert()), s;
  }
  t.s(["generateTextureMatrix", 0, m], 12746);
  var b = t.i(752046);
  let _ = {};
  e.extensions.handleByMap(e.ExtensionType.ShapeBuilder, _), e.extensions.add(f.buildRectangle, d.buildPolygon, p.buildTriangle, o.buildCircle, o.buildEllipse, o.buildRoundedRectangle);
  let P = new r.Rectangle(),
    v = new i.Matrix();
  function S(t, e, i, r, o) {
    let {
      vertices: d,
      uvs: f,
      indices: p
    } = o;
    t.shapePrimitives.forEach(({
      shape: t,
      transform: x,
      holes: y
    }) => {
      let g = [],
        P = _[t.type];
      if (!P.build(t, g)) return;
      let S = p.length,
        M = d.length / 2,
        k = "triangle-list";
      if (x && (0, n.transformVertices)(g, x), i) {
        let i = t.closePath ?? !0;
        e.pixelLine ? ((0, c.buildPixelLine)(g, i, d, p), k = "line-list") : (0, u.buildLine)(g, e, !1, i, d, p);
      } else if (y) {
        let t = [],
          e = g.slice();
        (function (t) {
          let e = [];
          for (let i = 0; i < t.length; i++) {
            let r = t[i].shape,
              s = [];
            _[r.type].build(r, s) && e.push(s);
          }
          return e;
        })(y).forEach(i => {
          t.push(e.length / 2), e.push(...i);
        }), (0, b.triangulateWithHoles)(e, t, d, 2, M, p, S);
      } else P.triangulate(g, d, 2, M, p, S);
      let w = f.length / 2,
        T = e.texture;
      if (T !== a.Texture.WHITE) {
        let i = m(v, e, t, x);
        (0, s.buildUvs)(d, 2, M, f, w, 2, d.length / 2 - M, i);
      } else (0, s.buildSimpleUvs)(f, w, 2, d.length / 2 - M);
      let C = l.BigPool.get(h.BatchableGraphics);
      C.indexOffset = S, C.indexSize = p.length - S, C.attributeOffset = M, C.attributeSize = d.length / 2 - M, C.baseColor = e.color, C.alpha = e.alpha, C.texture = T, C.geometryData = o, C.topology = k, r.push(C);
    });
  }
  t.s(["buildContextBatches", 0, function (t, e) {
    let {
      geometryData: i,
      batches: r
    } = e;
    r.length = 0, i.indices.length = 0, i.vertices.length = 0, i.uvs.length = 0;
    for (let e = 0; e < t.instructions.length; e++) {
      let s = t.instructions[e];
      if ("texture" === s.action) !function (t, e, i) {
        let r = [],
          s = _.rectangle;
        P.x = t.dx, P.y = t.dy, P.width = t.dw, P.height = t.dh;
        let a = t.transform;
        if (!s.build(P, r)) return;
        let {
            vertices: o,
            uvs: u,
            indices: c
          } = i,
          d = c.length,
          f = o.length / 2;
        a && (0, n.transformVertices)(r, a), s.triangulate(r, o, 2, f, c, d);
        let p = t.image,
          x = p.uvs;
        u.push(x.x0, x.y0, x.x1, x.y1, x.x3, x.y3, x.x2, x.y2);
        let y = l.BigPool.get(h.BatchableGraphics);
        y.indexOffset = d, y.indexSize = c.length - d, y.attributeOffset = f, y.attributeSize = o.length / 2 - f, y.baseColor = t.style, y.alpha = t.alpha, y.texture = p, y.geometryData = i, e.push(y);
      }(s.data, r, i);else if ("fill" === s.action || "stroke" === s.action) {
        let t = "stroke" === s.action,
          e = s.data.path.shapePath,
          n = s.data.style,
          a = s.data.hole;
        t && a && S(a.shapePath, n, !0, r, i), a && (e.shapePrimitives[e.shapePrimitives.length - 1].holes = a.shapePath.shapePrimitives), S(e, n, t, r, i);
      }
    }
  }, "shapeBuilders", 0, _], 967030);
};
