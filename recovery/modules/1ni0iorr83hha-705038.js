// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 705038.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(550645),
    r = e.i(818011),
    i = e.i(761149),
    a = e.i(688761);
  let n = class e extends i.Shader {
    constructor(t) {
      super(t = {
        ...e.defaultOptions,
        ...t
      }), this.enabled = !0, this._state = a.State.for2d(), this.blendMode = t.blendMode, this.padding = t.padding, "boolean" == typeof t.antialias ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.clipToViewport = t.clipToViewport, this.addResource("uTexture", 0, 1), t.blendRequired && this.addResource("uBackTexture", 0, 3);
    }
    apply(e, t, r, i) {
      e.applyFilter(this, t, r, i);
    }
    get blendMode() {
      return this._state.blendMode;
    }
    set blendMode(e) {
      this._state.blendMode = e;
    }
    static from(i) {
      let a,
        n,
        {
          gpu: s,
          gl: o,
          ...l
        } = i;
      return s && (a = r.GpuProgram.from(s)), o && (n = t.GlProgram.from(o)), new e({
        gpuProgram: a,
        glProgram: n,
        ...l
      });
    }
  };
  n.defaultOptions = {
    blendMode: "normal",
    resolution: 1,
    padding: 0,
    antialias: "off",
    blendRequired: !1,
    clipToViewport: !0
  }, e.s(["Filter", 0, n]);
};
