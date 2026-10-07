// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 197380.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(785667),
    i = e.i(389474),
    a = e.i(175444),
    n = e.i(719885),
    s = e.i(153594),
    o = e.i(337654),
    l = e.i(901548),
    u = e.i(162450),
    d = e.i(453549),
    h = e.i(55742),
    c = e.i(562140);
  let f = new n.Geometry({
    attributes: {
      aPosition: {
        buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        format: "float32x2",
        stride: 8,
        offset: 0
      }
    },
    indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3])
  });
  class p {
    constructor() {
      this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new d.Bounds(), this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1;
    }
  }
  class m {
    constructor(e) {
      this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new s.UniformGroup({
        uInputSize: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uInputPixel: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uInputClamp: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uOutputFrame: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uGlobalFrame: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uOutputTexture: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        }
      }), this._globalFilterBindGroup = new a.BindGroup({}), this.renderer = e;
    }
    get activeBackTexture() {
      return this._activeFilterData?.backTexture;
    }
    push(e) {
      let t = this.renderer,
        r = e.filterEffect.filters,
        i = this._pushFilterData();
      i.skip = !1, i.filters = r, i.container = e.container, i.outputRenderSurface = t.renderTarget.renderSurface;
      let a = t.renderTarget.renderTarget.colorTexture.source,
        n = a.resolution,
        s = a.antialias;
      if (r.every(e => !e.enabled)) {
        i.skip = !0;
        return;
      }
      let o = i.bounds;
      if (this._calculateFilterArea(e, o), this._calculateFilterBounds(i, t.renderTarget.rootViewPort, s, n, 1), i.skip) return;
      let l = this._getPreviousFilterData(),
        u = this._findFilterResolution(n),
        d = 0,
        h = 0;
      l && (d = l.bounds.minX, h = l.bounds.minY), this._calculateGlobalFrame(i, d, h, u, a.width, a.height), this._setupFilterTextures(i, o, t, l);
    }
    generateFilteredTexture({
      texture: e,
      filters: t
    }) {
      let r = this._pushFilterData();
      this._activeFilterData = r, r.skip = !1, r.filters = t;
      let i = e.source,
        a = i.resolution,
        n = i.antialias;
      if (t.every(e => !e.enabled)) return r.skip = !0, e;
      let s = r.bounds;
      if (s.addRect(e.frame), this._calculateFilterBounds(r, s.rectangle, n, a, 0), r.skip) return e;
      this._calculateGlobalFrame(r, 0, 0, a, i.width, i.height), r.outputRenderSurface = l.TexturePool.getOptimalTexture(s.width, s.height, r.resolution, r.antialias), r.backTexture = o.Texture.EMPTY, r.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0);
      let u = r.outputRenderSurface;
      return u.source.alphaMode = "premultiplied-alpha", u;
    }
    pop() {
      let e = this.renderer,
        t = this._popFilterData();
      t.skip || (e.globalUniforms.pop(), e.renderTarget.finishRenderPass(), this._activeFilterData = t, this._applyFiltersToTexture(t, !1), t.blendRequired && l.TexturePool.returnTexture(t.backTexture), l.TexturePool.returnTexture(t.inputTexture));
    }
    getBackTexture(e, t, r) {
      let i = e.colorTexture.source._resolution,
        a = l.TexturePool.getOptimalTexture(t.width, t.height, i, !1),
        n = t.minX,
        s = t.minY;
      r && (n -= r.minX, s -= r.minY), n = Math.floor(n * i), s = Math.floor(s * i);
      let o = Math.ceil(t.width * i),
        u = Math.ceil(t.height * i);
      return this.renderer.renderTarget.copyToTexture(e, a, {
        x: n,
        y: s
      }, {
        width: o,
        height: u
      }, {
        x: 0,
        y: 0
      }), a;
    }
    applyFilter(e, t, r, i) {
      let a = this.renderer,
        n = this._activeFilterData,
        s = n.outputRenderSurface === r,
        o = a.renderTarget.rootRenderTarget.colorTexture.source._resolution,
        l = this._findFilterResolution(o),
        u = 0,
        d = 0;
      if (s) {
        let e = this._findPreviousFilterOffset();
        u = e.x, d = e.y;
      }
      this._updateFilterUniforms(t, r, n, u, d, l, s, i);
      let h = e.enabled ? e : this._getPassthroughFilter();
      this._setupBindGroupsAndRender(h, t, a);
    }
    calculateSpriteMatrix(e, t) {
      let r = this._activeFilterData,
        a = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY),
        n = t.worldTransform.copyTo(i.Matrix.shared),
        s = t.renderGroup || t.parentRenderGroup;
      return s && s.cacheToLocalTransform && n.prepend(s.cacheToLocalTransform), n.invert(), a.prepend(n), a.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), a.translate(t.anchor.x, t.anchor.y), a;
    }
    destroy() {
      this._passthroughFilter?.destroy(!0), this._passthroughFilter = null;
    }
    _getPassthroughFilter() {
      return this._passthroughFilter ?? (this._passthroughFilter = new r.PassthroughFilter()), this._passthroughFilter;
    }
    _setupBindGroupsAndRender(e, t, r) {
      if (r.renderPipes.uniformBatch) {
        let e = r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
        this._globalFilterBindGroup.setResource(e, 0);
      } else this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0);
      this._globalFilterBindGroup.setResource(t.source, 1), this._globalFilterBindGroup.setResource(t.source.style, 2), e.groups[0] = this._globalFilterBindGroup, r.encoder.draw({
        geometry: f,
        shader: e,
        state: e._state,
        topology: "triangle-list"
      }), r.type === u.RendererType.WEBGL && r.renderTarget.finishRenderPass();
    }
    _setupFilterTextures(e, t, r, i) {
      if (e.backTexture = o.Texture.EMPTY, e.inputTexture = l.TexturePool.getOptimalTexture(t.width, t.height, e.resolution, e.antialias), e.blendRequired) {
        r.renderTarget.finishRenderPass();
        let a = r.renderTarget.getRenderTarget(e.outputRenderSurface);
        e.backTexture = this.getBackTexture(a, t, i?.bounds);
      }
      r.renderTarget.bind(e.inputTexture, !0), r.globalUniforms.push({
        offset: t
      });
    }
    _calculateGlobalFrame(e, t, r, i, a, n) {
      let s = e.globalFrame;
      s.x = t * i, s.y = r * i, s.width = a * i, s.height = n * i;
    }
    _updateFilterUniforms(e, t, r, i, a, n, s, l) {
      let u = this._filterGlobalUniforms.uniforms,
        d = u.uOutputFrame,
        h = u.uInputSize,
        c = u.uInputPixel,
        f = u.uInputClamp,
        p = u.uGlobalFrame,
        m = u.uOutputTexture;
      s ? (d[0] = r.bounds.minX - i, d[1] = r.bounds.minY - a) : (d[0] = 0, d[1] = 0), d[2] = e.frame.width, d[3] = e.frame.height, h[0] = e.source.width, h[1] = e.source.height, h[2] = 1 / h[0], h[3] = 1 / h[1], c[0] = e.source.pixelWidth, c[1] = e.source.pixelHeight, c[2] = 1 / c[0], c[3] = 1 / c[1], f[0] = .5 * c[2], f[1] = .5 * c[3], f[2] = e.frame.width * h[2] - .5 * c[2], f[3] = e.frame.height * h[3] - .5 * c[3];
      let v = this.renderer.renderTarget.rootRenderTarget.colorTexture;
      p[0] = i * n, p[1] = a * n, p[2] = v.source.width * n, p[3] = v.source.height * n, t instanceof o.Texture && (t.source.resource = null);
      let x = this.renderer.renderTarget.getRenderTarget(t);
      this.renderer.renderTarget.bind(t, !!l), t instanceof o.Texture ? (m[0] = t.frame.width, m[1] = t.frame.height) : (m[0] = x.width, m[1] = x.height), m[2] = x.isRoot ? -1 : 1, this._filterGlobalUniforms.update();
    }
    _findFilterResolution(e) {
      let t = this._filterStackIndex - 1;
      for (; t > 0 && this._filterStack[t].skip;) --t;
      return t > 0 && this._filterStack[t].inputTexture ? this._filterStack[t].inputTexture.source._resolution : e;
    }
    _findPreviousFilterOffset() {
      let e = 0,
        t = 0,
        r = this._filterStackIndex;
      for (; r > 0;) {
        r--;
        let i = this._filterStack[r];
        if (!i.skip) {
          e = i.bounds.minX, t = i.bounds.minY;
          break;
        }
      }
      return {
        x: e,
        y: t
      };
    }
    _calculateFilterArea(e, t) {
      if (e.renderables ? (0, h.getGlobalRenderableBounds)(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        let r = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
        r && t.applyMatrix(r);
      }
    }
    _applyFiltersToTexture(e, t) {
      let r = e.inputTexture,
        i = e.bounds,
        a = e.filters,
        n = e.firstEnabledIndex,
        s = e.lastEnabledIndex;
      if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), n === s) a[n].apply(this, r, e.outputRenderSurface, t);else {
        let r = e.inputTexture,
          o = l.TexturePool.getOptimalTexture(i.width, i.height, r.source._resolution, !1),
          u = o;
        for (let e = n; e < s; e++) {
          let t = a[e];
          if (!t.enabled) continue;
          t.apply(this, r, u, !0);
          let i = r;
          r = u, u = i;
        }
        a[s].apply(this, r, e.outputRenderSurface, t), l.TexturePool.returnTexture(o);
      }
    }
    _calculateFilterBounds(e, t, r, i, a) {
      let n = this.renderer,
        s = e.bounds,
        o = e.filters,
        l = 1 / 0,
        u = 0,
        d = !0,
        h = !1,
        f = !1,
        p = !0,
        m = -1,
        v = -1;
      for (let e = 0; e < o.length; e++) {
        let t = o[e];
        if (t.enabled) {
          if (-1 === m && (m = e), v = e, l = Math.min(l, "inherit" === t.resolution ? i : t.resolution), u += t.padding, "off" === t.antialias ? d = !1 : "inherit" === t.antialias && d && (d = r), t.clipToViewport || (p = !1), !(t.compatibleRenderers & n.type)) {
            f = !1;
            break;
          }
          if (t.blendRequired && !(n.backBuffer?.useBackBuffer ?? !0)) {
            (0, c.warn)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), f = !1;
            break;
          }
          f = !0, h || (h = t.blendRequired);
        }
      }
      if (!f || (p && s.fitBounds(0, t.width / i, 0, t.height / i), s.scale(l).ceil().scale(1 / l).pad((0 | u) * a), !s.isPositive)) {
        e.skip = !0;
        return;
      }
      e.antialias = d, e.resolution = l, e.blendRequired = h, e.firstEnabledIndex = m, e.lastEnabledIndex = v;
    }
    _popFilterData() {
      return this._filterStackIndex--, this._filterStack[this._filterStackIndex];
    }
    _getPreviousFilterData() {
      let e,
        t = this._filterStackIndex - 1;
      for (; t > 0 && (t--, (e = this._filterStack[t]).skip););
      return e;
    }
    _pushFilterData() {
      let e = this._filterStack[this._filterStackIndex];
      return e || (e = this._filterStack[this._filterStackIndex] = new p()), this._filterStackIndex++, e;
    }
  }
  m.extension = {
    type: [t.ExtensionType.WebGLSystem, t.ExtensionType.WebGPUSystem],
    name: "filter"
  }, e.s(["FilterSystem", 0, m]);
};
