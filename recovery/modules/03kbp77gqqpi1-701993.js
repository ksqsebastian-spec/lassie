// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 701993, 534501, 923217, 570966, 883926, 999885, 408321, 111456.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653),
    r = e.i(78278),
    i = e.i(217055),
    a = e.i(337654),
    n = e.i(61003),
    s = e.i(378977),
    o = e.i(800477),
    l = e.i(629057),
    u = e.i(657280);
  let _ = (0, e.i(849609).isSafari)(),
    c = {
      id: "video",
      upload(e, t, r, i, a, n = _) {
        if (!e.isValid) {
          let e = a ?? t.target;
          r.texImage2D(e, 0, t.internalFormat, 1, 1, 0, t.format, t.type, null);
          return;
        }
        u.glUploadImageResource.upload(e, t, r, i, a, n);
      }
    };
  e.s(["glUploadVideoResource", 0, c], 534501);
  let h = {
      linear: 9729,
      nearest: 9728
    },
    d = {
      linear: {
        linear: 9987,
        nearest: 9985
      },
      nearest: {
        linear: 9986,
        nearest: 9984
      }
    },
    f = {
      "clamp-to-edge": 33071,
      repeat: 10497,
      "mirror-repeat": 33648
    },
    m = {
      never: 512,
      less: 513,
      equal: 514,
      "less-equal": 515,
      greater: 516,
      "not-equal": 517,
      "greater-equal": 518,
      always: 519
    };
  function g(e, t, r, i, a, n, s, o) {
    if (!o || "repeat" !== e.addressModeU || "repeat" !== e.addressModeV || "repeat" !== e.addressModeW) {
      let r = f[s ? "clamp-to-edge" : e.addressModeU],
        i = f[s ? "clamp-to-edge" : e.addressModeV],
        o = f[s ? "clamp-to-edge" : e.addressModeW];
      t[a](n, t.TEXTURE_WRAP_S, r), t[a](n, t.TEXTURE_WRAP_T, i), t.TEXTURE_WRAP_R && t[a](n, t.TEXTURE_WRAP_R, o);
    }
    if (o && "linear" === e.magFilter || t[a](n, t.TEXTURE_MAG_FILTER, h[e.magFilter]), r) {
      if (!o || "linear" !== e.mipmapFilter) {
        let r = d[e.minFilter][e.mipmapFilter];
        t[a](n, t.TEXTURE_MIN_FILTER, r);
      }
    } else t[a](n, t.TEXTURE_MIN_FILTER, h[e.minFilter]);
    if (i && e.maxAnisotropy > 1) {
      let r = Math.min(e.maxAnisotropy, t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
      t[a](n, i.TEXTURE_MAX_ANISOTROPY_EXT, r);
    }
    e.compare && t[a](n, t.TEXTURE_COMPARE_FUNC, m[e.compare]);
  }
  function E(e) {
    return {
      r8unorm: e.RED,
      r8snorm: e.RED,
      r8uint: e.RED,
      r8sint: e.RED,
      r16uint: e.RED,
      r16sint: e.RED,
      r16float: e.RED,
      rg8unorm: e.RG,
      rg8snorm: e.RG,
      rg8uint: e.RG,
      rg8sint: e.RG,
      r32uint: e.RED,
      r32sint: e.RED,
      r32float: e.RED,
      rg16uint: e.RG,
      rg16sint: e.RG,
      rg16float: e.RG,
      rgba8unorm: e.RGBA,
      "rgba8unorm-srgb": e.RGBA,
      rgba8snorm: e.RGBA,
      rgba8uint: e.RGBA,
      rgba8sint: e.RGBA,
      bgra8unorm: e.RGBA,
      "bgra8unorm-srgb": e.RGBA,
      rgb9e5ufloat: e.RGB,
      rgb10a2unorm: e.RGBA,
      rg11b10ufloat: e.RGB,
      rg32uint: e.RG,
      rg32sint: e.RG,
      rg32float: e.RG,
      rgba16uint: e.RGBA,
      rgba16sint: e.RGBA,
      rgba16float: e.RGBA,
      rgba32uint: e.RGBA,
      rgba32sint: e.RGBA,
      rgba32float: e.RGBA,
      stencil8: e.STENCIL_INDEX8,
      depth16unorm: e.DEPTH_COMPONENT,
      depth24plus: e.DEPTH_COMPONENT,
      "depth24plus-stencil8": e.DEPTH_STENCIL,
      depth32float: e.DEPTH_COMPONENT,
      "depth32float-stencil8": e.DEPTH_STENCIL
    };
  }
  function T(e, r) {
    let i = {},
      a = e.RGBA;
    return e instanceof t.DOMAdapter.get().getWebGLRenderingContext() ? r.srgb && (i = {
      "rgba8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT,
      "bgra8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT
    }) : (i = {
      "rgba8unorm-srgb": e.SRGB8_ALPHA8,
      "bgra8unorm-srgb": e.SRGB8_ALPHA8
    }, a = e.RGBA8), {
      r8unorm: e.R8,
      r8snorm: e.R8_SNORM,
      r8uint: e.R8UI,
      r8sint: e.R8I,
      r16uint: e.R16UI,
      r16sint: e.R16I,
      r16float: e.R16F,
      rg8unorm: e.RG8,
      rg8snorm: e.RG8_SNORM,
      rg8uint: e.RG8UI,
      rg8sint: e.RG8I,
      r32uint: e.R32UI,
      r32sint: e.R32I,
      r32float: e.R32F,
      rg16uint: e.RG16UI,
      rg16sint: e.RG16I,
      rg16float: e.RG16F,
      rgba8unorm: e.RGBA,
      ...i,
      rgba8snorm: e.RGBA8_SNORM,
      rgba8uint: e.RGBA8UI,
      rgba8sint: e.RGBA8I,
      bgra8unorm: a,
      rgb9e5ufloat: e.RGB9_E5,
      rgb10a2unorm: e.RGB10_A2,
      rg11b10ufloat: e.R11F_G11F_B10F,
      rg32uint: e.RG32UI,
      rg32sint: e.RG32I,
      rg32float: e.RG32F,
      rgba16uint: e.RGBA16UI,
      rgba16sint: e.RGBA16I,
      rgba16float: e.RGBA16F,
      rgba32uint: e.RGBA32UI,
      rgba32sint: e.RGBA32I,
      rgba32float: e.RGBA32F,
      stencil8: e.STENCIL_INDEX8,
      depth16unorm: e.DEPTH_COMPONENT16,
      depth24plus: e.DEPTH_COMPONENT24,
      "depth24plus-stencil8": e.DEPTH24_STENCIL8,
      depth32float: e.DEPTH_COMPONENT32F,
      "depth32float-stencil8": e.DEPTH32F_STENCIL8,
      ...(r.s3tc ? {
        "bc1-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        "bc2-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        "bc3-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT
      } : {}),
      ...(r.s3tc_sRGB ? {
        "bc1-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        "bc2-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        "bc3-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
      } : {}),
      ...(r.rgtc ? {
        "bc4-r-unorm": r.rgtc.COMPRESSED_RED_RGTC1_EXT,
        "bc4-r-snorm": r.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
        "bc5-rg-unorm": r.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
        "bc5-rg-snorm": r.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
      } : {}),
      ...(r.bptc ? {
        "bc6h-rgb-float": r.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
        "bc6h-rgb-ufloat": r.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
        "bc7-rgba-unorm": r.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
        "bc7-rgba-unorm-srgb": r.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
      } : {}),
      ...(r.etc ? {
        "etc2-rgb8unorm": r.etc.COMPRESSED_RGB8_ETC2,
        "etc2-rgb8unorm-srgb": r.etc.COMPRESSED_SRGB8_ETC2,
        "etc2-rgb8a1unorm": r.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        "etc2-rgb8a1unorm-srgb": r.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        "etc2-rgba8unorm": r.etc.COMPRESSED_RGBA8_ETC2_EAC,
        "etc2-rgba8unorm-srgb": r.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
        "eac-r11unorm": r.etc.COMPRESSED_R11_EAC,
        "eac-rg11unorm": r.etc.COMPRESSED_SIGNED_RG11_EAC
      } : {}),
      ...(r.astc ? {
        "astc-4x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
        "astc-4x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
        "astc-5x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
        "astc-5x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
        "astc-5x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
        "astc-5x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
        "astc-6x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
        "astc-6x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
        "astc-6x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
        "astc-6x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
        "astc-8x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
        "astc-8x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
        "astc-8x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
        "astc-8x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
        "astc-8x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
        "astc-8x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
        "astc-10x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
        "astc-10x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
        "astc-10x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
        "astc-10x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
        "astc-10x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
        "astc-10x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
        "astc-10x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
        "astc-10x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
        "astc-12x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
        "astc-12x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
        "astc-12x12-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
        "astc-12x12-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
      } : {})
    };
  }
  function p(e) {
    return {
      r8unorm: e.UNSIGNED_BYTE,
      r8snorm: e.BYTE,
      r8uint: e.UNSIGNED_BYTE,
      r8sint: e.BYTE,
      r16uint: e.UNSIGNED_SHORT,
      r16sint: e.SHORT,
      r16float: e.HALF_FLOAT,
      rg8unorm: e.UNSIGNED_BYTE,
      rg8snorm: e.BYTE,
      rg8uint: e.UNSIGNED_BYTE,
      rg8sint: e.BYTE,
      r32uint: e.UNSIGNED_INT,
      r32sint: e.INT,
      r32float: e.FLOAT,
      rg16uint: e.UNSIGNED_SHORT,
      rg16sint: e.SHORT,
      rg16float: e.HALF_FLOAT,
      rgba8unorm: e.UNSIGNED_BYTE,
      "rgba8unorm-srgb": e.UNSIGNED_BYTE,
      rgba8snorm: e.BYTE,
      rgba8uint: e.UNSIGNED_BYTE,
      rgba8sint: e.BYTE,
      bgra8unorm: e.UNSIGNED_BYTE,
      "bgra8unorm-srgb": e.UNSIGNED_BYTE,
      rgb9e5ufloat: e.UNSIGNED_INT_5_9_9_9_REV,
      rgb10a2unorm: e.UNSIGNED_INT_2_10_10_10_REV,
      rg11b10ufloat: e.UNSIGNED_INT_10F_11F_11F_REV,
      rg32uint: e.UNSIGNED_INT,
      rg32sint: e.INT,
      rg32float: e.FLOAT,
      rgba16uint: e.UNSIGNED_SHORT,
      rgba16sint: e.SHORT,
      rgba16float: e.HALF_FLOAT,
      rgba32uint: e.UNSIGNED_INT,
      rgba32sint: e.INT,
      rgba32float: e.FLOAT,
      stencil8: e.UNSIGNED_BYTE,
      depth16unorm: e.UNSIGNED_SHORT,
      depth24plus: e.UNSIGNED_INT,
      "depth24plus-stencil8": e.UNSIGNED_INT_24_8,
      depth32float: e.FLOAT,
      "depth32float-stencil8": e.FLOAT_32_UNSIGNED_INT_24_8_REV
    };
  }
  function R(e) {
    return {
      "2d": e.TEXTURE_2D,
      cube: e.TEXTURE_CUBE_MAP,
      "1d": null,
      "3d": e?.TEXTURE_3D || null,
      "2d-array": e?.TEXTURE_2D_ARRAY || null,
      "cube-array": e?.TEXTURE_CUBE_MAP_ARRAY || null
    };
  }
  e.s(["compareModeToGlCompare", 0, m, "mipmapScaleModeToGlFilter", 0, d, "scaleModeToGlFilter", 0, h, "wrapModeToGlAddress", 0, f], 923217), e.s(["applyStyleParams", 0, g], 570966), e.s(["mapFormatToGlFormat", 0, E], 883926), e.s(["mapFormatToGlInternalFormat", 0, T], 999885), e.s(["mapFormatToGlType", 0, p], 408321), e.s(["mapViewDimensionToGlTarget", 0, R], 111456);
  let x = class e {
    constructor(t) {
      this._glSamplers = Object.create(null), this._boundTextures = [], this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1, this._useSeparateSamplers = !1, this._renderer = t, this._managedTextures = new i.GCManagedHash({
        renderer: t,
        type: "resource",
        onUnload: this.onSourceUnload.bind(this),
        name: "glTexture"
      });
      const r = {
        image: u.glUploadImageResource,
        buffer: s.glUploadBufferImageResource,
        video: c,
        compressed: o.glUploadCompressedTextureResource,
        ...e.uploadExtensions
      };
      this._uploads = {
        ...r,
        cube: (0, l.createGlUploadCubeTextureResource)(r)
      };
    }
    get managedTextures() {
      return Object.values(this._managedTextures.items);
    }
    contextChange(e) {
      this._gl = e, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = T(e, this._renderer.context.extensions), this._mapFormatToType = p(e), this._mapFormatToFormat = E(e), this._mapViewDimensionToGlTarget = R(e)), this._managedTextures.removeAll(!0), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1;
      for (let e = 0; e < 16; e++) this.bind(a.Texture.EMPTY, e);
    }
    initSource(e) {
      this.bind(e);
    }
    bind(e, t = 0) {
      let r = e.source;
      e ? (this.bindSource(r, t), this._useSeparateSamplers && this._bindSampler(r.style, t)) : (this.bindSource(null, t), this._useSeparateSamplers && this._bindSampler(null, t));
    }
    bindSource(e, t = 0) {
      let r = this._gl;
      if (e._gcLastUsed = this._renderer.gc.now, this._boundTextures[t] !== e) {
        this._boundTextures[t] = e, this._activateLocation(t), e || (e = a.Texture.EMPTY.source);
        let i = this.getGlSource(e);
        r.bindTexture(i.target, i.texture);
      }
    }
    _bindSampler(e, t = 0) {
      let r = this._gl;
      if (!e) {
        this._boundSamplers[t] = null, r.bindSampler(t, null);
        return;
      }
      let i = this._getGlSampler(e);
      this._boundSamplers[t] !== i && (this._boundSamplers[t] = i, r.bindSampler(t, i));
    }
    unbind(e) {
      let t = e.source,
        r = this._boundTextures,
        i = this._gl;
      for (let e = 0; e < r.length; e++) if (r[e] === t) {
        this._activateLocation(e);
        let a = this.getGlSource(t);
        i.bindTexture(a.target, null), r[e] = null;
      }
    }
    _activateLocation(e) {
      this._activeTextureLocation !== e && (this._activeTextureLocation = e, this._gl.activeTexture(this._gl.TEXTURE0 + e));
    }
    _initSource(e) {
      let t = this._gl,
        r = new n.GlTexture(t.createTexture());
      if (r.type = this._mapFormatToType[e.format], r.internalFormat = this._mapFormatToInternalFormat[e.format], r.format = this._mapFormatToFormat[e.format], r.target = this._mapViewDimensionToGlTarget[e.viewDimension], null === r.target) throw Error(`Unsupported view dimension: ${e.viewDimension} with this webgl version: ${this._renderer.context.webGLVersion}`);
      if ("cube" === e.uploadMethodId && (r.target = t.TEXTURE_CUBE_MAP), e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo)) {
        let t = Math.max(e.width, e.height);
        e.mipLevelCount = Math.floor(Math.log2(t)) + 1;
      }
      return e._gpuData[this._renderer.uid] = r, this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceUpdate, this), e.on("styleChange", this.onStyleChange, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), this.updateStyle(e, !1), r;
    }
    onStyleChange(e) {
      this.updateStyle(e, !1);
    }
    updateStyle(e, t) {
      let r = this._gl,
        i = this.getGlSource(e);
      r.bindTexture(i.target, i.texture), this._boundTextures[this._activeTextureLocation] = e, g(e.style, r, e.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", i.target, !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo, t);
    }
    onSourceUnload(e, t = !1) {
      let r = e._gpuData[this._renderer.uid];
      r && (t || (this.unbind(e), this._gl.deleteTexture(r.texture)), e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceUpdate, this), e.off("styleChange", this.onStyleChange, this), e.off("updateMipmaps", this.onUpdateMipmaps, this));
    }
    onSourceUpdate(e) {
      let t = this._gl,
        r = this.getGlSource(e);
      t.bindTexture(r.target, r.texture), this._boundTextures[this._activeTextureLocation] = e;
      let i = "premultiply-alpha-on-upload" === e.alphaMode;
      if (this._premultiplyAlpha !== i && (this._premultiplyAlpha = i, t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i)), this._uploads[e.uploadMethodId]) this._uploads[e.uploadMethodId].upload(e, r, t, this._renderer.context.webGLVersion);else if (r.target === t.TEXTURE_2D) this._initEmptyTexture2D(r, e);else if (r.target === t.TEXTURE_2D_ARRAY) this._initEmptyTexture2DArray(r, e);else if (r.target === t.TEXTURE_CUBE_MAP) this._initEmptyTextureCube(r, e);else throw Error("[GlTextureSystem] Unsupported texture target for empty allocation.");
      this._applyMipRange(r, e), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e, !1);
    }
    onUpdateMipmaps(e, t = !0) {
      t && this.bindSource(e, 0);
      let r = this.getGlSource(e);
      this._gl.generateMipmap(r.target);
    }
    _initEmptyTexture2D(e, t) {
      let r = this._gl;
      r.texImage2D(r.TEXTURE_2D, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null);
      let i = Math.max(t.pixelWidth >> 1, 1),
        a = Math.max(t.pixelHeight >> 1, 1);
      for (let n = 1; n < t.mipLevelCount; n++) r.texImage2D(r.TEXTURE_2D, n, e.internalFormat, i, a, 0, e.format, e.type, null), i = Math.max(i >> 1, 1), a = Math.max(a >> 1, 1);
    }
    _initEmptyTexture2DArray(e, t) {
      if (2 !== this._renderer.context.webGLVersion) throw Error("[GlTextureSystem] TEXTURE_2D_ARRAY requires WebGL2.");
      let r = this._gl,
        i = Math.max(0 | t.arrayLayerCount, 1);
      r.texImage3D(r.TEXTURE_2D_ARRAY, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, i, 0, e.format, e.type, null);
      let a = Math.max(t.pixelWidth >> 1, 1),
        n = Math.max(t.pixelHeight >> 1, 1);
      for (let s = 1; s < t.mipLevelCount; s++) r.texImage3D(r.TEXTURE_2D_ARRAY, s, e.internalFormat, a, n, i, 0, e.format, e.type, null), a = Math.max(a >> 1, 1), n = Math.max(n >> 1, 1);
    }
    _initEmptyTextureCube(e, t) {
      let r = this._gl;
      for (let i = 0; i < 6; i++) r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null);
      let i = Math.max(t.pixelWidth >> 1, 1),
        a = Math.max(t.pixelHeight >> 1, 1);
      for (let n = 1; n < t.mipLevelCount; n++) {
        for (let t = 0; t < 6; t++) r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + t, n, e.internalFormat, i, a, 0, e.format, e.type, null);
        i = Math.max(i >> 1, 1), a = Math.max(a >> 1, 1);
      }
    }
    _applyMipRange(e, t) {
      if (2 !== this._renderer.context.webGLVersion || t.mipLevelCount <= 1) return;
      let r = this._gl,
        i = Math.max((0 | t.mipLevelCount) - 1, 0);
      r.texParameteri(e.target, r.TEXTURE_BASE_LEVEL, 0), r.texParameteri(e.target, r.TEXTURE_MAX_LEVEL, i);
    }
    _initSampler(e) {
      let t = this._gl,
        r = this._gl.createSampler();
      return this._glSamplers[e._resourceId] = r, g(e, t, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", r, !1, !0), this._glSamplers[e._resourceId];
    }
    _getGlSampler(e) {
      return this._glSamplers[e._resourceId] || this._initSampler(e);
    }
    getGlSource(e) {
      return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this._initSource(e);
    }
    generateCanvas(e) {
      let {
          pixels: r,
          width: i,
          height: a
        } = this.getPixels(e),
        n = t.DOMAdapter.get().createCanvas();
      n.width = i, n.height = a;
      let s = n.getContext("2d");
      if (s) {
        let e = s.createImageData(i, a);
        e.data.set(r), s.putImageData(e, 0, 0);
      }
      return n;
    }
    getPixels(e) {
      let t = e.source.resolution,
        r = e.frame,
        i = Math.max(Math.round(r.width * t), 1),
        a = Math.max(Math.round(r.height * t), 1),
        n = new Uint8Array(4 * i * a),
        s = this._renderer,
        o = s.renderTarget.getRenderTarget(e),
        l = s.renderTarget.getGpuRenderTarget(o),
        u = s.gl;
      return u.bindFramebuffer(u.FRAMEBUFFER, l.resolveTargetFramebuffer), u.readPixels(Math.round(r.x * t), Math.round(r.y * t), i, a, u.RGBA, u.UNSIGNED_BYTE, n), {
        pixels: new Uint8ClampedArray(n.buffer),
        width: i,
        height: a
      };
    }
    destroy() {
      this._managedTextures.destroy(), this._glSamplers = null, this._boundTextures = null, this._boundSamplers = null, this._mapFormatToInternalFormat = null, this._mapFormatToType = null, this._mapFormatToFormat = null, this._uploads = null, this._renderer = null;
    }
    resetState() {
      this._activeTextureLocation = -1, this._boundTextures.fill(a.Texture.EMPTY.source), this._boundSamplers = Object.create(null);
      let e = this._gl;
      this._premultiplyAlpha = !1, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha);
    }
  };
  x.extension = {
    type: [r.ExtensionType.WebGLSystem],
    name: "texture"
  }, x.uploadExtensions = Object.create(null), r.extensions.handleByMap(r.ExtensionType.TextureUploaderWebGL, x.uploadExtensions), e.s(["GlTextureSystem", 0, x], 701993);
};
