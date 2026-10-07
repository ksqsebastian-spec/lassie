// Recovered from 0204cjc529000.js. Runtime module IDs: 490249.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["ObservablePoint", 0, class e {
    constructor(e, t, i) {
      this._x = t || 0, this._y = i || 0, this._observer = e;
    }
    clone(t) {
      return new e(t ?? this._observer, this._x, this._y);
    }
    set(e = 0, t = e) {
      return (this._x !== e || this._y !== t) && (this._x = e, this._y = t, this._observer._onUpdate(this)), this;
    }
    copyFrom(e) {
      return (this._x !== e.x || this._y !== e.y) && (this._x = e.x, this._y = e.y, this._observer._onUpdate(this)), this;
    }
    copyTo(e) {
      return e.set(this._x, this._y), e;
    }
    equals(e) {
      return e.x === this._x && e.y === this._y;
    }
    toString() {
      return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x !== e && (this._x = e, this._observer._onUpdate(this));
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y !== e && (this._y = e, this._observer._onUpdate(this));
    }
  }]);
};
