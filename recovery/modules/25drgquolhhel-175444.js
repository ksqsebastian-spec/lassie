// Recovered from 25drgquolhhel.js. Runtime module IDs: 175444.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  t.s(["BindGroup", 0, class {
    constructor(t) {
      this.resources = Object.create(null), this._dirty = !0;
      let e = 0;
      for (const i in t) {
        const s = t[i];
        this.setResource(s, e++);
      }
      this._updateKey();
    }
    _updateKey() {
      if (!this._dirty) return;
      this._dirty = !1;
      let t = [],
        e = 0;
      for (let i in this.resources) t[e++] = this.resources[i]._resourceId;
      this._key = t.join("|");
    }
    setResource(t, e) {
      let i = this.resources[e];
      t !== i && (i?.off?.("change", this.onResourceChange, this), t.on?.("change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0);
    }
    getResource(t) {
      return this.resources[t];
    }
    _touch(t, e) {
      let i = this.resources;
      for (let s in i) i[s]._gcLastUsed = t, i[s]._touched = e;
    }
    destroy() {
      let t = this.resources;
      for (let e in t) {
        let i = t[e];
        i?.off?.("change", this.onResourceChange, this);
      }
      this.resources = null;
    }
    onResourceChange(t) {
      this._dirty = !0, t.destroyed ? this.destroy() : this._updateKey();
    }
  }]);
};
