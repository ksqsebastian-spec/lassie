// Recovered from 2i3o_1xbeljyy.js. Runtime module IDs: 829524.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
  let n = e.r(171266),
    l = e.r(281889),
    u = n._(e.r(513679)),
    a = e.r(980374),
    o = e.r(555408),
    d = e.r(516968);
  class s extends u.default.Component {
    constructor(e) {
      super(e), this.state = {
        triggeredStatus: void 0,
        previousPathname: e.pathname
      };
    }
    componentDidCatch() {}
    static getDerivedStateFromError(e) {
      if ((0, o.isHTTPAccessFallbackError)(e)) return {
        triggeredStatus: (0, o.getAccessFallbackHTTPStatus)(e)
      };
      throw e;
    }
    static getDerivedStateFromProps(e, t) {
      return e.pathname !== t.previousPathname && t.triggeredStatus ? {
        triggeredStatus: void 0,
        previousPathname: e.pathname
      } : {
        triggeredStatus: t.triggeredStatus,
        previousPathname: e.pathname
      };
    }
    render() {
      let {
          notFound: e,
          forbidden: t,
          unauthorized: r,
          children: n
        } = this.props,
        {
          triggeredStatus: u
        } = this.state,
        a = {
          [o.HTTPAccessErrorStatus.NOT_FOUND]: e,
          [o.HTTPAccessErrorStatus.FORBIDDEN]: t,
          [o.HTTPAccessErrorStatus.UNAUTHORIZED]: r
        };
      if (u) {
        let d = u === o.HTTPAccessErrorStatus.NOT_FOUND && e,
          s = u === o.HTTPAccessErrorStatus.FORBIDDEN && t,
          i = u === o.HTTPAccessErrorStatus.UNAUTHORIZED && r;
        return d || s || i ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("meta", {
            name: "robots",
            content: "noindex"
          }), !1, a[u]]
        }) : n;
      }
      return n;
    }
  }
  function i({
    notFound: e,
    forbidden: t,
    unauthorized: r,
    children: n
  }) {
    let o = (0, a.useUntrackedPathname)(),
      c = (0, u.useContext)(d.MissingSlotContext);
    return e || t || r ? (0, l.jsx)(s, {
      pathname: o,
      notFound: e,
      forbidden: t,
      unauthorized: r,
      missingSlots: c,
      children: n
    }) : (0, l.jsx)(l.Fragment, {
      children: n
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
