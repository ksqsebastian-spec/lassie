// Recovered from 2te6sb7vp8v8p.js. Runtime module IDs: 246880.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["hasTouchSupport", 0, function () {
    return window.PointerEvent && "maxTouchPoints" in navigator ? navigator.maxTouchPoints > 0 : !!window.matchMedia && !!window.matchMedia("(any-pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0;
  }]);
};
