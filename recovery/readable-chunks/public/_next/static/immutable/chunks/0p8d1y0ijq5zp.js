;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "32858f97-21df-bf96-2b48-5d654dc65c12";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    607198,
    (e)=>{
        "use strict";
        var t;
        var r;
        var n;
        var o;
        var i;
        var a;
        var s;
        var l;
        var c;
        var u;
        var f;
        var p;
        var d;
        var h = ()=>t || typeof window !== "undefined" && (t = window.gsap) && t.registerPlugin && t;
        var g = 1;
        var v = [];
        var _scrollers = [];
        var _proxies = [];
        var Date_now = Date.now;
        var b = (e, t)=>t;
        var _ = ()=>{
            const c_core = c.core;
            const t = c_core.bridge || {};
            const e__scrollers = c_core._scrollers;
            const e__proxies = c_core._proxies;
            e__scrollers.push.apply(e__scrollers, _scrollers);
            e__proxies.push.apply(e__proxies, _proxies);
            _scrollers = e__scrollers;
            _proxies = e__proxies;
            b = (e, r)=>t[e](r);
        };
        var w = (e, t)=>~_proxies.indexOf(e) && _proxies[_proxies.indexOf(e) + 1][t];
        var T = (e)=>!!~u.indexOf(e);
        var C = (e, t, r, n, o)=>e.addEventListener(t, r, {
                passive: n !== false,
                capture: !!o
            });
        var E = (e, t, r, n)=>e.removeEventListener(t, r, !!n);
        var k = "scrollLeft";
        var S = "scrollTop";
        var P = ()=>f && f.isPressed || _scrollers.cache++;
        var M = (e, t)=>{
            const r = function r(o) {
                if (o || o === 0) {
                    if (g) {
                        n.history.scrollRestoration = "manual";
                    }
                    const i = f && f.isPressed;
                    e(o = r.v = Math.round(o) || (f && f.iOS ? 1 : 0));
                    r.cacheID = _scrollers.cache;
                    if (i) {
                        b("ss", o);
                    }
                } else {
                    if (t || _scrollers.cache !== r.cacheID || b("ref")) {
                        r.cacheID = _scrollers.cache;
                        r.v = e();
                    }
                }
                return r.v + r.offset;
            };
            r.offset = 0;
            return e && r;
        };
        var op = {
            s: k,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: M(function(e) {
                if (arguments.length) {
                    return n.scrollTo(e, A.sc());
                }
                return n.pageXOffset || o[k] || i[k] || a[k] || 0;
            })
        };
        var A = {
            s: S,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op,
            sc: M(function(e) {
                if (arguments.length) {
                    return n.scrollTo(op.sc(), e);
                }
                return n.pageYOffset || o[S] || i[S] || a[S] || 0;
            })
        };
        var R = (e, r)=>(r && r._ctx && r._ctx.selector || t.utils.toArray)(e)[0] || (typeof e === "string" && t.config().nullTargetWarn !== false ? console.warn("Element not found:", e) : null);
        var D = (target, t)=>{
            for(let r = t.length; r--;){
                if (t[r] === target || t[r].contains(target)) {
                    return true;
                }
            }
            return false;
        };
        var Y = (e, r)=>{
            const n = r.s;
            const a = r.sc;
            if (T(e)) {
                e = o.scrollingElement || i;
            }
            let s = _scrollers.indexOf(e);
            const l = a === A.sc ? 1 : 2;
            if (!~s) {
                s = _scrollers.push(e) - 1;
            }
            if (!_scrollers[s + l]) {
                C(e, "scroll", P);
            }
            const c = _scrollers[s + l];
            const u = c || (_scrollers[s + l] = M(w(e, n), true) || (T(e) ? a : M(function(t) {
                if (arguments.length) {
                    return e[n] = t;
                }
                return e[n];
            })));
            u.target = e;
            if (!c) {
                u.smooth = t.getProperty(e, "scrollBehavior") === "smooth";
            }
            return u;
        };
        var _getVelocityProp = (e, t, r)=>{
            let n = e;
            let o = e;
            let i = Date_now();
            let a = i;
            const s = t || 50;
            const l = Math.max(500, 3 * s);
            const update = (e, t)=>{
                const l = Date_now();
                if (t || l - i > s) {
                    o = n;
                    n = e;
                    a = i;
                    i = l;
                } else if (r) {
                    n += e;
                } else {
                    n = o + (e - o) / (l - a) * (i - a);
                }
            };
            return {
                update,
                reset () {
                    o = n = r ? 0 : n;
                    i = 0;
                    a = 0;
                },
                getVelocity (e) {
                    const t = a;
                    const s = o;
                    const u = Date_now();
                    if ((e || e === 0) && e !== n) {
                        update(e);
                    }
                    if (i === a || u - a > l) {
                        return 0;
                    }
                    return (n + (r ? s : -s)) / ((r ? u : i) - t) * 1000;
                }
            };
        };
        var I = (e, t)=>{
            if (t && !e._gsapAllow && e.cancelable !== false) {
                e.preventDefault();
            }
            if (e.changedTouches) {
                return e.changedTouches[0];
            }
            return e;
        };
        var N = (e)=>{
            const t = Math.max.apply(Math, e);
            const r = Math.min.apply(Math, e);
            if (Math.abs(t) >= Math.abs(r)) {
                return t;
            }
            return r;
        };
        var X = ()=>{
            if ((c = t.core.globals().ScrollTrigger) && c.core) {
                _();
            }
        };
        var z = (e)=>{
            t = e || h();
            if (!r && t && typeof document !== "undefined" && document.body) {
                n = window;
                i = (o = document).documentElement;
                a = o.body;
                u = [
                    n,
                    o,
                    i,
                    a
                ];
                t.utils.clamp;
                d = t.core.context || (()=>{});
                l = "onpointerenter" in a ? "pointer" : "mouse";
                s = F.isTouch = n.matchMedia && n.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart" in n || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
                p = F.eventTypes = ("ontouchstart" in i ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in i) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
                setTimeout(()=>g = 0, 500);
                r = 1;
            }
            if (!c) {
                X();
            }
            return r;
        };
        op.op = A;
        _scrollers.cache = 0;
        class F {
            constructor(e){
                this.init(e);
            }
            init(e) {
                if (!(r || z(t))) {
                    console.warn("Please gsap.registerPlugin(Observer)");
                }
                if (!c) {
                    X();
                }
                let e_tolerance = e.tolerance;
                let e_dragMinimum = e.dragMinimum;
                let e_type = e.type;
                let e_target = e.target;
                let e_lineHeight = e.lineHeight;
                let e_debounce = e.debounce;
                const e_preventDefault = e.preventDefault;
                const e_onStop = e.onStop;
                const e_onStopDelay = e.onStopDelay;
                let e_ignore = e.ignore;
                let e_wheelSpeed = e.wheelSpeed;
                const e_event = e.event;
                const e_onDragStart = e.onDragStart;
                const e_onDragEnd = e.onDragEnd;
                const e_onDrag = e.onDrag;
                const e_onPress = e.onPress;
                const e_onRelease = e.onRelease;
                const e_onRight = e.onRight;
                const e_onLeft = e.onLeft;
                const e_onUp = e.onUp;
                const e_onDown = e.onDown;
                const e_onChangeX = e.onChangeX;
                const e_onChangeY = e.onChangeY;
                const e_onChange = e.onChange;
                const e_onToggleX = e.onToggleX;
                const e_onToggleY = e.onToggleY;
                const e_onHover = e.onHover;
                const e_onHoverEnd = e.onHoverEnd;
                const e_onMove = e.onMove;
                const e_ignoreCheck = e.ignoreCheck;
                const e_isNormalizer = e.isNormalizer;
                const e_onGestureStart = e.onGestureStart;
                const e_onGestureEnd = e.onGestureEnd;
                const e_onWheel = e.onWheel;
                const e_onEnable = e.onEnable;
                const e_onDisable = e.onDisable;
                const e_onClick = e.onClick;
                let e_scrollSpeed = e.scrollSpeed;
                const e_capture = e.capture;
                const e_allowClicks = e.allowClicks;
                const e_lockAxis = e.lockAxis;
                const e_onLockAxis = e.onLockAxis;
                this.target = e_target = R(e_target) || i;
                this.vars = e;
                if (e_ignore) {
                    e_ignore = t.utils.toArray(e_ignore);
                }
                e_tolerance = e_tolerance || 1e-9;
                e_dragMinimum = e_dragMinimum || 0;
                e_wheelSpeed = e_wheelSpeed || 1;
                e_scrollSpeed = e_scrollSpeed || 1;
                e_type = e_type || "wheel,touch,pointer";
                e_debounce = e_debounce !== false;
                if (!e_lineHeight) {
                    e_lineHeight = parseFloat(n.getComputedStyle(a).lineHeight) || 22;
                }
                let em;
                let ey;
                let ex;
                let eb;
                let e_;
                let ew;
                let eT;
                const eC = this;
                let eE = 0;
                let ek = 0;
                const eS = e.passive || !e_preventDefault && e.passive !== false;
                const eP = Y(e_target, op);
                const eM = Y(e_target, A);
                let eO = eP();
                let eA = eM();
                const eR = ~e_type.indexOf("touch") && !~e_type.indexOf("pointer") && p[0] === "pointerdown";
                const eD = T(e_target);
                const eY = e_target.ownerDocument || o;
                const eB = [
                    0,
                    0,
                    0
                ];
                const eI = [
                    0,
                    0,
                    0
                ];
                let eN = 0;
                const eX = ()=>eN = Date_now();
                const ez = (e, t)=>(eC.event = e) && e_ignore && D(e.target, e_ignore) || t && eR && e.pointerType !== "touch" || e_ignoreCheck && e_ignoreCheck(e, t);
                const eF = ()=>{
                    const e = eC.deltaX = N(eB);
                    const t = eC.deltaY = N(eI);
                    const r = Math.abs(e) >= e_tolerance;
                    const n = Math.abs(t) >= e_tolerance;
                    if (e_onChange && (r || n)) {
                        e_onChange(eC, e, t, eB, eI);
                    }
                    if (r) {
                        if (e_onRight && eC.deltaX > 0) {
                            e_onRight(eC);
                        }
                        if (e_onLeft && eC.deltaX < 0) {
                            e_onLeft(eC);
                        }
                        if (e_onChangeX) {
                            e_onChangeX(eC);
                        }
                        if (e_onToggleX && eC.deltaX < 0 != eE < 0) {
                            e_onToggleX(eC);
                        }
                        eE = eC.deltaX;
                        eB[0] = eB[1] = eB[2] = 0;
                    }
                    if (n) {
                        if (e_onDown && eC.deltaY > 0) {
                            e_onDown(eC);
                        }
                        if (e_onUp && eC.deltaY < 0) {
                            e_onUp(eC);
                        }
                        if (e_onChangeY) {
                            e_onChangeY(eC);
                        }
                        if (e_onToggleY && eC.deltaY < 0 != ek < 0) {
                            e_onToggleY(eC);
                        }
                        ek = eC.deltaY;
                        eI[0] = eI[1] = eI[2] = 0;
                    }
                    if (eb || ex) {
                        if (e_onMove) {
                            e_onMove(eC);
                        }
                        if (ex) {
                            if (e_onDragStart && ex === 1) {
                                e_onDragStart(eC);
                            }
                            if (e_onDrag) {
                                e_onDrag(eC);
                            }
                            ex = 0;
                        }
                        eb = false;
                    }
                    if (ew && (ew = false, 1) && e_onLockAxis) {
                        e_onLockAxis(eC);
                    }
                    if (e_) {
                        e_onWheel(eC);
                        e_ = false;
                    }
                    em = 0;
                };
                const eL = (e, t, r)=>{
                    eB[r] += e;
                    eI[r] += t;
                    eC._vx.update(e);
                    eC._vy.update(t);
                    if (e_debounce) {
                        if (!em) {
                            em = requestAnimationFrame(eF);
                        }
                    } else {
                        eF();
                    }
                };
                const eH = (e, t)=>{
                    if (e_lockAxis && !eT) {
                        eC.axis = eT = Math.abs(e) > Math.abs(t) ? "x" : "y";
                        ew = true;
                    }
                    if (eT !== "y") {
                        eB[2] += e;
                        eC._vx.update(e, true);
                    }
                    if (eT !== "x") {
                        eI[2] += t;
                        eC._vy.update(t, true);
                    }
                    if (e_debounce) {
                        if (!em) {
                            em = requestAnimationFrame(eF);
                        }
                    } else {
                        eF();
                    }
                };
                const eW = (e)=>{
                    if (!ez(e, 1)) {
                        const t = (e = I(e, e_preventDefault)).clientX;
                        const r = e.clientY;
                        const n = t - eC.x;
                        const o = r - eC.y;
                        const i = eC.isDragging;
                        eC.x = t;
                        eC.y = r;
                        if (i || (n || o) && (Math.abs(eC.startX - t) >= e_dragMinimum || Math.abs(eC.startY - r) >= e_dragMinimum)) {
                            if (!ex) {
                                ex = i ? 2 : 1;
                            }
                            if (!i) {
                                eC.isDragging = true;
                            }
                            eH(n, o);
                        }
                    }
                };
                const eU = eC.onPress = (e)=>{
                    if (!(ez(e, 1) || e && e.button)) {
                        eC.axis = eT = null;
                        ey.pause();
                        eC.isPressed = true;
                        e = I(e);
                        ek = 0;
                        eE = 0;
                        eC.startX = eC.x = e.clientX;
                        eC.startY = eC.y = e.clientY;
                        eC._vx.reset();
                        eC._vy.reset();
                        C(e_isNormalizer ? e_target : eY, p[1], eW, eS, true);
                        eC.deltaX = eC.deltaY = 0;
                        if (e_onPress) {
                            e_onPress(eC);
                        }
                    }
                };
                const eq = eC.onRelease = (e)=>{
                    if (!ez(e, 1)) {
                        E(e_isNormalizer ? e_target : eY, p[1], eW, true);
                        const r = !isNaN(eC.y - eC.startY);
                        const o = eC.isDragging;
                        const i = o && (Math.abs(eC.x - eC.startX) > 3 || Math.abs(eC.y - eC.startY) > 3);
                        const a = I(e);
                        if (!i && r) {
                            eC._vx.reset();
                            eC._vy.reset();
                            if (e_preventDefault && e_allowClicks) {
                                t.delayedCall(0.08, ()=>{
                                    if (Date_now() - eN > 300 && !e.defaultPrevented) {
                                        if (e.target.click) {
                                            e.target.click();
                                        } else if (eY.createEvent) {
                                            const t = eY.createEvent("MouseEvents");
                                            t.initMouseEvent("click", true, true, n, 1, a.screenX, a.screenY, a.clientX, a.clientY, false, false, false, false, 0, null);
                                            e.target.dispatchEvent(t);
                                        }
                                    }
                                });
                            }
                        }
                        eC.isDragging = eC.isGesturing = eC.isPressed = false;
                        if (e_onStop && o && !e_isNormalizer) {
                            ey.restart(true);
                        }
                        if (ex) {
                            eF();
                        }
                        if (e_onDragEnd && o) {
                            e_onDragEnd(eC);
                        }
                        if (e_onRelease) {
                            e_onRelease(eC, i);
                        }
                    }
                };
                const eV = (e)=>e.touches && e.touches.length > 1 && (eC.isGesturing = true) && e_onGestureStart(e, eC.isDragging);
                const eG = ()=>{
                    eC.isGesturing = false;
                    return e_onGestureEnd(eC);
                };
                const ej = (e)=>{
                    if (!ez(e)) {
                        const t = eP();
                        const r = eM();
                        eL((t - eO) * e_scrollSpeed, (r - eA) * e_scrollSpeed, 1);
                        eO = t;
                        eA = r;
                        if (e_onStop) {
                            ey.restart(true);
                        }
                    }
                };
                const eK = (e)=>{
                    if (!ez(e)) {
                        e = I(e, e_preventDefault);
                        if (e_onWheel) {
                            e_ = true;
                        }
                        const t = (e.deltaMode === 1 ? e_lineHeight : e.deltaMode === 2 ? n.innerHeight : 1) * e_wheelSpeed;
                        eL(e.deltaX * t, e.deltaY * t, 0);
                        if (e_onStop && !e_isNormalizer) {
                            ey.restart(true);
                        }
                    }
                };
                const eZ = (e)=>{
                    if (!ez(e)) {
                        const t = e.clientX;
                        const r = e.clientY;
                        const n = t - eC.x;
                        const o = r - eC.y;
                        eC.x = t;
                        eC.y = r;
                        eb = true;
                        if (e_onStop) {
                            ey.restart(true);
                        }
                        if (n || o) {
                            eH(n, o);
                        }
                    }
                };
                const e$ = (e)=>{
                    eC.event = e;
                    e_onHover(eC);
                };
                const eJ = (e)=>{
                    eC.event = e;
                    e_onHoverEnd(eC);
                };
                const eQ = (e)=>ez(e) || I(e, e_preventDefault) && e_onClick(eC);
                ey = eC._dc = t.delayedCall(e_onStopDelay || 0.25, ()=>{
                    eC._vx.reset();
                    eC._vy.reset();
                    ey.pause();
                    if (e_onStop) {
                        e_onStop(eC);
                    }
                }).pause();
                eC.deltaX = eC.deltaY = 0;
                eC._vx = _getVelocityProp(0, 50, true);
                eC._vy = _getVelocityProp(0, 50, true);
                eC.scrollX = eP;
                eC.scrollY = eM;
                eC.isDragging = eC.isGesturing = eC.isPressed = false;
                d(this);
                eC.enable = (e)=>{
                    if (!eC.isEnabled) {
                        C(eD ? eY : e_target, "scroll", P);
                        if (e_type.indexOf("scroll") >= 0) {
                            C(eD ? eY : e_target, "scroll", ej, eS, e_capture);
                        }
                        if (e_type.indexOf("wheel") >= 0) {
                            C(e_target, "wheel", eK, eS, e_capture);
                        }
                        if (e_type.indexOf("touch") >= 0 && s || e_type.indexOf("pointer") >= 0) {
                            C(e_target, p[0], eU, eS, e_capture);
                            C(eY, p[2], eq);
                            C(eY, p[3], eq);
                            if (e_allowClicks) {
                                C(e_target, "click", eX, true, true);
                            }
                            if (e_onClick) {
                                C(e_target, "click", eQ);
                            }
                            if (e_onGestureStart) {
                                C(eY, "gesturestart", eV);
                            }
                            if (e_onGestureEnd) {
                                C(eY, "gestureend", eG);
                            }
                            if (e_onHover) {
                                C(e_target, l + "enter", e$);
                            }
                            if (e_onHoverEnd) {
                                C(e_target, l + "leave", eJ);
                            }
                            if (e_onMove) {
                                C(e_target, l + "move", eZ);
                            }
                        }
                        eC.isEnabled = true;
                        eC.isDragging = eC.isGesturing = eC.isPressed = eb = ex = false;
                        eC._vx.reset();
                        eC._vy.reset();
                        eO = eP();
                        eA = eM();
                        if (e && e.type) {
                            eU(e);
                        }
                        if (e_onEnable) {
                            e_onEnable(eC);
                        }
                    }
                    return eC;
                };
                eC.disable = ()=>{
                    if (eC.isEnabled) {
                        if (!v.filter((e)=>e !== eC && T(e.target)).length) {
                            E(eD ? eY : e_target, "scroll", P);
                        }
                        if (eC.isPressed) {
                            eC._vx.reset();
                            eC._vy.reset();
                            E(e_isNormalizer ? e_target : eY, p[1], eW, true);
                        }
                        E(eD ? eY : e_target, "scroll", ej, e_capture);
                        E(e_target, "wheel", eK, e_capture);
                        E(e_target, p[0], eU, e_capture);
                        E(eY, p[2], eq);
                        E(eY, p[3], eq);
                        E(e_target, "click", eX, true);
                        E(e_target, "click", eQ);
                        E(eY, "gesturestart", eV);
                        E(eY, "gestureend", eG);
                        E(e_target, l + "enter", e$);
                        E(e_target, l + "leave", eJ);
                        E(e_target, l + "move", eZ);
                        eC.isEnabled = eC.isPressed = eC.isDragging = false;
                        if (e_onDisable) {
                            e_onDisable(eC);
                        }
                    }
                };
                eC.kill = eC.revert = ()=>{
                    eC.disable();
                    const e = v.indexOf(eC);
                    if (e >= 0) {
                        v.splice(e, 1);
                    }
                    if (f === eC) {
                        f = 0;
                    }
                };
                v.push(eC);
                if (e_isNormalizer && T(e_target)) {
                    f = eC;
                }
                eC.enable(e_event);
            }
            get velocityX() {
                return this._vx.getVelocity();
            }
            get velocityY() {
                return this._vy.getVelocity();
            }
        }
        F.version = "3.15.0";
        F.create = (e)=>new F(e);
        F.register = z;
        F.getAll = ()=>v.slice();
        F.getById = (e)=>v.filter((t)=>t.vars.id === e)[0];
        if (h()) {
            t.registerPlugin(F);
        }
        var L;
        var H;
        var W;
        var U;
        var q;
        var V;
        var G;
        var j;
        var K;
        var Z;
        var $;
        var J;
        var Q;
        var ee;
        var et;
        var er;
        var en;
        var eo;
        var ei;
        var ea;
        var es;
        var el;
        var ec;
        var eu;
        var ef;
        var ep;
        var ed;
        var eh;
        var eg;
        var ev;
        var em;
        var ey;
        var ex;
        var eb;
        var e_;
        var ew;
        var eT;
        var eC;
        var eE = 1;
        var Date_now_1 = Date.now;
        var eS = Date_now_1();
        var eP = 0;
        var eM = 0;
        var eO = (e, t, r)=>{
            const n = eU(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
            r["_" + t + "Clamp"] = n;
            if (n) {
                return e.substr(6, e.length - 7);
            }
            return e;
        };
        var eA = (e, t)=>{
            if (t && (!eU(e) || e.substr(0, 6) !== "clamp(")) {
                return "clamp(" + e + ")";
            }
            return e;
        };
        var eR = ()=>ee = 1;
        var eD = ()=>ee = 0;
        var eY = (e)=>e;
        var eB = (e)=>Math.round(100000 * e) / 100000 || 0;
        var eI = ()=>typeof window !== "undefined";
        var eN = ()=>L || eI() && (L = window.gsap) && L.registerPlugin && L;
        var eX = (e)=>!!~G.indexOf(e);
        var ez = (e)=>(e === "Height" ? em : W["inner" + e]) || q["client" + e] || V["client" + e];
        var eF = (e)=>w(e, "getBoundingClientRect") || (eX(e) ? ()=>{
                tG.width = W.innerWidth;
                tG.height = em;
                return tG;
            } : ()=>tr(e));
        var eL = (e, t, r)=>{
            const n = r.d;
            const o = r.d2;
            let i = r.a;
            if (i = w(e, "getBoundingClientRect")) {
                return ()=>i()[n];
            }
            return ()=>(t ? ez(o) : e["client" + o]) || 0;
        };
        var eH = (e, t)=>{
            let r = t.s;
            const n = t.d2;
            const o = t.d;
            let i = t.a;
            return Math.max(0, (i = w(e, r = "scroll" + n)) ? i() - eF(e)()[o] : eX(e) ? (q[r] || V[r]) - ez(n) : e[r] - e["offset" + n]);
        };
        var eW = (e, t)=>{
            for(let r = 0; r < ei.length; r += 3){
                if (!t || ~t.indexOf(ei[r + 1])) {
                    e(ei[r], ei[r + 1], ei[r + 2]);
                }
            }
        };
        var eU = (e)=>typeof e === "string";
        var eq = (e)=>typeof e === "function";
        var eV = (e)=>typeof e === "number";
        var eG = (e)=>typeof e === "object";
        var ej = (e, t, r)=>e && e.progress(+!t) && r && e.pause();
        var eK = (e, t, r)=>{
            if (e.enabled) {
                const n = e._ctx ? e._ctx.add(()=>t(e, r)) : t(e, r);
                if (n && n.totalTime) {
                    e.callbackAnimation = n;
                }
            }
        };
        var Math_abs = Math.abs;
        var e$ = "left";
        var eJ = "right";
        var eQ = "bottom";
        var e0 = "width";
        var e1 = "height";
        var e2 = "Right";
        var e3 = "Left";
        var e5 = "Bottom";
        var e6 = "padding";
        var e9 = "margin";
        var e4 = "Width";
        var e8 = "Height";
        var e7 = (e)=>W.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
        var te = (e)=>{
            const position = e7(e).position;
            e.style.position = position === "absolute" || position === "fixed" ? position : "relative";
        };
        var tt = (e, t)=>{
            for(const r in t){
                if (!(r in e)) {
                    e[r] = t[r];
                }
            }
            return e;
        };
        var tr = (e, t)=>{
            const r = t && e7(e)[et] !== "matrix(1, 0, 0, 1, 0, 0)" && L.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1);
            const n = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
            if (r) {
                r.progress(0).kill();
            }
            return n;
        };
        var tn = (e, t)=>{
            const r = t.d2;
            return e["offset" + r] || e["client" + r] || 0;
        };
        var to = (e)=>{
            let t;
            const r = [];
            const e_labels = e.labels;
            const o = e.duration();
            for(t in e_labels){
                r.push(e_labels[t] / o);
            }
            return r;
        };
        var ti = (e)=>{
            const t = L.utils.snap(e);
            const r = Array.isArray(e) && e.slice(0).sort((e, t)=>e - t);
            if (r) {
                return (e, n, o = 0.001)=>{
                    let i;
                    if (!n) {
                        return t(e);
                    }
                    if (n > 0) {
                        e -= o;
                        for(i = 0; i < r.length; i++){
                            if (r[i] >= e) {
                                return r[i];
                            }
                        }
                        return r[i - 1];
                    }
                    i = r.length;
                    for(e += o; i--;){
                        if (r[i] <= e) {
                            return r[i];
                        }
                    }
                    return r[0];
                };
            }
            return (r, n, o = 0.001)=>{
                const i = t(r);
                if (!n || Math.abs(i - r) < o || i - r < 0 == n < 0) {
                    return i;
                }
                return t(n < 0 ? r - e : r + e);
            };
        };
        var ta = (e, t, r, n)=>r.split(",").forEach((r)=>e(t, r, n));
        var ts = (e, t, r, n, o)=>e.addEventListener(t, r, {
                passive: !n,
                capture: !!o
            });
        var tl = (e, t, r, n)=>e.removeEventListener(t, r, !!n);
        var tc = (e, t, r)=>{
            if (r = r && r.wheelHandler) {
                e(t, "wheel", r);
                e(t, "touchmove", r);
            }
        };
        var tu = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        };
        var tf = {
            toggleActions: "play",
            anticipatePin: 0
        };
        var tp = {
            top: 0,
            left: 0,
            center: 0.5,
            bottom: 1,
            right: 1
        };
        var td = (e, t)=>{
            if (eU(e)) {
                const r = e.indexOf("=");
                let n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                if (~r) {
                    if (e.indexOf("%") > r) {
                        n *= t / 100;
                    }
                    e = e.substr(0, r - 1);
                }
                e = n + (e in tp ? tp[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
            }
            return e;
        };
        var th = (e, t, r, n, o, i, a, s)=>{
            const o_startColor = o.startColor;
            const o_endColor = o.endColor;
            const o_fontSize = o.fontSize;
            const o_indent = o.indent;
            const o_fontWeight = o.fontWeight;
            const d = U.createElement("div");
            const h = eX(r) || w(r, "pinType") === "fixed";
            const g = -1 !== e.indexOf("scroller");
            const v = h ? V : r.tagName === "IFRAME" ? r.contentDocument.body : r;
            const m = -1 !== e.indexOf("start");
            const y = m ? o_startColor : o_endColor;
            let x = "border-color:" + y + ";font-size:" + o_fontSize + ";color:" + y + ";font-weight:" + o_fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            x += `position:${(g || s) && h ? "fixed;" : "absolute;"}`;
            if (g || s || !h) {
                x += (n === A ? eJ : eQ) + ":" + (i + parseFloat(o_indent)) + "px;";
            }
            if (a) {
                x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;";
            }
            d._isStart = m;
            d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : ""));
            d.style.cssText = x;
            d.innerText = t || t === 0 ? e + "-" + t : e;
            if (v.children[0]) {
                v.insertBefore(d, v.children[0]);
            } else {
                v.appendChild(d);
            }
            d._offset = d["offset" + n.op.d2];
            tg(d, 0, n, m);
            return d;
        };
        var tg = (e, t, r, n)=>{
            const o = {
                display: "block"
            };
            const i = r[n ? "os2" : "p2"];
            const a = r[n ? "p2" : "os2"];
            e._isFlipped = n;
            o[r.a + "Percent"] = n ? -100 : 0;
            o[r.a] = n ? "1px" : 0;
            o["border" + i + e4] = 1;
            o["border" + a + e4] = 0;
            o[r.p] = t + "px";
            L.set(e, o);
        };
        var tv = [];
        var tm = {};
        var ty = ()=>Date_now_1() - eP > 34 && (e_ || (e_ = requestAnimationFrame(tX)));
        var tx = ()=>{
            if (!(ec && ec.isPressed && !(ec.startX > V.clientWidth))) {
                _scrollers.cache++;
                if (ec) {
                    if (!e_) {
                        e_ = requestAnimationFrame(tX);
                    }
                } else {
                    tX();
                }
                if (!eP) {
                    tE("scrollStart");
                }
                eP = Date_now_1();
            }
        };
        var tb = ()=>{
            ep = W.innerWidth;
            ef = W.innerHeight;
        };
        var t_ = (e)=>{
            _scrollers.cache++;
            if (e === true || !Q && !el && !U.fullscreenElement && !U.webkitFullscreenElement && (!eu || ep !== W.innerWidth || Math.abs(W.innerHeight - ef) > 0.25 * W.innerHeight)) {
                j.restart(true);
            }
        };
        var tw = {};
        var tT = [];
        var tC = function e() {
            return tl(t0, "scrollEnd", e) || tB(true);
        };
        var tE = (e)=>tw[e] && tw[e].map((e)=>e()) || tT;
        var tk = [];
        var tS = (e)=>{
            for(let t = 0; t < tk.length; t += 5){
                if (!e || tk[t + 4] && tk[t + 4].query === e) {
                    tk[t].style.cssText = tk[t + 1];
                    if (tk[t].getBBox) {
                        tk[t].setAttribute("transform", tk[t + 2] || "");
                    }
                    tk[t + 3].uncache = 1;
                }
            }
        };
        var tP = ()=>_scrollers.forEach((e)=>eq(e) && ++e.cacheID && (e.rec = e()));
        var tM = (e, t)=>{
            let r;
            for(er = 0; er < tv.length; er++){
                (r = tv[er]) && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(true, true));
            }
            ey = true;
            if (t) {
                tS(t);
            }
            if (!t) {
                tE("revert");
            }
        };
        var tO = (e, t)=>{
            _scrollers.cache++;
            if (t || !ew) {
                _scrollers.forEach((e)=>eq(e) && e.cacheID++ && (e.rec = 0));
            }
            if (eU(e)) {
                W.history.scrollRestoration = eg = e;
            }
        };
        var tA = 0;
        var tR = ()=>{
            if (eT !== tA) {
                const e = eT = tA;
                requestAnimationFrame(()=>e === tA && tB(true));
            }
        };
        var tD = ()=>{
            V.appendChild(ev);
            em = !ec && ev.offsetHeight || W.innerHeight;
            V.removeChild(ev);
        };
        var tY = (e)=>K(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((t)=>t.style.display = e ? "none" : "block");
        var tB = (e, t)=>{
            q = U.documentElement;
            V = U.body;
            G = [
                W,
                U,
                q,
                V
            ];
            if (eP && !e && !ey) {
                return void ts(t0, "scrollEnd", tC);
            }
            tD();
            ew = t0.isRefreshing = true;
            if (!ey) {
                tP();
            }
            const r = tE("refreshInit");
            if (ea) {
                t0.sort();
            }
            if (!t) {
                tM();
            }
            _scrollers.forEach((e)=>{
                if (eq(e)) {
                    if (e.smooth) {
                        e.target.style.scrollBehavior = "auto";
                    }
                    e(0);
                }
            });
            tv.slice(0).forEach((e)=>e.refresh());
            ey = false;
            tv.forEach((e)=>{
                if (e._subPinOffset && e.pin) {
                    const t = e.vars.horizontal ? "offsetWidth" : "offsetHeight";
                    const r = e.pin[t];
                    e.revert(true, 1);
                    e.adjustPinSpacing(e.pin[t] - r);
                    e.refresh();
                }
            });
            ex = 1;
            tY(true);
            tv.forEach((e)=>{
                const t = eH(e.scroller, e._dir);
                const r = e.vars.end === "max" || e._endClamp && e.end > t;
                const n = e._startClamp && e.start >= t;
                if (r || n) {
                    e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, true);
                }
            });
            tY(false);
            ex = 0;
            r.forEach((e)=>e && e.render && e.render(-1));
            _scrollers.forEach((e)=>{
                eq(e) && (e.smooth && requestAnimationFrame(()=>e.target.style.scrollBehavior = "smooth"), e.rec && e(e.rec));
            });
            tO(eg, 1);
            j.pause();
            tA++;
            ew = 2;
            tX(2);
            tv.forEach((e)=>eq(e.vars.onRefresh) && e.vars.onRefresh(e));
            ew = t0.isRefreshing = false;
            tE("refresh");
        };
        var tI = 0;
        var tN = 1;
        var tX = (e)=>{
            if (e === 2 || !ew && !ey) {
                t0.isUpdating = true;
                if (eC) {
                    eC.update(0);
                }
                const t = tv.length;
                const r = Date_now_1();
                const n = r - eS >= 50;
                const o = t && tv[0].scroll();
                tN = tI > o ? -1 : 1;
                if (!ew) {
                    tI = o;
                }
                if (n) {
                    if (eP && !ee && r - eP > 200) {
                        eP = 0;
                        tE("scrollEnd");
                    }
                    $ = eS;
                    eS = r;
                }
                if (tN < 0) {
                    for(er = t; er-- > 0;){
                        if (tv[er]) {
                            tv[er].update(0, n);
                        }
                    }
                    tN = 1;
                } else {
                    for(er = 0; er < t; er++){
                        if (tv[er]) {
                            tv[er].update(0, n);
                        }
                    }
                }
                t0.isUpdating = false;
            }
            e_ = 0;
        };
        var tz = [
            e$,
            "top",
            eQ,
            eJ,
            e9 + e5,
            e9 + e2,
            e9 + "Top",
            e9 + e3,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order"
        ];
        var tF = tz.concat([
            e0,
            e1,
            "boxSizing",
            "max" + e4,
            "max" + e8,
            "position",
            e9,
            e6,
            e6 + "Top",
            e6 + e2,
            e6 + e5,
            e6 + e3
        ]);
        var tL = (e, t, r)=>{
            tU(r);
            const e__gsap = e._gsap;
            if (e__gsap.spacerIsNative) {
                tU(e__gsap.spacerState);
            } else if (e._gsap.swappedIn) {
                const o = t.parentNode;
                if (o) {
                    o.insertBefore(e, t);
                    o.removeChild(t);
                }
            }
            e._gsap.swappedIn = false;
        };
        var tH = (e, t, r, n)=>{
            if (!e._gsap.swappedIn) {
                let o;
                for(var i = tz.length, a = t.style, s = e.style; i--;){
                    a[o = tz[i]] = r[o];
                }
                a.position = r.position === "absolute" ? "absolute" : "relative";
                if (r.display === "inline") {
                    a.display = "inline-block";
                }
                s[eQ] = s[eJ] = "auto";
                a.flexBasis = r.flexBasis || "auto";
                a.overflow = "visible";
                a.boxSizing = "border-box";
                a[e0] = tn(e, op) + "px";
                a[e1] = tn(e, A) + "px";
                a[e6] = s[e9] = s.top = s[e$] = "0";
                tU(n);
                s[e0] = s["max" + e4] = r[e0];
                s[e1] = s["max" + e8] = r[e1];
                s[e6] = r[e6];
                if (e.parentNode !== t) {
                    e.parentNode.insertBefore(t, e);
                    t.appendChild(e);
                }
                e._gsap.swappedIn = true;
            }
        };
        var tW = /([A-Z])/g;
        var tU = (e)=>{
            if (e) {
                let t;
                let r;
                const n = e.t.style;
                const o = e.length;
                let i = 0;
                for((e.t._gsap || L.core.getCache(e.t)).uncache = 1; i < o; i += 2){
                    r = e[i + 1];
                    t = e[i];
                    if (r) {
                        n[t] = r;
                    } else if (n[t]) {
                        n.removeProperty(t.replace(tW, "-$1").toLowerCase());
                    }
                }
            }
        };
        var tq = (e)=>{
            for(var t = tF.length, r = e.style, n = [], o = 0; o < t; o++){
                n.push(tF[o], r[tF[o]]);
            }
            n.t = e;
            return n;
        };
        var tV = (e, t, r)=>{
            let n;
            const o = [];
            for(let i = e.length, a = 8 * !!r; a < i; a += 2){
                n = e[a];
                o.push(n, n in t ? t[n] : e[a + 1]);
            }
            o.t = e.t;
            return o;
        };
        var tG = {
            left: 0,
            top: 0
        };
        var tj = (e, t, r, n, o, i, a, s, l, c, u, f, p, d)=>{
            if (eq(e)) {
                e = e(s);
            }
            if (eU(e) && e.substr(0, 3) === "max") {
                e = f + (e.charAt(4) === "=" ? td("0" + e.substr(3), r) : 0);
            }
            let h;
            let g;
            let v;
            const m = p ? p.time() : 0;
            if (p) {
                p.seek(0);
            }
            if (!isNaN(e)) {
                e *= 1;
            }
            if (eV(e)) {
                if (p) {
                    e = L.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, f, e);
                }
                if (a) {
                    tg(a, r, n, true);
                }
            } else {
                if (eq(t)) {
                    t = t(s);
                }
                let y;
                let x;
                let b;
                let _;
                const w = (e || "0").split(" ");
                if (!((y = tr(v = R(t, s) || V) || {}).left || y.top || e7(v).display !== "none")) {
                    _ = v.style.display;
                    v.style.display = "block";
                    y = tr(v);
                    if (_) {
                        v.style.display = _;
                    } else {
                        v.style.removeProperty("display");
                    }
                }
                x = td(w[0], y[n.d]);
                b = td(w[1] || "0", r);
                e = y[n.p] - l[n.p] - c + x + o - b;
                if (a) {
                    tg(a, b, n, r - b < 20 || a._isStart && b > 20);
                }
                r -= r - b;
            }
            if (d) {
                s[d] = e || -0.001;
                if (e < 0) {
                    e = 0;
                }
            }
            if (i) {
                const T = e + r;
                const C = i._isStart;
                h = "scroll" + n.d2;
                tg(i, T, n, C && T > 20 || !C && (u ? Math.max(V[h], q[h]) : i.parentNode[h]) <= T + 1);
                if (u) {
                    l = tr(a);
                    if (u) {
                        i.style[n.op.p] = `${l[n.op.p] - n.op.m - i._offset}px`;
                    }
                }
            }
            if (p && v) {
                h = tr(v);
                p.seek(f);
                g = tr(v);
                p._caScrollDist = h[n.p] - g[n.p];
                e = e / p._caScrollDist * f;
            }
            if (p) {
                p.seek(m);
            }
            if (p) {
                return e;
            }
            return Math.round(e);
        };
        var tK = /(webkit|moz|length|cssText|inset)/i;
        var tZ = (e, t, r, n)=>{
            if (e.parentNode !== t) {
                let o;
                let i;
                const a = e.style;
                if (t === V) {
                    e._stOrig = a.cssText;
                    for(o in i = e7(e)){
                        if (!(+o || tK.test(o) || !i[o] || typeof a[o] !== "string" || o === "0")) {
                            a[o] = i[o];
                        }
                    }
                    a.top = r;
                    a.left = n;
                } else {
                    a.cssText = e._stOrig;
                }
                L.core.getCache(e).uncache = 1;
                t.appendChild(e);
            }
        };
        var t$ = (e, t, r)=>{
            let n = t;
            let o = n;
            return (t)=>{
                const i = Math.round(e());
                if (i !== n && i !== o && Math.abs(i - n) > 3 && Math.abs(i - o) > 3) {
                    t = i;
                    if (r) {
                        r();
                    }
                }
                o = n;
                return n = Math.round(t);
            };
        };
        var tJ = (e, t, r)=>{
            const n = {};
            n[t.p] = "+=" + r;
            L.set(e, n);
        };
        var tQ = (e, t)=>{
            const r = Y(e, t);
            const n = "_scroll" + t.p2;
            const o = function t(o, i, a, s, l) {
                let t_tween = t.tween;
                const i_onComplete = i.onComplete;
                const f = {};
                a = a || r();
                const p = t$(r, a, ()=>{
                    t_tween.kill();
                    t.tween = 0;
                });
                l = s && l || 0;
                s = s || o - a;
                if (t_tween) {
                    t_tween.kill();
                }
                i[n] = o;
                i.inherit = false;
                i.modifiers = f;
                f[n] = ()=>p(a + s * t_tween.ratio + l * t_tween.ratio * t_tween.ratio);
                i.onUpdate = ()=>{
                    _scrollers.cache++;
                    if (t.tween) {
                        tX();
                    }
                };
                i.onComplete = ()=>{
                    t.tween = 0;
                    if (i_onComplete) {
                        i_onComplete.call(t_tween);
                    }
                };
                return t_tween = t.tween = L.to(e, i);
            };
            e[n] = r;
            r.wheelHandler = ()=>o.tween && o.tween.kill() && (o.tween = 0);
            ts(e, "wheel", r.wheelHandler);
            if (t0.isTouch) {
                ts(e, "touchmove", r.wheelHandler);
            }
            return o;
        };
        var t0 = function() {
            class e {
                constructor(t, r){
                    if (!(H || e.register(L))) {
                        console.warn("Please gsap.registerPlugin(ScrollTrigger)");
                    }
                    eh(this);
                    this.init(t, r);
                }
                init(trigger, r) {
                    this.progress = this.start = 0;
                    if (this.vars) {
                        this.kill(true, true);
                    }
                    if (!eM) {
                        this.update = this.refresh = this.kill = eY;
                        return;
                    }
                    let n;
                    let o;
                    let i;
                    let a;
                    let s;
                    let l;
                    let c;
                    let u;
                    let f;
                    let p;
                    let d;
                    let h;
                    let g;
                    let v;
                    let x;
                    let b;
                    let _;
                    let T;
                    let C;
                    let E;
                    let k;
                    let S;
                    let P;
                    let M;
                    let D;
                    let B;
                    let I;
                    let N;
                    let X;
                    let z;
                    let F;
                    let H;
                    let G;
                    let j;
                    let J;
                    let et;
                    let en;
                    let eo;
                    let ei;
                    let el;
                    let ec;
                    const eu = trigger = tt(eU(trigger) || eV(trigger) || trigger.nodeType ? {
                        trigger
                    } : trigger, tf);
                    const eu_onUpdate = eu.onUpdate;
                    let eu_toggleClass = eu.toggleClass;
                    let ed = eu.id;
                    const eu_onToggle = eu.onToggle;
                    const eu_onRefresh = eu.onRefresh;
                    const eu_scrub = eu.scrub;
                    let eu_trigger = eu.trigger;
                    let eu_pin = eu.pin;
                    let eu_pinSpacing = eu.pinSpacing;
                    const eu_invalidateOnRefresh = eu.invalidateOnRefresh;
                    let eu_anticipatePin = eu.anticipatePin;
                    const eu_onScrubComplete = eu.onScrubComplete;
                    const eu_onSnapComplete = eu.onSnapComplete;
                    const eu_once = eu.once;
                    let eu_snap = eu.snap;
                    const eu_pinReparent = eu.pinReparent;
                    let eu_pinSpacer = eu.pinSpacer;
                    const eu_containerAnimation = eu.containerAnimation;
                    const eu_fastScrollEnd = eu.fastScrollEnd;
                    const eu_preventOverlaps = eu.preventOverlaps;
                    const ta = trigger.horizontal || trigger.containerAnimation && trigger.horizontal !== false ? op : A;
                    const tc = !eu_scrub && eu_scrub !== 0;
                    const tp = R(trigger.scroller || W);
                    const tg = L.core.getCache(tp);
                    const ty = eX(tp);
                    const tb = ("pinType" in trigger ? trigger.pinType : w(tp, "pinType") || ty && "fixed") === "fixed";
                    const tw = [
                        trigger.onEnter,
                        trigger.onLeave,
                        trigger.onEnterBack,
                        trigger.onLeaveBack
                    ];
                    const tT = tc && trigger.toggleActions.split(" ");
                    const tE = "markers" in trigger ? trigger.markers : tf.markers;
                    const tk = ty ? 0 : parseFloat(e7(tp)["border" + ta.p2 + e4]) || 0;
                    const tS = this;
                    const tP = trigger.onRefreshInit && (()=>trigger.onRefreshInit(tS));
                    const tM = eL(tp, ty, ta);
                    const tO = !ty || ~_proxies.indexOf(tp) ? eF(tp) : ()=>tG;
                    let tA = 0;
                    let tD = 0;
                    let tY = 0;
                    const tB = Y(tp, ta);
                    tS._startClamp = tS._endClamp = false;
                    tS._dir = ta;
                    eu_anticipatePin *= 45;
                    tS.scroller = tp;
                    tS.scroll = eu_containerAnimation ? eu_containerAnimation.time.bind(eu_containerAnimation) : tB;
                    l = tB();
                    tS.vars = trigger;
                    r = r || trigger.animation;
                    if ("refreshPriority" in trigger) {
                        ea = 1;
                        if (-9999 === trigger.refreshPriority) {
                            eC = tS;
                        }
                    }
                    tg.tweenScroll = tg.tweenScroll || {
                        top: tQ(tp, A),
                        left: tQ(tp, op)
                    };
                    tS.tweenTo = i = tg.tweenScroll[ta.p];
                    tS.scrubDuration = (e)=>{
                        if (J = eV(e) && e) {
                            if (j) {
                                j.duration(e);
                            } else {
                                j = L.to(r, {
                                    ease: "expo",
                                    totalProgress: "+=0",
                                    inherit: false,
                                    duration: J,
                                    paused: true,
                                    onComplete () {
                                        return eu_onScrubComplete && eu_onScrubComplete(tS);
                                    }
                                });
                            }
                        } else {
                            if (j) {
                                j.progress(1).kill();
                            }
                            j = 0;
                        }
                    };
                    if (r) {
                        r.vars.lazy = false;
                        r._initted && !tS.isReverted || r.vars.immediateRender !== false && trigger.immediateRender !== false && r.duration() && r.render(0, true, true);
                        tS.animation = r.pause();
                        r.scrollTrigger = tS;
                        tS.scrubDuration(eu_scrub);
                        H = 0;
                        if (!ed) {
                            ed = r.vars.id;
                        }
                    }
                    if (eu_snap) {
                        if (!eG(eu_snap) || eu_snap.push) {
                            eu_snap = {
                                snapTo: eu_snap
                            };
                        }
                        if ("scrollBehavior" in V.style) {
                            L.set(ty ? [
                                V,
                                q
                            ] : tp, {
                                scrollBehavior: "auto"
                            });
                        }
                        _scrollers.forEach((e)=>eq(e) && e.target === (ty ? U.scrollingElement || q : tp) && (e.smooth = false));
                        s = eq(eu_snap.snapTo) ? eu_snap.snapTo : eu_snap.snapTo === "labels" ? (n = r, (e)=>L.utils.snap(to(n), e)) : eu_snap.snapTo === "labelsDirectional" ? (o = r, (e, t)=>ti(to(o))(e, t.direction)) : eu_snap.directional !== false ? (e, t)=>ti(eu_snap.snapTo)(e, Date_now_1() - tD < 500 ? 0 : t.direction) : L.utils.snap(eu_snap.snapTo);
                        et = eG(et = eu_snap.duration || {
                            min: 0.1,
                            max: 2
                        }) ? Z(et.min, et.max) : Z(et, et);
                        en = L.delayedCall(eu_snap.delay || J / 2 || 0.1, ()=>{
                            const e = tB();
                            const t = Date_now_1() - tD < 500;
                            const i_tween = i.tween;
                            if ((t || Math.abs(tS.getVelocity()) < 10) && !i_tween && !ee && tA !== e) {
                                let o;
                                let a;
                                const l = (e - u) / b;
                                const c = r && !tc ? r.totalProgress() : l;
                                const p = t ? 0 : (c - G) / (Date_now_1() - $) * 1000 || 0;
                                let d = L.utils.clamp(-l, 1 - l, Math_abs(p / 2) * p / 0.185);
                                const h = l + (eu_snap.inertia === false ? 0 : d);
                                const g = eu_snap;
                                const v = g.onStart;
                                const m = g.onInterrupt;
                                const y = g.onComplete;
                                if (!eV(o = s(h, tS))) {
                                    o = h;
                                }
                                a = Math.max(0, Math.round(u + o * b));
                                if (e <= f && e >= u && a !== e) {
                                    if (i_tween && !i_tween._initted && i_tween.data <= Math_abs(a - e)) {
                                        return;
                                    }
                                    if (eu_snap.inertia === false) {
                                        d = o - l;
                                    }
                                    i(a, {
                                        duration: et(Math_abs(0.185 * Math.max(Math_abs(h - c), Math_abs(o - c)) / p / 0.05 || 0)),
                                        ease: eu_snap.ease || "power3",
                                        data: Math_abs(a - e),
                                        onInterrupt () {
                                            return en.restart(true) && m && eK(tS, m);
                                        },
                                        onComplete () {
                                            tS.update();
                                            tA = tB();
                                            r && !tc && (j ? j.resetTo("totalProgress", o, r._tTime / r._tDur) : r.progress(o));
                                            H = G = r && !tc ? r.totalProgress() : tS.progress;
                                            if (eu_onSnapComplete) {
                                                eu_onSnapComplete(tS);
                                            }
                                            if (y) {
                                                eK(tS, y);
                                            }
                                        }
                                    }, e, d * b, a - e - d * b);
                                    if (v) {
                                        eK(tS, v, i.tween);
                                    }
                                }
                            } else {
                                if (tS.isActive && tA !== e) {
                                    en.restart(true);
                                }
                            }
                        }).pause();
                    }
                    if (ed) {
                        tm[ed] = tS;
                    }
                    if (ec = (eu_trigger = tS.trigger = R(eu_trigger || eu_pin !== true && eu_pin)) && eu_trigger._gsap && eu_trigger._gsap.stRevert) {
                        ec = ec(tS);
                    }
                    eu_pin = eu_pin === true ? eu_trigger : R(eu_pin);
                    if (eU(eu_toggleClass)) {
                        eu_toggleClass = {
                            targets: eu_trigger,
                            className: eu_toggleClass
                        };
                    }
                    if (eu_pin) {
                        if (!(eu_pinSpacing === false || eu_pinSpacing === e9)) {
                            eu_pinSpacing = (!!eu_pinSpacing || !eu_pin.parentNode || !eu_pin.parentNode.style || e7(eu_pin.parentNode).display !== "flex") && e6;
                        }
                        tS.pin = eu_pin;
                        if ((a = L.core.getCache(eu_pin)).spacer) {
                            _ = a.pinState;
                        } else {
                            if (eu_pinSpacer) {
                                if ((eu_pinSpacer = R(eu_pinSpacer)) && !eu_pinSpacer.nodeType) {
                                    eu_pinSpacer = eu_pinSpacer.current || eu_pinSpacer.nativeElement;
                                }
                                a.spacerIsNative = !!eu_pinSpacer;
                                if (eu_pinSpacer) {
                                    a.spacerState = tq(eu_pinSpacer);
                                }
                            }
                            a.spacer = E = eu_pinSpacer || U.createElement("div");
                            E.classList.add("pin-spacer");
                            if (ed) {
                                E.classList.add("pin-spacer-" + ed);
                            }
                            a.pinState = _ = tq(eu_pin);
                        }
                        if (trigger.force3D !== false) {
                            L.set(eu_pin, {
                                force3D: true
                            });
                        }
                        tS.spacer = E = a.spacer;
                        B = (F = e7(eu_pin))[eu_pinSpacing + ta.os2];
                        S = L.getProperty(eu_pin);
                        P = L.quickSetter(eu_pin, ta.a, "px");
                        tH(eu_pin, E, F);
                        C = tq(eu_pin);
                    }
                    if (tE) {
                        v = eG(tE) ? tt(tE, tu) : tu;
                        h = th("scroller-start", ed, tp, ta, v, 0);
                        g = th("scroller-end", ed, tp, ta, v, 0, h);
                        k = h["offset" + ta.op.d2];
                        const tI = R(w(tp, "content") || tp);
                        p = this.markerStart = th("start", ed, tI, ta, v, k, 0, eu_containerAnimation);
                        d = this.markerEnd = th("end", ed, tI, ta, v, k, 0, eu_containerAnimation);
                        if (eu_containerAnimation) {
                            el = L.quickSetter([
                                p,
                                d
                            ], ta.a, "px");
                        }
                        if (!(tb || _proxies.length && w(tp, "fixedMarkers") === true)) {
                            te(ty ? V : tp);
                            L.set([
                                h,
                                g
                            ], {
                                force3D: true
                            });
                            N = L.quickSetter(h, ta.a, "px");
                            z = L.quickSetter(g, ta.a, "px");
                        }
                    }
                    if (eu_containerAnimation) {
                        const tX = eu_containerAnimation.vars.onUpdate;
                        const tz = eu_containerAnimation.vars.onUpdateParams;
                        eu_containerAnimation.eventCallback("onUpdate", ()=>{
                            tS.update(0, 0, 1);
                            if (tX) {
                                tX.apply(eu_containerAnimation, tz || []);
                            }
                        });
                    }
                    tS.previous = ()=>tv[tv.indexOf(tS) - 1];
                    tS.next = ()=>tv[tv.indexOf(tS) + 1];
                    tS.revert = (e, t)=>{
                        if (!t) {
                            return tS.kill(true);
                        }
                        const n = e !== false || !tS.enabled;
                        const o = Q;
                        if (n !== tS.isReverted) {
                            if (n) {
                                eo = Math.max(tB(), tS.scroll.rec || 0);
                                tY = tS.progress;
                                ei = r && r.progress();
                            }
                            if (p) {
                                [
                                    p,
                                    d,
                                    h,
                                    g
                                ].forEach((e)=>e.style.display = n ? "none" : "block");
                            }
                            if (n) {
                                Q = tS;
                                tS.update(n);
                            }
                            !eu_pin || eu_pinReparent && tS.isActive || (n ? tL(eu_pin, E, _) : tH(eu_pin, E, e7(eu_pin), I));
                            if (!n) {
                                tS.update(n);
                            }
                            Q = o;
                            tS.isReverted = n;
                        }
                    };
                    tS.refresh = (n, o, a, s)=>{
                        if (!Q && tS.enabled || o) {
                            if (eu_pin && n && eP) {
                                return void ts(e, "scrollEnd", tC);
                            }
                            if (!ew && tP) {
                                tP(tS);
                            }
                            Q = tS;
                            if (i.tween && !a) {
                                i.tween.kill();
                                i.tween = 0;
                            }
                            if (j) {
                                j.pause();
                            }
                            if (eu_invalidateOnRefresh && r) {
                                r.revert({
                                    kill: false
                                }).invalidate();
                                if (r.getChildren) {
                                    r.getChildren(true, true, false).forEach((e)=>e.vars.immediateRender && e.render(0, true, true));
                                } else if (r.vars.immediateRender) {
                                    r.render(0, true, true);
                                }
                            }
                            if (!tS.isReverted) {
                                tS.revert(true, true);
                            }
                            tS._subPinOffset = false;
                            let v;
                            let m;
                            let y;
                            let w;
                            let k;
                            let P;
                            let B;
                            let N;
                            let z;
                            let F;
                            let H;
                            let W;
                            let G;
                            const K = tM();
                            const Z = tO();
                            const $ = eu_containerAnimation ? eu_containerAnimation.duration() : eH(tp, ta);
                            const J = b <= 0.01 || !b;
                            let ee = 0;
                            let et = s || 0;
                            let er = eG(a) ? a.end : trigger.end;
                            let ea = trigger.endTrigger || eu_trigger;
                            let el = eG(a) ? a.start : trigger.start || (trigger.start !== 0 && eu_trigger ? eu_pin ? "0 0" : "0 100%" : 0);
                            const ec = tS.pinnedContainer = trigger.pinnedContainer && R(trigger.pinnedContainer, tS);
                            let eu = eu_trigger && Math.max(0, tv.indexOf(tS)) || 0;
                            let ef = eu;
                            for(tE && eG(a) && (W = L.getProperty(h, ta.p), G = L.getProperty(g, ta.p)); ef-- > 0;){
                                if (!((P = tv[ef]).end || P.refresh(0, 1))) {
                                    Q = tS;
                                }
                                if ((B = P.pin) && (B === eu_trigger || B === eu_pin || B === ec) && !P.isReverted) {
                                    if (!F) {
                                        F = [];
                                    }
                                    F.unshift(P);
                                    P.revert(true, true);
                                }
                                P !== tv[ef] && (eu--, ef--);
                            }
                            if (eq(el)) {
                                el = el(tS);
                            }
                            u = tj(el = eO(el, "start", tS), eu_trigger, K, ta, tB(), p, h, tS, Z, tk, tb, $, eu_containerAnimation, tS._startClamp && "_startClamp") || (eu_pin ? -0.001 : 0);
                            if (eq(er)) {
                                er = er(tS);
                            }
                            eU(er) && !er.indexOf("+=") && (~er.indexOf(" ") ? er = (eU(el) ? el.split(" ")[0] : "") + er : (ee = td(er.substr(2), K), er = eU(el) ? el : (eu_containerAnimation ? L.utils.mapRange(0, eu_containerAnimation.duration(), eu_containerAnimation.scrollTrigger.start, eu_containerAnimation.scrollTrigger.end, u) : u) + ee, ea = eu_trigger));
                            er = eO(er, "end", tS);
                            f = Math.max(u, tj(er || (ea ? "100% 0" : $), ea, K, ta, tB() + ee, d, g, tS, Z, tk, tb, $, eu_containerAnimation, tS._endClamp && "_endClamp")) || -0.001;
                            ee = 0;
                            for(ef = eu; ef--;){
                                if ((B = (P = tv[ef] || {}).pin) && P.start - P._pinPush <= u && !eu_containerAnimation && P.end > 0) {
                                    v = P.end - (tS._startClamp ? Math.max(0, P.start) : P.start);
                                    if ((B === eu_trigger && P.start - P._pinPush < u || B === ec) && isNaN(el)) {
                                        ee += v * (1 - P.progress);
                                    }
                                    if (B === eu_pin) {
                                        et += v;
                                    }
                                }
                            }
                            u += ee;
                            f += ee;
                            if (tS._startClamp) {
                                tS._startClamp += ee;
                            }
                            if (tS._endClamp && !ew) {
                                tS._endClamp = f || -0.001;
                                f = Math.min(f, eH(tp, ta));
                            }
                            b = f - u || (u -= 0.01) && 0.001;
                            if (J) {
                                tY = L.utils.clamp(0, 1, L.utils.normalize(u, f, eo));
                            }
                            tS._pinPush = et;
                            if (p && ee) {
                                v = {};
                                v[ta.a] = "+=" + ee;
                                if (ec) {
                                    v[ta.p] = "-=" + tB();
                                }
                                L.set([
                                    p,
                                    d
                                ], v);
                            }
                            if (eu_pin && !(ex && tS.end >= eH(tp, ta))) {
                                v = e7(eu_pin);
                                w = ta === A;
                                y = tB();
                                M = parseFloat(S(ta.a)) + et;
                                if (!$ && f > 1) {
                                    H = {
                                        style: H = (ty ? U.scrollingElement || q : tp).style,
                                        value: H["overflow" + ta.a.toUpperCase()]
                                    };
                                    if (ty && e7(V)["overflow" + ta.a.toUpperCase()] !== "scroll") {
                                        H.style["overflow" + ta.a.toUpperCase()] = "scroll";
                                    }
                                }
                                tH(eu_pin, E, v);
                                C = tq(eu_pin);
                                m = tr(eu_pin, true);
                                N = tb && Y(tp, w ? op : A)();
                                if (eu_pinSpacing) {
                                    I = [
                                        eu_pinSpacing + ta.os2,
                                        `${b + et}px`
                                    ];
                                    I.t = E;
                                    if (ef = eu_pinSpacing === e6 ? tn(eu_pin, ta) + b + et : 0) {
                                        I.push(ta.d, ef + "px");
                                        if (E.style.flexBasis !== "auto") {
                                            E.style.flexBasis = ef + "px";
                                        }
                                    }
                                    tU(I);
                                    if (ec) {
                                        tv.forEach((e)=>{
                                            if (e.pin === ec && e.vars.pinSpacing !== false) {
                                                e._subPinOffset = true;
                                            }
                                        });
                                    }
                                    if (tb) {
                                        tB(eo);
                                    }
                                } else if ((ef = tn(eu_pin, ta)) && E.style.flexBasis !== "auto") {
                                    E.style.flexBasis = ef + "px";
                                }
                                if (tb) {
                                    k = {
                                        top: `${m.top + (w ? y - u : N)}px`,
                                        left: `${m.left + (w ? N : y - u)}px`,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    };
                                    k[e0] = k["max" + e4] = Math.ceil(m.width) + "px";
                                    k[e1] = k["max" + e8] = Math.ceil(m.height) + "px";
                                    k[e9] = k[e9 + "Top"] = k[e9 + e2] = k[e9 + e5] = k[e9 + e3] = "0";
                                    k[e6] = v[e6];
                                    k[e6 + "Top"] = v[e6 + "Top"];
                                    k[e6 + e2] = v[e6 + e2];
                                    k[e6 + e5] = v[e6 + e5];
                                    k[e6 + e3] = v[e6 + e3];
                                    T = tV(_, k, eu_pinReparent);
                                    if (ew) {
                                        tB(0);
                                    }
                                }
                                if (r) {
                                    z = r._initted;
                                    es(1);
                                    r.render(r.duration(), true, true);
                                    D = S(ta.a) - M + b + et;
                                    X = Math.abs(b - D) > 1;
                                    if (tb && X) {
                                        T.splice(T.length - 2, 2);
                                    }
                                    r.render(0, true, true);
                                    if (!z) {
                                        r.invalidate(true);
                                    }
                                    if (!r.parent) {
                                        r.totalTime(r.totalTime());
                                    }
                                    es(0);
                                } else {
                                    D = b;
                                }
                                H && (H.value ? H.style["overflow" + ta.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + ta.a));
                            } else if (eu_trigger && tB() && !eu_containerAnimation) {
                                for(m = eu_trigger.parentNode; m && m !== V;){
                                    if (m._pinOffset) {
                                        u -= m._pinOffset;
                                        f -= m._pinOffset;
                                    }
                                    m = m.parentNode;
                                }
                            }
                            if (F) {
                                F.forEach((e)=>e.revert(false, true));
                            }
                            tS.start = u;
                            tS.end = f;
                            l = c = ew ? eo : tB();
                            if (!(eu_containerAnimation || ew)) {
                                if (l < eo) {
                                    tB(eo);
                                }
                                tS.scroll.rec = 0;
                            }
                            tS.revert(false, true);
                            tD = Date_now_1();
                            if (en) {
                                tA = -1;
                                en.restart(true);
                            }
                            Q = 0;
                            if (r && tc && (r._initted || ei) && r.progress() !== ei) {
                                r.progress(ei || 0, true).render(r.time(), true, true);
                            }
                            if (J || tY !== tS.progress || eu_containerAnimation || eu_invalidateOnRefresh || r && !r._initted) {
                                if (r && !tc && (r._initted || tY || r.vars.immediateRender !== false)) {
                                    r.totalProgress(eu_containerAnimation && u < -0.001 && !tY ? L.utils.normalize(u, f, 0) : tY, true);
                                }
                                tS.progress = J || (l - u) / b === tY ? 0 : tY;
                            }
                            if (eu_pin && eu_pinSpacing) {
                                E._pinOffset = Math.round(tS.progress * D);
                            }
                            if (j) {
                                j.invalidate();
                            }
                            if (!isNaN(W)) {
                                W -= L.getProperty(h, ta.p);
                                G -= L.getProperty(g, ta.p);
                                tJ(h, ta, W);
                                tJ(p, ta, W - (s || 0));
                                tJ(g, ta, G);
                                tJ(d, ta, G - (s || 0));
                            }
                            if (J && !ew) {
                                tS.update();
                            }
                            if (!(!eu_onRefresh || ew || x)) {
                                x = true;
                                eu_onRefresh(tS);
                                x = false;
                            }
                        }
                    };
                    tS.getVelocity = ()=>(tB() - c) / (Date_now_1() - $) * 1000 || 0;
                    tS.endAnimation = ()=>{
                        ej(tS.callbackAnimation);
                        r && (j ? j.progress(1) : r.paused() ? tc || ej(r, tS.direction < 0, 1) : ej(r, r.reversed()));
                    };
                    tS.labelToScroll = (e)=>r && r.labels && (u || tS.refresh() || u) + r.labels[e] / r.duration() * b || 0;
                    tS.getTrailing = (e)=>{
                        const t = tv.indexOf(tS);
                        const r = tS.direction > 0 ? tv.slice(0, t).reverse() : tv.slice(t + 1);
                        return (eU(e) ? r.filter((t)=>t.vars.preventOverlaps === e) : r).filter((e)=>{
                            if (tS.direction > 0) {
                                return e.end <= u;
                            }
                            return e.start >= f;
                        });
                    };
                    tS.update = (e, t, n)=>{
                        if (!eu_containerAnimation || n || e) {
                            let o;
                            let a;
                            let s;
                            let p;
                            let d;
                            let g;
                            let v;
                            const m = ew === true ? eo : tS.scroll();
                            const y = e ? 0 : (m - u) / b;
                            let x = y < 0 ? 0 : y > 1 ? 1 : y || 0;
                            const _ = tS.progress;
                            if (t) {
                                c = l;
                                l = eu_containerAnimation ? tB() : m;
                                if (eu_snap) {
                                    G = H;
                                    H = r && !tc ? r.totalProgress() : x;
                                }
                            }
                            eu_anticipatePin && eu_pin && !Q && !eE && eP && (!x && u < m + (m - c) / (Date_now_1() - $) * eu_anticipatePin ? x = 0.0001 : x === 1 && f > m + (m - c) / (Date_now_1() - $) * eu_anticipatePin && (x = 0.9999));
                            if (x !== _ && tS.enabled) {
                                p = (d = (o = tS.isActive = !!x && x < 1) != (!!_ && _ < 1)) || !!x != !!_;
                                tS.direction = x > _ ? 1 : -1;
                                tS.progress = x;
                                if (p && !Q) {
                                    a = x && !_ ? 0 : x === 1 ? 1 : _ === 1 ? 2 : 3;
                                    if (tc) {
                                        s = !d && tT[a + 1] !== "none" && tT[a + 1] || tT[a];
                                        v = r && (s === "complete" || s === "reset" || s in r);
                                    }
                                }
                                eu_preventOverlaps && (d || v) && (v || eu_scrub || !r) && (eq(eu_preventOverlaps) ? eu_preventOverlaps(tS) : tS.getTrailing(eu_preventOverlaps).forEach((e)=>e.endAnimation()));
                                !tc && (!j || Q || eE ? r && r.totalProgress(x, !!(Q && (tD || e))) : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", x, r._tTime / r._tDur) : (j.vars.totalProgress = x, j.invalidate().restart())));
                                if (eu_pin) {
                                    if (e && eu_pinSpacing) {
                                        E.style[eu_pinSpacing + ta.os2] = B;
                                    }
                                    if (tb) {
                                        if (p) {
                                            g = !e && x > _ && f + 1 > m && m + 1 >= eH(tp, ta);
                                            if (eu_pinReparent) {
                                                if (!e && (o || g)) {
                                                    const w = tr(eu_pin, true);
                                                    const k = m - u;
                                                    tZ(eu_pin, V, `${w.top + (ta === A ? k : 0)}px`, `${w.left + (ta === A ? 0 : k)}px`);
                                                } else {
                                                    tZ(eu_pin, E);
                                                }
                                            }
                                            tU(o || g ? T : C);
                                            if (!(X && x < 1 && o)) {
                                                P(M + (x !== 1 || g ? 0 : D));
                                            }
                                        }
                                    } else {
                                        P(eB(M + D * x));
                                    }
                                }
                                if (!(!eu_snap || i.tween || Q || eE)) {
                                    en.restart(true);
                                }
                                if (eu_toggleClass && (d || eu_once && x && (x < 1 || !eb))) {
                                    K(eu_toggleClass.targets).forEach((e)=>e.classList[o || eu_once ? "add" : "remove"](eu_toggleClass.className));
                                }
                                if (!(!eu_onUpdate || tc || e)) {
                                    eu_onUpdate(tS);
                                }
                                p && !Q ? (tc && (v && (s === "complete" ? r.pause().totalProgress(1) : s === "reset" ? r.restart(true).pause() : s === "restart" ? r.restart(true) : r[s]()), eu_onUpdate && eu_onUpdate(tS)), (d || !eb) && (eu_onToggle && d && eK(tS, eu_onToggle), tw[a] && eK(tS, tw[a]), eu_once && (x === 1 ? tS.kill(false, 1) : tw[a] = 0), !d && tw[a = x === 1 ? 1 : 3] && eK(tS, tw[a])), eu_fastScrollEnd && !o && Math.abs(tS.getVelocity()) > (eV(eu_fastScrollEnd) ? eu_fastScrollEnd : 2500) && (ej(tS.callbackAnimation), j ? j.progress(1) : ej(r, s === "reverse" ? 1 : !x, 1))) : tc && eu_onUpdate && !Q && eu_onUpdate(tS);
                            }
                            if (z) {
                                const S = eu_containerAnimation ? m / eu_containerAnimation.duration() * (eu_containerAnimation._caScrollDist || 0) : m;
                                N(S + +!!h._isFlipped);
                                z(S);
                            }
                            if (el) {
                                el(-m / eu_containerAnimation.duration() * (eu_containerAnimation._caScrollDist || 0));
                            }
                        }
                    };
                    tS.enable = (t, r)=>{
                        if (!tS.enabled) {
                            tS.enabled = true;
                            ts(tp, "resize", t_);
                            if (!ty) {
                                ts(tp, "scroll", tx);
                            }
                            if (tP) {
                                ts(e, "refreshInit", tP);
                            }
                            if (t !== false) {
                                tS.progress = tY = 0;
                                l = c = tA = tB();
                            }
                            if (r !== false) {
                                tS.refresh();
                            }
                        }
                    };
                    tS.getTween = (e)=>{
                        if (e && i) {
                            return i.tween;
                        }
                        return j;
                    };
                    tS.setPositions = (e, t, r, n)=>{
                        if (eu_containerAnimation) {
                            const o = eu_containerAnimation.scrollTrigger;
                            const i = eu_containerAnimation.duration();
                            const a = o.end - o.start;
                            e = o.start + a * e / i;
                            t = o.start + a * t / i;
                        }
                        tS.refresh(false, false, {
                            start: eA(e, r && !!tS._startClamp),
                            end: eA(t, r && !!tS._endClamp)
                        }, n);
                        tS.update();
                    };
                    tS.adjustPinSpacing = (e)=>{
                        if (I && e) {
                            const t = I.indexOf(ta.d) + 1;
                            I[t] = `${parseFloat(I[t]) + e}px`;
                            I[1] = `${parseFloat(I[1]) + e}px`;
                            tU(I);
                        }
                    };
                    tS.disable = (t, r)=>{
                        if (t !== false) {
                            tS.revert(true, true);
                        }
                        if (tS.enabled && (tS.enabled = tS.isActive = false, r || j && j.pause(), eo = 0, a && (a.uncache = 1), tP && tl(e, "refreshInit", tP), en && (en.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !ty)) {
                            for(let n = tv.length; n--;){
                                if (tv[n].scroller === tp && tv[n] !== tS) {
                                    return;
                                }
                            }
                            tl(tp, "resize", t_);
                            if (!ty) {
                                tl(tp, "scroll", tx);
                            }
                        }
                    };
                    tS.kill = (e, n)=>{
                        tS.disable(e, n);
                        if (j && !n) {
                            j.kill();
                        }
                        ed && delete tm[ed];
                        let o = tv.indexOf(tS);
                        if (o >= 0) {
                            tv.splice(o, 1);
                        }
                        o === er && tN > 0 && er--;
                        o = 0;
                        tv.forEach((e)=>e.scroller === tS.scroller && (o = 1));
                        if (!(o || ew)) {
                            tS.scroll.rec = 0;
                        }
                        if (r) {
                            r.scrollTrigger = null;
                            if (e) {
                                r.revert({
                                    kill: false
                                });
                            }
                            if (!n) {
                                r.kill();
                            }
                        }
                        if (p) {
                            [
                                p,
                                d,
                                h,
                                g
                            ].forEach((e)=>e.parentNode && e.parentNode.removeChild(e));
                        }
                        if (eC === tS) {
                            eC = 0;
                        }
                        if (eu_pin) {
                            if (a) {
                                a.uncache = 1;
                            }
                            o = 0;
                            tv.forEach((e)=>e.pin === eu_pin && o++);
                            if (!o) {
                                a.spacer = 0;
                            }
                        }
                        if (trigger.onKill) {
                            trigger.onKill(tS);
                        }
                    };
                    tv.push(tS);
                    tS.enable(false, false);
                    if (ec) {
                        ec(tS);
                    }
                    if (r && r.add && !b) {
                        const tF = tS.update;
                        tS.update = ()=>{
                            tS.update = tF;
                            _scrollers.cache++;
                            if (!(u || f)) {
                                tS.refresh();
                            }
                        };
                        L.delayedCall(0.01, tS.update);
                        b = 0.01;
                        f = 0;
                        u = 0;
                    } else {
                        tS.refresh();
                    }
                    if (eu_pin) {
                        tR();
                    }
                }
                static register(t) {
                    if (!H) {
                        L = t || eN();
                        if (eI() && window.document) {
                            e.enable();
                        }
                        H = eM;
                    }
                    return H;
                }
                static defaults(e) {
                    if (e) {
                        for(const t in e){
                            tf[t] = e[t];
                        }
                    }
                    return tf;
                }
                static disable(e, t) {
                    eM = 0;
                    tv.forEach((r)=>r[t ? "kill" : "disable"](e));
                    tl(W, "wheel", tx);
                    tl(U, "scroll", tx);
                    clearInterval(J);
                    tl(U, "touchcancel", eY);
                    tl(V, "touchstart", eY);
                    ta(tl, U, "pointerdown,touchstart,mousedown", eR);
                    ta(tl, U, "pointerup,touchend,mouseup", eD);
                    j.kill();
                    eW(tl);
                    for(let r = 0; r < _scrollers.length; r += 3){
                        tc(tl, _scrollers[r], _scrollers[r + 1]);
                        tc(tl, _scrollers[r], _scrollers[r + 2]);
                    }
                }
                static enable() {
                    W = window;
                    q = (U = document).documentElement;
                    V = U.body;
                    if (L) {
                        K = L.utils.toArray;
                        Z = L.utils.clamp;
                        eh = L.core.context || eY;
                        es = L.core.suppressOverwrites || eY;
                        eg = W.history.scrollRestoration || "auto";
                        tI = W.pageYOffset || 0;
                        L.core.globals("ScrollTrigger", e);
                        if (V) {
                            eM = 1;
                            (ev = document.createElement("div")).style.height = "100vh";
                            ev.style.position = "absolute";
                            tD();
                            (function e() {
                                return eM && requestAnimationFrame(e);
                            })();
                            F.register(L);
                            e.isTouch = F.isTouch;
                            ed = F.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
                            eu = F.isTouch === 1;
                            ts(W, "wheel", tx);
                            G = [
                                W,
                                U,
                                q,
                                V
                            ];
                            if (L.matchMedia) {
                                e.matchMedia = (e)=>{
                                    let t;
                                    const r = L.matchMedia();
                                    for(t in e){
                                        r.add(t, e[t]);
                                    }
                                    return r;
                                };
                                L.addEventListener("matchMediaInit", ()=>{
                                    tP();
                                    tM();
                                });
                                L.addEventListener("matchMediaRevert", ()=>tS());
                                L.addEventListener("matchMedia", ()=>{
                                    tB(0, 1);
                                    tE("matchMedia");
                                });
                                L.matchMedia().add("(orientation: portrait)", ()=>{
                                    tb();
                                    return tb;
                                });
                            } else {
                                console.warn("Requires GSAP 3.11.0 or later");
                            }
                            tb();
                            ts(U, "scroll", tx);
                            let t;
                            let r;
                            const n = V.hasAttribute("style");
                            const o = V.style;
                            const i = o.borderTopStyle;
                            const a = L.core.Animation.prototype;
                            if (!a.revert) {
                                Object.defineProperty(a, "revert", {
                                    value () {
                                        return this.time(-0.01, true);
                                    }
                                });
                            }
                            o.borderTopStyle = "solid";
                            A.m = Math.round((t = tr(V)).top + A.sc()) || 0;
                            op.m = Math.round(t.left + op.sc()) || 0;
                            if (i) {
                                o.borderTopStyle = i;
                            } else {
                                o.removeProperty("border-top-style");
                            }
                            if (!n) {
                                V.setAttribute("style", "");
                                V.removeAttribute("style");
                            }
                            J = setInterval(ty, 250);
                            L.delayedCall(0.5, ()=>eE = 0);
                            ts(U, "touchcancel", eY);
                            ts(V, "touchstart", eY);
                            ta(ts, U, "pointerdown,touchstart,mousedown", eR);
                            ta(ts, U, "pointerup,touchend,mouseup", eD);
                            et = L.utils.checkPrefix("transform");
                            tF.push(et);
                            H = Date_now_1();
                            j = L.delayedCall(0.2, tB).pause();
                            ei = [
                                U,
                                "visibilitychange",
                                ()=>{
                                    const W_innerWidth = W.innerWidth;
                                    const W_innerHeight = W.innerHeight;
                                    if (U.hidden) {
                                        en = W_innerWidth;
                                        eo = W_innerHeight;
                                    } else if (en !== W_innerWidth || eo !== W_innerHeight) {
                                        t_();
                                    }
                                },
                                U,
                                "DOMContentLoaded",
                                tB,
                                W,
                                "load",
                                tB,
                                W,
                                "resize",
                                t_
                            ];
                            eW(ts);
                            tv.forEach((e)=>e.enable(0, 1));
                            for(r = 0; r < _scrollers.length; r += 3){
                                tc(tl, _scrollers[r], _scrollers[r + 1]);
                                tc(tl, _scrollers[r], _scrollers[r + 2]);
                            }
                        } else {
                            if (U) {
                                U.addEventListener("DOMContentLoaded", function t() {
                                    e.enable();
                                    U.removeEventListener("DOMContentLoaded", t);
                                });
                            }
                        }
                    }
                }
                static config(t) {
                    if ("limitCallbacks" in t) {
                        eb = !!t.limitCallbacks;
                    }
                    const t_syncInterval = t.syncInterval;
                    t_syncInterval && clearInterval(J) || (J = t_syncInterval) && setInterval(ty, t_syncInterval);
                    if ("ignoreMobileResize" in t) {
                        eu = e.isTouch === 1 && t.ignoreMobileResize;
                    }
                    if ("autoRefreshEvents" in t) {
                        if (!eW(tl)) {
                            eW(ts, t.autoRefreshEvents || "none");
                        }
                        el = -1 === (t.autoRefreshEvents + "").indexOf("resize");
                    }
                }
                static scrollerProxy(e, t) {
                    const r = R(e);
                    const n = _scrollers.indexOf(r);
                    const o = eX(r);
                    if (~n) {
                        _scrollers.splice(n, o ? 6 : 2);
                    }
                    t && (o ? _proxies.unshift(W, t, V, t, q, t) : _proxies.unshift(r, t));
                }
                static clearMatchMedia(e) {
                    tv.forEach((t)=>t._ctx && t._ctx.query === e && t._ctx.kill(true, true));
                }
                static isInViewport(e, t, r) {
                    const n = (eU(e) ? R(e) : e).getBoundingClientRect();
                    const o = n[r ? e0 : e1] * t || 0;
                    if (r) {
                        return n.right - o > 0 && n.left + o < W.innerWidth;
                    }
                    return n.bottom - o > 0 && n.top + o < W.innerHeight;
                }
                static positionInViewport(e, t, r) {
                    if (eU(e)) {
                        e = R(e);
                    }
                    const n = e.getBoundingClientRect();
                    const o = n[r ? e0 : e1];
                    const i = t == null ? o / 2 : t in tp ? tp[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
                    if (r) {
                        return (n.left + i) / W.innerWidth;
                    }
                    return (n.top + i) / W.innerHeight;
                }
                static killAll(e) {
                    tv.slice(0).forEach((e)=>e.vars.id !== "ScrollSmoother" && e.kill());
                    if (e !== true) {
                        const t = tw.killAll || [];
                        tw = {};
                        t.forEach((e)=>e());
                    }
                }
            }
            return e;
        }();
        t0.version = "3.15.0";
        t0.saveStyles = (e)=>{
            if (e) {
                return K(e).forEach((e)=>{
                    if (e && e.style) {
                        const t = tk.indexOf(e);
                        if (t >= 0) {
                            tk.splice(t, 5);
                        }
                        tk.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), L.core.getCache(e), eh());
                    }
                });
            }
            return tk;
        };
        t0.revert = (e, t)=>tM(!e, t);
        t0.create = (e, t)=>new t0(e, t);
        t0.refresh = (e)=>{
            if (e) {
                return t_(true);
            }
            return (H || t0.register()) && tB(true);
        };
        t0.update = (e)=>++_scrollers.cache && tX(2 * (e === true));
        t0.clearScrollMemory = tO;
        t0.maxScroll = (e, t)=>eH(e, t ? op : A);
        t0.getScrollFunc = (e, t)=>Y(R(e), t ? op : A);
        t0.getById = (e)=>tm[e];
        t0.getAll = ()=>tv.filter((e)=>e.vars.id !== "ScrollSmoother");
        t0.isScrolling = ()=>!!eP;
        t0.snapDirectional = ti;
        t0.addEventListener = (e, t)=>{
            const r = tw[e] || (tw[e] = []);
            if (!~r.indexOf(t)) {
                r.push(t);
            }
        };
        t0.removeEventListener = (e, t)=>{
            const r = tw[e];
            const n = r && r.indexOf(t);
            if (n >= 0) {
                r.splice(n, 1);
            }
        };
        t0.batch = (e, t)=>{
            let r;
            const n = [];
            const o = {};
            const i = t.interval || 0.016;
            let a = t.batchMax || 1000000000;
            const s = (e, t)=>{
                let r = [];
                let n = [];
                const o = L.delayedCall(i, ()=>{
                    t(r, n);
                    r = [];
                    n = [];
                }).pause();
                return (e)=>{
                    if (!r.length) {
                        o.restart(true);
                    }
                    r.push(e.trigger);
                    n.push(e);
                    if (a <= r.length) {
                        o.progress(1);
                    }
                };
            };
            for(r in t){
                o[r] = r.substr(0, 2) === "on" && eq(t[r]) && r !== "onRefreshInit" ? s(r, t[r]) : t[r];
            }
            if (eq(a)) {
                a = a();
                ts(t0, "refresh", ()=>a = t.batchMax());
            }
            K(e).forEach((e)=>{
                const t = {};
                for(r in o){
                    t[r] = o[r];
                }
                t.trigger = e;
                n.push(t0.create(t));
            });
            return n;
        };
        var t1;
        var t2 = (e, t, r, n)=>{
            if (t > n) {
                e(n);
            } else if (t < 0) {
                e(0);
            }
            if (r > n) {
                return (n - t) / (r - t);
            }
            if (r < 0) {
                return t / (t - r);
            }
            return 1;
        };
        var t3 = function e(t, r) {
            if (r === true) {
                t.style.removeProperty("touch-action");
            } else {
                t.style.touchAction = r === true ? "auto" : r ? "pan-" + r + (F.isTouch ? " pinch-zoom" : "") : "none";
            }
            if (t === q) {
                e(V, r);
            }
        };
        var t5 = {
            auto: 1,
            scroll: 1
        };
        var t6 = (e)=>{
            let t;
            const e_event = e.event;
            const e_target = e.target;
            const e_axis = e.axis;
            let target = (e_event.changedTouches ? e_event.changedTouches[0] : e_event).target;
            const a = target._gsap || L.core.getCache(target);
            const s = Date_now_1();
            if (!a._isScrollT || s - a._isScrollT > 2000) {
                while(target && target !== V && (target.scrollHeight <= target.clientHeight && target.scrollWidth <= target.clientWidth || !(t5[(t = e7(target)).overflowY] || t5[t.overflowX]))){
                    target = target.parentNode;
                }
                a._isScroll = target && target !== e_target && !eX(target) && (t5[(t = e7(target)).overflowY] || t5[t.overflowX]);
                a._isScrollT = s;
            }
            if (a._isScroll || e_axis === "x") {
                e_event.stopPropagation();
                e_event._gsapAllow = true;
            }
        };
        var _inputObserver = (target, type, r, n)=>F.create({
                target,
                capture: true,
                debounce: false,
                lockAxis: true,
                type,
                onWheel: n = n && t6,
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable () {
                    return r && ts(U, F.eventTypes[0], t8, false, true);
                },
                onDisable () {
                    return tl(U, F.eventTypes[0], t8, true);
                }
            });
        var t4 = /(input|label|select|textarea)/i;
        var t8 = (e)=>{
            const t = t4.test(e.target.tagName);
            if (t || t1) {
                e._gsapAllow = true;
                t1 = t;
            }
        };
        var t7 = (e)=>{
            if (!eG(e)) {
                e = {};
            }
            e.preventDefault = e.isNormalizer = e.allowClicks = true;
            if (!e.type) {
                e.type = "wheel,touch";
            }
            e.debounce = !!e.debounce;
            e.id = e.id || "normalizer";
            let t;
            let r;
            let n;
            let o;
            let i;
            let a;
            let s;
            let l;
            const c = e;
            const c_normalizeScrollX = c.normalizeScrollX;
            const c_momentum = c.momentum;
            const c_allowNestedScroll = c.allowNestedScroll;
            const c_onRelease = c.onRelease;
            const h = R(e.target) || q;
            const ScrollSmoother = L.core.globals().ScrollSmoother;
            const v = ScrollSmoother && ScrollSmoother.get();
            const y = ed && (e.content && R(e.content) || v && e.content !== false && !v.smooth() && v.content());
            const x = Y(h, A);
            const b = Y(h, op);
            let _ = 1;
            const w = (F.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth;
            let T = 0;
            const C = eq(c_momentum) ? ()=>c_momentum(t) : ()=>c_momentum || 2.8;
            const E = _inputObserver(h, e.type, true, c_allowNestedScroll);
            const k = ()=>o = false;
            let S = eY;
            let P = eY;
            const M = ()=>{
                r = eH(h, A);
                P = Z(+!!ed, r);
                if (c_normalizeScrollX) {
                    S = Z(0, eH(h, op));
                }
                n = tA;
            };
            const D = ()=>{
                y._gsap.y = eB(parseFloat(y._gsap.y) + x.offset) + "px";
                y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(y._gsap.y) + ", 0, 1)";
                x.offset = x.cacheID = 0;
            };
            const B = ()=>{
                if (o) {
                    requestAnimationFrame(k);
                    const e = eB(t.deltaY / 2);
                    const r = P(x.v - e);
                    if (y && r !== x.v + x.offset) {
                        x.offset = r - x.v;
                        const n = eB((parseFloat(y && y._gsap.y) || 0) - x.offset);
                        y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)";
                        y._gsap.y = n + "px";
                        x.cacheID = _scrollers.cache;
                        tX();
                    }
                    return true;
                }
                if (x.offset) {
                    D();
                }
                o = true;
            };
            const I = ()=>{
                M();
                i.isActive() && i.vars.scrollY > r && (x() > r ? i.progress(1) && x(r) : i.resetTo("scrollY", r));
            };
            if (y) {
                L.set(y, {
                    y: "+=0"
                });
            }
            e.ignoreCheck = (e)=>ed && e.type === "touchmove" && B() || _ > 1.05 && e.type !== "touchstart" || t.isGesturing || e.touches && e.touches.length > 1;
            e.onPress = ()=>{
                o = false;
                const e = _;
                _ = eB((W.visualViewport && W.visualViewport.scale || 1) / w);
                i.pause();
                if (e !== _) {
                    t3(h, _ > 1.01 || !c_normalizeScrollX && "x");
                }
                a = b();
                s = x();
                M();
                n = tA;
            };
            e.onRelease = e.onGestureStart = (e, t)=>{
                if (x.offset) {
                    D();
                }
                if (t) {
                    _scrollers.cache++;
                    let n;
                    let o;
                    let a = C();
                    if (c_normalizeScrollX) {
                        o = (n = b()) + -(0.05 * a * e.velocityX) / 0.227;
                        a *= t2(b, n, o, eH(h, op));
                        i.vars.scrollX = S(o);
                    }
                    o = (n = x()) + -(0.05 * a * e.velocityY) / 0.227;
                    a *= t2(x, n, o, eH(h, A));
                    i.vars.scrollY = P(o);
                    i.invalidate().duration(a).play(0.01);
                    if (ed && i.vars.scrollY >= r || n >= r - 1) {
                        L.to({}, {
                            onUpdate: I,
                            duration: a
                        });
                    }
                } else {
                    l.restart(true);
                }
                if (c_onRelease) {
                    c_onRelease(e);
                }
            };
            e.onWheel = ()=>{
                if (i._ts) {
                    i.pause();
                }
                if (Date_now_1() - T > 1000) {
                    n = 0;
                    T = Date_now_1();
                }
            };
            e.onChange = (e, t, r, o, i)=>{
                if (tA !== n) {
                    M();
                }
                if (t && c_normalizeScrollX) {
                    b(S(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1]));
                }
                if (r) {
                    if (x.offset) {
                        D();
                    }
                    const l = i[2] === r;
                    const c = l ? s + e.startY - e.y : x() + r - i[1];
                    const f = P(c);
                    if (l && c !== f) {
                        s += f - c;
                    }
                    x(f);
                }
                if (r || t) {
                    tX();
                }
            };
            e.onEnable = ()=>{
                t3(h, !c_normalizeScrollX && "x");
                t0.addEventListener("refresh", I);
                ts(W, "resize", I);
                if (x.smooth) {
                    x.target.style.scrollBehavior = "auto";
                    x.smooth = b.smooth = false;
                }
                E.enable();
            };
            e.onDisable = ()=>{
                t3(h, true);
                tl(W, "resize", I);
                t0.removeEventListener("refresh", I);
                E.kill();
            };
            e.lockAxis = e.lockAxis !== false;
            t = new F(e);
            t.iOS = ed;
            if (ed && !x()) {
                x(1);
            }
            if (ed) {
                L.ticker.add(eY);
            }
            l = t._dc;
            i = L.to(t, {
                ease: "power4",
                paused: true,
                inherit: false,
                scrollX: c_normalizeScrollX ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: t$(x, x(), ()=>i.pause())
                },
                onUpdate: tX,
                onComplete: l.vars.onComplete
            });
            return t;
        };
        t0.sort = (e)=>{
            if (eq(e)) {
                return tv.sort(e);
            }
            const t = W.pageYOffset || 0;
            t0.getAll().forEach((e)=>e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + W.innerHeight);
            return tv.sort(e || ((e, t)=>-1000000 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1000000 : e._sortY) - ((t.vars.containerAnimation ? 1000000 : t._sortY) + -1000000 * (t.vars.refreshPriority || 0))));
        };
        t0.observe = (e)=>new F(e);
        t0.normalizeScroll = (e)=>{
            if (e === undefined) {
                return ec;
            }
            if (e === true && ec) {
                return ec.enable();
            }
            if (e === false) {
                if (ec) {
                    ec.kill();
                }
                ec = e;
                return;
            }
            const t = e instanceof F ? e : t7(e);
            if (ec && ec.target === t.target) {
                ec.kill();
            }
            if (eX(t.target)) {
                ec = t;
            }
            return t;
        };
        t0.core = {
            _getVelocityProp,
            _inputObserver,
            _scrollers,
            _proxies,
            bridge: {
                ss () {
                    if (!eP) {
                        tE("scrollStart");
                    }
                    eP = Date_now_1();
                },
                ref () {
                    return Q;
                }
            }
        };
        if (eN()) {
            L.registerPlugin(t0);
        }
        e.s([
            "ScrollTrigger",
            0,
            t0
        ], 607198);
    }
]);
