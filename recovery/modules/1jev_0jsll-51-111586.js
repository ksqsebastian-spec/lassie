// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 111586.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var i = {
    default: function () {
      return h;
    },
    defaultHead: function () {
      return c;
    }
  };
  for (var n in i) Object.defineProperty(r, n, {
    enumerable: !0,
    get: i[n]
  });
  let a = e.r(330053),
    s = e.r(171266),
    o = e.r(281889),
    l = s._(e.r(513679)),
    u = a._(e.r(194094)),
    d = e.r(543091);
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
  let m = ["name", "httpEquiv", "charSet", "itemProp"];
  function p(e) {
    let t, r, i, n;
    return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set(), r = new Set(), i = new Set(), n = {}, e => {
      let a = !0,
        s = !1;
      if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
        s = !0;
        let r = e.key.slice(e.key.indexOf("$") + 1);
        t.has(r) ? a = !1 : t.add(r);
      }
      switch (e.type) {
        case "title":
        case "base":
          r.has(e.type) ? a = !1 : r.add(e.type);
          break;
        case "meta":
          for (let t = 0, r = m.length; t < r; t++) {
            let r = m[t];
            if (e.props.hasOwnProperty(r)) if ("charSet" === r) i.has(r) ? a = !1 : i.add(r);else {
              let t = e.props[r],
                i = n[r] || new Set();
              ("name" !== r || !s) && i.has(t) ? a = !1 : (i.add(t), n[r] = i);
            }
          }
      }
      return a;
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
    let t = (0, l.useContext)(d.HeadManagerContext);
    return (0, o.jsx)(u.default, {
      reduceComponentsToState: p,
      headManager: t,
      children: e
    });
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
