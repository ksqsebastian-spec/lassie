;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "7618a8b5-ec1e-64c8-b93a-ddd4bf57cc4f";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    983871,
    (t)=>{
        "use strict";
        function e(t) {
            if (t === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t;
        }
        function r(t, e) {
            t.prototype = Object.create(e.prototype);
            t.prototype.constructor = t;
            t.__proto__ = e;
        }
        var i;
        var n;
        var s;
        var a;
        var o;
        var u;
        var h;
        var l;
        var f;
        var c;
        var p;
        var _;
        var d;
        var m;
        var g;
        var _listeners;
        var y;
        var T;
        var x;
        var b;
        var globalTimeline;
        var O;
        var M;
        var k;
        var A;
        var C;
        var D;
        var R;
        var P = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        };
        var defaults = {
            duration: 0.5,
            overwrite: false,
            delay: 0
        };
        var z = 2 * Math.PI;
        var E = z / 4;
        var F = 0;
        var Math_sqrt = Math.sqrt;
        var Math_cos = Math.cos;
        var Math_sin = Math.sin;
        var Y = (t)=>typeof t === "string";
        var U = (t)=>typeof t === "function";
        var X = (t)=>typeof t === "number";
        var N = (t)=>t === undefined;
        var q = (t)=>typeof t === "object";
        var V = (t)=>t !== false;
        var j = ()=>typeof window !== "undefined";
        var W = (t)=>U(t) || Y(t);
        var G = typeof ArrayBuffer === "function" && ArrayBuffer.isView || (()=>{});
        var Array_isArray = Array.isArray;
        var H = /random\([^)]+\)/g;
        var Z = /,\s*/g;
        var $ = /(?:-?\.?\d|\.)+/gi;
        var K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
        var J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
        var tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
        var te = /[+-]=-?[.\d]+/;
        var tr = /[^,'"\[\]\s]+/gi;
        var ti = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
        var tn = {};
        var ts = {};
        var install = (t)=>(ts = tL(t, tn)) && rA;
        var to = (t, e)=>console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        var tu = (t, e)=>!e && console.warn(t);
        var globals = (t, e)=>t && (tn[t] = e) && ts && (ts[t] = e) || tn;
        var tl = ()=>0;
        var tf = {
            suppressEvents: true,
            isStart: true,
            kill: false
        };
        var tc = {
            suppressEvents: true,
            kill: false
        };
        var tp = {
            suppressEvents: true
        };
        var t_ = {};
        var td = [];
        var tm = {};
        var plugins = {};
        var effects = {};
        var ty = 30;
        var tT = [];
        var tx = "";
        var tb = (t)=>{
            let e;
            let r;
            const i = t[0];
            if (!(q(i) || U(i))) {
                t = [
                    t
                ];
            }
            if (!(e = (i._gsap || {}).harness)) {
                for(r = tT.length; r-- && !tT[r].targetTest(i););
                e = tT[r];
            }
            for(r = t.length; r--;){
                if (!(t[r] && (t[r]._gsap || (t[r]._gsap = new eq(t[r], e))))) {
                    t.splice(r, 1);
                }
            }
            return t;
        };
        var getCache = (t)=>t._gsap || tb(toArray(t))[0]._gsap;
        var tO = (t, e, r)=>{
            if ((r = t[e]) && U(r)) {
                return t[e]();
            }
            return N(r) && t.getAttribute && t.getAttribute(e) || r;
        };
        var tM = (t, e)=>(t = t.split(",")).forEach(e) || t;
        var tk = (t)=>Math.round(100000 * t) / 100000 || 0;
        var tA = (t)=>Math.round(10000000 * t) / 10000000 || 0;
        var tC = (t, e)=>{
            const r = e.charAt(0);
            const i = parseFloat(e.substr(2));
            t = parseFloat(t);
            switch(r){
                case "+":
                    return t + i;
                case "-":
                    return t - i;
                case "*":
                    return t * i;
                default:
                    return t / i;
            }
        };
        var tD = (_targets, e)=>{
            for(var r = e.length, i = 0; _targets.indexOf(e[i]) < 0 && ++i < r;);
            return i < r;
        };
        var tR = ()=>{
            let t;
            let e;
            const td_length = td.length;
            const i = td.slice(0);
            tm = {};
            td.length = 0;
            for(t = 0; t < td_length; t++){
                if ((e = i[t]) && e._lazy) {
                    e.render(e._lazy[0], e._lazy[1], true)._lazy = 0;
                }
            }
        };
        var tP = (t)=>!!(t._initted || t._startAt || t.add);
        var tS = (t, e, r, i)=>{
            if (td.length && !x) {
                tR();
            }
            t.render(e, r, i || !!(x && e < 0 && tP(t)));
            if (td.length && !x) {
                tR();
            }
        };
        var tz = (t)=>{
            const e = parseFloat(t);
            if ((e || e === 0) && (t + "").match(tr).length < 2) {
                return e;
            }
            if (Y(t)) {
                return t.trim();
            }
            return t;
        };
        var tE = (t)=>t;
        var tF = (t, e)=>{
            for(const r in e){
                if (!(r in t)) {
                    t[r] = e[r];
                }
            }
            return t;
        };
        var tL = (t, e)=>{
            for(const r in e){
                t[r] = e[r];
            }
            return t;
        };
        var tI = function t(e, r) {
            for(const i in r){
                if (i !== "__proto__" && i !== "constructor" && i !== "prototype") {
                    e[i] = q(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i];
                }
            }
            return e;
        };
        var tB = (t, e)=>{
            let r;
            const i = {};
            for(r in t){
                if (!(r in e)) {
                    i[r] = t[r];
                }
            }
            return i;
        };
        var tY = (t)=>{
            let e;
            let r = t.parent || globalTimeline;
            const i = t.keyframes ? (e = Array_isArray(t.keyframes), (t, r)=>{
                for(const i in r){
                    if (!(i in t || i === "duration" && e || i === "ease")) {
                        t[i] = r[i];
                    }
                }
            }) : tF;
            if (V(t.inherit)) {
                while(r){
                    i(t, r.vars.defaults);
                    r = r.parent || r._dp;
                }
            }
            return t;
        };
        var tU = (_targets, e)=>{
            for(var r = _targets.length, i = r === e.length; i && r-- && _targets[r] === e[r];);
            return r < 0;
        };
        var tX = (t, e, r = "_first", i = "_last", n)=>{
            let s;
            let a = t[i];
            if (n) {
                for(s = e[n]; a && a[n] > s;){
                    a = a._prev;
                }
            }
            if (a) {
                e._next = a._next;
                a._next = e;
            } else {
                e._next = t[r];
                t[r] = e;
            }
            if (e._next) {
                e._next._prev = e;
            } else {
                t[i] = e;
            }
            e._prev = a;
            e.parent = e._dp = t;
            return e;
        };
        var _removeLinkedListItem = (t, e, r = "_first", i = "_last")=>{
            const e__prev = e._prev;
            const e__next = e._next;
            if (e__prev) {
                e__prev._next = e__next;
            } else if (t[r] === e) {
                t[r] = e__next;
            }
            if (e__next) {
                e__next._prev = e__prev;
            } else if (t[i] === e) {
                t[i] = e__prev;
            }
            e._next = e._prev = e.parent = null;
        };
        var tq = (t, e)=>{
            if (t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove) {
                t.parent.remove(t);
            }
            t._act = 0;
        };
        var tV = (t, e)=>{
            if (t && (!e || e._end > t._dur || e._start < 0)) {
                for(let r = t; r;){
                    r._dirty = 1;
                    r = r.parent;
                }
            }
            return t;
        };
        var tj = (t)=>{
            for(let e = t.parent; e && e.parent;){
                e._dirty = 1;
                e.totalDuration();
                e = e.parent;
            }
            return t;
        };
        var tW = (t, e, r, i)=>t._startAt && (x ? t._startAt.revert(tc) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, i));
        var tG = (t)=>{
            if (t._repeat) {
                return tQ(t._tTime, t = t.duration() + t._rDelay) * t;
            }
            return 0;
        };
        var tQ = (t, e)=>{
            const r = Math.floor(t = tA(t / e));
            if (t && r === t) {
                return r - 1;
            }
            return r;
        };
        var tH = (t, e)=>(t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        var tZ = (t)=>t._end = tA(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0));
        var t$ = (t, e)=>{
            const t__dp = t._dp;
            if (t__dp && t__dp.smoothChildTiming && t._ts) {
                t._start = tA(t__dp._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts)));
                tZ(t);
                if (!t__dp._dirty) {
                    tV(t__dp, t);
                }
            }
            return t;
        };
        var tK = (t, e)=>{
            let r;
            if (e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) {
                r = tH(t.rawTime(), e);
                if (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) {
                    e.render(r, true);
                }
            }
            if (tV(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration()) {
                    for(r = t; r._dp;){
                        if (r.rawTime() >= 0) {
                            r.totalTime(r._tTime);
                        }
                        r = r._dp;
                    }
                }
                t._zTime = -1e-8;
            }
        };
        var tJ = (t, e, r, i)=>{
            if (e.parent) {
                tq(e);
            }
            e._start = tA((X(r) ? r : r || t !== globalTimeline ? t7(t, r, e) : t._time) + e._delay);
            e._end = tA(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0));
            tX(t, e, "_first", "_last", t._sort ? "_start" : 0);
            if (!t5(e)) {
                t._recent = e;
            }
            if (!i) {
                tK(t, e);
            }
            if (t._ts < 0) {
                t$(t, t._tTime);
            }
            return t;
        };
        var t0 = (t, e)=>(tn.ScrollTrigger || to("scrollTrigger", e)) && tn.ScrollTrigger.create(e, t);
        var t1 = (t, e, r, i, n)=>{
            e2(t, e, n);
            if (t._initted) {
                if (!r && t._pt && !x && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && C !== ticker.frame) {
                    td.push(t);
                    t._lazy = [
                        n,
                        i
                    ];
                    return 1;
                }
                return undefined;
            }
            return 1;
        };
        var t2 = function t(e) {
            const e_parent = e.parent;
            return e_parent && e_parent._ts && e_parent._initted && !e_parent._lock && (e_parent.rawTime() < 0 || t(e_parent));
        };
        var t5 = (t)=>{
            const t_data = t.data;
            return t_data === "isFromStart" || t_data === "isStart";
        };
        var t8 = (t, e, r, i)=>{
            let n;
            let s;
            let a;
            let t_ratio = t.ratio;
            let u = e < 0 || !e && (!t._start && t2(t) && !(!t._initted && t5(t)) || (t._ts < 0 || t._dp._ts < 0) && !t5(t)) ? 0 : 1;
            const t__rDelay = t._rDelay;
            let l = 0;
            if (t__rDelay && t._repeat) {
                s = tQ(l = er(0, t._tDur, e), t__rDelay);
                if (t._yoyo && 1 & s) {
                    u = 1 - u;
                }
                if (s !== tQ(t._tTime, t__rDelay)) {
                    t_ratio = 1 - u;
                    if (t.vars.repeatRefresh && t._initted) {
                        t.invalidate();
                    }
                }
            }
            if (u !== t_ratio || x || i || t._zTime === 1e-8 || !e && t._zTime) {
                if (!t._initted && t1(t, e, i, r, l)) {
                    return;
                }
                a = t._zTime;
                t._zTime = e || 1e-8 * !!r;
                if (!r) {
                    r = e && !a;
                }
                t.ratio = u;
                if (t._from) {
                    u = 1 - u;
                }
                t._time = 0;
                t._tTime = l;
                for(n = t._pt; n;){
                    n.r(u, n.d);
                    n = n._next;
                }
                if (e < 0) {
                    tW(t, e, r, true);
                }
                if (t._onUpdate && !r) {
                    eg(t, "onUpdate");
                }
                if (l && t._repeat && !r && t.parent) {
                    eg(t, "onRepeat");
                }
                (e >= t._tDur || e < 0) && t.ratio === u && (u && tq(t, 1), r || x || (eg(t, u ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
            } else {
                if (!t._zTime) {
                    t._zTime = e;
                }
            }
        };
        var t3 = (t, e, r)=>{
            let i;
            if (r > e) {
                for(i = t._first; i && i._start <= r;){
                    if (i.data === "isPause" && i._start > e) {
                        return i;
                    }
                    i = i._next;
                }
            } else {
                for(i = t._last; i && i._start >= r;){
                    if (i.data === "isPause" && i._start < e) {
                        return i;
                    }
                    i = i._prev;
                }
            }
        };
        var t6 = (t, e, r, i)=>{
            const t__repeat = t._repeat;
            const s = tA(e) || 0;
            const a = t._tTime / t._tDur;
            if (a && !i) {
                t._time *= s / t._dur;
            }
            t._dur = s;
            t._tDur = t__repeat ? t__repeat < 0 ? 10000000000 : tA(s * (t__repeat + 1) + t._rDelay * t__repeat) : s;
            if (a > 0 && !i) {
                t$(t, t._tTime = t._tDur * a);
            }
            if (t.parent) {
                tZ(t);
            }
            if (!r) {
                tV(t.parent, t);
            }
            return t;
        };
        var t4 = (t)=>{
            if (t instanceof Timeline) {
                return tV(t);
            }
            return t6(t, t._dur);
        };
        var t9 = {
            _start: 0,
            endTime: tl,
            totalDuration: tl
        };
        var t7 = function t(e, r, i) {
            let n;
            let s;
            let a;
            const e_labels = e.labels;
            const u = e._recent || t9;
            const h = e.duration() >= 100000000 ? u.endTime(false) : e._dur;
            if (Y(r) && (isNaN(r) || r in e_labels)) {
                s = r.charAt(0);
                a = r.substr(-1) === "%";
                n = r.indexOf("=");
                if (s === "<" || s === ">") {
                    if (n >= 0) {
                        r = r.replace(/=/, "");
                    }
                    return (s === "<" ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1);
                }
                if (n < 0) {
                    if (!(r in e_labels)) {
                        e_labels[r] = h;
                    }
                    return e_labels[r];
                }
                s = parseFloat(r.charAt(n - 1) + r.substr(n + 1));
                if (a && i) {
                    s = s / 100 * (Array_isArray(i) ? i[0] : i).totalDuration();
                }
                if (n > 1) {
                    return t(e, r.substr(0, n - 1), i) + s;
                }
                return h + s;
            }
            if (r == null) {
                return h;
            }
            return +r;
        };
        var et = (t, e, r)=>{
            let i;
            let n;
            const s = X(e[1]);
            const a = (s ? 2 : 1) + (t < 2 ? 0 : 1);
            const o = e[a];
            if (s) {
                o.duration = e[1];
            }
            o.parent = r;
            if (t) {
                i = o;
                for(n = r; n && !("immediateRender" in i);){
                    i = n.vars.defaults || {};
                    n = V(n.vars.inherit) && n.parent;
                }
                o.immediateRender = V(i.immediateRender);
                if (t < 2) {
                    o.runBackwards = 1;
                } else {
                    o.startAt = e[a - 1];
                }
            }
            return new Tween(e[0], o, e[a + 1]);
        };
        var ee = (t, e)=>{
            if (t || t === 0) {
                return e(t);
            }
            return e;
        };
        var er = (t, e, r)=>{
            if (r < t) {
                return t;
            }
            if (r > e) {
                return e;
            }
            return r;
        };
        var getUnit = (t, e)=>{
            if (Y(t) && (e = ti.exec(t))) {
                return e[1];
            }
            return "";
        };
        var slice = [].slice;
        var es = (t, e)=>t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== O;
        var toArray = (t, e, r)=>{
            let i;
            if (b && !e && b.selector) {
                return b.selector(t);
            }
            if (Y(t) && !r && (M || !eR())) {
                return slice.call((e || k).querySelectorAll(t), 0);
            }
            if (Array_isArray(t)) {
                if (i === undefined) {
                    i = [];
                }
                return t.forEach((t)=>{
                    let e;
                    if (Y(t) && !r || es(t, 1)) {
                        return (e = i).push.apply(e, toArray(t));
                    }
                    return i.push(t);
                }) || i;
            }
            if (es(t)) {
                return slice.call(t, 0);
            }
            if (t) {
                return [
                    t
                ];
            }
            return [];
        };
        var selector = (t)=>{
            t = toArray(t)[0] || tu("Invalid scope") || {};
            return (e)=>{
                const r = t.current || t.nativeElement || t;
                return toArray(e, r.querySelectorAll ? r : r === t ? tu("Invalid scope") || k.createElement("div") : t);
            };
        };
        var shuffle = (t)=>t.sort(()=>0.5 - Math.random());
        var distribute = (each)=>{
            if (U(each)) {
                return each;
            }
            const e = q(each) ? each : {
                each
            };
            let r = eB(e.ease);
            const i = e.from || 0;
            const n = parseFloat(e.base) || 0;
            const s = {};
            const a = i > 0 && i < 1;
            const o = isNaN(i) || a;
            const e_axis = e.axis;
            let h = i;
            let l = i;
            if (Y(i)) {
                h = l = ({
                    center: 0.5,
                    edges: 0.5,
                    end: 1
                })[i] || 0;
            } else if (!a && o) {
                h = i[0];
                l = i[1];
            }
            return (t, a, f)=>{
                let c;
                let p;
                let _;
                let d;
                let m;
                let g;
                let v;
                let y;
                let T;
                let length = (f || e).length;
                let b = s[length];
                if (!b) {
                    if (!(T = e.grid === "auto" ? 0 : (e.grid || [
                        1,
                        100000000
                    ])[1])) {
                        for(v = -100000000; v < (v = f[T++].getBoundingClientRect().left) && T < length;);
                        T < length && T--;
                    }
                    b = s[length] = [];
                    c = o ? Math.min(T, length) * h - 0.5 : i % T;
                    p = T === 100000000 ? 0 : o ? length * l / T - 0.5 : i / T | 0;
                    v = 0;
                    y = 100000000;
                    for(g = 0; g < length; g++){
                        _ = g % T - c;
                        d = p - (g / T | 0);
                        b[g] = m = e_axis ? Math.abs(e_axis === "y" ? d : _) : Math_sqrt(_ * _ + d * d);
                        if (m > v) {
                            v = m;
                        }
                        if (m < y) {
                            y = m;
                        }
                    }
                    if (i === "random") {
                        shuffle(b);
                    }
                    b.max = v - y;
                    b.min = y;
                    b.v = length = (parseFloat(e.amount) || parseFloat(e.each) * (T > length ? length - 1 : e_axis ? e_axis === "y" ? length / T : T : Math.max(T, length / T)) || 0) * (i === "edges" ? -1 : 1);
                    b.b = length < 0 ? n - length : n;
                    b.u = getUnit(e.amount || e.each) || 0;
                    r = r && length < 0 ? eI(r) : r;
                }
                length = (b[t] - b.min) / b.max || 0;
                return tA(b.b + (r ? r(length) : length) * b.v) + b.u;
            };
        };
        var el = (t)=>{
            const e = 10 ** ((t + "").split(".")[1] || "").length;
            return (r)=>{
                const i = tA(Math.round(parseFloat(r) / t) * t * e);
                return (i - i % 1) / e + (X(r) ? 0 : getUnit(r));
            };
        };
        var snap = (t, e)=>{
            let r;
            let i;
            let n = Array_isArray(t);
            if (!n && q(t)) {
                r = n = t.radius || 100000000;
                if (t.values) {
                    if (i = !X((t = toArray(t.values))[0])) {
                        r *= r;
                    }
                } else {
                    t = el(t.increment);
                }
            }
            return ee(e, n ? U(t) ? (e)=>{
                if (Math.abs((i = t(e)) - e) <= r) {
                    return i;
                }
                return e;
            } : (e)=>{
                let n;
                let s;
                const a = parseFloat(i ? e.x : e);
                const o = parseFloat(i ? e.y : 0);
                let u = 100000000;
                let h = 0;
                for(let l = t.length; l--;){
                    if ((n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u) {
                        u = n;
                        h = l;
                    }
                }
                h = !r || u <= r ? t[h] : e;
                if (i || h === e || X(e)) {
                    return h;
                }
                return h + getUnit(e);
            } : el(t));
        };
        var random = (t, e, r, i)=>ee(Array_isArray(t) ? !e : r === true ? (r = 0, false) : !i, ()=>{
                if (Array_isArray(t)) {
                    return t[~~(Math.random() * t.length)];
                }
                return (i = (r = r || 0.00001) < 1 ? 10 ** ((r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
            });
        var ep = (t, e, r)=>ee(r, (r)=>t[~~e(r)]);
        var e_ = (t)=>t.replace(H, (t)=>{
                const e = t.indexOf("[") + 1;
                const r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(Z);
                return random(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 0.00001);
            });
        var mapRange = (t, e, r, i, n)=>{
            const s = e - t;
            const a = i - r;
            return ee(n, (e)=>r + ((e - t) / s * a || 0));
        };
        var em = (t, e, r)=>{
            let i;
            let n;
            let s;
            const t_labels = t.labels;
            let o = 100000000;
            for(i in t_labels){
                if ((n = t_labels[i] - e) < 0 == !!r && n && o > (n = Math.abs(n))) {
                    s = i;
                    o = n;
                }
            }
            return s;
        };
        var eg = (t, e, r)=>{
            let i;
            let n;
            let s;
            const t_vars = t.vars;
            const o = t_vars[e];
            const u = b;
            const t__ctx = t._ctx;
            if (o) {
                i = t_vars[e + "Params"];
                n = t_vars.callbackScope || t;
                if (r && td.length) {
                    tR();
                }
                if (t__ctx) {
                    b = t__ctx;
                }
                s = i ? o.apply(n, i) : o.call(n);
                b = u;
                return s;
            }
        };
        var ev = (t)=>{
            tq(t);
            if (t.scrollTrigger) {
                t.scrollTrigger.kill(!!x);
            }
            if (t.progress() < 1) {
                eg(t, "onInterrupt");
            }
            return t;
        };
        var ey = [];
        var eT = (t)=>{
            if (t) {
                t = !t.name && t.default || t;
                if (j() || t.headless) {
                    let e = t.name;
                    const r = U(t);
                    const i = e && !r && t.init ? function() {
                        this._props = [];
                    } : t;
                    const n = {
                        init: tl,
                        render,
                        add,
                        kill,
                        modifier,
                        rawVars: 0
                    };
                    const s = {
                        targetTest: 0,
                        get: 0,
                        getSetter,
                        aliases: {},
                        register: 0
                    };
                    eR();
                    if (t !== i) {
                        if (plugins[e]) {
                            return;
                        }
                        tF(i, tF(tB(t, n), s));
                        tL(i.prototype, tL(n, tB(t, s)));
                        plugins[i.prop = e] = i;
                        if (t.targetTest) {
                            tT.push(i);
                            t_[e] = 1;
                        }
                        e = `${e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)}Plugin`;
                    }
                    globals(e, i);
                    if (t.register) {
                        t.register(rA, i, rp);
                    }
                } else {
                    ey.push(t);
                }
            }
        };
        var ex = {
            aqua: [
                0,
                255,
                255
            ],
            lime: [
                0,
                255,
                0
            ],
            silver: [
                192,
                192,
                192
            ],
            black: [
                0,
                0,
                0
            ],
            maroon: [
                128,
                0,
                0
            ],
            teal: [
                0,
                128,
                128
            ],
            blue: [
                0,
                0,
                255
            ],
            navy: [
                0,
                0,
                128
            ],
            white: [
                255,
                255,
                255
            ],
            olive: [
                128,
                128,
                0
            ],
            yellow: [
                255,
                255,
                0
            ],
            orange: [
                255,
                165,
                0
            ],
            gray: [
                128,
                128,
                128
            ],
            purple: [
                128,
                0,
                128
            ],
            green: [
                0,
                128,
                0
            ],
            red: [
                255,
                0,
                0
            ],
            pink: [
                255,
                192,
                203
            ],
            cyan: [
                0,
                255,
                255
            ],
            transparent: [
                255,
                255,
                255,
                0
            ]
        };
        var eb = (t, e, r)=>(6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + 0.5 | 0;
        var splitColor = (t, e, r)=>{
            let i;
            let n;
            let s;
            let a;
            let o;
            let u;
            let h;
            let l;
            let f;
            let c;
            let p = t ? X(t) ? [
                t >> 16,
                t >> 8 & 255,
                255 & t
            ] : 0 : ex.black;
            if (!p) {
                if (t.substr(-1) === ",") {
                    t = t.substr(0, t.length - 1);
                }
                if (ex[t]) {
                    p = ex[t];
                } else if (t.charAt(0) === "#") {
                    if (t.length < 6) {
                        i = t.charAt(1);
                        t = "#" + i + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "");
                    }
                    if (t.length === 9) {
                        return [
                            (p = parseInt(t.substr(1, 6), 16)) >> 16,
                            p >> 8 & 255,
                            255 & p,
                            parseInt(t.substr(7), 16) / 255
                        ];
                    }
                    p = [
                        (t = parseInt(t.substr(1), 16)) >> 16,
                        t >> 8 & 255,
                        255 & t
                    ];
                } else if (t.substr(0, 3) === "hsl") {
                    p = c = t.match($);
                    if (e) {
                        if (~t.indexOf("=")) {
                            p = t.match(K);
                            if (r && p.length < 4) {
                                p[3] = 1;
                            }
                            return p;
                        }
                    } else {
                        a = p[0] % 360 / 360;
                        o = p[1] / 100;
                        n = (u = p[2] / 100) <= 0.5 ? u * (o + 1) : u + o - u * o;
                        i = 2 * u - n;
                        if (p.length > 3) {
                            p[3] *= 1;
                        }
                        p[0] = eb(a + 1 / 3, i, n);
                        p[1] = eb(a, i, n);
                        p[2] = eb(a - 1 / 3, i, n);
                    }
                } else {
                    p = t.match($) || ex.transparent;
                }
                p = p.map(Number);
            }
            if (e && !c) {
                i = p[0] / 255;
                u = ((h = Math.max(i, n = p[1] / 255, s = p[2] / 255)) + (l = Math.min(i, n, s))) / 2;
                if (h === l) {
                    o = 0;
                    a = 0;
                } else {
                    f = h - l;
                    o = u > 0.5 ? f / (2 - h - l) : f / (h + l);
                    a = (h === i ? (n - s) / f + 6 * (n < s) : h === n ? (s - i) / f + 2 : (i - n) / f + 4) * 60;
                }
                p[0] = ~~(a + 0.5);
                p[1] = ~~(100 * o + 0.5);
                p[2] = ~~(100 * u + 0.5);
            }
            if (r && p.length < 4) {
                p[3] = 1;
            }
            return p;
        };
        var eO = (t)=>{
            const e = [];
            const r = [];
            let i = -1;
            t.split(ek).forEach((t)=>{
                const n = t.match(J) || [];
                e.push.apply(e, n);
                r.push(i += n.length + 1);
            });
            e.c = r;
            return e;
        };
        var eM = (t, e, r)=>{
            let i;
            let n;
            let s;
            let a;
            let o = "";
            let u = (t + o).match(ek);
            const h = e ? "hsla(" : "rgba(";
            let l = 0;
            if (!u) {
                return t;
            }
            u = u.map((t)=>(t = splitColor(t, e, 1)) && `${h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(","))})`);
            if (r && (s = eO(t), (i = r.c).join(o) !== s.c.join(o))) {
                for(a = (n = t.replace(ek, "1").split(J)).length - 1; l < a; l++){
                    o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
                }
            }
            if (!n) {
                for(a = (n = t.split(ek)).length - 1; l < a; l++){
                    o += n[l] + u[l];
                }
            }
            return o + n[a];
        };
        var ek = (()=>{
            let t;
            let e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for(t in ex){
                e += "|" + t + "\\b";
            }
            return RegExp(e + ")", "gi");
        })();
        var eA = /hsl[a]?\(/;
        var eC = (t)=>{
            let e;
            const r = t.join(" ");
            ek.lastIndex = 0;
            if (ek.test(r)) {
                e = eA.test(r);
                t[1] = eM(t[1], e);
                t[0] = eM(t[0], e, eO(t[1]));
                return true;
            }
        };
        f = Date.now;
        c = 500;
        p = 33;
        d = _ = f();
        m = 1000 / 240;
        g = 1000 / 240;
        _listeners = [];
        y = function t(e) {
            let r;
            let i;
            let n;
            let o;
            const y = f() - d;
            const T = e === true;
            if (y > c || y < 0) {
                _ += y - p;
            }
            d += y;
            if ((r = (n = d - _) - g) > 0 || T) {
                o = ++u.frame;
                h = n - 1000 * u.time;
                u.time = n /= 1000;
                g += r + (r >= m ? 4 : m - r);
                i = 1;
            }
            if (!T) {
                s = a(t);
            }
            if (i) {
                for(l = 0; l < _listeners.length; l++){
                    _listeners[l](n, h, o, e);
                }
            }
        };
        var ticker = u = {
            time: 0,
            frame: 0,
            tick () {
                y(true);
            },
            deltaRatio (t) {
                return h / (1000 / (t || 60));
            },
            wake () {
                if (A) {
                    if (!M && j()) {
                        k = (O = M = window).document || {};
                        tn.gsap = rA;
                        (O.gsapVersions || (O.gsapVersions = [])).push(rA.version);
                        install(ts || O.GreenSockGlobals || !O.gsap && O || {});
                        ey.forEach(eT);
                    }
                    o = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                    if (s) {
                        u.sleep();
                    }
                    a = o || ((t)=>setTimeout(t, g - 1000 * u.time + 1 | 0));
                    R = 1;
                    y(2);
                }
            },
            sleep () {
                (o ? cancelAnimationFrame : clearTimeout)(s);
                R = 0;
                a = tl;
            },
            lagSmoothing (t, e) {
                p = Math.min(e || 33, c = t || Infinity);
            },
            fps (t) {
                m = 1000 / (t || 240);
                g = 1000 * u.time + m;
            },
            add (t, e, r) {
                var i = e ? (e, r, n, s)=>{
                    t(e, r, n, s);
                    u.remove(i);
                } : t;
                u.remove(t);
                _listeners[r ? "unshift" : "push"](i);
                eR();
                return i;
            },
            remove (t, e) {
                ~(e = _listeners.indexOf(t)) && _listeners.splice(e, 1) && l >= e && l--;
            },
            _listeners
        };
        var eR = ()=>!R && ticker.wake();
        var eP = {};
        var eS = /^[\d.\-M][\d.\-,\s]/;
        var ez = /["']/g;
        var eE = (t)=>{
            let e;
            let r;
            let i;
            const n = {};
            const s = t.substr(1, t.length - 3).split(":");
            let a = s[0];
            for(let o = 1, u = s.length; o < u; o++){
                r = s[o];
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length;
                i = r.substr(0, e);
                n[a] = isNaN(i) ? i.replace(ez, "").trim() : +i;
                a = r.substr(e + 1).trim();
            }
            return n;
        };
        var eF = (t)=>{
            const e = t.indexOf("(") + 1;
            const r = t.indexOf(")");
            const i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
        };
        var eL = (t)=>{
            const e = (t + "").split("(");
            const r = eP[e[0]];
            if (r && e.length > 1 && r.config) {
                return r.config.apply(null, ~t.indexOf("{") ? [
                    eE(e[1])
                ] : eF(t).split(",").map(tz));
            }
            if (eP._CE && eS.test(t)) {
                return eP._CE("", t);
            }
            return r;
        };
        var eI = (t)=>(e)=>1 - t(1 - e);
        var eB = (t, e)=>t && (U(t) ? t : eP[t] || eL(t)) || e;
        var eY = (t, easeIn, easeOut = (t)=>1 - easeIn(1 - t), easeInOut = (t)=>{
            if (t < 0.5) {
                return easeIn(2 * t) / 2;
            }
            return 1 - easeIn((1 - t) * 2) / 2;
        })=>{
            let n;
            const s = {
                easeIn,
                easeOut,
                easeInOut
            };
            tM(t, (t)=>{
                eP[t] = tn[t] = s;
                eP[n = t.toLowerCase()] = easeOut;
                for(const e in s){
                    eP[n + (e === "easeIn" ? ".in" : e === "easeOut" ? ".out" : ".inOut")] = eP[t + "." + e] = s[e];
                }
            });
            return s;
        };
        var eU = (t)=>(e)=>{
                if (e < 0.5) {
                    return (1 - t(1 - 2 * e)) / 2;
                }
                return 0.5 + t((e - 0.5) * 2) / 2;
            };
        var eX = function t(e, r, i) {
            const n = r >= 1 ? r : 1;
            let s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1);
            const a = s / z * (Math.asin(1 / n) || 0);
            const o = (t)=>{
                if (t === 1) {
                    return 1;
                }
                return n * 2 ** (-10 * t) * Math_sin((t - a) * s) + 1;
            };
            const u = e === "out" ? o : e === "in" ? (t)=>1 - o(1 - t) : eU(o);
            s = z / s;
            u.config = (r, i)=>t(e, r, i);
            return u;
        };
        var eN = function t(e, r = 1.70158) {
            const i = (t)=>{
                if (t) {
                    return --t * t * ((r + 1) * t + r) + 1;
                }
                return 0;
            };
            const n = e === "out" ? i : e === "in" ? (t)=>1 - i(1 - t) : eU(i);
            n.config = (r)=>t(e, r);
            return n;
        };
        tM("Linear,Quad,Cubic,Quart,Quint,Strong", (t, e)=>{
            const r = e < 5 ? e + 1 : e;
            eY(t + ",Power" + (r - 1), e ? (t)=>t ** r : (t)=>t, (t)=>1 - (1 - t) ** r, (t)=>{
                if (t < 0.5) {
                    return (2 * t) ** r / 2;
                }
                return 1 - ((1 - t) * 2) ** r / 2;
            });
        });
        eP.Linear.easeNone = eP.none = eP.Linear.easeIn;
        eY("Elastic", eX("in"), eX("out"), eX());
        eG = 2 * (eW = 1 / 2.75);
        eQ = 2.5 * eW;
        eY("Bounce", (t)=>1 - eH(1 - t), eH = (t)=>{
            if (t < eW) {
                return 7.5625 * t * t;
            }
            if (t < eG) {
                return 7.5625 * (t - 1.5 / 2.75) ** 2 + 0.75;
            }
            if (t < eQ) {
                return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
            }
            return 7.5625 * (t - 2.625 / 2.75) ** 2 + 0.984375;
        });
        eY("Expo", (t)=>2 ** (10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t));
        eY("Circ", (t)=>-(Math_sqrt(1 - t * t) - 1));
        eY("Sine", (t)=>{
            if (t === 1) {
                return 1;
            }
            return -Math_cos(t * E) + 1;
        });
        eY("Back", eN("in"), eN("out"), eN());
        eP.SteppedEase = eP.steps = tn.SteppedEase = {
            config (t = 1, e) {
                const r = 1 / t;
                const i = t + +!e;
                const n = +!!e;
                const s = 0.99999999;
                return (t)=>((i * er(0, s, t) | 0) + n) * r;
            }
        };
        defaults.ease = eP["quad.out"];
        tM("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (t)=>tx += t + "," + t + "Params,");
        var eq = function(t, e) {
            this.id = F++;
            t._gsap = this;
            this.target = t;
            this.harness = e;
            this.get = e ? e.get : tO;
            this.set = e ? e.getSetter : getSetter;
        };
        var Animation = (()=>{
            function t(t) {
                this.vars = t;
                this._delay = +t.delay || 0;
                if (this._repeat = t.repeat === Infinity ? -2 : t.repeat || 0) {
                    this._rDelay = t.repeatDelay || 0;
                    this._yoyo = !!t.yoyo || !!t.yoyoEase;
                }
                this._ts = 1;
                t6(this, +t.duration, 1, 1);
                this.data = t.data;
                if (b) {
                    this._ctx = b;
                    b.data.push(this);
                }
                if (!R) {
                    ticker.wake();
                }
            }
            const t_prototype = t.prototype;
            t_prototype.delay = function(t) {
                if (t || t === 0) {
                    if (this.parent && this.parent.smoothChildTiming) {
                        this.startTime(this._start + t - this._delay);
                    }
                    this._delay = t;
                    return this;
                }
                return this._delay;
            };
            t_prototype.duration = function(t) {
                if (arguments.length) {
                    return this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t);
                }
                return this.totalDuration() && this._dur;
            };
            t_prototype.totalDuration = function(t) {
                if (arguments.length) {
                    this._dirty = 0;
                    return t6(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1));
                }
                return this._tDur;
            };
            t_prototype.totalTime = function(t, e) {
                eR();
                if (!arguments.length) {
                    return this._tTime;
                }
                let _dp = this._dp;
                if (_dp && _dp.smoothChildTiming && this._ts) {
                    t$(this, t);
                    if (!(!_dp._dp || _dp.parent)) {
                        tK(_dp, this);
                    }
                    while(_dp && _dp.parent){
                        if (_dp.parent._time !== _dp._start + (_dp._ts >= 0 ? _dp._tTime / _dp._ts : -((_dp.totalDuration() - _dp._tTime) / _dp._ts))) {
                            _dp.totalTime(_dp._tTime, true);
                        }
                        _dp = _dp.parent;
                    }
                    if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t)) {
                        tJ(this._dp, this, this._start - this._delay);
                    }
                }
                if (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === 1e-8 || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) {
                    if (!this._ts) {
                        this._pTime = t;
                    }
                    tS(this, t, e);
                }
                return this;
            };
            t_prototype.time = function(t, e) {
                if (arguments.length) {
                    return this.totalTime(Math.min(this.totalDuration(), t + tG(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e);
                }
                return this._time;
            };
            t_prototype.totalProgress = function(t, e) {
                if (arguments.length) {
                    return this.totalTime(this.totalDuration() * t, e);
                }
                if (this.totalDuration()) {
                    return Math.min(1, this._tTime / this._tDur);
                }
                if (this.rawTime() >= 0 && this._initted) {
                    return 1;
                }
                return 0;
            };
            t_prototype.progress = function(t, e) {
                if (arguments.length) {
                    return this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tG(this), e);
                }
                if (this.duration()) {
                    return Math.min(1, this._time / this._dur);
                }
                return +(this.rawTime() > 0);
            };
            t_prototype.iteration = function(t, e) {
                const r = this.duration() + this._rDelay;
                if (arguments.length) {
                    return this.totalTime(this._time + (t - 1) * r, e);
                }
                if (this._repeat) {
                    return tQ(this._tTime, r) + 1;
                }
                return 1;
            };
            t_prototype.timeScale = function(t, e) {
                if (!arguments.length) {
                    if (-1e-8 === this._rts) {
                        return 0;
                    }
                    return this._rts;
                }
                if (this._rts === t) {
                    return this;
                }
                const r = this.parent && this._ts ? tH(this.parent._time, this) : this._tTime;
                this._rts = +t || 0;
                this._ts = this._ps || -1e-8 === t ? 0 : this._rts;
                this.totalTime(er(-Math.abs(this._delay), this.totalDuration(), r), e !== false);
                tZ(this);
                return tj(this);
            };
            t_prototype.paused = function(t) {
                if (arguments.length) {
                    if (this._ps !== t) {
                        this._ps = t;
                        if (t) {
                            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                            this._ts = this._act = 0;
                        } else {
                            eR();
                            this._ts = this._rts;
                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== 1e-8 && (this._tTime -= 1e-8));
                        }
                    }
                    return this;
                }
                return this._ps;
            };
            t_prototype.startTime = function(t) {
                if (arguments.length) {
                    this._start = tA(t);
                    const e = this.parent || this._dp;
                    if (e && (e._sort || !this.parent)) {
                        tJ(e, this, this._start - this._delay);
                    }
                    return this;
                }
                return this._start;
            };
            t_prototype.endTime = function(t) {
                return this._start + (V(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            };
            t_prototype.rawTime = function(t) {
                const e = this.parent || this._dp;
                if (e) {
                    if (t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1)) {
                        return this._tTime % (this._dur + this._rDelay);
                    }
                    if (this._ts) {
                        return tH(e.rawTime(t), this);
                    }
                    return this._tTime;
                }
                return this._tTime;
            };
            t_prototype.revert = function(t = tp) {
                const e = x;
                x = t;
                if (tP(this)) {
                    if (this.timeline) {
                        this.timeline.revert(t);
                    }
                    this.totalTime(-0.01, t.suppressEvents);
                }
                if (this.data !== "nested" && t.kill !== false) {
                    this.kill();
                }
                x = e;
                return this;
            };
            t_prototype.globalTime = function(t) {
                for(var e = this, r = arguments.length ? t : e.rawTime(); e;){
                    r = e._start + r / (Math.abs(e._ts) || 1);
                    e = e._dp;
                }
                if (!this.parent && this._sat) {
                    return this._sat.globalTime(t);
                }
                return r;
            };
            t_prototype.repeat = function(t) {
                if (arguments.length) {
                    this._repeat = t === Infinity ? -2 : t;
                    return t4(this);
                }
                if (-2 === this._repeat) {
                    return Infinity;
                }
                return this._repeat;
            };
            t_prototype.repeatDelay = function(t) {
                if (arguments.length) {
                    const e = this._time;
                    this._rDelay = t;
                    t4(this);
                    if (e) {
                        return this.time(e);
                    }
                    return this;
                }
                return this._rDelay;
            };
            t_prototype.yoyo = function(t) {
                if (arguments.length) {
                    this._yoyo = t;
                    return this;
                }
                return this._yoyo;
            };
            t_prototype.seek = function(t, e) {
                return this.totalTime(t7(this, t), V(e));
            };
            t_prototype.restart = function(t, e) {
                this.play().totalTime(t ? -this._delay : 0, V(e));
                if (!this._dur) {
                    this._zTime = -1e-8;
                }
                return this;
            };
            t_prototype.play = function(t, e) {
                if (t != null) {
                    this.seek(t, e);
                }
                return this.reversed(false).paused(false);
            };
            t_prototype.reverse = function(t, e) {
                if (t != null) {
                    this.seek(t || this.totalDuration(), e);
                }
                return this.reversed(true).paused(false);
            };
            t_prototype.pause = function(t, e) {
                if (t != null) {
                    this.seek(t, e);
                }
                return this.paused(true);
            };
            t_prototype.resume = function() {
                return this.paused(false);
            };
            t_prototype.reversed = function(t) {
                if (arguments.length) {
                    if (!!t !== this.reversed()) {
                        this.timeScale(-this._rts || (t ? -1e-8 : 0));
                    }
                    return this;
                }
                return this._rts < 0;
            };
            t_prototype.invalidate = function() {
                this._initted = this._act = 0;
                this._zTime = -1e-8;
                return this;
            };
            t_prototype.isActive = function() {
                let t;
                const e = this.parent || this._dp;
                const _start = this._start;
                return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(true)) >= _start && t < this.endTime(true) - 1e-8);
            };
            t_prototype.eventCallback = function(t, e, r) {
                const vars = this.vars;
                if (arguments.length > 1) {
                    if (e) {
                        vars[t] = e;
                        if (r) {
                            vars[t + "Params"] = r;
                        }
                        if (t === "onUpdate") {
                            this._onUpdate = e;
                        }
                    } else {
                        delete vars[t];
                    }
                    return this;
                }
                return vars[t];
            };
            t_prototype.then = function(t) {
                const e = this;
                const e__prom = e._prom;
                return new Promise((resolve)=>{
                    let n = U(t) ? t : tE;
                    const s = ()=>{
                        const e_then = e.then;
                        e.then = null;
                        if (e__prom) {
                            e__prom();
                        }
                        if (U(n) && (n = n(e)) && (n.then || n === e)) {
                            e.then = e_then;
                        }
                        resolve(n);
                        e.then = e_then;
                    };
                    if (e._initted && e.totalProgress() === 1 && e._ts >= 0 || !e._tTime && e._ts < 0) {
                        s();
                    } else {
                        e._prom = s;
                    }
                });
            };
            t_prototype.kill = function() {
                ev(this);
            };
            return t;
        })();
        tF(Animation.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: false,
            parent: null,
            _initted: false,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: false,
            _rts: 1
        });
        var Timeline = ((t)=>{
            function i(r = {}, i) {
                let n;
                n = t.call(this, r) || this;
                n.labels = {};
                n.smoothChildTiming = !!r.smoothChildTiming;
                n.autoRemoveChildren = !!r.autoRemoveChildren;
                n._sort = V(r.sortChildren);
                if (globalTimeline) {
                    tJ(r.parent || globalTimeline, e(n), i);
                }
                if (r.reversed) {
                    n.reverse();
                }
                if (r.paused) {
                    n.paused(true);
                }
                if (r.scrollTrigger) {
                    t0(e(n), r.scrollTrigger);
                }
                return n;
            }
            r(i, t);
            const i_prototype = i.prototype;
            i_prototype.to = function(t, e, r) {
                et(0, arguments, this);
                return this;
            };
            i_prototype.from = function(t, e, r) {
                et(1, arguments, this);
                return this;
            };
            i_prototype.fromTo = function(t, e, r, i) {
                et(2, arguments, this);
                return this;
            };
            i_prototype.set = function(t, e, r) {
                e.duration = 0;
                e.parent = this;
                if (!tY(e).repeatDelay) {
                    e.repeat = 0;
                }
                e.immediateRender = !!e.immediateRender;
                new Tween(t, e, t7(this, r), 1);
                return this;
            };
            i_prototype.call = function(t, e, r) {
                return tJ(this, Tween.delayedCall(0, t, e), r);
            };
            i_prototype.staggerTo = function(t, e, r, i, n, s, a) {
                r.duration = e;
                r.stagger = r.stagger || i;
                r.onComplete = s;
                r.onCompleteParams = a;
                r.parent = this;
                new Tween(t, r, t7(this, n));
                return this;
            };
            i_prototype.staggerFrom = function(t, e, r, i, n, s, a) {
                r.runBackwards = 1;
                tY(r).immediateRender = V(r.immediateRender);
                return this.staggerTo(t, e, r, i, n, s, a);
            };
            i_prototype.staggerFromTo = function(t, e, r, i, n, s, a, o) {
                i.startAt = r;
                tY(i).immediateRender = V(i.immediateRender);
                return this.staggerTo(t, e, i, n, s, a, o);
            };
            i_prototype.render = function(t, e, r) {
                let i;
                let n;
                let s;
                let a;
                let o;
                let u;
                let h;
                let l;
                let f;
                let c;
                let p;
                let _;
                let _time = this._time;
                let m = this._dirty ? this.totalDuration() : this._tDur;
                let _dur = this._dur;
                let v = t <= 0 ? 0 : tA(t);
                const y = this._zTime < 0 != t < 0 && (this._initted || !_dur);
                if (this !== globalTimeline && v > m && t >= 0) {
                    v = m;
                }
                if (v !== this._tTime || r || y) {
                    if (_time !== this._time && _dur) {
                        v += this._time - _time;
                        t += this._time - _time;
                    }
                    i = v;
                    f = this._start;
                    u = !(l = this._ts);
                    y && (_dur || (_time = this._zTime), (t || !e) && (this._zTime = t));
                    if (this._repeat) {
                        p = this._yoyo;
                        o = _dur + this._rDelay;
                        if (this._repeat < -1 && t < 0) {
                            return this.totalTime(100 * o + t, e, r);
                        }
                        i = tA(v % o);
                        if (v === m) {
                            a = this._repeat;
                            i = _dur;
                        } else {
                            if ((a = ~~(c = tA(v / o))) && a === c) {
                                i = _dur;
                                a--;
                            }
                            if (i > _dur) {
                                i = _dur;
                            }
                        }
                        c = tQ(this._tTime, o);
                        if (!_time && this._tTime && c !== a && this._tTime - c * o - this._dur <= 0) {
                            c = a;
                        }
                        if (p && 1 & a) {
                            i = _dur - i;
                            _ = 1;
                        }
                        if (a !== c && !this._lock) {
                            let T = p && 1 & c;
                            const b = T === (p && 1 & a);
                            if (a < c) {
                                T = !T;
                            }
                            _time = T ? 0 : v % _dur ? _dur : v;
                            this._lock = 1;
                            this.render(_time || (_ ? 0 : tA(a * o)), e, !_dur)._lock = 0;
                            this._tTime = v;
                            if (!e && this.parent) {
                                eg(this, "onRepeat");
                            }
                            if (this.vars.repeatRefresh && !_) {
                                this.invalidate()._lock = 1;
                                c = a;
                            }
                            if (_time && _time !== this._time || !this._ts !== u || this.vars.onRepeat && !this.parent && !this._act || (_dur = this._dur, m = this._tDur, b && (this._lock = 2, _time = T ? _dur : -0.0001, this.render(_time, true), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u)) {
                                return this;
                            }
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (h = t3(this, tA(_time), tA(i)))) {
                        v -= i - (i = h._start);
                    }
                    this._tTime = v;
                    this._time = i;
                    this._act = !!l;
                    if (!this._initted) {
                        this._onUpdate = this.vars.onUpdate;
                        this._initted = 1;
                        this._zTime = t;
                        _time = 0;
                    }
                    if (!_time && v && _dur && !e && !c && (eg(this, "onStart"), this._tTime !== v)) {
                        return this;
                    }
                    if (i >= _time && t >= 0) {
                        for(n = this._first; n;){
                            s = n._next;
                            if ((n._act || i >= n._start) && n._ts && h !== n) {
                                if (n.parent !== this) {
                                    return this.render(t, e, r);
                                }
                                n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r);
                                if (i !== this._time || !this._ts && !u) {
                                    h = 0;
                                    if (s) {
                                        v += this._zTime = -1e-8;
                                    }
                                    break;
                                }
                            }
                            n = s;
                        }
                    } else {
                        n = this._last;
                        const O = t < 0 ? t : i;
                        while(n){
                            s = n._prev;
                            if ((n._act || O <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) {
                                    return this.render(t, e, r);
                                }
                                n.render(n._ts > 0 ? (O - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (O - n._start) * n._ts, e, r || x && tP(n));
                                if (i !== this._time || !this._ts && !u) {
                                    h = 0;
                                    if (s) {
                                        v += this._zTime = O ? -1e-8 : 1e-8;
                                    }
                                    break;
                                }
                            }
                            n = s;
                        }
                    }
                    if (h && !e && (this.pause(), h.render(i >= _time ? 0 : -1e-8)._zTime = i >= _time ? 1 : -1, this._ts)) {
                        this._start = f;
                        tZ(this);
                        return this.render(t, e, r);
                    }
                    if (this._onUpdate && !e) {
                        eg(this, "onUpdate", true);
                    }
                    (v === m && this._tTime >= this.totalDuration() || !v && _time) && (f === this._start || Math.abs(l) !== Math.abs(this._ts)) && !this._lock && ((t || !_dur) && (v === m && this._ts > 0 || !v && this._ts < 0) && tq(this, 1), e || t < 0 && !_time || !v && !_time && m || (eg(this, v === m && t >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(v < m && this.timeScale() > 0) && this._prom()));
                }
                return this;
            };
            i_prototype.add = function(t, e) {
                const r = this;
                if (!X(e)) {
                    e = t7(this, e, t);
                }
                if (!(t instanceof Animation)) {
                    if (Array_isArray(t)) {
                        t.forEach((t)=>r.add(t, e));
                        return this;
                    }
                    if (Y(t)) {
                        return this.addLabel(t, e);
                    }
                    if (!U(t)) {
                        return this;
                    }
                    t = Tween.delayedCall(0, t);
                }
                if (this !== t) {
                    return tJ(this, t, e);
                }
                return this;
            };
            i_prototype.getChildren = function(t = true, e = true, r = true, i = -100000000) {
                const n = [];
                for(let s = this._first; s;){
                    s._start >= i && (s instanceof Tween ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(true, e, r))));
                    s = s._next;
                }
                return n;
            };
            i_prototype.getById = function(t) {
                const e = this.getChildren(1, 1, 1);
                for(let r = e.length; r--;){
                    if (e[r].vars.id === t) {
                        return e[r];
                    }
                }
            };
            i_prototype.remove = function(t) {
                if (Y(t)) {
                    return this.removeLabel(t);
                }
                if (U(t)) {
                    return this.killTweensOf(t);
                }
                if (t.parent === this) {
                    _removeLinkedListItem(this, t);
                }
                if (t === this._recent) {
                    this._recent = this._last;
                }
                return tV(this);
            };
            i_prototype.totalTime = function(e, r) {
                if (arguments.length) {
                    this._forcing = 1;
                    if (!this._dp && this._ts) {
                        this._start = tA(ticker.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)));
                    }
                    t.prototype.totalTime.call(this, e, r);
                    this._forcing = 0;
                    return this;
                }
                return this._tTime;
            };
            i_prototype.addLabel = function(t, e) {
                this.labels[t] = t7(this, e);
                return this;
            };
            i_prototype.removeLabel = function(t) {
                delete this.labels[t];
                return this;
            };
            i_prototype.addPause = function(t, e, r) {
                const i = Tween.delayedCall(0, e || tl, r);
                i.data = "isPause";
                this._hasPause = 1;
                return tJ(this, i, t7(this, t));
            };
            i_prototype.removePause = function(t) {
                let _first = this._first;
                for(t = t7(this, t); _first;){
                    if (_first._start === t && _first.data === "isPause") {
                        tq(_first);
                    }
                    _first = _first._next;
                }
            };
            i_prototype.killTweensOf = function(t, e, r) {
                const i = this.getTweensOf(t, r);
                for(let n = i.length; n--;){
                    if (eZ !== i[n]) {
                        i[n].kill(t, e);
                    }
                }
                return this;
            };
            i_prototype.getTweensOf = function(t, e) {
                let r;
                const i = [];
                const n = toArray(t);
                for(let s = this._first, a = X(e); s;){
                    s instanceof Tween ? tD(s._targets, n) && (a ? (!eZ || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r);
                    s = s._next;
                }
                return i;
            };
            i_prototype.tweenTo = function(t, e) {
                e = e || {};
                let r;
                const i = this;
                const time = t7(i, t);
                const s = e;
                const s_startAt = s.startAt;
                const s_onStart = s.onStart;
                const s_onStartParams = s.onStartParams;
                const s_immediateRender = s.immediateRender;
                var l = Tween.to(i, tF({
                    ease: e.ease || "none",
                    lazy: false,
                    immediateRender: false,
                    time,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((time - (s_startAt && "time" in s_startAt ? s_startAt.time : i._time)) / i.timeScale()) || 1e-8,
                    onStart () {
                        i.pause();
                        if (!r) {
                            const t = e.duration || Math.abs((time - (s_startAt && "time" in s_startAt ? s_startAt.time : i._time)) / i.timeScale());
                            if (l._dur !== t) {
                                t6(l, t, 0, 1).render(l._time, true, true);
                            }
                            r = 1;
                        }
                        if (s_onStart) {
                            s_onStart.apply(l, s_onStartParams || []);
                        }
                    }
                }, e));
                if (s_immediateRender) {
                    return l.render(0);
                }
                return l;
            };
            i_prototype.tweenFromTo = function(t, e, r) {
                return this.tweenTo(e, tF({
                    startAt: {
                        time: t7(this, t)
                    }
                }, r));
            };
            i_prototype.recent = function() {
                return this._recent;
            };
            i_prototype.nextLabel = function(t = this._time) {
                return em(this, t7(this, t));
            };
            i_prototype.previousLabel = function(t = this._time) {
                return em(this, t7(this, t), 1);
            };
            i_prototype.currentLabel = function(t) {
                if (arguments.length) {
                    return this.seek(t, true);
                }
                return this.previousLabel(this._time + 1e-8);
            };
            i_prototype.shiftChildren = function(t, e, r = 0) {
                let i;
                let _first = this._first;
                const labels = this.labels;
                for(t = tA(t); _first;){
                    if (_first._start >= r) {
                        _first._start += t;
                        _first._end += t;
                    }
                    _first = _first._next;
                }
                if (e) {
                    for(i in labels){
                        if (labels[i] >= r) {
                            labels[i] += t;
                        }
                    }
                }
                return tV(this);
            };
            i_prototype.invalidate = function(e) {
                let _first = this._first;
                for(this._lock = 0; _first;){
                    _first.invalidate(e);
                    _first = _first._next;
                }
                return t.prototype.invalidate.call(this, e);
            };
            i_prototype.clear = function(t = true) {
                let e;
                for(let r = this._first; r;){
                    e = r._next;
                    this.remove(r);
                    r = e;
                }
                if (this._dp) {
                    this._time = this._tTime = this._pTime = 0;
                }
                if (t) {
                    this.labels = {};
                }
                return tV(this);
            };
            i_prototype.totalDuration = function(t) {
                let e;
                let r;
                let i;
                let n = 0;
                let _last = this._last;
                let a = 100000000;
                if (arguments.length) {
                    return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
                }
                if (this._dirty) {
                    for(i = this.parent; _last;){
                        e = _last._prev;
                        if (_last._dirty) {
                            _last.totalDuration();
                        }
                        if ((r = _last._start) > a && this._sort && _last._ts && !this._lock) {
                            this._lock = 1;
                            tJ(this, _last, r - _last._delay, 1)._lock = 0;
                        } else {
                            a = r;
                        }
                        if (r < 0 && _last._ts) {
                            n -= r;
                            if (!i && !this._dp || i && i.smoothChildTiming) {
                                this._start += tA(r / this._ts);
                                this._time -= r;
                                this._tTime -= r;
                            }
                            this.shiftChildren(-r, false, -Infinity);
                            a = 0;
                        }
                        if (_last._end > n && _last._ts) {
                            n = _last._end;
                        }
                        _last = e;
                    }
                    t6(this, this === globalTimeline && this._time > n ? this._time : n, 1, 1);
                    this._dirty = 0;
                }
                return this._tDur;
            };
            i.updateRoot = (t)=>{
                if (globalTimeline._ts) {
                    tS(globalTimeline, tH(t, globalTimeline));
                    C = ticker.frame;
                }
                if (ticker.frame >= ty) {
                    ty += P.autoSleep || 120;
                    let e = globalTimeline._first;
                    if ((!e || !e._ts) && P.autoSleep && ticker._listeners.length < 2) {
                        while(e && !e._ts){
                            e = e._next;
                        }
                        if (!e) {
                            ticker.sleep();
                        }
                    }
                }
            };
            return i;
        })(Animation);
        tF(Timeline.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var eW;
        var eG;
        var eQ;
        var eH;
        var eZ;
        var e$;
        var eK = function(t, e, r, i, n, s, a) {
            let o;
            let u;
            let h;
            let l;
            let f;
            let c;
            let p;
            let _;
            const d = new rp(this._pt, t, e, 0, 1, ro, null, n);
            let m = 0;
            let g = 0;
            d.b = r;
            d.e = i;
            r += "";
            i += "";
            if (p = ~i.indexOf("random(")) {
                i = e_(i);
            }
            if (s) {
                s(_ = [
                    r,
                    i
                ], t, e);
                r = _[0];
                i = _[1];
            }
            for(u = r.match(tt) || []; o = tt.exec(i);){
                l = o[0];
                f = i.substring(m, o.index);
                if (h) {
                    h = (h + 1) % 5;
                } else if (f.substr(-5) === "rgba(") {
                    h = 1;
                }
                if (l !== u[g++]) {
                    c = parseFloat(u[g - 1]) || 0;
                    d._pt = {
                        _next: d._pt,
                        p: f || g === 1 ? f : ",",
                        s: c,
                        c: l.charAt(1) === "=" ? tC(c, l) - c : parseFloat(l) - c,
                        m: h && h < 4 ? Math.round : 0
                    };
                    m = tt.lastIndex;
                }
            }
            d.c = m < i.length ? i.substring(m, i.length) : "";
            d.fp = a;
            if (te.test(i) || p) {
                d.e = 0;
            }
            this._pt = d;
            return d;
        };
        var add = function(t, e, r, i, n, s, a, o, u, h) {
            if (U(i)) {
                i = i(n || 0, t, s);
            }
            let l;
            const f = t[e];
            const c = r !== "get" ? r : U(f) ? u ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f;
            const p = U(f) ? u ? rr : re : rt;
            Y(i) && (~i.indexOf("random(") && (i = e_(i)), i.charAt(1) === "=" && ((l = tC(c, i) + (getUnit(c) || 0)) || l === 0) && (i = l));
            if (!h || c !== i || e$) {
                if (isNaN(c * i) || i === "") {
                    if (!(f || e in t)) {
                        to(e, i);
                    }
                    return eK.call(this, t, e, c, i, p, o || P.stringFilter, u);
                }
                l = new rp(this._pt, t, e, +c || 0, i - (c || 0), typeof f === "boolean" ? ra : rs, 0, p);
                if (u) {
                    l.fp = u;
                }
                if (a) {
                    l.modifier(a, this, t);
                }
                return this._pt = l;
            }
        };
        var e0 = (t, e, r, i, n)=>{
            if (U(t)) {
                t = e6(t, n, e, r, i);
            }
            if (!q(t) || t.style && t.nodeType || Array_isArray(t) || G(t)) {
                if (Y(t)) {
                    return e6(t, n, e, r, i);
                }
                return t;
            }
            let s;
            const a = {};
            for(s in t){
                a[s] = e6(t[s], n, e, r, i);
            }
            return a;
        };
        var e1 = (t, e, r, i, n, s)=>{
            let a;
            let o;
            let u;
            let h;
            if (plugins[t] && (a = new plugins[t]).init(n, a.rawVars ? e[t] : e0(e[t], i, n, s, r), r, i, s) !== false && (r._pt = o = new rp(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== D)) {
                u = r._ptLookup[r._targets.indexOf(n)];
                for(h = a._props.length; h--;){
                    u[a._props[h]] = o;
                }
            }
            return a;
        };
        var e2 = function t(e, r, i) {
            let n;
            let s;
            let a;
            let o;
            let u;
            let h;
            let l;
            let f;
            let c;
            let p;
            let _;
            let d;
            let m;
            const e_vars = e.vars;
            let g_ease = e_vars.ease;
            const g_startAt = e_vars.startAt;
            let g_immediateRender = e_vars.immediateRender;
            let g_lazy = e_vars.lazy;
            const g_onUpdate = e_vars.onUpdate;
            const g_runBackwards = e_vars.runBackwards;
            const g_yoyoEase = e_vars.yoyoEase;
            const g_keyframes = e_vars.keyframes;
            const g_autoRevert = e_vars.autoRevert;
            const e__dur = e._dur;
            const e__startAt = e._startAt;
            const e__targets = e._targets;
            const e_parent = e.parent;
            const F = e_parent && e_parent.data === "nested" ? e_parent.vars.targets : e__targets;
            const L = e._overwrite === "auto" && !T;
            const e_timeline = e.timeline;
            const B = e_vars.easeReverse || g_yoyoEase;
            if (!(!e_timeline || g_keyframes && g_ease)) {
                g_ease = "none";
            }
            e._ease = eB(g_ease, defaults.ease);
            e._rEase = B && (eB(B) || e._ease);
            e._from = !e_timeline && !!e_vars.runBackwards;
            if (e._from) {
                e.ratio = 1;
            }
            if (!e_timeline || g_keyframes && !e_vars.stagger) {
                d = (f = e__targets[0] ? getCache(e__targets[0]).harness : 0) && e_vars[f.prop];
                n = tB(e_vars, t_);
                if (e__startAt) {
                    if (e__startAt._zTime < 0) {
                        e__startAt.progress(1);
                    }
                    if (r < 0 && g_runBackwards && g_immediateRender && !g_autoRevert) {
                        e__startAt.render(-1, true);
                    } else {
                        e__startAt.revert(g_runBackwards && e__dur ? tc : tf);
                    }
                    e__startAt._lazy = 0;
                }
                if (g_startAt) {
                    tq(e._startAt = Tween.set(e__targets, tF({
                        data: "isStart",
                        overwrite: false,
                        parent: e_parent,
                        immediateRender: true,
                        lazy: !e__startAt && V(g_lazy),
                        startAt: null,
                        delay: 0,
                        onUpdate: g_onUpdate && (()=>eg(e, "onUpdate")),
                        stagger: 0
                    }, g_startAt)));
                    e._startAt._dp = 0;
                    e._startAt._sat = e;
                    if (r < 0 && (x || !g_immediateRender && !g_autoRevert)) {
                        e._startAt.revert(tc);
                    }
                    if (g_immediateRender && e__dur && r <= 0 && i <= 0) {
                        if (r) {
                            e._zTime = r;
                        }
                        return;
                    }
                } else if (g_runBackwards && e__dur && !e__startAt) {
                    if (r) {
                        g_immediateRender = false;
                    }
                    a = tF({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: g_immediateRender && !e__startAt && V(g_lazy),
                        immediateRender: g_immediateRender,
                        stagger: 0,
                        parent: e_parent
                    }, n);
                    if (d) {
                        a[f.prop] = d;
                    }
                    tq(e._startAt = Tween.set(e__targets, a));
                    e._startAt._dp = 0;
                    e._startAt._sat = e;
                    r < 0 && (x ? e._startAt.revert(tc) : e._startAt.render(-1, true));
                    e._zTime = r;
                    if (g_immediateRender) {
                        if (!r) {
                            return;
                        }
                    } else {
                        t(e._startAt, 1e-8, 1e-8);
                    }
                }
                e._pt = e._ptCache = 0;
                g_lazy = e__dur && V(g_lazy) || g_lazy && !e__dur;
                for(s = 0; s < e__targets.length; s++){
                    l = (u = e__targets[s])._gsap || tb(e__targets)[s]._gsap;
                    e._ptLookup[s] = p = {};
                    if (tm[l.id] && td.length) {
                        tR();
                    }
                    _ = F === e__targets ? s : F.indexOf(u);
                    if (f && (c = new f).init(u, d || n, e, _, F) !== false) {
                        e._pt = o = new rp(e._pt, u, c.name, 0, 1, c.render, c, 0, c.priority);
                        c._props.forEach((t)=>{
                            p[t] = o;
                        });
                        if (c.priority) {
                            h = 1;
                        }
                    }
                    if (!f || d) {
                        for(a in n){
                            if (plugins[a] && (c = e1(a, n, e, _, u, F))) {
                                if (c.priority) {
                                    h = 1;
                                }
                            } else {
                                p[a] = o = add.call(e, u, a, "get", n[a], _, F, 0, e_vars.stringFilter);
                            }
                        }
                    }
                    if (e._op && e._op[s]) {
                        e.kill(u, e._op[s]);
                    }
                    if (L && e._pt) {
                        eZ = e;
                        globalTimeline.killTweensOf(u, p, e.globalTime(r));
                        m = !e.parent;
                        eZ = 0;
                    }
                    if (e._pt && g_lazy) {
                        tm[l.id] = 1;
                    }
                }
                if (h) {
                    rc(e);
                }
                if (e._onInit) {
                    e._onInit(e);
                }
            }
            e._onUpdate = g_onUpdate;
            e._initted = (!e._op || e._pt) && !m;
            if (g_keyframes && r <= 0) {
                e_timeline.render(100000000, true, true);
            }
        };
        var e5 = (t, e, r, i, n, s, a, o)=>{
            let u;
            let h;
            let l;
            let f;
            let c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!c) {
                c = t._ptCache[e] = [];
                l = t._ptLookup;
                for(f = t._targets.length; f--;){
                    if ((u = l[f][e]) && u.d && u.d._pt) {
                        for(u = u.d._pt; u && u.p !== e && u.fp !== e;){
                            u = u._next;
                        }
                    }
                    if (!u) {
                        e$ = 1;
                        t.vars[e] = "+=0";
                        e2(t, a);
                        e$ = 0;
                        if (o) {
                            return tu(e + " not eligible for reset. Try splitting into individual properties");
                        }
                        return 1;
                    }
                    c.push(u);
                }
            }
            for(f = c.length; f--;){
                u = (h = c[f])._pt || h;
                u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c;
                u.c = r - u.s;
                if (h.e) {
                    h.e = tk(r) + getUnit(h.e);
                }
                if (h.b) {
                    h.b = u.s + getUnit(h.b);
                }
            }
        };
        var e8 = (_targets, e)=>{
            let r;
            let i;
            let n;
            let s;
            const a = _targets[0] ? getCache(_targets[0]).harness : 0;
            const o = a && a.aliases;
            if (!o) {
                return e;
            }
            r = tL({}, e);
            for(i in o){
                if (i in r) {
                    for(n = (s = o[i].split(",")).length; n--;){
                        r[s[n]] = r[i];
                    }
                }
            }
            return r;
        };
        var e3 = (t, e, r, easeEach)=>{
            let n;
            let s;
            const e_1 = e.ease || easeEach || "power1.inOut";
            if (Array_isArray(e)) {
                s = r[t] || (r[t] = []);
                e.forEach((v_1, r)=>s.push({
                        t: r / (e.length - 1) * 100,
                        v: v_1,
                        e: e_1
                    }));
            } else {
                for(n in e){
                    s = r[n] || (r[n] = []);
                    if (!(n === "ease")) {
                        s.push({
                            t: parseFloat(t),
                            v: e[n],
                            e: e_1
                        });
                    }
                }
            }
        };
        var e6 = (t, e, r, i, n)=>{
            if (U(t)) {
                return t.call(e, r, i, n);
            }
            if (Y(t) && ~t.indexOf("random(")) {
                return e_(t);
            }
            return t;
        };
        var e4 = tx + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
        var e9 = {};
        tM(e4 + ",id,stagger,delay,duration,paused,scrollTrigger", (t)=>e9[t] = 1);
        var Tween = ((t)=>{
            function i(r, i, n, s) {
                if (typeof i === "number") {
                    n.duration = i;
                    i = n;
                    n = null;
                }
                let a;
                let o;
                let u;
                let h;
                let l;
                let f;
                let c;
                let p;
                const _ = t.call(this, s ? i : tY(i)) || this;
                const __vars = _.vars;
                let d_duration = __vars.duration;
                let d_delay = __vars.delay;
                const d_immediateRender = __vars.immediateRender;
                const d_stagger = __vars.stagger;
                const d_overwrite = __vars.overwrite;
                const d_keyframes = __vars.keyframes;
                const d_defaults = __vars.defaults;
                const d_scrollTrigger = __vars.scrollTrigger;
                const k = i.parent || globalTimeline;
                const A = (Array_isArray(r) || G(r) ? X(r[0]) : "length" in i) ? [
                    r
                ] : toArray(r);
                _._targets = A.length ? tb(A) : tu("GSAP target " + r + " not found. https://gsap.com", !P.nullTargetWarn) || [];
                _._ptLookup = [];
                _._overwrite = d_overwrite;
                if (d_keyframes || d_stagger || W(d_duration) || W(d_delay)) {
                    const C = (i = _.vars).easeReverse || i.yoyoEase;
                    (a = _.timeline = new Timeline({
                        data: "nested",
                        defaults: d_defaults || {},
                        targets: k && k.data === "nested" ? k.vars.targets : A
                    })).kill();
                    a.parent = a._dp = e(_);
                    a._start = 0;
                    if (d_stagger || W(d_duration) || W(d_delay)) {
                        h = A.length;
                        c = d_stagger && distribute(d_stagger);
                        if (q(d_stagger)) {
                            for(l in d_stagger){
                                if (~e4.indexOf(l)) {
                                    if (!p) {
                                        p = {};
                                    }
                                    p[l] = d_stagger[l];
                                }
                            }
                        }
                        for(o = 0; o < h; o++){
                            u = tB(i, e9);
                            u.stagger = 0;
                            if (C) {
                                u.easeReverse = C;
                            }
                            if (p) {
                                tL(u, p);
                            }
                            f = A[o];
                            u.duration = +e6(d_duration, e(_), o, f, A);
                            u.delay = (+e6(d_delay, e(_), o, f, A) || 0) - _._delay;
                            if (!d_stagger && h === 1 && u.delay) {
                                _._delay = d_delay = u.delay;
                                _._start += d_delay;
                                u.delay = 0;
                            }
                            a.to(f, u, c ? c(o, f, A) : 0);
                            a._ease = eP.none;
                        }
                        if (a.duration()) {
                            d_delay = 0;
                            d_duration = 0;
                        } else {
                            _.timeline = 0;
                        }
                    } else if (d_keyframes) {
                        tY(tF(a.vars.defaults, {
                            ease: "none"
                        }));
                        a._ease = eB(d_keyframes.ease || i.ease || "none");
                        let D;
                        let R;
                        let S;
                        let z = 0;
                        if (Array_isArray(d_keyframes)) {
                            d_keyframes.forEach((t)=>a.to(A, t, ">"));
                            a.duration();
                        } else {
                            u = {};
                            for(l in d_keyframes){
                                if (!(l === "ease" || l === "easeEach")) {
                                    e3(l, d_keyframes[l], u, d_keyframes.easeEach);
                                }
                            }
                            for(l in u){
                                D = u[l].sort((t, e)=>t.t - e.t);
                                z = 0;
                                for(o = 0; o < D.length; o++){
                                    S = {
                                        ease: (R = D[o]).e,
                                        duration: (R.t - (o ? D[o - 1].t : 0)) / 100 * d_duration
                                    };
                                    S[l] = R.v;
                                    a.to(A, S, z);
                                    z += S.duration;
                                }
                            }
                            if (a.duration() < d_duration) {
                                a.to({}, {
                                    duration: d_duration - a.duration()
                                });
                            }
                        }
                    }
                    if (!d_duration) {
                        _.duration(d_duration = a.duration());
                    }
                } else {
                    _.timeline = 0;
                }
                if (!(d_overwrite !== true || T)) {
                    eZ = e(_);
                    globalTimeline.killTweensOf(A);
                    eZ = 0;
                }
                tJ(k, e(_), n);
                if (i.reversed) {
                    _.reverse();
                }
                if (i.paused) {
                    _.paused(true);
                }
                if (d_immediateRender || !d_duration && !d_keyframes && _._start === tA(k._time) && V(d_immediateRender) && function t(e) {
                    return !e || e._ts && t(e.parent);
                }(e(_)) && k.data !== "nested") {
                    _._tTime = -1e-8;
                    _.render(Math.max(0, -d_delay) || 0);
                }
                if (d_scrollTrigger) {
                    t0(e(_), d_scrollTrigger);
                }
                return _;
            }
            r(i, t);
            const i_prototype = i.prototype;
            i_prototype.render = function(t, e, r) {
                let i;
                let n;
                let s;
                let a;
                let o;
                let u;
                let h;
                let l;
                const _time = this._time;
                const _tDur = this._tDur;
                const _dur = this._dur;
                const _ = t < 0;
                const d = t > _tDur - 1e-8 && !_ ? _tDur : t < 1e-8 ? 0 : t;
                if (_dur) {
                    if (d !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
                        i = d;
                        l = this.timeline;
                        if (this._repeat) {
                            a = _dur + this._rDelay;
                            if (this._repeat < -1 && _) {
                                return this.totalTime(100 * a + t, e, r);
                            }
                            i = tA(d % a);
                            if (d === _tDur) {
                                s = this._repeat;
                                i = _dur;
                            } else if ((s = ~~(o = tA(d / a))) && s === o) {
                                i = _dur;
                                s--;
                            } else if (i > _dur) {
                                i = _dur;
                            }
                            if (u = this._yoyo && 1 & s) {
                                i = _dur - i;
                            }
                            o = tQ(this._tTime, a);
                            if (i === _time && !r && this._initted && s === o) {
                                this._tTime = d;
                                return this;
                            }
                            if (s !== o && this.vars.repeatRefresh && !u && !this._lock && i !== a && this._initted) {
                                this._lock = r = 1;
                                this.render(tA(a * s), true).invalidate()._lock = 0;
                            }
                        }
                        if (!this._initted) {
                            if (t1(this, _ ? t : i, r, e, d)) {
                                this._tTime = 0;
                                return this;
                            }
                            if (_time !== this._time && !(r && this.vars.repeatRefresh && s !== o)) {
                                return this;
                            }
                            if (_dur !== this._dur) {
                                return this.render(t, e, r);
                            }
                        }
                        if (this._rEase) {
                            const m = i < _time;
                            if (m !== this._inv) {
                                const g = m ? _time : _dur - _time;
                                this._inv = m;
                                if (this._from) {
                                    this.ratio = 1 - this.ratio;
                                }
                                this._invRatio = this.ratio;
                                this._invTime = _time;
                                this._invRecip = g ? (m ? -1 : 1) / g : 0;
                                this._invScale = m ? -this.ratio : 1 - this.ratio;
                                this._invEase = m ? this._rEase : this._ease;
                            }
                            this.ratio = h = this._invRatio + this._invScale * this._invEase((i - this._invTime) * this._invRecip);
                        } else {
                            this.ratio = h = this._ease(i / _dur);
                        }
                        if (this._from) {
                            this.ratio = h = 1 - h;
                        }
                        this._tTime = d;
                        this._time = i;
                        if (!this._act && this._ts) {
                            this._act = 1;
                            this._lazy = 0;
                        }
                        if (!_time && d && !e && !o && (eg(this, "onStart"), this._tTime !== d)) {
                            return this;
                        }
                        for(n = this._pt; n;){
                            n.r(h, n.d);
                            n = n._next;
                        }
                        l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t);
                        if (this._onUpdate && !e) {
                            if (_) {
                                tW(this, t, e, r);
                            }
                            eg(this, "onUpdate");
                        }
                        if (this._repeat && s !== o && this.vars.onRepeat && !e && this.parent) {
                            eg(this, "onRepeat");
                        }
                        (d === this._tDur || !d) && this._tTime === d && (_ && !this._onUpdate && tW(this, t, true, true), (t || !_dur) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && tq(this, 1), !e && !(_ && !_time) && (d || _time || u) && (eg(this, d === _tDur ? "onComplete" : "onReverseComplete", true), this._prom && !(d < _tDur && this.timeScale() > 0) && this._prom()));
                    }
                } else {
                    t8(this, t, e, r);
                }
                return this;
            };
            i_prototype.targets = function() {
                return this._targets;
            };
            i_prototype.invalidate = function(e) {
                if (!(e && this.vars.runBackwards)) {
                    this._startAt = 0;
                }
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
                this._ptLookup = [];
                if (this.timeline) {
                    this.timeline.invalidate(e);
                }
                return t.prototype.invalidate.call(this, e);
            };
            i_prototype.resetTo = function(t, e, r, i, n) {
                if (!R) {
                    ticker.wake();
                }
                if (!this._ts) {
                    this.play();
                }
                const s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                if (!this._initted) {
                    e2(this, s);
                }
                if (e5(this, t, e, r, i, this._ease(s / this._dur), s, n)) {
                    return this.resetTo(t, e, r, i, 1);
                }
                t$(this, 0);
                if (!this.parent) {
                    tX(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
                }
                return this.render(0);
            };
            i_prototype.kill = function(t, e = "all") {
                if (!t && (!e || e === "all")) {
                    this._lazy = this._pt = 0;
                    if (this.parent) {
                        ev(this);
                    } else if (this.scrollTrigger) {
                        this.scrollTrigger.kill(!!x);
                    }
                    return this;
                }
                if (this.timeline) {
                    const r = this.timeline.totalDuration();
                    if (!this.timeline.killTweensOf(t, e, eZ && eZ.vars.overwrite !== true)._first) {
                        ev(this);
                    }
                    if (this.parent && r !== this.timeline.totalDuration()) {
                        t6(this, this._dur * this.timeline._tDur / r, 0, 1);
                    }
                    return this;
                }
                let i;
                let n;
                let s;
                let a;
                let o;
                let u;
                let h;
                const _targets = this._targets;
                const f = t ? toArray(t) : _targets;
                const _ptLookup = this._ptLookup;
                const _pt = this._pt;
                if ((!e || e === "all") && tU(_targets, f)) {
                    if (e === "all") {
                        this._pt = 0;
                    }
                    return ev(this);
                }
                i = this._op = this._op || [];
                if (e !== "all") {
                    if (Y(e)) {
                        o = {};
                        tM(e, (t)=>o[t] = 1);
                        e = o;
                    }
                    e = e8(_targets, e);
                }
                for(h = _targets.length; h--;){
                    if (~f.indexOf(_targets[h])) {
                        n = _ptLookup[h];
                        if (e === "all") {
                            i[h] = e;
                            a = n;
                            s = {};
                        } else {
                            s = i[h] = i[h] || {};
                            a = e;
                        }
                        for(o in a){
                            (u = n && n[o]) && ("kill" in u.d && u.d.kill(o) !== true || _removeLinkedListItem(this, u, "_pt"), delete n[o]);
                            if (s !== "all") {
                                s[o] = 1;
                            }
                        }
                    }
                }
                if (this._initted && !this._pt && _pt) {
                    ev(this);
                }
                return this;
            };
            i.to = function(t, e) {
                return new i(t, e, arguments[2]);
            };
            i.from = function(t, e) {
                return et(1, arguments);
            };
            i.delayedCall = (delay, e, r, callbackScope)=>new i(e, 0, {
                    immediateRender: false,
                    lazy: false,
                    overwrite: false,
                    delay,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope
                });
            i.fromTo = function(t, e, r) {
                return et(2, arguments);
            };
            i.set = (t, e)=>{
                e.duration = 0;
                if (!e.repeatDelay) {
                    e.repeat = 0;
                }
                return new i(t, e);
            };
            i.killTweensOf = (t, e, r)=>globalTimeline.killTweensOf(t, e, r);
            return i;
        })(Animation);
        tF(Tween.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        });
        tM("staggerTo,staggerFrom,staggerFromTo", (t)=>{
            Tween[t] = function() {
                const e = new Timeline;
                const r = slice.call(arguments, 0);
                r.splice(t === "staggerFromTo" ? 5 : 4, 0, 0);
                return e[t].apply(e, r);
            };
        });
        var rt = (t, e, r)=>t[e] = r;
        var re = (t, e, r)=>t[e](r);
        var rr = (t, e, r, i)=>t[e](i.fp, r);
        var ri = (t, e, r)=>t.setAttribute(e, r);
        var getSetter = (t, e)=>{
            if (U(t[e])) {
                return re;
            }
            if (N(t[e]) && t.setAttribute) {
                return ri;
            }
            return rt;
        };
        var rs = (t, e)=>e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1000000) / 1000000, e);
        var ra = (t, e)=>e.set(e.t, e.p, !!(e.s + e.c * t), e);
        var ro = (t, e)=>{
            let e__pt = e._pt;
            let i = "";
            if (!t && e.b) {
                i = e.b;
            } else if (t === 1 && e.e) {
                i = e.e;
            } else {
                while(e__pt){
                    i = e__pt.p + (e__pt.m ? e__pt.m(e__pt.s + e__pt.c * t) : Math.round((e__pt.s + e__pt.c * t) * 10000) / 10000) + i;
                    e__pt = e__pt._next;
                }
                i += e.c;
            }
            e.set(e.t, e.p, i, e);
        };
        var render = (t, e)=>{
            for(let r = e._pt; r;){
                r.r(t, r.d);
                r = r._next;
            }
        };
        var modifier = function(t, e, r, i) {
            let n;
            for(let s = this._pt; s;){
                n = s._next;
                if (s.p === i) {
                    s.modifier(t, e, r);
                }
                s = n;
            }
        };
        var kill = function(t) {
            let e;
            let r;
            for(let i = this._pt; i;){
                r = i._next;
                if ((i.p !== t || i.op) && i.op !== t) {
                    if (!i.dep) {
                        e = 1;
                    }
                } else {
                    _removeLinkedListItem(this, i, "_pt");
                }
                i = r;
            }
            return !e;
        };
        var rf = (t, e, r, i)=>{
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        };
        var rc = (t)=>{
            let e;
            let r;
            let i;
            let n;
            for(let s = t._pt; s;){
                e = s._next;
                for(r = i; r && r.pr > s.pr;){
                    r = r._next;
                }
                if (s._prev = r ? r._prev : n) {
                    s._prev._next = s;
                } else {
                    i = s;
                }
                if (s._next = r) {
                    r._prev = s;
                } else {
                    n = s;
                }
                s = e;
            }
            t._pt = i;
        };
        class rp {
            constructor(t, e, r, i, n, s, a, o, u){
                this.t = e;
                this.s = i;
                this.c = n;
                this.p = r;
                this.r = s || rs;
                this.d = a || this;
                this.set = o || rt;
                this.pr = u || 0;
                this._next = t;
                if (t) {
                    t._prev = this;
                }
            }
            modifier(t, e, r) {
                this.mSet = this.mSet || this.set;
                this.set = rf;
                this.m = t;
                this.mt = r;
                this.tween = e;
            }
        }
        tM(tx + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", (t)=>t_[t] = 1);
        tn.TweenMax = tn.TweenLite = Tween;
        tn.TimelineLite = tn.TimelineMax = Timeline;
        globalTimeline = new Timeline({
            sortChildren: false,
            defaults,
            autoRemoveChildren: true,
            id: "root",
            smoothChildTiming: true
        });
        P.stringFilter = eC;
        var r_ = [];
        var rd = {};
        var rm = [];
        var rg = 0;
        var rv = 0;
        var ry = (t)=>(rd[t] || rm).map((t)=>t());
        var rT = ()=>{
            const t = Date.now();
            const e = [];
            if (t - rg > 2) {
                ry("matchMediaInit");
                r_.forEach((t)=>{
                    let r;
                    let i;
                    let n;
                    let s;
                    const t_queries = t.queries;
                    const t_conditions = t.conditions;
                    for(i in t_queries){
                        if (r = O.matchMedia(t_queries[i]).matches) {
                            n = 1;
                        }
                        if (r !== t_conditions[i]) {
                            t_conditions[i] = r;
                            s = 1;
                        }
                    }
                    if (s) {
                        t.revert();
                        if (n) {
                            e.push(t);
                        }
                    }
                });
                ry("matchMediaRevert");
                e.forEach((t)=>t.onMatch(t, (e)=>t.add(null, e)));
                rg = t;
                ry("matchMedia");
            }
        };
        var rx = (()=>{
            function t(t, e) {
                this.selector = e && selector(e);
                this.data = [];
                this._r = [];
                this.isReverted = false;
                this.id = rv++;
                if (t) {
                    this.add(t);
                }
            }
            const t_prototype = t.prototype;
            t_prototype.add = function(t, e, r) {
                if (U(t)) {
                    r = e;
                    e = t;
                    t = U;
                }
                const i = this;
                const n = function() {
                    let t;
                    const n = b;
                    const i_selector = i.selector;
                    if (n && n !== i) {
                        n.data.push(i);
                    }
                    if (r) {
                        i.selector = selector(r);
                    }
                    b = i;
                    t = e.apply(i, arguments);
                    if (U(t)) {
                        i._r.push(t);
                    }
                    b = n;
                    i.selector = i_selector;
                    i.isReverted = false;
                    return t;
                };
                i.last = n;
                if (t === U) {
                    return n(i, (t)=>i.add(null, t));
                }
                if (t) {
                    return i[t] = n;
                }
                return n;
            };
            t_prototype.ignore = function(t) {
                const e = b;
                b = null;
                t(this);
                b = e;
            };
            t_prototype.getTweens = function() {
                const e = [];
                this.data.forEach((r)=>{
                    if (r instanceof t) {
                        return e.push.apply(e, r.getTweens());
                    }
                    return r instanceof Tween && !(r.parent && r.parent.data === "nested") && e.push(r);
                });
                return e;
            };
            t_prototype.clear = function() {
                this._r.length = this.data.length = 0;
            };
            t_prototype.kill = function(t, e) {
                const r = this;
                if (t) {
                    let i;
                    const n = r.getTweens();
                    for(var s = r.data.length; s--;){
                        if ((i = r.data[s]).data === "isFlip") {
                            i.revert();
                            i.getChildren(true, true, false).forEach((t)=>n.splice(n.indexOf(t), 1));
                        }
                    }
                    n.map((t)=>({
                            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
                            t
                        })).sort((t, e)=>e.g - t.g || -Infinity).forEach((e)=>e.t.revert(t));
                    for(s = r.data.length; s--;){
                        (i = r.data[s]) instanceof Timeline ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : i instanceof Tween || !i.revert || i.revert(t);
                    }
                    r._r.forEach((e)=>e(t, r));
                    r.isReverted = true;
                } else {
                    this.data.forEach((t)=>t.kill && t.kill());
                }
                this.clear();
                if (e) {
                    for(let a = r_.length; a--;){
                        if (r_[a].id === this.id) {
                            r_.splice(a, 1);
                        }
                    }
                }
            };
            t_prototype.revert = function(t) {
                this.kill(t || {});
            };
            return t;
        })();
        class rb {
            constructor(t){
                this.contexts = [];
                this.scope = t;
                if (b) {
                    b.data.push(this);
                }
            }
            add(matches, e, r) {
                if (!q(matches)) {
                    matches = {
                        matches
                    };
                }
                let i;
                let n;
                let s;
                const a = new rx(0, r || this.scope);
                const o = a.conditions = {};
                if (b && !a.selector) {
                    a.selector = b.selector;
                }
                this.contexts.push(a);
                e = a.add("onMatch", e);
                a.queries = matches;
                for(n in matches){
                    if (n === "all") {
                        s = 1;
                    } else {
                        (i = O.matchMedia(matches[n])) && (r_.indexOf(a) < 0 && r_.push(a), (o[n] = i.matches) && (s = 1), i.addListener ? i.addListener(rT) : i.addEventListener("change", rT));
                    }
                }
                if (s) {
                    e(a, (t)=>a.add(null, t));
                }
                return this;
            }
            revert(t) {
                this.kill(t || {});
            }
            kill(t) {
                this.contexts.forEach((e)=>e.kill(t, true));
            }
        }
        var rw = {
            registerPlugin () {
                for(var t = arguments.length, e = Array(t), r = 0; r < t; r++){
                    e[r] = arguments[r];
                }
                e.forEach((t)=>eT(t));
            },
            timeline (t) {
                return new Timeline(t);
            },
            getTweensOf (t, e) {
                return globalTimeline.getTweensOf(t, e);
            },
            getProperty (t, e, r, i) {
                if (Y(t)) {
                    t = toArray(t)[0];
                }
                const get = getCache(t || {}).get;
                const s = r ? tE : tz;
                if (r === "native") {
                    r = "";
                }
                if (t) {
                    if (e) {
                        return s((plugins[e] && plugins[e].get || get)(t, e, r, i));
                    }
                    return (e, r, i)=>s((plugins[e] && plugins[e].get || get)(t, e, r, i));
                }
                return t;
            },
            quickSetter (t, e, r) {
                if ((t = toArray(t)).length > 1) {
                    const i = t.map((t)=>rA.quickSetter(t, e, r));
                    const n = i.length;
                    return (t)=>{
                        for(let e = n; e--;){
                            i[e](t);
                        }
                    };
                }
                t = t[0] || {};
                const s = plugins[e];
                const a = getCache(t);
                const o = a.harness && (a.harness.aliases || {})[e] || e;
                const u = s ? (e)=>{
                    const i = new s;
                    D._pt = 0;
                    i.init(t, r ? e + r : e, D, 0, [
                        t
                    ]);
                    i.render(1, i);
                    if (D._pt) {
                        render(1, D);
                    }
                } : a.set(t, o);
                if (s) {
                    return u;
                }
                return (e)=>u(t, o, r ? e + r : e, a, 1);
            },
            quickTo (t, e, r) {
                const n = rA.to(t, tF({
                    [e]: "+=0.1",
                    paused: true,
                    stagger: 0
                }, r || {}));
                const s = (t, r, i)=>n.resetTo(e, t, r, i);
                s.tween = n;
                return s;
            },
            isTweening (t) {
                return globalTimeline.getTweensOf(t, true).length > 0;
            },
            defaults (t) {
                if (t && t.ease) {
                    t.ease = eB(t.ease, defaults.ease);
                }
                return tI(defaults, t || {});
            },
            config (t) {
                return tI(P, t || {});
            },
            registerEffect (t) {
                const t_name = t.name;
                const t_effect = t.effect;
                const t_plugins = t.plugins;
                const t_defaults = t.defaults;
                const t_extendTimeline = t.extendTimeline;
                (t_plugins || "").split(",").forEach((t)=>t && !plugins[t] && !tn[t] && tu(t_name + " effect requires " + t + " plugin."));
                effects[t_name] = (t, e, i)=>t_effect(toArray(t), tF(e || {}, t_defaults), i);
                if (t_extendTimeline) {
                    Timeline.prototype[t_name] = function(t, r, i) {
                        return this.add(effects[t_name](t, q(r) ? r : (i = r) && {}, this), i);
                    };
                }
            },
            registerEase (t, e) {
                eP[t] = eB(e);
            },
            parseEase (t, e) {
                if (arguments.length) {
                    return eB(t, e);
                }
                return eP;
            },
            getById (t) {
                return globalTimeline.getById(t);
            },
            exportRoot (t = {}, e) {
                let r;
                let i;
                const n = new Timeline(t);
                n.smoothChildTiming = V(t.smoothChildTiming);
                globalTimeline.remove(n);
                n._dp = 0;
                n._time = n._tTime = globalTimeline._time;
                for(r = globalTimeline._first; r;){
                    i = r._next;
                    if (e || !(!r._dur && r instanceof Tween && r.vars.onComplete === r._targets[0])) {
                        tJ(n, r, r._start - r._delay);
                    }
                    r = i;
                }
                tJ(globalTimeline, n, 0);
                return n;
            },
            context (t, e) {
                if (t) {
                    return new rx(t, e);
                }
                return b;
            },
            matchMedia (t) {
                return new rb(t);
            },
            matchMediaRefresh () {
                return r_.forEach((t)=>{
                    let e;
                    let r;
                    const t_conditions = t.conditions;
                    for(r in t_conditions){
                        if (t_conditions[r]) {
                            t_conditions[r] = false;
                            e = 1;
                        }
                    }
                    if (e) {
                        t.revert();
                    }
                }) || rT();
            },
            addEventListener (t, e) {
                const r = rd[t] || (rd[t] = []);
                if (!~r.indexOf(e)) {
                    r.push(e);
                }
            },
            removeEventListener (t, e) {
                const r = rd[t];
                const i = r && r.indexOf(e);
                if (i >= 0) {
                    r.splice(i, 1);
                }
            },
            utils: {
                wrap: function t(e, r, i) {
                    const n = r - e;
                    if (Array_isArray(e)) {
                        return ep(e, t(0, e.length), r);
                    }
                    return ee(i, (t)=>(n + (t - e) % n) % n + e);
                },
                wrapYoyo: function t(e, r, i) {
                    const n = r - e;
                    const s = 2 * n;
                    if (Array_isArray(e)) {
                        return ep(e, t(0, e.length - 1), r);
                    }
                    return ee(i, (t)=>{
                        t = (s + (t - e) % s) % s || 0;
                        return e + (t > n ? s - t : t);
                    });
                },
                distribute,
                random,
                snap,
                normalize (t, e, r) {
                    return mapRange(t, e, 0, 1, r);
                },
                getUnit,
                clamp (t, e, r) {
                    return ee(r, (r)=>er(t, e, r));
                },
                splitColor,
                toArray,
                selector,
                mapRange,
                pipe () {
                    for(var t = arguments.length, e = Array(t), r = 0; r < t; r++){
                        e[r] = arguments[r];
                    }
                    return (t)=>e.reduce((acc, item)=>item(acc), t);
                },
                unitize (t, e) {
                    return (r)=>t(parseFloat(r)) + (e || getUnit(r));
                },
                interpolate: function t(e, r, i, n) {
                    let s = isNaN(e + r) ? 0 : (t)=>(1 - t) * e + t * r;
                    if (!s) {
                        let a;
                        let o;
                        let u;
                        let h;
                        let l;
                        const f = Y(e);
                        const c = {};
                        if (i === true && (n = 1)) {
                            i = null;
                        }
                        if (f) {
                            e = {
                                p: e
                            };
                            r = {
                                p: r
                            };
                        } else if (Array_isArray(e) && !Array_isArray(r)) {
                            u = [];
                            l = (h = e.length) - 2;
                            for(o = 1; o < h; o++){
                                u.push(t(e[o - 1], e[o]));
                            }
                            h--;
                            s = (t)=>{
                                const e = Math.min(l, ~~(t *= h));
                                return u[e](t - e);
                            };
                            i = r;
                        } else {
                            if (!n) {
                                e = tL(Array_isArray(e) ? [] : {}, e);
                            }
                        }
                        if (!u) {
                            for(a in r){
                                add.call(c, e, a, "get", r[a]);
                            }
                            s = (t)=>render(t, c) || (f ? e.p : e);
                        }
                    }
                    return ee(i, s);
                },
                shuffle
            },
            install,
            effects,
            ticker,
            updateRoot: Timeline.updateRoot,
            plugins,
            globalTimeline,
            core: {
                PropTween: rp,
                globals,
                Tween,
                Timeline,
                Animation,
                getCache,
                _removeLinkedListItem,
                reverting () {
                    return x;
                },
                context (t) {
                    if (t && b) {
                        b.data.push(t);
                        t._ctx = b;
                    }
                    return b;
                },
                suppressOverwrites (t) {
                    return T = t;
                }
            }
        };
        tM("to,from,fromTo,delayedCall,set,killTweensOf", (t)=>rw[t] = Tween[t]);
        ticker.add(Timeline.updateRoot);
        D = rw.to({}, {
            duration: 0
        });
        var rO = (t, e)=>{
            for(var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;){
                r = r._next;
            }
            return r;
        };
        var rM = (t, e)=>{
            let r;
            let i;
            let n;
            const t__targets = t._targets;
            for(r in e){
                for(i = t__targets.length; i--;){
                    (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = rO(n, r)), n && n.modifier && n.modifier(e[r], t, t__targets[i], r));
                }
            }
        };
        var rk = (name, e)=>({
                name,
                headless: 1,
                rawVars: 1,
                init (t, r, i) {
                    i._onInit = (t)=>{
                        let i;
                        let n;
                        if (Y(r)) {
                            i = {};
                            tM(r, (t)=>i[t] = 1);
                            r = i;
                        }
                        if (e) {
                            i = {};
                            for(n in r){
                                i[n] = e(r[n]);
                            }
                            r = i;
                        }
                        rM(t, r);
                    };
                }
            });
        var rA = rw.registerPlugin({
            name: "attr",
            init (t, e, r, i, n) {
                let s;
                let a;
                let o;
                this.tween = r;
                for(s in e){
                    o = t.getAttribute(s) || "";
                    a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s);
                    a.op = s;
                    a.b = o;
                    this._props.push(s);
                }
            },
            render (t, e) {
                for(let r = e._pt; r;){
                    if (x) {
                        r.set(r.t, r.p, r.b, r);
                    } else {
                        r.r(t, r.d);
                    }
                    r = r._next;
                }
            }
        }, {
            name: "endArray",
            headless: 1,
            init (t, e) {
                for(let r = e.length; r--;){
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
                }
            }
        }, rk("roundProps", el), rk("modifiers"), rk("snap", snap)) || rw;
        Tween.version = Timeline.version = rA.version = "3.15.0";
        A = 1;
        if (j()) {
            eR();
        }
        eP.Power0;
        eP.Power1;
        eP.Power2;
        eP.Power3;
        eP.Power4;
        eP.Linear;
        eP.Quad;
        eP.Cubic;
        eP.Quart;
        eP.Quint;
        eP.Strong;
        eP.Elastic;
        eP.Back;
        eP.SteppedEase;
        eP.Bounce;
        eP.Sine;
        eP.Expo;
        eP.Circ;
        var rC;
        var rD;
        var rR;
        var rP;
        var rS;
        var rz;
        var rE;
        var rF = {};
        var rL = 180 / Math.PI;
        var rI = Math.PI / 180;
        var Math_atan2 = Math.atan2;
        var rY = /([A-Z])/g;
        var rU = /(left|right|width|margin|padding|x)/i;
        var rX = /[\s,\(]\S/;
        var aliases = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        };
        var rq = (t, e)=>e.set(e.t, e.p, Math.round((e.s + e.c * t) * 10000) / 10000 + e.u, e);
        var rV = (t, e)=>e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 10000) / 10000 + e.u, e);
        var rj = (t, e)=>e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 10000) / 10000 + e.u : e.b, e);
        var rW = (t, e)=>e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 10000) / 10000 + e.u : e.b, e);
        var rG = (t, e)=>{
            const r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        };
        var rQ = (t, e)=>e.set(e.t, e.p, t ? e.e : e.b, e);
        var rH = (t, e)=>e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
        var rZ = (t, e, r)=>t.style[e] = r;
        var r$ = (t, e, r)=>t.style.setProperty(e, r);
        var rK = (t, e, r)=>t._gsap[e] = r;
        var rJ = (t, e, r)=>t._gsap.scaleX = t._gsap.scaleY = r;
        var r0 = (t, e, r, i, n)=>{
            const t__gsap = t._gsap;
            t__gsap.scaleX = t__gsap.scaleY = r;
            t__gsap.renderTransform(n, t__gsap);
        };
        var r1 = (t, e, r, i, n)=>{
            const t__gsap = t._gsap;
            t__gsap[e] = r;
            t__gsap.renderTransform(n, t__gsap);
        };
        var r2 = "transform";
        var r5 = r2 + "Origin";
        var save = function t(e, r) {
            const i = this;
            const target = this.target;
            const n_style = target.style;
            const n__gsap = target._gsap;
            if (e in rF && n_style) {
                this.tfm = this.tfm || {};
                if (e === "transform") {
                    return aliases.transform.split(",").forEach((e)=>t.call(i, e, r));
                }
                if (~(e = aliases[e] || e).indexOf(",")) {
                    e.split(",").forEach((t)=>i.tfm[t] = get(target, t));
                } else {
                    this.tfm[e] = n__gsap.x ? n__gsap[e] : get(target, e);
                }
                if (e === r5) {
                    this.tfm.zOrigin = n__gsap.zOrigin;
                }
                if (this.props.indexOf(r2) >= 0) {
                    return;
                }
                if (n__gsap.svg) {
                    this.svgo = target.getAttribute("data-svg-origin");
                    this.props.push(r5, r, "");
                }
                e = r2;
            }
            if (n_style || r) {
                this.props.push(e, r, n_style[e]);
            }
        };
        var r3 = (t)=>{
            if (t.translate) {
                t.removeProperty("translate");
                t.removeProperty("scale");
                t.removeProperty("rotate");
            }
        };
        var revert = function() {
            let t;
            let e;
            const props = this.props;
            const target = this.target;
            const i_style = target.style;
            const i__gsap = target._gsap;
            for(t = 0; t < props.length; t += 3){
                props[t + 1] ? props[t + 1] === 2 ? target[props[t]](props[t + 2]) : target[props[t]] = props[t + 2] : props[t + 2] ? i_style[props[t]] = props[t + 2] : i_style.removeProperty(props[t].substr(0, 2) === "--" ? props[t] : props[t].replace(rY, "-$1").toLowerCase());
            }
            if (this.tfm) {
                for(e in this.tfm){
                    i__gsap[e] = this.tfm[e];
                }
                if (i__gsap.svg) {
                    i__gsap.renderTransform();
                    target.setAttribute("data-svg-origin", this.svgo || "");
                }
                if (!((t = rz()) && t.isStart || i_style[r2])) {
                    r3(i_style);
                    if (i__gsap.zOrigin && i_style[r5]) {
                        i_style[r5] += " " + i__gsap.zOrigin + "px";
                        i__gsap.zOrigin = 0;
                        i__gsap.renderTransform();
                    }
                    i__gsap.uncache = 1;
                }
            }
        };
        var r4 = (target, e)=>{
            const r = {
                target,
                props: [],
                revert,
                save
            };
            if (!target._gsap) {
                rA.core.getCache(target);
            }
            if (e && target.style && target.nodeType) {
                e.split(",").forEach((t)=>r.save(t));
            }
            return r;
        };
        var r9 = (t, e)=>{
            const r = rC.createElementNS ? rC.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rC.createElement(t);
            if (r && r.style) {
                return r;
            }
            return rC.createElement(t);
        };
        var r7 = function t(e, r, i) {
            const n = getComputedStyle(e);
            return n[r] || n.getPropertyValue(r.replace(rY, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, ie(r) || r, 1) || "";
        };
        var it = "O,Moz,ms,Ms,Webkit".split(",");
        var ie = (t, e, r)=>{
            const style = (e || rP).style;
            let n = 5;
            if (t in style && !r) {
                return t;
            }
            for(t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(it[n] + t in style););
            if (n < 0) {
                return null;
            }
            return (n === 3 ? "ms" : n >= 0 ? it[n] : "") + t;
        };
        var register = ()=>{
            if (typeof window !== "undefined" && window.document) {
                rD = (rC = window.document).documentElement;
                rP = r9("div") || {
                    style: {}
                };
                r9("div");
                r5 = (r2 = ie(r2)) + "Origin";
                rP.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                rE = !!ie("perspective");
                rz = rA.core.reverting;
                rR = 1;
            }
        };
        var ii = (t)=>{
            let e;
            const t_ownerSVGElement = t.ownerSVGElement;
            const i = r9("svg", t_ownerSVGElement && t_ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
            const n = t.cloneNode(true);
            n.style.display = "block";
            i.appendChild(n);
            rD.appendChild(i);
            try {
                e = n.getBBox();
            } catch (t) {}
            i.removeChild(n);
            rD.removeChild(i);
            return e;
        };
        var is = (t, e)=>{
            for(let r = e.length; r--;){
                if (t.hasAttribute(e[r])) {
                    return t.getAttribute(e[r]);
                }
            }
        };
        var ia = (t)=>{
            let e;
            let r;
            try {
                e = t.getBBox();
            } catch (i) {
                e = ii(t);
                r = 1;
            }
            if (!(e && (e.width || e.height) || r)) {
                e = ii(t);
            }
            if (!e || e.width || e.x || e.y) {
                return e;
            }
            return {
                x: +is(t, [
                    "x",
                    "cx",
                    "x1"
                ]) || 0,
                y: +is(t, [
                    "y",
                    "cy",
                    "y1"
                ]) || 0,
                width: 0,
                height: 0
            };
        };
        var io = (t)=>!!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ia(t));
        var _removeProperty = (t, e)=>{
            if (e) {
                let r;
                const i = t.style;
                if (e in rF && e !== r5) {
                    e = r2;
                }
                if (i.removeProperty) {
                    if ((r = e.substr(0, 2)) === "ms" || e.substr(0, 6) === "webkit") {
                        e = "-" + e;
                    }
                    i.removeProperty(r === "--" ? e : e.replace(rY, "-$1").toLowerCase());
                } else {
                    i.removeAttribute(e);
                }
            }
        };
        var ih = (t, e, r, i, n, s)=>{
            const a = new rp(t._pt, e, r, 0, 1, s ? rH : rQ);
            t._pt = a;
            a.b = i;
            a.e = n;
            t._props.push(r);
            return a;
        };
        var il = {
            deg: 1,
            rad: 1,
            turn: 1
        };
        var ic = {
            grid: 1,
            flex: 1
        };
        var ip = function t(e, r, i, n) {
            let s;
            let a;
            let o;
            let u;
            let h = parseFloat(i) || 0;
            const l = (i + "").trim().substr((h + "").length) || "px";
            const rP_style = rP.style;
            const c = rU.test(r);
            const p = e.tagName.toLowerCase() === "svg";
            const _ = (p ? "client" : "offset") + (c ? "Width" : "Height");
            const d = n === "px";
            const m = n === "%";
            if (n === l || !h || il[n] || il[l]) {
                return h;
            }
            if (!(l === "px" || d)) {
                h = t(e, r, i, "px");
            }
            u = e.getCTM && io(e);
            if ((m || l === "%") && (rF[r] || ~r.indexOf("adius"))) {
                s = u ? e.getBBox()[c ? "width" : "height"] : e[_];
                return tk(m ? h / s * 100 : h / 100 * s);
            }
            rP_style[c ? "width" : "height"] = 100 + (d ? l : n);
            a = n !== "rem" && ~r.indexOf("adius") || n === "em" && e.appendChild && !p ? e : e.parentNode;
            if (u) {
                a = (e.ownerSVGElement || {}).parentNode;
            }
            if (!(a && a !== rC && a.appendChild)) {
                a = rC.body;
            }
            if ((o = a._gsap) && m && o.width && c && o.time === ticker.time && !o.uncache) {
                return tk(h / o.width * 100);
            }
            if (m && (r === "height" || r === "width")) {
                const g = e.style[r];
                e.style[r] = 100 + n;
                s = e[_];
                if (g) {
                    e.style[r] = g;
                } else {
                    _removeProperty(e, r);
                }
            } else {
                if ((m || l === "%") && !ic[r7(a, "display")]) {
                    rP_style.position = r7(e, "position");
                }
                if (a === e) {
                    rP_style.position = "static";
                }
                a.appendChild(rP);
                s = rP[_];
                a.removeChild(rP);
                rP_style.position = "absolute";
            }
            if (c && m) {
                o = getCache(a);
                o.time = ticker.time;
                o.width = a[_];
            }
            return tk(d ? s * h / 100 : s && h ? 100 / s * h : 0);
        };
        var get = (t, e, r, i)=>{
            let n;
            if (!rR) {
                register();
            }
            if (e in aliases && e !== "transform" && ~(e = aliases[e]).indexOf(",")) {
                e = e.split(",")[0];
            }
            if (rF[e] && e !== "transform") {
                n = ik(t, i);
                n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : iA(r7(t, r5)) + " " + n.zOrigin + "px";
            } else if (!(n = t.style[e]) || n === "auto" || i || ~(n + "").indexOf("calc(")) {
                n = iy[e] && iy[e](t, e, r) || r7(t, e) || tO(t, e) || +(e === "opacity");
            }
            if (r && !~(n + "").trim().indexOf(" ")) {
                return ip(t, e, n, r) + r;
            }
            return n;
        };
        var id = function(t, e, r, i) {
            if (!r || r === "none") {
                const n = ie(e, t, 1);
                const s = n && r7(t, n, 1);
                if (s && s !== r) {
                    e = n;
                    r = s;
                } else if (e === "borderColor") {
                    r = r7(t, "borderTopColor");
                }
            }
            let a;
            let o;
            let u;
            let h;
            let l;
            let f;
            let c;
            let p;
            let _;
            let d;
            let m;
            const g = new rp(this._pt, t.style, e, 0, 1, ro);
            let v = 0;
            let y = 0;
            g.b = r;
            g.e = i;
            r += "";
            if ((i += "").substring(0, 6) === "var(--") {
                i = r7(t, i.substring(4, i.indexOf(")")));
            }
            if (i === "auto") {
                f = t.style[e];
                t.style[e] = i;
                i = r7(t, e) || i;
                if (f) {
                    t.style[e] = f;
                } else {
                    _removeProperty(t, e);
                }
            }
            eC(a = [
                r,
                i
            ]);
            r = a[0];
            i = a[1];
            u = r.match(J) || [];
            if ((i.match(J) || []).length) {
                while(o = J.exec(i)){
                    c = o[0];
                    _ = i.substring(v, o.index);
                    if (l) {
                        l = (l + 1) % 5;
                    } else if (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") {
                        l = 1;
                    }
                    if (c !== (f = u[y++] || "")) {
                        h = parseFloat(f) || 0;
                        m = f.substr((h + "").length);
                        if (c.charAt(1) === "=") {
                            c = tC(h, c) + m;
                        }
                        p = parseFloat(c);
                        d = c.substr((p + "").length);
                        v = J.lastIndex - d.length;
                        if (!d) {
                            d = d || P.units[e] || m;
                            if (v === i.length) {
                                i += d;
                                g.e += d;
                            }
                        }
                        if (m !== d) {
                            h = ip(t, e, f, d) || 0;
                        }
                        g._pt = {
                            _next: g._pt,
                            p: _ || y === 1 ? _ : ",",
                            s: h,
                            c: p - h,
                            m: l && l < 4 || e === "zIndex" ? Math.round : 0
                        };
                    }
                }
                g.c = v < i.length ? i.substring(v, i.length) : "";
            } else {
                g.r = e === "display" && i === "none" ? rH : rQ;
            }
            if (te.test(i)) {
                g.e = 0;
            }
            this._pt = g;
            return g;
        };
        var im = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        };
        var ig = (t)=>{
            const e = t.split(" ");
            let r = e[0];
            let i = e[1] || "50%";
            if (r === "top" || r === "bottom" || i === "left" || i === "right") {
                t = r;
                r = i;
                i = t;
            }
            e[0] = im[r] || r;
            e[1] = im[i] || i;
            return e.join(" ");
        };
        var iv = (t, e)=>{
            if (e.tween && e.tween._time === e.tween._dur) {
                let r;
                let i;
                let n;
                const s = e.t;
                const a = s.style;
                let o = e.u;
                const u = s._gsap;
                if (o === "all" || o === true) {
                    a.cssText = "";
                    i = 1;
                } else {
                    for(n = (o = o.split(",")).length; --n > -1;){
                        if (rF[r = o[n]]) {
                            i = 1;
                            r = r === "transformOrigin" ? r5 : r2;
                        }
                        _removeProperty(s, r);
                    }
                }
                if (i) {
                    _removeProperty(s, r2);
                    if (u) {
                        if (u.svg) {
                            s.removeAttribute("transform");
                        }
                        a.scale = a.rotate = a.translate = "none";
                        ik(s, 1);
                        u.uncache = 1;
                        r3(a);
                    }
                }
            }
        };
        var iy = {
            clearProps (t, e, r, i, n) {
                if (n.data !== "isFromStart") {
                    const s = t._pt = new rp(t._pt, e, r, 0, 0, iv);
                    s.u = i;
                    s.pr = -10;
                    s.tween = n;
                    t._props.push(r);
                    return 1;
                }
            }
        };
        var iT = [
            1,
            0,
            0,
            1,
            0,
            0
        ];
        var ix = {};
        var ib = (t)=>t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
        var iw = (t)=>{
            const e = r7(t, r2);
            if (ib(e)) {
                return iT;
            }
            return e.substr(7).match(K).map(tk);
        };
        var _getMatrix = (t, e)=>{
            let r;
            let i;
            let n;
            let s;
            const a = t._gsap || getCache(t);
            const t_style = t.style;
            let u = iw(t);
            if (a.svg && t.getAttribute("transform")) {
                if ((u = [
                    (n = t.transform.baseVal.consolidate().matrix).a,
                    n.b,
                    n.c,
                    n.d,
                    n.e,
                    n.f
                ]).join(",") === "1,0,0,1,0,0") {
                    return iT;
                }
                return u;
            }
            if (!(u !== iT || t.offsetParent || t === rD || a.svg)) {
                n = t_style.display;
                t_style.display = "block";
                if (!((r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width))) {
                    s = 1;
                    i = t.nextElementSibling;
                    rD.appendChild(t);
                }
                u = iw(t);
                if (n) {
                    t_style.display = n;
                } else {
                    _removeProperty(t, "display");
                }
                s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : rD.removeChild(t));
            }
            if (e && u.length > 6) {
                return [
                    u[0],
                    u[1],
                    u[4],
                    u[5],
                    u[12],
                    u[13]
                ];
            }
            return u;
        };
        var iM = (t, e, r, i, n, s)=>{
            let a;
            let o;
            let u;
            let h;
            const t__gsap = t._gsap;
            const f = n || _getMatrix(t, true);
            const c = t__gsap.xOrigin || 0;
            const p = t__gsap.yOrigin || 0;
            const _ = t__gsap.xOffset || 0;
            const d = t__gsap.yOffset || 0;
            const m = f[0];
            const g = f[1];
            const v = f[2];
            const y = f[3];
            let T = f[4];
            let x = f[5];
            const b = e.split(" ");
            let w = parseFloat(b[0]) || 0;
            let O = parseFloat(b[1]) || 0;
            if (r) {
                if (f !== iT && (o = m * y - g * v)) {
                    u = y / o * w + -v / o * O + (v * x - y * T) / o;
                    h = -g / o * w + m / o * O - (m * x - g * T) / o;
                    w = u;
                    O = h;
                }
            } else {
                w = (a = ia(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w);
                O = a.y + (~(b[1] || b[0]).indexOf("%") ? O / 100 * a.height : O);
            }
            if (i || i !== false && t__gsap.smooth) {
                t__gsap.xOffset = _ + ((T = w - c) * m + (x = O - p) * v) - T;
                t__gsap.yOffset = d + (T * g + x * y) - x;
            } else {
                t__gsap.xOffset = t__gsap.yOffset = 0;
            }
            t__gsap.xOrigin = w;
            t__gsap.yOrigin = O;
            t__gsap.smooth = !!i;
            t__gsap.origin = e;
            t__gsap.originIsAbsolute = !!r;
            t.style[r5] = "0px 0px";
            if (s) {
                ih(s, t__gsap, "xOrigin", c, w);
                ih(s, t__gsap, "yOrigin", p, O);
                ih(s, t__gsap, "xOffset", _, t__gsap.xOffset);
                ih(s, t__gsap, "yOffset", d, t__gsap.yOffset);
            }
            t.setAttribute("data-svg-origin", w + " " + O);
        };
        var ik = (t, e)=>{
            const r = t._gsap || new eq(t);
            if ("x" in r && !e && !r.uncache) {
                return r;
            }
            let i;
            let n;
            let s;
            let a;
            let o;
            let u;
            let h;
            let l;
            let f;
            let c;
            let p;
            let _;
            let d;
            let m;
            let g;
            let v;
            let y;
            let T;
            let x;
            let b;
            let w;
            let O;
            let M;
            let k;
            let A;
            let C;
            let D;
            let R;
            let S;
            let z;
            let E;
            let F;
            const t_style = t.style;
            const I = r.scaleX < 0;
            const B = getComputedStyle(t);
            let Y = r7(t, r5) || "0";
            p = 0;
            c = 0;
            f = 0;
            l = 0;
            h = 0;
            u = 0;
            s = 0;
            n = 0;
            i = 0;
            o = 1;
            a = 1;
            r.svg = !!(t.getCTM && io(t));
            if (B.translate) {
                if (B.translate !== "none" || B.scale !== "none" || B.rotate !== "none") {
                    t_style[r2] = (B.translate !== "none" ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (B.rotate !== "none" ? "rotate(" + B.rotate + ") " : "") + (B.scale !== "none" ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + (B[r2] !== "none" ? B[r2] : "");
                }
                t_style.scale = t_style.rotate = t_style.translate = "none";
            }
            m = _getMatrix(t, r.svg);
            if (r.svg) {
                if (r.uncache) {
                    A = t.getBBox();
                    Y = `${r.xOrigin - A.x}px ${r.yOrigin - A.y}px`;
                    k = "";
                } else {
                    k = !e && t.getAttribute("data-svg-origin");
                }
                iM(t, k || Y, !!k || r.originIsAbsolute, r.smooth !== false, m);
            }
            _ = r.xOrigin || 0;
            d = r.yOrigin || 0;
            if (m !== iT) {
                T = m[0];
                x = m[1];
                b = m[2];
                w = m[3];
                i = O = m[4];
                n = M = m[5];
                if (m.length === 6) {
                    a = Math.sqrt(T * T + x * x);
                    o = Math.sqrt(w * w + b * b);
                    u = T || x ? Math_atan2(x, T) * rL : 0;
                    if (f = b || w ? Math_atan2(b, w) * rL + u : 0) {
                        o *= Math.abs(Math.cos(f * rI));
                    }
                    if (r.svg) {
                        i -= _ - (_ * T + d * b);
                        n -= d - (_ * x + d * w);
                    }
                } else {
                    F = m[6];
                    z = m[7];
                    D = m[8];
                    R = m[9];
                    S = m[10];
                    E = m[11];
                    i = m[12];
                    n = m[13];
                    s = m[14];
                    h = (g = Math_atan2(F, S)) * rL;
                    if (g) {
                        k = O * (v = Math.cos(-g)) + D * (y = Math.sin(-g));
                        A = M * v + R * y;
                        C = F * v + S * y;
                        D = -(O * y) + D * v;
                        R = -(M * y) + R * v;
                        S = -(F * y) + S * v;
                        E = -(z * y) + E * v;
                        O = k;
                        M = A;
                        F = C;
                    }
                    l = (g = Math_atan2(-b, S)) * rL;
                    if (g) {
                        k = T * (v = Math.cos(-g)) - D * (y = Math.sin(-g));
                        A = x * v - R * y;
                        C = b * v - S * y;
                        E = w * y + E * v;
                        T = k;
                        x = A;
                        b = C;
                    }
                    u = (g = Math_atan2(x, T)) * rL;
                    if (g) {
                        k = T * (v = Math.cos(g)) + x * (y = Math.sin(g));
                        A = O * v + M * y;
                        x = x * v - T * y;
                        M = M * v - O * y;
                        T = k;
                        O = A;
                    }
                    if (h && Math.abs(h) + Math.abs(u) > 359.9) {
                        u = 0;
                        h = 0;
                        l = 180 - l;
                    }
                    a = tk(Math.sqrt(T * T + x * x + b * b));
                    o = tk(Math.sqrt(M * M + F * F));
                    f = Math.abs(g = Math_atan2(O, M)) > 0.0002 ? g * rL : 0;
                    p = E ? 1 / (E < 0 ? -E : E) : 0;
                }
                if (r.svg) {
                    k = t.getAttribute("transform");
                    r.forceCSS = t.setAttribute("transform", "") || !ib(r7(t, r2));
                    if (k) {
                        t.setAttribute("transform", k);
                    }
                }
            }
            Math.abs(f) > 90 && Math.abs(f) < 270 && (I ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180));
            e = e || r.uncache;
            r.x = `${i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0)}px`;
            r.y = `${n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0)}px`;
            r.z = s + "px";
            r.scaleX = tk(a);
            r.scaleY = tk(o);
            r.rotation = tk(u) + "deg";
            r.rotationX = tk(h) + "deg";
            r.rotationY = tk(l) + "deg";
            r.skewX = f + "deg";
            r.skewY = c + "deg";
            r.transformPerspective = p + "px";
            if (r.zOrigin = parseFloat(Y.split(" ")[2]) || !e && r.zOrigin || 0) {
                t_style[r5] = iA(Y);
            }
            r.xOffset = r.yOffset = 0;
            r.force3D = P.force3D;
            r.renderTransform = r.svg ? iS : rE ? iP : iD;
            r.uncache = 0;
            return r;
        };
        var iA = (t)=>(t = t.split(" "))[0] + " " + t[1];
        var iC = (t, e, r)=>{
            const i = getUnit(e);
            return tk(parseFloat(e) + parseFloat(ip(t, "x", r + "px", i))) + i;
        };
        var iD = (t, e)=>{
            e.z = "0px";
            e.rotationY = e.rotationX = "0deg";
            e.force3D = 0;
            iP(t, e);
        };
        var iR = "0deg";
        var iP = function(t, e) {
            const r = e || this;
            const r_xPercent = r.xPercent;
            const r_yPercent = r.yPercent;
            let s = r.x;
            let a = r.y;
            let o = r.z;
            const r_rotation = r.rotation;
            const r_rotationY = r.rotationY;
            const r_rotationX = r.rotationX;
            const r_skewX = r.skewX;
            const r_skewY = r.skewY;
            const r_scaleX = r.scaleX;
            const r_scaleY = r.scaleY;
            const r_transformPerspective = r.transformPerspective;
            const r_force3D = r.force3D;
            const r_target = r.target;
            const r_zOrigin = r.zOrigin;
            let y = "";
            const T = r_force3D === "auto" && t && t !== 1 || r_force3D === true;
            if (r_zOrigin && (r_rotationX !== iR || r_rotationY !== iR)) {
                let x;
                let b = parseFloat(r_rotationY) * rI;
                const w = Math.sin(b);
                const O = Math.cos(b);
                s = iC(r_target, s, -(w * (x = Math.cos(b = parseFloat(r_rotationX) * rI)) * r_zOrigin));
                a = iC(r_target, a, -(-Math.sin(b) * r_zOrigin));
                o = iC(r_target, o, -(O * x * r_zOrigin) + r_zOrigin);
            }
            if (r_transformPerspective !== "0px") {
                y += "perspective(" + r_transformPerspective + ") ";
            }
            if (r_xPercent || r_yPercent) {
                y += "translate(" + r_xPercent + "%, " + r_yPercent + "%) ";
            }
            if (T || s !== "0px" || a !== "0px" || o !== "0px") {
                y += o !== "0px" || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") ";
            }
            if (r_rotation !== iR) {
                y += "rotate(" + r_rotation + ") ";
            }
            if (r_rotationY !== iR) {
                y += "rotateY(" + r_rotationY + ") ";
            }
            if (r_rotationX !== iR) {
                y += "rotateX(" + r_rotationX + ") ";
            }
            if (r_skewX !== iR || r_skewY !== iR) {
                y += "skew(" + r_skewX + ", " + r_skewY + ") ";
            }
            if (r_scaleX !== 1 || r_scaleY !== 1) {
                y += "scale(" + r_scaleX + ", " + r_scaleY + ") ";
            }
            r_target.style[r2] = y || "translate(0, 0)";
        };
        var iS = function(t, e) {
            let r;
            let i;
            let n;
            let s;
            let a;
            const o = e || this;
            const o_xPercent = o.xPercent;
            const o_yPercent = o.yPercent;
            const l = o.x;
            const f = o.y;
            let o_rotation = o.rotation;
            let o_skewX = o.skewX;
            let o_skewY = o.skewY;
            const o_scaleX = o.scaleX;
            const o_scaleY = o.scaleY;
            const o_target = o.target;
            const o_xOrigin = o.xOrigin;
            const o_yOrigin = o.yOrigin;
            const o_xOffset = o.xOffset;
            const o_yOffset = o.yOffset;
            const o_forceCSS = o.forceCSS;
            let w = parseFloat(l);
            let O = parseFloat(f);
            o_rotation = parseFloat(o_rotation);
            o_skewX = parseFloat(o_skewX);
            if (o_skewY = parseFloat(o_skewY)) {
                o_skewX += o_skewY = parseFloat(o_skewY);
                o_rotation += o_skewY;
            }
            if (o_rotation || o_skewX) {
                o_rotation *= rI;
                o_skewX *= rI;
                r = Math.cos(o_rotation) * o_scaleX;
                i = Math.sin(o_rotation) * o_scaleX;
                n = -(Math.sin(o_rotation - o_skewX) * o_scaleY);
                s = Math.cos(o_rotation - o_skewX) * o_scaleY;
                if (o_skewX) {
                    o_skewY *= rI;
                    n *= a = Math.sqrt(1 + (a = Math.tan(o_skewX - o_skewY)) * a);
                    s *= a;
                    if (o_skewY) {
                        r *= a = Math.sqrt(1 + (a = Math.tan(o_skewY)) * a);
                        i *= a;
                    }
                }
                r = tk(r);
                i = tk(i);
                n = tk(n);
                s = tk(s);
            } else {
                r = o_scaleX;
                s = o_scaleY;
                n = 0;
                i = 0;
            }
            if (w && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) {
                w = ip(o_target, "x", l, "px");
                O = ip(o_target, "y", f, "px");
            }
            if (o_xOrigin || o_yOrigin || o_xOffset || o_yOffset) {
                w = tk(w + o_xOrigin - (o_xOrigin * r + o_yOrigin * n) + o_xOffset);
                O = tk(O + o_yOrigin - (o_xOrigin * i + o_yOrigin * s) + o_yOffset);
            }
            if (o_xPercent || o_yPercent) {
                w = tk(w + o_xPercent / 100 * (a = o_target.getBBox()).width);
                O = tk(O + o_yPercent / 100 * a.height);
            }
            a = "matrix(" + r + "," + i + "," + n + "," + s + "," + w + "," + O + ")";
            o_target.setAttribute("transform", a);
            if (o_forceCSS) {
                o_target.style[r2] = a;
            }
        };
        var iz = (t, e, r, i, n)=>{
            let s;
            let a;
            const o = Y(n);
            let u = parseFloat(n) * (o && ~n.indexOf("rad") ? rL : 1) - i;
            const h = `${i + u}deg`;
            o && ((s = n.split("_")[1]) === "short" && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360), s === "cw" && u < 0 ? u = (u + 36000000000) % 360 - 360 * ~~(u / 360) : s === "ccw" && u > 0 && (u = (u - 36000000000) % 360 - 360 * ~~(u / 360)));
            t._pt = a = new rp(t._pt, e, r, i, u, rV);
            a.e = h;
            a.u = "deg";
            t._props.push(r);
            return a;
        };
        var iE = (t, e)=>{
            for(const r in e){
                t[r] = e[r];
            }
            return t;
        };
        var iF = (t, e, r)=>{
            let i;
            let n;
            let s;
            let a;
            let o;
            let u;
            let h;
            const l = iE({}, r._gsap);
            const r_style = r.style;
            if (l.svg) {
                s = r.getAttribute("transform");
                r.setAttribute("transform", "");
                r_style[r2] = e;
                i = ik(r, 1);
                _removeProperty(r, r2);
                r.setAttribute("transform", s);
            } else {
                s = getComputedStyle(r)[r2];
                r_style[r2] = e;
                i = ik(r, 1);
                r_style[r2] = s;
            }
            for(n in rF){
                if ((s = l[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0) {
                    o = getUnit(s) !== (h = getUnit(a)) ? ip(r, n, s, h) : parseFloat(s);
                    u = parseFloat(a);
                    t._pt = new rp(t._pt, i, n, o, u - o, rq);
                    t._pt.u = h || 0;
                    t._props.push(n);
                }
            }
            iE(i, l);
        };
        tM("padding,margin,Width,Radius", (t, e)=>{
            const r = "Right";
            const i = "Bottom";
            const n = "Left";
            const s = (e < 3 ? [
                "Top",
                r,
                i,
                n
            ] : [
                "Top" + n,
                "Top" + r,
                i + r,
                i + n
            ]).map((r)=>{
                if (e < 2) {
                    return t + r;
                }
                return "border" + r + t;
            });
            iy[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
                let a;
                let o;
                if (arguments.length < 4) {
                    if ((o = (a = s.map((e)=>get(t, e, r))).join(" ")).split(a[0]).length === 5) {
                        return a[0];
                    }
                    return o;
                }
                a = (i + "").split(" ");
                o = {};
                s.forEach((t, e)=>o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]);
                t.init(e, o, n);
            };
        });
        var iL = {
            name: "css",
            register,
            targetTest (t) {
                return t.style && t.nodeType;
            },
            init (t, e, r, i, n) {
                let s;
                let a;
                let o;
                let u;
                let h;
                let l;
                let f;
                let c;
                let p;
                let _;
                let d;
                let m;
                let g;
                let v;
                let y;
                let T;
                let x;
                const _props = this._props;
                const t_style = t.style;
                const startAt = r.vars.startAt;
                if (!rR) {
                    register();
                }
                this.styles = this.styles || r4(t);
                T = this.styles.props;
                this.tween = r;
                for(f in e){
                    if (f !== "autoRound" && (a = e[f], !(plugins[f] && e1(f, e, r, i, t, n)))) {
                        h = typeof a;
                        l = iy[f];
                        if (h === "function") {
                            h = typeof (a = a.call(r, i, t, n));
                        }
                        if (h === "string" && ~a.indexOf("random(")) {
                            a = e_(a);
                        }
                        if (l) {
                            if (l(this, t, f, a, r)) {
                                y = 1;
                            }
                        } else if (f.substr(0, 2) === "--") {
                            s = (getComputedStyle(t).getPropertyValue(f) + "").trim();
                            a += "";
                            ek.lastIndex = 0;
                            if (!ek.test(s)) {
                                c = getUnit(s);
                                (p = getUnit(a)) ? c !== p && (s = ip(t, f, s, p) + p) : c && (a += c);
                            }
                            this.add(t_style, "setProperty", s, a, i, n, 0, 0, f);
                            _props.push(f);
                            T.push(f, 0, t_style[f]);
                        } else if (h !== "undefined") {
                            if (startAt && f in startAt) {
                                if (Y(s = typeof startAt[f] === "function" ? startAt[f].call(r, i, t, n) : startAt[f]) && ~s.indexOf("random(")) {
                                    s = e_(s);
                                }
                                if (!(getUnit(s + "") || s === "auto")) {
                                    s += P.units[f] || getUnit(get(t, f)) || "";
                                }
                                if ((s + "").charAt(1) === "=") {
                                    s = get(t, f);
                                }
                            } else {
                                s = get(t, f);
                            }
                            u = parseFloat(s);
                            if (_ = h === "string" && a.charAt(1) === "=" && a.substr(0, 2)) {
                                a = a.substr(2);
                            }
                            o = parseFloat(a);
                            f in aliases && (f === "autoAlpha" && (u === 1 && get(t, "visibility") === "hidden" && o && (u = 0), T.push("visibility", 0, t_style.visibility), ih(this, t_style, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), f !== "scale" && f !== "transform" && ~(f = aliases[f]).indexOf(",") && (f = f.split(",")[0]));
                            if (d = f in rF) {
                                this.styles.save(f);
                                x = a;
                                if (h === "string" && a.substring(0, 6) === "var(--") {
                                    if ((a = r7(t, a.substring(4, a.indexOf(")")))).substring(0, 5) === "calc(") {
                                        const M = t.style.perspective;
                                        t.style.perspective = a;
                                        a = r7(t, "perspective");
                                        if (M) {
                                            t.style.perspective = M;
                                        } else {
                                            _removeProperty(t, "perspective");
                                        }
                                    }
                                    o = parseFloat(a);
                                }
                                if (!m) {
                                    if (!((g = t._gsap).renderTransform && !e.parseTransform)) {
                                        ik(t, e.parseTransform);
                                    }
                                    v = e.smoothOrigin !== false && g.smooth;
                                    m = this._pt = new rp(this._pt, t_style, r2, 0, 1, g.renderTransform, g, 0, -1);
                                    m.dep = 1;
                                }
                                if (f === "scale") {
                                    this._pt = new rp(this._pt, g, "scaleY", g.scaleY, (_ ? tC(g.scaleY, _ + o) : o) - g.scaleY || 0, rq);
                                    this._pt.u = 0;
                                    _props.push("scaleY", f);
                                    f += "X";
                                } else if (f === "transformOrigin") {
                                    T.push(r5, 0, t_style[r5]);
                                    a = ig(a);
                                    if (g.svg) {
                                        iM(t, a, 0, v, 0, this);
                                    } else {
                                        if ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin) {
                                            ih(this, g, "zOrigin", g.zOrigin, p);
                                        }
                                        ih(this, t_style, f, iA(s), iA(a));
                                    }
                                    continue;
                                } else if (f === "svgOrigin") {
                                    iM(t, a, 1, v, 0, this);
                                    continue;
                                } else if (f in ix) {
                                    iz(this, g, f, u, _ ? tC(u, _ + a) : a);
                                    continue;
                                } else if (f === "smoothOrigin") {
                                    ih(this, g, "smooth", g.smooth, a);
                                    continue;
                                } else if (f === "force3D") {
                                    g[f] = a;
                                    continue;
                                } else if (f === "transform") {
                                    iF(this, a, t);
                                    continue;
                                }
                            } else {
                                if (!(f in t_style)) {
                                    f = ie(f) || f;
                                }
                            }
                            if (d || (o || o === 0) && (u || u === 0) && !rX.test(a) && f in t_style) {
                                c = (s + "").substr((u + "").length);
                                if (!o) {
                                    o = 0;
                                }
                                p = getUnit(a) || (f in P.units ? P.units[f] : c);
                                if (c !== p) {
                                    u = ip(t, f, s, p);
                                }
                                this._pt = new rp(this._pt, d ? g : t_style, f, u, (_ ? tC(u, _ + o) : o) - u, !d && (p === "px" || f === "zIndex") && e.autoRound !== false ? rG : rq);
                                this._pt.u = p || 0;
                                if (d && x !== a) {
                                    this._pt.b = s;
                                    this._pt.e = x;
                                    this._pt.r = rW;
                                } else if (c !== p && p !== "%") {
                                    this._pt.b = s;
                                    this._pt.r = rj;
                                }
                            } else if (f in t_style) {
                                id.call(this, t, f, s, _ ? _ + a : a);
                            } else if (f in t) {
                                this.add(t, f, s || t[f], _ ? _ + a : a, i, n);
                            } else if (f !== "parseTransform") {
                                to(f, a);
                                continue;
                            }
                            d || (f in t_style ? T.push(f, 0, t_style[f]) : typeof t[f] === "function" ? T.push(f, 2, t[f]()) : T.push(f, 1, s || t[f]));
                            _props.push(f);
                        }
                    }
                }
                if (y) {
                    rc(this);
                }
            },
            render (t, e) {
                if (e.tween._time || !rz()) {
                    for(let r = e._pt; r;){
                        r.r(t, r.d);
                        r = r._next;
                    }
                } else {
                    e.styles.revert();
                }
            },
            get,
            aliases,
            getSetter (t, e, r) {
                const i = aliases[e];
                if (i && i.indexOf(",") < 0) {
                    e = i;
                }
                if (e in rF && e !== r5 && (t._gsap.x || get(t, "x"))) {
                    if (r && rS === r) {
                        if (e === "scale") {
                            return rJ;
                        }
                        return rK;
                    }
                    rS = r || {};
                    if (e === "scale") {
                        return r0;
                    }
                    return r1;
                }
                if (t.style && !N(t.style[e])) {
                    return rZ;
                }
                if (~e.indexOf("-")) {
                    return r$;
                }
                return getSetter(t, e);
            },
            core: {
                _removeProperty,
                _getMatrix
            }
        };
        rA.utils.checkPrefix = ie;
        rA.core.getStyleSaver = r4;
        n = tM("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (i = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (t)=>{
            rF[t] = 1;
        });
        tM(i, (t)=>{
            P.units[t] = "deg";
            ix[t] = 1;
        });
        aliases[n[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + i;
        tM("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (t)=>{
            const e = t.split(":");
            aliases[e[1]] = n[e[0]];
        });
        tM("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (t)=>{
            P.units[t] = "px";
        });
        rA.registerPlugin(iL);
        var iI = rA.registerPlugin(iL) || rA;
        iI.core.Tween;
        t.s([
            "default",
            0,
            iI,
            "gsap",
            0,
            iI
        ], 983871);
    }
]);
