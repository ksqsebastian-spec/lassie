;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "3a9b1e94-ab5f-2739-c225-479232f73816";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    762735,
    (r)=>{
        "use strict";
        function e(r, e) {
            return Object.keys(e).reduce((acc, key)=>{
                if (key.startsWith(r)) {
                    acc[key.substr(r.length)] = e[key];
                }
                return acc;
            }, {});
        }
        var t = r.i(485718);
        var i = r.i(56844);
        r.s([
            "queryString",
            0,
            (r, a)=>{
                const s = document.createElement("a");
                s.href = a;
                const n = s.search.slice(1).split("&").reduce((acc, item)=>{
                    const i = item.split("=");
                    const a = i[0];
                    const s = i[1];
                    acc[a] = t.gracefulDecodeURIComponent(s);
                    return acc;
                }, {});
                const u = [];
                const n_ajs_uid = n.ajs_uid;
                const n_ajs_event = n.ajs_event;
                const n_ajs_aid = n.ajs_aid;
                const j = i.isPlainObject(r.options.useQueryString) ? r.options.useQueryString : {};
                const j_aid = j.aid;
                const j_uid = j.uid;
                if (n_ajs_aid) {
                    const l = Array.isArray(n.ajs_aid) ? n.ajs_aid[0] : n.ajs_aid;
                    if ((j_aid === undefined ? /.+/ : j_aid).test(l)) {
                        r.setAnonymousId(l);
                    }
                }
                if (n_ajs_uid) {
                    const y = Array.isArray(n.ajs_uid) ? n.ajs_uid[0] : n.ajs_uid;
                    if ((j_uid === undefined ? /.+/ : j_uid).test(y)) {
                        const f = e("ajs_trait_", n);
                        u.push(r.identify(y, f));
                    }
                }
                if (n_ajs_event) {
                    const p = Array.isArray(n.ajs_event) ? n.ajs_event[0] : n.ajs_event;
                    const h = e("ajs_prop_", n);
                    u.push(r.track(p, h));
                }
                return Promise.all(u);
            }
        ], 762735);
    }
]);
