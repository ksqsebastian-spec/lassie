;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "bc0cd4dc-6e10-df75-66a6-5b9b64fafb5b";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    {
        otherChunks: [
            "static/immutable/chunks/2c93oa6mp7tcw.js",
            "static/immutable/chunks/1pkwf9164lccl.js",
            "static/immutable/chunks/3b9vftuxw3t72.js",
            "static/immutable/chunks/0_n1g1xluxdjh.js"
        ],
        runtimeModuleIds: [
            879659
        ]
    }
]);
(()=>{
    let e;
    if (!Array.isArray(globalThis.TURBOPACK)) {
        return;
    }
    var t;
    var r = "/_next/";
    var n = (()=>{
        if (self.TURBOPACK_ASSET_SUFFIX != null) {
            return self.TURBOPACK_ASSET_SUFFIX;
        }
        let e = document?.currentScript?.getAttribute?.("src") ?? "";
        let t = e.indexOf("?");
        if (t >= 0) {
            return e.slice(t);
        }
        return "";
    })();
    t = o || {};
    t[t.Runtime = 0] = "Runtime";
    t[t.Parent = 1] = "Parent";
    t[t.Update = 2] = "Update";
    var o = t;
    let i = new WeakMap;
    function l(e, t) {
        this.m = e;
        this.e = t;
    }
    let l_prototype = l.prototype;
    let hasOwnProperty = Object.prototype.hasOwnProperty;
    let c = typeof Symbol !== "undefined" && Symbol.toStringTag;
    function a(e, t, r) {
        if (!hasOwnProperty.call(e, t)) {
            Object.defineProperty(e, t, r);
        }
    }
    function f(e, t) {
        let r = e[t];
        if (!r) {
            r = p(t);
            e[t] = r;
        }
        return r;
    }
    function p(id) {
        return {
            exports: {},
            error: undefined,
            id,
            namespaceObject: undefined
        };
    }
    function h(e, t, r) {
        a(e, "__esModule", {
            value: true
        });
        if (c) {
            a(e, c, {
                value: "Module"
            });
        }
        let n = 0;
        while(n < t.length){
            let r = t[n++];
            let get = t[n++];
            if (typeof get === "number") {
                if (get === 0) {
                    a(e, r, {
                        value: t[n++],
                        enumerable: true,
                        writable: false
                    });
                } else {
                    throw Error(`unexpected tag: ${get}`);
                }
            } else {
                if (typeof t[n] === "function") {
                    a(e, r, {
                        get,
                        set: t[n++],
                        enumerable: true
                    });
                } else {
                    a(e, r, {
                        get,
                        enumerable: true
                    });
                }
            }
        }
        if (!r) {
            Object.seal(e);
        }
    }
    function d(e, t) {
        (t != null ? f(this.c, t) : this.m).exports = e;
    }
    l_prototype.s = function(e, t, r) {
        let n;
        let o;
        if (t != null) {
            o = (n = f(this.c, t)).exports;
        } else {
            n = this.m;
            o = this.e;
        }
        n.namespaceObject = o;
        h(o, e, r);
    };
    l_prototype.j = function(e, t) {
        let r;
        let n;
        if (t != null) {
            n = (r = f(this.c, t)).exports;
        } else {
            r = this.m;
            n = this.e;
        }
        let o = ((e, t)=>{
            let r = i.get(e);
            if (!r) {
                i.set(e, r = []);
                let n = (e)=>{
                    if (e !== "default") {
                        for (let t of r){
                            if (hasOwnProperty.call(t, e)) {
                                return t;
                            }
                        }
                    }
                };
                e.exports = e.namespaceObject = new Proxy(t, {
                    get (e, t) {
                        if (hasOwnProperty.call(e, t) || t === "default" || t === "__esModule") {
                            return Reflect.get(e, t);
                        }
                        let r = n(t);
                        return r && Reflect.get(r, t);
                    },
                    set: ()=>false,
                    defineProperty: ()=>false,
                    deleteProperty: ()=>false,
                    has: (e, t)=>!!Reflect.has(e, t) || t !== "default" && t !== "__esModule" && n(t) !== undefined,
                    ownKeys (e) {
                        let t = Reflect.ownKeys(e);
                        for (let e of r){
                            for (let r of Reflect.ownKeys(e)){
                                if (!(r === "default" || t.includes(r))) {
                                    t.push(r);
                                }
                            }
                        }
                        return t;
                    },
                    getOwnPropertyDescriptor (e, t) {
                        let r = Reflect.getOwnPropertyDescriptor(e, t);
                        if (r || t === "default" || t === "__esModule") {
                            return r;
                        }
                        let o = n(t);
                        if (o) {
                            return {
                                enumerable: true,
                                configurable: true,
                                get: ()=>Reflect.get(o, t)
                            };
                        }
                    }
                });
            }
            return r;
        })(r, n);
        if (typeof e === "object" && e !== null) {
            o.push(e);
        }
    };
    l_prototype.v = d;
    l_prototype.n = function(e, t) {
        let r;
        r = t != null ? f(this.c, t) : this.m;
        r.exports = r.namespaceObject = e;
    };
    let m = Object.getPrototypeOf ? (e)=>Object.getPrototypeOf(e) : (e)=>e.__proto__;
    let y = [
        null,
        m({}),
        m([]),
        m(m)
    ];
    function b(e, t, r) {
        let n = [];
        let o = -1;
        for(let t = e; (typeof t === "object" || typeof t === "function") && !y.includes(t); t = m(t)){
            for (let r of Object.getOwnPropertyNames(t)){
                n.push(r, ((e, t)=>()=>e[t])(e, r));
                if (-1 === o && r === "default") {
                    o = n.length - 1;
                }
            }
        }
        r && o >= 0 || (o >= 0 ? n.splice(o, 1, 0, e) : n.push("default", 0, e));
        h(t, n);
        return t;
    }
    function g(e) {
        let t = I(e, this.m);
        if (t.namespaceObject) {
            return t.namespaceObject;
        }
        let t_exports = t.exports;
        return t.namespaceObject = b(t_exports, typeof t_exports === "function" ? function(...e) {
            return t_exports.apply(this, e);
        } : Object.create(null), t_exports && t_exports.__esModule);
    }
    function O(e) {
        let t = e.indexOf("#");
        if (-1 !== t) {
            e = e.substring(0, t);
        }
        let r = e.indexOf("?");
        if (-1 !== r) {
            e = e.substring(0, r);
        }
        return e;
    }
    l_prototype.i = g;
    l_prototype.A = function(e) {
        return this.r(e)(g.bind(this));
    };
    l_prototype.t = typeof require === "function" ? require : ()=>{
        throw Error("Unexpected use of runtime require");
    };
    l_prototype.r = function(e) {
        return I(e, this.m).exports;
    };
    l_prototype.f = (e)=>{
        function t(t) {
            t = O(t);
            if (hasOwnProperty.call(e, t)) {
                return e[t].module();
            }
            let r = Error(`Cannot find module '${t}'`);
            r.code = "MODULE_NOT_FOUND";
            throw r;
        }
        t.keys = ()=>Object.keys(e);
        t.resolve = (t)=>{
            t = O(t);
            if (hasOwnProperty.call(e, t)) {
                return e[t].id();
            }
            let r = Error(`Cannot find module '${t}'`);
            r.code = "MODULE_NOT_FOUND";
            throw r;
        };
        t.import = async (e)=>await t(e);
        return t;
    };
    let w = function(e) {
        let t = new URL(e, "x:/");
        let r = {};
        for(let e in t){
            r[e] = t[e];
        }
        for(let t in r.href = e, r.pathname = e.replace(/[?#].*/, ""), r.origin = r.protocol = "", r.toString = r.toJSON = (...t)=>e, r){
            Object.defineProperty(this, t, {
                enumerable: true,
                configurable: true,
                value: r[t]
            });
        }
    };
    function j(e, t) {
        throw Error(`Invariant: ${t(e)}`);
    }
    w.prototype = URL.prototype;
    l_prototype.U = w;
    l_prototype.z = (e)=>{
        throw Error("dynamic usage of require is not supported");
    };
    l_prototype.g = globalThis;
    let k = Symbol("turbopack queues");
    let v = Symbol("turbopack exports");
    let R = Symbol("turbopack error");
    function C() {
        let resolve;
        let t;
        return {
            promise: new Promise((resolvePromise, rejectPromise)=>{
                t = rejectPromise;
                resolve = resolvePromise;
            }),
            resolve,
            reject: t
        };
    }
    function U(e) {
        if (e && e.status !== 1) {
            e.status = 1;
            e.forEach((e)=>e.queueCount--);
            e.forEach((e)=>{
                if (e.queueCount--) {
                    return e.queueCount++;
                }
                return e();
            });
        }
    }
    l_prototype.a = function(e, t) {
        let r = this.m;
        let n = t ? Object.assign([], {
            status: -1
        }) : undefined;
        let o = new Set;
        let { resolve, reject, promise } = C();
        let s = Object.assign(promise, {
            [v]: r.exports,
            [k]: (e)=>{
                if (n) {
                    e(n);
                }
                o.forEach(e);
                s.catch(()=>{});
            }
        });
        let c = {
            get: ()=>s,
            set (e) {
                if (e !== s) {
                    s[v] = e;
                }
            }
        };
        Object.defineProperty(r, "exports", c);
        Object.defineProperty(r, "namespaceObject", c);
        e((e)=>{
            let t = e.map((e)=>{
                if (e !== null && typeof e === "object") {
                    if (k in e) {
                        return e;
                    }
                    if (e != null && typeof e === "object" && "then" in e && typeof e.then === "function") {
                        let t = Object.assign([], {
                            status: 0
                        });
                        let r = {
                            [v]: {},
                            [k]: (e)=>e(t)
                        };
                        e.then((e)=>{
                            r[v] = e;
                            U(t);
                        }, (e)=>{
                            r[R] = e;
                            U(t);
                        });
                        return r;
                    }
                }
                return {
                    [v]: e,
                    [k]: ()=>{}
                };
            });
            let r = ()=>t.map((e)=>{
                    if (e[R]) {
                        throw e[R];
                    }
                    return e[v];
                });
            let { promise, resolve } = C();
            let u = Object.assign(()=>resolve(r), {
                queueCount: 0
            });
            function s(e) {
                if (e !== n && !o.has(e)) {
                    o.add(e);
                    if (e && e.status === 0) {
                        u.queueCount++;
                        e.push(u);
                    }
                }
            }
            t.map((e)=>e[k](s));
            if (u.queueCount) {
                return promise;
            }
            return r();
        }, (e)=>{
            if (e) {
                reject(s[R] = e);
            } else {
                resolve(s[v]);
            }
            U(n);
        });
        if (n && -1 === n.status) {
            n.status = 0;
        }
    };
    let l_prototype_1 = l.prototype;
    let $ = new Map;
    l_prototype.M = $;
    let _ = new Map;
    let x = new Map;
    let E = new Map;
    async function S(e, t, r) {
        let n;
        if (typeof r === "string") {
            return ((e, t, r)=>M(e, t, r))(e, t, q(r));
        }
        let o = r.included || [];
        let i = o.map((e)=>!!$.has(e) || _.get(e));
        if (i.length > 0 && i.every((e)=>e)) {
            return void await Promise.all(i);
        }
        for (let i of (n = M(e, t, q(r.path)), o)){
            if (!_.has(i)) {
                _.set(i, n);
            }
        }
        await n;
    }
    l_prototype_1.l = function(e) {
        return S(o.Parent, this.m.id, e);
    };
    let T = Promise.resolve(undefined);
    let A = new WeakMap;
    function M(t, r, n) {
        let i = e.loadChunkCached(t, n);
        let l = A.get(i);
        if (l === undefined) {
            let e = A.set.bind(A, i, T);
            l = i.then(e).catch((cause)=>{
                let i;
                switch(t){
                    case o.Runtime:
                        i = `as a runtime dependency of chunk ${r}`;
                        break;
                    case o.Parent:
                        i = `from module ${r}`;
                        break;
                    case o.Update:
                        i = "from an HMR update";
                        break;
                    default:
                        j(t, (e)=>`Unknown source type: ${e}`);
                }
                let l = Error(`Failed to load chunk ${n} ${i}${cause ? `: ${cause}` : ""}`, cause ? {
                    cause
                } : undefined);
                l.name = "ChunkLoadError";
                throw l;
            });
            A.set(i, l);
        }
        return l;
    }
    l_prototype_1.L = function(e) {
        let t;
        let r;
        t = o.Parent;
        r = this.m.id;
        return M(t, r, e);
    };
    l_prototype_1.R = function(e) {
        let t = this.r(e);
        return t?.default ?? t;
    };
    l_prototype_1.P = (e)=>`/ROOT/${e ?? ""}`;
    l_prototype_1.F = (e)=>{
        if (e) {
            return `file:///ROOT/${e.split("/").map(encodeURIComponent).join("/")}`;
        }
        return "file:///ROOT/";
    };
    l_prototype_1.q = function(e, t) {
        d.call(this, `${e}${n}`, t);
    };
    let K = /[^A-Za-z0-9\-_.!~*'()/]/;
    function q(e, t = r) {
        let o = K.test(e) ? e.split("/").map(encodeURIComponent).join("/") : e;
        return `${t}${o}${n}`;
    }
    function N(e, t) {
        let r;
        let n = e.indexOf("?");
        if (-1 !== n) {
            r = n;
        } else {
            let t = e.indexOf("#");
            r = -1 !== t ? t : e.length;
        }
        return r >= t.length && e.startsWith(t, r - t.length);
    }
    l_prototype_1.b = r;
    l_prototype_1.X = n;
    l_prototype_1.h = q;
    function L(e) {
        return N(e, ".css");
    }
    let B = {};
    l_prototype.c = B;
    let I = (e, t)=>{
        let r = B[e];
        if (r) {
            if (r.error) {
                throw r.error;
            }
            return r;
        }
        return F(e, o.Parent, t.id);
    };
    function F(e, t, r) {
        let n = $.get(e);
        if (typeof n !== "function") {
            throw Error(((e, t, r)=>{
                let n;
                switch(t){
                    case 0:
                        n = `as a runtime entry of chunk ${r}`;
                        break;
                    case 1:
                        n = `because it was required from module ${r}`;
                        break;
                    case 2:
                        n = "because of an HMR update";
                        break;
                    default:
                        j(t, (e)=>`Unknown source type: ${e}`);
                }
                return `Module ${e} was instantiated ${n}, but the module factory is not available.`;
            })(e, t, r));
        }
        let o = p(e);
        let o_exports = o.exports;
        B[e] = o;
        let u = new l(o, o_exports);
        try {
            n(u, o, o_exports);
        } catch (error) {
            o.error = error;
            throw error;
        }
        if (o.namespaceObject && o.exports !== o.namespaceObject) {
            b(o.exports, o.namespaceObject);
        }
        return o;
    }
    function push(t) {
        let r;
        if (!Array.isArray(t)) {
            return e.registerChunk(undefined, t);
        }
        let n = ((e)=>{
            if (typeof e === "string") {
                return e;
            }
            if (e) {
                return {
                    src: e.getAttribute("src")
                };
            }
            if (typeof TURBOPACK_NEXT_CHUNK_URLS !== "undefined") {
                return {
                    src: TURBOPACK_NEXT_CHUNK_URLS.pop()
                };
            }
            throw Error("chunk path empty but not in a worker");
        })(t[0]);
        if (t.length === 2) {
            r = t[1];
        } else {
            r = undefined;
            !((e, t)=>{
                let r = 1;
                while(r < e.length){
                    let n;
                    let o = r + 1;
                    while(o < e.length && typeof e[o] !== "function"){
                        o++;
                    }
                    if (o === e.length) {
                        throw Error("malformed chunk format, expected a factory function");
                    }
                    let i = e[o];
                    for(let i = r; i < o; i++){
                        let r = e[i];
                        let o = t.get(r);
                        if (o) {
                            n = o;
                            break;
                        }
                    }
                    let l = n ?? i;
                    let u = false;
                    for(let n = r; n < o; n++){
                        let r = e[n];
                        if (!t.has(r)) {
                            if (!u) {
                                if (l === i) {
                                    Object.defineProperty(i, "name", {
                                        value: "module evaluation"
                                    });
                                }
                                u = true;
                            }
                            t.set(r, l);
                        }
                    }
                    r = o + 1;
                }
            })(t, $);
        }
        return e.registerChunk(n, r);
    }
    let W = new Map;
    function X(e) {
        let t = W.get(e);
        if (!t) {
            let r;
            let n;
            t = {
                resolved: false,
                loadingStarted: false,
                retryAttempts: 0,
                promise: new Promise((resolve, reject)=>{
                    r = resolve;
                    n = reject;
                }),
                resolve: ()=>{
                    t.resolved = true;
                    r();
                },
                reject: n
            };
            W.set(e, t);
        }
        return t;
    }
    function H(e, t, r, n, o) {
        if (!(n == null || n instanceof DOMException && n.name === "NetworkError") || r.retryAttempts >= 1 || W.get(t) !== r) {
            if (W.get(t) === r) {
                W.delete(t);
            }
            r.reject(n);
        } else {
            r.retryAttempts++;
            setTimeout(()=>{
                r.resolved || W.get(t) !== r || (o ? o() : (r.loadingStarted = false, z(e, t)));
            }, 200 + Math.floor(401 * Math.random()));
        }
    }
    function z(e, t) {
        let r = X(t);
        if (r.loadingStarted) {
            return r.promise;
        }
        if (e === o.Runtime) {
            r.loadingStarted = true;
            if (L(t)) {
                r.resolve();
            }
            return r.promise;
        }
        if (typeof importScripts === "function") {
            if (L(t)) ;
            else if (N(t, ".js")) {
                self.TURBOPACK_NEXT_CHUNK_URLS.push(t);
                try {
                    importScripts(t);
                } catch (error) {
                    H(e, t, r, error);
                }
            } else {
                throw Error(`can't infer type of chunk from URL ${t} in worker`);
            }
        } else {
            let n = decodeURI(t);
            if (L(t)) {
                if (document.querySelectorAll(`link[rel=stylesheet][href="${t}"],link[rel=stylesheet][href^="${t}?"],link[rel=stylesheet][href="${n}"],link[rel=stylesheet][href^="${n}?"]`).length > 0) {
                    r.resolve();
                } else {
                    let n = ()=>{
                        let o = document.createElement("link");
                        o.rel = "stylesheet";
                        o.crossOrigin = null;
                        o.href = t;
                        o.onerror = ()=>{
                            let i = document.createComment("");
                            o.replaceWith(i);
                            H(e, t, r, undefined, ()=>i.replaceWith(n()));
                        };
                        o.onload = ()=>{
                            r.resolve();
                        };
                        return o;
                    };
                    document.head.appendChild(n());
                }
            } else if (N(t, ".js")) {
                let o = document.querySelectorAll(`script[src="${t}"],script[src^="${t}?"],script[src="${n}"],script[src^="${n}?"]`);
                if (o.length > 0) {
                    for (let n of Array.from(o)){
                        n.addEventListener("error", ()=>{
                            n.remove();
                            H(e, t, r);
                        }, {
                            once: true
                        });
                    }
                } else {
                    let n = document.createElement("script");
                    n.crossOrigin = null;
                    n.src = t;
                    n.onerror = ()=>{
                        n.remove();
                        H(e, t, r);
                    };
                    document.head.appendChild(n);
                }
            } else {
                throw Error(`can't infer type of chunk from URL ${t}`);
            }
        }
        r.loadingStarted = true;
        return r.promise;
    }
    e = {
        async registerChunk (e, t) {
            let n;
            if (e != null) {
                n = ((e)=>{
                    if (typeof e === "string") {
                        return e;
                    }
                    let t = decodeURIComponent(e.src.replace(/[?#].*$/, ""));
                    if (t.startsWith(r)) {
                        return t.slice(r.length);
                    }
                    return t;
                })(e);
                X(typeof e === "string" ? q(e) : e.src).resolve();
            }
            if (t != null) {
                for (let e of t.otherChunks){
                    X(q(typeof e === "string" ? e : e.path));
                }
                await Promise.all(t.otherChunks.map((e)=>{
                    var t;
                    t = n;
                    return S(o.Runtime, t, e);
                }));
                if (t.runtimeModuleIds.length > 0) {
                    for (let e of t.runtimeModuleIds){
                        !((e, t)=>{
                            let r = B[t];
                            if (r) {
                                if (r.error) {
                                    throw r.error;
                                }
                                return;
                            }
                            F(t, o.Runtime, e);
                        })(n, e);
                    }
                }
            }
        },
        loadChunkCached: (e, t)=>z(e, t)
    };
    var globalThis_TURBOPACK = globalThis.TURBOPACK;
    globalThis.TURBOPACK = {
        push
    };
    globalThis_TURBOPACK.forEach(push);
})();
