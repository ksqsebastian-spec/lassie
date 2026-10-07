// Recovered from 3g2v9_2yb35qx.js. Runtime module IDs: 393763.
// This factory requires the original Turbopack runtime context.
export default (e, t, i) => {
  e.e, t.exports = function () {
    var e = 0;
    function t(t) {
      return "__private_" + e++ + "_" + t;
    }
    function i(e, t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw TypeError("attempted to use private field on non-instance");
      return e;
    }
    function s() {}
    s.prototype = {
      on: function (e, t, i) {
        var s = this.e || (this.e = {});
        return (s[e] || (s[e] = [])).push({
          fn: t,
          ctx: i
        }), this;
      },
      once: function (e, t, i) {
        var s = this;
        function r() {
          s.off(e, r), t.apply(i, arguments);
        }
        return r._ = t, this.on(e, r, i);
      },
      emit: function (e) {
        for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, r = i.length; s < r; s++) i[s].fn.apply(i[s].ctx, t);
        return this;
      },
      off: function (e, t) {
        var i = this.e || (this.e = {}),
          s = i[e],
          r = [];
        if (s && t) for (var n = 0, o = s.length; n < o; n++) s[n].fn !== t && s[n].fn._ !== t && r.push(s[n]);
        return r.length ? i[e] = r : delete i[e], this;
      }
    }, s.TinyEmitter = s;
    var r,
      n = "virtualscroll",
      o = t("options"),
      a = t("el"),
      l = t("emitter"),
      h = t("event"),
      d = t("touchStart"),
      c = t("bodyTouchAction");
    function u(e) {
      var t = this;
      Object.defineProperty(this, o, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, a, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, l, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, h, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, d, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, c, {
        writable: !0,
        value: void 0
      }), this._onWheel = function (e) {
        var s = i(t, o)[o],
          n = i(t, h)[h];
        n.deltaX = e.wheelDeltaX || -1 * e.deltaX, n.deltaY = e.wheelDeltaY || -1 * e.deltaY, r.isFirefox && 1 === e.deltaMode && (n.deltaX *= s.firefoxMultiplier, n.deltaY *= s.firefoxMultiplier), n.deltaX *= s.mouseMultiplier, n.deltaY *= s.mouseMultiplier, t._notify(e);
      }, this._onMouseWheel = function (e) {
        var s = i(t, h)[h];
        s.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0, s.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, t._notify(e);
      }, this._onTouchStart = function (e) {
        var s = e.targetTouches ? e.targetTouches[0] : e;
        i(t, d)[d].x = s.pageX, i(t, d)[d].y = s.pageY;
      }, this._onTouchMove = function (e) {
        var s = i(t, o)[o];
        s.preventTouch && !e.target.classList.contains(s.unpreventTouchClass) && e.preventDefault();
        var r = i(t, h)[h],
          n = e.targetTouches ? e.targetTouches[0] : e;
        r.deltaX = (n.pageX - i(t, d)[d].x) * s.touchMultiplier, r.deltaY = (n.pageY - i(t, d)[d].y) * s.touchMultiplier, i(t, d)[d].x = n.pageX, i(t, d)[d].y = n.pageY, t._notify(e);
      }, this._onKeyDown = function (e) {
        var s = i(t, h)[h];
        s.deltaX = s.deltaY = 0;
        var r = window.innerHeight - 40;
        switch (e.keyCode) {
          case 37:
          case 38:
            s.deltaY = i(t, o)[o].keyStep;
            break;
          case 39:
          case 40:
            s.deltaY = -i(t, o)[o].keyStep;
            break;
          case 32:
            s.deltaY = r * (e.shiftKey ? 1 : -1);
            break;
          default:
            return;
        }
        t._notify(e);
      }, i(this, a)[a] = window, e && e.el && (i(this, a)[a] = e.el, delete e.el), r || (r = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch: "ontouchstart" in document,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
      }), i(this, o)[o] = Object.assign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: !1,
        unpreventTouchClass: "vs-touchmove-allowed",
        useKeyboard: !0,
        useTouch: !0
      }, e), i(this, l)[l] = new s(), i(this, h)[h] = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
      }, i(this, d)[d] = {
        x: null,
        y: null
      }, i(this, c)[c] = null, void 0 !== i(this, o)[o].passive && (this.listenerOptions = {
        passive: i(this, o)[o].passive
      });
    }
    var p = u.prototype;
    return p._notify = function (e) {
      var t = i(this, h)[h];
      t.x += t.deltaX, t.y += t.deltaY, i(this, l)[l].emit(n, {
        x: t.x,
        y: t.y,
        deltaX: t.deltaX,
        deltaY: t.deltaY,
        originalEvent: e
      });
    }, p._bind = function () {
      r.hasWheelEvent && i(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), r.hasMouseWheelEvent && i(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), r.hasTouch && i(this, o)[o].useTouch && (i(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), r.hasPointer && r.hasTouchWin && (i(this, c)[c] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, !0)), r.hasKeyDown && i(this, o)[o].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
    }, p._unbind = function () {
      r.hasWheelEvent && i(this, a)[a].removeEventListener("wheel", this._onWheel), r.hasMouseWheelEvent && i(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), r.hasTouch && (i(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), r.hasPointer && r.hasTouchWin && (document.body.style.msTouchAction = i(this, c)[c], i(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, !0)), r.hasKeyDown && i(this, o)[o].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
    }, p.on = function (e, t) {
      i(this, l)[l].on(n, e, t);
      var s = i(this, l)[l].e;
      s && s[n] && 1 === s[n].length && this._bind();
    }, p.off = function (e, t) {
      i(this, l)[l].off(n, e, t);
      var s = i(this, l)[l].e;
      (!s[n] || s[n].length <= 0) && this._unbind();
    }, p.destroy = function () {
      i(this, l)[l].off(), this._unbind();
    }, u;
  }();
};
