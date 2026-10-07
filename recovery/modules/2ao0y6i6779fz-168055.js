// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 168055.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e, t, r = !1) {
    return t ? Object.keys(e).filter(e => r ? !t.includes(e) : t.includes(e)).reduce((t, r) => (t[r] = e[r], t), {}) : {};
  }
  function a(e, t, r, n) {
    let a = n && Object.keys(n).length > 0 ? new URL(Object.values(n)[0], e) : new URL(e);
    return t && r && t.forEach(e => {
      r[e] && a.searchParams.set(e, r[e]);
    }), a.toString();
  }
  function l(e, t, r, n, l) {
    var o;
    if (!t) return `<${e}></${e}>`;
    let s = (null == (o = t.src) ? void 0 : o.url) ? Object.assign(Object.assign({}, t), {
        src: a(t.src.url, t.src.params, n, l)
      }) : t,
      i = Object.keys(Object.assign(Object.assign({}, s), r)).reduce((e, t) => {
        let n = null == r ? void 0 : r[t],
          a = s[t],
          l = null != n ? n : a,
          o = !0 === l ? t : `${t}="${l}"`;
        return l ? e + ` ${o}` : e;
      }, "");
    return `<${e}${i}></${e}>`;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.formatData = r.createHtml = r.formatUrl = void 0, r.formatUrl = a, r.createHtml = l, r.formatData = function (e, t) {
    var r, o, s, i, u;
    let c = n(t, null == (r = e.scripts) ? void 0 : r.reduce((e, t) => [...e, ...(Array.isArray(t.params) ? t.params : [])], [])),
      d = n(t, null == (s = null == (o = e.html) ? void 0 : o.attributes.src) ? void 0 : s.params),
      f = n(t, [null == (u = null == (i = e.html) ? void 0 : i.attributes.src) ? void 0 : u.slugParam]),
      m = n(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(f)], !0);
    return Object.assign(Object.assign({}, e), {
      html: e.html ? l(e.html.element, e.html.attributes, m, d, f) : null,
      scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
        url: a(e.url, e.params, c)
      })) : null
    });
  };
};
