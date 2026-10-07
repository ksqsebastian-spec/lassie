// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 697299.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    RedirectBoundary: function () {
      return p;
    },
    RedirectErrorBoundary: function () {
      return f;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(171266),
    i = e.r(281889),
    a = u._(e.r(513679)),
    l = e.r(16579),
    s = e.r(611069),
    c = e.r(517460);
  function d({
    redirect: e,
    reset: t,
    redirectType: r
  }) {
    let n = (0, l.useRouter)();
    return (0, a.useEffect)(() => {
      a.default.startTransition(() => {
        "push" === r ? n.push(e, {}) : n.replace(e, {}), t();
      });
    }, [e, r, t, n]), null;
  }
  class f extends a.default.Component {
    constructor(e) {
      super(e), this.state = {
        redirect: null,
        redirectType: null
      };
    }
    static getDerivedStateFromError(e) {
      if ((0, c.isRedirectError)(e)) {
        let t = (0, s.getURLFromRedirectError)(e),
          r = (0, s.getRedirectTypeFromError)(e);
        return "handled" in e ? {
          redirect: null,
          redirectType: null
        } : {
          redirect: t,
          redirectType: r
        };
      }
      throw e;
    }
    render() {
      let {
        redirect: e,
        redirectType: t
      } = this.state;
      return null !== e && null !== t ? (0, i.jsx)(d, {
        redirect: e,
        redirectType: t,
        reset: () => this.setState({
          redirect: null
        })
      }) : this.props.children;
    }
  }
  function p({
    children: e
  }) {
    let t = (0, l.useRouter)();
    return (0, i.jsx)(f, {
      router: t,
      children: e
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
