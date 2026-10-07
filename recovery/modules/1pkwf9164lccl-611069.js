// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 611069.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    getRedirectError: function () {
      return c;
    },
    getRedirectStatusCodeFromError: function () {
      return p;
    },
    getRedirectTypeFromError: function () {
      return d;
    },
    getURLFromRedirectError: function () {
      return f;
    },
    permanentRedirect: function () {
      return s;
    },
    redirect: function () {
      return l;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(539658),
    i = e.r(517460),
    a = e.r(629265);
  function c(e, t, r = u.RedirectStatusCode.TemporaryRedirect) {
    let n = Object.defineProperty(Error(i.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return n.digest = `${i.REDIRECT_ERROR_CODE};${t};${e};${r};`, n;
  }
  function l(e, t) {
    throw c(e, t ??= a.actionAsyncStorage?.getStore()?.isAction ? "push" : "replace", u.RedirectStatusCode.TemporaryRedirect);
  }
  function s(e, t = "replace") {
    throw c(e, t, u.RedirectStatusCode.PermanentRedirect);
  }
  function f(e) {
    return (0, i.isRedirectError)(e) ? e.digest.split(";").slice(2, -2).join(";") : null;
  }
  function d(e) {
    if (!(0, i.isRedirectError)(e)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: !1,
      configurable: !0
    });
    return e.digest.split(";", 2)[1];
  }
  function p(e) {
    if (!(0, i.isRedirectError)(e)) throw Object.defineProperty(Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
      value: "E260",
      enumerable: !1,
      configurable: !0
    });
    return Number(e.digest.split(";").at(-2));
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
