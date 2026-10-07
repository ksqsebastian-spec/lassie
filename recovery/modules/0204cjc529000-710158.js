// Recovered from 0204cjc529000.js. Runtime module IDs: 710158, 64645, 426307.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(893661),
    i = e.i(78278),
    s = e.i(765480);
  class r {
    constructor() {
      this._effectClasses = [], this._tests = [], this._initialized = !1;
    }
    init() {
      this._initialized || (this._initialized = !0, this._effectClasses.forEach(e => {
        this.add({
          test: e.test,
          maskClass: e
        });
      }));
    }
    add(e) {
      this._tests.push(e);
    }
    getMaskEffect(e) {
      this._initialized || this.init();
      for (let t = 0; t < this._tests.length; t++) {
        let i = this._tests[t];
        if (i.test(e)) return s.BigPool.get(i.maskClass, e);
      }
      return e;
    }
    returnMaskEffect(e) {
      s.BigPool.return(e);
    }
  }
  let n = new r();
  i.extensions.handleByList(i.ExtensionType.MaskEffect, n._effectClasses), e.s(["MaskEffectManager", 0, n, "MaskEffectManagerClass", 0, r], 64645), e.s(["effectsMixin", 0, {
    _maskEffect: null,
    _maskOptions: {
      inverse: !1,
      channel: "red"
    },
    _filterEffect: null,
    effects: [],
    _markStructureAsChanged() {
      let e = this.renderGroup || this.parentRenderGroup;
      e && (e.structureDidChange = !0);
    },
    addEffect(e) {
      -1 === this.effects.indexOf(e) && (this.effects.push(e), this.effects.sort((e, t) => e.priority - t.priority), this._markStructureAsChanged(), this._updateIsSimple());
    },
    removeEffect(e) {
      let t = this.effects.indexOf(e);
      -1 !== t && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple());
    },
    set mask(value) {
      let e = this._maskEffect;
      if (e?.mask === value || (e && (this.removeEffect(e), n.returnMaskEffect(e), this._maskEffect = null), null == value)) return;
      this._maskEffect = n.getMaskEffect(value), this.addEffect(this._maskEffect);
    },
    get mask() {
      return this._maskEffect?.mask;
    },
    setMask(e) {
      this._maskOptions = {
        ...this._maskOptions,
        ...e
      }, e.mask && (this.mask = e.mask), this._markStructureAsChanged();
    },
    set filters(value) {
      !Array.isArray(value) && value && (value = [value]);
      let e = this._filterEffect || (this._filterEffect = new t.FilterEffect()),
        i = value?.length > 0,
        s = e.filters?.length > 0;
      e.filters = Object.freeze(value = Array.isArray(value) ? value.slice(0) : value), i !== s && (i ? this.addEffect(e) : (this.removeEffect(e), e.filters = value ?? null));
    },
    get filters() {
      return this._filterEffect?.filters;
    },
    set filterArea(value) {
      this._filterEffect || (this._filterEffect = new t.FilterEffect()), this._filterEffect.filterArea = value;
    },
    get filterArea() {
      return this._filterEffect?.filterArea;
    }
  }], 710158);
  var h = e.i(727905);
  e.s(["findMixin", 0, {
    label: null,
    get name() {
      return (0, h.deprecation)(h.v8_0_0, "Container.name property has been removed, use Container.label instead"), this.label;
    },
    set name(value) {
      (0, h.deprecation)(h.v8_0_0, "Container.name property has been removed, use Container.label instead"), this.label = value;
    },
    getChildByName(e, t = !1) {
      return this.getChildByLabel(e, t);
    },
    getChildByLabel(e, t = !1) {
      let i = this.children;
      for (let t = 0; t < i.length; t++) {
        let s = i[t];
        if (s.label === e || e instanceof RegExp && e.test(s.label)) return s;
      }
      if (t) for (let t = 0; t < i.length; t++) {
        let s = i[t].getChildByLabel(e, !0);
        if (s) return s;
      }
      return null;
    },
    getChildrenByLabel(e, t = !1, i = []) {
      let s = this.children;
      for (let t = 0; t < s.length; t++) {
        let r = s[t];
        (r.label === e || e instanceof RegExp && e.test(r.label)) && i.push(r);
      }
      if (t) for (let t = 0; t < s.length; t++) s[t].getChildrenByLabel(e, !0, i);
      return i;
    }
  }], 426307);
};
