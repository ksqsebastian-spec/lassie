;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "498fb619-92f5-7e8c-ef21-da5e5589a666";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    932828,
    (o)=>{
        o.n(o.i(974981));
    }
]);
