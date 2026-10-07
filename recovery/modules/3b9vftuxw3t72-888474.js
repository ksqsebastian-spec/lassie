// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 888474.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n,
    a,
    l,
    u = {
      FetchStrategy: function () {
        return s;
      },
      NavigationResultTag: function () {
        return o;
      },
      PrefetchPriority: function () {
        return c;
      }
    };
  for (var i in u) Object.defineProperty(r, i, {
    enumerable: !0,
    get: u[i]
  });
  var o = ((n = {})[n.MPA = 0] = "MPA", n[n.Success = 1] = "Success", n[n.NoOp = 2] = "NoOp", n[n.Async = 3] = "Async", n),
    c = ((a = {})[a.Intent = 2] = "Intent", a[a.Default = 1] = "Default", a[a.Background = 0] = "Background", a),
    s = ((l = {})[l.LoadingBoundary = 0] = "LoadingBoundary", l[l.StaticShell = 1] = "StaticShell", l[l.RuntimeShell = 2] = "RuntimeShell", l[l.PPR = 3] = "PPR", l[l.PPRRuntime = 4] = "PPRRuntime", l[l.Full = 5] = "Full", l);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
