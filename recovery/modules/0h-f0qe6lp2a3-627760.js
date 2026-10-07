// Recovered from 0h-f0qe6lp2a3.js. Runtime module IDs: 627760, 643781, 902504, 422537, 693398.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(737880),
    a = e.i(55585),
    r = e.i(294212);
  e.s(["UboSystem", 0, class {
    constructor(e) {
      this._syncFunctionHash = Object.create(null), this._adaptor = e, this._systemCheck();
    }
    _systemCheck() {
      if (!(0, t.unsafeEvalSupported)()) throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
    }
    ensureUniformGroup(e) {
      let t = this.getUniformGroupData(e);
      e.buffer || (e.buffer = new a.Buffer({
        data: new Float32Array(t.layout.size / 4),
        usage: r.BufferUsage.UNIFORM | r.BufferUsage.COPY_DST
      }));
    }
    getUniformGroupData(e) {
      return this._syncFunctionHash[e._signature] || this._initUniformGroup(e);
    }
    _initUniformGroup(e) {
      let t = e._signature,
        a = this._syncFunctionHash[t];
      if (!a) {
        let r = Object.keys(e.uniformStructures).map(t => e.uniformStructures[t]),
          o = this._adaptor.createUboElements(r),
          i = this._generateUboSync(o.uboElements);
        a = this._syncFunctionHash[t] = {
          layout: o,
          syncFunction: i
        };
      }
      return this._syncFunctionHash[t];
    }
    _generateUboSync(e) {
      return this._adaptor.generateUboSync(e);
    }
    syncUniformGroup(e, t, o) {
      let i = this.getUniformGroupData(e);
      e.buffer || (e.buffer = new a.Buffer({
        data: new Float32Array(i.layout.size / 4),
        usage: r.BufferUsage.UNIFORM | r.BufferUsage.COPY_DST
      }));
      let s = null;
      return t || (t = e.buffer.data, s = e.buffer.dataInt32), o || (o = 0), i.syncFunction(e.uniforms, t, s, o), !0;
    }
    updateUniformGroup(e) {
      if (e.isStatic && !e._dirtyId) return !1;
      e._dirtyId = 0;
      let t = this.syncUniformGroup(e);
      return e.buffer.update(), t;
    }
    destroy() {
      this._syncFunctionHash = null;
    }
  }], 627760);
  let o = [{
    type: "mat3x3<f32>",
    test: e => void 0 !== e.value.a,
    ubo: `
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,
    uniform: `
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `
  }, {
    type: "vec4<f32>",
    test: e => "vec4<f32>" === e.type && 1 === e.size && void 0 !== e.value.width,
    ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,
    uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `
  }, {
    type: "vec2<f32>",
    test: e => "vec2<f32>" === e.type && 1 === e.size && void 0 !== e.value.x,
    ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,
    uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `
  }, {
    type: "vec4<f32>",
    test: e => "vec4<f32>" === e.type && 1 === e.size && void 0 !== e.value.red,
    ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,
    uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `
  }, {
    type: "vec3<f32>",
    test: e => "vec3<f32>" === e.type && 1 === e.size && void 0 !== e.value.red,
    ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,
    uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `
  }];
  function i(e, t) {
    return `
        for (let i = 0; i < ${e * t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `;
  }
  e.s(["uniformParsers", 0, o], 643781), e.s(["createUboSyncFunction", 0, function (e, t, a, r) {
    let i = [`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],
      s = 0;
    for (let f = 0; f < e.length; f++) {
      let n = e[f],
        u = n.data.name,
        v = !1,
        l = 0;
      for (let e = 0; e < o.length; e++) if (o[e].test(n.data)) {
        l = n.offset / 4, i.push(`name = "${u}";`, `offset += ${l - s};`, o[e][t] || o[e].ubo), v = !0;
        break;
      }
      if (!v) if (n.data.size > 1) l = n.offset / 4, i.push(a(n, l - s));else {
        let e = r[n.data.type];
        l = n.offset / 4, i.push(`
                    v = uv.${u};
                    offset += ${l - s};
                    ${e};
                `);
      }
      s = l;
    }
    return Function("uv", "data", "dataInt32", "offset", i.join("\n"));
  }], 902504);
  let s = {
      f32: `
        data[offset] = v;`,
      i32: `
        dataInt32[offset] = v;`,
      "vec2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];`,
      "vec3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,
      "vec4<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,
      "vec2<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,
      "vec3<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,
      "vec4<i32>": `
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,
      "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,
      "mat3x3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,
      "mat4x4<f32>": `
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,
      "mat3x2<f32>": i(3, 2),
      "mat4x2<f32>": i(4, 2),
      "mat2x3<f32>": i(2, 3),
      "mat4x3<f32>": i(4, 3),
      "mat2x4<f32>": i(2, 4),
      "mat3x4<f32>": i(3, 4)
    },
    f = {
      ...s,
      "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `
    };
  e.s(["uboSyncFunctionsSTD40", 0, s, "uboSyncFunctionsWGSL", 0, f], 422537);
  var n = e.i(263524),
    u = e.i(733705);
  class v extends n.default {
    constructor({
      buffer: e,
      offset: t,
      size: a
    }) {
      super(), this.uid = (0, u.uid)("buffer"), this._resourceType = "bufferResource", this._touched = 0, this._resourceId = (0, u.uid)("resource"), this._bufferResource = !0, this.destroyed = !1, this.buffer = e, this.offset = 0 | t, this.size = a, this.buffer.on("change", this.onBufferChange, this);
    }
    onBufferChange() {
      this._resourceId = (0, u.uid)("resource"), this.emit("change", this);
    }
    destroy(e = !1) {
      this.destroyed = !0, e && this.buffer.destroy(), this.emit("change", this), this.buffer = null, this.removeAllListeners();
    }
  }
  e.s(["BufferResource", 0, v], 693398);
};
