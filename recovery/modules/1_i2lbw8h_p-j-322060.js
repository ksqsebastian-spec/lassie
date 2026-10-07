// Recovered from 1_i2lbw8h_p-j.js. Runtime module IDs: 322060.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  var r = e.e && e.e.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.sendGTMEvent = void 0, n.GoogleTagManager = function (e) {
    let {
      gtmId: t,
      gtmScriptUrl: n,
      dataLayerName: r = "dataLayer",
      auth: o,
      preview: u,
      dataLayer: c,
      nonce: d
    } = e;
    l = r;
    let f = new URL(n || "https://www.googletagmanager.com/gtm.js");
    return t && f.searchParams.set("id", t), "dataLayer" !== r && f.searchParams.set("l", r), o && f.searchParams.set("gtm_auth", o), u && (f.searchParams.set("gtm_preview", u), f.searchParams.set("gtm_cookies_win", "x")), (0, a.useEffect)(() => {
      performance.mark("mark_feature_usage", {
        detail: {
          feature: "next-third-parties-gtm"
        }
      });
    }, []), (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(i.default, {
        id: "_next-gtm-init",
        dangerouslySetInnerHTML: {
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c ? `w[l].push(${JSON.stringify(c)})` : ""}
      })(window,'${r}');`
        },
        nonce: d
      }), (0, s.jsx)(i.default, {
        id: "_next-gtm",
        "data-ntpc": "GTM",
        src: f.href,
        nonce: d
      })]
    });
  };
  let s = e.r(281889),
    a = e.r(513679),
    i = r(e.r(546619)),
    l = "dataLayer";
  n.sendGTMEvent = (e, t) => {
    let n = t || l;
    window[n] = window[n] || [], window[n].push(e);
  };
};
