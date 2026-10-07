;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "662a5f86-57a6-c0f4-e598-7e9531264905";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    383361,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        var i = t.i(727905);
        class s extends e.default {
            constructor(){
                super(...arguments);
                this.chars = Object.create(null);
                this.lineHeight = 0;
                this.fontFamily = "";
                this.fontMetrics = {
                    fontSize: 0,
                    ascent: 0,
                    descent: 0
                };
                this.baseLineOffset = 0;
                this.distanceField = {
                    type: "none",
                    range: 0
                };
                this.pages = [];
                this.applyFillAsTint = true;
                this.baseMeasurementFontSize = 100;
                this.baseRenderedFontSize = 100;
            }
            get font() {
                i.deprecation(i.v8_0_0, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead.");
                return this.fontFamily;
            }
            get pageTextures() {
                i.deprecation(i.v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
                return this.pages;
            }
            get size() {
                i.deprecation(i.v8_0_0, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead.");
                return this.fontMetrics.fontSize;
            }
            get distanceFieldRange() {
                i.deprecation(i.v8_0_0, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead.");
                return this.distanceField.range;
            }
            get distanceFieldType() {
                i.deprecation(i.v8_0_0, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead.");
                return this.distanceField.type;
            }
            destroy(t = false) {
                for(let t in this.emit("destroy", this), this.removeAllListeners(), this.chars){
                    this.chars[t].texture?.destroy();
                }
                this.chars = null;
                if (t) {
                    this.pages.forEach((t)=>t.texture.destroy(true));
                    this.pages = null;
                }
            }
        }
        t.s([
            "AbstractBitmapFont",
            0,
            s
        ]);
    },
    610606,
    952196,
    471272,
    624433,
    791526,
    (t)=>{
        "use strict";
        var e = t.i(164811);
        var i = t.i(539088);
        var s = t.i(337654);
        var r = t.i(383361);
        var n = t.i(680055);
        var l = t.i(3165);
        var a = t.i(727905);
        var o = t.i(562140);
        var h = t.i(556700);
        var d = t.i(56292);
        var u = t.i(222735);
        var c = t.i(963345);
        var p = t.i(24880);
        var f = t.i(602699);
        var g = t.i(974543);
        var S = t.i(110477);
        var _ = r;
        let x = class t extends _.AbstractBitmapFont {
            constructor(e){
                super();
                this.resolution = 1;
                this.pages = [];
                this._padding = 0;
                this._measureCache = Object.create(null);
                this._currentChars = [];
                this._currentX = 0;
                this._currentY = 0;
                this._currentMaxCharHeight = 0;
                this._currentPageIndex = -1;
                this._skipKerning = false;
                const i = {
                    ...t.defaultOptions,
                    ...e
                };
                this._textureSize = i.textureSize;
                this._mipmap = i.mipmap;
                const r = i.style.clone();
                if (i.overrideFill) {
                    r._fill.color = 16777215;
                    r._fill.alpha = 1;
                    r._fill.texture = s.Texture.WHITE;
                    r._fill.fill = null;
                }
                this.applyFillAsTint = i.overrideFill;
                const n = r.fontSize;
                r.fontSize = this.baseMeasurementFontSize;
                const l = g.fontStringFromTextStyle(r);
                if (i.overrideSize) {
                    if (r._stroke) {
                        r._stroke.width *= this.baseRenderedFontSize / n;
                    }
                    if (r.dropShadow) {
                        r.dropShadow.blur *= this.baseRenderedFontSize / n;
                        r.dropShadow.distance *= this.baseRenderedFontSize / n;
                    }
                } else {
                    r.fontSize = this.baseRenderedFontSize = n;
                }
                this._style = r;
                this._skipKerning = i.skipKerning ?? false;
                this.resolution = i.resolution ?? 1;
                this._padding = i.padding ?? 4;
                if (i.textureStyle) {
                    this._textureStyle = i.textureStyle instanceof f.TextureStyle ? i.textureStyle : new f.TextureStyle(i.textureStyle);
                }
                this.fontMetrics = h.CanvasTextMetrics.measureFont(l);
                this.lineHeight = r.lineHeight || this.fontMetrics.fontSize || r.fontSize;
            }
            ensureCharacters(t) {
                let e;
                let r = h.CanvasTextMetrics.graphemeSegmenter(t).filter((t)=>!this._currentChars.includes(t)).filter((t, e, i)=>i.indexOf(t) === e);
                if (!r.length) {
                    return;
                }
                this._currentChars = [
                    ...this._currentChars,
                    ...r
                ];
                let { canvas, context } = (e = -1 === this._currentPageIndex ? this._nextPage() : this.pages[this._currentPageIndex]).canvasAndContext;
                let source = e.texture.source;
                let _style = this._style;
                let _currentX = this._currentX;
                let _currentY = this._currentY;
                let _currentMaxCharHeight = this._currentMaxCharHeight;
                let p = this.baseRenderedFontSize / this.baseMeasurementFontSize;
                let f = (_style.dropShadow?.distance ?? 0) + (_style._stroke?.width ?? 0);
                let g = this._padding + f;
                let S = false;
                let _ = canvas.width / this.resolution;
                let x = canvas.height / this.resolution;
                for(let t = 0; t < r.length; t++){
                    let e = r[t];
                    let f = h.CanvasTextMetrics.measureText(e, _style, canvas, false);
                    f.lineHeight = f.height;
                    let y = f.width * p;
                    let m = Math.ceil((_style.fontStyle === "italic" ? 2 : 1) * y);
                    let w = f.height * p;
                    let F = m + 2 * g;
                    let C = w + 2 * g;
                    S = false;
                    if (e !== "\n" && e !== "\r" && e !== "	" && e !== " ") {
                        S = true;
                        _currentMaxCharHeight = Math.ceil(Math.max(C, _currentMaxCharHeight));
                    }
                    if (_currentX + F > _ && (_currentX = 0, (_currentY += _currentMaxCharHeight) + (_currentMaxCharHeight = C) > x)) {
                        source.update();
                        let t = this._nextPage();
                        canvas = t.canvasAndContext.canvas;
                        context = t.canvasAndContext.context;
                        source = t.texture.source;
                        _currentX = 0;
                        _currentY = 0;
                        _currentMaxCharHeight = 0;
                    }
                    let xAdvance = context.measureText(e).width / p;
                    this.chars[e] = {
                        id: e.codePointAt(0),
                        xOffset: -(g / p),
                        yOffset: -(g / p),
                        xAdvance,
                        kerning: {}
                    };
                    if (S) {
                        this._drawGlyph(context, f, _currentX + g, _currentY + g, p, _style);
                        let t = source.width * p;
                        let r = source.height * p;
                        let n = new i.Rectangle(_currentX / t * source.width, _currentY / r * source.height, F / t * source.width, C / r * source.height);
                        this.chars[e].texture = new s.Texture({
                            source,
                            frame: n
                        });
                        _currentX += Math.ceil(F);
                    }
                }
                source.update();
                this._currentX = _currentX;
                this._currentY = _currentY;
                this._currentMaxCharHeight = _currentMaxCharHeight;
                if (!this._skipKerning) {
                    this._applyKerning(r, context, p);
                }
            }
            get pageTextures() {
                a.deprecation(a.v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
                return this.pages;
            }
            _applyKerning(t, e, i) {
                let _measureCache = this._measureCache;
                for(let r = 0; r < t.length; r++){
                    let n = t[r];
                    for(let t = 0; t < this._currentChars.length; t++){
                        let _currentChar = this._currentChars[t];
                        let l = _measureCache[n];
                        if (!l) {
                            l = _measureCache[n] = e.measureText(n).width;
                        }
                        let a = _measureCache[_currentChar];
                        if (!a) {
                            a = _measureCache[_currentChar] = e.measureText(_currentChar).width;
                        }
                        let o = e.measureText(n + _currentChar).width;
                        let h = o - (l + a);
                        if (h && this.chars[n]) {
                            this.chars[n].kerning[_currentChar] = h / i;
                        }
                        if ((h = (o = e.measureText(n + _currentChar).width) - (l + a)) && this.chars[_currentChar]) {
                            this.chars[_currentChar].kerning[n] = h / i;
                        }
                    }
                }
            }
            _nextPage() {
                this._currentPageIndex++;
                let resolution = this.resolution;
                let canvasAndContext = c.CanvasPool.getOptimalCanvasAndContext(this._textureSize, this._textureSize, resolution);
                this._setupContext(canvasAndContext.context, this._style, resolution);
                let resolution_1 = resolution * (this.baseRenderedFontSize / this.baseMeasurementFontSize);
                let r = new s.Texture({
                    source: new p.ImageSource({
                        resource: canvasAndContext.canvas,
                        resolution: resolution_1,
                        alphaMode: "premultiply-alpha-on-upload",
                        autoGenerateMipmaps: this._mipmap
                    })
                });
                if (this._textureStyle) {
                    r.source.style = this._textureStyle;
                }
                let n = {
                    canvasAndContext,
                    texture: r
                };
                this.pages[this._currentPageIndex] = n;
                return n;
            }
            _setupContext(t, e, i) {
                e.fontSize = this.baseRenderedFontSize;
                t.scale(i, i);
                t.font = g.fontStringFromTextStyle(e);
                e.fontSize = this.baseMeasurementFontSize;
                t.textBaseline = e.textBaseline;
                let e__stroke = e._stroke;
                let r = e__stroke?.width ?? 0;
                if (e__stroke) {
                    t.lineWidth = r;
                    t.lineJoin = e__stroke.join;
                    t.miterLimit = e__stroke.miterLimit;
                    t.strokeStyle = S.getCanvasFillStyle(e__stroke, t);
                }
                if (e._fill) {
                    t.fillStyle = S.getCanvasFillStyle(e._fill, t);
                }
                if (e.dropShadow) {
                    let s = e.dropShadow;
                    let r = u.Color.shared.setValue(s.color).toArray();
                    let n = s.blur * i;
                    let l = s.distance * i;
                    t.shadowColor = `rgba(${255 * r[0]},${255 * r[1]},${255 * r[2]},${s.alpha})`;
                    t.shadowBlur = n;
                    t.shadowOffsetX = Math.cos(s.angle) * l;
                    t.shadowOffsetY = Math.sin(s.angle) * l;
                } else {
                    t.shadowColor = "black";
                    t.shadowBlur = 0;
                    t.shadowOffsetX = 0;
                    t.shadowOffsetY = 0;
                }
            }
            _drawGlyph(t, e, i, s, r, n) {
                let e_text = e.text;
                let e_fontProperties = e.fontProperties;
                let n__stroke = n._stroke;
                let h = (n__stroke?.width ?? 0) * r;
                let d = i + h / 2;
                let u = s - h / 2;
                let c = e_fontProperties.descent * r;
                let p = e.lineHeight * r;
                let f = false;
                if (n.stroke && h) {
                    f = true;
                    t.strokeText(e_text, d, u + p - c);
                }
                let { shadowBlur, shadowOffsetX, shadowOffsetY } = t;
                if (n._fill) {
                    if (f) {
                        t.shadowBlur = 0;
                        t.shadowOffsetX = 0;
                        t.shadowOffsetY = 0;
                    }
                    t.fillText(e_text, d, u + p - c);
                }
                if (f) {
                    t.shadowBlur = shadowBlur;
                    t.shadowOffsetX = shadowOffsetX;
                    t.shadowOffsetY = shadowOffsetY;
                }
            }
            destroy() {
                super.destroy();
                for(let t = 0; t < this.pages.length; t++){
                    let { canvasAndContext, texture } = this.pages[t];
                    c.CanvasPool.returnCanvasAndContext(canvasAndContext);
                    texture.destroy(true);
                }
                this.pages = null;
            }
        };
        x.defaultOptions = {
            textureSize: 512,
            style: new d.TextStyle,
            mipmap: true
        };
        t.s([
            "DynamicBitmapFont",
            0,
            x
        ], 952196);
        var y = t.i(742495);
        function m(t, e, i, s) {
            let r = {
                width: 0,
                height: 0,
                offsetY: 0,
                scale: e.fontSize / i.baseMeasurementFontSize,
                lines: [
                    {
                        width: 0,
                        charPositions: [],
                        spaceWidth: 0,
                        spacesIndex: [],
                        chars: []
                    }
                ]
            };
            r.offsetY = i.baseLineOffset;
            let n = r.lines[0];
            let l = null;
            let a = true;
            let o = {
                spaceWord: false,
                width: 0,
                start: 0,
                index: 0,
                positions: [],
                chars: []
            };
            let h = i.baseMeasurementFontSize / e.fontSize;
            let d = e.letterSpacing * h;
            let u = e.wordWrapWidth * h;
            let c = e.lineHeight ? e.lineHeight * h : i.lineHeight;
            let p = e.wordWrap && e.breakWords;
            let f = y.collapseSpaces(e.whiteSpace);
            let g = y.collapseNewlines(e.whiteSpace);
            if (f || g) {
                let e = [];
                let i = f;
                for(let s = 0; s < t.length; s++){
                    let r = t[s];
                    if (r === "\r" || r === "\n") {
                        if (g) {
                            r === "\r" && t[s + 1] === "\n" && s++;
                            r = " ";
                        } else {
                            if (f) {
                                i = true;
                            }
                            e.push(r);
                            continue;
                        }
                    }
                    if (y.isBreakingSpace(r)) {
                        if (f && y.isCollapsibleSpace(r)) {
                            if (i) {
                                continue;
                            }
                            i = true;
                            e.push(" ");
                        } else {
                            i = false;
                            e.push(r);
                        }
                    } else {
                        i = false;
                        e.push(r);
                    }
                }
                t = e;
            }
            let S = (t)=>{
                let n_width = n.width;
                for(let i = 0; i < o.index; i++){
                    let s = t.positions[i];
                    n.chars.push(t.chars[i]);
                    n.charPositions.push(s + n_width);
                }
                n.width += t.width;
                if (o.index > 0 || !f) {
                    a = false;
                }
                o.width = 0;
                o.index = 0;
                o.chars.length = 0;
            };
            let _ = ()=>{
                let t = n.chars.length - 1;
                if (s) {
                    let e = n.chars[t];
                    while(y.isCollapsibleSpace(e)){
                        n.width -= i.chars[e].xAdvance;
                        n.spacesIndex.pop();
                        e = n.chars[--t];
                    }
                }
                r.width = Math.max(r.width, n.width);
                n = {
                    width: 0,
                    charPositions: [],
                    chars: [],
                    spaceWidth: 0,
                    spacesIndex: []
                };
                a = true;
                r.lines.push(n);
                r.height += c;
            };
            let x = (t)=>t - d > u;
            for(let s = 0; s < t.length + 1; s++){
                let r;
                let h = s === t.length;
                if (!h) {
                    r = t[s];
                }
                let u = i.chars[r];
                if (/(?:\s)/.test(r) || r === "\r" || r === "\n" || h) {
                    if (!a && e.wordWrap && x(n.width + o.width)) {
                        _();
                    } else {
                        o.start = n.width;
                    }
                    S(o);
                    if (!h && u) {
                        n.charPositions.push(0);
                    }
                    if (r === "\r" || r === "\n") {
                        _();
                    } else if (!h && u) {
                        let t = u.xAdvance + (u.kerning?.[l] || 0) + d;
                        n.width += t;
                        n.spaceWidth = t;
                        n.spacesIndex.push(n.charPositions.length);
                        n.chars.push(r);
                    }
                } else if (u) {
                    let t = u.kerning?.[l] || 0;
                    let i = u.xAdvance + t + d;
                    if (p && x(o.width + i)) {
                        if (!a) {
                            _();
                        }
                        S(o);
                        _();
                    }
                    o.positions[o.index++] = o.width + t;
                    o.chars.push(r);
                    o.width += i;
                    if (y.isBreakAfterChar(r)) {
                        if (!a && e.wordWrap && x(n.width + o.width)) {
                            _();
                        }
                        S(o);
                    }
                }
                l = r;
            }
            _();
            if (e.align === "center") {
                ((t)=>{
                    for(let e = 0; e < t.lines.length; e++){
                        let line = t.lines[e];
                        let s = t.width / 2 - line.width / 2;
                        for(let t = 0; t < line.charPositions.length; t++){
                            line.charPositions[t] += s;
                        }
                    }
                })(r);
            } else if (e.align === "right") {
                ((t)=>{
                    for(let e = 0; e < t.lines.length; e++){
                        let line = t.lines[e];
                        let s = t.width - line.width;
                        for(let t = 0; t < line.charPositions.length; t++){
                            line.charPositions[t] += s;
                        }
                    }
                })(r);
            } else if (e.align === "justify") {
                ((t)=>{
                    let t_width = t.width;
                    for(let i = 0; i < t.lines.length - 2; i++){
                        let s = t.lines[i];
                        let r = 0;
                        let n = s.spacesIndex[r++];
                        let l = 0;
                        let a = s.spacesIndex.length;
                        let o = (t_width - s.width) / a;
                        for(let t = 0; t < s.charPositions.length; t++){
                            if (t === n) {
                                n = s.spacesIndex[r++];
                                l += o;
                            }
                            s.charPositions[t] += l;
                        }
                    }
                })(r);
            }
            return r;
        }
        function w(t) {
            if (t === "") {
                return [];
            }
            if (typeof t === "string") {
                t = [
                    t
                ];
            }
            let e = [];
            for(let i = 0, s = t.length; i < s; i++){
                let s = t[i];
                if (Array.isArray(s)) {
                    if (s.length !== 2) {
                        throw Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
                    }
                    if (s[0].length === 0 || s[1].length === 0) {
                        throw Error("[BitmapFont]: Invalid character delimiter.");
                    }
                    let t = s[0].charCodeAt(0);
                    let i = s[1].charCodeAt(0);
                    if (i < t) {
                        throw Error("[BitmapFont]: Invalid character range.");
                    }
                    for(let s = t; s <= i; s++){
                        e.push(String.fromCharCode(s));
                    }
                } else {
                    e.push(...Array.from(s));
                }
            }
            if (e.length === 0) {
                throw Error("[BitmapFont]: Empty set when resolving characters.");
            }
            return e;
        }
        t.s([
            "getBitmapTextLayout",
            0,
            m
        ], 471272);
        t.s([
            "resolveCharacters",
            0,
            w
        ], 624433);
        let F = 0;
        let C = new class {
            constructor(){
                this.ALPHA = [
                    [
                        "a",
                        "z"
                    ],
                    [
                        "A",
                        "Z"
                    ],
                    " "
                ];
                this.NUMERIC = [
                    [
                        "0",
                        "9"
                    ]
                ];
                this.ALPHANUMERIC = [
                    [
                        "a",
                        "z"
                    ],
                    [
                        "A",
                        "Z"
                    ],
                    [
                        "0",
                        "9"
                    ],
                    " "
                ];
                this.ASCII = [
                    [
                        " ",
                        "~"
                    ]
                ];
                this.defaultOptions = {
                    chars: this.ALPHANUMERIC,
                    resolution: 1,
                    padding: 4,
                    skipKerning: false,
                    textureStyle: null
                };
                this.measureCache = n.lru(1000);
            }
            getFont(t, e) {
                let i = `${e.fontFamily}-bitmap`;
                let s = true;
                if (l.Cache.has(i)) {
                    let e = l.Cache.get(i);
                    e.ensureCharacters?.(t);
                    return e;
                }
                if (e._fill.fill && !e._stroke) {
                    i += e._fill.fill.styleKey;
                    s = false;
                } else if (e._stroke || e.dropShadow) {
                    i = `${e.styleKey}-bitmap`;
                    s = false;
                }
                i += `-${e.fontStyle}`;
                i += `-${e.fontVariant}`;
                i += `-${e.fontWeight}`;
                if (!l.Cache.has(i)) {
                    let t = Object.create(e);
                    t._lineHeight = 0;
                    let r = new x({
                        style: t,
                        overrideFill: s,
                        overrideSize: true,
                        ...this.defaultOptions
                    });
                    if (++F > 50) {
                        o.warn("BitmapText", `You have dynamically created ${F} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``);
                    }
                    r.once("destroy", ()=>{
                        F--;
                        l.Cache.remove(i);
                    });
                    l.Cache.set(i, r);
                }
                let r = l.Cache.get(i);
                r.ensureCharacters?.(t);
                return r;
            }
            getLayout(t, e, i = true) {
                let s = this.getFont(t, e);
                let r = `${t}-${e.styleKey}-${i}`;
                if (this.measureCache.has(r)) {
                    return this.measureCache.get(r);
                }
                let n = m(h.CanvasTextMetrics.graphemeSegmenter(t), e, s, i);
                this.measureCache.set(r, n);
                return n;
            }
            measureText(t, e, i = true) {
                return this.getLayout(t, e, i);
            }
            install(...t) {
                let e = t[0];
                if (typeof e === "string") {
                    e = {
                        name: e,
                        style: t[1],
                        chars: t[2]?.chars,
                        resolution: t[2]?.resolution,
                        padding: t[2]?.padding,
                        skipKerning: t[2]?.skipKerning
                    };
                    a.deprecation(a.v8_0_0, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})");
                }
                let i = e?.name;
                if (!i) {
                    throw Error("[BitmapFontManager] Property `name` is required.");
                }
                let style = (e = {
                    ...this.defaultOptions,
                    ...e
                }).style;
                let r = style instanceof d.TextStyle ? style : new d.TextStyle(style);
                let overrideFill = e.dynamicFill ?? this._canUseTintForStyle(r);
                let o = new x({
                    style: r,
                    overrideFill,
                    skipKerning: e.skipKerning,
                    padding: e.padding,
                    resolution: e.resolution,
                    overrideSize: false,
                    textureStyle: e.textureStyle
                });
                let h = w(e.chars);
                o.ensureCharacters(h.join(""));
                l.Cache.set(`${i}-bitmap`, o);
                o.once("destroy", ()=>l.Cache.remove(`${i}-bitmap`));
                return o;
            }
            uninstall(t) {
                let e = `${t}-bitmap`;
                let i = l.Cache.get(e);
                if (i) {
                    i.destroy();
                }
            }
            _canUseTintForStyle(t) {
                return !t._stroke && (!t.dropShadow || t.dropShadow.color === 0) && !t._fill.fill && t._fill.color === 16777215;
            }
        };
        t.s([
            "BitmapFontManager",
            0,
            C
        ], 791526);
        class v extends r.AbstractBitmapFont {
            constructor(t, r){
                super();
                const { textures, data } = t;
                Object.keys(data.pages).forEach((t)=>{
                    let e = textures[data.pages[parseInt(t, 10)].id];
                    this.pages.push({
                        texture: e
                    });
                });
                Object.keys(data.chars).forEach((t)=>{
                    let r = data.chars[t];
                    let { frame, source, rotate } = textures[r.page];
                    let d = e.groupD8.transformRectCoords(r, frame, rotate, new i.Rectangle);
                    let u = new s.Texture({
                        frame: d,
                        orig: new i.Rectangle(0, 0, r.width, r.height),
                        source,
                        rotate
                    });
                    this.chars[t] = {
                        id: t.codePointAt(0),
                        xOffset: r.xOffset,
                        yOffset: r.yOffset,
                        xAdvance: r.xAdvance,
                        kerning: r.kerning ?? {},
                        texture: u
                    };
                });
                this.baseRenderedFontSize = data.fontSize;
                this.baseMeasurementFontSize = data.fontSize;
                this.fontMetrics = {
                    ascent: 0,
                    descent: 0,
                    fontSize: data.fontSize
                };
                this.baseLineOffset = data.baseLineOffset;
                this.lineHeight = data.lineHeight;
                this.fontFamily = data.fontFamily;
                this.distanceField = data.distanceField ?? {
                    type: "none",
                    range: 0
                };
                this.url = r;
            }
            destroy() {
                super.destroy();
                for(let t = 0; t < this.pages.length; t++){
                    let { texture } = this.pages[t];
                    texture.destroy(true);
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
        t.s([
            "BitmapFont",
            0,
            v
        ], 610606);
    },
    56292,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        var i = t.i(222735);
        var s = t.i(733705);
        var r = t.i(727905);
        var n = t.i(562140);
        var l = t.i(419905);
        var a = t.i(336966);
        var o = t.i(558001);
        var h = t.i(73517);
        var d = t.i(974543);
        let u = class t extends e.default {
            constructor(e = {}){
                super();
                this.uid = s.uid("textStyle");
                this._tick = 0;
                this._cachedFontString = null;
                ((t)=>{
                    if (typeof t.dropShadow === "boolean" && t.dropShadow) {
                        let e = u.defaultDropShadow;
                        t.dropShadow = {
                            alpha: t.dropShadowAlpha ?? e.alpha,
                            angle: t.dropShadowAngle ?? e.angle,
                            blur: t.dropShadowBlur ?? e.blur,
                            color: t.dropShadowColor ?? e.color,
                            distance: t.dropShadowDistance ?? e.distance
                        };
                    }
                    if (t.strokeThickness !== undefined) {
                        r.deprecation(r.v8_0_0, "strokeThickness is now a part of stroke");
                        let e = t.stroke;
                        let s = {};
                        if (i.Color.isColorLike(e)) {
                            s.color = e;
                        } else if (e instanceof l.FillGradient || e instanceof a.FillPattern) {
                            s.fill = e;
                        } else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill")) {
                            s = e;
                        } else {
                            throw Error("Invalid stroke value.");
                        }
                        t.stroke = {
                            ...s,
                            width: t.strokeThickness
                        };
                    }
                    if (Array.isArray(t.fillGradientStops)) {
                        r.deprecation(r.v8_0_0, "gradient fill is now a fill pattern: `new FillGradient(...)`");
                        if (!Array.isArray(t.fill) || t.fill.length === 0) {
                            throw Error("Invalid fill value. Expected an array of colors for gradient fill.");
                        }
                        if (t.fill.length !== t.fillGradientStops.length) {
                            n.warn("The number of fill colors must match the number of fill gradient stops.");
                        }
                        let fill = new l.FillGradient({
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 1
                            },
                            textureSpace: "local"
                        });
                        let s = t.fillGradientStops.slice();
                        let a = t.fill.map((t)=>i.Color.shared.setValue(t).toNumber());
                        s.forEach((t, i)=>{
                            fill.addColorStop(t, a[i]);
                        });
                        t.fill = {
                            fill
                        };
                    }
                })(e);
                const o = e instanceof t;
                const h = e;
                if (o) {
                    e = h._toObject();
                }
                const d = {
                    ...t.defaultTextStyle,
                    ...e
                };
                for(const t in d){
                    this[t] = d[t];
                }
                this._tagStyles = e.tagStyles ?? undefined;
                this.update();
                this._tick = 0;
            }
            get align() {
                return this._align;
            }
            set align(t) {
                if (this._align !== t) {
                    this._align = t;
                    this.update();
                }
            }
            get breakWords() {
                return this._breakWords;
            }
            set breakWords(t) {
                if (this._breakWords !== t) {
                    this._breakWords = t;
                    this.update();
                }
            }
            get dropShadow() {
                return this._dropShadow;
            }
            set dropShadow(e) {
                if (this._dropShadow !== e) {
                    if (e !== null && typeof e === "object") {
                        this._dropShadow = this._createProxy({
                            ...t.defaultDropShadow,
                            ...e
                        });
                    } else {
                        this._dropShadow = e ? this._createProxy({
                            ...t.defaultDropShadow
                        }) : null;
                    }
                    this.update();
                }
            }
            get fontFamily() {
                return this._fontFamily;
            }
            set fontFamily(t) {
                if (this._fontFamily !== t) {
                    this._fontFamily = t;
                    this.update();
                }
            }
            get fontSize() {
                return this._fontSize;
            }
            set fontSize(t) {
                if (this._fontSize !== t) {
                    if (typeof t === "string") {
                        this._fontSize = parseInt(t, 10);
                    } else {
                        this._fontSize = t;
                    }
                    this.update();
                }
            }
            get fontStyle() {
                return this._fontStyle;
            }
            set fontStyle(t) {
                if (this._fontStyle !== t) {
                    this._fontStyle = t.toLowerCase();
                    this.update();
                }
            }
            get fontVariant() {
                return this._fontVariant;
            }
            set fontVariant(t) {
                if (this._fontVariant !== t) {
                    this._fontVariant = t;
                    this.update();
                }
            }
            get fontWeight() {
                return this._fontWeight;
            }
            set fontWeight(t) {
                if (this._fontWeight !== t) {
                    this._fontWeight = t;
                    this.update();
                }
            }
            get leading() {
                return this._leading;
            }
            set leading(t) {
                if (this._leading !== t) {
                    this._leading = t;
                    this.update();
                }
            }
            get letterSpacing() {
                return this._letterSpacing;
            }
            set letterSpacing(t) {
                if (this._letterSpacing !== t) {
                    this._letterSpacing = t;
                    this.update();
                }
            }
            get lineHeight() {
                return this._lineHeight;
            }
            set lineHeight(t) {
                if (this._lineHeight !== t) {
                    this._lineHeight = t;
                    this.update();
                }
            }
            get padding() {
                return this._padding;
            }
            set padding(t) {
                if (this._padding !== t) {
                    this._padding = t;
                    this.update();
                }
            }
            get filters() {
                return this._filters;
            }
            set filters(t) {
                if (this._filters !== t) {
                    this._filters = Object.freeze(t);
                    this.update();
                }
            }
            get trim() {
                return this._trim;
            }
            set trim(t) {
                if (this._trim !== t) {
                    this._trim = t;
                    this.update();
                }
            }
            get textBaseline() {
                return this._textBaseline;
            }
            set textBaseline(t) {
                if (this._textBaseline !== t) {
                    this._textBaseline = t;
                    this.update();
                }
            }
            get whiteSpace() {
                return this._whiteSpace;
            }
            set whiteSpace(t) {
                if (this._whiteSpace !== t) {
                    this._whiteSpace = t;
                    this.update();
                }
            }
            get wordWrap() {
                return this._wordWrap;
            }
            set wordWrap(t) {
                if (this._wordWrap !== t) {
                    this._wordWrap = t;
                    this.update();
                }
            }
            get wordWrapWidth() {
                return this._wordWrapWidth;
            }
            set wordWrapWidth(t) {
                if (this._wordWrapWidth !== t) {
                    this._wordWrapWidth = t;
                    this.update();
                }
            }
            get fill() {
                return this._originalFill;
            }
            set fill(t) {
                if (t !== this._originalFill) {
                    this._originalFill = t;
                    if (this._isFillStyle(t)) {
                        this._originalFill = this._createProxy({
                            ...o.GraphicsContext.defaultFillStyle,
                            ...t
                        }, ()=>{
                            this._fill = h.toFillStyle({
                                ...this._originalFill
                            }, o.GraphicsContext.defaultFillStyle);
                        });
                    }
                    this._fill = h.toFillStyle(t === 0 ? "black" : t, o.GraphicsContext.defaultFillStyle);
                    this.update();
                }
            }
            get stroke() {
                return this._originalStroke;
            }
            set stroke(t) {
                if (t !== this._originalStroke) {
                    this._originalStroke = t;
                    if (this._isFillStyle(t)) {
                        this._originalStroke = this._createProxy({
                            ...o.GraphicsContext.defaultStrokeStyle,
                            ...t
                        }, ()=>{
                            this._stroke = h.toStrokeStyle({
                                ...this._originalStroke
                            }, o.GraphicsContext.defaultStrokeStyle);
                        });
                    }
                    this._stroke = h.toStrokeStyle(t, o.GraphicsContext.defaultStrokeStyle);
                    this.update();
                }
            }
            get tagStyles() {
                return this._tagStyles;
            }
            set tagStyles(t) {
                if (this._tagStyles !== t) {
                    this._tagStyles = t ?? undefined;
                    this.update();
                }
            }
            update() {
                this._tick++;
                this._cachedFontString = null;
                this.emit("update", this);
            }
            reset() {
                let t_defaultTextStyle = t.defaultTextStyle;
                for(let t in t_defaultTextStyle){
                    this[t] = t_defaultTextStyle[t];
                }
            }
            assign(t) {
                for(let e in t){
                    this[e] = t[e];
                }
                return this;
            }
            get styleKey() {
                return `${this.uid}-${this._tick}`;
            }
            get _fontString() {
                if (this._cachedFontString === null) {
                    this._cachedFontString = d.fontStringFromTextStyle(this);
                }
                return this._cachedFontString;
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
                    } : undefined,
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
                    } : undefined,
                    textBaseline: this.textBaseline,
                    trim: this.trim,
                    whiteSpace: this.whiteSpace,
                    wordWrap: this.wordWrap,
                    wordWrapWidth: this.wordWrapWidth,
                    filters: this._filters ? [
                        ...this._filters
                    ] : undefined,
                    tagStyles: this._tagStyles ? {
                        ...this._tagStyles
                    } : undefined
                };
            }
            clone() {
                return new t(this._toObject());
            }
            _getFinalPadding() {
                let t = 0;
                if (this._filters) {
                    for(let e = 0; e < this._filters.length; e++){
                        t += this._filters[e].padding;
                    }
                }
                return Math.max(this._padding, t);
            }
            destroy(t = false) {
                this.removeAllListeners();
                if (typeof t === "boolean" ? t : t?.texture) {
                    let e = typeof t === "boolean" ? t : t?.textureSource;
                    if (this._fill?.texture) {
                        this._fill.texture.destroy(e);
                    }
                    if (this._originalFill?.texture) {
                        this._originalFill.texture.destroy(e);
                    }
                    if (this._stroke?.texture) {
                        this._stroke.texture.destroy(e);
                    }
                    if (this._originalStroke?.texture) {
                        this._originalStroke.texture.destroy(e);
                    }
                }
                this._fill = null;
                this._stroke = null;
                this.dropShadow = null;
                this._originalStroke = null;
                this._originalFill = null;
            }
            _createProxy(t, e) {
                return new Proxy(t, {
                    set: (t, i, s)=>t[i] === s || (t[i] = s, e?.(i, s), this.update(), true)
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
        };
        u.defaultTextStyle = {
            align: "left",
            breakWords: false,
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
            trim: false,
            whiteSpace: "pre",
            wordWrap: false,
            wordWrapWidth: 100
        };
        t.s([
            "TextStyle",
            0,
            u
        ]);
    },
    556700,
    680055,
    473471,
    742495,
    841940,
    926766,
    974543,
    (t)=>{
        "use strict";
        class e {
            constructor(t = 0, e = 0, i = false){
                this.first = null;
                this.items = Object.create(null);
                this.last = null;
                this.max = t;
                this.resetTtl = i;
                this.size = 0;
                this.ttl = e;
            }
            clear() {
                this.first = null;
                this.items = Object.create(null);
                this.last = null;
                this.size = 0;
                return this;
            }
            delete(t) {
                if (this.has(t)) {
                    let e = this.items[t];
                    delete this.items[t];
                    this.size--;
                    if (e.prev !== null) {
                        e.prev.next = e.next;
                    }
                    if (e.next !== null) {
                        e.next.prev = e.prev;
                    }
                    if (this.first === e) {
                        this.first = e.next;
                    }
                    if (this.last === e) {
                        this.last = e.prev;
                    }
                }
                return this;
            }
            entries(t = this.keys()) {
                let e = Array(t.length);
                for(let i = 0; i < t.length; i++){
                    let s = t[i];
                    e[i] = [
                        s,
                        this.get(s)
                    ];
                }
                return e;
            }
            evict(t = false) {
                if (t || this.size > 0) {
                    let t = this.first;
                    delete this.items[t.key];
                    if (--this.size == 0) {
                        this.first = null;
                        this.last = null;
                    } else {
                        this.first = t.next;
                        this.first.prev = null;
                    }
                }
                return this;
            }
            expiresAt(t) {
                let e;
                if (this.has(t)) {
                    e = this.items[t].expiry;
                }
                return e;
            }
            get(t) {
                let e = this.items[t];
                if (e !== undefined) {
                    if (this.ttl > 0 && e.expiry <= Date.now()) {
                        return void this.delete(t);
                    }
                    this.moveToEnd(e);
                    return e.value;
                }
            }
            has(t) {
                return t in this.items;
            }
            moveToEnd(t) {
                if (this.last !== t) {
                    if (t.prev !== null) {
                        t.prev.next = t.next;
                    }
                    if (t.next !== null) {
                        t.next.prev = t.prev;
                    }
                    if (this.first === t) {
                        this.first = t.next;
                    }
                    t.prev = this.last;
                    t.next = null;
                    if (this.last !== null) {
                        this.last.next = t;
                    }
                    this.last = t;
                    if (this.first === null) {
                        this.first = t;
                    }
                }
            }
            keys() {
                let t = Array(this.size);
                let first = this.first;
                let i = 0;
                while(first !== null){
                    t[i++] = first.key;
                    first = first.next;
                }
                return t;
            }
            setWithEvicted(t, e, i = this.resetTtl) {
                let s = null;
                if (this.has(t)) {
                    this.set(t, e, true, i);
                } else {
                    if (this.max > 0 && this.size === this.max) {
                        s = {
                            ...this.first
                        };
                        this.evict(true);
                    }
                    let i = this.items[t] = {
                        expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
                        key: t,
                        prev: this.last,
                        next: null,
                        value: e
                    };
                    if (++this.size == 1) {
                        this.first = i;
                    } else {
                        this.last.next = i;
                    }
                    this.last = i;
                }
                return s;
            }
            set(t, e, i = false, s = this.resetTtl) {
                let r = this.items[t];
                if (i || r !== undefined) {
                    r.value = e;
                    if (i === false && s) {
                        r.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl;
                    }
                    this.moveToEnd(r);
                } else {
                    if (this.max > 0 && this.size === this.max) {
                        this.evict(true);
                    }
                    r = this.items[t] = {
                        expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
                        key: t,
                        prev: this.last,
                        next: null,
                        value: e
                    };
                    if (++this.size == 1) {
                        this.first = r;
                    } else {
                        this.last.next = r;
                    }
                    this.last = r;
                }
                return this;
            }
            values(t = this.keys()) {
                let e = Array(t.length);
                for(let i = 0; i < t.length; i++){
                    e[i] = this.get(t[i]);
                }
                return e;
            }
        }
        function i(t = 1000, s = 0, r = false) {
            if (isNaN(t) || t < 0) {
                throw TypeError("Invalid max value");
            }
            if (isNaN(s) || s < 0) {
                throw TypeError("Invalid ttl value");
            }
            if (typeof r !== "boolean") {
                throw TypeError("Invalid resetTtl value");
            }
            return new e(t, s, r);
        }
        t.s([
            "lru",
            0,
            i
        ], 680055);
        var s = t.i(787653);
        function r(t) {
            return !!t.tagStyles && Object.keys(t.tagStyles).length > 0;
        }
        function n(t) {
            return t.includes("<");
        }
        function l(t, e) {
            let i = [];
            let e_tagStyles = e.tagStyles;
            if (!r(e) || !n(t)) {
                i.push({
                    text: t,
                    style: e
                });
                return i;
            }
            let l = [
                e
            ];
            let a = [];
            let o = "";
            let h = 0;
            while(h < t.length){
                let e = t[h];
                if (e === "<") {
                    let r = t.indexOf(">", h);
                    if (-1 === r) {
                        o += e;
                        h++;
                        continue;
                    }
                    let n = t.indexOf("<", h + 1);
                    if (-1 !== n && n < r) {
                        o += e;
                        h++;
                        continue;
                    }
                    let c = t.slice(h + 1, r);
                    if (c.startsWith("/")) {
                        let e = c.slice(1).trim();
                        if (a.length > 0 && a[a.length - 1] === e) {
                            if (o.length > 0) {
                                i.push({
                                    text: o,
                                    style: l[l.length - 1]
                                });
                                o = "";
                            }
                            l.pop();
                            a.pop();
                            h = r + 1;
                            continue;
                        }
                        o += t.slice(h, r + 1);
                        h = r + 1;
                        continue;
                    }
                    {
                        let e = c.trim();
                        if (e_tagStyles[e]) {
                            let d;
                            let u;
                            if (o.length > 0) {
                                i.push({
                                    text: o,
                                    style: l[l.length - 1]
                                });
                                o = "";
                            }
                            d = l[l.length - 1];
                            u = e_tagStyles[e];
                            let t = d.clone().assign(u);
                            l.push(t);
                            a.push(e);
                            h = r + 1;
                            continue;
                        }
                        o += t.slice(h, r + 1);
                        h = r + 1;
                        continue;
                    }
                }
                o += e;
                h++;
            }
            if (o.length > 0) {
                i.push({
                    text: o,
                    style: l[l.length - 1]
                });
            }
            return i;
        }
        t.s([
            "getPlainText",
            0,
            (t, e)=>{
                if (r(e) && n(t)) {
                    return l(t, e).map((t)=>t.text).join("");
                }
                return t;
            },
            "hasTagMarkup",
            0,
            n,
            "hasTagStyles",
            0,
            r,
            "parseTaggedText",
            0,
            l
        ], 473471);
        let a = [
            10,
            13
        ];
        let o = new Set(a);
        let h = [
            9,
            32,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8200,
            8201,
            8202,
            8287,
            12288
        ];
        let d = new Set(h);
        let u = [
            9,
            32
        ];
        let c = new Set(u);
        let p = [
            45,
            8208,
            8211,
            8212,
            173
        ];
        let f = new Set(p);
        let g = /(\r\n|\r|\n)/;
        let S = /(?:\r\n|\r|\n)/;
        function _(t) {
            return typeof t === "string" && o.has(t.charCodeAt(0));
        }
        function x(t, e) {
            return typeof t === "string" && d.has(t.charCodeAt(0));
        }
        function y(t) {
            return typeof t === "string" && f.has(t.charCodeAt(0));
        }
        function m(t) {
            return t === "normal" || t === "pre-line";
        }
        function w(t) {
            return t === "normal";
        }
        function F(t) {
            if (typeof t !== "string") {
                return "";
            }
            let e = t.length - 1;
            while(e >= 0 && x(t[e])){
                e--;
            }
            if (e < t.length - 1) {
                return t.slice(0, e + 1);
            }
            return t;
        }
        function C(t) {
            let e = [];
            let i = [];
            if (typeof t !== "string") {
                return e;
            }
            for(let s = 0; s < t.length; s++){
                let r = t[s];
                let n = t[s + 1];
                if (x(r, n) || _(r)) {
                    if (i.length > 0) {
                        e.push(i.join(""));
                        i.length = 0;
                    }
                    if (r === "\r" && n === "\n") {
                        e.push("\r\n");
                        s++;
                    } else {
                        e.push(r);
                    }
                    continue;
                }
                i.push(r);
                if (y(r) && n && !x(n) && !_(n)) {
                    e.push(i.join(""));
                    i.length = 0;
                }
            }
            if (i.length > 0) {
                e.push(i.join(""));
            }
            return e;
        }
        function v(t, e, i, s) {
            let r = i(t);
            let n = [];
            for(let i = 0; i < r.length; i++){
                let l = r[i];
                let a = l;
                let o = 1;
                while(r[i + o]){
                    let n = r[i + o];
                    if (s(a, n, t, i, e)) {
                        break;
                    }
                    l += n;
                    a = n;
                    o++;
                }
                i += o - 1;
                n.push(l);
            }
            return n;
        }
        t.s([
            "BREAKING_SPACES",
            0,
            h,
            "BREAKING_SPACES_SET",
            0,
            d,
            "BREAK_AFTER_CHARS",
            0,
            p,
            "BREAK_AFTER_CHARS_SET",
            0,
            f,
            "COLLAPSIBLE_SPACES",
            0,
            u,
            "COLLAPSIBLE_SPACES_SET",
            0,
            c,
            "NEWLINES",
            0,
            a,
            "NEWLINES_SET",
            0,
            o,
            "NEWLINE_MATCH_REGEX",
            0,
            S,
            "NEWLINE_SPLIT_REGEX",
            0,
            g,
            "collapseNewlines",
            0,
            w,
            "collapseSpaces",
            0,
            m,
            "getCharacterGroups",
            0,
            v,
            "isBreakAfterChar",
            0,
            y,
            "isBreakingSpace",
            0,
            x,
            "isCollapsibleSpace",
            0,
            (t)=>typeof t === "string" && c.has(t.charCodeAt(0)),
            "isNewline",
            0,
            _,
            "tokenize",
            0,
            C,
            "trimRight",
            0,
            F
        ], 742495);
        let k = /\r\n|\r|\n/g;
        function T(t, e, i, s, r, n, a, o, h) {
            let d = l(t, e);
            if (w(e.whiteSpace)) {
                for(let t = 0; t < d.length; t++){
                    let e = d[t];
                    d[t] = {
                        text: e.text.replace(k, " "),
                        style: e.style
                    };
                }
            }
            let u = [];
            let c = [];
            for (let t of d){
                let e = t.text.split(g);
                for(let i = 0; i < e.length; i++){
                    let s = e[i];
                    if (s === "\r\n" || s === "\r" || s === "\n") {
                        u.push(c);
                        c = [];
                    } else if (s.length > 0) {
                        c.push({
                            text: s,
                            style: t.style
                        });
                    }
                }
            }
            if (c.length > 0 || u.length === 0) {
                u.push(c);
            }
            let runsByLine = i ? b(u, e, s, n, o, h) : u;
            let lineWidths = [];
            let lineAscents = [];
            let lineDescents = [];
            let lineHeights = [];
            let lines = [];
            let maxLineWidth = 0;
            let fontProperties = a(e._fontString);
            if (fontProperties.fontSize === 0) {
                fontProperties.fontSize = e.fontSize;
                fontProperties.ascent = e.fontSize;
            }
            let C = "";
            let hasDropShadow = !!e.dropShadow;
            let T = e._stroke?.width || 0;
            for (let t of runsByLine){
                let i = 0;
                let n = fontProperties.ascent;
                let l = fontProperties.descent;
                let o = "";
                for (let e of t){
                    let t = e.style._fontString;
                    let h = a(t);
                    if (t !== C) {
                        s.font = t;
                        C = t;
                    }
                    i += r(e.text, e.style.letterSpacing, s);
                    n = Math.max(n, h.ascent);
                    l = Math.max(l, h.descent);
                    o += e.text;
                    let d = e.style._stroke?.width || 0;
                    if (d > T) {
                        T = d;
                    }
                    if (!hasDropShadow && e.style.dropShadow) {
                        hasDropShadow = true;
                    }
                }
                if (t.length === 0) {
                    n = fontProperties.ascent;
                    l = fontProperties.descent;
                }
                lineWidths.push(i);
                lineAscents.push(n);
                lineDescents.push(l);
                lines.push(o);
                let h = e.lineHeight || n + l;
                lineHeights.push(h + e.leading);
                maxLineWidth = Math.max(maxLineWidth, i);
            }
            let A = T;
            let width = maxLineWidth + A + (e.dropShadow ? e.dropShadow.distance : 0);
            let z = 0;
            for(let t = 0; t < lineHeights.length; t++){
                z += lineHeights[t];
            }
            return {
                width,
                height: (z = Math.max(z, lineHeights[0] + A)) + (e.dropShadow ? e.dropShadow.distance : 0),
                lines,
                lineWidths,
                lineHeight: (e.lineHeight || fontProperties.fontSize) + e.leading,
                maxLineWidth,
                fontProperties,
                runsByLine,
                lineAscents,
                lineDescents,
                lineHeights,
                hasDropShadow
            };
        }
        function b(t, e, i, s, r, n) {
            let { letterSpacing, whiteSpace, wordWrapWidth, breakWords } = e;
            let d = m(whiteSpace);
            let u = wordWrapWidth + letterSpacing;
            let c = {};
            let p = "";
            let f = (t, e)=>{
                let r = `${t}|${e.styleKey}`;
                let n = c[r];
                if (n === undefined) {
                    let l = e._fontString;
                    if (l !== p) {
                        i.font = l;
                        p = l;
                    }
                    n = s(t, e.letterSpacing, i) + e.letterSpacing;
                    c[r] = n;
                }
                return n;
            };
            let g = [];
            for (let e of t){
                let t = A(e);
                let i = g.length;
                let s = (e)=>{
                    let i = 0;
                    let s = e;
                    do {
                        let { token, style } = t[s];
                        i += f(token, style);
                        s++;
                    }while (s < t.length && t[s].continuesFromPrevious)
                    return i;
                };
                let l = (e)=>{
                    let i = [];
                    let s = e;
                    do {
                        i.push({
                            token: t[s].token,
                            style: t[s].style
                        });
                        s++;
                    }while (s < t.length && t[s].continuesFromPrevious)
                    return i;
                };
                let a = [];
                let o = 0;
                let c = !d;
                let p = null;
                let S = ()=>{
                    if (p && p.text.length > 0) {
                        a.push(p);
                    }
                    p = null;
                };
                let _ = ()=>{
                    S();
                    if (a.length > 0) {
                        let t = a[a.length - 1];
                        t.text = F(t.text);
                        if (t.text.length === 0) {
                            a.pop();
                        }
                    }
                    g.push(a);
                    a = [];
                    o = 0;
                    c = false;
                };
                for(let e = 0; e < t.length; e++){
                    let { token, style, continuesFromPrevious } = t[e];
                    let w = f(token, style);
                    if (d) {
                        let t = x(token);
                        let e = p?.text[p.text.length - 1] ?? a[a.length - 1]?.text.slice(-1) ?? "";
                        let s = !!e && x(e);
                        if (t && s) {
                            continue;
                        }
                    }
                    let F = !continuesFromPrevious;
                    let C = F ? s(e) : w;
                    if (C > u && F) {
                        if (o > 0) {
                            _();
                        }
                        if (breakWords) {
                            let t = l(e);
                            for(let e = 0; e < t.length; e++){
                                let i = t[e].token;
                                let s = t[e].style;
                                for (let t of v(i, breakWords, n, r)){
                                    let e = f(t, s);
                                    if (e + o > u) {
                                        _();
                                    }
                                    if (p && p.style === s) {
                                        p.text += t;
                                    } else {
                                        S();
                                        p = {
                                            text: t,
                                            style: s
                                        };
                                    }
                                    o += e;
                                }
                            }
                            e += t.length - 1;
                        } else {
                            let t = l(e);
                            S();
                            g.push(t.map((t)=>({
                                    text: t.token,
                                    style: t.style
                                })));
                            c = false;
                            e += t.length - 1;
                        }
                    } else if (C + o > u && F) {
                        if (x(token)) {
                            c = false;
                            continue;
                        }
                        _();
                        p = {
                            text: token,
                            style
                        };
                        o = w;
                    } else if (continuesFromPrevious && !breakWords) {
                        if (p && p.style === style) {
                            p.text += token;
                        } else {
                            S();
                            p = {
                                text: token,
                                style
                            };
                        }
                        o += w;
                    } else {
                        let t = x(token);
                        if (o === 0 && t && !c) {
                            continue;
                        }
                        if (p && p.style === style) {
                            p.text += token;
                        } else {
                            S();
                            p = {
                                text: token,
                                style
                            };
                        }
                        o += w;
                    }
                }
                S();
                if (a.length > 0) {
                    let t = a[a.length - 1];
                    t.text = F(t.text);
                    if (t.text.length === 0) {
                        a.pop();
                    }
                }
                if (a.length > 0 || g.length === i) {
                    g.push(a);
                }
            }
            return g;
        }
        function A(t) {
            let e = [];
            let i = false;
            for (let s of t){
                let t = C(s.text);
                let r = true;
                for (let token of t){
                    let t = x(token) || _(token);
                    let continuesFromPrevious = r && i && !t;
                    e.push({
                        token,
                        style: s.style,
                        continuesFromPrevious
                    });
                    i = !t;
                    r = false;
                }
            }
            return e;
        }
        t.s([
            "measureTaggedText",
            0,
            T,
            "tokenizeTaggedRuns",
            0,
            A,
            "wordWrapTaggedLines",
            0,
            b
        ], 841940);
        let W = {
            willReadFrequently: true
        };
        function z(t, letterSpacing, i, s, r) {
            let n = i[t];
            if (typeof n !== "number") {
                n = r(t, letterSpacing, s) + letterSpacing;
                i[t] = n;
            }
            return n;
        }
        function B(t, e, i, s, r, n, l) {
            let a = i.getContext("2d", W);
            a.font = e._fontString;
            let o = 0;
            let h = "";
            let d = [];
            let u = Object.create(null);
            let { letterSpacing, whiteSpace } = e;
            let f = m(whiteSpace);
            let g = w(whiteSpace);
            let S = !f;
            let y = e.wordWrapWidth + letterSpacing;
            let k = C(t);
            for(let t = 0; t < k.length; t++){
                let i = k[t];
                if (_(i)) {
                    if (!g) {
                        d.push(F(h));
                        S = !f;
                        h = "";
                        o = 0;
                        continue;
                    }
                    i = " ";
                }
                if (f) {
                    let t = x(i);
                    let e = x(h[h.length - 1]);
                    if (t && e) {
                        continue;
                    }
                }
                let p = z(i, letterSpacing, u, a, s);
                if (p > y) {
                    if (h !== "") {
                        d.push(F(h));
                        h = "";
                        o = 0;
                    }
                    if (r(i, e.breakWords)) {
                        for (let t of v(i, e.breakWords, l, n)){
                            let e = z(t, letterSpacing, u, a, s);
                            if (e + o > y) {
                                d.push(F(h));
                                S = false;
                                h = "";
                                o = 0;
                            }
                            h += t;
                            o += e;
                        }
                    } else {
                        if (h.length > 0) {
                            d.push(F(h));
                            h = "";
                            o = 0;
                        }
                        d.push(F(i));
                        S = false;
                        h = "";
                        o = 0;
                    }
                } else {
                    if (p + o > y) {
                        S = false;
                        d.push(F(h));
                        h = "";
                        o = 0;
                    }
                    if (h.length > 0 || !x(i) || S) {
                        h += i;
                        o += p;
                    }
                }
            }
            let T = F(h);
            if (T.length > 0) {
                d.push(T);
            }
            return d.join("\n");
        }
        t.s([
            "wordWrap",
            0,
            B
        ], 926766);
        let E = {
            willReadFrequently: true
        };
        let M = class t {
            static get experimentalLetterSpacingSupported() {
                let t__experimentalLetterSpacingSupported = t._experimentalLetterSpacingSupported;
                if (t__experimentalLetterSpacingSupported === undefined) {
                    let i = s.DOMAdapter.get().getCanvasRenderingContext2D().prototype;
                    t__experimentalLetterSpacingSupported = t._experimentalLetterSpacingSupported = "letterSpacing" in i || "textLetterSpacing" in i;
                }
                return t__experimentalLetterSpacingSupported;
            }
            constructor(t, e, i, s, r, n, l, a, o, h){
                this.text = t;
                this.style = e;
                this.width = i;
                this.height = s;
                this.lines = r;
                this.lineWidths = n;
                this.lineHeight = l;
                this.maxLineWidth = a;
                this.fontProperties = o;
                if (h) {
                    this.runsByLine = h.runsByLine;
                    this.lineAscents = h.lineAscents;
                    this.lineDescents = h.lineDescents;
                    this.lineHeights = h.lineHeights;
                    this.hasDropShadow = h.hasDropShadow;
                }
            }
            static measureText(e = " ", i, s = t._canvas, l = i.wordWrap) {
                let a = `${e}-${i.styleKey}-wordWrap-${l}`;
                if (t._measurementCache.has(a)) {
                    return t._measurementCache.get(a);
                }
                if (r(i) && n(e)) {
                    let s = T(e, i, l, t._context, t._measureText, t._measureTextAdvance, t.measureFont, t.canBreakChars, t.wordWrapSplit);
                    let r = new t(e, i, s.width, s.height, s.lines, s.lineWidths, s.lineHeight, s.maxLineWidth, s.fontProperties, {
                        runsByLine: s.runsByLine,
                        lineAscents: s.lineAscents,
                        lineDescents: s.lineDescents,
                        lineHeights: s.lineHeights,
                        hasDropShadow: s.hasDropShadow
                    });
                    t._measurementCache.set(a, r);
                    return r;
                }
                let i__fontString = i._fontString;
                let h = t.measureFont(i__fontString);
                if (h.fontSize === 0) {
                    h.fontSize = i.fontSize;
                    h.ascent = i.fontSize;
                    h.descent = 0;
                }
                let t__context = t._context;
                t__context.font = i__fontString;
                let u = (l ? t._wordWrap(e, i, s) : e).split(S);
                let c = Array(u.length);
                let p = 0;
                for(let e = 0; e < u.length; e++){
                    let s = t._measureText(u[e], i.letterSpacing, t__context);
                    c[e] = s;
                    p = Math.max(p, s);
                }
                let f = i._stroke?.width ?? 0;
                let g = i.lineHeight || h.fontSize;
                let _ = t._adjustWidthForStyle(p, i);
                let x = Math.max(g, h.fontSize + f) + (u.length - 1) * (g + i.leading);
                let y = t._adjustHeightForStyle(x, i);
                let m = new t(e, i, _, y, u, c, g + i.leading, p, h);
                t._measurementCache.set(a, m);
                return m;
            }
            static _adjustWidthForStyle(t, e) {
                let i = t + (e._stroke?.width || 0);
                if (e.dropShadow) {
                    i += e.dropShadow.distance;
                }
                return i;
            }
            static _adjustHeightForStyle(t, e) {
                let i = t;
                if (e.dropShadow) {
                    i += e.dropShadow.distance;
                }
                return i;
            }
            static _measureText(e, i, s) {
                let { metricWidth, metrics, letterSpacingVal } = t._measureTextCore(e, i, s);
                let a = -(metrics.actualBoundingBoxLeft ?? 0);
                let o = (metrics.actualBoundingBoxRight ?? 0) - a;
                if (metrics.width > 0) {
                    o += letterSpacingVal;
                }
                return Math.max(metricWidth, o);
            }
            static _measureTextAdvance(e, i, s) {
                return t._measureTextCore(e, i, s).metricWidth;
            }
            static _measureTextCore(e, i, s) {
                let r = false;
                t.experimentalLetterSpacingSupported && (t.experimentalLetterSpacing ? (s.letterSpacing = `${i}px`, s.textLetterSpacing = `${i}px`, r = true) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
                let metrics = s.measureText(e);
                let n_width = metrics.width;
                let letterSpacingVal = 0;
                if (n_width > 0) {
                    n_width += letterSpacingVal = r ? -i : (t.graphemeSegmenter(e).length - 1) * i;
                }
                return {
                    metricWidth: n_width,
                    metrics,
                    letterSpacingVal
                };
            }
            static _wordWrap(e, i, s = t._canvas) {
                return B(e, i, s, t._measureTextAdvance, t.canBreakWords, t.canBreakChars, t.wordWrapSplit);
            }
            static isBreakingSpace(t, e) {
                return x(t, e);
            }
            static canBreakWords(t, e) {
                return e;
            }
            static canBreakChars(t, e, i, s, r) {
                return true;
            }
            static wordWrapSplit(e) {
                return t.graphemeSegmenter(e);
            }
            static measureFont(e) {
                if (t._fonts[e]) {
                    return t._fonts[e];
                }
                let t__context = t._context;
                t__context.font = e;
                let s = t__context.measureText(t.METRICS_STRING + t.BASELINE_SYMBOL);
                let ascent = s.actualBoundingBoxAscent ?? 0;
                let descent = s.actualBoundingBoxDescent ?? 0;
                let l = {
                    ascent,
                    descent,
                    fontSize: ascent + descent
                };
                t._fonts[e] = l;
                return l;
            }
            static clearMetrics(e = "") {
                if (e) {
                    delete t._fonts[e];
                } else {
                    t._fonts = {};
                }
            }
            static get _canvas() {
                if (!t.__canvas) {
                    let e;
                    try {
                        let i = new OffscreenCanvas(0, 0);
                        let r = i.getContext("2d", E);
                        if (r?.measureText) {
                            t.__canvas = i;
                            return i;
                        }
                        e = s.DOMAdapter.get().createCanvas();
                    } catch (t) {
                        e = s.DOMAdapter.get().createCanvas();
                    }
                    e.width = e.height = 10;
                    t.__canvas = e;
                }
                return t.__canvas;
            }
            static get _context() {
                if (!t.__context) {
                    t.__context = t._canvas.getContext("2d", E);
                }
                return t.__context;
            }
        };
        M.METRICS_STRING = "|ÉqÅ";
        M.BASELINE_SYMBOL = "M";
        M.BASELINE_MULTIPLIER = 1.4;
        M.HEIGHT_MULTIPLIER = 2;
        M.graphemeSegmenter = (()=>{
            if (typeof Intl?.Segmenter === "function") {
                let t = new Intl.Segmenter;
                return (e)=>{
                    let i = t.segment(e);
                    let s = [];
                    let r = 0;
                    for (let t of i){
                        s[r++] = t.segment;
                    }
                    return s;
                };
            }
            return (t)=>[
                    ...t
                ];
        })();
        M.experimentalLetterSpacing = false;
        M._fonts = {};
        M._measurementCache = i(1000);
        t.s([
            "CanvasTextMetrics",
            0,
            M
        ], 556700);
        let P = [
            "serif",
            "sans-serif",
            "monospace",
            "cursive",
            "fantasy",
            "system-ui"
        ];
        t.s([
            "fontStringFromTextStyle",
            0,
            (t)=>{
                let e = typeof t.fontSize === "number" ? `${t.fontSize}px` : t.fontSize;
                let t_fontFamily = t.fontFamily;
                if (!Array.isArray(t.fontFamily)) {
                    t_fontFamily = t.fontFamily.split(",");
                }
                for(let t = t_fontFamily.length - 1; t >= 0; t--){
                    let e = t_fontFamily[t].trim();
                    if (!(/([\"\'])[^\'\"]+\1/.test(e) || P.includes(e))) {
                        e = `"${e}"`;
                    }
                    t_fontFamily[t] = e;
                }
                return `${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${e} ${t_fontFamily.join(",")}`;
            }
        ], 974543);
    },
    110477,
    (t)=>{
        "use strict";
        var e = t.i(222735);
        var i = t.i(389474);
        var s = t.i(449752);
        var r = t.i(337654);
        var n = t.i(562140);
        var l = t.i(419905);
        var a = t.i(336966);
        t.s([
            "getCanvasFillStyle",
            0,
            (t, o, h, d = 0, u = 0, c = 0)=>{
                if (t.texture === r.Texture.WHITE && !t.fill) {
                    return e.Color.shared.setValue(t.color).setAlpha(t.alpha ?? 1).toHexa();
                }
                if (t.fill) {
                    if (t.fill instanceof a.FillPattern) {
                        let e = t.fill;
                        let i = o.createPattern(e.texture.source.resource, "repeat");
                        s.canvasUtils.applyPatternTransform(i, e.transform, false);
                        return i;
                    } else if (t.fill instanceof l.FillGradient) {
                        let i;
                        let s = t.fill;
                        let r = s.type === "linear";
                        let n = s.textureSpace === "local";
                        let l = 1;
                        let a = 1;
                        if (n && h) {
                            l = h.width + d;
                            a = h.height + d;
                        }
                        let p = false;
                        if (r) {
                            let { start, end } = s;
                            i = o.createLinearGradient(start.x * l + u, start.y * a + c, end.x * l + u, end.y * a + c);
                            p = Math.abs(end.x - start.x) < Math.abs((end.y - start.y) * 0.1);
                        } else {
                            let { center, innerRadius, outerCenter, outerRadius } = s;
                            i = o.createRadialGradient(center.x * l + u, center.y * a + c, innerRadius * l, outerCenter.x * l + u, outerCenter.y * a + c, outerRadius * l);
                        }
                        if (p && n && h) {
                            let t = h.lineHeight / a;
                            for(let r = 0; r < h.lines.length; r++){
                                let n = (r * h.lineHeight + d / 2) / a;
                                s.colorStops.forEach((s)=>{
                                    let r = n + s.offset * t;
                                    r = Math.max(0, Math.min(1, r));
                                    i.addColorStop(Math.floor(100000 * r) / 100000, e.Color.shared.setValue(s.color).toHex());
                                });
                            }
                        } else {
                            s.colorStops.forEach((t)=>{
                                i.addColorStop(t.offset, e.Color.shared.setValue(t.color).toHex());
                            });
                        }
                        return i;
                    }
                } else {
                    let e = o.createPattern(t.texture.source.resource, "repeat");
                    let s = t.matrix.copyTo(i.Matrix.shared);
                    s.scale(t.texture.source.pixelWidth, t.texture.source.pixelHeight);
                    e.setTransform(s);
                    return e;
                }
                n.warn("FillStyle not recognised", t);
                return "red";
            }
        ]);
    }
]);
