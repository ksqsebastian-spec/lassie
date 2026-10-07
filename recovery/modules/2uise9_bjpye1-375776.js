// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 375776.
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
  }), r.Identify = void 0;
  var o = t.r(945075),
    i = n(t.r(979424)),
    a = n(t.r(322517)),
    s = n(t.r(190262)),
    u = n(t.r(58681)),
    p = function (t) {
      return t.trim();
    };
  function c(t, e) {
    o.Facade.call(this, t, e);
  }
  r.Identify = c, a.default(c, o.Facade);
  var l = c.prototype;
  l.action = function () {
    return "identify";
  }, l.type = l.action, l.traits = function (t) {
    var e = this.field("traits") || {},
      r = this.userId();
    for (var n in t = t || {}, r && (e.id = r), t) {
      var o = null == this[n] ? this.proxy("traits." + n) : this[n]();
      null != o && (e[t[n]] = o, n !== t[n] && delete e[n]);
    }
    return e;
  }, l.email = function () {
    var t = this.proxy("traits.email");
    if (t) return t;
    var e = this.userId();
    if (s.default(e)) return e;
  }, l.created = function () {
    var t = this.proxy("traits.created") || this.proxy("traits.createdAt");
    if (t) return u.default(t);
  }, l.companyCreated = function () {
    var t = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
    if (t) return u.default(t);
  }, l.companyName = function () {
    return this.proxy("traits.company.name");
  }, l.name = function () {
    var t = this.proxy("traits.name");
    if ("string" == typeof t) return p(t);
    var e = this.firstName(),
      r = this.lastName();
    if (e && r) return p(e + " " + r);
  }, l.firstName = function () {
    var t = this.proxy("traits.firstName");
    if ("string" == typeof t) return p(t);
    var e = this.proxy("traits.name");
    if ("string" == typeof e) return p(e).split(" ")[0];
  }, l.lastName = function () {
    var t = this.proxy("traits.lastName");
    if ("string" == typeof t) return p(t);
    var e = this.proxy("traits.name");
    if ("string" == typeof e) {
      var r = p(e).indexOf(" ");
      if (-1 !== r) return p(e.substr(r + 1));
    }
  }, l.uid = function () {
    return this.userId() || this.username() || this.email();
  }, l.description = function () {
    return this.proxy("traits.description") || this.proxy("traits.background");
  }, l.age = function () {
    var t = this.birthday(),
      e = i.default(this.traits(), "age");
    return null != e ? e : t instanceof Date ? new Date().getFullYear() - t.getFullYear() : void 0;
  }, l.avatar = function () {
    var t = this.traits();
    return i.default(t, "avatar") || i.default(t, "photoUrl") || i.default(t, "avatarUrl");
  }, l.position = function () {
    var t = this.traits();
    return i.default(t, "position") || i.default(t, "jobTitle");
  }, l.username = o.Facade.proxy("traits.username"), l.website = o.Facade.one("traits.website"), l.websites = o.Facade.multi("traits.website"), l.phone = o.Facade.one("traits.phone"), l.phones = o.Facade.multi("traits.phone"), l.address = o.Facade.proxy("traits.address"), l.gender = o.Facade.proxy("traits.gender"), l.birthday = o.Facade.proxy("traits.birthday");
};
