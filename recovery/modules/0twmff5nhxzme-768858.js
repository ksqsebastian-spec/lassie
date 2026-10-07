// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 768858.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(679978);
  e.s(["isVirtualClick", 0, function (e) {
    return "" === e.pointerType && !!e.isTrusted || ((0, t.isAndroid)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
  }, "isVirtualPointerEvent", 0, function (e) {
    return !(0, t.isAndroid)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType;
  }]);
};
