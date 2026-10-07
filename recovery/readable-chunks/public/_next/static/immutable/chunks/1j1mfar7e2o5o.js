;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "8837a2ff-cbde-59f9-ccae-be3d4bc27b0a";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    861555,
    (t)=>{
        "use strict";
        var e = t.i(929151);
        t.s([
            "form",
            0,
            function(t, n, r, o) {
                const i = this;
                if (t) {
                    if (t instanceof HTMLFormElement) {
                        t = [
                            t
                        ];
                    }
                    t.forEach((t)=>{
                        if (!(t instanceof Element)) {
                            throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
                        }
                        const u = (u)=>{
                            if (u.preventDefault) {
                                u.preventDefault();
                            } else {
                                u.returnValue = false;
                            }
                            let c;
                            const a = n instanceof Function ? n(t) : n;
                            const l = r instanceof Function ? r(t) : r;
                            e.pTimeout(i.track(a, l, o != null ? o : {}), (c = i.settings.timeout) != null ? c : 500).catch(console.error).then(()=>{
                                t.submit();
                            }).catch(console.error);
                        };
                        const c = window.jQuery || window.Zepto;
                        if (c) {
                            c(t).submit(u);
                        } else {
                            t.addEventListener("submit", u, false);
                        }
                    });
                }
                return this;
            },
            "link",
            0,
            function(t, n, r, o) {
                const i = this;
                if (t) {
                    (t instanceof Element ? [
                        t
                    ] : "toArray" in t ? t.toArray() : t).forEach((t)=>{
                        t.addEventListener("click", (u)=>{
                            let c;
                            let a;
                            const l = n instanceof Function ? n(t) : n;
                            const s = r instanceof Function ? r(t) : r;
                            const f = t.getAttribute("href") || t.getAttributeNS("http://www.w3.org/1999/xlink", "href") || t.getAttribute("xlink:href") || ((c = t.getElementsByTagName("a")[0]) == null ? undefined : c.getAttribute("href"));
                            const h = e.pTimeout(i.track(l, s, o != null ? o : {}), (a = i.settings.timeout) != null ? a : 500);
                            if (!(t.target === "_blank" && f || u.ctrlKey || u.shiftKey || u.metaKey || u.button && u.button == 1 || !f)) {
                                if (u.preventDefault) {
                                    u.preventDefault();
                                } else {
                                    u.returnValue = false;
                                }
                                h.catch(console.error).then(()=>{
                                    window.location.href = f;
                                }).catch(console.error);
                            }
                        }, false);
                    });
                }
                return this;
            }
        ]);
    }
]);
