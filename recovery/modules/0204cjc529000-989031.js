// Recovered from 0204cjc529000.js. Runtime module IDs: 989031, 143072, 724923.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t,
    i = ((t = i || {})[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY", t);
  e.s(["UPDATE_PRIORITY", 0, i], 143072);
  class s {
    constructor(e, t = null, i = 0, s = !1) {
      this.next = null, this.previous = null, this._destroyed = !1, this._fn = e, this._context = t, this.priority = i, this._once = s;
    }
    match(e, t = null) {
      return this._fn === e && this._context === t;
    }
    emit(e) {
      this._fn && (this._context ? this._fn.call(this._context, e) : this._fn(e));
      let t = this.next;
      return this._once && this.destroy(!0), this._destroyed && (this.next = null), t;
    }
    connect(e) {
      this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this;
    }
    destroy(e = !1) {
      this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
      let t = this.next;
      return this.next = e ? null : t, this.previous = null, t;
    }
  }
  e.s(["TickerListener", 0, s], 724923);
  let r = class e {
    constructor() {
      this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new s(null, null, 1 / 0), this.deltaMS = 1 / e.targetFPMS, this.elapsedMS = 1 / e.targetFPMS, this._tick = e => {
        this._requestId = null, this.started && (this.update(e), this.started && null === this._requestId && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
      };
    }
    _requestIfNeeded() {
      null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
    }
    _cancelIfNeeded() {
      null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
    }
    _startIfPossible() {
      this.started ? this._requestIfNeeded() : this.autoStart && this.start();
    }
    add(e, t, r = i.NORMAL) {
      return this._addListener(new s(e, t, r));
    }
    addOnce(e, t, r = i.NORMAL) {
      return this._addListener(new s(e, t, r, !0));
    }
    _addListener(e) {
      let t = this._head.next,
        i = this._head;
      if (t) {
        for (; t;) {
          if (e.priority > t.priority) {
            e.connect(i);
            break;
          }
          i = t, t = t.next;
        }
        e.previous || e.connect(i);
      } else e.connect(i);
      return this._startIfPossible(), this;
    }
    remove(e, t) {
      let i = this._head.next;
      for (; i;) i = i.match(e, t) ? i.destroy() : i.next;
      return this._head.next || this._cancelIfNeeded(), this;
    }
    get count() {
      if (!this._head) return 0;
      let e = 0,
        t = this._head;
      for (; t = t.next;) e++;
      return e;
    }
    start() {
      this.started || (this.started = !0, this._requestIfNeeded());
    }
    stop() {
      this.started && (this.started = !1, this._cancelIfNeeded());
    }
    destroy() {
      if (!this._protected) {
        this.stop();
        let e = this._head.next;
        for (; e;) e = e.destroy(!0);
        this._head.destroy(), this._head = null;
      }
    }
    update(t = performance.now()) {
      let i;
      if (t > this.lastTime) {
        if ((i = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (i = this._maxElapsedMS), i *= this.speed, this._minElapsedMS) {
          let e = t - this._lastFrame | 0;
          if (e < this._minElapsedMS) return;
          this._lastFrame = t - e % this._minElapsedMS;
        }
        this.deltaMS = i, this.deltaTime = this.deltaMS * e.targetFPMS;
        let s = this._head,
          r = s.next;
        for (; r;) r = r.emit(this);
        s.next || this._cancelIfNeeded();
      } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
      this.lastTime = t;
    }
    get FPS() {
      return 1e3 / this.elapsedMS;
    }
    get minFPS() {
      return 1e3 / this._maxElapsedMS;
    }
    set minFPS(t) {
      let i = Math.min(Math.max(0, t) / 1e3, e.targetFPMS);
      this._maxElapsedMS = 1 / i, this._minElapsedMS && t > this.maxFPS && (this.maxFPS = t);
    }
    get maxFPS() {
      return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
    }
    set maxFPS(e) {
      0 === e ? this._minElapsedMS = 0 : (e < this.minFPS && (this.minFPS = e), this._minElapsedMS = 1 / (e / 1e3));
    }
    static get shared() {
      if (!e._shared) {
        let t = e._shared = new e();
        t.autoStart = !0, t._protected = !0;
      }
      return e._shared;
    }
    static get system() {
      if (!e._system) {
        let t = e._system = new e();
        t.autoStart = !0, t._protected = !0;
      }
      return e._system;
    }
  };
  r.targetFPMS = .06, e.s(["Ticker", 0, r], 989031);
};
