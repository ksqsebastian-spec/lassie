// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 941413.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  var n = e.e && e.e.__rest || function (e, t) {
      var r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) 0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
      return r;
    },
    a = e.e && e.e.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.GoogleMapsEmbed = void 0;
  let l = a(e.r(207052)),
    o = e.r(168055);
  r.GoogleMapsEmbed = e => {
    var t = n(e, []);
    return (0, o.formatData)(l.default, t);
  };
};
