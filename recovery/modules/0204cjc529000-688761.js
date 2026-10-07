// Recovered from 0204cjc529000.js. Runtime module IDs: 688761.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t = {
      normal: 0,
      add: 1,
      multiply: 2,
      screen: 3,
      overlay: 4,
      erase: 5,
      "normal-npm": 6,
      "add-npm": 7,
      "screen-npm": 8,
      min: 9,
      max: 10
    },
    i = class e {
      constructor() {
        this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
      }
      get blend() {
        return !!(1 & this.data);
      }
      set blend(e) {
        !!(1 & this.data) !== e && (this.data ^= 1);
      }
      get offsets() {
        return !!(2 & this.data);
      }
      set offsets(e) {
        !!(2 & this.data) !== e && (this.data ^= 2);
      }
      set cullMode(e) {
        if ("none" === e) {
          this.culling = !1;
          return;
        }
        this.culling = !0, this.clockwiseFrontFace = "front" === e;
      }
      get cullMode() {
        return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none";
      }
      get culling() {
        return !!(4 & this.data);
      }
      set culling(e) {
        !!(4 & this.data) !== e && (this.data ^= 4);
      }
      get depthTest() {
        return !!(8 & this.data);
      }
      set depthTest(e) {
        !!(8 & this.data) !== e && (this.data ^= 8);
      }
      get depthMask() {
        return !!(32 & this.data);
      }
      set depthMask(e) {
        !!(32 & this.data) !== e && (this.data ^= 32);
      }
      get clockwiseFrontFace() {
        return !!(16 & this.data);
      }
      set clockwiseFrontFace(e) {
        !!(16 & this.data) !== e && (this.data ^= 16);
      }
      get blendMode() {
        return this._blendMode;
      }
      set blendMode(e) {
        this.blend = "none" !== e, this._blendMode = e, this._blendModeId = t[e] || 0;
      }
      get polygonOffset() {
        return this._polygonOffset;
      }
      set polygonOffset(e) {
        this.offsets = !!e, this._polygonOffset = e;
      }
      toString() {
        return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
      }
      static for2d() {
        let t = new e();
        return t.depthTest = !1, t.blend = !0, t;
      }
    };
  i.default2d = i.for2d(), e.s(["State", 0, i]);
};
