import { cb, tb, ub } from "./0c0hxoamwjsbw/chunk_tb.js";
const t = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function e(t) {
    const e = {
        exports: {}
    };
    t(e, e.exports);
    return e.exports;
}
let r;
let n;
const o = (t)=>t && t.Math === Math && t;
const i = o(typeof globalThis === "object" && globalThis) || o(typeof window === "object" && window) || o(typeof self === "object" && self) || o(typeof t === "object" && t) || o(typeof t === "object" && t) || function() {
    return this;
}() || Function("return this")();
const a = (t)=>{
    try {
        return !!t();
    } catch (t) {
        return true;
    }
};
const u = !a(()=>Object.defineProperty({}, 1, {
        get () {
            return 7;
        }
    })[1] !== 7);
const s = !a(()=>{
    const t = (()=>{}).bind();
    return typeof t !== "function" || t.hasOwnProperty("prototype");
});
const call = Function.prototype.call;
const f = s ? call.bind(call) : function() {
    return call.apply(call, arguments);
};
const propertyIsEnumerable = {}.propertyIsEnumerable;
const p = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({
    1: 2
}, 1) ? function(t) {
    const e = Object.getOwnPropertyDescriptor(this, t);
    return !!e && e.enumerable;
} : propertyIsEnumerable;
const v = {
    f: p
};
const d = (t, e)=>({
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
    });
const call_1 = Function.prototype.call;
const m = s && Function.prototype.bind.bind(call_1, call_1);
const b = s ? m : (t)=>function() {
        return call_1.apply(t, arguments);
    };
const w = b({}.toString);
const S = b("".slice);
const E = (t)=>S(w(t), 8, -1);
const x = b("".split);
const R = a(()=>!Object("z").propertyIsEnumerable(0)) ? (t)=>{
    if (E(t) === "String") {
        return x(t, "");
    }
    return Object(t);
} : Object;
const P = (t)=>t == null;
const j = (t)=>{
    if (P(t)) {
        throw new TypeError("Can't call method on " + t);
    }
    return t;
};
const k = (t)=>R(j(t));
const I = typeof document === "object" && document.all;
const T = I === undefined && I !== undefined ? (t)=>typeof t === "function" || t === I : (t)=>typeof t === "function";
const M = (t)=>{
    if (typeof t === "object") {
        return t !== null;
    }
    return T(t);
};
const L = function(t, e) {
    if (arguments.length < 2) {
        if (T(r = i[t])) {
            return r;
        }
        return undefined;
    }
    return i[t] && i[t][e];
    var r;
};
const U = b({}.isPrototypeOf);
const i_navigator = i.navigator;
const C = i_navigator && i_navigator.userAgent;
const _ = C ? String(C) : "";
const i_process = i.process;
const i_Deno = i.Deno;
const D = i_process && i_process.versions || i_Deno && i_Deno.version;
const z = D && D.v8;
if (z) {
    n = (r = z.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]);
}
if (!n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/))) {
    n = +r[1];
}
const W = n;
const i_String = i.String;
const H = !!Object.getOwnPropertySymbols && !a(()=>{
    const t = Symbol("symbol detection");
    return !i_String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && W && W < 41;
});
const $ = H && !Symbol.sham && typeof Symbol.iterator === "symbol";
const G = $ ? (t)=>typeof t === "symbol" : (t)=>{
    const e = L("Symbol");
    return T(e) && U(e.prototype, Object(t));
};
const Y = (t)=>{
    try {
        return String(t);
    } catch (t) {
        return "Object";
    }
};
const J = (t)=>{
    if (T(t)) {
        return t;
    }
    throw new TypeError(Y(t) + " is not a function");
};
const Q = (t, e)=>{
    const r = t[e];
    if (P(r)) {
        return undefined;
    }
    return J(r);
};
const et = (t, e)=>{
    try {
        Object.defineProperty(i, t, {
            value: e,
            configurable: true,
            writable: true
        });
    } catch (r) {
        i[t] = e;
    }
    return e;
};
const rt = e((t)=>{
    const e = "__core-js_shared__";
    const r = t.exports = i[e] || et(e, {});
    (r.versions || (r.versions = [])).push({
        version: "3.38.1",
        mode: "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
});
const nt = (t, e)=>rt[t] || (rt[t] = e || {});
const it = (t)=>Object(j(t));
const at = b({}.hasOwnProperty);
const hasOwn = Object.hasOwn || ((t, e)=>at(it(t), e));
let st = 0;
const ct = Math.random();
const ft = b(1..toString);
const lt = (t)=>"Symbol(" + (t === undefined ? "" : t) + ")_" + ft(++st + ct, 36);
const i_Symbol = i.Symbol;
const pt = nt("wks");
const vt = $ ? i_Symbol.for || i_Symbol : i_Symbol && i_Symbol.withoutSetter || lt;
const dt = (t)=>{
    if (!hasOwn(pt, t)) {
        pt[t] = H && hasOwn(i_Symbol, t) ? i_Symbol[t] : vt("Symbol." + t);
    }
    return pt[t];
};
const yt = dt("toPrimitive");
const mt = (t, e)=>{
    if (!M(t) || G(t)) {
        return t;
    }
    let r;
    const n = Q(t, yt);
    if (n) {
        if (e === undefined) {
            e = "default";
        }
        r = f(n, t, e);
        if (!M(r) || G(r)) {
            return r;
        }
        throw new TypeError("Can't convert object to primitive value");
    }
    if (e === undefined) {
        e = "number";
    }
    return ((t, e)=>{
        let r;
        let n;
        if (e === "string" && T(r = t.toString) && !M(n = f(r, t))) {
            return n;
        }
        if (T(r = t.valueOf) && !M(n = f(r, t))) {
            return n;
        }
        if (e !== "string" && T(r = t.toString) && !M(n = f(r, t))) {
            return n;
        }
        throw new TypeError("Can't convert object to primitive value");
    })(t, e);
};
const bt = (t)=>{
    const e = mt(t, "string");
    if (G(e)) {
        return e;
    }
    return e + "";
};
const i_document = i.document;
const St = M(i_document) && M(i_document.createElement);
const Et = (t)=>{
    if (St) {
        return i_document.createElement(t);
    }
    return {};
};
const Ot = !u && !a(()=>Object.defineProperty(Et("div"), "a", {
        get () {
            return 7;
        }
    }).a !== 7);
const Rt = {
    f: u ? Object.getOwnPropertyDescriptor : (t, e)=>{
        t = k(t);
        e = bt(e);
        if (Ot) {
            try {
                return Object.getOwnPropertyDescriptor(t, e);
            } catch (t) {}
        }
        if (hasOwn(t, e)) {
            return d(!f(v.f, t, e), t[e]);
        }
    }
};
const Pt = u && a(()=>Object.defineProperty(()=>{}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42);
const kt = (t)=>{
    if (M(t)) {
        return t;
    }
    throw new TypeError(String(t) + " is not an object");
};
const Lt = "enumerable";
const Ut = "configurable";
const Nt = "writable";
const Ct = {
    f: u ? Pt ? (t, e, r)=>{
        kt(t);
        e = bt(e);
        kt(r);
        if (typeof t === "function" && e === "prototype" && "value" in r && Nt in r && !r[Nt]) {
            const n = Object.getOwnPropertyDescriptor(t, e);
            if (n && n[Nt]) {
                t[e] = r.value;
                r = {
                    configurable: Ut in r ? r[Ut] : n[Ut],
                    enumerable: Lt in r ? r[Lt] : n[Lt],
                    writable: false
                };
            }
        }
        return Object.defineProperty(t, e, r);
    } : Object.defineProperty : (t, e, r)=>{
        kt(t);
        e = bt(e);
        kt(r);
        if (Ot) {
            try {
                return Object.defineProperty(t, e, r);
            } catch (t) {}
        }
        if ("get" in r || "set" in r) {
            throw new TypeError("Accessors not supported");
        }
        if ("value" in r) {
            t[e] = r.value;
        }
        return t;
    }
};
const _t = u ? (t, e, r)=>Ct.f(t, e, d(1, r)) : (t, e, r)=>{
    t[e] = r;
    return t;
};
const Bt = u && Object.getOwnPropertyDescriptor;
const EXISTS = hasOwn(Function.prototype, "name");
const zt = {
    EXISTS,
    PROPER: EXISTS && (()=>{}).name === "something",
    CONFIGURABLE: EXISTS && (!u || u && Bt(Function.prototype, "name").configurable)
};
const Wt = b(Function.toString);
if (!T(rt.inspectSource)) {
    rt.inspectSource = (t)=>Wt(t);
}
let qt;
let Ht;
let has;
const rt_inspectSource = rt.inspectSource;
const i_WeakMap = i.WeakMap;
const Vt = T(i_WeakMap) && /native code/.test(String(i_WeakMap));
const Yt = nt("keys");
const Xt = (t)=>Yt[t] || (Yt[t] = lt(t));
const Jt = {};
const Qt = "Object already initialized";
const i_TypeError = i.TypeError;
if (Vt || rt.state) {
    const te = rt.state || (rt.state = new (0, i.WeakMap));
    te.get = te.get;
    te.has = te.has;
    te.set = te.set;
    qt = (t, e)=>{
        if (te.has(t)) {
            throw new i_TypeError(Qt);
        }
        e.facade = t;
        te.set(t, e);
        return e;
    };
    Ht = (t)=>te.get(t) || {};
    has = (t)=>te.has(t);
} else {
    const ee = Xt("state");
    Jt[ee] = true;
    qt = (t, e)=>{
        if (hasOwn(t, ee)) {
            throw new i_TypeError(Qt);
        }
        e.facade = t;
        _t(t, ee, e);
        return e;
    };
    Ht = (t)=>{
        if (hasOwn(t, ee)) {
            return t[ee];
        }
        return {};
    };
    has = (t)=>hasOwn(t, ee);
}
let re;
const ne = {
    set: qt,
    get: Ht,
    has,
    enforce (t) {
        if (has(t)) {
            return Ht(t);
        }
        return qt(t, {});
    },
    getterFor (t) {
        return (e)=>{
            let r;
            if (!M(e) || (r = Ht(e)).type !== t) {
                throw new i_TypeError("Incompatible receiver, " + t + " required");
            }
            return r;
        };
    }
};
const oe = e((t)=>{
    const zt_CONFIGURABLE = zt.CONFIGURABLE;
    const ne_enforce = ne.enforce;
    const ne_get = ne.get;
    const o = String;
    const Object_defineProperty = Object.defineProperty;
    const s = b("".slice);
    const c = b("".replace);
    const f = b([].join);
    const l = u && !a(()=>Object_defineProperty(()=>{}, "length", {
            value: 8
        }).length !== 8);
    const h = String(String).split("String");
    const p = t.exports = (t, n, a)=>{
        if (s(o(n), 0, 7) === "Symbol(") {
            n = "[" + c(o(n), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
        }
        if (a && a.getter) {
            n = "get " + n;
        }
        if (a && a.setter) {
            n = "set " + n;
        }
        (!hasOwn(t, "name") || zt_CONFIGURABLE && t.name !== n) && (u ? Object_defineProperty(t, "name", {
            value: n,
            configurable: true
        }) : t.name = n);
        if (l && a && hasOwn(a, "arity") && t.length !== a.arity) {
            Object_defineProperty(t, "length", {
                value: a.arity
            });
        }
        try {
            a && hasOwn(a, "constructor") && a.constructor ? u && Object_defineProperty(t, "prototype", {
                writable: false
            }) : t.prototype && (t.prototype = undefined);
        } catch (t) {}
        const p = ne_enforce(t);
        if (!hasOwn(p, "source")) {
            p.source = f(h, typeof n === "string" ? n : "");
        }
        return t;
    };
    Function.prototype.toString = p(function() {
        return T(this) && ne_get(this).source || rt_inspectSource(this);
    }, "toString");
});
const ie = (t, e, r, n)=>{
    if (!n) {
        n = {};
    }
    let n_enumerable = n.enumerable;
    const i = n.name !== undefined ? n.name : e;
    if (T(r)) {
        oe(r, i, n);
    }
    if (n.global) {
        if (n_enumerable) {
            t[e] = r;
        } else {
            et(e, r);
        }
    } else {
        try {
            n.unsafe ? t[e] && (n_enumerable = true) : delete t[e];
        } catch (t) {}
        if (n_enumerable) {
            t[e] = r;
        } else {
            Ct.f(t, e, {
                value: r,
                enumerable: false,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            });
        }
    }
    return t;
};
const se = Math.trunc || ((t)=>{
    const e = +t;
    return (e > 0 ? Math.floor : Math.ceil)(e);
});
const ce = (t)=>{
    const e = +t;
    if (e != e || e === 0) {
        return 0;
    }
    return se(e);
};
const he = (t, e)=>{
    const r = ce(t);
    if (r < 0) {
        return Math.max(r + e, 0);
    }
    return Math.min(r, e);
};
const ve = (t)=>{
    const e = ce(t);
    if (e > 0) {
        return Math.min(e, 9007199254740991);
    }
    return 0;
};
const de = (t)=>ve(t.length);
const ge = (t)=>(e, r, n)=>{
        const o = k(e);
        const i = de(o);
        if (i === 0) {
            return !t && -1;
        }
        let a;
        let u = he(n, i);
        if (t && r != r) {
            while(i > u){
                if ((a = o[u++]) != a) {
                    return true;
                }
            }
        } else {
            for(; i > u; u++){
                if ((t || u in o) && o[u] === r) {
                    return t || u || 0;
                }
            }
        }
        return !t && -1;
    };
const ye = {
    includes: ge(true),
    indexOf: ge(false)
};
const ye_indexOf = ye.indexOf;
const be = b([].push);
const we = (t, e)=>{
    let r;
    const n = k(t);
    let o = 0;
    const i = [];
    for(r in n){
        if (!hasOwn(Jt, r) && hasOwn(n, r)) {
            be(i, r);
        }
    }
    while(e.length > o){
        hasOwn(n, r = e[o++]) && (~ye_indexOf(i, r) || be(i, r));
    }
    return i;
};
const Se = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];
const Ee = Se.concat("length", "prototype");
const Oe = {
    f: Object.getOwnPropertyNames || ((t)=>we(t, Ee))
};
const xe = {
    f: Object.getOwnPropertySymbols
};
const Re = b([].concat);
const ownKeys = L("Reflect", "ownKeys") || ((t)=>{
    const e = Oe.f(kt(t));
    const r = xe.f;
    if (r) {
        return Re(e, r(t));
    }
    return e;
});
const Ae = (t, e, r)=>{
    for(let n = ownKeys(e), o = Ct.f, i = Rt.f, a = 0; a < n.length; a++){
        const u = n[a];
        if (!(hasOwn(t, u) || r && hasOwn(r, u))) {
            o(t, u, i(e, u));
        }
    }
};
const je = /#|\.prototype\./;
const ke = (t, e)=>{
    const r = Te[Ie(t)];
    return r === Le || r !== Me && (T(e) ? a(e) : !!e);
};
var Ie = ke.normalize = (t)=>String(t).replace(je, ".").toLowerCase();
var Te = ke.data = {};
var Me = ke.NATIVE = "N";
var Le = ke.POLYFILL = "P";
const Ue = ke;
const Ne = Rt.f;
const Ce = (t, e)=>{
    let r;
    let n;
    let o;
    let a;
    let u;
    const t_target = t.target;
    const t_global = t.global;
    const t_stat = t.stat;
    if (r = t_global ? i : t_stat ? i[t_target] || et(t_target, {}) : i[t_target] && i[t_target].prototype) {
        for(n in e){
            a = e[n];
            o = t.dontCallGetSet ? (u = Ne(r, n)) && u.value : r[n];
            if (!Ue(t_global ? n : t_target + (t_stat ? "." : "#") + n, t.forced) && o !== undefined) {
                if (typeof a == typeof o) {
                    continue;
                }
                Ae(a, o);
            }
            if (t.sham || o && o.sham) {
                _t(a, "sham", true);
            }
            ie(r, n, a, t);
        }
    }
};
const _e = Object.keys || ((t)=>we(t, Se));
const Fe = u && !Pt ? Object.defineProperties : (t, e)=>{
    kt(t);
    let r;
    const n = k(e);
    const o = _e(e);
    for(let i = o.length, a = 0; i > a;){
        Ct.f(t, r = o[a++], n[r]);
    }
    return t;
};
const Be = {
    f: Fe
};
const De = L("document", "documentElement");
const ze = "prototype";
const We = "script";
const qe = Xt("IE_PROTO");
const He = function() {};
const $e = (t)=>"<" + We + ">" + t + "</" + We + ">";
const Ke = (t)=>{
    t.write($e(""));
    t.close();
    const Object = t.parentWindow.Object;
    t = null;
    return Object;
};
let Ge = ()=>{
    try {
        re = new ActiveXObject("htmlfile");
    } catch (t) {}
    let t;
    let e;
    let r;
    Ge = typeof document !== "undefined" ? document.domain && re ? Ke(re) : (e = Et("iframe"), r = "java" + We + ":", e.style.display = "none", De.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write($e("document.F=Object")), t.close(), t.F) : Ke(re);
    for(let n = Se.length; n--;){
        delete Ge[ze][Se[n]];
    }
    return Ge();
};
Jt[qe] = true;
const Ve = Object.create || ((t, e)=>{
    let r;
    if (t !== null) {
        He[ze] = kt(t);
        r = new He;
        He[ze] = null;
        r[qe] = t;
    } else {
        r = Ge();
    }
    if (e === undefined) {
        return r;
    }
    return Be.f(r, e);
});
const Ye = Ct.f;
const Xe = dt("unscopables");
if (Array.prototype[Xe] === undefined) {
    Ye(Array.prototype, Xe, {
        configurable: true,
        value: Ve(null)
    });
}
const Qe = (t)=>{
    Array.prototype[Xe][t] = true;
};
Ce({
    target: "Array",
    proto: true
}, {
    at (t) {
        const e = it(this);
        const r = de(e);
        const n = ce(t);
        const o = n >= 0 ? n : r + n;
        if (o < 0 || o >= r) {
            return undefined;
        }
        return e[o];
    }
});
Qe("at");
const Ze = (t, e)=>b(i[t].prototype[e]);
Ze("Array", "at");
const er = (t, e)=>{
    if (!delete t[e]) {
        throw new TypeError("Cannot delete property " + Y(e) + " of " + Y(t));
    }
};
const copyWithin = [].copyWithin || function(t, e) {
    const r = it(this);
    const n = de(r);
    let o = he(t, n);
    let i = he(e, n);
    const a = arguments.length > 2 ? arguments[2] : undefined;
    let u = Math.min((a === undefined ? n : he(a, n)) - i, n - o);
    let s = 1;
    for(i < o && o < i + u && (s = -1, i += u - 1, o += u - 1); u-- > 0;){
        if (i in r) {
            r[o] = r[i];
        } else {
            er(r, o);
        }
        o += s;
        i += s;
    }
    return r;
};
Ce({
    target: "Array",
    proto: true
}, {
    copyWithin
});
Qe("copyWithin");
Ze("Array", "copyWithin");
Ce({
    target: "Array",
    proto: true
}, {
    fill (t) {
        const e = it(this);
        const r = de(e);
        const arguments_length = arguments.length;
        for(let o = he(arguments_length > 1 ? arguments[1] : undefined, r), i = arguments_length > 2 ? arguments[2] : undefined, a = i === undefined ? r : he(i, r); a > o;){
            e[o++] = t;
        }
        return e;
    }
});
Qe("fill");
Ze("Array", "fill");
const or = (t)=>{
    if (E(t) === "Function") {
        return b(t);
    }
};
const ir = or(or.bind);
const ar = (t, e)=>{
    J(t);
    if (e === undefined) {
        return t;
    }
    if (s) {
        return ir(t, e);
    }
    return function() {
        return t.apply(e, arguments);
    };
};
const ur = Array.isArray || ((t)=>E(t) === "Array");
const sr = {};
sr[dt("toStringTag")] = "z";
const cr = String(sr) === "[object z]";
const fr = dt("toStringTag");
const hr = E(function() {
    return arguments;
}()) === "Arguments";
const pr = cr ? E : (t)=>{
    let e;
    let r;
    let n;
    if (t === undefined) {
        return "Undefined";
    }
    if (t === null) {
        return "Null";
    }
    if (typeof (r = ((t, e)=>{
        try {
            return t[e];
        } catch (t) {}
    })(e = Object(t), fr)) === "string") {
        return r;
    }
    if (hr) {
        return E(e);
    }
    if ((n = E(e)) === "Object" && T(e.callee)) {
        return "Arguments";
    }
    return n;
};
const vr = ()=>{};
const dr = L("Reflect", "construct");
const gr = /^\s*(?:class|function)\b/;
const yr = b(gr.exec);
const mr = !gr.test(vr);
const br = (t)=>{
    if (!T(t)) {
        return false;
    }
    try {
        dr(vr, [], t);
        return true;
    } catch (t) {
        return false;
    }
};
const wr = (t)=>{
    if (!T(t)) {
        return false;
    }
    switch(pr(t)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        return mr || !!yr(gr, rt_inspectSource(t));
    } catch (t) {
        return true;
    }
};
wr.sham = true;
const Sr = !dr || a(()=>{
    let t;
    return br(br.call) || !br(Object) || !br(()=>{
        t = true;
    }) || t;
}) ? wr : br;
const Er = dt("species");
const xr = (t, e)=>new (((t)=>{
        let e;
        if (ur(t) && (Sr(e = t.constructor) && (e === Array || ur(e.prototype)) || M(e) && (e = e[Er]) === null)) {
            e = undefined;
        }
        if (e === undefined) {
            return Array;
        }
        return e;
    })(t))(e === 0 ? 0 : e);
const Rr = b([].push);
const Pr = (t)=>{
    const e = t === 1;
    const r = t === 2;
    const n = t === 3;
    const o = t === 4;
    const i = t === 6;
    const a = t === 7;
    const u = t === 5 || i;
    return (s, c, f, l)=>{
        let h;
        let p;
        const v = it(s);
        const d = R(v);
        for(var g = de(d), y = ar(c, f), m = 0, b = l || xr, w = e ? b(s, g) : r || a ? b(s, 0) : undefined; g > m; m++){
            if ((u || m in d) && (p = y(h = d[m], m, v), t)) {
                if (e) {
                    w[m] = p;
                } else if (p) {
                    switch(t){
                        case 3:
                            return true;
                        case 5:
                            return h;
                        case 6:
                            return m;
                        case 2:
                            Rr(w, h);
                    }
                } else {
                    switch(t){
                        case 4:
                            return false;
                        case 7:
                            Rr(w, h);
                    }
                }
            }
        }
        if (i) {
            return -1;
        }
        if (n || o) {
            return o;
        }
        return w;
    };
};
const Ar = {
    forEach: Pr(0),
    map: Pr(1),
    filter: Pr(2),
    some: Pr(3),
    every: Pr(4),
    find: Pr(5),
    findIndex: Pr(6),
    filterReject: Pr(7)
};
const Ar_find = Ar.find;
const kr = "find";
let Ir = true;
if (kr in []) {
    Array(1)[kr](()=>{
        Ir = false;
    });
}
Ce({
    target: "Array",
    proto: true,
    forced: Ir
}, {
    find (t) {
        return Ar_find(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
});
Qe(kr);
Ze("Array", "find");
const Ar_findIndex = Ar.findIndex;
const Mr = "findIndex";
let Lr = true;
if (Mr in []) {
    Array(1)[Mr](()=>{
        Lr = false;
    });
}
Ce({
    target: "Array",
    proto: true,
    forced: Lr
}, {
    findIndex (t) {
        return Ar_findIndex(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
});
Qe(Mr);
Ze("Array", "findIndex");
const Nr = (t)=>{
    if (t > 9007199254740991) {
        throw TypeError("Maximum allowed index exceeded");
    }
    return t;
};
const Cr = (t, e, r, n, o, i, a, u)=>{
    let s;
    let c;
    let f = o;
    for(let l = 0, h = !!a && ar(a, u); l < n;){
        if (l in r) {
            s = h ? h(r[l], l, e) : r[l];
            if (i > 0 && ur(s)) {
                c = de(s);
                f = Cr(t, e, s, c, f, i - 1) - 1;
            } else {
                Nr(f + 1);
                t[f] = s;
            }
            f++;
        }
        l++;
    }
    return f;
};
const _r = Cr;
Ce({
    target: "Array",
    proto: true
}, {
    flatMap (t) {
        let e;
        const r = it(this);
        const n = de(r);
        J(t);
        e = xr(r, 0);
        e.length = _r(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : undefined);
        return e;
    }
});
Qe("flatMap");
Ze("Array", "flatMap");
Ce({
    target: "Array",
    proto: true
}, {
    flat () {
        const t = arguments.length ? arguments[0] : undefined;
        const e = it(this);
        const r = de(e);
        const n = xr(e, 0);
        n.length = _r(n, e, e, r, 0, t === undefined ? 1 : ce(t));
        return n;
    }
});
Qe("flat");
Ze("Array", "flat");
let IteratorPrototype;
let Br;
let Dr;
const Wr = (t)=>{
    if (pr(t) === "Symbol") {
        throw new TypeError("Cannot convert a Symbol value to a string");
    }
    return String(t);
};
const qr = b("".charAt);
const Hr = b("".charCodeAt);
const $r = b("".slice);
const Kr = (t)=>(e, r)=>{
        let n;
        let o;
        const i = Wr(j(e));
        const a = ce(r);
        const i_length = i.length;
        if (a < 0 || a >= i_length) {
            if (t) {
                return "";
            }
            return undefined;
        }
        if ((n = Hr(i, a)) < 55296 || n > 56319 || a + 1 === i_length || (o = Hr(i, a + 1)) < 56320 || o > 57343) {
            if (t) {
                return qr(i, a);
            }
            return n;
        }
        if (t) {
            return $r(i, a, a + 2);
        }
        return o - 56320 + (n - 55296 << 10) + 65536;
    };
const Gr = {
    codeAt: Kr(false),
    charAt: Kr(true)
};
const Vr = !a(()=>{
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t) !== t.prototype;
});
const Yr = Xt("IE_PROTO");
const Object_prototype = Object.prototype;
const Qr = Vr ? Object.getPrototypeOf : (t)=>{
    const e = it(t);
    if (hasOwn(e, Yr)) {
        return e[Yr];
    }
    const e_constructor = e.constructor;
    if (T(e_constructor) && e instanceof e_constructor) {
        return e_constructor.prototype;
    }
    if (e instanceof Object) {
        return Object_prototype;
    }
    return null;
};
const Zr = dt("iterator");
let BUGGY_SAFARI_ITERATORS = false;
[].keys && ("next" in (Dr = [].keys()) ? (Br = Qr(Qr(Dr))) !== Object.prototype && (IteratorPrototype = Br) : BUGGY_SAFARI_ITERATORS = true);
const en = !M(IteratorPrototype) || a(()=>{
    const t = {};
    return IteratorPrototype[Zr].call(t) !== t;
});
if (en) {
    IteratorPrototype = {};
}
if (!T(IteratorPrototype[Zr])) {
    ie(IteratorPrototype, Zr, function() {
        return this;
    });
}
const rn = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
};
const nn = Ct.f;
const on = dt("toStringTag");
const an = (t, e, r)=>{
    if (t && !r) {
        t = t.prototype;
    }
    if (t && !hasOwn(t, on)) {
        nn(t, on, {
            configurable: true,
            value: e
        });
    }
};
const un = {};
const rn_IteratorPrototype = rn.IteratorPrototype;
const cn = function() {
    return this;
};
const fn = (t, e, r, n)=>{
    const o = e + " Iterator";
    t.prototype = Ve(rn_IteratorPrototype, {
        next: d(+!n, r)
    });
    an(t, o, false);
    un[o] = cn;
    return t;
};
const ln = (t, e, r)=>{
    try {
        return b(J(Object.getOwnPropertyDescriptor(t, e)[r]));
    } catch (t) {}
};
const vn = (t)=>{
    if (((t)=>M(t) || t === null)(t)) {
        return t;
    }
    throw new TypeError("Can't set " + String(t) + " as a prototype");
};
const dn = Object.setPrototypeOf || ("__proto__" in {} ? (()=>{
    let t;
    let e = false;
    const r = {};
    try {
        (t = ln(Object.prototype, "__proto__", "set"))(r, []);
        e = r instanceof Array;
    } catch (t) {}
    return (r, n)=>{
        j(r);
        vn(n);
        if (M(r)) {
            if (e) {
                t(r, n);
            } else {
                r.__proto__ = n;
            }
            return r;
        }
        return r;
    };
})() : undefined);
const zt_PROPER = zt.PROPER;
const zt_CONFIGURABLE = zt.CONFIGURABLE;
const rn_IteratorPrototype_1 = rn.IteratorPrototype;
const rn_BUGGY_SAFARI_ITERATORS = rn.BUGGY_SAFARI_ITERATORS;
const wn = dt("iterator");
const Sn = "keys";
const En = "values";
const On = "entries";
const xn = function() {
    return this;
};
const Rn = (t, e, r, n, o, i, a)=>{
    fn(r, e, n);
    let u;
    let s;
    let c;
    const l = (t)=>{
        if (t === o && g) {
            return g;
        }
        if (!rn_BUGGY_SAFARI_ITERATORS && t && t in t_prototype) {
            return t_prototype[t];
        }
        switch(t){
            case Sn:
            case En:
            case On:
                return function() {
                    return new r(this, t);
                };
        }
        return function() {
            return new r(this);
        };
    };
    const h = e + " Iterator";
    let p = false;
    var t_prototype = t.prototype;
    const d = t_prototype[wn] || t_prototype["@@iterator"] || o && t_prototype[o];
    var g = !rn_BUGGY_SAFARI_ITERATORS && d || l(o);
    const y = e === "Array" && t_prototype.entries || d;
    if (y && (u = Qr(y.call(new t))) !== Object.prototype && u.next) {
        Qr(u) !== rn_IteratorPrototype_1 && (dn ? dn(u, rn_IteratorPrototype_1) : T(u[wn]) || ie(u, wn, xn));
        an(u, h, true);
    }
    zt_PROPER && o === En && d && d.name !== En && (zt_CONFIGURABLE ? _t(t_prototype, "name", En) : (p = true, g = function() {
        return f(d, this);
    }));
    if (o) {
        s = {
            values: l(En),
            keys: i ? g : l(Sn),
            entries: l(On)
        };
        if (a) {
            for(c in s){
                if (rn_BUGGY_SAFARI_ITERATORS || p || !(c in t_prototype)) {
                    ie(t_prototype, c, s[c]);
                }
            }
        } else {
            Ce({
                target: e,
                proto: true,
                forced: rn_BUGGY_SAFARI_ITERATORS || p
            }, s);
        }
    }
    if (t_prototype[wn] !== g) {
        ie(t_prototype, wn, g, {
            name: o
        });
    }
    un[e] = g;
    return s;
};
const Pn = (t, done)=>({
        value: t,
        done
    });
const Gr_charAt = Gr.charAt;
const jn = "String Iterator";
const ne_set = ne.set;
const In = ne.getterFor(jn);
Rn(String, "String", function(t) {
    ne_set(this, {
        type: jn,
        string: Wr(t),
        index: 0
    });
}, function() {
    let t;
    const e = In(this);
    const e_string = e.string;
    const e_index = e.index;
    if (e_index >= e_string.length) {
        return Pn(undefined, true);
    }
    t = Gr_charAt(e_string, e_index);
    e.index += t.length;
    return Pn(t, false);
});
const Tn = (t, e, r)=>{
    let n;
    let o;
    kt(t);
    try {
        if (!(n = Q(t, "return"))) {
            if (e === "throw") {
                throw r;
            }
            return r;
        }
        n = f(n, t);
    } catch (error) {
        o = true;
        n = error;
    }
    if (e === "throw") {
        throw r;
    }
    if (o) {
        throw n;
    }
    kt(n);
    return r;
};
const Mn = (t, e, r, n)=>{
    try {
        if (n) {
            return e(kt(r)[0], r[1]);
        }
        return e(r);
    } catch (error) {
        Tn(t, "throw", error);
    }
};
const Ln = dt("iterator");
const Nn = (t)=>t !== undefined && (un.Array === t || Array.prototype[Ln] === t);
const Cn = (t, e, r)=>{
    if (u) {
        Ct.f(t, e, d(0, r));
    } else {
        t[e] = r;
    }
};
const _n = dt("iterator");
const Fn = (t)=>{
    if (!P(t)) {
        return Q(t, _n) || Q(t, "@@iterator") || un[pr(t)];
    }
};
const Dn = function(t, e) {
    const r = arguments.length < 2 ? Fn(t) : e;
    if (J(r)) {
        return kt(f(r, t));
    }
    throw new TypeError(Y(t) + " is not iterable");
};
const from = function(t) {
    const e = it(t);
    const r = Sr(this);
    const arguments_length = arguments.length;
    let o = arguments_length > 1 ? arguments[1] : undefined;
    const i = o !== undefined;
    if (i) {
        o = ar(o, arguments_length > 2 ? arguments[2] : undefined);
    }
    let a;
    let u;
    let s;
    let c;
    let l;
    let h;
    const p = Fn(e);
    let v = 0;
    if (!p || this === Array && Nn(p)) {
        a = de(e);
        for(u = r ? new this(a) : Array(a); a > v; v++){
            h = i ? o(e[v], v) : e[v];
            Cn(u, v, h);
        }
    } else {
        u = r ? new this : [];
        for(l = (c = Dn(e, p)).next; !(s = f(l, c)).done; v++){
            h = i ? Mn(c, o, [
                s.value,
                v
            ], true) : s.value;
            Cn(u, v, h);
        }
    }
    u.length = v;
    return u;
};
const qn = dt("iterator");
let Hn = false;
try {
    let $n = 0;
    const Kn = {
        next () {
            return {
                done: !!$n++
            };
        },
        return () {
            Hn = true;
        }
    };
    Kn[qn] = function() {
        return this;
    };
    Array.from(Kn, ()=>{
        throw 2;
    });
} catch (t) {}
const Gn = (t, e)=>{
    try {
        if (!e && !Hn) {
            return false;
        }
    } catch (t) {
        return false;
    }
    let r = false;
    try {
        const n = {};
        n[qn] = ()=>({
                next () {
                    return {
                        done: r = true
                    };
                }
            });
        t(n);
    } catch (t) {}
    return r;
};
const Vn = !Gn((t)=>{
    Array.from(t);
});
Ce({
    target: "Array",
    stat: true,
    forced: Vn
}, {
    from
});
const Yn = i;
const ye_includes = ye.includes;
const Jn = a(()=>!Array(1).includes());
Ce({
    target: "Array",
    proto: true,
    forced: Jn
}, {
    includes (t) {
        return ye_includes(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
});
Qe("includes");
Ze("Array", "includes");
const Qn = Ct.f;
const Zn = "Array Iterator";
const ne_set_1 = ne.set;
const eo = ne.getterFor(Zn);
const ro = Rn(Array, "Array", function(t, e) {
    ne_set_1(this, {
        type: Zn,
        target: k(t),
        index: 0,
        kind: e
    });
}, function() {
    const t = eo(this);
    const t_target = t.target;
    const r = t.index++;
    if (!t_target || r >= t_target.length) {
        t.target = null;
        return Pn(undefined, true);
    }
    switch(t.kind){
        case "keys":
            return Pn(r, false);
        case "values":
            return Pn(t_target[r], false);
    }
    return Pn([
        r,
        t_target[r]
    ], false);
}, "values");
const no = un.Arguments = un.Array;
Qe("keys");
Qe("values");
Qe("entries");
if (u && no.name !== "values") {
    try {
        Qn(no, "name", {
            value: "values"
        });
    } catch (t) {}
}
if (!cr) {
    ie(Object.prototype, "toString", cr ? ({}).toString : function() {
        return "[object " + pr(this) + "]";
    }, {
        unsafe: true
    });
}
Ze("Array", "values");
const io = a(()=>{
    function t() {}
    return !(Array.of.call(t) instanceof t);
});
Ce({
    target: "Array",
    stat: true,
    forced: io
}, {
    of () {
        for(var t = 0, e = arguments.length, r = new (Sr(this) ? this : Array)(e); e > t;){
            Cn(r, t, arguments[t++]);
        }
        r.length = e;
        return r;
    }
});
const ao = dt("hasInstance");
if (!(ao in Function.prototype)) {
    Ct.f(Function.prototype, ao, {
        value: oe(function(t) {
            if (!T(this) || !M(t)) {
                return false;
            }
            const prototype = this.prototype;
            if (M(prototype)) {
                return U(prototype, t);
            }
            return t instanceof this;
        }, ao)
    });
}
dt("hasInstance");
const so = (t, e, r)=>{
    if (r.get) {
        oe(r.get, e, {
            getter: true
        });
    }
    if (r.set) {
        oe(r.set, e, {
            setter: true
        });
    }
    return Ct.f(t, e, r);
};
const zt_EXISTS = zt.EXISTS;
const lo = b(Function.prototype.toString);
const ho = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
const po = b(ho.exec);
if (u && !zt_EXISTS) {
    so(Function.prototype, "name", {
        configurable: true,
        get () {
            try {
                return po(ho, lo(this))[1];
            } catch (t) {
                return "";
            }
        }
    });
}
const vo = b([].slice);
const go = Oe.f;
const yo = typeof window === "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
const mo = {
    f (t) {
        if (yo && E(t) === "Window") {
            return ((t)=>{
                try {
                    return go(t);
                } catch (t) {
                    return vo(yo);
                }
            })(t);
        }
        return go(k(t));
    }
};
const bo = a(()=>{
    if (typeof ArrayBuffer === "function") {
        const t = new ArrayBuffer(8);
        if (Object.isExtensible(t)) {
            Object.defineProperty(t, "a", {
                value: 8
            });
        }
    }
});
const So = a(()=>{
    Object.isExtensible(1);
}) || bo ? (t)=>!!M(t) && (!bo || E(t) !== "ArrayBuffer") && (!Object.isExtensible || Object.isExtensible(t)) : Object.isExtensible;
const Eo = !a(()=>Object.isExtensible(Object.preventExtensions({})));
const Oo = e((t)=>{
    const e = Ct.f;
    let r = false;
    const n = lt("meta");
    let o = 0;
    const i = (t)=>{
        e(t, n, {
            value: {
                objectID: `O${o++}`,
                weakData: {}
            }
        });
    };
    var a = t.exports = {
        enable () {
            a.enable = ()=>{};
            r = true;
            const t = Oe.f;
            const e = b([].splice);
            const o = {};
            o[n] = 1;
            if (t(o).length) {
                Oe.f = (r)=>{
                    const o = t(r);
                    for(let i = 0, a = o.length; i < a; i++){
                        if (o[i] === n) {
                            e(o, i, 1);
                            break;
                        }
                    }
                    return o;
                };
                Ce({
                    target: "Object",
                    stat: true,
                    forced: true
                }, {
                    getOwnPropertyNames: mo.f
                });
            }
        },
        fastKey (t, e) {
            if (!M(t)) {
                if (typeof t === "symbol") {
                    return t;
                }
                return (typeof t === "string" ? "S" : "P") + t;
            }
            if (!hasOwn(t, n)) {
                if (!So(t)) {
                    return "F";
                }
                if (!e) {
                    return "E";
                }
                i(t);
            }
            return t[n].objectID;
        },
        getWeakData (t, e) {
            if (!hasOwn(t, n)) {
                if (!So(t)) {
                    return true;
                }
                if (!e) {
                    return false;
                }
                i(t);
            }
            return t[n].weakData;
        },
        onFreeze (t) {
            if (Eo && r && So(t) && !hasOwn(t, n)) {
                i(t);
            }
            return t;
        }
    };
    Jt[n] = true;
});
const Ro = function(t, e) {
    this.stopped = t;
    this.result = e;
};
const Ro_prototype = Ro.prototype;
const Ao = (t, e, r)=>{
    let n;
    let o;
    let i;
    let a;
    let u;
    let s;
    let c;
    const l = !(!r || !r.AS_ENTRIES);
    const h = !(!r || !r.IS_RECORD);
    const p = !(!r || !r.IS_ITERATOR);
    const v = !(!r || !r.INTERRUPTED);
    const d = ar(e, r && r.that);
    const g = (t)=>{
        if (n) {
            Tn(n, "normal", t);
        }
        return new Ro(true, t);
    };
    const y = (t)=>{
        if (l) {
            kt(t);
            if (v) {
                return d(t[0], t[1], g);
            }
            return d(t[0], t[1]);
        }
        if (v) {
            return d(t, g);
        }
        return d(t);
    };
    if (h) {
        n = t.iterator;
    } else if (p) {
        n = t;
    } else {
        if (!(o = Fn(t))) {
            throw new TypeError(Y(t) + " is not iterable");
        }
        if (Nn(o)) {
            i = 0;
            for(a = de(t); a > i; i++){
                if ((u = y(t[i])) && U(Ro_prototype, u)) {
                    return u;
                }
            }
            return new Ro(false);
        }
        n = Dn(t, o);
    }
    for(s = h ? t.next : n.next; !(c = f(s, n)).done;){
        try {
            u = y(c.value);
        } catch (error) {
            Tn(n, "throw", error);
        }
        if (typeof u === "object" && u && U(Ro_prototype, u)) {
            return u;
        }
    }
    return new Ro(false);
};
const ko = (t, e)=>{
    if (U(e, t)) {
        return t;
    }
    throw new TypeError("Incorrect invocation");
};
const Io = (t, e, r)=>{
    let n;
    let o;
    if (dn && T(n = e.constructor) && n !== r && M(o = n.prototype) && o !== r.prototype) {
        dn(t, o);
    }
    return t;
};
const To = (t, e, r)=>{
    const n = -1 !== t.indexOf("Map");
    const o = -1 !== t.indexOf("Weak");
    const u = n ? "set" : "add";
    const s = i[t];
    const c = s && s.prototype;
    let f = s;
    const l = {};
    const h = (t)=>{
        const e = b(c[t]);
        ie(c, t, t === "add" ? function(t) {
            e(this, t === 0 ? 0 : t);
            return this;
        } : t === "delete" ? function(t) {
            return !(o && !M(t)) && e(this, t === 0 ? 0 : t);
        } : t === "get" ? function(t) {
            if (o && !M(t)) {
                return undefined;
            }
            return e(this, t === 0 ? 0 : t);
        } : t === "has" ? function(t) {
            return !(o && !M(t)) && e(this, t === 0 ? 0 : t);
        } : function(t, r) {
            e(this, t === 0 ? 0 : t, r);
            return this;
        });
    };
    if (Ue(t, !T(s) || !(o || c.forEach && !a(()=>{
        (new s).entries().next();
    })))) {
        f = r.getConstructor(e, t, n, u);
        Oo.enable();
    } else if (Ue(t, true)) {
        const p = new f;
        const v = p[u](o ? {} : -0, 1) !== p;
        const d = a(()=>{
            p.has(1);
        });
        const g = Gn((t)=>{
            new s(t);
        });
        const y = !o && a(()=>{
            const t = new s;
            for(let e = 5; e--;){
                t[u](e, e);
            }
            return !t.has(-0);
        });
        if (!g) {
            f = e((t, e)=>{
                ko(t, c);
                const r = Io(new s, t, f);
                if (!P(e)) {
                    Ao(e, r[u], {
                        that: r,
                        AS_ENTRIES: n
                    });
                }
                return r;
            });
            f.prototype = c;
            c.constructor = f;
        }
        if (d || y) {
            h("delete");
            h("has");
            if (n) {
                h("get");
            }
        }
        if (y || v) {
            h(u);
        }
        o && c.clear && delete c.clear;
    }
    l[t] = f;
    Ce({
        global: true,
        constructor: true,
        forced: f !== s
    }, l);
    an(f, t);
    if (!o) {
        r.setStrong(f, t, n);
    }
    return f;
};
const Mo = (t, e, r)=>{
    for(const n in e){
        ie(t, n, e[n], r);
    }
    return t;
};
const Lo = dt("species");
const Uo = (t)=>{
    const e = L(t);
    if (u && e && !e[Lo]) {
        so(e, Lo, {
            configurable: true,
            get () {
                return this;
            }
        });
    }
};
const Oo_fastKey = Oo.fastKey;
const ne_set_2 = ne.set;
const ne_getterFor = ne.getterFor;
const Fo = {
    getConstructor (t, e, r, n) {
        const o = t((t, o)=>{
            ko(t, o_prototype);
            ne_set_2(t, {
                type: e,
                index: Ve(null),
                first: null,
                last: null,
                size: 0
            });
            if (!u) {
                t.size = 0;
            }
            if (!P(o)) {
                Ao(o, t[n], {
                    that: t,
                    AS_ENTRIES: r
                });
            }
        });
        var o_prototype = o.prototype;
        const a = ne_getterFor(e);
        const s = (t, e, r)=>{
            let n;
            let o;
            const i = a(t);
            let s = c(t, e);
            if (s) {
                s.value = r;
            } else {
                i.last = s = {
                    index: o = Oo_fastKey(e, true),
                    key: e,
                    value: r,
                    previous: n = i.last,
                    next: null,
                    removed: false
                };
                if (!i.first) {
                    i.first = s;
                }
                if (n) {
                    n.next = s;
                }
                u ? i.size++ : t.size++;
                if (o !== "F") {
                    i.index[o] = s;
                }
            }
            return t;
        };
        var c = (t, e)=>{
            let r;
            const n = a(t);
            const o = Oo_fastKey(e);
            if (o !== "F") {
                return n.index[o];
            }
            for(r = n.first; r; r = r.next){
                if (r.key === e) {
                    return r;
                }
            }
        };
        Mo(o_prototype, {
            clear () {
                const t = a(this);
                for(let e = t.first; e;){
                    e.removed = true;
                    if (e.previous) {
                        e.previous = e.previous.next = null;
                    }
                    e = e.next;
                }
                t.first = t.last = null;
                t.index = Ve(null);
                if (u) {
                    t.size = 0;
                } else {
                    this.size = 0;
                }
            },
            delete (t) {
                const e = this;
                const r = a(e);
                const n = c(e, t);
                if (n) {
                    const o = n.next;
                    const i = n.previous;
                    delete r.index[n.index];
                    n.removed = true;
                    if (i) {
                        i.next = o;
                    }
                    if (o) {
                        o.previous = i;
                    }
                    if (r.first === n) {
                        r.first = o;
                    }
                    if (r.last === n) {
                        r.last = i;
                    }
                    u ? r.size-- : e.size--;
                }
                return !!n;
            },
            forEach (t) {
                for(let e, r = a(this), n = ar(t, arguments.length > 1 ? arguments[1] : undefined); e = e ? e.next : r.first;){
                    n(e.value, e.key, this);
                    while(e && e.removed){
                        e = e.previous;
                    }
                }
            },
            has (t) {
                return !!c(this, t);
            }
        });
        Mo(o_prototype, r ? {
            get (t) {
                const e = c(this, t);
                return e && e.value;
            },
            set (t, e) {
                return s(this, t === 0 ? 0 : t, e);
            }
        } : {
            add (t) {
                return s(this, t = t === 0 ? 0 : t, t);
            }
        });
        if (u) {
            so(o_prototype, "size", {
                configurable: true,
                get () {
                    return a(this).size;
                }
            });
        }
        return o;
    },
    setStrong (t, e, r) {
        const n = e + " Iterator";
        const o = ne_getterFor(e);
        const i = ne_getterFor(n);
        Rn(t, e, function(t, e) {
            ne_set_2(this, {
                type: n,
                target: t,
                state: o(t),
                kind: e,
                last: null
            });
        }, function() {
            const t = i(this);
            const t_kind = t.kind;
            for(var r = t.last; r && r.removed;){
                r = r.previous;
            }
            if (t.target && (t.last = r = r ? r.next : t.state.first)) {
                return Pn(t_kind === "keys" ? r.key : t_kind === "values" ? r.value : [
                    r.key,
                    r.value
                ], false);
            }
            t.target = null;
            return Pn(undefined, true);
        }, r ? "entries" : "values", !r, true);
        Uo(e);
    }
};
To("Map", (t)=>function() {
        return t(this, arguments.length ? arguments[0] : undefined);
    }, Fo);
const Do = {
    Map,
    set: b(Map.prototype.set),
    get: b(Map.prototype.get),
    has: b(Map.prototype.has),
    remove: b(Map.prototype.delete),
    proto: Map.prototype
};
const Do_Map = Do.Map;
const Do_has = Do.has;
const Do_get = Do.get;
const Do_set = Do.set;
const $o = b([].push);
const Ko = a(()=>Do_Map.groupBy("ab", (t)=>t).get("a").length !== 1);
Ce({
    target: "Map",
    stat: true,
    forced: Ko
}, {
    groupBy (t, e) {
        j(t);
        J(e);
        const r = new Do_Map;
        let n = 0;
        Ao(t, (t)=>{
            const o = e(t, n++);
            if (Do_has(r, o)) {
                $o(Do_get(r, o), t);
            } else {
                Do_set(r, o, [
                    t
                ]);
            }
        });
        return r;
    }
});
const Go = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};
const classList = Et("span").classList;
const Yo = classList && classList.constructor && classList.constructor.prototype;
const Xo = Yo === Object.prototype ? undefined : Yo;
const Jo = dt("iterator");
const ro_values = ro.values;
const Zo = (t, e)=>{
    if (t) {
        if (t[Jo] !== ro_values) {
            try {
                _t(t, Jo, ro_values);
            } catch (e) {
                t[Jo] = ro_values;
            }
        }
        an(t, e, true);
        if (Go[e]) {
            for(const r in ro){
                if (t[r] !== ro[r]) {
                    try {
                        _t(t, r, ro[r]);
                    } catch (e) {
                        t[r] = ro[r];
                    }
                }
            }
        }
    }
};
for(const ti in Go){
    Zo(i[ti] && i[ti].prototype, ti);
}
Zo(Xo, "DOMTokenList");
const ei = (t, e, r)=>function(n) {
        const o = it(n);
        const arguments_length = arguments.length;
        const a = arguments_length > 1 ? arguments[1] : undefined;
        const u = a !== undefined;
        const s = u ? ar(a, arguments_length > 2 ? arguments[2] : undefined) : undefined;
        const c = new t;
        let f = 0;
        Ao(o, (t)=>{
            const n = u ? s(t, f++) : t;
            if (r) {
                e(c, kt(n)[0], n[1]);
            } else {
                e(c, n);
            }
        });
        return c;
    };
Ce({
    target: "Map",
    stat: true,
    forced: true
}, {
    from: ei(Do.Map, Do.set, true)
});
const ri = (t, e, r)=>function() {
        const n = new t;
        for(let o = arguments.length, i = 0; i < o; i++){
            const a = arguments[i];
            if (r) {
                e(n, kt(a)[0], a[1]);
            } else {
                e(n, a);
            }
        }
        return n;
    };
Ce({
    target: "Map",
    stat: true,
    forced: true
}, {
    of: ri(Do.Map, Do.set, true)
});
const Do_has_1 = Do.has;
const oi = (t)=>{
    Do_has_1(t);
    return t;
};
const Do_remove = Do.remove;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    deleteAll () {
        let t;
        const e = oi(this);
        let r = true;
        for(let n = 0, o = arguments.length; n < o; n++){
            t = Do_remove(e, arguments[n]);
            r = r && t;
        }
        return !!r;
    }
});
const Do_get_1 = Do.get;
const Do_has_2 = Do.has;
const Do_set_1 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    emplace (t, e) {
        let r;
        let n;
        const o = oi(this);
        if (Do_has_2(o, t)) {
            r = Do_get_1(o, t);
            if ("update" in e) {
                r = e.update(r, t, o);
                Do_set_1(o, t, r);
            }
            return r;
        }
        n = e.insert(t, o);
        Do_set_1(o, t, n);
        return n;
    }
});
const ci = (t, e, r)=>{
    let n;
    let o;
    for(const i = r ? t : t.iterator, a = t.next; !(n = f(a, i)).done;){
        if ((o = e(n.value)) !== undefined) {
            return o;
        }
    }
};
const Do_Map_1 = Do.Map;
const Do_proto = Do.proto;
const hi = b(Do_proto.forEach);
const pi = b(Do_proto.entries);
const next = pi(new Do_Map_1).next;
const di = (t, e, r)=>{
    if (r) {
        return ci({
            iterator: pi(t),
            next
        }, (t)=>e(t[1], t[0]));
    }
    return hi(t, e);
};
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    every (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        return di(e, (t, n)=>{
            if (!r(t, n, e)) {
                return false;
            }
        }, true) !== false;
    }
});
const Do_Map_2 = Do.Map;
const Do_set_2 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    filter (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = new Do_Map_2;
        di(e, (t, o)=>{
            if (r(t, o, e)) {
                Do_set_2(n, o, t);
            }
        });
        return n;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    find (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = di(e, (t, n)=>{
            if (r(t, n, e)) {
                return {
                    value: t
                };
            }
        }, true);
        return n && n.value;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    findKey (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = di(e, (t, n)=>{
            if (r(t, n, e)) {
                return {
                    key: n
                };
            }
        }, true);
        return n && n.key;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    includes (t) {
        return di(oi(this), (e)=>{
            if ((r = e) === (n = t) || r != r && n != n) {
                return true;
            }
            var r;
            var n;
        }, true) === true;
    }
});
const Do_Map_3 = Do.Map;
Ce({
    target: "Map",
    stat: true,
    forced: true
}, {
    keyBy (t, e) {
        const r = new (T(this) ? this : Do_Map_3);
        J(e);
        const n = J(r.set);
        Ao(t, (t)=>{
            f(n, r, e(t), t);
        });
        return r;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    keyOf (t) {
        const e = di(oi(this), (e, r)=>{
            if (e === t) {
                return {
                    key: r
                };
            }
        }, true);
        return e && e.key;
    }
});
const Do_Map_4 = Do.Map;
const Do_set_3 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    mapKeys (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = new Do_Map_4;
        di(e, (t, o)=>{
            Do_set_3(n, r(t, o, e), t);
        });
        return n;
    }
});
const Do_Map_5 = Do.Map;
const Do_set_4 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    mapValues (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = new Do_Map_5;
        di(e, (t, o)=>{
            Do_set_4(n, o, r(t, o, e));
        });
        return n;
    }
});
const Do_set_5 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    arity: 1,
    forced: true
}, {
    merge (t) {
        const e = oi(this);
        for(let r = arguments.length, n = 0; n < r;){
            Ao(arguments[n++], (t, r)=>{
                Do_set_5(e, t, r);
            }, {
                AS_ENTRIES: true
            });
        }
        return e;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    reduce (t) {
        const e = oi(this);
        let r = arguments.length < 2;
        let n = r ? undefined : arguments[1];
        J(t);
        di(e, (o, i)=>{
            if (r) {
                r = false;
                n = o;
            } else {
                n = t(n, o, i, e);
            }
        });
        if (r) {
            throw new TypeError("Reduce of empty map with no initial value");
        }
        return n;
    }
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    some (t) {
        const e = oi(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        return di(e, (t, n)=>{
            if (r(t, n, e)) {
                return true;
            }
        }, true) === true;
    }
});
const Do_get_2 = Do.get;
const Do_has_3 = Do.has;
const Do_set_6 = Do.set;
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    update (t, e) {
        const r = oi(this);
        const arguments_length = arguments.length;
        J(e);
        const o = Do_has_3(r, t);
        if (!o && arguments_length < 3) {
            throw new TypeError("Updating absent value");
        }
        const i = o ? Do_get_2(r, t) : J(arguments_length > 2 ? arguments[2] : undefined)(t, r);
        Do_set_6(r, t, e(i, t, r));
        return r;
    }
});
const Ii = function(t, e) {
    let r;
    const n = kt(this);
    const o = J(n.get);
    const i = J(n.has);
    const a = J(n.set);
    const u = arguments.length > 2 ? arguments[2] : undefined;
    if (!T(e) && !T(u)) {
        throw new TypeError("At least one callback required");
    }
    if (f(i, n, t)) {
        r = f(o, n, t);
        if (T(e)) {
            r = e(r);
            f(a, n, t, r);
        }
    } else if (T(u)) {
        r = u();
        f(a, n, t, r);
    }
    return r;
};
Ce({
    target: "Map",
    proto: true,
    real: true,
    forced: true
}, {
    upsert: Ii
});
Ce({
    target: "Map",
    proto: true,
    real: true,
    name: "upsert",
    forced: true
}, {
    updateOrInsert: Ii
});
const Ti = b(1..valueOf);
const Mi = "\t\n\v\f\r                　\u2028\u2029\ufeff";
const Li = b("".replace);
const Ui = RegExp("^[" + Mi + "]+");
const Ni = RegExp("(^|[^" + Mi + "])[" + Mi + "]+$");
const Ci = (t)=>(e)=>{
        let r = Wr(j(e));
        if (1 & t) {
            r = Li(r, Ui, "");
        }
        if (2 & t) {
            r = Li(r, Ni, "$1");
        }
        return r;
    };
const _i = {
    start: Ci(1),
    end: Ci(2),
    trim: Ci(3)
};
const Fi = Oe.f;
const Bi = Rt.f;
const Di = Ct.f;
const _i_trim = _i.trim;
const Wi = "Number";
const qi = i[Wi];
const qi_prototype = qi.prototype;
const i_TypeError_1 = i.TypeError;
const Ki = b("".slice);
const Gi = b("".charCodeAt);
const Vi = Ue(Wi, !qi(" 0o1") || !qi("0b1") || qi("+0x1"));
const Number_1 = function(t) {
    let e;
    const r = arguments.length < 1 ? 0 : qi(((t)=>{
        const e = mt(t, "number");
        if (typeof e === "bigint") {
            return e;
        }
        return ((t)=>{
            let e;
            let r;
            let n;
            let o;
            let i;
            let a;
            let u;
            let s;
            let c = mt(t, "number");
            if (G(c)) {
                throw new i_TypeError_1("Cannot convert a Symbol value to a number");
            }
            if (typeof c === "string" && c.length > 2) {
                c = _i_trim(c);
                if ((e = Gi(c, 0)) === 43 || e === 45) {
                    if ((r = Gi(c, 2)) === 88 || r === 120) {
                        return NaN;
                    }
                } else if (e === 48) {
                    switch(Gi(c, 1)){
                        case 66:
                        case 98:
                            n = 2;
                            o = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8;
                            o = 55;
                            break;
                        default:
                            return +c;
                    }
                    a = (i = Ki(c, 2)).length;
                    for(u = 0; u < a; u++){
                        if ((s = Gi(i, u)) < 48 || s > o) {
                            return NaN;
                        }
                    }
                    return parseInt(i, n);
                }
            }
            return +c;
        })(e);
    })(t));
    if (U(qi_prototype, e = this) && a(()=>{
        Ti(e);
    })) {
        return Io(Object(r), this, Number_1);
    }
    return r;
};
Number_1.prototype = qi_prototype;
if (Vi) {
    qi_prototype.constructor = Number_1;
}
Ce({
    global: true,
    constructor: true,
    wrap: true,
    forced: Vi
}, {
    Number: Number_1
});
if (Vi) {
    ((t, e)=>{
        let r;
        for(let n = u ? Fi(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++){
            if (hasOwn(e, r = n[o]) && !hasOwn(t, r)) {
                Di(t, r, Bi(e, r));
            }
        }
    })(Yn[Wi], qi);
}
Ce({
    target: "Number",
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    EPSILON: 2 ** -52
});
const i_isFinite = i.isFinite;
Ce({
    target: "Number",
    stat: true
}, {
    isFinite: Number.isFinite || ((t)=>typeof t === "number" && i_isFinite(t))
});
const isInteger = Number.isInteger || ((t)=>!M(t) && isFinite(t) && Math.floor(t) === t);
Ce({
    target: "Number",
    stat: true
}, {
    isInteger
});
Ce({
    target: "Number",
    stat: true
}, {
    isNaN (t) {
        return t != t;
    }
});
Ce({
    target: "Number",
    stat: true
}, {
    isSafeInteger (t) {
        return isInteger(t) && Math.abs(t) <= 9007199254740991;
    }
});
Ce({
    target: "Number",
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    MAX_SAFE_INTEGER: 9007199254740991
});
Ce({
    target: "Number",
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    MIN_SAFE_INTEGER: -9007199254740991
});
const _i_trim_1 = _i.trim;
const ea = b("".charAt);
const i_parseFloat = i.parseFloat;
const i_Symbol_1 = i.Symbol;
const oa = i_Symbol_1 && i_Symbol_1.iterator;
const parseFloat = 1 / i_parseFloat(Mi + "-0") != -Infinity || oa && !a(()=>{
    i_parseFloat(Object(oa));
}) ? (t)=>{
    const e = _i_trim_1(Wr(t));
    const r = i_parseFloat(e);
    if (r === 0 && ea(e, 0) === "-") {
        return -0;
    }
    return r;
} : i_parseFloat;
Ce({
    target: "Number",
    stat: true,
    forced: Number.parseFloat !== parseFloat
}, {
    parseFloat
});
const _i_trim_2 = _i.trim;
const i_parseInt = i.parseInt;
const i_Symbol_2 = i.Symbol;
const ca = i_Symbol_2 && i_Symbol_2.iterator;
const fa = /^[+-]?0x/i;
const la = b(fa.exec);
const parseInt_1 = i_parseInt(Mi + "08") !== 8 || i_parseInt(Mi + "0x16") !== 22 || ca && !a(()=>{
    i_parseInt(Object(ca));
}) ? (t, e)=>{
    const r = _i_trim_2(Wr(t));
    return i_parseInt(r, e >>> 0 || (la(fa, r) ? 16 : 10));
} : i_parseInt;
Ce({
    target: "Number",
    stat: true,
    forced: Number.parseInt !== parseInt_1
}, {
    parseInt: parseInt_1
});
const pa = b(v.f);
const va = b([].push);
const da = u && a(()=>{
    const t = Object.create(null);
    t[2] = 2;
    return !pa(t, 2);
});
const ga = (t)=>(e)=>{
        let r;
        const n = k(e);
        const o = _e(n);
        const i = da && Qr(n) === null;
        for(var a = o.length, s = 0, c = []; a > s;){
            r = o[s++];
            if (!(u && !(i ? r in n : pa(n, r)))) {
                va(c, t ? [
                    r,
                    n[r]
                ] : n[r]);
            }
        }
        return c;
    };
const ya = {
    entries: ga(true),
    values: ga(false)
};
const ya_entries = ya.entries;
Ce({
    target: "Object",
    stat: true
}, {
    entries (t) {
        return ya_entries(t);
    }
});
Ce({
    target: "Object",
    stat: true,
    sham: !u
}, {
    getOwnPropertyDescriptors (t) {
        let e;
        let r;
        const n = k(t);
        const o = Rt.f;
        for(var i = ownKeys(n), a = {}, u = 0; i.length > u;){
            if ((r = o(n, e = i[u++])) !== undefined) {
                Cn(a, e, r);
            }
        }
        return a;
    }
});
const ba = a(()=>{
    _e(1);
});
Ce({
    target: "Object",
    stat: true,
    forced: ba
}, {
    keys (t) {
        return _e(it(t));
    }
});
const is = Object.is || ((t, e)=>{
    if (t === e) {
        return t !== 0 || 1 / t == 1 / e;
    }
    return t != t && e != e;
});
Ce({
    target: "Object",
    stat: true
}, {
    is
});
const ya_values = ya.values;
Ce({
    target: "Object",
    stat: true
}, {
    values (t) {
        return ya_values(t);
    }
});
Ce({
    target: "Object",
    stat: true
}, {
    hasOwn
});
const apply = Function.prototype.apply;
const call_2 = Function.prototype.call;
const Ra = typeof Reflect === "object" && Reflect.apply || (s ? call_2.bind(apply) : function() {
    return call_2.apply(apply, arguments);
});
const Pa = !a(()=>{
    Reflect.apply(()=>{});
});
Ce({
    target: "Reflect",
    stat: true,
    forced: Pa
}, {
    apply (t, e, r) {
        return Ra(J(t), e, kt(r));
    }
});
const ja = b([].concat);
const ka = b([].join);
const Ia = {};
const Ta = s ? Function.bind : function(t) {
    const e = J(this);
    const e_prototype = e.prototype;
    const n = vo(arguments, 1);
    const o = function() {
        const r = ja(n, vo(arguments));
        if (this instanceof o) {
            return ((t, e, r)=>{
                if (!hasOwn(Ia, e)) {
                    const n = [];
                    for(let o = 0; o < e; o++){
                        n[o] = "a[" + o + "]";
                    }
                    Ia[e] = Function("C,a", "return new C(" + ka(n, ",") + ")");
                }
                return Ia[e](t, r);
            })(e, r.length, r);
        }
        return e.apply(t, r);
    };
    if (M(e_prototype)) {
        o.prototype = e_prototype;
    }
    return o;
};
const La = (t)=>{
    if (Sr(t)) {
        return t;
    }
    throw new TypeError(Y(t) + " is not a constructor");
};
const Ua = L("Reflect", "construct");
const push = [].push;
const _a = a(()=>{
    function t() {}
    return !(Ua(()=>{}, [], t) instanceof t);
});
const Fa = !a(()=>{
    Ua(()=>{});
});
const Ba = _a || Fa;
Ce({
    target: "Reflect",
    stat: true,
    forced: Ba,
    sham: Ba
}, {
    construct (t, e) {
        La(t);
        kt(e);
        const r = arguments.length < 3 ? t : La(arguments[2]);
        if (Fa && !_a) {
            return Ua(t, e, r);
        }
        if (t === r) {
            switch(e.length){
                case 0:
                    return new t;
                case 1:
                    return new t(e[0]);
                case 2:
                    return new t(e[0], e[1]);
                case 3:
                    return new t(e[0], e[1], e[2]);
                case 4:
                    return new t(e[0], e[1], e[2], e[3]);
            }
            const n = [
                null
            ];
            Ra(push, n, e);
            return new (Ra(Ta, t, n));
        }
        const r_prototype = r.prototype;
        const i = Ve(M(r_prototype) ? r_prototype : Object.prototype);
        const a = Ra(t, i, e);
        if (M(a)) {
            return a;
        }
        return i;
    }
});
const Da = a(()=>{
    Reflect.defineProperty(Ct.f({}, 1, {
        value: 1
    }), 1, {
        value: 2
    });
});
Ce({
    target: "Reflect",
    stat: true,
    forced: Da,
    sham: !u
}, {
    defineProperty (t, e, r) {
        kt(t);
        const n = bt(e);
        kt(r);
        try {
            Ct.f(t, n, r);
            return true;
        } catch (t) {
            return false;
        }
    }
});
const za = Rt.f;
Ce({
    target: "Reflect",
    stat: true
}, {
    deleteProperty (t, e) {
        const r = za(kt(t), e);
        return !(r && !r.configurable) && delete t[e];
    }
});
const Wa = (t)=>t !== undefined && (hasOwn(t, "value") || hasOwn(t, "writable"));
Ce({
    target: "Reflect",
    stat: true
}, {
    get: function t(e, r) {
        let n;
        let o;
        const i = arguments.length < 3 ? e : arguments[2];
        if (kt(e) === i) {
            return e[r];
        }
        if (n = Rt.f(e, r)) {
            if (Wa(n)) {
                return n.value;
            }
            if (n.get === undefined) {
                return undefined;
            }
            return f(n.get, i);
        }
        if (M(o = Qr(e))) {
            return t(o, r, i);
        }
    }
});
Ce({
    target: "Reflect",
    stat: true,
    sham: !u
}, {
    getOwnPropertyDescriptor (t, e) {
        return Rt.f(kt(t), e);
    }
});
Ce({
    target: "Reflect",
    stat: true,
    sham: !Vr
}, {
    getPrototypeOf (t) {
        return Qr(kt(t));
    }
});
Ce({
    target: "Reflect",
    stat: true
}, {
    has (t, e) {
        return e in t;
    }
});
Ce({
    target: "Reflect",
    stat: true
}, {
    isExtensible (t) {
        kt(t);
        return So(t);
    }
});
Ce({
    target: "Reflect",
    stat: true
}, {
    ownKeys
});
Ce({
    target: "Reflect",
    stat: true,
    sham: !Eo
}, {
    preventExtensions (t) {
        kt(t);
        try {
            const e = L("Object", "preventExtensions");
            if (e) {
                e(t);
            }
            return true;
        } catch (t) {
            return false;
        }
    }
});
const qa = a(()=>{
    const t = function() {};
    const e = Ct.f(new t, "a", {
        configurable: true
    });
    return Reflect.set(t.prototype, "a", 1, e) !== false;
});
Ce({
    target: "Reflect",
    stat: true,
    forced: qa
}, {
    set: function t(e, r, n) {
        let o;
        let i;
        let a;
        const u = arguments.length < 4 ? e : arguments[3];
        let s = Rt.f(kt(e), r);
        if (!s) {
            if (M(i = Qr(e))) {
                return t(i, r, n, u);
            }
            s = d(0);
        }
        if (Wa(s)) {
            if (s.writable === false || !M(u)) {
                return false;
            }
            if (o = Rt.f(u, r)) {
                if (o.get || o.set || o.writable === false) {
                    return false;
                }
                o.value = n;
                Ct.f(u, r, o);
            } else {
                Ct.f(u, r, d(0, n));
            }
        } else {
            if ((a = s.set) === undefined) {
                return false;
            }
            f(a, u, n);
        }
        return true;
    }
});
if (dn) {
    Ce({
        target: "Reflect",
        stat: true
    }, {
        setPrototypeOf (t, e) {
            kt(t);
            vn(e);
            try {
                dn(t, e);
                return true;
            } catch (t) {
                return false;
            }
        }
    });
}
Ce({
    global: true
}, {
    Reflect: {}
});
an(i.Reflect, "Reflect", true);
const Oo_getWeakData = Oo.getWeakData;
const ne_set_3 = ne.set;
const ne_getterFor_1 = ne.getterFor;
const Ar_find_1 = Ar.find;
const Ar_findIndex_1 = Ar.findIndex;
const Ya = b([].splice);
let Xa = 0;
const Ja = (t)=>t.frozen || (t.frozen = new Qa);
var Qa = function() {
    this.entries = [];
};
const Za = (t, e)=>Ar_find_1(t.entries, (t)=>t[0] === e);
Qa.prototype = {
    get (t) {
        const e = Za(this, t);
        if (e) {
            return e[1];
        }
    },
    has (t) {
        return !!Za(this, t);
    },
    set (t, e) {
        const r = Za(this, t);
        if (r) {
            r[1] = e;
        } else {
            this.entries.push([
                t,
                e
            ]);
        }
    },
    delete (t) {
        const e = Ar_findIndex_1(this.entries, (e)=>e[0] === t);
        if (~e) {
            Ya(this.entries, e, 1);
        }
        return !!~e;
    }
};
let tu;
const eu = {
    getConstructor (t, e, r, n) {
        const o = t((t, o)=>{
            ko(t, o_prototype);
            ne_set_3(t, {
                type: e,
                id: Xa++,
                frozen: null
            });
            if (!P(o)) {
                Ao(o, t[n], {
                    that: t,
                    AS_ENTRIES: r
                });
            }
        });
        var o_prototype = o.prototype;
        const a = ne_getterFor_1(e);
        const u = (t, e, r)=>{
            const n = a(t);
            const o = Oo_getWeakData(kt(e), true);
            if (o === true) {
                Ja(n).set(e, r);
            } else {
                o[n.id] = r;
            }
            return t;
        };
        Mo(o_prototype, {
            delete (t) {
                const e = a(this);
                if (!M(t)) {
                    return false;
                }
                const r = Oo_getWeakData(t);
                if (r === true) {
                    return Ja(e).delete(t);
                }
                return r && hasOwn(r, e.id) && delete r[e.id];
            },
            has (t) {
                const e = a(this);
                if (!M(t)) {
                    return false;
                }
                const r = Oo_getWeakData(t);
                if (r === true) {
                    return Ja(e).has(t);
                }
                return r && hasOwn(r, e.id);
            }
        });
        Mo(o_prototype, r ? {
            get (t) {
                const e = a(this);
                if (M(t)) {
                    const r = Oo_getWeakData(t);
                    if (r === true) {
                        return Ja(e).get(t);
                    }
                    if (r) {
                        return r[e.id];
                    }
                }
            },
            set (t, e) {
                return u(this, t, e);
            }
        } : {
            add (t) {
                return u(this, t, true);
            }
        });
        return o;
    }
};
const ne_enforce = ne.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const fu = !i.ActiveXObject && "ActiveXObject" in i;
const lu = (t)=>function() {
        return t(this, arguments.length ? arguments[0] : undefined);
    };
const hu = To("WeakMap", lu, eu);
const hu_prototype = hu.prototype;
const vu = b(hu_prototype.set);
if (Vt) {
    if (fu) {
        tu = eu.getConstructor(lu, "WeakMap", true);
        Oo.enable();
        const du = b(hu_prototype.delete);
        const gu = b(hu_prototype.has);
        const yu = b(hu_prototype.get);
        Mo(hu_prototype, {
            delete (t) {
                if (M(t) && !Object_isExtensible(t)) {
                    const e = ne_enforce(this);
                    if (!e.frozen) {
                        e.frozen = new tu;
                    }
                    return du(this, t) || e.frozen.delete(t);
                }
                return du(this, t);
            },
            has (t) {
                if (M(t) && !Object_isExtensible(t)) {
                    const e = ne_enforce(this);
                    if (!e.frozen) {
                        e.frozen = new tu;
                    }
                    return gu(this, t) || e.frozen.has(t);
                }
                return gu(this, t);
            },
            get (t) {
                if (M(t) && !Object_isExtensible(t)) {
                    const e = ne_enforce(this);
                    if (!e.frozen) {
                        e.frozen = new tu;
                    }
                    if (gu(this, t)) {
                        return yu(this, t);
                    }
                    return e.frozen.get(t);
                }
                return yu(this, t);
            },
            set (t, e) {
                if (M(t) && !Object_isExtensible(t)) {
                    const r = ne_enforce(this);
                    if (!r.frozen) {
                        r.frozen = new tu;
                    }
                    if (gu(this, t)) {
                        vu(this, t, e);
                    } else {
                        r.frozen.set(t, e);
                    }
                } else {
                    vu(this, t, e);
                }
                return this;
            }
        });
    } else {
        if (Eo && a(()=>{
            const t = Object_freeze([]);
            vu(new hu, t, 1);
            return !Object_isFrozen(t);
        })) {
            Mo(hu_prototype, {
                set (t, e) {
                    let r;
                    Array.isArray(t) && (Object_isFrozen(t) ? r = Object_freeze : Object_isSealed(t) && (r = Object_seal));
                    vu(this, t, e);
                    if (r) {
                        r(t);
                    }
                    return this;
                }
            });
        }
    }
}
const mu = L("Map");
const bu = L("WeakMap");
const wu = b([].push);
const Su = nt("metadata");
const store = Su.store || (Su.store = new bu);
const getMap = (t, e, r)=>{
    let n = store.get(t);
    if (!n) {
        if (!r) {
            return;
        }
        store.set(t, n = new mu);
    }
    let o = n.get(e);
    if (!o) {
        if (!r) {
            return;
        }
        n.set(e, o = new mu);
    }
    return o;
};
const xu = {
    store,
    getMap,
    has (t, e, r) {
        const n = getMap(e, r, false);
        return n !== undefined && n.has(t);
    },
    get (t, e, r) {
        const n = getMap(e, r, false);
        if (n === undefined) {
            return undefined;
        }
        return n.get(t);
    },
    set (t, e, r, n) {
        getMap(r, n, true).set(t, e);
    },
    keys (t, e) {
        const r = getMap(t, e, false);
        const n = [];
        if (r) {
            r.forEach((t, e)=>{
                wu(n, e);
            });
        }
        return n;
    },
    toKey (t) {
        if (t === undefined || typeof t === "symbol") {
            return t;
        }
        return String(t);
    }
};
const xu_toKey = xu.toKey;
const xu_set = xu.set;
Ce({
    target: "Reflect",
    stat: true
}, {
    defineMetadata (t, e, r) {
        const n = arguments.length < 4 ? undefined : xu_toKey(arguments[3]);
        xu_set(t, e, kt(r), n);
    }
});
const xu_toKey_1 = xu.toKey;
const xu_getMap = xu.getMap;
const xu_store = xu.store;
Ce({
    target: "Reflect",
    stat: true
}, {
    deleteMetadata (t, e) {
        const r = arguments.length < 3 ? undefined : xu_toKey_1(arguments[2]);
        const n = xu_getMap(kt(e), r, false);
        if (n === undefined || !n.delete(t)) {
            return false;
        }
        if (n.size) {
            return true;
        }
        const o = xu_store.get(e);
        o.delete(r);
        return !!o.size || xu_store.delete(e);
    }
});
const xu_has = xu.has;
const xu_get = xu.get;
const xu_toKey_2 = xu.toKey;
const Lu = (t, e, r)=>{
    if (xu_has(t, e, r)) {
        return xu_get(t, e, r);
    }
    const n = Qr(e);
    if (n !== null) {
        return Lu(t, n, r);
    }
};
Ce({
    target: "Reflect",
    stat: true
}, {
    getMetadata (t, e) {
        const r = arguments.length < 3 ? undefined : xu_toKey_2(arguments[2]);
        return Lu(t, kt(e), r);
    }
});
const Do_Map_6 = Do.Map;
const Do_has_4 = Do.has;
const Do_set_7 = Do.set;
const _u = b([].push);
const Fu = b(function(t) {
    let e;
    let r;
    let n;
    const o = it(this);
    const i = de(o);
    const a = [];
    const u = new Do_Map_6;
    const s = P(t) ? (t)=>t : J(t);
    for(e = 0; e < i; e++){
        n = s(r = o[e]);
        if (!Do_has_4(u, n)) {
            Do_set_7(u, n, r);
        }
    }
    di(u, (t)=>{
        _u(a, t);
    });
    return a;
});
const Bu = b([].concat);
const xu_keys = xu.keys;
const xu_toKey_3 = xu.toKey;
const Wu = (t, e)=>{
    const r = xu_keys(t, e);
    const n = Qr(t);
    if (n === null) {
        return r;
    }
    const o = Wu(n, e);
    if (o.length) {
        if (r.length) {
            return Fu(Bu(r, o));
        }
        return o;
    }
    return r;
};
Ce({
    target: "Reflect",
    stat: true
}, {
    getMetadataKeys (t) {
        const e = arguments.length < 2 ? undefined : xu_toKey_3(arguments[1]);
        return Wu(kt(t), e);
    }
});
const xu_get_1 = xu.get;
const xu_toKey_4 = xu.toKey;
Ce({
    target: "Reflect",
    stat: true
}, {
    getOwnMetadata (t, e) {
        const r = arguments.length < 3 ? undefined : xu_toKey_4(arguments[2]);
        return xu_get_1(t, kt(e), r);
    }
});
const xu_keys_1 = xu.keys;
const xu_toKey_5 = xu.toKey;
Ce({
    target: "Reflect",
    stat: true
}, {
    getOwnMetadataKeys (t) {
        const e = arguments.length < 2 ? undefined : xu_toKey_5(arguments[1]);
        return xu_keys_1(kt(t), e);
    }
});
const xu_has_1 = xu.has;
const xu_toKey_6 = xu.toKey;
const Yu = (t, e, r)=>{
    if (xu_has_1(t, e, r)) {
        return true;
    }
    const n = Qr(e);
    return n !== null && Yu(t, n, r);
};
Ce({
    target: "Reflect",
    stat: true
}, {
    hasMetadata (t, e) {
        const r = arguments.length < 3 ? undefined : xu_toKey_6(arguments[2]);
        return Yu(t, kt(e), r);
    }
});
const xu_has_2 = xu.has;
const xu_toKey_7 = xu.toKey;
Ce({
    target: "Reflect",
    stat: true
}, {
    hasOwnMetadata (t, e) {
        const r = arguments.length < 3 ? undefined : xu_toKey_7(arguments[2]);
        return xu_has_2(t, kt(e), r);
    }
});
const xu_toKey_8 = xu.toKey;
const xu_set_1 = xu.set;
Ce({
    target: "Reflect",
    stat: true
}, {
    metadata (t, e) {
        return (r, n)=>{
            xu_set_1(t, e, kt(r), xu_toKey_8(n));
        };
    }
});
const ts = dt("match");
const es = (t)=>{
    let e;
    return M(t) && ((e = t[ts]) !== undefined ? !!e : E(t) === "RegExp");
};
const rs = function() {
    const t = kt(this);
    let e = "";
    if (t.hasIndices) {
        e += "d";
    }
    if (t.global) {
        e += "g";
    }
    if (t.ignoreCase) {
        e += "i";
    }
    if (t.multiline) {
        e += "m";
    }
    if (t.dotAll) {
        e += "s";
    }
    if (t.unicode) {
        e += "u";
    }
    if (t.unicodeSets) {
        e += "v";
    }
    if (t.sticky) {
        e += "y";
    }
    return e;
};
const os = (t)=>{
    const t_flags = t.flags;
    if (t_flags !== undefined || "flags" in RegExp.prototype || hasOwn(t, "flags") || !U(RegExp.prototype, t)) {
        return t_flags;
    }
    return f(rs, t);
};
const i_RegExp = i.RegExp;
const UNSUPPORTED_Y = a(()=>{
    const t = i_RegExp("a", "y");
    t.lastIndex = 2;
    return t.exec("abcd") !== null;
});
const MISSED_STICKY = UNSUPPORTED_Y || a(()=>!i_RegExp("a", "y").sticky);
const BROKEN_CARET = UNSUPPORTED_Y || a(()=>{
    const t = i_RegExp("^r", "gy");
    t.lastIndex = 2;
    return t.exec("str") !== null;
});
const cs = {
    BROKEN_CARET,
    MISSED_STICKY,
    UNSUPPORTED_Y
};
const fs = Ct.f;
const ls = (t, e, r)=>{
    if (!(r in t)) {
        fs(t, r, {
            configurable: true,
            get () {
                return e[r];
            },
            set (t) {
                e[r] = t;
            }
        });
    }
};
const i_RegExp_1 = i.RegExp;
const ps = a(()=>{
    const t = i_RegExp_1(".", "s");
    return !(t.dotAll && t.test("\n") && t.flags === "s");
});
const i_RegExp_2 = i.RegExp;
const ds = a(()=>{
    const t = i_RegExp_2("(?<a>b)", "g");
    return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
});
const gs = Oe.f;
const ne_enforce_1 = ne.enforce;
const ms = dt("match");
const i_RegExp_3 = i.RegExp;
const bs_prototype = i_RegExp_3.prototype;
const i_SyntaxError = i.SyntaxError;
const Es = b(bs_prototype.exec);
const Os = b("".charAt);
const xs = b("".replace);
const Rs = b("".indexOf);
const Ps = b("".slice);
const As = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const js = /a/g;
const ks = /a/g;
const Is = new i_RegExp_3(js) !== js;
const cs_MISSED_STICKY = cs.MISSED_STICKY;
const cs_UNSUPPORTED_Y = cs.UNSUPPORTED_Y;
const Ls = u && (!Is || cs_MISSED_STICKY || ps || ds || a(()=>{
    ks[ms] = false;
    return i_RegExp_3(js) !== js || i_RegExp_3(ks) === ks || String(i_RegExp_3(js, "i")) !== "/a/i";
}));
if (Ue("RegExp", Ls)) {
    const Us = function(t, e) {
        let r;
        let n;
        let o;
        let i;
        let a;
        let u;
        const s = U(bs_prototype, this);
        const c = es(t);
        const f = e === undefined;
        let l = [];
        let h = t;
        if (!s && c && f && t.constructor === Us) {
            return t;
        }
        if (c || U(bs_prototype, t)) {
            t = t.source;
            if (f) {
                e = os(h);
            }
        }
        t = t === undefined ? "" : Wr(t);
        e = e === undefined ? "" : Wr(e);
        h = t;
        if (ps && "dotAll" in js && (n = !!e && Rs(e, "s") > -1)) {
            e = xs(e, /s/g, "");
        }
        r = e;
        if (cs_MISSED_STICKY && "sticky" in js && (o = !!e && Rs(e, "y") > -1) && cs_UNSUPPORTED_Y) {
            e = xs(e, /y/g, "");
        }
        if (ds) {
            i = ((t)=>{
                let e;
                for(var r = t.length, n = 0, o = "", i = [], a = Ve(null), u = false, s = false, c = 0, f = ""; n <= r; n++){
                    if ((e = Os(t, n)) === "\\") {
                        e += Os(t, ++n);
                    } else if (e === "]") {
                        u = false;
                    } else if (!u) {
                        switch(true){
                            case e === "[":
                                u = true;
                                break;
                            case e === "(":
                                o += e;
                                if (Ps(t, n + 1, n + 3) === "?:") {
                                    continue;
                                }
                                if (Es(As, Ps(t, n + 1))) {
                                    n += 2;
                                    s = true;
                                }
                                c++;
                                continue;
                            case e === ">" && s:
                                if (f === "" || hasOwn(a, f)) {
                                    throw new i_SyntaxError("Invalid capture group name");
                                }
                                a[f] = true;
                                i[i.length] = [
                                    f,
                                    c
                                ];
                                s = false;
                                f = "";
                                continue;
                        }
                    }
                    if (s) {
                        f += e;
                    } else {
                        o += e;
                    }
                }
                return [
                    o,
                    i
                ];
            })(t);
            t = i[0];
            l = i[1];
        }
        a = Io(i_RegExp_3(t, e), s ? this : bs_prototype, Us);
        if (n || o || l.length) {
            u = ne_enforce_1(a);
            if (n) {
                u.dotAll = true;
                u.raw = Us(((t)=>{
                    let e;
                    for(var r = t.length, n = 0, o = "", i = false; n <= r; n++){
                        if ((e = Os(t, n)) !== "\\") {
                            if (i || e !== ".") {
                                if (e === "[") {
                                    i = true;
                                } else if (e === "]") {
                                    i = false;
                                }
                                o += e;
                            } else {
                                o += "[\\s\\S]";
                            }
                        } else {
                            o += e + Os(t, ++n);
                        }
                    }
                    return o;
                })(t), r);
            }
            if (o) {
                u.sticky = true;
            }
            if (l.length) {
                u.groups = l;
            }
        }
        if (t !== h) {
            try {
                _t(a, "source", h === "" ? "(?:)" : h);
            } catch (t) {}
        }
        return a;
    };
    for(let Ns = gs(i_RegExp_3), Cs = 0; Ns.length > Cs;){
        ls(Us, i_RegExp_3, Ns[Cs++]);
    }
    bs_prototype.constructor = Us;
    Us.prototype = bs_prototype;
    ie(i, "RegExp", Us, {
        constructor: true
    });
}
Uo("RegExp");
const zt_PROPER_1 = zt.PROPER;
const Fs = "toString";
const Ds = RegExp.prototype[Fs];
if (a(()=>Ds.call({
        source: "a",
        flags: "b"
    }) !== "/a/b") || zt_PROPER_1 && Ds.name !== Fs) {
    ie(RegExp.prototype, Fs, function() {
        const t = kt(this);
        return "/" + Wr(t.source) + "/" + Wr(os(t));
    }, {
        unsafe: true
    });
}
const ne_get = ne.get;
if (u && ps) {
    so(RegExp.prototype, "dotAll", {
        configurable: true,
        get () {
            if (this !== RegExp.prototype) {
                if (E(this) === "RegExp") {
                    return !!ne_get(this).dotAll;
                }
                throw new TypeError("Incompatible receiver, RegExp required");
            }
        }
    });
}
const ne_get_1 = ne.get;
const $s = nt("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let Gs = exec;
const Vs = b("".charAt);
const Ys = b("".indexOf);
const Xs = b("".replace);
const Js = b("".slice);
const Qs = (()=>{
    const t = /a/;
    const e = /b*/g;
    f(exec, t, "a");
    f(exec, e, "a");
    return t.lastIndex !== 0 || e.lastIndex !== 0;
})();
const cs_BROKEN_CARET = cs.BROKEN_CARET;
const tc = /()??/.exec("")[1] !== undefined;
if (Qs || tc || cs_BROKEN_CARET || ps || ds) {
    Gs = function(t) {
        let e;
        let r;
        let n;
        let o;
        let i;
        let a;
        let u;
        const s = this;
        const c = ne_get_1(s);
        const l = Wr(t);
        const c_raw = c.raw;
        if (c_raw) {
            c_raw.lastIndex = s.lastIndex;
            e = f(Gs, c_raw, l);
            s.lastIndex = c_raw.lastIndex;
            return e;
        }
        const c_groups = c.groups;
        const v = cs_BROKEN_CARET && s.sticky;
        let d = f(rs, s);
        let s_source = s.source;
        let y = 0;
        let m = l;
        if (v) {
            d = Xs(d, "y", "");
            if (-1 === Ys(d, "g")) {
                d += "g";
            }
            m = Js(l, s.lastIndex);
            if (s.lastIndex > 0 && (!s.multiline || s.multiline && Vs(l, s.lastIndex - 1) !== "\n")) {
                s_source = "(?: " + s_source + ")";
                m = " " + m;
                y++;
            }
            r = new RegExp("^(?:" + s_source + ")", d);
        }
        if (tc) {
            r = new RegExp("^" + s_source + "$(?!\\s)", d);
        }
        if (Qs) {
            n = s.lastIndex;
        }
        o = f(exec, v ? r : s, m);
        v ? o ? (o.input = Js(o.input, y), o[0] = Js(o[0], y), o.index = s.lastIndex, s.lastIndex += o[0].length) : s.lastIndex = 0 : Qs && o && (s.lastIndex = s.global ? o.index + o[0].length : n);
        if (tc && o && o.length > 1) {
            f($s, o[0], r, function() {
                for(i = 1; i < arguments.length - 2; i++){
                    if (arguments[i] === undefined) {
                        o[i] = undefined;
                    }
                }
            });
        }
        if (o && c_groups) {
            o.groups = a = Ve(null);
            for(i = 0; i < c_groups.length; i++){
                a[(u = c_groups[i])[0]] = o[u[1]];
            }
        }
        return o;
    };
}
const exec_1 = Gs;
Ce({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec_1
}, {
    exec: exec_1
});
const i_RegExp_4 = i.RegExp;
const rc_prototype = i_RegExp_4.prototype;
if (u && a(()=>{
    let t = true;
    try {
        i_RegExp_4(".", "d");
    } catch (e) {
        t = false;
    }
    const e = {};
    let r = "";
    const n = t ? "dgimsy" : "gimsy";
    const o = (t, n)=>{
        Object.defineProperty(e, t, {
            get () {
                r += n;
                return true;
            }
        });
    };
    const i = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (t) {
        i.hasIndices = "d";
    }
    for(const a in i){
        o(a, i[a]);
    }
    return Object.getOwnPropertyDescriptor(rc_prototype, "flags").get.call(e) !== n || r !== n;
})) {
    so(rc_prototype, "flags", {
        configurable: true,
        get: rs
    });
}
const ne_get_2 = ne.get;
if (u && cs.MISSED_STICKY) {
    so(RegExp.prototype, "sticky", {
        configurable: true,
        get () {
            if (this !== RegExp.prototype) {
                if (E(this) === "RegExp") {
                    return !!ne_get_2(this).sticky;
                }
                throw new TypeError("Incompatible receiver, RegExp required");
            }
        }
    });
}
let uc;
let sc;
uc = false;
sc = /[ac]/;
sc.exec = function() {
    uc = true;
    return /./.exec.apply(this, arguments);
};
const cc = sc.test("abc") === true && uc;
const test = /./.test;
Ce({
    target: "RegExp",
    proto: true,
    forced: !cc
}, {
    test (t) {
        const e = kt(this);
        const r = Wr(t);
        const e_exec = e.exec;
        if (!T(e_exec)) {
            return f(test, e, r);
        }
        const o = f(e_exec, e, r);
        return o !== null && (kt(o), true);
    }
});
const lc = dt("species");
const pc = (t, e, r, n)=>{
    const o = dt(t);
    const i = !a(()=>{
        const e = {};
        e[o] = ()=>7;
        return ""[t](e) !== 7;
    });
    const u = i && !a(()=>{
        let e = false;
        let r = /a/;
        if (t === "split") {
            r = {};
            r.constructor = {};
            r.constructor[lc] = ()=>r;
            r.flags = "";
            r[o] = /./[o];
        }
        r.exec = ()=>{
            e = true;
            return null;
        };
        r[o]("");
        return !e;
    });
    if (!i || !u || r) {
        const s = /./[o];
        const c = e(o, ""[t], (t, e, r, n, o)=>{
            const e_exec = e.exec;
            if (e_exec === exec_1 || e_exec === RegExp.prototype.exec) {
                if (i && !o) {
                    return {
                        done: true,
                        value: f(s, e, r, n)
                    };
                }
                return {
                    done: true,
                    value: f(t, r, e, n)
                };
            }
            return {
                done: false
            };
        });
        ie(String.prototype, t, c[0]);
        ie(RegExp.prototype, o, c[1]);
    }
    if (n) {
        _t(RegExp.prototype[o], "sham", true);
    }
};
const Gr_charAt_1 = Gr.charAt;
const dc = (t, e, r)=>e + (r ? Gr_charAt_1(t, e).length : 1);
const yc = (t, e)=>{
    const t_exec = t.exec;
    if (T(t_exec)) {
        const n = f(t_exec, t, e);
        if (n !== null) {
            kt(n);
        }
        return n;
    }
    if (E(t) === "RegExp") {
        return f(exec_1, t, e);
    }
    throw new TypeError("RegExp#exec called on incompatible receiver");
};
pc("match", (t, e, r)=>[
        function(e) {
            const r = j(this);
            const n = P(e) ? undefined : Q(e, t);
            if (n) {
                return f(n, e, r);
            }
            return new RegExp(e)[t](Wr(r));
        },
        function(t) {
            const n = kt(this);
            const o = Wr(t);
            const i = r(e, n, o);
            if (i.done) {
                return i.value;
            }
            if (!n.global) {
                return yc(n, o);
            }
            const n_unicode = n.unicode;
            n.lastIndex = 0;
            let u;
            const s = [];
            let c = 0;
            while((u = yc(n, o)) !== null){
                const f = Wr(u[0]);
                s[c] = f;
                if (f === "") {
                    n.lastIndex = dc(o, ve(n.lastIndex), n_unicode);
                }
                c++;
            }
            if (c === 0) {
                return null;
            }
            return s;
        }
    ]);
const bc = b("".charAt);
const wc = b("".replace);
const Sc = b("".slice);
const Ec = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
const Oc = /\$([$&'`]|\d{1,2})/g;
const xc = (t, e, r, n, o, i)=>{
    const a = r + t.length;
    const n_length = n.length;
    let s = Oc;
    if (o !== undefined) {
        o = it(o);
        s = Ec;
    }
    return wc(i, s, (i, s)=>{
        let c;
        switch(bc(s, 0)){
            case "$":
                return "$";
            case "&":
                return t;
            case "`":
                return Sc(e, 0, r);
            case "'":
                return Sc(e, a);
            case "<":
                c = o[Sc(s, 1, -1)];
                break;
            default:
                const f = +s;
                if (f === 0) {
                    return i;
                }
                if (f > n_length) {
                    const l = Math.floor(f / 10);
                    if (l === 0) {
                        return i;
                    }
                    if (l <= n_length) {
                        if (n[l - 1] === undefined) {
                            return bc(s, 1);
                        }
                        return n[l - 1] + bc(s, 1);
                    }
                    return i;
                }
                c = n[f - 1];
        }
        if (c === undefined) {
            return "";
        }
        return c;
    });
};
const Rc = dt("replace");
const jc = b([].concat);
const kc = b([].push);
const Ic = b("".indexOf);
const Tc = b("".slice);
const Mc = "a".replace(/./, "$0") === "$0";
const Lc = !!/./[Rc] && /./[Rc]("a", "$0") === "";
const Uc = !a(()=>{
    const t = /./;
    t.exec = ()=>{
        const t = [];
        t.groups = {
            a: "7"
        };
        return t;
    };
    return "".replace(t, "$<a>") !== "7";
});
pc("replace", (t, e, r)=>{
    const n = Lc ? "$" : "$0";
    return [
        function(t, r) {
            const n = j(this);
            const o = P(t) ? undefined : Q(t, Rc);
            if (o) {
                return f(o, t, n, r);
            }
            return f(e, Wr(n), t, r);
        },
        function(t, o) {
            const i = kt(this);
            const a = Wr(t);
            if (typeof o === "string" && -1 === Ic(o, n) && -1 === Ic(o, "$<")) {
                const u = r(e, i, a, o);
                if (u.done) {
                    return u.value;
                }
            }
            const s = T(o);
            if (!s) {
                o = Wr(o);
            }
            let c;
            const i_global = i.global;
            if (i_global) {
                c = i.unicode;
                i.lastIndex = 0;
            }
            for(var l, h = []; (l = yc(i, a)) !== null && (kc(h, l), i_global);){
                if (Wr(l[0]) === "") {
                    i.lastIndex = dc(a, ve(i.lastIndex), c);
                }
            }
            let p;
            let v = "";
            let d = 0;
            for(let g = 0; g < h.length; g++){
                let y;
                const m = Wr((l = h[g])[0]);
                const b = Math.max(Math.min(ce(l.index), a.length), 0);
                const w = [];
                for(let S = 1; S < l.length; S++){
                    kc(w, (p = l[S]) === undefined ? p : String(p));
                }
                const E = l.groups;
                if (s) {
                    const O = jc([
                        m
                    ], w, b, a);
                    if (E !== undefined) {
                        kc(O, E);
                    }
                    y = Wr(Ra(o, undefined, O));
                } else {
                    y = xc(m, a, b, w, E, o);
                }
                if (b >= d) {
                    v += Tc(a, d, b) + y;
                    d = b + m.length;
                }
            }
            return v + Tc(a, d);
        }
    ];
}, !Uc || !Mc || Lc);
pc("search", (t, e, r)=>[
        function(e) {
            const r = j(this);
            const n = P(e) ? undefined : Q(e, t);
            if (n) {
                return f(n, e, r);
            }
            return new RegExp(e)[t](Wr(r));
        },
        function(t) {
            const n = kt(this);
            const o = Wr(t);
            const i = r(e, n, o);
            if (i.done) {
                return i.value;
            }
            const n_lastIndex = n.lastIndex;
            if (!is(n_lastIndex, 0)) {
                n.lastIndex = 0;
            }
            const u = yc(n, o);
            if (!is(n.lastIndex, n_lastIndex)) {
                n.lastIndex = n_lastIndex;
            }
            if (u === null) {
                return -1;
            }
            return u.index;
        }
    ]);
const Nc = dt("species");
const Cc = (t, e)=>{
    let r;
    const constructor = kt(t).constructor;
    if (constructor === undefined || P(r = kt(constructor)[Nc])) {
        return e;
    }
    return La(r);
};
const cs_UNSUPPORTED_Y_1 = cs.UNSUPPORTED_Y;
const Bc = b([].push);
const Dc = b("".slice);
const zc = !a(()=>{
    const t = /(?:)/;
    const t_exec = t.exec;
    t.exec = function() {
        return t_exec.apply(this, arguments);
    };
    const r = "ab".split(t);
    return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
});
const Wc = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
pc("split", (t, e, r)=>{
    const n = "0".split(undefined, 0).length ? function(t, r) {
        if (t === undefined && r === 0) {
            return [];
        }
        return f(e, this, t, r);
    } : e;
    return [
        function(e, r) {
            const o = j(this);
            const i = P(e) ? undefined : Q(e, t);
            if (i) {
                return f(i, e, o, r);
            }
            return f(n, Wr(o), e, r);
        },
        function(t, o) {
            const i = kt(this);
            const a = Wr(t);
            if (!Wc) {
                const u = r(n, i, a, o, n !== e);
                if (u.done) {
                    return u.value;
                }
            }
            const s = Cc(i, RegExp);
            const i_unicode = i.unicode;
            const f = new s(cs_UNSUPPORTED_Y_1 ? "^(?:" + i.source + ")" : i, (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (cs_UNSUPPORTED_Y_1 ? "g" : "y"));
            const l = o === undefined ? 4294967295 : o >>> 0;
            if (l === 0) {
                return [];
            }
            if (a.length === 0) {
                if (yc(f, a) === null) {
                    return [
                        a
                    ];
                }
                return [];
            }
            let h = 0;
            for(var p = 0, v = []; p < a.length;){
                f.lastIndex = cs_UNSUPPORTED_Y_1 ? 0 : p;
                let d;
                const g = yc(f, cs_UNSUPPORTED_Y_1 ? Dc(a, p) : a);
                if (g === null || (d = Math.min(ve(f.lastIndex + (cs_UNSUPPORTED_Y_1 ? p : 0)), a.length)) === h) {
                    p = dc(a, p, i_unicode);
                } else {
                    Bc(v, Dc(a, h, p));
                    if (v.length === l) {
                        return v;
                    }
                    for(let y = 1; y <= g.length - 1; y++){
                        Bc(v, g[y]);
                        if (v.length === l) {
                            return v;
                        }
                    }
                    h = d;
                    p = d;
                }
            }
            Bc(v, Dc(a, h));
            return v;
        }
    ];
}, Wc || !zc, cs_UNSUPPORTED_Y_1);
const repeat = function(t) {
    let e = Wr(j(this));
    let r = "";
    let n = ce(t);
    if (n < 0 || n === Infinity) {
        throw new RangeError("Wrong number of repetitions");
    }
    for(; n > 0; (n >>>= 1) && (e += e)){
        if (1 & n) {
            r += e;
        }
    }
    return r;
};
const Kc = b(repeat);
const Gc = b("".slice);
const Yc = (t)=>(e, r, n)=>{
        let o;
        let i;
        const a = Wr(j(e));
        const u = ve(r);
        const a_length = a.length;
        const c = n === undefined ? " " : Wr(n);
        if (u <= a_length || c === "") {
            return a;
        }
        if ((i = Kc(c, Math.ceil((o = u - a_length) / c.length))).length > o) {
            i = Gc(i, 0, o);
        }
        if (t) {
            return a + i;
        }
        return i + a;
    };
const Xc = {
    start: Yc(false),
    end: Yc(true)
};
const Xc_start = Xc.start;
const tf = b("".charAt);
const ef = b("".charCodeAt);
const rf = b(1.1.toString);
const nf = b([].join);
const of = /^[0-9a-z]/i;
const af = /^[$()*+./?[\\\]^{|}]/;
const uf = RegExp("^[!\"#%&',\\-:;<=>@`~" + Mi + "]");
const sf = b(of.exec);
const cf = {
    "\t": "t",
    "\n": "n",
    "\v": "v",
    "\f": "f",
    "\r": "r"
};
const ff = (t)=>{
    const e = rf(ef(t, 0), 16);
    if (e.length < 3) {
        return "\\x" + Xc_start(e, 2, "0");
    }
    return "\\u" + Xc_start(e, 4, "0");
};
const lf = !RegExp.escape || RegExp.escape("ab") !== "\\x61b";
Ce({
    target: "RegExp",
    stat: true,
    forced: lf
}, {
    escape (t) {
        !((t)=>{
            if (typeof t === "string") {
                return t;
            }
            throw new TypeError("Argument is not a string");
        })(t);
        for(var e = t.length, r = Array(e), n = 0; n < e; n++){
            const o = tf(t, n);
            if (n === 0 && sf(of, o)) {
                r[n] = ff(o);
            } else if (hasOwn(cf, o)) {
                r[n] = "\\" + cf[o];
            } else if (sf(af, o)) {
                r[n] = "\\" + o;
            } else if (sf(uf, o)) {
                r[n] = ff(o);
            } else {
                const i = ef(o, 0);
                if ((63488 & i) != 55296) {
                    r[n] = o;
                } else if (i >= 56320 || n + 1 >= e || (64512 & ef(t, n + 1)) != 56320) {
                    r[n] = ff(o);
                } else {
                    r[n] = o;
                    r[++n] = tf(t, n);
                }
            }
        }
        return nf(r, "");
    }
});
To("Set", (t)=>function() {
        return t(this, arguments.length ? arguments[0] : undefined);
    }, Fo);
const pf = {
    Set,
    add: b(Set.prototype.add),
    has: b(Set.prototype.has),
    remove: b(Set.prototype.delete),
    proto: Set.prototype
};
const pf_has = pf.has;
const df = (t)=>{
    pf_has(t);
    return t;
};
const pf_Set = pf.Set;
const pf_proto = pf.proto;
const mf = b(pf_proto.forEach);
const bf = b(pf_proto.keys);
const next_1 = bf(new pf_Set).next;
const Sf = (t, e, r)=>{
    if (r) {
        return ci({
            iterator: bf(t),
            next: next_1
        }, e);
    }
    return mf(t, e);
};
const pf_Set_1 = pf.Set;
const pf_add = pf.add;
const xf = (t)=>{
    const e = new pf_Set_1;
    Sf(t, (t)=>{
        pf_add(e, t);
    });
    return e;
};
const Rf = ln(pf.proto, "size", "get") || ((t)=>t.size);
const Pf = "Invalid size";
const If = function(t, e) {
    this.set = t;
    this.size = Math.max(e, 0);
    this.has = J(t.has);
    this.keys = J(t.keys);
};
If.prototype = {
    getIterator () {
        return {
            iterator: t = kt(f(this.keys, this.set)),
            next: t.next,
            done: false
        };
        var t;
    },
    includes (t) {
        return f(this.has, this.set, t);
    }
};
const Tf = (t)=>{
    kt(t);
    const e = +t.size;
    if (e != e) {
        throw new TypeError(Pf);
    }
    const r = ce(e);
    if (r < 0) {
        throw new RangeError(Pf);
    }
    return new If(t, r);
};
const pf_has_1 = pf.has;
const pf_remove = pf.remove;
const difference = function(t) {
    const e = df(this);
    const r = Tf(t);
    const n = xf(e);
    if (Rf(e) <= r.size) {
        Sf(e, (t)=>{
            if (r.includes(t)) {
                pf_remove(n, t);
            }
        });
    } else {
        ci(r.getIterator(), (t)=>{
            if (pf_has_1(e, t)) {
                pf_remove(n, t);
            }
        });
    }
    return n;
};
const Nf = (size)=>({
        size,
        has () {
            return false;
        },
        keys () {
            return {
                next () {
                    return {
                        done: true
                    };
                }
            };
        }
    });
const Cf = (t)=>{
    const e = L("Set");
    try {
        (new e)[t](Nf(0));
        try {
            (new e)[t](Nf(-1));
            return false;
        } catch (t) {
            return true;
        }
    } catch (t) {
        return false;
    }
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("difference")
}, {
    difference
});
const pf_Set_2 = pf.Set;
const pf_add_1 = pf.add;
const pf_has_2 = pf.has;
const intersection = function(t) {
    const e = df(this);
    const r = Tf(t);
    const n = new pf_Set_2;
    if (Rf(e) > r.size) {
        ci(r.getIterator(), (t)=>{
            if (pf_has_2(e, t)) {
                pf_add_1(n, t);
            }
        });
    } else {
        Sf(e, (t)=>{
            if (r.includes(t)) {
                pf_add_1(n, t);
            }
        });
    }
    return n;
};
const zf = !Cf("intersection") || a(()=>String(Array.from(new Set([
        1,
        2,
        3
    ]).intersection(new Set([
        3,
        2
    ])))) !== "3,2");
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: zf
}, {
    intersection
});
const pf_has_3 = pf.has;
const isDisjointFrom = function(t) {
    const e = df(this);
    const r = Tf(t);
    if (Rf(e) <= r.size) {
        return Sf(e, (t)=>{
            if (r.includes(t)) {
                return false;
            }
        }, true) !== false;
    }
    const n = r.getIterator();
    return ci(n, (t)=>{
        if (pf_has_3(e, t)) {
            return Tn(n, "normal", false);
        }
    }) !== false;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("isDisjointFrom")
}, {
    isDisjointFrom
});
const isSubsetOf = function(t) {
    const e = df(this);
    const r = Tf(t);
    return !(Rf(e) > r.size) && Sf(e, (t)=>{
        if (!r.includes(t)) {
            return false;
        }
    }, true) !== false;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("isSubsetOf")
}, {
    isSubsetOf
});
const pf_has_4 = pf.has;
const isSupersetOf = function(t) {
    const e = df(this);
    const r = Tf(t);
    if (Rf(e) < r.size) {
        return false;
    }
    const n = r.getIterator();
    return ci(n, (t)=>{
        if (!pf_has_4(e, t)) {
            return Tn(n, "normal", false);
        }
    }) !== false;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("isSupersetOf")
}, {
    isSupersetOf
});
const pf_add_2 = pf.add;
const pf_has_5 = pf.has;
const pf_remove_1 = pf.remove;
const symmetricDifference = function(t) {
    const e = df(this);
    const r = Tf(t).getIterator();
    const n = xf(e);
    ci(r, (t)=>{
        if (pf_has_5(e, t)) {
            pf_remove_1(n, t);
        } else {
            pf_add_2(n, t);
        }
    });
    return n;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("symmetricDifference")
}, {
    symmetricDifference
});
const pf_add_3 = pf.add;
const union = function(t) {
    const e = df(this);
    const r = Tf(t).getIterator();
    const n = xf(e);
    ci(r, (t)=>{
        pf_add_3(n, t);
    });
    return n;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: !Cf("union")
}, {
    union
});
Ce({
    target: "Set",
    stat: true,
    forced: true
}, {
    from: ei(pf.Set, pf.add, false)
});
Ce({
    target: "Set",
    stat: true,
    forced: true
}, {
    of: ri(pf.Set, pf.add, false)
});
const pf_add_4 = pf.add;
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    addAll () {
        const t = df(this);
        for(let e = 0, r = arguments.length; e < r; e++){
            pf_add_4(t, arguments[e]);
        }
        return t;
    }
});
const pf_remove_2 = pf.remove;
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    deleteAll () {
        let t;
        const e = df(this);
        let r = true;
        for(let n = 0, o = arguments.length; n < o; n++){
            t = pf_remove_2(e, arguments[n]);
            r = r && t;
        }
        return !!r;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    every (t) {
        const e = df(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        return Sf(e, (t)=>{
            if (!r(t, t, e)) {
                return false;
            }
        }, true) !== false;
    }
});
const el = dt("iterator");
const nl = L("Set");
const ol = (t)=>{
    if (((t)=>M(t) && typeof t.size === "number" && T(t.has) && T(t.keys))(t)) {
        return t;
    }
    if (((t)=>{
        if (P(t)) {
            return false;
        }
        const e = Object(t);
        return e[el] !== undefined || "@@iterator" in e || hasOwn(un, pr(e));
    })(t)) {
        return new nl(t);
    }
    return t;
};
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    difference (t) {
        return f(difference, this, ol(t));
    }
});
const pf_Set_3 = pf.Set;
const pf_add_5 = pf.add;
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    filter (t) {
        const e = df(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = new pf_Set_3;
        Sf(e, (t)=>{
            if (r(t, t, e)) {
                pf_add_5(n, t);
            }
        });
        return n;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    find (t) {
        const e = df(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = Sf(e, (t)=>{
            if (r(t, t, e)) {
                return {
                    value: t
                };
            }
        }, true);
        return n && n.value;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    intersection (t) {
        return f(intersection, this, ol(t));
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    isDisjointFrom (t) {
        return f(isDisjointFrom, this, ol(t));
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    isSubsetOf (t) {
        return f(isSubsetOf, this, ol(t));
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    isSupersetOf (t) {
        return f(isSupersetOf, this, ol(t));
    }
});
const ul = b([].join);
const sl = b([].push);
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    join (t) {
        const e = df(this);
        const r = t === undefined ? "," : Wr(t);
        const n = [];
        Sf(e, (t)=>{
            sl(n, t);
        });
        return ul(n, r);
    }
});
const pf_Set_4 = pf.Set;
const pf_add_6 = pf.add;
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    map (t) {
        const e = df(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        const n = new pf_Set_4;
        Sf(e, (t)=>{
            pf_add_6(n, r(t, t, e));
        });
        return n;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    reduce (t) {
        const e = df(this);
        let r = arguments.length < 2;
        let n = r ? undefined : arguments[1];
        J(t);
        Sf(e, (o)=>{
            if (r) {
                r = false;
                n = o;
            } else {
                n = t(n, o, o, e);
            }
        });
        if (r) {
            throw new TypeError("Reduce of empty set with no initial value");
        }
        return n;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    some (t) {
        const e = df(this);
        const r = ar(t, arguments.length > 1 ? arguments[1] : undefined);
        return Sf(e, (t)=>{
            if (r(t, t, e)) {
                return true;
            }
        }, true) === true;
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    symmetricDifference (t) {
        return f(symmetricDifference, this, ol(t));
    }
});
Ce({
    target: "Set",
    proto: true,
    real: true,
    forced: true
}, {
    union (t) {
        return f(union, this, ol(t));
    }
});
const hl = dt("species");
const pl = dt("isConcatSpreadable");
const vl = W >= 51 || !a(()=>{
    const t = [];
    t[pl] = false;
    return t.concat()[0] !== t;
});
const dl = (t)=>{
    if (!M(t)) {
        return false;
    }
    const e = t[pl];
    if (e !== undefined) {
        return !!e;
    }
    return ur(t);
};
const gl = !(vl && (W >= 51 || !a(()=>{
    const t = [];
    (t.constructor = {})[hl] = ()=>({
            foo: 1
        });
    return t.concat(Boolean).foo !== 1;
})));
Ce({
    target: "Array",
    proto: true,
    arity: 1,
    forced: gl
}, {
    concat (t) {
        let e;
        let r;
        let n;
        let o;
        let i;
        const a = it(this);
        const u = xr(a, 0);
        let s = 0;
        e = -1;
        for(n = arguments.length; e < n; e++){
            if (dl(i = -1 === e ? a : arguments[e])) {
                o = de(i);
                Nr(s + o);
                for(r = 0; r < o; r++, s++){
                    if (r in i) {
                        Cn(u, s, i[r]);
                    }
                }
            } else {
                Nr(s + 1);
                Cn(u, s++, i);
            }
        }
        u.length = s;
        return u;
    }
});
const yl = {
    f: dt
};
const ml = Ct.f;
const bl = (t)=>{
    const e = Yn.Symbol || (Yn.Symbol = {});
    if (!hasOwn(e, t)) {
        ml(e, t, {
            value: yl.f(t)
        });
    }
};
const wl = ()=>{
    const t = L("Symbol");
    const e = t && t.prototype;
    const r = e && e.valueOf;
    const n = dt("toPrimitive");
    if (e && !e[n]) {
        ie(e, n, function(t) {
            return f(r, this);
        }, {
            arity: 1
        });
    }
};
const Ar_forEach = Ar.forEach;
const El = Xt("hidden");
const Ol = "Symbol";
const xl = "prototype";
const ne_set_4 = ne.set;
const Pl = ne.getterFor(Ol);
const Al = Object[xl];
let i_Symbol_3 = i.Symbol;
let kl = i_Symbol_3 && i_Symbol_3[xl];
const i_RangeError = i.RangeError;
const i_TypeError_2 = i.TypeError;
const i_QObject = i.QObject;
const Ll = Rt.f;
const Ul = Ct.f;
const Nl = mo.f;
const Cl = v.f;
const _l = b([].push);
const Fl = nt("symbols");
const Bl = nt("op-symbols");
const Dl = nt("wks");
let zl = !i_QObject || !i_QObject[xl] || !i_QObject[xl].findChild;
const Wl = (t, e, r)=>{
    const n = Ll(Al, e);
    n && delete Al[e];
    Ul(t, e, r);
    if (n && t !== Al) {
        Ul(Al, e, n);
    }
};
const ql = u && a(()=>Ve(Ul({}, "a", {
        get () {
            return Ul(this, "a", {
                value: 7
            }).a;
        }
    })).a !== 7) ? Wl : Ul;
const Hl = (tag, description)=>{
    const r = Fl[tag] = Ve(kl);
    ne_set_4(r, {
        type: Ol,
        tag,
        description
    });
    if (!u) {
        r.description = description;
    }
    return r;
};
const defineProperty = (t, e, r)=>{
    if (t === Al) {
        defineProperty(Bl, e, r);
    }
    kt(t);
    const n = bt(e);
    kt(r);
    if (hasOwn(Fl, n)) {
        if (r.enumerable) {
            if (hasOwn(t, El) && t[El][n]) {
                t[El][n] = false;
            }
            r = Ve(r, {
                enumerable: d(0, false)
            });
        } else {
            if (!hasOwn(t, El)) {
                Ul(t, El, d(1, Ve(null)));
            }
            t[El][n] = true;
        }
        return ql(t, n, r);
    }
    return Ul(t, n, r);
};
const defineProperties = (t, e)=>{
    kt(t);
    const r = k(e);
    const n = _e(r).concat(Xl(r));
    Ar_forEach(n, (e)=>{
        if (!(u && !f(Gl, r, e))) {
            defineProperty(t, e, r[e]);
        }
    });
    return t;
};
var Gl = function(t) {
    const e = bt(t);
    const r = f(Cl, this, e);
    return !(this === Al && hasOwn(Fl, e) && !hasOwn(Bl, e)) && (!(r || !hasOwn(this, e) || !hasOwn(Fl, e) || hasOwn(this, El) && this[El][e]) || r);
};
const getOwnPropertyDescriptor = (t, e)=>{
    const r = k(t);
    const n = bt(e);
    if (r !== Al || !hasOwn(Fl, n) || hasOwn(Bl, n)) {
        const o = Ll(r, n);
        if (!(!o || !hasOwn(Fl, n) || hasOwn(r, El) && r[El][n])) {
            o.enumerable = true;
        }
        return o;
    }
};
const getOwnPropertyNames = (t)=>{
    const e = Nl(k(t));
    const r = [];
    Ar_forEach(e, (t)=>{
        if (!(hasOwn(Fl, t) || hasOwn(Jt, t))) {
            _l(r, t);
        }
    });
    return r;
};
var Xl = (t)=>{
    const e = t === Al;
    const r = Nl(e ? Bl : k(t));
    const n = [];
    Ar_forEach(r, (t)=>{
        if (!(!hasOwn(Fl, t) || e && !hasOwn(Al, t))) {
            _l(n, Fl[t]);
        }
    });
    return n;
};
if (!H) {
    i_Symbol_3 = function() {
        if (U(kl, this)) {
            throw new i_TypeError_2("Symbol is not a constructor");
        }
        const t = arguments.length && arguments[0] !== undefined ? Wr(arguments[0]) : undefined;
        const e = lt(t);
        const r = function(t) {
            const n = this === undefined ? i : this;
            if (n === Al) {
                f(r, Bl, t);
            }
            if (hasOwn(n, El) && hasOwn(n[El], e)) {
                n[El][e] = false;
            }
            const o = d(1, t);
            try {
                ql(n, e, o);
            } catch (error) {
                if (!(error instanceof i_RangeError)) {
                    throw error;
                }
                Wl(n, e, o);
            }
        };
        if (u && zl) {
            ql(Al, e, {
                configurable: true,
                set: r
            });
        }
        return Hl(e, t);
    };
    ie(kl = i_Symbol_3[xl], "toString", function() {
        return Pl(this).tag;
    });
    ie(i_Symbol_3, "withoutSetter", (t)=>Hl(lt(t), t));
    v.f = Gl;
    Ct.f = defineProperty;
    Be.f = defineProperties;
    Rt.f = getOwnPropertyDescriptor;
    Oe.f = mo.f = getOwnPropertyNames;
    xe.f = Xl;
    yl.f = (t)=>Hl(dt(t), t);
    if (u) {
        so(kl, "description", {
            configurable: true,
            get () {
                return Pl(this).description;
            }
        });
        ie(Al, "propertyIsEnumerable", Gl, {
            unsafe: true
        });
    }
}
Ce({
    global: true,
    constructor: true,
    wrap: true,
    forced: !H,
    sham: !H
}, {
    Symbol: i_Symbol_3
});
Ar_forEach(_e(Dl), (t)=>{
    bl(t);
});
Ce({
    target: Ol,
    stat: true,
    forced: !H
}, {
    useSetter () {
        zl = true;
    },
    useSimple () {
        zl = false;
    }
});
Ce({
    target: "Object",
    stat: true,
    forced: !H,
    sham: !u
}, {
    create (t, e) {
        if (e === undefined) {
            return Ve(t);
        }
        return defineProperties(Ve(t), e);
    },
    defineProperty,
    defineProperties,
    getOwnPropertyDescriptor
});
Ce({
    target: "Object",
    stat: true,
    forced: !H
}, {
    getOwnPropertyNames
});
wl();
an(i_Symbol_3, Ol);
Jt[El] = true;
const Jl = H && !!Symbol.for && !!Symbol.keyFor;
const Ql = nt("string-to-symbol-registry");
const Zl = nt("symbol-to-string-registry");
Ce({
    target: "Symbol",
    stat: true,
    forced: !Jl
}, {
    for (t) {
        const e = Wr(t);
        if (hasOwn(Ql, e)) {
            return Ql[e];
        }
        const r = L("Symbol")(e);
        Ql[e] = r;
        Zl[r] = e;
        return r;
    }
});
const th = nt("symbol-to-string-registry");
Ce({
    target: "Symbol",
    stat: true,
    forced: !Jl
}, {
    keyFor (t) {
        if (!G(t)) {
            throw new TypeError(Y(t) + " is not a symbol");
        }
        if (hasOwn(th, t)) {
            return th[t];
        }
    }
});
const eh = b([].push);
const nh = L("JSON", "stringify");
const oh = b(/./.exec);
const ih = b("".charAt);
const ah = b("".charCodeAt);
const uh = b("".replace);
const sh = b(1..toString);
const ch = /[\uD800-\uDFFF]/g;
const fh = /^[\uD800-\uDBFF]$/;
const lh = /^[\uDC00-\uDFFF]$/;
const hh = !H || a(()=>{
    const a_1 = L("Symbol")("stringify detection");
    return nh([
        a_1
    ]) !== "[null]" || nh({
        a: a_1
    }) !== "{}" || nh(Object(a_1)) !== "{}";
});
const ph = a(()=>nh("\udf06\ud834") !== '"\\udf06\\ud834"' || nh("\udead") !== '"\\udead"');
const vh = function(t, e) {
    const r = vo(arguments);
    const n = ((t)=>{
        if (T(t)) {
            return t;
        }
        if (ur(t)) {
            for(var e = t.length, r = [], n = 0; n < e; n++){
                const o = t[n];
                if (typeof o === "string") {
                    eh(r, o);
                } else if (!(typeof o !== "number" && E(o) !== "Number" && E(o) !== "String")) {
                    eh(r, Wr(o));
                }
            }
            const i = r.length;
            let a = true;
            return function(t, e) {
                if (a) {
                    a = false;
                    return e;
                }
                if (ur(this)) {
                    return e;
                }
                for(let n = 0; n < i; n++){
                    if (r[n] === t) {
                        return e;
                    }
                }
            };
        }
    })(e);
    if (T(n) || t !== undefined && !G(t)) {
        r[1] = function(t, e) {
            if (T(n)) {
                e = f(n, this, String(t), e);
            }
            if (!G(e)) {
                return e;
            }
        };
        return Ra(nh, null, r);
    }
};
const dh = (t, e, r)=>{
    const n = ih(r, e - 1);
    const o = ih(r, e + 1);
    if (oh(fh, t) && !oh(lh, o) || oh(lh, t) && !oh(fh, n)) {
        return "\\u" + sh(ah(t, 0), 16);
    }
    return t;
};
if (nh) {
    Ce({
        target: "JSON",
        stat: true,
        arity: 3,
        forced: hh || ph
    }, {
        stringify (t, e, r) {
            const n = vo(arguments);
            const o = Ra(hh ? vh : nh, null, n);
            if (ph && typeof o === "string") {
                return uh(o, ch, dh);
            }
            return o;
        }
    });
}
const gh = !H || a(()=>{
    xe.f(1);
});
Ce({
    target: "Object",
    stat: true,
    forced: gh
}, {
    getOwnPropertySymbols (t) {
        const e = xe.f;
        if (e) {
            return e(it(t));
        }
        return [];
    }
});
bl("asyncIterator");
const i_Symbol_4 = i.Symbol;
const mh = i_Symbol_4 && i_Symbol_4.prototype;
if (u && T(i_Symbol_4) && (!("description" in mh) || i_Symbol_4().description !== undefined)) {
    const bh = {};
    const Symbol = function() {
        const t = arguments.length < 1 || arguments[0] === undefined ? undefined : Wr(arguments[0]);
        const e = U(mh, this) ? new i_Symbol_4(t) : t === undefined ? i_Symbol_4() : i_Symbol_4(t);
        if (t === "") {
            bh[e] = true;
        }
        return e;
    };
    Ae(Symbol, i_Symbol_4);
    Symbol.prototype = mh;
    mh.constructor = Symbol;
    const Sh = String(i_Symbol_4("description detection")) === "Symbol(description detection)";
    const Eh = b(mh.valueOf);
    const Oh = b(mh.toString);
    const xh = /^Symbol\((.*)\)[^)]+$/;
    const Rh = b("".replace);
    const Ph = b("".slice);
    so(mh, "description", {
        configurable: true,
        get () {
            const t = Eh(this);
            if (hasOwn(bh, t)) {
                return "";
            }
            const e = Oh(t);
            const r = Sh ? Ph(e, 7, -1) : Rh(e, xh, "$1");
            if (r === "") {
                return undefined;
            }
            return r;
        }
    });
    Ce({
        global: true,
        constructor: true,
        forced: true
    }, {
        Symbol
    });
}
bl("hasInstance");
bl("isConcatSpreadable");
bl("iterator");
bl("match");
bl("matchAll");
bl("replace");
bl("search");
bl("species");
bl("split");
bl("toPrimitive");
wl();
bl("toStringTag");
an(L("Symbol"), "Symbol");
bl("unscopables");
an(i.JSON, "JSON", true);
an(Math, "Math", true);
const Ah = Ct.f;
const jh = dt("metadata");
if (Function.prototype[jh] === undefined) {
    Ah(Function.prototype, jh, {
        value: null
    });
}
const Ih = Ct.f;
const Th = Rt.f;
const i_Symbol_5 = i.Symbol;
bl("asyncDispose");
if (i_Symbol_5) {
    const Lh = Th(i_Symbol_5, "asyncDispose");
    if (Lh.enumerable && Lh.configurable && Lh.writable) {
        Ih(i_Symbol_5, "asyncDispose", {
            value: Lh.value,
            enumerable: false,
            configurable: false,
            writable: false
        });
    }
}
const Uh = Ct.f;
const Nh = Rt.f;
const i_Symbol_6 = i.Symbol;
bl("dispose");
if (i_Symbol_6) {
    const _h = Nh(i_Symbol_6, "dispose");
    if (_h.enumerable && _h.configurable && _h.writable) {
        Uh(i_Symbol_6, "dispose", {
            value: _h.value,
            enumerable: false,
            configurable: false,
            writable: false
        });
    }
}
bl("metadata");
const Fh = L("Symbol");
const Fh_keyFor = Fh.keyFor;
const Dh = b(Fh.prototype.valueOf);
const zh = Fh.isRegisteredSymbol || ((t)=>{
    try {
        return Fh_keyFor(Dh(t)) !== undefined;
    } catch (t) {
        return false;
    }
});
Ce({
    target: "Symbol",
    stat: true
}, {
    isRegisteredSymbol: zh
});
const Wh = L("Symbol");
const Wh_isWellKnownSymbol = Wh.isWellKnownSymbol;
const Hh = L("Object", "getOwnPropertyNames");
const $h = b(Wh.prototype.valueOf);
const Kh = nt("wks");
for(let Gh = 0, Vh = Hh(Wh), Yh = Vh.length; Gh < Yh; Gh++){
    try {
        const Xh = Vh[Gh];
        if (G(Wh[Xh])) {
            dt(Xh);
        }
    } catch (t) {}
}
const Jh = (t)=>{
    if (Wh_isWellKnownSymbol && Wh_isWellKnownSymbol(t)) {
        return true;
    }
    try {
        const e = $h(t);
        for(let r = 0, n = Hh(Kh), o = n.length; r < o; r++){
            if (Kh[n[r]] == e) {
                return true;
            }
        }
    } catch (t) {}
    return false;
};
Ce({
    target: "Symbol",
    stat: true,
    forced: true
}, {
    isWellKnownSymbol: Jh
});
bl("customMatcher");
bl("observable");
Ce({
    target: "Symbol",
    stat: true,
    name: "isRegisteredSymbol"
}, {
    isRegistered: zh
});
Ce({
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true
}, {
    isWellKnown: Jh
});
bl("matcher");
bl("metadataKey");
bl("patternMatch");
bl("replaceAll");
yl.f("asyncIterator");
const Gr_codeAt = Gr.codeAt;
Ce({
    target: "String",
    proto: true
}, {
    codePointAt (t) {
        return Gr_codeAt(this, t);
    }
});
Ze("String", "codePointAt");
const tp = (t)=>{
    if (es(t)) {
        throw new TypeError("The method doesn't accept regular expressions");
    }
    return t;
};
const ep = dt("match");
const rp = (t)=>{
    const e = /./;
    try {
        "/./"[t](e);
    } catch (r) {
        try {
            e[ep] = false;
            return "/./"[t](e);
        } catch (t) {}
    }
    return false;
};
const np = Rt.f;
const op = or("".slice);
const ap = rp("endsWith");
const up = !ap && !!(()=>{
    const t = np(String.prototype, "endsWith");
    return t && !t.writable;
})();
Ce({
    target: "String",
    proto: true,
    forced: !up && !ap
}, {
    endsWith (t) {
        const e = Wr(j(this));
        tp(t);
        const r = arguments.length > 1 ? arguments[1] : undefined;
        const e_length = e.length;
        const o = r === undefined ? e_length : Math.min(ve(r), e_length);
        const i = Wr(t);
        return op(e, o - i.length, o) === i;
    }
});
Ze("String", "endsWith");
const lp = b([].join);
Ce({
    target: "String",
    stat: true,
    arity: 1,
    forced: !!String.fromCodePoint && String.fromCodePoint.length !== 1
}, {
    fromCodePoint (t) {
        let e;
        const r = [];
        for(let n = arguments.length, o = 0; n > o;){
            e = +arguments[o++];
            if (he(e, 1114111) !== e) {
                throw new RangeError(e + " is not a valid code point");
            }
            r[o] = e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + ((e -= 65536) >> 10), e % 1024 + 56320);
        }
        return lp(r, "");
    }
});
const hp = b("".indexOf);
Ce({
    target: "String",
    proto: true,
    forced: !rp("includes")
}, {
    includes (t) {
        return !!~hp(Wr(j(this)), Wr(tp(t)), arguments.length > 1 ? arguments[1] : undefined);
    }
});
Ze("String", "includes");
b(un.String);
const pp = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(_);
const Xc_start_1 = Xc.start;
Ce({
    target: "String",
    proto: true,
    forced: pp
}, {
    padStart (t) {
        return Xc_start_1(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
});
Ze("String", "padStart");
const Xc_end = Xc.end;
Ce({
    target: "String",
    proto: true,
    forced: pp
}, {
    padEnd (t) {
        return Xc_end(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
});
Ze("String", "padEnd");
const gp = b([].push);
const yp = b([].join);
Ce({
    target: "String",
    stat: true
}, {
    raw (t) {
        const e = k(it(t).raw);
        const r = de(e);
        if (!r) {
            return "";
        }
        const arguments_length = arguments.length;
        const o = [];
        let i = 0;
        while(true){
            gp(o, Wr(e[i++]));
            if (i === r) {
                return yp(o, "");
            }
            if (i < arguments_length) {
                gp(o, Wr(arguments[i]));
            }
        }
    }
});
Ce({
    target: "String",
    proto: true
}, {
    repeat
});
Ze("String", "repeat");
const mp = Rt.f;
const bp = or("".slice);
const Sp = rp("startsWith");
const Ep = !Sp && !!(()=>{
    const t = mp(String.prototype, "startsWith");
    return t && !t.writable;
})();
Ce({
    target: "String",
    proto: true,
    forced: !Ep && !Sp
}, {
    startsWith (t) {
        const e = Wr(j(this));
        tp(t);
        const r = ve(Math.min(arguments.length > 1 ? arguments[1] : undefined, e.length));
        const n = Wr(t);
        return bp(e, r, r + n.length) === n;
    }
});
Ze("String", "startsWith");
const zt_PROPER_2 = zt.PROPER;
const xp = (t)=>a(()=>!!Mi[t]() || "​᠎"[t]() !== "​᠎" || zt_PROPER_2 && Mi[t].name !== t);
const _i_start = _i.start;
const Pp = xp("trimStart") ? function() {
    return _i_start(this);
} : "".trimStart;
Ce({
    target: "String",
    proto: true,
    name: "trimStart",
    forced: "".trimLeft !== Pp
}, {
    trimLeft: Pp
});
Ce({
    target: "String",
    proto: true,
    name: "trimStart",
    forced: "".trimStart !== Pp
}, {
    trimStart: Pp
});
Ze("String", "trimLeft");
const _i_end = _i.end;
const jp = xp("trimEnd") ? function() {
    return _i_end(this);
} : "".trimEnd;
Ce({
    target: "String",
    proto: true,
    name: "trimEnd",
    forced: "".trimRight !== jp
}, {
    trimRight: jp
});
Ce({
    target: "String",
    proto: true,
    name: "trimEnd",
    forced: "".trimEnd !== jp
}, {
    trimEnd: jp
});
Ze("String", "trimRight");
const Ip = (t)=>{
    if (!u) {
        return i[t];
    }
    const e = Object.getOwnPropertyDescriptor(i, t);
    return e && e.value;
};
const Tp = dt("iterator");
const Mp = !a(()=>{
    const t = new URL("b?a=1&b=2&c=3", "https://a");
    const t_searchParams = t.searchParams;
    const r = new URLSearchParams("a=1&a=2&b=3");
    let n = "";
    t.pathname = "c%20d";
    t_searchParams.forEach((t, r)=>{
        t_searchParams.delete("b");
        n += r + t;
    });
    r.delete("a", 2);
    r.delete("b", undefined);
    return !t_searchParams.size && !u || !t_searchParams.sort || t.href !== "https://a/c%20d?a=1&c=3" || t_searchParams.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !t_searchParams[Tp] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("https://x", undefined).host !== "x";
});
const Up = (t, e)=>{
    if (t < e) {
        throw new TypeError("Not enough arguments");
    }
    return t;
};
const Cp = (t, e)=>{
    const t_length = t.length;
    if (t_length < 8) {
        let n;
        let o;
        for(let i = 1; i < t_length;){
            o = i;
            for(n = t[i]; o && e(t[o - 1], n) > 0;){
                t[o] = t[--o];
            }
            if (o !== i++) {
                t[o] = n;
            }
        }
    } else {
        const a = Math.floor(t_length / 2);
        const u = Cp(vo(t, 0, a), e);
        const s = Cp(vo(t, a), e);
        for(let c = u.length, f = s.length, l = 0, h = 0; l < c || h < f;){
            t[l + h] = l < c && h < f ? e(u[l], s[h]) <= 0 ? u[l++] : s[h++] : l < c ? u[l++] : s[h++];
        }
    }
    return t;
};
const _p = Cp;
const Fp = dt("iterator");
const Bp = "URLSearchParams";
const Dp = Bp + "Iterator";
const ne_set_5 = ne.set;
const getState = ne.getterFor(Bp);
const qp = ne.getterFor(Dp);
const Hp = Ip("fetch");
const $p = Ip("Request");
const Kp = Ip("Headers");
const Gp = $p && $p.prototype;
const Vp = Kp && Kp.prototype;
const i_TypeError_3 = i.TypeError;
const i_encodeURIComponent = i.encodeURIComponent;
const Qp = L("String", "fromCodePoint");
const Zp = parseInt;
const tv = b("".charAt);
const ev = b([].join);
const rv = b([].push);
const nv = b("".replace);
const ov = b([].shift);
const iv = b([].splice);
const av = b("".split);
const uv = b("".slice);
const sv = b(/./.exec);
const cv = /\+/g;
const fv = /^[0-9a-f]+$/i;
const lv = (t, e)=>{
    const r = uv(t, e, e + 2);
    if (sv(fv, r)) {
        return Zp(r, 16);
    }
    return NaN;
};
const hv = (t)=>{
    let e = 0;
    for(let r = 128; r > 0 && (t & r) != 0; r >>= 1){
        e++;
    }
    return e;
};
const pv = (t)=>{
    let e = null;
    switch(t.length){
        case 1:
            e = t[0];
            break;
        case 2:
            e = (31 & t[0]) << 6 | 63 & t[1];
            break;
        case 3:
            e = (15 & t[0]) << 12 | (63 & t[1]) << 6 | 63 & t[2];
            break;
        case 4:
            e = (7 & t[0]) << 18 | (63 & t[1]) << 12 | (63 & t[2]) << 6 | 63 & t[3];
    }
    if (e > 1114111) {
        return null;
    }
    return e;
};
const vv = (t)=>{
    for(var e = (t = nv(t, cv, " ")).length, r = "", n = 0; n < e;){
        let o = tv(t, n);
        if (o === "%") {
            if (tv(t, n + 1) === "%" || n + 3 > e) {
                r += "%";
                n++;
                continue;
            }
            const i = lv(t, n + 1);
            if (i != i) {
                r += o;
                n++;
                continue;
            }
            n += 2;
            const a = hv(i);
            if (a === 0) {
                o = String.fromCharCode(i);
            } else {
                if (a === 1 || a > 4) {
                    r += "�";
                    n++;
                    continue;
                }
                const u = [
                    i
                ];
                for(let s = 1; s < a && !(3 + ++n > e || tv(t, n) !== "%");){
                    const c = lv(t, n + 1);
                    if (c != c) {
                        n += 3;
                        break;
                    }
                    if (c > 191 || c < 128) {
                        break;
                    }
                    rv(u, c);
                    n += 2;
                    s++;
                }
                if (u.length !== a) {
                    r += "�";
                    continue;
                }
                const f = pv(u);
                if (f === null) {
                    r += "�";
                } else {
                    o = Qp(f);
                }
            }
        }
        r += o;
        n++;
    }
    return r;
};
const dv = /[!'()~]|%20/g;
const gv = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
};
const yv = (t)=>gv[t];
const mv = (t)=>nv(i_encodeURIComponent(t), dv, yv);
const bv = fn(function(t, e) {
    ne_set_5(this, {
        type: Dp,
        target: getState(t).entries,
        index: 0,
        kind: e
    });
}, Bp, function() {
    const t = qp(this);
    const t_target = t.target;
    const r = t.index++;
    if (!t_target || r >= t_target.length) {
        t.target = null;
        return Pn(undefined, true);
    }
    const n = t_target[r];
    switch(t.kind){
        case "keys":
            return Pn(n.key, false);
        case "values":
            return Pn(n.value, false);
    }
    return Pn([
        n.key,
        n.value
    ], false);
}, true);
const wv = function(t) {
    this.entries = [];
    this.url = null;
    t !== undefined && (M(t) ? this.parseObject(t) : this.parseQuery(typeof t === "string" ? tv(t, 0) === "?" ? uv(t, 1) : t : Wr(t)));
};
wv.prototype = {
    type: Bp,
    bindURL (t) {
        this.url = t;
        this.update();
    },
    parseObject (t) {
        let e;
        let r;
        let n;
        let o;
        let i;
        let a;
        let u;
        const entries = this.entries;
        const c = Fn(t);
        if (c) {
            for(r = (e = Dn(t, c)).next; !(n = f(r, e)).done;){
                o = Dn(kt(n.value));
                if ((a = f(i = o.next, o)).done || (u = f(i, o)).done || !f(i, o).done) {
                    throw new i_TypeError_3("Expected sequence with length 2");
                }
                rv(entries, {
                    key: Wr(a.value),
                    value: Wr(u.value)
                });
            }
        } else {
            for(const l in t){
                if (hasOwn(t, l)) {
                    rv(entries, {
                        key: l,
                        value: Wr(t[l])
                    });
                }
            }
        }
    },
    parseQuery (t) {
        if (t) {
            let e;
            let r;
            const n = this.entries;
            for(let o = av(t, "&"), i = 0; i < o.length;){
                if ((e = o[i++]).length) {
                    r = av(e, "=");
                    rv(n, {
                        key: vv(ov(r)),
                        value: vv(ev(r, "="))
                    });
                }
            }
        }
    },
    serialize () {
        let t;
        for(var e = this.entries, r = [], n = 0; n < e.length;){
            t = e[n++];
            rv(r, mv(t.key) + "=" + mv(t.value));
        }
        return ev(r, "&");
    },
    update () {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
    },
    updateURL () {
        if (this.url) {
            this.url.update();
        }
    }
};
const URLSearchParams_1 = function() {
    ko(this, Sv_prototype);
    const t = ne_set_5(this, new wv(arguments.length > 0 ? arguments[0] : undefined));
    if (!u) {
        this.size = t.entries.length;
    }
};
var Sv_prototype = URLSearchParams_1.prototype;
Mo(Sv_prototype, {
    append (t, e) {
        const r = getState(this);
        Up(arguments.length, 2);
        rv(r.entries, {
            key: Wr(t),
            value: Wr(e)
        });
        u || this.length++;
        r.updateURL();
    },
    delete (t) {
        const e = getState(this);
        const r = Up(arguments.length, 1);
        for(var n = e.entries, o = Wr(t), i = r < 2 ? undefined : arguments[1], a = i === undefined ? i : Wr(i), s = 0; s < n.length;){
            const c = n[s];
            if (c.key !== o || a !== undefined && c.value !== a) {
                s++;
            } else {
                iv(n, s, 1);
                if (a !== undefined) {
                    break;
                }
            }
        }
        if (!u) {
            this.size = n.length;
        }
        e.updateURL();
    },
    get (t) {
        const entries = getState(this).entries;
        Up(arguments.length, 1);
        const r = Wr(t);
        for(let n = 0; n < entries.length; n++){
            if (entries[n].key === r) {
                return entries[n].value;
            }
        }
        return null;
    },
    getAll (t) {
        const entries = getState(this).entries;
        Up(arguments.length, 1);
        const r = Wr(t);
        const n = [];
        for(let o = 0; o < entries.length; o++){
            if (entries[o].key === r) {
                rv(n, entries[o].value);
            }
        }
        return n;
    },
    has (t) {
        for(let e = getState(this).entries, r = Up(arguments.length, 1), n = Wr(t), o = r < 2 ? undefined : arguments[1], i = o === undefined ? o : Wr(o), a = 0; a < e.length;){
            const u = e[a++];
            if (u.key === n && (i === undefined || u.value === i)) {
                return true;
            }
        }
        return false;
    },
    set (t, e) {
        const r = getState(this);
        Up(arguments.length, 1);
        let n;
        for(var o = r.entries, i = false, a = Wr(t), s = Wr(e), c = 0; c < o.length; c++){
            (n = o[c]).key === a && (i ? iv(o, c--, 1) : (i = true, n.value = s));
        }
        if (!i) {
            rv(o, {
                key: a,
                value: s
            });
        }
        if (!u) {
            this.size = o.length;
        }
        r.updateURL();
    },
    sort () {
        const t = getState(this);
        _p(t.entries, (t, e)=>{
            if (t.key > e.key) {
                return 1;
            }
            return -1;
        });
        t.updateURL();
    },
    forEach (t) {
        let e;
        for(let r = getState(this).entries, n = ar(t, arguments.length > 1 ? arguments[1] : undefined), o = 0; o < r.length;){
            n((e = r[o++]).value, e.key, this);
        }
    },
    keys () {
        return new bv(this, "keys");
    },
    values () {
        return new bv(this, "values");
    },
    entries () {
        return new bv(this, "entries");
    }
}, {
    enumerable: true
});
ie(Sv_prototype, Fp, Sv_prototype.entries, {
    name: "entries"
});
ie(Sv_prototype, "toString", function() {
    return getState(this).serialize();
}, {
    enumerable: true
});
if (u) {
    so(Sv_prototype, "size", {
        get () {
            return getState(this).entries.length;
        },
        configurable: true,
        enumerable: true
    });
}
an(URLSearchParams_1, Bp);
Ce({
    global: true,
    constructor: true,
    forced: !Mp
}, {
    URLSearchParams: URLSearchParams_1
});
if (!Mp && T(Kp)) {
    const Ov = b(Vp.has);
    const xv = b(Vp.set);
    const Rv = (t)=>{
        if (M(t)) {
            let e;
            const r = t.body;
            if (pr(r) === Bp) {
                e = t.headers ? new Kp(t.headers) : new Kp;
                if (!Ov(e, "content-type")) {
                    xv(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
                return Ve(t, {
                    body: d(0, Wr(r)),
                    headers: d(0, e)
                });
            }
        }
        return t;
    };
    if (T(Hp)) {
        Ce({
            global: true,
            enumerable: true,
            dontCallGetSet: true,
            forced: true
        }, {
            fetch (t) {
                return Hp(t, arguments.length > 1 ? Rv(arguments[1]) : {});
            }
        });
    }
    if (T($p)) {
        const Request = function(t) {
            ko(this, Gp);
            return new $p(t, arguments.length > 1 ? Rv(arguments[1]) : {});
        };
        Gp.constructor = Request;
        Request.prototype = Gp;
        Ce({
            global: true,
            constructor: true,
            dontCallGetSet: true,
            forced: true
        }, {
            Request
        });
    }
}
const Av = {
    URLSearchParams: URLSearchParams_1,
    getState
};
const jv = URLSearchParams;
const jv_prototype = jv.prototype;
const Iv = b(jv_prototype.append);
const Tv = b(jv_prototype.delete);
const Mv = b(jv_prototype.forEach);
const Lv = b([].push);
const Uv = new jv("a=1&a=2&b=3");
Uv.delete("a", 1);
Uv.delete("b", undefined);
if (Uv + "" != "a=2") {
    ie(jv_prototype, "delete", function(t) {
        const arguments_length = arguments.length;
        const r = arguments_length < 2 ? undefined : arguments[1];
        if (arguments_length && r === undefined) {
            return Tv(this, t);
        }
        const n = [];
        Mv(this, (t, e)=>{
            Lv(n, {
                key: e,
                value: t
            });
        });
        Up(arguments_length, 1);
        let o;
        const i = Wr(t);
        const a = Wr(r);
        for(var u = 0, s = 0, c = false, f = n.length; u < f;){
            o = n[u++];
            if (c || o.key === i) {
                c = true;
                Tv(this, o.key);
            } else {
                s++;
            }
        }
        while(s < f){
            if (!((o = n[s++]).key === i && o.value === a)) {
                Iv(this, o.key, o.value);
            }
        }
    }, {
        enumerable: true,
        unsafe: true
    });
}
const Nv = URLSearchParams;
const Nv_prototype = Nv.prototype;
const _v = b(Nv_prototype.getAll);
const Fv = b(Nv_prototype.has);
const Bv = new Nv("a=1");
if (!(!Bv.has("a", 2) && Bv.has("a", undefined))) {
    ie(Nv_prototype, "has", function(t) {
        const arguments_length = arguments.length;
        const r = arguments_length < 2 ? undefined : arguments[1];
        if (arguments_length && r === undefined) {
            return Fv(this, t);
        }
        const n = _v(this, t);
        Up(arguments_length, 1);
        const o = Wr(r);
        for(let i = 0; i < n.length;){
            if (n[i++] === o) {
                return true;
            }
        }
        return false;
    }, {
        enumerable: true,
        unsafe: true
    });
}
const URLSearchParams_prototype = URLSearchParams.prototype;
const zv = b(URLSearchParams_prototype.forEach);
if (u && !("size" in URLSearchParams_prototype)) {
    so(URLSearchParams_prototype, "size", {
        get () {
            let t = 0;
            zv(this, ()=>{
                t++;
            });
            return t;
        },
        configurable: true,
        enumerable: true
    });
}
let Wv;
const $v = b([].concat);
const Kv = !Object.assign || a(()=>{
    if (u && ({
        b: 1,
        ...Object.assign(Object.defineProperty({}, "a", {
            enumerable: true,
            get () {
                Object.defineProperty(this, "b", {
                    value: 3,
                    enumerable: false
                });
            }
        }), {
            b: 2
        })
    }).b !== 1) {
        return true;
    }
    const t = {};
    const e = {};
    const r = Symbol("assign detection");
    const n = "abcdefghijklmnopqrst";
    t[r] = 7;
    n.split("").forEach((t)=>{
        e[t] = t;
    });
    return ({
        ...t
    })[r] !== 7 || _e({
        ...e
    }).join("") !== n;
}) ? function(t, e) {
    const r = it(t);
    for(let n = arguments.length, o = 1, i = xe.f, a = v.f; n > o;){
        let s;
        const c = R(arguments[o++]);
        const l = i ? $v(_e(c), i(c)) : _e(c);
        for(let h = l.length, p = 0; h > p;){
            s = l[p++];
            if (!(u && !f(a, c, s))) {
                r[s] = c[s];
            }
        }
    }
    return r;
} : Object.assign;
const Gv = 2147483647;
const Vv = /[^\0-\u007E]/;
const Yv = /[.\u3002\uFF0E\uFF61]/g;
const Xv = "Overflow: input needs wider integers to process";
const Qv = b(Yv.exec);
const ed = b("".charCodeAt);
const rd = b([].join);
const nd = b([].push);
const od = b("".replace);
const id = b("".split);
const ad = b("".toLowerCase);
const ud = (t)=>t + 22 + 75 * (t < 26);
const sd = (t, e, r)=>{
    let n = 0;
    t = r ? Math.floor(t / 700) : t >> 1;
    for(t += Math.floor(t / e); t > 455;){
        t = Math.floor(t / 35);
        n += 36;
    }
    return Math.floor(n + 36 * t / (t + 38));
};
const cd = (t)=>{
    const e = [];
    t = ((t)=>{
        const e = [];
        for(let r = 0, n = t.length; r < n;){
            const o = ed(t, r++);
            if (o >= 55296 && o <= 56319 && r < n) {
                const i = ed(t, r++);
                if ((64512 & i) == 56320) {
                    nd(e, ((1023 & o) << 10) + (1023 & i) + 65536);
                } else {
                    nd(e, o);
                    r--;
                }
            } else {
                nd(e, o);
            }
        }
        return e;
    })(t);
    let r;
    let n;
    const t_length = t.length;
    let i = 128;
    let a = 0;
    let u = 72;
    for(r = 0; r < t.length; r++){
        if ((n = t[r]) < 128) {
            nd(e, String.fromCharCode(n));
        }
    }
    const e_length = e.length;
    let c = e_length;
    for(e_length && nd(e, "-"); c < t_length;){
        let f = Gv;
        for(r = 0; r < t.length; r++){
            if ((n = t[r]) >= i && n < f) {
                f = n;
            }
        }
        const l = c + 1;
        if (f - i > Math.floor((Gv - a) / l)) {
            throw new RangeError(Xv);
        }
        a += (f - i) * l;
        i = f;
        for(r = 0; r < t.length; r++){
            if ((n = t[r]) < i && ++a > Gv) {
                throw new RangeError(Xv);
            }
            if (n === i) {
                let h = a;
                let p = 36;
                while(true){
                    const v = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                    if (h < v) {
                        break;
                    }
                    const d = h - v;
                    const g = 36 - v;
                    nd(e, String.fromCharCode(ud(v + d % g)));
                    h = Math.floor(d / g);
                    p += 36;
                }
                nd(e, String.fromCharCode(ud(h)));
                u = sd(a, l, c === e_length);
                a = 0;
                c++;
            }
        }
        a++;
        i++;
    }
    return rd(e, "");
};
const Gr_codeAt_1 = Gr.codeAt;
const ne_set_6 = ne.set;
const hd = ne.getterFor("URL");
const Av_URLSearchParams = Av.URLSearchParams;
const Av_getState = Av.getState;
const i_URL = i.URL;
const i_TypeError_4 = i.TypeError;
const i_parseInt_1 = i.parseInt;
const wd = b("".charAt);
const Sd = b(/./.exec);
const Ed = b([].join);
const Od = b(1..toString);
const xd = b([].pop);
const Rd = b([].push);
const Pd = b("".replace);
const Ad = b([].shift);
const jd = b("".split);
const kd = b("".slice);
const Id = b("".toLowerCase);
const Td = b([].unshift);
const Md = "Invalid scheme";
const Ld = "Invalid host";
const Ud = "Invalid port";
const Nd = /[a-z]/i;
const Cd = /[\d+-.a-z]/i;
const _d = /\d/;
const Fd = /^0x/i;
const Bd = /^[0-7]+$/;
const Dd = /^\d+$/;
const zd = /^[\da-f]+$/i;
const Wd = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const qd = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const Hd = /^[\u0000-\u0020]+/;
const $d = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const Kd = /[\t\n\r]/g;
const Gd = (t)=>{
    let e;
    let r;
    let n;
    let o;
    if (typeof t === "number") {
        e = [];
        for(r = 0; r < 4; r++){
            Td(e, t % 256);
            t = Math.floor(t / 256);
        }
        return Ed(e, ".");
    }
    if (typeof t === "object") {
        e = "";
        n = ((t)=>{
            let e = null;
            let r = 1;
            let n = null;
            let o = 0;
            for(let i = 0; i < 8; i++){
                if (t[i] !== 0) {
                    if (o > r) {
                        e = n;
                        r = o;
                    }
                    n = null;
                    o = 0;
                } else {
                    if (n === null) {
                        n = i;
                    }
                    ++o;
                }
            }
            if (o > r) {
                return n;
            }
            return e;
        })(t);
        for(r = 0; r < 8; r++){
            o && t[r] === 0 || (o && (o = false), n === r ? (e += r ? ":" : "::", o = true) : (e += Od(t[r], 16), r < 7 && (e += ":")));
        }
        return "[" + e + "]";
    }
    return t;
};
const Vd = {};
const Yd = Kv({}, Vd, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
});
const Xd = Kv({}, Yd, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
});
const Jd = Kv({}, Xd, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
});
const Qd = (t, e)=>{
    const r = Gr_codeAt_1(t, 0);
    if (r > 32 && r < 127 && !hasOwn(e, t)) {
        return t;
    }
    return encodeURIComponent(t);
};
const Zd = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const tg = (t, e)=>{
    let r;
    return t.length === 2 && Sd(Nd, wd(t, 0)) && ((r = wd(t, 1)) === ":" || !e && r === "|");
};
const eg = (t)=>{
    let e;
    return t.length > 1 && tg(kd(t, 0, 2)) && (t.length === 2 || (e = wd(t, 2)) === "/" || e === "\\" || e === "?" || e === "#");
};
const rg = (t)=>t === "." || Id(t) === "%2e";
const ng = {};
const og = {};
const ig = {};
const ag = {};
const ug = {};
const sg = {};
const cg = {};
const fg = {};
const lg = {};
const hg = {};
const pg = {};
const vg = {};
const dg = {};
const gg = {};
const yg = {};
const mg = {};
const bg = {};
const wg = {};
const Sg = {};
const Eg = {};
const Og = {};
const xg = function(t, e, r) {
    let n;
    let o;
    let i;
    const a = Wr(t);
    if (e) {
        if (o = this.parse(a)) {
            throw new i_TypeError_4(o);
        }
        this.searchParams = null;
    } else {
        if (r !== undefined) {
            n = new xg(r, true);
        }
        if (o = this.parse(a, null, n)) {
            throw new i_TypeError_4(o);
        }
        (i = Av_getState(new Av_URLSearchParams)).bindURL(this);
        this.searchParams = i;
    }
};
xg.prototype = {
    type: "URL",
    parse (t, e, r) {
        let n;
        let o;
        let i;
        let a;
        let u;
        const s = this;
        let c = e || ng;
        let f = 0;
        let l = "";
        let h = false;
        let p = false;
        let v = false;
        t = Wr(t);
        if (!e) {
            s.scheme = "";
            s.username = "";
            s.password = "";
            s.host = null;
            s.port = null;
            s.path = [];
            s.query = null;
            s.fragment = null;
            s.cannotBeABaseURL = false;
            t = Pd(t, Hd, "");
            t = Pd(t, $d, "$1");
        }
        t = Pd(t, Kd, "");
        for(n = from(t); f <= n.length;){
            o = n[f];
            switch(c){
                case ng:
                    if (!o || !Sd(Nd, o)) {
                        if (e) {
                            return Md;
                        }
                        c = ig;
                        continue;
                    }
                    l += Id(o);
                    c = og;
                    break;
                case og:
                    if (o && (Sd(Cd, o) || o === "+" || o === "-" || o === ".")) {
                        l += Id(o);
                    } else {
                        if (o !== ":") {
                            if (e) {
                                return Md;
                            }
                            l = "";
                            c = ig;
                            f = 0;
                            continue;
                        }
                        if (e && (s.isSpecial() !== hasOwn(Zd, l) || l === "file" && (s.includesCredentials() || s.port !== null) || s.scheme === "file" && !s.host)) {
                            return;
                        }
                        s.scheme = l;
                        if (e) {
                            return void (s.isSpecial() && Zd[s.scheme] === s.port && (s.port = null));
                        }
                        l = "";
                        if (s.scheme === "file") {
                            c = gg;
                        } else if (s.isSpecial() && r && r.scheme === s.scheme) {
                            c = ag;
                        } else if (s.isSpecial()) {
                            c = fg;
                        } else if (n[f + 1] === "/") {
                            c = ug;
                            f++;
                        } else {
                            s.cannotBeABaseURL = true;
                            Rd(s.path, "");
                            c = Sg;
                        }
                    }
                    break;
                case ig:
                    if (!r || r.cannotBeABaseURL && o !== "#") {
                        return Md;
                    }
                    if (r.cannotBeABaseURL && o === "#") {
                        s.scheme = r.scheme;
                        s.path = vo(r.path);
                        s.query = r.query;
                        s.fragment = "";
                        s.cannotBeABaseURL = true;
                        c = Og;
                        break;
                    }
                    c = r.scheme === "file" ? gg : sg;
                    continue;
                case ag:
                    if (o !== "/" || n[f + 1] !== "/") {
                        c = sg;
                        continue;
                    }
                    c = lg;
                    f++;
                    break;
                case ug:
                    if (o === "/") {
                        c = hg;
                        break;
                    }
                    c = wg;
                    continue;
                case sg:
                    s.scheme = r.scheme;
                    if (o === Wv) {
                        s.username = r.username;
                        s.password = r.password;
                        s.host = r.host;
                        s.port = r.port;
                        s.path = vo(r.path);
                        s.query = r.query;
                    } else if (o === "/" || o === "\\" && s.isSpecial()) {
                        c = cg;
                    } else if (o === "?") {
                        s.username = r.username;
                        s.password = r.password;
                        s.host = r.host;
                        s.port = r.port;
                        s.path = vo(r.path);
                        s.query = "";
                        c = Eg;
                    } else {
                        if (o !== "#") {
                            s.username = r.username;
                            s.password = r.password;
                            s.host = r.host;
                            s.port = r.port;
                            s.path = vo(r.path);
                            s.path.length--;
                            c = wg;
                            continue;
                        }
                        s.username = r.username;
                        s.password = r.password;
                        s.host = r.host;
                        s.port = r.port;
                        s.path = vo(r.path);
                        s.query = r.query;
                        s.fragment = "";
                        c = Og;
                    }
                    break;
                case cg:
                    if (!s.isSpecial() || o !== "/" && o !== "\\") {
                        if (o !== "/") {
                            s.username = r.username;
                            s.password = r.password;
                            s.host = r.host;
                            s.port = r.port;
                            c = wg;
                            continue;
                        }
                        c = hg;
                    } else {
                        c = lg;
                    }
                    break;
                case fg:
                    c = lg;
                    if (o !== "/" || wd(l, f + 1) !== "/") {
                        continue;
                    }
                    f++;
                    break;
                case lg:
                    if (o !== "/" && o !== "\\") {
                        c = hg;
                        continue;
                    }
                    break;
                case hg:
                    if (o === "@") {
                        if (h) {
                            l = "%40" + l;
                        }
                        h = true;
                        i = from(l);
                        for(let d = 0; d < i.length; d++){
                            const g = i[d];
                            if (g !== ":" || v) {
                                const y = Qd(g, Jd);
                                if (v) {
                                    s.password += y;
                                } else {
                                    s.username += y;
                                }
                            } else {
                                v = true;
                            }
                        }
                        l = "";
                    } else if (o === Wv || o === "/" || o === "?" || o === "#" || o === "\\" && s.isSpecial()) {
                        if (h && l === "") {
                            return "Invalid authority";
                        }
                        f -= from(l).length + 1;
                        l = "";
                        c = pg;
                    } else {
                        l += o;
                    }
                    break;
                case pg:
                case vg:
                    if (e && s.scheme === "file") {
                        c = mg;
                        continue;
                    }
                    if (o !== ":" || p) {
                        if (o === Wv || o === "/" || o === "?" || o === "#" || o === "\\" && s.isSpecial()) {
                            if (s.isSpecial() && l === "") {
                                return Ld;
                            }
                            if (e && l === "" && (s.includesCredentials() || s.port !== null)) {
                                return;
                            }
                            if (a = s.parseHost(l)) {
                                return a;
                            }
                            l = "";
                            c = bg;
                            if (e) {
                                return;
                            }
                            continue;
                        }
                        if (o === "[") {
                            p = true;
                        } else if (o === "]") {
                            p = false;
                        }
                        l += o;
                    } else {
                        if (l === "") {
                            return Ld;
                        }
                        if (a = s.parseHost(l)) {
                            return a;
                        }
                        l = "";
                        c = dg;
                        if (e === vg) {
                            return;
                        }
                    }
                    break;
                case dg:
                    if (!Sd(_d, o)) {
                        if (o === Wv || o === "/" || o === "?" || o === "#" || o === "\\" && s.isSpecial() || e) {
                            if (l !== "") {
                                const m = i_parseInt_1(l, 10);
                                if (m > 65535) {
                                    return Ud;
                                }
                                s.port = s.isSpecial() && m === Zd[s.scheme] ? null : m;
                                l = "";
                            }
                            if (e) {
                                return;
                            }
                            c = bg;
                            continue;
                        }
                        return Ud;
                    }
                    l += o;
                    break;
                case gg:
                    s.scheme = "file";
                    if (o === "/" || o === "\\") {
                        c = yg;
                    } else {
                        if (!r || r.scheme !== "file") {
                            c = wg;
                            continue;
                        }
                        switch(o){
                            case Wv:
                                s.host = r.host;
                                s.path = vo(r.path);
                                s.query = r.query;
                                break;
                            case "?":
                                s.host = r.host;
                                s.path = vo(r.path);
                                s.query = "";
                                c = Eg;
                                break;
                            case "#":
                                s.host = r.host;
                                s.path = vo(r.path);
                                s.query = r.query;
                                s.fragment = "";
                                c = Og;
                                break;
                            default:
                                if (!eg(Ed(vo(n, f), ""))) {
                                    s.host = r.host;
                                    s.path = vo(r.path);
                                    s.shortenPath();
                                }
                                c = wg;
                                continue;
                        }
                    }
                    break;
                case yg:
                    if (o === "/" || o === "\\") {
                        c = mg;
                        break;
                    }
                    r && r.scheme === "file" && !eg(Ed(vo(n, f), "")) && (tg(r.path[0], true) ? Rd(s.path, r.path[0]) : s.host = r.host);
                    c = wg;
                    continue;
                case mg:
                    if (o === Wv || o === "/" || o === "\\" || o === "?" || o === "#") {
                        if (!e && tg(l)) {
                            c = wg;
                        } else if (l === "") {
                            s.host = "";
                            if (e) {
                                return;
                            }
                            c = bg;
                        } else {
                            if (a = s.parseHost(l)) {
                                return a;
                            }
                            if (s.host === "localhost") {
                                s.host = "";
                            }
                            if (e) {
                                return;
                            }
                            l = "";
                            c = bg;
                        }
                        continue;
                    }
                    l += o;
                    break;
                case bg:
                    if (s.isSpecial()) {
                        c = wg;
                        if (o !== "/" && o !== "\\") {
                            continue;
                        }
                    } else if (e || o !== "?") {
                        if (e || o !== "#") {
                            if (o !== Wv && (c = wg, o !== "/")) {
                                continue;
                            }
                        } else {
                            s.fragment = "";
                            c = Og;
                        }
                    } else {
                        s.query = "";
                        c = Eg;
                    }
                    break;
                case wg:
                    if (o === Wv || o === "/" || o === "\\" && s.isSpecial() || !e && (o === "?" || o === "#")) {
                        if ((u = Id(u = l)) === ".." || u === "%2e." || u === ".%2e" || u === "%2e%2e") {
                            s.shortenPath();
                            if (!(o === "/" || o === "\\" && s.isSpecial())) {
                                Rd(s.path, "");
                            }
                        } else if (rg(l)) {
                            if (!(o === "/" || o === "\\" && s.isSpecial())) {
                                Rd(s.path, "");
                            }
                        } else {
                            if (s.scheme === "file" && !s.path.length && tg(l)) {
                                if (s.host) {
                                    s.host = "";
                                }
                                l = wd(l, 0) + ":";
                            }
                            Rd(s.path, l);
                        }
                        l = "";
                        if (s.scheme === "file" && (o === Wv || o === "?" || o === "#")) {
                            while(s.path.length > 1 && s.path[0] === ""){
                                Ad(s.path);
                            }
                        }
                        if (o === "?") {
                            s.query = "";
                            c = Eg;
                        } else if (o === "#") {
                            s.fragment = "";
                            c = Og;
                        }
                    } else {
                        l += Qd(o, Xd);
                    }
                    break;
                case Sg:
                    switch(o){
                        case "?":
                            s.query = "";
                            c = Eg;
                            break;
                        case "#":
                            s.fragment = "";
                            c = Og;
                            break;
                        default:
                            if (o !== Wv) {
                                s.path[0] += Qd(o, Vd);
                            }
                    }
                    break;
                case Eg:
                    if (e || o !== "#") {
                        o !== Wv && (o === "'" && s.isSpecial() ? s.query += "%27" : s.query += o === "#" ? "%23" : Qd(o, Vd));
                    } else {
                        s.fragment = "";
                        c = Og;
                    }
                    break;
                case Og:
                    if (o !== Wv) {
                        s.fragment += Qd(o, Yd);
                    }
            }
            f++;
        }
    },
    parseHost (t) {
        let e;
        let r;
        let n;
        if (wd(t, 0) === "[") {
            if (wd(t, t.length - 1) !== "]") {
                return Ld;
            }
            e = ((t)=>{
                let e;
                let r;
                let n;
                let o;
                let i;
                let a;
                let u;
                const s = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                let c = 0;
                let f = null;
                let l = 0;
                const h = ()=>wd(t, l);
                if (h() === ":") {
                    if (wd(t, 1) !== ":") {
                        return;
                    }
                    l += 2;
                    f = ++c;
                }
                while(h()){
                    if (c === 8) {
                        return;
                    }
                    if (h() !== ":") {
                        for(e = r = 0; r < 4 && Sd(zd, h());){
                            e = 16 * e + i_parseInt_1(h(), 16);
                            l++;
                            r++;
                        }
                        if (h() === ".") {
                            if (r === 0) {
                                return;
                            }
                            l -= r;
                            if (c > 6) {
                                return;
                            }
                            for(n = 0; h();){
                                o = null;
                                if (n > 0) {
                                    if (!(h() === "." && n < 4)) {
                                        return;
                                    }
                                    l++;
                                }
                                if (!Sd(_d, h())) {
                                    return;
                                }
                                while(Sd(_d, h())){
                                    i = i_parseInt_1(h(), 10);
                                    if (o === null) {
                                        o = i;
                                    } else {
                                        if (o === 0) {
                                            return;
                                        }
                                        o = 10 * o + i;
                                    }
                                    if (o > 255) {
                                        return;
                                    }
                                    l++;
                                }
                                s[c] = 256 * s[c] + o;
                                ++n != 2 && n !== 4 || c++;
                            }
                            if (n !== 4) {
                                return;
                            }
                            break;
                        }
                        if (h() === ":") {
                            l++;
                            if (!h()) {
                                return;
                            }
                        } else if (h()) {
                            return;
                        }
                        s[c++] = e;
                    } else {
                        if (f !== null) {
                            return;
                        }
                        l++;
                        f = ++c;
                    }
                }
                if (f !== null) {
                    a = c - f;
                    for(c = 7; c !== 0 && a > 0;){
                        u = s[c];
                        s[c--] = s[f + a - 1];
                        s[f + --a] = u;
                    }
                } else if (c !== 8) {
                    return;
                }
                return s;
            })(kd(t, 1, -1));
            if (!e) {
                return Ld;
            }
            this.host = e;
        } else if (this.isSpecial()) {
            t = ((t)=>{
                let e;
                let r;
                const n = [];
                const o = id(od(ad(t), Yv, "."), ".");
                for(e = 0; e < o.length; e++){
                    nd(n, Qv(Vv, r = o[e]) ? "xn--" + cd(r) : r);
                }
                return rd(n, ".");
            })(t);
            if (Sd(Wd, t)) {
                return Ld;
            }
            e = ((t)=>{
                let e;
                let r;
                let n;
                let o;
                let i;
                let a;
                let u;
                const s = jd(t, ".");
                s.length && s[s.length - 1] === "" && s.length--;
                if ((e = s.length) > 4) {
                    return t;
                }
                r = [];
                for(n = 0; n < e; n++){
                    if ((o = s[n]) === "") {
                        return t;
                    }
                    i = 10;
                    if (o.length > 1 && wd(o, 0) === "0") {
                        i = Sd(Fd, o) ? 16 : 8;
                        o = kd(o, i === 8 ? 1 : 2);
                    }
                    if (o === "") {
                        a = 0;
                    } else {
                        if (!Sd(i === 10 ? Dd : i === 8 ? Bd : zd, o)) {
                            return t;
                        }
                        a = i_parseInt_1(o, i);
                    }
                    Rd(r, a);
                }
                for(n = 0; n < e; n++){
                    a = r[n];
                    if (n === e - 1) {
                        if (a >= 256 ** (5 - e)) {
                            return null;
                        }
                    } else if (a > 255) {
                        return null;
                    }
                }
                u = xd(r);
                for(n = 0; n < r.length; n++){
                    u += r[n] * 256 ** (3 - n);
                }
                return u;
            })(t);
            if (e === null) {
                return Ld;
            }
            this.host = e;
        } else {
            if (Sd(qd, t)) {
                return Ld;
            }
            e = "";
            r = from(t);
            for(n = 0; n < r.length; n++){
                e += Qd(r[n], Vd);
            }
            this.host = e;
        }
    },
    cannotHaveUsernamePasswordPort () {
        return !this.host || this.cannotBeABaseURL || this.scheme === "file";
    },
    includesCredentials () {
        return this.username !== "" || this.password !== "";
    },
    isSpecial () {
        return hasOwn(Zd, this.scheme);
    },
    shortenPath () {
        const path = this.path;
        const t_length = path.length;
        !t_length || this.scheme === "file" && t_length === 1 && tg(path[0], true) || path.length--;
    },
    serialize () {
        const t = this;
        const t_scheme = t.scheme;
        const t_username = t.username;
        const t_password = t.password;
        const t_host = t.host;
        const t_port = t.port;
        const t_path = t.path;
        const t_query = t.query;
        const t_fragment = t.fragment;
        let c = t_scheme + ":";
        if (t_host !== null) {
            c += "//";
            if (t.includesCredentials()) {
                c += `${t_username + (t_password ? ":" + t_password : "")}@`;
            }
            c += Gd(t_host);
            if (t_port !== null) {
                c += ":" + t_port;
            }
        } else if (t_scheme === "file") {
            c += "//";
        }
        c += t.cannotBeABaseURL ? t_path[0] : t_path.length ? "/" + Ed(t_path, "/") : "";
        if (t_query !== null) {
            c += "?" + t_query;
        }
        if (t_fragment !== null) {
            c += "#" + t_fragment;
        }
        return c;
    },
    setHref (t) {
        const e = this.parse(t);
        if (e) {
            throw new i_TypeError_4(e);
        }
        this.searchParams.update();
    },
    getOrigin () {
        const scheme = this.scheme;
        const port = this.port;
        if (scheme === "blob") {
            try {
                return new URL_1(scheme.path[0]).origin;
            } catch (t) {
                return "null";
            }
        }
        if (scheme !== "file" && this.isSpecial()) {
            return scheme + "://" + Gd(this.host) + (port !== null ? ":" + port : "");
        }
        return "null";
    },
    getProtocol () {
        return this.scheme + ":";
    },
    setProtocol (t) {
        this.parse(Wr(t) + ":", ng);
    },
    getUsername () {
        return this.username;
    },
    setUsername (t) {
        const e = from(Wr(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for(let r = 0; r < e.length; r++){
                this.username += Qd(e[r], Jd);
            }
        }
    },
    getPassword () {
        return this.password;
    },
    setPassword (t) {
        const e = from(Wr(t));
        if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for(let r = 0; r < e.length; r++){
                this.password += Qd(e[r], Jd);
            }
        }
    },
    getHost () {
        const host = this.host;
        const port = this.port;
        if (host === null) {
            return "";
        }
        if (port === null) {
            return Gd(host);
        }
        return Gd(host) + ":" + port;
    },
    setHost (t) {
        if (!this.cannotBeABaseURL) {
            this.parse(t, pg);
        }
    },
    getHostname () {
        const host = this.host;
        if (host === null) {
            return "";
        }
        return Gd(host);
    },
    setHostname (t) {
        if (!this.cannotBeABaseURL) {
            this.parse(t, vg);
        }
    },
    getPort () {
        const port = this.port;
        if (port === null) {
            return "";
        }
        return Wr(port);
    },
    setPort (t) {
        this.cannotHaveUsernamePasswordPort() || ((t = Wr(t)) === "" ? this.port = null : this.parse(t, dg));
    },
    getPathname () {
        const path = this.path;
        if (this.cannotBeABaseURL) {
            return path[0];
        }
        if (path.length) {
            return "/" + Ed(path, "/");
        }
        return "";
    },
    setPathname (t) {
        if (!this.cannotBeABaseURL) {
            this.path = [];
            this.parse(t, bg);
        }
    },
    getSearch () {
        const query = this.query;
        if (query) {
            return "?" + query;
        }
        return "";
    },
    setSearch (t) {
        if ((t = Wr(t)) === "") {
            this.query = null;
        } else {
            if (wd(t, 0) === "?") {
                t = kd(t, 1);
            }
            this.query = "";
            this.parse(t, Eg);
        }
        this.searchParams.update();
    },
    getSearchParams () {
        return this.searchParams.facade;
    },
    getHash () {
        const fragment = this.fragment;
        if (fragment) {
            return "#" + fragment;
        }
        return "";
    },
    setHash (t) {
        if ((t = Wr(t)) !== "") {
            if (wd(t, 0) === "#") {
                t = kd(t, 1);
            }
            this.fragment = "";
            this.parse(t, Og);
        } else {
            this.fragment = null;
        }
    },
    update () {
        this.query = this.searchParams.serialize() || null;
    }
};
var URL_1 = function(t) {
    const e = ko(this, Rg_prototype);
    const r = Up(arguments.length, 1) > 1 ? arguments[1] : undefined;
    const n = ne_set_6(e, new xg(t, false, r));
    if (!u) {
        e.href = n.serialize();
        e.origin = n.getOrigin();
        e.protocol = n.getProtocol();
        e.username = n.getUsername();
        e.password = n.getPassword();
        e.host = n.getHost();
        e.hostname = n.getHostname();
        e.port = n.getPort();
        e.pathname = n.getPathname();
        e.search = n.getSearch();
        e.searchParams = n.getSearchParams();
        e.hash = n.getHash();
    }
};
var Rg_prototype = URL_1.prototype;
const Ag = (t, e)=>({
        get () {
            return hd(this)[t]();
        },
        set: e && function(t) {
            return hd(this)[e](t);
        },
        configurable: true,
        enumerable: true
    });
if (u) {
    so(Rg_prototype, "href", Ag("serialize", "setHref"));
    so(Rg_prototype, "origin", Ag("getOrigin"));
    so(Rg_prototype, "protocol", Ag("getProtocol", "setProtocol"));
    so(Rg_prototype, "username", Ag("getUsername", "setUsername"));
    so(Rg_prototype, "password", Ag("getPassword", "setPassword"));
    so(Rg_prototype, "host", Ag("getHost", "setHost"));
    so(Rg_prototype, "hostname", Ag("getHostname", "setHostname"));
    so(Rg_prototype, "port", Ag("getPort", "setPort"));
    so(Rg_prototype, "pathname", Ag("getPathname", "setPathname"));
    so(Rg_prototype, "search", Ag("getSearch", "setSearch"));
    so(Rg_prototype, "searchParams", Ag("getSearchParams"));
    so(Rg_prototype, "hash", Ag("getHash", "setHash"));
}
ie(Rg_prototype, "toJSON", function() {
    return hd(this).serialize();
}, {
    enumerable: true
});
ie(Rg_prototype, "toString", function() {
    return hd(this).serialize();
}, {
    enumerable: true
});
if (i_URL) {
    const jg = i_URL.createObjectURL;
    const kg = i_URL.revokeObjectURL;
    if (jg) {
        ie(URL_1, "createObjectURL", ar(jg, i_URL));
    }
    if (kg) {
        ie(URL_1, "revokeObjectURL", ar(kg, i_URL));
    }
}
an(URL_1, "URL");
Ce({
    global: true,
    constructor: true,
    forced: !Mp,
    sham: !u
}, {
    URL: URL_1
});
const Ig = L("URL");
const Tg = Mp && a(()=>{
    Ig.canParse();
});
const Mg = a(()=>Ig.canParse.length !== 1);
Ce({
    target: "URL",
    stat: true,
    forced: !Tg || Mg
}, {
    canParse (t) {
        const e = Up(arguments.length, 1);
        const r = Wr(t);
        const n = e < 2 || arguments[1] === undefined ? undefined : Wr(arguments[1]);
        try {
            return !!new Ig(r, n);
        } catch (t) {
            return false;
        }
    }
});
const Lg = L("URL");
Ce({
    target: "URL",
    stat: true,
    forced: !Mp
}, {
    parse (t) {
        const e = Up(arguments.length, 1);
        const r = Wr(t);
        const n = e < 2 || arguments[1] === undefined ? undefined : Wr(arguments[1]);
        try {
            return new Lg(r, n);
        } catch (t) {
            return null;
        }
    }
});
Ce({
    target: "URL",
    proto: true,
    enumerable: true
}, {
    toJSON () {
        return f(URL.prototype.toString, this);
    }
});
const Ng = {
    WeakMap,
    set: b(WeakMap.prototype.set),
    get: b(WeakMap.prototype.get),
    has: b(WeakMap.prototype.has),
    remove: b(WeakMap.prototype.delete)
};
const Ng_has = Ng.has;
const _g = (t)=>{
    Ng_has(t);
    return t;
};
const Ng_get = Ng.get;
const Ng_has_1 = Ng.has;
const Ng_set = Ng.set;
Ce({
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true
}, {
    emplace (t, e) {
        let r;
        let n;
        const o = _g(this);
        if (Ng_has_1(o, t)) {
            r = Ng_get(o, t);
            if ("update" in e) {
                r = e.update(r, t, o);
                Ng_set(o, t, r);
            }
            return r;
        }
        n = e.insert(t, o);
        Ng_set(o, t, n);
        return n;
    }
});
Ce({
    target: "WeakMap",
    stat: true,
    forced: true
}, {
    from: ei(Ng.WeakMap, Ng.set, true)
});
Ce({
    target: "WeakMap",
    stat: true,
    forced: true
}, {
    of: ri(Ng.WeakMap, Ng.set, true)
});
const Ng_remove = Ng.remove;
Ce({
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true
}, {
    deleteAll () {
        let t;
        const e = _g(this);
        let r = true;
        for(let n = 0, o = arguments.length; n < o; n++){
            t = Ng_remove(e, arguments[n]);
            r = r && t;
        }
        return !!r;
    }
});
Ce({
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true
}, {
    upsert: Ii
});
To("WeakSet", (t)=>function() {
        return t(this, arguments.length ? arguments[0] : undefined);
    }, eu);
const qg = {
    WeakSet,
    add: b(WeakSet.prototype.add),
    has: b(WeakSet.prototype.has),
    remove: b(WeakSet.prototype.delete)
};
const qg_has = qg.has;
const $g = (t)=>{
    qg_has(t);
    return t;
};
const qg_add = qg.add;
Ce({
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true
}, {
    addAll () {
        const t = $g(this);
        for(let e = 0, r = arguments.length; e < r; e++){
            qg_add(t, arguments[e]);
        }
        return t;
    }
});
const qg_remove = qg.remove;
Ce({
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true
}, {
    deleteAll () {
        let t;
        const e = $g(this);
        let r = true;
        for(let n = 0, o = arguments.length; n < o; n++){
            t = qg_remove(e, arguments[n]);
            r = r && t;
        }
        return !!r;
    }
});
Ce({
    target: "WeakSet",
    stat: true,
    forced: true
}, {
    from: ei(qg.WeakSet, qg.add, false)
});
Ce({
    target: "WeakSet",
    stat: true,
    forced: true
}, {
    of: ri(qg.WeakSet, qg.add, false)
});
const Yg = b("".replace);
const Xg = String(new Error("zxcasd").stack);
const Jg = /\n\s*at [^:]*:[^\n]*/;
const Qg = Jg.test(Xg);
const Zg = !a(()=>{
    const t = new Error("a");
    return !("stack" in t) || (Object.defineProperty(t, "stack", d(1, 7)), t.stack !== 7);
});
const ey = dt("toStringTag");
const push_1 = [].push;
const AggregateError = function(t, e) {
    let r;
    let n;
    let o;
    let i;
    let a;
    const u = U(iy, this);
    if (dn) {
        r = dn(new Error, u ? Qr(this) : iy);
    } else {
        r = u ? this : Ve(iy);
        _t(r, ey, "Error");
    }
    if (e !== undefined) {
        _t(r, "message", function(t, e) {
            if (t === undefined) {
                if (arguments.length < 2) {
                    return "";
                }
                return e;
            }
            return Wr(t);
        }(e));
    }
    i = r;
    a = r.stack;
    Zg && (Error.captureStackTrace ? Error.captureStackTrace(i, AggregateError) : _t(i, "stack", ((t, e)=>{
        if (Qg && typeof t === "string" && !Error.prepareStackTrace) {
            while(e--){
                t = Yg(t, Jg, "");
            }
        }
        return t;
    })(a, 1)));
    if (arguments.length > 2) {
        n = r;
        if (M(o = arguments[2]) && "cause" in o) {
            _t(n, "cause", o.cause);
        }
    }
    const s = [];
    Ao(t, push_1, {
        that: s
    });
    _t(r, "errors", s);
    return r;
};
if (dn) {
    dn(AggregateError, Error);
} else {
    Ae(AggregateError, Error, {
        name: true
    });
}
var iy = AggregateError.prototype = Ve(Error.prototype, {
    constructor: d(1, AggregateError),
    message: d(1, ""),
    name: d(1, "AggregateError")
});
Ce({
    global: true,
    constructor: true,
    arity: 2
}, {
    AggregateError
});
let ay;
let uy;
let sy;
let cy;
const fy = (t)=>_.slice(0, t.length) === t;
const ly = fy("Bun/") ? "BUN" : fy("Cloudflare-Workers") ? "CLOUDFLARE" : fy("Deno/") ? "DENO" : fy("Node.js/") ? "NODE" : i.Bun && typeof Bun.version === "string" ? "BUN" : i.Deno && typeof Deno.version === "object" ? "DENO" : E(i.process) === "process" ? "NODE" : i.window && i.document ? "BROWSER" : "REST";
const hy = ly === "NODE";
const py = /(?:ipad|iphone|ipod).*applewebkit/i.test(_);
let i_setImmediate = i.setImmediate;
let i_clearImmediate = i.clearImmediate;
const i_process_1 = i.process;
const i_Dispatch = i.Dispatch;
const i_Function = i.Function;
const i_MessageChannel = i.MessageChannel;
const i_String_1 = i.String;
let Sy = 0;
const Ey = {};
const Oy = "onreadystatechange";
a(()=>{
    ay = i.location;
});
const xy = (t)=>{
    if (hasOwn(Ey, t)) {
        const e = Ey[t];
        delete Ey[t];
        e();
    }
};
const Ry = (t)=>()=>{
        xy(t);
    };
const Py = (t)=>{
    xy(t.data);
};
const Ay = (t)=>{
    i.postMessage(i_String_1(t), ay.protocol + "//" + ay.host);
};
if (!(i_setImmediate && i_clearImmediate)) {
    i_setImmediate = function(t) {
        Up(arguments.length, 1);
        const e = T(t) ? t : i_Function(t);
        const r = vo(arguments, 1);
        Ey[++Sy] = ()=>{
            Ra(e, undefined, r);
        };
        uy(Sy);
        return Sy;
    };
    i_clearImmediate = (t)=>{
        delete Ey[t];
    };
    if (hy) {
        uy = (t)=>{
            i_process_1.nextTick(Ry(t));
        };
    } else if (i_Dispatch && i_Dispatch.now) {
        uy = (t)=>{
            i_Dispatch.now(Ry(t));
        };
    } else if (i_MessageChannel && !py) {
        cy = (sy = new i_MessageChannel).port2;
        sy.port1.onmessage = Py;
        uy = ar(cy.postMessage, cy);
    } else if (i.addEventListener && T(i.postMessage) && !i.importScripts && ay && ay.protocol !== "file:" && !a(Ay)) {
        uy = Ay;
        i.addEventListener("message", Py, false);
    } else {
        uy = Oy in Et("script") ? (t)=>{
            De.appendChild(Et("script"))[Oy] = function() {
                De.removeChild(this);
                xy(t);
            };
        } : (t)=>{
            setTimeout(Ry(t), 0);
        };
    }
}
const jy = {
    set: i_setImmediate,
    clear: i_clearImmediate
};
const ky = function() {
    this.head = null;
    this.tail = null;
};
ky.prototype = {
    add (item) {
        const e = {
            item,
            next: null
        };
        const tail = this.tail;
        if (tail) {
            tail.next = e;
        } else {
            this.head = e;
        }
        this.tail = e;
    },
    get () {
        const head = this.head;
        if (head) {
            if ((this.head = head.next) === null) {
                this.tail = null;
            }
            return head.item;
        }
    }
};
let Iy;
let Ty;
let My;
let Ly;
let Uy;
const Ny = ky;
const Cy = /ipad|iphone|ipod/i.test(_) && typeof Pebble !== "undefined";
const _y = /web0s(?!.*chrome)/i.test(_);
let jy_set = jy.set;
const By = i.MutationObserver || i.WebKitMutationObserver;
const i_document_1 = i.document;
const i_process_2 = i.process;
const i_Promise = i.Promise;
let qy = Ip("queueMicrotask");
if (!qy) {
    const Hy = new Ny;
    const $y = ()=>{
        let t;
        let e;
        for(hy && (t = i_process_2.domain) && t.exit(); e = Hy.get();){
            try {
                e();
            } catch (error) {
                if (Hy.head) {
                    Iy();
                }
                throw error;
            }
        }
        if (t) {
            t.enter();
        }
    };
    if (py || hy || _y || !By || !i_document_1) {
        if (!Cy && i_Promise && i_Promise.resolve) {
            Ly = i_Promise.resolve(undefined);
            Ly.constructor = i_Promise;
            Uy = ar(Ly.then, Ly);
            Iy = ()=>{
                Uy($y);
            };
        } else if (hy) {
            Iy = ()=>{
                i_process_2.nextTick($y);
            };
        } else {
            jy_set = ar(jy_set, i);
            Iy = ()=>{
                jy_set($y);
            };
        }
    } else {
        Ty = true;
        My = i_document_1.createTextNode("");
        new By($y).observe(My, {
            characterData: true
        });
        Iy = ()=>{
            My.data = Ty = !Ty;
        };
    }
    qy = (t)=>{
        if (!Hy.head) {
            Iy();
        }
        Hy.add(t);
    };
}
let Ky;
let Gy;
let Vy;
const Yy = qy;
const Xy = (t)=>{
    try {
        return {
            error: false,
            value: t()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};
const i_Promise_1 = i.Promise;
const Qy = dt("species");
let SUBCLASSING = false;
const REJECTION_EVENT = T(i.PromiseRejectionEvent);
const CONSTRUCTOR = Ue("Promise", ()=>{
    const t = rt_inspectSource(i_Promise_1);
    const e = t !== String(i_Promise_1);
    if (!e && W === 66) {
        return true;
    }
    if (!W || W < 51 || !/native code/.test(t)) {
        const r = new i_Promise_1((t)=>{
            t(1);
        });
        const n = function(t) {
            t(()=>{}, ()=>{});
        };
        (r.constructor = {})[Qy] = n;
        if (!(SUBCLASSING = r.then(()=>{}) instanceof n)) {
            return true;
        }
    }
    return !(e || ly !== "BROWSER" && ly !== "DENO" || REJECTION_EVENT);
});
const rm = {
    CONSTRUCTOR,
    REJECTION_EVENT,
    SUBCLASSING
};
const om = function(t) {
    let e;
    let r;
    this.promise = new t((t, n)=>{
        if (e !== undefined || r !== undefined) {
            throw new TypeError("Bad Promise constructor");
        }
        e = t;
        r = n;
    });
    this.resolve = J(e);
    this.reject = J(r);
};
const im = {
    f (t) {
        return new om(t);
    }
};
const jy_set_1 = jy.set;
const um = "Promise";
const rm_CONSTRUCTOR = rm.CONSTRUCTOR;
const rm_REJECTION_EVENT = rm.REJECTION_EVENT;
const rm_SUBCLASSING = rm.SUBCLASSING;
const lm = ne.getterFor(um);
const ne_set_7 = ne.set;
const pm = i_Promise_1 && i_Promise_1.prototype;
let Promise_1 = i_Promise_1;
let dm = pm;
const i_TypeError_5 = i.TypeError;
const i_document_2 = i.document;
const i_process_3 = i.process;
let bm = im.f;
const wm = bm;
const Sm = !!(i_document_2 && i_document_2.createEvent && i.dispatchEvent);
const Em = "unhandledrejection";
const Om = (t)=>{
    let e;
    return !(!M(t) || !T(e = t.then)) && e;
};
const xm = (t, e)=>{
    let r;
    let n;
    let o;
    const e_value = e.value;
    const a = e.state === 1;
    const u = a ? t.ok : t.fail;
    const t_resolve = t.resolve;
    const t_reject = t.reject;
    const t_domain = t.domain;
    try {
        if (u) {
            if (!a) {
                if (e.rejection === 2) {
                    km(e);
                }
                e.rejection = 1;
            }
            if (u === true) {
                r = e_value;
            } else {
                if (t_domain) {
                    t_domain.enter();
                }
                r = u(e_value);
                if (t_domain) {
                    t_domain.exit();
                    o = true;
                }
            }
            if (r === t.promise) {
                t_reject(new i_TypeError_5("Promise-chain cycle"));
            } else if (n = Om(r)) {
                f(n, r, t_resolve, t_reject);
            } else {
                t_resolve(r);
            }
        } else {
            t_reject(e_value);
        }
    } catch (error) {
        if (t_domain && !o) {
            t_domain.exit();
        }
        t_reject(error);
    }
};
const Rm = (t, e)=>{
    if (!t.notified) {
        t.notified = true;
        Yy(()=>{
            let r;
            for(const n = t.reactions; r = n.get();){
                xm(r, t);
            }
            t.notified = false;
            if (e && !t.rejection) {
                Am(t);
            }
        });
    }
};
const Pm = (t, promise, r)=>{
    let n;
    let o;
    if (Sm) {
        n = i_document_2.createEvent("Event");
        n.promise = promise;
        n.reason = r;
        n.initEvent(t, false, true);
        i.dispatchEvent(n);
    } else {
        n = {
            promise,
            reason: r
        };
    }
    if (!rm_REJECTION_EVENT && (o = i["on" + t])) {
        o(n);
    } else if (t === Em) {
        (function(t, e) {
            try {
                if (arguments.length === 1) {
                    console.error(t);
                } else {
                    console.error(t, e);
                }
            } catch (t) {}
        })("Unhandled promise rejection", r);
    }
};
var Am = (t)=>{
    f(jy_set_1, i, ()=>{
        let e;
        const t_facade = t.facade;
        const t_value = t.value;
        if (jm(t) && (e = Xy(()=>{
            if (hy) {
                i_process_3.emit("unhandledRejection", t_value, t_facade);
            } else {
                Pm(Em, t_facade, t_value);
            }
        }), t.rejection = hy || jm(t) ? 2 : 1, e.error)) {
            throw e.value;
        }
    });
};
var jm = (t)=>t.rejection !== 1 && !t.parent;
var km = (t)=>{
    f(jy_set_1, i, ()=>{
        const t_facade = t.facade;
        if (hy) {
            i_process_3.emit("rejectionHandled", t_facade);
        } else {
            Pm("rejectionhandled", t_facade, t.value);
        }
    });
};
const Im = (t, e, r)=>(n)=>{
        t(e, n, r);
    };
const Tm = (t, e, r)=>{
    if (!t.done) {
        t.done = true;
        if (r) {
            t = r;
        }
        t.value = e;
        t.state = 2;
        Rm(t, true);
    }
};
const Mm = (t, e, r)=>{
    if (!t.done) {
        t.done = true;
        if (r) {
            t = r;
        }
        try {
            if (t.facade === e) {
                throw new i_TypeError_5("Promise can't be resolved itself");
            }
            const n = Om(e);
            if (n) {
                Yy(()=>{
                    const r = {
                        done: false
                    };
                    try {
                        f(n, e, Im(Mm, r, t), Im(Tm, r, t));
                    } catch (error) {
                        Tm(r, error, t);
                    }
                });
            } else {
                t.value = e;
                t.state = 1;
                Rm(t, false);
            }
        } catch (error) {
            Tm({
                done: false
            }, error, t);
        }
    }
};
if (rm_CONSTRUCTOR && (Promise_1 = function(t) {
    ko(this, dm);
    J(t);
    f(Ky, this);
    const e = lm(this);
    try {
        t(Im(Mm, e), Im(Tm, e));
    } catch (error) {
        Tm(e, error);
    }
}, (Ky = function(t) {
    ne_set_7(this, {
        type: um,
        done: false,
        notified: false,
        parent: false,
        reactions: new Ny,
        rejection: false,
        state: 0,
        value: null
    });
}).prototype = ie(dm = Promise_1.prototype, "then", function(t, e) {
    const r = lm(this);
    const n = bm(Cc(this, Promise_1));
    r.parent = true;
    n.ok = !T(t) || t;
    n.fail = T(e) && e;
    n.domain = hy ? i_process_3.domain : undefined;
    if (r.state === 0) {
        r.reactions.add(n);
    } else {
        Yy(()=>{
            xm(n, r);
        });
    }
    return n.promise;
}), Gy = function() {
    const t = new Ky;
    const e = lm(t);
    this.promise = t;
    this.resolve = Im(Mm, e);
    this.reject = Im(Tm, e);
}, im.f = bm = (t)=>{
    if (t === Promise_1 || t === undefined) {
        return new Gy(t);
    }
    return wm(t);
}, T(i_Promise_1) && pm !== Object.prototype)) {
    Vy = pm.then;
    if (!rm_SUBCLASSING) {
        ie(pm, "then", function(t, e) {
            const r = this;
            return new Promise_1((t, e)=>{
                f(Vy, r, t, e);
            }).then(t, e);
        }, {
            unsafe: true
        });
    }
    try {
        delete pm.constructor;
    } catch (t) {}
    if (dn) {
        dn(pm, dm);
    }
}
Ce({
    global: true,
    constructor: true,
    wrap: true,
    forced: rm_CONSTRUCTOR
}, {
    Promise: Promise_1
});
an(Promise_1, um, false);
Uo(um);
const Lm = rm.CONSTRUCTOR || !Gn((t)=>{
    i_Promise_1.all(t).then(undefined, ()=>{});
});
Ce({
    target: "Promise",
    stat: true,
    forced: Lm
}, {
    all (t) {
        const e = this;
        const r = im.f(e);
        const r_resolve = r.resolve;
        const r_reject = r.reject;
        const i = Xy(()=>{
            const r = J(e.resolve);
            const i = [];
            let a = 0;
            let u = 1;
            Ao(t, (t)=>{
                const s = a++;
                let c = false;
                u++;
                f(r, e, t).then((t)=>{
                    if (!c) {
                        c = true;
                        i[s] = t;
                        if (!--u) {
                            r_resolve(i);
                        }
                    }
                }, r_reject);
            });
            if (!--u) {
                r_resolve(i);
            }
        });
        if (i.error) {
            r_reject(i.value);
        }
        return r.promise;
    }
});
const Um = i_Promise_1 && i_Promise_1.prototype;
Ce({
    target: "Promise",
    proto: true,
    forced: rm.CONSTRUCTOR,
    real: true
}, {
    catch (t) {
        return this.then(undefined, t);
    }
});
if (T(i_Promise_1)) {
    const Nm = L("Promise").prototype.catch;
    if (Um.catch !== Nm) {
        ie(Um, "catch", Nm, {
            unsafe: true
        });
    }
}
Ce({
    target: "Promise",
    stat: true,
    forced: Lm
}, {
    race (t) {
        const e = this;
        const r = im.f(e);
        const r_reject = r.reject;
        const o = Xy(()=>{
            const o = J(e.resolve);
            Ao(t, (t)=>{
                f(o, e, t).then(r.resolve, r_reject);
            });
        });
        if (o.error) {
            r_reject(o.value);
        }
        return r.promise;
    }
});
Ce({
    target: "Promise",
    stat: true,
    forced: rm.CONSTRUCTOR
}, {
    reject (t) {
        const e = im.f(this);
        e.reject(t);
        return e.promise;
    }
});
const Cm = (t, e)=>{
    kt(t);
    if (M(e) && e.constructor === t) {
        return e;
    }
    const r = im.f(t);
    r.resolve(e);
    return r.promise;
};
Ce({
    target: "Promise",
    stat: true,
    forced: rm.CONSTRUCTOR
}, {
    resolve (t) {
        return Cm(this, t);
    }
});
Ce({
    target: "Promise",
    stat: true,
    forced: Lm
}, {
    allSettled (t) {
        const e = this;
        const r = im.f(e);
        const r_resolve = r.resolve;
        const r_reject = r.reject;
        const i = Xy(()=>{
            const r = J(e.resolve);
            const o = [];
            let i = 0;
            let a = 1;
            Ao(t, (t)=>{
                const u = i++;
                let s = false;
                a++;
                f(r, e, t).then((t)=>{
                    if (!s) {
                        s = true;
                        o[u] = {
                            status: "fulfilled",
                            value: t
                        };
                        if (!--a) {
                            r_resolve(o);
                        }
                    }
                }, (reason)=>{
                    if (!s) {
                        s = true;
                        o[u] = {
                            status: "rejected",
                            reason
                        };
                        if (!--a) {
                            r_resolve(o);
                        }
                    }
                });
            });
            if (!--a) {
                r_resolve(o);
            }
        });
        if (i.error) {
            r_reject(i.value);
        }
        return r.promise;
    }
});
const _m = "No one promise resolved";
Ce({
    target: "Promise",
    stat: true,
    forced: Lm
}, {
    any (t) {
        const e = this;
        const r = L("AggregateError");
        const n = im.f(e);
        const n_resolve = n.resolve;
        const n_reject = n.reject;
        const a = Xy(()=>{
            const n = J(e.resolve);
            const a = [];
            let u = 0;
            let s = 1;
            let c = false;
            Ao(t, (t)=>{
                const l = u++;
                let h = false;
                s++;
                f(n, e, t).then((t)=>{
                    if (!(h || c)) {
                        c = true;
                        n_resolve(t);
                    }
                }, (t)=>{
                    if (!(h || c)) {
                        h = true;
                        a[l] = t;
                        if (!--s) {
                            n_reject(new r(a, _m));
                        }
                    }
                });
            });
            if (!--s) {
                n_reject(new r(a, _m));
            }
        });
        if (a.error) {
            n_reject(a.value);
        }
        return n.promise;
    }
});
Ce({
    target: "Promise",
    stat: true
}, {
    withResolvers () {
        const t = im.f(this);
        return {
            promise: t.promise,
            resolve: t.resolve,
            reject: t.reject
        };
    }
});
const Fm = i_Promise_1 && i_Promise_1.prototype;
const Bm = !!i_Promise_1 && a(()=>{
    Fm.finally.call({
        then () {}
    }, ()=>{});
});
Ce({
    target: "Promise",
    proto: true,
    real: true,
    forced: Bm
}, {
    finally (t) {
        const e = Cc(this, L("Promise"));
        const r = T(t);
        return this.then(r ? (r)=>Cm(e, t()).then(()=>r) : t, r ? (r)=>Cm(e, t()).then(()=>{
                throw r;
            }) : t);
    }
});
if (T(i_Promise_1)) {
    const Dm = L("Promise").prototype.finally;
    if (Fm.finally !== Dm) {
        ie(Fm, "finally", Dm, {
            unsafe: true
        });
    }
}
const i_Promise_2 = i.Promise;
let Wm = false;
const qm = !i_Promise_2 || !i_Promise_2.try || Xy(()=>{
    i_Promise_2.try((t)=>{
        Wm = t === 8;
    }, 8);
}).error || !Wm;
Ce({
    target: "Promise",
    stat: true,
    forced: qm
}, {
    try (t) {
        const e = arguments.length > 1 ? vo(arguments, 1) : [];
        const r = im.f(this);
        const n = Xy(()=>Ra(J(t), undefined, e));
        (n.error ? r.reject : r.resolve)(n.value);
        return r.promise;
    }
});
Ze("Promise", "finally");
const Hm = "URLSearchParams" in self;
const $m = "Symbol" in self && "iterator" in Symbol;
const Km = "FileReader" in self && "Blob" in self && (()=>{
    try {
        new Blob;
        return true;
    } catch (t) {
        return false;
    }
})();
const Gm = "FormData" in self;
const Vm = "ArrayBuffer" in self;
if (Vm) {
    const Ym = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var Xm = ArrayBuffer.isView || ((t)=>t && Ym.indexOf(Object.prototype.toString.call(t)) > -1);
}
function Jm(t) {
    if (typeof t !== "string") {
        t = String(t);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) {
        throw new TypeError("Invalid character in header field name");
    }
    return t.toLowerCase();
}
function Qm(t) {
    if (typeof t !== "string") {
        t = String(t);
    }
    return t;
}
function Zm(t) {
    const e = {
        next () {
            const e = t.shift();
            return {
                done: e === undefined,
                value: e
            };
        }
    };
    if ($m) {
        e[Symbol.iterator] = ()=>e;
    }
    return e;
}
function eb(t) {
    if (t.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
    }
    t.bodyUsed = true;
}
function rb(t) {
    return new Promise((resolve, reject)=>{
        t.onload = ()=>{
            resolve(t.result);
        };
        t.onerror = ()=>{
            reject(t.error);
        };
    });
}
function nb(t) {
    const e = new FileReader;
    const r = rb(e);
    e.readAsArrayBuffer(t);
    return r;
}
function ob(t) {
    if (t.slice) {
        return t.slice(0);
    }
    const e = new Uint8Array(t.byteLength);
    e.set(new Uint8Array(t));
    return e.buffer;
}
function ib() {
    this.bodyUsed = false;
    this._initBody = function(t) {
        let e;
        this._bodyInit = t;
        if (t) {
            if (typeof t === "string") {
                this._bodyText = t;
            } else if (Km && Blob.prototype.isPrototypeOf(t)) {
                this._bodyBlob = t;
            } else if (Gm && FormData.prototype.isPrototypeOf(t)) {
                this._bodyFormData = t;
            } else if (Hm && URLSearchParams.prototype.isPrototypeOf(t)) {
                this._bodyText = t.toString();
            } else if (Vm && Km && (e = t) && DataView.prototype.isPrototypeOf(e)) {
                this._bodyArrayBuffer = ob(t.buffer);
                this._bodyInit = new Blob([
                    this._bodyArrayBuffer
                ]);
            } else if (Vm && (ArrayBuffer.prototype.isPrototypeOf(t) || Xm(t))) {
                this._bodyArrayBuffer = ob(t);
            } else {
                this._bodyText = t = Object.prototype.toString.call(t);
            }
        } else {
            this._bodyText = "";
        }
        this.headers.get("content-type") || (typeof t === "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Hm && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
    };
    if (Km) {
        this.blob = function() {
            const t = eb(this);
            if (t) {
                return t;
            }
            if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
            }
            if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([
                    this._bodyArrayBuffer
                ]));
            }
            if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
            }
            return Promise.resolve(new Blob([
                this._bodyText
            ]));
        };
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                return eb(this) || Promise.resolve(this._bodyArrayBuffer);
            }
            return this.blob().then(nb);
        };
    }
    this.text = function() {
        const t = eb(this);
        if (t) {
            return t;
        }
        if (this._bodyBlob) {
            return ((t)=>{
                const e = new FileReader;
                const r = rb(e);
                e.readAsText(t);
                return r;
            })(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
            return Promise.resolve(((t)=>{
                for(var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++){
                    r[n] = String.fromCharCode(e[n]);
                }
                return r.join("");
            })(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
    };
    if (Gm) {
        this.formData = function() {
            return this.text().then(sb);
        };
    }
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
tb.prototype.append = function(t, e) {
    t = Jm(t);
    e = Qm(e);
    const r = this.map[t];
    this.map[t] = r ? r + ", " + e : e;
};
tb.prototype.delete = function(t) {
    delete this.map[Jm(t)];
};
tb.prototype.get = function(t) {
    t = Jm(t);
    if (this.has(t)) {
        return this.map[t];
    }
    return null;
};
tb.prototype.has = function(t) {
    return this.map.hasOwnProperty(Jm(t));
};
tb.prototype.set = function(t, e) {
    this.map[Jm(t)] = Qm(e);
};
tb.prototype.forEach = function(t, e) {
    for(const r in this.map){
        if (this.map.hasOwnProperty(r)) {
            t.call(e, this.map[r], r, this);
        }
    }
};
tb.prototype.keys = function() {
    const t = [];
    this.forEach((e, r)=>{
        t.push(r);
    });
    return Zm(t);
};
tb.prototype.values = function() {
    const t = [];
    this.forEach((e)=>{
        t.push(e);
    });
    return Zm(t);
};
tb.prototype.entries = function() {
    const t = [];
    this.forEach((e, r)=>{
        t.push([
            r,
            e
        ]);
    });
    return Zm(t);
};
if ($m) {
    tb.prototype[Symbol.iterator] = tb.prototype.entries;
}
function sb(t) {
    const e = new FormData;
    t.trim().split("&").forEach((t)=>{
        if (t) {
            const r = t.split("=");
            const n = r.shift().replace(/\+/g, " ");
            const o = r.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(n), decodeURIComponent(o));
        }
    });
    return e;
}
ub.prototype.clone = function() {
    return new ub(this, {
        body: this._bodyInit
    });
};
ib.call(ub.prototype);
ib.call(cb.prototype);
cb.prototype.clone = function() {
    return new cb(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new tb(this.headers),
        url: this.url
    });
};
cb.error = ()=>{
    const t = new cb(null, {
        status: 0,
        statusText: ""
    });
    t.type = "error";
    return t;
};
const fb = [
    301,
    302,
    303,
    307,
    308
];
cb.redirect = (location, status)=>{
    if (-1 === fb.indexOf(status)) {
        throw new RangeError("Invalid status code");
    }
    return new cb(null, {
        status,
        headers: {
            location
        }
    });
};
let self_DOMException = self.DOMException;
try {
    new self_DOMException;
} catch (t) {
    self_DOMException = function(t, e) {
        this.message = t;
        this.name = e;
        const r = Error(t);
        this.stack = r.stack;
    };
    self_DOMException.prototype = Object.create(Error.prototype);
    self_DOMException.prototype.constructor = self_DOMException;
}
function hb(t, e) {
    return new Promise((resolve, reject)=>{
        const o = new ub(t, e);
        if (o.signal && o.signal.aborted) {
            return reject(new self_DOMException("Aborted", "AbortError"));
        }
        const i = new XMLHttpRequest;
        function a() {
            i.abort();
        }
        i.onload = ()=>{
            let t;
            let e;
            const n = {
                status: i.status,
                statusText: i.statusText,
                headers: (t = i.getAllResponseHeaders() || "", e = new tb, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((t)=>{
                    const r = t.split(":");
                    const n = r.shift().trim();
                    if (n) {
                        const o = r.join(":").trim();
                        e.append(n, o);
                    }
                }), e)
            };
            n.url = "responseURL" in i ? i.responseURL : n.headers.get("X-Request-URL");
            resolve(new cb("response" in i ? i.response : i.responseText, n));
        };
        i.onerror = ()=>{
            reject(new TypeError("Network request failed"));
        };
        i.ontimeout = ()=>{
            reject(new TypeError("Network request failed"));
        };
        i.onabort = ()=>{
            reject(new self_DOMException("Aborted", "AbortError"));
        };
        i.open(o.method, o.url, true);
        if (o.credentials === "include") {
            i.withCredentials = true;
        } else if (o.credentials === "omit") {
            i.withCredentials = false;
        }
        if ("responseType" in i && Km) {
            i.responseType = "blob";
        }
        o.headers.forEach((t, e)=>{
            i.setRequestHeader(e, t);
        });
        if (o.signal) {
            o.signal.addEventListener("abort", a);
            i.onreadystatechange = ()=>{
                if (i.readyState === 4) {
                    o.signal.removeEventListener("abort", a);
                }
            };
        }
        i.send(o._bodyInit === undefined ? null : o._bodyInit);
    });
}
hb.polyfill = true;
if (!self.fetch) {
    self.fetch = hb;
    self.Headers = tb;
    self.Request = ub;
    self.Response = cb;
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable_1 = Object.prototype.propertyIsEnumerable;
const gb = (()=>{
    try {
        if (!Object.assign) {
            return false;
        }
        const t = new String("abc");
        t[5] = "de";
        if (Object.getOwnPropertyNames(t)[0] === "5") {
            return false;
        }
        const e = {};
        for(let r = 0; r < 10; r++){
            e["_" + String.fromCharCode(r)] = r;
        }
        if (Object.getOwnPropertyNames(e).map((t)=>e[t]).join("") !== "0123456789") {
            return false;
        }
        const n = {};
        "abcdefghijklmnopqrst".split("").forEach((t)=>{
            n[t] = t;
        });
        return Object.keys({
            ...n
        }).join("") === "abcdefghijklmnopqrst";
    } catch (t) {
        return false;
    }
})() ? Object.assign : function(t, e) {
    let r;
    let n;
    const o = ((t)=>{
        if (t == null) {
            throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(t);
    })(t);
    for(let i = 1; i < arguments.length; i++){
        for(const a in r = Object(arguments[i])){
            if (hasOwnProperty.call(r, a)) {
                o[a] = r[a];
            }
        }
        if (Object.getOwnPropertySymbols) {
            n = Object.getOwnPropertySymbols(r);
            for(let u = 0; u < n.length; u++){
                if (propertyIsEnumerable_1.call(r, n[u])) {
                    o[n[u]] = r[n[u]];
                }
            }
        }
    }
    return o;
};
Object.assign = gb;
