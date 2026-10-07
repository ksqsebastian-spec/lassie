// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 990372, 795847, 77174.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(239150),
    r = t.i(542043);
  function n(t, n) {
    t.log("debug", "plugin", {
      plugin: n.name
    });
    var i = new Date().getTime(),
      o = n[t.event.type];
    return void 0 === o ? Promise.resolve(t) : function (t) {
      return (0, e.__awaiter)(this, void 0, void 0, function () {
        return (0, e.__generator)(this, function (e) {
          switch (e.label) {
            case 0:
              return e.trys.push([0, 2,, 3]), [4, t()];
            case 1:
              return [2, e.sent()];
            case 2:
              return [2, Promise.reject(e.sent())];
            case 3:
              return [2];
          }
        });
      });
    }(function () {
      return o.apply(n, [t]);
    }).then(function (t) {
      var e = new Date().getTime() - i;
      return t.stats.gauge("plugin_time", e, ["plugin:".concat(n.name)]), t;
    }).catch(function (e) {
      if (e instanceof r.ContextCancelation && "middleware_cancellation" === e.type) throw e;
      return e instanceof r.ContextCancelation ? t.log("warn", e.type, {
        plugin: n.name,
        error: e
      }) : (t.log("error", "plugin Error", {
        plugin: n.name,
        error: e
      }), t.stats.increment("plugin_error", 1, ["plugin:".concat(n.name)])), e;
    });
  }
  t.s(["attempt", 0, n, "ensure", 0, function (t, e) {
    return n(t, e).then(function (e) {
      if (e instanceof r.CoreContext) return e;
      t.log("debug", "Context canceled"), t.stats.increment("context_canceled"), t.cancel(e);
    });
  }], 990372), t.s(["mergedOptions", 0, function (t, r) {
    var n,
      i = Object.entries(null != (n = r.integrations) ? n : {}).reduce(function (t, r) {
        var n,
          i,
          o = r[0],
          s = r[1];
        return "object" == typeof s ? (0, e.__assign)((0, e.__assign)({}, t), ((n = {})[o] = s, n)) : (0, e.__assign)((0, e.__assign)({}, t), ((i = {})[o] = {}, i));
      }, {});
    return Object.entries(t.integrations).reduce(function (t, r) {
      var n,
        o = r[0],
        s = r[1];
      return (0, e.__assign)((0, e.__assign)({}, t), ((n = {})[o] = (0, e.__assign)((0, e.__assign)({}, s), i[o]), n));
    }, {});
  }], 795847), t.s(["pWhile", 0, function (t, r) {
    return (0, e.__awaiter)(void 0, void 0, void 0, function () {
      var n;
      return (0, e.__generator)(this, function (i) {
        return [2, (n = function (i) {
          return (0, e.__awaiter)(void 0, void 0, void 0, function () {
            var o;
            return (0, e.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!t(i)) return [3, 2];
                  return o = n, [4, r()];
                case 1:
                  return [2, o.apply(void 0, [e.sent()])];
                case 2:
                  return [2];
              }
            });
          });
        })(void 0)];
      });
    });
  }], 77174);
};
