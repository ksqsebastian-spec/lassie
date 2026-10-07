// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 121044, 849424, 112104.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(239150),
    r = function () {
      function t() {
        this.callbacks = {};
      }
      return t.prototype.on = function (t, e) {
        return this.callbacks[t] ? this.callbacks[t].push(e) : this.callbacks[t] = [e], this;
      }, t.prototype.once = function (t, e) {
        var r = this,
          n = function () {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            r.off(t, n), e.apply(r, i);
          };
        return this.on(t, n), this;
      }, t.prototype.off = function (t, e) {
        var r,
          n = (null != (r = this.callbacks[t]) ? r : []).filter(function (t) {
            return t !== e;
          });
        return this.callbacks[t] = n, this;
      }, t.prototype.emit = function (t) {
        for (var e, r = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
        return (null != (e = this.callbacks[t]) ? e : []).forEach(function (t) {
          t.apply(r, n);
        }), this;
      }, t;
    }();
  t.s(["Emitter", 0, r], 849424);
  var n = "onRemoveFromFuture",
    i = function (t) {
      function r(e, r, n) {
        var i = t.call(this) || this;
        return i.future = [], i.maxAttempts = e, i.queue = r, i.seen = null != n ? n : {}, i;
      }
      return (0, e.__extends)(r, t), r.prototype.push = function () {
        for (var t = this, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var n = e.map(function (e) {
          return !(t.updateAttempts(e) > t.maxAttempts || t.includes(e)) && (t.queue.push(e), !0);
        });
        return this.queue = this.queue.sort(function (e, r) {
          return t.getAttempts(e) - t.getAttempts(r);
        }), n;
      }, r.prototype.pushWithBackoff = function (t) {
        var e,
          r,
          i,
          o,
          s,
          u = this;
        if (0 === this.getAttempts(t)) return this.push(t)[0];
        var a = this.updateAttempts(t);
        return !(a > this.maxAttempts || this.includes(t)) && (setTimeout(function () {
          u.queue.push(t), u.future = u.future.filter(function (e) {
            return e.id !== t.id;
          }), u.emit(n);
        }, (e = {
          attempt: a - 1
        }, r = Math.random() + 1, i = e.minTimeout, o = e.factor, Math.min(r * (void 0 === i ? 500 : i) * Math.pow(void 0 === o ? 2 : o, e.attempt), void 0 === (s = e.maxTimeout) ? 1 / 0 : s))), this.future.push(t), !0);
      }, r.prototype.getAttempts = function (t) {
        var e;
        return null != (e = this.seen[t.id]) ? e : 0;
      }, r.prototype.updateAttempts = function (t) {
        return this.seen[t.id] = this.getAttempts(t) + 1, this.getAttempts(t);
      }, r.prototype.includes = function (t) {
        return this.queue.includes(t) || this.future.includes(t) || !!this.queue.find(function (e) {
          return e.id === t.id;
        }) || !!this.future.find(function (e) {
          return e.id === t.id;
        });
      }, r.prototype.pop = function () {
        return this.queue.shift();
      }, Object.defineProperty(r.prototype, "length", {
        get: function () {
          return this.queue.length;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "todo", {
        get: function () {
          return this.queue.length + this.future.length;
        },
        enumerable: !1,
        configurable: !0
      }), r;
    }(r);
  t.s(["ON_REMOVE_FROM_FUTURE", 0, n, "PriorityQueue", 0, i], 112104);
  var o = t.i(267324),
    s = t.i(298352),
    u = {
      getItem: function () {},
      setItem: function () {},
      removeItem: function () {}
    };
  try {
    u = (0, s.isBrowser)() && window.localStorage ? window.localStorage : u;
  } catch (t) {
    console.warn("Unable to access localStorage", t);
  }
  function a(t) {
    var e = u.getItem(t);
    return (e ? JSON.parse(e) : []).map(function (t) {
      return new o.Context(t.event, t.id);
    });
  }
  function c(t) {
    var e = u.getItem(t);
    return e ? JSON.parse(e) : {};
  }
  function l(t) {
    u.removeItem(t);
  }
  function f(t, e, r) {
    void 0 === r && (r = 0);
    var n = "persisted-queue:v1:".concat(t, ":lock"),
      i = u.getItem(n),
      o = i ? JSON.parse(i) : null,
      s = null === o || new Date().getTime() > o;
    if (s) {
      u.setItem(n, JSON.stringify(new Date().getTime() + 50)), e(), u.removeItem(n);
      return;
    }
    !s && r < 3 ? setTimeout(function () {
      f(t, e, r + 1);
    }, 50) : console.error("Unable to retrieve lock");
  }
  var h = function (t) {
    function r(r, n) {
      var i = t.call(this, r, []) || this,
        o = "persisted-queue:v1:".concat(n, ":items"),
        s = "persisted-queue:v1:".concat(n, ":seen"),
        h = [],
        d = {};
      return f(n, function () {
        try {
          h = a(o), d = c(s), l(o), l(s), i.queue = (0, e.__spreadArray)((0, e.__spreadArray)([], h, !0), i.queue, !0), i.seen = (0, e.__assign)((0, e.__assign)({}, d), i.seen);
        } catch (t) {
          console.error(t);
        }
      }), window.addEventListener("pagehide", function () {
        if (i.todo > 0) {
          var t = (0, e.__spreadArray)((0, e.__spreadArray)([], i.queue, !0), i.future, !0);
          try {
            f(n, function () {
              var r, n, l, f;
              r = a(o), n = (0, e.__spreadArray)((0, e.__spreadArray)([], t, !0), r, !0).reduce(function (t, r) {
                var n;
                return (0, e.__assign)((0, e.__assign)({}, t), ((n = {})[r.id] = r, n));
              }, {}), u.setItem(o, JSON.stringify(Object.values(n))), l = i.seen, f = c(s), u.setItem(s, JSON.stringify((0, e.__assign)((0, e.__assign)({}, f), l)));
            });
          } catch (t) {
            console.error(t);
          }
        }
      }), i;
    }
    return (0, e.__extends)(r, t), r;
  }(i);
  t.s(["PersistedPriorityQueue", 0, h], 121044);
};
