// Recovered from 25drgquolhhel.js. Runtime module IDs: 550645, 178375, 398250, 994564, 840976, 640338, 420640, 434367, 13472, 411454, 722909, 637531, 107465, 714427, 818011.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e;
  var i,
    s = t.i(235569),
    r = t.i(426832);
  function n() {
    if (!e) {
      e = "mediump";
      let t = (0, r.getTestContext)();
      t && t.getShaderPrecisionFormat && (e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision ? "highp" : "mediump");
    }
    return e;
  }
  function a(t, e, i) {
    return e ? t : i ? (t = t.replace("out vec4 finalColor;", ""), `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${t}
        `) : `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${t}
        `;
  }
  function h(t, e, i) {
    let s = i ? e.maxSupportedFragmentPrecision : e.maxSupportedVertexPrecision;
    if ("precision" !== t.substring(0, 9)) {
      let r = i ? e.requestedFragmentPrecision : e.requestedVertexPrecision;
      return "highp" === r && "highp" !== s && (r = "mediump"), `precision ${r} float;
${t}`;
    }
    return "highp" !== s && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t;
  }
  function o(t, e) {
    return e ? `#version 300 es
${t}` : t;
  }
  t.s(["getMaxFragmentPrecision", 0, n], 178375), t.s(["addProgramDefines", 0, a], 398250), t.s(["ensurePrecision", 0, h], 994564), t.s(["insertVersion", 0, o], 840976);
  let u = {},
    l = {};
  function d(t, {
    name: e = "pixi-program"
  }, i = !0) {
    e = e.replace(/\s+/g, "-") + (i ? "-fragment" : "-vertex");
    let s = i ? u : l;
    if (s[e] ? (s[e]++, e += `-${s[e]}`) : s[e] = 1, -1 !== t.indexOf("#define SHADER_NAME")) return t;
    let r = `#define SHADER_NAME ${e}`;
    return `${r}
${t}`;
  }
  function c(t, e) {
    return e ? t.replace("#version 300 es", "") : t;
  }
  t.s(["setProgramName", 0, d], 640338), t.s(["stripVersion", 0, c], 420640);
  let f = {
      stripVersion: c,
      ensurePrecision: h,
      addProgramDefines: a,
      setProgramName: d,
      insertVersion: o
    },
    m = Object.create(null),
    p = class t {
      constructor(e) {
        const i = -1 !== (e = {
            ...t.defaultOptions,
            ...e
          }).fragment.indexOf("#version 300 es"),
          r = {
            stripVersion: i,
            ensurePrecision: {
              requestedFragmentPrecision: e.preferredFragmentPrecision,
              requestedVertexPrecision: e.preferredVertexPrecision,
              maxSupportedVertexPrecision: "highp",
              maxSupportedFragmentPrecision: n()
            },
            setProgramName: {
              name: e.name
            },
            addProgramDefines: i,
            insertVersion: i
          };
        let a = e.fragment,
          h = e.vertex;
        Object.keys(f).forEach(t => {
          let e = r[t];
          a = f[t](a, e, !0), h = f[t](h, e, !1);
        }), this.fragment = a, this.vertex = h, this.transformFeedbackVaryings = e.transformFeedbackVaryings, this._key = (0, s.createIdFromString)(`${this.vertex}:${this.fragment}`, "gl-program");
      }
      destroy() {
        this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, m[this._cacheKey] = null;
      }
      static from(e) {
        let i = `${e.vertex}:${e.fragment}`;
        return m[i] || (m[i] = new t(e), m[i]._cacheKey = i), m[i];
      }
    };
  p.defaultOptions = {
    preferredVertexPrecision: "highp",
    preferredFragmentPrecision: "mediump"
  }, t.s(["GlProgram", 0, p], 550645);
  let g = {
    uint8x2: {
      size: 2,
      stride: 2,
      normalised: !1
    },
    uint8x4: {
      size: 4,
      stride: 4,
      normalised: !1
    },
    sint8x2: {
      size: 2,
      stride: 2,
      normalised: !1
    },
    sint8x4: {
      size: 4,
      stride: 4,
      normalised: !1
    },
    unorm8x2: {
      size: 2,
      stride: 2,
      normalised: !0
    },
    unorm8x4: {
      size: 4,
      stride: 4,
      normalised: !0
    },
    snorm8x2: {
      size: 2,
      stride: 2,
      normalised: !0
    },
    snorm8x4: {
      size: 4,
      stride: 4,
      normalised: !0
    },
    uint16x2: {
      size: 2,
      stride: 4,
      normalised: !1
    },
    uint16x4: {
      size: 4,
      stride: 8,
      normalised: !1
    },
    sint16x2: {
      size: 2,
      stride: 4,
      normalised: !1
    },
    sint16x4: {
      size: 4,
      stride: 8,
      normalised: !1
    },
    unorm16x2: {
      size: 2,
      stride: 4,
      normalised: !0
    },
    unorm16x4: {
      size: 4,
      stride: 8,
      normalised: !0
    },
    snorm16x2: {
      size: 2,
      stride: 4,
      normalised: !0
    },
    snorm16x4: {
      size: 4,
      stride: 8,
      normalised: !0
    },
    float16x2: {
      size: 2,
      stride: 4,
      normalised: !1
    },
    float16x4: {
      size: 4,
      stride: 8,
      normalised: !1
    },
    float32: {
      size: 1,
      stride: 4,
      normalised: !1
    },
    float32x2: {
      size: 2,
      stride: 8,
      normalised: !1
    },
    float32x3: {
      size: 3,
      stride: 12,
      normalised: !1
    },
    float32x4: {
      size: 4,
      stride: 16,
      normalised: !1
    },
    uint32: {
      size: 1,
      stride: 4,
      normalised: !1
    },
    uint32x2: {
      size: 2,
      stride: 8,
      normalised: !1
    },
    uint32x3: {
      size: 3,
      stride: 12,
      normalised: !1
    },
    uint32x4: {
      size: 4,
      stride: 16,
      normalised: !1
    },
    sint32: {
      size: 1,
      stride: 4,
      normalised: !1
    },
    sint32x2: {
      size: 2,
      stride: 8,
      normalised: !1
    },
    sint32x3: {
      size: 3,
      stride: 12,
      normalised: !1
    },
    sint32x4: {
      size: 4,
      stride: 16,
      normalised: !1
    }
  };
  function y(t) {
    return g[t] ?? g.float32;
  }
  t.s(["getAttributeInfoFromFormat", 0, y], 434367);
  let x = {
      f32: "float32",
      "vec2<f32>": "float32x2",
      "vec3<f32>": "float32x3",
      "vec4<f32>": "float32x4",
      vec2f: "float32x2",
      vec3f: "float32x3",
      vec4f: "float32x4",
      i32: "sint32",
      "vec2<i32>": "sint32x2",
      "vec3<i32>": "sint32x3",
      "vec4<i32>": "sint32x4",
      vec2i: "sint32x2",
      vec3i: "sint32x3",
      vec4i: "sint32x4",
      u32: "uint32",
      "vec2<u32>": "uint32x2",
      "vec3<u32>": "uint32x3",
      "vec4<u32>": "uint32x4",
      vec2u: "uint32x2",
      vec3u: "uint32x3",
      vec4u: "uint32x4",
      bool: "uint32",
      "vec2<bool>": "uint32x2",
      "vec3<bool>": "uint32x3",
      "vec4<bool>": "uint32x4"
    },
    b = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;
  function _(t, e) {
    let i;
    for (; null !== (i = b.exec(t));) {
      let t = x[i[3]] ?? "float32";
      e[i[2]] = {
        location: parseInt(i[1], 10),
        format: t,
        stride: y(t).stride,
        offset: 0,
        instance: !1,
        start: 0
      };
    }
    b.lastIndex = 0;
  }
  function v({
    source: t,
    entryPoint: e
  }) {
    let i = {},
      s = t.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, ""),
      r = s.indexOf(`fn ${e}(`);
    if (-1 === r) return i;
    let n = s.indexOf("->", r);
    if (-1 === n) return i;
    let a = s.substring(r, n);
    if (_(a, i), 0 === Object.keys(i).length) {
      let t = a.match(/\(\s*\w+\s*:\s*(\w+)/);
      if (t) {
        let e = t[1],
          r = RegExp(`struct\\s+${e}\\s*\\{([^}]+)\\}`, "s"),
          n = s.match(r);
        n && _(n[1], i);
      }
    }
    return i;
  }
  function w(t) {
    let e = /@group\((\d+)\)/,
      i = /@binding\((\d+)\)/,
      s = /var(<[^>]+>)? (\w+)/,
      r = /:\s*([\w<>]+)/,
      n = /(\w+)\s*:\s*([\w\<\>]+)/g,
      a = /struct\s+(\w+)/,
      h = t.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)?.map(t => ({
        group: parseInt(t.match(e)[1], 10),
        binding: parseInt(t.match(i)[1], 10),
        name: t.match(s)[2],
        isUniform: "<uniform>" === t.match(s)[1],
        type: t.match(r)[1]
      }));
    if (!h) return {
      groups: [],
      structs: []
    };
    let o = t.match(/struct\s+(\w+)\s*{([^}]+)}/g)?.map(t => {
      let e = t.match(a)[1],
        i = t.match(n).reduce((t, e) => {
          let [i, s] = e.split(":");
          return t[i.trim()] = s.trim(), t;
        }, {});
      return i ? {
        name: e,
        members: i
      } : null;
    }).filter(({
      name: t
    }) => h.some(e => e.type === t || e.type.includes(`<${t}>`))) ?? [];
    return {
      groups: h,
      structs: o
    };
  }
  t.s(["extractAttributesFromGpuProgram", 0, v], 13472), t.s(["extractStructAndGroups", 0, w], 411454);
  var M = ((i = M || {})[i.VERTEX = 1] = "VERTEX", i[i.FRAGMENT = 2] = "FRAGMENT", i[i.COMPUTE = 4] = "COMPUTE", i);
  function A({
    groups: t
  }) {
    let e = [];
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      e[s.group] || (e[s.group] = []), s.isUniform ? e[s.group].push({
        binding: s.binding,
        visibility: M.VERTEX | M.FRAGMENT,
        buffer: {
          type: "uniform"
        }
      }) : "sampler" === s.type ? e[s.group].push({
        binding: s.binding,
        visibility: M.FRAGMENT,
        sampler: {
          type: "filtering"
        }
      }) : "texture_2d" === s.type || s.type.startsWith("texture_2d<") ? e[s.group].push({
        binding: s.binding,
        visibility: M.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "2d",
          multisampled: !1
        }
      }) : "texture_2d_array" === s.type || s.type.startsWith("texture_2d_array<") ? e[s.group].push({
        binding: s.binding,
        visibility: M.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "2d-array",
          multisampled: !1
        }
      }) : ("texture_cube" === s.type || s.type.startsWith("texture_cube<")) && e[s.group].push({
        binding: s.binding,
        visibility: M.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "cube",
          multisampled: !1
        }
      });
    }
    for (let t = 0; t < e.length; t++) e[t] || (e[t] = []);
    return e;
  }
  function E({
    groups: t
  }) {
    let e = [];
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      e[s.group] || (e[s.group] = {}), e[s.group][s.name] = s.binding;
    }
    return e;
  }
  function P(t, e) {
    let i = new Set(),
      s = new Set();
    return {
      structs: [...t.structs, ...e.structs].filter(t => !i.has(t.name) && (i.add(t.name), !0)),
      groups: [...t.groups, ...e.groups].filter(t => {
        let e = `${t.name}-${t.binding}`;
        return !s.has(e) && (s.add(e), !0);
      })
    };
  }
  t.s(["ShaderStage", 0, M], 722909), t.s(["generateGpuLayoutGroups", 0, A], 637531), t.s(["generateLayoutHash", 0, E], 107465), t.s(["removeStructAndGroupDuplicates", 0, P], 714427);
  let T = Object.create(null);
  t.s(["GpuProgram", 0, class t {
    constructor(t) {
      this._layoutKey = 0, this._attributeLocationsKey = 0;
      const {
        fragment: e,
        vertex: i,
        layout: s,
        gpuLayout: r,
        name: n
      } = t;
      if (this.name = n, this.fragment = e, this.vertex = i, e.source === i.source) {
        const t = w(e.source);
        this.structsAndGroups = t;
      } else {
        const t = w(i.source),
          s = w(e.source);
        this.structsAndGroups = P(t, s);
      }
      this.layout = s ?? E(this.structsAndGroups), this.gpuLayout = r ?? A(this.structsAndGroups), this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0, this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0, this._generateProgramKey();
    }
    _generateProgramKey() {
      let {
          vertex: t,
          fragment: e
        } = this,
        i = t.source + e.source + t.entryPoint + e.entryPoint;
      this._layoutKey = (0, s.createIdFromString)(i, "program");
    }
    get attributeData() {
      return this._attributeData ?? (this._attributeData = v(this.vertex)), this._attributeData;
    }
    destroy() {
      this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, T[this._cacheKey] = null;
    }
    static from(e) {
      let i = `${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;
      return T[i] || (T[i] = new t(e), T[i]._cacheKey = i), T[i];
    }
  }], 818011);
};
