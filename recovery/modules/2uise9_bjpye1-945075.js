// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 945075.
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
  }), r.Facade = void 0;
  var o = n(t.r(255340)),
    i = t.r(623952),
    a = n(t.r(938989)),
    s = n(t.r(58681)),
    u = n(t.r(979424)),
    p = n(t.r(101415));
  function c(t, e) {
    e = e || {}, this.raw = i.clone(t), "clone" in e || (e.clone = !0), e.clone && (t = i.clone(t)), "traverse" in e || (e.traverse = !0), "timestamp" in t ? t.timestamp = s.default(t.timestamp) : t.timestamp = new Date(), e.traverse && p.default(t), this.opts = e, this.obj = t;
  }
  r.Facade = c;
  var l = c.prototype;
  function f(t) {
    return i.clone(t);
  }
  l.proxy = function (t) {
    var e = t.split("."),
      r = this[t = e.shift()] || this.obj[t];
    return r ? ("function" == typeof r && (r = r.call(this) || {}), 0 === e.length || (r = u.default(r, e.join("."))), this.opts.clone ? f(r) : r) : r;
  }, l.field = function (t) {
    var e = this.obj[t];
    return this.opts.clone ? f(e) : e;
  }, c.proxy = function (t) {
    return function () {
      return this.proxy(t);
    };
  }, c.field = function (t) {
    return function () {
      return this.field(t);
    };
  }, c.multi = function (t) {
    return function () {
      var e = this.proxy(t + "s");
      if (Array.isArray(e)) return e;
      var r = this.proxy(t);
      return r && (r = [this.opts.clone ? i.clone(r) : r]), r || [];
    };
  }, c.one = function (t) {
    return function () {
      var e = this.proxy(t);
      if (e) return e;
      var r = this.proxy(t + "s");
      if (Array.isArray(r)) return r[0];
    };
  }, l.json = function () {
    var t = this.opts.clone ? i.clone(this.obj) : this.obj;
    return this.type && (t.type = this.type()), t;
  }, l.rawEvent = function () {
    return this.raw;
  }, l.options = function (t) {
    var e = this.obj.options || this.obj.context || {},
      r = this.opts.clone ? i.clone(e) : e;
    if (!t) return r;
    if (this.enabled(t)) {
      var n = this.integrations(),
        o = n[t] || u.default(n, t);
      return "object" != typeof o && (o = u.default(this.options(), t)), "object" == typeof o ? o : {};
    }
  }, l.context = l.options, l.enabled = function (t) {
    var e = this.proxy("options.providers.all");
    "boolean" != typeof e && (e = this.proxy("options.all")), "boolean" != typeof e && (e = this.proxy("integrations.all")), "boolean" != typeof e && (e = !0);
    var r = e && a.default(t),
      n = this.integrations();
    if (n.providers && n.providers.hasOwnProperty(t) && (r = n.providers[t]), n.hasOwnProperty(t)) {
      var o = n[t];
      r = "boolean" != typeof o || o;
    }
    return !!r;
  }, l.integrations = function () {
    return this.obj.integrations || this.proxy("options.providers") || this.options();
  }, l.active = function () {
    var t = this.proxy("options.active");
    return null == t && (t = !0), t;
  }, l.anonymousId = function () {
    return this.field("anonymousId") || this.field("sessionId");
  }, l.sessionId = l.anonymousId, l.groupId = c.proxy("options.groupId"), l.traits = function (t) {
    var e = this.proxy("options.traits") || {},
      r = this.userId();
    for (var n in t = t || {}, r && (e.id = r), t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var o = null == this[n] ? this.proxy("options.traits." + n) : this[n]();
      if (null == o) continue;
      e[t[n]] = o, delete e[n];
    }
    return e;
  }, l.library = function () {
    var t = this.proxy("options.library");
    return t ? "string" == typeof t ? {
      name: t,
      version: null
    } : t : {
      name: "unknown",
      version: null
    };
  }, l.device = function () {
    var t = this.proxy("context.device");
    ("object" != typeof t || null === t) && (t = {});
    var e = this.library().name;
    return t.type || (e.indexOf("ios") > -1 && (t.type = "ios"), e.indexOf("android") > -1 && (t.type = "android")), t;
  }, l.userAgent = c.proxy("context.userAgent"), l.timezone = c.proxy("context.timezone"), l.timestamp = c.field("timestamp"), l.channel = c.field("channel"), l.ip = c.proxy("context.ip"), l.userId = c.field("userId"), o.default(l);
};
