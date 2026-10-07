// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 261095, 324086.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(562140),
    r = e.i(434367);
  e.s(["ensureAttributes", 0, function (e, i) {
    for (let r in e.attributes) {
      let a = e.attributes[r],
        n = i[r];
      n ? (a.format ?? (a.format = n.format), a.offset ?? (a.offset = n.offset), a.instance ?? (a.instance = n.instance)) : (0, t.warn)(`Attribute ${r} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
    }
    !function (e) {
      let {
          buffers: t,
          attributes: i
        } = e,
        a = {},
        n = {};
      for (let e in t) {
        let r = t[e];
        a[r.uid] = 0, n[r.uid] = 0;
      }
      for (let e in i) {
        let t = i[e];
        a[t.buffer.uid] += (0, r.getAttributeInfoFromFormat)(t.format).stride;
      }
      for (let e in i) {
        let t = i[e];
        t.stride ?? (t.stride = a[t.buffer.uid]), t.start ?? (t.start = n[t.buffer.uid]), n[t.buffer.uid] += (0, r.getAttributeInfoFromFormat)(t.format).stride;
      }
    }(e);
  }], 261095);
  var i = e.i(589627);
  let a = [];
  a[i.STENCIL_MODES.NONE] = void 0, a[i.STENCIL_MODES.DISABLED] = {
    stencilWriteMask: 0,
    stencilReadMask: 0
  }, a[i.STENCIL_MODES.RENDERING_MASK_ADD] = {
    stencilFront: {
      compare: "equal",
      passOp: "increment-clamp"
    },
    stencilBack: {
      compare: "equal",
      passOp: "increment-clamp"
    }
  }, a[i.STENCIL_MODES.RENDERING_MASK_REMOVE] = {
    stencilFront: {
      compare: "equal",
      passOp: "decrement-clamp"
    },
    stencilBack: {
      compare: "equal",
      passOp: "decrement-clamp"
    }
  }, a[i.STENCIL_MODES.MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
      compare: "equal",
      passOp: "keep"
    },
    stencilBack: {
      compare: "equal",
      passOp: "keep"
    }
  }, a[i.STENCIL_MODES.INVERSE_MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
      compare: "not-equal",
      passOp: "keep"
    },
    stencilBack: {
      compare: "not-equal",
      passOp: "keep"
    }
  }, e.s(["GpuStencilModesToPixi", 0, a], 324086);
};
