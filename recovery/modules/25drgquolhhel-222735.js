// Recovered from 25drgquolhhel.js. Runtime module IDs: 222735.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = {
      grad: .9,
      turn: 360,
      rad: 360 / (2 * Math.PI)
    },
    i = function (t) {
      return "string" == typeof t ? t.length > 0 : "number" == typeof t;
    },
    s = function (t, e, i) {
      return void 0 === e && (e = 0), void 0 === i && (i = Math.pow(10, e)), Math.round(i * t) / i + 0;
    },
    r = function (t, e, i) {
      return void 0 === e && (e = 0), void 0 === i && (i = 1), t > i ? i : t > e ? t : e;
    },
    n = function (t) {
      return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360;
    },
    a = function (t) {
      return {
        r: r(t.r, 0, 255),
        g: r(t.g, 0, 255),
        b: r(t.b, 0, 255),
        a: r(t.a)
      };
    },
    h = function (t) {
      return {
        r: s(t.r),
        g: s(t.g),
        b: s(t.b),
        a: s(t.a, 3)
      };
    },
    o = /^#([0-9a-f]{3,8})$/i,
    u = function (t) {
      var e = t.toString(16);
      return e.length < 2 ? "0" + e : e;
    },
    l = function (t) {
      var e = t.r,
        i = t.g,
        s = t.b,
        r = t.a,
        n = Math.max(e, i, s),
        a = n - Math.min(e, i, s),
        h = a ? n === e ? (i - s) / a : n === i ? 2 + (s - e) / a : 4 + (e - i) / a : 0;
      return {
        h: 60 * (h < 0 ? h + 6 : h),
        s: n ? a / n * 100 : 0,
        v: n / 255 * 100,
        a: r
      };
    },
    d = function (t) {
      var e = t.h,
        i = t.s,
        s = t.v,
        r = t.a;
      e = e / 360 * 6, i /= 100, s /= 100;
      var n = Math.floor(e),
        a = s * (1 - i),
        h = s * (1 - (e - n) * i),
        o = s * (1 - (1 - e + n) * i),
        u = n % 6;
      return {
        r: 255 * [s, h, a, a, o, s][u],
        g: 255 * [o, s, s, h, a, a][u],
        b: 255 * [a, a, o, s, s, h][u],
        a: r
      };
    },
    c = function (t) {
      return {
        h: n(t.h),
        s: r(t.s, 0, 100),
        l: r(t.l, 0, 100),
        a: r(t.a)
      };
    },
    f = function (t) {
      return {
        h: s(t.h),
        s: s(t.s),
        l: s(t.l),
        a: s(t.a, 3)
      };
    },
    m = function (t) {
      var e, i;
      return d((e = t.s, {
        h: t.h,
        s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0,
        v: i + e,
        a: t.a
      }));
    },
    p = function (t) {
      var e, i, s, r;
      return {
        h: (e = l(t)).h,
        s: (r = (200 - (i = e.s)) * (s = e.v) / 100) > 0 && r < 200 ? i * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
        l: r / 2,
        a: e.a
      };
    },
    g = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    y = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    x = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    b = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    _ = {
      string: [[function (t) {
        var e = o.exec(t);
        return e ? (t = e[1]).length <= 4 ? {
          r: parseInt(t[0] + t[0], 16),
          g: parseInt(t[1] + t[1], 16),
          b: parseInt(t[2] + t[2], 16),
          a: 4 === t.length ? s(parseInt(t[3] + t[3], 16) / 255, 2) : 1
        } : 6 === t.length || 8 === t.length ? {
          r: parseInt(t.substr(0, 2), 16),
          g: parseInt(t.substr(2, 2), 16),
          b: parseInt(t.substr(4, 2), 16),
          a: 8 === t.length ? s(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
        } : null : null;
      }, "hex"], [function (t) {
        var e = x.exec(t) || b.exec(t);
        return e ? e[2] !== e[4] || e[4] !== e[6] ? null : a({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: void 0 === e[7] ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
        }) : null;
      }, "rgb"], [function (t) {
        var i,
          s,
          r = g.exec(t) || y.exec(t);
        return r ? m(c({
          h: (i = r[1], void 0 === (s = r[2]) && (s = "deg"), Number(i) * (e[s] || 1)),
          s: Number(r[3]),
          l: Number(r[4]),
          a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
        })) : null;
      }, "hsl"]],
      object: [[function (t) {
        var e = t.r,
          s = t.g,
          r = t.b,
          n = t.a;
        return i(e) && i(s) && i(r) ? a({
          r: Number(e),
          g: Number(s),
          b: Number(r),
          a: Number(void 0 === n ? 1 : n)
        }) : null;
      }, "rgb"], [function (t) {
        var e = t.h,
          s = t.s,
          r = t.l,
          n = t.a;
        return i(e) && i(s) && i(r) ? m(c({
          h: Number(e),
          s: Number(s),
          l: Number(r),
          a: Number(void 0 === n ? 1 : n)
        })) : null;
      }, "hsl"], [function (t) {
        var e,
          s = t.h,
          a = t.s,
          h = t.v,
          o = t.a;
        return i(s) && i(a) && i(h) ? d({
          h: n((e = {
            h: Number(s),
            s: Number(a),
            v: Number(h),
            a: Number(void 0 === o ? 1 : o)
          }).h),
          s: r(e.s, 0, 100),
          v: r(e.v, 0, 100),
          a: r(e.a)
        }) : null;
      }, "hsv"]]
    },
    v = function (t, e) {
      for (var i = 0; i < e.length; i++) {
        var s = e[i][0](t);
        if (s) return [s, e[i][1]];
      }
      return [null, void 0];
    },
    w = function (t, e) {
      var i = p(t);
      return {
        h: i.h,
        s: r(i.s + 100 * e, 0, 100),
        l: i.l,
        a: i.a
      };
    },
    M = function (t) {
      return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255;
    },
    A = function (t, e) {
      var i = p(t);
      return {
        h: i.h,
        s: i.s,
        l: r(i.l + 100 * e, 0, 100),
        a: i.a
      };
    },
    E = function () {
      function t(t) {
        this.parsed = ("string" == typeof t ? v(t.trim(), _.string) : "object" == typeof t && null !== t ? v(t, _.object) : [null, void 0])[0], this.rgba = this.parsed || {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        };
      }
      return t.prototype.isValid = function () {
        return null !== this.parsed;
      }, t.prototype.brightness = function () {
        return s(M(this.rgba), 2);
      }, t.prototype.isDark = function () {
        return .5 > M(this.rgba);
      }, t.prototype.isLight = function () {
        return M(this.rgba) >= .5;
      }, t.prototype.toHex = function () {
        var t, e, i, r, n, a;
        return e = (t = h(this.rgba)).r, i = t.g, r = t.b, a = (n = t.a) < 1 ? u(s(255 * n)) : "", "#" + u(e) + u(i) + u(r) + a;
      }, t.prototype.toRgb = function () {
        return h(this.rgba);
      }, t.prototype.toRgbString = function () {
        var t, e, i, s, r;
        return e = (t = h(this.rgba)).r, i = t.g, s = t.b, (r = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + s + ", " + r + ")" : "rgb(" + e + ", " + i + ", " + s + ")";
      }, t.prototype.toHsl = function () {
        return f(p(this.rgba));
      }, t.prototype.toHslString = function () {
        var t, e, i, s, r;
        return e = (t = f(p(this.rgba))).h, i = t.s, s = t.l, (r = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + s + "%, " + r + ")" : "hsl(" + e + ", " + i + "%, " + s + "%)";
      }, t.prototype.toHsv = function () {
        var t;
        return {
          h: s((t = l(this.rgba)).h),
          s: s(t.s),
          v: s(t.v),
          a: s(t.a, 3)
        };
      }, t.prototype.invert = function () {
        var t;
        return P({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a
        });
      }, t.prototype.saturate = function (t) {
        return void 0 === t && (t = .1), P(w(this.rgba, t));
      }, t.prototype.desaturate = function (t) {
        return void 0 === t && (t = .1), P(w(this.rgba, -t));
      }, t.prototype.grayscale = function () {
        return P(w(this.rgba, -1));
      }, t.prototype.lighten = function (t) {
        return void 0 === t && (t = .1), P(A(this.rgba, t));
      }, t.prototype.darken = function (t) {
        return void 0 === t && (t = .1), P(A(this.rgba, -t));
      }, t.prototype.rotate = function (t) {
        return void 0 === t && (t = 15), this.hue(this.hue() + t);
      }, t.prototype.alpha = function (t) {
        var e;
        return "number" == typeof t ? P({
          r: (e = this.rgba).r,
          g: e.g,
          b: e.b,
          a: t
        }) : s(this.rgba.a, 3);
      }, t.prototype.hue = function (t) {
        var e = p(this.rgba);
        return "number" == typeof t ? P({
          h: t,
          s: e.s,
          l: e.l,
          a: e.a
        }) : s(e.h);
      }, t.prototype.isEqual = function (t) {
        return this.toHex() === P(t).toHex();
      }, t;
    }(),
    P = function (t) {
      return t instanceof E ? t : new E(t);
    },
    T = [];
  [function (t, e) {
    var i = {
        white: "#ffffff",
        bisque: "#ffe4c4",
        blue: "#0000ff",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        azure: "#f0ffff",
        whitesmoke: "#f5f5f5",
        papayawhip: "#ffefd5",
        plum: "#dda0dd",
        blanchedalmond: "#ffebcd",
        black: "#000000",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        cornsilk: "#fff8dc",
        cornflowerblue: "#6495ed",
        burlywood: "#deb887",
        aquamarine: "#7fffd4",
        beige: "#f5f5dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkkhaki: "#bdb76b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        peachpuff: "#ffdab9",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkslateblue: "#483d8b",
        gray: "#808080",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        wheat: "#f5deb3",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        ghostwhite: "#f8f8ff",
        darkviolet: "#9400d3",
        magenta: "#ff00ff",
        green: "#008000",
        dodgerblue: "#1e90ff",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        blueviolet: "#8a2be2",
        forestgreen: "#228b22",
        lawngreen: "#7cfc00",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        fuchsia: "#ff00ff",
        brown: "#a52a2a",
        maroon: "#800000",
        mediumblue: "#0000cd",
        lightcoral: "#f08080",
        darkturquoise: "#00ced1",
        lightcyan: "#e0ffff",
        ivory: "#fffff0",
        lightyellow: "#ffffe0",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        linen: "#faf0e6",
        mediumaquamarine: "#66cdaa",
        lemonchiffon: "#fffacd",
        lime: "#00ff00",
        khaki: "#f0e68c",
        mediumseagreen: "#3cb371",
        limegreen: "#32cd32",
        mediumspringgreen: "#00fa9a",
        lightskyblue: "#87cefa",
        lightblue: "#add8e6",
        midnightblue: "#191970",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        mintcream: "#f5fffa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        navajowhite: "#ffdead",
        navy: "#000080",
        mediumvioletred: "#c71585",
        powderblue: "#b0e0e6",
        palegoldenrod: "#eee8aa",
        oldlace: "#fdf5e6",
        paleturquoise: "#afeeee",
        mediumturquoise: "#48d1cc",
        mediumorchid: "#ba55d3",
        rebeccapurple: "#663399",
        lightsteelblue: "#b0c4de",
        mediumslateblue: "#7b68ee",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        orchid: "#da70d6",
        mediumpurple: "#9370db",
        purple: "#800080",
        pink: "#ffc0cb",
        skyblue: "#87ceeb",
        springgreen: "#00ff7f",
        palegreen: "#98fb98",
        red: "#ff0000",
        yellow: "#ffff00",
        slateblue: "#6a5acd",
        lavenderblush: "#fff0f5",
        peru: "#cd853f",
        palevioletred: "#db7093",
        violet: "#ee82ee",
        teal: "#008080",
        slategray: "#708090",
        slategrey: "#708090",
        aliceblue: "#f0f8ff",
        darkseagreen: "#8fbc8f",
        darkolivegreen: "#556b2f",
        greenyellow: "#adff2f",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        tomato: "#ff6347",
        silver: "#c0c0c0",
        sienna: "#a0522d",
        lavender: "#e6e6fa",
        lightgreen: "#90ee90",
        orange: "#ffa500",
        orangered: "#ff4500",
        steelblue: "#4682b4",
        royalblue: "#4169e1",
        turquoise: "#40e0d0",
        yellowgreen: "#9acd32",
        salmon: "#fa8072",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        darksalmon: "#e9967a",
        lightgoldenrodyellow: "#fafad2",
        snow: "#fffafa",
        lightgrey: "#d3d3d3",
        lightgray: "#d3d3d3",
        dimgray: "#696969",
        dimgrey: "#696969",
        olivedrab: "#6b8e23",
        olive: "#808000"
      },
      s = {};
    for (var r in i) s[i[r]] = r;
    var n = {};
    t.prototype.toName = function (e) {
      if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
      var r,
        a = s[this.toHex()];
      if (a) return a;
      if (null == e ? void 0 : e.closest) {
        var h = this.toRgb(),
          o = 1 / 0,
          u = "black";
        if (!n.length) for (var l in i) n[l] = new t(i[l]).toRgb();
        for (var d in i) {
          var c = (r = n[d], Math.pow(h.r - r.r, 2) + Math.pow(h.g - r.g, 2) + Math.pow(h.b - r.b, 2));
          c < o && (o = c, u = d);
        }
        return u;
      }
    }, e.string.push([function (e) {
      var s = e.toLowerCase(),
        r = "transparent" === s ? "#0000" : i[s];
      return r ? new t(r).toRgb() : null;
    }, "name"]);
  }].forEach(function (t) {
    0 > T.indexOf(t) && (t(E, _), T.push(t));
  });
  let C = class t {
    constructor(t = 0xffffff) {
      this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 0xffffff, this.value = t;
    }
    get red() {
      return this._components[0];
    }
    get green() {
      return this._components[1];
    }
    get blue() {
      return this._components[2];
    }
    get alpha() {
      return this._components[3];
    }
    setValue(t) {
      return this.value = t, this;
    }
    set value(e) {
      if (e instanceof t) this._value = this._cloneSource(e._value), this._int = e._int, this._components.set(e._components);else if (null === e) throw Error("Cannot set Color#value to null");else null !== this._value && this._isSourceEqual(this._value, e) || (this._value = this._cloneSource(e), this._normalize(this._value));
    }
    get value() {
      return this._value;
    }
    _cloneSource(t) {
      if ("string" == typeof t || "number" == typeof t || t instanceof Number || null === t) ;else if (Array.isArray(t) || ArrayBuffer.isView(t)) return t.slice(0);else if ("object" == typeof t && null !== t) return {
        ...t
      };
      return t;
    }
    _isSourceEqual(t, e) {
      let i = typeof t;
      if (i !== typeof e) return !1;
      if ("number" === i || "string" === i || t instanceof Number) ;else if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length === e.length && t.every((t, i) => t === e[i]);else if (null !== t && null !== e) {
        let i = Object.keys(t),
          s = Object.keys(e);
        return i.length === s.length && i.every(i => t[i] === e[i]);
      }
      return t === e;
    }
    toRgba() {
      let [t, e, i, s] = this._components;
      return {
        r: t,
        g: e,
        b: i,
        a: s
      };
    }
    toRgb() {
      let [t, e, i] = this._components;
      return {
        r: t,
        g: e,
        b: i
      };
    }
    toRgbaString() {
      let [t, e, i] = this.toUint8RgbArray();
      return `rgba(${t},${e},${i},${this.alpha})`;
    }
    toUint8RgbArray(t) {
      let [e, i, s] = this._components;
      return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(255 * e), t[1] = Math.round(255 * i), t[2] = Math.round(255 * s), t;
    }
    toArray(t) {
      this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba);
      let [e, i, s, r] = this._components;
      return t[0] = e, t[1] = i, t[2] = s, t[3] = r, t;
    }
    toRgbArray(t) {
      this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb);
      let [e, i, s] = this._components;
      return t[0] = e, t[1] = i, t[2] = s, t;
    }
    toNumber() {
      return this._int;
    }
    toBgrNumber() {
      let [t, e, i] = this.toUint8RgbArray();
      return (i << 16) + (e << 8) + t;
    }
    toLittleEndianNumber() {
      let t = this._int;
      return (t >> 16) + (65280 & t) + ((255 & t) << 16);
    }
    multiply(e) {
      let [i, s, r, n] = t._temp.setValue(e)._components;
      return this._components[0] *= i, this._components[1] *= s, this._components[2] *= r, this._components[3] *= n, this._refreshInt(), this._value = null, this;
    }
    premultiply(t, e = !0) {
      return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this;
    }
    toPremultiplied(t, e = !0) {
      if (1 === t) return -0x1000000 + this._int;
      if (0 === t) return e ? 0 : this._int;
      let i = this._int >> 16 & 255,
        s = this._int >> 8 & 255,
        r = 255 & this._int;
      return e && (i = i * t + .5 | 0, s = s * t + .5 | 0, r = r * t + .5 | 0), (255 * t << 24) + (i << 16) + (s << 8) + r;
    }
    toHex() {
      let t = this._int.toString(16);
      return `#${"000000".substring(0, 6 - t.length) + t}`;
    }
    toHexa() {
      let t = Math.round(255 * this._components[3]).toString(16);
      return this.toHex() + "00".substring(0, 2 - t.length) + t;
    }
    setAlpha(t) {
      return this._components[3] = this._clamp(t), this._value = null, this;
    }
    _normalize(e) {
      let i, s, r, n;
      if (("number" == typeof e || e instanceof Number) && e >= 0 && e <= 0xffffff) {
        let t = e;
        i = (t >> 16 & 255) / 255, s = (t >> 8 & 255) / 255, r = (255 & t) / 255, n = 1;
      } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [i, s, r, n = 1] = e;else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [i, s, r, n = 255] = e, i /= 255, s /= 255, r /= 255, n /= 255;else if ("string" == typeof e || "object" == typeof e) {
        if ("string" == typeof e) {
          let i = t.HEX_PATTERN.exec(e);
          i && (e = `#${i[2]}`);
        }
        let a = P(e);
        a.isValid() && ({
          r: i,
          g: s,
          b: r,
          a: n
        } = a.rgba, i /= 255, s /= 255, r /= 255);
      }
      if (void 0 !== i) this._components[0] = i, this._components[1] = s, this._components[2] = r, this._components[3] = n, this._refreshInt();else throw Error(`Unable to convert color ${e}`);
    }
    _refreshInt() {
      this._clamp(this._components);
      let [t, e, i] = this._components;
      this._int = (255 * t << 16) + (255 * e << 8) + (255 * i | 0);
    }
    _clamp(t, e = 0, i = 1) {
      return "number" == typeof t ? Math.min(Math.max(t, e), i) : (t.forEach((s, r) => {
        t[r] = Math.min(Math.max(s, e), i);
      }), t);
    }
    static isColorLike(e) {
      return "number" == typeof e || "string" == typeof e || e instanceof Number || e instanceof t || Array.isArray(e) || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || void 0 !== e.r && void 0 !== e.g && void 0 !== e.b || void 0 !== e.r && void 0 !== e.g && void 0 !== e.b && void 0 !== e.a || void 0 !== e.h && void 0 !== e.s && void 0 !== e.l || void 0 !== e.h && void 0 !== e.s && void 0 !== e.l && void 0 !== e.a || void 0 !== e.h && void 0 !== e.s && void 0 !== e.v || void 0 !== e.h && void 0 !== e.s && void 0 !== e.v && void 0 !== e.a;
    }
  };
  C.shared = new C(), C._temp = new C(), C.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i, t.s(["Color", 0, C], 222735);
};
