// Recovered from 0irg_50lcvv3i.js. Runtime module IDs: 705038.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(550645),
    a = e.i(818011),
    r = e.i(761149),
    o = e.i(688761);
  let s = class e extends r.Shader {
    constructor(t) {
      super(t = {
        ...e.defaultOptions,
        ...t
      }), this.enabled = !0, this._state = o.State.for2d(), this.blendMode = t.blendMode, this.padding = t.padding, "boolean" == typeof t.antialias ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.clipToViewport = t.clipToViewport, this.addResource("uTexture", 0, 1), t.blendRequired && this.addResource("uBackTexture", 0, 3);
    }
    apply(e, t, a, r) {
      e.applyFilter(this, t, a, r);
    }
    get blendMode() {
      return this._state.blendMode;
    }
    set blendMode(e) {
      this._state.blendMode = e;
    }
    static from(r) {
      let o,
        s,
        {
          gpu: i,
          gl: n,
          ...f
        } = r;
      return i && (o = a.GpuProgram.from(i)), n && (s = t.GlProgram.from(n)), new e({
        gpuProgram: o,
        glProgram: s,
        ...f
      });
    }
  };
  s.defaultOptions = {
    blendMode: "normal",
    resolution: 1,
    padding: 0,
    antialias: "off",
    blendRequired: !1,
    clipToViewport: !0
  }, e.s(["Filter", 0, s]);
};
