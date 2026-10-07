// Recovered from 0zzhxfvrp0q_a.js. Runtime module IDs: 383361.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524),
    i = t.i(727905);
  class s extends e.default {
    constructor() {
      super(...arguments), this.chars = Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = {
        fontSize: 0,
        ascent: 0,
        descent: 0
      }, this.baseLineOffset = 0, this.distanceField = {
        type: "none",
        range: 0
      }, this.pages = [], this.applyFillAsTint = !0, this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100;
    }
    get font() {
      return (0, i.deprecation)(i.v8_0_0, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."), this.fontFamily;
    }
    get pageTextures() {
      return (0, i.deprecation)(i.v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
    }
    get size() {
      return (0, i.deprecation)(i.v8_0_0, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."), this.fontMetrics.fontSize;
    }
    get distanceFieldRange() {
      return (0, i.deprecation)(i.v8_0_0, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."), this.distanceField.range;
    }
    get distanceFieldType() {
      return (0, i.deprecation)(i.v8_0_0, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."), this.distanceField.type;
    }
    destroy(t = !1) {
      for (let t in this.emit("destroy", this), this.removeAllListeners(), this.chars) this.chars[t].texture?.destroy();
      this.chars = null, t && (this.pages.forEach(t => t.texture.destroy(!0)), this.pages = null);
    }
  }
  t.s(["AbstractBitmapFont", 0, s]);
};
