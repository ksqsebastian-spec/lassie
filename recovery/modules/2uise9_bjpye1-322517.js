// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 322517.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "function" == typeof Object.create ? e.exports = function (t, e) {
    e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : e.exports = function (t, e) {
    if (e) {
      t.super_ = e;
      var r = function () {};
      r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }
  };
};
