;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "2f60d4a8-40c3-b50c-4170-d14a74bfaecd";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    330053,
    (e, t, r)=>{
        "use strict";
        r._ = (e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        };
    },
    171266,
    (e, t, r)=>{
        "use strict";
        function n(e) {
            if (typeof WeakMap !== "function") {
                return null;
            }
            const t = new WeakMap;
            const r = new WeakMap;
            return (n = (e)=>{
                if (e) {
                    return r;
                }
                return t;
            })(e);
        }
        r._ = (e, t)=>{
            if (!t && e && e.__esModule) {
                return e;
            }
            if (e === null || typeof e !== "object" && typeof e !== "function") {
                return {
                    default: e
                };
            }
            const r = n(t);
            if (r && r.has(e)) {
                return r.get(e);
            }
            const o = {
                __proto__: null
            };
            const u = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(const i in e){
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    const a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
                    if (a && (a.get || a.set)) {
                        Object.defineProperty(o, i, a);
                    } else {
                        o[i] = e[i];
                    }
                }
            }
            o.default = e;
            if (r) {
                r.set(e, o);
            }
            return o;
        };
    },
    555408,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            HTTPAccessErrorStatus () {
                return u;
            },
            HTTP_ERROR_FALLBACK_ERROR_CODE () {
                return a;
            },
            getAccessFallbackErrorTypeByStatus () {
                return s;
            },
            getAccessFallbackHTTPStatus () {
                return l;
            },
            isHTTPAccessFallbackError () {
                return c;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = {
            NOT_FOUND: 404,
            FORBIDDEN: 403,
            UNAUTHORIZED: 401
        };
        let i = new Set(Object.values(u));
        let a = "NEXT_HTTP_ERROR_FALLBACK";
        function c(e) {
            if (typeof e !== "object" || e === null || !("digest" in e) || typeof e.digest !== "string") {
                return false;
            }
            let [t, r] = e.digest.split(";");
            return t === a && i.has(Number(r));
        }
        function l(e) {
            return Number(e.digest.split(";")[1]);
        }
        function s(e) {
            switch(e){
                case 401:
                    return "unauthorized";
                case 403:
                    return "forbidden";
                case 404:
                    return "not-found";
                default:
                    return;
            }
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    213475,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "isNextRouterError", {
            enumerable: true,
            get () {
                return u;
            }
        });
        let n = e.r(555408);
        let o = e.r(517460);
        function u(e) {
            return o.isRedirectError(e) || n.isHTTPAccessFallbackError(e);
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    643660,
    (e, t, r)=>{
        "use strict";
        let n;
        let o;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var u = {
            useDynamicRouteParams () {
                return n;
            },
            useDynamicSearchParams () {
                return o;
            }
        };
        for(var i in u){
            Object.defineProperty(r, i, {
                enumerable: true,
                get: u[i]
            });
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    114090,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            ServerInsertedHTMLContext () {
                return IContext;
            },
            useServerInsertedHTML () {
                return useA;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(171266)._(e.r(513679));
        let IContext = u.default.createContext(null);
        function useA(e) {
            let t = u.useContext(IContext);
            if (t) {
                t(e);
            }
        }
    },
    562931,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "notFound", {
            enumerable: true,
            get () {
                return u;
            }
        });
        let n = e.r(555408);
        let o = `${n.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
        function u() {
            let e = Object.defineProperty(Error(o), "__NEXT_ERROR_CODE", {
                value: "E1041",
                enumerable: false,
                configurable: true
            });
            e.digest = o;
            throw e;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    968564,
    (e, t, r)=>{
        "use strict";
        function n() {
            throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
                value: "E488",
                enumerable: false,
                configurable: true
            });
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "forbidden", {
            enumerable: true,
            get () {
                return n;
            }
        });
        e.r(555408).HTTP_ERROR_FALLBACK_ERROR_CODE;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    188191,
    (e, t, r)=>{
        "use strict";
        function n() {
            throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
                value: "E411",
                enumerable: false,
                configurable: true
            });
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "unauthorized", {
            enumerable: true,
            get () {
                return n;
            }
        });
        e.r(555408).HTTP_ERROR_FALLBACK_ERROR_CODE;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    165441,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "ReadonlyURLSearchParams", {
            enumerable: true,
            get () {
                return o;
            }
        });
        class n extends Error {
            constructor(){
                super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
                Object.defineProperty(this, "__NEXT_ERROR_CODE", {
                    value: "E1174",
                    enumerable: false,
                    configurable: true
                });
            }
        }
        class o extends URLSearchParams {
            append() {
                throw new n;
            }
            delete() {
                throw new n;
            }
            set() {
                throw new n;
            }
            sort() {
                throw new n;
            }
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    517460,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            REDIRECT_ERROR_CODE () {
                return i;
            },
            isRedirectError () {
                return a;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(539658);
        let i = "NEXT_REDIRECT";
        function a(e) {
            if (typeof e !== "object" || e === null || !("digest" in e) || typeof e.digest !== "string") {
                return false;
            }
            let t = e.digest.split(";");
            let [r, n] = t;
            let o = t.slice(2, -2).join(";");
            let a = Number(t.at(-2));
            return r === i && (n === "replace" || n === "push") && typeof o === "string" && !isNaN(a) && a in u.RedirectStatusCode;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    539658,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "RedirectStatusCode", {
            enumerable: true,
            get () {
                return o;
            }
        });
        var n;
        n = {};
        n[n.SeeOther = 303] = "SeeOther";
        n[n.TemporaryRedirect = 307] = "TemporaryRedirect";
        n[n.PermanentRedirect = 308] = "PermanentRedirect";
        var o = n;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    611069,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            getRedirectError () {
                return c;
            },
            getRedirectStatusCodeFromError () {
                return p;
            },
            getRedirectTypeFromError () {
                return d;
            },
            getURLFromRedirectError () {
                return f;
            },
            permanentRedirect () {
                return s;
            },
            redirect () {
                return l;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(539658);
        let i = e.r(517460);
        let a = e.r(629265);
        function c(e, t, r = u.RedirectStatusCode.TemporaryRedirect) {
            let n = Object.defineProperty(Error(i.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
            n.digest = `${i.REDIRECT_ERROR_CODE};${t};${e};${r};`;
            return n;
        }
        function l(e, t) {
            throw c(e, t ??= a.actionAsyncStorage?.getStore()?.isAction ? "push" : "replace", u.RedirectStatusCode.TemporaryRedirect);
        }
        function s(e, t = "replace") {
            throw c(e, t, u.RedirectStatusCode.PermanentRedirect);
        }
        function f(e) {
            if (i.isRedirectError(e)) {
                return e.digest.split(";").slice(2, -2).join(";");
            }
            return null;
        }
        function d(e) {
            if (!i.isRedirectError(e)) {
                throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
                    value: "E260",
                    enumerable: false,
                    configurable: true
                });
            }
            return e.digest.split(";", 2)[1];
        }
        function p(e) {
            if (!i.isRedirectError(e)) {
                throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
                    value: "E260",
                    enumerable: false,
                    configurable: true
                });
            }
            return Number(e.digest.split(";").at(-2));
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    629265,
    (e, t, r)=>{
        "use strict";
        let n;
        let o;
        let u;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var i = {
            actionAsyncStorage () {
                return n;
            },
            workAsyncStorage () {
                return o;
            },
            workUnitAsyncStorage () {
                return u;
            }
        };
        for(var a in i){
            Object.defineProperty(r, a, {
                enumerable: true,
                get: i[a]
            });
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    389357,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            UnrecognizedActionError () {
                return u;
            },
            unstable_isUnrecognizedActionError () {
                return i;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        class u extends Error {
            constructor(...e){
                super(...e);
                this.name = "UnrecognizedActionError";
            }
        }
        function i(e) {
            return !!(e && typeof e === "object" && e instanceof u);
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    754348,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "unstable_rethrow", {
            enumerable: true,
            get () {
                return function e(t) {
                    if (o.isNextRouterError(t) || n.isBailoutToCSRError(t)) {
                        throw t;
                    }
                    if (t instanceof Error && "cause" in t) {
                        e(t.cause);
                    }
                };
            }
        });
        let n = e.r(170307);
        let o = e.r(213475);
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    757825,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            ReadonlyURLSearchParams () {
                return u.ReadonlyURLSearchParams;
            },
            RedirectType () {
                return d;
            },
            forbidden () {
                return c.forbidden;
            },
            notFound () {
                return a.notFound;
            },
            permanentRedirect () {
                return i.permanentRedirect;
            },
            redirect () {
                return i.redirect;
            },
            unauthorized () {
                return l.unauthorized;
            },
            unstable_isUnrecognizedActionError () {
                return f;
            },
            unstable_rethrow () {
                return s.unstable_rethrow;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(165441);
        let i = e.r(611069);
        let a = e.r(562931);
        let c = e.r(968564);
        let l = e.r(188191);
        let s = e.r(754348);
        function f() {
            throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
                value: "E776",
                enumerable: false,
                configurable: true
            });
        }
        let d = {
            push: "push",
            replace: "replace"
        };
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    16579,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            ReadonlyURLSearchParams () {
                return a.ReadonlyURLSearchParams;
            },
            RedirectType () {
                return d.RedirectType;
            },
            ServerInsertedHTMLContext () {
                return s.ServerInsertedHTMLContext;
            },
            forbidden () {
                return d.forbidden;
            },
            notFound () {
                return d.notFound;
            },
            permanentRedirect () {
                return d.permanentRedirect;
            },
            redirect () {
                return d.redirect;
            },
            unauthorized () {
                return d.unauthorized;
            },
            unstable_isUnrecognizedActionError () {
                return f.unstable_isUnrecognizedActionError;
            },
            unstable_rethrow () {
                return d.unstable_rethrow;
            },
            useParams () {
                return useG;
            },
            usePathname () {
                return useM;
            },
            useRouter () {
                return useV;
            },
            useSearchParams () {
                return useB;
            },
            useSelectedLayoutSegment () {
                return useO;
            },
            useSelectedLayoutSegments () {
                return useH;
            },
            useServerInsertedHTML () {
                return s.useServerInsertedHTML;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(171266)._(e.r(513679));
        let i = e.r(516968);
        let a = e.r(509156);
        let c = e.r(36741);
        let l = e.r(643660);
        let s = e.r(114090);
        let f = e.r(389357);
        let d = e.r(757825);
        let { instrumentParamsForClientValidation, instrumentSearchParamsForClientValidation, expectCompleteParamsInClientValidation } = {};
        function useB() {
            l.useDynamicSearchParams?.("useSearchParams()");
            let e = u.useContext(a.SearchParamsContext);
            return u.useMemo(()=>{
                if (e) {
                    return new a.ReadonlyURLSearchParams(e);
                }
                return null;
            }, [
                e
            ]);
        }
        function useM() {
            l.useDynamicRouteParams?.("usePathname()");
            return u.useContext(a.PathnameContext);
        }
        function useV() {
            let e = u.useContext(i.AppRouterContext);
            if (e === null) {
                throw Object.defineProperty(Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
                    value: "E238",
                    enumerable: false,
                    configurable: true
                });
            }
            let t = u.useContext(i.LayoutRouterContext);
            let r = t?.parentCacheNode.bfcacheId ?? 0;
            return u.useMemo(()=>({
                    back: e.back,
                    forward: e.forward,
                    refresh: e.refresh,
                    hmrRefresh: e.hmrRefresh,
                    push: e.push,
                    replace: e.replace,
                    prefetch: e.prefetch,
                    experimental_gesturePush: e.experimental_gesturePush,
                    bfcacheId: "_b_" + r + "_"
                }), [
                e,
                r
            ]);
        }
        function useG() {
            l.useDynamicRouteParams?.("useParams()");
            return u.useContext(a.PathParamsContext);
        }
        function useH(e = "children") {
            l.useDynamicRouteParams?.("useSelectedLayoutSegments()");
            let t = u.useContext(i.LayoutRouterContext);
            if (t) {
                return c.getSelectedLayoutSegmentPath(t.parentTree, e);
            }
            return null;
        }
        function useO(e = "children") {
            l.useDynamicRouteParams?.("useSelectedLayoutSegment()");
            u.useContext(a.NavigationPromisesContext);
            let t = useH(e);
            return c.computeSelectedLayoutSegment(t, e);
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    500986,
    (e, t, r)=>{
        var n = {
            156: function(e) {
                let t;
                let r;
                let n;
                const o = e.exports = {};
                function u() {
                    throw Error("setTimeout has not been defined");
                }
                function i() {
                    throw Error("clearTimeout has not been defined");
                }
                try {
                    t = typeof setTimeout === "function" ? setTimeout : u;
                } catch (e) {
                    t = u;
                }
                try {
                    r = typeof clearTimeout === "function" ? clearTimeout : i;
                } catch (e) {
                    r = i;
                }
                function a(e) {
                    if (t === setTimeout) {
                        return setTimeout(e, 0);
                    }
                    if ((t === u || !t) && setTimeout) {
                        t = setTimeout;
                        return setTimeout(e, 0);
                    }
                    try {
                        return t(e, 0);
                    } catch (r) {
                        try {
                            return t.call(null, e, 0);
                        } catch (r) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                let c = [];
                let l = false;
                let s = -1;
                function f() {
                    if (l && n) {
                        l = false;
                        if (n.length) {
                            c = n.concat(c);
                        } else {
                            s = -1;
                        }
                        if (c.length) {
                            d();
                        }
                    }
                }
                function d() {
                    if (!l) {
                        const e = a(f);
                        l = true;
                        for(let t = c.length; t;){
                            n = c;
                            for(c = []; ++s < t;){
                                if (n) {
                                    n[s].run();
                                }
                            }
                            s = -1;
                            t = c.length;
                        }
                        n = null;
                        l = false;
                        (function(e) {
                            if (r === clearTimeout) {
                                return clearTimeout(e);
                            }
                            if ((r === i || !r) && clearTimeout) {
                                r = clearTimeout;
                                return clearTimeout(e);
                            }
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                    }
                }
                class p {
                    constructor(e, t){
                        this.fun = e;
                        this.array = t;
                    }
                    run() {
                        this.fun.apply(null, this.array);
                    }
                }
                function y() {}
                o.nextTick = function(e) {
                    const t = Array(arguments.length - 1);
                    if (arguments.length > 1) {
                        for(let r = 1; r < arguments.length; r++){
                            t[r - 1] = arguments[r];
                        }
                    }
                    c.push(new p(e, t));
                    if (!(c.length !== 1 || l)) {
                        a(d);
                    }
                };
                o.title = "browser";
                o.browser = true;
                o.env = {};
                o.argv = [];
                o.version = "";
                o.versions = {};
                o.on = y;
                o.addListener = y;
                o.once = y;
                o.off = y;
                o.removeListener = y;
                o.removeAllListeners = y;
                o.emit = y;
                o.prependListener = y;
                o.prependOnceListener = y;
                o.listeners = (e)=>[];
                o.binding = (e)=>{
                    throw Error("process.binding is not supported");
                };
                o.cwd = ()=>"/";
                o.chdir = (e)=>{
                    throw Error("process.chdir is not supported");
                };
                o.umask = ()=>0;
            }
        };
        var o = {};
        function u(e) {
            const t = o[e];
            if (t !== undefined) {
                return t.exports;
            }
            const r = o[e] = {
                exports: {}
            };
            let i = true;
            try {
                n[e](r, r.exports, u);
                i = false;
            } finally{
                i && delete o[e];
            }
            return r.exports;
        }
        u.ab = "/ROOT/frontend/growth/node_modules/.pnpm/next@16.3.0_@opentelemetry+api@1.9.1_@types+node@20.11.18_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/compiled/process/";
        t.exports = u(156);
    },
    638522,
    (e, t, r)=>{
        "use strict";
        var n;
        var o;
        t.exports = ((n = e.g.process) == null ? undefined : n.env) && typeof ((o = e.g.process) == null ? undefined : o.env) === "object" ? e.g.process : e.r(500986);
    },
    854149,
    (e, t, r)=>{
        "use strict";
        var n = e.r(513679);
        function o(e) {
            let t = "https://react.dev/errors/" + e;
            if (arguments.length > 1) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(let r = 2; r < arguments.length; r++){
                    t += "&args[]=" + encodeURIComponent(arguments[r]);
                }
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function u() {}
        var i = {
            d: {
                f: u,
                r () {
                    throw Error(o(522));
                },
                D: u,
                C: u,
                L: u,
                m: u,
                X: u,
                S: u,
                M: u
            },
            p: 0,
            findDOMNode: null
        };
        var SYMBOL_REACT_PORTAL = Symbol.for("react.portal");
        var SYMBOL_REACT_RECOVERABLE = Symbol.for("react.recoverable");
        var SYMBOL_REACT_OPTIMISTIC_KEY = Symbol.for("react.optimistic_key");
        var n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function f(e, crossOrigin) {
            if (e === "font") {
                return "";
            }
            if (typeof crossOrigin === "string") {
                if (crossOrigin === "use-credentials") {
                    return crossOrigin;
                }
                return "";
            }
        }
        r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i;
        r.browser = ()=>{
            const e = Error(o(603));
            Object.defineProperty(e, "$$typeof", {
                value: SYMBOL_REACT_RECOVERABLE
            });
            return e;
        };
        r.createPortal = function(e, t) {
            const r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) {
                throw Error(o(299));
            }
            return function(children, containerInfo, implementation) {
                const n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return {
                    $$typeof: SYMBOL_REACT_PORTAL,
                    key: n == null ? null : n === SYMBOL_REACT_OPTIMISTIC_KEY ? SYMBOL_REACT_OPTIMISTIC_KEY : "" + n,
                    children,
                    containerInfo,
                    implementation
                };
            }(e, t, null, r);
        };
        r.flushSync = (e)=>{
            const n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
            const r = i.p;
            try {
                n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
                i.p = 2;
                if (e) {
                    return e();
                }
            } finally{
                n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
                i.p = r;
                i.d.f();
            }
        };
        r.preconnect = (e, t)=>{
            if (typeof e === "string") {
                t = t ? typeof (t = t.crossOrigin) === "string" ? t === "use-credentials" ? t : "" : undefined : null;
                i.d.C(e, t);
            }
        };
        r.prefetchDNS = (e)=>{
            if (typeof e === "string") {
                i.d.D(e);
            }
        };
        r.preinit = (e, t)=>{
            if (typeof e === "string" && t && typeof t.as === "string") {
                const r = t.as;
                const n = f(r, t.crossOrigin);
                const integrity = typeof t.integrity === "string" ? t.integrity : undefined;
                const fetchPriority = typeof t.fetchPriority === "string" ? t.fetchPriority : undefined;
                if (r === "style") {
                    i.d.S(e, typeof t.precedence === "string" ? t.precedence : undefined, {
                        crossOrigin: n,
                        integrity,
                        fetchPriority
                    });
                } else if (r === "script") {
                    i.d.X(e, {
                        crossOrigin: n,
                        integrity,
                        fetchPriority,
                        nonce: typeof t.nonce === "string" ? t.nonce : undefined
                    });
                }
            }
        };
        r.preinitModule = (e, t)=>{
            if (typeof e === "string") {
                if (typeof t === "object" && t !== null) {
                    if (t.as == null || t.as === "script") {
                        const r = f(t.as, t.crossOrigin);
                        i.d.M(e, {
                            crossOrigin: r,
                            integrity: typeof t.integrity === "string" ? t.integrity : undefined,
                            nonce: typeof t.nonce === "string" ? t.nonce : undefined,
                            fetchPriority: typeof t.fetchPriority === "string" ? t.fetchPriority : undefined
                        });
                    }
                } else {
                    if (t == null) {
                        i.d.M(e);
                    }
                }
            }
        };
        r.preload = (e, t)=>{
            if (typeof e === "string" && typeof t === "object" && t !== null && typeof t.as === "string") {
                const r = t.as;
                const n = f(r, t.crossOrigin);
                i.d.L(e, r, {
                    crossOrigin: n,
                    integrity: typeof t.integrity === "string" ? t.integrity : undefined,
                    nonce: typeof t.nonce === "string" ? t.nonce : undefined,
                    type: typeof t.type === "string" ? t.type : undefined,
                    fetchPriority: typeof t.fetchPriority === "string" ? t.fetchPriority : undefined,
                    referrerPolicy: typeof t.referrerPolicy === "string" ? t.referrerPolicy : undefined,
                    imageSrcSet: typeof t.imageSrcSet === "string" ? t.imageSrcSet : undefined,
                    imageSizes: typeof t.imageSizes === "string" ? t.imageSizes : undefined,
                    media: typeof t.media === "string" ? t.media : undefined
                });
            }
        };
        r.preloadModule = (e, t)=>{
            if (typeof e === "string") {
                if (t) {
                    const r = f(t.as, t.crossOrigin);
                    i.d.m(e, {
                        as: typeof t.as === "string" && t.as !== "script" ? t.as : undefined,
                        crossOrigin: r,
                        integrity: typeof t.integrity === "string" ? t.integrity : undefined,
                        nonce: typeof t.nonce === "string" ? t.nonce : undefined,
                        fetchPriority: typeof t.fetchPriority === "string" ? t.fetchPriority : undefined
                    });
                } else {
                    i.d.m(e);
                }
            }
        };
        r.requestFormReset = (e)=>{
            i.d.r(e);
        };
        r.unstable_batchedUpdates = (e, t)=>e(t);
        r.useFormState = (e, t, r)=>n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useFormState(e, t, r);
        r.useFormStatus = ()=>n___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useHostTransitionStatus();
        r.version = "19.3.0-canary-cbb046ab-20260731";
    },
    345078,
    (e, t, r)=>{
        "use strict";
        !function e() {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE === "function") {
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                } catch (error) {
                    console.error(error);
                }
            }
        }();
        t.exports = e.r(854149);
    },
    923780,
    (e, t, r)=>{
        "use strict";
        var SYMBOL_REACT_TRANSITIONAL_ELEMENT = Symbol.for("react.transitional.element");
        function o(e, t, r) {
            let o = null;
            if (r !== undefined) {
                o = "" + r;
            }
            if (t.key !== undefined) {
                o = "" + t.key;
            }
            if ("key" in t) {
                r = {};
                for(const u in t){
                    if (u !== "key") {
                        r[u] = t[u];
                    }
                }
            } else {
                r = t;
            }
            return {
                $$typeof: SYMBOL_REACT_TRANSITIONAL_ELEMENT,
                type: e,
                key: o,
                ref: (t = r.ref) !== undefined ? t : null,
                props: r
            };
        }
        r.Fragment = Symbol.for("react.fragment");
        r.jsx = o;
        r.jsxs = o;
    },
    281889,
    (e, t, r)=>{
        "use strict";
        t.exports = e.r(923780);
    },
    142920,
    (e, t, r)=>{
        "use strict";
        var n = e.i(638522);
        var SYMBOL_REACT_TRANSITIONAL_ELEMENT = Symbol.for("react.transitional.element");
        var SYMBOL_REACT_PORTAL = Symbol.for("react.portal");
        var SYMBOL_REACT_FRAGMENT = Symbol.for("react.fragment");
        var SYMBOL_REACT_STRICT_MODE = Symbol.for("react.strict_mode");
        var SYMBOL_REACT_PROFILER = Symbol.for("react.profiler");
        var SYMBOL_REACT_CONSUMER = Symbol.for("react.consumer");
        var SYMBOL_REACT_CONTEXT = Symbol.for("react.context");
        var SYMBOL_REACT_FORWARD_REF = Symbol.for("react.forward_ref");
        var SYMBOL_REACT_SUSPENSE = Symbol.for("react.suspense");
        var SYMBOL_REACT_MEMO = Symbol.for("react.memo");
        var SYMBOL_REACT_LAZY = Symbol.for("react.lazy");
        var SYMBOL_REACT_ACTIVITY = Symbol.for("react.activity");
        var SYMBOL_REACT_VIEW_TRANSITION = Symbol.for("react.view_transition");
        var Symbol_iterator = Symbol.iterator;
        var v = {
            isMounted () {
                return false;
            },
            enqueueForceUpdate () {},
            enqueueReplaceState () {},
            enqueueSetState () {}
        };
        var Object_assign = Object.assign;
        var h = {};
        class O {
            constructor(e, t, r){
                this.props = e;
                this.context = t;
                this.refs = h;
                this.updater = r || v;
            }
            setState(e, t) {
                if (typeof e !== "object" && typeof e !== "function" && e != null) {
                    throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                }
                this.updater.enqueueSetState(this, e, t, "setState");
            }
            forceUpdate(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }
        }
        function E() {}
        function R(e, t, r) {
            this.props = e;
            this.context = t;
            this.refs = h;
            this.updater = r || v;
        }
        O.prototype.isReactComponent = {};
        E.prototype = O.prototype;
        var P = R.prototype = new E;
        P.constructor = R;
        Object_assign(P, O.prototype);
        P.isPureReactComponent = true;
        var Array_isArray = Array.isArray;
        function j() {}
        var T = {
            H: null,
            A: null,
            T: null,
            S: null
        };
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function x(e, key, r) {
            const r_ref = r.ref;
            return {
                $$typeof: SYMBOL_REACT_TRANSITIONAL_ELEMENT,
                type: e,
                key,
                ref: r_ref !== undefined ? r_ref : null,
                props: r
            };
        }
        function M(e) {
            return typeof e === "object" && e !== null && e.$$typeof === SYMBOL_REACT_TRANSITIONAL_ELEMENT;
        }
        var w = /\/+/g;
        function A(e, t) {
            let r;
            let n;
            if (typeof e === "object" && e !== null && e.key != null) {
                r = "" + e.key;
                n = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + r.replace(/[=:]/g, (e)=>n[e]);
            }
            return t.toString(36);
        }
        function map(e, t, r) {
            if (e == null) {
                return e;
            }
            const n = [];
            let i = 0;
            !function e(t, r, n, i, a) {
                let c;
                let l;
                let s;
                let f = typeof t;
                if (f === "undefined" || f === "boolean") {
                    t = null;
                }
                let d = false;
                if (t === null) {
                    d = true;
                } else {
                    switch(f){
                        case "bigint":
                        case "string":
                        case "number":
                            d = true;
                            break;
                        case "object":
                            switch(t.$$typeof){
                                case SYMBOL_REACT_TRANSITIONAL_ELEMENT:
                                case SYMBOL_REACT_PORTAL:
                                    d = true;
                                    break;
                                case SYMBOL_REACT_LAZY:
                                    return e((d = t._init)(t._payload), r, n, i, a);
                            }
                    }
                }
                if (d) {
                    a = a(t);
                    d = i === "" ? "." + A(t, 0) : i;
                    if (Array_isArray(a)) {
                        n = "";
                        if (d != null) {
                            n = d.replace(w, "$&/") + "/";
                        }
                        e(a, r, n, "", (e)=>e);
                    } else if (a != null) {
                        if (M(a)) {
                            c = a;
                            l = n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(w, "$&/") + "/") + d;
                            a = x(c.type, l, c.props);
                        }
                        r.push(a);
                    }
                    return 1;
                }
                d = 0;
                const p = i === "" ? "." : i + ":";
                if (Array_isArray(t)) {
                    for(var _ = 0; _ < t.length; _++){
                        f = p + A(i = t[_], _);
                        d += e(i, r, n, f, a);
                    }
                } else if (typeof (_ = (s = t) === null || typeof s !== "object" ? null : typeof (s = Symbol_iterator && s[Symbol_iterator] || s["@@iterator"]) === "function" ? s : null) === "function") {
                    t = _.call(t);
                    for(_ = 0; !(i = t.next()).done;){
                        f = p + A(i = i.value, _++);
                        d += e(i, r, n, f, a);
                    }
                } else if (f === "object") {
                    if (typeof t.then === "function") {
                        return e(((e)=>{
                            switch(e.status){
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    if (typeof e.status === "string") {
                                        e.then(j, j);
                                    } else {
                                        e.status = "pending";
                                        e.then((t)=>{
                                            if (e.status === "pending") {
                                                e.status = "fulfilled";
                                                e.value = t;
                                            }
                                        }, (t)=>{
                                            if (e.status === "pending") {
                                                e.status = "rejected";
                                                e.reason = t;
                                            }
                                        });
                                    }
                                    switch(e.status){
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason;
                                    }
                            }
                            throw e;
                        })(t), r, n, i, a);
                    }
                    throw Error("Objects are not valid as a React child (found: " + ((r = String(t)) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
                }
                return d;
            }(e, n, "", "", (e)=>t.call(r, e, i++));
            return n;
        }
        function _init(e) {
            if (-1 === e._status) {
                const t = e._result();
                t.then((r)=>{
                    if (e._status === 0 || -1 === e._status) {
                        e._status = 1;
                        e._result = r;
                        if (t.status === undefined) {
                            t.status = "fulfilled";
                            t.value = r;
                        }
                    }
                }, (r)=>{
                    if (e._status === 0 || -1 === e._status) {
                        e._status = 2;
                        e._result = r;
                        if (t.status === undefined) {
                            t.status = "rejected";
                            t.reason = r;
                        }
                    }
                });
                if (-1 === e._status) {
                    e._status = 0;
                    e._result = t;
                }
            }
            if (e._status === 1) {
                return e._result.default;
            }
            throw e._result;
        }
        var D = typeof reportError === "function" ? reportError : (error)=>{
            if (typeof window === "object" && typeof window.ErrorEvent === "function") {
                const t = new window.ErrorEvent("error", {
                    bubbles: true,
                    cancelable: true,
                    message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
                    error
                });
                if (!window.dispatchEvent(t)) {
                    return;
                }
            } else if (typeof n.default === "object" && typeof n.default.emit === "function") {
                return void n.default.emit("uncaughtException", error);
            }
            console.error(error);
        };
        function H(e) {
            const t = T.T;
            const r = {};
            r.types = t !== null ? t.types : null;
            T.T = r;
            try {
                const n = e();
                const o = T.S;
                if (o !== null) {
                    o(r, n);
                }
                if (typeof n === "object" && n !== null && typeof n.then === "function") {
                    n.then(j, D);
                }
            } catch (error) {
                D(error);
            } finally{
                if (t !== null && r.types !== null) {
                    t.types = r.types;
                }
                T.T = t;
            }
        }
        function k(e) {
            const t = T.T;
            if (t !== null) {
                const r = t.types;
                if (r === null) {
                    t.types = [
                        e
                    ];
                } else if (-1 === r.indexOf(e)) {
                    r.push(e);
                }
            } else {
                H(k.bind(null, e));
            }
        }
        r.Activity = SYMBOL_REACT_ACTIVITY;
        r.Children = {
            map,
            forEach (e, t, r) {
                map(e, function() {
                    t.apply(this, arguments);
                }, r);
            },
            count (e) {
                let t = 0;
                map(e, ()=>{
                    t++;
                });
                return t;
            },
            toArray (e) {
                return map(e, (e)=>e) || [];
            },
            only (e) {
                if (!M(e)) {
                    throw Error("React.Children.only expected to receive a single React element child.");
                }
                return e;
            }
        };
        r.Component = O;
        r.Fragment = SYMBOL_REACT_FRAGMENT;
        r.Profiler = SYMBOL_REACT_PROFILER;
        r.PureComponent = R;
        r.StrictMode = SYMBOL_REACT_STRICT_MODE;
        r.Suspense = SYMBOL_REACT_SUSPENSE;
        r.ViewTransition = SYMBOL_REACT_VIEW_TRANSITION;
        r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T;
        r.__COMPILER_RUNTIME = {
            __proto__: null,
            c (e) {
                return T.H.useMemoCache(e);
            }
        };
        r.addTransitionType = k;
        r.cache = (e)=>function() {
                return e.apply(null, arguments);
            };
        r.cacheSignal = ()=>null;
        r.cloneElement = function(e, t, r) {
            if (e == null) {
                throw Error("The argument must be a React element, but you passed " + e + ".");
            }
            const n = Object_assign({}, e.props);
            let e_key = e.key;
            if (t != null) {
                if (t.key !== undefined) {
                    e_key = "" + t.key;
                }
                for(u in t){
                    if (hasOwnProperty.call(t, u) && u !== "key" && u !== "__self" && u !== "__source" && (u !== "ref" || t.ref !== undefined)) {
                        n[u] = t[u];
                    }
                }
            }
            var u = arguments.length - 2;
            if (u === 1) {
                n.children = r;
            } else if (u > 1) {
                const i = Array(u);
                for(let a = 0; a < u; a++){
                    i[a] = arguments[a + 2];
                }
                n.children = i;
            }
            return x(e.type, e_key, n);
        };
        r.createContext = (e)=>{
            e = {
                $$typeof: SYMBOL_REACT_CONTEXT,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            };
            e.Provider = e;
            e.Consumer = {
                $$typeof: SYMBOL_REACT_CONSUMER,
                _context: e
            };
            return e;
        };
        r.createElement = function(e, t, r) {
            let n;
            const o = {};
            let u = null;
            if (t != null) {
                if (t.key !== undefined) {
                    u = "" + t.key;
                }
                for(n in t){
                    if (hasOwnProperty.call(t, n) && n !== "key" && n !== "__self" && n !== "__source") {
                        o[n] = t[n];
                    }
                }
            }
            let i = arguments.length - 2;
            if (i === 1) {
                o.children = r;
            } else if (i > 1) {
                const a = Array(i);
                for(let c = 0; c < i; c++){
                    a[c] = arguments[c + 2];
                }
                o.children = a;
            }
            if (e && e.defaultProps) {
                for(n in i = e.defaultProps){
                    if (o[n] === undefined) {
                        o[n] = i[n];
                    }
                }
            }
            return x(e, u, o);
        };
        r.createRef = ()=>({
                current: null
            });
        r.forwardRef = (render)=>({
                $$typeof: SYMBOL_REACT_FORWARD_REF,
                render
            });
        r.isValidElement = M;
        r.lazy = (_result)=>({
                $$typeof: SYMBOL_REACT_LAZY,
                _payload: {
                    _status: -1,
                    _result
                },
                _init
            });
        r.memo = (e, t)=>({
                $$typeof: SYMBOL_REACT_MEMO,
                type: e,
                compare: t === undefined ? null : t
            });
        r.startTransition = H;
        r.unstable_useCacheRefresh = ()=>T.H.useCacheRefresh();
        r.use = (e)=>T.H.use(e);
        r.useActionState = (e, t, r)=>T.H.useActionState(e, t, r);
        r.useCallback = (e, t)=>T.H.useCallback(e, t);
        r.useContext = (e)=>T.H.useContext(e);
        r.useDebugValue = ()=>{};
        r.useDeferredValue = (e, t)=>T.H.useDeferredValue(e, t);
        r.useEffect = (e, t)=>T.H.useEffect(e, t);
        r.useEffectEvent = (e)=>T.H.useEffectEvent(e);
        r.useId = ()=>T.H.useId();
        r.useImperativeHandle = (e, t, r)=>T.H.useImperativeHandle(e, t, r);
        r.useInsertionEffect = (e, t)=>T.H.useInsertionEffect(e, t);
        r.useLayoutEffect = (e, t)=>T.H.useLayoutEffect(e, t);
        r.useMemo = (e, t)=>T.H.useMemo(e, t);
        r.useOptimistic = (e, t)=>T.H.useOptimistic(e, t);
        r.useReducer = (e, t, r)=>T.H.useReducer(e, t, r);
        r.useRef = (e)=>T.H.useRef(e);
        r.useState = (e)=>T.H.useState(e);
        r.useSyncExternalStore = (e, t, r)=>T.H.useSyncExternalStore(e, t, r);
        r.useTransition = ()=>T.H.useTransition();
        r.version = "19.3.0-canary-cbb046ab-20260731";
    },
    513679,
    (e, t, r)=>{
        "use strict";
        t.exports = e.r(142920);
    },
    516968,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            AppRouterContext () {
                return IContext;
            },
            GlobalLayoutRouterContext () {
                return CContext;
            },
            LayoutRouterContext () {
                return AContext;
            },
            MissingSlotContext () {
                return SContext;
            },
            TemplateContext () {
                return LContext;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(330053)._(e.r(513679));
        let IContext = u.default.createContext(null);
        let AContext = u.default.createContext(null);
        let CContext = u.default.createContext(null);
        let LContext = u.default.createContext(null);
        let SContext = u.default.createContext(new Set);
    },
    823971,
    (e, t, r)=>{
        "use strict";
        let n;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var o = {
            getAssetToken () {
                return c;
            },
            getAssetTokenQuery () {
                return l;
            },
            getDeploymentId () {
                return i;
            },
            getDeploymentIdQuery () {
                return a;
            }
        };
        for(var u in o){
            Object.defineProperty(r, u, {
                enumerable: true,
                get: o[u]
            });
        }
        function i() {
            return n;
        }
        function a(e = false) {
            let t = n;
            if (t) {
                return `${e ? "&" : "?"}dpl=${t}`;
            }
            return "";
        }
        function c() {}
        function l(e = false) {
            c();
            return "";
        }
        if (typeof window !== "undefined") {
            n = document.documentElement.dataset.dplId;
            delete document.documentElement.dataset.dplId;
        } else {
            n = globalThis.NEXT_DEPLOYMENT_ID || undefined;
        }
    },
    509156,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            NavigationPromisesContext () {
                return SContext;
            },
            PathParamsContext () {
                return LContext;
            },
            PathnameContext () {
                return CContext;
            },
            ReadonlyURLSearchParams () {
                return i.ReadonlyURLSearchParams;
            },
            SearchParamsContext () {
                return AContext;
            },
            createDevToolsInstrumentedPromise () {
                return f;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(513679);
        let i = e.r(165441);
        let AContext = u.createContext(null);
        let CContext = u.createContext(null);
        let LContext = u.createContext(null);
        let SContext = u.createContext(null);
        function f(e, t) {
            let r = Promise.resolve(t);
            r.status = "fulfilled";
            r.value = t;
            r.displayName = `${e} (SSR)`;
            return r;
        }
    },
    170307,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            BailoutToCSRError () {
                return i;
            },
            isBailoutToCSRError () {
                return a;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
        class i extends Error {
            constructor(e){
                super(`Bail out to client-side rendering: ${e}`);
                this.reason = e;
                this.digest = u;
            }
        }
        function a(e) {
            return typeof e === "object" && e !== null && "digest" in e && e.digest === u;
        }
    },
    36741,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            DEFAULT_SEGMENT_KEY () {
                return f;
            },
            NOT_FOUND_SEGMENT_KEY () {
                return d;
            },
            PAGE_SEGMENT_KEY () {
                return s;
            },
            addSearchParamsIfPageSegment () {
                return c;
            },
            computeSelectedLayoutSegment () {
                return l;
            },
            getSegmentValue () {
                return u;
            },
            getSelectedLayoutSegmentPath () {
                return function e(t, r, n = true, o = []) {
                    let i;
                    if (n) {
                        i = t[1][r];
                    } else {
                        let e = t[1];
                        i = e.children ?? Object.values(e)[0];
                    }
                    if (!i) {
                        return o;
                    }
                    let a = u(i[0]);
                    if (!a || a.startsWith(s)) {
                        return o;
                    }
                    o.push(a);
                    return e(i, r, false, o);
                };
            },
            isGroupSegment () {
                return i;
            },
            isParallelRouteSegment () {
                return a;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        function u(e) {
            if (Array.isArray(e)) {
                return e[1];
            }
            return e;
        }
        function i(e) {
            return e[0] === "(" && e.endsWith(")");
        }
        function a(e) {
            return e.startsWith("@") && e !== "@children";
        }
        function c(e, t) {
            if (e.includes(s)) {
                let e = JSON.stringify(t);
                if (e !== "{}") {
                    return s + "?" + e;
                }
                return s;
            }
            return e;
        }
        function l(e, t) {
            if (!e || e.length === 0) {
                return null;
            }
            let r = t === "children" ? e[0] : e[e.length - 1];
            if (r === f) {
                return null;
            }
            return r;
        }
        let s = "__PAGE__";
        let f = "__DEFAULT__";
        let d = "/_not-found";
    }
]);
