// Recovered from 0zzhxfvrp0q_a.js. Runtime module IDs: 56292.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524),
    i = t.i(222735),
    s = t.i(733705),
    r = t.i(727905),
    n = t.i(562140),
    l = t.i(419905),
    a = t.i(336966),
    o = t.i(558001),
    h = t.i(73517),
    d = t.i(974543);
  let u = class t extends e.default {
    constructor(e = {}) {
      super(), this.uid = (0, s.uid)("textStyle"), this._tick = 0, this._cachedFontString = null, function (t) {
        if ("boolean" == typeof t.dropShadow && t.dropShadow) {
          let e = u.defaultDropShadow;
          t.dropShadow = {
            alpha: t.dropShadowAlpha ?? e.alpha,
            angle: t.dropShadowAngle ?? e.angle,
            blur: t.dropShadowBlur ?? e.blur,
            color: t.dropShadowColor ?? e.color,
            distance: t.dropShadowDistance ?? e.distance
          };
        }
        if (void 0 !== t.strokeThickness) {
          (0, r.deprecation)(r.v8_0_0, "strokeThickness is now a part of stroke");
          let e = t.stroke,
            s = {};
          if (i.Color.isColorLike(e)) s.color = e;else if (e instanceof l.FillGradient || e instanceof a.FillPattern) s.fill = e;else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill")) s = e;else throw Error("Invalid stroke value.");
          t.stroke = {
            ...s,
            width: t.strokeThickness
          };
        }
        if (Array.isArray(t.fillGradientStops)) {
          if ((0, r.deprecation)(r.v8_0_0, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || 0 === t.fill.length) throw Error("Invalid fill value. Expected an array of colors for gradient fill.");
          t.fill.length !== t.fillGradientStops.length && (0, n.warn)("The number of fill colors must match the number of fill gradient stops.");
          let e = new l.FillGradient({
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: 1
              },
              textureSpace: "local"
            }),
            s = t.fillGradientStops.slice(),
            a = t.fill.map(t => i.Color.shared.setValue(t).toNumber());
          s.forEach((t, i) => {
            e.addColorStop(t, a[i]);
          }), t.fill = {
            fill: e
          };
        }
      }(e);
      const o = e instanceof t,
        h = e;
      o && (e = h._toObject());
      const d = {
        ...t.defaultTextStyle,
        ...e
      };
      for (const t in d) this[t] = d[t];
      this._tagStyles = e.tagStyles ?? void 0, this.update(), this._tick = 0;
    }
    get align() {
      return this._align;
    }
    set align(t) {
      this._align !== t && (this._align = t, this.update());
    }
    get breakWords() {
      return this._breakWords;
    }
    set breakWords(t) {
      this._breakWords !== t && (this._breakWords = t, this.update());
    }
    get dropShadow() {
      return this._dropShadow;
    }
    set dropShadow(e) {
      this._dropShadow !== e && (null !== e && "object" == typeof e ? this._dropShadow = this._createProxy({
        ...t.defaultDropShadow,
        ...e
      }) : this._dropShadow = e ? this._createProxy({
        ...t.defaultDropShadow
      }) : null, this.update());
    }
    get fontFamily() {
      return this._fontFamily;
    }
    set fontFamily(t) {
      this._fontFamily !== t && (this._fontFamily = t, this.update());
    }
    get fontSize() {
      return this._fontSize;
    }
    set fontSize(t) {
      this._fontSize !== t && ("string" == typeof t ? this._fontSize = parseInt(t, 10) : this._fontSize = t, this.update());
    }
    get fontStyle() {
      return this._fontStyle;
    }
    set fontStyle(t) {
      this._fontStyle !== t && (this._fontStyle = t.toLowerCase(), this.update());
    }
    get fontVariant() {
      return this._fontVariant;
    }
    set fontVariant(t) {
      this._fontVariant !== t && (this._fontVariant = t, this.update());
    }
    get fontWeight() {
      return this._fontWeight;
    }
    set fontWeight(t) {
      this._fontWeight !== t && (this._fontWeight = t, this.update());
    }
    get leading() {
      return this._leading;
    }
    set leading(t) {
      this._leading !== t && (this._leading = t, this.update());
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(t) {
      this._letterSpacing !== t && (this._letterSpacing = t, this.update());
    }
    get lineHeight() {
      return this._lineHeight;
    }
    set lineHeight(t) {
      this._lineHeight !== t && (this._lineHeight = t, this.update());
    }
    get padding() {
      return this._padding;
    }
    set padding(t) {
      this._padding !== t && (this._padding = t, this.update());
    }
    get filters() {
      return this._filters;
    }
    set filters(t) {
      this._filters !== t && (this._filters = Object.freeze(t), this.update());
    }
    get trim() {
      return this._trim;
    }
    set trim(t) {
      this._trim !== t && (this._trim = t, this.update());
    }
    get textBaseline() {
      return this._textBaseline;
    }
    set textBaseline(t) {
      this._textBaseline !== t && (this._textBaseline = t, this.update());
    }
    get whiteSpace() {
      return this._whiteSpace;
    }
    set whiteSpace(t) {
      this._whiteSpace !== t && (this._whiteSpace = t, this.update());
    }
    get wordWrap() {
      return this._wordWrap;
    }
    set wordWrap(t) {
      this._wordWrap !== t && (this._wordWrap = t, this.update());
    }
    get wordWrapWidth() {
      return this._wordWrapWidth;
    }
    set wordWrapWidth(t) {
      this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.update());
    }
    get fill() {
      return this._originalFill;
    }
    set fill(t) {
      t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({
        ...o.GraphicsContext.defaultFillStyle,
        ...t
      }, () => {
        this._fill = (0, h.toFillStyle)({
          ...this._originalFill
        }, o.GraphicsContext.defaultFillStyle);
      })), this._fill = (0, h.toFillStyle)(0 === t ? "black" : t, o.GraphicsContext.defaultFillStyle), this.update());
    }
    get stroke() {
      return this._originalStroke;
    }
    set stroke(t) {
      t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({
        ...o.GraphicsContext.defaultStrokeStyle,
        ...t
      }, () => {
        this._stroke = (0, h.toStrokeStyle)({
          ...this._originalStroke
        }, o.GraphicsContext.defaultStrokeStyle);
      })), this._stroke = (0, h.toStrokeStyle)(t, o.GraphicsContext.defaultStrokeStyle), this.update());
    }
    get tagStyles() {
      return this._tagStyles;
    }
    set tagStyles(t) {
      this._tagStyles !== t && (this._tagStyles = t ?? void 0, this.update());
    }
    update() {
      this._tick++, this._cachedFontString = null, this.emit("update", this);
    }
    reset() {
      let e = t.defaultTextStyle;
      for (let t in e) this[t] = e[t];
    }
    assign(t) {
      for (let e in t) this[e] = t[e];
      return this;
    }
    get styleKey() {
      return `${this.uid}-${this._tick}`;
    }
    get _fontString() {
      return null === this._cachedFontString && (this._cachedFontString = (0, d.fontStringFromTextStyle)(this)), this._cachedFontString;
    }
    _toObject() {
      return {
        align: this.align,
        breakWords: this.breakWords,
        dropShadow: this._dropShadow ? {
          ...this._dropShadow
        } : null,
        fill: this._fill ? {
          ...this._fill
        } : void 0,
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        fontStyle: this.fontStyle,
        fontVariant: this.fontVariant,
        fontWeight: this.fontWeight,
        leading: this.leading,
        letterSpacing: this.letterSpacing,
        lineHeight: this.lineHeight,
        padding: this.padding,
        stroke: this._stroke ? {
          ...this._stroke
        } : void 0,
        textBaseline: this.textBaseline,
        trim: this.trim,
        whiteSpace: this.whiteSpace,
        wordWrap: this.wordWrap,
        wordWrapWidth: this.wordWrapWidth,
        filters: this._filters ? [...this._filters] : void 0,
        tagStyles: this._tagStyles ? {
          ...this._tagStyles
        } : void 0
      };
    }
    clone() {
      return new t(this._toObject());
    }
    _getFinalPadding() {
      let t = 0;
      if (this._filters) for (let e = 0; e < this._filters.length; e++) t += this._filters[e].padding;
      return Math.max(this._padding, t);
    }
    destroy(t = !1) {
      if (this.removeAllListeners(), "boolean" == typeof t ? t : t?.texture) {
        let e = "boolean" == typeof t ? t : t?.textureSource;
        this._fill?.texture && this._fill.texture.destroy(e), this._originalFill?.texture && this._originalFill.texture.destroy(e), this._stroke?.texture && this._stroke.texture.destroy(e), this._originalStroke?.texture && this._originalStroke.texture.destroy(e);
      }
      this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
    }
    _createProxy(t, e) {
      return new Proxy(t, {
        set: (t, i, s) => t[i] === s || (t[i] = s, e?.(i, s), this.update(), !0)
      });
    }
    _isFillStyle(t) {
      return (t ?? null) !== null && !(i.Color.isColorLike(t) || t instanceof l.FillGradient || t instanceof a.FillPattern);
    }
  };
  u.defaultDropShadow = {
    alpha: 1,
    angle: Math.PI / 6,
    blur: 0,
    color: "black",
    distance: 5
  }, u.defaultTextStyle = {
    align: "left",
    breakWords: !1,
    dropShadow: null,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    leading: 0,
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: null,
    textBaseline: "alphabetic",
    trim: !1,
    whiteSpace: "pre",
    wordWrap: !1,
    wordWrapWidth: 100
  }, t.s(["TextStyle", 0, u]);
};
