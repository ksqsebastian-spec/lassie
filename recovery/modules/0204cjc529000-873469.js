// Recovered from 0204cjc529000.js. Runtime module IDs: 873469, 113281, 555925, 779427.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(727905);
  function i(e, t, i) {
    let s,
      r = e.length;
    if (t >= r || 0 === i) return;
    i = t + i > r ? r - t : i;
    let n = r - i;
    for (s = t; s < n; ++s) e[s] = e[s + i];
    e.length = n;
  }
  e.s(["cacheAsTextureMixin", 0, {
    get isCachedAsTexture() {
      return !!this.renderGroup?.isCachedAsTexture;
    },
    cacheAsTexture(e) {
      "boolean" == typeof e && !1 === e ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(!0 === e ? {} : e));
    },
    updateCacheTexture() {
      this.renderGroup?.updateCacheTexture();
    },
    get cacheAsBitmap() {
      return this.isCachedAsTexture;
    },
    set cacheAsBitmap(val) {
      (0, t.deprecation)("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(val);
    }
  }], 873469), e.s(["removeItems", 0, i], 113281), e.s(["childrenHelperMixin", 0, {
    allowChildren: !0,
    removeChildren(e = 0, t) {
      let s = t ?? this.children.length,
        r = s - e,
        n = [];
      if (r > 0 && r <= s) {
        for (let t = s - 1; t >= e; t--) {
          let e = this.children[t];
          e && (n.push(e), e.parent = null);
        }
        i(this.children, e, s);
        let t = this.renderGroup || this.parentRenderGroup;
        t && t.removeChildren(n);
        for (let e = 0; e < n.length; ++e) {
          let t = n[e];
          t.parentRenderLayer?.detach(t), this.emit("childRemoved", t, this, e), n[e].emit("removed", this);
        }
        return n.length > 0 && this._didViewChangeTick++, n;
      }
      if (0 === r && 0 === this.children.length) return n;
      throw RangeError("removeChildren: numeric values are outside the acceptable range.");
    },
    removeChildAt(e) {
      let t = this.getChildAt(e);
      return this.removeChild(t);
    },
    getChildAt(e) {
      if (e < 0 || e >= this.children.length) throw Error(`getChildAt: Index (${e}) does not exist.`);
      return this.children[e];
    },
    setChildIndex(e, t) {
      if (t < 0 || t >= this.children.length) throw Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
      this.getChildIndex(e), this.addChildAt(e, t);
    },
    getChildIndex(e) {
      let t = this.children.indexOf(e);
      if (-1 === t) throw Error("The supplied Container must be a child of the caller");
      return t;
    },
    addChildAt(e, i) {
      this.allowChildren || (0, t.deprecation)(t.v8_0_0, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
      let {
        children: s
      } = this;
      if (i < 0 || i > s.length) throw Error(`${e}addChildAt: The index ${i} supplied is out of bounds ${s.length}`);
      let r = e.parent === this;
      if (e.parent) {
        let t = e.parent.children.indexOf(e);
        if (r) {
          if (t === i) return e;
          e.parent.children.splice(t, 1);
        } else e.removeFromParent();
      }
      i === s.length ? s.push(e) : s.splice(i, 0, e), e.parent = this, e.didChange = !0, e._updateFlags = 15;
      let n = this.renderGroup || this.parentRenderGroup;
      return n && n.addChild(e), this.sortableChildren && (this.sortDirty = !0), r || (this.emit("childAdded", e, this, i), e.emit("added", this)), e;
    },
    swapChildren(e, t) {
      if (e === t) return;
      let i = this.getChildIndex(e),
        s = this.getChildIndex(t);
      this.children[i] = t, this.children[s] = e;
      let r = this.renderGroup || this.parentRenderGroup;
      r && (r.structureDidChange = !0), this._didContainerChangeTick++;
    },
    removeFromParent() {
      this.parent?.removeChild(this);
    },
    reparentChild(...e) {
      return 1 === e.length ? this.reparentChildAt(e[0], this.children.length) : (e.forEach(e => this.reparentChildAt(e, this.children.length)), e[0]);
    },
    reparentChildAt(e, t) {
      if (e.parent === this) return this.setChildIndex(e, t), e;
      let i = e.worldTransform.clone();
      e.removeFromParent(), this.addChildAt(e, t);
      let s = this.worldTransform.clone();
      return s.invert(), i.prepend(s), e.setFromMatrix(i), e;
    },
    replaceChild(e, t) {
      e.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(e)), t.setFromMatrix(e.localTransform), t.updateLocalTransform(), this.removeChild(e);
    }
  }], 555925), e.s(["collectRenderablesMixin", 0, {
    collectRenderables(e, t, i) {
      this.parentRenderLayer && this.parentRenderLayer !== i || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(e, t, i) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, e) : this.collectRenderablesWithEffects(e, t, i));
    },
    collectRenderablesSimple(e, t, i) {
      let s = this.children,
        r = s.length;
      for (let n = 0; n < r; n++) s[n].collectRenderables(e, t, i);
    },
    collectRenderablesWithEffects(e, t, i) {
      let {
        renderPipes: s
      } = t;
      for (let t = 0; t < this.effects.length; t++) {
        let i = this.effects[t];
        s[i.pipe].push(i, this, e);
      }
      this.collectRenderablesSimple(e, t, i);
      for (let t = this.effects.length - 1; t >= 0; t--) {
        let i = this.effects[t];
        s[i.pipe].pop(i, this, e);
      }
    }
  }], 779427);
};
