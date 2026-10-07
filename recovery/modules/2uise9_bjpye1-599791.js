// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 599791.
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
  }), r.Group = void 0;
  var o = n(t.r(322517)),
    i = n(t.r(190262)),
    a = n(t.r(58681)),
    s = t.r(945075);
  function u(t, e) {
    s.Facade.call(this, t, e);
  }
  r.Group = u, o.default(u, s.Facade);
  var p = u.prototype;
  p.action = function () {
    return "group";
  }, p.type = p.action, p.groupId = s.Facade.field("groupId"), p.created = function () {
    var t = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
    if (t) return a.default(t);
  }, p.email = function () {
    var t = this.proxy("traits.email");
    if (t) return t;
    var e = this.groupId();
    if (i.default(e)) return e;
  }, p.traits = function (t) {
    var e = this.properties(),
      r = this.groupId();
    for (var n in t = t || {}, r && (e.id = r), t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var o = null == this[n] ? this.proxy("traits." + n) : this[n]();
      if (null == o) continue;
      e[t[n]] = o, delete e[n];
    }
    return e;
  }, p.name = s.Facade.proxy("traits.name"), p.industry = s.Facade.proxy("traits.industry"), p.employees = s.Facade.proxy("traits.employees"), p.properties = function () {
    return this.field("traits") || this.field("properties") || {};
  };
};
