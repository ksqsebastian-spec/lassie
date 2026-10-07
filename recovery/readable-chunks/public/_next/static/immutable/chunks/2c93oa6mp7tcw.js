;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "8ec890d3-d4fe-0538-7bb9-452a579af0c1";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    515253,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            ErrorBoundary () {
                return y;
            },
            ErrorBoundaryHandler () {
                return _;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(171266);
        let i = e.r(281889);
        let a = u._(e.r(513679));
        let l = e.r(980374);
        let s = e.r(213475);
        e.r(134283);
        let c = e.r(382702);
        let d = e.r(361130);
        let f = e.r(516968);
        let p = typeof window !== "undefined" && d.isBot(window.navigator.userAgent);
        class _ extends a.default.Component {
            static{
                this.contextType = f.AppRouterContext;
            }
            constructor(e){
                super(e);
                this.reset = ()=>{
                    this.setState({
                        error: null
                    });
                };
                this.retry = ()=>{
                    a.startTransition(()=>{
                        this.context?.refresh();
                        this.reset();
                    });
                };
                this.state = {
                    error: null,
                    previousPathname: this.props.pathname
                };
            }
            static getDerivedStateFromError(thrownValue) {
                if (s.isNextRouterError(thrownValue)) {
                    throw thrownValue;
                }
                return {
                    error: {
                        thrownValue
                    }
                };
            }
            static getDerivedStateFromProps(e, t) {
                let { error } = t;
                if (e.pathname !== t.previousPathname && t.error) {
                    return {
                        error: null,
                        previousPathname: e.pathname
                    };
                }
                return {
                    error: t.error,
                    previousPathname: e.pathname
                };
            }
            render() {
                if (this.state.error && !p) {
                    let error = this.state.error.thrownValue;
                    c.handleISRError({
                        error
                    });
                    return i.jsxs(i.Fragment, {
                        children: [
                            this.props.errorStyles,
                            this.props.errorScripts,
                            i.jsx(this.props.errorComponent, {
                                error,
                                reset: this.reset,
                                retry: this.retry
                            })
                        ]
                    });
                }
                return this.props.children;
            }
        }
        function y({ errorComponent, errorStyles, errorScripts, children }) {
            let pathname = l.useUntrackedPathname();
            if (errorComponent) {
                return i.jsx(_, {
                    pathname,
                    errorComponent,
                    errorStyles,
                    errorScripts,
                    children
                });
            }
            return i.jsx(i.Fragment, {
                children
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
    382702,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "handleISRError", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let n = e.r(629265);
        function o({ error }) {
            if (n.workAsyncStorage) {
                let t = n.workAsyncStorage.getStore();
                if (t?.isStaticGeneration) {
                    if (error) {
                        console.error(error);
                    }
                    throw error;
                }
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
    134283,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            handleHardNavError () {
                return i;
            },
            useNavFailureHandler () {
                return a;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        e.r(513679);
        let u = e.r(988817);
        function i(e) {
            return typeof window !== "undefined" && !!window.next.__pendingUrl && u.createHrefFromUrl(new URL(window.location.href)) !== u.createHrefFromUrl(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), true);
        }
        function a() {}
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    980374,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "useUntrackedPathname", {
            enumerable: true,
            get () {
                return useI;
            }
        });
        let n = e.r(513679);
        let o = e.r(509156);
        let u = e.r(629265);
        function useI() {
            if (!(()=>{
                if (typeof window === "undefined") {
                    let e = u.workUnitAsyncStorage.getStore();
                    if (!e) {
                        return false;
                    }
                    switch(e.type){
                        case "prerender":
                        case "prerender-client":
                        case "prerender-ppr":
                        case "validation-client":
                            let t = e.fallbackRouteParams;
                            return !!t && t.size > 0;
                    }
                }
                return false;
            })()) {
                return n.useContext(o.PathnameContext);
            }
            return null;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    697299,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            RedirectBoundary () {
                return p;
            },
            RedirectErrorBoundary () {
                return f;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(171266);
        let i = e.r(281889);
        let a = u._(e.r(513679));
        let l = e.r(16579);
        let s = e.r(611069);
        let c = e.r(517460);
        function useD({ redirect, reset, redirectType }) {
            let n = l.useRouter();
            a.useEffect(()=>{
                a.default.startTransition(()=>{
                    if (redirectType === "push") {
                        n.push(redirect, {});
                    } else {
                        n.replace(redirect, {});
                    }
                    reset();
                });
            }, [
                redirect,
                redirectType,
                reset,
                n
            ]);
            return null;
        }
        class f extends a.default.Component {
            constructor(e){
                super(e);
                this.state = {
                    redirect: null,
                    redirectType: null
                };
            }
            static getDerivedStateFromError(e) {
                if (c.isRedirectError(e)) {
                    let redirect = s.getURLFromRedirectError(e);
                    let redirectType = s.getRedirectTypeFromError(e);
                    if ("handled" in e) {
                        return {
                            redirect: null,
                            redirectType: null
                        };
                    }
                    return {
                        redirect,
                        redirectType
                    };
                }
                throw e;
            }
            render() {
                let { redirect, redirectType } = this.state;
                if (redirect !== null && redirectType !== null) {
                    return i.jsx(useD, {
                        redirect,
                        redirectType,
                        reset: ()=>this.setState({
                                redirect: null
                            })
                    });
                }
                return this.props.children;
            }
        }
        function p({ children }) {
            let router = l.useRouter();
            return i.jsx(f, {
                router,
                children
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
    216843,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "createRouterCacheKey", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let n = e.r(36741);
        function o(e, t = false) {
            if (Array.isArray(e)) {
                return `${e[0]}|${e[1]}|${e[2]}`;
            }
            if (t && e.startsWith(n.PAGE_SEGMENT_KEY)) {
                return n.PAGE_SEGMENT_KEY;
            }
            return e;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    992955,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "unresolvedThenable", {
            enumerable: true,
            get () {
                return n;
            }
        });
        let n = {
            then: ()=>{}
        };
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    19998,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            cancelIdleCallback () {
                return i;
            },
            requestIdleCallback () {
                return u;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || ((e)=>{
            let t = Date.now();
            return self.setTimeout(()=>{
                e({
                    didTimeout: false,
                    timeRemaining () {
                        return Math.max(0, 50 - (Date.now() - t));
                    }
                });
            }, 1);
        });
        let i = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || ((e)=>clearTimeout(e));
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    946464,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "setAttributesFromProps", {
            enumerable: true,
            get () {
                return i;
            }
        });
        let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        let o = [
            "onLoad",
            "onReady",
            "dangerouslySetInnerHTML",
            "children",
            "onError",
            "strategy",
            "stylesheets"
        ];
        function u(e) {
            return [
                "async",
                "defer",
                "noModule"
            ].includes(e);
        }
        function i(e, t) {
            for (let [r, i] of Object.entries(t)){
                if (!t.hasOwnProperty(r) || o.includes(r) || i === undefined) {
                    continue;
                }
                let a = n[r] || r.toLowerCase();
                if (e.tagName === "SCRIPT" && u(a)) {
                    e[a] = !!i;
                } else {
                    e.setAttribute(a, String(i));
                }
                if (i === false || e.tagName === "SCRIPT" && u(a) && (!i || i === "false")) {
                    e.setAttribute(a, "");
                    e.removeAttribute(a);
                }
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
    716869,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            METADATA_BOUNDARY_NAME () {
                return u;
            },
            OUTLET_BOUNDARY_NAME () {
                return a;
            },
            ROOT_LAYOUT_BOUNDARY_NAME () {
                return l;
            },
            VIEWPORT_BOUNDARY_NAME () {
                return i;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = "__next_metadata_boundary__";
        let i = "__next_viewport_boundary__";
        let a = "__next_outlet_boundary__";
        let l = "__next_root_layout_boundary__";
    },
    224774,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            MetadataBoundary () {
                return a;
            },
            OutletBoundary () {
                return s;
            },
            RootLayoutBoundary () {
                return c;
            },
            ViewportBoundary () {
                return l;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(716869);
        let i = {
            [u.METADATA_BOUNDARY_NAME]: function({ children }) {
                return children;
            },
            [u.VIEWPORT_BOUNDARY_NAME]: function({ children }) {
                return children;
            },
            [u.OUTLET_BOUNDARY_NAME]: function({ children }) {
                return children;
            },
            [u.ROOT_LAYOUT_BOUNDARY_NAME]: function({ children }) {
                return children;
            }
        };
        let a = i[u.METADATA_BOUNDARY_NAME.slice(0)];
        let l = i[u.VIEWPORT_BOUNDARY_NAME.slice(0)];
        let s = i[u.OUTLET_BOUNDARY_NAME.slice(0)];
        let c = i[u.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
    },
    758024,
    (e, t, r)=>{
        "use strict";
        function n(e) {
            return e.split("/").map((e)=>encodeURIComponent(e)).join("/");
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "encodeURIPath", {
            enumerable: true,
            get () {
                return n;
            }
        });
    },
    543091,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "HeadManagerContext", {
            enumerable: true,
            get () {
                return NContext;
            }
        });
        let NContext = e.r(330053)._(e.r(513679)).default.createContext({});
    },
    860735,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            ESCAPE_REGEX () {
                return i;
            },
            htmlEscapeAttributeString () {
                return c;
            },
            htmlEscapeJsonString () {
                return s;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        };
        let i = /[&><\u2028\u2029]/g;
        let a = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;"
        };
        let l = /[&"'<>]/g;
        function s(e) {
            return e.replace(i, (e)=>u[e]);
        }
        function c(e) {
            return e.replace(l, (e)=>a[e]);
        }
    },
    278736,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            default () {
                return O;
            },
            handleClientScriptLoad () {
                return b;
            },
            initScriptLoader () {
                return g;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(330053);
        let i = e.r(171266);
        let a = e.r(281889);
        let l = u._(e.r(345078));
        let s = i._(e.r(513679));
        let c = e.r(543091);
        let d = e.r(946464);
        let f = e.r(19998);
        let p = e.r(860735);
        let _ = new Map;
        let y = new Set;
        let h = (e)=>{
            let { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = "", strategy = "afterInteractive", onError, stylesheets } = e;
            let f = id || src;
            if (f && y.has(f)) {
                return;
            }
            if (_.has(src)) {
                y.add(f);
                _.get(src).then(onLoad, onError);
                return;
            }
            let p = ()=>{
                if (onReady) {
                    onReady();
                }
                y.add(f);
            };
            let h = document.createElement("script");
            let b = new Promise((resolve, reject)=>{
                h.addEventListener("load", function(t) {
                    resolve();
                    if (onLoad) {
                        onLoad.call(this, t);
                    }
                    p();
                });
                h.addEventListener("error", (e)=>{
                    reject(e);
                });
            }).catch((e)=>{
                if (onError) {
                    onError(e);
                }
            });
            if (dangerouslySetInnerHTML) {
                h.innerHTML = dangerouslySetInnerHTML.__html || "";
                p();
            } else if (children) {
                h.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
                p();
            } else if (src) {
                h.src = src;
                _.set(src, b);
            }
            d.setAttributesFromProps(h, e);
            if (strategy === "worker") {
                h.setAttribute("type", "text/partytown");
            }
            h.setAttribute("data-nscript", strategy);
            if (stylesheets) {
                ((e)=>{
                    if (l.default.preinit) {
                        return e.forEach((e)=>{
                            l.default.preinit(e, {
                                as: "style"
                            });
                        });
                    }
                    if (typeof window !== "undefined") {
                        let t = document.head;
                        e.forEach((e)=>{
                            let r = document.createElement("link");
                            r.type = "text/css";
                            r.rel = "stylesheet";
                            r.href = e;
                            t.appendChild(r);
                        });
                    }
                })(stylesheets);
            }
            document.body.appendChild(h);
        };
        function b(e) {
            let { strategy = "afterInteractive" } = e;
            if (strategy === "lazyOnload") {
                window.addEventListener("load", ()=>{
                    f.requestIdleCallback(()=>h(e));
                });
            } else {
                h(e);
            }
        }
        function g(e) {
            e.forEach(b);
            [
                ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
                ...document.querySelectorAll('[data-nscript="beforePageRender"]')
            ].forEach((e)=>{
                let t = e.id || e.getAttribute("src");
                y.add(t);
            });
        }
        function useM(e) {
            let { id, src = "", onLoad = ()=>{}, onReady = null, strategy = "afterInteractive", onError, stylesheets, ...rest } = e;
            let { updateScripts, scripts, getIsSsr, appDir, nonce } = s.useContext(c.HeadManagerContext);
            nonce = rest.nonce || nonce;
            let PRef = s.useRef(false);
            s.useEffect(()=>{
                let e = id || src;
                if (!PRef.current) {
                    if (onReady && e && y.has(e)) {
                        onReady();
                    }
                    PRef.current = true;
                }
            }, [
                onReady,
                id,
                src
            ]);
            let jRef = s.useRef(false);
            s.useEffect(()=>{
                if (!jRef.current) {
                    if (strategy === "afterInteractive") {
                        h(e);
                    } else {
                        strategy === "lazyOnload" && (document.readyState === "complete" ? f.requestIdleCallback(()=>h(e)) : window.addEventListener("load", ()=>{
                            f.requestIdleCallback(()=>h(e));
                        }));
                    }
                    jRef.current = true;
                }
            }, [
                e,
                strategy
            ]);
            (strategy === "beforeInteractive" || strategy === "worker") && (updateScripts ? (scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...rest,
                    nonce
                }
            ]), updateScripts(scripts)) : getIsSsr && getIsSsr() ? y.add(id || src) : getIsSsr && !getIsSsr() && h({
                ...e,
                nonce
            }));
            if (appDir) {
                if (stylesheets) {
                    stylesheets.forEach((e)=>{
                        l.default.preinit(e, {
                            as: "style"
                        });
                    });
                }
                if (strategy === "beforeInteractive") {
                    if (!src) {
                        if (rest.dangerouslySetInnerHTML) {
                            rest.children = rest.dangerouslySetInnerHTML.__html;
                            delete rest.dangerouslySetInnerHTML;
                        }
                        return a.jsx("script", {
                            nonce,
                            dangerouslySetInnerHTML: {
                                __html: `(self.__next_s=self.__next_s||[]).push(${p.htmlEscapeJsonString(JSON.stringify([
                                    0,
                                    {
                                        ...rest,
                                        id
                                    }
                                ]))})`
                            }
                        });
                    } else {
                        l.default.preload(src, rest.integrity ? {
                            as: "script",
                            integrity: rest.integrity,
                            nonce,
                            crossOrigin: rest.crossOrigin
                        } : {
                            as: "script",
                            nonce,
                            crossOrigin: rest.crossOrigin
                        });
                        return a.jsx("script", {
                            nonce,
                            dangerouslySetInnerHTML: {
                                __html: `(self.__next_s=self.__next_s||[]).push(${p.htmlEscapeJsonString(JSON.stringify([
                                    src,
                                    {
                                        ...rest,
                                        id
                                    }
                                ]))})`
                            }
                        });
                    }
                }
                if (strategy === "afterInteractive" && src) {
                    l.default.preload(src, rest.integrity ? {
                        as: "script",
                        integrity: rest.integrity,
                        nonce,
                        crossOrigin: rest.crossOrigin
                    } : {
                        as: "script",
                        nonce,
                        crossOrigin: rest.crossOrigin
                    });
                }
            }
            return null;
        }
        Object.defineProperty(useM, "__nextScript", {
            value: true
        });
        let O = useM;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    239351,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "RouterContext", {
            enumerable: true,
            get () {
                return NContext;
            }
        });
        let NContext = e.r(330053)._(e.r(513679)).default.createContext(null);
    },
    818073,
    (e, t, r)=>{
        "use strict";
        function n(e, t = {}) {
            if (t.onlyHashChange) {
                return void e();
            }
            let document_documentElement = document.documentElement;
            if (document_documentElement.dataset.scrollBehavior !== "smooth") {
                return void e();
            }
            let scrollBehavior = document_documentElement.style.scrollBehavior;
            document_documentElement.style.scrollBehavior = "auto";
            if (!t.dontForceLayout) {
                document_documentElement.getClientRects();
            }
            e();
            document_documentElement.style.scrollBehavior = scrollBehavior;
        }
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
            enumerable: true,
            get () {
                return n;
            }
        });
    },
    737409,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            formatUrl () {
                return a;
            },
            formatWithValidation () {
                return s;
            },
            urlObjectKeys () {
                return l;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = e.r(171266)._(e.r(398686));
        let i = /https?|ftp|gopher|file/;
        function a(e) {
            let { auth, hostname } = e;
            let n = e.protocol || "";
            let o = e.pathname || "";
            let a = e.hash || "";
            let l = e.query || "";
            let s = false;
            auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
            if (e.host) {
                s = auth + e.host;
            } else if (hostname) {
                s = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
                if (e.port) {
                    s += ":" + e.port;
                }
            }
            if (l && typeof l === "object") {
                l = String(u.urlQueryToSearchParams(l));
            }
            let c = e.search || l && `?${l}` || "";
            if (n && !n.endsWith(":")) {
                n += ":";
            }
            if (e.slashes || (!n || i.test(n)) && s !== false) {
                s = "//" + (s || "");
                if (o && o[0] !== "/") {
                    o = "/" + o;
                }
            } else if (!s) {
                s = "";
            }
            if (a && a[0] !== "#") {
                a = "#" + a;
            }
            if (c && c[0] !== "?") {
                c = "?" + c;
            }
            o = o.replace(/[?#]/g, encodeURIComponent);
            c = c.replace("#", "%23");
            return `${n}${s}${o}${c}${a}`;
        }
        let l = [
            "auth",
            "hash",
            "host",
            "hostname",
            "href",
            "path",
            "pathname",
            "port",
            "protocol",
            "query",
            "search",
            "slashes"
        ];
        function s(e) {
            return a(e);
        }
    },
    743817,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "isLocalURL", {
            enumerable: true,
            get () {
                return u;
            }
        });
        let n = e.r(478573);
        let o = e.r(147640);
        function u(e) {
            if (!n.isAbsoluteUrl(e)) {
                return true;
            }
            try {
                let t = n.getLocationOrigin();
                let r = new URL(e, t);
                return r.origin === t && o.hasBasePath(r.pathname);
            } catch (e) {
                return false;
            }
        }
    },
    398686,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            assign () {
                return l;
            },
            searchParamsToUrlQuery () {
                return u;
            },
            urlQueryToSearchParams () {
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
            let t = {};
            for (let [r, n] of e.entries()){
                let e = t[r];
                if (e === undefined) {
                    t[r] = n;
                } else if (Array.isArray(e)) {
                    e.push(n);
                } else {
                    t[r] = [
                        e,
                        n
                    ];
                }
            }
            return t;
        }
        function i(e) {
            if (typeof e === "string") {
                return e;
            }
            if ((typeof e !== "number" || isNaN(e)) && typeof e !== "boolean") {
                return "";
            }
            return String(e);
        }
        function a(e) {
            let t = new URLSearchParams;
            for (let [r, n] of Object.entries(e)){
                if (Array.isArray(n)) {
                    for (let e of n){
                        t.append(r, i(e));
                    }
                } else {
                    t.set(r, i(n));
                }
            }
            return t;
        }
        function l(e, ...t) {
            for (let r of t){
                for (let t of r.keys()){
                    e.delete(t);
                }
                for (let [t, n] of r.entries()){
                    e.append(t, n);
                }
            }
            return e;
        }
    },
    478573,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            DecodeError () {
                return b;
            },
            MiddlewareNotFoundError () {
                return v;
            },
            MissingStaticPage () {
                return O;
            },
            NormalizeError () {
                return g;
            },
            PageNotFoundError () {
                return m;
            },
            SP () {
                return y;
            },
            ST () {
                return h;
            },
            WEB_VITALS () {
                return u;
            },
            execOnce () {
                return i;
            },
            getDisplayName () {
                return d;
            },
            getLocationOrigin () {
                return s;
            },
            getURL () {
                return c;
            },
            isAbsoluteUrl () {
                return l;
            },
            isResSent () {
                return f;
            },
            loadGetInitialProps () {
                return _;
            },
            normalizeRepeatedSlashes () {
                return p;
            },
            stringifyError () {
                return P;
            }
        };
        for(var o in n){
            Object.defineProperty(r, o, {
                enumerable: true,
                get: n[o]
            });
        }
        let u = [
            "CLS",
            "FCP",
            "FID",
            "INP",
            "LCP",
            "TTFB"
        ];
        function i(e) {
            let t;
            let r = false;
            return (...n)=>{
                if (!r) {
                    r = true;
                    t = e(...n);
                }
                return t;
            };
        }
        let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
        let l = (e)=>{
            let t = e.charCodeAt(0);
            return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && a.test(e);
        };
        function s() {
            let { protocol, hostname, port } = window.location;
            return `${protocol}//${hostname}${port ? ":" + port : ""}`;
        }
        function c() {
            let { href } = window.location;
            let t = s();
            return href.substring(t.length);
        }
        function d(e) {
            if (typeof e === "string") {
                return e;
            }
            return e.displayName || e.name || "Unknown";
        }
        function f(e) {
            return e.finished || e.headersSent;
        }
        function p(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
        }
        async function _(e, t) {
            let r = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps) {
                if (t.ctx && t.Component) {
                    return {
                        pageProps: await _(t.Component, t.ctx)
                    };
                }
                return {};
            }
            let n = await e.getInitialProps(t);
            if (r && f(r)) {
                return n;
            }
            if (!n) {
                throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
                    value: "E1025",
                    enumerable: false,
                    configurable: true
                });
            }
            return n;
        }
        let y = typeof performance !== "undefined";
        let h = y && [
            "mark",
            "measure",
            "getEntriesByName"
        ].every((e)=>typeof performance[e] === "function");
        class b extends Error {
        }
        class g extends Error {
        }
        class m extends Error {
            constructor(e){
                super();
                this.code = "ENOENT";
                this.name = "PageNotFoundError";
                this.message = `Cannot find module for page: ${e}`;
            }
        }
        class O extends Error {
            constructor(e, t){
                super();
                this.message = `Failed to load static file for page: ${e} ${t}`;
            }
        }
        class v extends Error {
            constructor(){
                super();
                this.code = "ENOENT";
                this.message = "Cannot find the middleware module";
            }
        }
        function P(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            });
        }
    }
]);
