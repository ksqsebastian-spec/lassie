// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 13814, 727453.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(389474),
    i = e.i(959684),
    a = e.i(815343),
    n = e.i(229972),
    s = e.i(418668),
    o = e.i(188578),
    l = e.i(403976),
    u = e.i(761149),
    _ = e.i(153594);
  class c {
    contextChange(e) {
      let t = new _.UniformGroup({
          uColor: {
            value: new Float32Array([1, 1, 1, 1]),
            type: "vec4<f32>"
          },
          uTransformMatrix: {
            value: new r.Matrix(),
            type: "mat3x3<f32>"
          },
          uRound: {
            value: 0,
            type: "f32"
          }
        }),
        c = e.limits.maxBatchableTextures,
        h = (0, i.compileHighShaderGlProgram)({
          name: "graphics",
          bits: [a.colorBitGl, (0, n.generateTextureBatchBitGl)(c), s.localUniformBitGl, o.roundPixelsBitGl]
        });
      this.shader = new u.Shader({
        glProgram: h,
        resources: {
          localUniforms: t,
          batchSamplers: (0, l.getBatchSamplersUniformGroup)(c)
        }
      });
    }
    execute(e, t) {
      let r = t.context,
        i = r.customShader || this.shader,
        a = e.renderer,
        {
          batcher: n,
          instructions: s
        } = a.graphicsContext.getContextRenderData(r);
      i.groups[0] = a.globalUniforms.bindGroup, a.state.set(e.state), a.shader.bind(i), a.geometry.bind(n.geometry, i.glProgram);
      let o = s.instructions;
      for (let e = 0; e < s.instructionSize; e++) {
        let t = o[e];
        if (t.size) {
          for (let e = 0; e < t.textures.count; e++) a.texture.bind(t.textures.textures[e], e);
          a.geometry.draw(t.topology, t.size, t.start);
        }
      }
    }
    destroy() {
      this.shader.destroy(!0), this.shader = null;
    }
  }
  c.extension = {
    type: [t.ExtensionType.WebGLPipesAdaptor],
    name: "graphics"
  }, e.s(["GlGraphicsAdaptor", 0, c], 13814);
  var h = e.i(949998),
    d = e.i(337654),
    f = e.i(562140);
  class m {
    init() {
      let e = (0, i.compileHighShaderGlProgram)({
        name: "mesh",
        bits: [s.localUniformBitGl, h.textureBitGl, o.roundPixelsBitGl]
      });
      this._shader = new u.Shader({
        glProgram: e,
        resources: {
          uTexture: d.Texture.EMPTY.source,
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
        if (!i.glProgram) return void (0, f.warn)("Mesh shader has no glProgram", t.shader);
      } else {
        i = this._shader;
        let e = t.texture,
          r = e.source;
        i.resources.uTexture = r, i.resources.uSampler = r.style, i.resources.textureUniforms.uniforms.uTextureMatrix = e.textureMatrix.mapCoord;
      }
      i.groups[100] = r.globalUniforms.bindGroup, i.groups[101] = e.localUniformsBindGroup, r.encoder.draw({
        geometry: t._geometry,
        shader: i,
        state: t.state
      });
    }
    destroy() {
      this._shader.destroy(!0), this._shader = null;
    }
  }
  m.extension = {
    type: [t.ExtensionType.WebGLPipesAdaptor],
    name: "mesh"
  }, e.s(["GlMeshAdaptor", 0, m], 727453);
};
