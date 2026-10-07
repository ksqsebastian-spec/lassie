;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "d37220c8-2ed0-9a0b-0181-c41a73a0a321";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    438424,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "useRouterBFCache", {
            enumerable: true,
            get () {
                return useL;
            }
        });
        let n = e.r(513679);
        function useL(e, t, stateKey) {
            let [l, setL] = n.useState(()=>({
                    tree: e,
                    cacheNode: t,
                    stateKey,
                    next: null
                }));
            if (l.tree === e) {
                return l;
            }
            let a = {
                tree: e,
                cacheNode: t,
                stateKey,
                next: null
            };
            let o = 1;
            let d = l;
            let s = a;
            while(d !== null && o < 1){
                if (d.stateKey === stateKey) {
                    s.next = d.next;
                    break;
                }
                {
                    o++;
                    let e = {
                        tree: d.tree,
                        cacheNode: d.cacheNode,
                        stateKey: d.stateKey,
                        next: null
                    };
                    s.next = e;
                    s = e;
                }
                d = d.next;
            }
            setL(a);
            return a;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    871874,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "ClientPageRoot", {
            enumerable: true,
            get () {
                return s;
            }
        });
        let n = e.r(281889);
        let l = e.r(516968);
        let u = e.r(513679);
        let a = e.r(744838);
        let o = e.r(509156);
        let d = e.r(807);
        function s({ Component, serverProvidedParams }) {
            let r;
            let i;
            if (serverProvidedParams !== null) {
                r = serverProvidedParams.searchParams;
                i = serverProvidedParams.params;
            } else {
                let e = u.use(l.LayoutRouterContext);
                i = e !== null ? e.parentParams : {};
                r = a.urlSearchParamsToParsedUrlQuery(u.use(o.SearchParamsContext));
            }
            let searchParams = d.createClientSearchParams(r);
            let f = d.createClientParams(i);
            return n.jsx(Component, {
                params: f,
                searchParams
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
    949930,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "ClientSegmentRoot", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let n = e.r(281889);
        let l = e.r(516968);
        let u = e.r(513679);
        let a = e.r(807);
        function o({ Component, slots, serverProvidedParams }) {
            let d;
            if (serverProvidedParams !== null) {
                d = serverProvidedParams.params;
            } else {
                let e = u.use(l.LayoutRouterContext);
                d = e !== null ? e.parentParams : {};
            }
            let s = a.createClientParams(d);
            return n.jsx(Component, {
                ...slots,
                params: s
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
    829524,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
            enumerable: true,
            get () {
                return useI;
            }
        });
        let n = e.r(171266);
        let l = e.r(281889);
        let u = n._(e.r(513679));
        let a = e.r(980374);
        let o = e.r(555408);
        let d = e.r(516968);
        class s extends u.default.Component {
            constructor(e){
                super(e);
                this.state = {
                    triggeredStatus: undefined,
                    previousPathname: e.pathname
                };
            }
            componentDidCatch() {}
            static getDerivedStateFromError(e) {
                if (o.isHTTPAccessFallbackError(e)) {
                    return {
                        triggeredStatus: o.getAccessFallbackHTTPStatus(e)
                    };
                }
                throw e;
            }
            static getDerivedStateFromProps(e, t) {
                if (e.pathname !== t.previousPathname && t.triggeredStatus) {
                    return {
                        triggeredStatus: undefined,
                        previousPathname: e.pathname
                    };
                }
                return {
                    triggeredStatus: t.triggeredStatus,
                    previousPathname: e.pathname
                };
            }
            render() {
                let { notFound, forbidden, unauthorized, children } = this.props;
                let { triggeredStatus } = this.state;
                let a = {
                    [o.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
                    [o.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
                    [o.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
                };
                if (triggeredStatus) {
                    let d = triggeredStatus === o.HTTPAccessErrorStatus.NOT_FOUND && notFound;
                    let s = triggeredStatus === o.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
                    let i = triggeredStatus === o.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
                    if (d || s || i) {
                        return l.jsxs(l.Fragment, {
                            children: [
                                l.jsx("meta", {
                                    name: "robots",
                                    content: "noindex"
                                }),
                                false,
                                a[triggeredStatus]
                            ]
                        });
                    }
                    return children;
                }
                return children;
            }
        }
        function useI({ notFound, forbidden, unauthorized, children }) {
            let pathname = a.useUntrackedPathname();
            let missingSlots = u.useContext(d.MissingSlotContext);
            if (notFound || forbidden || unauthorized) {
                return l.jsx(s, {
                    pathname,
                    notFound,
                    forbidden,
                    unauthorized,
                    missingSlots,
                    children
                });
            }
            return l.jsx(l.Fragment, {
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
    953822,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            InstantValidationBoundaryContext () {
                return u;
            },
            PlaceValidationBoundaryBelowThisLevel () {
                return a;
            },
            RenderValidationBoundaryAtThisLevel () {
                return o;
            },
            SlotMarker () {
                return d;
            }
        };
        for(var l in n){
            Object.defineProperty(r, l, {
                enumerable: true,
                get: n[l]
            });
        }
        let u = null;
        let a = null;
        let o = null;
        let d = null;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    660972,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            InstantValidationBoundaryContext () {
                return u.InstantValidationBoundaryContext;
            },
            PlaceValidationBoundaryBelowThisLevel () {
                return u.PlaceValidationBoundaryBelowThisLevel;
            },
            RenderValidationBoundaryAtThisLevel () {
                return u.RenderValidationBoundaryAtThisLevel;
            },
            SlotMarker () {
                return u.SlotMarker;
            }
        };
        for(var l in n){
            Object.defineProperty(r, l, {
                enumerable: true,
                get: n[l]
            });
        }
        let u = e.r(953822);
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    442957,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            LoadingBoundaryProvider () {
                return C;
            },
            default () {
                return useT;
            }
        };
        for(var l in n){
            Object.defineProperty(r, l, {
                enumerable: true,
                get: n[l]
            });
        }
        let u = e.r(330053);
        let a = e.r(171266);
        let o = e.r(281889);
        let d = a._(e.r(513679));
        let s = u._(e.r(345078));
        let i = e.r(516968);
        let c = e.r(992955);
        let f = e.r(515253);
        let p = e.r(818073);
        let y = e.r(697299);
        let b = e.r(829524);
        e.r(660972);
        let m = e.r(216843);
        let _ = e.r(438424);
        e.r(716295);
        let h = e.r(509156);
        let P = e.r(744838);
        let j = e.r(389242);
        s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(e, t, r) {
            let n = e.getClientRects();
            if (n.length === 0) {
                return 0;
            }
            let l = Infinity;
            for(let e = 0; e < n.length; e++){
                let t = n[e];
                if (t.top < l) {
                    l = t.top;
                }
            }
            if (l >= r() && l <= t) {
                return 1;
            }
            return 2;
        }
        d.default.Component;
        let useG = (e)=>{
            let tRef = d.default.useRef(null);
            d.useLayoutEffect(()=>{
                let { focusAndScrollRef, cacheNode } = e;
                let l = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
                if (l === null || !l.current) {
                    return;
                }
                let u = null;
                let focusAndScrollRef_hashFragment = focusAndScrollRef.hashFragment;
                if (focusAndScrollRef_hashFragment) {
                    var o;
                    if ((u = (o = focusAndScrollRef_hashFragment) === "top" ? document.body : document.getElementById(o) ?? document.getElementsByName(o)[0] ?? null) === null) {
                        l.current = false;
                        focusAndScrollRef.onlyHashChange = false;
                        focusAndScrollRef.hashFragment = null;
                        return;
                    }
                } else {
                    u = tRef.current;
                }
                if (u === null) {
                    return;
                }
                let d = false;
                p.disableSmoothScrollDuringRouteTransition(()=>{
                    let document_documentElement = document.documentElement;
                    let t = null;
                    let r = null;
                    let n = null;
                    let o = ()=>{
                        var r;
                        var l;
                        let u;
                        let a;
                        if (n === null) {
                            r = document_documentElement;
                            l = t;
                            n = !Number.isFinite(a = Number.parseFloat(u = getComputedStyle(r).scrollPaddingTop)) || a < 0 ? 0 : u.endsWith("px") ? a : u.endsWith("%") ? a / 100 * l : 0;
                        }
                        return n;
                    };
                    (focusAndScrollRef_hashFragment || (t = document_documentElement.clientHeight, (r = v(u, t, o)) !== 0)) && ((d = true, l.current = false, focusAndScrollRef_hashFragment) ? u.scrollIntoView() : r !== 1 && (document_documentElement.scrollTop = 0, v(u, t, o) === 2 && u.scrollIntoView()));
                }, {
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                if (d) {
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                }
            }, undefined);
            return o.jsx(d.Fragment, {
                ref: tRef,
                children: e.children
            });
        };
        function useO({ children, cacheNode }) {
            let r = d.useContext(i.GlobalLayoutRouterContext);
            if (!r) {
                throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
                    value: "E473",
                    enumerable: false,
                    configurable: true
                });
            }
            return o.jsx(useG, {
                focusAndScrollRef: r.focusAndScrollRef,
                cacheNode,
                children
            });
        }
        function useX({ tree, segmentPath, debugNameContext, cacheNode, params, url, isActive }) {
            let s;
            let f = d.useContext(i.GlobalLayoutRouterContext);
            d.useContext(h.NavigationPromisesContext);
            if (!f) {
                throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
                    value: "E473",
                    enumerable: false,
                    configurable: true
                });
            }
            let parentCacheNode = cacheNode !== null ? cacheNode : d.use(c.unresolvedThenable);
            let y = parentCacheNode.prefetchRsc !== null ? parentCacheNode.prefetchRsc : parentCacheNode.rsc;
            let b = d.useDeferredValue(parentCacheNode.rsc, y);
            if (j.isDeferredRsc(b)) {
                let e = d.use(b);
                if (e === null) {
                    d.use(c.unresolvedThenable);
                }
                s = e;
            } else {
                if (b === null) {
                    d.use(c.unresolvedThenable);
                }
                s = b;
            }
            let m = s;
            return o.jsx(i.LayoutRouterContext.Provider, {
                value: {
                    parentTree: tree,
                    parentCacheNode,
                    parentSegmentPath: segmentPath,
                    parentParams: params,
                    parentLoadingData: null,
                    debugNameContext,
                    url,
                    isActive
                },
                children: m
            });
        }
        function C({ loading, children }) {
            let r = d.use(i.LayoutRouterContext);
            if (r === null) {
                return children;
            }
            return o.jsx(i.LayoutRouterContext.Provider, {
                value: {
                    parentTree: r.parentTree,
                    parentCacheNode: r.parentCacheNode,
                    parentSegmentPath: r.parentSegmentPath,
                    parentParams: r.parentParams,
                    parentLoadingData: loading,
                    debugNameContext: r.debugNameContext,
                    url: r.url,
                    isActive: r.isActive
                },
                children
            });
        }
        function R({ name, loading, children }) {
            if (loading !== null) {
                let n = loading[0];
                let l = loading[1];
                let u = loading[2];
                return o.jsx(d.Suspense, {
                    name,
                    fallback: o.jsxs(o.Fragment, {
                        children: [
                            l,
                            u,
                            n
                        ]
                    }),
                    children
                });
            }
            return o.jsx(o.Fragment, {
                children
            });
        }
        function useT({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
            let v = d.useContext(i.LayoutRouterContext);
            if (!v) {
                throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
                    value: "E56",
                    enumerable: false,
                    configurable: true
                });
            }
            let { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = v;
            let B = parentTree[0];
            let segmentPath = parentSegmentPath === null ? [
                parallelRouterKey
            ] : parentSegmentPath.concat([
                B,
                parallelRouterKey
            ]);
            let L = parentTree[1][parallelRouterKey];
            let parentCacheNode_slots = parentCacheNode.slots;
            if (L === undefined || parentCacheNode_slots === null) {
                d.use(c.unresolvedThenable);
            }
            let w = L[0];
            let k = parentCacheNode_slots[parallelRouterKey] ?? null;
            let U = m.createRouterCacheKey(w, true);
            let V = _.useRouterBFCache(L, k, U);
            let I = [];
            do {
                let e = V.tree;
                let d = V.cacheNode;
                let c = V.stateKey;
                let m = e[0];
                let _ = parentParams;
                if (Array.isArray(m)) {
                    let e = m[0];
                    let t = m[1];
                    let r = m[2];
                    let n = P.getParamValueFromCacheKey(t, r);
                    if (n !== null) {
                        _ = {
                            ...parentParams,
                            [e]: n
                        };
                    }
                }
                let j = ((e)=>{
                    if (e === "/") {
                        return "/";
                    }
                    if (typeof e === "string") {
                        if (e === "(__SLOT__)") {
                            return;
                        } else {
                            return e + "/";
                        }
                    }
                    return e[1] + "/";
                })(m);
                let debugNameContext_1 = j ?? debugNameContext;
                let name = j === undefined ? undefined : debugNameContext;
                let value = o.jsxs(useO, {
                    cacheNode: d,
                    children: [
                        o.jsx(f.ErrorBoundary, {
                            errorComponent: error,
                            errorStyles,
                            errorScripts,
                            children: o.jsx(R, {
                                name,
                                loading: parentLoadingData,
                                children: o.jsx(b.HTTPAccessFallbackBoundary, {
                                    notFound,
                                    forbidden,
                                    unauthorized,
                                    children: o.jsxs(y.RedirectBoundary, {
                                        children: [
                                            o.jsx(useX, {
                                                url,
                                                tree: e,
                                                params: _,
                                                cacheNode: d,
                                                segmentPath,
                                                debugNameContext: debugNameContext_1,
                                                isActive: isActive && c === U
                                            }),
                                            null
                                        ]
                                    })
                                })
                            })
                        }),
                        null
                    ]
                });
                let T = o.jsxs(i.TemplateContext.Provider, {
                    value,
                    children: [
                        templateStyles,
                        templateScripts,
                        template
                    ]
                }, c);
                I.push(T);
                V = V.next;
            }while (V !== null)
            return I;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    956704,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "default", {
            enumerable: true,
            get () {
                return o;
            }
        });
        let n = e.r(171266);
        let l = e.r(281889);
        let u = n._(e.r(513679));
        let a = e.r(516968);
        function o() {
            let e = u.useContext(a.TemplateContext);
            return l.jsx(l.Fragment, {
                children: e
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
    803707,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "createRenderParamsFromClient", {
            enumerable: true,
            get () {
                return l;
            }
        });
        let n = new WeakMap;
        function l(e) {
            let t = n.get(e);
            if (t) {
                return t;
            }
            let r = Promise.resolve(e);
            n.set(e, r);
            return r;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    981652,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "createRenderParamsFromClient", {
            enumerable: true,
            get () {
                return createRenderParamsFromClient;
            }
        });
        let createRenderParamsFromClient = e.r(803707).createRenderParamsFromClient;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    638663,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "createRenderSearchParamsFromClient", {
            enumerable: true,
            get () {
                return l;
            }
        });
        let n = new WeakMap;
        function l(e) {
            let t = n.get(e);
            if (t) {
                return t;
            }
            let r = Promise.resolve(e);
            n.set(e, r);
            return r;
        }
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    196575,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "createRenderSearchParamsFromClient", {
            enumerable: true,
            get () {
                return createRenderSearchParamsFromClient;
            }
        });
        let createRenderSearchParamsFromClient = e.r(638663).createRenderSearchParamsFromClient;
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    807,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = {
            createClientParams () {
                return u.createRenderParamsFromClient;
            },
            createClientSearchParams () {
                return a.createRenderSearchParamsFromClient;
            }
        };
        for(var l in n){
            Object.defineProperty(r, l, {
                enumerable: true,
                get: n[l]
            });
        }
        let u = e.r(981652);
        let a = e.r(196575);
        if ((typeof r.default === "function" || typeof r.default === "object" && r.default !== null) && r.default.__esModule === undefined) {
            Object.defineProperty(r.default, "__esModule", {
                value: true
            });
            Object.assign(r.default, r);
            t.exports = r.default;
        }
    },
    208946,
    (e, t, r)=>{
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        Object.defineProperty(r, "IconMark", {
            enumerable: true,
            get () {
                return l;
            }
        });
        let n = e.r(281889);
        let l = ()=>{
            if (typeof window !== "undefined") {
                return null;
            }
            return n.jsx("meta", {
                name: "«nxt-icon»"
            });
        };
    }
]);
