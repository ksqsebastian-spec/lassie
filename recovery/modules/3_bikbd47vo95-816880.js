// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 816880.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(239150),
    r = t.i(267324),
    n = t.i(542043),
    i = t.i(858722),
    o = function () {
      function t(t, e, r) {
        this.name = t, this.version = e, this.actions = r, this.type = "destination", this.middleware = [], this.alias = this._createMethod("alias"), this.group = this._createMethod("group"), this.identify = this._createMethod("identify"), this.page = this._createMethod("page"), this.screen = this._createMethod("screen"), this.track = this._createMethod("track");
      }
      return t.prototype.isLoaded = function () {
        return !0;
      }, t.prototype.load = function () {
        return console.debug("loaded destination plugin: ".concat(this.name, " v").concat(this.version)), Promise.resolve();
      }, t.prototype.addMiddleware = function () {
        for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        (t = this.middleware).push.apply(t, e);
      }, t.prototype.transform = function (t) {
        return (0, e.__awaiter)(this, void 0, void 0, function () {
          var o;
          return (0, e.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, i.applyDestinationMiddleware)(this.name, t.event, this.middleware)];
              case 1:
                return null == (o = e.sent()) && t.cancel(new n.ContextCancelation({
                  retry: !1,
                  reason: "dropped by destination middleware"
                })), [2, new r.Context(o)];
            }
          });
        });
      }, t.prototype._createMethod = function (t) {
        var r = this;
        return function (n) {
          return (0, e.__awaiter)(r, void 0, void 0, function () {
            var r;
            return (0, e.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!this.actions[t]) return [2, n];
                  return [4, this.transform(n)];
                case 1:
                  return r = e.sent(), [4, this.actions[t](r)];
                case 2:
                  return e.sent(), [2, n];
              }
            });
          });
        };
      }, t;
    }();
  t.s(["Destination", 0, o]);
};
