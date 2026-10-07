// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 102431.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    getNamedMiddlewareRegex: function () {
      return m;
    },
    getNamedRouteRegex: function () {
      return h;
    },
    getRouteRegex: function () {
      return d;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(359862),
    o = e.r(570214),
    l = e.r(826364),
    s = e.r(842592),
    u = e.r(655218);
  function c(e, t, n) {
    let r = {},
      a = 1,
      i = [];
    for (let c of (0, s.removeTrailingSlash)(e).slice(1).split("/")) {
      let e = o.INTERCEPTION_ROUTE_MARKERS.find(e => c.startsWith(e)),
        s = c.match(u.PARAMETER_PATTERN);
      if (e && s && s[2]) {
        let {
          key: t,
          optional: n,
          repeat: o
        } = (0, u.parseMatchedParameter)(s[2]);
        r[t] = {
          pos: a++,
          repeat: o,
          optional: n
        }, i.push(`/${(0, l.escapeStringRegexp)(e)}([^/]+?)`);
      } else if (s && s[2]) {
        let {
          key: e,
          repeat: t,
          optional: o
        } = (0, u.parseMatchedParameter)(s[2]);
        r[e] = {
          pos: a++,
          repeat: t,
          optional: o
        }, n && s[1] && i.push(`/${(0, l.escapeStringRegexp)(s[1])}`);
        let c = t ? o ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
        n && s[1] && (c = c.substring(1)), i.push(c);
      } else i.push(`/${(0, l.escapeStringRegexp)(c)}`);
      t && s && s[3] && i.push((0, l.escapeStringRegexp)(s[3]));
    }
    return {
      parameterizedRoute: i.join(""),
      groups: r
    };
  }
  function d(e, {
    includeSuffix: t = !1,
    includePrefix: n = !1,
    excludeOptionalTrailingSlash: r = !1
  } = {}) {
    let {
        parameterizedRoute: a,
        groups: i
      } = c(e, t, n),
      o = a;
    return r || (o += "(?:/)?"), {
      re: RegExp(`^${o}$`),
      groups: i
    };
  }
  function f({
    interceptionMarker: e,
    getSafeRouteKey: t,
    segment: n,
    routeKeys: r,
    keyPrefix: a,
    backreferenceDuplicateKeys: i
  }) {
    let o,
      {
        key: s,
        optional: c,
        repeat: d
      } = (0, u.parseMatchedParameter)(n),
      p = s.replace(/\W/g, "");
    a && (p = `${a}${p}`);
    let h = !1;
    (0 === p.length || p.length > 30) && (h = !0), isNaN(parseInt(p.slice(0, 1))) || (h = !0), h && (p = t());
    let m = p in r;
    a ? r[p] = `${a}${s}` : r[p] = s;
    let g = e ? (0, l.escapeStringRegexp)(e) : "";
    return o = m && i ? `\\k<${p}>` : d ? `(?<${p}>.+?)` : `(?<${p}>[^/]+?)`, {
      key: s,
      pattern: c ? `(?:/${g}${o})?` : `/${g}${o}`,
      cleanedKey: p,
      optional: c,
      repeat: d
    };
  }
  function p(e, t, n, r, a, c = {
    names: {},
    intercepted: {}
  }) {
    let d,
      h = (d = 0, () => {
        let e = "",
          t = ++d;
        for (; t > 0;) e += String.fromCharCode(97 + (t - 1) % 26), t = Math.floor((t - 1) / 26);
        return e;
      }),
      m = {},
      g = [],
      y = [];
    for (let d of (c = structuredClone(c), (0, s.removeTrailingSlash)(e).slice(1).split("/"))) {
      let e,
        s = o.INTERCEPTION_ROUTE_MARKERS.some(e => d.startsWith(e)),
        p = d.match(u.PARAMETER_PATTERN),
        v = s ? p?.[1] : void 0;
      if (v && p?.[2] ? (e = t ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0, c.intercepted[p[2]] = v) : e = p?.[2] && c.intercepted[p[2]] ? t ? i.NEXT_INTERCEPTION_MARKER_PREFIX : void 0 : t ? i.NEXT_QUERY_PARAM_PREFIX : void 0, v && p && p[2]) {
        let {
          key: t,
          pattern: n,
          cleanedKey: r,
          repeat: i,
          optional: o
        } = f({
          getSafeRouteKey: h,
          interceptionMarker: v,
          segment: p[2],
          routeKeys: m,
          keyPrefix: e,
          backreferenceDuplicateKeys: a
        });
        g.push(n), y.push(`/${p[1]}:${c.names[t] ?? r}${i ? o ? "*" : "+" : ""}`), c.names[t] ??= r;
      } else if (p && p[2]) {
        r && p[1] && (g.push(`/${(0, l.escapeStringRegexp)(p[1])}`), y.push(`/${p[1]}`));
        let {
            key: t,
            pattern: n,
            cleanedKey: i,
            repeat: o,
            optional: s
          } = f({
            getSafeRouteKey: h,
            segment: p[2],
            routeKeys: m,
            keyPrefix: e,
            backreferenceDuplicateKeys: a
          }),
          u = n;
        r && p[1] && (u = u.substring(1)), g.push(u), y.push(`/:${c.names[t] ?? i}${o ? s ? "*" : "+" : ""}`), c.names[t] ??= i;
      } else g.push(`/${(0, l.escapeStringRegexp)(d)}`), y.push(`/${d}`);
      n && p && p[3] && (g.push((0, l.escapeStringRegexp)(p[3])), y.push(p[3]));
    }
    return {
      namedParameterizedRoute: g.join(""),
      routeKeys: m,
      pathToRegexpPattern: y.join(""),
      reference: c
    };
  }
  function h(e, t) {
    let n = p(e, t.prefixRouteKeys, t.includeSuffix ?? !1, t.includePrefix ?? !1, t.backreferenceDuplicateKeys ?? !1, t.reference),
      r = n.namedParameterizedRoute;
    return t.excludeOptionalTrailingSlash || (r += "(?:/)?"), {
      ...d(e, t),
      namedRegex: `^${r}$`,
      routeKeys: n.routeKeys,
      pathToRegexpPattern: n.pathToRegexpPattern,
      reference: n.reference
    };
  }
  function m(e, t) {
    let {
        parameterizedRoute: n
      } = c(e, !1, !1),
      {
        catchAll: r = !0
      } = t;
    if ("/" === n) return {
      namedRegex: `^/${r ? ".*" : ""}$`
    };
    let {
      namedParameterizedRoute: a
    } = p(e, !1, !1, !1, !1, void 0);
    return {
      namedRegex: `^${a}${r ? "(?:(/.*)?)" : ""}$`
    };
  }
};
