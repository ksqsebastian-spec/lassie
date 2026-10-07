// Recovered from 0zzhxfvrp0q_a.js. Runtime module IDs: 556700, 680055, 473471, 742495, 841940, 926766, 974543.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  class e {
    constructor(t = 0, e = 0, i = !1) {
      this.first = null, this.items = Object.create(null), this.last = null, this.max = t, this.resetTtl = i, this.size = 0, this.ttl = e;
    }
    clear() {
      return this.first = null, this.items = Object.create(null), this.last = null, this.size = 0, this;
    }
    delete(t) {
      if (this.has(t)) {
        let e = this.items[t];
        delete this.items[t], this.size--, null !== e.prev && (e.prev.next = e.next), null !== e.next && (e.next.prev = e.prev), this.first === e && (this.first = e.next), this.last === e && (this.last = e.prev);
      }
      return this;
    }
    entries(t = this.keys()) {
      let e = Array(t.length);
      for (let i = 0; i < t.length; i++) {
        let s = t[i];
        e[i] = [s, this.get(s)];
      }
      return e;
    }
    evict(t = !1) {
      if (t || this.size > 0) {
        let t = this.first;
        delete this.items[t.key], 0 == --this.size ? (this.first = null, this.last = null) : (this.first = t.next, this.first.prev = null);
      }
      return this;
    }
    expiresAt(t) {
      let e;
      return this.has(t) && (e = this.items[t].expiry), e;
    }
    get(t) {
      let e = this.items[t];
      if (void 0 !== e) return this.ttl > 0 && e.expiry <= Date.now() ? void this.delete(t) : (this.moveToEnd(e), e.value);
    }
    has(t) {
      return t in this.items;
    }
    moveToEnd(t) {
      this.last !== t && (null !== t.prev && (t.prev.next = t.next), null !== t.next && (t.next.prev = t.prev), this.first === t && (this.first = t.next), t.prev = this.last, t.next = null, null !== this.last && (this.last.next = t), this.last = t, null === this.first && (this.first = t));
    }
    keys() {
      let t = Array(this.size),
        e = this.first,
        i = 0;
      for (; null !== e;) t[i++] = e.key, e = e.next;
      return t;
    }
    setWithEvicted(t, e, i = this.resetTtl) {
      let s = null;
      if (this.has(t)) this.set(t, e, !0, i);else {
        this.max > 0 && this.size === this.max && (s = {
          ...this.first
        }, this.evict(!0));
        let i = this.items[t] = {
          expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
          key: t,
          prev: this.last,
          next: null,
          value: e
        };
        1 == ++this.size ? this.first = i : this.last.next = i, this.last = i;
      }
      return s;
    }
    set(t, e, i = !1, s = this.resetTtl) {
      let r = this.items[t];
      return i || void 0 !== r ? (r.value = e, !1 === i && s && (r.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(r)) : (this.max > 0 && this.size === this.max && this.evict(!0), r = this.items[t] = {
        expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
        key: t,
        prev: this.last,
        next: null,
        value: e
      }, 1 == ++this.size ? this.first = r : this.last.next = r, this.last = r), this;
    }
    values(t = this.keys()) {
      let e = Array(t.length);
      for (let i = 0; i < t.length; i++) e[i] = this.get(t[i]);
      return e;
    }
  }
  function i(t = 1e3, s = 0, r = !1) {
    if (isNaN(t) || t < 0) throw TypeError("Invalid max value");
    if (isNaN(s) || s < 0) throw TypeError("Invalid ttl value");
    if ("boolean" != typeof r) throw TypeError("Invalid resetTtl value");
    return new e(t, s, r);
  }
  t.s(["lru", 0, i], 680055);
  var s = t.i(787653);
  function r(t) {
    return !!t.tagStyles && Object.keys(t.tagStyles).length > 0;
  }
  function n(t) {
    return t.includes("<");
  }
  function l(t, e) {
    let i = [],
      s = e.tagStyles;
    if (!r(e) || !n(t)) return i.push({
      text: t,
      style: e
    }), i;
    let l = [e],
      a = [],
      o = "",
      h = 0;
    for (; h < t.length;) {
      let e = t[h];
      if ("<" === e) {
        let r = t.indexOf(">", h);
        if (-1 === r) {
          o += e, h++;
          continue;
        }
        let n = t.indexOf("<", h + 1);
        if (-1 !== n && n < r) {
          o += e, h++;
          continue;
        }
        let c = t.slice(h + 1, r);
        if (c.startsWith("/")) {
          let e = c.slice(1).trim();
          if (a.length > 0 && a[a.length - 1] === e) {
            o.length > 0 && (i.push({
              text: o,
              style: l[l.length - 1]
            }), o = ""), l.pop(), a.pop(), h = r + 1;
            continue;
          }
          o += t.slice(h, r + 1), h = r + 1;
          continue;
        }
        {
          let e = c.trim();
          if (s[e]) {
            var d, u;
            o.length > 0 && (i.push({
              text: o,
              style: l[l.length - 1]
            }), o = "");
            let t = (d = l[l.length - 1], u = s[e], d.clone().assign(u));
            l.push(t), a.push(e), h = r + 1;
            continue;
          }
          o += t.slice(h, r + 1), h = r + 1;
          continue;
        }
      }
      o += e, h++;
    }
    return o.length > 0 && i.push({
      text: o,
      style: l[l.length - 1]
    }), i;
  }
  t.s(["getPlainText", 0, function (t, e) {
    return r(e) && n(t) ? l(t, e).map(t => t.text).join("") : t;
  }, "hasTagMarkup", 0, n, "hasTagStyles", 0, r, "parseTaggedText", 0, l], 473471);
  let a = [10, 13],
    o = new Set(a),
    h = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288],
    d = new Set(h),
    u = [9, 32],
    c = new Set(u),
    p = [45, 8208, 8211, 8212, 173],
    f = new Set(p),
    g = /(\r\n|\r|\n)/,
    S = /(?:\r\n|\r|\n)/;
  function _(t) {
    return "string" == typeof t && o.has(t.charCodeAt(0));
  }
  function x(t, e) {
    return "string" == typeof t && d.has(t.charCodeAt(0));
  }
  function y(t) {
    return "string" == typeof t && f.has(t.charCodeAt(0));
  }
  function m(t) {
    return "normal" === t || "pre-line" === t;
  }
  function w(t) {
    return "normal" === t;
  }
  function F(t) {
    if ("string" != typeof t) return "";
    let e = t.length - 1;
    for (; e >= 0 && x(t[e]);) e--;
    return e < t.length - 1 ? t.slice(0, e + 1) : t;
  }
  function C(t) {
    let e = [],
      i = [];
    if ("string" != typeof t) return e;
    for (let s = 0; s < t.length; s++) {
      let r = t[s],
        n = t[s + 1];
      if (x(r, n) || _(r)) {
        i.length > 0 && (e.push(i.join("")), i.length = 0), "\r" === r && "\n" === n ? (e.push("\r\n"), s++) : e.push(r);
        continue;
      }
      i.push(r), y(r) && n && !x(n) && !_(n) && (e.push(i.join("")), i.length = 0);
    }
    return i.length > 0 && e.push(i.join("")), e;
  }
  function v(t, e, i, s) {
    let r = i(t),
      n = [];
    for (let i = 0; i < r.length; i++) {
      let l = r[i],
        a = l,
        o = 1;
      for (; r[i + o];) {
        let n = r[i + o];
        if (s(a, n, t, i, e)) break;
        l += n, a = n, o++;
      }
      i += o - 1, n.push(l);
    }
    return n;
  }
  t.s(["BREAKING_SPACES", 0, h, "BREAKING_SPACES_SET", 0, d, "BREAK_AFTER_CHARS", 0, p, "BREAK_AFTER_CHARS_SET", 0, f, "COLLAPSIBLE_SPACES", 0, u, "COLLAPSIBLE_SPACES_SET", 0, c, "NEWLINES", 0, a, "NEWLINES_SET", 0, o, "NEWLINE_MATCH_REGEX", 0, S, "NEWLINE_SPLIT_REGEX", 0, g, "collapseNewlines", 0, w, "collapseSpaces", 0, m, "getCharacterGroups", 0, v, "isBreakAfterChar", 0, y, "isBreakingSpace", 0, x, "isCollapsibleSpace", 0, function (t) {
    return "string" == typeof t && c.has(t.charCodeAt(0));
  }, "isNewline", 0, _, "tokenize", 0, C, "trimRight", 0, F], 742495);
  let k = /\r\n|\r|\n/g;
  function T(t, e, i, s, r, n, a, o, h) {
    let d = l(t, e);
    if (w(e.whiteSpace)) for (let t = 0; t < d.length; t++) {
      let e = d[t];
      d[t] = {
        text: e.text.replace(k, " "),
        style: e.style
      };
    }
    let u = [],
      c = [];
    for (let t of d) {
      let e = t.text.split(g);
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        "\r\n" === s || "\r" === s || "\n" === s ? (u.push(c), c = []) : s.length > 0 && c.push({
          text: s,
          style: t.style
        });
      }
    }
    (c.length > 0 || 0 === u.length) && u.push(c);
    let p = i ? b(u, e, s, n, o, h) : u,
      f = [],
      S = [],
      _ = [],
      x = [],
      y = [],
      m = 0,
      F = a(e._fontString);
    0 === F.fontSize && (F.fontSize = e.fontSize, F.ascent = e.fontSize);
    let C = "",
      v = !!e.dropShadow,
      T = e._stroke?.width || 0;
    for (let t of p) {
      let i = 0,
        n = F.ascent,
        l = F.descent,
        o = "";
      for (let e of t) {
        let t = e.style._fontString,
          h = a(t);
        t !== C && (s.font = t, C = t), i += r(e.text, e.style.letterSpacing, s), n = Math.max(n, h.ascent), l = Math.max(l, h.descent), o += e.text;
        let d = e.style._stroke?.width || 0;
        d > T && (T = d), !v && e.style.dropShadow && (v = !0);
      }
      0 === t.length && (n = F.ascent, l = F.descent), f.push(i), S.push(n), _.push(l), y.push(o);
      let h = e.lineHeight || n + l;
      x.push(h + e.leading), m = Math.max(m, i);
    }
    let A = T,
      W = m + A + (e.dropShadow ? e.dropShadow.distance : 0),
      z = 0;
    for (let t = 0; t < x.length; t++) z += x[t];
    return {
      width: W,
      height: (z = Math.max(z, x[0] + A)) + (e.dropShadow ? e.dropShadow.distance : 0),
      lines: y,
      lineWidths: f,
      lineHeight: (e.lineHeight || F.fontSize) + e.leading,
      maxLineWidth: m,
      fontProperties: F,
      runsByLine: p,
      lineAscents: S,
      lineDescents: _,
      lineHeights: x,
      hasDropShadow: v
    };
  }
  function b(t, e, i, s, r, n) {
    let {
        letterSpacing: l,
        whiteSpace: a,
        wordWrapWidth: o,
        breakWords: h
      } = e,
      d = m(a),
      u = o + l,
      c = {},
      p = "",
      f = (t, e) => {
        let r = `${t}|${e.styleKey}`,
          n = c[r];
        if (void 0 === n) {
          let l = e._fontString;
          l !== p && (i.font = l, p = l), n = s(t, e.letterSpacing, i) + e.letterSpacing, c[r] = n;
        }
        return n;
      },
      g = [];
    for (let e of t) {
      let t = A(e),
        i = g.length,
        s = e => {
          let i = 0,
            s = e;
          do {
            let {
              token: e,
              style: r
            } = t[s];
            i += f(e, r), s++;
          } while (s < t.length && t[s].continuesFromPrevious);
          return i;
        },
        l = e => {
          let i = [],
            s = e;
          do i.push({
            token: t[s].token,
            style: t[s].style
          }), s++; while (s < t.length && t[s].continuesFromPrevious);
          return i;
        },
        a = [],
        o = 0,
        c = !d,
        p = null,
        S = () => {
          p && p.text.length > 0 && a.push(p), p = null;
        },
        _ = () => {
          if (S(), a.length > 0) {
            let t = a[a.length - 1];
            t.text = F(t.text), 0 === t.text.length && a.pop();
          }
          g.push(a), a = [], o = 0, c = !1;
        };
      for (let e = 0; e < t.length; e++) {
        let {
            token: i,
            style: y,
            continuesFromPrevious: m
          } = t[e],
          w = f(i, y);
        if (d) {
          let t = x(i),
            e = p?.text[p.text.length - 1] ?? a[a.length - 1]?.text.slice(-1) ?? "",
            s = !!e && x(e);
          if (t && s) continue;
        }
        let F = !m,
          C = F ? s(e) : w;
        if (C > u && F) {
          if (o > 0 && _(), h) {
            let t = l(e);
            for (let e = 0; e < t.length; e++) {
              let i = t[e].token,
                s = t[e].style;
              for (let t of v(i, h, n, r)) {
                let e = f(t, s);
                e + o > u && _(), p && p.style === s ? p.text += t : (S(), p = {
                  text: t,
                  style: s
                }), o += e;
              }
            }
            e += t.length - 1;
          } else {
            let t = l(e);
            S(), g.push(t.map(t => ({
              text: t.token,
              style: t.style
            }))), c = !1, e += t.length - 1;
          }
        } else if (C + o > u && F) {
          if (x(i)) {
            c = !1;
            continue;
          }
          _(), p = {
            text: i,
            style: y
          }, o = w;
        } else if (m && !h) p && p.style === y ? p.text += i : (S(), p = {
          text: i,
          style: y
        }), o += w;else {
          let t = x(i);
          if (0 === o && t && !c) continue;
          p && p.style === y ? p.text += i : (S(), p = {
            text: i,
            style: y
          }), o += w;
        }
      }
      if (S(), a.length > 0) {
        let t = a[a.length - 1];
        t.text = F(t.text), 0 === t.text.length && a.pop();
      }
      (a.length > 0 || g.length === i) && g.push(a);
    }
    return g;
  }
  function A(t) {
    let e = [],
      i = !1;
    for (let s of t) {
      let t = C(s.text),
        r = !0;
      for (let n of t) {
        let t = x(n) || _(n),
          l = r && i && !t;
        e.push({
          token: n,
          style: s.style,
          continuesFromPrevious: l
        }), i = !t, r = !1;
      }
    }
    return e;
  }
  t.s(["measureTaggedText", 0, T, "tokenizeTaggedRuns", 0, A, "wordWrapTaggedLines", 0, b], 841940);
  let W = {
    willReadFrequently: !0
  };
  function z(t, e, i, s, r) {
    let n = i[t];
    return "number" != typeof n && (n = r(t, e, s) + e, i[t] = n), n;
  }
  function B(t, e, i, s, r, n, l) {
    let a = i.getContext("2d", W);
    a.font = e._fontString;
    let o = 0,
      h = "",
      d = [],
      u = Object.create(null),
      {
        letterSpacing: c,
        whiteSpace: p
      } = e,
      f = m(p),
      g = w(p),
      S = !f,
      y = e.wordWrapWidth + c,
      k = C(t);
    for (let t = 0; t < k.length; t++) {
      let i = k[t];
      if (_(i)) {
        if (!g) {
          d.push(F(h)), S = !f, h = "", o = 0;
          continue;
        }
        i = " ";
      }
      if (f) {
        let t = x(i),
          e = x(h[h.length - 1]);
        if (t && e) continue;
      }
      let p = z(i, c, u, a, s);
      if (p > y) {
        if ("" !== h && (d.push(F(h)), h = "", o = 0), r(i, e.breakWords)) for (let t of v(i, e.breakWords, l, n)) {
          let e = z(t, c, u, a, s);
          e + o > y && (d.push(F(h)), S = !1, h = "", o = 0), h += t, o += e;
        } else h.length > 0 && (d.push(F(h)), h = "", o = 0), d.push(F(i)), S = !1, h = "", o = 0;
      } else p + o > y && (S = !1, d.push(F(h)), h = "", o = 0), (h.length > 0 || !x(i) || S) && (h += i, o += p);
    }
    let T = F(h);
    return T.length > 0 && d.push(T), d.join("\n");
  }
  t.s(["wordWrap", 0, B], 926766);
  let E = {
      willReadFrequently: !0
    },
    M = class t {
      static get experimentalLetterSpacingSupported() {
        let e = t._experimentalLetterSpacingSupported;
        if (void 0 === e) {
          let i = s.DOMAdapter.get().getCanvasRenderingContext2D().prototype;
          e = t._experimentalLetterSpacingSupported = "letterSpacing" in i || "textLetterSpacing" in i;
        }
        return e;
      }
      constructor(t, e, i, s, r, n, l, a, o, h) {
        this.text = t, this.style = e, this.width = i, this.height = s, this.lines = r, this.lineWidths = n, this.lineHeight = l, this.maxLineWidth = a, this.fontProperties = o, h && (this.runsByLine = h.runsByLine, this.lineAscents = h.lineAscents, this.lineDescents = h.lineDescents, this.lineHeights = h.lineHeights, this.hasDropShadow = h.hasDropShadow);
      }
      static measureText(e = " ", i, s = t._canvas, l = i.wordWrap) {
        let a = `${e}-${i.styleKey}-wordWrap-${l}`;
        if (t._measurementCache.has(a)) return t._measurementCache.get(a);
        if (r(i) && n(e)) {
          let s = T(e, i, l, t._context, t._measureText, t._measureTextAdvance, t.measureFont, t.canBreakChars, t.wordWrapSplit),
            r = new t(e, i, s.width, s.height, s.lines, s.lineWidths, s.lineHeight, s.maxLineWidth, s.fontProperties, {
              runsByLine: s.runsByLine,
              lineAscents: s.lineAscents,
              lineDescents: s.lineDescents,
              lineHeights: s.lineHeights,
              hasDropShadow: s.hasDropShadow
            });
          return t._measurementCache.set(a, r), r;
        }
        let o = i._fontString,
          h = t.measureFont(o);
        0 === h.fontSize && (h.fontSize = i.fontSize, h.ascent = i.fontSize, h.descent = 0);
        let d = t._context;
        d.font = o;
        let u = (l ? t._wordWrap(e, i, s) : e).split(S),
          c = Array(u.length),
          p = 0;
        for (let e = 0; e < u.length; e++) {
          let s = t._measureText(u[e], i.letterSpacing, d);
          c[e] = s, p = Math.max(p, s);
        }
        let f = i._stroke?.width ?? 0,
          g = i.lineHeight || h.fontSize,
          _ = t._adjustWidthForStyle(p, i),
          x = Math.max(g, h.fontSize + f) + (u.length - 1) * (g + i.leading),
          y = t._adjustHeightForStyle(x, i),
          m = new t(e, i, _, y, u, c, g + i.leading, p, h);
        return t._measurementCache.set(a, m), m;
      }
      static _adjustWidthForStyle(t, e) {
        let i = t + (e._stroke?.width || 0);
        return e.dropShadow && (i += e.dropShadow.distance), i;
      }
      static _adjustHeightForStyle(t, e) {
        let i = t;
        return e.dropShadow && (i += e.dropShadow.distance), i;
      }
      static _measureText(e, i, s) {
        let {
            metricWidth: r,
            metrics: n,
            letterSpacingVal: l
          } = t._measureTextCore(e, i, s),
          a = -(n.actualBoundingBoxLeft ?? 0),
          o = (n.actualBoundingBoxRight ?? 0) - a;
        return n.width > 0 && (o += l), Math.max(r, o);
      }
      static _measureTextAdvance(e, i, s) {
        return t._measureTextCore(e, i, s).metricWidth;
      }
      static _measureTextCore(e, i, s) {
        let r = !1;
        t.experimentalLetterSpacingSupported && (t.experimentalLetterSpacing ? (s.letterSpacing = `${i}px`, s.textLetterSpacing = `${i}px`, r = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
        let n = s.measureText(e),
          l = n.width,
          a = 0;
        return l > 0 && (l += a = r ? -i : (t.graphemeSegmenter(e).length - 1) * i), {
          metricWidth: l,
          metrics: n,
          letterSpacingVal: a
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
        return !0;
      }
      static wordWrapSplit(e) {
        return t.graphemeSegmenter(e);
      }
      static measureFont(e) {
        if (t._fonts[e]) return t._fonts[e];
        let i = t._context;
        i.font = e;
        let s = i.measureText(t.METRICS_STRING + t.BASELINE_SYMBOL),
          r = s.actualBoundingBoxAscent ?? 0,
          n = s.actualBoundingBoxDescent ?? 0,
          l = {
            ascent: r,
            descent: n,
            fontSize: r + n
          };
        return t._fonts[e] = l, l;
      }
      static clearMetrics(e = "") {
        e ? delete t._fonts[e] : t._fonts = {};
      }
      static get _canvas() {
        if (!t.__canvas) {
          let e;
          try {
            let i = new OffscreenCanvas(0, 0),
              r = i.getContext("2d", E);
            if (r?.measureText) return t.__canvas = i, i;
            e = s.DOMAdapter.get().createCanvas();
          } catch (t) {
            e = s.DOMAdapter.get().createCanvas();
          }
          e.width = e.height = 10, t.__canvas = e;
        }
        return t.__canvas;
      }
      static get _context() {
        return t.__context || (t.__context = t._canvas.getContext("2d", E)), t.__context;
      }
    };
  M.METRICS_STRING = "|ÉqÅ", M.BASELINE_SYMBOL = "M", M.BASELINE_MULTIPLIER = 1.4, M.HEIGHT_MULTIPLIER = 2, M.graphemeSegmenter = (() => {
    if ("function" == typeof Intl?.Segmenter) {
      let t = new Intl.Segmenter();
      return e => {
        let i = t.segment(e),
          s = [],
          r = 0;
        for (let t of i) s[r++] = t.segment;
        return s;
      };
    }
    return t => [...t];
  })(), M.experimentalLetterSpacing = !1, M._fonts = {}, M._measurementCache = i(1e3), t.s(["CanvasTextMetrics", 0, M], 556700);
  let P = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
  t.s(["fontStringFromTextStyle", 0, function (t) {
    let e = "number" == typeof t.fontSize ? `${t.fontSize}px` : t.fontSize,
      i = t.fontFamily;
    Array.isArray(t.fontFamily) || (i = t.fontFamily.split(","));
    for (let t = i.length - 1; t >= 0; t--) {
      let e = i[t].trim();
      /([\"\'])[^\'\"]+\1/.test(e) || P.includes(e) || (e = `"${e}"`), i[t] = e;
    }
    return `${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${e} ${i.join(",")}`;
  }], 974543);
};
