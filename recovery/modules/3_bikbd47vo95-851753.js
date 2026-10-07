// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 851753.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  function e(t) {
    return Array.prototype.slice.call(window.document.querySelectorAll("script")).find(function (e) {
      return e.src === t;
    });
  }
  t.s(["loadScript", 0, function (t, r) {
    var n = e(t);
    if (void 0 !== n) {
      var i = null == n ? void 0 : n.getAttribute("status");
      if ("loaded" === i) return Promise.resolve(n);
      if ("loading" === i) return new Promise(function (t, e) {
        n.addEventListener("load", function () {
          return t(n);
        }), n.addEventListener("error", function (t) {
          return e(t);
        });
      });
    }
    return new Promise(function (e, n) {
      var i,
        o = window.document.createElement("script");
      o.type = "text/javascript", o.src = t, o.async = !0, o.setAttribute("status", "loading");
      for (var s = 0, u = Object.entries(null != r ? r : {}); s < u.length; s++) {
        var a = u[s],
          c = a[0],
          l = a[1];
        o.setAttribute(c, l);
      }
      o.onload = function () {
        o.onerror = o.onload = null, o.setAttribute("status", "loaded"), e(o);
      }, o.onerror = function () {
        o.onerror = o.onload = null, o.setAttribute("status", "error"), n(Error("Failed to load ".concat(t)));
      };
      var f = window.document.getElementsByTagName("script")[0];
      null == (i = f.parentElement) || i.insertBefore(o, f);
    });
  }, "unloadScript", 0, function (t) {
    var r = e(t);
    return void 0 !== r && r.remove(), Promise.resolve();
  }]);
};
