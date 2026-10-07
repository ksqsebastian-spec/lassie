// Recovered from 25drgquolhhel.js. Runtime module IDs: 765480, 808662.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(609932);
  class i {
    constructor(t, e) {
      this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e);
    }
    prepopulate(t) {
      for (let e = 0; e < t; e++) this._pool[this._index++] = new this._classType();
      this._count += t;
    }
    get(t) {
      let e;
      return this._index > 0 ? e = this._pool[--this._index] : (e = new this._classType(), this._count++), e.init?.(t), e;
    }
    return(t) {
      t.reset?.(), this._pool[this._index++] = t;
    }
    get totalSize() {
      return this._count;
    }
    get totalFree() {
      return this._index;
    }
    get totalUsed() {
      return this._count - this._index;
    }
    clear() {
      if (this._pool.length > 0 && this._pool[0].destroy) for (let t = 0; t < this._index; t++) this._pool[t].destroy();
      this._pool.length = 0, this._count = 0, this._index = 0;
    }
  }
  t.s(["Pool", 0, i], 808662);
  class s {
    constructor() {
      this._poolsByClass = new Map();
    }
    prepopulate(t, e) {
      this.getPool(t).prepopulate(e);
    }
    get(t, e) {
      return this.getPool(t).get(e);
    }
    return(t) {
      this.getPool(t.constructor).return(t);
    }
    getPool(t) {
      return this._poolsByClass.has(t) || this._poolsByClass.set(t, new i(t)), this._poolsByClass.get(t);
    }
    stats() {
      let t = {};
      return this._poolsByClass.forEach(e => {
        let i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
        t[i] = {
          free: e.totalFree,
          used: e.totalUsed,
          size: e.totalSize
        };
      }), t;
    }
    clear() {
      this._poolsByClass.forEach(t => t.clear()), this._poolsByClass.clear();
    }
  }
  let r = new s();
  e.GlobalResourceRegistry.register(r), t.s(["BigPool", 0, r, "PoolGroupClass", 0, s], 765480);
};
