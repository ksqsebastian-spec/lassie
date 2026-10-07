// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 521222.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function i({
    widthInt: e,
    heightInt: t,
    blurWidth: r,
    blurHeight: a,
    blurDataURL: n,
    objectFit: l
  }) {
    let s = r ? 40 * r : e,
      o = a ? 40 * a : t,
      d = s && o ? `viewBox='0 0 ${s} ${o}'` : "";
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
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
