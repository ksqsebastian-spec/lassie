// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 529002, 915907, 435573, 459980, 235523, 428993, 196932, 794604, 788987, 293592, 135617, 510091, 962768, 163281, 200815, 739983, 485552, 444533, 61003, 378977, 800477, 629057, 657280.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(798299),
    i = e.i(539088),
    a = e.i(562140),
    n = e.i(173156),
    s = e.i(220892),
    o = e.i(489405);
  class l {
    constructor() {
      this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new i.Rectangle();
    }
    init(e, t) {
      this._renderer = e, this._renderTargetSystem = t, e.runners.contextChange.add(this);
    }
    contextChange() {
      this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new i.Rectangle();
      let e = this._renderer.gl;
      this._drawBuffersCache = [];
      for (let t = 1; t <= 16; t++) this._drawBuffersCache[t] = Array.from({
        length: t
      }, (t, r) => e.COLOR_ATTACHMENT0 + r);
    }
    copyToTexture(e, t, r, i, a) {
      let n = this._renderTargetSystem,
        s = this._renderer,
        o = n.getGpuRenderTarget(e),
        l = s.gl;
      return this.finishRenderPass(e), l.bindFramebuffer(l.FRAMEBUFFER, o.resolveTargetFramebuffer), s.texture.bind(t, 0), l.copyTexSubImage2D(l.TEXTURE_2D, 0, a.x, a.y, r.x, r.y, i.width, i.height), t;
    }
    startRenderPass(e, t = !0, r, i, a = 0, n = 0) {
      let s = this._renderTargetSystem,
        o = e.colorTexture,
        l = s.getGpuRenderTarget(e);
      if (0 !== n && this._renderer.context.webGLVersion < 2) throw Error("[RenderTargetSystem] Rendering to array layers requires WebGL2.");
      if (a > 0) {
        if (l.msaa) throw Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
        if (this._renderer.context.webGLVersion < 2) throw Error("[RenderTargetSystem] Rendering to mip levels requires WebGL2.");
      }
      let u = i.y;
      e.isRoot && (u = o.pixelHeight - i.height - i.y), e.colorTextures.forEach(e => {
        this._renderer.texture.unbind(e);
      });
      let _ = this._renderer.gl;
      _.bindFramebuffer(_.FRAMEBUFFER, l.framebuffer), e.isRoot || l._attachedMipLevel === a && l._attachedLayer === n || (e.colorTextures.forEach((e, t) => {
        let r = this._renderer.texture.getGlSource(e);
        if (r.target === _.TEXTURE_2D) {
          if (0 !== n) throw Error("[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.");
          _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, _.TEXTURE_2D, r.texture, a);
        } else if (r.target === _.TEXTURE_2D_ARRAY) {
          if (this._renderer.context.webGLVersion < 2) throw Error("[RenderTargetSystem] Rendering to 2D array textures requires WebGL2.");
          _.framebufferTextureLayer(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, r.texture, a, n);
        } else if (r.target === _.TEXTURE_CUBE_MAP) {
          if (n < 0 || n > 5) throw Error("[RenderTargetSystem] Cube map layer must be between 0 and 5.");
          _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, _.TEXTURE_CUBE_MAP_POSITIVE_X + n, r.texture, a);
        } else throw Error("[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL.");
      }), l._attachedMipLevel = a, l._attachedLayer = n), e.colorTextures.length > 1 && this._setDrawBuffers(e, _);
      let c = this._viewPortCache;
      (c.x !== i.x || c.y !== u || c.width !== i.width || c.height !== i.height) && (c.x = i.x, c.y = u, c.width = i.width, c.height = i.height, _.viewport(i.x, u, i.width, i.height)), !l.depthStencilRenderBuffer && (e.stencil || e.depth) && this._initStencil(l), this.clear(e, t, r);
    }
    finishRenderPass(e) {
      let t = this._renderTargetSystem.getGpuRenderTarget(e);
      if (!t.msaa) return;
      let r = this._renderer.gl;
      r.bindFramebuffer(r.FRAMEBUFFER, t.resolveTargetFramebuffer), r.bindFramebuffer(r.READ_FRAMEBUFFER, t.framebuffer), r.blitFramebuffer(0, 0, t.width, t.height, 0, 0, t.width, t.height, r.COLOR_BUFFER_BIT, r.NEAREST), r.bindFramebuffer(r.FRAMEBUFFER, t.framebuffer);
    }
    initGpuRenderTarget(e) {
      let t = this._renderer.gl,
        r = new o.GlRenderTarget();
      return (r._attachedMipLevel = 0, r._attachedLayer = 0, e.colorTexture instanceof n.CanvasSource) ? (this._renderer.context.ensureCanvasSize(e.colorTexture.resource), r.framebuffer = null) : (this._initColor(e, r), t.bindFramebuffer(t.FRAMEBUFFER, null)), r;
    }
    destroyGpuRenderTarget(e) {
      let t = this._renderer.gl;
      e.framebuffer && (t.deleteFramebuffer(e.framebuffer), e.framebuffer = null), e.resolveTargetFramebuffer && (t.deleteFramebuffer(e.resolveTargetFramebuffer), e.resolveTargetFramebuffer = null), e.depthStencilRenderBuffer && (t.deleteRenderbuffer(e.depthStencilRenderBuffer), e.depthStencilRenderBuffer = null), e.msaaRenderBuffer.forEach(e => {
        t.deleteRenderbuffer(e);
      }), e.msaaRenderBuffer = null;
    }
    clear(e, t, r, i, a = 0, n = 0) {
      if (!t) return;
      if (0 !== n) throw Error("[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.");
      let o = this._renderTargetSystem;
      "boolean" == typeof t && (t = t ? s.CLEAR.ALL : s.CLEAR.NONE);
      let l = this._renderer.gl;
      if (t & s.CLEAR.COLOR) {
        r ?? (r = o.defaultClearColor);
        let e = this._clearColorCache,
          t = r;
        (e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3]) && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], l.clearColor(t[0], t[1], t[2], t[3]));
      }
      l.clear(t);
    }
    resizeGpuRenderTarget(e) {
      if (e.isRoot) return;
      let t = this._renderTargetSystem.getGpuRenderTarget(e);
      this._resizeColor(e, t), (e.stencil || e.depth) && this._resizeStencil(t);
    }
    _initColor(e, t) {
      let r = this._renderer,
        i = r.gl,
        n = i.createFramebuffer();
      if (t.resolveTargetFramebuffer = n, i.bindFramebuffer(i.FRAMEBUFFER, n), t.width = e.colorTexture.source.pixelWidth, t.height = e.colorTexture.source.pixelHeight, e.colorTextures.forEach((e, n) => {
        let s = e.source;
        s.antialias && (r.context.supports.msaa ? t.msaa = !0 : (0, a.warn)("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), r.texture.bindSource(s, 0);
        let o = r.texture.getGlSource(s),
          l = o.texture;
        if (o.target === i.TEXTURE_2D) i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, i.TEXTURE_2D, l, 0);else if (o.target === i.TEXTURE_2D_ARRAY) {
          if (r.context.webGLVersion < 2) throw Error("[RenderTargetSystem] TEXTURE_2D_ARRAY requires WebGL2.");
          i.framebufferTextureLayer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, l, 0, 0);
        } else if (o.target === i.TEXTURE_CUBE_MAP) i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, i.TEXTURE_CUBE_MAP_POSITIVE_X, l, 0);else throw Error("[RenderTargetSystem] Unsupported texture target for framebuffer attachment.");
      }), t.msaa) {
        let r = i.createFramebuffer();
        t.framebuffer = r, i.bindFramebuffer(i.FRAMEBUFFER, r), e.colorTextures.forEach((e, r) => {
          let a = i.createRenderbuffer();
          t.msaaRenderBuffer[r] = a;
        });
      } else t.framebuffer = n;
      this._resizeColor(e, t);
    }
    _resizeColor(e, t) {
      let r = e.colorTexture.source;
      if (t.width = r.pixelWidth, t.height = r.pixelHeight, t._attachedMipLevel = 0, t._attachedLayer = 0, e.colorTextures.forEach((e, t) => {
        0 !== t && e.source.resize(r.width, r.height, r._resolution);
      }), t.msaa) {
        let r = this._renderer,
          i = r.gl,
          a = t.framebuffer;
        i.bindFramebuffer(i.FRAMEBUFFER, a), e.colorTextures.forEach((e, a) => {
          let n = e.source;
          r.texture.bindSource(n, 0);
          let s = r.texture.getGlSource(n).internalFormat,
            o = t.msaaRenderBuffer[a];
          i.bindRenderbuffer(i.RENDERBUFFER, o), i.renderbufferStorageMultisample(i.RENDERBUFFER, 4, s, n.pixelWidth, n.pixelHeight), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + a, i.RENDERBUFFER, o);
        });
      }
    }
    _initStencil(e) {
      if (null === e.framebuffer) return;
      let t = this._renderer.gl,
        r = t.createRenderbuffer();
      e.depthStencilRenderBuffer = r, t.bindRenderbuffer(t.RENDERBUFFER, r), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, r), this._resizeStencil(e);
    }
    _resizeStencil(e) {
      let t = this._renderer.gl;
      t.bindRenderbuffer(t.RENDERBUFFER, e.depthStencilRenderBuffer), e.msaa ? t.renderbufferStorageMultisample(t.RENDERBUFFER, 4, t.DEPTH24_STENCIL8, e.width, e.height) : t.renderbufferStorage(t.RENDERBUFFER, 2 === this._renderer.context.webGLVersion ? t.DEPTH24_STENCIL8 : t.DEPTH_STENCIL, e.width, e.height);
    }
    prerender(e) {
      let t = e.colorTexture.resource;
      this._renderer.context.multiView && n.CanvasSource.test(t) && this._renderer.context.ensureCanvasSize(t);
    }
    postrender(e) {
      if (this._renderer.context.multiView && n.CanvasSource.test(e.colorTexture.resource)) {
        let t = this._renderer.context.canvas,
          r = e.colorTexture;
        r.context2D.drawImage(t, 0, r.pixelHeight - t.height);
      }
    }
    _setDrawBuffers(e, t) {
      let r = e.colorTextures.length,
        i = this._drawBuffersCache[r];
      if (1 === this._renderer.context.webGLVersion) {
        let e = this._renderer.context.extensions.drawBuffers;
        e ? e.drawBuffersWEBGL(i) : (0, a.warn)("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
      } else t.drawBuffers(i);
    }
  }
  e.s(["GlRenderTargetAdaptor", 0, l], 915907);
  class u extends r.RenderTargetSystem {
    constructor(e) {
      super(e), this.adaptor = new l(), this.adaptor.init(e, this);
    }
  }
  u.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "renderTarget"
  }, e.s(["GlRenderTargetSystem", 0, u], 529002);
  var _ = e.i(693398),
    c = e.i(153594),
    h = e.i(317765);
  function d(e, t) {
    let r = [],
      i = [`
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `],
      a = !1,
      n = 0,
      s = t._getProgramData(e.glProgram);
    for (let o in e.groups) {
      let l = e.groups[o];
      for (let u in r.push(`
            resources = g[${o}].resources;
        `), l.resources) {
        let d = l.resources[u];
        if (d instanceof c.UniformGroup) {
          if (d.ubo) {
            let t = e._uniformBindMap[o][Number(u)];
            r.push(`
                        sS.bindUniformBlock(
                            resources[${u}],
                            '${t}',
                            ${e.glProgram._uniformBlockData[t].index}
                        );
                    `);
          } else r.push(`
                        ugS.updateUniformGroup(resources[${u}], p, sD);
                    `);
        } else if (d instanceof _.BufferResource) {
          let t = e._uniformBindMap[o][Number(u)];
          r.push(`
                    sS.bindUniformBlock(
                        resources[${u}],
                        '${t}',
                        ${e.glProgram._uniformBlockData[t].index}
                    );
                `);
        } else if (d instanceof h.TextureSource) {
          let l = e._uniformBindMap[o][u],
            _ = s.uniformData[l];
          _ && (a || (a = !0, i.push(`
                        var tS = r.texture;
                        `)), t._gl.uniform1i(_.location, n), r.push(`
                        tS.bind(resources[${u}], ${n});
                    `), n++);
        }
      }
    }
    return Function("r", "s", "sD", [...i, ...r].join("\n"));
  }
  e.s(["generateShaderSyncCode", 0, d], 435573);
  class f {
    constructor(e, t) {
      this.program = e, this.uniformData = t, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {};
    }
    destroy() {
      this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null;
    }
  }
  function m(e, t, r) {
    let i = e.createShader(t);
    return e.shaderSource(i, r), e.compileShader(i), i;
  }
  function g(e) {
    let t = Array(e);
    for (let e = 0; e < t.length; e++) t[e] = !1;
    return t;
  }
  function E(e, t) {
    switch (e) {
      case "float":
      case "int":
      case "uint":
      case "sampler2D":
      case "sampler2DArray":
        return 0;
      case "vec2":
        return new Float32Array(2 * t);
      case "vec3":
        return new Float32Array(3 * t);
      case "vec4":
        return new Float32Array(4 * t);
      case "ivec2":
        return new Int32Array(2 * t);
      case "ivec3":
        return new Int32Array(3 * t);
      case "ivec4":
        return new Int32Array(4 * t);
      case "uvec2":
        return new Uint32Array(2 * t);
      case "uvec3":
        return new Uint32Array(3 * t);
      case "uvec4":
        return new Uint32Array(4 * t);
      case "bool":
        return !1;
      case "bvec2":
        return g(2 * t);
      case "bvec3":
        return g(3 * t);
      case "bvec4":
        return g(4 * t);
      case "mat2":
        return new Float32Array([1, 0, 0, 1]);
      case "mat3":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      case "mat4":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    return null;
  }
  e.s(["GlProgramData", 0, f, "IGLUniformData", 0, class {}], 459980), e.s(["compileShader", 0, m], 235523), e.s(["defaultValue", 0, E], 428993);
  var T = e.i(434367);
  let p = null,
    R = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      UNSIGNED_INT: "uint",
      UNSIGNED_INT_VEC2: "uvec2",
      UNSIGNED_INT_VEC3: "uvec3",
      UNSIGNED_INT_VEC4: "uvec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D",
      INT_SAMPLER_2D: "sampler2D",
      UNSIGNED_INT_SAMPLER_2D: "sampler2D",
      SAMPLER_CUBE: "samplerCube",
      INT_SAMPLER_CUBE: "samplerCube",
      UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
      SAMPLER_2D_ARRAY: "sampler2DArray",
      INT_SAMPLER_2D_ARRAY: "sampler2DArray",
      UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
    },
    x = {
      float: "float32",
      vec2: "float32x2",
      vec3: "float32x3",
      vec4: "float32x4",
      int: "sint32",
      ivec2: "sint32x2",
      ivec3: "sint32x3",
      ivec4: "sint32x4",
      uint: "uint32",
      uvec2: "uint32x2",
      uvec3: "uint32x3",
      uvec4: "uint32x4",
      bool: "uint32",
      bvec2: "uint32x2",
      bvec3: "uint32x3",
      bvec4: "uint32x4"
    };
  function S(e, t) {
    if (!p) {
      let t = Object.keys(R);
      p = {};
      for (let r = 0; r < t.length; ++r) {
        let i = t[r];
        p[e[i]] = R[i];
      }
    }
    return p[t];
  }
  function b(e, t) {
    return x[S(e, t)] || "float32";
  }
  function v(e, t, r = !1) {
    let i = {},
      a = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < a; r++) {
      let a = t.getActiveAttrib(e, r);
      if (a.name.startsWith("gl_")) continue;
      let n = b(t, a.type);
      i[a.name] = {
        location: 0,
        format: n,
        stride: (0, T.getAttributeInfoFromFormat)(n).stride,
        offset: 0,
        instance: !1,
        start: 0
      };
    }
    let n = Object.keys(i);
    if (r) {
      n.sort((e, t) => e > t ? 1 : -1);
      for (let r = 0; r < n.length; r++) i[n[r]].location = r, t.bindAttribLocation(e, r, n[r]);
      t.linkProgram(e);
    } else for (let r = 0; r < n.length; r++) i[n[r]].location = t.getAttribLocation(e, n[r]);
    return i;
  }
  function A(e, t) {
    if (!t.ACTIVE_UNIFORM_BLOCKS) return {};
    let r = {},
      i = t.getProgramParameter(e, t.ACTIVE_UNIFORM_BLOCKS);
    for (let a = 0; a < i; a++) {
      let i = t.getActiveUniformBlockName(e, a),
        n = t.getUniformBlockIndex(e, i),
        s = t.getActiveUniformBlockParameter(e, a, t.UNIFORM_BLOCK_DATA_SIZE);
      r[i] = {
        name: i,
        index: n,
        size: s
      };
    }
    return r;
  }
  function G(e, t) {
    let r = {},
      i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let a = 0; a < i; a++) {
      let i = t.getActiveUniform(e, a),
        n = i.name.replace(/\[.*?\]$/, ""),
        s = !!i.name.match(/\[.*?\]$/),
        o = S(t, i.type);
      r[n] = {
        name: n,
        index: a,
        type: o,
        size: i.size,
        isArray: s,
        value: E(o, i.size)
      };
    }
    return r;
  }
  function B(e, t) {
    let r = e.getShaderSource(t);
    if (null === r) return void console.error("PixiJS Error: Could not retrieve shader source (WebGL context may be lost).");
    let i = r.split("\n").map((e, t) => `${t}: ${e}`),
      a = e.getShaderInfoLog(t) ?? "",
      n = a.split("\n"),
      s = {},
      o = n.map(e => parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(e => !!e && !s[e] && (s[e] = !0, !0)),
      l = [""];
    o.forEach(e => {
      i[e - 1] = `%c${i[e - 1]}%c`, l.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
    });
    let u = i.join("\n");
    l[0] = u, console.error(a), console.groupCollapsed("click to view full shader code"), console.warn(...l), console.groupEnd();
  }
  function y(e, t, r, i) {
    e.getProgramParameter(t, e.LINK_STATUS) || (e.getShaderParameter(r, e.COMPILE_STATUS) || B(e, r), e.getShaderParameter(i, e.COMPILE_STATUS) || B(e, i), console.error("PixiJS Error: Could not initialize shader."), "" !== e.getProgramInfoLog(t) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t)));
  }
  function C(e, t) {
    let r = m(e, e.VERTEX_SHADER, t.vertex),
      i = m(e, e.FRAGMENT_SHADER, t.fragment),
      n = e.createProgram();
    e.attachShader(n, r), e.attachShader(n, i);
    let s = t.transformFeedbackVaryings;
    s && ("function" != typeof e.transformFeedbackVaryings ? (0, a.warn)("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : e.transformFeedbackVaryings(n, s.names, "separate" === s.bufferMode ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS)), e.linkProgram(n), e.getProgramParameter(n, e.LINK_STATUS) || y(e, n, r, i), t._attributeData = v(n, e, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex)), t._uniformData = G(n, e), t._uniformBlockData = A(n, e), e.deleteShader(r), e.deleteShader(i);
    let o = {};
    for (let r in t._uniformData) {
      let i = t._uniformData[r];
      o[r] = {
        location: e.getUniformLocation(n, r),
        value: E(i.type, i.size)
      };
    }
    return new f(n, o);
  }
  e.s(["mapGlToVertexFormat", 0, b, "mapType", 0, S], 196932), e.s(["extractAttributesFromGlProgram", 0, v], 794604), e.s(["getUboData", 0, A], 788987), e.s(["getUniformData", 0, G], 293592), e.s(["logProgramError", 0, y], 135617), e.s(["generateProgram", 0, C], 510091);
  let N = {
    textureCount: 0,
    blockIndex: 0
  };
  class D {
    constructor(e) {
      this._activeProgram = null, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = e;
    }
    contextChange(e) {
      this._gl = e, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._activeProgram = null;
    }
    bind(e, t) {
      if (this._setProgram(e.glProgram), t) return;
      N.textureCount = 0, N.blockIndex = 0;
      let r = this._shaderSyncFunctions[e.glProgram._key];
      r || (r = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this)), this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings), r(this._renderer, e, N);
    }
    updateUniformGroup(e) {
      this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, N);
    }
    bindUniformBlock(e, t, r = 0) {
      let i = this._renderer.buffer,
        a = this._getProgramData(this._activeProgram),
        n = e._bufferResource;
      n || this._renderer.ubo.updateUniformGroup(e);
      let s = e.buffer,
        o = i.updateBuffer(s),
        l = i.freeLocationForBufferBase(o);
      if (n) {
        let {
          offset: t,
          size: r
        } = e;
        0 === t && r === s.data.byteLength ? i.bindBufferBase(o, l) : i.bindBufferRange(o, l, t);
      } else i.getLastBindBaseLocation(o) !== l && i.bindBufferBase(o, l);
      let u = this._activeProgram._uniformBlockData[t].index;
      a.uniformBlockBindings[r] !== l && (a.uniformBlockBindings[r] = l, this._renderer.gl.uniformBlockBinding(a.program, u, l));
    }
    _setProgram(e) {
      if (this._activeProgram === e) return;
      this._activeProgram = e;
      let t = this._getProgramData(e);
      this._gl.useProgram(t.program);
    }
    _getProgramData(e) {
      return this._programDataHash[e._key] || this._createProgramData(e);
    }
    _createProgramData(e) {
      let t = e._key;
      return this._programDataHash[t] = C(this._gl, e), this._programDataHash[t];
    }
    destroy() {
      for (let e of Object.keys(this._programDataHash)) this._programDataHash[e].destroy();
      this._programDataHash = null, this._shaderSyncFunctions = null, this._activeProgram = null, this._renderer = null, this._gl = null;
    }
    _generateShaderSync(e, t) {
      return d(e, t);
    }
    resetState() {
      this._activeProgram = null;
    }
  }
  D.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "shader"
  }, e.s(["GlShaderSystem", 0, D], 962768);
  var I = e.i(643781);
  let U = {
      f32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,
      "vec2<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,
      "vec3<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,
      "vec4<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,
      i32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
      "vec2<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
      "vec3<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
      "vec4<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
      u32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,
      "vec2<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,
      "vec3<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,
      "vec4<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,
      bool: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
      "vec2<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
      "vec3<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
      "vec4<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
      "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
      "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
      "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);"
    },
    L = {
      f32: "gl.uniform1fv(location, v);",
      "vec2<f32>": "gl.uniform2fv(location, v);",
      "vec3<f32>": "gl.uniform3fv(location, v);",
      "vec4<f32>": "gl.uniform4fv(location, v);",
      "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
      "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
      "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
      i32: "gl.uniform1iv(location, v);",
      "vec2<i32>": "gl.uniform2iv(location, v);",
      "vec3<i32>": "gl.uniform3iv(location, v);",
      "vec4<i32>": "gl.uniform4iv(location, v);",
      u32: "gl.uniform1iv(location, v);",
      "vec2<u32>": "gl.uniform2iv(location, v);",
      "vec3<u32>": "gl.uniform3iv(location, v);",
      "vec4<u32>": "gl.uniform4iv(location, v);",
      bool: "gl.uniform1iv(location, v);",
      "vec2<bool>": "gl.uniform2iv(location, v);",
      "vec3<bool>": "gl.uniform3iv(location, v);",
      "vec4<bool>": "gl.uniform4iv(location, v);"
    };
  function F(e, t) {
    let r = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `];
    for (let i in e.uniforms) {
      if (!t[i]) {
        e.uniforms[i] instanceof c.UniformGroup ? e.uniforms[i].ubo ? r.push(`
                        renderer.shader.bindUniformBlock(uv.${i}, "${i}");
                    `) : r.push(`
                        renderer.shader.updateUniformGroup(uv.${i});
                    `) : e.uniforms[i] instanceof _.BufferResource && r.push(`
                        renderer.shader.bindBufferResource(uv.${i}, "${i}");
                    `);
        continue;
      }
      let a = e.uniformStructures[i],
        n = !1;
      for (let e = 0; e < I.uniformParsers.length; e++) {
        let t = I.uniformParsers[e];
        if (a.type === t.type && t.test(a)) {
          r.push(`name = "${i}";`, I.uniformParsers[e].uniform), n = !0;
          break;
        }
      }
      if (!n) {
        let e = (1 === a.size ? U : L)[a.type].replace("location", `ud["${i}"].location`);
        r.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${e};`);
      }
    }
    return Function("ud", "uv", "renderer", "syncData", r.join("\n"));
  }
  e.s(["UNIFORM_TO_ARRAY_SETTERS", 0, L, "UNIFORM_TO_SINGLE_SETTERS", 0, U], 163281), e.s(["generateUniformsSync", 0, F], 200815);
  class M {
    constructor(e) {
      this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = e, this.gl = null, this._cache = {};
    }
    contextChange(e) {
      this.gl = e;
    }
    updateUniformGroup(e, t, r) {
      let i = this._renderer.shader._getProgramData(t);
      e.isStatic && e._dirtyId === i.uniformDirtyGroups[e.uid] || (i.uniformDirtyGroups[e.uid] = e._dirtyId, this._getUniformSyncFunction(e, t)(i.uniformData, e.uniforms, this._renderer, r));
    }
    _getUniformSyncFunction(e, t) {
      return this._uniformGroupSyncHash[e._signature]?.[t._key] || this._createUniformSyncFunction(e, t);
    }
    _createUniformSyncFunction(e, t) {
      let r = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {}),
        i = this._getSignature(e, t._uniformData, "u");
      return this._cache[i] || (this._cache[i] = this._generateUniformsSync(e, t._uniformData)), r[t._key] = this._cache[i], r[t._key];
    }
    _generateUniformsSync(e, t) {
      return F(e, t);
    }
    _getSignature(e, t, r) {
      let i = e.uniforms,
        a = [`${r}-`];
      for (let e in i) a.push(e), t[e] && a.push(t[e].type);
      return a.join("-");
    }
    destroy() {
      this._renderer = null, this._cache = null;
    }
  }
  M.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "uniformGroup"
  }, e.s(["GlUniformGroupSystem", 0, M], 739983);
  var O = e.i(688761),
    P = e.i(787653);
  function w(e) {
    let t = {};
    if (t.normal = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t.add = [e.ONE, e.ONE], t.multiply = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.screen = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.none = [0, 0], t["normal-npm"] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t["add-npm"] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t["screen-npm"] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.erase = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], e instanceof P.DOMAdapter.get().getWebGLRenderingContext()) {
      let r = e.getExtension("EXT_blend_minmax");
      r && (t.min = [e.ONE, e.ONE, e.ONE, e.ONE, r.MIN_EXT, r.MIN_EXT], t.max = [e.ONE, e.ONE, e.ONE, e.ONE, r.MAX_EXT, r.MAX_EXT]);
    } else t.min = [e.ONE, e.ONE, e.ONE, e.ONE, e.MIN, e.MIN], t.max = [e.ONE, e.ONE, e.ONE, e.ONE, e.MAX, e.MAX];
    return t;
  }
  e.s(["mapWebGLBlendModesToPixi", 0, w], 485552);
  let H = class e {
    constructor(e) {
      this._invertFrontFace = !1, this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = O.State.for2d(), e.renderTarget.onRenderTargetChange.add(this);
    }
    onRenderTargetChange(e) {
      this._invertFrontFace = !e.isRoot, this._cullFace ? this.setFrontFace(this._frontFace) : this._frontFaceDirty = !0;
    }
    contextChange(e) {
      this.gl = e, this.blendModesMap = w(e), this.resetState();
    }
    set(e) {
      if (e || (e = this.defaultState), this.stateId !== e.data) {
        let t = this.stateId ^ e.data,
          r = 0;
        for (; t;) 1 & t && this.map[r].call(this, !!(e.data & 1 << r)), t >>= 1, r++;
        this.stateId = e.data;
      }
      for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
    }
    forceState(e) {
      e || (e = this.defaultState);
      for (let t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & 1 << t));
      for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
      this.stateId = e.data;
    }
    setBlend(t) {
      this._updateCheck(e._checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND);
    }
    setOffset(t) {
      this._updateCheck(e._checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    }
    setDepthTest(e) {
      this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
    }
    setDepthMask(e) {
      this.gl.depthMask(e);
    }
    setCullFace(e) {
      this._cullFace = e, this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE), this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace);
    }
    setFrontFace(e) {
      this._frontFace = e, this._frontFaceDirty = !1;
      let t = this._invertFrontFace ? !e : e;
      this._glFrontFace !== t && (this._glFrontFace = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]));
    }
    setBlendMode(e) {
      if (this.blendModesMap[e] || (e = "normal"), e === this.blendMode) return;
      this.blendMode = e;
      let t = this.blendModesMap[e],
        r = this.gl;
      2 === t.length ? r.blendFunc(t[0], t[1]) : r.blendFuncSeparate(t[0], t[1], t[2], t[3]), 6 === t.length ? (this._blendEq = !0, r.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
    }
    setPolygonOffset(e, t) {
      this.gl.polygonOffset(e, t);
    }
    resetState() {
      this._glFrontFace = !1, this._frontFace = !1, this._cullFace = !1, this._frontFaceDirty = !1, this._invertFrontFace = !1, this.gl.frontFace(this.gl.CCW), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal");
    }
    _updateCheck(e, t) {
      let r = this.checks.indexOf(e);
      t && -1 === r ? this.checks.push(e) : t || -1 === r || this.checks.splice(r, 1);
    }
    static _checkBlendMode(e, t) {
      e.setBlendMode(t.blendMode);
    }
    static _checkPolygonOffset(e, t) {
      e.setPolygonOffset(1, t.polygonOffset);
    }
    destroy() {
      this.gl = null, this.checks.length = 0;
    }
  };
  H.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "state"
  }, e.s(["GlStateSystem", 0, H], 444533);
  var V = e.i(500378);
  e.s(["GlTexture", 0, class {
    constructor(e) {
      this.target = V.GL_TARGETS.TEXTURE_2D, this._layerInitMask = 0, this.texture = e, this.width = -1, this.height = -1, this.type = V.GL_TYPES.UNSIGNED_BYTE, this.internalFormat = V.GL_FORMATS.RGBA, this.format = V.GL_FORMATS.RGBA, this.samplerType = 0;
    }
    destroy() {}
  }], 61003), e.s(["glUploadBufferImageResource", 0, {
    id: "buffer",
    upload(e, t, r, i, a, n = !1) {
      let s = a || t.target;
      n || t.width !== e.width || t.height !== e.height ? r.texImage2D(s, 0, t.internalFormat, e.width, e.height, 0, t.format, t.type, e.resource) : r.texSubImage2D(s, 0, 0, 0, e.width, e.height, t.format, t.type, e.resource), t.width = e.width, t.height = e.height;
    }
  }], 378977);
  let X = {
    "bc1-rgba-unorm": !0,
    "bc1-rgba-unorm-srgb": !0,
    "bc2-rgba-unorm": !0,
    "bc2-rgba-unorm-srgb": !0,
    "bc3-rgba-unorm": !0,
    "bc3-rgba-unorm-srgb": !0,
    "bc4-r-unorm": !0,
    "bc4-r-snorm": !0,
    "bc5-rg-unorm": !0,
    "bc5-rg-snorm": !0,
    "bc6h-rgb-ufloat": !0,
    "bc6h-rgb-float": !0,
    "bc7-rgba-unorm": !0,
    "bc7-rgba-unorm-srgb": !0,
    "etc2-rgb8unorm": !0,
    "etc2-rgb8unorm-srgb": !0,
    "etc2-rgb8a1unorm": !0,
    "etc2-rgb8a1unorm-srgb": !0,
    "etc2-rgba8unorm": !0,
    "etc2-rgba8unorm-srgb": !0,
    "eac-r11unorm": !0,
    "eac-r11snorm": !0,
    "eac-rg11unorm": !0,
    "eac-rg11snorm": !0,
    "astc-4x4-unorm": !0,
    "astc-4x4-unorm-srgb": !0,
    "astc-5x4-unorm": !0,
    "astc-5x4-unorm-srgb": !0,
    "astc-5x5-unorm": !0,
    "astc-5x5-unorm-srgb": !0,
    "astc-6x5-unorm": !0,
    "astc-6x5-unorm-srgb": !0,
    "astc-6x6-unorm": !0,
    "astc-6x6-unorm-srgb": !0,
    "astc-8x5-unorm": !0,
    "astc-8x5-unorm-srgb": !0,
    "astc-8x6-unorm": !0,
    "astc-8x6-unorm-srgb": !0,
    "astc-8x8-unorm": !0,
    "astc-8x8-unorm-srgb": !0,
    "astc-10x5-unorm": !0,
    "astc-10x5-unorm-srgb": !0,
    "astc-10x6-unorm": !0,
    "astc-10x6-unorm-srgb": !0,
    "astc-10x8-unorm": !0,
    "astc-10x8-unorm-srgb": !0,
    "astc-10x10-unorm": !0,
    "astc-10x10-unorm-srgb": !0,
    "astc-12x10-unorm": !0,
    "astc-12x10-unorm-srgb": !0,
    "astc-12x12-unorm": !0,
    "astc-12x12-unorm-srgb": !0
  };
  e.s(["glUploadCompressedTextureResource", 0, {
    id: "compressed",
    upload(e, t, r, i, a, n) {
      let s = a ?? t.target;
      r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
      let o = e.pixelWidth,
        l = e.pixelHeight,
        u = !!X[e.format];
      for (let i = 0; i < e.resource.length; i++) {
        let a = e.resource[i];
        u ? r.compressedTexImage2D(s, i, t.internalFormat, o, l, 0, a) : r.texImage2D(s, i, t.internalFormat, o, l, 0, t.format, t.type, a), o = Math.max(o >> 1, 1), l = Math.max(l >> 1, 1);
      }
    }
  }], 800477);
  let k = ["right", "left", "top", "bottom", "front", "back"];
  e.s(["createGlUploadCubeTextureResource", 0, function (e) {
    return {
      id: "cube",
      upload(t, r, i, a) {
        let n = t.faces;
        for (let t = 0; t < k.length; t++) {
          let s = n[k[t]];
          (e[s.uploadMethodId] || e.image).upload(s, r, i, a, V.GL_TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + t, (r._layerInitMask & 1 << t) == 0), r._layerInitMask |= 1 << t;
        }
        r.width = t.pixelWidth, r.height = t.pixelHeight;
      }
    };
  }], 629057);
  e.s(["glUploadImageResource", 0, {
    id: "image",
    upload(e, t, r, i, a, n = !1) {
      let s = a || t.target,
        o = e.pixelWidth,
        l = e.pixelHeight,
        u = e.resourceWidth,
        _ = e.resourceHeight,
        c = n || t.width !== o || t.height !== l,
        h = u >= o && _ >= l;
      (2 === i ? function (e, t, r, i, a, n, s, o, l, u) {
        if (!u) {
          l && e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, null), e.texSubImage2D(t, 0, 0, 0, n, s, r.format, r.type, o);
          return;
        }
        l ? e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, o) : e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
      } : function (e, t, r, i, a, n, s, o, l, u) {
        if (!u) {
          l && e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, null), e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
          return;
        }
        l ? e.texImage2D(t, 0, r.internalFormat, r.format, r.type, o) : e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
      })(r, s, t, o, l, u, _, e.resource, c, h), t.width = o, t.height = l;
    }
  }], 657280);
};
