// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 111586.
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
    defaultHead: function () {
      return c;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let i = e.r(330053),
    s = e.r(171266),
    o = e.r(281889),
    l = s._(e.r(513679)),
    d = i._(e.r(194094)),
    u = e.r(543091);
  function c() {
    return [(0, o.jsx)("meta", {
      charSet: "utf-8"
    }, "charset"), (0, o.jsx)("meta", {
      name: "viewport",
      content: "width=device-width"
    }, "viewport")];
  }
  function f(e, t) {
    return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t);
  }
  let p = ["name", "httpEquiv", "charSet", "itemProp"];
  function m(e) {
    let t, r, n, a;
    return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set(), r = new Set(), n = new Set(), a = {}, e => {
      let i = !0,
        s = !1;
      if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
        s = !0;
        let r = e.key.slice(e.key.indexOf("$") + 1);
        t.has(r) ? i = !1 : t.add(r);
      }
      switch (e.type) {
        case "title":
        case "base":
          r.has(e.type) ? i = !1 : r.add(e.type);
          break;
        case "meta":
          for (let t = 0, r = p.length; t < r; t++) {
            let r = p[t];
            if (e.props.hasOwnProperty(r)) if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);else {
              let t = e.props[r],
                n = a[r] || new Set();
              ("name" !== r || !s) && n.has(t) ? i = !1 : (n.add(t), a[r] = n);
            }
          }
      }
      return i;
    })).reverse().map((e, t) => {
      let r = e.key || t;
      return l.default.cloneElement(e, {
        key: r
      });
    });
  }
  let h = function ({
    children: e
  }) {
    let t = (0, l.useContext)(u.HeadManagerContext);
    return (0, o.jsx)(d.default, {
      reduceComponentsToState: m,
      headManager: t,
      children: e
    });
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
