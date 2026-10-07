// Recovered from 25drgquolhhel.js. Runtime module IDs: 153594, 189530, 609506.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(733705),
    i = t.i(235569);
  let s = ["f32", "i32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>", "vec2<i32>", "vec3<i32>", "vec4<i32>"],
    r = s.reduce((t, e) => (t[e] = !0, t), {});
  function n(t, e) {
    switch (t) {
      case "f32":
        return 0;
      case "vec2<f32>":
        return new Float32Array(2 * e);
      case "vec3<f32>":
        return new Float32Array(3 * e);
      case "vec4<f32>":
        return new Float32Array(4 * e);
      case "mat2x2<f32>":
        return new Float32Array([1, 0, 0, 1]);
      case "mat3x3<f32>":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      case "mat4x4<f32>":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    return null;
  }
  t.s(["UNIFORM_TYPES_MAP", 0, r, "UNIFORM_TYPES_VALUES", 0, s], 189530), t.s(["getDefaultUniformValue", 0, n], 609506);
  let a = class t {
    constructor(a, h) {
      this._touched = 0, this.uid = (0, e.uid)("uniform"), this._resourceType = "uniformGroup", this._resourceId = (0, e.uid)("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, h = {
        ...t.defaultOptions,
        ...h
      }, this.uniformStructures = a;
      const o = {};
      for (const t in a) {
        const e = a[t];
        if (e.name = t, e.size = e.size ?? 1, !r[e.type]) {
          const t = e.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
          if (t) {
            const [, i, s] = t;
            throw Error(`Uniform type ${e.type} is not supported. Use type: '${i}', size: ${s} instead.`);
          }
          throw Error(`Uniform type ${e.type} is not supported. Supported uniform types are: ${s.join(", ")}`);
        }
        e.value ?? (e.value = n(e.type, e.size)), o[t] = e.value;
      }
      this.uniforms = o, this._dirtyId = 1, this.ubo = h.ubo, this.isStatic = h.isStatic, this._signature = (0, i.createIdFromString)(Object.keys(o).map(t => `${t}-${a[t].type}`).join("-"), "uniform-group");
    }
    update() {
      this._dirtyId++;
    }
  };
  a.defaultOptions = {
    ubo: !1,
    isStatic: !1
  }, t.s(["UniformGroup", 0, a], 153594);
};
