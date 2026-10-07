// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 754287, 633840, 454710.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(688761),
    i = e.i(666258);
  let s = r.State.for2d();
  class a {
    start(e, t, r) {
      let i = e.renderer,
        a = i.encoder,
        n = r.gpuProgram;
      this._shader = r, this._geometry = t, a.setGeometry(t, n), s.blendMode = "normal", i.pipeline.getPipeline(t, n, s);
      let o = i.globalUniforms.bindGroup;
      a.resetBindGroup(1), a.setBindGroup(0, o, n);
    }
    execute(e, t) {
      let r = this._shader.gpuProgram,
        a = e.renderer,
        n = a.encoder;
      if (!t.bindGroup) {
        let e = t.textures;
        t.bindGroup = (0, i.getTextureBatchBindGroup)(e.textures, e.count, a.limits.maxBatchableTextures);
      }
      s.blendMode = t.blendMode;
      let o = a.bindGroup.getBindGroup(t.bindGroup, r, 1),
        u = a.pipeline.getPipeline(this._geometry, r, s, t.topology);
      t.bindGroup._touch(a.gc.now, a.tick), n.setPipeline(u), n.renderPassEncoder.setBindGroup(1, o), n.renderPassEncoder.drawIndexed(t.size, 1, t.start);
    }
  }
  a.extension = {
    type: [t.ExtensionType.WebGPUPipesAdaptor],
    name: "batch"
  }, e.s(["GpuBatchAdaptor", 0, a], 754287);
  class n {
    constructor(e) {
      this._hash = Object.create(null), this._renderer = e;
    }
    contextChange(e) {
      this._gpu = e;
    }
    getBindGroup(e, t, r) {
      return e._updateKey(), this._hash[e._key] || this._createBindGroup(e, t, r);
    }
    _createBindGroup(e, t, r) {
      let i = this._gpu.device,
        s = t.layout[r],
        a = [],
        n = this._renderer;
      for (let t in s) {
        let r,
          i = e.resources[t] ?? e.resources[s[t]];
        if ("uniformGroup" === i._resourceType) {
          n.ubo.updateUniformGroup(i);
          let e = i.buffer;
          r = {
            buffer: n.buffer.getGPUBuffer(e),
            offset: 0,
            size: e.descriptor.size
          };
        } else "buffer" === i._resourceType ? r = {
          buffer: n.buffer.getGPUBuffer(i),
          offset: 0,
          size: i.descriptor.size
        } : "bufferResource" === i._resourceType ? r = {
          buffer: n.buffer.getGPUBuffer(i.buffer),
          offset: i.offset,
          size: i.size
        } : "textureSampler" === i._resourceType ? r = n.texture.getGpuSampler(i) : "textureSource" === i._resourceType && (r = n.texture.getTextureView(i));
        a.push({
          binding: s[t],
          resource: r
        });
      }
      let o = n.shader.getProgramData(t).bindGroups[r],
        u = i.createBindGroup({
          layout: o,
          entries: a
        });
      return this._hash[e._key] = u, u;
    }
    destroy() {
      this._hash = null, this._renderer = null;
    }
  }
  n.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "bindGroup"
  }, e.s(["BindGroupSystem", 0, n], 633840);
  var o = e.i(217055),
    u = e.i(733705),
    d = e.i(563541);
  class l {
    constructor(e) {
      this.gpuBuffer = e;
    }
    destroy() {
      this.gpuBuffer.destroy(), this.gpuBuffer = null;
    }
  }
  class h {
    constructor(e) {
      this._renderer = e, this._managedBuffers = new o.GCManagedHash({
        renderer: e,
        type: "resource",
        onUnload: this.onBufferUnload.bind(this),
        name: "gpuBuffer"
      });
    }
    contextChange(e) {
      this._gpu = e;
    }
    getGPUBuffer(e) {
      return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid]?.gpuBuffer || this.createGPUBuffer(e);
    }
    updateBuffer(e) {
      let t = this.getGPUBuffer(e),
        r = e.data;
      return e._updateID && r && (e._updateID = 0, this._gpu.device.queue.writeBuffer(t, 0, r.buffer, 0, (e._updateSize || r.byteLength) + 3 & -4)), t;
    }
    destroyAll() {
      this._managedBuffers.removeAll();
    }
    onBufferUnload(e) {
      e.off("update", this.updateBuffer, this), e.off("change", this.onBufferChange, this);
    }
    createGPUBuffer(e) {
      let t = this._gpu.device.createBuffer(e.descriptor);
      return e._updateID = 0, e._resourceId = (0, u.uid)("resource"), e.data && ((0, d.fastCopy)(e.data.buffer, t.getMappedRange(), e.data.byteOffset, e.data.byteLength), t.unmap()), e._gpuData[this._renderer.uid] = new l(t), this._managedBuffers.add(e) && (e.on("update", this.updateBuffer, this), e.on("change", this.onBufferChange, this)), t;
    }
    onBufferChange(e) {
      this._managedBuffers.remove(e), e._updateID = 0, this.createGPUBuffer(e);
    }
    destroy() {
      this._managedBuffers.destroy(), this._renderer = null, this._gpu = null;
    }
  }
  h.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "buffer"
  }, e.s(["GpuBufferData", 0, l, "GpuBufferSystem", 0, h], 454710);
};
