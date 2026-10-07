// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 292844, 50946, 636892, 988559.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(389474),
    n = e.i(901548),
    i = e.i(602699),
    s = e.i(453549);
  function a(e, t) {
    t || (t = 0);
    for (let r = t; r < e.length; r++) if (e[r]) e[r] = null;else break;
  }
  e.s(["clearList", 0, a], 50946);
  var o = e.i(729317),
    l = e.i(275576),
    d = e.i(350585);
  let u = new l.Container(),
    h = l.UPDATE_VISIBLE | l.UPDATE_COLOR | l.UPDATE_BLEND;
  function c(e, t = !1) {
    p(e);
    let r = e.childrenToUpdate,
      n = e.updateTick++;
    for (let t in r) {
      let i = Number(t),
        s = r[t],
        o = s.list,
        l = s.index;
      for (let t = 0; t < l; t++) {
        let r = o[t];
        r.parentRenderGroup === e && r.relativeRenderGroupDepth === i && f(r, n, 0);
      }
      a(o, l), s.index = 0;
    }
    if (t) for (let r = 0; r < e.renderGroupChildren.length; r++) c(e.renderGroupChildren[r], t);
  }
  function p(e) {
    let t,
      r = e.root;
    if (e.renderGroupParent) {
      let n = e.renderGroupParent;
      e.worldTransform.appendFrom(r.relativeGroupTransform, n.worldTransform), e.worldColor = (0, d.multiplyColors)(r.groupColor, n.worldColor), t = r.groupAlpha * n.worldAlpha;
    } else e.worldTransform.copyFrom(r.localTransform), e.worldColor = r.localColor, t = r.localAlpha;
    e.worldAlpha = t = t < 0 ? 0 : t > 1 ? 1 : t, e.worldColorAlpha = e.worldColor + (255 * t << 24);
  }
  function f(e, t, r) {
    if (t === e.updateTick) return;
    e.updateTick = t, e.didChange = !1;
    let n = e.localTransform;
    e.updateLocalTransform();
    let i = e.parent;
    if (i && !i.renderGroup ? (r |= e._updateFlags, e.relativeGroupTransform.appendFrom(n, i.relativeGroupTransform), r & h && x(e, i, r)) : (r = e._updateFlags, e.relativeGroupTransform.copyFrom(n), r & h && x(e, u, r)), !e.renderGroup) {
      let n = e.children,
        i = n.length;
      for (let e = 0; e < i; e++) f(n[e], t, r);
      let s = e.parentRenderGroup;
      e.renderPipeId && !s.structureDidChange && s.updateRenderable(e);
    }
  }
  function x(e, t, r) {
    if (r & l.UPDATE_COLOR) {
      e.groupColor = (0, d.multiplyColors)(e.localColor, t.groupColor);
      let r = e.localAlpha * t.groupAlpha;
      e.groupAlpha = r = r < 0 ? 0 : r > 1 ? 1 : r, e.groupColorAlpha = e.groupColor + (255 * r << 24);
    }
    r & l.UPDATE_BLEND && (e.groupBlendMode = "inherit" === e.localBlendMode ? t.groupBlendMode : e.localBlendMode), r & l.UPDATE_VISIBLE && (e.globalDisplayStatus = e.localDisplayStatus & t.globalDisplayStatus), e._updateFlags = 0;
  }
  function m(e, t) {
    let {
        list: r
      } = e.childrenRenderablesToUpdate,
      n = !1;
    for (let i = 0; i < e.childrenRenderablesToUpdate.index; i++) {
      let e = r[i];
      if (n = t[e.renderPipeId].validateRenderable(e)) break;
    }
    return e.structureDidChange = n, n;
  }
  e.s(["updateRenderGroupTransform", 0, p, "updateRenderGroupTransforms", 0, c, "updateTransformAndChildren", 0, f], 636892), e.s(["validateRenderables", 0, m], 988559);
  let g = new r.Matrix();
  class _ {
    constructor(e) {
      this._renderer = e;
    }
    render({
      container: e,
      transform: t
    }) {
      let r = e.parent,
        n = e.renderGroup.renderGroupParent;
      e.parent = null, e.renderGroup.renderGroupParent = null;
      let i = this._renderer;
      t && (g.copyFrom(e.renderGroup.localTransform), e.renderGroup.localTransform.copyFrom(t));
      let s = i.renderPipes;
      this._updateCachedRenderGroups(e.renderGroup, null), this._updateRenderGroups(e.renderGroup), i.globalUniforms.start({
        worldTransformMatrix: t ? e.renderGroup.localTransform : e.renderGroup.worldTransform,
        worldColor: e.renderGroup.worldColorAlpha
      }), (0, o.executeInstructions)(e.renderGroup, s), s.uniformBatch && s.uniformBatch.renderEnd(), t && e.renderGroup.localTransform.copyFrom(g), e.parent = r, e.renderGroup.renderGroupParent = n;
    }
    destroy() {
      this._renderer = null;
    }
    _updateCachedRenderGroups(e, t) {
      if (e._parentCacheAsTextureRenderGroup = t, e.isCachedAsTexture) {
        if (!e.textureNeedsUpdate) return;
        t = e;
      }
      for (let r = e.renderGroupChildren.length - 1; r >= 0; r--) this._updateCachedRenderGroups(e.renderGroupChildren[r], t);
      if (e.invalidateMatrices(), e.isCachedAsTexture) {
        if (e.textureNeedsUpdate) {
          let t = e.root.getLocalBounds(),
            r = this._renderer,
            a = e.textureOptions.resolution || r.view.resolution,
            o = e.textureOptions.antialias ?? r.view.antialias,
            l = e.textureOptions.scaleMode ?? "linear",
            d = e.texture;
          t.ceil(), e.texture && n.TexturePool.returnTexture(e.texture, !0);
          let u = n.TexturePool.getOptimalTexture(t.width, t.height, a, o);
          u._source.style = new i.TextureStyle({
            scaleMode: l
          }), e.texture = u, e._textureBounds || (e._textureBounds = new s.Bounds()), e._textureBounds.copyFrom(t), d !== e.texture && e.renderGroupParent && (e.renderGroupParent.structureDidChange = !0);
        }
      } else e.texture && (n.TexturePool.returnTexture(e.texture, !0), e.texture = null);
    }
    _updateRenderGroups(e) {
      let t = this._renderer,
        r = t.renderPipes;
      if (e.runOnRender(t), e.instructionSet.renderPipes = r, e.structureDidChange ? a(e.childrenRenderablesToUpdate.list, 0) : m(e, r), c(e), e.structureDidChange ? (e.structureDidChange = !1, this._buildInstructions(e, t)) : this._updateRenderables(e), e.childrenRenderablesToUpdate.index = 0, t.renderPipes.batch.upload(e.instructionSet), !e.isCachedAsTexture || e.textureNeedsUpdate) for (let t = 0; t < e.renderGroupChildren.length; t++) this._updateRenderGroups(e.renderGroupChildren[t]);
    }
    _updateRenderables(e) {
      let {
        list: t,
        index: r
      } = e.childrenRenderablesToUpdate;
      for (let n = 0; n < r; n++) {
        let r = t[n];
        r.didViewUpdate && e.updateRenderable(r);
      }
      a(t, r);
    }
    _buildInstructions(e, t) {
      let r = e.root,
        n = e.instructionSet;
      n.reset();
      let i = t.renderPipes ? t : t.batch.renderer,
        s = i.renderPipes;
      s.batch.buildStart(n), s.blendMode.buildStart(), s.colorMask.buildStart(), r.sortableChildren && r.sortChildren(), r.collectRenderablesWithEffects(n, i, null), s.batch.buildEnd(n), s.blendMode.buildEnd(n);
    }
  }
  _.extension = {
    type: [t.ExtensionType.WebGLSystem, t.ExtensionType.WebGPUSystem, t.ExtensionType.CanvasSystem],
    name: "renderGroup"
  }, e.s(["RenderGroupSystem", 0, _], 292844);
};
