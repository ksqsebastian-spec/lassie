// Recovered from 1wr1jfu0wr9nb.js. Runtime module IDs: 910120.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["UboBatch", 0, class {
    constructor({
      minUniformOffsetAlignment: e
    }) {
      this._minUniformOffsetAlignment = 256, this.byteIndex = 0, this._minUniformOffsetAlignment = e, this.data = new Float32Array(65535);
    }
    clear() {
      this.byteIndex = 0;
    }
    addEmptyGroup(e) {
      if (e > this._minUniformOffsetAlignment / 4) throw Error(`UniformBufferBatch: array is too large: ${4 * e}`);
      let t = this.byteIndex,
        r = t + 4 * e;
      if ((r = Math.ceil(r / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment) > 4 * this.data.length) throw Error("UniformBufferBatch: ubo batch got too big");
      return this.byteIndex = r, t;
    }
    addGroup(e) {
      let t = this.addEmptyGroup(e.length);
      for (let r = 0; r < e.length; r++) this.data[t / 4 + r] = e[r];
      return t;
    }
    destroy() {
      this.data = null;
    }
  }]);
};
