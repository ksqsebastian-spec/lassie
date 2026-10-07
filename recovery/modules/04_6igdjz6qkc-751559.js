// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 751559.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(267827);
  class n {
    constructor(e) {
      this._renderer = e;
    }
    addRenderable(e, t) {
      let r = this._getGpuSprite(e);
      e.didViewUpdate && this._updateBatchableSprite(e, r), this._renderer.renderPipes.batch.addToBatch(r, t);
    }
    updateRenderable(e) {
      let t = this._getGpuSprite(e);
      e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t);
    }
    validateRenderable(e) {
      let t = this._getGpuSprite(e);
      return !t._batcher.checkAndUpdateTexture(t, e._texture);
    }
    _updateBatchableSprite(e, t) {
      t.bounds = e.visualBounds, t.texture = e._texture;
    }
    _getGpuSprite(e) {
      return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
    }
    _initGPUSprite(e) {
      let t = new r.BatchableSprite();
      return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.bounds = e.visualBounds, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, t;
    }
    destroy() {
      this._renderer = null;
    }
  }
  n.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "sprite"
  }, e.s(["SpritePipe", 0, n]);
};
