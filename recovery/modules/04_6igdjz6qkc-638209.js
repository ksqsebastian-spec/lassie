// Recovered from 04_6igdjz6qkc.js. Runtime module IDs: 638209, 232376.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278);
  class r {
    constructor(e) {
      this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e;
    }
    buildStart() {
      this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15;
    }
    push(e, t, r) {
      this._renderer.renderPipes.batch.break(r);
      let n = this._colorStack;
      n[this._colorStackIndex] = n[this._colorStackIndex - 1] & e.mask;
      let i = this._colorStack[this._colorStackIndex];
      i !== this._currentColor && (this._currentColor = i, r.add({
        renderPipeId: "colorMask",
        colorMask: i,
        canBundle: !1
      })), this._colorStackIndex++;
    }
    pop(e, t, r) {
      this._renderer.renderPipes.batch.break(r);
      let n = this._colorStack;
      this._colorStackIndex--;
      let i = n[this._colorStackIndex - 1];
      i !== this._currentColor && (this._currentColor = i, r.add({
        renderPipeId: "colorMask",
        colorMask: i,
        canBundle: !1
      }));
    }
    execute(e) {
      this._renderer.colorMask.setMask(e.colorMask);
    }
    destroy() {
      this._renderer = null, this._colorStack = null;
    }
  }
  r.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes],
    name: "colorMask"
  }, e.s(["ColorMaskPipe", 0, r], 638209);
  var n = e.i(220892),
    i = e.i(589627);
  class s {
    constructor(e) {
      this._maskStackHash = {}, this._maskHash = new WeakMap(), this._renderer = e;
    }
    push(e, t, r) {
      var n;
      let i = this._renderer;
      i.renderPipes.batch.break(r), i.renderPipes.blendMode.setBlendMode(e.mask, "none", r), r.add({
        renderPipeId: "stencilMask",
        action: "pushMaskBegin",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
      let s = e.mask;
      s.includeInBuild = !0, this._maskHash.has(e) || this._maskHash.set(e, {
        instructionsStart: 0,
        instructionsLength: 0
      });
      let a = this._maskHash.get(e);
      a.instructionsStart = r.instructionSize, s.collectRenderables(r, i, null), s.includeInBuild = !1, i.renderPipes.batch.break(r), r.add({
        renderPipeId: "stencilMask",
        action: "pushMaskEnd",
        mask: e,
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
      let o = r.instructionSize - a.instructionsStart - 1;
      a.instructionsLength = o;
      let l = i.renderTarget.renderTarget.uid;
      (n = this._maskStackHash)[l] ?? (n[l] = 0);
    }
    pop(e, t, r) {
      let n = this._renderer;
      n.renderPipes.batch.break(r), n.renderPipes.blendMode.setBlendMode(e.mask, "none", r), r.add({
        renderPipeId: "stencilMask",
        action: "popMaskBegin",
        inverse: t._maskOptions.inverse,
        canBundle: !1
      });
      let i = this._maskHash.get(e);
      for (let e = 0; e < i.instructionsLength; e++) r.instructions[r.instructionSize++] = r.instructions[i.instructionsStart++];
      r.add({
        renderPipeId: "stencilMask",
        action: "popMaskEnd",
        canBundle: !1
      });
    }
    execute(e) {
      var t;
      let r = this._renderer,
        s = r.renderTarget.renderTarget.uid,
        a = (t = this._maskStackHash)[s] ?? (t[s] = 0);
      "pushMaskBegin" === e.action ? (r.renderTarget.ensureDepthStencil(), r.stencil.setStencilMode(i.STENCIL_MODES.RENDERING_MASK_ADD, a), a++, r.colorMask.setMask(0)) : "pushMaskEnd" === e.action ? (e.inverse ? r.stencil.setStencilMode(i.STENCIL_MODES.INVERSE_MASK_ACTIVE, a) : r.stencil.setStencilMode(i.STENCIL_MODES.MASK_ACTIVE, a), r.colorMask.setMask(15)) : "popMaskBegin" === e.action ? (r.colorMask.setMask(0), 0 !== a ? r.stencil.setStencilMode(i.STENCIL_MODES.RENDERING_MASK_REMOVE, a) : (r.renderTarget.clear(null, n.CLEAR.STENCIL), r.stencil.setStencilMode(i.STENCIL_MODES.DISABLED, a)), a--) : "popMaskEnd" === e.action && (e.inverse ? r.stencil.setStencilMode(i.STENCIL_MODES.INVERSE_MASK_ACTIVE, a) : r.stencil.setStencilMode(i.STENCIL_MODES.MASK_ACTIVE, a), r.colorMask.setMask(15)), this._maskStackHash[s] = a;
    }
    destroy() {
      this._renderer = null, this._maskStackHash = null, this._maskHash = null;
    }
  }
  s.extension = {
    type: [t.ExtensionType.WebGLPipes, t.ExtensionType.WebGPUPipes],
    name: "stencilMask"
  }, e.s(["StencilMaskPipe", 0, s], 232376);
};
