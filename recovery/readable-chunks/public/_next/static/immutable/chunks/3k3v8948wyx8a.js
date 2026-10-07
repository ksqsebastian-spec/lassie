;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "9ca45fc5-91d5-eefc-1b51-33492f7fd294";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    223154,
    (t)=>{
        "use strict";
        t.s([
            "isPlanEventEnabled",
            0,
            (t, n)=>{
                let i;
                let e;
                if (typeof (n == null ? undefined : n.enabled) === "boolean") {
                    return n.enabled;
                }
                return (e = (i = t == null ? undefined : t.__default) == null ? undefined : i.enabled) == null || e;
            }
        ]);
    },
    451587,
    (t)=>{
        "use strict";
        var n = t.i(239150);
        var i = t.i(35550);
        var e = t.i(466487);
        var r = t.i(267324);
        var o = t.i(542043);
        var a = t.i(298352);
        var s = t.i(990372);
        var u = t.i(223154);
        var c = t.i(795847);
        var l = t.i(77174);
        var d = t.i(112104);
        var h = t.i(121044);
        var f = t.i(858722);
        var v = t.i(555595);
        var g = t.i(851753);
        function p(t) {
            return t.toLowerCase().replace(".", "").replace(/\s+/g, "-");
        }
        function _(t, n = false) {
            if (n) {
                return btoa(t).replace(/=/g, "");
            }
        }
        var y = t.i(56844);
        var w = (t, n)=>{
            let i;
            const n_type = n.type;
            const n_bundlingStatus = n.bundlingStatus;
            const n_versionSettings = n.versionSettings;
            const a = n_bundlingStatus !== "unbundled" && (n_type === "browser" || ((i = n_versionSettings == null ? undefined : n_versionSettings.componentTypes) == null ? undefined : i.includes("browser")));
            return !t.startsWith("Hightouch") && t !== "Iterable" && a;
        };
        var m = (t, n)=>{
            const i = n.All === false && n[t] === undefined;
            return n[t] === false || i;
        };
        class b {
            constructor(t, i, e, r = {}, o, a){
                this.options = {};
                this.type = "destination";
                this.middleware = [];
                this._ready = false;
                this._initialized = false;
                this.flushing = false;
                this.name = t;
                this.version = i;
                this.settings = n.__assign({}, r);
                this.disableAutoISOConversion = o.disableAutoISOConversion || false;
                this.integrationSource = a;
                this.settings.type && this.settings.type === "browser" && delete this.settings.type;
                this.options = o;
                this.buffer = o.disableClientPersistence ? new d.PriorityQueue(4, []) : new h.PersistedPriorityQueue(4, "".concat(e, ":dest-").concat(t));
                this.scheduleFlush();
            }
            isLoaded() {
                return this._ready;
            }
            ready() {
                let t;
                if ((t = this.onReady) != null) {
                    return t;
                }
                return Promise.resolve();
            }
            load(t, i) {
                let e;
                return n.__awaiter(this, undefined, undefined, function() {
                    let r;
                    let o;
                    const a = this;
                    return n.__generator(this, function(s) {
                        switch(s.label){
                            case 0:
                                if (this._ready || this.onReady !== undefined) {
                                    return [
                                        2
                                    ];
                                }
                                if ((e = this.integrationSource) == null) {
                                    return [
                                        3,
                                        1
                                    ];
                                }
                                o = e;
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                return [
                                    4,
                                    function(t, i, e, r) {
                                        return n.__awaiter(this, undefined, undefined, function() {
                                            let o;
                                            let a;
                                            let s;
                                            let u;
                                            let c;
                                            return n.__generator(this, (l)=>{
                                                switch(l.label){
                                                    case 0:
                                                        a = _(o = p(i), r);
                                                        s = v.getNextIntegrationsURL();
                                                        u = "".concat(s, "/integrations/").concat(a != null ? a : o, "/").concat(e, "/").concat(a != null ? a : o, ".dynamic.js.gz");
                                                        l.label = 1;
                                                    case 1:
                                                        l.trys.push([
                                                            1,
                                                            3,
                                                            ,
                                                            4
                                                        ]);
                                                        return [
                                                            4,
                                                            g.loadScript(u)
                                                        ];
                                                    case 2:
                                                        l.sent();
                                                        let d;
                                                        let h;
                                                        const f = u;
                                                        try {
                                                            const y = ((h = (d = window == null ? undefined : window.performance) == null ? undefined : d.getEntriesByName(f, "resource")) != null ? h : [])[0];
                                                            if (y) {
                                                                t.stats.gauge("legacy_destination_time", Math.round(y.duration), n.__spreadArray([
                                                                    i
                                                                ], y.duration < 100 ? [
                                                                    "cached"
                                                                ] : [], true));
                                                            }
                                                        } catch (t) {}
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 3:
                                                        c = l.sent();
                                                        t.stats.gauge("legacy_destination_time", -1, [
                                                            "plugin:".concat(i),
                                                            "failed"
                                                        ]);
                                                        throw c;
                                                    case 4:
                                                        return [
                                                            4,
                                                            Promise.all(window["".concat(o, "Deps")].map((t)=>g.loadScript(`${s + t}.gz`)))
                                                        ];
                                                    case 5:
                                                        l.sent();
                                                        window["".concat(o, "Loader")]();
                                                        return [
                                                            2,
                                                            window["".concat(o, "Integration")]
                                                        ];
                                                }
                                            });
                                        });
                                    }(t, this.name, this.version, this.options.obfuscate)
                                ];
                            case 2:
                                o = s.sent();
                                s.label = 3;
                            case 3:
                                r = o;
                                this.integration = ((t, n, i)=>{
                                    if ("Integration" in t) {
                                        var e;
                                        t({
                                            user () {
                                                return i.user();
                                            },
                                            addIntegration () {}
                                        });
                                        e = t.Integration;
                                    } else {
                                        e = t;
                                    }
                                    const r = new e(n);
                                    r.analytics = i;
                                    return r;
                                })(r, this.settings, i);
                                this.onReady = new Promise((resolve)=>{
                                    a.integration.once("ready", ()=>{
                                        a._ready = true;
                                        resolve(true);
                                    });
                                });
                                this.onInitialize = new Promise((resolve)=>{
                                    a.integration.on("initialize", ()=>{
                                        a._initialized = true;
                                        resolve(true);
                                    });
                                });
                                try {
                                    t.stats.increment("analytics_js.integration.invoke", 1, [
                                        "method:initialize",
                                        "integration_name:".concat(this.name)
                                    ]);
                                    this.integration.initialize();
                                } catch (error) {
                                    t.stats.increment("analytics_js.integration.invoke.error", 1, [
                                        "method:initialize",
                                        "integration_name:".concat(this.name)
                                    ]);
                                    throw error;
                                }
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
            unload(t, i) {
                return function(t, i, e) {
                    return n.__awaiter(this, undefined, undefined, function() {
                        let r;
                        let o;
                        let a;
                        let s;
                        return n.__generator(this, (n)=>{
                            r = v.getNextIntegrationsURL();
                            o = p(t);
                            a = _(t, e);
                            s = "".concat(r, "/integrations/").concat(a != null ? a : o, "/").concat(i, "/").concat(a != null ? a : o, ".dynamic.js.gz");
                            return [
                                2,
                                g.unloadScript(s)
                            ];
                        });
                    });
                }(this.name, this.version, this.options.obfuscate);
            }
            addMiddleware() {
                let t;
                const n = [];
                for(let i = 0; i < arguments.length; i++){
                    n[i] = arguments[i];
                }
                this.middleware = (t = this.middleware).concat.apply(t, n);
            }
            shouldBuffer(t) {
                return t.event.type !== "page" && (e.isOffline() || this._ready === false || this._initialized === false);
            }
            send(t, i, e) {
                let r;
                let a;
                return n.__awaiter(this, undefined, undefined, function() {
                    let s;
                    let c;
                    let l;
                    let d;
                    let h;
                    let v;
                    return n.__generator(this, function(g) {
                        switch(g.label){
                            case 0:
                                if (this.shouldBuffer(t)) {
                                    this.buffer.push(t);
                                    this.scheduleFlush();
                                    return [
                                        2,
                                        t
                                    ];
                                }
                                s = (a = (r = this.options) == null ? undefined : r.plan) == null ? undefined : a.track;
                                c = t.event.event;
                                if (s && c && this.name !== "Hightouch.io") {
                                    l = s[c];
                                    if (!u.isPlanEventEnabled(s, l)) {
                                        t.updateEvent("integrations", n.__assign(n.__assign({}, t.event.integrations), {
                                            All: false,
                                            "Hightouch.io": true
                                        }));
                                        t.cancel(new o.ContextCancelation({
                                            retry: false,
                                            reason: "Event ".concat(c, " disabled for integration ").concat(this.name, " in tracking plan"),
                                            type: "Dropped by plan"
                                        }));
                                        return [
                                            2,
                                            t
                                        ];
                                    }
                                    t.updateEvent("integrations", n.__assign(n.__assign({}, t.event.integrations), l == null ? undefined : l.integrations));
                                    if ((l == null ? undefined : l.enabled) && (l == null ? undefined : l.integrations[this.name]) === false) {
                                        t.cancel(new o.ContextCancelation({
                                            retry: false,
                                            reason: "Event ".concat(c, " disabled for integration ").concat(this.name, " in tracking plan"),
                                            type: "Dropped by plan"
                                        }));
                                        return [
                                            2,
                                            t
                                        ];
                                    }
                                }
                                return [
                                    4,
                                    f.applyDestinationMiddleware(this.name, t.event, this.middleware)
                                ];
                            case 1:
                                if ((d = g.sent()) === null) {
                                    return [
                                        2,
                                        t
                                    ];
                                }
                                h = new i(d, {
                                    traverse: !this.disableAutoISOConversion
                                });
                                t.stats.increment("analytics_js.integration.invoke", 1, [
                                    "method:".concat(e),
                                    "integration_name:".concat(this.name)
                                ]);
                                g.label = 2;
                            case 2:
                                g.trys.push([
                                    2,
                                    5,
                                    ,
                                    6
                                ]);
                                if (!this.integration) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                return [
                                    4,
                                    this.integration.invoke.call(this.integration, e, h)
                                ];
                            case 3:
                                g.sent();
                                g.label = 4;
                            case 4:
                                return [
                                    3,
                                    6
                                ];
                            case 5:
                                v = g.sent();
                                t.stats.increment("analytics_js.integration.invoke.error", 1, [
                                    "method:".concat(e),
                                    "integration_name:".concat(this.name)
                                ]);
                                throw v;
                            case 6:
                                return [
                                    2,
                                    t
                                ];
                        }
                    });
                });
            }
            track(t) {
                return n.__awaiter(this, undefined, undefined, function() {
                    return n.__generator(this, function(n) {
                        return [
                            2,
                            this.send(t, i.Track, "track")
                        ];
                    });
                });
            }
            page(t) {
                let e;
                return n.__awaiter(this, undefined, undefined, function() {
                    const r = this;
                    return n.__generator(this, function(n) {
                        if (((e = this.integration) == null ? undefined : e._assumesPageview) && !this._initialized) {
                            this.integration.initialize();
                        }
                        return [
                            2,
                            this.onInitialize.then(()=>r.send(t, i.Page, "page"))
                        ];
                    });
                });
            }
            identify(t) {
                return n.__awaiter(this, undefined, undefined, function() {
                    return n.__generator(this, function(n) {
                        return [
                            2,
                            this.send(t, i.Identify, "identify")
                        ];
                    });
                });
            }
            alias(t) {
                return n.__awaiter(this, undefined, undefined, function() {
                    return n.__generator(this, function(n) {
                        return [
                            2,
                            this.send(t, i.Alias, "alias")
                        ];
                    });
                });
            }
            group(t) {
                return n.__awaiter(this, undefined, undefined, function() {
                    return n.__generator(this, function(n) {
                        return [
                            2,
                            this.send(t, i.Group, "group")
                        ];
                    });
                });
            }
            scheduleFlush() {
                const t = this;
                if (!this.flushing) {
                    setTimeout(()=>n.__awaiter(t, undefined, undefined, function() {
                            let t;
                            return n.__generator(this, function(i) {
                                switch(i.label){
                                    case 0:
                                        this.flushing = true;
                                        t = this;
                                        return [
                                            4,
                                            function(t, i) {
                                                return n.__awaiter(this, undefined, undefined, function() {
                                                    let o;
                                                    const a = this;
                                                    return n.__generator(this, (u)=>{
                                                        switch(u.label){
                                                            case 0:
                                                                o = [];
                                                                if (e.isOffline()) {
                                                                    return [
                                                                        2,
                                                                        i
                                                                    ];
                                                                }
                                                                return [
                                                                    4,
                                                                    l.pWhile(()=>i.length > 0 && e.isOnline(), ()=>n.__awaiter(a, undefined, undefined, function() {
                                                                            let e;
                                                                            return n.__generator(this, (n)=>{
                                                                                switch(n.label){
                                                                                    case 0:
                                                                                        if (!(e = i.pop())) {
                                                                                            return [
                                                                                                2
                                                                                            ];
                                                                                        }
                                                                                        return [
                                                                                            4,
                                                                                            s.attempt(e, t)
                                                                                        ];
                                                                                    case 1:
                                                                                        if (!(n.sent() instanceof r.Context)) {
                                                                                            o.push(e);
                                                                                        }
                                                                                        return [
                                                                                            2
                                                                                        ];
                                                                                }
                                                                            });
                                                                        }))
                                                                ];
                                                            case 1:
                                                                u.sent();
                                                                o.map((t)=>i.pushWithBackoff(t));
                                                                return [
                                                                    2,
                                                                    i
                                                                ];
                                                        }
                                                    });
                                                });
                                            }(this, this.buffer)
                                        ];
                                    case 1:
                                        t.buffer = i.sent();
                                        this.flushing = false;
                                        if (this.buffer.todo > 0) {
                                            this.scheduleFlush();
                                        }
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), 5000 * Math.random());
                }
            }
        }
        t.s([
            "LegacyDestination",
            0,
            b,
            "ajsDestinations",
            0,
            (t, i, e = {}, r = {}, o, s)=>{
                if (a.isServer()) {
                    return [];
                }
                if (i.plan) {
                    r = r != null ? r : {};
                    r.plan = i.plan;
                }
                let u;
                let l;
                const d = (l = (u = i.middlewareSettings) == null ? undefined : u.routingRules) != null ? l : [];
                const i_integrations = i.integrations;
                const r_integrations = r.integrations;
                const v = c.mergedOptions(i, r != null ? r : {});
                const g = s == null ? undefined : s.reduce((acc, item)=>n.__assign(n.__assign({}, acc), {
                        [("Integration" in item ? item.Integration : item).prototype.name]: item
                    }), {});
                return Array.from(new Set(n.__spreadArray(n.__spreadArray([], Object.keys(i_integrations).filter((t)=>w(t, i_integrations[t])), true), Object.keys(g || {}).filter((t)=>y.isPlainObject(i_integrations[t]) || y.isPlainObject(r_integrations == null ? undefined : r_integrations[t])), true))).filter((t)=>!m(t, e)).map((n)=>{
                    let i;
                    let e;
                    let a;
                    let s;
                    let u;
                    const c = (u = (a = (e = (i = i_integrations[n]) == null ? undefined : i.versionSettings) == null ? undefined : e.override) != null ? a : (s = i == null ? undefined : i.versionSettings) == null ? undefined : s.version) != null ? u : "latest";
                    const l = new b(n, c, t, v[n], r, g == null ? undefined : g[n]);
                    if (d.filter((t)=>t.destinationName === n).length > 0 && o) {
                        l.addMiddleware(o);
                    }
                    return l;
                });
            }
        ], 451587);
    }
]);
