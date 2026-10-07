;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "48e88b88-4485-5c65-c7c0-7be563037f1e";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    277877,
    620044,
    651412,
    688073,
    933525,
    67516,
    28028,
    578078,
    977598,
    510574,
    391845,
    390976,
    652218,
    (e)=>{
        "use strict";
        var t = e.i(143072);
        var i = e.i(989031);
        class n {
            constructor(e){
                this._lastTransform = "";
                this._observer = null;
                this._tickerAttached = false;
                this.updateTranslation = ()=>{
                    if (!this._canvas) {
                        return;
                    }
                    let e = this._canvas.getBoundingClientRect();
                    let width = this._canvas.width;
                    let height = this._canvas.height;
                    let n = e.width / width * this._renderer.resolution;
                    let s = e.height / height * this._renderer.resolution;
                    let e_left = e.left;
                    let e_top = e.top;
                    let a = `translate(${e_left}px, ${e_top}px) scale(${n}, ${s})`;
                    if (a !== this._lastTransform) {
                        this._domElement.style.transform = a;
                        this._lastTransform = a;
                    }
                };
                this._domElement = e.domElement;
                this._renderer = e.renderer;
                if (globalThis.OffscreenCanvas && this._renderer.canvas instanceof OffscreenCanvas) {
                    return;
                }
                this._canvas = this._renderer.canvas;
                this._attachObserver();
            }
            get canvas() {
                return this._canvas;
            }
            ensureAttached() {
                if (!this._domElement.parentNode && this._canvas.parentNode) {
                    this._canvas.parentNode.appendChild(this._domElement);
                    this.updateTranslation();
                }
            }
            _attachObserver() {
                if ("ResizeObserver" in globalThis) {
                    if (this._observer) {
                        this._observer.disconnect();
                        this._observer = null;
                    }
                    this._observer = new ResizeObserver((e)=>{
                        for (let t of e){
                            if (t.target !== this._canvas) {
                                continue;
                            }
                            let e = this.canvas.width;
                            let i = this.canvas.height;
                            let n = t.contentRect.width / e * this._renderer.resolution;
                            let s = t.contentRect.height / i * this._renderer.resolution;
                            if (this._lastScaleX !== n || this._lastScaleY !== s) {
                                this.updateTranslation();
                                this._lastScaleX = n;
                                this._lastScaleY = s;
                            }
                        }
                    });
                    this._observer.observe(this._canvas);
                } else if (!this._tickerAttached) {
                    i.Ticker.shared.add(this.updateTranslation, this, t.UPDATE_PRIORITY.HIGH);
                }
            }
            destroy() {
                if (this._observer) {
                    this._observer.disconnect();
                    this._observer = null;
                } else if (this._tickerAttached) {
                    i.Ticker.shared.remove(this.updateTranslation);
                }
                this._domElement = null;
                this._renderer = null;
                this._canvas = null;
                this._tickerAttached = false;
                this._lastTransform = "";
                this._lastScaleX = null;
                this._lastScaleY = null;
            }
        }
        e.s([
            "CanvasObserver",
            0,
            n
        ], 620044);
        var s = e.i(37554);
        class o {
            constructor(e){
                this.bubbles = true;
                this.cancelBubble = true;
                this.cancelable = false;
                this.composed = false;
                this.defaultPrevented = false;
                this.eventPhase = o.prototype.NONE;
                this.propagationStopped = false;
                this.propagationImmediatelyStopped = false;
                this.layer = new s.Point;
                this.page = new s.Point;
                this.NONE = 0;
                this.CAPTURING_PHASE = 1;
                this.AT_TARGET = 2;
                this.BUBBLING_PHASE = 3;
                this.manager = e;
            }
            get layerX() {
                return this.layer.x;
            }
            get layerY() {
                return this.layer.y;
            }
            get pageX() {
                return this.page.x;
            }
            get pageY() {
                return this.page.y;
            }
            get data() {
                return this;
            }
            composedPath() {
                if (this.manager && (!this.path || this.path[this.path.length - 1] !== this.target)) {
                    this.path = this.target ? this.manager.propagationPath(this.target) : [];
                }
                return this.path;
            }
            initEvent(e, t, i) {
                throw Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
            }
            initUIEvent(e, t, i, n, s) {
                throw Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
            }
            preventDefault() {
                if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) {
                    this.nativeEvent.preventDefault();
                }
                this.defaultPrevented = true;
            }
            stopImmediatePropagation() {
                this.propagationImmediatelyStopped = true;
            }
            stopPropagation() {
                this.propagationStopped = true;
            }
        }
        e.s([
            "FederatedEvent",
            0,
            o
        ], 651412);
        var r = e.i(78278);
        var a = /iPhone/i;
        var h = /iPod/i;
        var l = /iPad/i;
        var d = /\biOS-universal(?:.+)Mac\b/i;
        var c = /\bAndroid(?:.+)Mobile\b/i;
        var p = /Android/i;
        var u = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
        var v = /Silk/i;
        var m = /Windows Phone/i;
        var g = /\bWindows(?:.+)ARM\b/i;
        var _ = /BlackBerry/i;
        var y = /BB10/i;
        var b = /Opera Mini/i;
        var E = /\b(CriOS|Chrome)(?:.+)Mobile/i;
        var f = /Mobile(?:.+)Firefox\b/i;
        var T = (e)=>e !== undefined && e.platform === "MacIntel" && typeof e.maxTouchPoints === "number" && e.maxTouchPoints > 1 && typeof MSStream === "undefined";
        function P(e) {
            let t;
            let i = {
                userAgent: "",
                platform: "",
                maxTouchPoints: 0
            };
            if (!e && typeof navigator !== "undefined") {
                i = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    maxTouchPoints: navigator.maxTouchPoints || 0
                };
            } else if (typeof e === "string") {
                i.userAgent = e;
            } else if (e && e.userAgent) {
                i = {
                    userAgent: e.userAgent,
                    platform: e.platform,
                    maxTouchPoints: e.maxTouchPoints || 0
                };
            }
            let i_userAgent = i.userAgent;
            let s = i_userAgent.split("[FBAN");
            if (s[1] !== undefined) {
                i_userAgent = s[0];
            }
            if ((s = i_userAgent.split("Twitter"))[1] !== undefined) {
                i_userAgent = s[0];
            }
            t = i_userAgent;
            const o = (e)=>e.test(t);
            const r = {
                apple: {
                    phone: o(a) && !o(m),
                    ipod: o(h),
                    tablet: !o(a) && (o(l) || T(i)) && !o(m),
                    universal: o(d),
                    device: (o(a) || o(h) || o(l) || o(d) || T(i)) && !o(m)
                },
                amazon: {
                    phone: o(u),
                    tablet: !o(u) && o(v),
                    device: o(u) || o(v)
                },
                android: {
                    phone: !o(m) && o(u) || !o(m) && o(c),
                    tablet: !o(m) && !o(u) && !o(c) && (o(v) || o(p)),
                    device: !o(m) && (o(u) || o(v) || o(c) || o(p)) || o(/\bokhttp\b/i)
                },
                windows: {
                    phone: o(m),
                    tablet: o(g),
                    device: o(m) || o(g)
                },
                other: {
                    blackberry: o(_),
                    blackberry10: o(y),
                    opera: o(b),
                    firefox: o(f),
                    chrome: o(E),
                    device: o(_) || o(y) || o(b) || o(f) || o(E)
                },
                any: false,
                phone: false,
                tablet: false
            };
            r.any = r.apple.device || r.android.device || r.windows.device || r.other.device;
            r.phone = r.apple.phone || r.android.phone || r.windows.phone;
            r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet;
            return r;
        }
        let w = (P.default ?? P)(globalThis.navigator);
        e.s([
            "isMobile",
            0,
            w
        ], 688073);
        var M = e.i(113281);
        let A = class e {
            constructor(e, t = w){
                this._mobileInfo = t;
                this.debug = false;
                this._activateOnTab = true;
                this._deactivateOnMouseMove = true;
                this._isActive = false;
                this._isMobileAccessibility = false;
                this._div = null;
                this._pools = {};
                this._renderId = 0;
                this._children = [];
                this._androidUpdateCount = 0;
                this._androidUpdateFrequency = 500;
                this._isRunningTests = false;
                this._boundOnKeyDown = this._onKeyDown.bind(this);
                this._boundOnMouseMove = this._onMouseMove.bind(this);
                this._hookDiv = null;
                if (t.tablet || t.phone) {
                    this._createTouchHook();
                }
                this._renderer = e;
            }
            get isActive() {
                return this._isActive;
            }
            get isMobileAccessibility() {
                return this._isMobileAccessibility;
            }
            get hookDiv() {
                return this._hookDiv;
            }
            get div() {
                return this._div;
            }
            _createTouchHook() {
                let e = document.createElement("button");
                e.style.width = "1px";
                e.style.height = "1px";
                e.style.position = "absolute";
                e.style.top = "-1000px";
                e.style.left = "-1000px";
                e.style.zIndex = "2";
                e.style.backgroundColor = "#FF0000";
                e.title = "select to enable accessibility for this content";
                e.addEventListener("focus", ()=>{
                    this._isMobileAccessibility = true;
                    this._activate();
                    this._destroyTouchHook();
                });
                document.body.appendChild(e);
                this._hookDiv = e;
            }
            _destroyTouchHook() {
                if (this._hookDiv) {
                    document.body.removeChild(this._hookDiv);
                    this._hookDiv = null;
                }
            }
            _activate() {
                if (this._isActive) {
                    return;
                }
                this._isActive = true;
                if (!this._div) {
                    this._div = document.createElement("div");
                    this._div.style.position = "absolute";
                    this._div.style.top = "0px";
                    this._div.style.left = "0px";
                    this._div.style.pointerEvents = "none";
                    this._div.style.zIndex = "2";
                    this._canvasObserver = new n({
                        domElement: this._div,
                        renderer: this._renderer
                    });
                }
                if (this._activateOnTab) {
                    globalThis.addEventListener("keydown", this._boundOnKeyDown, false);
                }
                if (this._deactivateOnMouseMove) {
                    globalThis.document.addEventListener("mousemove", this._boundOnMouseMove, true);
                }
                let canvas = this._renderer.view.canvas;
                if (canvas.parentNode) {
                    this._canvasObserver.ensureAttached();
                    this._initAccessibilitySetup();
                } else {
                    let t = new MutationObserver(()=>{
                        if (canvas.parentNode) {
                            t.disconnect();
                            this._canvasObserver.ensureAttached();
                            this._initAccessibilitySetup();
                        }
                    });
                    t.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                }
            }
            _initAccessibilitySetup() {
                this._renderer.runners.postrender.add(this);
                if (this._renderer.lastObjectRendered) {
                    this._updateAccessibleObjects(this._renderer.lastObjectRendered);
                }
            }
            _deactivate() {
                if (this._isActive && !this._isMobileAccessibility) {
                    for (let e of (this._isActive = false, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, true), this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, false), this._renderer.runners.postrender.remove(this), this._children)){
                        if (e._accessibleDiv?.parentNode) {
                            e._accessibleDiv.parentNode.removeChild(e._accessibleDiv);
                            e._accessibleDiv = null;
                        }
                        e._accessibleActive = false;
                    }
                    for(let e in this._pools){
                        this._pools[e].forEach((e)=>{
                            if (e.parentNode) {
                                e.parentNode.removeChild(e);
                            }
                        });
                        delete this._pools[e];
                    }
                    if (this._div?.parentNode) {
                        this._div.parentNode.removeChild(this._div);
                    }
                    this._pools = {};
                    this._children = [];
                }
            }
            _updateAccessibleObjects(e) {
                if (!e.visible || !e.accessibleChildren) {
                    return;
                }
                if (e.accessible) {
                    if (!e._accessibleActive) {
                        this._addChild(e);
                    }
                    e._renderId = this._renderId;
                }
                let e_children = e.children;
                if (e_children) {
                    for(let e = 0; e < e_children.length; e++){
                        this._updateAccessibleObjects(e_children[e]);
                    }
                }
            }
            init(t) {
                let i = {
                    accessibilityOptions: {
                        ...e.defaultOptions,
                        ...t?.accessibilityOptions || {}
                    }
                };
                this.debug = i.accessibilityOptions.debug;
                this._activateOnTab = i.accessibilityOptions.activateOnTab;
                this._deactivateOnMouseMove = i.accessibilityOptions.deactivateOnMouseMove;
                if (i.accessibilityOptions.enabledByDefault) {
                    this._activate();
                }
                this._renderer.runners.postrender.remove(this);
            }
            postrender() {
                let e = performance.now();
                if (this._mobileInfo.android.device && e < this._androidUpdateCount || (this._androidUpdateCount = e + this._androidUpdateFrequency, (!this._renderer.renderingToScreen || !this._renderer.view.canvas) && !this._isRunningTests)) {
                    return;
                }
                let t = new Set;
                if (this._renderer.lastObjectRendered) {
                    for (let e of (this._updateAccessibleObjects(this._renderer.lastObjectRendered), this._children)){
                        if (e._renderId === this._renderId) {
                            t.add(this._children.indexOf(e));
                        }
                    }
                }
                for(let e = this._children.length - 1; e >= 0; e--){
                    let i = this._children[e];
                    if (!t.has(e)) {
                        if (i._accessibleDiv && i._accessibleDiv.parentNode) {
                            i._accessibleDiv.parentNode.removeChild(i._accessibleDiv);
                            this._getPool(i.accessibleType).push(i._accessibleDiv);
                            i._accessibleDiv = null;
                        }
                        i._accessibleActive = false;
                        M.removeItems(this._children, e, 1);
                    }
                }
                if (this._renderer.renderingToScreen) {
                    this._canvasObserver.ensureAttached();
                }
                for(let e = 0; e < this._children.length; e++){
                    let t = this._children[e];
                    if (!t._accessibleActive || !t._accessibleDiv) {
                        continue;
                    }
                    let i = t._accessibleDiv;
                    let n = t.hitArea || t.getBounds().rectangle;
                    if (t.hitArea) {
                        let e = t.worldTransform;
                        i.style.left = `${e.tx + n.x * e.a}px`;
                        i.style.top = `${e.ty + n.y * e.d}px`;
                        i.style.width = `${n.width * e.a}px`;
                        i.style.height = `${n.height * e.d}px`;
                    } else {
                        this._capHitArea(n);
                        i.style.left = `${n.x}px`;
                        i.style.top = `${n.y}px`;
                        i.style.width = `${n.width}px`;
                        i.style.height = `${n.height}px`;
                    }
                }
                this._renderId++;
            }
            _updateDebugHTML(e) {
                e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`;
            }
            _capHitArea(e) {
                if (e.x < 0) {
                    e.width += e.x;
                    e.x = 0;
                }
                if (e.y < 0) {
                    e.height += e.y;
                    e.y = 0;
                }
                let { width, height } = this._renderer;
                if (e.x + e.width > width) {
                    e.width = width - e.x;
                }
                if (e.y + e.height > height) {
                    e.height = height - e.y;
                }
            }
            _addChild(e) {
                let t = this._getPool(e.accessibleType).pop();
                if (t) {
                    t.innerHTML = "";
                    t.removeAttribute("title");
                    t.removeAttribute("aria-label");
                    t.tabIndex = 0;
                } else {
                    if (e.accessibleType === "button") {
                        t = document.createElement("button");
                    } else {
                        (t = document.createElement(e.accessibleType)).style.cssText = `
                        color: transparent;
                        pointer-events: none;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        outline: 0;
                        background: transparent;
                        box-sizing: border-box;
                        user-select: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                    `;
                        if (e.accessibleText) {
                            t.innerText = e.accessibleText;
                        }
                    }
                    t.style.width = "100px";
                    t.style.height = "100px";
                    t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent";
                    t.style.position = "absolute";
                    t.style.zIndex = "2";
                    t.style.borderStyle = "none";
                    if (navigator.userAgent.toLowerCase().includes("chrome")) {
                        t.setAttribute("aria-live", "off");
                    } else {
                        t.setAttribute("aria-live", "polite");
                    }
                    if (navigator.userAgent.match(/rv:.*Gecko\//)) {
                        t.setAttribute("aria-relevant", "additions");
                    } else {
                        t.setAttribute("aria-relevant", "text");
                    }
                    t.addEventListener("click", this._onClick.bind(this));
                    t.addEventListener("focus", this._onFocus.bind(this));
                    t.addEventListener("focusout", this._onFocusOut.bind(this));
                }
                t.style.pointerEvents = e.accessiblePointerEvents;
                t.type = e.accessibleType;
                if (e.accessibleTitle && e.accessibleTitle !== null) {
                    t.title = e.accessibleTitle;
                } else if (!(e.accessibleHint && e.accessibleHint !== null)) {
                    t.title = `container ${e.tabIndex}`;
                }
                if (e.accessibleHint && e.accessibleHint !== null) {
                    t.setAttribute("aria-label", e.accessibleHint);
                }
                if (e.interactive) {
                    t.tabIndex = e.tabIndex;
                } else {
                    t.tabIndex = 0;
                }
                if (this.debug) {
                    this._updateDebugHTML(t);
                }
                e._accessibleActive = true;
                e._accessibleDiv = t;
                t.container = e;
                this._children.push(e);
                this._div.appendChild(e._accessibleDiv);
            }
            _dispatchEvent(e, t) {
                let { container } = e.target;
                let rootBoundary = this._renderer.events.rootBoundary;
                let s = Object.assign(new o(rootBoundary), {
                    target: container
                });
                rootBoundary.rootTarget = this._renderer.lastObjectRendered;
                t.forEach((e)=>rootBoundary.dispatchEvent(s, e));
            }
            _onClick(e) {
                this._dispatchEvent(e, [
                    "click",
                    "pointertap",
                    "tap"
                ]);
            }
            _onFocus(e) {
                if (!e.target.getAttribute("aria-live")) {
                    e.target.setAttribute("aria-live", "assertive");
                }
                this._dispatchEvent(e, [
                    "mouseover"
                ]);
            }
            _onFocusOut(e) {
                if (!e.target.getAttribute("aria-live")) {
                    e.target.setAttribute("aria-live", "polite");
                }
                this._dispatchEvent(e, [
                    "mouseout"
                ]);
            }
            _onKeyDown(e) {
                if (e.keyCode === 9 && this._activateOnTab) {
                    this._activate();
                }
            }
            _onMouseMove(e) {
                if (e.movementX !== 0 || e.movementY !== 0) {
                    this._deactivate();
                }
            }
            destroy() {
                this._deactivate();
                this._destroyTouchHook();
                this._canvasObserver?.destroy();
                this._canvasObserver = null;
                this._div = null;
                this._pools = null;
                this._children = null;
                this._renderer = null;
                this._hookDiv = null;
                globalThis.removeEventListener("keydown", this._boundOnKeyDown);
                this._boundOnKeyDown = null;
                globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, true);
                this._boundOnMouseMove = null;
            }
            setAccessibilityEnabled(e) {
                if (e) {
                    this._activate();
                } else {
                    this._deactivate();
                }
            }
            _getPool(e) {
                if (!this._pools[e]) {
                    this._pools[e] = [];
                }
                return this._pools[e];
            }
        };
        A.extension = {
            type: [
                r.ExtensionType.WebGLSystem,
                r.ExtensionType.WebGPUSystem
            ],
            name: "accessibility"
        };
        A.defaultOptions = {
            enabledByDefault: false,
            debug: false,
            activateOnTab: true,
            deactivateOnMouseMove: true
        };
        e.s([
            "AccessibilitySystem",
            0,
            A
        ], 277877);
        e.s([
            "accessibilityTarget",
            0,
            {
                accessible: false,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                accessibleType: "button",
                accessibleText: null,
                accessiblePointerEvents: "auto",
                accessibleChildren: true,
                _accessibleActive: false,
                _accessibleDiv: null,
                _renderId: -1
            }
        ], 933525);
        class O {
            constructor(e){
                this._attachedDomElements = [];
                this._renderer = e;
                this._renderer.runners.postrender.add(this);
                this._renderer.runners.init.add(this);
                this._domElement = document.createElement("div");
                this._domElement.style.position = "absolute";
                this._domElement.style.top = "0";
                this._domElement.style.left = "0";
                this._domElement.style.pointerEvents = "none";
                this._domElement.style.zIndex = "1000";
            }
            init() {
                this._canvasObserver = new n({
                    domElement: this._domElement,
                    renderer: this._renderer
                });
            }
            addRenderable(e, t) {
                if (!this._attachedDomElements.includes(e)) {
                    this._attachedDomElements.push(e);
                }
            }
            updateRenderable(e) {}
            validateRenderable(e) {
                return true;
            }
            postrender() {
                let _attachedDomElements = this._attachedDomElements;
                if (_attachedDomElements.length === 0) {
                    return void this._domElement.remove();
                }
                this._canvasObserver.ensureAttached();
                for(let t = 0; t < _attachedDomElements.length; t++){
                    let _attachedDomElement = _attachedDomElements[t];
                    let n = _attachedDomElement.element;
                    if (!_attachedDomElement.parent || _attachedDomElement.globalDisplayStatus < 7) {
                        n?.remove();
                        _attachedDomElements.splice(t, 1);
                        t--;
                    } else {
                        if (!this._domElement.contains(n)) {
                            n.style.position = "absolute";
                            n.style.pointerEvents = "auto";
                            this._domElement.appendChild(n);
                        }
                        let e = _attachedDomElement.worldTransform;
                        let t = _attachedDomElement._anchor;
                        let s = _attachedDomElement.width * t.x;
                        let o = _attachedDomElement.height * t.y;
                        n.style.transformOrigin = `${s}px ${o}px`;
                        n.style.transform = `matrix(${e.a}, ${e.b}, ${e.c}, ${e.d}, ${e.tx - s}, ${e.ty - o})`;
                        n.style.opacity = _attachedDomElement.groupAlpha.toString();
                    }
                }
            }
            destroy() {
                this._renderer.runners.postrender.remove(this);
                for(let e = 0; e < this._attachedDomElements.length; e++){
                    let _attachedDomElement = this._attachedDomElements[e];
                    _attachedDomElement.element?.remove();
                }
                this._attachedDomElements.length = 0;
                this._domElement.remove();
                this._canvasObserver.destroy();
                this._renderer = null;
            }
        }
        O.extension = {
            type: [
                r.ExtensionType.WebGLPipes,
                r.ExtensionType.WebGPUPipes,
                r.ExtensionType.CanvasPipes
            ],
            name: "dom"
        };
        e.s([
            "DOMPipe",
            0,
            O
        ], 67516);
        var D = e.i(263524);
        var x = e.i(562140);
        let I = new class {
            constructor(){
                this.interactionFrequency = 10;
                this._deltaTime = 0;
                this._didMove = false;
                this._tickerAdded = false;
                this._pauseUpdate = true;
            }
            init(e) {
                this.removeTickerListener();
                this.events = e;
                this.interactionFrequency = 10;
                this._deltaTime = 0;
                this._didMove = false;
                this._tickerAdded = false;
                this._pauseUpdate = true;
            }
            get pauseUpdate() {
                return this._pauseUpdate;
            }
            set pauseUpdate(e) {
                this._pauseUpdate = e;
            }
            addTickerListener() {
                if (!this._tickerAdded && this.domElement) {
                    i.Ticker.system.add(this._tickerUpdate, this, t.UPDATE_PRIORITY.INTERACTION);
                    this._tickerAdded = true;
                }
            }
            removeTickerListener() {
                if (this._tickerAdded) {
                    i.Ticker.system.remove(this._tickerUpdate, this);
                    this._tickerAdded = false;
                }
            }
            pointerMoved() {
                this._didMove = true;
            }
            _update() {
                if (!this.domElement || this._pauseUpdate) {
                    return;
                }
                if (this._didMove) {
                    this._didMove = false;
                    return;
                }
                let _rootPointerEvent = this.events._rootPointerEvent;
                if (!(this.events.supportsTouchEvents && _rootPointerEvent.pointerType === "touch")) {
                    globalThis.document.dispatchEvent(this.events.supportsPointerEvents ? new PointerEvent("pointermove", {
                        clientX: _rootPointerEvent.clientX,
                        clientY: _rootPointerEvent.clientY,
                        pointerType: _rootPointerEvent.pointerType,
                        pointerId: _rootPointerEvent.pointerId
                    }) : new MouseEvent("mousemove", {
                        clientX: _rootPointerEvent.clientX,
                        clientY: _rootPointerEvent.clientY
                    }));
                }
            }
            _tickerUpdate(e) {
                this._deltaTime += e.deltaTime;
                if (!(this._deltaTime < this.interactionFrequency)) {
                    this._deltaTime = 0;
                    this._update();
                }
            }
            destroy() {
                this.removeTickerListener();
                this.events = null;
                this.domElement = null;
                this._deltaTime = 0;
                this._didMove = false;
                this._tickerAdded = false;
                this._pauseUpdate = true;
            }
        };
        e.s([
            "EventsTicker",
            0,
            I
        ], 28028);
        class k extends o {
            constructor(){
                super(...arguments);
                this.client = new s.Point;
                this.movement = new s.Point;
                this.offset = new s.Point;
                this.global = new s.Point;
                this.screen = new s.Point;
            }
            get clientX() {
                return this.client.x;
            }
            get clientY() {
                return this.client.y;
            }
            get x() {
                return this.clientX;
            }
            get y() {
                return this.clientY;
            }
            get movementX() {
                return this.movement.x;
            }
            get movementY() {
                return this.movement.y;
            }
            get offsetX() {
                return this.offset.x;
            }
            get offsetY() {
                return this.offset.y;
            }
            get globalX() {
                return this.global.x;
            }
            get globalY() {
                return this.global.y;
            }
            get screenX() {
                return this.screen.x;
            }
            get screenY() {
                return this.screen.y;
            }
            getLocalPosition(e, t, i) {
                return e.worldTransform.applyInverse(i || this.global, t);
            }
            getModifierState(e) {
                return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
            }
            initMouseEvent(e, t, i, n, s, o, r, a, h, l, d, c, p, u, v) {
                throw Error("Method not implemented.");
            }
        }
        e.s([
            "FederatedMouseEvent",
            0,
            k
        ], 578078);
        class L extends k {
            constructor(){
                super(...arguments);
                this.width = 0;
                this.height = 0;
                this.isPrimary = false;
            }
            getCoalescedEvents() {
                if (this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove") {
                    return [
                        this
                    ];
                }
                return [];
            }
            getPredictedEvents() {
                throw Error("getPredictedEvents is not supported!");
            }
        }
        e.s([
            "FederatedPointerEvent",
            0,
            L
        ], 977598);
        class B extends k {
            constructor(){
                super(...arguments);
                this.DOM_DELTA_PIXEL = 0;
                this.DOM_DELTA_LINE = 1;
                this.DOM_DELTA_PAGE = 2;
            }
        }
        B.DOM_DELTA_PIXEL = 0;
        B.DOM_DELTA_LINE = 1;
        B.DOM_DELTA_PAGE = 2;
        e.s([
            "FederatedWheelEvent",
            0,
            B
        ], 510574);
        let S = new s.Point;
        let C = new s.Point;
        class U {
            constructor(e){
                this.dispatch = new D.default;
                this.moveOnAll = false;
                this.enableGlobalMoveEvents = true;
                this.mappingState = {
                    trackingData: {}
                };
                this.eventPool = new Map;
                this._allInteractiveElements = [];
                this._hitElements = [];
                this._isPointerMoveEvent = false;
                this.rootTarget = e;
                this.hitPruneFn = this.hitPruneFn.bind(this);
                this.hitTestFn = this.hitTestFn.bind(this);
                this.mapPointerDown = this.mapPointerDown.bind(this);
                this.mapPointerMove = this.mapPointerMove.bind(this);
                this.mapPointerOut = this.mapPointerOut.bind(this);
                this.mapPointerOver = this.mapPointerOver.bind(this);
                this.mapPointerUp = this.mapPointerUp.bind(this);
                this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this);
                this.mapWheel = this.mapWheel.bind(this);
                this.mappingTable = {};
                this.addEventMapping("pointerdown", this.mapPointerDown);
                this.addEventMapping("pointermove", this.mapPointerMove);
                this.addEventMapping("pointerout", this.mapPointerOut);
                this.addEventMapping("pointerleave", this.mapPointerOut);
                this.addEventMapping("pointerover", this.mapPointerOver);
                this.addEventMapping("pointerup", this.mapPointerUp);
                this.addEventMapping("pointerupoutside", this.mapPointerUpOutside);
                this.addEventMapping("wheel", this.mapWheel);
            }
            addEventMapping(e, fn) {
                if (!this.mappingTable[e]) {
                    this.mappingTable[e] = [];
                }
                this.mappingTable[e].push({
                    fn,
                    priority: 0
                });
                this.mappingTable[e].sort((e, t)=>e.priority - t.priority);
            }
            dispatchEvent(e, t) {
                e.propagationStopped = false;
                e.propagationImmediatelyStopped = false;
                this.propagate(e, t);
                this.dispatch.emit(t || e.type, e);
            }
            mapEvent(e) {
                if (!this.rootTarget) {
                    return;
                }
                let t = this.mappingTable[e.type];
                if (t) {
                    for(let i = 0, n = t.length; i < n; i++){
                        t[i].fn(e);
                    }
                } else {
                    x.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
                }
            }
            hitTest(e, t) {
                I.pauseUpdate = true;
                let i = this[this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive"](this.rootTarget, this.rootTarget.eventMode, S.set(e, t), this.hitTestFn, this.hitPruneFn);
                return i && i[0];
            }
            propagate(e, t) {
                if (!e.target) {
                    return;
                }
                let i = e.composedPath();
                e.eventPhase = e.CAPTURING_PHASE;
                for(let n = 0, s = i.length - 1; n < s; n++){
                    e.currentTarget = i[n];
                    this.notifyTarget(e, t);
                    if (e.propagationStopped || e.propagationImmediatelyStopped) {
                        return;
                    }
                }
                e.eventPhase = e.AT_TARGET;
                e.currentTarget = e.target;
                this.notifyTarget(e, t);
                if (!e.propagationStopped && !e.propagationImmediatelyStopped) {
                    e.eventPhase = e.BUBBLING_PHASE;
                    for(let n = i.length - 2; n >= 0; n--){
                        e.currentTarget = i[n];
                        this.notifyTarget(e, t);
                        if (e.propagationStopped || e.propagationImmediatelyStopped) {
                            return;
                        }
                    }
                }
            }
            all(e, t, i = this._allInteractiveElements) {
                if (i.length === 0) {
                    return;
                }
                e.eventPhase = e.BUBBLING_PHASE;
                let n = Array.isArray(t) ? t : [
                    t
                ];
                for(let t = i.length - 1; t >= 0; t--){
                    n.forEach((n)=>{
                        e.currentTarget = i[t];
                        this.notifyTarget(e, n);
                    });
                }
            }
            propagationPath(e) {
                let t = [
                    e
                ];
                for(let i = 0; i < 2048 && e !== this.rootTarget && e.parent; i++){
                    if (!e.parent) {
                        throw Error("Cannot find propagation path to disconnected target");
                    }
                    t.push(e.parent);
                    e = e.parent;
                }
                t.reverse();
                return t;
            }
            hitTestMoveRecursive(e, t, i, n, s, o = false) {
                let r = false;
                if (this._interactivePrune(e)) {
                    return null;
                }
                if (e.eventMode === "dynamic" || t === "dynamic") {
                    I.pauseUpdate = false;
                }
                if (e.interactiveChildren && e.children) {
                    let a = e.children;
                    for(let h = a.length - 1; h >= 0; h--){
                        let l = a[h];
                        let d = this.hitTestMoveRecursive(l, this._isInteractive(t) ? t : l.eventMode, i, n, s, o || s(e, i));
                        if (d) {
                            if (d.length > 0 && !d[d.length - 1].parent) {
                                continue;
                            }
                            let t = e.isInteractive();
                            if (d.length > 0 || t) {
                                if (t) {
                                    this._allInteractiveElements.push(e);
                                }
                                d.push(e);
                            }
                            if (this._hitElements.length === 0) {
                                this._hitElements = d;
                            }
                            r = true;
                        }
                    }
                }
                let a = this._isInteractive(t);
                let h = e.isInteractive();
                if (h && h) {
                    this._allInteractiveElements.push(e);
                }
                if (o || this._hitElements.length > 0) {
                    return null;
                }
                if (r) {
                    return this._hitElements;
                }
                if (a && !s(e, i) && n(e, i)) {
                    if (h) {
                        return [
                            e
                        ];
                    }
                    return [];
                }
                return null;
            }
            hitTestRecursive(e, t, i, n, s) {
                if (this._interactivePrune(e) || s(e, i)) {
                    return null;
                }
                if (e.eventMode === "dynamic" || t === "dynamic") {
                    I.pauseUpdate = false;
                }
                if (e.interactiveChildren && e.children) {
                    let o = e.children;
                    for(let r = o.length - 1; r >= 0; r--){
                        let a = o[r];
                        let h = this.hitTestRecursive(a, this._isInteractive(t) ? t : a.eventMode, i, n, s);
                        if (h) {
                            if (h.length > 0 && !h[h.length - 1].parent) {
                                continue;
                            }
                            let t = e.isInteractive();
                            if (h.length > 0 || t) {
                                h.push(e);
                            }
                            return h;
                        }
                    }
                }
                let o = this._isInteractive(t);
                let r = e.isInteractive();
                if (o && n(e, i)) {
                    if (r) {
                        return [
                            e
                        ];
                    }
                    return [];
                }
                return null;
            }
            _isInteractive(e) {
                return e === "static" || e === "dynamic";
            }
            _interactivePrune(e) {
                return !e || !e.visible || !e.renderable || !e.measurable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren;
            }
            hitPruneFn(e, t) {
                if (e.hitArea && (e.worldTransform.applyInverse(t, C), !e.hitArea.contains(C.x, C.y))) {
                    return true;
                }
                if (e.effects && e.effects.length) {
                    for(let i = 0; i < e.effects.length; i++){
                        let effect = e.effects[i];
                        if (effect.containsPoint && !effect.containsPoint(t, this.hitTestFn)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            hitTestFn(e, t) {
                return !!e.hitArea || !!e?.containsPoint && (e.worldTransform.applyInverse(t, C), e.containsPoint(C));
            }
            notifyTarget(e, t) {
                if (!e.currentTarget.isInteractive()) {
                    return;
                }
                t ??= e.type;
                let i = `on${t}`;
                e.currentTarget[i]?.(e);
                let n = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${t}capture` : t;
                this._notifyListeners(e, n);
                if (e.eventPhase === e.AT_TARGET) {
                    this._notifyListeners(e, t);
                }
            }
            mapPointerDown(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                let t = this.createPointerEvent(e);
                this.dispatchEvent(t, "pointerdown");
                if (t.pointerType === "touch") {
                    this.dispatchEvent(t, "touchstart");
                } else if (t.pointerType === "mouse" || t.pointerType === "pen") {
                    let e = t.button === 2;
                    this.dispatchEvent(t, e ? "rightdown" : "mousedown");
                }
                this.trackingData(e.pointerId).pressTargetsByButton[e.button] = t.composedPath();
                this.freeEvent(t);
            }
            mapPointerMove(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                this._allInteractiveElements.length = 0;
                this._hitElements.length = 0;
                this._isPointerMoveEvent = true;
                let t = this.createPointerEvent(e);
                this._isPointerMoveEvent = false;
                let i = t.pointerType === "mouse" || t.pointerType === "pen";
                let n = this.trackingData(e.pointerId);
                let s = this.findMountedTarget(n.overTargets);
                if (n.overTargets?.length > 0 && s !== t.target) {
                    let n = e.type === "mousemove" ? "mouseout" : "pointerout";
                    let o = this.createPointerEvent(e, n, s);
                    this.dispatchEvent(o, "pointerout");
                    if (i) {
                        this.dispatchEvent(o, "mouseout");
                    }
                    if (!t.composedPath().includes(s)) {
                        let n = this.createPointerEvent(e, "pointerleave", s);
                        for(n.eventPhase = n.AT_TARGET; n.target && !t.composedPath().includes(n.target);){
                            n.currentTarget = n.target;
                            this.notifyTarget(n);
                            if (i) {
                                this.notifyTarget(n, "mouseleave");
                            }
                            n.target = n.target.parent;
                        }
                        this.freeEvent(n);
                    }
                    this.freeEvent(o);
                }
                if (s !== t.target) {
                    let n = e.type === "mousemove" ? "mouseover" : "pointerover";
                    let o = this.clonePointerEvent(t, n);
                    this.dispatchEvent(o, "pointerover");
                    if (i) {
                        this.dispatchEvent(o, "mouseover");
                    }
                    let r = s?.parent;
                    while(r && r !== this.rootTarget.parent && r !== t.target){
                        r = r.parent;
                    }
                    if (!r || r === this.rootTarget.parent) {
                        let e = this.clonePointerEvent(t, "pointerenter");
                        for(e.eventPhase = e.AT_TARGET; e.target && e.target !== s && e.target !== this.rootTarget.parent;){
                            e.currentTarget = e.target;
                            this.notifyTarget(e);
                            if (i) {
                                this.notifyTarget(e, "mouseenter");
                            }
                            e.target = e.target.parent;
                        }
                        this.freeEvent(e);
                    }
                    this.freeEvent(o);
                }
                let o = [];
                let r = this.enableGlobalMoveEvents ?? true;
                if (this.moveOnAll) {
                    o.push("pointermove");
                } else {
                    this.dispatchEvent(t, "pointermove");
                }
                if (r) {
                    o.push("globalpointermove");
                }
                t.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(t, "touchmove"), r && o.push("globaltouchmove"));
                if (i) {
                    if (this.moveOnAll) {
                        o.splice(1, 0, "mousemove");
                    } else {
                        this.dispatchEvent(t, "mousemove");
                    }
                    if (r) {
                        o.push("globalmousemove");
                    }
                    this.cursor = t.target?.cursor;
                }
                if (o.length > 0) {
                    this.all(t, o);
                }
                this._allInteractiveElements.length = 0;
                this._hitElements.length = 0;
                n.overTargets = t.composedPath();
                this.freeEvent(t);
            }
            mapPointerOver(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                let t = this.trackingData(e.pointerId);
                let i = this.createPointerEvent(e);
                let n = i.pointerType === "mouse" || i.pointerType === "pen";
                this.dispatchEvent(i, "pointerover");
                if (n) {
                    this.dispatchEvent(i, "mouseover");
                }
                if (i.pointerType === "mouse") {
                    this.cursor = i.target?.cursor;
                }
                let s = this.clonePointerEvent(i, "pointerenter");
                for(s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent;){
                    s.currentTarget = s.target;
                    this.notifyTarget(s);
                    if (n) {
                        this.notifyTarget(s, "mouseenter");
                    }
                    s.target = s.target.parent;
                }
                t.overTargets = i.composedPath();
                this.freeEvent(i);
                this.freeEvent(s);
            }
            mapPointerOut(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                let t = this.trackingData(e.pointerId);
                if (t.overTargets) {
                    let i = e.pointerType === "mouse" || e.pointerType === "pen";
                    let n = this.findMountedTarget(t.overTargets);
                    let s = this.createPointerEvent(e, "pointerout", n);
                    this.dispatchEvent(s);
                    if (i) {
                        this.dispatchEvent(s, "mouseout");
                    }
                    let o = this.createPointerEvent(e, "pointerleave", n);
                    for(o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;){
                        o.currentTarget = o.target;
                        this.notifyTarget(o);
                        if (i) {
                            this.notifyTarget(o, "mouseleave");
                        }
                        o.target = o.target.parent;
                    }
                    t.overTargets = null;
                    this.freeEvent(s);
                    this.freeEvent(o);
                }
                this.cursor = null;
            }
            mapPointerUp(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                let timeStamp = performance.now();
                let i = this.createPointerEvent(e);
                this.dispatchEvent(i, "pointerup");
                if (i.pointerType === "touch") {
                    this.dispatchEvent(i, "touchend");
                } else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                    let e = i.button === 2;
                    this.dispatchEvent(i, e ? "rightup" : "mouseup");
                }
                let n = this.trackingData(e.pointerId);
                let s = this.findMountedTarget(n.pressTargetsByButton[e.button]);
                let o = s;
                if (s && !i.composedPath().includes(s)) {
                    let t = s;
                    while(t && !i.composedPath().includes(t)){
                        i.currentTarget = t;
                        this.notifyTarget(i, "pointerupoutside");
                        if (i.pointerType === "touch") {
                            this.notifyTarget(i, "touchendoutside");
                        } else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                            let e = i.button === 2;
                            this.notifyTarget(i, e ? "rightupoutside" : "mouseupoutside");
                        }
                        t = t.parent;
                    }
                    delete n.pressTargetsByButton[e.button];
                    o = t;
                }
                if (o) {
                    let s = this.clonePointerEvent(i, "click");
                    s.target = o;
                    s.path = null;
                    if (!n.clicksByButton[e.button]) {
                        n.clicksByButton[e.button] = {
                            clickCount: 0,
                            target: s.target,
                            timeStamp
                        };
                    }
                    let r = n.clicksByButton[e.button];
                    if (r.target === s.target && timeStamp - r.timeStamp < 200) {
                        ++r.clickCount;
                    } else {
                        r.clickCount = 1;
                    }
                    r.target = s.target;
                    r.timeStamp = timeStamp;
                    s.detail = r.clickCount;
                    if (s.pointerType === "mouse") {
                        let e = s.button === 2;
                        this.dispatchEvent(s, e ? "rightclick" : "click");
                    } else {
                        if (s.pointerType === "touch") {
                            this.dispatchEvent(s, "tap");
                        }
                    }
                    this.dispatchEvent(s, "pointertap");
                    this.freeEvent(s);
                }
                this.freeEvent(i);
            }
            mapPointerUpOutside(e) {
                if (!(e instanceof L)) {
                    return void x.warn("EventBoundary cannot map a non-pointer event as a pointer event");
                }
                let t = this.trackingData(e.pointerId);
                let i = this.findMountedTarget(t.pressTargetsByButton[e.button]);
                let n = this.createPointerEvent(e);
                if (i) {
                    let s = i;
                    while(s){
                        n.currentTarget = s;
                        this.notifyTarget(n, "pointerupoutside");
                        if (n.pointerType === "touch") {
                            this.notifyTarget(n, "touchendoutside");
                        } else if (n.pointerType === "mouse" || n.pointerType === "pen") {
                            this.notifyTarget(n, n.button === 2 ? "rightupoutside" : "mouseupoutside");
                        }
                        s = s.parent;
                    }
                    delete t.pressTargetsByButton[e.button];
                }
                this.freeEvent(n);
            }
            mapWheel(e) {
                if (!(e instanceof B)) {
                    return void x.warn("EventBoundary cannot map a non-wheel event as a wheel event");
                }
                let t = this.createWheelEvent(e);
                this.dispatchEvent(t);
                this.freeEvent(t);
            }
            findMountedTarget(e) {
                if (!e) {
                    return null;
                }
                let t = e[0];
                for(let i = 1; i < e.length; i++){
                    if (e[i].parent === t) {
                        t = e[i];
                    } else {
                        break;
                    }
                }
                return t;
            }
            createPointerEvent(e, t, i) {
                let n = this.allocateEvent(L);
                this.copyPointerData(e, n);
                this.copyMouseData(e, n);
                this.copyData(e, n);
                n.nativeEvent = e.nativeEvent;
                n.originalEvent = e;
                n.target = i ?? this.hitTest(n.global.x, n.global.y) ?? this._hitElements[0];
                if (typeof t === "string") {
                    n.type = t;
                }
                return n;
            }
            createWheelEvent(e) {
                let t = this.allocateEvent(B);
                this.copyWheelData(e, t);
                this.copyMouseData(e, t);
                this.copyData(e, t);
                t.nativeEvent = e.nativeEvent;
                t.originalEvent = e;
                t.target = this.hitTest(t.global.x, t.global.y);
                return t;
            }
            clonePointerEvent(e, t) {
                let i = this.allocateEvent(L);
                i.nativeEvent = e.nativeEvent;
                i.originalEvent = e.originalEvent;
                this.copyPointerData(e, i);
                this.copyMouseData(e, i);
                this.copyData(e, i);
                i.target = e.target;
                i.path = e.composedPath().slice();
                i.type = t ?? i.type;
                return i;
            }
            copyWheelData(e, t) {
                t.deltaMode = e.deltaMode;
                t.deltaX = e.deltaX;
                t.deltaY = e.deltaY;
                t.deltaZ = e.deltaZ;
            }
            copyPointerData(e, t) {
                if (e instanceof L && t instanceof L) {
                    t.pointerId = e.pointerId;
                    t.width = e.width;
                    t.height = e.height;
                    t.isPrimary = e.isPrimary;
                    t.pointerType = e.pointerType;
                    t.pressure = e.pressure;
                    t.tangentialPressure = e.tangentialPressure;
                    t.tiltX = e.tiltX;
                    t.tiltY = e.tiltY;
                    t.twist = e.twist;
                }
            }
            copyMouseData(e, t) {
                if (e instanceof k && t instanceof k) {
                    t.altKey = e.altKey;
                    t.button = e.button;
                    t.buttons = e.buttons;
                    t.client.copyFrom(e.client);
                    t.ctrlKey = e.ctrlKey;
                    t.metaKey = e.metaKey;
                    t.movement.copyFrom(e.movement);
                    t.screen.copyFrom(e.screen);
                    t.shiftKey = e.shiftKey;
                    t.global.copyFrom(e.global);
                }
            }
            copyData(e, t) {
                t.isTrusted = e.isTrusted;
                t.srcElement = e.srcElement;
                t.timeStamp = performance.now();
                t.type = e.type;
                t.detail = e.detail;
                t.view = e.view;
                t.which = e.which;
                t.layer.copyFrom(e.layer);
                t.page.copyFrom(e.page);
            }
            trackingData(e) {
                if (!this.mappingState.trackingData[e]) {
                    this.mappingState.trackingData[e] = {
                        pressTargetsByButton: {},
                        clicksByButton: {},
                        overTarget: null
                    };
                }
                return this.mappingState.trackingData[e];
            }
            allocateEvent(e) {
                if (!this.eventPool.has(e)) {
                    this.eventPool.set(e, []);
                }
                let t = this.eventPool.get(e).pop() || new e(this);
                t.eventPhase = t.NONE;
                t.currentTarget = null;
                t.defaultPrevented = false;
                t.path = null;
                t.target = null;
                return t;
            }
            freeEvent(e) {
                if (e.manager !== this) {
                    throw Error("It is illegal to free an event not managed by this EventBoundary!");
                }
                let e_constructor = e.constructor;
                if (!this.eventPool.has(e_constructor)) {
                    this.eventPool.set(e_constructor, []);
                }
                this.eventPool.get(e_constructor).push(e);
            }
            _notifyListeners(e, t) {
                let i = e.currentTarget._events[t];
                if (i) {
                    if ("fn" in i) {
                        if (i.once) {
                            e.currentTarget.removeListener(t, i.fn, undefined, true);
                        }
                        i.fn.call(i.context, e);
                    } else {
                        for(let n = 0, s = i.length; n < s && !e.propagationImmediatelyStopped; n++){
                            if (i[n].once) {
                                e.currentTarget.removeListener(t, i[n].fn, undefined, true);
                            }
                            i[n].fn.call(i[n].context, e);
                        }
                    }
                }
            }
        }
        e.s([
            "EventBoundary",
            0,
            U
        ], 391845);
        let R = {
            touchstart: "pointerdown",
            touchend: "pointerup",
            touchendoutside: "pointerupoutside",
            touchmove: "pointermove",
            touchcancel: "pointercancel"
        };
        let F = class e {
            constructor(t){
                this.supportsTouchEvents = "ontouchstart" in globalThis;
                this.supportsPointerEvents = !!globalThis.PointerEvent;
                this.domElement = null;
                this.resolution = 1;
                this.renderer = t;
                this.rootBoundary = new U(null);
                I.init(this);
                this.autoPreventDefault = true;
                this._eventsAdded = false;
                this._rootPointerEvent = new L(null);
                this._rootWheelEvent = new B(null);
                this.cursorStyles = {
                    default: "inherit",
                    pointer: "pointer"
                };
                this.features = new Proxy({
                    ...e.defaultEventFeatures
                }, {
                    set: (e, t, i)=>{
                        if (t === "globalMove") {
                            this.rootBoundary.enableGlobalMoveEvents = i;
                        }
                        e[t] = i;
                        return true;
                    }
                });
                this._onPointerDown = this._onPointerDown.bind(this);
                this._onPointerMove = this._onPointerMove.bind(this);
                this._onPointerUp = this._onPointerUp.bind(this);
                this._onPointerOverOut = this._onPointerOverOut.bind(this);
                this.onWheel = this.onWheel.bind(this);
            }
            static get defaultEventMode() {
                return this._defaultEventMode;
            }
            init(t) {
                let { canvas, resolution } = this.renderer;
                this.setTargetElement(canvas);
                this.resolution = resolution;
                e._defaultEventMode = t.eventMode ?? "passive";
                Object.assign(this.features, t.eventFeatures ?? {});
                this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
            }
            resolutionChange(e) {
                this.resolution = e;
            }
            destroy() {
                I.destroy();
                this.setTargetElement(null);
                this.renderer = null;
                this._currentCursor = null;
            }
            setCursor(e) {
                if (!e) {
                    e = "default";
                }
                let t = true;
                if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas) {
                    t = false;
                }
                if (this._currentCursor === e) {
                    return;
                }
                this._currentCursor = e;
                let i = this.cursorStyles[e];
                if (i) {
                    switch(typeof i){
                        case "string":
                            if (t) {
                                this.domElement.style.cursor = i;
                            }
                            break;
                        case "function":
                            i(e);
                            break;
                        case "object":
                            if (t) {
                                Object.assign(this.domElement.style, i);
                            }
                    }
                } else {
                    if (t && typeof e === "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e)) {
                        this.domElement.style.cursor = e;
                    }
                }
            }
            get pointer() {
                return this._rootPointerEvent;
            }
            _onPointerDown(e) {
                if (!this.features.click) {
                    return;
                }
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                let t = this._normalizeToPointerData(e);
                this.autoPreventDefault && t[0].isNormalized && (!e.cancelable && "cancelable" in e || e.preventDefault());
                for(let e = 0, i = t.length; e < i; e++){
                    let i = t[e];
                    let n = this._bootstrapEvent(this._rootPointerEvent, i);
                    this.rootBoundary.mapEvent(n);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
            _onPointerMove(e) {
                if (!this.features.move) {
                    return;
                }
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                I.pointerMoved();
                let t = this._normalizeToPointerData(e);
                for(let e = 0, i = t.length; e < i; e++){
                    let i = this._bootstrapEvent(this._rootPointerEvent, t[e]);
                    this.rootBoundary.mapEvent(i);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
            _onPointerUp(e) {
                if (!this.features.click) {
                    return;
                }
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                let e_target = e.target;
                if (e.composedPath && e.composedPath().length > 0) {
                    e_target = e.composedPath()[0];
                }
                let i = e_target !== this.domElement ? "outside" : "";
                let n = this._normalizeToPointerData(e);
                for(let e = 0, t = n.length; e < t; e++){
                    let t = this._bootstrapEvent(this._rootPointerEvent, n[e]);
                    t.type += i;
                    this.rootBoundary.mapEvent(t);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
            _onPointerOverOut(e) {
                if (!this.features.click) {
                    return;
                }
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                let t = this._normalizeToPointerData(e);
                for(let e = 0, i = t.length; e < i; e++){
                    let i = this._bootstrapEvent(this._rootPointerEvent, t[e]);
                    this.rootBoundary.mapEvent(i);
                }
                this.setCursor(this.rootBoundary.cursor);
            }
            onWheel(e) {
                if (!this.features.wheel) {
                    return;
                }
                let t = this.normalizeWheelEvent(e);
                this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
                this.rootBoundary.mapEvent(t);
            }
            setTargetElement(e) {
                this._removeEvents();
                this.domElement = e;
                I.domElement = e;
                this._addEvents();
            }
            _addEvents() {
                if (this._eventsAdded || !this.domElement) {
                    return;
                }
                I.addTickerListener();
                let style = this.domElement.style;
                style && (globalThis.navigator.msPointerEnabled ? (style.msContentZooming = "none", style.msTouchAction = "none") : this.supportsPointerEvents && (style.touchAction = "none"));
                if (this.supportsPointerEvents) {
                    globalThis.document.addEventListener("pointermove", this._onPointerMove, true);
                    this.domElement.addEventListener("pointerdown", this._onPointerDown, true);
                    this.domElement.addEventListener("pointerleave", this._onPointerOverOut, true);
                    this.domElement.addEventListener("pointerover", this._onPointerOverOut, true);
                    globalThis.addEventListener("pointerup", this._onPointerUp, true);
                } else {
                    globalThis.document.addEventListener("mousemove", this._onPointerMove, true);
                    this.domElement.addEventListener("mousedown", this._onPointerDown, true);
                    this.domElement.addEventListener("mouseout", this._onPointerOverOut, true);
                    this.domElement.addEventListener("mouseover", this._onPointerOverOut, true);
                    globalThis.addEventListener("mouseup", this._onPointerUp, true);
                    if (this.supportsTouchEvents) {
                        this.domElement.addEventListener("touchstart", this._onPointerDown, true);
                        this.domElement.addEventListener("touchend", this._onPointerUp, true);
                        this.domElement.addEventListener("touchmove", this._onPointerMove, true);
                    }
                }
                this.domElement.addEventListener("wheel", this.onWheel, {
                    passive: true,
                    capture: true
                });
                this._eventsAdded = true;
            }
            _removeEvents() {
                if (!this._eventsAdded || !this.domElement) {
                    return;
                }
                I.removeTickerListener();
                let style = this.domElement.style;
                style && (globalThis.navigator.msPointerEnabled ? (style.msContentZooming = "", style.msTouchAction = "") : this.supportsPointerEvents && (style.touchAction = ""));
                if (this.supportsPointerEvents) {
                    globalThis.document.removeEventListener("pointermove", this._onPointerMove, true);
                    this.domElement.removeEventListener("pointerdown", this._onPointerDown, true);
                    this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, true);
                    this.domElement.removeEventListener("pointerover", this._onPointerOverOut, true);
                    globalThis.removeEventListener("pointerup", this._onPointerUp, true);
                } else {
                    globalThis.document.removeEventListener("mousemove", this._onPointerMove, true);
                    this.domElement.removeEventListener("mousedown", this._onPointerDown, true);
                    this.domElement.removeEventListener("mouseout", this._onPointerOverOut, true);
                    this.domElement.removeEventListener("mouseover", this._onPointerOverOut, true);
                    globalThis.removeEventListener("mouseup", this._onPointerUp, true);
                    if (this.supportsTouchEvents) {
                        this.domElement.removeEventListener("touchstart", this._onPointerDown, true);
                        this.domElement.removeEventListener("touchend", this._onPointerUp, true);
                        this.domElement.removeEventListener("touchmove", this._onPointerMove, true);
                    }
                }
                this.domElement.removeEventListener("wheel", this.onWheel, true);
                this.domElement = null;
                this._eventsAdded = false;
            }
            mapPositionToPoint(e, t, i) {
                let n = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: this.domElement.width,
                    height: this.domElement.height,
                    left: 0,
                    top: 0
                };
                let s = 1 / this.resolution;
                e.x = (t - n.left) * (this.domElement.width / n.width) * s;
                e.y = (i - n.top) * (this.domElement.height / n.height) * s;
            }
            _normalizeToPointerData(e) {
                let t = [];
                if (this.supportsTouchEvents && e instanceof TouchEvent) {
                    for(let i = 0, n = e.changedTouches.length; i < n; i++){
                        let changedTouch = e.changedTouches[i];
                        if (changedTouch.button === undefined) {
                            changedTouch.button = 0;
                        }
                        if (changedTouch.buttons === undefined) {
                            changedTouch.buttons = 1;
                        }
                        if (changedTouch.isPrimary === undefined) {
                            changedTouch.isPrimary = e.touches.length === 1 && e.type === "touchstart";
                        }
                        if (changedTouch.width === undefined) {
                            changedTouch.width = changedTouch.radiusX || 1;
                        }
                        if (changedTouch.height === undefined) {
                            changedTouch.height = changedTouch.radiusY || 1;
                        }
                        if (changedTouch.tiltX === undefined) {
                            changedTouch.tiltX = 0;
                        }
                        if (changedTouch.tiltY === undefined) {
                            changedTouch.tiltY = 0;
                        }
                        if (changedTouch.pointerType === undefined) {
                            changedTouch.pointerType = "touch";
                        }
                        if (changedTouch.pointerId === undefined) {
                            changedTouch.pointerId = changedTouch.identifier || 0;
                        }
                        if (changedTouch.pressure === undefined) {
                            changedTouch.pressure = changedTouch.force || 0.5;
                        }
                        if (changedTouch.twist === undefined) {
                            changedTouch.twist = 0;
                        }
                        if (changedTouch.tangentialPressure === undefined) {
                            changedTouch.tangentialPressure = 0;
                        }
                        if (changedTouch.layerX === undefined) {
                            changedTouch.layerX = changedTouch.offsetX = changedTouch.clientX;
                        }
                        if (changedTouch.layerY === undefined) {
                            changedTouch.layerY = changedTouch.offsetY = changedTouch.clientY;
                        }
                        changedTouch.isNormalized = true;
                        changedTouch.type = e.type;
                        changedTouch.altKey ?? (changedTouch.altKey = e.altKey);
                        changedTouch.ctrlKey ?? (changedTouch.ctrlKey = e.ctrlKey);
                        changedTouch.metaKey ?? (changedTouch.metaKey = e.metaKey);
                        changedTouch.shiftKey ?? (changedTouch.shiftKey = e.shiftKey);
                        t.push(changedTouch);
                    }
                } else {
                    if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
                        if (e.isPrimary === undefined) {
                            e.isPrimary = true;
                        }
                        if (e.width === undefined) {
                            e.width = 1;
                        }
                        if (e.height === undefined) {
                            e.height = 1;
                        }
                        if (e.tiltX === undefined) {
                            e.tiltX = 0;
                        }
                        if (e.tiltY === undefined) {
                            e.tiltY = 0;
                        }
                        if (e.pointerType === undefined) {
                            e.pointerType = "mouse";
                        }
                        if (e.pointerId === undefined) {
                            e.pointerId = 1;
                        }
                        if (e.pressure === undefined) {
                            e.pressure = 0.5;
                        }
                        if (e.twist === undefined) {
                            e.twist = 0;
                        }
                        if (e.tangentialPressure === undefined) {
                            e.tangentialPressure = 0;
                        }
                        e.isNormalized = true;
                    }
                    t.push(e);
                }
                return t;
            }
            normalizeWheelEvent(e) {
                let _rootWheelEvent = this._rootWheelEvent;
                this._transferMouseData(_rootWheelEvent, e);
                _rootWheelEvent.deltaX = e.deltaX;
                _rootWheelEvent.deltaY = e.deltaY;
                _rootWheelEvent.deltaZ = e.deltaZ;
                _rootWheelEvent.deltaMode = e.deltaMode;
                this.mapPositionToPoint(_rootWheelEvent.screen, e.clientX, e.clientY);
                _rootWheelEvent.global.copyFrom(_rootWheelEvent.screen);
                _rootWheelEvent.offset.copyFrom(_rootWheelEvent.screen);
                _rootWheelEvent.nativeEvent = e;
                _rootWheelEvent.type = e.type;
                return _rootWheelEvent;
            }
            _bootstrapEvent(e, t) {
                e.originalEvent = null;
                e.nativeEvent = t;
                e.pointerId = t.pointerId;
                e.width = t.width;
                e.height = t.height;
                e.isPrimary = t.isPrimary;
                e.pointerType = t.pointerType;
                e.pressure = t.pressure;
                e.tangentialPressure = t.tangentialPressure;
                e.tiltX = t.tiltX;
                e.tiltY = t.tiltY;
                e.twist = t.twist;
                this._transferMouseData(e, t);
                this.mapPositionToPoint(e.screen, t.clientX, t.clientY);
                e.global.copyFrom(e.screen);
                e.offset.copyFrom(e.screen);
                e.isTrusted = t.isTrusted;
                if (e.type === "pointerleave") {
                    e.type = "pointerout";
                }
                if (e.type.startsWith("mouse")) {
                    e.type = e.type.replace("mouse", "pointer");
                }
                if (e.type.startsWith("touch")) {
                    e.type = R[e.type] || e.type;
                }
                return e;
            }
            _transferMouseData(e, t) {
                e.isTrusted = t.isTrusted;
                e.srcElement = t.srcElement;
                e.timeStamp = performance.now();
                e.type = t.type;
                e.altKey = t.altKey;
                e.button = t.button;
                e.buttons = t.buttons;
                e.client.x = t.clientX;
                e.client.y = t.clientY;
                e.ctrlKey = t.ctrlKey;
                e.metaKey = t.metaKey;
                e.movement.x = t.movementX;
                e.movement.y = t.movementY;
                e.page.x = t.pageX;
                e.page.y = t.pageY;
                e.relatedTarget = null;
                e.shiftKey = t.shiftKey;
            }
        };
        F.extension = {
            name: "events",
            type: [
                r.ExtensionType.WebGLSystem,
                r.ExtensionType.CanvasSystem,
                r.ExtensionType.WebGPUSystem
            ],
            priority: -1
        };
        F.defaultEventFeatures = {
            move: true,
            globalMove: true,
            click: true,
            wheel: true
        };
        e.s([
            "EventSystem",
            0,
            F
        ], 390976);
        e.s([
            "FederatedContainer",
            0,
            {
                onclick: null,
                onmousedown: null,
                onmouseenter: null,
                onmouseleave: null,
                onmousemove: null,
                onglobalmousemove: null,
                onmouseout: null,
                onmouseover: null,
                onmouseup: null,
                onmouseupoutside: null,
                onpointercancel: null,
                onpointerdown: null,
                onpointerenter: null,
                onpointerleave: null,
                onpointermove: null,
                onglobalpointermove: null,
                onpointerout: null,
                onpointerover: null,
                onpointertap: null,
                onpointerup: null,
                onpointerupoutside: null,
                onrightclick: null,
                onrightdown: null,
                onrightup: null,
                onrightupoutside: null,
                ontap: null,
                ontouchcancel: null,
                ontouchend: null,
                ontouchendoutside: null,
                ontouchmove: null,
                onglobaltouchmove: null,
                ontouchstart: null,
                onwheel: null,
                get interactive () {
                    return this.eventMode === "dynamic" || this.eventMode === "static";
                },
                set interactive (value){
                    this.eventMode = value ? "static" : "passive";
                },
                _internalEventMode: undefined,
                get eventMode () {
                    return this._internalEventMode ?? F.defaultEventMode;
                },
                set eventMode (value){
                    this._internalEventMode = value;
                },
                isInteractive () {
                    return this.eventMode === "static" || this.eventMode === "dynamic";
                },
                interactiveChildren: true,
                hitArea: null,
                addEventListener (e, t, i) {
                    let n = typeof i === "boolean" && i || typeof i === "object" && i.capture;
                    let s = typeof i === "object" ? i.signal : undefined;
                    let o = typeof i === "object" && i.once === true;
                    let r = typeof t === "function" ? undefined : t;
                    e = n ? `${e}capture` : e;
                    let a = typeof t === "function" ? t : t.handleEvent;
                    let h = this;
                    if (s) {
                        s.addEventListener("abort", ()=>{
                            h.off(e, a, r);
                        });
                    }
                    if (o) {
                        h.once(e, a, r);
                    } else {
                        h.on(e, a, r);
                    }
                },
                removeEventListener (e, t, i) {
                    let n = typeof i === "boolean" && i || typeof i === "object" && i.capture;
                    let s = typeof t === "function" ? undefined : t;
                    e = n ? `${e}capture` : e;
                    t = typeof t === "function" ? t : t.handleEvent;
                    this.off(e, t, s);
                },
                dispatchEvent (e) {
                    if (!(e instanceof o)) {
                        throw Error("Container cannot propagate events outside of the Federated Events API");
                    }
                    e.defaultPrevented = false;
                    e.path = null;
                    e.target = this;
                    e.manager.dispatchEvent(e);
                    return !e.defaultPrevented;
                }
            }
        ], 652218);
    }
]);
