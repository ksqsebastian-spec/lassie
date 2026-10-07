// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 275957, 542553, 198418, 110323, 149566, 735741.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(164811),
    i = e.i(389474),
    a = e.i(997125),
    n = e.i(414205),
    s = e.i(449752);
  let o = class e {
    static _getPatternRepeat(e, t) {
      let r = e && "clamp-to-edge" !== e,
        i = t && "clamp-to-edge" !== t;
      return r && i ? "repeat" : r ? "repeat-x" : i ? "repeat-y" : "no-repeat";
    }
    start(e, t, r) {}
    execute(t, i) {
      let o = i.elements;
      if (!o || !o.length) return;
      let l = t.renderer,
        u = l.canvasContext,
        d = u.activeContext;
      for (let t = 0; t < o.length; t++) {
        let h = o[t];
        if (!h.packAsQuad) continue;
        let c = h.texture,
          f = c ? s.canvasUtils.getCanvasSource(c) : null;
        if (!f) continue;
        let p = c.source.style,
          m = u.smoothProperty,
          v = "nearest" !== p.scaleMode;
        d[m] !== v && (d[m] = v), u.setBlendMode(i.blendMode);
        let x = l.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
          g = h.color,
          y = (x >>> 24 & 255) / 255 * ((g >>> 24 & 255) / 255) * (l.filter?.alphaMultiplier ?? 1);
        if (y <= 0) continue;
        d.globalAlpha = y;
        let b = 0xffffff & x,
          T = 0xffffff & g,
          _ = (0, a.bgr2rgb)((0, n.multiplyHexColors)(T, b)),
          C = c.frame,
          S = p.addressModeU ?? p.addressMode,
          w = p.addressModeV ?? p.addressMode,
          M = e._getPatternRepeat(S, w),
          P = c.source._resolution ?? c.source.resolution ?? 1,
          k = h.renderable?.renderGroup?.isCachedAsTexture,
          F = C.x * P,
          I = C.y * P,
          R = C.width * P,
          U = C.height * P,
          B = h.bounds,
          A = l.renderTarget.renderTarget.isRoot,
          O = B.minX,
          G = B.minY,
          E = B.maxX - B.minX,
          D = B.maxY - B.minY,
          W = c.rotate,
          H = c.uvs,
          L = Math.min(H.x0, H.x1, H.x2, H.x3, H.y0, H.y1, H.y2, H.y3),
          V = Math.max(H.x0, H.x1, H.x2, H.x3, H.y0, H.y1, H.y2, H.y3),
          q = "no-repeat" !== M && (L < 0 || V > 1),
          z = !q && (0xffffff !== _ || W),
          N = W && !z;
        N ? (e._tempPatternMatrix.copyFrom(h.transform), r.groupD8.matrixAppendRotationInv(e._tempPatternMatrix, W, O, G, E, D), u.setContextTransform(e._tempPatternMatrix, 1 === h.roundPixels, void 0, k && A)) : u.setContextTransform(h.transform, 1 === h.roundPixels, void 0, k && A);
        let Y = N ? 0 : O,
          $ = N ? 0 : G;
        if (N || 1 !== h.roundPixels || (Y |= 0, $ |= 0), q) {
          let t = f,
            r = 0xffffff !== _ && !W,
            i = C.width <= c.source.width && C.height <= c.source.height;
          r && i && (t = s.canvasUtils.getTintedCanvas({
            texture: c
          }, _));
          let a = d.createPattern(t, M);
          if (!a || 0 === E || 0 === D) continue;
          let n = 1 / E,
            o = 1 / D,
            l = (H.x1 - H.x0) * n,
            u = (H.y1 - H.y0) * n,
            h = (H.x3 - H.x0) * o,
            p = (H.y3 - H.y0) * o,
            m = H.x0 - l * Y - h * $,
            v = H.y0 - u * Y - p * $,
            x = c.source.pixelWidth,
            g = c.source.pixelHeight;
          e._tempPatternMatrix.set(l * x, u * g, h * x, p * g, m * x, v * g), s.canvasUtils.applyPatternTransform(a, e._tempPatternMatrix), d.fillStyle = a, d.fillRect(Y, $, E, D);
        } else {
          let e = 0xffffff !== _ || W ? s.canvasUtils.getTintedCanvas({
              texture: c
            }, _) : f,
            t = e !== f;
          d.drawImage(e, t ? 0 : F, t ? 0 : I, t ? e.width : R, t ? e.height : U, Y, $, E, D);
        }
      }
    }
  };
  o._tempPatternMatrix = new i.Matrix(), o.extension = {
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
    push(e, t, r) {
      this._renderer.renderPipes.batch.break(r);
      let i = this._colorStack;
      i[this._colorStackIndex] = i[this._colorStackIndex - 1] & e.mask;
      let a = this._colorStack[this._colorStackIndex];
      a !== this._currentColor && (this._currentColor = a, r.add({
        renderPipeId: "colorMask",
        colorMask: a,
        canBundle: !1
      })), this._colorStackIndex++;
    }
    pop(e, t, r) {
      this._renderer.renderPipes.batch.break(r);
      let i = this._colorStack;
      this._colorStackIndex--;
      let a = i[this._colorStackIndex - 1];
      a !== this._currentColor && (this._currentColor = a, r.add({
        renderPipeId: "colorMask",
        colorMask: a,
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
  var u = e.i(625533),
    d = e.i(86958),
    h = e.i(967030),
    c = e.i(562140);
  function f(e, t) {
    switch (t.type) {
      case "rectangle":
        e.rect(t.x, t.y, t.width, t.height);
        break;
      case "roundedRectangle":
        var r, i, a, n, s;
        r = t.x, i = t.y, a = t.width, n = t.height, s = Math.max(0, Math.min(s = t.radius, Math.min(a, n) / 2)), e.moveTo(r + s, i), e.lineTo(r + a - s, i), e.quadraticCurveTo(r + a, i, r + a, i + s), e.lineTo(r + a, i + n - s), e.quadraticCurveTo(r + a, i + n, r + a - s, i + n), e.lineTo(r + s, i + n), e.quadraticCurveTo(r, i + n, r, i + n - s), e.lineTo(r, i + s), e.quadraticCurveTo(r, i, r + s, i);
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
          let r = t.points;
          if (!r?.length) break;
          e.moveTo(r[0], r[1]);
          for (let t = 2; t < r.length; t += 2) e.lineTo(r[t], r[t + 1]);
          t.closePath && e.closePath();
        }
    }
  }
  class p {
    constructor(e) {
      this._warnedMaskTypes = new Set(), this._canvasMaskStack = [], this._renderer = e;
    }
    push(e, t, r) {
      this._renderer.renderPipes.batch.break(r), r.add({
        renderPipeId: "stencilMask",
        action: "pushMaskBegin",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
    }
    pop(e, t, r) {
      this._renderer.renderPipes.batch.break(r), r.add({
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
        r = t.canvasContext,
        i = r?.activeContext;
      if (!i) return;
      if ("popMaskEnd" === e.action) {
        this._canvasMaskStack.pop() && i.restore();
        return;
      }
      e.inverse && this._warnOnce("inverse", "CanvasRenderer: inverse masks are not supported on Canvas2D; ignoring inverse flag.");
      let a = e.mask.mask;
      if (!(a instanceof d.Graphics)) {
        this._warnOnce("nonGraphics", "CanvasRenderer: only Graphics masks are supported in Canvas2D; skipping mask."), this._canvasMaskStack.push(!1);
        return;
      }
      let n = a.context?.instructions;
      if (!n?.length) return void this._canvasMaskStack.push(!1);
      i.save(), r.setContextTransform(a.groupTransform, (t._roundPixels | a._roundPixels) == 1), i.beginPath();
      let s = !1,
        o = !1;
      for (let e = 0; e < n.length; e++) {
        let t = n[e],
          r = t.action;
        if ("fill" !== r && "stroke" !== r) continue;
        let a = t.data,
          l = a?.path?.shapePath;
        if (!l?.shapePrimitives?.length) continue;
        let d = "stroke" === r,
          c = l.shapePrimitives;
        for (let e = 0; e < c.length; e++) {
          let t = c[e];
          if (!t?.shape) continue;
          let r = t.transform,
            n = r && !r.isIdentity();
          n && (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), d && a.style ? s = function (e, t, r) {
            let i = [],
              a = [],
              n = [],
              s = h.shapeBuilders[t.type];
            if (!s?.build(t, i)) return !1;
            let o = t.closePath ?? !0;
            (0, u.buildLine)(i, r, !1, o, a, n);
            for (let t = 0; t < n.length; t += 3) {
              let r = 2 * n[t],
                i = 2 * n[t + 1],
                s = 2 * n[t + 2];
              e.moveTo(a[r], a[r + 1]), e.lineTo(a[i], a[i + 1]), e.lineTo(a[s], a[s + 1]), e.closePath();
            }
            return !0;
          }(i, t.shape, a.style) || s : (f(i, t.shape), o = function (e, t) {
            if (!t?.length) return !1;
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              if (!i?.shape) continue;
              let a = i.transform,
                n = a && !a.isIdentity();
              n && (e.save(), e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)), f(e, i.shape), n && e.restore();
            }
            return !0;
          }(i, t.holes) || o, s = !0), n && i.restore();
        }
      }
      if (!s) {
        i.restore(), this._canvasMaskStack.push(!1);
        return;
      }
      o ? i.clip("evenodd") : i.clip(), this._canvasMaskStack.push(!0);
    }
    destroy() {
      this._renderer = null, this._warnedMaskTypes = null, this._canvasMaskStack = null;
    }
    _warnOnce(e, t) {
      this._warnedMaskTypes.has(e) || (this._warnedMaskTypes.add(e), (0, c.warn)(t));
    }
  }
  p.extension = {
    type: [t.ExtensionType.CanvasPipes],
    name: "stencilMask"
  }, e.s(["CanvasStencilMaskPipe", 0, p], 198418);
  var m = e.i(222735),
    v = e.i(207841);
  let x = "source-over";
  function g() {
    let e = (0, v.canUseNewCanvasBlendModes)(),
      t = Object.create(null);
    return t.inherit = x, t.none = x, t.normal = "source-over", t.add = "lighter", t.multiply = e ? "multiply" : x, t.screen = e ? "screen" : x, t.overlay = e ? "overlay" : x, t.darken = e ? "darken" : x, t.lighten = e ? "lighten" : x, t["color-dodge"] = e ? "color-dodge" : x, t["color-burn"] = e ? "color-burn" : x, t["hard-light"] = e ? "hard-light" : x, t["soft-light"] = e ? "soft-light" : x, t.difference = e ? "difference" : x, t.exclusion = e ? "exclusion" : x, t.saturation = e ? "saturation" : x, t.color = e ? "color" : x, t.luminosity = e ? "luminosity" : x, t["linear-burn"] = e ? "color-burn" : x, t["linear-dodge"] = e ? "color-dodge" : x, t["linear-light"] = e ? "hard-light" : x, t["pin-light"] = e ? "hard-light" : x, t["vivid-light"] = e ? "hard-light" : x, t["hard-mix"] = x, t.negation = e ? "difference" : x, t["normal-npm"] = t.normal, t["add-npm"] = t.add, t["screen-npm"] = t.screen, t.erase = "destination-out", t.subtract = x, t.divide = x, t.min = x, t.max = x, t;
  }
  e.s(["mapCanvasBlendModesToPixi", 0, g], 110323);
  let y = new i.Matrix();
  class b {
    constructor(e) {
      this.activeResolution = 1, this.smoothProperty = "imageSmoothingEnabled", this.blendModes = g(), this._activeBlendMode = "normal", this._projTransform = null, this._outerBlend = !1, this._warnedBlendModes = new Set(), this._renderer = e;
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
    setContextTransform(e, t, r, a) {
      let n = a ? i.Matrix.IDENTITY : this._renderer.globalUniforms.globalUniformData?.worldTransformMatrix || i.Matrix.IDENTITY,
        s = y;
      s.copyFrom(n), s.append(e);
      let o = this._projTransform,
        l = this.activeResolution;
      if (r = r || l, o) {
        let e = i.Matrix.shared;
        e.copyFrom(s), e.prepend(o), s = e;
      }
      t ? this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * l | 0, s.ty * l | 0) : this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * l, s.ty * l);
    }
    clear(e, t) {
      let r = this.activeContext,
        i = this._renderer;
      if (r.clearRect(0, 0, i.width, i.height), e) {
        let a = m.Color.shared.setValue(e);
        r.globalAlpha = t ?? a.alpha, r.fillStyle = a.toHex(), r.fillRect(0, 0, i.width, i.height), r.globalAlpha = 1;
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
  b.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "canvasContext"
  }, e.s(["CanvasContextSystem", 0, b], 149566);
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
