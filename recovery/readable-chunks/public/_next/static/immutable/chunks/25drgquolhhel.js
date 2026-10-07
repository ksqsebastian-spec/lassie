;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "258cebb3-abdf-39c4-1a96-24e1e6bc249b";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    748689,
    (t, e, i)=>{
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var r = "~";
        function n() {}
        function a(t, e, i) {
            this.fn = t;
            this.context = e;
            this.once = i || false;
        }
        function h(t, e, i, s, n) {
            if (typeof i !== "function") {
                throw TypeError("The listener must be a function");
            }
            const h = new a(i, s || t, n);
            const o = r ? r + e : e;
            if (t._events[o]) {
                if (t._events[o].fn) {
                    t._events[o] = [
                        t._events[o],
                        h
                    ];
                } else {
                    t._events[o].push(h);
                }
            } else {
                t._events[o] = h;
                t._eventsCount++;
            }
            return t;
        }
        function o(t, e) {
            if (--t._eventsCount == 0) {
                t._events = new n;
            } else {
                delete t._events[e];
            }
        }
        class u {
            constructor(){
                this._events = new n;
                this._eventsCount = 0;
            }
            eventNames() {
                let t;
                let e;
                const i = [];
                if (this._eventsCount === 0) {
                    return i;
                }
                for(e in t = this._events){
                    if (hasOwnProperty.call(t, e)) {
                        i.push(r ? e.slice(1) : e);
                    }
                }
                if (Object.getOwnPropertySymbols) {
                    return i.concat(Object.getOwnPropertySymbols(t));
                }
                return i;
            }
            listeners(t) {
                const e = r ? r + t : t;
                const i = this._events[e];
                if (!i) {
                    return [];
                }
                if (i.fn) {
                    return [
                        i.fn
                    ];
                }
                for(var s = 0, n = i.length, a = Array(n); s < n; s++){
                    a[s] = i[s].fn;
                }
                return a;
            }
            listenerCount(t) {
                const e = r ? r + t : t;
                const i = this._events[e];
                if (i) {
                    if (i.fn) {
                        return 1;
                    }
                    return i.length;
                }
                return 0;
            }
            emit(t, e, i, s, n, a) {
                const h = r ? r + t : t;
                if (!this._events[h]) {
                    return false;
                }
                let o;
                let u;
                const l = this._events[h];
                const arguments_length = arguments.length;
                if (l.fn) {
                    if (l.once) {
                        this.removeListener(t, l.fn, undefined, true);
                    }
                    switch(arguments_length){
                        case 1:
                            l.fn.call(l.context);
                            return true;
                        case 2:
                            l.fn.call(l.context, e);
                            return true;
                        case 3:
                            l.fn.call(l.context, e, i);
                            return true;
                        case 4:
                            l.fn.call(l.context, e, i, s);
                            return true;
                        case 5:
                            l.fn.call(l.context, e, i, s, n);
                            return true;
                        case 6:
                            l.fn.call(l.context, e, i, s, n, a);
                            return true;
                    }
                    u = 1;
                    for(o = Array(arguments_length - 1); u < arguments_length; u++){
                        o[u - 1] = arguments[u];
                    }
                    l.fn.apply(l.context, o);
                } else {
                    let c;
                    const f = l.length;
                    for(u = 0; u < f; u++){
                        if (l[u].once) {
                            this.removeListener(t, l[u].fn, undefined, true);
                        }
                        switch(arguments_length){
                            case 1:
                                l[u].fn.call(l[u].context);
                                break;
                            case 2:
                                l[u].fn.call(l[u].context, e);
                                break;
                            case 3:
                                l[u].fn.call(l[u].context, e, i);
                                break;
                            case 4:
                                l[u].fn.call(l[u].context, e, i, s);
                                break;
                            default:
                                if (!o) {
                                    c = 1;
                                    for(o = Array(arguments_length - 1); c < arguments_length; c++){
                                        o[c - 1] = arguments[c];
                                    }
                                }
                                l[u].fn.apply(l[u].context, o);
                        }
                    }
                }
                return true;
            }
            on(t, e, i) {
                return h(this, t, e, i, false);
            }
            once(t, e, i) {
                return h(this, t, e, i, true);
            }
            removeListener(t, e, i, s) {
                const n = r ? r + t : t;
                if (!this._events[n]) {
                    return this;
                }
                if (!e) {
                    o(this, n);
                    return this;
                }
                const a = this._events[n];
                if (a.fn) {
                    if (!(a.fn !== e || s && !a.once || i && a.context !== i)) {
                        o(this, n);
                    }
                } else {
                    for(var h = 0, u = [], l = a.length; h < l; h++){
                        if (a[h].fn !== e || s && !a[h].once || i && a[h].context !== i) {
                            u.push(a[h]);
                        }
                    }
                    if (u.length) {
                        this._events[n] = u.length === 1 ? u[0] : u;
                    } else {
                        o(this, n);
                    }
                }
                return this;
            }
            removeAllListeners(t) {
                let e;
                if (t) {
                    e = r ? r + t : t;
                    if (this._events[e]) {
                        o(this, e);
                    }
                } else {
                    this._events = new n;
                    this._eventsCount = 0;
                }
                return this;
            }
        }
        if (Object.create) {
            n.prototype = Object.create(null);
            if (!new n().__proto__) {
                r = false;
            }
        }
        u.prototype.off = u.prototype.removeListener;
        u.prototype.addListener = u.prototype.on;
        u.prefixed = r;
        u.EventEmitter = u;
        e.exports = u;
    },
    263524,
    (t)=>{
        "use strict";
        let _default = t.i(748689).default;
        t.s([
            "default",
            0,
            _default
        ]);
    },
    222735,
    (t)=>{
        "use strict";
        var e = {
            grad: 0.9,
            turn: 360,
            rad: 360 / (2 * Math.PI)
        };
        var i = (t)=>{
            if (typeof t === "string") {
                return t.length > 0;
            }
            return typeof t === "number";
        };
        var s = (t, e = 0, i = 10 ** e)=>Math.round(i * t) / i + 0;
        var r = (t, e = 0, i = 1)=>{
            if (t > i) {
                return i;
            }
            if (t > e) {
                return t;
            }
            return e;
        };
        var n = (t)=>{
            if ((t = isFinite(t) ? t % 360 : 0) > 0) {
                return t;
            }
            return t + 360;
        };
        var a = (t)=>({
                r: r(t.r, 0, 255),
                g: r(t.g, 0, 255),
                b: r(t.b, 0, 255),
                a: r(t.a)
            });
        var h = (rgba)=>({
                r: s(rgba.r),
                g: s(rgba.g),
                b: s(rgba.b),
                a: s(rgba.a, 3)
            });
        var o = /^#([0-9a-f]{3,8})$/i;
        var u = (t)=>{
            const e = t.toString(16);
            if (e.length < 2) {
                return "0" + e;
            }
            return e;
        };
        var l = (t)=>{
            const e = t.r;
            const i = t.g;
            const s = t.b;
            const r = t.a;
            const n = Math.max(e, i, s);
            const a = n - Math.min(e, i, s);
            const h = a ? n === e ? (i - s) / a : n === i ? 2 + (s - e) / a : 4 + (e - i) / a : 0;
            return {
                h: 60 * (h < 0 ? h + 6 : h),
                s: n ? a / n * 100 : 0,
                v: n / 255 * 100,
                a: r
            };
        };
        var d = (t)=>{
            let e = t.h;
            let i = t.s;
            let s = t.v;
            const r = t.a;
            e = e / 360 * 6;
            i /= 100;
            s /= 100;
            const n = Math.floor(e);
            const a = s * (1 - i);
            const h = s * (1 - (e - n) * i);
            const o = s * (1 - (1 - e + n) * i);
            const u = n % 6;
            return {
                r: 255 * [
                    s,
                    h,
                    a,
                    a,
                    o,
                    s
                ][u],
                g: 255 * [
                    o,
                    s,
                    s,
                    h,
                    a,
                    a
                ][u],
                b: 255 * [
                    a,
                    a,
                    o,
                    s,
                    s,
                    h
                ][u],
                a: r
            };
        };
        var c = (t)=>({
                h: n(t.h),
                s: r(t.s, 0, 100),
                l: r(t.l, 0, 100),
                a: r(t.a)
            });
        var f = (t)=>({
                h: s(t.h),
                s: s(t.s),
                l: s(t.l),
                a: s(t.a, 3)
            });
        var m = (t)=>{
            let e;
            let i;
            return d((e = t.s, {
                h: t.h,
                s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0,
                v: i + e,
                a: t.a
            }));
        };
        var p = (t)=>{
            let e;
            let i;
            let s;
            let r;
            return {
                h: (e = l(t)).h,
                s: (r = (200 - (i = e.s)) * (s = e.v) / 100) > 0 && r < 200 ? i * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
                l: r / 2,
                a: e.a
            };
        };
        var g = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
        var y = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
        var x = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
        var b = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
        var _ = {
            string: [
                [
                    (t)=>{
                        const e = o.exec(t);
                        if (e) {
                            if ((t = e[1]).length <= 4) {
                                return {
                                    r: parseInt(t[0] + t[0], 16),
                                    g: parseInt(t[1] + t[1], 16),
                                    b: parseInt(t[2] + t[2], 16),
                                    a: t.length === 4 ? s(parseInt(t[3] + t[3], 16) / 255, 2) : 1
                                };
                            }
                            if (t.length === 6 || t.length === 8) {
                                return {
                                    r: parseInt(t.substr(0, 2), 16),
                                    g: parseInt(t.substr(2, 2), 16),
                                    b: parseInt(t.substr(4, 2), 16),
                                    a: t.length === 8 ? s(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
                                };
                            }
                            return null;
                        }
                        return null;
                    },
                    "hex"
                ],
                [
                    (t)=>{
                        const e = x.exec(t) || b.exec(t);
                        if (e) {
                            if (e[2] !== e[4] || e[4] !== e[6]) {
                                return null;
                            }
                            return a({
                                r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
                                g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
                                b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
                                a: e[7] === undefined ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
                            });
                        }
                        return null;
                    },
                    "rgb"
                ],
                [
                    (t)=>{
                        let i;
                        let s;
                        const r = g.exec(t) || y.exec(t);
                        if (r) {
                            return m(c({
                                h: (i = r[1], (s = r[2]) === undefined && (s = "deg"), Number(i) * (e[s] || 1)),
                                s: Number(r[3]),
                                l: Number(r[4]),
                                a: r[5] === undefined ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
                            }));
                        }
                        return null;
                    },
                    "hsl"
                ]
            ],
            object: [
                [
                    (t)=>{
                        const e = t.r;
                        const s = t.g;
                        const r = t.b;
                        const n = t.a;
                        if (i(e) && i(s) && i(r)) {
                            return a({
                                r: Number(e),
                                g: Number(s),
                                b: Number(r),
                                a: Number(n === undefined ? 1 : n)
                            });
                        }
                        return null;
                    },
                    "rgb"
                ],
                [
                    (t)=>{
                        const e = t.h;
                        const s = t.s;
                        const r = t.l;
                        const n = t.a;
                        if (i(e) && i(s) && i(r)) {
                            return m(c({
                                h: Number(e),
                                s: Number(s),
                                l: Number(r),
                                a: Number(n === undefined ? 1 : n)
                            }));
                        }
                        return null;
                    },
                    "hsl"
                ],
                [
                    (t)=>{
                        let e;
                        const s = t.h;
                        const a = t.s;
                        const h = t.v;
                        const o = t.a;
                        if (i(s) && i(a) && i(h)) {
                            return d({
                                h: n((e = {
                                    h: Number(s),
                                    s: Number(a),
                                    v: Number(h),
                                    a: Number(o === undefined ? 1 : o)
                                }).h),
                                s: r(e.s, 0, 100),
                                v: r(e.v, 0, 100),
                                a: r(e.a)
                            });
                        }
                        return null;
                    },
                    "hsv"
                ]
            ]
        };
        var v = (t, e)=>{
            for(let i = 0; i < e.length; i++){
                const s = e[i][0](t);
                if (s) {
                    return [
                        s,
                        e[i][1]
                    ];
                }
            }
            return [
                null,
                undefined
            ];
        };
        var w = (rgba, e)=>{
            const i = p(rgba);
            return {
                h: i.h,
                s: r(i.s + 100 * e, 0, 100),
                l: i.l,
                a: i.a
            };
        };
        var M = (rgba)=>(299 * rgba.r + 587 * rgba.g + 114 * rgba.b) / 1000 / 255;
        var A = (rgba, e)=>{
            const i = p(rgba);
            return {
                h: i.h,
                s: i.s,
                l: r(i.l + 100 * e, 0, 100),
                a: i.a
            };
        };
        class E {
            constructor(t){
                this.parsed = (typeof t === "string" ? v(t.trim(), _.string) : typeof t === "object" && t !== null ? v(t, _.object) : [
                    null,
                    undefined
                ])[0];
                this.rgba = this.parsed || {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                };
            }
            isValid() {
                return this.parsed !== null;
            }
            brightness() {
                return s(M(this.rgba), 2);
            }
            isDark() {
                return M(this.rgba) < 0.5;
            }
            isLight() {
                return M(this.rgba) >= 0.5;
            }
            toHex() {
                let t;
                let e;
                let i;
                let r;
                let n;
                let a;
                e = (t = h(this.rgba)).r;
                i = t.g;
                r = t.b;
                a = (n = t.a) < 1 ? u(s(255 * n)) : "";
                return "#" + u(e) + u(i) + u(r) + a;
            }
            toRgb() {
                return h(this.rgba);
            }
            toRgbString() {
                let t;
                let e;
                let i;
                let s;
                let r;
                e = (t = h(this.rgba)).r;
                i = t.g;
                s = t.b;
                if ((r = t.a) < 1) {
                    return "rgba(" + e + ", " + i + ", " + s + ", " + r + ")";
                }
                return "rgb(" + e + ", " + i + ", " + s + ")";
            }
            toHsl() {
                return f(p(this.rgba));
            }
            toHslString() {
                let t;
                let e;
                let i;
                let s;
                let r;
                e = (t = f(p(this.rgba))).h;
                i = t.s;
                s = t.l;
                if ((r = t.a) < 1) {
                    return "hsla(" + e + ", " + i + "%, " + s + "%, " + r + ")";
                }
                return "hsl(" + e + ", " + i + "%, " + s + "%)";
            }
            toHsv() {
                let t;
                return {
                    h: s((t = l(this.rgba)).h),
                    s: s(t.s),
                    v: s(t.v),
                    a: s(t.a, 3)
                };
            }
            invert() {
                let t;
                return P({
                    r: 255 - (t = this.rgba).r,
                    g: 255 - t.g,
                    b: 255 - t.b,
                    a: t.a
                });
            }
            saturate(t = 0.1) {
                return P(w(this.rgba, t));
            }
            desaturate(t = 0.1) {
                return P(w(this.rgba, -t));
            }
            grayscale() {
                return P(w(this.rgba, -1));
            }
            lighten(t = 0.1) {
                return P(A(this.rgba, t));
            }
            darken(t = 0.1) {
                return P(A(this.rgba, -t));
            }
            rotate(t = 15) {
                return this.hue(this.hue() + t);
            }
            alpha(t) {
                let e;
                if (typeof t === "number") {
                    return P({
                        r: (e = this.rgba).r,
                        g: e.g,
                        b: e.b,
                        a: t
                    });
                }
                return s(this.rgba.a, 3);
            }
            hue(h_1) {
                const e = p(this.rgba);
                if (typeof h_1 === "number") {
                    return P({
                        h: h_1,
                        s: e.s,
                        l: e.l,
                        a: e.a
                    });
                }
                return s(e.h);
            }
            isEqual(t) {
                return this.toHex() === P(t).toHex();
            }
        }
        var P = (t)=>{
            if (t instanceof E) {
                return t;
            }
            return new E(t);
        };
        var T = [];
        [
            (t, e)=>{
                const i = {
                    white: "#ffffff",
                    bisque: "#ffe4c4",
                    blue: "#0000ff",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    azure: "#f0ffff",
                    whitesmoke: "#f5f5f5",
                    papayawhip: "#ffefd5",
                    plum: "#dda0dd",
                    blanchedalmond: "#ffebcd",
                    black: "#000000",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gainsboro: "#dcdcdc",
                    cornsilk: "#fff8dc",
                    cornflowerblue: "#6495ed",
                    burlywood: "#deb887",
                    aquamarine: "#7fffd4",
                    beige: "#f5f5dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkkhaki: "#bdb76b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkgrey: "#a9a9a9",
                    peachpuff: "#ffdab9",
                    darkmagenta: "#8b008b",
                    darkred: "#8b0000",
                    darkorchid: "#9932cc",
                    darkorange: "#ff8c00",
                    darkslateblue: "#483d8b",
                    gray: "#808080",
                    darkslategray: "#2f4f4f",
                    darkslategrey: "#2f4f4f",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    wheat: "#f5deb3",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    ghostwhite: "#f8f8ff",
                    darkviolet: "#9400d3",
                    magenta: "#ff00ff",
                    green: "#008000",
                    dodgerblue: "#1e90ff",
                    grey: "#808080",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    blueviolet: "#8a2be2",
                    forestgreen: "#228b22",
                    lawngreen: "#7cfc00",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    fuchsia: "#ff00ff",
                    brown: "#a52a2a",
                    maroon: "#800000",
                    mediumblue: "#0000cd",
                    lightcoral: "#f08080",
                    darkturquoise: "#00ced1",
                    lightcyan: "#e0ffff",
                    ivory: "#fffff0",
                    lightyellow: "#ffffe0",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    linen: "#faf0e6",
                    mediumaquamarine: "#66cdaa",
                    lemonchiffon: "#fffacd",
                    lime: "#00ff00",
                    khaki: "#f0e68c",
                    mediumseagreen: "#3cb371",
                    limegreen: "#32cd32",
                    mediumspringgreen: "#00fa9a",
                    lightskyblue: "#87cefa",
                    lightblue: "#add8e6",
                    midnightblue: "#191970",
                    lightpink: "#ffb6c1",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    mintcream: "#f5fffa",
                    lightslategray: "#778899",
                    lightslategrey: "#778899",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    mediumvioletred: "#c71585",
                    powderblue: "#b0e0e6",
                    palegoldenrod: "#eee8aa",
                    oldlace: "#fdf5e6",
                    paleturquoise: "#afeeee",
                    mediumturquoise: "#48d1cc",
                    mediumorchid: "#ba55d3",
                    rebeccapurple: "#663399",
                    lightsteelblue: "#b0c4de",
                    mediumslateblue: "#7b68ee",
                    thistle: "#d8bfd8",
                    tan: "#d2b48c",
                    orchid: "#da70d6",
                    mediumpurple: "#9370db",
                    purple: "#800080",
                    pink: "#ffc0cb",
                    skyblue: "#87ceeb",
                    springgreen: "#00ff7f",
                    palegreen: "#98fb98",
                    red: "#ff0000",
                    yellow: "#ffff00",
                    slateblue: "#6a5acd",
                    lavenderblush: "#fff0f5",
                    peru: "#cd853f",
                    palevioletred: "#db7093",
                    violet: "#ee82ee",
                    teal: "#008080",
                    slategray: "#708090",
                    slategrey: "#708090",
                    aliceblue: "#f0f8ff",
                    darkseagreen: "#8fbc8f",
                    darkolivegreen: "#556b2f",
                    greenyellow: "#adff2f",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    tomato: "#ff6347",
                    silver: "#c0c0c0",
                    sienna: "#a0522d",
                    lavender: "#e6e6fa",
                    lightgreen: "#90ee90",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    steelblue: "#4682b4",
                    royalblue: "#4169e1",
                    turquoise: "#40e0d0",
                    yellowgreen: "#9acd32",
                    salmon: "#fa8072",
                    saddlebrown: "#8b4513",
                    sandybrown: "#f4a460",
                    rosybrown: "#bc8f8f",
                    darksalmon: "#e9967a",
                    lightgoldenrodyellow: "#fafad2",
                    snow: "#fffafa",
                    lightgrey: "#d3d3d3",
                    lightgray: "#d3d3d3",
                    dimgray: "#696969",
                    dimgrey: "#696969",
                    olivedrab: "#6b8e23",
                    olive: "#808000"
                };
                const s = {};
                for(const r in i){
                    s[i[r]] = r;
                }
                const n = {};
                t.prototype.toName = function(e) {
                    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) {
                        return "transparent";
                    }
                    let r;
                    const a = s[this.toHex()];
                    if (a) {
                        return a;
                    }
                    if (e == null ? undefined : e.closest) {
                        const h = this.toRgb();
                        let o = Infinity;
                        let u = "black";
                        if (!n.length) {
                            for(const l in i){
                                n[l] = new t(i[l]).toRgb();
                            }
                        }
                        for(const d in i){
                            r = n[d];
                            const c = (h.r - r.r) ** 2 + (h.g - r.g) ** 2 + (h.b - r.b) ** 2;
                            if (c < o) {
                                o = c;
                                u = d;
                            }
                        }
                        return u;
                    }
                };
                e.string.push([
                    (e)=>{
                        const s = e.toLowerCase();
                        const r = s === "transparent" ? "#0000" : i[s];
                        if (r) {
                            return new t(r).toRgb();
                        }
                        return null;
                    },
                    "name"
                ]);
            }
        ].forEach((t)=>{
            if (T.indexOf(t) < 0) {
                t(E, _);
                T.push(t);
            }
        });
        let C = class t {
            constructor(t = 16777215){
                this._value = null;
                this._components = new Float32Array(4);
                this._components.fill(1);
                this._int = 16777215;
                this.value = t;
            }
            get red() {
                return this._components[0];
            }
            get green() {
                return this._components[1];
            }
            get blue() {
                return this._components[2];
            }
            get alpha() {
                return this._components[3];
            }
            setValue(t) {
                this.value = t;
                return this;
            }
            set value(e) {
                if (e instanceof t) {
                    this._value = this._cloneSource(e._value);
                    this._int = e._int;
                    this._components.set(e._components);
                } else if (e === null) {
                    throw Error("Cannot set Color#value to null");
                } else {
                    if (!(this._value !== null && this._isSourceEqual(this._value, e))) {
                        this._value = this._cloneSource(e);
                        this._normalize(this._value);
                    }
                }
            }
            get value() {
                return this._value;
            }
            _cloneSource(t) {
                if (typeof t === "string" || typeof t === "number" || t instanceof Number || t === null) ;
                else if (Array.isArray(t) || ArrayBuffer.isView(t)) {
                    return t.slice(0);
                } else if (typeof t === "object" && t !== null) {
                    return {
                        ...t
                    };
                }
                return t;
            }
            _isSourceEqual(t, e) {
                let i = typeof t;
                if (i !== typeof e) {
                    return false;
                }
                if (i === "number" || i === "string" || t instanceof Number) ;
                else if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
                    return t.length === e.length && t.every((t, i)=>t === e[i]);
                } else if (t !== null && e !== null) {
                    let i = Object.keys(t);
                    let s = Object.keys(e);
                    return i.length === s.length && i.every((i)=>t[i] === e[i]);
                }
                return t === e;
            }
            toRgba() {
                let [t, e, i, s] = this._components;
                return {
                    r: t,
                    g: e,
                    b: i,
                    a: s
                };
            }
            toRgb() {
                let [t, e, i] = this._components;
                return {
                    r: t,
                    g: e,
                    b: i
                };
            }
            toRgbaString() {
                let [t, e, i] = this.toUint8RgbArray();
                return `rgba(${t},${e},${i},${this.alpha})`;
            }
            toUint8RgbArray(t) {
                let [e, i, s] = this._components;
                if (!this._arrayRgb) {
                    this._arrayRgb = [];
                }
                if (!t) {
                    t = this._arrayRgb;
                }
                t[0] = Math.round(255 * e);
                t[1] = Math.round(255 * i);
                t[2] = Math.round(255 * s);
                return t;
            }
            toArray(t) {
                if (!this._arrayRgba) {
                    this._arrayRgba = [];
                }
                if (!t) {
                    t = this._arrayRgba;
                }
                let [e, i, s, r] = this._components;
                t[0] = e;
                t[1] = i;
                t[2] = s;
                t[3] = r;
                return t;
            }
            toRgbArray(t) {
                if (!this._arrayRgb) {
                    this._arrayRgb = [];
                }
                if (!t) {
                    t = this._arrayRgb;
                }
                let [e, i, s] = this._components;
                t[0] = e;
                t[1] = i;
                t[2] = s;
                return t;
            }
            toNumber() {
                return this._int;
            }
            toBgrNumber() {
                let [t, e, i] = this.toUint8RgbArray();
                return (i << 16) + (e << 8) + t;
            }
            toLittleEndianNumber() {
                let _int = this._int;
                return (_int >> 16) + (65280 & _int) + ((255 & _int) << 16);
            }
            multiply(e) {
                let [i, s, r, n] = t._temp.setValue(e)._components;
                this._components[0] *= i;
                this._components[1] *= s;
                this._components[2] *= r;
                this._components[3] *= n;
                this._refreshInt();
                this._value = null;
                return this;
            }
            premultiply(t, e = true) {
                if (e) {
                    this._components[0] *= t;
                    this._components[1] *= t;
                    this._components[2] *= t;
                }
                this._components[3] = t;
                this._refreshInt();
                this._value = null;
                return this;
            }
            toPremultiplied(t, e = true) {
                if (t === 1) {
                    return -16777216 + this._int;
                }
                if (t === 0) {
                    if (e) {
                        return 0;
                    }
                    return this._int;
                }
                let i = this._int >> 16 & 255;
                let s = this._int >> 8 & 255;
                let r = 255 & this._int;
                if (e) {
                    i = i * t + 0.5 | 0;
                    s = s * t + 0.5 | 0;
                    r = r * t + 0.5 | 0;
                }
                return (255 * t << 24) + (i << 16) + (s << 8) + r;
            }
            toHex() {
                let t = this._int.toString(16);
                return `#${"000000".substring(0, 6 - t.length) + t}`;
            }
            toHexa() {
                let t = Math.round(255 * this._components[3]).toString(16);
                return this.toHex() + "00".substring(0, 2 - t.length) + t;
            }
            setAlpha(t) {
                this._components[3] = this._clamp(t);
                this._value = null;
                return this;
            }
            _normalize(e) {
                let i;
                let s;
                let r;
                let n;
                if ((typeof e === "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
                    let t = e;
                    i = (t >> 16 & 255) / 255;
                    s = (t >> 8 & 255) / 255;
                    r = (255 & t) / 255;
                    n = 1;
                } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) {
                    e = this._clamp(e);
                    [i, s, r, n = 1] = e;
                } else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) {
                    e = this._clamp(e, 0, 255);
                    [i, s, r, n = 255] = e;
                    i /= 255;
                    s /= 255;
                    r /= 255;
                    n /= 255;
                } else if (typeof e === "string" || typeof e === "object") {
                    if (typeof e === "string") {
                        let i = t.HEX_PATTERN.exec(e);
                        if (i) {
                            e = `#${i[2]}`;
                        }
                    }
                    let a = P(e);
                    if (a.isValid()) {
                        ({ r: i, g: s, b: r, a: n } = a.rgba);
                        i /= 255;
                        s /= 255;
                        r /= 255;
                    }
                }
                if (i !== undefined) {
                    this._components[0] = i;
                    this._components[1] = s;
                    this._components[2] = r;
                    this._components[3] = n;
                    this._refreshInt();
                } else {
                    throw Error(`Unable to convert color ${e}`);
                }
            }
            _refreshInt() {
                this._clamp(this._components);
                let [t, e, i] = this._components;
                this._int = (255 * t << 16) + (255 * e << 8) + (255 * i | 0);
            }
            _clamp(t, e = 0, i = 1) {
                if (typeof t === "number") {
                    return Math.min(Math.max(t, e), i);
                }
                t.forEach((s, r)=>{
                    t[r] = Math.min(Math.max(s, e), i);
                });
                return t;
            }
            static isColorLike(e) {
                return typeof e === "number" || typeof e === "string" || e instanceof Number || e instanceof t || Array.isArray(e) || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || e.r !== undefined && e.g !== undefined && e.b !== undefined || e.r !== undefined && e.g !== undefined && e.b !== undefined && e.a !== undefined || e.h !== undefined && e.s !== undefined && e.l !== undefined || e.h !== undefined && e.s !== undefined && e.l !== undefined && e.a !== undefined || e.h !== undefined && e.s !== undefined && e.v !== undefined || e.h !== undefined && e.s !== undefined && e.v !== undefined && e.a !== undefined;
            }
        };
        C.shared = new C;
        C._temp = new C;
        C.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
        t.s([
            "Color",
            0,
            C
        ], 222735);
    },
    787653,
    344520,
    (t)=>{
        "use strict";
        let e = {
            createCanvas: (t, e)=>{
                let i = document.createElement("canvas");
                i.width = t;
                i.height = e;
                return i;
            },
            createImage: ()=>new Image,
            getCanvasRenderingContext2D: ()=>CanvasRenderingContext2D,
            getWebGLRenderingContext: ()=>WebGLRenderingContext,
            getNavigator: ()=>navigator,
            getBaseUrl: ()=>document.baseURI ?? window.location.href,
            getFontFaceSet: ()=>document.fonts,
            fetch: (t, e)=>fetch(t, e),
            parseXML: (t)=>new DOMParser().parseFromString(t, "text/xml")
        };
        t.s([
            "BrowserAdapter",
            0,
            e
        ], 344520);
        let i = e;
        t.s([
            "DOMAdapter",
            0,
            {
                get: ()=>i,
                set (t) {
                    i = t;
                }
            }
        ], 787653);
    },
    78278,
    (t)=>{
        "use strict";
        var e;
        e = i || {};
        e.Application = "application";
        e.WebGLPipes = "webgl-pipes";
        e.WebGLPipesAdaptor = "webgl-pipes-adaptor";
        e.WebGLSystem = "webgl-system";
        e.WebGPUPipes = "webgpu-pipes";
        e.WebGPUPipesAdaptor = "webgpu-pipes-adaptor";
        e.WebGPUSystem = "webgpu-system";
        e.CanvasSystem = "canvas-system";
        e.CanvasPipesAdaptor = "canvas-pipes-adaptor";
        e.CanvasPipes = "canvas-pipes";
        e.Asset = "asset";
        e.LoadParser = "load-parser";
        e.ResolveParser = "resolve-parser";
        e.CacheParser = "cache-parser";
        e.DetectionParser = "detection-parser";
        e.MaskEffect = "mask-effect";
        e.BlendMode = "blend-mode";
        e.TextureSource = "texture-source";
        e.TextureUploaderWebGL = "texture-uploader-webgl";
        e.TextureUploaderWebGPU = "texture-uploader-webgpu";
        e.Environment = "environment";
        e.ShapeBuilder = "shape-builder";
        e.Batcher = "batcher";
        var i = e;
        let s = (ref)=>{
            if (typeof ref === "function" || typeof ref === "object" && ref.extension) {
                if (!ref.extension) {
                    throw Error("Extension class must have an extension object");
                }
                ref = {
                    ...typeof ref.extension !== "object" ? {
                        type: ref.extension
                    } : ref.extension,
                    ref
                };
            }
            if (typeof ref === "object") {
                ref = {
                    ...ref
                };
            } else {
                throw Error("Invalid extension type");
            }
            if (typeof ref.type === "string") {
                ref.type = [
                    ref.type
                ];
            }
            return ref;
        };
        let r = (t, e)=>s(t).priority ?? e;
        t.s([
            "ExtensionType",
            0,
            i,
            "extensions",
            0,
            {
                _addHandlers: {},
                _removeHandlers: {},
                _queue: {},
                remove (...t) {
                    t.map(s).forEach((t)=>{
                        t.type.forEach((e)=>this._removeHandlers[e]?.(t));
                    });
                    return this;
                },
                add (...t) {
                    t.map(s).forEach((t)=>{
                        t.type.forEach((e)=>{
                            let _addHandlers = this._addHandlers;
                            let _queue = this._queue;
                            if (_addHandlers[e]) {
                                _addHandlers[e]?.(t);
                            } else {
                                _queue[e] = _queue[e] || [];
                                _queue[e]?.push(t);
                            }
                        });
                    });
                    return this;
                },
                handle (t, e, i) {
                    let _addHandlers = this._addHandlers;
                    let _removeHandlers = this._removeHandlers;
                    if (_addHandlers[t] || _removeHandlers[t]) {
                        throw Error(`Extension type ${t} already has a handler`);
                    }
                    _addHandlers[t] = e;
                    _removeHandlers[t] = i;
                    let _queue = this._queue;
                    _queue[t] && (_queue[t]?.forEach((t)=>e(t)), delete _queue[t]);
                    return this;
                },
                handleByMap (t, e) {
                    return this.handle(t, (t)=>{
                        if (t.name) {
                            e[t.name] = t.ref;
                        }
                    }, (t)=>{
                        t.name && delete e[t.name];
                    });
                },
                handleByNamedList (t, e, i = -1) {
                    return this.handle(t, (t)=>{
                        if (!(e.findIndex((e)=>e.name === t.name) >= 0)) {
                            e.push({
                                name: t.name,
                                value: t.ref
                            });
                            e.sort((t, e)=>r(e.value, i) - r(t.value, i));
                        }
                    }, (t)=>{
                        let i = e.findIndex((e)=>e.name === t.name);
                        if (-1 !== i) {
                            e.splice(i, 1);
                        }
                    });
                },
                handleByList (t, e, i = -1) {
                    return this.handle(t, (t)=>{
                        if (!e.includes(t.ref)) {
                            e.push(t.ref);
                            e.sort((t, e)=>r(e, i) - r(t, i));
                        }
                    }, (t)=>{
                        let i = e.indexOf(t.ref);
                        if (-1 !== i) {
                            e.splice(i, 1);
                        }
                    });
                },
                mixin (t, ...e) {
                    for (let i of e){
                        Object.defineProperties(t.prototype, Object.getOwnPropertyDescriptors(i));
                    }
                }
            },
            "normalizeExtensionPriority",
            0,
            r
        ]);
    },
    389474,
    42515,
    37554,
    (t)=>{
        "use strict";
        let e = 2 * Math.PI;
        let i = 180 / Math.PI;
        let s = Math.PI / 180;
        t.s([
            "DEG_TO_RAD",
            0,
            s,
            "PI_2",
            0,
            e,
            "RAD_TO_DEG",
            0,
            i
        ], 42515);
        class r {
            constructor(t = 0, e = 0){
                this.x = 0;
                this.y = 0;
                this.x = t;
                this.y = e;
            }
            clone() {
                return new r(this.x, this.y);
            }
            copyFrom(t) {
                this.set(t.x, t.y);
                return this;
            }
            copyTo(t) {
                t.set(this.x, this.y);
                return t;
            }
            equals(t) {
                return t.x === this.x && t.y === this.y;
            }
            set(t = 0, e = t) {
                this.x = t;
                this.y = e;
                return this;
            }
            toString() {
                return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
            }
            static get shared() {
                n.x = 0;
                n.y = 0;
                return n;
            }
        }
        let n = new r;
        t.s([
            "Point",
            0,
            r
        ], 37554);
        class a {
            constructor(t = 1, e = 0, i = 0, s = 1, r = 0, n = 0){
                this.array = null;
                this.a = t;
                this.b = e;
                this.c = i;
                this.d = s;
                this.tx = r;
                this.ty = n;
            }
            fromArray(t) {
                this.a = t[0];
                this.b = t[1];
                this.c = t[3];
                this.d = t[4];
                this.tx = t[2];
                this.ty = t[5];
            }
            set(t, e, i, s, r, n) {
                this.a = t;
                this.b = e;
                this.c = i;
                this.d = s;
                this.tx = r;
                this.ty = n;
                return this;
            }
            toArray(t, e) {
                if (!this.array) {
                    this.array = new Float32Array(9);
                }
                let i = e || this.array;
                if (t) {
                    i[0] = this.a;
                    i[1] = this.b;
                    i[2] = 0;
                    i[3] = this.c;
                    i[4] = this.d;
                    i[5] = 0;
                    i[6] = this.tx;
                    i[7] = this.ty;
                } else {
                    i[0] = this.a;
                    i[1] = this.c;
                    i[2] = this.tx;
                    i[3] = this.b;
                    i[4] = this.d;
                    i[5] = this.ty;
                    i[6] = 0;
                    i[7] = 0;
                }
                i[8] = 1;
                return i;
            }
            apply(t, e) {
                e = e || new r;
                let i = t.x;
                let s = t.y;
                e.x = this.a * i + this.c * s + this.tx;
                e.y = this.b * i + this.d * s + this.ty;
                return e;
            }
            applyInverse(t, e) {
                e = e || new r;
                let i = this.a;
                let s = this.b;
                let n = this.c;
                let a = this.d;
                let h = this.tx;
                let o = this.ty;
                let u = 1 / (i * a + -(n * s));
                let l = t.x;
                let d = t.y;
                e.x = a * u * l + -n * u * d + (o * n - h * a) * u;
                e.y = i * u * d + -s * u * l + (-o * i + h * s) * u;
                return e;
            }
            translate(t, e) {
                this.tx += t;
                this.ty += e;
                return this;
            }
            scale(t, e) {
                this.a *= t;
                this.d *= e;
                this.c *= t;
                this.b *= e;
                this.tx *= t;
                this.ty *= e;
                return this;
            }
            rotate(t) {
                let e = Math.cos(t);
                let i = Math.sin(t);
                let s = this.a;
                let r = this.c;
                let n = this.tx;
                this.a = s * e - this.b * i;
                this.b = s * i + this.b * e;
                this.c = r * e - this.d * i;
                this.d = r * i + this.d * e;
                this.tx = n * e - this.ty * i;
                this.ty = n * i + this.ty * e;
                return this;
            }
            append(t) {
                let e = this.a;
                let i = this.b;
                let s = this.c;
                let r = this.d;
                this.a = t.a * e + t.b * s;
                this.b = t.a * i + t.b * r;
                this.c = t.c * e + t.d * s;
                this.d = t.c * i + t.d * r;
                this.tx = t.tx * e + t.ty * s + this.tx;
                this.ty = t.tx * i + t.ty * r + this.ty;
                return this;
            }
            appendFrom(t, e) {
                let i = t.a;
                let s = t.b;
                let r = t.c;
                let n = t.d;
                let a = t.tx;
                let h = t.ty;
                let o = e.a;
                let u = e.b;
                let l = e.c;
                let d = e.d;
                this.a = i * o + s * l;
                this.b = i * u + s * d;
                this.c = r * o + n * l;
                this.d = r * u + n * d;
                this.tx = a * o + h * l + e.tx;
                this.ty = a * u + h * d + e.ty;
                return this;
            }
            setTransform(t, e, i, s, r, n, a, h, o) {
                this.a = Math.cos(a + o) * r;
                this.b = Math.sin(a + o) * r;
                this.c = -Math.sin(a - h) * n;
                this.d = Math.cos(a - h) * n;
                this.tx = t - (i * this.a + s * this.c);
                this.ty = e - (i * this.b + s * this.d);
                return this;
            }
            prepend(t) {
                let e = this.tx;
                if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
                    let e = this.a;
                    let i = this.c;
                    this.a = e * t.a + this.b * t.c;
                    this.b = e * t.b + this.b * t.d;
                    this.c = i * t.a + this.d * t.c;
                    this.d = i * t.b + this.d * t.d;
                }
                this.tx = e * t.a + this.ty * t.c + t.tx;
                this.ty = e * t.b + this.ty * t.d + t.ty;
                return this;
            }
            decompose(t) {
                let i = this.a;
                let s = this.b;
                let r = this.c;
                let n = this.d;
                let t_pivot = t.pivot;
                let h = -Math.atan2(-r, n);
                let o = Math.atan2(s, i);
                let u = Math.abs(h + o);
                if (u < 0.00001 || Math.abs(e - u) < 0.00001) {
                    t.rotation = o;
                    t.skew.x = t.skew.y = 0;
                } else {
                    t.rotation = 0;
                    t.skew.x = h;
                    t.skew.y = o;
                }
                t.scale.x = Math.sqrt(i * i + s * s);
                t.scale.y = Math.sqrt(r * r + n * n);
                t.position.x = this.tx + (t_pivot.x * i + t_pivot.y * r);
                t.position.y = this.ty + (t_pivot.x * s + t_pivot.y * n);
                return t;
            }
            invert() {
                let t = this.a;
                let e = this.b;
                let i = this.c;
                let s = this.d;
                let r = this.tx;
                let n = t * s - e * i;
                this.a = s / n;
                this.b = -e / n;
                this.c = -i / n;
                this.d = t / n;
                this.tx = (i * this.ty - s * r) / n;
                this.ty = -(t * this.ty - e * r) / n;
                return this;
            }
            isIdentity() {
                return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
            }
            identity() {
                this.a = 1;
                this.b = 0;
                this.c = 0;
                this.d = 1;
                this.tx = 0;
                this.ty = 0;
                return this;
            }
            clone() {
                let t = new a;
                t.a = this.a;
                t.b = this.b;
                t.c = this.c;
                t.d = this.d;
                t.tx = this.tx;
                t.ty = this.ty;
                return t;
            }
            copyTo(t) {
                t.a = this.a;
                t.b = this.b;
                t.c = this.c;
                t.d = this.d;
                t.tx = this.tx;
                t.ty = this.ty;
                return t;
            }
            copyFrom(t) {
                this.a = t.a;
                this.b = t.b;
                this.c = t.c;
                this.d = t.d;
                this.tx = t.tx;
                this.ty = t.ty;
                return this;
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
        let h = new a;
        let o = new a;
        t.s([
            "Matrix",
            0,
            a
        ], 389474);
    },
    164811,
    (t)=>{
        "use strict";
        var e = t.i(389474);
        let i = [
            1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1,
            1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1
        ];
        let s = [
            0,
            1,
            1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1,
            1,
            1,
            0,
            -1,
            -1,
            -1
        ];
        let r = [
            0,
            -1,
            -1,
            -1,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            -1,
            -1,
            -1
        ];
        let n = [
            1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1,
            -1,
            -1,
            0,
            1,
            1,
            1,
            0,
            -1
        ];
        let a = [];
        let h = [];
        let Math_sign = Math.sign;
        !(()=>{
            for(let t = 0; t < 16; t++){
                let e = [];
                a.push(e);
                for(let a = 0; a < 16; a++){
                    let h = Math_sign(i[t] * i[a] + r[t] * s[a]);
                    let u = Math_sign(s[t] * i[a] + n[t] * s[a]);
                    let l = Math_sign(i[t] * r[a] + r[t] * n[a]);
                    let d = Math_sign(s[t] * r[a] + n[t] * n[a]);
                    for(let t = 0; t < 16; t++){
                        if (i[t] === h && s[t] === u && r[t] === l && n[t] === d) {
                            e.push(t);
                            break;
                        }
                    }
                }
            }
            for(let t = 0; t < 16; t++){
                let a = new e.Matrix;
                a.set(i[t], s[t], r[t], n[t], 0, 0);
                h.push(a);
            }
        })();
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
            uX: (t)=>i[t],
            uY: (t)=>s[t],
            vX: (t)=>r[t],
            vY: (t)=>n[t],
            inv: (t)=>{
                if (8 & t) {
                    return 15 & t;
                }
                return 7 & -t;
            },
            add: (t, e)=>a[t][e],
            sub: (t, e)=>a[t][u.inv(e)],
            rotate180: (t)=>4 ^ t,
            isVertical: (t)=>(3 & t) == 2,
            byDirection: (t, e)=>{
                if (2 * Math.abs(t) <= Math.abs(e)) {
                    if (e >= 0) {
                        return u.S;
                    }
                    return u.N;
                }
                if (2 * Math.abs(e) <= Math.abs(t)) {
                    if (t > 0) {
                        return u.E;
                    }
                    return u.W;
                }
                if (e > 0) {
                    if (t > 0) {
                        return u.SE;
                    }
                    return u.SW;
                }
                if (t > 0) {
                    return u.NE;
                }
                return u.NW;
            },
            matrixAppendRotationInv: (t, e, i = 0, s = 0, r = 0, n = 0)=>{
                let a = h[u.inv(e)];
                let o = a.a;
                let l = a.b;
                let d = a.c;
                let c = a.d;
                let f = i - Math.min(0, o * r, d * n, o * r + d * n);
                let m = s - Math.min(0, l * r, c * n, l * r + c * n);
                let p = t.a;
                let g = t.b;
                let y = t.c;
                let x = t.d;
                t.a = o * p + l * y;
                t.b = o * g + l * x;
                t.c = d * p + c * y;
                t.d = d * g + c * x;
                t.tx = f * p + m * y + t.tx;
                t.ty = f * g + m * x + t.ty;
            },
            transformRectCoords: (t, e, i, s)=>{
                let { x, y, width, height } = t;
                let { x: x_1, y: y_1, width: width_1, height: height_1 } = e;
                if (i === u.E) {
                    s.set(x + x_1, y + y_1, width, height);
                    return s;
                }
                if (i === u.S) {
                    return s.set(width_1 - y - height + x_1, x + y_1, height, width);
                }
                if (i === u.W) {
                    return s.set(width_1 - x - width + x_1, height_1 - y - height + y_1, width, height);
                }
                if (i === u.N) {
                    return s.set(y + x_1, height_1 - x - width + y_1, height, width);
                }
                return s.set(x + x_1, y + y_1, width, height);
            }
        };
        t.s([
            "groupD8",
            0,
            u
        ]);
    },
    539088,
    (t)=>{
        "use strict";
        var e = t.i(37554);
        let i = [
            new e.Point,
            new e.Point,
            new e.Point,
            new e.Point
        ];
        t.s([
            "Rectangle",
            0,
            class t {
                constructor(t = 0, e = 0, i = 0, s = 0){
                    this.type = "rectangle";
                    this.x = Number(t);
                    this.y = Number(e);
                    this.width = Number(i);
                    this.height = Number(s);
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
                    this.x = t.minX;
                    this.y = t.minY;
                    this.width = t.maxX - t.minX;
                    this.height = t.maxY - t.minY;
                    return this;
                }
                copyFrom(t) {
                    this.x = t.x;
                    this.y = t.y;
                    this.width = t.width;
                    this.height = t.height;
                    return this;
                }
                copyTo(t) {
                    t.copyFrom(this);
                    return t;
                }
                contains(t, e) {
                    return !(this.width <= 0) && !(this.height <= 0) && !!(t >= this.x) && !!(t < this.x + this.width) && !!(e >= this.y) && !!(e < this.y + this.height);
                }
                strokeContains(t, e, i, s = 0.5) {
                    let { width, height } = this;
                    if (width <= 0 || height <= 0) {
                        return false;
                    }
                    let a = this.x;
                    let h = this.y;
                    let o = i * (1 - s);
                    let u = i - o;
                    return t >= a - o && t <= a + width + o && e >= h - o && e <= h + height + o && !(t > a + u && t < a + width - u && e > h + u && e < h + height - u);
                }
                intersects(t, e) {
                    if (!e) {
                        let e = this.x < t.x ? t.x : this.x;
                        if ((this.right > t.right ? t.right : this.right) <= e) {
                            return false;
                        }
                        let i = this.y < t.y ? t.y : this.y;
                        return (this.bottom > t.bottom ? t.bottom : this.bottom) > i;
                    }
                    let left = this.left;
                    let right = this.right;
                    let top = this.top;
                    let bottom = this.bottom;
                    if (right <= left || bottom <= top) {
                        return false;
                    }
                    let h = i[0].set(t.left, t.top);
                    let o = i[1].set(t.left, t.bottom);
                    let u = i[2].set(t.right, t.top);
                    let l = i[3].set(t.right, t.bottom);
                    if (u.x <= h.x || o.y <= h.y) {
                        return false;
                    }
                    let d = Math.sign(e.a * e.d - e.b * e.c);
                    if (d === 0 || (e.apply(h, h), e.apply(o, o), e.apply(u, u), e.apply(l, l), Math.max(h.x, o.x, u.x, l.x) <= left || Math.min(h.x, o.x, u.x, l.x) >= right || Math.max(h.y, o.y, u.y, l.y) <= top || Math.min(h.y, o.y, u.y, l.y) >= bottom)) {
                        return false;
                    }
                    let c = d * (o.y - h.y);
                    let f = d * (h.x - o.x);
                    let m = c * left + f * top;
                    let p = c * right + f * top;
                    let g = c * left + f * bottom;
                    let y = c * right + f * bottom;
                    if (Math.max(m, p, g, y) <= c * h.x + f * h.y || Math.min(m, p, g, y) >= c * l.x + f * l.y) {
                        return false;
                    }
                    let x = d * (h.y - u.y);
                    let b = d * (u.x - h.x);
                    let _ = x * left + b * top;
                    let v = x * right + b * top;
                    let w = x * left + b * bottom;
                    let M = x * right + b * bottom;
                    return !(Math.max(_, v, w, M) <= x * h.x + b * h.y || Math.min(_, v, w, M) >= x * l.x + b * l.y);
                }
                pad(t = 0, e = t) {
                    this.x -= t;
                    this.y -= e;
                    this.width += 2 * t;
                    this.height += 2 * e;
                    return this;
                }
                fit(t) {
                    let e = Math.max(this.x, t.x);
                    let i = Math.min(this.x + this.width, t.x + t.width);
                    let s = Math.max(this.y, t.y);
                    let r = Math.min(this.y + this.height, t.y + t.height);
                    this.x = e;
                    this.width = Math.max(i - e, 0);
                    this.y = s;
                    this.height = Math.max(r - s, 0);
                    return this;
                }
                ceil(t = 1, e = 0.001) {
                    let i = Math.ceil((this.x + this.width - e) * t) / t;
                    let s = Math.ceil((this.y + this.height - e) * t) / t;
                    this.x = Math.floor((this.x + e) * t) / t;
                    this.y = Math.floor((this.y + e) * t) / t;
                    this.width = i - this.x;
                    this.height = s - this.y;
                    return this;
                }
                scale(t, e = t) {
                    this.x *= t;
                    this.y *= e;
                    this.width *= t;
                    this.height *= e;
                    return this;
                }
                enlarge(t) {
                    let e = Math.min(this.x, t.x);
                    let i = Math.max(this.x + this.width, t.x + t.width);
                    let s = Math.min(this.y, t.y);
                    let r = Math.max(this.y + this.height, t.y + t.height);
                    this.x = e;
                    this.width = i - e;
                    this.y = s;
                    this.height = r - s;
                    return this;
                }
                getBounds(e) {
                    if (!e) {
                        e = new t;
                    }
                    e.copyFrom(this);
                    return e;
                }
                containsRect(t) {
                    if (this.width <= 0 || this.height <= 0) {
                        return false;
                    }
                    let e = t.x;
                    let i = t.y;
                    let s = t.x + t.width;
                    let r = t.y + t.height;
                    return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && s >= this.x && s < this.x + this.width && r >= this.y && r < this.y + this.height;
                }
                set(t, e, i, s) {
                    this.x = t;
                    this.y = e;
                    this.width = i;
                    this.height = s;
                    return this;
                }
                toString() {
                    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
                }
            }
        ]);
    },
    550645,
    178375,
    398250,
    994564,
    840976,
    640338,
    420640,
    434367,
    13472,
    411454,
    722909,
    637531,
    107465,
    714427,
    818011,
    (t)=>{
        "use strict";
        let e;
        var i;
        var s = t.i(235569);
        var r = t.i(426832);
        function n() {
            if (!e) {
                e = "mediump";
                let t = r.getTestContext();
                if (t && t.getShaderPrecisionFormat) {
                    e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision ? "highp" : "mediump";
                }
            }
            return e;
        }
        function addProgramDefines(t, e, i) {
            if (e) {
                return t;
            }
            if (i) {
                t = t.replace("out vec4 finalColor;", "");
                return `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${t}
        `;
            }
            return `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${t}
        `;
        }
        function ensurePrecision(t, e, i) {
            let s = i ? e.maxSupportedFragmentPrecision : e.maxSupportedVertexPrecision;
            if (t.substring(0, 9) !== "precision") {
                let r = i ? e.requestedFragmentPrecision : e.requestedVertexPrecision;
                if (r === "highp" && s !== "highp") {
                    r = "mediump";
                }
                return `precision ${r} float;
${t}`;
            }
            if (s !== "highp" && t.substring(0, 15) === "precision highp") {
                return t.replace("precision highp", "precision mediump");
            }
            return t;
        }
        function insertVersion(t, e) {
            if (e) {
                return `#version 300 es
${t}`;
            }
            return t;
        }
        t.s([
            "getMaxFragmentPrecision",
            0,
            n
        ], 178375);
        t.s([
            "addProgramDefines",
            0,
            addProgramDefines
        ], 398250);
        t.s([
            "ensurePrecision",
            0,
            ensurePrecision
        ], 994564);
        t.s([
            "insertVersion",
            0,
            insertVersion
        ], 840976);
        let u = {};
        let l = {};
        function setProgramName(t, { name = "pixi-program" }, i = true) {
            name = name.replace(/\s+/g, "-") + (i ? "-fragment" : "-vertex");
            let s = i ? u : l;
            if (s[name]) {
                s[name]++;
                name += `-${s[name]}`;
            } else {
                s[name] = 1;
            }
            if (-1 !== t.indexOf("#define SHADER_NAME")) {
                return t;
            }
            let r = `#define SHADER_NAME ${name}`;
            return `${r}
${t}`;
        }
        function stripVersion(t, e) {
            if (e) {
                return t.replace("#version 300 es", "");
            }
            return t;
        }
        t.s([
            "setProgramName",
            0,
            setProgramName
        ], 640338);
        t.s([
            "stripVersion",
            0,
            stripVersion
        ], 420640);
        let f = {
            stripVersion,
            ensurePrecision,
            addProgramDefines,
            setProgramName,
            insertVersion
        };
        let m = Object.create(null);
        let p = class t {
            constructor(e){
                const i = -1 !== (e = {
                    ...t.defaultOptions,
                    ...e
                }).fragment.indexOf("#version 300 es");
                const r = {
                    stripVersion: i,
                    ensurePrecision: {
                        requestedFragmentPrecision: e.preferredFragmentPrecision,
                        requestedVertexPrecision: e.preferredVertexPrecision,
                        maxSupportedVertexPrecision: "highp",
                        maxSupportedFragmentPrecision: n()
                    },
                    setProgramName: {
                        name: e.name
                    },
                    addProgramDefines: i,
                    insertVersion: i
                };
                let a = e.fragment;
                let h = e.vertex;
                Object.keys(f).forEach((t)=>{
                    let e = r[t];
                    a = f[t](a, e, true);
                    h = f[t](h, e, false);
                });
                this.fragment = a;
                this.vertex = h;
                this.transformFeedbackVaryings = e.transformFeedbackVaryings;
                this._key = s.createIdFromString(`${this.vertex}:${this.fragment}`, "gl-program");
            }
            destroy() {
                this.fragment = null;
                this.vertex = null;
                this._attributeData = null;
                this._uniformData = null;
                this._uniformBlockData = null;
                this.transformFeedbackVaryings = null;
                m[this._cacheKey] = null;
            }
            static from(e) {
                let i = `${e.vertex}:${e.fragment}`;
                if (!m[i]) {
                    m[i] = new t(e);
                    m[i]._cacheKey = i;
                }
                return m[i];
            }
        };
        p.defaultOptions = {
            preferredVertexPrecision: "highp",
            preferredFragmentPrecision: "mediump"
        };
        t.s([
            "GlProgram",
            0,
            p
        ], 550645);
        let g = {
            uint8x2: {
                size: 2,
                stride: 2,
                normalised: false
            },
            uint8x4: {
                size: 4,
                stride: 4,
                normalised: false
            },
            sint8x2: {
                size: 2,
                stride: 2,
                normalised: false
            },
            sint8x4: {
                size: 4,
                stride: 4,
                normalised: false
            },
            unorm8x2: {
                size: 2,
                stride: 2,
                normalised: true
            },
            unorm8x4: {
                size: 4,
                stride: 4,
                normalised: true
            },
            snorm8x2: {
                size: 2,
                stride: 2,
                normalised: true
            },
            snorm8x4: {
                size: 4,
                stride: 4,
                normalised: true
            },
            uint16x2: {
                size: 2,
                stride: 4,
                normalised: false
            },
            uint16x4: {
                size: 4,
                stride: 8,
                normalised: false
            },
            sint16x2: {
                size: 2,
                stride: 4,
                normalised: false
            },
            sint16x4: {
                size: 4,
                stride: 8,
                normalised: false
            },
            unorm16x2: {
                size: 2,
                stride: 4,
                normalised: true
            },
            unorm16x4: {
                size: 4,
                stride: 8,
                normalised: true
            },
            snorm16x2: {
                size: 2,
                stride: 4,
                normalised: true
            },
            snorm16x4: {
                size: 4,
                stride: 8,
                normalised: true
            },
            float16x2: {
                size: 2,
                stride: 4,
                normalised: false
            },
            float16x4: {
                size: 4,
                stride: 8,
                normalised: false
            },
            float32: {
                size: 1,
                stride: 4,
                normalised: false
            },
            float32x2: {
                size: 2,
                stride: 8,
                normalised: false
            },
            float32x3: {
                size: 3,
                stride: 12,
                normalised: false
            },
            float32x4: {
                size: 4,
                stride: 16,
                normalised: false
            },
            uint32: {
                size: 1,
                stride: 4,
                normalised: false
            },
            uint32x2: {
                size: 2,
                stride: 8,
                normalised: false
            },
            uint32x3: {
                size: 3,
                stride: 12,
                normalised: false
            },
            uint32x4: {
                size: 4,
                stride: 16,
                normalised: false
            },
            sint32: {
                size: 1,
                stride: 4,
                normalised: false
            },
            sint32x2: {
                size: 2,
                stride: 8,
                normalised: false
            },
            sint32x3: {
                size: 3,
                stride: 12,
                normalised: false
            },
            sint32x4: {
                size: 4,
                stride: 16,
                normalised: false
            }
        };
        function y(t) {
            return g[t] ?? g.float32;
        }
        t.s([
            "getAttributeInfoFromFormat",
            0,
            y
        ], 434367);
        let x = {
            f32: "float32",
            "vec2<f32>": "float32x2",
            "vec3<f32>": "float32x3",
            "vec4<f32>": "float32x4",
            vec2f: "float32x2",
            vec3f: "float32x3",
            vec4f: "float32x4",
            i32: "sint32",
            "vec2<i32>": "sint32x2",
            "vec3<i32>": "sint32x3",
            "vec4<i32>": "sint32x4",
            vec2i: "sint32x2",
            vec3i: "sint32x3",
            vec4i: "sint32x4",
            u32: "uint32",
            "vec2<u32>": "uint32x2",
            "vec3<u32>": "uint32x3",
            "vec4<u32>": "uint32x4",
            vec2u: "uint32x2",
            vec3u: "uint32x3",
            vec4u: "uint32x4",
            bool: "uint32",
            "vec2<bool>": "uint32x2",
            "vec3<bool>": "uint32x3",
            "vec4<bool>": "uint32x4"
        };
        let b = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;
        function _(t, e) {
            let i;
            while((i = b.exec(t)) !== null){
                let t = x[i[3]] ?? "float32";
                e[i[2]] = {
                    location: parseInt(i[1], 10),
                    format: t,
                    stride: y(t).stride,
                    offset: 0,
                    instance: false,
                    start: 0
                };
            }
            b.lastIndex = 0;
        }
        function v({ source, entryPoint }) {
            let i = {};
            let s = source.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
            let r = s.indexOf(`fn ${entryPoint}(`);
            if (-1 === r) {
                return i;
            }
            let n = s.indexOf("->", r);
            if (-1 === n) {
                return i;
            }
            let a = s.substring(r, n);
            _(a, i);
            if (Object.keys(i).length === 0) {
                let t = a.match(/\(\s*\w+\s*:\s*(\w+)/);
                if (t) {
                    let e = t[1];
                    let r = RegExp(`struct\\s+${e}\\s*\\{([^}]+)\\}`, "s");
                    let n = s.match(r);
                    if (n) {
                        _(n[1], i);
                    }
                }
            }
            return i;
        }
        function w(t) {
            let e = /@group\((\d+)\)/;
            let i = /@binding\((\d+)\)/;
            let s = /var(<[^>]+>)? (\w+)/;
            let r = /:\s*([\w<>]+)/;
            let n = /(\w+)\s*:\s*([\w\<\>]+)/g;
            let a = /struct\s+(\w+)/;
            let groups = t.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)?.map((t)=>({
                    group: parseInt(t.match(e)[1], 10),
                    binding: parseInt(t.match(i)[1], 10),
                    name: t.match(s)[2],
                    isUniform: t.match(s)[1] === "<uniform>",
                    type: t.match(r)[1]
                }));
            if (!groups) {
                return {
                    groups: [],
                    structs: []
                };
            }
            let structs = t.match(/struct\s+(\w+)\s*{([^}]+)}/g)?.map((t)=>{
                let name_1 = t.match(a)[1];
                let members = t.match(n).reduce((acc, item)=>{
                    let [i, s] = item.split(":");
                    acc[i.trim()] = s.trim();
                    return acc;
                }, {});
                if (members) {
                    return {
                        name: name_1,
                        members
                    };
                }
                return null;
            }).filter(({ name })=>groups.some((e)=>e.type === name || e.type.includes(`<${name}>`))) ?? [];
            return {
                groups,
                structs
            };
        }
        t.s([
            "extractAttributesFromGpuProgram",
            0,
            v
        ], 13472);
        t.s([
            "extractStructAndGroups",
            0,
            w
        ], 411454);
        i = M || {};
        i[i.VERTEX = 1] = "VERTEX";
        i[i.FRAGMENT = 2] = "FRAGMENT";
        i[i.COMPUTE = 4] = "COMPUTE";
        var M = i;
        function A({ groups }) {
            let e = [];
            for(let i = 0; i < groups.length; i++){
                let group = groups[i];
                if (!e[group.group]) {
                    e[group.group] = [];
                }
                if (group.isUniform) {
                    e[group.group].push({
                        binding: group.binding,
                        visibility: M.VERTEX | M.FRAGMENT,
                        buffer: {
                            type: "uniform"
                        }
                    });
                } else if (group.type === "sampler") {
                    e[group.group].push({
                        binding: group.binding,
                        visibility: M.FRAGMENT,
                        sampler: {
                            type: "filtering"
                        }
                    });
                } else if (group.type === "texture_2d" || group.type.startsWith("texture_2d<")) {
                    e[group.group].push({
                        binding: group.binding,
                        visibility: M.FRAGMENT,
                        texture: {
                            sampleType: "float",
                            viewDimension: "2d",
                            multisampled: false
                        }
                    });
                } else if (group.type === "texture_2d_array" || group.type.startsWith("texture_2d_array<")) {
                    e[group.group].push({
                        binding: group.binding,
                        visibility: M.FRAGMENT,
                        texture: {
                            sampleType: "float",
                            viewDimension: "2d-array",
                            multisampled: false
                        }
                    });
                } else if (group.type === "texture_cube" || group.type.startsWith("texture_cube<")) {
                    e[group.group].push({
                        binding: group.binding,
                        visibility: M.FRAGMENT,
                        texture: {
                            sampleType: "float",
                            viewDimension: "cube",
                            multisampled: false
                        }
                    });
                }
            }
            for(let t = 0; t < e.length; t++){
                if (!e[t]) {
                    e[t] = [];
                }
            }
            return e;
        }
        function E({ groups }) {
            let e = [];
            for(let i = 0; i < groups.length; i++){
                let group = groups[i];
                if (!e[group.group]) {
                    e[group.group] = {};
                }
                e[group.group][group.name] = group.binding;
            }
            return e;
        }
        function P(t, e) {
            let i = new Set;
            let s = new Set;
            return {
                structs: [
                    ...t.structs,
                    ...e.structs
                ].filter((t)=>!i.has(t.name) && (i.add(t.name), true)),
                groups: [
                    ...t.groups,
                    ...e.groups
                ].filter((t)=>{
                    let e = `${t.name}-${t.binding}`;
                    return !s.has(e) && (s.add(e), true);
                })
            };
        }
        t.s([
            "ShaderStage",
            0,
            M
        ], 722909);
        t.s([
            "generateGpuLayoutGroups",
            0,
            A
        ], 637531);
        t.s([
            "generateLayoutHash",
            0,
            E
        ], 107465);
        t.s([
            "removeStructAndGroupDuplicates",
            0,
            P
        ], 714427);
        let T = Object.create(null);
        t.s([
            "GpuProgram",
            0,
            class t {
                constructor(t){
                    this._layoutKey = 0;
                    this._attributeLocationsKey = 0;
                    const { fragment, vertex, layout, gpuLayout, name } = t;
                    this.name = name;
                    this.fragment = fragment;
                    this.vertex = vertex;
                    if (fragment.source === vertex.source) {
                        const t = w(fragment.source);
                        this.structsAndGroups = t;
                    } else {
                        const t = w(vertex.source);
                        const s = w(fragment.source);
                        this.structsAndGroups = P(t, s);
                    }
                    this.layout = layout ?? E(this.structsAndGroups);
                    this.gpuLayout = gpuLayout ?? A(this.structsAndGroups);
                    this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== undefined;
                    this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== undefined;
                    this._generateProgramKey();
                }
                _generateProgramKey() {
                    let { vertex, fragment } = this;
                    let i = vertex.source + fragment.source + vertex.entryPoint + fragment.entryPoint;
                    this._layoutKey = s.createIdFromString(i, "program");
                }
                get attributeData() {
                    this._attributeData ?? (this._attributeData = v(this.vertex));
                    return this._attributeData;
                }
                destroy() {
                    this.gpuLayout = null;
                    this.layout = null;
                    this.structsAndGroups = null;
                    this.fragment = null;
                    this.vertex = null;
                    T[this._cacheKey] = null;
                }
                static from(e) {
                    let i = `${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;
                    if (!T[i]) {
                        T[i] = new t(e);
                        T[i]._cacheKey = i;
                    }
                    return T[i];
                }
            }
        ], 818011);
    },
    426832,
    (t)=>{
        "use strict";
        let e;
        var i = t.i(787653);
        t.s([
            "getTestContext",
            0,
            ()=>{
                if (!e || e?.isContextLost()) {
                    e = i.DOMAdapter.get().createCanvas().getContext("webgl", {});
                }
                return e;
            }
        ]);
    },
    175444,
    (t)=>{
        "use strict";
        t.s([
            "BindGroup",
            0,
            class {
                constructor(t){
                    this.resources = Object.create(null);
                    this._dirty = true;
                    let e = 0;
                    for(const i in t){
                        const s = t[i];
                        this.setResource(s, e++);
                    }
                    this._updateKey();
                }
                _updateKey() {
                    if (!this._dirty) {
                        return;
                    }
                    this._dirty = false;
                    let t = [];
                    let e = 0;
                    for(let i in this.resources){
                        t[e++] = this.resources[i]._resourceId;
                    }
                    this._key = t.join("|");
                }
                setResource(t, e) {
                    let i = this.resources[e];
                    if (t !== i) {
                        i?.off?.("change", this.onResourceChange, this);
                        t.on?.("change", this.onResourceChange, this);
                        this.resources[e] = t;
                        this._dirty = true;
                    }
                }
                getResource(t) {
                    return this.resources[t];
                }
                _touch(t, e) {
                    let resources = this.resources;
                    for(let s in resources){
                        resources[s]._gcLastUsed = t;
                        resources[s]._touched = e;
                    }
                }
                destroy() {
                    let resources = this.resources;
                    for(let e in resources){
                        let i = resources[e];
                        i?.off?.("change", this.onResourceChange, this);
                    }
                    this.resources = null;
                }
                onResourceChange(t) {
                    this._dirty = true;
                    if (t.destroyed) {
                        this.destroy();
                    } else {
                        this._updateKey();
                    }
                }
            }
        ]);
    },
    719885,
    294212,
    55585,
    398013,
    72131,
    (t)=>{
        "use strict";
        var e;
        var i = t.i(263524);
        var s = t.i(453549);
        var r = t.i(733705);
        var n = i;
        e = a || {};
        e[e.MAP_READ = 1] = "MAP_READ";
        e[e.MAP_WRITE = 2] = "MAP_WRITE";
        e[e.COPY_SRC = 4] = "COPY_SRC";
        e[e.COPY_DST = 8] = "COPY_DST";
        e[e.INDEX = 16] = "INDEX";
        e[e.VERTEX = 32] = "VERTEX";
        e[e.UNIFORM = 64] = "UNIFORM";
        e[e.STORAGE = 128] = "STORAGE";
        e[e.INDIRECT = 256] = "INDIRECT";
        e[e.QUERY_RESOLVE = 512] = "QUERY_RESOLVE";
        e[e.STATIC = 1024] = "STATIC";
        var a = e;
        t.s([
            "BufferUsage",
            0,
            a
        ], 294212);
        class h extends n.default {
            constructor(t){
                let { data, size } = t;
                const { usage, label, shrinkToFit } = t;
                super();
                this._gpuData = Object.create(null);
                this._gcLastUsed = -1;
                this.autoGarbageCollect = true;
                this.uid = r.uid("buffer");
                this._resourceType = "buffer";
                this._resourceId = r.uid("resource");
                this._touched = 0;
                this._updateID = 1;
                this._dataInt32 = null;
                this.shrinkToFit = true;
                this.destroyed = false;
                if (data instanceof Array) {
                    data = new Float32Array(data);
                }
                this._data = data;
                size ??= data?.byteLength;
                const mappedAtCreation = !!data;
                this.descriptor = {
                    size,
                    usage,
                    mappedAtCreation,
                    label
                };
                this.shrinkToFit = shrinkToFit ?? true;
            }
            get data() {
                return this._data;
            }
            set data(t) {
                this.setDataWithSize(t, t.length, true);
            }
            get dataInt32() {
                if (!this._dataInt32) {
                    this._dataInt32 = new Int32Array(this.data.buffer);
                }
                return this._dataInt32;
            }
            get static() {
                return !!(this.descriptor.usage & a.STATIC);
            }
            set static(t) {
                if (t) {
                    this.descriptor.usage |= a.STATIC;
                } else {
                    this.descriptor.usage &= ~a.STATIC;
                }
            }
            setDataWithSize(t, e, i) {
                this._updateID++;
                this._updateSize = e * t.BYTES_PER_ELEMENT;
                if (this._data === t) {
                    if (i) {
                        this.emit("update", this);
                    }
                    return;
                }
                let _data = this._data;
                (this._data = t, this._dataInt32 = null, _data && _data.length === t.length) ? i && this.emit("update", this) : !this.shrinkToFit && _data && t.byteLength < _data.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = r.uid("resource"), this.emit("change", this));
            }
            update(t) {
                this._updateSize = t ?? this._updateSize;
                this._updateID++;
                this.emit("update", this);
            }
            unload() {
                for(let t in this.emit("unload", this), this._gpuData){
                    this._gpuData[t]?.destroy();
                }
                this._gpuData = Object.create(null);
            }
            destroy() {
                this.destroyed = true;
                this.unload();
                this.emit("destroy", this);
                this.emit("change", this);
                this._data = null;
                this.descriptor = null;
                this.removeAllListeners();
            }
        }
        function o(t, e) {
            if (!(t instanceof h)) {
                let usage_1 = e ? a.INDEX : a.VERTEX;
                t instanceof Array && (e ? (t = new Uint32Array(t), usage_1 = a.INDEX | a.COPY_DST) : (t = new Float32Array(t), usage_1 = a.VERTEX | a.COPY_DST));
                t = new h({
                    data: t,
                    label: e ? "index-mesh-buffer" : "vertex-mesh-buffer",
                    usage: usage_1
                });
            }
            return t;
        }
        function u(t, e, i) {
            let s = t.getAttribute(e);
            if (!s) {
                i.minX = 0;
                i.minY = 0;
                i.maxX = 0;
                i.maxY = 0;
                return i;
            }
            let data = s.buffer.data;
            let n = Infinity;
            let a = Infinity;
            let h = -Infinity;
            let o = -Infinity;
            let r_BYTES_PER_ELEMENT = data.BYTES_PER_ELEMENT;
            let l = (s.offset || 0) / r_BYTES_PER_ELEMENT;
            let d = (s.stride || 8) / r_BYTES_PER_ELEMENT;
            for(let t = l; t < data.length; t += d){
                let e = data[t];
                let i = data[t + 1];
                if (e > h) {
                    h = e;
                }
                if (i > o) {
                    o = i;
                }
                if (e < n) {
                    n = e;
                }
                if (i < a) {
                    a = i;
                }
            }
            i.minX = n;
            i.minY = a;
            i.maxX = h;
            i.maxY = o;
            return i;
        }
        t.s([
            "Buffer",
            0,
            h
        ], 55585);
        t.s([
            "ensureIsBuffer",
            0,
            o
        ], 398013);
        t.s([
            "getGeometryBounds",
            0,
            u
        ], 72131);
        class l extends i.default {
            constructor(t = {}){
                super();
                this._gpuData = Object.create(null);
                this.autoGarbageCollect = true;
                this._gcLastUsed = -1;
                this.uid = r.uid("geometry");
                this._layoutKey = 0;
                this.instanceCount = 1;
                this._bounds = new s.Bounds;
                this._boundsDirty = true;
                const { attributes, indexBuffer, topology } = t;
                this.buffers = [];
                this.attributes = {};
                if (attributes) {
                    for(const t in attributes){
                        this.addAttribute(t, attributes[t]);
                    }
                }
                this.instanceCount = t.instanceCount ?? 1;
                if (indexBuffer) {
                    this.addIndex(indexBuffer);
                }
                this.topology = topology || "triangle-list";
            }
            onBufferUpdate() {
                this._boundsDirty = true;
                this.emit("update", this);
            }
            getAttribute(t) {
                return this.attributes[t];
            }
            getIndex() {
                return this.indexBuffer;
            }
            getBuffer(t) {
                return this.getAttribute(t).buffer;
            }
            getSize() {
                for(let t in this.attributes){
                    let e = this.attributes[t];
                    return e.buffer.data.length / (e.stride / 4 || e.size);
                }
                return 0;
            }
            addAttribute(t, e) {
                let buffer;
                if ((buffer = e) instanceof h || Array.isArray(buffer) || buffer.BYTES_PER_ELEMENT) {
                    buffer = {
                        buffer
                    };
                }
                buffer.buffer = o(buffer.buffer, false);
                let s = buffer;
                if (-1 === this.buffers.indexOf(s.buffer)) {
                    this.buffers.push(s.buffer);
                    s.buffer.on("update", this.onBufferUpdate, this);
                    s.buffer.on("change", this.onBufferUpdate, this);
                }
                this.attributes[t] = s;
            }
            addIndex(t) {
                this.indexBuffer = o(t, true);
                this.buffers.push(this.indexBuffer);
            }
            get bounds() {
                if (this._boundsDirty) {
                    this._boundsDirty = false;
                    return u(this, "aPosition", this._bounds);
                }
                return this._bounds;
            }
            unload() {
                for(let t in this.emit("unload", this), this._gpuData){
                    this._gpuData[t]?.destroy();
                }
                this._gpuData = Object.create(null);
            }
            destroy(t = false) {
                this.emit("destroy", this);
                this.removeAllListeners();
                if (t) {
                    this.buffers.forEach((t)=>t.destroy());
                }
                this.unload();
                this.indexBuffer?.destroy();
                this.attributes = null;
                this.buffers = null;
                this.indexBuffer = null;
                this._bounds = null;
            }
        }
        t.s([
            "Geometry",
            0,
            l
        ], 719885);
    },
    706848,
    (t)=>{
        "use strict";
        var e = t.i(733705);
        t.s([
            "InstructionSet",
            0,
            class {
                constructor(){
                    this.uid = e.uid("instructionSet");
                    this.instructions = [];
                    this.instructionSize = 0;
                    this.renderables = [];
                    this.gcTick = 0;
                }
                reset() {
                    this.instructionSize = 0;
                }
                destroy() {
                    this.instructions.length = 0;
                    this.renderables.length = 0;
                    this.renderPipes = null;
                    this.gcTick = 0;
                }
                add(t) {
                    this.instructions[this.instructionSize++] = t;
                }
                log() {
                    this.instructions.length = this.instructionSize;
                    console.table(this.instructions, [
                        "type",
                        "action"
                    ]);
                }
            }
        ]);
    },
    761149,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        var i = t.i(733705);
        var s = t.i(550645);
        var r = t.i(175444);
        var n = t.i(818011);
        var a = t.i(162450);
        var h = t.i(153594);
        class o extends e.default {
            constructor(t){
                super();
                this.uid = i.uid("shader");
                this._uniformBindMap = Object.create(null);
                this._ownedBindGroups = [];
                this._destroyed = false;
                let { gpuProgram, glProgram, groups, resources, compatibleRenderers, groupMap } = t;
                this.gpuProgram = gpuProgram;
                this.glProgram = glProgram;
                if (compatibleRenderers === undefined) {
                    compatibleRenderers = 0;
                    if (gpuProgram) {
                        compatibleRenderers |= a.RendererType.WEBGPU;
                    }
                    if (glProgram) {
                        compatibleRenderers |= a.RendererType.WEBGL;
                    }
                }
                this.compatibleRenderers = compatibleRenderers;
                const d = {};
                if (!(resources || groups)) {
                    resources = {};
                }
                if (resources && groups) {
                    throw Error("[Shader] Cannot have both resources and groups");
                }
                if (gpuProgram || !groups || groupMap) {
                    if (!gpuProgram && groups && groupMap) {
                        for(const group in groupMap){
                            for(const e in groupMap[group]){
                                const i = groupMap[group][e];
                                d[i] = {
                                    group,
                                    binding: e,
                                    name: i
                                };
                            }
                        }
                    } else if (gpuProgram && groups && !groupMap) {
                        const t = gpuProgram.structsAndGroups.groups;
                        groupMap = {};
                        t.forEach((t)=>{
                            groupMap[t.group] = groupMap[t.group] || {};
                            groupMap[t.group][t.binding] = t.name;
                            d[t.name] = t;
                        });
                    } else if (resources) {
                        groups = {};
                        groupMap = {};
                        if (gpuProgram) {
                            gpuProgram.structsAndGroups.groups.forEach((t)=>{
                                groupMap[t.group] = groupMap[t.group] || {};
                                groupMap[t.group][t.binding] = t.name;
                                d[t.name] = t;
                            });
                        }
                        let t = 0;
                        for(const e in resources){
                            if (!d[e]) {
                                if (!groups[99]) {
                                    groups[99] = new r.BindGroup;
                                    this._ownedBindGroups.push(groups[99]);
                                }
                                d[e] = {
                                    group: 99,
                                    binding: t,
                                    name: e
                                };
                                groupMap[99] = groupMap[99] || {};
                                groupMap[99][t] = e;
                                t++;
                            }
                        }
                        for(const t in resources){
                            let e = resources[t];
                            if (!(e.source || e._resourceType)) {
                                e = new h.UniformGroup(e);
                            }
                            const i = d[t];
                            if (i) {
                                if (!groups[i.group]) {
                                    groups[i.group] = new r.BindGroup;
                                    this._ownedBindGroups.push(groups[i.group]);
                                }
                                groups[i.group].setResource(e, i.binding);
                            }
                        }
                    }
                } else {
                    throw Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
                }
                this.groups = groups;
                this._uniformBindMap = groupMap;
                this.resources = this._buildResourceAccessor(groups, d);
            }
            addResource(t, e, i) {
                let s;
                let n;
                if (!(s = this._uniformBindMap)[e]) {
                    s[e] = {};
                }
                if (!(n = this._uniformBindMap[e])[i]) {
                    n[i] = t;
                }
                if (!this.groups[e]) {
                    this.groups[e] = new r.BindGroup;
                    this._ownedBindGroups.push(this.groups[e]);
                }
            }
            _buildResourceAccessor(t, e) {
                let i = {};
                for(let s in e){
                    let r = e[s];
                    Object.defineProperty(i, r.name, {
                        get: ()=>t[r.group].getResource(r.binding),
                        set (e) {
                            t[r.group].setResource(e, r.binding);
                        }
                    });
                }
                return i;
            }
            destroy(t = false) {
                if (!this._destroyed) {
                    this._destroyed = true;
                    this.emit("destroy", this);
                    t && (this.gpuProgram?.destroy(), this.glProgram?.destroy());
                    this.gpuProgram = null;
                    this.glProgram = null;
                    this.removeAllListeners();
                    this._uniformBindMap = null;
                    this._ownedBindGroups.forEach((t)=>{
                        t.destroy();
                    });
                    this._ownedBindGroups = null;
                    this.resources = null;
                    this.groups = null;
                }
            }
            static from(t) {
                let gpuProgram_1;
                let glProgram_1;
                let { gpu, gl, ...rest } = t;
                if (gpu) {
                    gpuProgram_1 = n.GpuProgram.from(gpu);
                }
                if (gl) {
                    glProgram_1 = s.GlProgram.from(gl);
                }
                return new o({
                    gpuProgram: gpuProgram_1,
                    glProgram: glProgram_1,
                    ...rest
                });
            }
        }
        t.s([
            "Shader",
            0,
            o
        ]);
    },
    153594,
    189530,
    609506,
    (t)=>{
        "use strict";
        var e = t.i(733705);
        var i = t.i(235569);
        let s = [
            "f32",
            "i32",
            "vec2<f32>",
            "vec3<f32>",
            "vec4<f32>",
            "mat2x2<f32>",
            "mat3x3<f32>",
            "mat4x4<f32>",
            "mat3x2<f32>",
            "mat4x2<f32>",
            "mat2x3<f32>",
            "mat4x3<f32>",
            "mat2x4<f32>",
            "mat3x4<f32>",
            "vec2<i32>",
            "vec3<i32>",
            "vec4<i32>"
        ];
        let r = s.reduce((acc, item)=>{
            acc[item] = true;
            return acc;
        }, {});
        function n(t, e) {
            switch(t){
                case "f32":
                    return 0;
                case "vec2<f32>":
                    return new Float32Array(2 * e);
                case "vec3<f32>":
                    return new Float32Array(3 * e);
                case "vec4<f32>":
                    return new Float32Array(4 * e);
                case "mat2x2<f32>":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        1
                    ]);
                case "mat3x3<f32>":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1
                    ]);
                case "mat4x4<f32>":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                    ]);
            }
            return null;
        }
        t.s([
            "UNIFORM_TYPES_MAP",
            0,
            r,
            "UNIFORM_TYPES_VALUES",
            0,
            s
        ], 189530);
        t.s([
            "getDefaultUniformValue",
            0,
            n
        ], 609506);
        let a = class t {
            constructor(a, h){
                this._touched = 0;
                this.uid = e.uid("uniform");
                this._resourceType = "uniformGroup";
                this._resourceId = e.uid("resource");
                this.isUniformGroup = true;
                this._dirtyId = 0;
                this.destroyed = false;
                h = {
                    ...t.defaultOptions,
                    ...h
                };
                this.uniformStructures = a;
                const o = {};
                for(const t in a){
                    const e = a[t];
                    e.name = t;
                    e.size = e.size ?? 1;
                    if (!r[e.type]) {
                        const t = e.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
                        if (t) {
                            const [, i, s] = t;
                            throw Error(`Uniform type ${e.type} is not supported. Use type: '${i}', size: ${s} instead.`);
                        }
                        throw Error(`Uniform type ${e.type} is not supported. Supported uniform types are: ${s.join(", ")}`);
                    }
                    e.value ?? (e.value = n(e.type, e.size));
                    o[t] = e.value;
                }
                this.uniforms = o;
                this._dirtyId = 1;
                this.ubo = h.ubo;
                this.isStatic = h.isStatic;
                this._signature = i.createIdFromString(Object.keys(o).map((t)=>`${t}-${a[t].type}`).join("-"), "uniform-group");
            }
            update() {
                this._dirtyId++;
            }
        };
        a.defaultOptions = {
            ubo: false,
            isStatic: false
        };
        t.s([
            "UniformGroup",
            0,
            a
        ], 153594);
    },
    337654,
    338228,
    818642,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        var i = t.i(164811);
        var s = t.i(539088);
        var r = t.i(733705);
        var n = t.i(727905);
        var a = t.i(506721);
        var h = t.i(78278);
        var o = t.i(317765);
        class u extends o.TextureSource {
            constructor(t){
                const resource = t.resource || new Float32Array(t.width * t.height * 4);
                let i = t.format;
                i || (resource instanceof Float32Array ? i = "rgba32float" : resource instanceof Int32Array || resource instanceof Uint32Array ? i = "rgba32uint" : resource instanceof Int16Array || resource instanceof Uint16Array ? i = "rgba16uint" : (Int8Array, i = "bgra8unorm"));
                super({
                    ...t,
                    resource,
                    format: i
                });
                this.uploadMethodId = "buffer";
            }
            static test(t) {
                return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
            }
        }
        u.extension = h.ExtensionType.TextureSource;
        t.s([
            "BufferImageSource",
            0,
            u
        ], 338228);
        var l = t.i(389474);
        let d = new l.Matrix;
        class c {
            constructor(t, e){
                this.mapCoord = new l.Matrix;
                this.uClampFrame = new Float32Array(4);
                this.uClampOffset = new Float32Array(2);
                this._updateID = 0;
                this.clampOffset = 0;
                if (e === undefined) {
                    this.clampMargin = t.width < 10 ? 0 : 0.5;
                } else {
                    this.clampMargin = e;
                }
                this.isSimple = false;
                this.texture = t;
            }
            get texture() {
                return this._texture;
            }
            set texture(t) {
                if (this._texture !== t) {
                    this._texture?.removeListener("update", this.update, this);
                    this._texture = t;
                    this._texture.addListener("update", this.update, this);
                }
                this.update();
            }
            multiplyUvs(t, e = t) {
                let mapCoord = this.mapCoord;
                for(let s = 0; s < t.length; s += 2){
                    let r = t[s];
                    let n = t[s + 1];
                    e[s] = r * mapCoord.a + n * mapCoord.c + mapCoord.tx;
                    e[s + 1] = r * mapCoord.b + n * mapCoord.d + mapCoord.ty;
                }
                return e;
            }
            update() {
                let _texture = this._texture;
                this._updateID++;
                let t_uvs = _texture.uvs;
                this.mapCoord.set(t_uvs.x1 - t_uvs.x0, t_uvs.y1 - t_uvs.y0, t_uvs.x3 - t_uvs.x0, t_uvs.y3 - t_uvs.y0, t_uvs.x0, t_uvs.y0);
                let t_orig = _texture.orig;
                let t_trim = _texture.trim;
                if (t_trim) {
                    d.set(t_orig.width / t_trim.width, 0, 0, t_orig.height / t_trim.height, -t_trim.x / t_trim.width, -t_trim.y / t_trim.height);
                    this.mapCoord.append(d);
                }
                let t_source = _texture.source;
                let uClampFrame = this.uClampFrame;
                let a = this.clampMargin / t_source._resolution;
                let h = this.clampOffset / t_source._resolution;
                uClampFrame[0] = (_texture.frame.x + a + h) / t_source.width;
                uClampFrame[1] = (_texture.frame.y + a + h) / t_source.height;
                uClampFrame[2] = (_texture.frame.x + _texture.frame.width - a + h) / t_source.width;
                uClampFrame[3] = (_texture.frame.y + _texture.frame.height - a + h) / t_source.height;
                this.uClampOffset[0] = this.clampOffset / t_source.pixelWidth;
                this.uClampOffset[1] = this.clampOffset / t_source.pixelHeight;
                this.isSimple = _texture.frame.width === t_source.width && _texture.frame.height === t_source.height && _texture.rotate === 0;
                return true;
            }
        }
        t.s([
            "TextureMatrix",
            0,
            c
        ], 818642);
        class f extends e.default {
            constructor({ source, label, frame, orig, trim, defaultAnchor, defaultBorders, rotate, dynamic } = {}){
                super();
                this.uid = r.uid("texture");
                this.uvs = {
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    x3: 0,
                    y3: 0
                };
                this.frame = new s.Rectangle;
                this.noFrame = false;
                this.dynamic = false;
                this.isTexture = true;
                this.label = label;
                this.source = source?.source ?? new o.TextureSource;
                this.noFrame = !frame;
                if (frame) {
                    this.frame.copyFrom(frame);
                } else {
                    const { width, height } = this._source;
                    this.frame.width = width;
                    this.frame.height = height;
                }
                this.orig = orig || this.frame;
                this.trim = trim;
                this.rotate = rotate ?? 0;
                this.defaultAnchor = defaultAnchor;
                this.defaultBorders = defaultBorders;
                this.destroyed = false;
                this.dynamic = dynamic || false;
                this.updateUvs();
            }
            set source(t) {
                if (this._source) {
                    this._source.off("resize", this.update, this);
                }
                this._source = t;
                t.on("resize", this.update, this);
                this.emit("update", this);
            }
            get source() {
                return this._source;
            }
            get textureMatrix() {
                if (!this._textureMatrix) {
                    this._textureMatrix = new c(this);
                }
                return this._textureMatrix;
            }
            get width() {
                return this.orig.width;
            }
            get height() {
                return this.orig.height;
            }
            updateUvs() {
                let { uvs, frame } = this;
                let { width, height } = this._source;
                let n = frame.x / width;
                let a = frame.y / height;
                let h = frame.width / width;
                let o = frame.height / height;
                let rotate = this.rotate;
                if (rotate) {
                    let e = h / 2;
                    let s = o / 2;
                    let r = n + e;
                    let l = a + s;
                    rotate = i.groupD8.add(rotate, i.groupD8.NW);
                    uvs.x0 = r + e * i.groupD8.uX(rotate);
                    uvs.y0 = l + s * i.groupD8.uY(rotate);
                    rotate = i.groupD8.add(rotate, 2);
                    uvs.x1 = r + e * i.groupD8.uX(rotate);
                    uvs.y1 = l + s * i.groupD8.uY(rotate);
                    rotate = i.groupD8.add(rotate, 2);
                    uvs.x2 = r + e * i.groupD8.uX(rotate);
                    uvs.y2 = l + s * i.groupD8.uY(rotate);
                    rotate = i.groupD8.add(rotate, 2);
                    uvs.x3 = r + e * i.groupD8.uX(rotate);
                    uvs.y3 = l + s * i.groupD8.uY(rotate);
                } else {
                    uvs.x0 = n;
                    uvs.y0 = a;
                    uvs.x1 = n + h;
                    uvs.y1 = a;
                    uvs.x2 = n + h;
                    uvs.y2 = a + o;
                    uvs.x3 = n;
                    uvs.y3 = a + o;
                }
            }
            destroy(t = false) {
                if (this._source) {
                    this._source.off("resize", this.update, this);
                    if (t) {
                        this._source.destroy();
                        this._source = null;
                    }
                }
                this._textureMatrix = null;
                this.destroyed = true;
                this.emit("destroy", this);
                this.removeAllListeners();
            }
            update() {
                if (this.noFrame) {
                    this.frame.width = this._source.width;
                    this.frame.height = this._source.height;
                }
                this.updateUvs();
                this.emit("update", this);
            }
            get baseTexture() {
                n.deprecation(n.v8_0_0, "Texture.baseTexture is now Texture.source");
                return this._source;
            }
        }
        f.EMPTY = new f({
            label: "EMPTY",
            source: new o.TextureSource({
                label: "EMPTY"
            })
        });
        f.EMPTY.destroy = a.NOOP;
        f.WHITE = new f({
            source: new u({
                resource: new Uint8Array([
                    255,
                    255,
                    255,
                    255
                ]),
                width: 1,
                height: 1,
                alphaMode: "premultiply-alpha-on-upload",
                label: "WHITE"
            }),
            label: "WHITE"
        });
        f.WHITE.destroy = a.NOOP;
        t.s([
            "Texture",
            0,
            f
        ], 337654);
    },
    317765,
    356566,
    317624,
    602699,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        function i(t) {
            return !(t & t - 1) && !!t;
        }
        function s(t) {
            let e = {};
            for(let i in t){
                if (t[i] !== undefined) {
                    e[i] = t[i];
                }
            }
            return e;
        }
        t.s([
            "isPow2",
            0,
            i,
            "log2",
            0,
            (t)=>{
                let e = (t > 65535) << 4;
                let i = ((t >>>= e) > 255) << 3;
                t >>>= i;
                e |= i;
                i = (t > 15) << 2;
                t >>>= i;
                e |= i;
                i = (t > 3) << 1;
                t >>>= i;
                return (e |= i) | t >> 1;
            },
            "nextPow2",
            0,
            (t)=>{
                t += +(t === 0);
                --t;
                t |= t >>> 1;
                t |= t >>> 2;
                t |= t >>> 4;
                t |= t >>> 8;
                return (t |= t >>> 16) + 1;
            }
        ], 356566);
        t.s([
            "definedProps",
            0,
            s
        ], 317624);
        var r = t.i(733705);
        var n = e;
        var a = t.i(727905);
        let h = Object.create(null);
        let o = class t extends n.default {
            constructor(e = {}){
                super();
                this._resourceType = "textureSampler";
                this._touched = 0;
                this._maxAnisotropy = 1;
                this.destroyed = false;
                e = {
                    ...t.defaultOptions,
                    ...e
                };
                this.addressMode = e.addressMode;
                this.addressModeU = e.addressModeU ?? this.addressModeU;
                this.addressModeV = e.addressModeV ?? this.addressModeV;
                this.addressModeW = e.addressModeW ?? this.addressModeW;
                this.scaleMode = e.scaleMode;
                this.magFilter = e.magFilter ?? this.magFilter;
                this.minFilter = e.minFilter ?? this.minFilter;
                this.mipmapFilter = e.mipmapFilter ?? this.mipmapFilter;
                this.lodMinClamp = e.lodMinClamp;
                this.lodMaxClamp = e.lodMaxClamp;
                this.compare = e.compare;
                this.maxAnisotropy = e.maxAnisotropy ?? 1;
            }
            set addressMode(t) {
                this.addressModeU = t;
                this.addressModeV = t;
                this.addressModeW = t;
            }
            get addressMode() {
                return this.addressModeU;
            }
            set wrapMode(t) {
                a.deprecation(a.v8_0_0, "TextureStyle.wrapMode is now TextureStyle.addressMode");
                this.addressMode = t;
            }
            get wrapMode() {
                return this.addressMode;
            }
            set scaleMode(t) {
                this.magFilter = t;
                this.minFilter = t;
                this.mipmapFilter = t;
            }
            get scaleMode() {
                return this.magFilter;
            }
            set maxAnisotropy(t) {
                this._maxAnisotropy = Math.min(t, 16);
                if (this._maxAnisotropy > 1) {
                    this.scaleMode = "linear";
                }
            }
            get maxAnisotropy() {
                return this._maxAnisotropy;
            }
            get _resourceId() {
                return this._sharedResourceId || this._generateResourceId();
            }
            update() {
                this._sharedResourceId = null;
                this.emit("change", this);
            }
            _generateResourceId() {
                let t;
                let e = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
                this._sharedResourceId = ((t = h[e]) === undefined && (h[e] = r.uid("resource")), t);
                return this._resourceId;
            }
            destroy() {
                this.destroyed = true;
                this.emit("destroy", this);
                this.emit("change", this);
                this.removeAllListeners();
            }
        };
        o.defaultOptions = {
            addressMode: "clamp-to-edge",
            scaleMode: "linear"
        };
        t.s([
            "TextureStyle",
            0,
            o
        ], 602699);
        let u = class t extends e.default {
            constructor(e = {}){
                super();
                this.options = e;
                this._gpuData = Object.create(null);
                this._gcLastUsed = -1;
                this.uid = r.uid("textureSource");
                this._resourceType = "textureSource";
                this._resourceId = r.uid("resource");
                this.uploadMethodId = "unknown";
                this._resolution = 1;
                this.pixelWidth = 1;
                this.pixelHeight = 1;
                this.width = 1;
                this.height = 1;
                this.sampleCount = 1;
                this.mipLevelCount = 1;
                this.autoGenerateMipmaps = false;
                this.format = "rgba8unorm";
                this.dimension = "2d";
                this.viewDimension = "2d";
                this.arrayLayerCount = 1;
                this.antialias = false;
                this.transient = false;
                this._touched = 0;
                this._batchTick = -1;
                this._textureBindLocation = -1;
                e = {
                    ...t.defaultOptions,
                    ...e
                };
                this.label = e.label ?? "";
                this.resource = e.resource;
                this.autoGarbageCollect = e.autoGarbageCollect;
                this._resolution = e.resolution;
                if (e.width) {
                    this.pixelWidth = e.width * this._resolution;
                } else {
                    this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1;
                }
                if (e.height) {
                    this.pixelHeight = e.height * this._resolution;
                } else {
                    this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1;
                }
                this.width = this.pixelWidth / this._resolution;
                this.height = this.pixelHeight / this._resolution;
                this.format = e.format;
                this.dimension = e.dimensions;
                this.viewDimension = e.viewDimension ?? e.dimensions;
                this.arrayLayerCount = e.arrayLayerCount;
                this.mipLevelCount = e.mipLevelCount;
                this.autoGenerateMipmaps = e.autoGenerateMipmaps;
                this.sampleCount = e.sampleCount;
                this.antialias = e.antialias;
                this.transient = e.transient ?? false;
                this.alphaMode = e.alphaMode;
                this.style = new o(s(e));
                this.destroyed = false;
                this._refreshPOT();
            }
            get source() {
                return this;
            }
            get style() {
                return this._style;
            }
            set style(t) {
                if (this.style !== t) {
                    this._style?.off("change", this._onStyleChange, this);
                    this._style = t;
                    this._style?.on("change", this._onStyleChange, this);
                    this._onStyleChange();
                }
            }
            set maxAnisotropy(t) {
                this._style.maxAnisotropy = t;
            }
            get maxAnisotropy() {
                return this._style.maxAnisotropy;
            }
            get addressMode() {
                return this._style.addressMode;
            }
            set addressMode(t) {
                this._style.addressMode = t;
            }
            get repeatMode() {
                return this._style.addressMode;
            }
            set repeatMode(t) {
                this._style.addressMode = t;
            }
            get magFilter() {
                return this._style.magFilter;
            }
            set magFilter(t) {
                this._style.magFilter = t;
            }
            get minFilter() {
                return this._style.minFilter;
            }
            set minFilter(t) {
                this._style.minFilter = t;
            }
            get mipmapFilter() {
                return this._style.mipmapFilter;
            }
            set mipmapFilter(t) {
                this._style.mipmapFilter = t;
            }
            get lodMinClamp() {
                return this._style.lodMinClamp;
            }
            set lodMinClamp(t) {
                this._style.lodMinClamp = t;
            }
            get lodMaxClamp() {
                return this._style.lodMaxClamp;
            }
            set lodMaxClamp(t) {
                this._style.lodMaxClamp = t;
            }
            _onStyleChange() {
                this.emit("styleChange", this);
            }
            update() {
                if (this.resource) {
                    let t = this._resolution;
                    if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) {
                        return;
                    }
                }
                this.emit("update", this);
            }
            destroy() {
                this.destroyed = true;
                this.unload();
                this.emit("destroy", this);
                if (this._style) {
                    this._style.destroy();
                    this._style = null;
                }
                this.uploadMethodId = null;
                this.resource = null;
                this.removeAllListeners();
            }
            unload() {
                for(let t in this._resourceId = r.uid("resource"), this.emit("change", this), this.emit("unload", this), this._gpuData){
                    this._gpuData[t]?.destroy?.();
                }
                this._gpuData = Object.create(null);
            }
            get resourceWidth() {
                let { resource } = this;
                return resource.naturalWidth || resource.videoWidth || resource.displayWidth || resource.width;
            }
            get resourceHeight() {
                let { resource } = this;
                return resource.naturalHeight || resource.videoHeight || resource.displayHeight || resource.height;
            }
            get resolution() {
                return this._resolution;
            }
            set resolution(t) {
                if (this._resolution !== t) {
                    this._resolution = t;
                    this.width = this.pixelWidth / t;
                    this.height = this.pixelHeight / t;
                }
            }
            resize(t, e, i) {
                if (!i) {
                    i = this._resolution;
                }
                if (!t) {
                    t = this.width;
                }
                if (!e) {
                    e = this.height;
                }
                let s = Math.round(t * i);
                let n = Math.round(e * i);
                this.width = s / i;
                this.height = n / i;
                this._resolution = i;
                return (this.pixelWidth !== s || this.pixelHeight !== n) && (this._refreshPOT(), this.pixelWidth = s, this.pixelHeight = n, this.emit("resize", this), this._resourceId = r.uid("resource"), this.emit("change", this), true);
            }
            updateMipmaps() {
                if (this.autoGenerateMipmaps && this.mipLevelCount > 1) {
                    this.emit("updateMipmaps", this);
                }
            }
            set wrapMode(t) {
                this._style.wrapMode = t;
            }
            get wrapMode() {
                return this._style.wrapMode;
            }
            set scaleMode(t) {
                this._style.scaleMode = t;
            }
            get scaleMode() {
                return this._style.scaleMode;
            }
            _refreshPOT() {
                this.isPowerOfTwo = i(this.pixelWidth) && i(this.pixelHeight);
            }
            static test(t) {
                throw Error("Unimplemented");
            }
        };
        u.defaultOptions = {
            resolution: 1,
            format: "bgra8unorm",
            alphaMode: "premultiply-alpha-on-upload",
            dimensions: "2d",
            viewDimension: "2d",
            arrayLayerCount: 1,
            mipLevelCount: 1,
            autoGenerateMipmaps: false,
            sampleCount: 1,
            antialias: false,
            autoGarbageCollect: false
        };
        t.s([
            "TextureSource",
            0,
            u
        ], 317765);
    },
    235569,
    (t)=>{
        "use strict";
        let e = Object.create(null);
        let i = Object.create(null);
        t.s([
            "createIdFromString",
            0,
            (t, s)=>{
                let r = i[t];
                if (r === undefined) {
                    if (e[s] === undefined) {
                        e[s] = 1;
                    }
                    i[t] = r = e[s]++;
                }
                return r;
            }
        ]);
    },
    162450,
    (t)=>{
        "use strict";
        var e;
        e = i || {};
        e[e.WEBGL = 1] = "WEBGL";
        e[e.WEBGPU = 2] = "WEBGPU";
        e[e.CANVAS = 4] = "CANVAS";
        e[e.BOTH = 3] = "BOTH";
        var i = e;
        t.s([
            "RendererType",
            0,
            i
        ]);
    },
    453549,
    (t)=>{
        "use strict";
        var e = t.i(389474);
        var i = t.i(539088);
        let s = new e.Matrix;
        t.s([
            "Bounds",
            0,
            class t {
                constructor(t = Infinity, e = Infinity, i = -Infinity, r = -Infinity){
                    this.minX = Infinity;
                    this.minY = Infinity;
                    this.maxX = -Infinity;
                    this.maxY = -Infinity;
                    this.matrix = s;
                    this.minX = t;
                    this.minY = e;
                    this.maxX = i;
                    this.maxY = r;
                }
                isEmpty() {
                    return this.minX > this.maxX || this.minY > this.maxY;
                }
                get rectangle() {
                    if (!this._rectangle) {
                        this._rectangle = new i.Rectangle;
                    }
                    let _rectangle = this._rectangle;
                    if (this.minX > this.maxX || this.minY > this.maxY) {
                        _rectangle.x = 0;
                        _rectangle.y = 0;
                        _rectangle.width = 0;
                        _rectangle.height = 0;
                    } else {
                        _rectangle.copyFromBounds(this);
                    }
                    return _rectangle;
                }
                clear() {
                    this.minX = Infinity;
                    this.minY = Infinity;
                    this.maxX = -Infinity;
                    this.maxY = -Infinity;
                    this.matrix = s;
                    return this;
                }
                set(t, e, i, s) {
                    this.minX = t;
                    this.minY = e;
                    this.maxX = i;
                    this.maxY = s;
                }
                addFrame(t, e, i, s, r) {
                    if (!r) {
                        r = this.matrix;
                    }
                    let n = r.a;
                    let a = r.b;
                    let h = r.c;
                    let o = r.d;
                    let u = r.tx;
                    let l = r.ty;
                    let minX = this.minX;
                    let minY = this.minY;
                    let maxX = this.maxX;
                    let maxY = this.maxY;
                    let p = n * t + h * e + u;
                    let g = a * t + o * e + l;
                    if (p < minX) {
                        minX = p;
                    }
                    if (g < minY) {
                        minY = g;
                    }
                    if (p > maxX) {
                        maxX = p;
                    }
                    if (g > maxY) {
                        maxY = g;
                    }
                    p = n * i + h * e + u;
                    g = a * i + o * e + l;
                    if (p < minX) {
                        minX = p;
                    }
                    if (g < minY) {
                        minY = g;
                    }
                    if (p > maxX) {
                        maxX = p;
                    }
                    if (g > maxY) {
                        maxY = g;
                    }
                    p = n * t + h * s + u;
                    g = a * t + o * s + l;
                    if (p < minX) {
                        minX = p;
                    }
                    if (g < minY) {
                        minY = g;
                    }
                    if (p > maxX) {
                        maxX = p;
                    }
                    if (g > maxY) {
                        maxY = g;
                    }
                    p = n * i + h * s + u;
                    g = a * i + o * s + l;
                    if (p < minX) {
                        minX = p;
                    }
                    if (g < minY) {
                        minY = g;
                    }
                    if (p > maxX) {
                        maxX = p;
                    }
                    if (g > maxY) {
                        maxY = g;
                    }
                    this.minX = minX;
                    this.minY = minY;
                    this.maxX = maxX;
                    this.maxY = maxY;
                }
                addRect(t, e) {
                    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
                }
                addBounds(t, e) {
                    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
                }
                addBoundsMask(t) {
                    this.minX = this.minX > t.minX ? this.minX : t.minX;
                    this.minY = this.minY > t.minY ? this.minY : t.minY;
                    this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX;
                    this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
                }
                applyMatrix(t) {
                    let minX = this.minX;
                    let minY = this.minY;
                    let maxX = this.maxX;
                    let maxY = this.maxY;
                    let { a: a_1, b, c: c_1, d: d_1, tx, ty } = t;
                    let d = a_1 * minX + c_1 * minY + tx;
                    let c = b * minX + d_1 * minY + ty;
                    this.minX = d;
                    this.minY = c;
                    this.maxX = d;
                    this.maxY = c;
                    d = a_1 * maxX + c_1 * minY + tx;
                    c = b * maxX + d_1 * minY + ty;
                    this.minX = d < this.minX ? d : this.minX;
                    this.minY = c < this.minY ? c : this.minY;
                    this.maxX = d > this.maxX ? d : this.maxX;
                    this.maxY = c > this.maxY ? c : this.maxY;
                    d = a_1 * minX + c_1 * maxY + tx;
                    c = b * minX + d_1 * maxY + ty;
                    this.minX = d < this.minX ? d : this.minX;
                    this.minY = c < this.minY ? c : this.minY;
                    this.maxX = d > this.maxX ? d : this.maxX;
                    this.maxY = c > this.maxY ? c : this.maxY;
                    d = a_1 * maxX + c_1 * maxY + tx;
                    c = b * maxX + d_1 * maxY + ty;
                    this.minX = d < this.minX ? d : this.minX;
                    this.minY = c < this.minY ? c : this.minY;
                    this.maxX = d > this.maxX ? d : this.maxX;
                    this.maxY = c > this.maxY ? c : this.maxY;
                }
                fit(t) {
                    if (this.minX < t.left) {
                        this.minX = t.left;
                    }
                    if (this.maxX > t.right) {
                        this.maxX = t.right;
                    }
                    if (this.minY < t.top) {
                        this.minY = t.top;
                    }
                    if (this.maxY > t.bottom) {
                        this.maxY = t.bottom;
                    }
                    return this;
                }
                fitBounds(t, e, i, s) {
                    if (this.minX < t) {
                        this.minX = t;
                    }
                    if (this.maxX > e) {
                        this.maxX = e;
                    }
                    if (this.minY < i) {
                        this.minY = i;
                    }
                    if (this.maxY > s) {
                        this.maxY = s;
                    }
                    return this;
                }
                pad(t, e = t) {
                    this.minX -= t;
                    this.maxX += t;
                    this.minY -= e;
                    this.maxY += e;
                    return this;
                }
                ceil() {
                    this.minX = Math.floor(this.minX);
                    this.minY = Math.floor(this.minY);
                    this.maxX = Math.ceil(this.maxX);
                    this.maxY = Math.ceil(this.maxY);
                    return this;
                }
                clone() {
                    return new t(this.minX, this.minY, this.maxX, this.maxY);
                }
                scale(t, e = t) {
                    this.minX *= t;
                    this.minY *= e;
                    this.maxX *= t;
                    this.maxY *= e;
                    return this;
                }
                get x() {
                    return this.minX;
                }
                set x(t) {
                    let e = this.maxX - this.minX;
                    this.minX = t;
                    this.maxX = t + e;
                }
                get y() {
                    return this.minY;
                }
                set y(t) {
                    let e = this.maxY - this.minY;
                    this.minY = t;
                    this.maxY = t + e;
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
                    return this.minX + this.minY !== Infinity;
                }
                addVertexData(t, e, i, s) {
                    let minX = this.minX;
                    let minY = this.minY;
                    let maxX = this.maxX;
                    let maxY = this.maxY;
                    if (!s) {
                        s = this.matrix;
                    }
                    let o = s.a;
                    let u = s.b;
                    let l = s.c;
                    let d = s.d;
                    let c = s.tx;
                    let f = s.ty;
                    for(let s = e; s < i; s += 2){
                        let e = t[s];
                        let i = t[s + 1];
                        let m = o * e + l * i + c;
                        let p = u * e + d * i + f;
                        minX = m < minX ? m : minX;
                        minY = p < minY ? p : minY;
                        maxX = m > maxX ? m : maxX;
                        maxY = p > maxY ? p : maxY;
                    }
                    this.minX = minX;
                    this.minY = minY;
                    this.maxX = maxX;
                    this.maxY = maxY;
                }
                containsPoint(t, e) {
                    return !!(this.minX <= t) && !!(this.minY <= e) && !!(this.maxX >= t) && !!(this.maxY >= e);
                }
                toString() {
                    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
                }
                copyFrom(t) {
                    this.minX = t.minX;
                    this.minY = t.minY;
                    this.maxX = t.maxX;
                    this.maxY = t.maxY;
                    return this;
                }
            }
        ]);
    },
    414205,
    (t)=>{
        "use strict";
        t.s([
            "multiplyHexColors",
            0,
            (t, e)=>{
                if (t !== 16777215 && e) {
                    if (e !== 16777215 && t) {
                        return ((t >> 16 & 255) * (e >> 16 & 255) / 255 << 16) + ((t >> 8 & 255) * (e >> 8 & 255) / 255 << 8) + ((255 & t) * (255 & e) / 255 | 0);
                    }
                    return t;
                }
                return e;
            }
        ]);
    },
    733705,
    (t)=>{
        "use strict";
        let e = {
            default: -1
        };
        t.s([
            "resetUids",
            0,
            ()=>{
                for(let t in e){
                    delete e[t];
                }
            },
            "uid",
            0,
            (t = "default")=>{
                if (e[t] === undefined) {
                    e[t] = -1;
                }
                return ++e[t];
            }
        ]);
    },
    727905,
    (t)=>{
        "use strict";
        let e = new Set;
        let i = {
            quiet: false,
            noColor: false
        };
        let s = (t, s, r = 3)=>{
            if (i.quiet || e.has(s)) {
                return;
            }
            let stack = Error().stack;
            let a = `${s}
Deprecated since v${t}`;
            let h = typeof console.groupCollapsed === "function" && !i.noColor;
            if (stack === undefined) {
                console.warn("PixiJS Deprecation Warning: ", a);
            } else {
                stack = stack.split("\n").splice(r).join("\n");
                if (h) {
                    console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", a);
                    console.warn(stack);
                    console.groupEnd();
                } else {
                    console.warn("PixiJS Deprecation Warning: ", a);
                    console.warn(stack);
                }
            }
            e.add(s);
        };
        Object.defineProperties(s, {
            quiet: {
                get: ()=>i.quiet,
                set: (t)=>{
                    i.quiet = t;
                },
                enumerable: true,
                configurable: false
            },
            noColor: {
                get: ()=>i.noColor,
                set: (t)=>{
                    i.noColor = t;
                },
                enumerable: true,
                configurable: false
            }
        });
        t.s([
            "deprecation",
            0,
            s,
            "v8_0_0",
            0,
            "8.0.0",
            "v8_3_4",
            0,
            "8.3.4"
        ]);
    },
    562140,
    (t)=>{
        "use strict";
        let e = 0;
        t.s([
            "warn",
            0,
            (...t)=>{
                e !== 500 && (++e == 500 ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...t));
            }
        ]);
    },
    506721,
    (t)=>{
        "use strict";
        t.s([
            "NOOP",
            0,
            ()=>{}
        ]);
    },
    609932,
    (t)=>{
        "use strict";
        let e = {
            _registeredResources: new Set,
            register (t) {
                this._registeredResources.add(t);
            },
            unregister (t) {
                this._registeredResources.delete(t);
            },
            release () {
                this._registeredResources.forEach((t)=>t.clear());
            },
            get registeredCount () {
                return this._registeredResources.size;
            },
            isRegistered (t) {
                return this._registeredResources.has(t);
            },
            reset () {
                this._registeredResources.clear();
            }
        };
        t.s([
            "GlobalResourceRegistry",
            0,
            e
        ]);
    },
    765480,
    808662,
    (t)=>{
        "use strict";
        var e = t.i(609932);
        class i {
            constructor(t, e){
                this._pool = [];
                this._count = 0;
                this._index = 0;
                this._classType = t;
                if (e) {
                    this.prepopulate(e);
                }
            }
            prepopulate(t) {
                for(let e = 0; e < t; e++){
                    this._pool[this._index++] = new this._classType;
                }
                this._count += t;
            }
            get(t) {
                let e;
                if (this._index > 0) {
                    e = this._pool[--this._index];
                } else {
                    e = new this._classType;
                    this._count++;
                }
                e.init?.(t);
                return e;
            }
            return(t) {
                t.reset?.();
                this._pool[this._index++] = t;
            }
            get totalSize() {
                return this._count;
            }
            get totalFree() {
                return this._index;
            }
            get totalUsed() {
                return this._count - this._index;
            }
            clear() {
                if (this._pool.length > 0 && this._pool[0].destroy) {
                    for(let t = 0; t < this._index; t++){
                        this._pool[t].destroy();
                    }
                }
                this._pool.length = 0;
                this._count = 0;
                this._index = 0;
            }
        }
        t.s([
            "Pool",
            0,
            i
        ], 808662);
        class s {
            constructor(){
                this._poolsByClass = new Map;
            }
            prepopulate(t, e) {
                this.getPool(t).prepopulate(e);
            }
            get(t, e) {
                return this.getPool(t).get(e);
            }
            return(t) {
                this.getPool(t.constructor).return(t);
            }
            getPool(t) {
                if (!this._poolsByClass.has(t)) {
                    this._poolsByClass.set(t, new i(t));
                }
                return this._poolsByClass.get(t);
            }
            stats() {
                let t = {};
                this._poolsByClass.forEach((e)=>{
                    let i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
                    t[i] = {
                        free: e.totalFree,
                        used: e.totalUsed,
                        size: e.totalSize
                    };
                });
                return t;
            }
            clear() {
                this._poolsByClass.forEach((t)=>t.clear());
                this._poolsByClass.clear();
            }
        }
        let r = new s;
        e.GlobalResourceRegistry.register(r);
        t.s([
            "BigPool",
            0,
            r,
            "PoolGroupClass",
            0,
            s
        ], 765480);
    }
]);
