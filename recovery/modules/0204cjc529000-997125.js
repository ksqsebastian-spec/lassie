// Recovered from 0204cjc529000.js. Runtime module IDs: 997125, 512583, 350585.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(389474),
    i = e.i(256924);
  function s(e, t) {
    let i = e.parent;
    return i && (s(i, t), i.updateLocalTransform(), t.append(i.localTransform)), t;
  }
  e.s(["getGlobalBounds", 0, function (e, r, n) {
    let h, l;
    return n.clear(), h = e.parent ? r ? e.parent.worldTransform : s(e, l = i.matrixPool.get().identity()) : t.Matrix.IDENTITY, function e(s, r, n, h) {
      let l;
      if (!s.visible || !s.measurable) return;
      h ? l = s.worldTransform : (s.updateLocalTransform(), (l = i.matrixPool.get()).appendFrom(s.localTransform, n));
      let o = r,
        a = !!s.effects.length;
      if (a && (r = i.boundsPool.get().clear()), s.boundsArea) r.addRect(s.boundsArea, l);else {
        let t = s.bounds;
        t && !t.isEmpty() && (r.matrix = l, r.addBounds(t));
        for (let t = 0; t < s.children.length; t++) e(s.children[t], r, l, h);
      }
      if (a) {
        for (let e = 0; e < s.effects.length; e++) s.effects[e].addBounds?.(r);
        o.addBounds(r, t.Matrix.IDENTITY), i.boundsPool.return(r);
      }
      h || i.matrixPool.return(l);
    }(e, n, h, r), l && i.matrixPool.return(l), n.isValid || n.set(0, 0, 0, 0), n;
  }, "updateTransformBackwards", 0, s], 512583);
  var r = e.i(414205);
  function n(e, t) {
    return 0xffffff === e ? t : 0xffffff === t ? e : (0, r.multiplyHexColors)(e, t);
  }
  function h(e) {
    return ((255 & e) << 16) + (65280 & e) + (e >> 16 & 255);
  }
  e.s(["multiplyColors", 0, n], 350585), e.s(["bgr2rgb", 0, h, "getGlobalMixin", 0, {
    getGlobalAlpha(e) {
      if (e) return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
      let t = this.alpha,
        i = this.parent;
      for (; i;) t *= i.alpha, i = i.parent;
      return t;
    },
    getGlobalTransform(e = new t.Matrix(), r) {
      if (r) return e.copyFrom(this.worldTransform);
      this.updateLocalTransform();
      let n = s(this, i.matrixPool.get().identity());
      return e.appendFrom(this.localTransform, n), i.matrixPool.return(n), e;
    },
    getGlobalTint(e) {
      if (e) return this.renderGroup ? h(this.renderGroup.worldColor) : this.parentRenderGroup ? h(n(this.localColor, this.parentRenderGroup.worldColor)) : this.tint;
      let t = this.localColor,
        i = this.parent;
      for (; i;) t = n(t, i.localColor), i = i.parent;
      return h(t);
    }
  }], 997125);
};
