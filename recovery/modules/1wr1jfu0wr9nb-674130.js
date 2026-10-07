// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 674130, 129249.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(389474),
    i = e.i(666258),
    s = e.i(959684),
    a = e.i(815343),
    n = e.i(229972),
    o = e.i(418668),
    u = e.i(188578),
    d = e.i(761149),
    l = e.i(153594);
  class h {
    constructor() {
      this._maxTextures = 0;
    }
    contextChange(e) {
      let t = new l.UniformGroup({
        uTransformMatrix: {
          value: new r.Matrix(),
          type: "mat3x3<f32>"
        },
        uColor: {
          value: new Float32Array([1, 1, 1, 1]),
          type: "vec4<f32>"
        },
        uRound: {
          value: 0,
          type: "f32"
        }
      });
      this._maxTextures = e.limits.maxBatchableTextures;
      let i = (0, s.compileHighShaderGpuProgram)({
        name: "graphics",
        bits: [a.colorBit, (0, n.generateTextureBatchBit)(this._maxTextures), o.localUniformBitGroup2, u.roundPixelsBit]
      });
      this.shader = new d.Shader({
        gpuProgram: i,
        resources: {
          localUniforms: t
        }
      });
    }
    execute(e, t) {
      let r = t.context,
        s = r.customShader || this.shader,
        a = e.renderer,
        {
          batcher: n,
          instructions: o
        } = a.graphicsContext.getContextRenderData(r),
        u = a.encoder;
      u.setGeometry(n.geometry, s.gpuProgram);
      let d = a.globalUniforms.bindGroup;
      u.setBindGroup(0, d, s.gpuProgram);
      let l = a.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, !0);
      u.setBindGroup(2, l, s.gpuProgram);
      let h = o.instructions,
        c = null;
      for (let t = 0; t < o.instructionSize; t++) {
        let r = h[t];
        if (r.topology !== c && (c = r.topology, u.setPipelineFromGeometryProgramAndState(n.geometry, s.gpuProgram, e.state, r.topology)), s.groups[1] = r.bindGroup, !r.gpuBindGroup) {
          let e = r.textures;
          r.bindGroup = (0, i.getTextureBatchBindGroup)(e.textures, e.count, this._maxTextures), r.gpuBindGroup = a.bindGroup.getBindGroup(r.bindGroup, s.gpuProgram, 1);
        }
        u.setBindGroup(1, r.bindGroup, s.gpuProgram), u.renderPassEncoder.drawIndexed(r.size, 1, r.start);
      }
    }
    destroy() {
      this.shader.destroy(!0), this.shader = null;
    }
  }
  h.extension = {
    type: [t.ExtensionType.WebGPUPipesAdaptor],
    name: "graphics"
  }, e.s(["GpuGraphicsAdaptor", 0, h], 674130);
  var c = e.i(949998),
    p = e.i(337654),
    g = e.i(562140);
  class f {
    init() {
      let e = (0, s.compileHighShaderGpuProgram)({
        name: "mesh",
        bits: [o.localUniformBit, c.textureBit, u.roundPixelsBit]
      });
      this._shader = new d.Shader({
        gpuProgram: e,
        resources: {
          uTexture: p.Texture.EMPTY._source,
          uSampler: p.Texture.EMPTY._source.style,
          textureUniforms: {
            uTextureMatrix: {
              type: "mat3x3<f32>",
              value: new r.Matrix()
            }
          }
        }
      });
    }
    execute(e, t) {
      let r = e.renderer,
        i = t._shader;
      if (i) {
        if (!i.gpuProgram) return void (0, g.warn)("Mesh shader has no gpuProgram", t.shader);
      } else (i = this._shader).groups[2] = r.texture.getTextureBindGroup(t.texture);
      let s = i.gpuProgram;
      if (s.autoAssignGlobalUniforms && (i.groups[0] = r.globalUniforms.bindGroup), s.autoAssignLocalUniforms) {
        let t = e.localUniforms;
        i.groups[1] = r.renderPipes.uniformBatch.getUniformBindGroup(t, !0);
      }
      r.encoder.draw({
        geometry: t._geometry,
        shader: i,
        state: t.state
      });
    }
    destroy() {
      this._shader.destroy(!0), this._shader = null;
    }
  }
  f.extension = {
    type: [t.ExtensionType.WebGPUPipesAdaptor],
    name: "mesh"
  }, e.s(["GpuMeshAdapter", 0, f], 129249);
};
