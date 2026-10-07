// Recovered from 25drgquolhhel.js. Runtime module IDs: 719885, 294212, 55585, 398013, 72131.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e,
    i = t.i(263524),
    s = t.i(453549),
    r = t.i(733705),
    n = i,
    a = ((e = a || {})[e.MAP_READ = 1] = "MAP_READ", e[e.MAP_WRITE = 2] = "MAP_WRITE", e[e.COPY_SRC = 4] = "COPY_SRC", e[e.COPY_DST = 8] = "COPY_DST", e[e.INDEX = 16] = "INDEX", e[e.VERTEX = 32] = "VERTEX", e[e.UNIFORM = 64] = "UNIFORM", e[e.STORAGE = 128] = "STORAGE", e[e.INDIRECT = 256] = "INDIRECT", e[e.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", e[e.STATIC = 1024] = "STATIC", e);
  t.s(["BufferUsage", 0, a], 294212);
  class h extends n.default {
    constructor(t) {
      let {
        data: e,
        size: i
      } = t;
      const {
        usage: s,
        label: n,
        shrinkToFit: a
      } = t;
      super(), this._gpuData = Object.create(null), this._gcLastUsed = -1, this.autoGarbageCollect = !0, this.uid = (0, r.uid)("buffer"), this._resourceType = "buffer", this._resourceId = (0, r.uid)("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, i ?? (i = e?.byteLength);
      const h = !!e;
      this.descriptor = {
        size: i,
        usage: s,
        mappedAtCreation: h,
        label: n
      }, this.shrinkToFit = a ?? !0;
    }
    get data() {
      return this._data;
    }
    set data(t) {
      this.setDataWithSize(t, t.length, !0);
    }
    get dataInt32() {
      return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32;
    }
    get static() {
      return !!(this.descriptor.usage & a.STATIC);
    }
    set static(t) {
      t ? this.descriptor.usage |= a.STATIC : this.descriptor.usage &= ~a.STATIC;
    }
    setDataWithSize(t, e, i) {
      if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
        i && this.emit("update", this);
        return;
      }
      let s = this._data;
      (this._data = t, this._dataInt32 = null, s && s.length === t.length) ? i && this.emit("update", this) : !this.shrinkToFit && s && t.byteLength < s.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = (0, r.uid)("resource"), this.emit("change", this));
    }
    update(t) {
      this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this);
    }
    unload() {
      for (let t in this.emit("unload", this), this._gpuData) this._gpuData[t]?.destroy();
      this._gpuData = Object.create(null);
    }
    destroy() {
      this.destroyed = !0, this.unload(), this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners();
    }
  }
  function o(t, e) {
    if (!(t instanceof h)) {
      let i = e ? a.INDEX : a.VERTEX;
      t instanceof Array && (e ? (t = new Uint32Array(t), i = a.INDEX | a.COPY_DST) : (t = new Float32Array(t), i = a.VERTEX | a.COPY_DST)), t = new h({
        data: t,
        label: e ? "index-mesh-buffer" : "vertex-mesh-buffer",
        usage: i
      });
    }
    return t;
  }
  function u(t, e, i) {
    let s = t.getAttribute(e);
    if (!s) return i.minX = 0, i.minY = 0, i.maxX = 0, i.maxY = 0, i;
    let r = s.buffer.data,
      n = 1 / 0,
      a = 1 / 0,
      h = -1 / 0,
      o = -1 / 0,
      u = r.BYTES_PER_ELEMENT,
      l = (s.offset || 0) / u,
      d = (s.stride || 8) / u;
    for (let t = l; t < r.length; t += d) {
      let e = r[t],
        i = r[t + 1];
      e > h && (h = e), i > o && (o = i), e < n && (n = e), i < a && (a = i);
    }
    return i.minX = n, i.minY = a, i.maxX = h, i.maxY = o, i;
  }
  t.s(["Buffer", 0, h], 55585), t.s(["ensureIsBuffer", 0, o], 398013), t.s(["getGeometryBounds", 0, u], 72131);
  class l extends i.default {
    constructor(t = {}) {
      super(), this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this.uid = (0, r.uid)("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new s.Bounds(), this._boundsDirty = !0;
      const {
        attributes: e,
        indexBuffer: i,
        topology: n
      } = t;
      if (this.buffers = [], this.attributes = {}, e) for (const t in e) this.addAttribute(t, e[t]);
      this.instanceCount = t.instanceCount ?? 1, i && this.addIndex(i), this.topology = n || "triangle-list";
    }
    onBufferUpdate() {
      this._boundsDirty = !0, this.emit("update", this);
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    getIndex() {
      return this.indexBuffer;
    }
    getBuffer(t) {
      return this.getAttribute(t).buffer;
    }
    getSize() {
      for (let t in this.attributes) {
        let e = this.attributes[t];
        return e.buffer.data.length / (e.stride / 4 || e.size);
      }
      return 0;
    }
    addAttribute(t, e) {
      var i;
      let s = (((i = e) instanceof h || Array.isArray(i) || i.BYTES_PER_ELEMENT) && (i = {
        buffer: i
      }), i.buffer = o(i.buffer, !1), i);
      -1 === this.buffers.indexOf(s.buffer) && (this.buffers.push(s.buffer), s.buffer.on("update", this.onBufferUpdate, this), s.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = s;
    }
    addIndex(t) {
      this.indexBuffer = o(t, !0), this.buffers.push(this.indexBuffer);
    }
    get bounds() {
      return this._boundsDirty ? (this._boundsDirty = !1, u(this, "aPosition", this._bounds)) : this._bounds;
    }
    unload() {
      for (let t in this.emit("unload", this), this._gpuData) this._gpuData[t]?.destroy();
      this._gpuData = Object.create(null);
    }
    destroy(t = !1) {
      this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach(t => t.destroy()), this.unload(), this.indexBuffer?.destroy(), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
    }
  }
  t.s(["Geometry", 0, l], 719885);
};
