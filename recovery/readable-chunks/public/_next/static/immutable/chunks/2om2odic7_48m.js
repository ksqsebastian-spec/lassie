;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b35904f2-0834-be1d-13f0-e5154e5d5185";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    568401,
    (e)=>{
        "use strict";
        class r {
            constructor(e){
                this.rules = [];
                this.rules = e || [];
            }
            getRulesByDestinationName(e) {
                const r = [];
                for(let t = 0, n = this.rules; t < n.length; t++){
                    const a = n[t];
                    if (a.destinationName === e || a.destinationName === undefined) {
                        r.push(a);
                    }
                }
                return r;
            }
        }
        var t = e.i(831481);
        function n(e, r) {
            if (Array.isArray(e)) {
                return e;
            }
            if (typeof e === "object") {
                return e.value;
            }
            return t.default(r, e);
        }
        function a(e) {
            return !!Array.isArray(e) && ((e[0] === "lowercase" || e[0] === "length" || e[0] === "typeof") && e.length === 2 || (e[0] === "contains" || e[0] === "match") && e.length === 3);
        }
        function o(e, r) {
            let t;
            let n;
            const a = {
                t: "",
                ok: false,
                err: false
            };
            while(e.length > 0){
                if (r.length === 0) {
                    return a;
                }
                switch(e[0]){
                    case "[":
                        const o = r[0];
                        r = r.slice(1);
                        let c = true;
                        if ((e = e.slice(1)).length > 0 && e[0] === "^") {
                            c = false;
                            e = e.slice(1);
                        }
                        let s = false;
                        let u = 0;
                        while(true){
                            if (e.length > 0 && e[0] === "]" && u > 0) {
                                e = e.slice(1);
                                break;
                            }
                            let f = "";
                            let l = "";
                            f = (t = i(e)).char;
                            e = t.newChunk;
                            if (t.err || (l = f, e[0] === "-" && (l = (n = i(e.slice(1))).char, e = n.newChunk, n.err))) {
                                return a;
                            }
                            if (f <= o && o <= l) {
                                s = true;
                            }
                            u++;
                        }
                        if (s !== c) {
                            return a;
                        }
                        break;
                    case "?":
                        r = r.slice(1);
                        e = e.slice(1);
                        break;
                    case "\\":
                        if ((e = e.slice(1)).length === 0) {
                            a.err = true;
                            return a;
                        }
                    default:
                        if (e[0] !== r[0]) {
                            return a;
                        }
                        r = r.slice(1);
                        e = e.slice(1);
                }
            }
            a.t = r;
            a.ok = true;
            a.err = false;
            return a;
        }
        function i(e) {
            const r = {
                char: "",
                newChunk: "",
                err: false
            };
            if (e.length === 0 || e[0] === "-" || e[0] === "]" || e[0] === "\\" && (e = e.slice(1)).length === 0) {
                r.err = true;
                return r;
            }
            r.char = e[0];
            r.newChunk = e.slice(1);
            if (r.newChunk.length === 0) {
                r.err = true;
            }
            return r;
        }
        var c = e.i(958711);
        var s = e.i(960635);
        function u(e, r, n) {
            Object.entries(r).forEach((r)=>{
                const a = r[0];
                const o = r[1];
                const i = (e)=>{
                    if (typeof e === "object" && e !== null) {
                        n(e, o);
                    }
                };
                const c = a === "" ? e : t.default(e, a);
                if (Array.isArray(c)) {
                    c.forEach(i);
                } else {
                    i(c);
                }
            });
        }
        function f(e, r) {
            for(let t = 0; t < 8; t++){
                let n = e[t];
                for(let a = 128; a >= 1; a /= 2){
                    if (n - a >= 0) {
                        n -= a;
                        r.push(1);
                    } else {
                        r.push(0);
                    }
                }
            }
        }
        e.s([
            "tsubMiddleware",
            0,
            (e)=>(i)=>{
                    const i_payload = i.payload;
                    const i_integration = i.integration;
                    const i_next = i.next;
                    new r(e).getRulesByDestinationName(i_integration).forEach((e)=>{
                        for(let r = e.matchers, i = e.transformers, p = 0; p < r.length; p++){
                            if (((e, r)=>{
                                if (!r) {
                                    throw Error("No matcher supplied!");
                                }
                                switch(r.type){
                                    case "all":
                                        return true;
                                    case "fql":
                                        return ((e, r)=>{
                                            if (!e) {
                                                return false;
                                            }
                                            try {
                                                e = JSON.parse(e);
                                            } catch (error) {
                                                throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(e, '": ').concat(error));
                                            }
                                            const t = function e(r, t) {
                                                if (!Array.isArray(r)) {
                                                    return n(r, t) === true;
                                                }
                                                let i;
                                                let c;
                                                let s;
                                                let u;
                                                let f;
                                                let l;
                                                let p;
                                                let h;
                                                const d = r[0];
                                                switch(d){
                                                    case "!":
                                                        return !e(r[1], t);
                                                    case "or":
                                                        for(var v = 1; v < r.length; v++){
                                                            if (e(r[v], t)) {
                                                                return true;
                                                            }
                                                        }
                                                        return false;
                                                    case "and":
                                                        for(var v = 1; v < r.length; v++){
                                                            if (!e(r[v], t)) {
                                                                return false;
                                                            }
                                                        }
                                                        return true;
                                                    case "=":
                                                    case "!=":
                                                        let g = n(r[1], t);
                                                        let y = n(r[2], t);
                                                        const m = d;
                                                        const b = t;
                                                        if (a(g)) {
                                                            g = e(g, b);
                                                        }
                                                        if (a(y)) {
                                                            y = e(y, b);
                                                        }
                                                        if (typeof g === "object" && typeof y === "object") {
                                                            g = JSON.stringify(g);
                                                            y = JSON.stringify(y);
                                                        }
                                                        switch(m){
                                                            case "=":
                                                                return g === y;
                                                            case "!=":
                                                                return g !== y;
                                                            default:
                                                                throw Error("Invalid operator in compareItems: ".concat(m));
                                                        }
                                                    case "<=":
                                                    case "<":
                                                    case ">":
                                                    case ">=":
                                                        let w = n(r[1], t);
                                                        let k = n(r[2], t);
                                                        const j = d;
                                                        const O = t;
                                                        if (a(w)) {
                                                            w = e(w, O);
                                                        }
                                                        if (a(k)) {
                                                            k = e(k, O);
                                                        }
                                                        if (typeof w !== "number" || typeof k !== "number") {
                                                            return false;
                                                        }
                                                        switch(j){
                                                            case "<=":
                                                                return w <= k;
                                                            case ">=":
                                                                return w >= k;
                                                            case "<":
                                                                return w < k;
                                                            case ">":
                                                                return w > k;
                                                            default:
                                                                throw Error("Invalid operator in compareNumbers: ".concat(j));
                                                        }
                                                    case "in":
                                                        i = n(r[1], t);
                                                        c = n(r[2], t);
                                                        s = t;
                                                        return c.find((e)=>n(e, s) === i) !== undefined;
                                                    case "contains":
                                                        u = n(r[1], t);
                                                        f = n(r[2], t);
                                                        return typeof u === "string" && typeof f === "string" && -1 !== u.indexOf(f);
                                                    case "match":
                                                        l = n(r[1], t);
                                                        p = n(r[2], t);
                                                        return typeof l === "string" && typeof p === "string" && ((e, r)=>{
                                                            let t;
                                                            let n;
                                                            e: while(e.length > 0){
                                                                let a;
                                                                let i;
                                                                a = (t = ((e)=>{
                                                                    let r;
                                                                    const t = {
                                                                        star: false,
                                                                        chunk: "",
                                                                        pattern: ""
                                                                    };
                                                                    while(e.length > 0 && e[0] === "*"){
                                                                        e = e.slice(1);
                                                                        t.star = true;
                                                                    }
                                                                    let n = false;
                                                                    r: for(r = 0; r < e.length; r++){
                                                                        switch(e[r]){
                                                                            case "\\":
                                                                                r + 1 < e.length && r++;
                                                                                break;
                                                                            case "[":
                                                                                n = true;
                                                                                break;
                                                                            case "]":
                                                                                n = false;
                                                                                break;
                                                                            case "*":
                                                                                if (!n) {
                                                                                    break r;
                                                                                }
                                                                        }
                                                                    }
                                                                    t.chunk = e.slice(0, r);
                                                                    t.pattern = e.slice(r);
                                                                    return t;
                                                                })(e)).star;
                                                                i = t.chunk;
                                                                e = t.pattern;
                                                                if (a && i === "") {
                                                                    return true;
                                                                }
                                                                const c = o(i, r);
                                                                let s = c.t;
                                                                let u = c.ok;
                                                                let f = c.err;
                                                                if (f) {
                                                                    return false;
                                                                }
                                                                if (u && (s.length === 0 || e.length > 0)) {
                                                                    r = s;
                                                                    continue;
                                                                }
                                                                if (a) {
                                                                    for(let l = 0; l < r.length; l++){
                                                                        s = (n = o(i, r.slice(l + 1))).t;
                                                                        u = n.ok;
                                                                        f = n.err;
                                                                        if (u) {
                                                                            if (e.length === 0 && s.length > 0) {
                                                                                continue;
                                                                            }
                                                                            r = s;
                                                                            continue e;
                                                                        }
                                                                        if (f) {
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                                return false;
                                                            }
                                                            return r.length === 0;
                                                        })(p, l);
                                                    case "lowercase":
                                                        const N = n(r[1], t);
                                                        if (typeof N !== "string") {
                                                            return null;
                                                        }
                                                        return N.toLowerCase();
                                                    case "typeof":
                                                        return typeof n(r[1], t);
                                                    case "length":
                                                        if ((h = n(r[1], t)) === null) {
                                                            return 0;
                                                        }
                                                        if (Array.isArray(h) || typeof h === "string") {
                                                            return h.length;
                                                        }
                                                        return NaN;
                                                    default:
                                                        throw Error("FQL IR could not evaluate for token: ".concat(d));
                                                }
                                            }(e, r);
                                            return typeof t === "boolean" && t;
                                        })(r.ir, e);
                                    default:
                                        throw Error("Matcher of type ".concat(r.type, " unsupported."));
                                }
                            })(i_payload.obj, r[p]) && (i_payload.obj = ((e, r)=>{
                                for(let n = 0; n < r.length; n++){
                                    const a = r[n];
                                    switch(a.type){
                                        case "drop":
                                            return null;
                                        case "drop_properties":
                                            u(e, a.config.drop, (e, r)=>{
                                                r.forEach((r)=>delete e[r]);
                                            });
                                            break;
                                        case "allow_properties":
                                            u(e, a.config.allow, (e, r)=>{
                                                Object.keys(e).forEach((t)=>{
                                                    r.includes(t) || delete e[t];
                                                });
                                            });
                                            break;
                                        case "sample_event":
                                            if (((e, r)=>!(r.sample.percent <= 0) && (r.sample.percent >= 1 || (r.sample.path ? ((e, r)=>{
                                                    let n;
                                                    const a = t.default(e, r.sample.path);
                                                    const o = c.default.hash(JSON.stringify(a)).match(/.{2}/g).map((e)=>parseInt(e, 16));
                                                    let i = -64;
                                                    let s = [];
                                                    f(o.slice(0, 8), s);
                                                    let u = 0;
                                                    for(let l = 0; l < 64 && s[l] !== 1; l++){
                                                        u++;
                                                    }
                                                    if (u !== 0) {
                                                        const p = [];
                                                        f(o.slice(9, 16), p);
                                                        i -= u;
                                                        s.splice(0, u);
                                                        p.splice(64 - u);
                                                        s = s.concat(p);
                                                    }
                                                    s[63] = +(s[63] === 0);
                                                    n = parseInt(s.join(""), 2);
                                                    return n * 2 ** i < r.sample.percent;
                                                })(e, r) : Math.random() <= r.sample.percent)))(e, a.config)) {
                                                break;
                                            }
                                            return null;
                                        case "map_properties":
                                            !((e, r)=>{
                                                const n = JSON.parse(JSON.stringify(e));
                                                for(const a in r.map){
                                                    if (Object.prototype.hasOwnProperty.call(r.map, a)) {
                                                        const o = r.map[a];
                                                        const i = a.split(".");
                                                        let c;
                                                        if (i.length > 1) {
                                                            i.pop();
                                                            c = t.default(n, i.join("."));
                                                        } else {
                                                            c = e;
                                                        }
                                                        if (typeof c === "object") {
                                                            if (o.copy) {
                                                                const u = t.default(n, o.copy);
                                                                if (u !== undefined) {
                                                                    s.dset(e, a, u);
                                                                }
                                                            } else if (o.move) {
                                                                const f = t.default(n, o.move);
                                                                if (f !== undefined) {
                                                                    s.dset(e, a, f);
                                                                }
                                                                ((e, r)=>{
                                                                    if (t.default(e, r)) {
                                                                        for(var n = r.split("."), a = n.pop(); n.length && n[n.length - 1].slice(-1) === "\\";){
                                                                            a = n.pop().slice(0, -1) + "." + a;
                                                                        }
                                                                        while(n.length){
                                                                            e = e[r = n.shift()];
                                                                        }
                                                                        delete e[a];
                                                                    }
                                                                })(e, o.move);
                                                            } else {
                                                                if (Object.prototype.hasOwnProperty.call(o, "set")) {
                                                                    s.dset(e, a, o.set);
                                                                }
                                                            }
                                                            if (o.to_string) {
                                                                const l = t.default(e, a);
                                                                if (typeof l === "string" || typeof l === "object" && l !== null) {
                                                                    continue;
                                                                }
                                                                if (l !== undefined) {
                                                                    s.dset(e, a, JSON.stringify(l));
                                                                } else {
                                                                    s.dset(e, a, "undefined");
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            })(e, a.config);
                                            break;
                                        case "hash_properties":
                                            break;
                                        default:
                                            throw Error('Transformer of type "'.concat(a.type, '" is unsupported.'));
                                    }
                                }
                                return e;
                            })(i_payload.obj, i[p]), i_payload.obj === null)) {
                                return i_next(null);
                            }
                        }
                    });
                    i_next(i_payload);
                }
        ], 568401);
    },
    831481,
    (e, r, t)=>{
        e.e;
        r.exports = (e, r, t, n, a)=>{
            r = r.split ? r.split(".") : r;
            for(n = 0; n < r.length; n++){
                e = e ? e[r[n]] : a;
            }
            if (e === a) {
                return t;
            }
            return e;
        };
    }
]);
