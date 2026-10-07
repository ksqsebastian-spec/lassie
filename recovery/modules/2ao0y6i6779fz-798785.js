// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 798785.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "PreloadChunks", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = e.r(281889),
    a = e.r(345078),
    l = e.r(678816),
    o = e.r(758024),
    s = e.r(823971);
  function i({
    moduleIds: e
  }) {
    if ("u" > typeof window) return null;
    let t = l.workAsyncStorage.getStore();
    if (void 0 === t) return null;
    let r = [];
    if (t.reactLoadableManifest && e) {
      let n = t.reactLoadableManifest;
      for (let t of e) {
        if (!n[t]) continue;
        let e = n[t].files;
        r.push(...e);
      }
    }
    if (0 === r.length) return null;
    let u = (0, s.getAssetTokenQuery)();
    return (0, n.jsx)(n.Fragment, {
      children: r.map(e => {
        let r = `${t.assetPrefix}/_next/${(0, o.encodeURIPath)(e)}${u}`;
        return e.endsWith(".css") ? (0, n.jsx)("link", {
          precedence: "dynamic",
          href: r,
          rel: "stylesheet",
          as: "style",
          nonce: t.nonce
        }, e) : ((0, a.preload)(r, {
          as: "script",
          fetchPriority: "low",
          nonce: t.nonce
        }), null);
      })
    });
  }
};
