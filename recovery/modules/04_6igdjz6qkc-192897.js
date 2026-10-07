// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 192897.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(222735),
    r = e.i(78278),
    n = e.i(562140);
  let i = class e {
    constructor() {
      this.clearBeforeRender = !0, this._backgroundColor = new t.Color(0), this.color = this._backgroundColor, this.alpha = 1;
    }
    init(t) {
      t = {
        ...e.defaultOptions,
        ...t
      }, this.clearBeforeRender = t.clearBeforeRender, this.color = t.background || t.backgroundColor || this._backgroundColor, this.alpha = t.backgroundAlpha, this._backgroundColor.setAlpha(t.backgroundAlpha);
    }
    get color() {
      return this._backgroundColor;
    }
    set color(e) {
      t.Color.shared.setValue(e).alpha < 1 && 1 === this._backgroundColor.alpha && (0, n.warn)("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."), this._backgroundColor.setValue(e);
    }
    get alpha() {
      return this._backgroundColor.alpha;
    }
    set alpha(e) {
      this._backgroundColor.setAlpha(e);
    }
    get colorRgba() {
      return this._backgroundColor.toArray();
    }
    destroy() {}
  };
  i.extension = {
    type: [r.ExtensionType.WebGLSystem, r.ExtensionType.WebGPUSystem, r.ExtensionType.CanvasSystem],
    name: "background",
    priority: 0
  }, i.defaultOptions = {
    backgroundAlpha: 1,
    backgroundColor: 0,
    clearBeforeRender: !0
  }, e.s(["BackgroundSystem", 0, i]);
};
