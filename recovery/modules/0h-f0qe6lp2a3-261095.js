// Recovered from 0h-f0qe6lp2a3.js. Runtime module IDs: 261095, 324086.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(562140),
    a = e.i(434367);
  e.s(["ensureAttributes", 0, function (e, r) {
    for (let a in e.attributes) {
      let o = e.attributes[a],
        i = r[a];
      i ? (o.format ?? (o.format = i.format), o.offset ?? (o.offset = i.offset), o.instance ?? (o.instance = i.instance)) : (0, t.warn)(`Attribute ${a} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
    }
    !function (e) {
      let {
          buffers: t,
          attributes: r
        } = e,
        o = {},
        i = {};
      for (let e in t) {
        let a = t[e];
        o[a.uid] = 0, i[a.uid] = 0;
      }
      for (let e in r) {
        let t = r[e];
        o[t.buffer.uid] += (0, a.getAttributeInfoFromFormat)(t.format).stride;
      }
      for (let e in r) {
        let t = r[e];
        t.stride ?? (t.stride = o[t.buffer.uid]), t.start ?? (t.start = i[t.buffer.uid]), i[t.buffer.uid] += (0, a.getAttributeInfoFromFormat)(t.format).stride;
      }
    }(e);
  }], 261095);
  var r = e.i(589627);
  let o = [];
  o[r.STENCIL_MODES.NONE] = void 0, o[r.STENCIL_MODES.DISABLED] = {
    stencilWriteMask: 0,
    stencilReadMask: 0
  }, o[r.STENCIL_MODES.RENDERING_MASK_ADD] = {
    stencilFront: {
      compare: "equal",
      passOp: "increment-clamp"
    },
    stencilBack: {
      compare: "equal",
      passOp: "increment-clamp"
    }
  }, o[r.STENCIL_MODES.RENDERING_MASK_REMOVE] = {
    stencilFront: {
      compare: "equal",
      passOp: "decrement-clamp"
    },
    stencilBack: {
      compare: "equal",
      passOp: "decrement-clamp"
    }
  }, o[r.STENCIL_MODES.MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
      compare: "equal",
      passOp: "keep"
    },
    stencilBack: {
      compare: "equal",
      passOp: "keep"
    }
  }, o[r.STENCIL_MODES.INVERSE_MASK_ACTIVE] = {
    stencilWriteMask: 0,
    stencilFront: {
      compare: "not-equal",
      passOp: "keep"
    },
    stencilBack: {
      compare: "not-equal",
      passOp: "keep"
    }
  }, e.s(["GpuStencilModesToPixi", 0, o], 324086);
};
