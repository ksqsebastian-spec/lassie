// Recovered from 144p5exbgh2-z.js. Runtime module IDs: 963345.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653),
    a = e.i(356566),
    r = e.i(609932);
  class i {
    constructor(e) {
      this._canvasPool = Object.create(null), this.canvasOptions = e || {}, this.enableFullScreen = !1;
    }
    _createCanvasAndContext(e, a) {
      let r = t.DOMAdapter.get().createCanvas();
      r.width = e, r.height = a;
      let i = r.getContext("2d");
      return {
        canvas: r,
        context: i
      };
    }
    getOptimalCanvasAndContext(e, t, r = 1) {
      e = Math.ceil(e * r - 1e-6), t = Math.ceil(t * r - 1e-6), e = (0, a.nextPow2)(e), t = (0, a.nextPow2)(t);
      let i = (e << 17) + (t << 1);
      this._canvasPool[i] || (this._canvasPool[i] = []);
      let n = this._canvasPool[i].pop();
      return n || (n = this._createCanvasAndContext(e, t)), n;
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
  let n = new i();
  r.GlobalResourceRegistry.register(n), e.s(["CanvasPool", 0, n, "CanvasPoolClass", 0, i]);
};
