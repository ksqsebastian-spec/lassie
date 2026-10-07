// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 594908.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(674130),
    i = e.i(129249),
    s = e.i(754287),
    a = e.i(164868),
    n = e.i(497544),
    o = e.i(162450),
    u = e.i(633840),
    d = e.i(454710),
    l = e.i(245665),
    h = e.i(29400),
    c = e.i(23295),
    p = e.i(602250),
    g = e.i(564115),
    f = e.i(470227),
    m = e.i(630739),
    _ = e.i(952222),
    x = e.i(216248),
    b = e.i(500030),
    y = e.i(71203),
    G = e.i(349139);
  let T = [...n.SharedSystems, f.GpuUboSystem, c.GpuEncoderSystem, h.GpuDeviceSystem, p.GpuLimitsSystem, d.GpuBufferSystem, G.GpuTextureSystem, x.GpuRenderTargetSystem, b.GpuShaderSystem, y.GpuStateSystem, _.PipelineSystem, l.GpuColorMaskSystem, g.GpuStencilSystem, u.BindGroupSystem],
    S = [...n.SharedRenderPipes, m.GpuUniformBatchPipe],
    P = [s.GpuBatchAdaptor, i.GpuMeshAdapter, r.GpuGraphicsAdaptor],
    B = [],
    v = [],
    C = [];
  t.extensions.handleByNamedList(t.ExtensionType.WebGPUSystem, B), t.extensions.handleByNamedList(t.ExtensionType.WebGPUPipes, v), t.extensions.handleByNamedList(t.ExtensionType.WebGPUPipesAdaptor, C), t.extensions.add(...T, ...S, ...P);
  class U extends a.AbstractRenderer {
    constructor() {
      super({
        name: "webgpu",
        type: o.RendererType.WEBGPU,
        systems: B,
        renderPipes: v,
        renderPipeAdaptors: C
      });
    }
  }
  e.s(["WebGPURenderer", 0, U]);
};
