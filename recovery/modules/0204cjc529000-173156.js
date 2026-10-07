// Recovered from 0204cjc529000.js. Runtime module IDs: 173156.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653),
    i = e.i(78278),
    s = e.i(317765);
  class r extends s.TextureSource {
    constructor(e) {
      e.resource || (e.resource = t.DOMAdapter.get().createCanvas()), !e.width && (e.width = e.resource.width, e.autoDensity || (e.width /= e.resolution)), !e.height && (e.height = e.resource.height, e.autoDensity || (e.height /= e.resolution)), super(e), this.uploadMethodId = "image", this.autoDensity = e.autoDensity, this.resizeCanvas(), this.transparent = !!e.transparent;
    }
    resizeCanvas() {
      this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
    }
    resize(e = this.width, t = this.height, i = this._resolution) {
      let s = super.resize(e, t, i);
      return s && this.resizeCanvas(), s;
    }
    static test(e) {
      return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && e instanceof OffscreenCanvas;
    }
    get context2D() {
      return this._context2D || (this._context2D = this.resource.getContext("2d"));
    }
  }
  r.extension = i.ExtensionType.TextureSource, e.s(["CanvasSource", 0, r]);
};
