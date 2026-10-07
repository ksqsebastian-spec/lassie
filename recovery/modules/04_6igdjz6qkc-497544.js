// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 497544, 661226, 292203, 282313, 287358, 548306, 60064, 257445, 800476, 165255, 662188, 947084, 638095, 251783, 777207, 301177, 593642, 798299.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(86245),
    r = e.i(492884),
    n = e.i(292844),
    i = e.i(751559),
    s = e.i(463337),
    a = e.i(497256),
    o = e.i(375564),
    l = e.i(638209),
    d = e.i(232376),
    u = e.i(192897),
    h = e.i(507938),
    c = e.i(787653),
    p = e.i(78278),
    f = e.i(275576),
    x = e.i(337654);
  let m = {
      png: "image/png",
      jpg: "image/jpeg",
      webp: "image/webp"
    },
    g = class e {
      constructor(e) {
        this._renderer = e;
      }
      _normalizeOptions(e, t = {}) {
        return e instanceof f.Container || e instanceof x.Texture ? {
          target: e,
          ...t
        } : {
          ...t,
          ...e
        };
      }
      async image(e) {
        let t = c.DOMAdapter.get().createImage();
        return t.src = await this.base64(e), t;
      }
      async base64(t) {
        let {
            format: r,
            quality: n
          } = t = this._normalizeOptions(t, e.defaultImageOptions),
          i = this.canvas(t);
        if (void 0 !== i.toBlob) return new Promise((e, t) => {
          i.toBlob(r => {
            if (!r) return void t(Error("ICanvas.toBlob failed!"));
            let n = new FileReader();
            n.onload = () => e(n.result), n.onerror = t, n.readAsDataURL(r);
          }, m[r], n);
        });
        if (void 0 !== i.toDataURL) return i.toDataURL(m[r], n);
        if (void 0 !== i.convertToBlob) {
          let e = await i.convertToBlob({
            type: m[r],
            quality: n
          });
          return new Promise((t, r) => {
            let n = new FileReader();
            n.onload = () => t(n.result), n.onerror = r, n.readAsDataURL(e);
          });
        }
        throw Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
      }
      canvas(e) {
        let t = (e = this._normalizeOptions(e)).target,
          r = this._renderer;
        if (t instanceof x.Texture) return r.texture.generateCanvas(t);
        let n = r.textureGenerator.generateTexture(e),
          i = r.texture.generateCanvas(n);
        return n.destroy(!0), i;
      }
      pixels(e) {
        let t = (e = this._normalizeOptions(e)).target,
          r = this._renderer,
          n = t instanceof x.Texture ? t : r.textureGenerator.generateTexture(e),
          i = r.texture.getPixels(n);
        return t instanceof f.Container && n.destroy(!0), i;
      }
      texture(e) {
        return (e = this._normalizeOptions(e)).target instanceof x.Texture ? e.target : this._renderer.textureGenerator.generateTexture(e);
      }
      download(e) {
        e = this._normalizeOptions(e);
        let t = this.canvas(e),
          r = document.createElement("a");
        r.download = e.filename ?? "image.png", r.href = t.toDataURL("image/png"), document.body.appendChild(r), r.click(), document.body.removeChild(r);
      }
      log(e) {
        let t = e.width ?? 200;
        e = this._normalizeOptions(e);
        let r = this.canvas(e),
          n = r.toDataURL();
        console.log(`[Pixi Texture] ${r.width}px ${r.height}px`), console.log("%c ", `font-size: 1px; padding: ${t}px 300px; background: url(${n}) no-repeat; background-size: contain;`);
      }
      destroy() {
        this._renderer = null;
      }
    };
  g.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "extract"
  }, g.defaultImageOptions = {
    format: "png",
    quality: 1
  }, e.s(["ExtractSystem", 0, g], 661226);
  var _ = e.i(222735),
    T = e.i(389474),
    b = e.i(539088),
    y = e.i(453549),
    v = e.i(654713),
    C = e.i(317765),
    k = x;
  class S extends k.Texture {
    static create(e) {
      let {
        dynamic: t,
        textureOptions: r,
        ...n
      } = e;
      return new S({
        ...r,
        source: new C.TextureSource(n),
        dynamic: t ?? !1
      });
    }
    resize(e, t, r) {
      return this.source.resize(e, t, r), this;
    }
  }
  e.s(["RenderTexture", 0, S], 292203);
  let M = new b.Rectangle(),
    G = new y.Bounds(),
    R = [0, 0, 0, 0];
  class P {
    constructor(e) {
      this._renderer = e;
    }
    generateTexture(e) {
      e instanceof f.Container && (e = {
        target: e,
        frame: void 0,
        textureSourceOptions: {},
        resolution: void 0
      });
      let t = e.resolution || this._renderer.resolution,
        r = e.antialias || this._renderer.view.antialias,
        n = e.target,
        i = e.clearColor;
      i = i ? Array.isArray(i) && 4 === i.length ? i : _.Color.shared.setValue(i).toArray() : R;
      let s = e.frame?.copyTo(M) || (0, v.getLocalBounds)(n, G).rectangle,
        a = e.defaultAnchor && {
          defaultAnchor: e.defaultAnchor
        };
      s.width = 0 | Math.max(s.width, 1 / t), s.height = 0 | Math.max(s.height, 1 / t);
      let o = S.create({
          ...e.textureSourceOptions,
          width: s.width,
          height: s.height,
          resolution: t,
          antialias: r,
          textureOptions: a
        }),
        l = T.Matrix.shared.translate(-s.x, -s.y);
      return this._renderer.render({
        container: n,
        transform: l,
        target: o,
        clearColor: i
      }), o.source.updateMipmaps(), o;
    }
    destroy() {
      this._renderer = null;
    }
  }
  function w(e) {
    let t = !1;
    for (let r in e) if (void 0 == e[r]) {
      t = !0;
      break;
    }
    if (!t) return e;
    let r = Object.create(null);
    for (let t in e) {
      let n = e[t];
      n && (r[t] = n);
    }
    return r;
  }
  function B(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) void 0 == e[r] ? t++ : e[r - t] = e[r];
    return e.length -= t, e;
  }
  P.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "textureGenerator"
  }, e.s(["GenerateTextureSystem", 0, P], 282313), e.s(["cleanArray", 0, B, "cleanHash", 0, w], 287358);
  let E = class e {
    constructor(e) {
      this._managedResources = [], this._managedResourceHashes = [], this._managedCollections = [], this._ready = !1, this._renderer = e;
    }
    init(t) {
      t = {
        ...e.defaultOptions,
        ...t
      }, this.maxUnusedTime = t.gcMaxUnusedTime, this._frequency = t.gcFrequency, this.enabled = t.gcActive, this.now = performance.now();
    }
    get enabled() {
      return !!this._handler;
    }
    set enabled(e) {
      this.enabled !== e && (e ? (this._handler = this._renderer.scheduler.repeat(() => {
        this._ready = !0;
      }, this._frequency, !1), this._collectionsHandler = this._renderer.scheduler.repeat(() => {
        for (let e of this._managedCollections) {
          let {
            context: t,
            collection: r,
            type: n
          } = e;
          "hash" === n ? t[r] = w(t[r]) : t[r] = B(t[r]);
        }
      }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._collectionsHandler), this._handler = 0, this._collectionsHandler = 0));
    }
    prerender({
      container: e
    }) {
      this.now = performance.now(), e.renderGroup.gcTick = this._renderer.tick++, this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick);
    }
    postrender() {
      this._ready && this.enabled && (this.run(), this._ready = !1);
    }
    _updateInstructionGCTick(e, t) {
      for (let r of (e.instructionSet.gcTick = t, e.gcTick = t, e.renderGroupChildren)) this._updateInstructionGCTick(r, t);
    }
    addCollection(e, t, r) {
      this._managedCollections.push({
        context: e,
        collection: t,
        type: r
      });
    }
    addResource(e, t) {
      if (-1 !== e._gcLastUsed) {
        e._gcLastUsed = this.now, e._onTouch?.(this.now);
        return;
      }
      e._gcData = {
        index: this._managedResources.length,
        type: t
      }, e._gcLastUsed = this.now, e._onTouch?.(this.now), e.once("unload", this.removeResource, this), this._managedResources.push(e);
    }
    removeResource(e) {
      let t = e._gcData;
      if (!t) return;
      let r = t.index,
        n = this._managedResources.length - 1;
      if (r !== n) {
        let e = this._managedResources[n];
        this._managedResources[r] = e, e._gcData.index = r;
      }
      this._managedResources.length--, e._gcData = null, e._gcLastUsed = -1;
    }
    addResourceHash(e, t, r, n = 0) {
      this._managedResourceHashes.push({
        context: e,
        hash: t,
        type: r,
        priority: n
      }), this._managedResourceHashes.sort((e, t) => e.priority - t.priority);
    }
    run() {
      let e = performance.now();
      for (let t of this._managedResourceHashes) this.runOnHash(t, e);
      let t = 0;
      for (let r = 0; r < this._managedResources.length; r++) {
        let n = this._managedResources[r];
        t = this.runOnResource(n, e, t);
      }
      this._managedResources.length = t;
    }
    updateRenderableGCTick(e, t) {
      let r = e.renderGroup ?? e.parentRenderGroup,
        n = r?.instructionSet?.gcTick ?? -1;
      (r?.gcTick ?? 0) === n && (e._gcLastUsed = t, e._onTouch?.(t));
    }
    runOnResource(e, t, r) {
      let n = e._gcData;
      return "renderable" === n.type && this.updateRenderableGCTick(e, t), t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect ? (this._managedResources[r] = e, n.index = r, r++) : (e.unload(), e._gcData = null, e._gcLastUsed = -1, e.off("unload", this.removeResource, this)), r;
    }
    _createHashClone(e, t) {
      let r = Object.create(null);
      for (let n in e) {
        if (n === t) break;
        null !== e[n] && (r[n] = e[n]);
      }
      return r;
    }
    runOnHash(e, t) {
      let {
          context: r,
          hash: n,
          type: i
        } = e,
        s = r[n],
        a = null,
        o = 0;
      for (let e in s) {
        let r = s[e];
        if (null === r) {
          1e4 != ++o || a || (a = this._createHashClone(s, e));
          continue;
        }
        if (-1 === r._gcLastUsed) {
          r._gcLastUsed = t, r._onTouch?.(t), a && (a[e] = r);
          continue;
        }
        if ("renderable" === i && this.updateRenderableGCTick(r, t), !(t - r._gcLastUsed < this.maxUnusedTime) && r.autoGarbageCollect) {
          if ("renderable" === i) {
            let e = r.renderGroup ?? r.parentRenderGroup;
            e && (e.structureDidChange = !0);
          }
          r.unload(), r._gcData = null, r._gcLastUsed = -1, !a && (o + 1 !== 1e4 ? (s[e] = null, o++) : a = this._createHashClone(s, e));
        } else a && (a[e] = r);
      }
      a && (r[n] = a);
    }
    destroy() {
      this.enabled = !1, this._managedResources.forEach(e => {
        e.off("unload", this.removeResource, this);
      }), this._managedResources.length = 0, this._managedResourceHashes.length = 0, this._managedCollections.length = 0, this._renderer = null;
    }
  };
  E.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "gc",
    priority: 0
  }, E.defaultOptions = {
    gcActive: !0,
    gcMaxUnusedTime: 6e4,
    gcFrequency: 3e4
  }, e.s(["GCSystem", 0, E], 548306);
  var U = e.i(37554),
    A = e.i(149034),
    I = e.i(175444),
    O = e.i(162450),
    D = e.i(153594);
  class L {
    constructor(e) {
      this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = e;
    }
    reset() {
      this._stackIndex = 0;
      for (let e = 0; e < this._activeUniforms.length; e++) this._uniformsPool.push(this._activeUniforms[e]);
      for (let e = 0; e < this._activeBindGroups.length; e++) this._bindGroupPool.push(this._activeBindGroups[e]);
      this._activeUniforms.length = 0, this._activeBindGroups.length = 0;
    }
    start(e) {
      this.reset(), this.push(e);
    }
    bind({
      size: e,
      projectionMatrix: t,
      worldTransformMatrix: r,
      worldColor: n,
      offset: i
    }) {
      let s,
        a = this._renderer.renderTarget.renderTarget,
        o = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
          projectionData: a,
          worldTransformMatrix: new T.Matrix(),
          worldColor: 0xffffffff,
          offset: new U.Point()
        },
        l = {
          projectionMatrix: t || this._renderer.renderTarget.projectionMatrix,
          resolution: e || a.size,
          worldTransformMatrix: r || o.worldTransformMatrix,
          worldColor: n || o.worldColor,
          offset: i || o.offset,
          bindGroup: null
        },
        d = this._uniformsPool.pop() || this._createUniforms();
      this._activeUniforms.push(d);
      let u = d.uniforms;
      u.uProjectionMatrix = l.projectionMatrix, u.uResolution = l.resolution, u.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix), u.uWorldTransformMatrix.tx -= l.offset.x, u.uWorldTransformMatrix.ty -= l.offset.y, (0, A.color32BitToUniform)(l.worldColor, u.uWorldColorAlpha, 0), d.update(), this._renderer.renderPipes.uniformBatch ? s = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d, !1) : (s = this._bindGroupPool.pop() || new I.BindGroup(), this._activeBindGroups.push(s), s.setResource(d, 0)), l.bindGroup = s, this._currentGlobalUniformData = l;
    }
    push(e) {
      this.bind(e), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData;
    }
    pop() {
      this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === O.RendererType.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update();
    }
    get bindGroup() {
      return this._currentGlobalUniformData.bindGroup;
    }
    get globalUniformData() {
      return this._currentGlobalUniformData;
    }
    get uniformGroup() {
      return this._currentGlobalUniformData.bindGroup.resources[0];
    }
    _createUniforms() {
      return new D.UniformGroup({
        uProjectionMatrix: {
          value: new T.Matrix(),
          type: "mat3x3<f32>"
        },
        uWorldTransformMatrix: {
          value: new T.Matrix(),
          type: "mat3x3<f32>"
        },
        uWorldColorAlpha: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uResolution: {
          value: [0, 0],
          type: "vec2<f32>"
        }
      }, {
        isStatic: !0
      });
    }
    destroy() {
      this._renderer = null, this._globalUniformDataStack.length = 0, this._uniformsPool.length = 0, this._activeUniforms.length = 0, this._bindGroupPool.length = 0, this._activeBindGroups.length = 0, this._currentGlobalUniformData = null;
    }
  }
  L.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "globalUniforms"
  }, e.s(["GlobalUniformSystem", 0, L], 60064);
  var F = e.i(989031);
  let z = 1;
  class H {
    constructor() {
      this._tasks = [], this._offset = 0;
    }
    init() {
      F.Ticker.system.add(this._update, this);
    }
    repeat(e, t, r = !0) {
      let n = z++,
        i = 0;
      return r && (this._offset += 1e3, i = this._offset), this._tasks.push({
        func: e,
        duration: t,
        start: performance.now(),
        offset: i,
        last: performance.now(),
        repeat: !0,
        id: n
      }), n;
    }
    cancel(e) {
      for (let t = 0; t < this._tasks.length; t++) if (this._tasks[t].id === e) return void this._tasks.splice(t, 1);
    }
    _update() {
      let e = performance.now();
      for (let t = 0; t < this._tasks.length; t++) {
        let r = this._tasks[t];
        if (e - r.offset - r.last >= r.duration) {
          let t = e - r.start;
          r.func(t), r.last = e;
        }
      }
    }
    destroy() {
      F.Ticker.system.remove(this._update, this), this._tasks.length = 0;
    }
  }
  H.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "scheduler",
    priority: 0
  }, e.s(["SchedulerSystem", 0, H], 257445);
  var W = e.i(176684);
  let V = !1;
  function N(e) {
    if (!V) {
      if (c.DOMAdapter.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
        let t = [`%c  %c  %c  %c  %c PixiJS %c v${W.VERSION} (${e}) http://www.pixijs.com/

`, "background: #E72264; padding:5px 0;", "background: #6CA2EA; padding:5px 0;", "background: #B5D33D; padding:5px 0;", "background: #FED23F; padding:5px 0;", "color: #FFFFFF; background: #E72264; padding:5px 0;", "color: #E72264; background: #FFFFFF; padding:5px 0;"];
        globalThis.console.log(...t);
      } else globalThis.console && globalThis.console.log(`PixiJS ${W.VERSION} - ${e} - http://www.pixijs.com/`);
      V = !0;
    }
  }
  e.s(["sayHello", 0, N], 800476);
  class j {
    constructor(e) {
      this._renderer = e;
    }
    init(e) {
      if (e.hello) {
        let e = this._renderer.name;
        this._renderer.type === O.RendererType.WEBGL && (e += ` ${this._renderer.context.webGLVersion}`), N(e);
      }
    }
  }
  j.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "hello",
    priority: -2
  }, j.defaultOptions = {
    hello: !1
  }, e.s(["HelloSystem", 0, j], 165255);
  var $ = e.i(727905);
  let q = class e {
    constructor(e) {
      this._renderer = e;
    }
    init(t) {
      t = {
        ...e.defaultOptions,
        ...t
      }, this.maxUnusedTime = t.renderableGCMaxUnusedTime;
    }
    get enabled() {
      return (0, $.deprecation)("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled;
    }
    set enabled(e) {
      (0, $.deprecation)("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled = e;
    }
    addManagedHash(e, t) {
      (0, $.deprecation)("8.15.0", "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "hash");
    }
    addManagedArray(e, t) {
      (0, $.deprecation)("8.15.0", "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "array");
    }
    addRenderable(e) {
      (0, $.deprecation)("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."), this._renderer.gc.addResource(e, "renderable");
    }
    run() {
      (0, $.deprecation)("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run();
    }
    destroy() {
      this._renderer = null;
    }
  };
  q.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "renderableGC",
    priority: 0
  }, q.defaultOptions = {
    renderableGCActive: !0,
    renderableGCMaxUnusedTime: 6e4,
    renderableGCFrequency: 3e4
  }, e.s(["RenderableGCSystem", 0, q], 662188);
  let K = class e {
    get count() {
      return this._renderer.tick;
    }
    get checkCount() {
      return this._checkCount;
    }
    set checkCount(e) {
      (0, $.deprecation)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._checkCount = e;
    }
    get maxIdle() {
      return this._renderer.gc.maxUnusedTime / 1e3 * 60;
    }
    set maxIdle(e) {
      (0, $.deprecation)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.maxUnusedTime = e / 60 * 1e3;
    }
    get checkCountMax() {
      return Math.floor(this._renderer.gc._frequency / 1e3);
    }
    set checkCountMax(e) {
      (0, $.deprecation)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
    }
    get active() {
      return this._renderer.gc.enabled;
    }
    set active(e) {
      (0, $.deprecation)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.enabled = e;
    }
    constructor(e) {
      this._renderer = e, this._checkCount = 0;
    }
    init(t) {
      t.textureGCActive !== e.defaultOptions.textureGCActive && (this.active = t.textureGCActive), t.textureGCMaxIdle !== e.defaultOptions.textureGCMaxIdle && (this.maxIdle = t.textureGCMaxIdle), t.textureGCCheckCountMax !== e.defaultOptions.textureGCCheckCountMax && (this.checkCountMax = t.textureGCCheckCountMax);
    }
    run() {
      (0, $.deprecation)("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run();
    }
    destroy() {
      this._renderer = null;
    }
  };
  K.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem],
    name: "textureGC"
  }, K.defaultOptions = {
    textureGCActive: !0,
    textureGCAMaxIdle: null,
    textureGCMaxIdle: 3600,
    textureGCCheckCountMax: 600
  }, e.s(["TextureGCSystem", 0, K], 947084);
  var Y = e.i(733705);
  let J = class e {
    constructor(t = {}) {
      if (this.uid = (0, Y.uid)("renderTarget"), this.colorTextures = [], this.dirtyId = 0, this.isRoot = !1, this._size = new Float32Array(2), this._managedColorTextures = !1, t = {
        ...e.defaultOptions,
        ...t
      }, this.stencil = t.stencil, this.depth = t.depth, this.isRoot = t.isRoot, "number" == typeof t.colorTextures) {
        this._managedColorTextures = !0;
        for (let e = 0; e < t.colorTextures; e++) this.colorTextures.push(new C.TextureSource({
          width: t.width,
          height: t.height,
          resolution: t.resolution,
          antialias: t.antialias
        }));
      } else {
        this.colorTextures = [...t.colorTextures.map(e => e.source)];
        const e = this.colorTexture.source;
        this.resize(e.width, e.height, e._resolution);
      }
      this.colorTexture.source.on("resize", this.onSourceResize, this), (t.depthStencilTexture || this.stencil) && (t.depthStencilTexture instanceof x.Texture || t.depthStencilTexture instanceof C.TextureSource ? this.depthStencilTexture = t.depthStencilTexture.source : this.ensureDepthStencilTexture());
    }
    get size() {
      let e = this._size;
      return e[0] = this.pixelWidth, e[1] = this.pixelHeight, e;
    }
    get width() {
      return this.colorTexture.source.width;
    }
    get height() {
      return this.colorTexture.source.height;
    }
    get pixelWidth() {
      return this.colorTexture.source.pixelWidth;
    }
    get pixelHeight() {
      return this.colorTexture.source.pixelHeight;
    }
    get resolution() {
      return this.colorTexture.source._resolution;
    }
    get colorTexture() {
      return this.colorTextures[0];
    }
    onSourceResize(e) {
      this.resize(e.width, e.height, e._resolution, !0);
    }
    ensureDepthStencilTexture() {
      this.depthStencilTexture || (this.depthStencilTexture = new C.TextureSource({
        width: this.width,
        height: this.height,
        resolution: this.resolution,
        format: "depth24plus-stencil8",
        autoGenerateMipmaps: !1,
        antialias: !1,
        mipLevelCount: 1
      }));
    }
    resize(e, t, r = this.resolution, n = !1) {
      this.dirtyId++, this.colorTextures.forEach((i, s) => {
        n && 0 === s || i.source.resize(e, t, r);
      }), this.depthStencilTexture && this.depthStencilTexture.source.resize(e, t, r);
    }
    destroy() {
      this.colorTexture.source.off("resize", this.onSourceResize, this), this._managedColorTextures && this.colorTextures.forEach(e => {
        e.destroy();
      }), this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture);
    }
  };
  J.defaultOptions = {
    width: 0,
    height: 0,
    resolution: 1,
    colorTextures: 1,
    stencil: !1,
    depth: !1,
    antialias: !1,
    isRoot: !1
  }, e.s(["RenderTarget", 0, J], 638095);
  var Q = e.i(609932),
    X = e.i(173156);
  let Z = new Map();
  function ee(e, t) {
    if (!Z.has(e)) {
      let r = new x.Texture({
          source: new X.CanvasSource({
            resource: e,
            ...t
          })
        }),
        n = () => {
          Z.get(e) === r && Z.delete(e);
        };
      r.once("destroy", n), r.source.once("destroy", n), Z.set(e, r);
    }
    return Z.get(e);
  }
  Q.GlobalResourceRegistry.register(Z), e.s(["getCanvasTexture", 0, ee, "hasCachedCanvasTexture", 0, function (e) {
    return Z.has(e);
  }], 251783);
  let et = class e {
    get autoDensity() {
      return this.texture.source.autoDensity;
    }
    set autoDensity(e) {
      this.texture.source.autoDensity = e;
    }
    get resolution() {
      return this.texture.source._resolution;
    }
    set resolution(e) {
      this.texture.source.resize(this.texture.source.width, this.texture.source.height, e);
    }
    init(t) {
      (t = {
        ...e.defaultOptions,
        ...t
      }).view && ((0, $.deprecation)($.v8_0_0, "ViewSystem.view has been renamed to ViewSystem.canvas"), t.canvas = t.view), this.screen = new b.Rectangle(0, 0, t.width, t.height), this.canvas = t.canvas || c.DOMAdapter.get().createCanvas(), this.antialias = !!t.antialias, this.texture = ee(this.canvas, t), this.renderTarget = new J({
        colorTextures: [this.texture],
        depth: !!t.depth,
        isRoot: !0
      }), this.texture.source.transparent = t.backgroundAlpha < 1, this.resolution = t.resolution;
    }
    resize(e, t, r) {
      this.texture.source.resize(e, t, r), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height;
    }
    destroy(e = !1) {
      ("boolean" == typeof e ? e : !!e?.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.texture.destroy();
    }
  };
  et.extension = {
    type: [p.ExtensionType.WebGLSystem, p.ExtensionType.WebGPUSystem, p.ExtensionType.CanvasSystem],
    name: "view",
    priority: 0
  }, et.defaultOptions = {
    width: 800,
    height: 600,
    autoDensity: !1,
    antialias: !1
  }, e.s(["ViewSystem", 0, et], 777207);
  let er = [u.BackgroundSystem, L, j, et, n.RenderGroupSystem, E, K, P, g, s.RendererInitHook, q, H],
    en = [h.BlendModePipe, a.BatcherPipe, i.SpritePipe, r.RenderGroupPipe, o.AlphaMaskPipe, d.StencilMaskPipe, l.ColorMaskPipe, t.CustomRenderPipe];
  e.s(["SharedRenderPipes", 0, en, "SharedSystems", 0, er], 497544);
  var ei = e.i(220892);
  function es(e, t, r, n, i, s) {
    let a = s ? 1 : -1;
    return e.identity(), e.a = 1 / n * 2, e.d = 1 / i * 2 * a, e.tx = -1 - t * e.a, e.ty = -a - r * e.d, e;
  }
  e.s(["calculateProjection", 0, es], 301177);
  var ea = e.i(896704);
  function eo(e) {
    let t = e.colorTexture.source.resource;
    return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement && document.body.contains(t);
  }
  e.s(["isRenderingToScreen", 0, eo], 593642), e.s(["RenderTargetSystem", 0, class {
    constructor(e) {
      this.rootViewPort = new b.Rectangle(), this.viewport = new b.Rectangle(), this.mipLevel = 0, this.layer = 0, this.onRenderTargetChange = new ea.SystemRunner("onRenderTargetChange"), this.projectionMatrix = new T.Matrix(), this.defaultClearColor = [0, 0, 0, 0], this._renderSurfaceToRenderTargetHash = new Map(), this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._renderer = e, e.gc.addCollection(this, "_gpuRenderTargetHash", "hash");
    }
    finishRenderPass() {
      this.adaptor.finishRenderPass(this.renderTarget);
    }
    renderStart({
      target: e,
      clear: t,
      clearColor: r,
      frame: n,
      mipLevel: i,
      layer: s
    }) {
      this._renderTargetStack.length = 0, this.push(e, t, r, n, i ?? 0, s ?? 0), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = eo(this.rootRenderTarget), this.adaptor.prerender?.(this.rootRenderTarget);
    }
    postrender() {
      this.adaptor.postrender?.(this.rootRenderTarget);
    }
    bind(e, t = !0, r, n, i = 0, s = 0) {
      let a = this.getRenderTarget(e),
        o = this.renderTarget !== a;
      this.renderTarget = a, this.renderSurface = e;
      let l = this.getGpuRenderTarget(a);
      (a.pixelWidth !== l.width || a.pixelHeight !== l.height) && (this.adaptor.resizeGpuRenderTarget(a), l.width = a.pixelWidth, l.height = a.pixelHeight);
      let d = a.colorTexture,
        u = this.viewport,
        h = d.arrayLayerCount || 1;
      if ((0 | s) !== s && (s |= 0), s < 0 || s >= h) throw Error(`[RenderTargetSystem] layer ${s} is out of bounds (arrayLayerCount=${h}).`);
      this.mipLevel = 0 | i, this.layer = 0 | s;
      let c = Math.max(d.pixelWidth >> i, 1),
        p = Math.max(d.pixelHeight >> i, 1);
      if (!n && e instanceof x.Texture && (n = e.frame), n) {
        let e = d._resolution,
          t = 1 << Math.max(0 | i, 0),
          r = n.x * e + .5 | 0,
          s = n.y * e + .5 | 0,
          a = n.width * e + .5 | 0,
          o = n.height * e + .5 | 0,
          l = Math.floor(r / t),
          h = Math.floor(s / t),
          f = Math.ceil(a / t),
          x = Math.ceil(o / t);
        l = Math.min(Math.max(l, 0), c - 1), h = Math.min(Math.max(h, 0), p - 1), f = Math.min(Math.max(f, 1), c - l), x = Math.min(Math.max(x, 1), p - h), u.x = l, u.y = h, u.width = f, u.height = x;
      } else u.x = 0, u.y = 0, u.width = c, u.height = p;
      return es(this.projectionMatrix, 0, 0, u.width / d.resolution, u.height / d.resolution, !a.isRoot), this.adaptor.startRenderPass(a, t, r, u, i, s), o && this.onRenderTargetChange.emit(a), a;
    }
    clear(e, t = ei.CLEAR.ALL, r, n = this.mipLevel, i = this.layer) {
      t && (e && (e = this.getRenderTarget(e)), this.adaptor.clear(e || this.renderTarget, t, r, this.viewport, n, i));
    }
    contextChange() {
      this._gpuRenderTargetHash = Object.create(null);
    }
    push(e, t = ei.CLEAR.ALL, r, n, i = 0, s = 0) {
      let a = this.bind(e, t, r, n, i, s);
      return this._renderTargetStack.push({
        renderTarget: a,
        frame: n,
        mipLevel: i,
        layer: s
      }), a;
    }
    pop() {
      this._renderTargetStack.pop();
      let e = this._renderTargetStack[this._renderTargetStack.length - 1];
      this.bind(e.renderTarget, !1, null, e.frame, e.mipLevel, e.layer);
    }
    getRenderTarget(e) {
      return e.isTexture && (e = e.source), this._renderSurfaceToRenderTargetHash.get(e) ?? this._initRenderTarget(e);
    }
    copyToTexture(e, t, r, n, i) {
      r.x < 0 && (n.width += r.x, i.x -= r.x, r.x = 0), r.y < 0 && (n.height += r.y, i.y -= r.y, r.y = 0);
      let {
        pixelWidth: s,
        pixelHeight: a
      } = e;
      return n.width = Math.min(n.width, s - r.x), n.height = Math.min(n.height, a - r.y), this.adaptor.copyToTexture(e, t, r, n, i);
    }
    ensureDepthStencil() {
      this.renderTarget.stencil || (this.renderTarget.stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport, 0, this.layer));
    }
    destroy() {
      this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach((e, t) => {
        e !== t && e.destroy();
      }), this._renderSurfaceToRenderTargetHash.clear(), this._gpuRenderTargetHash = Object.create(null);
    }
    _initRenderTarget(e) {
      let t = null;
      return X.CanvasSource.test(e) && (e = ee(e).source), e instanceof J ? t = e : e instanceof C.TextureSource && (t = new J({
        colorTextures: [e]
      }), e.source instanceof X.CanvasSource && (t.isRoot = !0), e.once("destroy", () => {
        t.destroy(), this._renderSurfaceToRenderTargetHash.delete(e);
        let r = this._gpuRenderTargetHash[t.uid];
        r && (this._gpuRenderTargetHash[t.uid] = null, this.adaptor.destroyGpuRenderTarget(r));
      })), this._renderSurfaceToRenderTargetHash.set(e, t), t;
    }
    getGpuRenderTarget(e) {
      return this._gpuRenderTargetHash[e.uid] || (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e));
    }
    resetState() {
      this.renderTarget = null, this.renderSurface = null;
    }
  }], 798299);
};
