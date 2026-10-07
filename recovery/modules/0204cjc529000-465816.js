// Recovered from 0204cjc529000.js. Runtime module IDs: 465816, 441327.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(490249),
    i = e.i(337654),
    s = e.i(372370),
    r = e.i(727905),
    n = e.i(453549),
    h = e.i(275576);
  class l extends h.Container {
    constructor(e) {
      super(e), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = Object.create(null), this.autoGarbageCollect = !0, this._gcLastUsed = -1, this._bounds = new n.Bounds(0, 1, 0, 0), this._boundsDirty = !0, this.autoGarbageCollect = e.autoGarbageCollect ?? !0;
    }
    get bounds() {
      return this._boundsDirty && (this.updateBounds(), this._boundsDirty = !1), this._bounds;
    }
    get roundPixels() {
      return !!this._roundPixels;
    }
    set roundPixels(e) {
      this._roundPixels = +!!e;
    }
    containsPoint(e) {
      let t = this.bounds,
        {
          x: i,
          y: s
        } = e;
      return i >= t.minX && i <= t.maxX && s >= t.minY && s <= t.maxY;
    }
    onViewUpdate() {
      if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate) return;
      this.didViewUpdate = !0;
      let e = this.renderGroup || this.parentRenderGroup;
      e && e.onChildViewUpdate(this);
    }
    unload() {
      for (let e in this.emit("unload", this), this._gpuData) this._gpuData[e]?.destroy();
      this._gpuData = Object.create(null), this.onViewUpdate();
    }
    destroy(e) {
      this.unload(), super.destroy(e), this._bounds = null;
    }
    collectRenderablesSimple(e, t, i) {
      let {
        renderPipes: s
      } = t;
      s.blendMode.pushBlendMode(this, this.groupBlendMode, e);
      let r = s[this.renderPipeId];
      r?.addRenderable && r.addRenderable(this, e), this.didViewUpdate = !1;
      let n = this.children,
        h = n.length;
      for (let s = 0; s < h; s++) n[s].collectRenderables(e, t, i);
      s.blendMode.popBlendMode(e);
    }
  }
  e.s(["ViewContainer", 0, l], 441327), e.s(["Sprite", 0, class e extends l {
    constructor(e = i.Texture.EMPTY) {
      e instanceof i.Texture && (e = {
        texture: e
      });
      const {
        texture: s = i.Texture.EMPTY,
        anchor: r,
        roundPixels: n,
        width: h,
        height: l,
        ...o
      } = e;
      super({
        label: "Sprite",
        ...o
      }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = {
        minX: 0,
        maxX: 1,
        minY: 0,
        maxY: 0
      }, this._anchor = new t.ObservablePoint({
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }), r ? this.anchor = r : s.defaultAnchor && (this.anchor = s.defaultAnchor), this.texture = s, this.allowChildren = !1, this.roundPixels = n ?? !1, void 0 !== h && (this.width = h), void 0 !== l && (this.height = l);
    }
    static from(t, s = !1) {
      return new e(t instanceof i.Texture ? t : i.Texture.from(t, s));
    }
    set texture(e) {
      e || (e = i.Texture.EMPTY);
      let t = this._texture;
      t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate());
    }
    get texture() {
      return this._texture;
    }
    get visualBounds() {
      return (0, s.updateQuadBounds)(this._visualBounds, this._anchor, this._texture), this._visualBounds;
    }
    get sourceBounds() {
      return (0, r.deprecation)("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds;
    }
    updateBounds() {
      let e = this._anchor,
        t = this._texture,
        i = this._bounds,
        {
          width: s,
          height: r
        } = t.orig;
      i.minX = -e._x * s, i.maxX = i.minX + s, i.minY = -e._y * r, i.maxY = i.minY + r;
    }
    destroy(e = !1) {
      if (super.destroy(e), "boolean" == typeof e ? e : e?.texture) {
        let t = "boolean" == typeof e ? e : e?.textureSource;
        this._texture.destroy(t);
      }
      this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null;
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(e) {
      "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e);
    }
    get width() {
      return Math.abs(this.scale.x) * this._texture.orig.width;
    }
    set width(e) {
      this._setWidth(e, this._texture.orig.width), this._width = e;
    }
    get height() {
      return Math.abs(this.scale.y) * this._texture.orig.height;
    }
    set height(e) {
      this._setHeight(e, this._texture.orig.height), this._height = e;
    }
    getSize(e) {
      return e || (e = {}), e.width = Math.abs(this.scale.x) * this._texture.orig.width, e.height = Math.abs(this.scale.y) * this._texture.orig.height, e;
    }
    setSize(e, t) {
      "object" == typeof e ? (t = e.height ?? e.width, e = e.width) : t ?? (t = e), void 0 !== e && this._setWidth(e, this._texture.orig.width), void 0 !== t && this._setHeight(t, this._texture.orig.height);
    }
  }], 465816);
};
