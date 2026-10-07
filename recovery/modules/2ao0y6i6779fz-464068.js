// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 464068.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    default: function () {
      return h;
    },
    useLinkStatus: function () {
      return v;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let l = e.r(171266),
    o = e.r(281889),
    s = l._(e.r(513679)),
    i = e.r(737409),
    u = e.r(516968),
    c = e.r(81378),
    d = e.r(478573),
    f = e.r(155044),
    m = e.r(909740),
    p = e.r(480106),
    b = e.r(743817),
    g = e.r(888474);
  function h(t) {
    var r;
    let n,
      a,
      l,
      [h, v] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
      j = (0, s.useRef)(null),
      {
        href: _,
        as: x,
        children: w,
        prefetch: C = null,
        passHref: O,
        replace: P,
        shallow: L,
        scroll: M,
        onClick: E,
        onMouseEnter: T,
        onTouchStart: k,
        legacyBehavior: S = !1,
        onNavigate: N,
        transitionTypes: A,
        ref: G,
        unstable_dynamicOnHover: R,
        ...D
      } = t;
    n = w, S && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
      children: n
    }));
    let I = s.default.useContext(u.AppRouterContext),
      H = !1 !== C,
      V = !1 === C ? "none" : !0 === C ? "full" : "auto",
      F = "none" !== V ? "auto" === V ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
      U = "string" == typeof (r = x || _) ? r : (0, i.formatUrl)(r);
    if (S) {
      if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      a = s.default.Children.only(n);
    }
    let B = S ? a && "object" == typeof a && a.ref : G,
      $,
      K = s.default.useCallback(e => (null !== I && (j.current = (0, p.mountLinkInstance)(e, U, I, F, H, v, $)), () => {
        j.current && ((0, p.unmountLinkForCurrentNavigation)(j.current), j.current = null), (0, p.unmountPrefetchableInstance)(e);
      }), [H, U, I, F, v, $]),
      Q = {
        ref: (0, c.useMergedRef)(K, B),
        onClick(t) {
          S || "function" != typeof E || E(t), S && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !I || t.defaultPrevented || function (t, r, n, a, l, o, i, u = "none") {
            if ("u" > typeof window) {
              let c,
                {
                  nodeName: d
                } = t.currentTarget;
              if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, b.isLocalURL)(r)) {
                a && (t.preventDefault(), location.replace(r));
                return;
              }
              if (t.preventDefault(), o) {
                let e = !1;
                if (o({
                  preventDefault: () => {
                    e = !0;
                  }
                }), e) return;
              }
              let {
                dispatchNavigateAction: f
              } = e.r(913151);
              s.default.startTransition(() => {
                f(r, a ? "replace" : "push", !1 === l ? m.ScrollBehavior.NoScroll : m.ScrollBehavior.Default, n.current, i, u);
              });
            }
          }(t, U, j, P, M, N, A, V);
        },
        onMouseEnter(e) {
          S || "function" != typeof T || T(e), S && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), I && H && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
        },
        onTouchStart: function (e) {
          S || "function" != typeof k || k(e), S && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), I && H && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
        }
      };
    return (0, d.isAbsoluteUrl)(U) ? Q.href = U : S && !O && ("a" !== a.type || "href" in a.props) || (Q.href = (0, f.addBasePath)(U)), l = S ? s.default.cloneElement(a, Q) : (0, o.jsx)("a", {
      ...D,
      ...Q,
      children: n
    }), (0, o.jsx)(y.Provider, {
      value: h,
      children: l
    });
  }
  let y = (0, s.createContext)(p.IDLE_LINK_STATUS),
    v = () => (0, s.useContext)(y);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
