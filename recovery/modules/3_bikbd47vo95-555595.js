// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 555595, 245702.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e,
    r = "htevents";
  function n() {
    return window[r];
  }
  t.s(["getGlobalAnalytics", 0, n, "setGlobalAnalytics", 0, function (t) {
    window[r] = t;
  }, "setGlobalAnalyticsKey", 0, function (t) {
    r = t;
  }], 245702);
  var i = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,
    o = function () {
      var t;
      return Array.prototype.slice.call(document.querySelectorAll("script")).forEach(function (e) {
        var r,
          n = null != (r = e.getAttribute("src")) ? r : "",
          o = i.exec(n);
        o && o[1] && (t = o[1]);
      }), t;
    },
    s = function () {
      var t;
      return null != e ? e : null == (t = n()) ? void 0 : t._cdn;
    },
    u = function () {
      var t = s();
      if (t) return t;
      var e = o();
      return e || "https://cdn.hightouch-events.com";
    };
  t.s(["getCDN", 0, u, "getNextIntegrationsURL", 0, function () {
    var t = u();
    return "".concat(t, "/next-integrations");
  }, "setGlobalCDNUrl", 0, function (t) {
    var r = n();
    r && (r._cdn = t), e = t;
  }], 555595);
};
