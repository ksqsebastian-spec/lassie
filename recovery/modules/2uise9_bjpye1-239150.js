// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 239150.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = function (t, r) {
      return (e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      })(t, r);
    },
    r = function () {
      return (r = Object.assign || function (t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
    };
  function n(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && "number" == typeof t.length) return {
      next: function () {
        return t && n >= t.length && (t = void 0), {
          value: t && t[n++],
          done: !t
        };
      }
    };
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function o(t) {
    return this instanceof o ? (this.v = t, this) : new o(t);
  }
  "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function (t, e, r) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var n,
      i = r.apply(t, e || []),
      a = [];
    return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function (t) {
      return function (e) {
        return Promise.resolve(e).then(t, c);
      };
    }), n[Symbol.asyncIterator] = function () {
      return this;
    }, n;
    function s(t, e) {
      i[t] && (n[t] = function (e) {
        return new Promise(function (r, n) {
          a.push([t, e, r, n]) > 1 || u(t, e);
        });
      }, e && (n[t] = e(n[t])));
    }
    function u(t, e) {
      try {
        var r;
        (r = i[t](e)).value instanceof o ? Promise.resolve(r.value.v).then(p, c) : l(a[0][2], r);
      } catch (t) {
        l(a[0][3], t);
      }
    }
    function p(t) {
      u("next", t);
    }
    function c(t) {
      u("throw", t);
    }
    function l(t, e) {
      t(e), a.shift(), a.length && u(a[0][0], a[0][1]);
    }
  }, "__asyncValues", 0, function (t) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var e,
      r = t[Symbol.asyncIterator];
    return r ? r.call(t) : (t = n(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function () {
      return this;
    }, e);
    function o(r) {
      e[r] = t[r] && function (e) {
        return new Promise(function (n, o) {
          var i, a, s;
          i = n, a = o, s = (e = t[r](e)).done, Promise.resolve(e.value).then(function (t) {
            i({
              value: t,
              done: s
            });
          }, a);
        });
      };
    }
  }, "__await", 0, o, "__awaiter", 0, function (t, e, r, n) {
    return new (r || (r = Promise))(function (o, i) {
      function a(t) {
        try {
          u(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        try {
          u(n.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        var e;
        t.done ? o(t.value) : ((e = t.value) instanceof r ? e : new r(function (t) {
          t(e);
        })).then(a, s);
      }
      u((n = n.apply(t, e || [])).next());
    });
  }, "__extends", 0, function (t, r) {
    if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  }, "__generator", 0, function (t, e) {
    var r,
      n,
      o,
      i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function () {
      return this;
    }), a;
    function s(s) {
      return function (u) {
        var p = [s, u];
        if (r) throw TypeError("Generator is already executing.");
        for (; a && (a = 0, p[0] && (i = 0)), i;) try {
          if (r = 1, n && (o = 2 & p[0] ? n.return : p[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, p[1])).done) return o;
          switch (n = 0, o && (p = [2 & p[0], o.value]), p[0]) {
            case 0:
            case 1:
              o = p;
              break;
            case 4:
              return i.label++, {
                value: p[1],
                done: !1
              };
            case 5:
              i.label++, n = p[1], p = [0];
              continue;
            case 7:
              p = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === p[0] || 2 === p[0])) {
                i = 0;
                continue;
              }
              if (3 === p[0] && (!o || p[1] > o[0] && p[1] < o[3])) {
                i.label = p[1];
                break;
              }
              if (6 === p[0] && i.label < o[1]) {
                i.label = o[1], o = p;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(p);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          p = e.call(t, i);
        } catch (t) {
          p = [6, t], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & p[0]) throw p[1];
        return {
          value: p[0] ? p[1] : void 0,
          done: !0
        };
      };
    }
  }, "__read", 0, function (t, e) {
    var r = "function" == typeof Symbol && t[Symbol.iterator];
    if (!r) return t;
    var n,
      o,
      i = r.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value);
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }, "__rest", 0, function (t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
    return r;
  }, "__spreadArray", 0, function (t, e, r) {
    if (r || 2 == arguments.length) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
    return t.concat(n || Array.prototype.slice.call(e));
  }, "__values", 0, n]);
};
