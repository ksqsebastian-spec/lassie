// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 278736.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    default: function () {
      return O;
    },
    handleClientScriptLoad: function () {
      return b;
    },
    initScriptLoader: function () {
      return g;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(330053),
    i = e.r(171266),
    a = e.r(281889),
    l = u._(e.r(345078)),
    s = i._(e.r(513679)),
    c = e.r(543091),
    d = e.r(946464),
    f = e.r(19998),
    p = e.r(860735),
    _ = new Map(),
    y = new Set(),
    h = e => {
      let {
          src: t,
          id: r,
          onLoad: n = () => {},
          onReady: o = null,
          dangerouslySetInnerHTML: u,
          children: i = "",
          strategy: a = "afterInteractive",
          onError: s,
          stylesheets: c
        } = e,
        f = r || t;
      if (f && y.has(f)) return;
      if (_.has(t)) {
        y.add(f), _.get(t).then(n, s);
        return;
      }
      let p = () => {
          o && o(), y.add(f);
        },
        h = document.createElement("script"),
        b = new Promise((e, t) => {
          h.addEventListener("load", function (t) {
            e(), n && n.call(this, t), p();
          }), h.addEventListener("error", function (e) {
            t(e);
          });
        }).catch(function (e) {
          s && s(e);
        });
      u ? (h.innerHTML = u.__html || "", p()) : i ? (h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", p()) : t && (h.src = t, _.set(t, b)), (0, d.setAttributesFromProps)(h, e), "worker" === a && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", a), c && (e => {
        if (l.default.preinit) return e.forEach(e => {
          l.default.preinit(e, {
            as: "style"
          });
        });
        if ("u" > typeof window) {
          let t = document.head;
          e.forEach(e => {
            let r = document.createElement("link");
            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r);
          });
        }
      })(c), document.body.appendChild(h);
    };
  function b(e) {
    let {
      strategy: t = "afterInteractive"
    } = e;
    "lazyOnload" === t ? window.addEventListener("load", () => {
      (0, f.requestIdleCallback)(() => h(e));
    }) : h(e);
  }
  function g(e) {
    e.forEach(b), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
      let t = e.id || e.getAttribute("src");
      y.add(t);
    });
  }
  function m(e) {
    let {
        id: t,
        src: r = "",
        onLoad: n = () => {},
        onReady: o = null,
        strategy: u = "afterInteractive",
        onError: i,
        stylesheets: d,
        ..._
      } = e,
      {
        updateScripts: b,
        scripts: g,
        getIsSsr: m,
        appDir: O,
        nonce: v
      } = (0, s.useContext)(c.HeadManagerContext);
    v = _.nonce || v;
    let P = (0, s.useRef)(!1);
    (0, s.useEffect)(() => {
      let e = t || r;
      P.current || (o && e && y.has(e) && o(), P.current = !0);
    }, [o, t, r]);
    let j = (0, s.useRef)(!1);
    if ((0, s.useEffect)(() => {
      if (!j.current) {
        if ("afterInteractive" === u) h(e);else "lazyOnload" === u && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => h(e));
        }));
        j.current = !0;
      }
    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (b ? (g[u] = (g[u] || []).concat([{
      id: t,
      src: r,
      onLoad: n,
      onReady: o,
      onError: i,
      ..._,
      nonce: v
    }]), b(g)) : m && m() ? y.add(t || r) : m && !m() && h({
      ...e,
      nonce: v
    })), O) {
      if (d && d.forEach(e => {
        l.default.preinit(e, {
          as: "style"
        });
      }), "beforeInteractive" === u) if (!r) return _.dangerouslySetInnerHTML && (_.children = _.dangerouslySetInnerHTML.__html, delete _.dangerouslySetInnerHTML), (0, a.jsx)("script", {
        nonce: v,
        dangerouslySetInnerHTML: {
          __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([0, {
            ..._,
            id: t
          }]))})`
        }
      });else return l.default.preload(r, _.integrity ? {
        as: "script",
        integrity: _.integrity,
        nonce: v,
        crossOrigin: _.crossOrigin
      } : {
        as: "script",
        nonce: v,
        crossOrigin: _.crossOrigin
      }), (0, a.jsx)("script", {
        nonce: v,
        dangerouslySetInnerHTML: {
          __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([r, {
            ..._,
            id: t
          }]))})`
        }
      });
      "afterInteractive" === u && r && l.default.preload(r, _.integrity ? {
        as: "script",
        integrity: _.integrity,
        nonce: v,
        crossOrigin: _.crossOrigin
      } : {
        as: "script",
        nonce: v,
        crossOrigin: _.crossOrigin
      });
    }
    return null;
  }
  Object.defineProperty(m, "__nextScript", {
    value: !0
  });
  let O = m;
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
