;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "93ee2fe2-c260-8985-243c-6a7aa24cd944";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    590803,
    (e)=>{
        "use strict";
        var n = e.i(239150);
        var t = e.i(816880);
        e.s([
            "default",
            0,
            (e)=>{
                const e_measurementId = e.measurementId;
                const a = e_measurementId === undefined ? [] : e_measurementId;
                const e_trackAllPages = e.trackAllPages;
                const r = e_trackAllPages !== undefined && e_trackAllPages;
                const e_trackNamedPages = e.trackNamedPages;
                const g = e_trackNamedPages === undefined || e_trackNamedPages;
                const e_trackCategorizedPages = e.trackCategorizedPages;
                const u = e_trackCategorizedPages === undefined || e_trackCategorizedPages;
                const send_to = (Array.isArray(a) ? a : [
                    a
                ]).filter(Boolean);
                const v = (e)=>{
                    const e_event = e.event;
                    return n.__assign(n.__assign(n.__assign(n.__assign({}, e_event.userId && {
                        user_id: e_event.userId
                    }), e_event.anonymousId && {
                        hightouch_anonymous_id: e_event.anonymousId
                    }), send_to.length > 0 && {
                        send_to
                    }), e_event.properties);
                };
                return new t.Destination("gtag", "0.0.1", {
                    identify (e) {
                        if (e.event.userId) {
                            send_to.forEach((n)=>{
                                window.gtag("config", n, {
                                    user_id: e.event.userId
                                });
                            });
                        }
                    },
                    page (e) {
                        if (r || g && e.event.name || u && e.event.category) {
                            const t = [
                                "Viewed",
                                e.event.category,
                                e.event.name,
                                "Page"
                            ].filter(Boolean).join(" ");
                            window.gtag("event", t, n.__assign({}, v(e)));
                        }
                    },
                    track (e) {
                        window.gtag("event", e.event.event, n.__assign({}, v(e)));
                    }
                });
            }
        ]);
    }
]);
