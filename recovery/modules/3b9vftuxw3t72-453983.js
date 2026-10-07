// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 453983.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n,
    a = {
      EntryStatus: function () {
        return i;
      },
      Fallback: function () {
        return o;
      },
      createCacheMap: function () {
        return s;
      },
      deleteFromCacheMap: function () {
        return y;
      },
      deleteMapEntry: function () {
        return g;
      },
      getFromCacheMap: function () {
        return f;
      },
      isValueExpired: function () {
        return d;
      },
      setInCacheMap: function () {
        return h;
      },
      setSizeInCacheMap: function () {
        return _;
      }
    };
  for (var l in a) Object.defineProperty(r, l, {
    enumerable: !0,
    get: a[l]
  });
  let u = e.r(928624);
  var i = ((n = {})[n.Empty = 0] = "Empty", n[n.Pending = 1] = "Pending", n[n.Fulfilled = 2] = "Fulfilled", n[n.Rejected = 3] = "Rejected", n);
  let o = {},
    c = {};
  function s() {
    return {
      parent: null,
      key: null,
      value: null,
      map: null,
      prev: null,
      next: null,
      size: 0
    };
  }
  function f(e, t, r, n, a, l) {
    let i = function e(t, r, n, a, l, u, i) {
      let s, f;
      if (null !== a) s = a.value, f = a.parent;else if (l && u !== c) s = c, f = null;else {
        if (null === n.value) return n;
        let e = n.value;
        return d(t, r, e) ? (g(n), null) : i && 2 !== e.status ? null : n;
      }
      let h = n.map;
      if (null !== h) {
        let n = h.get(s);
        if (void 0 !== n) {
          let a = e(t, r, n, f, l, s, i);
          if (null !== a) return a;
        }
        let a = h.get(o);
        if (void 0 !== a) return e(t, r, a, f, l, s, i);
      }
      return null;
    }(e, t, r, n, a, 0, l);
    return null === i || null === i.value ? null : ((0, u.lruPut)(i), i.value);
  }
  function d(e, t, r) {
    return r.staleAt <= e || r.version < t;
  }
  function h(e, t, r, n) {
    let a = function (e, t, r) {
      let n = e,
        a = t,
        l = null;
      for (;;) {
        let e = l;
        if (null !== a) l = a.value, a = a.parent;else if (r && e !== c) {
          if (null === n.value) return n;
          l = c;
        } else break;
        let t = n.map;
        if (null !== t) {
          let e = t.get(l);
          if (void 0 !== e) {
            n = e;
            continue;
          }
        } else t = new Map(), n.map = t;
        let u = {
          parent: n,
          key: l,
          value: null,
          map: null,
          prev: null,
          next: null,
          size: 0
        };
        t.set(l, u), n = u;
      }
      return n;
    }(e, t, n);
    p(a, r), (0, u.lruPut)(a), (0, u.updateLruSize)(a, r.size);
  }
  function p(e, t) {
    null !== e.value && (e.value.ref = null, e.value = null);
    let r = t.ref;
    e.value = t, t.ref = e, (0, u.updateLruSize)(e, t.size), null !== r && r !== e && r.value === t && g(r);
  }
  function y(e) {
    let t = e.ref;
    null !== t && (e.ref = null, g(t));
  }
  function g(e) {
    e.value = null, (0, u.deleteFromLru)(e);
    let t = e.map;
    if (null === t) {
      let t = e.parent,
        r = e.key;
      for (; null !== t;) {
        let e = t.map;
        if (null !== e && (e.delete(r), 0 === e.size) && (t.map = null, null === t.value)) {
          r = t.key, t = t.parent;
          continue;
        }
        break;
      }
    } else {
      let r = t.get(c);
      void 0 !== r && null !== r.value && p(e, r.value);
    }
  }
  function _(e, t) {
    let r = e.ref;
    null !== r && (e.size = t, (0, u.updateLruSize)(r, t));
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default);
};
