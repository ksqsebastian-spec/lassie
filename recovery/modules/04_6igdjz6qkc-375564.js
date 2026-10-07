// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 375564.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(893661),
    n = e.i(758139),
    i = e.i(453549),
    s = e.i(512583),
    a = e.i(465816),
    o = e.i(765480),
    l = e.i(337654),
    d = e.i(901548),
    u = e.i(162450);
  let h = new i.Bounds();
  class c extends r.FilterEffect {
    constructor() {
      super(), this.filters = [new n.MaskFilter({
        sprite: new a.Sprite(l.Texture.EMPTY),
        inverse: !1,
        resolution: "inherit",
        antialias: "inherit"
      })];
    }
    get sprite() {
      return this.filters[0].sprite;
    }
    set sprite(e) {
      this.filters[0].sprite = e;
    }
    get inverse() {
      return this.filters[0].inverse;
    }
    set inverse(e) {
      this.filters[0].inverse = e;
    }
    get channel() {
      return this.filters[0].channel;
    }
    set channel(e) {
      this.filters[0].channel = e;
    }
  }
  class p {
    constructor(e) {
      this._activeMaskStage = [], this._renderer = e;
    }
    push(e, t, r) {
      let n = this._renderer;
      if (n.renderPipes.batch.break(r), r.add({
        renderPipeId: "alphaMask",
        action: "pushMaskBegin",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1,
        maskedContainer: t
      }), e.inverse = t._maskOptions.inverse, e.channel = t._maskOptions.channel ?? "red", e.renderMaskToTexture) {
        let t = e.mask;
        t.includeInBuild = !0, t.collectRenderables(r, n, null), t.includeInBuild = !1;
      }
      n.renderPipes.batch.break(r), r.add({
        renderPipeId: "alphaMask",
        action: "pushMaskEnd",
        mask: e,
        maskedContainer: t,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
    }
    pop(e, t, r) {
      this._renderer.renderPipes.batch.break(r), r.add({
        renderPipeId: "alphaMask",
        action: "popMaskEnd",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
    }
    execute(e) {
      let t = this._renderer,
        r = e.mask.renderMaskToTexture;
      if ("pushMaskBegin" === e.action) {
        let n = o.BigPool.get(c);
        if (n.inverse = e.inverse, n.channel = e.mask.channel, r) {
          e.mask.mask.measurable = !0;
          let r = (0, s.getGlobalBounds)(e.mask.mask, !0, h);
          e.mask.mask.measurable = !1, r.ceil();
          let i = t.renderTarget.renderTarget.colorTexture.source,
            a = d.TexturePool.getOptimalTexture(r.width, r.height, i._resolution, i.antialias);
          t.renderTarget.push(a, !0), t.globalUniforms.push({
            offset: r,
            worldColor: 0xffffffff
          });
          let o = n.sprite;
          o.texture = a, o.worldTransform.tx = r.minX, o.worldTransform.ty = r.minY, this._activeMaskStage.push({
            filterEffect: n,
            maskedContainer: e.maskedContainer,
            filterTexture: a
          });
        } else n.sprite = e.mask.mask, this._activeMaskStage.push({
          filterEffect: n,
          maskedContainer: e.maskedContainer
        });
      } else if ("pushMaskEnd" === e.action) {
        let e = this._activeMaskStage[this._activeMaskStage.length - 1];
        r && (t.type === u.RendererType.WEBGL && t.renderTarget.finishRenderPass(), t.renderTarget.pop(), t.globalUniforms.pop()), t.filter.push({
          renderPipeId: "filter",
          action: "pushFilter",
          container: e.maskedContainer,
          filterEffect: e.filterEffect,
          canBundle: !1
        });
      } else if ("popMaskEnd" === e.action) {
        t.filter.pop();
        let e = this._activeMaskStage.pop();
        r && d.TexturePool.returnTexture(e.filterTexture), o.BigPool.return(e.filterEffect);
      }
    }
    destroy() {
      this._renderer = null, this._activeMaskStage = null;
    }
  }
  p.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "alphaMask"
  }, e.s(["AlphaMaskPipe", 0, p]);
};
