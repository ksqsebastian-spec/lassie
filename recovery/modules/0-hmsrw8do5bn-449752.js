// Recovered from 0-hmsrw8do5bn.js. Runtime module IDs: 449752, 207841.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var a = e.i(222735),
    r = e.i(787653),
    i = e.i(164811);
  function n(e) {
    let t = r.DOMAdapter.get().createCanvas(6, 1),
      a = t.getContext("2d");
    return a.fillStyle = e, a.fillRect(0, 0, 6, 1), t;
  }
  function s() {
    if (void 0 !== t) return t;
    try {
      let e = n("#ff00ff"),
        a = n("#ffff00"),
        i = r.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
      i.globalCompositeOperation = "multiply", i.drawImage(e, 0, 0), i.drawImage(a, 2, 0);
      let s = i.getImageData(2, 0, 1, 1);
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
        a = t?.resource;
      if (!a) return null;
      let i = "premultiplied-alpha" === t.alphaMode,
        n = t.resourceWidth ?? t.pixelWidth,
        s = t.resourceHeight ?? t.pixelHeight,
        l = n !== t.pixelWidth || s !== t.pixelHeight;
      if (i) {
        if ((a instanceof HTMLCanvasElement || "u" > typeof OffscreenCanvas && a instanceof OffscreenCanvas) && !l) return a;
        let e = o._unpremultipliedCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
      }
      if (a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || a instanceof Uint16Array || a instanceof Int16Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof ArrayBuffer) {
        let e = o._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let i = r.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          n = i.getContext("2d"),
          s = n.createImageData(t.pixelWidth, t.pixelHeight),
          l = s.data,
          h = a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        if ("bgra8unorm" === t.format) for (let e = 0; e < l.length && e + 3 < h.length; e += 4) l[e] = h[e + 2], l[e + 1] = h[e + 1], l[e + 2] = h[e], l[e + 3] = h[e + 3];else l.set(h.subarray(0, l.length));
        return n.putImageData(s, 0, 0), o._canvasSourceCache.set(t, {
          canvas: i,
          resourceId: t._resourceId
        }), i;
      }
      if (i) {
        let e = r.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          i = e.getContext("2d", {
            willReadFrequently: !0
          });
        e.width = t.pixelWidth, e.height = t.pixelHeight, i.drawImage(a, 0, 0);
        let n = i.getImageData(0, 0, e.width, e.height),
          s = n.data;
        for (let e = 0; e < s.length; e += 4) {
          let t = s[e + 3];
          if (t > 0) {
            let a = 255 / t;
            s[e] = Math.min(255, s[e] * a + .5), s[e + 1] = Math.min(255, s[e + 1] * a + .5), s[e + 2] = Math.min(255, s[e + 2] * a + .5);
          }
        }
        return i.putImageData(n, 0, 0), o._unpremultipliedCache.set(t, {
          canvas: e,
          resourceId: t._resourceId
        }), e;
      }
      if (l) {
        let e = o._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let i = r.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          n = i.getContext("2d");
        return i.width = t.pixelWidth, i.height = t.pixelHeight, n.drawImage(a, 0, 0), o._canvasSourceCache.set(t, {
          canvas: i,
          resourceId: t._resourceId
        }), i;
      }
      return a;
    },
    getTintedCanvas: (e, t) => {
      let i = e.texture,
        n = a.Color.shared.setValue(t).toHex(),
        s = i.tintCache || (i.tintCache = {}),
        l = s[n],
        h = i.source._resourceId;
      if (l?.tintId === h) return l;
      let d = l && "getContext" in l ? l : r.DOMAdapter.get().createCanvas();
      if (o.tintMethod(i, t, d), d.tintId = h, o.convertTintToImage && void 0 !== d.toDataURL) {
        let e = r.DOMAdapter.get().createImage();
        e.src = d.toDataURL(), e.tintId = h, s[n] = e;
      } else s[n] = d;
      return s[n];
    },
    getTintedPattern: (e, t) => {
      let i = a.Color.shared.setValue(t).toHex(),
        n = e.patternCache || (e.patternCache = {}),
        s = e.source._resourceId,
        l = n[i];
      return l?.tintId === s || (o.canvas || (o.canvas = r.DOMAdapter.get().createCanvas()), o.tintMethod(e, t, o.canvas), (l = o.canvas.getContext("2d").createPattern(o.canvas, "repeat")).tintId = s, n[i] = l), l;
    },
    applyPatternTransform: (e, t, a = !0) => {
      if (!t || !e.setTransform) return;
      let r = globalThis.DOMMatrix;
      if (!r) return;
      let i = new r([t.a, t.b, t.c, t.d, t.tx, t.ty]);
      e.setTransform(a ? i.inverse() : i);
    },
    tintWithMultiply: (e, t, r) => {
      let n = r.getContext("2d"),
        s = e.frame.clone(),
        l = e.source._resolution ?? e.source.resolution ?? 1,
        h = e.rotate;
      s.x *= l, s.y *= l, s.width *= l, s.height *= l;
      let d = i.groupD8.isVertical(h),
        c = d ? s.height : s.width,
        u = d ? s.width : s.height;
      r.width = Math.ceil(c), r.height = Math.ceil(u), n.save(), n.fillStyle = a.Color.shared.setValue(t).toHex(), n.fillRect(0, 0, c, u), n.globalCompositeOperation = "multiply";
      let p = o.getCanvasSource(e);
      p && (h && o._applyInverseRotation(n, h, s.width, s.height), n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), n.globalCompositeOperation = "destination-atop", n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), n.restore();
    },
    tintWithOverlay: (e, t, r) => {
      let n = r.getContext("2d"),
        s = e.frame.clone(),
        l = e.source._resolution ?? e.source.resolution ?? 1,
        h = e.rotate;
      s.x *= l, s.y *= l, s.width *= l, s.height *= l;
      let d = i.groupD8.isVertical(h),
        c = d ? s.height : s.width,
        u = d ? s.width : s.height;
      r.width = Math.ceil(c), r.height = Math.ceil(u), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = a.Color.shared.setValue(t).toHex(), n.fillRect(0, 0, c, u), n.globalCompositeOperation = "destination-atop";
      let p = o.getCanvasSource(e);
      p && (h && o._applyInverseRotation(n, h, s.width, s.height), n.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), n.restore();
    },
    tintWithPerPixel: (e, t, a) => {
      let r = a.getContext("2d"),
        n = e.frame.clone(),
        s = e.source._resolution ?? e.source.resolution ?? 1,
        l = e.rotate;
      n.x *= s, n.y *= s, n.width *= s, n.height *= s;
      let h = i.groupD8.isVertical(l),
        d = h ? n.height : n.width,
        c = h ? n.width : n.height;
      a.width = Math.ceil(d), a.height = Math.ceil(c), r.save(), r.globalCompositeOperation = "copy";
      let u = o.getCanvasSource(e);
      if (!u) return void r.restore();
      l && o._applyInverseRotation(r, l, n.width, n.height), r.drawImage(u, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.restore();
      let p = t >> 16 & 255,
        g = t >> 8 & 255,
        f = 255 & t,
        x = r.getImageData(0, 0, d, c),
        m = x.data;
      for (let e = 0; e < m.length; e += 4) m[e] = m[e] * p / 255, m[e + 1] = m[e + 1] * g / 255, m[e + 2] = m[e + 2] * f / 255;
      r.putImageData(x, 0, 0);
    },
    _applyInverseRotation: (e, t, a, r) => {
      let n = i.groupD8.inv(t),
        s = i.groupD8.uX(n),
        o = i.groupD8.uY(n),
        l = i.groupD8.vX(n),
        h = i.groupD8.vY(n),
        d = -Math.min(0, s * a, l * r, s * a + l * r),
        c = -Math.min(0, o * a, h * r, o * a + h * r);
      e.transform(s, o, l, h, d, c);
    }
  };
  o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel, e.s(["canvasUtils", 0, o], 449752);
};
