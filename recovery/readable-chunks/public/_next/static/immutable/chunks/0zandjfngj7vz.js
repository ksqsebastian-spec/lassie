;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "e784c4b6-1b33-3ab9-18e7-6fcb07c503ec";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    303116,
    (e)=>{
        "use strict";
        var n = e.i(239150);
        var a = e.i(816880);
        e.s([
            "default",
            0,
            (e)=>{
                const e_trackAllPages = e.trackAllPages;
                const o = e_trackAllPages !== undefined && e_trackAllPages;
                const e_trackNamedPages = e.trackNamedPages;
                const s = e_trackNamedPages === undefined || e_trackNamedPages;
                const e_trackCategorizedPages = e.trackCategorizedPages;
                const g = e_trackCategorizedPages === undefined || e_trackCategorizedPages;
                const u = (e)=>{
                    window.dataLayer.push(n.__assign(n.__assign(n.__assign(n.__assign({}, e.userId && {
                        userId: e.userId
                    }), e.anonymousId && {
                        hightouchAnonymousId: e.anonymousId
                    }), {
                        event: e.event
                    }), e.properties));
                };
                return new a.Destination("Google Tag Manager", "0.0.1", {
                    page (e) {
                        if (o || s && e.event.name || g && e.event.category) {
                            const event = [
                                "Viewed",
                                e.event.category,
                                e.event.name,
                                "Page"
                            ].filter(Boolean).join(" ");
                            u(n.__assign(n.__assign({}, e.event), {
                                type: "track",
                                event
                            }));
                        }
                    },
                    track (e) {
                        u(e.event);
                    }
                });
            }
        ]);
    }
]);
