;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "57eccea4-7072-e577-8a42-95272bd6211a";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    517095,
    (e)=>{
        "use strict";
        var s = e.i(281889);
        var t = e.i(513679);
        e.i(265121);
        var r = e.i(279206);
        e.s([
            "default",
            0,
            ({ error })=>{
                t.useEffect(()=>{
                    console.error(error);
                }, [
                    error
                ]);
                return s.jsx("div", {
                    className: "min-h-screen flex items-center justify-center pt-0",
                    children: s.jsxs("main", {
                        className: "flex flex-col items-center max-w-[65rem]",
                        children: [
                            s.jsx("img", {
                                src: "/images/lassie_symbol.png",
                                alt: "Lassie Symbol",
                                className: "w-[31.5rem] mix-blend-multiply select-none",
                                draggable: false
                            }),
                            s.jsxs("div", {
                                className: "flex flex-col items-center gap-[2.4rem] mb-[2.4rem] desktop:mb-[4rem]",
                                children: [
                                    s.jsx("h1", {
                                        className: "text-heading-lg text-center text-balance",
                                        children: "Lassie got lost"
                                    }),
                                    s.jsx("p", {
                                        className: "text-body-md text-center text-pretty",
                                        children: "Try refreshing the page"
                                    })
                                ]
                            }),
                            s.jsx(r.ButtonPrimary, {
                                theme: "secondary",
                                as: "a",
                                href: "/",
                                children: "Return home"
                            })
                        ]
                    })
                });
            }
        ]);
    }
]);
