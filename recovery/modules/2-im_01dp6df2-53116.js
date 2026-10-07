// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 53116, 456659, 752046, 912667, 816359, 769047.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(455660);
  t.s(["buildPixelLine", 0, function (t, i, r, s) {
    let n = e.closePointEps;
    if (0 === t.length) return;
    let a = t[0],
      l = t[1],
      h = t[t.length - 2],
      o = t[t.length - 1],
      u = i || Math.abs(a - h) < n && Math.abs(l - o) < n,
      c = t.length / 2,
      d = r.length / 2;
    for (let e = 0; e < c; e++) r.push(t[2 * e]), r.push(t[2 * e + 1]);
    for (let t = 0; t < c - 1; t++) s.push(d + t, d + t + 1);
    u && s.push(d + c - 1, d);
  }], 53116);
  var i = t.i(78278);
  function r(t, e, i = 2) {
    let f,
      p,
      g,
      b = e && e.length,
      _ = b ? e[0] * i : t.length,
      P = s(t, 0, _, i, !0),
      v = [];
    if (!P || P.next === P.prev) return v;
    if (b && (P = function (t, e, i, r) {
      let l = [];
      for (let i = 0, n = e.length; i < n; i++) {
        let a = e[i] * r,
          h = i < n - 1 ? e[i + 1] * r : t.length,
          o = s(t, a, h, r, !1);
        o === o.next && (o.steiner = !0), l.push(function (t) {
          let e = t,
            i = t;
          do (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next; while (e !== t);
          return i;
        }(o));
      }
      l.sort(a);
      for (let t = 0; t < l.length; t++) i = function (t, e) {
        let i = function (t, e) {
          let i,
            r = e,
            s = t.x,
            n = t.y,
            a = -1 / 0;
          if (c(t, r)) return r;
          do {
            if (c(t, r.next)) return r.next;
            if (n <= r.y && n >= r.next.y && r.next.y !== r.y) {
              let t = r.x + (n - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
              if (t <= s && t > a && (a = t, i = r.x < r.next.x ? r : r.next, t === s)) return i;
            }
            r = r.next;
          } while (r !== e);
          if (!i) return null;
          let l = i,
            o = i.x,
            d = i.y,
            f = 1 / 0;
          r = i;
          do {
            if (s >= r.x && r.x >= o && s !== r.x && h(n < d ? s : a, n, o, d, n < d ? a : s, n, r.x, r.y)) {
              var p, y;
              let e = Math.abs(n - r.y) / (s - r.x);
              x(r, t) && (e < f || e === f && (r.x > i.x || r.x === i.x && (p = i, y = r, 0 > u(p.prev, p, y.prev) && 0 > u(y.next, p, p.next)))) && (i = r, f = e);
            }
            r = r.next;
          } while (r !== l);
          return i;
        }(t, e);
        if (!i) return e;
        let r = y(i, t);
        return n(r, r.next), n(i, i.next);
      }(l[t], i);
      return i;
    }(t, e, P, i)), t.length > 80 * i) {
      f = t[0], p = t[1];
      let e = f,
        r = p;
      for (let s = i; s < _; s += i) {
        let i = t[s],
          n = t[s + 1];
        i < f && (f = i), n < p && (p = n), i > e && (e = i), n > r && (r = n);
      }
      g = 0 !== (g = Math.max(e - f, r - p)) ? 32767 / g : 0;
    }
    return function t(e, i, r, s, a, h, f) {
      if (!e) return;
      !f && h && function (t, e, i, r) {
        let s = t;
        do 0 === s.z && (s.z = l(s.x, s.y, e, i, r)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next; while (s !== t);
        s.prevZ.nextZ = null, s.prevZ = null, function (t) {
          let e,
            i = 1;
          do {
            let r,
              s = t;
            t = null;
            let n = null;
            for (e = 0; s;) {
              e++;
              let a = s,
                l = 0;
              for (let t = 0; t < i && (l++, a = a.nextZ); t++);
              let h = i;
              for (; l > 0 || h > 0 && a;) 0 !== l && (0 === h || !a || s.z <= a.z) ? (r = s, s = s.nextZ, l--) : (r = a, a = a.nextZ, h--), n ? n.nextZ = r : t = r, r.prevZ = n, n = r;
              s = a;
            }
            n.nextZ = null, i *= 2;
          } while (e > 1);
        }(s);
      }(e, s, a, h);
      let p = e;
      for (; e.prev !== e.next;) {
        let g = e.prev,
          b = e.next;
        if (h ? function (t, e, i, r) {
          let s = t.prev,
            n = t.next;
          if (u(s, t, n) >= 0) return !1;
          let a = s.x,
            h = t.x,
            c = n.x,
            d = s.y,
            f = t.y,
            p = n.y,
            x = Math.min(a, h, c),
            y = Math.min(d, f, p),
            g = Math.max(a, h, c),
            m = Math.max(d, f, p),
            b = l(x, y, e, i, r),
            _ = l(g, m, e, i, r),
            P = t.prevZ,
            v = t.nextZ;
          for (; P && P.z >= b && v && v.z <= _;) {
            if (P.x >= x && P.x <= g && P.y >= y && P.y <= m && P !== s && P !== n && o(a, d, h, f, c, p, P.x, P.y) && u(P.prev, P, P.next) >= 0 || (P = P.prevZ, v.x >= x && v.x <= g && v.y >= y && v.y <= m && v !== s && v !== n && o(a, d, h, f, c, p, v.x, v.y) && u(v.prev, v, v.next) >= 0)) return !1;
            v = v.nextZ;
          }
          for (; P && P.z >= b;) {
            if (P.x >= x && P.x <= g && P.y >= y && P.y <= m && P !== s && P !== n && o(a, d, h, f, c, p, P.x, P.y) && u(P.prev, P, P.next) >= 0) return !1;
            P = P.prevZ;
          }
          for (; v && v.z <= _;) {
            if (v.x >= x && v.x <= g && v.y >= y && v.y <= m && v !== s && v !== n && o(a, d, h, f, c, p, v.x, v.y) && u(v.prev, v, v.next) >= 0) return !1;
            v = v.nextZ;
          }
          return !0;
        }(e, s, a, h) : function (t) {
          let e = t.prev,
            i = t.next;
          if (u(e, t, i) >= 0) return !1;
          let r = e.x,
            s = t.x,
            n = i.x,
            a = e.y,
            l = t.y,
            h = i.y,
            c = Math.min(r, s, n),
            d = Math.min(a, l, h),
            f = Math.max(r, s, n),
            p = Math.max(a, l, h),
            x = i.next;
          for (; x !== e;) {
            if (x.x >= c && x.x <= f && x.y >= d && x.y <= p && o(r, a, s, l, n, h, x.x, x.y) && u(x.prev, x, x.next) >= 0) return !1;
            x = x.next;
          }
          return !0;
        }(e)) {
          i.push(g.i, e.i, b.i), m(e), e = b.next, p = b.next;
          continue;
        }
        if ((e = b) === p) {
          f ? 1 === f ? t(e = function (t, e) {
            let i = t;
            do {
              let r = i.prev,
                s = i.next.next;
              !c(r, s) && d(r, i, i.next, s) && x(r, s) && x(s, r) && (e.push(r.i, i.i, s.i), m(i), m(i.next), i = t = s), i = i.next;
            } while (i !== t);
            return n(i);
          }(n(e), i), i, r, s, a, h, 2) : 2 === f && function (e, i, r, s, a, l) {
            let h = e;
            do {
              let e = h.next.next;
              for (; e !== h.prev;) {
                var o, f;
                if (h.i !== e.i && (o = h, f = e, o.next.i !== f.i && o.prev.i !== f.i && !function (t, e) {
                  let i = t;
                  do {
                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && d(i, i.next, t, e)) return !0;
                    i = i.next;
                  } while (i !== t);
                  return !1;
                }(o, f) && (x(o, f) && x(f, o) && function (t, e) {
                  let i = t,
                    r = !1,
                    s = (t.x + e.x) / 2,
                    n = (t.y + e.y) / 2;
                  do i.y > n != i.next.y > n && i.next.y !== i.y && s < (i.next.x - i.x) * (n - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next; while (i !== t);
                  return r;
                }(o, f) && (u(o.prev, o, f.prev) || u(o, f.prev, f)) || c(o, f) && u(o.prev, o, o.next) > 0 && u(f.prev, f, f.next) > 0))) {
                  let o = y(h, e);
                  h = n(h, h.next), o = n(o, o.next), t(h, i, r, s, a, l, 0), t(o, i, r, s, a, l, 0);
                  return;
                }
                e = e.next;
              }
              h = h.next;
            } while (h !== e);
          }(e, i, r, s, a, h) : t(n(e), i, r, s, a, h, 1);
          break;
        }
      }
    }(P, v, i, f, p, g, 0), v;
  }
  function s(t, e, i, r, s) {
    let n;
    if (s === function (t, e, i, r) {
      let s = 0;
      for (let n = e, a = i - r; n < i; n += r) s += (t[a] - t[n]) * (t[n + 1] + t[a + 1]), a = n;
      return s;
    }(t, e, i, r) > 0) for (let s = e; s < i; s += r) n = g(s / r | 0, t[s], t[s + 1], n);else for (let s = i - r; s >= e; s -= r) n = g(s / r | 0, t[s], t[s + 1], n);
    return n && c(n, n.next) && (m(n), n = n.next), n;
  }
  function n(t, e) {
    if (!t) return t;
    e || (e = t);
    let i = t,
      r;
    do if (r = !1, !i.steiner && (c(i, i.next) || 0 === u(i.prev, i, i.next))) {
      if (m(i), (i = e = i.prev) === i.next) break;
      r = !0;
    } else i = i.next; while (r || i !== e);
    return e;
  }
  function a(t, e) {
    let i = t.x - e.x;
    return 0 === i && 0 == (i = t.y - e.y) && (i = (t.next.y - t.y) / (t.next.x - t.x) - (e.next.y - e.y) / (e.next.x - e.x)), i;
  }
  function l(t, e, i, r, s) {
    return (t = ((t = ((t = ((t = ((t = (t - i) * s | 0) | t << 8) & 0xff00ff) | t << 4) & 0xf0f0f0f) | t << 2) & 0x33333333) | t << 1) & 0x55555555) | (e = ((e = ((e = ((e = ((e = (e - r) * s | 0) | e << 8) & 0xff00ff) | e << 4) & 0xf0f0f0f) | e << 2) & 0x33333333) | e << 1) & 0x55555555) << 1;
  }
  function h(t, e, i, r, s, n, a, l) {
    return (s - a) * (e - l) >= (t - a) * (n - l) && (t - a) * (r - l) >= (i - a) * (e - l) && (i - a) * (n - l) >= (s - a) * (r - l);
  }
  function o(t, e, i, r, s, n, a, l) {
    return (t !== a || e !== l) && h(t, e, i, r, s, n, a, l);
  }
  function u(t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
  }
  function c(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  function d(t, e, i, r) {
    let s = p(u(t, e, i)),
      n = p(u(t, e, r)),
      a = p(u(i, r, t)),
      l = p(u(i, r, e));
    return !!(s !== n && a !== l || 0 === s && f(t, i, e) || 0 === n && f(t, r, e) || 0 === a && f(i, t, r) || 0 === l && f(i, e, r));
  }
  function f(t, e, i) {
    return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y);
  }
  function p(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }
  function x(t, e) {
    return 0 > u(t.prev, t, t.next) ? u(t, e, t.next) >= 0 && u(t, t.prev, e) >= 0 : 0 > u(t, e, t.prev) || 0 > u(t, t.next, e);
  }
  function y(t, e) {
    let i = b(t.i, t.x, t.y),
      r = b(e.i, e.x, e.y),
      s = t.next,
      n = e.prev;
    return t.next = e, e.prev = t, i.next = s, s.prev = i, r.next = i, i.prev = r, n.next = r, r.prev = n, r;
  }
  function g(t, e, i, r) {
    let s = b(t, e, i);
    return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s;
  }
  function m(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }
  function b(t, e, i) {
    return {
      i: t,
      x: e,
      y: i,
      prev: null,
      next: null,
      z: 0,
      prevZ: null,
      nextZ: null,
      steiner: !1
    };
  }
  t.i(263524);
  let _ = r.default || r;
  function P(t, e, i, r, s, n, a) {
    let l = _(t, e, 2);
    if (!l) return;
    for (let t = 0; t < l.length; t += 3) n[a++] = l[t] + s, n[a++] = l[t + 1] + s, n[a++] = l[t + 2] + s;
    let h = s * r;
    for (let e = 0; e < t.length; e += 2) i[h] = t[e], i[h + 1] = t[e + 1], h += r;
  }
  t.s(["earcut", 0, _], 456659), t.s(["triangulateWithHoles", 0, P], 752046);
  let v = [],
    S = {
      extension: {
        type: i.ExtensionType.ShapeBuilder,
        name: "polygon"
      },
      build(t, e) {
        for (let i = 0; i < t.points.length; i++) e[i] = t.points[i];
        return !0;
      },
      triangulate(t, e, i, r, s, n) {
        P(t, v, e, i, r, s, n);
      }
    };
  t.s(["buildPolygon", 0, S], 912667);
  let M = {
    extension: {
      type: i.ExtensionType.ShapeBuilder,
      name: "rectangle"
    },
    build(t, e) {
      let i = t.x,
        r = t.y,
        s = t.width,
        n = t.height;
      return !!(s > 0 && n > 0) && (e[0] = i, e[1] = r, e[2] = i + s, e[3] = r, e[4] = i + s, e[5] = r + n, e[6] = i, e[7] = r + n, !0);
    },
    triangulate(t, e, i, r, s, n) {
      let a = 0;
      e[(r *= i) + a] = t[0], e[r + a + 1] = t[1], a += i, e[r + a] = t[2], e[r + a + 1] = t[3], a += i, e[r + a] = t[6], e[r + a + 1] = t[7], a += i, e[r + a] = t[4], e[r + a + 1] = t[5], a += i;
      let l = r / i;
      s[n++] = l, s[n++] = l + 1, s[n++] = l + 2, s[n++] = l + 1, s[n++] = l + 3, s[n++] = l + 2;
    }
  };
  t.s(["buildRectangle", 0, M], 816359);
  let k = {
    extension: {
      type: i.ExtensionType.ShapeBuilder,
      name: "triangle"
    },
    build: (t, e) => (e[0] = t.x, e[1] = t.y, e[2] = t.x2, e[3] = t.y2, e[4] = t.x3, e[5] = t.y3, !0),
    triangulate(t, e, i, r, s, n) {
      let a = 0;
      e[(r *= i) + a] = t[0], e[r + a + 1] = t[1], a += i, e[r + a] = t[2], e[r + a + 1] = t[3], a += i, e[r + a] = t[4], e[r + a + 1] = t[5];
      let l = r / i;
      s[n++] = l, s[n++] = l + 1, s[n++] = l + 2;
    }
  };
  t.s(["buildTriangle", 0, k], 769047);
};
