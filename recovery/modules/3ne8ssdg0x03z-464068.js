// Recovered from 3ne8ssdg0x03z.js. Runtime module IDs: 464068.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    default: function () {
      return y;
    },
    useLinkStatus: function () {
      return v;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let l = e.r(171266),
    a = e.r(281889),
    u = l._(e.r(513679)),
    i = e.r(737409),
    s = e.r(516968),
    c = e.r(81378),
    f = e.r(478573),
    d = e.r(155044),
    p = e.r(909740),
    h = e.r(480106),
    m = e.r(743817),
    C = e.r(888474);
  function y(t) {
    var r;
    let n,
      o,
      l,
      [y, v] = (0, u.useOptimistic)(h.IDLE_LINK_STATUS),
      g = (0, u.useRef)(null),
      {
        href: j,
        as: L,
        children: P,
        prefetch: _ = null,
        passHref: x,
        replace: w,
        shallow: S,
        scroll: O,
        onClick: E,
        onMouseEnter: k,
        onTouchStart: T,
        legacyBehavior: M = !1,
        onNavigate: R,
        transitionTypes: A,
        ref: V,
        unstable_dynamicOnHover: H,
        ...I
      } = t;
    n = P, M && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
      children: n
    }));
    let N = u.default.useContext(s.AppRouterContext),
      B = !1 !== _,
      U = !1 === _ ? "none" : !0 === _ ? "full" : "auto",
      D = "none" !== U ? "auto" === U ? C.FetchStrategy.PPR : C.FetchStrategy.Full : C.FetchStrategy.PPR,
      Z = "string" == typeof (r = L || j) ? r : (0, i.formatUrl)(r);
    if (M) {
      if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      o = u.default.Children.only(n);
    }
    let F = M ? o && "object" == typeof o && o.ref : V,
      K,
      z = u.default.useCallback(e => (null !== N && (g.current = (0, h.mountLinkInstance)(e, Z, N, D, B, v, K)), () => {
        g.current && ((0, h.unmountLinkForCurrentNavigation)(g.current), g.current = null), (0, h.unmountPrefetchableInstance)(e);
      }), [B, Z, N, D, v, K]),
      $ = {
        ref: (0, c.useMergedRef)(z, F),
        onClick(t) {
          M || "function" != typeof E || E(t), M && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !N || t.defaultPrevented || function (t, r, n, o, l, a, i, s = "none") {
            if ("u" > typeof window) {
              let c,
                {
                  nodeName: f
                } = t.currentTarget;
              if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, m.isLocalURL)(r)) {
                o && (t.preventDefault(), location.replace(r));
                return;
              }
              if (t.preventDefault(), a) {
                let e = !1;
                if (a({
                  preventDefault: () => {
                    e = !0;
                  }
                }), e) return;
              }
              let {
                dispatchNavigateAction: d
              } = e.r(913151);
              u.default.startTransition(() => {
                d(r, o ? "replace" : "push", !1 === l ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, i, s);
              });
            }
          }(t, Z, g, w, O, R, A, U);
        },
        onMouseEnter(e) {
          M || "function" != typeof k || k(e), M && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), N && B && (0, h.onNavigationIntent)(e.currentTarget, !0 === H);
        },
        onTouchStart: function (e) {
          M || "function" != typeof T || T(e), M && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), N && B && (0, h.onNavigationIntent)(e.currentTarget, !0 === H);
        }
      };
    return (0, f.isAbsoluteUrl)(Z) ? $.href = Z : M && !x && ("a" !== o.type || "href" in o.props) || ($.href = (0, d.addBasePath)(Z)), l = M ? u.default.cloneElement(o, $) : (0, a.jsx)("a", {
      ...I,
      ...$,
      children: n
    }), (0, a.jsx)(b.Provider, {
      value: y,
      children: l
    });
  }
  let b = (0, u.createContext)(h.IDLE_LINK_STATUS),
    v = () => (0, u.useContext)(b);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
