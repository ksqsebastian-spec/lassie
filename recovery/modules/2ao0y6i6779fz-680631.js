// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 680631.
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
        apiKey: t,
        ...r
      } = e,
      n = {
        ...r,
        key: t
      },
      {
        html: s
      } = (0, l.GoogleMapsEmbed)(n);
    return (0, a.jsx)(o.default, {
      height: n.height || null,
      width: n.width || null,
      html: s,
      dataNtpc: "GoogleMapsEmbed"
    });
  };
  let a = e.r(281889),
    l = e.r(822486),
    o = n(e.r(752642));
};
