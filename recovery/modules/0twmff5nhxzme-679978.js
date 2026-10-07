// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 679978.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  function t(e) {
    if ("u" < typeof window || null == window.navigator) return !1;
    let t = window.navigator.userAgentData?.brands;
    return Array.isArray(t) && t.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent);
  }
  function n(e) {
    return "u" > typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
  }
  function r(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
  }
  let i = r(function () {
      return n(/^Mac/i);
    }),
    o = r(function () {
      return n(/^iPhone/i);
    }),
    s = r(function () {
      return n(/^iPad/i) || i() && navigator.maxTouchPoints > 1;
    }),
    u = r(function () {
      return o() || s();
    }),
    a = r(function () {
      return i() || u();
    }),
    l = r(function () {
      return t(/AppleWebKit/i) && !c();
    }),
    c = r(function () {
      return t(/Chrome/i);
    }),
    d = r(function () {
      return t(/Android/i);
    }),
    f = r(function () {
      return t(/Firefox/i);
    });
  e.s(["isAndroid", 0, d, "isAppleDevice", 0, a, "isChrome", 0, c, "isFirefox", 0, f, "isIOS", 0, u, "isIPad", 0, s, "isMac", 0, i, "isWebKit", 0, l]);
};
