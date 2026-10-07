// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 64987.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = t.e && t.e.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.Alias = void 0;
  var o = n(t.r(322517)),
    i = t.r(945075);
  function a(t, e) {
    i.Facade.call(this, t, e);
  }
  r.Alias = a, o.default(a, i.Facade), a.prototype.action = function () {
    return "alias";
  }, a.prototype.type = a.prototype.action, a.prototype.previousId = function () {
    return this.field("previousId") || this.field("from");
  }, a.prototype.from = a.prototype.previousId, a.prototype.userId = function () {
    return this.field("userId") || this.field("to");
  }, a.prototype.to = a.prototype.userId;
};
