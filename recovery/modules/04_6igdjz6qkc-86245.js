// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 86245.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278);
  class r {
    constructor(e) {
      this._renderer = e;
    }
    updateRenderable() {}
    destroyRenderable() {}
    validateRenderable() {
      return !1;
    }
    addRenderable(e, t) {
      this._renderer.renderPipes.batch.break(t), t.add(e);
    }
    execute(e) {
      e.isRenderable && e.render(this._renderer);
    }
    destroy() {
      this._renderer = null;
    }
  }
  r.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "customRender"
  }, e.s(["CustomRenderPipe", 0, r]);
};
