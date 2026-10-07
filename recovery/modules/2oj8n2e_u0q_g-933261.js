// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 933261, 310828, 217055.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(550027),
    i = e.i(430160),
    n = e.i(959684),
    s = e.i(815343),
    a = e.i(229972),
    o = e.i(188578),
    u = e.i(403976),
    l = e.i(761149);
  class h extends l.Shader {
    constructor(e) {
      super({
        glProgram: (0, n.compileHighShaderGlProgram)({
          name: "batch",
          bits: [s.colorBitGl, (0, a.generateTextureBatchBitGl)(e), o.roundPixelsBitGl]
        }),
        gpuProgram: (0, n.compileHighShaderGpuProgram)({
          name: "batch",
          bits: [s.colorBit, (0, a.generateTextureBatchBit)(e), o.roundPixelsBit]
        }),
        resources: {
          batchSamplers: (0, u.getBatchSamplersUniformGroup)(e)
        }
      }), this.maxTextures = e;
    }
  }
  e.s(["DefaultShader", 0, h], 310828);
  let c = null,
    d = class e extends r.Batcher {
      constructor(t) {
        super(t), this.geometry = new i.BatchGeometry(), this.name = e.extension.name, this.vertexSize = 6, c ?? (c = new h(t.maxTextures)), this.shader = c;
      }
      packAttributes(e, t, r, i, n) {
        let s = n << 16 | 65535 & e.roundPixels,
          a = e.transform,
          o = a.a,
          u = a.b,
          l = a.c,
          h = a.d,
          c = a.tx,
          d = a.ty,
          {
            positions: f,
            uvs: m
          } = e,
          x = e.color,
          p = e.attributeOffset,
          v = p + e.attributeSize;
        for (let e = p; e < v; e++) {
          let n = 2 * e,
            a = f[n],
            p = f[n + 1];
          t[i++] = o * a + l * p + c, t[i++] = h * p + u * a + d, t[i++] = m[n], t[i++] = m[n + 1], r[i++] = x, r[i++] = s;
        }
      }
      packQuadAttributes(e, t, r, i, n) {
        let s = e.texture,
          a = e.transform,
          o = a.a,
          u = a.b,
          l = a.c,
          h = a.d,
          c = a.tx,
          d = a.ty,
          f = e.bounds,
          m = f.maxX,
          x = f.minX,
          p = f.maxY,
          v = f.minY,
          g = s.uvs,
          b = e.color,
          _ = n << 16 | 65535 & e.roundPixels;
        t[i + 0] = o * x + l * v + c, t[i + 1] = h * v + u * x + d, t[i + 2] = g.x0, t[i + 3] = g.y0, r[i + 4] = b, r[i + 5] = _, t[i + 6] = o * m + l * v + c, t[i + 7] = h * v + u * m + d, t[i + 8] = g.x1, t[i + 9] = g.y1, r[i + 10] = b, r[i + 11] = _, t[i + 12] = o * m + l * p + c, t[i + 13] = h * p + u * m + d, t[i + 14] = g.x2, t[i + 15] = g.y2, r[i + 16] = b, r[i + 17] = _, t[i + 18] = o * x + l * p + c, t[i + 19] = h * p + u * x + d, t[i + 20] = g.x3, t[i + 21] = g.y3, r[i + 22] = b, r[i + 23] = _;
      }
      _updateMaxTextures(e) {
        this.shader.maxTextures !== e && (c = new h(e), this.shader = c);
      }
      destroy() {
        this.shader = null, super.destroy();
      }
    };
  d.extension = {
    type: [t.ExtensionType.Batcher],
    name: "default"
  }, e.s(["DefaultBatcher", 0, d], 933261), e.s(["GCManagedHash", 0, class {
    constructor(e) {
      this.items = Object.create(null);
      const {
        renderer: t,
        type: r,
        onUnload: i,
        priority: n,
        name: s
      } = e;
      this._renderer = t, t.gc.addResourceHash(this, "items", r, n ?? 0), this._onUnload = i, this.name = s;
    }
    add(e) {
      return !this.items[e.uid] && (this.items[e.uid] = e, e.once("unload", this.remove, this), e._gcLastUsed = this._renderer.gc.now, !0);
    }
    remove(e, ...t) {
      if (!this.items[e.uid]) return;
      let r = e._gpuData[this._renderer.uid];
      r && (this._onUnload?.(e, ...t), r.destroy(), e._gpuData[this._renderer.uid] = null, this.items[e.uid] = null);
    }
    removeAll(...e) {
      Object.values(this.items).forEach(t => t && this.remove(t, ...e));
    }
    destroy(...e) {
      this.removeAll(...e), this.items = Object.create(null), this._renderer = null, this._onUnload = null;
    }
  }], 217055);
};
