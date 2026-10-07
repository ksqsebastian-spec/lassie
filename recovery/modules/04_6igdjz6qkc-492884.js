// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 492884, 729317.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(389474),
    n = e.i(765480),
    i = e.i(267827);
  function s(e, t) {
    let r = e.instructionSet,
      n = r.instructions;
    for (let e = 0; e < r.instructionSize; e++) {
      let r = n[e];
      t[r.renderPipeId].execute(r);
    }
  }
  e.s(["executeInstructions", 0, s], 729317);
  class a {
    constructor(e) {
      this._renderer = e;
    }
    addRenderGroup(e, t) {
      e.isCachedAsTexture ? this._addRenderableCacheAsTexture(e, t) : this._addRenderableDirect(e, t);
    }
    execute(e) {
      e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e));
    }
    destroy() {
      this._renderer = null;
    }
    _addRenderableDirect(e, t) {
      this._renderer.renderPipes.batch.break(t), e._batchableRenderGroup && (n.BigPool.return(e._batchableRenderGroup), e._batchableRenderGroup = null), t.add(e);
    }
    _addRenderableCacheAsTexture(e, t) {
      let r = e._batchableRenderGroup ?? (e._batchableRenderGroup = n.BigPool.get(i.BatchableSprite));
      r.renderable = e.root, r.transform = e.root.relativeGroupTransform, r.texture = e.texture, r.bounds = e._textureBounds, t.add(e), this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t), this._renderer.renderPipes.batch.addToBatch(r, t), this._renderer.renderPipes.blendMode.popBlendMode(t);
    }
    _executeCacheAsTexture(e) {
      if (e.textureNeedsUpdate) {
        e.textureNeedsUpdate = !1;
        let t = new r.Matrix().translate(-e._textureBounds.x, -e._textureBounds.y);
        this._renderer.renderTarget.push(e.texture, !0, null, e.texture.frame), this._renderer.globalUniforms.push({
          worldTransformMatrix: t,
          worldColor: 0xffffffff,
          offset: {
            x: 0,
            y: 0
          }
        }), s(e, this._renderer.renderPipes), this._renderer.renderTarget.finishRenderPass(), this._renderer.renderTarget.pop(), this._renderer.globalUniforms.pop();
      }
      e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup), e._batchableRenderGroup._batcher.geometry.buffers[0].update();
    }
    _executeDirect(e) {
      this._renderer.globalUniforms.push({
        worldTransformMatrix: e.inverseParentTextureTransform,
        worldColor: e.worldColorAlpha
      }), s(e, this._renderer.renderPipes), this._renderer.globalUniforms.pop();
    }
  }
  a.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "renderGroup"
  }, e.s(["RenderGroupPipe", 0, a], 492884);
};
