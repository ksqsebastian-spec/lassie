// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 873604.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278);
  class r {
    constructor(e) {
      this._renderer = e;
    }
    push(e, t, r) {
      this._renderer.renderPipes.batch.break(r), r.add({
        renderPipeId: "filter",
        canBundle: !1,
        action: "pushFilter",
        container: t,
        filterEffect: e
      });
    }
    pop(e, t, r) {
      this._renderer.renderPipes.batch.break(r), r.add({
        renderPipeId: "filter",
        action: "popFilter",
        canBundle: !1
      });
    }
    execute(e) {
      "pushFilter" === e.action ? this._renderer.filter.push(e) : "popFilter" === e.action && this._renderer.filter.pop();
    }
    destroy() {
      this._renderer = null;
    }
  }
  r.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "filter"
  }, e.s(["FilterPipe", 0, r]);
};
