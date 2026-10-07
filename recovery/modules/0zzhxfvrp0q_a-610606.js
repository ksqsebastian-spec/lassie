// Recovered from 0zzhxfvrp0q_a.js. Runtime module IDs: 610606, 952196, 471272, 624433, 791526.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(164811),
    i = t.i(539088),
    s = t.i(337654),
    r = t.i(383361),
    n = t.i(680055),
    l = t.i(3165),
    a = t.i(727905),
    o = t.i(562140),
    h = t.i(556700),
    d = t.i(56292),
    u = t.i(222735),
    c = t.i(963345),
    p = t.i(24880),
    f = t.i(602699),
    g = t.i(974543),
    S = t.i(110477),
    _ = r;
  let x = class t extends _.AbstractBitmapFont {
    constructor(e) {
      super(), this.resolution = 1, this.pages = [], this._padding = 0, this._measureCache = Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentMaxCharHeight = 0, this._currentPageIndex = -1, this._skipKerning = !1;
      const i = {
        ...t.defaultOptions,
        ...e
      };
      this._textureSize = i.textureSize, this._mipmap = i.mipmap;
      const r = i.style.clone();
      i.overrideFill && (r._fill.color = 0xffffff, r._fill.alpha = 1, r._fill.texture = s.Texture.WHITE, r._fill.fill = null), this.applyFillAsTint = i.overrideFill;
      const n = r.fontSize;
      r.fontSize = this.baseMeasurementFontSize;
      const l = (0, g.fontStringFromTextStyle)(r);
      i.overrideSize ? (r._stroke && (r._stroke.width *= this.baseRenderedFontSize / n), r.dropShadow && (r.dropShadow.blur *= this.baseRenderedFontSize / n, r.dropShadow.distance *= this.baseRenderedFontSize / n)) : r.fontSize = this.baseRenderedFontSize = n, this._style = r, this._skipKerning = i.skipKerning ?? !1, this.resolution = i.resolution ?? 1, this._padding = i.padding ?? 4, i.textureStyle && (this._textureStyle = i.textureStyle instanceof f.TextureStyle ? i.textureStyle : new f.TextureStyle(i.textureStyle)), this.fontMetrics = h.CanvasTextMetrics.measureFont(l), this.lineHeight = r.lineHeight || this.fontMetrics.fontSize || r.fontSize;
    }
    ensureCharacters(t) {
      let e,
        r = h.CanvasTextMetrics.graphemeSegmenter(t).filter(t => !this._currentChars.includes(t)).filter((t, e, i) => i.indexOf(t) === e);
      if (!r.length) return;
      this._currentChars = [...this._currentChars, ...r];
      let {
          canvas: n,
          context: l
        } = (e = -1 === this._currentPageIndex ? this._nextPage() : this.pages[this._currentPageIndex]).canvasAndContext,
        a = e.texture.source,
        o = this._style,
        d = this._currentX,
        u = this._currentY,
        c = this._currentMaxCharHeight,
        p = this.baseRenderedFontSize / this.baseMeasurementFontSize,
        f = (o.dropShadow?.distance ?? 0) + (o._stroke?.width ?? 0),
        g = this._padding + f,
        S = !1,
        _ = n.width / this.resolution,
        x = n.height / this.resolution;
      for (let t = 0; t < r.length; t++) {
        let e = r[t],
          f = h.CanvasTextMetrics.measureText(e, o, n, !1);
        f.lineHeight = f.height;
        let y = f.width * p,
          m = Math.ceil(("italic" === o.fontStyle ? 2 : 1) * y),
          w = f.height * p,
          F = m + 2 * g,
          C = w + 2 * g;
        if (S = !1, "\n" !== e && "\r" !== e && "	" !== e && " " !== e && (S = !0, c = Math.ceil(Math.max(C, c))), d + F > _ && (d = 0, (u += c) + (c = C) > x)) {
          a.update();
          let t = this._nextPage();
          n = t.canvasAndContext.canvas, l = t.canvasAndContext.context, a = t.texture.source, d = 0, u = 0, c = 0;
        }
        let v = l.measureText(e).width / p;
        if (this.chars[e] = {
          id: e.codePointAt(0),
          xOffset: -(g / p),
          yOffset: -(g / p),
          xAdvance: v,
          kerning: {}
        }, S) {
          this._drawGlyph(l, f, d + g, u + g, p, o);
          let t = a.width * p,
            r = a.height * p,
            n = new i.Rectangle(d / t * a.width, u / r * a.height, F / t * a.width, C / r * a.height);
          this.chars[e].texture = new s.Texture({
            source: a,
            frame: n
          }), d += Math.ceil(F);
        }
      }
      a.update(), this._currentX = d, this._currentY = u, this._currentMaxCharHeight = c, this._skipKerning || this._applyKerning(r, l, p);
    }
    get pageTextures() {
      return (0, a.deprecation)(a.v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."), this.pages;
    }
    _applyKerning(t, e, i) {
      let s = this._measureCache;
      for (let r = 0; r < t.length; r++) {
        let n = t[r];
        for (let t = 0; t < this._currentChars.length; t++) {
          let r = this._currentChars[t],
            l = s[n];
          l || (l = s[n] = e.measureText(n).width);
          let a = s[r];
          a || (a = s[r] = e.measureText(r).width);
          let o = e.measureText(n + r).width,
            h = o - (l + a);
          h && this.chars[n] && (this.chars[n].kerning[r] = h / i), (h = (o = e.measureText(n + r).width) - (l + a)) && this.chars[r] && (this.chars[r].kerning[n] = h / i);
        }
      }
    }
    _nextPage() {
      this._currentPageIndex++;
      let t = this.resolution,
        e = c.CanvasPool.getOptimalCanvasAndContext(this._textureSize, this._textureSize, t);
      this._setupContext(e.context, this._style, t);
      let i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize),
        r = new s.Texture({
          source: new p.ImageSource({
            resource: e.canvas,
            resolution: i,
            alphaMode: "premultiply-alpha-on-upload",
            autoGenerateMipmaps: this._mipmap
          })
        });
      this._textureStyle && (r.source.style = this._textureStyle);
      let n = {
        canvasAndContext: e,
        texture: r
      };
      return this.pages[this._currentPageIndex] = n, n;
    }
    _setupContext(t, e, i) {
      e.fontSize = this.baseRenderedFontSize, t.scale(i, i), t.font = (0, g.fontStringFromTextStyle)(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline;
      let s = e._stroke,
        r = s?.width ?? 0;
      if (s && (t.lineWidth = r, t.lineJoin = s.join, t.miterLimit = s.miterLimit, t.strokeStyle = (0, S.getCanvasFillStyle)(s, t)), e._fill && (t.fillStyle = (0, S.getCanvasFillStyle)(e._fill, t)), e.dropShadow) {
        let s = e.dropShadow,
          r = u.Color.shared.setValue(s.color).toArray(),
          n = s.blur * i,
          l = s.distance * i;
        t.shadowColor = `rgba(${255 * r[0]},${255 * r[1]},${255 * r[2]},${s.alpha})`, t.shadowBlur = n, t.shadowOffsetX = Math.cos(s.angle) * l, t.shadowOffsetY = Math.sin(s.angle) * l;
      } else t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
    }
    _drawGlyph(t, e, i, s, r, n) {
      let l = e.text,
        a = e.fontProperties,
        o = n._stroke,
        h = (o?.width ?? 0) * r,
        d = i + h / 2,
        u = s - h / 2,
        c = a.descent * r,
        p = e.lineHeight * r,
        f = !1;
      n.stroke && h && (f = !0, t.strokeText(l, d, u + p - c));
      let {
        shadowBlur: g,
        shadowOffsetX: S,
        shadowOffsetY: _
      } = t;
      n._fill && (f && (t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0), t.fillText(l, d, u + p - c)), f && (t.shadowBlur = g, t.shadowOffsetX = S, t.shadowOffsetY = _);
    }
    destroy() {
      super.destroy();
      for (let t = 0; t < this.pages.length; t++) {
        let {
          canvasAndContext: e,
          texture: i
        } = this.pages[t];
        c.CanvasPool.returnCanvasAndContext(e), i.destroy(!0);
      }
      this.pages = null;
    }
  };
  x.defaultOptions = {
    textureSize: 512,
    style: new d.TextStyle(),
    mipmap: !0
  }, t.s(["DynamicBitmapFont", 0, x], 952196);
  var y = t.i(742495);
  function m(t, e, i, s) {
    let r = {
      width: 0,
      height: 0,
      offsetY: 0,
      scale: e.fontSize / i.baseMeasurementFontSize,
      lines: [{
        width: 0,
        charPositions: [],
        spaceWidth: 0,
        spacesIndex: [],
        chars: []
      }]
    };
    r.offsetY = i.baseLineOffset;
    let n = r.lines[0],
      l = null,
      a = !0,
      o = {
        spaceWord: !1,
        width: 0,
        start: 0,
        index: 0,
        positions: [],
        chars: []
      },
      h = i.baseMeasurementFontSize / e.fontSize,
      d = e.letterSpacing * h,
      u = e.wordWrapWidth * h,
      c = e.lineHeight ? e.lineHeight * h : i.lineHeight,
      p = e.wordWrap && e.breakWords,
      f = (0, y.collapseSpaces)(e.whiteSpace),
      g = (0, y.collapseNewlines)(e.whiteSpace);
    if (f || g) {
      let e = [],
        i = f;
      for (let s = 0; s < t.length; s++) {
        let r = t[s];
        if ("\r" === r || "\n" === r) if (g) "\r" === r && "\n" === t[s + 1] && s++, r = " ";else {
          f && (i = !0), e.push(r);
          continue;
        }
        if ((0, y.isBreakingSpace)(r)) {
          if (f && (0, y.isCollapsibleSpace)(r)) {
            if (i) continue;
            i = !0, e.push(" ");
          } else i = !1, e.push(r);
        } else i = !1, e.push(r);
      }
      t = e;
    }
    let S = t => {
        let e = n.width;
        for (let i = 0; i < o.index; i++) {
          let s = t.positions[i];
          n.chars.push(t.chars[i]), n.charPositions.push(s + e);
        }
        n.width += t.width, (o.index > 0 || !f) && (a = !1), o.width = 0, o.index = 0, o.chars.length = 0;
      },
      _ = () => {
        let t = n.chars.length - 1;
        if (s) {
          let e = n.chars[t];
          for (; (0, y.isCollapsibleSpace)(e);) n.width -= i.chars[e].xAdvance, n.spacesIndex.pop(), e = n.chars[--t];
        }
        r.width = Math.max(r.width, n.width), n = {
          width: 0,
          charPositions: [],
          chars: [],
          spaceWidth: 0,
          spacesIndex: []
        }, a = !0, r.lines.push(n), r.height += c;
      },
      x = t => t - d > u;
    for (let s = 0; s < t.length + 1; s++) {
      let r,
        h = s === t.length;
      h || (r = t[s]);
      let u = i.chars[r];
      if (/(?:\s)/.test(r) || "\r" === r || "\n" === r || h) {
        if (!a && e.wordWrap && x(n.width + o.width) ? _() : o.start = n.width, S(o), !h && u && n.charPositions.push(0), "\r" === r || "\n" === r) _();else if (!h && u) {
          let t = u.xAdvance + (u.kerning?.[l] || 0) + d;
          n.width += t, n.spaceWidth = t, n.spacesIndex.push(n.charPositions.length), n.chars.push(r);
        }
      } else if (u) {
        let t = u.kerning?.[l] || 0,
          i = u.xAdvance + t + d;
        p && x(o.width + i) && (a || _(), S(o), _()), o.positions[o.index++] = o.width + t, o.chars.push(r), o.width += i, (0, y.isBreakAfterChar)(r) && (!a && e.wordWrap && x(n.width + o.width) && _(), S(o));
      }
      l = r;
    }
    return _(), "center" === e.align ? function (t) {
      for (let e = 0; e < t.lines.length; e++) {
        let i = t.lines[e],
          s = t.width / 2 - i.width / 2;
        for (let t = 0; t < i.charPositions.length; t++) i.charPositions[t] += s;
      }
    }(r) : "right" === e.align ? function (t) {
      for (let e = 0; e < t.lines.length; e++) {
        let i = t.lines[e],
          s = t.width - i.width;
        for (let t = 0; t < i.charPositions.length; t++) i.charPositions[t] += s;
      }
    }(r) : "justify" === e.align && function (t) {
      let e = t.width;
      for (let i = 0; i < t.lines.length - 2; i++) {
        let s = t.lines[i],
          r = 0,
          n = s.spacesIndex[r++],
          l = 0,
          a = s.spacesIndex.length,
          o = (e - s.width) / a;
        for (let t = 0; t < s.charPositions.length; t++) t === n && (n = s.spacesIndex[r++], l += o), s.charPositions[t] += l;
      }
    }(r), r;
  }
  function w(t) {
    if ("" === t) return [];
    "string" == typeof t && (t = [t]);
    let e = [];
    for (let i = 0, s = t.length; i < s; i++) {
      let s = t[i];
      if (Array.isArray(s)) {
        if (2 !== s.length) throw Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
        if (0 === s[0].length || 0 === s[1].length) throw Error("[BitmapFont]: Invalid character delimiter.");
        let t = s[0].charCodeAt(0),
          i = s[1].charCodeAt(0);
        if (i < t) throw Error("[BitmapFont]: Invalid character range.");
        for (let s = t; s <= i; s++) e.push(String.fromCharCode(s));
      } else e.push(...Array.from(s));
    }
    if (0 === e.length) throw Error("[BitmapFont]: Empty set when resolving characters.");
    return e;
  }
  t.s(["getBitmapTextLayout", 0, m], 471272), t.s(["resolveCharacters", 0, w], 624433);
  let F = 0,
    C = new class {
      constructor() {
        this.ALPHA = [["a", "z"], ["A", "Z"], " "], this.NUMERIC = [["0", "9"]], this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], this.ASCII = [[" ", "~"]], this.defaultOptions = {
          chars: this.ALPHANUMERIC,
          resolution: 1,
          padding: 4,
          skipKerning: !1,
          textureStyle: null
        }, this.measureCache = (0, n.lru)(1e3);
      }
      getFont(t, e) {
        let i = `${e.fontFamily}-bitmap`,
          s = !0;
        if (l.Cache.has(i)) {
          let e = l.Cache.get(i);
          return e.ensureCharacters?.(t), e;
        }
        if (e._fill.fill && !e._stroke ? (i += e._fill.fill.styleKey, s = !1) : (e._stroke || e.dropShadow) && (i = `${e.styleKey}-bitmap`, s = !1), i += `-${e.fontStyle}`, i += `-${e.fontVariant}`, i += `-${e.fontWeight}`, !l.Cache.has(i)) {
          let t = Object.create(e);
          t._lineHeight = 0;
          let r = new x({
            style: t,
            overrideFill: s,
            overrideSize: !0,
            ...this.defaultOptions
          });
          ++F > 50 && (0, o.warn)("BitmapText", `You have dynamically created ${F} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``), r.once("destroy", () => {
            F--, l.Cache.remove(i);
          }), l.Cache.set(i, r);
        }
        let r = l.Cache.get(i);
        return r.ensureCharacters?.(t), r;
      }
      getLayout(t, e, i = !0) {
        let s = this.getFont(t, e),
          r = `${t}-${e.styleKey}-${i}`;
        if (this.measureCache.has(r)) return this.measureCache.get(r);
        let n = m(h.CanvasTextMetrics.graphemeSegmenter(t), e, s, i);
        return this.measureCache.set(r, n), n;
      }
      measureText(t, e, i = !0) {
        return this.getLayout(t, e, i);
      }
      install(...t) {
        let e = t[0];
        "string" == typeof e && (e = {
          name: e,
          style: t[1],
          chars: t[2]?.chars,
          resolution: t[2]?.resolution,
          padding: t[2]?.padding,
          skipKerning: t[2]?.skipKerning
        }, (0, a.deprecation)(a.v8_0_0, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));
        let i = e?.name;
        if (!i) throw Error("[BitmapFontManager] Property `name` is required.");
        let s = (e = {
            ...this.defaultOptions,
            ...e
          }).style,
          r = s instanceof d.TextStyle ? s : new d.TextStyle(s),
          n = e.dynamicFill ?? this._canUseTintForStyle(r),
          o = new x({
            style: r,
            overrideFill: n,
            skipKerning: e.skipKerning,
            padding: e.padding,
            resolution: e.resolution,
            overrideSize: !1,
            textureStyle: e.textureStyle
          }),
          h = w(e.chars);
        return o.ensureCharacters(h.join("")), l.Cache.set(`${i}-bitmap`, o), o.once("destroy", () => l.Cache.remove(`${i}-bitmap`)), o;
      }
      uninstall(t) {
        let e = `${t}-bitmap`,
          i = l.Cache.get(e);
        i && i.destroy();
      }
      _canUseTintForStyle(t) {
        return !t._stroke && (!t.dropShadow || 0 === t.dropShadow.color) && !t._fill.fill && 0xffffff === t._fill.color;
      }
    }();
  t.s(["BitmapFontManager", 0, C], 791526);
  class v extends r.AbstractBitmapFont {
    constructor(t, r) {
      super();
      const {
        textures: n,
        data: l
      } = t;
      Object.keys(l.pages).forEach(t => {
        let e = n[l.pages[parseInt(t, 10)].id];
        this.pages.push({
          texture: e
        });
      }), Object.keys(l.chars).forEach(t => {
        let r = l.chars[t],
          {
            frame: a,
            source: o,
            rotate: h
          } = n[r.page],
          d = e.groupD8.transformRectCoords(r, a, h, new i.Rectangle()),
          u = new s.Texture({
            frame: d,
            orig: new i.Rectangle(0, 0, r.width, r.height),
            source: o,
            rotate: h
          });
        this.chars[t] = {
          id: t.codePointAt(0),
          xOffset: r.xOffset,
          yOffset: r.yOffset,
          xAdvance: r.xAdvance,
          kerning: r.kerning ?? {},
          texture: u
        };
      }), this.baseRenderedFontSize = l.fontSize, this.baseMeasurementFontSize = l.fontSize, this.fontMetrics = {
        ascent: 0,
        descent: 0,
        fontSize: l.fontSize
      }, this.baseLineOffset = l.baseLineOffset, this.lineHeight = l.lineHeight, this.fontFamily = l.fontFamily, this.distanceField = l.distanceField ?? {
        type: "none",
        range: 0
      }, this.url = r;
    }
    destroy() {
      super.destroy();
      for (let t = 0; t < this.pages.length; t++) {
        let {
          texture: e
        } = this.pages[t];
        e.destroy(!0);
      }
      this.pages = null;
    }
    static install(t) {
      C.install(t);
    }
    static uninstall(t) {
      C.uninstall(t);
    }
  }
  t.s(["BitmapFont", 0, v], 610606);
};
