// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 111586.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  var r = {
    default: function () {
      return m;
    },
    defaultHead: function () {
      return h;
    }
  };
  for (var o in r) Object.defineProperty(i, o, {
    enumerable: !0,
    get: r[o]
  });
  let n = e.r(330053),
    s = e.r(171266),
    l = e.r(281889),
    a = s._(e.r(513679)),
    u = n._(e.r(194094)),
    c = e.r(543091);
  function h() {
    return [(0, l.jsx)("meta", {
      charSet: "utf-8"
    }, "charset"), (0, l.jsx)("meta", {
      name: "viewport",
      content: "width=device-width"
    }, "viewport")];
  }
  function d(e, t) {
    return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t);
  }
  let p = ["name", "httpEquiv", "charSet", "itemProp"];
  function f(e) {
    let t, i, r, o;
    return e.reduce(d, []).reverse().concat(h().reverse()).filter((t = new Set(), i = new Set(), r = new Set(), o = {}, e => {
      let n = !0,
        s = !1;
      if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
        s = !0;
        let i = e.key.slice(e.key.indexOf("$") + 1);
        t.has(i) ? n = !1 : t.add(i);
      }
      switch (e.type) {
        case "title":
        case "base":
          i.has(e.type) ? n = !1 : i.add(e.type);
          break;
        case "meta":
          for (let t = 0, i = p.length; t < i; t++) {
            let i = p[t];
            if (e.props.hasOwnProperty(i)) if ("charSet" === i) r.has(i) ? n = !1 : r.add(i);else {
              let t = e.props[i],
                r = o[i] || new Set();
              ("name" !== i || !s) && r.has(t) ? n = !1 : (r.add(t), o[i] = r);
            }
          }
      }
      return n;
    })).reverse().map((e, t) => {
      let i = e.key || t;
      return a.default.cloneElement(e, {
        key: i
      });
    });
  }
  let m = function ({
    children: e
  }) {
    let t = (0, a.useContext)(c.HeadManagerContext);
    return (0, l.jsx)(u.default, {
      reduceComponentsToState: f,
      headManager: t,
      children: e
    });
  };
  ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
    value: !0
  }), Object.assign(i.default, i), t.exports = i.default);
};
