// Recovered from 25drgquolhhel.js. Runtime module IDs: 389474, 42515, 37554.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = 2 * Math.PI,
    i = 180 / Math.PI,
    s = Math.PI / 180;
  t.s(["DEG_TO_RAD", 0, s, "PI_2", 0, e, "RAD_TO_DEG", 0, i], 42515);
  class r {
    constructor(t = 0, e = 0) {
      this.x = 0, this.y = 0, this.x = t, this.y = e;
    }
    clone() {
      return new r(this.x, this.y);
    }
    copyFrom(t) {
      return this.set(t.x, t.y), this;
    }
    copyTo(t) {
      return t.set(this.x, this.y), t;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    set(t = 0, e = t) {
      return this.x = t, this.y = e, this;
    }
    toString() {
      return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
    }
    static get shared() {
      return n.x = 0, n.y = 0, n;
    }
  }
  let n = new r();
  t.s(["Point", 0, r], 37554);
  class a {
    constructor(t = 1, e = 0, i = 0, s = 1, r = 0, n = 0) {
      this.array = null, this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = n;
    }
    fromArray(t) {
      this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
    }
    set(t, e, i, s, r, n) {
      return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = n, this;
    }
    toArray(t, e) {
      this.array || (this.array = new Float32Array(9));
      let i = e || this.array;
      return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0), i[8] = 1, i;
    }
    apply(t, e) {
      e = e || new r();
      let i = t.x,
        s = t.y;
      return e.x = this.a * i + this.c * s + this.tx, e.y = this.b * i + this.d * s + this.ty, e;
    }
    applyInverse(t, e) {
      e = e || new r();
      let i = this.a,
        s = this.b,
        n = this.c,
        a = this.d,
        h = this.tx,
        o = this.ty,
        u = 1 / (i * a + -(n * s)),
        l = t.x,
        d = t.y;
      return e.x = a * u * l + -n * u * d + (o * n - h * a) * u, e.y = i * u * d + -s * u * l + (-o * i + h * s) * u, e;
    }
    translate(t, e) {
      return this.tx += t, this.ty += e, this;
    }
    scale(t, e) {
      return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
    }
    rotate(t) {
      let e = Math.cos(t),
        i = Math.sin(t),
        s = this.a,
        r = this.c,
        n = this.tx;
      return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = r * e - this.d * i, this.d = r * i + this.d * e, this.tx = n * e - this.ty * i, this.ty = n * i + this.ty * e, this;
    }
    append(t) {
      let e = this.a,
        i = this.b,
        s = this.c,
        r = this.d;
      return this.a = t.a * e + t.b * s, this.b = t.a * i + t.b * r, this.c = t.c * e + t.d * s, this.d = t.c * i + t.d * r, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * i + t.ty * r + this.ty, this;
    }
    appendFrom(t, e) {
      let i = t.a,
        s = t.b,
        r = t.c,
        n = t.d,
        a = t.tx,
        h = t.ty,
        o = e.a,
        u = e.b,
        l = e.c,
        d = e.d;
      return this.a = i * o + s * l, this.b = i * u + s * d, this.c = r * o + n * l, this.d = r * u + n * d, this.tx = a * o + h * l + e.tx, this.ty = a * u + h * d + e.ty, this;
    }
    setTransform(t, e, i, s, r, n, a, h, o) {
      return this.a = Math.cos(a + o) * r, this.b = Math.sin(a + o) * r, this.c = -Math.sin(a - h) * n, this.d = Math.cos(a - h) * n, this.tx = t - (i * this.a + s * this.c), this.ty = e - (i * this.b + s * this.d), this;
    }
    prepend(t) {
      let e = this.tx;
      if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
        let e = this.a,
          i = this.c;
        this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d;
      }
      return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
    }
    decompose(t) {
      let i = this.a,
        s = this.b,
        r = this.c,
        n = this.d,
        a = t.pivot,
        h = -Math.atan2(-r, n),
        o = Math.atan2(s, i),
        u = Math.abs(h + o);
      return u < 1e-5 || 1e-5 > Math.abs(e - u) ? (t.rotation = o, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = h, t.skew.y = o), t.scale.x = Math.sqrt(i * i + s * s), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (a.x * i + a.y * r), t.position.y = this.ty + (a.x * s + a.y * n), t;
    }
    invert() {
      let t = this.a,
        e = this.b,
        i = this.c,
        s = this.d,
        r = this.tx,
        n = t * s - e * i;
      return this.a = s / n, this.b = -e / n, this.c = -i / n, this.d = t / n, this.tx = (i * this.ty - s * r) / n, this.ty = -(t * this.ty - e * r) / n, this;
    }
    isIdentity() {
      return 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d && 0 === this.tx && 0 === this.ty;
    }
    identity() {
      return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
    }
    clone() {
      let t = new a();
      return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
    }
    copyTo(t) {
      return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
    }
    copyFrom(t) {
      return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
    }
    equals(t) {
      return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
    }
    toString() {
      return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
    }
    static get IDENTITY() {
      return o.identity();
    }
    static get shared() {
      return h.identity();
    }
  }
  let h = new a(),
    o = new a();
  t.s(["Matrix", 0, a], 389474);
};
