// Recovered from 1_i2lbw8h_p-j.js. Runtime module IDs: 751079.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  let r;
  var s = e.e && e.e.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.GoogleAnalytics = function (e) {
    let {
      gaId: t,
      debugMode: n,
      dataLayerName: s = "dataLayer",
      nonce: o
    } = e;
    return void 0 === r && (r = s), (0, i.useEffect)(() => {
      performance.mark("mark_feature_usage", {
        detail: {
          feature: "next-third-parties-ga"
        }
      });
    }, []), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.default, {
        id: "_next-ga-init",
        dangerouslySetInnerHTML: {
          __html: `
          window['${s}'] = window['${s}'] || [];
          function gtag(){window['${s}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${n ? ",{ 'debug_mode': true }" : ""});`
        },
        nonce: o
      }), (0, a.jsx)(l.default, {
        id: "_next-ga",
        src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
        nonce: o
      })]
    });
  }, n.sendGAEvent = function () {
    void 0 === r ? console.warn("@next/third-parties: GA has not been initialized") : window[r] ? window[r].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`);
  };
  let a = e.r(281889),
    i = e.r(513679),
    l = s(e.r(546619));
};
