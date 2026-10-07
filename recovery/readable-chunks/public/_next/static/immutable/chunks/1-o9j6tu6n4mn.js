;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "e86d77bb-9d02-49b0-d0b1-bf22ed9d54fa";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    431683,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(464068);
        var i = e.i(300778);
        var n = e.i(628974);
        let o = [
            {
                href: "/legal/business-associate-agreement",
                label: "Business Associate Agreement"
            },
            {
                href: "/legal/privacy",
                label: "Privacy Policy"
            },
            {
                href: "/legal/referral-program",
                label: "Referral Program"
            },
            {
                href: "/legal/services-agreement",
                label: "Services Agreement"
            },
            {
                href: "/legal/terms-of-service",
                label: "Terms of Service"
            }
        ];
        e.s([
            "LegalNav",
            0,
            ()=>{
                let e = i.usePathname();
                return t.jsx("nav", {
                    children: t.jsx("ul", {
                        children: o.map((i)=>{
                            let o = e === i.href;
                            return t.jsx("li", {
                                children: t.jsx(r.default, {
                                    href: i.href,
                                    className: n.cn("block rounded-[16px] px-[24px] py-[16px] transition-colors duration-150 hover:bg-surface-primary", o ? "bg-surface-primary text-text-primary" : "text-text-secondary"),
                                    children: i.label
                                })
                            }, i.href);
                        })
                    })
                });
            }
        ]);
    },
    532597,
    (e, t, r)=>{},
    176792,
    (e, t, r)=>{
        var i = e.i(638522);
        e.r(532597);
        var n = e.r(513679);
        var o = n && typeof n === "object" && "default" in n ? n : {
            default: n
        };
        var s = i.default !== undefined && i.default.env && true;
        var a = (e)=>Object.prototype.toString.call(e) === "[object String]";
        class u {
            constructor(e){
                var t = e === undefined ? {} : e;
                var r = t.name;
                var i = r === undefined ? "stylesheet" : r;
                var n = t.optimizeForSpeed;
                var o = n === undefined ? s : n;
                l(a(i), "`name` must be a string");
                this._name = i;
                this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}";
                l(typeof o === "boolean", "`optimizeForSpeed` must be a boolean");
                this._optimizeForSpeed = o;
                this._serverSheet = undefined;
                this._tags = [];
                this._injected = false;
                this._rulesCount = 0;
                var u = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = u ? u.getAttribute("content") : null;
            }
            setOptimizeForSpeed(e) {
                l(typeof e === "boolean", "`setOptimizeForSpeed` accepts a boolean");
                l(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
                this.flush();
                this._optimizeForSpeed = e;
                this.inject();
            }
            isOptimizeForSpeed() {
                return this._optimizeForSpeed;
            }
            inject() {
                const e = this;
                l(!this._injected, "sheet already injected");
                this._injected = true;
                if (typeof window !== "undefined" && this._optimizeForSpeed) {
                    this._tags[0] = this.makeStyleTag(this._name);
                    this._optimizeForSpeed = "insertRule" in this.getSheet();
                    if (!this._optimizeForSpeed) {
                        if (!s) {
                            console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                        }
                        this.flush();
                        this._injected = true;
                    }
                    return;
                }
                this._serverSheet = {
                    cssRules: [],
                    insertRule (cssText, r) {
                        if (typeof r === "number") {
                            e._serverSheet.cssRules[r] = {
                                cssText
                            };
                        } else {
                            e._serverSheet.cssRules.push({
                                cssText
                            });
                        }
                        return r;
                    },
                    deleteRule (t) {
                        e._serverSheet.cssRules[t] = null;
                    }
                };
            }
            getSheetForTag(e) {
                if (e.sheet) {
                    return e.sheet;
                }
                for(let t = 0; t < document.styleSheets.length; t++){
                    if (document.styleSheets[t].ownerNode === e) {
                        return document.styleSheets[t];
                    }
                }
            }
            getSheet() {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }
            insertRule(e, t) {
                l(a(e), "`insertRule` accepts only strings");
                if (typeof window === "undefined") {
                    if (typeof t !== "number") {
                        t = this._serverSheet.cssRules.length;
                    }
                    this._serverSheet.insertRule(e, t);
                    return this._rulesCount++;
                }
                if (this._optimizeForSpeed) {
                    const r = this.getSheet();
                    if (typeof t !== "number") {
                        t = r.cssRules.length;
                    }
                    try {
                        r.insertRule(e, t);
                    } catch (t) {
                        if (!s) {
                            console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                        }
                        return -1;
                    }
                } else {
                    const i = this._tags[t];
                    this._tags.push(this.makeStyleTag(this._name, e, i));
                }
                return this._rulesCount++;
            }
            replaceRule(e, t) {
                if (this._optimizeForSpeed || typeof window === "undefined") {
                    const r = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
                    if (!t.trim()) {
                        t = this._deletedRulePlaceholder;
                    }
                    if (!r.cssRules[e]) {
                        return e;
                    }
                    r.deleteRule(e);
                    try {
                        r.insertRule(t, e);
                    } catch (i) {
                        if (!s) {
                            console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                        }
                        r.insertRule(this._deletedRulePlaceholder, e);
                    }
                } else {
                    const i = this._tags[e];
                    l(i, "old rule at index `" + e + "` not found");
                    i.textContent = t;
                }
                return e;
            }
            deleteRule(e) {
                if (typeof window === "undefined") {
                    return void this._serverSheet.deleteRule(e);
                }
                if (this._optimizeForSpeed) {
                    this.replaceRule(e, "");
                } else {
                    const t = this._tags[e];
                    l(t, "rule at index `" + e + "` not found");
                    t.parentNode.removeChild(t);
                    this._tags[e] = null;
                }
            }
            flush() {
                this._injected = false;
                this._rulesCount = 0;
                if (typeof window !== "undefined") {
                    this._tags.forEach((e)=>e && e.parentNode.removeChild(e));
                    this._tags = [];
                } else {
                    this._serverSheet.cssRules = [];
                }
            }
            cssRules() {
                const e = this;
                if (typeof window === "undefined") {
                    return this._serverSheet.cssRules;
                }
                return this._tags.reduce((acc, item)=>{
                    if (item) {
                        acc = acc.concat(Array.prototype.map.call(e.getSheetForTag(item).cssRules, (t)=>{
                            if (t.cssText === e._deletedRulePlaceholder) {
                                return null;
                            }
                            return t;
                        }));
                    } else {
                        acc.push(null);
                    }
                    return acc;
                }, []);
            }
            makeStyleTag(e, t, r) {
                if (t) {
                    l(a(t), "makeStyleTag accepts only strings as second parameter");
                }
                const i = document.createElement("style");
                if (this._nonce) {
                    i.setAttribute("nonce", this._nonce);
                }
                i.type = "text/css";
                i.setAttribute("data-" + e, "");
                if (t) {
                    i.appendChild(document.createTextNode(t));
                }
                const n = document.head || document.getElementsByTagName("head")[0];
                if (r) {
                    n.insertBefore(i, r);
                } else {
                    n.appendChild(i);
                }
                return i;
            }
            get length() {
                return this._rulesCount;
            }
        }
        function l(e, t) {
            if (!e) {
                throw Error("StyleSheet: " + t + ".");
            }
        }
        var h = (e)=>{
            let t = 5381;
            for(let r = e.length; r;){
                t = 33 * t ^ e.charCodeAt(--r);
            }
            return t >>> 0;
        };
        var c = {};
        function d(e, t) {
            if (!t) {
                return "jsx-" + e;
            }
            const r = String(t);
            const i = e + r;
            if (!c[i]) {
                c[i] = "jsx-" + h(e + "-" + r);
            }
            return c[i];
        }
        function p(styleId, t) {
            if (typeof window === "undefined") {
                t = t.replace(/\/style/gi, "\\/style");
            }
            const r = styleId + t;
            if (!c[r]) {
                c[r] = t.replace(/__jsx-style-dynamic-selector/g, styleId);
            }
            return c[r];
        }
        class m {
            constructor(e){
                var t = e === undefined ? {} : e;
                var r = t.styleSheet;
                var i = r === undefined ? null : r;
                var n = t.optimizeForSpeed;
                var optimizeForSpeed = n !== undefined && n;
                this._sheet = i || new u({
                    name: "styled-jsx",
                    optimizeForSpeed
                });
                this._sheet.inject();
                if (i && typeof optimizeForSpeed === "boolean") {
                    this._sheet.setOptimizeForSpeed(optimizeForSpeed);
                    this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
                }
                this._fromServer = undefined;
                this._indices = {};
                this._instancesCounts = {};
            }
            add(e) {
                const t = this;
                if (this._optimizeForSpeed === undefined) {
                    this._optimizeForSpeed = Array.isArray(e.children);
                    this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
                    this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
                }
                if (typeof window !== "undefined" && !this._fromServer) {
                    this._fromServer = this.selectFromServer();
                    this._instancesCounts = Object.keys(this._fromServer).reduce((acc, key)=>{
                        acc[key] = 0;
                        return acc;
                    }, {});
                }
                const r = this.getIdAndRules(e);
                const r_styleId = r.styleId;
                const r_rules = r.rules;
                if (r_styleId in this._instancesCounts) {
                    this._instancesCounts[r_styleId] += 1;
                    return;
                }
                const o = r_rules.map((e)=>t._sheet.insertRule(e)).filter((e)=>-1 !== e);
                this._indices[r_styleId] = o;
                this._instancesCounts[r_styleId] = 1;
            }
            remove(e) {
                const t = this;
                const styleId = this.getIdAndRules(e).styleId;
                ((e, t)=>{
                    if (!e) {
                        throw Error("StyleSheetRegistry: " + t + ".");
                    }
                })(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
                this._instancesCounts[styleId] -= 1;
                if (this._instancesCounts[styleId] < 1) {
                    const i = this._fromServer && this._fromServer[styleId];
                    if (i) {
                        i.parentNode.removeChild(i);
                        delete this._fromServer[styleId];
                    } else {
                        this._indices[styleId].forEach((e)=>t._sheet.deleteRule(e));
                        delete this._indices[styleId];
                    }
                    delete this._instancesCounts[styleId];
                }
            }
            update(e, t) {
                this.add(t);
                this.remove(e);
            }
            flush() {
                this._sheet.flush();
                this._sheet.inject();
                this._fromServer = undefined;
                this._indices = {};
                this._instancesCounts = {};
            }
            cssRules() {
                const e = this;
                const t = this._fromServer ? Object.keys(this._fromServer).map((t)=>[
                        t,
                        e._fromServer[t]
                    ]) : [];
                const r = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map((t)=>[
                        t,
                        e._indices[t].map((e)=>r[e].cssText).join(e._optimizeForSpeed ? "" : "\n")
                    ]).filter((e)=>!!e[1]));
            }
            styles(e) {
                let t;
                let r;
                t = this.cssRules();
                if ((r = e) === undefined) {
                    r = {};
                }
                return t.map((e)=>{
                    const t = e[0];
                    const __html = e[1];
                    return o.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: r.nonce ? r.nonce : undefined,
                        dangerouslySetInnerHTML: {
                            __html
                        }
                    });
                });
            }
            getIdAndRules(e) {
                const e_children = e.children;
                const e_dynamic = e.dynamic;
                const i = e.id;
                if (e_dynamic) {
                    const styleId = d(i, e_dynamic);
                    return {
                        styleId,
                        rules: Array.isArray(e_children) ? e_children.map((e)=>p(styleId, e)) : [
                            p(styleId, e_children)
                        ]
                    };
                }
                return {
                    styleId: d(i),
                    rules: Array.isArray(e_children) ? e_children : [
                        e_children
                    ]
                };
            }
            selectFromServer() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((acc, item)=>{
                    acc[item.id.slice(2)] = item;
                    return acc;
                }, {});
            }
        }
        var FContext = n.createContext(null);
        function _() {
            return new m;
        }
        function useV() {
            return n.useContext(FContext);
        }
        FContext.displayName = "StyleSheetContext";
        var y = o.default.useInsertionEffect || o.default.useLayoutEffect;
        var g = typeof window !== "undefined" ? _() : undefined;
        function S(e) {
            const t = g || useV();
            t && (typeof window === "undefined" ? t.add(e) : y(()=>{
                t.add(e);
                return ()=>{
                    t.remove(e);
                };
            }, [
                e.id,
                String(e.dynamic)
            ]));
            return null;
        }
        S.dynamic = (e)=>e.map((e)=>d(e[0], e[1])).join(" ");
        r.StyleRegistry = (e)=>{
            const e_registry = e.registry;
            const e_children = e.children;
            const i = n.useContext(FContext);
            const value = n.useState(()=>i || e_registry || _())[0];
            return o.default.createElement(FContext.Provider, {
                value
            }, e_children);
        };
        r.createStyleRegistry = _;
        r.style = S;
        r.useStyleRegistry = useV;
    },
    42040,
    (e, t, r)=>{
        t.exports = e.r(176792).style;
    },
    244346,
    (e)=>{
        "use strict";
        var t = e.i(281889);
        var r = e.i(42040);
        e.s([
            "LegalStyles",
            0,
            ()=>t.jsx(r.default, {
                    id: "3c3974d5d26b8d0a",
                    children: 'html{height:100%;overflow:hidden}body{height:100%;overflow:auto}@media print{@page{margin:2cm 1.5cm}html,body{height:auto!important;overflow:visible!important}aside,nav,header,footer,.prose h1 a,.prose h2 a,.prose h3 a{display:none!important}main{max-width:100%!important;margin:0!important;padding:0!important;display:block!important}.prose{color:#000!important;max-width:100%!important;padding:0!important;font-size:9.5pt!important;line-height:1.4!important}.prose h1{page-break-after:avoid!important;margin-top:0!important;margin-bottom:10pt!important;font-size:16pt!important}.prose h2{page-break-after:avoid!important;margin-top:16pt!important;margin-bottom:6pt!important;font-size:13pt!important}.prose h3{page-break-after:avoid!important;margin-top:10pt!important;margin-bottom:4pt!important;font-size:11pt!important}.prose p{orphans:3!important;widows:3!important;margin-bottom:6pt!important}.prose ul,.prose ol{page-break-inside:auto!important;margin:6pt 0!important}.prose li{margin:3pt 0!important}.prose a{color:#000!important;text-decoration:underline!important}.prose a[href]:after{content:" (" attr(href) ")"!important;color:#666!important;font-size:8pt!important}.prose strong{color:#000!important;font-weight:600!important}*{box-shadow:none!important;background:0 0!important}h1,h2,h3,h4,h5,h6{page-break-after:avoid!important}*{border-radius:0!important}}'
                })
        ]);
    }
]);
