// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 590805.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "appBootstrap", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let r = e.r(331442),
    a = e.r(946464);
  function i(e) {
    var t, n;
    let i = (0, r.getAssetPrefix)();
    t = self.__next_s, n = () => {
      e(i);
    }, t && t.length ? t.reduce((e, [t, n]) => e.then(() => new Promise((e, r) => {
      let i = document.createElement("script");
      n && (0, a.setAttributesFromProps)(i, n), t ? (i.src = t, i.onload = () => e(), i.onerror = r) : n && (i.innerHTML = n.children, setTimeout(e)), document.head.appendChild(i);
    })), Promise.resolve()).catch(e => {
      console.error(e);
    }).then(() => {
      n();
    }) : n();
  }
  window.next = {
    version: "16.3.0",
    appDir: !0
  }, ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
