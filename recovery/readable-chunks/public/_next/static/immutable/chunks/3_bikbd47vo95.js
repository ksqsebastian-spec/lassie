;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "2b22c7c6-9e28-eba1-0d4f-a07860e3f1c3";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    279206,
    (t)=>{
        "use strict";
        var e = t.i(281889);
        var r = t.i(809393);
        var n = t.i(318563);
        let i = t.i(513679).forwardRef((t, ref)=>{
            if (t.as === "a") {
                let { as: as_1, ...rest_1 } = t;
                return e.jsx("a", {
                    ref,
                    ...rest_1
                });
            }
            let { as, ...rest } = t;
            return e.jsx("button", {
                ref,
                ...rest
            });
        });
        i.displayName = "Button";
        let o = {
            primary: {
                base: "bg-surface-primary text-text-primary group-active:bg-black-500 group-active:text-text-tertiary",
                hoverInvert: "group-hover/button:bg-surface-tertiary group-hover/button:text-text-tertiary",
                disabled: "group-disabled/button:bg-system-disabled-white group-disabled/button:text-text-secondary",
                icon: "bg-surface-primary text-text-primary"
            },
            secondary: {
                base: "bg-surface-tertiary text-text-tertiary group-active:bg-black-500",
                hoverInvert: "group-hover/button:bg-surface-quaternary group-hover/button:text-text-primary",
                disabled: "group-disabled/button:bg-system-disabled-black group-disabled/button:text-text-secondary",
                icon: "bg-surface-tertiary text-text-tertiary"
            },
            tertiary: {
                base: "bg-orange-500 text-text-invert-primary group-active:bg-black-500 group-active:text-text-tertiary",
                hoverInvert: "group-hover/button:bg-surface-tertiary group-hover/button:text-text-tertiary",
                disabled: "group-disabled/button:bg-system-disabled-white group-disabled/button:text-text-secondary",
                icon: "bg-orange-500 text-text-invert-primary"
            }
        };
        t.s([
            "ButtonPrimary",
            0,
            ({ children, className, withIcon = true, iconAlwaysVisible = false, theme = "primary", fullWidth, ...rest })=>{
                let h = o[theme];
                return e.jsxs(i, {
                    className: r.default("group/button relative isolate inline-flex h-10 tablet:h-10.5 cursor-pointer text-body-sm outline-hidden", className),
                    ...rest,
                    children: [
                        e.jsx("span", {
                            className: r.default("z-10 flex w-full items-center rounded-ctas-button px-[1.4rem] transition-colors", h.base, (!withIcon || iconAlwaysVisible) && h.hoverInvert, "border-2 border-transparent group-focus-visible/button:border-blue-500 group-focus-visible/button:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", h.disabled, fullWidth && "w-full justify-center"),
                            children
                        }),
                        withIcon && e.jsx("span", {
                            "aria-hidden": true,
                            className: r.default("z-0 flex h-[4rem] tablet:h-[4.2rem] w-[3.6rem] shrink-0 items-center justify-center rounded-[1.2rem]", iconAlwaysVisible ? r.default("transition-colors", h.hoverInvert) : "transition-[margin] group-hover/button:ml-0 group-focus-visible/button:ml-0 supports-hover:-ml-[3.6rem]", h.icon, "group-focus-visible/button:border-2 group-focus-visible/button:border-blue-500 group-focus-visible/button:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
                            children: e.jsx(n.default, {
                                className: "block size-[2rem]"
                            })
                        })
                    ]
                });
            }
        ], 279206);
    },
    265121,
    (t)=>{
        "use strict";
        t.i(279206);
        t.s([]);
    },
    318563,
    (t)=>{
        "use strict";
        var e = t.i(281889);
        t.s([
            "default",
            0,
            (t)=>e.jsx("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    "aria-label": "Chevron Icon",
                    ...t,
                    children: e.jsx("path", {
                        d: "M7.69345 4.09943C8.9391 6.25004 10.7089 8.05064 12.8376 9.33325L13.0719 9.47421C13.2562 9.58525 13.3687 9.78513 13.3687 10.0003C13.3686 10.2154 13.2561 10.4147 13.0719 10.5258L12.8376 10.6667C10.7089 11.9493 8.93909 13.75 7.69345 15.9006L6.63135 15.2854C7.86108 13.1624 9.56324 11.3559 11.6006 10.0003C9.56325 8.64472 7.86108 6.83823 6.63135 4.71517L7.69345 4.09943Z",
                        fill: "currentColor"
                    })
                })
        ]);
    },
    276522,
    (t)=>{
        "use strict";
        var e = t.i(281889);
        var r = t.i(300778);
        var n = t.i(513679);
        var i = t.i(931804);
        let o = "/stories";
        let SContext = n.createContext({
            collapsed: false,
            isCustomer: false,
            bgTheme: "light",
            isStories: false,
            setCollapsed: ()=>{},
            setBgTheme: ()=>{}
        });
        t.s([
            "NavContext",
            0,
            SContext,
            "NavProvider",
            0,
            ({ children })=>{
                let [collapsed, setCollapsed] = n.useState(false);
                let [bgTheme, setBgTheme] = n.useState("light");
                let f = r.usePathname();
                let isStories = f === o || f.startsWith(`${o}/`);
                let [isCustomer, setIsCustomer] = n.useState(false);
                n.useEffect(()=>{
                    setIsCustomer(i.getIsLassieUser());
                }, []);
                return e.jsx(SContext, {
                    value: {
                        collapsed,
                        isCustomer,
                        isStories,
                        bgTheme,
                        setCollapsed,
                        setBgTheme
                    },
                    children
                });
            },
            "useNav",
            0,
            ()=>n.useContext(SContext)
        ]);
    },
    931804,
    (t)=>{
        "use strict";
        let e = {
            maxAgeDays: 30,
            domain: ((t)=>{
                let e = t.split(".");
                if (!(e.length < 2 || /^[\d.]+$/.test(t))) {
                    return `.${e.slice(-2).join(".")}`;
                }
            })(window.location.hostname),
            path: "/",
            sameSite: "Lax",
            secure: true
        };
        class r {
            set(t, r = {}) {
                let n = {
                    ...e,
                    ...this.options,
                    ...r
                };
                let i = [
                    `${this.name}=${encodeURIComponent(this.serialize(t))}`,
                    n.maxAgeDays !== undefined && `max-age=${86400 * n.maxAgeDays}`,
                    n.path && `path=${n.path}`,
                    n.domain && `domain=${n.domain}`,
                    n.sameSite && `SameSite=${n.sameSite}`,
                    n.secure && "Secure"
                ].filter(Boolean).join("; ");
                document.cookie = i;
            }
            get() {
                let t = `${this.name}=`;
                let e = document.cookie.split(";").map((t)=>t.trim()).find((e)=>e.startsWith(t))?.slice(t.length);
                if (e) {
                    return this.deserialize(decodeURIComponent(e));
                }
            }
            delete() {
                this.set(this.emptyValue(), {
                    maxAgeDays: 0
                });
            }
            serialize(t) {
                return JSON.stringify(t);
            }
            deserialize(t) {
                return JSON.parse(t);
            }
            emptyValue() {
                return "";
            }
        }
        class n extends r {
            name = "utm";
            options = {
                ...e,
                maxAgeDays: 30
            };
        }
        class i extends r {
            name = "google_click_ids";
            options = {
                ...e,
                maxAgeDays: 30
            };
        }
        class o extends r {
            name = "referral_code";
            options = {
                ...e,
                maxAgeDays: 15
            };
        }
        class s extends r {
            name = "blog-view";
            options = {
                ...e,
                maxAgeDays: 365
            };
            serialize(t) {
                return t;
            }
            deserialize(t) {
                return t;
            }
        }
        t.s([
            "BlogViewCookie",
            0,
            s,
            "GoogleClickIdCookie",
            0,
            i,
            "ReferralCodeCookie",
            0,
            o,
            "UtmCookie",
            0,
            n,
            "getIsLassieUser",
            0,
            ()=>{
                let t = document.cookie.split("; ").find((t)=>t.startsWith("is_lassie_user="));
                return !!t && t.split("=")[1] === "true";
            }
        ]);
    },
    466487,
    (t)=>{
        "use strict";
        var e = t.i(298352);
        function r() {
            return !e.isBrowser() || window.navigator.onLine;
        }
        t.s([
            "isOffline",
            0,
            ()=>!r(),
            "isOnline",
            0,
            r
        ]);
    },
    267324,
    985821,
    233754,
    130797,
    724231,
    721335,
    (t)=>{
        "use strict";
        var e;
        var r = t.i(239150);
        var n = t.i(542043);
        var i = t.i(378517);
        var o = t.i(527554);
        var s = ()=>{
            if (typeof globalThis !== "undefined") {
                return globalThis;
            }
            if (typeof self !== "undefined") {
                return self;
            }
            if (typeof window !== "undefined") {
                return window;
            }
            return t.g;
        };
        t.s([
            "getGlobal",
            0,
            s
        ], 985821);
        var u = function() {
            const t = [];
            for(let e = 0; e < arguments.length; e++){
                t[e] = arguments[e];
            }
            const r = s();
            return (r && r.fetch || o.default).apply(undefined, t);
        };
        t.s([
            "fetch",
            0,
            u
        ], 233754);
        var a = "1.5.0";
        function c() {
            return "npm";
        }
        t.s([
            "version",
            0,
            a
        ], 130797);
        t.s([
            "getVersionType",
            0,
            c
        ], 724231);
        var l = "us-east-1.hightouch-events.com";
        t.s([
            "HIGHTOUCH_API_HOST",
            0,
            l
        ], 721335);
        var f = (metric, e, n)=>{
            const i = e.reduce((acc, item)=>{
                const r = item.split(":");
                const n = r[0];
                const i = r[1];
                acc[n] = i;
                return acc;
            }, {});
            return {
                type: "Counter",
                metric,
                value: 1,
                tags: r.__assign(r.__assign({}, i), {
                    library: "analytics.js",
                    library_version: n === "web" ? "next-".concat(a) : "npm:next-".concat(a)
                })
            };
        };
        function h(t) {
            console.error("Error sending hightouch performance metrics", t);
        }
        class d {
            constructor(t){
                var e;
                var r;
                var n;
                var i;
                var o = this;
                this.host = (e = t == null ? undefined : t.host) != null ? e : l;
                this.sampleRate = (r = t == null ? undefined : t.sampleRate) != null ? r : 1;
                this.flushTimer = (n = t == null ? undefined : t.flushTimer) != null ? n : 30000;
                this.maxQueueSize = (i = t == null ? undefined : t.maxQueueSize) != null ? i : 20;
                this.queue = [];
                if (this.sampleRate > 0) {
                    var s = false;
                    var u = ()=>{
                        if (!s) {
                            s = true;
                            o.flush().catch(h);
                            s = false;
                            setTimeout(u, o.flushTimer);
                        }
                    };
                    u();
                }
            }
            increment(t, e) {
                if (!(!t.includes("analytics_js.") || e.length === 0 || Math.random() > this.sampleRate) && !(this.queue.length >= this.maxQueueSize)) {
                    const r = f(t, e, c());
                    this.queue.push(r);
                    if (t.includes("error")) {
                        this.flush().catch(h);
                    }
                }
            }
            flush() {
                return r.__awaiter(this, undefined, undefined, function() {
                    const t = this;
                    return r.__generator(this, function(e) {
                        switch(e.label){
                            case 0:
                                if (this.queue.length <= 0) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    this.send().catch((e)=>{
                                        h(e);
                                        t.sampleRate = 0;
                                    })
                                ];
                            case 1:
                                e.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
            send() {
                return r.__awaiter(this, undefined, undefined, function() {
                    let t;
                    let headers;
                    return r.__generator(this, function(r) {
                        t = {
                            series: this.queue
                        };
                        this.queue = [];
                        headers = {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        };
                        return [
                            2,
                            u("https://".concat(this.host, "/v1/m"), {
                                headers,
                                body: JSON.stringify(t),
                                method: "POST"
                            })
                        ];
                    });
                });
            }
        }
        var p = ((t)=>{
            function n() {
                return t !== null && t.apply(this, arguments) || this;
            }
            r.__extends(n, t);
            n.initRemoteMetrics = (t)=>{
                e = new d(t);
            };
            n.prototype.increment = function(r, n, i) {
                t.prototype.increment.call(this, r, n, i);
                if (!(e == null)) {
                    e.increment(r, i != null ? i : []);
                }
            };
            return n;
        })(i.CoreStats);
        var g = ((t)=>{
            function e(e, r) {
                return t.call(this, e, r, new p) || this;
            }
            r.__extends(e, t);
            e.system = function() {
                return new this({
                    type: "track",
                    event: "system"
                });
            };
            return e;
        })(n.CoreContext);
        t.s([
            "Context",
            0,
            g
        ], 267324);
    },
    298352,
    (t)=>{
        "use strict";
        function e() {
            return typeof window !== "undefined";
        }
        t.s([
            "isBrowser",
            0,
            e,
            "isServer",
            0,
            ()=>!e()
        ]);
    },
    485718,
    (t)=>{
        "use strict";
        t.s([
            "gracefulDecodeURIComponent",
            0,
            (t)=>{
                try {
                    return decodeURIComponent(t.replace(/\+/g, " "));
                } catch (e) {
                    return t;
                }
            }
        ]);
    },
    851753,
    (t)=>{
        "use strict";
        function e(t) {
            return Array.prototype.slice.call(window.document.querySelectorAll("script")).find((e)=>e.src === t);
        }
        t.s([
            "loadScript",
            0,
            (t, r)=>{
                const n = e(t);
                if (n !== undefined) {
                    const i = n == null ? undefined : n.getAttribute("status");
                    if (i === "loaded") {
                        return Promise.resolve(n);
                    }
                    if (i === "loading") {
                        return new Promise((resolve, reject)=>{
                            n.addEventListener("load", ()=>resolve(n));
                            n.addEventListener("error", (t)=>reject(t));
                        });
                    }
                }
                return new Promise((resolve, reject)=>{
                    let i;
                    const o = window.document.createElement("script");
                    o.type = "text/javascript";
                    o.src = t;
                    o.async = true;
                    o.setAttribute("status", "loading");
                    for(let s = 0, u = Object.entries(r != null ? r : {}); s < u.length; s++){
                        const a = u[s];
                        const c = a[0];
                        const l = a[1];
                        o.setAttribute(c, l);
                    }
                    o.onload = ()=>{
                        o.onerror = o.onload = null;
                        o.setAttribute("status", "loaded");
                        resolve(o);
                    };
                    o.onerror = ()=>{
                        o.onerror = o.onload = null;
                        o.setAttribute("status", "error");
                        reject(Error("Failed to load ".concat(t)));
                    };
                    const f = window.document.getElementsByTagName("script")[0];
                    if (!((i = f.parentElement) == null)) {
                        i.insertBefore(o, f);
                    }
                });
            },
            "unloadScript",
            0,
            (t)=>{
                const r = e(t);
                if (r !== undefined) {
                    r.remove();
                }
                return Promise.resolve();
            }
        ]);
    },
    555595,
    245702,
    (t)=>{
        "use strict";
        var e;
        var r = "htevents";
        function n() {
            return window[r];
        }
        t.s([
            "getGlobalAnalytics",
            0,
            n,
            "setGlobalAnalytics",
            0,
            (t)=>{
                window[r] = t;
            },
            "setGlobalAnalyticsKey",
            0,
            (t)=>{
                r = t;
            }
        ], 245702);
        var i = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
        var o = ()=>{
            let t;
            Array.prototype.slice.call(document.querySelectorAll("script")).forEach((e)=>{
                let r;
                const n = (r = e.getAttribute("src")) != null ? r : "";
                const o = i.exec(n);
                if (o && o[1]) {
                    t = o[1];
                }
            });
            return t;
        };
        var s = ()=>{
            let t;
            if (e != null) {
                return e;
            }
            if ((t = n()) == null) {
                return undefined;
            }
            return t._cdn;
        };
        var u = ()=>{
            const t = s();
            if (t) {
                return t;
            }
            const e = o();
            return e || "https://cdn.hightouch-events.com";
        };
        t.s([
            "getCDN",
            0,
            u,
            "getNextIntegrationsURL",
            0,
            ()=>{
                const t = u();
                return "".concat(t, "/next-integrations");
            },
            "setGlobalCDNUrl",
            0,
            (t)=>{
                const r = n();
                if (r) {
                    r._cdn = t;
                }
                e = t;
            }
        ], 555595);
    },
    121044,
    849424,
    112104,
    (t)=>{
        "use strict";
        var e = t.i(239150);
        var r = (()=>{
            function t() {
                this.callbacks = {};
            }
            t.prototype.on = function(t, e) {
                if (this.callbacks[t]) {
                    this.callbacks[t].push(e);
                } else {
                    this.callbacks[t] = [
                        e
                    ];
                }
                return this;
            };
            t.prototype.once = function(t, e) {
                const r = this;
                const n = function() {
                    const i = [];
                    for(let o = 0; o < arguments.length; o++){
                        i[o] = arguments[o];
                    }
                    r.off(t, n);
                    e.apply(r, i);
                };
                this.on(t, n);
                return this;
            };
            t.prototype.off = function(t, e) {
                let r;
                const n = ((r = this.callbacks[t]) != null ? r : []).filter((t)=>t !== e);
                this.callbacks[t] = n;
                return this;
            };
            t.prototype.emit = function(t) {
                let e;
                const r = this;
                const n = [];
                for(let i = 1; i < arguments.length; i++){
                    n[i - 1] = arguments[i];
                }
                ((e = this.callbacks[t]) != null ? e : []).forEach((t)=>{
                    t.apply(r, n);
                });
                return this;
            };
            return t;
        })();
        t.s([
            "Emitter",
            0,
            r
        ], 849424);
        var n = "onRemoveFromFuture";
        var i = ((t)=>{
            function r(e, r, n) {
                const i = t.call(this) || this;
                i.future = [];
                i.maxAttempts = e;
                i.queue = r;
                i.seen = n != null ? n : {};
                return i;
            }
            e.__extends(r, t);
            r.prototype.push = function() {
                const t = this;
                const e = [];
                for(let r = 0; r < arguments.length; r++){
                    e[r] = arguments[r];
                }
                const n = e.map((e)=>!(t.updateAttempts(e) > t.maxAttempts || t.includes(e)) && (t.queue.push(e), true));
                this.queue = this.queue.sort((e, r)=>t.getAttempts(e) - t.getAttempts(r));
                return n;
            };
            r.prototype.pushWithBackoff = function(t) {
                let e;
                let r;
                let i;
                let o;
                let s;
                const u = this;
                if (this.getAttempts(t) === 0) {
                    return this.push(t)[0];
                }
                const a = this.updateAttempts(t);
                return !(a > this.maxAttempts || this.includes(t)) && (setTimeout(()=>{
                    u.queue.push(t);
                    u.future = u.future.filter((e)=>e.id !== t.id);
                    u.emit(n);
                }, (e = {
                    attempt: a - 1
                }, r = Math.random() + 1, i = e.minTimeout, o = e.factor, Math.min(r * (i === undefined ? 500 : i) * (o === undefined ? 2 : o) ** e.attempt, (s = e.maxTimeout) === undefined ? Infinity : s))), this.future.push(t), true);
            };
            r.prototype.getAttempts = function(t) {
                let e;
                if ((e = this.seen[t.id]) != null) {
                    return e;
                }
                return 0;
            };
            r.prototype.updateAttempts = function(t) {
                this.seen[t.id] = this.getAttempts(t) + 1;
                return this.getAttempts(t);
            };
            r.prototype.includes = function(t) {
                return this.queue.includes(t) || this.future.includes(t) || !!this.queue.find((e)=>e.id === t.id) || !!this.future.find((e)=>e.id === t.id);
            };
            r.prototype.pop = function() {
                return this.queue.shift();
            };
            Object.defineProperty(r.prototype, "length", {
                get () {
                    return this.queue.length;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(r.prototype, "todo", {
                get () {
                    return this.queue.length + this.future.length;
                },
                enumerable: false,
                configurable: true
            });
            return r;
        })(r);
        t.s([
            "ON_REMOVE_FROM_FUTURE",
            0,
            n,
            "PriorityQueue",
            0,
            i
        ], 112104);
        var o = t.i(267324);
        var s = t.i(298352);
        var u = {
            getItem () {},
            setItem () {},
            removeItem () {}
        };
        try {
            u = s.isBrowser() && window.localStorage ? window.localStorage : u;
        } catch (error) {
            console.warn("Unable to access localStorage", error);
        }
        function a(t) {
            const e = u.getItem(t);
            return (e ? JSON.parse(e) : []).map((t)=>new o.Context(t.event, t.id));
        }
        function c(t) {
            const e = u.getItem(t);
            if (e) {
                return JSON.parse(e);
            }
            return {};
        }
        function l(t) {
            u.removeItem(t);
        }
        function f(t, e, r = 0) {
            const n = "persisted-queue:v1:".concat(t, ":lock");
            const i = u.getItem(n);
            const o = i ? JSON.parse(i) : null;
            const s = o === null || new Date().getTime() > o;
            if (s) {
                u.setItem(n, JSON.stringify(new Date().getTime() + 50));
                e();
                u.removeItem(n);
                return;
            }
            if (!s && r < 3) {
                setTimeout(()=>{
                    f(t, e, r + 1);
                }, 50);
            } else {
                console.error("Unable to retrieve lock");
            }
        }
        var h = ((t)=>{
            function r(r, n) {
                const i = t.call(this, r, []) || this;
                const o = "persisted-queue:v1:".concat(n, ":items");
                const s = "persisted-queue:v1:".concat(n, ":seen");
                let h = [];
                let d = {};
                f(n, ()=>{
                    try {
                        h = a(o);
                        d = c(s);
                        l(o);
                        l(s);
                        i.queue = e.__spreadArray(e.__spreadArray([], h, true), i.queue, true);
                        i.seen = e.__assign(e.__assign({}, d), i.seen);
                    } catch (error) {
                        console.error(error);
                    }
                });
                window.addEventListener("pagehide", ()=>{
                    if (i.todo > 0) {
                        const t = e.__spreadArray(e.__spreadArray([], i.queue, true), i.future, true);
                        try {
                            f(n, ()=>{
                                let r;
                                let n;
                                let l;
                                let f;
                                r = a(o);
                                n = e.__spreadArray(e.__spreadArray([], t, true), r, true).reduce((acc, item)=>e.__assign(e.__assign({}, acc), {
                                        [item.id]: item
                                    }), {});
                                u.setItem(o, JSON.stringify(Object.values(n)));
                                l = i.seen;
                                f = c(s);
                                u.setItem(s, JSON.stringify(e.__assign(e.__assign({}, f), l)));
                            });
                        } catch (error) {
                            console.error(error);
                        }
                    }
                });
                return i;
            }
            e.__extends(r, t);
            return r;
        })(i);
        t.s([
            "PersistedPriorityQueue",
            0,
            h
        ], 121044);
    },
    816880,
    (t)=>{
        "use strict";
        var e = t.i(239150);
        var r = t.i(267324);
        var n = t.i(542043);
        var i = t.i(858722);
        class o {
            constructor(t, e, r){
                this.name = t;
                this.version = e;
                this.actions = r;
                this.type = "destination";
                this.middleware = [];
                this.alias = this._createMethod("alias");
                this.group = this._createMethod("group");
                this.identify = this._createMethod("identify");
                this.page = this._createMethod("page");
                this.screen = this._createMethod("screen");
                this.track = this._createMethod("track");
            }
            isLoaded() {
                return true;
            }
            load() {
                console.debug("loaded destination plugin: ".concat(this.name, " v").concat(this.version));
                return Promise.resolve();
            }
            addMiddleware() {
                let t;
                const e = [];
                for(let r = 0; r < arguments.length; r++){
                    e[r] = arguments[r];
                }
                (t = this.middleware).push.apply(t, e);
            }
            transform(t) {
                return e.__awaiter(this, undefined, undefined, function() {
                    let o;
                    return e.__generator(this, function(e) {
                        switch(e.label){
                            case 0:
                                return [
                                    4,
                                    i.applyDestinationMiddleware(this.name, t.event, this.middleware)
                                ];
                            case 1:
                                if ((o = e.sent()) == null) {
                                    t.cancel(new n.ContextCancelation({
                                        retry: false,
                                        reason: "dropped by destination middleware"
                                    }));
                                }
                                return [
                                    2,
                                    new r.Context(o)
                                ];
                        }
                    });
                });
            }
            _createMethod(t) {
                const r = this;
                return (n)=>e.__awaiter(r, undefined, undefined, function() {
                        let r;
                        return e.__generator(this, function(e) {
                            switch(e.label){
                                case 0:
                                    if (!this.actions[t]) {
                                        return [
                                            2,
                                            n
                                        ];
                                    }
                                    return [
                                        4,
                                        this.transform(n)
                                    ];
                                case 1:
                                    r = e.sent();
                                    return [
                                        4,
                                        this.actions[t](r)
                                    ];
                                case 2:
                                    e.sent();
                                    return [
                                        2,
                                        n
                                    ];
                            }
                        });
                    });
            }
        }
        t.s([
            "Destination",
            0,
            o
        ]);
    },
    929151,
    (t)=>{
        "use strict";
        function e(t, e) {
            return new Promise((resolve, reject)=>{
                const i = setTimeout(()=>{
                    reject(Error("Promise timed out"));
                }, e);
                t.then((t)=>{
                    clearTimeout(i);
                    return resolve(t);
                }).catch(reject);
            });
        }
        t.s([
            "invokeCallback",
            0,
            (t, r, n)=>{
                const i = ()=>{
                    try {
                        return Promise.resolve(r(t));
                    } catch (error) {
                        return Promise.reject(error);
                    }
                };
                return new Promise((resolve)=>setTimeout(resolve, n)).then(()=>e(i(), 1000)).catch((error)=>{
                    if (!(t == null)) {
                        t.log("warn", "Callback Error", {
                            error
                        });
                    }
                    if (!(t == null)) {
                        t.stats.increment("callback_error");
                    }
                }).then(()=>t);
            },
            "pTimeout",
            0,
            e
        ]);
    },
    990372,
    795847,
    77174,
    (t)=>{
        "use strict";
        var e = t.i(239150);
        var r = t.i(542043);
        function n(t, n) {
            t.log("debug", "plugin", {
                plugin: n.name
            });
            const i = new Date().getTime();
            const o = n[t.event.type];
            if (o === undefined) {
                return Promise.resolve(t);
            }
            return (function(t) {
                return e.__awaiter(this, undefined, undefined, function() {
                    return e.__generator(this, (e)=>{
                        switch(e.label){
                            case 0:
                                e.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    t()
                                ];
                            case 1:
                                return [
                                    2,
                                    e.sent()
                                ];
                            case 2:
                                return [
                                    2,
                                    Promise.reject(e.sent())
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            })(()=>o.apply(n, [
                    t
                ])).then((t)=>{
                const e = new Date().getTime() - i;
                t.stats.gauge("plugin_time", e, [
                    "plugin:".concat(n.name)
                ]);
                return t;
            }).catch((e)=>{
                if (e instanceof r.ContextCancelation && e.type === "middleware_cancellation") {
                    throw e;
                }
                if (e instanceof r.ContextCancelation) {
                    t.log("warn", e.type, {
                        plugin: n.name,
                        error: e
                    });
                } else {
                    t.log("error", "plugin Error", {
                        plugin: n.name,
                        error: e
                    });
                    t.stats.increment("plugin_error", 1, [
                        "plugin:".concat(n.name)
                    ]);
                }
                return e;
            });
        }
        t.s([
            "attempt",
            0,
            n,
            "ensure",
            0,
            (t, e)=>n(t, e).then((e)=>{
                    if (e instanceof r.CoreContext) {
                        return e;
                    }
                    t.log("debug", "Context canceled");
                    t.stats.increment("context_canceled");
                    t.cancel(e);
                })
        ], 990372);
        t.s([
            "mergedOptions",
            0,
            (t, r)=>{
                let n;
                const i = Object.entries((n = r.integrations) != null ? n : {}).reduce((acc, entry)=>{
                    const o = entry[0];
                    const s = entry[1];
                    if (typeof s === "object") {
                        return e.__assign(e.__assign({}, acc), {
                            [o]: s
                        });
                    }
                    return e.__assign(e.__assign({}, acc), {
                        [o]: {}
                    });
                }, {});
                return Object.entries(t.integrations).reduce((acc, entry)=>{
                    const o = entry[0];
                    const s = entry[1];
                    return e.__assign(e.__assign({}, acc), {
                        [o]: e.__assign(e.__assign({}, s), i[o])
                    });
                }, {});
            }
        ], 795847);
        t.s([
            "pWhile",
            0,
            (t, r)=>e.__awaiter(undefined, undefined, undefined, function() {
                    let n;
                    return e.__generator(this, (i)=>[
                            2,
                            (n = (i)=>e.__awaiter(undefined, undefined, undefined, function() {
                                    let o;
                                    return e.__generator(this, (e)=>{
                                        switch(e.label){
                                            case 0:
                                                if (!t(i)) {
                                                    return [
                                                        3,
                                                        2
                                                    ];
                                                }
                                                o = n;
                                                return [
                                                    4,
                                                    r()
                                                ];
                                            case 1:
                                                return [
                                                    2,
                                                    o.apply(undefined, [
                                                        e.sent()
                                                    ])
                                                ];
                                            case 2:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }))(undefined)
                        ]);
                })
        ], 77174);
    },
    56844,
    (t)=>{
        "use strict";
        t.s([
            "exists",
            0,
            (t)=>t != null,
            "isFunction",
            0,
            (t)=>typeof t === "function",
            "isNumber",
            0,
            (t)=>typeof t === "number",
            "isPlainObject",
            0,
            (t)=>Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === "object",
            "isString",
            0,
            (t)=>typeof t === "string"
        ]);
    },
    809393,
    (t)=>{
        "use strict";
        function e() {
            let t;
            let e;
            for(var r = 0, n = "", i = arguments.length; r < i; r++){
                if ((t = arguments[r]) && (e = function t(e) {
                    let r;
                    let n;
                    let i = "";
                    if (typeof e === "string" || typeof e === "number") {
                        i += e;
                    } else if (typeof e === "object") {
                        if (Array.isArray(e)) {
                            const o = e.length;
                            for(r = 0; r < o; r++){
                                if (e[r] && (n = t(e[r]))) {
                                    if (i) {
                                        i += " ";
                                    }
                                    i += n;
                                }
                            }
                        } else {
                            for(n in e){
                                if (e[n]) {
                                    if (i) {
                                        i += " ";
                                    }
                                    i += n;
                                }
                            }
                        }
                    }
                    return i;
                }(t))) {
                    if (n) {
                        n += " ";
                    }
                    n += e;
                }
            }
            return n;
        }
        t.s([
            "clsx",
            0,
            e,
            "default",
            0,
            e
        ]);
    },
    527554,
    (t, e, r)=>{
        "use strict";
        e.exports = self.fetch.bind(self);
        e.exports.default = e.exports;
    },
    81378,
    (t, e, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "useMergedRef", {
            enumerable: true,
            get () {
                return useI;
            }
        });
        let n = t.r(513679);
        function useI(t, e) {
            let rRef = n.useRef(null);
            let iRef = n.useRef(null);
            return n.useCallback((n)=>{
                if (n === null) {
                    let t = rRef.current;
                    if (t) {
                        rRef.current = null;
                        t();
                    }
                    let e = iRef.current;
                    if (e) {
                        iRef.current = null;
                        e();
                    }
                } else {
                    if (t) {
                        rRef.current = o(t, n);
                    }
                    if (e) {
                        iRef.current = o(e, n);
                    }
                }
            }, [
                t,
                e
            ]);
        }
        function o(t, e) {
            if (typeof t !== "function") {
                t.current = e;
                return ()=>{
                    t.current = null;
                };
            }
            {
                let r = t(e);
                if (typeof r === "function") {
                    return r;
                }
                return ()=>t(null);
            }
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            e.exports = r.default;
        }
    },
    300778,
    (t, e, r)=>{
        e.exports = t.r(16579);
    },
    958711,
    (t, e, r)=>{
        e.exports = function() {
            "use strict";
            const t = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f"
            ];
            function e(t, e) {
                let r = t[0];
                let n = t[1];
                let i = t[2];
                let o = t[3];
                r += (n & i | ~n & o) + e[0] - 680876936 | 0;
                o += ((r = (r << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[1] - 389564586 | 0;
                i += ((o = (o << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[2] + 606105819 | 0;
                n += ((i = (i << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[3] - 1044525330 | 0;
                r += ((n = (n << 22 | n >>> 10) + i | 0) & i | ~n & o) + e[4] - 176418897 | 0;
                o += ((r = (r << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[5] + 1200080426 | 0;
                i += ((o = (o << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[6] - 1473231341 | 0;
                n += ((i = (i << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[7] - 45705983 | 0;
                r += ((n = (n << 22 | n >>> 10) + i | 0) & i | ~n & o) + e[8] + 1770035416 | 0;
                o += ((r = (r << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[9] - 1958414417 | 0;
                i += ((o = (o << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[10] - 42063 | 0;
                n += ((i = (i << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[11] - 1990404162 | 0;
                r += ((n = (n << 22 | n >>> 10) + i | 0) & i | ~n & o) + e[12] + 1804603682 | 0;
                o += ((r = (r << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[13] - 40341101 | 0;
                i += ((o = (o << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[14] - 1502002290 | 0;
                n += ((i = (i << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[15] + 1236535329 | 0;
                r += ((n = (n << 22 | n >>> 10) + i | 0) & o | i & ~o) + e[1] - 165796510 | 0;
                o += ((r = (r << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[6] - 1069501632 | 0;
                i += ((o = (o << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[11] + 643717713 | 0;
                n += ((i = (i << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[0] - 373897302 | 0;
                r += ((n = (n << 20 | n >>> 12) + i | 0) & o | i & ~o) + e[5] - 701558691 | 0;
                o += ((r = (r << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[10] + 38016083 | 0;
                i += ((o = (o << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[15] - 660478335 | 0;
                n += ((i = (i << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[4] - 405537848 | 0;
                r += ((n = (n << 20 | n >>> 12) + i | 0) & o | i & ~o) + e[9] + 568446438 | 0;
                o += ((r = (r << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[14] - 1019803690 | 0;
                i += ((o = (o << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[3] - 187363961 | 0;
                n += ((i = (i << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[8] + 1163531501 | 0;
                r += ((n = (n << 20 | n >>> 12) + i | 0) & o | i & ~o) + e[13] - 1444681467 | 0;
                o += ((r = (r << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[2] - 51403784 | 0;
                i += ((o = (o << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[7] + 1735328473 | 0;
                n += ((i = (i << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[12] - 1926607734 | 0;
                r += ((n = (n << 20 | n >>> 12) + i | 0) ^ i ^ o) + e[5] - 378558 | 0;
                o += ((r = (r << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[8] - 2022574463 | 0;
                i += ((o = (o << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[11] + 1839030562 | 0;
                n += ((i = (i << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[14] - 35309556 | 0;
                r += ((n = (n << 23 | n >>> 9) + i | 0) ^ i ^ o) + e[1] - 1530992060 | 0;
                o += ((r = (r << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[4] + 1272893353 | 0;
                i += ((o = (o << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[7] - 155497632 | 0;
                n += ((i = (i << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[10] - 1094730640 | 0;
                r += ((n = (n << 23 | n >>> 9) + i | 0) ^ i ^ o) + e[13] + 681279174 | 0;
                o += ((r = (r << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[0] - 358537222 | 0;
                i += ((o = (o << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[3] - 722521979 | 0;
                n += ((i = (i << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[6] + 76029189 | 0;
                r += ((n = (n << 23 | n >>> 9) + i | 0) ^ i ^ o) + e[9] - 640364487 | 0;
                o += ((r = (r << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[12] - 421815835 | 0;
                i += ((o = (o << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[15] + 530742520 | 0;
                n += ((i = (i << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[2] - 995338651 | 0;
                n = (n << 23 | n >>> 9) + i | 0;
                r += (i ^ (n | ~o)) + e[0] - 198630844 | 0;
                r = (r << 6 | r >>> 26) + n | 0;
                o += (n ^ (r | ~i)) + e[7] + 1126891415 | 0;
                o = (o << 10 | o >>> 22) + r | 0;
                i += (r ^ (o | ~n)) + e[14] - 1416354905 | 0;
                i = (i << 15 | i >>> 17) + o | 0;
                n += (o ^ (i | ~r)) + e[5] - 57434055 | 0;
                n = (n << 21 | n >>> 11) + i | 0;
                r += (i ^ (n | ~o)) + e[12] + 1700485571 | 0;
                r = (r << 6 | r >>> 26) + n | 0;
                o += (n ^ (r | ~i)) + e[3] - 1894986606 | 0;
                o = (o << 10 | o >>> 22) + r | 0;
                i += (r ^ (o | ~n)) + e[10] - 1051523 | 0;
                i = (i << 15 | i >>> 17) + o | 0;
                n += (o ^ (i | ~r)) + e[1] - 2054922799 | 0;
                n = (n << 21 | n >>> 11) + i | 0;
                r += (i ^ (n | ~o)) + e[8] + 1873313359 | 0;
                r = (r << 6 | r >>> 26) + n | 0;
                o += (n ^ (r | ~i)) + e[15] - 30611744 | 0;
                o = (o << 10 | o >>> 22) + r | 0;
                i += (r ^ (o | ~n)) + e[6] - 1560198380 | 0;
                i = (i << 15 | i >>> 17) + o | 0;
                n += (o ^ (i | ~r)) + e[13] + 1309151649 | 0;
                n = (n << 21 | n >>> 11) + i | 0;
                r += (i ^ (n | ~o)) + e[4] - 145523070 | 0;
                r = (r << 6 | r >>> 26) + n | 0;
                o += (n ^ (r | ~i)) + e[11] - 1120210379 | 0;
                o = (o << 10 | o >>> 22) + r | 0;
                i += (r ^ (o | ~n)) + e[2] + 718787259 | 0;
                i = (i << 15 | i >>> 17) + o | 0;
                n += (o ^ (i | ~r)) + e[9] - 343485551 | 0;
                n = (n << 21 | n >>> 11) + i | 0;
                t[0] = r + t[0] | 0;
                t[1] = n + t[1] | 0;
                t[2] = i + t[2] | 0;
                t[3] = o + t[3] | 0;
            }
            function r(t) {
                let e;
                const r = [];
                for(e = 0; e < 64; e += 4){
                    r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                }
                return r;
            }
            function n(t) {
                let e;
                const r = [];
                for(e = 0; e < 64; e += 4){
                    r[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                }
                return r;
            }
            function i(t) {
                let n;
                let i;
                let o;
                let s;
                let u;
                let a;
                const t_length = t.length;
                const l = [
                    1732584193,
                    -271733879,
                    -1732584194,
                    271733878
                ];
                for(n = 64; n <= t_length; n += 64){
                    e(l, r(t.substring(n - 64, n)));
                }
                i = (t = t.substring(n - 64)).length;
                o = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(n = 0; n < i; n += 1){
                    o[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
                }
                o[n >> 2] |= 128 << (n % 4 << 3);
                if (n > 55) {
                    e(l, o);
                    for(n = 0; n < 16; n += 1){
                        o[n] = 0;
                    }
                }
                u = parseInt((s = (s = 8 * t_length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16);
                a = parseInt(s[1], 16) || 0;
                o[14] = u;
                o[15] = a;
                e(l, o);
                return l;
            }
            function o(e) {
                let r;
                for(r = 0; r < e.length; r += 1){
                    e[r] = ((e)=>{
                        let r;
                        let n = "";
                        for(r = 0; r < 4; r += 1){
                            n += t[e >> 8 * r + 4 & 15] + t[e >> 8 * r & 15];
                        }
                        return n;
                    })(e[r]);
                }
                return e.join("");
            }
            function s(t) {
                if (/[\u0080-\uFFFF]/.test(t)) {
                    t = unescape(encodeURIComponent(t));
                }
                return t;
            }
            function u(t) {
                let e;
                const r = [];
                const t_length = t.length;
                for(e = 0; e < t_length - 1; e += 2){
                    r.push(parseInt(t.substr(e, 2), 16));
                }
                return String.fromCharCode.apply(String, r);
            }
            class a {
                constructor(){
                    this.reset();
                }
                append(t) {
                    this.appendBinary(s(t));
                    return this;
                }
                appendBinary(t) {
                    this._buff += t;
                    this._length += t.length;
                    let n;
                    const length = this._buff.length;
                    for(n = 64; n <= length; n += 64){
                        e(this._hash, r(this._buff.substring(n - 64, n)));
                    }
                    this._buff = this._buff.substring(n - 64);
                    return this;
                }
                end(t) {
                    let e;
                    let r;
                    const _buff = this._buff;
                    const n_length = _buff.length;
                    const s = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                    for(e = 0; e < n_length; e += 1){
                        s[e >> 2] |= _buff.charCodeAt(e) << (e % 4 << 3);
                    }
                    this._finish(s, n_length);
                    r = o(this._hash);
                    if (t) {
                        r = u(r);
                    }
                    this.reset();
                    return r;
                }
                reset() {
                    this._buff = "";
                    this._length = 0;
                    this._hash = [
                        1732584193,
                        -271733879,
                        -1732584194,
                        271733878
                    ];
                    return this;
                }
                getState() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash.slice()
                    };
                }
                setState(t) {
                    this._buff = t.buff;
                    this._length = t.length;
                    this._hash = t.hash;
                    return this;
                }
                destroy() {
                    delete this._hash;
                    delete this._buff;
                    delete this._length;
                }
                _finish(t, r) {
                    let n;
                    let i;
                    let o;
                    let s = r;
                    t[s >> 2] |= 128 << (s % 4 << 3);
                    if (s > 55) {
                        e(this._hash, t);
                        for(s = 0; s < 16; s += 1){
                            t[s] = 0;
                        }
                    }
                    i = parseInt((n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16);
                    o = parseInt(n[1], 16) || 0;
                    t[14] = i;
                    t[15] = o;
                    e(this._hash, t);
                }
                static hash(t, e) {
                    return a.hashBinary(s(t), e);
                }
                static hashBinary(t, e) {
                    const r = o(i(t));
                    if (e) {
                        return u(r);
                    }
                    return r;
                }
                static ArrayBuffer() {
                    this.reset();
                }
            }
            o(i("hello"));
            if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
                (()=>{
                    function t(t, byteLength) {
                        if ((t = 0 | t || 0) < 0) {
                            return Math.max(t + byteLength, 0);
                        }
                        return Math.min(t, byteLength);
                    }
                    ArrayBuffer.prototype.slice = function(e, r) {
                        let n;
                        let i;
                        let o;
                        let s;
                        const byteLength = this.byteLength;
                        const a = t(e, byteLength);
                        let c = byteLength;
                        if (r !== undefined) {
                            c = t(r, byteLength);
                        }
                        if (a > c) {
                            return new ArrayBuffer(0);
                        }
                        o = new Uint8Array(i = new ArrayBuffer(n = c - a));
                        s = new Uint8Array(this, a, n);
                        o.set(s);
                        return i;
                    };
                })();
            }
            a.ArrayBuffer.prototype.append = function(t) {
                let r;
                let i;
                let o;
                r = this._buff.buffer;
                (i = new Uint8Array(r.byteLength + t.byteLength)).set(new Uint8Array(r));
                i.set(new Uint8Array(t), r.byteLength);
                const s = i;
                const s_length = s.length;
                this._length += t.byteLength;
                for(o = 64; o <= s_length; o += 64){
                    e(this._hash, n(s.subarray(o - 64, o)));
                }
                this._buff = new Uint8Array(o - 64 < s_length ? s.buffer.slice(o - 64) : 0);
                return this;
            };
            a.ArrayBuffer.prototype.end = function(t) {
                let e;
                let r;
                const _buff = this._buff;
                const n_length = _buff.length;
                const s = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(e = 0; e < n_length; e += 1){
                    s[e >> 2] |= _buff[e] << (e % 4 << 3);
                }
                this._finish(s, n_length);
                r = o(this._hash);
                if (t) {
                    r = u(r);
                }
                this.reset();
                return r;
            };
            a.ArrayBuffer.prototype.reset = function() {
                this._buff = new Uint8Array(0);
                this._length = 0;
                this._hash = [
                    1732584193,
                    -271733879,
                    -1732584194,
                    271733878
                ];
                return this;
            };
            a.ArrayBuffer.prototype.getState = function() {
                let t;
                const e = a.prototype.getState.call(this);
                t = e.buff;
                e.buff = String.fromCharCode.apply(null, new Uint8Array(t));
                return e;
            };
            a.ArrayBuffer.prototype.setState = function(t) {
                t.buff = ((t, e)=>{
                    let r;
                    const t_length = t.length;
                    const i = new ArrayBuffer(t_length);
                    const o = new Uint8Array(i);
                    for(r = 0; r < t_length; r += 1){
                        o[r] = t.charCodeAt(r);
                    }
                    if (e) {
                        return o;
                    }
                    return i;
                })(t.buff, true);
                return a.prototype.setState.call(this, t);
            };
            a.ArrayBuffer.prototype.destroy = a.prototype.destroy;
            a.ArrayBuffer.prototype._finish = a.prototype._finish;
            a.ArrayBuffer.hash = (t, r)=>{
                const i = o(((t)=>{
                    let r;
                    let i;
                    let o;
                    let s;
                    let u;
                    let a;
                    const t_length = t.length;
                    const l = [
                        1732584193,
                        -271733879,
                        -1732584194,
                        271733878
                    ];
                    for(r = 64; r <= t_length; r += 64){
                        e(l, n(t.subarray(r - 64, r)));
                    }
                    i = (t = r - 64 < t_length ? t.subarray(r - 64) : new Uint8Array(0)).length;
                    o = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                    for(r = 0; r < i; r += 1){
                        o[r >> 2] |= t[r] << (r % 4 << 3);
                    }
                    o[r >> 2] |= 128 << (r % 4 << 3);
                    if (r > 55) {
                        e(l, o);
                        for(r = 0; r < 16; r += 1){
                            o[r] = 0;
                        }
                    }
                    u = parseInt((s = (s = 8 * t_length).toString(16).match(/(.*?)(.{0,8})$/))[2], 16);
                    a = parseInt(s[1], 16) || 0;
                    o[14] = u;
                    o[15] = a;
                    e(l, o);
                    return l;
                })(new Uint8Array(t)));
                if (r) {
                    return u(i);
                }
                return i;
            };
            return a;
        }();
    }
]);
