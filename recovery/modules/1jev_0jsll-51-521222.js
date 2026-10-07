// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 521222.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function i({
    widthInt: e,
    heightInt: t,
    blurWidth: r,
    blurHeight: n,
    blurDataURL: a,
    objectFit: s
  }) {
    let o = r ? 40 * r : e,
      l = n ? 40 * n : t,
      u = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "getImageBlurSvg", {
    enumerable: !0,
    get: function () {
      return i;
    }
  });
};
