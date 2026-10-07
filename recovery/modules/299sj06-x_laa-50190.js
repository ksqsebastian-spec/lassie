// Recovered from 299sj06-x_laa.js. Runtime module IDs: 50190, 55742, 294780.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(449752),
    i = e.i(963345),
    n = e.i(453549);
  let a = new (e.i(389474).Matrix)();
  function s(e, t) {
    t.clear();
    let r = t.matrix;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (i.globalDisplayStatus < 7) continue;
      let n = i.renderGroup ?? i.parentRenderGroup;
      n?.isCachedAsTexture ? t.matrix = a.copyFrom(n.textureOffsetInverseTransform).append(i.worldTransform) : n?._parentCacheAsTextureRenderGroup ? t.matrix = a.copyFrom(n._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform) : t.matrix = i.worldTransform, t.addBounds(i.bounds);
    }
    return t.matrix = r, t;
  }
  e.s(["getGlobalRenderableBounds", 0, s], 55742);
  var l = e.i(901548);
  let o = new n.Bounds();
  function u(e, t, r, i, n = !1) {
    o.minX = 0, o.minY = 0, o.maxX = e.width / i | 0, o.maxY = e.height / i | 0;
    let a = l.TexturePool.getOptimalTexture(o.width, o.height, i, !1, n);
    return a.source.uploadMethodId = "image", a.source.resource = e, a.source.alphaMode = "premultiply-alpha-on-upload", a.frame.width = t / i, a.frame.height = r / i, a.source.emit("update", a.source), a.updateUvs(), a;
  }
  function d(e) {
    return "function" == typeof e.getCanvasFilterString;
  }
  e.s(["getPo2TextureFromSource", 0, u], 294780);
  class h {
    constructor() {
      this.skip = !1, this.useClip = !1, this.filters = null, this.container = null, this.bounds = new n.Bounds(), this.cssFilterString = "";
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
      let n = this.renderer.canvasContext.activeContext,
        a = n.filter || "none";
      if (this._savedStates.push({
        filter: a,
        alphaMultiplier: this._alphaMultiplier
      }), t.useClip && Number.isFinite(t.bounds.width) && Number.isFinite(t.bounds.height) && t.bounds.width > 0 && t.bounds.height > 0) {
        let e = this.renderer.canvasContext.activeResolution || 1;
        n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.rect(t.bounds.x * e, t.bounds.y * e, t.bounds.width * e, t.bounds.height * e), n.clip();
      } else t.useClip = !1;
      t.cssFilterString && (n.filter = "none" !== a ? `${a} ${t.cssFilterString}` : t.cssFilterString);
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
      let n = [];
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
        t && n.push(t);
      }
      if (0 === n.length) return e;
      let a = r.canvasUtils.getCanvasSource(e);
      if (!a) return e;
      let s = e.frame,
        l = e.source._resolution ?? e.source.resolution ?? 1,
        o = s.width,
        h = s.height,
        {
          canvas: c,
          context: p
        } = i.CanvasPool.getOptimalCanvasAndContext(o, h, l);
      p.setTransform(1, 0, 0, 1, 0, 0), p.clearRect(0, 0, c.width, c.height), n.length && (p.filter = n.join(" "));
      let f = s.x * l,
        g = s.y * l,
        x = o * l,
        m = h * l;
      return p.drawImage(a, f, g, x, m, 0, 0, x, m), p.filter = "none", p.globalAlpha = 1, u(c, o, h, l);
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
