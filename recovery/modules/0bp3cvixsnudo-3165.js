// Recovered from 0bp3cvixsnudo.js. Runtime module IDs: 3165, 848790.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(562140);
  let s = (e, t, s = !1) => (Array.isArray(e) || (e = [e]), t) ? e.map(e => "string" == typeof e || s ? t(e) : e) : e;
  e.s(["convertToList", 0, s], 848790);
  let r = new class {
    constructor() {
      this._parsers = [], this._cache = new Map(), this._cacheMap = new Map();
    }
    reset() {
      this._cacheMap.clear(), this._cache.clear();
    }
    has(e) {
      return this._cache.has(e);
    }
    get(e) {
      let s = this._cache.get(e);
      return s || (0, t.warn)(`[Assets] Asset id ${e} was not found in the Cache`), s;
    }
    set(e, r) {
      let i,
        a = s(e);
      for (let e = 0; e < this.parsers.length; e++) {
        let t = this.parsers[e];
        if (t.test(r)) {
          i = t.getCacheableAssets(a, r);
          break;
        }
      }
      let o = new Map(Object.entries(i || {}));
      i || a.forEach(e => {
        o.set(e, r);
      });
      let n = [...o.keys()],
        l = {
          cacheKeys: n,
          keys: a
        };
      a.forEach(e => {
        this._cacheMap.set(e, l);
      }), n.forEach(e => {
        let s = i ? i[e] : r;
        this._cache.has(e) && this._cache.get(e) !== s && (0, t.warn)("[Cache] already has key:", e), this._cache.set(e, o.get(e));
      });
    }
    remove(e) {
      if (!this._cacheMap.has(e)) return void (0, t.warn)(`[Assets] Asset id ${e} was not found in the Cache`);
      let s = this._cacheMap.get(e);
      s.cacheKeys.forEach(e => {
        this._cache.delete(e);
      }), s.keys.forEach(e => {
        this._cacheMap.delete(e);
      });
    }
    get parsers() {
      return this._parsers;
    }
  }();
  e.s(["Cache", 0, r], 3165);
};
