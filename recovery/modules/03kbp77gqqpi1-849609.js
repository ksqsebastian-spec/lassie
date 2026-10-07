// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 849609.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(787653);
  e.s(["isSafari", 0, function () {
    let {
      userAgent: e
    } = t.DOMAdapter.get().getNavigator();
    return /^((?!chrome|android).)*safari/i.test(e);
  }]);
};
