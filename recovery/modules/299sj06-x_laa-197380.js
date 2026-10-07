// Recovered from 299sj06-x_laa.js. Runtime module IDs: 197380.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(785667),
    i = e.i(389474),
    n = e.i(175444),
    a = e.i(719885),
    s = e.i(153594),
    l = e.i(337654),
    o = e.i(901548),
    u = e.i(162450),
    d = e.i(453549),
    h = e.i(55742),
    c = e.i(562140);
  let p = new a.Geometry({
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
  class f {
    constructor() {
      this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new d.Bounds(), this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1;
    }
  }
  class g {
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
      }), this._globalFilterBindGroup = new n.BindGroup({}), this.renderer = e;
    }
    get activeBackTexture() {
      return this._activeFilterData?.backTexture;
    }
    push(e) {
      let t = this.renderer,
        r = e.filterEffect.filters,
        i = this._pushFilterData();
      i.skip = !1, i.filters = r, i.container = e.container, i.outputRenderSurface = t.renderTarget.renderSurface;
      let n = t.renderTarget.renderTarget.colorTexture.source,
        a = n.resolution,
        s = n.antialias;
      if (r.every(e => !e.enabled)) {
        i.skip = !0;
        return;
      }
      let l = i.bounds;
      if (this._calculateFilterArea(e, l), this._calculateFilterBounds(i, t.renderTarget.rootViewPort, s, a, 1), i.skip) return;
      let o = this._getPreviousFilterData(),
        u = this._findFilterResolution(a),
        d = 0,
        h = 0;
      o && (d = o.bounds.minX, h = o.bounds.minY), this._calculateGlobalFrame(i, d, h, u, n.width, n.height), this._setupFilterTextures(i, l, t, o);
    }
    generateFilteredTexture({
      texture: e,
      filters: t
    }) {
      let r = this._pushFilterData();
      this._activeFilterData = r, r.skip = !1, r.filters = t;
      let i = e.source,
        n = i.resolution,
        a = i.antialias;
      if (t.every(e => !e.enabled)) return r.skip = !0, e;
      let s = r.bounds;
      if (s.addRect(e.frame), this._calculateFilterBounds(r, s.rectangle, a, n, 0), r.skip) return e;
      this._calculateGlobalFrame(r, 0, 0, n, i.width, i.height), r.outputRenderSurface = o.TexturePool.getOptimalTexture(s.width, s.height, r.resolution, r.antialias), r.backTexture = l.Texture.EMPTY, r.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0);
      let u = r.outputRenderSurface;
      return u.source.alphaMode = "premultiplied-alpha", u;
    }
    pop() {
      let e = this.renderer,
        t = this._popFilterData();
      t.skip || (e.globalUniforms.pop(), e.renderTarget.finishRenderPass(), this._activeFilterData = t, this._applyFiltersToTexture(t, !1), t.blendRequired && o.TexturePool.returnTexture(t.backTexture), o.TexturePool.returnTexture(t.inputTexture));
    }
    getBackTexture(e, t, r) {
      let i = e.colorTexture.source._resolution,
        n = o.TexturePool.getOptimalTexture(t.width, t.height, i, !1),
        a = t.minX,
        s = t.minY;
      r && (a -= r.minX, s -= r.minY), a = Math.floor(a * i), s = Math.floor(s * i);
      let l = Math.ceil(t.width * i),
        u = Math.ceil(t.height * i);
      return this.renderer.renderTarget.copyToTexture(e, n, {
        x: a,
        y: s
      }, {
        width: l,
        height: u
      }, {
        x: 0,
        y: 0
      }), n;
    }
    applyFilter(e, t, r, i) {
      let n = this.renderer,
        a = this._activeFilterData,
        s = a.outputRenderSurface === r,
        l = n.renderTarget.rootRenderTarget.colorTexture.source._resolution,
        o = this._findFilterResolution(l),
        u = 0,
        d = 0;
      if (s) {
        let e = this._findPreviousFilterOffset();
        u = e.x, d = e.y;
      }
      this._updateFilterUniforms(t, r, a, u, d, o, s, i);
      let h = e.enabled ? e : this._getPassthroughFilter();
      this._setupBindGroupsAndRender(h, t, n);
    }
    calculateSpriteMatrix(e, t) {
      let r = this._activeFilterData,
        n = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY),
        a = t.worldTransform.copyTo(i.Matrix.shared),
        s = t.renderGroup || t.parentRenderGroup;
      return s && s.cacheToLocalTransform && a.prepend(s.cacheToLocalTransform), a.invert(), n.prepend(a), n.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), n.translate(t.anchor.x, t.anchor.y), n;
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
        geometry: p,
        shader: e,
        state: e._state,
        topology: "triangle-list"
      }), r.type === u.RendererType.WEBGL && r.renderTarget.finishRenderPass();
    }
    _setupFilterTextures(e, t, r, i) {
      if (e.backTexture = l.Texture.EMPTY, e.inputTexture = o.TexturePool.getOptimalTexture(t.width, t.height, e.resolution, e.antialias), e.blendRequired) {
        r.renderTarget.finishRenderPass();
        let n = r.renderTarget.getRenderTarget(e.outputRenderSurface);
        e.backTexture = this.getBackTexture(n, t, i?.bounds);
      }
      r.renderTarget.bind(e.inputTexture, !0), r.globalUniforms.push({
        offset: t
      });
    }
    _calculateGlobalFrame(e, t, r, i, n, a) {
      let s = e.globalFrame;
      s.x = t * i, s.y = r * i, s.width = n * i, s.height = a * i;
    }
    _updateFilterUniforms(e, t, r, i, n, a, s, o) {
      let u = this._filterGlobalUniforms.uniforms,
        d = u.uOutputFrame,
        h = u.uInputSize,
        c = u.uInputPixel,
        p = u.uInputClamp,
        f = u.uGlobalFrame,
        g = u.uOutputTexture;
      s ? (d[0] = r.bounds.minX - i, d[1] = r.bounds.minY - n) : (d[0] = 0, d[1] = 0), d[2] = e.frame.width, d[3] = e.frame.height, h[0] = e.source.width, h[1] = e.source.height, h[2] = 1 / h[0], h[3] = 1 / h[1], c[0] = e.source.pixelWidth, c[1] = e.source.pixelHeight, c[2] = 1 / c[0], c[3] = 1 / c[1], p[0] = .5 * c[2], p[1] = .5 * c[3], p[2] = e.frame.width * h[2] - .5 * c[2], p[3] = e.frame.height * h[3] - .5 * c[3];
      let x = this.renderer.renderTarget.rootRenderTarget.colorTexture;
      f[0] = i * a, f[1] = n * a, f[2] = x.source.width * a, f[3] = x.source.height * a, t instanceof l.Texture && (t.source.resource = null);
      let m = this.renderer.renderTarget.getRenderTarget(t);
      this.renderer.renderTarget.bind(t, !!o), t instanceof l.Texture ? (g[0] = t.frame.width, g[1] = t.frame.height) : (g[0] = m.width, g[1] = m.height), g[2] = m.isRoot ? -1 : 1, this._filterGlobalUniforms.update();
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
        n = e.filters,
        a = e.firstEnabledIndex,
        s = e.lastEnabledIndex;
      if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), a === s) n[a].apply(this, r, e.outputRenderSurface, t);else {
        let r = e.inputTexture,
          l = o.TexturePool.getOptimalTexture(i.width, i.height, r.source._resolution, !1),
          u = l;
        for (let e = a; e < s; e++) {
          let t = n[e];
          if (!t.enabled) continue;
          t.apply(this, r, u, !0);
          let i = r;
          r = u, u = i;
        }
        n[s].apply(this, r, e.outputRenderSurface, t), o.TexturePool.returnTexture(l);
      }
    }
    _calculateFilterBounds(e, t, r, i, n) {
      let a = this.renderer,
        s = e.bounds,
        l = e.filters,
        o = 1 / 0,
        u = 0,
        d = !0,
        h = !1,
        p = !1,
        f = !0,
        g = -1,
        x = -1;
      for (let e = 0; e < l.length; e++) {
        let t = l[e];
        if (t.enabled) {
          if (-1 === g && (g = e), x = e, o = Math.min(o, "inherit" === t.resolution ? i : t.resolution), u += t.padding, "off" === t.antialias ? d = !1 : "inherit" === t.antialias && d && (d = r), t.clipToViewport || (f = !1), !(t.compatibleRenderers & a.type)) {
            p = !1;
            break;
          }
          if (t.blendRequired && !(a.backBuffer?.useBackBuffer ?? !0)) {
            (0, c.warn)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), p = !1;
            break;
          }
          p = !0, h || (h = t.blendRequired);
        }
      }
      if (!p || (f && s.fitBounds(0, t.width / i, 0, t.height / i), s.scale(o).ceil().scale(1 / o).pad((0 | u) * n), !s.isPositive)) {
        e.skip = !0;
        return;
      }
      e.antialias = d, e.resolution = o, e.blendRequired = h, e.firstEnabledIndex = g, e.lastEnabledIndex = x;
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
      return e || (e = this._filterStack[this._filterStackIndex] = new f()), this._filterStackIndex++, e;
    }
  }
  g.extension = {
    type: [t.ExtensionType.WebGLSystem, t.ExtensionType.WebGPUSystem],
    name: "filter"
  }, e.s(["FilterSystem", 0, g]);
};
