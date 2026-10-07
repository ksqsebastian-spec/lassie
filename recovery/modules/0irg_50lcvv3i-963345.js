// Recovered from 0irg_50lcvv3i.js. Runtime module IDs: 963345.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653),
    a = e.i(356566),
    r = e.i(609932);
  class o {
    constructor(e) {
      this._canvasPool = Object.create(null), this.canvasOptions = e || {}, this.enableFullScreen = !1;
    }
    _createCanvasAndContext(e, a) {
      let r = t.DOMAdapter.get().createCanvas();
      r.width = e, r.height = a;
      let o = r.getContext("2d");
      return {
        canvas: r,
        context: o
      };
    }
    getOptimalCanvasAndContext(e, t, r = 1) {
      e = Math.ceil(e * r - 1e-6), t = Math.ceil(t * r - 1e-6), e = (0, a.nextPow2)(e), t = (0, a.nextPow2)(t);
      let o = (e << 17) + (t << 1);
      this._canvasPool[o] || (this._canvasPool[o] = []);
      let s = this._canvasPool[o].pop();
      return s || (s = this._createCanvasAndContext(e, t)), s;
    }
    returnCanvasAndContext(e) {
      let {
          width: t,
          height: a
        } = e.canvas,
        r = (t << 17) + (a << 1);
      e.context.resetTransform(), e.context.clearRect(0, 0, t, a), this._canvasPool[r].push(e);
    }
    clear() {
      this._canvasPool = {};
    }
  }
  let s = new o();
  r.GlobalResourceRegistry.register(s), e.s(["CanvasPool", 0, s, "CanvasPoolClass", 0, o]);
};
