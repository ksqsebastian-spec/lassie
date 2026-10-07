;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "43b68278-18de-a28c-134f-2fb58c853753";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    724897,
    (t)=>{
        "use strict";
        var e = t.i(239150);
        t.s([
            "loadLegacyVideoPlugins",
            0,
            function(i) {
                return e.__awaiter(this, undefined, undefined, function() {
                    return e.__generator(this, (e)=>{
                        switch(e.label){
                            case 0:
                                return [
                                    4,
                                    t.A(395481)
                                ];
                            case 1:
                                i._plugins = e.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        ]);
    },
    395481,
    (t)=>{
        t.v((e)=>Promise.all([
                "static/immutable/chunks/3_hg6l5tk7mvs.js"
            ].map((e)=>t.l(e))).then(()=>e(726125)));
    }
]);
