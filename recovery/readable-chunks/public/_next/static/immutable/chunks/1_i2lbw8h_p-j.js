;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "1dd440b3-056a-e8fb-c411-1612f6ba4328";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    861976,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var n = e.i(300778);
        var r = e.i(513679);
        var s = e.i(931804);
        var a = e.i(817255);
        let i = new s.UtmCookie;
        let l = new s.GoogleClickIdCookie;
        let o = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_content",
            "utm_term"
        ];
        let u = [
            "gclid",
            "gbraid",
            "wbraid"
        ];
        let c = /^[A-Za-z0-9_-]+$/;
        function useD() {
            let e = n.useSearchParams();
            let t = e.toString();
            r.useEffect(()=>{
                let t = i.get() || {};
                let n = false;
                o.forEach((r)=>{
                    let s = e.get(r);
                    if (s && t[r] !== s) {
                        t[r] = s;
                        n = true;
                    }
                });
                if (n) {
                    i.set(t);
                    a.tracker.updateUtmData(t);
                }
                let r = l.get() || {};
                let s = false;
                u.forEach((t)=>{
                    let n = e.get(t);
                    if (n && n.length <= 512 && c.test(n) && r[t] !== n) {
                        r[t] = n;
                        s = true;
                    }
                });
                if (s) {
                    l.set(r);
                }
            }, [
                t
            ]);
            return null;
        }
        function useF() {
            let e = n.usePathname();
            r.useEffect(()=>{
                a.tracker.page();
            }, [
                e
            ]);
            return null;
        }
        var h = e.i(546619);
        function m() {
            return t.jsx(h.default, {
                id: "unify",
                strategy: "afterInteractive",
                rel: "preconnect",
                children: `
      !(function () {
        window.unify ||
          (window.unify = Object.assign(
            [],
            [
              "identify",
              "page",
              "startAutoPage",
              "stopAutoPage",
              "startAutoIdentify",
              "stopAutoIdentify",
            ].reduce(function (t, e) {
              return (
                (t[e] = function () {
                  return unify.push([e, [].slice.call(arguments)]), unify;
                }),
                t
              );
            }, {}),
          ));
        var t = document.createElement("script");
        t.async = true;
        t.setAttribute("src", "https://tag.unifyintent.com/v1/FqArSwGa66xmF1eqjgauz8/script.js");
        t.setAttribute("data-api-key", "wk_gZJQ7mvk_8H52mWgx26SoTqjvtSUMsQt77ixkJmLA");
        t.setAttribute("id", "unifytag");
          (document.body || document.head).appendChild(t);
        })();
      `
            });
        }
        e.s([
            "ClientTracking",
            0,
            ()=>t.jsxs(t.Fragment, {
                    children: [
                        t.jsx(useD, {}),
                        t.jsx(useF, {}),
                        t.jsx(m, {})
                    ]
                })
        ], 861976);
    },
    159236,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        let n = e.i(662576).default(()=>e.A(773879).then((e)=>e.HiringLog), {
            loadableGenerated: {
                modules: [
                    925728
                ]
            },
            ssr: false
        });
        e.s([
            "HiringLogLazy",
            0,
            ()=>t.jsx(n, {})
        ]);
    },
    250705,
    (e)=>{
        "use strict";
        var t;
        var n;
        var r = e.i(281889);
        var s = e.i(983871);
        var a = e.i(513679);
        var i = e.i(318563);
        var l = e.i(581867);
        var o = e.i(324832);
        var u = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
        var c = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
        var d = Math.PI / 180;
        var Math_sin = Math.sin;
        var Math_cos = Math.cos;
        var Math_abs = Math.abs;
        var Math_sqrt = Math.sqrt;
        var p = (e)=>Math.round(100000 * e) / 100000 || 0;
        var g = (e)=>e.closed = Math.abs(e[0] - e[e.length - 2]) < 0.001 && Math.abs(e[1] - e[e.length - 1]) < 0.001;
        var v = ()=>t || typeof window !== "undefined" && (t = window.gsap) && t.registerPlugin && t;
        var w = ()=>{
            if (t = v()) {
                t.registerEase("_CE", L.create);
                n = 1;
            } else {
                console.warn("Please gsap.registerPlugin(CustomEase)");
            }
        };
        var b = (e)=>~~(1000 * e + (e < 0 ? -0.5 : 0.5)) / 1000;
        var y = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi;
        var j = /[cLlsSaAhHvVtTqQ]/g;
        var N = (e)=>{
            let t;
            const e_length = e.length;
            let r = 100000000000000000000;
            for(t = 1; t < e_length; t += 6){
                if (+e[t] < r) {
                    r = +e[t];
                }
            }
            return r;
        };
        var k = (e, height, n)=>{
            if (!(n || n === 0)) {
                n = Math.max(+e[e.length - 1], +e[1]);
            }
            let r;
            const s = -1 * e[0];
            const a = -n;
            const e_length = e.length;
            const l = 1 / (+e[e_length - 2] + s);
            let o = -height || (Math.abs(e[e_length - 1] - e[1]) < 0.01 * (e[e_length - 2] - e[0]) ? N(e) + a : +e[e_length - 1] + a);
            o = o ? 1 / o : -l;
            for(r = 0; r < e_length; r += 2){
                e[r] = (+e[r] + s) * l;
                e[r + 1] = (+e[r + 1] + a) * o;
            }
        };
        var P = function e(t, n, r, s, a, i, l, o, u, c, d) {
            let f;
            const h = (t + r) / 2;
            const m = (n + s) / 2;
            const x = (r + a) / 2;
            const p = (s + i) / 2;
            const g = (a + l) / 2;
            const v = (i + o) / 2;
            const w = (h + x) / 2;
            const b = (m + p) / 2;
            const y = (x + g) / 2;
            const j = (p + v) / 2;
            const N = (w + y) / 2;
            const k = (b + j) / 2;
            const P = l - t;
            const L = o - n;
            const A = Math.abs((r - l) * L - (s - o) * P);
            const _ = Math.abs((a - l) * L - (i - o) * P);
            if (!c) {
                c = [
                    {
                        x: t,
                        y: n
                    },
                    {
                        x: l,
                        y: o
                    }
                ];
                d = 1;
            }
            c.splice(d || c.length - 1, 0, {
                x: N,
                y: k
            });
            if ((A + _) * (A + _) > u * (P * P + L * L)) {
                f = c.length;
                e(t, n, h, m, w, b, N, k, u, c, d);
                e(N, k, y, j, g, v, l, o, u, c, d + 1 + (c.length - f));
            }
            return c;
        };
        var L = (()=>{
            function e(e, t, r) {
                if (!n) {
                    w();
                }
                this.id = e;
                this.setData(t, r);
            }
            const e_prototype = e.prototype;
            e_prototype.setData = function(e, n) {
                n = n || {};
                let r;
                let s;
                let a;
                let i;
                let cx;
                let o;
                let p;
                let v;
                let w;
                let b = (e = e || "0,0,1,1").match(y);
                let N = 1;
                const L = [];
                const A = [];
                const _ = n.precision || 1;
                let C = _ <= 1;
                this.data = e;
                if (j.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) {
                    b = ((e)=>{
                        let t;
                        let n;
                        let r;
                        let s;
                        let a;
                        let i;
                        let l;
                        let o;
                        let p;
                        let v;
                        let w;
                        let b;
                        let y;
                        let j;
                        let N;
                        const k = (e + "").replace(c, (e)=>{
                            const t = +e;
                            if (t < 0.0001 && t > -0.0001) {
                                return 0;
                            }
                            return t;
                        }).match(u) || [];
                        const P = [];
                        let L = 0;
                        let A = 0;
                        const _ = 2 / 3;
                        const k_length = k.length;
                        let E = 0;
                        const M = "ERROR: malformed path: " + e;
                        const R = (e, t, n, r)=>{
                            v = (n - e) / 3;
                            w = (r - t) / 3;
                            l.push(e + v, t + w, n - v, r - w, n, r);
                        };
                        if (!e || !isNaN(k[0]) || isNaN(k[1])) {
                            console.log(M);
                            return P;
                        }
                        for(t = 0; t < k_length; t++){
                            y = a;
                            if (isNaN(k[t])) {
                                i = (a = k[t].toUpperCase()) !== k[t];
                            } else {
                                t--;
                            }
                            r = +k[t + 1];
                            s = +k[t + 2];
                            if (i) {
                                r += L;
                                s += A;
                            }
                            if (!t) {
                                o = r;
                                p = s;
                            }
                            if (a === "M") {
                                if (l) {
                                    if (l.length < 8) {
                                        P.length -= 1;
                                    } else {
                                        E += l.length;
                                    }
                                    g(l);
                                }
                                o = r;
                                L = r;
                                p = s;
                                A = s;
                                l = [
                                    r,
                                    s
                                ];
                                P.push(l);
                                t += 2;
                                a = "L";
                            } else if (a === "C") {
                                if (!l) {
                                    l = [
                                        0,
                                        0
                                    ];
                                }
                                if (!i) {
                                    A = 0;
                                    L = 0;
                                }
                                l.push(r, s, L + +k[t + 3], A + +k[t + 4], L += +k[t + 5], A += +k[t + 6]);
                                t += 6;
                            } else if (a === "S") {
                                v = L;
                                w = A;
                                if (y === "C" || y === "S") {
                                    v += L - l[l.length - 4];
                                    w += A - l[l.length - 3];
                                }
                                if (!i) {
                                    A = 0;
                                    L = 0;
                                }
                                l.push(v, w, r, s, L += +k[t + 3], A += +k[t + 4]);
                                t += 4;
                            } else if (a === "Q") {
                                v = L + (r - L) * _;
                                w = A + (s - A) * _;
                                if (!i) {
                                    A = 0;
                                    L = 0;
                                }
                                L += +k[t + 3];
                                A += +k[t + 4];
                                l.push(v, w, L + (r - L) * _, A + (s - A) * _, L, A);
                                t += 4;
                            } else if (a === "T") {
                                v = L - l[l.length - 4];
                                w = A - l[l.length - 3];
                                l.push(L + v, A + w, r + (L + 1.5 * v - r) * _, s + (A + 1.5 * w - s) * _, L = r, A = s);
                                t += 2;
                            } else if (a === "H") {
                                R(L, A, L = r, A);
                                t += 1;
                            } else if (a === "V") {
                                R(L, A, L, A = r + (i ? A - L : 0));
                                t += 1;
                            } else if (a === "L" || a === "Z") {
                                if (a === "Z") {
                                    r = o;
                                    s = p;
                                    l.closed = true;
                                }
                                if (a === "L" || Math_abs(L - r) > 0.5 || Math_abs(A - s) > 0.5) {
                                    R(L, A, r, s);
                                    if (a === "L") {
                                        t += 2;
                                    }
                                }
                                L = r;
                                A = s;
                            } else if (a === "A") {
                                j = k[t + 4];
                                N = k[t + 5];
                                v = k[t + 6];
                                w = k[t + 7];
                                n = 7;
                                if (j.length > 1) {
                                    if (j.length < 3) {
                                        w = v;
                                        v = N;
                                        n--;
                                    } else {
                                        w = N;
                                        v = j.substr(2);
                                        n -= 2;
                                    }
                                    N = j.charAt(1);
                                    j = j.charAt(0);
                                }
                                b = ((e, t, n, r, s, a, i, l, o)=>{
                                    if (e !== l || t !== o) {
                                        n = Math_abs(n);
                                        r = Math_abs(r);
                                        const u = s % 360 * d;
                                        const c = Math_cos(u);
                                        const p = Math_sin(u);
                                        const g = Math.PI;
                                        const v = 2 * g;
                                        const w = (e - l) / 2;
                                        const b = (t - o) / 2;
                                        let y = c * w + p * b;
                                        let j = -p * w + c * b;
                                        const N = y * y;
                                        const k = j * j;
                                        const P = N / (n * n) + k / (r * r);
                                        if (P > 1) {
                                            n = Math_sqrt(P) * n;
                                            r = Math_sqrt(P) * r;
                                        }
                                        const L = n * n;
                                        const A = r * r;
                                        let _ = (L * A - L * k - A * N) / (L * k + A * N);
                                        if (_ < 0) {
                                            _ = 0;
                                        }
                                        const C = (a === i ? -1 : 1) * Math_sqrt(_);
                                        const E = n * j / r * C;
                                        const M = -(r * y / n * C);
                                        const R = (e + l) / 2 + (c * E - p * M);
                                        const S = (t + o) / 2 + (p * E + c * M);
                                        let T = (y - E) / n;
                                        let O = (j - M) / r;
                                        const D = (-y - E) / n;
                                        const I = (-j - M) / r;
                                        const z = T * T + O * O;
                                        let F = (O < 0 ? -1 : 1) * Math.acos(T / Math_sqrt(z));
                                        let U = (T * I - O * D < 0 ? -1 : 1) * Math.acos((T * D + O * I) / Math_sqrt(z * (D * D + I * I)));
                                        if (isNaN(U)) {
                                            U = g;
                                        }
                                        if (!i && U > 0) {
                                            U -= v;
                                        } else if (i && U < 0) {
                                            U += v;
                                        }
                                        F %= v;
                                        let G;
                                        const H = Math.ceil(Math_abs(U %= v) / (v / 4));
                                        const $ = [];
                                        const q = U / H;
                                        const B = 4 / 3 * Math_sin(q / 2) / (1 + Math_cos(q / 2));
                                        const V = c * n;
                                        const W = p * n;
                                        const Z = -(p * r);
                                        const Q = c * r;
                                        for(G = 0; G < H; G++){
                                            y = Math_cos(s = F + G * q);
                                            j = Math_sin(s);
                                            T = Math_cos(s += q);
                                            O = Math_sin(s);
                                            $.push(y - B * j, j + B * y, T + B * O, O - B * T, T, O);
                                        }
                                        for(G = 0; G < $.length; G += 2){
                                            y = $[G];
                                            j = $[G + 1];
                                            $[G] = y * V + j * Z + R;
                                            $[G + 1] = y * W + j * Q + S;
                                        }
                                        $[G - 2] = l;
                                        $[G - 1] = o;
                                        return $;
                                    }
                                })(L, A, +k[t + 1], +k[t + 2], +k[t + 3], +j, +N, (i ? L : 0) + +v, (i ? A : 0) + +w);
                                t += n;
                                if (b) {
                                    for(n = 0; n < b.length; n++){
                                        l.push(b[n]);
                                    }
                                }
                                L = l[l.length - 2];
                                A = l[l.length - 1];
                            } else {
                                console.log(M);
                            }
                        }
                        if ((t = l.length) < 6) {
                            P.pop();
                            t = 0;
                        } else {
                            g(l);
                        }
                        P.totalPoints = E + t;
                        return P;
                    })(e)[0];
                }
                if ((r = b.length) === 4) {
                    b.unshift(0, 0);
                    b.push(1, 1);
                    r = 8;
                } else if ((r - 2) % 6) {
                    throw "Invalid CustomEase";
                }
                if (+b[0] != 0 || +b[r - 2] != 1) {
                    k(b, n.height, n.originY);
                }
                this.segment = b;
                for(i = 2; i < r; i += 6){
                    s = {
                        x: +b[i - 2],
                        y: +b[i - 1]
                    };
                    a = {
                        x: +b[i + 4],
                        y: +b[i + 5]
                    };
                    L.push(s, a);
                    P(s.x, s.y, +b[i], +b[i + 1], +b[i + 2], +b[i + 3], a.x, a.y, 1 / (200000 * _), L, L.length - 1);
                }
                r = L.length;
                for(i = 0; i < r; i++){
                    p = L[i];
                    v = L[i - 1] || p;
                    if ((p.x > v.x || v.y !== p.y && v.x === p.x || p === v) && p.x <= 1) {
                        v.cx = p.x - v.x;
                        v.cy = p.y - v.y;
                        v.n = p;
                        v.nx = p.x;
                        if (C && i > 1 && Math.abs(v.cy / v.cx - L[i - 2].cy / L[i - 2].cx) > 2) {
                            C = 0;
                        }
                        v.cx < N && (v.cx ? N = v.cx : (v.cx = 0.001, i === r - 1 && (v.x -= 0.001, N = Math.min(N, 0.001), C = 0)));
                    } else {
                        L.splice(i--, 1);
                        r--;
                    }
                }
                cx = 1 / (r = 1 / N + 1 | 0);
                o = 0;
                p = L[0];
                if (C) {
                    for(i = 0; i < r; i++){
                        w = i * cx;
                        if (p.nx < w) {
                            p = L[++o];
                        }
                        s = p.y + (w - p.x) / p.cx * p.cy;
                        A[i] = {
                            x: w,
                            cx,
                            y: s,
                            cy: 0,
                            nx: 9
                        };
                        if (i) {
                            A[i - 1].cy = s - A[i - 1].y;
                        }
                    }
                    o = L[L.length - 1];
                    A[r - 1].cy = o.y - s;
                    A[r - 1].cx = o.x - A[A.length - 1].x;
                } else {
                    for(i = 0; i < r; i++){
                        if (p.nx < i * cx) {
                            p = L[++o];
                        }
                        A[i] = p;
                    }
                    if (o < L.length - 1) {
                        A[i - 1] = L[L.length - 2];
                    }
                }
                this.ease = (e)=>{
                    let t = A[e * r | 0] || A[r - 1];
                    if (t.nx < e) {
                        t = t.n;
                    }
                    return t.y + (e - t.x) / t.cx * t.cy;
                };
                this.ease.custom = this;
                if (this.id && t) {
                    t.registerEase(this.id, this.ease);
                }
                return this;
            };
            e_prototype.getSVGData = function(t) {
                return e.getSVGData(this, t);
            };
            e.create = (t, n, r)=>new e(t, n, r).ease;
            e.register = (e)=>{
                t = e;
                w();
            };
            e.get = (e)=>t.parseEase(e);
            e.getSVGData = (n, r)=>{
                let s;
                let a;
                let i;
                let l;
                let o;
                let u;
                let c;
                let d;
                let f;
                let h;
                const m = (r = r || {}).width || 100;
                let x = r.height || 100;
                const g = r.x || 0;
                let v = (r.y || 0) + x;
                const w = t.utils.toArray(r.path)[0];
                if (r.invert) {
                    x = -x;
                    v = 0;
                }
                if (typeof n === "string") {
                    n = t.parseEase(n);
                }
                if (n.custom) {
                    n = n.custom;
                }
                if (n instanceof e) {
                    s = ((e)=>{
                        if (typeof e[0] === "number") {
                            e = [
                                e
                            ];
                        }
                        let t;
                        let n;
                        let r;
                        let s;
                        let a = "";
                        const e_length = e.length;
                        for(n = 0; n < e_length; n++){
                            a += "M" + p((s = e[n])[0]) + "," + p(s[1]) + " C";
                            t = s.length;
                            for(r = 2; r < t; r++){
                                a += p(s[r++]) + "," + p(s[r++]) + " " + p(s[r++]) + "," + p(s[r++]) + " " + p(s[r++]) + "," + p(s[r]) + " ";
                            }
                            if (s.closed) {
                                a += "z";
                            }
                        }
                        return a;
                    })(((e, t, n, r, s)=>{
                        let a;
                        let i;
                        let l;
                        let o;
                        let u;
                        for(let c = e.length; --c > -1;){
                            i = (a = e[c]).length;
                            for(l = 0; l < i; l += 2){
                                o = a[l];
                                u = a[l + 1];
                                a[l] = o * t + 0 * u + r;
                                a[l + 1] = 0 * o + u * n + s;
                            }
                        }
                        e._dirty = 1;
                        return e;
                    })([
                        n.segment.slice(0)
                    ], m, -x, g, v));
                } else {
                    s = [
                        g,
                        v
                    ];
                    l = 1 / (c = Math.max(5, 200 * (r.precision || 1)));
                    c += 2;
                    d = 5 / c;
                    f = b(g + l * m);
                    a = ((h = b(v + -(n(l) * x))) - v) / (f - g);
                    for(i = 2; i < c; i++){
                        o = b(g + i * l * m);
                        if (Math.abs(((u = b(v + -(n(i * l) * x))) - h) / (o - f) - a) > d || i === c - 1) {
                            s.push(f, h);
                            a = (u - h) / (o - f);
                        }
                        f = o;
                        h = u;
                    }
                    s = "M" + s.join(",");
                }
                if (w) {
                    w.setAttribute("d", s);
                }
                return s;
            };
            return e;
        })();
        L.version = "3.15.0";
        L.headless = true;
        if (v()) {
            t.registerPlugin(L);
        }
        var A = e.i(631923);
        s.default.registerPlugin(L);
        let _ = {
            duration: 0.5,
            ease: L.create("", "0.85, 0.05, 0.09, 0.91")
        };
        let C = {
            duration: 0.75 * A.DURATION.medium,
            ease: A.EASE_OUT
        };
        function useE({ onMouseEnter, onClick, frameSelector = ".main-nav .nav-frame", ref }) {
            let oRef = a.useRef(null);
            a.useImperativeHandle(ref, ()=>({
                    getRect: ()=>oRef.current?.getBoundingClientRect() ?? null,
                    show: ()=>{
                        let e = s.default.timeline();
                        if (!oRef.current) {
                            return e;
                        }
                        let t = document.querySelector(frameSelector);
                        let width = 400;
                        if (t) {
                            width = t.getBoundingClientRect().width;
                        }
                        let a = oRef.current.querySelector("svg");
                        s.default.killTweensOf([
                            oRef.current,
                            a
                        ]);
                        e.to(oRef.current, {
                            width,
                            autoRound: false,
                            ..._
                        });
                        e.set(a, {
                            autoAlpha: 0,
                            duration: 0,
                            ease: A.EASE_OUT
                        }, 1);
                        e.set(oRef.current, {
                            autoAlpha: 0
                        }, 1);
                        return e;
                    },
                    hide: ()=>{
                        let e = s.default.timeline();
                        if (!oRef.current) {
                            return e;
                        }
                        let t = oRef.current.querySelector("svg");
                        s.default.killTweensOf([
                            oRef.current,
                            t
                        ]);
                        e.set(oRef.current, {
                            autoAlpha: 1
                        }, 0);
                        e.to(oRef.current, {
                            width: 56,
                            ...C
                        });
                        e.set(t, {
                            autoAlpha: 1,
                            duration: 1.5 * A.DURATION.medium,
                            ease: A.EASE_OUT
                        }, 0);
                        return e;
                    }
                }));
            return r.jsx("div", {
                ref: oRef,
                className: "absolute -top-1 tablet:top-[12px] left-1/2 z-2 flex h-13 w-14 -translate-x-1/2 flex-col items-center justify-center rounded-2xl",
                children: r.jsx("button", {
                    type: "button",
                    "aria-label": "Lassie home",
                    onMouseEnter,
                    onFocus: onMouseEnter,
                    onClick,
                    className: "flex h-13 w-full rounded-ctas-wrapper border border-white/10 border-solid",
                    children: r.jsx("div", {
                        "aria-hidden": "true",
                        className: "flex h-full items-center pl-[17px] text-white",
                        children: r.jsx(l.FlowerLogo, {
                            className: "w-[21px]"
                        })
                    })
                })
            });
        }
        var M = e.i(628974);
        var R = e.i(276522);
        let SContext = a.createContext({
            view: "menu",
            setView: ()=>{}
        });
        function useT({ children }) {
            let [view, setView] = a.useState("menu");
            return r.jsx(SContext, {
                value: {
                    view,
                    setView
                },
                children
            });
        }
        let useO = ()=>a.useContext(SContext);
        var D = e.i(176418);
        var I = e.i(464068);
        e.i(265121);
        var z = e.i(279206);
        function F({ onClickProduct, onNavigate }) {
            let n = "w-full min-h-9 text-left text-heading-lg mb-2";
            let iRef = a.useRef(null);
            D.useGSAP(()=>{
                if (iRef.current) {
                    s.default.fromTo(iRef.current, {
                        x: "-20%",
                        opacity: 0
                    }, {
                        x: "0",
                        opacity: 1,
                        duration: A.DURATION.fast,
                        ease: A.EASE_OUT
                    });
                }
            }, {
                scope: iRef
            });
            return r.jsxs("div", {
                ref: iRef,
                className: "flex w-full flex-col justify-start pt-32 pb-4",
                children: [
                    r.jsx(I.default, {
                        href: "/",
                        onClick: onNavigate,
                        className: M.cn(n, "block"),
                        children: r.jsx("p", {
                            children: "Home"
                        })
                    }),
                    r.jsx(I.default, {
                        href: "/stories",
                        onClick: onNavigate,
                        className: M.cn(n, "block"),
                        children: r.jsx("p", {
                            children: "Stories"
                        })
                    }),
                    r.jsx(I.default, {
                        href: "/company",
                        onClick: onNavigate,
                        className: M.cn(n, "block"),
                        children: r.jsx("p", {
                            children: "Company"
                        })
                    }),
                    r.jsx(I.default, {
                        href: "https://app.lassie.ai/",
                        className: M.cn(n, "mt-3.5 mb-5 border-black/5 border-t pt-5.5"),
                        children: r.jsx("p", {
                            children: "Login"
                        })
                    }),
                    r.jsx(z.ButtonPrimary, {
                        as: "a",
                        href: "/book-a-demo",
                        className: "h-11.5",
                        withIcon: false,
                        theme: "tertiary",
                        fullWidth: true,
                        children: r.jsx("p", {
                            children: "Demo"
                        })
                    })
                ]
            });
        }
        function icon({ className }) {
            return r.jsxs("svg", {
                viewBox: "0 0 64 63",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className,
                children: [
                    r.jsx("title", {
                        children: "Feature"
                    }),
                    r.jsx("path", {
                        d: "M21.9466 28.8156C21.424 28.6414 21.4199 28.3603 21.9573 28.1812L41.0435 21.8191C41.572 21.643 41.8751 21.9388 41.727 22.4571L36.2738 41.5433C36.1228 42.0717 35.8182 42.0901 35.5949 41.5877L32.0004 33.5001L38.0004 25.5002L30.0004 31.5001L21.9466 28.8156Z",
                        fill: "currentColor"
                    })
                ]
            });
        }
        var G = e.i(386465);
        var H = e.i(120306);
        var $ = e.i(703224);
        var q = e.i(526296);
        var B = e.i(138980);
        var V = e.i(113329);
        var W = e.i(622030);
        var Z = e.i(517491);
        let QContext = a.createContext(null);
        let J = a.forwardRef((e, t)=>{
            [e, t] = G.useContextProps(e, t, QContext);
            let elementType = e.href && !e.isDisabled ? "a" : "span";
            let { linkProps, isPressed } = ((e, t)=>{
                let { elementType = "a", onPress, onPressStart, onPressEnd, onClick, isDisabled, ...rest } = e;
                let u = {};
                if (elementType !== "a") {
                    u = {
                        role: "link",
                        tabIndex: isDisabled ? undefined : 0
                    };
                }
                let { focusableProps } = B.useFocusable(e, t);
                let { pressProps, isPressed } = V.usePress({
                    onPress,
                    onPressStart,
                    onPressEnd,
                    onClick,
                    isDisabled,
                    ref: t
                });
                let h = H.filterDOMProps(rest, {
                    labelable: true
                });
                let m = q.mergeProps(focusableProps, pressProps);
                let x = $.useRouter();
                let p = $.useLinkProps(e);
                return {
                    isPressed,
                    linkProps: q.mergeProps(h, p, {
                        ...m,
                        ...u,
                        "aria-disabled": isDisabled || undefined,
                        "aria-current": e["aria-current"],
                        onClick: (t)=>{
                            pressProps.onClick?.(t);
                            $.handleLinkClick(t, x, e.href, e.routerOptions);
                        }
                    })
                };
            })({
                ...e,
                elementType
            }, t);
            let i = G.dom[elementType];
            let { hoverProps, isHovered } = Z.useHover(e);
            let { focusProps, isFocused, isFocusVisible } = W.useFocusRing();
            let f = G.useRenderProps({
                ...e,
                defaultClassName: "react-aria-Link",
                values: {
                    isCurrent: !!e["aria-current"],
                    isDisabled: e.isDisabled || false,
                    isPressed,
                    isHovered,
                    isFocused,
                    isFocusVisible
                }
            });
            let h = H.filterDOMProps(e, {
                global: true
            });
            delete h.onClick;
            return a.default.createElement(i, {
                ref: t,
                slot: e.slot || undefined,
                ...q.mergeProps(h, f, linkProps, hoverProps, focusProps),
                "data-focused": isFocused || undefined,
                "data-hovered": isHovered || undefined,
                "data-pressed": isPressed || undefined,
                "data-focus-visible": isFocusVisible || undefined,
                "data-current": !!e["aria-current"] || undefined,
                "data-disabled": e.isDisabled || undefined
            }, f.children);
        });
        function Y({ className, icon, title, description, isDimmed, isHovered, "data-item-index": data_item_index, onMouseEnter, onMouseLeave, onPress }) {
            let { bgTheme } = R.useNav();
            return r.jsx(J, {
                href: "/",
                "data-item-index": data_item_index,
                className: M.cn("h-19 relative block group/submenu-item w-full", className),
                onMouseEnter,
                onMouseLeave,
                onPress,
                children: r.jsxs("span", {
                    className: M.cn("w-full h-full inline-block rounded-ctas-button", "pb-4 tablet:p-pad-xs text-text-primary", "transition-colors duration-250", isHovered ? "bg-transparent" : "bg-white", "flex flex-row align-middle gap-x-pad-sm", !icon && "pl-pad-xl tablet:pl-pad-xl"),
                    children: [
                        icon && r.jsx(icon, {
                            className: M.cn("shrink-0 h-full rounded-[0.6rem]", "transition-colors duration-250", isDimmed ? M.cn("bg-surface-button-tertiary/20", bgTheme === "light" && "text-text-primary", bgTheme === "dark" && "text-white") : "bg-surface-button-tertiary text-text-primary")
                        }),
                        r.jsxs("span", {
                            className: "h-full flex flex-col align-middle justify-center",
                            children: [
                                r.jsx("p", {
                                    className: M.cn("text-body-lg tablet:text-body-sm mb-1.5 tablet:mb-0", "transition-colors duration-250", isDimmed ? M.cn("text-text-white", bgTheme === "light" && "text-text-primary", bgTheme === "dark" && "text-white") : "text-text-primary"),
                                    children: title
                                }),
                                r.jsx("p", {
                                    className: M.cn("text-body-sm tablet:text-body-sm", "transition-colors duration-250", isDimmed ? M.cn("text-text-white/30", bgTheme === "light" && "text-text-primary/30", bgTheme === "dark" && "text-white/30") : "text-text-primary/30"),
                                    children: description
                                })
                            ]
                        })
                    ]
                })
            });
        }
        function useK({ onNavigate }) {
            let tRef = a.useRef(null);
            D.useGSAP(()=>{
                if (tRef.current) {
                    s.default.fromTo(tRef.current, {
                        x: "-20%",
                        opacity: 0
                    }, {
                        x: "0",
                        opacity: 1,
                        duration: A.DURATION.fast,
                        ease: A.EASE_OUT
                    });
                }
            }, {
                scope: tRef
            });
            return r.jsxs("div", {
                ref: tRef,
                className: "w-full pt-17.5 flex flex-col justify-start",
                children: [
                    r.jsxs(I.default, {
                        href: "/",
                        onClick: onNavigate,
                        className: "py-pad-sm mb-3.75",
                        children: [
                            r.jsx("h3", {
                                className: "text-heading-md mb-1",
                                children: "What Lassie does"
                            }),
                            r.jsx("p", {
                                className: "text-button font-dmSans text-text-primary/45",
                                children: "A one liner about the product"
                            })
                        ]
                    }),
                    [
                        {
                            title: "Automated postings",
                            description: "Duis veniam commodo exercitation laborum ad",
                            icon
                        },
                        {
                            title: "What Lassie does",
                            description: "A one liner about the product",
                            icon
                        },
                        {
                            title: "What Lassie does",
                            description: "A one liner about the product",
                            icon
                        }
                    ].map((t, n)=>r.jsx(Y, {
                            "data-item-index": n,
                            title: t.title,
                            description: t.description,
                            icon: t.icon,
                            isDimmed: false,
                            isHovered: false,
                            onPress: onNavigate,
                            className: "max-w-82.5 h-17.5"
                        }, n))
                ]
            });
        }
        let X = {
            duration: 0.5 * A.DURATION.fast
        };
        let ee = {
            duration: 0.26,
            ease: "power3.inOut"
        };
        function useEt({ isOpen, closeTiming, onNavigate }) {
            let { view, setView } = useO();
            let oRef = a.useRef(null);
            let [u, setU] = a.useState(isOpen);
            let [d, setD] = a.useState(isOpen);
            if (d !== isOpen) {
                setD(isOpen);
                if (isOpen) {
                    setU(true);
                }
            }
            D.useGSAP(()=>{
                if (isOpen) {
                    s.default.fromTo(oRef.current, {
                        height: 0
                    }, {
                        height: "auto",
                        ...X
                    });
                } else {
                    s.default.to(oRef.current, {
                        height: 0,
                        ...closeTiming,
                        onComplete: ()=>setU(false)
                    });
                }
            }, {
                scope: oRef,
                dependencies: [
                    isOpen
                ]
            });
            return r.jsx("div", {
                ref: oRef,
                className: M.cn("mobile-nav-extended relative top-0 left-0 z-1 -mt-11 h-auto w-full overflow-hidden rounded-ctas-button bg-white", !isOpen && "pointer-events-none", !u && "hidden"),
                children: r.jsx("div", {
                    className: "relative left-1/2 w-[calc(100vw-32px)] -translate-x-1/2 px-pad-xs",
                    children: view === "menu" ? r.jsx(F, {
                        onClickProduct: ()=>{
                            setView("product");
                        },
                        onNavigate
                    }) : r.jsx(useK, {
                        onNavigate
                    })
                })
            });
        }
        function en({ href, children, className, onClick, ...rest }) {
            let i = href?.toString().startsWith("https");
            let className_1 = M.cn("group relative cursor-pointer outline-hidden hover:no-underline", "h-[4.4rem]", className);
            let children_1 = r.jsxs(r.Fragment, {
                children: [
                    r.jsx("span", {
                        className: M.cn("nav-item-hover absolute top-0 left-0 z-0 h-full w-full rounded-ctas-button", "bg-white")
                    }),
                    r.jsx("div", {
                        className: M.cn("nav-item relative z-1 flex h-full w-full items-center px-[1.4rem]", "text-nav leading-none", "text-text-primary"),
                        children
                    })
                ]
            });
            if (href) {
                return r.jsx(I.default, {
                    className: className_1,
                    href,
                    onClick,
                    target: i ? "_blank" : undefined,
                    ...rest,
                    children: children_1
                });
            }
            return r.jsx("button", {
                onClick,
                type: "button",
                className: className_1,
                children: children_1
            });
        }
        let ease = "power2.out";
        let es = {
            duration: 0.35 * A.DURATION.fast,
            ease
        };
        let ea = {
            duration: 0.53 * A.DURATION.fast,
            ease
        };
        let ei = {
            duration: 0.55 * ee.duration,
            ease
        };
        let el = ee;
        function useEo() {
            let eRef = a.useRef(null);
            let [t, setT] = a.useState("closed");
            let u = t !== "closed";
            let cRef = a.useRef(null);
            let [d, setD] = a.useState();
            let { view, setView } = useO();
            let { isStories } = R.useNav();
            let isOpen = t === "open";
            let g = t === "closed" || t === "closing";
            let v = t === "opening" || isOpen || isStories && t === "closing";
            let wRef = a.useRef(0);
            let bRef = a.useRef(null);
            let yRef = a.useRef(null);
            let jRef = a.useRef(null);
            let NRef = a.useRef(null);
            let kRef = a.useRef(null);
            let PRef = a.useRef(null);
            a.useLayoutEffect(()=>{
                setD(cRef.current?.offsetWidth);
            }, []);
            let L = ()=>{
                PRef.current?.kill();
                let e = s.default.timeline();
                PRef.current = e;
                return e;
            };
            let A = (e, t = es)=>{
                let n = s.default.timeline();
                n.to(yRef.current, {
                    alpha: e,
                    ...t
                }, 0);
                n.to(NRef.current, {
                    autoAlpha: 1 - e,
                    ...t
                }, 0);
                return n;
            };
            let S = (alpha, t = es)=>s.default.to(jRef.current, {
                    alpha,
                    ...t
                });
            let T = ()=>{
                if (!isStories) {
                    return d ?? 0;
                }
                let e = kRef.current?.getRect();
                if (e) {
                    return e.width - 8;
                }
                return 0;
            };
            let D = (t = el)=>{
                let n = s.default.timeline();
                let eRef_current = eRef.current;
                if (eRef_current) {
                    n.to(eRef_current, {
                        width: wRef.current,
                        autoRound: false,
                        ...t
                    }, 0);
                    n.to(cRef.current, {
                        x: 0,
                        y: 0,
                        ...t
                    }, 0);
                }
                return n;
            };
            a.useLayoutEffect(()=>{
                if (!isStories) {
                    PRef.current?.kill();
                    s.default.set([
                        yRef.current,
                        jRef.current
                    ], {
                        clearProps: "opacity,visibility"
                    });
                }
            }, [
                isStories
            ]);
            a.useLayoutEffect(()=>{
                let r;
                let a;
                if (t !== "opening") {
                    return;
                }
                let i = L();
                s.default.set(eRef.current, {
                    clearProps: "width"
                });
                s.default.set(cRef.current, {
                    clearProps: "opacity"
                });
                wRef.current = T();
                if (isStories) {
                    s.default.set([
                        yRef.current,
                        jRef.current
                    ], {
                        alpha: 0
                    });
                    if (kRef.current) {
                        i.add(kRef.current.show(), 0);
                    }
                }
                i.add((r = s.default.timeline(), (a = eRef.current) && (r.fromTo(a, {
                    width: T()
                }, {
                    width: a.getBoundingClientRect().width,
                    autoRound: false,
                    clearProps: "width",
                    ..._
                }, 0), r.to(cRef.current, {
                    x: 4,
                    y: 4,
                    ..._
                }, 0)), r), 0);
                i.call(()=>setT("open"), undefined, 0.2);
                if (isStories) {
                    i.add(A(1), 0.12);
                    i.add(S(1), 0.2);
                }
            }, [
                t,
                isStories
            ]);
            let I = ()=>{
                setT("closing");
                let e = L();
                if (!isStories) {
                    e.add(D(), 0);
                    e.call(()=>{
                        setT("closed");
                        setView("menu");
                    });
                    return;
                }
                e.add(D(C), 0);
                e.add(((e = ei)=>s.default.to([
                        cRef.current,
                        bRef.current
                    ].filter(Boolean), {
                        alpha: 0,
                        ...e
                    }))(), 0);
                e.add(S(0, ea), 0.06);
                e.add(A(0, ea), 0.06);
                e.call(()=>{
                    setT("closed");
                    setView("menu");
                }, undefined, 0.06 + ea.duration);
                if (kRef.current) {
                    e.add(kRef.current.hide(), 0);
                }
            };
            let onClick = ()=>{
                if (u) {
                    I();
                } else {
                    setT("opening");
                }
            };
            return r.jsxs("nav", {
                ref: eRef,
                "aria-label": "Main navigation",
                style: !u && d ? {
                    width: d
                } : undefined,
                className: M.cn("tablet:hidden", "fixed top-4 left-1/2", "pointer-events-auto", "z-10 w-max -translate-x-1/2", u && "z-50 h-max-content w-[calc(100vw-32px)]"),
                children: [
                    isStories && r.jsx("div", {
                        ref: NRef,
                        children: r.jsx(useE, {
                            ref: kRef,
                            frameSelector: ".mobile-nav-border",
                            onClick
                        })
                    }),
                    r.jsx("div", {
                        ref: yRef,
                        className: M.cn("mobile-nav-border pointer-events-none absolute", "-top-1 -left-1 h-full min-h-13 w-[calc(100%+8px)]", "rounded-ctas-wrapper border border-white/10 border-solid bg-stone-alpha-400 backdrop-blur-[13px]", (t === "open" || t === "closing") && "h-[calc(100%+8px)]", isStories && !u && "hidden")
                    }),
                    r.jsxs("div", {
                        ref: jRef,
                        children: [
                            r.jsxs("div", {
                                ref: cRef,
                                className: M.cn("relative z-2 flex w-max", "p-0"),
                                children: [
                                    (!isStories || u) && r.jsx(()=>{
                                        if (view !== "menu") {
                                            return r.jsxs("button", {
                                                onClick: ()=>{
                                                    setView("menu");
                                                },
                                                className: "relative top-1 left-2 z-2 flex h-11 items-center",
                                                children: [
                                                    r.jsx("span", {
                                                        "aria-hidden": true,
                                                        className: M.cn("z-0 mr-1 flex h-10 tablet:h-10.5 shrink-0 items-center justify-center rounded-ctas-button p-0", "bg-white text-text-primary"),
                                                        children: r.jsx(i.default, {
                                                            className: "block size-5 rotate-180 p-0"
                                                        })
                                                    }),
                                                    r.jsx("span", {
                                                        className: M.cn("inline-block overflow-hidden border-box text-button"),
                                                        children: r.jsx("p", {
                                                            children: "Back"
                                                        })
                                                    })
                                                ]
                                            });
                                        }
                                        return r.jsxs(en, {
                                            href: "/",
                                            className: "z-2",
                                            children: [
                                                r.jsx(l.FlowerLogo, {
                                                    className: "w-5"
                                                }),
                                                r.jsx("span", {
                                                    className: M.cn("inline-block w-13.25 overflow-hidden border-box"),
                                                    children: r.jsx(o.LassieLogo, {
                                                        className: "ml-[0.6rem] w-11.75"
                                                    })
                                                })
                                            ]
                                        });
                                    }, {}),
                                    !isStories && r.jsx(en, {
                                        onClick,
                                        children: r.jsx("span", {
                                            className: M.cn(!g && "opacity-0"),
                                            children: "Menu"
                                        })
                                    })
                                ]
                            }),
                            r.jsx(useEt, {
                                isOpen,
                                closeTiming: isStories ? C : el,
                                onNavigate: I
                            }),
                            v && r.jsx("button", {
                                ref: bRef,
                                onClick: I,
                                className: "absolute top-0 right-1 z-2 block h-11 w-16.5 justify-center align-middle",
                                children: r.jsx("p", {
                                    className: "text-nav",
                                    children: "Close"
                                })
                            })
                        ]
                    })
                ]
            });
        }
        var eu = e.i(809393);
        var ec = e.i(662576);
        var ed = e.i(300778);
        let ef = ec.default(()=>e.A(10218).then((e)=>e.Nav), {
            loadableGenerated: {
                modules: [
                    932828
                ]
            }
        });
        let eh = [
            "/get-started"
        ];
        function useEm() {
            let e = ed.usePathname();
            let { setCollapsed, collapsed, isStories } = R.useNav();
            let uRef = a.useRef(null);
            let cRef = a.useRef(null);
            let dRef = a.useRef(null);
            let fRef = a.useRef(null);
            let items = [
                ...isStories ? [] : [
                    {
                        href: "/stories",
                        content: "Stories"
                    }
                ],
                {
                    href: "/company",
                    content: "Company"
                }
            ];
            a.useEffect(()=>{
                setCollapsed(window.scrollY >= 400);
                let e = ()=>{
                    let window_scrollY = window.scrollY;
                    if (!collapsed && window_scrollY >= 400) {
                        setCollapsed(true);
                    } else if (window_scrollY <= 360) {
                        setCollapsed(false);
                    }
                };
                e();
                window.addEventListener("scroll", e, {
                    passive: true
                });
                return ()=>{
                    window.removeEventListener("scroll", e);
                };
            }, [
                e,
                setCollapsed
            ]);
            D.useGSAP(()=>{
                if (!isStories) {
                    return void x();
                }
                p();
                let uRef_current = uRef.current;
                let dRef_current = dRef.current;
                if (!uRef_current || !dRef_current) {
                    return;
                }
                let n = false;
                let r = (e)=>{
                    if (e !== n) {
                        n = e;
                        if (e) {
                            x();
                        } else {
                            p();
                        }
                    }
                };
                let s = (e)=>{
                    let t;
                    r(!!(t = fRef.current?.getRect()) && e.clientX >= t.left && e.clientX <= t.right);
                };
                let a = ()=>r(false);
                let l = ()=>r(true);
                let o = (t)=>{
                    if (!uRef_current.contains(t.relatedTarget)) {
                        r(false);
                    }
                };
                uRef_current.addEventListener("mousemove", s);
                uRef_current.addEventListener("mouseleave", a);
                uRef_current.addEventListener("focusin", l);
                uRef_current.addEventListener("focusout", o);
                return ()=>{
                    uRef_current.removeEventListener("mousemove", s);
                    uRef_current.removeEventListener("mouseleave", a);
                    uRef_current.removeEventListener("focusin", l);
                    uRef_current.removeEventListener("focusout", o);
                };
            }, {
                scope: uRef,
                dependencies: [
                    isStories
                ]
            });
            let m = (e)=>{
                let t = s.default.timeline();
                s.default.killTweensOf(cRef.current);
                t.to(cRef.current, {
                    alpha: +!!e,
                    duration: 0.35 * A.DURATION.fast,
                    ease: "power2.out",
                    overwrite: "auto"
                });
                return t;
            };
            let x = ()=>{
                let e = s.default.timeline();
                if (fRef.current) {
                    e.add(fRef.current.show());
                }
                e.add(m(true), 0.5);
            };
            let p = ()=>{
                let e = s.default.timeline();
                e.add(m(false));
                if (fRef.current) {
                    e.add(fRef.current.hide());
                }
            };
            if (eh.includes(e)) {
                return null;
            }
            return r.jsxs("div", {
                ref: uRef,
                className: M.cn("fixed top-0 left-0 z-10 h-23 w-screen", "pointer-events-none", isStories && "tablet:pointer-events-auto"),
                children: [
                    isStories && r.jsx("div", {
                        ref: dRef,
                        className: "pointer-events-none tablet:block hidden",
                        children: r.jsx(useE, {
                            ref: fRef
                        })
                    }),
                    r.jsx("div", {
                        ref: cRef,
                        className: "pointer-events-auto",
                        children: r.jsx(ef, {
                            className: M.cn("main-nav fixed top-4 left-1/2", "z-10 tablet:flex hidden -translate-x-1/2"),
                            logoHref: "/",
                            onMouseEnter: ()=>setCollapsed(false),
                            onFocus: ()=>setCollapsed(false),
                            logoAriaLabel: "Lassie home",
                            logoIcon: r.jsx(l.FlowerLogo, {
                                className: "w-[21px]"
                            }),
                            logo: r.jsx(o.LassieLogo, {
                                className: "ml-[0.6rem] w-[47px]"
                            }),
                            items
                        })
                    })
                ]
            });
        }
        function ex() {
            return r.jsx(ef, {
                mode: "index",
                className: eu.default("fixed top-4 right-5.5", "z-10 tablet:flex hidden"),
                items: [
                    {
                        href: "https://app.lassie.ai/",
                        content: "Login"
                    },
                    {
                        href: "/book-a-demo",
                        content: "Demo",
                        active: true
                    }
                ]
            });
        }
        e.s([
            "Header",
            0,
            ()=>{
                let { isStories } = R.useNav();
                return r.jsxs(r.Fragment, {
                    children: [
                        r.jsx(useEm, {}),
                        !isStories && r.jsx(ex, {}),
                        r.jsx(useT, {
                            children: r.jsx(useEo, {})
                        })
                    ]
                });
            }
        ], 250705);
    },
    752642,
    (e, t, n)=>{
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.default = ({ html, height = null, width = null, children, dataNtpc = "" })=>{
            s.useEffect(()=>{
                if (dataNtpc) {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: `next-third-parties-${dataNtpc}`
                        }
                    });
                }
            }, [
                dataNtpc
            ]);
            return r.jsxs(r.Fragment, {
                children: [
                    children,
                    html ? r.jsx("div", {
                        style: {
                            height: height != null ? `${height}px` : "auto",
                            width: width != null ? `${width}px` : "auto"
                        },
                        "data-ntpc": dataNtpc,
                        dangerouslySetInnerHTML: {
                            __html: html
                        }
                    }) : null
                ]
            });
        };
        let r = e.r(281889);
        let s = e.r(513679);
    },
    751079,
    (e, t, n)=>{
        "use strict";
        let r;
        var s = e.e && e.e.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.GoogleAnalytics = (e)=>{
            let { gaId, debugMode, dataLayerName = "dataLayer", nonce } = e;
            if (r === undefined) {
                r = dataLayerName;
            }
            i.useEffect(()=>{
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-ga"
                    }
                });
            }, []);
            return a.jsxs(a.Fragment, {
                children: [
                    a.jsx(l.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${debugMode ? ",{ 'debug_mode': true }" : ""});`
                        },
                        nonce
                    }),
                    a.jsx(l.default, {
                        id: "_next-ga",
                        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                        nonce
                    })
                ]
            });
        };
        n.sendGAEvent = function() {
            if (r === undefined) {
                console.warn("@next/third-parties: GA has not been initialized");
            } else if (window[r]) {
                window[r].push(arguments);
            } else {
                console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`);
            }
        };
        let a = e.r(281889);
        let i = e.r(513679);
        let l = s(e.r(546619));
    },
    322060,
    (e, t, n)=>{
        "use strict";
        var r = e.e && e.e.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.sendGTMEvent = undefined;
        n.GoogleTagManager = (e)=>{
            let { gtmId, gtmScriptUrl, dataLayerName = "dataLayer", auth, preview, dataLayer, nonce } = e;
            l = dataLayerName;
            let f = new URL(gtmScriptUrl || "https://www.googletagmanager.com/gtm.js");
            if (gtmId) {
                f.searchParams.set("id", gtmId);
            }
            if (dataLayerName !== "dataLayer") {
                f.searchParams.set("l", dataLayerName);
            }
            if (auth) {
                f.searchParams.set("gtm_auth", auth);
            }
            if (preview) {
                f.searchParams.set("gtm_preview", preview);
                f.searchParams.set("gtm_cookies_win", "x");
            }
            a.useEffect(()=>{
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-gtm"
                    }
                });
            }, []);
            return s.jsxs(s.Fragment, {
                children: [
                    s.jsx(i.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ""}
      })(window,'${dataLayerName}');`
                        },
                        nonce
                    }),
                    s.jsx(i.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: f.href,
                        nonce
                    })
                ]
            });
        };
        let s = e.r(281889);
        let a = e.r(513679);
        let i = r(e.r(546619));
        let l = "dataLayer";
        n.sendGTMEvent = (e, t)=>{
            let n = t || l;
            window[n] = window[n] || [];
            window[n].push(e);
        };
    },
    546619,
    (e, t, n)=>{
        t.exports = e.r(278736);
    }
]);
