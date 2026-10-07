// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 763739.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    compileNonPath: function () {
      return f;
    },
    matchHas: function () {
      return d;
    },
    parseDestination: function () {
      return p;
    },
    prepareDestination: function () {
      return h;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(826364),
    o = e.r(866030),
    l = e.r(570214),
    s = e.r(90686),
    u = e.r(564098);
  function c(e) {
    return e.replace(/__ESC_COLON_/gi, ":");
  }
  function d(e, t, n = [], r = []) {
    let a = {},
      i = n => {
        let r,
          i = n.key;
        switch (n.type) {
          case "header":
            i = i.toLowerCase(), r = e.headers[i];
            break;
          case "cookie":
            r = "cookies" in e ? e.cookies[n.key] : (0, s.getCookieParser)(e.headers)()[n.key];
            break;
          case "query":
            r = t[i];
            break;
          case "host":
            {
              let {
                host: t
              } = e?.headers || {};
              r = t?.split(":", 1)[0].toLowerCase();
            }
        }
        if (!n.value && r) return a[function (e) {
          let t = "";
          for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            (r > 64 && r < 91 || r > 96 && r < 123) && (t += e[n]);
          }
          return t;
        }(i)] = r, !0;
        if (r) {
          let e = RegExp(`^${n.value}$`),
            t = Array.isArray(r) ? r.slice(-1)[0].match(e) : r.match(e);
          if (t) return Array.isArray(t) && (t.groups ? Object.keys(t.groups).forEach(e => {
            a[e] = t.groups[e];
          }) : "host" === n.type && t[0] && (a.host = t[0])), !0;
        }
        return !1;
      };
    return !(!n.every(e => i(e)) || r.some(e => i(e))) && a;
  }
  function f(e, t) {
    if (!e.includes(":")) return e;
    for (let n of Object.keys(t)) e.includes(`:${n}`) && (e = e.replace(RegExp(`:${n}\\*`, "g"), `:${n}--ESCAPED_PARAM_ASTERISKS`).replace(RegExp(`:${n}\\?`, "g"), `:${n}--ESCAPED_PARAM_QUESTION`).replace(RegExp(`:${n}\\+`, "g"), `:${n}--ESCAPED_PARAM_PLUS`).replace(RegExp(`:${n}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${n}`));
    return e = e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), (0, u.safeCompile)(`/${e}`, {
      validate: !1
    })(t).slice(1);
  }
  function p(e) {
    let t = e.destination;
    for (let n of Object.keys({
      ...e.params,
      ...e.query
    })) n && (t = t.replace(RegExp(`:${(0, i.escapeStringRegexp)(n)}`, "g"), `__ESC_COLON_${n}`));
    let n = (0, o.parseUrl)(t),
      r = n.pathname;
    r && (r = c(r));
    let a = n.href;
    a && (a = c(a));
    let l = n.hostname;
    l && (l = c(l));
    let s = n.hash;
    s && (s = c(s));
    let u = n.search;
    u && (u = c(u));
    let d = n.origin;
    return d && (d = c(d)), {
      ...n,
      pathname: r,
      hostname: l,
      href: a,
      hash: s,
      search: u,
      origin: d
    };
  }
  function h(e) {
    let t,
      n,
      r = p(e),
      {
        hostname: a,
        query: i,
        search: o
      } = r,
      s = r.pathname;
    r.hash && (s = `${s}${r.hash}`);
    let d = [],
      h = [];
    for (let e of ((0, u.safePathToRegexp)(s, h), h)) d.push(e.name);
    if (a) {
      let e = [];
      for (let t of ((0, u.safePathToRegexp)(a, e), e)) d.push(t.name);
    }
    let m = (0, u.safeCompile)(s, {
      validate: !1
    });
    for (let [n, r] of (a && (t = (0, u.safeCompile)(a, {
      validate: !1,
      encode: encodeURIComponent
    })), Object.entries(i))) Array.isArray(r) ? i[n] = r.map(t => f(c(t), e.params)) : "string" == typeof r && (i[n] = f(c(r), e.params));
    let g = Object.keys(e.params).filter(e => "nextInternalLocale" !== e);
    if (e.appendParamsToQuery && !g.some(e => d.includes(e))) for (let t of g) t in i || (i[t] = e.params[t]);
    if ((0, l.isInterceptionRouteAppPath)(s)) for (let t of s.split("/")) {
      let n = l.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e));
      if (n) {
        "(..)(..)" === n ? (e.params["0"] = "(..)", e.params["1"] = "(..)") : e.params["0"] = n;
        break;
      }
    }
    try {
      let [a, i] = (n = m(e.params)).split("#", 2);
      t && (r.hostname = t(e.params)), r.pathname = a, r.hash = `${i ? "#" : ""}${i || ""}`, r.search = o ? f(o, e.params) : "";
    } catch (e) {
      if (e.message.match(/Expected .*? to not repeat, but got an array/)) throw Object.defineProperty(Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"), "__NEXT_ERROR_CODE", {
        value: "E329",
        enumerable: !1,
        configurable: !0
      });
      throw e;
    }
    return r.query = {
      ...e.query,
      ...r.query
    }, {
      newUrl: n,
      destQuery: i,
      parsedDestination: r
    };
  }
};
