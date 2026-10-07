// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 929151.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  function e(t, e) {
    return new Promise(function (r, n) {
      var i = setTimeout(function () {
        n(Error("Promise timed out"));
      }, e);
      t.then(function (t) {
        return clearTimeout(i), r(t);
      }).catch(n);
    });
  }
  t.s(["invokeCallback", 0, function (t, r, n) {
    var i = function () {
      try {
        return Promise.resolve(r(t));
      } catch (t) {
        return Promise.reject(t);
      }
    };
    return new Promise(function (t) {
      return setTimeout(t, n);
    }).then(function () {
      return e(i(), 1e3);
    }).catch(function (e) {
      null == t || t.log("warn", "Callback Error", {
        error: e
      }), null == t || t.stats.increment("callback_error");
    }).then(function () {
      return t;
    });
  }, "pTimeout", 0, e]);
};
