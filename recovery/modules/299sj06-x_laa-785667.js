// Recovered from 299sj06-x_laa.js. Runtime module IDs: 785667.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(550645),
    r = e.i(818011),
    i = e.i(705038),
    n = e.i(738599),
    a = e.i(664683),
    s = e.i(906994);
  class l extends i.Filter {
    constructor() {
      super({
        gpuProgram: r.GpuProgram.from({
          vertex: {
            source: s.default,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: s.default,
            entryPoint: "mainFragment"
          },
          name: "passthrough-filter"
        }),
        glProgram: t.GlProgram.from({
          vertex: n.default,
          fragment: a.default,
          name: "passthrough-filter"
        })
      });
    }
  }
  e.s(["PassthroughFilter", 0, l]);
};
