// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 50190, 55742, 294780.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(449752),
    i = e.i(963345),
    a = e.i(453549);
  let n = new (e.i(389474).Matrix)();
  function s(e, t) {
    t.clear();
    let r = t.matrix;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (i.globalDisplayStatus < 7) continue;
      let a = i.renderGroup ?? i.parentRenderGroup;
      a?.isCachedAsTexture ? t.matrix = n.copyFrom(a.textureOffsetInverseTransform).append(i.worldTransform) : a?._parentCacheAsTextureRenderGroup ? t.matrix = n.copyFrom(a._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform) : t.matrix = i.worldTransform, t.addBounds(i.bounds);
    }
    return t.matrix = r, t;
  }
  e.s(["getGlobalRenderableBounds", 0, s], 55742);
  var o = e.i(901548);
  let l = new a.Bounds();
  function u(e, t, r, i, a = !1) {
    l.minX = 0, l.minY = 0, l.maxX = e.width / i | 0, l.maxY = e.height / i | 0;
    let n = o.TexturePool.getOptimalTexture(l.width, l.height, i, !1, a);
    return n.source.uploadMethodId = "image", n.source.resource = e, n.source.alphaMode = "premultiply-alpha-on-upload", n.frame.width = t / i, n.frame.height = r / i, n.source.emit("update", n.source), n.updateUvs(), n;
  }
  function d(e) {
    return "function" == typeof e.getCanvasFilterString;
  }
  e.s(["getPo2TextureFromSource", 0, u], 294780);
  class h {
    constructor() {
      this.skip = !1, this.useClip = !1, this.filters = null, this.container = null, this.bounds = new a.Bounds(), this.cssFilterString = "";
    }
  }
  class c {
    constructor(e) {
      this._filterStack = [], this._filterStackIndex = 0, this._savedStates = [], this._alphaMultiplier = 1, this._warnedFilterTypes = new Set(), this.renderer = e;
    }
    push(e) {
      let t = this._pushFilterFrame(),
        r = e.filterEffect.filters;
      if (t.skip = !1, t.useClip = !1, t.filters = r, t.container = e.container, t.cssFilterString = "", r.every(e => !e.enabled)) {
        t.skip = !0;
        return;
      }
      let i = [];
      for (let e of r) {
        if (!e.enabled) continue;
        if (!d(e)) {
          this._warnUnsupportedFilter(e);
          continue;
        }
        let t = e.getCanvasFilterString();
        if (null === t) {
          this._warnUnsupportedFilter(e);
          continue;
        }
        t && i.push(t);
      }
      if (0 === i.length) {
        t.skip = !0;
        return;
      }
      t.cssFilterString = i.join(" "), this._calculateFilterArea(e, t.bounds), t.useClip = !!e.filterEffect.filterArea;
      let a = this.renderer.canvasContext.activeContext,
        n = a.filter || "none";
      if (this._savedStates.push({
        filter: n,
        alphaMultiplier: this._alphaMultiplier
      }), t.useClip && Number.isFinite(t.bounds.width) && Number.isFinite(t.bounds.height) && t.bounds.width > 0 && t.bounds.height > 0) {
        let e = this.renderer.canvasContext.activeResolution || 1;
        a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.beginPath(), a.rect(t.bounds.x * e, t.bounds.y * e, t.bounds.width * e, t.bounds.height * e), a.clip();
      } else t.useClip = !1;
      t.cssFilterString && (a.filter = "none" !== n ? `${n} ${t.cssFilterString}` : t.cssFilterString);
    }
    pop() {
      let e = this._popFilterFrame();
      if (e.skip) return;
      let t = this._savedStates.pop();
      if (!t) return;
      let r = this.renderer.canvasContext.activeContext;
      e.useClip ? r.restore() : r.filter = t.filter, this._alphaMultiplier = t.alphaMultiplier;
    }
    generateFilteredTexture({
      texture: e,
      filters: t
    }) {
      if (!t?.length || t.every(e => !e.enabled)) return e;
      let a = [];
      for (let e of t) {
        if (!e.enabled) continue;
        if (!d(e)) {
          this._warnUnsupportedFilter(e);
          continue;
        }
        let t = e.getCanvasFilterString();
        if (null === t) {
          this._warnUnsupportedFilter(e);
          continue;
        }
        t && a.push(t);
      }
      if (0 === a.length) return e;
      let n = r.canvasUtils.getCanvasSource(e);
      if (!n) return e;
      let s = e.frame,
        o = e.source._resolution ?? e.source.resolution ?? 1,
        l = s.width,
        h = s.height,
        {
          canvas: c,
          context: f
        } = i.CanvasPool.getOptimalCanvasAndContext(l, h, o);
      f.setTransform(1, 0, 0, 1, 0, 0), f.clearRect(0, 0, c.width, c.height), a.length && (f.filter = a.join(" "));
      let p = s.x * o,
        m = s.y * o,
        v = l * o,
        x = h * o;
      return f.drawImage(n, p, m, v, x, 0, 0, v, x), f.filter = "none", f.globalAlpha = 1, u(c, l, h, o);
    }
    _calculateFilterArea(e, t) {
      if (e.renderables ? s(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        let r = e.container.renderGroup || e.container.parentRenderGroup,
          i = r?.cacheToLocalTransform;
        i && t.applyMatrix(i);
      }
    }
    _warnUnsupportedFilter(e) {
      let t = e?.constructor?.name || "Filter";
      this._warnedFilterTypes.has(t) || (this._warnedFilterTypes.add(t), console.warn(`CanvasRenderer: filter "${t}" is not supported in Canvas2D and will be skipped.`));
    }
    get alphaMultiplier() {
      return this._alphaMultiplier;
    }
    _pushFilterFrame() {
      let e = this._filterStack[this._filterStackIndex];
      return e || (e = this._filterStack[this._filterStackIndex] = new h()), this._filterStackIndex++, e;
    }
    _popFilterFrame() {
      return this._filterStackIndex <= 0 ? this._filterStack[0] : (this._filterStackIndex--, this._filterStack[this._filterStackIndex]);
    }
    destroy() {
      this._filterStack = null, this._savedStates = null, this._warnedFilterTypes = null, this._alphaMultiplier = 1;
    }
  }
  c.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "filter"
  }, e.s(["CanvasFilterSystem", 0, c, "isCanvasFilterCapable", 0, d], 50190);
};
