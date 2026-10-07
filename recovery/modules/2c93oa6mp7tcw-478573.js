// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 478573.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    DecodeError: function () {
      return b;
    },
    MiddlewareNotFoundError: function () {
      return v;
    },
    MissingStaticPage: function () {
      return O;
    },
    NormalizeError: function () {
      return g;
    },
    PageNotFoundError: function () {
      return m;
    },
    SP: function () {
      return y;
    },
    ST: function () {
      return h;
    },
    WEB_VITALS: function () {
      return u;
    },
    execOnce: function () {
      return i;
    },
    getDisplayName: function () {
      return d;
    },
    getLocationOrigin: function () {
      return s;
    },
    getURL: function () {
      return c;
    },
    isAbsoluteUrl: function () {
      return l;
    },
    isResSent: function () {
      return f;
    },
    loadGetInitialProps: function () {
      return _;
    },
    normalizeRepeatedSlashes: function () {
      return p;
    },
    stringifyError: function () {
      return P;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function i(e) {
    let t,
      r = !1;
    return (...n) => (r || (r = !0, t = e(...n)), t);
  }
  let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    l = e => {
      let t = e.charCodeAt(0);
      return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && a.test(e);
    };
  function s() {
    let {
      protocol: e,
      hostname: t,
      port: r
    } = window.location;
    return `${e}//${t}${r ? ":" + r : ""}`;
  }
  function c() {
    let {
        href: e
      } = window.location,
      t = s();
    return e.substring(t.length);
  }
  function d(e) {
    return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
  }
  function f(e) {
    return e.finished || e.headersSent;
  }
  function p(e) {
    let t = e.split("?");
    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
  }
  async function _(e, t) {
    let r = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) return t.ctx && t.Component ? {
      pageProps: await _(t.Component, t.ctx)
    } : {};
    let n = await e.getInitialProps(t);
    if (r && f(r)) return n;
    if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E1025",
      enumerable: !1,
      configurable: !0
    });
    return n;
  }
  let y = "u" > typeof performance,
    h = y && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
  class b extends Error {}
  class g extends Error {}
  class m extends Error {
    constructor(e) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`;
    }
  }
  class O extends Error {
    constructor(e, t) {
      super(), this.message = `Failed to load static file for page: ${e} ${t}`;
    }
  }
  class v extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
    }
  }
  function P(e) {
    return JSON.stringify({
      message: e.message,
      stack: e.stack
    });
  }
};
