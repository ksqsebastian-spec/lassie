// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 246501.
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
  }), r.Page = void 0;
  var o = n(t.r(322517)),
    i = t.r(945075),
    a = t.r(60727),
    s = n(t.r(190262));
  function u(t, e) {
    i.Facade.call(this, t, e);
  }
  r.Page = u, o.default(u, i.Facade);
  var p = u.prototype;
  p.action = function () {
    return "page";
  }, p.type = p.action, p.category = i.Facade.field("category"), p.name = i.Facade.field("name"), p.title = i.Facade.proxy("properties.title"), p.path = i.Facade.proxy("properties.path"), p.url = i.Facade.proxy("properties.url"), p.referrer = function () {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
  }, p.properties = function (t) {
    var e = this.field("properties") || {},
      r = this.category(),
      n = this.name();
    for (var o in t = t || {}, r && (e.category = r), n && (e.name = n), t) if (Object.prototype.hasOwnProperty.call(t, o)) {
      var i = null == this[o] ? this.proxy("properties." + o) : this[o]();
      if (null == i) continue;
      e[t[o]] = i, o !== t[o] && delete e[o];
    }
    return e;
  }, p.email = function () {
    var t = this.proxy("context.traits.email") || this.proxy("properties.email");
    if (t) return t;
    var e = this.userId();
    if (s.default(e)) return e;
  }, p.fullName = function () {
    var t = this.category(),
      e = this.name();
    return e && t ? t + " " + e : e;
  }, p.event = function (t) {
    return t ? "Viewed " + t + " Page" : "Loaded a Page";
  }, p.track = function (t) {
    var e = this.json();
    return e.event = this.event(t), e.timestamp = this.timestamp(), e.properties = this.properties(), new a.Track(e, this.opts);
  };
};
