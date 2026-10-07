// Recovered from 1h5r75mxue8_e.js. Runtime module IDs: 762735.
// This factory requires the original Turbopack runtime context.
export default r => {
  "use strict";

  function e(r, e) {
    return Object.keys(e).reduce(function (t, i) {
      return i.startsWith(r) && (t[i.substr(r.length)] = e[i]), t;
    }, {});
  }
  var t = r.i(485718),
    i = r.i(56844);
  r.s(["queryString", 0, function (r, a) {
    var s = document.createElement("a");
    s.href = a;
    var n = s.search.slice(1).split("&").reduce(function (r, e) {
        var i = e.split("="),
          a = i[0],
          s = i[1];
        return r[a] = (0, t.gracefulDecodeURIComponent)(s), r;
      }, {}),
      u = [],
      o = n.ajs_uid,
      c = n.ajs_event,
      d = n.ajs_aid,
      j = (0, i.isPlainObject)(r.options.useQueryString) ? r.options.useQueryString : {},
      _ = j.aid,
      v = j.uid;
    if (d) {
      var l = Array.isArray(n.ajs_aid) ? n.ajs_aid[0] : n.ajs_aid;
      (void 0 === _ ? /.+/ : _).test(l) && r.setAnonymousId(l);
    }
    if (o) {
      var y = Array.isArray(n.ajs_uid) ? n.ajs_uid[0] : n.ajs_uid;
      if ((void 0 === v ? /.+/ : v).test(y)) {
        var f = e("ajs_trait_", n);
        u.push(r.identify(y, f));
      }
    }
    if (c) {
      var p = Array.isArray(n.ajs_event) ? n.ajs_event[0] : n.ajs_event,
        h = e("ajs_prop_", n);
      u.push(r.track(p, h));
    }
    return Promise.all(u);
  }], 762735);
};
