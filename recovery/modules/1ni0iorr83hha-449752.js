// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 449752, 207841.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var r = e.i(222735),
    i = e.i(787653),
    a = e.i(164811);
  function n(e) {
    let t = i.DOMAdapter.get().createCanvas(6, 1),
      r = t.getContext("2d");
    return r.fillStyle = e, r.fillRect(0, 0, 6, 1), t;
  }
  function s() {
    if (void 0 !== t) return t;
    try {
      let e = n("#ff00ff"),
        r = n("#ffff00"),
        a = i.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
      a.globalCompositeOperation = "multiply", a.drawImage(e, 0, 0), a.drawImage(r, 2, 0);
      let s = a.getImageData(2, 0, 1, 1);
      if (s) {
        let e = s.data;
        t = 255 === e[0] && 0 === e[1] && 0 === e[2];
      } else t = !1;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  e.s(["canUseNewCanvasBlendModes", 0, s], 207841);
  let o = {
    canvas: null,
    convertTintToImage: !1,
    cacheStepsPerColorChannel: 8,
    canUseMultiply: s(),
    tintMethod: null,
    _canvasSourceCache: new WeakMap(),
    _unpremultipliedCache: new WeakMap(),
    getCanvasSource: e => {
      let t = e.source,
        r = t?.resource;
      if (!r) return null;
      let a = "premultiplied-alpha" === t.alphaMode,
        n = t.resourceWidth ?? t.pixelWidth,
        s = t.resourceHeight ?? t.pixelHeight,
        l = n !== t.pixelWidth || s !== t.pixelHeight;
      if (a) {
        if ((r instanceof HTMLCanvasElement || "u" > typeof OffscreenCanvas && r instanceof OffscreenCanvas) && !l) return r;
        let e = o._unpremultipliedCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
      }
      if (r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Uint32Array || r instanceof Int32Array || r instanceof Float32Array || r instanceof ArrayBuffer) {
        let e = o._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let a = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          n = a.getContext("2d"),
          s = n.createImageData(t.pixelWidth, t.pixelHeight),
          l = s.data,
          u = r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        if ("bgra8unorm" === t.format) for (let e = 0; e < l.length && e + 3 < u.length; e += 4) l[e] = u[e + 2], l[e + 1] = u[e + 1], l[e + 2] = u[e], l[e + 3] = u[e + 3];else l.set(u.subarray(0, l.length));
        return n.putImageData(s, 0, 0), o._canvasSourceCache.set(t, {
          canvas: a,
          resourceId: t._resourceId
        }), a;
      }
      if (a) {
        let e = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          a = e.getContext("2d", {
            willReadFrequently: !0
          });
        e.width = t.pixelWidth, e.height = t.pixelHeight, a.drawImage(r, 0, 0);
        let n = a.getImageData(0, 0, e.width, e.height),
          s = n.data;
        for (let e = 0; e < s.length; e += 4) {
          let t = s[e + 3];
          if (t > 0) {
            let r = 255 / t;
            s[e] = Math.min(255, s[e] * r + .5), s[e + 1] = Math.min(255, s[e + 1] * r + .5), s[e + 2] = Math.min(255, s[e + 2] * r + .5);
          }
        }
        return a.putImageData(n, 0, 0), o._unpremultipliedCache.set(t, {
          canvas: e,
          resourceId: t._resourceId
        }), e;
      }
      if (l) {
        let e = o._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let a = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          n = a.getContext("2d");
        return a.width = t.pixelWidth, a.height = t.pixelHeight, n.drawImage(r, 0, 0), o._canvasSourceCache.set(t, {
          canvas: a,
          resourceId: t._resourceId
        }), a;
      }
      return r;
    },
    getTintedCanvas: (e, t) => {
      let a = e.texture,
        n = r.Color.shared.setValue(t).toHex(),
        s = a.tintCache || (a.tintCache = {}),
        l = s[n],
        u = a.source._resourceId;
      if (l?.tintId === u) return l;
      let d = l && "getContext" in l ? l : i.DOMAdapter.get().createCanvas();
      if (o.tintMethod(a, t, d), d.tintId = u, o.convertTintToImage && void 0 !== d.toDataURL) {
        let e = i.DOMAdapter.get().createImage();
        e.src = d.toDataURL(), e.tintId = u, s[n] = e;
      } else s[n] = d;
      return s[n];
    },
    getTintedPattern: (e, t) => {
      let a = r.Color.shared.setValue(t).toHex(),
        n = e.patternCache || (e.patternCache = {}),
        s = e.source._resourceId,
        l = n[a];
      return l?.tintId === s || (o.canvas || (o.canvas = i.DOMAdapter.get().createCanvas()), o.tintMethod(e, t, o.canvas), (l = o.canvas.getContext("2d").createPattern(o.canvas, "repeat")).tintId = s, n[a] = l), l;
    },
    applyPatternTransform: (e, t, r = !0) => {
      if (!t || !e.setTransform) return;
      let i = globalThis.DOMMatrix;
      if (!i) return;
      let a = new i([t.a, t.b, t.c, t.d, t.tx, t.ty]);
      e.setTransform(r ? a.inverse() : a);
    },
    tintWithMultiply: (e, t, i) => {
      let n = i.getContext("2d"),
        s = e.frame.clone(),
        l = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      s.x *= l, s.y *= l, s.width *= l, s.height *= l;
      let d = a.groupD8.isVertical(u),
        h = d ? s.height : s.width,
        c = d ? s.width : s.height;
      i.width = Math.ceil(h), i.height = Math.ceil(c), n.save(), n.fillStyle = r.Color.shared.setValue(t).toHex(), n.fillRect(0, 0, h, c), n.globalCompositeOperation = "multiply";
      let f = o.getCanvasSource(e);
      f && (u && o._applyInverseRotation(n, u, s.width, s.height), n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), n.globalCompositeOperation = "destination-atop", n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), n.restore();
    },
    tintWithOverlay: (e, t, i) => {
      let n = i.getContext("2d"),
        s = e.frame.clone(),
        l = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      s.x *= l, s.y *= l, s.width *= l, s.height *= l;
      let d = a.groupD8.isVertical(u),
        h = d ? s.height : s.width,
        c = d ? s.width : s.height;
      i.width = Math.ceil(h), i.height = Math.ceil(c), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = r.Color.shared.setValue(t).toHex(), n.fillRect(0, 0, h, c), n.globalCompositeOperation = "destination-atop";
      let f = o.getCanvasSource(e);
      f && (u && o._applyInverseRotation(n, u, s.width, s.height), n.drawImage(f, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), n.restore();
    },
    tintWithPerPixel: (e, t, r) => {
      let i = r.getContext("2d"),
        n = e.frame.clone(),
        s = e.source._resolution ?? e.source.resolution ?? 1,
        l = e.rotate;
      n.x *= s, n.y *= s, n.width *= s, n.height *= s;
      let u = a.groupD8.isVertical(l),
        d = u ? n.height : n.width,
        h = u ? n.width : n.height;
      r.width = Math.ceil(d), r.height = Math.ceil(h), i.save(), i.globalCompositeOperation = "copy";
      let c = o.getCanvasSource(e);
      if (!c) return void i.restore();
      l && o._applyInverseRotation(i, l, n.width, n.height), i.drawImage(c, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i.restore();
      let f = t >> 16 & 255,
        p = t >> 8 & 255,
        m = 255 & t,
        v = i.getImageData(0, 0, d, h),
        x = v.data;
      for (let e = 0; e < x.length; e += 4) x[e] = x[e] * f / 255, x[e + 1] = x[e + 1] * p / 255, x[e + 2] = x[e + 2] * m / 255;
      i.putImageData(v, 0, 0);
    },
    _applyInverseRotation: (e, t, r, i) => {
      let n = a.groupD8.inv(t),
        s = a.groupD8.uX(n),
        o = a.groupD8.uY(n),
        l = a.groupD8.vX(n),
        u = a.groupD8.vY(n),
        d = -Math.min(0, s * r, l * i, s * r + l * i),
        h = -Math.min(0, o * r, u * i, o * r + u * i);
      e.transform(s, o, l, u, d, h);
    }
  };
  o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel, e.s(["canvasUtils", 0, o], 449752);
};
