;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "81429734-4749-380c-c554-26719c058558";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    223154,
    (n)=>{
        "use strict";
        n.s([
            "isPlanEventEnabled",
            0,
            (n, e)=>{
                let t;
                let i;
                if (typeof (e == null ? undefined : e.enabled) === "boolean") {
                    return e.enabled;
                }
                return (i = (t = n == null ? undefined : n.__default) == null ? undefined : t.enabled) == null || i;
            }
        ]);
    },
    501068,
    (n)=>{
        "use strict";
        var e = n.i(239150);
        var t = n.i(223154);
        n.s([
            "schemaFilter",
            0,
            (n, i)=>{
                function r(r) {
                    const event = r.event.event;
                    if (n && event) {
                        const a = n[event];
                        if (t.isPlanEventEnabled(n, a)) {
                            const o = ((n, e)=>{
                                if (!n || !Object.keys(n)) {
                                    return {};
                                }
                                let t;
                                let i;
                                const r = n.integrations ? Object.keys(n.integrations).filter((e)=>n.integrations[e] === false) : [];
                                const s = [];
                                ((t = e.remotePlugins) != null ? t : []).forEach((n)=>{
                                    r.forEach((e)=>{
                                        if (n.name.includes(e) || e.includes(n.name)) {
                                            s.push(n.name);
                                        }
                                    });
                                });
                                return ((i = e.remotePlugins) != null ? i : []).reduce((acc, item)=>{
                                    if (item.settings.subscriptions && s.includes(item.name)) {
                                        item.settings.subscriptions.forEach((t)=>acc["".concat(item.name, " ").concat(t.partnerAction)] = false);
                                    }
                                    return acc;
                                }, {});
                            })(a, i);
                            r.updateEvent("integrations", e.__assign(e.__assign(e.__assign({}, r.event.integrations), a == null ? undefined : a.integrations), o));
                        } else {
                            r.updateEvent("integrations", e.__assign(e.__assign({}, r.event.integrations), {
                                All: false,
                                "Hightouch.io": true
                            }));
                        }
                    }
                    return r;
                }
                return {
                    name: "Schema Filter",
                    version: "0.1.0",
                    isLoaded () {
                        return true;
                    },
                    load () {
                        return Promise.resolve();
                    },
                    type: "before",
                    page: r,
                    alias: r,
                    track: r,
                    identify: r,
                    group: r
                };
            }
        ]);
    }
]);
