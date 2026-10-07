// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 550027, 565557, 563541, 589627, 443122, 272589, 387862, 50644, 430160.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t,
    r = e.i(733705);
  class i {
    constructor(e) {
      "number" == typeof e ? this.rawBinaryData = new ArrayBuffer(e) : e instanceof Uint8Array ? this.rawBinaryData = e.buffer : this.rawBinaryData = e, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
    }
    get int8View() {
      return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
    }
    get uint8View() {
      return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
    }
    get int16View() {
      return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
    }
    get int32View() {
      return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
    }
    get float64View() {
      return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array;
    }
    get bigUint64View() {
      return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array;
    }
    view(e) {
      return this[`${e}View`];
    }
    destroy() {
      this.rawBinaryData = null, this.uint32View = null, this.float32View = null, this.uint16View = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._int32View = null, this._float64Array = null, this._bigUint64Array = null;
    }
    static sizeOf(e) {
      switch (e) {
        case "int8":
        case "uint8":
          return 1;
        case "int16":
        case "uint16":
          return 2;
        case "int32":
        case "uint32":
        case "float32":
          return 4;
        default:
          throw Error(`${e} isn't a valid view type`);
      }
    }
  }
  e.s(["ViewableBuffer", 0, i], 565557);
  var n = e.i(727905),
    s = e.i(609932);
  function a(e, t, r, i) {
    if (r ?? (r = 0), i ?? (i = Math.min(e.byteLength - r, t.byteLength)), 7 & r || 7 & i) {
      if (3 & r || 3 & i) new Uint8Array(t).set(new Uint8Array(e, r, i));else {
        let n = i / 4;
        new Float32Array(t, 0, n).set(new Float32Array(e, r, n));
      }
    } else {
      let n = i / 8;
      new Float64Array(t, 0, n).set(new Float64Array(e, r, n));
    }
  }
  e.s(["fastCopy", 0, a], 563541);
  let o = {
    normal: "normal-npm",
    add: "add-npm",
    screen: "screen-npm"
  };
  var u = ((t = u || {})[t.DISABLED = 0] = "DISABLED", t[t.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", t[t.MASK_ACTIVE = 2] = "MASK_ACTIVE", t[t.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", t[t.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", t[t.NONE = 5] = "NONE", t);
  function l(e, t) {
    return "no-premultiply-alpha" === t.alphaMode && o[e] || e;
  }
  e.s(["BLEND_TO_NPM", 0, o, "STENCIL_MODES", 0, u], 589627), e.s(["getAdjustedBlendModeBlend", 0, l], 443122);
  var h = e.i(426832);
  function c(e, t) {
    if (0 === e) throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    let r = t.createShader(t.FRAGMENT_SHADER);
    try {
      for (;;) {
        let i = "precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi, function (e) {
          let t = "";
          for (let r = 0; r < e; ++r) r > 0 && (t += "\nelse "), r < e - 1 && (t += `if(test == ${r}.0){}`);
          return t;
        }(e));
        if (t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS)) break;
        e = e / 2 | 0;
      }
    } finally {
      t.deleteShader(r);
    }
    return e;
  }
  e.s(["checkMaxIfStatementsInShader", 0, c], 272589);
  let d = null;
  function f() {
    if (d) return d;
    let e = (0, h.getTestContext)();
    return d = c(d = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), e), e.getExtension("WEBGL_lose_context")?.loseContext(), d;
  }
  e.s(["getMaxTexturesPerBatch", 0, f], 387862);
  class m {
    constructor() {
      this.ids = Object.create(null), this.textures = [], this.count = 0;
    }
    clear() {
      for (let e = 0; e < this.count; e++) {
        let t = this.textures[e];
        this.textures[e] = null, this.ids[t.uid] = null;
      }
      this.count = 0;
    }
  }
  e.s(["BatchTextureArray", 0, m], 50644);
  class x {
    constructor() {
      this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new m(), this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0;
    }
    destroy() {
      this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null, this.elements = null;
    }
  }
  let p = [],
    v = 0;
  function g() {
    return v > 0 ? p[--v] : new x();
  }
  function b(e) {
    e.elements = null, p[v++] = e;
  }
  s.GlobalResourceRegistry.register({
    clear: () => {
      if (p.length > 0) for (let e of p) e && e.destroy();
      p.length = 0, v = 0;
    }
  });
  let _ = 0,
    y = class e {
      constructor(t) {
        this.uid = (0, r.uid)("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], (t = {
          ...e.defaultOptions,
          ...t
        }).maxTextures || ((0, n.deprecation)("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), t.maxTextures = f());
        const {
          maxTextures: s,
          attributesInitialSize: a,
          indicesInitialSize: o
        } = t;
        this.attributeBuffer = new i(4 * a), this.indexBuffer = new Uint16Array(o), this.maxTextures = s;
      }
      begin() {
        this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
        for (let e = 0; e < this.batchIndex; e++) b(this.batches[e]);
        this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0;
      }
      add(e) {
        this._elements[this.elementSize++] = e, e._indexStart = this.indexSize, e._attributeStart = this.attributeSize, e._batcher = this, this.indexSize += e.indexSize, this.attributeSize += e.attributeSize * this.vertexSize;
      }
      checkAndUpdateTexture(e, t) {
        let r = e._batch.textures.ids[t._source.uid];
        return (!!r || 0 === r) && (e._textureId = r, e.texture = t, !0);
      }
      updateElement(e) {
        this.dirty = !0;
        let t = this.attributeBuffer;
        e.packAsQuad ? this.packQuadAttributes(e, t.float32View, t.uint32View, e._attributeStart, e._textureId) : this.packAttributes(e, t.float32View, t.uint32View, e._attributeStart, e._textureId);
      }
      break(e) {
        let t = this._elements;
        if (!t[this.elementStart]) return;
        let r = g(),
          i = r.textures;
        i.clear();
        let n = t[this.elementStart],
          s = l(n.blendMode, n.texture._source),
          a = n.topology;
        4 * this.attributeSize > this.attributeBuffer.size && this._resizeAttributeBuffer(4 * this.attributeSize), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
        let o = this.attributeBuffer.float32View,
          u = this.attributeBuffer.uint32View,
          h = this.indexBuffer,
          c = this._batchIndexSize,
          d = this._batchIndexStart,
          f = "startBatch",
          m = [],
          x = this.maxTextures;
        for (let n = this.elementStart; n < this.elementSize; ++n) {
          let p = t[n];
          t[n] = null;
          let v = p.texture._source,
            b = l(p.blendMode, v),
            y = s !== b || a !== p.topology;
          if (v._batchTick === _ && !y) {
            p._textureId = v._textureBindLocation, c += p.indexSize, p.packAsQuad ? (this.packQuadAttributes(p, o, u, p._attributeStart, p._textureId), this.packQuadIndex(h, p._indexStart, p._attributeStart / this.vertexSize)) : (this.packAttributes(p, o, u, p._attributeStart, p._textureId), this.packIndex(p, h, p._indexStart, p._attributeStart / this.vertexSize)), p._batch = r, m.push(p);
            continue;
          }
          v._batchTick = _, (i.count >= x || y) && (this._finishBatch(r, d, c - d, i, s, a, e, f, m), f = "renderBatch", d = c, s = b, a = p.topology, (i = (r = g()).textures).clear(), m = [], ++_), p._textureId = v._textureBindLocation = i.count, i.ids[v.uid] = i.count, i.textures[i.count++] = v, p._batch = r, m.push(p), c += p.indexSize, p.packAsQuad ? (this.packQuadAttributes(p, o, u, p._attributeStart, p._textureId), this.packQuadIndex(h, p._indexStart, p._attributeStart / this.vertexSize)) : (this.packAttributes(p, o, u, p._attributeStart, p._textureId), this.packIndex(p, h, p._indexStart, p._attributeStart / this.vertexSize));
        }
        i.count > 0 && (this._finishBatch(r, d, c - d, i, s, a, e, f, m), d = c, ++_), this.elementStart = this.elementSize, this._batchIndexStart = d, this._batchIndexSize = c;
      }
      _finishBatch(e, t, r, i, n, s, a, o, u) {
        e.gpuBindGroup = null, e.bindGroup = null, e.action = o, e.batcher = this, e.textures = i, e.blendMode = n, e.topology = s, e.start = t, e.size = r, e.elements = u, ++_, this.batches[this.batchIndex++] = e, a.add(e);
      }
      finish(e) {
        this.break(e);
      }
      ensureAttributeBuffer(e) {
        4 * e <= this.attributeBuffer.size || this._resizeAttributeBuffer(4 * e);
      }
      ensureIndexBuffer(e) {
        e <= this.indexBuffer.length || this._resizeIndexBuffer(e);
      }
      _resizeAttributeBuffer(e) {
        let t = new i(Math.max(e, 2 * this.attributeBuffer.size));
        a(this.attributeBuffer.rawBinaryData, t.rawBinaryData), this.attributeBuffer = t;
      }
      _resizeIndexBuffer(e) {
        let t = this.indexBuffer,
          r = Math.max(e, 1.5 * t.length);
        r += r % 2;
        let i = r > 65535 ? new Uint32Array(r) : new Uint16Array(r);
        if (i.BYTES_PER_ELEMENT !== t.BYTES_PER_ELEMENT) for (let e = 0; e < t.length; e++) i[e] = t[e];else a(t.buffer, i.buffer);
        this.indexBuffer = i;
      }
      packQuadIndex(e, t, r) {
        e[t] = r + 0, e[t + 1] = r + 1, e[t + 2] = r + 2, e[t + 3] = r + 0, e[t + 4] = r + 2, e[t + 5] = r + 3;
      }
      packIndex(e, t, r, i) {
        let n = e.indices,
          s = e.indexSize,
          a = e.indexOffset,
          o = e.attributeOffset;
        for (let e = 0; e < s; e++) t[r++] = i + n[e + a] - o;
      }
      destroy(e = {}) {
        if (null !== this.batches) {
          for (let e = 0; e < this.batchIndex; e++) b(this.batches[e]);
          this.batches = null, this.geometry.destroy(!0), this.geometry = null, e.shader && (this.shader?.destroy(), this.shader = null);
          for (let e = 0; e < this._elements.length; e++) this._elements[e] && (this._elements[e]._batch = null);
          this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
        }
      }
    };
  y.defaultOptions = {
    maxTextures: null,
    attributesInitialSize: 4,
    indicesInitialSize: 6
  }, e.s(["Batch", 0, x, "Batcher", 0, y], 550027);
  var S = e.i(55585),
    w = e.i(294212),
    T = e.i(719885);
  let B = new Float32Array(1),
    A = new Uint32Array(1);
  class I extends T.Geometry {
    constructor() {
      const e = new S.Buffer({
        data: B,
        label: "attribute-batch-buffer",
        usage: w.BufferUsage.VERTEX | w.BufferUsage.COPY_DST,
        shrinkToFit: !1
      });
      super({
        attributes: {
          aPosition: {
            buffer: e,
            format: "float32x2",
            stride: 24,
            offset: 0
          },
          aUV: {
            buffer: e,
            format: "float32x2",
            stride: 24,
            offset: 8
          },
          aColor: {
            buffer: e,
            format: "unorm8x4",
            stride: 24,
            offset: 16
          },
          aTextureIdAndRound: {
            buffer: e,
            format: "uint16x2",
            stride: 24,
            offset: 20
          }
        },
        indexBuffer: new S.Buffer({
          data: A,
          label: "index-batch-buffer",
          usage: w.BufferUsage.INDEX | w.BufferUsage.COPY_DST,
          shrinkToFit: !1
        })
      });
    }
  }
  e.s(["BatchGeometry", 0, I], 430160);
};
