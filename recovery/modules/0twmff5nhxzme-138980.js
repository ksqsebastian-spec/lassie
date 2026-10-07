// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 138980.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(679893),
    n = e.i(526296),
    r = (e.i(691480), e.i(195041)),
    i = e.i(911938),
    o = e.i(463549),
    s = e.i(233628),
    u = e.i(513679);
  let a = u.default.createContext(null);
  u.default.forwardRef(function (e, t) {
    let {
        children: n,
        ...r
      } = e,
      i = (0, o.useObjectRef)(t),
      s = {
        ...r,
        ref: i
      };
    return u.default.createElement(a.Provider, {
      value: s
    }, n);
  }), e.s(["FocusableContext", 0, a, "useFocusable", 0, function (e, o) {
    let {
        focusProps: l
      } = (0, r.useFocus)(e),
      {
        keyboardProps: c
      } = (0, i.useKeyboard)(e),
      d = (0, n.mergeProps)(l, c),
      f = function (e) {
        let t = (0, u.useContext)(a) || {};
        (0, s.useSyncRef)(t, e);
        let {
          ref: n,
          ...r
        } = t;
        return r;
      }(o),
      p = e.isDisabled ? {} : f,
      g = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
      g.current && o.current && (0, t.focusSafely)(o.current), g.current = !1;
    }, [o]);
    let v = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (v = void 0), {
      focusableProps: (0, n.mergeProps)({
        ...d,
        tabIndex: v
      }, p)
    };
  }]);
};
