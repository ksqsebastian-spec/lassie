// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 380762, 547416, 547417, 866836, 163062, 140427.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e,
    i,
    r = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    },
    s = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
    n = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  var a = t.i(562140);
  t.s(["parseSVGPath", 0, function (t, e) {
    let i,
      l = (i = [], t.replace(s, (t, e, s) => {
        let a,
          l = e.toLowerCase(),
          h = e,
          o = (a = s.match(n)) ? a.map(Number) : [];
        for ("m" === l && o.length > 2 && (i.push([h, ...o.splice(0, 2)]), l = "l", h = "m" === h ? "l" : "L");;) {
          if (o.length === r[l]) return i.push([h, ...o]), "";
          if (o.length < r[l]) throw Error("malformed path data");
          i.push([h, ...o.splice(0, r[l])]);
        }
      }), i),
      h = [],
      o = null,
      u = 0,
      c = 0;
    for (let t = 0; t < l.length; t++) {
      let i = l[t],
        r = i[0];
      switch (r) {
        case "M":
          u = i[1], c = i[2], e.moveTo(u, c);
          break;
        case "m":
          u += i[1], c += i[2], e.moveTo(u, c);
          break;
        case "H":
          u = i[1], e.lineTo(u, c);
          break;
        case "h":
          u += i[1], e.lineTo(u, c);
          break;
        case "V":
          c = i[1], e.lineTo(u, c);
          break;
        case "v":
          c += i[1], e.lineTo(u, c);
          break;
        case "L":
          u = i[1], c = i[2], e.lineTo(u, c);
          break;
        case "l":
          u += i[1], c += i[2], e.lineTo(u, c);
          break;
        case "C":
          u = i[5], c = i[6], e.bezierCurveTo(i[1], i[2], i[3], i[4], u, c);
          break;
        case "c":
          e.bezierCurveTo(u + i[1], c + i[2], u + i[3], c + i[4], u + i[5], c + i[6]), u += i[5], c += i[6];
          break;
        case "S":
          u = i[3], c = i[4], e.bezierCurveToShort(i[1], i[2], u, c);
          break;
        case "s":
          e.bezierCurveToShort(u + i[1], c + i[2], u + i[3], c + i[4]), u += i[3], c += i[4];
          break;
        case "Q":
          u = i[3], c = i[4], e.quadraticCurveTo(i[1], i[2], u, c);
          break;
        case "q":
          e.quadraticCurveTo(u + i[1], c + i[2], u + i[3], c + i[4]), u += i[3], c += i[4];
          break;
        case "T":
          u = i[1], c = i[2], e.quadraticCurveToShort(u, c);
          break;
        case "t":
          u += i[1], c += i[2], e.quadraticCurveToShort(u, c);
          break;
        case "A":
          u = i[6], c = i[7], e.arcToSvg(i[1], i[2], i[3], i[4], i[5], u, c);
          break;
        case "a":
          u += i[6], c += i[7], e.arcToSvg(i[1], i[2], i[3], i[4], i[5], u, c);
          break;
        case "Z":
        case "z":
          e.closePath(), h.length > 0 && ((o = h.pop()) ? (u = o.startX, c = o.startY) : (u = 0, c = 0)), o = null;
          break;
        default:
          (0, a.warn)(`Unknown SVG path command: ${r}`);
      }
      "Z" !== r && "z" !== r && null === o && (o = {
        startX: u,
        startY: c
      }, h.push(o));
    }
    return e;
  }], 380762);
  var l = t.i(539088);
  t.s(["Circle", 0, class t {
    constructor(t = 0, e = 0, i = 0) {
      this.type = "circle", this.x = t, this.y = e, this.radius = i;
    }
    clone() {
      return new t(this.x, this.y, this.radius);
    }
    contains(t, e) {
      if (this.radius <= 0) return !1;
      let i = this.radius * this.radius,
        r = this.x - t,
        s = this.y - e;
      return r *= r, s *= s, r + s <= i;
    }
    strokeContains(t, e, i, r = .5) {
      if (0 === this.radius) return !1;
      let s = this.x - t,
        n = this.y - e,
        a = this.radius,
        l = (1 - r) * i,
        h = Math.sqrt(s * s + n * n);
      return h <= a + l && h > a - (i - l);
    }
    getBounds(t) {
      return t || (t = new l.Rectangle()), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = 2 * this.radius, t.height = 2 * this.radius, t;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.radius = t.radius, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
    }
  }], 547416), t.s(["Ellipse", 0, class t {
    constructor(t = 0, e = 0, i = 0, r = 0) {
      this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = r;
    }
    clone() {
      return new t(this.x, this.y, this.halfWidth, this.halfHeight);
    }
    contains(t, e) {
      if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
      let i = (t - this.x) / this.halfWidth,
        r = (e - this.y) / this.halfHeight;
      return i *= i, r *= r, i + r <= 1;
    }
    strokeContains(t, e, i, r = .5) {
      let {
        halfWidth: s,
        halfHeight: n
      } = this;
      if (s <= 0 || n <= 0) return !1;
      let a = i * (1 - r),
        l = i - a,
        h = s - l,
        o = n - l,
        u = s + a,
        c = n + a,
        d = t - this.x,
        f = e - this.y;
      return d * d / (h * h) + f * f / (o * o) > 1 && d * d / (u * u) + f * f / (c * c) <= 1;
    }
    getBounds(t) {
      return t || (t = new l.Rectangle()), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = 2 * this.halfWidth, t.height = 2 * this.halfHeight, t;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
    }
  }], 547417);
  var h = t.i(727905);
  function o(t, e, i, r, s, n) {
    let a,
      l,
      h = s - i,
      o = n - r,
      u = h * h + o * o,
      c = -1;
    0 !== u && (c = ((t - i) * h + (e - r) * o) / u), c < 0 ? (a = i, l = r) : c > 1 ? (a = s, l = n) : (a = i + c * h, l = r + c * o);
    let d = t - a,
      f = e - l;
    return d * d + f * f;
  }
  t.s(["squaredDistanceToLineSegment", 0, o], 866836), t.s(["Polygon", 0, class t {
    constructor(...t) {
      this.type = "polygon";
      let e = Array.isArray(t[0]) ? t[0] : t;
      if ("number" != typeof e[0]) {
        const t = [];
        for (let i = 0, r = e.length; i < r; i++) t.push(e[i].x, e[i].y);
        e = t;
      }
      this.points = e, this.closePath = !0;
    }
    isClockwise() {
      let t = 0,
        e = this.points,
        i = e.length;
      for (let r = 0; r < i; r += 2) {
        let s = e[r],
          n = e[r + 1];
        t += (e[(r + 2) % i] - s) * (e[(r + 3) % i] + n);
      }
      return t < 0;
    }
    containsPolygon(t) {
      let r = this.getBounds(e),
        s = t.getBounds(i);
      if (!r.containsRect(s)) return !1;
      let n = t.points;
      for (let t = 0; t < n.length; t += 2) {
        let e = n[t],
          i = n[t + 1];
        if (!this.contains(e, i)) return !1;
      }
      return !0;
    }
    clone() {
      let e = new t(this.points.slice());
      return e.closePath = this.closePath, e;
    }
    contains(t, e) {
      let i = !1,
        r = this.points.length / 2;
      for (let s = 0, n = r - 1; s < r; n = s++) {
        let r = this.points[2 * s],
          a = this.points[2 * s + 1],
          l = this.points[2 * n],
          h = this.points[2 * n + 1];
        a > e != h > e && t < (e - a) / (h - a) * (l - r) + r && (i = !i);
      }
      return i;
    }
    strokeContains(t, e, i, r = .5) {
      let s = i * i,
        n = s * (1 - r),
        a = s - n,
        {
          points: l
        } = this,
        h = l.length - 2 * !this.closePath;
      for (let i = 0; i < h; i += 2) {
        let r = l[i],
          s = l[i + 1],
          h = l[(i + 2) % l.length],
          u = l[(i + 3) % l.length];
        if (o(t, e, r, s, h, u) <= (0 > Math.sign((h - r) * (e - s) - (u - s) * (t - r)) ? a : n)) return !0;
      }
      return !1;
    }
    getBounds(t) {
      t || (t = new l.Rectangle());
      let e = this.points,
        i = 1 / 0,
        r = -1 / 0,
        s = 1 / 0,
        n = -1 / 0;
      for (let t = 0, a = e.length; t < a; t += 2) {
        let a = e[t],
          l = e[t + 1];
        i = a < i ? a : i, r = a > r ? a : r, s = l < s ? l : s, n = l > n ? l : n;
      }
      return t.x = i, t.width = r - i, t.y = s, t.height = n - s, t;
    }
    copyFrom(t) {
      return this.points = t.points.slice(), this.closePath = t.closePath, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`;
    }
    get lastX() {
      return this.points[this.points.length - 2];
    }
    get lastY() {
      return this.points[this.points.length - 1];
    }
    get x() {
      return (0, h.deprecation)("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2];
    }
    get y() {
      return (0, h.deprecation)("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1];
    }
    get startX() {
      return this.points[0];
    }
    get startY() {
      return this.points[1];
    }
  }], 163062);
  let u = (t, e, i, r, s, n, a) => {
    let l = t - i,
      h = e - r,
      o = Math.sqrt(l * l + h * h);
    return o >= s - n && o <= s + a;
  };
  t.s(["RoundedRectangle", 0, class t {
    constructor(t = 0, e = 0, i = 0, r = 0, s = 20) {
      this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = r, this.radius = s;
    }
    getBounds(t) {
      return t || (t = new l.Rectangle()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
    }
    clone() {
      return new t(this.x, this.y, this.width, this.height, this.radius);
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    contains(t, e) {
      if (this.width <= 0 || this.height <= 0) return !1;
      if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
        let i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i) return !0;
        let r = t - (this.x + i),
          s = e - (this.y + i),
          n = i * i;
        if (r * r + s * s <= n || (r = t - (this.x + this.width - i)) * r + s * s <= n || r * r + (s = e - (this.y + this.height - i)) * s <= n || (r = t - (this.x + i)) * r + s * s <= n) return !0;
      }
      return !1;
    }
    strokeContains(t, e, i, r = .5) {
      let {
          x: s,
          y: n,
          width: a,
          height: l,
          radius: h
        } = this,
        o = i * (1 - r),
        c = i - o,
        d = s + h,
        f = n + h,
        p = a - 2 * h,
        x = l - 2 * h,
        y = s + a,
        g = n + l;
      return (t >= s - o && t <= s + c || t >= y - c && t <= y + o) && e >= f && e <= f + x || (e >= n - o && e <= n + c || e >= g - c && e <= g + o) && t >= d && t <= d + p || t < d && e < f && u(t, e, d, f, h, c, o) || t > y - h && e < f && u(t, e, y - h, f, h, c, o) || t > y - h && e > g - h && u(t, e, y - h, g - h, h, c, o) || t < d && e > g - h && u(t, e, d, g - h, h, c, o);
    }
    toString() {
      return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
    }
  }], 140427);
};
