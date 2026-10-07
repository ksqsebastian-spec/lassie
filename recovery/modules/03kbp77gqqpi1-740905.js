// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 740905, 296853, 700631, 63146, 204126, 500378, 6948, 768339, 871602, 262609, 270143, 945168.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t,
    r,
    i,
    a,
    n,
    s = e.i(78278),
    o = e.i(688761);
  class l {
    constructor() {
      this._tempState = o.State.for2d(), this._didUploadHash = {};
    }
    init(e) {
      e.renderer.runners.contextChange.add(this);
    }
    contextChange() {
      this._didUploadHash = {};
    }
    start(e, t, r) {
      let i = e.renderer,
        a = this._didUploadHash[r.uid];
      i.shader.bind(r, a), a || (this._didUploadHash[r.uid] = !0), i.shader.updateUniformGroup(i.globalUniforms.uniformGroup), i.geometry.bind(t, r.glProgram);
    }
    execute(e, t) {
      let r = e.renderer;
      this._tempState.blendMode = t.blendMode, r.state.set(this._tempState);
      let i = t.textures.textures;
      for (let e = 0; e < t.textures.count; e++) r.texture.bind(i[e], e);
      r.geometry.draw(t.topology, t.size, t.start);
    }
  }
  l.extension = {
    type: [s.ExtensionType.WebGLPipesAdaptor],
    name: "batch"
  }, e.s(["GlBatchAdaptor", 0, l], 740905);
  var u = e.i(217055),
    _ = e.i(294212),
    c = ((t = c || {})[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t);
  e.s(["BUFFER_TYPE", 0, c], 296853);
  class h {
    constructor(e, t) {
      this._lastBindBaseLocation = -1, this._lastBindCallId = -1, this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.type = t;
    }
    destroy() {
      this.buffer = null, this.updateID = -1, this.byteLength = -1, this.type = -1, this._lastBindBaseLocation = -1, this._lastBindCallId = -1;
    }
  }
  e.s(["GlBuffer", 0, h], 700631);
  class d {
    constructor(e) {
      this._boundBufferBases = Object.create(null), this._minBaseLocation = 0, this._nextBindBaseIndex = this._minBaseLocation, this._bindCallId = 0, this._renderer = e, this._managedBuffers = new u.GCManagedHash({
        renderer: e,
        type: "resource",
        onUnload: this.onBufferUnload.bind(this),
        name: "glBuffer"
      });
    }
    destroy() {
      this._managedBuffers.destroy(), this._renderer = null, this._gl = null, this._boundBufferBases = {};
    }
    contextChange() {
      this._gl = this._renderer.gl, this.destroyAll(!0), this._maxBindings = this._renderer.limits.maxUniformBindings;
    }
    getGlBuffer(e) {
      return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this.createGLBuffer(e);
    }
    bind(e) {
      let {
          _gl: t
        } = this,
        r = this.getGlBuffer(e);
      t.bindBuffer(r.type, r.buffer);
    }
    bindBufferBase(e, t) {
      let {
        _gl: r
      } = this;
      this._boundBufferBases[t] !== e && (this._boundBufferBases[t] = e, e._lastBindBaseLocation = t, r.bindBufferBase(r.UNIFORM_BUFFER, t, e.buffer));
    }
    nextBindBase(e) {
      this._bindCallId++, this._minBaseLocation = 0, e && (this._boundBufferBases[0] = null, this._minBaseLocation = 1, this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1));
    }
    freeLocationForBufferBase(e) {
      let t = this.getLastBindBaseLocation(e);
      if (t >= this._minBaseLocation) return e._lastBindCallId = this._bindCallId, t;
      let r = 0,
        i = this._nextBindBaseIndex;
      for (; r < 2;) {
        i >= this._maxBindings && (i = this._minBaseLocation, r++);
        let e = this._boundBufferBases[i];
        if (e && e._lastBindCallId === this._bindCallId) {
          i++;
          continue;
        }
        break;
      }
      return (t = i, this._nextBindBaseIndex = i + 1, r >= 2) ? -1 : (e._lastBindCallId = this._bindCallId, this._boundBufferBases[t] = null, t);
    }
    getLastBindBaseLocation(e) {
      let t = e._lastBindBaseLocation;
      return this._boundBufferBases[t] === e ? t : -1;
    }
    bindBufferRange(e, t, r, i) {
      let {
        _gl: a
      } = this;
      r || (r = 0), t || (t = 0), this._boundBufferBases[t] = null, a.bindBufferRange(a.UNIFORM_BUFFER, t || 0, e.buffer, 256 * r, i || 256);
    }
    updateBuffer(e) {
      let {
          _gl: t
        } = this,
        r = this.getGlBuffer(e);
      if (e._updateID === r.updateID) return r;
      r.updateID = e._updateID, t.bindBuffer(r.type, r.buffer);
      let i = e.data,
        a = e.descriptor.usage & _.BufferUsage.STATIC ? t.STATIC_DRAW : t.DYNAMIC_DRAW;
      return i ? r.byteLength >= i.byteLength ? t.bufferSubData(r.type, 0, i, 0, e._updateSize / i.BYTES_PER_ELEMENT) : (r.byteLength = i.byteLength, t.bufferData(r.type, i, a)) : (r.byteLength = e.descriptor.size, t.bufferData(r.type, r.byteLength, a)), r;
    }
    destroyAll(e = !1) {
      this._managedBuffers.removeAll(e);
    }
    onBufferUnload(e, t = !1) {
      let r = e._gpuData[this._renderer.uid];
      r && (t || this._gl.deleteBuffer(r.buffer));
    }
    createGLBuffer(e) {
      let {
          _gl: t
        } = this,
        r = c.ARRAY_BUFFER;
      e.descriptor.usage & _.BufferUsage.INDEX ? r = c.ELEMENT_ARRAY_BUFFER : e.descriptor.usage & _.BufferUsage.UNIFORM && (r = c.UNIFORM_BUFFER);
      let i = new h(t.createBuffer(), r);
      return e._gpuData[this._renderer.uid] = i, this._managedBuffers.add(e), i;
    }
    resetState() {
      this._boundBufferBases = Object.create(null);
    }
  }
  d.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "buffer"
  }, e.s(["GlBufferSystem", 0, d], 63146);
  var f = e.i(787653),
    m = e.i(562140);
  let g = class e {
    constructor(e) {
      this.supports = {
        uint32Indices: !0,
        uniformBufferObject: !0,
        vertexArrayObject: !0,
        srgbTextures: !0,
        nonPowOf2wrapping: !0,
        msaa: !0,
        nonPowOf2mipmaps: !0
      }, this._renderer = e, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
    }
    get isLost() {
      return !this.gl || this.gl.isContextLost();
    }
    contextChange(e) {
      this.gl = e, this._renderer.gl = e;
    }
    init(t) {
      t = {
        ...e.defaultOptions,
        ...t
      };
      let r = this.multiView = t.multiView;
      if (t.context && r && ((0, m.warn)("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."), r = !1), r ? this.canvas = f.DOMAdapter.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height) : this.canvas = this._renderer.view.canvas, t.context) this.initFromContext(t.context);else {
        let e = this._renderer.background.alpha < 1,
          r = t.premultipliedAlpha ?? !0,
          i = t.antialias && !this._renderer.backBuffer.useBackBuffer;
        this.createContext(t.preferWebGLVersion, {
          alpha: e,
          premultipliedAlpha: r,
          antialias: i,
          stencil: !0,
          preserveDrawingBuffer: t.preserveDrawingBuffer,
          powerPreference: t.powerPreference ?? "default"
        });
      }
    }
    ensureCanvasSize(e) {
      if (!this.multiView) {
        e !== this.canvas && (0, m.warn)("multiView is disabled, but targetCanvas is not the main canvas");
        return;
      }
      let {
        canvas: t
      } = this;
      (t.width < e.width || t.height < e.height) && (t.width = Math.max(e.width, e.width), t.height = Math.max(e.height, e.height));
    }
    initFromContext(e) {
      this.gl = e, this.webGLVersion = e instanceof f.DOMAdapter.get().getWebGLRenderingContext() ? 1 : 2, this.getExtensions(), this.validateContext(e), this._renderer.runners.contextChange.emit(e);
      let t = this._renderer.view.canvas;
      t.addEventListener("webglcontextlost", this.handleContextLost, !1), t.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
    }
    createContext(e, t) {
      let r,
        i = this.canvas;
      if (2 === e && (r = i.getContext("webgl2", t)), !r && !(r = i.getContext("webgl", t))) throw Error("This browser does not support WebGL. Try using the canvas renderer");
      this.gl = r, this.initFromContext(this.gl);
    }
    getExtensions() {
      let {
          gl: e
        } = this,
        t = {
          anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
          floatTextureLinear: e.getExtension("OES_texture_float_linear"),
          s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
          s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
          etc: e.getExtension("WEBGL_compressed_texture_etc"),
          etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
          pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          atc: e.getExtension("WEBGL_compressed_texture_atc"),
          astc: e.getExtension("WEBGL_compressed_texture_astc"),
          bptc: e.getExtension("EXT_texture_compression_bptc"),
          rgtc: e.getExtension("EXT_texture_compression_rgtc"),
          loseContext: e.getExtension("WEBGL_lose_context")
        };
      if (1 === this.webGLVersion) this.extensions = {
        ...t,
        drawBuffers: e.getExtension("WEBGL_draw_buffers"),
        depthTexture: e.getExtension("WEBGL_depth_texture"),
        vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"),
        uint32ElementIndex: e.getExtension("OES_element_index_uint"),
        floatTexture: e.getExtension("OES_texture_float"),
        floatTextureLinear: e.getExtension("OES_texture_float_linear"),
        textureHalfFloat: e.getExtension("OES_texture_half_float"),
        textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"),
        vertexAttribDivisorANGLE: e.getExtension("ANGLE_instanced_arrays"),
        srgb: e.getExtension("EXT_sRGB")
      };else {
        this.extensions = {
          ...t,
          colorBufferFloat: e.getExtension("EXT_color_buffer_float")
        };
        let r = e.getExtension("WEBGL_provoking_vertex");
        r && r.provokingVertexWEBGL(r.FIRST_VERTEX_CONVENTION_WEBGL);
      }
    }
    handleContextLost(e) {
      e.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(() => {
        this.gl.isContextLost() && this.extensions.loseContext?.restoreContext();
      }, 0));
    }
    handleContextRestored() {
      this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl);
    }
    destroy() {
      let e = this._renderer.view.canvas;
      this._renderer = null, e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext?.loseContext();
    }
    forceContextLoss() {
      this.extensions.loseContext?.loseContext(), this._contextLossForced = !0;
    }
    validateContext(e) {
      let t = e.getContextAttributes();
      t && !t.stencil && (0, m.warn)("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
      let r = this.supports,
        i = 2 === this.webGLVersion,
        a = this.extensions;
      r.uint32Indices = i || !!a.uint32ElementIndex, r.uniformBufferObject = i, r.vertexArrayObject = i || !!a.vertexArrayObject, r.srgbTextures = i || !!a.srgb, r.nonPowOf2wrapping = i, r.nonPowOf2mipmaps = i, r.msaa = i, r.uint32Indices || (0, m.warn)("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly");
    }
  };
  g.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "context"
  }, g.defaultOptions = {
    context: null,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    powerPreference: void 0,
    preferWebGLVersion: 2,
    multiView: !1
  }, e.s(["GlContextSystem", 0, g], 204126);
  var E = e.i(434367),
    T = e.i(261095),
    p = ((r = p || {})[r.RGBA = 6408] = "RGBA", r[r.RGB = 6407] = "RGB", r[r.RG = 33319] = "RG", r[r.RED = 6403] = "RED", r[r.RGBA_INTEGER = 36249] = "RGBA_INTEGER", r[r.RGB_INTEGER = 36248] = "RGB_INTEGER", r[r.RG_INTEGER = 33320] = "RG_INTEGER", r[r.RED_INTEGER = 36244] = "RED_INTEGER", r[r.ALPHA = 6406] = "ALPHA", r[r.LUMINANCE = 6409] = "LUMINANCE", r[r.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", r[r.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", r[r.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", r),
    R = ((i = R || {})[i.TEXTURE_2D = 3553] = "TEXTURE_2D", i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", i),
    x = ((a = x || {})[a.CLAMP = 33071] = "CLAMP", a[a.REPEAT = 10497] = "REPEAT", a[a.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", a),
    S = ((n = S || {})[n.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", n[n.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", n[n.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", n[n.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", n[n.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", n[n.UNSIGNED_INT = 5125] = "UNSIGNED_INT", n[n.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", n[n.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", n[n.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", n[n.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", n[n.BYTE = 5120] = "BYTE", n[n.SHORT = 5122] = "SHORT", n[n.INT = 5124] = "INT", n[n.FLOAT = 5126] = "FLOAT", n[n.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", n[n.HALF_FLOAT = 36193] = "HALF_FLOAT", n);
  e.s(["GL_FORMATS", 0, p, "GL_TARGETS", 0, R, "GL_TYPES", 0, S, "GL_WRAP_MODES", 0, x], 500378);
  let b = {
    uint8x2: S.UNSIGNED_BYTE,
    uint8x4: S.UNSIGNED_BYTE,
    sint8x2: S.BYTE,
    sint8x4: S.BYTE,
    unorm8x2: S.UNSIGNED_BYTE,
    unorm8x4: S.UNSIGNED_BYTE,
    snorm8x2: S.BYTE,
    snorm8x4: S.BYTE,
    uint16x2: S.UNSIGNED_SHORT,
    uint16x4: S.UNSIGNED_SHORT,
    sint16x2: S.SHORT,
    sint16x4: S.SHORT,
    unorm16x2: S.UNSIGNED_SHORT,
    unorm16x4: S.UNSIGNED_SHORT,
    snorm16x2: S.SHORT,
    snorm16x4: S.SHORT,
    float16x2: S.HALF_FLOAT,
    float16x4: S.HALF_FLOAT,
    float32: S.FLOAT,
    float32x2: S.FLOAT,
    float32x3: S.FLOAT,
    float32x4: S.FLOAT,
    uint32: S.UNSIGNED_INT,
    uint32x2: S.UNSIGNED_INT,
    uint32x3: S.UNSIGNED_INT,
    uint32x4: S.UNSIGNED_INT,
    sint32: S.INT,
    sint32x2: S.INT,
    sint32x3: S.INT,
    sint32x4: S.INT
  };
  function v(e) {
    return b[e] ?? b.float32;
  }
  e.s(["getGlTypeFromFormat", 0, v], 6948);
  let A = {
    "point-list": 0,
    "line-list": 1,
    "line-strip": 3,
    "triangle-list": 4,
    "triangle-strip": 5
  };
  class G {
    constructor() {
      this.vaoCache = Object.create(null);
    }
    destroy() {
      this.vaoCache = Object.create(null);
    }
  }
  class B {
    constructor(e) {
      this._renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this._managedGeometries = new u.GCManagedHash({
        renderer: e,
        type: "resource",
        onUnload: this.onGeometryUnload.bind(this),
        name: "glGeometry"
      });
    }
    contextChange() {
      let e = this.gl = this._renderer.gl;
      if (!this._renderer.context.supports.vertexArrayObject) throw Error("[PixiJS] Vertex Array Objects are not supported on this device");
      this.destroyAll(!0);
      let t = this._renderer.context.extensions.vertexArrayObject;
      t && (e.createVertexArray = () => t.createVertexArrayOES(), e.bindVertexArray = e => t.bindVertexArrayOES(e), e.deleteVertexArray = e => t.deleteVertexArrayOES(e));
      let r = this._renderer.context.extensions.vertexAttribDivisorANGLE;
      r && (e.drawArraysInstanced = (e, t, i, a) => {
        r.drawArraysInstancedANGLE(e, t, i, a);
      }, e.drawElementsInstanced = (e, t, i, a, n) => {
        r.drawElementsInstancedANGLE(e, t, i, a, n);
      }, e.vertexAttribDivisor = (e, t) => r.vertexAttribDivisorANGLE(e, t)), this._activeGeometry = null, this._activeVao = null;
    }
    bind(e, t) {
      let r = this.gl;
      this._activeGeometry = e;
      let i = this.getVao(e, t);
      this._activeVao !== i && (this._activeVao = i, r.bindVertexArray(i)), this.updateBuffers();
    }
    resetState() {
      this.unbind();
    }
    updateBuffers() {
      let e = this._activeGeometry,
        t = this._renderer.buffer;
      for (let r = 0; r < e.buffers.length; r++) {
        let i = e.buffers[r];
        t.updateBuffer(i);
      }
      e._gcLastUsed = this._renderer.gc.now;
    }
    checkCompatibility(e, t) {
      let r = e.attributes,
        i = t._attributeData;
      for (let e in i) if (!r[e]) throw Error(`shader and geometry incompatible, geometry missing the "${e}" attribute`);
    }
    getSignature(e, t) {
      let r = e.attributes,
        i = t._attributeData,
        a = ["g", e.uid];
      for (let e in r) i[e] && a.push(e, i[e].location);
      return a.join("-");
    }
    getVao(e, t) {
      return e._gpuData[this._renderer.uid]?.vaoCache[t._key] || this.initGeometryVao(e, t);
    }
    initGeometryVao(e, t, r = !0) {
      let i = this._renderer.gl,
        a = this._renderer.buffer;
      this._renderer.shader._getProgramData(t), this.checkCompatibility(e, t);
      let n = this.getSignature(e, t),
        s = e._gpuData[this._renderer.uid];
      s || (s = new G(), e._gpuData[this._renderer.uid] = s, this._managedGeometries.add(e));
      let o = s.vaoCache,
        l = o[n];
      if (l) return o[t._key] = l, l;
      (0, T.ensureAttributes)(e, t._attributeData);
      let u = e.buffers;
      l = i.createVertexArray(), i.bindVertexArray(l);
      for (let e = 0; e < u.length; e++) {
        let t = u[e];
        a.bind(t);
      }
      return this.activateVao(e, t), o[t._key] = l, o[n] = l, i.bindVertexArray(null), l;
    }
    onGeometryUnload(e, t = !1) {
      let r = e._gpuData[this._renderer.uid];
      if (!r) return;
      let i = r.vaoCache;
      if (!t) for (let e in i) this._activeVao !== i[e] && this.resetState(), this.gl.deleteVertexArray(i[e]);
    }
    destroyAll(e = !1) {
      this._managedGeometries.removeAll(e);
    }
    activateVao(e, t) {
      let r = this._renderer.gl,
        i = this._renderer.buffer,
        a = e.attributes;
      e.indexBuffer && i.bind(e.indexBuffer);
      let n = null;
      for (let e in a) {
        let s = a[e],
          o = s.buffer,
          l = i.getGlBuffer(o),
          u = t._attributeData[e];
        if (u) {
          n !== l && (i.bind(o), n = l);
          let e = u.location;
          r.enableVertexAttribArray(e);
          let t = (0, E.getAttributeInfoFromFormat)(s.format),
            a = v(s.format);
          if (u.format?.substring(1, 4) === "int" ? r.vertexAttribIPointer(e, t.size, a, s.stride, s.offset) : r.vertexAttribPointer(e, t.size, a, t.normalised, s.stride, s.offset), s.instance) if (this.hasInstance) {
            let t = s.divisor ?? 1;
            r.vertexAttribDivisor(e, t);
          } else throw Error("geometry error, GPU Instancing is not supported on this device");
        }
      }
    }
    draw(e, t, r, i) {
      let {
          gl: a
        } = this._renderer,
        n = this._activeGeometry,
        s = A[e || n.topology];
      if (i ?? (i = n.instanceCount), n.indexBuffer) {
        let e = n.indexBuffer.data.BYTES_PER_ELEMENT,
          o = 2 === e ? a.UNSIGNED_SHORT : a.UNSIGNED_INT;
        1 !== i ? a.drawElementsInstanced(s, t || n.indexBuffer.data.length, o, (r || 0) * e, i) : a.drawElements(s, t || n.indexBuffer.data.length, o, (r || 0) * e);
      } else 1 !== i ? a.drawArraysInstanced(s, r || 0, t || n.getSize(), i) : a.drawArrays(s, r || 0, t || n.getSize());
      return this;
    }
    unbind() {
      this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
    }
    destroy() {
      this._managedGeometries.destroy(), this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null;
    }
  }
  B.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "geometry"
  }, e.s(["GlGeometryGpuData", 0, G, "GlGeometrySystem", 0, B], 768339);
  var y = e.i(719885),
    C = e.i(761149),
    N = e.i(317765),
    D = e.i(337654),
    I = e.i(550645);
  let U = new y.Geometry({
      attributes: {
        aPosition: [-1, -1, 3, -1, -1, 3]
      }
    }),
    L = class e {
      constructor(e) {
        this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = e;
      }
      init(t = {}) {
        let {
          useBackBuffer: r,
          antialias: i
        } = {
          ...e.defaultOptions,
          ...t
        };
        this.useBackBuffer = r, this._antialias = i, this._renderer.context.supports.msaa || ((0, m.warn)("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = o.State.for2d();
        let a = new I.GlProgram({
          vertex: `
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,
          fragment: `
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,
          name: "big-triangle"
        });
        this._bigTriangleShader = new C.Shader({
          glProgram: a,
          resources: {
            uTexture: D.Texture.WHITE.source
          }
        });
      }
      renderStart(e) {
        let t = this._renderer.renderTarget.getRenderTarget(e.target);
        if (this._useBackBufferThisRender = this.useBackBuffer && !!t.isRoot, this._useBackBufferThisRender) {
          let t = this._renderer.renderTarget.getRenderTarget(e.target);
          this._targetTexture = t.colorTexture, e.target = this._getBackBufferTexture(t.colorTexture);
        }
      }
      renderEnd() {
        this._presentBackBuffer();
      }
      _presentBackBuffer() {
        let e = this._renderer;
        e.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (e.renderTarget.bind(this._targetTexture, !1), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, e.encoder.draw({
          geometry: U,
          shader: this._bigTriangleShader,
          state: this._state
        }));
      }
      _getBackBufferTexture(e) {
        return this._backBufferTexture = this._backBufferTexture || new D.Texture({
          source: new N.TextureSource({
            width: e.width,
            height: e.height,
            resolution: e._resolution,
            antialias: this._antialias
          })
        }), this._backBufferTexture.source.resize(e.width, e.height, e._resolution), this._backBufferTexture;
      }
      destroy() {
        this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null);
      }
    };
  L.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "backBuffer",
    priority: 1
  }, L.defaultOptions = {
    useBackBuffer: !1
  }, e.s(["GlBackBufferSystem", 0, L], 871602);
  class F {
    constructor(e) {
      this._colorMaskCache = 15, this._renderer = e;
    }
    setMask(e) {
      this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.gl.colorMask(!!(8 & e), !!(4 & e), !!(2 & e), !!(1 & e)));
    }
  }
  F.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "colorMask"
  }, e.s(["GlColorMaskSystem", 0, F], 262609);
  class M {
    constructor(e) {
      this.commandFinished = Promise.resolve(), this._renderer = e;
    }
    setGeometry(e, t) {
      this._renderer.geometry.bind(e, t.glProgram);
    }
    finishRenderPass() {}
    draw(e) {
      let t = this._renderer,
        {
          geometry: r,
          shader: i,
          state: a,
          skipSync: n,
          topology: s,
          size: o,
          start: l,
          instanceCount: u
        } = e;
      t.shader.bind(i, n), t.geometry.bind(r, t.shader._activeProgram), a && t.state.set(a), t.geometry.draw(s, o, l, u ?? r.instanceCount);
    }
    destroy() {
      this._renderer = null;
    }
  }
  M.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "encoder"
  }, e.s(["GlEncoderSystem", 0, M], 270143);
  var O = e.i(272589);
  class P {
    constructor(e) {
      this._renderer = e;
    }
    contextChange() {
      let e = this._renderer.gl;
      this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxBatchableTextures = (0, O.checkMaxIfStatementsInShader)(this.maxTextures, e);
      let t = 2 === this._renderer.context.webGLVersion;
      this.maxUniformBindings = t ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    }
    destroy() {}
  }
  P.extension = {
    type: [s.ExtensionType.WebGLSystem],
    name: "limits"
  }, e.s(["GlLimitsSystem", 0, P], 945168);
};
