// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 507938.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(893661),
    n = e.i(629041),
    i = e.i(562140);
  let s = {};
  t.extensions.handle(t.ExtensionType.BlendMode, e => {
    if (!e.name) throw Error("BlendMode extension must have a name property");
    s[e.name] = e.ref;
  }, e => {
    delete s[e.name];
  });
  class a {
    constructor(e) {
      this._blendModeStack = [], this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = e, this._renderer.runners.prerender.add(this);
    }
    prerender() {
      this._activeBlendMode = "normal", this._isAdvanced = !1;
    }
    pushBlendMode(e, t, r) {
      this._blendModeStack.push(t), this.setBlendMode(e, t, r);
    }
    popBlendMode(e) {
      this._blendModeStack.pop();
      let t = this._blendModeStack[this._activeBlendMode.length - 1] ?? "normal";
      this.setBlendMode(null, t, e);
    }
    setBlendMode(e, t, r) {
      let i = e instanceof n.RenderGroup;
      if (this._activeBlendMode === t) {
        this._isAdvanced && e && !i && this._renderableList?.push(e);
        return;
      }
      this._isAdvanced && this._endAdvancedBlendMode(r), this._activeBlendMode = t, e && (this._isAdvanced = !!s[t], this._isAdvanced && this._beginAdvancedBlendMode(e, r));
    }
    _beginAdvancedBlendMode(e, t) {
      this._renderer.renderPipes.batch.break(t);
      let r = this._activeBlendMode;
      if (!s[r]) return void (0, i.warn)(`Unable to assign BlendMode: '${r}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);
      let a = this._ensureFilterEffect(r),
        o = e instanceof n.RenderGroup,
        l = {
          renderPipeId: "filter",
          action: "pushFilter",
          filterEffect: a,
          renderables: o ? null : [e],
          container: o ? e.root : null,
          canBundle: !1
        };
      this._renderableList = l.renderables, t.add(l);
    }
    _ensureFilterEffect(e) {
      let t = this._filterHash[e];
      return t || ((t = this._filterHash[e] = new r.FilterEffect()).filters = [new s[e]()]), t;
    }
    _endAdvancedBlendMode(e) {
      this._isAdvanced = !1, this._renderableList = null, this._renderer.renderPipes.batch.break(e), e.add({
        renderPipeId: "filter",
        action: "popFilter",
        canBundle: !1
      });
    }
    buildStart() {
      this._isAdvanced = !1;
    }
    buildEnd(e) {
      this._isAdvanced && this._endAdvancedBlendMode(e);
    }
    destroy() {
      for (let e in this._renderer = null, this._renderableList = null, this._filterHash) this._filterHash[e].destroy();
      this._filterHash = null;
    }
  }
  a.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes, t.ExtensionType.CanvasPipes],
    name: "blendMode"
  }, e.s(["BlendModePipe", 0, a]);
};
