// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 164868, 694427, 737880, 220892, 896704, 176684, 463337.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t;
  var r,
    i = e.i(222735),
    n = e.i(78278);
  let s = [];
  async function a(e) {
    if (!e) for (let e = 0; e < s.length; e++) {
      let t = s[e];
      if (t.value.test()) return void (await t.value.load());
    }
  }
  async function o(e) {
    return a(!e);
  }
  n.extensions.handleByNamedList(n.ExtensionType.Environment, s), e.s(["autoDetectEnvironment", 0, o, "loadEnvironmentExtensions", 0, a], 694427);
  var u = e.i(275576);
  function l() {
    if ("boolean" == typeof t) return t;
    try {
      let e = Function("param1", "param2", "param3", "return param1[param2] === param3;");
      t = !0 === e({
        a: "b"
      }, "a", "b");
    } catch (e) {
      t = !1;
    }
    return t;
  }
  e.s(["unsafeEvalSupported", 0, l], 737880);
  var h = e.i(733705),
    c = e.i(727905),
    d = e.i(609932),
    f = ((r = f || {})[r.NONE = 0] = "NONE", r[r.COLOR = 16384] = "COLOR", r[r.STENCIL = 1024] = "STENCIL", r[r.DEPTH = 256] = "DEPTH", r[r.COLOR_DEPTH = 16640] = "COLOR_DEPTH", r[r.COLOR_STENCIL = 17408] = "COLOR_STENCIL", r[r.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", r[r.ALL = 17664] = "ALL", r);
  e.s(["CLEAR", 0, f], 220892);
  class m {
    constructor(e) {
      this.items = [], this._name = e;
    }
    emit(e, t, r, i, n, s, a, o) {
      let {
        name: u,
        items: l
      } = this;
      for (let h = 0, c = l.length; h < c; h++) l[h][u](e, t, r, i, n, s, a, o);
      return this;
    }
    add(e) {
      return e[this._name] && (this.remove(e), this.items.push(e)), this;
    }
    remove(e) {
      let t = this.items.indexOf(e);
      return -1 !== t && this.items.splice(t, 1), this;
    }
    contains(e) {
      return -1 !== this.items.indexOf(e);
    }
    removeAll() {
      return this.items.length = 0, this;
    }
    destroy() {
      this.removeAll(), this.items = null, this._name = null;
    }
    get empty() {
      return 0 === this.items.length;
    }
    get name() {
      return this._name;
    }
  }
  e.s(["SystemRunner", 0, m], 896704);
  var x = e.i(263524);
  let p = ["init", "destroy", "contextChange", "resolutionChange", "resetState", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"],
    v = class e extends x.default {
      constructor(e) {
        super(), this.tick = 0, this.uid = (0, h.uid)("renderer"), this.runners = Object.create(null), this.renderPipes = Object.create(null), this._initOptions = {}, this._systemsHash = Object.create(null), this.type = e.type, this.name = e.name, this.config = e;
        const t = [...p, ...(this.config.runners ?? [])];
        this._addRunners(...t), this._unsafeEvalCheck();
      }
      async init(t = {}) {
        let r = !0 === t.skipExtensionImports || !1 === t.manageImports;
        for (let e in await a(r), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors), this._systemsHash) t = {
          ...this._systemsHash[e].constructor.defaultOptions,
          ...t
        };
        t = {
          ...e.defaultOptions,
          ...t
        }, this._roundPixels = +!!t.roundPixels;
        for (let e = 0; e < this.runners.init.items.length; e++) await this.runners.init.items[e].init(t);
        this._initOptions = t;
      }
      render(e, t) {
        this.tick++;
        let r = e;
        if (r instanceof u.Container && (r = {
          container: r
        }, t && ((0, c.deprecation)(c.v8_0_0, "passing a second argument is deprecated, please use render options instead"), r.target = t.renderTexture)), r.target || (r.target = this.view.renderTarget), r.target === this.view.renderTarget && (this._lastObjectRendered = r.container, r.clearColor ?? (r.clearColor = this.background.colorRgba), r.clear ?? (r.clear = this.background.clearBeforeRender)), r.clearColor) {
          let e = Array.isArray(r.clearColor) && 4 === r.clearColor.length;
          r.clearColor = e ? r.clearColor : i.Color.shared.setValue(r.clearColor).toArray();
        }
        r.transform || (r.container.updateLocalTransform(), r.transform = r.container.localTransform), r.container.visible && (r.container.enableRenderGroup(), this.runners.prerender.emit(r), this.runners.renderStart.emit(r), this.runners.render.emit(r), this.runners.renderEnd.emit(r), this.runners.postrender.emit(r));
      }
      resize(e, t, r) {
        let i = this.view.resolution;
        this.view.resize(e, t, r), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), void 0 !== r && r !== i && this.runners.resolutionChange.emit(r);
      }
      clear(e = {}) {
        e.target || (e.target = this.renderTarget.renderTarget), e.clearColor || (e.clearColor = this.background.colorRgba), e.clear ?? (e.clear = f.ALL);
        let {
          clear: t,
          clearColor: r,
          target: n,
          mipLevel: s,
          layer: a
        } = e;
        i.Color.shared.setValue(r ?? this.background.colorRgba), this.renderTarget.clear(n, t, i.Color.shared.toArray(), s ?? 0, a ?? 0);
      }
      get resolution() {
        return this.view.resolution;
      }
      set resolution(e) {
        this.view.resolution = e, this.runners.resolutionChange.emit(e);
      }
      get width() {
        return this.view.texture.frame.width;
      }
      get height() {
        return this.view.texture.frame.height;
      }
      get canvas() {
        return this.view.canvas;
      }
      get lastObjectRendered() {
        return this._lastObjectRendered;
      }
      get renderingToScreen() {
        return this.renderTarget.renderingToScreen;
      }
      get screen() {
        return this.view.screen;
      }
      _addRunners(...e) {
        e.forEach(e => {
          this.runners[e] = new m(e);
        });
      }
      _addSystems(e) {
        let t;
        for (t in e) {
          let r = e[t];
          this._addSystem(r.value, r.name);
        }
      }
      _addSystem(e, t) {
        let r = new e(this);
        if (this[t]) throw Error(`Whoops! The name "${t}" is already in use`);
        for (let e in this[t] = r, this._systemsHash[t] = r, this.runners) this.runners[e].add(r);
        return this;
      }
      _addPipes(e, t) {
        let r = t.reduce((e, t) => (e[t.name] = t.value, e), {});
        e.forEach(e => {
          let t = e.value,
            i = e.name,
            n = r[i];
          this.renderPipes[i] = new t(this, n ? new n() : null), this.runners.destroy.add(this.renderPipes[i]);
        });
      }
      destroy(e = !1) {
        this.runners.destroy.items.reverse(), this.runners.destroy.emit(e), (!0 === e || "object" == typeof e && e.releaseGlobalResources) && d.GlobalResourceRegistry.release(), Object.values(this.runners).forEach(e => {
          e.destroy();
        }), this._systemsHash = null, this.renderPipes = null, this.removeAllListeners();
      }
      generateTexture(e) {
        return this.textureGenerator.generateTexture(e);
      }
      get roundPixels() {
        return !!this._roundPixels;
      }
      _unsafeEvalCheck() {
        if (!l()) throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
      }
      resetState() {
        this.runners.resetState.emit();
      }
    };
  v.defaultOptions = {
    resolution: 1,
    failIfMajorPerformanceCaveat: !1,
    roundPixels: !1
  }, e.s(["AbstractRenderer", 0, v], 164868);
  let g = "8.19.0";
  e.s(["DATA_URI", 0, /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i, "VERSION", 0, g], 176684);
  class b {
    static init() {
      globalThis.__PIXI_APP_INIT__?.(this, g);
    }
    static destroy() {}
  }
  b.extension = n.ExtensionType.Application;
  class _ {
    constructor(e) {
      this._renderer = e;
    }
    init() {
      globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, g);
    }
    destroy() {
      this._renderer = null;
    }
  }
  _.extension = {
    type: [n.ExtensionType.WebGLSystem, n.ExtensionType.WebGPUSystem],
    name: "initHook",
    priority: -10
  }, e.s(["ApplicationInitHook", 0, b, "RendererInitHook", 0, _], 463337);
};
