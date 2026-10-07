// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 499970.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t, n, r, a, i, o, l, s, u, c, d, f, p, h, m, g, y, v, b, _, S, w, E;
  var x = e.i(638522);
  let k = "10.56.0",
    P = globalThis;
  function T() {
    return R(P), P;
  }
  function R(e) {
    let t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || k, t[k] = t[k] || {};
  }
  function O(e, t, n = P) {
    let r = n.__SENTRY__ = n.__SENTRY__ || {},
      a = r[k] = r[k] || {};
    return a[e] || (a[e] = t());
  }
  let C = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    N = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    A = {};
  function I(e) {
    if (!("console" in P)) return e();
    let t = P.console,
      n = {},
      r = Object.keys(A);
    r.forEach(e => {
      let r = A[e];
      n[e] = t[e], t[e] = r;
    });
    try {
      return e();
    } finally {
      r.forEach(e => {
        t[e] = n[e];
      });
    }
  }
  function L() {
    return M().enabled;
  }
  function j(e, ...t) {
    C && L() && I(() => {
      P.console[e](`Sentry Logger [${e}]:`, ...t);
    });
  }
  function M() {
    return C ? O("loggerSettings", () => ({
      enabled: !1
    })) : {
      enabled: !1
    };
  }
  let D = function () {
      M().enabled = !0;
    },
    $ = function (...e) {
      j("log", ...e);
    },
    z = function (...e) {
      j("warn", ...e);
    },
    F = function (...e) {
      j("error", ...e);
    };
  function U(e, t, n = [t], r = "npm") {
    let a = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
    a.name || (a.name = `sentry.javascript.${t}`, a.packages = n.map(e => ({
      name: `${r}:@sentry/${e}`,
      version: k
    })), a.version = k);
  }
  let B = Object.prototype.toString;
  function H(e) {
    switch (B.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return !0;
      default:
        return Z(e, Error);
    }
  }
  function W(e, t) {
    return B.call(e) === `[object ${t}]`;
  }
  function q(e) {
    return W(e, "ErrorEvent");
  }
  function V(e) {
    return W(e, "DOMError");
  }
  function X(e) {
    return W(e, "String");
  }
  function Q(e) {
    return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
  }
  function G(e) {
    return null === e || Q(e) || "object" != typeof e && "function" != typeof e;
  }
  function Y(e) {
    return W(e, "Object");
  }
  function K(e) {
    return "u" > typeof Event && Z(e, Event);
  }
  function J(e) {
    return !!(e?.then && "function" == typeof e.then);
  }
  function Z(e, t) {
    try {
      return e instanceof t;
    } catch {
      return !1;
    }
  }
  function ee(e) {
    return "u" > typeof Request && Z(e, Request);
  }
  function et(e, t, n) {
    if (!(t in e)) return;
    let r = e[t];
    if ("function" != typeof r) return;
    let a = n(r);
    "function" == typeof a && er(a, r);
    try {
      e[t] = a;
    } catch {
      C && $(`Failed to replace method "${t}" in object`, e);
    }
  }
  function en(e, t, n) {
    try {
      Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        configurable: !0
      });
    } catch {
      C && $(`Failed to add non-enumerable property "${String(t)}" to object`, e);
    }
  }
  function er(e, t) {
    try {
      let n = t.prototype || {};
      e.prototype = t.prototype = n, en(e, "__sentry_original__", t);
    } catch {}
  }
  function ea(e) {
    return e.__sentry_original__;
  }
  function ei(e) {
    if (H(e)) return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...eo(e)
    };
    if (K(e)) {
      let {
        type: t,
        target: n,
        currentTarget: r,
        detail: a
      } = e;
      return {
        type: t,
        target: n,
        currentTarget: r,
        ...(a ? {
          detail: a
        } : {}),
        ...eo(e)
      };
    }
    return e;
  }
  function eo(e) {
    return "object" == typeof e && null !== e ? Object.fromEntries(Object.entries(e)) : {};
  }
  function el(e) {
    if (void 0 !== t) return t ? t(e) : e();
    let n = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    return n in P && "function" == typeof P[n] ? (t = P[n])(e) : (t = null, e());
  }
  function es() {
    return el(() => Math.random());
  }
  function eu() {
    return el(() => Date.now());
  }
  let ec = Symbol.for("sentry.skipNormalization"),
    ed = Symbol.for("sentry.overrideNormalizationDepth"),
    ef = /\(error: (.*)\)/,
    ep = /captureMessage|captureException/;
  function eh(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
    return (e, n = 0, r = 0) => {
      let a = [],
        i = e.split("\n");
      for (let e = n; e < i.length; e++) {
        let n = i[e];
        n.length > 1024 && (n = n.slice(0, 1024));
        let o = ef.test(n) ? n.replace(ef, "$1") : n;
        if (!o.includes("Error: ")) {
          for (let e of t) {
            let t = e(o);
            if (t) {
              a.push(t);
              break;
            }
          }
          if (a.length >= 50 + r) break;
        }
      }
      var o = a.slice(r);
      if (!o.length) return [];
      let l = Array.from(o);
      return /sentryWrapped/.test(em(l).function || "") && l.pop(), l.reverse(), ep.test(em(l).function || "") && (l.pop(), ep.test(em(l).function || "") && l.pop()), l.slice(0, 50).map(e => ({
        ...e,
        filename: e.filename || em(l).filename,
        function: e.function || "?"
      }));
    };
  }
  function em(e) {
    return e[e.length - 1] || {};
  }
  let eg = "<anonymous>";
  function ey(e) {
    try {
      if (!e || "function" != typeof e) return eg;
      return e.name || eg;
    } catch {
      return eg;
    }
  }
  function ev(e) {
    let t = e.exception;
    if (t) {
      let e = [];
      try {
        return t.values.forEach(t => {
          t.stacktrace.frames && e.push(...t.stacktrace.frames);
        }), e;
      } catch {}
    }
  }
  function eb(e, t = 100, n = 1 / 0) {
    try {
      return function e(t, n, r = 1 / 0, a = 1 / 0, i = function () {
        let e = new WeakSet();
        return [function (t) {
          return !!e.has(t) || (e.add(t), !1);
        }, function (t) {
          e.delete(t);
        }];
      }()) {
        let o,
          [l, s] = i;
        if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
        let u = e_(t, n);
        if (!u.startsWith("[object ")) return u;
        if (n[ec]) return n;
        let c = (o = n[ed], "number" == typeof o ? o : void 0),
          d = void 0 !== c ? c : r;
        if (0 === d) return u.replace("object ", "");
        if (l(n)) return "[Circular ~]";
        if (n && "function" == typeof n.toJSON) try {
          let t = n.toJSON();
          return e("", t, d - 1, a, i);
        } catch {}
        let f = Array.isArray(n) ? [] : {},
          p = 0,
          h = ei(n);
        for (let t in h) {
          if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
          if (p >= a) {
            f[t] = "[MaxProperties ~]";
            break;
          }
          let n = h[t];
          f[t] = e(t, n, d - 1, a, i), p++;
        }
        return s(n), f;
      }("", e, t, n);
    } catch (e) {
      return {
        ERROR: `**non-serializable** (${e})`
      };
    }
  }
  function e_(t, r) {
    try {
      var a;
      let t;
      if (n) {
        let e = n(r);
        if (e) return e;
      }
      if (r === e.g) return "[Global]";
      if ("number" == typeof r && !Number.isFinite(r)) return `[${r}]`;
      if ("function" == typeof r) return `[Function: ${ey(r)}]`;
      if ("symbol" == typeof r) return `[${String(r)}]`;
      if ("bigint" == typeof r) return `[BigInt: ${String(r)}]`;
      let i = (a = r, t = Object.getPrototypeOf(a), t?.constructor ? t.constructor.name : "null prototype");
      return `[object ${i}]`;
    } catch (e) {
      return `**non-serializable** (${e})`;
    }
  }
  function eS(e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
  }
  function ew(e, t) {
    if (!Array.isArray(e)) return "";
    let n = [];
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      G(r) ? n.push(String(r)) : r instanceof Error ? n.push(r.message ? `${r.name}: ${r.message}` : r.name) : n.push(e_(void 0, r));
    }
    return n.join(t);
  }
  function eE(e, t, n = !1) {
    return !!X(e) && (W(t, "RegExp") ? t.test(e) : X(t) ? n ? e === t : e.includes(t) : "function" == typeof t && t(e));
  }
  function ex(e, t = [], n = !1) {
    for (let r of t) if (eE(e, r, n)) return !0;
    return !1;
  }
  function ek(e = P.crypto || P.msCrypto) {
    try {
      if (e?.randomUUID) return el(() => e.randomUUID()).replace(/-/g, "");
    } catch {}
    return r || (r = "10000000100040008000100000000000"), r.replace(/[018]/g, e => (e ^ (15 & 16 * es()) >> e / 4).toString(16));
  }
  function eP(e) {
    return e.exception?.values?.[0];
  }
  function eT(e) {
    let {
      message: t,
      event_id: n
    } = e;
    if (t) return t;
    let r = eP(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
  }
  function eR(e, t, n) {
    let r = e.exception = e.exception || {},
      a = r.values = r.values || [],
      i = a[0] = a[0] || {};
    i.value || (i.value = t || ""), i.type || (i.type = n || "Error");
  }
  function eO(e, t) {
    let n = eP(e);
    if (!n) return;
    let r = n.mechanism;
    if (n.mechanism = {
      type: "generic",
      handled: !0,
      ...r,
      ...t
    }, t && "data" in t) {
      let e = {
        ...r?.data,
        ...t.data
      };
      n.mechanism.data = e;
    }
  }
  function eC(e) {
    if (function (e) {
      try {
        return e.__sentry_captured__;
      } catch {}
    }(e)) return !0;
    try {
      en(e, "__sentry_captured__", !0);
    } catch {}
    return !1;
  }
  function eN() {
    return eu() / 1e3;
  }
  function eA() {
    return (a ?? (a = function () {
      let {
        performance: e
      } = P;
      if (!e?.now || !e.timeOrigin) return eN;
      let t = e.timeOrigin;
      return () => (t + el(() => e.now())) / 1e3;
    }()))();
  }
  let eI = null;
  function eL() {
    return null === eI && (eI = function () {
      let {
        performance: e
      } = P;
      if (!e?.now) return;
      let t = el(() => e.now()),
        n = eu(),
        r = e.timeOrigin;
      if ("number" == typeof r && 3e5 > Math.abs(r + t - n)) return r;
      let a = e.timing?.navigationStart;
      return "number" == typeof a && 3e5 > Math.abs(a + t - n) ? a : n - t;
    }()), eI;
  }
  function ej(e, t = {}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || eA(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : ek()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;else if ("number" == typeof t.duration) e.duration = t.duration;else {
      let t = e.timestamp - e.started;
      e.duration = t >= 0 ? t : 0;
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status);
  }
  function eM(e, t, n = 2) {
    if (!t || "object" != typeof t || n <= 0) return t;
    if (e && 0 === Object.keys(t).length) return e;
    let r = {
      ...e
    };
    for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = eM(r[e], t[e], n - 1));
    return r;
  }
  function eD() {
    return ek().substring(16);
  }
  function e$(e) {
    try {
      let t = P.WeakRef;
      if ("function" == typeof t) return new t(e);
    } catch {}
    return e;
  }
  function ez(e) {
    if (e) {
      if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
        return e.deref();
      } catch {
        return;
      }
      return e;
    }
  }
  let eF = "_sentrySpan";
  function eU(e, t) {
    t ? en(e, eF, e$(t)) : delete e[eF];
  }
  class eB {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
        traceId: ek(),
        sampleRand: es()
      };
    }
    clone() {
      let e = new eB();
      return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
        ...this._tags
      }, e._attributes = {
        ...this._attributes
      }, e._extra = {
        ...this._extra
      }, e._contexts = {
        ...this._contexts
      }, this._contexts.flags && (e._contexts.flags = {
        values: [...this._contexts.flags.values]
      }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata
      }, e._propagationContext = {
        ...this._propagationContext
      }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, eU(e, ez(this[eF])), e;
    }
    setClient(e) {
      this._client = e;
    }
    setLastEventId(e) {
      this._lastEventId = e;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return this._user = e || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0
      }, this._session && ej(this._session, {
        user: e
      }), this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    setConversationId(e) {
      return this._conversationId = e || void 0, this._notifyScopeListeners(), this;
    }
    setTags(e) {
      return this._tags = {
        ...this._tags,
        ...e
      }, this._notifyScopeListeners(), this;
    }
    setTag(e, t) {
      return this.setTags({
        [e]: t
      });
    }
    setAttributes(e) {
      return this._attributes = {
        ...this._attributes,
        ...e
      }, this._notifyScopeListeners(), this;
    }
    setAttribute(e, t) {
      return this.setAttributes({
        [e]: t
      });
    }
    removeAttribute(e) {
      return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this;
    }
    setExtras(e) {
      return this._extra = {
        ...this._extra,
        ...e
      }, this._notifyScopeListeners(), this;
    }
    setExtra(e, t) {
      return this._extra = {
        ...this._extra,
        [e]: t
      }, this._notifyScopeListeners(), this;
    }
    setFingerprint(e) {
      return this._fingerprint = e, this._notifyScopeListeners(), this;
    }
    setLevel(e) {
      return this._level = e, this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
      return this._transactionName = e, this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
      return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
    }
    setSession(e) {
      return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      let t = "function" == typeof e ? e(this) : e,
        {
          tags: n,
          attributes: r,
          extra: a,
          user: i,
          contexts: o,
          level: l,
          fingerprint: s = [],
          propagationContext: u,
          conversationId: c
        } = (t instanceof eB ? t.getScopeData() : Y(t) ? e : void 0) || {};
      return this._tags = {
        ...this._tags,
        ...n
      }, this._attributes = {
        ...this._attributes,
        ...r
      }, this._extra = {
        ...this._extra,
        ...a
      }, this._contexts = {
        ...this._contexts,
        ...o
      }, i && Object.keys(i).length && (this._user = i), l && (this._level = l), s.length && (this._fingerprint = s), u && (this._propagationContext = u), c && (this._conversationId = c), this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, eU(this, void 0), this._attachments = [], this.setPropagationContext({
        traceId: ek(),
        sampleRand: es()
      }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(e, t) {
      let n = "number" == typeof t ? t : 100;
      if (n <= 0) return this;
      let r = {
        timestamp: eN(),
        ...e,
        message: e.message ? eS(e.message, 2048) : e.message
      };
      return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
      return this._attachments.push(e), this;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        attributes: this._attributes,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: ez(this[eF]),
        conversationId: this._conversationId
      };
    }
    setSDKProcessingMetadata(e) {
      return this._sdkProcessingMetadata = eM(this._sdkProcessingMetadata, e, 2), this;
    }
    setPropagationContext(e) {
      return this._propagationContext = e, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t?.event_id || ek();
      if (!this._client) return C && z("No client configured on scope - will not capture exception!"), n;
      let r = Error("Sentry syntheticException");
      return this._client.captureException(e, {
        originalException: e,
        syntheticException: r,
        ...t,
        event_id: n
      }, this), n;
    }
    captureMessage(e, t, n) {
      let r = n?.event_id || ek();
      if (!this._client) return C && z("No client configured on scope - will not capture message!"), r;
      let a = n?.syntheticException ?? Error(e);
      return this._client.captureMessage(e, t, {
        originalException: e,
        syntheticException: a,
        ...n,
        event_id: r
      }, this), r;
    }
    captureEvent(e, t) {
      let n = e.event_id || t?.event_id || ek();
      return this._client ? this._client.captureEvent(e, {
        ...t,
        event_id: n
      }, this) : C && z("No client configured on scope - will not capture event!"), n;
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
        e(this);
      }), this._notifyingListeners = !1);
    }
  }
  let eH = e => e instanceof Promise && !e[eW],
    eW = Symbol("chained PromiseLike");
  class eq {
    constructor(e, t) {
      let n, r;
      n = e || new eB(), r = t || new eB(), this._stack = [{
        scope: n
      }], this._isolationScope = r;
    }
    withScope(e) {
      let t,
        n = this._pushScope();
      try {
        t = e(n);
      } catch (e) {
        throw this._popScope(), e;
      }
      if (J(t)) {
        var r, a, i;
        let e;
        return r = t, a = () => this._popScope(), i = () => this._popScope(), eH(e = r.then(e => (a(), e), e => {
          throw i(), e;
        })) && eH(r) ? e : ((e, t) => {
          if (!t) return e;
          let n = !1;
          for (let r in e) {
            if (r in t) continue;
            n = !0;
            let a = e[r];
            "function" == typeof a ? Object.defineProperty(t, r, {
              value: (...t) => a.apply(e, t),
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[r] = a;
          }
          return n && Object.assign(t, {
            [eW]: !0
          }), t;
        })(r, e);
      }
      return this._popScope(), t;
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      let e = this.getScope().clone();
      return this._stack.push({
        client: this.getClient(),
        scope: e
      }), e;
    }
    _popScope() {
      return !(this._stack.length <= 1) && !!this._stack.pop();
    }
  }
  function eV() {
    let e = R(T());
    return e.stack = e.stack || new eq(O("defaultCurrentScope", () => new eB()), O("defaultIsolationScope", () => new eB()));
  }
  function eX(e) {
    return eV().withScope(e);
  }
  function eQ(e, t) {
    let n = eV();
    return n.withScope(() => (n.getStackTop().scope = e, t(e)));
  }
  function eG(e) {
    return eV().withScope(() => e(eV().getIsolationScope()));
  }
  function eY(e) {
    let t = R(e);
    return t.acs ? t.acs : {
      withIsolationScope: eG,
      withScope: eX,
      withSetScope: eQ,
      withSetIsolationScope: (e, t) => eG(t),
      getCurrentScope: () => eV().getScope(),
      getIsolationScope: () => eV().getIsolationScope()
    };
  }
  function eK() {
    return eY(T()).getCurrentScope();
  }
  function eJ() {
    return eY(T()).getIsolationScope();
  }
  function eZ() {
    return O("globalScope", () => new eB());
  }
  function e0(...e) {
    let t = eY(T());
    if (2 === e.length) {
      let [n, r] = e;
      return n ? t.withSetScope(n, r) : t.withScope(r);
    }
    return t.withScope(e[0]);
  }
  function e1() {
    return eK().getClient();
  }
  let e2 = "sentry.source",
    e3 = "sentry.sample_rate",
    e4 = "sentry.previous_trace_sample_rate",
    e5 = "sentry.op",
    e8 = "sentry.origin",
    e6 = "sentry.idle_span_finish_reason",
    e9 = "sentry.measurement_unit",
    e7 = "sentry.measurement_value",
    te = "sentry.custom_span_name",
    tt = "sentry.profile_id",
    tn = "sentry.exclusive_time",
    tr = "sentry-";
  function ta(e) {
    let t = ti(e);
    if (!t) return;
    let n = Object.entries(t).reduce((e, [t, n]) => (t.startsWith(tr) && (e[t.slice(tr.length)] = n), e), {});
    return Object.keys(n).length > 0 ? n : void 0;
  }
  function ti(e) {
    if (e && (X(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(to(t)).forEach(([t, n]) => {
      e[t] = n;
    }), e), {}) : to(e);
  }
  function to(e) {
    return e.split(",").map(e => {
      let t = e.indexOf("=");
      return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(e => {
        try {
          return decodeURIComponent(e.trim());
        } catch {
          return;
        }
      });
    }).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
  }
  function tl(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = e || e1()?.getOptions();
    return !!t && (null != t.tracesSampleRate || !!t.tracesSampler);
  }
  function ts(e) {
    $(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
  }
  function tu(e, t) {
    if (!t?.length) return !1;
    for (let r of t) {
      var n;
      if ("string" == typeof (n = r) || n instanceof RegExp) {
        if (e.description && eE(e.description, r)) return C && ts(e), !0;
        continue;
      }
      let t = !!r.attributes && Object.keys(r.attributes).length > 0;
      if (!r.name && !r.op && !t) continue;
      let a = !r.name || e.description && eE(e.description, r.name),
        i = !r.op || e.op && eE(e.op, r.op),
        o = !r.attributes || Object.entries(r.attributes).every(([t, n]) => function (e, t) {
          return "string" == typeof e && ("string" == typeof t || t instanceof RegExp) ? eE(e, t) : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e === t;
        }(e.attributes?.[t], n));
      if (a && i && o) return C && ts(e), !0;
    }
    return !1;
  }
  function tc(e) {
    return "stream" === e.getOptions().traceLifecycle;
  }
  function td(e) {
    if ("boolean" == typeof e) return Number(e);
    let t = "string" == typeof e ? parseFloat(e) : e;
    if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t;
  }
  function tf(e, t = !1) {
    let n = {};
    for (let [r, a] of Object.entries(e ?? {})) {
      let e = function (e, t) {
        let {
            value: n,
            unit: r
          } = "object" == typeof e && null != e && !Array.isArray(e) && Object.keys(e).includes("value") ? e : {
            value: e,
            unit: void 0
          },
          a = function (e) {
            if (Array.isArray(e)) return {
              value: e,
              type: "array"
            };
            let t = "string" == typeof e ? "string" : "boolean" == typeof e ? "boolean" : "number" != typeof e || Number.isNaN(e) ? null : Number.isInteger(e) ? "integer" : "double";
            if (t) return {
              value: e,
              type: t
            };
          }(n),
          i = r && "string" == typeof r ? {
            unit: r
          } : {};
        if (a) return {
          ...a,
          ...i
        };
        if (!t || "skip-undefined" === t && void 0 === n) return;
        let o = "";
        try {
          o = JSON.stringify(n) ?? "";
        } catch {}
        return {
          value: o,
          type: "string",
          ...i
        };
      }(a, t);
      e && (n[r] = e);
    }
    return n;
  }
  function tp(e, t) {
    e.setAttribute("http.response.status_code", t);
    let n = function (e) {
      if (e < 400 && e >= 100) return {
        code: 1
      };
      if (e >= 400 && e < 500) switch (e) {
        case 401:
          return {
            code: 2,
            message: "unauthenticated"
          };
        case 403:
          return {
            code: 2,
            message: "permission_denied"
          };
        case 404:
          return {
            code: 2,
            message: "not_found"
          };
        case 409:
          return {
            code: 2,
            message: "already_exists"
          };
        case 413:
          return {
            code: 2,
            message: "failed_precondition"
          };
        case 429:
          return {
            code: 2,
            message: "resource_exhausted"
          };
        case 499:
          return {
            code: 2,
            message: "cancelled"
          };
        default:
          return {
            code: 2,
            message: "invalid_argument"
          };
      }
      if (e >= 500 && e < 600) switch (e) {
        case 501:
          return {
            code: 2,
            message: "unimplemented"
          };
        case 503:
          return {
            code: 2,
            message: "unavailable"
          };
        case 504:
          return {
            code: 2,
            message: "deadline_exceeded"
          };
      }
      return {
        code: 2,
        message: "internal_error"
      };
    }(t);
    "unknown_error" !== n.message && e.setStatus(n);
  }
  let th = "_sentryScope",
    tm = "_sentryIsolationScope";
  function tg(e) {
    return {
      scope: e[th],
      isolationScope: ez(e[tm])
    };
  }
  let ty = /^o(\d+)\./,
    tv = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
  function tb(e, t = !1) {
    let {
      host: n,
      path: r,
      pass: a,
      port: i,
      projectId: o,
      protocol: l,
      publicKey: s
    } = e;
    return `${l}://${s}${t && a ? `:${a}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${o}`;
  }
  function t_(e) {
    let t = tv.exec(e);
    if (!t) return void I(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    let [n, r, a = "", i = "", o = "", l = ""] = t.slice(1),
      s = "",
      u = l,
      c = u.split("/");
    if (c.length > 1 && (s = c.slice(0, -1).join("/"), u = c.pop()), u) {
      let e = u.match(/^\d+/);
      e && (u = e[0]);
    }
    return tS({
      host: i,
      pass: a,
      path: s,
      projectId: u,
      port: o,
      protocol: n,
      publicKey: r
    });
  }
  function tS(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || "",
      pass: e.pass || "",
      host: e.host,
      port: e.port || "",
      path: e.path || "",
      projectId: e.projectId
    };
  }
  let tw = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function tE(e = ek(), t = eD(), n) {
    let r = "";
    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
  }
  function tx(e = ek(), t = eD(), n) {
    return `00-${e}-${t}-${n ? "01" : "00"}`;
  }
  let tk = !1;
  function tP(e) {
    return e && e.length > 0 ? e.map(({
      context: {
        spanId: e,
        traceId: t,
        traceFlags: n,
        ...r
      },
      attributes: a
    }) => ({
      span_id: e,
      trace_id: t,
      sampled: 1 === n,
      attributes: a,
      ...r
    })) : void 0;
  }
  function tT(e) {
    return e?.length ? e.map(({
      context: {
        spanId: e,
        traceId: t,
        traceFlags: n
      },
      attributes: r
    }) => ({
      span_id: e,
      trace_id: t,
      sampled: 1 === n,
      attributes: r
    })) : void 0;
  }
  function tR(e) {
    return "number" == typeof e ? tO(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? tO(e.getTime()) : eA();
  }
  function tO(e) {
    return e > 0x2540be3ff ? e / 1e3 : e;
  }
  function tC(e) {
    if (tL(e)) return e.getSpanJSON();
    let {
      spanId: t,
      traceId: n
    } = e.spanContext();
    if (tI(e)) {
      let {
        attributes: r,
        startTime: a,
        name: i,
        endTime: o,
        status: l,
        links: s
      } = e;
      return {
        span_id: t,
        trace_id: n,
        data: r,
        description: i,
        parent_span_id: tA(e),
        start_timestamp: tR(a),
        timestamp: tR(o) || void 0,
        status: tM(l),
        op: r[e5],
        origin: r[e8],
        links: tP(s)
      };
    }
    return {
      span_id: t,
      trace_id: n,
      start_timestamp: 0,
      data: {}
    };
  }
  function tN(e) {
    if (tL(e)) return e.getStreamedSpanJSON();
    let {
      spanId: t,
      traceId: n
    } = e.spanContext();
    if (tI(e)) {
      let {
        attributes: r,
        startTime: a,
        name: i,
        endTime: o,
        status: l,
        links: s
      } = e;
      return {
        name: i,
        span_id: t,
        trace_id: n,
        parent_span_id: tA(e),
        start_timestamp: tR(a),
        end_timestamp: tR(o),
        is_segment: e === tH(e),
        status: tD(l),
        attributes: r,
        links: tT(s)
      };
    }
    return {
      span_id: t,
      trace_id: n,
      start_timestamp: 0,
      name: "",
      end_timestamp: 0,
      status: "ok",
      is_segment: e === tH(e)
    };
  }
  function tA(e) {
    return "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext?.spanId : void 0;
  }
  function tI(e) {
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
  }
  function tL(e) {
    return "function" == typeof e.getSpanJSON;
  }
  function tj(e) {
    let {
      traceFlags: t
    } = e.spanContext();
    return 1 === t;
  }
  function tM(e) {
    if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "internal_error";
  }
  function tD(e) {
    return e && 1 !== e.code && 0 !== e.code && "cancelled" !== e.message ? "error" : "ok";
  }
  let t$ = "_sentryChildSpans",
    tz = "_sentryRootSpan";
  function tF(e, t) {
    let n = e[tz] || e;
    en(t, tz, n), e[t$] ? e[t$].add(t) : en(e, t$, new Set([t]));
  }
  function tU(e) {
    let t = new Set();
    return !function e(n) {
      if (!t.has(n) && tj(n)) for (let r of (t.add(n), n[t$] ? Array.from(n[t$]) : [])) e(r);
    }(e), Array.from(t);
  }
  let tB = tH;
  function tH(e) {
    return e[tz] || e;
  }
  function tW() {
    let e = eY(T());
    return e.getActiveSpan ? e.getActiveSpan() : ez(eK()[eF]);
  }
  function tq() {
    tk || (I(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    }), tk = !0);
  }
  let tV = "production",
    tX = "_frozenDsc";
  function tQ(e, t) {
    let n = t.getOptions(),
      {
        publicKey: r
      } = t.getDsn() || {},
      a = {
        environment: n.environment || tV,
        release: n.release,
        public_key: r,
        trace_id: e,
        org_id: function (e) {
          let t,
            n = e.getOptions(),
            {
              host: r
            } = e.getDsn() || {};
          if (n.orgId) t = String(n.orgId);else {
            let e;
            r && (e = r.match(ty), t = e?.[1]);
          }
          return t;
        }(t)
      };
    return t.emit("createDsc", a), a;
  }
  function tG(e, t) {
    let n = t.getPropagationContext();
    return n.dsc || tQ(n.traceId, e);
  }
  function tY(e) {
    let t = e1();
    if (!t) return {};
    let n = tB(e),
      r = tC(n),
      a = r.data,
      i = n.spanContext().traceState,
      o = i?.get("sentry.sample_rate") ?? a[e3] ?? a[e4];
    function l(e) {
      return ("number" == typeof o || "string" == typeof o) && (e.sample_rate = `${o}`), e;
    }
    let s = n[tX];
    if (s) return l(s);
    let u = i?.get("sentry.dsc"),
      c = u && ta(u);
    if (c) return l(c);
    let d = tQ(e.spanContext().traceId, t),
      f = a[e2] ?? a["sentry.span.source"],
      p = r.description;
    return "url" !== f && p && (d.transaction = p), tl() && (d.sampled = String(tj(n)), d.sample_rand = i?.get("sentry.sample_rand") ?? tg(n).scope?.getPropagationContext().sampleRand.toString()), l(d), t.emit("createDsc", d, n), d;
  }
  class tK {
    constructor(e = {}) {
      this._traceId = e.traceId || ek(), this._spanId = e.spanId || eD(), this.dropReason = e.dropReason;
    }
    spanContext() {
      return {
        spanId: this._spanId,
        traceId: this._traceId,
        traceFlags: 0
      };
    }
    end(e) {}
    setAttribute(e, t) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    isRecording() {
      return !1;
    }
    addEvent(e, t, n) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    recordException(e, t) {}
  }
  function tJ(e) {
    return !!e && "function" == typeof e && "_streamed" in e && !!e._streamed;
  }
  function tZ(e, t = []) {
    return [e, t];
  }
  function t0(e, t) {
    let [n, r] = e;
    return [n, [...r, t]];
  }
  function t1(e, t) {
    for (let n of e[1]) {
      let e = n[0].type;
      if (t(n, e)) return !0;
    }
    return !1;
  }
  function t2(e) {
    let t = R(P);
    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
  }
  let t3 = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric"
  };
  function t4(e) {
    return e in t3 ? t3[e] : e;
  }
  function t5(e) {
    if (!e?.sdk) return;
    let {
      name: t,
      version: n
    } = e.sdk;
    return {
      name: t,
      version: n
    };
  }
  function t8(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return e.forEach(e => {
      let n = e.attributes || {},
        r = n[e9],
        a = n[e7];
      "string" == typeof r && "number" == typeof a && (t[e.name] = {
        value: a,
        unit: r
      });
    }), t;
  }
  class t6 {
    constructor(e = {}) {
      this._traceId = e.traceId || ek(), this._spanId = e.spanId || eD(), this._startTime = e.startTimestamp || eA(), this._links = e.links, this._attributes = {}, this.setAttributes({
        [e8]: "manual",
        [e5]: e.op,
        ...e.attributes
      }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded();
    }
    addLink(e) {
      return this._links ? this._links.push(e) : this._links = [e], this;
    }
    addLinks(e) {
      return this._links ? this._links.push(...e) : this._links = e, this;
    }
    recordException(e, t) {}
    spanContext() {
      let {
        _spanId: e,
        _traceId: t,
        _sampled: n
      } = this;
      return {
        spanId: e,
        traceId: t,
        traceFlags: +!!n
      };
    }
    setAttribute(e, t) {
      return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, this;
    }
    setAttributes(e) {
      return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
      this._startTime = tR(e);
    }
    setStatus(e) {
      return this._status = e, this;
    }
    updateName(e) {
      return this._name = e, this.setAttribute(e2, "custom"), this;
    }
    end(e) {
      this._endTime || (this._endTime = tR(e), function (e) {
        if (!C) return;
        let {
            description: t = "< unknown name >",
            op: n = "< unknown op >"
          } = tC(e),
          {
            spanId: r
          } = e.spanContext(),
          a = tB(e) === e;
        $(`[Tracing] Finishing "${n}" ${a ? "root " : ""}span "${t}" with ID ${r}`);
      }(this), this._onSpanEnded());
    }
    getSpanJSON() {
      return {
        data: this._attributes,
        description: this._name,
        op: this._attributes[e5],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: tM(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[e8],
        profile_id: this._attributes[tt],
        exclusive_time: this._attributes[tn],
        measurements: t8(this._events),
        is_segment: this._isStandaloneSpan && tB(this) === this || void 0,
        segment_id: this._isStandaloneSpan ? tB(this).spanContext().spanId : void 0,
        links: tP(this._links)
      };
    }
    getStreamedSpanJSON() {
      return {
        name: this._name ?? "",
        span_id: this._spanId,
        trace_id: this._traceId,
        parent_span_id: this._parentSpanId,
        start_timestamp: this._startTime,
        end_timestamp: this._endTime ?? this._startTime,
        is_segment: this._isStandaloneSpan || this === tB(this),
        status: tD(this._status),
        attributes: this._attributes,
        links: tT(this._links)
      };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
      C && $("[Tracing] Adding an event to span:", e);
      let r = t9(t) ? t : n || eA(),
        a = t9(t) ? {} : t || {},
        i = {
          name: e,
          time: tR(r),
          attributes: a
        };
      return this._events.push(i), this;
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let e = e1();
      if (e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this)), !(this._isStandaloneSpan || this === tB(this))) return;
      if (this._isStandaloneSpan) return void (this._sampled ? function (e) {
        let t = e1();
        if (!t) return;
        let n = e[1];
        n && 0 !== n.length ? t.sendEnvelope(e) : t.recordDroppedEvent("before_send", "span");
      }(function (e, t) {
        let n = tY(e[0]),
          r = t?.getDsn(),
          a = t?.getOptions().tunnel,
          i = {
            sent_at: new Date().toISOString(),
            ...(!!n.trace_id && !!n.public_key && {
              trace: n
            }),
            ...(!!a && r && {
              dsn: tb(r)
            })
          },
          {
            beforeSendSpan: o,
            ignoreSpans: l
          } = t?.getOptions() || {},
          s = l?.length ? e.filter(e => {
            let t = tC(e);
            return !tu({
              description: t.description,
              op: t.op,
              attributes: t.data
            }, l);
          }) : e,
          u = e.length - s.length;
        u && t?.recordDroppedEvent("before_send", "span", u);
        let c = o ? e => {
            let t = tC(e),
              n = tJ(o) ? t : o(t);
            return n || (tq(), t);
          } : tC,
          d = [];
        for (let e of s) {
          let t = c(e);
          t && d.push([{
            type: "span"
          }, t]);
        }
        return tZ(i, d);
      }([this], e)) : (C && $("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
      if (e && tc(e)) return void e.emit("afterSegmentSpanEnd", this);
      let t = this._convertSpanToTransaction();
      t && (tg(this).scope || eK()).captureEvent(t);
    }
    _convertSpanToTransaction() {
      if (!t7(tC(this))) return;
      this._name || (C && z("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
      let {
          scope: e,
          isolationScope: t
        } = tg(this),
        n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (!0 !== this._sampled) return;
      let r = tU(this).filter(e => {
          var t;
          return e !== this && !((t = e) instanceof t6 && t.isStandaloneSpan());
        }).map(e => tC(e)).filter(t7),
        a = this._attributes[e2];
      delete this._attributes[te];
      let i = !1;
      r.forEach(e => {
        delete e.data[te], e.op?.startsWith("gen_ai.") && (i = !0);
      });
      let o = {
          contexts: {
            trace: function (e) {
              let {
                  spanId: t,
                  traceId: n
                } = e.spanContext(),
                {
                  data: r,
                  op: a,
                  parent_span_id: i,
                  status: o,
                  origin: l,
                  links: s
                } = tC(e);
              return {
                parent_span_id: i,
                span_id: t,
                trace_id: n,
                data: r,
                op: a,
                status: o,
                origin: l,
                links: s
              };
            }(this)
          },
          spans: r.length > 1e3 ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : r,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: "transaction",
          sdkProcessingMetadata: {
            capturedSpanScope: e,
            capturedSpanIsolationScope: t,
            dynamicSamplingContext: tY(this),
            hasGenAiSpans: i
          },
          request: n,
          ...(a && {
            transaction_info: {
              source: a
            }
          })
        },
        l = t8(this._events);
      return l && Object.keys(l).length && (C && $("[Measurements] Adding measurements to transaction event", JSON.stringify(l, void 0, 2)), o.measurements = l), o;
    }
  }
  function t9(e) {
    return e && "number" == typeof e || e instanceof Date || Array.isArray(e);
  }
  function t7(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
  }
  function ne(e) {
    let t = eY(T());
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let n = function (e) {
        let t = {
          isStandalone: (e.experimental || {}).standalone,
          ...e
        };
        if (e.startTime) {
          let n = {
            ...t
          };
          return n.startTimestamp = tR(e.startTime), delete n.startTime, n;
        }
        return t;
      }(e),
      {
        forceTransaction: r,
        parentSpan: a
      } = e;
    return (e.scope ? t => e0(e.scope, t) : void 0 !== a ? e => nt(a, e) : e => e())(() => {
      let t = eK(),
        i = function (e, t) {
          if (t) return t;
          if (null === t) return;
          let n = ez(e[eF]);
          if (!n) return;
          let r = e1();
          return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? tB(n) : n;
        }(t, a),
        o = e1();
      return e.onlyIfParent && !i ? (o?.recordDroppedEvent("no_parent_span", "span"), new tK()) : function ({
        parentSpan: e,
        spanArguments: t,
        forceTransaction: n,
        scope: r
      }) {
        var a, i, o;
        let l, s;
        if (!tl()) {
          let r = new tK();
          if (n || !e) {
            let e = {
              sampled: "false",
              sample_rate: "0",
              transaction: t.name,
              ...tY(r)
            };
            en(r, tX, e);
          }
          return r;
        }
        let u = e1();
        if (i = u, o = t, s = i?.getOptions().ignoreSpans, i && tc(i) && s?.length && tu({
          description: o.name || "",
          op: o.attributes?.[e5] || o.op,
          attributes: o.attributes
        }, s)) return nr(r) || u?.recordDroppedEvent("ignored", "span"), new tK({
          dropReason: "ignored",
          traceId: e?.spanContext().traceId ?? r.getPropagationContext().traceId
        });
        let c = eJ();
        if (e && !n) l = function (e, t, n) {
          let {
              spanId: r,
              traceId: a
            } = e.spanContext(),
            i = nr(t),
            o = !i && tj(e),
            l = o ? new t6({
              ...n,
              parentSpanId: r,
              traceId: a,
              sampled: o
            }) : new tK({
              traceId: a
            });
          tF(e, l);
          let s = e1();
          return s && (tc(s) && l instanceof tK && (e instanceof tK && e.dropReason ? (l.dropReason = e.dropReason, s.recordDroppedEvent(e.dropReason, "span")) : i || (l.dropReason = "sample_rate", s.recordDroppedEvent("sample_rate", "span"))), s.emit("spanStart", l), n.endTimestamp && (s.emit("spanEnd", l), s.emit("afterSpanEnd", l))), l;
        }(e, r, t), tF(e, l);else if (e) {
          let n = tY(e),
            {
              traceId: a,
              spanId: i
            } = e.spanContext(),
            o = tj(e);
          en(l = nn({
            traceId: a,
            parentSpanId: i,
            ...t
          }, r, o), tX, n);
        } else {
          let {
            traceId: e,
            dsc: n,
            parentSpanId: a,
            sampled: i
          } = {
            ...c.getPropagationContext(),
            ...r.getPropagationContext()
          };
          l = nn({
            traceId: e,
            parentSpanId: a,
            ...t
          }, r, i), n && en(l, tX, n);
        }
        return !function (e) {
          if (!C) return;
          let {
              description: t = "< unknown name >",
              op: n = "< unknown op >",
              parent_span_id: r
            } = tC(e),
            {
              spanId: a
            } = e.spanContext(),
            i = tj(e),
            o = tB(e),
            l = o === e,
            s = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${l ? "root " : ""}span`,
            u = [`op: ${n}`, `name: ${t}`, `ID: ${a}`];
          if (r && u.push(`parent ID: ${r}`), !l) {
            let {
              op: e,
              description: t
            } = tC(o);
            u.push(`root ID: ${o.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`);
          }
          $(`${s}
  ${u.join("\n  ")}`);
        }(l), (a = l) && (en(a, tm, e$(c)), en(a, th, r)), l;
      }({
        parentSpan: i,
        spanArguments: n,
        forceTransaction: r,
        scope: t
      });
    });
  }
  function nt(e, t) {
    let n = eY(T());
    return n.withActiveSpan ? n.withActiveSpan(e, t) : e0(n => (eU(n, e || void 0), t(n)));
  }
  function nn(e, t, n) {
    let r = e1(),
      a = r?.getOptions() || {},
      {
        name: i = ""
      } = e,
      o = {
        spanAttributes: {
          ...e.attributes
        },
        spanName: i,
        parentSampled: n
      };
    r?.emit("beforeSampling", o, {
      decision: !1
    });
    let l = o.parentSampled ?? n,
      s = o.spanAttributes,
      u = t.getPropagationContext(),
      c = nr(t),
      [d, f, p] = c ? [!1] : function (e, t, n) {
        let r, a;
        if (!tl(e)) return [!1];
        "function" == typeof e.tracesSampler ? (r = e.tracesSampler({
          ...t,
          inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
        }), a = !0) : void 0 !== t.parentSampled ? r = t.parentSampled : void 0 !== e.tracesSampleRate && (r = e.tracesSampleRate, a = !0);
        let i = td(r);
        if (void 0 === i) return C && z(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [!1];
        if (!i) return C && $(`[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, i, a];
        let o = n < i;
        return !o && C && $(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [o, i, a];
      }(a, {
        name: i,
        parentSampled: l,
        attributes: s,
        parentSampleRate: td(u.dsc?.sample_rate)
      }, u.sampleRand),
      h = new t6({
        ...e,
        attributes: {
          [e2]: "custom",
          [e3]: void 0 !== f && p ? f : void 0,
          ...s
        },
        sampled: d
      });
    return d || !r || c || (C && $("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", tc(r) ? "span" : "transaction")), r && r.emit("spanStart", h), h;
  }
  function nr(e) {
    return !0 === e.getScopeData().sdkProcessingMetadata.__SENTRY_SUPPRESS_TRACING__;
  }
  function na(e) {
    return new no(t => {
      t(e);
    });
  }
  function ni(e) {
    return new no((t, n) => {
      n(e);
    });
  }
  class no {
    constructor(e) {
      this._state = 0, this._handlers = [], this._runExecutor(e);
    }
    then(e, t) {
      return new no((n, r) => {
        this._handlers.push([!1, t => {
          if (e) try {
            n(e(t));
          } catch (e) {
            r(e);
          } else n(t);
        }, e => {
          if (t) try {
            n(t(e));
          } catch (e) {
            r(e);
          } else r(e);
        }]), this._executeHandlers();
      });
    }
    catch(e) {
      return this.then(e => e, e);
    }
    finally(e) {
      return new no((t, n) => {
        let r, a;
        return this.then(t => {
          a = !1, r = t, e && e();
        }, t => {
          a = !0, r = t, e && e();
        }).then(() => {
          a ? n(r) : t(r);
        });
      });
    }
    _executeHandlers() {
      if (0 === this._state) return;
      let e = this._handlers.slice();
      this._handlers = [], e.forEach(e => {
        e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0);
      });
    }
    _runExecutor(e) {
      let t = (e, t) => {
          if (0 === this._state) {
            if (J(t)) return void t.then(n, r);
            this._state = e, this._value = t, this._executeHandlers();
          }
        },
        n = e => {
          t(1, e);
        },
        r = e => {
          t(2, e);
        };
      try {
        e(n, r);
      } catch (e) {
        r(e);
      }
    }
  }
  function nl(e, t) {
    let {
      extra: n,
      tags: r,
      attributes: a,
      user: i,
      contexts: o,
      level: l,
      sdkProcessingMetadata: s,
      breadcrumbs: u,
      fingerprint: c,
      eventProcessors: d,
      attachments: f,
      propagationContext: p,
      transactionName: h,
      span: m
    } = t;
    ns(e, "extra", n), ns(e, "tags", r), ns(e, "attributes", a), ns(e, "user", i), ns(e, "contexts", o), e.sdkProcessingMetadata = eM(e.sdkProcessingMetadata, s, 2), l && (e.level = l), h && (e.transactionName = h), m && (e.span = m), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), f.length && (e.attachments = [...e.attachments, ...f]), e.propagationContext = {
      ...e.propagationContext,
      ...p
    };
  }
  function ns(e, t, n) {
    e[t] = eM(e[t], n, 1);
  }
  function nu(e, t) {
    let n = eZ().getScopeData();
    return e && nl(n, e.getScopeData()), t && nl(n, t.getScopeData()), n;
  }
  let nc = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
  function nd(e, t) {
    return eK().captureEvent(e, t);
  }
  function nf(e) {
    var t;
    let n,
      r,
      a = eJ(),
      {
        user: i
      } = nu(a, eK()),
      {
        userAgent: o
      } = P.navigator || {},
      l = (t = {
        user: i,
        ...(o && {
          userAgent: o
        }),
        ...e
      }, n = eA(), r = {
        sid: ek(),
        init: !0,
        timestamp: n,
        started: n,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => {
          var e;
          return e = r, {
            sid: `${e.sid}`,
            init: e.init,
            started: new Date(1e3 * e.started).toISOString(),
            timestamp: new Date(1e3 * e.timestamp).toISOString(),
            status: e.status,
            errors: e.errors,
            did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
            duration: e.duration,
            abnormal_mechanism: e.abnormal_mechanism,
            attrs: {
              release: e.release,
              environment: e.environment,
              ip_address: e.ipAddress,
              user_agent: e.userAgent
            }
          };
        }
      }, t && ej(r, t), r),
      s = a.getSession();
    return s?.status === "ok" && ej(s, {
      status: "exited"
    }), np(), a.setSession(l), l;
  }
  function np() {
    let e,
      t = eJ(),
      n = eK().getSession() || t.getSession();
    n && (e = {}, "ok" === n.status && (e = {
      status: "exited"
    }), ej(n, e)), nh(), t.setSession();
  }
  function nh() {
    let e = eJ(),
      t = e1(),
      n = e.getSession();
    n && t && t.captureSession(n);
  }
  function nm(e = !1) {
    e ? np() : nh();
  }
  let ng = [];
  function ny(e, t) {
    for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
  }
  function nv(e, t, n) {
    if (n[t.name]) {
      C && $(`Integration skipped because it was already installed: ${t.name}`);
      return;
    }
    if (n[t.name] = t, ng.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), ng.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
      let n = t.preprocessEvent.bind(t);
      e.on("preprocessEvent", (t, r) => n(t, r, e));
    }
    if ("function" == typeof t.processEvent) {
      let n = t.processEvent.bind(t),
        r = Object.assign((t, r) => n(t, r, e), {
          id: t.name
        });
      e.addEventProcessor(r);
    }
    ["processSpan", "processSegmentSpan"].forEach(n => {
      let r = t[n];
      "function" == typeof r && e.on(n, n => r.call(t, n, e));
    }), C && $(`Integration installed: ${t.name}`);
  }
  function nb(e) {
    let t = [];
    e.message && t.push(e.message);
    try {
      let n = e.exception.values[e.exception.values.length - 1];
      n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch {}
    return t;
  }
  let n_ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/];
  function nS(e = {}, t = {}) {
    return {
      allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
      denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
      ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : n_)],
      ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])]
    };
  }
  function nw(e) {
    try {
      let t = [...(e.exception?.values ?? [])].reverse().find(e => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length),
        n = t?.stacktrace?.frames;
      return n ? function (e = []) {
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t];
          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
        }
        return null;
      }(n) : null;
    } catch {
      return C && F(`Cannot extract url for event ${eT(e)}`), null;
    }
  }
  let nE = new WeakMap();
  function nx(e, t) {
    let n = ev(e),
      r = ev(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || r.length !== n.length) return !1;
    for (let e = 0; e < r.length; e++) {
      let t = r[e],
        a = n[e];
      if (t.filename !== a.filename || t.lineno !== a.lineno || t.colno !== a.colno || t.function !== a.function) return !1;
    }
    return !0;
  }
  function nk(e, t) {
    let n = e.fingerprint,
      r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    try {
      return n.join("") === r.join("");
    } catch {
      return !1;
    }
  }
  function nP(e) {
    return e.exception?.values?.[0];
  }
  function nT() {
    let e;
    return "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== x.default ? x.default : 0)) || (e = P.process, e?.type === "renderer"));
  }
  function nR(e, t) {
    var n, r, a, i, o;
    let l,
      s,
      u = t ?? (o = e, nO().get(o)) ?? [];
    if (0 === u.length) return;
    let c = e.getOptions(),
      d = (n = c._metadata, r = c.tunnel, a = e.getDsn(), i = e.getDataCollectionOptions().userInfo, l = {}, n?.sdk && (l.sdk = {
        name: n.sdk.name,
        version: n.sdk.version
      }), r && a && (l.dsn = tb(a)), tZ(l, [(s = i ? "auto" : "never", [{
        type: "log",
        item_count: u.length,
        content_type: "application/vnd.sentry.items.log+json"
      }, {
        version: 2,
        ...(nT() && {
          ingest_settings: {
            infer_ip: s,
            infer_user_agent: s
          }
        }),
        items: u
      }])]));
    nO().set(e, []), e.emit("flushLogs"), e.sendEnvelope(d);
  }
  function nO() {
    return O("clientToLogBufferMap", () => new WeakMap());
  }
  function nC(e, t) {
    var n, r, a, i, o;
    let l,
      s,
      u = t ?? (o = e, nN().get(o)) ?? [];
    if (0 === u.length) return;
    let c = e.getOptions(),
      d = (n = c._metadata, r = c.tunnel, a = e.getDsn(), i = e.getDataCollectionOptions().userInfo, l = {}, n?.sdk && (l.sdk = {
        name: n.sdk.name,
        version: n.sdk.version
      }), r && a && (l.dsn = tb(a)), tZ(l, [(s = i ? "auto" : "never", [{
        type: "trace_metric",
        item_count: u.length,
        content_type: "application/vnd.sentry.items.trace-metric+json"
      }, {
        version: 2,
        ...(nT() && {
          ingest_settings: {
            infer_ip: s,
            infer_user_agent: s
          }
        }),
        items: u
      }])]));
    nN().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(d);
  }
  function nN() {
    return O("clientToMetricBufferMap", () => new WeakMap());
  }
  function nA(e) {
    return "object" == typeof e && "function" == typeof e.unref && e.unref(), e;
  }
  let nI = Symbol.for("SentryBufferFullError");
  function nL(e = 100) {
    let t = new Set();
    return {
      get $() {
        return Array.from(t);
      },
      add: function (n) {
        if (!(t.size < e)) return ni(nI);
        let r = n();
        return t.add(r), r.then(() => {
          t.delete(r);
        }, () => {
          t.delete(r);
        }), r;
      },
      drain: function (e) {
        if (!t.size) return na(!0);
        let n = Promise.allSettled(Array.from(t)).then(() => !0);
        return e ? Promise.race([n, new Promise(t => nA(setTimeout(() => t(!1), e)))]) : n;
      }
    };
  }
  let nj = ["forwarded", "-ip", "remote-", "via", "-user"],
    nM = {
      userInfo: !1,
      cookies: !0,
      httpHeaders: {
        request: !0,
        response: !0
      },
      httpBodies: [],
      queryParams: !0,
      genAI: {
        inputs: !0,
        outputs: !0
      },
      stackFrameVariables: !0,
      frameContextLines: 5
    },
    nD = "Not capturing exception because it's already been captured.",
    n$ = "Discarded session because of missing or non-string release",
    nz = Symbol.for("SentryInternalError"),
    nF = Symbol.for("SentryDoNotSendEventError");
  function nU(e) {
    return {
      message: e,
      [nz]: !0
    };
  }
  function nB(e) {
    return {
      message: e,
      [nF]: !0
    };
  }
  function nH(e) {
    return !!e && "object" == typeof e && nz in e;
  }
  function nW(e) {
    return !!e && "object" == typeof e && nF in e;
  }
  function nq(e, t, n, r, a) {
    let i,
      o = 0,
      l = !1;
    e.on(n, () => {
      o = 0, clearTimeout(i), l = !1;
    }), e.on(t, t => {
      if ((o += r(t)) >= 8e5) a(e);else if (!l) {
        let t = e.getOptions()._flushInterval ?? 5e3;
        t > 0 && (l = !0, i = nA(setTimeout(() => {
          a(e);
        }, t)));
      }
    }), e.on("flush", () => {
      a(e);
    });
  }
  class nV {
    constructor(e) {
      if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = nL(e.transportOptions?.bufferSize ?? 64), this._dataCollection = function (e) {
        let t = null != e.dataCollection ? nM : !0 === e.sendDefaultPii ? {
            userInfo: !0,
            cookies: !0,
            httpHeaders: {
              request: !0,
              response: !0
            },
            httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
            queryParams: !0,
            genAI: {
              inputs: !0,
              outputs: !0
            },
            stackFrameVariables: !0,
            frameContextLines: 5
          } : {
            userInfo: !1,
            cookies: {
              deny: nj
            },
            httpHeaders: {
              request: {
                deny: nj
              },
              response: {
                deny: nj
              }
            },
            httpBodies: [],
            queryParams: {
              deny: nj
            },
            genAI: {
              inputs: !1,
              outputs: !1
            },
            stackFrameVariables: !0,
            frameContextLines: 5
          },
          n = e.dataCollection ?? {};
        return {
          userInfo: n.userInfo ?? t.userInfo,
          cookies: n.cookies ?? t.cookies,
          httpHeaders: {
            request: n.httpHeaders?.request ?? t.httpHeaders.request,
            response: n.httpHeaders?.response ?? t.httpHeaders.response
          },
          httpBodies: n.httpBodies ?? t.httpBodies,
          queryParams: n.queryParams ?? t.queryParams,
          genAI: {
            inputs: n.genAI?.inputs ?? t.genAI.inputs,
            outputs: n.genAI?.outputs ?? t.genAI.outputs
          },
          stackFrameVariables: n.stackFrameVariables ?? t.stackFrameVariables,
          frameContextLines: n.frameContextLines ?? t.frameContextLines
        };
      }(e), e.dsn ? this._dsn = function (e) {
        let t = "string" == typeof e ? t_(e) : tS(e);
        if (t && function (e) {
          if (!C) return !0;
          let {
            port: t,
            projectId: n,
            protocol: r
          } = e;
          return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (F(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (F(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : !(t && isNaN(parseInt(t, 10))) || (F(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (F(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1));
        }(t)) return t;
      }(e.dsn) : C && z("No DSN provided, client will not send events."), this._dsn) {
        const t = function (e, t, n) {
          let r, a, i;
          return t || `${r = e.protocol ? `${e.protocol}:` : "", a = e.port ? `:${e.port}` : "", `${r}//${e.host}${a}${e.path ? `/${e.path}` : ""}/api/`}${e.projectId}/envelope/?${i = {
            sentry_version: "7"
          }, e.publicKey && (i.sentry_key = e.publicKey), n && (i.sentry_client = `${n.name}/${n.version}`), new URLSearchParams(i).toString()}`;
        }(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
        this._transport = e.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...e.transportOptions,
          url: t
        });
      }
      this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && nq(this, "afterCaptureLog", "flushLogs", nK, nR), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) && nq(this, "afterCaptureMetric", "flushMetrics", nY, nC);
    }
    captureException(e, t, n) {
      let r = ek();
      if (eC(e)) return C && $(nD), r;
      let a = {
        event_id: r,
        ...t
      };
      return this._process(() => this.eventFromException(e, a).then(e => this._captureEvent(e, a, n)).then(e => e), "error"), a.event_id;
    }
    captureMessage(e, t, n, r) {
      let a = {
          event_id: ek(),
          ...n
        },
        i = Q(e) ? e : String(e),
        o = G(e),
        l = o ? this.eventFromMessage(i, t, a) : this.eventFromException(e, a);
      return this._process(() => l.then(e => this._captureEvent(e, a, r)), o ? "unknown" : "error"), a.event_id;
    }
    captureEvent(e, t, n) {
      let r = ek();
      if (t?.originalException && eC(t.originalException)) return C && $(nD), r;
      let a = {
          event_id: r,
          ...t
        },
        i = e.sdkProcessingMetadata || {},
        o = i.capturedSpanScope,
        l = i.capturedSpanIsolationScope,
        s = nX(e.type);
      return this._process(() => this._captureEvent(e, a, o || n, l), s), a.event_id;
    }
    captureSession(e) {
      this.sendSession(e), ej(e, {
        init: !1
      });
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getDataCollectionOptions() {
      return this._dataCollection;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    async flush(e) {
      let t = this._transport;
      if (this.emit("flush"), !t) return !0;
      let n = await this._isClientDoneProcessing(e),
        r = await t.flush(e);
      return n && r;
    }
    async close(e) {
      nR(this);
      let t = await this.flush(e);
      return this.getOptions().enabled = !1, this.emit("close"), t;
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(e) {
      this._eventProcessors.push(e);
    }
    init() {
      (this._isEnabled() || this._options.integrations.some(({
        name: e
      }) => e.startsWith("Spotlight"))) && this._setupIntegrations();
    }
    getIntegrationByName(e) {
      return this._integrations[e];
    }
    getIntegrationNames() {
      return Object.keys(this._integrations);
    }
    addIntegration(e) {
      let t = this._integrations[e.name];
      !t && e.beforeSetup && e.beforeSetup(this), nv(this, e, this._integrations), t || ny(this, [e]);
    }
    sendEvent(e, t = {}) {
      var n, r, a;
      let i, o, l, s;
      this.emit("beforeSendEvent", e, t);
      let u = function (e, t) {
          if ("transaction" !== e.type || !e.spans?.length || !e.sdkProcessingMetadata?.hasGenAiSpans || !t.getOptions().streamGenAiSpans || tc(t)) return;
          let n = [],
            r = [];
          for (let t of e.spans) t.op?.startsWith("gen_ai.") ? n.push(function (e) {
            var t;
            return {
              ...(t = {
                trace_id: e.trace_id,
                span_id: e.span_id,
                parent_span_id: e.parent_span_id,
                name: e.description || "",
                start_timestamp: e.start_timestamp,
                end_timestamp: e.timestamp || e.start_timestamp,
                status: e.status && "ok" !== e.status && "cancelled" !== e.status ? "error" : "ok",
                is_segment: !1,
                attributes: {
                  ...e.data
                },
                links: e.links
              }),
              attributes: tf(t.attributes),
              links: t.links?.map(e => ({
                ...e,
                attributes: tf(e.attributes)
              }))
            };
          }(t)) : r.push(t);
          if (0 === n.length) return;
          e.spans = r;
          let a = t.getDataCollectionOptions().userInfo ? "auto" : "never";
          return [{
            type: "span",
            item_count: n.length,
            content_type: "application/vnd.sentry.items.span.v2+json"
          }, {
            version: 2,
            ...(nT() && {
              ingest_settings: {
                infer_ip: a,
                infer_user_agent: a
              }
            }),
            items: n
          }];
        }(e, this),
        c = (n = this._dsn, r = this._options._metadata, a = this._options.tunnel, i = t5(r), o = e.type && "replay_event" !== e.type ? e.type : "event", !function (e, t) {
          if (!t) return;
          let n = e.sdk || {};
          e.sdk = {
            ...n,
            name: n.name || t.name,
            version: n.version || t.version,
            integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
            packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
            settings: e.sdk?.settings || t.settings ? {
              ...e.sdk?.settings,
              ...t.settings
            } : void 0
          };
        }(e, r?.sdk), l = e.sdkProcessingMetadata?.dynamicSamplingContext, s = {
          event_id: e.event_id,
          sent_at: new Date().toISOString(),
          ...(i && {
            sdk: i
          }),
          ...(!!a && n && {
            dsn: tb(n)
          }),
          ...(l && {
            trace: l
          })
        }, delete e.sdkProcessingMetadata, tZ(s, [[{
          type: o
        }, e]]));
      for (let e of t.attachments || []) c = t0(c, function (e) {
        let t = "string" == typeof e.data ? t2(e.data) : e.data;
        return [{
          type: "attachment",
          length: t.length,
          filename: e.filename,
          content_type: e.contentType,
          attachment_type: e.attachmentType
        }, t];
      }(e));
      u && (c = t0(c, u)), this.sendEnvelope(c).then(t => this.emit("afterSendEvent", e, t));
    }
    sendSession(e) {
      var t, n, r;
      let a,
        {
          release: i,
          environment: o = tV
        } = this._options;
      if ("aggregates" in e) {
        let t = e.attrs || {};
        if (!t.release && !i) {
          C && z(n$);
          return;
        }
        t.release = t.release || i, t.environment = t.environment || o, e.attrs = t;
      } else {
        if (!e.release && !i) {
          C && z(n$);
          return;
        }
        e.release = e.release || i, e.environment = e.environment || o;
      }
      this.emit("beforeSendSession", e);
      let l = (t = this._dsn, n = this._options._metadata, r = this._options.tunnel, a = t5(n), tZ({
        sent_at: new Date().toISOString(),
        ...(a && {
          sdk: a
        }),
        ...(!!r && t && {
          dsn: tb(t)
        })
      }, ["aggregates" in e ? [{
        type: "sessions"
      }, e] : [{
        type: "session"
      }, e.toJSON()]]));
      this.sendEnvelope(l);
    }
    recordDroppedEvent(e, t, n = 1) {
      if (this._options.sendClientReports) {
        let r = `${e}:${t}`;
        C && $(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ""}`), this._outcomes[r] = (this._outcomes[r] || 0) + n;
      }
    }
    on(e, t) {
      let n = this._hooks[e] = this._hooks[e] || new Set(),
        r = (...e) => t(...e);
      return n.add(r), () => {
        n.delete(r);
      };
    }
    emit(e, ...t) {
      let n = this._hooks[e];
      n && n.forEach(e => e(...t));
    }
    async sendEnvelope(e) {
      if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
        return await this._transport.send(e);
      } catch (e) {
        return C && F("Error while sending envelope:", e), {};
      }
      return C && F("Transport disabled"), {};
    }
    registerCleanup(e) {}
    dispose() {}
    _setupIntegrations() {
      var e;
      let t,
        {
          integrations: n
        } = this._options;
      this._integrations = (e = this, t = {}, n.forEach(t => {
        t?.beforeSetup && t.beforeSetup(e);
      }), n.forEach(n => {
        n && nv(e, n, t);
      }), t), ny(this, n);
    }
    _updateSessionFromEvent(e, t) {
      let n = "fatal" === t.level,
        r = !1,
        a = t.exception?.values;
      if (a) {
        for (let e of (r = !0, n = !1, a)) if (e.mechanism?.handled === !1) {
          n = !0;
          break;
        }
      }
      let i = "ok" === e.status;
      (i && 0 === e.errors || i && n) && (ej(e, {
        ...(n && {
          status: "crashed"
        }),
        errors: e.errors || Number(r || n)
      }), this.captureSession(e));
    }
    async _isClientDoneProcessing(e) {
      let t = 0;
      for (; !e || t < e;) {
        if (await new Promise(e => setTimeout(e, 1)), !this._numProcessing) return !0;
        t++;
      }
      return !1;
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e, t, n, r) {
      let a = this.getOptions(),
        c = this.getIntegrationNames();
      return !t.integrations && c.length && (t.integrations = c), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), function (e, t, n, r, a, i) {
        var c, d, f;
        let p,
          {
            normalizeDepth: h = 3,
            normalizeMaxBreadth: m = 1e3
          } = e,
          g = {
            ...t,
            event_id: t.event_id || n.event_id || ek(),
            timestamp: t.timestamp || eN()
          },
          y = n.integrations || e.integrations.map(e => e.name);
        (function (e, t) {
          let {
            environment: n,
            release: r,
            dist: a,
            maxValueLength: i
          } = t;
          e.environment = e.environment || n || tV, !e.release && r && (e.release = r), !e.dist && a && (e.dist = a);
          let o = e.request;
          o?.url && i && (o.url = eS(o.url, i)), i && e.exception?.values?.forEach(e => {
            e.value && (e.value = eS(e.value, i));
          });
        })(g, e), c = g, (d = y).length > 0 && (c.sdk = c.sdk || {}, c.sdk.integrations = [...(c.sdk.integrations || []), ...d]), a && a.emit("applyFrameMetadata", t), void 0 === t.type && (f = g, p = function (e) {
          let t = P._sentryDebugIds,
            n = P._debugIds;
          if (!t && !n) return {};
          let r = t ? Object.keys(t) : [],
            a = n ? Object.keys(n) : [];
          if (u && r.length === l && a.length === s) return u;
          l = r.length, s = a.length, u = {}, o || (o = {});
          let i = (t, n) => {
            for (let r of t) {
              let t = n[r],
                a = o?.[r];
              if (a && u && t) u[a[0]] = t, o && (o[r] = [a[0], t]);else if (t) {
                let n = e(r);
                for (let e = n.length - 1; e >= 0; e--) {
                  let a = n[e],
                    i = a?.filename;
                  if (i && u && o) {
                    u[i] = t, o[r] = [i, t];
                    break;
                  }
                }
              }
            }
          };
          return t && i(r, t), n && i(a, n), u;
        }(e.stackParser), f.exception?.values?.forEach(e => {
          e.stacktrace?.frames?.forEach(e => {
            e.filename && (e.debug_id = p[e.filename]);
          });
        }));
        let v = function (e, t) {
          if (!t) return e;
          let n = e ? e.clone() : new eB();
          return n.update(t), n;
        }(r, n.captureContext);
        n.mechanism && eO(g, n.mechanism);
        let b = a ? a.getEventProcessors() : [],
          _ = nu(i, v),
          S = [...(n.attachments || []), ..._.attachments];
        S.length && (n.attachments = S), function (e, t) {
          var n, r, a, i, o, l, s, u;
          let c,
            d,
            {
              fingerprint: f,
              span: p,
              breadcrumbs: h,
              sdkProcessingMetadata: m
            } = t;
          (function (e, t) {
            let {
              extra: n,
              tags: r,
              user: a,
              contexts: i,
              level: o,
              transactionName: l
            } = t;
            Object.keys(n).length && (e.extra = {
              ...n,
              ...e.extra
            }), Object.keys(r).length && (e.tags = {
              ...r,
              ...e.tags
            }), Object.keys(a).length && (e.user = {
              ...a,
              ...e.user
            }), Object.keys(i).length && (e.contexts = {
              ...i,
              ...e.contexts
            }), o && (e.level = o), l && "transaction" !== e.type && (e.transaction = l);
          })(e, t), p && ((n = e).contexts = {
            trace: function (e) {
              let {
                  spanId: t,
                  traceId: n,
                  isRemote: r
                } = e.spanContext(),
                a = r ? t : tC(e).parent_span_id,
                i = tg(e).scope;
              return {
                parent_span_id: a,
                span_id: r ? i?.getPropagationContext().propagationSpanId || eD() : t,
                trace_id: n
              };
            }(r = p),
            ...n.contexts
          }, n.sdkProcessingMetadata = {
            dynamicSamplingContext: tY(r),
            ...n.sdkProcessingMetadata
          }, (c = tC(tB(r)).description) && !n.transaction && "transaction" === n.type && (n.transaction = c)), a = e, i = f, a.fingerprint = a.fingerprint ? Array.isArray(a.fingerprint) ? a.fingerprint : [a.fingerprint] : [], i && (a.fingerprint = a.fingerprint.concat(i)), a.fingerprint.length || delete a.fingerprint, o = e, l = h, d = [...(o.breadcrumbs || []), ...l], o.breadcrumbs = d.length ? d : void 0, s = e, u = m, s.sdkProcessingMetadata = {
            ...s.sdkProcessingMetadata,
            ...u
          };
        }(g, _);
        let w = [...b, ..._.eventProcessors];
        return (n.data && !0 === n.data.__sentry__ ? na(g) : function (e, t, n, r = 0) {
          try {
            let a = function e(t, n, r, a) {
              let i = r[a];
              if (!t || !i) return t;
              let o = i({
                ...t
              }, n);
              return (C && null === o && $(`Event processor "${i.id || "?"}" dropped event`), J(o)) ? o.then(t => e(t, n, r, a + 1)) : e(o, n, r, a + 1);
            }(t, n, e, r);
            return J(a) ? a : na(a);
          } catch (e) {
            return ni(e);
          }
        }(w, g, n)).then(e => (e && function (e) {
          let t = {};
          if (e.exception?.values?.forEach(e => {
            e.stacktrace?.frames?.forEach(e => {
              e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
            });
          }), 0 === Object.keys(t).length) return;
          e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
          let n = e.debug_meta.images;
          Object.entries(t).forEach(([e, t]) => {
            n.push({
              type: "sourcemap",
              code_file: e,
              debug_id: t
            });
          });
        }(e), "number" == typeof h && h > 0) ? function (e, t, n) {
          if (!e) return null;
          let r = {
            ...e,
            ...(e.breadcrumbs && {
              breadcrumbs: e.breadcrumbs.map(e => ({
                ...e,
                ...(e.data && {
                  data: eb(e.data, t, n)
                })
              }))
            }),
            ...(e.user && {
              user: eb(e.user, t, n)
            }),
            ...(e.contexts && {
              contexts: eb(e.contexts, t, n)
            }),
            ...(e.extra && {
              extra: eb(e.extra, t, n)
            })
          };
          return e.contexts?.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = eb(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({
            ...e,
            ...(e.data && {
              data: eb(e.data, t, n)
            })
          }))), e.contexts?.flags && r.contexts && (r.contexts.flags = eb(e.contexts.flags, 3, n)), r;
        }(e, h, m) : e);
      }(a, e, t, n, this, r).then(e => (null === e || (this.emit("postprocessEvent", e, t), e.contexts = {
        trace: {
          ...e.contexts?.trace,
          ...function (e) {
            let t = i?.();
            if (t) return {
              trace_id: t.traceId,
              span_id: t.spanId
            };
            let {
                traceId: n,
                parentSpanId: r,
                propagationSpanId: a
              } = e.getPropagationContext(),
              o = {
                trace_id: n,
                span_id: a || eD()
              };
            return r && (o.parent_span_id = r), o;
          }(n)
        },
        ...e.contexts
      }, e.sdkProcessingMetadata = {
        dynamicSamplingContext: tG(this, n),
        ...e.sdkProcessingMetadata
      }), e));
    }
    _captureEvent(e, t = {}, n = eK(), r = eJ()) {
      return C && nQ(e) && $(`Captured error event \`${nb(e)[0] || "<unknown>"}\``), this._processEvent(e, t, n, r).then(e => e.event_id, e => {
        C && (nW(e) ? $(e.message) : nH(e) ? z(e.message) : z(e));
      });
    }
    _processEvent(e, t, n, r) {
      let a = this.getOptions(),
        {
          sampleRate: i
        } = a,
        o = nG(e),
        l = nQ(e),
        s = e.type || "error",
        u = `before send for type \`${s}\``,
        c = void 0 === i ? void 0 : td(i);
      if (l && "number" == typeof c && es() > c) return this.recordDroppedEvent("sample_rate", "error"), ni(nB(`Discarding event because it's not included in the random sample (sampling rate = ${i})`));
      let d = nX(e.type);
      return this._prepareEvent(e, t, n, r).then(e => {
        if (null === e) throw this.recordDroppedEvent("event_processor", d), nB("An event processor returned `null`, will not send event.");
        return t.data?.__sentry__ === !0 ? e : function (e, t) {
          let n = `${t} must return \`null\` or a valid event.`;
          if (J(e)) return e.then(e => {
            if (!Y(e) && null !== e) throw nU(n);
            return e;
          }, e => {
            throw nU(`${t} rejected with ${e}`);
          });
          if (!Y(e) && null !== e) throw nU(n);
          return e;
        }(function (e, t, n, r) {
          let {
              beforeSend: a,
              beforeSendTransaction: i,
              ignoreSpans: o
            } = t,
            l = !tJ(t.beforeSendSpan) && t.beforeSendSpan,
            s = n;
          if (nQ(s) && a) return a(s, r);
          if (nG(s)) {
            if (l || o) {
              let t = function (e) {
                let {
                  trace_id: t,
                  parent_span_id: n,
                  span_id: r,
                  status: a,
                  origin: i,
                  data: o,
                  op: l
                } = e.contexts?.trace ?? {};
                return {
                  data: o ?? {},
                  description: e.transaction,
                  op: l,
                  parent_span_id: n,
                  span_id: r ?? "",
                  start_timestamp: e.start_timestamp ?? 0,
                  status: a,
                  timestamp: e.timestamp,
                  trace_id: t ?? "",
                  origin: i,
                  profile_id: o?.[tt],
                  exclusive_time: o?.[tn],
                  measurements: e.measurements,
                  is_segment: !0
                };
              }(s);
              if (o?.length && tu({
                description: t.description,
                op: t.op,
                attributes: t.data
              }, o)) return null;
              if (l) {
                let e = l(t);
                if (e) s = eM(n, {
                  type: "transaction",
                  timestamp: e.timestamp,
                  start_timestamp: e.start_timestamp,
                  transaction: e.description,
                  contexts: {
                    trace: {
                      trace_id: e.trace_id,
                      span_id: e.span_id,
                      parent_span_id: e.parent_span_id,
                      op: e.op,
                      status: e.status,
                      origin: e.origin,
                      data: {
                        ...e.data,
                        ...(e.profile_id && {
                          [tt]: e.profile_id
                        }),
                        ...(e.exclusive_time && {
                          [tn]: e.exclusive_time
                        })
                      }
                    }
                  },
                  measurements: e.measurements
                });else tq();
              }
              if (s.spans) {
                let t = [],
                  n = s.spans;
                for (let e of n) {
                  if (o?.length && tu({
                    description: e.description,
                    op: e.op,
                    attributes: e.data
                  }, o)) {
                    !function (e, t) {
                      let n = t.parent_span_id,
                        r = t.span_id;
                      if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
                    }(n, e);
                    continue;
                  }
                  if (l) {
                    let n = l(e);
                    n ? t.push(n) : (tq(), t.push(e));
                  } else t.push(e);
                }
                let r = s.spans.length - t.length;
                r && e.recordDroppedEvent("before_send", "span", r), s.spans = t;
              }
            }
            if (i) {
              if (s.spans) {
                let e = s.spans.length;
                s.sdkProcessingMetadata = {
                  ...n.sdkProcessingMetadata,
                  spanCountBeforeProcessing: e
                };
              }
              return i(s, r);
            }
          }
          return s;
        }(this, a, e, t), u);
      }).then(a => {
        if (null === a) {
          if (this.recordDroppedEvent("before_send", d), o) {
            let t = 1 + (e.spans || []).length;
            this.recordDroppedEvent("before_send", "span", t);
          }
          throw nB(`${u} returned \`null\`, will not send event.`);
        }
        let i = n.getSession() || r.getSession();
        if (l && i && this._updateSessionFromEvent(i, a), o) {
          let e = (a.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (a.spans ? a.spans.length : 0);
          e > 0 && this.recordDroppedEvent("before_send", "span", e);
        }
        let s = a.transaction_info;
        return o && s && a.transaction !== e.transaction && (a.transaction_info = {
          ...s,
          source: "custom"
        }), this.sendEvent(a, t), a;
      }).then(null, e => {
        if (nW(e) || nH(e)) throw e;
        throw this.captureException(e, {
          mechanism: {
            handled: !1,
            type: "internal"
          },
          data: {
            __sentry__: !0
          },
          originalException: e
        }), nU(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`);
      });
    }
    _process(e, t) {
      this._numProcessing++, this._promiseBuffer.add(e).then(e => (this._numProcessing--, e), e => (this._numProcessing--, e === nI && this.recordDroppedEvent("queue_overflow", t), e));
    }
    _clearOutcomes() {
      let e = this._outcomes;
      return this._outcomes = {}, Object.entries(e).map(([e, t]) => {
        let [n, r] = e.split(":");
        return {
          reason: n,
          category: r,
          quantity: t
        };
      });
    }
    _flushOutcomes() {
      var e;
      C && $("Flushing outcomes...");
      let t = this._clearOutcomes();
      if (0 === t.length) {
        C && $("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        C && $("No dsn provided, will not send outcomes");
        return;
      }
      C && $("Sending outcomes:", t);
      let n = tZ((e = this._options.tunnel && tb(this._dsn)) ? {
        dsn: e
      } : {}, [[{
        type: "client_report"
      }, {
        timestamp: eN(),
        discarded_events: t
      }]]);
      this.sendEnvelope(n);
    }
  }
  function nX(e) {
    return "replay_event" === e ? "replay" : e || "error";
  }
  function nQ(e) {
    return void 0 === e.type;
  }
  function nG(e) {
    return "transaction" === e.type;
  }
  function nY(e) {
    let t = 0;
    return e.name && (t += 2 * e.name.length), (t += 8) + nJ(e.attributes);
  }
  function nK(e) {
    let t = 0;
    return e.message && (t += 2 * e.message.length), t + nJ(e.attributes);
  }
  function nJ(e) {
    if (!e) return 0;
    let t = 0;
    return Object.values(e).forEach(e => {
      Array.isArray(e) ? t += e.length * nZ(e[0]) : G(e) ? t += nZ(e) : t += 100;
    }), t;
  }
  function nZ(e) {
    return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : 4 * ("boolean" == typeof e);
  }
  function n0(e) {
    "aggregates" in e ? e.attrs?.ip_address === void 0 && (e.attrs = {
      ...e.attrs,
      ip_address: "{{auto}}"
    }) : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}");
  }
  function n1(e) {
    return H(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__ ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
  }
  function n2(e, t) {
    var n, r;
    let a,
      i,
      o = n4(e, t),
      l = {
        type: (n = t, !(a = n?.name) && n8(n) ? n.message && Array.isArray(n.message) && 2 == n.message.length ? n.message[0] : "WebAssembly.Exception" : a),
        value: (r = t, i = r?.message, n8(r) ? Array.isArray(r.message) && 2 == r.message.length ? r.message[1] : "wasm exception" : i ? i.error && "string" == typeof i.error.message ? n1(i.error) : n1(r) : "No error message")
      };
    return o.length && (l.stacktrace = {
      frames: o
    }), void 0 === l.type && "" === l.value && (l.value = "Unrecoverable error caught"), l;
  }
  function n3(e, t) {
    return {
      exception: {
        values: [n2(e, t)]
      }
    };
  }
  function n4(e, t) {
    var n, r;
    let a = t.stacktrace || t.stack || "",
      i = (n = t) && n5.test(n.message) ? 1 : 0,
      o = "number" == typeof (r = t).framesToPop ? r.framesToPop : 0;
    try {
      return e(a, i, o);
    } catch {}
    return [];
  }
  let n5 = /Minified React error #\d+;/i;
  function n8(e) {
    return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception;
  }
  function n6(e, t, n, r, a) {
    let i;
    if (q(t) && t.error) return n3(e, t.error);
    if (V(t) || W(t, "DOMException")) {
      if ("stack" in t) {
        i = n3(e, t);
        let a = i.exception?.values?.[0];
        if (r && n && a && !a.stacktrace) {
          let t = n4(e, n);
          t.length && (a.stacktrace = {
            frames: t
          }, eO(i, {
            synthetic: !0
          }));
        }
      } else {
        let a = t.name || (V(t) ? "DOMError" : "DOMException"),
          o = t.message ? `${a}: ${t.message}` : a;
        eR(i = n9(e, o, n, r), o);
      }
      return "code" in t && (i.tags = {
        ...i.tags,
        "DOMException.code": `${t.code}`
      }), i;
    }
    return H(t) ? n3(e, t) : (Y(t) || K(t) ? eO(i = function (e, t, n, r) {
      let a = e1(),
        i = a?.getOptions().normalizeDepth,
        o = Object.values(t).find(e => e instanceof Error),
        l = {
          __serialized__: function e(t, n = 3, r = 102400) {
            let a = eb(t, n);
            return ~-encodeURI(JSON.stringify(a)).split(/%..|./).length > r ? e(t, n - 1, r) : a;
          }(t, i)
        };
      if (o) return {
        exception: {
          values: [n2(e, o)]
        },
        extra: l
      };
      let s = {
        exception: {
          values: [{
            type: K(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
            value: function (e, {
              isUnhandledRejection: t
            }) {
              let n,
                r = ((n = Object.keys(ei(e))).sort(), n[0] ? n.join(", ") : "[object has no keys]"),
                a = t ? "promise rejection" : "exception";
              if (q(e)) return `Event \`ErrorEvent\` captured as ${a} with message \`${e.message}\``;
              if (K(e)) {
                let t = function (e) {
                  try {
                    let t = Object.getPrototypeOf(e);
                    return t ? t.constructor.name : void 0;
                  } catch {}
                }(e);
                return `Event \`${t}\` (type=${e.type}) captured as ${a}`;
              }
              return `Object captured as ${a} with keys: ${r}`;
            }(t, {
              isUnhandledRejection: r
            })
          }]
        },
        extra: l
      };
      if (n) {
        let t = n4(e, n);
        t.length && (s.exception.values[0].stacktrace = {
          frames: t
        });
      }
      return s;
    }(e, t, n, a), {
      synthetic: !0
    }) : (eR(i = n9(e, t, n, r), `${t}`, void 0), eO(i, {
      synthetic: !0
    })), i);
  }
  function n9(e, t, n, r) {
    let a = {};
    if (r && n) {
      let r = n4(e, n);
      r.length && (a.exception = {
        values: [{
          value: t,
          stacktrace: {
            frames: r
          }
        }]
      }), eO(a, {
        synthetic: !0
      });
    }
    if (Q(t)) {
      let {
        __sentry_template_string__: e,
        __sentry_template_values__: n
      } = t;
      return a.logentry = {
        message: e,
        params: n
      }, a;
    }
    return a.message = t, a;
  }
  function n7() {
    try {
      return P.document.location.href;
    } catch {
      return "";
    }
  }
  function re(e, t = 5) {
    if (!P.HTMLElement) return null;
    let n = e;
    for (let e = 0; e < t && n; e++) {
      if (n instanceof HTMLElement) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
      }
      n = n.parentNode;
    }
    return null;
  }
  let rt = 0;
  function rn(e, t = {}) {
    if ("function" != typeof e) return e;
    try {
      let t = e.__sentry_wrapped__;
      if (t) if ("function" == typeof t) return t;else return e;
      if (ea(e)) return e;
    } catch {
      return e;
    }
    let n = function (...n) {
      P._sentryWrappedDepth = (P._sentryWrappedDepth || 0) + 1;
      try {
        let r = n.map(e => rn(e, t));
        return e.apply(this, r);
      } catch (e) {
        throw rt++, setTimeout(() => {
          rt--;
        }), e0(r => {
          r.addEventProcessor(e => (t.mechanism && (eR(e, void 0, void 0), eO(e, t.mechanism)), e.extra = {
            ...e.extra,
            arguments: n
          }, e)), eK().captureException(e, function (e) {
            if (e) {
              var t;
              return (t = e) instanceof eB || "function" == typeof t || Object.keys(e).some(e => nc.includes(e)) ? {
                captureContext: e
              } : e;
            }
          }(void 0));
        }), e;
      } finally {
        P._sentryWrappedDepth = (P._sentryWrappedDepth || 0) - 1;
      }
    };
    try {
      for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    } catch {}
    er(n, e), en(e, "__sentry_wrapped__", n);
    try {
      Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
        get: () => e.name
      });
    } catch {}
    return n;
  }
  function rr() {
    let e = n7(),
      {
        referrer: t
      } = P.document || {},
      {
        userAgent: n
      } = P.navigator || {};
    return {
      url: e,
      headers: {
        ...(t && {
          Referer: t
        }),
        ...(n && {
          "User-Agent": n
        })
      }
    };
  }
  class ra extends nV {
    constructor(e) {
      const t = function (e) {
        return {
          release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : P.SENTRY_RELEASE?.id,
          sendClientReports: !0,
          parentSpanIsAlwaysRootSpan: !0,
          ...e
        };
      }(e);
      U(t, "browser", ["browser"], P.SENTRY_SDK_SOURCE || "npm"), super(t);
      const {
        userInfo: n
      } = this.getDataCollectionOptions();
      t._metadata?.sdk && (t._metadata.sdk.settings = {
        infer_ip: n ? "auto" : "never",
        ...t._metadata.sdk.settings
      });
      const {
          sendClientReports: r,
          enableLogs: a,
          _experiments: i,
          enableMetrics: o
        } = this._options,
        l = o ?? i?.enableMetrics ?? !0;
      P.document && (r || a || l) && P.document.addEventListener("visibilitychange", () => {
        "hidden" === P.document.visibilityState && (r && this._flushOutcomes(), a && nR(this), l && nC(this));
      }), n && this.on("beforeSendSession", n0);
    }
    eventFromException(e, t) {
      var n, r;
      let a;
      return n = this._options.stackParser, r = this._options.attachStacktrace, eO(a = n6(n, e, t?.syntheticException || void 0, r)), a.level = "error", t?.event_id && (a.event_id = t.event_id), na(a);
    }
    eventFromMessage(e, t = "info", n) {
      return function (e, t, n = "info", r, a) {
        let i = n9(e, t, r?.syntheticException || void 0, a);
        return i.level = n, r?.event_id && (i.event_id = r.event_id), na(i);
      }(this._options.stackParser, e, t, n, this._options.attachStacktrace);
    }
    _prepareEvent(e, t, n, r) {
      return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r);
    }
  }
  let ri = {},
    ro = {};
  function rl(e, t) {
    return ri[e] = ri[e] || [], ri[e].push(t), () => {
      let n = ri[e];
      if (n) {
        let e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    };
  }
  function rs(e, t) {
    if (!ro[e]) {
      ro[e] = !0;
      try {
        t();
      } catch (t) {
        C && F(`Error while instrumenting ${e}`, t);
      }
    }
  }
  function ru(e, t) {
    let n = e && ri[e];
    if (n) for (let r of n) try {
      r(t);
    } catch (t) {
      C && F(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ey(r)}
Error:`, t);
    }
  }
  let rc = new Set([]);
  function rd() {
    "console" in P && N.forEach(function (e) {
      e in P.console && et(P.console, e, function (t) {
        return A[e] = t, function (...t) {
          let n = t[0],
            r = A[e],
            a = rc.size && "string" == typeof n && ex(n, rc);
          a || ru("console", {
            args: t,
            level: e
          }), (!a || C && L()) && r?.apply(P.console, t);
        };
      });
    });
  }
  function rf(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
  }
  function rp(e, t) {
    let n = "fetch",
      r = rl(n, e);
    return rs(n, () => rh(void 0, t)), r;
  }
  function rh(e, t = !1) {
    (!t || function () {
      if ("string" == typeof EdgeRuntime) return !0;
      if (!function () {
        if (!("fetch" in P)) return !1;
        try {
          return new Headers(), new Request("data:,"), new Response(), !0;
        } catch {
          return !1;
        }
      }()) return !1;
      if (rf(P.fetch)) return !0;
      let e = !1,
        t = P.document;
      if (t && "function" == typeof t.createElement) try {
        let n = t.createElement("iframe");
        n.hidden = !0, t.head.appendChild(n), n.contentWindow?.fetch && (e = rf(n.contentWindow.fetch)), t.head.removeChild(n);
      } catch (e) {
        C && z("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
      }
      return e;
    }()) && et(P, "fetch", function (t) {
      return function (...n) {
        let r = Error(),
          {
            method: a,
            url: i
          } = function (e) {
            if (0 === e.length) return {
              method: "GET",
              url: ""
            };
            if (2 === e.length) {
              let [t, n] = e;
              return {
                url: rv(t),
                method: ry(n, "method") ? String(n.method).toUpperCase() : ee(t) && ry(t, "method") ? String(t.method).toUpperCase() : "GET"
              };
            }
            let t = e[0];
            return {
              url: rv(t),
              method: ry(t, "method") ? String(t.method).toUpperCase() : "GET"
            };
          }(n),
          o = {
            args: n,
            fetchData: {
              method: a,
              url: i
            },
            startTimestamp: 1e3 * eA(),
            virtualError: r,
            headers: function (e) {
              let [t, n] = e;
              try {
                if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                if (ee(t)) return new Headers(t.headers);
              } catch {}
            }(n)
          };
        return e || ru("fetch", {
          ...o
        }), t.apply(P, n).then(async t => (e ? e(t) : ru("fetch", {
          ...o,
          endTimestamp: 1e3 * eA(),
          response: t
        }), t), e => {
          ru("fetch", {
            ...o,
            endTimestamp: 1e3 * eA(),
            error: e
          }), H(e) && void 0 === e.stack && (e.stack = r.stack, en(e, "framesToPop", 1));
          let t = e1(),
            n = t?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (!1 !== n && e instanceof TypeError && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
            let t = new URL(o.fetchData.url).host;
            "always" === n ? e.message = `${e.message} (${t})` : en(e, "__sentry_fetch_url_host__", t);
          } catch {}
          throw e;
        });
      };
    });
  }
  async function rm(e, t) {
    if (e?.body) {
      let n = e.body,
        r = n.getReader(),
        a = setTimeout(() => {
          n.cancel().then(null, () => {});
        }, 9e4),
        i = !0;
      for (; i;) {
        let e;
        try {
          e = setTimeout(() => {
            n.cancel().then(null, () => {});
          }, 5e3);
          let {
            done: a
          } = await r.read();
          clearTimeout(e), a && (t(), i = !1);
        } catch {
          i = !1;
        } finally {
          clearTimeout(e);
        }
      }
      clearTimeout(a), r.releaseLock(), n.cancel().then(null, () => {});
    }
  }
  function rg(e) {
    let t;
    try {
      t = e.clone();
    } catch {
      return;
    }
    rm(t, () => {
      ru("fetch-body-resolved", {
        endTimestamp: 1e3 * eA(),
        response: e
      });
    });
  }
  function ry(e, t) {
    return !!e && "object" == typeof e && !!e[t];
  }
  function rv(e) {
    return "string" == typeof e ? e : e ? ry(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
  }
  function rb(e, t) {
    let n = e1(),
      r = eJ();
    if (!n) return;
    let {
      beforeBreadcrumb: a = null,
      maxBreadcrumbs: i = 100
    } = n.getOptions();
    if (i <= 0) return;
    let o = {
        timestamp: eN(),
        ...e
      },
      l = a ? I(() => a(o, t)) : o;
    null !== l && (n.emit && n.emit("beforeAddBreadcrumb", l, t), r.addBreadcrumb(l, i));
  }
  function r_(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
  }
  function rS(e) {
    return "isRelative" in e;
  }
  function rw(e, t) {
    let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
      r = t ?? (n ? "thismessage:/" : void 0);
    try {
      if ("canParse" in URL && !URL.canParse(e, r)) return;
      let t = new URL(e, r);
      if (n) return {
        isRelative: n,
        pathname: t.pathname,
        search: t.search,
        hash: t.hash
      };
      return t;
    } catch {}
  }
  function rE(e) {
    if (rS(e)) return e.pathname;
    let t = new URL(e);
    return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString();
  }
  function rx(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
      r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: n,
      hash: r,
      relative: t[5] + n + r
    };
  }
  function rk(e) {
    return e.split(/[?#]/, 1)[0];
  }
  function rP(e, t = !0) {
    if (e.startsWith("data:")) {
      let n = e.match(/^data:([^;,]+)/),
        r = n ? n[1] : "text/plain",
        a = e.includes(";base64,"),
        i = e.indexOf(","),
        o = "";
      if (t && -1 !== i) {
        let t = e.slice(i + 1);
        o = t.length > 10 ? `${t.slice(0, 10)}... [truncated]` : t;
      }
      return `data:${r}${a ? ",base64" : ""}${o ? `,${o}` : ""}`;
    }
    return e;
  }
  function rT() {
    if (!P.document) return;
    let e = ru.bind(null, "dom"),
      t = rR(e, !0);
    P.document.addEventListener("click", t, !1), P.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
      let n = P[t]?.prototype;
      n?.hasOwnProperty?.("addEventListener") && (et(n, "addEventListener", function (t) {
        return function (n, r, a) {
          if ("click" === n || "keypress" == n) try {
            let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
              i = r[n] = r[n] || {
                refCount: 0
              };
            if (!i.handler) {
              let r = rR(e);
              i.handler = r, t.call(this, n, r, a);
            }
            i.refCount++;
          } catch {}
          return t.call(this, n, r, a);
        };
      }), et(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          if ("click" === t || "keypress" == t) try {
            let n = this.__sentry_instrumentation_handlers__ || {},
              a = n[t];
            a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__);
          } catch {}
          return e.call(this, t, n, r);
        };
      }));
    });
  }
  function rR(e, t = !1) {
    return n => {
      var r;
      if (!n || n._sentryCaptured) return;
      let a = function (e) {
        try {
          return e.target;
        } catch {
          return null;
        }
      }(n);
      if (r = n.type, "keypress" === r && (!a?.tagName || "INPUT" !== a.tagName && "TEXTAREA" !== a.tagName && !a.isContentEditable && 1)) return;
      en(n, "_sentryCaptured", !0), a && !a._sentryId && en(a, "_sentryId", ek());
      let i = "keypress" === n.type ? "input" : n.type;
      !function (e) {
        if (e.type !== f) return !1;
        try {
          if (!e.target || e.target._sentryId !== p) return !1;
        } catch {}
        return !0;
      }(n) && (e({
        event: n,
        name: i,
        global: t
      }), f = n.type, p = a ? a._sentryId : void 0), clearTimeout(d), d = P.setTimeout(() => {
        p = void 0, f = void 0;
      }, 1e3);
    };
  }
  let rO = "__sentry_xhr_v3__";
  function rC(e) {
    rl("xhr", e), rs("xhr", rN);
  }
  function rN() {
    if (!P.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
      apply(e, t, n) {
        let r = Error(),
          a = 1e3 * eA(),
          i = X(n[0]) ? n[0].toUpperCase() : void 0,
          o = function (e) {
            if (X(e)) return e;
            try {
              return e.toString();
            } catch {}
          }(n[1]);
        if (!i || !o) return e.apply(t, n);
        t[rO] = {
          method: i,
          url: o,
          request_headers: {}
        }, "POST" === i && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
        let l = () => {
          let e = t[rO];
          if (e && 4 === t.readyState) {
            try {
              e.status_code = t.status;
            } catch {}
            ru("xhr", {
              endTimestamp: 1e3 * eA(),
              startTimestamp: a,
              xhr: t,
              virtualError: r
            });
          }
        };
        return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
          apply: (e, t, n) => (l(), e.apply(t, n))
        }) : t.addEventListener("readystatechange", l), t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            let [r, a] = n,
              i = t[rO];
            return i && X(r) && X(a) && (i.request_headers[r.toLowerCase()] = a), e.apply(t, n);
          }
        }), e.apply(t, n);
      }
    }), e.send = new Proxy(e.send, {
      apply(e, t, n) {
        let r = t[rO];
        return r && (void 0 !== n[0] && (r.body = n[0]), ru("xhr", {
          startTimestamp: 1e3 * eA(),
          xhr: t
        })), e.apply(t, n);
      }
    });
  }
  function rA(e) {
    let t = "history";
    rl(t, e), rs(t, rI);
  }
  function rI() {
    function e(e) {
      return function (...t) {
        let n = t.length > 2 ? t[2] : void 0;
        if (n) {
          let r = h,
            a = function (e) {
              try {
                return new URL(e, P.location.origin).toString();
              } catch {
                return e;
              }
            }(String(n));
          if (h = a, r === a) return e.apply(this, t);
          ru("history", {
            from: r,
            to: a
          });
        }
        return e.apply(this, t);
      };
    }
    P.addEventListener("popstate", () => {
      let e = P.location.href,
        t = h;
      h = e, t === e || ru("history", {
        from: t,
        to: e
      });
    }), "history" in P && P.history && (et(P.history, "pushState", e), et(P.history, "replaceState", e));
  }
  function rL(e, t = {}) {
    if (!e) return "<unknown>";
    try {
      let n,
        r = e,
        a = [],
        i = 0,
        o = 0,
        l = Array.isArray(t) ? t : t.keyAttrs,
        s = !Array.isArray(t) && t.maxStringLength || 80;
      for (; r && i++ < 5 && (n = function (e, t) {
        let n = [];
        if (!e?.tagName) return "";
        if ("u" > typeof HTMLElement && e instanceof HTMLElement && e.dataset) {
          if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
          if (e.dataset.sentryElement) return e.dataset.sentryElement;
        }
        n.push(e.tagName.toLowerCase());
        let r = t?.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
        if (r?.length) r.forEach(e => {
          n.push(`[${e[0]}="${e[1]}"]`);
        });else {
          e.id && n.push(`#${e.id}`);
          let t = e.className;
          if (t && X(t)) for (let e of t.split(/\s+/)) n.push(`.${e}`);
        }
        for (let t of ["aria-label", "type", "name", "title", "alt"]) {
          let r = e.getAttribute(t);
          r && n.push(`[${t}="${r}"]`);
        }
        return n.join("");
      }(r, l), "html" !== n && (!(i > 1) || !(o + 3 * a.length + n.length >= s)));) a.push(n), o += n.length, r = r.parentNode;
      return a.reverse().join(" > ");
    } catch {
      return "<unknown>";
    }
  }
  let rj = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    rM = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
  function rD(e) {
    return function (...t) {
      let n = t[0];
      return t[0] = rn(n, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${ey(e)}`
        }
      }), e.apply(this, t);
    };
  }
  function r$(e) {
    return function (t) {
      return e.apply(this, [rn(t, {
        mechanism: {
          data: {
            handler: ey(e)
          },
          handled: !1,
          type: "auto.browser.browserapierrors.requestAnimationFrame"
        }
      })]);
    };
  }
  function rz(e) {
    return function (...t) {
      let n = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
        e in n && "function" == typeof n[e] && et(n, e, function (t) {
          let n = {
              mechanism: {
                data: {
                  handler: ey(t)
                },
                handled: !1,
                type: `auto.browser.browserapierrors.xhr.${e}`
              }
            },
            r = ea(t);
          return r && (n.mechanism.data.handler = ey(r)), rn(t, n);
        });
      }), e.apply(this, t);
    };
  }
  function rF(e, t) {
    let n = e.attributes ?? (e.attributes = {});
    Object.entries(t).forEach(([e, t]) => {
      null == t || e in n || (n[e] = t);
    });
  }
  function rU() {
    try {
      let e = P.Intl;
      if (!e) return;
      let t = e.DateTimeFormat().resolvedOptions();
      return {
        locale: t.locale,
        timezone: t.timeZone,
        calendar: t.calendar
      };
    } catch {
      return;
    }
  }
  let rB = null;
  function rH(e) {
    let t = "error";
    rl(t, e), rs(t, rW);
  }
  function rW() {
    rB = P.onerror, P.onerror = function (e, t, n, r, a) {
      return ru("error", {
        column: r,
        error: a,
        line: n,
        msg: e,
        url: t
      }), !!rB && rB.apply(this, arguments);
    }, P.onerror.__SENTRY_INSTRUMENTED__ = !0;
  }
  let rq = null;
  function rV(e) {
    let t = "unhandledrejection";
    rl(t, e), rs(t, rX);
  }
  function rX() {
    rq = P.onunhandledrejection, P.onunhandledrejection = function (e) {
      return ru("unhandledrejection", e), !rq || rq.apply(this, arguments);
    }, P.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
  }
  function rQ(e) {
    rj && $(`Global Handler attached: ${e}`);
  }
  function rG() {
    let e = e1();
    return e?.getOptions() || {
      stackParser: () => [],
      attachStacktrace: !1
    };
  }
  function rY(e) {
    return Array.isArray(e.errors);
  }
  function rK(e, t, n) {
    e.mechanism = {
      handled: !0,
      type: "auto.core.linked_errors",
      ...(rY(n) && {
        is_exception_group: !0
      }),
      ...e.mechanism,
      exception_id: t
    };
  }
  function rJ(e, t, n, r) {
    e.mechanism = {
      handled: !0,
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r
    };
  }
  function rZ(e, t, n, r) {
    let a = {
      filename: e,
      function: "<anonymous>" === t ? "?" : t,
      in_app: !0
    };
    return void 0 !== n && (a.lineno = n), void 0 !== r && (a.colno = r), a;
  }
  let r0 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    r1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    r2 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    r3 = /at (.+?) ?\(data:(.+?),/,
    r4 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    r5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    r8 = eh([30, e => {
      let t = e.match(r3);
      if (t) return {
        filename: `<data:${t[2]}>`,
        function: t[1]
      };
      let n = r0.exec(e);
      if (n) {
        let [, e, t, r] = n;
        return rZ(e, "?", +t, +r);
      }
      let r = r1.exec(e);
      if (r) {
        if (r[2]?.indexOf("eval") === 0) {
          let e = r2.exec(r[2]);
          e && (r[2] = e[1], r[3] = e[2], r[4] = e[3]);
        }
        let [e, t] = r6(r[1] || "?", r[2]);
        return rZ(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    }], [50, e => {
      let t = r4.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
          let e = r5.exec(t[3]);
          e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "");
        }
        let e = t[3],
          n = t[1] || "?";
        return [n, e] = r6(n, e), rZ(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
      }
    }]),
    r6 = (e, t) => {
      let n = -1 !== e.indexOf("safari-extension"),
        r = -1 !== e.indexOf("safari-web-extension");
      return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
    },
    r9 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    r7 = {};
  function ae(e, t = function (e) {
    let t = r7[e];
    if (t) return t;
    let n = P[e];
    if (rf(n)) return r7[e] = n.bind(P);
    let r = P.document;
    if (r && "function" == typeof r.createElement) try {
      let t = r.createElement("iframe");
      t.hidden = !0, r.head.appendChild(t);
      let a = t.contentWindow;
      a?.[e] && (n = a[e]), r.head.removeChild(t);
    } catch (t) {
      r9 && z(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
    }
    return n ? r7[e] = n.bind(P) : n;
  }("fetch")) {
    let n = 0,
      r = 0;
    async function a(a) {
      let i = a.body.length;
      n += i, r++;
      let o = {
        body: a.body,
        method: "POST",
        referrerPolicy: "strict-origin",
        headers: e.headers,
        keepalive: n <= 6e4 && r < 15,
        ...e.fetchOptions
      };
      try {
        let n = await t(e.url, o);
        return {
          statusCode: n.status,
          headers: {
            "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": n.headers.get("Retry-After")
          }
        };
      } catch (e) {
        throw r7.fetch = void 0, e;
      } finally {
        n -= i, r--;
      }
    }
    return function (e, t, n = nL(e.bufferSize || 64)) {
      let r = {};
      return {
        send: function (a) {
          let i = [];
          if (t1(a, (t, n) => {
            let a = t4(n);
            !function (e, t, n = eu()) {
              return (e[t] || e.all || 0) > n;
            }(r, a) ? i.push(t) : e.recordDroppedEvent("ratelimit_backoff", a);
          }), 0 === i.length) return Promise.resolve({});
          let o = tZ(a[0], i),
            l = t => {
              var n;
              if (n = ["client_report"], t1(o, (e, t) => n.includes(t))) {
                C && z(`Dropping client report. Will not send outcomes (reason: ${t}).`);
                return;
              }
              t1(o, (n, r) => {
                e.recordDroppedEvent(t, t4(r));
              });
            };
          return n.add(() => t({
            body: function (e) {
              let [t, n] = e,
                r = JSON.stringify(t);
              function a(e) {
                "string" == typeof r ? r = "string" == typeof e ? r + e : [t2(r), e] : r.push("string" == typeof e ? t2(e) : e);
              }
              for (let e of n) {
                let [t, n] = e;
                if (a(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) a(n);else {
                  let e;
                  try {
                    e = JSON.stringify(n);
                  } catch {
                    e = JSON.stringify(eb(n));
                  }
                  a(e);
                }
              }
              return "string" == typeof r ? r : function (e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  n = 0;
                for (let r of e) t.set(r, n), n += r.length;
                return t;
              }(r);
            }(o)
          }).then(e => (413 === e.statusCode ? (C && F("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), l("send_error")) : (C && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && z(`Sentry responded with status code ${e.statusCode} to sent event.`), r = function (e, {
            statusCode: t,
            headers: n
          }, r = eu()) {
            let a = {
                ...e
              },
              i = n?.["x-sentry-rate-limits"],
              o = n?.["retry-after"];
            if (i) for (let e of i.trim().split(",")) {
              let [t, n,,, i] = e.split(":", 5),
                o = parseInt(t, 10),
                l = (isNaN(o) ? 60 : o) * 1e3;
              if (n) for (let e of n.split(";")) "metric_bucket" === e ? (!i || i.split(";").includes("custom")) && (a[e] = r + l) : a[e] = r + l;else a.all = r + l;
            } else o ? a.all = r + function (e, t = eu()) {
              let n = parseInt(`${e}`, 10);
              if (!isNaN(n)) return 1e3 * n;
              let r = Date.parse(`${e}`);
              return isNaN(r) ? 6e4 : r - t;
            }(o, r) : 429 === t && (a.all = r + 6e4);
            return a;
          }(r, e)), e), e => {
            throw l("network_error"), C && F("Encountered error running transport request:", e), e;
          })).then(e => e, e => {
            if (e === nI) return C && F("Skipped sending event because buffer is full."), l("queue_overflow"), Promise.resolve({});
            throw e;
          });
        },
        flush: e => n.drain(e)
      };
    }(e, a, nL(e.bufferSize || 40));
  }
  let at = /^HTML(\w*)Element$/;
  function an(e) {
    if ("u" > typeof window && e === window) return "[Window]";
    if ("u" > typeof document && e === document) return "[Document]";
    if (function (e) {
      if ("u" < typeof Element) return !1;
      try {
        return e instanceof Element;
      } catch {
        return !1;
      }
    }(e)) {
      let t,
        n = (t = Object.getPrototypeOf(e), t?.constructor ? t.constructor.name : "null prototype");
      if (at.test(n)) return `[HTMLElement: ${rL(e)}]`;
    }
  }
  function ar(e) {
    let t;
    return [((e = {}) => ({
      ...((e = {}) => {
        let t;
        return {
          name: "EventFilters",
          setup(n) {
            t = nS(e, n.getOptions());
          },
          processEvent: (n, r, a) => (t || (t = nS(e, a.getOptions())), !function (e, t) {
            if (e.type) {
              if ("transaction" === e.type && function (e, t) {
                if (!t?.length) return !1;
                let n = e.transaction;
                return !!n && ex(n, t);
              }(e, t.ignoreTransactions)) return C && z(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${eT(e)}`), !0;
            } else {
              var n, r, a;
              if (n = e, r = t.ignoreErrors, r?.length && nb(n).some(e => ex(e, r))) return C && z(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${eT(e)}`), !0;
              if (a = e, a.exception?.values?.length && !a.message && !a.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return C && z(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${eT(e)}`), !0;
              if (function (e, t) {
                if (!t?.length) return !1;
                let n = nw(e);
                return !!n && ex(n, t);
              }(e, t.denyUrls)) return C && z(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${eT(e)}.
Url: ${nw(e)}`), !0;
              if (!function (e, t) {
                if (!t?.length) return !0;
                let n = nw(e);
                return !n || ex(n, t);
              }(e, t.allowUrls)) return C && z(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${eT(e)}.
Url: ${nw(e)}`), !0;
            }
            return !1;
          }(n, t) ? n : null)
        };
      })(e),
      name: "InboundFilters"
    }))(), {
      name: "FunctionToString",
      setupOnce() {
        c = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...e) {
            let t = ea(this),
              n = nE.has(e1()) && void 0 !== t ? t : this;
            return c.apply(n, e);
          };
        } catch {}
      },
      setup(e) {
        nE.set(e, !0);
      }
    }, {
      name: "ConversationId",
      setup(e) {
        e.on("spanStart", e => {
          let t = eK().getScopeData(),
            n = eJ().getScopeData(),
            r = t.conversationId || n.conversationId;
          if (r) {
            let {
              op: t,
              data: n,
              description: a
            } = tC(e);
            if (!t?.startsWith("gen_ai.") && !n["ai.operationId"] && !a?.startsWith("ai.")) return;
            e.setAttribute("gen_ai.conversation.id", r);
          }
        });
      }
    }, ((e = {}) => {
      let t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        unregisterOriginalCallbacks: !1,
        ...e
      };
      return {
        name: "BrowserApiErrors",
        setupOnce() {
          t.setTimeout && et(P, "setTimeout", rD), t.setInterval && et(P, "setInterval", rD), t.requestAnimationFrame && et(P, "requestAnimationFrame", r$), t.XMLHttpRequest && "XMLHttpRequest" in P && et(XMLHttpRequest.prototype, "send", rz);
          let e = t.eventTarget;
          e && (Array.isArray(e) ? e : rM).forEach(e => {
            var n, r;
            let a;
            return n = e, r = t, a = P[n]?.prototype, void (a?.hasOwnProperty?.("addEventListener") && (et(a, "addEventListener", function (e) {
              return function (t, a, i) {
                var o, l, s, u;
                try {
                  o = a, "function" == typeof o.handleEvent && (a.handleEvent = rn(a.handleEvent, {
                    mechanism: {
                      data: {
                        handler: ey(a),
                        target: n
                      },
                      handled: !1,
                      type: "auto.browser.browserapierrors.handleEvent"
                    }
                  }));
                } catch {}
                return r.unregisterOriginalCallbacks && (l = this, s = t, u = a, l && "object" == typeof l && "removeEventListener" in l && "function" == typeof l.removeEventListener && l.removeEventListener(s, u)), e.apply(this, [t, rn(a, {
                  mechanism: {
                    data: {
                      handler: ey(a),
                      target: n
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.addEventListener"
                  }
                }), i]);
              };
            }), et(a, "removeEventListener", function (e) {
              return function (t, n, r) {
                try {
                  let a = n.__sentry_wrapped__;
                  a && e.call(this, t, a, r);
                } catch {}
                return e.call(this, t, n, r);
              };
            })));
          });
        }
      };
    })(), ((e = {}) => {
      let t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
      };
      return {
        name: "Breadcrumbs",
        setup(e) {
          var n, r, a, i, o, l, s;
          let u;
          t.console && (n = e, rl(u = "console", function (e) {
            var t;
            if (e1() !== n) return;
            let r = {
              category: "console",
              data: {
                arguments: e.args,
                logger: "console"
              },
              level: "warn" === (t = e.level) ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log",
              message: ew(e.args, " ")
            };
            if ("assert" === e.level) if (!1 !== e.args[0]) return;else r.message = `Assertion failed: ${ew(e.args.slice(1), " ") || "console.assert"}`, r.data.arguments = e.args.slice(1);
            rb(r, {
              input: e.args,
              level: e.level
            });
          }), rs(u, rd)), t.dom && (rl("dom", (r = e, a = t.dom, function (e) {
            let t, n;
            if (e1() !== r) return;
            let i = "object" == typeof a ? a.serializeAttribute : void 0,
              o = "object" == typeof a && "number" == typeof a.maxStringLength ? a.maxStringLength : void 0;
            o && o > 1024 && (rj && z(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof i && (i = [i]);
            try {
              var l;
              let r = e.event,
                a = (l = r) && l.target ? r.target : r;
              t = rL(a, {
                keyAttrs: i,
                maxStringLength: o
              }), n = re(a);
            } catch {
              t = "<unknown>";
            }
            if (0 === t.length) return;
            let s = {
              category: `ui.${e.name}`,
              message: t
            };
            n && (s.data = {
              "ui.component_name": n
            }), rb(s, {
              event: e.event,
              name: e.name,
              global: e.global
            });
          })), rs("dom", rT)), t.xhr && rC((i = e, function (e) {
            if (e1() !== i) return;
            let {
                startTimestamp: t,
                endTimestamp: n
              } = e,
              r = e.xhr[rO];
            if (!t || !n || !r) return;
            let {
                method: a,
                url: o,
                status_code: l,
                body: s
              } = r,
              u = {
                xhr: e.xhr,
                input: s,
                startTimestamp: t,
                endTimestamp: n
              },
              c = {
                category: "xhr",
                data: {
                  method: a,
                  url: o,
                  status_code: l
                },
                type: "http",
                level: r_(l)
              };
            i.emit("beforeOutgoingRequestBreadcrumb", c, u), rb(c, u);
          })), t.fetch && rp((o = e, function (e) {
            if (e1() !== o) return;
            let {
              startTimestamp: t,
              endTimestamp: n
            } = e;
            if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method)) if (e.error) {
              let r = {
                  data: e.error,
                  input: e.args,
                  startTimestamp: t,
                  endTimestamp: n
                },
                a = {
                  category: "fetch",
                  data: e.fetchData,
                  level: "error",
                  type: "http"
                };
              o.emit("beforeOutgoingRequestBreadcrumb", a, r), rb(a, r);
            } else {
              let r = e.response,
                a = {
                  ...e.fetchData,
                  status_code: r?.status
                },
                i = {
                  input: e.args,
                  response: r,
                  startTimestamp: t,
                  endTimestamp: n
                },
                l = {
                  category: "fetch",
                  data: a,
                  type: "http",
                  level: r_(a.status_code)
                };
              o.emit("beforeOutgoingRequestBreadcrumb", l, i), rb(l, i);
            }
          })), t.history && rA((l = e, function (e) {
            if (e1() !== l) return;
            let t = e.from,
              n = e.to,
              r = rx(P.location.href),
              a = t ? rx(t) : void 0,
              i = rx(n);
            a?.path || (a = r), r.protocol === i.protocol && r.host === i.host && (n = i.relative), r.protocol === a.protocol && r.host === a.host && (t = a.relative), rb({
              category: "navigation",
              data: {
                from: t,
                to: n
              }
            });
          })), t.sentry && e.on("beforeSendEvent", (s = e, function (e) {
            e1() === s && rb({
              category: `sentry.${"transaction" === e.type ? "transaction" : "event"}`,
              event_id: e.event_id,
              level: e.level,
              message: eT(e)
            }, {
              event: e
            });
          }));
        }
      };
    })(), ((e = {}) => {
      let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
      };
      return {
        name: "GlobalHandlers",
        setupOnce() {
          Error.stackTraceLimit = 50;
        },
        setup(e) {
          var n, r;
          t.onerror && (n = e, rH(e => {
            var t, r, a, i;
            let o,
              l,
              s,
              u,
              c,
              {
                stackParser: d,
                attachStacktrace: f
              } = rG();
            if (e1() !== n || rt > 0) return;
            let {
                msg: p,
                url: h,
                line: m,
                column: g,
                error: y
              } = e,
              v = (t = n6(d, y || p, void 0, f, !1), r = h, a = m, i = g, 0 === (c = (u = (s = (l = (o = t.exception = t.exception || {}).values = o.values || [])[0] = l[0] || {}).stacktrace = s.stacktrace || {}).frames = u.frames || []).length && c.push({
                colno: i,
                lineno: a,
                filename: function (e) {
                  if (X(e) && 0 !== e.length) return e.startsWith("data:") ? `<${rP(e, !1)}>` : e;
                }(r) ?? n7(),
                function: "?",
                in_app: !0
              }), t);
            v.level = "error", nd(v, {
              originalException: y,
              mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onerror"
              }
            });
          }), rQ("onerror")), t.onunhandledrejection && (r = e, rV(e => {
            var t;
            let {
              stackParser: n,
              attachStacktrace: a
            } = rG();
            if (e1() !== r || rt > 0) return;
            let i = function (e) {
                if (G(e)) return e;
                try {
                  if ("reason" in e) return e.reason;
                  if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                } catch {}
                return e;
              }(e),
              o = G(i) ? (t = i, {
                exception: {
                  values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                  }]
                }
              }) : n6(n, i, void 0, a, !0);
            o.level = "error", nd(o, {
              originalException: i,
              mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onunhandledrejection"
              }
            });
          }), rQ("onunhandledrejection"));
        }
      };
    })(), ((e = {}) => {
      let t = e.limit || 5,
        n = e.key || "cause";
      return {
        name: "LinkedErrors",
        preprocessEvent(e, r, a) {
          !function (e, t, n, r, a, i) {
            if (!a.exception?.values || !i || !Z(i.originalException, Error)) return;
            let o = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
            o && (a.exception.values = function e(t, n, r, a, i, o, l, s) {
              if (o.length >= r + 1) return o;
              let u = [...o];
              if (Z(a[i], Error)) {
                rK(l, s, a);
                let o = t(n, a[i]),
                  c = u.length;
                rJ(o, i, c, s), u = e(t, n, r, a[i], i, [o, ...u], o, c);
              }
              return rY(a) && a.errors.forEach((o, c) => {
                if (Z(o, Error)) {
                  rK(l, s, a);
                  let d = t(n, o),
                    f = u.length;
                  rJ(d, `errors[${c}]`, f, s), u = e(t, n, r, o, i, [d, ...u], d, f);
                }
              }), u;
            }(e, t, r, i.originalException, n, a.exception.values, o, 0));
          }(n2, a.getOptions().stackParser, n, t, e, r);
        }
      };
    })(), {
      name: "Dedupe",
      processEvent(e) {
        if (e.type) return e;
        try {
          var n, r, a, i, o, l;
          let s, u, c, d;
          if (n = e, (r = t) && (a = n, i = r, s = a.message, u = i.message, (s || u) && (!s || u) && (s || !u) && s === u && nk(a, i) && nx(a, i) && 1 || (o = n, l = r, c = nP(l), d = nP(o), c && d && c.type === d.type && c.value === d.value && nk(o, l) && nx(o, l)))) return C && z("Event dropped due to being a duplicate of previously captured event."), null;
        } catch {}
        return t = e;
      }
    }, {
      name: "HttpContext",
      preprocessEvent(e) {
        if (!P.navigator && !P.location && !P.document) return;
        let t = rr(),
          n = {
            ...t.headers,
            ...e.request?.headers
          };
        e.request = {
          ...t,
          ...e.request,
          headers: n
        };
      },
      processSegmentSpan(e) {
        if (!P.navigator && !P.location && !P.document) return;
        let t = rr();
        rF(e, {
          "url.full": t.url || void 0,
          "http.request.header.user_agent": t.headers["User-Agent"],
          "http.request.header.referer": t.headers.Referer
        });
      }
    }, {
      name: "CultureContext",
      preprocessEvent(e) {
        let t = rU();
        t && (e.contexts = {
          ...e.contexts,
          culture: {
            ...t,
            ...e.contexts?.culture
          }
        });
      },
      processSegmentSpan(e) {
        let t = rU();
        t && rF(e, {
          "culture.locale": t.locale,
          "culture.timezone": t.timezone,
          "culture.calendar": t.calendar
        });
      }
    }, ((e = {}) => {
      let t = e.lifecycle ?? "route";
      return {
        name: "BrowserSession",
        setupOnce() {
          if (void 0 === P.document) {
            rj && z("Using the `browserSessionIntegration` in non-browser environments is not supported.");
            return;
          }
          nf({
            ignoreDuration: !0
          }), nm();
          let e = eJ(),
            n = e.getUser();
          e.addScopeListener(e => {
            let t = e.getUser();
            (n?.id !== t?.id || n?.ip_address !== t?.ip_address) && (nm(), n = t);
          }), "route" === t && rA(({
            from: e,
            to: t
          }) => {
            e !== t && (nf({
              ignoreDuration: !0
            }), nm());
          });
        }
      };
    })()];
  }
  var aa = e.i(513679);
  function ai(e) {
    return Y(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e ? "[SyntheticEvent]" : an(e);
  }
  let ao = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    al = {
      idleTimeout: 1e3,
      finalTimeout: 3e4,
      childSpanTimeout: 15e3
    };
  function as(e, t = {}) {
    let n,
      r,
      a = new Map(),
      i = !1,
      o = "externalFinish",
      l = !t.disableAutoFinish,
      s = [],
      {
        idleTimeout: u = al.idleTimeout,
        finalTimeout: c = al.finalTimeout,
        childSpanTimeout: d = al.childSpanTimeout,
        beforeSpanEnd: f,
        trimIdleSpanEndTimestamp: p = !0
      } = t,
      h = e1();
    if (!h || !tl()) {
      let e = new tK(),
        t = {
          sample_rate: "0",
          sampled: "false",
          ...tY(e)
        };
      return en(e, tX, t), e;
    }
    let m = eK(),
      g = tW(),
      y = (n = ne(e), eU(eK(), n), C && $("[Tracing] Started span is an idle span"), n);
    function v() {
      r && (clearTimeout(r), r = void 0);
    }
    function b(e) {
      v(), r = setTimeout(() => {
        !i && 0 === a.size && l && (o = "idleTimeout", y.end(e));
      }, u);
    }
    function _(e) {
      r = setTimeout(() => {
        !i && l && (o = "heartbeatFailed", y.end(e));
      }, d);
    }
    function S(e) {
      i = !0, a.clear(), s.forEach(e => e()), eU(m, g);
      let t = tC(y),
        {
          start_timestamp: n
        } = t;
      if (!n) return;
      t.data[e6] || y.setAttribute(e6, o);
      let r = t.status;
      r && "unknown" !== r || y.setStatus({
        code: 1
      }), $(`[Tracing] Idle span "${t.op}" finished`);
      let l = tU(y).filter(e => e !== y),
        d = 0;
      l.forEach(t => {
        t.isRecording() && (t.setStatus({
          code: 2,
          message: "cancelled"
        }), t.end(e), C && $("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
        let {
            timestamp: n = 0,
            start_timestamp: r = 0
          } = tC(t),
          a = r <= e,
          i = n - r <= (c + u) / 1e3;
        if (C) {
          let e = JSON.stringify(t, void 0, 2);
          a ? i || $("[Tracing] Discarding span since it finished after idle span final timeout", e) : $("[Tracing] Discarding span since it happened after idle span was finished", e);
        }
        (!i || !a) && (y[t$] && y[t$].delete(t), d++);
      }), d > 0 && y.setAttribute("sentry.idle_span_discarded_spans", d);
    }
    return y.end = new Proxy(y.end, {
      apply(e, t, n) {
        if (f && f(y), t instanceof tK) return;
        let [r, ...a] = n,
          i = tR(r || eA()),
          o = tU(y).filter(e => e !== y),
          l = tC(y);
        if (!o.length || !p) return S(i), Reflect.apply(e, t, [i, ...a]);
        let s = h.getOptions().ignoreSpans,
          u = o?.reduce((e, t) => {
            let n = tC(t);
            return !n.timestamp || s && tu({
              description: n.description,
              op: n.op,
              attributes: n.data
            }, s) ? e : e ? Math.max(e, n.timestamp) : n.timestamp;
          }, void 0),
          d = l.start_timestamp,
          m = Math.min(d ? d + c / 1e3 : 1 / 0, Math.max(d || -1 / 0, Math.min(i, u || 1 / 0)));
        return S(m), Reflect.apply(e, t, [m, ...a]);
      }
    }), s.push(h.on("spanStart", e => {
      var t;
      !(i || e === y || tC(e).timestamp || e instanceof t6 && e.isStandaloneSpan()) && tU(y).includes(e) && (t = e.spanContext().spanId, v(), a.set(t, !0), _(eA() + d / 1e3));
    })), s.push(h.on("spanEnd", e => {
      if (!i) {
        var t;
        t = e.spanContext().spanId, a.has(t) && a.delete(t), 0 === a.size && b(eA() + u / 1e3);
      }
    })), s.push(h.on("idleSpanEnableAutoFinish", e => {
      e === y && (l = !0, b(), a.size && _());
    })), t.disableAutoFinish || b(), setTimeout(() => {
      i || (y.setStatus({
        code: 2,
        message: "deadline_exceeded"
      }), o = "finalTimeout", y.end());
    }, c), y;
  }
  let au = !1,
    ac = (e, t, n, r) => {
      let a, i;
      return o => {
        if (t.value >= 0 && (o || r) && ((i = t.value - (a ?? 0)) || void 0 === a)) {
          var l;
          a = t.value, t.delta = i, l = t.value, t.rating = l > n[1] ? "poor" : l > n[0] ? "needs-improvement" : "good", e(t);
        }
      };
    },
    ad = (e = !0) => {
      let t = P.performance?.getEntriesByType?.("navigation")[0];
      if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t;
    },
    af = () => {
      let e = ad();
      return e?.activationStart ?? 0;
    };
  function ap(e, t, n) {
    P.document && P.addEventListener(e, t, n);
  }
  function ah(e, t, n) {
    P.document && P.removeEventListener(e, t, n);
  }
  let am = -1,
    ag = new Set(),
    ay = e => {
      if (("pagehide" === e.type || P.document?.visibilityState === "hidden") && am > -1) {
        if ("visibilitychange" === e.type || "pagehide" === e.type) for (let e of ag) e();
        isFinite(am) || (am = "visibilitychange" === e.type ? e.timeStamp : 0, ah("prerenderingchange", ay, !0));
      }
    },
    av = () => {
      if (P.document && am < 0) {
        let e = af();
        am = (P.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0]?.startTime) ?? (P.document?.visibilityState !== "hidden" || P.document?.prerendering ? 1 / 0 : 0), ap("visibilitychange", ay, !0), ap("pagehide", ay, !0), ap("prerenderingchange", ay, !0);
      }
      return {
        get firstHiddenTime() {
          return am;
        },
        onHidden(e) {
          ag.add(e);
        }
      };
    },
    ab = (e, t = -1) => {
      let n = ad(),
        r = "navigate";
      return n && (P.document?.prerendering || af() > 0 ? r = "prerender" : P.document?.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
        name: e,
        value: t,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
        navigationType: r
      };
    },
    a_ = new WeakMap();
  function aS(e, t) {
    try {
      return a_.get(e) || a_.set(e, new t()), a_.get(e);
    } catch (e) {
      return new t();
    }
  }
  class aw {
    constructor() {
      this._sessionValue = 0, this._sessionEntries = [];
    }
    _processEntry(e) {
      if (e.hadRecentInput) return;
      let t = this._sessionEntries[0],
        n = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift?.(e);
    }
  }
  let aE = (e, t, n = {}) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          let r = new PerformanceObserver(e => {
            Promise.resolve().then(() => {
              t(e.getEntries());
            });
          });
          return r.observe({
            type: e,
            buffered: !0,
            ...n
          }), r;
        }
      } catch {}
    },
    ax = e => {
      let t = !1;
      return () => {
        t || (e(), t = !0);
      };
    },
    ak = e => {
      P.document?.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e();
    },
    aP = [1800, 3e3],
    aT = [.1, .25],
    aR = 0,
    aO = 1 / 0,
    aC = 0,
    aN = e => {
      e.forEach(e => {
        e.interactionId && (aO = Math.min(aO, e.interactionId), aR = (aC = Math.max(aC, e.interactionId)) ? (aC - aO) / 7 + 1 : 0);
      });
    },
    aA = () => m ? aR : performance.interactionCount || 0,
    aI = 0;
  class aL {
    constructor() {
      this._longestInteractionList = [], this._longestInteractionMap = new Map();
    }
    _resetInteractions() {
      aI = aA(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
      let e = Math.min(this._longestInteractionList.length - 1, Math.floor((aA() - aI) / 50));
      return this._longestInteractionList[e];
    }
    _processEntry(e) {
      if (this._onBeforeProcessingEntry?.(e), !(e.interactionId || "first-input" === e.entryType)) return;
      let t = this._longestInteractionList.at(-1),
        n = this._longestInteractionMap.get(e.interactionId);
      if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
        if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
          id: e.interactionId,
          entries: [e],
          _latency: e.duration
        }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > 10) for (let e of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(e.id);
        this._onAfterProcessingINPCandidate?.(n);
      }
    }
  }
  let aj = e => {
      let t = P.requestIdleCallback || P.setTimeout;
      P.document?.visibilityState === "hidden" ? e() : (ap("visibilitychange", e = ax(e), {
        once: !0,
        capture: !0
      }), ap("pagehide", e, {
        once: !0,
        capture: !0
      }), t(() => {
        e(), ah("visibilitychange", e, {
          capture: !0
        }), ah("pagehide", e, {
          capture: !0
        });
      }));
    },
    aM = [200, 500];
  class aD {
    _processEntry(e) {
      this._onBeforeProcessingEntry?.(e);
    }
  }
  let a$ = [2500, 4e3],
    az = [800, 1800],
    aF = e => {
      P.document?.prerendering ? ak(() => aF(e)) : P.document?.readyState !== "complete" ? addEventListener("load", () => aF(e), !0) : setTimeout(e);
    },
    aU = {},
    aB = {};
  function aH(e, t = !1) {
    return aJ("cls", e, aQ, g, t);
  }
  function aW(e, t = !1) {
    return aJ("lcp", e, aG, y, t);
  }
  function aq(e) {
    return aJ("inp", e, aK, b);
  }
  function aV(e, t) {
    var n;
    let r;
    return aZ(e, t), aB[e] || (r = {}, "event" === (n = e) && (r.durationThreshold = 0), aE(n, e => {
      aX(n, {
        entries: e
      });
    }, r), aB[e] = !0), a0(e, t);
  }
  function aX(e, t) {
    let n = aU[e];
    if (n?.length) for (let r of n) try {
      r(t);
    } catch (t) {
      r9 && F(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ey(r)}
Error:`, t);
    }
  }
  function aQ() {
    return ((e, t = {}) => {
      ((e, t = {}) => {
        ak(() => {
          let n,
            r = av(),
            a = ab("FCP"),
            i = aE("paint", e => {
              for (let t of e) "first-contentful-paint" === t.name && (i.disconnect(), t.startTime < r.firstHiddenTime && (a.value = Math.max(t.startTime - af(), 0), a.entries.push(t), n(!0)));
            });
          i && (n = ac(e, a, aP, t.reportAllChanges));
        });
      })(ax(() => {
        let n,
          r = ab("CLS", 0),
          a = av(),
          i = aS(t, aw),
          o = e => {
            for (let t of e) i._processEntry(t);
            i._sessionValue > r.value && (r.value = i._sessionValue, r.entries = i._sessionEntries, n());
          },
          l = aE("layout-shift", o);
        l && (n = ac(e, r, aT, t.reportAllChanges), a.onHidden(() => {
          o(l.takeRecords()), n(!0);
        }), P?.setTimeout?.(n));
      }));
    })(e => {
      aX("cls", {
        metric: e
      }), g = e;
    }, {
      reportAllChanges: !0
    });
  }
  function aG() {
    return ((e, t = {}) => {
      ak(() => {
        let n,
          r = av(),
          a = ab("LCP"),
          i = aS(t, aD),
          o = e => {
            for (let o of (t.reportAllChanges || (e = e.slice(-1)), e)) i._processEntry(o), o.startTime < r.firstHiddenTime && (a.value = Math.max(o.startTime - af(), 0), a.entries = [o], n());
          },
          l = aE("largest-contentful-paint", o);
        if (l) {
          n = ac(e, a, a$, t.reportAllChanges);
          let r = ax(() => {
              o(l.takeRecords()), l.disconnect(), n(!0);
            }),
            i = e => {
              e.isTrusted && (aj(r), ah(e.type, i, {
                capture: !0
              }));
            };
          for (let e of ["keydown", "click", "visibilitychange"]) ap(e, i, {
            capture: !0
          });
        }
      });
    })(e => {
      aX("lcp", {
        metric: e
      }), y = e;
    }, {
      reportAllChanges: !0
    });
  }
  function aY() {
    return ((e, t = {}) => {
      let n = ab("TTFB"),
        r = ac(e, n, az, t.reportAllChanges);
      aF(() => {
        let e = ad();
        e && (n.value = Math.max(e.responseStart - af(), 0), n.entries = [e], r(!0));
      });
    })(e => {
      aX("ttfb", {
        metric: e
      }), v = e;
    });
  }
  function aK() {
    return ((e, t = {}) => {
      if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
      let n = av();
      ak(() => {
        let r;
        "interactionCount" in performance || m || (m = aE("event", aN, {
          type: "event",
          buffered: !0,
          durationThreshold: 0
        }));
        let a = ab("INP"),
          i = aS(t, aL),
          o = e => {
            aj(() => {
              for (let t of e) i._processEntry(t);
              let t = i._estimateP98LongestInteraction();
              t && t._latency !== a.value && (a.value = t._latency, a.entries = t.entries, r());
            });
          },
          l = aE("event", o, {
            durationThreshold: t.durationThreshold ?? 40
          });
        r = ac(e, a, aM, t.reportAllChanges), l && (l.observe({
          type: "first-input",
          buffered: !0
        }), n.onHidden(() => {
          o(l.takeRecords()), r(!0);
        }));
      });
    })(e => {
      aX("inp", {
        metric: e
      }), b = e;
    });
  }
  function aJ(e, t, n, r, a = !1) {
    let i;
    return aZ(e, t), aB[e] || (i = n(), aB[e] = !0), r && t({
      metric: r
    }), a0(e, t, a ? i : void 0);
  }
  function aZ(e, t) {
    aU[e] = aU[e] || [], aU[e].push(t);
  }
  function a0(e, t, n) {
    return () => {
      n && n();
      let r = aU[e];
      if (!r) return;
      let a = r.indexOf(t);
      -1 !== a && r.splice(a, 1);
    };
  }
  function a1(e) {
    return "number" == typeof e && isFinite(e);
  }
  function a2(e, t, n, {
    ...r
  }) {
    let a = tC(e).start_timestamp;
    return a && a > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), nt(e, () => {
      let e = ne({
        startTime: t,
        ...r
      });
      return e && e.end(n), e;
    });
  }
  function a3(e) {
    let t,
      n = e1();
    if (!n) return;
    let {
        name: r,
        transaction: a,
        attributes: i,
        startTime: o
      } = e,
      {
        release: l,
        environment: s
      } = n.getOptions(),
      {
        userInfo: u
      } = n.getDataCollectionOptions(),
      c = n.getIntegrationByName("Replay"),
      d = c?.getReplayId(),
      f = eK(),
      p = f.getUser(),
      h = void 0 !== p ? p.email || p.id || p.ip_address : void 0;
    try {
      t = f.getScopeData().contexts.profile.profile_id;
    } catch {}
    return ne({
      name: r,
      attributes: {
        release: l,
        environment: s,
        user: h || void 0,
        profile_id: t || void 0,
        replay_id: d || void 0,
        transaction: a,
        "user_agent.original": P.navigator?.userAgent,
        "client.address": u ? "{{auto}}" : void 0,
        ...i
      },
      startTime: o,
      experimental: {
        standalone: !0
      }
    });
  }
  function a4() {
    return P.addEventListener && P.performance;
  }
  function a5(e) {
    return e / 1e3;
  }
  function a8(e) {
    try {
      return PerformanceObserver.supportedEntryTypes.includes(e);
    } catch {
      return !1;
    }
  }
  function a6(e, t) {
    let n,
      r,
      a = !1;
    function i(e) {
      !a && r && t(e, r.spanContext().spanId, r), a = !0;
    }
    ap("visibilitychange", n = e => {
      ("pagehide" === e.type || P.document?.visibilityState === "hidden") && (() => {
        i("pagehide");
      })();
    }, {
      capture: !0,
      once: !0
    }), ap("pagehide", n, {
      capture: !0,
      once: !0
    });
    let o = e.on("beforeStartNavigationSpan", (e, t) => {
        t?.isRedirect || (i("navigation"), o(), l());
      }),
      l = e.on("afterStartPageLoadSpan", e => {
        r = e, l();
      });
  }
  let a9 = [],
    a7 = new Map(),
    ie = new Map(),
    it = {
      click: "click",
      pointerdown: "click",
      pointerup: "click",
      mousedown: "click",
      mouseup: "click",
      touchstart: "click",
      touchend: "click",
      mouseover: "hover",
      mouseout: "hover",
      mouseenter: "hover",
      mouseleave: "hover",
      pointerover: "hover",
      pointerout: "hover",
      pointerenter: "hover",
      pointerleave: "hover",
      dragstart: "drag",
      dragend: "drag",
      drag: "drag",
      dragenter: "drag",
      dragleave: "drag",
      dragover: "drag",
      drop: "drag",
      keydown: "press",
      keyup: "press",
      keypress: "press",
      input: "press"
    },
    ir = ({
      metric: e
    }) => {
      if (void 0 == e.value) return;
      let t = a5(e.value);
      if (t > 60) return;
      let n = e.entries.find(t => t.duration === e.value && it[t.name]);
      if (!n) return;
      let {
          interactionId: r
        } = n,
        a = it[n.name],
        i = a5(eL() + n.startTime),
        o = tW(),
        l = o ? tB(o) : void 0,
        s = null != r ? a7.get(r) : void 0,
        u = s?.span || l,
        c = u ? tC(u).description : eK().getScopeData().transactionName,
        d = a3({
          name: s?.elementName || rL(n.target),
          transaction: c,
          attributes: {
            [e8]: "auto.http.browser.inp",
            [e5]: `ui.interaction.${a}`,
            [tn]: n.duration
          },
          startTime: i
        });
      d && (d.addEvent("inp", {
        [e9]: "millisecond",
        [e7]: e.value
      }), d.end(i + t));
    };
  function ia(e) {
    return null != e && e > 0 && e <= 6e4;
  }
  function ii(e) {
    return e ? ((eL() || performance.timeOrigin) + e) / 1e3 : e;
  }
  function io(e) {
    let t = {};
    if (void 0 != e.nextHopProtocol) {
      let {
        name: n,
        version: r
      } = function (e) {
        let t = "unknown",
          n = "unknown",
          r = "";
        for (let a of e) {
          if ("/" === a) {
            [t, n] = e.split("/");
            break;
          }
          if (!isNaN(Number(a))) {
            t = "h" === r ? "http" : r, n = e.split(r)[1];
            break;
          }
          r += a;
        }
        return r === e && (t = r), {
          name: t,
          version: n
        };
      }(e.nextHopProtocol);
      t["network.protocol.version"] = r, t["network.protocol.name"] = n;
    }
    return eL() || a4()?.timeOrigin ? Object.fromEntries(Object.entries({
      ...t,
      "http.request.redirect_start": ii(e.redirectStart),
      "http.request.redirect_end": ii(e.redirectEnd),
      "http.request.worker_start": ii(e.workerStart),
      "http.request.fetch_start": ii(e.fetchStart),
      "http.request.domain_lookup_start": ii(e.domainLookupStart),
      "http.request.domain_lookup_end": ii(e.domainLookupEnd),
      "http.request.connect_start": ii(e.connectStart),
      "http.request.secure_connection_start": ii(e.secureConnectionStart),
      "http.request.connection_end": ii(e.connectEnd),
      "http.request.request_start": ii(e.requestStart),
      "http.request.response_start": ii(e.responseStart),
      "http.request.response_end": ii(e.responseEnd),
      "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
    }).filter(([, e]) => null != e)) : t;
  }
  let il = 0,
    is = {};
  function iu(e, t, n, r, a = n) {
    var i;
    let o = t["secureConnection" === (i = n) ? "connectEnd" : "fetch" === i ? "domainLookupStart" : `${i}End`],
      l = t[`${n}Start`];
    l && o && a2(e, r + a5(l), r + a5(o), {
      op: `browser.${a}`,
      name: t.name,
      attributes: {
        [e8]: "auto.ui.browser.metrics",
        ...("redirect" === n && null != t.redirectCount ? {
          "http.redirect_count": t.redirectCount
        } : {})
      }
    });
  }
  function ic(e) {
    let {
        name: t,
        op: n,
        origin: r,
        metricName: a,
        value: i,
        attributes: o,
        parentSpan: l,
        reportEvent: s,
        startTime: u,
        endTime: c
      } = e,
      d = {
        [e8]: r,
        [e5]: n,
        [tn]: 0,
        [`browser.web_vital.${a}.value`]: i,
        "sentry.transaction": eK().getScopeData().transactionName,
        "user_agent.original": P.navigator?.userAgent,
        ...o
      };
    l && tN(l).attributes?.[e5] === "pageload" && (d["sentry.pageload.span_id"] = l.spanContext().spanId), s && (d[`browser.web_vital.${a}.report_event`] = s);
    let f = ne({
      name: t,
      attributes: d,
      startTime: u,
      parentSpan: l
    });
    f && f.end(c ?? u);
  }
  let id = new WeakMap(),
    ip = new WeakMap(),
    ih = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
    im = "sentry_previous_trace";
  function ig(e) {
    return 1 === e.traceFlags;
  }
  function iy(e = {}) {
    let t,
      n = e.client || e1();
    if (t = e1(), !(t?.getOptions().enabled !== !1 && t?.getTransport()) || !n) return {};
    let r = eY(T());
    if (r.getTraceData) return r.getTraceData(e);
    let a = e.scope || eK(),
      o = e.span || tW();
    if (!o && void 0 !== i) return {};
    let l = o ? function (e) {
        let {
          traceId: t,
          spanId: n
        } = e.spanContext();
        return tE(t, n, tj(e));
      }(o) : function (e) {
        let {
          traceId: t,
          sampled: n,
          propagationSpanId: r
        } = e.getPropagationContext();
        return tE(t, r, n);
      }(a),
      s = function (e) {
        if (e) {
          var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${tr}${t}`] = n), e), {});
          return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, [t, n], r) => {
            let a = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
              i = 0 === r ? a : `${e},${a}`;
            return i.length > 8192 ? (C && z(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : i;
          }, "") : void 0;
        }
      }(o ? tY(o) : tG(n, a));
    if (!tw.test(l)) return z("Invalid sentry-trace data. Cannot generate trace data"), {};
    let u = {
      "sentry-trace": l,
      baggage: s
    };
    return e.propagateTraceparent && (u.traceparent = o ? function (e) {
      let {
        traceId: t,
        spanId: n
      } = e.spanContext();
      return tx(t, n, tj(e));
    }(o) : function (e) {
      let {
        traceId: t,
        sampled: n,
        propagationSpanId: r
      } = e.getPropagationContext();
      return tx(t, r, n);
    }(a)), u;
  }
  function iv(e) {
    return "string" == typeof e && e.split(",").some(e => e.trim().startsWith(tr));
  }
  function ib(e, t, n, r) {
    let a = {
      url: rP(e),
      type: "fetch",
      "http.method": n,
      [e8]: r,
      [e5]: "http.client"
    };
    return t && (rS(t) || (a["http.url"] = rP(t.href), a["server.address"] = t.host), t.search && (a["http.query"] = t.search), t.hash && (a["http.fragment"] = t.hash)), a;
  }
  function i_(e) {
    try {
      return new URL(e, P.location.origin).href;
    } catch {
      return;
    }
  }
  function iS(e) {
    try {
      return new Headers(e);
    } catch {
      return;
    }
  }
  let iw = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1
  };
  function iE(e, t) {
    let {
      url: n
    } = tC(e).data;
    if (!n || "string" != typeof n) return;
    let r = () => void setTimeout(a);
    if (tc(t)) {
      let t = e.end.bind(e);
      e.end = e => {
        let n = e ?? eA(),
          i = !1,
          o = () => {
            i || (i = !0, setTimeout(a), t(n), clearTimeout(l));
          };
        r = o;
        let l = setTimeout(o, 300);
      };
    }
    let a = aV("resource", ({
      entries: t
    }) => {
      t.forEach(t => {
        "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType) && t.name.endsWith(n) && (e.setAttributes(io(t)), r());
      });
    });
  }
  let ix = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
  function ik() {
    let e = P.navigator;
    return !!e?.userAgent && ix.test(e.userAgent);
  }
  let iP = {
    ...al,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    _experiments: {},
    ...iw
  };
  function iT(e, t, n) {
    e.emit("startPageLoadSpan", t, n), eK().setTransactionName(t.name);
    let r = e[iN];
    return r && e.emit("afterStartPageLoadSpan", r), r;
  }
  function iR(e, t, n) {
    let {
      url: r,
      isRedirect: a
    } = n || {};
    e.emit("beforeStartNavigationSpan", t, {
      isRedirect: a
    }), e.emit("startNavigationSpan", t, {
      isRedirect: a
    });
    let i = eK();
    return i.setTransactionName(t.name), r && !a && i.setSDKProcessingMetadata({
      normalizedRequest: {
        ...rr(),
        url: r
      }
    }), e[iN];
  }
  function iO(e) {
    let t = P.document,
      n = t?.querySelector(`meta[name=${e}]`);
    return n?.getAttribute("content") || void 0;
  }
  function iC(e) {
    let t = P.performance?.getEntriesByType?.("navigation")[0],
      n = t?.serverTiming?.find(t => t.name === e);
    return n?.description;
  }
  let iN = "_sentry_idleSpan",
    iA = null,
    iI = new Map(),
    iL = new Map();
  function ij(e) {
    let t = e.split("/").filter(Boolean),
      n = 0;
    for (let e of t) if (e.startsWith(":")) {
      let t = e.substring(1);
      t.endsWith("*?") ? n += 1e3 : t.endsWith("*") ? n += 100 : n += 10;
    }
    return t.length > 0 && (n += 1 / t.length), n;
  }
  function iM(e) {
    if (iI.has(e)) return iI.get(e) ?? null;
    try {
      let t = new RegExp(e);
      return iI.set(e, t), t;
    } catch (t) {
      return ao && z("Could not compile regex", {
        regexString: e,
        error: t
      }), null;
    }
  }
  function iD() {
    if (!P?._sentryRouteManifest || "string" != typeof P._sentryRouteManifest) return null;
    let e = P._sentryRouteManifest;
    if (iA && w === e) return iA;
    iI.clear(), iL.clear();
    let t = {
      staticRoutes: [],
      dynamicRoutes: [],
      isrRoutes: []
    };
    try {
      if (t = JSON.parse(e), !Array.isArray(t.staticRoutes) || !Array.isArray(t.dynamicRoutes)) return null;
      return iA = t, w = e, t;
    } catch {
      return ao && z("Could not extract route manifest"), null;
    }
  }
  let i$ = e => {
    let t = iD();
    if (!t) return;
    let n = e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
    if (iL.has(n)) return iL.get(n);
    let {
      staticRoutes: r,
      dynamicRoutes: a
    } = t;
    if (!Array.isArray(r) || !Array.isArray(a)) return;
    let i = function (e, t, n) {
      let r = [];
      if (t.some(t => t.path === e)) return r;
      for (let t of n) if (t.regex) {
        let n = iM(t.regex);
        n?.test(e) && r.push(t.path);
      }
      if (!e.startsWith("/:")) {
        for (let t of n) if (t.hasOptionalPrefix && t.regex) {
          let n = "/" === e ? "/SENTRY_OPTIONAL_PREFIX" : `/SENTRY_OPTIONAL_PREFIX${e}`,
            a = iM(t.regex);
          a?.test(n) && r.push(t.path);
        }
      }
      return r;
    }(n, r, a).sort((e, t) => ij(e) - ij(t))[0];
    return iL.set(n, i), i;
  };
  function iz(e) {
    return e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
  }
  let iF = "incomplete-app-router-transaction",
    iU = "router-patch",
    iB = {
      current: void 0
    };
  function iH(e) {
    try {
      return new URL(e, "http://example.com/").pathname;
    } catch {
      return "/";
    }
  }
  let iW = new WeakSet();
  function iq(e, t, n) {
    iW.has(t) || (iW.add(t), ["back", "forward", "push", "replace"].forEach(r => {
      t?.[r] && (t[r] = new Proxy(t[r], {
        apply(t, a, i) {
          if ("router-patch" !== iU) return t.apply(a, i);
          let o = iF,
            l = {
              [e5]: "navigation",
              [e8]: "auto.navigation.nextjs.app_router_instrumentation",
              [e2]: "url"
            },
            s = i[0],
            u = x.default.env._sentryBasePath ?? P._sentryBasePath,
            c = u && "string" == typeof s && !s.startsWith(u) ? `${u}${s}` : s;
          "push" === r ? (o = iz(iH(c)), l["navigation.type"] = "router.push") : "replace" === r ? (o = iz(iH(c)), l["navigation.type"] = "router.replace") : "back" === r ? l["navigation.type"] = "router.back" : "forward" === r && (l["navigation.type"] = "router.forward");
          let d = i$(o);
          return n.current = iR(e, {
            name: d ?? o,
            attributes: {
              ...l,
              [e2]: d ? "route" : "url"
            }
          }), t.apply(a, i);
        }
      }));
    }));
  }
  var iV = e.i(898156);
  let iX = iV.default.events ? iV.default : iV.default.default,
    iQ = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function iG(...e) {
    let t = "",
      n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
      let a = r >= 0 ? e[r] : "/";
      a && (t = `${a}/${t}`, n = "/" === a.charAt(0));
    }
    return t = function (e, t) {
      let n = 0;
      for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
      }
      if (t) for (; n--;) e.unshift("..");
      return e;
    }(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || ".";
  }
  function iY(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1);
  }
  let iK = new class {
      constructor(e) {
        this._maxSize = e, this._cache = new Map();
      }
      get size() {
        return this._cache.size;
      }
      get(e) {
        let t = this._cache.get(e);
        if (void 0 !== t) return this._cache.delete(e), this._cache.set(e, t), t;
      }
      set(e, t) {
        if (this._cache.size >= this._maxSize) {
          let e = this._cache.keys().next().value;
          this._cache.delete(e);
        }
        this._cache.set(e, t);
      }
      remove(e) {
        let t = this._cache.get(e);
        return t && this._cache.delete(e), t;
      }
      clear() {
        this._cache.clear();
      }
      keys() {
        return Array.from(this._cache.keys());
      }
      values() {
        let e = [];
        return this._cache.forEach(t => e.push(t)), e;
      }
    }(100),
    iJ = !1;
  globalThis._sentryRouteManifest = '{"dynamicRoutes":[{"path":"/:slug","regex":"^/([^/]+)$","paramNames":["slug"],"hasOptionalPrefix":false},{"path":"/blog/:slug","regex":"^/blog/([^/]+)$","paramNames":["slug"],"hasOptionalPrefix":false},{"path":"/blog/topic/:slug","regex":"^/blog/topic/([^/]+)$","paramNames":["slug"],"hasOptionalPrefix":false},{"path":"/referral/:slug","regex":"^/referral/([^/]+)$","paramNames":["slug"],"hasOptionalPrefix":false},{"path":"/stories/:slug","regex":"^/stories/([^/]+)$","paramNames":["slug"],"hasOptionalPrefix":false}],"staticRoutes":[{"path":"/613"},{"path":"/bayho"},{"path":"/beach"},{"path":"/centralcoast"},{"path":"/downey"},{"path":"/gld"},{"path":"/kindly"},{"path":"/littleroots"},{"path":"/marina"},{"path":"/ny"},{"path":"/scordakis"},{"path":"/shermanoaks"},{"path":"/simmons"},{"path":"/truebite"},{"path":"/help-wanted"},{"path":"/book-a-demo"},{"path":"/get-started"},{"path":"/submitted"},{"path":"/"},{"path":"/aadom"},{"path":"/behind-on-ar"},{"path":"/blog"},{"path":"/company"},{"path":"/dentalcollective"},{"path":"/dentaltown"},{"path":"/dentistryingeneral"},{"path":"/dig"},{"path":"/dsi"},{"path":"/dsn"},{"path":"/get-paid-faster"},{"path":"/mdib"},{"path":"/nachos"},{"path":"/never-post-again"},{"path":"/short-staffed"},{"path":"/install"},{"path":"/install-beta"},{"path":"/invite-expired"},{"path":"/remote"},{"path":"/stories"}],"isrRoutes":["/blog/:slug","/stories/:slug"]}', globalThis._sentryNextJsVersion = "16.3.0", globalThis._sentryRewritesTunnelPath = "/monitoring", function (e) {
    let t, r, a, i, o, l;
    iJ && I(() => {
      console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.");
    }), iJ = !0, !ao && e.debug && I(() => {
      console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `withSentryConfig({ disableLogger: true })` / `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.");
    }), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && function () {
      P.document && function (e) {
        let t = i$(e) || e,
          n = iK.get(t);
        if (void 0 !== n) return n;
        let r = iD();
        if (!r?.isrRoutes || !Array.isArray(r.isrRoutes) || 0 === r.isrRoutes.length) return iK.set(t, !1), !1;
        let a = r.isrRoutes.includes(t);
        return iK.set(t, a), a;
      }(P.location.pathname) && (e("sentry-trace"), e("baggage"));
      function e(e) {
        try {
          let t = P.document.querySelector(`meta[name="${e}"]`);
          t && t.remove();
        } catch {}
      }
    }();
    let s = {
      environment: e.environment || x.default.env.SENTRY_ENVIRONMENT || (t = "production", `vercel-${t}`) || "production",
      defaultIntegrations: (r = ar(e), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && r.push(function (e = {}) {
        let t = ((e = {}) => {
            let t, n, r;
            "enableElementTiming" in e && I(() => {
              console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.");
            });
            let a = {
                name: void 0,
                source: void 0
              },
              i = P.document,
              {
                enableInp: o,
                enableLongTask: l,
                enableLongAnimationFrame: s,
                _experiments: {
                  enableInteractions: u,
                  enableStandaloneClsSpans: c,
                  enableStandaloneLcpSpans: d
                },
                beforeStartSpan: f,
                idleTimeout: p,
                finalTimeout: h,
                childSpanTimeout: m,
                markBackgroundSpan: g,
                traceFetch: y,
                traceXHR: b,
                trackFetchStreamPerformance: w,
                shouldCreateSpanForRequest: E,
                enableHTTPTimings: x,
                ignoreResourceSpans: k,
                ignorePerformanceApiSpans: T,
                instrumentPageLoad: R,
                instrumentNavigation: O,
                detectRedirects: N,
                linkPreviousTrace: A,
                consistentTraceSampling: L,
                enableReportPageLoaded: j,
                onRequestSpanStart: M,
                onRequestSpanEnd: D
              } = {
                ...iP,
                ...e
              },
              U = ik();
            function B(e, n, o = !0) {
              let l = "pageload" === n.op,
                s = n.name,
                u = f ? f(n) : n,
                g = u.attributes || {};
              if (s !== u.name && (g[e2] = "custom", u.attributes = g), !o) {
                let e = eN();
                ne({
                  ...u,
                  startTime: e
                }).end(e);
                return;
              }
              a.name = u.name, a.source = g[e2];
              let y = as(u, {
                idleTimeout: p,
                finalTimeout: h,
                childSpanTimeout: m,
                disableAutoFinish: l,
                beforeSpanEnd: n => {
                  t?.();
                  let a = tc(e);
                  !function (e, t) {
                    let n = a4(),
                      r = eL();
                    if (!n?.getEntries || !r) return;
                    let {
                        spanStreamingEnabled: a,
                        ignorePerformanceApiSpans: i,
                        ignoreResourceSpans: o,
                        recordClsOnPageloadSpan: l,
                        recordLcpOnPageloadSpan: s
                      } = t,
                      u = a5(r),
                      c = n.getEntries(),
                      {
                        op: d,
                        start_timestamp: f
                      } = tC(e);
                    if (c.slice(il).forEach(t => {
                      let n = a5(t.startTime),
                        r = a5(Math.max(0, t.duration));
                      if ("navigation" !== d || !f || !(u + n < f)) switch (t.entryType) {
                        case "navigation":
                          var a, l, s, c, p, h;
                          let m, g, y;
                          a = e, l = t, s = u, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(e => {
                            iu(a, l, e, s);
                          }), iu(a, l, "secureConnection", s, "TLS/SSL"), iu(a, l, "fetch", s, "cache"), iu(a, l, "domainLookup", s, "DNS"), c = a, p = l, m = (h = s) + a5(p.requestStart), g = h + a5(p.responseEnd), y = h + a5(p.responseStart), p.responseEnd && (a2(c, m, g, {
                            op: "browser.request",
                            name: p.name,
                            attributes: {
                              [e8]: "auto.ui.browser.metrics"
                            }
                          }), a2(c, y, g, {
                            op: "browser.response",
                            name: p.name,
                            attributes: {
                              [e8]: "auto.ui.browser.metrics"
                            }
                          }));
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          {
                            !function (e, t, n, r, a, i) {
                              if (function (e) {
                                if (e?.entryType === "measure") try {
                                  return "Components ⚛" === e.detail.devtools.track;
                                } catch {
                                  return;
                                }
                              }(t) || ["mark", "measure"].includes(t.entryType) && ex(t.name, i)) return;
                              let o = ad(!1),
                                l = a + Math.max(n, a5(o ? o.requestStart : 0)),
                                s = a + n,
                                u = s + r,
                                c = {
                                  [e8]: "auto.resource.browser.metrics"
                                };
                              l !== s && (c["sentry.browser.measure_happened_before_request"] = !0, c["sentry.browser.measure_start_time"] = l), function (e, t) {
                                try {
                                  let n = t.detail;
                                  if (!n) return;
                                  if ("object" == typeof n) {
                                    for (let [t, r] of Object.entries(n)) if (r && G(r)) e[`sentry.browser.measure.detail.${t}`] = r;else if (void 0 !== r) try {
                                      e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r);
                                    } catch {}
                                    return;
                                  }
                                  if (G(n)) {
                                    e["sentry.browser.measure.detail"] = n;
                                    return;
                                  }
                                  try {
                                    e["sentry.browser.measure.detail"] = JSON.stringify(n);
                                  } catch {}
                                } catch {}
                              }(c, t), l <= u && a2(e, l, u, {
                                name: t.name,
                                op: t.entryType,
                                attributes: c
                              });
                            }(e, t, n, r, u, i);
                            let a = av(),
                              o = t.startTime < a.firstHiddenTime;
                            "first-paint" === t.name && o && (is.fp = {
                              value: t.startTime,
                              unit: "millisecond"
                            }), "first-contentful-paint" === t.name && o && (is.fcp = {
                              value: t.startTime,
                              unit: "millisecond"
                            });
                            break;
                          }
                        case "resource":
                          !function (e, t, n, r, a, i, o) {
                            var l, s;
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            let u = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                            if (o?.includes(u)) return;
                            let c = {
                                [e8]: "auto.resource.browser.metrics"
                              },
                              d = rx(n);
                            d.protocol && (c["url.scheme"] = d.protocol.split(":").pop()), d.host && (c["server.address"] = d.host), c["url.same_origin"] = n.includes(P.location.origin), l = t, s = c, [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]].forEach(([e, t]) => {
                              let n = l[e];
                              null != n && ("number" == typeof n && n < 0x7fffffff || "string" == typeof n) && (s[t] = n);
                            });
                            let f = {
                                ...c,
                                ...io(t)
                              },
                              p = i + r;
                            a2(e, p, p + a, {
                              name: n.replace(P.location.origin, ""),
                              op: u,
                              attributes: f
                            });
                          }(e, t, t.name, n, r, u, o);
                      }
                    }), il = Math.max(c.length - 1, 0), function (e, t) {
                      let n = P.navigator;
                      if (!n) return;
                      let r = n.connection;
                      r && (r.effectiveType && e.setAttribute(t ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? "network.connection.type" : "connectionType", r.type), a1(r.rtt) && (is["connection.rtt"] = {
                        value: r.rtt,
                        unit: "millisecond"
                      }, t && e.setAttribute("network.connection.rtt", r.rtt))), a1(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), a1(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)));
                    }(e, a), "pageload" === d) {
                      if (function (e) {
                        let t = ad(!1);
                        if (!t) return;
                        let {
                          responseStart: n,
                          requestStart: r
                        } = t;
                        r <= n && (e["ttfb.requestTime"] = {
                          value: n - r,
                          unit: "millisecond"
                        });
                      }(is), a) {
                        let t = (t, n, r) => {
                          let a = r ?? `browser.web_vital.${t}.value`;
                          e.setAttribute(a, n), r9 && $("Setting web vital attribute", {
                            [a]: n
                          }, "on pageload span");
                        };
                        ["ttfb", "fp", "fcp"].forEach(e => {
                          is[e] && t(e, is[e].value);
                        }), is["ttfb.requestTime"] && t("ttfb.requestTime", is["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
                      } else {
                        var p, h;
                        l || delete is.cls, s || delete is.lcp, Object.entries(is).forEach(([e, t]) => {
                          !function (e, t, n, r = tW()) {
                            let a = r && tB(r);
                            a && (C && $(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), a.addEvent(e, {
                              [e7]: t,
                              [e9]: n
                            }));
                          }(e, t.value, t.unit);
                        }), p = e, h = t, _ && h.recordLcpOnPageloadSpan && (_.element && p.setAttribute("lcp.element", rL(_.element)), _.id && p.setAttribute("lcp.id", _.id), _.url && p.setAttribute("lcp.url", _.url.trim().slice(0, 200)), null != _.loadTime && p.setAttribute("lcp.loadTime", _.loadTime), null != _.renderTime && p.setAttribute("lcp.renderTime", _.renderTime), p.setAttribute("lcp.size", _.size)), S?.sources && h.recordClsOnPageloadSpan && S.sources.forEach((e, t) => p.setAttribute(`cls.source.${t + 1}`, rL(e.node)));
                      }
                      e.setAttribute(a ? "browser.performance.time_origin" : "performance.timeOrigin", u), e.setAttribute(a ? "browser.performance.navigation.activation_start" : "performance.activationStart", af());
                    }
                    _ = void 0, S = void 0, is = {};
                  }(n, {
                    recordClsOnPageloadSpan: !a && !c,
                    recordLcpOnPageloadSpan: !a && !d,
                    ignoreResourceSpans: k,
                    ignorePerformanceApiSpans: T,
                    spanStreamingEnabled: a
                  }), en(e, iN, void 0);
                  let i = eK(),
                    o = i.getPropagationContext();
                  i.setPropagationContext({
                    ...o,
                    traceId: y.spanContext().traceId,
                    sampled: tj(y),
                    dsc: tY(n)
                  }), l && (r = void 0);
                },
                trimIdleSpanEndTimestamp: !j
              });
              function v() {
                i && ["interactive", "complete"].includes(i.readyState) && e.emit("idleSpanEnableAutoFinish", y);
              }
              l && j && (r = y), en(e, iN, y), l && !j && i && (i.addEventListener("readystatechange", () => {
                v();
              }), v());
            }
            return {
              name: "BrowserTracing",
              setup(e) {
                if (U) {
                  rj && $("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                  return;
                }
                function a() {
                  let e = tW(),
                    t = e && tB(e);
                  if (t) {
                    let e = "internal_error";
                    C && $(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                      code: 2,
                      message: e
                    });
                  }
                }
                au || (au = !0, rH(a), rV(a));
                let f = tc(e);
                if (t = function ({
                  recordClsStandaloneSpans: e,
                  recordLcpStandaloneSpans: t,
                  client: n
                }) {
                  let r = a4();
                  if (r && eL()) {
                    r.mark && P.performance.mark("sentry-tracing-init");
                    let a = t ? function (e) {
                        let t,
                          n = 0;
                        if (!a8("largest-contentful-paint")) return;
                        let r = aW(({
                          metric: e
                        }) => {
                          let r = e.entries[e.entries.length - 1];
                          r && ia(e.value) && (n = e.value, t = r);
                        }, !0);
                        a6(e, (e, a) => {
                          (function (e, t, n, r) {
                            if (!ia(e)) return;
                            r9 && $(`Sending LCP span (${e})`);
                            let a = a5((eL() || 0) + (t?.startTime || 0)),
                              i = eK().getScopeData().transactionName,
                              o = t ? rL(t.element) : "Largest contentful paint",
                              l = {
                                [e8]: "auto.http.browser.lcp",
                                [e5]: "ui.webvital.lcp",
                                [tn]: 0,
                                "sentry.pageload.span_id": n,
                                "sentry.report_event": r
                              };
                            t && (t.element && (l["lcp.element"] = rL(t.element)), t.id && (l["lcp.id"] = t.id), t.url && (l["lcp.url"] = t.url), null != t.loadTime && (l["lcp.loadTime"] = t.loadTime), null != t.renderTime && (l["lcp.renderTime"] = t.renderTime), null != t.size && (l["lcp.size"] = t.size));
                            let s = a3({
                              name: o,
                              transaction: i,
                              attributes: l,
                              startTime: a
                            });
                            s && (s.addEvent("lcp", {
                              [e9]: "millisecond",
                              [e7]: e
                            }), s.end(a));
                          })(n, t, a, e), r();
                        });
                      }(n) : !1 === t ? aW(({
                        metric: e
                      }) => {
                        let t = e.entries[e.entries.length - 1];
                        t && ia(e.value) && (is.lcp = {
                          value: e.value,
                          unit: "millisecond"
                        }, _ = t);
                      }, !0) : void 0,
                      i = e ? function (e) {
                        let t,
                          n = 0;
                        if (!a8("layout-shift")) return;
                        let r = aH(({
                          metric: e
                        }) => {
                          let r = e.entries[e.entries.length - 1];
                          r && (n = e.value, t = r);
                        }, !0);
                        a6(e, (e, a) => {
                          var i, o, l, s;
                          let u, c, d, f, p;
                          i = n, o = t, l = a, s = e, r9 && $(`Sending CLS span (${i})`), u = o ? a5((eL() || 0) + o.startTime) : eA(), c = eK().getScopeData().transactionName, d = o ? rL(o.sources[0]?.node) : "Layout shift", f = {
                            [e8]: "auto.http.browser.cls",
                            [e5]: "ui.webvital.cls",
                            [tn]: 0,
                            "sentry.pageload.span_id": l,
                            "sentry.report_event": s
                          }, o?.sources && o.sources.forEach((e, t) => {
                            f[`cls.source.${t + 1}`] = rL(e.node);
                          }), (p = a3({
                            name: d,
                            transaction: c,
                            attributes: f,
                            startTime: u
                          })) && (p.addEvent("cls", {
                            [e9]: "",
                            [e7]: i
                          }), p.end(u)), r();
                        });
                      }(n) : !1 === e ? aH(({
                        metric: e
                      }) => {
                        let t = e.entries[e.entries.length - 1];
                        t && (is.cls = {
                          value: e.value,
                          unit: ""
                        }, S = t);
                      }, !0) : void 0,
                      o = aJ("ttfb", ({
                        metric: e
                      }) => {
                        e.entries[e.entries.length - 1] && (is.ttfb = {
                          value: e.value,
                          unit: "millisecond"
                        });
                      }, aY, v);
                    return () => {
                      o(), a?.(), i?.();
                    };
                  }
                  return () => void 0;
                }({
                  recordClsStandaloneSpans: f ? void 0 : c || !1,
                  recordLcpStandaloneSpans: f ? void 0 : d || !1,
                  client: e
                }), f ? (!function (e) {
                  let t,
                    n = 0;
                  if (!a8("largest-contentful-paint")) return;
                  let r = aW(({
                    metric: e
                  }) => {
                    let r = e.entries[e.entries.length - 1];
                    r && ia(e.value) && (n = e.value, t = r);
                  }, !0);
                  a6(e, (e, a, i) => {
                    (function (e, t, n, r) {
                      if (!ia(e)) return;
                      r9 && $(`Sending LCP span (${e})`);
                      let a = eL() || 0,
                        i = a5(a),
                        o = a5(a + (t?.startTime || 0)),
                        l = t ? rL(t.element) : "Largest contentful paint",
                        s = {};
                      t?.element && (s["browser.web_vital.lcp.element"] = rL(t.element)), t?.id && (s["browser.web_vital.lcp.id"] = t.id), t?.url && (s["browser.web_vital.lcp.url"] = t.url), t?.loadTime != null && (s["browser.web_vital.lcp.load_time"] = t.loadTime), t?.renderTime != null && (s["browser.web_vital.lcp.render_time"] = t.renderTime), t?.size != null && (s["browser.web_vital.lcp.size"] = t.size), ic({
                        name: l,
                        op: "ui.webvital.lcp",
                        origin: "auto.http.browser.lcp",
                        metricName: "lcp",
                        value: e,
                        attributes: s,
                        parentSpan: n,
                        reportEvent: r,
                        startTime: i,
                        endTime: o
                      });
                    })(n, t, i, e), r();
                  });
                }(e), !function (e) {
                  let t,
                    n = 0;
                  if (!a8("layout-shift")) return;
                  let r = aH(({
                    metric: e
                  }) => {
                    let r = e.entries[e.entries.length - 1];
                    r && (n = e.value, t = r);
                  }, !0);
                  a6(e, (e, a, i) => {
                    var o, l, s, u;
                    let c, d, f;
                    o = n, l = t, s = i, u = e, r9 && $(`Sending CLS span (${o})`), c = l ? a5((eL() || 0) + l.startTime) : eA(), d = l ? rL(l.sources[0]?.node) : "Layout shift", f = {}, l?.sources && l.sources.forEach((e, t) => {
                      f[`browser.web_vital.cls.source.${t + 1}`] = rL(e.node);
                    }), ic({
                      name: d,
                      op: "ui.webvital.cls",
                      origin: "auto.http.browser.cls",
                      metricName: "cls",
                      value: o,
                      attributes: f,
                      parentSpan: s,
                      reportEvent: u,
                      startTime: c
                    }), r();
                  });
                }(e), o && a4() && eL() && aq(({
                  metric: e
                }) => {
                  var t, n, r;
                  let a, i, o, l, s, u, c, d;
                  if (null == e.value || a5(e.value) > 60) return;
                  let f = e.entries.find(t => t.duration === e.value && it[t.name]);
                  f && (t = e.value, n = f, r9 && $(`Sending INP span (${t})`), a = a5(eL() + n.startTime), i = a5(t), o = it[n.name], l = null != (r = n.interactionId) ? a7.get(r) : void 0, u = (s = tW()) ? tB(s) : void 0, d = (c = l?.span || u) ? tN(c).name : eK().getScopeData().transactionName, ic({
                    name: l?.elementName || rL(n.target),
                    op: `ui.interaction.${o}`,
                    origin: "auto.http.browser.inp",
                    metricName: "inp",
                    value: t,
                    attributes: {
                      [tn]: n.duration,
                      "sentry.transaction": d
                    },
                    startTime: a,
                    endTime: a + i,
                    parentSpan: c
                  }));
                })) : o && function () {
                  if (a4() && eL()) {
                    let e = aq(ir);
                    () => {
                      e();
                    };
                  }
                }(), s && P.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? new PerformanceObserver(e => {
                  let t = tW();
                  if (t) for (let n of e.getEntries()) {
                    if (!n.scripts[0]) continue;
                    let e = a5(eL() + n.startTime),
                      {
                        start_timestamp: r,
                        op: a
                      } = tC(t);
                    if ("navigation" === a && r && e < r) continue;
                    let i = a5(n.duration),
                      o = {
                        [e8]: "auto.ui.browser.metrics"
                      },
                      {
                        invoker: l,
                        invokerType: s,
                        sourceURL: u,
                        sourceFunctionName: c,
                        sourceCharPosition: d
                      } = n.scripts[0];
                    o["browser.script.invoker"] = l, o["browser.script.invoker_type"] = s, u && (o["code.filepath"] = u), c && (o["code.function"] = c), -1 !== d && (o["browser.script.source_char_position"] = d), a2(t, e, e + i, {
                      name: "Main UI thread blocked",
                      op: "ui.long-animation-frame",
                      attributes: o
                    });
                  }
                }).observe({
                  type: "long-animation-frame",
                  buffered: !0
                }) : l && aV("longtask", ({
                  entries: e
                }) => {
                  let t = tW();
                  if (!t) return;
                  let {
                    op: n,
                    start_timestamp: r
                  } = tC(t);
                  for (let a of e) {
                    let e = a5(eL() + a.startTime),
                      i = a5(a.duration);
                    "navigation" === n && r && e < r || a2(t, e, e + i, {
                      name: "Main UI thread blocked",
                      op: "ui.long-task",
                      attributes: {
                        [e8]: "auto.ui.browser.metrics"
                      }
                    });
                  }
                }), u && aV("event", ({
                  entries: e
                }) => {
                  let t = tW();
                  if (t) {
                    for (let n of e) if ("click" === n.name) {
                      let e = a5(eL() + n.startTime),
                        r = a5(n.duration),
                        a = {
                          name: rL(n.target),
                          op: `ui.interaction.${n.name}`,
                          startTime: e,
                          attributes: {
                            [e8]: "auto.ui.browser.metrics"
                          }
                        },
                        i = re(n.target);
                      i && (a.attributes["ui.component_name"] = i), a2(t, e, e + r, a);
                    }
                  }
                }), N && i) {
                  let e = () => {
                    n = eA();
                  };
                  addEventListener("click", e, {
                    capture: !0
                  }), addEventListener("keydown", e, {
                    capture: !0,
                    passive: !0
                  });
                }
                function p() {
                  let t = e[iN];
                  t && !tC(t).timestamp && (rj && $(`[Tracing] Finishing current active span with op: ${tC(t).op}`), t.setAttribute(e6, "cancelled"), t.end());
                }
                e.on("startNavigationSpan", (t, r) => {
                  if (e1() !== e) return;
                  if (r?.isRedirect) {
                    rj && z("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), B(e, {
                      op: "navigation.redirect",
                      ...t
                    }, !1);
                    return;
                  }
                  n = void 0, p(), eJ().setPropagationContext({
                    traceId: ek(),
                    sampleRand: Math.random(),
                    propagationSpanId: tl() ? void 0 : eD()
                  });
                  let a = eK();
                  a.setPropagationContext({
                    traceId: ek(),
                    sampleRand: Math.random(),
                    propagationSpanId: tl() ? void 0 : eD()
                  }), a.setSDKProcessingMetadata({
                    normalizedRequest: void 0
                  }), B(e, {
                    op: "navigation",
                    ...t,
                    parentSpan: null,
                    forceTransaction: !0
                  });
                }), e.on("startPageLoadSpan", (t, n = {}) => {
                  if (e1() !== e) return;
                  p();
                  let r = function (e, t) {
                      let n = function (e) {
                          let t;
                          if (!e) return;
                          let n = e.match(tw);
                          if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                            traceId: n[1],
                            parentSampled: t,
                            parentSpanId: n[2]
                          };
                        }(e),
                        r = ta(t);
                      if (!n?.traceId) return {
                        traceId: ek(),
                        sampleRand: es()
                      };
                      let a = function (e, t) {
                        let n = td(t?.sample_rand);
                        if (void 0 !== n) return n;
                        let r = td(t?.sample_rate);
                        return r && e?.parentSampled !== void 0 ? e.parentSampled ? es() * r : r + es() * (1 - r) : es();
                      }(n, r);
                      r && (r.sample_rand = a.toString());
                      let {
                        traceId: i,
                        parentSpanId: o,
                        parentSampled: l
                      } = n;
                      return {
                        traceId: i,
                        parentSpanId: o,
                        sampled: l,
                        dsc: r || {},
                        sampleRand: a
                      };
                    }(n.sentryTrace || iO("sentry-trace") || iC("sentry-trace"), n.baggage || iO("baggage") || iC("baggage")),
                    a = eK();
                  a.setPropagationContext(r), tl() || (a.getPropagationContext().propagationSpanId = eD()), a.setSDKProcessingMetadata({
                    normalizedRequest: rr()
                  }), B(e, {
                    op: "pageload",
                    ...t
                  });
                }), e.on("endPageloadSpan", () => {
                  j && r && (r.setAttribute(e6, "reportPageLoaded"), r.end());
                });
              },
              afterAllSetup(e) {
                var t, r, i, l, s;
                let c;
                if (U) return;
                let d = n7();
                if ("off" !== A && function (e, {
                  linkPreviousTrace: t,
                  consistentTraceSampling: n
                }) {
                  let r = "session-storage" === t,
                    a = r ? function () {
                      try {
                        let e = P.sessionStorage?.getItem(im);
                        return JSON.parse(e);
                      } catch {
                        return;
                      }
                    }() : void 0;
                  e.on("spanStart", e => {
                    if (tB(e) !== e) return;
                    let t = eK().getPropagationContext();
                    a = function (e, t, n) {
                      let r = tC(t),
                        a = {
                          spanContext: t.spanContext(),
                          startTimestamp: r.start_timestamp,
                          sampleRate: function () {
                            try {
                              let e = Number(r.data?.[e3] ?? n.dsc?.sample_rate);
                              return Number.isNaN(e) ? 0 : e;
                            } catch {
                              return 0;
                            }
                          }(),
                          sampleRand: n.sampleRand
                        };
                      if (!e) return a;
                      let i = e.spanContext;
                      return i.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (rj && $(`Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({
                        op: r.op,
                        ...t.spanContext()
                      })}\``), t.addLink({
                        context: i,
                        attributes: {
                          "sentry.link.type": "previous_trace"
                        }
                      }), t.setAttribute("sentry.previous_trace", `${i.traceId}-${i.spanId}-${+!!ig(i)}`)), a);
                    }(a, e, t), r && function (e) {
                      try {
                        P.sessionStorage.setItem(im, JSON.stringify(e));
                      } catch (e) {
                        rj && z("Could not store previous trace in sessionStorage", e);
                      }
                    }(a);
                  });
                  let i = !0;
                  n && e.on("beforeSampling", e => {
                    if (!a) return;
                    let t = eK(),
                      n = t.getPropagationContext();
                    if (i && n.parentSpanId) {
                      i = !1;
                      return;
                    }
                    t.setPropagationContext({
                      ...n,
                      dsc: {
                        ...n.dsc,
                        sample_rate: String(a.sampleRate),
                        sampled: String(ig(a.spanContext))
                      },
                      sampleRand: a.sampleRand
                    }), e.parentSampled = ig(a.spanContext), e.parentSampleRate = a.sampleRate, e.spanAttributes = {
                      ...e.spanAttributes,
                      [e4]: a.sampleRate
                    };
                  });
                }(e, {
                  linkPreviousTrace: A,
                  consistentTraceSampling: L
                }), P.location) {
                  if (R) {
                    let t = eL();
                    iT(e, {
                      name: P.location.pathname,
                      startTime: t ? t / 1e3 : void 0,
                      attributes: {
                        [e2]: "url",
                        [e8]: "auto.pageload.browser"
                      }
                    });
                  }
                  O && rA(({
                    to: t,
                    from: r
                  }) => {
                    var a, i;
                    let o, l;
                    if (void 0 === r && d?.indexOf(t) !== -1) {
                      d = void 0;
                      return;
                    }
                    d = void 0;
                    let s = rw(t),
                      u = e[iN],
                      c = u && N && (a = u, i = n, o = tC(a), !((l = eN()) - o.start_timestamp > 1.5) && (!i || !(l - i <= 1.5)));
                    iR(e, {
                      name: s?.pathname || P.location.pathname,
                      attributes: {
                        [e2]: "url",
                        [e8]: "auto.navigation.browser"
                      }
                    }, {
                      url: t,
                      isRedirect: c
                    });
                  });
                }
                g && (P.document ? P.document.addEventListener("visibilitychange", () => {
                  let e = tW();
                  if (!e) return;
                  let t = tB(e);
                  if (P.document.hidden && t) {
                    let e = "cancelled",
                      {
                        op: n,
                        status: r
                      } = tC(t);
                    rj && $(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                      code: 2,
                      message: e
                    }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end();
                  }
                }) : rj && z("[Tracing] Could not set up background tab detection due to lack of global document")), u && (t = e, r = p, i = h, l = m, s = a, P.document && addEventListener("click", () => {
                  let e = "ui.action.click",
                    n = t[iN];
                  if (n && ["navigation", "pageload"].includes(tC(n).op)) {
                    rj && z(`[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`);
                    return;
                  }
                  if (c && (c.setAttribute(e6, "interactionInterrupted"), c.end(), c = void 0), !s.name) {
                    rj && z(`[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`);
                    return;
                  }
                  c = as({
                    name: s.name,
                    op: e,
                    attributes: {
                      [e2]: s.source || "url"
                    }
                  }, {
                    idleTimeout: r,
                    finalTimeout: i,
                    childSpanTimeout: l
                  });
                }, {
                  capture: !0
                })), o && function () {
                  let e = Object.keys(it);
                  function t(e) {
                    let t = e.target;
                    if (!t) return;
                    let n = rL(t),
                      r = Math.round(e.timeStamp);
                    if (ie.set(r, n), ie.size > 50) {
                      let e = ie.keys().next().value;
                      void 0 !== e && ie.delete(e);
                    }
                  }
                  nT() && e.forEach(e => {
                    P.addEventListener(e, t, {
                      capture: !0,
                      passive: !0
                    });
                  });
                  let n = ({
                    entries: e
                  }) => {
                    let t = tW(),
                      n = t && tB(t);
                    e.forEach(e => {
                      if (!("duration" in e)) return;
                      let t = e.interactionId;
                      if (null == t || a7.has(t)) return;
                      let r = e.target ? rL(e.target) : function (e) {
                        let t = Math.round(e.startTime),
                          n = ie.get(t);
                        if (!n) for (let e = -5; e <= 5; e++) {
                          let r = ie.get(t + e);
                          if (r) {
                            n = r;
                            break;
                          }
                        }
                        return n || "<unknown>";
                      }(e);
                      if (a9.length > 10) {
                        let e = a9.shift();
                        a7.delete(e);
                      }
                      a9.push(t), a7.set(t, {
                        span: n,
                        elementName: r
                      });
                    });
                  };
                  aV("event", n), aV("first-input", n);
                }(), function (e, t) {
                  let {
                      traceFetch: n,
                      traceXHR: r,
                      shouldCreateSpanForRequest: a,
                      enableHTTPTimings: i,
                      tracePropagationTargets: o,
                      onRequestSpanStart: l,
                      onRequestSpanEnd: s
                    } = {
                      ...iw,
                      ...t
                    },
                    u = "function" == typeof a ? a : e => !0,
                    c = e => function (e, t) {
                      let n = n7();
                      if (n) {
                        let r, a;
                        try {
                          r = new URL(e, n), a = new URL(n).origin;
                        } catch {
                          return !1;
                        }
                        let i = r.origin === a;
                        return t ? ex(r.toString(), t) || i && ex(r.pathname, t) : i;
                      }
                      {
                        let n = !!e.match(/^\/(?!\/)/);
                        return t ? ex(e, t) : n;
                      }
                    }(e, o),
                    d = {},
                    f = e.getOptions().propagateTraceparent;
                  n && rp(t => {
                    let n = function (e, t, n, r, a) {
                      if (!e.fetchData) return;
                      let {
                          method: i,
                          url: o
                        } = e.fetchData,
                        l = tl() && t(o);
                      if (e.endTimestamp) {
                        var s, u, c;
                        let t,
                          n = e.fetchData.__span;
                        if (!n) return;
                        let i = r[n];
                        i && (l && (function (e, t) {
                          if (t.response) {
                            tp(e, t.response.status);
                            let n = t.response?.headers?.get("content-length");
                            if (n) {
                              let t = parseInt(n);
                              t > 0 && e.setAttribute("http.response_content_length", t);
                            }
                          } else t.error && e.setStatus({
                            code: 2,
                            message: "internal_error"
                          });
                          e.end();
                        }(i, e), s = i, u = e, t = "object" == typeof (c = a) && null !== c ? c.onRequestSpanEnd : void 0, t?.(s, {
                          headers: u.response?.headers,
                          error: u.error
                        })), delete r[n]);
                        return;
                      }
                      let {
                          spanOrigin: d = "auto.http.browser",
                          propagateTraceparent: f = !1
                        } = "object" == typeof a ? a : {
                          spanOrigin: a
                        },
                        p = e1(),
                        h = !!tW() || !!p && tc(p),
                        m = l && h ? ne(function (e, t, n) {
                          if (e.startsWith("data:")) {
                            let r = rP(e);
                            return {
                              name: `${t} ${r}`,
                              attributes: ib(e, void 0, t, n)
                            };
                          }
                          let r = rw(e),
                            a = r ? rE(r) : e;
                          return {
                            name: `${t} ${a}`,
                            attributes: ib(e, r, t, n)
                          };
                        }(o, i, d)) : new tK();
                      if (l && !h && p?.recordDroppedEvent("no_parent_span", "span"), e.fetchData.__span = m.spanContext().spanId, r[m.spanContext().spanId] = m, n(e.fetchData.url)) {
                        let t = e.args[0],
                          n = {
                            ...(e.args[1] || {})
                          },
                          r = function (e, t, n, r) {
                            var a, i;
                            let o = iy({
                                span: n,
                                propagateTraceparent: r
                              }),
                              l = o["sentry-trace"],
                              s = o.baggage,
                              u = o.traceparent;
                            if (!l) return;
                            let c = t.headers || (ee(e) ? e.headers : void 0);
                            if (!c) return {
                              ...o
                            };
                            if (a = c, "u" > typeof Headers && Z(a, Headers)) {
                              let e = new Headers(c);
                              if (e.get("sentry-trace") || e.set("sentry-trace", l), r && u && !e.get("traceparent") && e.set("traceparent", u), s) {
                                let t = e.get("baggage");
                                t ? iv(t) || e.set("baggage", `${t},${s}`) : e.set("baggage", s);
                              }
                              return e;
                            }
                            if (Array.isArray(i = c) && i.every(e => Array.isArray(e) && 2 === e.length && "string" == typeof e[0])) {
                              let e = [...c];
                              e.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", l]), r && u && !e.find(e => "traceparent" === e[0]) && e.push(["traceparent", u]);
                              let t = c.find(e => "baggage" === e[0] && "string" == typeof e[1] && iv(e[1]));
                              return s && !t && e.push(["baggage", s]), e;
                            }
                            {
                              let e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
                                t = "traceparent" in c ? c.traceparent : void 0,
                                n = "baggage" in c ? c.baggage : void 0,
                                a = n ? Array.isArray(n) ? [...n] : [n] : [],
                                i = n && (Array.isArray(n) ? n.find(e => iv(e)) : iv(n));
                              s && !i && a.push(s);
                              let o = Object.assign({}, c, {
                                "sentry-trace": e ?? l,
                                baggage: a.length > 0 ? a.join(",") : void 0
                              });
                              return r && u && !t && (o.traceparent = u), o;
                            }
                          }(t, n, tl() && h ? m : void 0, f);
                        r && (e.args[1] = n, n.headers = r);
                      }
                      if (p) {
                        let t = {
                          input: e.args,
                          response: e.response,
                          startTimestamp: e.startTimestamp,
                          endTimestamp: e.endTimestamp
                        };
                        p.emit("beforeOutgoingRequestSpan", m, t);
                      }
                      return m;
                    }(t, u, c, d, {
                      propagateTraceparent: f,
                      onRequestSpanEnd: s
                    });
                    if (n) {
                      let r = i_(t.fetchData.url),
                        a = r ? rx(r).host : void 0;
                      n.setAttributes({
                        "http.url": r ? rP(r) : void 0,
                        "server.address": a
                      }), i && iE(n, e), l?.(n, {
                        headers: t.headers
                      });
                    }
                  }), r && rC(t => {
                    let n = function (e, t, n, r, a, i) {
                      let o = e.xhr,
                        l = o?.[rO];
                      if (!o || o.__sentry_own_request__ || !l) return;
                      let {
                          url: s,
                          method: u
                        } = l,
                        c = tl() && t(s);
                      if (e.endTimestamp) {
                        let t = o.__sentry_xhr_span_id__;
                        if (!t) return;
                        let n = r[t];
                        n && (c && void 0 !== l.status_code && (tp(n, l.status_code), n.end(), i?.(n, {
                          headers: iS(function (e) {
                            let t;
                            try {
                              t = e.getAllResponseHeaders();
                            } catch (t) {
                              return r9 && F(t, "Failed to get xhr response headers", e), {};
                            }
                            return t ? t.split("\r\n").reduce((e, t) => {
                              let [n, r] = t.split(": ");
                              return r && (e[n.toLowerCase()] = r), e;
                            }, {}) : {};
                          }(o)),
                          error: e.error
                        })), delete r[t]);
                        return;
                      }
                      let d = i_(s),
                        f = d ? rx(d) : rx(s),
                        p = rP(rk(s)),
                        h = e1(),
                        m = !!tW() || !!h && tc(h),
                        g = c && m ? ne({
                          name: `${u} ${p}`,
                          attributes: {
                            url: rP(s),
                            type: "xhr",
                            "http.method": u,
                            "http.url": d ? rP(d) : void 0,
                            "server.address": f?.host,
                            [e8]: "auto.http.browser",
                            [e5]: "http.client",
                            ...(f?.search && {
                              "http.query": f?.search
                            }),
                            ...(f?.hash && {
                              "http.fragment": f?.hash
                            })
                          }
                        }) : new tK();
                      return c && !m && h?.recordDroppedEvent("no_parent_span", "span"), o.__sentry_xhr_span_id__ = g.spanContext().spanId, r[o.__sentry_xhr_span_id__] = g, n(s) && function (e, t, n) {
                        let {
                          "sentry-trace": r,
                          baggage: a,
                          traceparent: i
                        } = iy({
                          span: t,
                          propagateTraceparent: n
                        });
                        r && function (e, t, n, r) {
                          let a = e.__sentry_xhr_v3__?.request_headers;
                          if (!a?.["sentry-trace"] && e.setRequestHeader) try {
                            if (e.setRequestHeader("sentry-trace", t), r && !a?.traceparent && e.setRequestHeader("traceparent", r), n) {
                              let t = a?.baggage;
                              t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n);
                            }
                          } catch {}
                        }(e, r, a, i);
                      }(o, tl() && m ? g : void 0, a), h && h.emit("beforeOutgoingRequestSpan", g, e), g;
                    }(t, u, c, d, f, s);
                    n && (i && iE(n, e), l?.(n, {
                      headers: iS(t.xhr.__sentry_xhr_v3__?.request_headers)
                    }));
                  });
                }(e, {
                  traceFetch: y,
                  traceXHR: b,
                  tracePropagationTargets: e.getOptions().tracePropagationTargets,
                  shouldCreateSpanForRequest: E,
                  enableHTTPTimings: x,
                  onRequestSpanStart: M,
                  onRequestSpanEnd: D
                }), w && e.addIntegration({
                  name: "FetchStreamPerformance",
                  setup() {
                    let e;
                    rl(e = "fetch-body-resolved", e => {
                      if (e.response) {
                        let t = id.get(e.response);
                        if (t && e.endTimestamp) {
                          t.end(e.endTimestamp);
                          let n = ip.get(e.response);
                          n && clearTimeout(n);
                        }
                      }
                    }), rs(e, () => rh(rg)), rp(e => {
                      if (e.endTimestamp && e.response) {
                        let t = e.response.headers?.get("content-type") || "";
                        if (e.response.headers?.get("content-length") || !ih.some(e => t.startsWith(e))) return;
                        let n = e.fetchData?.url || "",
                          r = e.fetchData?.method || "GET",
                          a = rw(n),
                          i = n.startsWith("data:") ? rP(n) : a ? rE(a) : n,
                          o = ne({
                            name: `${r} ${i}`,
                            startTime: e.endTimestamp,
                            attributes: {
                              url: rP(n),
                              "http.method": r,
                              type: "fetch",
                              [e5]: "http.client.stream",
                              [e8]: "auto.http.browser.stream"
                            }
                          });
                        id.set(e.response, o);
                        let l = setTimeout(() => {
                          o.isRecording() && o.end();
                        }, 9e4);
                        ip.set(e.response, l);
                      }
                    });
                  }
                });
              }
            };
          })({
            ...e,
            instrumentNavigation: !1,
            instrumentPageLoad: !1,
            onRequestSpanStart(...t) {
              let [n, {
                headers: r
              }] = t;
              return r?.get("next-router-prefetch") && n?.setAttribute("http.request.prefetch", !0), e.onRequestSpanStart?.(...t);
            }
          }),
          {
            instrumentPageLoad: n = !0,
            instrumentNavigation: r = !0
          } = e;
        return {
          ...t,
          afterAllSetup(e) {
            !ik() && (r && function (e) {
              if (P.document.getElementById("__NEXT_DATA__")) iX.events.on("routeChangeStart", t => {
                let n,
                  r,
                  a = rk(t),
                  i = function (e) {
                    let t = P.__BUILD_MANIFEST?.sortedPages;
                    if (t) return t.find(t => {
                      let n,
                        r,
                        a,
                        i = (n = t.split("/"), r = "", n[n.length - 1]?.match(/^\[\[\.\.\..+\]\]$/) && (n.pop(), r = "(?:/(.+?))?"), a = n.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/"), RegExp(`^${a}${r}(?:/)?$`));
                      return e.match(i);
                    });
                  }(a);
                i ? (n = i, r = "route") : (n = a, r = "url"), iR(e, {
                  name: n,
                  attributes: {
                    [e5]: "navigation",
                    [e8]: "auto.navigation.nextjs.pages_router_instrumentation",
                    [e2]: r
                  }
                });
              });else {
                let t, n, r;
                E = (t, n) => {
                  let r = x.default.env._sentryBasePath ?? P._sentryBasePath,
                    a = iz(new URL(r && !t.startsWith(r) ? `${r}${t}` : t, P.location.href).pathname),
                    i = i$(a),
                    o = i ?? a;
                  "router-patch" === iU && (iU = "transition-start-hook");
                  let l = iB.current;
                  l ? (l.updateName(o), l.setAttributes({
                    "navigation.type": `router.${n}`,
                    [e2]: i ? "route" : "url"
                  }), iB.current = void 0) : iR(e, {
                    name: o,
                    attributes: {
                      [e5]: "navigation",
                      [e8]: "auto.navigation.nextjs.app_router_instrumentation",
                      [e2]: i ? "route" : "url",
                      "navigation.type": `router.${n}`
                    }
                  });
                }, P.addEventListener("popstate", () => {
                  let t = iz(P.location.pathname),
                    n = i$(t);
                  iB.current?.isRecording() ? (iB.current.updateName(n ?? t), iB.current.setAttribute(e2, n ? "route" : "url")) : iB.current = iR(e, {
                    name: n ?? t,
                    attributes: {
                      [e8]: "auto.navigation.nextjs.app_router_instrumentation",
                      [e2]: n ? "route" : "url",
                      "navigation.type": "browser.popstate"
                    }
                  });
                }), t = !1, n = 0, r = setInterval(() => {
                  n++;
                  let a = P?.next?.router ?? P?.nd?.router;
                  t || n > 500 ? clearInterval(r) : a && (clearInterval(r), t = !0, iq(e, a, iB), ["nd", "next"].forEach(t => {
                    let n = P[t];
                    n && (P[t] = new Proxy(n, {
                      set: (t, n, r) => ("router" === n && "object" == typeof r && null !== r && iq(e, r, iB), t[n] = r, !0)
                    }));
                  }));
                }, 20);
              }
            }(e), t.afterAllSetup(e), n && function (e) {
              if (P.document.getElementById("__NEXT_DATA__")) !function (e) {
                let {
                    route: t,
                    params: n,
                    sentryTrace: r,
                    baggage: a
                  } = function () {
                    let e,
                      t = P.document.getElementById("__NEXT_DATA__");
                    if (t?.innerHTML) try {
                      e = JSON.parse(t.innerHTML);
                    } catch {
                      ao && z("Could not extract __NEXT_DATA__");
                    }
                    if (!e) return {};
                    let n = {},
                      {
                        page: r,
                        query: a,
                        props: i
                      } = e;
                    return n.route = r, n.params = a, i?.pageProps && (n.sentryTrace = i.pageProps._sentryTraceData, n.baggage = i.pageProps._sentryBaggage), n;
                  }(),
                  i = ti(a),
                  o = t || P.location.pathname;
                i?.["sentry-transaction"] && "/_error" === o && (o = (o = i["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, ""));
                let l = eL();
                iT(e, {
                  name: o,
                  startTime: l ? l / 1e3 : void 0,
                  attributes: {
                    [e5]: "pageload",
                    [e8]: "auto.pageload.nextjs.pages_router_instrumentation",
                    [e2]: t ? "route" : "url",
                    ...(n && {
                      ...n
                    })
                  }
                }, {
                  sentryTrace: r,
                  baggage: a
                });
              }(e);else {
                let t, n, r;
                n = i$(t = iz(P.location.pathname)), iT(e, {
                  name: n ?? t,
                  startTime: (r = eL()) ? r / 1e3 : void 0,
                  attributes: {
                    [e5]: "pageload",
                    [e8]: "auto.pageload.nextjs.app_router_instrumentation",
                    [e2]: n ? "route" : "url"
                  }
                });
              }
            }(e));
          }
        };
      }()), a = P._sentryRewriteFramesAssetPrefixPath || "", i = x.default.env._sentryAssetPrefix || P._sentryAssetPrefix, o = x.default.env._sentryBasePath || P._sentryBasePath, l = "true" === x.default.env._experimentalThirdPartyOriginStackFrames || "true" === P._experimentalThirdPartyOriginStackFrames, r.push((({
        assetPrefix: e,
        basePath: t,
        rewriteFramesAssetPrefixPath: n,
        experimentalThirdPartyOriginStackFrames: r
      }) => ({
        ...((e = {}) => {
          let t = e.root,
            n = e.prefix || "app:///",
            r = "window" in P && !!P.window,
            a = e.iteratee || function ({
              isBrowser: e,
              root: t,
              prefix: n
            }) {
              return r => {
                if (!r.filename) return r;
                let a = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                  i = /^\//.test(r.filename);
                if (e) {
                  if (t) {
                    let e = r.filename;
                    0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                  }
                } else if (a || i) {
                  let e,
                    i,
                    o = a ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                    l = t ? function (e, t) {
                      e = iG(e).slice(1), t = iG(t).slice(1);
                      let n = iY(e.split("/")),
                        r = iY(t.split("/")),
                        a = Math.min(n.length, r.length),
                        i = a;
                      for (let e = 0; e < a; e++) if (n[e] !== r[e]) {
                        i = e;
                        break;
                      }
                      let o = [];
                      for (let e = i; e < n.length; e++) o.push("..");
                      return (o = o.concat(r.slice(i))).join("/");
                    }(t, o) : (e = o.length > 1024 ? `<truncated>${o.slice(-1024)}` : o, (i = iQ.exec(e)) ? i.slice(1) : [])[2] || "";
                  r.filename = `${n}${l}`;
                }
                return r;
              };
            }({
              isBrowser: r,
              root: t,
              prefix: n
            });
          return {
            name: "RewriteFrames",
            processEvent(e) {
              let t = e;
              return e.exception && Array.isArray(e.exception.values) && (t = function (e) {
                try {
                  return {
                    ...e,
                    exception: {
                      ...e.exception,
                      values: e.exception.values.map(e => {
                        var t;
                        return {
                          ...e,
                          ...(e.stacktrace && {
                            stacktrace: {
                              ...(t = e.stacktrace),
                              frames: t?.frames?.map(e => a(e))
                            }
                          })
                        };
                      })
                    }
                  };
                } catch {
                  return e;
                }
              }(t)), t;
            }
          };
        })({
          iteratee: a => {
            if (r) {
              let n = "u" > typeof window && window.location ? window.location.origin : "";
              if (a.filename?.startsWith(n) && !a.filename.endsWith(".js")) return a;
              if (e) a.filename?.startsWith(e) && (a.filename = a.filename.replace(e, "app://"));else if (t) try {
                let {
                  origin: e
                } = new URL(a.filename);
                e === n && (a.filename = a.filename?.replace(e, "app://").replace(t, ""));
              } catch {}
            } else try {
              let {
                origin: e
              } = new URL(a.filename);
              a.filename = a.filename?.replace(e, "app://").replace(n, "");
            } catch {}
            return r ? (a.filename?.includes("/_next") && (a.filename = decodeURI(a.filename)), a.filename?.match(/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (a.in_app = !1)) : (a.filename?.startsWith("app:///_next") && (a.filename = decodeURI(a.filename)), a.filename?.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (a.in_app = !1)), a;
          }
        }),
        name: "NextjsClientStackFrameNormalization"
      }))({
        assetPrefix: i,
        basePath: o,
        rewriteFramesAssetPrefixPath: a,
        experimentalThirdPartyOriginStackFrames: l
      })), r),
      release: "8ec7a5bd4d4279d26fe5c2817a0c02e7248e7c04",
      ...e
    };
    !function (e) {
      let t = "/monitoring";
      if (t && e.dsn) {
        let n = t_(e.dsn);
        if (!n) return;
        let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
        if (r) {
          let a = r[1],
            i = r[2],
            o = `${t}?o=${a}&p=${n.projectId}`;
          i && (o += `&r=${i}`), e.tunnel = o, ao && $(`Tunneling events to "${o}"`);
        } else ao && z("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.");
      }
    }(s), U(s, "nextjs", ["nextjs", "react"]), s.ignoreSpans = [...(s.ignoreSpans || []), /^\/404$/, RegExp(`^${iF}$`)], function (e) {
      var t;
      let r = {
        ...e
      };
      U(r, "react"), t = {
        version: aa.version
      }, eJ().setContext("react", t);
      let a = function (e = {}) {
        var t, r;
        let a,
          i = !e.skipBrowserExtensionCheck && !!function () {
            if (void 0 === P.window || P.nw) return !1;
            let e = P.chrome || P.browser;
            if (!e?.runtime?.id) return !1;
            let t = n7();
            return !(P === P.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t));
          }() && (rj && I(() => {
            console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
          }), !0),
          o = null == e.defaultIntegrations ? ar() : e.defaultIntegrations,
          l = {
            ...e,
            enabled: !i && e.enabled,
            stackParser: Array.isArray(t = e.stackParser || r8) ? eh(...t) : t,
            integrations: function (e) {
              let t,
                n,
                r = e.defaultIntegrations || [],
                a = e.integrations;
              if (r.forEach(e => {
                e.isDefaultInstance = !0;
              }), Array.isArray(a)) t = [...r, ...a];else if ("function" == typeof a) {
                let e = a(r);
                t = Array.isArray(e) ? e : [e];
              } else t = r;
              return n = {}, t.forEach(e => {
                let {
                    name: t
                  } = e,
                  r = n[t];
                r && !r.isDefaultInstance && e.isDefaultInstance || (n[t] = e);
              }), Object.values(n);
            }({
              integrations: e.integrations,
              defaultIntegrations: o
            }),
            transport: e.transport || ae
          };
        return n = an, !0 === l.debug && (C ? D() : I(() => {
          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
        })), eK().update(l.initialScope), r = a = new ra(l), eK().setClient(r), a.init(), a;
      }(r);
      n = ai;
    }(s);
    let u = (e, t) => {
      var n;
      return H(n = t?.originalException) && "string" == typeof n.digest && n.digest.startsWith("NEXT_REDIRECT;") || e.exception?.values?.[0]?.value === "NEXT_REDIRECT" ? null : e;
    };
    u.id = "NextRedirectErrorFilter", eJ().addEventProcessor(u);
    try {
      eZ().setTag("turbopack", !0);
    } catch {}
  }({
    dsn: "https://8233d4f206662e687dccf548e932db7e@o1215754.ingest.us.sentry.io/4511491701669888",
    sendDefaultPii: !0,
    enabled: !0
  }), e.s(["onRouterTransitionStart", 0, function (e, t) {
    E && E(e, t);
  }], 499970);
};
