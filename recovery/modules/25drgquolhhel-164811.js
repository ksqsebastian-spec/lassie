// Recovered from 25drgquolhhel.js. Runtime module IDs: 164811.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(389474);
  let i = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    s = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    r = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    n = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    a = [],
    h = [],
    o = Math.sign;
  !function () {
    for (let t = 0; t < 16; t++) {
      let e = [];
      a.push(e);
      for (let a = 0; a < 16; a++) {
        let h = o(i[t] * i[a] + r[t] * s[a]),
          u = o(s[t] * i[a] + n[t] * s[a]),
          l = o(i[t] * r[a] + r[t] * n[a]),
          d = o(s[t] * r[a] + n[t] * n[a]);
        for (let t = 0; t < 16; t++) if (i[t] === h && s[t] === u && r[t] === l && n[t] === d) {
          e.push(t);
          break;
        }
      }
    }
    for (let t = 0; t < 16; t++) {
      let a = new e.Matrix();
      a.set(i[t], s[t], r[t], n[t], 0, 0), h.push(a);
    }
  }();
  let u = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: t => i[t],
    uY: t => s[t],
    vX: t => r[t],
    vY: t => n[t],
    inv: t => 8 & t ? 15 & t : 7 & -t,
    add: (t, e) => a[t][e],
    sub: (t, e) => a[t][u.inv(e)],
    rotate180: t => 4 ^ t,
    isVertical: t => (3 & t) == 2,
    byDirection: (t, e) => 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? u.S : u.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? u.E : u.W : e > 0 ? t > 0 ? u.SE : u.SW : t > 0 ? u.NE : u.NW,
    matrixAppendRotationInv: (t, e, i = 0, s = 0, r = 0, n = 0) => {
      let a = h[u.inv(e)],
        o = a.a,
        l = a.b,
        d = a.c,
        c = a.d,
        f = i - Math.min(0, o * r, d * n, o * r + d * n),
        m = s - Math.min(0, l * r, c * n, l * r + c * n),
        p = t.a,
        g = t.b,
        y = t.c,
        x = t.d;
      t.a = o * p + l * y, t.b = o * g + l * x, t.c = d * p + c * y, t.d = d * g + c * x, t.tx = f * p + m * y + t.tx, t.ty = f * g + m * x + t.ty;
    },
    transformRectCoords: (t, e, i, s) => {
      let {
          x: r,
          y: n,
          width: a,
          height: h
        } = t,
        {
          x: o,
          y: l,
          width: d,
          height: c
        } = e;
      return i === u.E ? (s.set(r + o, n + l, a, h), s) : i === u.S ? s.set(d - n - h + o, r + l, h, a) : i === u.W ? s.set(d - r - a + o, c - n - h + l, a, h) : i === u.N ? s.set(n + o, c - r - a + l, h, a) : s.set(r + o, n + l, a, h);
    }
  };
  t.s(["groupD8", 0, u]);
};
