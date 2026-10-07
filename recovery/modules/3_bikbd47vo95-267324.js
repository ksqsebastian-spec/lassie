// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 267324, 985821, 233754, 130797, 724231, 721335.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e,
    r = t.i(239150),
    n = t.i(542043),
    i = t.i(378517),
    o = t.i(527554),
    s = function () {
      return "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : t.g;
    };
  t.s(["getGlobal", 0, s], 985821);
  var u = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = s();
    return (r && r.fetch || o.default).apply(void 0, t);
  };
  t.s(["fetch", 0, u], 233754);
  var a = "1.5.0";
  function c() {
    return "npm";
  }
  t.s(["version", 0, a], 130797), t.s(["getVersionType", 0, c], 724231);
  var l = "us-east-1.hightouch-events.com";
  t.s(["HIGHTOUCH_API_HOST", 0, l], 721335);
  var f = function (t, e, n) {
    var i = e.reduce(function (t, e) {
      var r = e.split(":"),
        n = r[0],
        i = r[1];
      return t[n] = i, t;
    }, {});
    return {
      type: "Counter",
      metric: t,
      value: 1,
      tags: (0, r.__assign)((0, r.__assign)({}, i), {
        library: "analytics.js",
        library_version: "web" === n ? "next-".concat(a) : "npm:next-".concat(a)
      })
    };
  };
  function h(t) {
    console.error("Error sending hightouch performance metrics", t);
  }
  var d = function () {
      function t(t) {
        var e,
          r,
          n,
          i,
          o = this;
        if (this.host = null != (e = null == t ? void 0 : t.host) ? e : l, this.sampleRate = null != (r = null == t ? void 0 : t.sampleRate) ? r : 1, this.flushTimer = null != (n = null == t ? void 0 : t.flushTimer) ? n : 3e4, this.maxQueueSize = null != (i = null == t ? void 0 : t.maxQueueSize) ? i : 20, this.queue = [], this.sampleRate > 0) {
          var s = !1,
            u = function () {
              s || (s = !0, o.flush().catch(h), s = !1, setTimeout(u, o.flushTimer));
            };
          u();
        }
      }
      return t.prototype.increment = function (t, e) {
        if (!(!t.includes("analytics_js.") || 0 === e.length || Math.random() > this.sampleRate) && !(this.queue.length >= this.maxQueueSize)) {
          var r = f(t, e, c());
          this.queue.push(r), t.includes("error") && this.flush().catch(h);
        }
      }, t.prototype.flush = function () {
        return (0, r.__awaiter)(this, void 0, void 0, function () {
          var t = this;
          return (0, r.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.queue.length <= 0) return [2];
                return [4, this.send().catch(function (e) {
                  h(e), t.sampleRate = 0;
                })];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }, t.prototype.send = function () {
        return (0, r.__awaiter)(this, void 0, void 0, function () {
          var t, e;
          return (0, r.__generator)(this, function (r) {
            return t = {
              series: this.queue
            }, this.queue = [], e = {
              Accept: "application/json",
              "Content-Type": "application/json"
            }, [2, u("https://".concat(this.host, "/v1/m"), {
              headers: e,
              body: JSON.stringify(t),
              method: "POST"
            })];
          });
        });
      }, t;
    }(),
    p = function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return (0, r.__extends)(n, t), n.initRemoteMetrics = function (t) {
        e = new d(t);
      }, n.prototype.increment = function (r, n, i) {
        t.prototype.increment.call(this, r, n, i), null == e || e.increment(r, null != i ? i : []);
      }, n;
    }(i.CoreStats),
    g = function (t) {
      function e(e, r) {
        return t.call(this, e, r, new p()) || this;
      }
      return (0, r.__extends)(e, t), e.system = function () {
        return new this({
          type: "track",
          event: "system"
        });
      }, e;
    }(n.CoreContext);
  t.s(["Context", 0, g], 267324);
};
