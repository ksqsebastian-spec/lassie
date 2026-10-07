// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 29542.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(13814),
    i = e.i(727453),
    a = e.i(740905),
    n = e.i(164868),
    s = e.i(497544),
    o = e.i(162450),
    l = e.i(63146),
    u = e.i(204126),
    _ = e.i(768339),
    c = e.i(871602),
    h = e.i(262609),
    d = e.i(270143),
    f = e.i(945168),
    m = e.i(403204),
    g = e.i(322183),
    E = e.i(529002),
    T = e.i(962768),
    p = e.i(739983),
    R = e.i(444533),
    x = e.i(701993);
  let S = [...s.SharedSystems, g.GlUboSystem, c.GlBackBufferSystem, u.GlContextSystem, f.GlLimitsSystem, l.GlBufferSystem, x.GlTextureSystem, E.GlRenderTargetSystem, _.GlGeometrySystem, p.GlUniformGroupSystem, T.GlShaderSystem, d.GlEncoderSystem, R.GlStateSystem, m.GlStencilSystem, h.GlColorMaskSystem],
    b = [...s.SharedRenderPipes],
    v = [a.GlBatchAdaptor, i.GlMeshAdaptor, r.GlGraphicsAdaptor],
    A = [],
    G = [],
    B = [];
  t.extensions.handleByNamedList(t.ExtensionType.WebGLSystem, A), t.extensions.handleByNamedList(t.ExtensionType.WebGLPipes, G), t.extensions.handleByNamedList(t.ExtensionType.WebGLPipesAdaptor, B), t.extensions.add(...S, ...b, ...v);
  class y extends n.AbstractRenderer {
    constructor() {
      super({
        name: "webgl",
        type: o.RendererType.WEBGL,
        systems: A,
        renderPipes: G,
        renderPipeAdaptors: B
      });
    }
  }
  e.s(["WebGLRenderer", 0, y]);
};
