// Recovered from 1pkwf9164lccl.js. Runtime module IDs: 757825.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    ReadonlyURLSearchParams: function () {
      return u.ReadonlyURLSearchParams;
    },
    RedirectType: function () {
      return d;
    },
    forbidden: function () {
      return c.forbidden;
    },
    notFound: function () {
      return a.notFound;
    },
    permanentRedirect: function () {
      return i.permanentRedirect;
    },
    redirect: function () {
      return i.redirect;
    },
    unauthorized: function () {
      return l.unauthorized;
    },
    unstable_isUnrecognizedActionError: function () {
      return f;
    },
    unstable_rethrow: function () {
      return s.unstable_rethrow;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(165441),
    i = e.r(611069),
    a = e.r(562931),
    c = e.r(968564),
    l = e.r(188191),
    s = e.r(754348);
  function f() {
    throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
      value: "E776",
      enumerable: !1,
      configurable: !0
    });
  }
  let d = {
    push: "push",
    replace: "replace"
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
