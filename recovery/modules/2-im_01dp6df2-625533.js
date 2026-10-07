// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 625533, 455660, 728207.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(37554);
  function i(t) {
    let e = t.length;
    if (e < 6) return 1;
    let i = 0;
    for (let r = 0, s = t[e - 2], n = t[e - 1]; r < e; r += 2) {
      let e = t[r],
        a = t[r + 1];
      i += (e - s) * (a + n), s = e, n = a;
    }
    return i < 0 ? -1 : 1;
  }
  function r(t, e, i, r, s, n, a, l) {
    let h, o;
    a ? (h = r, o = -i) : (h = -r, o = i);
    let u = t - i * s + h,
      c = e - r * s + o,
      d = t + i * n + h,
      f = e + r * n + o;
    return l.push(u, c), l.push(d, f), 2;
  }
  function s(t, e, i, r, s, n, a, l) {
    let h = i - t,
      o = r - e,
      u = Math.atan2(h, o),
      c = Math.atan2(s - t, n - e);
    l && u < c ? u += 2 * Math.PI : !l && u > c && (c += 2 * Math.PI);
    let d = u,
      f = c - u,
      p = Math.sqrt(h * h + o * o),
      x = (15 * Math.abs(f) * Math.sqrt(p) / Math.PI | 0) + 1,
      y = f / x;
    if (d += y, l) {
      a.push(t, e), a.push(i, r);
      for (let i = 1, r = d; i < x; i++, r += y) a.push(t, e), a.push(t + Math.sin(r) * p, e + Math.cos(r) * p);
      a.push(t, e), a.push(s, n);
    } else {
      a.push(i, r), a.push(t, e);
      for (let i = 1, r = d; i < x; i++, r += y) a.push(t + Math.sin(r) * p, e + Math.cos(r) * p), a.push(t, e);
      a.push(s, n), a.push(t, e);
    }
    return 2 * x;
  }
  t.s(["closePointEps", 0, 1e-4, "curveEps", 0, 1e-4], 455660), t.s(["getOrientationOfPoints", 0, i], 728207), t.s(["buildLine", 0, function (t, n, a, l, h, o) {
    if (0 === t.length) return;
    let u = n.alignment;
    if (.5 !== n.alignment) {
      let e = i(t);
      a && (e *= -1), u = (u - .5) * e + .5;
    }
    let c = new e.Point(t[0], t[1]),
      d = new e.Point(t[t.length - 2], t[t.length - 1]),
      f = 1e-4 > Math.abs(c.x - d.x) && 1e-4 > Math.abs(c.y - d.y);
    if (l) {
      t = t.slice(), f && (t.pop(), t.pop(), d.set(t[t.length - 2], t[t.length - 1]));
      let e = (c.x + d.x) * .5,
        i = (d.y + c.y) * .5;
      t.unshift(e, i), t.push(e, i);
    }
    let p = t.length / 2,
      x = t.length,
      y = h.length / 2,
      g = n.width / 2,
      m = g * g,
      b = n.miterLimit * n.miterLimit,
      _ = t[0],
      P = t[1],
      v = t[2],
      S = t[3],
      M = 0,
      k = 0,
      w = -(P - S),
      T = _ - v,
      C = 0,
      R = 0,
      z = Math.sqrt(w * w + T * T);
    w /= z, T /= z, w *= g, T *= g;
    let B = u,
      D = (1 - B) * 2,
      G = 2 * B;
    l || ("round" === n.cap ? x += s(_ - w * (D - G) * .5, P - T * (D - G) * .5, _ - w * D, P - T * D, _ + w * G, P + T * G, h, !0) + 2 : "square" === n.cap && (x += r(_, P, w, T, D, G, !0, h))), h.push(_ - w * D, P - T * D), h.push(_ + w * G, P + T * G);
    for (let e = 1; e < p - 1; ++e) {
      _ = t[(e - 1) * 2], P = t[(e - 1) * 2 + 1], v = t[2 * e], S = t[2 * e + 1], M = t[(e + 1) * 2], k = t[(e + 1) * 2 + 1], z = Math.sqrt((w = -(P - S)) * w + (T = _ - v) * T), w /= z, T /= z, w *= g, T *= g, z = Math.sqrt((C = -(S - k)) * C + (R = v - M) * R), C /= z, R /= z, C *= g, R *= g;
      let i = v - _,
        r = P - S,
        a = v - M,
        l = k - S,
        o = i * a + r * l,
        u = r * a - l * i,
        c = u < 0;
      if (Math.abs(u) < .001 * Math.abs(o)) {
        h.push(v - w * D, S - T * D), h.push(v + w * G, S + T * G), o >= 0 && ("round" === n.join ? x += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, !1) + 4 : x += 2, h.push(v - C * G, S - R * G), h.push(v + C * D, S + R * D));
        continue;
      }
      let d = (-w + _) * (-T + S) - (-w + v) * (-T + P),
        f = (-C + M) * (-R + S) - (-C + v) * (-R + k),
        p = (i * f - a * d) / u,
        y = (l * d - r * f) / u,
        B = (p - v) * (p - v) + (y - S) * (y - S),
        q = v + (p - v) * D,
        F = S + (y - S) * D,
        I = v - (p - v) * G,
        L = S - (y - S) * G,
        V = c ? D : G;
      B <= Math.min(i * i + r * r, a * a + l * l) + V * V * m ? "bevel" === n.join || B / m > b ? (c ? (h.push(q, F), h.push(v + w * G, S + T * G), h.push(q, F), h.push(v + C * G, S + R * G)) : (h.push(v - w * D, S - T * D), h.push(I, L), h.push(v - C * D, S - R * D), h.push(I, L)), x += 2) : "round" === n.join ? c ? (h.push(q, F), h.push(v + w * G, S + T * G), x += s(v, S, v + w * G, S + T * G, v + C * G, S + R * G, h, !0) + 4, h.push(q, F), h.push(v + C * G, S + R * G)) : (h.push(v - w * D, S - T * D), h.push(I, L), x += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, !1) + 4, h.push(v - C * D, S - R * D), h.push(I, L)) : (h.push(q, F), h.push(I, L)) : (h.push(v - w * D, S - T * D), h.push(v + w * G, S + T * G), "round" === n.join ? c ? x += s(v, S, v + w * G, S + T * G, v + C * G, S + R * G, h, !0) + 2 : x += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, !1) + 2 : "miter" === n.join && B / m <= b && (c ? (h.push(I, L), h.push(I, L)) : (h.push(q, F), h.push(q, F)), x += 2), h.push(v - C * D, S - R * D), h.push(v + C * G, S + R * G), x += 2);
    }
    _ = t[(p - 2) * 2], P = t[(p - 2) * 2 + 1], v = t[(p - 1) * 2], z = Math.sqrt((w = -(P - (S = t[(p - 1) * 2 + 1]))) * w + (T = _ - v) * T), w /= z, T /= z, w *= g, T *= g, h.push(v - w * D, S - T * D), h.push(v + w * G, S + T * G), l || ("round" === n.cap ? x += s(v - w * (D - G) * .5, S - T * (D - G) * .5, v - w * D, S - T * D, v + w * G, S + T * G, h, !1) + 2 : "square" === n.cap && (x += r(v, S, w, T, D, G, !1, h)));
    let q = 1e-4 * 1e-4;
    for (let t = y; t < x + y - 2; ++t) _ = h[2 * t], P = h[2 * t + 1], v = h[(t + 1) * 2], S = h[(t + 1) * 2 + 1], M = h[(t + 2) * 2], Math.abs(_ * (S - (k = h[(t + 2) * 2 + 1])) + v * (k - P) + M * (P - S)) < q || o.push(t, t + 1, t + 2);
  }], 625533);
};
