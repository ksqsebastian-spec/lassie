// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 785667.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(550645),
    r = e.i(818011),
    i = e.i(705038),
    a = e.i(738599),
    n = e.i(664683),
    s = e.i(906994);
  class o extends i.Filter {
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
          vertex: a.default,
          fragment: n.default,
          name: "passthrough-filter"
        })
      });
    }
  }
  e.s(["PassthroughFilter", 0, o]);
};
