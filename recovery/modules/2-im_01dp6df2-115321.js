// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 115321, 234118, 104312, 682581, 121570, 898006, 225839, 551370, 121402, 523994, 388850, 591069, 437324, 898512, 470618, 569176.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(37554),
    i = t.i(733705),
    r = t.i(562140),
    s = t.i(380762),
    n = t.i(547416),
    a = t.i(547417),
    l = t.i(163062),
    h = t.i(539088),
    o = t.i(140427),
    u = t.i(453549),
    c = t.i(78278),
    d = t.i(666258),
    f = t.i(933261),
    p = t.i(706848),
    x = t.i(217055),
    y = t.i(727905),
    g = t.i(765480),
    m = t.i(967030);
  class b {
    constructor() {
      this.batches = [], this.geometryData = {
        vertices: [],
        uvs: [],
        indices: []
      };
    }
    reset() {
      this.batches && this.batches.forEach(t => {
        g.BigPool.return(t);
      }), this.graphicsData && g.BigPool.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null;
    }
    destroy() {
      this.reset(), this.batches = null, this.geometryData = null;
    }
  }
  class _ {
    constructor() {
      this.instructions = new p.InstructionSet();
    }
    init(t) {
      let e = t.maxTextures;
      this.batcher ? this.batcher._updateMaxTextures(e) : this.batcher = new f.DefaultBatcher({
        maxTextures: e
      }), this.instructions.reset();
    }
    get geometry() {
      return (0, y.deprecation)(y.v8_3_4, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry;
    }
    destroy() {
      this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null;
    }
  }
  let P = class t {
    constructor(t) {
      this._renderer = t, this._managedContexts = new x.GCManagedHash({
        renderer: t,
        type: "resource",
        name: "graphicsContext"
      });
    }
    init(e) {
      t.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? t.defaultOptions.bezierSmoothness;
    }
    getContextRenderData(t) {
      return t._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(t);
    }
    updateGpuContext(t) {
      let e = !!t._gpuData[this._renderer.uid],
        i = t._gpuData[this._renderer.uid] || this._initContext(t);
      if (t.dirty || !e) {
        e && i.reset(), (0, m.buildContextBatches)(t, i);
        let r = t.batchMode;
        t.customShader || "no-batch" === r ? i.isBatchable = !1 : "auto" === r ? i.isBatchable = i.geometryData.vertices.length < 400 : i.isBatchable = !0, t.dirty = !1;
      }
      return i;
    }
    getGpuContext(t) {
      return t._gpuData[this._renderer.uid] || this._initContext(t);
    }
    _initContextRenderData(t) {
      let e = g.BigPool.get(_, {
          maxTextures: this._renderer.limits.maxBatchableTextures
        }),
        i = t._gpuData[this._renderer.uid],
        {
          batches: r,
          geometryData: s
        } = i;
      i.graphicsData = e;
      let n = s.vertices.length,
        a = s.indices.length;
      for (let t = 0; t < r.length; t++) r[t].applyTransform = !1;
      let l = e.batcher;
      l.ensureAttributeBuffer(n), l.ensureIndexBuffer(a), l.begin();
      for (let t = 0; t < r.length; t++) {
        let e = r[t];
        l.add(e);
      }
      l.finish(e.instructions);
      let h = l.geometry;
      h.indexBuffer.setDataWithSize(l.indexBuffer, l.indexSize, !0), h.buffers[0].setDataWithSize(l.attributeBuffer.float32View, l.attributeSize, !0);
      let o = l.batches;
      for (let t = 0; t < o.length; t++) {
        let e = o[t];
        e.bindGroup = (0, d.getTextureBatchBindGroup)(e.textures.textures, e.textures.count, this._renderer.limits.maxBatchableTextures);
      }
      return e;
    }
    _initContext(t) {
      let e = new b();
      return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e;
    }
    destroy() {
      this._managedContexts.destroy(), this._renderer = null;
    }
  };
  function v(t, e, i, r, s, n, a, l, h, o) {
    var u, c, d;
    let f = (1 - Math.min(.99, Math.max(0, o ?? P.defaultOptions.bezierSmoothness))) / 1;
    return f *= f, function t(e, i, r, s, n, a, l, h, o, u, c) {
      if (c > 8) return;
      let d = (e + r) / 2,
        f = (i + s) / 2,
        p = (r + n) / 2,
        x = (s + a) / 2,
        y = (n + l) / 2,
        g = (a + h) / 2,
        m = (d + p) / 2,
        b = (f + x) / 2,
        _ = (p + y) / 2,
        P = (x + g) / 2,
        v = (m + _) / 2,
        S = (b + P) / 2;
      if (c > 0) {
        let t = l - e,
          c = h - i,
          d = Math.abs((r - l) * c - (s - h) * t),
          f = Math.abs((n - l) * c - (a - h) * t);
        if (d > 11920929e-14 && f > 11920929e-14) {
          if ((d + f) * (d + f) <= u * (t * t + c * c)) return void o.push(v, S);
        } else if (d > 11920929e-14) {
          if (d * d <= u * (t * t + c * c)) return void o.push(v, S);
        } else if (f > 11920929e-14) {
          if (f * f <= u * (t * t + c * c)) return void o.push(v, S);
        } else if ((t = v - (e + l) / 2) * t + (c = S - (i + h) / 2) * c <= u) return void o.push(v, S);
      }
      t(e, i, d, f, m, b, v, S, o, u, c + 1), t(v, S, _, P, y, g, l, h, o, u, c + 1);
    }(e, i, r, s, n, a, u = l, c = h, d = t, f, 0), d.push(u, c), t;
  }
  function S(t, e, i, r, s, n, a, l) {
    var h, o, u, c, d, f, p;
    let x = (1 - Math.min(.99, Math.max(0, l ?? P.defaultOptions.bezierSmoothness))) / 1;
    return x *= x, h = e, o = i, u = r, c = s, d = n, f = a, function t(e, i, r, s, n, a, l, h, o) {
      if (o > 8) return;
      let u = (i + s) / 2,
        c = (r + n) / 2,
        d = (s + a) / 2,
        f = (n + l) / 2,
        p = (u + d) / 2,
        x = (c + f) / 2,
        y = a - i,
        g = l - r,
        m = Math.abs((s - a) * g - (n - l) * y);
      if (m > 11920929e-14) {
        if (m * m <= h * (y * y + g * g)) return void e.push(p, x);
      } else if ((y = p - (i + a) / 2) * y + (g = x - (r + l) / 2) * g <= h) return void e.push(p, x);
      t(e, i, r, u, c, p, x, h, o + 1), t(e, p, x, d, f, a, l, h, o + 1);
    }(p = t, h, o, u, c, d, f, x, 0), p.push(d, f), t;
  }
  function M(t, e, i, r, s, n, a, l) {
    let h = Math.abs(s - n);
    !a && s > n ? h = 2 * Math.PI - h : a && n > s && (h = 2 * Math.PI - h), l || (l = Math.max(6, Math.floor(6 * Math.pow(r, 1 / 3) * (h / Math.PI))));
    let o = h / (l = Math.max(l, 3)),
      u = s;
    o *= a ? -1 : 1;
    for (let s = 0; s < l + 1; s++) {
      let s = e + Math.cos(u) * r,
        n = i + Math.sin(u) * r;
      t.push(s, n), u += o;
    }
  }
  function k(t, e, i, r, s, n) {
    let a = t[t.length - 2],
      l = t[t.length - 1] - i,
      h = a - e,
      o = s - i,
      u = r - e,
      c = Math.abs(l * u - h * o);
    if (c < 1e-8 || 0 === n) {
      (t[t.length - 2] !== e || t[t.length - 1] !== i) && t.push(e, i);
      return;
    }
    let d = l * l + h * h,
      f = o * o + u * u,
      p = l * o + h * u,
      x = n * Math.sqrt(d) / c,
      y = n * Math.sqrt(f) / c,
      g = x * p / d,
      m = y * p / f,
      b = x * u + y * h,
      _ = x * o + y * l,
      P = Math.atan2(l * (y + g) - _, h * (y + g) - b),
      v = Math.atan2(o * (x + m) - _, u * (x + m) - b);
    M(t, b + e, _ + i, n, P, v, h * o > u * l);
  }
  P.extension = {
    type: [c.ExtensionType.WebGLSystem, c.ExtensionType.WebGPUSystem],
    name: "graphicsContext"
  }, P.defaultOptions = {
    bezierSmoothness: .5
  }, t.s(["GpuGraphicsContext", 0, b, "GraphicsContextRenderData", 0, _, "GraphicsContextSystem", 0, P], 234118), t.s(["buildAdaptiveBezier", 0, v], 104312), t.s(["buildAdaptiveQuadratic", 0, S], 682581), t.s(["buildArc", 0, M], 121570), t.s(["buildArcTo", 0, k], 898006);
  let w = 2 * Math.PI,
    T = {
      centerX: 0,
      centerY: 0,
      ang1: 0,
      ang2: 0
    },
    C = ({
      x: t,
      y: e
    }, i, r, s, n, a, l, h) => {
      let o = s * (t *= i) - n * (e *= r),
        u = n * t + s * e;
      return h.x = o + a, h.y = u + l, h;
    },
    R = (t, e, i, r) => {
      let s = t * i + e * r;
      return s > 1 && (s = 1), s < -1 && (s = -1), (t * r - e * i < 0 ? -1 : 1) * Math.acos(s);
    };
  function z(t, e, i, r, s, n, a, l = 0, h = 0, o = 0) {
    var u, c;
    let d, f, p, x, y, g, m, b, _, P, S;
    if (0 === n || 0 === a) return;
    let M = Math.sin(l * w / 360),
      k = Math.cos(l * w / 360),
      B = k * (e - r) / 2 + M * (i - s) / 2,
      D = -M * (e - r) / 2 + k * (i - s) / 2;
    if (0 === B && 0 === D) return;
    let G = Math.pow(B, 2) / Math.pow(n = Math.abs(n), 2) + Math.pow(D, 2) / Math.pow(a = Math.abs(a), 2);
    G > 1 && (n *= Math.sqrt(G), a *= Math.sqrt(G)), u = n, c = a, d = Math.pow(u, 2), f = Math.pow(c, 2), p = Math.pow(B, 2), (y = d * f - d * (x = Math.pow(D, 2)) - f * p) < 0 && (y = 0), y /= d * x + f * p, g = (y = Math.sqrt(y) * (h === o ? -1 : 1)) * u / c * D, m = -(y * c) / u * B, P = R(1, 0, b = (B - g) / u, _ = (D - m) / c), S = R(b, _, (-B - g) / u, (-D - m) / c), 0 === o && S > 0 && (S -= w), 1 === o && S < 0 && (S += w), T.centerX = k * g - M * m + (e + r) / 2, T.centerY = M * g + k * m + (i + s) / 2, T.ang1 = P, T.ang2 = S;
    let {
        ang1: q,
        ang2: F
      } = T,
      {
        centerX: I,
        centerY: L
      } = T,
      V = Math.abs(F) / (w / 4);
    1e-7 > Math.abs(1 - V) && (V = 1);
    let A = Math.max(Math.ceil(V), 1);
    F /= A;
    let Z = t[t.length - 2],
      E = t[t.length - 1],
      H = {
        x: 0,
        y: 0
      };
    for (let e = 0; e < A; e++) {
      let e = function (t, e) {
          let i = -1.5707963267948966 === e ? -.551915024494 : 4 / 3 * Math.tan(e / 4),
            r = 1.5707963267948966 === e ? .551915024494 : i,
            s = Math.cos(t),
            n = Math.sin(t),
            a = Math.cos(t + e),
            l = Math.sin(t + e);
          return [{
            x: s - n * r,
            y: n + s * r
          }, {
            x: a + l * r,
            y: l - a * r
          }, {
            x: a,
            y: l
          }];
        }(q, F),
        {
          x: i,
          y: r
        } = C(e[0], n, a, k, M, I, L, H),
        {
          x: s,
          y: l
        } = C(e[1], n, a, k, M, I, L, H),
        {
          x: h,
          y: o
        } = C(e[2], n, a, k, M, I, L, H);
      v(t, Z, E, i, r, s, l, h, o), Z = h, E = o, q += F;
    }
  }
  function B(t, e, i) {
    let r = (t, e) => {
        let i = e.x - t.x,
          r = e.y - t.y,
          s = Math.sqrt(i * i + r * r);
        return {
          len: s,
          nx: i / s,
          ny: r / s
        };
      },
      s = (e, i) => {
        0 === e ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
      },
      n = e[e.length - 1];
    for (let a = 0; a < e.length; a++) {
      let l,
        h = e[a % e.length],
        o = h.radius ?? i;
      if (o <= 0) {
        s(a, h), n = h;
        continue;
      }
      let u = e[(a + 1) % e.length],
        c = r(h, n),
        d = r(h, u);
      if (c.len < 1e-4 || d.len < 1e-4) {
        s(a, h), n = h;
        continue;
      }
      let f = Math.asin(c.nx * d.ny - c.ny * d.nx),
        p = 1,
        x = !1;
      c.nx * d.nx - -(c.ny * d.ny) < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, p = -1, x = !0) : f > 0 && (p = -1, x = !0);
      let y = f / 2,
        g = Math.abs(Math.cos(y) * o / Math.sin(y));
      l = g > Math.min(c.len / 2, d.len / 2) ? Math.abs((g = Math.min(c.len / 2, d.len / 2)) * Math.sin(y) / Math.cos(y)) : o;
      let m = h.x + d.nx * g + -d.ny * l * p,
        b = h.y + d.ny * g + d.nx * l * p,
        _ = Math.atan2(c.ny, c.nx) + Math.PI / 2 * p,
        P = Math.atan2(d.ny, d.nx) - Math.PI / 2 * p;
      0 === a && t.moveTo(m + Math.cos(_) * l, b + Math.sin(_) * l), t.arc(m, b, l, _, P, x), n = h;
    }
  }
  function D(t, e, i, r) {
    let s = (t, e) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
      n = (t, e, i) => ({
        x: t.x + (e.x - t.x) * i,
        y: t.y + (e.y - t.y) * i
      }),
      a = e.length;
    for (let l = 0; l < a; l++) {
      let h,
        o,
        u = e[(l + 1) % a],
        c = u.radius ?? i;
      if (c <= 0) {
        0 === l ? t.moveTo(u.x, u.y) : t.lineTo(u.x, u.y);
        continue;
      }
      let d = e[l],
        f = e[(l + 2) % a],
        p = s(d, u);
      h = p < 1e-4 ? u : n(u, d, Math.min(p / 2, c) / p);
      let x = s(f, u);
      o = x < 1e-4 ? u : n(u, f, Math.min(x / 2, c) / x), 0 === l ? t.moveTo(h.x, h.y) : t.lineTo(h.x, h.y), t.quadraticCurveTo(u.x, u.y, o.x, o.y, r);
    }
  }
  t.s(["buildArcToSvg", 0, z], 225839), t.s(["roundedShapeArc", 0, B, "roundedShapeQuadraticCurve", 0, D], 551370);
  let G = new h.Rectangle();
  class q {
    constructor(t) {
      this.shapePrimitives = [], this._currentPoly = null, this._bounds = new u.Bounds(), this._graphicsPath2D = t, this.signed = t.checkForHoles;
    }
    moveTo(t, e) {
      return this.startPoly(t, e), this;
    }
    lineTo(t, e) {
      this._ensurePoly();
      let i = this._currentPoly.points,
        r = i[i.length - 2],
        s = i[i.length - 1];
      return (r !== t || s !== e) && i.push(t, e), this;
    }
    arc(t, e, i, r, s, n) {
      return this._ensurePoly(!1), M(this._currentPoly.points, t, e, i, r, s, n), this;
    }
    arcTo(t, e, i, r, s) {
      return this._ensurePoly(), k(this._currentPoly.points, t, e, i, r, s), this;
    }
    arcToSvg(t, e, i, r, s, n, a) {
      return z(this._currentPoly.points, this._currentPoly.lastX, this._currentPoly.lastY, n, a, t, e, i, r, s), this;
    }
    bezierCurveTo(t, e, i, r, s, n, a) {
      this._ensurePoly();
      let l = this._currentPoly;
      return v(this._currentPoly.points, l.lastX, l.lastY, t, e, i, r, s, n, a), this;
    }
    quadraticCurveTo(t, e, i, r, s) {
      this._ensurePoly();
      let n = this._currentPoly;
      return S(this._currentPoly.points, n.lastX, n.lastY, t, e, i, r, s), this;
    }
    closePath() {
      return this.endPoly(!0), this;
    }
    addPath(t, e) {
      this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0)).transform(e);
      let i = this.shapePrimitives,
        r = i.length;
      for (let e = 0; e < t.instructions.length; e++) {
        let i = t.instructions[e];
        this[i.action](...i.data);
      }
      if (t.checkForHoles && i.length - r > 1) {
        let t = null;
        for (let e = r; e < i.length; e++) {
          let r = i[e];
          if ("polygon" === r.shape.type) {
            let s = r.shape,
              n = t?.shape;
            n && n.containsPolygon(s) ? (t.holes || (t.holes = []), t.holes.push(r), i.copyWithin(e, e + 1), i.length--, e--) : t = r;
          }
        }
      }
      return this;
    }
    finish(t = !1) {
      this.endPoly(t);
    }
    rect(t, e, i, r, s) {
      return this.drawShape(new h.Rectangle(t, e, i, r), s), this;
    }
    circle(t, e, i, r) {
      return this.drawShape(new n.Circle(t, e, i), r), this;
    }
    poly(t, e, i) {
      let r = new l.Polygon(t);
      return r.closePath = e, this.drawShape(r, i), this;
    }
    regularPoly(t, e, i, r, s = 0, n) {
      let a = -1 * Math.PI / 2 + s,
        l = 2 * Math.PI / (r = Math.max(0 | r, 3)),
        h = [];
      for (let s = 0; s < r; s++) {
        let r = a - s * l;
        h.push(t + i * Math.cos(r), e + i * Math.sin(r));
      }
      return this.poly(h, !0, n), this;
    }
    roundPoly(t, e, i, r, s, n = 0, a) {
      if (r = Math.max(0 | r, 3), s <= 0) return this.regularPoly(t, e, i, r, n);
      s = Math.min(s, i * Math.sin(Math.PI / r) - .001);
      let l = -1 * Math.PI / 2 + n,
        h = 2 * Math.PI / r,
        o = (r - 2) * Math.PI / r / 2;
      for (let n = 0; n < r; n++) {
        let r = n * h + l,
          u = t + i * Math.cos(r),
          c = e + i * Math.sin(r),
          d = r + Math.PI + o,
          f = r - Math.PI - o,
          p = u + s * Math.cos(d),
          x = c + s * Math.sin(d),
          y = u + s * Math.cos(f),
          g = c + s * Math.sin(f);
        0 === n ? this.moveTo(p, x) : this.lineTo(p, x), this.quadraticCurveTo(u, c, y, g, a);
      }
      return this.closePath();
    }
    roundShape(t, e, i = !1, r) {
      return t.length < 3 ? this : (i ? D(this, t, e, r) : B(this, t, e), this.closePath());
    }
    filletRect(t, e, i, r, s) {
      if (0 === s) return this.rect(t, e, i, r);
      let n = Math.min(i, r) / 2,
        a = Math.min(n, Math.max(-n, s)),
        l = t + i,
        h = e + r,
        o = a < 0 ? -a : 0,
        u = Math.abs(a);
      return this.moveTo(t, e + u).arcTo(t + o, e + o, t + u, e, u).lineTo(l - u, e).arcTo(l - o, e + o, l, e + u, u).lineTo(l, h - u).arcTo(l - o, h - o, t + i - u, h, u).lineTo(t + u, h).arcTo(t + o, h - o, t, h - u, u).closePath();
    }
    chamferRect(t, e, i, r, s, n) {
      if (s <= 0) return this.rect(t, e, i, r);
      let a = Math.min(s, Math.min(i, r) / 2),
        l = t + i,
        h = e + r,
        o = [t + a, e, l - a, e, l, e + a, l, h - a, l - a, h, t + a, h, t, h - a, t, e + a];
      for (let t = o.length - 1; t >= 2; t -= 2) o[t] === o[t - 2] && o[t - 1] === o[t - 3] && o.splice(t - 1, 2);
      return this.poly(o, !0, n);
    }
    ellipse(t, e, i, r, s) {
      return this.drawShape(new a.Ellipse(t, e, i, r), s), this;
    }
    roundRect(t, e, i, r, s, n) {
      return this.drawShape(new o.RoundedRectangle(t, e, i, r, s), n), this;
    }
    drawShape(t, e) {
      return this.endPoly(), this.shapePrimitives.push({
        shape: t,
        transform: e
      }), this;
    }
    startPoly(t, e) {
      let i = this._currentPoly;
      return i && this.endPoly(), (i = new l.Polygon()).points.push(t, e), this._currentPoly = i, this;
    }
    endPoly(t = !1) {
      let e = this._currentPoly;
      return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({
        shape: e
      })), this._currentPoly = null, this;
    }
    _ensurePoly(t = !0) {
      if (!this._currentPoly && (this._currentPoly = new l.Polygon(), t)) {
        let t = this.shapePrimitives[this.shapePrimitives.length - 1];
        if (t) {
          let e = t.shape.x,
            i = t.shape.y;
          if (t.transform && !t.transform.isIdentity()) {
            let r = t.transform,
              s = e;
            e = r.a * e + r.c * i + r.tx, i = r.b * s + r.d * i + r.ty;
          }
          this._currentPoly.points.push(e, i);
        } else this._currentPoly.points.push(0, 0);
      }
    }
    buildPath() {
      let t = this._graphicsPath2D;
      this.shapePrimitives.length = 0, this._currentPoly = null;
      for (let e = 0; e < t.instructions.length; e++) {
        let i = t.instructions[e];
        this[i.action](...i.data);
      }
      this.finish();
    }
    get bounds() {
      let t = this._bounds;
      t.clear();
      let e = this.shapePrimitives;
      for (let i = 0; i < e.length; i++) {
        let r = e[i],
          s = r.shape.getBounds(G);
        r.transform ? t.addRect(s, r.transform) : t.addRect(s);
      }
      return t;
    }
  }
  t.s(["ShapePath", 0, q], 121402);
  class F {
    constructor(t, e = !1) {
      this.instructions = [], this.uid = (0, i.uid)("graphicsPath"), this._dirty = !0, this.checkForHoles = e, "string" == typeof t ? (0, s.parseSVGPath)(t, this) : this.instructions = t?.slice() ?? [];
    }
    get shapePath() {
      return this._shapePath || (this._shapePath = new q(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath;
    }
    addPath(t, e) {
      return t = t.clone(), this.instructions.push({
        action: "addPath",
        data: [t, e]
      }), this._dirty = !0, this;
    }
    arc(...t) {
      return this.instructions.push({
        action: "arc",
        data: t
      }), this._dirty = !0, this;
    }
    arcTo(...t) {
      return this.instructions.push({
        action: "arcTo",
        data: t
      }), this._dirty = !0, this;
    }
    arcToSvg(...t) {
      return this.instructions.push({
        action: "arcToSvg",
        data: t
      }), this._dirty = !0, this;
    }
    bezierCurveTo(...t) {
      return this.instructions.push({
        action: "bezierCurveTo",
        data: t
      }), this._dirty = !0, this;
    }
    bezierCurveToShort(t, i, r, s, n) {
      let a = this.instructions[this.instructions.length - 1],
        l = this.getLastPoint(e.Point.shared),
        h = 0,
        o = 0;
      if (a && "bezierCurveTo" === a.action) {
        h = a.data[2], o = a.data[3];
        let t = l.x,
          e = l.y;
        h = t + (t - h), o = e + (e - o);
      } else h = l.x, o = l.y;
      return this.instructions.push({
        action: "bezierCurveTo",
        data: [h, o, t, i, r, s, n]
      }), this._dirty = !0, this;
    }
    closePath() {
      return this.instructions.push({
        action: "closePath",
        data: []
      }), this._dirty = !0, this;
    }
    ellipse(...t) {
      return this.instructions.push({
        action: "ellipse",
        data: t
      }), this._dirty = !0, this;
    }
    lineTo(...t) {
      return this.instructions.push({
        action: "lineTo",
        data: t
      }), this._dirty = !0, this;
    }
    moveTo(...t) {
      return this.instructions.push({
        action: "moveTo",
        data: t
      }), this;
    }
    quadraticCurveTo(...t) {
      return this.instructions.push({
        action: "quadraticCurveTo",
        data: t
      }), this._dirty = !0, this;
    }
    quadraticCurveToShort(t, i, r) {
      let s = this.instructions[this.instructions.length - 1],
        n = this.getLastPoint(e.Point.shared),
        a = 0,
        l = 0;
      if (s && "quadraticCurveTo" === s.action) {
        a = s.data[0], l = s.data[1];
        let t = n.x,
          e = n.y;
        a = t + (t - a), l = e + (e - l);
      } else a = n.x, l = n.y;
      return this.instructions.push({
        action: "quadraticCurveTo",
        data: [a, l, t, i, r]
      }), this._dirty = !0, this;
    }
    rect(t, e, i, r, s) {
      return this.instructions.push({
        action: "rect",
        data: [t, e, i, r, s]
      }), this._dirty = !0, this;
    }
    circle(t, e, i, r) {
      return this.instructions.push({
        action: "circle",
        data: [t, e, i, r]
      }), this._dirty = !0, this;
    }
    roundRect(...t) {
      return this.instructions.push({
        action: "roundRect",
        data: t
      }), this._dirty = !0, this;
    }
    poly(...t) {
      return this.instructions.push({
        action: "poly",
        data: t
      }), this._dirty = !0, this;
    }
    regularPoly(...t) {
      return this.instructions.push({
        action: "regularPoly",
        data: t
      }), this._dirty = !0, this;
    }
    roundPoly(...t) {
      return this.instructions.push({
        action: "roundPoly",
        data: t
      }), this._dirty = !0, this;
    }
    roundShape(...t) {
      return this.instructions.push({
        action: "roundShape",
        data: t
      }), this._dirty = !0, this;
    }
    filletRect(...t) {
      return this.instructions.push({
        action: "filletRect",
        data: t
      }), this._dirty = !0, this;
    }
    chamferRect(...t) {
      return this.instructions.push({
        action: "chamferRect",
        data: t
      }), this._dirty = !0, this;
    }
    star(t, e, i, r, s, n, a) {
      s || (s = r / 2);
      let l = -1 * Math.PI / 2 + n,
        h = 2 * i,
        o = 2 * Math.PI / h,
        u = [];
      for (let i = 0; i < h; i++) {
        let n = i % 2 ? s : r,
          a = i * o + l;
        u.push(t + n * Math.cos(a), e + n * Math.sin(a));
      }
      return this.poly(u, !0, a), this;
    }
    clone(t = !1) {
      let e = new F();
      if (e.checkForHoles = this.checkForHoles, t) for (let t = 0; t < this.instructions.length; t++) {
        let i = this.instructions[t];
        e.instructions.push({
          action: i.action,
          data: i.data.slice()
        });
      } else e.instructions = this.instructions.slice();
      return e;
    }
    clear() {
      return this.instructions.length = 0, this._dirty = !0, this;
    }
    transform(t) {
      if (t.isIdentity()) return this;
      let e = t.a,
        i = t.b,
        s = t.c,
        n = t.d,
        a = t.tx,
        l = t.ty,
        h = 0,
        o = 0,
        u = 0,
        c = 0,
        d = 0,
        f = 0,
        p = 0,
        x = 0;
      for (let y = 0; y < this.instructions.length; y++) {
        let g = this.instructions[y],
          m = g.data;
        switch (g.action) {
          case "moveTo":
          case "lineTo":
            h = m[0], o = m[1], m[0] = e * h + s * o + a, m[1] = i * h + n * o + l;
            break;
          case "bezierCurveTo":
            u = m[0], c = m[1], d = m[2], f = m[3], h = m[4], o = m[5], m[0] = e * u + s * c + a, m[1] = i * u + n * c + l, m[2] = e * d + s * f + a, m[3] = i * d + n * f + l, m[4] = e * h + s * o + a, m[5] = i * h + n * o + l;
            break;
          case "quadraticCurveTo":
            u = m[0], c = m[1], h = m[2], o = m[3], m[0] = e * u + s * c + a, m[1] = i * u + n * c + l, m[2] = e * h + s * o + a, m[3] = i * h + n * o + l;
            break;
          case "arcToSvg":
            h = m[5], o = m[6], p = m[0], x = m[1], m[0] = e * p + s * x, m[1] = i * p + n * x, m[5] = e * h + s * o + a, m[6] = i * h + n * o + l;
            break;
          case "circle":
            m[4] = I(m[3], t);
            break;
          case "rect":
            m[4] = I(m[4], t);
            break;
          case "ellipse":
            m[8] = I(m[8], t);
            break;
          case "roundRect":
          case "regularPoly":
          case "chamferRect":
            m[5] = I(m[5], t);
            break;
          case "addPath":
            m[0].transform(t);
            break;
          case "poly":
            m[2] = I(m[2], t);
            break;
          case "closePath":
            break;
          default:
            (0, r.warn)("unknown transform action", g.action);
        }
      }
      return this._dirty = !0, this;
    }
    get bounds() {
      return this.shapePath.bounds;
    }
    getLastPoint(t) {
      let e = this.instructions.length - 1,
        i = this.instructions[e];
      if (!i) return t.x = 0, t.y = 0, t;
      for (; "closePath" === i.action;) {
        if (--e < 0) return t.x = 0, t.y = 0, t;
        i = this.instructions[e];
      }
      switch (i.action) {
        case "moveTo":
        case "lineTo":
          t.x = i.data[0], t.y = i.data[1];
          break;
        case "quadraticCurveTo":
          t.x = i.data[2], t.y = i.data[3];
          break;
        case "bezierCurveTo":
          t.x = i.data[4], t.y = i.data[5];
          break;
        case "arc":
        case "arcToSvg":
          t.x = i.data[5], t.y = i.data[6];
          break;
        case "addPath":
          i.data[0].getLastPoint(t);
      }
      return t;
    }
  }
  function I(t, e) {
    return t ? t.prepend(e) : e.clone();
  }
  t.s(["GraphicsPath", 0, F], 115321);
  var L = t.i(222735),
    V = t.i(419905);
  function A(t, e, i) {
    let r = t.getAttribute(e);
    return r ? Number(r) : i;
  }
  function Z(t, e) {
    let i = t.querySelectorAll("defs");
    for (let t = 0; t < i.length; t++) {
      let s = i[t];
      for (let t = 0; t < s.children.length; t++) {
        let i = s.children[t];
        switch (i.nodeName.toLowerCase()) {
          case "lineargradient":
            e.defs[i.id] = function (t) {
              let e = A(t, "x1", 0),
                i = A(t, "y1", 0),
                r = A(t, "x2", 1),
                s = A(t, "y2", 0),
                n = t.getAttribute("gradientUnits") || "objectBoundingBox",
                a = new V.FillGradient(e, i, r, s, "objectBoundingBox" === n ? "local" : "global");
              for (let e = 0; e < t.children.length; e++) {
                let i = t.children[e],
                  r = A(i, "offset", 0),
                  s = L.Color.shared.setValue(i.getAttribute("stop-color")).toNumber();
                a.addColorStop(r, s);
              }
              return a;
            }(i);
            break;
          case "radialgradient":
            e.defs[i.id] = ((0, r.warn)("[SVG Parser] Radial gradients are not yet supported"), new V.FillGradient(0, 0, 1, 0));
        }
      }
    }
  }
  function E(t) {
    let e = t.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
    return e ? e[1] : "";
  }
  t.s(["parseSVGFloatAttribute", 0, A], 523994), t.s(["parseSVGDefinitions", 0, Z], 388850), t.s(["extractSvgUrlId", 0, E], 591069);
  let H = {
    fill: {
      type: "paint",
      default: 0
    },
    "fill-opacity": {
      type: "number",
      default: 1
    },
    stroke: {
      type: "paint",
      default: 0
    },
    "stroke-width": {
      type: "number",
      default: 1
    },
    "stroke-opacity": {
      type: "number",
      default: 1
    },
    "stroke-linecap": {
      type: "string",
      default: "butt"
    },
    "stroke-linejoin": {
      type: "string",
      default: "miter"
    },
    "stroke-miterlimit": {
      type: "number",
      default: 10
    },
    "stroke-dasharray": {
      type: "string",
      default: "none"
    },
    "stroke-dashoffset": {
      type: "number",
      default: 0
    },
    opacity: {
      type: "number",
      default: 1
    }
  };
  function O(t, e) {
    let i = t.getAttribute("style"),
      r = {},
      s = {},
      n = {
        strokeStyle: r,
        fillStyle: s,
        useFill: !1,
        useStroke: !1
      };
    for (let i in H) {
      let r = t.getAttribute(i);
      r && N(e, n, i, r.trim());
    }
    if (i) {
      let t = i.split(";");
      for (let i = 0; i < t.length; i++) {
        let [r, s] = t[i].trim().split(":");
        H[r] && N(e, n, r, s.trim());
      }
    }
    return {
      strokeStyle: n.useStroke ? r : null,
      fillStyle: n.useFill ? s : null,
      useFill: n.useFill,
      useStroke: n.useStroke
    };
  }
  function N(t, e, i, r) {
    switch (i) {
      case "stroke":
        if ("none" !== r) {
          if (r.startsWith("url(")) {
            let i = E(r);
            e.strokeStyle.fill = t.defs[i];
          } else e.strokeStyle.color = L.Color.shared.setValue(r).toNumber();
          e.useStroke = !0;
        }
        break;
      case "stroke-width":
        e.strokeStyle.width = Number(r);
        break;
      case "fill":
        if ("none" !== r) {
          if (r.startsWith("url(")) {
            let i = E(r);
            e.fillStyle.fill = t.defs[i];
          } else e.fillStyle.color = L.Color.shared.setValue(r).toNumber();
          e.useFill = !0;
        }
        break;
      case "fill-opacity":
        e.fillStyle.alpha = Number(r);
        break;
      case "stroke-opacity":
        e.strokeStyle.alpha = Number(r);
        break;
      case "opacity":
        e.fillStyle.alpha = Number(r), e.strokeStyle.alpha = Number(r);
    }
  }
  function W(t) {
    if (t.length <= 2) return !0;
    let e = t.map(t => t.area).sort((t, e) => e - t),
      [i, r] = e,
      s = e[e.length - 1];
    return !(i / r > 3) || !(r / s < 2);
  }
  function $(t) {
    return t.split(/(?=[Mm])/).filter(t => t.trim().length > 0);
  }
  function U(t) {
    let e = t.match(/[-+]?[0-9]*\.?[0-9]+/g);
    if (!e || e.length < 4) return 0;
    let i = e.map(Number),
      r = [],
      s = [];
    for (let t = 0; t < i.length; t += 2) t + 1 < i.length && (r.push(i[t]), s.push(i[t + 1]));
    if (0 === r.length || 0 === s.length) return 0;
    let n = Math.min(...r),
      a = Math.min(...s);
    return (Math.max(...r) - n) * (Math.max(...s) - a);
  }
  function j(t, e) {
    for (let i of new F(t, !1).instructions) e.instructions.push(i);
  }
  t.s(["parseSVGStyle", 0, O, "styleAttributes", 0, H], 437324), t.s(["checkForNestedPattern", 0, W, "getFillInstructionData", 0, function (t, e = 0) {
    let i = t.instructions[e];
    if (!i || "fill" !== i.action) throw Error(`Expected fill instruction at index ${e}, got ${i?.action || "undefined"}`);
    return i.data;
  }], 898512), t.s(["appendSVGPath", 0, j, "calculatePathArea", 0, U, "extractSubpaths", 0, $], 470618), t.s(["SVGParser", 0, function (t, e) {
    if ("string" == typeof t) {
      let e = document.createElement("div");
      e.innerHTML = t.trim(), t = e.querySelector("svg");
    }
    let i = {
      context: e,
      defs: {},
      path: new F()
    };
    Z(t, i);
    let s = t.children,
      {
        fillStyle: n,
        strokeStyle: a
      } = O(t, i);
    for (let t = 0; t < s.length; t++) {
      let e = s[t];
      "defs" !== e.nodeName.toLowerCase() && function t(e, i, s, n) {
        let a,
          l,
          h,
          o,
          u,
          c,
          d,
          f,
          p,
          x,
          y,
          g,
          m,
          b,
          _,
          P,
          v = e.children,
          {
            fillStyle: S,
            strokeStyle: M
          } = O(e, i);
        S && s ? s = {
          ...s,
          ...S
        } : S && (s = S), M && n ? n = {
          ...n,
          ...M
        } : M && (n = M);
        let k = !s && !n;
        switch (k && (s = {
          color: 0
        }), e.nodeName.toLowerCase()) {
          case "path":
            {
              m = e.getAttribute("d");
              let t = e.getAttribute("fill-rule"),
                r = $(m),
                a = r.length > 1;
              if ("evenodd" === t && a) {
                let t = r.map(t => ({
                  path: t,
                  area: U(t)
                }));
                if (t.sort((t, e) => e.area - t.area), r.length > 3 || !W(t)) for (let e = 0; e < t.length; e++) {
                  let r = t[e],
                    a = 0 === e;
                  i.context.beginPath();
                  let l = new F(void 0, !0);
                  j(r.path, l), i.context.path(l), a ? (s && i.context.fill(s), n && i.context.stroke(n)) : i.context.cut();
                } else for (let e = 0; e < t.length; e++) {
                  let r = t[e],
                    a = e % 2 == 1;
                  i.context.beginPath();
                  let l = new F(void 0, !0);
                  j(r.path, l), i.context.path(l), a ? i.context.cut() : (s && i.context.fill(s), n && i.context.stroke(n));
                }
              } else b = new F(m, !t || "evenodd" === t), i.context.path(b), s && i.context.fill(s), n && i.context.stroke(n);
              break;
            }
          case "circle":
            d = A(e, "cx", 0), f = A(e, "cy", 0), p = A(e, "r", 0), i.context.ellipse(d, f, p, p), s && i.context.fill(s), n && i.context.stroke(n);
            break;
          case "rect":
            a = A(e, "x", 0), l = A(e, "y", 0), _ = A(e, "width", 0), P = A(e, "height", 0), x = A(e, "rx", 0), y = A(e, "ry", 0), x || y ? i.context.roundRect(a, l, _, P, x || y) : i.context.rect(a, l, _, P), s && i.context.fill(s), n && i.context.stroke(n);
            break;
          case "ellipse":
            d = A(e, "cx", 0), f = A(e, "cy", 0), x = A(e, "rx", 0), y = A(e, "ry", 0), i.context.beginPath(), i.context.ellipse(d, f, x, y), s && i.context.fill(s), n && i.context.stroke(n);
            break;
          case "line":
            h = A(e, "x1", 0), o = A(e, "y1", 0), u = A(e, "x2", 0), c = A(e, "y2", 0), i.context.beginPath(), i.context.moveTo(h, o), i.context.lineTo(u, c), n && i.context.stroke(n);
            break;
          case "polygon":
            g = e.getAttribute("points").match(/-?\d+/g).map(t => parseInt(t, 10)), i.context.poly(g, !0), s && i.context.fill(s), n && i.context.stroke(n);
            break;
          case "polyline":
            g = e.getAttribute("points").match(/-?\d+/g).map(t => parseInt(t, 10)), i.context.poly(g, !1), n && i.context.stroke(n);
            break;
          case "g":
          case "svg":
            break;
          default:
            (0, r.warn)(`[SVG parser] <${e.nodeName}> elements unsupported`);
        }
        k && (s = null);
        for (let e = 0; e < v.length; e++) t(v[e], i, s, n);
      }(e, i, n, a);
    }
    return e;
  }], 569176);
};
