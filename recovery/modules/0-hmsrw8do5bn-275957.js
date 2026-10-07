// Recovered from 0-hmsrw8do5bn.js. Runtime module IDs: 275957, 542553, 198418, 110323, 149566, 735741.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    a = e.i(164811),
    r = e.i(389474),
    i = e.i(997125),
    n = e.i(414205),
    s = e.i(449752);
  let o = class e {
    static _getPatternRepeat(e, t) {
      let a = e && "clamp-to-edge" !== e,
        r = t && "clamp-to-edge" !== t;
      return a && r ? "repeat" : a ? "repeat-x" : r ? "repeat-y" : "no-repeat";
    }
    start(e, t, a) {}
    execute(t, r) {
      let o = r.elements;
      if (!o || !o.length) return;
      let l = t.renderer,
        h = l.canvasContext,
        d = h.activeContext;
      for (let t = 0; t < o.length; t++) {
        let c = o[t];
        if (!c.packAsQuad) continue;
        let u = c.texture,
          p = u ? s.canvasUtils.getCanvasSource(u) : null;
        if (!p) continue;
        let g = u.source.style,
          f = h.smoothProperty,
          x = "nearest" !== g.scaleMode;
        d[f] !== x && (d[f] = x), h.setBlendMode(r.blendMode);
        let m = l.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
          v = c.color,
          y = (m >>> 24 & 255) / 255 * ((v >>> 24 & 255) / 255) * (l.filter?.alphaMultiplier ?? 1);
        if (y <= 0) continue;
        d.globalAlpha = y;
        let C = 0xffffff & m,
          T = 0xffffff & v,
          M = (0, i.bgr2rgb)((0, n.multiplyHexColors)(T, C)),
          b = u.frame,
          _ = g.addressModeU ?? g.addressMode,
          w = g.addressModeV ?? g.addressMode,
          P = e._getPatternRepeat(_, w),
          k = u.source._resolution ?? u.source.resolution ?? 1,
          I = c.renderable?.renderGroup?.isCachedAsTexture,
          S = b.x * k,
          R = b.y * k,
          A = b.width * k,
          D = b.height * k,
          B = c.bounds,
          U = l.renderTarget.renderTarget.isRoot,
          H = B.minX,
          O = B.minY,
          W = B.maxX - B.minX,
          E = B.maxY - B.minY,
          G = u.rotate,
          F = u.uvs,
          q = Math.min(F.x0, F.x1, F.x2, F.x3, F.y0, F.y1, F.y2, F.y3),
          L = Math.max(F.x0, F.x1, F.x2, F.x3, F.y0, F.y1, F.y2, F.y3),
          V = "no-repeat" !== P && (q < 0 || L > 1),
          N = !V && (0xffffff !== M || G),
          Y = G && !N;
        Y ? (e._tempPatternMatrix.copyFrom(c.transform), a.groupD8.matrixAppendRotationInv(e._tempPatternMatrix, G, H, O, W, E), h.setContextTransform(e._tempPatternMatrix, 1 === c.roundPixels, void 0, I && U)) : h.setContextTransform(c.transform, 1 === c.roundPixels, void 0, I && U);
        let j = Y ? 0 : H,
          X = Y ? 0 : O;
        if (Y || 1 !== c.roundPixels || (j |= 0, X |= 0), V) {
          let t = p,
            a = 0xffffff !== M && !G,
            r = b.width <= u.source.width && b.height <= u.source.height;
          a && r && (t = s.canvasUtils.getTintedCanvas({
            texture: u
          }, M));
          let i = d.createPattern(t, P);
          if (!i || 0 === W || 0 === E) continue;
          let n = 1 / W,
            o = 1 / E,
            l = (F.x1 - F.x0) * n,
            h = (F.y1 - F.y0) * n,
            c = (F.x3 - F.x0) * o,
            g = (F.y3 - F.y0) * o,
            f = F.x0 - l * j - c * X,
            x = F.y0 - h * j - g * X,
            m = u.source.pixelWidth,
            v = u.source.pixelHeight;
          e._tempPatternMatrix.set(l * m, h * v, c * m, g * v, f * m, x * v), s.canvasUtils.applyPatternTransform(i, e._tempPatternMatrix), d.fillStyle = i, d.fillRect(j, X, W, E);
        } else {
          let e = 0xffffff !== M || G ? s.canvasUtils.getTintedCanvas({
              texture: u
            }, M) : p,
            t = e !== p;
          d.drawImage(e, t ? 0 : S, t ? 0 : R, t ? e.width : A, t ? e.height : D, j, X, W, E);
        }
      }
    }
  };
  o._tempPatternMatrix = new r.Matrix(), o.extension = {
    type: [t.ExtensionType.CanvasPipesAdaptor],
    name: "batch"
  }, e.s(["CanvasBatchAdaptor", 0, o], 275957);
  class l {
    constructor(e) {
      this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e;
    }
    buildStart() {
      this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15;
    }
    push(e, t, a) {
      this._renderer.renderPipes.batch.break(a);
      let r = this._colorStack;
      r[this._colorStackIndex] = r[this._colorStackIndex - 1] & e.mask;
      let i = this._colorStack[this._colorStackIndex];
      i !== this._currentColor && (this._currentColor = i, a.add({
        renderPipeId: "colorMask",
        colorMask: i,
        canBundle: !1
      })), this._colorStackIndex++;
    }
    pop(e, t, a) {
      this._renderer.renderPipes.batch.break(a);
      let r = this._colorStack;
      this._colorStackIndex--;
      let i = r[this._colorStackIndex - 1];
      i !== this._currentColor && (this._currentColor = i, a.add({
        renderPipeId: "colorMask",
        colorMask: i,
        canBundle: !1
      }));
    }
    execute(e) {}
    destroy() {
      this._renderer = null, this._colorStack = null;
    }
  }
  l.extension = {
    type: [t.ExtensionType.CanvasPipes],
    name: "colorMask"
  }, e.s(["CanvasColorMaskPipe", 0, l], 542553);
  var h = e.i(625533),
    d = e.i(86958),
    c = e.i(967030),
    u = e.i(562140);
  function p(e, t) {
    switch (t.type) {
      case "rectangle":
        e.rect(t.x, t.y, t.width, t.height);
        break;
      case "roundedRectangle":
        var a, r, i, n, s;
        a = t.x, r = t.y, i = t.width, n = t.height, s = Math.max(0, Math.min(s = t.radius, Math.min(i, n) / 2)), e.moveTo(a + s, r), e.lineTo(a + i - s, r), e.quadraticCurveTo(a + i, r, a + i, r + s), e.lineTo(a + i, r + n - s), e.quadraticCurveTo(a + i, r + n, a + i - s, r + n), e.lineTo(a + s, r + n), e.quadraticCurveTo(a, r + n, a, r + n - s), e.lineTo(a, r + s), e.quadraticCurveTo(a, r, a + s, r);
        break;
      case "circle":
        e.moveTo(t.x + t.radius, t.y), e.arc(t.x, t.y, t.radius, 0, 2 * Math.PI);
        break;
      case "ellipse":
        e.ellipse ? (e.moveTo(t.x + t.halfWidth, t.y), e.ellipse(t.x, t.y, t.halfWidth, t.halfHeight, 0, 0, 2 * Math.PI)) : (e.save(), e.translate(t.x, t.y), e.scale(t.halfWidth, t.halfHeight), e.moveTo(1, 0), e.arc(0, 0, 1, 0, 2 * Math.PI), e.restore());
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
  class g {
    constructor(e) {
      this._warnedMaskTypes = new Set(), this._canvasMaskStack = [], this._renderer = e;
    }
    push(e, t, a) {
      this._renderer.renderPipes.batch.break(a), a.add({
        renderPipeId: "stencilMask",
        action: "pushMaskBegin",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
    }
    pop(e, t, a) {
      this._renderer.renderPipes.batch.break(a), a.add({
        renderPipeId: "stencilMask",
        action: "popMaskEnd",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
    }
    execute(e) {
      if ("pushMaskBegin" !== e.action && "popMaskEnd" !== e.action) return;
      let t = this._renderer,
        a = t.canvasContext,
        r = a?.activeContext;
      if (!r) return;
      if ("popMaskEnd" === e.action) {
        this._canvasMaskStack.pop() && r.restore();
        return;
      }
      e.inverse && this._warnOnce("inverse", "CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.");
      let i = e.mask.mask;
      if (!(i instanceof d.Graphics)) {
        this._warnOnce("nonGraphics", "CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask."), this._canvasMaskStack.push(!1);
        return;
      }
      let n = i.context?.instructions;
      if (!n?.length) return void this._canvasMaskStack.push(!1);
      r.save(), a.setContextTransform(i.groupTransform, (t._roundPixels | i._roundPixels) == 1), r.beginPath();
      let s = !1,
        o = !1;
      for (let e = 0; e < n.length; e++) {
        let t = n[e],
          a = t.action;
        if ("fill" !== a && "stroke" !== a) continue;
        let i = t.data,
          l = i?.path?.shapePath;
        if (!l?.shapePrimitives?.length) continue;
        let d = "stroke" === a,
          u = l.shapePrimitives;
        for (let e = 0; e < u.length; e++) {
          let t = u[e];
          if (!t?.shape) continue;
          let a = t.transform,
            n = a && !a.isIdentity();
          n && (r.save(), r.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)), d && i.style ? s = function (e, t, a) {
            let r = [],
              i = [],
              n = [],
              s = c.shapeBuilders[t.type];
            if (!s?.build(t, r)) return !1;
            let o = t.closePath ?? !0;
            (0, h.buildLine)(r, a, !1, o, i, n);
            for (let t = 0; t < n.length; t += 3) {
              let a = 2 * n[t],
                r = 2 * n[t + 1],
                s = 2 * n[t + 2];
              e.moveTo(i[a], i[a + 1]), e.lineTo(i[r], i[r + 1]), e.lineTo(i[s], i[s + 1]), e.closePath();
            }
            return !0;
          }(r, t.shape, i.style) || s : (p(r, t.shape), o = function (e, t) {
            if (!t?.length) return !1;
            for (let a = 0; a < t.length; a++) {
              let r = t[a];
              if (!r?.shape) continue;
              let i = r.transform,
                n = i && !i.isIdentity();
              n && (e.save(), e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty)), p(e, r.shape), n && e.restore();
            }
            return !0;
          }(r, t.holes) || o, s = !0), n && r.restore();
        }
      }
      if (!s) {
        r.restore(), this._canvasMaskStack.push(!1);
        return;
      }
      o ? r.clip("evenodd") : r.clip(), this._canvasMaskStack.push(!0);
    }
    destroy() {
      this._renderer = null, this._warnedMaskTypes = null, this._canvasMaskStack = null;
    }
    _warnOnce(e, t) {
      this._warnedMaskTypes.has(e) || (this._warnedMaskTypes.add(e), (0, u.warn)(t));
    }
  }
  g.extension = {
    type: [t.ExtensionType.CanvasPipes],
    name: "stencilMask"
  }, e.s(["CanvasStencilMaskPipe", 0, g], 198418);
  var f = e.i(222735),
    x = e.i(207841);
  let m = "source-over";
  function v() {
    let e = (0, x.canUseNewCanvasBlendModes)(),
      t = Object.create(null);
    return t.inherit = m, t.none = m, t.normal = "source-over", t.add = "lighter", t.multiply = e ? "multiply" : m, t.screen = e ? "screen" : m, t.overlay = e ? "overlay" : m, t.darken = e ? "darken" : m, t.lighten = e ? "lighten" : m, t["color-dodge"] = e ? "color-dodge" : m, t["color-burn"] = e ? "color-burn" : m, t["hard-light"] = e ? "hard-light" : m, t["soft-light"] = e ? "soft-light" : m, t.difference = e ? "difference" : m, t.exclusion = e ? "exclusion" : m, t.saturation = e ? "saturation" : m, t.color = e ? "color" : m, t.luminosity = e ? "luminosity" : m, t["linear-burn"] = e ? "color-burn" : m, t["linear-dodge"] = e ? "color-dodge" : m, t["linear-light"] = e ? "hard-light" : m, t["pin-light"] = e ? "hard-light" : m, t["vivid-light"] = e ? "hard-light" : m, t["hard-mix"] = m, t.negation = e ? "difference" : m, t["normal-npm"] = t.normal, t["add-npm"] = t.add, t["screen-npm"] = t.screen, t.erase = "destination-out", t.subtract = m, t.divide = m, t.min = m, t.max = m, t;
  }
  e.s(["mapCanvasBlendModesToPixi", 0, v], 110323);
  let y = new r.Matrix();
  class C {
    constructor(e) {
      this.activeResolution = 1, this.smoothProperty = "imageSmoothingEnabled", this.blendModes = v(), this._activeBlendMode = "normal", this._projTransform = null, this._outerBlend = !1, this._warnedBlendModes = new Set(), this._renderer = e;
    }
    resolutionChange(e) {
      this.activeResolution = e;
    }
    init() {
      let e = this._renderer.background.alpha < 1;
      if (this.rootContext = this._renderer.canvas.getContext("2d", {
        alpha: e
      }), this.activeContext = this.rootContext, this.activeResolution = this._renderer.resolution, !this.rootContext.imageSmoothingEnabled) {
        let e = this.rootContext;
        e.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : e.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : e.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : e.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled");
      }
    }
    setContextTransform(e, t, a, i) {
      let n = i ? r.Matrix.IDENTITY : this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix || r.Matrix.IDENTITY,
        s = y;
      s.copyFrom(n), s.append(e);
      let o = this._projTransform,
        l = this.activeResolution;
      if (a = a || l, o) {
        let e = r.Matrix.shared;
        e.copyFrom(s), e.prepend(o), s = e;
      }
      t ? this.activeContext.setTransform(s.a * a, s.b * a, s.c * a, s.d * a, s.tx * l | 0, s.ty * l | 0) : this.activeContext.setTransform(s.a * a, s.b * a, s.c * a, s.d * a, s.tx * l, s.ty * l);
    }
    clear(e, t) {
      let a = this.activeContext,
        r = this._renderer;
      if (a.clearRect(0, 0, r.width, r.height), e) {
        let i = f.Color.shared.setValue(e);
        a.globalAlpha = t ?? i.alpha, a.fillStyle = i.toHex(), a.fillRect(0, 0, r.width, r.height), a.globalAlpha = 1;
      }
    }
    setBlendMode(e) {
      if (this._activeBlendMode === e) return;
      this._activeBlendMode = e, this._outerBlend = !1;
      let t = this.blendModes[e];
      if (!t) {
        this._warnedBlendModes.has(e) || (console.warn(`CanvasRenderer: blend mode "${e}" is not supported in Canvas2D; falling back to "source-over".`), this._warnedBlendModes.add(e)), this.activeContext.globalCompositeOperation = "source-over";
        return;
      }
      this.activeContext.globalCompositeOperation = t;
    }
    destroy() {
      this.rootContext = null, this.activeContext = null, this._warnedBlendModes.clear();
    }
  }
  C.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "canvasContext"
  }, e.s(["CanvasContextSystem", 0, C], 149566);
  class T {
    constructor() {
      this.maxTextures = 16, this.maxBatchableTextures = 16, this.maxUniformBindings = 0;
    }
    init() {}
  }
  T.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "limits"
  }, e.s(["CanvasLimitsSystem", 0, T], 735741);
};
