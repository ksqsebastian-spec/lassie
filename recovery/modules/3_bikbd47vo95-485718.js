// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 485718.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["gracefulDecodeURIComponent", 0, function (t) {
    try {
      return decodeURIComponent(t.replace(/\+/g, " "));
    } catch (e) {
      return t;
    }
  }]);
};
