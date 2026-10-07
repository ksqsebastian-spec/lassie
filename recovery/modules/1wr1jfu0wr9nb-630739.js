// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 630739, 952222, 771690, 942816, 216248, 500030, 905072, 71203, 221845, 649308, 908565, 67473, 333962, 955419, 349139.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(55585),
    i = e.i(693398),
    s = e.i(294212),
    a = e.i(910120),
    n = e.i(175444);
  class o {
    constructor(e) {
      this._bindGroupHash = Object.create(null), this._buffers = [], this._bindGroups = [], this._bufferResources = [], this._renderer = e, this._batchBuffer = new a.UboBatch({
        minUniformOffsetAlignment: 128
      });
      for (let e = 0; e < 2; e++) {
        let t = s.BufferUsage.UNIFORM | s.BufferUsage.COPY_DST;
        0 === e && (t |= s.BufferUsage.COPY_SRC), this._buffers.push(new r.Buffer({
          data: this._batchBuffer.data,
          usage: t
        }));
      }
    }
    renderEnd() {
      this._uploadBindGroups(), this._resetBindGroups();
    }
    _resetBindGroups() {
      this._bindGroupHash = Object.create(null), this._batchBuffer.clear();
    }
    getUniformBindGroup(e, t) {
      if (!t && this._bindGroupHash[e.uid]) return this._bindGroupHash[e.uid];
      this._renderer.ubo.ensureUniformGroup(e);
      let r = e.buffer.data,
        i = this._batchBuffer.addEmptyGroup(r.length);
      return this._renderer.ubo.syncUniformGroup(e, this._batchBuffer.data, i / 4), this._bindGroupHash[e.uid] = this._getBindGroup(i / 128), this._bindGroupHash[e.uid];
    }
    getUboResource(e) {
      this._renderer.ubo.updateUniformGroup(e);
      let t = e.buffer.data,
        r = this._batchBuffer.addGroup(t);
      return this._getBufferResource(r / 128);
    }
    getArrayBindGroup(e) {
      let t = this._batchBuffer.addGroup(e);
      return this._getBindGroup(t / 128);
    }
    getArrayBufferResource(e) {
      let t = this._batchBuffer.addGroup(e);
      return this._getBufferResource(t / 128);
    }
    _getBufferResource(e) {
      if (!this._bufferResources[e]) {
        let t = this._buffers[e % 2];
        this._bufferResources[e] = new i.BufferResource({
          buffer: t,
          offset: (e / 2 | 0) * 256,
          size: 128
        });
      }
      return this._bufferResources[e];
    }
    _getBindGroup(e) {
      if (!this._bindGroups[e]) {
        let t = new n.BindGroup({
          0: this._getBufferResource(e)
        });
        this._bindGroups[e] = t;
      }
      return this._bindGroups[e];
    }
    _uploadBindGroups() {
      let e = this._renderer.buffer,
        t = this._buffers[0];
      t.update(this._batchBuffer.byteIndex), e.updateBuffer(t);
      let r = this._renderer.gpu.device.createCommandEncoder();
      for (let i = 1; i < this._buffers.length; i++) {
        let s = this._buffers[i];
        r.copyBufferToBuffer(e.getGPUBuffer(t), 128, e.getGPUBuffer(s), 0, this._batchBuffer.byteIndex);
      }
      this._renderer.gpu.device.queue.submit([r.finish()]);
    }
    destroy() {
      for (let e = 0; e < this._bindGroups.length; e++) this._bindGroups[e]?.destroy();
      this._bindGroups = null, this._bindGroupHash = null;
      for (let e = 0; e < this._buffers.length; e++) this._buffers[e].destroy();
      this._buffers = null;
      for (let e = 0; e < this._bufferResources.length; e++) this._bufferResources[e].destroy();
      this._bufferResources = null, this._batchBuffer.destroy(), this._renderer = null;
    }
  }
  o.extension = {
    type: [t.ExtensionType.WebGPUPipes],
    name: "uniformBatch"
  }, e.s(["GpuUniformBatchPipe", 0, o], 630739);
  var u = e.i(562140),
    d = e.i(261095),
    l = e.i(589627),
    h = e.i(235569),
    c = e.i(324086);
  let p = {
    "point-list": 0,
    "line-list": 1,
    "line-strip": 2,
    "triangle-list": 3,
    "triangle-strip": 4
  };
  class g {
    constructor(e) {
      this._moduleCache = Object.create(null), this._bufferLayoutsCache = Object.create(null), this._bindingNamesCache = Object.create(null), this._pipeCache = Object.create(null), this._pipeStateCaches = Object.create(null), this._colorMask = 15, this._multisampleCount = 1, this._colorTargetCount = 1, this._renderer = e;
    }
    contextChange(e) {
      this._gpu = e, this.setStencilMode(l.STENCIL_MODES.DISABLED), this._updatePipeHash();
    }
    setMultisampleCount(e) {
      this._multisampleCount !== e && (this._multisampleCount = e, this._updatePipeHash());
    }
    setRenderTarget(e) {
      this._multisampleCount = e.msaaSamples, this._depthStencilAttachment = +!!e.descriptor.depthStencilAttachment, this._colorTargetCount = e.colorTargetCount, this._updatePipeHash();
    }
    setColorMask(e) {
      this._colorMask !== e && (this._colorMask = e, this._updatePipeHash());
    }
    setStencilMode(e) {
      this._stencilMode !== e && (this._stencilMode = e, this._stencilState = c.GpuStencilModesToPixi[e], this._updatePipeHash());
    }
    setPipeline(e, t, r, i) {
      let s = this.getPipeline(e, t, r);
      i.setPipeline(s);
    }
    getPipeline(e, t, r, i) {
      var s, a, n;
      e._layoutKey || ((0, d.ensureAttributes)(e, t.attributeData), this._generateBufferKey(e)), i || (i = e.topology);
      let o = (s = e._layoutKey, a = t._layoutKey, n = r.data, s << 24 | a << 16 | n << 10 | r._blendModeId << 5 | p[i]);
      return this._pipeCache[o] || (this._pipeCache[o] = this._createPipeline(e, t, r, i)), this._pipeCache[o];
    }
    _createPipeline(e, t, r, i) {
      let s = this._gpu.device,
        a = this._createVertexBufferLayouts(e, t),
        n = this._renderer.state.getColorTargets(r, this._colorTargetCount),
        o = this._stencilMode === l.STENCIL_MODES.RENDERING_MASK_ADD ? 0 : this._colorMask;
      for (let e = 0; e < n.length; e++) n[e].writeMask = o;
      let u = this._renderer.shader.getProgramData(t).pipeline,
        d = {
          vertex: {
            module: this._getModule(t.vertex.source),
            entryPoint: t.vertex.entryPoint,
            buffers: a
          },
          fragment: {
            module: this._getModule(t.fragment.source),
            entryPoint: t.fragment.entryPoint,
            targets: n
          },
          primitive: {
            topology: i,
            cullMode: r.cullMode
          },
          layout: u,
          multisample: {
            count: this._multisampleCount
          },
          label: "PIXI Pipeline"
        };
      return this._depthStencilAttachment && (d.depthStencil = {
        ...this._stencilState,
        format: "depth24plus-stencil8",
        depthWriteEnabled: r.depthTest,
        depthCompare: r.depthTest ? "less" : "always"
      }), s.createRenderPipeline(d);
    }
    _getModule(e) {
      return this._moduleCache[e] || this._createModule(e);
    }
    _createModule(e) {
      let t = this._gpu.device;
      return this._moduleCache[e] = t.createShaderModule({
        code: e
      }), this._moduleCache[e];
    }
    _generateBufferKey(e) {
      let t = [],
        r = 0,
        i = Object.keys(e.attributes).sort();
      for (let s = 0; s < i.length; s++) {
        let a = e.attributes[i[s]];
        t[r++] = a.offset, t[r++] = a.format, t[r++] = a.stride, t[r++] = a.instance;
      }
      let s = t.join("|");
      return e._layoutKey = (0, h.createIdFromString)(s, "geometry"), e._layoutKey;
    }
    _generateAttributeLocationsKey(e) {
      let t = [],
        r = 0,
        i = Object.keys(e.attributeData).sort();
      for (let s = 0; s < i.length; s++) {
        let a = e.attributeData[i[s]];
        t[r++] = a.location;
      }
      let s = t.join("|");
      return e._attributeLocationsKey = (0, h.createIdFromString)(s, "programAttributes"), e._attributeLocationsKey;
    }
    getBufferNamesToBind(e, t) {
      let r = e._layoutKey << 16 | t._attributeLocationsKey;
      if (this._bindingNamesCache[r]) return this._bindingNamesCache[r];
      let i = this._createVertexBufferLayouts(e, t),
        s = Object.create(null),
        a = t.attributeData;
      for (let e = 0; e < i.length; e++) {
        let t = Object.values(i[e].attributes)[0].shaderLocation;
        for (let r in a) if (a[r].location === t) {
          s[e] = r;
          break;
        }
      }
      return this._bindingNamesCache[r] = s, s;
    }
    _createVertexBufferLayouts(e, t) {
      t._attributeLocationsKey || this._generateAttributeLocationsKey(t);
      let r = e._layoutKey << 16 | t._attributeLocationsKey;
      if (this._bufferLayoutsCache[r]) return this._bufferLayoutsCache[r];
      let i = [];
      return e.buffers.forEach(r => {
        let s = {
            arrayStride: 0,
            stepMode: "vertex",
            attributes: []
          },
          a = s.attributes;
        for (let i in t.attributeData) {
          let n = e.attributes[i];
          (n.divisor ?? 1) !== 1 && (0, u.warn)(`Attribute ${i} has an invalid divisor value of '${n.divisor}'. WebGPU only supports a divisor value of 1`), n.buffer === r && (s.arrayStride = n.stride, s.stepMode = n.instance ? "instance" : "vertex", a.push({
            shaderLocation: t.attributeData[i].location,
            offset: n.offset,
            format: n.format
          }));
        }
        a.length && i.push(s);
      }), this._bufferLayoutsCache[r] = i, i;
    }
    _updatePipeHash() {
      var e, t, r;
      let i = (e = this._stencilMode, t = this._multisampleCount, r = this._colorMask, r << 8 | e << 5 | this._depthStencilAttachment << 3 | this._colorTargetCount << 1 | t);
      this._pipeStateCaches[i] || (this._pipeStateCaches[i] = Object.create(null)), this._pipeCache = this._pipeStateCaches[i];
    }
    destroy() {
      this._renderer = null, this._bufferLayoutsCache = null;
    }
  }
  g.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "pipeline"
  }, e.s(["PipelineSystem", 0, g], 952222);
  var f = e.i(798299),
    m = e.i(220892),
    _ = e.i(173156),
    x = e.i(317765);
  class b {
    constructor() {
      this.contexts = [], this.msaaTextures = [], this.msaaSamples = 1;
    }
  }
  e.s(["GpuRenderTarget", 0, b], 771690);
  class y {
    init(e, t) {
      this._renderer = e, this._renderTargetSystem = t;
    }
    copyToTexture(e, t, r, i, s) {
      let a = this._renderer,
        n = this._getGpuColorTexture(e),
        o = a.texture.getGpuSource(t.source);
      return a.encoder.commandEncoder.copyTextureToTexture({
        texture: n,
        origin: r
      }, {
        texture: o,
        origin: s
      }, i), t;
    }
    startRenderPass(e, t = !0, r, i, s = 0, a = 0) {
      let n = this._renderTargetSystem.getGpuRenderTarget(e);
      if (0 !== a && n.msaaTextures?.length) throw Error("[RenderTargetSystem] Rendering to array layers is not supported with MSAA render targets.");
      if (s > 0 && n.msaaTextures?.length) throw Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
      n.descriptor = this.getDescriptor(e, t, r, s, a), this._renderer.pipeline.setRenderTarget(n), this._renderer.encoder.beginRenderPass(n), this._renderer.encoder.setViewport(i);
    }
    finishRenderPass() {
      this._renderer.encoder.endRenderPass();
    }
    _getGpuColorTexture(e) {
      let t = this._renderTargetSystem.getGpuRenderTarget(e);
      return t.contexts[0] ? t.contexts[0].getCurrentTexture() : this._renderer.texture.getGpuSource(e.colorTextures[0].source);
    }
    getDescriptor(e, t, r, i = 0, s = 0) {
      let a;
      "boolean" == typeof t && (t = t ? m.CLEAR.ALL : m.CLEAR.NONE);
      let n = this._renderTargetSystem,
        o = n.getGpuRenderTarget(e),
        u = e.colorTextures.map((e, a) => {
          let u,
            d,
            l = o.contexts[a];
          if (l) {
            if (0 !== s) throw Error("[RenderTargetSystem] Rendering to array layers is not supported for canvas targets.");
            u = l.getCurrentTexture().createView();
          } else u = this._renderer.texture.getGpuSource(e).createView({
            dimension: "2d",
            baseMipLevel: i,
            mipLevelCount: 1,
            baseArrayLayer: s,
            arrayLayerCount: 1
          });
          let h = !1;
          o.msaaTextures[a] && (d = u, u = this._renderer.texture.getTextureView(o.msaaTextures[a]), h = o.msaaTextures[a].transient);
          let c = t & m.CLEAR.COLOR ? "clear" : "load";
          return r ?? (r = n.defaultClearColor), {
            view: u,
            resolveTarget: d,
            clearValue: r,
            storeOp: h ? "discard" : "store",
            loadOp: c
          };
        });
      if ((e.stencil || e.depth) && !e.depthStencilTexture && (e.ensureDepthStencilTexture(), e.depthStencilTexture.source.sampleCount = o.msaa ? 4 : 1, e.depthStencilTexture.source.transient = !!o.msaaTextures[0]?.transient), e.depthStencilTexture) {
        let r = t & m.CLEAR.STENCIL ? "clear" : "load",
          n = t & m.CLEAR.DEPTH ? "clear" : "load",
          o = e.depthStencilTexture.source.transient ? "discard" : "store";
        a = {
          view: this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView({
            dimension: "2d",
            baseMipLevel: i,
            mipLevelCount: 1,
            baseArrayLayer: s,
            arrayLayerCount: 1
          }),
          stencilStoreOp: o,
          stencilLoadOp: r,
          depthClearValue: 1,
          depthLoadOp: n,
          depthStoreOp: o
        };
      }
      return {
        colorAttachments: u,
        depthStencilAttachment: a
      };
    }
    clear(e, t = !0, r, i, s = 0, a = 0) {
      if (!t) return;
      let {
          gpu: n,
          encoder: o
        } = this._renderer,
        u = n.device;
      if (null === o.commandEncoder) {
        let n = u.createCommandEncoder(),
          o = this.getDescriptor(e, t, r, s, a),
          d = n.beginRenderPass(o);
        d.setViewport(i.x, i.y, i.width, i.height, 0, 1), d.end();
        let l = n.finish();
        u.queue.submit([l]);
      } else this.startRenderPass(e, t, r, i, s, a);
    }
    initGpuRenderTarget(e) {
      e.isRoot = !0;
      let t = new b();
      return t.colorTargetCount = e.colorTextures.length, e.colorTextures.forEach((e, r) => {
        if (e instanceof _.CanvasSource) {
          let i = e.resource.getContext("webgpu"),
            s = e.transparent ? "premultiplied" : "opaque";
          try {
            i.configure({
              device: this._renderer.gpu.device,
              usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
              format: "bgra8unorm",
              alphaMode: s
            });
          } catch (e) {
            console.error(e);
          }
          t.contexts[r] = i;
        }
        if (t.msaa = e.source.antialias, e.source.antialias) {
          let i = new x.TextureSource({
            width: 0,
            height: 0,
            sampleCount: 4,
            transient: e.source.transient,
            arrayLayerCount: e.source.arrayLayerCount
          });
          t.msaaTextures[r] = i;
        }
      }), t.msaa && (t.msaaSamples = 4, e.depthStencilTexture && (e.depthStencilTexture.source.sampleCount = 4, e.depthStencilTexture.source.transient = !!t.msaaTextures[0]?.transient)), t;
    }
    destroyGpuRenderTarget(e) {
      e.contexts.forEach(e => {
        e.unconfigure();
      }), e.msaaTextures.forEach(e => {
        e.destroy();
      }), e.msaaTextures.length = 0, e.contexts.length = 0;
    }
    ensureDepthStencilTexture(e) {
      let t = this._renderTargetSystem.getGpuRenderTarget(e);
      e.depthStencilTexture && t.msaa && (e.depthStencilTexture.source.sampleCount = 4);
    }
    resizeGpuRenderTarget(e) {
      let t = this._renderTargetSystem.getGpuRenderTarget(e);
      t.width = e.width, t.height = e.height, t.msaa && e.colorTextures.forEach((e, r) => {
        let i = t.msaaTextures[r];
        i?.resize(e.source.width, e.source.height, e.source._resolution);
      });
    }
  }
  e.s(["GpuRenderTargetAdaptor", 0, y], 942816);
  class G extends f.RenderTargetSystem {
    constructor(e) {
      super(e), this.adaptor = new y(), this.adaptor.init(e, this);
    }
  }
  G.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "renderTarget"
  }, e.s(["GpuRenderTargetSystem", 0, G], 216248);
  class T {
    constructor() {
      this._gpuProgramData = Object.create(null);
    }
    contextChange(e) {
      this._gpu = e;
    }
    getProgramData(e) {
      return this._gpuProgramData[e._layoutKey] || this._createGPUProgramData(e);
    }
    _createGPUProgramData(e) {
      let t = this._gpu.device,
        r = e.gpuLayout.map(e => t.createBindGroupLayout({
          entries: e
        }));
      return this._gpuProgramData[e._layoutKey] = {
        bindGroups: r,
        pipeline: t.createPipelineLayout({
          bindGroupLayouts: r
        })
      }, this._gpuProgramData[e._layoutKey];
    }
    destroy() {
      this._gpu = null, this._gpuProgramData = null;
    }
  }
  T.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "shader"
  }, e.s(["GpuShaderSystem", 0, T], 500030);
  var S = e.i(688761);
  let P = {};
  P.normal = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  }, P.add = {
    alpha: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "add"
    }
  }, P.multiply = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "dst",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  }, P.screen = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  }, P.overlay = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  }, P.none = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "zero",
      dstFactor: "zero",
      operation: "add"
    }
  }, P["normal-npm"] = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    }
  }, P["add-npm"] = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one",
      operation: "add"
    }
  }, P["screen-npm"] = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "src-alpha",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  }, P.erase = {
    alpha: {
      srcFactor: "zero",
      dstFactor: "one-minus-src-alpha",
      operation: "add"
    },
    color: {
      srcFactor: "zero",
      dstFactor: "one-minus-src",
      operation: "add"
    }
  }, P.min = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "min"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "min"
    }
  }, P.max = {
    alpha: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "max"
    },
    color: {
      srcFactor: "one",
      dstFactor: "one",
      operation: "max"
    }
  }, e.s(["GpuBlendModesToPixi", 0, P], 905072);
  class B {
    constructor() {
      this.defaultState = new S.State(), this.defaultState.blend = !0;
    }
    contextChange(e) {
      this.gpu = e;
    }
    getColorTargets(e, t) {
      let r = P[e.blendMode] || P.normal,
        i = [],
        s = {
          format: "bgra8unorm",
          writeMask: 0,
          blend: r
        };
      for (let e = 0; e < t; e++) i[e] = s;
      return i;
    }
    destroy() {
      this.gpu = null;
    }
  }
  B.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "state"
  }, e.s(["GpuStateSystem", 0, B], 71203);
  var v = e.i(787653),
    C = e.i(217055),
    U = e.i(153594),
    M = e.i(963345);
  let E = {
    type: "image",
    upload(e, t, r, i = 0) {
      let s = e.resource,
        a = (0 | e.pixelWidth) * (0 | e.pixelHeight),
        n = s.byteLength / a;
      r.device.queue.writeTexture({
        texture: t,
        origin: {
          x: 0,
          y: 0,
          z: i
        }
      }, s, {
        offset: 0,
        rowsPerImage: e.pixelHeight,
        bytesPerRow: e.pixelWidth * n
      }, {
        width: e.pixelWidth,
        height: e.pixelHeight,
        depthOrArrayLayers: 1
      });
    }
  };
  e.s(["gpuUploadBufferImageResource", 0, E], 221845);
  let w = {
      "bc1-rgba-unorm": {
        blockBytes: 8,
        blockWidth: 4,
        blockHeight: 4
      },
      "bc2-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
      },
      "bc3-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
      },
      "bc7-rgba-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
      },
      "etc1-rgb-unorm": {
        blockBytes: 8,
        blockWidth: 4,
        blockHeight: 4
      },
      "etc2-rgba8unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
      },
      "astc-4x4-unorm": {
        blockBytes: 16,
        blockWidth: 4,
        blockHeight: 4
      }
    },
    R = {
      blockBytes: 4,
      blockWidth: 1,
      blockHeight: 1
    },
    A = {
      type: "compressed",
      upload(e, t, r, i = 0) {
        let s = e.pixelWidth,
          a = e.pixelHeight,
          n = w[e.format] || R;
        for (let o = 0; o < e.resource.length; o++) {
          let u = e.resource[o],
            d = Math.ceil(s / n.blockWidth) * n.blockBytes;
          r.device.queue.writeTexture({
            texture: t,
            mipLevel: o,
            origin: {
              x: 0,
              y: 0,
              z: i
            }
          }, u, {
            offset: 0,
            bytesPerRow: d
          }, {
            width: Math.ceil(s / n.blockWidth) * n.blockWidth,
            height: Math.ceil(a / n.blockHeight) * n.blockHeight,
            depthOrArrayLayers: 1
          }), s = Math.max(s >> 1, 1), a = Math.max(a >> 1, 1);
        }
      }
    };
  e.s(["blockDataMap", 0, w, "gpuUploadCompressedTextureResource", 0, A], 649308);
  let L = ["right", "left", "top", "bottom", "front", "back"];
  function D(e) {
    return {
      type: "cube",
      upload(t, r, i) {
        let s = t.faces;
        for (let t = 0; t < L.length; t++) {
          let a = s[L[t]];
          (e[a.uploadMethodId] || e.image).upload(a, r, i, t);
        }
      }
    };
  }
  e.s(["createGpuUploadCubeTextureResource", 0, D], 908565);
  let O = {
    type: "image",
    upload(e, t, r, i = 0) {
      let s = e.resource;
      if (!s) return;
      if (globalThis.HTMLImageElement && s instanceof HTMLImageElement) {
        let t = v.DOMAdapter.get().createCanvas(s.width, s.height);
        t.getContext("2d").drawImage(s, 0, 0, s.width, s.height), e.resource = t, (0, u.warn)("ImageSource: Image element passed, converting to canvas and replacing resource.");
      }
      let a = Math.min(t.width, e.resourceWidth || e.pixelWidth),
        n = Math.min(t.height, e.resourceHeight || e.pixelHeight),
        o = "premultiply-alpha-on-upload" === e.alphaMode;
      r.device.queue.copyExternalImageToTexture({
        source: s
      }, {
        texture: t,
        origin: {
          x: 0,
          y: 0,
          z: i
        },
        premultipliedAlpha: o
      }, {
        width: a,
        height: n
      });
    }
  };
  e.s(["gpuUploadImageResource", 0, O], 67473);
  let z = {
    type: "video",
    upload(e, t, r, i) {
      O.upload(e, t, r, i);
    }
  };
  e.s(["gpuUploadVideoResource", 0, z], 333962);
  class I {
    constructor(e) {
      this.device = e, this.sampler = e.createSampler({
        minFilter: "linear"
      }), this.pipelines = {};
    }
    _getMipmapPipeline(e) {
      let t = this.pipelines[e];
      return t || (this.mipmapShaderModule || (this.mipmapShaderModule = this.device.createShaderModule({
        code: `
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `
      })), t = this.device.createRenderPipeline({
        layout: "auto",
        vertex: {
          module: this.mipmapShaderModule,
          entryPoint: "vertexMain"
        },
        fragment: {
          module: this.mipmapShaderModule,
          entryPoint: "fragmentMain",
          targets: [{
            format: e
          }]
        }
      }), this.pipelines[e] = t), t;
    }
    generateMipmap(e) {
      let t = this._getMipmapPipeline(e.format);
      if ("3d" === e.dimension || "1d" === e.dimension) throw Error("Generating mipmaps for non-2d textures is currently unsupported!");
      let r = e,
        i = e.depthOrArrayLayers || 1,
        s = e.usage & GPUTextureUsage.RENDER_ATTACHMENT;
      if (!s) {
        let t = {
          size: {
            width: Math.ceil(e.width / 2),
            height: Math.ceil(e.height / 2),
            depthOrArrayLayers: i
          },
          format: e.format,
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
          mipLevelCount: e.mipLevelCount - 1
        };
        r = this.device.createTexture(t);
      }
      let a = this.device.createCommandEncoder({}),
        n = t.getBindGroupLayout(0);
      for (let o = 0; o < i; ++o) {
        let i = e.createView({
            baseMipLevel: 0,
            mipLevelCount: 1,
            dimension: "2d",
            baseArrayLayer: o,
            arrayLayerCount: 1
          }),
          u = +!!s;
        for (let s = 1; s < e.mipLevelCount; ++s) {
          let e = r.createView({
              baseMipLevel: u++,
              mipLevelCount: 1,
              dimension: "2d",
              baseArrayLayer: o,
              arrayLayerCount: 1
            }),
            s = a.beginRenderPass({
              colorAttachments: [{
                view: e,
                storeOp: "store",
                loadOp: "clear",
                clearValue: {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0
                }
              }]
            }),
            d = this.device.createBindGroup({
              layout: n,
              entries: [{
                binding: 0,
                resource: this.sampler
              }, {
                binding: 1,
                resource: i
              }]
            });
          s.setPipeline(t), s.setBindGroup(0, d), s.draw(3, 1, 0, 0), s.end(), i = e;
        }
      }
      if (!s) {
        let t = {
          width: Math.ceil(e.width / 2),
          height: Math.ceil(e.height / 2),
          depthOrArrayLayers: i
        };
        for (let i = 1; i < e.mipLevelCount; ++i) a.copyTextureToTexture({
          texture: r,
          mipLevel: i - 1
        }, {
          texture: e,
          mipLevel: i
        }, t), t.width = Math.ceil(t.width / 2), t.height = Math.ceil(t.height / 2);
      }
      return this.device.queue.submit([a.finish()]), s || r.destroy(), e;
    }
  }
  e.s(["GpuMipmapGenerator", 0, I], 955419);
  class k {
    constructor(e) {
      this.textureView = null, this.gpuTexture = e;
    }
    destroy() {
      this.gpuTexture.destroy(), this.textureView = null, this.gpuTexture = null;
    }
  }
  let F = class e {
    constructor(t) {
      this._gpuSamplers = Object.create(null), this._bindGroupHash = Object.create(null), this._renderer = t, t.gc.addCollection(this, "_bindGroupHash", "hash"), this._managedTextures = new C.GCManagedHash({
        renderer: t,
        type: "resource",
        onUnload: this.onSourceUnload.bind(this),
        name: "gpuTextureSource"
      });
      const r = {
        image: O,
        buffer: E,
        video: z,
        compressed: A,
        ...e.uploadExtensions
      };
      this._uploads = {
        ...r,
        cube: D(r)
      };
    }
    get managedTextures() {
      return Object.values(this._managedTextures.items);
    }
    contextChange(e) {
      this._gpu = e;
    }
    initSource(e) {
      return e._gpuData[this._renderer.uid]?.gpuTexture || this._initSource(e);
    }
    _initSource(e) {
      let t;
      if (e.autoGenerateMipmaps) {
        let t = Math.max(e.pixelWidth, e.pixelHeight);
        e.mipLevelCount = Math.floor(Math.log2(t)) + 1;
      }
      e.sampleCount > 1 ? (t = GPUTextureUsage.RENDER_ATTACHMENT, e.transient && this._renderer.device.extensions.transientAttachment && (t |= GPUTextureUsage.TRANSIENT_ATTACHMENT)) : (t = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST, "compressed" !== e.uploadMethodId && (t |= GPUTextureUsage.RENDER_ATTACHMENT, t |= GPUTextureUsage.COPY_SRC));
      let r = w[e.format] || {
          blockBytes: 4,
          blockWidth: 1,
          blockHeight: 1
        },
        i = Math.ceil(e.pixelWidth / r.blockWidth) * r.blockWidth,
        s = Math.ceil(e.pixelHeight / r.blockHeight) * r.blockHeight,
        a = {
          label: e.label,
          size: {
            width: i,
            height: s,
            depthOrArrayLayers: e.arrayLayerCount
          },
          format: e.format,
          sampleCount: e.sampleCount,
          mipLevelCount: e.mipLevelCount,
          dimension: e.dimension,
          usage: t
        },
        n = this._gpu.device.createTexture(a);
      return e._gpuData[this._renderer.uid] = new k(n), this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceResize, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), n;
    }
    onSourceUpdate(e) {
      let t = this.getGpuSource(e);
      t && (this._uploads[e.uploadMethodId] && this._uploads[e.uploadMethodId].upload(e, t, this._gpu), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e));
    }
    onUpdateMipmaps(e) {
      this._mipmapGenerator || (this._mipmapGenerator = new I(this._gpu.device));
      let t = this.getGpuSource(e);
      this._mipmapGenerator.generateMipmap(t);
    }
    onSourceUnload(e) {
      e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceResize, this), e.off("updateMipmaps", this.onUpdateMipmaps, this);
    }
    onSourceResize(e) {
      e._gcLastUsed = this._renderer.gc.now;
      let t = e._gpuData[this._renderer.uid],
        r = t?.gpuTexture;
      r ? (r.width !== e.pixelWidth || r.height !== e.pixelHeight) && (t.destroy(), this._bindGroupHash[e.uid] = null, e._gpuData[this._renderer.uid] = null, this.initSource(e)) : this.initSource(e);
    }
    _initSampler(e) {
      return this._gpuSamplers[e._resourceId] = this._gpu.device.createSampler(e), this._gpuSamplers[e._resourceId];
    }
    getGpuSampler(e) {
      return this._gpuSamplers[e._resourceId] || this._initSampler(e);
    }
    getGpuSource(e) {
      return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid]?.gpuTexture || this.initSource(e);
    }
    getTextureBindGroup(e) {
      return this._bindGroupHash[e.uid] || this._createTextureBindGroup(e);
    }
    _createTextureBindGroup(e) {
      let t = e.source;
      return this._bindGroupHash[e.uid] = new n.BindGroup({
        0: t,
        1: t.style,
        2: new U.UniformGroup({
          uTextureMatrix: {
            type: "mat3x3<f32>",
            value: e.textureMatrix.mapCoord
          }
        })
      }), this._bindGroupHash[e.uid];
    }
    getTextureView(e) {
      let t = e.source;
      t._gcLastUsed = this._renderer.gc.now;
      let r = t._gpuData[this._renderer.uid];
      return r || (this.initSource(t), r = t._gpuData[this._renderer.uid]), r.textureView || (r.textureView = r.gpuTexture.createView({
        dimension: t.viewDimension
      })), r.textureView;
    }
    generateCanvas(e) {
      let t = this._renderer,
        r = t.gpu.device.createCommandEncoder(),
        i = v.DOMAdapter.get().createCanvas();
      i.width = e.source.pixelWidth, i.height = e.source.pixelHeight;
      let s = i.getContext("webgpu");
      return s.configure({
        device: t.gpu.device,
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        format: v.DOMAdapter.get().getNavigator().gpu.getPreferredCanvasFormat(),
        alphaMode: "premultiplied"
      }), r.copyTextureToTexture({
        texture: t.texture.getGpuSource(e.source),
        origin: {
          x: 0,
          y: 0
        }
      }, {
        texture: s.getCurrentTexture()
      }, {
        width: i.width,
        height: i.height
      }), t.gpu.device.queue.submit([r.finish()]), i;
    }
    getPixels(e) {
      let t = this.generateCanvas(e),
        r = M.CanvasPool.getOptimalCanvasAndContext(t.width, t.height),
        i = r.context;
      i.drawImage(t, 0, 0);
      let {
          width: s,
          height: a
        } = t,
        n = new Uint8ClampedArray(i.getImageData(0, 0, s, a).data.buffer);
      return M.CanvasPool.returnCanvasAndContext(r), {
        pixels: n,
        width: s,
        height: a
      };
    }
    destroy() {
      for (let e of (this._managedTextures.destroy(), Object.keys(this._bindGroupHash))) {
        let t = Number(e),
          r = this._bindGroupHash[t];
        r?.destroy();
      }
      this._renderer = null, this._gpu = null, this._mipmapGenerator = null, this._gpuSamplers = null, this._bindGroupHash = null;
    }
  };
  F.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "texture"
  }, F.uploadExtensions = Object.create(null), t.extensions.handleByMap(t.ExtensionType.TextureUploaderWebGPU, F.uploadExtensions), e.s(["GPUTextureGpuData", 0, k, "GpuTextureSystem", 0, F], 349139);
};
