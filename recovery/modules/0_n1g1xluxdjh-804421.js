// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 804421.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    GracefulDegradeBoundary: function () {
      return l;
    },
    default: function () {
      return s;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  let i = e.r(281889),
    o = e.r(513679);
  class l extends o.Component {
    constructor(e) {
      super(e), this.state = {
        hasError: !1
      }, this.rootHtml = "", this.htmlAttributes = {}, this.htmlRef = (0, o.createRef)();
    }
    static getDerivedStateFromError(e) {
      return {
        hasError: !0
      };
    }
    componentDidMount() {
      let e = this.htmlRef.current;
      this.state.hasError && e && Object.entries(this.htmlAttributes).forEach(([t, n]) => {
        e.setAttribute(t, n);
      });
    }
    render() {
      let {
        hasError: e
      } = this.state;
      return ("u" > typeof window && !this.rootHtml && (this.rootHtml = document.documentElement.innerHTML, this.htmlAttributes = function (e) {
        let t = {};
        for (let n = 0; n < e.attributes.length; n++) {
          let r = e.attributes[n];
          t[r.name] = r.value;
        }
        return t;
      }(document.documentElement)), e) ? (0, i.jsx)("html", {
        ref: this.htmlRef,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: this.rootHtml
        }
      }) : this.props.children;
    }
  }
  let s = l;
  ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
    value: !0
  }), Object.assign(n.default, n), t.exports = n.default);
};
