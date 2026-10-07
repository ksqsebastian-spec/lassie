// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 226508.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  (() => {
    "use strict";

    "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/frontend/growth/node_modules/.pnpm/next@16.3.0_@opentelemetry+api@1.9.1_@types+node@20.11.18_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/next/dist/compiled/cookie/");
    var e,
      n,
      r,
      a,
      i = {};
    i.parse = function (t, n) {
      if ("string" != typeof t) throw TypeError("argument str must be a string");
      for (var a = {}, i = t.split(r), o = (n || {}).decode || e, l = 0; l < i.length; l++) {
        var s = i[l],
          u = s.indexOf("=");
        if (!(u < 0)) {
          var c = s.substr(0, u).trim(),
            d = s.substr(++u, s.length).trim();
          '"' == d[0] && (d = d.slice(1, -1)), void 0 == a[c] && (a[c] = function (e, t) {
            try {
              return t(e);
            } catch (t) {
              return e;
            }
          }(d, o));
        }
      }
      return a;
    }, i.serialize = function (e, t, r) {
      var i = r || {},
        o = i.encode || n;
      if ("function" != typeof o) throw TypeError("option encode is invalid");
      if (!a.test(e)) throw TypeError("argument name is invalid");
      var l = o(t);
      if (l && !a.test(l)) throw TypeError("argument val is invalid");
      var s = e + "=" + l;
      if (null != i.maxAge) {
        var u = i.maxAge - 0;
        if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(u);
      }
      if (i.domain) {
        if (!a.test(i.domain)) throw TypeError("option domain is invalid");
        s += "; Domain=" + i.domain;
      }
      if (i.path) {
        if (!a.test(i.path)) throw TypeError("option path is invalid");
        s += "; Path=" + i.path;
      }
      if (i.expires) {
        if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
        s += "; Expires=" + i.expires.toUTCString();
      }
      if (i.httpOnly && (s += "; HttpOnly"), i.secure && (s += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
        case !0:
        case "strict":
          s += "; SameSite=Strict";
          break;
        case "lax":
          s += "; SameSite=Lax";
          break;
        case "none":
          s += "; SameSite=None";
          break;
        default:
          throw TypeError("option sameSite is invalid");
      }
      return s;
    }, e = decodeURIComponent, n = encodeURIComponent, r = /; */, a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, t.exports = i;
  })();
};
