// Recovered from 0bp3cvixsnudo.js. Runtime module IDs: 123821, 304767, 872502, 674636, 475105, 489496, 298948, 613514, 379412.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var s = e.i(78278),
    r = e.i(465816),
    i = e.i(453549),
    a = e.i(512583);
  let o = new i.Bounds();
  function n(e, t, s) {
    e.measurable = !0, (0, a.getGlobalBounds)(e, s, o), t.addBoundsMask(o), e.measurable = !1;
  }
  e.s(["addMaskBounds", 0, n], 304767);
  var l = e.i(654713),
    h = e.i(256924),
    d = e.i(562140);
  function u(e, t, s) {
    let r = h.boundsPool.get();
    e.measurable = !0;
    let i = h.matrixPool.get().identity(),
      a = function e(t, s, r) {
        return t ? t !== s && (e(t.parent, s, r), t.updateLocalTransform(), r.append(t.localTransform)) : (0, d.warn)("Mask bounds, renderable is not inside the root container"), r;
      }(e, s, i);
    (0, l.getLocalBounds)(e, r, a), e.measurable = !1, t.addBoundsMask(r), h.matrixPool.return(i), h.boundsPool.return(r);
  }
  e.s(["addMaskLocalBounds", 0, u], 872502);
  class c {
    constructor(e) {
      this.priority = 0, this.inverse = !1, this.channel = "red", this.pipe = "alphaMask", e?.mask && this.init(e.mask);
    }
    init(e) {
      this.mask = e, this.renderMaskToTexture = !(e instanceof r.Sprite), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1;
    }
    reset() {
      null !== this.mask && (this.mask.measurable = !0, this.mask = null);
    }
    addBounds(e, t) {
      this.inverse || n(this.mask, e, t);
    }
    addLocalBounds(e, t) {
      u(this.mask, e, t);
    }
    containsPoint(e, t) {
      return t(this.mask, e);
    }
    destroy() {
      this.reset();
    }
    static test(e) {
      return e instanceof r.Sprite;
    }
  }
  c.extension = s.ExtensionType.MaskEffect, e.s(["AlphaMask", 0, c], 674636);
  class A {
    constructor(e) {
      this.priority = 0, this.pipe = "colorMask", e?.mask && this.init(e.mask);
    }
    init(e) {
      this.mask = e;
    }
    destroy() {}
    static test(e) {
      return "number" == typeof e;
    }
  }
  A.extension = s.ExtensionType.MaskEffect, e.s(["ColorMask", 0, A], 475105);
  var p = e.i(275576);
  class _ {
    constructor(e) {
      this.priority = 0, this.pipe = "stencilMask", e?.mask && this.init(e.mask);
    }
    init(e) {
      this.mask = e, this.mask.includeInBuild = !1, this.mask.measurable = !1;
    }
    reset() {
      null !== this.mask && (this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null);
    }
    addBounds(e, t) {
      n(this.mask, e, t);
    }
    addLocalBounds(e, t) {
      u(this.mask, e, t);
    }
    containsPoint(e, t) {
      return t(this.mask, e);
    }
    destroy() {
      this.reset();
    }
    static test(e) {
      return e instanceof p.Container;
    }
  }
  _.extension = s.ExtensionType.MaskEffect, e.s(["StencilMask", 0, _], 489496);
  var m = e.i(338228),
    f = e.i(173156),
    g = e.i(24880),
    y = e.i(989031),
    b = e.i(787653);
  async function x() {
    return t ?? (t = (async () => {
      let e = b.DOMAdapter.get().createCanvas(1, 1).getContext("webgl");
      if (!e) return "premultiply-alpha-on-upload";
      let t = await new Promise(e => {
        let t = document.createElement("video");
        t.onloadeddata = () => e(t), t.onerror = () => e(null), t.autoplay = !1, t.crossOrigin = "anonymous", t.preload = "auto", t.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", t.load();
      });
      if (!t) return "premultiply-alpha-on-upload";
      let s = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, s);
      let r = e.createFramebuffer();
      e.bindFramebuffer(e.FRAMEBUFFER, r), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, s, 0), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
      let i = new Uint8Array(4);
      return e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, i), e.deleteFramebuffer(r), e.deleteTexture(s), e.getExtension("WEBGL_lose_context")?.loseContext(), i[0] <= i[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
    })()), t;
  }
  e.s(["detectVideoAlphaMode", 0, x], 298948);
  var E = e.i(317765);
  let T = class e extends E.TextureSource {
    constructor(t) {
      super(t), this.isReady = !1, this.uploadMethodId = "video", t = {
        ...e.defaultOptions,
        ...t
      }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== t.autoPlay, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), !1 !== t.autoLoad && this.load();
    }
    updateFrame() {
      if (!this.destroyed) {
        if (this._updateFPS) {
          let e = y.Ticker.shared.elapsedMS * this.resource.playbackRate;
          this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
        }
        (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
      }
    }
    _videoFrameRequestCallback() {
      this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback);
    }
    get isValid() {
      return !!this.resource.videoWidth && !!this.resource.videoHeight;
    }
    async load() {
      if (this._load) return this._load;
      let e = this.resource,
        t = this.options;
      return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart), e.addEventListener("pause", this._onPlayStop), e.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (t.preload || e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlayThrough), e.addEventListener("error", this._onError, !0)), this.isValid || e.addEventListener("loadedmetadata", this._onLoadedMetadata), this.alphaMode = await x(), this._load = new Promise((s, r) => {
        this.isValid ? s(this) : (this._resolve = s, this._reject = r, void 0 !== t.preloadTimeoutMs && (this._preloadTimeout = setTimeout(() => {
          this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`));
        })), e.load());
      }), this._load;
    }
    _onError(e) {
      this.resource.removeEventListener("error", this._onError, !0), this.emit("error", e), this._reject && (this._reject(e), this._reject = null, this._resolve = null);
    }
    _isSourcePlaying() {
      let e = this.resource;
      return !e.paused && !e.ended;
    }
    _isSourceReady() {
      return this.resource.readyState > 2;
    }
    _onPlayStart() {
      this._configureAutoUpdate();
    }
    _onPlayStop() {
      this._configureAutoUpdate();
    }
    _onSeeked() {
      this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0);
    }
    _onLoadedMetadata() {
      this.isValid && this._mediaReady();
    }
    _onCanPlay() {
      this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady();
    }
    _onCanPlayThrough() {
      this.resource.removeEventListener("canplaythrough", this._onCanPlayThrough), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady();
    }
    _mediaReady() {
      let e = this.resource;
      this.isValid && (this.isReady = !0, this.resize(e.videoWidth, e.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && this.isValid && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play();
    }
    destroy() {
      this._configureAutoUpdate();
      let e = this.resource;
      e && (e.removeEventListener("play", this._onPlayStart), e.removeEventListener("pause", this._onPlayStop), e.removeEventListener("seeked", this._onSeeked), e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlayThrough), e.removeEventListener("loadedmetadata", this._onLoadedMetadata), e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), super.destroy();
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(e) {
      e !== this._autoUpdate && (this._autoUpdate = e, this._configureAutoUpdate());
    }
    get updateFPS() {
      return this._updateFPS;
    }
    set updateFPS(e) {
      e !== this._updateFPS && (this._updateFPS = e, this._configureAutoUpdate());
    }
    _configureAutoUpdate() {
      this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (y.Ticker.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), null === this._videoFrameRequestCallbackHandle && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (null !== this._videoFrameRequestCallbackHandle && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (y.Ticker.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (null !== this._videoFrameRequestCallbackHandle && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (y.Ticker.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
    }
    static test(e) {
      return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement;
    }
  };
  T.extension = s.ExtensionType.TextureSource, T.defaultOptions = {
    ...E.TextureSource.defaultOptions,
    autoLoad: !0,
    autoPlay: !0,
    updateFPS: 0,
    crossorigin: !0,
    loop: !1,
    muted: !0,
    playsinline: !0,
    preload: !1
  }, T.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
  }, e.s(["VideoSource", 0, T], 613514);
  var P = e.i(3165),
    v = e.i(337654);
  let k = [];
  function S(e = {}) {
    let t = e && e.resource,
      s = t ? e.resource : e,
      r = t ? e : {
        resource: e
      };
    for (let e = 0; e < k.length; e++) {
      let t = k[e];
      if (t.test(s)) return new t(r);
    }
    throw Error(`Could not find a source type for resource: ${r.resource}`);
  }
  function C(e = {}, t = !1) {
    let s = e && e.resource,
      r = s ? e.resource : e,
      i = s ? e : {
        resource: e
      };
    if (!t && P.Cache.has(r)) return P.Cache.get(r);
    let a = new v.Texture({
      source: S(i)
    });
    return a.on("destroy", () => {
      P.Cache.has(r) && P.Cache.remove(r);
    }), t || P.Cache.set(r, a), a;
  }
  function B(e, t = !1) {
    return "string" == typeof e ? P.Cache.get(e) : e instanceof E.TextureSource ? new v.Texture({
      source: e
    }) : C(e, t);
  }
  s.extensions.handleByList(s.ExtensionType.TextureSource, k), v.Texture.from = B, E.TextureSource.from = S, e.s(["autoDetectSource", 0, function (e = {}) {
    return S(e);
  }, "resourceToTexture", 0, C, "textureFrom", 0, B], 379412), s.extensions.add(c, A, _, T, g.ImageSource, f.CanvasSource, m.BufferImageSource), e.s([], 123821);
};
