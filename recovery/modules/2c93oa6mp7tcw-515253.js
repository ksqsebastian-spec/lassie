// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 515253.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    ErrorBoundary: function () {
      return y;
    },
    ErrorBoundaryHandler: function () {
      return _;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(171266),
    i = e.r(281889),
    a = u._(e.r(513679)),
    l = e.r(980374),
    s = e.r(213475);
  e.r(134283);
  let c = e.r(382702),
    d = e.r(361130),
    f = e.r(516968),
    p = "u" > typeof window && (0, d.isBot)(window.navigator.userAgent);
  class _ extends a.default.Component {
    static {
      this.contextType = f.AppRouterContext;
    }
    constructor(e) {
      super(e), this.reset = () => {
        this.setState({
          error: null
        });
      }, this.retry = () => {
        (0, a.startTransition)(() => {
          this.context?.refresh(), this.reset();
        });
      }, this.state = {
        error: null,
        previousPathname: this.props.pathname
      };
    }
    static getDerivedStateFromError(e) {
      if ((0, s.isNextRouterError)(e)) throw e;
      return {
        error: {
          thrownValue: e
        }
      };
    }
    static getDerivedStateFromProps(e, t) {
      let {
        error: r
      } = t;
      return e.pathname !== t.previousPathname && t.error ? {
        error: null,
        previousPathname: e.pathname
      } : {
        error: t.error,
        previousPathname: e.pathname
      };
    }
    render() {
      if (this.state.error && !p) {
        let e = this.state.error.thrownValue;
        return (0, c.handleISRError)({
          error: e
        }), (0, i.jsxs)(i.Fragment, {
          children: [this.props.errorStyles, this.props.errorScripts, (0, i.jsx)(this.props.errorComponent, {
            error: e,
            reset: this.reset,
            retry: this.retry
          })]
        });
      }
      return this.props.children;
    }
  }
  function y({
    errorComponent: e,
    errorStyles: t,
    errorScripts: r,
    children: n
  }) {
    let o = (0, l.useUntrackedPathname)();
    return e ? (0, i.jsx)(_, {
      pathname: o,
      errorComponent: e,
      errorStyles: t,
      errorScripts: r,
      children: n
    }) : (0, i.jsx)(i.Fragment, {
      children: n
    });
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
