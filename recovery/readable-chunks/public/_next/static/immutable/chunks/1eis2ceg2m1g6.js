;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "19d7f702-a1f2-7957-33d9-50e883e2665a";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    697157,
    (e)=>{
        "use strict";
        var t = e.i(239150);
        var r = e.i(298352);
        var n = e.i(851753);
        var i = e.i(555595);
        e.s([
            "remoteMiddlewares",
            0,
            function(e, a, c) {
                let o;
                return t.__awaiter(this, undefined, undefined, function() {
                    let s;
                    const l = this;
                    return t.__generator(this, (u)=>{
                        switch(u.label){
                            case 0:
                                if (r.isServer()) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                s = i.getNextIntegrationsURL();
                                return [
                                    4,
                                    Promise.all(Object.entries((o = a.enabledMiddleware) != null ? o : {}).filter((e)=>{
                                        e[0];
                                        return e[1];
                                    }).map((e)=>e[0]).map((r)=>t.__awaiter(l, undefined, undefined, function() {
                                            let i;
                                            let a;
                                            let o;
                                            let l;
                                            return t.__generator(this, (t)=>{
                                                switch(t.label){
                                                    case 0:
                                                        a = i = r.replace("@segment/", "");
                                                        if (c) {
                                                            a = btoa(i).replace(/=/g, "");
                                                        }
                                                        o = "".concat(s, "/middleware/").concat(a, "/latest/").concat(a, ".js.gz");
                                                        t.label = 1;
                                                    case 1:
                                                        t.trys.push([
                                                            1,
                                                            3,
                                                            ,
                                                            4
                                                        ]);
                                                        return [
                                                            4,
                                                            n.loadScript(o)
                                                        ];
                                                    case 2:
                                                        t.sent();
                                                        return [
                                                            2,
                                                            window["".concat(i, "Middleware")]
                                                        ];
                                                    case 3:
                                                        l = t.sent();
                                                        e.log("error", l);
                                                        e.stats.increment("failed_remote_middleware");
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 4:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        })))
                                ];
                            case 1:
                                return [
                                    2,
                                    u.sent().filter(Boolean)
                                ];
                        }
                    });
                });
            }
        ]);
    }
]);
