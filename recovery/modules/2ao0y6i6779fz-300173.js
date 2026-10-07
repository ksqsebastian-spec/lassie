// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 300173.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  var n = e.e && e.e.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = function (e) {
    let {
      html: t,
      scripts: r,
      stylesheets: n
    } = (0, o.YouTubeEmbed)(e);
    return (0, a.jsx)(s.default, {
      height: e.height || null,
      width: e.width || null,
      html: t,
      dataNtpc: "YouTubeEmbed",
      children: null == r ? void 0 : r.map(e => (0, a.jsx)(l.default, {
        src: e.url,
        strategy: i[e.strategy],
        stylesheets: n
      }, e.url))
    });
  };
  let a = e.r(281889),
    l = n(e.r(546619)),
    o = e.r(822486),
    s = n(e.r(752642)),
    i = {
      server: "beforeInteractive",
      client: "afterInteractive",
      idle: "lazyOnload",
      worker: "worker"
    };
};
