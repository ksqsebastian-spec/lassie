// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 507263.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    beginLockedNavigation: function () {
      return p;
    },
    beginNavigationLockPrefetch: function () {
      return u;
    },
    finishNavigationLockPrefetchSpawning: function () {
      return c;
    },
    getCurrentNavigationGate: function () {
      return y;
    },
    getCurrentNavigationLock: function () {
      return h;
    },
    getPreLockFetch: function () {
      return l;
    },
    isNavigationLocked: function () {
      return d;
    },
    recordNavigationLockOwnedEntry: function () {
      return i;
    },
    resetNavigationLockToPending: function () {
      return g;
    },
    shouldRestrictNavigationToShell: function () {
      return _;
    },
    startListeningForInstantNavigationCookie: function () {
      return s;
    },
    trackNavigationLockPrefetchEntry: function () {
      return o;
    },
    updateCapturedSPAToTree: function () {
      return f;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  function l() {
    return null;
  }
  function u() {
    return null;
  }
  function i(e) {}
  function o(e, t) {}
  function c(e) {}
  function s() {}
  function f(e, t) {}
  function d() {
    return !1;
  }
  function h() {
    return null;
  }
  function p() {
    return null;
  }
  function y() {
    return null;
  }
  function g() {}
  function _(e, t) {
    return !1;
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
