// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 464068.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  var r = {
    default: function () {
      return v;
    },
    useLinkStatus: function () {
      return b;
    }
  };
  for (var o in r) Object.defineProperty(i, o, {
    enumerable: !0,
    get: r[o]
  });
  let n = e.r(171266),
    s = e.r(281889),
    l = n._(e.r(513679)),
    a = e.r(737409),
    u = e.r(516968),
    c = e.r(81378),
    h = e.r(478573),
    d = e.r(155044),
    p = e.r(909740),
    f = e.r(480106),
    m = e.r(743817),
    g = e.r(888474);
  function v(t) {
    var i;
    let r,
      o,
      n,
      [v, b] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
      y = (0, l.useRef)(null),
      {
        href: S,
        as: C,
        children: x,
        prefetch: E = null,
        passHref: _,
        replace: L,
        shallow: j,
        scroll: T,
        onClick: O,
        onMouseEnter: R,
        onTouchStart: P,
        legacyBehavior: M = !1,
        onNavigate: z,
        transitionTypes: N,
        ref: k,
        unstable_dynamicOnHover: A,
        ...I
      } = t;
    r = x, M && ("string" == typeof r || "number" == typeof r) && (r = (0, s.jsx)("a", {
      children: r
    }));
    let H = l.default.useContext(u.AppRouterContext),
      D = !1 !== E,
      W = !1 === E ? "none" : !0 === E ? "full" : "auto",
      B = "none" !== W ? "auto" === W ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
      F = "string" == typeof (i = C || S) ? i : (0, a.formatUrl)(i);
    if (M) {
      if (r?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      o = l.default.Children.only(r);
    }
    let U = M ? o && "object" == typeof o && o.ref : k,
      V,
      $ = l.default.useCallback(e => (null !== H && (y.current = (0, f.mountLinkInstance)(e, F, H, B, D, b, V)), () => {
        y.current && ((0, f.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, f.unmountPrefetchableInstance)(e);
      }), [D, F, H, B, b, V]),
      q = {
        ref: (0, c.useMergedRef)($, U),
        onClick(t) {
          M || "function" != typeof O || O(t), M && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !H || t.defaultPrevented || function (t, i, r, o, n, s, a, u = "none") {
            if ("u" > typeof window) {
              let c,
                {
                  nodeName: h
                } = t.currentTarget;
              if ("A" === h.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, m.isLocalURL)(i)) {
                o && (t.preventDefault(), location.replace(i));
                return;
              }
              if (t.preventDefault(), s) {
                let e = !1;
                if (s({
                  preventDefault: () => {
                    e = !0;
                  }
                }), e) return;
              }
              let {
                dispatchNavigateAction: d
              } = e.r(913151);
              l.default.startTransition(() => {
                d(i, o ? "replace" : "push", !1 === n ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, r.current, a, u);
              });
            }
          }(t, F, y, L, T, z, N, W);
        },
        onMouseEnter(e) {
          M || "function" != typeof R || R(e), M && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), H && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === A);
        },
        onTouchStart: function (e) {
          M || "function" != typeof P || P(e), M && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), H && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === A);
        }
      };
    return (0, h.isAbsoluteUrl)(F) ? q.href = F : M && !_ && ("a" !== o.type || "href" in o.props) || (q.href = (0, d.addBasePath)(F)), n = M ? l.default.cloneElement(o, q) : (0, s.jsx)("a", {
      ...I,
      ...q,
      children: r
    }), (0, s.jsx)(w.Provider, {
      value: v,
      children: n
    });
  }
  let w = (0, l.createContext)(f.IDLE_LINK_STATUS),
    b = () => (0, l.useContext)(w);
  ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
    value: !0
  }), Object.assign(i.default, i), t.exports = i.default);
};
