// Recovered from 0204cjc529000.js. Runtime module IDs: 275576, 654713, 624539, 519821, 316272, 929953, 247016, 901548, 629041, 544996.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(263524),
    i = e.i(222735),
    s = e.i(811468),
    r = e.i(78278),
    n = e.i(389474),
    h = e.i(42515),
    l = e.i(490249),
    o = e.i(733705),
    a = e.i(727905),
    d = e.i(562140),
    u = e.i(765480),
    c = e.i(873469),
    p = e.i(555925),
    f = e.i(779427),
    _ = e.i(710158),
    g = e.i(426307),
    x = e.i(786234),
    m = e.i(997125),
    b = e.i(453549),
    C = e.i(512583),
    y = e.i(256924);
  function T(e, t, i) {
    return t.clear(), i || (i = n.Matrix.IDENTITY), function e(t, i, s, r, h) {
      let l;
      if (h) l = y.matrixPool.get(), l = s.copyTo(l);else {
        if (!t.visible || !t.measurable) return;
        t.updateLocalTransform();
        let e = t.localTransform;
        (l = y.matrixPool.get()).appendFrom(e, s);
      }
      let o = i,
        a = !!t.effects.length;
      if (a && (i = y.boundsPool.get().clear()), t.boundsArea) i.addRect(t.boundsArea, l);else {
        t.renderPipeId && (i.matrix = l, i.addBounds(t.bounds));
        let s = t.children;
        for (let t = 0; t < s.length; t++) e(s[t], i, l, r, !1);
      }
      if (a) {
        for (let e = 0; e < t.effects.length; e++) t.effects[e].addLocalBounds?.(i, r);
        o.addBounds(i, n.Matrix.IDENTITY), y.boundsPool.return(i);
      }
      y.matrixPool.return(l);
    }(e, t, i, e, !0), t.isValid || t.set(0, 0, 0, 0), t;
  }
  function v(e, t) {
    let i = e.children;
    for (let e = 0; e < i.length; e++) {
      let s = i[e],
        r = s.uid,
        n = (65535 & s._didViewChangeTick) << 16 | 65535 & s._didContainerChangeTick,
        h = t.index;
      (t.data[h] !== r || t.data[h + 1] !== n) && (t.data[t.index] = r, t.data[t.index + 1] = n, t.didChange = !0), t.index = h + 2, s.children.length && v(s, t);
    }
    return t.didChange;
  }
  e.s(["getLocalBounds", 0, T], 654713), e.s(["checkChildrenDidChange", 0, v], 624539);
  let w = new n.Matrix(),
    G = {
      _localBoundsCacheId: -1,
      _localBoundsCacheData: null,
      _setWidth(e, t) {
        let i = Math.sign(this.scale.x) || 1;
        0 !== t ? this.scale.x = e / t * i : this.scale.x = i;
      },
      _setHeight(e, t) {
        let i = Math.sign(this.scale.y) || 1;
        0 !== t ? this.scale.y = e / t * i : this.scale.y = i;
      },
      getLocalBounds() {
        this._localBoundsCacheData || (this._localBoundsCacheData = {
          data: [],
          index: 1,
          didChange: !1,
          localBounds: new b.Bounds()
        });
        let e = this._localBoundsCacheData;
        return e.index = 1, e.didChange = !1, e.data[0] !== this._didViewChangeTick && (e.didChange = !0, e.data[0] = this._didViewChangeTick), v(this, e), e.didChange && T(this, e.localBounds, w), e.localBounds;
      },
      getBounds(e, t) {
        return (0, C.getGlobalBounds)(this, e, t || new b.Bounds());
      }
    };
  e.s(["measureMixin", 0, G], 519821);
  let R = {
    _onRender: null,
    set onRender(func) {
      let e = this.renderGroup || this.parentRenderGroup;
      if (!func) {
        this._onRender && e?.removeOnRender(this), this._onRender = null;
        return;
      }
      this._onRender || e?.addOnRender(this), this._onRender = func;
    },
    get onRender() {
      return this._onRender;
    }
  };
  e.s(["onRenderMixin", 0, R], 316272);
  let M = {
    _zIndex: 0,
    sortDirty: !1,
    sortableChildren: !1,
    get zIndex() {
      return this._zIndex;
    },
    set zIndex(value) {
      if (this._zIndex === value) return;
      this._zIndex = value, this.depthOfChildModified();
    },
    depthOfChildModified() {
      this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0);
    },
    sortChildren() {
      this.sortDirty && (this.sortDirty = !1, this.children.sort(P));
    }
  };
  function P(e, t) {
    return e._zIndex - t._zIndex;
  }
  e.s(["sortMixin", 0, M], 929953);
  var S = e.i(37554);
  let k = {
    getGlobalPosition(e = new S.Point(), t = !1) {
      return this.parent ? this.parent.toGlobal(this._position, e, t) : (e.x = this._position.x, e.y = this._position.y), e;
    },
    toGlobal(e, t, i = !1) {
      let s = this.getGlobalTransform(y.matrixPool.get(), i);
      return t = s.apply(e, t), y.matrixPool.return(s), t;
    },
    toLocal(e, t, i, s) {
      t && (e = t.toGlobal(e, i, s));
      let r = this.getGlobalTransform(y.matrixPool.get(), s);
      return i = r.applyInverse(e, i), y.matrixPool.return(r), i;
    }
  };
  e.s(["toLocalGlobalMixin", 0, k], 247016);
  var A = e.i(706848),
    I = e.i(356566),
    B = e.i(609932),
    D = e.i(317765),
    O = e.i(337654),
    E = e.i(602699);
  let F = 0;
  class U {
    constructor(e) {
      this._poolKeyHash = Object.create(null), this._texturePool = {}, this.textureOptions = e || {}, this.enableFullScreen = !1, this.textureStyle = new E.TextureStyle(this.textureOptions);
    }
    createTexture(e, t, i, s) {
      let r = new D.TextureSource({
        ...this.textureOptions,
        width: e,
        height: t,
        resolution: 1,
        antialias: i,
        autoGarbageCollect: !1,
        autoGenerateMipmaps: s
      });
      return new O.Texture({
        source: r,
        label: `texturePool_${F++}`
      });
    }
    getOptimalTexture(e, t, i = 1, s, r = !1) {
      let n = Math.ceil(e * i - 1e-6),
        h = Math.ceil(t * i - 1e-6);
      n = (0, I.nextPow2)(n);
      let l = (n << 17) + ((h = (0, I.nextPow2)(h)) << 2) + (!!r << 1) + +!!s;
      this._texturePool[l] || (this._texturePool[l] = []);
      let o = this._texturePool[l].pop();
      return o || (o = this.createTexture(n, h, s, r)), o.source._resolution = i, o.source.width = n / i, o.source.height = h / i, o.source.pixelWidth = n, o.source.pixelHeight = h, o.frame.x = 0, o.frame.y = 0, o.frame.width = e, o.frame.height = t, o.updateUvs(), this._poolKeyHash[o.uid] = l, o;
    }
    getSameSizeTexture(e, t = !1) {
      let i = e.source;
      return this.getOptimalTexture(e.width, e.height, i._resolution, t);
    }
    returnTexture(e, t = !1) {
      let i = this._poolKeyHash[e.uid];
      t && (e.source.style = this.textureStyle), this._texturePool[i].push(e);
    }
    clear(e) {
      if (e = !1 !== e) for (let e in this._texturePool) {
        let t = this._texturePool[e];
        if (t) for (let e = 0; e < t.length; e++) t[e].destroy(!0);
      }
      this._texturePool = {};
    }
  }
  let L = new U();
  B.GlobalResourceRegistry.register(L), e.s(["TexturePool", 0, L, "TexturePoolClass", 0, U], 901548);
  class Y {
    constructor() {
      this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new n.Matrix(), this.worldColorAlpha = 0xffffffff, this.worldColor = 0xffffff, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = {
        list: [],
        index: 0
      }, this.structureDidChange = !0, this.instructionSet = new A.InstructionSet(), this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7;
    }
    init(e) {
      this.root = e, e._onRender && this.addOnRender(e), e.didChange = !0;
      let t = e.children;
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        i._updateFlags = 15, this.addChild(i);
      }
    }
    enableCacheAsTexture(e = {}) {
      this.textureOptions = e, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0;
    }
    disableCacheAsTexture() {
      this.isCachedAsTexture = !1, this.texture && (L.returnTexture(this.texture, !0), this.texture = null);
    }
    updateCacheTexture() {
      this.textureNeedsUpdate = !0;
      let e = this._parentCacheAsTextureRenderGroup;
      e && !e.textureNeedsUpdate && e.updateCacheTexture();
    }
    reset() {
      for (let e in this.renderGroupChildren.length = 0, this.childrenToUpdate) {
        let t = this.childrenToUpdate[e];
        t.list.fill(null), t.index = 0;
      }
      this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture();
    }
    get localTransform() {
      return this.root.localTransform;
    }
    addRenderGroupChild(e) {
      e.renderGroupParent && e.renderGroupParent._removeRenderGroupChild(e), e.renderGroupParent = this, this.renderGroupChildren.push(e);
    }
    _removeRenderGroupChild(e) {
      let t = this.renderGroupChildren.indexOf(e);
      t > -1 && this.renderGroupChildren.splice(t, 1), e.renderGroupParent = null;
    }
    addChild(e) {
      if (this.structureDidChange = !0, e.parentRenderGroup = this, e.updateTick = -1, e.parent === this.root ? e.relativeRenderGroupDepth = 1 : e.relativeRenderGroupDepth = e.parent.relativeRenderGroupDepth + 1, e.didChange = !0, this.onChildUpdate(e), e.renderGroup) return void this.addRenderGroupChild(e.renderGroup);
      e._onRender && this.addOnRender(e);
      let t = e.children;
      for (let e = 0; e < t.length; e++) this.addChild(t[e]);
    }
    removeChild(e) {
      if (this.structureDidChange = !0, e._onRender && !e.renderGroup && this.removeOnRender(e), e.parentRenderGroup = null, e.renderGroup) return void this._removeRenderGroupChild(e.renderGroup);
      let t = e.children;
      for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
    }
    removeChildren(e) {
      for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
    }
    onChildUpdate(e) {
      let t = this.childrenToUpdate[e.relativeRenderGroupDepth];
      t || (t = this.childrenToUpdate[e.relativeRenderGroupDepth] = {
        index: 0,
        list: []
      }), t.list[t.index++] = e;
    }
    updateRenderable(e) {
      e.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e), e.didViewUpdate = !1);
    }
    onChildViewUpdate(e) {
      this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = e;
    }
    get isRenderable() {
      return 7 === this.root.localDisplayStatus && this.worldAlpha > 0;
    }
    addOnRender(e) {
      this._onRenderContainers.push(e);
    }
    removeOnRender(e) {
      this._onRenderContainers.splice(this._onRenderContainers.indexOf(e), 1);
    }
    runOnRender(e) {
      for (let t = 0; t < this._onRenderContainers.length; t++) this._onRenderContainers[t]._onRender(e);
    }
    destroy() {
      this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null;
    }
    getChildren(e = []) {
      let t = this.root.children;
      for (let i = 0; i < t.length; i++) this._getChildren(t[i], e);
      return e;
    }
    _getChildren(e, t = []) {
      if (t.push(e), e.renderGroup) return t;
      let i = e.children;
      for (let e = 0; e < i.length; e++) this._getChildren(i[e], t);
      return t;
    }
    invalidateMatrices() {
      this._matrixDirty = 7;
    }
    get inverseWorldTransform() {
      return (1 & this._matrixDirty) == 0 ? this._inverseWorldTransform : (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new n.Matrix()), this._inverseWorldTransform.copyFrom(this.worldTransform).invert());
    }
    get textureOffsetInverseTransform() {
      return (2 & this._matrixDirty) == 0 ? this._textureOffsetInverseTransform : (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new n.Matrix()), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y));
    }
    get inverseParentTextureTransform() {
      if ((4 & this._matrixDirty) == 0) return this._inverseParentTextureTransform;
      this._matrixDirty &= -5;
      let e = this._parentCacheAsTextureRenderGroup;
      return e ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new n.Matrix()), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x, -e._textureBounds.y)) : this.worldTransform;
    }
    get cacheToLocalTransform() {
      return this.isCachedAsTexture ? this.textureOffsetInverseTransform : this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null;
    }
  }
  function V(e, t, i = {}) {
    for (let s in t) i[s] || void 0 === t[s] || (e[s] = t[s]);
  }
  e.s(["RenderGroup", 0, Y], 629041), e.s(["assignWithIgnore", 0, V], 544996);
  let N = new l.ObservablePoint(null),
    z = new l.ObservablePoint(null),
    X = new l.ObservablePoint(null, 1, 1),
    H = new l.ObservablePoint(null);
  class W extends t.default {
    constructor(e = {}) {
      super(), this.uid = (0, o.uid)("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.parentRenderLayer = null, this.updateTick = -1, this.localTransform = new n.Matrix(), this.relativeGroupTransform = new n.Matrix(), this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new l.ObservablePoint(this, 0, 0), this._scale = X, this._pivot = z, this._origin = H, this._skew = N, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 0xffffff, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 0xffffff, this.groupColorAlpha = 0xffffffff, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], V(this, e, {
        children: !0,
        parent: !0,
        effects: !0
      }), e.children?.forEach(e => this.addChild(e)), e.parent?.addChild(this);
    }
    static mixin(e) {
      (0, a.deprecation)("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), r.extensions.mixin(W, e);
    }
    set _didChangeId(e) {
      this._didViewChangeTick = e >> 12 & 4095, this._didContainerChangeTick = 4095 & e;
    }
    get _didChangeId() {
      return 4095 & this._didContainerChangeTick | (4095 & this._didViewChangeTick) << 12;
    }
    addChild(...e) {
      if (this.allowChildren || (0, a.deprecation)(a.v8_0_0, "addChild: Only Containers will be allowed to add children in v8.0.0"), e.length > 1) {
        for (let t = 0; t < e.length; t++) this.addChild(e[t]);
        return e[0];
      }
      let t = e[0],
        i = this.renderGroup || this.parentRenderGroup;
      return t.parent === this ? (this.children.splice(this.children.indexOf(t), 1), this.children.push(t), i && (i.structureDidChange = !0)) : (t.parent && t.parent.removeChild(t), this.children.push(t), this.sortableChildren && (this.sortDirty = !0), t.parent = this, t.didChange = !0, t._updateFlags = 15, i && i.addChild(t), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this), this._didViewChangeTick++, 0 !== t._zIndex && t.depthOfChildModified()), t;
    }
    removeChild(...e) {
      if (e.length > 1) {
        for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
        return e[0];
      }
      let t = e[0],
        i = this.children.indexOf(t);
      return i > -1 && (this._didViewChangeTick++, this.children.splice(i, 1), this.renderGroup ? this.renderGroup.removeChild(t) : this.parentRenderGroup && this.parentRenderGroup.removeChild(t), t.parentRenderLayer && t.parentRenderLayer.detach(t), t.parent = null, this.emit("childRemoved", t, this, i), t.emit("removed", this)), t;
    }
    _onUpdate(e) {
      e && e === this._skew && this._updateSkew(), this._didContainerChangeTick++, !this.didChange && (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this));
    }
    set isRenderGroup(e) {
      !!this.renderGroup !== e && (e ? this.enableRenderGroup() : this.disableRenderGroup());
    }
    get isRenderGroup() {
      return !!this.renderGroup;
    }
    enableRenderGroup() {
      if (this.renderGroup) return;
      let e = this.parentRenderGroup;
      e?.removeChild(this), this.renderGroup = u.BigPool.get(Y, this), this.groupTransform = n.Matrix.IDENTITY, e?.addChild(this), this._updateIsSimple();
    }
    disableRenderGroup() {
      if (!this.renderGroup) return;
      let e = this.parentRenderGroup;
      e?.removeChild(this), u.BigPool.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, e?.addChild(this), this._updateIsSimple();
    }
    _updateIsSimple() {
      this.isSimple = !this.renderGroup && 0 === this.effects.length;
    }
    get worldTransform() {
      return this._worldTransform || (this._worldTransform = new n.Matrix()), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform;
    }
    get x() {
      return this._position.x;
    }
    set x(e) {
      this._position.x = e;
    }
    get y() {
      return this._position.y;
    }
    set y(e) {
      this._position.y = e;
    }
    get position() {
      return this._position;
    }
    set position(e) {
      this._position.copyFrom(e);
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(e) {
      this._rotation !== e && (this._rotation = e, this._onUpdate(this._skew));
    }
    get angle() {
      return this.rotation * h.RAD_TO_DEG;
    }
    set angle(e) {
      this.rotation = e * h.DEG_TO_RAD;
    }
    get pivot() {
      return this._pivot === z && (this._pivot = new l.ObservablePoint(this, 0, 0)), this._pivot;
    }
    set pivot(e) {
      this._pivot === z && (this._pivot = new l.ObservablePoint(this, 0, 0), this._origin !== H && (0, d.warn)("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), "number" == typeof e ? this._pivot.set(e) : this._pivot.copyFrom(e);
    }
    get skew() {
      return this._skew === N && (this._skew = new l.ObservablePoint(this, 0, 0)), this._skew;
    }
    set skew(e) {
      this._skew === N && (this._skew = new l.ObservablePoint(this, 0, 0)), this._skew.copyFrom(e);
    }
    get scale() {
      return this._scale === X && (this._scale = new l.ObservablePoint(this, 1, 1)), this._scale;
    }
    set scale(e) {
      this._scale === X && (this._scale = new l.ObservablePoint(this, 0, 0)), "string" == typeof e && (e = parseFloat(e)), "number" == typeof e ? this._scale.set(e) : this._scale.copyFrom(e);
    }
    get origin() {
      return this._origin === H && (this._origin = new l.ObservablePoint(this, 0, 0)), this._origin;
    }
    set origin(e) {
      this._origin === H && (this._origin = new l.ObservablePoint(this, 0, 0), this._pivot !== z && (0, d.warn)("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), "number" == typeof e ? this._origin.set(e) : this._origin.copyFrom(e);
    }
    get width() {
      return Math.abs(this.scale.x * this.getLocalBounds().width);
    }
    set width(e) {
      let t = this.getLocalBounds().width;
      this._setWidth(e, t);
    }
    get height() {
      return Math.abs(this.scale.y * this.getLocalBounds().height);
    }
    set height(e) {
      let t = this.getLocalBounds().height;
      this._setHeight(e, t);
    }
    getSize(e) {
      e || (e = {});
      let t = this.getLocalBounds();
      return e.width = Math.abs(this.scale.x * t.width), e.height = Math.abs(this.scale.y * t.height), e;
    }
    setSize(e, t) {
      let i = this.getLocalBounds();
      "object" == typeof e ? (t = e.height ?? e.width, e = e.width) : t ?? (t = e), void 0 !== e && this._setWidth(e, i.width), void 0 !== t && this._setHeight(t, i.height);
    }
    _updateSkew() {
      let e = this._rotation,
        t = this._skew;
      this._cx = Math.cos(e + t._y), this._sx = Math.sin(e + t._y), this._cy = -Math.sin(e - t._x), this._sy = Math.cos(e - t._x);
    }
    updateTransform(e) {
      return this.position.set("number" == typeof e.x ? e.x : this.position.x, "number" == typeof e.y ? e.y : this.position.y), this.scale.set("number" == typeof e.scaleX ? e.scaleX : this.scale.x, "number" == typeof e.scaleY ? e.scaleY : this.scale.y), this.rotation = "number" == typeof e.rotation ? e.rotation : this.rotation, this.skew.set("number" == typeof e.skewX ? e.skewX : this.skew.x, "number" == typeof e.skewY ? e.skewY : this.skew.y), this.pivot.set("number" == typeof e.pivotX ? e.pivotX : this.pivot.x, "number" == typeof e.pivotY ? e.pivotY : this.pivot.y), this.origin.set("number" == typeof e.originX ? e.originX : this.origin.x, "number" == typeof e.originY ? e.originY : this.origin.y), this;
    }
    setFromMatrix(e) {
      e.decompose(this);
    }
    updateLocalTransform() {
      let e = this._didContainerChangeTick;
      if (this._didLocalTransformChangeId === e) return;
      this._didLocalTransformChangeId = e;
      let t = this.localTransform,
        i = this._scale,
        s = this._pivot,
        r = this._origin,
        n = this._position,
        h = i._x,
        l = i._y,
        o = s._x,
        a = s._y,
        d = -r._x,
        u = -r._y;
      t.a = this._cx * h, t.b = this._sx * h, t.c = this._cy * l, t.d = this._sy * l, t.tx = n._x - (o * t.a + a * t.c) + (d * t.a + u * t.c) - d, t.ty = n._y - (o * t.b + a * t.d) + (d * t.b + u * t.d) - u;
    }
    set alpha(e) {
      e !== this.localAlpha && (this.localAlpha = e, this._updateFlags |= 1, this._onUpdate());
    }
    get alpha() {
      return this.localAlpha;
    }
    set tint(e) {
      let t = i.Color.shared.setValue(e ?? 0xffffff).toBgrNumber();
      t !== this.localColor && (this.localColor = t, this._updateFlags |= 1, this._onUpdate());
    }
    get tint() {
      return (0, m.bgr2rgb)(this.localColor);
    }
    set blendMode(e) {
      this.localBlendMode !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 2, this.localBlendMode = e, this._onUpdate());
    }
    get blendMode() {
      return this.localBlendMode;
    }
    get visible() {
      return !!(2 & this.localDisplayStatus);
    }
    set visible(e) {
      let t = 2 * !!e;
      (2 & this.localDisplayStatus) !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 2, this._onUpdate(), this.emit("visibleChanged", e));
    }
    get culled() {
      return !(4 & this.localDisplayStatus);
    }
    set culled(e) {
      (4 & this.localDisplayStatus) != 4 * !e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 4, this._onUpdate());
    }
    get renderable() {
      return !!(1 & this.localDisplayStatus);
    }
    set renderable(e) {
      (1 & this.localDisplayStatus) != +!!e && (this._updateFlags |= 4, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate());
    }
    get isRenderable() {
      return 7 === this.localDisplayStatus && this.groupAlpha > 0;
    }
    destroy(e = !1) {
      let t;
      if (!this.destroyed) {
        if (this.destroyed = !0, this.children.length && (t = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), ("boolean" == typeof e ? e : e?.children) && t) for (let i = 0; i < t.length; ++i) t[i].destroy(e);
        this.renderGroup?.destroy(), this.renderGroup = null;
      }
    }
  }
  r.extensions.mixin(W, p.childrenHelperMixin, x.getFastGlobalBoundsMixin, k, R, G, _.effectsMixin, g.findMixin, M, s.cullingMixin, c.cacheAsTextureMixin, m.getGlobalMixin, f.collectRenderablesMixin), e.s(["Container", 0, W, "UPDATE_BLEND", 0, 2, "UPDATE_COLOR", 0, 1, "UPDATE_TRANSFORM", 0, 8, "UPDATE_VISIBLE", 0, 4], 275576);
};
