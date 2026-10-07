// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 737409.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    formatUrl: function () {
      return a;
    },
    formatWithValidation: function () {
      return s;
    },
    urlObjectKeys: function () {
      return l;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(171266)._(e.r(398686)),
    i = /https?|ftp|gopher|file/;
  function a(e) {
    let {
        auth: t,
        hostname: r
      } = e,
      n = e.protocol || "",
      o = e.pathname || "",
      a = e.hash || "",
      l = e.query || "",
      s = !1;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? s = t + e.host : r && (s = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (s += ":" + e.port)), l && "object" == typeof l && (l = String(u.urlQueryToSearchParams(l)));
    let c = e.search || l && `?${l}` || "";
    return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== s ? (s = "//" + (s || ""), o && "/" !== o[0] && (o = "/" + o)) : s || (s = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${s}${o}${c}${a}`;
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function s(e) {
    return a(e);
  }
};
