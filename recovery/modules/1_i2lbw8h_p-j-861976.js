// Recovered from 1_i2lbw8h_p-j.js. Runtime module IDs: 861976.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    n = e.i(300778),
    r = e.i(513679),
    s = e.i(931804),
    a = e.i(817255);
  let i = new s.UtmCookie(),
    l = new s.GoogleClickIdCookie(),
    o = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
    u = ["gclid", "gbraid", "wbraid"],
    c = /^[A-Za-z0-9_-]+$/;
  function d() {
    let e = (0, n.useSearchParams)(),
      t = e.toString();
    return (0, r.useEffect)(() => {
      let t = i.get() || {},
        n = !1;
      o.forEach(r => {
        let s = e.get(r);
        s && t[r] !== s && (t[r] = s, n = !0);
      }), n && (i.set(t), a.tracker.updateUtmData(t));
      let r = l.get() || {},
        s = !1;
      u.forEach(t => {
        let n = e.get(t);
        n && n.length <= 512 && c.test(n) && r[t] !== n && (r[t] = n, s = !0);
      }), s && l.set(r);
    }, [t]), null;
  }
  function f() {
    let e = (0, n.usePathname)();
    return (0, r.useEffect)(() => {
      a.tracker.page();
    }, [e]), null;
  }
  var h = e.i(546619);
  function m() {
    return (0, t.jsx)(h.default, {
      id: "unify",
      strategy: "afterInteractive",
      rel: "preconnect",
      children: `
      !(function () {
        window.unify ||
          (window.unify = Object.assign(
            [],
            [
              "identify",
              "page",
              "startAutoPage",
              "stopAutoPage",
              "startAutoIdentify",
              "stopAutoIdentify",
            ].reduce(function (t, e) {
              return (
                (t[e] = function () {
                  return unify.push([e, [].slice.call(arguments)]), unify;
                }),
                t
              );
            }, {}),
          ));
        var t = document.createElement("script");
        t.async = true;
        t.setAttribute("src", "https://tag.unifyintent.com/v1/FqArSwGa66xmF1eqjgauz8/script.js");
        t.setAttribute("data-api-key", "wk_gZJQ7mvk_8H52mWgx26SoTqjvtSUMsQt77ixkJmLA");
        t.setAttribute("id", "unifytag");
          (document.body || document.head).appendChild(t);
        })();
      `
    });
  }
  e.s(["ClientTracking", 0, function () {
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(d, {}), (0, t.jsx)(f, {}), (0, t.jsx)(m, {})]
    });
  }], 861976);
};
