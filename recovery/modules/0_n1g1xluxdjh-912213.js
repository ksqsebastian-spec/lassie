// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 912213.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  function r(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n;) {
      var r = n - 1 >>> 1,
        a = e[r];
      if (0 < o(a, t)) e[r] = t, e[n] = a, n = r;else break;
    }
  }
  function a(e) {
    return 0 === e.length ? null : e[0];
  }
  function i(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
        var l = 2 * (r + 1) - 1,
          s = e[l],
          u = l + 1,
          c = e[u];
        if (0 > o(s, n)) u < a && 0 > o(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);else if (u < a && 0 > o(c, n)) e[r] = c, e[u] = n, r = u;else break;
      }
    }
    return t;
  }
  function o(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if (n.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
    var l,
      s = performance;
    n.unstable_now = function () {
      return s.now();
    };
  } else {
    var u = Date,
      c = u.now();
    n.unstable_now = function () {
      return u.now() - c;
    };
  }
  var d = [],
    f = [],
    p = 1,
    h = null,
    m = 3,
    g = !1,
    y = !1,
    v = !1,
    b = !1,
    _ = "function" == typeof setTimeout ? setTimeout : null,
    S = "function" == typeof clearTimeout ? clearTimeout : null,
    w = "u" > typeof setImmediate ? setImmediate : null;
  function E(e) {
    for (var t = a(f); null !== t;) {
      if (null === t.callback) i(f);else if (t.startTime <= e) i(f), t.sortIndex = t.expirationTime, r(d, t);else break;
      t = a(f);
    }
  }
  function x(e) {
    if (v = !1, E(e), !y) if (null !== a(d)) y = !0, k || (k = !0, l());else {
      var t = a(f);
      null !== t && I(x, t.startTime - e);
    }
  }
  var k = !1,
    P = -1,
    T = 5,
    R = -1;
  function O() {
    return !!b || !(n.unstable_now() - R < T);
  }
  function C() {
    if (b = !1, k) {
      var e = n.unstable_now();
      R = e;
      var t = !0;
      try {
        e: {
          y = !1, v && (v = !1, S(P), P = -1), g = !0;
          var r = m;
          try {
            t: {
              for (E(e), h = a(d); null !== h && !(h.expirationTime > e && O());) {
                var o = h.callback;
                if ("function" == typeof o) {
                  h.callback = null, m = h.priorityLevel;
                  var s = o(h.expirationTime <= e);
                  if (e = n.unstable_now(), "function" == typeof s) {
                    h.callback = s, E(e), t = !0;
                    break t;
                  }
                  h === a(d) && i(d), E(e);
                } else i(d);
                h = a(d);
              }
              if (null !== h) t = !0;else {
                var u = a(f);
                null !== u && I(x, u.startTime - e), t = !1;
              }
            }
            break e;
          } finally {
            h = null, m = r, g = !1;
          }
        }
      } finally {
        t ? l() : k = !1;
      }
    }
  }
  if ("function" == typeof w) l = function () {
    w(C);
  };else if ("u" > typeof MessageChannel) {
    var N = new MessageChannel(),
      A = N.port2;
    N.port1.onmessage = C, l = function () {
      A.postMessage(null);
    };
  } else l = function () {
    _(C, 0);
  };
  function I(e, t) {
    P = _(function () {
      e(n.unstable_now());
    }, t);
  }
  n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function (e) {
    e.callback = null;
  }, n.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5;
  }, n.unstable_getCurrentPriorityLevel = function () {
    return m;
  }, n.unstable_next = function (e) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = m;
    }
    var n = m;
    m = t;
    try {
      return e();
    } finally {
      m = n;
    }
  }, n.unstable_requestPaint = function () {
    b = !0;
  }, n.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = m;
    m = e;
    try {
      return t();
    } finally {
      m = n;
    }
  }, n.unstable_scheduleCallback = function (e, t, i) {
    var o = n.unstable_now();
    switch (i = "object" == typeof i && null !== i && "number" == typeof (i = i.delay) && 0 < i ? o + i : o, e) {
      case 1:
        var s = -1;
        break;
      case 2:
        s = 250;
        break;
      case 5:
        s = 0x3fffffff;
        break;
      case 4:
        s = 1e4;
        break;
      default:
        s = 5e3;
    }
    return s = i + s, e = {
      id: p++,
      callback: t,
      priorityLevel: e,
      startTime: i,
      expirationTime: s,
      sortIndex: -1
    }, i > o ? (e.sortIndex = i, r(f, e), null === a(d) && e === a(f) && (v ? (S(P), P = -1) : v = !0, I(x, i - o))) : (e.sortIndex = s, r(d, e), y || g || (y = !0, k || (k = !0, l()))), e;
  }, n.unstable_shouldYield = O, n.unstable_wrapCallback = function (e) {
    var t = m;
    return function () {
      var n = m;
      m = t;
      try {
        return e.apply(this, arguments);
      } finally {
        m = n;
      }
    };
  };
};
