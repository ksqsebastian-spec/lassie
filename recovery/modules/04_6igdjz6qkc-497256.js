// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 497256.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(688761),
    n = e.i(933261);
  let i = class e {
    constructor(e, t) {
      this.state = r.State.for2d(), this._batchersByInstructionSet = Object.create(null), this._activeBatches = Object.create(null), this.renderer = e, this._adaptor = t, this._adaptor.init?.(this);
    }
    static getBatcher(e, t) {
      return new this._availableBatchers[e]({
        maxTextures: t
      });
    }
    buildStart(e) {
      let t = this._batchersByInstructionSet[e.uid];
      for (let r in !t && ((t = this._batchersByInstructionSet[e.uid] = Object.create(null)).default || (t.default = new n.DefaultBatcher({
        maxTextures: this.renderer.limits.maxBatchableTextures
      }))), this._activeBatches = t, this._activeBatch = this._activeBatches.default, this._activeBatches) this._activeBatches[r].begin();
    }
    addToBatch(t, r) {
      if (this._activeBatch.name !== t.batcherName) {
        this._activeBatch.break(r);
        let n = this._activeBatches[t.batcherName];
        n || (n = this._activeBatches[t.batcherName] = e.getBatcher(t.batcherName, this.renderer.limits.maxBatchableTextures)).begin(), this._activeBatch = n;
      }
      this._activeBatch.add(t);
    }
    break(e) {
      this._activeBatch.break(e);
    }
    buildEnd(e) {
      this._activeBatch.break(e);
      let t = this._activeBatches;
      for (let e in t) {
        let r = t[e],
          n = r.geometry;
        n.indexBuffer.setDataWithSize(r.indexBuffer, r.indexSize, !0), n.buffers[0].setDataWithSize(r.attributeBuffer.float32View, r.attributeSize, !1);
      }
    }
    upload(e) {
      let t = this._batchersByInstructionSet[e.uid];
      for (let e in t) {
        let r = t[e],
          n = r.geometry;
        r.dirty && (r.dirty = !1, n.buffers[0].update(4 * r.attributeSize));
      }
    }
    execute(e) {
      if ("startBatch" === e.action) {
        let t = e.batcher,
          r = t.geometry,
          n = t.shader;
        this._adaptor.start(this, r, n);
      }
      this._adaptor.execute(this, e);
    }
    destroy() {
      for (let e in this.state = null, this.renderer = null, this._adaptor = null, this._activeBatches) this._activeBatches[e].destroy();
      this._activeBatches = null;
    }
  };
  i.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "batch"
  }, i._availableBatchers = Object.create(null), t.extensions.handleByMap(t.ExtensionType.Batcher, i._availableBatchers), t.extensions.add(n.DefaultBatcher), e.s(["BatcherPipe", 0, i]);
};
