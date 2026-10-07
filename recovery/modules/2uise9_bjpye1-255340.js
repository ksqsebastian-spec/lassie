// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 255340.
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
  });
  var o = n(t.r(979424));
  function i(t, e) {
    return function () {
      var r = this.traits(),
        n = this.properties ? this.properties() : {};
      return o.default(r, "address." + t) || o.default(r, t) || (e ? o.default(r, "address." + e) : null) || (e ? o.default(r, e) : null) || o.default(n, "address." + t) || o.default(n, t) || (e ? o.default(n, "address." + e) : null) || (e ? o.default(n, e) : null);
    };
  }
  r.default = function (t) {
    t.zip = i("postalCode", "zip"), t.country = i("country"), t.street = i("street"), t.state = i("state"), t.city = i("city"), t.region = i("region");
  };
};
