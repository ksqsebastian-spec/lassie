// Recovered from 2z01vlrd3-p-5.js. Runtime module IDs: 18545, 657810, 695668, 591777, 39739, 564816, 643211, 203722, 449386, 847357, 506758, 725794, 121658, 544920, 553527, 784710, 597023, 501522, 993, 954198, 743829, 549140, 288111, 63416, 427315, 840383, 126853, 152519, 10264, 86716, 151032, 918655, 508160, 368818, 212218, 167993, 317365, 557305, 96207.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t, s, r, a, i;
  var n = e.i(78278);
  let o = {
    extension: {
      type: n.ExtensionType.Environment,
      name: "browser",
      priority: -1
    },
    test: () => !0,
    load: async () => {
      await e.A(451779);
    }
  };
  e.s(["browserExt", 0, o], 657810);
  let l = {
    extension: {
      type: n.ExtensionType.Environment,
      name: "webworker",
      priority: 0
    },
    test: () => "u" > typeof self && void 0 !== self.WorkerGlobalScope,
    load: async () => {
      await e.A(492505);
    }
  };
  e.s(["webworkerExt", 0, l], 695668), e.i(123821), e.i(958348), e.i(379412), e.i(263524), n.extensions.add(o, l), e.s([], 18545);
  var d = e.i(787653),
    h = e.i(164868);
  function c(e) {
    return void 0 !== t ? t : t = (() => {
      let t = {
        stencil: !0,
        failIfMajorPerformanceCaveat: e ?? h.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat
      };
      try {
        if (!d.DOMAdapter.get().getWebGLRenderingContext()) return !1;
        let e = d.DOMAdapter.get().createCanvas().getContext("webgl", t),
          s = !!e?.getContextAttributes()?.stencil;
        if (e) {
          let t = e.getExtension("WEBGL_lose_context");
          t && t.loseContext();
        }
        return e = null, s;
      } catch (e) {
        return !1;
      }
    })();
  }
  async function p(e = {}) {
    return void 0 !== s ? s : s = await (async () => {
      let t = d.DOMAdapter.get().getNavigator().gpu;
      if (!t) return !1;
      try {
        let s = await t.requestAdapter(e);
        return await s.requestDevice(), !0;
      } catch (e) {
        return !1;
      }
    })();
  }
  e.s(["isWebGLSupported", 0, c], 591777), e.s(["isWebGPUSupported", 0, p], 39739);
  let u = ["webgl", "webgpu", "canvas"];
  async function g(t) {
    let s,
      r = [];
    t.preference ? Array.isArray(t.preference) ? r = t.preference.slice() : (r.push(t.preference), u.forEach(e => {
      e !== t.preference && r.push(e);
    })) : r = u.slice();
    let a = {};
    for (let i = 0; i < r.length; i++) {
      let n = r[i];
      if ("webgpu" === n && (await p())) {
        let {
          WebGPURenderer: r
        } = await e.A(178609);
        s = r, a = {
          ...t,
          ...t.webgpu
        };
        break;
      }
      if ("webgl" === n && c(t.failIfMajorPerformanceCaveat ?? h.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat)) {
        let {
          WebGLRenderer: r
        } = await e.A(604686);
        s = r, a = {
          ...t,
          ...t.webgl
        };
        break;
      }
      if ("canvas" === n) {
        let {
          CanvasRenderer: r
        } = await e.A(707906);
        s = r, a = {
          ...t,
          ...t.canvasOptions
        };
        break;
      }
    }
    if (delete a.webgpu, delete a.webgl, delete a.canvasOptions, !s) throw Error("No available renderer for the current environment");
    let i = new s();
    return await i.init(a), i;
  }
  e.s(["autoDetectRenderer", 0, g], 564816);
  var m = e.i(275576),
    A = e.i(463337),
    f = e.i(727905);
  class y {
    static init(e) {
      Object.defineProperty(this, "resizeTo", {
        configurable: !0,
        set(e) {
          globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize());
        },
        get() {
          return this._resizeTo;
        }
      }), this.queueResize = () => {
        this._resizeTo && (this._cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
      }, this._cancelResize = () => {
        this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
      }, this.resize = () => {
        let e, t;
        if (this._resizeTo) {
          if (this._cancelResize(), this._resizeTo === globalThis.window) e = globalThis.innerWidth, t = globalThis.innerHeight;else {
            let {
              clientWidth: s,
              clientHeight: r
            } = this._resizeTo;
            e = s, t = r;
          }
          this.renderer.resize(e, t), this.render();
        }
      }, this._resizeId = null, this._resizeTo = null, this.resizeTo = e.resizeTo || null;
    }
    static destroy() {
      globalThis.removeEventListener("resize", this.queueResize), this._cancelResize(), this._cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
    }
  }
  y.extension = n.ExtensionType.Application, e.s(["ResizePlugin", 0, y], 643211);
  var v = e.i(143072),
    _ = e.i(989031);
  class w {
    static init(e) {
      e = Object.assign({
        autoStart: !0,
        sharedTicker: !1
      }, e), Object.defineProperty(this, "ticker", {
        configurable: !0,
        set(e) {
          this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, v.UPDATE_PRIORITY.LOW);
        },
        get() {
          return this._ticker;
        }
      }), this.stop = () => {
        this._ticker.stop();
      }, this.start = () => {
        this._ticker.start();
      }, this._ticker = null, this.ticker = e.sharedTicker ? _.Ticker.shared : new _.Ticker(), e.autoStart && this.start();
    }
    static destroy() {
      if (this._ticker) {
        let e = this._ticker;
        this.ticker = null, e.destroy();
      }
    }
  }
  w.extension = n.ExtensionType.Application, e.s(["TickerPlugin", 0, w], 203722), n.extensions.add(y), n.extensions.add(w);
  let x = class e {
    constructor(...e) {
      this.stage = new m.Container(), void 0 !== e[0] && (0, f.deprecation)(f.v8_0_0, "Application constructor options are deprecated, please use Application.init() instead.");
    }
    async init(t) {
      t = {
        ...t
      }, this.stage || (this.stage = new m.Container()), this.renderer = await g(t), e._plugins.forEach(e => {
        e.init.call(this, t);
      });
    }
    render() {
      this.renderer.render({
        container: this.stage
      });
    }
    get canvas() {
      return this.renderer.canvas;
    }
    get view() {
      return (0, f.deprecation)(f.v8_0_0, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas;
    }
    get screen() {
      return this.renderer.screen;
    }
    get domContainerRoot() {
      return this.renderer.renderPipes.dom?._domElement;
    }
    destroy(t = !1, s = !1) {
      let r = e._plugins.slice(0);
      r.reverse(), r.forEach(e => {
        e.destroy.call(this);
      }), this.stage.destroy(s), this.stage = null, this.renderer.destroy(t), this.renderer = null;
    }
  };
  x._plugins = [], n.extensions.handleByList(n.ExtensionType.Application, x._plugins), n.extensions.add(A.ApplicationInitHook), e.s(["Application", 0, x], 449386);
  var b = e.i(35585),
    T = e.i(402247),
    E = e.i(5321);
  let P = {
    test: e => "string" == typeof e && e.startsWith("info face="),
    parse(e) {
      let t = e.match(/^[a-z]+\s+.+$/gm),
        s = {
          info: [],
          common: [],
          page: [],
          char: [],
          chars: [],
          kerning: [],
          kernings: [],
          distanceField: []
        };
      for (let e in t) {
        let r = t[e].match(/^[a-z]+/gm)[0],
          a = t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
          i = {};
        for (let e in a) {
          let t = a[e].split("="),
            s = t[0],
            r = t[1].replace(/"/gm, ""),
            n = parseFloat(r),
            o = isNaN(n) ? r : n;
          i[s] = o;
        }
        s[r].push(i);
      }
      let r = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: "",
          distanceField: null,
          baseLineOffset: 0
        },
        [a] = s.info,
        [i] = s.common,
        [n] = s.distanceField ?? [];
      n && (r.distanceField = {
        range: parseInt(n.distanceRange, 10),
        type: n.fieldType
      }), r.fontSize = parseInt(a.size, 10), r.fontFamily = a.face, r.lineHeight = parseInt(i.lineHeight, 10);
      let o = s.page;
      for (let e = 0; e < o.length; e++) r.pages.push({
        id: parseInt(o[e].id, 10) || 0,
        file: o[e].file
      });
      let l = {};
      r.baseLineOffset = r.lineHeight - parseInt(i.base, 10);
      let d = s.char;
      for (let e = 0; e < d.length; e++) {
        let t = d[e],
          s = parseInt(t.id, 10),
          a = t.letter ?? t.char ?? String.fromCharCode(s);
        "space" === a && (a = " "), l[s] = a, r.chars[a] = {
          id: s,
          page: parseInt(t.page, 10) || 0,
          x: parseInt(t.x, 10),
          y: parseInt(t.y, 10),
          width: parseInt(t.width, 10),
          height: parseInt(t.height, 10),
          xOffset: parseInt(t.xoffset, 10),
          yOffset: parseInt(t.yoffset, 10),
          xAdvance: parseInt(t.xadvance, 10),
          kerning: {}
        };
      }
      let h = s.kerning || [];
      for (let e = 0; e < h.length; e++) {
        let t = parseInt(h[e].first, 10),
          s = parseInt(h[e].second, 10),
          a = parseInt(h[e].amount, 10);
        r.chars[l[s]] && (r.chars[l[s]].kerning[l[t]] = a);
      }
      return r;
    }
  };
  e.s(["bitmapFontTextParser", 0, P], 847357);
  let k = {
    test: e => "string" != typeof e && "getElementsByTagName" in e && e.getElementsByTagName("page").length && null !== e.getElementsByTagName("info")[0].getAttribute("face"),
    parse(e) {
      let t = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: "",
          distanceField: null,
          baseLineOffset: 0
        },
        s = e.getElementsByTagName("info")[0],
        r = e.getElementsByTagName("common")[0],
        a = e.getElementsByTagName("distanceField")[0];
      a && (t.distanceField = {
        type: a.getAttribute("fieldType"),
        range: parseInt(a.getAttribute("distanceRange"), 10)
      });
      let i = e.getElementsByTagName("page"),
        n = e.getElementsByTagName("char"),
        o = e.getElementsByTagName("kerning");
      t.fontSize = parseInt(s.getAttribute("size"), 10), t.fontFamily = s.getAttribute("face"), t.lineHeight = parseInt(r.getAttribute("lineHeight"), 10);
      for (let e = 0; e < i.length; e++) t.pages.push({
        id: parseInt(i[e].getAttribute("id"), 10) || 0,
        file: i[e].getAttribute("file")
      });
      let l = {};
      t.baseLineOffset = t.lineHeight - parseInt(r.getAttribute("base"), 10);
      for (let e = 0; e < n.length; e++) {
        let s = n[e],
          r = parseInt(s.getAttribute("id"), 10),
          a = s.getAttribute("letter") ?? s.getAttribute("char") ?? String.fromCharCode(r);
        "space" === a && (a = " "), l[r] = a, t.chars[a] = {
          id: r,
          page: parseInt(s.getAttribute("page"), 10) || 0,
          x: parseInt(s.getAttribute("x"), 10),
          y: parseInt(s.getAttribute("y"), 10),
          width: parseInt(s.getAttribute("width"), 10),
          height: parseInt(s.getAttribute("height"), 10),
          xOffset: parseInt(s.getAttribute("xoffset"), 10),
          yOffset: parseInt(s.getAttribute("yoffset"), 10),
          xAdvance: parseInt(s.getAttribute("xadvance"), 10),
          kerning: {}
        };
      }
      for (let e = 0; e < o.length; e++) {
        let s = parseInt(o[e].getAttribute("first"), 10),
          r = parseInt(o[e].getAttribute("second"), 10),
          a = parseInt(o[e].getAttribute("amount"), 10);
        t.chars[l[r]] && (t.chars[l[r]].kerning[l[s]] = a);
      }
      return t;
    }
  };
  e.s(["bitmapFontXMLParser", 0, k], 506758);
  let I = {
    test: e => !!("string" == typeof e && e.match(/<font(\s|>)/)) && k.test(d.DOMAdapter.get().parseXML(e)),
    parse: e => k.parse(d.DOMAdapter.get().parseXML(e))
  };
  e.s(["bitmapFontXMLStringParser", 0, I], 725794);
  let L = [".xml", ".fnt"],
    C = {
      extension: {
        type: n.ExtensionType.CacheParser,
        name: "cacheBitmapFont"
      },
      test: e => !!e?.pages && !!e?.chars && "string" == typeof e?.fontFamily && "" !== e.fontFamily,
      getCacheableAssets(e, t) {
        let s = {};
        return e.forEach(e => {
          s[e] = t, s[`${e}-bitmap`] = t;
        }), s[`${t.fontFamily}-bitmap`] = t, s;
      }
    },
    B = {
      extension: {
        type: n.ExtensionType.LoadParser,
        priority: b.LoaderParserPriority.Normal
      },
      name: "loadBitmapFont",
      id: "bitmap-font",
      test: e => L.includes(E.path.extname(e).toLowerCase()),
      testParse: async e => P.test(e) || I.test(e),
      async parse(t, s, r) {
        let a = P.test(t) ? P.parse(t) : I.parse(t),
          {
            src: i
          } = s,
          {
            pages: n
          } = a,
          o = [],
          l = a.distanceField ? {
            scaleMode: "linear",
            alphaMode: "premultiply-alpha-on-upload",
            autoGenerateMipmaps: !1,
            resolution: 1
          } : {};
        for (let e = 0; e < n.length; ++e) {
          let t = n[e].file,
            s = E.path.join(E.path.dirname(i), t);
          s = (0, T.copySearchParams)(s, i), o.push({
            src: s,
            data: l
          });
        }
        let [d, {
          BitmapFont: h
        }] = await Promise.all([r.load(o), e.A(236559)]);
        return new h({
          data: a,
          textures: o.map(e => d[e.src])
        }, i);
      },
      async load(e, t) {
        let s = await d.DOMAdapter.get().fetch(e);
        return await s.text();
      },
      async unload(e, t, s) {
        await Promise.all(e.pages.map(e => s.unload(e.texture.source._sourceOrigin))), e.destroy();
      }
    };
  e.s(["bitmapFontCachePlugin", 0, C, "loadBitmapFont", 0, B], 121658);
  var F = e.i(562140);
  class O {
    constructor(e, t = !1) {
      this._loader = e, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = t;
    }
    add(e) {
      e.forEach(e => {
        this._assetList.push(e);
      }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
    }
    async _next() {
      if (this._assetList.length && this._isActive) {
        this._isLoading = !0;
        let e = [],
          t = Math.min(this._assetList.length, this._maxConcurrent);
        for (let s = 0; s < t; s++) e.push(this._assetList.pop());
        await this._loader.load(e), this._isLoading = !1, this._next();
      }
    }
    get active() {
      return this._isActive;
    }
    set active(e) {
      this._isActive !== e && (this._isActive = e, e && !this._isLoading && this._next());
    }
  }
  e.s(["BackgroundLoader", 0, O], 544920);
  var R = e.i(3165),
    S = e.i(337654);
  let z = {
    extension: {
      type: n.ExtensionType.CacheParser,
      name: "cacheTextureArray"
    },
    test: e => Array.isArray(e) && e.every(e => e instanceof S.Texture),
    getCacheableAssets: (e, t) => {
      let s = {};
      return e.forEach(e => {
        t.forEach((t, r) => {
          s[e + (0 === r ? "" : r + 1)] = t;
        });
      }), s;
    }
  };
  async function M(e) {
    if ("Image" in globalThis) return new Promise(t => {
      let s = new Image();
      s.onload = () => {
        t(!0);
      }, s.onerror = () => {
        t(!1);
      }, s.src = e;
    });
    if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
      try {
        let t = await (await fetch(e)).blob();
        await createImageBitmap(t);
      } catch (e) {
        return !1;
      }
      return !0;
    }
    return !1;
  }
  e.s(["cacheTextureArray", 0, z], 553527), e.s(["testImageFormat", 0, M], 784710);
  let j = {
    extension: {
      type: n.ExtensionType.DetectionParser,
      priority: 1
    },
    test: async () => M("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    add: async e => [...e, "avif"],
    remove: async e => e.filter(e => "avif" !== e)
  };
  e.s(["detectAvif", 0, j], 597023);
  let W = ["png", "jpg", "jpeg"],
    U = {
      extension: {
        type: n.ExtensionType.DetectionParser,
        priority: -1
      },
      test: () => Promise.resolve(!0),
      add: async e => [...e, ...W],
      remove: async e => e.filter(e => !W.includes(e))
    };
  e.s(["detectDefaults", 0, U], 501522);
  let D = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
  function $(e) {
    return !D && "" !== document.createElement("video").canPlayType(e);
  }
  e.s(["testVideoFormat", 0, $], 993);
  let G = {
    extension: {
      type: n.ExtensionType.DetectionParser,
      priority: 0
    },
    test: async () => $("video/mp4"),
    add: async e => [...e, "mp4", "m4v"],
    remove: async e => e.filter(e => "mp4" !== e && "m4v" !== e)
  };
  e.s(["detectMp4", 0, G], 954198);
  let H = {
    extension: {
      type: n.ExtensionType.DetectionParser,
      priority: 0
    },
    test: async () => $("video/ogg"),
    add: async e => [...e, "ogv"],
    remove: async e => e.filter(e => "ogv" !== e)
  };
  e.s(["detectOgv", 0, H], 743829);
  let V = {
    extension: {
      type: n.ExtensionType.DetectionParser,
      priority: 0
    },
    test: async () => $("video/webm"),
    add: async e => [...e, "webm"],
    remove: async e => e.filter(e => "webm" !== e)
  };
  e.s(["detectWebm", 0, V], 549140);
  let N = {
    extension: {
      type: n.ExtensionType.DetectionParser,
      priority: 0
    },
    test: async () => M("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
    add: async e => [...e, "webp"],
    remove: async e => e.filter(e => "webp" !== e)
  };
  e.s(["detectWebp", 0, N], 288111);
  var q = e.i(848790),
    Q = e.i(297801);
  let X = class e {
    constructor() {
      this.loadOptions = {
        ...e.defaultOptions
      }, this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
        set: (e, t, s) => (this._parsersValidated = !1, e[t] = s, !0)
      }), this.promiseCache = {};
    }
    reset() {
      this._parsersValidated = !1, this.promiseCache = {};
    }
    _getLoadPromiseAndParser(e, t) {
      let s = {
        promise: null,
        parser: null
      };
      return s.promise = (async () => {
        let r = null,
          a = null;
        if ((t.parser || t.loadParser) && (a = this._parserHash[t.parser || t.loadParser], t.loadParser && (0, F.warn)(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`), a || (0, F.warn)(`[Assets] specified load parser "${t.parser || t.loadParser}" not found while loading ${e}`)), !a) {
          for (let s = 0; s < this.parsers.length; s++) {
            let r = this.parsers[s];
            if (r.load && r.test?.(e, t, this)) {
              a = r;
              break;
            }
          }
          if (!a) return (0, F.warn)(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
        }
        r = await a.load(e, t, this), s.parser = a;
        for (let e = 0; e < this.parsers.length; e++) {
          let a = this.parsers[e];
          a.parse && a.parse && (await a.testParse?.(r, t, this)) && (r = (await a.parse(r, t, this)) || r, s.parser = a);
        }
        return r;
      })(), s;
    }
    async load(t, s) {
      this._parsersValidated || this._validateParsers();
      let {
          onProgress: r,
          onError: a,
          strategy: i,
          retryCount: n,
          retryDelay: o
        } = "function" == typeof s ? {
          ...e.defaultOptions,
          ...this.loadOptions,
          onProgress: s
        } : {
          ...e.defaultOptions,
          ...this.loadOptions,
          ...(s || {})
        },
        l = 0,
        d = {},
        h = (0, Q.isSingleItem)(t),
        c = (0, q.convertToList)(t, e => ({
          alias: [e],
          src: e,
          data: {}
        })),
        p = c.reduce((e, t) => e + (t.progressSize || 1), 0),
        u = c.map(async e => {
          let t = E.path.toAbsolute(e.src);
          !d[e.src] && (await this._loadAssetWithRetry(t, e, {
            onProgress: r,
            onError: a,
            strategy: i,
            retryCount: n,
            retryDelay: o
          }, d), l += e.progressSize || 1, r && r(l / p));
        });
      return await Promise.all(u), h ? d[c[0].src] : d;
    }
    async unload(e) {
      let t = (0, q.convertToList)(e, e => ({
        alias: [e],
        src: e
      })).map(async e => {
        let t = E.path.toAbsolute(e.src),
          s = this.promiseCache[t];
        if (s) {
          let r = await s.promise;
          delete this.promiseCache[t], await s.parser?.unload?.(r, e, this);
        }
      });
      await Promise.all(t);
    }
    _validateParsers() {
      this._parsersValidated = !0, this._parserHash = this._parsers.filter(e => e.name || e.id).reduce((e, t) => (t.name || t.id ? (e[t.name] || e[t.id]) && (0, F.warn)(`[Assets] parser id conflict "${t.id}"`) : (0, F.warn)("[Assets] parser should have an id"), e[t.name] = t, t.id && (e[t.id] = t), e), {});
    }
    async _loadAssetWithRetry(e, t, s, r) {
      let a = 0,
        {
          onError: i,
          strategy: n,
          retryCount: o,
          retryDelay: l
        } = s,
        d = e => new Promise(t => setTimeout(t, e));
      for (;;) try {
        this.promiseCache[e] || (this.promiseCache[e] = this._getLoadPromiseAndParser(e, t)), r[t.src] = await this.promiseCache[e].promise;
        return;
      } catch (c) {
        delete this.promiseCache[e], delete r[t.src], a++;
        let s = "retry" !== n || a > o;
        if ("retry" === n && !s) {
          i && i(c, t), await d(l);
          continue;
        }
        if ("skip" === n) {
          i && i(c, t);
          return;
        }
        i && i(c, t);
        let h = Error(`[Loader.load] Failed to load ${e}.
${c}`);
        throw c instanceof Error && c.stack && (h.stack = c.stack), h;
      }
    }
  };
  function Y(e, t) {
    if (Array.isArray(t)) {
      for (let s of t) if (e.startsWith(`data:${s}`)) return !0;
      return !1;
    }
    return e.startsWith(`data:${t}`);
  }
  function Z(e, t) {
    let s = e.split("?")[0],
      r = E.path.extname(s).toLowerCase();
    return Array.isArray(t) ? t.includes(r) : r === t;
  }
  X.defaultOptions = {
    onProgress: void 0,
    onError: void 0,
    strategy: "throw",
    retryCount: 3,
    retryDelay: 250
  }, e.s(["Loader", 0, X], 63416), e.s(["checkDataUrl", 0, Y], 427315), e.s(["checkExtension", 0, Z], 840383);
  let K = {
    extension: {
      type: n.ExtensionType.LoadParser,
      priority: b.LoaderParserPriority.Low
    },
    name: "loadJson",
    id: "json",
    test: e => Y(e, "application/json") || Z(e, ".json"),
    async load(e) {
      let t = await d.DOMAdapter.get().fetch(e);
      return await t.json();
    }
  };
  e.s(["loadJson", 0, K], 126853);
  let J = {
    name: "loadTxt",
    id: "text",
    extension: {
      type: n.ExtensionType.LoadParser,
      priority: b.LoaderParserPriority.Low,
      name: "loadTxt"
    },
    test: e => Y(e, "text/plain") || Z(e, ".txt"),
    async load(e) {
      let t = await d.DOMAdapter.get().fetch(e);
      return await t.text();
    }
  };
  e.s(["loadTxt", 0, J], 152519);
  let ee = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    et = [".ttf", ".otf", ".woff", ".woff2"],
    es = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
    er = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
  function ea(e) {
    let t = E.path.extname(e),
      s = E.path.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)),
      r = s.length > 0;
    for (let e of s) if (!e.match(er)) {
      r = !1;
      break;
    }
    let a = s.join(" ");
    return r || (a = `"${a.replace(/[\\"]/g, "\\$&")}"`), a;
  }
  let ei = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/,
    en = {
      extension: {
        type: n.ExtensionType.LoadParser,
        priority: b.LoaderParserPriority.Low
      },
      name: "loadWebFont",
      id: "web-font",
      test: e => Y(e, es) || Z(e, et),
      async load(e, t) {
        let s = d.DOMAdapter.get().getFontFaceSet();
        if (s) {
          let r = [],
            a = t.data?.family ?? ea(e),
            i = t.data?.weights?.filter(e => ee.includes(e)) ?? ["normal"],
            n = t.data ?? {};
          for (let t = 0; t < i.length; t++) {
            let o = i[t],
              l = new FontFace(a, `url('${ei.test(e) ? e : encodeURI(e)}')`, {
                ...n,
                weight: o
              });
            await l.load(), s.add(l), r.push(l);
          }
          return R.Cache.has(`${a}-and-url`) ? R.Cache.get(`${a}-and-url`).entries.push({
            url: e,
            faces: r
          }) : R.Cache.set(`${a}-and-url`, {
            entries: [{
              url: e,
              faces: r
            }]
          }), 1 === r.length ? r[0] : r;
        }
        return (0, F.warn)("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
      },
      unload(e) {
        let t = Array.isArray(e) ? e : [e],
          s = t[0].family,
          r = R.Cache.get(`${s}-and-url`),
          a = r.entries.find(e => e.faces.some(e => -1 !== t.indexOf(e)));
        a.faces = a.faces.filter(e => -1 === t.indexOf(e)), 0 === a.faces.length && (r.entries = r.entries.filter(e => e !== a)), t.forEach(e => {
          d.DOMAdapter.get().getFontFaceSet().delete(e);
        }), 0 === r.entries.length && R.Cache.remove(`${s}-and-url`);
      }
    };
  e.s(["getFontFamilyName", 0, ea, "loadWebFont", 0, en], 10264);
  var eo = e.i(24880),
    el = e.i(558001),
    ed = e.i(438323);
  function eh(e, t = 1) {
    let s = ed.Resolver.RETINA_PREFIX?.exec(e);
    return s ? parseFloat(s[1]) : t;
  }
  function ec(e, t, s) {
    e.label = s, e._sourceOrigin = s;
    let r = new S.Texture({
        source: e,
        label: s
      }),
      a = () => {
        delete t.promiseCache[s], R.Cache.has(s) && R.Cache.remove(s);
      };
    return r.source.once("destroy", () => {
      t.promiseCache[s] && ((0, F.warn)("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."), a());
    }), r.once("destroy", () => {
      e.destroyed || ((0, F.warn)("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), a());
    }), r;
  }
  e.s(["getResolutionOfUrl", 0, eh], 86716), e.s(["createTexture", 0, ec], 151032);
  let ep = {
    extension: {
      type: n.ExtensionType.LoadParser,
      priority: b.LoaderParserPriority.Low,
      name: "loadSVG"
    },
    name: "loadSVG",
    id: "svg",
    config: {
      crossOrigin: "anonymous",
      parseAsGraphicsContext: !1
    },
    test: e => Y(e, "image/svg+xml") || Z(e, ".svg"),
    async load(e, t, s) {
      return t.data?.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext ? eg(e) : eu(e, t, s, this.config.crossOrigin);
    },
    unload(e) {
      e.destroy(!0);
    }
  };
  async function eu(e, t, s, r) {
    let a = await d.DOMAdapter.get().fetch(e),
      i = d.DOMAdapter.get().createImage();
    i.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await a.text())}`, i.crossOrigin = r, await i.decode();
    let n = t.data?.width ?? i.width,
      o = t.data?.height ?? i.height,
      l = t.data?.resolution || eh(e),
      h = Math.ceil(n * l),
      c = Math.ceil(o * l),
      p = d.DOMAdapter.get().createCanvas(h, c),
      u = p.getContext("2d");
    u.imageSmoothingEnabled = !0, u.imageSmoothingQuality = "high", u.drawImage(i, 0, 0, n * l, o * l);
    let {
      parseAsGraphicsContext: g,
      ...m
    } = t.data ?? {};
    return ec(new eo.ImageSource({
      resource: p,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: l,
      ...m
    }), s, e);
  }
  async function eg(e) {
    let t = await d.DOMAdapter.get().fetch(e),
      s = await t.text(),
      r = new el.GraphicsContext();
    return r.svg(s), r;
  }
  e.s(["loadSvg", 0, ep], 918655);
  let em = null;
  class eA {
    constructor() {
      em || (em = URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";\n    async function checkImageBitmap() {\n      try {\n        if (typeof createImageBitmap !== "function") return false;\n        const response = await fetch(WHITE_PNG);\n        const imageBlob = await response.blob();\n        const imageBitmap = await createImageBitmap(imageBlob);\n        return imageBitmap.width === 1 && imageBitmap.height === 1;\n      } catch (_e) {\n        return false;\n      }\n    }\n    void checkImageBitmap().then((result) => {\n      self.postMessage(result);\n    });\n\n})();\n'], {
        type: "application/javascript"
      }))), this.worker = new Worker(em);
    }
  }
  eA.revokeObjectURL = function () {
    em && (URL.revokeObjectURL(em), em = null);
  };
  let ef = null;
  class ey {
    constructor() {
      ef || (ef = URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    async function loadImageBitmap(url, alphaMode) {\n      const response = await fetch(url);\n      if (!response.ok) {\n        throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);\n      }\n      const imageBlob = await response.blob();\n      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);\n    }\n    self.onmessage = async (event) => {\n      try {\n        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);\n        self.postMessage({\n          data: imageBitmap,\n          uuid: event.data.uuid,\n          id: event.data.id\n        }, [imageBitmap]);\n      } catch (e) {\n        self.postMessage({\n          error: e,\n          uuid: event.data.uuid,\n          id: event.data.id\n        });\n      }\n    };\n\n})();\n'], {
        type: "application/javascript"
      }))), this.worker = new Worker(ef);
    }
  }
  ey.revokeObjectURL = function () {
    ef && (URL.revokeObjectURL(ef), ef = null);
  };
  let ev = 0,
    e_ = new class {
      constructor() {
        this._initialized = !1, this._createdWorkers = 0, this._workerPool = [], this._queue = [], this._resolveHash = {};
      }
      isImageBitmapSupported() {
        return void 0 !== this._isImageBitmapSupported || (this._isImageBitmapSupported = new Promise(e => {
          let {
            worker: t
          } = new eA();
          t.addEventListener("message", s => {
            t.terminate(), eA.revokeObjectURL(), e(s.data);
          });
        })), this._isImageBitmapSupported;
      }
      loadImageBitmap(e, t) {
        return this._run("loadImageBitmap", [e, t?.data?.alphaMode]);
      }
      async _initWorkers() {
        this._initialized || (this._initialized = !0);
      }
      _getWorker() {
        void 0 === r && (r = navigator.hardwareConcurrency || 4);
        let e = this._workerPool.pop();
        return !e && this._createdWorkers < r && (this._createdWorkers++, (e = new ey().worker).addEventListener("message", e => {
          this._complete(e.data), this._returnWorker(e.target), this._next();
        })), e;
      }
      _returnWorker(e) {
        this._workerPool.push(e);
      }
      _complete(e) {
        this._resolveHash[e.uuid] && (void 0 !== e.error ? this._resolveHash[e.uuid].reject(e.error) : this._resolveHash[e.uuid].resolve(e.data), delete this._resolveHash[e.uuid]);
      }
      async _run(e, t) {
        await this._initWorkers();
        let s = new Promise((s, r) => {
          this._queue.push({
            id: e,
            arguments: t,
            resolve: s,
            reject: r
          });
        });
        return this._next(), s;
      }
      _next() {
        if (!this._queue.length) return;
        let e = this._getWorker();
        if (!e) return;
        let t = this._queue.pop(),
          s = t.id;
        this._resolveHash[ev] = {
          resolve: t.resolve,
          reject: t.reject
        }, e.postMessage({
          data: t.arguments,
          uuid: ev++,
          id: s
        });
      }
      reset() {
        this._workerPool.forEach(e => e.terminate()), this._workerPool.length = 0, Object.values(this._resolveHash).forEach(({
          reject: e
        }) => {
          e?.(Error("WorkerManager has been reset before completion"));
        }), this._resolveHash = {}, this._queue.length = 0, this._initialized = !1, this._createdWorkers = 0;
      }
    }();
  e.s(["WorkerManager", 0, e_], 508160);
  let ew = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
    ex = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  async function eb(e, t) {
    let s = await d.DOMAdapter.get().fetch(e);
    if (!s.ok) throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${s.status} ${s.statusText}`);
    let r = await s.blob();
    return t?.data?.alphaMode === "premultiplied-alpha" ? createImageBitmap(r, {
      premultiplyAlpha: "none"
    }) : createImageBitmap(r);
  }
  let eT = {
    name: "loadTextures",
    id: "texture",
    extension: {
      type: n.ExtensionType.LoadParser,
      priority: b.LoaderParserPriority.High,
      name: "loadTextures"
    },
    config: {
      preferWorkers: !0,
      preferCreateImageBitmap: !0,
      crossOrigin: "anonymous"
    },
    test: e => Y(e, ex) || Z(e, ew),
    async load(e, t, s) {
      let r = null;
      return r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && (await e_.isImageBitmapSupported()) ? await e_.loadImageBitmap(e, t) : await eb(e, t) : await new Promise((t, s) => {
        (r = d.DOMAdapter.get().createImage()).crossOrigin = this.config.crossOrigin, r.src = e, r.complete ? t(r) : (r.onload = () => {
          t(r);
        }, r.onerror = s);
      }), ec(new eo.ImageSource({
        resource: r,
        alphaMode: "premultiply-alpha-on-upload",
        resolution: t.data?.resolution || eh(e),
        ...t.data
      }), s, e);
    },
    unload(e) {
      e.destroy(!0);
    }
  };
  e.s(["loadImageBitmap", 0, eb, "loadTextures", 0, eT], 368818);
  var eE = e.i(613514),
    eP = e.i(298948);
  let ek = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"];
  function eI(e, t, s) {
    void 0 !== s || t.startsWith("data:") ? !1 !== s && (e.crossOrigin = "string" == typeof s ? s : "anonymous") : e.crossOrigin = eC(t);
  }
  function eL(e) {
    return new Promise((t, s) => {
      function r() {
        i(), t();
      }
      function a(e) {
        i(), s(e);
      }
      function i() {
        e.removeEventListener("canplaythrough", r), e.removeEventListener("error", a);
      }
      e.addEventListener("canplaythrough", r), e.addEventListener("error", a), e.load();
    });
  }
  function eC(e, t = globalThis.location) {
    if (e.startsWith("data:")) return "";
    t || (t = globalThis.location);
    let s = new URL(e, document.baseURI);
    return s.hostname !== t.hostname || s.port !== t.port || s.protocol !== t.protocol ? "anonymous" : "";
  }
  let eB = {
    name: "loadVideo",
    id: "video",
    extension: {
      type: n.ExtensionType.LoadParser,
      name: "loadVideo"
    },
    test(e) {
      if (!a || !i) {
        let {
          validVideoExtensions: e,
          validVideoMime: t
        } = function () {
          let e = [],
            t = [];
          for (let s of ek) {
            let r = eE.VideoSource.MIME_TYPES[s.substring(1)] || `video/${s.substring(1)}`;
            $(r) && (e.push(s), t.includes(r) || t.push(r));
          }
          return {
            validVideoExtensions: e,
            validVideoMime: t
          };
        }();
        a = e, i = t;
      }
      let t = Y(e, i),
        s = Z(e, a);
      return t || s;
    },
    async load(e, t, s) {
      let r,
        a = {
          ...eE.VideoSource.defaultOptions,
          resolution: t.data?.resolution || eh(e),
          alphaMode: t.data?.alphaMode || (await (0, eP.detectVideoAlphaMode)()),
          ...t.data
        },
        i = document.createElement("video"),
        n = {
          preload: !1 !== a.autoLoad ? "auto" : void 0,
          "webkit-playsinline": !1 !== a.playsinline ? "" : void 0,
          playsinline: !1 !== a.playsinline ? "" : void 0,
          muted: !0 === a.muted ? "" : void 0,
          loop: !0 === a.loop ? "" : void 0,
          autoplay: !1 !== a.autoPlay ? "" : void 0
        };
      Object.keys(n).forEach(e => {
        let t = n[e];
        void 0 !== t && i.setAttribute(e, t);
      }), !0 === a.muted && (i.muted = !0), eI(i, e, a.crossorigin);
      let o = document.createElement("source");
      if (a.mime) r = a.mime;else if (e.startsWith("data:")) r = e.slice(5, e.indexOf(";"));else if (!e.startsWith("blob:")) {
        let t = e.split("?")[0].slice(e.lastIndexOf(".") + 1).toLowerCase();
        r = eE.VideoSource.MIME_TYPES[t] || `video/${t}`;
      }
      return o.src = e, r && (o.type = r), new Promise((r, n) => {
        async function l() {
          let n = new eE.VideoSource({
            ...a,
            resource: i
          });
          h(), t.data.preload && (await eL(i)), r(ec(n, s, e));
        }
        function d(e) {
          h(), n(e);
        }
        function h() {
          i.removeEventListener("canplay", l), i.removeEventListener("error", d), o.removeEventListener("error", d);
        }
        a.preload && !a.autoPlay && i.load(), i.addEventListener("canplay", l), i.addEventListener("error", d), o.addEventListener("error", d), i.appendChild(o);
      });
    },
    unload(e) {
      e.destroy(!0);
    }
  };
  e.s(["crossOrigin", 0, eI, "determineCrossOrigin", 0, eC, "loadVideoTextures", 0, eB, "preloadVideo", 0, eL], 212218);
  let eF = {
    extension: {
      type: n.ExtensionType.ResolveParser,
      name: "resolveTexture"
    },
    test: eT.test,
    parse: e => ({
      resolution: parseFloat(ed.Resolver.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
      format: e.split(".").pop(),
      src: e
    })
  };
  e.s(["resolveTextureUrl", 0, eF], 167993);
  let eO = {
    extension: {
      type: n.ExtensionType.ResolveParser,
      priority: -2,
      name: "resolveJson"
    },
    test: e => ed.Resolver.RETINA_PREFIX.test(e) && e.endsWith(".json"),
    parse: eF.parse
  };
  e.s(["resolveJsonUrl", 0, eO], 317365);
  class eR {
    constructor() {
      this._detections = [], this._initialized = !1, this.resolver = new ed.Resolver(), this.loader = new X(), this.cache = R.Cache, this._backgroundLoader = new O(this.loader), this._backgroundLoader.active = !0, this.reset();
    }
    async init(e = {}) {
      if (this._initialized) return void (0, F.warn)("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      if (this._initialized = !0, e.defaultSearchParams && this.resolver.setDefaultSearchParams(e.defaultSearchParams), e.basePath && (this.resolver.basePath = e.basePath), e.bundleIdentifier && this.resolver.setBundleIdentifier(e.bundleIdentifier), e.manifest) {
        let t = e.manifest;
        "string" == typeof t && (t = await this.load(t)), this.resolver.addManifest(t);
      }
      let t = e.texturePreference?.resolution ?? 1,
        s = await this._detectFormats({
          preferredFormats: e.texturePreference?.format,
          skipDetections: e.skipDetections,
          detections: this._detections
        });
      this.resolver.prefer({
        params: {
          format: s,
          resolution: "number" == typeof t ? [t] : t
        }
      }), e.preferences && this.setPreferences(e.preferences), e.loadOptions && (this.loader.loadOptions = {
        ...this.loader.loadOptions,
        ...e.loadOptions
      });
    }
    add(e) {
      this.resolver.add(e);
    }
    async load(e, t) {
      this._initialized || (await this.init());
      let s = (0, Q.isSingleItem)(e),
        r = (0, q.convertToList)(e).map(e => {
          if ("string" != typeof e) {
            let t = this.resolver.getAlias(e);
            return t.some(e => !this.resolver.hasKey(e)) && this.add(e), Array.isArray(t) ? t[0] : t;
          }
          return this.resolver.hasKey(e) || this.add({
            alias: e,
            src: e
          }), e;
        }),
        a = this.resolver.resolve(r),
        i = await this._mapLoadToResolve(a, t);
      return s ? i[r[0]] : i;
    }
    addBundle(e, t) {
      this.resolver.addBundle(e, t);
    }
    async loadBundle(e, t) {
      this._initialized || (await this.init());
      let s = !1;
      "string" == typeof e && (s = !0, e = [e]);
      let r = this.resolver.resolveBundle(e),
        a = {},
        i = Object.keys(r),
        n = 0,
        o = [],
        l = i.map((e, s) => {
          let i = r[e],
            l = [...new Set(Object.values(i).flat())].reduce((e, t) => e + (t.progressSize || 1), 0);
          return o.push(0), n += l, this._mapLoadToResolve(i, e => {
            o[s] = e * l, t?.(o.reduce((e, t) => e + t, 0) / n);
          }).then(t => {
            a[e] = t;
          });
        });
      return await Promise.all(l), s ? a[e[0]] : a;
    }
    async backgroundLoad(e) {
      this._initialized || (await this.init()), "string" == typeof e && (e = [e]);
      let t = this.resolver.resolve(e);
      this._backgroundLoader.add(Object.values(t));
    }
    async backgroundLoadBundle(e) {
      this._initialized || (await this.init()), "string" == typeof e && (e = [e]), Object.values(this.resolver.resolveBundle(e)).forEach(e => {
        this._backgroundLoader.add(Object.values(e));
      });
    }
    reset() {
      this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
    }
    get(e) {
      if ("string" == typeof e) return R.Cache.get(e);
      let t = {};
      for (let s = 0; s < e.length; s++) t[s] = R.Cache.get(e[s]);
      return t;
    }
    async _mapLoadToResolve(e, t) {
      let s = [...new Set(Object.values(e))];
      this._backgroundLoader.active = !1;
      let r = await this.loader.load(s, t);
      this._backgroundLoader.active = !0;
      let a = {};
      return s.forEach(e => {
        let t = r[e.src],
          s = [e.src];
        e.alias && s.push(...e.alias), s.forEach(e => {
          a[e] = t;
        }), R.Cache.set(s, t);
      }), a;
    }
    async unload(e) {
      this._initialized || (await this.init());
      let t = (0, q.convertToList)(e).map(e => "string" != typeof e ? e.src : e),
        s = this.resolver.resolve(t);
      await this._unloadFromResolved(s);
    }
    async unloadBundle(e) {
      this._initialized || (await this.init()), e = (0, q.convertToList)(e);
      let t = this.resolver.resolveBundle(e),
        s = Object.keys(t).map(e => this._unloadFromResolved(t[e]));
      await Promise.all(s);
    }
    async _unloadFromResolved(e) {
      let t = Object.values(e);
      t.forEach(e => {
        R.Cache.remove(e.src);
      }), await this.loader.unload(t);
    }
    async _detectFormats(e) {
      let t = [];
      for (let s of (e.preferredFormats && (t = Array.isArray(e.preferredFormats) ? e.preferredFormats : [e.preferredFormats]), e.detections)) e.skipDetections || (await s.test()) ? t = await s.add(t) : e.skipDetections || (t = await s.remove(t));
      return t = t.filter((e, s) => t.indexOf(e) === s);
    }
    get detections() {
      return this._detections;
    }
    setPreferences(e) {
      this.loader.parsers.forEach(t => {
        t.config && Object.keys(t.config).filter(t => t in e).forEach(s => {
          t.config[s] = e[s];
        });
      });
    }
  }
  let eS = new eR();
  n.extensions.handleByList(n.ExtensionType.LoadParser, eS.loader.parsers).handleByList(n.ExtensionType.ResolveParser, eS.resolver.parsers).handleByList(n.ExtensionType.CacheParser, eS.cache.parsers).handleByList(n.ExtensionType.DetectionParser, eS.detections), n.extensions.add(z, U, j, N, G, H, V, K, J, en, ep, eT, eB, B, C, eF, eO);
  let ez = {
    loader: n.ExtensionType.LoadParser,
    resolver: n.ExtensionType.ResolveParser,
    cache: n.ExtensionType.CacheParser,
    detection: n.ExtensionType.DetectionParser
  };
  n.extensions.handle(n.ExtensionType.Asset, e => {
    let t = e.ref;
    Object.entries(ez).filter(([e]) => !!t[e]).forEach(([e, s]) => n.extensions.add(Object.assign(t[e], {
      extension: t[e].extension ?? s
    })));
  }, e => {
    let t = e.ref;
    Object.keys(ez).filter(e => !!t[e]).forEach(e => n.extensions.remove(t[e]));
  }), e.s(["Assets", 0, eS, "AssetsClass", 0, eR], 557305);
  var eM = e.i(465816);
  class ej extends eM.Sprite {
    constructor(...e) {
      let t = e[0];
      Array.isArray(e[0]) && (t = {
        textures: e[0],
        autoUpdate: e[1]
      });
      const {
          animationSpeed: s = 1,
          autoPlay: r = !1,
          autoUpdate: a = !0,
          loop: i = !0,
          onComplete: n = null,
          onFrameChange: o = null,
          onLoop: l = null,
          textures: d,
          updateAnchor: h = !1,
          ...c
        } = t,
        [p] = d;
      super({
        ...c,
        texture: p instanceof S.Texture ? p : p.texture
      }), this._textures = null, this._durations = null, this._autoUpdate = a, this._isConnectedToTicker = !1, this.animationSpeed = s, this.loop = i, this.updateAnchor = h, this.onComplete = n, this.onFrameChange = o, this.onLoop = l, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = d, r && this.play();
    }
    stop() {
      this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (_.Ticker.shared.remove(this.update, this), this._isConnectedToTicker = !1));
    }
    play() {
      this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (_.Ticker.shared.add(this.update, this, v.UPDATE_PRIORITY.HIGH), this._isConnectedToTicker = !0));
    }
    gotoAndStop(e) {
      this.stop(), this.currentFrame = e;
    }
    gotoAndPlay(e) {
      this.currentFrame = e, this.play();
    }
    update(e) {
      if (!this._playing) return;
      let t = e.deltaTime,
        s = this.animationSpeed * t,
        r = this.currentFrame;
      if (null !== this._durations) {
        let e = this._currentTime % 1 * this._durations[this.currentFrame];
        for (e += s / 60 * 1e3; e < 0;) this._currentTime--, e += this._durations[this.currentFrame];
        let r = Math.sign(this.animationSpeed * t);
        for (this._currentTime = Math.floor(this._currentTime); e >= this._durations[this.currentFrame];) e -= this._durations[this.currentFrame] * r, this._currentTime += r;
        this._currentTime += e / this._durations[this.currentFrame];
      } else this._currentTime += s;
      this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(), this._updateTexture());
    }
    _updateTexture() {
      let e = this.currentFrame;
      this._previousFrame !== e && (this._previousFrame = e, this.texture = this._textures[e], this.updateAnchor && this.texture.defaultAnchor && this.anchor.copyFrom(this.texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
    }
    destroy(e = !1) {
      if ("boolean" == typeof e ? e : e?.texture) {
        let t = "boolean" == typeof e ? e : e?.textureSource;
        this._textures.forEach(e => {
          this.texture !== e && e.destroy(t);
        });
      }
      this._textures = [], this._durations = null, this.stop(), super.destroy(e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
    }
    static fromFrames(e) {
      let t = [];
      for (let s = 0; s < e.length; ++s) t.push(S.Texture.from(e[s]));
      return new ej(t);
    }
    static fromImages(e) {
      let t = [];
      for (let s = 0; s < e.length; ++s) t.push(S.Texture.from(e[s]));
      return new ej(t);
    }
    get totalFrames() {
      return this._textures.length;
    }
    get textures() {
      return this._textures;
    }
    set textures(e) {
      if (e[0] instanceof S.Texture) this._textures = e, this._durations = null;else {
        this._textures = [], this._durations = [];
        for (let t = 0; t < e.length; t++) this._textures.push(e[t].texture), this._durations.push(e[t].time);
      }
      this._previousFrame = null, this.gotoAndStop(0), this._updateTexture();
    }
    get currentFrame() {
      let e = Math.floor(this._currentTime) % this._textures.length;
      return e < 0 && (e += this._textures.length), e;
    }
    set currentFrame(e) {
      if (e < 0 || e > this.totalFrames - 1) throw Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
      let t = this.currentFrame;
      this._currentTime = e, t !== this.currentFrame && this._updateTexture();
    }
    get playing() {
      return this._playing;
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(e) {
      e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isConnectedToTicker ? (_.Ticker.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (_.Ticker.shared.add(this.update, this), this._isConnectedToTicker = !0));
    }
  }
  e.s(["AnimatedSprite", 0, ej], 96207);
};
