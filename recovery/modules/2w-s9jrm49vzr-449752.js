// Recovered from 2w-s9jrm49vzr.js. Runtime module IDs: 449752, 207841.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var r = e.i(222735),
    i = e.i(787653),
    n = e.i(164811);
  function a(e) {
    let t = i.DOMAdapter.get().createCanvas(6, 1),
      r = t.getContext("2d");
    return r.fillStyle = e, r.fillRect(0, 0, 6, 1), t;
  }
  function l() {
    if (void 0 !== t) return t;
    try {
      let e = a("#ff00ff"),
        r = a("#ffff00"),
        n = i.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
      n.globalCompositeOperation = "multiply", n.drawImage(e, 0, 0), n.drawImage(r, 2, 0);
      let l = n.getImageData(2, 0, 1, 1);
      if (l) {
        let e = l.data;
        t = 255 === e[0] && 0 === e[1] && 0 === e[2];
      } else t = !1;
    } catch (e) {
      t = !1;
    }
    return t;
  }
  e.s(["canUseNewCanvasBlendModes", 0, l], 207841);
  let s = {
    canvas: null,
    convertTintToImage: !1,
    cacheStepsPerColorChannel: 8,
    canUseMultiply: l(),
    tintMethod: null,
    _canvasSourceCache: new WeakMap(),
    _unpremultipliedCache: new WeakMap(),
    getCanvasSource: e => {
      let t = e.source,
        r = t?.resource;
      if (!r) return null;
      let n = "premultiplied-alpha" === t.alphaMode,
        a = t.resourceWidth ?? t.pixelWidth,
        l = t.resourceHeight ?? t.pixelHeight,
        o = a !== t.pixelWidth || l !== t.pixelHeight;
      if (n) {
        if ((r instanceof HTMLCanvasElement || "u" > typeof OffscreenCanvas && r instanceof OffscreenCanvas) && !o) return r;
        let e = s._unpremultipliedCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
      }
      if (r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Uint32Array || r instanceof Int32Array || r instanceof Float32Array || r instanceof ArrayBuffer) {
        let e = s._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let n = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          a = n.getContext("2d"),
          l = a.createImageData(t.pixelWidth, t.pixelHeight),
          o = l.data,
          u = r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        if ("bgra8unorm" === t.format) for (let e = 0; e < o.length && e + 3 < u.length; e += 4) o[e] = u[e + 2], o[e + 1] = u[e + 1], o[e + 2] = u[e], o[e + 3] = u[e + 3];else o.set(u.subarray(0, o.length));
        return a.putImageData(l, 0, 0), s._canvasSourceCache.set(t, {
          canvas: n,
          resourceId: t._resourceId
        }), n;
      }
      if (n) {
        let e = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          n = e.getContext("2d", {
            willReadFrequently: !0
          });
        e.width = t.pixelWidth, e.height = t.pixelHeight, n.drawImage(r, 0, 0);
        let a = n.getImageData(0, 0, e.width, e.height),
          l = a.data;
        for (let e = 0; e < l.length; e += 4) {
          let t = l[e + 3];
          if (t > 0) {
            let r = 255 / t;
            l[e] = Math.min(255, l[e] * r + .5), l[e + 1] = Math.min(255, l[e + 1] * r + .5), l[e + 2] = Math.min(255, l[e + 2] * r + .5);
          }
        }
        return n.putImageData(a, 0, 0), s._unpremultipliedCache.set(t, {
          canvas: e,
          resourceId: t._resourceId
        }), e;
      }
      if (o) {
        let e = s._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let n = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          a = n.getContext("2d");
        return n.width = t.pixelWidth, n.height = t.pixelHeight, a.drawImage(r, 0, 0), s._canvasSourceCache.set(t, {
          canvas: n,
          resourceId: t._resourceId
        }), n;
      }
      return r;
    },
    getTintedCanvas: (e, t) => {
      let n = e.texture,
        a = r.Color.shared.setValue(t).toHex(),
        l = n.tintCache || (n.tintCache = {}),
        o = l[a],
        u = n.source._resourceId;
      if (o?.tintId === u) return o;
      let h = o && "getContext" in o ? o : i.DOMAdapter.get().createCanvas();
      if (s.tintMethod(n, t, h), h.tintId = u, s.convertTintToImage && void 0 !== h.toDataURL) {
        let e = i.DOMAdapter.get().createImage();
        e.src = h.toDataURL(), e.tintId = u, l[a] = e;
      } else l[a] = h;
      return l[a];
    },
    getTintedPattern: (e, t) => {
      let n = r.Color.shared.setValue(t).toHex(),
        a = e.patternCache || (e.patternCache = {}),
        l = e.source._resourceId,
        o = a[n];
      return o?.tintId === l || (s.canvas || (s.canvas = i.DOMAdapter.get().createCanvas()), s.tintMethod(e, t, s.canvas), (o = s.canvas.getContext("2d").createPattern(s.canvas, "repeat")).tintId = l, a[n] = o), o;
    },
    applyPatternTransform: (e, t, r = !0) => {
      if (!t || !e.setTransform) return;
      let i = globalThis.DOMMatrix;
      if (!i) return;
      let n = new i([t.a, t.b, t.c, t.d, t.tx, t.ty]);
      e.setTransform(r ? n.inverse() : n);
    },
    tintWithMultiply: (e, t, i) => {
      let a = i.getContext("2d"),
        l = e.frame.clone(),
        o = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      l.x *= o, l.y *= o, l.width *= o, l.height *= o;
      let h = n.groupD8.isVertical(u),
        d = h ? l.height : l.width,
        c = h ? l.width : l.height;
      i.width = Math.ceil(d), i.height = Math.ceil(c), a.save(), a.fillStyle = r.Color.shared.setValue(t).toHex(), a.fillRect(0, 0, d, c), a.globalCompositeOperation = "multiply";
      let p = s.getCanvasSource(e);
      p && (u && s._applyInverseRotation(a, u, l.width, l.height), a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height), a.globalCompositeOperation = "destination-atop", a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height)), a.restore();
    },
    tintWithOverlay: (e, t, i) => {
      let a = i.getContext("2d"),
        l = e.frame.clone(),
        o = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      l.x *= o, l.y *= o, l.width *= o, l.height *= o;
      let h = n.groupD8.isVertical(u),
        d = h ? l.height : l.width,
        c = h ? l.width : l.height;
      i.width = Math.ceil(d), i.height = Math.ceil(c), a.save(), a.globalCompositeOperation = "copy", a.fillStyle = r.Color.shared.setValue(t).toHex(), a.fillRect(0, 0, d, c), a.globalCompositeOperation = "destination-atop";
      let p = s.getCanvasSource(e);
      p && (u && s._applyInverseRotation(a, u, l.width, l.height), a.drawImage(p, l.x, l.y, l.width, l.height, 0, 0, l.width, l.height)), a.restore();
    },
    tintWithPerPixel: (e, t, r) => {
      let i = r.getContext("2d"),
        a = e.frame.clone(),
        l = e.source._resolution ?? e.source.resolution ?? 1,
        o = e.rotate;
      a.x *= l, a.y *= l, a.width *= l, a.height *= l;
      let u = n.groupD8.isVertical(o),
        h = u ? a.height : a.width,
        d = u ? a.width : a.height;
      r.width = Math.ceil(h), r.height = Math.ceil(d), i.save(), i.globalCompositeOperation = "copy";
      let c = s.getCanvasSource(e);
      if (!c) return void i.restore();
      o && s._applyInverseRotation(i, o, a.width, a.height), i.drawImage(c, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height), i.restore();
      let p = t >> 16 & 255,
        f = t >> 8 & 255,
        g = 255 & t,
        x = i.getImageData(0, 0, h, d),
        m = x.data;
      for (let e = 0; e < m.length; e += 4) m[e] = m[e] * p / 255, m[e + 1] = m[e + 1] * f / 255, m[e + 2] = m[e + 2] * g / 255;
      i.putImageData(x, 0, 0);
    },
    _applyInverseRotation: (e, t, r, i) => {
      let a = n.groupD8.inv(t),
        l = n.groupD8.uX(a),
        s = n.groupD8.uY(a),
        o = n.groupD8.vX(a),
        u = n.groupD8.vY(a),
        h = -Math.min(0, l * r, o * i, l * r + o * i),
        d = -Math.min(0, s * r, u * i, s * r + u * i);
      e.transform(l, s, o, u, h, d);
    }
  };
  s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel, e.s(["canvasUtils", 0, s], 449752);
};
