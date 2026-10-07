// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 91640.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  var n = e.e && e.e.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.sendGAEvent = r.GoogleAnalytics = r.sendGTMEvent = r.GoogleTagManager = r.YouTubeEmbed = r.GoogleMapsEmbed = void 0;
  var a = e.r(680631);
  Object.defineProperty(r, "GoogleMapsEmbed", {
    enumerable: !0,
    get: function () {
      return n(a).default;
    }
  });
  var l = e.r(300173);
  Object.defineProperty(r, "YouTubeEmbed", {
    enumerable: !0,
    get: function () {
      return n(l).default;
    }
  });
  var o = e.r(322060);
  Object.defineProperty(r, "GoogleTagManager", {
    enumerable: !0,
    get: function () {
      return o.GoogleTagManager;
    }
  }), Object.defineProperty(r, "sendGTMEvent", {
    enumerable: !0,
    get: function () {
      return o.sendGTMEvent;
    }
  });
  var s = e.r(751079);
  Object.defineProperty(r, "GoogleAnalytics", {
    enumerable: !0,
    get: function () {
      return s.GoogleAnalytics;
    }
  }), Object.defineProperty(r, "sendGAEvent", {
    enumerable: !0,
    get: function () {
      return s.sendGAEvent;
    }
  });
};
