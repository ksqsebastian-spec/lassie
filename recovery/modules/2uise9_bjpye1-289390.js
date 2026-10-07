// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 289390.
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
  }), r.Screen = void 0;
  var o = n(t.r(322517)),
    i = t.r(246501),
    a = t.r(60727);
  function s(t, e) {
    i.Page.call(this, t, e);
  }
  r.Screen = s, o.default(s, i.Page), s.prototype.action = function () {
    return "screen";
  }, s.prototype.type = s.prototype.action, s.prototype.event = function (t) {
    return t ? "Viewed " + t + " Screen" : "Loaded a Screen";
  }, s.prototype.track = function (t) {
    var e = this.json();
    return e.event = this.event(t), e.timestamp = this.timestamp(), e.properties = this.properties(), new a.Track(e, this.opts);
  };
};
