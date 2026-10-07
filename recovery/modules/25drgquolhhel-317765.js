// Recovered from 25drgquolhhel.js. Runtime module IDs: 317765, 356566, 317624, 602699.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524);
  function i(t) {
    return !(t & t - 1) && !!t;
  }
  function s(t) {
    let e = {};
    for (let i in t) void 0 !== t[i] && (e[i] = t[i]);
    return e;
  }
  t.s(["isPow2", 0, i, "log2", 0, function (t) {
    let e = (t > 65535) << 4,
      i = ((t >>>= e) > 255) << 3;
    return t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, (e |= i) | t >> 1;
  }, "nextPow2", 0, function (t) {
    return t += +(0 === t), --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1;
  }], 356566), t.s(["definedProps", 0, s], 317624);
  var r = t.i(733705),
    n = e,
    a = t.i(727905);
  let h = Object.create(null),
    o = class t extends n.default {
      constructor(e = {}) {
        super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, e = {
          ...t.defaultOptions,
          ...e
        }, this.addressMode = e.addressMode, this.addressModeU = e.addressModeU ?? this.addressModeU, this.addressModeV = e.addressModeV ?? this.addressModeV, this.addressModeW = e.addressModeW ?? this.addressModeW, this.scaleMode = e.scaleMode, this.magFilter = e.magFilter ?? this.magFilter, this.minFilter = e.minFilter ?? this.minFilter, this.mipmapFilter = e.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = e.lodMinClamp, this.lodMaxClamp = e.lodMaxClamp, this.compare = e.compare, this.maxAnisotropy = e.maxAnisotropy ?? 1;
      }
      set addressMode(t) {
        this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
      }
      get addressMode() {
        return this.addressModeU;
      }
      set wrapMode(t) {
        (0, a.deprecation)(a.v8_0_0, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t;
      }
      get wrapMode() {
        return this.addressMode;
      }
      set scaleMode(t) {
        this.magFilter = t, this.minFilter = t, this.mipmapFilter = t;
      }
      get scaleMode() {
        return this.magFilter;
      }
      set maxAnisotropy(t) {
        this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear");
      }
      get maxAnisotropy() {
        return this._maxAnisotropy;
      }
      get _resourceId() {
        return this._sharedResourceId || this._generateResourceId();
      }
      update() {
        this._sharedResourceId = null, this.emit("change", this);
      }
      _generateResourceId() {
        let t,
          e = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
        return this._sharedResourceId = (void 0 === (t = h[e]) && (h[e] = (0, r.uid)("resource")), t), this._resourceId;
      }
      destroy() {
        this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners();
      }
    };
  o.defaultOptions = {
    addressMode: "clamp-to-edge",
    scaleMode: "linear"
  }, t.s(["TextureStyle", 0, o], 602699);
  let u = class t extends e.default {
    constructor(e = {}) {
      super(), this.options = e, this._gpuData = Object.create(null), this._gcLastUsed = -1, this.uid = (0, r.uid)("textureSource"), this._resourceType = "textureSource", this._resourceId = (0, r.uid)("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.viewDimension = "2d", this.arrayLayerCount = 1, this.antialias = !1, this.transient = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, e = {
        ...t.defaultOptions,
        ...e
      }, this.label = e.label ?? "", this.resource = e.resource, this.autoGarbageCollect = e.autoGarbageCollect, this._resolution = e.resolution, e.width ? this.pixelWidth = e.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, e.height ? this.pixelHeight = e.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = e.format, this.dimension = e.dimensions, this.viewDimension = e.viewDimension ?? e.dimensions, this.arrayLayerCount = e.arrayLayerCount, this.mipLevelCount = e.mipLevelCount, this.autoGenerateMipmaps = e.autoGenerateMipmaps, this.sampleCount = e.sampleCount, this.antialias = e.antialias, this.transient = e.transient ?? !1, this.alphaMode = e.alphaMode, this.style = new o(s(e)), this.destroyed = !1, this._refreshPOT();
    }
    get source() {
      return this;
    }
    get style() {
      return this._style;
    }
    set style(t) {
      this.style !== t && (this._style?.off("change", this._onStyleChange, this), this._style = t, this._style?.on("change", this._onStyleChange, this), this._onStyleChange());
    }
    set maxAnisotropy(t) {
      this._style.maxAnisotropy = t;
    }
    get maxAnisotropy() {
      return this._style.maxAnisotropy;
    }
    get addressMode() {
      return this._style.addressMode;
    }
    set addressMode(t) {
      this._style.addressMode = t;
    }
    get repeatMode() {
      return this._style.addressMode;
    }
    set repeatMode(t) {
      this._style.addressMode = t;
    }
    get magFilter() {
      return this._style.magFilter;
    }
    set magFilter(t) {
      this._style.magFilter = t;
    }
    get minFilter() {
      return this._style.minFilter;
    }
    set minFilter(t) {
      this._style.minFilter = t;
    }
    get mipmapFilter() {
      return this._style.mipmapFilter;
    }
    set mipmapFilter(t) {
      this._style.mipmapFilter = t;
    }
    get lodMinClamp() {
      return this._style.lodMinClamp;
    }
    set lodMinClamp(t) {
      this._style.lodMinClamp = t;
    }
    get lodMaxClamp() {
      return this._style.lodMaxClamp;
    }
    set lodMaxClamp(t) {
      this._style.lodMaxClamp = t;
    }
    _onStyleChange() {
      this.emit("styleChange", this);
    }
    update() {
      if (this.resource) {
        let t = this._resolution;
        if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return;
      }
      this.emit("update", this);
    }
    destroy() {
      this.destroyed = !0, this.unload(), this.emit("destroy", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners();
    }
    unload() {
      for (let t in this._resourceId = (0, r.uid)("resource"), this.emit("change", this), this.emit("unload", this), this._gpuData) this._gpuData[t]?.destroy?.();
      this._gpuData = Object.create(null);
    }
    get resourceWidth() {
      let {
        resource: t
      } = this;
      return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
    }
    get resourceHeight() {
      let {
        resource: t
      } = this;
      return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t);
    }
    resize(t, e, i) {
      i || (i = this._resolution), t || (t = this.width), e || (e = this.height);
      let s = Math.round(t * i),
        n = Math.round(e * i);
      return this.width = s / i, this.height = n / i, this._resolution = i, (this.pixelWidth !== s || this.pixelHeight !== n) && (this._refreshPOT(), this.pixelWidth = s, this.pixelHeight = n, this.emit("resize", this), this._resourceId = (0, r.uid)("resource"), this.emit("change", this), !0);
    }
    updateMipmaps() {
      this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
    }
    set wrapMode(t) {
      this._style.wrapMode = t;
    }
    get wrapMode() {
      return this._style.wrapMode;
    }
    set scaleMode(t) {
      this._style.scaleMode = t;
    }
    get scaleMode() {
      return this._style.scaleMode;
    }
    _refreshPOT() {
      this.isPowerOfTwo = i(this.pixelWidth) && i(this.pixelHeight);
    }
    static test(t) {
      throw Error("Unimplemented");
    }
  };
  u.defaultOptions = {
    resolution: 1,
    format: "bgra8unorm",
    alphaMode: "premultiply-alpha-on-upload",
    dimensions: "2d",
    viewDimension: "2d",
    arrayLayerCount: 1,
    mipLevelCount: 1,
    autoGenerateMipmaps: !1,
    sampleCount: 1,
    antialias: !1,
    autoGarbageCollect: !1
  }, t.s(["TextureSource", 0, u], 317765);
};
