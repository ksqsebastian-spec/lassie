// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 558001, 73517, 762562.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524),
    i = t.i(222735),
    r = t.i(389474),
    s = t.i(37554),
    n = t.i(337654),
    a = t.i(733705),
    l = t.i(727905),
    h = t.i(453549),
    o = t.i(115321),
    u = t.i(569176),
    c = t.i(419905),
    d = t.i(336966);
  function f(t) {
    return t instanceof d.FillPattern;
  }
  function p(t) {
    return t instanceof c.FillGradient;
  }
  function x(t, e, i) {
    return t.fill = e, t.color = 0xffffff, t.texture = e.texture, t.matrix = e.transform, t.textureSpace = e.textureSpace, {
      ...i,
      ...t
    };
  }
  function y(t, e, i) {
    return e.buildGradient(), t.fill = e, t.color = 0xffffff, t.texture = e.texture, t.matrix = e.transform, t.textureSpace = e.textureSpace, {
      ...i,
      ...t
    };
  }
  function g(t, e) {
    let r, s;
    if (null == t) return null;
    let a = {};
    if (i.Color.isColorLike(t)) {
      let r;
      return a.color = (r = i.Color.shared.setValue(t ?? 0)).toNumber(), a.alpha = 1 === r.alpha ? e.alpha : r.alpha, a.texture = n.Texture.WHITE, {
        ...e,
        ...a
      };
    }
    if (t instanceof n.Texture) return a.texture = t, {
      ...e,
      ...a
    };
    if (f(t)) return x(a, t, e);
    if (p(t)) return y(a, t, e);else if (t.fill && f(t.fill)) return x(t, t.fill, e);else if (t.fill && p(t.fill)) return y(t, t.fill, e);
    return r = {
      ...e,
      ...t
    }, s = i.Color.shared.setValue(r.color), r.alpha *= s.alpha, r.color = s.toNumber(), r;
  }
  function m(t, e) {
    let {
        width: i,
        alignment: r,
        miterLimit: s,
        cap: n,
        join: a,
        pixelLine: l,
        ...h
      } = e,
      o = g(t, h);
    return o ? {
      width: i,
      alignment: r,
      miterLimit: s,
      cap: n,
      join: a,
      pixelLine: l,
      ...o
    } : null;
  }
  function b(t, e) {
    let i = 1,
      r = t.shapePath.shapePrimitives;
    for (let t = 0; t < r.length; t++) {
      let s = r[t].shape;
      if ("polygon" !== s.type) continue;
      let n = s.points,
        a = n.length;
      if (a < 6) continue;
      let l = s.closePath;
      for (let t = 0; t < a; t += 2) {
        if (!l && (0 === t || t === a - 2)) continue;
        let r = (t - 2 + a) % a,
          s = (t + 2) % a,
          h = n[r],
          o = n[r + 1],
          u = n[t],
          c = n[t + 1],
          d = n[s],
          f = n[s + 1],
          p = h - u,
          x = o - c,
          y = d - u,
          g = f - c,
          m = p * p + x * x,
          b = y * y + g * g;
        if (m < 1e-12 || b < 1e-12) continue;
        let _ = (p * y + x * g) / Math.sqrt(m * b);
        _ < -1 ? _ = -1 : _ > 1 && (_ = 1);
        let P = Math.sqrt((1 - _) * .5);
        if (P < 1e-6) continue;
        let v = Math.min(1 / P, e);
        v > i && (i = v);
      }
    }
    return i;
  }
  t.s(["toFillStyle", 0, g, "toStrokeStyle", 0, m], 73517), t.s(["getMaxMiterRatio", 0, b], 762562);
  let _ = new s.Point(),
    P = new r.Matrix(),
    v = class t extends e.default {
      constructor() {
        super(...arguments), this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = (0, a.uid)("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this.destroyed = !1, this._activePath = new o.GraphicsPath(), this._transform = new r.Matrix(), this._fillStyle = {
          ...t.defaultFillStyle
        }, this._strokeStyle = {
          ...t.defaultStrokeStyle
        }, this._stateStack = [], this._tick = 0, this._bounds = new h.Bounds(), this._boundsDirty = !0;
      }
      clone() {
        let e = new t();
        return e.batchMode = this.batchMode, e.instructions = this.instructions.slice(), e._activePath = this._activePath.clone(), e._transform = this._transform.clone(), e._fillStyle = {
          ...this._fillStyle
        }, e._strokeStyle = {
          ...this._strokeStyle
        }, e._stateStack = this._stateStack.slice(), e._bounds = this._bounds.clone(), e._boundsDirty = !0, e;
      }
      get fillStyle() {
        return this._fillStyle;
      }
      set fillStyle(e) {
        this._fillStyle = g(e, t.defaultFillStyle);
      }
      get strokeStyle() {
        return this._strokeStyle;
      }
      set strokeStyle(e) {
        this._strokeStyle = m(e, t.defaultStrokeStyle);
      }
      setFillStyle(e) {
        return this._fillStyle = g(e, t.defaultFillStyle), this;
      }
      setStrokeStyle(e) {
        return this._strokeStyle = g(e, t.defaultStrokeStyle), this;
      }
      texture(t, e, r, s, n, a) {
        return this.instructions.push({
          action: "texture",
          data: {
            image: t,
            dx: r || 0,
            dy: s || 0,
            dw: n || t.frame.width,
            dh: a || t.frame.height,
            transform: this._transform.clone(),
            alpha: this._fillStyle.alpha,
            style: e || 0 === e ? i.Color.shared.setValue(e).toNumber() : 0xffffff
          }
        }), this.onUpdate(), this;
      }
      beginPath() {
        return this._activePath = new o.GraphicsPath(), this;
      }
      fill(e, i) {
        let r,
          s = this.instructions[this.instructions.length - 1];
        return (r = 0 === this._tick && s?.action === "stroke" ? s.data.path : this._activePath.clone()) && (null != e && (void 0 !== i && "number" == typeof e && ((0, l.deprecation)(l.v8_0_0, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), e = {
          color: e,
          alpha: i
        }), this._fillStyle = g(e, t.defaultFillStyle)), this.instructions.push({
          action: "fill",
          data: {
            style: this.fillStyle,
            path: r
          }
        }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this;
      }
      _initNextPathLocation() {
        let {
          x: t,
          y: e
        } = this._activePath.getLastPoint(s.Point.shared);
        this._activePath.clear(), this._activePath.moveTo(t, e);
      }
      stroke(e) {
        let i,
          r = this.instructions[this.instructions.length - 1];
        return (i = 0 === this._tick && r?.action === "fill" ? r.data.path : this._activePath.clone()) && (null != e && (this._strokeStyle = m(e, t.defaultStrokeStyle)), this.instructions.push({
          action: "stroke",
          data: {
            style: this.strokeStyle,
            path: i
          }
        }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this;
      }
      cut() {
        for (let t = 0; t < 2; t++) {
          let e = this.instructions[this.instructions.length - 1 - t],
            i = this._activePath.clone();
          if (e && ("stroke" === e.action || "fill" === e.action)) if (e.data.hole) e.data.hole.addPath(i);else {
            e.data.hole = i;
            break;
          }
        }
        return this._initNextPathLocation(), this;
      }
      arc(t, e, i, r, s, n) {
        this._tick++;
        let a = this._transform;
        return this._activePath.arc(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, i, r, s, n), this;
      }
      arcTo(t, e, i, r, s) {
        this._tick++;
        let n = this._transform;
        return this._activePath.arcTo(n.a * t + n.c * e + n.tx, n.b * t + n.d * e + n.ty, n.a * i + n.c * r + n.tx, n.b * i + n.d * r + n.ty, s), this;
      }
      arcToSvg(t, e, i, r, s, n, a) {
        this._tick++;
        let l = this._transform;
        return this._activePath.arcToSvg(t, e, i, r, s, l.a * n + l.c * a + l.tx, l.b * n + l.d * a + l.ty), this;
      }
      bezierCurveTo(t, e, i, r, s, n, a) {
        this._tick++;
        let l = this._transform;
        return this._activePath.bezierCurveTo(l.a * t + l.c * e + l.tx, l.b * t + l.d * e + l.ty, l.a * i + l.c * r + l.tx, l.b * i + l.d * r + l.ty, l.a * s + l.c * n + l.tx, l.b * s + l.d * n + l.ty, a), this;
      }
      closePath() {
        return this._tick++, this._activePath?.closePath(), this;
      }
      ellipse(t, e, i, r) {
        return this._tick++, this._activePath.ellipse(t, e, i, r, this._transform.clone()), this;
      }
      circle(t, e, i) {
        return this._tick++, this._activePath.circle(t, e, i, this._transform.clone()), this;
      }
      path(t) {
        return this._tick++, this._activePath.addPath(t, this._transform.clone()), this;
      }
      lineTo(t, e) {
        this._tick++;
        let i = this._transform;
        return this._activePath.lineTo(i.a * t + i.c * e + i.tx, i.b * t + i.d * e + i.ty), this;
      }
      moveTo(t, e) {
        this._tick++;
        let i = this._transform,
          r = this._activePath.instructions,
          s = i.a * t + i.c * e + i.tx,
          n = i.b * t + i.d * e + i.ty;
        return 1 === r.length && "moveTo" === r[0].action ? (r[0].data[0] = s, r[0].data[1] = n) : this._activePath.moveTo(s, n), this;
      }
      quadraticCurveTo(t, e, i, r, s) {
        this._tick++;
        let n = this._transform;
        return this._activePath.quadraticCurveTo(n.a * t + n.c * e + n.tx, n.b * t + n.d * e + n.ty, n.a * i + n.c * r + n.tx, n.b * i + n.d * r + n.ty, s), this;
      }
      rect(t, e, i, r) {
        return this._tick++, this._activePath.rect(t, e, i, r, this._transform.clone()), this;
      }
      roundRect(t, e, i, r, s) {
        return this._tick++, this._activePath.roundRect(t, e, i, r, s, this._transform.clone()), this;
      }
      poly(t, e) {
        return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this;
      }
      regularPoly(t, e, i, r, s = 0, n) {
        return this._tick++, this._activePath.regularPoly(t, e, i, r, s, n), this;
      }
      roundPoly(t, e, i, r, s, n) {
        return this._tick++, this._activePath.roundPoly(t, e, i, r, s, n), this;
      }
      roundShape(t, e, i, r) {
        return this._tick++, this._activePath.roundShape(t, e, i, r), this;
      }
      filletRect(t, e, i, r, s) {
        return this._tick++, this._activePath.filletRect(t, e, i, r, s), this;
      }
      chamferRect(t, e, i, r, s, n) {
        return this._tick++, this._activePath.chamferRect(t, e, i, r, s, n), this;
      }
      star(t, e, i, r, s = 0, n = 0) {
        return this._tick++, this._activePath.star(t, e, i, r, s, n, this._transform.clone()), this;
      }
      svg(t) {
        return this._tick++, (0, u.SVGParser)(t, this), this;
      }
      restore() {
        let t = this._stateStack.pop();
        return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this;
      }
      save() {
        return this._stateStack.push({
          transform: this._transform.clone(),
          fillStyle: {
            ...this._fillStyle
          },
          strokeStyle: {
            ...this._strokeStyle
          }
        }), this;
      }
      getTransform() {
        return this._transform;
      }
      resetTransform() {
        return this._transform.identity(), this;
      }
      rotate(t) {
        return this._transform.rotate(t), this;
      }
      scale(t, e = t) {
        return this._transform.scale(t, e), this;
      }
      setTransform(t, e, i, s, n, a) {
        return t instanceof r.Matrix ? this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty) : this._transform.set(t, e, i, s, n, a), this;
      }
      transform(t, e, i, s, n, a) {
        return t instanceof r.Matrix ? this._transform.append(t) : (P.set(t, e, i, s, n, a), this._transform.append(P)), this;
      }
      translate(t, e = t) {
        return this._transform.translate(t, e), this;
      }
      clear() {
        return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this;
      }
      onUpdate() {
        this._boundsDirty = !0, this.dirty = !0, this.emit("update", this, 16);
      }
      get bounds() {
        if (!this._boundsDirty) return this._bounds;
        this._boundsDirty = !1;
        let t = this._bounds;
        t.clear();
        for (let e = 0; e < this.instructions.length; e++) {
          let i = this.instructions[e],
            r = i.action;
          if ("fill" === r) {
            let e = i.data;
            t.addBounds(e.path.bounds);
          } else if ("texture" === r) {
            let e = i.data;
            t.addFrame(e.dx, e.dy, e.dx + e.dw, e.dy + e.dh, e.transform);
          }
          if ("stroke" === r) {
            let e = i.data,
              r = e.style.alignment,
              s = e.style.width * (1 - r);
            "miter" === e.style.join && (s *= b(e.path, e.style.miterLimit));
            let n = e.path.bounds;
            t.addFrame(n.minX - s, n.minY - s, n.maxX + s, n.maxY + s);
          }
        }
        return t.isValid || t.set(0, 0, 0, 0), t;
      }
      containsPoint(t) {
        if (!this.bounds.containsPoint(t.x, t.y)) return !1;
        let e = this.instructions,
          i = !1;
        for (let r = 0; r < e.length; r++) {
          let s = e[r],
            n = s.data,
            a = n.path;
          if (!s.action || !a) continue;
          let l = n.style,
            h = a.shapePath.shapePrimitives;
          for (let e = 0; e < h.length; e++) {
            let r = h[e].shape;
            if (!l || !r) continue;
            let a = h[e].transform,
              o = a ? a.applyInverse(t, _) : t;
            i = "fill" === s.action ? r.contains(o.x, o.y) : r.strokeContains(o.x, o.y, l.width, l.alignment);
            let u = n.hole;
            if (u) {
              let t = u.shapePath?.shapePrimitives;
              if (t) for (let e = 0; e < t.length; e++) t[e].shape.contains(o.x, o.y) && (i = !1);
            }
            if (i) return !0;
          }
        }
        return i;
      }
      unload() {
        for (let t in this.emit("unload", this), this._gpuData) this._gpuData[t]?.destroy();
        this._gpuData = Object.create(null);
      }
      destroy(t = !1) {
        if (!this.destroyed) {
          if (this.destroyed = !0, this._stateStack.length = 0, this._transform = null, this.unload(), this.emit("destroy", this), this.removeAllListeners(), "boolean" == typeof t ? t : t?.texture) {
            let e = "boolean" == typeof t ? t : t?.textureSource;
            this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(e)), this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(e));
          }
          this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
        }
      }
    };
  v.defaultFillStyle = {
    color: 0xffffff,
    alpha: 1,
    texture: n.Texture.WHITE,
    matrix: null,
    fill: null,
    textureSpace: "local"
  }, v.defaultStrokeStyle = {
    width: 1,
    color: 0xffffff,
    alpha: 1,
    alignment: .5,
    miterLimit: 10,
    cap: "butt",
    join: "miter",
    texture: n.Texture.WHITE,
    matrix: null,
    fill: null,
    textureSpace: "local",
    pixelLine: !1
  }, t.s(["GraphicsContext", 0, v], 558001);
};
