;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b2675f88-fc17-29cf-e688-7c1b69f58f60";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    817255,
    (t)=>{
        "use strict";
        let e;
        let n;
        var r;
        var i;
        var o;
        var s;
        var a;
        var u;
        var c;
        var l;
        var h;
        var f = t.i(638522);
        let d = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        let p = new Uint8Array(16);
        let v = [];
        for(let t = 0; t < 256; ++t){
            v.push((t + 256).toString(16).slice(1));
        }
        let g = (t, n, r)=>{
            if (d && !n && !t) {
                return d();
            }
            let i = (t = t || {}).random ?? t.rng?.() ?? (()=>{
                if (!e) {
                    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
                        throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    }
                    e = crypto.getRandomValues.bind(crypto);
                }
                return e(p);
            })();
            if (i.length < 16) {
                throw Error("Random bytes length must be >= 16");
            }
            i[6] = 15 & i[6] | 64;
            i[8] = 63 & i[8] | 128;
            if (n) {
                if ((r = r || 0) < 0 || r + 16 > n.length) {
                    throw RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
                }
                for(let t = 0; t < 16; ++t){
                    n[r + t] = i[t];
                }
                return n;
            }
            return ((t, e = 0)=>(`${v[t[e + 0]] + v[t[e + 1]] + v[t[e + 2]] + v[t[e + 3]]}-` + v[t[e + 4]] + v[t[e + 5]] + "-" + v[t[e + 6]] + v[t[e + 7]] + "-" + v[t[e + 8]] + v[t[e + 9]] + "-" + v[t[e + 10]] + v[t[e + 11]] + v[t[e + 12]] + v[t[e + 13]] + v[t[e + 14]] + v[t[e + 15]]).toLowerCase())(i);
        };
        var y = t.i(239150);
        function _() {
            if (f.default !== undefined && f.default.env) {
                return f.default.env;
            }
            return {};
        }
        var m = t.i(555595);
        var w = t.i(56844);
        function b(t, e, n, r) {
            let i;
            const o = [
                t,
                e,
                n,
                r
            ];
            const s = w.isPlainObject(t) ? t.event : t;
            if (!s || !w.isString(s)) {
                throw Error("Event missing");
            }
            const a = w.isPlainObject(t) ? (i = t.properties) != null ? i : {} : w.isPlainObject(e) ? e : {};
            let u = {};
            if (!w.isFunction(n)) {
                u = n != null ? n : {};
            }
            if (w.isPlainObject(t) && !w.isFunction(e)) {
                u = e != null ? e : {};
            }
            return [
                s,
                a,
                u,
                o.find(w.isFunction)
            ];
        }
        function S(t, e, n, r, i) {
            let o;
            let s;
            let a = null;
            let u = null;
            const c = [
                t,
                e,
                n,
                r,
                i
            ];
            const l = c.filter(w.isString);
            if (l[0] !== undefined && l[1] !== undefined) {
                a = l[0];
                u = l[1];
            }
            if (l.length === 1) {
                a = null;
                u = l[0];
            }
            const h = c.find(w.isFunction);
            const f = c.filter((t)=>{
                if (u === null) {
                    return w.isPlainObject(t);
                }
                return w.isPlainObject(t) || t === null;
            });
            const d = (o = f[0]) != null ? o : {};
            const p = (s = f[1]) != null ? s : {};
            return [
                a,
                u,
                d,
                p,
                h
            ];
        }
        var k = (t)=>function() {
                let e;
                let n;
                let r;
                const i = [];
                for(let o = 0; o < arguments.length; o++){
                    i[o] = arguments[o];
                }
                const s = {};
                const a = [
                    "callback",
                    "options",
                    "traits",
                    "id"
                ];
                for(let u = 0; u < i.length; u++){
                    const c = i[u];
                    let l = a.pop();
                    if (l === "id") {
                        if (w.isString(c) || w.isNumber(c)) {
                            s.id = c.toString();
                            continue;
                        }
                        if (c == null) {
                            continue;
                        }
                        l = a.pop();
                    }
                    if ((l === "traits" || l === "options") && (c == null || w.isPlainObject(c))) {
                        s[l] = c;
                    }
                    if (w.isFunction(c)) {
                        s.callback = c;
                        break;
                    }
                }
                return [
                    (e = s.id) != null ? e : t.id(),
                    (n = s.traits) != null ? n : {},
                    (r = s.options) != null ? r : {},
                    s.callback
                ];
            };
        function I(t, e, n, r) {
            if (w.isNumber(t)) {
                t = t.toString();
            }
            if (w.isNumber(e)) {
                e = e.toString();
            }
            const i = [
                t,
                e,
                n,
                r
            ];
            const o = i.filter(w.isString);
            const s = o[0];
            const a = s === undefined ? t : s;
            const u = o[1];
            const c = i.filter(w.isPlainObject)[0];
            return [
                a,
                u === undefined ? null : u,
                c === undefined ? {} : c,
                i.find(w.isFunction)
            ];
        }
        var A = t.i(466487);
        var C = t.i(267324);
        var x = t.i(929151);
        var O = t.i(849424);
        var E = t.i(628978);
        var M = t.i(960635);
        var P = t.i(958711);
        var j = (u_1, c_1, s_1, p_1, t_1, r_1)=>({
                __t: "bpc",
                c: c_1,
                p: p_1,
                u: u_1,
                s: s_1,
                t: t_1,
                r: r_1
            });
        var D = Object.keys(j("", "", "", "", "", ""));
        var z = (t)=>{
            const e = t.indexOf("#");
            if (-1 === e) {
                return t;
            }
            return t.slice(0, e);
        };
        var U = (t)=>{
            try {
                return new URL(t).pathname;
            } catch (e) {
                if (t[0] === "/") {
                    return t;
                }
                return "/" + t;
            }
        };
        var R = (t)=>{
            const e = t.c;
            const n = t.p;
            const search = t.s;
            const i = t.u;
            const referrer = t.r;
            const title = t.t;
            const a = e ? U(e) : n;
            const url = e ? e.indexOf("?") > -1 ? e : e + search : z(i);
            return {
                path: a,
                referrer,
                search,
                title,
                url
            };
        };
        var B = ()=>{
            const t = document.querySelector("link[rel='canonical']");
            return j(location.href, t && t.getAttribute("href") || undefined, location.search, location.pathname, document.title, document.referrer);
        };
        var T = (t, e = R(B()))=>{
            let n;
            let r;
            let i;
            const t_context = t.context;
            if (t.type === "page") {
                i = t.properties && (n = t.properties, r = Object.keys(e), Object.assign.apply(Object, y.__spreadArray([
                    {}
                ], r.map((t)=>{
                    if (n && Object.prototype.hasOwnProperty.call(n, t)) {
                        return {
                            [t]: n[t]
                        };
                    }
                }), false)));
                t.properties = y.__assign(y.__assign(y.__assign({}, e), t.properties), t.name ? {
                    name: t.name
                } : {});
            }
            t_context.page = y.__assign(y.__assign(y.__assign({}, e), i), t_context.page);
        };
        class K {
            constructor(t){
                this.user = t;
            }
            track(event, e, n, r, i) {
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), {
                    event,
                    type: "track",
                    properties: e,
                    options: y.__assign({}, n),
                    integrations: y.__assign({}, r)
                }), i);
            }
            page(t, e, n, r, i, o) {
                let s;
                const a = {
                    type: "page",
                    properties: y.__assign({}, n),
                    options: y.__assign({}, r),
                    integrations: y.__assign({}, i)
                };
                if (t !== null) {
                    a.category = t;
                    a.properties = (s = a.properties) != null ? s : {};
                    a.properties.category = t;
                }
                if (e !== null) {
                    a.name = e;
                }
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), a), o);
            }
            screen(t, e, n, r, i, o) {
                const s = {
                    type: "screen",
                    properties: y.__assign({}, n),
                    options: y.__assign({}, r),
                    integrations: y.__assign({}, i)
                };
                if (t !== null) {
                    s.category = t;
                }
                if (e !== null) {
                    s.name = e;
                }
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), s), o);
            }
            identify(userId, e, n, r, i) {
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), {
                    type: "identify",
                    userId,
                    traits: e,
                    options: y.__assign({}, n),
                    integrations: y.__assign({}, r)
                }), i);
            }
            group(groupId, e, n, r, i) {
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), {
                    type: "group",
                    traits: e,
                    options: y.__assign({}, n),
                    integrations: y.__assign({}, r),
                    groupId
                }), i);
            }
            alias(t, e, n, r, i) {
                const o = {
                    userId: t,
                    type: "alias",
                    options: y.__assign({}, n),
                    integrations: y.__assign({}, r)
                };
                if (e !== null) {
                    o.previousId = e;
                }
                if (t === undefined) {
                    return this.normalize(y.__assign(y.__assign({}, o), this.baseEvent()));
                }
                return this.normalize(y.__assign(y.__assign({}, this.baseEvent()), o), i);
            }
            baseEvent() {
                const t = {
                    integrations: {},
                    options: {}
                };
                const user = this.user;
                if (user.id()) {
                    t.userId = user.id();
                }
                if (user.anonymousId()) {
                    t.anonymousId = user.anonymousId();
                }
                return t;
            }
            context(t) {
                let e;
                let n;
                let r;
                const i = [
                    "integrations",
                    "anonymousId",
                    "timestamp",
                    "userId"
                ];
                const o = (e = t.options) != null ? e : {};
                delete o.integrations;
                const s = Object.keys(o);
                const a = (r = (n = t.options) == null ? undefined : n.context) != null ? r : {};
                const u = {};
                s.forEach((t)=>{
                    t !== "context" && (i.includes(t) ? M.dset(u, t, o[t]) : M.dset(a, t, o[t]));
                });
                return [
                    a,
                    u
                ];
            }
            normalize(t, e) {
                if ((n = t.options) == null ? undefined : n.anonymousId) {
                    this.user.anonymousId(t.options.anonymousId);
                }
                var n;
                let r;
                let i;
                const o = Object.keys((r = t.integrations) != null ? r : {}).reduce((acc, key)=>{
                    let i;
                    return y.__assign(y.__assign({}, acc), {
                        [key]: !!((i = t.integrations) == null ? undefined : i[key])
                    });
                }, {});
                const integrations = y.__assign(y.__assign({}, o), (i = t.options) == null ? undefined : i.integrations);
                const a = this.context(t);
                const context = a[0];
                const c = a[1];
                t.options;
                const l = y.__rest(t, [
                    "options"
                ]);
                const h = y.__assign(y.__assign(y.__assign(y.__assign({
                    timestamp: new Date
                }, l), {
                    context,
                    integrations
                }), c), {
                    messageId: P.default.hash(JSON.stringify(t) + E.v4())
                });
                T(h, e);
                const f = this.user.getAndUpdateSession();
                if (f != null) {
                    h.context = y.__assign(y.__assign({}, h.context), f);
                }
                return h;
            }
        }
        var F = t.i(121044);
        var H = t.i(112104);
        var N = t.i(542043);
        var q = ()=>{
            let t;
            let e;
            let n = 0;
            return {
                done () {
                    return t;
                },
                run (r) {
                    const i = r();
                    if (typeof i === "object" && i !== null && "then" in i && typeof i.then === "function") {
                        if (++n == 1) {
                            t = new Promise((resolve)=>e = resolve);
                        }
                        i.finally(()=>--n == 0 && e());
                    }
                    return i;
                }
            };
        };
        var L = t.i(990372);
        var V = ((t)=>{
            function e(e) {
                return t.call(this, typeof e === "string" ? new F.PersistedPriorityQueue(4, e) : e) || this;
            }
            y.__extends(e, t);
            e.prototype.flush = function() {
                return y.__awaiter(this, undefined, undefined, function() {
                    return y.__generator(this, function(e) {
                        if (A.isOffline()) {
                            return [
                                2,
                                []
                            ];
                        }
                        return [
                            2,
                            t.prototype.flush.call(this)
                        ];
                    });
                });
            };
            return e;
        })(((t)=>{
            function e(e) {
                const n = t.call(this) || this;
                n.criticalTasks = q();
                n.plugins = [];
                n.failedInitializations = [];
                n.flushing = false;
                n.queue = e;
                n.queue.on(H.ON_REMOVE_FROM_FUTURE, ()=>{
                    n.scheduleFlush(0);
                });
                return n;
            }
            y.__extends(e, t);
            e.prototype.register = function(t, e, n) {
                return y.__awaiter(this, undefined, undefined, function() {
                    const r = this;
                    return y.__generator(this, (i)=>{
                        switch(i.label){
                            case 0:
                                return [
                                    4,
                                    Promise.resolve(e.load(t, n)).then(()=>{
                                        r.plugins.push(e);
                                    }).catch((n)=>{
                                        if (e.type === "destination") {
                                            r.failedInitializations.push(e.name);
                                            console.warn(e.name, n);
                                            t.log("warn", "Failed to load destination", {
                                                plugin: e.name,
                                                error: n
                                            });
                                            return;
                                        }
                                        throw n;
                                    })
                                ];
                            case 1:
                                i.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
            };
            e.prototype.deregister = function(t, e, n) {
                return y.__awaiter(this, undefined, undefined, function() {
                    let r;
                    return y.__generator(this, function(i) {
                        switch(i.label){
                            case 0:
                                i.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                if (!e.unload) {
                                    return [
                                        3,
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    Promise.resolve(e.unload(t, n))
                                ];
                            case 1:
                                i.sent();
                                i.label = 2;
                            case 2:
                                this.plugins = this.plugins.filter((t)=>t.name !== e.name);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                r = i.sent();
                                t.log("warn", "Failed to unload destination", {
                                    plugin: e.name,
                                    error: r
                                });
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
            };
            e.prototype.dispatch = function(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    return y.__generator(this, function(n) {
                        t.log("debug", "Dispatching");
                        t.stats.increment("message_dispatched");
                        this.queue.push(t);
                        e = this.subscribeToDelivery(t);
                        this.scheduleFlush(0);
                        return [
                            2,
                            e
                        ];
                    });
                });
            };
            e.prototype.subscribeToDelivery = function(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    const e = this;
                    return y.__generator(this, (n)=>[
                            2,
                            new Promise((resolve)=>{
                                const r = (i, o)=>{
                                    if (i.isSame(t)) {
                                        e.off("flush", r);
                                        resolve(i);
                                    }
                                };
                                e.on("flush", r);
                            })
                        ]);
                });
            };
            e.prototype.dispatchSingle = function(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    const e = this;
                    return y.__generator(this, function(n) {
                        t.log("debug", "Dispatching");
                        t.stats.increment("message_dispatched");
                        this.queue.updateAttempts(t);
                        t.attempts = 1;
                        return [
                            2,
                            this.deliver(t).catch((n)=>{
                                if (e.enqueuRetry(n, t)) {
                                    return e.subscribeToDelivery(t);
                                }
                                t.setFailedDelivery({
                                    reason: n
                                });
                                return t;
                            })
                        ];
                    });
                });
            };
            e.prototype.isEmpty = function() {
                return this.queue.length === 0;
            };
            e.prototype.scheduleFlush = function(t = 500) {
                const e = this;
                if (!this.flushing) {
                    this.flushing = true;
                    setTimeout(()=>{
                        e.flush().then(()=>{
                            setTimeout(()=>{
                                e.flushing = false;
                                if (e.queue.length) {
                                    e.scheduleFlush(0);
                                }
                            }, 0);
                        });
                    }, t);
                }
            };
            e.prototype.deliver = function(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    return y.__generator(this, function(o) {
                        switch(o.label){
                            case 0:
                                return [
                                    4,
                                    this.criticalTasks.done()
                                ];
                            case 1:
                                o.sent();
                                e = Date.now();
                                o.label = 2;
                            case 2:
                                o.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    this.flushOne(t)
                                ];
                            case 3:
                                t = o.sent();
                                n = Date.now() - e;
                                this.emit("delivery_success", t);
                                t.stats.gauge("delivered", n);
                                t.log("debug", "Delivered", t.event);
                                return [
                                    2,
                                    t
                                ];
                            case 4:
                                i = r = o.sent();
                                t.log("error", "Failed to deliver", i);
                                this.emit("delivery_failure", t, i);
                                t.stats.increment("delivery_failed");
                                throw r;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                });
            };
            e.prototype.enqueuRetry = function(t, e) {
                return !!(!(t instanceof N.ContextCancelation) || t.retry) && this.queue.pushWithBackoff(e);
            };
            e.prototype.flush = function() {
                return y.__awaiter(this, undefined, undefined, function() {
                    let t;
                    let e;
                    return y.__generator(this, function(n) {
                        switch(n.label){
                            case 0:
                                if (this.queue.length === 0 || !(t = this.queue.pop())) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                t.attempts = this.queue.getAttempts(t);
                                n.label = 1;
                            case 1:
                                n.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    this.deliver(t)
                                ];
                            case 2:
                                t = n.sent();
                                this.emit("flush", t, true);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e = n.sent();
                                if (!this.enqueuRetry(e, t)) {
                                    t.setFailedDelivery({
                                        reason: e
                                    });
                                    this.emit("flush", t, false);
                                }
                                return [
                                    2,
                                    []
                                ];
                            case 4:
                                return [
                                    2,
                                    [
                                        t
                                    ]
                                ];
                        }
                    });
                });
            };
            e.prototype.isReady = ()=>true;
            e.prototype.availableExtensions = function(t) {
                let e;
                let n;
                e = "type";
                n = {};
                this.plugins.filter((e)=>{
                    if (e.type !== "destination" && e.name !== "Hightouch.io") {
                        return true;
                    }
                    let n;
                    let r;
                    let i;
                    let o;
                    if (!((n = e.alternativeNames) == null)) {
                        n.forEach((e)=>{
                            if (t[e] !== undefined) {
                                o = t[e];
                            }
                        });
                    }
                    if ((i = (r = t[e.name]) != null ? r : o) != null) {
                        return i;
                    }
                    return (e.name === "Hightouch.io" || t.All) !== false;
                }).forEach((t)=>{
                    let r;
                    let i;
                    if (typeof e === "string") {
                        const o = t[e];
                        i = typeof o !== "string" ? JSON.stringify(o) : o;
                    } else {
                        if (e instanceof Function) {
                            i = e(t);
                        }
                    }
                    if (i !== undefined) {
                        n[i] = y.__spreadArray(y.__spreadArray([], (r = n[i]) != null ? r : [], true), [
                            t
                        ], false);
                    }
                });
                const r = n;
                const r_before = r.before;
                const r_enrichment = r.enrichment;
                const r_destination = r.destination;
                const r_after = r.after;
                return {
                    before: r_before === undefined ? [] : r_before,
                    enrichment: r_enrichment === undefined ? [] : r_enrichment,
                    destinations: r_destination === undefined ? [] : r_destination,
                    after: r_after === undefined ? [] : r_after
                };
            };
            e.prototype.flushOne = function(t) {
                let e;
                let n;
                return y.__awaiter(this, undefined, undefined, function() {
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    let u;
                    let c;
                    let l;
                    let h;
                    let f;
                    let d;
                    let p;
                    let v;
                    return y.__generator(this, function(g) {
                        switch(g.label){
                            case 0:
                                if (!this.isReady()) {
                                    throw Error("Not ready");
                                }
                                if (t.attempts > 1) {
                                    this.emit("delivery_retry", t);
                                }
                                i = (r = this.availableExtensions((e = t.event.integrations) != null ? e : {})).before;
                                o = r.enrichment;
                                s = 0;
                                a = i;
                                g.label = 1;
                            case 1:
                                if (!(s < a.length)) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                u = a[s];
                                return [
                                    4,
                                    L.ensure(t, u)
                                ];
                            case 2:
                                if ((c = g.sent()) instanceof N.CoreContext) {
                                    t = c;
                                }
                                this.emit("message_enriched", t, u);
                                g.label = 3;
                            case 3:
                                s++;
                                return [
                                    3,
                                    1
                                ];
                            case 4:
                                l = 0;
                                h = o;
                                g.label = 5;
                            case 5:
                                if (!(l < h.length)) {
                                    return [
                                        3,
                                        8
                                    ];
                                }
                                f = h[l];
                                return [
                                    4,
                                    L.attempt(t, f)
                                ];
                            case 6:
                                if ((c = g.sent()) instanceof N.CoreContext) {
                                    t = c;
                                }
                                this.emit("message_enriched", t, f);
                                g.label = 7;
                            case 7:
                                l++;
                                return [
                                    3,
                                    5
                                ];
                            case 8:
                                p = (d = this.availableExtensions((n = t.event.integrations) != null ? n : {})).destinations;
                                v = d.after;
                                return [
                                    4,
                                    new Promise((resolve, reject)=>{
                                        setTimeout(()=>{
                                            Promise.all(p.map((e)=>L.attempt(t, e))).then(resolve).catch(reject);
                                        }, 0);
                                    })
                                ];
                            case 9:
                                g.sent();
                                t.stats.increment("message_delivered");
                                this.emit("message_delivered", t);
                                return [
                                    4,
                                    Promise.all(v.map((e)=>L.attempt(t, e)))
                                ];
                            case 10:
                                g.sent();
                                return [
                                    2,
                                    t
                                ];
                        }
                    });
                });
            };
            return e;
        })(O.Emitter));
        function Q(t) {
            const prototype = t.constructor.prototype;
            for(let n = 0, r = Object.getOwnPropertyNames(prototype); n < r.length; n++){
                const i = r[n];
                if (i !== "constructor") {
                    const o = Object.getOwnPropertyDescriptor(t.constructor.prototype, i);
                    if (o && typeof o.value === "function") {
                        t[i] = t[i].bind(t);
                    }
                }
            }
            return t;
        }
        var W = (t, e, n, r)=>{
            console.warn("".concat(t.constructor.name, ": Can't ").concat(e, ' key "').concat(n, '" | Err: ').concat(r));
        };
        class J {
            constructor(t){
                this.stores = t;
            }
            get(t) {
                let e = null;
                for(let n = 0, r = this.stores; n < r.length; n++){
                    const i = r[n];
                    try {
                        if ((e = i.get(t)) != null) {
                            return e;
                        }
                    } catch (error) {
                        W(i, "get", t, error);
                    }
                }
                return null;
            }
            set(t, e) {
                this.stores.forEach((n)=>{
                    try {
                        n.set(t, e);
                    } catch (error) {
                        W(n, "set", t, error);
                    }
                });
            }
            clear(t) {
                this.stores.forEach((e)=>{
                    try {
                        e.remove(t);
                    } catch (error) {
                        W(e, "remove", t, error);
                    }
                });
            }
            getAndSync(t) {
                const e = this.get(t);
                const n = typeof e === "number" ? e.toString() : e;
                this.set(t, n);
                return n;
            }
        }
        class G {
            constructor(){
                this.cache = {};
            }
            get(t) {
                let e;
                if ((e = this.cache[t]) != null) {
                    return e;
                }
                return null;
            }
            set(t, e) {
                this.cache[t] = e;
            }
            remove(t) {
                delete this.cache[t];
            }
        }
        var $ = {
            Cookie: "cookie",
            LocalStorage: "localStorage",
            Memory: "memory"
        };
        function X(t) {
            for(let e = 1; e < arguments.length; e++){
                const n = arguments[e];
                for(const r in n){
                    t[r] = n[r];
                }
            }
            return t;
        }
        var Z = function t(e, n) {
            function set(t, r, i) {
                if (typeof document !== "undefined") {
                    if (typeof (i = X({}, n, i)).expires === "number") {
                        i.expires = new Date(Date.now() + 86400000 * i.expires);
                    }
                    if (i.expires) {
                        i.expires = i.expires.toUTCString();
                    }
                    t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    let o = "";
                    for(const s in i){
                        if (i[s]) {
                            o += "; " + s;
                            if (i[s] !== true) {
                                o += "=" + i[s].split(";")[0];
                            }
                        }
                    }
                    return document.cookie = t + "=" + e.write(r, t) + o;
                }
            }
            return Object.create({
                set,
                get (t) {
                    if (typeof document !== "undefined" && (!arguments.length || t)) {
                        for(var n = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < n.length; i++){
                            const o = n[i].split("=");
                            const s = o.slice(1).join("=");
                            try {
                                const a = decodeURIComponent(o[0]);
                                r[a] = e.read(s, a);
                                if (t === a) {
                                    break;
                                }
                            } catch (t) {}
                        }
                        if (t) {
                            return r[t];
                        }
                        return r;
                    }
                },
                remove (t, e) {
                    set(t, "", X({}, e, {
                        expires: -1
                    }));
                },
                withAttributes (e) {
                    return t(this.converter, X({}, this.attributes, e));
                },
                withConverter (e) {
                    return t(X({}, this.converter, e), this.attributes);
                }
            }, {
                attributes: {
                    value: Object.freeze(n)
                },
                converter: {
                    value: Object.freeze(e)
                }
            });
        }({
            read (t) {
                if (t[0] === '"') {
                    t = t.slice(1, -1);
                }
                return t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write (t) {
                return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            }
        }, {
            path: "/"
        });
        function Y(href) {
            const e = ((t)=>{
                try {
                    return new URL(t);
                } catch (t) {
                    return;
                }
            })(href);
            if (e) {
                for(let n = ((t)=>{
                    const e = t.hostname.split(".");
                    const n = e[e.length - 1];
                    const r = [];
                    if (e.length === 4 && parseInt(n, 10) > 0 || e.length <= 1) {
                        return r;
                    }
                    for(let i = e.length - 2; i >= 0; --i){
                        r.push(e.slice(i).join("."));
                    }
                    return r;
                })(e), r = 0; r < n.length; ++r){
                    const i = Math.round(10000 * Math.random()).toString();
                    const o = n[r];
                    const s = {
                        domain: "." + o,
                        path: "/",
                        sameSite: "Lax"
                    };
                    try {
                        Z.set(i, "1", s);
                        if (Z.get(i)) {
                            Z.remove(i, s);
                            return o;
                        }
                    } catch (t) {
                        return;
                    }
                }
            }
        }
        var tt = (()=>{
            function t(e = t.defaults) {
                this.options = y.__assign(y.__assign({}, t.defaults), e);
            }
            Object.defineProperty(t, "defaults", {
                get () {
                    return {
                        maxage: 365,
                        domain: Y(window.location.href),
                        path: "/",
                        sameSite: "Lax"
                    };
                },
                enumerable: false,
                configurable: true
            });
            t.prototype.opts = function() {
                return {
                    sameSite: this.options.sameSite,
                    expires: this.options.maxage,
                    domain: this.options.domain,
                    path: this.options.path,
                    secure: this.options.secure
                };
            };
            t.prototype.get = (t)=>{
                let e;
                try {
                    const n = Z.get(t);
                    if (n == null) {
                        return null;
                    }
                    try {
                        if ((e = JSON.parse(n)) != null) {
                            return e;
                        }
                        return null;
                    } catch (t) {
                        if (n != null) {
                            return n;
                        }
                        return null;
                    }
                } catch (t) {
                    return null;
                }
            };
            t.prototype.set = function(t, e) {
                if (typeof e === "string") {
                    Z.set(t, e, this.opts());
                } else if (e === null) {
                    Z.remove(t, this.opts());
                } else {
                    Z.set(t, JSON.stringify(e), this.opts());
                }
            };
            t.prototype.remove = function(t) {
                return Z.remove(t, this.opts());
            };
            return t;
        })();
        class te {
            localStorageWarning(t, e) {
                console.warn("Unable to access ".concat(t, ", localStorage may be ").concat(e));
            }
            get(t) {
                let e;
                try {
                    const n = localStorage.getItem(t);
                    if (n === null) {
                        return null;
                    }
                    try {
                        if ((e = JSON.parse(n)) != null) {
                            return e;
                        }
                        return null;
                    } catch (t) {
                        if (n != null) {
                            return n;
                        }
                        return null;
                    }
                } catch (e) {
                    this.localStorageWarning(t, "unavailable");
                    return null;
                }
            }
            set(t, e) {
                try {
                    localStorage.setItem(t, JSON.stringify(e));
                } catch (e) {
                    this.localStorageWarning(t, "full");
                }
            }
            remove(t) {
                try {
                    return localStorage.removeItem(t);
                } catch (e) {
                    this.localStorageWarning(t, "unavailable");
                }
            }
        }
        function tn(t) {
            return t && t.stores && Array.isArray(t.stores) && t.stores.every((t)=>Object.values($).includes(t));
        }
        function tr(t) {
            return t.map((t)=>{
                let e;
                let n;
                if (typeof t === "object" && t.name !== undefined) {
                    e = t.name;
                    n = t.settings;
                } else {
                    e = t;
                }
                switch(e){
                    case $.Cookie:
                        return new tt(n);
                    case $.LocalStorage:
                        return new te;
                    case $.Memory:
                        return new G;
                    default:
                        throw Error("Unknown Store Type: ".concat(t));
                }
            });
        }
        function ti(t, e) {
            return t.map((t)=>{
                if (e && t === $.Cookie) {
                    return {
                        name: t,
                        settings: e
                    };
                }
                return t;
            });
        }
        var to = ((r = typeof globalThis !== "undefined" ? globalThis : undefined) == null ? undefined : r.crypto) || ((i = t.g) == null ? undefined : i.crypto) || ((o = typeof window !== "undefined" ? window : undefined) == null ? undefined : o.crypto) || ((s = typeof self !== "undefined" ? self : undefined) == null ? undefined : s.crypto) || ((u = (a = typeof frames !== "undefined" ? frames : undefined) == null ? undefined : a[0]) == null ? undefined : u.crypto);
        c = to ? (t)=>{
            const e = [];
            for(let n = 0; n < t; n += 4){
                e.push(to.getRandomValues(new Uint32Array(1))[0]);
            }
            return new ta(e, t);
        } : (t)=>{
            const e = [];
            for(let n = 0, r; n < t; n += 4){
                const i = ((t)=>{
                    let e = t;
                    let n = 987654321;
                    return ()=>{
                        let t = ((n = 36969 * (65535 & n) + (n >> 16) | 0) << 16) + (e = 18000 * (65535 & e) + (e >> 16) | 0) | 0;
                        t /= 4294967296;
                        return (t += 0.5) * (Math.random() > 0.5 ? 1 : -1);
                    };
                })(4294967296 * (r || Math.random()));
                r = 987654071 * i();
                e.push(4294967296 * i() | 0);
            }
            return new ta(e, t);
        };
        var ts = (()=>{
            function t() {}
            t.create = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return new (this.bind.apply(this, y.__spreadArray([
                    undefined
                ], t, false)));
            };
            t.prototype.mixIn = function(t) {
                return Object.assign(this, t);
            };
            t.prototype.clone = function() {
                const t = new this.constructor;
                Object.assign(t, this);
                return t;
            };
            return t;
        })();
        var ta = ((t)=>{
            function e(e = [], n = 4 * e.length) {
                const r = t.call(this) || this;
                let i = e;
                if (i instanceof ArrayBuffer) {
                    i = new Uint8Array(i);
                }
                if (i instanceof Int8Array || i instanceof Uint8ClampedArray || i instanceof Int16Array || i instanceof Uint16Array || i instanceof Int32Array || i instanceof Uint32Array || i instanceof Float32Array || i instanceof Float64Array) {
                    i = new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
                }
                if (i instanceof Uint8Array) {
                    for(var o = i.byteLength, s = [], a = 0; a < o; a += 1){
                        s[a >>> 2] |= i[a] << 24 - a % 4 * 8;
                    }
                    r.words = s;
                    r.sigBytes = o;
                } else {
                    r.words = e;
                    r.sigBytes = n;
                }
                return r;
            }
            y.__extends(e, t);
            e.prototype.toString = function(t = tu) {
                return t.stringify(this);
            };
            e.prototype.concat = function(t) {
                const words = this.words;
                const t_words = t.words;
                const sigBytes = this.sigBytes;
                const t_sigBytes = t.sigBytes;
                this.clamp();
                if (sigBytes % 4) {
                    for(var o = 0; o < t_sigBytes; o += 1){
                        const s = t_words[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        words[sigBytes + o >>> 2] |= s << 24 - (sigBytes + o) % 4 * 8;
                    }
                } else {
                    for(var o = 0; o < t_sigBytes; o += 4){
                        words[sigBytes + o >>> 2] = t_words[o >>> 2];
                    }
                }
                this.sigBytes += t_sigBytes;
                return this;
            };
            e.prototype.clamp = function() {
                const words = this.words;
                const sigBytes = this.sigBytes;
                words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                words.length = Math.ceil(sigBytes / 4);
            };
            e.prototype.clone = function() {
                const e = t.prototype.clone.call(this);
                e.words = this.words.slice(0);
                return e;
            };
            e.random = c;
            return e;
        })(ts);
        var tu = {
            stringify (t) {
                const t_words = t.words;
                for(var n = t.sigBytes, r = [], i = 0; i < n; i += 1){
                    const o = t_words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push((o >>> 4).toString(16));
                    r.push((15 & o).toString(16));
                }
                return r.join("");
            },
            parse (t) {
                for(var e = t.length, n = [], r = 0; r < e; r += 2){
                    n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                }
                return new ta(n, e / 2);
            }
        };
        var tc = (t)=>{
            const t_words = t.words;
            for(var n = t.sigBytes, r = [], i = 0; i < n; i += 1){
                const o = t_words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push(String.fromCharCode(o));
            }
            return r.join("");
        };
        var tl = (t)=>{
            for(var e = t.length, n = [], r = 0; r < e; r += 1){
                n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
            }
            return new ta(n, e);
        };
        var th = {
            stringify (t) {
                try {
                    return decodeURIComponent(escape(tc(t)));
                } catch (t) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse (t) {
                return tl(unescape(encodeURIComponent(t)));
            }
        };
        var tf = ((t)=>{
            function e() {
                const e = t.call(this) || this;
                e._minBufferSize = 0;
                return e;
            }
            y.__extends(e, t);
            e.prototype.reset = function() {
                this._data = new ta;
                this._nDataBytes = 0;
            };
            e.prototype._append = function(t) {
                let e = t;
                if (typeof e === "string") {
                    e = th.parse(e);
                }
                this._data.concat(e);
                this._nDataBytes += e.sigBytes;
            };
            e.prototype._process = function(t) {
                let e;
                const _data = this._data;
                const blockSize = this.blockSize;
                const n_words = _data.words;
                const n_sigBytes = _data.sigBytes;
                let s = n_sigBytes / (4 * blockSize);
                const a = (s = t ? Math.ceil(s) : Math.max((0 | s) - this._minBufferSize, 0)) * blockSize;
                const u = Math.min(4 * a, n_sigBytes);
                if (a) {
                    for(let c = 0; c < a; c += blockSize){
                        this._doProcessBlock(n_words, c);
                    }
                    e = n_words.splice(0, a);
                    _data.sigBytes -= u;
                }
                return new ta(e, u);
            };
            e.prototype.clone = function() {
                const e = t.prototype.clone.call(this);
                e._data = this._data.clone();
                return e;
            };
            return e;
        })(ts);
        var td = ((t)=>{
            function e(e) {
                const n = t.call(this) || this;
                n.blockSize = 16;
                n.cfg = Object.assign(new ts, e);
                n.reset();
                return n;
            }
            y.__extends(e, t);
            e._createHelper = (t)=>(e, n)=>new t(n).finalize(e);
            e._createHmacHelper = (t)=>(e, n)=>new tp(t, n).finalize(e);
            e.prototype.reset = function() {
                t.prototype.reset.call(this);
                this._doReset();
            };
            e.prototype.update = function(t) {
                this._append(t);
                this._process();
                return this;
            };
            e.prototype.finalize = function(t) {
                if (t) {
                    this._append(t);
                }
                return this._doFinalize();
            };
            return e;
        })(tf);
        var tp = ((t)=>{
            function e(e, n) {
                const r = t.call(this) || this;
                const i = new e;
                r._hasher = i;
                let o = n;
                if (typeof o === "string") {
                    o = th.parse(o);
                }
                const i_blockSize = i.blockSize;
                const a = 4 * i_blockSize;
                if (o.sigBytes > a) {
                    o = i.finalize(n);
                }
                o.clamp();
                const u = o.clone();
                r._oKey = u;
                const c = o.clone();
                r._iKey = c;
                const u_words = u.words;
                const c_words = c.words;
                for(let f = 0; f < i_blockSize; f += 1){
                    u_words[f] ^= 1549556828;
                    c_words[f] ^= 909522486;
                }
                u.sigBytes = a;
                c.sigBytes = a;
                r.reset();
                return r;
            }
            y.__extends(e, t);
            e.prototype.reset = function() {
                const _hasher = this._hasher;
                _hasher.reset();
                _hasher.update(this._iKey);
            };
            e.prototype.update = function(t) {
                this._hasher.update(t);
                return this;
            };
            e.prototype.finalize = function(t) {
                const _hasher = this._hasher;
                const n = _hasher.finalize(t);
                _hasher.reset();
                return _hasher.finalize(this._oKey.clone().concat(n));
            };
            return e;
        })(ts);
        var tv = (t, e, _reverseMap)=>{
            const r = [];
            let i = 0;
            for(let o = 0; o < e; o += 1){
                if (o % 4) {
                    const s = _reverseMap[t.charCodeAt(o - 1)] << o % 4 * 2 | _reverseMap[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                    r[i >>> 2] |= s << 24 - i % 4 * 8;
                    i += 1;
                }
            }
            return ta.create(r, i);
        };
        var tg = {
            stringify (t) {
                const t_words = t.words;
                const t_sigBytes = t.sigBytes;
                const _map = this._map;
                t.clamp();
                const i = [];
                for(let o = 0; o < t_sigBytes; o += 3){
                    const s = (t_words[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t_words[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t_words[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255;
                    for(let a = 0; a < 4 && o + 0.75 * a < t_sigBytes; a += 1){
                        i.push(_map.charAt(s >>> 6 * (3 - a) & 63));
                    }
                }
                const u = _map.charAt(64);
                if (u) {
                    while(i.length % 4){
                        i.push(u);
                    }
                }
                return i.join("");
            },
            parse (t) {
                let t_length = t.length;
                const _map = this._map;
                let _reverseMap = this._reverseMap;
                if (!_reverseMap) {
                    this._reverseMap = [];
                    _reverseMap = this._reverseMap;
                    for(let i = 0; i < _map.length; i += 1){
                        _reverseMap[_map.charCodeAt(i)] = i;
                    }
                }
                const o = _map.charAt(64);
                if (o) {
                    const s = t.indexOf(o);
                    if (-1 !== s) {
                        t_length = s;
                    }
                }
                return tv(t, t_length, _reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        var ty = [];
        for(var t_ = 0; t_ < 64; t_ += 1){
            ty[t_] = 4294967296 * Math.abs(Math.sin(t_ + 1)) | 0;
        }
        var tm = (t, e, n, r, i, o, s)=>{
            const a = t + (e & n | ~e & r) + i + s;
            return (a << o | a >>> 32 - o) + e;
        };
        var tw = (t, e, n, r, i, o, s)=>{
            const a = t + (e & r | n & ~r) + i + s;
            return (a << o | a >>> 32 - o) + e;
        };
        var tb = (t, e, n, r, i, o, s)=>{
            const a = t + (e ^ n ^ r) + i + s;
            return (a << o | a >>> 32 - o) + e;
        };
        var tS = (t, e, n, r, i, o, s)=>{
            const a = t + (n ^ (e | ~r)) + i + s;
            return (a << o | a >>> 32 - o) + e;
        };
        var tk = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.prototype._doReset = function() {
                this._hash = new ta([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878
                ]);
            };
            e.prototype._doProcessBlock = function(t, e) {
                for(let n = 0; n < 16; n += 1){
                    const r = e + n;
                    const i = t[r];
                    t[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
                }
                const words = this._hash.words;
                const s = t[e + 0];
                const a = t[e + 1];
                const u = t[e + 2];
                const c = t[e + 3];
                const l = t[e + 4];
                const h = t[e + 5];
                const f = t[e + 6];
                const d = t[e + 7];
                const p = t[e + 8];
                const v = t[e + 9];
                const g = t[e + 10];
                const y = t[e + 11];
                const _ = t[e + 12];
                const m = t[e + 13];
                const w = t[e + 14];
                const b = t[e + 15];
                let S = words[0];
                let k = words[1];
                let I = words[2];
                let A = words[3];
                S = tm(S, k, I, A, s, 7, ty[0]);
                A = tm(A, S, k, I, a, 12, ty[1]);
                I = tm(I, A, S, k, u, 17, ty[2]);
                k = tm(k, I, A, S, c, 22, ty[3]);
                S = tm(S, k, I, A, l, 7, ty[4]);
                A = tm(A, S, k, I, h, 12, ty[5]);
                I = tm(I, A, S, k, f, 17, ty[6]);
                k = tm(k, I, A, S, d, 22, ty[7]);
                S = tm(S, k, I, A, p, 7, ty[8]);
                A = tm(A, S, k, I, v, 12, ty[9]);
                I = tm(I, A, S, k, g, 17, ty[10]);
                k = tm(k, I, A, S, y, 22, ty[11]);
                S = tm(S, k, I, A, _, 7, ty[12]);
                A = tm(A, S, k, I, m, 12, ty[13]);
                I = tm(I, A, S, k, w, 17, ty[14]);
                k = tm(k, I, A, S, b, 22, ty[15]);
                S = tw(S, k, I, A, a, 5, ty[16]);
                A = tw(A, S, k, I, f, 9, ty[17]);
                I = tw(I, A, S, k, y, 14, ty[18]);
                k = tw(k, I, A, S, s, 20, ty[19]);
                S = tw(S, k, I, A, h, 5, ty[20]);
                A = tw(A, S, k, I, g, 9, ty[21]);
                I = tw(I, A, S, k, b, 14, ty[22]);
                k = tw(k, I, A, S, l, 20, ty[23]);
                S = tw(S, k, I, A, v, 5, ty[24]);
                A = tw(A, S, k, I, w, 9, ty[25]);
                I = tw(I, A, S, k, c, 14, ty[26]);
                k = tw(k, I, A, S, p, 20, ty[27]);
                S = tw(S, k, I, A, m, 5, ty[28]);
                A = tw(A, S, k, I, u, 9, ty[29]);
                I = tw(I, A, S, k, d, 14, ty[30]);
                k = tw(k, I, A, S, _, 20, ty[31]);
                S = tb(S, k, I, A, h, 4, ty[32]);
                A = tb(A, S, k, I, p, 11, ty[33]);
                I = tb(I, A, S, k, y, 16, ty[34]);
                k = tb(k, I, A, S, w, 23, ty[35]);
                S = tb(S, k, I, A, a, 4, ty[36]);
                A = tb(A, S, k, I, l, 11, ty[37]);
                I = tb(I, A, S, k, d, 16, ty[38]);
                k = tb(k, I, A, S, g, 23, ty[39]);
                S = tb(S, k, I, A, m, 4, ty[40]);
                A = tb(A, S, k, I, s, 11, ty[41]);
                I = tb(I, A, S, k, c, 16, ty[42]);
                k = tb(k, I, A, S, f, 23, ty[43]);
                S = tb(S, k, I, A, v, 4, ty[44]);
                A = tb(A, S, k, I, _, 11, ty[45]);
                I = tb(I, A, S, k, b, 16, ty[46]);
                k = tb(k, I, A, S, u, 23, ty[47]);
                S = tS(S, k, I, A, s, 6, ty[48]);
                A = tS(A, S, k, I, d, 10, ty[49]);
                I = tS(I, A, S, k, w, 15, ty[50]);
                k = tS(k, I, A, S, h, 21, ty[51]);
                S = tS(S, k, I, A, _, 6, ty[52]);
                A = tS(A, S, k, I, c, 10, ty[53]);
                I = tS(I, A, S, k, g, 15, ty[54]);
                k = tS(k, I, A, S, a, 21, ty[55]);
                S = tS(S, k, I, A, p, 6, ty[56]);
                A = tS(A, S, k, I, b, 10, ty[57]);
                I = tS(I, A, S, k, f, 15, ty[58]);
                k = tS(k, I, A, S, m, 21, ty[59]);
                S = tS(S, k, I, A, l, 6, ty[60]);
                A = tS(A, S, k, I, y, 10, ty[61]);
                I = tS(I, A, S, k, u, 15, ty[62]);
                k = tS(k, I, A, S, v, 21, ty[63]);
                words[0] = words[0] + S | 0;
                words[1] = words[1] + k | 0;
                words[2] = words[2] + I | 0;
                words[3] = words[3] + A | 0;
            };
            e.prototype._doFinalize = function() {
                const _data = this._data;
                const t_words = _data.words;
                const n = 8 * this._nDataBytes;
                const r = 8 * _data.sigBytes;
                t_words[r >>> 5] |= 128 << 24 - r % 32;
                const i = Math.floor(n / 4294967296);
                t_words[(r + 64 >>> 9 << 4) + 15] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
                t_words[(r + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
                _data.sigBytes = (t_words.length + 1) * 4;
                this._process();
                const _hash = this._hash;
                const o_words = _hash.words;
                for(let a = 0; a < 4; a += 1){
                    const u = o_words[a];
                    o_words[a] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360;
                }
                return _hash;
            };
            e.prototype.clone = function() {
                const e = t.prototype.clone.call(this);
                e._hash = this._hash.clone();
                return e;
            };
            return e;
        })(td);
        td._createHelper(tk);
        td._createHmacHelper(tk);
        var tI = ((t)=>{
            function e(e) {
                const n = t.call(this) || this;
                n.cfg = Object.assign(new ts, {
                    keySize: 4,
                    hasher: tk,
                    iterations: 1
                }, e);
                return n;
            }
            y.__extends(e, t);
            e.prototype.compute = function(t, e) {
                let n;
                const cfg = this.cfg;
                const i = cfg.hasher.create();
                const o = ta.create();
                for(var s = o.words, a = cfg.keySize, u = cfg.iterations; s.length < a;){
                    if (n) {
                        i.update(n);
                    }
                    n = i.update(t).finalize(e);
                    i.reset();
                    for(let c = 1; c < u; c += 1){
                        n = i.finalize(n);
                        i.reset();
                    }
                    o.concat(n);
                }
                o.sigBytes = 4 * a;
                return o;
            };
            return e;
        })(ts);
        var tA = ((t)=>{
            function e(e, n, r) {
                const i = t.call(this) || this;
                i.cfg = Object.assign(new ts, r);
                i._xformMode = e;
                i._key = n;
                i.reset();
                return i;
            }
            y.__extends(e, t);
            e.createEncryptor = function(t, e) {
                return this.create(this._ENC_XFORM_MODE, t, e);
            };
            e.createDecryptor = function(t, e) {
                return this.create(this._DEC_XFORM_MODE, t, e);
            };
            e._createHelper = (t)=>{
                const e = (t)=>{
                    if (typeof t === "string") {
                        return tD;
                    }
                    return tj;
                };
                return {
                    encrypt (n, r, i) {
                        return e(r).encrypt(t, n, r, i);
                    },
                    decrypt (n, r, i) {
                        return e(r).decrypt(t, n, r, i);
                    }
                };
            };
            e.prototype.reset = function() {
                t.prototype.reset.call(this);
                this._doReset();
            };
            e.prototype.process = function(t) {
                this._append(t);
                return this._process();
            };
            e.prototype.finalize = function(t) {
                if (t) {
                    this._append(t);
                }
                return this._doFinalize();
            };
            return e;
        })(tf);
        tA._ENC_XFORM_MODE = 1;
        tA._DEC_XFORM_MODE = 2;
        tA.keySize = 4;
        tA.ivSize = 4;
        function tC() {
            const t = [];
            for(let e = 0; e < arguments.length; e++){
                t[e] = arguments[e];
            }
            const n = tA.apply(this, t) || this;
            n.blockSize = 1;
            return n;
        }
        function tx(t, e, n) {
            let r;
            const _iv = this._iv;
            if (_iv) {
                r = _iv;
                this._iv = undefined;
            } else {
                r = this._prevBlock;
            }
            for(let o = 0; o < n; o += 1){
                t[e + o] ^= r[o];
            }
        }
        y.__extends(tC, tA);
        tC.prototype._doFinalize = function() {
            return this._process(true);
        };
        var mode = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            return e;
        })(((t)=>{
            function e(e, n) {
                const r = t.call(this) || this;
                r._cipher = e;
                r._iv = n;
                return r;
            }
            y.__extends(e, t);
            e.createEncryptor = function(t, e) {
                return this.Encryptor.create(t, e);
            };
            e.createDecryptor = function(t, e) {
                return this.Decryptor.create(t, e);
            };
            return e;
        })(ts));
        mode.Encryptor = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.prototype.processBlock = function(t, e) {
                const _cipher = this._cipher;
                const n_blockSize = _cipher.blockSize;
                tx.call(this, t, e, n_blockSize);
                _cipher.encryptBlock(t, e);
                this._prevBlock = t.slice(e, e + n_blockSize);
            };
            return e;
        })(mode);
        mode.Decryptor = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.prototype.processBlock = function(t, e) {
                const _cipher = this._cipher;
                const n_blockSize = _cipher.blockSize;
                const i = t.slice(e, e + n_blockSize);
                _cipher.decryptBlock(t, e);
                tx.call(this, t, e, n_blockSize);
                this._prevBlock = i;
            };
            return e;
        })(mode);
        var padding = {
            pad (t, e) {
                const n = 4 * e;
                for(var r = n - t.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, o = [], s = 0; s < r; s += 4){
                    o.push(i);
                }
                const a = ta.create(o, r);
                t.concat(a);
            },
            unpad (t) {
                const e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e;
            }
        };
        var tM = ((t)=>{
            function e(e, n, r) {
                const i = t.call(this, e, n, {
                    mode,
                    padding,
                    ...r
                }) || this;
                i.blockSize = 4;
                return i;
            }
            y.__extends(e, t);
            e.prototype.reset = function() {
                t.prototype.reset.call(this);
                let e;
                const cfg = this.cfg;
                const r = cfg.iv;
                const n_mode = cfg.mode;
                if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
                    e = n_mode.createEncryptor;
                } else {
                    e = n_mode.createDecryptor;
                    this._minBufferSize = 1;
                }
                this._mode = e.call(n_mode, this, r && r.words);
                this._mode.__creator = e;
            };
            e.prototype._doProcessBlock = function(t, e) {
                this._mode.processBlock(t, e);
            };
            e.prototype._doFinalize = function() {
                let t;
                const padding = this.cfg.padding;
                if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
                    padding.pad(this._data, this.blockSize);
                    t = this._process(true);
                } else {
                    t = this._process(true);
                    padding.unpad(t);
                }
                return t;
            };
            return e;
        })(tA);
        var tP = ((t)=>{
            function e(e) {
                const n = t.call(this) || this;
                n.mixIn(e);
                return n;
            }
            y.__extends(e, t);
            e.prototype.toString = function(t) {
                return (t || this.formatter).stringify(this);
            };
            return e;
        })(ts);
        var tj = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.encrypt = function(algorithm, e, n, r) {
                const i = Object.assign(new ts, this.cfg, r);
                const o = algorithm.createEncryptor(n, i);
                const ciphertext = o.finalize(e);
                const o_cfg = o.cfg;
                return tP.create({
                    ciphertext,
                    key: n,
                    iv: o_cfg.iv,
                    algorithm,
                    mode: o_cfg.mode,
                    padding: o_cfg.padding,
                    blockSize: o.blockSize,
                    formatter: i.format
                });
            };
            e.decrypt = function(t, e, n, r) {
                let i = e;
                const o = Object.assign(new ts, this.cfg, r);
                i = this._parse(i, o.format);
                return t.createDecryptor(n, o).finalize(i.ciphertext);
            };
            e._parse = function(t, e) {
                if (typeof t === "string") {
                    return e.parse(t, this);
                }
                return t;
            };
            return e;
        })(ts);
        tj.cfg = Object.assign(new ts, {
            format: {
                stringify (t) {
                    const t_ciphertext = t.ciphertext;
                    const t_salt = t.salt;
                    return (t_salt ? ta.create([
                        1398893684,
                        1701076831
                    ]).concat(t_salt).concat(t_ciphertext) : t_ciphertext).toString(tg);
                },
                parse (t) {
                    let e;
                    const n = tg.parse(t);
                    const n_words = n.words;
                    if (n_words[0] === 1398893684 && n_words[1] === 1701076831) {
                        e = ta.create(n_words.slice(2, 4));
                        n_words.splice(0, 4);
                        n.sigBytes -= 16;
                    }
                    return tP.create({
                        ciphertext: n,
                        salt: e
                    });
                }
            }
        });
        var tD = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.encrypt = function(t, e, n, r) {
                const i = Object.assign(new ts, this.cfg, r);
                const o = i.kdf.execute(n, t.keySize, t.ivSize, i.salt, i.hasher);
                i.iv = o.iv;
                const s = tj.encrypt.call(this, t, e, o.key, i);
                s.mixIn(o);
                return s;
            };
            e.decrypt = function(t, e, n, r) {
                let i = e;
                const o = Object.assign(new ts, this.cfg, r);
                i = this._parse(i, o.format);
                const s = o.kdf.execute(n, t.keySize, t.ivSize, i.salt, o.hasher);
                o.iv = s.iv;
                return tj.decrypt.call(this, t, i, s.key, o);
            };
            return e;
        })(tj);
        tD.cfg = Object.assign(tj.cfg, {
            kdf: {
                execute (t, e, n, r, i) {
                    let o;
                    let s = r;
                    if (!s) {
                        s = ta.random(8);
                    }
                    o = i ? tI.create({
                        keySize: e + n,
                        hasher: i
                    }).compute(t, s) : tI.create({
                        keySize: e + n
                    }).compute(t, s);
                    const iv = ta.create(o.words.slice(e), 4 * n);
                    o.sigBytes = 4 * e;
                    return tP.create({
                        key: o,
                        iv,
                        salt: s
                    });
                }
            }
        });
        var tz = [];
        var tU = [];
        var tR = [];
        var tB = [];
        var tT = [];
        var tK = [];
        var tF = [];
        var tH = [];
        var tN = [];
        var tq = [];
        var tL = [];
        for(var tV = 0; tV < 256; tV += 1){
            if (tV < 128) {
                tL[tV] = tV << 1;
            } else {
                tL[tV] = tV << 1 ^ 283;
            }
        }
        var tQ = 0;
        var tW = 0;
        for(var tV = 0; tV < 256; tV += 1){
            var tJ = tW ^ tW << 1 ^ tW << 2 ^ tW << 3 ^ tW << 4;
            tJ = tJ >>> 8 ^ 255 & tJ ^ 99;
            tz[tQ] = tJ;
            tU[tJ] = tQ;
            var tG = tL[tQ];
            var t$ = tL[tG];
            var tX = tL[t$];
            var tZ = 257 * tL[tJ] ^ 16843008 * tJ;
            tR[tQ] = tZ << 24 | tZ >>> 8;
            tB[tQ] = tZ << 16 | tZ >>> 16;
            tT[tQ] = tZ << 8 | tZ >>> 24;
            tK[tQ] = tZ;
            tZ = 16843009 * tX ^ 65537 * t$ ^ 257 * tG ^ 16843008 * tQ;
            tF[tJ] = tZ << 24 | tZ >>> 8;
            tH[tJ] = tZ << 16 | tZ >>> 16;
            tN[tJ] = tZ << 8 | tZ >>> 24;
            tq[tJ] = tZ;
            if (tQ) {
                tQ = tG ^ tL[tL[tL[tX ^ tG]]];
                tW ^= tL[tL[tW]];
            } else {
                tW = 1;
                tQ = 1;
            }
        }
        var tY = [
            0,
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54
        ];
        var t0 = ((t)=>{
            function e() {
                return t !== null && t.apply(this, arguments) || this;
            }
            y.__extends(e, t);
            e.prototype._doReset = function() {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    this._keyPriorReset = this._key;
                    let t;
                    const e = this._keyPriorReset;
                    const n = e.words;
                    const r = e.sigBytes / 4;
                    this._nRounds = r + 6;
                    const i = (this._nRounds + 1) * 4;
                    this._keySchedule = [];
                    const o = this._keySchedule;
                    for(var s = 0; s < i; s += 1){
                        if (s < r) {
                            o[s] = n[s];
                        } else {
                            t = o[s - 1];
                            if (s % r) {
                                if (r > 6 && s % r == 4) {
                                    t = tz[t >>> 24] << 24 | tz[t >>> 16 & 255] << 16 | tz[t >>> 8 & 255] << 8 | tz[255 & t];
                                }
                            } else {
                                t = (tz[(t = t << 8 | t >>> 24) >>> 24] << 24 | tz[t >>> 16 & 255] << 16 | tz[t >>> 8 & 255] << 8 | tz[255 & t]) ^ tY[s / r | 0] << 24;
                            }
                            o[s] = o[s - r] ^ t;
                        }
                    }
                    this._invKeySchedule = [];
                    const a = this._invKeySchedule;
                    for(let u = 0; u < i; u += 1){
                        var s = i - u;
                        t = u % 4 ? o[s] : o[s - 4];
                        if (u < 4 || s <= 4) {
                            a[u] = t;
                        } else {
                            a[u] = tF[tz[t >>> 24]] ^ tH[tz[t >>> 16 & 255]] ^ tN[tz[t >>> 8 & 255]] ^ tq[tz[255 & t]];
                        }
                    }
                }
            };
            e.prototype.encryptBlock = function(t, e) {
                this._doCryptBlock(t, e, this._keySchedule, tR, tB, tT, tK, tz);
            };
            e.prototype.decryptBlock = function(t, e) {
                let n = t[e + 1];
                t[e + 1] = t[e + 3];
                t[e + 3] = n;
                this._doCryptBlock(t, e, this._invKeySchedule, tF, tH, tN, tq, tU);
                n = t[e + 1];
                t[e + 1] = t[e + 3];
                t[e + 3] = n;
            };
            e.prototype._doCryptBlock = function(t, e, n, r, i, o, s, a) {
                for(var u = this._nRounds, c = t[e] ^ n[0], l = t[e + 1] ^ n[1], h = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], d = 4, p = 1; p < u; p += 1){
                    const v = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & f] ^ n[d];
                    d += 1;
                    const g = r[l >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & c] ^ n[d];
                    d += 1;
                    const y = r[h >>> 24] ^ i[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & l] ^ n[d];
                    d += 1;
                    const _ = r[f >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & h] ^ n[d];
                    d += 1;
                    c = v;
                    l = g;
                    h = y;
                    f = _;
                }
                const m = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & f]) ^ n[d];
                d += 1;
                const w = (a[l >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ n[d];
                d += 1;
                const b = (a[h >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ n[d];
                d += 1;
                const S = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & h]) ^ n[d];
                d += 1;
                t[e] = m;
                t[e + 1] = w;
                t[e + 2] = b;
                t[e + 3] = S;
            };
            return e;
        })(tM);
        t0.keySize = 8;
        var t1 = tM._createHelper(t0);
        var t2 = (t)=>{
            let e;
            return new Uint8Array(((e = window == null ? undefined : window.atob(t)) != null ? e : "").split("").map((t)=>t.charCodeAt(0)));
        };
        function t4(t) {
            try {
                if (t) {
                    return JSON.parse(t);
                }
                return null;
            } catch (e) {
                return t || null;
            }
        }
        var t5 = "HtEvEncrypt:";
        var t3 = "RudderEncrypt:";
        var t6 = "RS_ENC_v3_";
        var t8 = (t)=>{
            const e = Date.now();
            const timeout = t || 1800000;
            if (timeout < 10000) {
                console.warn("Session timeouts of less than 10 seconds are not recommended");
            }
            return {
                id: e,
                expiresAt: e + timeout,
                timeout,
                sessionStart: true,
                autoTrack: true
            };
        };
        var t7 = (t)=>({
                id: !t || t.toString().startsWith("-") || t.toString().length < 10 ? Date.now() : t,
                sessionStart: true,
                manualTrack: true
            });
        var t9 = {
            persist: true,
            cookie: {
                key: "htjs_user_id",
                oldKey: "ajs_user"
            },
            localStorage: {
                key: "htjs_user_traits"
            },
            sessions: {
                autoTrack: true
            }
        };
        var et = (()=>{
            function t(t = t9, e) {
                let n;
                let r;
                let i;
                let o;
                let s;
                const a = this;
                this.options = {};
                this.id = (t)=>{
                    if (a.options.disable) {
                        return null;
                    }
                    let e;
                    let n;
                    let r;
                    let i;
                    const o = a.identityStore.getAndSync(a.idKey);
                    if (t !== undefined) {
                        const s = t === null;
                        const u = t !== o && o !== null && t !== null;
                        const c = t !== o && o === null && t !== null;
                        a.identityStore.set(a.idKey, t);
                        s && ((n = (e = a.options) == null ? undefined : e.httpCookieService) == null || n.dispatchClear());
                        if (u) {
                            a.anonymousId(null);
                        }
                        (u || c) && ((i = (r = a.options) == null ? undefined : r.httpCookieService) == null || i.dispatchCreate());
                    }
                    const l = a.identityStore.getAndSync(a.idKey);
                    if (l) {
                        return l;
                    }
                    const h = a.legacyUserStore.get(t9.cookie.oldKey);
                    if (h) {
                        if (typeof h === "object") {
                            return h.id;
                        }
                        return h;
                    }
                    return null;
                };
                this.anonymousId = (t)=>{
                    if (a.options.disable) {
                        return null;
                    }
                    if (t === undefined) {
                        let e;
                        let n;
                        let r;
                        let i;
                        let o;
                        let s;
                        var u;
                        var c;
                        var l;
                        var h;
                        let f = a.identityStore.getAndSync(a.anonKey);
                        let d = false;
                        if (!f) {
                            d = !!(f = ((t)=>{
                                try {
                                    if (!t || typeof t !== "string" || t.trim() === "") {
                                        return null;
                                    }
                                    if (t.substring(0, t5.length) === t5) {
                                        return t4(t1.decrypt(t.substring(t5.length), "HTEV").toString(th));
                                    }
                                } catch (error) {
                                    console.error(error);
                                }
                                return t;
                            })((e = a.identityStore.getAndSync("htev_anonymous_id")) != null ? e : ""));
                            if (f) {
                                a.identityStore.set(a.anonKey, f);
                            }
                        }
                        if (!f) {
                            d = !!(f = a.identityStore.getAndSync("ajs_anonymous_id"));
                            if (f) {
                                a.identityStore.set(a.anonKey, f);
                            }
                        }
                        if (!f) {
                            d = !!(f = ((t)=>{
                                try {
                                    if (!t || typeof t !== "string" || t.trim() === "") {
                                        return null;
                                    }
                                    if (t.substring(0, t3.length) === t3) {
                                        return t4(t1.decrypt(t.substring(t3.length), "Rudder").toString(th));
                                    }
                                    if (t.substring(0, t6.length) === t6) {
                                        let e;
                                        const n = t4((e = t.substring(t6.length), new TextDecoder().decode(t2(e))));
                                        if (!n || typeof n !== "string" || n.trim() === "") {
                                            return null;
                                        }
                                        return n;
                                    }
                                } catch (error) {
                                    console.error(error);
                                }
                                return t;
                            })((n = a.identityStore.getAndSync("rl_anonymous_id")) != null ? n : ""));
                            if (f) {
                                a.identityStore.set(a.anonKey, f);
                            }
                        }
                        if (!f) {
                            f = (i = (r = a.legacySIO()) == null ? undefined : r[0]) != null ? i : null;
                        }
                        d && ((s = (o = a.options) == null ? undefined : o.httpCookieService) == null || s.dispatchCreate());
                        if (f) {
                            return f;
                        }
                    }
                    if (t === null) {
                        a.identityStore.set(a.anonKey, null);
                        const p = a.identityStore.getAndSync(a.anonKey);
                        if (!((c = (u = a.options) == null ? undefined : u.httpCookieService) == null)) {
                            c.dispatchClear();
                        }
                        return p;
                    }
                    a.identityStore.set(a.anonKey, t != null ? t : E.v4());
                    const v = a.identityStore.getAndSync(a.anonKey);
                    if (!((h = (l = a.options) == null ? undefined : l.httpCookieService) == null)) {
                        h.dispatchCreate();
                    }
                    return v;
                };
                this.traits = (t)=>{
                    let e;
                    if (!a.options.disable) {
                        if (t === null) {
                            t = {};
                        }
                        if (t) {
                            a.traitsStore.set(a.traitsKey, t != null ? t : {});
                        }
                        if ((e = a.traitsStore.get(a.traitsKey)) != null) {
                            return e;
                        }
                        return {};
                    }
                };
                this.options = y.__assign(y.__assign({}, t9), t);
                this.cookieOptions = e;
                this.idKey = (r = (n = t.cookie) == null ? undefined : n.key) != null ? r : t9.cookie.key;
                this.traitsKey = (o = (i = t.localStorage) == null ? undefined : i.key) != null ? o : t9.localStorage.key;
                this.anonKey = "htjs_anonymous_id";
                this.seshKey = "htjs_sesh";
                this.identityStore = this.createStorage(this.options, e);
                this.sessionStore = this.createStorage(this.options, e);
                this.legacyUserStore = this.createStorage(this.options, e, (t)=>t === $.Cookie);
                this.traitsStore = this.createStorage(this.options, e, (t)=>t !== $.Cookie);
                const u = this.legacyUserStore.get(t9.cookie.oldKey);
                u && typeof u === "object" && (u.id && this.id(u.id), u.traits && this.traits(u.traits));
                if (this.options.httpCookieService) {
                    this.identityStore.getAndSync(this.anonKey);
                    this.identityStore.getAndSync(this.idKey);
                    if (!((s = this.options.httpCookieService) == null)) {
                        s.dispatchCreate();
                    }
                }
                Q(this);
            }
            t.prototype.legacySIO = function() {
                const t = this.legacyUserStore.get("_sio");
                if (!t) {
                    return null;
                }
                const e = t.split("----");
                return [
                    e[0],
                    e[1]
                ];
            };
            t.prototype.identify = function(t, e) {
                if (!this.options.disable) {
                    e = e != null ? e : {};
                    const n = this.id();
                    if (n === null || n === t) {
                        e = y.__assign(y.__assign({}, this.traits()), e);
                    }
                    if (t) {
                        this.id(t);
                    }
                    this.traits(e);
                }
            };
            t.prototype.startManualSession = function(t) {
                if (!this.options.disable) {
                    this.sessionStore.clear(this.seshKey);
                    const e = t7(t);
                    this.sessionStore.set(this.seshKey, e);
                }
            };
            t.prototype.endManualSession = function() {
                this.sessionStore.clear(this.seshKey);
            };
            t.prototype.getAndUpdateSessionInfo = function() {
                if (this.options.disable) {
                    return null;
                }
                let t;
                let e;
                let n;
                let r;
                let i;
                let o;
                let s;
                let a;
                let u = this.sessionStore.getAndSync(this.seshKey);
                if (u == null) {
                    if ((r = (n = this.options) == null ? undefined : n.sessions) == null ? undefined : r.autoTrack) {
                        u = t8((o = (i = this.options) == null ? undefined : i.sessions) == null ? undefined : o.timeout);
                        this.sessionStore.set(this.seshKey, u);
                        return u;
                    }
                    return null;
                }
                if ((u == null ? undefined : u.autoTrack) && (t = u.expiresAt, Date.now() > t)) {
                    u = t8((a = (s = this.options) == null ? undefined : s.sessions) == null ? undefined : a.timeout);
                    this.sessionStore.set(this.seshKey, u);
                    return u;
                }
                e = u;
                e.sessionStart = false;
                if (e.autoTrack) {
                    e.expiresAt = Date.now() + e.timeout;
                }
                u = e;
                this.sessionStore.set(this.seshKey, u);
                return u;
            };
            t.prototype.getAndUpdateSession = function() {
                const t = this.getAndUpdateSessionInfo();
                const e = {};
                if (t == null ? undefined : t.id) {
                    e.sessionId = t.id;
                }
                if (t == null ? undefined : t.sessionStart) {
                    e.sessionStart = t.sessionStart;
                }
                return e;
            };
            t.prototype.sessionId = function() {
                let t;
                const e = this.sessionStore.getAndSync(this.seshKey);
                if ((t = e == null ? undefined : e.id) != null) {
                    return t;
                }
                return null;
            };
            t.prototype.logout = function() {
                this.anonymousId(null);
                this.id(null);
                this.traits({});
            };
            t.prototype.reset = function() {
                this.logout();
                this.identityStore.clear(this.idKey);
                this.identityStore.clear(this.anonKey);
                this.sessionStore.clear(this.seshKey);
                this.traitsStore.clear(this.traitsKey);
            };
            t.prototype.load = function() {
                return new t(this.options, this.cookieOptions);
            };
            t.prototype.save = ()=>true;
            t.prototype.createStorage = (t, e, n)=>{
                let r = [
                    $.LocalStorage,
                    $.Cookie,
                    $.Memory
                ];
                if (t.disable) {
                    return new J([]);
                }
                if (t.persist) {
                    if (t.storage !== undefined && t.storage !== null && tn(t.storage)) {
                        r = t.storage.stores;
                    }
                    if (t.localStorageFallbackDisabled) {
                        r = r.filter((t)=>t !== $.LocalStorage);
                    }
                    if (n) {
                        r = r.filter(n);
                    }
                    return new J(tr(ti(r, e)));
                }
                return new J([
                    new G
                ]);
            };
            t.defaults = t9;
            return t;
        })();
        var ee = {
            persist: true,
            cookie: {
                key: "htjs_group_id"
            },
            localStorage: {
                key: "htjs_group_properties"
            }
        };
        var en = ((t)=>{
            function e(e = ee, n) {
                const r = t.call(this, y.__assign(y.__assign({}, ee), e), n) || this;
                r.anonymousId = (t)=>{};
                Q(r);
                return r;
            }
            y.__extends(e, t);
            return e;
        })(et);
        var er = t.i(130797);
        var ei = t.i(985821);
        var eo = t.i(245702);
        var es = (t, e, n)=>{
            n.getCalls(t).forEach((t)=>{
                ep(e, t).catch(console.error);
            });
        };
        var ea = es.bind(undefined, "on");
        var eu = es.bind(undefined, "setAnonymousId");
        var ec = (t, e)=>{
            e.toArray().forEach((e)=>{
                setTimeout(()=>{
                    ep(t, e).catch(console.error);
                }, 0);
            });
        };
        var el = (t)=>{
            if (eh(t)) {
                return R(t.pop());
            }
        };
        var eh = (t)=>{
            const e = t[t.length - 1];
            if (!w.isPlainObject(e) || e.__t !== "bpc") {
                return false;
            }
            for(const n in e){
                if (!D.includes(n)) {
                    return false;
                }
            }
            return true;
        };
        var ef = function(t, e, n = function() {}, r = console.error) {
            this.method = t;
            this.resolve = n;
            this.reject = r;
            this.called = false;
            this.args = e;
        };
        class ed {
            constructor(){
                var t = [];
                for(var e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                this._callMap = {};
                this.push.apply(this, t);
            }
            get calls() {
                this._pushSnippetWindowBuffer();
                return this._callMap;
            }
            set calls(t) {
                this._callMap = t;
            }
            getCalls(t) {
                let e;
                if ((e = this.calls[t]) != null) {
                    return e;
                }
                return [];
            }
            push() {
                const t = this;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                e.forEach((e)=>{
                    if ([
                        "track",
                        "screen",
                        "alias",
                        "group",
                        "page",
                        "identify"
                    ].includes(e.method) && !eh(e.args)) {
                        e.args = y.__spreadArray(y.__spreadArray([], e.args, true), [
                            B()
                        ], false);
                    }
                    if (t.calls[e.method]) {
                        t.calls[e.method].push(e);
                    } else {
                        t.calls[e.method] = [
                            e
                        ];
                    }
                });
            }
            clear() {
                this._pushSnippetWindowBuffer();
                this.calls = {};
            }
            toArray() {
                let t;
                return (t = []).concat.apply(t, Object.values(this.calls));
            }
            _pushSnippetWindowBuffer() {
                const t = eo.getGlobalAnalytics();
                if (Array.isArray(t)) {
                    const e = t.splice(0, t.length).map((t)=>new ef(t[0], t.slice(1)));
                    this.push.apply(this, e);
                }
            }
        }
        function ep(t, e) {
            return y.__awaiter(this, undefined, undefined, function() {
                let n;
                let r;
                return y.__generator(this, (i)=>{
                    switch(i.label){
                        case 0:
                            let o;
                            i.trys.push([
                                0,
                                3,
                                ,
                                4
                            ]);
                            if (e.called) {
                                return [
                                    2,
                                    undefined
                                ];
                            }
                            e.called = true;
                            if (!(typeof (o = n = t[e.method].apply(t, e.args)) === "object" && o !== null && "then" in o && typeof o.then === "function")) {
                                return [
                                    3,
                                    2
                                ];
                            }
                            return [
                                4,
                                n
                            ];
                        case 1:
                            i.sent();
                            i.label = 2;
                        case 2:
                            e.resolve(n);
                            return [
                                3,
                                4
                            ];
                        case 3:
                            r = i.sent();
                            e.reject(r);
                            return [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
        }
        var ev = (()=>{
            function t(t) {
                const e = this;
                this.trackSubmit = this._createMethod("trackSubmit");
                this.trackClick = this._createMethod("trackClick");
                this.trackLink = this._createMethod("trackLink");
                this.pageView = this._createMethod("pageview");
                this.identify = this._createMethod("identify");
                this.reset = this._createMethod("reset");
                this.group = this._createMethod("group");
                this.track = this._createMethod("track");
                this.ready = this._createMethod("ready");
                this.alias = this._createMethod("alias");
                this.debug = this._createChainableMethod("debug");
                this.page = this._createMethod("page");
                this.once = this._createChainableMethod("once");
                this.off = this._createChainableMethod("off");
                this.on = this._createChainableMethod("on");
                this.addSourceMiddleware = this._createMethod("addSourceMiddleware");
                this.setAnonymousId = this._createMethod("setAnonymousId");
                this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware");
                this.screen = this._createMethod("screen");
                this.register = this._createMethod("register");
                this.deregister = this._createMethod("deregister");
                this.user = this._createMethod("user");
                this.VERSION = er.version;
                this._preInitBuffer = new ed;
                this._promise = t(this._preInitBuffer);
                this._promise.then((t)=>{
                    const n = t[0];
                    const r = t[1];
                    e.instance = n;
                    e.ctx = r;
                }).catch(()=>{});
            }
            t.prototype.then = function() {
                let t;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return (t = this._promise).then.apply(t, e);
            };
            t.prototype.catch = function() {
                let t;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return (t = this._promise).catch.apply(t, e);
            };
            t.prototype.finally = function() {
                let t;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return (t = this._promise).finally.apply(t, e);
            };
            t.prototype._createMethod = function(t) {
                const e = this;
                return function() {
                    let n;
                    const r = [];
                    for(let i = 0; i < arguments.length; i++){
                        r[i] = arguments[i];
                    }
                    if (e.instance) {
                        return Promise.resolve((n = e.instance)[t].apply(n, r));
                    }
                    return new Promise((resolve, reject)=>{
                        e._preInitBuffer.push(new ef(t, r, resolve, reject));
                    });
                };
            };
            t.prototype._createChainableMethod = function(t) {
                const e = this;
                return function() {
                    let n;
                    const r = [];
                    for(let i = 0; i < arguments.length; i++){
                        r[i] = arguments[i];
                    }
                    if (e.instance) {
                        (n = e.instance)[t].apply(n, r);
                    } else {
                        e._preInitBuffer.push(new ef(t, r));
                    }
                    return e;
                };
            };
            return t;
        })();
        var eg = "This is being deprecated and will be not be available in future releases of Analytics JS";
        var ey = ei.getGlobal();
        var e_ = ey == null ? undefined : ey.analytics;
        function em() {
            console.warn(eg);
        }
        var ew = ((e)=>{
            function n(t, n, r, i, o) {
                let s;
                let a;
                let u;
                let c;
                let l;
                let h;
                let f;
                let d = this;
                d = e.call(this) || this;
                d._debug = false;
                d.initialized = false;
                d.user = ()=>d._user;
                d.init = d.initialize.bind(d);
                d.log = em;
                d.addIntegrationMiddleware = em;
                d.listeners = em;
                d.addEventListener = em;
                d.removeAllListeners = em;
                d.removeListener = em;
                d.removeEventListener = em;
                d.hasListeners = em;
                d.add = em;
                d.addIntegration = em;
                const p = n == null ? undefined : n.cookie;
                const v = (l = n == null ? undefined : n.disableClientPersistence) != null && l;
                d.settings = t;
                d.settings.timeout = (h = d.settings.timeout) != null ? h : 300;
                d.queue = r != null ? r : (s = "".concat(t.writeKey, ":event-queue"), (a = n == null ? undefined : n.retryQueue) === undefined && (a = false), (u = v) === undefined && (u = false), c = a ? 4 : 1, new V(u ? new H.PriorityQueue(c, []) : new F.PersistedPriorityQueue(c, s)));
                const g = n == null ? undefined : n.storage;
                d._universalStorage = d.createStore(v, g, p);
                d._user = i != null ? i : new et(y.__assign({
                    persist: !v,
                    storage: n == null ? undefined : n.storage,
                    httpCookieService: n == null ? undefined : n.httpCookieService
                }, n == null ? undefined : n.user), p).load();
                d._group = o != null ? o : new en(y.__assign({
                    persist: !v,
                    storage: n == null ? undefined : n.storage
                }, n == null ? undefined : n.group), p).load();
                d.eventFactory = new K(d._user);
                d.integrations = (f = n == null ? undefined : n.integrations) != null ? f : {};
                d.options = n != null ? n : {};
                Q(d);
                return d;
            }
            y.__extends(n, e);
            n.prototype.createStore = (t, e, n)=>new J(t ? [
                    new G
                ] : e && tn(e) ? tr(ti(e.stores, n)) : tr([
                    $.LocalStorage,
                    {
                        name: $.Cookie,
                        settings: n
                    },
                    $.Memory
                ]));
            Object.defineProperty(n.prototype, "storage", {
                get () {
                    return this._universalStorage;
                },
                enumerable: false,
                configurable: true
            });
            n.prototype.track = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    const u = this;
                    return y.__generator(this, function(c) {
                        e = el(t);
                        r = (n = b.apply(undefined, t))[0];
                        i = n[1];
                        o = n[2];
                        s = n[3];
                        a = this.eventFactory.track(r, i, o, this.integrations, e);
                        return [
                            2,
                            this._dispatch(a, s).then((t)=>{
                                u.emit("track", r, t.event.properties, t.event.options);
                                return t;
                            })
                        ];
                    });
                });
            };
            n.prototype.page = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    let u;
                    const c = this;
                    return y.__generator(this, function(l) {
                        e = el(t);
                        r = (n = S.apply(undefined, t))[0];
                        i = n[1];
                        o = n[2];
                        s = n[3];
                        a = n[4];
                        u = this.eventFactory.page(r, i, o, s, this.integrations, e);
                        return [
                            2,
                            this._dispatch(u, a).then((t)=>{
                                c.emit("page", r, i, t.event.properties, t.event.options);
                                return t;
                            })
                        ];
                    });
                });
            };
            n.prototype.identify = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    const u = this;
                    return y.__generator(this, function(c) {
                        e = el(t);
                        r = (n = k(this._user).apply(undefined, t))[0];
                        i = n[1];
                        o = n[2];
                        s = n[3];
                        this._user.identify(r, i);
                        a = this.eventFactory.identify(this._user.id(), this._user.traits(), o, this.integrations, e);
                        return [
                            2,
                            this._dispatch(a, s).then((t)=>{
                                u.emit("identify", t.event.userId, t.event.traits, t.event.options);
                                return t;
                            })
                        ];
                    });
                });
            };
            n.prototype.group = function() {
                const t = this;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                const r = el(e);
                if (e.length === 0) {
                    return this._group;
                }
                const i = k(this._group).apply(undefined, e);
                const o = i[0];
                const s = i[1];
                const a = i[2];
                const u = i[3];
                this._group.identify(o, s);
                const c = this._group.id();
                const l = this._group.traits();
                const h = this.eventFactory.group(c, l, a, this.integrations, r);
                return this._dispatch(h, u).then((e)=>{
                    t.emit("group", e.event.groupId, e.event.traits, e.event.options);
                    return e;
                });
            };
            n.prototype.alias = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    const u = this;
                    return y.__generator(this, function(c) {
                        e = el(t);
                        r = (n = I.apply(undefined, t))[0];
                        i = n[1];
                        o = n[2];
                        s = n[3];
                        a = this.eventFactory.alias(r, i, o, this.integrations, e);
                        return [
                            2,
                            this._dispatch(a, s).then((t)=>{
                                u.emit("alias", r, i, t.event.options);
                                return t;
                            })
                        ];
                    });
                });
            };
            n.prototype.screen = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    let n;
                    let r;
                    let i;
                    let o;
                    let s;
                    let a;
                    let u;
                    const c = this;
                    return y.__generator(this, function(l) {
                        e = el(t);
                        r = (n = S.apply(undefined, t))[0];
                        i = n[1];
                        o = n[2];
                        s = n[3];
                        a = n[4];
                        u = this.eventFactory.screen(r, i, o, s, this.integrations, e);
                        return [
                            2,
                            this._dispatch(u, a).then((t)=>{
                                c.emit("screen", r, i, t.event.properties, t.event.options);
                                return t;
                            })
                        ];
                    });
                });
            };
            n.prototype.trackClick = function() {
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let n;
                    return y.__generator(this, function(r) {
                        switch(r.label){
                            case 0:
                                return [
                                    4,
                                    t.A(983366)
                                ];
                            case 1:
                                return [
                                    2,
                                    (n = r.sent().link).call.apply(n, y.__spreadArray([
                                        this
                                    ], e, false))
                                ];
                        }
                    });
                });
            };
            n.prototype.trackLink = function() {
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let n;
                    return y.__generator(this, function(r) {
                        switch(r.label){
                            case 0:
                                return [
                                    4,
                                    t.A(983366)
                                ];
                            case 1:
                                return [
                                    2,
                                    (n = r.sent().link).call.apply(n, y.__spreadArray([
                                        this
                                    ], e, false))
                                ];
                        }
                    });
                });
            };
            n.prototype.trackSubmit = function() {
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let n;
                    return y.__generator(this, function(r) {
                        switch(r.label){
                            case 0:
                                return [
                                    4,
                                    t.A(983366)
                                ];
                            case 1:
                                return [
                                    2,
                                    (n = r.sent().form).call.apply(n, y.__spreadArray([
                                        this
                                    ], e, false))
                                ];
                        }
                    });
                });
            };
            n.prototype.trackForm = function() {
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let n;
                    return y.__generator(this, function(r) {
                        switch(r.label){
                            case 0:
                                return [
                                    4,
                                    t.A(983366)
                                ];
                            case 1:
                                return [
                                    2,
                                    (n = r.sent().form).call.apply(n, y.__spreadArray([
                                        this
                                    ], e, false))
                                ];
                        }
                    });
                });
            };
            n.prototype.register = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    const n = this;
                    return y.__generator(this, (r)=>{
                        switch(r.label){
                            case 0:
                                e = C.Context.system();
                                return [
                                    4,
                                    Promise.all(t.map((t)=>n.queue.register(e, t, n)))
                                ];
                            case 1:
                                r.sent();
                                return [
                                    2,
                                    e
                                ];
                        }
                    });
                });
            };
            n.prototype.deregister = function() {
                const t = [];
                for(let e = 0; e < arguments.length; e++){
                    t[e] = arguments[e];
                }
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    const n = this;
                    return y.__generator(this, (r)=>{
                        switch(r.label){
                            case 0:
                                e = C.Context.system();
                                return [
                                    4,
                                    Promise.all(t.map((t)=>{
                                        const r = n.queue.plugins.find((e)=>e.name === t);
                                        if (r) {
                                            return n.queue.deregister(e, r, n);
                                        }
                                        e.log("warn", "plugin ".concat(t, " not found"));
                                    }))
                                ];
                            case 1:
                                r.sent();
                                return [
                                    2,
                                    e
                                ];
                        }
                    });
                });
            };
            n.prototype.debug = function(t) {
                if (t === false && localStorage.getItem("debug")) {
                    localStorage.removeItem("debug");
                }
                this._debug = t;
                return this;
            };
            n.prototype.startSession = function(t) {
                this._user.startManualSession(t);
            };
            n.prototype.endSession = function() {
                this._user.endManualSession();
            };
            n.prototype.getSessionId = function() {
                let t;
                if ((t = this._user.sessionId()) != null) {
                    return t;
                }
                return null;
            };
            n.prototype.reset = function() {
                this._user.reset();
                this._group.reset();
                this.emit("reset");
            };
            n.prototype.timeout = function(t) {
                this.settings.timeout = t;
            };
            n.prototype._dispatch = function(t, callback) {
                return y.__awaiter(this, undefined, undefined, function() {
                    let n;
                    return y.__generator(this, function(r) {
                        n = new C.Context(t);
                        if (A.isOffline() && !this.options.retryQueue) {
                            return [
                                2,
                                n
                            ];
                        }
                        return [
                            2,
                            function(t, e, n, r) {
                                return y.__awaiter(this, undefined, undefined, function() {
                                    let i;
                                    let o;
                                    return y.__generator(this, (s)=>{
                                        switch(s.label){
                                            case 0:
                                                n.emit("dispatch_start", t);
                                                i = Date.now();
                                                if (!e.isEmpty()) {
                                                    return [
                                                        3,
                                                        2
                                                    ];
                                                }
                                                return [
                                                    4,
                                                    e.dispatchSingle(t)
                                                ];
                                            case 1:
                                                o = s.sent();
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 2:
                                                return [
                                                    4,
                                                    e.dispatch(t)
                                                ];
                                            case 3:
                                                o = s.sent();
                                                s.label = 4;
                                            case 4:
                                                let a;
                                                let u;
                                                if (!(r == null ? undefined : r.callback)) {
                                                    return [
                                                        3,
                                                        6
                                                    ];
                                                }
                                                return [
                                                    4,
                                                    x.invokeCallback(o, r.callback, (a = i, Math.max(((u = r.timeout) != null ? u : 300) - (Date.now() - a), 0)))
                                                ];
                                            case 5:
                                                o = s.sent();
                                                s.label = 6;
                                            case 6:
                                                if (r == null ? undefined : r.debug) {
                                                    o.flush();
                                                }
                                                return [
                                                    2,
                                                    o
                                                ];
                                        }
                                    });
                                });
                            }(n, this.queue, this, {
                                callback,
                                debug: this._debug,
                                timeout: this.settings.timeout
                            })
                        ];
                    });
                });
            };
            n.prototype.addSourceMiddleware = function(e) {
                return y.__awaiter(this, undefined, undefined, function() {
                    const n = this;
                    return y.__generator(this, function(r) {
                        switch(r.label){
                            case 0:
                                return [
                                    4,
                                    this.queue.criticalTasks.run(()=>y.__awaiter(n, undefined, undefined, function() {
                                            let n;
                                            let r;
                                            let i;
                                            return y.__generator(this, function(o) {
                                                switch(o.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            t.A(812617)
                                                        ];
                                                    case 1:
                                                        n = o.sent().sourceMiddlewarePlugin;
                                                        r = {};
                                                        this.queue.plugins.forEach((t)=>{
                                                            if (t.type === "destination") {
                                                                return r[t.name] = true;
                                                            }
                                                        });
                                                        i = n(e, r);
                                                        return [
                                                            4,
                                                            this.register(i)
                                                        ];
                                                    case 2:
                                                        o.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }))
                                ];
                            case 1:
                                r.sent();
                                return [
                                    2,
                                    this
                                ];
                        }
                    });
                });
            };
            n.prototype.addDestinationMiddleware = function(t) {
                const e = [];
                for(let n = 1; n < arguments.length; n++){
                    e[n - 1] = arguments[n];
                }
                this.queue.plugins.filter((e)=>e.name.toLowerCase() === t.toLowerCase()).forEach((t)=>{
                    t.addMiddleware.apply(t, e);
                });
                return Promise.resolve(this);
            };
            n.prototype.setAnonymousId = function(t) {
                return this._user.anonymousId(t);
            };
            n.prototype.queryString = function(e) {
                return y.__awaiter(this, undefined, undefined, function() {
                    return y.__generator(this, function(n) {
                        switch(n.label){
                            case 0:
                                if (this.options.useQueryString === false) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    t.A(108326)
                                ];
                            case 1:
                                return [
                                    2,
                                    n.sent().queryString(this, e)
                                ];
                        }
                    });
                });
            };
            n.prototype.use = function(t) {
                t(this);
                return this;
            };
            n.prototype.ready = function(t = (t)=>t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    return y.__generator(this, function(e) {
                        return [
                            2,
                            Promise.all(this.queue.plugins.map((t)=>{
                                if (t.ready) {
                                    return t.ready();
                                }
                                return Promise.resolve();
                            })).then((e)=>{
                                t(e);
                                return e;
                            })
                        ];
                    });
                });
            };
            n.prototype.noConflict = function() {
                console.warn(eg);
                eo.setGlobalAnalytics(e_ != null ? e_ : this);
                return this;
            };
            n.prototype.normalize = function(t) {
                console.warn(eg);
                return this.eventFactory.normalize(t);
            };
            Object.defineProperty(n.prototype, "failedInitializations", {
                get () {
                    console.warn(eg);
                    return this.queue.failedInitializations;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(n.prototype, "VERSION", {
                get () {
                    return er.version;
                },
                enumerable: false,
                configurable: true
            });
            n.prototype.initialize = function(t, e) {
                return y.__awaiter(this, undefined, undefined, function() {
                    return y.__generator(this, function(t) {
                        console.warn(eg);
                        return [
                            2,
                            Promise.resolve(this)
                        ];
                    });
                });
            };
            n.prototype.pageview = function(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    return y.__generator(this, function(e) {
                        switch(e.label){
                            case 0:
                                console.warn(eg);
                                return [
                                    4,
                                    this.page({
                                        path: t
                                    })
                                ];
                            case 1:
                                e.sent();
                                return [
                                    2,
                                    this
                                ];
                        }
                    });
                });
            };
            Object.defineProperty(n.prototype, "plugins", {
                get () {
                    let t;
                    console.warn(eg);
                    if ((t = this._plugins) != null) {
                        return t;
                    }
                    return {};
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(n.prototype, "Integrations", {
                get () {
                    console.warn(eg);
                    return this.queue.plugins.filter((t)=>t.type === "destination").reduce((acc, item)=>{
                        const n = "".concat(item.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration");
                        const r = window[n];
                        if (!r) {
                            return acc;
                        }
                        const r_Integration = r.Integration;
                        if (r_Integration) {
                            acc[item.name] = r_Integration;
                        } else {
                            acc[item.name] = r;
                        }
                        return acc;
                    }, {});
                },
                enumerable: false,
                configurable: true
            });
            n.prototype.push = function(t) {
                const e = t.shift();
                if (!e || this[e]) {
                    this[e].apply(this, t);
                }
            };
            return n;
        })(O.Emitter);
        var eb = t.i(233754);
        var eS = function() {
            class t {
                constructor(e){
                    let n;
                    let r;
                    let i;
                    const o = t.urlHelper(e);
                    this.renewUrl = o.renewUrl;
                    this.clearUrl = o.clearUrl;
                    this.backoff = (n = e.backoff) != null ? n : 300;
                    this.retries = (r = e.retries) != null ? r : 3;
                    this.flushInterval = (i = e.flushInterval) != null ? i : 1000;
                    this.queue = [];
                }
                static urlHelper(t) {
                    const origin = window.location.origin;
                    return {
                        renewUrl: new URL(t.renewUrl, origin).href,
                        clearUrl: new URL(t.clearUrl, origin).href
                    };
                }
                static load(e) {
                    return y.__awaiter(this, undefined, undefined, function() {
                        let n;
                        return y.__generator(this, (r)=>{
                            switch(r.label){
                                case 0:
                                    return [
                                        4,
                                        ek((n = new t(e)).sendHTTPCookies(n.renewUrl), n.retries, n.backoff).catch(console.error)
                                    ];
                                case 1:
                                    r.sent();
                                    n.startQueueConsumer();
                                    return [
                                        2,
                                        n
                                    ];
                            }
                        });
                    });
                }
                dispatchCreate() {
                    this.queue.push(this.sendHTTPCookies(this.renewUrl));
                }
                dispatchClear() {
                    this.queue.push(this.sendHTTPCookies(this.clearUrl));
                }
                startQueueConsumer() {
                    if (this.flushIntervalId) {
                        return void console.error("HTTPCookie queue consumer is already running.");
                    }
                    const t = this.consumeQueue.bind(this);
                    this.flushIntervalId = setInterval(()=>t().catch(console.error), this.flushInterval);
                }
                stopQueueConsumer() {
                    if (this.flushIntervalId) {
                        clearInterval(this.flushIntervalId);
                        this.flushIntervalId = undefined;
                    } else {
                        console.error("HTTPCookie queue consumer is already stopped.");
                    }
                }
                sendHTTPCookies(t) {
                    return function() {
                        return y.__awaiter(this, undefined, undefined, function() {
                            return y.__generator(this, (e)=>{
                                switch(e.label){
                                    case 0:
                                        return [
                                            4,
                                            eb.fetch(t, {
                                                credentials: "include",
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                },
                                                method: "post",
                                                body: JSON.stringify({
                                                    sentAt: new Date().toISOString()
                                                })
                                            })
                                        ];
                                    case 1:
                                        return [
                                            2,
                                            e.sent()
                                        ];
                                }
                            });
                        });
                    };
                }
                consumeQueue() {
                    return y.__awaiter(this, undefined, undefined, function() {
                        return y.__generator(this, function(t) {
                            switch(t.label){
                                case 0:
                                    if (!(this.queue.length > 0)) {
                                        return [
                                            3,
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        ek(this.queue.shift(), this.retries, this.backoff).catch(console.error)
                                    ];
                                case 1:
                                    t.sent();
                                    return [
                                        3,
                                        0
                                    ];
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }
            }
            return t;
        }();
        function ek(t, e, backoff) {
            return y.__awaiter(this, undefined, undefined, function() {
                let r;
                return y.__generator(this, (i)=>{
                    switch(i.label){
                        case 0:
                            if (!(e >= 0)) {
                                return [
                                    3,
                                    6
                                ];
                            }
                            i.label = 1;
                        case 1:
                            i.trys.push([
                                1,
                                3,
                                ,
                                5
                            ]);
                            return [
                                4,
                                t().then((t)=>{
                                    if (t.ok) {
                                        return t;
                                    }
                                    throw Error("Status: ".concat(t.status, " ").concat(t.statusText));
                                })
                            ];
                        case 2:
                            return [
                                2,
                                i.sent()
                            ];
                        case 3:
                            r = i.sent();
                            if ((e -= 1) <= 0) {
                                throw r;
                            }
                            return [
                                4,
                                function(t) {
                                    return y.__awaiter(this, undefined, undefined, function() {
                                        return y.__generator(this, (e)=>[
                                                2,
                                                new Promise((resolve)=>setTimeout(resolve, t))
                                            ]);
                                    });
                                }(backoff)
                            ];
                        case 4:
                            i.sent();
                            return [
                                3,
                                5
                            ];
                        case 5:
                            return [
                                3,
                                0
                            ];
                        case 6:
                            throw Error("HtEvents: Problem with DeferredRequest");
                    }
                });
            });
        }
        var eI = t.i(795847);
        var eA = ()=>{
            let resolve;
            let reject;
            const promise = new Promise((resolvePromise, rejectPromise)=>{
                resolve = resolvePromise;
                reject = rejectPromise;
            });
            return {
                resolve,
                reject,
                promise
            };
        };
        var eC = t.i(724231);
        var ex = t.i(485718);
        var eO = (t)=>{
            try {
                const e = new URLSearchParams;
                Object.entries(t).forEach((t)=>{
                    const n = t[0];
                    const r = t[1];
                    if (Array.isArray(r)) {
                        r.forEach((t)=>e.append(n, t));
                    } else {
                        e.append(n, r);
                    }
                });
                return e.toString();
            } catch (t) {
                return "";
            }
        };
        var eE = new function() {
            const t = this;
            this.name = "Page Enrichment";
            this.type = "before";
            this.version = "0.1.0";
            this.isLoaded = ()=>true;
            this.load = (e, n)=>y.__awaiter(t, undefined, undefined, function() {
                    let t;
                    return y.__generator(this, function(e) {
                        switch(e.label){
                            case 0:
                                this.instance = n;
                                e.label = 1;
                            case 1:
                                e.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                t = this;
                                return [
                                    4,
                                    function(t) {
                                        return y.__awaiter(this, undefined, undefined, function() {
                                            let e;
                                            return y.__generator(this, (n)=>{
                                                if (e = navigator.userAgentData) {
                                                    if (t) {
                                                        return [
                                                            2,
                                                            e.getHighEntropyValues(t).catch(()=>e.toJSON())
                                                        ];
                                                    }
                                                    return [
                                                        2,
                                                        e.toJSON()
                                                    ];
                                                }
                                                return [
                                                    2,
                                                    undefined
                                                ];
                                            });
                                        });
                                    }(this.instance.options.highEntropyValuesClientHints)
                                ];
                            case 2:
                                t.userAgentData = e.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2,
                                    Promise.resolve()
                                ];
                        }
                    });
                });
            this.enrich = (e)=>{
                let n;
                let r;
                let i;
                let o;
                let s;
                let a;
                const context = e.event.context;
                const c = context.page.search || "";
                const h = typeof c === "object" ? eO(c) : c;
                context.userAgent = navigator.userAgent;
                context.userAgentData = t.userAgentData;
                const f = navigator.userLanguage || navigator.language;
                if (context.locale === undefined && f !== undefined) {
                    context.locale = f;
                }
                if (!(context.library != null)) {
                    context.library = {
                        name: "events-sdk-js",
                        version: `${eC.getVersionType() === "web" ? "web" : "npm"}-`.concat(er.version)
                    };
                }
                if (h && !context.campaign) {
                    if ((n = h).startsWith("?")) {
                        n = n.substring(1);
                    }
                    context.campaign = (n = n.replace(/\?/g, "&")).split("&").reduce((acc, item)=>{
                        const n = item.split("=");
                        const r = n[0];
                        const i = n[1];
                        if (r.includes("utm_") && r.length > 4) {
                            let o = r.slice(4);
                            if (o === "campaign") {
                                o = "name";
                            }
                            acc[o] = ex.gracefulDecodeURIComponent(i === undefined ? "" : i);
                        }
                        return acc;
                    }, {});
                }
                const d = (()=>{
                    const t = Z.get("_ga");
                    if (t && t.startsWith("amp")) {
                        return t;
                    }
                })();
                if (d) {
                    context.amp = {
                        id: d
                    };
                }
                o = (i = new J((a = t.instance.options.disableClientPersistence) != null && a ? [] : [
                    new tt((()=>{
                        if (l) {
                            return l;
                        }
                        const t = Y(window.location.href);
                        l = {
                            expires: 31536000000,
                            secure: false,
                            path: "/"
                        };
                        if (t) {
                            l.domain = t;
                        }
                        return l;
                    })())
                ])).get("s:context.referrer");
                if (s = (r = ((t)=>{
                    const e = {
                        btid: "dataxu",
                        urid: "millennial-media"
                    };
                    if (t.startsWith("?")) {
                        t = t.substring(1);
                    }
                    for(let n = (t = t.replace(/\?/g, "&")).split("&"), r = 0; r < n.length; r++){
                        const i = n[r].split("=");
                        const o = i[0];
                        const id = i[1];
                        if (e[o]) {
                            return {
                                id,
                                type: e[o]
                            };
                        }
                    }
                })(h)) != null ? r : o) {
                    if (context) {
                        context.referrer = y.__assign(y.__assign({}, context.referrer), s);
                    }
                    i.set("s:context.referrer", s);
                }
                try {
                    context.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                } catch (t) {}
                return e;
            };
            this.track = this.enrich;
            this.identify = this.enrich;
            this.page = this.enrich;
            this.group = this.enrich;
            this.alias = this.enrich;
            this.screen = this.enrich;
        };
        var eM = t.i(851753);
        var eP = t.i(858722);
        class ej {
            constructor(t, e){
                this.version = "1.0.0";
                this.alternativeNames = [];
                this.middleware = [];
                this.alias = this._createMethod("alias");
                this.group = this._createMethod("group");
                this.identify = this._createMethod("identify");
                this.page = this._createMethod("page");
                this.screen = this._createMethod("screen");
                this.track = this._createMethod("track");
                this.action = e;
                this.name = t;
                this.type = e.type;
                this.alternativeNames.push(e.name);
            }
            addMiddleware() {
                let t;
                const e = [];
                for(let n = 0; n < arguments.length; n++){
                    e[n] = arguments[n];
                }
                if (this.type === "destination") {
                    (t = this.middleware).push.apply(t, e);
                }
            }
            transform(t) {
                return y.__awaiter(this, undefined, undefined, function() {
                    let e;
                    return y.__generator(this, function(n) {
                        switch(n.label){
                            case 0:
                                return [
                                    4,
                                    eP.applyDestinationMiddleware(this.name, t.event, this.middleware)
                                ];
                            case 1:
                                if ((e = n.sent()) === null) {
                                    t.cancel(new N.ContextCancelation({
                                        retry: false,
                                        reason: "dropped by destination middleware"
                                    }));
                                }
                                return [
                                    2,
                                    new C.Context(e)
                                ];
                        }
                    });
                });
            }
            _createMethod(t) {
                const e = this;
                return (n)=>y.__awaiter(e, undefined, undefined, function() {
                        let e;
                        return y.__generator(this, function(r) {
                            switch(r.label){
                                case 0:
                                    if (!this.action[t]) {
                                        return [
                                            2,
                                            n
                                        ];
                                    }
                                    e = n;
                                    if (this.type !== "destination") {
                                        return [
                                            3,
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        this.transform(n)
                                    ];
                                case 1:
                                    e = r.sent();
                                    r.label = 2;
                                case 2:
                                    return [
                                        4,
                                        this.action[t](e)
                                    ];
                                case 3:
                                    r.sent();
                                    return [
                                        2,
                                        n
                                    ];
                            }
                        });
                    });
            }
            isLoaded() {
                return this.action.isLoaded();
            }
            ready() {
                if (this.action.ready) {
                    return this.action.ready();
                }
                return Promise.resolve();
            }
            load(t, e) {
                return this.action.load(t, e);
            }
            unload(t, e) {
                let n;
                let r;
                if ((r = (n = this.action).unload) == null) {
                    return undefined;
                }
                return r.call(n, t, e);
            }
        }
        var eD = t.i(423523);
        var ez = (t)=>{
            let e = false;
            window.addEventListener("pagehide", ()=>{
                if (!e) {
                    t(e = true);
                }
            });
            document.addEventListener("visibilitychange", ()=>{
                if (document.visibilityState == "hidden") {
                    if (e) {
                        return;
                    }
                    e = true;
                } else {
                    e = false;
                }
                t(e);
            });
        };
        function eU(t) {
            return (encodeURI(JSON.stringify(t)).split(/%..|./).length - 1) / 1024;
        }
        var eR = t.i(77174);
        function eB(t, e, n, r) {
            const i = this;
            if (!t) {
                setTimeout(()=>y.__awaiter(i, undefined, undefined, function() {
                        let t;
                        let i;
                        return y.__generator(this, (o)=>{
                            switch(o.label){
                                case 0:
                                    t = true;
                                    return [
                                        4,
                                        function(t, e) {
                                            return y.__awaiter(this, undefined, undefined, function() {
                                                let n;
                                                const r = this;
                                                return y.__generator(this, (i)=>{
                                                    switch(i.label){
                                                        case 0:
                                                            n = [];
                                                            if (A.isOffline()) {
                                                                return [
                                                                    2,
                                                                    e
                                                                ];
                                                            }
                                                            return [
                                                                4,
                                                                eR.pWhile(()=>e.length > 0 && !A.isOffline(), ()=>y.__awaiter(r, undefined, undefined, function() {
                                                                        let r;
                                                                        return y.__generator(this, (i)=>{
                                                                            switch(i.label){
                                                                                case 0:
                                                                                    if (!(r = e.pop())) {
                                                                                        return [
                                                                                            2
                                                                                        ];
                                                                                    }
                                                                                    return [
                                                                                        4,
                                                                                        L.attempt(r, t)
                                                                                    ];
                                                                                case 1:
                                                                                    if (!(i.sent() instanceof C.Context)) {
                                                                                        n.push(r);
                                                                                    }
                                                                                    return [
                                                                                        2
                                                                                    ];
                                                                            }
                                                                        });
                                                                    }))
                                                            ];
                                                        case 1:
                                                            i.sent();
                                                            n.map((t)=>e.pushWithBackoff(t));
                                                            return [
                                                                2,
                                                                e
                                                            ];
                                                    }
                                                });
                                            });
                                        }(n, e)
                                    ];
                                case 1:
                                    i = o.sent();
                                    t = false;
                                    if (e.todo > 0) {
                                        r(t, i, n, r);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), 5000 * Math.random());
            }
        }
        var eT = t.i(721335);
        var eK = ((t)=>{
            function e(e, n) {
                const r = t.call(this, "".concat(e, " ").concat(n)) || this;
                r.field = e;
                return r;
            }
            y.__extends(e, t);
            return e;
        })(Error);
        var eF = "is not a string";
        var eH = "is nil";
        function eN(t) {
            let e;
            const t_event = t.event;
            if (!w.exists(t_event)) {
                throw new eK("Event", eH);
            }
            if (typeof t_event !== "object") {
                throw new eK("Event", "is not an object");
            }
            if (!w.isString(t_event.type)) {
                throw new eK(".type", eF);
            }
            if (t_event.type === "track") {
                ((t)=>{
                    if (!w.isString(t.event)) {
                        throw new eK(".event", eF);
                    }
                })(t_event);
            }
            const r = (e = t_event.properties) != null ? e : t_event.traits;
            if (t_event.type !== "alias" && !w.isPlainObject(r)) {
                throw new eK(".properties", "is not an object");
            }
            !((t)=>{
                let e;
                let n;
                let r;
                const i = ".userId/anonymousId/previousId/groupId";
                const o = (r = (n = (e = t.userId) != null ? e : t.anonymousId) != null ? n : t.groupId) != null ? r : t.previousId;
                if (w.exists(o)) {
                    if (!w.isString(o)) {
                        throw new eK(i, eF);
                    }
                } else {
                    throw new eK(i, eH);
                }
            })(t_event);
            return t;
        }
        var eq = {
            name: "Event Validation",
            type: "before",
            version: "1.0.0",
            isLoaded () {
                return true;
            },
            load () {
                return Promise.resolve();
            },
            track: eN,
            identify: eN,
            page: eN,
            alias: eN,
            group: eN,
            screen: eN
        };
        var eL = ei.getGlobal();
        var eV = (h = eL.__HIGHTOUCH_INSPECTOR__) != null ? h : eL.__HIGHTOUCH_INSPECTOR__ = {};
        var eQ = (t)=>{
            let e;
            if ((e = eV.attach) == null) {
                return undefined;
            }
            return e.call(eV, t);
        };
        t.i(816880);
        var eW = {
            apiKey: "WRITE_KEY",
            apiHost: "us-east-1.hightouch-events.com",
            protocol: "https",
            unbundledIntegrations: [],
            addBundledMetadata: false,
            maybeBundledConfigIds: {},
            deliveryStrategy: {
                strategy: "standard"
            }
        };
        var eJ = {
            integrations: {},
            plan: {
                track: {
                    __default: {
                        enabled: true,
                        integrations: {}
                    }
                },
                identify: {
                    __default: {
                        enabled: true
                    }
                },
                group: {
                    __default: {
                        enabled: true
                    }
                }
            },
            enabledMiddleware: {},
            metrics: {
                sampleRate: 0
            },
            legacyVideoPluginsEnabled: false,
            remotePlugins: []
        };
        var eG = ((e)=>{
            function n() {
                let n = this;
                const r = eA();
                const r_promise = r.promise;
                const r_resolve = r.resolve;
                n = e.call(this, (e)=>r_promise.then((n)=>(function(e, n = {}, r) {
                            let i;
                            let o;
                            let s;
                            let a;
                            let u;
                            let c;
                            return y.__awaiter(this, undefined, undefined, function() {
                                let l;
                                let retryQueue;
                                let f;
                                let d;
                                let p;
                                let v;
                                let g;
                                let w;
                                let b;
                                let S;
                                let k;
                                return y.__generator(this, (I)=>{
                                    switch(I.label){
                                        case 0:
                                            if (n.globalAnalyticsKey) {
                                                eo.setGlobalAnalyticsKey(n.globalAnalyticsKey);
                                            }
                                            if (e.cdnURL) {
                                                m.setGlobalCDNUrl(e.cdnURL);
                                            }
                                            if (e.cdnSettings) {
                                                l = e.cdnSettings;
                                            } else {
                                                eJ.integrations["Hightouch.io"] = y.__assign(y.__assign(y.__assign(y.__assign(y.__assign({}, eW), e.writeKey ? {
                                                    apiKey: e.writeKey
                                                } : {}), n.apiHost ? {
                                                    apiHost: n.apiHost
                                                } : {}), n.protocol ? {
                                                    protocol: n.protocol
                                                } : {}), n.batching == true ? {
                                                    deliveryStrategy: {
                                                        strategy: "batching",
                                                        config: {
                                                            timeout: 1000,
                                                            size: 10
                                                        }
                                                    }
                                                } : {});
                                                l = eJ;
                                            }
                                            if (n.updateCDNSettings) {
                                                l = n.updateCDNSettings(l);
                                            }
                                            retryQueue = (o = (i = l.integrations["Hightouch.io"]) == null ? undefined : i.retryQueue) == null || o;
                                            if (!(!n.disableClientPersistence && n.httpCookieServiceOptions)) {
                                                return [
                                                    3,
                                                    2
                                                ];
                                            }
                                            f = n;
                                            return [
                                                4,
                                                eS.load(n.httpCookieServiceOptions).catch((t)=>console.error(t))
                                            ];
                                        case 1:
                                            f.httpCookieService = I.sent();
                                            I.label = 2;
                                        case 2:
                                            let C;
                                            eQ(p = new ew(e, d = y.__assign({
                                                retryQueue
                                            }, n)));
                                            v = (s = e.plugins) != null ? s : [];
                                            g = (a = e.classicIntegrations) != null ? a : [];
                                            eu(C = p, r);
                                            ea(C, r);
                                            return [
                                                4,
                                                function(e, n, r, i, o, s = [], a) {
                                                    let u;
                                                    let c;
                                                    let l;
                                                    let h;
                                                    return y.__awaiter(this, undefined, undefined, function() {
                                                        let f;
                                                        let d;
                                                        let p;
                                                        let v;
                                                        let g;
                                                        let w;
                                                        let b;
                                                        let S;
                                                        let k;
                                                        let I;
                                                        let C;
                                                        let x;
                                                        let O;
                                                        let E;
                                                        const M = this;
                                                        return y.__generator(this, (P)=>{
                                                            let j;
                                                            let D;
                                                            let z;
                                                            switch(P.label){
                                                                case 0:
                                                                    f = s == null ? undefined : s.filter((t)=>typeof t === "object");
                                                                    d = s == null ? undefined : s.filter((t)=>typeof t === "function" && typeof t.pluginName === "string");
                                                                    if (_().NODE_ENV === "test" || !(((z = (D = (j = n.middlewareSettings) == null ? undefined : j.routingRules) == null ? undefined : D.length) != null ? z : 0) > 0)) {
                                                                        return [
                                                                            3,
                                                                            2
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        t.A(296758).then((t)=>t.tsubMiddleware(n.middlewareSettings.routingRules))
                                                                    ];
                                                                case 1:
                                                                    v = P.sent();
                                                                    return [
                                                                        3,
                                                                        3
                                                                    ];
                                                                case 2:
                                                                    v = undefined;
                                                                    P.label = 3;
                                                                case 3:
                                                                    p = v;
                                                                    if ((_().NODE_ENV === "test" || !(Object.keys(n.integrations).length > 1)) && !(a.length > 0)) {
                                                                        return [
                                                                            3,
                                                                            5
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        t.A(128061).then((t)=>t.ajsDestinations(e, n, r.integrations, i, p, a))
                                                                    ];
                                                                case 4:
                                                                    w = P.sent();
                                                                    return [
                                                                        3,
                                                                        6
                                                                    ];
                                                                case 5:
                                                                    w = [];
                                                                    P.label = 6;
                                                                case 6:
                                                                    g = w;
                                                                    if (!n.legacyVideoPluginsEnabled) {
                                                                        return [
                                                                            3,
                                                                            8
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        t.A(657818).then((t)=>t.loadLegacyVideoPlugins(r))
                                                                    ];
                                                                case 7:
                                                                    P.sent();
                                                                    P.label = 8;
                                                                case 8:
                                                                    if (!((u = i.plan) == null ? undefined : u.track)) {
                                                                        return [
                                                                            3,
                                                                            10
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        t.A(78627).then((t)=>{
                                                                            let e;
                                                                            return t.schemaFilter((e = i.plan) == null ? undefined : e.track, n);
                                                                        })
                                                                    ];
                                                                case 9:
                                                                    S = P.sent();
                                                                    return [
                                                                        3,
                                                                        11
                                                                    ];
                                                                case 10:
                                                                    S = undefined;
                                                                    P.label = 11;
                                                                case 11:
                                                                    b = S;
                                                                    k = eI.mergedOptions(n, o);
                                                                    return [
                                                                        4,
                                                                        (function(t, e, n, r, i, o) {
                                                                            let s;
                                                                            let a;
                                                                            let u;
                                                                            return y.__awaiter(this, undefined, undefined, function() {
                                                                                let c;
                                                                                let l;
                                                                                const h = this;
                                                                                return y.__generator(this, (f)=>{
                                                                                    switch(f.label){
                                                                                        case 0:
                                                                                            c = [];
                                                                                            l = (a = (s = t.middlewareSettings) == null ? undefined : s.routingRules) != null ? a : [];
                                                                                            return [
                                                                                                4,
                                                                                                Promise.all(((u = t.remotePlugins) != null ? u : []).map((t)=>y.__awaiter(h, undefined, undefined, function() {
                                                                                                        let s;
                                                                                                        let a;
                                                                                                        let u;
                                                                                                        let h;
                                                                                                        let f;
                                                                                                        return y.__generator(this, (d)=>{
                                                                                                            switch(d.label){
                                                                                                                case 0:
                                                                                                                    let p;
                                                                                                                    let v;
                                                                                                                    p = e[t.creationName];
                                                                                                                    v = e[t.name];
                                                                                                                    if (e.All === false && !p && !v || p === false || v === false || 0) {
                                                                                                                        return [
                                                                                                                            2
                                                                                                                        ];
                                                                                                                    }
                                                                                                                    d.label = 1;
                                                                                                                case 1:
                                                                                                                    d.trys.push([
                                                                                                                        1,
                                                                                                                        6,
                                                                                                                        ,
                                                                                                                        7
                                                                                                                    ]);
                                                                                                                    if (a = o == null ? undefined : o.find((e)=>e.pluginName === t.name)) {
                                                                                                                        return [
                                                                                                                            3,
                                                                                                                            3
                                                                                                                        ];
                                                                                                                    }
                                                                                                                    return [
                                                                                                                        4,
                                                                                                                        function(t, e) {
                                                                                                                            return y.__awaiter(this, undefined, undefined, function() {
                                                                                                                                let n;
                                                                                                                                let r;
                                                                                                                                let i;
                                                                                                                                let o;
                                                                                                                                let s;
                                                                                                                                return y.__generator(this, (a)=>{
                                                                                                                                    switch(a.label){
                                                                                                                                        case 0:
                                                                                                                                            n = RegExp("https://cdn.hightouch-events.(com|build)");
                                                                                                                                            r = m.getCDN();
                                                                                                                                            if (!e) {
                                                                                                                                                return [
                                                                                                                                                    3,
                                                                                                                                                    6
                                                                                                                                                ];
                                                                                                                                            }
                                                                                                                                            o = (i = t.url.split("/"))[i.length - 2];
                                                                                                                                            s = t.url.replace(o, btoa(o).replace(/=/g, ""));
                                                                                                                                            a.label = 1;
                                                                                                                                        case 1:
                                                                                                                                            a.trys.push([
                                                                                                                                                1,
                                                                                                                                                3,
                                                                                                                                                ,
                                                                                                                                                5
                                                                                                                                            ]);
                                                                                                                                            return [
                                                                                                                                                4,
                                                                                                                                                eM.loadScript(s.replace(n, r))
                                                                                                                                            ];
                                                                                                                                        case 2:
                                                                                                                                        case 4:
                                                                                                                                            a.sent();
                                                                                                                                            return [
                                                                                                                                                3,
                                                                                                                                                5
                                                                                                                                            ];
                                                                                                                                        case 3:
                                                                                                                                            a.sent();
                                                                                                                                            return [
                                                                                                                                                4,
                                                                                                                                                eM.loadScript(t.url.replace(n, r))
                                                                                                                                            ];
                                                                                                                                        case 5:
                                                                                                                                            return [
                                                                                                                                                3,
                                                                                                                                                8
                                                                                                                                            ];
                                                                                                                                        case 6:
                                                                                                                                            return [
                                                                                                                                                4,
                                                                                                                                                eM.loadScript(t.url.replace(n, r))
                                                                                                                                            ];
                                                                                                                                        case 7:
                                                                                                                                            a.sent();
                                                                                                                                            a.label = 8;
                                                                                                                                        case 8:
                                                                                                                                            if (typeof window[t.libraryName] === "function") {
                                                                                                                                                return [
                                                                                                                                                    2,
                                                                                                                                                    window[t.libraryName]
                                                                                                                                                ];
                                                                                                                                            }
                                                                                                                                            return [
                                                                                                                                                2
                                                                                                                                            ];
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            });
                                                                                                                        }(t, r)
                                                                                                                    ];
                                                                                                                case 2:
                                                                                                                    a = d.sent();
                                                                                                                    d.label = 3;
                                                                                                                case 3:
                                                                                                                    if (!(s = a)) {
                                                                                                                        return [
                                                                                                                            3,
                                                                                                                            5
                                                                                                                        ];
                                                                                                                    }
                                                                                                                    return [
                                                                                                                        4,
                                                                                                                        s(y.__assign(y.__assign({}, t.settings), n[t.name]))
                                                                                                                    ];
                                                                                                                case 4:
                                                                                                                    !((t)=>{
                                                                                                                        if (!Array.isArray(t)) {
                                                                                                                            throw Error("Not a valid list of plugins");
                                                                                                                        }
                                                                                                                        const e = [
                                                                                                                            "load",
                                                                                                                            "isLoaded",
                                                                                                                            "name",
                                                                                                                            "version",
                                                                                                                            "type"
                                                                                                                        ];
                                                                                                                        t.forEach((t)=>{
                                                                                                                            e.forEach((e)=>{
                                                                                                                                let n;
                                                                                                                                if (t[e] === undefined) {
                                                                                                                                    throw Error("Plugin: ".concat((n = t.name) != null ? n : "unknown", " missing required function ").concat(e));
                                                                                                                                }
                                                                                                                            });
                                                                                                                        });
                                                                                                                    })(h = Array.isArray(u = d.sent()) ? u : [
                                                                                                                        u
                                                                                                                    ]);
                                                                                                                    f = l.filter((e)=>e.destinationName === t.creationName);
                                                                                                                    h.forEach((e)=>{
                                                                                                                        const n = new ej(t.creationName, e);
                                                                                                                        if (f.length && i && e.type === "destination") {
                                                                                                                            n.addMiddleware(i);
                                                                                                                        }
                                                                                                                        c.push(n);
                                                                                                                    });
                                                                                                                    d.label = 5;
                                                                                                                case 5:
                                                                                                                    return [
                                                                                                                        3,
                                                                                                                        7
                                                                                                                    ];
                                                                                                                case 6:
                                                                                                                    console.warn("Failed to load Remote Plugin", d.sent());
                                                                                                                    return [
                                                                                                                        3,
                                                                                                                        7
                                                                                                                    ];
                                                                                                                case 7:
                                                                                                                    return [
                                                                                                                        2
                                                                                                                    ];
                                                                                                            }
                                                                                                        });
                                                                                                    })))
                                                                                            ];
                                                                                        case 1:
                                                                                            f.sent();
                                                                                            return [
                                                                                                2,
                                                                                                c.filter(Boolean)
                                                                                            ];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })(n, r.integrations, k, o.obfuscate, p, d).catch(()=>[])
                                                                    ];
                                                                case 12:
                                                                    I = P.sent();
                                                                    C = y.__spreadArray(y.__spreadArray(y.__spreadArray([
                                                                        eq,
                                                                        eE
                                                                    ], f, true), g, true), I, true);
                                                                    if (b) {
                                                                        C.push(b);
                                                                    }
                                                                    if (((c = i.integrations) == null ? undefined : c.All) === false && !i.integrations["Hightouch.io"] || i.integrations && i.integrations["Hightouch.io"] === false) {
                                                                        return [
                                                                            3,
                                                                            14
                                                                        ];
                                                                    }
                                                                    O = (x = C).push;
                                                                    return [
                                                                        4,
                                                                        ((t, e, n)=>{
                                                                            window.addEventListener("pagehide", ()=>{
                                                                                u.push.apply(u, Array.from(c));
                                                                                c.clear();
                                                                            });
                                                                            let r;
                                                                            let i;
                                                                            let o;
                                                                            let s;
                                                                            const a = (i = e == null ? undefined : e.apiKey) != null ? i : "";
                                                                            var u = t.options.disableClientPersistence ? new H.PriorityQueue(t.queue.queue.maxAttempts, []) : new F.PersistedPriorityQueue(t.queue.queue.maxAttempts, "".concat(a, ":dest-Hightouch.io"));
                                                                            var c = new Set;
                                                                            const l = (o = e == null ? undefined : e.apiHost) != null ? o : eT.HIGHTOUCH_API_HOST;
                                                                            const h = (s = e == null ? undefined : e.protocol) != null ? s : "https";
                                                                            const f = "".concat(h, "://").concat(l);
                                                                            const d = e == null ? undefined : e.deliveryStrategy;
                                                                            const p = (d == null ? undefined : d.strategy) === "batching" ? ((t, e, n = "https")=>{
                                                                                let r;
                                                                                let i;
                                                                                let o;
                                                                                let s = [];
                                                                                let keepalive = false;
                                                                                const u = (r = e == null ? undefined : e.size) != null ? r : 10;
                                                                                const c = (i = e == null ? undefined : e.timeout) != null ? i : 5000;
                                                                                function l(e) {
                                                                                    if (e.length !== 0) {
                                                                                        let r;
                                                                                        const i = (r = e[0]) == null ? undefined : r.writeKey;
                                                                                        const batch = e.map((t)=>{
                                                                                            t.sentAt;
                                                                                            return y.__rest(t, [
                                                                                                "sentAt"
                                                                                            ]);
                                                                                        });
                                                                                        return eb.fetch("".concat(n, "://").concat(t, "/v1/batch"), {
                                                                                            keepalive,
                                                                                            headers: {
                                                                                                Accept: "application/json",
                                                                                                "Content-Type": "application/json"
                                                                                            },
                                                                                            method: "post",
                                                                                            body: JSON.stringify({
                                                                                                writeKey: i,
                                                                                                batch,
                                                                                                sentAt: new Date().toISOString()
                                                                                            })
                                                                                        });
                                                                                    }
                                                                                }
                                                                                function h() {
                                                                                    return y.__awaiter(this, undefined, undefined, function() {
                                                                                        let t;
                                                                                        return y.__generator(this, (e)=>{
                                                                                            if (s.length) {
                                                                                                t = s;
                                                                                                s = [];
                                                                                                return [
                                                                                                    2,
                                                                                                    l(t)
                                                                                                ];
                                                                                            }
                                                                                            return [
                                                                                                2
                                                                                            ];
                                                                                        });
                                                                                    });
                                                                                }
                                                                                ez((t)=>{
                                                                                    if ((keepalive = t) && s.length) {
                                                                                        let e;
                                                                                        let n;
                                                                                        Promise.all((e = [], n = 0, s.forEach((t)=>{
                                                                                            eU(e[n]) >= 64 && n++;
                                                                                            if (e[n]) {
                                                                                                e[n].push(t);
                                                                                            } else {
                                                                                                e[n] = [
                                                                                                    t
                                                                                                ];
                                                                                            }
                                                                                        }), e).map(l)).catch(console.error);
                                                                                    }
                                                                                });
                                                                                return {
                                                                                    dispatch (t, e) {
                                                                                        return y.__awaiter(this, undefined, undefined, function() {
                                                                                            return y.__generator(this, (t)=>{
                                                                                                s.push(e);
                                                                                                return [
                                                                                                    2,
                                                                                                    s.length >= u || eU(s) >= 450 || keepalive ? h() : void (!o && (o = setTimeout(()=>{
                                                                                                        o = undefined;
                                                                                                        h().catch(console.error);
                                                                                                    }, c)))
                                                                                                ];
                                                                                            });
                                                                                        });
                                                                                    }
                                                                                };
                                                                            })(l, d.config, h) : (r = d == null ? undefined : d.config, {
                                                                                dispatch (t, e) {
                                                                                    return eb.fetch(t, {
                                                                                        keepalive: r == null ? undefined : r.keepalive,
                                                                                        headers: {
                                                                                            Accept: "application/json",
                                                                                            "Content-Type": "application/json"
                                                                                        },
                                                                                        method: "post",
                                                                                        body: JSON.stringify(e)
                                                                                    });
                                                                                }
                                                                            });
                                                                            function v(r) {
                                                                                return y.__awaiter(this, undefined, undefined, function() {
                                                                                    let i;
                                                                                    let o;
                                                                                    return y.__generator(this, (s)=>{
                                                                                        let a;
                                                                                        let l;
                                                                                        let h;
                                                                                        let d;
                                                                                        let v;
                                                                                        let _;
                                                                                        if (A.isOffline()) {
                                                                                            u.push(r);
                                                                                            eB(false, u, g, eB);
                                                                                            return [
                                                                                                2,
                                                                                                r
                                                                                            ];
                                                                                        }
                                                                                        c.add(r);
                                                                                        i = r.event.type;
                                                                                        o = eD.toFacade(r.event).json();
                                                                                        r.event.type === "track" && delete o.traits;
                                                                                        if (r.event.type === "alias") {
                                                                                            a = o;
                                                                                            _ = t.user();
                                                                                            a.previousId = (d = (h = (l = a.previousId) != null ? l : a.from) != null ? h : _.id()) != null ? d : _.anonymousId();
                                                                                            a.userId = (v = a.userId) != null ? v : a.to;
                                                                                            delete a.from;
                                                                                            delete a.to;
                                                                                            o = a;
                                                                                        }
                                                                                        return [
                                                                                            2,
                                                                                            p.dispatch("".concat(f, "/v1/").concat(i), ((t, e, n, r)=>{
                                                                                                let i;
                                                                                                const o = t.user();
                                                                                                delete e.options;
                                                                                                e.writeKey = n == null ? undefined : n.apiKey;
                                                                                                e.userId = e.userId || o.id();
                                                                                                e.anonymousId = e.anonymousId || o.anonymousId();
                                                                                                e.sentAt = new Date;
                                                                                                const failedInitializations = t.queue.failedInitializations || [];
                                                                                                if (failedInitializations.length > 0) {
                                                                                                    e._metadata = {
                                                                                                        failedInitializations
                                                                                                    };
                                                                                                }
                                                                                                const a = [];
                                                                                                const u = [];
                                                                                                for(const c in r){
                                                                                                    const l = r[c];
                                                                                                    if (c === "Hightouch.io") {
                                                                                                        a.push(c);
                                                                                                    }
                                                                                                    if (l.bundlingStatus === "bundled") {
                                                                                                        a.push(c);
                                                                                                    }
                                                                                                    if (l.bundlingStatus === "unbundled") {
                                                                                                        u.push(c);
                                                                                                    }
                                                                                                }
                                                                                                for(let h = 0, f = (n == null ? undefined : n.unbundledIntegrations) || []; h < f.length; h++){
                                                                                                    const d = f[h];
                                                                                                    if (!u.includes(d)) {
                                                                                                        u.push(d);
                                                                                                    }
                                                                                                }
                                                                                                const p = (i = n == null ? undefined : n.maybeBundledConfigIds) != null ? i : {};
                                                                                                const bundledIds = [];
                                                                                                a.sort().forEach((t)=>{
                                                                                                    let e;
                                                                                                    ((e = p[t]) != null ? e : []).forEach((t)=>{
                                                                                                        bundledIds.push(t);
                                                                                                    });
                                                                                                });
                                                                                                if ((n == null ? undefined : n.addBundledMetadata) !== false) {
                                                                                                    e._metadata = y.__assign(y.__assign({}, e._metadata), {
                                                                                                        bundled: a.sort(),
                                                                                                        unbundled: u.sort(),
                                                                                                        bundledIds
                                                                                                    });
                                                                                                }
                                                                                                return e;
                                                                                            })(t, o, e, n)).then(()=>r).catch(()=>{
                                                                                                u.pushWithBackoff(r);
                                                                                                eB(false, u, g, eB);
                                                                                                return r;
                                                                                            }).finally(()=>{
                                                                                                c.delete(r);
                                                                                            })
                                                                                        ];
                                                                                    });
                                                                                });
                                                                            }
                                                                            var g = {
                                                                                name: "Hightouch.io",
                                                                                type: "after",
                                                                                version: "0.1.0",
                                                                                isLoaded () {
                                                                                    return true;
                                                                                },
                                                                                load () {
                                                                                    return Promise.resolve();
                                                                                },
                                                                                track: v,
                                                                                identify: v,
                                                                                page: v,
                                                                                alias: v,
                                                                                group: v,
                                                                                screen: v
                                                                            };
                                                                            if (u.todo) {
                                                                                eB(false, u, g, eB);
                                                                            }
                                                                            return g;
                                                                        })(r, k["Hightouch.io"], n.integrations)
                                                                    ];
                                                                case 13:
                                                                    O.apply(x, [
                                                                        P.sent()
                                                                    ]);
                                                                    P.label = 14;
                                                                case 14:
                                                                    return [
                                                                        4,
                                                                        Promise.allSettled(Object.entries((l = o.destinations) != null ? l : {}).map((e)=>{
                                                                            const n = e[0];
                                                                            const r = e[1];
                                                                            return y.__awaiter(M, undefined, undefined, function() {
                                                                                let e;
                                                                                return y.__generator(this, (i)=>{
                                                                                    switch(i.label){
                                                                                        case 0:
                                                                                            return [
                                                                                                4,
                                                                                                function(e, n) {
                                                                                                    return y.__awaiter(this, undefined, undefined, function() {
                                                                                                        return y.__generator(this, (r)=>{
                                                                                                            switch(e){
                                                                                                                case "gtag":
                                                                                                                    return [
                                                                                                                        2,
                                                                                                                        t.A(863708).then((t)=>t.default(n))
                                                                                                                    ];
                                                                                                                case "Google Tag Manager":
                                                                                                                    return [
                                                                                                                        2,
                                                                                                                        t.A(772058).then((t)=>t.default(n))
                                                                                                                    ];
                                                                                                                default:
                                                                                                                    return [
                                                                                                                        2,
                                                                                                                        undefined
                                                                                                                    ];
                                                                                                            }
                                                                                                        });
                                                                                                    });
                                                                                                }(n, r)
                                                                                            ];
                                                                                        case 1:
                                                                                            if (e = i.sent()) {
                                                                                                C.push(e);
                                                                                            } else {
                                                                                                console.warn("failed to load destination plugin: ".concat(n));
                                                                                            }
                                                                                            return [
                                                                                                2
                                                                                            ];
                                                                                    }
                                                                                });
                                                                            });
                                                                        }))
                                                                    ];
                                                                case 15:
                                                                    P.sent();
                                                                    return [
                                                                        4,
                                                                        r.register.apply(r, C)
                                                                    ];
                                                                case 16:
                                                                    E = P.sent();
                                                                    if (!Object.entries((h = n.enabledMiddleware) != null ? h : {}).some((t)=>t[1])) {
                                                                        return [
                                                                            3,
                                                                            18
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        t.A(665602).then((t)=>{
                                                                            const t_remoteMiddlewares = t.remoteMiddlewares;
                                                                            return y.__awaiter(M, undefined, undefined, function() {
                                                                                return y.__generator(this, (t)=>{
                                                                                    switch(t.label){
                                                                                        case 0:
                                                                                            return [
                                                                                                4,
                                                                                                t_remoteMiddlewares(E, n, o.obfuscate)
                                                                                            ];
                                                                                        case 1:
                                                                                            return [
                                                                                                2,
                                                                                                Promise.all(t.sent().map((t)=>r.addSourceMiddleware(t)))
                                                                                            ];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })
                                                                    ];
                                                                case 17:
                                                                    P.sent();
                                                                    P.label = 18;
                                                                case 18:
                                                                    return [
                                                                        2,
                                                                        E
                                                                    ];
                                                            }
                                                        });
                                                    });
                                                }(e.writeKey, l, p, d, n, v, g)
                                            ];
                                        case 3:
                                            w = I.sent();
                                            b = (u = window.location.search) != null ? u : "";
                                            S = (c = window.location.hash) != null ? c : "";
                                            if (!(k = b.length ? b : S.replace(/(?=#).*(?=\?)/, "")).includes("ajs_")) {
                                                return [
                                                    3,
                                                    5
                                                ];
                                            }
                                            return [
                                                4,
                                                p.queryString(k).catch(console.error)
                                            ];
                                        case 4:
                                            I.sent();
                                            I.label = 5;
                                        case 5:
                                            p.initialized = true;
                                            p.emit("initialize", e, n);
                                            if (n.initialPageview) {
                                                p.page().catch(console.error);
                                            }
                                            return [
                                                4,
                                                function(t, e) {
                                                    return y.__awaiter(this, undefined, undefined, function() {
                                                        return y.__generator(this, (n)=>{
                                                            switch(n.label){
                                                                case 0:
                                                                    return [
                                                                        4,
                                                                        y.__awaiter(undefined, undefined, undefined, function() {
                                                                            let n;
                                                                            let r;
                                                                            return y.__generator(this, (i)=>{
                                                                                switch(i.label){
                                                                                    case 0:
                                                                                        n = 0;
                                                                                        r = e.getCalls("addSourceMiddleware");
                                                                                        i.label = 1;
                                                                                    case 1:
                                                                                        if (!(n < r.length)) {
                                                                                            return [
                                                                                                3,
                                                                                                4
                                                                                            ];
                                                                                        }
                                                                                        return [
                                                                                            4,
                                                                                            ep(t, r[n]).catch(console.error)
                                                                                        ];
                                                                                    case 2:
                                                                                        i.sent();
                                                                                        i.label = 3;
                                                                                    case 3:
                                                                                        n++;
                                                                                        return [
                                                                                            3,
                                                                                            1
                                                                                        ];
                                                                                    case 4:
                                                                                        return [
                                                                                            2
                                                                                        ];
                                                                                }
                                                                            });
                                                                        })
                                                                    ];
                                                                case 1:
                                                                    n.sent();
                                                                    ec(t, e);
                                                                    e.clear();
                                                                    return [
                                                                        2
                                                                    ];
                                                            }
                                                        });
                                                    });
                                                }(p, r)
                                            ];
                                        case 6:
                                            I.sent();
                                            return [
                                                2,
                                                [
                                                    p,
                                                    w
                                                ]
                                            ];
                                    }
                                });
                            });
                        })(n[0], n[1], e))) || this;
                n._resolveLoadStart = (t, e)=>r_resolve([
                        t,
                        e
                    ]);
                return n;
            }
            y.__extends(n, e);
            n.prototype.load = function(t, e = {}) {
                this._resolveLoadStart(t, e);
                return this;
            };
            n.load = (t, e = {})=>new n().load(t, e);
            n.standalone = (t, e)=>n.load({
                    writeKey: t
                }, e).then((t)=>t[0]);
            return n;
        })(ev);
        var e$ = class {
            constructor(t){
                this.drainFn = t;
                this.buffer = [];
                this._ready = false;
            }
            enqueue(t) {
                this.buffer.push(t);
            }
            markReady() {
                for(this._ready = true; this.buffer.length > 0;){
                    let t = this.buffer.shift();
                    if (t) {
                        this.drainFn(t);
                    }
                }
            }
            get ready() {
                return this._ready;
            }
        };
        var eX = /^[A-Za-z0-9_-]+$/;
        var eZ = [
            "gclid",
            "gbraid",
            "wbraid"
        ];
        var eY = class {
            constructor(t){
                this.name = "hightouch";
                this.client = null;
                this.writeKey = t.writeKey;
            }
            async init() {
                this.client = eG.load({
                    writeKey: this.writeKey
                }, {
                    user: {
                        sessions: {
                            autoTrack: true
                        }
                    }
                });
                return true;
            }
            track({ event, properties, eventId, utmData }) {
                if (!this.client) {
                    return void console.warn("Hightouch client not initialized");
                }
                let campaign = this.convertUtmDataToCampaign(utmData);
                this.client.track(event, {
                    ...properties,
                    eventId
                }, {
                    campaign
                });
            }
            convertUtmDataToCampaign(t) {
                return {
                    name: t.utm_campaign,
                    source: t.utm_source,
                    medium: t.utm_medium,
                    term: t.utm_term,
                    content: t.utm_content
                };
            }
            page() {
                if (this.client) {
                    this.client.page("marketing", document.title);
                } else {
                    console.warn("Hightouch client not initialized");
                }
            }
            identify(t) {
                let e;
                let n;
                let r;
                if (!this.client) {
                    return void console.warn("Hightouch client not initialized");
                }
                let i;
                let o;
                let s = {};
                if (typeof document !== "undefined") {
                    let t;
                    let e;
                    let n = Object.fromEntries(document.cookie.split("; ").map((t)=>t.split("=")));
                    i = n._fbp;
                    o = n._fbc;
                    r = n;
                    t = new URLSearchParams(window.location.search);
                    e = ((t)=>{
                        if (!t) {
                            return {};
                        }
                        try {
                            let e = JSON.parse(decodeURIComponent(t));
                            return Object.fromEntries(eZ.map((t)=>[
                                    t,
                                    typeof e[t] === "string" ? e[t] : undefined
                                ]));
                        } catch (t) {
                            return {};
                        }
                    })(r.google_click_ids);
                    s = Object.fromEntries(eZ.map((n)=>{
                        var i;
                        var o;
                        var s;
                        return [
                            n,
                            (o = (i = e0(t.get(n))) != null ? i : e0(e[n])) != null ? o : n === "gclid" ? e0((s = r._gcl_aw) == null ? undefined : s.split(".").at(-1)) : undefined
                        ];
                    }));
                }
                let name = `${(e = t.firstName) != null ? e : ""} ${(n = t.lastName) != null ? n : ""}`.trim();
                this.client.identify(t.userId, {
                    email: t.email,
                    name,
                    _fbp: i != null ? i : undefined,
                    _fbc: o != null ? o : undefined,
                    ...s
                });
            }
            reset() {
                if (this.client) {
                    return this.client.reset();
                }
                console.warn("Hightouch client not initialized");
                return Promise.resolve();
            }
        };
        function e0(t) {
            if (!(!t || t.length > 512)) {
                if (eX.test(t)) {
                    return t;
                }
                return undefined;
            }
        }
        var e1 = class {
            constructor(t){
                this.initialized = false;
                this.identity = {};
                this.utmData = {};
                this.providers = [
                    new eY({
                        writeKey: t.hightouch.writeKey
                    })
                ];
                this.queue = new e$(this.processPayload.bind(this));
                this.initPromise = this.initializeProviders();
            }
            async initializeProviders() {
                try {
                    await Promise.all(this.providers.map(async (t)=>{
                        try {
                            await t.init();
                        } catch (error) {
                            console.error(`Provider ${t.name} initialization error:`, error);
                        }
                    }));
                } finally{
                    this.initialized = true;
                    this.queue.markReady();
                }
            }
            processPayload(t) {
                for (let e of this.providers){
                    try {
                        e.track(t);
                    } catch (error) {
                        console.error(`Provider ${e.name} track error:`, error);
                    }
                }
            }
            async track(t) {
                if (!t.event) {
                    throw Error("Event name is required");
                }
                let eventId = t.eventId || g();
                let n = {
                    ...t.properties || {}
                };
                let r = {
                    ...t,
                    eventId,
                    properties: n,
                    utmData: this.utmData
                };
                if (!this.initialized) {
                    await this.initPromise;
                }
                if (this.queue.ready) {
                    this.processPayload(r);
                } else {
                    this.queue.enqueue(r);
                }
                return eventId;
            }
            identify(t) {
                this.identity = {
                    ...this.identity,
                    ...t
                };
                this.providers.forEach((t)=>{
                    if ("identify" in t && typeof t.identify === "function") {
                        try {
                            t.identify(this.identity);
                        } catch (error) {
                            console.error(`Provider ${t.name} identify error:`, error);
                        }
                    }
                });
            }
            reset() {
                this.providers.forEach((t)=>{
                    if ("reset" in t && typeof t.reset === "function") {
                        t.reset();
                    }
                });
            }
            page() {
                this.providers.forEach((t)=>{
                    if ("page" in t && typeof t.page === "function") {
                        t.page();
                    }
                });
            }
            updateUtmData(t) {
                this.utmData = {
                    ...this.utmData,
                    ...t
                };
            }
            get hightouch() {
                let t = this.providers.find((t)=>t.name === "hightouch");
                if (!t) {
                    throw Error("Hightouch provider not found");
                }
                return t.client;
            }
        };
        n = e2 || {};
        n.EMAIL_SUBMITTED = "EMAIL_SUBMITTED";
        n.FORM_SUBMITTED = "FORM_SUBMITTED";
        n.FORM_QUALIFIED = "FORM_QUALIFIED";
        var e2 = n;
        let e4 = new e1({
            facebook: {
                pixelId: "495126069984356"
            },
            hightouch: {
                writeKey: "b0d4c688bce3d263aac12d29a6b07928f5980e1a34825422b459c210860007a4"
            }
        });
        t.s([
            "tracker",
            0,
            e4
        ], 817255);
    }
]);
