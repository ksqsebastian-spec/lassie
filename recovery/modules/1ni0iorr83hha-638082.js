// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 638082, 16354, 215393, 84327.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(86245),
    i = e.i(492884),
    a = e.i(914316),
    n = e.i(751559),
    s = e.i(275957),
    o = e.i(497256),
    l = e.i(375564),
    u = e.i(542553),
    d = e.i(198418),
    h = e.i(507938),
    c = e.i(164868),
    f = e.i(497544),
    p = e.i(162450),
    m = e.i(149566),
    v = e.i(735741),
    x = e.i(798299),
    g = e.i(222735),
    y = e.i(787653),
    b = e.i(173156);
  class T {
    init(e, t) {
      this._renderer = e, this._renderTargetSystem = t;
    }
    initGpuRenderTarget(e) {
      let t = e.colorTexture,
        {
          canvas: r,
          context: i
        } = this._ensureCanvas(t);
      return {
        canvas: r,
        context: i,
        width: r.width,
        height: r.height
      };
    }
    resizeGpuRenderTarget(e) {
      let t = e.colorTexture,
        {
          canvas: r
        } = this._ensureCanvas(t);
      r.width = e.pixelWidth, r.height = e.pixelHeight;
    }
    startRenderPass(e, t, r, i) {
      let a = this._renderTargetSystem.getGpuRenderTarget(e);
      this._renderer.canvasContext.activeContext = a.context, this._renderer.canvasContext.activeResolution = e.resolution, t && this.clear(e, t, r, i);
    }
    clear(e, t, r, i) {
      let a = this._renderTargetSystem.getGpuRenderTarget(e).context,
        n = i || {
          x: 0,
          y: 0,
          width: e.pixelWidth,
          height: e.pixelHeight
        };
      if (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(n.x, n.y, n.width, n.height), r) {
        let e = g.Color.shared.setValue(r);
        e.alpha > 0 && (a.globalAlpha = e.alpha, a.fillStyle = e.toHex(), a.fillRect(n.x, n.y, n.width, n.height), a.globalAlpha = 1);
      }
    }
    finishRenderPass() {}
    copyToTexture(e, t, r, i, a) {
      let n = this._renderTargetSystem.getGpuRenderTarget(e).canvas,
        s = t.source,
        {
          context: o
        } = this._ensureCanvas(s),
        l = a?.x ?? 0,
        u = a?.y ?? 0;
      return o.drawImage(n, r.x, r.y, i.width, i.height, l, u, i.width, i.height), s.update(), t;
    }
    destroyGpuRenderTarget(e) {}
    _ensureCanvas(e) {
      let t = e.resource;
      t && b.CanvasSource.test(t) || (t = y.DOMAdapter.get().createCanvas(e.pixelWidth, e.pixelHeight), e.resource = t), (t.width !== e.pixelWidth || t.height !== e.pixelHeight) && (t.width = e.pixelWidth, t.height = e.pixelHeight);
      let r = t.getContext("2d");
      return {
        canvas: t,
        context: r
      };
    }
  }
  e.s(["CanvasRenderTargetAdaptor", 0, T], 16354);
  class _ extends x.RenderTargetSystem {
    constructor(e) {
      super(e), this.adaptor = new T(), this.adaptor.init(e, this);
    }
  }
  _.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "renderTarget"
  }, e.s(["CanvasRenderTargetSystem", 0, _], 215393);
  var C = e.i(449752);
  class S {
    constructor(e) {}
    init() {}
    initSource(e) {}
    generateCanvas(e) {
      let t = y.DOMAdapter.get().createCanvas(),
        r = t.getContext("2d"),
        i = C.canvasUtils.getCanvasSource(e);
      if (!i) return t;
      let a = e.frame,
        n = e.source._resolution ?? e.source.resolution ?? 1,
        s = a.x * n,
        o = a.y * n,
        l = a.width * n,
        u = a.height * n;
      return t.width = Math.ceil(l), t.height = Math.ceil(u), r.drawImage(i, s, o, l, u, 0, 0, l, u), t;
    }
    getPixels(e) {
      let t = this.generateCanvas(e);
      return {
        pixels: t.getContext("2d", {
          willReadFrequently: !0
        }).getImageData(0, 0, t.width, t.height).data,
        width: t.width,
        height: t.height
      };
    }
    destroy() {}
  }
  S.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "texture"
  }, e.s(["CanvasTextureSystem", 0, S], 84327);
  let w = [...f.SharedSystems, m.CanvasContextSystem, v.CanvasLimitsSystem, S, _],
    M = [h.BlendModePipe, o.BatcherPipe, n.SpritePipe, i.RenderGroupPipe, l.AlphaMaskPipe, d.CanvasStencilMaskPipe, u.CanvasColorMaskPipe, r.CustomRenderPipe],
    P = [s.CanvasBatchAdaptor, a.CanvasGraphicsAdaptor],
    k = [],
    F = [],
    I = [];
  t.extensions.handleByNamedList(t.ExtensionType.CanvasSystem, k), t.extensions.handleByNamedList(t.ExtensionType.CanvasPipes, F), t.extensions.handleByNamedList(t.ExtensionType.CanvasPipesAdaptor, I), t.extensions.add(...w, ...M, ...P);
  class R extends c.AbstractRenderer {
    constructor() {
      super({
        name: "canvas",
        type: p.RendererType.CANVAS,
        systems: k,
        renderPipes: F,
        renderPipeAdaptors: I
      });
    }
  }
  e.s(["CanvasRenderer", 0, R], 638082);
};
