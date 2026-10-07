// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 245665, 29400, 23295, 602250, 564115, 989776, 187925, 465806, 470227.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278);
  class r {
    constructor(e) {
      this._colorMaskCache = 15, this._renderer = e;
    }
    setMask(e) {
      this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.pipeline.setColorMask(e));
    }
    destroy() {
      this._renderer = null, this._colorMaskCache = null;
    }
  }
  r.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "colorMask"
  }, e.s(["GpuColorMaskSystem", 0, r], 245665);
  var i = e.i(787653);
  class s {
    constructor(e) {
      this._renderer = e;
    }
    async init(e) {
      return this._initPromise || (this._initPromise = (e.gpu ? Promise.resolve(e.gpu) : this._createDeviceAndAdaptor(e)).then(e => {
        this.gpu = e, this.extensions = {
          transientAttachment: "number" == typeof GPUTextureUsage.TRANSIENT_ATTACHMENT
        }, this._renderer.runners.contextChange.emit(this.gpu);
      })), this._initPromise;
    }
    contextChange(e) {
      this._renderer.gpu = e;
    }
    async _createDeviceAndAdaptor(e) {
      let t = await i.DOMAdapter.get().getNavigator().gpu.requestAdapter({
          powerPreference: e.powerPreference,
          forceFallbackAdapter: e.forceFallbackAdapter
        }),
        r = ["texture-compression-bc", "texture-compression-astc", "texture-compression-etc2"].filter(e => t.features.has(e)),
        s = await t.requestDevice({
          requiredFeatures: r
        });
      return {
        adapter: t,
        device: s
      };
    }
    destroy() {
      this.gpu = null, this.extensions = null, this._renderer = null;
    }
  }
  s.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "device"
  }, s.defaultOptions = {
    powerPreference: void 0,
    forceFallbackAdapter: !1
  }, e.s(["GpuDeviceSystem", 0, s], 29400);
  class a {
    constructor(e) {
      this._boundBindGroup = Object.create(null), this._boundVertexBuffer = Object.create(null), this._renderer = e;
    }
    renderStart() {
      this.commandFinished = new Promise(e => {
        this._resolveCommandFinished = e;
      }), this.commandEncoder = this._renderer.gpu.device.createCommandEncoder();
    }
    beginRenderPass(e) {
      this.endRenderPass(), this._clearCache(), this.renderPassEncoder = this.commandEncoder.beginRenderPass(e.descriptor);
    }
    endRenderPass() {
      this.renderPassEncoder && this.renderPassEncoder.end(), this.renderPassEncoder = null;
    }
    setViewport(e) {
      this.renderPassEncoder.setViewport(e.x, e.y, e.width, e.height, 0, 1);
    }
    setPipelineFromGeometryProgramAndState(e, t, r, i) {
      let s = this._renderer.pipeline.getPipeline(e, t, r, i);
      this.setPipeline(s);
    }
    setPipeline(e) {
      this._boundPipeline !== e && (this._boundPipeline = e, this.renderPassEncoder.setPipeline(e));
    }
    _setVertexBuffer(e, t) {
      this._boundVertexBuffer[e] !== t && (this._boundVertexBuffer[e] = t, this.renderPassEncoder.setVertexBuffer(e, this._renderer.buffer.updateBuffer(t)));
    }
    _setIndexBuffer(e) {
      if (this._boundIndexBuffer === e) return;
      this._boundIndexBuffer = e;
      let t = 2 === e.data.BYTES_PER_ELEMENT ? "uint16" : "uint32";
      this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e), t);
    }
    resetBindGroup(e) {
      this._boundBindGroup[e] = null;
    }
    setBindGroup(e, t, r) {
      if (this._boundBindGroup[e] === t) return;
      this._boundBindGroup[e] = t, t._touch(this._renderer.gc.now, this._renderer.tick);
      let i = this._renderer.bindGroup.getBindGroup(t, r, e);
      this.renderPassEncoder.setBindGroup(e, i);
    }
    setGeometry(e, t) {
      let r = this._renderer.pipeline.getBufferNamesToBind(e, t);
      for (let t in r) this._setVertexBuffer(parseInt(t, 10), e.attributes[r[t]].buffer);
      e.indexBuffer && this._setIndexBuffer(e.indexBuffer);
    }
    _setShaderBindGroups(e, t) {
      for (let r in e.groups) {
        let i = e.groups[r];
        t || this._syncBindGroup(i), this.setBindGroup(r, i, e.gpuProgram);
      }
    }
    _syncBindGroup(e) {
      for (let t in e.resources) {
        let r = e.resources[t];
        r.isUniformGroup && this._renderer.ubo.updateUniformGroup(r);
      }
    }
    draw(e) {
      let {
        geometry: t,
        shader: r,
        state: i,
        topology: s,
        size: a,
        start: n,
        instanceCount: o,
        skipSync: u
      } = e;
      this.setPipelineFromGeometryProgramAndState(t, r.gpuProgram, i, s), this.setGeometry(t, r.gpuProgram), this._setShaderBindGroups(r, u), t.indexBuffer ? this.renderPassEncoder.drawIndexed(a || t.indexBuffer.data.length, o ?? t.instanceCount, n || 0) : this.renderPassEncoder.draw(a || t.getSize(), o ?? t.instanceCount, n || 0);
    }
    finishRenderPass() {
      this.renderPassEncoder && (this.renderPassEncoder.end(), this.renderPassEncoder = null);
    }
    postrender() {
      this.finishRenderPass(), this._gpu.device.queue.submit([this.commandEncoder.finish()]), this._resolveCommandFinished(), this.commandEncoder = null;
    }
    restoreRenderPass() {
      let e = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, !1, [0, 0, 0, 1], this._renderer.renderTarget.mipLevel, this._renderer.renderTarget.layer);
      this.renderPassEncoder = this.commandEncoder.beginRenderPass(e);
      let t = this._boundPipeline,
        r = {
          ...this._boundVertexBuffer
        },
        i = this._boundIndexBuffer,
        s = {
          ...this._boundBindGroup
        };
      this._clearCache();
      let a = this._renderer.renderTarget.viewport;
      for (let e in this.renderPassEncoder.setViewport(a.x, a.y, a.width, a.height, 0, 1), this.setPipeline(t), r) this._setVertexBuffer(e, r[e]);
      for (let e in s) this.setBindGroup(e, s[e], null);
      this._setIndexBuffer(i);
    }
    _clearCache() {
      for (let e = 0; e < 16; e++) this._boundBindGroup[e] = null, this._boundVertexBuffer[e] = null;
      this._boundIndexBuffer = null, this._boundPipeline = null;
    }
    destroy() {
      this._renderer = null, this._gpu = null, this._boundBindGroup = null, this._boundVertexBuffer = null, this._boundIndexBuffer = null, this._boundPipeline = null;
    }
    contextChange(e) {
      this._gpu = e;
    }
  }
  a.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "encoder",
    priority: 1
  }, e.s(["GpuEncoderSystem", 0, a], 23295);
  class n {
    constructor(e) {
      this._renderer = e;
    }
    contextChange() {
      this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage, this.maxBatchableTextures = this.maxTextures;
    }
    destroy() {}
  }
  n.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "limits"
  }, e.s(["GpuLimitsSystem", 0, n], 602250);
  var o = e.i(589627);
  class u {
    constructor(e) {
      this._renderTargetStencilState = Object.create(null), this._renderer = e, e.renderTarget.onRenderTargetChange.add(this);
    }
    onRenderTargetChange(e) {
      let t = this._renderTargetStencilState[e.uid];
      t || (t = this._renderTargetStencilState[e.uid] = {
        stencilMode: o.STENCIL_MODES.DISABLED,
        stencilReference: 0
      }), this._activeRenderTarget = e, this.setStencilMode(t.stencilMode, t.stencilReference);
    }
    setStencilMode(e, t) {
      let r = this._renderTargetStencilState[this._activeRenderTarget.uid];
      r.stencilMode = e, r.stencilReference = t;
      let i = this._renderer;
      i.pipeline.setStencilMode(e), i.encoder.renderPassEncoder.setStencilReference(t);
    }
    destroy() {
      this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._activeRenderTarget = null, this._renderTargetStencilState = null;
    }
  }
  u.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "stencil"
  }, e.s(["GpuStencilSystem", 0, u], 564115);
  var d = e.i(627760);
  let l = {
    i32: {
      align: 4,
      size: 4
    },
    u32: {
      align: 4,
      size: 4
    },
    f32: {
      align: 4,
      size: 4
    },
    f16: {
      align: 2,
      size: 2
    },
    "vec2<i32>": {
      align: 8,
      size: 8
    },
    "vec2<u32>": {
      align: 8,
      size: 8
    },
    "vec2<f32>": {
      align: 8,
      size: 8
    },
    "vec2<f16>": {
      align: 4,
      size: 4
    },
    "vec3<i32>": {
      align: 16,
      size: 12
    },
    "vec3<u32>": {
      align: 16,
      size: 12
    },
    "vec3<f32>": {
      align: 16,
      size: 12
    },
    "vec3<f16>": {
      align: 8,
      size: 6
    },
    "vec4<i32>": {
      align: 16,
      size: 16
    },
    "vec4<u32>": {
      align: 16,
      size: 16
    },
    "vec4<f32>": {
      align: 16,
      size: 16
    },
    "vec4<f16>": {
      align: 8,
      size: 8
    },
    "mat2x2<f32>": {
      align: 8,
      size: 16
    },
    "mat2x2<f16>": {
      align: 4,
      size: 8
    },
    "mat3x2<f32>": {
      align: 8,
      size: 24
    },
    "mat3x2<f16>": {
      align: 4,
      size: 12
    },
    "mat4x2<f32>": {
      align: 8,
      size: 32
    },
    "mat4x2<f16>": {
      align: 4,
      size: 16
    },
    "mat2x3<f32>": {
      align: 16,
      size: 32
    },
    "mat2x3<f16>": {
      align: 8,
      size: 16
    },
    "mat3x3<f32>": {
      align: 16,
      size: 48
    },
    "mat3x3<f16>": {
      align: 8,
      size: 24
    },
    "mat4x3<f32>": {
      align: 16,
      size: 64
    },
    "mat4x3<f16>": {
      align: 8,
      size: 32
    },
    "mat2x4<f32>": {
      align: 16,
      size: 32
    },
    "mat2x4<f16>": {
      align: 8,
      size: 16
    },
    "mat3x4<f32>": {
      align: 16,
      size: 48
    },
    "mat3x4<f16>": {
      align: 8,
      size: 24
    },
    "mat4x4<f32>": {
      align: 16,
      size: 64
    },
    "mat4x4<f16>": {
      align: 8,
      size: 32
    }
  };
  function h(e) {
    let t = e.map(e => ({
        data: e,
        offset: 0,
        size: 0
      })),
      r = 0;
    for (let e = 0; e < t.length; e++) {
      let i = t[e],
        s = l[i.data.type].size,
        a = l[i.data.type].align;
      if (!l[i.data.type]) throw Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${i.data.type}`);
      i.data.size > 1 && (s = Math.max(s, a) * i.data.size), r = Math.ceil(r / a) * a, i.size = s, i.offset = r, r += s;
    }
    return {
      uboElements: t,
      size: r = 16 * Math.ceil(r / 16)
    };
  }
  e.s(["WGSL_ALIGN_SIZE_DATA", 0, l, "createUboElementsWGSL", 0, h], 989776);
  var c = e.i(902504),
    p = e.i(422537);
  function g(e, t) {
    let {
        size: r,
        align: i
      } = l[e.data.type],
      s = (i - r) / 4,
      a = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return `
         v = uv.${e.data.name};
         ${0 !== t ? `offset += ${t};` : ""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${e.data.size * (r / 4)}; i++)
         {
             for(var j = 0; j < ${r / 4}; j++)
             {
                 ${a}[arrayOffset++] = v[t++];
             }
             ${0 !== s ? `arrayOffset += ${s};` : ""}
         }
     `;
  }
  function f(e) {
    return (0, c.createUboSyncFunction)(e, "uboWgsl", g, p.uboSyncFunctionsWGSL);
  }
  e.s(["generateArraySyncWGSL", 0, g], 187925), e.s(["createUboSyncFunctionWGSL", 0, f], 465806);
  class m extends d.UboSystem {
    constructor() {
      super({
        createUboElements: h,
        generateUboSync: f
      });
    }
  }
  m.extension = {
    type: [t.ExtensionType.WebGPUSystem],
    name: "ubo"
  }, e.s(["GpuUboSystem", 0, m], 470227);
};
