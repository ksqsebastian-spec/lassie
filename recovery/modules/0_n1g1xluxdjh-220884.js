// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 220884.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "BloomFilter", {
    enumerable: !0,
    get: function () {
      return r;
    }
  });
  class r {
    constructor(e, t = 1e-4) {
      this.numItems = e, this.errorRate = t, this.numBits = Math.ceil(-(e * Math.log(t)) / (Math.log(2) * Math.log(2))), this.numHashes = Math.ceil(this.numBits / e * Math.log(2)), this.bitArray = Array(this.numBits).fill(0);
    }
    static from(e, t = 1e-4) {
      let n = new r(e.length, t);
      for (let t of e) n.add(t);
      return n;
    }
    export() {
      return {
        numItems: this.numItems,
        errorRate: this.errorRate,
        numBits: this.numBits,
        numHashes: this.numHashes,
        bitArray: this.bitArray
      };
    }
    import(e) {
      this.numItems = e.numItems, this.errorRate = e.errorRate, this.numBits = e.numBits, this.numHashes = e.numHashes, this.bitArray = e.bitArray;
    }
    add(e) {
      this.getHashValues(e).forEach(e => {
        this.bitArray[e] = 1;
      });
    }
    contains(e) {
      return this.getHashValues(e).every(e => this.bitArray[e]);
    }
    getHashValues(e) {
      let t = [];
      for (let n = 1; n <= this.numHashes; n++) {
        let r = function (e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e.charCodeAt(n), 0x5bd1e995), t ^= t >>> 13, t = Math.imul(t, 0x5bd1e995);
          return t >>> 0;
        }(`${e}${n}`) % this.numBits;
        t.push(r);
      }
      return t;
    }
  }
};
