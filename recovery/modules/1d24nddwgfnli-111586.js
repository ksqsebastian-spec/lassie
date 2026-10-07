// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 111586.
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
  for (var a in i) Object.defineProperty(r, a, {
    enumerable: !0,
    get: i[a]
  });
  let n = e.r(330053),
    l = e.r(171266),
    s = e.r(281889),
    o = l._(e.r(513679)),
    d = n._(e.r(194094)),
    u = e.r(543091);
  function c() {
    return [(0, s.jsx)("meta", {
      charSet: "utf-8"
    }, "charset"), (0, s.jsx)("meta", {
      name: "viewport",
      content: "width=device-width"
    }, "viewport")];
  }
  function m(e, t) {
    return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t);
  }
  let f = ["name", "httpEquiv", "charSet", "itemProp"];
  function p(e) {
    let t, r, i, a;
    return e.reduce(m, []).reverse().concat(c().reverse()).filter((t = new Set(), r = new Set(), i = new Set(), a = {}, e => {
      let n = !0,
        l = !1;
      if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
        l = !0;
        let r = e.key.slice(e.key.indexOf("$") + 1);
        t.has(r) ? n = !1 : t.add(r);
      }
      switch (e.type) {
        case "title":
        case "base":
          r.has(e.type) ? n = !1 : r.add(e.type);
          break;
        case "meta":
          for (let t = 0, r = f.length; t < r; t++) {
            let r = f[t];
            if (e.props.hasOwnProperty(r)) if ("charSet" === r) i.has(r) ? n = !1 : i.add(r);else {
              let t = e.props[r],
                i = a[r] || new Set();
              ("name" !== r || !l) && i.has(t) ? n = !1 : (i.add(t), a[r] = i);
            }
          }
      }
      return n;
    })).reverse().map((e, t) => {
      let r = e.key || t;
      return o.default.cloneElement(e, {
        key: r
      });
    });
  }
  let h = function ({
    children: e
  }) {
    let t = (0, o.useContext)(u.HeadManagerContext);
    return (0, s.jsx)(d.default, {
      reduceComponentsToState: p,
      headManager: t,
      children: e
    });
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
