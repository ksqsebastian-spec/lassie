// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 497350.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  var n = e.r(345078);
  function a(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = {
      stream: !0
    },
    u = Object.prototype.hasOwnProperty;
  function i(t) {
    var r = e.r(t);
    return "function" != typeof r.then || "fulfilled" === r.status ? null : (r.then(function (e) {
      r.status = "fulfilled", r.value = e;
    }, function (e) {
      r.status = "rejected", r.reason = e;
    }), r);
  }
  var o = new WeakSet(),
    c = new WeakSet();
  function s() {}
  function f(t) {
    for (var r = t[1], n = [], a = 0; a < r.length; a++) {
      var l = e.L(r[a]);
      if (c.has(l) || n.push(l), !o.has(l)) {
        var u = c.add.bind(c, l);
        l.then(u, s), o.add(l);
      }
    }
    return 4 === t.length ? 0 === n.length ? i(t[0]) : Promise.all(n).then(function () {
      return i(t[0]);
    }) : 0 < n.length ? Promise.all(n) : null;
  }
  function d(t) {
    var r = e.r(t[0]);
    if (4 === t.length && "function" == typeof r.then) if ("fulfilled" === r.status) r = r.value;else throw r.reason;
    return "*" === t[2] ? r : "" === t[2] ? r.__esModule ? r.default : r : u.call(r, t[2]) ? r[t[2]] : void 0;
  }
  var h = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    p = Symbol.for("react.transitional.element"),
    y = Symbol.for("react.lazy"),
    g = Symbol.iterator,
    _ = Symbol.asyncIterator,
    v = Array.isArray,
    E = Object.getPrototypeOf,
    P = Object.prototype,
    S = new WeakMap();
  function R(e, t, r) {
    S.has(e) || S.set(e, {
      id: t,
      originalBind: e.bind,
      bound: r
    });
  }
  var m = Object.prototype,
    b = Array.prototype;
  function T(e, t, r) {
    this.status = e, this.value = t, this.reason = r;
  }
  function O(e) {
    switch (e.status) {
      case "resolved_model":
        L(e);
        break;
      case "resolved_module":
        H(e);
    }
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "pending":
      case "blocked":
      case "halted":
        throw e;
      default:
        throw e.reason;
    }
  }
  function A() {
    return new T("pending", null, null);
  }
  function w(e, t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var l = t[a];
      "function" == typeof l ? l(r) : X(e, l, r);
    }
  }
  function N(e, t, r) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      "function" == typeof a ? a(r) : $(e, a.handler, r);
    }
  }
  function C(e, t) {
    var r = t.handler.chunk;
    if (null === r) return null;
    if (r === e) return t.handler;
    if (null !== (t = r.value)) for (r = 0; r < t.length; r++) {
      var n = t[r];
      if ("function" != typeof n && null !== (n = C(e, n))) return n;
    }
    return null;
  }
  function I(e, t, r, n) {
    switch (t.status) {
      case "fulfilled":
        w(e, r, t.value, t);
        break;
      case "blocked":
        for (var a = 0; a < r.length; a++) {
          var l = r[a];
          if ("function" != typeof l) {
            var u = C(t, l);
            if (null !== u) switch (X(e, l, u.value), r.splice(a, 1), a--, null !== n && -1 !== (l = n.indexOf(l)) && n.splice(l, 1), t.status) {
              case "fulfilled":
                w(e, r, t.value, t);
                return;
              case "rejected":
                null !== n && N(e, n, t.reason);
                return;
            }
          }
        }
      case "pending":
        if (t.value) for (e = 0; e < r.length; e++) t.value.push(r[e]);else t.value = r;
        if (t.reason) {
          if (n) for (r = 0; r < n.length; r++) t.reason.push(n[r]);
        } else t.reason = n;
        break;
      case "rejected":
        n && N(e, n, t.reason);
    }
  }
  function F(e, t, r) {
    if ("pending" !== t.status && "blocked" !== t.status) t.reason.error(r);else {
      var n = t.reason;
      t.status = "rejected", t.reason = r, null !== n && N(e, n, r);
    }
  }
  function j(e, t, r) {
    return new T("resolved_model", (r ? '{"done":true,"value":' : '{"done":false,"value":') + t + "}", e);
  }
  function M(e, t, r, n) {
    D(e, t, (n ? '{"done":true,"value":' : '{"done":false,"value":') + r + "}");
  }
  function D(e, t, r) {
    if ("pending" !== t.status) t.reason.enqueueModel(r);else {
      var n = t.value,
        a = t.reason;
      t.status = "resolved_model", t.value = r, t.reason = e, null !== n && (L(t), I(e, t, n, a));
    }
  }
  function U(e, t, r) {
    if ("pending" === t.status || "blocked" === t.status) {
      var n = t.value,
        a = t.reason;
      t.status = "resolved_module", t.value = r, t.reason = null, null !== n && (H(t), I(e, t, n, a));
    }
  }
  T.prototype = Object.create(Promise.prototype), Object.defineProperty(T.prototype, "then", {
    writable: !0,
    enumerable: !0,
    configurable: !0,
    value: function (e, t) {
      switch (this.status) {
        case "resolved_model":
          L(this);
          break;
        case "resolved_module":
          H(this);
      }
      switch (this.status) {
        case "fulfilled":
          "function" == typeof e && e(this.value);
          break;
        case "pending":
        case "blocked":
          "function" == typeof e && (null === this.value && (this.value = []), this.value.push(e)), "function" == typeof t && (null === this.reason && (this.reason = []), this.reason.push(t));
          break;
        case "halted":
          break;
        default:
          "function" == typeof t && t(this.reason);
      }
    }
  });
  var k = null;
  function L(e) {
    var t = k;
    k = null;
    var r = e.value,
      n = e.reason;
    e.status = "blocked", e.value = null, e.reason = null;
    try {
      var a = es(n, r),
        l = e.value;
      if (null !== l) for (e.value = null, e.reason = null, r = 0; r < l.length; r++) {
        var u = l[r];
        "function" == typeof u ? u(a) : X(n, u, a);
      }
      if (null !== k) {
        if (k.errored) throw k.reason;
        if (0 < k.deps) {
          k.value = a, k.chunk = e;
          return;
        }
      }
      e.status = "fulfilled", e.value = a, e.reason = null;
    } catch (t) {
      e.status = "rejected", e.reason = t;
    } finally {
      k = t;
    }
  }
  function H(e) {
    try {
      var t = d(e.value);
      e.status = "fulfilled", e.value = t, e.reason = null;
    } catch (t) {
      e.status = "rejected", e.reason = t;
    }
  }
  function x(e, t) {
    e._closed = !0, e._closedReason = t, e._chunks.forEach(function (r) {
      "pending" === r.status ? F(e, r, t) : "fulfilled" === r.status && null !== r.reason && r.reason.error(t);
    });
  }
  function V(e) {
    return {
      $$typeof: y,
      _payload: e,
      _init: O
    };
  }
  function B(e, t) {
    var r = e._chunks,
      n = r.get(t);
    return n || (e._closed ? e._allowPartialStream ? ((e = n = A()).status = "halted", e.value = null, e.reason = null) : n = new T("rejected", null, e._closedReason) : n = A(), r.set(t, n)), n;
  }
  function X(e, t, r) {
    var n = t.handler,
      l = t.parentObject,
      i = t.key,
      o = t.map,
      c = t.path;
    try {
      for (var s = 1; s < c.length; s++) {
        for (; "object" == typeof r && null !== r && r.$$typeof === y;) {
          var f = r._payload;
          if (f === n.chunk) r = n.value;else {
            switch (f.status) {
              case "resolved_model":
                L(f);
                break;
              case "resolved_module":
                H(f);
            }
            switch (f.status) {
              case "fulfilled":
                r = f.value;
                continue;
              case "blocked":
                var d = C(f, t);
                if (null !== d) {
                  r = d.value;
                  continue;
                }
              case "pending":
                c.splice(0, s - 1), null === f.value ? f.value = [t] : f.value.push(t), null === f.reason ? f.reason = [t] : f.reason.push(t);
                return;
              case "halted":
                return;
              default:
                $(e, t.handler, f.reason);
                return;
            }
          }
        }
        var h = c[s];
        if ("object" == typeof r && null !== r && u.call(r, h)) r = r[h];else throw Error(a(570));
      }
      for (; "object" == typeof r && null !== r && r.$$typeof === y;) {
        var g = r._payload;
        if (g === n.chunk) r = n.value;else {
          switch (g.status) {
            case "resolved_model":
              L(g);
              break;
            case "resolved_module":
              H(g);
          }
          if ("fulfilled" === g.status) {
            r = g.value;
            continue;
          }
          break;
        }
      }
      var _ = o(e, r, l, i);
      if ("__proto__" !== i && (l[i] = _), "" === i && null === n.value && (n.value = _), l[0] === p && "object" == typeof n.value && null !== n.value && n.value.$$typeof === p) {
        var v = n.value;
        "3" === i && (v.props = _);
      }
    } catch (r) {
      $(e, t.handler, r);
      return;
    }
    n.deps--, 0 === n.deps && null !== (t = n.chunk) && "blocked" === t.status && (r = t.value, t.status = "fulfilled", t.value = n.value, t.reason = n.reason, null !== r && w(e, r, n.value, t));
  }
  function $(e, t, r) {
    t.errored || (t.errored = !0, t.value = null, t.reason = r, null !== (t = t.chunk) && "blocked" === t.status && F(e, t, r));
  }
  function K(e, t, r, n, a, l) {
    return k ? (n = k, n.deps++) : n = k = {
      parent: null,
      chunk: null,
      value: null,
      reason: null,
      deps: 1,
      errored: !1
    }, t = {
      handler: n,
      parentObject: t,
      key: r,
      map: a,
      path: l
    }, null === e.value ? e.value = [t] : e.value.push(t), null === e.reason ? e.reason = [t] : e.reason.push(t), null;
  }
  function G(e, t, r, n) {
    if (!e._serverReferenceConfig) return function (e, t) {
      function r() {
        var e = Array.prototype.slice.call(arguments);
        return a ? "fulfilled" === a.status ? t(n, a.value.concat(e)) : Promise.resolve(a).then(function (r) {
          return t(n, r.concat(e));
        }) : t(n, e);
      }
      var n = e.id,
        a = e.bound;
      return R(r, n, a), r;
    }(t, e._callServer);
    var l = function (e, t) {
        var r = "",
          n = e[t];
        if (n) r = n.name;else {
          var l = t.lastIndexOf("#");
          if (-1 !== l && (r = t.slice(l + 1), n = e[t.slice(0, l)]), !n) throw Error(a(589, t));
        }
        return n.async ? [n.id, n.chunks, r, 1] : [n.id, n.chunks, r];
      }(e._serverReferenceConfig, t.id),
      u = f(l);
    if (u) t.bound && (u = Promise.all([u, t.bound]));else {
      if (!t.bound) return R(u = d(l), t.id, t.bound), u;
      u = Promise.resolve(t.bound);
    }
    if (k) {
      var i = k;
      i.deps++;
    } else i = k = {
      parent: null,
      chunk: null,
      value: null,
      reason: null,
      deps: 1,
      errored: !1
    };
    return u.then(function () {
      var a = d(l);
      if (t.bound) {
        var u = t.bound.value.slice(0);
        u.unshift(null), a = a.bind.apply(a, u);
      }
      R(a, t.id, t.bound), "__proto__" !== n && (r[n] = a), "" === n && null === i.value && (i.value = a), r[0] === p && "object" == typeof i.value && null !== i.value && i.value.$$typeof === p && (u = i.value, "3" === n) && (u.props = a), i.deps--, 0 === i.deps && null !== (a = i.chunk) && "blocked" === a.status && (u = a.value, a.status = "fulfilled", a.value = i.value, a.reason = null, null !== u && w(e, u, i.value, a));
    }, function (t) {
      if (!i.errored) {
        i.errored = !0, i.value = null, i.reason = t;
        var r = i.chunk;
        null !== r && "blocked" === r.status && F(e, r, t);
      }
    }), null;
  }
  function q(e, t, r, n, l) {
    var i = parseInt((t = t.split(":"))[0], 16);
    switch ((i = B(e, i)).status) {
      case "resolved_model":
        L(i);
        break;
      case "resolved_module":
        H(i);
    }
    switch (i.status) {
      case "fulfilled":
        i = i.value;
        for (var o = 1; o < t.length; o++) {
          for (; "object" == typeof i && null !== i && i.$$typeof === y;) {
            switch ((i = i._payload).status) {
              case "resolved_model":
                L(i);
                break;
              case "resolved_module":
                H(i);
            }
            switch (i.status) {
              case "fulfilled":
                i = i.value;
                break;
              case "blocked":
              case "pending":
                return K(i, r, n, e, l, t.slice(o - 1));
              case "halted":
                return k ? (e = k, e.deps++) : k = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: null,
                  deps: 1,
                  errored: !1
                }, null;
              default:
                return k ? (k.errored = !0, k.value = null, k.reason = i.reason) : k = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: i.reason,
                  deps: 0,
                  errored: !0
                }, null;
            }
          }
          var c = t[o];
          if ("object" != typeof i || null === i || E(i) !== m && E(i) !== b || !u.call(i, c)) throw Error(a(570));
          i = i[c];
        }
        for (; "object" == typeof i && null !== i && i.$$typeof === y;) {
          switch ((t = i._payload).status) {
            case "resolved_model":
              L(t);
              break;
            case "resolved_module":
              H(t);
          }
          if ("fulfilled" === t.status) {
            i = t.value;
            continue;
          }
          break;
        }
        return l(e, i, r, n);
      case "pending":
      case "blocked":
        return K(i, r, n, e, l, t);
      case "halted":
        return k ? (e = k, e.deps++) : k = {
          parent: null,
          chunk: null,
          value: null,
          reason: null,
          deps: 1,
          errored: !1
        }, null;
      default:
        return k ? (k.errored = !0, k.value = null, k.reason = i.reason) : k = {
          parent: null,
          chunk: null,
          value: null,
          reason: i.reason,
          deps: 0,
          errored: !0
        }, null;
    }
  }
  function Y(e, t) {
    return new Map(t);
  }
  function W(e, t) {
    return new Set(t);
  }
  function z(e, t) {
    return new Blob(t.slice(1), {
      type: t[0]
    });
  }
  function Q(e, t) {
    e = new FormData();
    for (var r = 0; r < t.length; r++) e.append(t[r][0], t[r][1]);
    return e;
  }
  function J(e, t) {
    return t[Symbol.iterator]();
  }
  function Z(e, t) {
    return t;
  }
  function ee() {
    throw Error(a(466));
  }
  function et(e, t, r, n, a, l, u, i) {
    var o = new Map();
    this._bundlerConfig = e, this._serverReferenceConfig = t, this._moduleLoading = r, this._callServer = void 0 !== n ? n : ee, this._encodeFormAction = a, this._nonce = l, this._chunks = o, this._stringDecoder = new TextDecoder(), this._closed = !1, this._closedReason = null, this._allowPartialStream = i, this._tempRefs = u;
  }
  function er(e, t, r) {
    var n = (e = e._chunks).get(t);
    n && "pending" !== n.status ? n.reason.enqueueValue(r) : (r = new T("fulfilled", r, null), e.set(t, r));
  }
  function en(e, t, r, n) {
    var a = e._chunks,
      l = a.get(t);
    l ? "pending" === l.status && (t = l.value, l.status = "fulfilled", l.value = r, l.reason = n, null !== t && w(e, t, l.value, l)) : (e = new T("fulfilled", r, n), a.set(t, e));
  }
  function ea(e, t, r) {
    var n = null,
      a = !1;
    r = new ReadableStream({
      type: r,
      start: function (e) {
        n = e;
      }
    });
    var l = null;
    en(e, t, r, {
      enqueueValue: function (e) {
        null === l ? n.enqueue(e) : l.then(function () {
          n.enqueue(e);
        });
      },
      enqueueModel: function (t) {
        if (null === l) {
          var r = new T("resolved_model", t, e);
          L(r), "fulfilled" === r.status ? n.enqueue(r.value) : (r.then(function (e) {
            return n.enqueue(e);
          }, function (e) {
            return n.error(e);
          }), l = r);
        } else {
          r = l;
          var a = A();
          a.then(function (e) {
            return n.enqueue(e);
          }, function (e) {
            return n.error(e);
          }), l = a, r.then(function () {
            l === a && (l = null), D(e, a, t);
          });
        }
      },
      close: function () {
        if (!a) if (a = !0, null === l) n.close();else {
          var e = l;
          l = null, e.then(function () {
            return n.close();
          });
        }
      },
      error: function (e) {
        if (!a) if (a = !0, null === l) n.error(e);else {
          var t = l;
          l = null, t.then(function () {
            return n.error(e);
          });
        }
      }
    });
  }
  function el() {
    return this;
  }
  function eu(e, t, r) {
    var n = [],
      l = !1,
      u = 0,
      i = {};
    i[_] = function () {
      var e,
        t = 0;
      return (e = {
        next: e = function (e) {
          if (void 0 !== e) throw Error(a(524));
          if (t === n.length) {
            if (l) return new T("fulfilled", {
              done: !0,
              value: void 0
            }, null);
            n[t] = A();
          }
          return n[t++];
        }
      })[_] = el, e;
    }, en(e, t, r ? i[_]() : i, {
      enqueueValue: function (t) {
        if (u === n.length) n[u] = new T("fulfilled", {
          done: !1,
          value: t
        }, null);else {
          var r = n[u],
            a = r.value,
            l = r.reason;
          r.status = "fulfilled", r.value = {
            done: !1,
            value: t
          }, r.reason = null, null !== a && I(e, r, a, l);
        }
        u++;
      },
      enqueueModel: function (t) {
        u === n.length ? n[u] = j(e, t, !1) : M(e, n[u], t, !1), u++;
      },
      close: function (t) {
        if (!l) for (l = !0, u === n.length ? n[u] = j(e, t, !0) : M(e, n[u], t, !0), u++; u < n.length;) M(e, n[u++], '"$undefined"', !0);
      },
      error: function (t) {
        if (!l) for (l = !0, u === n.length && (n[u] = A()); u < n.length;) F(e, n[u++], t);
      }
    });
  }
  function ei() {
    var e = Error(a(441));
    return e.stack = "Error: " + e.message, e;
  }
  function eo(e, t) {
    for (var r = e.length, n = t.length, a = 0; a < r; a++) n += e[a].byteLength;
    n = new Uint8Array(n);
    for (var l = a = 0; l < r; l++) {
      var u = e[l];
      n.set(u, a), a += u.byteLength;
    }
    return n.set(t, a), n;
  }
  function ec(e, t, r, n, a, l) {
    er(e, t, a = new a((r = 0 === r.length && 0 == n.byteOffset % l ? n : eo(r, n)).buffer, r.byteOffset, r.byteLength / l));
  }
  function es(e, t) {
    return function e(t, r, n, l) {
      if ("string" == typeof r) return "$" === r[0] ? function (e, t, r, n) {
        if ("$" === n[0]) {
          if ("$" === n) return null !== k && "0" === r && (k = {
            parent: k,
            chunk: null,
            value: null,
            reason: null,
            deps: 0,
            errored: !1
          }), p;
          switch (n[1]) {
            case "$":
              return n.slice(1);
            case "L":
              return V(e = B(e, t = parseInt(n.slice(2), 16)));
            case "@":
              return B(e, t = parseInt(n.slice(2), 16));
            case "S":
              return Symbol.for(n.slice(2));
            case "h":
              return q(e, n = n.slice(2), t, r, G);
            case "T":
              if (t = "$" + n.slice(2), null == (e = e._tempRefs)) throw Error(a(511));
              return e.get(t);
            case "Q":
              return q(e, n = n.slice(2), t, r, Y);
            case "W":
              return q(e, n = n.slice(2), t, r, W);
            case "B":
              return q(e, n = n.slice(2), t, r, z);
            case "K":
              return q(e, n = n.slice(2), t, r, Q);
            case "Z":
              return ei();
            case "i":
              return q(e, n = n.slice(2), t, r, J);
            case "I":
              return 1 / 0;
            case "-":
              return "$-0" === n ? -0 : -1 / 0;
            case "N":
              return NaN;
            case "u":
              return;
            case "D":
              return new Date(Date.parse(n.slice(2)));
            case "n":
              return BigInt(n.slice(2));
            default:
              return q(e, n = n.slice(1), t, r, Z);
          }
        }
        return n;
      }(t, n, l, r) : r;
      if ("object" != typeof r || null === r) return r;
      if (v(r)) {
        for (var i = 0; i < r.length; i++) r[i] = e(t, r[i], r, "" + i);
        return r[0] === p ? (r[0] === p ? (t = {
          $$typeof: p,
          type: r[1],
          key: r[2],
          ref: null,
          props: r[3]
        }, null !== k && (k = (r = k).parent, r.errored ? t = V(t = new T("rejected", null, r.reason)) : 0 < r.deps && (i = new T("blocked", null, null), r.value = t, r.chunk = i, t = V(i)))) : t = r, t) : r;
      }
      for (i in r) u.call(r, i) && ("__proto__" === i ? delete r[i] : void 0 !== (n = e(t, r[i], r, i)) ? r[i] = n : delete r[i]);
      return r;
    }(e, t = JSON.parse(t), {
      "": t
    }, "");
  }
  function ef(e) {
    e._allowPartialStream ? (e._closed = !0, e._chunks.forEach(function (e) {
      "pending" === e.status ? (e.status = "halted", e.value = null, e.reason = null) : "fulfilled" === e.status && null !== e.reason && e.reason.close('"$undefined"');
    })) : x(e, Error(a(412)));
  }
  function ed(e) {
    return new et(null, null, null, e && e.callServer ? e.callServer : void 0, void 0, void 0, e && e.temporaryReferences ? e.temporaryReferences : void 0, !!e && !!e.unstable_allowPartialStream && e.unstable_allowPartialStream);
  }
  function eh(e, t, r) {
    function n(t) {
      x(e, t);
    }
    var u = {
        _rowState: 0,
        _rowID: 0,
        _rowTag: 0,
        _rowLength: 0,
        _buffer: []
      },
      i = t.getReader();
    i.read().then(function t(o) {
      var c = o.value;
      if (o.done) return r();
      var s = 0,
        d = u._rowState;
      o = u._rowID;
      for (var p = u._rowTag, y = u._rowLength, g = u._buffer, _ = c.length; s < _;) {
        var v = -1;
        switch (d) {
          case 0:
            58 === (v = c[s++]) ? d = 1 : o = o << 4 | (96 < v ? v - 87 : v - 48);
            continue;
          case 1:
            84 === (d = c[s]) || 65 === d || 79 === d || 111 === d || 98 === d || 85 === d || 83 === d || 115 === d || 76 === d || 108 === d || 71 === d || 103 === d || 77 === d || 109 === d || 86 === d ? (p = d, d = 2, s++) : 64 < d && 91 > d || 35 === d || 114 === d || 120 === d ? (p = d, d = 3, s++) : (p = 0, d = 3);
            continue;
          case 2:
            44 === (v = c[s++]) ? d = 4 : y = y << 4 | (96 < v ? v - 87 : v - 48);
            continue;
          case 3:
            v = c.indexOf(10, s);
            break;
          case 4:
            (v = s + y) > c.length && (v = -1);
        }
        var E = c.byteOffset + s;
        if (-1 < v) y = new Uint8Array(c.buffer, E, v - s), 98 === p ? er(e, o, v === _ ? y : y.slice()) : function (e, t, r, n, u, i) {
          switch (n) {
            case 65:
              er(e, r, eo(u, i).buffer);
              return;
            case 79:
              ec(e, r, u, i, Int8Array, 1);
              return;
            case 111:
              er(e, r, 0 === u.length ? i : eo(u, i));
              return;
            case 85:
              ec(e, r, u, i, Uint8ClampedArray, 1);
              return;
            case 83:
              ec(e, r, u, i, Int16Array, 2);
              return;
            case 115:
              ec(e, r, u, i, Uint16Array, 2);
              return;
            case 76:
              ec(e, r, u, i, Int32Array, 4);
              return;
            case 108:
              ec(e, r, u, i, Uint32Array, 4);
              return;
            case 71:
              ec(e, r, u, i, Float32Array, 4);
              return;
            case 103:
              ec(e, r, u, i, Float64Array, 8);
              return;
            case 77:
              ec(e, r, u, i, BigInt64Array, 8);
              return;
            case 109:
              ec(e, r, u, i, BigUint64Array, 8);
              return;
            case 86:
              ec(e, r, u, i, DataView, 1);
              return;
          }
          t = e._stringDecoder;
          for (var o = "", c = 0; c < u.length; c++) o += t.decode(u[c], l);
          switch (u = o += t.decode(i), n) {
            case 73:
              var s = e,
                d = r,
                p = u,
                y = s._chunks,
                g = y.get(d);
              p = es(s, p);
              var _ = function (e, t) {
                if (e) {
                  var r = e[t[0]];
                  if (e = r && r[t[2]]) r = e.name;else {
                    if (!(e = r && r["*"])) throw Error(a(588, t[0]));
                    r = t[2];
                  }
                  return 4 === t.length ? [e.id, e.chunks, r, 1] : [e.id, e.chunks, r];
                }
                return t;
              }(s._bundlerConfig, p);
              if (p = f(_)) {
                if (g) {
                  var v = g;
                  v.status = "blocked";
                } else v = new T("blocked", null, null), y.set(d, v);
                p.then(function () {
                  return U(s, v, _);
                }, function (e) {
                  return F(s, v, e);
                });
              } else g ? U(s, g, _) : (g = new T("resolved_module", _, null), y.set(d, g));
              break;
            case 72:
              switch (r = u[0], e = es(e, u = u.slice(1)), u = h.d, r) {
                case "D":
                  u.D(e);
                  break;
                case "C":
                  "string" == typeof e ? u.C(e) : u.C(e[0], e[1]);
                  break;
                case "L":
                  r = e[0], n = e[1], 3 === e.length ? u.L(r, n, e[2]) : u.L(r, n);
                  break;
                case "m":
                  "string" == typeof e ? u.m(e) : u.m(e[0], e[1]);
                  break;
                case "X":
                  "string" == typeof e ? u.X(e) : u.X(e[0], e[1]);
                  break;
                case "S":
                  "string" == typeof e ? u.S(e) : u.S(e[0], 0 === e[1] ? void 0 : e[1], 3 === e.length ? e[2] : void 0);
                  break;
                case "M":
                  "string" == typeof e ? u.M(e) : u.M(e[0], e[1]);
              }
              break;
            case 69:
              i = (n = e._chunks).get(r), u = JSON.parse(u), (t = ei()).digest = u.digest, i ? F(e, i, t) : (e = new T("rejected", null, t), n.set(r, e));
              break;
            case 84:
              (n = (e = e._chunks).get(r)) && "pending" !== n.status ? n.reason.enqueueValue(u) : (u = new T("fulfilled", u, null), e.set(r, u));
              break;
            case 78:
            case 68:
            case 74:
            case 87:
              throw Error(a(504));
            case 82:
              ea(e, r, void 0);
              break;
            case 114:
              ea(e, r, "bytes");
              break;
            case 88:
              eu(e, r, !1);
              break;
            case 120:
              eu(e, r, !0);
              break;
            case 67:
              (r = e._chunks.get(r)) && "fulfilled" === r.status && r.reason.close("" === u ? '"$undefined"' : u);
              break;
            default:
              (i = (n = e._chunks).get(r)) ? D(e, i, u) : (e = new T("resolved_model", u, e), n.set(r, e));
          }
        }(e, u, o, p, g, y), s = v, 3 === d && s++, y = o = p = d = 0, g.length = 0;else {
          c = new Uint8Array(c.buffer, E, c.byteLength - s), 98 === p ? (y -= c.byteLength, er(e, o, c)) : (g.push(c), y -= c.byteLength);
          break;
        }
      }
      return u._rowState = d, u._rowID = o, u._rowTag = p, u._rowLength = y, i.read().then(t).catch(n);
    }).catch(n);
  }
  r.createFromFetch = function (e, t) {
    var r = ed(t);
    return e.then(function (e) {
      eh(r, e.body, ef.bind(null, r));
    }, function (e) {
      x(r, e);
    }), B(r, 0);
  }, r.createFromReadableStream = function (e, t) {
    return eh(t = ed(t), e, ef.bind(null, t)), B(t, 0);
  }, r.createServerReference = function (e, t) {
    function r() {
      var r = Array.prototype.slice.call(arguments);
      return t(e, r);
    }
    return R(r, e, null), r;
  }, r.createTemporaryReferenceSet = function () {
    return new Map();
  }, r.encodeReply = function (e, t) {
    return new Promise(function (r, n) {
      var l = function (e, t, r, n) {
        function l(e, t) {
          t = new Blob([new Uint8Array(t.buffer, t.byteOffset, t.byteLength)]);
          var r = o++;
          return null === s && (s = new FormData()), s.append("" + r, t), "$" + e + r.toString(16);
        }
        function u(e, h) {
          if (null === h) return null;
          if ("object" == typeof h) {
            switch (h.$$typeof) {
              case p:
                if (void 0 !== t && -1 === e.indexOf(":")) {
                  var R,
                    m,
                    b,
                    T,
                    O,
                    A = f.get(this);
                  if (void 0 !== A) return t.set(A + ":" + e, h), "$T";
                }
                if (void 0 !== t && d === h) return d = null, "$T";
                throw Error(a(510, ""));
              case y:
                A = h._payload;
                var w = h._init;
                null === s && (s = new FormData()), c++;
                try {
                  var N = w(A),
                    C = o++,
                    I = i(N, C);
                  return s.append("" + C, I), "$" + C.toString(16);
                } catch (e) {
                  if ("object" == typeof e && null !== e && "function" == typeof e.then) {
                    c++;
                    var F = o++;
                    return A = function () {
                      try {
                        var e = i(h, F),
                          t = s;
                        t.append("" + F, e), c--, 0 === c && r(t);
                      } catch (e) {
                        n(e);
                      }
                    }, e.then(A, A), "$" + F.toString(16);
                  }
                  return n(e), null;
                } finally {
                  c--;
                }
            }
            if (A = f.get(h), "function" == typeof h.then) {
              if (void 0 !== A) if (d !== h) return A;else d = null;
              null === s && (s = new FormData()), c++;
              var j = o++;
              return e = "$@" + j.toString(16), f.set(h, e), h.then(function (e) {
                try {
                  var t = f.get(e),
                    a = void 0 !== t ? JSON.stringify(t) : i(e, j);
                  (e = s).append("" + j, a), c--, 0 === c && r(e);
                } catch (e) {
                  n(e);
                }
              }, n), e;
            }
            if (void 0 !== A) {
              if (d !== h) return A;else d = null;
            } else -1 === e.indexOf(":") && void 0 !== (A = f.get(this)) && (e = A + ":" + e, f.set(h, e), void 0 !== t && t.set(e, h));
            if (v(h)) return h;
            if (h instanceof FormData) {
              null === s && (s = new FormData());
              var M = s,
                D = "_" + (e = o++) + "_";
              return h.forEach(function (e, t) {
                M.append(D + t, e);
              }), "$K" + e.toString(16);
            }
            if (h instanceof Map) return e = o++, A = i(Array.from(h), e), null === s && (s = new FormData()), s.append("" + e, A), "$Q" + e.toString(16);
            if (h instanceof Set) return e = o++, A = i(Array.from(h), e), null === s && (s = new FormData()), s.append("" + e, A), "$W" + e.toString(16);
            if (h instanceof ArrayBuffer) return e = new Blob([h]), A = o++, null === s && (s = new FormData()), s.append("" + A, e), "$A" + A.toString(16);
            if (h instanceof Int8Array) return l("O", h);
            if (h instanceof Uint8Array) return l("o", h);
            if (h instanceof Uint8ClampedArray) return l("U", h);
            if (h instanceof Int16Array) return l("S", h);
            if (h instanceof Uint16Array) return l("s", h);
            if (h instanceof Int32Array) return l("L", h);
            if (h instanceof Uint32Array) return l("l", h);
            if (h instanceof Float32Array) return l("G", h);
            if (h instanceof Float64Array) return l("g", h);
            if (h instanceof BigInt64Array) return l("M", h);
            if (h instanceof BigUint64Array) return l("m", h);
            if (h instanceof DataView) return l("V", h);
            if ("function" == typeof Blob && h instanceof Blob) return null === s && (s = new FormData()), e = o++, s.append("" + e, h), "$B" + e.toString(16);
            if (e = null === (R = h) || "object" != typeof R ? null : "function" == typeof (R = g && R[g] || R["@@iterator"]) ? R : null) return (A = e.call(h)) === h ? (e = o++, A = i(Array.from(A), e), null === s && (s = new FormData()), s.append("" + e, A), "$i" + e.toString(16)) : Array.from(A);
            if ("function" == typeof ReadableStream && h instanceof ReadableStream) return function (e) {
              try {
                var t,
                  a,
                  l,
                  i,
                  f,
                  d,
                  h,
                  p = e.getReader({
                    mode: "byob"
                  });
              } catch (i) {
                return t = e.getReader(), null === s && (s = new FormData()), a = s, c++, l = o++, t.read().then(function e(i) {
                  if (i.done) a.append("" + l, "C"), 0 == --c && r(a);else try {
                    var o = JSON.stringify(i.value, u);
                    a.append("" + l, o), t.read().then(e, n);
                  } catch (e) {
                    n(e);
                  }
                }, n), "$R" + l.toString(16);
              }
              return i = p, null === s && (s = new FormData()), f = s, c++, d = o++, h = [], i.read(new Uint8Array(1024)).then(function e(t) {
                t.done ? (t = o++, f.append("" + t, new Blob(h)), f.append("" + d, '"$o' + t.toString(16) + '"'), f.append("" + d, "C"), 0 == --c && r(f)) : (h.push(t.value), i.read(new Uint8Array(1024)).then(e, n));
              }, n), "$r" + d.toString(16);
            }(h);
            if ("function" == typeof (e = h[_])) return m = h, b = e.call(h), null === s && (s = new FormData()), T = s, c++, O = o++, m = m === b, b.next().then(function e(t) {
              if (t.done) {
                if (void 0 === t.value) T.append("" + O, "C");else try {
                  var a = JSON.stringify(t.value, u);
                  T.append("" + O, "C" + a);
                } catch (e) {
                  n(e);
                  return;
                }
                0 == --c && r(T);
              } else try {
                var l = JSON.stringify(t.value, u);
                T.append("" + O, l), b.next().then(e, n);
              } catch (e) {
                n(e);
              }
            }, n), "$" + (m ? "x" : "X") + O.toString(16);
            if ((e = E(h)) !== P && (null === e || null !== E(e))) {
              if (void 0 === t) throw Error(a(499, ""));
              return "$T";
            }
            return h;
          }
          if ("string" == typeof h) return "Z" === h[h.length - 1] && this[e] instanceof Date ? "$D" + h : e = "$" === h[0] ? "$" + h : h;
          if ("boolean" == typeof h) return h;
          if ("number" == typeof h) return Number.isFinite(h) ? 0 === h && -1 / 0 == 1 / h ? "$-0" : h : 1 / 0 === h ? "$Infinity" : -1 / 0 === h ? "$-Infinity" : "$NaN";
          if (void 0 === h) return "$undefined";
          if ("function" == typeof h) {
            if (void 0 !== (A = S.get(h))) return void 0 !== (e = f.get(h)) || (e = JSON.stringify({
              id: A.id,
              bound: A.bound
            }, u), null === s && (s = new FormData()), A = o++, s.set("" + A, e), e = "$h" + A.toString(16), f.set(h, e)), e;
            if (void 0 !== t && -1 === e.indexOf(":") && void 0 !== (A = f.get(this))) return t.set(A + ":" + e, h), "$T";
            throw Error(a(469));
          }
          if ("symbol" == typeof h) {
            if (void 0 !== t && -1 === e.indexOf(":") && void 0 !== (A = f.get(this))) return t.set(A + ":" + e, h), "$T";
            throw Error(a(517, ""));
          }
          if ("bigint" == typeof h) return "$n" + h.toString(10);
          throw Error(a(472, typeof h));
        }
        function i(e, r) {
          return "object" == typeof e && null !== e && (r = "$" + r.toString(16), f.set(e, r), void 0 !== t && t.set(r, e)), d = e, JSON.stringify(e, u);
        }
        var o = 1,
          c = 0,
          s = null,
          f = new WeakMap(),
          d = e,
          h = i(e, 0);
        return null === s ? r(h) : (s.set("0", h), 0 === c && r(s)), function () {
          0 < c && (c = 0, null === s ? r(h) : r(s));
        };
      }(e, t && t.temporaryReferences ? t.temporaryReferences : void 0, r, n);
      if (t && t.signal) {
        var u = t.signal;
        if (u.aborted) l(u.reason);else {
          var i = function () {
            l(u.reason), u.removeEventListener("abort", i);
          };
          u.addEventListener("abort", i);
        }
      }
    });
  }, r.registerServerReference = function (e, t) {
    return R(e, t, null), e;
  };
};
