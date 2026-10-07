// Recovered from 25drgquolhhel.js. Runtime module IDs: 453549.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(389474),
    i = t.i(539088);
  let s = new e.Matrix();
  t.s(["Bounds", 0, class t {
    constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, r = -1 / 0) {
      this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = s, this.minX = t, this.minY = e, this.maxX = i, this.maxY = r;
    }
    isEmpty() {
      return this.minX > this.maxX || this.minY > this.maxY;
    }
    get rectangle() {
      this._rectangle || (this._rectangle = new i.Rectangle());
      let t = this._rectangle;
      return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t;
    }
    clear() {
      return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = s, this;
    }
    set(t, e, i, s) {
      this.minX = t, this.minY = e, this.maxX = i, this.maxY = s;
    }
    addFrame(t, e, i, s, r) {
      r || (r = this.matrix);
      let n = r.a,
        a = r.b,
        h = r.c,
        o = r.d,
        u = r.tx,
        l = r.ty,
        d = this.minX,
        c = this.minY,
        f = this.maxX,
        m = this.maxY,
        p = n * t + h * e + u,
        g = a * t + o * e + l;
      p < d && (d = p), g < c && (c = g), p > f && (f = p), g > m && (m = g), p = n * i + h * e + u, g = a * i + o * e + l, p < d && (d = p), g < c && (c = g), p > f && (f = p), g > m && (m = g), p = n * t + h * s + u, g = a * t + o * s + l, p < d && (d = p), g < c && (c = g), p > f && (f = p), g > m && (m = g), p = n * i + h * s + u, g = a * i + o * s + l, p < d && (d = p), g < c && (c = g), p > f && (f = p), g > m && (m = g), this.minX = d, this.minY = c, this.maxX = f, this.maxY = m;
    }
    addRect(t, e) {
      this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
    }
    addBounds(t, e) {
      this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
    }
    addBoundsMask(t) {
      this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
    }
    applyMatrix(t) {
      let e = this.minX,
        i = this.minY,
        s = this.maxX,
        r = this.maxY,
        {
          a: n,
          b: a,
          c: h,
          d: o,
          tx: u,
          ty: l
        } = t,
        d = n * e + h * i + u,
        c = a * e + o * i + l;
      this.minX = d, this.minY = c, this.maxX = d, this.maxY = c, d = n * s + h * i + u, c = a * s + o * i + l, this.minX = d < this.minX ? d : this.minX, this.minY = c < this.minY ? c : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = c > this.maxY ? c : this.maxY, d = n * e + h * r + u, c = a * e + o * r + l, this.minX = d < this.minX ? d : this.minX, this.minY = c < this.minY ? c : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = c > this.maxY ? c : this.maxY, d = n * s + h * r + u, c = a * s + o * r + l, this.minX = d < this.minX ? d : this.minX, this.minY = c < this.minY ? c : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = c > this.maxY ? c : this.maxY;
    }
    fit(t) {
      return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this;
    }
    fitBounds(t, e, i, s) {
      return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > s && (this.maxY = s), this;
    }
    pad(t, e = t) {
      return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this;
    }
    ceil() {
      return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this;
    }
    clone() {
      return new t(this.minX, this.minY, this.maxX, this.maxY);
    }
    scale(t, e = t) {
      return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this;
    }
    get x() {
      return this.minX;
    }
    set x(t) {
      let e = this.maxX - this.minX;
      this.minX = t, this.maxX = t + e;
    }
    get y() {
      return this.minY;
    }
    set y(t) {
      let e = this.maxY - this.minY;
      this.minY = t, this.maxY = t + e;
    }
    get width() {
      return this.maxX - this.minX;
    }
    set width(t) {
      this.maxX = this.minX + t;
    }
    get height() {
      return this.maxY - this.minY;
    }
    set height(t) {
      this.maxY = this.minY + t;
    }
    get left() {
      return this.minX;
    }
    get right() {
      return this.maxX;
    }
    get top() {
      return this.minY;
    }
    get bottom() {
      return this.maxY;
    }
    get isPositive() {
      return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
    }
    get isValid() {
      return this.minX + this.minY !== 1 / 0;
    }
    addVertexData(t, e, i, s) {
      let r = this.minX,
        n = this.minY,
        a = this.maxX,
        h = this.maxY;
      s || (s = this.matrix);
      let o = s.a,
        u = s.b,
        l = s.c,
        d = s.d,
        c = s.tx,
        f = s.ty;
      for (let s = e; s < i; s += 2) {
        let e = t[s],
          i = t[s + 1],
          m = o * e + l * i + c,
          p = u * e + d * i + f;
        r = m < r ? m : r, n = p < n ? p : n, a = m > a ? m : a, h = p > h ? p : h;
      }
      this.minX = r, this.minY = n, this.maxX = a, this.maxY = h;
    }
    containsPoint(t, e) {
      return !!(this.minX <= t) && !!(this.minY <= e) && !!(this.maxX >= t) && !!(this.maxY >= e);
    }
    toString() {
      return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
    }
    copyFrom(t) {
      return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this;
    }
  }]);
};
