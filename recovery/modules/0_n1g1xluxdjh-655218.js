// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 655218.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    PARAMETER_PATTERN: function () {
      return d;
    },
    getDynamicParam: function () {
      return c;
    },
    interpolateParallelRouteParams: function () {
      return u;
    },
    parseMatchedParameter: function () {
      return p;
    },
    parseParameter: function () {
      return f;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(411976),
    o = e.r(208664),
    l = e.r(440968),
    s = e.r(416239);
  function u(e, t, n, r) {
    let a = structuredClone(t),
      u = [{
        tree: e,
        depth: 0
      }],
      c = (0, l.parseNormalizedAppRoute)(n);
    for (; u.length > 0;) {
      let {
          tree: e,
          depth: t
        } = u.pop(),
        {
          segment: n,
          parallelRoutes: d
        } = (0, o.parseLoaderTree)(e),
        f = (0, l.parseAppRouteSegment)(n);
      if (f?.type === "dynamic" && !a.hasOwnProperty(f.param.paramName) && !r?.has(f.param.paramName)) {
        let {
            paramName: e,
            paramType: n
          } = f.param,
          r = (0, s.resolveParamValue)(e, n, t, c, a);
        if (void 0 !== r) a[e] = r;else if ("optional-catchall" !== n) throw Object.defineProperty(new i.InvariantError(`Could not resolve param value for segment: ${e}`), "__NEXT_ERROR_CODE", {
          value: "E932",
          enumerable: !1,
          configurable: !0
        });
      }
      let p = t;
      for (let e of (f && "route-group" !== f.type && "parallel-route" !== f.type && p++, Object.values(d))) u.push({
        tree: e,
        depth: p
      });
    }
    return a;
  }
  function c(e, t, n, r, a) {
    let o = function (e, t, n) {
      let r = e[t];
      if (n?.has(t)) {
        let [e] = n.get(t);
        r = e;
      } else Array.isArray(r) ? r = r.map(e => encodeURIComponent(e)) : "string" == typeof r && (r = encodeURIComponent(r));
      return r;
    }(e, t, r);
    if (!o || 0 === o.length) {
      if ("oc" === n) return {
        param: t,
        value: null,
        type: n,
        treeSegment: [t, "", n, a]
      };
      throw Object.defineProperty(new i.InvariantError(`Missing value for segment key: "${t}" with dynamic param type: ${n}`), "__NEXT_ERROR_CODE", {
        value: "E864",
        enumerable: !1,
        configurable: !0
      });
    }
    let l = Array.isArray(o) ? o.join("/") : o;
    return {
      param: t,
      value: o,
      treeSegment: [t, l, n, a],
      type: n
    };
  }
  let d = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
  function f(e) {
    let t = e.match(d);
    return t ? p(t[2]) : p(e);
  }
  function p(e) {
    let t = e.startsWith("[") && e.endsWith("]");
    t && (e = e.slice(1, -1));
    let n = e.startsWith("...");
    return n && (e = e.slice(3)), {
      key: e,
      repeat: n,
      optional: t
    };
  }
};
