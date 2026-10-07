;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "f8fccc2d-3f2f-0968-0cf9-ef53a8bf9d07";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    628974,
    (e)=>{
        "use strict";
        var r = e.i(809393);
        let o = (e, r)=>{
            if (e.length === 0) {
                return r.classGroupId;
            }
            let t = e[0];
            let n = r.nextPart.get(t);
            let l = n ? o(e.slice(1), n) : undefined;
            if (l) {
                return l;
            }
            if (r.validators.length === 0) {
                return;
            }
            let s = e.join("-");
            return r.validators.find(({ validator })=>validator(s))?.classGroupId;
        };
        let t = /^\[(.+)\]$/;
        let n = (e, r, classGroupId, t)=>{
            e.forEach((validator)=>{
                if (typeof validator === "string") {
                    (validator === "" ? r : l(r, validator)).classGroupId = classGroupId;
                    return;
                }
                if (typeof validator === "function") {
                    if (s(validator)) {
                        n(validator(t), r, classGroupId, t);
                    } else {
                        r.validators.push({
                            validator,
                            classGroupId
                        });
                    }
                } else {
                    Object.entries(validator).forEach(([e, s])=>{
                        n(s, l(r, e), classGroupId, t);
                    });
                }
            });
        };
        let l = (e, r)=>{
            let o = e;
            r.split("-").forEach((e)=>{
                if (!o.nextPart.has(e)) {
                    o.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    });
                }
                o = o.nextPart.get(e);
            });
            return o;
        };
        let s = (validator)=>validator.isThemeGetter;
        let i = /\s+/;
        function a() {
            let e;
            let r;
            let o = 0;
            let t = "";
            while(o < arguments.length){
                if ((e = arguments[o++]) && (r = d(e))) {
                    if (t) {
                        t += " ";
                    }
                    t += r;
                }
            }
            return t;
        }
        let d = (e)=>{
            let r;
            if (typeof e === "string") {
                return e;
            }
            let o = "";
            for(let t = 0; t < e.length; t++){
                if (e[t] && (r = d(e[t]))) {
                    if (o) {
                        o += " ";
                    }
                    o += r;
                }
            }
            return o;
        };
        function c(e, ...r) {
            let l;
            let s;
            let d;
            let p = (i)=>{
                let a;
                let c;
                s = (l = {
                    cache: ((e)=>{
                        if (e < 1) {
                            return {
                                get: ()=>undefined,
                                set: ()=>{}
                            };
                        }
                        let r = 0;
                        let o = new Map;
                        let t = new Map;
                        let n = (n, l)=>{
                            o.set(n, l);
                            if (++r > e) {
                                r = 0;
                                t = o;
                                o = new Map;
                            }
                        };
                        return {
                            get (e) {
                                let r = o.get(e);
                                if (r !== undefined) {
                                    return r;
                                }
                                if ((r = t.get(e)) !== undefined) {
                                    n(e, r);
                                    return r;
                                }
                            },
                            set (e, r) {
                                if (o.has(e)) {
                                    o.set(e, r);
                                } else {
                                    n(e, r);
                                }
                            }
                        };
                    })((a = r.reduce((acc, item)=>item(acc), e())).cacheSize),
                    parseClassName: ((e)=>{
                        let { prefix, experimentalParseClassName } = e;
                        let t = (e)=>{
                            let r;
                            let o;
                            let modifiers = [];
                            let n = 0;
                            let l = 0;
                            let s = 0;
                            for(let r = 0; r < e.length; r++){
                                let i = e[r];
                                if (n === 0 && l === 0) {
                                    if (i === ":") {
                                        modifiers.push(e.slice(s, r));
                                        s = r + 1;
                                        continue;
                                    }
                                    if (i === "/") {
                                        o = r;
                                        continue;
                                    }
                                }
                                i === "[" ? n++ : i === "]" ? n-- : i === "(" ? l++ : i === ")" && l--;
                            }
                            let i = modifiers.length === 0 ? e : e.substring(s);
                            let a = (r = i).endsWith("!") ? r.substring(0, r.length - 1) : r.startsWith("!") ? r.substring(1) : r;
                            return {
                                modifiers,
                                hasImportantModifier: a !== i,
                                baseClassName: a,
                                maybePostfixModifierPosition: o && o > s ? o - s : undefined
                            };
                        };
                        if (prefix) {
                            let e = prefix + ":";
                            let o = t;
                            t = (r)=>{
                                if (r.startsWith(e)) {
                                    return o(r.substring(e.length));
                                }
                                return {
                                    isExternal: true,
                                    modifiers: [],
                                    hasImportantModifier: false,
                                    baseClassName: r,
                                    maybePostfixModifierPosition: undefined
                                };
                            };
                        }
                        if (experimentalParseClassName) {
                            let parseClassName = t;
                            t = (className)=>experimentalParseClassName({
                                    className,
                                    parseClassName
                                });
                        }
                        return t;
                    })(a),
                    sortModifiers: (c = Object.fromEntries(a.orderSensitiveModifiers.map((e)=>[
                            e,
                            true
                        ])), (e)=>{
                        if (e.length <= 1) {
                            return e;
                        }
                        let r = [];
                        let o = [];
                        e.forEach((e)=>{
                            if (e[0] === "[" || c[e]) {
                                r.push(...o.sort(), e);
                                o = [];
                            } else {
                                o.push(e);
                            }
                        });
                        r.push(...o.sort());
                        return r;
                    }),
                    ...((e)=>{
                        let r = ((e)=>{
                            let { theme, classGroups } = e;
                            let t = {
                                nextPart: new Map,
                                validators: []
                            };
                            for(let e in classGroups){
                                n(classGroups[e], t, e, theme);
                            }
                            return t;
                        })(e);
                        let { conflictingClassGroups, conflictingClassGroupModifiers } = e;
                        return {
                            getClassGroupId: (e)=>{
                                let n = e.split("-");
                                if (n[0] === "" && n.length !== 1) {
                                    n.shift();
                                }
                                return o(n, r) || ((e)=>{
                                    if (t.test(e)) {
                                        let r = t.exec(e)[1];
                                        let o = r?.substring(0, r.indexOf(":"));
                                        if (o) {
                                            return "arbitrary.." + o;
                                        }
                                    }
                                })(e);
                            },
                            getConflictingClassGroupIds: (e, r)=>{
                                let o = conflictingClassGroups[e] || [];
                                if (r && conflictingClassGroupModifiers[e]) {
                                    return [
                                        ...o,
                                        ...conflictingClassGroupModifiers[e]
                                    ];
                                }
                                return o;
                            }
                        };
                    })(a)
                }).cache.get;
                d = l.cache.set;
                p = u;
                return u(i);
            };
            function u(e) {
                let r = s(e);
                if (r) {
                    return r;
                }
                let o = ((e, r)=>{
                    let { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = r;
                    let s = [];
                    let a = e.trim().split(i);
                    let d = "";
                    for(let e = a.length - 1; e >= 0; e -= 1){
                        let r = a[e];
                        let { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(r);
                        if (isExternal) {
                            d = r + (d.length > 0 ? " " + d : d);
                            continue;
                        }
                        let f = !!maybePostfixModifierPosition;
                        let m = getClassGroupId(f ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
                        if (!m) {
                            if (!f || !(m = getClassGroupId(baseClassName))) {
                                d = r + (d.length > 0 ? " " + d : d);
                                continue;
                            }
                            f = false;
                        }
                        let g = sortModifiers(modifiers).join(":");
                        let h = hasImportantModifier ? g + "!" : g;
                        let x = h + m;
                        if (s.includes(x)) {
                            continue;
                        }
                        s.push(x);
                        let w = getConflictingClassGroupIds(m, f);
                        for(let e = 0; e < w.length; ++e){
                            let r = w[e];
                            s.push(h + r);
                        }
                        d = r + (d.length > 0 ? " " + d : d);
                    }
                    return d;
                })(e, l);
                d(e, o);
                return o;
            }
            return function() {
                return p(a.apply(null, arguments));
            };
        }
        let p = (e)=>{
            let r = (r)=>r[e] || [];
            r.isThemeGetter = true;
            return r;
        };
        let u = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
        let b = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
        let f = /^\d+\/\d+$/;
        let m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
        let g = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
        let h = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
        let x = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        let w = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        let v = (e)=>f.test(e);
        let y = (e)=>!!e && !Number.isNaN(Number(e));
        let k = (e)=>!!e && Number.isInteger(Number(e));
        let z = (e)=>e.endsWith("%") && y(e.slice(0, -1));
        let M = (e)=>m.test(e);
        let G = ()=>true;
        let C = (e)=>g.test(e) && !h.test(e);
        let S = ()=>false;
        let j = (e)=>x.test(e);
        let $ = (e)=>w.test(e);
        let P = (e)=>!I(e) && !A(e);
        let N = (e)=>D(e, X, S);
        let I = (e)=>u.test(e);
        let E = (e)=>D(e, Y, C);
        let T = (e)=>D(e, Z, y);
        let O = (e)=>D(e, J, S);
        let q = (e)=>D(e, Q, $);
        let W = (e)=>D(e, S, j);
        let A = (e)=>b.test(e);
        let B = (e)=>H(e, Y);
        let F = (e)=>H(e, ee);
        let K = (e)=>H(e, J);
        let R = (e)=>H(e, X);
        let U = (e)=>H(e, Q);
        let _ = (e)=>H(e, er, true);
        let D = (e, r, o)=>{
            let t = u.exec(e);
            return !!t && (t[1] ? r(t[1]) : o(t[2]));
        };
        let H = (e, r, o = false)=>{
            let t = b.exec(e);
            return !!t && (t[1] ? r(t[1]) : o);
        };
        let J = (e)=>e === "position";
        let L = new Set([
            "image",
            "url"
        ]);
        let Q = (e)=>L.has(e);
        let V = new Set([
            "length",
            "size",
            "percentage"
        ]);
        let X = (e)=>V.has(e);
        let Y = (e)=>e === "length";
        let Z = (e)=>e === "number";
        let ee = (e)=>e === "family-name";
        let er = (e)=>e === "shadow";
        let eo = ()=>{
            let e = p("color");
            let r = p("font");
            let o = p("text");
            let t = p("font-weight");
            let n = p("tracking");
            let l = p("leading");
            let s = p("breakpoint");
            let i = p("container");
            let a = p("spacing");
            let d = p("radius");
            let c = p("shadow");
            let u = p("inset-shadow");
            let b = p("drop-shadow");
            let f = p("blur");
            let m = p("perspective");
            let g = p("aspect");
            let h = p("ease");
            let x = p("animate");
            let w = ()=>[
                    "auto",
                    "avoid",
                    "all",
                    "avoid-page",
                    "page",
                    "left",
                    "right",
                    "column"
                ];
            let C = ()=>[
                    "bottom",
                    "center",
                    "left",
                    "left-bottom",
                    "left-top",
                    "right",
                    "right-bottom",
                    "right-top",
                    "top"
                ];
            let S = ()=>[
                    "auto",
                    "hidden",
                    "clip",
                    "visible",
                    "scroll"
                ];
            let j = ()=>[
                    "auto",
                    "contain",
                    "none"
                ];
            let $ = ()=>[
                    A,
                    I,
                    a
                ];
            let D = ()=>[
                    v,
                    "full",
                    "auto",
                    ...$()
                ];
            let H = ()=>[
                    k,
                    "none",
                    "subgrid",
                    A,
                    I
                ];
            let J = ()=>[
                    "auto",
                    {
                        span: [
                            "full",
                            k,
                            A,
                            I
                        ]
                    },
                    A,
                    I
                ];
            let L = ()=>[
                    k,
                    "auto",
                    A,
                    I
                ];
            let Q = ()=>[
                    "auto",
                    "min",
                    "max",
                    "fr",
                    A,
                    I
                ];
            let V = ()=>[
                    "start",
                    "end",
                    "center",
                    "between",
                    "around",
                    "evenly",
                    "stretch",
                    "baseline"
                ];
            let X = ()=>[
                    "start",
                    "end",
                    "center",
                    "stretch"
                ];
            let Y = ()=>[
                    "auto",
                    ...$()
                ];
            let Z = ()=>[
                    v,
                    "auto",
                    "full",
                    "dvw",
                    "dvh",
                    "lvw",
                    "lvh",
                    "svw",
                    "svh",
                    "min",
                    "max",
                    "fit",
                    ...$()
                ];
            let ee = ()=>[
                    e,
                    A,
                    I
                ];
            let er = ()=>[
                    z,
                    E
                ];
            let eo = ()=>[
                    "",
                    "none",
                    "full",
                    d,
                    A,
                    I
                ];
            let et = ()=>[
                    "",
                    y,
                    B,
                    E
                ];
            let en = ()=>[
                    "solid",
                    "dashed",
                    "dotted",
                    "double"
                ];
            let el = ()=>[
                    "normal",
                    "multiply",
                    "screen",
                    "overlay",
                    "darken",
                    "lighten",
                    "color-dodge",
                    "color-burn",
                    "hard-light",
                    "soft-light",
                    "difference",
                    "exclusion",
                    "hue",
                    "saturation",
                    "color",
                    "luminosity"
                ];
            let es = ()=>[
                    "",
                    "none",
                    f,
                    A,
                    I
                ];
            let ei = ()=>[
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    A,
                    I
                ];
            let ea = ()=>[
                    "none",
                    y,
                    A,
                    I
                ];
            let ed = ()=>[
                    "none",
                    y,
                    A,
                    I
                ];
            let ec = ()=>[
                    y,
                    A,
                    I
                ];
            let ep = ()=>[
                    v,
                    "full",
                    ...$()
                ];
            return {
                cacheSize: 500,
                theme: {
                    animate: [
                        "spin",
                        "ping",
                        "pulse",
                        "bounce"
                    ],
                    aspect: [
                        "video"
                    ],
                    blur: [
                        M
                    ],
                    breakpoint: [
                        M
                    ],
                    color: [
                        G
                    ],
                    container: [
                        M
                    ],
                    "drop-shadow": [
                        M
                    ],
                    ease: [
                        "in",
                        "out",
                        "in-out"
                    ],
                    font: [
                        P
                    ],
                    "font-weight": [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black"
                    ],
                    "inset-shadow": [
                        M
                    ],
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose"
                    ],
                    perspective: [
                        "dramatic",
                        "near",
                        "normal",
                        "midrange",
                        "distant",
                        "none"
                    ],
                    radius: [
                        M
                    ],
                    shadow: [
                        M
                    ],
                    spacing: [
                        "px",
                        y
                    ],
                    text: [
                        M
                    ],
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest"
                    ]
                },
                classGroups: {
                    aspect: [
                        {
                            aspect: [
                                "auto",
                                "square",
                                v,
                                I,
                                A,
                                g
                            ]
                        }
                    ],
                    container: [
                        "container"
                    ],
                    columns: [
                        {
                            columns: [
                                y,
                                I,
                                A,
                                i
                            ]
                        }
                    ],
                    "break-after": [
                        {
                            "break-after": w()
                        }
                    ],
                    "break-before": [
                        {
                            "break-before": w()
                        }
                    ],
                    "break-inside": [
                        {
                            "break-inside": [
                                "auto",
                                "avoid",
                                "avoid-page",
                                "avoid-column"
                            ]
                        }
                    ],
                    "box-decoration": [
                        {
                            "box-decoration": [
                                "slice",
                                "clone"
                            ]
                        }
                    ],
                    box: [
                        {
                            box: [
                                "border",
                                "content"
                            ]
                        }
                    ],
                    display: [
                        "block",
                        "inline-block",
                        "inline",
                        "flex",
                        "inline-flex",
                        "table",
                        "inline-table",
                        "table-caption",
                        "table-cell",
                        "table-column",
                        "table-column-group",
                        "table-footer-group",
                        "table-header-group",
                        "table-row-group",
                        "table-row",
                        "flow-root",
                        "grid",
                        "inline-grid",
                        "contents",
                        "list-item",
                        "hidden"
                    ],
                    sr: [
                        "sr-only",
                        "not-sr-only"
                    ],
                    float: [
                        {
                            float: [
                                "right",
                                "left",
                                "none",
                                "start",
                                "end"
                            ]
                        }
                    ],
                    clear: [
                        {
                            clear: [
                                "left",
                                "right",
                                "both",
                                "none",
                                "start",
                                "end"
                            ]
                        }
                    ],
                    isolation: [
                        "isolate",
                        "isolation-auto"
                    ],
                    "object-fit": [
                        {
                            object: [
                                "contain",
                                "cover",
                                "fill",
                                "none",
                                "scale-down"
                            ]
                        }
                    ],
                    "object-position": [
                        {
                            object: [
                                ...C(),
                                I,
                                A
                            ]
                        }
                    ],
                    overflow: [
                        {
                            overflow: S()
                        }
                    ],
                    "overflow-x": [
                        {
                            "overflow-x": S()
                        }
                    ],
                    "overflow-y": [
                        {
                            "overflow-y": S()
                        }
                    ],
                    overscroll: [
                        {
                            overscroll: j()
                        }
                    ],
                    "overscroll-x": [
                        {
                            "overscroll-x": j()
                        }
                    ],
                    "overscroll-y": [
                        {
                            "overscroll-y": j()
                        }
                    ],
                    position: [
                        "static",
                        "fixed",
                        "absolute",
                        "relative",
                        "sticky"
                    ],
                    inset: [
                        {
                            inset: D()
                        }
                    ],
                    "inset-x": [
                        {
                            "inset-x": D()
                        }
                    ],
                    "inset-y": [
                        {
                            "inset-y": D()
                        }
                    ],
                    start: [
                        {
                            start: D()
                        }
                    ],
                    end: [
                        {
                            end: D()
                        }
                    ],
                    top: [
                        {
                            top: D()
                        }
                    ],
                    right: [
                        {
                            right: D()
                        }
                    ],
                    bottom: [
                        {
                            bottom: D()
                        }
                    ],
                    left: [
                        {
                            left: D()
                        }
                    ],
                    visibility: [
                        "visible",
                        "invisible",
                        "collapse"
                    ],
                    z: [
                        {
                            z: [
                                k,
                                "auto",
                                A,
                                I
                            ]
                        }
                    ],
                    basis: [
                        {
                            basis: [
                                v,
                                "full",
                                "auto",
                                i,
                                ...$()
                            ]
                        }
                    ],
                    "flex-direction": [
                        {
                            flex: [
                                "row",
                                "row-reverse",
                                "col",
                                "col-reverse"
                            ]
                        }
                    ],
                    "flex-wrap": [
                        {
                            flex: [
                                "nowrap",
                                "wrap",
                                "wrap-reverse"
                            ]
                        }
                    ],
                    flex: [
                        {
                            flex: [
                                y,
                                v,
                                "auto",
                                "initial",
                                "none",
                                I
                            ]
                        }
                    ],
                    grow: [
                        {
                            grow: [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    shrink: [
                        {
                            shrink: [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    order: [
                        {
                            order: [
                                k,
                                "first",
                                "last",
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "grid-cols": [
                        {
                            "grid-cols": H()
                        }
                    ],
                    "col-start-end": [
                        {
                            col: J()
                        }
                    ],
                    "col-start": [
                        {
                            "col-start": L()
                        }
                    ],
                    "col-end": [
                        {
                            "col-end": L()
                        }
                    ],
                    "grid-rows": [
                        {
                            "grid-rows": H()
                        }
                    ],
                    "row-start-end": [
                        {
                            row: J()
                        }
                    ],
                    "row-start": [
                        {
                            "row-start": L()
                        }
                    ],
                    "row-end": [
                        {
                            "row-end": L()
                        }
                    ],
                    "grid-flow": [
                        {
                            "grid-flow": [
                                "row",
                                "col",
                                "dense",
                                "row-dense",
                                "col-dense"
                            ]
                        }
                    ],
                    "auto-cols": [
                        {
                            "auto-cols": Q()
                        }
                    ],
                    "auto-rows": [
                        {
                            "auto-rows": Q()
                        }
                    ],
                    gap: [
                        {
                            gap: $()
                        }
                    ],
                    "gap-x": [
                        {
                            "gap-x": $()
                        }
                    ],
                    "gap-y": [
                        {
                            "gap-y": $()
                        }
                    ],
                    "justify-content": [
                        {
                            justify: [
                                ...V(),
                                "normal"
                            ]
                        }
                    ],
                    "justify-items": [
                        {
                            "justify-items": [
                                ...X(),
                                "normal"
                            ]
                        }
                    ],
                    "justify-self": [
                        {
                            "justify-self": [
                                "auto",
                                ...X()
                            ]
                        }
                    ],
                    "align-content": [
                        {
                            content: [
                                "normal",
                                ...V()
                            ]
                        }
                    ],
                    "align-items": [
                        {
                            items: [
                                ...X(),
                                "baseline"
                            ]
                        }
                    ],
                    "align-self": [
                        {
                            self: [
                                "auto",
                                ...X(),
                                "baseline"
                            ]
                        }
                    ],
                    "place-content": [
                        {
                            "place-content": V()
                        }
                    ],
                    "place-items": [
                        {
                            "place-items": [
                                ...X(),
                                "baseline"
                            ]
                        }
                    ],
                    "place-self": [
                        {
                            "place-self": [
                                "auto",
                                ...X()
                            ]
                        }
                    ],
                    p: [
                        {
                            p: $()
                        }
                    ],
                    px: [
                        {
                            px: $()
                        }
                    ],
                    py: [
                        {
                            py: $()
                        }
                    ],
                    ps: [
                        {
                            ps: $()
                        }
                    ],
                    pe: [
                        {
                            pe: $()
                        }
                    ],
                    pt: [
                        {
                            pt: $()
                        }
                    ],
                    pr: [
                        {
                            pr: $()
                        }
                    ],
                    pb: [
                        {
                            pb: $()
                        }
                    ],
                    pl: [
                        {
                            pl: $()
                        }
                    ],
                    m: [
                        {
                            m: Y()
                        }
                    ],
                    mx: [
                        {
                            mx: Y()
                        }
                    ],
                    my: [
                        {
                            my: Y()
                        }
                    ],
                    ms: [
                        {
                            ms: Y()
                        }
                    ],
                    me: [
                        {
                            me: Y()
                        }
                    ],
                    mt: [
                        {
                            mt: Y()
                        }
                    ],
                    mr: [
                        {
                            mr: Y()
                        }
                    ],
                    mb: [
                        {
                            mb: Y()
                        }
                    ],
                    ml: [
                        {
                            ml: Y()
                        }
                    ],
                    "space-x": [
                        {
                            "space-x": $()
                        }
                    ],
                    "space-x-reverse": [
                        "space-x-reverse"
                    ],
                    "space-y": [
                        {
                            "space-y": $()
                        }
                    ],
                    "space-y-reverse": [
                        "space-y-reverse"
                    ],
                    size: [
                        {
                            size: Z()
                        }
                    ],
                    w: [
                        {
                            w: [
                                i,
                                "screen",
                                ...Z()
                            ]
                        }
                    ],
                    "min-w": [
                        {
                            "min-w": [
                                i,
                                "screen",
                                "none",
                                ...Z()
                            ]
                        }
                    ],
                    "max-w": [
                        {
                            "max-w": [
                                i,
                                "screen",
                                "none",
                                "prose",
                                {
                                    screen: [
                                        s
                                    ]
                                },
                                ...Z()
                            ]
                        }
                    ],
                    h: [
                        {
                            h: [
                                "screen",
                                ...Z()
                            ]
                        }
                    ],
                    "min-h": [
                        {
                            "min-h": [
                                "screen",
                                "none",
                                ...Z()
                            ]
                        }
                    ],
                    "max-h": [
                        {
                            "max-h": [
                                "screen",
                                ...Z()
                            ]
                        }
                    ],
                    "font-size": [
                        {
                            text: [
                                "base",
                                o,
                                B,
                                E
                            ]
                        }
                    ],
                    "font-smoothing": [
                        "antialiased",
                        "subpixel-antialiased"
                    ],
                    "font-style": [
                        "italic",
                        "not-italic"
                    ],
                    "font-weight": [
                        {
                            font: [
                                t,
                                A,
                                T
                            ]
                        }
                    ],
                    "font-stretch": [
                        {
                            "font-stretch": [
                                "ultra-condensed",
                                "extra-condensed",
                                "condensed",
                                "semi-condensed",
                                "normal",
                                "semi-expanded",
                                "expanded",
                                "extra-expanded",
                                "ultra-expanded",
                                z,
                                I
                            ]
                        }
                    ],
                    "font-family": [
                        {
                            font: [
                                F,
                                I,
                                r
                            ]
                        }
                    ],
                    "fvn-normal": [
                        "normal-nums"
                    ],
                    "fvn-ordinal": [
                        "ordinal"
                    ],
                    "fvn-slashed-zero": [
                        "slashed-zero"
                    ],
                    "fvn-figure": [
                        "lining-nums",
                        "oldstyle-nums"
                    ],
                    "fvn-spacing": [
                        "proportional-nums",
                        "tabular-nums"
                    ],
                    "fvn-fraction": [
                        "diagonal-fractions",
                        "stacked-fractions"
                    ],
                    tracking: [
                        {
                            tracking: [
                                n,
                                A,
                                I
                            ]
                        }
                    ],
                    "line-clamp": [
                        {
                            "line-clamp": [
                                y,
                                "none",
                                A,
                                T
                            ]
                        }
                    ],
                    leading: [
                        {
                            leading: [
                                l,
                                ...$()
                            ]
                        }
                    ],
                    "list-image": [
                        {
                            "list-image": [
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "list-style-position": [
                        {
                            list: [
                                "inside",
                                "outside"
                            ]
                        }
                    ],
                    "list-style-type": [
                        {
                            list: [
                                "disc",
                                "decimal",
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "text-alignment": [
                        {
                            text: [
                                "left",
                                "center",
                                "right",
                                "justify",
                                "start",
                                "end"
                            ]
                        }
                    ],
                    "placeholder-color": [
                        {
                            placeholder: ee()
                        }
                    ],
                    "text-color": [
                        {
                            text: ee()
                        }
                    ],
                    "text-decoration": [
                        "underline",
                        "overline",
                        "line-through",
                        "no-underline"
                    ],
                    "text-decoration-style": [
                        {
                            decoration: [
                                ...en(),
                                "wavy"
                            ]
                        }
                    ],
                    "text-decoration-thickness": [
                        {
                            decoration: [
                                y,
                                "from-font",
                                "auto",
                                A,
                                E
                            ]
                        }
                    ],
                    "text-decoration-color": [
                        {
                            decoration: ee()
                        }
                    ],
                    "underline-offset": [
                        {
                            "underline-offset": [
                                y,
                                "auto",
                                A,
                                I
                            ]
                        }
                    ],
                    "text-transform": [
                        "uppercase",
                        "lowercase",
                        "capitalize",
                        "normal-case"
                    ],
                    "text-overflow": [
                        "truncate",
                        "text-ellipsis",
                        "text-clip"
                    ],
                    "text-wrap": [
                        {
                            text: [
                                "wrap",
                                "nowrap",
                                "balance",
                                "pretty"
                            ]
                        }
                    ],
                    indent: [
                        {
                            indent: $()
                        }
                    ],
                    "vertical-align": [
                        {
                            align: [
                                "baseline",
                                "top",
                                "middle",
                                "bottom",
                                "text-top",
                                "text-bottom",
                                "sub",
                                "super",
                                A,
                                I
                            ]
                        }
                    ],
                    whitespace: [
                        {
                            whitespace: [
                                "normal",
                                "nowrap",
                                "pre",
                                "pre-line",
                                "pre-wrap",
                                "break-spaces"
                            ]
                        }
                    ],
                    break: [
                        {
                            break: [
                                "normal",
                                "words",
                                "all",
                                "keep"
                            ]
                        }
                    ],
                    hyphens: [
                        {
                            hyphens: [
                                "none",
                                "manual",
                                "auto"
                            ]
                        }
                    ],
                    content: [
                        {
                            content: [
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "bg-attachment": [
                        {
                            bg: [
                                "fixed",
                                "local",
                                "scroll"
                            ]
                        }
                    ],
                    "bg-clip": [
                        {
                            "bg-clip": [
                                "border",
                                "padding",
                                "content",
                                "text"
                            ]
                        }
                    ],
                    "bg-origin": [
                        {
                            "bg-origin": [
                                "border",
                                "padding",
                                "content"
                            ]
                        }
                    ],
                    "bg-position": [
                        {
                            bg: [
                                ...C(),
                                K,
                                O
                            ]
                        }
                    ],
                    "bg-repeat": [
                        {
                            bg: [
                                "no-repeat",
                                {
                                    repeat: [
                                        "",
                                        "x",
                                        "y",
                                        "space",
                                        "round"
                                    ]
                                }
                            ]
                        }
                    ],
                    "bg-size": [
                        {
                            bg: [
                                "auto",
                                "cover",
                                "contain",
                                R,
                                N
                            ]
                        }
                    ],
                    "bg-image": [
                        {
                            bg: [
                                "none",
                                {
                                    linear: [
                                        {
                                            to: [
                                                "t",
                                                "tr",
                                                "r",
                                                "br",
                                                "b",
                                                "bl",
                                                "l",
                                                "tl"
                                            ]
                                        },
                                        k,
                                        A,
                                        I
                                    ],
                                    radial: [
                                        "",
                                        A,
                                        I
                                    ],
                                    conic: [
                                        k,
                                        A,
                                        I
                                    ]
                                },
                                U,
                                q
                            ]
                        }
                    ],
                    "bg-color": [
                        {
                            bg: ee()
                        }
                    ],
                    "gradient-from-pos": [
                        {
                            from: er()
                        }
                    ],
                    "gradient-via-pos": [
                        {
                            via: er()
                        }
                    ],
                    "gradient-to-pos": [
                        {
                            to: er()
                        }
                    ],
                    "gradient-from": [
                        {
                            from: ee()
                        }
                    ],
                    "gradient-via": [
                        {
                            via: ee()
                        }
                    ],
                    "gradient-to": [
                        {
                            to: ee()
                        }
                    ],
                    rounded: [
                        {
                            rounded: eo()
                        }
                    ],
                    "rounded-s": [
                        {
                            "rounded-s": eo()
                        }
                    ],
                    "rounded-e": [
                        {
                            "rounded-e": eo()
                        }
                    ],
                    "rounded-t": [
                        {
                            "rounded-t": eo()
                        }
                    ],
                    "rounded-r": [
                        {
                            "rounded-r": eo()
                        }
                    ],
                    "rounded-b": [
                        {
                            "rounded-b": eo()
                        }
                    ],
                    "rounded-l": [
                        {
                            "rounded-l": eo()
                        }
                    ],
                    "rounded-ss": [
                        {
                            "rounded-ss": eo()
                        }
                    ],
                    "rounded-se": [
                        {
                            "rounded-se": eo()
                        }
                    ],
                    "rounded-ee": [
                        {
                            "rounded-ee": eo()
                        }
                    ],
                    "rounded-es": [
                        {
                            "rounded-es": eo()
                        }
                    ],
                    "rounded-tl": [
                        {
                            "rounded-tl": eo()
                        }
                    ],
                    "rounded-tr": [
                        {
                            "rounded-tr": eo()
                        }
                    ],
                    "rounded-br": [
                        {
                            "rounded-br": eo()
                        }
                    ],
                    "rounded-bl": [
                        {
                            "rounded-bl": eo()
                        }
                    ],
                    "border-w": [
                        {
                            border: et()
                        }
                    ],
                    "border-w-x": [
                        {
                            "border-x": et()
                        }
                    ],
                    "border-w-y": [
                        {
                            "border-y": et()
                        }
                    ],
                    "border-w-s": [
                        {
                            "border-s": et()
                        }
                    ],
                    "border-w-e": [
                        {
                            "border-e": et()
                        }
                    ],
                    "border-w-t": [
                        {
                            "border-t": et()
                        }
                    ],
                    "border-w-r": [
                        {
                            "border-r": et()
                        }
                    ],
                    "border-w-b": [
                        {
                            "border-b": et()
                        }
                    ],
                    "border-w-l": [
                        {
                            "border-l": et()
                        }
                    ],
                    "divide-x": [
                        {
                            "divide-x": et()
                        }
                    ],
                    "divide-x-reverse": [
                        "divide-x-reverse"
                    ],
                    "divide-y": [
                        {
                            "divide-y": et()
                        }
                    ],
                    "divide-y-reverse": [
                        "divide-y-reverse"
                    ],
                    "border-style": [
                        {
                            border: [
                                ...en(),
                                "hidden",
                                "none"
                            ]
                        }
                    ],
                    "divide-style": [
                        {
                            divide: [
                                ...en(),
                                "hidden",
                                "none"
                            ]
                        }
                    ],
                    "border-color": [
                        {
                            border: ee()
                        }
                    ],
                    "border-color-x": [
                        {
                            "border-x": ee()
                        }
                    ],
                    "border-color-y": [
                        {
                            "border-y": ee()
                        }
                    ],
                    "border-color-s": [
                        {
                            "border-s": ee()
                        }
                    ],
                    "border-color-e": [
                        {
                            "border-e": ee()
                        }
                    ],
                    "border-color-t": [
                        {
                            "border-t": ee()
                        }
                    ],
                    "border-color-r": [
                        {
                            "border-r": ee()
                        }
                    ],
                    "border-color-b": [
                        {
                            "border-b": ee()
                        }
                    ],
                    "border-color-l": [
                        {
                            "border-l": ee()
                        }
                    ],
                    "divide-color": [
                        {
                            divide: ee()
                        }
                    ],
                    "outline-style": [
                        {
                            outline: [
                                ...en(),
                                "none",
                                "hidden"
                            ]
                        }
                    ],
                    "outline-offset": [
                        {
                            "outline-offset": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "outline-w": [
                        {
                            outline: [
                                "",
                                y,
                                B,
                                E
                            ]
                        }
                    ],
                    "outline-color": [
                        {
                            outline: [
                                e
                            ]
                        }
                    ],
                    shadow: [
                        {
                            shadow: [
                                "",
                                "none",
                                c,
                                _,
                                W
                            ]
                        }
                    ],
                    "shadow-color": [
                        {
                            shadow: ee()
                        }
                    ],
                    "inset-shadow": [
                        {
                            "inset-shadow": [
                                "none",
                                A,
                                I,
                                u
                            ]
                        }
                    ],
                    "inset-shadow-color": [
                        {
                            "inset-shadow": ee()
                        }
                    ],
                    "ring-w": [
                        {
                            ring: et()
                        }
                    ],
                    "ring-w-inset": [
                        "ring-inset"
                    ],
                    "ring-color": [
                        {
                            ring: ee()
                        }
                    ],
                    "ring-offset-w": [
                        {
                            "ring-offset": [
                                y,
                                E
                            ]
                        }
                    ],
                    "ring-offset-color": [
                        {
                            "ring-offset": ee()
                        }
                    ],
                    "inset-ring-w": [
                        {
                            "inset-ring": et()
                        }
                    ],
                    "inset-ring-color": [
                        {
                            "inset-ring": ee()
                        }
                    ],
                    opacity: [
                        {
                            opacity: [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "mix-blend": [
                        {
                            "mix-blend": [
                                ...el(),
                                "plus-darker",
                                "plus-lighter"
                            ]
                        }
                    ],
                    "bg-blend": [
                        {
                            "bg-blend": el()
                        }
                    ],
                    filter: [
                        {
                            filter: [
                                "",
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    blur: [
                        {
                            blur: es()
                        }
                    ],
                    brightness: [
                        {
                            brightness: [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    contrast: [
                        {
                            contrast: [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "drop-shadow": [
                        {
                            "drop-shadow": [
                                "",
                                "none",
                                b,
                                A,
                                I
                            ]
                        }
                    ],
                    grayscale: [
                        {
                            grayscale: [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "hue-rotate": [
                        {
                            "hue-rotate": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    invert: [
                        {
                            invert: [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    saturate: [
                        {
                            saturate: [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    sepia: [
                        {
                            sepia: [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-filter": [
                        {
                            "backdrop-filter": [
                                "",
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-blur": [
                        {
                            "backdrop-blur": es()
                        }
                    ],
                    "backdrop-brightness": [
                        {
                            "backdrop-brightness": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-contrast": [
                        {
                            "backdrop-contrast": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-grayscale": [
                        {
                            "backdrop-grayscale": [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-hue-rotate": [
                        {
                            "backdrop-hue-rotate": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-invert": [
                        {
                            "backdrop-invert": [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-opacity": [
                        {
                            "backdrop-opacity": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-saturate": [
                        {
                            "backdrop-saturate": [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "backdrop-sepia": [
                        {
                            "backdrop-sepia": [
                                "",
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    "border-collapse": [
                        {
                            border: [
                                "collapse",
                                "separate"
                            ]
                        }
                    ],
                    "border-spacing": [
                        {
                            "border-spacing": $()
                        }
                    ],
                    "border-spacing-x": [
                        {
                            "border-spacing-x": $()
                        }
                    ],
                    "border-spacing-y": [
                        {
                            "border-spacing-y": $()
                        }
                    ],
                    "table-layout": [
                        {
                            table: [
                                "auto",
                                "fixed"
                            ]
                        }
                    ],
                    caption: [
                        {
                            caption: [
                                "top",
                                "bottom"
                            ]
                        }
                    ],
                    transition: [
                        {
                            transition: [
                                "",
                                "all",
                                "colors",
                                "opacity",
                                "shadow",
                                "transform",
                                "none",
                                A,
                                I
                            ]
                        }
                    ],
                    "transition-behavior": [
                        {
                            transition: [
                                "normal",
                                "discrete"
                            ]
                        }
                    ],
                    duration: [
                        {
                            duration: [
                                y,
                                "initial",
                                A,
                                I
                            ]
                        }
                    ],
                    ease: [
                        {
                            ease: [
                                "linear",
                                "initial",
                                h,
                                A,
                                I
                            ]
                        }
                    ],
                    delay: [
                        {
                            delay: [
                                y,
                                A,
                                I
                            ]
                        }
                    ],
                    animate: [
                        {
                            animate: [
                                "none",
                                x,
                                A,
                                I
                            ]
                        }
                    ],
                    backface: [
                        {
                            backface: [
                                "hidden",
                                "visible"
                            ]
                        }
                    ],
                    perspective: [
                        {
                            perspective: [
                                m,
                                A,
                                I
                            ]
                        }
                    ],
                    "perspective-origin": [
                        {
                            "perspective-origin": ei()
                        }
                    ],
                    rotate: [
                        {
                            rotate: ea()
                        }
                    ],
                    "rotate-x": [
                        {
                            "rotate-x": ea()
                        }
                    ],
                    "rotate-y": [
                        {
                            "rotate-y": ea()
                        }
                    ],
                    "rotate-z": [
                        {
                            "rotate-z": ea()
                        }
                    ],
                    scale: [
                        {
                            scale: ed()
                        }
                    ],
                    "scale-x": [
                        {
                            "scale-x": ed()
                        }
                    ],
                    "scale-y": [
                        {
                            "scale-y": ed()
                        }
                    ],
                    "scale-z": [
                        {
                            "scale-z": ed()
                        }
                    ],
                    "scale-3d": [
                        "scale-3d"
                    ],
                    skew: [
                        {
                            skew: ec()
                        }
                    ],
                    "skew-x": [
                        {
                            "skew-x": ec()
                        }
                    ],
                    "skew-y": [
                        {
                            "skew-y": ec()
                        }
                    ],
                    transform: [
                        {
                            transform: [
                                A,
                                I,
                                "",
                                "none",
                                "gpu",
                                "cpu"
                            ]
                        }
                    ],
                    "transform-origin": [
                        {
                            origin: ei()
                        }
                    ],
                    "transform-style": [
                        {
                            transform: [
                                "3d",
                                "flat"
                            ]
                        }
                    ],
                    translate: [
                        {
                            translate: ep()
                        }
                    ],
                    "translate-x": [
                        {
                            "translate-x": ep()
                        }
                    ],
                    "translate-y": [
                        {
                            "translate-y": ep()
                        }
                    ],
                    "translate-z": [
                        {
                            "translate-z": ep()
                        }
                    ],
                    "translate-none": [
                        "translate-none"
                    ],
                    accent: [
                        {
                            accent: ee()
                        }
                    ],
                    appearance: [
                        {
                            appearance: [
                                "none",
                                "auto"
                            ]
                        }
                    ],
                    "caret-color": [
                        {
                            caret: ee()
                        }
                    ],
                    "color-scheme": [
                        {
                            scheme: [
                                "normal",
                                "dark",
                                "light",
                                "light-dark",
                                "only-dark",
                                "only-light"
                            ]
                        }
                    ],
                    cursor: [
                        {
                            cursor: [
                                "auto",
                                "default",
                                "pointer",
                                "wait",
                                "text",
                                "move",
                                "help",
                                "not-allowed",
                                "none",
                                "context-menu",
                                "progress",
                                "cell",
                                "crosshair",
                                "vertical-text",
                                "alias",
                                "copy",
                                "no-drop",
                                "grab",
                                "grabbing",
                                "all-scroll",
                                "col-resize",
                                "row-resize",
                                "n-resize",
                                "e-resize",
                                "s-resize",
                                "w-resize",
                                "ne-resize",
                                "nw-resize",
                                "se-resize",
                                "sw-resize",
                                "ew-resize",
                                "ns-resize",
                                "nesw-resize",
                                "nwse-resize",
                                "zoom-in",
                                "zoom-out",
                                A,
                                I
                            ]
                        }
                    ],
                    "field-sizing": [
                        {
                            "field-sizing": [
                                "fixed",
                                "content"
                            ]
                        }
                    ],
                    "pointer-events": [
                        {
                            "pointer-events": [
                                "auto",
                                "none"
                            ]
                        }
                    ],
                    resize: [
                        {
                            resize: [
                                "none",
                                "",
                                "y",
                                "x"
                            ]
                        }
                    ],
                    "scroll-behavior": [
                        {
                            scroll: [
                                "auto",
                                "smooth"
                            ]
                        }
                    ],
                    "scroll-m": [
                        {
                            "scroll-m": $()
                        }
                    ],
                    "scroll-mx": [
                        {
                            "scroll-mx": $()
                        }
                    ],
                    "scroll-my": [
                        {
                            "scroll-my": $()
                        }
                    ],
                    "scroll-ms": [
                        {
                            "scroll-ms": $()
                        }
                    ],
                    "scroll-me": [
                        {
                            "scroll-me": $()
                        }
                    ],
                    "scroll-mt": [
                        {
                            "scroll-mt": $()
                        }
                    ],
                    "scroll-mr": [
                        {
                            "scroll-mr": $()
                        }
                    ],
                    "scroll-mb": [
                        {
                            "scroll-mb": $()
                        }
                    ],
                    "scroll-ml": [
                        {
                            "scroll-ml": $()
                        }
                    ],
                    "scroll-p": [
                        {
                            "scroll-p": $()
                        }
                    ],
                    "scroll-px": [
                        {
                            "scroll-px": $()
                        }
                    ],
                    "scroll-py": [
                        {
                            "scroll-py": $()
                        }
                    ],
                    "scroll-ps": [
                        {
                            "scroll-ps": $()
                        }
                    ],
                    "scroll-pe": [
                        {
                            "scroll-pe": $()
                        }
                    ],
                    "scroll-pt": [
                        {
                            "scroll-pt": $()
                        }
                    ],
                    "scroll-pr": [
                        {
                            "scroll-pr": $()
                        }
                    ],
                    "scroll-pb": [
                        {
                            "scroll-pb": $()
                        }
                    ],
                    "scroll-pl": [
                        {
                            "scroll-pl": $()
                        }
                    ],
                    "snap-align": [
                        {
                            snap: [
                                "start",
                                "end",
                                "center",
                                "align-none"
                            ]
                        }
                    ],
                    "snap-stop": [
                        {
                            snap: [
                                "normal",
                                "always"
                            ]
                        }
                    ],
                    "snap-type": [
                        {
                            snap: [
                                "none",
                                "x",
                                "y",
                                "both"
                            ]
                        }
                    ],
                    "snap-strictness": [
                        {
                            snap: [
                                "mandatory",
                                "proximity"
                            ]
                        }
                    ],
                    touch: [
                        {
                            touch: [
                                "auto",
                                "none",
                                "manipulation"
                            ]
                        }
                    ],
                    "touch-x": [
                        {
                            "touch-pan": [
                                "x",
                                "left",
                                "right"
                            ]
                        }
                    ],
                    "touch-y": [
                        {
                            "touch-pan": [
                                "y",
                                "up",
                                "down"
                            ]
                        }
                    ],
                    "touch-pz": [
                        "touch-pinch-zoom"
                    ],
                    select: [
                        {
                            select: [
                                "none",
                                "text",
                                "all",
                                "auto"
                            ]
                        }
                    ],
                    "will-change": [
                        {
                            "will-change": [
                                "auto",
                                "scroll",
                                "contents",
                                "transform",
                                A,
                                I
                            ]
                        }
                    ],
                    fill: [
                        {
                            fill: [
                                "none",
                                ...ee()
                            ]
                        }
                    ],
                    "stroke-w": [
                        {
                            stroke: [
                                y,
                                B,
                                E,
                                T
                            ]
                        }
                    ],
                    stroke: [
                        {
                            stroke: [
                                "none",
                                ...ee()
                            ]
                        }
                    ],
                    "forced-color-adjust": [
                        {
                            "forced-color-adjust": [
                                "auto",
                                "none"
                            ]
                        }
                    ]
                },
                conflictingClassGroups: {
                    overflow: [
                        "overflow-x",
                        "overflow-y"
                    ],
                    overscroll: [
                        "overscroll-x",
                        "overscroll-y"
                    ],
                    inset: [
                        "inset-x",
                        "inset-y",
                        "start",
                        "end",
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "inset-x": [
                        "right",
                        "left"
                    ],
                    "inset-y": [
                        "top",
                        "bottom"
                    ],
                    flex: [
                        "basis",
                        "grow",
                        "shrink"
                    ],
                    gap: [
                        "gap-x",
                        "gap-y"
                    ],
                    p: [
                        "px",
                        "py",
                        "ps",
                        "pe",
                        "pt",
                        "pr",
                        "pb",
                        "pl"
                    ],
                    px: [
                        "pr",
                        "pl"
                    ],
                    py: [
                        "pt",
                        "pb"
                    ],
                    m: [
                        "mx",
                        "my",
                        "ms",
                        "me",
                        "mt",
                        "mr",
                        "mb",
                        "ml"
                    ],
                    mx: [
                        "mr",
                        "ml"
                    ],
                    my: [
                        "mt",
                        "mb"
                    ],
                    size: [
                        "w",
                        "h"
                    ],
                    "font-size": [
                        "leading"
                    ],
                    "fvn-normal": [
                        "fvn-ordinal",
                        "fvn-slashed-zero",
                        "fvn-figure",
                        "fvn-spacing",
                        "fvn-fraction"
                    ],
                    "fvn-ordinal": [
                        "fvn-normal"
                    ],
                    "fvn-slashed-zero": [
                        "fvn-normal"
                    ],
                    "fvn-figure": [
                        "fvn-normal"
                    ],
                    "fvn-spacing": [
                        "fvn-normal"
                    ],
                    "fvn-fraction": [
                        "fvn-normal"
                    ],
                    "line-clamp": [
                        "display",
                        "overflow"
                    ],
                    rounded: [
                        "rounded-s",
                        "rounded-e",
                        "rounded-t",
                        "rounded-r",
                        "rounded-b",
                        "rounded-l",
                        "rounded-ss",
                        "rounded-se",
                        "rounded-ee",
                        "rounded-es",
                        "rounded-tl",
                        "rounded-tr",
                        "rounded-br",
                        "rounded-bl"
                    ],
                    "rounded-s": [
                        "rounded-ss",
                        "rounded-es"
                    ],
                    "rounded-e": [
                        "rounded-se",
                        "rounded-ee"
                    ],
                    "rounded-t": [
                        "rounded-tl",
                        "rounded-tr"
                    ],
                    "rounded-r": [
                        "rounded-tr",
                        "rounded-br"
                    ],
                    "rounded-b": [
                        "rounded-br",
                        "rounded-bl"
                    ],
                    "rounded-l": [
                        "rounded-tl",
                        "rounded-bl"
                    ],
                    "border-spacing": [
                        "border-spacing-x",
                        "border-spacing-y"
                    ],
                    "border-w": [
                        "border-w-s",
                        "border-w-e",
                        "border-w-t",
                        "border-w-r",
                        "border-w-b",
                        "border-w-l"
                    ],
                    "border-w-x": [
                        "border-w-r",
                        "border-w-l"
                    ],
                    "border-w-y": [
                        "border-w-t",
                        "border-w-b"
                    ],
                    "border-color": [
                        "border-color-s",
                        "border-color-e",
                        "border-color-t",
                        "border-color-r",
                        "border-color-b",
                        "border-color-l"
                    ],
                    "border-color-x": [
                        "border-color-r",
                        "border-color-l"
                    ],
                    "border-color-y": [
                        "border-color-t",
                        "border-color-b"
                    ],
                    translate: [
                        "translate-x",
                        "translate-y",
                        "translate-none"
                    ],
                    "translate-none": [
                        "translate",
                        "translate-x",
                        "translate-y",
                        "translate-z"
                    ],
                    "scroll-m": [
                        "scroll-mx",
                        "scroll-my",
                        "scroll-ms",
                        "scroll-me",
                        "scroll-mt",
                        "scroll-mr",
                        "scroll-mb",
                        "scroll-ml"
                    ],
                    "scroll-mx": [
                        "scroll-mr",
                        "scroll-ml"
                    ],
                    "scroll-my": [
                        "scroll-mt",
                        "scroll-mb"
                    ],
                    "scroll-p": [
                        "scroll-px",
                        "scroll-py",
                        "scroll-ps",
                        "scroll-pe",
                        "scroll-pt",
                        "scroll-pr",
                        "scroll-pb",
                        "scroll-pl"
                    ],
                    "scroll-px": [
                        "scroll-pr",
                        "scroll-pl"
                    ],
                    "scroll-py": [
                        "scroll-pt",
                        "scroll-pb"
                    ],
                    touch: [
                        "touch-x",
                        "touch-y",
                        "touch-pz"
                    ],
                    "touch-x": [
                        "touch"
                    ],
                    "touch-y": [
                        "touch"
                    ],
                    "touch-pz": [
                        "touch"
                    ]
                },
                conflictingClassGroupModifiers: {
                    "font-size": [
                        "leading"
                    ]
                },
                orderSensitiveModifiers: [
                    "before",
                    "after",
                    "placeholder",
                    "file",
                    "marker",
                    "selection",
                    "first-line",
                    "first-letter",
                    "backdrop",
                    "*",
                    "**"
                ]
            };
        };
        let et = (e, r, o)=>{
            if (o !== undefined) {
                e[r] = o;
            }
        };
        let en = (e, r)=>{
            if (r) {
                for(let o in r){
                    et(e, o, r[o]);
                }
            }
        };
        let el = (e, r)=>{
            if (r) {
                for(let o in r){
                    es(e, r, o);
                }
            }
        };
        let es = (e, r, o)=>{
            let t = r[o];
            if (t !== undefined) {
                e[o] = e[o] ? e[o].concat(t) : t;
            }
        };
        let ei = ((e, ...r)=>{
            if (typeof e === "function") {
                return c(eo, e, ...r);
            }
            return c(()=>((e, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} })=>{
                    et(e, "cacheSize", cacheSize);
                    et(e, "prefix", prefix);
                    et(e, "experimentalParseClassName", experimentalParseClassName);
                    en(e.theme, override.theme);
                    en(e.classGroups, override.classGroups);
                    en(e.conflictingClassGroups, override.conflictingClassGroups);
                    en(e.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
                    et(e, "orderSensitiveModifiers", override.orderSensitiveModifiers);
                    el(e.theme, extend.theme);
                    el(e.classGroups, extend.classGroups);
                    el(e.conflictingClassGroups, extend.conflictingClassGroups);
                    el(e.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
                    es(e, extend, "orderSensitiveModifiers");
                    return e;
                })(eo(), e), ...r);
        })({
            extend: {
                classGroups: {
                    "font-size": [
                        {
                            text: [
                                "heading-xl",
                                "heading-lg",
                                "heading-md",
                                "heading-sm",
                                "heading-xs",
                                "body-lg",
                                "body-md",
                                "body-sm",
                                "label-lg",
                                "label-sm",
                                "nav"
                            ]
                        }
                    ]
                }
            }
        });
        function ea(e) {
            let r = Number.isFinite(e) && e > 0 ? Math.floor(e) : 0;
            let o = Math.floor(r / 3600);
            let t = String(Math.floor(r % 3600 / 60)).padStart(2, "0");
            let n = String(r % 60).padStart(2, "0");
            if (o > 0) {
                return `${o}:${t}:${n}`;
            }
            return `${t}:${n}`;
        }
        e.s([
            "cn",
            0,
            (...e)=>ei(r.clsx(e)),
            "formatPlayhead",
            0,
            (e)=>{
                let r = Number.isFinite(e) && e > 0 ? e : 0;
                let o = String(Math.floor(r % 1 * 1000)).padStart(3, "0");
                return `${ea(r)}:${o}`;
            },
            "formatTime",
            0,
            ea,
            "query",
            0,
            (e, r)=>{
                let o = e.querySelector(r);
                if (!o) {
                    throw Error(`StoryItem: no element matching "${r}"`);
                }
                return o;
            }
        ], 628974);
    }
]);
