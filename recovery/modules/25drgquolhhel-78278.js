// Recovered from 25drgquolhhel.js. Runtime module IDs: 78278.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e,
    i = ((e = i || {}).Application = "application", e.WebGLPipes = "webgl-pipes", e.WebGLPipesAdaptor = "webgl-pipes-adaptor", e.WebGLSystem = "webgl-system", e.WebGPUPipes = "webgpu-pipes", e.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", e.WebGPUSystem = "webgpu-system", e.CanvasSystem = "canvas-system", e.CanvasPipesAdaptor = "canvas-pipes-adaptor", e.CanvasPipes = "canvas-pipes", e.Asset = "asset", e.LoadParser = "load-parser", e.ResolveParser = "resolve-parser", e.CacheParser = "cache-parser", e.DetectionParser = "detection-parser", e.MaskEffect = "mask-effect", e.BlendMode = "blend-mode", e.TextureSource = "texture-source", e.TextureUploaderWebGL = "texture-uploader-webgl", e.TextureUploaderWebGPU = "texture-uploader-webgpu", e.Environment = "environment", e.ShapeBuilder = "shape-builder", e.Batcher = "batcher", e);
  let s = t => {
      if ("function" == typeof t || "object" == typeof t && t.extension) {
        if (!t.extension) throw Error("Extension class must have an extension object");
        t = {
          ...("object" != typeof t.extension ? {
            type: t.extension
          } : t.extension),
          ref: t
        };
      }
      if ("object" == typeof t) t = {
        ...t
      };else throw Error("Invalid extension type");
      return "string" == typeof t.type && (t.type = [t.type]), t;
    },
    r = (t, e) => s(t).priority ?? e;
  t.s(["ExtensionType", 0, i, "extensions", 0, {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...t) {
      return t.map(s).forEach(t => {
        t.type.forEach(e => this._removeHandlers[e]?.(t));
      }), this;
    },
    add(...t) {
      return t.map(s).forEach(t => {
        t.type.forEach(e => {
          let i = this._addHandlers,
            s = this._queue;
          i[e] ? i[e]?.(t) : (s[e] = s[e] || [], s[e]?.push(t));
        });
      }), this;
    },
    handle(t, e, i) {
      let s = this._addHandlers,
        r = this._removeHandlers;
      if (s[t] || r[t]) throw Error(`Extension type ${t} already has a handler`);
      s[t] = e, r[t] = i;
      let n = this._queue;
      return n[t] && (n[t]?.forEach(t => e(t)), delete n[t]), this;
    },
    handleByMap(t, e) {
      return this.handle(t, t => {
        t.name && (e[t.name] = t.ref);
      }, t => {
        t.name && delete e[t.name];
      });
    },
    handleByNamedList(t, e, i = -1) {
      return this.handle(t, t => {
        e.findIndex(e => e.name === t.name) >= 0 || (e.push({
          name: t.name,
          value: t.ref
        }), e.sort((t, e) => r(e.value, i) - r(t.value, i)));
      }, t => {
        let i = e.findIndex(e => e.name === t.name);
        -1 !== i && e.splice(i, 1);
      });
    },
    handleByList(t, e, i = -1) {
      return this.handle(t, t => {
        e.includes(t.ref) || (e.push(t.ref), e.sort((t, e) => r(e, i) - r(t, i)));
      }, t => {
        let i = e.indexOf(t.ref);
        -1 !== i && e.splice(i, 1);
      });
    },
    mixin(t, ...e) {
      for (let i of e) Object.defineProperties(t.prototype, Object.getOwnPropertyDescriptors(i));
    }
  }, "normalizeExtensionPriority", 0, r]);
};
