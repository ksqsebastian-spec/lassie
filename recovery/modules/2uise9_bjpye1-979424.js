// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 979424.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  function n(t) {
    return function (e, r, n, o) {
      var i,
        s = o && "function" == typeof o.normalizer ? o.normalizer : a;
      r = s(r);
      for (var u = !1; !u;) !function () {
        for (i in e) {
          var t = s(i);
          if (0 === r.indexOf(t)) {
            var n = r.substr(t.length);
            if ("." === n.charAt(0) || 0 === n.length) {
              r = n.substr(1);
              var o = e[i];
              if (null == o || !r.length) {
                u = !0;
                return;
              }
              e = o;
              return;
            }
          }
        }
        i = void 0, u = !0;
      }();
      if (i) return null == e ? e : t(e, i, n);
    };
  }
  function o(t, e) {
    return t.hasOwnProperty(e) && delete t[e], t;
  }
  function i(t, e, r) {
    return t.hasOwnProperty(e) && (t[e] = r), t;
  }
  function a(t) {
    return t.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase();
  }
  e.exports = n(function (t, e) {
    if (t.hasOwnProperty(e)) return t[e];
  }), e.exports.find = e.exports, e.exports.replace = function (t, e, r, o) {
    return n(i).call(this, t, e, r, o), t;
  }, e.exports.del = function (t, e, r) {
    return n(o).call(this, t, e, null, r), t;
  };
};
