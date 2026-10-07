// Recovered from 0204cjc529000.js. Runtime module IDs: 786234.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(389474),
    i = e.i(453549),
    s = e.i(256924);
  let r = new t.Matrix();
  e.s(["getFastGlobalBoundsMixin", 0, {
    getFastGlobalBounds(e, t) {
      t || (t = new i.Bounds()), t.clear(), this._getGlobalBoundsRecursive(!!e, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0);
      let s = this.renderGroup || this.parentRenderGroup;
      return t.applyMatrix(s.worldTransform), t;
    },
    _getGlobalBoundsRecursive(e, t, i) {
      let n = t;
      if (e && this.parentRenderLayer && this.parentRenderLayer !== i || 7 !== this.localDisplayStatus || !this.measurable) return;
      let h = !!this.effects.length;
      if ((this.renderGroup || h) && (n = s.boundsPool.get().clear()), this.boundsArea) t.addRect(this.boundsArea, this.worldTransform);else {
        if (this.renderPipeId) {
          let e = this.bounds;
          n.addFrame(e.minX, e.minY, e.maxX, e.maxY, this.groupTransform);
        }
        let t = this.children;
        for (let s = 0; s < t.length; s++) t[s]._getGlobalBoundsRecursive(e, n, i);
      }
      if (h) {
        let e = !1,
          i = this.renderGroup || this.parentRenderGroup;
        for (let t = 0; t < this.effects.length; t++) this.effects[t].addBounds && (e || (e = !0, n.applyMatrix(i.worldTransform)), this.effects[t].addBounds(n, !0));
        e && n.applyMatrix(i.worldTransform.copyTo(r).invert()), t.addBounds(n), s.boundsPool.return(n);
      } else this.renderGroup && (t.addBounds(n, this.relativeGroupTransform), s.boundsPool.return(n));
    }
  }]);
};
