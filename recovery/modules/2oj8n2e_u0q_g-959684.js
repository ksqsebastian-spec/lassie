// Recovered from 2oj8n2e_u0q_g.js. Runtime module IDs: 959684, 204528, 223349, 948180, 232391, 560370, 751360, 843822, 210677, 815343, 229972, 188578.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(550645),
    r = e.i(818011),
    i = e.i(562140);
  function n(e, t, r) {
    if (e) for (let n in e) {
      let s = t[n.toLocaleLowerCase()];
      if (s) {
        let t = e[n];
        "header" === n && (t = t.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), r && s.push(`//----${r}----//`), s.push(t);
      } else (0, i.warn)(`${n} placement hook does not exist in shader`);
    }
  }
  e.s(["addBits", 0, n], 204528);
  let s = /\{\{(.*?)\}\}/g;
  function a(e) {
    let t = {};
    return (e.match(s)?.map(e => e.replace(/[{()}]/g, "")) ?? []).forEach(e => {
      t[e] = [];
    }), t;
  }
  function o(e, t) {
    let r,
      i = /@in\s+([^;]+);/g;
    for (; null !== (r = i.exec(e));) t.push(r[1]);
  }
  function u(e, t, r = !1) {
    let i = [];
    o(t, i), e.forEach(e => {
      e.header && o(e.header, i);
    }), r && i.sort();
    let n = i.map((e, t) => `       @location(${t}) ${e},`).join("\n"),
      s = t.replace(/@in\s+[^;]+;\s*/g, "");
    return s.replace("{{in}}", `
${n}
`);
  }
  function l(e, t) {
    let r,
      i = /@out\s+([^;]+);/g;
    for (; null !== (r = i.exec(e));) t.push(r[1]);
  }
  function h(e, t) {
    let r = [];
    l(t, r), e.forEach(e => {
      e.header && l(e.header, r);
    });
    let i = 0,
      n = r.sort().map(e => e.indexOf("builtin") > -1 ? e : `@location(${i++}) ${e}`).join(",\n"),
      s = r.sort().map(e => `       var ${e.replace(/@.*?\s+/g, "")};`).join("\n"),
      a = `return VSOutput(
            ${r.sort().map(e => {
        let t;
        return ` ${(t = /\b(\w+)\s*:/g.exec(e)) ? t[1] : ""}`;
      }).join(",\n")});`,
      o = t.replace(/@out\s+[^;]+;\s*/g, "");
    return (o = (o = o.replace("{{struct}}", `
${n}
`)).replace("{{start}}", `
${s}
`)).replace("{{return}}", `
${a}
`);
  }
  function c(e, t) {
    let r = e;
    for (let e in t) {
      let i = t[e];
      r = i.join("\n").length ? r.replace(`{{${e}}}`, `//-----${e} START-----//
${i.join("\n")}
//----${e} FINISH----//`) : r.replace(`{{${e}}}`, "");
    }
    return r;
  }
  e.s(["compileHooks", 0, a], 223349), e.s(["compileInputs", 0, u], 948180), e.s(["compileOutputs", 0, h], 232391), e.s(["injectBits", 0, c], 560370);
  let d = Object.create(null),
    f = new Map(),
    m = 0;
  function x({
    template: e,
    bits: t
  }) {
    var r, i;
    let n,
      s,
      a,
      o = v(e, t);
    if (d[o]) return d[o];
    let {
      vertex: l,
      fragment: c
    } = (r = e, n = (i = t).map(e => e.vertex).filter(e => !!e), s = i.map(e => e.fragment).filter(e => !!e), a = u(n, r.vertex, !0), {
      vertex: a = h(n, a),
      fragment: u(s, r.fragment, !0)
    });
    return d[o] = g(l, c, t), d[o];
  }
  function p({
    template: e,
    bits: t
  }) {
    let r = v(e, t);
    return d[r] || (d[r] = g(e.vertex, e.fragment, t)), d[r];
  }
  function v(e, t) {
    return t.map(e => (f.has(e) || f.set(e, m++), f.get(e))).sort((e, t) => e - t).join("-") + e.vertex + e.fragment;
  }
  function g(e, t, r) {
    let i = a(e),
      s = a(t);
    return r.forEach(e => {
      n(e.vertex, i, e.name), n(e.fragment, s, e.name);
    }), {
      vertex: c(e, i),
      fragment: c(t, s)
    };
  }
  e.s(["compileHighShader", 0, x, "compileHighShaderGl", 0, p], 751360);
  let b = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,
    _ = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,
    y = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,
    S = `

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`;
  e.s(["fragmentGPUTemplate", 0, _, "fragmentGlTemplate", 0, S, "vertexGPUTemplate", 0, b, "vertexGlTemplate", 0, y], 843822);
  let w = {
      name: "global-uniforms-bit",
      vertex: {
        header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
      }
    },
    T = {
      name: "global-uniforms-ubo-bit",
      vertex: {
        header: `
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `
      }
    },
    B = {
      name: "global-uniforms-bit",
      vertex: {
        header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
      }
    };
  e.s(["globalUniformsBit", 0, w, "globalUniformsBitGl", 0, B, "globalUniformsUBOBitGl", 0, T], 210677), e.s(["compileHighShaderGlProgram", 0, function ({
    bits: e,
    name: r
  }) {
    return new t.GlProgram({
      name: r,
      ...p({
        template: {
          vertex: y,
          fragment: S
        },
        bits: [B, ...e]
      })
    });
  }, "compileHighShaderGpuProgram", 0, function ({
    bits: e,
    name: t
  }) {
    let i = x({
      template: {
        fragment: _,
        vertex: b
      },
      bits: [w, ...e]
    });
    return r.GpuProgram.from({
      name: t,
      vertex: {
        source: i.vertex,
        entryPoint: "main"
      },
      fragment: {
        source: i.fragment,
        entryPoint: "main"
      }
    });
  }], 959684);
  let A = {
      name: "color-bit",
      vertex: {
        header: `
            @in aColor: vec4<f32>;
        `,
        main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
      }
    },
    I = {
      name: "color-bit",
      vertex: {
        header: `
            in vec4 aColor;
        `,
        main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
      }
    };
  e.s(["colorBit", 0, A, "colorBitGl", 0, I], 815343);
  let E = {},
    C = {};
  e.s(["generateTextureBatchBit", 0, function (e) {
    return E[e] || (E[e] = {
      name: "texture-batch-bit",
      vertex: {
        header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
        main: `
                vTextureId = aTextureIdAndRound.y;
            `,
        end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
      },
      fragment: {
        header: `
                @in @interpolate(flat) vTextureId: u32;

                ${function (e) {
          let t = [];
          if (1 === e) t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");else {
            let r = 0;
            for (let i = 0; i < e; i++) t.push(`@group(1) @binding(${r++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${r++}) var textureSampler${i + 1}: sampler;`);
          }
          return t.join("\n");
        }(e)}
            `,
        main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${function (e) {
          let t = [];
          if (1 === e) t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else {
            t.push("switch vTextureId {");
            for (let r = 0; r < e; r++) r === e - 1 ? t.push("  default:{") : t.push(`  case ${r}:{`), t.push(`      outColor = textureSampleGrad(textureSource${r + 1}, textureSampler${r + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
            t.push("}");
          }
          return t.join("\n");
        }(e)}
            `
      }
    }), E[e];
  }, "generateTextureBatchBitGl", 0, function (e) {
    return C[e] || (C[e] = {
      name: "texture-batch-bit",
      vertex: {
        header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
        main: `
                vTextureId = aTextureIdAndRound.y;
            `,
        end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
      },
      fragment: {
        header: `
                in float vTextureId;

                uniform sampler2D uTextures[${e}];

            `,
        main: `

                ${function (e) {
          let t = [];
          for (let r = 0; r < e; r++) r > 0 && t.push("else"), r < e - 1 && t.push(`if(vTextureId < ${r}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${r}], vUV);`), t.push("}");
          return t.join("\n");
        }(e)}
            `
      }
    }), C[e];
  }], 229972);
  let P = {
      name: "round-pixels-bit",
      vertex: {
        header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
      }
    },
    V = {
      name: "round-pixels-bit",
      vertex: {
        header: `
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
      }
    };
  e.s(["roundPixelsBit", 0, P, "roundPixelsBitGl", 0, V], 188578);
};
