// Recovered from 0-hmsrw8do5bn.js. Runtime module IDs: 638082, 16354, 215393, 84327.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    a = e.i(86245),
    r = e.i(492884),
    i = e.i(914316),
    n = e.i(751559),
    s = e.i(275957),
    o = e.i(497256),
    l = e.i(375564),
    h = e.i(542553),
    d = e.i(198418),
    c = e.i(507938),
    u = e.i(164868),
    p = e.i(497544),
    g = e.i(162450),
    f = e.i(149566),
    x = e.i(735741),
    m = e.i(798299),
    v = e.i(222735),
    y = e.i(787653),
    C = e.i(173156);
  class T {
    init(e, t) {
      this._renderer = e, this._renderTargetSystem = t;
    }
    initGpuRenderTarget(e) {
      let t = e.colorTexture,
        {
          canvas: a,
          context: r
        } = this._ensureCanvas(t);
      return {
        canvas: a,
        context: r,
        width: a.width,
        height: a.height
      };
    }
    resizeGpuRenderTarget(e) {
      let t = e.colorTexture,
        {
          canvas: a
        } = this._ensureCanvas(t);
      a.width = e.pixelWidth, a.height = e.pixelHeight;
    }
    startRenderPass(e, t, a, r) {
      let i = this._renderTargetSystem.getGpuRenderTarget(e);
      this._renderer.canvasContext.activeContext = i.context, this._renderer.canvasContext.activeResolution = e.resolution, t && this.clear(e, t, a, r);
    }
    clear(e, t, a, r) {
      let i = this._renderTargetSystem.getGpuRenderTarget(e).context,
        n = r || {
          x: 0,
          y: 0,
          width: e.pixelWidth,
          height: e.pixelHeight
        };
      if (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(n.x, n.y, n.width, n.height), a) {
        let e = v.Color.shared.setValue(a);
        e.alpha > 0 && (i.globalAlpha = e.alpha, i.fillStyle = e.toHex(), i.fillRect(n.x, n.y, n.width, n.height), i.globalAlpha = 1);
      }
    }
    finishRenderPass() {}
    copyToTexture(e, t, a, r, i) {
      let n = this._renderTargetSystem.getGpuRenderTarget(e).canvas,
        s = t.source,
        {
          context: o
        } = this._ensureCanvas(s),
        l = i?.x ?? 0,
        h = i?.y ?? 0;
      return o.drawImage(n, a.x, a.y, r.width, r.height, l, h, r.width, r.height), s.update(), t;
    }
    destroyGpuRenderTarget(e) {}
    _ensureCanvas(e) {
      let t = e.resource;
      t && C.CanvasSource.test(t) || (t = y.DOMAdapter.get().createCanvas(e.pixelWidth, e.pixelHeight), e.resource = t), (t.width !== e.pixelWidth || t.height !== e.pixelHeight) && (t.width = e.pixelWidth, t.height = e.pixelHeight);
      let a = t.getContext("2d");
      return {
        canvas: t,
        context: a
      };
    }
  }
  e.s(["CanvasRenderTargetAdaptor", 0, T], 16354);
  class M extends m.RenderTargetSystem {
    constructor(e) {
      super(e), this.adaptor = new T(), this.adaptor.init(e, this);
    }
  }
  M.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "renderTarget"
  }, e.s(["CanvasRenderTargetSystem", 0, M], 215393);
  var b = e.i(449752);
  class _ {
    constructor(e) {}
    init() {}
    initSource(e) {}
    generateCanvas(e) {
      let t = y.DOMAdapter.get().createCanvas(),
        a = t.getContext("2d"),
        r = b.canvasUtils.getCanvasSource(e);
      if (!r) return t;
      let i = e.frame,
        n = e.source._resolution ?? e.source.resolution ?? 1,
        s = i.x * n,
        o = i.y * n,
        l = i.width * n,
        h = i.height * n;
      return t.width = Math.ceil(l), t.height = Math.ceil(h), a.drawImage(r, s, o, l, h, 0, 0, l, h), t;
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
  _.extension = {
    type: [t.ExtensionType.CanvasSystem],
    name: "texture"
  }, e.s(["CanvasTextureSystem", 0, _], 84327);
  let w = [...p.SharedSystems, f.CanvasContextSystem, x.CanvasLimitsSystem, _, M],
    P = [c.BlendModePipe, o.BatcherPipe, n.SpritePipe, r.RenderGroupPipe, l.AlphaMaskPipe, d.CanvasStencilMaskPipe, h.CanvasColorMaskPipe, a.CustomRenderPipe],
    k = [s.CanvasBatchAdaptor, i.CanvasGraphicsAdaptor],
    I = [],
    S = [],
    R = [];
  t.extensions.handleByNamedList(t.ExtensionType.CanvasSystem, I), t.extensions.handleByNamedList(t.ExtensionType.CanvasPipes, S), t.extensions.handleByNamedList(t.ExtensionType.CanvasPipesAdaptor, R), t.extensions.add(...w, ...P, ...k);
  class A extends u.AbstractRenderer {
    constructor() {
      super({
        name: "canvas",
        type: g.RendererType.CANVAS,
        systems: I,
        renderPipes: S,
        renderPipeAdaptors: R
      });
    }
  }
  e.s(["CanvasRenderer", 0, A], 638082);
};
