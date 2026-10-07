// Recovered from 25drgquolhhel.js. Runtime module IDs: 539088.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(37554);
  let i = [new e.Point(), new e.Point(), new e.Point(), new e.Point()];
  t.s(["Rectangle", 0, class t {
    constructor(t = 0, e = 0, i = 0, s = 0) {
      this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(s);
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
    isEmpty() {
      return this.left === this.right || this.top === this.bottom;
    }
    static get EMPTY() {
      return new t(0, 0, 0, 0);
    }
    clone() {
      return new t(this.x, this.y, this.width, this.height);
    }
    copyFromBounds(t) {
      return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    contains(t, e) {
      return !(this.width <= 0) && !(this.height <= 0) && !!(t >= this.x) && !!(t < this.x + this.width) && !!(e >= this.y) && !!(e < this.y + this.height);
    }
    strokeContains(t, e, i, s = .5) {
      let {
        width: r,
        height: n
      } = this;
      if (r <= 0 || n <= 0) return !1;
      let a = this.x,
        h = this.y,
        o = i * (1 - s),
        u = i - o;
      return t >= a - o && t <= a + r + o && e >= h - o && e <= h + n + o && !(t > a + u && t < a + r - u && e > h + u && e < h + n - u);
    }
    intersects(t, e) {
      if (!e) {
        let e = this.x < t.x ? t.x : this.x;
        if ((this.right > t.right ? t.right : this.right) <= e) return !1;
        let i = this.y < t.y ? t.y : this.y;
        return (this.bottom > t.bottom ? t.bottom : this.bottom) > i;
      }
      let s = this.left,
        r = this.right,
        n = this.top,
        a = this.bottom;
      if (r <= s || a <= n) return !1;
      let h = i[0].set(t.left, t.top),
        o = i[1].set(t.left, t.bottom),
        u = i[2].set(t.right, t.top),
        l = i[3].set(t.right, t.bottom);
      if (u.x <= h.x || o.y <= h.y) return !1;
      let d = Math.sign(e.a * e.d - e.b * e.c);
      if (0 === d || (e.apply(h, h), e.apply(o, o), e.apply(u, u), e.apply(l, l), Math.max(h.x, o.x, u.x, l.x) <= s || Math.min(h.x, o.x, u.x, l.x) >= r || Math.max(h.y, o.y, u.y, l.y) <= n || Math.min(h.y, o.y, u.y, l.y) >= a)) return !1;
      let c = d * (o.y - h.y),
        f = d * (h.x - o.x),
        m = c * s + f * n,
        p = c * r + f * n,
        g = c * s + f * a,
        y = c * r + f * a;
      if (Math.max(m, p, g, y) <= c * h.x + f * h.y || Math.min(m, p, g, y) >= c * l.x + f * l.y) return !1;
      let x = d * (h.y - u.y),
        b = d * (u.x - h.x),
        _ = x * s + b * n,
        v = x * r + b * n,
        w = x * s + b * a,
        M = x * r + b * a;
      return !(Math.max(_, v, w, M) <= x * h.x + b * h.y || Math.min(_, v, w, M) >= x * l.x + b * l.y);
    }
    pad(t = 0, e = t) {
      return this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this;
    }
    fit(t) {
      let e = Math.max(this.x, t.x),
        i = Math.min(this.x + this.width, t.x + t.width),
        s = Math.max(this.y, t.y),
        r = Math.min(this.y + this.height, t.y + t.height);
      return this.x = e, this.width = Math.max(i - e, 0), this.y = s, this.height = Math.max(r - s, 0), this;
    }
    ceil(t = 1, e = .001) {
      let i = Math.ceil((this.x + this.width - e) * t) / t,
        s = Math.ceil((this.y + this.height - e) * t) / t;
      return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = s - this.y, this;
    }
    scale(t, e = t) {
      return this.x *= t, this.y *= e, this.width *= t, this.height *= e, this;
    }
    enlarge(t) {
      let e = Math.min(this.x, t.x),
        i = Math.max(this.x + this.width, t.x + t.width),
        s = Math.min(this.y, t.y),
        r = Math.max(this.y + this.height, t.y + t.height);
      return this.x = e, this.width = i - e, this.y = s, this.height = r - s, this;
    }
    getBounds(e) {
      return e || (e = new t()), e.copyFrom(this), e;
    }
    containsRect(t) {
      if (this.width <= 0 || this.height <= 0) return !1;
      let e = t.x,
        i = t.y,
        s = t.x + t.width,
        r = t.y + t.height;
      return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && s >= this.x && s < this.x + this.width && r >= this.y && r < this.y + this.height;
    }
    set(t, e, i, s) {
      return this.x = t, this.y = e, this.width = i, this.height = s, this;
    }
    toString() {
      return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    }
  }]);
};
