// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 858722, 628978, 378517, 542043, 423523.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  for (var e, r = t.i(239150), n = 256, o = []; n--;) o[n] = (n + 256).toString(16).substring(1);
  function i() {
    var t,
      r = 0,
      i = "";
    if (!e || n + 16 > 256) {
      for (e = Array(r = 256); r--;) e[r] = 256 * Math.random() | 0;
      r = n = 0;
    }
    for (; r < 16; r++) t = e[n + r], 6 == r ? i += o[15 & t | 64] : 8 == r ? i += o[63 & t | 128] : i += o[t], 1 & r && r > 1 && r < 11 && (i += "-");
    return n++, i;
  }
  t.s(["v4", 0, i], 628978);
  var a = t.i(960635),
    s = function () {
      function t() {
        this._logs = [];
      }
      return t.prototype.log = function (t, e, r) {
        var n = new Date();
        this._logs.push({
          level: t,
          message: e,
          time: n,
          extras: r
        });
      }, Object.defineProperty(t.prototype, "logs", {
        get: function () {
          return this._logs;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.flush = function () {
        if (this.logs.length > 1) {
          var t = this._logs.reduce(function (t, e) {
            var n,
              o,
              i,
              a = (0, r.__assign)((0, r.__assign)({}, e), {
                json: JSON.stringify(e.extras, null, " "),
                extras: e.extras
              });
            delete a.time;
            var s = null != (i = null == (o = e.time) ? void 0 : o.toISOString()) ? i : "";
            return t[s] && (s = "".concat(s, "-").concat(Math.random())), (0, r.__assign)((0, r.__assign)({}, t), ((n = {})[s] = a, n));
          }, {});
          console.table ? console.table(t) : console.log(t);
        } else this.logs.forEach(function (t) {
          var e = t.level,
            r = t.message,
            n = t.extras;
          "info" === e || "debug" === e ? console.log(r, null != n ? n : "") : console[e](r, null != n ? n : "");
        });
        this._logs = [];
      }, t;
    }(),
    u = function () {
      function t() {
        this.metrics = [];
      }
      return t.prototype.increment = function (t, e, r) {
        void 0 === e && (e = 1), this.metrics.push({
          metric: t,
          value: e,
          tags: null != r ? r : [],
          type: "counter",
          timestamp: Date.now()
        });
      }, t.prototype.gauge = function (t, e, r) {
        this.metrics.push({
          metric: t,
          value: e,
          tags: null != r ? r : [],
          type: "gauge",
          timestamp: Date.now()
        });
      }, t.prototype.flush = function () {
        var t = this.metrics.map(function (t) {
          return (0, r.__assign)((0, r.__assign)({}, t), {
            tags: t.tags.join(",")
          });
        });
        console.table ? console.table(t) : console.log(t), this.metrics = [];
      }, t.prototype.serialize = function () {
        return this.metrics.map(function (t) {
          return {
            m: t.metric,
            v: t.value,
            t: t.tags,
            k: {
              gauge: "g",
              counter: "c"
            }[t.type],
            e: t.timestamp
          };
        });
      }, t;
    }(),
    p = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return (0, r.__extends)(e, t), e.prototype.gauge = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }, e.prototype.increment = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }, e.prototype.flush = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }, e.prototype.serialize = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return [];
      }, e;
    }(u);
  t.s(["CoreStats", 0, u, "NullStats", 0, p], 378517);
  var c = function (t) {
      var e, r, n;
      this.retry = null == (e = t.retry) || e, this.type = null != (r = t.type) ? r : "plugin Error", this.reason = null != (n = t.reason) ? n : "";
    },
    l = function () {
      function t(t, e, r, n) {
        void 0 === e && (e = i()), void 0 === r && (r = new p()), void 0 === n && (n = new s()), this.attempts = 0, this.event = t, this._id = e, this.logger = n, this.stats = r;
      }
      return t.system = function () {}, t.prototype.isSame = function (t) {
        return t.id === this.id;
      }, t.prototype.cancel = function (t) {
        if (t) throw t;
        throw new c({
          reason: "Context Cancel"
        });
      }, t.prototype.log = function (t, e, r) {
        this.logger.log(t, e, r);
      }, Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this._id;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.updateEvent = function (t, e) {
        var r;
        if ("integrations" === t.split(".")[0]) {
          var n = t.split(".")[1];
          if ((null == (r = this.event.integrations) ? void 0 : r[n]) === !1) return this.event;
        }
        return (0, a.dset)(this.event, t, e), this.event;
      }, t.prototype.failedDelivery = function () {
        return this._failedDelivery;
      }, t.prototype.setFailedDelivery = function (t) {
        this._failedDelivery = t;
      }, t.prototype.logs = function () {
        return this.logger.logs;
      }, t.prototype.flush = function () {
        this.logger.flush(), this.stats.flush();
      }, t.prototype.toJSON = function () {
        return {
          id: this._id,
          event: this.event,
          logs: this.logger.logs,
          metrics: this.stats.metrics
        };
      }, t;
    }();
  t.s(["ContextCancelation", 0, c, "CoreContext", 0, l], 542043);
  var f = t.i(35550);
  function d(t, e) {
    var r = new f.Facade(t, e);
    return "track" === t.type && (r = new f.Track(t, e)), "identify" === t.type && (r = new f.Identify(t, e)), "page" === t.type && (r = new f.Page(t, e)), "alias" === t.type && (r = new f.Alias(t, e)), "group" === t.type && (r = new f.Group(t, e)), "screen" === t.type && (r = new f.Screen(t, e)), Object.defineProperty(r, "obj", {
      value: t,
      writable: !0
    }), r;
  }
  t.s(["toFacade", 0, d], 423523), t.s(["applyDestinationMiddleware", 0, function (t, e, n) {
    return (0, r.__awaiter)(this, void 0, void 0, function () {
      var o, i, a, s, u;
      return (0, r.__generator)(this, function (p) {
        switch (p.label) {
          case 0:
            o = d(e, {
              clone: !0,
              traverse: !1
            }).rawEvent(), i = 0, a = n, p.label = 1;
          case 1:
            if (!(i < a.length)) return [3, 4];
            return s = a[i], [4, function (e, n) {
              return (0, r.__awaiter)(this, void 0, void 0, function () {
                var o, i, a;
                return (0, r.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return o = !1, i = null, [4, n({
                        payload: d(e, {
                          clone: !0,
                          traverse: !1
                        }),
                        integration: t,
                        next: function (t) {
                          o = !0, null === t && (i = null), t && (i = t.obj);
                        }
                      })];
                    case 1:
                      return s.sent(), o || null === i || (i.integrations = (0, r.__assign)((0, r.__assign)({}, e.integrations), ((a = {})[t] = !1, a))), [2, i];
                  }
                });
              });
            }(o, s)];
          case 2:
            if (null === (u = p.sent())) return [2, null];
            o = u, p.label = 3;
          case 3:
            return i++, [3, 1];
          case 4:
            return [2, o];
        }
      });
    });
  }, "sourceMiddlewarePlugin", 0, function (t, e) {
    function n(n) {
      return (0, r.__awaiter)(this, void 0, void 0, function () {
        var o;
        return (0, r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return o = !1, [4, t({
                payload: d(n.event, {
                  clone: !0,
                  traverse: !1
                }),
                integrations: null != e ? e : {},
                next: function (t) {
                  o = !0, t && (n.event = t.obj);
                }
              })];
            case 1:
              if (r.sent(), !o) throw new c({
                retry: !1,
                type: "middleware_cancellation",
                reason: "Middleware `next` function skipped"
              });
              return [2, n];
          }
        });
      });
    }
    return {
      name: "Source Middleware ".concat(t.name),
      type: "before",
      version: "0.1.0",
      isLoaded: function () {
        return !0;
      },
      load: function (t) {
        return Promise.resolve(t);
      },
      track: n,
      page: n,
      identify: n,
      alias: n,
      group: n
    };
  }], 858722);
};
