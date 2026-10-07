// Recovered from 2w-s9jrm49vzr.js. Runtime module IDs: 963345.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653),
    r = e.i(356566),
    i = e.i(609932);
  class n {
    constructor(e) {
      this._canvasPool = Object.create(null), this.canvasOptions = e || {}, this.enableFullScreen = !1;
    }
    _createCanvasAndContext(e, r) {
      let i = t.DOMAdapter.get().createCanvas();
      i.width = e, i.height = r;
      let n = i.getContext("2d");
      return {
        canvas: i,
        context: n
      };
    }
    getOptimalCanvasAndContext(e, t, i = 1) {
      e = Math.ceil(e * i - 1e-6), t = Math.ceil(t * i - 1e-6), e = (0, r.nextPow2)(e), t = (0, r.nextPow2)(t);
      let n = (e << 17) + (t << 1);
      this._canvasPool[n] || (this._canvasPool[n] = []);
      let a = this._canvasPool[n].pop();
      return a || (a = this._createCanvasAndContext(e, t)), a;
    }
    returnCanvasAndContext(e) {
      let {
          width: t,
          height: r
        } = e.canvas,
        i = (t << 17) + (r << 1);
      e.context.resetTransform(), e.context.clearRect(0, 0, t, r), this._canvasPool[i].push(e);
    }
    clear() {
      this._canvasPool = {};
    }
  }
  let a = new n();
  i.GlobalResourceRegistry.register(a), e.s(["CanvasPool", 0, a, "CanvasPoolClass", 0, n]);
};
