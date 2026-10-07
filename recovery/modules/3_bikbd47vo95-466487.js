// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 466487.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(298352);
  function r() {
    return !(0, e.isBrowser)() || window.navigator.onLine;
  }
  t.s(["isOffline", 0, function () {
    return !r();
  }, "isOnline", 0, r]);
};
