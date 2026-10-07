// Recovered from 03kbp77gqqpi1.js. Runtime module IDs: 403204, 879238, 109636, 448197, 322183.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    r = e.i(324086),
    i = e.i(589627);
  class a {
    constructor(e) {
      this._stencilCache = {
        enabled: !1,
        stencilReference: 0,
        stencilMode: i.STENCIL_MODES.NONE
      }, this._renderTargetStencilState = Object.create(null), e.renderTarget.onRenderTargetChange.add(this);
    }
    contextChange(e) {
      this._gl = e, this._comparisonFuncMapping = {
        always: e.ALWAYS,
        never: e.NEVER,
        equal: e.EQUAL,
        "not-equal": e.NOTEQUAL,
        less: e.LESS,
        "less-equal": e.LEQUAL,
        greater: e.GREATER,
        "greater-equal": e.GEQUAL
      }, this._stencilOpsMapping = {
        keep: e.KEEP,
        zero: e.ZERO,
        replace: e.REPLACE,
        invert: e.INVERT,
        "increment-clamp": e.INCR,
        "decrement-clamp": e.DECR,
        "increment-wrap": e.INCR_WRAP,
        "decrement-wrap": e.DECR_WRAP
      }, this.resetState();
    }
    onRenderTargetChange(e) {
      if (this._activeRenderTarget === e) return;
      this._activeRenderTarget = e;
      let t = this._renderTargetStencilState[e.uid];
      t || (t = this._renderTargetStencilState[e.uid] = {
        stencilMode: i.STENCIL_MODES.DISABLED,
        stencilReference: 0
      }), this.setStencilMode(t.stencilMode, t.stencilReference);
    }
    resetState() {
      this._stencilCache.enabled = !1, this._stencilCache.stencilMode = i.STENCIL_MODES.NONE, this._stencilCache.stencilReference = 0;
    }
    setStencilMode(e, t) {
      let a = this._renderTargetStencilState[this._activeRenderTarget.uid],
        n = this._gl,
        s = r.GpuStencilModesToPixi[e],
        o = this._stencilCache;
      if (a.stencilMode = e, a.stencilReference = t, e === i.STENCIL_MODES.DISABLED) {
        this._stencilCache.enabled && (this._stencilCache.enabled = !1, n.disable(n.STENCIL_TEST));
        return;
      }
      this._stencilCache.enabled || (this._stencilCache.enabled = !0, n.enable(n.STENCIL_TEST)), (e !== o.stencilMode || o.stencilReference !== t) && (o.stencilMode = e, o.stencilReference = t, n.stencilFunc(this._comparisonFuncMapping[s.stencilBack.compare], t, 255), n.stencilOp(n.KEEP, n.KEEP, this._stencilOpsMapping[s.stencilBack.passOp]));
    }
  }
  a.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "stencil"
  }, e.s(["GlStencilSystem", 0, a], 403204);
  var n = e.i(627760);
  let s = {
    f32: 4,
    i32: 4,
    "vec2<f32>": 8,
    "vec3<f32>": 12,
    "vec4<f32>": 16,
    "vec2<i32>": 8,
    "vec3<i32>": 12,
    "vec4<i32>": 16,
    "mat2x2<f32>": 32,
    "mat3x3<f32>": 48,
    "mat4x4<f32>": 64
  };
  function o(e) {
    let t = e.map(e => ({
        data: e,
        offset: 0,
        size: 0
      })),
      r = 0,
      i = 0;
    for (let e = 0; e < t.length; e++) {
      let a = t[e];
      if (!(r = s[a.data.type])) throw Error(`Unknown type ${a.data.type}`);
      a.data.size > 1 && (r = Math.max(r, 16) * a.data.size);
      let n = 12 === r ? 16 : r;
      a.size = r;
      let o = i % 16;
      o > 0 && 16 - o < n ? i += (16 - o) % 16 : i += (r - o % r) % r, a.offset = i, i += r;
    }
    return {
      uboElements: t,
      size: i = 16 * Math.ceil(i / 16)
    };
  }
  e.s(["WGSL_TO_STD40_SIZE", 0, s, "createUboElementsSTD40", 0, o], 879238);
  var l = e.i(902504),
    u = e.i(422537);
  function _(e, t) {
    let r = Math.max(s[e.data.type] / 16, 1),
      i = e.data.value.length / e.data.size,
      a = (4 - i % 4) % 4,
      n = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return `
        v = uv.${e.data.name};
        offset += ${t};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${e.data.size * r}; i++)
        {
            for(var j = 0; j < ${i}; j++)
            {
                ${n}[arrayOffset++] = v[t++];
            }
            ${0 !== a ? `arrayOffset += ${a};` : ""}
        }
    `;
  }
  function c(e) {
    return (0, l.createUboSyncFunction)(e, "uboStd40", _, u.uboSyncFunctionsSTD40);
  }
  e.s(["generateArraySyncSTD40", 0, _], 109636), e.s(["createUboSyncFunctionSTD40", 0, c], 448197);
  class h extends n.UboSystem {
    constructor() {
      super({
        createUboElements: o,
        generateUboSync: c
      });
    }
  }
  h.extension = {
    type: [t.ExtensionType.WebGLSystem],
    name: "ubo"
  }, e.s(["GlUboSystem", 0, h], 322183);
};
