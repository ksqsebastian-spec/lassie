// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 81846, 955424, 882825, 930005.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["buildSimpleUvs", 0, function (t, e, i, r) {
    let s = 0;
    for (e *= i; s < r;) t[e] = 0, t[e + 1] = 0, e += i, s++;
  }, "buildUvs", 0, function (t, e, i, r, s, n, a, l = null) {
    let h = 0;
    i *= e, s *= n;
    let o = l.a,
      u = l.b,
      c = l.c,
      d = l.d,
      f = l.tx,
      p = l.ty;
    for (; h < a;) {
      let a = t[i],
        l = t[i + 1];
      r[s] = o * a + c * l + f, r[s + 1] = u * a + d * l + p, s += n, i += e, h++;
    }
  }], 81846), t.s(["transformVertices", 0, function (t, e, i, r, s) {
    let n = e.a,
      a = e.b,
      l = e.c,
      h = e.d,
      o = e.tx,
      u = e.ty;
    i || (i = 0), r || (r = 2), s || (s = t.length / r - i);
    let c = i * r;
    for (let e = 0; e < s; e++) {
      let e = t[c],
        i = t[c + 1];
      t[c] = n * e + l * i + o, t[c + 1] = a * e + h * i + u, c += r;
    }
  }], 955424);
  var e = t.i(389474),
    i = t.i(414205);
  let r = new e.Matrix();
  t.s(["BatchableGraphics", 0, class {
    constructor() {
      this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null;
    }
    get uvs() {
      return this.geometryData.uvs;
    }
    get positions() {
      return this.geometryData.vertices;
    }
    get indices() {
      return this.geometryData.indices;
    }
    get blendMode() {
      return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal";
    }
    get color() {
      let t = this.baseColor,
        e = t >> 16 | 65280 & t | (255 & t) << 16,
        r = this.renderable;
      return r ? (0, i.multiplyHexColors)(e, r.groupColor) + (this.alpha * r.groupAlpha * 255 << 24) : e + (255 * this.alpha << 24);
    }
    get transform() {
      return this.renderable?.groupTransform || r;
    }
    copyTo(t) {
      t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology;
    }
    reset() {
      this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list";
    }
    destroy() {
      this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null;
    }
  }], 882825);
  let s = {
      extension: {
        type: t.i(78278).ExtensionType.ShapeBuilder,
        name: "circle"
      },
      build(t, e) {
        let i, r, s, n, a, l;
        if ("circle" === t.type) {
          if ((a = l = t.radius) <= 0) return !1;
          i = t.x, r = t.y, s = n = 0;
        } else if ("ellipse" === t.type) {
          if (a = t.halfWidth, l = t.halfHeight, a <= 0 || l <= 0) return !1;
          i = t.x, r = t.y, s = n = 0;
        } else {
          let e = t.width / 2,
            h = t.height / 2;
          i = t.x + e, r = t.y + h, a = l = Math.max(0, Math.min(t.radius, Math.min(e, h))), s = e - a, n = h - l;
        }
        if (s < 0 || n < 0) return !1;
        let h = Math.ceil(2.3 * Math.sqrt(a + l)),
          o = 8 * h + 4 * !!s + 4 * !!n;
        if (0 === o) return !1;
        if (0 === h) return e[0] = e[6] = i + s, e[1] = e[3] = r + n, e[2] = e[4] = i - s, e[5] = e[7] = r - n, !0;
        let u = 0,
          c = 4 * h + 2 * !!s + 2,
          d = c,
          f = o,
          p = s + a,
          x = n,
          y = i + p,
          g = i - p,
          m = r + x;
        if (e[u++] = y, e[u++] = m, e[--c] = m, e[--c] = g, n) {
          let t = r - x;
          e[d++] = g, e[d++] = t, e[--f] = t, e[--f] = y;
        }
        for (let t = 1; t < h; t++) {
          let o = Math.PI / 2 * (t / h),
            p = s + Math.cos(o) * a,
            x = n + Math.sin(o) * l,
            y = i + p,
            g = i - p,
            m = r + x,
            b = r - x;
          e[u++] = y, e[u++] = m, e[--c] = m, e[--c] = g, e[d++] = g, e[d++] = b, e[--f] = b, e[--f] = y;
        }
        p = s, x = n + l, y = i + p, g = i - p, m = r + x;
        let b = r - x;
        return e[u++] = y, e[u++] = m, e[--f] = b, e[--f] = y, s && (e[u++] = g, e[u++] = m, e[--f] = b, e[--f] = g), !0;
      },
      triangulate(t, e, i, r, s, n) {
        if (0 === t.length) return;
        let a = 0,
          l = 0;
        for (let e = 0; e < t.length; e += 2) a += t[e], l += t[e + 1];
        a /= t.length / 2, l /= t.length / 2;
        let h = r;
        e[h * i] = a, e[h * i + 1] = l;
        let o = h++;
        for (let r = 0; r < t.length; r += 2) e[h * i] = t[r], e[h * i + 1] = t[r + 1], r > 0 && (s[n++] = h, s[n++] = o, s[n++] = h - 1), h++;
        s[n++] = o + 1, s[n++] = o, s[n++] = h - 1;
      }
    },
    n = {
      ...s,
      extension: {
        ...s.extension,
        name: "ellipse"
      }
    },
    a = {
      ...s,
      extension: {
        ...s.extension,
        name: "roundedRectangle"
      }
    };
  t.s(["buildCircle", 0, s, "buildEllipse", 0, n, "buildRoundedRectangle", 0, a], 930005);
};
