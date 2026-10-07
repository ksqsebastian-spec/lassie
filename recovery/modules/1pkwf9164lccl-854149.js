// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 854149.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  var n = e.r(513679);
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(o(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u
      },
      p: 0,
      findDOMNode: null
    },
    a = Symbol.for("react.portal"),
    c = Symbol.for("react.recoverable"),
    l = Symbol.for("react.optimistic_key"),
    s = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(e, t) {
    return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0;
  }
  r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, r.browser = function () {
    var e = Error(o(603));
    return Object.defineProperty(e, "$$typeof", {
      value: c
    }), e;
  }, r.createPortal = function (e, t) {
    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(o(299));
    return function (e, t, r) {
      var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: a,
        key: null == n ? null : n === l ? l : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }(e, t, null, r);
  }, r.flushSync = function (e) {
    var t = s.T,
      r = i.p;
    try {
      if (s.T = null, i.p = 2, e) return e();
    } finally {
      s.T = t, i.p = r, i.d.f();
    }
  }, r.preconnect = function (e, t) {
    "string" == typeof e && (t = t ? "string" == typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, i.d.C(e, t));
  }, r.prefetchDNS = function (e) {
    "string" == typeof e && i.d.D(e);
  }, r.preinit = function (e, t) {
    if ("string" == typeof e && t && "string" == typeof t.as) {
      var r = t.as,
        n = f(r, t.crossOrigin),
        o = "string" == typeof t.integrity ? t.integrity : void 0,
        u = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
      "style" === r ? i.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
        crossOrigin: n,
        integrity: o,
        fetchPriority: u
      }) : "script" === r && i.d.X(e, {
        crossOrigin: n,
        integrity: o,
        fetchPriority: u,
        nonce: "string" == typeof t.nonce ? t.nonce : void 0
      });
    }
  }, r.preinitModule = function (e, t) {
    if ("string" == typeof e) if ("object" == typeof t && null !== t) {
      if (null == t.as || "script" === t.as) {
        var r = f(t.as, t.crossOrigin);
        i.d.M(e, {
          crossOrigin: r,
          integrity: "string" == typeof t.integrity ? t.integrity : void 0,
          nonce: "string" == typeof t.nonce ? t.nonce : void 0,
          fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0
        });
      }
    } else null == t && i.d.M(e);
  }, r.preload = function (e, t) {
    if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
      var r = t.as,
        n = f(r, t.crossOrigin);
      i.d.L(e, r, {
        crossOrigin: n,
        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
        nonce: "string" == typeof t.nonce ? t.nonce : void 0,
        type: "string" == typeof t.type ? t.type : void 0,
        fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
        referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
        imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
        imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
        media: "string" == typeof t.media ? t.media : void 0
      });
    }
  }, r.preloadModule = function (e, t) {
    if ("string" == typeof e) if (t) {
      var r = f(t.as, t.crossOrigin);
      i.d.m(e, {
        as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
        crossOrigin: r,
        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
        nonce: "string" == typeof t.nonce ? t.nonce : void 0,
        fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0
      });
    } else i.d.m(e);
  }, r.requestFormReset = function (e) {
    i.d.r(e);
  }, r.unstable_batchedUpdates = function (e, t) {
    return e(t);
  }, r.useFormState = function (e, t, r) {
    return s.H.useFormState(e, t, r);
  }, r.useFormStatus = function () {
    return s.H.useHostTransitionStatus();
  }, r.version = "19.3.0-canary-cbb046ab-20260731";
};
