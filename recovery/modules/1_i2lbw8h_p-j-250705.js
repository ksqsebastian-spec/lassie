// Recovered from 1_i2lbw8h_p-j.js. Runtime module IDs: 250705.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t,
    n,
    r = e.i(281889),
    s = e.i(983871),
    a = e.i(513679),
    i = e.i(318563),
    l = e.i(581867),
    o = e.i(324832),
    u = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    c = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    d = Math.PI / 180,
    f = Math.sin,
    h = Math.cos,
    m = Math.abs,
    x = Math.sqrt,
    p = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    g = function (e) {
      return e.closed = .001 > Math.abs(e[0] - e[e.length - 2]) && .001 > Math.abs(e[1] - e[e.length - 1]);
    },
    v = function () {
      return t || "u" > typeof window && (t = window.gsap) && t.registerPlugin && t;
    },
    w = function () {
      (t = v()) ? (t.registerEase("_CE", L.create), n = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
    },
    b = function (e) {
      return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3;
    },
    y = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    j = /[cLlsSaAhHvVtTqQ]/g,
    N = function (e) {
      var t,
        n = e.length,
        r = 1e20;
      for (t = 1; t < n; t += 6) +e[t] < r && (r = +e[t]);
      return r;
    },
    k = function (e, t, n) {
      n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
      var r,
        s = -1 * e[0],
        a = -n,
        i = e.length,
        l = 1 / (+e[i - 2] + s),
        o = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? N(e) + a : +e[i - 1] + a);
      for (o = o ? 1 / o : -l, r = 0; r < i; r += 2) e[r] = (+e[r] + s) * l, e[r + 1] = (+e[r + 1] + a) * o;
    },
    P = function e(t, n, r, s, a, i, l, o, u, c, d) {
      var f,
        h = (t + r) / 2,
        m = (n + s) / 2,
        x = (r + a) / 2,
        p = (s + i) / 2,
        g = (a + l) / 2,
        v = (i + o) / 2,
        w = (h + x) / 2,
        b = (m + p) / 2,
        y = (x + g) / 2,
        j = (p + v) / 2,
        N = (w + y) / 2,
        k = (b + j) / 2,
        P = l - t,
        L = o - n,
        A = Math.abs((r - l) * L - (s - o) * P),
        _ = Math.abs((a - l) * L - (i - o) * P);
      return c || (c = [{
        x: t,
        y: n
      }, {
        x: l,
        y: o
      }], d = 1), c.splice(d || c.length - 1, 0, {
        x: N,
        y: k
      }), (A + _) * (A + _) > u * (P * P + L * L) && (f = c.length, e(t, n, h, m, w, b, N, k, u, c, d), e(N, k, y, j, g, v, l, o, u, c, d + 1 + (c.length - f))), c;
    },
    L = function () {
      function e(e, t, r) {
        n || w(), this.id = e, this.setData(t, r);
      }
      var r = e.prototype;
      return r.setData = function (e, n) {
        n = n || {};
        var r,
          s,
          a,
          i,
          l,
          o,
          p,
          v,
          w,
          b = (e = e || "0,0,1,1").match(y),
          N = 1,
          L = [],
          A = [],
          _ = n.precision || 1,
          C = _ <= 1;
        if (this.data = e, (j.test(e) || ~e.indexOf("M") && 0 > e.indexOf("C")) && (b = function (e) {
          var t,
            n,
            r,
            s,
            a,
            i,
            l,
            o,
            p,
            v,
            w,
            b,
            y,
            j,
            N,
            k = (e + "").replace(c, function (e) {
              var t = +e;
              return t < 1e-4 && t > -1e-4 ? 0 : t;
            }).match(u) || [],
            P = [],
            L = 0,
            A = 0,
            _ = 2 / 3,
            C = k.length,
            E = 0,
            M = "ERROR: malformed path: " + e,
            R = function (e, t, n, r) {
              v = (n - e) / 3, w = (r - t) / 3, l.push(e + v, t + w, n - v, r - w, n, r);
            };
          if (!e || !isNaN(k[0]) || isNaN(k[1])) return console.log(M), P;
          for (t = 0; t < C; t++) if (y = a, isNaN(k[t]) ? i = (a = k[t].toUpperCase()) !== k[t] : t--, r = +k[t + 1], s = +k[t + 2], i && (r += L, s += A), t || (o = r, p = s), "M" === a) l && (l.length < 8 ? P.length -= 1 : E += l.length, g(l)), L = o = r, A = p = s, l = [r, s], P.push(l), t += 2, a = "L";else if ("C" === a) l || (l = [0, 0]), i || (L = A = 0), l.push(r, s, L + +k[t + 3], A + +k[t + 4], L += +k[t + 5], A += +k[t + 6]), t += 6;else if ("S" === a) v = L, w = A, ("C" === y || "S" === y) && (v += L - l[l.length - 4], w += A - l[l.length - 3]), i || (L = A = 0), l.push(v, w, r, s, L += +k[t + 3], A += +k[t + 4]), t += 4;else if ("Q" === a) v = L + (r - L) * _, w = A + (s - A) * _, i || (L = A = 0), L += +k[t + 3], A += +k[t + 4], l.push(v, w, L + (r - L) * _, A + (s - A) * _, L, A), t += 4;else if ("T" === a) v = L - l[l.length - 4], w = A - l[l.length - 3], l.push(L + v, A + w, r + (L + 1.5 * v - r) * _, s + (A + 1.5 * w - s) * _, L = r, A = s), t += 2;else if ("H" === a) R(L, A, L = r, A), t += 1;else if ("V" === a) R(L, A, L, A = r + (i ? A - L : 0)), t += 1;else if ("L" === a || "Z" === a) "Z" === a && (r = o, s = p, l.closed = !0), ("L" === a || m(L - r) > .5 || m(A - s) > .5) && (R(L, A, r, s), "L" === a && (t += 2)), L = r, A = s;else if ("A" === a) {
            if (j = k[t + 4], N = k[t + 5], v = k[t + 6], w = k[t + 7], n = 7, j.length > 1 && (j.length < 3 ? (w = v, v = N, n--) : (w = N, v = j.substr(2), n -= 2), N = j.charAt(1), j = j.charAt(0)), b = function (e, t, n, r, s, a, i, l, o) {
              if (e !== l || t !== o) {
                n = m(n), r = m(r);
                var u = s % 360 * d,
                  c = h(u),
                  p = f(u),
                  g = Math.PI,
                  v = 2 * g,
                  w = (e - l) / 2,
                  b = (t - o) / 2,
                  y = c * w + p * b,
                  j = -p * w + c * b,
                  N = y * y,
                  k = j * j,
                  P = N / (n * n) + k / (r * r);
                P > 1 && (n = x(P) * n, r = x(P) * r);
                var L = n * n,
                  A = r * r,
                  _ = (L * A - L * k - A * N) / (L * k + A * N);
                _ < 0 && (_ = 0);
                var C = (a === i ? -1 : 1) * x(_),
                  E = n * j / r * C,
                  M = -(r * y / n * C),
                  R = (e + l) / 2 + (c * E - p * M),
                  S = (t + o) / 2 + (p * E + c * M),
                  T = (y - E) / n,
                  O = (j - M) / r,
                  D = (-y - E) / n,
                  I = (-j - M) / r,
                  z = T * T + O * O,
                  F = (O < 0 ? -1 : 1) * Math.acos(T / x(z)),
                  U = (T * I - O * D < 0 ? -1 : 1) * Math.acos((T * D + O * I) / x(z * (D * D + I * I)));
                isNaN(U) && (U = g), !i && U > 0 ? U -= v : i && U < 0 && (U += v), F %= v;
                var G,
                  H = Math.ceil(m(U %= v) / (v / 4)),
                  $ = [],
                  q = U / H,
                  B = 4 / 3 * f(q / 2) / (1 + h(q / 2)),
                  V = c * n,
                  W = p * n,
                  Z = -(p * r),
                  Q = c * r;
                for (G = 0; G < H; G++) y = h(s = F + G * q), j = f(s), T = h(s += q), O = f(s), $.push(y - B * j, j + B * y, T + B * O, O - B * T, T, O);
                for (G = 0; G < $.length; G += 2) y = $[G], j = $[G + 1], $[G] = y * V + j * Z + R, $[G + 1] = y * W + j * Q + S;
                return $[G - 2] = l, $[G - 1] = o, $;
              }
            }(L, A, +k[t + 1], +k[t + 2], +k[t + 3], +j, +N, (i ? L : 0) + +v, (i ? A : 0) + +w), t += n, b) for (n = 0; n < b.length; n++) l.push(b[n]);
            L = l[l.length - 2], A = l[l.length - 1];
          } else console.log(M);
          return (t = l.length) < 6 ? (P.pop(), t = 0) : g(l), P.totalPoints = E + t, P;
        }(e)[0]), 4 === (r = b.length)) b.unshift(0, 0), b.push(1, 1), r = 8;else if ((r - 2) % 6) throw "Invalid CustomEase";
        for ((0 != +b[0] || 1 != +b[r - 2]) && k(b, n.height, n.originY), this.segment = b, i = 2; i < r; i += 6) s = {
          x: +b[i - 2],
          y: +b[i - 1]
        }, a = {
          x: +b[i + 4],
          y: +b[i + 5]
        }, L.push(s, a), P(s.x, s.y, +b[i], +b[i + 1], +b[i + 2], +b[i + 3], a.x, a.y, 1 / (2e5 * _), L, L.length - 1);
        for (r = L.length, i = 0; i < r; i++) p = L[i], v = L[i - 1] || p, (p.x > v.x || v.y !== p.y && v.x === p.x || p === v) && p.x <= 1 ? (v.cx = p.x - v.x, v.cy = p.y - v.y, v.n = p, v.nx = p.x, C && i > 1 && Math.abs(v.cy / v.cx - L[i - 2].cy / L[i - 2].cx) > 2 && (C = 0), v.cx < N && (v.cx ? N = v.cx : (v.cx = .001, i === r - 1 && (v.x -= .001, N = Math.min(N, .001), C = 0)))) : (L.splice(i--, 1), r--);
        if (l = 1 / (r = 1 / N + 1 | 0), o = 0, p = L[0], C) {
          for (i = 0; i < r; i++) w = i * l, p.nx < w && (p = L[++o]), s = p.y + (w - p.x) / p.cx * p.cy, A[i] = {
            x: w,
            cx: l,
            y: s,
            cy: 0,
            nx: 9
          }, i && (A[i - 1].cy = s - A[i - 1].y);
          o = L[L.length - 1], A[r - 1].cy = o.y - s, A[r - 1].cx = o.x - A[A.length - 1].x;
        } else {
          for (i = 0; i < r; i++) p.nx < i * l && (p = L[++o]), A[i] = p;
          o < L.length - 1 && (A[i - 1] = L[L.length - 2]);
        }
        return this.ease = function (e) {
          var t = A[e * r | 0] || A[r - 1];
          return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
        }, this.ease.custom = this, this.id && t && t.registerEase(this.id, this.ease), this;
      }, r.getSVGData = function (t) {
        return e.getSVGData(this, t);
      }, e.create = function (t, n, r) {
        return new e(t, n, r).ease;
      }, e.register = function (e) {
        t = e, w();
      }, e.get = function (e) {
        return t.parseEase(e);
      }, e.getSVGData = function (n, r) {
        var s,
          a,
          i,
          l,
          o,
          u,
          c,
          d,
          f,
          h,
          m = (r = r || {}).width || 100,
          x = r.height || 100,
          g = r.x || 0,
          v = (r.y || 0) + x,
          w = t.utils.toArray(r.path)[0];
        if (r.invert && (x = -x, v = 0), "string" == typeof n && (n = t.parseEase(n)), n.custom && (n = n.custom), n instanceof e) s = function (e) {
          "number" == typeof e[0] && (e = [e]);
          var t,
            n,
            r,
            s,
            a = "",
            i = e.length;
          for (n = 0; n < i; n++) {
            for (a += "M" + p((s = e[n])[0]) + "," + p(s[1]) + " C", t = s.length, r = 2; r < t; r++) a += p(s[r++]) + "," + p(s[r++]) + " " + p(s[r++]) + "," + p(s[r++]) + " " + p(s[r++]) + "," + p(s[r]) + " ";
            s.closed && (a += "z");
          }
          return a;
        }(function (e, t, n, r, s) {
          for (var a, i, l, o, u, c = e.length; --c > -1;) for (i = (a = e[c]).length, l = 0; l < i; l += 2) o = a[l], u = a[l + 1], a[l] = o * t + 0 * u + r, a[l + 1] = 0 * o + u * n + s;
          return e._dirty = 1, e;
        }([n.segment.slice(0)], m, -x, g, v));else {
          for (s = [g, v], l = 1 / (c = Math.max(5, 200 * (r.precision || 1))), c += 2, d = 5 / c, f = b(g + l * m), a = ((h = b(v + -(n(l) * x))) - v) / (f - g), i = 2; i < c; i++) o = b(g + i * l * m), (Math.abs(((u = b(v + -(n(i * l) * x))) - h) / (o - f) - a) > d || i === c - 1) && (s.push(f, h), a = (u - h) / (o - f)), f = o, h = u;
          s = "M" + s.join(",");
        }
        return w && w.setAttribute("d", s), s;
      }, e;
    }();
  L.version = "3.15.0", L.headless = !0, v() && t.registerPlugin(L);
  var A = e.i(631923);
  s.default.registerPlugin(L);
  let _ = {
      duration: .5,
      ease: L.create("", "0.85, 0.05, 0.09, 0.91")
    },
    C = {
      duration: .75 * A.DURATION.medium,
      ease: A.EASE_OUT
    };
  function E({
    onMouseEnter: e,
    onClick: t,
    frameSelector: n = ".main-nav .nav-frame",
    ref: i
  }) {
    let o = (0, a.useRef)(null);
    return (0, a.useImperativeHandle)(i, () => ({
      getRect: () => o.current?.getBoundingClientRect() ?? null,
      show: () => {
        let e = s.default.timeline();
        if (!o.current) return e;
        let t = document.querySelector(n),
          r = 400;
        t && (r = t.getBoundingClientRect().width);
        let a = o.current.querySelector("svg");
        return s.default.killTweensOf([o.current, a]), e.to(o.current, {
          width: r,
          autoRound: !1,
          ..._
        }), e.set(a, {
          autoAlpha: 0,
          duration: 0,
          ease: A.EASE_OUT
        }, 1), e.set(o.current, {
          autoAlpha: 0
        }, 1), e;
      },
      hide: () => {
        let e = s.default.timeline();
        if (!o.current) return e;
        let t = o.current.querySelector("svg");
        return s.default.killTweensOf([o.current, t]), e.set(o.current, {
          autoAlpha: 1
        }, 0), e.to(o.current, {
          width: 56,
          ...C
        }), e.set(t, {
          autoAlpha: 1,
          duration: 1.5 * A.DURATION.medium,
          ease: A.EASE_OUT
        }, 0), e;
      }
    })), (0, r.jsx)("div", {
      ref: o,
      className: "absolute -top-1 tablet:top-[12px] left-1/2 z-2 flex h-13 w-14 -translate-x-1/2 flex-col items-center justify-center rounded-2xl",
      children: (0, r.jsx)("button", {
        type: "button",
        "aria-label": "Lassie home",
        onMouseEnter: e,
        onFocus: e,
        onClick: t,
        className: "flex h-13 w-full rounded-ctas-wrapper border border-white/10 border-solid",
        children: (0, r.jsx)("div", {
          "aria-hidden": "true",
          className: "flex h-full items-center pl-[17px] text-white",
          children: (0, r.jsx)(l.FlowerLogo, {
            className: "w-[21px]"
          })
        })
      })
    });
  }
  var M = e.i(628974),
    R = e.i(276522);
  let S = (0, a.createContext)({
    view: "menu",
    setView: () => {}
  });
  function T({
    children: e
  }) {
    let [t, n] = (0, a.useState)("menu");
    return (0, r.jsx)(S, {
      value: {
        view: t,
        setView: n
      },
      children: e
    });
  }
  let O = () => (0, a.useContext)(S);
  var D = e.i(176418),
    I = e.i(464068);
  e.i(265121);
  var z = e.i(279206);
  function F({
    onClickProduct: e,
    onNavigate: t
  }) {
    let n = "w-full min-h-9 text-left text-heading-lg mb-2",
      i = (0, a.useRef)(null);
    return (0, D.useGSAP)(() => {
      i.current && s.default.fromTo(i.current, {
        x: "-20%",
        opacity: 0
      }, {
        x: "0",
        opacity: 1,
        duration: A.DURATION.fast,
        ease: A.EASE_OUT
      });
    }, {
      scope: i
    }), (0, r.jsxs)("div", {
      ref: i,
      className: "flex w-full flex-col justify-start pt-32 pb-4",
      children: [(0, r.jsx)(I.default, {
        href: "/",
        onClick: t,
        className: (0, M.cn)(n, "block"),
        children: (0, r.jsx)("p", {
          children: "Home"
        })
      }), (0, r.jsx)(I.default, {
        href: "/stories",
        onClick: t,
        className: (0, M.cn)(n, "block"),
        children: (0, r.jsx)("p", {
          children: "Stories"
        })
      }), (0, r.jsx)(I.default, {
        href: "/company",
        onClick: t,
        className: (0, M.cn)(n, "block"),
        children: (0, r.jsx)("p", {
          children: "Company"
        })
      }), (0, r.jsx)(I.default, {
        href: "https://app.lassie.ai/",
        className: (0, M.cn)(n, "mt-3.5 mb-5 border-black/5 border-t pt-5.5"),
        children: (0, r.jsx)("p", {
          children: "Login"
        })
      }), (0, r.jsx)(z.ButtonPrimary, {
        as: "a",
        href: "/book-a-demo",
        className: "h-11.5",
        withIcon: !1,
        theme: "tertiary",
        fullWidth: !0,
        children: (0, r.jsx)("p", {
          children: "Demo"
        })
      })]
    });
  }
  function U({
    className: e
  }) {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 64 63",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      children: [(0, r.jsx)("title", {
        children: "Feature"
      }), (0, r.jsx)("path", {
        d: "M21.9466 28.8156C21.424 28.6414 21.4199 28.3603 21.9573 28.1812L41.0435 21.8191C41.572 21.643 41.8751 21.9388 41.727 22.4571L36.2738 41.5433C36.1228 42.0717 35.8182 42.0901 35.5949 41.5877L32.0004 33.5001L38.0004 25.5002L30.0004 31.5001L21.9466 28.8156Z",
        fill: "currentColor"
      })]
    });
  }
  var G = e.i(386465),
    H = e.i(120306),
    $ = e.i(703224),
    q = e.i(526296),
    B = e.i(138980),
    V = e.i(113329),
    W = e.i(622030),
    Z = e.i(517491);
  let Q = (0, a.createContext)(null),
    J = (0, a.forwardRef)(function (e, t) {
      [e, t] = (0, G.useContextProps)(e, t, Q);
      let n = e.href && !e.isDisabled ? "a" : "span",
        {
          linkProps: r,
          isPressed: s
        } = function (e, t) {
          let {
              elementType: n = "a",
              onPress: r,
              onPressStart: s,
              onPressEnd: a,
              onClick: i,
              isDisabled: l,
              ...o
            } = e,
            u = {};
          "a" !== n && (u = {
            role: "link",
            tabIndex: l ? void 0 : 0
          });
          let {
              focusableProps: c
            } = (0, B.useFocusable)(e, t),
            {
              pressProps: d,
              isPressed: f
            } = (0, V.usePress)({
              onPress: r,
              onPressStart: s,
              onPressEnd: a,
              onClick: i,
              isDisabled: l,
              ref: t
            }),
            h = (0, H.filterDOMProps)(o, {
              labelable: !0
            }),
            m = (0, q.mergeProps)(c, d),
            x = (0, $.useRouter)(),
            p = (0, $.useLinkProps)(e);
          return {
            isPressed: f,
            linkProps: (0, q.mergeProps)(h, p, {
              ...m,
              ...u,
              "aria-disabled": l || void 0,
              "aria-current": e["aria-current"],
              onClick: t => {
                d.onClick?.(t), (0, $.handleLinkClick)(t, x, e.href, e.routerOptions);
              }
            })
          };
        }({
          ...e,
          elementType: n
        }, t),
        i = G.dom[n],
        {
          hoverProps: l,
          isHovered: o
        } = (0, Z.useHover)(e),
        {
          focusProps: u,
          isFocused: c,
          isFocusVisible: d
        } = (0, W.useFocusRing)(),
        f = (0, G.useRenderProps)({
          ...e,
          defaultClassName: "react-aria-Link",
          values: {
            isCurrent: !!e["aria-current"],
            isDisabled: e.isDisabled || !1,
            isPressed: s,
            isHovered: o,
            isFocused: c,
            isFocusVisible: d
          }
        }),
        h = (0, H.filterDOMProps)(e, {
          global: !0
        });
      return delete h.onClick, a.default.createElement(i, {
        ref: t,
        slot: e.slot || void 0,
        ...(0, q.mergeProps)(h, f, r, l, u),
        "data-focused": c || void 0,
        "data-hovered": o || void 0,
        "data-pressed": s || void 0,
        "data-focus-visible": d || void 0,
        "data-current": !!e["aria-current"] || void 0,
        "data-disabled": e.isDisabled || void 0
      }, f.children);
    });
  function Y({
    className: e,
    icon: t,
    title: n,
    description: s,
    isDimmed: a,
    isHovered: i,
    "data-item-index": l,
    onMouseEnter: o,
    onMouseLeave: u,
    onPress: c
  }) {
    let {
      bgTheme: d
    } = (0, R.useNav)();
    return (0, r.jsx)(J, {
      href: "/",
      "data-item-index": l,
      className: (0, M.cn)("h-19 relative block group/submenu-item w-full", e),
      onMouseEnter: o,
      onMouseLeave: u,
      onPress: c,
      children: (0, r.jsxs)("span", {
        className: (0, M.cn)("w-full h-full inline-block rounded-ctas-button", "pb-4 tablet:p-pad-xs text-text-primary", "transition-colors duration-250", i ? "bg-transparent" : "bg-white", "flex flex-row align-middle gap-x-pad-sm", !t && "pl-pad-xl tablet:pl-pad-xl"),
        children: [t && (0, r.jsx)(t, {
          className: (0, M.cn)("shrink-0 h-full rounded-[0.6rem]", "transition-colors duration-250", a ? (0, M.cn)("bg-surface-button-tertiary/20", "light" === d && "text-text-primary", "dark" === d && "text-white") : "bg-surface-button-tertiary text-text-primary")
        }), (0, r.jsxs)("span", {
          className: "h-full flex flex-col align-middle justify-center",
          children: [(0, r.jsx)("p", {
            className: (0, M.cn)("text-body-lg tablet:text-body-sm mb-1.5 tablet:mb-0", "transition-colors duration-250", a ? (0, M.cn)("text-text-white", "light" === d && "text-text-primary", "dark" === d && "text-white") : "text-text-primary"),
            children: n
          }), (0, r.jsx)("p", {
            className: (0, M.cn)("text-body-sm tablet:text-body-sm", "transition-colors duration-250", a ? (0, M.cn)("text-text-white/30", "light" === d && "text-text-primary/30", "dark" === d && "text-white/30") : "text-text-primary/30"),
            children: s
          })]
        })]
      })
    });
  }
  function K({
    onNavigate: e
  }) {
    let t = (0, a.useRef)(null);
    return (0, D.useGSAP)(() => {
      t.current && s.default.fromTo(t.current, {
        x: "-20%",
        opacity: 0
      }, {
        x: "0",
        opacity: 1,
        duration: A.DURATION.fast,
        ease: A.EASE_OUT
      });
    }, {
      scope: t
    }), (0, r.jsxs)("div", {
      ref: t,
      className: "w-full pt-17.5 flex flex-col justify-start",
      children: [(0, r.jsxs)(I.default, {
        href: "/",
        onClick: e,
        className: "py-pad-sm mb-3.75",
        children: [(0, r.jsx)("h3", {
          className: "text-heading-md mb-1",
          children: "What Lassie does"
        }), (0, r.jsx)("p", {
          className: "text-button font-dmSans text-text-primary/45",
          children: "A one liner about the product"
        })]
      }), [{
        title: "Automated postings",
        description: "Duis veniam commodo exercitation laborum ad",
        icon: U
      }, {
        title: "What Lassie does",
        description: "A one liner about the product",
        icon: U
      }, {
        title: "What Lassie does",
        description: "A one liner about the product",
        icon: U
      }].map((t, n) => (0, r.jsx)(Y, {
        "data-item-index": n,
        title: t.title,
        description: t.description,
        icon: t.icon,
        isDimmed: !1,
        isHovered: !1,
        onPress: e,
        className: "max-w-82.5 h-17.5"
      }, n))]
    });
  }
  let X = {
      duration: .5 * A.DURATION.fast
    },
    ee = {
      duration: .26,
      ease: "power3.inOut"
    };
  function et({
    isOpen: e,
    closeTiming: t,
    onNavigate: n
  }) {
    let {
        view: i,
        setView: l
      } = O(),
      o = (0, a.useRef)(null),
      [u, c] = (0, a.useState)(e),
      [d, f] = (0, a.useState)(e);
    return d !== e && (f(e), e && c(!0)), (0, D.useGSAP)(() => {
      e ? s.default.fromTo(o.current, {
        height: 0
      }, {
        height: "auto",
        ...X
      }) : s.default.to(o.current, {
        height: 0,
        ...t,
        onComplete: () => c(!1)
      });
    }, {
      scope: o,
      dependencies: [e]
    }), (0, r.jsx)("div", {
      ref: o,
      className: (0, M.cn)("mobile-nav-extended relative top-0 left-0 z-1 -mt-11 h-auto w-full overflow-hidden rounded-ctas-button bg-white", !e && "pointer-events-none", !u && "hidden"),
      children: (0, r.jsx)("div", {
        className: "relative left-1/2 w-[calc(100vw-32px)] -translate-x-1/2 px-pad-xs",
        children: "menu" === i ? (0, r.jsx)(F, {
          onClickProduct: () => {
            l("product");
          },
          onNavigate: n
        }) : (0, r.jsx)(K, {
          onNavigate: n
        })
      })
    });
  }
  function en({
    href: e,
    children: t,
    className: n,
    onClick: s,
    ...a
  }) {
    let i = e?.toString().startsWith("https"),
      l = (0, M.cn)("group relative cursor-pointer outline-hidden hover:no-underline", "h-[4.4rem]", n),
      o = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("span", {
          className: (0, M.cn)("nav-item-hover absolute top-0 left-0 z-0 h-full w-full rounded-ctas-button", "bg-white")
        }), (0, r.jsx)("div", {
          className: (0, M.cn)("nav-item relative z-1 flex h-full w-full items-center px-[1.4rem]", "text-nav leading-none", "text-text-primary"),
          children: t
        })]
      });
    return e ? (0, r.jsx)(I.default, {
      className: l,
      href: e,
      onClick: s,
      target: i ? "_blank" : void 0,
      ...a,
      children: o
    }) : (0, r.jsx)("button", {
      onClick: s,
      type: "button",
      className: l,
      children: o
    });
  }
  let er = "power2.out",
    es = {
      duration: .35 * A.DURATION.fast,
      ease: er
    },
    ea = {
      duration: .53 * A.DURATION.fast,
      ease: er
    },
    ei = {
      duration: .55 * ee.duration,
      ease: er
    },
    el = ee;
  function eo() {
    let e = (0, a.useRef)(null),
      [t, n] = (0, a.useState)("closed"),
      u = "closed" !== t,
      c = (0, a.useRef)(null),
      [d, f] = (0, a.useState)(),
      {
        view: h,
        setView: m
      } = O(),
      {
        isStories: x
      } = (0, R.useNav)(),
      p = "open" === t,
      g = "closed" === t || "closing" === t,
      v = "opening" === t || p || x && "closing" === t,
      w = (0, a.useRef)(0),
      b = (0, a.useRef)(null),
      y = (0, a.useRef)(null),
      j = (0, a.useRef)(null),
      N = (0, a.useRef)(null),
      k = (0, a.useRef)(null),
      P = (0, a.useRef)(null);
    (0, a.useLayoutEffect)(() => {
      f(c.current?.offsetWidth);
    }, []);
    let L = () => {
        P.current?.kill();
        let e = s.default.timeline();
        return P.current = e, e;
      },
      A = (e, t = es) => {
        let n = s.default.timeline();
        return n.to(y.current, {
          alpha: e,
          ...t
        }, 0), n.to(N.current, {
          autoAlpha: 1 - e,
          ...t
        }, 0), n;
      },
      S = (e, t = es) => s.default.to(j.current, {
        alpha: e,
        ...t
      }),
      T = () => {
        if (!x) return d ?? 0;
        let e = k.current?.getRect();
        return e ? e.width - 8 : 0;
      },
      D = (t = el) => {
        let n = s.default.timeline(),
          r = e.current;
        return r && (n.to(r, {
          width: w.current,
          autoRound: !1,
          ...t
        }, 0), n.to(c.current, {
          x: 0,
          y: 0,
          ...t
        }, 0)), n;
      };
    (0, a.useLayoutEffect)(() => {
      x || (P.current?.kill(), s.default.set([y.current, j.current], {
        clearProps: "opacity,visibility"
      }));
    }, [x]), (0, a.useLayoutEffect)(() => {
      let r, a;
      if ("opening" !== t) return;
      let i = L();
      s.default.set(e.current, {
        clearProps: "width"
      }), s.default.set(c.current, {
        clearProps: "opacity"
      }), w.current = T(), x && (s.default.set([y.current, j.current], {
        alpha: 0
      }), k.current && i.add(k.current.show(), 0)), i.add((r = s.default.timeline(), (a = e.current) && (r.fromTo(a, {
        width: T()
      }, {
        width: a.getBoundingClientRect().width,
        autoRound: !1,
        clearProps: "width",
        ..._
      }, 0), r.to(c.current, {
        x: 4,
        y: 4,
        ..._
      }, 0)), r), 0), i.call(() => n("open"), void 0, .2), x && (i.add(A(1), .12), i.add(S(1), .2));
    }, [t, x]);
    let I = () => {
        n("closing");
        let e = L();
        if (!x) {
          e.add(D(), 0), e.call(() => {
            n("closed"), m("menu");
          });
          return;
        }
        e.add(D(C), 0), e.add(((e = ei) => s.default.to([c.current, b.current].filter(Boolean), {
          alpha: 0,
          ...e
        }))(), 0), e.add(S(0, ea), .06), e.add(A(0, ea), .06), e.call(() => {
          n("closed"), m("menu");
        }, void 0, .06 + ea.duration), k.current && e.add(k.current.hide(), 0);
      },
      z = () => {
        u ? I() : n("opening");
      };
    return (0, r.jsxs)("nav", {
      ref: e,
      "aria-label": "Main navigation",
      style: !u && d ? {
        width: d
      } : void 0,
      className: (0, M.cn)("tablet:hidden", "fixed top-4 left-1/2", "pointer-events-auto", "z-10 w-max -translate-x-1/2", u && "z-50 h-max-content w-[calc(100vw-32px)]"),
      children: [x && (0, r.jsx)("div", {
        ref: N,
        children: (0, r.jsx)(E, {
          ref: k,
          frameSelector: ".mobile-nav-border",
          onClick: z
        })
      }), (0, r.jsx)("div", {
        ref: y,
        className: (0, M.cn)("mobile-nav-border pointer-events-none absolute", "-top-1 -left-1 h-full min-h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]", ("open" === t || "closing" === t) && "h-[calc(100%+8px)]", x && !u && "hidden")
      }), (0, r.jsxs)("div", {
        ref: j,
        children: [(0, r.jsxs)("div", {
          ref: c,
          className: (0, M.cn)("relative z-2 flex w-max", "p-0"),
          children: [(!x || u) && (0, r.jsx)(() => "menu" !== h ? (0, r.jsxs)("button", {
            onClick: () => {
              m("menu");
            },
            className: "relative top-1 left-2 z-2 flex h-11 items-center",
            children: [(0, r.jsx)("span", {
              "aria-hidden": !0,
              className: (0, M.cn)("z-0 mr-1 flex h-10 tablet:h-10.5 shrink-0 items-center justify-center rounded-ctas-button p-0", "bg-white text-text-primary"),
              children: (0, r.jsx)(i.default, {
                className: "block size-5 rotate-180 p-0"
              })
            }), (0, r.jsx)("span", {
              className: (0, M.cn)("inline-block overflow-hidden border-box text-button"),
              children: (0, r.jsx)("p", {
                children: "Back"
              })
            })]
          }) : (0, r.jsxs)(en, {
            href: "/",
            className: "z-2",
            children: [(0, r.jsx)(l.FlowerLogo, {
              className: "w-5"
            }), (0, r.jsx)("span", {
              className: (0, M.cn)("inline-block w-13.25 overflow-hidden border-box"),
              children: (0, r.jsx)(o.LassieLogo, {
                className: "ml-[0.6rem] w-11.75"
              })
            })]
          }), {}), !x && (0, r.jsx)(en, {
            onClick: z,
            children: (0, r.jsx)("span", {
              className: (0, M.cn)(!g && "opacity-0"),
              children: "Menu"
            })
          })]
        }), (0, r.jsx)(et, {
          isOpen: p,
          closeTiming: x ? C : el,
          onNavigate: I
        }), v && (0, r.jsx)("button", {
          ref: b,
          onClick: I,
          className: "absolute top-0 right-1 z-2 block h-11 w-16.5 justify-center align-middle",
          children: (0, r.jsx)("p", {
            className: "text-nav",
            children: "Close"
          })
        })]
      })]
    });
  }
  var eu = e.i(809393),
    ec = e.i(662576),
    ed = e.i(300778);
  let ef = (0, ec.default)(() => e.A(10218).then(e => e.Nav), {
      loadableGenerated: {
        modules: [932828]
      }
    }),
    eh = ["/get-started"];
  function em() {
    let e = (0, ed.usePathname)(),
      {
        setCollapsed: t,
        collapsed: n,
        isStories: i
      } = (0, R.useNav)(),
      u = (0, a.useRef)(null),
      c = (0, a.useRef)(null),
      d = (0, a.useRef)(null),
      f = (0, a.useRef)(null),
      h = [...(i ? [] : [{
        href: "/stories",
        content: "Stories"
      }]), {
        href: "/company",
        content: "Company"
      }];
    (0, a.useEffect)(() => {
      t(window.scrollY >= 400);
      let e = () => {
        let e = window.scrollY;
        !n && e >= 400 ? t(!0) : e <= 360 && t(!1);
      };
      return e(), window.addEventListener("scroll", e, {
        passive: !0
      }), () => {
        window.removeEventListener("scroll", e);
      };
    }, [e, t]), (0, D.useGSAP)(() => {
      if (!i) return void x();
      p();
      let e = u.current,
        t = d.current;
      if (!e || !t) return;
      let n = !1,
        r = e => {
          e !== n && (n = e, e ? x() : p());
        },
        s = e => {
          let t;
          r(!!(t = f.current?.getRect()) && e.clientX >= t.left && e.clientX <= t.right);
        },
        a = () => r(!1),
        l = () => r(!0),
        o = t => {
          e.contains(t.relatedTarget) || r(!1);
        };
      return e.addEventListener("mousemove", s), e.addEventListener("mouseleave", a), e.addEventListener("focusin", l), e.addEventListener("focusout", o), () => {
        e.removeEventListener("mousemove", s), e.removeEventListener("mouseleave", a), e.removeEventListener("focusin", l), e.removeEventListener("focusout", o);
      };
    }, {
      scope: u,
      dependencies: [i]
    });
    let m = e => {
        let t = s.default.timeline();
        return s.default.killTweensOf(c.current), t.to(c.current, {
          alpha: +!!e,
          duration: .35 * A.DURATION.fast,
          ease: "power2.out",
          overwrite: "auto"
        }), t;
      },
      x = () => {
        let e = s.default.timeline();
        f.current && e.add(f.current.show()), e.add(m(!0), .5);
      },
      p = () => {
        let e = s.default.timeline();
        e.add(m(!1)), f.current && e.add(f.current.hide());
      };
    return eh.includes(e) ? null : (0, r.jsxs)("div", {
      ref: u,
      className: (0, M.cn)("fixed top-0 left-0 z-10 h-23 w-screen", "pointer-events-none", i && "tablet:pointer-events-auto"),
      children: [i && (0, r.jsx)("div", {
        ref: d,
        className: "pointer-events-none tablet:block hidden",
        children: (0, r.jsx)(E, {
          ref: f
        })
      }), (0, r.jsx)("div", {
        ref: c,
        className: "pointer-events-auto",
        children: (0, r.jsx)(ef, {
          className: (0, M.cn)("main-nav fixed top-4 left-1/2", "z-10 tablet:flex hidden -translate-x-1/2"),
          logoHref: "/",
          onMouseEnter: () => t(!1),
          onFocus: () => t(!1),
          logoAriaLabel: "Lassie home",
          logoIcon: (0, r.jsx)(l.FlowerLogo, {
            className: "w-[21px]"
          }),
          logo: (0, r.jsx)(o.LassieLogo, {
            className: "ml-[0.6rem] w-[47px]"
          }),
          items: h
        })
      })]
    });
  }
  function ex() {
    return (0, r.jsx)(ef, {
      mode: "index",
      className: (0, eu.default)("fixed top-4 right-5.5", "z-10 tablet:flex hidden"),
      items: [{
        href: "https://app.lassie.ai/",
        content: "Login"
      }, {
        href: "/book-a-demo",
        content: "Demo",
        active: !0
      }]
    });
  }
  e.s(["Header", 0, function () {
    let {
      isStories: e
    } = (0, R.useNav)();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(em, {}), !e && (0, r.jsx)(ex, {}), (0, r.jsx)(T, {
        children: (0, r.jsx)(eo, {})
      })]
    });
  }], 250705);
};
