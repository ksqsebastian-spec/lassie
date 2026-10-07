// Recovered from 25drgquolhhel.js. Runtime module IDs: 748689.
// This factory requires the original Turbopack runtime context.
export default (t, e, i) => {
  "use strict";

  var s = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  function a(t, e, i) {
    this.fn = t, this.context = e, this.once = i || !1;
  }
  function h(t, e, i, s, n) {
    if ("function" != typeof i) throw TypeError("The listener must be a function");
    var h = new a(i, s || t, n),
      o = r ? r + e : e;
    return t._events[o] ? t._events[o].fn ? t._events[o] = [t._events[o], h] : t._events[o].push(h) : (t._events[o] = h, t._eventsCount++), t;
  }
  function o(t, e) {
    0 == --t._eventsCount ? t._events = new n() : delete t._events[e];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), u.prototype.eventNames = function () {
    var t,
      e,
      i = [];
    if (0 === this._eventsCount) return i;
    for (e in t = this._events) s.call(t, e) && i.push(r ? e.slice(1) : e);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
  }, u.prototype.listeners = function (t) {
    var e = r ? r + t : t,
      i = this._events[e];
    if (!i) return [];
    if (i.fn) return [i.fn];
    for (var s = 0, n = i.length, a = Array(n); s < n; s++) a[s] = i[s].fn;
    return a;
  }, u.prototype.listenerCount = function (t) {
    var e = r ? r + t : t,
      i = this._events[e];
    return i ? i.fn ? 1 : i.length : 0;
  }, u.prototype.emit = function (t, e, i, s, n, a) {
    var h = r ? r + t : t;
    if (!this._events[h]) return !1;
    var o,
      u,
      l = this._events[h],
      d = arguments.length;
    if (l.fn) {
      switch (l.once && this.removeListener(t, l.fn, void 0, !0), d) {
        case 1:
          return l.fn.call(l.context), !0;
        case 2:
          return l.fn.call(l.context, e), !0;
        case 3:
          return l.fn.call(l.context, e, i), !0;
        case 4:
          return l.fn.call(l.context, e, i, s), !0;
        case 5:
          return l.fn.call(l.context, e, i, s, n), !0;
        case 6:
          return l.fn.call(l.context, e, i, s, n, a), !0;
      }
      for (u = 1, o = Array(d - 1); u < d; u++) o[u - 1] = arguments[u];
      l.fn.apply(l.context, o);
    } else {
      var c,
        f = l.length;
      for (u = 0; u < f; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), d) {
        case 1:
          l[u].fn.call(l[u].context);
          break;
        case 2:
          l[u].fn.call(l[u].context, e);
          break;
        case 3:
          l[u].fn.call(l[u].context, e, i);
          break;
        case 4:
          l[u].fn.call(l[u].context, e, i, s);
          break;
        default:
          if (!o) for (c = 1, o = Array(d - 1); c < d; c++) o[c - 1] = arguments[c];
          l[u].fn.apply(l[u].context, o);
      }
    }
    return !0;
  }, u.prototype.on = function (t, e, i) {
    return h(this, t, e, i, !1);
  }, u.prototype.once = function (t, e, i) {
    return h(this, t, e, i, !0);
  }, u.prototype.removeListener = function (t, e, i, s) {
    var n = r ? r + t : t;
    if (!this._events[n]) return this;
    if (!e) return o(this, n), this;
    var a = this._events[n];
    if (a.fn) a.fn !== e || s && !a.once || i && a.context !== i || o(this, n);else {
      for (var h = 0, u = [], l = a.length; h < l; h++) (a[h].fn !== e || s && !a[h].once || i && a[h].context !== i) && u.push(a[h]);
      u.length ? this._events[n] = 1 === u.length ? u[0] : u : o(this, n);
    }
    return this;
  }, u.prototype.removeAllListeners = function (t) {
    var e;
    return t ? (e = r ? r + t : t, this._events[e] && o(this, e)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
};
