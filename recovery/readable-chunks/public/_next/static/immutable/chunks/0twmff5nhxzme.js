;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "6f454783-5f7d-87eb-c617-e7d4c7658a10";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    386465,
    463549,
    120306,
    (e)=>{
        "use strict";
        var t = e.i(526296);
        var n = e.i(691480);
        var r = e.i(513679);
        var i = e.i(454881);
        function useO(e) {
            let tRef = r.useRef(null);
            let nRef = r.useRef(undefined);
            let i = r.useCallback((t)=>{
                if (typeof e === "function") {
                    let n = e(t);
                    return ()=>{
                        if (typeof n === "function") {
                            n();
                        } else {
                            e(null);
                        }
                    };
                }
                if (e) {
                    e.current = t;
                    return ()=>{
                        e.current = null;
                    };
                }
            }, [
                e
            ]);
            return r.useMemo(()=>({
                    get current () {
                        return tRef.current;
                    },
                    set current (value){
                        tRef.current = value;
                        if (nRef.current) {
                            nRef.current();
                            nRef.current = undefined;
                        }
                        if (value != null) {
                            nRef.current = i(value);
                        }
                    }
                }), [
                i
            ]);
        }
        e.s([
            "useObjectRef",
            0,
            useO
        ], 463549);
        let s = Symbol("default");
        function useU(e, t) {
            let n = r.useContext(e);
            if (t === null) {
                return null;
            }
            if (n && typeof n === "object" && "slots" in n && n.slots) {
                let e = t || s;
                if (!n.slots[e]) {
                    let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e)=>`"${e}"`));
                    let r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                    throw Error(`${r} Valid slot names are ${e}.`);
                }
                return n.slots[e];
            }
            return n;
        }
        function useA(e, t, o) {
            let { render, ...rest } = t;
            let aRef = r.useRef(null);
            let l = r.useMemo(()=>n.mergeRefs(o, aRef), [
                o,
                aRef
            ]);
            i.useLayoutEffect(()=>{}, [
                e,
                render
            ]);
            let c = {
                ...rest,
                ref: l
            };
            if (render) {
                return render(c, undefined);
            }
            return r.default.createElement(e, c);
        }
        let l = {};
        let c = new Proxy({}, {
            get (e, t) {
                if (typeof t !== "string") {
                    return;
                }
                let n = l[t];
                if (!n) {
                    n = r.forwardRef(useA.bind(null, t));
                    l[t] = n;
                }
                return n;
            }
        });
        e.s([
            "DEFAULT_SLOT",
            0,
            s,
            "Provider",
            0,
            ({ values, children })=>{
                for (let [n, i] of values){
                    children = r.default.createElement(n.Provider, {
                        value: i
                    }, children);
                }
                return children;
            },
            "dom",
            0,
            c,
            "removeDataAttributes",
            0,
            (e)=>{
                let t = /^(data-.*)$/;
                let n = {};
                for(let r in e){
                    if (!t.test(r)) {
                        n[r] = e[r];
                    }
                }
                return n;
            },
            "useContextProps",
            0,
            (e, i, s)=>{
                let { ref, ...rest } = useU(s, e.slot) || {};
                let c = useO(r.useMemo(()=>n.mergeRefs(i, ref), [
                    i,
                    ref
                ]));
                let d = t.mergeProps(rest, e);
                "style" in rest && rest.style && "style" in e && e.style && (typeof rest.style === "function" || typeof e.style === "function" ? d.style = (t)=>{
                    let n = typeof rest.style === "function" ? rest.style(t) : rest.style;
                    let defaultStyle = {
                        ...t.defaultStyle,
                        ...n
                    };
                    let i = typeof e.style === "function" ? e.style({
                        ...t,
                        defaultStyle
                    }) : e.style;
                    return {
                        ...defaultStyle,
                        ...i
                    };
                } : d.style = {
                    ...rest.style,
                    ...e.style
                });
                return [
                    d,
                    c
                ];
            },
            "useRenderProps",
            0,
            (e)=>{
                let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = e;
                return r.useMemo(()=>{
                    let e;
                    let r;
                    let c;
                    e = typeof className === "function" ? className({
                        ...values,
                        defaultClassName
                    }) : className;
                    r = typeof style === "function" ? style({
                        ...values,
                        defaultStyle: defaultStyle || {}
                    }) : style;
                    c = typeof children === "function" ? children({
                        ...values,
                        defaultChildren
                    }) : children == null ? defaultChildren : children;
                    return {
                        className: e ?? defaultClassName,
                        style: r || defaultStyle ? {
                            ...defaultStyle,
                            ...r
                        } : undefined,
                        children: c ?? defaultChildren,
                        "data-rac": "",
                        render: render ? (e)=>render(e, values) : undefined
                    };
                }, [
                    className,
                    style,
                    children,
                    defaultClassName,
                    defaultChildren,
                    defaultStyle,
                    values,
                    render
                ]);
            },
            "useSlot",
            0,
            (e = true)=>{
                let [t, setT] = r.useState(e);
                let oRef = r.useRef(false);
                let s = r.useCallback((e)=>{
                    oRef.current = true;
                    setT(!!e);
                }, []);
                i.useLayoutEffect(()=>{
                    if (!oRef.current) {
                        setT(false);
                    }
                }, []);
                return [
                    s,
                    t
                ];
            },
            "useSlottedContext",
            0,
            useU
        ], 386465);
        let d = new Set([
            "id"
        ]);
        let f = new Set([
            "aria-label",
            "aria-labelledby",
            "aria-describedby",
            "aria-details"
        ]);
        let p = new Set([
            "href",
            "hrefLang",
            "target",
            "rel",
            "download",
            "ping",
            "referrerPolicy"
        ]);
        let g = new Set([
            "dir",
            "lang",
            "hidden",
            "inert",
            "translate"
        ]);
        let v = new Set([
            "onClick",
            "onAuxClick",
            "onContextMenu",
            "onDoubleClick",
            "onMouseDown",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseMove",
            "onMouseOut",
            "onMouseOver",
            "onMouseUp",
            "onTouchCancel",
            "onTouchEnd",
            "onTouchMove",
            "onTouchStart",
            "onPointerDown",
            "onPointerMove",
            "onPointerUp",
            "onPointerCancel",
            "onPointerEnter",
            "onPointerLeave",
            "onPointerOver",
            "onPointerOut",
            "onGotPointerCapture",
            "onLostPointerCapture",
            "onScroll",
            "onWheel",
            "onAnimationStart",
            "onAnimationEnd",
            "onAnimationIteration",
            "onTransitionCancel",
            "onTransitionEnd",
            "onTransitionRun",
            "onTransitionStart"
        ]);
        let y = /^(data-.*)$/;
        e.s([
            "filterDOMProps",
            0,
            (e, t = {})=>{
                let { labelable, isLink, global, events = global, propNames } = t;
                let u = {};
                for(let t in e){
                    if (Object.prototype.hasOwnProperty.call(e, t) && (d.has(t) || labelable && f.has(t) || isLink && p.has(t) || global && g.has(t) || events && (v.has(t) || t.endsWith("Capture") && v.has(t.slice(0, -7))) || propNames?.has(t) || y.test(t))) {
                        u[t] = e[t];
                    }
                }
                return u;
            }
        ], 120306);
    },
    622030,
    822527,
    517491,
    (e)=>{
        "use strict";
        var t = e.i(753438);
        var n = e.i(195041);
        var r = e.i(896661);
        var i = e.i(49888);
        var o = e.i(92559);
        var s = e.i(239228);
        var u = e.i(513679);
        function a(e) {
            let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = e;
            let cRef = u.useRef({
                isFocusWithin: false
            });
            let { addGlobalListener, removeAllGlobalListeners } = s.useGlobalListeners();
            let onBlur = u.useCallback((e)=>{
                if (i.nodeContains(e.currentTarget, i.getEventTarget(e)) && cRef.current.isFocusWithin && !i.nodeContains(e.currentTarget, e.relatedTarget)) {
                    cRef.current.isFocusWithin = false;
                    removeAllGlobalListeners();
                    if (onBlurWithin) {
                        onBlurWithin(e);
                    }
                    if (onFocusWithinChange) {
                        onFocusWithinChange(false);
                    }
                }
            }, [
                onBlurWithin,
                onFocusWithinChange,
                cRef,
                removeAllGlobalListeners
            ]);
            let g = r.useSyntheticBlurEvent(onBlur);
            let onFocus = u.useCallback((e)=>{
                if (!i.nodeContains(e.currentTarget, i.getEventTarget(e))) {
                    return;
                }
                let t = i.getEventTarget(e);
                let n = o.getOwnerDocument(t);
                let s = i.getActiveElement(n);
                if (!cRef.current.isFocusWithin && s === t) {
                    if (onFocusWithin) {
                        onFocusWithin(e);
                    }
                    if (onFocusWithinChange) {
                        onFocusWithinChange(true);
                    }
                    cRef.current.isFocusWithin = true;
                    g(e);
                    let t = e.currentTarget;
                    addGlobalListener(n, "focus", (e)=>{
                        let o = i.getEventTarget(e);
                        if (cRef.current.isFocusWithin && !i.nodeContains(t, o)) {
                            let e = new n.defaultView.FocusEvent("blur", {
                                relatedTarget: o
                            });
                            r.setEventTarget(e, t);
                            onBlur(r.createSyntheticEvent(e));
                        }
                    }, {
                        capture: true
                    });
                }
            }, [
                onFocusWithin,
                onFocusWithinChange,
                g,
                addGlobalListener,
                onBlur
            ]);
            if (isDisabled) {
                return {
                    focusWithinProps: {
                        onFocus: undefined,
                        onBlur: undefined
                    }
                };
            }
            return {
                focusWithinProps: {
                    onFocus,
                    onBlur
                }
            };
        }
        e.s([
            "useFocusWithin",
            0,
            a
        ], 822527);
        e.s([
            "useFocusRing",
            0,
            (e = {})=>{
                let { autoFocus = false, isTextInput, within } = e;
                let sRef = u.useRef({
                    isFocused: false,
                    isFocusVisible: autoFocus || t.isFocusVisible()
                });
                let [l, setL] = u.useState(false);
                let [isFocusVisible, setIsFocusVisible] = u.useState(()=>sRef.current.isFocused && sRef.current.isFocusVisible);
                let p = u.useCallback(()=>setIsFocusVisible(sRef.current.isFocused && sRef.current.isFocusVisible), []);
                let g = u.useCallback((e)=>{
                    sRef.current.isFocused = e;
                    sRef.current.isFocusVisible = t.isFocusVisible();
                    setL(e);
                    p();
                }, [
                    p
                ]);
                t.useFocusVisibleListener((e)=>{
                    sRef.current.isFocusVisible = e;
                    p();
                }, [
                    isTextInput,
                    l
                ], {
                    enabled: l,
                    isTextInput
                });
                let { focusProps } = n.useFocus({
                    isDisabled: within,
                    onFocusChange: g
                });
                let { focusWithinProps } = a({
                    isDisabled: !within,
                    onFocusWithinChange: g
                });
                return {
                    isFocused: l,
                    isFocusVisible,
                    focusProps: within ? focusWithinProps : focusProps
                };
            }
        ], 622030);
        let l = false;
        let c = 0;
        function d(e) {
            if (e.pointerType === "touch") {
                l = true;
                setTimeout(()=>{
                    l = false;
                }, 500);
            }
        }
        function f() {
            let e = o.getOwnerDocument(null);
            if (e !== undefined) {
                if (c === 0 && typeof PointerEvent !== "undefined") {
                    e.addEventListener("pointerup", d);
                }
                c++;
                return ()=>{
                    if (!(--c > 0) && typeof PointerEvent !== "undefined") {
                        e.removeEventListener("pointerup", d);
                    }
                };
            }
        }
        e.s([
            "useHover",
            0,
            (e)=>{
                let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = e;
                let [isHovered, setIsHovered] = u.useState(false);
                let current = u.useRef({
                    isHovered: false,
                    ignoreEmulatedMouseEvents: false,
                    pointerType: "",
                    target: null
                }).current;
                u.useEffect(f, []);
                let { addGlobalListener, removeAllGlobalListeners } = s.useGlobalListeners();
                let { hoverProps, triggerHoverEnd } = u.useMemo(()=>{
                    let triggerHoverEnd_1 = (e, t)=>{
                        let current_target = current.target;
                        current.pointerType = "";
                        current.target = null;
                        if (t !== "touch" && current.isHovered && current_target) {
                            current.isHovered = false;
                            removeAllGlobalListeners();
                            if (onHoverEnd) {
                                onHoverEnd({
                                    type: "hoverend",
                                    target: current_target,
                                    pointerType: t
                                });
                            }
                            if (onHoverChange) {
                                onHoverChange(false);
                            }
                            setIsHovered(false);
                        }
                    };
                    let hoverProps_1 = {};
                    if (typeof PointerEvent !== "undefined") {
                        hoverProps_1.onPointerEnter = (r)=>{
                            if (!(l && r.pointerType === "mouse")) {
                                ((r, s)=>{
                                    current.pointerType = s;
                                    if (isDisabled || s === "touch" || current.isHovered || !i.nodeContains(r.currentTarget, i.getEventTarget(r))) {
                                        return;
                                    }
                                    current.isHovered = true;
                                    let r_currentTarget = r.currentTarget;
                                    current.target = r_currentTarget;
                                    addGlobalListener(o.getOwnerDocument(i.getEventTarget(r)), "pointerover", (t)=>{
                                        if (current.isHovered && current.target && !i.nodeContains(current.target, i.getEventTarget(t))) {
                                            triggerHoverEnd_1(t, t.pointerType);
                                        }
                                    }, {
                                        capture: true
                                    });
                                    if (onHoverStart) {
                                        onHoverStart({
                                            type: "hoverstart",
                                            target: r_currentTarget,
                                            pointerType: s
                                        });
                                    }
                                    if (onHoverChange) {
                                        onHoverChange(true);
                                    }
                                    setIsHovered(true);
                                })(r, r.pointerType);
                            }
                        };
                        hoverProps_1.onPointerLeave = (t)=>{
                            if (!isDisabled && i.nodeContains(t.currentTarget, i.getEventTarget(t))) {
                                triggerHoverEnd_1(t, t.pointerType);
                            }
                        };
                    }
                    return {
                        hoverProps: hoverProps_1,
                        triggerHoverEnd: triggerHoverEnd_1
                    };
                }, [
                    onHoverStart,
                    onHoverChange,
                    onHoverEnd,
                    isDisabled,
                    current,
                    addGlobalListener,
                    removeAllGlobalListeners
                ]);
                u.useEffect(()=>{
                    if (isDisabled) {
                        triggerHoverEnd({
                            currentTarget: current.target
                        }, current.pointerType);
                    }
                }, [
                    isDisabled
                ]);
                return {
                    hoverProps,
                    isHovered
                };
            }
        ], 517491);
    },
    970150,
    847712,
    239228,
    (e)=>{
        "use strict";
        var t = e.i(513679);
        let NContext = t.default.createContext({
            register: ()=>{}
        });
        NContext.displayName = "PressResponderContext";
        e.s([
            "PressResponderContext",
            0,
            NContext
        ], 970150);
        var r = e.i(454881);
        let i = t.default.useInsertionEffect ?? r.useLayoutEffect;
        e.s([
            "useEffectEvent",
            0,
            (e)=>{
                let nRef = t.useRef(null);
                i(()=>{
                    nRef.current = e;
                }, [
                    e
                ]);
                return t.useCallback((...e)=>{
                    let nRef_current = nRef.current;
                    return nRef_current?.(...e);
                }, []);
            }
        ], 847712);
        e.s([
            "useGlobalListeners",
            0,
            ()=>{
                let eRef = t.useRef(new Map);
                let addGlobalListener = t.useCallback((eventTarget, n, r, options)=>{
                    let fn = options?.once ? (...t)=>{
                        eRef.current.delete(r);
                        r(...t);
                    } : r;
                    eRef.current.set(r, {
                        type: n,
                        eventTarget,
                        fn,
                        options
                    });
                    eventTarget.addEventListener(n, fn, options);
                }, []);
                let removeGlobalListener = t.useCallback((t, n, r, i)=>{
                    let o = eRef.current.get(r)?.fn || r;
                    t.removeEventListener(n, o, i);
                    eRef.current.delete(r);
                }, []);
                let removeAllGlobalListeners = t.useCallback(()=>{
                    eRef.current.forEach((e, t)=>{
                        removeGlobalListener(e.eventTarget, e.type, t, e.options);
                    });
                }, [
                    removeGlobalListener
                ]);
                t.useEffect(()=>removeAllGlobalListeners, [
                    removeAllGlobalListeners
                ]);
                return {
                    addGlobalListener,
                    removeGlobalListener,
                    removeAllGlobalListeners
                };
            }
        ], 239228);
    },
    679893,
    195041,
    911938,
    (e)=>{
        "use strict";
        var t = e.i(570215);
        var n = e.i(49888);
        var r = e.i(753438);
        var i = e.i(92559);
        var o = e.i(975274);
        e.s([
            "focusSafely",
            0,
            (e)=>{
                if (!e.isConnected) {
                    return;
                }
                let s = i.getOwnerDocument(e);
                if (r.getInteractionModality() === "virtual") {
                    let r = n.getActiveElement(s);
                    o.runAfterTransition(()=>{
                        let i = n.getActiveElement(s);
                        if ((i === r || i === s.body) && e.isConnected) {
                            t.focusWithoutScrolling(e);
                        }
                    });
                } else {
                    t.focusWithoutScrolling(e);
                }
            }
        ], 679893);
        var s = e.i(896661);
        var u = e.i(513679);
        function a(e) {
            if (!e) {
                return;
            }
            let t = true;
            return (n)=>{
                e({
                    ...n,
                    preventDefault () {
                        n.preventDefault();
                    },
                    isDefaultPrevented: ()=>n.isDefaultPrevented(),
                    stopPropagation () {
                        t = true;
                    },
                    continuePropagation () {
                        t = false;
                    },
                    isPropagationStopped: ()=>t
                });
                if (t) {
                    n.stopPropagation();
                }
            };
        }
        e.s([
            "useFocus",
            0,
            (e)=>{
                let { isDisabled, onFocus, onBlur, onFocusChange } = e;
                let l = u.useCallback((e)=>{
                    if (n.getEventTarget(e) === e.currentTarget) {
                        if (onBlur) {
                            onBlur(e);
                        }
                        if (onFocusChange) {
                            onFocusChange(false);
                        }
                        return true;
                    }
                }, [
                    onBlur,
                    onFocusChange
                ]);
                let c = s.useSyntheticBlurEvent(l);
                let d = u.useCallback((e)=>{
                    let t = n.getEventTarget(e);
                    let o = i.getOwnerDocument(t);
                    let s = o ? n.getActiveElement(o) : n.getActiveElement();
                    if (t === e.currentTarget && t === s) {
                        if (onFocus) {
                            onFocus(e);
                        }
                        if (onFocusChange) {
                            onFocusChange(true);
                        }
                        c(e);
                    }
                }, [
                    onFocusChange,
                    onFocus,
                    c
                ]);
                return {
                    focusProps: {
                        onFocus: !isDisabled && (onFocus || onFocusChange || onBlur) ? d : undefined,
                        onBlur: !isDisabled && (onBlur || onFocusChange) ? l : undefined
                    }
                };
            }
        ], 195041);
        e.s([
            "useKeyboard",
            0,
            (e)=>({
                    keyboardProps: e.isDisabled ? {} : {
                        onKeyDown: a(e.onKeyDown),
                        onKeyUp: a(e.onKeyUp)
                    }
                })
        ], 911938);
    },
    525485,
    745584,
    (e)=>{
        "use strict";
        var t = e.i(92559);
        var n = e.i(679978);
        var r = e.i(975274);
        let i = "default";
        let o = "";
        let s = new WeakMap;
        function u(e) {
            let t = e?.defaultView;
            return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || undefined;
        }
        e.s([
            "disableTextSelection",
            0,
            (e)=>{
                if (n.isIOS()) {
                    if (i === "default") {
                        let n = t.getOwnerDocument(e);
                        o = n.documentElement.style.webkitUserSelect;
                        n.documentElement.style.webkitUserSelect = "none";
                    }
                    i = "disabled";
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    s.set(e, e.style[t]);
                    e.style[t] = "none";
                }
            },
            "restoreTextSelection",
            0,
            (e)=>{
                if (n.isIOS()) {
                    if (i === "disabled") {
                        i = "restoring";
                        setTimeout(()=>{
                            r.runAfterTransition(()=>{
                                if (i === "restoring") {
                                    let n = t.getOwnerDocument(e);
                                    if (n.documentElement.style.webkitUserSelect === "none") {
                                        n.documentElement.style.webkitUserSelect = o || "";
                                    }
                                    o = "";
                                    i = "default";
                                }
                            });
                        }, 300);
                    }
                } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && s.has(e)) {
                    let t = s.get(e);
                    let n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    if (e.style[n] === "none") {
                        e.style[n] = t;
                    }
                    if (e.getAttribute("style") === "") {
                        e.removeAttribute("style");
                    }
                    s.delete(e);
                }
            }
        ], 525485);
        let a = new WeakMap;
        e.s([
            "getNonce",
            0,
            (e)=>{
                let n = e ?? (typeof document !== "undefined" ? document : undefined);
                if (!n) {
                    return u(n);
                }
                if (a.has(n)) {
                    return a.get(n);
                }
                let r = n.querySelector('meta[property="csp-nonce"]');
                let i = r && r instanceof t.getOwnerWindow(r).HTMLMetaElement && (r.nonce || r.content) || u(n) || undefined;
                if (i !== undefined) {
                    a.set(n, i);
                }
                return i;
            }
        ], 745584);
    },
    753438,
    (e)=>{
        "use strict";
        let t;
        var n = e.i(49888);
        var r = e.i(92559);
        var i = e.i(896661);
        var o = e.i(679978);
        var s = e.i(768858);
        var u = e.i(703224);
        var a = e.i(514415);
        var l = e.i(513679);
        let c = null;
        let d = "keyboard";
        let f = new Set;
        let p = new Map;
        let g = false;
        let v = false;
        let y = {
            Tab: true,
            Escape: true
        };
        function E(e, t) {
            for (let n of f){
                n(e, t);
            }
        }
        function m(e) {
            g = true;
            if (!(u.openLink.isOpening || e.metaKey || !o.isMac() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")) {
                c = "keyboard";
                d = "keyboard";
                E("keyboard", e);
            }
        }
        function b(e) {
            c = "pointer";
            d = "pointerType" in e ? e.pointerType : "mouse";
            if (e.type === "mousedown" || e.type === "pointerdown") {
                g = true;
                E("pointer", e);
            }
        }
        function T(e) {
            if (!u.openLink.isOpening && s.isVirtualClick(e)) {
                g = true;
                c = "virtual";
                d = "virtual";
            }
        }
        function h(e) {
            let t = r.getOwnerWindow(n.getEventTarget(e));
            let o = r.getOwnerDocument(n.getEventTarget(e));
            if (n.getEventTarget(e) !== t && n.getEventTarget(e) !== o && !i.ignoreFocusEvent && e.isTrusted) {
                if (!(g || v)) {
                    c = "virtual";
                    d = "virtual";
                    E("virtual", e);
                }
                g = false;
                v = false;
            }
        }
        function w() {
            if (!i.ignoreFocusEvent) {
                g = false;
                v = true;
            }
        }
        function P(e) {
            if (typeof window === "undefined" || typeof document === "undefined") {
                return;
            }
            let t = r.getOwnerWindow(e);
            let n = r.getOwnerDocument(e);
            if (p.get(t)) {
                return;
            }
            let focus = t.HTMLElement.prototype.focus;
            t.HTMLElement.prototype.focus = function() {
                g = true;
                focus.apply(this, arguments);
            };
            n.addEventListener("keydown", m, true);
            n.addEventListener("keyup", m, true);
            n.addEventListener("click", T, true);
            t.addEventListener("focus", h, true);
            t.addEventListener("blur", w, false);
            if (typeof PointerEvent !== "undefined") {
                n.addEventListener("pointerdown", b, true);
                n.addEventListener("pointermove", b, true);
                n.addEventListener("pointerup", b, true);
            }
            t.addEventListener("beforeunload", ()=>{
                S(e);
            }, {
                once: true
            });
            p.set(t, {
                focus
            });
        }
        let S = (e, t)=>{
            let n = r.getOwnerWindow(e);
            let i = r.getOwnerDocument(e);
            if (t) {
                i.removeEventListener("DOMContentLoaded", t);
            }
            if (p.has(n)) {
                n.HTMLElement.prototype.focus = p.get(n).focus;
                i.removeEventListener("keydown", m, true);
                i.removeEventListener("keyup", m, true);
                i.removeEventListener("click", T, true);
                n.removeEventListener("focus", h, true);
                n.removeEventListener("blur", w, false);
                if (typeof PointerEvent !== "undefined") {
                    i.removeEventListener("pointerdown", b, true);
                    i.removeEventListener("pointermove", b, true);
                    i.removeEventListener("pointerup", b, true);
                }
                p.delete(n);
            }
        };
        function L() {
            return c !== "pointer";
        }
        typeof document !== "undefined" && ((t = r.getOwnerDocument(undefined)).readyState !== "loading" ? P(undefined) : t.addEventListener("DOMContentLoaded", ()=>{
            P(undefined);
        }));
        let C = new Set([
            "checkbox",
            "radio",
            "range",
            "color",
            "file",
            "image",
            "button",
            "submit",
            "reset"
        ]);
        e.s([
            "getInteractionModality",
            0,
            ()=>c,
            "getPointerType",
            0,
            ()=>d,
            "isFocusVisible",
            0,
            L,
            "setInteractionModality",
            0,
            (e)=>{
                c = e;
                d = e === "pointer" ? "mouse" : e;
                E(e, null);
            },
            "useFocusVisibleListener",
            0,
            (e, t, i)=>{
                P();
                l.useEffect(()=>{
                    if (i?.enabled === false) {
                        return;
                    }
                    let t = (t, o)=>{
                        var s;
                        let u;
                        let a;
                        let l;
                        let c;
                        let d;
                        let f;
                        let p;
                        let g;
                        s = !!i?.isTextInput;
                        u = o ? n.getEventTarget(o) : undefined;
                        a = r.getOwnerDocument(u);
                        c = (l = r.getOwnerWindow(u)) !== undefined ? l.HTMLInputElement : HTMLInputElement;
                        d = l !== undefined ? l.HTMLTextAreaElement : HTMLTextAreaElement;
                        f = l !== undefined ? l.HTMLElement : HTMLElement;
                        p = l !== undefined ? l.KeyboardEvent : KeyboardEvent;
                        g = n.getActiveElement(a);
                        if (!((s = s || g instanceof c && !C.has(g.type) || g instanceof d || g instanceof f && g.isContentEditable) && t === "keyboard" && o instanceof p && !y[o.key])) {
                            e(L());
                        }
                    };
                    f.add(t);
                    return ()=>{
                        f.delete(t);
                    };
                }, t);
            },
            "useInteractionModality",
            0,
            ()=>{
                P();
                let [e, setE] = l.useState(c);
                l.useEffect(()=>{
                    let e = ()=>{
                        setE(c);
                    };
                    f.add(e);
                    return ()=>{
                        f.delete(e);
                    };
                }, []);
                if (a.useIsSSR()) {
                    return null;
                }
                return e;
            }
        ]);
    },
    138980,
    (e)=>{
        "use strict";
        var t = e.i(679893);
        var n = e.i(526296);
        e.i(691480);
        var r = e.i(195041);
        var i = e.i(911938);
        var o = e.i(463549);
        var s = e.i(233628);
        var u = e.i(513679);
        let AContext = u.default.createContext(null);
        u.default.forwardRef((e, t)=>{
            let { children, ...rest } = e;
            let i = o.useObjectRef(t);
            let s = {
                ...rest,
                ref: i
            };
            return u.default.createElement(AContext.Provider, {
                value: s
            }, children);
        });
        e.s([
            "FocusableContext",
            0,
            AContext,
            "useFocusable",
            0,
            (e, o)=>{
                let { focusProps } = r.useFocus(e);
                let { keyboardProps } = i.useKeyboard(e);
                let d = n.mergeProps(focusProps, keyboardProps);
                let f = ((e)=>{
                    let t = u.useContext(AContext) || {};
                    s.useSyncRef(t, e);
                    let { ref, ...rest } = t;
                    return rest;
                })(o);
                let p = e.isDisabled ? {} : f;
                let gRef = u.useRef(e.autoFocus);
                u.useEffect(()=>{
                    if (gRef.current && o.current) {
                        t.focusSafely(o.current);
                    }
                    gRef.current = false;
                }, [
                    o
                ]);
                let tabIndex = e.excludeFromTabOrder ? -1 : 0;
                if (e.isDisabled) {
                    tabIndex = undefined;
                }
                return {
                    focusableProps: n.mergeProps({
                        ...d,
                        tabIndex
                    }, p)
                };
            }
        ]);
    },
    113329,
    (e)=>{
        "use strict";
        var t = e.i(3385);
        var n = e.i(896661);
        var r = e.i(525485);
        var i = e.i(570215);
        var o = e.i(49888);
        var s = e.i(745584);
        var u = e.i(92559);
        var a = e.i(679978);
        var l = e.i(768858);
        var c = e.i(526296);
        var d = e.i(703224);
        var f = e.i(970150);
        var p = e.i(847712);
        var g = e.i(239228);
        var v = e.i(233628);
        e.i(345078);
        var y = e.i(513679);
        class E {
            #e;
            constructor(e, t, n, r){
                this.#e = true;
                let i = r?.target ?? n.currentTarget;
                const o = i?.getBoundingClientRect();
                let s;
                let u = 0;
                let a;
                let l = null;
                if (n.clientX != null && n.clientY != null) {
                    a = n.clientX;
                    l = n.clientY;
                }
                o && (a != null && l != null ? (s = a - o.left, u = l - o.top) : (s = o.width / 2, u = o.height / 2));
                this.type = e;
                this.pointerType = t;
                this.target = n.currentTarget;
                this.shiftKey = n.shiftKey;
                this.metaKey = n.metaKey;
                this.ctrlKey = n.ctrlKey;
                this.altKey = n.altKey;
                this.x = s;
                this.y = u;
                this.key = n.key;
            }
            continuePropagation() {
                this.#e = false;
            }
            get shouldStopPropagation() {
                return this.#e;
            }
        }
        let m = Symbol("linkClicked");
        let b = "react-aria-pressable-style";
        let T = "data-react-aria-pressable";
        function h(e) {
            return e.tagName === "A" && e.hasAttribute("href");
        }
        function w(e, t) {
            let { key, code } = e;
            let i = t.getAttribute("role");
            return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(t instanceof u.getOwnerWindow(t).HTMLInputElement && !C(t, key) || t instanceof u.getOwnerWindow(t).HTMLTextAreaElement || t.isContentEditable) && !((i === "link" || !i && h(t)) && key !== "Enter");
        }
        function P(currentTarget, t) {
            let t_clientX = t.clientX;
            let t_clientY = t.clientY;
            return {
                currentTarget,
                shiftKey: t.shiftKey,
                ctrlKey: t.ctrlKey,
                metaKey: t.metaKey,
                altKey: t.altKey,
                clientX: t_clientX,
                clientY: t_clientY,
                key: t.key
            };
        }
        function S(e, key) {
            if (e instanceof HTMLInputElement) {
                return !C(e, key);
            }
            return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !h(e));
        }
        let L = new Set([
            "checkbox",
            "radio",
            "range",
            "color",
            "file",
            "image",
            "button",
            "submit",
            "reset"
        ]);
        function C(e, t) {
            if (e.type === "checkbox" || e.type === "radio") {
                return t === " ";
            }
            return L.has(e.type);
        }
        e.s([
            "usePress",
            0,
            (e)=>{
                let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref, ...rest } = ((e)=>{
                    let t = y.useContext(f.PressResponderContext);
                    if (t) {
                        let { register, ref, ...rest } = t;
                        e = c.mergeProps(rest, e);
                        register();
                    }
                    v.useSyncRef(t, e.ref);
                    return e;
                })(e);
                let [W, setW] = y.useState(false);
                let VRef = y.useRef({
                    isPressed: false,
                    ignoreEmulatedMouseEvents: false,
                    didFirePressStart: false,
                    isTriggeringEvent: false,
                    activePointerId: null,
                    target: null,
                    isOverTarget: false,
                    pointerType: null,
                    disposables: []
                });
                let { addGlobalListener, removeAllGlobalListeners } = g.useGlobalListeners();
                let G = y.useCallback((e, t)=>{
                    let VRef_current = VRef.current;
                    if (isDisabled || VRef_current.didFirePressStart) {
                        return false;
                    }
                    let r = true;
                    VRef_current.isTriggeringEvent = true;
                    if (onPressStart) {
                        let n = new E("pressstart", t, e);
                        onPressStart(n);
                        r = n.shouldStopPropagation;
                    }
                    if (onPressChange) {
                        onPressChange(true);
                    }
                    VRef_current.isTriggeringEvent = false;
                    VRef_current.didFirePressStart = true;
                    setW(true);
                    return r;
                }, [
                    isDisabled,
                    onPressStart,
                    onPressChange
                ]);
                let B = y.useCallback((e, t, n = true)=>{
                    let VRef_current = VRef.current;
                    if (!VRef_current.didFirePressStart) {
                        return false;
                    }
                    VRef_current.didFirePressStart = false;
                    VRef_current.isTriggeringEvent = true;
                    let i = true;
                    if (onPressEnd) {
                        let n = new E("pressend", t, e);
                        onPressEnd(n);
                        i = n.shouldStopPropagation;
                    }
                    if (onPressChange) {
                        onPressChange(false);
                    }
                    setW(false);
                    if (onPress && n && !isDisabled) {
                        let n = new E("press", t, e);
                        onPress(n);
                        i &&= n.shouldStopPropagation;
                    }
                    VRef_current.isTriggeringEvent = false;
                    return i;
                }, [
                    isDisabled,
                    onPressEnd,
                    onPressChange,
                    onPress
                ]);
                let $ = p.useEffectEvent(B);
                let j = y.useCallback((e, t)=>{
                    let VRef_current = VRef.current;
                    if (isDisabled) {
                        return false;
                    }
                    if (onPressUp) {
                        VRef_current.isTriggeringEvent = true;
                        let r = new E("pressup", t, e);
                        onPressUp(r);
                        VRef_current.isTriggeringEvent = false;
                        return r.shouldStopPropagation;
                    }
                    return true;
                }, [
                    isDisabled,
                    onPressUp
                ]);
                let z = p.useEffectEvent(j);
                let Y = y.useCallback((e)=>{
                    let VRef_current = VRef.current;
                    if (VRef_current.isPressed && VRef_current.target) {
                        for (let n of (VRef_current.didFirePressStart && VRef_current.pointerType != null && B(P(VRef_current.target, e), VRef_current.pointerType, false), VRef_current.isPressed = false, VRef_current.isOverTarget = false, VRef_current.activePointerId = null, VRef_current.pointerType = null, removeAllGlobalListeners(), allowTextSelectionOnPress || r.restoreTextSelection(VRef_current.target), VRef_current.disposables)){
                            n();
                        }
                        VRef_current.disposables = [];
                    }
                }, [
                    allowTextSelectionOnPress,
                    removeAllGlobalListeners,
                    B
                ]);
                let q = p.useEffectEvent(Y);
                y.useEffect(()=>{
                    if (isDisabled && VRef.current.isPressed) {
                        q({
                            currentTarget: VRef.current.target,
                            shiftKey: false,
                            ctrlKey: false,
                            metaKey: false,
                            altKey: false
                        });
                    }
                }, [
                    isDisabled
                ]);
                let X = y.useCallback((e)=>{
                    if (shouldCancelOnPointerExit) {
                        Y(e);
                    }
                }, [
                    shouldCancelOnPointerExit,
                    Y
                ]);
                let J = y.useCallback((e)=>{
                    isDisabled || onClick?.(e);
                }, [
                    isDisabled,
                    onClick
                ]);
                let Q = y.useCallback((e, t)=>{
                    if (!isDisabled && onClick) {
                        let r = new MouseEvent("click", e);
                        n.setEventTarget(r, t);
                        onClick(n.createSyntheticEvent(r));
                    }
                }, [
                    isDisabled,
                    onClick
                ]);
                let Z = y.useMemo(()=>{
                    let VRef_current = VRef.current;
                    let s = {
                        onKeyDown (n) {
                            if (w(n.nativeEvent, n.currentTarget) && o.nodeContains(n.currentTarget, o.getEventTarget(n))) {
                                if (S(o.getEventTarget(n), n.key)) {
                                    n.preventDefault();
                                }
                                let r = true;
                                if (!(VRef_current.isPressed || n.repeat)) {
                                    VRef_current.target = n.currentTarget;
                                    VRef_current.isPressed = true;
                                    VRef_current.pointerType = "keyboard";
                                    r = G(n, "keyboard");
                                }
                                let i = n.currentTarget;
                                addGlobalListener(u.getOwnerDocument(n.currentTarget), "keyup", t.chain((t)=>{
                                    if (w(t, i) && !t.repeat && o.nodeContains(i, o.getEventTarget(t)) && VRef_current.target) {
                                        z(P(VRef_current.target, t), "keyboard");
                                    }
                                }, c), true);
                                if (r) {
                                    n.stopPropagation();
                                }
                                n.metaKey && a.isMac() && VRef_current.metaKeyEvents?.set(n.key, n.nativeEvent);
                            } else {
                                if (n.key === "Meta") {
                                    VRef_current.metaKeyEvents = new Map;
                                }
                            }
                        },
                        onClick (t) {
                            if ((!t || o.nodeContains(t.currentTarget, o.getEventTarget(t))) && t && t.button === 0 && !VRef_current.isTriggeringEvent && !d.openLink.isOpening) {
                                let n = true;
                                if (isDisabled) {
                                    t.preventDefault();
                                }
                                if (!VRef_current.ignoreEmulatedMouseEvents && !VRef_current.isPressed && (VRef_current.pointerType === "virtual" || l.isVirtualClick(t.nativeEvent))) {
                                    let e = G(t, "virtual");
                                    let r = z(t, "virtual");
                                    let i = $(t, "virtual");
                                    J(t);
                                    n = e && r && i;
                                } else if (VRef_current.isPressed && VRef_current.pointerType !== "keyboard") {
                                    let r = VRef_current.pointerType || t.nativeEvent.pointerType || "virtual";
                                    let i = z(P(t.currentTarget, t), r);
                                    let o = $(P(t.currentTarget, t), r, true);
                                    n = i && o;
                                    VRef_current.isOverTarget = false;
                                    J(t);
                                    q(t);
                                }
                                VRef_current.ignoreEmulatedMouseEvents = false;
                                if (n) {
                                    t.stopPropagation();
                                }
                            }
                        }
                    };
                    let c = (t)=>{
                        if (VRef_current.isPressed && VRef_current.target && w(t, VRef_current.target)) {
                            if (S(o.getEventTarget(t), t.key)) {
                                t.preventDefault();
                            }
                            let n = o.getEventTarget(t);
                            let r = o.nodeContains(VRef_current.target, n);
                            $(P(VRef_current.target, t), "keyboard", r);
                            if (r) {
                                Q(t, VRef_current.target);
                            }
                            removeAllGlobalListeners();
                            if (t.key !== "Enter" && h(VRef_current.target) && o.nodeContains(VRef_current.target, n) && !t[m]) {
                                t[m] = true;
                                d.openLink(VRef_current.target, t, false);
                            }
                            VRef_current.isPressed = false;
                            VRef_current.metaKeyEvents?.delete(t.key);
                        } else if (t.key === "Meta" && VRef_current.metaKeyEvents?.size) {
                            let t = VRef_current.metaKeyEvents;
                            for (let n of (VRef_current.metaKeyEvents = undefined, t.values())){
                                VRef_current.target?.dispatchEvent(new KeyboardEvent("keyup", n));
                            }
                        }
                    };
                    if (typeof PointerEvent !== "undefined") {
                        s.onPointerDown = (n)=>{
                            if (n.button !== 0 || !o.nodeContains(n.currentTarget, o.getEventTarget(n))) {
                                return;
                            }
                            if (l.isVirtualPointerEvent(n.nativeEvent)) {
                                VRef_current.pointerType = "virtual";
                                return;
                            }
                            VRef_current.pointerType = n.pointerType;
                            let i = true;
                            if (!VRef_current.isPressed) {
                                VRef_current.isPressed = true;
                                VRef_current.isOverTarget = true;
                                VRef_current.activePointerId = n.pointerId;
                                VRef_current.target = n.currentTarget;
                                if (!allowTextSelectionOnPress) {
                                    r.disableTextSelection(VRef_current.target);
                                }
                                i = G(n, VRef_current.pointerType);
                                let s = o.getEventTarget(n);
                                "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId) : s.releasePointerCapture(n.pointerId));
                                addGlobalListener(u.getOwnerDocument(n.currentTarget), "pointerup", t, false);
                                addGlobalListener(u.getOwnerDocument(n.currentTarget), "pointercancel", a, false);
                            }
                            if (i) {
                                n.stopPropagation();
                            }
                        };
                        s.onMouseDown = (t)=>{
                            if (o.nodeContains(t.currentTarget, o.getEventTarget(t)) && t.button === 0) {
                                if (preventFocusOnPress) {
                                    let r = n.preventFocus(t.target);
                                    if (r) {
                                        VRef_current.disposables.push(r);
                                    }
                                }
                                t.stopPropagation();
                            }
                        };
                        s.onPointerUp = (t)=>{
                            o.nodeContains(t.currentTarget, o.getEventTarget(t)) && VRef_current.pointerType !== "virtual" && (t.button !== 0 || VRef_current.isPressed || z(t, VRef_current.pointerType || t.pointerType));
                        };
                        s.onPointerEnter = (t)=>{
                            if (t.pointerId === VRef_current.activePointerId && VRef_current.target && !VRef_current.isOverTarget && VRef_current.pointerType != null) {
                                VRef_current.isOverTarget = true;
                                G(P(VRef_current.target, t), VRef_current.pointerType);
                            }
                        };
                        s.onPointerLeave = (t)=>{
                            if (t.pointerId === VRef_current.activePointerId && VRef_current.target && VRef_current.isOverTarget && VRef_current.pointerType != null) {
                                VRef_current.isOverTarget = false;
                                $(P(VRef_current.target, t), VRef_current.pointerType, false);
                                X(t);
                            }
                        };
                        let t = (t)=>{
                            if (t.pointerId === VRef_current.activePointerId && VRef_current.isPressed && t.button === 0 && VRef_current.target) {
                                if (o.nodeContains(VRef_current.target, o.getEventTarget(t)) && VRef_current.pointerType != null) {
                                    let n = false;
                                    let r = setTimeout(()=>{
                                        VRef_current.isPressed && VRef_current.target instanceof HTMLElement && (n ? q(t) : (i.focusWithoutScrolling(VRef_current.target), VRef_current.target.click()));
                                    }, 80);
                                    addGlobalListener(t.currentTarget, "click", ()=>n = true, true);
                                    VRef_current.disposables.push(()=>clearTimeout(r));
                                } else {
                                    q(t);
                                }
                                VRef_current.isOverTarget = false;
                            }
                        };
                        let a = (e)=>{
                            q(e);
                        };
                        s.onDragStart = (e)=>{
                            if (o.nodeContains(e.currentTarget, o.getEventTarget(e))) {
                                q(e);
                            }
                        };
                    }
                    return s;
                }, [
                    addGlobalListener,
                    isDisabled,
                    preventFocusOnPress,
                    removeAllGlobalListeners,
                    allowTextSelectionOnPress,
                    X,
                    G,
                    J,
                    Q
                ]);
                y.useEffect(()=>{
                    if (!ref) {
                        return;
                    }
                    let e = u.getOwnerDocument(ref.current);
                    if (!e || !e.head || e.getElementById(b)) {
                        return;
                    }
                    let t = e.createElement("style");
                    t.id = b;
                    let n = s.getNonce(e);
                    if (n) {
                        t.nonce = n;
                    }
                    t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
                    e.head.prepend(t);
                }, [
                    ref
                ]);
                y.useEffect(()=>{
                    let VRef_current = VRef.current;
                    return ()=>{
                        for (let t of (allowTextSelectionOnPress || r.restoreTextSelection(VRef_current.target ?? undefined), VRef_current.disposables)){
                            t();
                        }
                        VRef_current.disposables = [];
                    };
                }, [
                    allowTextSelectionOnPress
                ]);
                return {
                    isPressed: isPressed || W,
                    pressProps: c.mergeProps(rest, Z, {
                        [T]: true
                    })
                };
            }
        ]);
    },
    896661,
    (e)=>{
        "use strict";
        var t = e.i(570215);
        var n = e.i(49888);
        var r = e.i(92559);
        var i = e.i(396387);
        var o = e.i(454881);
        var s = e.i(513679);
        function u(e) {
            e.nativeEvent = e;
            e.isDefaultPrevented = ()=>e.defaultPrevented;
            e.isPropagationStopped = ()=>e.cancelBubble;
            e.persist = ()=>{};
            return e;
        }
        let a = false;
        e.s([
            "createSyntheticEvent",
            0,
            u,
            "ignoreFocusEvent",
            ()=>a,
            "preventFocus",
            0,
            (e)=>{
                while(e && !i.isFocusable(e, {
                    skipVisibilityCheck: true
                })){
                    e = e.parentElement;
                }
                let o = r.getOwnerWindow(e);
                let activeElement = o.document.activeElement;
                if (!activeElement || activeElement === e) {
                    return;
                }
                a = true;
                let u = false;
                let l = (e)=>{
                    if (n.getEventTarget(e) === activeElement || u) {
                        e.stopImmediatePropagation();
                    }
                };
                let c = (r)=>{
                    if (n.getEventTarget(r) === activeElement || u) {
                        r.stopImmediatePropagation();
                        if (!(e || u)) {
                            u = true;
                            t.focusWithoutScrolling(activeElement);
                            p();
                        }
                    }
                };
                let d = (t)=>{
                    if (n.getEventTarget(t) === e || u) {
                        t.stopImmediatePropagation();
                    }
                };
                let f = (r)=>{
                    if (n.getEventTarget(r) === e || u) {
                        r.stopImmediatePropagation();
                        if (!u) {
                            u = true;
                            t.focusWithoutScrolling(activeElement);
                            p();
                        }
                    }
                };
                o.addEventListener("blur", l, true);
                o.addEventListener("focusout", c, true);
                o.addEventListener("focusin", f, true);
                o.addEventListener("focus", d, true);
                let p = ()=>{
                    cancelAnimationFrame(g);
                    o.removeEventListener("blur", l, true);
                    o.removeEventListener("focusout", c, true);
                    o.removeEventListener("focusin", f, true);
                    o.removeEventListener("focus", d, true);
                    a = false;
                    u = false;
                };
                let g = requestAnimationFrame(p);
                return p;
            },
            "setEventTarget",
            0,
            (e, t)=>{
                Object.defineProperty(e, "target", {
                    value: t
                });
                Object.defineProperty(e, "currentTarget", {
                    value: t
                });
            },
            "useSyntheticBlurEvent",
            0,
            (e)=>{
                let tRef = s.useRef({
                    isFocused: false,
                    observer: null
                });
                o.useLayoutEffect(()=>{
                    let tRef_current = tRef.current;
                    return ()=>{
                        if (tRef_current.observer) {
                            tRef_current.observer.disconnect();
                            tRef_current.observer = null;
                        }
                    };
                }, []);
                return s.useCallback((r)=>{
                    let i = n.getEventTarget(r);
                    if (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) {
                        tRef.current.isFocused = true;
                        i.addEventListener("focusout", (n)=>{
                            tRef.current.isFocused = false;
                            if (i.disabled) {
                                let t = u(n);
                                e?.(t);
                            }
                            if (tRef.current.observer) {
                                tRef.current.observer.disconnect();
                                tRef.current.observer = null;
                            }
                        }, {
                            once: true
                        });
                        tRef.current.observer = new MutationObserver(()=>{
                            if (tRef.current.isFocused && i.disabled) {
                                tRef.current.observer?.disconnect();
                                let relatedTarget = i === n.getActiveElement() ? null : n.getActiveElement();
                                i.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget
                                }));
                                i.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: true,
                                    relatedTarget
                                }));
                            }
                        });
                        tRef.current.observer.observe(i, {
                            attributes: true,
                            attributeFilter: [
                                "disabled"
                            ]
                        });
                    }
                }, [
                    e
                ]);
            }
        ]);
    },
    3385,
    (e)=>{
        "use strict";
        e.s([
            "chain",
            0,
            (...e)=>(...t)=>{
                    for (let n of e){
                        if (typeof n === "function") {
                            n(...t);
                        }
                    }
                }
        ]);
    },
    570215,
    (e)=>{
        "use strict";
        let t = null;
        e.s([
            "focusWithoutScrolling",
            0,
            (e)=>{
                if ((()=>{
                    if (t == null) {
                        t = false;
                        try {
                            document.createElement("div").focus({
                                get preventScroll () {
                                    t = true;
                                    return true;
                                }
                            });
                        } catch  {}
                    }
                    return t;
                })()) {
                    e.focus({
                        preventScroll: true
                    });
                } else {
                    let t = ((e)=>{
                        let e_parentNode = e.parentNode;
                        let n = [];
                        let element = document.scrollingElement || document.documentElement;
                        while(e_parentNode instanceof HTMLElement && e_parentNode !== element){
                            if (e_parentNode.offsetHeight < e_parentNode.scrollHeight || e_parentNode.offsetWidth < e_parentNode.scrollWidth) {
                                n.push({
                                    element: e_parentNode,
                                    scrollTop: e_parentNode.scrollTop,
                                    scrollLeft: e_parentNode.scrollLeft
                                });
                            }
                            e_parentNode = e_parentNode.parentNode;
                        }
                        if (element instanceof HTMLElement) {
                            n.push({
                                element,
                                scrollTop: element.scrollTop,
                                scrollLeft: element.scrollLeft
                            });
                        }
                        return n;
                    })(e);
                    e.focus();
                    ((e)=>{
                        for (let { element, scrollTop, scrollLeft } of e){
                            element.scrollTop = scrollTop;
                            element.scrollLeft = scrollLeft;
                        }
                    })(t);
                }
            }
        ]);
    },
    768858,
    (e)=>{
        "use strict";
        var t = e.i(679978);
        e.s([
            "isVirtualClick",
            0,
            (e)=>e.pointerType === "" && !!e.isTrusted || (t.isAndroid() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType),
            "isVirtualPointerEvent",
            0,
            (e)=>!t.isAndroid() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse"
        ]);
    },
    526296,
    514415,
    900907,
    691480,
    (e)=>{
        "use strict";
        let t;
        var n = e.i(3385);
        var r = e.i(454881);
        var i = e.i(513679);
        let o = {
            prefix: String(Math.round(10000000000 * Math.random())),
            current: 0
        };
        let SContext = i.default.createContext(o);
        let UContext = i.default.createContext(false);
        typeof window !== "undefined" && window.document && window.document.createElement;
        let a = new WeakMap;
        let l = typeof i.default.useId === "function" ? (e)=>{
            let t = i.default.useId();
            let [n] = i.useState(useP());
            let r = n ? "react-aria" : `react-aria${o.prefix}`;
            return e || `${r}-${t}`;
        } : (e)=>{
            let t = i.useContext(SContext);
            let n = ((e = false)=>{
                let t = i.useContext(SContext);
                let nRef = i.useRef(null);
                if (nRef.current === null && !e) {
                    let e = i.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
                    if (e) {
                        let n = a.get(e);
                        if (n == null) {
                            a.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            });
                        } else if (e.memoizedState !== n.state) {
                            t.current = n.id;
                            a.delete(e);
                        }
                    }
                    nRef.current = ++t.current;
                }
                return nRef.current;
            })(!!e);
            let r = `react-aria${t.prefix}`;
            return e || `${r}-${n}`;
        };
        function c() {
            return false;
        }
        function d() {
            return true;
        }
        function f(e) {
            return ()=>{};
        }
        function useP() {
            if (typeof i.default.useSyncExternalStore === "function") {
                return i.default.useSyncExternalStore(f, c, d);
            }
            return i.useContext(UContext);
        }
        e.s([
            "useIsSSR",
            0,
            useP,
            "useSSRSafeId",
            0,
            l
        ], 514415);
        let g = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        let v = new Map;
        function useY(e) {
            let [n, setN] = i.useState(e);
            let sRef = i.useRef(null);
            let u = l(n);
            let aRef = i.useRef(null);
            if (t) {
                t.register(aRef, u);
            }
            if (g) {
                let e = v.get(u);
                if (e && !e.includes(sRef)) {
                    e.push(sRef);
                } else {
                    v.set(u, [
                        sRef
                    ]);
                }
            }
            r.useLayoutEffect(()=>()=>{
                    if (t) {
                        t.unregister(aRef);
                    }
                    v.delete(u);
                }, [
                u
            ]);
            i.useEffect(()=>{
                let sRef_current = sRef.current;
                if (sRef_current) {
                    setN(sRef_current);
                }
                return ()=>{
                    if (sRef_current) {
                        sRef.current = null;
                    }
                };
            });
            return u;
        }
        function E(e, t) {
            if (e === t) {
                return e;
            }
            let n = v.get(e);
            if (n) {
                n.forEach((e)=>e.current = t);
                return t;
            }
            let r = v.get(t);
            if (r) {
                r.forEach((t)=>t.current = e);
                return e;
            }
            return t;
        }
        function m(...e) {
            if (e.length === 1 && e[0]) {
                return e[0];
            }
            return (t)=>{
                let n = false;
                let r = e.map((e)=>{
                    let r = b(e, t);
                    n ||= typeof r === "function";
                    return r;
                });
                if (n) {
                    return ()=>{
                        r.forEach((t, n)=>{
                            if (typeof t === "function") {
                                t();
                            } else {
                                b(e[n], null);
                            }
                        });
                    };
                }
            };
        }
        function b(e, t) {
            if (typeof e === "function") {
                return e(t);
            }
            if (e != null) {
                e.current = t;
            }
        }
        if (typeof FinalizationRegistry !== "undefined") {
            t = new FinalizationRegistry((e)=>{
                v.delete(e);
            });
        }
        e.s([
            "mergeIds",
            0,
            E,
            "useId",
            0,
            useY,
            "useSlotId",
            0,
            (e = [])=>{
                let t = useY();
                let [n, o] = ((e)=>{
                    let [t, setT] = i.useState(e);
                    let oRef = i.useRef(t);
                    let sRef = i.useRef(null);
                    let uRef = i.useRef(()=>{
                        if (!sRef.current) {
                            return;
                        }
                        let e = sRef.current.next();
                        if (e.done) {
                            sRef.current = null;
                            return;
                        }
                        if (oRef.current === e.value) {
                            uRef.current();
                        } else {
                            setT(e.value);
                        }
                    });
                    r.useLayoutEffect(()=>{
                        oRef.current = t;
                        if (sRef.current) {
                            uRef.current();
                        }
                    });
                    return [
                        t,
                        i.useCallback((e)=>{
                            sRef.current = e(oRef.current);
                            uRef.current();
                        }, [
                            uRef
                        ])
                    ];
                })(t);
                let s = i.useCallback(()=>{
                    o(function*() {
                        yield t;
                        yield document.getElementById(t) ? t : undefined;
                    });
                }, [
                    t,
                    o
                ]);
                r.useLayoutEffect(s, [
                    t,
                    s,
                    ...e
                ]);
                return n;
            }
        ], 900907);
        e.s([
            "mergeRefs",
            0,
            m
        ], 691480);
        var T = e.i(809393);
        e.s([
            "mergeProps",
            0,
            (...e)=>{
                let t = {
                    ...e[0]
                };
                for(let r = 1; r < e.length; r++){
                    let i = e[r];
                    for(let e in i){
                        let r = t[e];
                        let o = i[e];
                        if (typeof r === "function" && typeof o === "function" && e[0] === "o" && e[1] === "n" && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90) {
                            t[e] = n.chain(r, o);
                        } else if ((e === "className" || e === "UNSAFE_className") && typeof r === "string" && typeof o === "string") {
                            t[e] = T.default(r, o);
                        } else if (e === "id" && r && o) {
                            t.id = E(r, o);
                        } else if (e === "ref" && r && o) {
                            t.ref = m(r, o);
                        } else {
                            t[e] = o !== undefined ? o : r;
                        }
                    }
                }
                return t;
            }
        ], 526296);
    },
    703224,
    (e)=>{
        "use strict";
        var t = e.i(570215);
        var n = e.i(679978);
        var r = e.i(513679);
        let IContext = r.createContext({
            isNative: true,
            open (e, t) {
                if (e instanceof HTMLAnchorElement) {
                    s(e, t);
                } else if (e.hasAttribute("data-href")) {
                    let n = document.createElement("a");
                    n.href = e.getAttribute("data-href");
                    if (e.hasAttribute("data-target")) {
                        n.target = e.getAttribute("data-target");
                    }
                    if (e.hasAttribute("data-rel")) {
                        n.rel = e.getAttribute("data-rel");
                    }
                    if (e.hasAttribute("data-download")) {
                        n.download = e.getAttribute("data-download");
                    }
                    if (e.hasAttribute("data-ping")) {
                        n.ping = e.getAttribute("data-ping");
                    }
                    if (e.hasAttribute("data-referrer-policy")) {
                        n.referrerPolicy = e.getAttribute("data-referrer-policy");
                    }
                    e.appendChild(n);
                    s(n, t);
                    e.removeChild(n);
                }
            },
            useHref: (e)=>e
        });
        function o() {
            return r.useContext(IContext);
        }
        function s(e, r, i = true) {
            let { metaKey, ctrlKey, altKey, shiftKey } = r;
            n.isFirefox() && window.event?.type?.startsWith("key") && e.target === "_blank" && (n.isMac() ? metaKey = true : ctrlKey = true);
            let c = n.isWebKit() && n.isMac() && !n.isIPad() && 1 ? new KeyboardEvent("keydown", {
                keyIdentifier: "Enter",
                metaKey,
                ctrlKey,
                altKey,
                shiftKey
            }) : new MouseEvent("click", {
                metaKey,
                ctrlKey,
                altKey,
                shiftKey,
                detail: 1,
                bubbles: true,
                cancelable: true
            });
            s.isOpening = i;
            t.focusWithoutScrolling(e);
            e.dispatchEvent(c);
            s.isOpening = false;
        }
        s.isOpening = false;
        e.s([
            "handleLinkClick",
            0,
            (e, t, n, r)=>{
                let i;
                let o;
                if (!(!(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && o !== "_self" || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n)) {
                    e.preventDefault();
                    t.open(e.currentTarget, e, n, r);
                }
            },
            "openLink",
            0,
            s,
            "useLinkProps",
            0,
            (e)=>{
                let t = o().useHref(e?.href ?? "");
                let n = {};
                if (e) {
                    for (let r of [
                        "href",
                        "target",
                        "rel",
                        "download",
                        "ping",
                        "referrerPolicy"
                    ]){
                        if (r in e) {
                            n[r] = r === "href" ? t : e[r];
                        }
                    }
                }
                return n;
            },
            "useRouter",
            0,
            o
        ]);
    },
    679978,
    (e)=>{
        "use strict";
        function t(e) {
            if (typeof window === "undefined" || window.navigator == null) {
                return false;
            }
            let t = window.navigator.userAgentData?.brands;
            return Array.isArray(t) && t.some((t)=>e.test(t.brand)) || e.test(window.navigator.userAgent);
        }
        function n(e) {
            return typeof window !== "undefined" && window.navigator != null && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
        }
        function r(e) {
            let t = null;
            return ()=>{
                if (t == null) {
                    t = e();
                }
                return t;
            };
        }
        let i = r(()=>n(/^Mac/i));
        let o = r(()=>n(/^iPhone/i));
        let s = r(()=>n(/^iPad/i) || i() && navigator.maxTouchPoints > 1);
        let u = r(()=>o() || s());
        let a = r(()=>i() || u());
        let l = r(()=>t(/AppleWebKit/i) && !c());
        let c = r(()=>t(/Chrome/i));
        let d = r(()=>t(/Android/i));
        let f = r(()=>t(/Firefox/i));
        e.s([
            "isAndroid",
            0,
            d,
            "isAppleDevice",
            0,
            a,
            "isChrome",
            0,
            c,
            "isFirefox",
            0,
            f,
            "isIOS",
            0,
            u,
            "isIPad",
            0,
            s,
            "isMac",
            0,
            i,
            "isWebKit",
            0,
            l
        ]);
    },
    975274,
    (e)=>{
        "use strict";
        var t = e.i(49888);
        let n = new Map;
        let r = new Set;
        function i() {
            if (typeof window === "undefined") {
                return;
            }
            function e(e) {
                return "propertyName" in e;
            }
            let i = (o)=>{
                let s = t.getEventTarget(o);
                if (!e(o) || !s) {
                    return;
                }
                let u = n.get(s);
                if (u && (u.delete(o.propertyName), u.size === 0 && (s.removeEventListener("transitioncancel", i), n.delete(s)), n.size === 0)) {
                    for (let e of r){
                        e();
                    }
                    r.clear();
                }
            };
            document.body.addEventListener("transitionrun", (r)=>{
                let o = t.getEventTarget(r);
                if (!e(r) || !o) {
                    return;
                }
                let s = n.get(o);
                if (!s) {
                    s = new Set;
                    n.set(o, s);
                    o.addEventListener("transitioncancel", i, {
                        once: true
                    });
                }
                s.add(r.propertyName);
            });
            document.body.addEventListener("transitionend", i);
        }
        typeof document !== "undefined" && (document.readyState !== "loading" ? i() : document.addEventListener("DOMContentLoaded", i));
        e.s([
            "runAfterTransition",
            0,
            (e)=>{
                requestAnimationFrame(()=>{
                    for (let [e] of n){
                        if ("isConnected" in e && !e.isConnected) {
                            n.delete(e);
                        }
                    }
                    if (n.size === 0) {
                        e();
                    } else {
                        r.add(e);
                    }
                });
            }
        ]);
    },
    49888,
    92559,
    886160,
    396387,
    (e)=>{
        "use strict";
        let t = (e)=>e?.ownerDocument ?? document;
        let n = (e)=>{
            if (e && "window" in e && e.window === e) {
                return e;
            }
            return t(e).defaultView || window;
        };
        function r(e) {
            return e !== null && typeof e === "object" && "nodeType" in e && typeof e.nodeType === "number" && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        }
        function i() {
            return false;
        }
        e.s([
            "getOwnerDocument",
            0,
            t,
            "getOwnerWindow",
            0,
            n,
            "isShadowRoot",
            0,
            r
        ], 92559);
        e.s([
            "shadowDOM",
            0,
            i
        ], 886160);
        e.s([
            "getActiveElement",
            0,
            (e = document)=>{
                if (!i()) {
                    return e.activeElement;
                }
                let e_activeElement = e.activeElement;
                while(e_activeElement && "shadowRoot" in e_activeElement && e_activeElement.shadowRoot?.activeElement){
                    e_activeElement = e_activeElement.shadowRoot.activeElement;
                }
                return e_activeElement;
            },
            "getEventTarget",
            0,
            (e)=>{
                if (i() && e.target instanceof Element && e.target.shadowRoot) {
                    if ("composedPath" in e) {
                        return e.composedPath()[0] ?? null;
                    } else if ("composedPath" in e.nativeEvent) {
                        return e.nativeEvent.composedPath()[0] ?? null;
                    }
                }
                return e.target;
            },
            "isFocusWithin",
            0,
            (e)=>{
                if (!e) {
                    return false;
                }
                let t = e.getRootNode();
                let r = n(e);
                if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) {
                    return false;
                }
                let t_activeElement = t.activeElement;
                return t_activeElement != null && e.contains(t_activeElement);
            },
            "nodeContains",
            0,
            (e, t)=>{
                if (!i()) {
                    return !!t && !!e && e.contains(t);
                }
                if (!e || !t) {
                    return false;
                }
                let n = t;
                while(n !== null){
                    if (n === e) {
                        return true;
                    }
                    n = n.tagName === "SLOT" && n.assignedSlot ? n.assignedSlot.parentNode : r(n) ? n.host : n.parentNode;
                }
                return false;
            }
        ], 49888);
        let o = typeof Element !== "undefined" && "checkVisibility" in Element.prototype;
        function s(e, t) {
            if (o) {
                return e.checkVisibility({
                    visibilityProperty: true
                }) && !e.closest("[data-react-aria-prevent-focus]");
            }
            return e.nodeName !== "#comment" && ((e)=>{
                let t = n(e);
                if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) {
                    return false;
                }
                let { display, visibility } = e.style;
                let o = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
                if (o) {
                    let { getComputedStyle } = e.ownerDocument.defaultView;
                    let { display: display_1, visibility: visibility_1 } = getComputedStyle(e);
                    o = display_1 !== "none" && visibility_1 !== "hidden" && visibility_1 !== "collapse";
                }
                return o;
            })(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName !== "DETAILS" || !t || t.nodeName === "SUMMARY" || e.hasAttribute("open")) && (!e.parentElement || s(e.parentElement, e));
        }
        let u = [
            "input:not([disabled]):not([type=hidden])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "button:not([disabled])",
            "a[href]",
            "area[href]",
            "summary",
            "iframe",
            "object",
            "embed",
            "audio[controls]",
            "video[controls]",
            '[contenteditable]:not([contenteditable^="false"])',
            "permission"
        ];
        let a = u.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
        u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
        let l = u.join(':not([hidden]):not([tabindex="-1"]),');
        function c(e) {
            let t = e;
            while(t != null){
                if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) {
                    return true;
                }
                t = t.parentElement;
            }
            return false;
        }
        e.s([
            "isFocusable",
            0,
            (e, t)=>e.matches(a) && !c(e) && (t?.skipVisibilityCheck || s(e)),
            "isTabbable",
            0,
            (e)=>e.matches(l) && s(e) && !c(e)
        ], 396387);
    },
    454881,
    (e)=>{
        "use strict";
        var t = e.i(513679);
        let n = typeof document !== "undefined" ? t.default.useLayoutEffect : ()=>{};
        e.s([
            "useLayoutEffect",
            0,
            n
        ]);
    },
    233628,
    (e)=>{
        "use strict";
        var t = e.i(454881);
        e.s([
            "useSyncRef",
            0,
            (e, n)=>{
                t.useLayoutEffect(()=>{
                    if (e && e.ref && n) {
                        e.ref.current = n.current;
                        return ()=>{
                            if (e.ref) {
                                e.ref.current = null;
                            }
                        };
                    }
                });
            }
        ]);
    }
]);
