// Recovered from 299sj06-x_laa.js. Runtime module IDs: 449752, 207841.
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
  function s() {
    if (void 0 !== t) return t;
    try {
      let e = a("#ff00ff"),
        r = a("#ffff00"),
        n = i.DOMAdapter.get().createCanvas(6, 1).getContext("2d");
      n.globalCompositeOperation = "multiply", n.drawImage(e, 0, 0), n.drawImage(r, 2, 0);
      let s = n.getImageData(2, 0, 1, 1);
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
  let l = {
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
      let n = "premultiplied-alpha" === t.alphaMode,
        a = t.resourceWidth ?? t.pixelWidth,
        s = t.resourceHeight ?? t.pixelHeight,
        o = a !== t.pixelWidth || s !== t.pixelHeight;
      if (n) {
        if ((r instanceof HTMLCanvasElement || "u" > typeof OffscreenCanvas && r instanceof OffscreenCanvas) && !o) return r;
        let e = l._unpremultipliedCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
      }
      if (r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || r instanceof Uint16Array || r instanceof Int16Array || r instanceof Uint32Array || r instanceof Int32Array || r instanceof Float32Array || r instanceof ArrayBuffer) {
        let e = l._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let n = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          a = n.getContext("2d"),
          s = a.createImageData(t.pixelWidth, t.pixelHeight),
          o = s.data,
          u = r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        if ("bgra8unorm" === t.format) for (let e = 0; e < o.length && e + 3 < u.length; e += 4) o[e] = u[e + 2], o[e + 1] = u[e + 1], o[e + 2] = u[e], o[e + 3] = u[e + 3];else o.set(u.subarray(0, o.length));
        return a.putImageData(s, 0, 0), l._canvasSourceCache.set(t, {
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
          s = a.data;
        for (let e = 0; e < s.length; e += 4) {
          let t = s[e + 3];
          if (t > 0) {
            let r = 255 / t;
            s[e] = Math.min(255, s[e] * r + .5), s[e + 1] = Math.min(255, s[e + 1] * r + .5), s[e + 2] = Math.min(255, s[e + 2] * r + .5);
          }
        }
        return n.putImageData(a, 0, 0), l._unpremultipliedCache.set(t, {
          canvas: e,
          resourceId: t._resourceId
        }), e;
      }
      if (o) {
        let e = l._canvasSourceCache.get(t);
        if (e?.resourceId === t._resourceId) return e.canvas;
        let n = i.DOMAdapter.get().createCanvas(t.pixelWidth, t.pixelHeight),
          a = n.getContext("2d");
        return n.width = t.pixelWidth, n.height = t.pixelHeight, a.drawImage(r, 0, 0), l._canvasSourceCache.set(t, {
          canvas: n,
          resourceId: t._resourceId
        }), n;
      }
      return r;
    },
    getTintedCanvas: (e, t) => {
      let n = e.texture,
        a = r.Color.shared.setValue(t).toHex(),
        s = n.tintCache || (n.tintCache = {}),
        o = s[a],
        u = n.source._resourceId;
      if (o?.tintId === u) return o;
      let d = o && "getContext" in o ? o : i.DOMAdapter.get().createCanvas();
      if (l.tintMethod(n, t, d), d.tintId = u, l.convertTintToImage && void 0 !== d.toDataURL) {
        let e = i.DOMAdapter.get().createImage();
        e.src = d.toDataURL(), e.tintId = u, s[a] = e;
      } else s[a] = d;
      return s[a];
    },
    getTintedPattern: (e, t) => {
      let n = r.Color.shared.setValue(t).toHex(),
        a = e.patternCache || (e.patternCache = {}),
        s = e.source._resourceId,
        o = a[n];
      return o?.tintId === s || (l.canvas || (l.canvas = i.DOMAdapter.get().createCanvas()), l.tintMethod(e, t, l.canvas), (o = l.canvas.getContext("2d").createPattern(l.canvas, "repeat")).tintId = s, a[n] = o), o;
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
        s = e.frame.clone(),
        o = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      s.x *= o, s.y *= o, s.width *= o, s.height *= o;
      let d = n.groupD8.isVertical(u),
        h = d ? s.height : s.width,
        c = d ? s.width : s.height;
      i.width = Math.ceil(h), i.height = Math.ceil(c), a.save(), a.fillStyle = r.Color.shared.setValue(t).toHex(), a.fillRect(0, 0, h, c), a.globalCompositeOperation = "multiply";
      let p = l.getCanvasSource(e);
      p && (u && l._applyInverseRotation(a, u, s.width, s.height), a.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), a.globalCompositeOperation = "destination-atop", a.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), a.restore();
    },
    tintWithOverlay: (e, t, i) => {
      let a = i.getContext("2d"),
        s = e.frame.clone(),
        o = e.source._resolution ?? e.source.resolution ?? 1,
        u = e.rotate;
      s.x *= o, s.y *= o, s.width *= o, s.height *= o;
      let d = n.groupD8.isVertical(u),
        h = d ? s.height : s.width,
        c = d ? s.width : s.height;
      i.width = Math.ceil(h), i.height = Math.ceil(c), a.save(), a.globalCompositeOperation = "copy", a.fillStyle = r.Color.shared.setValue(t).toHex(), a.fillRect(0, 0, h, c), a.globalCompositeOperation = "destination-atop";
      let p = l.getCanvasSource(e);
      p && (u && l._applyInverseRotation(a, u, s.width, s.height), a.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)), a.restore();
    },
    tintWithPerPixel: (e, t, r) => {
      let i = r.getContext("2d"),
        a = e.frame.clone(),
        s = e.source._resolution ?? e.source.resolution ?? 1,
        o = e.rotate;
      a.x *= s, a.y *= s, a.width *= s, a.height *= s;
      let u = n.groupD8.isVertical(o),
        d = u ? a.height : a.width,
        h = u ? a.width : a.height;
      r.width = Math.ceil(d), r.height = Math.ceil(h), i.save(), i.globalCompositeOperation = "copy";
      let c = l.getCanvasSource(e);
      if (!c) return void i.restore();
      o && l._applyInverseRotation(i, o, a.width, a.height), i.drawImage(c, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height), i.restore();
      let p = t >> 16 & 255,
        f = t >> 8 & 255,
        g = 255 & t,
        x = i.getImageData(0, 0, d, h),
        m = x.data;
      for (let e = 0; e < m.length; e += 4) m[e] = m[e] * p / 255, m[e + 1] = m[e + 1] * f / 255, m[e + 2] = m[e + 2] * g / 255;
      i.putImageData(x, 0, 0);
    },
    _applyInverseRotation: (e, t, r, i) => {
      let a = n.groupD8.inv(t),
        s = n.groupD8.uX(a),
        l = n.groupD8.uY(a),
        o = n.groupD8.vX(a),
        u = n.groupD8.vY(a),
        d = -Math.min(0, s * r, o * i, s * r + o * i),
        h = -Math.min(0, l * r, u * i, l * r + u * i);
      e.transform(s, l, o, u, d, h);
    }
  };
  l.tintMethod = l.canUseMultiply ? l.tintWithMultiply : l.tintWithPerPixel, e.s(["canvasUtils", 0, l], 449752);
};
