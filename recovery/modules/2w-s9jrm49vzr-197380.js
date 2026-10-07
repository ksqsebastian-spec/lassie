// Recovered from 2w-s9jrm49vzr.js. Runtime module IDs: 197380.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(785667),
    i = e.i(389474),
    n = e.i(175444),
    a = e.i(719885),
    l = e.i(153594),
    s = e.i(337654),
    o = e.i(901548),
    u = e.i(162450),
    h = e.i(453549),
    d = e.i(55742),
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
      this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new h.Bounds(), this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.globalFrame = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1;
    }
  }
  class g {
    constructor(e) {
      this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new l.UniformGroup({
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
        l = n.antialias;
      if (r.every(e => !e.enabled)) {
        i.skip = !0;
        return;
      }
      let s = i.bounds;
      if (this._calculateFilterArea(e, s), this._calculateFilterBounds(i, t.renderTarget.rootViewPort, l, a, 1), i.skip) return;
      let o = this._getPreviousFilterData(),
        u = this._findFilterResolution(a),
        h = 0,
        d = 0;
      o && (h = o.bounds.minX, d = o.bounds.minY), this._calculateGlobalFrame(i, h, d, u, n.width, n.height), this._setupFilterTextures(i, s, t, o);
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
      let l = r.bounds;
      if (l.addRect(e.frame), this._calculateFilterBounds(r, l.rectangle, a, n, 0), r.skip) return e;
      this._calculateGlobalFrame(r, 0, 0, n, i.width, i.height), r.outputRenderSurface = o.TexturePool.getOptimalTexture(l.width, l.height, r.resolution, r.antialias), r.backTexture = s.Texture.EMPTY, r.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(r, !0);
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
        l = t.minY;
      r && (a -= r.minX, l -= r.minY), a = Math.floor(a * i), l = Math.floor(l * i);
      let s = Math.ceil(t.width * i),
        u = Math.ceil(t.height * i);
      return this.renderer.renderTarget.copyToTexture(e, n, {
        x: a,
        y: l
      }, {
        width: s,
        height: u
      }, {
        x: 0,
        y: 0
      }), n;
    }
    applyFilter(e, t, r, i) {
      let n = this.renderer,
        a = this._activeFilterData,
        l = a.outputRenderSurface === r,
        s = n.renderTarget.rootRenderTarget.colorTexture.source._resolution,
        o = this._findFilterResolution(s),
        u = 0,
        h = 0;
      if (l) {
        let e = this._findPreviousFilterOffset();
        u = e.x, h = e.y;
      }
      this._updateFilterUniforms(t, r, a, u, h, o, l, i);
      let d = e.enabled ? e : this._getPassthroughFilter();
      this._setupBindGroupsAndRender(d, t, n);
    }
    calculateSpriteMatrix(e, t) {
      let r = this._activeFilterData,
        n = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY),
        a = t.worldTransform.copyTo(i.Matrix.shared),
        l = t.renderGroup || t.parentRenderGroup;
      return l && l.cacheToLocalTransform && a.prepend(l.cacheToLocalTransform), a.invert(), n.prepend(a), n.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), n.translate(t.anchor.x, t.anchor.y), n;
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
      if (e.backTexture = s.Texture.EMPTY, e.inputTexture = o.TexturePool.getOptimalTexture(t.width, t.height, e.resolution, e.antialias), e.blendRequired) {
        r.renderTarget.finishRenderPass();
        let n = r.renderTarget.getRenderTarget(e.outputRenderSurface);
        e.backTexture = this.getBackTexture(n, t, i?.bounds);
      }
      r.renderTarget.bind(e.inputTexture, !0), r.globalUniforms.push({
        offset: t
      });
    }
    _calculateGlobalFrame(e, t, r, i, n, a) {
      let l = e.globalFrame;
      l.x = t * i, l.y = r * i, l.width = n * i, l.height = a * i;
    }
    _updateFilterUniforms(e, t, r, i, n, a, l, o) {
      let u = this._filterGlobalUniforms.uniforms,
        h = u.uOutputFrame,
        d = u.uInputSize,
        c = u.uInputPixel,
        p = u.uInputClamp,
        f = u.uGlobalFrame,
        g = u.uOutputTexture;
      l ? (h[0] = r.bounds.minX - i, h[1] = r.bounds.minY - n) : (h[0] = 0, h[1] = 0), h[2] = e.frame.width, h[3] = e.frame.height, d[0] = e.source.width, d[1] = e.source.height, d[2] = 1 / d[0], d[3] = 1 / d[1], c[0] = e.source.pixelWidth, c[1] = e.source.pixelHeight, c[2] = 1 / c[0], c[3] = 1 / c[1], p[0] = .5 * c[2], p[1] = .5 * c[3], p[2] = e.frame.width * d[2] - .5 * c[2], p[3] = e.frame.height * d[3] - .5 * c[3];
      let x = this.renderer.renderTarget.rootRenderTarget.colorTexture;
      f[0] = i * a, f[1] = n * a, f[2] = x.source.width * a, f[3] = x.source.height * a, t instanceof s.Texture && (t.source.resource = null);
      let m = this.renderer.renderTarget.getRenderTarget(t);
      this.renderer.renderTarget.bind(t, !!o), t instanceof s.Texture ? (g[0] = t.frame.width, g[1] = t.frame.height) : (g[0] = m.width, g[1] = m.height), g[2] = m.isRoot ? -1 : 1, this._filterGlobalUniforms.update();
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
      if (e.renderables ? (0, d.getGlobalRenderableBounds)(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        let r = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
        r && t.applyMatrix(r);
      }
    }
    _applyFiltersToTexture(e, t) {
      let r = e.inputTexture,
        i = e.bounds,
        n = e.filters,
        a = e.firstEnabledIndex,
        l = e.lastEnabledIndex;
      if (this._globalFilterBindGroup.setResource(r.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), a === l) n[a].apply(this, r, e.outputRenderSurface, t);else {
        let r = e.inputTexture,
          s = o.TexturePool.getOptimalTexture(i.width, i.height, r.source._resolution, !1),
          u = s;
        for (let e = a; e < l; e++) {
          let t = n[e];
          if (!t.enabled) continue;
          t.apply(this, r, u, !0);
          let i = r;
          r = u, u = i;
        }
        n[l].apply(this, r, e.outputRenderSurface, t), o.TexturePool.returnTexture(s);
      }
    }
    _calculateFilterBounds(e, t, r, i, n) {
      let a = this.renderer,
        l = e.bounds,
        s = e.filters,
        o = 1 / 0,
        u = 0,
        h = !0,
        d = !1,
        p = !1,
        f = !0,
        g = -1,
        x = -1;
      for (let e = 0; e < s.length; e++) {
        let t = s[e];
        if (t.enabled) {
          if (-1 === g && (g = e), x = e, o = Math.min(o, "inherit" === t.resolution ? i : t.resolution), u += t.padding, "off" === t.antialias ? h = !1 : "inherit" === t.antialias && h && (h = r), t.clipToViewport || (f = !1), !(t.compatibleRenderers & a.type)) {
            p = !1;
            break;
          }
          if (t.blendRequired && !(a.backBuffer?.useBackBuffer ?? !0)) {
            (0, c.warn)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), p = !1;
            break;
          }
          p = !0, d || (d = t.blendRequired);
        }
      }
      if (!p || (f && l.fitBounds(0, t.width / i, 0, t.height / i), l.scale(o).ceil().scale(1 / o).pad((0 | u) * n), !l.isPositive)) {
        e.skip = !0;
        return;
      }
      e.antialias = h, e.resolution = o, e.blendRequired = d, e.firstEnabledIndex = g, e.lastEnabledIndex = x;
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
