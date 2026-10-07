// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 798785.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "PreloadChunks", {
    enumerable: !0,
    get: function () {
      return a;
    }
  });
  let r = e.r(281889),
    o = e.r(345078),
    n = e.r(678816),
    s = e.r(758024),
    l = e.r(823971);
  function a({
    moduleIds: e
  }) {
    if ("u" > typeof window) return null;
    let t = n.workAsyncStorage.getStore();
    if (void 0 === t) return null;
    let i = [];
    if (t.reactLoadableManifest && e) {
      let r = t.reactLoadableManifest;
      for (let t of e) {
        if (!r[t]) continue;
        let e = r[t].files;
        i.push(...e);
      }
    }
    if (0 === i.length) return null;
    let u = (0, l.getAssetTokenQuery)();
    return (0, r.jsx)(r.Fragment, {
      children: i.map(e => {
        let i = `${t.assetPrefix}/_next/${(0, s.encodeURIPath)(e)}${u}`;
        return e.endsWith(".css") ? (0, r.jsx)("link", {
          precedence: "dynamic",
          href: i,
          rel: "stylesheet",
          as: "style",
          nonce: t.nonce
        }, e) : ((0, o.preload)(i, {
          as: "script",
          fetchPriority: "low",
          nonce: t.nonce
        }), null);
      })
    });
  }
};
