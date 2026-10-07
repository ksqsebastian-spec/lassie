// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 318806.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    computeChangedPath: function () {
      return p;
    },
    extractPathFromFlightRouterState: function () {
      return d;
    },
    extractSourcePageFromFlightRouterState: function () {
      return h;
    },
    getSelectedParams: function () {
      return function e(t, r = {}) {
        for (let n of Object.values(t[1])) {
          let t = n[0],
            a = Array.isArray(t),
            l = a ? t[1] : t;
          !l || l.startsWith(u.PAGE_SEGMENT_KEY) || (a && ("c" === t[2] || "oc" === t[2]) ? r[t[0]] = t[1].split("/") : a && (r[t[0]] = t[1]), r = e(n, r));
        }
        return r;
      };
    },
    segmentToSourcePagePathname: function () {
      return s;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(570214),
    u = e.r(36741),
    i = e.r(84215),
    o = e => "/" === e[0] ? e.slice(1) : e,
    c = e => "string" == typeof e ? "children" === e ? "" : e : e[1],
    s = e => {
      if ("string" == typeof e) return "children" === e ? "" : e.startsWith(u.PAGE_SEGMENT_KEY) ? "page" : e;
      let [t,, r] = e;
      switch (r) {
        case "c":
          return `[...${t}]`;
        case "ci(..)(..)":
          return `(..)(..)[...${t}]`;
        case "ci(.)":
          return `(.)[...${t}]`;
        case "ci(..)":
          return `(..)[...${t}]`;
        case "ci(...)":
          return `(...)[...${t}]`;
        case "oc":
          return `[[...${t}]]`;
        case "d":
        default:
          return `[${t}]`;
        case "di(..)(..)":
          return `(..)(..)[${t}]`;
        case "di(.)":
          return `(.)[${t}]`;
        case "di(..)":
          return `(..)[${t}]`;
        case "di(...)":
          return `(...)[${t}]`;
      }
    };
  function f(e) {
    return e.reduce((e, t) => "" === (t = o(t)) || (0, u.isGroupSegment)(t) ? e : `${e}/${t}`, "") || "/";
  }
  function d(e) {
    let t = Array.isArray(e[0]) ? e[0][1] : e[0];
    if (t === u.DEFAULT_SEGMENT_KEY || l.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e))) return;
    if (t.startsWith(u.PAGE_SEGMENT_KEY)) return "";
    let r = [c(t)],
      n = e[1] ?? {},
      a = n.children ? d(n.children) : void 0;
    if (void 0 !== a) r.push(a);else for (let [e, t] of Object.entries(n)) {
      if ("children" === e) continue;
      let n = d(t);
      void 0 !== n && r.push(n);
    }
    return f(r);
  }
  function h(e) {
    let t = function e(t) {
      let r = s(t[0]);
      if (r === u.DEFAULT_SEGMENT_KEY) return;
      if ("page" === r) return [r];
      let n = t[1] ?? {},
        a = n.children ? e(n.children) : void 0;
      if (void 0 !== a) return "" === r ? a : [o(r), ...a];
      for (let [t, a] of Object.entries(n)) {
        if ("children" === t) continue;
        let n = e(a);
        if (void 0 !== n) return "" === r ? n : [o(r), ...n];
      }
    }(e);
    return t ? `/${t.join("/")}` : void 0;
  }
  function p(e, t) {
    let r = function e(t, r) {
      let [n, a] = t,
        [u, o] = r,
        s = c(n),
        f = c(u);
      if (l.INTERCEPTION_ROUTE_MARKERS.some(e => s.startsWith(e) || f.startsWith(e))) return "";
      if (!(0, i.matchSegment)(n, u)) return d(r) ?? "";
      for (let t in a) if (o[t]) {
        let r = e(a[t], o[t]);
        if (null !== r) return `${c(u)}/${r}`;
      }
      return null;
    }(e, t);
    return null == r || "/" === r ? r : f(r.split("/"));
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
