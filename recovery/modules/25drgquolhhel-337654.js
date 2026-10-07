// Recovered from 25drgquolhhel.js. Runtime module IDs: 337654, 338228, 818642.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524),
    i = t.i(164811),
    s = t.i(539088),
    r = t.i(733705),
    n = t.i(727905),
    a = t.i(506721),
    h = t.i(78278),
    o = t.i(317765);
  class u extends o.TextureSource {
    constructor(t) {
      const e = t.resource || new Float32Array(t.width * t.height * 4);
      let i = t.format;
      i || (e instanceof Float32Array ? i = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? i = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? i = "rgba16uint" : (Int8Array, i = "bgra8unorm")), super({
        ...t,
        resource: e,
        format: i
      }), this.uploadMethodId = "buffer";
    }
    static test(t) {
      return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
    }
  }
  u.extension = h.ExtensionType.TextureSource, t.s(["BufferImageSource", 0, u], 338228);
  var l = t.i(389474);
  let d = new l.Matrix();
  class c {
    constructor(t, e) {
      this.mapCoord = new l.Matrix(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = 0, this.clampOffset = 0, void 0 === e ? this.clampMargin = t.width < 10 ? 0 : .5 : this.clampMargin = e, this.isSimple = !1, this.texture = t;
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      this._texture !== t && (this._texture?.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this)), this.update();
    }
    multiplyUvs(t, e) {
      void 0 === e && (e = t);
      let i = this.mapCoord;
      for (let s = 0; s < t.length; s += 2) {
        let r = t[s],
          n = t[s + 1];
        e[s] = r * i.a + n * i.c + i.tx, e[s + 1] = r * i.b + n * i.d + i.ty;
      }
      return e;
    }
    update() {
      let t = this._texture;
      this._updateID++;
      let e = t.uvs;
      this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
      let i = t.orig,
        s = t.trim;
      s && (d.set(i.width / s.width, 0, 0, i.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(d));
      let r = t.source,
        n = this.uClampFrame,
        a = this.clampMargin / r._resolution,
        h = this.clampOffset / r._resolution;
      return n[0] = (t.frame.x + a + h) / r.width, n[1] = (t.frame.y + a + h) / r.height, n[2] = (t.frame.x + t.frame.width - a + h) / r.width, n[3] = (t.frame.y + t.frame.height - a + h) / r.height, this.uClampOffset[0] = this.clampOffset / r.pixelWidth, this.uClampOffset[1] = this.clampOffset / r.pixelHeight, this.isSimple = t.frame.width === r.width && t.frame.height === r.height && 0 === t.rotate, !0;
    }
  }
  t.s(["TextureMatrix", 0, c], 818642);
  class f extends e.default {
    constructor({
      source: t,
      label: e,
      frame: i,
      orig: n,
      trim: a,
      defaultAnchor: h,
      defaultBorders: u,
      rotate: l,
      dynamic: d
    } = {}) {
      if (super(), this.uid = (0, r.uid)("texture"), this.uvs = {
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x3: 0,
        y3: 0
      }, this.frame = new s.Rectangle(), this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = t?.source ?? new o.TextureSource(), this.noFrame = !i, i) this.frame.copyFrom(i);else {
        const {
          width: t,
          height: e
        } = this._source;
        this.frame.width = t, this.frame.height = e;
      }
      this.orig = n || this.frame, this.trim = a, this.rotate = l ?? 0, this.defaultAnchor = h, this.defaultBorders = u, this.destroyed = !1, this.dynamic = d || !1, this.updateUvs();
    }
    set source(t) {
      this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this);
    }
    get source() {
      return this._source;
    }
    get textureMatrix() {
      return this._textureMatrix || (this._textureMatrix = new c(this)), this._textureMatrix;
    }
    get width() {
      return this.orig.width;
    }
    get height() {
      return this.orig.height;
    }
    updateUvs() {
      let {
          uvs: t,
          frame: e
        } = this,
        {
          width: s,
          height: r
        } = this._source,
        n = e.x / s,
        a = e.y / r,
        h = e.width / s,
        o = e.height / r,
        u = this.rotate;
      if (u) {
        let e = h / 2,
          s = o / 2,
          r = n + e,
          l = a + s;
        u = i.groupD8.add(u, i.groupD8.NW), t.x0 = r + e * i.groupD8.uX(u), t.y0 = l + s * i.groupD8.uY(u), u = i.groupD8.add(u, 2), t.x1 = r + e * i.groupD8.uX(u), t.y1 = l + s * i.groupD8.uY(u), u = i.groupD8.add(u, 2), t.x2 = r + e * i.groupD8.uX(u), t.y2 = l + s * i.groupD8.uY(u), u = i.groupD8.add(u, 2), t.x3 = r + e * i.groupD8.uX(u), t.y3 = l + s * i.groupD8.uY(u);
      } else t.x0 = n, t.y0 = a, t.x1 = n + h, t.y1 = a, t.x2 = n + h, t.y2 = a + o, t.x3 = n, t.y3 = a + o;
    }
    destroy(t = !1) {
      this._source && (this._source.off("resize", this.update, this), t && (this._source.destroy(), this._source = null)), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners();
    }
    update() {
      this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this);
    }
    get baseTexture() {
      return (0, n.deprecation)(n.v8_0_0, "Texture.baseTexture is now Texture.source"), this._source;
    }
  }
  f.EMPTY = new f({
    label: "EMPTY",
    source: new o.TextureSource({
      label: "EMPTY"
    })
  }), f.EMPTY.destroy = a.NOOP, f.WHITE = new f({
    source: new u({
      resource: new Uint8Array([255, 255, 255, 255]),
      width: 1,
      height: 1,
      alphaMode: "premultiply-alpha-on-upload",
      label: "WHITE"
    }),
    label: "WHITE"
  }), f.WHITE.destroy = a.NOOP, t.s(["Texture", 0, f], 337654);
};
